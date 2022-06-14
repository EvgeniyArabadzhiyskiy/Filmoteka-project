import apiService from "./apiService";
import renderGallery from "./components/movieGallary";
import { renderPaginationButtons } from "./pagination";
import { resetPagination } from "./pagination";
import NProgress from 'nprogress';
import { input } from "./apiService";
import {markupGallery} from './templates/startPageMarkup';

const mainContainer = document.querySelector('.movie-card-list');
const searchFormEl = document.querySelector(".form__search");
const cardListEl = document.querySelector(".movie-card-list");
const searchErrMsgEl = document.querySelector(".search__error");
let allGenres;

apiService.fetchGenresList().then((data)=> {
    allGenres = data;
});

searchFormEl?.addEventListener('submit', onSearchButton);

export default function onSearchButton (e) {
    e.preventDefault();
    if (!input.value) {
        searchErrMsgEl.textContent = "Search field is empty. Enter movie name and push search button";
        searchErrMsgEl.style.display = "block";
        return;
    };
    NProgress.start();
    apiService.movieSearch().then((data)=> {
        if (data.total_results === 0) {
            searchErrMsgEl.textContent = "Search result is not successful. Enter the correct movie name and push search button";
            searchErrMsgEl.style.display = "block";
        } else {
            searchErrMsgEl.style.display = "none";
            clearGallery();
            resetPagination();

            const filmData = renderGallery(data.results, allGenres);
            const markupMovie = markupGallery(filmData)

            mainContainer.insertAdjacentHTML("beforeend", markupMovie);

            renderPaginationButtons(data.total_pages, data.page);

           // NProgress.done()
        }
    })
    .catch(error => console.log(error));
    NProgress.done();
};


function clearGallery() {
    cardListEl.innerHTML = '';
};
