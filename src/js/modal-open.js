import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';
import addToLibrary from './addToLibrary';
import removeFromLibrary from './removeFromLibrary';
import NProgress from 'nprogress';
//import 'nprogress/nprogress.css';
import renderLibrary from './templates/movieCardLibrary';
import galleryBtnStateUpdate from './galleryBtnStateUpdate';
import { renderPaginationBTN, resetPagination } from './paginationLibrary';


const refs = {                                                                  //   Добавил
    watchedMovies: document.querySelector('button[data-action="watched"]'),     //   Добавил
    queueMovies: document.querySelector('button[data-action="queue"]'),         //   Добавил

}

const modal = document.querySelector('.backdrop');

const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');
let watchedArr = JSON.parse(localStorage.getItem('watched')) ? JSON.parse(localStorage.getItem('watched')) : [];
let queueArr = JSON.parse(localStorage.getItem('queue')) ? JSON.parse(localStorage.getItem('queue')) : [];
export { watchedArr, queueArr };

export default function openModal(movieContainer) {

    movieContainer.addEventListener('click', onClick)

}

async function onClick(e) {
    // NProgress.start();
    if (e.target.nodeName !== "IMG" && e.target.nodeName !== "H2") {
        return
    }

    document.body.classList.add("modal-open");
    modal.classList.remove('is-hidden');
    modal.classList.add('slideDownIn');
    modalButtonClose.addEventListener('click', modalClose);
    window.addEventListener("keyup", press);
    window.addEventListener("click", onCloseBackdropClick);

    const filmId = e.target.dataset.id;

    const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId);

    const createMarkupFilmInModal = await renderMovieModal(fullMovieInfo);

    modalMovieContainer.insertAdjacentHTML("beforeend", createMarkupFilmInModal);

    // NProgress.done();

    const addToWatchedBtn = document.querySelector('.btn-watched');
    const addToQueueBtn = document.querySelector('.btn-qweqwe');

    watchedArr.forEach(obj => {
        if (obj.id === Number(filmId)) {
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

    const bodyOfLybrary = document.body.classList.contains('library') //   Добавил
    const isWatchedActiv = refs.watchedMovies?.classList.contains('library-btn__isActive') //   Добавил
    const isQueueActiv = refs.queueMovies?.classList.contains('library-btn__isActive') //   Добавил

    addToWatchedBtn.addEventListener('click', () => {
        
        addToWatchedBtn.classList.toggle('pressed');
        if (addToWatchedBtn.classList.contains('pressed')) {
            addToWatchedBtn.textContent = 'Remove from Watched';
            addToLibrary(fullMovieInfo, watchedArr, addToWatchedBtn.dataset.target);

            if (isWatchedActiv) {
                bodyOfLybrary && renderLibrary(watchedArr);                              //   Добавил
                refs.watchedMovies?.classList.add('library-btn__isActive');             //   Добавил
                refs.queueMovies?.classList.remove('library-btn__isActive'); 

            }

        } else {
            addToWatchedBtn.textContent = 'Add to Watched';
            removeFromLibrary(filmId, watchedArr, addToWatchedBtn.dataset.target);

            if (isWatchedActiv) {                                                  
                bodyOfLybrary && renderLibrary(watchedArr.slice(0, 9));
                resetPagination();
                renderPaginationBTN(watchedArr, page = 1);                                 //   Добавил
                refs.watchedMovies?.classList.add('library-btn__isActive');                 //   Добавил
                refs.queueMovies?.classList.remove('library-btn__isActive');  
            }                                                                           //   Добавил
        }

    });
    addToQueueBtn.addEventListener('click', () => {
        addToQueueBtn.classList.toggle('pressed');

        if (addToQueueBtn.classList.contains('pressed')) {
            addToQueueBtn.textContent = 'Remove from Queue';
            addToLibrary(fullMovieInfo, queueArr, addToQueueBtn.dataset.target);

            if (isQueueActiv) {
                bodyOfLybrary && renderLibrary(queueArr);                                        //   Добавил
                refs.queueMovies?.classList.add('library-btn__isActive');                       //   Добавил
                refs.watchedMovies?.classList.remove('library-btn__isActive');                  //   Добавил

            }
        } else {
            addToQueueBtn.textContent = 'Add to Queue';
            removeFromLibrary(filmId, queueArr, addToQueueBtn.dataset.target);

            if (isQueueActiv) {
                bodyOfLybrary && renderLibrary(queueArr.slice(0, 9));
                resetPagination();
                renderPaginationBTN(queueArr, page = 1);                                        //   Добавил
                refs.queueMovies?.classList.add('library-btn__isActive');                        //   Добавил
                refs.watchedMovies?.classList.remove('library-btn__isActive');
            }
        }
    });

}


function press(e) {
    if (e.code === "Escape") {
        modalClose();
        window.removeEventListener("keyup", press);
        modalButtonClose.removeEventListener('click', modalClose);
        galleryBtnStateUpdate();
    }
    return
}

function onCloseBackdropClick(e) {
    if (e.target.dataset.close === 'backdrop') {
        modalClose();
        galleryBtnStateUpdate();
    }
    return;
}

function modalClose(e) {
    document.body.classList.remove("modal-open");
    modal.classList.add('is-hidden');
    modal.classList.remove("slideDownIn")
    window.removeEventListener("keyup", press);
    window.removeEventListener("click", onCloseBackdropClick);
    modalButtonClose.removeEventListener('click', modalClose);
    modalMovieContainer.innerHTML = "";
    galleryBtnStateUpdate();
}
