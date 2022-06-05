import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";

let allGenres;

const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchGenresList().then((data)=> {
  allGenres = data;
})
apiService.fetchTrendData().then((data)=> {
  renderGallery(data.results, allGenres);
}).catch(error => console.log(error));
