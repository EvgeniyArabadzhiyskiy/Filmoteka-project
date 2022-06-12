
export function markupGallery(results) {
    	return results.map(({ id, imagePoster, original_title, releaseYear, fullGenresNames }) => {	
    
        return `<li  class="movie-card-item">
    				<div class="movie-poster__container">
    					<img src="${imagePoster}" alt="poster" class="imagePoster" data-id="${id}"/>
    				</div>
    				<div class="movie-card-item__info">
    					<h2 class="movie-card-item__title" data-id="${id}">${original_title}</h2>
    					<p class="movie-card-item__text">${fullGenresNames} | ${releaseYear} </p>
    				</div>
					<div class="btn-box-on-card overlay">
                    <button class="btn-watched on-card-watced" data-target="watched"><br class="transfer" />Watched</button>
                    <button class="btn-qweqwe on-card-queue" data-target="queue">queue</button>                     </div>
         			</div>	
    			</li>`;
        })
    	.join(''); 
    }