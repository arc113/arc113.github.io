



function whichTransitionEvent(){
  var t,
      el = document.createElement("fakeelement");

  var transitions = {
    "transition"      : "transitionend",
    "OTransition"     : "oTransitionEnd",
    "MozTransition"   : "transitionend",
    "WebkitTransition": "webkitTransitionEnd"
  }

  for (t in transitions){
    if (el.style[t] !== undefined){
      return transitions[t];
    }
  }
}

var no_of_images = $(".slider_images > div").length;
//$("html").append(no_of_images);

var width = $(window).width();
//$("html").append(width);

var slider_images_width = no_of_images*width;
$(".slider_images").css("width", slider_images_width+"px");
$(".image").css("width", width);


var a = -1*width;

$(function () {

            console.log("HI");

            var right = function() {
              var transitionEvent = whichTransitionEvent();       
              var tr = $(".slider_images").css("transform");
              values = tr.split('(')[1],
              values = values.split(')')[0],
              values = values.split(',');
              var current = parseInt(values[4]);
              console.log("HIdd");
              if (current == -1*slider_images_width+width){
              	$(".slider .right_angle_container .fa:hover").css("background-color","red");
                return;
            	}
			  $(".slider .fa:hover").css("background-color","blue");
              var final = current + a;
              console.log(final);
                $(".slider_images").css("transform", "translateX("+final+"px)");

                $(".slider .container i").off();
                $(".slider .container i").css("cursor", "not-allowed");

                $(".slider_images").one(transitionEvent,
                  function(event) {
                    $(".slider .container i").css("cursor", "pointer");
                    $("#RX").on('click', right);
                    $("#LX").on('click', left);
                  });

              };

          
          

            var left = function() {
            	var transitionEvent = whichTransitionEvent();
            	var tr = $(".slider_images").css("transform");
            	values = tr.split('(')[1],
  	    	    values = values.split(')')[0],
  		        values = values.split(',');
  		        var current = parseInt(values[4]);
  		        $(".slider .left_angle_container .fa").css("background-color","black");
  		        if (current == 0){
  		        	$(".slider .left_angle_container .fa:hover").css("background-color","red");
  		        	return;	
  		        }
                $(".slider .fa:hover").css("background-color","blue");
  		        var final = current - a;
  		        console.log(final);
              $(".slider_images").css("transform", "translateX("+final+"px)");
              $(".slider i").off();
              $(".slider i").css("cursor", "not-allowed");

              $(".slider_images").one(transitionEvent,
                  function(event) {
                    $(".slider .container i").css("cursor", "pointer");
                    $("#RX").on('click', right);
                    $("#LX").on('click', left);
                  });

            	};

            $("#RX").on('click', right);
            $("#LX").on('click', left);


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

/*			$(".slider .left_angle_container").hover(function(){
				while(1){
					$(".slider .left_angle_container").css("transform", "translateX(-2rem)");
					delay(0.01);
					$(".slider .left_angle_container").css("transform", "translateX(2rem)");
				}
			});
*/
     	 });









