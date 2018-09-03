$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
    $(".navbar").addClass("navbar-top");      
});




var s = skrollr.init();

$(".text").click(function(){
  (href="#section_about")
});



function initialize() {
        var mapOptions = {
          center: { lat: 25.0423, lng: 121.5355},
          zoom: 17,
          zoomControl: false,
          streetViewControl: false,
          mapTypeControl: false
        };
        var map = new google.maps.Map(
            document.getElementById('googleMap'),
            mapOptions);
       
      
      }
google.maps.event.addDomListener(
          window, 'load', initialize);
var outer_data={
  find: '尋找商品',
  need: '隨手就買',
  title: ['需要什麼商品 :','收件地點 :','小費(NTD) :',' ','哪裡有小費!!','收件時間 :'],

  
};

var section= new Vue({
  el: '#section_about',
  data: outer_data
});


var count=0;
$("#function2").click(function(){
  var buffer;
  buffer=outer_data.find;
  outer_data.find=outer_data.need;
  outer_data.need=buffer;
  
  count+=1;
  if(count==2){
    count=0
  };
  if(count>0){
    outer_data.title[3]=outer_data.title[4];
    outer_data.title[0]='今日累績單量 :';
    outer_data.title[1]='我現在的地點 :';
    outer_data.title[2]='今日累績小費 :';
    outer_data.title[5]='最近一單剩餘時間';
  }else{
    outer_data.title[3]=' ';
    outer_data.title[0]='需要什麼商品 :'
    outer_data.title[1]='收件地點 :'
    outer_data.title[2]='小費(NTD) :'
    outer_data.title[5]='收件時間 :'
  };
});