		  var h = $(window).height();
		  var w = $(window).width();
		
		  h = 1*h+15;
		  w = 1*w;
		
		  var l = 1366;
		  var b = 1000;
		
		  h = Math.max(600, h);
//		  w = Math.max(1300, w);

		  
      $('#left').append(h);
      $('#left').append("<br>"+w);
		
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
      var ul_top_margin = (header - 20)/2;
      var li_margin = (50/l)*w;
      
		  $("header").css("height", header+"px");
      $("#logo").css({"margin-top": logo_top+"px", "margin-left": def_margin+"px"});
      $("#head2 ul").css({"top": ul_top_margin+"px",
                                             "right": def_margin+"px",
                                              "padding": "0px 0px 0px 0px"});
      $("footer ul").css({"top": ul_top_margin+"px",
                                          "padding": "0px 0px 0px 0px"});                                              
      $("#banner").css({"height": banner+"px"});
      $("h1").css({"left": (w-128)/2+"px", "top": h1_top+"px"}); 
      $("#arr_l").css({"top": arr_top+"px", "left": def_margin-10});
      $("#arr_r").css({"top": arr_top+"px", "right": def_margin-10});      
      $("#main").css({"margin-left": def_margin+"px", "margin-top": m_top_margin+"px", "width": main_x+"px", "height": main_y+"px"});
      $("#left").css({"width": yellow_x+"px"});
      $("#linner").css({"margin": p_top_margin+"px 0px 0px "+p_left_margin+"px"});
      $("#rupper").css({"height": orange_y+"px", "width": orange_x+"px"});
      $("#rlower").css({"height": green_y+"px", "width": green_x+"px", "margin-top": m_top_margin+"px"});
      $("footer").css({"height": footer+"px", "margin-top": m_top_margin+"px"});
