var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},o=e.parcelRequire37c5;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in i){var o=i[e];delete i[e];var n={id:e,exports:{}};return t[e]=n,o.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},e.parcelRequire37c5=o),o("cc67S");var n=o("eS71k"),r=o("dCd6w");r=o("dCd6w");document.querySelector(".pagination"),document.querySelector(".movie-card-list");let a=[],c=[];const l={moviesList:document.querySelector(".movie-card-list"),watchedMovies:document.querySelector('button[data-action="watched"]'),queueMovies:document.querySelector('button[data-action="queue"]'),sectionLibrary:document.querySelector(".section-library"),pagination:document.querySelector(".pagination")};function s(){let e=[];l.watchedMovies.classList.add("library-btn__isActive"),l.queueMovies.classList.remove("library-btn__isActive");let t=localStorage.getItem("watched");if(t)try{a=JSON.parse(t),e=a.slice(0,9)}catch(e){console.log(e)}(0,r.default)(e),l.pagination.innerHTML="",a.length}null===localStorage.getItem("watched")&&(l.sectionLibrary.innerHTML='<h3 class="empty-container">Sorry, but this section is still empty:(</h3>'),(0,n.default)(l.moviesList),s(),console.log(a),l.watchedMovies.addEventListener("click",s),l.queueMovies.addEventListener("click",(function(){let e=[];l.queueMovies.classList.add("library-btn__isActive"),l.watchedMovies.classList.remove("library-btn__isActive");let t=localStorage.getItem("queue");if(t)try{c=JSON.parse(t),e=c.slice(0,9)}catch(e){console.log(e)}(0,r.default)(e),l.pagination.innerHTML="",c.length}));
//# sourceMappingURL=library.712c2b3a.js.map
