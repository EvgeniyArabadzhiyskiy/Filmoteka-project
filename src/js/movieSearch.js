import apiService from "./apiService";
import renderGallery from "./templates/movieGallary";
import renderPaginationButtons from "./apiService";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

const searchFormEl = document.querySelector(".form__search");
const cardListEl = document.querySelector(".movie-card-list");
const searchErrMsgEl = document.querySelector(".search__error");
let allGenres;

apiService.fetchGenresList().then((data)=> {
    allGenres = data;
});

searchFormEl.addEventListener('submit', onSearchButton);

export default function onSearchButton (e) {
    e.preventDefault();
    NProgress.start();
    apiService.movieSearch().then((data)=> {
        if (data.total_results === 0) {
            searchErrMsgEl.style.display = "block";
        } else {
            searchErrMsgEl.style.display = "none";
            clearGallery();
            renderGallery(data.results, allGenres);

            NProgress.done();
            
            console.log("при сабмите", data.results)}
    })
    .catch(error => console.log(error));
};


function clearGallery() {
    cardListEl.innerHTML = '';
};
