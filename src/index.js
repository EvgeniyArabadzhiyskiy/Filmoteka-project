import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";
import { renderPaginationButtons } from "./js/pagination";
import renderMovieModal from "./js/templates/renderMovieModal";

let allGenres;

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

apiService.fetchFullMovieInfo(831946).then((data)=>{
  console.log(renderMovieModal(data));
  modalMovieContainer.insertAdjacentHTML("beforeend", renderMovieModal(data));
}
)


