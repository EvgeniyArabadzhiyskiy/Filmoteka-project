import app from './helpers/initialize-firebase';
import { signOut, getAuth } from 'firebase/auth';
import './darkThema';
import './cursor';
import openModal from './modal-open';
import renderLibrary from './templates/movieCardLibrary';
import { renderPaginationBTN } from './paginationLibrary';

const auth = getAuth();
let watched = [];
let queue = [];

const refs = {
  moviesList: document.querySelector('.movie-card-list'),
  watchedMovies: document.querySelector('button[data-action="watched"]'),
  queueMovies: document.querySelector('button[data-action="queue"]'),
  sectionLibrary: document.querySelector('.section-library'),
  pagination: document.querySelector('.pagination'),
  libraryNavigationLinkBtn: document.querySelector('.library-navigation__link'),
  logoutLibBtn: document.querySelector('.nav__logout'),
};

refs.logoutLibBtn.addEventListener('click', logoutUser);

function logoutUser(e) {
  e.preventDefault();
  signOut(auth);
  window.location = '../index.html';
}

if (localStorage.getItem('watched') === null) {
  refs.sectionLibrary.innerHTML = `<h3 class="empty-container">Sorry, but this section is still empty:(</h3>`;
}
openModal(refs.moviesList);
if (sessionStorage.getItem('last-pressed-library-btn') === 'queue') {
  onQueueMoviesClick();
} else {
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
  refs.pagination.innerHTML = '';
  if (watched.length > 9) {
    renderPaginationBTN(watched);
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
  refs.pagination.innerHTML = '';
  if (queue.length > 9) {
    renderPaginationBTN(queue);
  }
}

export { onWatchedMoviesClick, onQueueMoviesClick };
