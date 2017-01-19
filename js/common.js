$(function() {

    $( document ).ready(function() {
        
        //Video
        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        $(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        var height = $(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        $('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        $(element).each(function(){
            $(this).data('height', $(this).height());
            $(this).data('width', $(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        var windowWidth = $(window).width(),
            windowHeight = $(window).height() + 5,
            videoWidth,
            videoHeight;


        $(element).each(function(){
            var videoAspectRatio = $(this).data('height')/$(this).data('width');

            $(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                $(this).width(videoWidth).height(videoHeight);
            }

            $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }
    // end video
    
    $(function(){
        var button = $('.socical__button');
        
        button.hover(function(){
            $(this).find('ul').addClass('active');
        }, function(){
            $(this).find('ul').removeClass('active');
        });
            
    });
    
    //Слайдер
    $('.slider').slick({
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 3,
        draggable: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '100px',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px'
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '50px'
                }
            }
        ]
    });
    
    if ($(window).width() > 768){
        
        //Дополнение к слайдеру
        $(function(){
            var minItem = $('.to-slide__item'),
                slideItem = $('.slider__item'),
                numberItem = 0;

            minItem.eq(numberItem).addClass('active');

            minItem.click(function(e){
                minItem.eq(numberItem).removeClass('active')
                $(this).addClass('active');
                numberItem = $(this).data('slide');
                goToSlide();
            });

            function goToSlide(){
                $('.slider').slick('slickGoTo', numberItem);
            }

            $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
                minItem.eq(numberItem).removeClass('active');
                numberItem = nextSlide
                minItem.eq(numberItem).addClass('active'); 
            });

        });
        $('video.fillWidth').attr('autoplay', 'autoplay');
    }
    
    
    
    
    
});
