		







var t = function(){
		$("html").append("HI");
	  	var a = parseInt(	document.getElementById("content").innerHTML	);
	  	a = 1-a;
	  	document.getElementById("content").innerHTML = a;
	  	$("#bt").off();
	  	$("#bt").on('click', t);

	}

$("#bt").on('click', t);


$("#on").click(

	function(){
		$("#bt").on('click', t);
	}

	);