import scannerpy
import cv2
import numpy as np
import subprocess

from scannerpy import Database, Job, FrameType
from scannerpy.stdlib import readers
from typing import Sequence

################################################################################
# This tutorial shows how to slice streams into sub streams to limit           #
# dependencies between frames.                                                 #
################################################################################

db = Database()
frame = db.sources.FrameColumn()

# When working with bounded or unbounded stateful operations, it is sometimes
# useful to introduce boundaries between sequences of frames which restrict
# state being shared between them. For example, if you are tracking objects
# in a movie, you likely do not want the same trackers when the camera changes
# scenes since the objects you were tracking are no longer there!

# Scanner provides support for limiting state propagation across frames through
# "slicing" operations.
sliced_frame = db.streams.Slice(frame, db.partitioner.all(50))
# Here, we sliced the input frame stream into chunks of 50 elements. What this
# means is that any ops which process 'sliced_frame' will *only* be able to
# maintain state within each chunk of 50 elements.

# For example, let's say we grab the background subtraction op from the previous
# tutorial (02_op_attributes) and want to run it on a static camera video which
# sometimes jumps forward in time:
@scannerpy.register_python_op(bounded_state=60)
class BackgroundSubtraction(scannerpy.Kernel):
    def __init__(self, config):
        self.config = config
        self.alpha = config.args['alpha']
        self.thresh = config.args['threshold']

    def reset(self):
        self.average_image = None

    def execute(self, frame: FrameType) -> FrameType:
        if self.average_image is None:
            self.average_image = frame

        mask = np.abs(frame - self.average_image) < 255 * self.thresh
        mask = np.any(mask, axis=2)

        masked_image = np.copy(frame)
        wmask = np.where(mask)
        masked_image[wmask[0], wmask[1], :] = 0

        self.average_image = (self.average_image * (1.0 - self.alpha) +
                              frame * self.alpha)

        return masked_image


# First, we download the static camera video from youtube
subprocess.check_call(
    'youtube-dl -f 137 \'https://youtu.be/cVHqFqNz7eM\' -o test.mp4',
    shell=True)
[static_table], _ = db.ingest_videos([('static_video', 'test.mp4')],
                                    force=True)

frame = db.sources.FrameColumn()

# We know that there are scene change at frames 5100, 5400, and 5730, To tell
# scanner that we do not want background subtraction to cross these boundaries,
# we can create a 'partitioner' which splits the input. For demonstration, we
# are going to split into only two sequences (5100, 5350) and (5400, 5830).
scene_partitions = db.partitioner.ranges([(5100, 5350), (5400, 5830)])
# Since the second sequence (5400, 5830) has a scene change in it at frame 5730,
# we will see smearing in the output video.

# Now we slice the input frame sequence into these two partitions using a
# slice operation
sliced_frame = db.streams.Slice(frame, partitioner=scene_partitions)

# Then we perform background subtraction and indicate we need 60 prior
# frames to produce correct output
masked_frame = db.ops.BackgroundSubtraction(frame=sliced_frame,
                                            alpha=0.02, threshold=0.05,
                                            bounded_state=60)
# Since the background subtraction operation is done, we can unslice the
# sequence to join it back into a single contiguous stream. You must unslice
# sequences before feeding them back into sinks
unsliced_frame = db.streams.Unslice(masked_frame)

output = db.sinks.Column(columns={'frame': unsliced_frame})
job = Job(op_args={
    frame: static_table.column('frame'),
    output: '04_masked_video',
})
[table] = db.run(output=output, jobs=[job], force=True)

table.column('frame').save_mp4('04_masked')

videos = []
videos.append('04_masked.mp4')

# If you look at around 10 seconds in the output video, you should see a
# sharp transition in the output at the same time as the scene changes. This
# transition is the first cut we introduced using the slicing operator at frame
# 5350. If you look at 23 seconds, you should see smearing as the video changes
# scenes without a cut. This smearing is because we didn't introduce a cut at
# the right place in the second sequence (5400, 5830).

print('Finished! The following videos were written: {:s}'
      .format(', '.join(videos)))
