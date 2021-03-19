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
      center: new google.maps.LatLng(34.6661,133.9177),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),mapOptions);
    var marker = new google.maps.Marker({
  	position: new google.maps.LatLng(34.6661,133.9177),
  	map: map,
  	title:"TEST"
    });
    var myInfoWindow = new google.maps.InfoWindow({
        content: "<form method=\"post\" action=\"example.cgi\" enctype=\"multipart/form-data\">複数ファイル：<input type=\"file\" name=\"example2\" multiple><input type=\"submit\" value=\"送信する\"></p></form>"
    });
    myInfoWindow.open(map, marker);
    map.addListener('click', function(e) {
        getClickLatLng(e.latLng, map);
    });
}
function getClickLatLng(lat_lng, map){
    var marker = new google.maps.Marker({
        position: lat_lng,
        map: map
     });
    map.panTo(lat_lng);
     var myInfoWindow = new google.maps.InfoWindow({
        content: "<form method=\"post\" action=\"example.cgi\" enctype=\"multipart/form-data\">複数ファイル：<input type=\"file\" name=\"example2\" multiple><input type=\"submit\" value=\"送信する\"></p></form>"
    });
    myInfoWindow.open(map, marker);
}
