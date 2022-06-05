import apiService from "./apiService";
import renderGallery from "./templates/movieGallary";

const paginationList = document.querySelector('.pagination');
const cardsContainer = document.querySelector('.movie-card-list');
let globalPage = 0;

function renderPaginationButtons(allPages, page) {
    let paginationMarkup = '';
    let beforePreviousPage = page - 2;
    let previousPage = page - 1;
    let nextPage = page + 1;
    let afterNextPage = page + 2;
    globalPage = page;

    if (allPages <= 1) {
        return;
    }

    if (page > 1) {
        paginationMarkup += `<li class="pagination-item pagination-arrow">&laquo</li>`;
    }

    if (page > 2) {
        paginationMarkup += `<li class="pagination-item pagination-pages">1</li>`;
        if (page > 3) {
            paginationMarkup += `<li class="pagination-item">...</li>`;
            if (beforePreviousPage > 0) {
        paginationMarkup += `<li class="pagination-item pagination-pages">${beforePreviousPage}</li>`;
    }
        }
    }
    
    if (previousPage > 0) {
        paginationMarkup += `<li class="pagination-item pagination-pages">${previousPage}</li>`;
    }

    

    paginationMarkup += `<li class="pagination-item pagination-pages current-page">${page}</li>`;

    if (page < allPages) {
        paginationMarkup += `<li class="pagination-item pagination-pages">${nextPage}</li>`;
    }

    if (page < allPages - 1) {
        
        if (page < allPages - 2) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${afterNextPage}</li>`;
            paginationMarkup += `<li class="pagination-item">...</li>`;
            
        }
        paginationMarkup += `<li class="pagination-item pagination-pages">${allPages}</li>`;
    }
    
    if (page < allPages) {
        paginationMarkup += `<li class="pagination-item pagination-arrow">&raquo</li>`;
    }

    paginationList.innerHTML = paginationMarkup;

    paginationList.addEventListener('click', onPaginationChoice);

    
}

function onPaginationChoice(e) {
    if (e.target.nodeName !== 'LI') {
        return;
    }
    const value = e.target.textContent;
    console.log(value === '»');
    switch (value) {
        case '«':
            globalPage -= 1;
            break;
        case '»':
            globalPage += 1;
            break;
        case '...':
            return;
        default:
            globalPage = value;
    }
    resetPage();

    console.log(globalPage);// fetch(globalPage)
    apiService.fetchTrendData(globalPage).then((data)=> {
  console.log(data.results);
  renderGallery(data.results);
  renderPaginationButtons(data.total_pages, data.page);
}).catch(error => console.log(error));
    console.log(e.target);
    // makeButtonActive(e.target);
}

function resetPage() {
    cardsContainer.innerHTML = '';
}

function makeButtonActive(btn) {
    btn.classList.add('is-active');
}

export { renderPaginationButtons };