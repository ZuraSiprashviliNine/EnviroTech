
$(document).ready(() => {
	let scrolled = false;
	$(window).scroll(function(){
		if($(document).scrollTop() > 10){
			if(!scrolled){
				scrolled = true;
			}
		}else{
			if(scrolled){
				scrolled = false;
			}
		}

		if(scrolled){
			$('.navbar').addClass('py-0');
			$('body').attr('style', `padding-top: ${$('nav').height()}px !important`);
		}else{
			$('.navbar').removeClass('py-0');
			$('body').attr('style', `padding-top: ${$('nav').height()}px !important`);
		}
	});


	$('body').attr('style', `padding-top: ${$('nav').height()}px !important`);
	
});
