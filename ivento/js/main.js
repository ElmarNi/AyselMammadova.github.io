$(document).ready(function() {

    // dropdown 

    // Add slideDown animation to Bootstrap dropdown when expanding.
    // $('.dropdown').on('show.bs.dropdown', function() {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideDown('fast');
    // });

    // Add slideUp animation to Bootstrap dropdown when collapsing.
    // $('.dropdown').on('hide.bs.dropdown', function() {
    //     $(this).find('.dropdown-menu').first().stop(true, true).slideUp('fast');
    // });

    // window scroll

    $(window).scroll(function(){
        var header = $('header'),
            scroll = $(window).scrollTop();
        var headHeight = $('header').height();

        if (scroll >= headHeight) header.addClass('sticky')
        else header.removeClass('sticky');
    });


    //main carousel
    
    $('.mainCarousel').owlCarousel({ 
        loop: true,
        lazyLoad:true,
        mouseDrag: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 2000,
        dotsEach: true,
        dots: true,
        dotsContainer: '#customDots',
        nav: true,
        navContainer: '#customNavs',
        navSpeed: 2000,
        smartSpeed: 2000,
        items: 1	
    });


    //advantages carousel
    $('.advantageCarousel').owlCarousel({
        loop: false,
        lazyLoad:true,
        margin: 10,
        autoplay: false,
        dots: false,
        nav: true,
        navText: ["⟨","⟩"],
        navSpeed: 500,
        smartSpeed: 500,
        slideBy: 2,
        items: 8
    });


    // remove old nav

    $('#customNavs').find('button').remove();


    // animate main slide caption
   
    var owl = $('.mainCarousel');
    
    $(".mainCarousel .owl-item.active h1").addClass('animated fadeInRight delay-1s faster');
    $(".mainCarousel .owl-item.active p").addClass('animated fadeInRight delay-1-5s faster');
    $(".mainCarousel .owl-item.active .custom-btn").addClass('animated fadeIn delay-2s faster');
    
    owl.on('change.owl.carousel', function(event) {
            
        var item = event.item.index-1;
    
        $('.mainCarousel h1').removeClass('animated fadeInRight delay-1s faster');
        $('.mainCarousel p').removeClass('animated fadeInRight delay-1-5s faster');
        $('.mainCarousel .custom-btn').removeClass('animated fadeIn delay-2s faster');
        
        $('.mainCarousel .owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight delay-1s faster');
        $('.mainCarousel .owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInRight delay-1-5s faster');
        $('.mainCarousel .owl-item').not('.cloned').eq(item).find('.custom-btn').addClass('animated fadeIn delay-2s faster');          
    });


    // nav and dot function

    $('#customDots .owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 2000]);
    });

    $('#customNavs .owl-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    $('#customNavs .owl-next').click(function () {
        owl.trigger('next.owl.carousel');    
    });

    
    // stop autoplay and start

    $('#customNavs > .owl-nav').on('click', function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    $('#customNavs > .owl-nav').mouseleave(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
    });
    
    $('#customDots > .owl-dot').on('click', function () {
        $('.owl-carousel').trigger('stop.owl.autoplay');
    });
    
    $('#customDots > .owl-dot').mouseleave(function(){
        $('.owl-carousel').trigger('play.owl.autoplay',[5000]);
    });


    // add active class on advantages carousel

    $('#advantages .item a').click(function() {
        $(this).addClass('active');
        $(this).parents().eq(1).siblings().find('a').removeClass('active');
    });

    
    // change image on service hover 

    $('#services .service').hover(function() {
        var serviceIcon = $(this).find('.service-info img').attr('src').split('.')[0];
        var serviceEnd = $(this).find('.service-info img').attr('src').split('.')[1];
        $(this).find('.service-info img').attr('src', serviceIcon + '-white.' + serviceEnd);
    }, function() {
        var serviceIcon = $(this).find('.service-info img').attr('src').split('.')[0].split('-')[0];
        var serviceEnd = $(this).find('.service-info img').attr('src').split('.')[1];
        $(this).find('.service-info img').attr('src', serviceIcon + '.' + serviceEnd);
    });
});