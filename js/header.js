		var head_canvas;
		var head_stage;
		var head_center_x;
		var head_center_y;
		var head_text;
		var head_text_title;
		var head_point_arry = new Array();
		var head_point_1_arry = new Array();
		var head_point_2_arry = new Array();
		var head_point_3_arry = new Array();
		var head_point_x_1_arry = new Array();
		var head_point_y_1_arry = new Array();
		var head_point_z_1_arry = new Array();
		var head_point_x_1_arry_2 = new Array();
		var head_point_y_1_arry_2 = new Array();
		var head_point_z_1_arry_2 = new Array();
		var head_point_x_2_arry = new Array();
		var head_point_y_2_arry = new Array();
		var head_point_z_2_arry = new Array();
		var head_point_x_2_arry_2 = new Array();
		var head_point_y_2_arry_2 = new Array();
		var head_point_z_2_arry_2 = new Array();
		var head_point_x_3_arry = new Array();
		var head_point_y_3_arry = new Array();
		var head_point_z_3_arry = new Array();
		var head_point_x_3_arry_2= new Array();
		var head_point_y_3_arry_2 = new Array();
		var head_point_z_3_arry_2 = new Array();
    	var head_point_x_1_arry_mem = new Array();
    	var head_point_y_1_arry_mem = new Array();
    	var head_point_z_1_arry_mem = new Array();

    	var head_point_x_2_arry_mem = new Array();
    	var head_point_y_2_arry_mem = new Array();
    	var head_point_z_2_arry_mem = new Array();

    	var head_point_x_3_arry_mem = new Array();
    	var head_point_y_3_arry_mem = new Array();
    	var head_point_z_3_arry_mem = new Array();
    	var head_shape_obj = new Array();
    	var head_particle_obj = new Array();
    	var head_particle_color_obj = new Array();
    	var head_t = new Array();
    	var head_t_add = new Array();
    	var head_count = new Array();
    	var head_vertices;
    	var head_element_number=400;
    	var head_point_x_start;
		var head_point_y_start;
		var head_point_x_cross;
		var head_point_y_cross;
		var head_point_x_end;
		var head_point_x_end;
		var head_angle_y=0;
		var head_angle_z=0;
		function init_header(){
			head_canvas = document.getElementById("mycanvas_head");
			head_stage = new createjs.Stage(document.getElementById("mycanvas_head"));
			head_center_x = head_stage.canvas.width/2;
			head_center_y = head_stage.canvas.height/2;


			Clock2(head_stage,head_stage.canvas.width/2-244,head_stage.canvas.height/2-20,1);
			Clock2(head_stage,head_stage.canvas.width/2-164,head_stage.canvas.height/2-20,2);
			Clock2(head_stage,head_stage.canvas.width/2-39,head_stage.canvas.height/2-20,3);
			Clock2(head_stage,head_stage.canvas.width/2+39,head_stage.canvas.height/2-20,4);
			Clock2(head_stage,head_stage.canvas.width/2+164,head_stage.canvas.height/2-20,5);
			Clock2(head_stage,head_stage.canvas.width/2+244,head_stage.canvas.height/2-20,6);

			var head_graphics = new createjs.Graphics();
			head_graphics
			.setStrokeStyle(2.0)
     		.beginStroke("#eeeeee")
     		.arc(head_stage.canvas.width/2+104,head_stage.canvas.height/2+70,10,360,0,true);
			head_shape = new createjs.Shape(head_graphics);
			head_stage.addChild(head_shape);

			var head_graphics = new createjs.Graphics();
			head_graphics
			.setStrokeStyle(2.0)
     		.beginStroke("#eeeeee")
     		.arc(head_stage.canvas.width/2+104,head_stage.canvas.height/2+10,10,360,0,true);
			head_shape = new createjs.Shape(head_graphics);
			head_stage.addChild(head_shape);

			var head_graphics = new createjs.Graphics();
			head_graphics
			.setStrokeStyle(2.0)
     		.beginStroke("#eeeeee")
     		.arc(head_stage.canvas.width/2-104,head_stage.canvas.height/2+70,10,360,0,true);
			head_shape = new createjs.Shape(head_graphics);
			head_stage.addChild(head_shape);

			var head_graphics = new createjs.Graphics();
			head_graphics
			.setStrokeStyle(2.0)
     		.beginStroke("#eeeeee")
     		.arc(head_stage.canvas.width/2-104,head_stage.canvas.height/2+10,10,360,0,true);
			head_shape = new createjs.Shape(head_graphics);
			head_stage.addChild(head_shape);

			head_stage.update();

		}

		var Clock2 = function(parent_in,x_in,y_in,clock_in){
			var head_parent = parent_in;
			var head__x = x_in;
			var head__y = y_in;
			var head_clock = clock_in;
			var head_point_x_start;
			var head_point_y_start;
			var head_point_x_cross;
			var head_point_y_cross;
			var head_point_x_end;
			var head_point_y_end;
			var head_segment = new Array();
			var head_point_x = new Array();
			var head_point_y = new Array();
			var head_particle_obj = new Array();
			var head_particle_color_obj = new Array();
			var head_t = new Array();
			var head_t_add = new Array();
			var head_count = new Array();
			var head_element_width = 20;
			var head_element_height = 10;
			var head_time;
			var head_time_before;

			for(var head_j=0;head_j<7;head_j++){
				var head_shape = new createjs.Shape();
    			head_shape.graphics.setStrokeStyle(0.6);
    			head_shape.graphics.beginStroke("#bbbbbb");
    			head_shape.graphics.moveTo(-1*head_element_width,-1*head_element_height/2);
    			head_point_x[0] = -1*head_element_width;
    			head_point_y[0] = -1*head_element_height/2;
    			head_shape.graphics.lineTo(head_element_width,-1*head_element_height/2);
    			head_point_x[1] = head_element_width;
    			head_point_y[1] = -1*head_element_height/2;
     			head_shape.graphics.lineTo(head_element_width+head_element_height/2,0);
    			head_point_x[2] = head_element_width+head_element_height/2;
    			head_point_y[2] = 0;
     			head_shape.graphics.lineTo(head_element_width,head_element_height/2);
       			head_point_x[3] = head_element_width;
    			head_point_y[3] = head_element_height/2;
     			head_shape.graphics.lineTo(-1*head_element_width,head_element_height/2);
       			head_point_x[4] = -1*head_element_width;
    			head_point_y[4] = head_element_height/2;
     			head_shape.graphics.lineTo(-1*head_element_width-head_element_height/2,0);
        		head_point_x[5] = -1*head_element_width-head_element_height/2;
    			head_point_y[5] = 0;
     			head_shape.graphics.lineTo(-1*head_element_width,-1*head_element_height/2);     			
    			head_shape.graphics.endStroke();
    			head_shape.alpha = 1;
    			head_stage.addChild(head_shape);
    			head_segment.push(head_shape);

    			if(head_j==0){
    				head_shape.x = head__x;
    				head_shape.y = head__y;
    			}
    			if(head_j==1){
    				head_shape.rotation = 90;
    				head_shape.x = head_element_width + head_element_height/2 +head__x;
    				head_shape.y = head_element_width*2 -head_element_height + head__y;
    			}
    			if(head_j==2){
    				head_shape.rotation = 90;
    				head_shape.x = head_element_width + head_element_height/2 +head__x;
    				head_shape.y = head_element_width*4 + head_element_height + head__y;
    			}
    			if(head_j==3){
    				head_shape.x = head__x;
    				head_shape.y = head_element_width*6 + head__y;
    			}
    			if(head_j==4){
    				head_shape.rotation = -90;
    				head_shape.x = -1*head_element_width + -1*head_element_height/2 +head__x;
    				head_shape.y = head_element_width*4 +head_element_height + head__y;
    			}
    			if(head_j==5){
    				head_shape.rotation = -90;
    				head_shape.x = -1*head_element_width + -1*head_element_height/2 +head__x;
    				head_shape.y = head_element_width*2 -head_element_height + head__y;

    			}
    			if(head_j==6){
    				head_shape.rotation = 0;
    				head_shape.x = head__x;
    				head_shape.y = head_element_width*4 -head_element_height*2 + head__y;

    			}

				var act;
    			createjs.Ticker.setFPS(75);
				createjs.Ticker.addEventListener("tick", function() {
					if ($('#header_contents').css('display') == 'none'){
						return;
					}
					head_stage.update();

					var head_time;
					head_time_flag = true;

					var head_DD = new Date();
					var head_time_obj = new Array();

					head_hours = head_DD.getHours();
					head_minutes = head_DD.getMinutes();
					head_seconds = head_DD.getSeconds();
					if(head_clock == 1){
						head_time = parseInt(head_hours/10);
					}
					else if(head_clock == 2){
						head_time = head_hours%10;
					}
					else if(head_clock == 3){
						head_time = parseInt(head_minutes/10);
					}
					else if(head_clock == 4){
						head_time = head_minutes%10;
					}
					else if(head_clock == 5){
						head_time = parseInt(head_seconds/10);
					}
					else if(head_clock == 6){
						head_time = head_seconds%10;
					}
					if(head_time == head_time_before){
						head_time_flag = false;
					}
					head_time_before = head_time;

					for(var head_k=0;head_k<7;head_k++){

			    		if(head_time_flag == true){
							head_segment[head_k].graphics.clear();
			    			head_segment[head_k].graphics.setStrokeStyle(0.6);
			    			head_segment[head_k].graphics.beginStroke("#bbbbbb");
			    			head_segment[head_k].graphics.moveTo(-1*head_element_width,-1*head_element_height/2);
			    			head_segment[head_k].graphics.lineTo(head_element_width,-1*head_element_height/2);
			     			head_segment[head_k].graphics.lineTo(head_element_width+head_element_height/2,0);
			     			head_segment[head_k].graphics.lineTo(head_element_width,head_element_height/2);
			     			head_segment[head_k].graphics.lineTo(-1*head_element_width,head_element_height/2);
			     			head_segment[head_k].graphics.lineTo(-1*head_element_width-head_element_height/2,0);
			     			head_segment[head_k].graphics.lineTo(-1*head_element_width,-1*head_element_height/2);     			
			    			head_segment[head_k].graphics.endStroke();


			    			if(head_k==0){
			    				head_segment[head_k].x = head__x;
			    				head_segment[head_k].y = head__y;
			    			}
			    			if(head_k==1){
			    				head_segment[head_k].rotation = 90;
			    				head_segment[head_k].x = head_element_width + head_element_height/2 +head__x;
			    				head_segment[head_k].y = head_element_width*2 -head_element_height + head__y;
			    			}
			    			if(head_k==2){
			    				head_segment[head_k].rotation = 90;
			    				head_segment[head_k].x = head_element_width + head_element_height/2 +head__x;
			    				head_segment[head_k].y = head_element_width*4 +head_element_height + head__y;
			    			}
			    			if(head_k==3){
			    				head_segment[head_k].x = head__x;
			    				head_segment[head_k].y = head_element_width*6 + head__y;
			    			}
			    			if(head_k==4){
			    				head_segment[head_k].rotation = -90;
			    				head_segment[head_k].x = -1*head_element_width + -1*head_element_height/2 +head__x;
			    				head_segment[head_k].y = head_element_width*4 +head_element_height + head__y;
			    			}
			    			if(head_k==5){
			    				head_segment[head_k].rotation = -90;
			    				head_segment[head_k].x = -1*head_element_width + -1*head_element_height/2 +head__x;
			    				head_segment[head_k].y = head_element_width*2 -head_element_height + head__y;

			    			}
			    			if(head_k==6){
			    				head_segment[head_k].rotation = 0;
			    				head_segment[head_k].x = head__x;
			    				head_segment[head_k].y = head_element_width*4 -head_element_height*2 + head__y;

			    			}
			    		}
		    		}
		    		if(head_time_flag == true){
						if(head_time == 0){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[4]);
							head_time_obj.push(head_segment[5]);
						}
						else if(head_time == 1){
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
						}
						else if(head_time == 2){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[4]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 3){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 4){
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[5]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 5){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[5]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 6){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[4]);
							head_time_obj.push(head_segment[5]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 7){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
						}
						else if(head_time == 8){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[4]);
							head_time_obj.push(head_segment[5]);
							head_time_obj.push(head_segment[6]);
						}
						else if(head_time == 9){
							head_time_obj.push(head_segment[0]);
							head_time_obj.push(head_segment[1]);
							head_time_obj.push(head_segment[2]);
							head_time_obj.push(head_segment[3]);
							head_time_obj.push(head_segment[5]);
							head_time_obj.push(head_segment[6]);
						}
						for(var head_k=0;head_k<head_time_obj.length;head_k++){
							var head_rand = Math.random()*100;
							var head_color =0;
							var head_color_16_1 = 0;
							var head_color_16_2 = 0;
							var head_color_16_3 = 0;
							if(head_rand <= 33){
								head_color = parseInt(Math.random()*254);
								head_color_16_1 = head_color.toString(16);
								if(head_color <= 15){
									head_color_16_1 = "0" + head_color_16_1;
								}
								if(Math.random()*10 <= 5){
									head_color_16_2 = "ff";
									head_color_16_3 = "00";
								}
								else{
									head_color_16_2 = "00";
									head_color_16_3 = "ff";
								}
							}
							else if(head_rand <= 66){
								head_color = parseInt(Math.random()*254);
								head_color_16_2 = head_color.toString(16);
								if(head_color <= 15){
									head_color_16_2 = "0" + head_color_16_2;
								}
								if(Math.random()*10 <= 5){
									head_color_16_1 = "ff";
									head_color_16_3 = "00";
								}
								else{
									head_color_16_1 = "00";
									head_color_16_3 = "ff";
								}
							}
							else{
								head_color = parseInt(Math.random()*254);
								head_color_16_3 = head_color.toString(16);
								if(head_color <= 15){
									head_color_16_3 = "0" + head_color_16_3;
								}
								if(Math.random()*10 <= 5){
									head_color_16_1 = "ff";
									head_color_16_2 = "00";
								}
								else{
									head_color_16_1 = "00";
									head_color_16_2 = "ff";
								}
							}
							head_color_str = "#" + head_color_16_1 + head_color_16_2 + head_color_16_3;

							head_time_obj[head_k].graphics.clear();
					   		head_time_obj[head_k].graphics.setStrokeStyle(1.0);
			    			head_time_obj[head_k].graphics.beginStroke("#eeeeee");
			    			head_time_obj[head_k].graphics.beginFill(head_color_str)
			    			head_time_obj[head_k].graphics.moveTo(-1*head_element_width,-1*head_element_height/2);
			    			head_time_obj[head_k].graphics.lineTo(head_element_width,-1*head_element_height/2);
			     			head_time_obj[head_k].graphics.lineTo(head_element_width+head_element_height/2,0);
			     			head_time_obj[head_k].graphics.lineTo(head_element_width,head_element_height/2);
			     			head_time_obj[head_k].graphics.lineTo(-1*head_element_width,head_element_height/2);
			     			head_time_obj[head_k].graphics.lineTo(-1*head_element_width-head_element_height/2,0);
			     			head_time_obj[head_k].graphics.lineTo(-1*head_element_width,-1*head_element_height/2);     			
			    			head_time_obj[head_k].graphics.endStroke();	
			    			head_time_obj[head_k].alpha = 0.8;

			       			if(head_j==0){
			    				head_time_obj[head_k].x = head__x;
			    				head_time_obj[head_k].y = head__y;
			    			}
			    			if(head_j==1){
			    				head_time_obj[head_k].rotation = 90;
			    				head_head_time_obj[head_k].x = head_element_width + head_element_height/2 +head__x;
			    				head_time_obj[head_k].y = head_element_width*2 -head_element_height + head__y;
			    			}
			    			if(head_j==2){
			    				head_time_obj[head_k].rotation = 90;
			    				head_time_obj[head_k].x = head_element_width + head_element_height/2 +head__x;
			    				head_time_obj[head_k].y = head_element_width*4 +head_element_height + head__y;
			    			}
			    			if(head_j==3){
			    				head_time_obj[head_k].x = head__x;
			    				head_time_obj[head_k].y = head_element_width*6 + head__y;
			    			}
			    			if(head_j==4){
			    				head_time_obj[head_k].rotation = -90;
			    				head_time_obj[head_k].x = -1*head_element_width + -1*head_element_height/2 +head__x;
			    				head_time_obj[head_k].y = head_element_width*4 +head_element_height + head__y;
			    			}
			    			if(head_j==5){
			    				head_time_obj[head_k].rotation = -90;
			    				head_time_obj[head_k].x = -1*head_element_width + -1*head_element_height/2 +head__x;
			    				head_time_obj[head_k].y = head_element_width*2 -head_element_height + head__y;

			    			}
			    			if(head_j==6){
			    				head_time_obj[head_k].rotation = 0;
			    				head_time_obj[head_k].x = head__x;
			    				head_time_obj[head_k].y = head_element_width*4 -head_element_height*2 + head__y;

			    			}	
						}
					}
				});
    		}

		}
