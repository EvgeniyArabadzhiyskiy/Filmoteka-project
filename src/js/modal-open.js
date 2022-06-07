import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';
import { addToWatched } from './addToWatched';
import { addToQueue } from './addToQueue';
import removeFromWatched from './removeFromWatched';
import removeFromQueue from './removeFromQueue';

const modal = document.querySelector('.backdrop');
const filmList = document.querySelector('.movie-card-list');
const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');


export default function openModal() {

    filmList.addEventListener('click', onClick)

}

async function onClick(e) {

    if (e.target.nodeName !== "IMG" && e.target.nodeName !== "H2") {
        return
    }
    document.body.classList.add("modal-open");
    modal.classList.remove('is-hidden')
    modalButtonClose.addEventListener('click', modalClose)
    window.addEventListener("keyup", press)
    window.addEventListener("click", onCloseBackdropClick)

    const filmId = e.target.dataset.id;

    const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);

    const createMarkupFilmInModal = await renderMovieModal(fullMovieInfo);

    modalMovieContainer.insertAdjacentHTML("beforeend", createMarkupFilmInModal);

    const addToWatchedBtn = document.querySelector('.btn-watched');
    const addToQueueBtn = document.querySelector('.btn-qweqwe');

    addToWatchedBtn.addEventListener('click', () => {
        addToWatchedBtn.classList.toggle('pressed');
        if (addToWatchedBtn.classList.contains('pressed')) {
            addToWatchedBtn.textContent = 'Remove from Watched';
            addToWatched(fullMovieInfo);
        } else {
            addToWatchedBtn.textContent = 'Add to Watched';
            removeFromWatched(filmId);
        }
    });
    addToQueueBtn.addEventListener('click', () => {
        addToQueueBtn.classList.toggle('pressed');
        if (addToQueueBtn.classList.contains('pressed')) {
            addToQueueBtn.textContent = 'Remove from Queue';
            addToQueue(fullMovieInfo);
        } else {
            addToQueueBtn.textContent = 'Add to Queue';
            removeFromQueue(filmId);
        }
    });

}


function press(e) {
    if (e.code === "Escape") {
        modalClose();
        window.removeEventListener("keyup", press);
        modalButtonClose.removeEventListener('click', modalClose);
    }
    return
}

function onCloseBackdropClick(e) {
    if (e.target.dataset.close === 'backdrop') {
        modalClose();

    }
    return;
}

function modalClose(e) {
    document.body.classList.remove("modal-open");
    modal.classList.add('is-hidden');
    window.removeEventListener("keyup", press);
    window.removeEventListener("click", onCloseBackdropClick);
    modalButtonClose.removeEventListener('click', modalClose);
    modalMovieContainer.innerHTML = "";
}