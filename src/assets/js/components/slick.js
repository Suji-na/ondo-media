import $ from "jquery";
import "slick-carousel";

function slick() {

    $(".slider").on("init", function (event, slick) {
        let currentSlideNo = slick.currentSlide + 1;
        let totalSlideNo = slick.slideCount;

        updateSliderCounter(currentSlideNo, totalSlideNo);
    });

    $(".slider").slick({
        autoplay: true,
        autoplaySpeed: 2000,
        infinite: true,
        slidesToShow: 2.74,
        arrows: true,
        initialSlide: 0,
        // dots: false,

        prevArrow: $(".article-scroll-lft .slick-prev"),
        nextArrow: $(".article-scroll-lft .slick-next"),

        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    infinite: true,
                    slidesToShow: 2.3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    slidesToShow: 1.5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    centerMode: true,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ],
    });

    $(".slick_toggle").on("click", function () {
        if ($(this).hasClass("paused")) {
            $(".slider").slick("slickPlay");
            $(this).removeClass("paused");
        } else {
            $(".slider").slick("slickPause");
            $(this).addClass("paused");
        }
    });


    $(".slider").on("afterChange", function (event, slick, currentSlide) {
        let currentSlideNo = currentSlide + 1;
        let totalSlideNo = slick.slideCount;
        updateSliderCounter(currentSlideNo, totalSlideNo);
    });


    function updateSliderCounter(currentSlideNo, totalSlideNo) {
        let sliderCounter = document.getElementById("slider-counter");

        sliderCounter.textContent = currentSlideNo + "/" + totalSlideNo;
    }


}
export { slick };