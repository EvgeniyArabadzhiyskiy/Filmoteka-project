import noPoster from '../images/no-poster.jpg';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
let data = [];

const refs = {
    moviesList: document.querySelector('.movie-card-list'),
    watchedMovies: document.querySelector('button[data-action="watched"]'),
    queueMovies: document.querySelector('button[data-action="queue"]'),
    sectionLibrary: document.querySelector('.section-library')
}

if (localStorage.getItem('watched') === null) {
    refs.sectionLibrary.innerHTML = `<h3 class="empty-container">Sorry, but this section is still empty:(</h3>`;
}
onWatchedMoviesClick();

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick() {
    refs.watchedMovies.classList.add('library-btn__isActive');
    refs.queueMovies.classList.remove('library-btn__isActive');
    let watched = localStorage.getItem('watched');
    if (watched) {
        try {
            data = JSON.parse(watched);
        } catch (e) {
            console.log(e);
        }
    }
    markup(data);
}

function onQueueMoviesClick(e) {
    refs.queueMovies.classList.add('library-btn__isActive');
    refs.watchedMovies.classList.remove('library-btn__isActive');
    let queue = localStorage.getItem('queue');
    if (queue) {
        try {
            data = JSON.parse(queue);
        } catch (e) {
            console.log(e);
        }
    }
    markup(data);
}

function markup(data) {
    const markup = data.map(({ poster_path, original_title, vote_average, genres, release_date }) => {
        let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;
        const releaseYear = release_date.split("-").slice(0, 1);
        return `<li  class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${imagePoster}" alt="poster" class="imagePoster"/>
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title">${original_title}</h2>
					<p class="movie-card-item__text">${genres.map(genre => genre.name).join(', ')} | ${releaseYear} <span class="rating">${vote_average}</span></p>
			</li>`;
    })
    refs.moviesList.innerHTML = markup.join('');
}
 