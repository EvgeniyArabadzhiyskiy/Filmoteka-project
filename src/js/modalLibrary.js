// import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';
import noPoster from '../images/no-poster.jpg';
const IMG_URL = `https://image.tmdb.org/t/p/w500`;
// import addToLibrary  from './addToLibrary';
// import removeFromLibrary from './removeFromLibrary';
import NProgress from 'nprogress';
//import 'nprogress/nprogress.css';

let film = [];
let active;

const modal = document.querySelector('.backdrop');
const filmList = document.querySelector('.movie-card-list');
const modalMovieContainer = document.querySelector('.film-content');
const modalButtonClose = document.querySelector('.modal__button-close');
let watchedArr = JSON.parse(localStorage.getItem('watched'))? JSON.parse(localStorage.getItem('watched')) : [];
let queueArr = JSON.parse(localStorage.getItem('queue')) ? JSON.parse(localStorage.getItem('queue')) :[];

export default function openModal() {
    filmList.addEventListener('click', onClick);
}

function onClick(e) {
    NProgress.start();
    if (e.target.nodeName !== 'IMG' && e.target.nodeName !== 'H2') { return };
    document.body.classList.add("modal-open");
    modal.classList.remove('is-hidden');
    modalButtonClose.addEventListener('click', modalClose);
    window.addEventListener("keyup", press);
    window.addEventListener("click", onCloseBackdropClick);
    const movieId = e.target.dataset.id;
    if (localStorage.getItem('isActive') === 'watched') {
        active = 'watched';
    } else {
        active = 'queue';
    }
    const fullMovieInfo = localStorage.getItem(active);
    if (fullMovieInfo) {
        try {
            data = JSON.parse(fullMovieInfo);
        } catch (e) {
            console.log(e);
        }
    }
    markup(data, movieId);
    NProgress.done();
}

function markup(data, movieId) {
    const currentMovie = data.find(item => item.id === Number(movieId));
    film.push(currentMovie);
    const markup = film.map(({ poster_path, original_title, vote_average, overview, popularity, vote_count, genres, id }) => {
        let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;
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
        return `<img src="${imagePoster}" alt="" width="280" height="357" class="modal__img">
<div class="info-box">
    <h2 class="film__title">${original_title}</h2>
<div>
    <div class="information">
        <ul class="film__feature">
            <div class="wrapper-feature">
            <li class="film__item">
            <p>Vote / Votes</p>
        </li>
        <li class="film__item">
            <p>Popularity</p>
        </li>
        <li class="film__item">
            <p>Original Title</p>
        </li>
    </div>
    <li class="film__item">
        <p>Genre</p>
    </li>
        </ul>

        <ul>
            <li class="film__item">
                <p class="film__text"><span class="rating">${vote_average}</span> / <span class="rating--grey">${vote_count}</span></p>
            </li>
            <li class="film__item">
                <p class="film__text">${popularity}</p>
            </li>
            <li class="film__item">
                <p class="film__text">${original_title}</p>
            </li>
            <li class="film__item">
                <p class="film__text">${genresNames?genresNames:"No genres"}</p>
            </li>
        </ul>
    </div>
    <div class="about">
        <h3 class="about__title">About</h3>
        <p class="about__text">
        ${overview}
        </p>
    </div>
</div>
<div class="btn-box">
                    <button class="btn-watched" data-target="watched">add to <br class="transfer" />Watched</button>
                    <button class="btn-qweqwe" data-target="queue">add to queue</button>
                    </div>
        </div>`;
    })
    modalMovieContainer.innerHTML = markup;
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
    film = [];
}