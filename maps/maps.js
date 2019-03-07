var $jaipur = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.38256419447!2d75.65047042857812!3d26.885447917100723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1551979827831";

var $jodhpur = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.29614871483!2d72.9605024670806!3d26.270489696553547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1551979924126";

var $bikaner = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56353.568583116416!2d73.28452090452983!3d28.021479281979268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fdd7bd90bbb89%3A0x4ce3121a7664816b!2sBikaner%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1551979990192";

var $ajmer = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114306.33196322493!2d74.56567292110437!3d26.453379820460572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396be6d8fcb7cd01%3A0xcbaf8f12eb8100ee!2sAjmer%2C+Rajasthan!5e0!3m2!1sen!2sin!4v1551979967043";


$(function(){
	$("#jaipur").click(function (){
		$("#ifr").attr('src', $jaipur);
//		$("body").css({"background-color": "blue"});
	});

	$("#jodhpur").click(function (){
		$("#ifr").attr('src', $jodhpur);
//		$("body").css({"background-color": "green"});
//		document.getElementById('#ifr').contentDocument.location.reload(true);

	});

	$("#bikaner").click(function (){
		$("#ifr").attr('src', $bikaner);
	});

	$("#ajmer").click(function (){
		$("#ifr").attr('src', $ajmer);
	});

	$("h2").click(function (){
		window.scrollTo(0,0);
	});
});