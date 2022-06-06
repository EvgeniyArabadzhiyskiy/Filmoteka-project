

const IMG_URL= `https://image.tmdb.org/t/p/w500`;
const mainContainer = document.querySelector('.movie-card-list');
 
export default function renderGallery(results,{genres} ) {
    const markup = results.map(({ poster_path, original_title, release_date, genre_ids}) => {
	const genresNames = genre_ids.reduce((acc, itemId, index) => {
		if(!genre_ids.length){
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
	},"")	
	const releaseYear = release_date.split("-").slice(0,1);
      return `<li id="" class="movie-card-item">
				<div class="movie-poster__container">
					<img src="${IMG_URL}${poster_path}" alt="poster" />
				</div>
				<div class="movie-card-item__info">
					<h2 class="movie-card-item__title">${original_title}</h2>
					<p class="movie-card-item__text">${genresNames} | ${releaseYear} </p>
			</li>`;
    }).join(''); 
  mainContainer.insertAdjacentHTML("beforeend", markup);
  }


