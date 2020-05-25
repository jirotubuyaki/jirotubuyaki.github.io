
		var canvas;
		var stage;
		var center_x;
		var center_y;
		var font_type = "Cantarell";
		var font_in;
		var graphics_out;
		var count=Math.PI*1.5;
		var out;
		var text_count=0;
		var item = 14;
		var time =0;
		var flag= false;

		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2-28;

			ImageRandom(stage,center_x,center_y);
			//ImageRandom(stage,400,100);
			//ImageRandom(stage,200,300);
			//ImageRandom(stage,400,300);
			//ImageRandom(stage,200,500);
			//ImageRandom(stage,400,500);
			/*
				color +=20;
				color_16 = color.toString(16);
				color_str = "#" + color_16 + color_16 + color_16;

    			shape_base = new createjs.Shape(graphics_base);
				stage.addChild(shape_base);
				graphics = new createjs.Graphics();
				graphics.setStrokeStyle(circle_bold)
    			.beginStroke(color_str)
    			.arc(0,0,circle_size -circle_bold*i,Math.PI*1.5,(260-(i*10))* Math.PI /180);

				shape = new createjs.Shape(graphics);
    			shape.regX = 0;
    			shape.regY = 0;
    			shape.x = center_x;
    			shape.y = center_y;
    			shape.alpha=0.6;

				stage.addChild(shape);
				*/


			

			stage.update();



		}
		var ImageRandom = function(parent_in,x_in,y_in){

			//var circle_size = 160;
			var circle_bold = 15;
			var circle_size = 300;
			var color = 0;
			var color_16_1 = color.toString(16);
			var color_16_2 = color.toString(16);
			var color_16_3 = color.toString(16);
			var out_obj = new Array();
			var graphics_out_obj = new Array();
			var out_point = new Array();
			var out_point_obj = new Array();
			var out_control_point = new Array();
			var out_control_point_obj = new Array();
			var start_point_obj = new Array();
			var color_obj = new Array();
			var color_16_1_obj = new Array();
			var color_16_2_obj = new Array();
			var color_16_3_obj = new Array();
			var color_16_1_back_obj = new Array();
			var color_16_2_back_obj = new Array();
			var color_16_3_back_obj = new Array();
			var out_line_obj = new Array();
			var flag = false;
			var color_flag = false;
			var color_state = new Array();
			var count_time=0;
			var time_end = 120;
    		var scale_point = 3;
			var scale_control = 3.5;

			for(var j=0;j<item;j++){
				color_state[j] = parseInt(Math.random()*4);
				var out_point = new Array();
				var out_control_point = new Array();

				color = parseInt(Math.random()*100+154);
				color_16_1_obj.push(color);
				color_16_1_back_obj.push(color);
				color_16_1 = color.toString(16);

				color = parseInt(Math.random()*50+50);
				color_16_2_obj.push(color);
				color_16_2_back_obj.push(color);
				color_16_2 = color.toString(16);

				color = parseInt(Math.random()*50+104);
				color_16_3_obj.push(color);
				color_16_3_back_obj.push(color);
				color_16_3 = color.toString(16);

				color_str = "#" + color_16_1 + color_16_2 + color_16_3;

				color_obj.push(color_str);

				var graphics_out = new createjs.Graphics();
				graphics_out.beginStroke(color_str)
    			.beginFill(color_str);
    			var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
     			var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;

    			out_line_obj[0] = new createjs.Point(circle_random*Math.cos(0*Math.PI/180),circle_random*Math.sin(0*Math.PI/180));
    			start_point_obj.push(circle_random);
    			graphics_out.moveTo(out_line_obj[0].x,out_line_obj[0].y);
    			graphics_out.quadraticCurveTo(circle_random_2*Math.cos(10*Math.PI/180),circle_random_2*Math.sin(10*Math.PI/180),circle_random*Math.cos(20*Math.PI/180),circle_random*Math.sin(20*Math.PI/180));

    			out_control_point.push(circle_random_2);
    			out_point.push(circle_random);

    			for(var i=20;i<360;i=i+20){
     				var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
    				var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;


    				if(i+20 ==360){
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),out_line_obj[0].x,out_line_obj[0].y);
    					out_control_point.push(circle_random_2);
    					out_point.push(out_line_obj[0]);

    				}
    				else{
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),circle_random*Math.cos((i+20)*Math.PI/180),circle_random*Math.sin((i+20)*Math.PI/180));
    					out_control_point.push(circle_random_2);
    					out_point.push(circle_random);

    				}

    			}
      		//	graphics_out.quadraticCurveTo(circle_random_2*Math.cos(340*Math.PI/180),circle_random_2*Math.sin(340*Math.PI/180),out_line_obj[0].x,out_line_obj[0].y);

    			out = new createjs.Shape(graphics_out);
    			out_obj.push(out);
    			graphics_out_obj.push(graphics_out);
    			out_control_point_obj.push(out_control_point);
    			out_point_obj.push(out_point);

    			var rand = Math.random();
    			if(rand <0.25){
    				out.x = x_in + Math.random()*15;
    				out.y = y_in + Math.random()*15;
    			}
    			else if(rand <0.5){
    				out.x = x_in - Math.random()*15;
    				out.y = y_in + Math.random()*15;
    			}
    			else if(rand <0.75){
    				out.x = x_in + Math.random()*15;
    				out.y = y_in - Math.random()*15;
    			}
    			else if(rand <=1){
    				out.x = x_in - Math.random()*15;
    				out.y = y_in - Math.random()*15;
    			}

    			//out.rotation += Math.random()*50;

      			out.regX = out.width/2;
    			out.regY = out.height/2;

       			out.alpha=0.27;


				parent_in.addChild(out);


			}	
			createjs.Ticker.setFPS(50);
			createjs.Ticker.addEventListener("tick", function() {
			if ($('#top_contents').css('display') == 'none'){
						return;
			}
				for(var j=0;j<item;j++){
    				if(flag == false){
    					if(count_time == 3){
							start_point_obj[j] += (20 + circle_size-circle_bold*j -start_point_obj[j]) /(time_end/2);
    					}
    					else{
    						start_point_obj[j] -= 1.5*Math.random()*(scale_point-time*(scale_point/time_end));
    					}
    					if(color_flag == false){
	    					if((color_16_1_obj[j] >30)&&(color_state[j] == 0)){
	     						color_16_1_obj[j] -= 1;				
	    					}
	    					else if(color_16_1_obj[j] == 30){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_obj[j] <144)&&(color_state[j] == 1)){
	     						color_16_2_obj[j] += 1; 	  						
	    					}
	    					else if(color_16_2_obj[j] == 144){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_obj[j] <255)&&(color_state[j] == 2)){
	     						color_16_3_obj[j] += 1;  			 						
	    					}
	    					else if(color_16_3_obj[j] == 150){
	    						color_state[j] = 0;
	    					}
    					}
    					else{
	    					if((color_16_1_back_obj[j] >color_16_1_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j] += 1;					
	    					}
	    					else if(color_16_1_back_obj[j] == color_16_1_obj[j]){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_back_obj[j]>color_16_2_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j] -= 1;					
	    					}
	    					else if(color_16_2_back_obj[j] == color_16_2_obj[j]){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_back_obj[j] <color_16_3_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j] -= 1;					
	    					}
	    					else if(color_16_3_back_obj[j] == color_16_3_obj[j]){
	    						color_state[j] = 0;
	    					}
    					}
    					color_16_1 = color_16_1_obj[j].toString(16);
    					color_16_2 = color_16_2_obj[j].toString(16);
    					color_16_3 = color_16_3_obj[j].toString(16);

						var color_str = "#" + color_16_1 + color_16_2 + color_16_3;

						color_obj[j] = color_str;

    				}
    				else{
    					if(count_time == 3){
							start_point_obj[j] += (20 + circle_size-circle_bold*j -start_point_obj[j]) / (time_end/2);
    					}
    					else{
    						start_point_obj[j] += 1.5*Math.random()*(scale_point-time*(scale_point/time_end));
    					}
    					if(color_flag == false){
		    					if((color_16_1_obj[j] >30)&&(color_state[j] == 0)){
	     						color_16_1_obj[j] -= 1;				
	    					}
	    					else if(color_16_1_obj[j] == 30){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_obj[j] <144)&&(color_state[j] == 1)){
	     						color_16_2_obj[j] += 1; 	  						
	    					}
	    					else if(color_16_2_obj[j] == 144){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_obj[j] <255)&&(color_state[j] == 2)){
	     						color_16_3_obj[j] += 1;  			 						
	    					}
	    					else if(color_16_3_obj[j] == 150){
	    						color_state[j] = 0;
	    					}
    					}
    					else{
	    					if((color_16_1_back_obj[j] >color_16_1_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j] += 1;					
	    					}
	    					else if(color_16_1_back_obj[j] == color_16_1_obj[j]){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_back_obj[j]>color_16_2_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j] -= 1;					
	    					}
	    					else if(color_16_2_back_obj[j] == color_16_2_obj[j]){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_back_obj[j] <color_16_3_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j] -= 1;					
	    					}
	    					else if(color_16_3_back_obj[j] == color_16_3_obj[j]){
	    						color_state[j] = 0;
	    					}
    					}
    					color_16_1 = color_16_1_obj[j].toString(16);
    					color_16_2 = color_16_2_obj[j].toString(16);
    					color_16_3 = color_16_3_obj[j].toString(16);

						var color_str = "#" + color_16_1 + color_16_2 + color_16_3;

						color_obj[j] = color_str;

    				}
					for(var i=0;i<=18;i++){
						if(count_time == 3){
     						out_point_obj[j][i] += (20 + circle_size-circle_bold*j -out_point_obj[j][i]) / (time_end/2);
    						out_control_point_obj[j][i] += (25 + circle_size+40-circle_bold*j -out_control_point_obj[j][i]) / (time_end/2); 
      						if(time == time_end){
      							console.log("end");
      							for(var k=0;k<item;k++){
    								color_state[k] = parseInt(Math.random()*4);
      							}

    							time = 0;
    							count_time=0;
    							if(color_flag == false){
    								color_flag = true;
    							}
    							else{
    								color_flag = false;
    							}

    							if(flag == false){
    								flag = true;
    							}
    							else{
    								flag = false;
    							}
    						}   						

						}
    					else if(flag == false){
     						out_point_obj[j][i] -= 1.8*Math.random()*(scale_point-time*(scale_point/time_end));
    						out_control_point_obj[j][i] -= 1.8*Math.random()*(scale_control-time*(scale_control/time_end)); 
    						if(time == time_end){
    							time = 0;
    							count_time++;
    							flag = true;
    						} 
    					}
    					else{
     						out_point_obj[j][i] += 1.8*Math.random()*(scale_point-time*(scale_point/time_end));
    						out_control_point_obj[j][i] += 1.8*Math.random()*(scale_control-time*(scale_control/time_end)); 
    						if(time == time_end){
    							time=0;
    							count_time++;
    							flag = false;
    						} 			
    					}							
					}
				}
				for(var j=0;j<item;j++){
    				count=1;
					graphics_out_obj[j].clear();
					graphics_out_obj[j].beginStroke(color_obj[j])
    				.beginFill(color_obj[j]);
    				graphics_out_obj[j].moveTo(start_point_obj[j]*Math.cos(0*Math.PI/180),start_point_obj[j]*Math.sin(0*Math.PI/180));
    				graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][0]*Math.cos(10*Math.PI/180),out_control_point_obj[j][0]*Math.sin(10*Math.PI/180),out_point_obj[j][0]*Math.cos(20*Math.PI/180),out_point_obj[j][0]*Math.sin(20*Math.PI/180));

    				for(var i=20;i<360;i=i+20){

    					if(i+20 ==360){
    						graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][count]*Math.cos((i+10)*Math.PI/180),out_control_point_obj[j][count]*Math.sin((i+10)*Math.PI/180),start_point_obj[j]*Math.cos(0*Math.PI/180),start_point_obj[j]*Math.sin(0*Math.PI/180));
    						//console.log(random_control[count]);
    						count++;
    					}
    					else{
    						graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][count]*Math.cos((i+10)*Math.PI/180),out_control_point_obj[j][count]*Math.sin((i+10)*Math.PI/180),out_point_obj[j][count]*Math.cos((i+20)*Math.PI/180),out_point_obj[j][count]*Math.sin((i+20)*Math.PI/180));
    						//console.log(random_control[count]);    					
    						count++;
    					}
    				}
    			}
				for(var j=0;j<item;j++){
    				if(flag == false){
						out_obj[j].rotation += Math.random()*(8-time*0.16);
    				}
    				else{
						out_obj[j].rotation -= Math.random()*(8-time*0.16);
    				}
				}
				time++;
				stage.update();
			});
		}

