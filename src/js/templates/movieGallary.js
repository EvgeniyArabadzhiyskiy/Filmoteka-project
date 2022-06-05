
import BASE_URL from "../apiService";
//import getAllGenres from "../getGenres";
const IMG_URL= `https://image.tmdb.org/t/p/w500`;
const mainContainer = document.querySelector('.movie-card-list');
  




export default function renderGallery(results) {
    const markup = results.map(({ poster_path, original_title, release_date, genre_ids}) => {
      return `<li id="" class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${IMG_URL}${poster_path}" alt="poster" />
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title">${original_title}</h2>
					<p class="movie-card-item__text">${genre_ids} | ${release_date} </p>
			</li>`;
    }).join(''); 
  mainContainer.insertAdjacentHTML("beforeend", markup);
  
  }


