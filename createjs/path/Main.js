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

			for(var i=0;i<10;i++){
				Path(stage,"#ffffff");

			}




			
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
			var t=0;
			var t_add= 0.01;
			var point_number=10;
			var point_count=10;

			var point_x= new Array();
			var point_y = new Array();
			var point_2_x= new Array();
			var point_2_y = new Array();
			var path_obj = new Array();
			var r = 50;
			var angle;

			for(var i=0;i<point_number;i++){
				point_x[i] = Math.random()*stage.canvas.width;
				point_y[i] = Math.random()*stage.canvas.height;
				point_2_x[i] = point_x[i];
				point_2_y[i] = point_y[i];
			}
			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);

			function act(){
			//console.log("ok:"+point_x_act[0][1]);
			point_count=point_number;
			for(var i=0;i<point_number;i++){
				for(var j=0;j<point_count;j++){
					point_x[j] = (1-t) * point_x[j] + t* point_x[j+1];
					point_y[j] = (1-t) * point_y[j] + t* point_y[j+1];

					point_2_x[j] = (1-(t+t_add)) * point_2_x[j] + (t+t_add)* point_2_x[j+1];
					point_2_y[j] = (1-(t+t_add)) * point_2_y[j] + (t+t_add)* point_2_y[j+1];
					point_count--;
				}
			}
			t = t+ t_add;
			//console.log("test"+point_x[1][3]);
			var shape = new createjs.Shape();
    		shape.graphics.setStrokeStyle(2.5);
    		shape.graphics.beginStroke(color);
    		shape.graphics.moveTo(point_x[0],point_y[0]);
    		shape.graphics.lineTo(point_2_x[0],point_2_y[0]);
    		shape.graphics.endStroke();
    		parent.addChild(shape);
    		path_obj.push(shape);
    		for(var j=0;j<path_obj.length;j++){
    			path_obj[j].alpha -= 0.05;
    			if(path_obj[j]<=0){

    				path_obj.shift();
    			}


    		}
			stage.update();
			if(t >= 1){
				for(var i=0;i<point_number;i++){
					point_x[i] = Math.random()*stage.canvas.width;
					point_y[i] = Math.random()*stage.canvas.height;
					point_2_x[i] = point_x[i];
					point_2_y[i] = point_y[i];
				}
				t=0;

			}
		}
	}
