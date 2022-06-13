import renderLibrary from './templates/movieCardLibrary';

const paginationList = document.querySelector('.pagination');
const cardsContainer = document.querySelector('.movie-card-list');

const notesOnPage = 9;
let dataOnPage = [];
let globalPage = 0;
let data = [];

function renderPaginationBTN(arrays, page) {
    data = arrays;
    let paginationMarkup = '';
    let allPages = Math.ceil(arrays.length / notesOnPage);
    let beforePreviousPage = +page - 2;
    let previousPage = +page - 1;
    let nextPage = +page + 1;
    let afterNextPage = +page + 2;
    globalPage = +page;
    if (allPages <= 1) {
        return;
    }

    if (page > 1) {
        paginationMarkup += `<li class="pagination-item pagination-arrow">&laquo</li>`;
    }

    if (page > 3) {
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            paginationMarkup += `<li class="pagination-item pagination-pages">1</li>`;
        }
         }

    if (page > 2) {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && page > 4) {
        paginationMarkup += `<li class="pagination-item">...</li>`;
        }
        if (beforePreviousPage > 0) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${beforePreviousPage}</li>`;
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
            if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && page < allPages - 3) {
            paginationMarkup += `<li class="pagination-item">...</li>`;
            }
        }
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            paginationMarkup += `<li class="pagination-item pagination-pages">${allPages}</li>`;
        }
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
    let start = (globalPage - 1) * notesOnPage;
    let end = start + notesOnPage;
    dataOnPage = data.slice(start, end);
    renderLibrary(dataOnPage);
    renderPaginationBTN(data, globalPage);
}

function resetPage() {
    cardsContainer.innerHTML = '';
}

function resetPagination() {
    paginationList.innerHTML = '';
}

export { renderPaginationBTN, resetPagination };
