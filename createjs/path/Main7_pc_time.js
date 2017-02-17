		var canvas;
		var stage;
		var center_x;
		var center_y;
		var text;
		var text_title;
		var point_arry = new Array();
		var point_1_arry = new Array();
		var point_2_arry = new Array();
		var point_3_arry = new Array();
		var point_x_1_arry = new Array();
		var point_y_1_arry = new Array();
		var point_z_1_arry = new Array();
		var point_x_1_arry_2 = new Array();
		var point_y_1_arry_2 = new Array();
		var point_z_1_arry_2 = new Array();
		var point_x_2_arry = new Array();
		var point_y_2_arry = new Array();
		var point_z_2_arry = new Array();
		var point_x_2_arry_2 = new Array();
		var point_y_2_arry_2 = new Array();
		var point_z_2_arry_2 = new Array();
		var point_x_3_arry = new Array();
		var point_y_3_arry = new Array();
		var point_z_3_arry = new Array();
		var point_x_3_arry_2= new Array();
		var point_y_3_arry_2 = new Array();
		var point_z_3_arry_2 = new Array();
    	var point_x_1_arry_mem = new Array();
    	var point_y_1_arry_mem = new Array();
    	var point_z_1_arry_mem = new Array();

    	var point_x_2_arry_mem = new Array();
    	var point_y_2_arry_mem = new Array();
    	var point_z_2_arry_mem = new Array();

    	var point_x_3_arry_mem = new Array();
    	var point_y_3_arry_mem = new Array();
    	var point_z_3_arry_mem = new Array();
    	var shape_obj = new Array();
    	var particle_obj = new Array();
    	var particle_color_obj = new Array();
    	var t = new Array();
    	var t_add = new Array();
    	var count_line = new Array();
    	var vertices;
    	var element_number=400;
    	var point_x_start;
		var point_y_start;
		var point_x_cross;
		var point_y_cross;
		var point_x_end;
		var point_y_end;
		var angle_y=0;
		var angle_z=0;
		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;


				vertices = d3.range(element_number).map(function(d) {
					var r = 460;
					var angle_height = Math.random()*90;
					var angle = Math.random()*360;
  					return [
      					Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.cos(angle*Math.PI/180),
     					Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.sin(angle*Math.PI/180),
     					r *Math.sin(angle_height*Math.PI/180)
					];
				});

			var voronoi = d3.geom.voronoi();  
			voronoi.triangles(vertices).forEach(function(d){  

    		point_x_3_arry_mem.push(d[0][0]);
    		point_y_3_arry_mem.push(d[0][1]);
    		point_z_3_arry_mem.push(d[0][2]);

    		point_x_2_arry_mem.push(d[1][0]);
    		point_y_2_arry_mem.push(d[1][1]);
    		point_z_2_arry_mem.push(d[1][2]);

    		point_x_1_arry_mem.push(d[2][0]);
    		point_y_1_arry_mem.push(d[2][1]);
    		point_z_1_arry_mem.push(d[2][2]);

			});
			var angle_x = 55;
			var angle_y = 0;
			for(var i=0;i<point_x_1_arry_mem.length;i++){

				point_x_1_arry[i] = point_x_1_arry_mem[i];
				point_y_1_arry[i] = point_y_1_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_1_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
				point_z_1_arry[i] = -1 * point_y_1_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_1_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
						
				point_x_1_arry_2[i] = point_x_1_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_1_arry[i] * Math.sin(angle_y * Math.PI/180);
				point_y_1_arry_2[i] = point_y_1_arry[i];
				point_z_1_arry_2[i] = point_x_1_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_1_arry[i] * Math.cos(angle_y * Math.PI/180);
						

				point_x_2_arry[i] = point_x_2_arry_mem[i];
				point_y_2_arry[i] = point_y_2_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_2_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
				point_z_2_arry[i] = -1 * point_y_2_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_2_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
						
				point_x_2_arry[i] = point_x_2_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_2_arry[i] * Math.sin(angle_y * Math.PI/180);
				point_y_2_arry_2[i] = point_y_2_arry[i];
				point_z_2_arry_2[i] = point_x_2_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_2_arry[i] * Math.cos(angle_y * Math.PI/180);
						

				point_x_3_arry[i] = point_x_3_arry_mem[i];
				point_y_3_arry[i] = point_y_3_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_3_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
				point_z_3_arry[i] = -1 * point_y_3_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_3_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
						
				point_x_3_arry_2[i] = point_x_3_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_3_arry[i] * Math.sin(angle_y * Math.PI/180);
				point_y_3_arry_2[i] = point_y_3_arry[i];
				point_z_3_arry_2[i] = point_x_3_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_3_arry[i] * Math.cos(angle_y * Math.PI/180);
						

				var shape = new createjs.Shape();
    			shape.graphics.setStrokeStyle(0.6);
    			shape.graphics.beginStroke("#bfbfbf");
    			shape.graphics.moveTo(point_x_1_arry_mem[i],point_y_1_arry_mem[i]);
    			shape.graphics.lineTo(point_x_2_arry_mem[i],point_y_2_arry_mem[i]);
     			shape.graphics.lineTo(point_x_3_arry_mem[i],point_y_3_arry_mem[i]);
    			shape.graphics.endStroke();
    			shape.alpha = 0;
    			tween = new createjs.Tween.get(shape,{loop:false})
			 			.to({alpha:1},Math.random()*1000, createjs.Ease.linear)
    			stage.addChild(shape);
    			shape_obj.push(shape);

    			if(particle_obj.length < 2200){
					var rand = Math.random()*100;
					var color =0;
					var color_16_1 = 0;
					var color_16_2 = 0;
					var color_16_3 = 0;
					if(rand <= 33){
						color = parseInt(Math.random()*254);
						color_16_1 = color.toString(16);
						if(color <= 15){
							color_16_1 = "0" + color_16_1;
						}
						if(Math.random()*10 <= 5){
							color_16_2 = "ff";
							color_16_3 = "00";
						}
						else{
							color_16_2 = "00";
							color_16_3 = "ff";
						}
					}
					else if(rand <= 66){
						color = parseInt(Math.random()*254);
						color_16_2 = color.toString(16);
						if(color <= 15){
							color_16_2 = "0" + color_16_2;
						}
						if(Math.random()*10 <= 5){
							color_16_1 = "ff";
							color_16_3 = "00";
						}
						else{
							color_16_1 = "00";
							color_16_3 = "ff";
						}
					}
					else{
						color = parseInt(Math.random()*254);
						color_16_3 = color.toString(16);
						if(color <= 15){
							color_16_3 = "0" + color_16_3;
						}
						if(Math.random()*10 <= 5){
							color_16_1 = "ff";
							color_16_2 = "00";
						}
						else{
							color_16_1 = "00";
							color_16_2 = "ff";
						}

					}
					color_str = "#" + color_16_1 + color_16_2 + color_16_3;
					var shape = new createjs.Shape();
					shape.graphics.setStrokeStyle(0.8);
					shape.graphics.beginLinearGradientStroke([color_str,color_str], [0.0, 1.0], 0, 0, 0, 0);
					shape.alpha = 0;
					stage.addChild(shape);
	    			particle_obj.push(shape);
	    			particle_color_obj.push(color_str);
	    			tween = new createjs.Tween.get(shape,{loop:false})
			 			.to({alpha:1},3000+Math.random()*2000, createjs.Ease.linear)
	    			t.push(0);
	    			t_add.push(Math.random()*0.2);
	    			count_line.push(0);
	    			console.log("create");
	    		}

			}

			var graphics = new createjs.Graphics();
			graphics
			.setStrokeStyle(2.2)
     		.beginStroke("#eeeeee")
     		.arc(stage.canvas.width/2+128,stage.canvas.height-350,12,360,0,true);
			shape = new createjs.Shape(graphics);
			stage.addChild(shape);

			var graphics = new createjs.Graphics();
			graphics
			.setStrokeStyle(2.2)
     		.beginStroke("#eeeeee")
     		.arc(stage.canvas.width/2+128,stage.canvas.height-260,12,360,0,true);
			shape = new createjs.Shape(graphics);
			stage.addChild(shape);

			var graphics = new createjs.Graphics();
			graphics
			.setStrokeStyle(2.2)
     		.beginStroke("#eeeeee")
     		.arc(stage.canvas.width/2-128,stage.canvas.height-350,12,360,0,true);
			shape = new createjs.Shape(graphics);
			stage.addChild(shape);

			var graphics = new createjs.Graphics();
			graphics
			.setStrokeStyle(2.2)
     		.beginStroke("#eeeeee")
     		.arc(stage.canvas.width/2-128,stage.canvas.height-260,12,360,0,true);
			shape = new createjs.Shape(graphics);
			stage.addChild(shape);
			//Path(stage,"#00adfc");
			//Path(stage,"#fc00ec");
			//Path(stage,"#ecfc00");



			

			font = 35 + "px "+"Sacramento";
			text = new createjs.Text("Masashi Okada",font, "#ffffff");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-80;
			text.y = stage.canvas.height -50;
			stage.addChild(text);

			font = 35 + "px "+"Sacramento";
			text = new createjs.Text("Generative Art",font, "#ffffff");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-80;
			text.y = stage.canvas.height;
			stage.addChild(text);

			stage.update();


			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);
			var angle_x = 55;
			var act;
			function act(){
				angle_y +=0.2;
				if(angle_y >=360){
					angle_y=0;
				}

				for(var i=0;i<point_x_1_arry_mem.length;i++){

	
					point_x_1_arry_2[i] = point_x_1_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_1_arry[i] * Math.sin(angle_y * Math.PI/180);
					point_y_1_arry_2[i] = point_y_1_arry[i];
						
					point_x_2_arry_2[i] = point_x_2_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_2_arry[i] * Math.sin(angle_y * Math.PI/180);
					point_y_2_arry_2[i] = point_y_2_arry[i];

					point_x_3_arry_2[i] = point_x_3_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_3_arry[i] * Math.sin(angle_y * Math.PI/180);
					point_y_3_arry_2[i] = point_y_3_arry[i];
						
					shape_obj[i].graphics.clear();
		    		shape_obj[i].graphics.setStrokeStyle(0.5);
		    		shape_obj[i].graphics.beginStroke("#aaaaaa");
		    		shape_obj[i].graphics.moveTo(point_x_1_arry_2[i]+stage.canvas.width/2,point_y_1_arry_2[i]+stage.canvas.height/2-300);
		    		shape_obj[i].graphics.lineTo(point_x_2_arry_2[i]+stage.canvas.width/2,point_y_2_arry_2[i]+stage.canvas.height/2-300);
		     		shape_obj[i].graphics.lineTo(point_x_3_arry_2[i]+stage.canvas.width/2,point_y_3_arry_2[i]+stage.canvas.height/2-300);

		    		if(count_line[i] == 0){
		    			point_x_start = (1-t[i])*point_x_3_arry_2[i] + t[i]*point_x_1_arry_2[i];
		    			point_y_start = (1-t[i])*point_y_3_arry_2[i] + t[i]*point_y_1_arry_2[i];

		            	point_x_cross = point_x_1_arry_2[i];
		    			point_y_cross = point_y_1_arry_2[i];	

		    			point_x_end = (1-t[i])*point_x_1_arry_2[i] + t[i]*point_x_2_arry_2[i];
		    			point_y_end = (1-t[i])*point_y_1_arry_2[i] + t[i]*point_y_2_arry_2[i];
		 
					
		    				
		    		}
		    		if(count_line[i] == 1){
		      			point_x_start = (1-t[i])*point_x_1_arry_2[i] + t[i]*point_x_2_arry_2[i];
		    			point_y_start = (1-t[i])*point_y_1_arry_2[i] + t[i]*point_y_2_arry_2[i];

		            	point_x_cross = point_x_2_arry_2[i];
		    			point_y_cross = point_y_2_arry_2[i];	

		    			point_x_end = (1-t[i])*point_x_2_arry_2[i] + t[i]*point_x_3_arry_2[i];
		    			point_y_end = (1-t[i])*point_y_2_arry_2[i] + t[i]*point_y_3_arry_2[i];			
		    						
		    		}
		    		if(count_line[i] == 2){
		      			point_x_start = (1-t[i])*point_x_2_arry_2[i] + t[i]*point_x_3_arry_2[i];
		    			point_y_start = (1-t[i])*point_y_2_arry_2[i] + t[i]*point_y_3_arry_2[i];

		            	point_x_cross = point_x_3_arry_2[i];
		    			point_y_cross = point_y_3_arry_2[i];	

		    			point_x_end = (1-t[i])*point_x_3_arry_2[i] + t[i]*point_x_1_arry_2[i];
		    			point_y_end = (1-t[i])*point_y_3_arry_2[i] + t[i]*point_y_1_arry_2[i];				
		    						
		    		}
		    		t[i] += t_add[i];
		    		if(t[i] >=1){
		    			t[i]=0;
		    			count_line[i]++;
		    			if(count_line[i] == 3){
		    				count_line[i]=0;
		    			}
		    		}

					particle_obj[i].graphics.clear();
					particle_obj[i].graphics.setStrokeStyle(1.1);
					particle_obj[i].graphics.beginLinearGradientStroke([particle_color_obj[i],"#aaaaaa"], [0.0, 0.75],point_x_end+stage.canvas.width/2,point_y_end+stage.canvas.height/2-300,point_x_start+stage.canvas.width/2,point_y_start+stage.canvas.height/2-300)
					.moveTo(point_x_start+stage.canvas.width/2,point_y_start+stage.canvas.height/2-300)
					.lineTo(point_x_cross+stage.canvas.width/2,point_y_cross+stage.canvas.height/2-300)
					.lineTo(point_x_end+stage.canvas.width/2,point_y_end+stage.canvas.height/2-300)
					.endStroke();

				}
				stage.update();
			}


		}

		var Clock = function(parent_in,x_in,y_in,clock_in){
			var parent = parent_in;
			var _x = x_in;
			var _y = y_in;
			var clock = clock_in;
			var point_x_start;
			var point_y_start;
			var point_x_cross;
			var point_y_cross;
			var point_x_end;
			var point_y_end;
			var segment = new Array();
			var point_x = new Array();
			var point_y = new Array();
			var particle_obj = new Array();
			var particle_color_obj = new Array();
			var t = new Array();
			var t_add = new Array();
			var count_line = new Array();
			var element_width = 30;
			var element_height = 15;
			var time;
			var time_before;

			for(var j=0;j<7;j++){
				var shape = new createjs.Shape();
    			shape.graphics.setStrokeStyle(0.6);
    			shape.graphics.beginStroke("#efefef");
    			shape.graphics.moveTo(-1*element_width,-1*element_height/2);
    			point_x[0] = -1*element_width;
    			point_y[0] = -1*element_height/2;
    			shape.graphics.lineTo(element_width,-1*element_height/2);
    			point_x[1] = element_width;
    			point_y[1] = -1*element_height/2;
     			shape.graphics.lineTo(element_width+element_height/2,0);
    			point_x[2] = element_width+element_height/2;
    			point_y[2] = 0;
     			shape.graphics.lineTo(element_width,element_height/2);
       			point_x[3] = element_width;
    			point_y[3] = element_height/2;
     			shape.graphics.lineTo(-1*element_width,element_height/2);
       			point_x[4] = -1*element_width;
    			point_y[4] = element_height/2;
     			shape.graphics.lineTo(-1*element_width-element_height/2,0);
        		point_x[5] = -1*element_width-element_height/2;
    			point_y[5] = 0;
     			shape.graphics.lineTo(-1*element_width,-1*element_height/2);     			
    			shape.graphics.endStroke();
    			shape.alpha = 0;
    			tween = new createjs.Tween.get(shape,{loop:false})
			 			.to({alpha:1},Math.random()*1000, createjs.Ease.linear)
    			stage.addChild(shape);
    			segment.push(shape);

    			if(j==0){
    				shape.x = _x;
    				shape.y = _y;
    			}
    			if(j==1){
    				shape.rotation = 90;
    				shape.x = element_width + element_height/2 +_x;
    				shape.y = element_width*2 -element_height + _y;
    			}
    			if(j==2){
    				shape.rotation = 90;
    				shape.x = element_width + element_height/2 +_x;
    				shape.y = element_width*4 +element_height + _y;
    			}
    			if(j==3){
    				shape.x = _x;
    				shape.y = element_width*6 + _y;
    			}
    			if(j==4){
    				shape.rotation = -90;
    				shape.x = -1*element_width + -1*element_height/2 +_x;
    				shape.y = element_width*4 +element_height + _y;
    			}
    			if(j==5){
    				shape.rotation = -90;
    				shape.x = -1*element_width + -1*element_height/2 +_x;
    				shape.y = element_width*2 -element_height + _y;

    			}
    			if(j==6){
    				shape.rotation = 0;
    				shape.x = _x;
    				shape.y = element_width*4 -element_height*2 + _y;

    			}
				var rand = Math.random()*100;
				var color =0;
				var color_16_1 = 0;
				var color_16_2 = 0;
				var color_16_3 = 0;
				if(rand <= 33){
					color = parseInt(Math.random()*254);
					color_16_1 = color.toString(16);
					if(color <= 15){
						color_16_1 = "0" + color_16_1;
					}
					if(Math.random()*10 <= 5){
						color_16_2 = "ff";
						color_16_3 = "00";
					}
					else{
						color_16_2 = "00";
						color_16_3 = "ff";
					}
				}
				else if(rand <= 66){
					color = parseInt(Math.random()*254);
					color_16_2 = color.toString(16);
					if(color <= 15){
						color_16_2 = "0" + color_16_2;
					}
					if(Math.random()*10 <= 5){
						color_16_1 = "ff";
						color_16_3 = "00";
					}
					else{
						color_16_1 = "00";
						color_16_3 = "ff";
					}
				}
				else{
					color = parseInt(Math.random()*254);
					color_16_3 = color.toString(16);
					if(color <= 15){
						color_16_3 = "0" + color_16_3;
					}
					if(Math.random()*10 <= 5){
						color_16_1 = "ff";
						color_16_2 = "00";
					}
					else{
						color_16_1 = "00";
						color_16_2 = "ff";
					}
				}
				color_str = "#" + color_16_1 + color_16_2 + color_16_3;
				var shape = new createjs.Shape();
				shape.graphics.setStrokeStyle(0.8);
				shape.graphics.beginLinearGradientStroke([color_str,color_str], [0.0, 1.0], 0, 0, 0, 0);
				shape.alpha = 0;
				stage.addChild(shape);
	    		particle_obj.push(shape);
	    		particle_color_obj.push(color_str);
	    		t.push(0);
	    		t_add.push(Math.random()*0.2);
	    		count_line.push(0);
	    		tween = new createjs.Tween.get(shape,{loop:false})
			 		.to({alpha:1},3000+Math.random()*2000, createjs.Ease.linear);

    			createjs.Ticker.setFPS(23);
				createjs.Ticker.addEventListener("tick",act_2);
				var act_2;
				function act_2(){
					var time;
					time_flag = true;
					var DD = new Date();
					var time_obj = new Array();

					hours = DD.getHours();
					minutes = DD.getMinutes();
					seconds = DD.getSeconds();
					if(clock == 1){
						time = parseInt(hours/10);
					}
					else if(clock == 2){
						time = hours%10;
					}
					else if(clock == 3){
						time = parseInt(minutes/10);
					}
					else if(clock == 4){
						time = minutes%10;
					}
					else if(clock == 5){
						time = parseInt(seconds/10);
					}
					else if(clock == 6){
						time = seconds%10;
					}
					if(time == time_before){
						time_flag = false;
					}
					time_before = time;
					for(var k=0;k<7;k++){
						if(count_line[k] == 0){
				    		point_x_start = (1-t[k])*point_x[5] + t[k]*point_x[0];
				    		point_y_start = (1-t[k])*point_y[5] + t[k]*point_y[0];

				           	point_x_cross = point_x[0];
				    		point_y_cross = point_y[0];	

				    		point_x_end = (1-t[k])*point_x[0] + t[k]*point_x[1];
				    		point_y_end = (1-t[k])*point_y[0] + t[k]*point_y[1];
				 	
				    	}
				    	if(count_line[k] == 1){
				    		point_x_start = (1-t[k])*point_x[0] + t[k]*point_x[1];
				    		point_y_start = (1-t[k])*point_y[0] + t[k]*point_y[1];

				           	point_x_cross = point_x[1];
				    		point_y_cross = point_y[1];	

				    		point_x_end = (1-t[k])*point_x[1] + t[k]*point_x[2];
				    		point_y_end = (1-t[k])*point_y[1] + t[k]*point_y[2];
				    						
				    	}
				    	if(count_line[k] == 2){		
					    	point_x_start = (1-t[k])*point_x[1] + t[k]*point_x[2];
				    		point_y_start = (1-t[k])*point_y[1] + t[k]*point_y[2];

				           	point_x_cross = point_x[2];
				    		point_y_cross = point_y[2];	

				    		point_x_end = (1-t[k])*point_x[2] + t[k]*point_x[3];
				    		point_y_end = (1-t[k])*point_y[2] + t[k]*point_y[3];
					    						
				    	}
						if(count_line[k] == 3){
				    		point_x_start = (1-t[k])*point_x[2] + t[k]*point_x[3];
				    		point_y_start = (1-t[k])*point_y[2] + t[k]*point_y[3];

				           	point_x_cross = point_x[3];
				    		point_y_cross = point_y[3];	

				    		point_x_end = (1-t[k])*point_x[3] + t[k]*point_x[4];
				    		point_y_end = (1-t[k])*point_y[3] + t[k]*point_y[4];
					
				    	}
				    	if(count_line[k] == 4){
					    	point_x_start = (1-t[k])*point_x[3] + t[k]*point_x[4];
				    		point_y_start = (1-t[k])*point_y[3] + t[k]*point_y[4];

				           	point_x_cross = point_x[4];
				    		point_y_cross = point_y[4];	

				    		point_x_end = (1-t[k])*point_x[4] + t[k]*point_x[5];
				    		point_y_end = (1-t[k])*point_y[4] + t[k]*point_y[5];				
				    	}
				    	if(count_line[k] == 5){
					    	point_x_start = (1-t[k])*point_x[4] + t[k]*point_x[5];
				    		point_y_start = (1-t[k])*point_y[4] + t[k]*point_y[5];

				           	point_x_cross = point_x[5];
				    		point_y_cross = point_y[5];	

				    		point_x_end = (1-t[k])*point_x[5] + t[k]*point_x[0];
				    		point_y_end = (1-t[k])*point_y[5] + t[k]*point_y[0];
									
				    	}
				    	t[k] += t_add[k];
				    	if(t[k] >=1){
				    		t[k]=0;
				    		count_line[k]++;
				    		if(count_line[k] == 6){
				    			count_line[k]=0;
				    		}
				    	}
						particle_obj[k].graphics.clear();
						particle_obj[k].graphics.setStrokeStyle(3.5);
						particle_obj[k].graphics.beginLinearGradientStroke([particle_color_obj[k],"#dddddd"], [0.0, 1.0],point_x_end,point_y_end,point_x_start,point_y_start)
						.moveTo(point_x_start,point_y_start)
						.lineTo(point_x_cross,point_y_cross)
						.lineTo(point_x_end,point_y_end)
						.endStroke();

			    		if(k==0){
			    			particle_obj[k].x = _x;
			    			particle_obj[k].y = _y;
			    		}
			    		if(k==1){
			    			particle_obj[k].rotation = 90;
			    			particle_obj[k].x = element_width + element_height/2 +_x;
			    			particle_obj[k].y = element_width*2 -element_height + _y;
			    		}
			    		if(k==2){
			    			particle_obj[k].rotation = 90;
			    			particle_obj[k].x = element_width + element_height/2 +_x;
			    			particle_obj[k].y = element_width*4 +element_height + _y;
			    		}
			    		if(k==3){
			    			particle_obj[k].x = _x;
			    			particle_obj[k].y = element_width*6 + _y;
			    		}
			    		if(k==4){
			    			particle_obj[k].rotation = -90;
			    			particle_obj[k].x = -1*element_width + -1*element_height/2 +_x;
			    			particle_obj[k].y = element_width*4 +element_height + _y;
			    		}
			    		if(k==5){
			    			particle_obj[k].rotation = -90;
			    			particle_obj[k].x = -1*element_width + -1*element_height/2 +_x;
			    			particle_obj[k].y = element_width*2 -element_height + _y;
			    		}
			    		if(k==6){
			    			particle_obj[k].rotation = 0;
			    			particle_obj[k].x = _x;
			    			particle_obj[k].y = element_width*4 -element_height*2 + _y;

			    		}
			    		if(time_flag == true){
							segment[k].graphics.clear();
			    			segment[k].graphics.setStrokeStyle(0.6);
			    			segment[k].graphics.beginStroke("#bfbfbf");
			    			segment[k].graphics.moveTo(-1*element_width,-1*element_height/2);
			    			segment[k].graphics.lineTo(element_width,-1*element_height/2);
			     			segment[k].graphics.lineTo(element_width+element_height/2,0);
			     			segment[k].graphics.lineTo(element_width,element_height/2);
			     			segment[k].graphics.lineTo(-1*element_width,element_height/2);
			     			segment[k].graphics.lineTo(-1*element_width-element_height/2,0);
			     			segment[k].graphics.lineTo(-1*element_width,-1*element_height/2);     			
			    			segment[k].graphics.endStroke();


			    			if(k==0){
			    				segment[k].x = _x;
			    				segment[k].y = _y;
			    			}
			    			if(k==1){
			    				segment[k].rotation = 90;
			    				segment[k].x = element_width + element_height/2 +_x;
			    				segment[k].y = element_width*2 -element_height + _y;
			    			}
			    			if(k==2){
			    				segment[k].rotation = 90;
			    				segment[k].x = element_width + element_height/2 +_x;
			    				segment[k].y = element_width*4 +element_height + _y;
			    			}
			    			if(k==3){
			    				segment[k].x = _x;
			    				segment[k].y = element_width*6 + _y;
			    			}
			    			if(k==4){
			    				segment[k].rotation = -90;
			    				segment[k].x = -1*element_width + -1*element_height/2 +_x;
			    				segment[k].y = element_width*4 +element_height + _y;
			    			}
			    			if(k==5){
			    				segment[k].rotation = -90;
			    				segment[k].x = -1*element_width + -1*element_height/2 +_x;
			    				segment[k].y = element_width*2 -element_height + _y;

			    			}
			    			if(k==6){
			    				segment[k].rotation = 0;
			    				segment[k].x = _x;
			    				segment[k].y = element_width*4 -element_height*2 + _y;

			    			}
			    		}
			    	}
					if(time_flag == true){
						if(time == 0){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[4]);
							time_obj.push(segment[5]);
						}
						else if(time == 1){
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
						}
						else if(time == 2){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[3]);
							time_obj.push(segment[4]);
							time_obj.push(segment[6]);
						}
						else if(time == 3){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[6]);
						}
						else if(time == 4){
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
							time_obj.push(segment[5]);
							time_obj.push(segment[6]);
						}
						else if(time == 5){
							time_obj.push(segment[0]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[5]);
							time_obj.push(segment[6]);
						}
						else if(time == 6){
							time_obj.push(segment[0]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[4]);
							time_obj.push(segment[5]);
							time_obj.push(segment[6]);
						}
						else if(time == 7){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
						}
						else if(time == 8){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[4]);
							time_obj.push(segment[5]);
							time_obj.push(segment[6]);
						}
						else if(time == 9){
							time_obj.push(segment[0]);
							time_obj.push(segment[1]);
							time_obj.push(segment[2]);
							time_obj.push(segment[3]);
							time_obj.push(segment[5]);
							time_obj.push(segment[6]);
						}
						for(var k=0;k<time_obj.length;k++){

							time_obj[k].graphics.clear();
					   		time_obj[k].graphics.setStrokeStyle(1.5);
			    			time_obj[k].graphics.beginStroke("#efefef");
			    			time_obj[k].graphics.beginFill("#dddddd");
			    			time_obj[k].graphics.moveTo(-1*element_width,-1*element_height/2);
			    			time_obj[k].graphics.lineTo(element_width,-1*element_height/2);
			     			time_obj[k].graphics.lineTo(element_width+element_height/2,0);
			     			time_obj[k].graphics.lineTo(element_width,element_height/2);
			     			time_obj[k].graphics.lineTo(-1*element_width,element_height/2);
			     			time_obj[k].graphics.lineTo(-1*element_width-element_height/2,0);
			     			time_obj[k].graphics.lineTo(-1*element_width,-1*element_height/2);     			
			    			time_obj[k].graphics.endStroke();	

			       			if(j==0){
			    				time_obj[k].x = _x;
			    				time_obj[k].y = _y;
			    			}
			    			if(j==1){
			    				time_obj[k].rotation = 90;
			    				time_obj[k].x = element_width + element_height/2 +_x;
			    				time_obj[k].y = element_width*2 -element_height + _y;
			    			}
			    			if(j==2){
			    				time_obj[k].rotation = 90;
			    				time_obj[k].x = element_width + element_height/2 +_x;
			    				time_obj[k].y = element_width*4 +element_height + _y;
			    			}
			    			if(j==3){
			    				time_obj[k].x = _x;
			    				time_obj[k].y = element_width*6 + _y;
			    			}
			    			if(j==4){
			    				time_obj[k].rotation = -90;
			    				time_obj[k].x = -1*element_width + -1*element_height/2 +_x;
			    				time_obj[k].y = element_width*4 +element_height + _y;
			    			}
			    			if(j==5){
			    				time_obj[k].rotation = -90;
			    				time_obj[k].x = -1*element_width + -1*element_height/2 +_x;
			    				time_obj[k].y = element_width*2 -element_height + _y;

			    			}
			    			if(j==6){
			    				time_obj[k].rotation = 0;
			    				time_obj[k].x = _x;
			    				time_obj[k].y = element_width*4 -element_height*2 + _y;

			    			}
			    		}	
					}
				}
    		}
		}
