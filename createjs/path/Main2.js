		var canvas;
		var stage;
		var center_x;
		var center_y;
		var text;
		var text_title;


		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;

			Path(stage,"#7cfc00");
			//Path(stage,"#00adfc");
			Path(stage,"#fc00ec");
			//Path(stage,"#ecfc00");



			
			font = 28 + "px "+"Sacramento";
			text_title = new createjs.Text("Path()",font, "#ffffff");
			text_title.textBaseline = "alphabetic";
			text_title.regX = 0;
			text_title.x = stage.canvas.width/2-30;
			text_title.y = stage.canvas.height/2-30;
			stage.addChild(text_title);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Masashi Okada",font, "#ffffff");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-63;
			text.y = stage.canvas.height/2 + 35;
			stage.addChild(text);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Generative Art",font, "#ffffff");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-63;
			text.y = stage.canvas.height/2 + 70;
			stage.addChild(text);


		}

		var Path = function(parent_in,color_in){
			var parent = parent_in;
			var color = color_in;

			var point_x;
			var point_y;
			var point_z;
			var point_2_x;
			var point_2_y;
			var point_2_z;
			var path_obj = new Array();
			var r = 180 + Math.random()*20;
			var angle=0;
			var angle_add = 5+ Math.random()*15;
			var angle_x = 60;
			var angle_y = 00;
			var angle_z = 0;
			var angle_height = -90;
			var angle_height_add = 0.3;
			var default_point_z;
			var default_point_x;
			var default_point_y;
			var shape;

			default_point_z = r *Math.sin(angle_height*Math.PI/180);
			default_point_x = Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.cos(angle*Math.PI/180)+stage.canvas.width/2-700;
			default_point_y = Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.sin(angle*Math.PI/180)+stage.canvas.height/2+100;

			point_x = default_point_x;
			point_y = default_point_y * Math.cos(angle_x * Math.PI/180) + default_point_z * Math.sin(angle_x * Math.PI/180);
			point_z = -1 * default_point_y * Math.sin(angle_x * Math.PI/180) + default_point_z * Math.cos(angle_x * Math.PI/180);
				
			point_x = point_x * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z * Math.sin(angle_y * Math.PI/180);
			point_y = point_y;
			point_z = point_x * Math.sin(angle_y * Math.PI/180) + point_z * Math.cos(angle_y * Math.PI/180);
				
			point_x = point_x * Math.cos(0 * Math.PI/180) + point_y * Math.sin(0 * Math.PI/180);
			point_y = -1 * point_x * Math.sin(0 * Math.PI/180) + point_y * Math.cos(0 * Math.PI/180);
			point_z = point_z;

			angle_x = 60;
			angle_y = 60;

			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick",act);

			function act(){
				point_x = point_2_x;
				point_y = point_2_y;
				point_z = point_2_z;

				angle = angle + angle_add;
				if(angle >= 360){
					angle = 0;

				}
				angle_height = angle_height +angle_height_add;
				if(angle_height <= -90){
					angle_height_add = -0.3;
				}
				if(angle_height >= 90){
					angle_height_add = -0.3;
				}

		
				default_point_z = r *Math.sin(angle_height*Math.PI/180);
				default_point_x = Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.cos(angle*Math.PI/180)+stage.canvas.width/2-700;
				default_point_y = Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.sin(angle*Math.PI/180)+stage.canvas.height/2+100;


				point_2_x = default_point_x;
				point_2_y = default_point_y * Math.cos(angle_x * Math.PI/180) + default_point_z * Math.sin(angle_x * Math.PI/180);
				point_2_z = -1 * default_point_y * Math.sin(angle_x * Math.PI/180) + default_point_z * Math.cos(angle_x * Math.PI/180);
				
				point_2_x = point_2_x * Math.cos(angle_y * Math.PI/180)  + (-1) * point_2_z * Math.sin(angle_y * Math.PI/180);
				point_2_y = point_2_y;
				point_2_z = point_2_x * Math.sin(angle_y * Math.PI/180) + point_2_z * Math.cos(angle_y * Math.PI/180);
				
				point_2_x = point_2_x * Math.cos(0 * Math.PI/180) + point_2_y * Math.sin(0 * Math.PI/180);
				point_2_y = -1 * point_2_x * Math.sin(0 * Math.PI/180) + point_2_y * Math.cos(0 * Math.PI/180);
				point_2_z = point_2_z;

				shape = new createjs.Shape();
    			shape.graphics.setStrokeStyle(2);
    			shape.graphics.beginStroke(color);
    			shape.graphics.moveTo(point_x,point_y);
    			shape.graphics.lineTo(point_2_x,point_2_y);
    			shape.graphics.endStroke();
    			parent.addChild(shape);
    			path_obj.push(shape);
    			for(var j=0;j<path_obj.length-30;j++){
    				path_obj[j].alpha -= 0.002;
    				if(path_obj[j]<=0.1){

    					path_obj.shift();
    				}
    			}
    			
				stage.update();
			}
		}
