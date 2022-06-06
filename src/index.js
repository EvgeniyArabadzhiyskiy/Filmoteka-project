import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";
import renderGallery from "./js/templates/darkThema";
import { renderPaginationButtons } from "./js/pagination";

let allGenres;

const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchGenresList().then((data)=> {
  allGenres = data;
})
apiService.fetchTrendData().then((data)=> {

  renderGallery(data.results, allGenres);

  renderPaginationButtons(data.total_pages, data.page);

}).catch(error => console.log(error));
