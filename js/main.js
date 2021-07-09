$(function () {


    var scr = $(".scroll__non-scroling");

    scr.mousedown(function () {

        var startX = this.scrollLeft + event.pageX;

        var startY = this.scrollTop + event.pageY;

        scr.mousemove(function () {

            this.scrollLeft = startX - event.pageX;

            this.scrollTop = startY - event.pageY;

            return false;

        });

    });

    $(window).mouseup(function () {

        scr.off("mousemove");

    });

    $().resize(function () {


    });



    window.addEventListener("resize", function () {
        if (window.innerWidth <= 770) {
            $('.slaider').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }).on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });

        } else {
            $('.slaider').slick('unslick');
        }
    });

    $('.slaider-2').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    }).on('setPosition', function (event, slick) {
        slick.$slides.css('height', slick.$slideTrack.height() + 'px');
    });


    $('.slaider-3').slick({
        infinite: true,
        dots: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{

            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }]
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 770) {
            $('.slaider-4').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            }).on('setPosition', function (event, slick) {
                slick.$slides.css('height', slick.$slideTrack.height() + 'px');
            });

        } else {
            $('.slaider-4').slick('unslick');
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth <= 710) {
            $('.slaider-5').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            });

        } else {
            $('.slaider-5').slick('unslick');
        }
    });
    window.addEventListener("resize", function () {
        if (window.innerWidth <= 710) {
            $('.slaider-6').slick({
                infinite: true,
                dots: false,
                arrows: false,
                slidesToShow: 2,
                slidesToScroll: 1
            });

        } else {
            $('.slaider-6').slick('unslick');
        }
    });


});