$(document).ready(function () {
	if($(window).width() <= 1024){
		return
	}else{
		$('.single-product-product-image-inner img').hover(function(){
			$(this).blowup({
				background : "#ffffff"
			});
		});
		$('.single-product-product-image-inner img').blowup({
			background : "#ffffff"
		});
	}	
})
	
