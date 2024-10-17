// import $ from "jquery";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
Swiper.use([Autoplay]);

// es

function newsSwiper() {

    document.addEventListener("DOMContentLoaded", function () {
        const playButton = document.querySelector(".swiper-button-play");
        let mainSwiperWrapper = document.querySelector(".main-swiper .swiper-wrapper");
        let allSlides = document.querySelectorAll(".main-swiper .swiper-slide");
        let slidesNo = document.querySelectorAll(".main-swiper .swiper-slide").length;
        let mainSwiperMaxSliesPerView = 4.62;

        copySlides();

        // let slideActiveNo = 0;

        const newsSwiper = new Swiper(".news-swiper", {
            spaceBetween: 30,
            slidesPerView: 2.75,
            modules: [Navigation, Pagination],
            pagination: {
                el: ".news-swiper-pagination",
                type: "fraction",
            },

            navigation: {
                nextEl: ".news-swiper-next",
                prevEl: ".news-swiper-prev",
            },

            breakpoints: {
                767: {
                    slidesPerView: 2.75,
                },

            }
        });

        // document.addEventListener("DOMContentLoaded", function () {
        //   let slideActive = document.querySelectorAll(".swiper-slide-active");
        //   if ((slidesNo <= 4) && (innerWidth >= 768)) {
        //     slideActive.forEach(function (slide) {
        //       if (slide.classList.contains("swiper-slide-active")) {
        //         console.log("small");
        //         console.log(slide);
        //         slide.style.marginInline = "0";
        //         slide.style.transform = "scale(1)";
        //       }
        //     });
        //   }
        // });

        // let bulletsBtnClicked = false;

        const mainSwiper = new Swiper(".main-swiper", {
            modules: [Navigation, Pagination],
            loop: slidesNo <= 4 ? false : true,
            slidesPerView: 1,
            centeredSlides: slidesNo <= 4 ? false : true,
            centeredSlidesBounds: true,
            initialSlide: 0,
            autoplay: (slidesNo <= 4) ? false : {
                delay: 3000,
                disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".main-swiper-next",
                prevEl: ".main-swiper-prev",
            },

            pagination: slidesNo <= 4 ? false : {
                el: ".main-swiper-pagination",
                clickable: false,
            },

            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                768: {
                    // slidesPerView: slidesNo <= 4 ? 4 : 4.62,
                    slidesPerView: slidesNo <= 4 ? 4 : 4.1,
                },

                992: {
                    slidesPerView: slidesNo <= 4 ? 4 : 4.62,
                }
            },

            on: {
                init: function () {
                    let allBullets = this.pagination.bullets;
                    this.slideToLoop(0, 0);

                    allBullets.forEach((bullets, counter) => {
                        if (counter <= (allBullets.length / 2 - 1)) {
                            bullets.classList.add("show");
                            bullets.dataset.counter = counter;

                            if (counter == (allBullets.length / 2 - 1)) {
                                bullets.classList.add("mr-0");
                            }
                        }
                    });
                },

                slideChange: function () {
                    let allBullets = this.pagination.bullets;
                    let realIndex = this.realIndex;
                    let allSlidesLength = (this.slides.length);
                    let bulletsPos = realIndex;

                    if ((realIndex > (allSlidesLength / 2) - 1)) {
                        bulletsPos = realIndex - (allSlidesLength / 2);
                        allBullets[bulletsPos].classList.add("swiper-pagination-bullet-active");
                    }

                    updateBulletsIndex(realIndex, bulletsPos, allSlidesLength);
                },

                afterInit: function () {
                    let allShowBullets = document.querySelectorAll(".swiper-pagination-bullet.show");
                    let thisSwiper = this;

                    allShowBullets.forEach(bul => {
                        bul.addEventListener("click", function () {

                            if (!bul.classList.contains("swiper-pagination-bullet-active")) {
                                allShowBullets.forEach(bul => bul.classList.remove("swiper-pagination-bullet-active"));
                                bul.classList.add("swiper-pagination-bullet-active");

                                let clickedBulletIndex = parseInt(bul.dataset.counter);

                                // thisSwiper.slideTo(clickedBulletIndex + 2);
                                thisSwiper.slideToLoop(clickedBulletIndex);
                            }
                        });
                    });
                }
            }
        });

        function togglePlayPause() {
            if (!playButton.classList.contains("pause")) {
                mainSwiper.autoplay.stop();
                playButton.textContent = "▶";
                playButton.classList.add("pause");
            } else {
                mainSwiper.autoplay.start();
                playButton.textContent = "=";
                playButton.classList.remove("pause");
            }
        }

        function copySlides() {
            if (mainSwiperWrapper != null) {
                let allSlidesLength = allSlides.length;
                let doubleLimit = Math.ceil(mainSwiperMaxSliesPerView * 2);

                if (allSlidesLength < doubleLimit) {
                    allSlides.forEach(slide => {
                        let copySlide = slide.cloneNode(true);
                        mainSwiperWrapper.appendChild(copySlide);
                    });
                }
            }
        }

        playButton.addEventListener("click", togglePlayPause);

        newsSwiper;
        mainSwiper;

        function updateBulletsIndex(realIndex, bulletIndex, swiperLength) {
            let allShowBullets = document.querySelectorAll(".swiper-pagination-bullet.show");
            let incrementIndex = realIndex;

            let totalIncrement = realIndex + (allShowBullets.length - 1);

            if (totalIncrement >= (swiperLength)) {
                totalIncrement = totalIncrement - (swiperLength);
            }

            if (allShowBullets.length > 0) {
                for (let i = (bulletIndex + 1), j = 0; j < allShowBullets.length; j++){
                    incrementIndex++;

                    if (i >= allShowBullets.length) {
                        i = 0;
                    }

                    if (incrementIndex > (swiperLength - 1)) {
                        incrementIndex = 0;
                    }

                    allShowBullets[i].dataset.counter = incrementIndex;

                    i++;
                }
            }
        }
    });

}

export { newsSwiper };
