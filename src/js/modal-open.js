import apiService from './apiService'
import renderMovieModal from './templates/renderMovieModal';

const modal = document.querySelector('.backdrop')
const filmList = document.querySelector('.movie-card-list')
const modalMovieContainer = document.querySelector('.film-content');



export default function openModal(){


filmList.addEventListener('click', onClick)

}

async function onClick(e){
  
if(e.target.nodeName !== "IMG" && e.target.nodeName!== "H2"){
    return
} 

modal.classList.remove('is-hidden')

const filmId = e.target.dataset.id

const fullMovieInfo = await apiService.fetchFullMovieInfo(filmId)


const createMarkupFilmInModal = await renderMovieModal(fullMovieInfo)

modalMovieContainer.insertAdjacentHTML("beforeend", createMarkupFilmInModal)
}



