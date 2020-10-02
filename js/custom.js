$(function() {
    'use strict';
    //Responsive (Home div)
    $(window).on('load resize', function() {
        var navbarHeight = $('.navbar').innerHeight();
        var winHeight = window.innerHeight;
        $('.home').css({
            height: (winHeight - navbarHeight),
            marginTop: navbarHeight
        });

        $(".contact-us .content").css({
            paddingTop: $(".contact-us .wave-img").innerHeight()
        });
    });
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 0,
        loop: false,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            578: {
                slidesPerView: 4 
            },
            1440 : {
                slidesPerView: 8
            },
            1750 : {
                slidesPerView: 10
            },
        }
    });

    
    $('.navbar .navbar-nav .nav-item').on('click', function() {
        var dataNav = $(this).data('nav');
        $(this).addClass('active').siblings().removeClass('active');
        $('html, body').animate({
            scrollTop: $(dataNav).offset().top - 70
        }, 700);
    });
    

    
    $('.info-section .navbar-container .nav-item').on('click', function() {
        $(this).addClass('active').siblings('.nav-item').removeClass('active');
    });
    /*Start Info Content */
    $('.info-section .nav-item').on('click', function() {
        var dataNav = $(this).data('nav');
        var navContent = $(this).parents('.info-section').find($(dataNav));
        
        //Screen > 992
        if (window.innerWidth > 992) {
            navContent.siblings('.nav-content').fadeOut(0, function() {
                navContent.fadeIn(200);
            });
        } else {
            navContent.siblings('.nav-content').slideUp(200, function() {
                navContent.slideDown(200);
            });
        }
    });
    /*End Info Content */
    /* [Major Suppliers] [technology-training] */
    $('.inner-content .nav-item').on('click', function() {
        $(this).addClass('active').siblings('.nav-item').removeClass('active');
        var dataNav = $(this).data('nav');
        var navContent = $(this).parents('.inner-content').find($(dataNav));
    
        //Screen > 992
        if (window.innerWidth > 992) {
            navContent.siblings('.nav-content').fadeOut(0, function() {
                navContent.fadeIn(200);
            });
        } else {
            navContent.siblings('.nav-content').slideUp(200, function() {
                navContent.slideDown(200);
            });
        }
    });





    /*Benefits Section */
    $(".benefits-section");
    
    
    

});