function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequire37c5;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequire37c5=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.0047324f.js","5JHSy":"no-poster.325dd571.jpg","5UbS1":"index.19b7ffc9.css","1x9ka":"index.8901e4aa.js"}')),a("5yYHI"),a("kBf9a");var i,r=a("iyB0E");i=new URL(a("kyEFX").resolve("5JHSy"),import.meta.url).toString();function s(e,n){const o=null==n?void 0:n.genres;return e.map((({poster_path:e,original_title:n,release_date:a,genre_ids:r,id:s})=>{""===n&&(n="Sorry, no title for the movie."),a||(a="Expected");const d=r.reduce(((t,e,n)=>{if(!r.length)return t;if(n<=1){const a=null==o?void 0:o.find((({id:t})=>t===e));return n<=r.length-2?t+(null==a?void 0:a.name)+", ":t+(null==a?void 0:a.name)+" "}return 2===n?t+"Others":t}),""),l=o?d:"Other",c=null==a?void 0:a.split("-").slice(0,1);return{id:s,imagePoster:e?`https://image.tmdb.org/t/p/w500${e}`:t(i),original_title:n,releaseYear:c,fullGenresNames:l}}))}r=a("iyB0E"),r=a("iyB0E");var d=a("k6WP2");function l(t){return t.map((({id:t,imagePoster:e,original_title:n,releaseYear:o,fullGenresNames:a})=>`<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="${e}" alt="poster" class="imagePoster" data-id="${t}"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="${t}" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="${t}" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="${t}">${n}</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">${a} | ${o} </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>`)).join("")}const c=document.querySelector(".movie-card-list"),u=document.querySelector(".pagination"),p=document.querySelector(".movie-card-list");let f,m=0;function g(t,e){let n="",o=e-2,a=e-1,i=e+1,r=e+2;m=e,t<=1||(e>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),e>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),e>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e>4&&(n+='<li class="pagination-item">...</li>'),o>0&&(n+=`<li class="pagination-item pagination-pages">${o}</li>`)),a>0&&(n+=`<li class="pagination-item pagination-pages">${a}</li>`),n+=`<li class="pagination-item pagination-pages current-page">${e}</li>`,e<t&&(n+=`<li class="pagination-item pagination-pages">${i}</li>`),e<t-1&&(e<t-2&&(n+=`<li class="pagination-item pagination-pages">${r}</li>`,!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e<t-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+=`<li class="pagination-item pagination-pages">${t}</li>`)),e<t&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),u.innerHTML=n,u.addEventListener("click",h))}function h(e){if("LI"!==e.target.nodeName)return;const n=e.target.textContent;switch(n){case"«":m-=1;break;case"»":m+=1;break;case"...":return;default:m=n}p.innerHTML="",t(d).start(),r.default.fetchGenresList().then((t=>{f=t})),r.input.value?r.default.movieSearch(m).then((e=>{t(d).done(),s(e.results,f),g(e.total_pages,e.page)})).catch((t=>console.log(t))):(r.default.fetchTrendData(m).then((t=>{const e=l(s(t.results,f));c.insertAdjacentHTML("beforeend",e),g(t.total_pages,t.page),console.log(e)})).catch((t=>console.log(t))),t(d).done())}a("l1016");var v=a("eS71k");r=a("iyB0E"),d=a("k6WP2"),r=a("iyB0E");const b=document.querySelector(".movie-card-list"),y=document.querySelector(".form__search"),w=document.querySelector(".movie-card-list"),x=document.querySelector(".search__error");let S;r.default.fetchGenresList().then((t=>{S=t})),null==y||y.addEventListener("submit",(function(e){if(e.preventDefault(),!r.input.value)return x.textContent="Search field is empty. Enter movie name and push search button",void(x.style.display="block");t(d).start(),r.default.movieSearch().then((e=>{if(0===e.total_results)x.textContent="Search result is not successful. Enter the correct movie name and push search button",x.style.display="block";else{x.style.display="none",w.innerHTML="",u.innerHTML="";const n=l(s(e.results,S));b.insertAdjacentHTML("beforeend",n),g(e.total_pages,e.page),t(d).done()}})).catch((t=>console.log(t))),t(d).done()}));d=a("k6WP2");a("baGT8");var k=a("iB56l");v=a("eS71k");const E=document.querySelector(".mySwiper");(0,v.default)(E);new(0,k.default)(".mySwiper",{modules:[k.Navigation,k.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});const _=document.querySelector(".swiper-wrapper");function A(e){const n=e.map((({poster_path:e,id:n})=>`<div class="swiper-slide">\n\t\t\t\t<img src="${e?`https://image.tmdb.org/t/p/w500${e}`:t(i)}" alt="poster" class="slide-poster" data-id="${n}"/>\n\t\t\t</div>`)).join("");_.insertAdjacentHTML("beforeend",n)}var L,M,T={};function q(t){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}L="undefined"!=typeof self?self:void 0,M=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,o=t.cornerOffset,a=void 0===o?20:o,i=t.diameter,r=void 0===i?56:i,s=t.ease,d=void 0===s?F:s,l=t.id,c=void 0===l?"back-to-top":l,u=t.innerHTML,p=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,f=t.onClickScrollTo,m=void 0===f?0:f,g=t.scrollContainer,h=void 0===g?document.body:g,v=t.scrollDuration,b=void 0===v?100:v,y=t.showWhenScrollTopIs,w=void 0===y?1:y,x=t.size,S=void 0===x?r:x,k=t.textColor,E=void 0===k?"#fff":k,_=t.zIndex,A=void 0===_?1:_,L=h===document.body,M=L&&document.documentElement;O();var T=$(),q=!0,P=L?window:h;function B(){I()>=w?H():C()}function H(){q&&(T.className="",q=!1)}function C(){q||(T.className="hidden",q=!0)}function $(){var t=document.createElement("div");return t.id=c,t.className="hidden",t.innerHTML=p,t.addEventListener("click",(function(t){t.preventDefault(),N()})),document.body.appendChild(t),t}function O(){var t=Math.round(.43*S),e=Math.round(.29*S),o="#"+c+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+a+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+E+";cursor:pointer;display:block;height:"+S+"px;opacity:1;outline:0;position:fixed;right:"+a+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+S+"px;z-index:"+A+"}#"+c+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+c+".hidden{bottom:-"+S+"px;opacity:0}",i=document.createElement("style");i.appendChild(document.createTextNode(o)),document.head.insertAdjacentElement("afterbegin",i)}function N(){var t="function"==typeof m?m():m,e=window,n=e.performance,o=e.requestAnimationFrame;if(b<=0||void 0===n||void 0===o)return j(t);var a=n.now(),i=I(),r=i-t;o((function t(e){var n=Math.min((e-a)/b,1);j(i-Math.round(d(n)*r)),n<1&&o(t)}))}function I(){return h.scrollTop||M&&document.documentElement.scrollTop||0}function j(t){h.scrollTop=t,M&&(document.documentElement.scrollTop=t)}function F(t){return.5*(1-Math.cos(Math.PI*t))}P.addEventListener("scroll",B),B()}},"function"==typeof define&&define.amd?define(["exports"],M):"object"===q(T)&&"string"!=typeof T.nodeName?M(T):M(L.commonJsStrict={}),(0,T.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"});v=a("eS71k");var P=a("ejlBz"),B=a("lEkuA");let H;const C=document.querySelector(".movie-card-list");t(d).start(),(0,v.default)(C),r.default.fetchGenresList().then((t=>{H=t})),r.default.fetchTrendData().then((t=>{const e=l(s(t.results,H));C.insertAdjacentHTML("beforeend",e),A(t.results);const n=document.querySelectorAll(".btn-watche"),o=document.querySelectorAll(".btn-queue");n.forEach((t=>{v.watchedArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Watched")}))})),o.forEach((t=>{v.queueArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Queue")}))})),g(t.total_pages,t.page)})).catch((t=>console.log(t))),t(d).done(),C.addEventListener("click",(async function(t){if(!t.target.dataset.target)return;const e=t.target.dataset.id,n=await r.default.fetchFullMovieInfo(e);if("watched"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Watched",void(0,P.default)(n,v.watchedArr,t.target.dataset.target);t.target.textContent="Add to Watched",(0,B.default)(e,v.watchedArr,t.target.dataset.target)}if("queue"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Queue",void(0,P.default)(n,v.queueArr,t.target.dataset.target);t.target.textContent="Add to Queue",(0,B.default)(e,v.queueArr,t.target.dataset.target)}}));
//# sourceMappingURL=index.0047324f.js.map