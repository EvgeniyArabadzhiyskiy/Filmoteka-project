import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';
import addToLibrary  from './addToLibrary';
import removeFromLibrary from './removeFromLibrary';
import NProgress from 'nprogress';
//import 'nprogress/nprogress.css';

const modal = document.querySelector('.backdrop');
const filmList = document.querySelector('.movie-card-list');
const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');
let watchedArr = JSON.parse(localStorage.getItem('watched'))? JSON.parse(localStorage.getItem('watched')) : [];
let queueArr = JSON.parse(localStorage.getItem('queue')) ? JSON.parse(localStorage.getItem('queue')) :[];

export default function openModal() {

    filmList.addEventListener('click', onClick)

}

async function onClick(e) {
    NProgress.start();
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

    NProgress.done();
    
    const addToWatchedBtn = document.querySelector('.btn-watched');
    const addToQueueBtn = document.querySelector('.btn-qweqwe');
    console.log('watchedArr', watchedArr);
    console.log('queueArr', queueArr);
    
        watchedArr.forEach(obj => {
            if (obj.id === Number(filmId)) {
                console.log('this film is in the watched');
            addToWatchedBtn.classList.add('pressed');
            addToWatchedBtn.textContent = 'Remove from Watched';
        }
        
        });
    queueArr.forEach(obj => {
        if (obj.id === Number(filmId)) {
            addToQueueBtn.classList.add('pressed');
            addToQueueBtn.textContent = 'Remove from Queue';
        }
    });
    
    


    addToWatchedBtn.addEventListener('click', () => {
        addToWatchedBtn.classList.toggle('pressed');
        if (addToWatchedBtn.classList.contains('pressed')) {
            addToWatchedBtn.textContent = 'Remove from Watched';
            addToLibrary(fullMovieInfo, watchedArr, addToWatchedBtn.dataset.target);
        } else {
            addToWatchedBtn.textContent = 'Add to Watched';
            removeFromLibrary(filmId, watchedArr, addToWatchedBtn.dataset.target);
        }
        
    });
    addToQueueBtn.addEventListener('click', () => {
        addToQueueBtn.classList.toggle('pressed');
        if (addToQueueBtn.classList.contains('pressed')) {
            addToQueueBtn.textContent = 'Remove from Queue';
            addToLibrary(fullMovieInfo, queueArr, addToQueueBtn.dataset.target);
        } else {
            addToQueueBtn.textContent = 'Add to Queue';
            removeFromLibrary(filmId, queueArr, addToQueueBtn.dataset.target);
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