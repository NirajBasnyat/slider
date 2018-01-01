$(document).ready(function() {
	
	$('.rightarrow').click(function(){
		var currentSlide = $('.slide.active');
		var nextSlide = $(currentSlide).next();

		currentSlide.fadeOut('slow').removeClass('active');
		nextSlide.fadeIn('slow').addClass('active');

		if(nextSlide.length == 0)
		{
			$('.slide').first().fadeIn('slow').addClass('active');
		}
	});

	$('.leftarrow').click(function(){
		var currentSlide = $('.slide.active');
		var prevSlide = $(currentSlide).prev();

		$(currentSlide).fadeOut('slow').removeClass('active');
		$(prevSlide).fadeIn('slow').addClass('active');

		if(prevSlide.length == 0){
			$('.slide').last().fadeIn('fast').addClass('active');
		}
	});

});