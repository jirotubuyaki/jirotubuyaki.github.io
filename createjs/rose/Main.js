		var canvas;
		var stage;
		var center_x;
		var center_y;
		var _layouter;
		var size =10;
		var size_count=10;
		var count_i=15;
		var count_j=11;
		var time = 0;
		var flag = false;
		var obj = new Array();
		var text;
		var text_title;

		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2;
				
			for(var i=count_i;i>=1;i--){

				var shape = new createjs.Shape();
				shape.graphics.beginStroke("#ffffff");
				shape.graphics.beginFill("#ff1493");
				shape.graphics.setStrokeStyle(0.25);
				shape.graphics.moveTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
				for(var j=count_j;j>=0;j--){
					if(j == 7){
						shape.graphics.lineTo(1.1*size*Math.cos((360/count_j)*j*Math.PI/180),1.1*size*Math.sin((360/count_j)*j*Math.PI/180));
					}
					else if(j == 9){
						shape.graphics.lineTo(1*size*Math.cos((360/count_j)*j*Math.PI/180),1*size*Math.sin((360/count_j)*j*Math.PI/180));
					}
					else if(j == 10){
						shape.graphics.lineTo(0.8*size*Math.cos((360/count_j)*j*Math.PI/180),0.8*size*Math.sin((360/count_j)*j*Math.PI/180));
					}
					else if(j == 11){
						shape.graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					}
					else if(j == 8){
						shape.graphics.lineTo(1.2*size*Math.cos((360/count_j)*j*Math.PI/180),1.2*size*Math.sin((360/count_j)*j*Math.PI/180));
					}
					else{
						shape.graphics.lineTo(size*Math.cos((360/count_j)*j*Math.PI/180),size*Math.sin((360/count_j)*j*Math.PI/180));
					}
				}
				shape.graphics.endFill();
				shape.x = stage.canvas.width/2;
				shape.y = 300;

				if(i == count_i){
					tween = new createjs.Tween.get(shape,{loop:false})
		 			.to({scaleX:13*(i/10),scaleY:13*(i/10),rotation:(100*i)%360},5000+i*200, createjs.Ease.quintOut)
		 			.wait(1000);
		 			tween.call(onComplete);
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

			font = 28 + "px "+"Sacramento";
			text_title = new createjs.Text("Rose()",font, "#000000");
			text_title.textBaseline = "alphabetic";
			text_title.regX = 0;
			text_title.x = stage.canvas.width/2-30;
			text_title.y = stage.canvas.height/2-30;
			stage.addChild(text_title);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Masashi Okada",font, "#000000");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-63;
			text.y = stage.canvas.height/2 + 35;
			stage.addChild(text);

			font = 28 + "px "+"Sacramento";
			text = new createjs.Text("Generative Art",font, "#000000");
			text.textBaseline = "alphabetic";
			text.regX = 0;
			text.x = stage.canvas.width/2-63;
			text.y = stage.canvas.height/2 + 70;
			stage.addChild(text);

			createjs.Ticker.setFPS(75);
			createjs.Ticker.addEventListener("tick",act);

		}
		function onComplete(){
			if(flag == true){
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
		}
		function act(){
			stage.update();
		}
