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
	}
