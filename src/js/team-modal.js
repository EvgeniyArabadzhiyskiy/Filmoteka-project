
import Swiper, { Navigation, Pagination } from 'swiper';

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

const swiper = new Swiper(".image-slider", {
    modules: [Navigation, Pagination],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    slidesPerView: 5,
    spaceBetween: 10,
})

console.log(swiper);

const modalOpenBtn = document.querySelector(".students-modal-btn");
const studentsModal = document.querySelector(".backdrop-team");
const modalCloseBtn = document.querySelector(".modal-team__btn-close");


modalOpenBtn.addEventListener("click", toggleModal);

modalCloseBtn.addEventListener("click", toggleModal);

studentsModal.addEventListener("click", (e) => {
    if (e.target === studentsModal) {
        toggleModal();
    }
});

function toggleModal() {
    studentsModal.classList.toggle("is-hidden");
    document.body.classList.toggle("modal-open");
};



