import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

function linkSwiper() {
  const linkSwiper = new Swiper(".link-swiper", {
    spaceBetween: 20,
    slidesPerView: 1.3,
    centeredSlides: true,
    loop: true,
    modules: [Navigation, Pagination],
    pagination: {
      el: ".link-swiper-pagination",
      clickable: true
    },

    navigation: {
      nextEl: ".link-swiper-next",
      prevEl: ".link-swiper-prev",
    },

    breakpoints: {
      567: {
        spaceBetween: 30,
        slidesPerView: 3.75,
        centeredSlides: false,
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 5,
        centeredSlides: false,
      },
      991: {
        spaceBetween: 32,
        slidesPerView: 5,
        centeredSlides: false,
      },
    },

    on: {
      init: function() {
        let slideLength = this.slides.length;
        let activeSlide = document.querySelector(".link-swiper .swiper-slide.swiper-slide-active");
        let activeIndex = activeSlide.getAttribute("data-swiper-slide-index");
        // let prevOpaIndex = returnPrevOpacity(activeIndex, slideLength);
        let nextOpaIndex = parseInt(returnNextOpacity(activeIndex, slideLength));

        makeOpacity(activeIndex, nextOpaIndex);
      },

      slideChangeTransitionStart: function() {
        let slideLength = this.slides.length;
        let activeSlide = document.querySelector(".link-swiper .swiper-slide.swiper-slide-active");
        let activeIndex = activeSlide.getAttribute("data-swiper-slide-index");
        // let prevOpaIndex = returnPrevOpacity(activeIndex, slideLength);
        let nextOpaIndex = parseInt(returnNextOpacity(activeIndex, slideLength));
        makeOpacity(activeIndex, nextOpaIndex);

      }
    },
  });

  function returnNextOpacity(activeIndex, sliderLength) {
    // let t = parseInt(activeIndex) + 2;

    // if(t == sliderLength) {
    //   return 0;
    // }else if(t > sliderLength) {
    //   return 1;
    // }else {
    //   return t;
    // }
    // console.log(activeIndex);

    let nextSlideIndex = parseInt(activeIndex) + 4;

    if(nextSlideIndex >= sliderLength) {
      return (nextSlideIndex - sliderLength);
    }else {
      return nextSlideIndex;
    }

    // return activeIndex;
  }

  // function returnPrevOpacity(activeIndex, sliderLength) {
  //   // if(activeIndex == 0) {
  //   //   return sliderLength - 2;
  //   // }else if(activeIndex == 1) {
  //   //   return sliderLength - 1;
  //   // }else {
  //   //   return (activeIndex - 2);
  //   // }

  //   // if(activeIndex)

  //   let nextSlideIndex = activeIndex + 5;

  //   if(nextSlideIndex >= sliderLength) {
  //     return (nextSlideIndex - sliderLength);
  //   }else {
  //     return nextSlideIndex;
  //   }

  // }

  function makeOpacity(prevIndex, nextIndex) {

    if(document.querySelectorAll(".op-low").length > 0) {
      document.querySelectorAll(".op-low").forEach(slideOpLow => {
        slideOpLow.classList.remove("op-low");
      });
    }

    document.querySelector(`.links-block [data-swiper-slide-index='${prevIndex}']`).classList.add("op-low");

    document.querySelector(`.links-block [data-swiper-slide-index='${nextIndex}']`).classList.add("op-low");
  }

  linkSwiper;
}
export { linkSwiper };