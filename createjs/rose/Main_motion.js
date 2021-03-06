		var canvas;
		var stage;
		var center_x;
		var center_y;
		var soundInstance;
		var analyserNode;
		var freqByteData;
		var src = "http://okaal.matrix.jp/createjs/rose/tw060.mp3";
		var cnt = 0;
		var size =12;
		var size_count=30;
		var count_i=30;
		var count_j=22;
		var count = 0;
		var all_j=0;
		var time = 0;
		var flag = false;
		var start_flag = false;
		var obj = new Array();
		var obj_sound = new Array();
		var text;
		var text_title;
		var messageField;
		var max_peak=500;
		var peak=0;
		var peak_wave_x = 0;
		var peak_wave_y = 0; 
		var mybitmap_sound;
		var image_sound;
		var file_sound = "musical7.png"
		var context;

		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;

   			var queue = new createjs.LoadQueue(true);
    		queue.installPlugin(createjs.Sound);
   			var manifest = [{id:"sound",src:"./tw060.mp3"},];
    		queue.loadManifest(manifest,true);  
    		queue.addEventListener('fileload',handleLoad);	

			var loader_sound = new createjs.LoadQueue(false);
			loader_sound.addEventListener("fileload",draw_sound);
			loader_sound.loadFile(file_sound);
			mybitmap_sound = new createjs.Bitmap(file_sound);
			function draw_sound(){
				image_sound = mybitmap_sound.image;
			}



			for(var i=count_i;i>=1;i--){
				j=count_j;
				all_j = count_j * 10-1;	
				obj_sound[i] = new Array();
				var shape = new createjs.Shape();
				shape.graphics.beginStroke("#ffffff");
				shape.graphics.beginFill("#ff1493");
				shape.graphics.setStrokeStyle(0.25);
				shape.graphics.moveTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					for(var j=count_j-1;j>=0;j--){
						if(j == 10){
							all_j -= 2;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;						
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(0.8*size*Math.cos((360/count_j)*j*Math.PI/180),0.8*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 9){
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(1*size*Math.cos((360/count_j)*j*Math.PI/180),1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 8){
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(1.2*size*Math.cos((360/count_j)*j*Math.PI/180),1.2*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 7){
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(1.1*size*Math.cos((360/count_j)*j*Math.PI/180),1.1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 6){
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;	
							shape.graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
							}
						else{
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave_y*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							obj_sound[i][all_j] = 0;
							shape.graphics.lineTo(peak_wave_x*Math.cos((360/count_j)*j*Math.PI/180)+size*Math.cos((360/count_j)*j*Math.PI/180),peak_wave_y*Math.sin((360/count_j)*j*Math.PI/180)+size*Math.sin((360/count_j)*j*Math.PI/180));
								
						}
					}
					shape.graphics.endFill();
					shape.x = stage.canvas.width/2;
					shape.y = 700;

					if(i == count_i){
						tween = new createjs.Tween.get(shape,{loop:false})
			 			.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
		 				.wait(1000);
		 				//tween.call(onMusicStart);
					}
					else{

						tween = new createjs.Tween.get(shape,{loop:false})
		 				.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
		 				.wait(1000);				
					}
					

					shape.alpha = 0.18; 
					stage.addChild(shape);
					stage.update();
					obj[i] = shape;
				}
				/*
			font = 28 + "px "+"Sacramento";
			text_title = new createjs.Text("Rose()",font, "#000000");
			text_title.textBaseline = "alphabetic";
			text_title.regX = 0;
			text_title.x = stage.canvas.width/2-35;
			text_title.y = stage.canvas.height/2-30;
			stage.addChild(text_title);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Masashi Okada",font, "#000000");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-65;
			text.y = stage.canvas.height/2 + 35;
			stage.addChild(text);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Generative Art",font, "#000000");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-65;
			text.y = stage.canvas.height/2 + 70;
			stage.addChild(text);


			mybitmap_sound.regX = mybitmap_sound.width/2;
			mybitmap_sound.regY = mybitmap_sound.height/2;
			mybitmap_sound.x = stage.canvas.width/2-10;
			mybitmap_sound.y = stage.canvas.height/2+170;
			mybitmap_sound.alpha = 1;
			stage.addChild(mybitmap_sound);

			messageField = new createjs.Text("Loading Audio", "bold 25px Cantarell", "#000000");
            messageField.x = stage.canvas.width/2 -80;
            messageField.y = stage.canvas.height/2+120;
            stage.addChild(messageField);
*/
			stage.update();

			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);

			console.log("music 1");	

			function handleLoad(evt) {
				console.log("music");
				//var userAgent = window.navigator.userAgent.toLowerCase();
				//if (userAgent.indexOf('msie') != -1) {
				//	createjs.FlashPlugin.swfPath = "./FlashAudioPlugin.swf";
				//	createjs.Sound.registerPlugins ([ createjs.FlashPlugin ]);
				//	context = createjs.Sound.activePlugin.context;
				//	console.log("IE");
				//}
				//else {
					//createjs.Sound.registerPlugins ([ createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashPlugin ]);
					context = createjs.Sound.activePlugin.context;
				//	console.log("OTHER");
				//}
				
			    

			    analyserNode = context.createAnalyser();
			    analyserNode.fftSize = 32;
			    analyserNode.smoothingTimeConstant = 0.85;
			    analyserNode.connect(context.destination);

			    var dynamicsNode = createjs.Sound.activePlugin.dynamicsCompressorNode;
			    dynamicsNode.disconnect();
			    dynamicsNode.connect(analyserNode);
			    freqByteData = new Uint8Array(analyserNode.frequencyBinCount);

	            if (createjs.Touch.enable(stage)) {
	                messageField.text = "Touch to start";
	            } else {
	                messageField.text = "Click to start";
	            }
	            stage.update();

	            stage.addEventListener("stagemousedown", startPlayback);
	        }
		}

        function startPlayback(evt) {
            stage.removeEventListener("stagemousedown", startPlayback);
            stage.removeChild(mybitmap_sound);
            if(soundInstance) {return;}
            stage.removeChild(messageField);
		    soundInstance = createjs.Sound.play("sound",{loop:-1});
		    soundInstance.volume = 0.5;
		    stage.update();

			onComplete();

		}
		function onComplete(){
			start_flag = true;
		/*	if(flag == true){
				flag = false;
				for(var i=count_i;i>=1;i--){
					if(i == count_i){
						tween = new createjs.Tween.get(obj[i],{loop:false})
						.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
						.wait(1000);
						tween.call(onComplete);
					}
					else{
						tween = new createjs.Tween.get(obj[i],{loop:false})
				 		.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
				 		.wait(1000);				
					}
				}
			}
			else{
				flag = true;
				for(var i=count_i;i>=1;i--){
					if(i == count_i){
						tween = new createjs.Tween.get(obj[i],{loop:false})
				 		.to({scaleX:8*(i/10),scaleY:8*(i/10),rotation:(-1*(100*i))%360},5000+i*200, createjs.Ease.quintOut)
				 		.wait(1000);
				 		tween.call(onComplete);
					}
					else{
						tween = new createjs.Tween.get(obj[i],{loop:false})
				 		.to({scaleX:8*(i/10),scaleY:8*(i/10),rotation:(-1*(100*i))%360},5000+i*200, createjs.Ease.quintOut)
				 		.wait(1000);				
					}
				}
			}
			*/
		}
		function act(evt){
			stage.update();

        	if((start_flag == true)&&(time % 4 == 0)){
				count++;
        		analyserNode.getByteFrequencyData(freqByteData);
        		peak = 0;
		        for(var k = 0; k < freqByteData.length; k++) peak += freqByteData[k];
        		//console.log(freqByteData.length);		        
        		if(peak > max_peak){
        			max_peak = peak;
        		}
		        console.log(peak);
		        if(peak <=max_peak/6){
		        	peak = 0;
		        }
		        else if(peak <= 2*max_peak/6){
		        	peak = 0.3;
		        }
		        else if(peak <= 3*max_peak/6){
		        	peak = 0.7;
		        }
		        else if(peak <= 5.1*max_peak/6){
		        	peak = 1.3;
		        }
		        else if(peak <= 5.4*max_peak/6){
		        	peak = 2.4;
		        }
		        else{
		        	peak = 3.0;
		        }

				for(var i=count_i;i>=1;i--){
        			if(count >=(count_j*10-1)){
        				count = 0;
        			}
        			obj_sound[i][count] = peak;

					j=count_j;
					all_j = count_j * 10-1;	
					obj[i].graphics.clear();
					obj[i].graphics.beginStroke("#ffffff");
					obj[i].graphics.beginFill("#ff1493");
					obj[i].graphics.setStrokeStyle(0.25);
					obj[i].graphics.moveTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					for(var j=count_j-1;j>=0;j--){
						if(j == 10){
							all_j -= 2;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}						
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(0.8*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(0.8*size*Math.cos((360/count_j)*j*Math.PI/180),0.8*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 9){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+0.8*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(1*size*Math.cos((360/count_j)*j*Math.PI/180),1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 8){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
								if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.2*size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(1.2*size*Math.cos((360/count_j)*j*Math.PI/180),1.2*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 7){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];	
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.cos((360/count_j)*j*Math.PI/180)-1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(1.1*size*Math.sin((360/count_j)*j*Math.PI/180)-1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.2*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(1.1*size*Math.cos((360/count_j)*j*Math.PI/180),1.1*size*Math.sin((360/count_j)*j*Math.PI/180));
						}
						else if(j == 6){
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}	
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;	
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
								if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+1.1*size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}	
							obj[i].graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
							}
						else{
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+1*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+2*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+3*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+4*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+5*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+6*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+7*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+8*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = obj_sound[i][all_j];
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.cos((360/count_j)*j*Math.PI/180)-size*Math.cos((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.cos((360/count_j)*(j+1)*Math.PI/180),peak_wave*Math.sin(360/(count_j*10)*all_j*Math.PI/180)+9*(size*Math.sin((360/count_j)*j*Math.PI/180)-size*Math.sin((360/count_j)*(j+1)*Math.PI/180))/10+size*Math.sin((360/count_j)*(j+1)*Math.PI/180));
							all_j -= 1;
							var peak_wave = 0;
							if(obj_sound[i][all_j] >=0){
								obj_sound[i][all_j] -= 0.18;
							}
							if(obj_sound[i][all_j] <=0){
								obj_sound[i][all_j] = 0;
							}
							obj[i].graphics.lineTo(peak_wave*Math.cos((360/count_j)*j*Math.PI/180)+size*Math.cos((360/count_j)*j*Math.PI/180),peak_wave*Math.sin((360/count_j)*j*Math.PI/180)+size*Math.sin((360/count_j)*j*Math.PI/180));
								
						}
					}
					obj[i].graphics.endFill();
				}
			}
			time++;
		}