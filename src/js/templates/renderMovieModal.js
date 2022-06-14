// import { IMG_URL } from "./movieGallary";
const IMG_URL= `https://image.tmdb.org/t/p/w500`;
import noPoster from '../../images/no-poster.jpg';
const modalMovieContainer = document.querySelector('.film-content');
 
export default function renderMovieModal({poster_path, original_title, vote_average,vote_count, popularity, overview, genres}) {
    let imagePoster = poster_path ? `${IMG_URL}${poster_path}` : noPoster;
    if (overview === "") {
        overview = "Sorry, no description for the movie.";
    }
    if (original_title === "") {
        original_title = "Sorry, no title for the movie.";
    }
    const genresNames = genres.reduce((acc, { name }, index) => {
        if (!genres.length) {
          return acc;
        }
        else if (index <= 1) {
          if (index <= genres.length - 2) {
            return acc + name + ', ';
          }
          return acc + name + ' ';
        }
        else if (index === 2) {
          return acc + 'Others';
        }
        return acc;
      },'');	
return `<img src="${imagePoster}" alt="" width="280" height="357" class="modal__img">
<div class="info-box">
    <h2 class="film__title">${original_title}</h2>
<div>
    <div class="information">
        <ul class="film__feature">
            <div class="wrapper-feature">
            <li class="film__item">
            <p>Vote / Votes</p>
        </li>
        <li class="film__item">
            <p>Popularity</p>
        </li>
        <li class="film__item">
            <p>Original Title</p>
        </li>
    </div>
    <li class="film__item">
        <p>Genre</p>
    </li>
        </ul>

        <ul>
            <li class="film__item">
                <p class="film__text"><span class="rating">${vote_average}</span> / <span class="rating--grey">${vote_count}</span></p>
            </li>
            <li class="film__item">
                <p class="film__text">${popularity}</p>
            </li>
            <li class="film__item">
                <p class="film__text">${original_title}</p>
            </li>
            <li class="film__item">
                <p class="film__text">${genresNames?genresNames:"No genres"}</p>
            </li>
        </ul>
    </div>
    <div class="about">
        <h3 class="about__title">About</h3>
        <p class="about__text">
        ${overview}
        </p>
    </div>
</div>
<div class="btn-box">
                    <button class="btn-watched" data-target="watched">add to <br class="transfer" />Watched</button>
                    <button class="btn-qweqwe" data-target="queue">add to queue</button>
                    </div>
        </div>`;}
   // }).join(''); 
    //modalMovieContainer.insertAdjacentHTML("beforeend", markup);
  