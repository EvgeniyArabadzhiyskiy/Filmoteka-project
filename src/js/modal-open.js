import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';
import {addToWatched} from './addToWatched';
import { addToQueue } from './addToQueue';
import removeFromWatched from './removeFromWatched';
import removeFromQueue from './removeFromQueue';
import {watchedArr} from './addToWatched'

const modal = document.querySelector('.backdrop');
const filmList = document.querySelector('.movie-card-list');
const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');


export default function openModal(){

    filmList.addEventListener('click', onClick)

}

async function onClick(e) {

    if (e.target.nodeName !== "IMG" && e.target.nodeName !== "H2") {
        return
    }
    modal.classList.remove('is-hidden')
    modalButtonClose.addEventListener('click', modalClose)
    window.addEventListener("keyup", press)

    const filmId = e.target.dataset.id;

    const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);

    const createMarkupFilmInModal = await renderMovieModal(fullMovieInfo);

    modalMovieContainer.insertAdjacentHTML("beforeend", createMarkupFilmInModal);
    
    const addToWatchedBtn = document.querySelector('.btn-watched');
    const addToQueueBtn = document.querySelector('.btn-qweqwe');
    console.log('watchedArr', watchedArr);
    
    watchedArr.forEach(obj => {
        if (obj.id === Number(filmId)) {
            addToWatchedBtn.classList.add('pressed');
            addToWatchedBtn.textContent = 'Remove from Watched';
        }
        else {
            addToWatchedBtn.classList.remove('pressed');
            addToWatchedBtn.textContent = 'Add to Watched'
         }
    });


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


function press(e){
    if(e.code === "Escape"){
        modalClose();
        window.removeEventListener("keyup", press);
        modalButtonClose.removeEventListener('click', modalClose);
    }
    return
}


function modalClose(e){
    modal.classList.add('is-hidden');
    window.removeEventListener("keyup", press);
    modalButtonClose.removeEventListener('click', modalClose);
    modalMovieContainer.innerHTML = "";
}

