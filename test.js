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
var obj = [];

function init(){
    var mapOptions = {
      center: new google.maps.LatLng(34.23951,134.3152),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
		var marker = new google.maps.Marker({
  	position: new google.maps.LatLng(34.23951,134.3152),
  	map: map,
  	title:"縺ｨ繧峨∪繧九ヱ繝壹ャ繝医Λ繝ｳ繝�"
		});
		var myInfoWindow = new google.maps.InfoWindow({
		content: "縺ｨ繧峨∪繧九ヱ繝壹ャ繝医Λ繝ｳ繝�<br><center><img src=./images/gate.jpg height=70px width=100px></center>"
		});
		myInfoWindow.open(map, marker);	
