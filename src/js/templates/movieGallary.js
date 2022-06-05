
import BASE_URL from "../apiService";
const mainContainer = document.querySelector('.movie-card-list');
  




export default function renderGallery(results) {
    const markup = results.map(({ poster_path, original_title, release_date, genre_ids}) => {
      return `<li id="" class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${BASE_URL}${poster_path}" alt="poster" />
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title">${original_title}</h2>
					<p class="movie-card-item__text">${genre_ids} | ${release_date} </p>
			</li>`;
    }).join(''); 
  mainContainer.insertAdjacentHTML("beforeend", markup);
  }


