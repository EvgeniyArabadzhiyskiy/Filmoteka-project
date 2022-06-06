import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";
import { renderPaginationButtons } from "./js/pagination";
import renderMovieModal from "./js/templates/renderMovieModal";

let allGenres;
const searchFormEl = document.querySelector(".form__search");
const cardListEl = document.querySelector(".movie-card-list");
const searchErrMsgEl = document.querySelector(".search__error");

const modalMovieContainer = document.querySelector('.film-content');

const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchGenresList().then((data)=> {
  allGenres = data;
})
apiService.fetchTrendData().then((data)=> {
// console.log("apiService.fetchTrendData ~ data", data.results);

  renderGallery(data.results, allGenres);

  renderPaginationButtons(data.total_pages, data.page);

}).catch(error => console.log(error));


searchFormEl.addEventListener('submit', onSearchButton);

function onSearchButton (e) {
  e.preventDefault();

  apiService.movieSearch().then((data)=> {
    if (data.total_results === 0) {
      console.log("Search result is not successful. Enter the correct movie name");
      searchErrMsgEl.style.display = "block";
    } else {
      searchErrMsgEl.style.display = "none";
      clearGallery();
      renderGallery(data.results, allGenres);
      renderPaginationButtons(data.total_pages, data.page);
      console.log("при сабмите", data.results)}
  })
};

function clearGallery() {
  cardListEl.innerHTML = '';
};

apiService.fetchFullMovieInfo(831946).then((data)=>{
  console.log(renderMovieModal(data));
  modalMovieContainer.insertAdjacentHTML("beforeend", renderMovieModal(data));
}
)



