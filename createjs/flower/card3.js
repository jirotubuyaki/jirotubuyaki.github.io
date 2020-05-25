		var canvas;
		var stage;
		var font_type = "Cantarell";
		var font_in;
		var graphics;
		var graphics_out;
		var shape;
		var graphics_base;
		var shape_base;
		var count=Math.PI*1.5;
		var text;
		var text_2;
		var logo;
		var logo_2;
		var logo_3;
		var mybitmap;
		var image;
		var concept_0;
		var concept_1;
		var concept_2;
		var concept_3;
		var concept_4;
		var concept_detail;
		var concept_explain_1;
		var concept_explain_2;
		var concept_explain_3;
		var concept_explain_4;
		var concept_explain_5;
		var concept_explain_6;		
		var concept_explain_7;
		var concept_explain_8;
		var concept_explain_9;
		var concept_explain_10;
		var concept_explain_11;
		var concept_explain_12;
		var concept_explain_13;
		var concept_explain_14;		
		var concept_explain_15;
		var concept_explain_16;
		var concept_explain_17;
		var concept_explain_18;		
		var concept_explain_19;
		var concept_explain_20;
		var link
		var service_1;
		var service_2;
		var service_3;
		var service_4;
		var service_5;
		var service_6;
		var footer;

		var profile;
		var profile_back;
		var out;
		var text_count=0;

		var center_x;
		var center_y;

		var circle_size = 120;
		var circle_bold = 5;


		var out_line_obj = new Array();

		var flag= false;

		function init(){
			canvas = document.getElementById("mycanvas");
			stage = new createjs.Stage(document.getElementById("mycanvas"));
			center_x = stage.canvas.width/2;
			center_y = stage.canvas.height/2-300;

			ImageRandom(stage,200,100);
			ImageRandom(stage,400,100);
			ImageRandom(stage,200,300);
			ImageRandom(stage,400,300);
			ImageRandom(stage,200,500);
			ImageRandom(stage,400,500);
			/*
				color +=20;
				color_16 = color.toString(16);
				color_str = "#" + color_16 + color_16 + color_16;

    			shape_base = new createjs.Shape(graphics_base);
				stage.addChild(shape_base);
				graphics = new createjs.Graphics();
				graphics.setStrokeStyle(circle_bold)
    			.beginStroke(color_str)
    			.arc(0,0,circle_size -circle_bold*i,Math.PI*1.5,(260-(i*10))* Math.PI /180);

				shape = new createjs.Shape(graphics);
    			shape.regX = 0;
    			shape.regY = 0;
    			shape.x = center_x;
    			shape.y = center_y;
    			shape.alpha=0.6;

				stage.addChild(shape);
				*/


			font = 20 + "px "+"Cantarell";;

			text_field = new createjs.Text("OKADA ALGORITHM",font, "#515151");

			text_field.textBaseline = "alphabetic";

			this.text_field = text_field;
			stage.addChild(text_field);
			text_field.rotation = 0;
			text_field.regX = text_field.getMeasuredWidth()/2;
			text_field.x = 300;
			text_field.y = 700;

			font = 18 + "px "+"Cantarell";;

			text_field = new createjs.Text("random()",font, "#515151");

			text_field.textBaseline = "alphabetic";

			this.text_field = text_field;
			stage.addChild(text_field);
			text_field.rotation = 0;
			text_field.regX = text_field.getMeasuredWidth()/2;
			text_field.x = 300;
			text_field.y = 670;

			font = 20 + "px "+"ヒラギノ明朝 ProN";

			stage.update();



		}
		var ImageRandom = function(parent_in,x_in,y_in){

			//var circle_size = 160;
			//var circle_bold = 10;
			var circle_size = 40;
			var color = 0;
			var color_16_1 = color.toString(16);
			var color_16_2 = color.toString(16);
			var color_16_3 = color.toString(16);

			for(var j=0;j<20;j++){
				color = parseInt(Math.random()*254);
				color_16_1 = color.toString(16);

				color = parseInt(Math.random()*254);
				color_16_2 = color.toString(16);

				color = parseInt(Math.random()*254);
				color_16_3 = color.toString(16);

				color_str = "#" + color_16_1 + color_16_2 + color_16_3;

				graphics_out = new createjs.Graphics();
				graphics_out.beginStroke(color_str)
    			.beginFill(color_str);
    			var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
     			var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;

    			out_line_obj[0] = new createjs.Point(circle_random*Math.cos(0*Math.PI/180),circle_random*Math.sin(0*Math.PI/180));
    			graphics_out.moveTo(out_line_obj[0].x,out_line_obj[0].y);
    			graphics_out.quadraticCurveTo(circle_random_2*Math.cos(10*Math.PI/180),circle_random_2*Math.sin(10*Math.PI/180),circle_random*Math.cos(20*Math.PI/180),circle_random*Math.sin(20*Math.PI/180));


    			for(var i=20;i<360;i=i+20){
     				var circle_random = Math.random() * 20 + circle_size-circle_bold*j;
    				var circle_random_2 = Math.random() * 25 + circle_size+40-circle_bold*j;
    			//graphics_out.lineTo(out_line_obj[i].x,out_line_obj[i].y);
    				if(i+20 ==360){
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),out_line_obj[0].x,out_line_obj[0].y);

    				}
    				else{
    					graphics_out.quadraticCurveTo(circle_random_2*Math.cos((i+10)*Math.PI/180),circle_random_2*Math.sin((i+10)*Math.PI/180),circle_random*Math.cos((i+20)*Math.PI/180),circle_random*Math.sin((i+20)*Math.PI/180));

    				}

    			}
      		//	graphics_out.quadraticCurveTo(circle_random_2*Math.cos(340*Math.PI/180),circle_random_2*Math.sin(340*Math.PI/180),out_line_obj[0].x,out_line_obj[0].y);

    			out = new createjs.Shape(graphics_out);

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

    			out.rotation += Math.random()*50;

      			out.regX = out.width/2;
    			out.regY = out.height/2;

       			out.alpha=0.3;


				parent_in.addChild(out);
			}

		}
