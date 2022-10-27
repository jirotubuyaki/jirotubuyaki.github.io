var canvas;
var stage;
var center_x;
var center_y;
var count=Math.PI*1.5;
var text_count=0;
var item = 16;
var time =0;
var flag= false;
var line_sum=0;
var line = 0;
var obj = new Array();

function init(){
	canvas = document.getElementById("mycanvas");
	stage = new createjs.Stage(document.getElementById("mycanvas"));
	center_x = stage.canvas.width/2;
	center_y = stage.canvas.height/2;

	for(var j=0;j<182;j++){
		line = Math.random() * 65 + 13;
		var rand = Math.random()*100;
		var color =0;
		var color_16_1 = 0;
		var color_16_2 = 0;
		var color_16_3 = 0;
		if(rand <= 33){
			color = parseInt(Math.random()*254);
			color_16_1 = color.toString(16);
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
			if(Math.random()*10 <= 5){
				color_16_1 = "ff";
				color_16_2 = "00";
			}
			else{
				color_16_1 = "00";
				color_16_2 = "ff";
			}
		}
		if(Math.random()<0.04){
			color = parseInt(Math.random()*255);
			color_16_1 = color.toString(16);
			color_str = "#" + color_16_1 + color_16_1 + color_16_1;
		}
		else{
			color_str = "#" + color_16_1 + color_16_2 + color_16_3;
		}
		var shape = new createjs.Shape();
		shape.graphics.setStrokeStyle(0);
		shape.graphics.beginFill(color_str);
		shape.graphics.moveTo(0,0);
		shape.graphics.lineTo(line,0);
		shape.graphics.lineTo(line,45);
		shape.graphics.lineTo(0,45)
		shape.graphics.endFill();
		shape.regY = 0;
		shape.x = line_sum;
		shape.y = 0;
		shape.alpha = 0.25;
		stage.addChild(shape);
		obj.push(shape);
		line_sum += line;

	}
	line_sum = 0;
	onComplete();
	function onComplete(){
		for(var j=0;j<obj.length;j++){
			var rand = Math.random()*6.3+1.5;
			line_sum += rand * 10;
			if(j==0){
				tween = new createjs.Tween.get(obj[j],{loop:false})
				.to({scaleX:rand},100, createjs.Ease.circlnOut);

				tween = new createjs.Tween.get(obj[j+1],{loop:false})
				.to({x:line_sum},100, createjs.Ease.circlnOut);

			}
			else if(j ==obj.length -1){
				tween = new createjs.Tween.get(obj[j],{loop:false})
				.to({scaleX:rand,x:line_sum},100, createjs.Ease.circlnOut)
				.wait(1000)
				.call(onComplete);
				line_sum = 0;
			}
			else{
				tween = new createjs.Tween.get(obj[j],{loop:false})
				.to({scaleX:rand,x:line_sum},100, createjs.Ease.circlnOut);
				tween = new createjs.Tween.get(obj[j+1],{loop:false})
				.to({x:line_sum},100, createjs.Ease.circlnOut);
	 		}
			console.log('loop');
		}
	}
	var act;
	createjs.Ticker.setFPS(55);
	createjs.Ticker.addEventListener("tick", function() {
		stage.update();
	});
}
