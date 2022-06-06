const refs = {
    // elementList: document.querySelector('.element-list'),
    watchedMovies: document.querySelector('button[data-action="watched"]'),
    queueMovies: document.querySelector('button[data-action="queue"]'),
}

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick(e) {
    e.preventDefault();
    refs.watchedMovies.classList.add('library-btn__isActive');
    refs.queueMovies.classList.remove('library-btn__isActive');
}

function onQueueMoviesClick(e) {
    e.preventDefault();
    refs.queueMovies.classList.add('library-btn__isActive');
    refs.watchedMovies.classList.remove('library-btn__isActive');
}