Search.setIndex({docnames:["about","api","api/scanner","api/scannerpy","api/scannerpy.stdlib","api/stdlib","docker","from_source","getting-started","handbook/concepts","handbook/concepts/database","handbook/concepts/graphs","handbook/custom-ops","handbook/custom-sink","handbook/custom-source","handbook/distributed","handbook/kubernetes","index","installation","programming-handbook","quickstart","tutorial","walkthrough"],envversion:53,filenames:["about.rst","api.rst","api/scanner.rst","api/scannerpy.rst","api/scannerpy.stdlib.rst","api/stdlib.rst","docker.rst","from_source.rst","getting-started.rst","handbook/concepts.rst","handbook/concepts/database.rst","handbook/concepts/graphs.rst","handbook/custom-ops.rst","handbook/custom-sink.rst","handbook/custom-source.rst","handbook/distributed.rst","handbook/kubernetes.rst","index.rst","installation.rst","programming-handbook.rst","quickstart.rst","tutorial.rst","walkthrough.rst"],objects:{"":{scannerpy:[3,0,0,"-"]},"scannerpy.column":{Column:[3,1,1,""]},"scannerpy.column.Column":{id:[3,2,1,""],keyframes:[3,2,1,""],load:[3,2,1,""],name:[3,2,1,""],save_mp4:[3,2,1,""],type:[3,2,1,""]},"scannerpy.common":{ColumnType:[3,1,1,""],DeviceHandle:[3,1,1,""],DeviceType:[3,1,1,""],FrameType:[3,1,1,""],ScannerException:[3,4,1,""]},"scannerpy.common.ColumnType":{Blob:[3,3,1,""],Video:[3,3,1,""]},"scannerpy.common.DeviceType":{CPU:[3,3,1,""],GPU:[3,3,1,""]},"scannerpy.config":{Config:[3,1,1,""],mkdir_p:[3,6,1,""],read_line:[3,6,1,""]},"scannerpy.config.Config":{default_config:[3,5,1,""],default_config_path:[3,5,1,""]},"scannerpy.database":{Database:[3,1,1,""],start_master:[3,6,1,""],start_worker:[3,6,1,""],worker_process:[3,6,1,""]},"scannerpy.database.Database":{bulk_fetch_video_metadata:[3,2,1,""],delete_table:[3,2,1,""],delete_tables:[3,2,1,""],has_gpu:[3,2,1,""],has_table:[3,2,1,""],ingest_videos:[3,2,1,""],load_op:[3,2,1,""],new_table:[3,2,1,""],profiler:[3,2,1,""],register_op:[3,2,1,""],register_python_kernel:[3,2,1,""],run:[3,2,1,""],start_master:[3,2,1,""],start_workers:[3,2,1,""],stop_cluster:[3,2,1,""],summarize:[3,2,1,""],table:[3,2,1,""],wait_on_current_job:[3,2,1,""]},"scannerpy.job":{Job:[3,1,1,""]},"scannerpy.job.Job":{op_args:[3,2,1,""]},"scannerpy.kernel":{Kernel:[3,1,1,""],KernelConfig:[3,1,1,""]},"scannerpy.kernel.Kernel":{close:[3,2,1,""],execute:[3,2,1,""],new_stream:[3,2,1,""],reset:[3,2,1,""]},"scannerpy.op":{Op:[3,1,1,""],OpColumn:[3,1,1,""],OpGenerator:[3,1,1,""],register_python_op:[3,6,1,""]},"scannerpy.op.Op":{inputs:[3,2,1,""],outputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.op.OpColumn":{compress:[3,2,1,""],compress_default:[3,2,1,""],compress_video:[3,2,1,""],lossless:[3,2,1,""]},"scannerpy.partitioner":{TaskPartitioner:[3,1,1,""]},"scannerpy.partitioner.TaskPartitioner":{all:[3,2,1,""],gather:[3,2,1,""],range:[3,2,1,""],ranges:[3,2,1,""],strided:[3,2,1,""],strided_range:[3,2,1,""],strided_ranges:[3,2,1,""]},"scannerpy.profiler":{Profiler:[3,1,1,""],read_advance:[3,6,1,""],unpack_string:[3,6,1,""]},"scannerpy.profiler.Profiler":{statistics:[3,2,1,""],total_time_interval:[3,2,1,""],write_trace:[3,2,1,""]},"scannerpy.protobuf_generator":{ProtobufGenerator:[3,1,1,""],python_to_proto:[3,6,1,""]},"scannerpy.protobuf_generator.ProtobufGenerator":{add_module:[3,2,1,""]},"scannerpy.sampler":{Sampler:[3,1,1,""]},"scannerpy.sampler.Sampler":{All:[3,2,1,""],Gather:[3,2,1,""],Range:[3,2,1,""],Ranges:[3,2,1,""],Repeat:[3,2,1,""],RepeatNull:[3,2,1,""],Stride:[3,2,1,""],StridedRange:[3,2,1,""],StridedRanges:[3,2,1,""]},"scannerpy.sink":{Sink:[3,1,1,""],SinkGenerator:[3,1,1,""]},"scannerpy.sink.Sink":{inputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.source":{Source:[3,1,1,""],SourceGenerator:[3,1,1,""]},"scannerpy.source.Source":{outputs:[3,2,1,""],to_proto:[3,2,1,""]},"scannerpy.stdlib":{bboxes:[4,0,0,"-"],build_flags:[4,0,0,"-"],montage:[4,0,0,"-"],net_descriptor:[4,0,0,"-"],pipelines:[4,0,0,"-"],pose_nms_kernel:[4,0,0,"-"],poses:[4,0,0,"-"],util:[4,0,0,"-"],video:[4,0,0,"-"],writers:[4,0,0,"-"]},"scannerpy.stdlib.bboxes":{iou:[4,6,1,""],nms:[4,6,1,""],proto_to_np:[4,6,1,""]},"scannerpy.stdlib.build_flags":{get_cmake:[4,6,1,""],get_flags:[4,6,1,""],get_include:[4,6,1,""],get_lib:[4,6,1,""],print_cmake:[4,6,1,""],print_flags:[4,6,1,""],print_include:[4,6,1,""],print_lib:[4,6,1,""]},"scannerpy.stdlib.montage":{make_montage:[4,6,1,""]},"scannerpy.stdlib.net_descriptor":{NetDescriptor:[4,1,1,""]},"scannerpy.stdlib.net_descriptor.NetDescriptor":{as_proto:[4,2,1,""],from_file:[4,7,1,""],input_height:[4,3,1,""],input_layer_names:[4,3,1,""],input_width:[4,3,1,""],mean_colors:[4,3,1,""],model_path:[4,3,1,""],model_weights_path:[4,3,1,""],normalize:[4,3,1,""],output_layer_names:[4,3,1,""],pad_mod:[4,3,1,""],preserve_aspect_ratio:[4,3,1,""],transpose:[4,3,1,""],uses_python:[4,3,1,""]},"scannerpy.stdlib.pipelines":{BBoxNMS:[4,1,1,""],detect_faces:[4,6,1,""],detect_poses:[4,6,1,""]},"scannerpy.stdlib.pipelines.BBoxNMS":{close:[4,2,1,""],execute:[4,2,1,""]},"scannerpy.stdlib.pose_nms_kernel":{PoseNMSKernel:[4,1,1,""]},"scannerpy.stdlib.pose_nms_kernel.PoseNMSKernel":{close:[4,2,1,""],execute:[4,2,1,""]},"scannerpy.stdlib.poses":{Pose:[4,1,1,""],nms:[4,6,1,""]},"scannerpy.stdlib.poses.Pose":{Background:[4,3,1,""],DRAW_COLORS:[4,3,1,""],DRAW_PAIRS:[4,3,1,""],FACE_KEYPOINTS:[4,3,1,""],HAND_KEYPOINTS:[4,3,1,""],LAnkle:[4,3,1,""],LEar:[4,3,1,""],LElbow:[4,3,1,""],LEye:[4,3,1,""],LHip:[4,3,1,""],LKnee:[4,3,1,""],LShoulder:[4,3,1,""],LWrist:[4,3,1,""],Neck:[4,3,1,""],Nose:[4,3,1,""],POSE_KEYPOINTS:[4,3,1,""],RAnkle:[4,3,1,""],REar:[4,3,1,""],RElbow:[4,3,1,""],REye:[4,3,1,""],RHip:[4,3,1,""],RKnee:[4,3,1,""],RShoulder:[4,3,1,""],RWrist:[4,3,1,""],draw:[4,2,1,""],face_bbox:[4,2,1,""],face_keypoints:[4,2,1,""],from_buffer:[4,5,1,""],hand_keypoints:[4,2,1,""],pose_keypoints:[4,2,1,""]},"scannerpy.stdlib.util":{"default":[4,6,1,""],download_temp_file:[4,6,1,""],temp_directory:[4,6,1,""]},"scannerpy.stdlib.video":{write_video:[4,6,1,""]},"scannerpy.stdlib.writers":{bboxes:[4,6,1,""],poses:[4,6,1,""]},"scannerpy.streams":{StreamsGenerator:[3,1,1,""]},"scannerpy.streams.StreamsGenerator":{All:[3,2,1,""],Gather:[3,2,1,""],Range:[3,2,1,""],Ranges:[3,2,1,""],Repeat:[3,2,1,""],RepeatNull:[3,2,1,""],Slice:[3,2,1,""],Stride:[3,2,1,""],StridedRange:[3,2,1,""],StridedRanges:[3,2,1,""],Unslice:[3,2,1,""]},"scannerpy.table":{Table:[3,1,1,""]},"scannerpy.table.Table":{column:[3,2,1,""],column_names:[3,2,1,""],committed:[3,2,1,""],id:[3,2,1,""],load:[3,2,1,""],name:[3,2,1,""],num_rows:[3,2,1,""],parent_rows:[3,2,1,""],profiler:[3,2,1,""]},scannerpy:{column:[3,0,0,"-"],common:[3,0,0,"-"],config:[3,0,0,"-"],database:[3,0,0,"-"],job:[3,0,0,"-"],kernel:[3,0,0,"-"],op:[3,0,0,"-"],partitioner:[3,0,0,"-"],profiler:[3,0,0,"-"],protobuf_generator:[3,0,0,"-"],sampler:[3,0,0,"-"],sink:[3,0,0,"-"],source:[3,0,0,"-"],stdlib:[4,0,0,"-"],streams:[3,0,0,"-"],table:[3,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","exception","Python exception"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"],"7":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:exception","5":"py:staticmethod","6":"py:function","7":"py:classmethod"},terms:{"2048x2048":17,"byte":[3,4],"class":[3,4,17,20],"default":[3,4,7,20],"enum":3,"final":20,"function":[3,19,20],"import":20,"int":3,"long":18,"new":[3,17,20],"null":3,"public":20,"return":[3,4,20],"static":[3,4],"true":[3,20],"try":22,"while":20,But:20,For:[3,20],Ops:[1,3,19,20],That:20,The:[3,6,16,18,19,20],Then:[6,20,22],There:20,These:21,Used:3,Will:0,Yes:17,aac:7,abil:3,abl:3,about:[3,17,19,20],abov:[6,7,20],acceler:17,access:[3,17,20],across:17,action:20,activ:[0,17],add:7,add_modul:3,address:3,adopt:20,advanc:19,affect:3,after:[3,7,20],akin:16,alex:0,algorithm:17,all:[3,6,7,18,20],allud:20,alreadi:[3,7,17],also:[6,17,18,20],analysi:0,analyz:20,ani:[7,20],api:[8,17,20],app:[16,20],appear:0,append:20,appli:3,applic:[8,17,20,22],appreci:0,apt:7,arg:3,argument:[3,20],arrai:[3,20],as_proto:4,ascii:3,assum:3,autoconf:7,autogen:7,autom:16,automak:7,automat:[3,7],avail:[3,8,17],avoid:[3,6,20],back:[3,20],background:4,bar:[3,20],base:[3,4,7],bash:[6,7],basic:[8,20,21],batch:[3,4],bbox_a:4,bbox_b:4,bboxnm:4,been:17,befor:[3,20],below:17,benefit:17,between:[0,3],big:17,billion:17,bin:6,binari:3,bind:20,bitrat:3,blob:3,block:[3,20],bool:3,boost:7,bounded_st:3,box:18,brew:7,buf:[3,4],build:[6,17,18,20],built:[18,20],builtin_function_or_method:3,bulk:3,bulk_fetch_video_metadata:3,caff:[6,7,17,18],call:[3,20],can:[3,6,8,16,17,18,20,21,22],carnegi:0,cfg:3,chang:[17,20],cheaper:17,check:[3,6,7,8,20],checkout:8,checkpoint_frequ:3,chrome:3,citat:17,cite:0,clang:7,classmethod:4,click:[3,22],clip:20,close:[3,4],cloud:[3,6,17],cluster:16,cmake:7,code:[3,20],codec:3,col:3,collabor:0,collect:[3,17,19,20],column:[1,17,20],column_nam:3,columntyp:3,com:[6,16,20,22],come:20,command:[6,7,20],commerci:17,commit:[3,20],common:1,compat:18,compil:7,complet:20,compon:8,compos:[6,17,22],compress:[3,17],compress_default:3,compress_video:3,comput:[3,16,17],concatent:3,concurr:3,config:[1,4,7],config_path:3,configur:[3,6],congratul:7,connect:3,consid:3,consist:[6,20],construct:[3,20],consum:17,contact:0,contain:[3,6,16,17],content:[1,20],copi:[3,20],core:17,coreutil:7,correspond:3,cpio:7,cpp:3,cpu:[3,6,22],cpu_pool:3,creat:[3,6,17,20],crichton:[0,17],cuda:[6,7,17],cudnn6:6,cudnn7:6,cudnn:[6,7],curl:7,current:[3,20],custom:[3,19],data:[3,17,20],databas:1,dataflow:17,dataset:17,db_path:3,deal:3,debug:3,decod:17,default_config:3,default_config_path:3,defin:3,delet:3,delete_t:3,depend:[6,7,18],deploy:16,depth:17,describ:[3,20],descript:3,deseri:3,design:20,detail:[3,19,22],detect:[17,20],detect_fac:4,detect_pos:4,dev:7,develop:17,devic:3,device_id:3,device_typ:3,devicehandl:3,devicetyp:3,didn:20,differ:20,direct:[7,22],directli:[3,20],directori:[7,20],directoroi:20,discuss:20,displai:3,distribut:[6,17],docker:[17,18,22],document:17,doe:3,domain:3,done:20,download:20,download_temp_fil:4,downsampl:20,draw:4,draw_color:4,draw_pair:4,draw_threshold:4,due:3,dynam:3,each:[3,7,20],easi:3,easiest:[16,18],effect:3,effici:0,eigen:7,either:[3,20],element:3,embodi:17,empti:3,enabl:3,end:3,engin:[16,17],entri:7,entrypoint:3,environ:6,essenti:[6,7],etc:17,even:20,eventu:3,everi:[3,20],exampl:[3,8,16,20,21,22],exampleop:3,except:3,exclus:3,execut:[3,4,17],exist:[3,17],exit:20,expand:3,expect:3,explain:[19,20],extend:20,extra:3,face:[17,20],face_bbox:4,face_keypoint:4,face_model_weights_path:4,face_prototxt_path:4,facilit:17,fail:3,failur:3,fairli:20,fals:[3,4],fast:[17,20],fatahalian:[0,17],fault:17,fdk:7,featur:[3,8,20,21],ffmpeg:7,field:17,file:[3,6,20],filesystem:20,finish:[7,20],first:[6,17,20],flag:[3,20],fledg:8,flip:18,flow:17,fmt:3,fns:3,follow:[7,20,22],forc:3,form:[17,20],format:[3,20],found:[16,21],fourteen:17,fps:[3,4],frame:[3,4,17,20],frame_width:4,framecolumn:20,frames_per_row:4,frametyp:3,framework:[17,18],from:[3,17,18,20],from_buff:4,from_fil:4,front:20,full:[6,8],gather:3,gdb:3,gener:[3,20],get:[6,7,16,17,18,22],get_cmak:4,get_flag:4,get_includ:4,get_lib:4,gflag:7,git:7,github:[8,16],githubusercont:[6,22],given:[3,20],global:3,glog:7,gnutl:7,going:20,googl:[3,16],googleapi:20,gpu:[3,6,17],gpu_pool:3,graph:[3,17],group:3,group_siz:3,grpc:7,grpc_timeout:3,guid:[19,20],halid:17,hand_keypoint:4,hand_model_weights_path:4,hand_prototxt_path:4,handbook:17,handl:[3,8],hanrahan:[0,17],happen:20,hardwar:17,has:[3,7,17,18,20],has_gpu:3,has_tabl:3,have:[3,6,8,17,20],haven:20,hdf5:7,height:20,help:[3,6],here:[16,20,21],heterogen:17,high:[3,17],histogram:3,homebrew:7,hour:17,how:[3,7,8,19,20,22],howev:[17,20],http:[6,16,20,22],human:[3,17],hundr:17,ident:3,ignor:3,imag:[6,16,17,18],img:4,implement:[3,17],includ:17,increas:3,independ:3,index:[3,20],indic:[3,20],infer:3,inform:3,inges_video:20,ingest:3,ingest_video:[3,20],initi:3,inplac:[3,20],input:[3,4,17,20],input_column:3,input_frame_column:4,input_height:4,input_layer_nam:4,input_width:4,insert:3,insid:[6,7,20],instal:[3,6,17,20,22],instanc:[3,6],instanti:20,instead:[3,20],intead:6,intel:7,interact:[8,17,20],interest:20,intermedi:3,intern:3,interv:3,invok:3,io_packet_s:3,iou:4,ipynb:22,its:[3,6,7],job:1,job_id:3,job_nam:3,join:3,jupyt:[8,17,20],just:[3,20],keep:20,kei:8,kernel:[1,4,17],kernelconfig:3,keyfram:3,keyframe_dist:3,keypoints_buff:4,keyword:3,known:17,kubernet:[17,19],kwarg:3,label:17,lame:7,languag:17,lankl:4,laptop:17,larg:17,latenc:3,later:20,ld_library_path:7,lear:4,learn:[7,17,20],left:3,legaci:3,lelbow:4,length:17,let:20,level:[17,20],leveldb:7,leverag:17,ley:4,lhip:4,libass:7,libatla:7,libboost:7,libbz2:7,libc:7,libcap:7,libcurl3:7,libeigen3:7,libfreetype6:7,libgflag:7,libgnutl:7,libgoogl:7,libgtest:7,libgtk2:7,libhdf5:7,libjpeg:7,liblapack:7,libleveldb:7,liblmdb:7,liblzma:7,libopenbla:7,libopenjpeg:7,libpng:7,libpq:7,librari:[1,3,17,20],libsdl2:7,libsnappi:7,libssl:7,libsuitespars:7,libtbb:7,libtheora:7,libtool:7,libva:7,libvdpau:7,libvorbi:7,libvpx:7,libx264:7,libxcb1:7,libxcb:7,libxvidcor:7,light:16,lightweight:6,like:[3,17,18,20],limit:3,linux:6,list:[3,17,20],lknee:4,llvm:7,lmdb:7,load:[3,20],load_op:3,load_sparsity_threshold:3,local:[6,7],local_path:4,localhost:22,locat:20,logic:17,look:[8,20],lookup:3,lossless:3,lshoulder:4,lwrist:4,machin:[3,6,16,17],machine_param:3,mai:[3,20],main:20,major:7,make:7,make_montag:4,manag:[3,6,16,17,20],mani:[3,17,21],map:17,master:[3,6,16,22],master_address:3,mean:20,mean_color:4,measur:3,mellon:0,mercuri:7,method:3,million:17,mine:17,mkdir:7,mkdir_p:3,model:[17,20],model_path:4,model_weights_path:4,models_path:4,modern:17,modul:1,more:[3,8,17,19,20,22],movi:17,mp4:3,multi:[17,20],multipl:[3,17],must:3,mutual:3,name:[3,20],nasm:7,neck:4,need:[3,20],netdescriptor:4,new_stream:3,new_tabl:3,newli:20,next:20,nms:4,no_workers_timeout:3,node:[3,17,20],non:3,none:[3,4],normal:4,nose:4,notebook:22,now:[6,20],nproc:7,num_row:3,num_work:3,number:[3,17,20],numer:8,numpi:[3,20],nvidia:6,obj:3,object:[3,4,20],offset:3,onc:[8,20],one:[3,20],onli:[3,6,17,20],op_arg:[3,20],op_nam:3,opcolumn:3,opencv:[6,7,17,18],oper:[3,17,20],opgener:3,oppos:20,ops:[3,20],optim:17,option:3,opu:7,order:20,orient:17,orig_box:4,orig_pos:4,other:[3,20],otherwis:[3,20],our:[18,20],out:[6,7,8,16,18,20],output:[3,17,20],output_column:3,output_fram:20,output_layer_nam:4,output_nam:[3,4],output_sampl:4,output_sampler_arg:4,output_t:20,over:[3,20],overlapthresh:4,overwrit:3,own:[16,17,20],pack:17,packet:3,pad_mod:4,paper:17,paramet:3,parent_row:3,part:[0,3,17],particular:3,partit:3,partition:1,pass:[3,20],past:20,path:[3,4,7,22],pattern:20,peopl:17,per:[3,17],perform:[3,17,20],persist:20,piec:20,pip3:[6,22],pip:7,pipelin:[3,20],pipeline_instances_per_nod:3,pixel:17,pkg:7,place:20,platform:[6,17],pleas:0,point:20,pokewatchdog:3,pom:[0,17],popular:17,port:[3,6,22],pose:17,pose_keypoint:4,pose_model_weights_path:4,posenmskernel:4,posit:3,postgresql:7,potenti:17,pre:18,prebuilt:6,preemptibl:17,prefetch_table_metadata:3,preserve_aspect_ratio:4,previou:3,print:20,print_cmak:4,print_flag:4,print_includ:4,print_lib:4,proceed:0,process:[3,6,17],produc:[3,17],product:17,profil:1,program:[17,20],progress:[3,20],project:0,proto:3,proto_nam:3,proto_path:3,proto_to_np:4,protobuf:[3,4,7],protobuf_gener:1,protobufgener:3,prototxt_path:4,provid:[3,6,7,8,16,17,19,20,21],put:20,pybind:7,python3:[7,20],python:[1,17,20],python_to_proto:3,pythonpath:7,qualiti:3,queri:[7,20],question:0,quickstart:[8,17],rais:3,ran:20,random:20,rang:3,rankl:4,raw:[6,22],rc5:7,read:[3,17],read_adv:3,read_lin:3,readabl:3,readi:20,real:[8,22],rear:4,reason:3,recommend:22,refer:17,regist:3,register_op:3,register_python_kernel:3,register_python_op:3,registri:3,relbow:4,relev:3,repeat:3,repeatnul:3,replac:20,repo:7,repres:[3,17,20],represent:3,request:3,requir:7,research:[0,6,16,22],reset:3,resiz:20,resized_fram:20,resized_t:20,resolut:20,resourc:3,respect:3,result:3,retriev:3,return_profil:4,rey:4,rhip:4,rknee:4,row:[3,20],rshoulder:4,run:[3,6,16,17,22],runtim:[3,6],rwrist:4,sai:20,same:[3,20],sampl:[3,17,20],sampled_fram:20,sampler:1,save:20,save_mp4:[3,20],scalabl:17,scale:[0,3,16],scanner:[0,1,6,8,18,19,21,22],scannerexcept:3,scannerpi:[1,20],scannerresearch:6,scratch:17,script:7,sdl:7,second:20,section:20,see:[3,17,20],select:[3,20],sequenc:[3,17,20],serial:[3,7],serv:3,server:[3,17,22],servic:6,session:6,set:[3,6,7,21],shape:20,share:3,shm0:7,should:[3,6,20],show_progress:3,shown:20,shtool:7,shutdown:3,side:18,siggraph:[0,17],signific:17,simpl:[8,20],simpli:20,simplifi:17,sinc:[17,20],singl:[3,17,20],sink:[1,20],sink_arg:3,sinkgener:3,size:[3,20],slice:3,slide:17,smooth:17,snappi:7,so_path:3,softwar:17,some:19,sourc:[1,4,17,18,20],source_arg:3,sourcegener:3,space:[3,20],spars:17,spawn:3,special:[17,20],specif:3,specifi:[3,7,20],split:3,sql:20,ssh:3,standard:[1,17,20],stanford:[0,17],start:[3,6,7,17,18,22],start_clust:3,start_mast:3,start_work:3,state:[3,17],statist:3,statu:3,stencil:[3,17],step:[16,20,21],stereo:17,still:20,stitch:17,stop:3,stop_clust:3,storag:[3,20],store:[17,20],str:3,stream:[1,20],streamsgener:3,stride:[3,20],strided_rang:3,stridedrang:3,string:3,structur:17,subset:3,substream:3,success:6,summar:[3,20],support:[3,6,7,17,18],sure:7,surround:17,swig:7,synthesi:17,system:[8,17,19],szip:7,tabl:[1,17,20],table_nam:[3,20],take:[3,8,18,20],talk:8,target:3,task:[3,17],task_timeout:3,taskpartition:3,tasks_in_queue_per_pu:3,technic:17,tell:[7,20],temp_directori:4,templates_path:4,tempor:17,tensorflow:[17,20],test:6,texi2html:7,texinfo:7,thei:[3,7],them:[3,20],theora:7,thi:[3,6,7,16,20],thick:4,think:6,third:20,those:[7,20],three:20,through:[8,20,22],time:[3,18,20],to_proto:3,togeth:[3,20],told:20,toler:17,toml:3,too:17,tool:16,top:[3,7,20],total_time_interv:3,trace:3,track:17,transform:20,transpos:4,tree:16,tupl:[3,20],tutori:[8,17,20,22],two:20,typ:3,type:[3,4,17],typic:20,unbounded_st:3,under:20,understand:[8,22],union:3,univers:[0,17],unless:3,unpack_str:3,unslic:3,unspecifi:3,until:[3,20],unzip:7,upgrad:[6,22],url:4,usag:3,use:[0,3,6,8,17,19,20],used:[3,17,20,22],useful:[6,17,20],user:20,uses:[3,6],uses_python:4,using:[3,6,7,8,16,18,19,20,22],util:[3,6,17],valu:3,variabl:3,variad:3,variadic_input:3,veri:20,version:20,via:[3,16],video:[0,3,6],videos_to_process:20,virtual:6,visit:[3,22],visual:[3,17],wai:[16,18],wait:[3,20],wait_for_server_shutdown:3,wait_on_current_job:3,walk:20,walkthrough:[8,17,20],want:[6,20],warmup:3,watchdog:3,weight:16,were:6,wget:[6,7,20,22],what:[3,17,20],when:[3,17],where:[3,7,20],which:[3,6,8,17,20],whose:17,wide:7,width:[4,20],window:17,without:[3,17,20],work:20,work_packet_s:3,worker:[3,6],worker_process:3,would:3,write:[3,17,19,20],write_trac:3,write_video:4,x264:7,x265:7,xfixes0:7,xvid:7,yasm:7,yet:20,yield:3,yml:[6,22],you:[0,3,6,7,8,17,20,22],your:[0,6,7,16,17,20,22],yourself:22,zlib1g:7},titles:["Citation &amp; About","API Reference","Scanner C++ API","Scanner Python API","scannerpy.stdlib package","Scanner Standard Library","Docker","Building Scanner from source","Getting Started","Concepts","Database","Computation Graphs","Writing a custom Op","Writing a custom Sink","Writing a custom Source","Using a Cluster","Scanner on Kubernetes","Scanner: Efficient Video Analysis at Scale","Installation","Programming Handbook","Quickstart","Tutorial","Interactive Jupyter Walkthrough"],titleterms:{"export":20,Ops:[5,9,11],Using:15,about:0,analysi:17,api:[1,2,3],bbox:4,bbox_nms_kernel:4,build:7,build_flag:4,citat:0,cluster:15,column:3,common:3,comput:[9,11,20],concept:9,config:3,content:[3,4],custom:[12,13,14],databas:[3,9,10,20],defin:20,dep:7,docker:6,effici:17,execut:20,featur:17,from:7,get:8,graph:[9,11,20],handbook:19,ingest:20,instal:[7,18],interact:22,job:[3,9,20],jupyt:22,kei:17,kernel:3,kubernet:16,level:7,librari:5,loader:4,maco:7,modul:[3,4],montag:4,mp4:20,multipl:20,net_descriptor:4,packag:[4,7],paper:0,parser:4,partition:3,pipelin:4,pose:4,pose_nms_kernel:4,process:20,profil:3,program:19,protobuf_gener:3,python:[3,7],quickstart:20,read:20,refer:1,result:20,run:[7,20],sampler:3,scale:17,scanner:[2,3,5,7,16,17,20],scannerpi:[3,4,7],sink:[3,5,9,11,13],sourc:[3,5,7,9,11,14],standard:5,start:[8,20],stdlib:4,stream:3,submodul:4,system:7,tabl:3,tutori:21,ubuntu:7,util:4,video:[4,17,20],walkthrough:22,write:[12,13,14],writer:4}})