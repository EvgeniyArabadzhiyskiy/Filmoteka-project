
import "./helpers/darkThema";
import "./helpers/cursor";
import openModal from "./modal-open";
import renderLibrary from './templates/movieCardLibrary';
import { renderPaginationBTN, resetPagination } from './paginationLibrary';
import "./team-modal";

let watched = [];
let queue = [];
let page = 1;

const refs = {
    moviesList: document.querySelector('.movie-card-list'),
    watchedMovies: document.querySelector('button[data-action="watched"]'),
    queueMovies: document.querySelector('button[data-action="queue"]'),
    sectionLibrary: document.querySelector('.section-library'),
    pagination: document.querySelector('.pagination'),
    libraryNavigationLinkBtn: document.querySelector('.library-navigation__link'),
}

if (localStorage.getItem('watched') === null) {
    refs.sectionLibrary.innerHTML = `<h3 class="empty-container">Sorry, but this section is still empty:(</h3>`;
}
openModal(refs.moviesList);
if (sessionStorage.getItem('last-pressed-library-btn') === 'queue') {
    onQueueMoviesClick();
}
else {
    onWatchedMoviesClick();
}

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick() {
    sessionStorage.setItem('last-pressed-library-btn', 'watched');
    let currWatched = [];
    refs.watchedMovies.classList.add('library-btn__isActive');
    refs.queueMovies.classList.remove('library-btn__isActive');
    let watchedKey = localStorage.getItem('watched');
    if (watchedKey) {
        try {
            watched = JSON.parse(watchedKey);
            currWatched = watched.slice(0, 9);
        } catch (e) {
            console.log(e);
        }
    }
    if (sessionStorage.getItem('last-pressed-library-btn') === 'watched') {
        renderLibrary(currWatched);    
    }
    resetPagination();
    if (watched.length > 9) {
       renderPaginationBTN(watched, page = 1);
    }
}

function onQueueMoviesClick() {
    sessionStorage.setItem('last-pressed-library-btn', 'queue');
    let currQueue = [];
    refs.queueMovies.classList.add('library-btn__isActive');
    refs.watchedMovies.classList.remove('library-btn__isActive');
    let queueKey = localStorage.getItem('queue');
    if (queueKey) {
        try {
            queue = JSON.parse(queueKey);
            currQueue = queue.slice(0, 9);
        } catch (e) {
            console.log(e);
        }
    }
    if (sessionStorage.getItem('last-pressed-library-btn') === 'queue') {
         renderLibrary(currQueue);
     }
    resetPagination();
    if (queue.length > 9) {
       renderPaginationBTN(queue, page = 1);
    }

}