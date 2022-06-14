function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequire37c5;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire37c5=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.f11878a7.js","5JHSy":"no-poster.325dd571.jpg","5UbS1":"index.d51a5706.css","1x9ka":"index.85b73757.js"}')),s("cXP6Y"),s("kcHu4");var r,o=s("iyB0E");r=new URL(s("kyEFX").resolve("5JHSy"),import.meta.url).toString();function a(e,n){const i=null==n?void 0:n.genres;return e.map((({poster_path:e,original_title:n,release_date:s,genre_ids:o,id:a})=>{""===n&&(n="Sorry, no title for the movie."),s||(s="Expected");const l=o.reduce(((t,e,n)=>{if(!o.length)return t;if(n<=1){const s=null==i?void 0:i.find((({id:t})=>t===e));return n<=o.length-2?t+(null==s?void 0:s.name)+", ":t+(null==s?void 0:s.name)+" "}return 2===n?t+"Others":t}),""),u=i?l:"Other",c=null==s?void 0:s.split("-").slice(0,1);return{id:a,imagePoster:e?`https://image.tmdb.org/t/p/w500${e}`:t(r),original_title:n,releaseYear:c,fullGenresNames:u}}))}o=s("iyB0E"),o=s("iyB0E");var l=s("k6WP2");function u(t){return t.map((({id:t,imagePoster:e,original_title:n,releaseYear:i,fullGenresNames:s})=>`<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="${e}" alt="poster" class="imagePoster" data-id="${t}"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="${t}" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="${t}" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="${t}">${n}</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">${s} | ${i} </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>`)).join("")}const c=document.querySelector(".movie-card-list"),h=document.querySelector(".pagination"),d=document.querySelector(".movie-card-list");let f,g=0;function p(t,e){let n="",i=e-2,s=e-1,r=e+1,o=e+2;g=e,t<=1||(e>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),e>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),e>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e>4&&(n+='<li class="pagination-item">...</li>'),i>0&&(n+=`<li class="pagination-item pagination-pages">${i}</li>`)),s>0&&(n+=`<li class="pagination-item pagination-pages">${s}</li>`),n+=`<li class="pagination-item pagination-pages current-page">${e}</li>`,e<t&&(n+=`<li class="pagination-item pagination-pages">${r}</li>`),e<t-1&&(e<t-2&&(n+=`<li class="pagination-item pagination-pages">${o}</li>`,!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e<t-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+=`<li class="pagination-item pagination-pages">${t}</li>`)),e<t&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),h.innerHTML=n,h.addEventListener("click",m))}function m(e){if("LI"!==e.target.nodeName)return;const n=e.target.textContent;switch(n){case"«":g-=1;break;case"»":g+=1;break;case"...":return;default:g=n}d.innerHTML="",t(l).start(),o.default.fetchGenresList().then((t=>{f=t})),o.input.value?o.default.movieSearch(g).then((e=>{t(l).done();const n=u(a(e.results,f));c.insertAdjacentHTML("beforeend",n),p(e.total_pages,e.page)})).catch((t=>console.log(t))):(o.default.fetchTrendData(g).then((t=>{const e=u(a(t.results,f));c.insertAdjacentHTML("beforeend",e),p(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done())}s("l1016");var y=s("eS71k");o=s("iyB0E"),l=s("k6WP2"),o=s("iyB0E");const v=document.querySelector(".movie-card-list"),w=document.querySelector(".form__search"),E=document.querySelector(".movie-card-list"),b=document.querySelector(".search__error");let T;o.default.fetchGenresList().then((t=>{T=t})),null==w||w.addEventListener("submit",(function(e){if(e.preventDefault(),!o.input.value)return b.textContent="Search field is empty. Enter movie name and press the search button",void(b.style.display="block");t(l).start(),o.default.movieSearch().then((t=>{if(0===t.total_results)b.textContent="Search result is unsuccessful. Enter the correct movie name and press the search button",b.style.display="block";else{b.style.display="none",E.innerHTML="",h.innerHTML="";const e=u(a(t.results,T));v.insertAdjacentHTML("beforeend",e),p(t.total_pages,t.page)}})).catch((t=>console.log(t))),t(l).done()}));l=s("k6WP2");s("baGT8");var A=s("iB56l");y=s("eS71k");const S=document.querySelector(".mySwiper");(0,y.default)(S);new(0,A.default)(".mySwiper",{modules:[A.Navigation,A.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});const I=document.querySelector(".swiper-wrapper");function C(e){const n=e.map((({poster_path:e,id:n})=>`<div class="swiper-slide">\n\t\t\t\t<img src="${e?`https://image.tmdb.org/t/p/w500${e}`:t(r)}" alt="poster" class="slide-poster" data-id="${n}"/>\n\t\t\t</div>`)).join("");I.insertAdjacentHTML("beforeend",n)}var N,D,k={};function _(t){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}N="undefined"!=typeof self?self:void 0,D=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,i=t.cornerOffset,s=void 0===i?20:i,r=t.diameter,o=void 0===r?56:r,a=t.ease,l=void 0===a?B:a,u=t.id,c=void 0===u?"back-to-top":u,h=t.innerHTML,d=void 0===h?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':h,f=t.onClickScrollTo,g=void 0===f?0:f,p=t.scrollContainer,m=void 0===p?document.body:p,y=t.scrollDuration,v=void 0===y?100:y,w=t.showWhenScrollTopIs,E=void 0===w?1:w,b=t.size,T=void 0===b?o:b,A=t.textColor,S=void 0===A?"#fff":A,I=t.zIndex,C=void 0===I?1:I,N=m===document.body,D=N&&document.documentElement;P();var k=M(),_=!0,L=N?window:m;function x(){V()>=E?R():O()}function R(){_&&(k.className="",_=!1)}function O(){_||(k.className="hidden",_=!0)}function M(){var t=document.createElement("div");return t.id=c,t.className="hidden",t.innerHTML=d,t.addEventListener("click",(function(t){t.preventDefault(),F()})),document.body.appendChild(t),t}function P(){var t=Math.round(.43*T),e=Math.round(.29*T),i="#"+c+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+S+";cursor:pointer;display:block;height:"+T+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+T+"px;z-index:"+C+"}#"+c+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+c+".hidden{bottom:-"+T+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(i)),document.head.insertAdjacentElement("afterbegin",r)}function F(){var t="function"==typeof g?g():g,e=window,n=e.performance,i=e.requestAnimationFrame;if(v<=0||void 0===n||void 0===i)return U(t);var s=n.now(),r=V(),o=r-t;i((function t(e){var n=Math.min((e-s)/v,1);U(r-Math.round(l(n)*o)),n<1&&i(t)}))}function V(){return m.scrollTop||D&&document.documentElement.scrollTop||0}function U(t){m.scrollTop=t,D&&(document.documentElement.scrollTop=t)}function B(t){return.5*(1-Math.cos(Math.PI*t))}L.addEventListener("scroll",x),x()}},"function"==typeof define&&define.amd?define(["exports"],D):"object"===_(k)&&"string"!=typeof k.nodeName?D(k):D(N.commonJsStrict={}),(0,k.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"}),s("b5a3y");var L,x=s("amyG6"),R=s("ix4Jr"),O=s("4a6xH"),M=s("7vF8m"),P=s("ffjl9"),F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{},V={},U=U||{},B=F||self;function j(){}function q(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function $(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var G="closure_uid_"+(1e9*Math.random()>>>0),H=0;function K(t,e,n){return t.call.apply(t.bind,arguments)}function z(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Q(t,e,n){return(Q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?K:z).apply(null,arguments)}function X(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function W(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function Y(){this.s=this.s,this.o=this.o}var J={};Y.prototype.s=!1,Y.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,G)&&t[G]||(t[G]=++H)}(this);delete J[t]}},Y.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Z=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},tt=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function et(t){return Array.prototype.concat.apply([],arguments)}function nt(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function it(t){return/^[\s\xa0]*$/.test(t)}var st,rt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ot(t,e){return-1!=t.indexOf(e)}function at(t,e){return t<e?-1:t>e?1:0}t:{var lt=B.navigator;if(lt){var ut=lt.userAgent;if(ut){st=ut;break t}}st=""}function ct(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ht(t){const e={};for(const n in t)e[n]=t[n];return e}var dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ft(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<dt.length;e++)n=dt[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function gt(t){return gt[" "](t),t}gt[" "]=j;var pt,mt,yt=ot(st,"Opera"),vt=ot(st,"Trident")||ot(st,"MSIE"),wt=ot(st,"Edge"),Et=wt||vt,bt=ot(st,"Gecko")&&!(ot(st.toLowerCase(),"webkit")&&!ot(st,"Edge"))&&!(ot(st,"Trident")||ot(st,"MSIE"))&&!ot(st,"Edge"),Tt=ot(st.toLowerCase(),"webkit")&&!ot(st,"Edge");function At(){var t=B.document;return t?t.documentMode:void 0}t:{var St="",It=(mt=st,bt?/rv:([^\);]+)(\)|;)/.exec(mt):wt?/Edge\/([\d\.]+)/.exec(mt):vt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(mt):Tt?/WebKit\/(\S+)/.exec(mt):yt?/(?:Version)[ \/]?(\S+)/.exec(mt):void 0);if(It&&(St=It?It[1]:""),vt){var Ct=At();if(null!=Ct&&Ct>parseFloat(St)){pt=String(Ct);break t}}pt=St}var Nt,Dt={};function kt(){return function(t){var e=Dt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=rt(String(pt)).split("."),n=rt("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=at(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||at(0==s[2].length,0==r[2].length)||at(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(B.document&&vt){var _t=At();Nt=_t||(parseInt(pt,10)||void 0)}else Nt=void 0;var Lt=Nt,xt=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{B.addEventListener("test",j,e),B.removeEventListener("test",j,e)}catch(t){}return t}();function Rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function Ot(t,e){if(Rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(bt){t:{try{gt(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Mt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ot.Z.h.call(this)}}Rt.prototype.h=function(){this.defaultPrevented=!0},W(Ot,Rt);var Mt={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Pt="closure_listenable_"+(1e6*Math.random()|0),Ft=0;function Vt(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++Ft,this.ca=this.fa=!1}function Ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function Bt(t){this.src=t,this.g={},this.h=0}function jt(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Z(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function qt(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}Bt.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=qt(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new Vt(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var $t="closure_lm_"+(1e6*Math.random()|0),Gt={};function Ht(t,e,n,i,s){if(i&&i.once)return zt(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ht(t,e[r],n,i,s);return null}return n=te(n),t&&t[Pt]?t.N(e,n,$(i)?!!i.capture:!!i,s):Kt(t,e,n,!1,i,s)}function Kt(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=$(s)?!!s.capture:!!s,a=Jt(t);if(a||(t[$t]=a=new Bt(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=Yt;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)xt||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Wt(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function zt(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)zt(t,e[r],n,i,s);return null}return n=te(n),t&&t[Pt]?t.O(e,n,$(i)?!!i.capture:!!i,s):Kt(t,e,n,!0,i,s)}function Qt(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Qt(t,e[r],n,i,s);else i=$(i)?!!i.capture:!!i,n=te(n),t&&t[Pt]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=qt(r=t.g[e],n,i,s))&&(Ut(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Jt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qt(e,n,i,s)),(n=-1<t?e[t]:null)&&Xt(n))}function Xt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[Pt])jt(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Wt(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Jt(e))?(jt(n,t),0==n.h&&(n.src=null,e[$t]=null)):Ut(t)}}}function Wt(t){return t in Gt?Gt[t]:Gt[t]="on"+t}function Yt(t,e){if(t.ca)t=!0;else{e=new Ot(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Xt(t),t=n.call(i,e)}return t}function Jt(t){return(t=t[$t])instanceof Bt?t:null}var Zt="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(t){return"function"==typeof t?t:(t[Zt]||(t[Zt]=function(e){return t.handleEvent(e)}),t[Zt])}function ee(){Y.call(this),this.i=new Bt(this),this.P=this,this.I=null}function ne(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Rt(e,t);else if(e instanceof Rt)e.target=e.target||t;else{var s=e;ft(e=new Rt(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=ie(o,i,!0,e)&&s}if(s=ie(o=e.g=t,i,!0,e)&&s,s=ie(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=ie(o=e.g=n[r],i,!1,e)&&s}function ie(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&jt(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}W(ee,Y),ee.prototype[Pt]=!0,ee.prototype.removeEventListener=function(t,e,n,i){Qt(this,t,e,n,i)},ee.prototype.M=function(){if(ee.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)Ut(n[i]);delete e.g[t],e.h--}}this.I=null},ee.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},ee.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var se=B.JSON.stringify;function re(){var t=de;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var oe,ae=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new le),(t=>t.reset()));class le{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function ue(t){B.setTimeout((()=>{throw t}),0)}function ce(t,e){oe||function(){var t=B.Promise.resolve(void 0);oe=function(){t.then(fe)}}(),he||(oe(),he=!0),de.add(t,e)}var he=!1,de=new class{add(t,e){const n=ae.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function fe(){for(var t;t=re();){try{t.h.call(t.g)}catch(t){ue(t)}var e=ae;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}he=!1}function ge(t,e){ee.call(this),this.h=t||1,this.g=e||B,this.j=Q(this.kb,this),this.l=Date.now()}function pe(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function me(t,e,n){if("function"==typeof t)n&&(t=Q(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Q(t.handleEvent,t)}return 2147483647<Number(e)?-1:B.setTimeout(t,e||0)}function ye(t){t.g=me((()=>{t.g=null,t.i&&(t.i=!1,ye(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}W(ge,ee),(L=ge.prototype).da=!1,L.S=null,L.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),ne(this,"tick"),this.da&&(pe(this),this.start()))}},L.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},L.M=function(){ge.Z.M.call(this),pe(this),delete this.g};class ve extends Y{l(t){this.h=arguments,this.g?this.i=!0:ye(this)}M(){super.M(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function we(t){Y.call(this),this.h=t,this.g={}}W(we,Y);var Ee=[];function be(t,e,n,i){Array.isArray(n)||(n&&(Ee[0]=n.toString()),n=Ee);for(var s=0;s<n.length;s++){var r=Ht(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Te(t){ct(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Xt(t)}),t),t.g={}}function Ae(){this.g=!0}function Se(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return se(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}we.prototype.M=function(){we.Z.M.call(this),Te(this)},we.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ae.prototype.Aa=function(){this.g=!1},Ae.prototype.info=function(){};var Ie={},Ce=null;function Ne(){return Ce=Ce||new ee}function De(t){Rt.call(this,Ie.Ma,t)}function ke(t){const e=Ne();ne(e,new De(e,t))}function _e(t,e){Rt.call(this,Ie.STAT_EVENT,t),this.stat=e}function Le(t){const e=Ne();ne(e,new _e(e,t))}function xe(t,e){Rt.call(this,Ie.Na,t),this.size=e}function Re(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return B.setTimeout((function(){t()}),e)}Ie.Ma="serverreachability",W(De,Rt),Ie.STAT_EVENT="statevent",W(_e,Rt),Ie.Na="timingevent",W(xe,Rt);var Oe={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Pe(){}function Fe(t){return t.h||(t.h=t.i())}function Ve(){}Pe.prototype.h=null;var Ue,Be={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function je(){Rt.call(this,"d")}function qe(){Rt.call(this,"c")}function $e(){}function Ge(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new we(this),this.P=Ke,t=Et?125:void 0,this.W=new ge(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new He}function He(){this.i=null,this.g="",this.h=!1}W(je,Rt),W(qe,Rt),W($e,Pe),$e.prototype.g=function(){return new XMLHttpRequest},$e.prototype.i=function(){return{}},Ue=new $e;var Ke=45e3,ze={},Qe={};function Xe(t,e,n){t.K=1,t.v=wn(fn(e)),t.s=n,t.U=!0,We(t,null)}function We(t,e){t.F=Date.now(),tn(t),t.A=fn(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),xn(n.h,"t",i),t.C=0,n=t.l.H,t.h=new He,t.g=xi(t.l,n?e:null,!t.s),0<t.O&&(t.L=new ve(Q(t.Ia,t,t.g),t.O)),be(t.V,t.g,"readystatechange",t.gb),e=t.H?ht(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ke(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&"type"==h[1]?o+(c+"=")+u+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Ye(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Je(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=Ze(t,n),i==Qe){4==e&&(t.o=4,Le(14),s=!1),Se(t.j,t.m,null,"[Incomplete Response]");break}if(i==ze){t.o=4,Le(15),Se(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Se(t.j,t.m,i,null),on(t,i)}Ye(t)&&i!=Qe&&i!=ze&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Le(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Si(e),e.L=!0,Le(11))):(Se(t.j,t.m,n,"[Invalid Chunked Response]"),rn(t),sn(t))}function Ze(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Qe:(n=Number(e.substring(n,i)),isNaN(n)?ze:(i+=1)+n>e.length?Qe:(e=e.substr(i,n),t.C=i+n,e))}function tn(t){t.Y=Date.now()+t.P,en(t,t.P)}function en(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Re(Q(t.eb,t),e)}function nn(t){t.B&&(B.clearTimeout(t.B),t.B=null)}function sn(t){0==t.l.G||t.I||Ni(t.l,t)}function rn(t){nn(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,pe(t.W),Te(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function on(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Vn(n.i,t)))if(n.I=t.N,!t.J&&Vn(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ci(n),pi(n)}Ai(n),Le(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Re(Q(n.ab,n),6e3));if(1>=Fn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else ki(n,11)}else if((t.J||n.g==t)&&Ci(n),!it(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=u[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(ot(t,"spdy")||ot(t,"quic")||ot(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Un(r,r.h),r.h=null))}if(i.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,vn(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Li(i,i.H?i.la:null,i.W),o.J){Bn(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(nn(a),tn(a)),i.g=o}else Ti(i);0<n.l.length&&vi(n)}else"stop"!=u[0]&&"close"!=u[0]||ki(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ki(n,7):gi(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}ke(4)}catch(t){}}function an(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(q(t)||"string"==typeof t)tt(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(q(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(q(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function ln(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ln)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function un(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];cn(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)cn(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function cn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(L=Ge.prototype).setTimeout=function(t){this.P=t},L.gb=function(t){t=t.target;const e=this.L;e&&3==ui(t)?e.l():this.Ia(t)},L.Ia=function(t){try{if(t==this.g)t:{const c=ui(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(3!=c||Et||this.g&&(this.h.h||this.g.ga()||ci(this.g)))){this.I||4!=c||7==e||ke(8==e||0>=h?3:2),nn(this);var n=this.g.ba();this.N=n;e:if(Ye(this)){var i=ci(this.g);t="";var s=i.length,r=4==ui(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){rn(this),sn(this);var o="";break e}this.h.i=new B.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!it(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,Le(12),rn(this),sn(this);break t}Se(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,on(this,n)}this.U?(Je(this,c,o),Et&&this.i&&3==c&&(be(this.V,this.W,"tick",this.fb),this.W.start())):(Se(this.j,this.m,o,null),on(this,o)),4==c&&rn(this),this.i&&!this.I&&(4==c?Ni(this.l,this):(this.i=!1,tn(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Le(12)):(this.o=0,Le(13)),rn(this),sn(this)}}}catch(t){}},L.fb=function(){if(this.g){var t=ui(this.g),e=this.g.ga();this.C<e.length&&(nn(this),Je(this,t,e),this.i&&4!=t&&tn(this))}},L.cancel=function(){this.I=!0,rn(this)},L.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(ke(3),Le(17)),rn(this),this.o=2,sn(this)):en(this,this.Y-t)},(L=ln.prototype).R=function(){un(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},L.T=function(){return un(this),this.g.concat()},L.get=function(t,e){return cn(this.h,t)?this.h[t]:e},L.set=function(t,e){cn(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},L.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var hn=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function dn(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof dn){this.g=void 0!==e?e:t.g,gn(this,t.j),this.s=t.s,pn(this,t.i),mn(this,t.m),this.l=t.l,e=t.h;var n=new Dn;n.i=e.i,e.g&&(n.g=new ln(e.g),n.h=e.h),yn(this,n),this.o=t.o}else t&&(n=String(t).match(hn))?(this.g=!!e,gn(this,n[1]||"",!0),this.s=En(n[2]||""),pn(this,n[3]||"",!0),mn(this,n[4]),this.l=En(n[5]||"",!0),yn(this,n[6]||"",!0),this.o=En(n[7]||"")):(this.g=!!e,this.h=new Dn(null,this.g))}function fn(t){return new dn(t)}function gn(t,e,n){t.j=n?En(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function pn(t,e,n){t.i=n?En(e,!0):e}function mn(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function yn(t,e,n){e instanceof Dn?(t.h=e,function(t,e){e&&!t.j&&(kn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(_n(this,e),xn(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=bn(e,Cn)),t.h=new Dn(e,t.g))}function vn(t,e,n){t.h.set(e,n)}function wn(t){return vn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function En(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bn(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Tn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Tn(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}dn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bn(e,An,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(bn(e,An,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(bn(n,"/"==n.charAt(0)?In:Sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bn(n,Nn)),t.join("")};var An=/[#\/\?@]/g,Sn=/[#\?:]/g,In=/[#\?]/g,Cn=/[#\?@]/g,Nn=/#/g;function Dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function kn(t){t.g||(t.g=new ln,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function _n(t,e){kn(t),e=Rn(t,e),cn(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,cn((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&un(t)))}function Ln(t,e){return kn(t),e=Rn(t,e),cn(t.g.h,e)}function xn(t,e,n){_n(t,e),0<n.length&&(t.i=null,t.g.set(Rn(t,e),nt(n)),t.h+=n.length)}function Rn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(L=Dn.prototype).add=function(t,e){kn(this),this.i=null,t=Rn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},L.forEach=function(t,e){kn(this),this.g.forEach((function(n,i){tt(n,(function(n){t.call(e,n,i,this)}),this)}),this)},L.T=function(){kn(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},L.R=function(t){kn(this);var e=[];if("string"==typeof t)Ln(this,t)&&(e=et(e,this.g.get(Rn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=et(e,t[n])}return e},L.set=function(t,e){return kn(this),this.i=null,Ln(this,t=Rn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},L.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},L.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function On(t){this.l=t||Mn,B.PerformanceNavigationTiming?t=0<(t=B.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(B.g&&B.g.Ea&&B.g.Ea()&&B.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Mn=10;function Pn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Fn(t){return t.h?1:t.g?t.g.size:0}function Vn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function Un(t,e){t.g?t.g.add(e):t.h=e}function Bn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function jn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return nt(t.i)}function qn(){}function $n(){this.g=new qn}function Gn(t,e,n){const i=n||"";try{an(t,(function(t,n){let s=t;$(t)&&(s=se(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function Hn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function Kn(t){this.l=t.$b||null,this.j=t.ib||!1}function zn(t,e){ee.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}On.prototype.cancel=function(){if(this.i=jn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},qn.prototype.stringify=function(t){return B.JSON.stringify(t,void 0)},qn.prototype.parse=function(t){return B.JSON.parse(t,void 0)},W(Kn,Pe),Kn.prototype.g=function(){return new zn(this.l,this.j)},Kn.prototype.i=function(t){return function(){return t}}({}),W(zn,ee);var Qn=0;function Xn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Wn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yn(t)}function Yn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(L=zn.prototype).open=function(t,e){if(this.readyState!=Qn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yn(this)},L.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||B).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Wn(this)),this.readyState=Qn},L.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==B.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Xn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},L.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Wn(this):Yn(this),3==this.readyState&&Xn(this)}},L.Ua=function(t){this.g&&(this.response=this.responseText=t,Wn(this))},L.Ta=function(t){this.g&&(this.response=t,Wn(this))},L.ha=function(){this.g&&Wn(this)},L.setRequestHeader=function(t,e){this.v.append(t,e)},L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(zn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Jn=B.JSON.parse;function Zn(t){ee.call(this),this.headers=new ln,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ti,this.K=this.L=!1}W(Zn,ee);var ti="",ei=/^https?$/i,ni=["POST","PUT"];function ii(t){return"content-type"==t.toLowerCase()}function si(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,ri(t),ai(t)}function ri(t){t.D||(t.D=!0,ne(t,"complete"),ne(t,"error"))}function oi(t){if(t.h&&void 0!==U&&(!t.C[1]||4!=ui(t)||2!=t.ba()))if(t.v&&4==ui(t))me(t.Fa,0,t);else if(ne(t,"readystatechange"),4==ui(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(hn)[1]||null;if(!s&&B.self&&B.self.location){var r=B.self.location.protocol;s=r.substr(0,r.length-1)}i=!ei.test(s?s.toLowerCase():"")}n=i}if(n)ne(t,"complete"),ne(t,"success");else{t.m=6;try{var o=2<ui(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",ri(t)}}finally{ai(t)}}}function ai(t,e){if(t.g){li(t);const n=t.g,i=t.C[0]?j:null;t.g=null,t.C=null,e||ne(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function li(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(B.clearTimeout(t.A),t.A=null)}function ui(t){return t.g?t.g.readyState:0}function ci(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case ti:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function hi(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return ct(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):vn(t,e,n))}function di(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fi(t){this.za=0,this.l=[],this.h=new Ae,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=di("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=di("baseRetryDelayMs",5e3,t),this.$a=di("retryDelaySeedMs",1e4,t),this.Ya=di("forwardChannelMaxRetries",2,t),this.ra=di("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new On(t&&t.concurrentRequestLimit),this.Ca=new $n,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function gi(t){if(mi(t),3==t.G){var e=t.V++,n=fn(t.F);vn(n,"SID",t.J),vn(n,"RID",e),vn(n,"TYPE","terminate"),Ei(t,n),(e=new Ge(t,t.h,e,void 0)).K=2,e.v=wn(fn(n)),n=!1,B.navigator&&B.navigator.sendBeacon&&(n=B.navigator.sendBeacon(e.v.toString(),"")),!n&&B.Image&&((new Image).src=e.v,n=!0),n||(e.g=xi(e.l,null),e.g.ea(e.v)),e.F=Date.now(),tn(e)}_i(t)}function pi(t){t.g&&(Si(t),t.g.cancel(),t.g=null)}function mi(t){pi(t),t.u&&(B.clearTimeout(t.u),t.u=null),Ci(t),t.i.cancel(),t.m&&("number"==typeof t.m&&B.clearTimeout(t.m),t.m=null)}function yi(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&vi(t)}function vi(t){Pn(t.i)||t.m||(t.m=!0,ce(t.Ha,t),t.C=0)}function wi(t,e){var n;n=e?e.m:t.V++;const i=fn(t.F);vn(i,"SID",t.J),vn(i,"RID",n),vn(i,"AID",t.U),Ei(t,i),t.o&&t.s&&hi(i,t.o,t.s),n=new Ge(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=bi(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),Un(t.i,n),Xe(n,i,e)}function Ei(t,e){t.j&&an({},(function(t,n){vn(e,n,t)}))}function bi(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Q(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{Gn(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Ti(t){t.g||t.u||(t.Y=1,ce(t.Ga,t),t.A=0)}function Ai(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Re(Q(t.Ga,t),Di(t,t.A)),t.A++,!0)}function Si(t){null!=t.B&&(B.clearTimeout(t.B),t.B=null)}function Ii(t){t.g=new Ge(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=fn(t.oa);vn(e,"RID","rpc"),vn(e,"SID",t.J),vn(e,"CI",t.N?"0":"1"),vn(e,"AID",t.U),Ei(t,e),vn(e,"TYPE","xmlhttp"),t.o&&t.s&&hi(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=wn(fn(e)),n.s=null,n.U=!0,We(n,t)}function Ci(t){null!=t.v&&(B.clearTimeout(t.v),t.v=null)}function Ni(t,e){var n=null;if(t.g==e){Ci(t),Si(t),t.g=null;var i=2}else{if(!Vn(t.i,e))return;n=e.D,Bn(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;ne(i=Ne(),new xe(i,n,e,s)),vi(t)}else Ti(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(Fn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Re(Q(t.Ha,t,e),Di(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ai(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:ki(t,5);break;case 4:ki(t,10);break;case 3:ki(t,6);break;default:ki(t,2)}}function Di(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function ki(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Q(t.jb,t);n||(n=new dn("//www.google.com/images/cleardot.gif"),B.location&&"http"==B.location.protocol||gn(n,"https"),wn(n)),function(t,e){const n=new Ae;if(B.Image){const i=new Image;i.onload=X(Hn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=X(Hn,n,i,"TestLoadImage: error",!1,e),i.onabort=X(Hn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=X(Hn,n,i,"TestLoadImage: timeout",!1,e),B.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Le(2);t.G=0,t.j&&t.j.va(e),_i(t),mi(t)}function _i(t){t.G=0,t.I=-1,t.j&&(0==jn(t.i).length&&0==t.l.length||(t.i.i.length=0,nt(t.l),t.l.length=0),t.j.ua())}function Li(t,e,n){let i=function(t){return t instanceof dn?fn(t):new dn(t,void 0)}(n);if(""!=i.i)e&&pn(i,e+"."+i.i),mn(i,i.m);else{const t=B.location;i=function(t,e,n,i){var s=new dn(null,void 0);return t&&gn(s,t),e&&pn(s,e),n&&mn(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&ct(t.aa,(function(t,e){vn(i,e,t)})),e=t.D,n=t.sa,e&&n&&vn(i,e,n),vn(i,"VER",t.ma),Ei(t,i),i}function xi(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Zn(new Kn({ib:!0})):new Zn(t.qa)).L=t.H,e}function Ri(){}function Oi(){if(vt&&!(10<=Number(Lt)))throw Error("Environmental error: no available transport.")}function Mi(t,e){ee.call(this),this.g=new fi(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!it(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!it(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new Vi(this)}function Pi(t){je.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Fi(){qe.call(this),this.status=1}function Vi(t){this.g=t}(L=Zn.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ue.g(),this.C=this.u?Fe(this.u):Fe(Ue),this.g.onreadystatechange=Q(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void si(this,t)}t=n||"";const s=new ln(this.headers);i&&an(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=ii;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=B.FormData&&t instanceof B.FormData,!(0<=Z(ni,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{li(this),0<this.B&&((this.K=function(t){return vt&&kt()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Q(this.pa,this)):this.A=me(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){si(this,t)}},L.pa=function(){void 0!==U&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ne(this,"timeout"),this.abort(8))},L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ne(this,"complete"),ne(this,"abort"),ai(this))},L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ai(this,!0)),Zn.Z.M.call(this)},L.Fa=function(){this.s||(this.F||this.v||this.l?oi(this):this.cb())},L.cb=function(){oi(this)},L.ba=function(){try{return 2<ui(this)?this.g.status:-1}catch(t){return-1}},L.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},L.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Jn(e)}},L.Da=function(){return this.m},L.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(L=fi.prototype).ma=8,L.G=1,L.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},L.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Ge(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=ht(r),ft(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=bi(this,s,e),vn(n=fn(this.F),"RID",t),vn(n,"CVER",22),this.D&&vn(n,"X-HTTP-Session-Id",this.D),Ei(this,n),this.o&&r&&hi(n,this.o,r),Un(this.i,s),this.Ra&&vn(n,"TYPE","init"),this.ja?(vn(n,"$req",e),vn(n,"SID","null"),s.$=!0,Xe(s,n,null)):Xe(s,n,e),this.G=2}}else 3==this.G&&(t?wi(this,t):0==this.l.length||Pn(this.i)||wi(this))},L.Ga=function(){if(this.u=null,Ii(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Re(Q(this.bb,this),t)}},L.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Le(10),pi(this),Ii(this))},L.ab=function(){null!=this.v&&(this.v=null,pi(this),Ai(this),Le(19))},L.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Le(2)):(this.h.info("Failed to ping google.com"),Le(1))},(L=Ri.prototype).xa=function(){},L.wa=function(){},L.va=function(){},L.ua=function(){},L.Oa=function(){},Oi.prototype.g=function(t,e){return new Mi(t,e)},W(Mi,ee),Mi.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),ce(Q(t.hb,t,e))),Le(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Li(t,null,t.W),vi(t)},Mi.prototype.close=function(){gi(this.g)},Mi.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,yi(this.g,e)}else this.v?((e={}).__data__=se(t),yi(this.g,e)):yi(this.g,t)},Mi.prototype.M=function(){this.g.j=null,delete this.j,gi(this.g),delete this.g,Mi.Z.M.call(this)},W(Pi,je),W(Fi,qe),W(Vi,Ri),Vi.prototype.xa=function(){ne(this.g,"a")},Vi.prototype.wa=function(t){ne(this.g,new Pi(t))},Vi.prototype.va=function(t){ne(this.g,new Fi(t))},Vi.prototype.ua=function(){ne(this.g,"b")},Oi.prototype.createWebChannel=Oi.prototype.g,Mi.prototype.send=Mi.prototype.u,Mi.prototype.open=Mi.prototype.m,Mi.prototype.close=Mi.prototype.close,Oe.NO_ERROR=0,Oe.TIMEOUT=8,Oe.HTTP_ERROR=6,Me.COMPLETE="complete",Ve.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",ee.prototype.listen=ee.prototype.N,Zn.prototype.listenOnce=Zn.prototype.O,Zn.prototype.getLastError=Zn.prototype.La,Zn.prototype.getLastErrorCode=Zn.prototype.Da,Zn.prototype.getStatus=Zn.prototype.ba,Zn.prototype.getResponseJson=Zn.prototype.Qa,Zn.prototype.getResponseText=Zn.prototype.ga,Zn.prototype.send=Zn.prototype.ea;var Ui=V.createWebChannelTransport=function(){return new Oi},Bi=V.getStatEventTarget=function(){return Ne()},ji=V.ErrorCode=Oe,qi=V.EventType=Me,$i=V.Event=Ie,Gi=V.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Hi=V.FetchXmlHttpFactory=Kn,Ki=V.WebChannel=Ve,zi=V.XhrIo=Zn;s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Qi.UNAUTHENTICATED=new Qi(null),Qi.GOOGLE_CREDENTIALS=new Qi("google-credentials-uid"),Qi.FIRST_PARTY=new Qi("first-party-uid"),Qi.MOCK_USER=new Qi("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Xi="9.8.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi=new(0,M.Logger)("@firebase/firestore");function Yi(){return Wi.logLevel}function Ji(t,...e){if(Wi.logLevel<=M.LogLevel.DEBUG){const n=e.map(es);Wi.debug(`Firestore (${Xi}): ${t}`,...n)}}function Zi(t,...e){if(Wi.logLevel<=M.LogLevel.ERROR){const n=e.map(es);Wi.error(`Firestore (${Xi}): ${t}`,...n)}}function ts(t,...e){if(Wi.logLevel<=M.LogLevel.WARN){const n=e.map(es);Wi.warn(`Firestore (${Xi}): ${t}`,...n)}}function es(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ns(t="Unexpected state"){const e=`FIRESTORE (${Xi}) INTERNAL ASSERTION FAILED: `+t;throw Zi(e),new Error(e)}function is(t,e){t||ns()}function ss(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class os extends P.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class us{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Qi.UNAUTHENTICATED)))}shutdown(){}}class cs{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new as;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new as,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Ji("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Ji("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new as)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Ji("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(is("string"==typeof e.accessToken),new ls(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return is(null===t||"string"==typeof t),new Qi(t)}constructor(t){this.t=t,this.currentUser=Qi.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class hs{constructor(t,e,n){this.type="FirstParty",this.user=Qi.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ds{getToken(){return Promise.resolve(new hs(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Qi.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class fs{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gs{start(t,e){const n=t=>{null!=t.error&&Ji("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Ji("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Ji("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Ji("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(is("string"==typeof t.token),this.p=t.token,new fs(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ps(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=ps(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function ys(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{static now(){return ws.fromMillis(Date.now())}static fromDate(t){return ws.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ws(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ys(this.nanoseconds,t.nanoseconds):ys(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new os(rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new os(rs.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new os(rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new os(rs.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{static fromTimestamp(t){return new Es(t)}static min(){return new Es(new ws(0,0))}static max(){return new Es(new ws(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{get length(){return this.len}isEqual(t){return 0===bs.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof bs?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&ns(),void 0===n?n=t.length-e:n>t.length-e&&ns(),this.segments=t,this.offset=e,this.len=n}}class Ts extends bs{construct(t,e,n){return new Ts(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new os(rs.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ts(e)}static emptyPath(){return new Ts([])}}const As=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ss extends bs{construct(t,e,n){return new Ss(t,e,n)}static isValidIdentifier(t){return As.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ss.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ss(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new os(rs.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new os(rs.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new os(rs.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new os(rs.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ss(e)}static emptyPath(){return new Ss([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{static fromPath(t){return new Is(Ts.fromString(t))}static fromName(t){return new Is(Ts.fromString(t).popFirst(5))}static empty(){return new Is(Ts.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ts.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ts.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Is(new Ts(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Cs.UNKNOWN_ID=-1;function Ns(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Es.fromTimestamp(1e9===i?new ws(n+1,0):new ws(n,i));return new ks(s,Is.empty(),e)}function Ds(t){return new ks(t.readTime,t.key,-1)}class ks{static min(){return new ks(Es.min(),Is.empty(),-1)}static max(){return new ks(Es.max(),Is.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function _s(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Is.comparator(t.documentKey,e.documentKey),0!==n?n:ys(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xs{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rs(t){if(t.code!==rs.FAILED_PRECONDITION||t.message!==Ls)throw t;Ji("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ns(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Os(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Os?e:Os.resolve(e)}catch(t){return Os.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Os.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Os.reject(e)}static resolve(t){return new Os(((e,n)=>{e(t)}))}static reject(t){return new Os(((e,n)=>{n(t)}))}static waitFor(t){return new Os(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=Os.resolve(!1);for(const n of t)e=e.next((t=>t?Os.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new Os(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new Os(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ps{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Us(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ps.ot=-1;class Bs{insert(t,e){return new Bs(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,qs.BLACK,null,null))}remove(t){return new Bs(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qs.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new js(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new js(this.root,t,this.comparator,!1)}getReverseIterator(){return new js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new js(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||qs.EMPTY}}class js{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class qs{copy(t,e,n,i,s){return new qs(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qs.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return qs.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qs.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ns();if(this.right.isRed())throw ns();const t=this.left.check();if(t!==this.right.check())throw ns();return t+(this.isRed()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:qs.RED,this.left=null!=i?i:qs.EMPTY,this.right=null!=s?s:qs.EMPTY,this.size=this.left.size+1+this.right.size}}qs.EMPTY=null,qs.RED=!0,qs.BLACK=!1,qs.EMPTY=new class{get key(){throw ns()}get value(){throw ns()}get color(){throw ns()}get left(){throw ns()}get right(){throw ns()}copy(t,e,n,i,s){return this}insert(t,e,n){return new qs(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Gs(this.data.getIterator())}getIteratorFrom(t){return new Gs(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof $s))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new $s(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new Bs(this.comparator)}}class Gs{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hs{static empty(){return new Hs([])}unionWith(t){let e=new $s(Ss.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new Hs(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return vs(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Ss.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{static fromBase64String(t){const e=atob(t);return new zs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new zs(e)}[Ks](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ys(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}zs.EMPTY_BYTE_STRING=new zs("");const Qs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xs(t){if(is(!!t),"string"==typeof t){let e=0;const n=Qs.exec(t);if(is(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Ws(t.seconds),nanos:Ws(t.nanos)}}function Ws(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function Ys(t){return"string"==typeof t?zs.fromBase64String(t):zs.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Zs(t){const e=Xs(t.mapValue.fields.__local_write_time__.timestampValue);return new ws(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class er{static empty(){return new er("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof er&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){return null==t}function ir(t){return 0===t&&1/t==-1/0}function sr(t){return"number"==typeof t&&Number.isInteger(t)&&!ir(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Js(t)?4:yr(t)?9007199254740991:10:ns()}function ar(t,e){if(t===e)return!0;const n=or(t);if(n!==or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Zs(t).isEqual(Zs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Xs(t.timestampValue),i=Xs(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,Ys(t.bytesValue).isEqual(Ys(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Ws(t.geoPointValue.latitude)===Ws(e.geoPointValue.latitude)&&Ws(t.geoPointValue.longitude)===Ws(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Ws(t.integerValue)===Ws(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Ws(t.doubleValue),i=Ws(e.doubleValue);return n===i?ir(n)===ir(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],ar);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(Fs(n)!==Fs(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!ar(n[t],i[t])))return!1;return!0}(t,e);default:return ns()}var i}function lr(t,e){return void 0!==(t.values||[]).find((t=>ar(t,e)))}function ur(t,e){if(t===e)return 0;const n=or(t),i=or(e);if(n!==i)return ys(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return ys(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Ws(t.integerValue||t.doubleValue),i=Ws(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return cr(t.timestampValue,e.timestampValue);case 4:return cr(Zs(t),Zs(e));case 5:return ys(t.stringValue,e.stringValue);case 6:return function(t,e){const n=Ys(t),i=Ys(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=ys(n[t],i[t]);if(0!==e)return e}return ys(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ys(Ws(t.latitude),Ws(e.latitude));return 0!==n?n:ys(Ws(t.longitude),Ws(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=ur(n[t],i[t]);if(e)return e}return ys(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===rr.mapValue&&e===rr.mapValue)return 0;if(t===rr.mapValue)return 1;if(e===rr.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=ys(i[t],r[t]);if(0!==e)return e;const o=ur(n[i[t]],s[r[t]]);if(0!==o)return o}return ys(i.length,r.length)}(t.mapValue,e.mapValue);default:throw ns()}}function cr(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ys(t,e);const n=Xs(t),i=Xs(e),s=ys(n.seconds,i.seconds);return 0!==s?s:ys(n.nanos,i.nanos)}function hr(t){return dr(t)}function dr(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Xs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Is.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=dr(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${dr(t.fields[s])}`;return n+"}"}(t.mapValue):ns()}function fr(t){return!!t&&"integerValue"in t}function gr(t){return!!t&&"arrayValue"in t}function pr(t){return!!t&&"mapValue"in t}function mr(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Vs(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=mr(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=mr(t.arrayValue.values[n]);return e}return Object.assign({},t)}function yr(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vr{static empty(){return new vr({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!pr(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=mr(e)}setAll(t){let e=Ss.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=mr(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());pr(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ar(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];pr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){Vs(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new vr(mr(this.value))}constructor(t){this.value=t}}function wr(t){const e=[];return Vs(t.fields,((t,n)=>{const i=new Ss([t]);if(pr(n)){const t=wr(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new Hs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Er{static newInvalidDocument(t){return new Er(t,0,Es.min(),Es.min(),vr.empty(),0)}static newFoundDocument(t,e,n){return new Er(t,1,e,Es.min(),n,0)}static newNoDocument(t,e){return new Er(t,2,e,Es.min(),vr.empty(),0)}static newUnknownDocument(t,e){return new Er(t,3,e,Es.min(),vr.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=vr.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=vr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Es.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Er&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Er(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ut=null}}function Tr(t,e=null,n=[],i=[],s=null,r=null,o=null){return new br(t,e,n,i,s,r,o)}function Ar(t){const e=ss(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+hr(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),nr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>hr(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>hr(t))).join(",")),e.ut=t}return e.ut}function Sr(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Pr(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!ar(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vr(t.startAt,e.startAt)&&Vr(t.endAt,e.endAt)}class Ir extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Cr(t,e,n):"array-contains"===e?new _r(t,n):"in"===e?new Lr(t,n):"not-in"===e?new xr(t,n):"array-contains-any"===e?new Rr(t,n):new Ir(t,e,n)}static ct(t,e,n){return"in"===e?new Nr(t,n):new Dr(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ur(e,this.value)):null!==e&&or(this.value)===or(e)&&this.at(ur(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ns()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Cr extends Ir{matches(t){const e=Is.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=Is.fromName(n.referenceValue)}}class Nr extends Ir{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=kr("in",e)}}class Dr extends Ir{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=kr("not-in",e)}}function kr(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Is.fromName(t.referenceValue)))}class _r extends Ir{matches(t){const e=t.data.field(this.field);return gr(e)&&lr(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Lr extends Ir{matches(t){const e=t.data.field(this.field);return null!==e&&lr(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class xr extends Ir{matches(t){if(lr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!lr(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Rr extends Ir{matches(t){const e=t.data.field(this.field);return!(!gr(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>lr(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class Or{constructor(t,e){this.position=t,this.inclusive=e}}class Mr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Pr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Fr(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Is.comparator(Is.fromName(o.referenceValue),n.key):ur(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function Vr(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ar(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Br(t,e,n,i,s,r,o,a){return new Ur(t,e,n,i,s,r,o,a)}function jr(t){return new Ur(t)}function qr(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function $r(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Gr(t){return null!==t.collectionGroup}function Hr(t){const e=ss(t);if(null===e.lt){e.lt=[];const t=$r(e),n=qr(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Mr(t)),e.lt.push(new Mr(Ss.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Mr(Ss.keyField(),t))}}}return e.lt}function Kr(t){const e=ss(t);if(!e.ft)if("F"===e.limitType)e.ft=Tr(e.path,e.collectionGroup,Hr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Hr(e)){const e="desc"===n.dir?"asc":"desc";t.push(new Mr(n.field,e))}const n=e.endAt?new Or(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Or(e.startAt.position,e.startAt.inclusive):null;e.ft=Tr(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function zr(t,e,n){return new Ur(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qr(t,e){return Sr(Kr(t),Kr(e))&&t.limitType===e.limitType}function Xr(t){return`${Ar(Kr(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${hr(e.value)}`})).join(", ")}]`),nr(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>hr(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>hr(t))).join(",")),`Target(${e})`}(Kr(t))}; limitType=${t.limitType})`}function Yr(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Is.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=Fr(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,Hr(n),i)||n.endAt&&!function(t,e,n){const i=Fr(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,Hr(n),i)));var n,i}function Jr(t){return(e,n)=>{let i=!1;for(const s of Hr(t)){const t=Zr(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Zr(t,e,n){const i=t.field.isKeyField()?Is.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?ur(i,s):ns()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return ns()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ir(e)?"-0":e}}function eo(t){return{integerValue:""+t}}function no(t,e){return sr(e)?eo(e):to(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(){this._=void 0}}function so(t,e,n){return t instanceof ao?lo(t,e):t instanceof uo?co(t,e):n}function ro(t,e){var n,i;return t instanceof ho?fr(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class oo extends io{}class ao extends io{constructor(t){super(),this.elements=t}}function lo(t,e){const n=go(e);for(const e of t.elements)n.some((t=>ar(t,e)))||n.push(e);return{arrayValue:{values:n}}}class uo extends io{constructor(t){super(),this.elements=t}}function co(t,e){let n=go(e);for(const e of t.elements)n=n.filter((t=>!ar(t,e)));return{arrayValue:{values:n}}}class ho extends io{constructor(t,e){super(),this.wt=t,this._t=e}}function fo(t){return Ws(t.integerValue||t.doubleValue)}function go(t){return gr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e){this.version=t,this.transformResults=e}}class mo{static none(){return new mo}static exists(t){return new mo(void 0,t)}static updateTime(t){return new mo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function yo(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class vo{}function wo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ko(t.key,mo.none()):new So(t.key,t.data,mo.none());{const n=t.data,i=vr.empty();let s=new $s(Ss.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Io(t.key,i,new Hs(s.toArray()),mo.none())}}function Eo(t,e,n){var i;t instanceof So?function(t,e,n){const i=t.value.clone(),s=No(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Io?function(t,e,n){if(!yo(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=No(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Co(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function bo(t,e,n,i){return t instanceof So?function(t,e,n,i){if(!yo(t.precondition,e))return n;const s=t.value.clone(),r=Do(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Io?function(t,e,n,i){if(!yo(t.precondition,e))return n;const s=Do(t.fieldTransforms,i,e),r=e.data;return r.setAll(Co(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(s=e,r=n,yo(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function To(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=ro(i.transform,t||null);null!=s&&(null===n&&(n=vr.empty()),n.set(i.field,s))}return n||null}function Ao(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&vs(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof ao&&i instanceof ao||n instanceof uo&&i instanceof uo?vs(n.elements,i.elements,ar):n instanceof ho&&i instanceof ho?ar(n._t,i._t):n instanceof oo&&i instanceof oo);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class So extends vo{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Io extends vo{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Co(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function No(t,e,n){const i=new Map;is(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,so(o,a,n[s]))}return i}function Do(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=e,(s=t)instanceof oo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):s instanceof ao?lo(s,r):s instanceof uo?co(s,r):function(t,e){const n=ro(t,e),i=fo(n)+fo(t._t);return fr(n)&&fr(t._t)?eo(i):to(t.wt,i)}(s,r)))}var s,r,o;return i}class ko extends vo{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class _o extends vo{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Lo,xo;function Ro(t){switch(t){default:return ns();case rs.CANCELLED:case rs.UNKNOWN:case rs.DEADLINE_EXCEEDED:case rs.RESOURCE_EXHAUSTED:case rs.INTERNAL:case rs.UNAVAILABLE:case rs.UNAUTHENTICATED:return!1;case rs.INVALID_ARGUMENT:case rs.NOT_FOUND:case rs.ALREADY_EXISTS:case rs.PERMISSION_DENIED:case rs.FAILED_PRECONDITION:case rs.ABORTED:case rs.OUT_OF_RANGE:case rs.UNIMPLEMENTED:case rs.DATA_LOSS:return!0}}function Oo(t){if(void 0===t)return Zi("GRPC error has no .code"),rs.UNKNOWN;switch(t){case Lo.OK:return rs.OK;case Lo.CANCELLED:return rs.CANCELLED;case Lo.UNKNOWN:return rs.UNKNOWN;case Lo.DEADLINE_EXCEEDED:return rs.DEADLINE_EXCEEDED;case Lo.RESOURCE_EXHAUSTED:return rs.RESOURCE_EXHAUSTED;case Lo.INTERNAL:return rs.INTERNAL;case Lo.UNAVAILABLE:return rs.UNAVAILABLE;case Lo.UNAUTHENTICATED:return rs.UNAUTHENTICATED;case Lo.INVALID_ARGUMENT:return rs.INVALID_ARGUMENT;case Lo.NOT_FOUND:return rs.NOT_FOUND;case Lo.ALREADY_EXISTS:return rs.ALREADY_EXISTS;case Lo.PERMISSION_DENIED:return rs.PERMISSION_DENIED;case Lo.FAILED_PRECONDITION:return rs.FAILED_PRECONDITION;case Lo.ABORTED:return rs.ABORTED;case Lo.OUT_OF_RANGE:return rs.OUT_OF_RANGE;case Lo.UNIMPLEMENTED:return rs.UNIMPLEMENTED;case Lo.DATA_LOSS:return rs.DATA_LOSS;default:return ns()}}(xo=Lo||(Lo={}))[xo.OK=0]="OK",xo[xo.CANCELLED=1]="CANCELLED",xo[xo.UNKNOWN=2]="UNKNOWN",xo[xo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xo[xo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xo[xo.NOT_FOUND=5]="NOT_FOUND",xo[xo.ALREADY_EXISTS=6]="ALREADY_EXISTS",xo[xo.PERMISSION_DENIED=7]="PERMISSION_DENIED",xo[xo.UNAUTHENTICATED=16]="UNAUTHENTICATED",xo[xo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xo[xo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xo[xo.ABORTED=10]="ABORTED",xo[xo.OUT_OF_RANGE=11]="OUT_OF_RANGE",xo[xo.UNIMPLEMENTED=12]="UNIMPLEMENTED",xo[xo.INTERNAL=13]="INTERNAL",xo[xo.UNAVAILABLE=14]="UNAVAILABLE",xo[xo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mo{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Vs(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return Us(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=new Bs(Is.comparator);function Fo(){return Po}const Vo=new Bs(Is.comparator);function Uo(...t){let e=Vo;for(const n of t)e=e.insert(n.key,n);return e}function Bo(t){let e=Vo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function jo(){return $o()}function qo(){return $o()}function $o(){return new Mo((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Go=new Bs(Is.comparator),Ho=new $s(Is.comparator);function Ko(...t){let e=Ho;for(const n of t)e=e.add(n);return e}const zo=new $s(ys);function Qo(){return zo}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(t,e){this.databaseId=t,this.dt=e}}function Wo(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Yo(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Jo(t,e){return Wo(t,e.toTimestamp())}function Zo(t){return is(!!t),Es.fromTimestamp(function(t){const e=Xs(t);return new ws(e.seconds,e.nanos)}(t))}function ta(t,e){return(n=t,new Ts(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function ea(t){const e=Ts.fromString(t);return is(fa(e)),e}function na(t,e){return ta(t.databaseId,e.path)}function ia(t){const e=ea(t);return 4===e.length?Ts.emptyPath():ra(e)}function sa(t){return new Ts(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ra(t){return is(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function oa(t,e,n){return{name:na(t,e),fields:n.value.mapValue.fields}}function aa(t,e){let n;if(e instanceof So)n={update:oa(t,e.key,e.value)};else if(e instanceof ko)n={delete:na(t,e.key)};else if(e instanceof Io)n={update:oa(t,e.key,e.data),updateMask:da(e.fieldMask)};else{if(!(e instanceof _o))return ns();n={verify:na(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof oo)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ao)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof uo)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ho)return{fieldPath:e.field.canonicalString(),increment:n._t};throw ns()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(s=e.precondition).updateTime?{updateTime:Jo(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:ns())),n;var i,s}function la(t){let e=ia(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){is(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ua(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new Mr(ca((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,nr(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new Or(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new Or(n,e)}(n.endAt)),Br(e,s,o,r,a,"F",l,u)}function ua(t){return t?void 0!==t.unaryFilter?[ha(t)]:void 0!==t.fieldFilter?[(e=t,Ir.create(ca(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ns()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ua(t))).reduce(((t,e)=>t.concat(e))):ns():[];var e}function ca(t){return Ss.fromServerFormat(t.fieldPath)}function ha(t){switch(t.unaryFilter.op){case"IS_NAN":const e=ca(t.unaryFilter.field);return Ir.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=ca(t.unaryFilter.field);return Ir.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ca(t.unaryFilter.field);return Ir.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ca(t.unaryFilter.field);return Ir.create(s,"!=",{nullValue:"NULL_VALUE"});default:return ns()}}function da(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function fa(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],pa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ma=pa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ya{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Eo(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=bo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=bo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=qo();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=wo(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Es.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ko())}isEqual(t){return this.batchId===t.batchId&&vs(this.mutations,t.mutations,((t,e)=>Ao(t,e)))&&vs(this.baseMutations,t.baseMutations,((t,e)=>Ao(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class va{static from(t,e,n){is(t.mutations.length===n.length);let i=Go;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new va(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.ne=t}}function ba(t){const e=la({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?zr(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Ws(t.integerValue));else if("doubleValue"in t){const n=Ws(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),ir(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(Ys(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?yr(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):ns()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),Is.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}Ta.ye=new Ta;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{addToCollectionParentIndex(t,e){return this.ze.add(e),Os.resolve()}getCollectionParents(t,e){return Os.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Os.resolve()}deleteFieldIndex(t,e){return Os.resolve()}getDocumentsMatchingTarget(t,e){return Os.resolve(null)}getIndexType(t,e){return Os.resolve(0)}getFieldIndexes(t,e){return Os.resolve([])}getNextCollectionGroupToUpdate(t){return Os.resolve(null)}getMinOffset(t,e){return Os.resolve(ks.min())}getMinOffsetFromCollectionGroup(t,e){return Os.resolve(ks.min())}updateCollectionGroup(t,e,n){return Os.resolve()}updateIndexEntries(t,e){return Os.resolve()}constructor(){this.ze=new Sa}}class Sa{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new $s(Ts.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new $s(Ts.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Ia{static withCacheSize(t){return new Ia(t,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ia.DEFAULT_COLLECTION_PERCENTILE=10,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ia.DEFAULT=new Ia(41943040,Ia.DEFAULT_COLLECTION_PERCENTILE,Ia.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ia.DISABLED=new Ia(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca{next(){return this.En+=2,this.En}static An(){return new Ca(0)}static Rn(){return new Ca(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Er.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Os.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new Mo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Da{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&bo(n.mutation,t,Hs.empty(),ws.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ko()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ko()){const i=jo();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=Uo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=jo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ko())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=Fo();const r=$o(),o=$o();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Io)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),bo(o.mutation,e,o.mutation.getFieldMask(),ws.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Da(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=$o();let i=new Bs(((t,e)=>t-e)),s=Ko();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||Hs.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||Ko()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,u=qo();l.forEach((t=>{if(!s.has(t)){const i=wo(e.get(t),n.get(t));null!==i&&u.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Os.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,Is.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):Gr(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):Os.resolve(jo());let o=-1,a=s;return r.next((e=>Os.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Os.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,Ko()))).next((t=>({batchId:o,changes:Bo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Is(e)).next((t=>{let e=Uo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=Uo();return this.indexManager.getCollectionParents(t,i).next((r=>Os.forEach(r,(r=>{const o=(a=e,l=r.child(i),new Ur(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,Er.newInvalidDocument(n)))}));let n=Uo();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&bo(r.mutation,s,Hs.empty(),ws.now()),Yr(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Os.resolve(Er.newInvalidDocument(e))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{getBundleMetadata(t,e){return Os.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Zo(n.createTime)}),Os.resolve()}getNamedQuery(t,e){return Os.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:ba(n.bundledQuery),readTime:Zo(n.readTime)}),Os.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{getOverlay(t,e){return Os.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jo();return Os.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),Os.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Os.resolve()}getOverlaysForCollection(t,e,n){const i=jo(),s=e.length+1,r=new Is(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return Os.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new Bs(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=jo(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=jo(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return Os.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new wa(e,n));let s=this.Xn.get(e);void 0===s&&(s=Ko(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}constructor(){this.overlays=new Bs(Is.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Ra(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Ra(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Is(new Ts([])),n=new Ra(e,t),i=new Ra(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Is(new Ts([])),n=new Ra(e,t),i=new Ra(e,t+1);let s=Ko();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ra(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new $s(Ra.ts),this.es=new $s(Ra.ns)}}class Ra{static ts(t,e){return Is.comparator(t.key,e.key)||ys(t.ls,e.ls)}static ns(t,e){return ys(t.ls,e.ls)||Is.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{checkEmpty(t){return Os.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new ya(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.ds=this.ds.add(new Ra(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Os.resolve(r)}lookupMutationBatch(t,e){return Os.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),s=i<0?0:i;return Os.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Os.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Os.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ra(e,0),i=new Ra(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);s.push(e)})),Os.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new $s(ys);return e.forEach((t=>{const e=new Ra(t,0),i=new Ra(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),Os.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Is.isDocumentKey(s)||(s=s.child(""));const r=new Ra(new Is(s),0);let o=new $s(ys);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),Os.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){is(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Os.forEach(e.mutations,(i=>{const s=new Ra(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Ra(e,0),i=this.ds.firstAfterOrEqual(n);return Os.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,Os.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new $s(Ra.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Os.resolve(n?n.document.mutableCopy():Er.newInvalidDocument(e))}getEntries(t,e){let n=Fo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Er.newInvalidDocument(t))})),Os.resolve(n)}getAllFromCollection(t,e,n){let i=Fo();const s=new Is(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||_s(Ds(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return Os.resolve(i)}getAllFromCollectionGroup(t,e,n,i){ns()}Is(t,e){return Os.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Pa(this)}getSize(t){return Os.resolve(this.size)}constructor(t){this.ps=t,this.docs=new Bs(Is.comparator),this.size=0}}class Pa extends Na{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),Os.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Os.resolve()}getLastRemoteSnapshotVersion(t){return Os.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Os.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Os.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Os.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ca(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Os.resolve()}updateTargetData(t,e){return this.vn(e),Os.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Os.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),Os.waitFor(s).next((()=>i))}getTargetCount(t){return Os.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Os.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Os.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),Os.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Os.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Os.resolve(n)}containsKey(t,e){return Os.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new Mo((t=>Ar(t)),Sr),this.lastRemoteSnapshotVersion=Es.min(),this.highestTargetId=0,this.Es=0,this.As=new xa,this.targetCount=0,this.Rs=Ca.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new La,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Oa(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Ji("MemoryPersistence","Starting transaction:",t);const i=new Ua(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return Os.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new Ps(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Fa(this),this.indexManager=new Aa,this.remoteDocumentCache=new Ma((t=>this.referenceDelegate.Ss(t))),this.wt=new Ea(e),this.Ds=new _a(this.wt)}}class Ua extends xs{constructor(t){super(),this.currentSequenceNumber=t}}class Ba{static Ms(t){return new Ba(t)}get Fs(){if(this.Os)return this.Os;throw ns()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Os.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Os.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Os.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Os.forEach(this.Fs,(n=>{const i=Is.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,Es.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Os.or([()=>Os.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new xa,this.Os=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{static Vi(t,e){let n=Ko(),i=Ko();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new ja(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((s=>s||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Os.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(Es.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const r=this.ki(e,s);return this.Oi(e,r,n,i)?this.Ni(t,e):(Yi()<=M.LogLevel.DEBUG&&Ji("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Wr(e)),this.Mi(t,r,e,Ns(i,-1)))}))}ki(t,e){let n=new $s(Jr(t));return e.forEach(((e,i)=>{Yr(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(t,e){return Yi()<=M.LogLevel.DEBUG&&Ji("QueryEngine","Using full collection scan to execute query:",Wr(e)),this.Di.getDocumentsMatchingQuery(t,e,ks.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ka(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new Bs(ys),this.Bi=new Mo((t=>Ar(t)),Sr),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function Ga(t,e,n,i){return new $a(t,e,n,i)}async function Ha(t,e){const n=ss(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=Ko();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function Ka(t){const e=ss(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function za(t,e){const n=ss(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Qa{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=Qo()}}class Xa{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Qa,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new Qa,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Ji("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Ji("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends class{ro(t,e,n,i,s){const r=this.oo(t,e);Ji("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.co(t,r,o,n).then((t=>(Ji("RestConnection","Received: ",t),t)),(e=>{throw ts("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Xi,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Ja[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,i){return new Promise(((s,r)=>{const o=new zi;o.listenOnce(qi.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case ji.NO_ERROR:const e=o.getResponseJson();Ji("Connection","XHR received:",JSON.stringify(e)),s(e);break;case ji.TIMEOUT:Ji("Connection",'RPC "'+t+'" timed out'),r(new os(rs.DEADLINE_EXCEEDED,"Request time out"));break;case ji.HTTP_ERROR:const n=o.getStatus();if(Ji("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(rs).indexOf(e)>=0?e:rs.UNKNOWN}(t.status);r(new os(e,t.message))}else r(new os(rs.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new os(rs.UNAVAILABLE,"Connection failed."));break;default:ns()}}finally{Ji("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Ui(),r=Bi(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Hi({})),this.uo(o.initMessageHeaders,e,n),(0,P.isMobileCordova)()||(0,P.isReactNative)()||(0,P.isElectron)()||(0,P.isIE)()||(0,P.isUWP)()||(0,P.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Ji("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let u=!1,c=!1;const h=new Za({jr:t=>{c?Ji("Connection","Not sending because WebChannel is closed:",t):(u||(Ji("Connection","Opening WebChannel transport."),l.open(),u=!0),Ji("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Ki.EventType.OPEN,(()=>{c||Ji("Connection","WebChannel transport opened.")})),d(l,Ki.EventType.CLOSE,(()=>{c||(c=!0,Ji("Connection","WebChannel transport closed"),h.eo())})),d(l,Ki.EventType.ERROR,(t=>{c||(c=!0,ts("Connection","WebChannel transport errored:",t),h.eo(new os(rs.UNAVAILABLE,"The operation could not be completed")))})),d(l,Ki.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];is(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Ji("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Lo[t];if(void 0!==e)return Oo(e)}(t),n=s.message;void 0===e&&(e=rs.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),c=!0,h.eo(new os(e,n)),l.close()}else Ji("Connection","WebChannel received:",n),h.no(n)}})),d(r,$i.STAT_EVENT,(t=>{t.stat===Gi.PROXY?Ji("Connection","Detected buffering proxy"):t.stat===Gi.NOPROXY&&Ji("Connection","Detected no buffering proxy")})),setTimeout((()=>{h.Zr()}),0),h}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(t){return new Xo(t,!0)}class il{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Ji("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===rs.RESOURCE_EXHAUSTED?(Zi(e.toString()),Zi("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===rs.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new os(rs.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Ji("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Ji("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,s,r,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new il(t,e)}}class rl extends sl{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(is(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(is(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Zo(t.updateTime):Zo(e);return n.isEqual(Es.min())&&(n=Zo(e)),new po(n,t.transformResults||[])}(t,n)))):[]),s=Zo(t.commitTime);return this.listener.Jo(s,i)}var e,n;return is(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=sa(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>aa(this.wt,t)))};this.Mo(e)}constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.wt=s,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends class{}{tu(){if(this.Zo)throw new os(rs.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new os(rs.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===rs.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new os(rs.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}}class al{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Zi(e),this.su=!1):Ji("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{hl(this)&&(Ji("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=ss(t);e.lu.add(4),await cl(e),e._u.set("Unknown"),e.lu.delete(4),await ul(e)}(this))}))})),this._u=new al(n,i)}}async function ul(t){if(hl(t))for(const e of t.fu)await e(!0)}async function cl(t){for(const e of t.fu)await e(!1)}function hl(t){return 0===ss(t).lu.size}async function dl(t,e,n){if(!Ms(e))throw e;t.lu.add(1),await cl(t),t._u.set("Offline"),n||(n=()=>Ka(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Ji("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ul(t)}))}function fl(t,e){return e().catch((n=>dl(t,n,e)))}async function gl(t){const e=ss(t),n=Il(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;pl(e);)try{const t=await za(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,ml(e,t)}catch(t){await dl(e,t)}yl(e)&&vl(e)}function pl(t){return hl(t)&&t.au.length<10}function ml(t,e){t.au.push(e);const n=Il(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function yl(t){return hl(t)&&!Il(t).Do()&&t.au.length>0}function vl(t){Il(t).start()}async function wl(t){Il(t).Xo()}async function El(t){const e=Il(t);for(const n of t.au)e.Ho(n.mutations)}async function bl(t,e,n){const i=t.au.shift(),s=va.from(i,e,n);await fl(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await gl(t)}async function Tl(t,e){e&&Il(t).zo&&await async function(t,e){if(Ro(n=e.code)&&n!==rs.ABORTED){const n=t.au.shift();Il(t).No(),await fl(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await gl(t)}var n}(t,e),yl(t)&&vl(t)}async function Al(t,e){const n=ss(t);n.asyncQueue.verifyOperationInProgress(),Ji("RemoteStore","RemoteStore received new credentials");const i=hl(n);n.lu.add(3),await cl(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ul(n)}async function Sl(t,e){const n=ss(t);e?(n.lu.delete(2),await ul(n)):e||(n.lu.add(2),await cl(n),n._u.set("Unknown"))}function Il(t){return t.gu||(t.gu=function(t,e,n){const i=ss(t);return i.tu(),new rl(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:wl.bind(null,t),Jr:Tl.bind(null,t),Yo:El.bind(null,t),Jo:bl.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await gl(t)):(await t.gu.stop(),t.au.length>0&&(Ji("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cl{static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Cl(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new os(rs.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new as,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Nl(t,e){if(Zi("AsyncQueue",`${e}: ${t}`),Ms(t))return new os(rs.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(){this.queries=new Mo((t=>Xr(t)),Qr),this.onlineState="Unknown",this.Tu=new Set}}function kl(t){t.Tu.forEach((t=>{t.next()}))}class _l{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new Mo((t=>Xr(t)),Qr),this.ec=new Map,this.nc=new Set,this.sc=new Bs(Is.comparator),this.ic=new Map,this.rc=new xa,this.oc={},this.uc=new Map,this.cc=Ca.Rn(),this.onlineState="Unknown",this.ac=void 0}}function Ll(t,e,n){const i=ss(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=ss(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&kl(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function xl(t,e){const n=ss(t),i=e.batch.batchId;try{const t=await function(t,e){const n=ss(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=Os.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);is(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Ko();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);Ml(n,i,null),Ol(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Pl(n,t)}catch(t){await Rs(t)}}async function Rl(t,e,n){const i=ss(t);try{const t=await function(t,e){const n=ss(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(is(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);Ml(i,e,n),Ol(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await Pl(i,t)}catch(t){await Rs(t)}}function Ol(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Ml(t,e,n){const i=ss(t);let s=i.oc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}async function Pl(t,e,n){const i=ss(t),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=ja.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Go(s),await async function(t,e){const n=ss(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Os.forEach(e,(e=>Os.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>Os.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!Ms(t))throw t;Ji("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,s)}}}(i.localStore,r))}async function Fl(t,e){const n=ss(t);if(!n.currentUser.isEqual(e)){Ji("SyncEngine","User change. New user:",e.toKey());const t=await Ha(n.localStore,e);n.currentUser=e,(i=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new os(rs.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pl(n,t.Ki)}var i}function Vl(t){const e=ss(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xl.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rl.bind(null,e),e}class Ul{async initialize(t){this.wt=nl(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Ga(this.persistence,new qa,t.initialUser,this.wt)}_c(t){return new Va(Ba.Ms,this.wt)}dc(t){return new Xa}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class Bl{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Ll(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fl.bind(null,this.syncEngine),await Sl(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Dl}createDatastore(t){const e=nl(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new tl(i));var i,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new ol(s,r,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Ll(this.syncEngine,t,0),r=Ya.V()?new Ya:new Wa,new ll(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new _l(t,e,n,i,s,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=ss(t);Ji("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await cl(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class jl{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new os(rs.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new as;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Nl(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Qi.UNAUTHENTICATED,this.clientId=ms.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Ji("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Ji("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function ql(t,e){t.asyncQueue.verifyOperationInProgress(),Ji("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await Ha(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function $l(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Gl(t);Ji("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Al(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Al(e.remoteStore,n))),t.onlineComponents=e}async function Gl(t){return t.offlineComponents||(Ji("FirestoreClient","Using default OfflineComponentProvider"),await ql(t,new Ul)),t.offlineComponents}async function Hl(t){return t.onlineComponents||(Ji("FirestoreClient","Using default OnlineComponentProvider"),await $l(t,new Bl)),t.onlineComponents}function Kl(t){return Hl(t).then((t=>t.syncEngine))}const zl=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(t,e,n){if(!n)throw new os(rs.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Xl(t){if(!Is.isDocumentKey(t))throw new os(rs.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wl(t){if(Is.isDocumentKey(t))throw new os(rs.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Yl(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":ns()}function Jl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new os(rs.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Yl(t);throw new os(rs.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zl{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new os(rs.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new os(rs.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new os(rs.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{get app(){if(!this._app)throw new os(rs.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new os(rs.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new us;switch(t.type){case"gapi":const e=t.client;return is(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ds(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new os(rs.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=zl.get(t);e&&(Ji("ComponentProvider","Removing Datastore"),zl.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zl({}),this._settingsFrozen=!1,t instanceof er?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new os(rs.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new er(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class eu{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new eu(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class nu{withConverter(t){return new nu(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class iu extends nu{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new eu(this.firestore,null,new Is(t))}withConverter(t){return new iu(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,jr(n)),this._path=n,this.type="collection"}}function su(t,e,...n){if(t=(0,P.getModularInstance)(t),Ql("collection","path",e),t instanceof tu){const i=Ts.fromString(e,...n);return Wl(i),new iu(t,null,i)}{if(!(t instanceof eu||t instanceof iu))throw new os(rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ts.fromString(e,...n));return Wl(i),new iu(t.firestore,null,i)}}function ru(t,e,...n){if(t=(0,P.getModularInstance)(t),1===arguments.length&&(e=ms.I()),Ql("doc","path",e),t instanceof tu){const i=Ts.fromString(e,...n);return Xl(i),new eu(t,null,new Is(i))}{if(!(t instanceof eu||t instanceof iu))throw new os(rs.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ts.fromString(e,...n));return Xl(i),new eu(t.firestore,t instanceof iu?t.converter:null,new Is(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ou{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=el();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new as;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!Ms(t))throw t;Ji("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw Zi("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Cl.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&ns()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new il(this,"async_queue_retry"),this.Kc=()=>{const t=el();t&&Ji("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=el();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class au extends tu{_terminate(){return this._firestoreClient||uu(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ou,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function lu(t){return t._firestoreClient||uu(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function uu(t){var e;const n=t._freezeSettings(),i=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new tr(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;t._firestoreClient=new jl(t._authCredentials,t._appCheckCredentials,t._queue,i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cu{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new os(rs.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ss(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hu{static fromBase64String(t){try{return new hu(zs.fromBase64String(t))}catch(t){throw new os(rs.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new hu(zs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ys(this._lat,t._lat)||ys(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new os(rs.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new os(rs.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=/^__.*__$/;class pu{toMutation(t,e){return null!==this.fieldMask?new Io(t,this.data,this.fieldMask,e,this.fieldTransforms):new So(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function mu(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ns()}}class yu{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new yu(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Du(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(mu(this.Zc)&&gu.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class vu{aa(t,e,n,i=!1){return new yu({Zc:t,methodName:e,ca:n,path:Ss.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||nl(t)}}function wu(t){const e=t._freezeSettings(),n=nl(t._databaseId);return new vu(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Eu(t,e,n,i,s,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,s);Su("Data must be an object, but it was:",o,i);const a=Tu(i,o);let l,u;if(r.merge)l=new Hs(o.fieldMask),u=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Iu(e,i,n);if(!o.contains(s))throw new os(rs.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);ku(t,s)||t.push(s)}l=new Hs(t),u=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,u=o.fieldTransforms;return new pu(new vr(a),l,u)}function bu(t,e){if(Au(t=(0,P.getModularInstance)(t)))return Su("Unsupported field value:",e,t),Tu(t,e);if(t instanceof du)return function(t,e){if(!mu(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=bu(s,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,P.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return no(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=ws.fromDate(t);return{timestampValue:Wo(e.wt,n)}}if(t instanceof ws){const n=new ws(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wo(e.wt,n)}}if(t instanceof fu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof hu)return{bytesValue:Yo(e.wt,t._byteString)};if(t instanceof eu){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ta(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Yl(t)}`)}(t,e)}function Tu(t,e){const n={};return Us(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vs(t,((t,i)=>{const s=bu(i,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Au(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof ws||t instanceof fu||t instanceof hu||t instanceof eu||t instanceof du)}function Su(t,e,n){if(!Au(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Yl(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}var i}function Iu(t,e,n){if((e=(0,P.getModularInstance)(e))instanceof cu)return e._internalPath;if("string"==typeof e)return Nu(t,e);throw Du("Field path arguments must be of type string or ",t,!1,void 0,n)}const Cu=new RegExp("[~\\*/\\[\\]]");function Nu(t,e,n){if(e.search(Cu)>=0)throw Du(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cu(...e.split("."))._internalPath}catch(i){throw Du(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Du(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new os(rs.INVALID_ARGUMENT,a+t+l)}function ku(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _u(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Lu(t,e){const n=Jl(t.firestore,au),i=ru(t),s=_u(t.converter,e);return xu(n,[Eu(wu(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,mo.exists(!1))]).then((()=>i))}function xu(t,e){return function(t,e){const n=new as;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=Vl(t);try{const t=await function(t,e){const n=ss(t),i=ws.now(),s=e.reduce(((t,e)=>t.add(e.key)),Ko());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Fo(),l=Ko();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=To(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Io(t.key,e,wr(e.value.mapValue),mo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:Bo(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new Bs(ys)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await Pl(i,t.changes),await gl(i.remoteStore)}catch(t){const e=Nl(t,"Failed to persist write");n.reject(e)}}(await Kl(t),e,n))),n.promise}(lu(t),e)}!function(t,e=!0){var n;n=R.SDK_VERSION,Xi=n,(0,R._registerComponent)(new(0,O.Component)("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new au(i,new cs(t.getProvider("auth-internal")),new gs(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,R.registerVersion)("@firebase/firestore","3.4.10",t),(0,R.registerVersion)("@firebase/firestore","3.4.10","esm2017")}();o=s("iyB0E");const Ru=function(t=(0,R.getApp)()){return(0,R._getProvider)(t,"firestore").getImmediate()}(app),Ou=(0,x.getAuth)(),Mu={formWrap:document.querySelector(".form-auth"),loginForm:document.querySelector('[name="loginForm"]'),regForm:document.querySelector('[name="regForm"]'),regBtn:document.querySelector('[name="regBtn"]'),loginBtn:document.querySelector('[name="loginBtn"]'),libBtn:document.querySelector(".nav__library"),logoutBtn:document.querySelector('[name="logoutBtn"]')};Mu.regForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements.emailReg.value.trim(),n=t.target.elements.passwordReg.value.trim();(0,x.createUserWithEmailAndPassword)(Ou,e,n).then((async t=>{console.log(`New user registered ${t.user.email}`);try{const t=await Lu(su(Ru,"users"),{email:e,password:n,films:[]});console.log("Document written with ID: ",t.id)}catch(t){console.error("Error adding document: ",t)}}))})),Mu.loginForm.addEventListener("submit",(async function(t){t.preventDefault();const e=t.target.elements.emailLogin.value.trim(),n=t.target.elements.passwordLogin.value.trim();await(0,x.signInWithEmailAndPassword)(Ou,e,n)})),Mu.logoutBtn.addEventListener("click",(function(t){t.preventDefault(),(0,x.signOut)(Ou),console.log("out")})),Mu.loginBtn.addEventListener("click",(function(){Mu.loginForm.classList.remove("is-hidden"),Mu.formWrap.classList.remove("is-hidden"),Mu.regForm.classList.add("is-hidden")})),Mu.regBtn.addEventListener("click",(function(){Mu.regForm.classList.remove("is-hidden"),Mu.formWrap.classList.remove("is-hidden"),Mu.loginForm.classList.add("is-hidden")})),(0,x.onAuthStateChanged)(Ou,(async t=>{t&&(Mu.logoutBtn.classList.remove("is-hidden"),Mu.libBtn.classList.remove("is-hidden"),Mu.loginBtn.classList.add("is-hidden"),Mu.regBtn.classList.add("is-hidden"),Mu.regForm.classList.add("is-hidden"),Mu.formWrap.classList.add("is-hidden")),t||(Mu.loginBtn.classList.remove("is-hidden"),Mu.regBtn.classList.remove("is-hidden"),Mu.libBtn.classList.add("is-hidden"),Mu.logoutBtn.classList.add("is-hidden"))}));y=s("eS71k");var Pu=s("ejlBz"),Fu=s("lEkuA");let Vu;const Uu=document.querySelector(".movie-card-list");t(l).start(),(0,y.default)(Uu),o.default.fetchGenresList().then((t=>{Vu=t})),o.default.fetchTrendData().then((t=>{const e=u(a(t.results,Vu));Uu.insertAdjacentHTML("beforeend",e),C(t.results);const n=document.querySelectorAll(".btn-watche"),i=document.querySelectorAll(".btn-queue");n.forEach((t=>{y.watchedArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Watched")}))})),i.forEach((t=>{y.queueArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Queue")}))})),p(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done(),Uu.addEventListener("click",(async function(t){if(!t.target.dataset.target)return;const e=t.target.dataset.id,n=await o.default.fetchFullMovieInfo(e);if("watched"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Watched",void(0,Pu.default)(n,y.watchedArr,t.target.dataset.target);t.target.textContent="Add to Watched",(0,Fu.default)(e,y.watchedArr,t.target.dataset.target)}if("queue"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Queue",void(0,Pu.default)(n,y.queueArr,t.target.dataset.target);t.target.textContent="Add to Queue",(0,Fu.default)(e,y.queueArr,t.target.dataset.target)}}));
//# sourceMappingURL=index.f11878a7.js.map
