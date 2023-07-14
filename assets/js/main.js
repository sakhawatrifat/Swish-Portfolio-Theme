// Remove Promotion Bar
$('.preloader-wrapper').delay(500).fadeOut("500");

$('.promotion-close').click(function(){
    $('body').find('.cmt').addClass('cmt-main');
    $('#promotionBar').addClass('active');
});

// Show Header On Mouse Scroll
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("body").addClass("shrink");
    } else {
        $("body").removeClass("shrink");
    }
    if (scroll >= 100) {
        $("body").addClass("shrink-2");
    } else {
        $("body").removeClass("shrink-2");
    }
});

// Header Menu Show Hide For Mobile
$('.header-nav-item.categories').hover(
    function(){
        $('header').css({'background' : '#ffffff'});
    },function(){
        setTimeout(function() {
            $('header').removeAttr('style');
        }, 400);
        
    }
);
$('.header-menu-toggle-btn').click(function(){
    $(this).toggleClass("header-active");
    $('.header-nav-items-wrapper').toggleClass("category-active");
    $('.category-has-menu-for-mobile-item').removeClass("category-item-active");
    $('body').toggleClass('body-overflow');
});
$(window).resize(function() {  
    if($(window).width() > 1024){
        $('.header-menu-toggle-btn').removeClass("header-active");
        $('.header-nav-items-wrapper').removeClass("category-active");
        $('.category-has-menu-for-mobile-item').removeClass("category-item-active");
        $('body').removeClass('body-overflow');
    }
})


// Go To Subcategory After Click Category For Mobile Submenu
$('.item-title.m-title').click(function(e){
    event.preventDefault();
    var mMenuItem = $(this).attr('data-name');
    $('.category-has-menu-for-mobile-item.'+mMenuItem).addClass('category-item-active');
});
$('.category-back-button').click(function(){
    $(this).closest('.category-has-menu-for-mobile-item').removeClass('category-item-active');
});


// Appear Animation Text On Page Load
$(document).ready(function(){
    if ($(".home-banner-text").length > 0) {
        let bannerTextWrapper = document.querySelector('.home-banner-text'); 
        bannerTextWrapper.innerHTML = bannerTextWrapper.textContent.replace(/\D/g, "<span>$&</span>"); 
        anime.timeline({loop: false})
          .add({
            targets: '.home-banner-text span',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => 100 * (i+1)
        });
    }
});
$(document).ready(function(){
    if ($(".home-banner-text-for-mobile").length > 0) {
        let bannerTextWrapper = document.querySelector('.home-banner-text-for-mobile'); 
        bannerTextWrapper.innerHTML = bannerTextWrapper.textContent.replace(/\D/g, "<span>$&</span>"); 
        anime.timeline({loop: false})
          .add({
            targets: '.home-banner-text-for-mobile span',
            opacity: [0,1],
            easing: "easeInOutQuad",
            duration: 1000,
            delay: (el, i) => 100 * (i+1)
        });
    }
});


// Search Field Show Hide
$('.header-main-search').click(function(e){
    event.preventDefault();
    $('.header-main-search-field-wrapper').css({'top' : '0%'});
    $('body').css({'overflow' : 'hidden'});

});
$('.search-field-remove-btn').click(function(){
    $('.header-main-search-field-wrapper').removeAttr('style');
    
    setTimeout(function() {
        $('body').delay(1000).removeAttr('style');
    }, 300);
});
$('.header-main-search-field-inner .text-remove').click(function(){
    $('.header-main-search-field-inner input').val('');
});

// Change Homepage Image After Hover
$('.home-category-section-col-item a').hover(
    function(){
        var linkAttr = $(this).attr('data-attr');
        $('.home-category-bg-item').each( function(){
            if(linkAttr == $(this).attr('data-attr')){
                $(this).css({'opacity' : '1'});
            }else{
                $(this).css({'opacity' : '0'});
            }
        });
        
    },function(){
        $('.home-category-bg-item').css({'opacity' : '0'});
        $('.home-category-bg-item:first-child').css({'opacity' : '1'});
    }
);


// Home Main Slider For Mobile
$('.home-our-brands-slider-inner.main-slider').owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: true,
    margin: 0,
    smartSpeed: 1000,
    responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            autoplay:true,
            loop: true,
            touchDrag  : true,
            dots: true,
            nav: true
            },
            600: {
            items: 1,
            autoplay:true,
            loop: false,
            touchDrag  : true,
            dots: true,
            nav: true
            },
            1000: {
            items: 1,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            dots: true,
            nav: true,
            margin: 0
            }
        }
});

// Home Popular & New Arrival Product
$('.home-our-brands-slider-inner.new-product').owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            touchDrag: true,
            stagePadding: 0,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            600: {
            items: 1,
            touchDrag: true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            768: {
            items: 2,
            touchDrag: true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            1024: {
            items: 3,
            autoplay:true,
            loop: true,
            touchDrag: true,
            nav: true,
            margin: 20
            },
            1100: {
            items: 5,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            }
        }
});
// Home Popular & New Arrival Product
$('.home-our-brands-slider-inner.popular-product').owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            touchDrag  : true,
            stagePadding: 0,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            600: {
            items: 1,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            768: {
            items: 2,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            1024: {
            items: 3,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            },
            1100: {
            items: 5,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            }
        }
});

// Home Popular & New Arrival Product
$('.home-our-youtube-videos-inner').owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            touchDrag  : true,
            stagePadding: 0,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            600: {
            items: 1,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            768: {
            items: 2,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            1024: {
            items: 3,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            },
            1100: {
            items: 5,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            }
        }
});

// Pause Another Video When Play A video in home
$('video').bind('play', function() {
    activated = this;
    $('audio,video').each(function() {
        if(this != activated) this.pause();
    });
});

// Show Top Filter Option After Click Category In All Product Page
$('.product-top-filter-btn.btn-1').click(function(){
    $('.product-top-filter-btn.btn-2 .title').removeClass("rotate-title");
    $('.product-top-filter-filter-option.option-2 a').removeClass("filter-option-btn-show");
    $('.product-top-filter-filter-option.option-2').removeClass("filter-option-show");

    $('.product-top-filter-filter-option.option-1 a').toggleClass("filter-option-btn-show");
    $(this).find(".title").toggleClass("rotate-title");
    $('.product-top-filter-filter-option.option-1').toggleClass("filter-option-show");
});
$('.product-top-filter-btn.btn-2').click(function(){
    $('.product-top-filter-btn.btn-1 .title').removeClass("rotate-title");
    $('.product-top-filter-filter-option.option-1 a').removeClass("filter-option-btn-show");
    $('.product-top-filter-filter-option.option-1').removeClass("filter-option-show");

    $('.product-top-filter-filter-option.option-2 a').toggleClass("filter-option-btn-show");
    $(this).find(".title").toggleClass("rotate-title");
    $('.product-top-filter-filter-option.option-2').toggleClass("filter-option-show");
});


// Same Series Other Product, Other Series Same Product, Recently My Viewed Product
// Home Popular & New Arrival Product
$('.home-our-brands-slider-inner.single-product').owlCarousel({
    autoplay:true,
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            touchDrag  : true,
            stagePadding: 0,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            600: {
            items: 1,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            768: {
            items: 2,
            touchDrag  : true,
            autoplay:true,
            loop: true,
            margin: 10,
            nav: true
            },
            1024: {
            items: 3,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            },
            1100: {
            items: 5,
            autoplay:true,
            loop: true,
            autoplayHoverPause: true,
            nav: true,
            margin: 20
            }
        }
});


// Show/Hide News Share Option After Click Share 
$('.news-share-main-button').click(function(e){
    event.preventDefault();
    $(this).parent().find('.news-share-social-option').addClass('social-share-option-show');
});

$('.share-social-hide-btn').click(function(e){
    event.preventDefault();
    $('.news-share-social-option').removeClass('social-share-option-show');
});


// Form Validation

if($('.cFName').length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cFName').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.f-name').text('Field Is Required');
            return;
        }
    });
    $('.cFName').on('keyup', function(){
        if($('.cFName').val().length > 0){
            $('.validation-messsage.f-name').text('');
        }else{
            $('.validation-messsage.f-name').text('Field Is Required');
        }
    });
}

if($('.cLName').length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cLName').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.l-name').text('Field Is Required');
            return;
        }
    });
    $('.cLName').on('keyup', function(){
        if($('.cLName').val().length > 0){
            $('.validation-messsage.l-name').text('');
        }else{
            $('.validation-messsage.l-name').text('Field Is Required');
        }
    });
}

if($('.cPhone').length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cPhone').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.phone').text('Field Is Required');
            return;
        }
    });
    $('.cPhone').on('keyup', function(){
        if($('.cPhone').val().length > 0){
            $('.validation-messsage.phone').text('');
        }else{
            $('.validation-messsage.phone').text('Field Is Required');
        }
    });
}

if($('.cEmail').length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cEmail').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.email').text('Field Is Required');
            return;
        }
    });
    $('.cEmail').on('keyup', function(){
        if($('.cEmail').val().length > 0){
            $('.validation-messsage.email').text('');
        }else{
            $('.validation-messsage.email').text('Field Is Required');
        }
    });
}

if($('.cCity').length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cCity').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.city').text('Field Is Required');
            return;
        }
    });
    $('.cCity').on('keyup', function(){
        if($('.cCity').val().length > 0){
            $('.validation-messsage.city').text('');
        }else{
            $('.validation-messsage.city').text('Field Is Required');
        }
    });
}


if ($(".corporateCatalogSelect").length > 0 ){

    $('.submit-btn').on('click', function(e){
        if($('.corporateCatalogSelect').val().length <= 0){
            event.preventDefault();
            $('.validation-messsage.catalog').text('Please Select A Catalog');
            return;
        }
    });
    $('.corporateCatalogSelect').on('change', function(){
        if($('.corporateCatalogSelect').val().length > 0){
            $('.validation-messsage.catalog').text('');
        }else{
            $('.validation-messsage.catalog').text('Please Select A Catalog');
        }
    });
}

if ($(".checkbox.agreement input").length > 0){
    $('.submit-btn').on('click', function(e){
        if(!$('.checkbox.agreement input').is(":checked")){
            event.preventDefault();
            $('.validation-messsage.agreement').text('Field Is Required');
            return
        }
    });
    $('.checkbox.agreement input').on('click', function(){
        if($('.checkbox.agreement input').is(":checked")){
            $('.validation-messsage.agreement').text('');
        }else{
            $('.validation-messsage.agreement').text('Field Is Required');
        }
    });
} 

if($(".corporateInqueryPurpose").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.corporateInqueryPurpose').val().length <= 0){
            event.preventDefault();
            $('.validation-messsage.inquiry').text('Please Select A Purpose');
            return;
        }
    });
    $('.corporateInqueryPurpose').on('change', function(){
        if($('.corporateInqueryPurpose').val().length > 0){
            $('.validation-messsage.inquiry').text('');
        }else{
            $('.validation-messsage.inquiry').text('Please Select A Purpose');
        }
    });
}

if($(".cAddress").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cAddress').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.address').text('Field Is Required');
            return;
        }
    });
    $('.cAddress').on('keyup', function(){
        if($('.cAddress').val().length > 0){
            $('.validation-messsage.address').text('');
        }else{
            $('.validation-messsage.address').text('Field Is Required');
        }
    });
}

if($(".cState").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cState').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.state').text('Field Is Required');
            return;
        }
    });
    $('.cState').on('keyup', function(){
        if($('.cState').val().length > 0){
            $('.validation-messsage.state').text('');
        }else{
            $('.validation-messsage.state').text('Field Is Required');
        }
    });
}


if($(".cPostalCode").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cPostalCode').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.postal-code').text('Field Is Required');
            return;
        }
    });
    $('.cPostalCode').on('keyup', function(){
        if($('.cPostalCode').val().length > 0){
            $('.validation-messsage.postal-code').text('');
        }else{
            $('.validation-messsage.postal-code').text('Field Is Required');
        }
    });
}


if($(".cCountry").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cCountry').val().length <= 0){
            event.preventDefault();
            $('.validation-messsage.country').text('Please Select A Country');
            return;
        }
    });
    $('.cCountry').on('change', function(){
        if($('.cCountry').val().length > 0){
            $('.validation-messsage.country').text('');
        }else{
            $('.validation-messsage.country').text('Please Select A Country');
        }
    });
}


if($(".cMessage").length > 0){
    $('.submit-btn').on('click', function(e){
        if($('.cMessage').val().length <=0){
            event.preventDefault();
            $('.validation-messsage.message').text('Field Is Required');
            return;
        }
    });
    $('.cMessage').on('keyup', function(){
        if($('.cMessage').val().length > 0){
            $('.validation-messsage.message').text('');
        }else{  
            $('.validation-messsage.message').text('Field Is Required');
        }
    });
}


if($('.corporateInqueryPurpose').length > 0){
    $('.submit-btn').click(function(e){
        if($('.cFName').length > 0 || 
            $('.cLName').length > 0 || 
            $('.cEmail').length > 0 || 
            $('.cPhone').length > 0 || 
            $('.corporateInqueryPurpose').length > 0 || 
            $('.cAddress').length > 0 || 
            $('.cCity').length > 0 || 
            $('.cState').length > 0 || 
            $('.cPostalCode').length > 0 || 
            $('.cCountry').length > 0 ||
            $('.cMessage').length > 0 || 
            $('.checkbox.subscribe').length > 0 )
        {
            $('html,body').animate({
                scrollTop: $(".corporate-main-content.form").offset().top},
                'slow');
        }
    });
}