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
		var point_x_2_arry = new Array();
		var point_y_2_arry = new Array();
		var point_z_2_arry = new Array();
		var point_x_3_arry = new Array();
		var point_y_3_arry = new Array();
		var point_z_3_arry = new Array();
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
    	var vertices;
		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;


				vertices = d3.range(450).map(function(d) {
					var r = 170;
					var angle_height = Math.random()*360;
					var angle = Math.random()*360;
  					return [
      					Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.cos(angle*Math.PI/180)+stage.canvas.width/2,
     					Math.abs(r*Math.cos(angle_height*Math.PI/180)) * Math.sin(angle*Math.PI/180)+stage.canvas.height/2-300,
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

			for(var i=0;i<point_x_1_arry_mem.length;i++){
			var angle_x = 60;
			var angle_y = 00;
			var angle_z = 0;

			point_x_1_arry[i] = point_x_1_arry_mem[i];
			point_y_1_arry[i] = point_y_1_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_1_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
			point_z_1_arry[i] = -1 * point_y_1_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_1_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
				
			point_x_1_arry[i] = point_x_1_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_1_arry[i] * Math.sin(angle_y * Math.PI/180);
			point_y_1_arry[i] = point_y_1_arry[i];
			point_z_1_arry[i] = point_x_1_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_1_arry[i] * Math.cos(angle_y * Math.PI/180);
				
			point_x_1_arry[i] = point_x_1_arry[i] * Math.cos(0 * Math.PI/180) + point_y_1_arry[i] * Math.sin(0 * Math.PI/180);
			point_y_1_arry[i] = -1 * point_x_1_arry[i] * Math.sin(0 * Math.PI/180) + point_y_1_arry[i] * Math.cos(0 * Math.PI/180);
			point_z_1_arry[i] = point_z_1_arry[i];

			}

			for(var i=0;i<point_x_2_arry_mem.length;i++){
			var angle_x = 60;
			var angle_y = 00;
			var angle_z = 0;
			
			point_x_2_arry[i] = point_x_2_arry_mem[i];
			point_y_2_arry[i] = point_y_2_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_2_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
			point_z_2_arry[i] = -1 * point_y_2_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_2_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
				
			point_x_2_arry[i] = point_x_2_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_2_arry[i] * Math.sin(angle_y * Math.PI/180);
			point_y_2_arry[i] = point_y_2_arry[i];
			point_z_2_arry[i] = point_x_2_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_2_arry[i] * Math.cos(angle_y * Math.PI/180);
				
			point_x_2_arry[i] = point_x_2_arry[i] * Math.cos(0 * Math.PI/180) + point_y_2_arry[i] * Math.sin(0 * Math.PI/180);
			point_y_2_arry[i] = -1 * point_x_2_arry[i] * Math.sin(0 * Math.PI/180) + point_y_2_arry[i] * Math.cos(0 * Math.PI/180);
			point_z_2_arry[i] = point_z_2_arry[i];
			}

			for(var i=0;i<point_z_3_arry_mem.length;i++){
			var angle_x = 60;
			var angle_y = 00;
			var angle_z = 0;
			
			point_x_3_arry[i] = point_x_3_arry_mem[i];
			point_y_3_arry[i] = point_y_3_arry_mem[i] * Math.cos(angle_x * Math.PI/180) + point_z_3_arry_mem[i] * Math.sin(angle_x * Math.PI/180);
			point_z_3_arry[i] = -1 * point_y_3_arry_mem[i] * Math.sin(angle_x * Math.PI/180) + point_z_3_arry_mem[i] * Math.cos(angle_x * Math.PI/180);
				
			point_x_3_arry[i] = point_x_3_arry[i] * Math.cos(angle_y * Math.PI/180)  + (-1) * point_z_3_arry[i] * Math.sin(angle_y * Math.PI/180);
			point_y_3_arry[i] = point_y_3_arry[i];
			point_z_3_arry[i] = point_x_3_arry[i] * Math.sin(angle_y * Math.PI/180) + point_z_3_arry[i] * Math.cos(angle_y * Math.PI/180);
				
			point_x_3_arry[i] = point_x_3_arry[i] * Math.cos(0 * Math.PI/180) + point_y_3_arry[i] * Math.sin(0 * Math.PI/180);
			point_y_3_arry[i] = -1 * point_x_3_arry[i] * Math.sin(0 * Math.PI/180) + point_y_3_arry[i] * Math.cos(0 * Math.PI/180);
			point_z_3_arry[i] = point_z_3_arry[i];
			}
			for(var i=0;i<point_z_3_arry_mem.length;i++){
				var shape = new createjs.Shape();
    			shape.graphics.setStrokeStyle(0.8);
    			shape.graphics.beginStroke("#ffffff");
    			shape.graphics.moveTo(point_x_1_arry_mem[i],point_y_1_arry_mem[i]);
    			shape.graphics.lineTo(point_x_2_arry_mem[i],point_y_2_arry_mem[i]);
     			shape.graphics.lineTo(point_x_3_arry_mem[i],point_y_3_arry_mem[i]);
    			shape.graphics.endStroke();
    			stage.addChild(shape);
    			shape_obj.push(shape);
    			console.log("create");
    		}


			Path(stage,"#7cfc00");
			//Path(stage,"#00adfc");
			//Path(stage,"#fc00ec");
			//Path(stage,"#ecfc00");



			
			font = 28 + "px "+"Sacramento";
			text_title = new createjs.Text("PathCul()",font, "#ffffff");
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

			stage.update();


		}

		var Path = function(parent_in,color_in){

			createjs.Ticker.setFPS(60);
			createjs.Ticker.addEventListener("tick",act);

			function act(){
			for(var i=0;i<point_z_3_arry_mem.length;i++){
				var shape = shape_obj[i];
				shape.graphics.clear();
    			shape.graphics.setStrokeStyle(0.4);
    			shape.graphics.beginStroke("#ffffff");
    			shape.graphics.moveTo(point_x_1_arry_mem[i]+Math.random()*2,point_y_1_arry_mem[i]+Math.random()*2);
    			shape.graphics.lineTo(point_x_2_arry_mem[i]+Math.random()*2,point_y_2_arry_mem[i]+Math.random()*2);
     			shape.graphics.lineTo(point_x_3_arry_mem[i]+Math.random()*2,point_y_3_arry_mem[i]+Math.random()*2);
    			shape.graphics.endStroke();
    			console.log("create");
    		}
				stage.update();
			}
		}
