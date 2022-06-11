import renderLibrary from './templates/movieCardLibrary';

const paginationList = document.querySelector('.pagination');
const cardsContainer = document.querySelector('.movie-card-list');

function renderPaginationBTN(arrays) {
    const notesOnPage = 9;
    let countOfItems = Math.ceil(arrays.length / notesOnPage);

    let showPage = (function() {
        let active;
        
        return function(item) {
            if (active) {
                active.classList.remove('current-page');
            }
            active = item;
            
            item.classList.add('current-page');
            
            let pageNum = item.innerHTML;
            
            let start = (pageNum - 1) * notesOnPage;
            let end = start + notesOnPage;
            
            let notes = arrays.slice(start, end);
            
            cardsContainer.innerHTML = '';
            renderLibrary(notes);
        };
    }());

    let items = [];
    for (let i = 1; i <= countOfItems; i++) {
        let li = document.createElement('li');
        li.classList.add('pagination-item');
        li.classList.add('pagination-pages');
        li.textContent = i;
        paginationList.appendChild(li);
        items.push(li);
    }

    showPage(items[0]);

    for (let item of items) {
        item.addEventListener('click', function() {
            showPage(this);
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });
    }
}

export { renderPaginationBTN };