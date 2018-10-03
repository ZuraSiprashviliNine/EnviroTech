
$(document).ready(() => {
	
	let scrolled = false;

	$(window).scroll(() => {
		if($(document).scrollTop() > 50){
			if(!scrolled){
				scrolled = true;

				$('#navigation').addClass('scrolled').removeClass('py-3').addClass('py-2');
			}
		}else{
			if(scrolled){
				scrolled = false;

				$('#navigation').removeClass('scrolled').addClass('py-3').removeClass('py-2');
			}
		}
	});


	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		direction: 'vertical',
	});

	let _x = '';
	$('#foc_').find('input').focus(function(){
		_x = $(this).prop('placeholder');
		$(this).prop('placeholder', '');
	});
	$('#foc_').find('input').blur(function(){
		$(this).prop('placeholder', _x);
	})

});
