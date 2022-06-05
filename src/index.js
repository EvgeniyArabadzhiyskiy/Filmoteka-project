import apiService from "./js/apiService";
import renderGallery from "./js/templates/movieGallary";


//apiService.fetchData;
const mainContainer = document.querySelector('.movie-card__container');
apiService.fetchTrendData().then((data)=> {
  console.log(data.results);
  renderGallery(data.results);
}).catch(error => console.log(error));
apiService.fetchGenresList().then((data)=> {
  console.log(data);
})