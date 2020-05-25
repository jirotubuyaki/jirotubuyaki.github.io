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
		var item = 12;
		var time =0;
		var flag= false;
		var text_field_1;
		var text_field_2;
		var text_field_3;
		var text_field_4;
		var text_field_5;
		var text_field_6;

		function init(){
			canvas = document.getElementById("mycanvas_flower");
			stage = new createjs.Stage(document.getElementById("mycanvas_flower"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;

			font = 22 + "px "+"Cantarell";;
			text_field_1 = new createjs.Text("OKADA ALGORITHM",font, "#515151");
			text_field_1.textBaseline = "alphabetic";
			text_field_1.regX = text_field_1.getMeasuredWidth()/2;
			text_field_1.x = center_x;
			text_field_1.y = 650;
			stage.addChild(text_field_1);

			font = 20 + "px "+"Cantarell";;
			text_field_2 = new createjs.Text("Flower().",font, "#515151");
			text_field_2.textBaseline = "alphabetic";
			text_field_2.regX = text_field_2.getMeasuredWidth()/2;
			text_field_2.x = center_x;
			text_field_2.y = 610;
			stage.addChild(text_field_2);

			text_field_3 = new createjs.Text("generative Art",font, "#515151");
			text_field_3.textBaseline = "alphabetic";
			text_field_3.regX = text_field_3.getMeasuredWidth()/2;
			text_field_3.x = center_x;
			text_field_3.y = 680;
			stage.addChild(text_field_3);

			text_field_4 = new createjs.Text("Masashi Okada ",font, "#515151");
			text_field_4.textBaseline = "alphabetic";
			text_field_4.regX = text_field_4.getMeasuredWidth();
			text_field_4.x = 444;
			text_field_4.y = 730;
			stage.addChild(text_field_4);

			text_field_5 = new createjs.Text("okada@okaal.matrix.jp ",font, "#515151");
			text_field_5.textBaseline = "alphabetic";
			text_field_5.regX = text_field_5.getMeasuredWidth();
			text_field_5.x = 444;
			text_field_5.y = 760;
			stage.addChild(text_field_5);

			text_field_6 = new createjs.Text("programming by CreateJS ",font, "#515151");
			text_field_6.textBaseline = "alphabetic";
			text_field_6.regX = text_field_6.getMeasuredWidth();
			text_field_6.x = 444;
			text_field_6.y = 790;
			stage.addChild(text_field_6);

			stage.update();

			ImageRandom(stage,center_x,center_y);
		}
		var ImageRandom = function(parent_in,x_in,y_in){

			var circle_bold = 15;
			var circle_size = 180;
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
			var start_point;
			var flag = false;
			var color_flag = new Array();
			var color_state = new Array();
			var count_time=0;
			var time_end = 120;
    		var scale_point = 3;
			var scale_control = 3.5;

			for(var j=0;j<item;j++){
				color_state[j] = parseInt(Math.random()*4);
				color_flag[j] = false;
				out_point = new Array();
				out_control_point = new Array();

				color = parseInt(Math.random()*80+174);
				color_16_1_obj.push(color);
				color_16_1_back_obj.push(204+parseInt(Math.random()*50));
				color_16_1 = color.toString(16);

				color = parseInt(Math.random()*50+50);
				color_16_2_obj.push(color);
				color_16_2_back_obj.push(20+parseInt(Math.random()*100));
				color_16_2 = color.toString(16);

				color = parseInt(Math.random()*50+104);
				color_16_3_obj.push(color);
				color_16_3_back_obj.push(200+parseInt(Math.random()*50));
				color_16_3 = color.toString(16);

				color_str = "#" + color_16_1 + color_16_2 + color_16_3;

				color_obj.push(color_str);

				var graphics_out = new createjs.Graphics();
				graphics_out.beginStroke(color_str)
    			.beginFill(color_str);
    			var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
     			var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;

    			start_point = new createjs.Point(circle_random*Math.cos(0*Math.PI/180),circle_random*Math.sin(0*Math.PI/180));
    			start_point_obj.push(circle_random);
    			graphics_out.moveTo(start_point.x,start_point.y);
    			graphics_out.quadraticCurveTo(circle_random_2*Math.cos(10*Math.PI/180),circle_random_2*Math.sin(10*Math.PI/180),circle_random*Math.cos(20*Math.PI/180),circle_random*Math.sin(20*Math.PI/180));

    			out_control_point.push(circle_random_2);
    			out_point.push(circle_random);

    			for(var i=20;i<360;i=i+20){
     				var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
    				var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;


    				if(i+20 ==360){
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),start_point.x,start_point.y);
    					out_control_point.push(circle_random_2);
    					out_point.push(start_point);

    				}
    				else{
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),circle_random*Math.cos((i+20)*Math.PI/180),circle_random*Math.sin((i+20)*Math.PI/180));
    					out_control_point.push(circle_random_2);
    					out_point.push(circle_random);

    				}

    			}

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

      			out.regX = out.width/2;
    			out.regY = out.height/2;
       			out.alpha=0.3;
				parent_in.addChild(out);


			}	
			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);

			function act(){
				for(var j=0;j<item;j++){
    				if(flag == false){
    					if(count_time == 3){
							start_point_obj[j] += (20 + circle_size-circle_bold*j -start_point_obj[j]) /(time_end/2);
    					}
    					else{
    						start_point_obj[j] -= 1.4*Math.random()*(scale_point-time*(scale_point/time_end));
    					}
    					if(color_flag[j] == false){
	    					if((color_16_1_obj[j] <color_16_1_back_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j]++;				
	    					}
	    					else if((color_16_1_obj[j] >= color_16_1_back_obj[j])&&(color_state[j] == 0)){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_obj[j] <color_16_2_back_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j]++;   						
	    					}
	    					else if((color_16_2_obj[j] >= color_16_2_back_obj[j])&&(color_state[j] == 1)){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_obj[j] < color_16_3_back_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j]++;  		 						
	    					}
	    					else if((color_16_3_obj[j] >= color_16_3_back_obj[j])&&(color_state[j] == 2)){
								color_state[j] = 0;
	    						color_flag[j] = true;
	    					}
    					}
    					else{
	    					if((65 <color_16_1_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j]--;					
	    					}
	    					else if((65 >= color_16_1_obj[j])&&(color_state[j] == 0)){
	    						color_state[j] = 1;
	    					}
	    					if((105 <color_16_2_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j]--;					
	    					}
	    					else if((105 >= color_16_2_obj[j])&&(color_state[j] == 1)){
	    						color_state[j] = 2;
	    					}
	    					if((225 <color_16_3_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j]--;					
	    					}
	    					else if((225 >= color_16_3_obj[j])&&(color_state[j] == 2)){
								color_state[j] = 0;
	    						color_flag[j] = false;
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
    						start_point_obj[j] += 1.4*Math.random()*(scale_point-time*(scale_point/time_end));
    					}
    					if(color_flag[j] == false){
	    					if((color_16_1_obj[j] <color_16_1_back_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j]++;				
	    					}
	    					else if((color_16_1_obj[j] >= color_16_1_back_obj[j])&&(color_state[j] == 0)){
	    						color_state[j] = 1;
	    					}
	    					if((color_16_2_obj[j] <color_16_2_back_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j]++;   						
	    					}
	    					else if((color_16_2_obj[j] >= color_16_2_back_obj[j])&&(color_state[j] == 1)){
	    						color_state[j] = 2;
	    					}
	    					if((color_16_3_obj[j] < color_16_3_back_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j]++;  		 						
	    					}
	    					else if((color_16_3_obj[j] >= color_16_3_back_obj[j])&&(color_state[j] == 2)){
								color_state[j] = 0
	    						color_flag[j] = true;
	    					}
    					}
    					else{
	    					if((65 <color_16_1_obj[j])&&(color_state[j] == 0)){
	     						color_16_1_obj[j]--;					
	    					}
	    					else if((65 >= color_16_1_obj[j])&&(color_state[j] == 0)){
	    						color_state[j] = 1;
	    					}
	    					if((105 <color_16_2_obj[j])&&(color_state[j] == 1)){
	     						color_16_2_obj[j]--;					
	    					}
	    					else if((105 >= color_16_2_obj[j])&&(color_state[j] == 1)){
	    						color_state[j] = 2;
	    					}
	    					if((225 <color_16_3_obj[j])&&(color_state[j] == 2)){
	     						color_16_3_obj[j]--;					
	    					}
	    					else if((225 >= color_16_3_obj[j])&&(color_state[j] == 2)){
								color_state[j] = 0;
	    						color_flag[j] = false;
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
      							//for(var k=0;k<item;k++){
    							//	color_state[k] = parseInt(Math.random()*3);
      							//}
    							time = 0;
    							count_time=0;
    							//if(color_flag == false){
    							//	color_flag = true;
    							//}
    							//else{
    							//	color_flag = false;
    							//}

    							if(flag == false){
    								flag = true;
    							}
    							else{
    								flag = false;
    							}
    						}   						

						}
    					else if(flag == false){
     						out_point_obj[j][i] -= 1.4*Math.random()*(scale_point-time*(scale_point/time_end));
    						out_control_point_obj[j][i] -= 1.4*Math.random()*(scale_control-time*(scale_control/time_end)); 

    						if(time == time_end){
    							time = 0;
    							count_time++;
    							flag = true;
    						} 
    					}
    					else{
     						out_point_obj[j][i] += 1.4*Math.random()*(scale_point-time*(scale_point/time_end));
    						out_control_point_obj[j][i] += 1.4*Math.random()*(scale_control-time*(scale_control/time_end)); 
    						if(time == time_end){
    							time=0;
    							count_time++;
    							flag = false;
    						} 			
    					}							
					}
	  				count=1;
					graphics_out_obj[j].clear();
					graphics_out_obj[j].beginStroke(color_obj[j])
    				.beginFill(color_obj[j]);
    				if(start_point_obj[j] < 0){
    					graphics_out_obj[j].moveTo(0,0);
    				}
    				else{
    	    			graphics_out_obj[j].moveTo(start_point_obj[j]*Math.cos(0*Math.PI/180),start_point_obj[j]*Math.sin(0*Math.PI/180));				
    				}
    				if((out_control_point_obj[j][0] > 0)&&(out_point_obj[j][0] >0)){
    					graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][0]*Math.cos(10*Math.PI/180),out_control_point_obj[j][0]*Math.sin(10*Math.PI/180),out_point_obj[j][0]*Math.cos(20*Math.PI/180),out_point_obj[j][0]*Math.sin(20*Math.PI/180));
    				}
    				else{
    					graphics_out_obj[j].quadraticCurveTo(0,0,0,0);
    				}
    				for(var i=20;i<360;i=i+20){

    					if(i+20 ==360){
    						if((out_control_point_obj[j][count] > 0)&&(start_point_obj[j] >0)){
    							graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][count]*Math.cos((i+10)*Math.PI/180),out_control_point_obj[j][count]*Math.sin((i+10)*Math.PI/180),start_point_obj[j]*Math.cos(0*Math.PI/180),start_point_obj[j]*Math.sin(0*Math.PI/180));
    						}
    						else{
    							graphics_out_obj[j].quadraticCurveTo(0,0,0,0);
    						}

    						count++;
    					}
    					else{
		    				if((out_control_point_obj[j][count] > 0)&&(out_point_obj[j][count] >0)){
    							graphics_out_obj[j].quadraticCurveTo(out_control_point_obj[j][count]*Math.cos((i+10)*Math.PI/180),out_control_point_obj[j][count]*Math.sin((i+10)*Math.PI/180),out_point_obj[j][count]*Math.cos((i+20)*Math.PI/180),out_point_obj[j][count]*Math.sin((i+20)*Math.PI/180));
		    				}
		    				else{
		    					graphics_out_obj[j].quadraticCurveTo(0,0,0,0);		    					
		    				}					
    						count++;
    					}
    				}
    				if(flag == false){
						out_obj[j].rotation += Math.random()*(8-time*0.16);
    				}
    				else{
						out_obj[j].rotation -= Math.random()*(8-time*0.16);
    				}
				}
				time++;
				stage.update();
			}
		}


