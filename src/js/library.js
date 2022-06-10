import  "./templates/darkThema";
import openModal from "./modal-open";
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
openModal();
onWatchedMoviesClick();

refs.watchedMovies.addEventListener('click', onWatchedMoviesClick);
refs.queueMovies.addEventListener('click', onQueueMoviesClick);

function onWatchedMoviesClick() {
    refs.watchedMovies.classList.add('library-btn__isActive');
    refs.queueMovies.classList.remove('library-btn__isActive');
    localStorage.setItem('isActive', 'watched');
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

function onQueueMoviesClick() {
    refs.queueMovies.classList.add('library-btn__isActive');
    refs.watchedMovies.classList.remove('library-btn__isActive');
    localStorage.setItem('isActive', 'queue');
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
    const markup = data.map(({ poster_path, original_title, vote_average, genres, release_date, id }) => {
        if (original_title === "") {
        	original_title = "Sorry, no title for the movie.";
		}
		if (!release_date) {
			release_date = "Expected";
		}
        let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;
        const releaseYear = release_date.split("-").slice(0, 1);
        const genresNames = genres.reduce((acc, { name }, index) => {
        if (!genres.length) {
          return acc;
        }
        else if (index <= 1) {
          if (index <= genres.length - 2) {
            return acc + name + ', ';
          }
          return acc + name + ' ';
        }
        else if (index === 2) {
          return acc + 'Others';
        }
        return acc;
      },'');	
        return `<li  class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${imagePoster}" alt="poster" class="imagePoster" data-id="${id}"/>
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title" data-id="${id}">${original_title}</h2>
					<p class="movie-card-item__text">${genresNames?genresNames:"No genres"} | ${releaseYear} <span class="rating">${vote_average}</span></p>
			</li>`;
    })
    refs.moviesList.innerHTML = markup.join('');
}
 