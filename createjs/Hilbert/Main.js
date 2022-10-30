var canvas;
var stage;

var start_x;
var start_y;
var  i = 6;
var obj_line = [];
var start_flag;
var u = 4;
var point_x;
var point_y;

function init(){
	canvas = document.getElementById("mycanvas");
	stage = new createjs.Stage(document.getElementById("mycanvas"));
	point_x = stage.canvas.width -21;
	point_y = 47;

	A();
	stage.update();
	createjs.Ticker.setFPS(50);
	createjs.Ticker.addEventListener("tick", act);

	function act(evt){
		stage.update();
		if(obj_line.length != 0){
			stage.addChild(obj_line[0]);
			obj_line.shift();
		}
	}
	function A(){
		if(i > 0){
			i--;
			D();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x - u,point_y,"#ff0000");
		point_x = point_x - u;
		point_y = point_y;
		obj_line.push(line);
		
		if(i > 0){
			i--;
			A();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x,point_y + u,"#ff0000");
		point_x = point_x;
		point_y = point_y + u;
		obj_line.push(line);
		
		if(i > 0){
			i--;
			A();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x + u,point_y,"#ff0000");
		point_x = point_x + u;
		point_y = point_y;
		obj_line.push(line);
		
		if(i > 0){
			i--;
			B();
			i++;
		}

	}
	function B(){
		if(i > 0){
			i--;
			C();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x,point_y - u,"#000000");
		point_x = point_x;
		point_y = point_y - u;
		obj_line.push(line);
		if(i > 0){
			i--;
			B();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x + u,point_y,"#000000");
		point_x = point_x + u;
		point_y = point_y;
		obj_line.push(line);
		if(i > 0){
			i--;
			B();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x,point_y + u,"#000000");
		point_x = point_x;
		point_y = point_y + u;
		obj_line.push(line);
		if(i > 0){
			i--;
			A();
			i++;
		}
	}
	function C(){
		if(i > 0){
			i--;
			B();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x + u,point_y,"#00ff00");
		point_x = point_x + u;
		point_y = point_y;
		obj_line.push(line);
		if(i > 0){
			i--;
			C();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x,point_y - u,"#00ff00");
		point_x = point_x;
		point_y = point_y - u;
		obj_line.push(line);
		if(i > 0){
			i--;
			C();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x - u,point_y,"#00ff00");
		point_x = point_x - u;
		point_y = point_y;
		obj_line.push(line);
		if(i > 0){
			i--;
			D();
			i++;
		}
	}
	function D(){
		if(i > 0){
			i--;
			A();
			i++;
		}
		var line = makeLine(point_x,point_y,point_x,point_y + u,"#0000ff");
		point_x = point_x;
		point_y = point_y + u;
		obj_line.push(line);
		if(i > 0){
			i--;
			D();
			i++;
			
		}
		var line = makeLine(point_x,point_y,point_x - u,point_y,"#0000ff");
		point_x = point_x - u;
		point_y = point_y;
		obj_line.push(line);
		if(i > 0){
			i--;
			D();
			i++;
			
		}
		var line = makeLine(point_x,point_y,point_x,point_y - u,"#0000ff");
		point_x = point_x;
		point_y = point_y - u;
		obj_line.push(line);
		if(i > 0){
			i--;
			C();
			i++;
			
		}
	}
	function makeLine(x0,y0,x1,y1,color){
		var line = new createjs.Shape();
		line.graphics.beginStroke(color).moveTo(x0,y0).lineTo(x1,y1).endStroke();
		
		return line;
	}
}

