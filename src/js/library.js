import  "./templates/darkThema";
import openModal from "./modal-open";
import renderLibrary from './templates/movieCardLibrary';

let watched = [];
let queue = [];

const refs = {
    moviesList: document.querySelector('.movie-card-list'),
    watchedMovies: document.querySelector('button[data-action="watched"]'),
    queueMovies: document.querySelector('button[data-action="queue"]'),
    sectionLibrary: document.querySelector('.section-library')
}

if (localStorage.getItem('watched') === null) {
    refs.sectionLibrary.innerHTML = `<h3 class="empty-container">Sorry, but this section is still empty:(</h3>`;
}
openModal(refs.moviesList);
onWatchedMoviesClick();

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick() {
    refs.watchedMovies.classList.add('library-btn__isActive');
    refs.queueMovies.classList.remove('library-btn__isActive');
    let watchedKey = localStorage.getItem('watched');
    if (watchedKey) {
        try {
            watched = JSON.parse(watchedKey);
        } catch (e) {
            console.log(e);
        }
    }
    renderLibrary(watched);
}

function onQueueMoviesClick() {
    refs.queueMovies.classList.add('library-btn__isActive');
    refs.watchedMovies.classList.remove('library-btn__isActive');
    let queueKey = localStorage.getItem('queue');
    if (queueKey) {
        try {
            queue = JSON.parse(queueKey);
        } catch (e) {
            console.log(e);
        }
    }
    renderLibrary(queue);
}
