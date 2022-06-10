import Swiper, { Navigation, Autoplay } from 'swiper';
import openModal from "./modal-open";

const sliderContainer = document.querySelector('.mySwiper');

openModal(sliderContainer);

const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Autoplay],
    // centeredSlides: true,
    spaceBetween: 5,
    breakpointsBase: 'container',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 3,
        },
        400: {
            slidesPerView: 4,
        },
        500: {
            slidesPerView: 5,
        },
        600: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 8,
        },
        980: {
            slidesPerView: 10,
        },
        1024: {
            slidesPerView: 11,
        },
    },
    });