var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},n=e.parcelRequire37c5;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},e.parcelRequire37c5=n),n("b5a3y");var a=n("amyG6");n("cXP6Y"),n("kcHu4");var o=n("eS71k"),r=n("dCd6w"),s=n("63A17");n("baGT8");const c=(0,a.getAuth)();let l=[],d=[],u=1;const g={moviesList:document.querySelector(".movie-card-list"),watchedMovies:document.querySelector('button[data-action="watched"]'),queueMovies:document.querySelector('button[data-action="queue"]'),sectionLibrary:document.querySelector(".section-library"),pagination:document.querySelector(".pagination"),libraryNavigationLinkBtn:document.querySelector(".library-navigation__link"),logoutLibBtn:document.querySelector(".nav__logout")};function h(){sessionStorage.setItem("last-pressed-library-btn","watched"),g.watchedMovies.classList.add("library-btn__isActive"),g.queueMovies.classList.remove("library-btn__isActive");let e=localStorage.getItem("watched");if(e)try{l=JSON.parse(e)}catch(e){console.log(e)}"watched"===sessionStorage.getItem("last-pressed-library-btn")&&b(l)}function m(){sessionStorage.setItem("last-pressed-library-btn","queue"),g.queueMovies.classList.add("library-btn__isActive"),g.watchedMovies.classList.remove("library-btn__isActive");let e=localStorage.getItem("queue");if(e)try{d=JSON.parse(e)}catch(e){console.log(e)}"queue"===sessionStorage.getItem("last-pressed-library-btn")&&b(d)}function b(e){const t=window.matchMedia("(min-width: 320px) and (max-width: 767px)"),i=window.matchMedia("(min-width: 768px) and (max-width: 1023px)"),n=window.matchMedia("(min-width: 1024px)");function a(t){t.matches&&((0,r.default)(e.slice(0,4)),(0,s.resetPagination)(),(0,s.renderPaginationBTN)(e,u=1,Math.ceil(e.length/4)))}function o(t){t.matches&&((0,r.default)(e.slice(0,8)),(0,s.resetPagination)(),(0,s.renderPaginationBTN)(e,u=1,Math.ceil(e.length/8)))}function c(t){t.matches&&((0,r.default)(e.slice(0,9)),(0,s.resetPagination)(),(0,s.renderPaginationBTN)(e,u=1,Math.ceil(e.length/9)))}t.addListener(a),i.addListener(o),n.addListener(c),a(t),o(i),c(n)}g.logoutLibBtn.addEventListener("click",(function(e){e.preventDefault(),(0,a.signOut)(c),window.location="../index.html"})),null===localStorage.getItem("watched")&&(g.sectionLibrary.innerHTML='<h3 class="empty-container">Sorry, but this section is still empty:(</h3>'),(0,o.default)(g.moviesList),"queue"===sessionStorage.getItem("last-pressed-library-btn")?m():h(),g.watchedMovies.addEventListener("click",h),g.queueMovies.addEventListener("click",m);
//# sourceMappingURL=library.59ed606f.js.map
