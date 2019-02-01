
var no_of_images = $(".slider_images > div").length;
//$("html").append(no_of_images);

var width = $(window).width();
//$("html").append(width);

var slider_images_width = no_of_images*width;
$(".slider_images").css("width", slider_images_width+"px");
$(".image").css("width", width);


var a = -1*width;

$(function () {
          $(".right_angle_container i").click(function () {
          	var tr = $(".slider_images").css("transform");
          	values = tr.split('(')[1],
	    	values = values.split(')')[0],
		    values = values.split(',');
		    var current = parseInt(values[4]);
		    if (current == -1*slider_images_width+width)
		    	return;
		    var final = current + a;
		    console.log(final);
        	$(".slider_images").css("transform", "translateX("+final+"px)");
          });

          $(".left_angle_container i").click(function () {
          	var tr = $(".slider_images").css("transform");
          	values = tr.split('(')[1],
	    	values = values.split(')')[0],
		    values = values.split(',');
		    var current = parseInt(values[4]);
		    if (current == 0)
		    	return;
		    var final = current - a;
		    console.log(final);
        	$(".slider_images").css("transform", "translateX("+final+"px)");
          });

			$(".slider").mouseenter(function(){
          	$(".slider .fa").css("display", "block");
          	$(".slider .left_angle_container").css("transform", "translateX(2rem)");
          	$(".slider .right_angle_container").css("transform", "translateX(-2rem)");
          });

			$(".slider").mouseleave(function(){
	      	$(".slider .fa").css("display", "none");
	      	$(".slider .left_angle_container").css("transform", "translateX(0rem)");
          	$(".slider .right_angle_container").css("transform", "translateX(0rem)");
	      });          

     	 });










