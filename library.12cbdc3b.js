!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=e.parcelRequire37c5;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var r=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},e.parcelRequire37c5=r),r("gpER8"),r("jjs5m");var o=r("1vR0Z"),a=r("eZz2b");a=r("eZz2b"),document.querySelector(".pagination"),document.querySelector(".movie-card-list");var n=[],s=[],l={moviesList:document.querySelector(".movie-card-list"),watchedMovies:document.querySelector('button[data-action="watched"]'),queueMovies:document.querySelector('button[data-action="queue"]'),sectionLibrary:document.querySelector(".section-library"),pagination:document.querySelector(".pagination"),libraryNavigationLinkBtn:document.querySelector(".library-navigation__link")};function c(){sessionStorage.setItem("last-pressed-library-btn","watched");var e=[];l.watchedMovies.classList.add("library-btn__isActive"),l.queueMovies.classList.remove("library-btn__isActive");var t=localStorage.getItem("watched");if(t)try{e=(n=JSON.parse(t)).slice(0,9)}catch(e){console.log(e)}"watched"===sessionStorage.getItem("last-pressed-library-btn")&&(0,a.default)(e),l.pagination.innerHTML="",n.length}function u(){sessionStorage.setItem("last-pressed-library-btn","queue");var e=[];l.queueMovies.classList.add("library-btn__isActive"),l.watchedMovies.classList.remove("library-btn__isActive");var t=localStorage.getItem("queue");if(t)try{e=(s=JSON.parse(t)).slice(0,9)}catch(e){console.log(e)}"queue"===sessionStorage.getItem("last-pressed-library-btn")&&(0,a.default)(e),l.pagination.innerHTML="",s.length}null===localStorage.getItem("watched")&&(l.sectionLibrary.innerHTML='<h3 class="empty-container">Sorry, but this section is still empty:(</h3>'),(0,o.default)(l.moviesList),"queue"===sessionStorage.getItem("last-pressed-library-btn")?u():c(),console.log(n),l.watchedMovies.addEventListener("click",c),l.queueMovies.addEventListener("click",u)}();
//# sourceMappingURL=library.12cbdc3b.js.map
