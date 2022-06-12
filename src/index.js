import "./js/darkThema";
import "./js/cursor";
import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";
import { renderPaginationButtons } from "./js/pagination";
import renderMovieModal from "./js/templates/renderMovieModal";
import openModal from "./js/modal-open";
import onSearchButton from "./js/movieSearch";
import NProgress from 'nprogress';

import "./js/team-modal";
import "./js/sliderTrendingMovies";
import { renderMovieCardsSlider } from "./js/templates/renderMovieCardsSlider";
import './js/helpers/back-to-top';

let allGenres;
const filmList = document.querySelector('.movie-card-list'); 

NProgress.start();
openModal(filmList);

const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchGenresList().then((data) => {
  allGenres = data;
})

apiService.fetchTrendData().then((data) => {
 
  renderMovieCardsSlider(data.results);

  renderGallery(data.results, allGenres);

  renderPaginationButtons(data.total_pages, data.page);

}).catch(error => console.log(error));
NProgress.done();




// =======================================================================================

// import  "./js/templates/darkThema";
// import apiService from "./js/apiService";
// import renderGallery from "./js/templates/movieGallary";
// import { renderPaginationButtons } from "./js/pagination";
// import renderMovieModal from "./js/templates/renderMovieModal";
// import openModal from "./js/modal-open";
// import onSearchButton from "./js/movieSearch";
// import NProgress from 'nprogress';
// import "./js/team-modal";
// import "./js/sliderTrendingMovies";
// import { renderMovieCardsSlider } from "./js/templates/renderMovieCardsSlider";

// import {markupGallery} from './js/templates/movieGallary'

// let allGenres;
// const addToWatchedBtn = document.querySelector('.btn-watched');
// const filmList = document.querySelector('.movie-card-list'); 
// const mainContainer = document.querySelector('.movie-card-list');


// NProgress.start();
// openModal(filmList)


// apiService.fetchGenresList().then((data)=> {
//   allGenres = data;
// })

// apiService.fetchTrendData().then((data)=> {
  

//   const filmData = renderGallery(data.results, allGenres);
//   const markupMovie = markupGallery(filmData)
//   mainContainer.insertAdjacentHTML("beforeend", markupMovie);

//   renderPaginationButtons(data.total_pages, data.page);

// }).catch(error => console.log(error))
// NProgress.done()