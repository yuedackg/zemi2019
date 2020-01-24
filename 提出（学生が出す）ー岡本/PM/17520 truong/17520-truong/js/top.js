$(document).ready(function() {
	$(window).scroll(function(event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if(pos_body>20){
			$('.menu').addClass('co-dinh-menu');
		}
		else {
			$('.menu').removeClass('co-dinh-menu');
		}
		if(pos_body>1200){
			$('.on-top').addClass('hien-ra');
		}
		else{
			$('.on-top').removeClass('hien-ra');
		}
	});
	$('.on-top').click(function(event) {
		$('html,body').animate({
			scrollTop: 0},
			1400);
	});
});