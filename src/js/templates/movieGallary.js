import noPoster from '../../images/no-poster.jpg';
const IMG_URL= `https://image.tmdb.org/t/p/w500`;
const mainContainer = document.querySelector('.movie-card-list');
 
export default function renderGallery(results, { genres }) {
	const markup = results.map(({ poster_path, original_title, release_date, genre_ids, id }) => {
		if (original_title === "") {
        	original_title = "Sorry, no title for the movie.";
		}
		if (release_date === "") {
			release_date = "No release date";
		}
		let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;		
		const genresNames = genre_ids.reduce((acc, itemId, index) => {
		if (!genre_ids.length) {
			return acc;
		}
		else if(index <= 1){
			const genreName = genres.find(({id})  => id=== itemId)
			if(index <= genre_ids.length -2){
				return acc + genreName.name + ', ';
			}
				return acc + genreName.name + ' ';
			} else if( index === 2){
				return acc + "Others";
			} 
		return acc;
	}, "")	
		const releaseYear = release_date?.split("-").slice(0, 1);
      return `<li  class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${imagePoster}" alt="poster" class="imagePoster" data-id="${id}"/>
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title" data-id="${id}">${original_title}</h2>
					<p class="movie-card-item__text">${genresNames?genresNames:"No genres"} | ${releaseYear} </p>
			</li>`;
    }).join(''); 
  mainContainer.insertAdjacentHTML("beforeend", markup);
  }


