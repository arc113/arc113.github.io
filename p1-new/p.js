		  var h = $(window).height();
		  var w = $(window).width();
		
		  h = 1*h+15;
		  w = 1*w;
		
		  var l = 1366;
		  var b = 1000;
		
//		  h = Math.max(600, h);
//		  w = Math.max(1300, w);

		  
      $('#linner').append("<b>"+h+"x"+w+"</b>");
//      $('#linner').append("<br>"+w);
		
		  var header = footer = (100/b)*h;
		  var banner = (300/b)*h;
		  var h1_top = (banner-40)/2;
		  var logo_top = (header-60)/2;
		  var arr_top = (banner - 32)/2;
		  var main_x = (1166/l)*w;
		  var main_y = (480/b)*h;
		  var yellow_x = (500/1166)*main_x;
		  var yellow_y = main_y;
		  var orange_x = green_x = (656/1166)*main_x;
		  var orange_y = (280/480)*main_y;
		  var green_y = (190/480)*main_y;
      var purple_x = (290/500)*yellow_x;
		  var purple_y = (360/480)*yellow_y;
		  var p_top_margin = (20/b)*h;
		  var p_left_margin = -1*(60/l)*w;
		  var m_top_margin = m_bottom_margin = (10/b)*h;
      var def_margin = (100/l)*w;                     //Side Margin
      var ul_top_margin = (header-header )/2;
      var li_margin = (50/l)*w;
      var temp = $("li").outerHeight();
      var head2lip = 15*header/100;
		  $("header").css("height", header+"px");
      $("#logo").css({"margin-top": logo_top+"px", "margin-left": def_margin+"px"});
      
      $("#head2 li").css({"padding-top": head2lip+"px", "padding-bottom": head2lip+"px"});
      $("footer li").css({"padding-top": head2lip+"px", "padding-bottom": head2lip+"px"});

      $("#banner").css({"height": banner+"px"});

      $("#arr_l").css({"top": arr_top+"px", "left": def_margin-10});
      $("#arr_r").css({"top": arr_top+"px", "right": def_margin-10});      
      $("#main").css({"margin-left": def_margin+"px", "margin-top": m_top_margin+"px", "width": main_x+"px", "height": main_y+"px"});
      $("#left").css({"width": yellow_x+"px"});
      $("#linner").css({"margin": p_top_margin+"px 0px 0px "+p_left_margin+"px"});
      $("#rupper").css({"height": orange_y+"px", "width": orange_x+"px"});
      $("#rlower").css({"height": green_y+"px", "width": green_x+"px", "margin-top": m_top_margin+"px"});
      $("footer").css({"height": footer+"px", "margin-top": m_top_margin+"px"});
      
      $(function () {
          $(".arrow").click(function () {
            var r = Math.floor(Math.random()*0);
            var g = Math.floor(Math.random()*256);
            var b = Math.floor(Math.random()*256);
            var t = "rgb("+r+","+g+","+b+")";
            var u = "rgb("+0+","+(127-g)+","+(127-b)+")";
            $("#banner").css({"background-color":  t, "color": u});
          });
      });
      
      $(function () {
          $("#head2 li").click(function () {
            $("li").removeClass("selected");
            $("li").css({"border-radius": "30px"});
//             $("li").css({"background-color": "inherit"});
//             $("li:hover").css({"background-color": "black"});
//             $("li").css({"border-radius": "90px"});
             
            $(this).addClass("selected");
            $(this).css({"border-radius": "0px"});
          });
      });
