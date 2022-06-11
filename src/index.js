import "./js/templates/darkThema";
import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";
import { renderPaginationButtons } from "./js/pagination";
import renderMovieModal from "./js/templates/renderMovieModal";
import openModal from "./js/modal-open";
import onSearchButton from "./js/movieSearch";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import "./js/teamModal";
import "./js/sliderTrendingMovies";
import { renderMovieCardsSlider } from "./js/templates/renderMovieCardsSlider";

let allGenres;
const addToWatchedBtn = document.querySelector('.btn-watched');
const filmList = document.querySelector('.movie-card-list');

NProgress.start();
openModal(filmList);

const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchGenresList().then((data) => {
  allGenres = data;
})

apiService.fetchTrendData().then((data) => {
  // console.log("apiService.fetchTrendData ~ data", data.results);
  renderMovieCardsSlider(data.results);

  renderGallery(data.results, allGenres);

  renderPaginationButtons(data.total_pages, data.page);

}).catch(error => console.log(error));
NProgress.done();




