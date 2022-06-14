!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequire37c5;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire37c5=i),i.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=r.default(e)););return e};var n,r=(n=i("fVNic"))&&n.__esModule?n:{default:n}})),i("iE7OH").register(JSON.parse('{"EVgbq":"index.732f00e8.js","jEEqz":"no-poster.325dd571.jpg","5UbS1":"index.f00b3e26.css","5yY5W":"index.289f079a.js"}'));var a=i("bpxeT"),o=i("2TvXO");i("hSdu6"),i("17a3X");var s,u=i("dh4R1");s=i("aNJCr").getBundleURL("EVgbq")+i("iE7OH").resolve("jEEqz");function c(t,n){var r=null==n?void 0:n.genres;return t.map((function(t){var n=t.poster_path,i=t.original_title,a=t.release_date,o=t.genre_ids,u=t.id;""===i&&(i="Sorry, no title for the movie."),a||(a="Expected");var c=o.reduce((function(e,t,n){if(!o.length)return e;if(n<=1){var i=null==r?void 0:r.find((function(e){return e.id===t}));return n<=o.length-2?e+(null==i?void 0:i.name)+", ":e+(null==i?void 0:i.name)+" "}return 2===n?e+"Others":e}),""),l=r?c:"Other",h=null==a?void 0:a.split("-").slice(0,1);return{id:u,imagePoster:n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):e(s),original_title:i,releaseYear:h,fullGenresNames:l}}))}u=i("dh4R1"),u=i("dh4R1");var l=i("9DJey");function h(e){return e.map((function(e){var t=e.id,n=e.imagePoster,r=e.original_title,i=e.releaseYear,a=e.fullGenresNames;return'<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="'.concat(n,'" alt="poster" class="imagePoster" data-id="').concat(t,'"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="').concat(t,'" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="').concat(t,'" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="').concat(t,'">').concat(r,'</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">').concat(a," | ").concat(i," </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>")})).join("")}var f,d=document.querySelector(".movie-card-list"),v=document.querySelector(".pagination"),p=document.querySelector(".movie-card-list"),y=0;function m(e,t){var n="",r=t-2,i=t-1,a=t+1,o=t+2;y=t,e<=1||(t>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),t>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),t>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&t>4&&(n+='<li class="pagination-item">...</li>'),r>0&&(n+='<li class="pagination-item pagination-pages">'.concat(r,"</li>"))),i>0&&(n+='<li class="pagination-item pagination-pages">'.concat(i,"</li>")),n+='<li class="pagination-item pagination-pages current-page">'.concat(t,"</li>"),t<e&&(n+='<li class="pagination-item pagination-pages">'.concat(a,"</li>")),t<e-1&&(t<e-2&&(n+='<li class="pagination-item pagination-pages">'.concat(o,"</li>"),!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&t<e-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">'.concat(e,"</li>"))),t<e&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),v.innerHTML=n,v.addEventListener("click",g))}function g(t){if("LI"===t.target.nodeName){var n=t.target.textContent;switch(n){case"«":y-=1;break;case"»":y+=1;break;case"...":return;default:y=n}p.innerHTML="",e(l).start(),u.default.fetchGenresList().then((function(e){f=e})),u.input.value?u.default.movieSearch(y).then((function(t){e(l).done();var n=h(c(t.results,f));d.insertAdjacentHTML("beforeend",n),m(t.total_pages,t.page)})).catch((function(e){return console.log(e)})):(u.default.fetchTrendData(y).then((function(e){var t=h(c(e.results,f));d.insertAdjacentHTML("beforeend",t),m(e.total_pages,e.page)})).catch((function(e){return console.log(e)})),e(l).done())}}i("5NgK8");var k,_=i("1vR0Z"),w=(u=i("dh4R1"),l=i("9DJey"),u=i("dh4R1"),document.querySelector(".movie-card-list")),b=document.querySelector(".form__search"),I=document.querySelector(".movie-card-list"),T=document.querySelector(".search__error");u.default.fetchGenresList().then((function(e){k=e})),null==b||b.addEventListener("submit",(function(t){if(t.preventDefault(),!u.input.value)return T.textContent="Search field is empty. Enter movie name and press the search button",void(T.style.display="block");e(l).start(),u.default.movieSearch().then((function(e){if(0===e.total_results)T.textContent="Search result is unsuccessful. Enter the correct movie name and press the search button",T.style.display="block";else{T.style.display="none",I.innerHTML="",v.innerHTML="";var t=h(c(e.results,k));w.insertAdjacentHTML("beforeend",t),m(e.total_pages,e.page)}})).catch((function(e){return console.log(e)})),e(l).done()}));l=i("9DJey");i("ghnK3");var x=i("ds8z5"),E=(a=i("bpxeT"),i("8MBJY")),C=i("a2hTj"),S=i("eYQtU"),N=i("1t1Wn"),A=i("8nrFW"),R=i("l5bVx"),D=i("2MbLg"),P=(o=i("2TvXO"),a=i("bpxeT"),E=i("8MBJY"),C=i("a2hTj"),i("hKHmD")),O=(A=i("8nrFW"),o=i("2TvXO"),a=i("bpxeT"),E=i("8MBJY"),C=i("a2hTj"),N=i("1t1Wn"),A=i("8nrFW"),o=i("2TvXO"),x=i("ds8z5"),E=i("8MBJY"),C=i("a2hTj"),S=i("eYQtU"),N=i("1t1Wn"),A=i("8nrFW"),i("4c7YB")),L=(D=i("2MbLg"),!1),M=!1,F="${JSCORE_VERSION}",U=function(e,t){if(!e)throw V(t)},V=function(e){return new Error("Firebase Database ("+F+") INTERNAL ASSERT FAILED: "+e)},j=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,h=(3&a)<<4|s>>4,f=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(j(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{var s=e[n++],u=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var a=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,s=++i<e.length?n[e.charAt(i)]:64,u=++i<e.length?n[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(r.push(c),64!==s){var l=o<<4&240|s>>2;if(r.push(l),64!==u){var h=s<<6&192|u;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},B=function(e){var t=j(e);return q.encodeByteArray(t,!0)},H=function(e){return B(e).replace(/\./g,"")},W=function(e){try{return q.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function z(e){return K(void 0,e)}function K(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=K(e[n],t[n]));return e}
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
var G=function(){"use strict";function t(){var n=this;e(E)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))}return e(C)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}}}]),t}();
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
function Q(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Y(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function X(){var e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function J(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function $(){var e=Q();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Z(){return!0===L||!0===M}function ee(){return"object"==typeof indexedDB}function te(){return new Promise((function(e,t){try{var n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=function(){i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=function(){n=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function ne(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}
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
var re=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,i)).code=t,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(e(x)(o),r.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(x)(o),ie.prototype.create),o}return r}(e(O)(Error)),ie=function(){"use strict";function t(n,r,i){e(E)(this,t),this.service=n,this.serviceName=r,this.errors=i}return e(C)(t,[{key:"create",value:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=n[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?ae(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new re(a,u,i);return c}}]),t}();function ae(e,t){return e.replace(oe,(function(e,n){var r=t[n];return null!=r?String(r):"<".concat(n,"?>")}))}var oe=/\{\$([^}]+)}/g;
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
 */function se(e){return JSON.parse(e)}function ue(e){return JSON.stringify(e)}
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
 */var ce=function(e){var t={},n={},r={},i="";try{var a=e.split(".");t=se(W(a[0])||""),n=se(W(a[1])||""),i=a[2],r=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:r,signature:i}},le=function(e){var t=ce(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")};
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
function he(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function fe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function de(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ve(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function pe(e,t){if(e===t)return!0;var n=Object.keys(e),r=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=n[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!r.includes(c))return!1;var l=e[c],h=t[c];if(ye(l)&&ye(h)){if(!pe(l,h))return!1}else if(l!==h)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var f=!0,d=!1,v=void 0;try{for(var p,y=r[Symbol.iterator]();!(f=(p=y.next()).done);f=!0){var m=p.value;if(!n.includes(m))return!1}}catch(e){d=!0,v=e}finally{try{f||null==y.return||y.return()}finally{if(d)throw v}}return!0}function ye(e){return null!==e&&"object"==typeof e}
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
 */function me(t){var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=function(t,r){var i=e(N)(r.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){n.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):n.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n.length?"&"+n.join("&"):""}function ge(t){var n={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var r=e(N)(t.split("="),2),i=r[0],a=r[1];n[decodeURIComponent(i)]=decodeURIComponent(a)}})),n}function ke(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var _e=function(){"use strict";function t(){e(E)(this,t),this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var n=1;n<this.blockSize;++n)this.pad_[n]=0;this.reset()}return e(C)(t,[{key:"reset",value:function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}},{key:"compress_",value:function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(var i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(var a=16;a<80;a++){var o=n[a-3]^n[a-8]^n[a-14]^n[a-16];n[a]=4294967295&(o<<1|o>>>31)}for(var s,u,c=this.chain_[0],l=this.chain_[1],h=this.chain_[2],f=this.chain_[3],d=this.chain_[4],v=0;v<80;v++){v<40?v<20?(s=f^l&(h^f),u=1518500249):(s=l^h^f,u=1859775393):v<60?(s=l&h|f&(l|h),u=2400959708):(s=l^h^f,u=3395469782);var p=(c<<5|c>>>27)+s+d+u+n[v]&4294967295;d=f,f=h,h=4294967295&(l<<30|l>>>2),l=c,c=p}this.chain_[0]=this.chain_[0]+c&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+h&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}},{key:"update",value:function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,a=this.inbuf_;r<t;){if(0===a)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[a]=e.charCodeAt(r),++r,++a===this.blockSize){this.compress_(i),a=0;break}}else for(;r<t;)if(i[a]=e[r],++r,++a===this.blockSize){this.compress_(i),a=0;break}}this.inbuf_=a,this.total_+=t}}},{key:"digest",value:function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);for(var r=0,i=0;i<5;i++)for(var a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}]),t}();var we=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then((function(){n(i)})).catch((function(e){i.error(e)}))}return e(C)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;var n=!0,r=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=be),void 0===r.error&&(r.error=be),void 0===r.complete&&(r.complete=be);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function be(){}
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
 */function Ie(e,t){return"".concat(e," failed: ").concat(t," argument ")}
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
var Te=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var a=i-55296;r++,U(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(a<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},xe=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t},Ee=144e5;function Ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(Ee,r+i)}
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
 */
function Se(e){return e&&e._delegate?e._delegate:e}var Ne=function(){"use strict";function t(n,r,i){e(E)(this,t),this.name=n,this.instanceFactory=r,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(C)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Ae="[DEFAULT]",Re=function(){"use strict";function t(n,r){e(E)(this,t),this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(C)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new G;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Ae})}catch(e){}var n=!0,r=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=e(N)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var h=this.getOrInitializeService({instanceIdentifier:l});c.resolve(h)}catch(e){}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=Array.from(t.instances.values()),n.next=3,Promise.all(e(A)(r.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(A)(r.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return n.stop()}}),n)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.options,r=void 0===n?{}:n,i=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:r}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=e(N)(c.value,2),f=h[0],d=h[1],v=this.normalizeInstanceIdentifier(f);i===v&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var a=this.instances.get(r);return a&&e(a,r),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var n=this.onInitCallbacks.get(t);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,a=this.instances.get(n);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===Ae?void 0:t),options:i}),this.instances.set(n,a),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(a,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae;return this.component?this.component.multipleInstances?e:Ae:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var De,Pe,Oe=function(){"use strict";function t(n){e(E)(this,t),this.name=n,this.providers=new Map}return e(C)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Re(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Le=(E=i("8MBJY"),C=i("a2hTj"),P=i("hKHmD"),A=i("8nrFW"),[]);(Pe=De||(De={}))[Pe.DEBUG=0]="DEBUG",Pe[Pe.VERBOSE=1]="VERBOSE",Pe[Pe.INFO=2]="INFO",Pe[Pe.WARN=3]="WARN",Pe[Pe.ERROR=4]="ERROR",Pe[Pe.SILENT=5]="SILENT";var Me,Fe={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Ue=De.INFO,Ve=(Me={},e(P)(Me,De.DEBUG,"log"),e(P)(Me,De.VERBOSE,"log"),e(P)(Me,De.INFO,"info"),e(P)(Me,De.WARN,"warn"),e(P)(Me,De.ERROR,"error"),Me),je=function(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];var o;if(!(n<t.logLevel)){var s=(new Date).toISOString(),u=Ve[n];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(n,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(A)(i)))}},qe=function(){"use strict";function t(n){e(E)(this,t),this.name=n,this._logLevel=Ue,this._logHandler=je,this._userLogHandler=null,Le.push(this)}return e(C)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in De))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Fe[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.DEBUG].concat(e(A)(n))),this._logHandler.apply(this,[this,De.DEBUG].concat(e(A)(n)))}},{key:"log",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.VERBOSE].concat(e(A)(n))),this._logHandler.apply(this,[this,De.VERBOSE].concat(e(A)(n)))}},{key:"info",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.INFO].concat(e(A)(n))),this._logHandler.apply(this,[this,De.INFO].concat(e(A)(n)))}},{key:"warn",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.WARN].concat(e(A)(n))),this._logHandler.apply(this,[this,De.WARN].concat(e(A)(n)))}},{key:"error",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];this._userLogHandler&&this._userLogHandler.apply(this,[this,De.ERROR].concat(e(A)(n))),this._logHandler.apply(this,[this,De.ERROR].concat(e(A)(n)))}}]),t}();a=i("bpxeT");var Be={};Object.defineProperty(Be,"__esModule",{value:!0}),Be.default=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){We.default(e,t,n[t])}))}return e};var He,We=(He=i("hKHmD"))&&He.__esModule?He:{default:He};var ze,Ke;A=i("8nrFW"),o=i("2TvXO"),A=i("8nrFW");var Ge=new WeakMap,Qe=new WeakMap,Ye=new WeakMap,Xe=new WeakMap,Je=new WeakMap;var $e={get:function(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Qe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ye.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(e[t])},set:function(e,t,n){return e[t]=n,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function Ze(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ke||(Ke=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return t.apply(nt(this),n),tt(Ge.get(this))}:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return tt(t.apply(nt(this),n))}:function(n){for(var r=arguments.length,i=new Array(r>1?r-1:0),a=1;a<r;a++)i[a-1]=arguments[a];var o,s=(o=t).call.apply(o,[nt(this),n].concat(e(A)(i)));return Ye.set(s,n.sort?n.sort():[n]),tt(s)}}function et(e){return"function"==typeof e?Ze(e):(e instanceof IDBTransaction&&function(e){if(!Qe.has(e)){var t=new Promise((function(t,n){var r=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),r()},a=function(){n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));Qe.set(e,t)}}(e),t=e,(ze||(ze=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,$e):e);var t}function tt(e){if(e instanceof IDBRequest)return t=e,(n=new Promise((function(e,n){var r=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(tt(t.result)),r()},a=function(){n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&Ge.set(e,t)})).catch((function(){})),Je.set(n,t),n;var t,n;if(Xe.has(e))return Xe.get(e);var r=et(e);return r!==e&&(Xe.set(e,r),Je.set(r,e)),r}var nt=function(e){return Je.get(e)};function rt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.blocked,i=n.upgrade,a=n.blocking,o=n.terminated,s=indexedDB.open(e,t),u=tt(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(tt(s.result),e.oldVersion,e.newVersion,tt(s.transaction))})),r&&s.addEventListener("blocked",(function(){return r()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var it=["get","getKey","getAll","getAllKeys","count"],at=["put","add","delete","clear"],ot=new Map;function st(t,n){if(t instanceof IDBDatabase&&!(n in t)&&"string"==typeof n){if(ot.get(n))return ot.get(n);var r=n.replace(/FromIndex$/,""),i=n!==r,s=at.includes(r);if(r in(i?IDBIndex:IDBObjectStore).prototype&&(s||it.includes(r))){var u,c=(u=e(a)(e(o).mark((function t(n){var a,u,c,l,h,f,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=d.length,u=new Array(a>1?a-1:0),c=1;c<a;c++)u[c-1]=d[c];return h=this.transaction(n,s?"readwrite":"readonly"),f=h.store,i&&(f=f.index(u.shift())),t.next=7,Promise.all([(l=f)[r].apply(l,e(A)(u)),s&&h.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return u.apply(this,arguments)});return ot.set(n,c),c}}}$e=function(t){return e(Be)({},t,{get:function(e,n,r){return st(e,n)||t.get(e,n,r)},has:function(e,n){return!!st(e,n)||t.has(e,n)}})}($e);
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
var ut=function(){"use strict";function t(n){e(E)(this,t),this.container=n}return e(C)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var ct,lt,ht="@firebase/app",ft="0.7.26",dt=new qe("@firebase/app"),vt="[DEFAULT]",pt=(ct={},e(P)(ct,ht,"fire-core"),e(P)(ct,"@firebase/app-compat","fire-core-compat"),e(P)(ct,"@firebase/analytics","fire-analytics"),e(P)(ct,"@firebase/analytics-compat","fire-analytics-compat"),e(P)(ct,"@firebase/app-check","fire-app-check"),e(P)(ct,"@firebase/app-check-compat","fire-app-check-compat"),e(P)(ct,"@firebase/auth","fire-auth"),e(P)(ct,"@firebase/auth-compat","fire-auth-compat"),e(P)(ct,"@firebase/database","fire-rtdb"),e(P)(ct,"@firebase/database-compat","fire-rtdb-compat"),e(P)(ct,"@firebase/functions","fire-fn"),e(P)(ct,"@firebase/functions-compat","fire-fn-compat"),e(P)(ct,"@firebase/installations","fire-iid"),e(P)(ct,"@firebase/installations-compat","fire-iid-compat"),e(P)(ct,"@firebase/messaging","fire-fcm"),e(P)(ct,"@firebase/messaging-compat","fire-fcm-compat"),e(P)(ct,"@firebase/performance","fire-perf"),e(P)(ct,"@firebase/performance-compat","fire-perf-compat"),e(P)(ct,"@firebase/remote-config","fire-rc"),e(P)(ct,"@firebase/remote-config-compat","fire-rc-compat"),e(P)(ct,"@firebase/storage","fire-gcs"),e(P)(ct,"@firebase/storage-compat","fire-gcs-compat"),e(P)(ct,"@firebase/firestore","fire-fst"),e(P)(ct,"@firebase/firestore-compat","fire-fst-compat"),e(P)(ct,"fire-js","fire-js"),e(P)(ct,"firebase","fire-js-all"),ct),yt=new Map,mt=new Map;function gt(e,t){try{e.container.addComponent(t)}catch(n){dt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),n)}}function kt(e){var t=e.name;if(mt.has(t))return dt.debug("There were multiple attempts to register component ".concat(t,".")),!1;mt.set(t,e);var n=!0,r=!1,i=void 0;try{for(var a,o=yt.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){gt(a.value,e)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}function _t(e,t){var n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
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
var wt=(lt={},e(P)(lt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(P)(lt,"bad-app-name","Illegal App name: '{$appName}"),e(P)(lt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(P)(lt,"app-deleted","Firebase App named '{$appName}' already deleted"),e(P)(lt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(P)(lt,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(P)(lt,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),e(P)(lt,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),e(P)(lt,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),e(P)(lt,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),lt),bt=new ie("app","Firebase",wt),It=function(){"use strict";function t(n,r,i){var a=this;e(E)(this,t),this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ne("app",(function(){return a}),"PUBLIC"))}return e(C)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw bt.create("app-deleted",{appName:this._name})}}]),t}(),Tt="9.8.3";function xt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:vt,t=yt.get(e);if(!t)throw bt.create("no-app",{appName:e});return t}function Et(e,t,n){var r,i=null!==(r=pt[e])&&void 0!==r?r:e;n&&(i+="-".concat(n));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void dt.warn(s.join(" "))}kt(new Ne("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
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
 */
var Ct="firebase-heartbeat-store",St=null;function Nt(){return St||(St=rt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Ct)}}).catch((function(e){throw bt.create("storage-open",{originalErrorMessage:e.message})}))),St}function At(e){return Rt.apply(this,arguments)}function Rt(){return(Rt=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Nt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Ct).objectStore(Ct).get(Ot(n)));case 8:throw e.prev=8,e.t0=e.catch(1),bt.create("storage-get",{originalErrorMessage:null===(r=e.t0)||void 0===r?void 0:r.message});case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Dt(e,t){return Pt.apply(this,arguments)}function Pt(){return(Pt=e(a)(e(o).mark((function t(n,r){var i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Nt();case 4:return a=e.sent,s=a.transaction(Ct,"readwrite"),u=s.objectStore(Ct),e.next=9,u.put(r,Ot(n));case 9:return e.abrupt("return",s.done);case 12:throw e.prev=12,e.t0=e.catch(1),bt.create("storage-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message});case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Ot(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Lt=function(){"use strict";function t(n){var r=this;e(E)(this,t),this.container=n,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Vt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return r._heartbeatsCache=e,e}))}return e(C)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.container.getProvider("platform-logger").getImmediate(),i=r.getPlatformInfoString(),a=Mt(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==a&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),n)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(r=Mt(),i=Ft(t._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,s=i.unsentEntries,u=H(JSON.stringify({version:2,heartbeats:a})),t._heartbeatsCache.lastSentHeartbeatDate=r,!(s.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=s,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",u);case 17:case"end":return e.stop()}}),n)})))()}}]),t}();function Mt(){return(new Date).toISOString().substring(0,10)}function Ft(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=[],r=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=n.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),jt(n)>t)return o.dates.pop(),"break"}else if(n.push({agent:a.agent,dates:[a.date]}),jt(n)>t)return n.pop(),"break";r=r.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:n,unsentEntries:r}}var Ut,Vt=function(){"use strict";function t(n){e(E)(this,t),this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(C)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee()){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",te().then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,At(t.app);case 9:return r=e.sent,e.abrupt("return",r||{heartbeats:[]});case 11:case"end":return e.stop()}}),n)})))()}},{key:"overwrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,n.read();case 10:return a=e.sent,e.abrupt("return",Dt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),r)})))()}},{key:"add",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=3,n._canUseIndexedDBPromise;case 3:if(r.sent){r.next=8;break}return r.abrupt("return");case 8:return r.next=10,n.read();case 10:return a=r.sent,r.abrupt("return",Dt(n.app,{lastSentHeartbeatDate:null!==(i=t.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e(A)(a.heartbeats).concat(e(A)(t.heartbeats))}));case 12:case"end":return r.stop()}}),r)})))()}}]),t}();function jt(e){return H(JSON.stringify({version:2,heartbeats:e})).length}
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
 */Ut="",kt(new Ne("platform-logger",(function(e){return new ut(e)}),"PRIVATE")),kt(new Ne("heartbeat",(function(e){return new Lt(e)}),"PRIVATE")),Et(ht,ft,Ut),Et(ht,ft,"esm2017"),Et("fire-js","");var qt=i("6qd2L"),Bt="@firebase/database",Ht="0.13.1",Wt="";
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
var zt,Kt=function(){"use strict";function t(n){e(E)(this,t),this.domStorage_=n,this.prefix_="firebase:"}return e(C)(t,[{key:"set",value:function(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ue(t))}},{key:"get",value:function(e){var t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:se(t)}},{key:"remove",value:function(e){this.domStorage_.removeItem(this.prefixedName_(e))}},{key:"prefixedName_",value:function(e){return this.prefix_+e}},{key:"toString",value:function(){return this.domStorage_.toString()}}]),t}(),Gt=function(){"use strict";function t(){e(E)(this,t),this.cache_={},this.isInMemoryStorage=!0}return e(C)(t,[{key:"set",value:function(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}},{key:"get",value:function(e){return he(this.cache_,e)?this.cache_[e]:null}},{key:"remove",value:function(e){delete this.cache_[e]}}]),t}(),Qt=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){var t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Kt(t)}}catch(e){}return new Gt},Yt=Qt("localStorage"),Xt=Qt("sessionStorage"),Jt=new qe("@firebase/database"),$t=(zt=1,function(){return zt++}),Zt=function(e){var t=Te(e),n=new _e;n.update(t);var r=n.digest();return q.encodeByteArray(r)},en=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];for(var r="",i=0;i<t.length;i++){var a=t[i];Array.isArray(a)||a&&"object"==typeof a&&"number"==typeof a.length?r+=en.apply(null,a):r+="object"==typeof a?ue(a):a,r+=" "}return r},tn=null,nn=!0,rn=function(e,t){U(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(Jt.logLevel=De.VERBOSE,tn=Jt.log.bind(Jt),t&&Xt.set("logging_enabled",!0)):"function"==typeof e?tn=e:(tn=null,Xt.remove("logging_enabled"))},an=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!0===nn&&(nn=!1,null===tn&&!0===Xt.get("logging_enabled")&&rn(!0)),tn){var r=en.apply(null,t);tn(r)}},on=function(t){return function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];an.apply(void 0,[t].concat(e(A)(r)))}},sn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE INTERNAL ERROR: "+en.apply(void 0,e(A)(n));Jt.error(i)},un=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE FATAL ERROR: ".concat(en.apply(void 0,e(A)(n)));throw Jt.error(i),new Error(i)},cn=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i="FIREBASE WARNING: "+en.apply(void 0,e(A)(n));Jt.warn(i)},ln=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},hn="[MIN_NAME]",fn="[MAX_NAME]",dn=function(e,t){if(e===t)return 0;if(e===hn||t===fn)return-1;if(t===hn||e===fn)return 1;var n=In(e),r=In(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1},vn=function(e,t){return e===t?0:e<t?-1:1},pn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ue(t))},yn=function(e){if("object"!=typeof e||null===e)return ue(e);var t=[];for(var n in e)t.push(n);t.sort();for(var r="{",i=0;i<t.length;i++)0!==i&&(r+=","),r+=ue(t[i]),r+=":",r+=yn(e[t[i]]);return r+="}"},mn=function(e,t){var n=e.length;if(n<=t)return[e];for(var r=[],i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};
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
 */function gn(e,t){for(var n in e)e.hasOwnProperty(n)&&t(n,e[n])}var kn=function(e){U(!ln(e),"Invalid JSON number");var t,n,r,i,a,o=1023;0===e?(n=0,r=0,t=1/e==-1/0?1:0):(t=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(n=(i=Math.min(Math.floor(Math.log(e)/Math.LN2),o))+o,r=Math.round(e*Math.pow(2,52-i)-Math.pow(2,52))):(n=0,r=Math.round(e/Math.pow(2,-1074))));var s=[];for(a=52;a;a-=1)s.push(r%2?1:0),r=Math.floor(r/2);for(a=11;a;a-=1)s.push(n%2?1:0),n=Math.floor(n/2);s.push(t?1:0),s.reverse();var u=s.join(""),c="";for(a=0;a<64;a+=8){var l=parseInt(u.substr(a,8),2).toString(16);1===l.length&&(l="0"+l),c+=l}return c.toLowerCase()};var _n=new RegExp("^-?(0*)\\d{1,10}$"),wn=-2147483648,bn=2147483647,In=function(e){if(_n.test(e)){var t=Number(e);if(t>=wn&&t<=bn)return t}return null},Tn=function(e){try{e()}catch(e){setTimeout((function(){var t=e.stack||"";throw cn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},xn=function(e,t){var n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n},En=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.appName_=n,this.appCheckProvider=r,this.appCheck=null==r?void 0:r.getImmediate({optional:!0}),this.appCheck||null==r||r.get().then((function(e){return i.appCheck=e}))}return e(C)(t,[{key:"getToken",value:function(e){var t=this;return this.appCheck?this.appCheck.getToken(e):new Promise((function(n,r){var i=t;setTimeout((function(){i.appCheck?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((function(t){return t.addTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){cn('Provided AppCheck credentials for the app named "'.concat(this.appName_,'" ')+"are invalid. This usually indicates your app was not initialized correctly.")}}]),t}(),Cn=function(){"use strict";function t(n,r,i){var a=this;e(E)(this,t),this.appName_=n,this.firebaseOptions_=r,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit((function(e){return a.auth_=e}))}return e(C)(t,[{key:"getToken",value:function(e){var t=this;return this.auth_?this.auth_.getToken(e).catch((function(e){return e&&"auth/token-not-initialized"===e.code?(an("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e)})):new Promise((function(n,r){var i=t;setTimeout((function(){i.auth_?i.getToken(e).then(n,r):n(null)}),0)}))}},{key:"addTokenChangeListener",value:function(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((function(t){return t.addAuthTokenListener(e)}))}},{key:"removeTokenChangeListener",value:function(e){this.authProvider_.get().then((function(t){return t.removeAuthTokenListener(e)}))}},{key:"notifyForInvalidToken",value:function(){var e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',cn(e)}}]),t}(),Sn=function(){"use strict";function t(n){e(E)(this,t),this.accessToken=n}return e(C)(t,[{key:"getToken",value:function(e){return Promise.resolve({accessToken:this.accessToken})}},{key:"addTokenChangeListener",value:function(e){e(this.accessToken)}},{key:"removeTokenChangeListener",value:function(e){}},{key:"notifyForInvalidToken",value:function(){}}]),t}();Sn.OWNER="owner";
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
var Nn="5",An=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Rn="websocket",Dn="long_polling",Pn=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];e(E)(this,t),this.secure=r,this.namespace=i,this.webSocketOnly=a,this.nodeAdmin=o,this.persistenceKey=s,this.includeNamespaceInQueryParams=u,this._host=n.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Yt.get("host:"+n)||this._host}return e(C)(t,[{key:"isCacheableHost",value:function(){return"s-"===this.internalHost.substr(0,2)}},{key:"isCustomHost",value:function(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}},{key:"host",get:function(){return this._host},set:function(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Yt.set("host:"+this._host,this.internalHost))}},{key:"toString",value:function(){var e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}},{key:"toURLString",value:function(){var e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?"?ns=".concat(this.namespace):"";return"".concat(e).concat(this.host,"/").concat(t)}}]),t}();function On(e,t,n){var r;if(U("string"==typeof t,"typeof type must == string"),U("object"==typeof n,"typeof params must == object"),t===Rn)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Dn)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);var i=[];return gn(n,(function(e,t){i.push(e+"="+t)})),r+i.join("&")}
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
 */var Ln=function(){"use strict";function t(){e(E)(this,t),this.counters_={}}return e(C)(t,[{key:"incrementCounter",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;he(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}},{key:"get",value:function(){return z(this.counters_)}}]),t}(),Mn={},Fn={};
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
 */function Un(e){var t=e.toString();return Mn[t]||(Mn[t]=new Ln),Mn[t]}
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
var Vn=function(){"use strict";function t(n){e(E)(this,t),this.onMessage_=n,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}return e(C)(t,[{key:"closeAfter",value:function(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}},{key:"handleResponse",value:function(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){var n=function(e){i[e]&&Tn((function(){r.onMessage_(i[e])}))},r=this,i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(var a=0;a<i.length;++a)n(a);if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}]),t}(),jn="start",qn="close",Bn=function(){"use strict";function t(n,r,i,a,o,s,u){var c=this;e(E)(this,t),this.connId=n,this.repoInfo=r,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.transportSessionId=s,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=on(n),this.stats_=Un(r),this.urlFn=function(e){return c.appCheckToken&&(e.ac=c.appCheckToken),On(r,Dn,e)}}return e(C)(t,[{key:"open",value:function(t,n){var r=this;this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Vn(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((function(){r.log_("Timed out trying to connect."),r.onClosed_(),r.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if(Z()||"complete"===document.readyState)e();else{var t=!1,n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((function(){var t=r;if(!r.isClosed_){r.scriptTagHolder=new Hn((function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(N)(r,5),o=a[0],s=a[1],u=a[2];a[3],a[4];if(t.incrementIncomingBytes_(r),t.scriptTagHolder)if(t.connectTimeoutTimer_&&(clearTimeout(t.connectTimeoutTimer_),t.connectTimeoutTimer_=null),t.everConnected_=!0,o===jn)t.id=s,t.password=u;else{if(o!==qn)throw new Error("Unrecognized command received: "+o);if(s){var c=t;t.scriptTagHolder.sendNewPolls=!1,t.myPacketOrderer.closeAfter(s,(function(){c.onClosed_()}))}else t.onClosed_()}}),(function(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];var a=e(N)(r,2),o=a[0],s=a[1];t.incrementIncomingBytes_(r),t.myPacketOrderer.handleResponse(o,s)}),(function(){t.onClosed_()}),r.urlFn);var n={start:"t"};n.ser=Math.floor(1e8*Math.random()),r.scriptTagHolder.uniqueCallbackIdentifier&&(n.cb=r.scriptTagHolder.uniqueCallbackIdentifier),n.v=Nn,r.transportSessionId&&(n.s=r.transportSessionId),r.lastSessionId&&(n.ls=r.lastSessionId),r.applicationId&&(n.p=r.applicationId),r.appCheckToken&&(n.ac=r.appCheckToken),"undefined"!=typeof location&&location.hostname&&An.test(location.hostname)&&(n.r="f");var i=r.urlFn(n);r.log_("Connecting via long-poll to "+i),r.scriptTagHolder.addTag(i,(function(){}))}}))}},{key:"start",value:function(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}},{key:"markConnectionHealthy",value:function(){}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}},{key:"send",value:function(e){var t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);for(var n=B(t),r=mn(n,1840),i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}},{key:"addDisconnectPingFrame",value:function(e,t){if(!Z()){this.myDisconnFrame=document.createElement("iframe");var n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}}},{key:"incrementIncomingBytes_",value:function(e){var t=ue(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}],[{key:"forceAllow",value:function(){t.forceAllow_=!0}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){return!Z()&&(!!t.forceAllow_||!(t.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}}]),t}(),Hn=function(){"use strict";function t(n,r,i,a){if(e(E)(this,t),this.onDisconnect=i,this.urlFn=a,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,Z())this.commandCB=n,this.onMessageCB=r;else{this.uniqueCallbackIdentifier=$t(),window["pLPCommand"+this.uniqueCallbackIdentifier]=n,window["pRTLPCB"+this.uniqueCallbackIdentifier]=r,this.myIFrame=t.createIFrame_();var o="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11))o='<script>document.domain="'+document.domain+'";<\/script>';var s="<html><body>"+o+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(s),this.myIFrame.doc.close()}catch(e){an("frame writing exception"),e.stack&&an(e.stack),an(e)}}}return e(C)(t,[{key:"close",value:function(){if(this.alive=!1,this.myIFrame){var e=this;this.myIFrame.doc.body.innerHTML="",setTimeout((function(){null!==e.myIFrame&&(document.body.removeChild(e.myIFrame),e.myIFrame=null)}),Math.floor(0))}var t=this.onDisconnect;t&&(this.onDisconnect=null,t())}},{key:"startLongPoll",value:function(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}},{key:"newRequest_",value:function(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;var e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;for(var t=this.urlFn(e),n="",r=0;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;var i=this.pendingSegs.shift();n=n+"&seg"+r+"="+i.seg+"&ts"+r+"="+i.ts+"&d"+r+"="+i.d,r++}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}},{key:"enqueueSegment",value:function(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}},{key:"addLongPollTag_",value:function(e,t){var n=this;this.outstandingRequests.add(t);var r=function(){n.outstandingRequests.delete(t),n.newRequest_()},i=setTimeout(r,Math.floor(25e3));this.addTag(e,(function(){clearTimeout(i),r()}))}},{key:"addTag",value:function(e,t){var n=this;Z()?this.doNodeLongPoll(e,t):setTimeout((function(){try{var r=n;if(!n.sendNewPolls)return;var i=n.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){var e=i.readyState;e&&"loaded"!==e&&"complete"!==e||(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=function(){an("Long-poll script failed to load: "+e),r.sendNewPolls=!1,r.close()},n.myIFrame.doc.body.appendChild(i)}catch(e){}}),Math.floor(1))}}],[{key:"createIFrame_",value:function(){var e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||an("No IE domain setting required")}catch(n){var t=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+t+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}}]),t}(),Wn=null;
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
 */"undefined"!=typeof MozWebSocket?Wn=MozWebSocket:"undefined"!=typeof WebSocket&&(Wn=WebSocket);var zn=function(){"use strict";function t(n,r,i,a,o,s,u){e(E)(this,t),this.connId=n,this.applicationId=i,this.appCheckToken=a,this.authToken=o,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=on(this.connId),this.stats_=Un(r),this.connURL=t.connectionURL_(r,s,u,a,i),this.nodeAdmin=r.nodeAdmin}return e(C)(t,[{key:"open",value:function(e,t){var n=this;this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Yt.set("previous_websocket_failure",!0);try{if(Z()){var r=this.nodeAdmin?"AdminNode":"Node",i={headers:{"User-Agent":"Firebase/".concat(Nn,"/").concat(Wt,"/").concat(qt.platform,"/").concat(r),"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(i.headers.Authorization="Bearer ".concat(this.authToken)),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);var a={},o=0===this.connURL.indexOf("wss://")?a.HTTPS_PROXY||a.https_proxy:a.HTTP_PROXY||a.http_proxy;o&&(i.proxy={origin:o})}this.mySock=new Wn(this.connURL,[],undefined)}catch(e){this.log_("Error instantiating WebSocket.");var s=e.message||e.data;return s&&this.log_(s),void this.onClosed_()}this.mySock.onopen=function(){n.log_("Websocket connected."),n.everConnected_=!0},this.mySock.onclose=function(){n.log_("Websocket connection was disconnected."),n.mySock=null,n.onClosed_()},this.mySock.onmessage=function(e){n.handleIncomingFrame(e)},this.mySock.onerror=function(e){n.log_("WebSocket error.  Closing connection.");var t=e.message||e.data;t&&n.log_(t),n.onClosed_()}}},{key:"start",value:function(){}},{key:"markConnectionHealthy",value:function(){Yt.remove("previous_websocket_failure")}},{key:"appendFrame_",value:function(e){if(this.frames.push(e),this.frames.length===this.totalFrames){var t=this.frames.join("");this.frames=null;var n=se(t);this.onMessage(n)}}},{key:"handleNewFrameCount_",value:function(e){this.totalFrames=e,this.frames=[]}},{key:"extractFrameCount_",value:function(e){if(U(null===this.frames,"We already have a frame buffer"),e.length<=6){var t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}},{key:"handleIncomingFrame",value:function(e){if(null!==this.mySock){var t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{var n=this.extractFrameCount_(t);null!==n&&this.appendFrame_(n)}}}},{key:"send",value:function(e){this.resetKeepAlive();var t=ue(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);var n=mn(t,16384);n.length>1&&this.sendString_(String(n.length));for(var r=0;r<n.length;r++)this.sendString_(n[r])}},{key:"shutdown_",value:function(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}},{key:"onClosed_",value:function(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}},{key:"close",value:function(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}},{key:"resetKeepAlive",value:function(){var e=this;clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((function(){e.mySock&&e.sendString_("0"),e.resetKeepAlive()}),Math.floor(45e3))}},{key:"sendString_",value:function(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}],[{key:"connectionURL_",value:function(e,t,n,r,i){var a={};return a.v=Nn,!Z()&&"undefined"!=typeof location&&location.hostname&&An.test(location.hostname)&&(a.r="f"),t&&(a.s=t),n&&(a.ls=n),r&&(a.ac=r),i&&(a.p=i),On(e,Rn,a)}},{key:"forceDisallow",value:function(){t.forceDisallow_=!0}},{key:"isAvailable",value:function(){var e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){var n=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Wn&&!t.forceDisallow_}},{key:"previouslyFailed",value:function(){return Yt.isInMemoryStorage||!0===Yt.get("previous_websocket_failure")}}]),t}();zn.responsesRequiredToBeHealthy=2,zn.healthyTimeout=3e4;
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
var Kn=function(){"use strict";function t(n){e(E)(this,t),this.initTransports_(n)}return e(C)(t,[{key:"initTransports_",value:function(e){var n=zn&&zn.isAvailable(),r=n&&!zn.previouslyFailed();if(e.webSocketOnly&&(n||cn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[zn];else{var i=this.transports_=[],a=!0,o=!1,s=void 0;try{for(var u,c=t.ALL_TRANSPORTS[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;l&&l.isAvailable()&&i.push(l)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}t.globalTransportInitialized_=!0}}},{key:"initialTransport",value:function(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}},{key:"upgradeTransport",value:function(){return this.transports_.length>1?this.transports_[1]:null}}],[{key:"ALL_TRANSPORTS",get:function(){return[Bn,zn]}},{key:"IS_TRANSPORT_INITIALIZED",get:function(){return this.globalTransportInitialized_}}]),t}();Kn.globalTransportInitialized_=!1;
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
var Gn=function(){"use strict";function t(n,r,i,a,o,s,u,c,l,h){e(E)(this,t),this.id=n,this.repoInfo_=r,this.applicationId_=i,this.appCheckToken_=a,this.authToken_=o,this.onMessage_=s,this.onReady_=u,this.onDisconnect_=c,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=on("c:"+this.id+":"),this.transportManager_=new Kn(r),this.log_("Connection created"),this.start_()}return e(C)(t,[{key:"start_",value:function(){var e=this,t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((function(){e.conn_&&e.conn_.open(n,r)}),Math.floor(0));var i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=xn((function(){e.healthyTimeout_=null,e.isHealthy_||(e.conn_&&e.conn_.bytesReceived>102400?(e.log_("Connection exceeded healthy timeout but has received "+e.conn_.bytesReceived+" bytes.  Marking connection healthy."),e.isHealthy_=!0,e.conn_.markConnectionHealthy()):e.conn_&&e.conn_.bytesSent>10240?e.log_("Connection exceeded healthy timeout but has sent "+e.conn_.bytesSent+" bytes.  Leaving connection alive."):(e.log_("Closing unhealthy connection after timeout."),e.close()))}),Math.floor(i)))}},{key:"nextTransportId_",value:function(){return"c:"+this.id+":"+this.connectionCount++}},{key:"disconnReceiver_",value:function(e){var t=this;return function(n){e===t.conn_?t.onConnectionLost_(n):e===t.secondaryConn_?(t.log_("Secondary connection lost."),t.onSecondaryConnectionLost_()):t.log_("closing an old connection")}}},{key:"connReceiver_",value:function(e){var t=this;return function(n){2!==t.state_&&(e===t.rx_?t.onPrimaryMessageReceived_(n):e===t.secondaryConn_?t.onSecondaryMessageReceived_(n):t.log_("message on old connection"))}}},{key:"sendRequest",value:function(e){var t={t:"d",d:e};this.sendData_(t)}},{key:"tryCleanupConnection",value:function(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}},{key:"onSecondaryControl_",value:function(e){if("t"in e){var t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}},{key:"onSecondaryMessageReceived_",value:function(e){var t=pn("t",e),n=pn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}},{key:"upgradeIfSecondaryHealthy_",value:function(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}},{key:"proceedWithUpgrade_",value:function(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}},{key:"onPrimaryMessageReceived_",value:function(e){var t=pn("t",e),n=pn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}},{key:"onDataMessage_",value:function(e){this.onPrimaryResponse_(),this.onMessage_(e)}},{key:"onPrimaryResponse_",value:function(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}},{key:"onControl_",value:function(e){var t=pn("t",e);if("d"in e){var n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(var r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?sn("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):sn("Unknown control packet command: "+t)}}},{key:"onHandshake_",value:function(e){var t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Nn!==n&&cn("Protocol version mismatch detected"),this.tryStartUpgrade_())}},{key:"tryStartUpgrade_",value:function(){var e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}},{key:"startUpgrade_",value:function(e){var t=this;this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;var n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),xn((function(){t.secondaryConn_&&(t.log_("Timed out trying to upgrade."),t.secondaryConn_.close())}),Math.floor(6e4))}},{key:"onReset_",value:function(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}},{key:"onConnectionEstablished_",value:function(e,t){var n=this;this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xn((function(){n.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}},{key:"sendPingOnPrimaryIfNecessary_",value:function(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}},{key:"onSecondaryConnectionLost_",value:function(){var e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}},{key:"onConnectionLost_",value:function(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Yt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}},{key:"onConnectionShutdown_",value:function(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}},{key:"sendData_",value:function(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}},{key:"close",value:function(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}},{key:"closeConnections_",value:function(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}]),t}(),Qn=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"put",value:function(e,t,n,r){}},{key:"merge",value:function(e,t,n,r){}},{key:"refreshAuthToken",value:function(e){}},{key:"refreshAppCheckToken",value:function(e){}},{key:"onDisconnectPut",value:function(e,t,n){}},{key:"onDisconnectMerge",value:function(e,t,n){}},{key:"onDisconnectCancel",value:function(e,t){}},{key:"reportStats",value:function(e){}}]),t}(),Yn=function(){"use strict";function t(n){e(E)(this,t),this.allowedEvents_=n,this.listeners_={},U(Array.isArray(n)&&n.length>0,"Requires a non-empty array")}return e(C)(t,[{key:"trigger",value:function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(Array.isArray(this.listeners_[t]))for(var a=e(A)(this.listeners_[t]),o=0;o<a.length;o++)a[o].callback.apply(a[o].context,r)}},{key:"on",value:function(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});var r=this.getInitialEvent(e);r&&t.apply(n,r)}},{key:"off",value:function(e,t,n){this.validateEventType_(e);for(var r=this.listeners_[e]||[],i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}},{key:"validateEventType_",value:function(e){U(this.allowedEvents_.find((function(t){return t===e})),"Unknown event: "+e)}}]),t}(),Xn=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t;return e(E)(this,r),(t=n.call(this,["online"])).online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Y()||(window.addEventListener("online",(function(){t.online_||(t.online_=!0,t.trigger("online",!0))}),!1),window.addEventListener("offline",(function(){t.online_&&(t.online_=!1,t.trigger("online",!1))}),!1)),t}return e(C)(r,[{key:"getInitialEvent",value:function(e){return U("online"===e,"Unknown event type: "+e),[this.online_]}},{key:"currentlyOnline",value:function(){return this.online_}}],[{key:"getInstance",value:function(){return new r}}]),r}(Yn),Jn=function(){"use strict";function t(n,r){if(e(E)(this,t),void 0===r){this.pieces_=n.split("/");for(var i=0,a=0;a<this.pieces_.length;a++)this.pieces_[a].length>0&&(this.pieces_[i]=this.pieces_[a],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=n,this.pieceNum_=r}return e(C)(t,[{key:"toString",value:function(){for(var e="",t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}]),t}();function $n(){return new Jn("")}function Zn(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function er(e){return e.pieces_.length-e.pieceNum_}function tr(e){var t=e.pieceNum_;return t<e.pieces_.length&&t++,new Jn(e.pieces_,t)}function nr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function rr(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.pieces_.slice(e.pieceNum_+t)}function ir(e){if(e.pieceNum_>=e.pieces_.length)return null;for(var t=[],n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Jn(t,0)}function ar(e,t){for(var n=[],r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Jn)for(var i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else for(var a=t.split("/"),o=0;o<a.length;o++)a[o].length>0&&n.push(a[o]);return new Jn(n,0)}function or(e){return e.pieceNum_>=e.pieces_.length}function sr(e,t){var n=Zn(e),r=Zn(t);if(null===n)return t;if(n===r)return sr(tr(e),tr(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ur(e,t){if(er(e)!==er(t))return!1;for(var n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function cr(e,t){var n=e.pieceNum_,r=t.pieceNum_;if(er(e)>er(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}var lr=function t(n,r){"use strict";e(E)(this,t),this.errorPrefix_=r,this.parts_=rr(n,0),this.byteLength_=Math.max(1,this.parts_.length);for(var i=0;i<this.parts_.length;i++)this.byteLength_+=xe(this.parts_[i]);hr(this)};function hr(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+fr(e))}function fr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */var dr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t,i,a;return e(E)(this,r),t=n.call(this,["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(a="visibilitychange",i="hidden"):void 0!==document.mozHidden?(a="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(a="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(a="webkitvisibilitychange",i="webkitHidden")),t.visible_=!0,a&&document.addEventListener(a,(function(){var e=!document[i];e!==t.visible_&&(t.visible_=e,t.trigger("visible",e))}),!1),t}return e(C)(r,[{key:"getInitialEvent",value:function(e){return U("visible"===e,"Unknown event type: "+e),[this.visible_]}}],[{key:"getInstance",value:function(){return new r}}]),r}(Yn),vr=1e3,pr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o,s,u,c,l){var h;if(e(E)(this,r),(h=n.call(this)).repoInfo_=t,h.applicationId_=i,h.onDataUpdate_=a,h.onConnectStatus_=o,h.onServerInfoUpdate_=s,h.authTokenProvider_=u,h.appCheckTokenProvider_=c,h.authOverride_=l,h.id=r.nextPersistentConnectionId_++,h.log_=on("p:"+h.id+":"),h.interruptReasons_={},h.listens=new Map,h.outstandingPuts_=[],h.outstandingGets_=[],h.outstandingPutCount_=0,h.outstandingGetCount_=0,h.onDisconnectRequestQueue_=[],h.connected_=!1,h.reconnectDelay_=vr,h.maxReconnectDelay_=3e5,h.securityDebugCallback_=null,h.lastSessionId=null,h.establishConnectionTimer_=null,h.visible_=!1,h.requestCBHash_={},h.requestNumber_=0,h.realtime_=null,h.authToken_=null,h.appCheckToken_=null,h.forceTokenRefresh_=!1,h.invalidAuthTokenCount_=0,h.invalidAppCheckTokenCount_=0,h.firstConnection_=!0,h.lastConnectionAttemptTime_=null,h.lastConnectionEstablishedTime_=null,l&&!Z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");return dr.getInstance().on("visible",h.onVisible_,e(x)(h)),-1===t.host.indexOf("fblocal")&&Xn.getInstance().on("online",h.onOnline_,e(x)(h)),h}return e(C)(r,[{key:"sendRequest",value:function(e,t,n){var r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ue(i)),U(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}},{key:"get",value:function(e){var t=this;this.initConnection_();var n=new G,r={p:e._path.toString(),q:e._queryObject},i={action:"g",request:r,onComplete:function(e){var i=e.d;"ok"===e.s?(t.onDataUpdate_(r.p,i,!1,null),n.resolve(i)):n.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;var a=this.outstandingGets_.length-1;return this.connected_||setTimeout((function(){var e=t.outstandingGets_[a];void 0!==e&&i===e&&(delete t.outstandingGets_[a],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),t.log_("get "+a+" timed out on connection"),n.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(a),n.promise}},{key:"listen",value:function(e,t,n,r){this.initConnection_();var i=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+i),this.listens.has(a)||this.listens.set(a,new Map),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),U(!this.listens.get(a).has(i),"listen() called twice for same path/queryId.");var o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(i,o),this.connected_&&this.sendListen_(o)}},{key:"sendGet_",value:function(e){var t=this,n=this.outstandingGets_[e];this.sendRequest("g",n.request,(function(r){delete t.outstandingGets_[e],t.outstandingGetCount_--,0===t.outstandingGetCount_&&(t.outstandingGets_=[]),n.onComplete&&n.onComplete(r)}))}},{key:"sendListen_",value:function(e){var t=this,n=e.query,i=n._path.toString(),a=n._queryIdentifier;this.log_("Listen on "+i+" for "+a);var o={p:i};e.tag&&(o.q=n._queryObject,o.t=e.tag),o.h=e.hashFn(),this.sendRequest("q",o,(function(o){var s=o.d,u=o.s;r.warnOnListenWarnings_(s,n),(t.listens.get(i)&&t.listens.get(i).get(a))===e&&(t.log_("listen response",o),"ok"!==u&&t.removeListen_(i,a),e.onComplete&&e.onComplete(u,s))}))}},{key:"refreshAuthToken",value:function(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(function(){})),this.reduceReconnectDelayIfAdminCredential_(e)}},{key:"reduceReconnectDelayIfAdminCredential_",value:function(e){var t;(e&&40===e.length||"object"==typeof(t=ce(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}},{key:"refreshAppCheckToken",value:function(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(function(){}))}},{key:"tryAuth",value:function(){if(this.connected_&&this.authToken_){var e=this,t=this.authToken_,n=le(t)?"auth":"gauth",r={cred:t};null===this.authOverride_?r.noauth=!0:"object"==typeof this.authOverride_&&(r.authvar=this.authOverride_),this.sendRequest(n,r,(function(n){var r=n.s,i=n.d||"error";e.authToken_===t&&("ok"===r?e.invalidAuthTokenCount_=0:e.onAuthRevoked_(r,i))}))}}},{key:"tryAppCheck",value:function(){var e=this;this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(function(t){var n=t.s,r=t.d||"error";"ok"===n?e.invalidAppCheckTokenCount_=0:e.onAppCheckRevoked_(n,r)}))}},{key:"unlisten",value:function(e,t){var n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),U(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}},{key:"sendUnlisten_",value:function(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);var i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}},{key:"onDisconnectPut",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}},{key:"onDisconnectMerge",value:function(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}},{key:"onDisconnectCancel",value:function(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}},{key:"sendOnDisconnect_",value:function(e,t,n,r){var i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(function(e){r&&setTimeout((function(){r(e.s,e.d)}),Math.floor(0))}))}},{key:"put",value:function(e,t,n,r){this.putInternal("p",e,t,n,r)}},{key:"merge",value:function(e,t,n,r){this.putInternal("m",e,t,n,r)}},{key:"putInternal",value:function(e,t,n,r,i){this.initConnection_();var a={p:t,d:n};void 0!==i&&(a.h=i),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;var o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}},{key:"sendPut_",value:function(e){var t=this,n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,(function(r){t.log_(n+" response",r),delete t.outstandingPuts_[e],t.outstandingPutCount_--,0===t.outstandingPutCount_&&(t.outstandingPuts_=[]),i&&i(r.s,r.d)}))}},{key:"reportStats",value:function(e){if(this.connected_){var t=this,n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,(function(e){if("ok"!==e.s){var n=e.d;t.log_("reportStats","Error sending stats: "+n)}}))}}},{key:"onDataMessage_",value:function(e){if("r"in e){this.log_("from server: "+ue(e));var t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}},{key:"onDataPush_",value:function(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):sn("Unrecognized action received from server: "+ue(e)+"\nAre you using the latest client?")}},{key:"onReady_",value:function(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}},{key:"scheduleConnect_",value:function(e){var t=this;U(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((function(){t.establishConnectionTimer_=null,t.establishConnection_()}),Math.floor(e))}},{key:"initConnection_",value:function(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}},{key:"onVisible_",value:function(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}},{key:"onOnline_",value:function(e){e?(this.log_("Browser went online."),this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}},{key:"onRealtimeDisconnect_",value:function(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=vr),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();var e=(new Date).getTime()-this.lastConnectionAttemptTime_,t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}},{key:"establishConnection_",value:function(){var t=this;return e(a)(e(o).mark((function n(){var i,a,s,u,c,l,h,f,d,v,p,y,m;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.shouldReconnect_()){n.next=31;break}return t.log_("Making a connection attempt"),t.lastConnectionAttemptTime_=(new Date).getTime(),t.lastConnectionEstablishedTime_=null,i=t.onDataMessage_.bind(t),a=t.onReady_.bind(t),s=t.onRealtimeDisconnect_.bind(t),u=t.id+":"+r.nextConnectionId_++,c=t.lastSessionId,l=!1,h=null,f=function(){h?h.close():(l=!0,s())},d=function(e){U(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(e)},t.realtime_={close:f,sendRequest:d},v=t.forceTokenRefresh_,t.forceTokenRefresh_=!1,n.prev=16,n.t0=e(N),n.next=20,Promise.all([t.authTokenProvider_.getToken(v),t.appCheckTokenProvider_.getToken(v)]);case 20:n.t1=n.sent,p=(0,n.t0)(n.t1,2),y=p[0],m=p[1],l?an("getToken() completed but was canceled"):(an("getToken() completed. Creating connection."),t.authToken_=y&&y.accessToken,t.appCheckToken_=m&&m.token,h=new Gn(u,t.repoInfo_,t.applicationId_,t.appCheckToken_,t.authToken_,i,a,s,(function(e){cn(e+" ("+t.repoInfo_.toString()+")"),t.interrupt("server_kill")}),c)),n.next=31;break;case 27:n.prev=27,n.t2=n.catch(16),t.log_("Failed to get token: "+n.t2),l||(t.repoInfo_.nodeAdmin&&cn(n.t2),f());case 31:case"end":return n.stop()}}),n,null,[[16,27]])})))()}},{key:"interrupt",value:function(e){an("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}},{key:"resume",value:function(e){an("Resuming connection for reason: "+e),delete this.interruptReasons_[e],de(this.interruptReasons_)&&(this.reconnectDelay_=vr,this.realtime_||this.scheduleConnect_(0))}},{key:"handleTimestamp_",value:function(e){var t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}},{key:"cancelSentTransactions_",value:function(){for(var e=0;e<this.outstandingPuts_.length;e++){var t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}},{key:"onListenRevoked_",value:function(e,t){var n;n=t?t.map((function(e){return yn(e)})).join("$"):"default";var r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}},{key:"removeListen_",value:function(e,t){var n,r=new Jn(e).toString();if(this.listens.has(r)){var i=this.listens.get(r);n=i.get(t),i.delete(t),0===i.size&&this.listens.delete(r)}else n=void 0;return n}},{key:"onAuthRevoked_",value:function(e,t){an("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}},{key:"onAppCheckRevoked_",value:function(e,t){an("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}},{key:"onSecurityDebugPacket_",value:function(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}},{key:"restoreState_",value:function(){this.tryAuth(),this.tryAppCheck();var e=!0,t=!1,n=void 0,r=!0,i=!1,a=void 0;try{for(var o,s=this.listens.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;try{for(var c,l=u.values()[Symbol.iterator]();!(e=(c=l.next()).done);e=!0){var h=c.value;this.sendListen_(h)}}catch(e){t=!0,n=e}finally{try{e||null==l.return||l.return()}finally{if(t)throw n}}}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}for(var f=0;f<this.outstandingPuts_.length;f++)this.outstandingPuts_[f]&&this.sendPut_(f);for(;this.onDisconnectRequestQueue_.length;){var d=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(d.action,d.pathString,d.data,d.onComplete)}for(var v=0;v<this.outstandingGets_.length;v++)this.outstandingGets_[v]&&this.sendGet_(v)}},{key:"sendConnectStats_",value:function(){var e={},t="js";Z()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+Wt.replace(/\./g,"-")]=1,Y()?e["framework.cordova"]=1:J()&&(e["framework.reactnative"]=1),this.reportStats(e)}},{key:"shouldReconnect_",value:function(){var e=Xn.getInstance().currentlyOnline();return de(this.interruptReasons_)&&e}}],[{key:"warnOnListenWarnings_",value:function(e,t){if(e&&"object"==typeof e&&he(e,"w")){var n=fe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){var r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();cn("Using an unspecified index. Your data will be downloaded and "+"filtered on the client. Consider adding ".concat(r," at ")+"".concat(i," to your security rules for better performance."))}}}}]),r}(Qn);
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
 */pr.nextPersistentConnectionId_=0,pr.nextConnectionId_=0;
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
var yr,mr=function(){"use strict";function t(n,r){e(E)(this,t),this.name=n,this.node=r}return e(C)(t,null,[{key:"Wrap",value:function(e,n){return new t(e,n)}}]),t}(),gr=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"getCompare",value:function(){return this.compare.bind(this)}},{key:"indexedValueChanged",value:function(e,t){var n=new mr(hn,e),r=new mr(hn,t);return 0!==this.compare(n,r)}},{key:"minPost",value:function(){return mr.MIN}}]),t}(),kr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(C)(r,[{key:"compare",value:function(e,t){return dn(e.name,t.name)}},{key:"isDefinedOn",value:function(e){throw V("KeyIndex.isDefinedOn not expected to be called.")}},{key:"indexedValueChanged",value:function(e,t){return!1}},{key:"minPost",value:function(){return mr.MIN}},{key:"maxPost",value:function(){return new mr(fn,yr)}},{key:"makePost",value:function(e,t){return U("string"==typeof e,"KeyIndex indexValue must always be a string."),new mr(e,yr)}},{key:"toString",value:function(){return".key"}}],[{key:"__EMPTY_NODE",get:function(){return yr},set:function(e){yr=e}}]),r}(gr),_r=new kr,wr=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;e(E)(this,t),this.isReverse_=a,this.resultGenerator_=o,this.nodeStack_=[];for(var s=1;!n.isEmpty();)if(s=r?i(n.key,r):1,a&&(s*=-1),s<0)n=this.isReverse_?n.left:n.right;else{if(0===s){this.nodeStack_.push(n);break}this.nodeStack_.push(n),n=this.isReverse_?n.right:n.left}}return e(C)(t,[{key:"getNext",value:function(){if(0===this.nodeStack_.length)return null;var e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}},{key:"hasNext",value:function(){return this.nodeStack_.length>0}},{key:"peek",value:function(){if(0===this.nodeStack_.length)return null;var e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}]),t}(),br=function(){"use strict";function t(n,r,i,a,o){e(E)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:xr.EMPTY_NODE,this.right=null!=o?o:xr.EMPTY_NODE}return e(C)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"count",value:function(){return this.left.count()+1+this.right.count()}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min_",value:function(){return this.left.isEmpty()?this:this.left.min_()}},{key:"minKey",value:function(){return this.min_().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp_()}},{key:"removeMin_",value:function(){if(this.left.isEmpty())return xr.EMPTY_NODE;var e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),(e=e.copy(null,null,null,e.left.removeMin_(),null)).fixUp_()}},{key:"remove",value:function(e,t){var n,r;if(t(e,(n=this).key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return xr.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}},{key:"isRed_",value:function(){return this.color}},{key:"fixUp_",value:function(){var e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}},{key:"moveRedLeft_",value:function(){var e=this.colorFlip_();return e.right.left.isRed_()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight_())).rotateLeft_()).colorFlip_()),e}},{key:"moveRedRight_",value:function(){var e=this.colorFlip_();return e.left.left.isRed_()&&(e=(e=e.rotateRight_()).colorFlip_()),e}},{key:"rotateLeft_",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight_",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip_",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth_",value:function(){var e=this.check_();return Math.pow(2,e)<=this.count()+1}},{key:"check_",value:function(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");var e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}]),t}();
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
 */br.RED=!0,br.BLACK=!1;var Ir,Tr=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new br(e,t,null)}},{key:"remove",value:function(e,t){return this}},{key:"count",value:function(){return 0}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"check_",value:function(){return 0}},{key:"isRed_",value:function(){return!1}}]),t}(),xr=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.EMPTY_NODE;e(E)(this,t),this.comparator_=n,this.root_=r}return e(C)(t,[{key:"insert",value:function(e,n){return new t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,br.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,br.BLACK,null,null))}},{key:"get",value:function(e){for(var t,n=this.root_;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key)))return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}},{key:"getPredecessorKey",value:function(e){for(var t,n=this.root_,r=null;!n.isEmpty();){if(0===(t=this.comparator_(e,n.key))){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}},{key:"isEmpty",value:function(){return this.root_.isEmpty()}},{key:"count",value:function(){return this.root_.count()}},{key:"minKey",value:function(){return this.root_.minKey()}},{key:"maxKey",value:function(){return this.root_.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root_.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.root_.reverseTraversal(e)}},{key:"getIterator",value:function(e){return new wr(this.root_,null,this.comparator_,!1,e)}},{key:"getIteratorFrom",value:function(e,t){return new wr(this.root_,e,this.comparator_,!1,t)}},{key:"getReverseIteratorFrom",value:function(e,t){return new wr(this.root_,e,this.comparator_,!0,t)}},{key:"getReverseIterator",value:function(e){return new wr(this.root_,null,this.comparator_,!0,e)}}]),t}();
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
function Er(e,t){return dn(e.name,t.name)}function Cr(e,t){return dn(e,t)}
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
 */xr.EMPTY_NODE=new Tr;var Sr,Nr,Ar,Rr=function(e){return"number"==typeof e?"number:"+kn(e):"string:"+e},Dr=function(e){if(e.isLeafNode()){var t=e.val();U("string"==typeof t||"number"==typeof t||"object"==typeof t&&he(t,".sv"),"Priority must be a string or number.")}else U(e===Ir||e.isEmpty(),"priority of unexpected type.");U(e===Ir||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")},Pr=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.__childrenNodeConstructor.EMPTY_NODE;e(E)(this,t),this.value_=n,this.priorityNode_=r,this.lazyHash_=null,U(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Dr(this.priorityNode_)}return e(C)(t,[{key:"isLeafNode",value:function(){return!0}},{key:"getPriority",value:function(){return this.priorityNode_}},{key:"updatePriority",value:function(e){return new t(this.value_,e)}},{key:"getImmediateChild",value:function(e){return".priority"===e?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"getChild",value:function(e){return or(e)?this:".priority"===Zn(e)?this.priorityNode_:t.__childrenNodeConstructor.EMPTY_NODE}},{key:"hasChild",value:function(){return!1}},{key:"getPredecessorChildName",value:function(e,t){return null}},{key:"updateImmediateChild",value:function(e,n){return".priority"===e?this.updatePriority(n):n.isEmpty()&&".priority"!==e?this:t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}},{key:"updateChild",value:function(e,n){var r=Zn(e);return null===r?n:n.isEmpty()&&".priority"!==r?this:(U(".priority"!==r||1===er(e),".priority must be the last token in a path"),this.updateImmediateChild(r,t.__childrenNodeConstructor.EMPTY_NODE.updateChild(tr(e),n)))}},{key:"isEmpty",value:function(){return!1}},{key:"numChildren",value:function(){return 0}},{key:"forEachChild",value:function(e,t){return!1}},{key:"val",value:function(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}},{key:"hash",value:function(){if(null===this.lazyHash_){var t="";this.priorityNode_.isEmpty()||(t+="priority:"+Rr(this.priorityNode_.val())+":");var n=e(R)(this.value_);t+=n+":",t+="number"===n?kn(this.value_):this.value_,this.lazyHash_=Zt(t)}return this.lazyHash_}},{key:"getValue",value:function(){return this.value_}},{key:"compareTo",value:function(e){return e===t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof t.__childrenNodeConstructor?-1:(U(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}},{key:"compareToLeafNode_",value:function(n){var r=e(R)(n.value_),i=e(R)(this.value_),a=t.VALUE_TYPE_ORDER.indexOf(r),o=t.VALUE_TYPE_ORDER.indexOf(i);return U(a>=0,"Unknown leaf type: "+r),U(o>=0,"Unknown leaf type: "+i),a===o?"object"===i?0:this.value_<n.value_?-1:this.value_===n.value_?0:1:o-a}},{key:"withIndex",value:function(){return this}},{key:"isIndexed",value:function(){return!0}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode()){var t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}],[{key:"__childrenNodeConstructor",get:function(){return Sr},set:function(e){Sr=e}}]),t}();Pr.VALUE_TYPE_ORDER=["object","boolean","number","string"];var Or,Lr,Mr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(C)(r,[{key:"compare",value:function(e,t){var n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?dn(e.name,t.name):i}},{key:"isDefinedOn",value:function(e){return!e.getPriority().isEmpty()}},{key:"indexedValueChanged",value:function(e,t){return!e.getPriority().equals(t.getPriority())}},{key:"minPost",value:function(){return mr.MIN}},{key:"maxPost",value:function(){return new mr(fn,new Pr("[PRIORITY-POST]",Ar))}},{key:"makePost",value:function(e,t){var n=Nr(e);return new mr(t,new Pr("[PRIORITY-POST]",n))}},{key:"toString",value:function(){return".priority"}}]),r}(gr),Fr=new Mr,Ur=Math.log(2),Vr=function(){"use strict";function t(n){e(E)(this,t);var r;this.count=(r=n+1,parseInt(Math.log(r)/Ur,10)),this.current_=this.count-1;var i,a=(i=this.count,parseInt(Array(i+1).join("1"),2));this.bits_=n+1&a}return e(C)(t,[{key:"nextBitIsOne",value:function(){var e=!(this.bits_&1<<this.current_);return this.current_--,e}}]),t}(),jr=function(e,t,n,r){e.sort(t);var i=function(t,r){var a,o,s=r-t;if(0===s)return null;if(1===s)return a=e[t],o=n?n(a):a,new br(o,a.node,br.BLACK,null,null);var u=parseInt(s/2,10)+t,c=i(t,u),l=i(u+1,r);return a=e[u],o=n?n(a):a,new br(o,a.node,br.BLACK,c,l)},a=function(t){for(var r=null,a=null,o=e.length,s=function(t,r){var a=o-t,s=o;o-=t;var c=i(a+1,s),l=e[a],h=n?n(l):l;u(new br(h,l.node,r,null,c))},u=function(e){r?(r.left=e,r=e):(a=e,r=e)},c=0;c<t.count;++c){var l=t.nextBitIsOne(),h=Math.pow(2,t.count-(c+1));l?s(h,br.BLACK):(s(h,br.BLACK),s(h,br.RED))}return a}(new Vr(e.length));return new xr(r||t,a)},qr={},Br=function(){"use strict";function t(n,r){e(E)(this,t),this.indexes_=n,this.indexSet_=r}return e(C)(t,[{key:"get",value:function(e){var t=fe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof xr?t:null}},{key:"hasIndex",value:function(e){return he(this.indexSet_,e.toString())}},{key:"addIndex",value:function(e,n){U(e!==_r,"KeyIndex always exists and isn't meant to be added to the IndexMap.");for(var r,i=[],a=!1,o=n.getIterator(mr.Wrap),s=o.getNext();s;)a=a||e.isDefinedOn(s.node),i.push(s),s=o.getNext();r=a?jr(i,e.getCompare()):qr;var u=e.toString(),c=Object.assign({},this.indexSet_);c[u]=e;var l=Object.assign({},this.indexes_);return l[u]=r,new t(l,c)}},{key:"addToIndexes",value:function(e,n){var r=this;return new t(ve(this.indexes_,(function(t,i){var a=fe(r.indexSet_,i);if(U(a,"Missing index implementation for "+i),t===qr){if(a.isDefinedOn(e.node)){for(var o=[],s=n.getIterator(mr.Wrap),u=s.getNext();u;)u.name!==e.name&&o.push(u),u=s.getNext();return o.push(e),jr(o,a.getCompare())}return qr}var c=n.get(e.name),l=t;return c&&(l=l.remove(new mr(e.name,c))),l.insert(e,e.node)})),this.indexSet_)}},{key:"removeFromIndexes",value:function(e,n){return new t(ve(this.indexes_,(function(t){if(t===qr)return t;var r=n.get(e.name);return r?t.remove(new mr(e.name,r)):t})),this.indexSet_)}}],[{key:"Default",get:function(){return U(qr&&Fr,"ChildrenNode.ts has not been loaded"),Or=Or||new t({".priority":qr},{".priority":Fr})}}]),t}(),Hr=function(){"use strict";function t(n,r,i){e(E)(this,t),this.children_=n,this.priorityNode_=r,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Dr(this.priorityNode_),this.children_.isEmpty()&&U(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}return e(C)(t,[{key:"isLeafNode",value:function(){return!1}},{key:"getPriority",value:function(){return this.priorityNode_||Lr}},{key:"updatePriority",value:function(e){return this.children_.isEmpty()?this:new t(this.children_,e,this.indexMap_)}},{key:"getImmediateChild",value:function(e){if(".priority"===e)return this.getPriority();var t=this.children_.get(e);return null===t?Lr:t}},{key:"getChild",value:function(e){var t=Zn(e);return null===t?this:this.getImmediateChild(t).getChild(tr(e))}},{key:"hasChild",value:function(e){return null!==this.children_.get(e)}},{key:"updateImmediateChild",value:function(e,n){if(U(n,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(n);var r,i,a=new mr(e,n);n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(a,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(a,this.children_));var o=r.isEmpty()?Lr:this.priorityNode_;return new t(r,o,i)}},{key:"updateChild",value:function(e,t){var n=Zn(e);if(null===n)return t;U(".priority"!==Zn(e)||1===er(e),".priority must be the last token in a path");var r=this.getImmediateChild(n).updateChild(tr(e),t);return this.updateImmediateChild(n,r)}},{key:"isEmpty",value:function(){return this.children_.isEmpty()}},{key:"numChildren",value:function(){return this.children_.count()}},{key:"val",value:function(e){if(this.isEmpty())return null;var n={},r=0,i=0,a=!0;if(this.forEachChild(Fr,(function(o,s){n[o]=s.val(e),r++,a&&t.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):a=!1})),!e&&a&&i<2*r){var o=[];for(var s in n)o[s]=n[s];return o}return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}},{key:"hash",value:function(){if(null===this.lazyHash_){var e="";this.getPriority().isEmpty()||(e+="priority:"+Rr(this.getPriority().val())+":"),this.forEachChild(Fr,(function(t,n){var r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Zt(e)}return this.lazyHash_}},{key:"getPredecessorChildName",value:function(e,t,n){var r=this.resolveIndex_(n);if(r){var i=r.getPredecessorKey(new mr(e,t));return i?i.name:null}return this.children_.getPredecessorKey(e)}},{key:"getFirstChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.minKey();return n&&n.name}return this.children_.minKey()}},{key:"getFirstChild",value:function(e){var t=this.getFirstChildName(e);return t?new mr(t,this.children_.get(t)):null}},{key:"getLastChildName",value:function(e){var t=this.resolveIndex_(e);if(t){var n=t.maxKey();return n&&n.name}return this.children_.maxKey()}},{key:"getLastChild",value:function(e){var t=this.getLastChildName(e);return t?new mr(t,this.children_.get(t)):null}},{key:"forEachChild",value:function(e,t){var n=this.resolveIndex_(e);return n?n.inorderTraversal((function(e){return t(e.name,e.node)})):this.children_.inorderTraversal(t)}},{key:"getIterator",value:function(e){return this.getIteratorFrom(e.minPost(),e)}},{key:"getIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getIteratorFrom(e.name,mr.Wrap),i=r.peek();null!=i&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}},{key:"getReverseIterator",value:function(e){return this.getReverseIteratorFrom(e.maxPost(),e)}},{key:"getReverseIteratorFrom",value:function(e,t){var n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(function(e){return e}));for(var r=this.children_.getReverseIteratorFrom(e.name,mr.Wrap),i=r.peek();null!=i&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}},{key:"compareTo",value:function(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wr?-1:0}},{key:"withIndex",value:function(e){if(e===_r||this.indexMap_.hasIndex(e))return this;var n=this.indexMap_.addIndex(e,this.children_);return new t(this.children_,this.priorityNode_,n)}},{key:"isIndexed",value:function(e){return e===_r||this.indexMap_.hasIndex(e)}},{key:"equals",value:function(e){if(e===this)return!0;if(e.isLeafNode())return!1;var t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){for(var n=this.getIterator(Fr),r=t.getIterator(Fr),i=n.getNext(),a=r.getNext();i&&a;){if(i.name!==a.name||!i.node.equals(a.node))return!1;i=n.getNext(),a=r.getNext()}return null===i&&null===a}return!1}return!1}},{key:"resolveIndex_",value:function(e){return e===_r?null:this.indexMap_.get(e.toString())}}],[{key:"EMPTY_NODE",get:function(){return Lr||(Lr=new t(new xr(Cr),null,Br.Default))}}]),t}();Hr.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;var Wr=new(function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.call(this,new xr(Cr),Hr.EMPTY_NODE,Br.Default)}return e(C)(r,[{key:"compareTo",value:function(e){return e===this?0:1}},{key:"equals",value:function(e){return e===this}},{key:"getPriority",value:function(){return this}},{key:"getImmediateChild",value:function(e){return Hr.EMPTY_NODE}},{key:"isEmpty",value:function(){return!1}}]),r}(Hr));Object.defineProperties(mr,{MIN:{value:new mr(hn,Hr.EMPTY_NODE)},MAX:{value:new mr(fn,Wr)}}),kr.__EMPTY_NODE=Hr.EMPTY_NODE,Pr.__childrenNodeConstructor=Hr,Ir=Wr,function(e){Ar=e}(Wr);function zr(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(null===t)return Hr.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(n=t[".priority"]),U(null===n||"string"==typeof n||"number"==typeof n||"object"==typeof n&&".sv"in n,"Invalid priority type found: "+(void 0===n?"undefined":e(R)(n))),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){var r=t;return new Pr(r,zr(n))}if(t instanceof Array){var i=Hr.EMPTY_NODE;return gn(t,(function(e,n){if(he(t,e)&&"."!==e.substring(0,1)){var r=zr(n);!r.isLeafNode()&&r.isEmpty()||(i=i.updateImmediateChild(e,r))}})),i.updatePriority(zr(n))}var a=[],o=!1,s=t;if(gn(s,(function(e,t){if("."!==e.substring(0,1)){var n=zr(t);n.isEmpty()||(o=o||!n.getPriority().isEmpty(),a.push(new mr(e,n)))}})),0===a.length)return Hr.EMPTY_NODE;var u=jr(a,Er,(function(e){return e.name}),Cr);if(o){var c=jr(a,Fr.getCompare());return new Hr(u,zr(n),new Br({".priority":c},{".priority":Fr}))}return new Hr(u,zr(n),Br.Default)}!function(e){Nr=e}(zr);
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
var Kr,Gr,Qr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).indexPath_=t,U(!or(t)&&".priority"!==Zn(t),"Can't create PathIndex with empty path or .priority key"),i}return e(C)(r,[{key:"extractChild",value:function(e){return e.getChild(this.indexPath_)}},{key:"isDefinedOn",value:function(e){return!e.getChild(this.indexPath_).isEmpty()}},{key:"compare",value:function(e,t){var n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?dn(e.name,t.name):i}},{key:"makePost",value:function(e,t){var n=zr(e),r=Hr.EMPTY_NODE.updateChild(this.indexPath_,n);return new mr(t,r)}},{key:"maxPost",value:function(){var e=Hr.EMPTY_NODE.updateChild(this.indexPath_,Wr);return new mr(fn,e)}},{key:"toString",value:function(){return rr(this.indexPath_,0).join("/")}}]),r}(gr),Yr=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(C)(r,[{key:"compare",value:function(e,t){var n=e.node.compareTo(t.node);return 0===n?dn(e.name,t.name):n}},{key:"isDefinedOn",value:function(e){return!0}},{key:"indexedValueChanged",value:function(e,t){return!e.equals(t)}},{key:"minPost",value:function(){return mr.MIN}},{key:"maxPost",value:function(){return mr.MAX}},{key:"makePost",value:function(e,t){var n=zr(e);return new mr(t,n)}},{key:"toString",value:function(){return".value"}}]),r}(gr),Xr=new Yr,Jr="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */Kr=0,Gr=[];
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
function $r(e){return{type:"value",snapshotNode:e}}function Zr(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ei(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ti(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
var ni=function(){"use strict";function t(){e(E)(this,t),this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Fr}return e(C)(t,[{key:"hasStart",value:function(){return this.startSet_}},{key:"hasStartAfter",value:function(){return this.startAfterSet_}},{key:"hasEndBefore",value:function(){return this.endBeforeSet_}},{key:"isViewFromLeft",value:function(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}},{key:"getIndexStartValue",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}},{key:"getIndexStartName",value:function(){return U(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:hn}},{key:"hasEnd",value:function(){return this.endSet_}},{key:"getIndexEndValue",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}},{key:"getIndexEndName",value:function(){return U(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fn}},{key:"hasLimit",value:function(){return this.limitSet_}},{key:"hasAnchoredLimit",value:function(){return this.limitSet_&&""!==this.viewFrom_}},{key:"getLimit",value:function(){return U(this.limitSet_,"Only valid if limit has been set"),this.limit_}},{key:"getIndex",value:function(){return this.index_}},{key:"loadsAllData",value:function(){return!(this.startSet_||this.endSet_||this.limitSet_)}},{key:"isDefault",value:function(){return this.loadsAllData()&&this.index_===Fr}},{key:"copy",value:function(){var e=new t;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}]),t}();
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
 */function ri(e){var t,n={};return e.isDefault()||(e.index_===Fr?t="$priority":e.index_===Xr?t="$value":e.index_===_r?t="$key":(U(e.index_ instanceof Qr,"Unrecognized index type!"),t=e.index_.toString()),n.orderBy=ue(t),e.startSet_&&(n.startAt=ue(e.indexStartValue_),e.startNameSet_&&(n.startAt+=","+ue(e.indexStartName_))),e.endSet_&&(n.endAt=ue(e.indexEndValue_),e.endNameSet_&&(n.endAt+=","+ue(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?n.limitToFirst=e.limit_:n.limitToLast=e.limit_)),n}function ii(e){var t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;var n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Fr&&(t.i=e.index_.toString()),t}
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
 */var ai=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o){var s;return e(E)(this,r),(s=n.call(this)).repoInfo_=t,s.onDataUpdate_=i,s.authTokenProvider_=a,s.appCheckTokenProvider_=o,s.log_=on("p:rest:"),s.listens_={},s}return e(C)(r,[{key:"reportStats",value:function(e){throw new Error("Method not implemented.")}},{key:"listen",value:function(e,t,n,i){var a=this,o=e._path.toString();this.log_("Listen called for "+o+" "+e._queryIdentifier);var s=r.getListenId_(e,n),u={};this.listens_[s]=u;var c=ri(e._queryParams);this.restRequest_(o+".json",c,(function(e,t){var r=t;(404===e&&(r=null,e=null),null===e&&a.onDataUpdate_(o,r,!1,n),fe(a.listens_,s)===u)&&i(e?401===e?"permission_denied":"rest_error:"+e:"ok",null)}))}},{key:"unlisten",value:function(e,t){var n=r.getListenId_(e,t);delete this.listens_[n]}},{key:"get",value:function(e){var t=this,n=ri(e._queryParams),r=e._path.toString(),i=new G;return this.restRequest_(r+".json",n,(function(e,n){var a=n;404===e&&(a=null,e=null),null===e?(t.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))})),i.promise}},{key:"refreshAuthToken",value:function(e){}},{key:"restRequest_",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2?arguments[2]:void 0,i=this;return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((function(a){var o=e(N)(a,2),s=o[0],u=o[1],c=i;s&&s.accessToken&&(n.auth=s.accessToken),u&&u.token&&(n.ac=u.token);var l=(i.repoInfo_.secure?"https://":"http://")+i.repoInfo_.host+t+"?ns="+i.repoInfo_.namespace+me(n);i.log_("Sending REST request for "+l);var h=new XMLHttpRequest;h.onreadystatechange=function(){if(r&&4===h.readyState){c.log_("REST Response for "+l+" received. status:",h.status,"response:",h.responseText);var e=null;if(h.status>=200&&h.status<300){try{e=se(h.responseText)}catch(e){cn("Failed to parse JSON response for "+l+": "+h.responseText)}r(null,e)}else 401!==h.status&&404!==h.status&&cn("Got unsuccessful REST response for "+l+" Status: "+h.status),r(h.status);r=null}},h.open("GET",l,!0),h.send()}))}}],[{key:"getListenId_",value:function(e,t){return void 0!==t?"tag$"+t:(U(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}}]),r}(Qn),oi=function(){"use strict";function t(){e(E)(this,t),this.rootNode_=Hr.EMPTY_NODE}return e(C)(t,[{key:"getNode",value:function(e){return this.rootNode_.getChild(e)}},{key:"updateSnapshot",value:function(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}]),t}();
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
function si(){return{value:null,children:new Map}}function ui(e,t,n){if(or(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{var r=Zn(t);e.children.has(r)||e.children.set(r,si()),ui(e.children.get(r),t=tr(t),n)}}function ci(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach((function(e,n){t(n,e)}))}
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
 */(e,(function(e,r){ci(r,new Jn(t.toString()+"/"+e),n)}))}var li,hi,fi=function(){"use strict";function t(n){e(E)(this,t),this.collection_=n,this.last_=null}return e(C)(t,[{key:"get",value:function(){var e=this.collection_.get(),t=Object.assign({},e);return this.last_&&gn(this.last_,(function(e,n){t[e]=t[e]-n})),this.last_=e,t}}]),t}(),di=function(){"use strict";function t(n,r){e(E)(this,t),this.server_=r,this.statsToReport_={},this.statsListener_=new fi(n);var i=1e4+2e4*Math.random();xn(this.reportStats_.bind(this),Math.floor(i))}return e(C)(t,[{key:"reportStats_",value:function(){var e=this,t=this.statsListener_.get(),n={},r=!1;gn(t,(function(t,i){i>0&&he(e.statsToReport_,t)&&(n[t]=i,r=!0)})),r&&this.server_.reportStats(n),xn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}]),t}();
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
 */function vi(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(hi=li||(li={}))[hi.OVERWRITE=0]="OVERWRITE",hi[hi.MERGE=1]="MERGE",hi[hi.ACK_USER_WRITE=2]="ACK_USER_WRITE",hi[hi.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";var pi,yi=function(){"use strict";function t(n,r,i){e(E)(this,t),this.path=n,this.affectedTree=r,this.revert=i,this.type=li.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}return e(C)(t,[{key:"operationForChild",value:function(e){if(or(this.path)){if(null!=this.affectedTree.value)return U(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;var n=this.affectedTree.subtree(new Jn(e));return new t($n(),n,this.revert)}return U(Zn(this.path)===e,"operationForChild called for unrelated child."),new t(tr(this.path),this.affectedTree,this.revert)}}]),t}(),mi=function(){"use strict";function t(n,r,i){e(E)(this,t),this.source=n,this.path=r,this.snap=i,this.type=li.OVERWRITE}return e(C)(t,[{key:"operationForChild",value:function(e){return or(this.path)?new t(this.source,$n(),this.snap.getImmediateChild(e)):new t(this.source,tr(this.path),this.snap)}}]),t}(),gi=function(){"use strict";function t(n,r,i){e(E)(this,t),this.source=n,this.path=r,this.children=i,this.type=li.MERGE}return e(C)(t,[{key:"operationForChild",value:function(e){if(or(this.path)){var n=this.children.subtree(new Jn(e));return n.isEmpty()?null:n.value?new mi(this.source,$n(),n.value):new t(this.source,$n(),n)}return U(Zn(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new t(this.source,tr(this.path),this.children)}},{key:"toString",value:function(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}]),t}(),ki=function(){"use strict";function t(n,r,i){e(E)(this,t),this.node_=n,this.fullyInitialized_=r,this.filtered_=i}return e(C)(t,[{key:"isFullyInitialized",value:function(){return this.fullyInitialized_}},{key:"isFiltered",value:function(){return this.filtered_}},{key:"isCompleteForPath",value:function(e){if(or(e))return this.isFullyInitialized()&&!this.filtered_;var t=Zn(e);return this.isCompleteForChild(t)}},{key:"isCompleteForChild",value:function(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}},{key:"getNode",value:function(){return this.node_}}]),t}();
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
 */function _i(e,t,n,r,i,a){var o=r.filter((function(e){return e.type===n}));o.sort((function(t,n){return function(e,t,n){if(null==t.childName||null==n.childName)throw V("Should only compare child_ events.");var r=new mr(t.childName,t.snapshotNode),i=new mr(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n)})),o.forEach((function(n){var r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,a);i.forEach((function(i){i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wi(e,t){return{eventCache:e,serverCache:t}}function bi(e,t,n,r){return wi(new ki(t,n,r),e.serverCache)}function Ii(e,t,n,r){return wi(e.eventCache,new ki(t,n,r))}function Ti(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function xi(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */var Ei=function(){return pi||(pi=new xr(vn)),pi},Ci=function(){"use strict";function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Ei();e(E)(this,t),this.value=n,this.children=r}return e(C)(t,[{key:"isEmpty",value:function(){return null===this.value&&this.children.isEmpty()}},{key:"findRootMostMatchingPathAndValue",value:function(e,t){if(null!=this.value&&t(this.value))return{path:$n(),value:this.value};if(or(e))return null;var n=Zn(e),r=this.children.get(n);if(null!==r){var i=r.findRootMostMatchingPathAndValue(tr(e),t);return null!=i?{path:ar(new Jn(n),i.path),value:i.value}:null}return null}},{key:"findRootMostValueAndPath",value:function(e){return this.findRootMostMatchingPathAndValue(e,(function(){return!0}))}},{key:"subtree",value:function(e){if(or(e))return this;var n=Zn(e),r=this.children.get(n);return null!==r?r.subtree(tr(e)):new t(null)}},{key:"set",value:function(e,n){if(or(e))return new t(n,this.children);var r=Zn(e),i=(this.children.get(r)||new t(null)).set(tr(e),n),a=this.children.insert(r,i);return new t(this.value,a)}},{key:"remove",value:function(e){if(or(e))return this.children.isEmpty()?new t(null):new t(null,this.children);var n=Zn(e),r=this.children.get(n);if(r){var i,a=r.remove(tr(e));return i=a.isEmpty()?this.children.remove(n):this.children.insert(n,a),null===this.value&&i.isEmpty()?new t(null):new t(this.value,i)}return this}},{key:"get",value:function(e){if(or(e))return this.value;var t=Zn(e),n=this.children.get(t);return n?n.get(tr(e)):null}},{key:"setTree",value:function(e,n){if(or(e))return n;var r,i=Zn(e),a=(this.children.get(i)||new t(null)).setTree(tr(e),n);return r=a.isEmpty()?this.children.remove(i):this.children.insert(i,a),new t(this.value,r)}},{key:"fold",value:function(e){return this.fold_($n(),e)}},{key:"fold_",value:function(e,t){var n={};return this.children.inorderTraversal((function(r,i){n[r]=i.fold_(ar(e,r),t)})),t(e,this.value,n)}},{key:"findOnPath",value:function(e,t){return this.findOnPath_(e,$n(),t)}},{key:"findOnPath_",value:function(e,t,n){var r=!!this.value&&n(t,this.value);if(r)return r;if(or(e))return null;var i=Zn(e),a=this.children.get(i);return a?a.findOnPath_(tr(e),ar(t,i),n):null}},{key:"foreachOnPath",value:function(e,t){return this.foreachOnPath_(e,$n(),t)}},{key:"foreachOnPath_",value:function(e,n,r){if(or(e))return this;this.value&&r(n,this.value);var i=Zn(e),a=this.children.get(i);return a?a.foreachOnPath_(tr(e),ar(n,i),r):new t(null)}},{key:"foreach",value:function(e){this.foreach_($n(),e)}},{key:"foreach_",value:function(e,t){this.children.inorderTraversal((function(n,r){r.foreach_(ar(e,n),t)})),this.value&&t(e,this.value)}},{key:"foreachChild",value:function(e){this.children.inorderTraversal((function(t,n){n.value&&e(t,n.value)}))}}],[{key:"fromObject",value:function(e){var n=new t(null);return gn(e,(function(e,t){n=n.set(new Jn(e),t)})),n}}]),t}(),Si=function(){"use strict";function t(n){e(E)(this,t),this.writeTree_=n}return e(C)(t,null,[{key:"empty",value:function(){return new t(new Ci(null))}}]),t}();function Ni(e,t,n){if(or(t))return new Si(new Ci(n));var r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){var i=r.path,a=r.value,o=sr(i,t);return a=a.updateChild(o,n),new Si(e.writeTree_.set(i,a))}var s=new Ci(n),u=e.writeTree_.setTree(t,s);return new Si(u)}function Ai(e,t,n){var r=e;return gn(n,(function(e,n){r=Ni(r,ar(t,e),n)})),r}function Ri(e,t){if(or(t))return Si.empty();var n=e.writeTree_.setTree(t,new Ci(null));return new Si(n)}function Di(e,t){return null!=Pi(e,t)}function Pi(e,t){var n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(sr(n.path,t)):null}function Oi(e){var t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Fr,(function(e,n){t.push(new mr(e,n))})):e.writeTree_.children.inorderTraversal((function(e,n){null!=n.value&&t.push(new mr(e,n.value))})),t}function Li(e,t){if(or(t))return e;var n=Pi(e,t);return new Si(null!=n?new Ci(n):e.writeTree_.subtree(t))}function Mi(e){return e.writeTree_.isEmpty()}function Fi(e,t){return Ui($n(),e.writeTree_,t)}function Ui(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);var r=null;return t.children.inorderTraversal((function(t,i){".priority"===t?(U(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Ui(ar(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ar(e,".priority"),r)),n}
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
 */function Vi(e,t){return Zi(t,e)}function ji(e,t){for(var n=0;n<e.allWrites.length;n++){var r=e.allWrites[n];if(r.writeId===t)return r}return null}function qi(e,t){var n=e.allWrites.findIndex((function(e){return e.writeId===t}));U(n>=0,"removeWrite called with nonexistent writeId.");var r=e.allWrites[n];e.allWrites.splice(n,1);for(var i=r.visible,a=!1,o=e.allWrites.length-1;i&&o>=0;){var s=e.allWrites[o];s.visible&&(o>=n&&Bi(s,r.path)?i=!1:cr(r.path,s.path)&&(a=!0)),o--}if(i){if(a)return function(e){e.visibleWrites=Wi(e.allWrites,Hi,$n()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;r.snap?e.visibleWrites=Ri(e.visibleWrites,r.path):gn(r.children,(function(t){e.visibleWrites=Ri(e.visibleWrites,ar(r.path,t))}));return!0}return!1}function Bi(e,t){if(e.snap)return cr(e.path,t);for(var n in e.children)if(e.children.hasOwnProperty(n)&&cr(ar(e.path,n),t))return!0;return!1}function Hi(e){return e.visible}function Wi(e,t,n){for(var r=Si.empty(),i=0;i<e.length;++i){var a=e[i];if(t(a)){var o=a.path,s=void 0;if(a.snap)cr(n,o)?r=Ni(r,s=sr(n,o),a.snap):cr(o,n)&&(s=sr(o,n),r=Ni(r,$n(),a.snap.getChild(s)));else{if(!a.children)throw V("WriteRecord should have .snap or .children");if(cr(n,o))r=Ai(r,s=sr(n,o),a.children);else if(cr(o,n))if(or(s=sr(o,n)))r=Ai(r,$n(),a.children);else{var u=fe(a.children,Zn(s));if(u){var c=u.getChild(tr(s));r=Ni(r,$n(),c)}}}}}return r}function zi(e,t,n,r,i){if(r||i){var a=Li(e.visibleWrites,t);if(!i&&Mi(a))return n;if(i||null!=n||Di(a,$n())){return Fi(Wi(e.allWrites,(function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(cr(e.path,t)||cr(t,e.path))}),t),n||Hr.EMPTY_NODE)}return null}var o=Pi(e.visibleWrites,t);if(null!=o)return o;var s=Li(e.visibleWrites,t);return Mi(s)?n:null!=n||Di(s,$n())?Fi(s,n||Hr.EMPTY_NODE):null}function Ki(e,t,n,r){return zi(e.writeTree,e.treePath,t,n,r)}function Gi(e,t){return function(e,t,n){var r=Hr.EMPTY_NODE,i=Pi(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Fr,(function(e,t){r=r.updateImmediateChild(e,t)})),r;if(n){var a=Li(e.visibleWrites,t);return n.forEachChild(Fr,(function(e,t){var n=Fi(Li(a,new Jn(e)),t);r=r.updateImmediateChild(e,n)})),Oi(a).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}return Oi(Li(e.visibleWrites,t)).forEach((function(e){r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Qi(e,t,n,r){return function(e,t,n,r,i){U(r||i,"Either existingEventSnap or existingServerSnap must exist");var a=ar(t,n);if(Di(e.visibleWrites,a))return null;var o=Li(e.visibleWrites,a);return Mi(o)?i.getChild(n):Fi(o,i.getChild(n))}(e.writeTree,e.treePath,t,n,r)}function Yi(e,t){return function(e,t){return Pi(e.visibleWrites,t)}(e.writeTree,ar(e.treePath,t))}function Xi(e,t,n,r,i,a){return function(e,t,n,r,i,a,o){var s,u=Li(e.visibleWrites,t),c=Pi(u,$n());if(null!=c)s=c;else{if(null==n)return[];s=Fi(u,n)}if((s=s.withIndex(o)).isEmpty()||s.isLeafNode())return[];for(var l=[],h=o.getCompare(),f=a?s.getReverseIteratorFrom(r,o):s.getIteratorFrom(r,o),d=f.getNext();d&&l.length<i;)0!==h(d,r)&&l.push(d),d=f.getNext();return l}(e.writeTree,e.treePath,t,n,r,i,a)}function Ji(e,t,n){return function(e,t,n,r){var i=ar(t,n),a=Pi(e.visibleWrites,i);return null!=a?a:r.isCompleteForChild(n)?Fi(Li(e.visibleWrites,i),r.getNode().getImmediateChild(n)):null}(e.writeTree,e.treePath,t,n)}function $i(e,t){return Zi(ar(e.treePath,t),e.writeTree)}function Zi(e,t){return{treePath:e,writeTree:t}}
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
 */var ea=function(){"use strict";function t(){e(E)(this,t),this.changeMap=new Map}return e(C)(t,[{key:"trackChildChange",value:function(e){var t=e.type,n=e.childName;U("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),U(".priority"!==n,"Only non-priority child changes can be tracked.");var r=this.changeMap.get(n);if(r){var i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,ti(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,ei(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Zr(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw V("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,ti(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}},{key:"getChanges",value:function(){return Array.from(this.changeMap.values())}}]),t}(),ta=new(function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"getCompleteChild",value:function(e){return null}},{key:"getChildAfterChild",value:function(e,t,n){return null}}]),t}()),na=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e(E)(this,t),this.writes_=n,this.viewCache_=r,this.optCompleteServerCache_=i}return e(C)(t,[{key:"getCompleteChild",value:function(e){var t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);var n=null!=this.optCompleteServerCache_?new ki(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ji(this.writes_,e,n)}},{key:"getChildAfterChild",value:function(e,t,n){var r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:xi(this.viewCache_),i=Xi(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}]),t}();
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
 */function ra(e,t,n,r,i){var a,o,s=new ea;if(n.type===li.OVERWRITE){var u=n;u.source.fromUser?a=oa(e,t,u.path,u.snap,r,i,s):(U(u.source.fromServer,"Unknown source."),o=u.source.tagged||t.serverCache.isFiltered()&&!or(u.path),a=aa(e,t,u.path,u.snap,r,i,o,s))}else if(n.type===li.MERGE){var c=n;c.source.fromUser?a=function(e,t,n,r,i,a,o){var s=t;return r.foreach((function(r,u){var c=ar(n,r);sa(t,Zn(c))&&(s=oa(e,s,c,u,i,a,o))})),r.foreach((function(r,u){var c=ar(n,r);sa(t,Zn(c))||(s=oa(e,s,c,u,i,a,o))})),s}(e,t,c.path,c.children,r,i,s):(U(c.source.fromServer,"Unknown source."),o=c.source.tagged||t.serverCache.isFiltered(),a=ca(e,t,c.path,c.children,r,i,o,s))}else if(n.type===li.ACK_USER_WRITE){var l=n;a=l.revert?function(e,t,n,r,i,a){var o;if(null!=Yi(r,n))return t;var s,u=new na(r,t,i),c=t.eventCache.getNode();if(or(n)||".priority"===Zn(n)){var l;if(t.serverCache.isFullyInitialized())l=Ki(r,xi(t));else{var h=t.serverCache.getNode();U(h instanceof Hr,"serverChildren would be complete if leaf node"),l=Gi(r,h)}s=e.filter.updateFullNode(c,l,a)}else{var f=Zn(n),d=Ji(r,f,t.serverCache);null==d&&t.serverCache.isCompleteForChild(f)&&(d=c.getImmediateChild(f)),(s=null!=d?e.filter.updateChild(c,f,d,tr(n),u,a):t.eventCache.getNode().hasChild(f)?e.filter.updateChild(c,f,Hr.EMPTY_NODE,tr(n),u,a):c).isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ki(r,xi(t))).isLeafNode()&&(s=e.filter.updateFullNode(s,o,a))}return o=t.serverCache.isFullyInitialized()||null!=Yi(r,$n()),bi(t,s,o,e.filter.filtersNodes())}
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
 */(e,t,l.path,r,i,s):function(e,t,n,r,i,a,o){if(null!=Yi(i,n))return t;var s=t.serverCache.isFiltered(),u=t.serverCache;if(null!=r.value){if(or(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return aa(e,t,n,u.getNode().getChild(n),i,a,s,o);if(or(n)){var c=new Ci(null);return u.getNode().forEachChild(_r,(function(e,t){c=c.set(new Jn(e),t)})),ca(e,t,n,c,i,a,s,o)}return t}var l=new Ci(null);return r.foreach((function(e,t){var r=ar(n,e);u.isCompleteForPath(r)&&(l=l.set(e,u.getNode().getChild(r)))})),ca(e,t,n,l,i,a,s,o)}(e,t,l.path,l.affectedTree,r,i,s)}else{if(n.type!==li.LISTEN_COMPLETE)throw V("Unknown operation type: "+n.type);a=function(e,t,n,r,i){var a=t.serverCache,o=Ii(t,a.getNode(),a.isFullyInitialized()||or(n),a.isFiltered());return ia(e,o,n,r,ta,i)}(e,t,n.path,r,s)}var h=s.getChanges();return function(e,t,n){var r=t.eventCache;if(r.isFullyInitialized()){var i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=Ti(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&n.push($r(Ti(t)))}}(t,a,h),{viewCache:a,changes:h}}function ia(e,t,n,r,i,a){var o,s,u=t.eventCache;if(null!=Yi(r,n))return t;if(or(n))if(U(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){var c=xi(t),l=Gi(r,c instanceof Hr?c:Hr.EMPTY_NODE);o=e.filter.updateFullNode(t.eventCache.getNode(),l,a)}else{var h=Ki(r,xi(t));o=e.filter.updateFullNode(t.eventCache.getNode(),h,a)}else{var f=Zn(n);if(".priority"===f){U(1===er(n),"Can't have a priority with additional path components");var d=u.getNode(),v=Qi(r,n,d,s=t.serverCache.getNode());o=null!=v?e.filter.updatePriority(d,v):u.getNode()}else{var p,y=tr(n);if(u.isCompleteForChild(f)){s=t.serverCache.getNode();var m=Qi(r,n,u.getNode(),s);p=null!=m?u.getNode().getImmediateChild(f).updateChild(y,m):u.getNode().getImmediateChild(f)}else p=Ji(r,f,t.serverCache);o=null!=p?e.filter.updateChild(u.getNode(),f,p,y,i,a):u.getNode()}}return bi(t,o,u.isFullyInitialized()||or(n),e.filter.filtersNodes())}function aa(e,t,n,r,i,a,o,s){var u,c=t.serverCache,l=o?e.filter:e.filter.getIndexedFilter();if(or(n))u=l.updateFullNode(c.getNode(),r,null);else if(l.filtersNodes()&&!c.isFiltered()){var h=c.getNode().updateChild(n,r);u=l.updateFullNode(c.getNode(),h,null)}else{var f=Zn(n);if(!c.isCompleteForPath(n)&&er(n)>1)return t;var d=tr(n),v=c.getNode().getImmediateChild(f).updateChild(d,r);u=".priority"===f?l.updatePriority(c.getNode(),v):l.updateChild(c.getNode(),f,v,d,ta,null)}var p=Ii(t,u,c.isFullyInitialized()||or(n),l.filtersNodes());return ia(e,p,n,i,new na(i,p,a),s)}function oa(e,t,n,r,i,a,o){var s,u,c=t.eventCache,l=new na(i,t,a);if(or(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),s=bi(t,u,!0,e.filter.filtersNodes());else{var h=Zn(n);if(".priority"===h)u=e.filter.updatePriority(t.eventCache.getNode(),r),s=bi(t,u,c.isFullyInitialized(),c.isFiltered());else{var f,d=tr(n),v=c.getNode().getImmediateChild(h);if(or(d))f=r;else{var p=l.getCompleteChild(h);f=null!=p?".priority"===nr(d)&&p.getChild(ir(d)).isEmpty()?p:p.updateChild(d,r):Hr.EMPTY_NODE}if(v.equals(f))s=t;else s=bi(t,e.filter.updateChild(c.getNode(),h,f,d,l,o),c.isFullyInitialized(),e.filter.filtersNodes())}}return s}function sa(e,t){return e.eventCache.isCompleteForChild(t)}function ua(e,t,n){return n.foreach((function(e,n){t=t.updateChild(e,n)})),t}function ca(e,t,n,r,i,a,o,s){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;var u,c=t;u=or(n)?r:new Ci(null).setTree(n,r);var l=t.serverCache.getNode();return u.children.inorderTraversal((function(n,r){if(l.hasChild(n)){var u=ua(0,t.serverCache.getNode().getImmediateChild(n),r);c=aa(e,c,new Jn(n),u,i,a,o,s)}})),u.children.inorderTraversal((function(n,r){var u=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!l.hasChild(n)&&!u){var h=ua(0,t.serverCache.getNode().getImmediateChild(n),r);c=aa(e,c,new Jn(n),h,i,a,o,s)}})),c}var la;function ha(e,t){var n=xi(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!or(t)&&!n.getImmediateChild(Zn(t)).isEmpty())?n.getChild(t):null}function fa(e,t,n,r){t.type===li.MERGE&&null!==t.source.queryId&&(U(xi(e.viewCache_),"We should always have a full cache before handling merges"),U(Ti(e.viewCache_),"Missing event cache, even though we have a server cache"));var i,a,o=e.viewCache_,s=ra(e.processor_,o,t,n,r);return i=e.processor_,a=s.viewCache,U(a.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),U(a.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed"),U(s.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,da(e,s.changes,s.viewCache.eventCache.getNode(),null)}function da(e,t,n,r){var i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){var i=[],a=[];return t.forEach((function(t){var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&a.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),_i(e,i,"child_removed",t,r,n),_i(e,i,"child_added",t,r,n),_i(e,i,"child_moved",a,r,n),_i(e,i,"child_changed",t,r,n),_i(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */var va;function pa(e,t,n,r){var i=t.source.queryId;if(null!==i){var a=e.views.get(i);return U(null!=a,"SyncTree gave us an op for an invalid query."),fa(a,t,n,r)}var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=e.views.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;o=o.concat(fa(f,t,n,r))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return o}function ya(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.views.values()[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n||ha(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}var ma=function t(n){"use strict";e(E)(this,t),this.listenProvider_=n,this.syncPointTree_=new Ci(null),this.pendingWriteTree_={visibleWrites:Si.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map};function ga(e,t,n,r,i){return function(e,t,n,r,i){U(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Ni(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?ba(e,new mi({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function ka(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=ji(e.pendingWriteTree_,t),i=qi(e.pendingWriteTree_,t);if(i){var a=new Ci(null);return null!=r.snap?a=a.set($n(),!0):gn(r.children,(function(e){a=a.set(new Jn(e),!0)})),ba(e,new yi(r.path,a,n))}return[]}function _a(e,t,n){return ba(e,new mi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function wa(e,t,n){var r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,(function(e,n){var r=ya(n,sr(e,t));if(r)return r}));return zi(r,t,i,n,!0)}function ba(e,t){return Ia(t,e.syncPointTree_,null,Vi(e.pendingWriteTree_,$n()))}function Ia(e,t,n,r){if(or(e.path))return Ta(e,t,n,r);var i=t.get($n());null==n&&null!=i&&(n=ya(i,$n()));var a=[],o=Zn(e.path),s=e.operationForChild(o),u=t.children.get(o);if(u&&s){var c=n?n.getImmediateChild(o):null,l=$i(r,o);a=a.concat(Ia(s,u,c,l))}return i&&(a=a.concat(pa(i,e,r,n))),a}function Ta(e,t,n,r){var i=t.get($n());null==n&&null!=i&&(n=ya(i,$n()));var a=[];return t.children.inorderTraversal((function(t,i){var o=n?n.getImmediateChild(t):null,s=$i(r,t),u=e.operationForChild(t);u&&(a=a.concat(Ta(u,i,o,s)))})),i&&(a=a.concat(pa(i,e,r,n))),a}function xa(e,t){return e.tagToQueryMap.get(t)}function Ea(e){var t=e.indexOf("$");return U(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Jn(e.substr(0,t))}}function Ca(e,t,n){var r=e.syncPointTree_.get(t);return U(r,"Missing sync point for query tag that we're tracking"),pa(r,n,Vi(e.pendingWriteTree_,t),null)}
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
var Sa=function(){"use strict";function t(n){e(E)(this,t),this.node_=n}return e(C)(t,[{key:"getImmediateChild",value:function(e){return new t(this.node_.getImmediateChild(e))}},{key:"node",value:function(){return this.node_}}]),t}(),Na=function(){"use strict";function t(n,r){e(E)(this,t),this.syncTree_=n,this.path_=r}return e(C)(t,[{key:"getImmediateChild",value:function(e){var n=ar(this.path_,e);return new t(this.syncTree_,n)}},{key:"node",value:function(){return wa(this.syncTree_,this.path_)}}]),t}(),Aa=function(e,t,n){return e&&"object"==typeof e?(U(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ra(e[".sv"],t,n):"object"==typeof e[".sv"]?Da(e[".sv"],t):void U(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ra=function(e,t,n){if("timestamp"===e)return n.timestamp;U(!1,"Unexpected server value: "+e)},Da=function(e,t,n){e.hasOwnProperty("increment")||U(!1,"Unexpected server value: "+JSON.stringify(e,null,2));var r=e.increment;"number"!=typeof r&&U(!1,"Unexpected increment value: "+r);var i=t.node();if(U(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;var a=i.getValue();return"number"!=typeof a?r:a+r},Pa=function(e,t,n,r){return La(t,new Na(n,e),r)},Oa=function(e,t,n){return La(e,new Sa(t),n)};function La(e,t,n){var r,i=e.getPriority().val(),a=Aa(i,t.getImmediateChild(".priority"),n);if(e.isLeafNode()){var o=e,s=Aa(o.getValue(),t,n);return s!==o.getValue()||a!==o.getPriority().val()?new Pr(s,zr(a)):e}var u=e;return r=u,a!==u.getPriority().val()&&(r=r.updatePriority(new Pr(a))),u.forEachChild(Fr,(function(e,i){var a=La(i,t.getImmediateChild(e),n);a!==i&&(r=r.updateImmediateChild(e,a))})),r}
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
 */var Ma=function t(){"use strict";var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:{},childCount:0};e(E)(this,t),this.name=n,this.parent=r,this.node=i};function Fa(e,t){for(var n=t instanceof Jn?t:new Jn(t),r=e,i=Zn(n);null!==i;){var a=fe(r.node.children,i)||{children:{},childCount:0};r=new Ma(i,r,a),i=Zn(n=tr(n))}return r}function Ua(e){return e.node.value}function Va(e,t){e.node.value=t,Wa(e)}function ja(e){return e.node.childCount>0}function qa(e,t){gn(e.node.children,(function(n,r){t(new Ma(n,e,r))}))}function Ba(e,t,n,r){n&&!r&&t(e),qa(e,(function(e){Ba(e,t,!0,r)})),n&&r&&t(e)}function Ha(e){return new Jn(null===e.parent?e.name:Ha(e.parent)+"/"+e.name)}function Wa(e){null!==e.parent&&function(e,t,n){var r=function(e){return void 0===Ua(e)&&!ja(e)}(n),i=he(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Wa(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,Wa(e))}
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
 */(e.parent,e.name,e)}var za=/[\[\].#$\/\u0000-\u001F\u007F]/,Ka=/[\[\].#$\u0000-\u001F\u007F]/,Ga=10485760,Qa=function(e){return"string"==typeof e&&0!==e.length&&!za.test(e)},Ya=function(e){return"string"==typeof e&&0!==e.length&&!Ka.test(e)},Xa=function(e,t,n){var r=n instanceof Jn?new lr(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+fr(r));if("function"==typeof t)throw new Error(e+"contains a function "+fr(r)+" with contents = "+t.toString());if(ln(t))throw new Error(e+"contains "+t.toString()+" "+fr(r));if("string"==typeof t&&t.length>3495253.3333333335&&xe(t)>Ga)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+fr(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){var i=!1,a=!1;if(gn(t,(function(t,n){if(".value"===t)i=!0;else if(".priority"!==t&&".sv"!==t&&(a=!0,!Qa(t)))throw new Error(e+" contains an invalid key ("+t+") "+fr(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,s;s=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(s),o.byteLength_+=xe(s),hr(o),Xa(e,n,r),function(e){var t=e.parts_.pop();e.byteLength_-=xe(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),i&&a)throw new Error(e+' contains ".value" child '+fr(r)+" in addition to actual children.")}},Ja=function(e,t){var n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Qa(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Ya(e)}(n))throw new Error(Ie(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')},$a=function t(){"use strict";e(E)(this,t),this.eventLists_=[],this.recursionDepth_=0};function Za(e,t){for(var n=null,r=0;r<t.length;r++){var i=t[r],a=i.getPath();null===n||ur(a,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:a}),n.events.push(i)}n&&e.eventLists_.push(n)}function eo(e,t,n){Za(e,n),to(e,(function(e){return cr(e,t)||cr(t,e)}))}function to(e,t){e.recursionDepth_++;for(var n=!0,r=0;r<e.eventLists_.length;r++){var i=e.eventLists_[r];if(i)t(i.path)?(no(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}n&&(e.eventLists_=[]),e.recursionDepth_--}function no(e){for(var t=0;t<e.events.length;t++){var n=e.events[t];if(null!==n){e.events[t]=null;var r=n.getEventRunner();tn&&an("event: "+n.toString()),Tn(r)}}}
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
 */var ro="repo_interrupt",io=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.repoInfo_=n,this.forceRestClient_=r,this.authTokenProvider_=i,this.appCheckProvider_=a,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $a,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new Ma,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}return e(C)(t,[{key:"toString",value:function(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}]),t}();function ao(e,t,n){if(e.stats_=Un(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ai(e.repoInfo_,(function(t,n,r,i){uo(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((function(){return co(e,!0)}),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ue(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new pr(e.repoInfo_,t,(function(t,n,r,i){uo(e,t,n,r,i)}),(function(t){co(e,t)}),(function(t){!function(e,t){gn(t,(function(t,n){lo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}var r,i,a;e.authTokenProvider_.addTokenChangeListener((function(t){e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((function(t){e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=(r=e.repoInfo_,i=function(){return new di(e.stats_,e.server_)},a=r.toString(),Fn[a]||(Fn[a]=i()),Fn[a]),e.infoData_=new oi,e.infoSyncTree_=new ma({startListening:function(t,n,r,i){var a=[],o=e.infoData_.getNode(t._path);return o.isEmpty()||(a=_a(e.infoSyncTree_,t._path,o),setTimeout((function(){i("ok")}),0)),a},stopListening:function(){}}),lo(e,"connected",!1),e.serverSyncTree_=new ma({startListening:function(t,n,r,i){return e.server_.listen(t,r,n,(function(n,r){var a=i(n,r);eo(e.eventQueue_,t._path,a)})),[]},stopListening:function(t,n){e.server_.unlisten(t,n)}})}function oo(e){var t=e.infoData_.getNode(new Jn(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function so(e){return(t=(t={timestamp:oo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function uo(e,t,n,r,i){e.dataUpdateCount++;var a=new Jn(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;var o=[];if(i)if(r){var s=ve(n,(function(e){return zr(e)}));o=function(e,t,n,r){var i=xa(e,r);if(i){var a=Ea(i),o=a.path,s=a.queryId,u=sr(o,t),c=Ci.fromObject(n);return Ca(e,o,new gi(vi(s),u,c))}return[]}(e.serverSyncTree_,a,s,i)}else{var u=zr(n);o=function(e,t,n,r){var i=xa(e,r);if(null!=i){var a=Ea(i),o=a.path,s=a.queryId,u=sr(o,t);return Ca(e,o,new mi(vi(s),u,n))}return[]}(e.serverSyncTree_,a,u,i)}else if(r){var c=ve(n,(function(e){return zr(e)}));o=function(e,t,n){var r=Ci.fromObject(n);return ba(e,new gi({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,a,c)}else{var l=zr(n);o=_a(e.serverSyncTree_,a,l)}var h=a;o.length>0&&(h=go(e,a)),eo(e.eventQueue_,h,o)}function co(e,t){lo(e,"connected",t),!1===t&&function(e){vo(e,"onDisconnectEvents");var t=so(e),n=si();ci(e.onDisconnect_,$n(),(function(r,i){var a=Pa(r,i,e.serverSyncTree_,t);ui(n,r,a)}));var r=[];ci(n,$n(),(function(t,n){r=r.concat(_a(e.serverSyncTree_,t,n));var i=Io(e,t);go(e,i)})),e.onDisconnect_=si(),eo(e.eventQueue_,$n(),r)}(e)}function lo(e,t,n){var r=new Jn("/.info/"+t),i=zr(n);e.infoData_.updateSnapshot(r,i);var a=_a(e.infoSyncTree_,r,i);eo(e.eventQueue_,r,a)}function ho(e){return e.nextWriteId_++}function fo(e){e.persistentConnection_&&e.persistentConnection_.interrupt(ro)}function vo(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a="";t.persistentConnection_&&(a=t.persistentConnection_.id+":"),an.apply(void 0,[a].concat(e(A)(r)))}function po(e,t,n){return wa(e.serverSyncTree_,t,n)||Hr.EMPTY_NODE}function yo(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.transactionQueueTree_;if(t||bo(e,t),Ua(t)){var n=_o(e,t);U(n.length>0,"Sending zero length transaction queue");var r=n.every((function(e){return 0===e.status}));r&&mo(e,Ha(t),n)}else ja(t)&&qa(t,(function(t){yo(e,t)}))}function mo(e,t,n){for(var r=n.map((function(e){return e.currentWriteId})),i=po(e,t,r),a=i,o=i.hash(),s=0;s<n.length;s++){var u=n[s];U(0===u.status,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;var c=sr(t,u.path);a=a.updateChild(c,u.currentOutputSnapshotRaw)}var l=a.val(!0),h=t;e.server_.put(h.toString(),l,(function(r){vo(e,"transaction put response",{path:h.toString(),status:r});var i=[];if("ok"===r){for(var a=function(t){n[t].status=2,i=i.concat(ka(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&o.push((function(){return n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved)})),n[t].unwatcher()},o=[],s=0;s<n.length;s++)a(s);bo(e,Fa(e.transactionQueueTree_,t)),yo(e,e.transactionQueueTree_),eo(e.eventQueue_,t,i);for(var u=0;u<o.length;u++)Tn(o[u])}else{if("datastale"===r)for(var c=0;c<n.length;c++)3===n[c].status?n[c].status=4:n[c].status=0;else{cn("transaction at "+h.toString()+" failed: "+r);for(var l=0;l<n.length;l++)n[l].status=4,n[l].abortReason=r}go(e,t)}}),o)}function go(e,t){var n=ko(e,t),r=Ha(n);return function(e,t,n){var r=function(r){var s,u=t[r],c=sr(n,u.path),l=!1,h=void 0;if(U(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===u.status)l=!0,h=u.abortReason,a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0));else if(0===u.status)if(u.retryCount>=25)l=!0,h="maxretry",a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0));else{var f=po(e,u.path,o);u.currentInputSnapshot=f;var d=t[r].update(f.val());if(void 0!==d){Xa("transaction failed: Data returned ",d,u.path);var v=zr(d);"object"==typeof d&&null!=d&&he(d,".priority")||(v=v.updatePriority(f.getPriority()));var p=u.currentWriteId,y=so(e),m=Oa(v,f,y);u.currentOutputSnapshotRaw=v,u.currentOutputSnapshotResolved=m,u.currentWriteId=ho(e),o.splice(o.indexOf(p),1),a=(a=a.concat(ga(e.serverSyncTree_,u.path,m,u.currentWriteId,u.applyLocally))).concat(ka(e.serverSyncTree_,p,!0))}else l=!0,h="nodata",a=a.concat(ka(e.serverSyncTree_,u.currentWriteId,!0))}eo(e.eventQueue_,n,a),a=[],l&&(t[r].status=2,s=t[r].unwatcher,setTimeout(s,Math.floor(0)),t[r].onComplete&&("nodata"===h?i.push((function(){return t[r].onComplete(null,!1,t[r].currentInputSnapshot)})):i.push((function(){return t[r].onComplete(new Error(h),!1,null)}))))};if(0===t.length)return;for(var i=[],a=[],o=t.filter((function(e){return 0===e.status})).map((function(e){return e.currentWriteId})),s=0;s<t.length;s++)r(s);bo(e,e.transactionQueueTree_);for(var u=0;u<i.length;u++)Tn(i[u]);yo(e,e.transactionQueueTree_)}(e,_o(e,n),r),r}function ko(e,t){var n,r=e.transactionQueueTree_;for(n=Zn(t);null!==n&&void 0===Ua(r);)r=Fa(r,n),n=Zn(t=tr(t));return r}function _o(e,t){var n=[];return wo(e,t,n),n.sort((function(e,t){return e.order-t.order})),n}function wo(e,t,n){var r=Ua(t);if(r)for(var i=0;i<r.length;i++)n.push(r[i]);qa(t,(function(t){wo(e,t,n)}))}function bo(e,t){var n=Ua(t);if(n){for(var r=0,i=0;i<n.length;i++)2!==n[i].status&&(n[r]=n[i],r++);n.length=r,Va(t,n.length>0?n:void 0)}qa(t,(function(t){bo(e,t)}))}function Io(e,t){var n=Ha(ko(e,t)),r=Fa(e.transactionQueueTree_,t);return function(e,t,n){for(var r=n?e:e.parent;null!==r;){if(t(r))return!0;r=r.parent}}(r,(function(t){To(e,t)})),To(e,r),Ba(r,(function(t){To(e,t)})),n}function To(e,t){var n=Ua(t);if(n){for(var r=[],i=[],a=-1,o=0;o<n.length;o++)3===n[o].status||(1===n[o].status?(U(a===o-1,"All SENT items should be at beginning of queue."),a=o,n[o].status=3,n[o].abortReason="set"):(U(0===n[o].status,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ka(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));-1===a?Va(t,void 0):n.length=a+1,eo(e.eventQueue_,Ha(t),i);for(var s=0;s<r.length;s++)Tn(r[s])}}
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
 */var xo=function(e,t){var n=Eo(e),r=n.namespace;"firebase.com"===n.domain&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&cn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");var i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Pn(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Jn(n.pathString)}},Eo=function(e){var t="",n="",r="",i="",a="",o=!0,s="https",u=443;if("string"==typeof e){var c=e.indexOf("//");c>=0&&(s=e.substring(0,c-1),e=e.substring(c+2));var l=e.indexOf("/");-1===l&&(l=e.length);var h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(l,h)),l<h&&(i=function(e){for(var t="",n=e.split("/"),r=0;r<n.length;r++)if(n[r].length>0){var i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(l,h)));var f=function(e){var t={};"?"===e.charAt(0)&&(e=e.substring(1));var n=!0,r=!1,i=void 0;try{for(var a,o=e.split("&")[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(0!==s.length){var u=s.split("=");2===u.length?t[decodeURIComponent(u[0])]=decodeURIComponent(u[1]):cn("Invalid query segment '".concat(s,"' in query '").concat(e,"'"))}}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}(e.substring(Math.min(e.length,h)));(c=t.indexOf(":"))>=0?(o="https"===s||"wss"===s,u=parseInt(t.substring(c+1),10)):c=t.length;var d=t.slice(0,c);if("localhost"===d.toLowerCase())n="localhost";else if(d.split(".").length<=2)n=d;else{var v=t.indexOf(".");r=t.substring(0,v).toLowerCase(),n=t.substring(v+1),a=r}"ns"in f&&(a=f.ns)}return{host:t,port:u,domain:n,subdomain:r,secure:o,scheme:s,pathString:i,namespace:a}},Co=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this._repo=n,this._path=r,this._queryParams=i,this._orderByCalled=a}return e(C)(t,[{key:"key",get:function(){return or(this._path)?null:nr(this._path)}},{key:"ref",get:function(){return new So(this._repo,this._path)}},{key:"_queryIdentifier",get:function(){var e=ii(this._queryParams),t=yn(e);return"{}"===t?"default":t}},{key:"_queryObject",get:function(){return ii(this._queryParams)}},{key:"isEqual",value:function(e){if(!((e=Se(e))instanceof t))return!1;var n=this._repo===e._repo,r=ur(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}},{key:"toJSON",value:function(){return this.toString()}},{key:"toString",value:function(){return this._repo.toString()+function(e){for(var t="",n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}]),t}();var So=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){return e(E)(this,r),n.call(this,t,i,new ni,!1)}return e(C)(r,[{key:"parent",get:function(){var e=ir(this._path);return null===e?null:new r(this._repo,e)}},{key:"root",get:function(){for(var e=this;null!==e.parent;)e=e.parent;return e}}]),r}(Co);!function(e){U(!la,"__referenceConstructor has already been defined"),la=e}(So),function(e){U(!va,"__referenceConstructor has already been defined"),va=e}(So);
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
var No={},Ao=!1;function Ro(e,t,n,r,i){var a=r||e.options.databaseURL;void 0===a&&(e.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),an("Using default host for project ",e.options.projectId),a="".concat(e.options.projectId,"-default-rtdb.firebaseio.com"));var o,s=xo(a,i),u=s.repoInfo,c=void 0;void 0!==qt&&qt.env&&(c=qt.env.FIREBASE_DATABASE_EMULATOR_HOST),c?(o=!0,a="http://".concat(c,"?ns=").concat(u.namespace),u=(s=xo(a,i)).repoInfo):o=!s.repoInfo.secure;var l=i&&o?new Sn(Sn.OWNER):new Cn(e.name,e.options,t);Ja("Invalid Firebase Database URL",s),or(s.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");var h=function(e,t,n,r){var i=No[t.name];i||(i={},No[t.name]=i);var a=i[e.toURLString()];a&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return a=new io(e,Ao,n,r),i[e.toURLString()]=a,a}(u,e,l,new En(e.name,n));return new Do(h,e)}var Do=function(){"use strict";function t(n,r){e(E)(this,t),this._repoInternal=n,this.app=r,this.type="database",this._instanceStarted=!1}return e(C)(t,[{key:"_repo",get:function(){return this._instanceStarted||(ao(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}},{key:"_root",get:function(){return this._rootInternal||(this._rootInternal=new So(this._repo,$n())),this._rootInternal}},{key:"_delete",value:function(){var e,t,n;return null!==this._rootInternal&&(e=this._repo,t=this.app.name,(n=No[t])&&n[e.key]===e||un("Database ".concat(t,"(").concat(e.repoInfo_,") has already been deleted.")),fo(e),delete n[e.key],this._repoInternal=null,this._rootInternal=null),Promise.resolve()}},{key:"_checkNotDeleted",value:function(e){null===this._rootInternal&&un("Cannot call "+e+" on a deleted database.")}}]),t}();pr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},pr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};!
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
 */
function(e){Wt=Tt,kt(new Ne("database",(function(e,t){var n=t.instanceIdentifier;return Ro(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),n)}),"PUBLIC").setMultipleInstances(!0)),Et(Bt,Ht,e),Et(Bt,Ht,"esm2017")}
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
 */();var Po={authPage:document.querySelector(".form-auth"),authCloseBtn:document.querySelector(".auth-page__btn-close")};Po.authCloseBtn.addEventListener("click",(function(){Po.authPage.classList.add("is-hidden")}));var Oo=i("e1ad9"),Lo=(_=i("1vR0Z"),document.querySelector(".mySwiper"));(0,_.default)(Lo);new(0,Oo.default)(".mySwiper",{modules:[Oo.Navigation,Oo.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});var Mo=document.querySelector(".swiper-wrapper");var Fo,Uo,Vo={};function jo(e){return jo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jo(e)}Fo="undefined"!=typeof self?self:void 0,Uo=function(e){e.addBackToTop=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.backgroundColor,n=void 0===t?"#000":t,r=e.cornerOffset,i=void 0===r?20:r,a=e.diameter,o=void 0===a?56:a,s=e.ease,u=void 0===s?j:s,c=e.id,l=void 0===c?"back-to-top":c,h=e.innerHTML,f=void 0===h?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':h,d=e.onClickScrollTo,v=void 0===d?0:d,p=e.scrollContainer,y=void 0===p?document.body:p,m=e.scrollDuration,g=void 0===m?100:m,k=e.showWhenScrollTopIs,_=void 0===k?1:k,w=e.size,b=void 0===w?o:w,I=e.textColor,T=void 0===I?"#fff":I,x=e.zIndex,E=void 0===x?1:x,C=y===document.body,S=C&&document.documentElement;M();var N=L(),A=!0,R=C?window:y;function D(){U()>=_?P():O()}function P(){A&&(N.className="",A=!1)}function O(){A||(N.className="hidden",A=!0)}function L(){var e=document.createElement("div");return e.id=l,e.className="hidden",e.innerHTML=f,e.addEventListener("click",(function(e){e.preventDefault(),F()})),document.body.appendChild(e),e}function M(){var e=Math.round(.43*b),t=Math.round(.29*b),r="#"+l+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+i+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+T+";cursor:pointer;display:block;height:"+b+"px;opacity:1;outline:0;position:fixed;right:"+i+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+b+"px;z-index:"+E+"}#"+l+" svg{display:block;fill:currentColor;height:"+e+"px;margin:"+t+"px auto 0;width:"+e+"px}#"+l+".hidden{bottom:-"+b+"px;opacity:0}",a=document.createElement("style");a.appendChild(document.createTextNode(r)),document.head.insertAdjacentElement("afterbegin",a)}function F(){var e="function"==typeof v?v():v,t=window,n=t.performance,r=t.requestAnimationFrame;if(g<=0||void 0===n||void 0===r)return V(e);var i=n.now(),a=U(),o=a-e;r((function e(t){var n=Math.min((t-i)/g,1);V(a-Math.round(u(n)*o)),n<1&&r(e)}))}function U(){return y.scrollTop||S&&document.documentElement.scrollTop||0}function V(e){y.scrollTop=e,S&&(document.documentElement.scrollTop=e)}function j(e){return.5*(1-Math.cos(Math.PI*e))}R.addEventListener("scroll",D),D()}},"function"==typeof define&&define.amd?define(["exports"],Uo):"object"===jo(Vo)&&"string"!=typeof Vo.nodeName?Uo(Vo):Uo(Fo.commonJsStrict={}),(0,Vo.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"});a=i("bpxeT"),o=i("2TvXO");
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
Et("firebase","9.8.3","app");a=i("bpxeT"),E=i("8MBJY"),C=i("a2hTj"),P=i("hKHmD"),N=i("1t1Wn"),o=i("2TvXO"),a=i("bpxeT"),P=i("hKHmD"),A=i("8nrFW"),o=i("2TvXO");var qo,Bo="@firebase/installations",Ho="0.5.10",Wo=1e4,zo="w:".concat(Ho),Ko="FIS_v2",Go=36e5,Qo=(qo={},e(P)(qo,"missing-app-config-values",'Missing App configuration value: "{$valueName}"'),e(P)(qo,"not-registered","Firebase Installation is not registered."),e(P)(qo,"installation-not-found","Firebase Installation not found."),e(P)(qo,"request-failed",'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"'),e(P)(qo,"app-offline","Could not process request. Application offline."),e(P)(qo,"delete-pending-registration","Can't delete installation while there is a pending registration request."),qo),Yo=new ie("installations","Installations",Qo);function Xo(e){return e instanceof re&&e.code.includes("request-failed")}
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
 */function Jo(e){var t=e.projectId;return"".concat("https://firebaseinstallations.googleapis.com/v1","/projects/").concat(t,"/installations")}function $o(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}function Zo(e,t){return es.apply(this,arguments)}function es(){return(es=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.json();case 2:return i=e.sent,a=i.error,e.abrupt("return",Yo.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status}));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ts(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ns(e,t){var n=t.refreshToken,r=ts(e);return r.append("Authorization",function(e){return"".concat(Ko," ").concat(e)}(n)),r}function rs(e){return is.apply(this,arguments)}function is(){return(is=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:if(!((r=e.sent).status>=500&&r.status<600)){e.next=5;break}return e.abrupt("return",n());case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function as(e,t){return os.apply(this,arguments)}function os(){return(os=
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
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,v,p,y;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=r.fid,u=Jo(i),c=ts(i),!(l=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,l.getHeartbeatsHeader();case 7:(h=e.sent)&&c.append("x-firebase-client",h);case 9:return f={fid:s,authVersion:Ko,appId:i.appId,sdkVersion:zo},d={method:"POST",headers:c,body:JSON.stringify(f)},e.next=13,rs((function(){return fetch(u,d)}));case 13:if(!(v=e.sent).ok){e.next=22;break}return e.next=17,v.json();case 17:return p=e.sent,y={fid:p.fid||s,registrationStatus:2,refreshToken:p.refreshToken,authToken:$o(p.authToken)},e.abrupt("return",y);case 22:return e.next=24,Zo("Create Installation",v);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function ss(e){return new Promise((function(t){setTimeout(t,e)}))}
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
var us=/^[cdef][\w-]{21}$/;function cs(){try{var t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;var n=function(t){return(n=t,btoa((r=String).fromCharCode.apply(r,e(A)(n))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var n,r}
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
 */(t);return us.test(n)?n:""}catch(e){return""}}function ls(e){return"".concat(e.appName,"!").concat(e.appId)}
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
 */var hs=new Map;function fs(e,t){var n=ls(e);ds(n,t),function(e,t){var n=ps();n&&n.postMessage({key:e,fid:t});ys()}(n,t)}function ds(e,t){var n=hs.get(e);if(n){var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}}var vs=null;function ps(){return!vs&&"BroadcastChannel"in self&&((vs=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){ds(e.data.key,e.data.fid)}),vs}function ys(){0===hs.size&&vs&&(vs.close(),vs=null)}
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
 */var ms="firebase-installations-store",gs=null;function ks(){return gs||(gs=rt("firebase-installations-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(ms)}})),gs}function _s(e,t){return ws.apply(this,arguments)}function ws(){return(ws=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ls(n),e.next=3,ks();case 3:return a=e.sent,s=a.transaction(ms,"readwrite"),u=s.objectStore(ms),e.next=8,u.get(i);case 8:return c=e.sent,e.next=11,u.put(r,i);case 11:return e.next=13,s.done;case 13:return c&&c.fid===r.fid||fs(n,r.fid),e.abrupt("return",r);case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function bs(e){return Is.apply(this,arguments)}function Is(){return(Is=e(a)(e(o).mark((function t(n){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=ls(n),e.next=3,ks();case 3:return i=e.sent,a=i.transaction(ms,"readwrite"),e.next=7,a.objectStore(ms).delete(r);case 7:return e.next=9,a.done;case 9:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ts(e,t){return xs.apply(this,arguments)}function xs(){return(xs=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ls(n),e.next=3,ks();case 3:return a=e.sent,s=a.transaction(ms,"readwrite"),u=s.objectStore(ms),e.next=8,u.get(i);case 8:if(c=e.sent,void 0!==(l=r(c))){e.next=15;break}return e.next=13,u.delete(i);case 13:e.next=17;break;case 15:return e.next=17,u.put(l,i);case 17:return e.next=19,s.done;case 19:return!l||c&&c.fid===l.fid||fs(n,l.fid),e.abrupt("return",l);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Es(e){return Cs.apply(this,arguments)}function Cs(){return(Cs=
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
e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Ts(n.appConfig,(function(e){var t=Ss(e),i=Ns(n,t);return r=i.registrationPromise,i.installationEntry}));case 3:if(""!==(i=e.sent).fid){e.next=9;break}return e.next=7,r;case 7:return e.t0=e.sent,e.abrupt("return",{installationEntry:e.t0});case 9:return e.abrupt("return",{installationEntry:i,registrationPromise:r});case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ss(e){return Os(e||{fid:cs(),registrationStatus:0})}function Ns(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(Yo.create("app-offline"))};var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return As.apply(this,arguments)}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Rs(e)}:{installationEntry:t}}function As(){return(As=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,as(n,r);case 3:return i=e.sent,e.abrupt("return",_s(n.appConfig,i));case 7:if(e.prev=7,e.t0=e.catch(0),!Xo(e.t0)||409!==e.t0.customData.serverCode){e.next=14;break}return e.next=12,bs(n.appConfig);case 12:e.next=16;break;case 14:return e.next=16,_s(n.appConfig,{fid:r.fid,registrationStatus:0});case 16:throw e.t0;case 17:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function Rs(e){return Ds.apply(this,arguments)}function Ds(){return(Ds=e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ps(n.appConfig);case 2:r=e.sent;case 3:if(1!==r.registrationStatus){e.next=11;break}return e.next=6,ss(100);case 6:return e.next=8,Ps(n.appConfig);case 8:r=e.sent,e.next=3;break;case 11:if(0!==r.registrationStatus){e.next=22;break}return e.next=14,Es(n);case 14:if(i=e.sent,a=i.installationEntry,!(s=i.registrationPromise)){e.next=21;break}return e.abrupt("return",s);case 21:return e.abrupt("return",a);case 22:return e.abrupt("return",r);case 23:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ps(e){return Ts(e,(function(e){if(!e)throw Yo.create("installation-not-found");return Os(e)}))}function Os(e){return 1===(t=e).registrationStatus&&t.registrationTime+Wo<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t}function Ls(e,t){return Ms.apply(this,arguments)}function Ms(){return(Ms=
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
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,v,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.appConfig,a=n.heartbeatServiceProvider,s=Fs(i,r),u=ns(i,r),!(c=a.getImmediate({optional:!0}))){e.next=9;break}return e.next=7,c.getHeartbeatsHeader();case 7:(l=e.sent)&&u.append("x-firebase-client",l);case 9:return h={installation:{sdkVersion:zo,appId:i.appId}},f={method:"POST",headers:u,body:JSON.stringify(h)},e.next=13,rs((function(){return fetch(s,f)}));case 13:if(!(d=e.sent).ok){e.next=22;break}return e.next=17,d.json();case 17:return v=e.sent,p=$o(v),e.abrupt("return",p);case 22:return e.next=24,Zo("Generate Auth Token",d);case 24:throw e.sent;case 25:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fs(e,t){var n=t.fid;return"".concat(Jo(e),"/").concat(n,"/authTokens:generate")}function Us(e){return Vs.apply(this,arguments)}function Vs(){return Vs=
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
e(a)(e(o).mark((function t(n){var r,i,a,s,u=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]&&u[1],e.next=4,Ts(n.appConfig,(function(e){if(!zs(e))throw Yo.create("not-registered");var t=e.authToken;if(!r&&Ks(t))return e;if(1===t.requestStatus)return i=js(n,r),e;if(!navigator.onLine)throw Yo.create("app-offline");var a=Gs(e);return i=Hs(n,a),a}));case 4:if(a=e.sent,!i){e.next=11;break}return e.next=8,i;case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=a.authToken;case 12:return s=e.t0,e.abrupt("return",s);case 14:case"end":return e.stop()}}),t)}))),Vs.apply(this,arguments)}function js(e,t){return qs.apply(this,arguments)}function qs(){return(qs=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Bs(n.appConfig);case 2:i=e.sent;case 3:if(1!==i.authToken.requestStatus){e.next=11;break}return e.next=6,ss(100);case 6:return e.next=8,Bs(n.appConfig);case 8:i=e.sent,e.next=3;break;case 11:if(0!==(a=i.authToken).requestStatus){e.next=16;break}return e.abrupt("return",Us(n,r));case 16:return e.abrupt("return",a);case 17:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Bs(e){return Ts(e,(function(e){if(!zs(e))throw Yo.create("not-registered");var t,n=e.authToken;return 1===(t=n).requestStatus&&t.requestTime+Wo<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}function Hs(e,t){return Ws.apply(this,arguments)}function Ws(){return(Ws=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ls(n,r);case 3:return i=e.sent,a=Object.assign(Object.assign({},r),{authToken:i}),e.next=7,_s(n.appConfig,a);case 7:return e.abrupt("return",i);case 10:if(e.prev=10,e.t0=e.catch(0),!Xo(e.t0)||401!==e.t0.customData.serverCode&&404!==e.t0.customData.serverCode){e.next=17;break}return e.next=15,bs(n.appConfig);case 15:e.next=20;break;case 17:return s=Object.assign(Object.assign({},r),{authToken:{requestStatus:0}}),e.next=20,_s(n.appConfig,s);case 20:throw e.t0;case 21:case"end":return e.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function zs(e){return void 0!==e&&2===e.registrationStatus}function Ks(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Go}(e)}function Gs(e){var t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Qs(){return(Qs=
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
e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n,e.next=3,Es(r);case 3:return i=e.sent,a=i.installationEntry,(s=i.registrationPromise)?s.catch(console.error):Us(r).catch(console.error),e.abrupt("return",a.fid);case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ys(){return Ys=
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
e(a)(e(o).mark((function t(n){var r,i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=s.length>1&&void 0!==s[1]&&s[1],i=n,e.next=4,Xs(i);case 4:return e.next=6,Us(i,r);case 6:return a=e.sent,e.abrupt("return",a.token);case 8:case"end":return e.stop()}}),t)}))),Ys.apply(this,arguments)}function Xs(e){return Js.apply(this,arguments)}function Js(){return(Js=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Es(n);case 2:if(!(r=e.sent.registrationPromise)){e.next=6;break}return e.next=6,r;case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function $s(e){return Yo.create("missing-app-config-values",{valueName:e})}
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
 */var Zs="installations",eu=function(e){var t=_t(e.getProvider("app").getImmediate(),Zs).getImmediate(),n={getId:function(){return function(e){return Qs.apply(this,arguments)}(t)},getToken:function(e){return function(e){return Ys.apply(this,arguments)}(t,e)}};return n};kt(new Ne(Zs,(function(e){var t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw $s("App Configuration");if(!e.name)throw $s("App Name");var t=!0,n=!1,r=void 0;try{for(var i,a=["projectId","apiKey","appId"][Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(!e.options[o])throw $s(o)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:_t(t,"heartbeat"),_delete:function(){return Promise.resolve()}}}),"PUBLIC")),kt(new Ne("installations-internal",eu,"PRIVATE")),Et(Bo,Ho),Et(Bo,Ho,"esm2017");
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
var tu,nu="analytics",ru=6e4,iu="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",au="https://www.googletagmanager.com/gtag/js",ou=new qe("@firebase/analytics");
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
function su(e){return Promise.all(e.map((function(e){return e.catch((function(e){return e}))})))}function uu(e,t){var n=document.createElement("script");n.src="".concat(au,"?l=").concat(e,"&id=").concat(t),n.async=!0,document.head.appendChild(n)}function cu(e,t,n,r,i,a){return lu.apply(this,arguments)}function lu(){return(lu=e(a)(e(o).mark((function t(n,r,i,a,s,u){var c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=a[s],e.prev=1,!c){e.next=7;break}return e.next=5,r[c];case 5:e.next=14;break;case 7:return e.next=9,su(i);case 9:if(l=e.sent,!(h=l.find((function(e){return e.measurementId===s})))){e.next=14;break}return e.next=14,r[h.appId];case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),ou.error(e.t0);case 19:n("config",s,u);case 20:case"end":return e.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function hu(e,t,n,r,i){return fu.apply(this,arguments)}function fu(){return(fu=e(a)(e(o).mark((function t(n,r,i,a,s){var u,c,l,h,f,d,v,p,y,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,u=[],!s||!s.send_to){e.next=38;break}return c=s.send_to,Array.isArray(c)||(c=[c]),e.next=7,su(i);case 7:l=e.sent,h=!0,f=!1,d=void 0,e.prev=9,v=c[Symbol.iterator]();case 11:if(h=(p=v.next()).done){e.next=24;break}if(y=p.value,m=l.find((function(e){return e.measurementId===y})),!(g=m&&r[m.appId])){e.next=19;break}u.push(g),e.next=21;break;case 19:return u=[],e.abrupt("break",24);case 21:h=!0,e.next=11;break;case 24:e.next=30;break;case 26:e.prev=26,e.t0=e.catch(9),f=!0,d=e.t0;case 30:e.prev=30,e.prev=31,h||null==v.return||v.return();case 33:if(e.prev=33,!f){e.next=36;break}throw d;case 36:return e.finish(33);case 37:return e.finish(30);case 38:return 0===u.length&&(u=Object.values(r)),e.next=41,Promise.all(u);case 41:n("event",a,s||{}),e.next=47;break;case 44:e.prev=44,e.t1=e.catch(0),ou.error(e.t1);case 47:case"end":return e.stop()}}),t,null,[[0,44],[9,26,30,38],[31,,33,37]])})))).apply(this,arguments)}function du(t,n,r,i,s){var u=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(u=window[s]),window[s]=function(t,n,r,i){function s(){return(s=e(a)(e(o).mark((function a(s,u,c){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"event"!==s){e.next=6;break}return e.next=4,hu(t,n,r,u,c);case 4:e.next=12;break;case 6:if("config"!==s){e.next=11;break}return e.next=9,cu(t,n,r,i,u,c);case 9:e.next=12;break;case 11:t("set",u);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),ou.error(e.t0);case 17:case"end":return e.stop()}}),a,null,[[0,14]])})))).apply(this,arguments)}return function(e,t,n){return s.apply(this,arguments)}}(u,t,n,r),{gtagCore:u,wrappedGtag:window[s]}}function vu(){var e=window.document.getElementsByTagName("script"),t=!0,n=!1,r=void 0;try{for(var i,a=Object.values(e)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.src&&o.src.includes(au))return o}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}
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
var pu=(tu={},e(P)(tu,"already-exists","A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId."),e(P)(tu,"already-initialized","initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance."),e(P)(tu,"already-initialized-settings","Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect."),e(P)(tu,"interop-component-reg-failed","Firebase Analytics Interop Component failed to instantiate: {$reason}"),e(P)(tu,"invalid-analytics-context","Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(P)(tu,"indexeddb-unavailable","IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}"),e(P)(tu,"fetch-throttle","The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}."),e(P)(tu,"config-fetch-failed","Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}"),e(P)(tu,"no-api-key",'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.'),e(P)(tu,"no-app-id",'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'),tu),yu=new ie("analytics","Analytics",pu),mu=function(){"use strict";function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;e(E)(this,t),this.throttleMetadata=n,this.intervalMillis=r}return e(C)(t,[{key:"getThrottleMetadata",value:function(e){return this.throttleMetadata[e]}},{key:"setThrottleMetadata",value:function(e,t){this.throttleMetadata[e]=t}},{key:"deleteThrottleMetadata",value:function(e){delete this.throttleMetadata[e]}}]),t}(),gu=new mu;function ku(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}function _u(e){return wu.apply(this,arguments)}function wu(){return(wu=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.appId,a=n.apiKey,s={method:"GET",headers:ku(a)},u=iu.replace("{app-id}",i),e.next=6,fetch(u,s);case 6:if(200===(c=e.sent).status||304===c.status){e.next=19;break}return l="",e.prev=9,e.next=12,c.json();case 12:h=e.sent,(null===(r=h.error)||void 0===r?void 0:r.message)&&(l=h.error.message),e.next=18;break;case 16:e.prev=16,e.t0=e.catch(9);case 18:throw yu.create("config-fetch-failed",{httpStatus:c.status,responseMessage:l});case 19:return e.abrupt("return",c.json());case 20:case"end":return e.stop()}}),t,null,[[9,16]])})))).apply(this,arguments)}function bu(e){return Iu.apply(this,arguments)}function Iu(){return Iu=e(a)(e(o).mark((function t(n){var r,i,s,u,c,l,h,f,d=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=d.length>1&&void 0!==d[1]?d[1]:gu,i=d.length>2?d[2]:void 0,s=n.options,u=s.appId,c=s.apiKey,l=s.measurementId,u){t.next=4;break}throw yu.create("no-app-id");case 4:if(c){t.next=8;break}if(!l){t.next=7;break}return t.abrupt("return",{measurementId:l,appId:u});case 7:throw yu.create("no-api-key");case 8:return h=r.getThrottleMetadata(u)||{backoffCount:0,throttleEndTimeMillis:Date.now()},f=new Su,setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:f.abort();case 1:case"end":return e.stop()}}),t)}))),void 0!==i?i:ru),t.abrupt("return",Tu({appId:u,apiKey:c,measurementId:l},h,f,r));case 12:case"end":return t.stop()}}),t)}))),Iu.apply(this,arguments)}function Tu(e,t,n){return xu.apply(this,arguments)}function xu(){return xu=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d,v=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.throttleEndTimeMillis,s=r.backoffCount,u=v.length>3&&void 0!==v[3]?v[3]:gu,c=n.appId,l=n.measurementId,e.prev=2,e.next=5,Eu(i,a);case 5:e.next=13;break;case 7:if(e.prev=7,e.t0=e.catch(2),!l){e.next=12;break}return ou.warn("Timed out fetching this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t0.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 12:throw e.t0;case 13:return e.prev=13,e.next=16,_u(n);case 16:return h=e.sent,u.deleteThrottleMetadata(c),e.abrupt("return",h);case 21:if(e.prev=21,e.t1=e.catch(13),Cu(e.t1)){e.next=31;break}if(u.deleteThrottleMetadata(c),!l){e.next=30;break}return ou.warn("Failed to fetch this Firebase app's measurement ID from the server."+" Falling back to the measurement ID ".concat(l)+' provided in the "measurementId" field in the local Firebase config. ['.concat(e.t1.message,"]")),e.abrupt("return",{appId:c,measurementId:l});case 30:throw e.t1;case 31:return f=503===Number(e.t1.customData.httpStatus)?Ce(s,u.intervalMillis,30):Ce(s,u.intervalMillis),d={throttleEndTimeMillis:Date.now()+f,backoffCount:s+1},u.setThrottleMetadata(c,d),ou.debug("Calling attemptFetch again in ".concat(f," millis")),e.abrupt("return",Tu(n,d,i,u));case 36:case"end":return e.stop()}}),t,null,[[2,7],[13,21]])}))),xu.apply(this,arguments)}function Eu(e,t){return new Promise((function(n,r){var i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((function(){clearTimeout(a),r(yu.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Cu(e){if(!(e instanceof re&&e.customData))return!1;var t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}var Su=function(){"use strict";function t(){e(E)(this,t),this.listeners=[]}return e(C)(t,[{key:"addEventListener",value:function(e){this.listeners.push(e)}},{key:"abort",value:function(){this.listeners.forEach((function(e){return e()}))}}]),t}();function Nu(){return Au.apply(this,arguments)}function Au(){return(Au=
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
e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ee()){e.next=5;break}return ou.warn(yu.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),e.abrupt("return",!1);case 5:return e.prev=5,e.next=8,te();case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(5),ou.warn(yu.create("indexeddb-unavailable",{errorInfo:e.t0}).message),e.abrupt("return",!1);case 14:return e.abrupt("return",!0);case 15:case"end":return e.stop()}}),t,null,[[5,10]])})))).apply(this,arguments)}function Ru(){return(Ru=e(a)(e(o).mark((function t(n,r,i,a,s,u,c){var l,h,f,d,v,p,y;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(h=bu(n)).then((function(e){i[e.measurementId]=e.appId,n.options.measurementId&&e.measurementId!==n.options.measurementId&&ou.warn("The measurement ID in the local Firebase config (".concat(n.options.measurementId,")")+" does not match the measurement ID fetched from the server (".concat(e.measurementId,").")+" To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.")})).catch((function(e){return ou.error(e)})),r.push(h),f=Nu().then((function(e){return e?a.getId():void 0})),t.t0=e(N),t.next=8,Promise.all([h,f]);case 8:return t.t1=t.sent,d=(0,t.t0)(t.t1,2),v=d[0],p=d[1],vu()||uu(u,v.measurementId),s("js",new Date),(y=null!==(l=null==c?void 0:c.config)&&void 0!==l?l:{}).origin="firebase",y.update=!0,null!=p&&(y.firebase_id=p),s("config",v.measurementId,y),t.abrupt("return",v.measurementId);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Du,Pu,Ou=function(){"use strict";function t(n){e(E)(this,t),this.app=n}return e(C)(t,[{key:"_delete",value:function(){return delete Lu[this.app.options.appId],Promise.resolve()}}]),t}(),Lu={},Mu=[],Fu={},Uu="dataLayer",Vu="gtag",ju=!1;function qu(e,t,n){!function(){var e=[];if(X()&&e.push("This is a browser extension environment."),ne()||e.push("Cookies are not available."),e.length>0){var t=e.map((function(e,t){return"(".concat(t+1,") ").concat(e)})).join(" "),n=yu.create("invalid-analytics-context",{errorInfo:t});ou.warn(n.message)}}();var r,i,a=e.options.appId;if(!a)throw yu.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw yu.create("no-api-key");ou.warn('The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest'+" measurement ID for this Firebase app. Falling back to the measurement ID ".concat(e.options.measurementId)+' provided in the "measurementId" field in the local Firebase config.')}if(null!=Lu[a])throw yu.create("already-exists",{id:a});if(!ju){r=Uu,i=[],Array.isArray(window[r])?i=window[r]:window[r]=i;var o=du(Lu,Mu,Fu,Uu,Vu),s=o.wrappedGtag,u=o.gtagCore;Pu=s,Du=u,ju=!0}return Lu[a]=function(e,t,n,r,i,a,o){return Ru.apply(this,arguments)}(e,Mu,Fu,t,Du,Uu,n),new Ou(e)}function Bu(){return(Bu=
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
e(a)(e(o).mark((function t(n,r,i,a,s){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s||!s.global){e.next=5;break}return n("event",i,a),e.abrupt("return");case 5:return e.next=7,r;case 7:u=e.sent,c=Object.assign(Object.assign({},a),{send_to:u}),n("event",i,c);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Hu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=_t(e,nu);if(n.isInitialized()){var r=n.getImmediate();if(pe(t,n.getOptions()))return r;throw yu.create("already-initialized")}var i=n.initialize({options:t});return i}function Wu(e,t,n,r){e=Se(e),function(e,t,n,r,i){return Bu.apply(this,arguments)}(Pu,Lu[e.app.options.appId],t,n,r).catch((function(e){return ou.error(e)}))}var zu="@firebase/analytics",Ku="0.7.10";kt(new Ne(nu,(function(e,t){var n=t.options;return qu(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),n)}),"PUBLIC")),kt(new Ne("analytics-internal",(function(e){try{var t=e.getProvider(nu).getImmediate();return{logEvent:function(e,n,r){return Wu(t,e,n,r)}}}catch(e){throw yu.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Et(zu,Ku),Et(zu,Ku,"esm2017");x=i("ds8z5"),a=i("bpxeT"),E=i("8MBJY"),C=i("a2hTj"),P=i("hKHmD");var Gu={};Object.defineProperty(Gu,"__esModule",{value:!0}),Gu.default=function(e,t,n){return Yu(e,t,n)};var Qu=function(e){return e&&e.__esModule?e:{default:e}}(i("2mz0K"));function Yu(e,t,n){return(Yu="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=Qu.default(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n||e):i.value}})(e,t,n)}var Xu=i("fVNic");S=i("eYQtU"),N=i("1t1Wn"),A=i("8nrFW"),D=i("2MbLg"),o=i("2TvXO");function Ju(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function $u(){return e(P)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Zu=$u,ec=new ie("auth","Firebase",$u()),tc=new qe("@firebase/auth");function nc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;tc.logLevel<=De.ERROR&&(a=tc).error.apply(a,["Auth (".concat(Tt,"): ").concat(t)].concat(e(A)(r)))}
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
 */function rc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];throw oc.apply(void 0,[t].concat(e(A)(r)))}function ic(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return oc.apply(void 0,[t].concat(e(A)(r)))}function ac(t,n,r){var i=Object.assign(Object.assign({},Zu()),e(P)({},n,r));return new ie("auth","Firebase",i).create(n,{appName:t.name})}function oc(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var a;if("string"!=typeof t){var o,s=r[0],u=e(A)(r.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(A)(u)))}return(a=ec).create.apply(a,[t].concat(e(A)(r)))}function sc(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(!t)throw oc.apply(void 0,[n].concat(e(A)(i)))}function uc(e){var t="INTERNAL ASSERTION FAILED: "+e;throw nc(t),new Error(t)}function cc(e,t){e||uc(t)}
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
 */var lc=new Map;function hc(e){cc(e instanceof Function,"Expected a class definition");var t=lc.get(e);return t?(cc(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,lc.set(e,t),t)}
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
 */function fc(e,t){var n=_t(e,"auth");if(n.isInitialized()){var r=n.getImmediate();if(pe(n.getOptions(),null!=t?t:{}))return r;rc(r,"already-initialized")}return n.initialize({options:t})}
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
function dc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function vc(){return"http:"===pc()||"https:"===pc()}function pc(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
var yc=function(){"use strict";function t(n,r){e(E)(this,t),this.shortDelay=n,this.longDelay=r,cc(r>n,"Short delay should be less than long delay!"),this.isMobile=Y()||J()}return e(C)(t,[{key:"get",value:function(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(vc()||X()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}]),t}();
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
 */function mc(e,t){cc(e.emulator,"Emulator should always be set here");var n=e.emulator.url;return t?"".concat(n).concat(t.startsWith("/")?t.slice(1):t):n}
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
 */var gc,kc=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,null,[{key:"initialize",value:function(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void uc("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void uc("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void uc("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),_c=(gc={},e(P)(gc,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(P)(gc,"MISSING_CUSTOM_TOKEN","internal-error"),e(P)(gc,"INVALID_IDENTIFIER","invalid-email"),e(P)(gc,"MISSING_CONTINUE_URI","internal-error"),e(P)(gc,"INVALID_PASSWORD","wrong-password"),e(P)(gc,"MISSING_PASSWORD","internal-error"),e(P)(gc,"EMAIL_EXISTS","email-already-in-use"),e(P)(gc,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(P)(gc,"INVALID_IDP_RESPONSE","invalid-credential"),e(P)(gc,"INVALID_PENDING_TOKEN","invalid-credential"),e(P)(gc,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(P)(gc,"MISSING_REQ_TYPE","internal-error"),e(P)(gc,"EMAIL_NOT_FOUND","user-not-found"),e(P)(gc,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(P)(gc,"EXPIRED_OOB_CODE","expired-action-code"),e(P)(gc,"INVALID_OOB_CODE","invalid-action-code"),e(P)(gc,"MISSING_OOB_CODE","internal-error"),e(P)(gc,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(P)(gc,"INVALID_ID_TOKEN","invalid-user-token"),e(P)(gc,"TOKEN_EXPIRED","user-token-expired"),e(P)(gc,"USER_NOT_FOUND","user-token-expired"),e(P)(gc,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(P)(gc,"INVALID_CODE","invalid-verification-code"),e(P)(gc,"INVALID_SESSION_INFO","invalid-verification-id"),e(P)(gc,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(P)(gc,"MISSING_SESSION_INFO","missing-verification-id"),e(P)(gc,"SESSION_EXPIRED","code-expired"),e(P)(gc,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(P)(gc,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(P)(gc,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(P)(gc,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(P)(gc,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(P)(gc,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(P)(gc,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(P)(gc,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(P)(gc,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(P)(gc,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(P)(gc,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),gc),wc=new yc(3e4,6e4);function bc(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Ic(e,t,n,r){return Tc.apply(this,arguments)}function Tc(){return Tc=e(a)(e(o).mark((function t(n,r,i,s){var u,c=arguments;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u=c.length>4&&void 0!==c[4]?c[4]:{},t.abrupt("return",xc(n,u,e(a)(e(o).mark((function t(){var a,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},u={},s&&("GET"===r?u=s:a={body:JSON.stringify(s)}),c=me(Object.assign({key:n.config.apiKey},u)).slice(1),e.next=6,n._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),e.abrupt("return",kc.fetch()(Nc(n,n.config.apiHost,i,c),Object.assign({method:r,headers:l,referrerPolicy:"no-referrer"},a)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Tc.apply(this,arguments)}function xc(e,t,n){return Ec.apply(this,arguments)}function Ec(){return(Ec=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d,v;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n._canInitEmulator=!1,a=Object.assign(Object.assign({},_c),r),t.prev=2,s=new Ac(n),t.next=6,Promise.race([i(),s.promise]);case 6:return u=t.sent,s.clearNetworkTimeout(),t.next=10,u.json();case 10:if(!("needConfirmation"in(c=t.sent))){t.next=13;break}throw Rc(n,"account-exists-with-different-credential",c);case 13:if(!u.ok||"errorMessage"in c){t.next=17;break}return t.abrupt("return",c);case 17:if(l=u.ok?c.errorMessage:c.error.message,h=e(N)(l.split(" : "),2),f=h[0],d=h[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Rc(n,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Rc(n,"email-already-in-use",c);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Rc(n,"user-disabled",c);case 29:if(v=a[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!d){t.next=34;break}throw ac(n,v,d);case 34:rc(n,v);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof re)){t.next=41;break}throw t.t0;case 41:rc(n,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Cc(e,t,n,r){return Sc.apply(this,arguments)}function Sc(){return Sc=e(a)(e(o).mark((function t(n,r,i,a){var s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Ic(n,r,i,a,s);case 3:return"mfaPendingCredential"in(u=e.sent)&&rc(n,"multi-factor-auth-required",{_serverResponse:u}),e.abrupt("return",u);case 6:case"end":return e.stop()}}),t)}))),Sc.apply(this,arguments)}function Nc(e,t,n,r){var i="".concat(t).concat(n,"?").concat(r);return e.config.emulator?mc(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Ac=function(){"use strict";function t(n){var r=this;e(E)(this,t),this.auth=n,this.timer=null,this.promise=new Promise((function(e,t){var n=r;r.timer=setTimeout((function(){return t(ic(n.auth,"network-request-failed"))}),wc.get())}))}return e(C)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Rc(e,t,n){var r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);var i=ic(e,t,r);return i.customData._tokenResponse=n,i}function Dc(e,t){return Pc.apply(this,arguments)}function Pc(){return(Pc=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ic(n,"POST","/v1/accounts:delete",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Oc(e,t){return Lc.apply(this,arguments)}function Lc(){return(Lc=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ic(n,"POST","/v1/accounts:lookup",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Mc(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Fc(){return Fc=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.length>1&&void 0!==l[1]&&l[1],i=Se(n),e.next=4,i.getIdToken(r);case 4:return a=e.sent,sc((s=Vc(a))&&s.exp&&s.auth_time&&s.iat,i.auth,"internal-error"),u="object"==typeof s.firebase?s.firebase:void 0,c=null==u?void 0:u.sign_in_provider,e.abrupt("return",{claims:s,token:a,authTime:Mc(Uc(s.auth_time)),issuedAtTime:Mc(Uc(s.iat)),expirationTime:Mc(Uc(s.exp)),signInProvider:c||null,signInSecondFactor:(null==u?void 0:u.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Fc.apply(this,arguments)}function Uc(e){return 1e3*Number(e)}function Vc(t){var n=e(N)(t.split("."),3),r=n[0],i=n[1],a=n[2];if(void 0===r||void 0===i||void 0===a)return nc("JWT malformed, contained fewer than 3 sections"),null;try{var o=W(i);return o?JSON.parse(o):(nc("Failed to decode base64 JWT payload"),null)}catch(e){return nc("Caught error parsing JWT payload as JSON",e),null}}function jc(e,t){return qc.apply(this,arguments)}function qc(){return qc=
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
e(a)(e(o).mark((function t(n,r){var i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",r);case 3:return e.prev=3,e.next=6,r;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof re&&Bc(e.t0))){e.next=15;break}if(n.auth.currentUser!==n){e.next=15;break}return e.next=15,n.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),qc.apply(this,arguments)}function Bc(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Hc=function(){"use strict";function t(n){e(E)(this,t),this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(C)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var n=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),n}this.errorBackoff=3e4;var r=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,r)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var n=this.getInterval(t),r=this;this.timerId=setTimeout(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.iteration();case 2:case"end":return e.stop()}}),t)}))),n)}}},{key:"iteration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.user.getIdToken(!0);case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code&&t.schedule(!0),e.abrupt("return");case 9:t.schedule();case 10:case"end":return e.stop()}}),n,null,[[0,5]])})))()}}]),t}(),Wc=function(){"use strict";function t(n,r){e(E)(this,t),this.createdAt=n,this.lastLoginAt=r,this._initializeTime()}return e(C)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Mc(this.lastLoginAt),this.creationTime=Mc(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function zc(e){return Kc.apply(this,arguments)}function Kc(){return(Kc=
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
e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l,h,f,d,v;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.auth,e.next=4,n.getIdToken();case 4:return a=e.sent,e.next=7,jc(n,Oc(i,{idToken:a}));case 7:sc(null==(s=e.sent)?void 0:s.users.length,i,"internal-error"),u=s.users[0],n._notifyReloadListener(u),c=(null===(r=u.providerUserInfo)||void 0===r?void 0:r.length)?Yc(u.providerUserInfo):[],l=Qc(n.providerData,c),h=n.isAnonymous,f=!(n.email&&u.passwordHash||(null==l?void 0:l.length)),d=!!h&&f,v={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:l,metadata:new Wc(u.createdAt,u.lastLoginAt),isAnonymous:d},Object.assign(n,v);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Gc(){return(Gc=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Se(n),e.next=3,zc(r);case 3:return e.next=5,r.auth._persistUserIfCurrent(r);case 5:r.auth._notifyListenersIfCurrent(r);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Qc(t,n){var r=t.filter((function(e){return!n.some((function(t){return t.providerId===e.providerId}))}));return e(A)(r).concat(e(A)(n))}function Yc(e){return e.map((function(e){var t=e.providerId,n=Ju(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}function Xc(e,t){return Jc.apply(this,arguments)}function Jc(){return(Jc=
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
e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,xc(n,{},e(a)(e(o).mark((function t(){var i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=me({grant_type:"refresh_token",refresh_token:r}).slice(1),a=n.config,s=a.tokenApiHost,u=a.apiKey,c=Nc(n,s,"/v1/token","key=".concat(u)),e.next=5,n._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",kc.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),t)}))));case 2:return i=t.sent,t.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var $c=function(){"use strict";function t(){e(E)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(C)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){sc(e.idToken,"internal-error"),sc(void 0!==e.idToken,"internal-error"),sc(void 0!==e.refreshToken,"internal-error");var t,n,r="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,sc(n=Vc(t),"internal-error"),sc(void 0!==n.exp,"internal-error"),sc(void 0!==n.iat,"internal-error"),Number(n.exp)-Number(n.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}},{key:"getToken",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(sc(!r.accessToken||r.refreshToken,t,"user-token-expired"),n||!r.accessToken||r.isExpired){e.next=3;break}return e.abrupt("return",r.accessToken);case 3:if(!r.refreshToken){e.next=7;break}return e.next=6,r.refresh(t,r.refreshToken);case 6:return e.abrupt("return",r.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xc(t,n);case 2:a=e.sent,s=a.accessToken,u=a.refreshToken,c=a.expiresIn,r.updateTokensAndExpiration(s,u,Number(c));case 7:case"end":return e.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return uc("not implemented")}}],[{key:"fromJSON",value:function(e,n){var r=n.refreshToken,i=n.accessToken,a=n.expirationTime,o=new t;return r&&(sc("string"==typeof r,"internal-error",{appName:e}),o.refreshToken=r),i&&(sc("string"==typeof i,"internal-error",{appName:e}),o.accessToken=i),a&&(sc("number"==typeof a,"internal-error",{appName:e}),o.expirationTime=a),o}}]),t}();
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
 */function Zc(e,t){sc("string"==typeof e||void 0===e,"internal-error",{appName:t})}var el=function(){"use strict";function t(n){e(E)(this,t);var r=n.uid,i=n.auth,a=n.stsTokenManager,o=Ju(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?e(A)(o.providerData):[],this.metadata=new Wc(o.createdAt||void 0,o.lastLoginAt||void 0)}return e(C)(t,[{key:"getIdToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,jc(n,n.stsTokenManager.getToken(n.auth,t));case 2:if(sc(i=e.sent,n.auth,"internal-error"),n.accessToken===i){e.next=9;break}return n.accessToken=i,e.next=8,n.auth._persistUserIfCurrent(n);case 8:n.auth._notifyListenersIfCurrent(n);case 9:return e.abrupt("return",i);case 10:case"end":return e.stop()}}),r)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Fc.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Gc.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(sc(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){sc(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=!1,t.idToken&&t.idToken!==r.stsTokenManager.accessToken&&(r.stsTokenManager.updateFromServerResponse(t),a=!0),!n){e.next=5;break}return e.next=5,zc(r);case 5:return e.next=7,r.auth._persistUserIfCurrent(r);case 7:a&&r.auth._notifyListenersIfCurrent(r);case 8:case"end":return e.stop()}}),i)})))()}},{key:"delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return r=e.sent,e.next=5,jc(t,Dc(t.auth,{idToken:r}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),n)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,n){var r,i,a,o,s,u,c,l,h=null!==(r=n.displayName)&&void 0!==r?r:void 0,f=null!==(i=n.email)&&void 0!==i?i:void 0,d=null!==(a=n.phoneNumber)&&void 0!==a?a:void 0,v=null!==(o=n.photoURL)&&void 0!==o?o:void 0,p=null!==(s=n.tenantId)&&void 0!==s?s:void 0,y=null!==(u=n._redirectEventId)&&void 0!==u?u:void 0,m=null!==(c=n.createdAt)&&void 0!==c?c:void 0,g=null!==(l=n.lastLoginAt)&&void 0!==l?l:void 0,k=n.uid,_=n.emailVerified,w=n.isAnonymous,b=n.providerData,I=n.stsTokenManager;sc(k&&I,e,"internal-error");var T=$c.fromJSON(this.name,I);sc("string"==typeof k,e,"internal-error"),Zc(h,e.name),Zc(f,e.name),sc("boolean"==typeof _,e,"internal-error"),sc("boolean"==typeof w,e,"internal-error"),Zc(d,e.name),Zc(v,e.name),Zc(p,e.name),Zc(y,e.name),Zc(m,e.name),Zc(g,e.name);var x=new t({uid:k,auth:e,email:f,emailVerified:_,displayName:h,isAnonymous:w,photoURL:v,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:g});return b&&Array.isArray(b)&&(x.providerData=b.map((function(e){return Object.assign({},e)}))),y&&(x._redirectEventId=y),x}},{key:"_fromIdTokenResponse",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(a)(e(o).mark((function a(){var s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new $c).updateFromServerResponse(r),u=new t({uid:r.localId,auth:n,stsTokenManager:s,isAnonymous:i}),e.next=5,zc(u);case 5:return e.abrupt("return",u);case 6:case"end":return e.stop()}}),a)})))()}}]),t}(),tl=function(){"use strict";function t(){e(E)(this,t),this.type="NONE",this.storage={}}return e(C)(t,[{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.storage[t]=n;case 1:case"end":return e.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.storage[t],e.abrupt("return",void 0===i?null:i);case 2:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete n.storage[t];case 1:case"end":return e.stop()}}),r)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */tl.type="NONE";var nl=tl;
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
 */function rl(e,t,n){return"firebase:".concat(e,":").concat(t,":").concat(n)}var il=function(){"use strict";function t(n,r,i){e(E)(this,t),this.persistence=n,this.auth=r,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=rl(this.userKey,o.apiKey,s),this.fullPersistenceKey=rl("persistence",o.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(C)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return r=e.sent,e.abrupt("return",r?el._fromJSON(t.auth,r):null);case 4:case"end":return e.stop()}}),n)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getCurrentUser();case 4:return i=e.sent,e.next=7,n.removeCurrentUser();case 7:if(n.persistence=t,!i){e.next=10;break}return e.abrupt("return",n.setCurrentUser(i));case 10:case"end":return e.stop()}}),r)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(a)(e(o).mark((function s(){var u,c,l,h,f,d,v,p,y,m,g,k,_;return e(o).wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(r.length){s.next=2;break}return s.abrupt("return",new t(hc(nl),n,i));case 2:return s.next=4,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",n);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:u=s.sent.filter((function(e){return e})),c=u[0]||hc(nl),l=rl(i,n.config.apiKey,n.name),h=null,f=!0,d=!1,v=void 0,s.prev=9,p=r[Symbol.iterator]();case 11:if(f=(y=p.next()).done){s.next=29;break}return m=y.value,s.prev=13,s.next=16,m._get(l);case 16:if(!(g=s.sent)){s.next=22;break}return k=el._fromJSON(n,g),m!==c&&(h=k),c=m,s.abrupt("break",29);case 22:s.next=26;break;case 24:s.prev=24,s.t0=s.catch(13);case 26:f=!0,s.next=11;break;case 29:s.next=35;break;case 31:s.prev=31,s.t1=s.catch(9),d=!0,v=s.t1;case 35:s.prev=35,s.prev=36,f||null==p.return||p.return();case 38:if(s.prev=38,!d){s.next=41;break}throw v;case 41:return s.finish(38);case 42:return s.finish(35);case 43:if(_=u.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&_.length){s.next=46;break}return s.abrupt("return",new t(c,n,i));case 46:if(c=_[0],!h){s.next=50;break}return s.next=50,c._set(l,h.toJSON());case 50:return s.next=52,Promise.all(r.map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n===c){e.next=8;break}return e.prev=1,e.next=4,n._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return s.abrupt("return",new t(c,n,i));case 53:case"end":return s.stop()}}),s,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function al(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(cl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ol(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hl(t))return"Blackberry";if(fl(t))return"Webos";if(sl(t))return"Safari";if((t.includes("chrome/")||ul(t))&&!t.includes("edge/"))return"Chrome";if(ll(t))return"Android";var n=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==n?void 0:n.length)?n[1]:"Other"}function ol(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/firefox\//i.test(e)}function sl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ul(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/crios\//i.test(e)}function cl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/iemobile/i.test(e)}function ll(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/android/i.test(e)}function hl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/blackberry/i.test(e)}function fl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/webos/i.test(e)}function dl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return/iphone|ipad|ipod/i.test(e)}function vl(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return dl(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function pl(){return $()&&10===document.documentMode}function yl(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q();return dl(e)||ll(e)||fl(e)||hl(e)||/windows phone/i.test(e)||cl(e)}
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
function ml(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=al(Q());break;case"Worker":t="".concat(al(Q()),"-").concat(e);break;default:t=e}var r=n.length?n.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Tt,"/").concat(r)}
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
 */var gl=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.queue=[]}return e(C)(t,[{key:"pushCallback",value:function(e,t){var n=this,r=function(t){return new Promise((function(n,r){try{n(e(t))}catch(e){r(e)}}))};r.onAbort=t,this.queue.push(r);var i=this.queue.length-1;return function(){n.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h,f,d,v,p,y,m,g;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:a=[],e.prev=4,s=!0,u=!1,c=void 0,e.prev=6,l=n.queue[Symbol.iterator]();case 8:if(s=(h=l.next()).done){e.next=16;break}return f=h.value,e.next=12,f(t);case 12:f.onAbort&&a.push(f.onAbort);case 13:s=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),u=!0,c=e.t0;case 22:e.prev=22,e.prev=23,s||null==l.return||l.return();case 25:if(e.prev=25,!u){e.next=28;break}throw c;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),a.reverse(),d=!0,v=!1,p=void 0,e.prev=36,y=a[Symbol.iterator]();!(d=(m=y.next()).done);d=!0){g=m.value;try{g()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),v=!0,p=e.t2;case 44:e.prev=44,e.prev=45,d||null==y.return||y.return();case 47:if(e.prev=47,!v){e.next=50;break}throw p;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw n.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=e.t1)||void 0===i?void 0:i.message});case 53:case"end":return e.stop()}}),r,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),kl=function(){"use strict";function t(n,r,i){e(E)(this,t),this.app=n,this.heartbeatServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wl(this),this.idTokenSubscription=new wl(this),this.beforeStateQueue=new gl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ec,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=i.sdkClientVersion}return e(C)(t,[{key:"_initializeWithPersistence",value:function(t,n){n&&(this._popupRedirectResolver=hc(n));var r=this;return this._initializationPromise=this.queue(e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,il.create(r,t);case 5:if(r.persistenceManager=e.sent,!r._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(a=r._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,r._popupRedirectResolver._initialize(r);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,r.initializeCurrentUser(n);case 18:if(r.lastNotifiedUid=(null===(s=r.currentUser)||void 0===s?void 0:s.uid)||null,!r._deleted){e.next=21;break}return e.abrupt("return");case 21:r._isInitialized=!0;case 22:case"end":return e.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(r=e.sent,t.currentUser||r){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!r||t.currentUser.uid!==r.uid){e.next=12;break}return t._currentUser._assign(r),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(r,!0);case 14:case"end":return e.stop()}}),n)})))()}},{key:"initializeCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,n.assertedPersistence.getCurrentUser();case 3:if(a=e.sent,s=a,u=!1,!t||!n.config.authDomain){e.next=15;break}return e.next=9,n.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=n.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==s?void 0:s._redirectEventId,e.next=13,n.tryRedirectSignIn(t);case 13:h=e.sent,c&&c!==l||!(null==h?void 0:h.user)||(s=h.user,u=!0);case 15:if(s){e.next=17;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 17:if(s._redirectEventId){e.next=33;break}if(!u){e.next=28;break}return e.prev=19,e.next=22,n.beforeStateQueue.runMiddleware(s);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),s=a,n._popupRedirectResolver._overrideRedirectResult(n,(function(){return Promise.reject(e.t0)}));case 28:if(!s){e.next=32;break}return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 32:return e.abrupt("return",n.directlySetCurrentUser(null));case 33:return sc(n._popupRedirectResolver,n,"argument-error"),e.next=36,n.getOrInitRedirectPersistenceManager();case 36:if(!n.redirectUser||n.redirectUser._redirectEventId!==s._redirectEventId){e.next=38;break}return e.abrupt("return",n.directlySetCurrentUser(s));case 38:return e.abrupt("return",n.reloadAndSetCurrentUserOrClear(s));case 39:case"end":return e.stop()}}),r,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=null,e.prev=1,e.next=4,n._popupRedirectResolver._completeRedirectFn(n,t,!0);case 4:i=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,n._setRedirectUser(null);case 11:return e.abrupt("return",i);case 12:case"end":return e.stop()}}),r,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,zc(t);case 3:e.next=9;break;case 5:if(e.prev=5,e.t0=e.catch(0),"auth/network-request-failed"===e.t0.code){e.next=9;break}return e.abrupt("return",n.directlySetCurrentUser(null));case 9:return e.abrupt("return",n.directlySetCurrentUser(t));case 10:case"end":return e.stop()}}),r,null,[[0,5]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),n)})))()}},{key:"updateCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=t?Se(t):null)&&sc(i.auth.config.apiKey===n.config.apiKey,n,"invalid-user-token"),e.abrupt("return",n._updateCurrentUser(i&&i._clone(n)));case 3:case"end":return e.stop()}}),r)})))()}},{key:"_updateCurrentUser",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!r._deleted){i.next=2;break}return i.abrupt("return");case 2:if(t&&sc(r.tenantId===t.tenantId,r,"tenant-id-mismatch"),n){i.next=6;break}return i.next=6,r.beforeStateQueue.runMiddleware(t);case 6:return i.abrupt("return",r.queue(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.directlySetCurrentUser(t);case 2:r.notifyAuthListeners();case 3:case"end":return e.stop()}}),n)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),n)})))()}},{key:"setPersistence",value:function(t){var n=this;return this.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.assertedPersistence.setPersistence(hc(t));case 2:case"end":return e.stop()}}),r)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ie("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.getOrInitRedirectPersistenceManager(n);case 2:return a=e.sent,e.abrupt("return",null===t?a.removeCurrentUser():a.setCurrentUser(t));case 4:case"end":return e.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.redirectPersistenceManager){e.next=9;break}return sc(i=t&&hc(t)||n._popupRedirectResolver,n,"argument-error"),e.next=5,il.create(n,[hc(i._redirectPersistence)],"redirectUser");case 5:return n.redirectPersistenceManager=e.sent,e.next=8,n.redirectPersistenceManager.getCurrentUser();case 8:n.redirectUser=e.sent;case 9:return e.abrupt("return",n.redirectPersistenceManager);case 10:case"end":return e.stop()}}),r)})))()}},{key:"_redirectUserForId",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!n._isInitialized){r.next=4;break}return r.next=4,n.queue(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(i=n._currentUser)||void 0===i?void 0:i._redirectEventId)!==t){r.next=6;break}return r.abrupt("return",n._currentUser);case 6:if((null===(s=n.redirectUser)||void 0===s?void 0:s._redirectEventId)!==t){r.next=8;break}return r.abrupt("return",n.redirectUser);case 8:return r.abrupt("return",null);case 9:case"end":return r.stop()}}),r)})))()}},{key:"_persistUserIfCurrent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t!==n.currentUser){r.next=2;break}return r.abrupt("return",n.queue(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),r)})))));case 2:case"end":return r.stop()}}),r)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,n,r){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return sc(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.currentUser&&n.currentUser!==t&&(n._currentUser._stopProactiveRefresh(),t&&n.isProactiveRefreshEnabled&&t._startProactiveRefresh()),n.currentUser=t,!t){e.next=7;break}return e.next=5,n.assertedPersistence.setCurrentUser(t);case 5:e.next=9;break;case 7:return e.next=9,n.assertedPersistence.removeCurrentUser();case 9:case"end":return e.stop()}}),r)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return sc(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ml(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=e(P)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(i["X-Firebase-gmpid"]=t.app.options.appId),n.next=5,null===(r=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===r?void 0:r.getHeartbeatsHeader();case 5:return(a=n.sent)&&(i["X-Firebase-Client"]=a),n.abrupt("return",i);case 8:case"end":return n.stop()}}),n)})))()}}]),t}();
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
 */function _l(e){return Se(e)}var wl=function(){"use strict";function t(n){var r,i,a=this;e(E)(this,t),this.auth=n,this.observer=null,this.addObserver=(i=new we((function(e){return a.observer=e}),r)).subscribe.bind(i)}return e(C)(t,[{key:"next",get:function(){return sc(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
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
var bl=function(){"use strict";function t(n,r){e(E)(this,t),this.providerId=n,this.signInMethod=r}return e(C)(t,[{key:"toJSON",value:function(){return uc("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return uc("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return uc("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return uc("not implemented")}}]),t}();function Il(e,t){return Tl.apply(this,arguments)}function Tl(){return(Tl=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ic(n,"POST","/v1/accounts:update",r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xl(e,t){return El.apply(this,arguments)}function El(){return(El=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithPassword",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Cl(e,t){return Sl.apply(this,arguments)}function Sl(){return(Sl=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithEmailLink",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nl(e,t){return Al.apply(this,arguments)}function Al(){return(Al=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithEmailLink",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Rl=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(E)(this,r),(o=n.call(this,"password",a))._email=t,o._password=i,o._tenantId=s,o}return e(C)(r,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",xl(t,{returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",Cl(t,{email:n._email,oobCode:n._password}));case 5:rc(t,"internal-error");case 6:case"end":return e.stop()}}),r)})))()}},{key:"_linkToIdToken",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",Il(t,{idToken:n,returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",Nl(t,{idToken:n,email:r._email,oobCode:r._password}));case 5:rc(t,"internal-error");case 6:case"end":return e.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new r(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new r(e,t,"emailLink",n)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),r}(bl);function Dl(e,t){return Pl.apply(this,arguments)}function Pl(){return(Pl=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithIdp",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Ol=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t;return e(E)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(C)(r,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Dl(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var n=this.buildRequest();return n.idToken=t,Dl(e,n)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Dl(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=me(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new r(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rc("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,n=t.providerId,i=t.signInMethod,a=Ju(t,["providerId","signInMethod"]);if(!n||!i)return null;var o=new r(n,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),r}(bl);function Ll(e,t){return Ml.apply(this,arguments)}function Ml(){return(Ml=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ic(n,"POST","/v1/accounts:sendVerificationCode",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fl(){return(Fl=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithPhoneNumber",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Ul(){return(Ul=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Cc(n,"POST","/v1/accounts:signInWithPhoneNumber",bc(n,r));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Rc(n,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Vl=e(P)({},"USER_NOT_FOUND","user-not-found");function jl(){return(jl=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},r),{operation:"REAUTH"}),e.abrupt("return",Cc(n,"POST","/v1/accounts:signInWithPhoneNumber",bc(n,i),Vl));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ql=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"phone","phone")).params=t,i}return e(C)(r,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Fl.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Ul.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return jl.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,n=e.phoneNumber,r=e.verificationId,i=e.verificationCode;return t&&n?{temporaryProof:t,phoneNumber:n}:{sessionInfo:r,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new r({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new r({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,n=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return n||t||i||a?new r({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:a}):null}}]),r}(bl);
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
 */var Bl=function(){"use strict";function t(n){var r,i,a,o,s,u;e(E)(this,t);var c=ge(ke(n)),l=null!==(r=c.apiKey)&&void 0!==r?r:null,h=null!==(i=c.oobCode)&&void 0!==i?i:null,f=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);sc(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return e(C)(t,null,[{key:"parseLink",value:function(e){var n=function(e){var t=ge(ke(e)).link,n=t?ge(ke(t)).deep_link_id:null,r=ge(ke(e)).deep_link_id;return(r?ge(ke(r)).link:null)||r||n||t||e}(e);try{return new t(n)}catch(e){return null}}}]),t}();
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
var Hl=function(){"use strict";function t(){e(E)(this,t),this.providerId=t.PROVIDER_ID}return e(C)(t,null,[{key:"credential",value:function(e,t){return Rl._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var n=Bl.parseLink(t);return sc(n,"argument-error"),Rl._fromEmailAndCode(e,n.code,n.tenantId)}}]),t}();Hl.PROVIDER_ID="password",Hl.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Hl.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Wl=function(){"use strict";function t(n){e(E)(this,t),this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}return e(C)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),zl=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t;return e(E)(this,r),(t=n.call.apply(n,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(C)(r,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(A)(this.scopes)}}]),r}(Wl),Kl=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.call(this,"facebook.com")}return e(C)(r,null,[{key:"credential",value:function(e){return Ol._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zl);
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
 */Kl.FACEBOOK_SIGN_IN_METHOD="facebook.com",Kl.PROVIDER_ID="facebook.com";
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
var Gl=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t;return e(E)(this,r),(t=n.call(this,"google.com")).addScope("profile"),t}return e(C)(r,null,[{key:"credential",value:function(e,t){return Ol._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthIdToken,i=t.oauthAccessToken;if(!n&&!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zl);Gl.GOOGLE_SIGN_IN_METHOD="google.com",Gl.PROVIDER_ID="google.com";
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
var Ql=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.call(this,"github.com")}return e(C)(r,null,[{key:"credential",value:function(e){return Ol._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return r.credential(t.oauthAccessToken)}catch(e){return null}}}]),r}(zl);Ql.GITHUB_SIGN_IN_METHOD="github.com",Ql.PROVIDER_ID="github.com";
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
var Yl=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.call(this,"twitter.com")}return e(C)(r,null,[{key:"credential",value:function(e,t){return Ol._fromParams({providerId:r.PROVIDER_ID,signInMethod:r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return r.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return r.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.oauthAccessToken,i=t.oauthTokenSecret;if(!n||!i)return null;try{return r.credential(n,i)}catch(e){return null}}}]),r}(zl);function Xl(e,t){return Jl.apply(this,arguments)}function Jl(){return(Jl=
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
e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Cc(n,"POST","/v1/accounts:signUp",bc(n,r)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Yl.TWITTER_SIGN_IN_METHOD="twitter.com",Yl.PROVIDER_ID="twitter.com";var $l=function(){"use strict";function t(n){e(E)(this,t),this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}return e(C)(t,null,[{key:"_fromIdTokenResponse",value:function(n,r,i){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(a)(e(o).mark((function a(){var u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,el._fromIdTokenResponse(n,i,s);case 2:return u=e.sent,c=Zl(i),l=new t({user:u,providerId:c,_tokenResponse:i,operationType:r}),e.abrupt("return",l);case 6:case"end":return e.stop()}}),a)})))()}},{key:"_forOperation",value:function(n,r,i){return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._updateTokensIfNecessary(i,!0);case 2:return s=Zl(i),e.abrupt("return",new t({user:n,providerId:s,_tokenResponse:i,operationType:r}));case 4:case"end":return e.stop()}}),a)})))()}}]),t}();function Zl(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var eh=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o){var s,u;return e(E)(this,r),(s=n.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(e(x)(s),r.prototype),s.customData={appName:t.name,tenantId:null!==(u=t.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return e(C)(r,null,[{key:"_fromErrorAndOperation",value:function(e,t,n,i){return new r(e,t,n,i)}}]),r}(re);function th(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((function(n){if("auth/multi-factor-auth-required"===n.code)throw eh._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */function nh(e,t){return rh.apply(this,arguments)}function rh(){return rh=e(a)(e(o).mark((function t(n,r){var i,a,s=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=s.length>2&&void 0!==s[2]&&s[2],e.t0=jc,e.t1=n,e.t2=r,e.t3=n.auth,e.next=7,n.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",$l._forOperation(n,"link",a));case 14:case"end":return e.stop()}}),t)}))),rh.apply(this,arguments)}function ih(e,t){return ah.apply(this,arguments)}function ah(){return ah=
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
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],a=n.auth,s="reauthenticate",e.prev=3,e.next=6,jc(n,th(a,s,r,n),i);case 6:return sc((u=e.sent).idToken,a,"internal-error"),sc(c=Vc(u.idToken),a,"internal-error"),l=c.sub,sc(n.uid===l,a,"user-mismatch"),e.abrupt("return",$l._forOperation(n,s,u));case 15:throw e.prev=15,e.t0=e.catch(3),"auth/user-not-found"===(null===e.t0||void 0===e.t0?void 0:e.t0.code)&&rc(a,"user-mismatch"),e.t0;case 19:case"end":return e.stop()}}),t,null,[[3,15]])}))),ah.apply(this,arguments)}function oh(e,t){return sh.apply(this,arguments)}function sh(){return sh=
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
e(a)(e(o).mark((function t(n,r){var i,a,s,u,c=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,th(n,a,r);case 4:return s=e.sent,e.next=7,$l._fromIdTokenResponse(n,a,s);case 7:if(u=e.sent,i){e.next=11;break}return e.next=11,n._updateCurrentUser(u.user);case 11:return e.abrupt("return",u);case 12:case"end":return e.stop()}}),t)}))),sh.apply(this,arguments)}function uh(e,t){return ch.apply(this,arguments)}function ch(){return(ch=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",oh(_l(n),r));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function lh(e,t,n){return hh.apply(this,arguments)}function hh(){return(hh=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=_l(n),e.next=3,Xl(a,{returnSecureToken:!0,email:r,password:i});case 3:return s=e.sent,e.next=6,$l._fromIdTokenResponse(a,"signIn",s);case 6:return u=e.sent,e.next=9,a._updateCurrentUser(u.user);case 9:return e.abrupt("return",u);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fh(e,t,n){return uh(Se(e),Hl.credential(t,n))}
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
function dh(e,t){return Ic(e,"POST","/v2/accounts/mfaEnrollment:start",bc(e,t))}new WeakMap;var vh="__sak",ph=function(){"use strict";function t(n,r){e(E)(this,t),this.storageRetriever=n,this.type=r}return e(C)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(vh,"1"),this.storage.removeItem(vh),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var yh=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){var t,i;return e(E)(this,r),(t=n.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,n){return t.onStorageEvent(e,n)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(sl(i=Q())||dl(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=yl(),t._shouldAllowMigration=!0,t}return e(C)(r,[{key:"forAllChangedKeys",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;if(e.key){var r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(r);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}var a=function(){var e=n.storage.getItem(r);(t||n.localCache[r]!==e)&&n.notifyListeners(r,e)},o=this.storage.getItem(r);pl()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,n){s.notifyListeners(e,n)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,n,r){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,n){var i=this,s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Gu)(e(Xu)(r.prototype),"_set",i).call(s,t,n);case 2:s.localCache[t]=JSON.stringify(n);case 3:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){var s;return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Gu)(e(Xu)(r.prototype),"_get",n).call(i,t);case 2:return s=a.sent,i.localCache[t]=JSON.stringify(s),a.abrupt("return",s);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(t){var n=this,i=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e(Gu)(e(Xu)(r.prototype),"_remove",n).call(i,t);case 2:delete i.localCache[t];case 3:case"end":return a.stop()}}),a)})))()}}]),r}(ph);yh.type="LOCAL";var mh=yh,gh=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(C)(r,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),r}(ph);
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
 */gh.type="SESSION";var kh=gh;
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
 */function _h(t){return Promise.all(t.map((n=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n;case 3:return r=e.sent,e.abrupt("return",{fulfilled:!0,value:r});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return n.apply(this,arguments)})));var n}
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
 */var wh=function(){"use strict";function t(n){e(E)(this,t),this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(C)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,s,u,c,l,h,f,d;return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(s=(i=t).data,u=s.eventId,c=s.eventType,l=s.data,null==(h=n.handlersMap[c])?void 0:h.size){r.next=5;break}return r.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:u,eventType:c}),f=Array.from(h).map(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",n(i.origin,l));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.next=9,_h(f);case 9:d=r.sent,i.ports[0].postMessage({status:"done",eventId:u,eventType:c,response:d});case 11:case"end":return r.stop()}}),r)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var n=this.receivers.find((function(t){return t.isListeningto(e)}));if(n)return n;var r=new t(e);return this.receivers.push(r),r}}]),t}();
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
function bh(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n="",r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */wh.receivers=[];var Ih=function(){"use strict";function t(n){e(E)(this,t),this.target=n,this.handlers=new Set}return e(C)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return e(a)(e(o).mark((function a(){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,a){var o=bh("",20);s.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),r);c={messageChannel:s,onMessage:function(t){var n=t;if(n.data.eventId===o)switch(n.data.status){case"ack":clearTimeout(l),u=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(u),e(n.data.response);break;default:clearTimeout(l),clearTimeout(u),a(new Error("invalid_response"))}}},i.handlers.add(c),s.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:t,eventId:o,data:n},[s.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return e.stop()}}),a)})))()}}]),t}();
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
 */function Th(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function xh(){return void 0!==Th().WorkerGlobalScope&&"function"==typeof Th().importScripts}function Eh(){return Ch.apply(this,arguments)}function Ch(){return(Ch=e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return n=e.sent,e.abrupt("return",n.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Sh="firebaseLocalStorageDb",Nh="firebaseLocalStorage",Ah="fbase_key",Rh=function(){"use strict";function t(n){e(E)(this,t),this.request=n}return e(C)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){var r=e;e.request.addEventListener("success",(function(){t(r.request.result)})),e.request.addEventListener("error",(function(){n(r.request.error)}))}))}}]),t}();function Dh(e,t){return e.transaction([Nh],t?"readwrite":"readonly").objectStore(Nh)}function Ph(){var e=indexedDB.deleteDatabase(Sh);return new Rh(e).toPromise()}function Oh(){var t=indexedDB.open(Sh,1);return new Promise((function(n,r){t.addEventListener("error",(function(){r(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Nh,{keyPath:Ah})}catch(e){r(e)}})),t.addEventListener("success",e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=t.result).objectStoreNames.contains(Nh)){e.next=12;break}return i.close(),e.next=5,Ph();case 5:return e.t0=n,e.next=8,Oh();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:n(i);case 13:case"end":return e.stop()}}),r)}))))}))}function Lh(e,t,n){return Mh.apply(this,arguments)}function Mh(){return(Mh=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Dh(n,!0).put((a={},e(P)(a,Ah,r),e(P)(a,"value",i),a)),t.abrupt("return",new Rh(s).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Fh(e,t){return Uh.apply(this,arguments)}function Uh(){return(Uh=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Dh(n,!1).get(r),e.next=3,new Rh(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Vh(e,t){var n=Dh(e,!0).delete(t);return new Rh(n).toPromise()}var jh=function(){"use strict";function t(){e(E)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(C)(t,[{key:"_openDb",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Oh();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),n)})))()}},{key:"_withRetries",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:return e.prev=2,e.next=5,n._openDb();case 5:return a=e.sent,e.next=8,t(a);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(i++>3)){e.next=15;break}throw e.t0;case 15:n.db&&(n.db.close(),n.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),r,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",xh()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),n)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.receiver=wh._getInstance(xh()?self:null),t.receiver._subscribe("keyChanged",function(){var n=e(a)(e(o).mark((function n(r,i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return a=e.sent,e.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return e.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()}},{key:"initializeSender",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Eh();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ih(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(a=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(r=a[0])||void 0===r?void 0:r.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),n)})))()}},{key:"notifyServiceWorker",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.sender&&n.activeServiceWorker&&(r=void 0,((null===(r=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===r?void 0:r.controller)||null)===n.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,n.sender._send("keyChanged",{key:t},n.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var r}),r,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(a)(e(o).mark((function t(){var n;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Oh();case 5:return n=e.sent,e.next=8,Lh(n,vh,"1");case 8:return e.next=10,Vh(n,vh);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,n.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),r,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",r._withPendingWrite(e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Lh(e,t,n)}));case 2:return r.localCache[t]=n,e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Fh(e,t)}));case 2:return i=e.sent,n.localCache[t]=i,e.abrupt("return",i);case 5:case"end":return e.stop()}}),r)})))()}},{key:"_remove",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",n._withPendingWrite(e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Vh(e,t)}));case 2:return delete n.localCache[t],e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),r)})))));case 1:case"end":return r.stop()}}),r)})))()}},{key:"_poll",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r,i,a,s,u,c,l,h,f,d,v,p,y,m,g,k,_;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Dh(e,!1).getAll();return new Rh(t).toPromise()}));case 2:if(r=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(i=[],a=new Set,s=!0,u=!1,c=void 0,e.prev=10,l=r[Symbol.iterator]();!(s=(h=l.next()).done);s=!0)f=h.value,d=f.fbase_key,v=f.value,a.add(d),JSON.stringify(t.localCache[d])!==JSON.stringify(v)&&(t.notifyListeners(d,v),i.push(d));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),u=!0,c=e.t0;case 18:e.prev=18,e.prev=19,s||null==l.return||l.return();case 21:if(e.prev=21,!u){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(p=!0,y=!1,m=void 0,e.prev=27,g=Object.keys(t.localCache)[Symbol.iterator]();!(p=(k=g.next()).done);p=!0)_=k.value,t.localCache[_]&&!a.has(_)&&(t.notifyListeners(_,null),i.push(_));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),y=!0,m=e.t1;case 35:e.prev=35,e.prev=36,p||null==g.return||g.return();case 38:if(e.prev=38,!y){e.next=41;break}throw m;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",i);case 44:case"end":return e.stop()}}),n,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var n=this.listeners[e],r=!0,i=!1,a=void 0;if(n)try{for(var o,s=Array.from(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),n)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();jh.type="LOCAL";var qh=jh;
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
 */function Bh(e,t){return Ic(e,"POST","/v2/accounts/mfaSignIn:start",bc(e,t))}function Hh(e){return new Promise((function(t,n){var r,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ic("internal-error");t.customData=e,n(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==i?i:document).appendChild(a)}))}function Wh(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Wh("rcb"),new yc(3e4,6e4);var zh="recaptcha";
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
 */function Kh(e,t,n){return Gh.apply(this,arguments)}function Gh(){return(Gh=e(a)(e(o).mark((function t(n,r,i){var a,s,u,c,l,h,f,d;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(s=e.sent,e.prev=4,sc("string"==typeof s,n,"argument-error"),sc(i.type===zh,n,"argument-error"),!("session"in(u="string"==typeof r?{phoneNumber:r}:r))){e.next=28;break}if(c=u.session,!("phoneNumber"in u)){e.next=19;break}return sc("enroll"===c.type,n,"internal-error"),e.next=15,dh(n,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:u.phoneNumber,recaptchaToken:s}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return sc("signin"===c.type,n,"internal-error"),sc(h=(null===(a=u.multiFactorHint)||void 0===a?void 0:a.uid)||u.multiFactorUid,n,"missing-multi-factor-info"),e.next=24,Bh(n,{mfaPendingCredential:c.credential,mfaEnrollmentId:h,phoneSignInInfo:{recaptchaToken:s}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Ll(n,{phoneNumber:u.phoneNumber,recaptchaToken:s});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Qh=function(){"use strict";function t(n){e(E)(this,t),this.providerId=t.PROVIDER_ID,this.auth=_l(n)}return e(C)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Kh(this.auth,e,Se(t))}}],[{key:"credential",value:function(e,t){return ql._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var n=e;return t.credentialFromTaggedObject(n)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var n=t.phoneNumber,r=t.temporaryProof;return n&&r?ql._fromTokenResponse(n,r):null}}]),t}();
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
 */
function Yh(e,t){return t?hc(t):(sc(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Qh.PROVIDER_ID="phone",Qh.PHONE_SIGN_IN_METHOD="phone";var Xh=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"custom","custom")).params=t,i}return e(C)(r,[{key:"_getIdTokenResponse",value:function(e){return Dl(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Dl(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Dl(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),r}(bl);function Jh(e){return oh(e.auth,new Xh(e),e.bypassAuthState)}function $h(e){var t=e.auth,n=e.user;return sc(n,t,"internal-error"),ih(n,new Xh(e),e.bypassAuthState)}function Zh(e){return ef.apply(this,arguments)}function ef(){return(ef=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.auth,sc(i=n.user,r,"internal-error"),e.abrupt("return",nh(i,new Xh(n),n.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var tf=function(){"use strict";function t(n,r,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(E)(this,t),this.auth=n,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}return e(C)(t,[{key:"execute",value:function(){var t,n=this;return new Promise((t=e(a)(e(o).mark((function t(r,i){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.pendingPromise={resolve:r,reject:i},e.prev=1,e.next=4,n.resolver._initialize(n.auth);case 4:return n.eventManager=e.sent,e.next=7,n.onExecution();case 7:n.eventManager.registerConsumer(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),n.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,n){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a,s,u,c,l,h;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.urlResponse,a=t.sessionId,s=t.postBody,u=t.tenantId,c=t.error,l=t.type,!c){e.next=4;break}return n.reject(c),e.abrupt("return");case 4:return h={auth:n.auth,requestUri:i,sessionId:a,tenantId:u||void 0,postBody:s||void 0,user:n.user,bypassAuthState:n.bypassAuthState},e.prev=5,e.t0=n,e.next=9,n.getIdpTask(l)(h);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),n.reject(e.t2);case 16:case"end":return e.stop()}}),r,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jh;case"linkViaPopup":case"linkViaRedirect":return Zh;case"reauthViaPopup":case"reauthViaRedirect":return $h;default:rc(this.auth,"internal-error")}}},{key:"resolve",value:function(e){cc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){cc(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),nf=new yc(2e3,1e4);
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
 */var rf=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o,s){var u;return e(E)(this,r),(u=n.call(this,t,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,r.currentPopupAction&&r.currentPopupAction.cancel(),r.currentPopupAction=e(x)(u),u}return e(C)(r,[{key:"executeNotNull",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return sc(r=e.sent,t.auth,"internal-error"),e.abrupt("return",r);case 5:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cc(1===t.filter.length,"Popup operations only handle one event"),r=bh(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],r);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=r,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(ic(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),n)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ic(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,r.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var n,r;if(null===(r=null===(n=e.authWindow)||void 0===n?void 0:n.window)||void 0===r?void 0:r.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ic(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,nf.get())};t()}}]),r}(tf);rf.currentPopupAction=null;
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
var af=new Map,of=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(E)(this,r),(a=n.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return e(C)(r,[{key:"execute",value:function(){var t=this,n=this;return e(a)(e(o).mark((function i(){var a,s;return e(o).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=af.get(n.auth._key())){i.next=21;break}return i.prev=2,i.next=5,sf(n.resolver,n.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,e(Gu)(e(Xu)(r.prototype),"execute",t).call(n);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:s=i.t0,a=function(){return Promise.resolve(s)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:af.set(n.auth._key(),a);case 21:return n.bypassAuthState||af.set(n.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var n=this,i=this,s=function(){return e(Gu)(e(Xu)(r.prototype),"onAuthEvent",n)};return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",s().call(i,t));case 4:if("unknown"!==t.type){e.next=7;break}return i.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,i.auth._redirectUserForId(t.eventId);case 10:if(!(r=e.sent)){e.next=16;break}return i.user=r,e.abrupt("return",s().call(i,t));case 16:i.resolve(null);case 17:case"end":return e.stop()}}),n)})))()}},{key:"onExecution",value:function(){return e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),r}(tf);function sf(e,t){return uf.apply(this,arguments)}function uf(){return(uf=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=hf(r),a=lf(n),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,s="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",s);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function cf(e,t){af.set(e._key(),t)}function lf(e){return hc(e._redirectPersistence)}function hf(e){return rl("pendingRedirect",e.config.apiKey,e.name)}
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
 */function ff(e,t){return df.apply(this,arguments)}function df(){return df=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=_l(n),s=Yh(a,r),u=new of(a,s,i),e.next=6,u.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,r);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),t)}))),df.apply(this,arguments)}
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
var vf=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(C)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var n=!1;return this.consumers.forEach((function(r){t.isEventForConsumer(e,r)&&(n=!0,t.sendToConsumer(e,r),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yf(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}},{key:"sendToConsumer",value:function(e,t){var n;if(e.error&&!yf(e)){var r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ic(this.auth,r))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(pf(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(pf(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function pf(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function yf(e){var t=e.type,n=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==n?void 0:n.code)}function mf(e){return gf.apply(this,arguments)}function gf(){return gf=
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
e(a)(e(o).mark((function t(n){var r,i=arguments;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Ic(n,"GET","/v1/projects",r));case 2:case"end":return e.stop()}}),t)}))),gf.apply(this,arguments)}
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
 */var kf=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_f=/^https?/;function wf(){return(wf=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,mf(n);case 4:r=e.sent.authorizedDomains,i=!0,a=!1,s=void 0,e.prev=6,u=r[Symbol.iterator]();case 8:if(i=(c=u.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!bf(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,s=e.t1;case 26:e.prev=26,e.prev=27,i||null==u.return||u.return();case 29:if(e.prev=29,!a){e.next=32;break}throw s;case 32:return e.finish(29);case 33:return e.finish(26);case 34:rc(n,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function bf(e){var t=dc(),n=new URL(t),r=n.protocol,i=n.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===r&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===r&&a.hostname===i}if(!_f.test(r))return!1;if(kf.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var If=new yc(3e4,6e4);function Tf(){var t=Th().___jsl,n=!0,r=!1,i=void 0;if(null==t?void 0:t.H)try{for(var a,o=Object.keys(t.H)[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(A)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}}var xf=null;function Ef(e){return xf=xf||function(e){return new Promise((function(t,n){var r,i,a;function o(){Tf(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Tf(),n(ic(e,"network-request-failed"))},timeout:If.get()})}if(null===(i=null===(r=Th().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Th().gapi)||void 0===a?void 0:a.load)){var s=Wh("iframefcb");return Th()[s]=function(){gapi.load?o():n(ic(e,"network-request-failed"))},Hh("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return n(e)}))}o()}})).catch((function(e){throw xf=null,e}))}(e),xf}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Cf=new yc(5e3,15e3),Sf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Af(e){var t=e.config;sc(t.authDomain,e,"auth-domain-config-required");var n=t.emulator?mc(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),r={apiKey:t.apiKey,appName:e.name,v:Tt},i=Nf.get(e.config.apiHost);i&&(r.eid=i);var a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),"".concat(n,"?").concat(me(r).slice(1))}function Rf(e){return Df.apply(this,arguments)}function Df(){return Df=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ef(n);case 2:return r=t.sent,sc(i=Th().gapi,n,"internal-error"),t.abrupt("return",r.open({where:document.body,url:Af(n),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sf,dontclear:!0},(function(t){return new Promise((r=e(a)(e(o).mark((function r(i,a){var s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=function(){Th().clearTimeout(u),i(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:s=ic(n,"network-request-failed"),u=Th().setTimeout((function(){a(s)}),Cf.get()),t.ping(c).then(c,(function(){a(s)}));case 7:case"end":return e.stop()}}),r)}))),function(e,t){return r.apply(this,arguments)}));var r})));case 6:case"end":return t.stop()}}),t)}))),Df.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */var Pf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Of="_blank",Lf="http://localhost",Mf=function(){"use strict";function t(n){e(E)(this,t),this.window=n,this.associatedEvent=null}return e(C)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Ff(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},Pf),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Q().toLowerCase();r&&(u=ul(l)?Of:r),ol(l)&&(n=n||Lf,c.scrollbars="yes");var h=Object.entries(c).reduce((function(t,n){var r=e(N)(n,2),i=r[0],a=r[1];return"".concat(t).concat(i,"=").concat(a,",")}),"");if(vl(l)&&"_self"!==u)return Uf(n||"",u),new Mf(null);var f=window.open(n||"",u,h);sc(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Mf(f)}function Uf(e,t){var n=document.createElement("a");n.href=e,n.target=t;var r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */var Vf="__/auth/handler",jf="emulator/auth/handler";function qf(t,n,r,i,a,o){sc(t.config.authDomain,t,"auth-domain-config-required"),sc(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:i,v:Tt,eventId:a};if(n instanceof Wl){n.setDefaultLanguage(t.languageCode),s.providerId=n.providerId||"",de(n.getCustomParameters())||(s.customParameters=JSON.stringify(n.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var h,f=Object.entries(o||{})[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=e(N)(h.value,2),v=d[0],p=d[1];s[v]=p}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(n instanceof zl){var y=n.getScopes().filter((function(e){return""!==e}));y.length>0&&(s.scopes=y.join(","))}t.tenantId&&(s.tid=t.tenantId);var m,g,k=s,_=!0,w=!1,b=void 0;try{for(var I,T=Object.keys(k)[Symbol.iterator]();!(_=(I=T.next()).done);_=!0){var x=I.value;void 0===k[x]&&delete k[x]}}catch(e){w=!0,b=e}finally{try{_||null==T.return||T.return()}finally{if(w)throw b}}return"".concat((m=t,g=m.config,g.emulator?mc(g,jf):"https://".concat(g.authDomain,"/").concat(Vf)),"?").concat(me(k).slice(1))}
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
var Bf="webStorageSupport",Hf=function(){"use strict";function t(){e(E)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kh,this._completeRedirectFn=ff,this._overrideRedirectResult=cf}return e(C)(t,[{key:"_openPopup",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){var u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return cc(null===(u=s.eventManagers[t._key()])||void 0===u?void 0:u.manager,"_initialize() not called before _openPopup()"),c=qf(t,n,r,dc(),i),e.abrupt("return",Ff(t,c,bh()));case 4:case"end":return e.stop()}}),a)})))()}},{key:"_openRedirect",value:function(t,n,r,i){var s=this;return e(a)(e(o).mark((function a(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s._originValidation(t);case 2:return a=qf(t,n,r,dc(),i),Th().location.href=a,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var a}),a)})))()}},{key:"_initialize",value:function(e){var t=this,n=e._key();if(this.eventManagers[n]){var r=this.eventManagers[n],i=r.manager,a=r.promise;return i?Promise.resolve(i):(cc(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[n]={promise:o},o.catch((function(){delete t.eventManagers[n]})),o}},{key:"initAndGetManager",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Rf(t);case 2:return i=e.sent,a=new vf(t),i.register("authEvent",(function(e){return sc(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:a.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),n.eventManagers[t._key()]={manager:a},n.iframes[t._key()]=i,e.abrupt("return",a);case 8:case"end":return e.stop()}}),r)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Bf,{type:Bf},(function(n){var r,i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),rc(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return wf.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return yl()||sl()||dl()}}]),t}(),Wf=Hf,zf=function(){"use strict";function t(n){e(E)(this,t),this.factorId=n}return e(C)(t,[{key:"_process",value:function(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return uc("unexpected MultiFactorSessionType")}}}]),t}(),Kf=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,"phone")).credential=t,i}return e(C)(r,[{key:"_finalizeEnroll",value:function(e,t,n){return function(e,t){return Ic(e,"POST","/v2/accounts/mfaEnrollment:finalize",bc(e,t))}(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Ic(e,"POST","/v2/accounts/mfaSignIn:finalize",bc(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new r(e)}}]),r}(zf);(function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,null,[{key:"assertion",value:function(e){return Kf._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Gf,Qf="@firebase/auth",Yf="0.20.3",Xf=function(){"use strict";function t(n){e(E)(this,t),this.auth=n,this.internalListeners=new Map}return e(C)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var n=this;return e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.assertAuthConfigured(),e.next=3,n.auth._initializationPromise;case 3:if(n.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.auth.currentUser.getIdToken(t);case 7:return i=e.sent,e.abrupt("return",{accessToken:i});case 9:case"end":return e.stop()}}),r)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){sc(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Gf="Browser",kt(new Ne("auth",(function(e,t){var n=t.options,r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=r.options,o=a.apiKey,s=a.authDomain;return function(e,t){sc(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),sc(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var r={apiKey:o,authDomain:s,clientPlatform:Gf,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ml(Gf)},i=new kl(e,t,r);return function(e,t){var n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hc);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(i,n),i}(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,n){e.getProvider("auth-internal").initialize()}))),kt(new Ne("auth-internal",(function(e){var t=_l(e.getProvider("auth").getImmediate());return new Xf(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Et(Qf,Yf,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Gf)),Et(Qf,Yf,"esm2017");a=i("bpxeT"),E=i("8MBJY");var Jf,$f=i("ge8co"),Zf=(C=i("a2hTj"),Xu=i("fVNic"),S=i("eYQtU"),i("jmhxu")),ed=(N=i("1t1Wn"),A=i("8nrFW"),R=i("l5bVx"),D=i("2MbLg"),o=i("2TvXO"),E=i("8MBJY"),C=i("a2hTj"),Xu=i("fVNic"),S=i("eYQtU"),R=i("l5bVx"),D=i("2MbLg"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{}),td={},nd=nd||{},rd=ed||self;function id(){}function ad(t){var n=void 0===t?"undefined":e(R)(t);return"array"==(n="object"!=n?n:t?Array.isArray(t)?"array":n:"null")||"object"==n&&"number"==typeof t.length}function od(t){var n=void 0===t?"undefined":e(R)(t);return"object"==n&&null!=t||"function"==n}var sd="closure_uid_"+(1e9*Math.random()>>>0),ud=0;function cd(e,t,n){return e.call.apply(e.bind,arguments)}function ld(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function hd(e,t,n){return(hd=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?cd:ld).apply(null,arguments)}function fd(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function dd(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),a=2;a<arguments.length;a++)i[a-2]=arguments[a];return t.prototype[n].apply(e,i)}}function vd(){this.s=this.s,this.o=this.o}var pd={};vd.prototype.s=!1,vd.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var e=function(e){return Object.prototype.hasOwnProperty.call(e,sd)&&e[sd]||(e[sd]=++ud)}(this);delete pd[e]}},vd.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var yd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"==typeof e)return"string"!=typeof t||1!=t.length?-1:e.indexOf(t,0);for(var n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},md=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){for(var r=e.length,i="string"==typeof e?e.split(""):e,a=0;a<r;a++)a in i&&t.call(n,i[a],a,e)};function gd(e){return Array.prototype.concat.apply([],arguments)}function kd(e){var t=e.length;if(0<t){for(var n=Array(t),r=0;r<t;r++)n[r]=e[r];return n}return[]}function _d(e){return/^[\s\xa0]*$/.test(e)}var wd,bd=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Id(e,t){return-1!=e.indexOf(t)}function Td(e,t){return e<t?-1:e>t?1:0}e:{var xd=rd.navigator;if(xd){var Ed=xd.userAgent;if(Ed){wd=Ed;break e}}wd=""}function Cd(e,t,n){for(var r in e)t.call(n,e[r],r,e)}function Sd(e){var t={};for(var n in e)t[n]=e[n];return t}var Nd="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ad(e,t){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])e[n]=r[n];for(var a=0;a<Nd.length;a++)n=Nd[a],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function Rd(e){return Rd[" "](e),e}Rd[" "]=id;var Dd,Pd,Od=Id(wd,"Opera"),Ld=Id(wd,"Trident")||Id(wd,"MSIE"),Md=Id(wd,"Edge"),Fd=Md||Ld,Ud=Id(wd,"Gecko")&&!(Id(wd.toLowerCase(),"webkit")&&!Id(wd,"Edge"))&&!(Id(wd,"Trident")||Id(wd,"MSIE"))&&!Id(wd,"Edge"),Vd=Id(wd.toLowerCase(),"webkit")&&!Id(wd,"Edge");function jd(){var e=rd.document;return e?e.documentMode:void 0}e:{var qd="",Bd=(Pd=wd,Ud?/rv:([^\);]+)(\)|;)/.exec(Pd):Md?/Edge\/([\d\.]+)/.exec(Pd):Ld?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Pd):Vd?/WebKit\/(\S+)/.exec(Pd):Od?/(?:Version)[ \/]?(\S+)/.exec(Pd):void 0);if(Bd&&(qd=Bd?Bd[1]:""),Ld){var Hd=jd();if(null!=Hd&&Hd>parseFloat(qd)){Dd=String(Hd);break e}}Dd=qd}var Wd,zd={};function Kd(){return function(e){var t=zd;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}((function(){for(var e=0,t=bd(String(Dd)).split("."),n=bd("9").split("."),r=Math.max(t.length,n.length),i=0;0==e&&i<r;i++){var a=t[i]||"",o=n[i]||"";do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==a[0].length&&0==o[0].length)break;e=Td(0==a[1].length?0:parseInt(a[1],10),0==o[1].length?0:parseInt(o[1],10))||Td(0==a[2].length,0==o[2].length)||Td(a[2],o[2]),a=a[3],o=o[3]}while(0==e)}return 0<=e}))}if(rd.document&&Ld){var Gd=jd();Wd=Gd||(parseInt(Dd,10)||void 0)}else Wd=void 0;var Qd=Wd,Yd=function(){if(!rd.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{rd.addEventListener("test",id,t),rd.removeEventListener("test",id,t)}catch(e){}return e}();function Xd(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function Jd(e,t){if(Xd.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Ud){e:{try{Rd(t.nodeName);var i=!0;break e}catch(e){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:$d[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Jd.Z.h.call(this)}}Xd.prototype.h=function(){this.defaultPrevented=!0},dd(Jd,Xd);var $d={2:"touch",3:"pen",4:"mouse"};Jd.prototype.h=function(){Jd.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Zd="closure_listenable_"+(1e6*Math.random()|0),ev=0;function tv(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++ev,this.ca=this.fa=!1}function nv(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function rv(e){this.src=e,this.g={},this.h=0}function iv(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],a=yd(i,t);(r=0<=a)&&Array.prototype.splice.call(i,a,1),r&&(nv(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function av(e,t,n,r){for(var i=0;i<e.length;++i){var a=e[i];if(!a.ca&&a.listener==t&&a.capture==!!n&&a.ia==r)return i}return-1}rv.prototype.add=function(e,t,n,r,i){var a=e.toString();(e=this.g[a])||(e=this.g[a]=[],this.h++);var o=av(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new tv(t,this.src,a,!!r,i)).fa=n,e.push(t)),t};var ov="closure_lm_"+(1e6*Math.random()|0),sv={};function uv(e,t,n,r,i){if(r&&r.once)return lv(e,t,n,r,i);if(Array.isArray(t)){for(var a=0;a<t.length;a++)uv(e,t[a],n,r,i);return null}return n=mv(n),e&&e[Zd]?e.N(t,n,od(r)?!!r.capture:!!r,i):cv(e,t,n,!1,r,i)}function cv(e,t,n,r,i,a){if(!t)throw Error("Invalid event type");var o=od(i)?!!i.capture:!!i,s=pv(e);if(s||(e[ov]=s=new rv(e)),(n=s.add(t,n,r,o,a)).proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}var t=vv;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Yd||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(dv(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function lv(e,t,n,r,i){if(Array.isArray(t)){for(var a=0;a<t.length;a++)lv(e,t[a],n,r,i);return null}return n=mv(n),e&&e[Zd]?e.O(t,n,od(r)?!!r.capture:!!r,i):cv(e,t,n,!0,r,i)}function hv(e,t,n,r,i){if(Array.isArray(t))for(var a=0;a<t.length;a++)hv(e,t[a],n,r,i);else r=od(r)?!!r.capture:!!r,n=mv(n),e&&e[Zd]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=av(a=e.g[t],n,r,i))&&(nv(a[n]),Array.prototype.splice.call(a,n,1),0==a.length&&(delete e.g[t],e.h--)))):e&&(e=pv(e))&&(t=e.g[t.toString()],e=-1,t&&(e=av(t,n,r,i)),(n=-1<e?t[e]:null)&&fv(n))}function fv(e){if("number"!=typeof e&&e&&!e.ca){var t=e.src;if(t&&t[Zd])iv(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(dv(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=pv(t))?(iv(n,e),0==n.h&&(n.src=null,t[ov]=null)):nv(e)}}}function dv(e){return e in sv?sv[e]:sv[e]="on"+e}function vv(e,t){if(e.ca)e=!0;else{t=new Jd(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&fv(e),e=n.call(r,t)}return e}function pv(e){return(e=e[ov])instanceof rv?e:null}var yv="__closure_events_fn_"+(1e9*Math.random()>>>0);function mv(e){return"function"==typeof e?e:(e[yv]||(e[yv]=function(t){return e.handleEvent(t)}),e[yv])}function gv(){vd.call(this),this.i=new rv(this),this.P=this,this.I=null}function kv(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"==typeof t)t=new Xd(t,e);else if(t instanceof Xd)t.target=t.target||e;else{var i=t;Ad(t=new Xd(r,e),i)}if(i=!0,n)for(var a=n.length-1;0<=a;a--){var o=t.g=n[a];i=_v(o,r,!0,t)&&i}if(i=_v(o=t.g=e,r,!0,t)&&i,i=_v(o,r,!1,t)&&i,n)for(a=0;a<n.length;a++)i=_v(o=t.g=n[a],r,!1,t)&&i}function _v(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,a=0;a<t.length;++a){var o=t[a];if(o&&!o.ca&&o.capture==n){var s=o.listener,u=o.ia||o.src;o.fa&&iv(e.i,o),i=!1!==s.call(u,r)&&i}}return i&&!r.defaultPrevented}dd(gv,vd),gv.prototype[Zd]=!0,gv.prototype.removeEventListener=function(e,t,n,r){hv(this,e,t,n,r)},gv.prototype.M=function(){if(gv.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)nv(n[r]);delete t.g[e],t.h--}}this.I=null},gv.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},gv.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var wv=rd.JSON.stringify;function bv(){var e=Av,t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var Iv,Tv=function(){"use strict";function t(){e(E)(this,t),this.h=this.g=null}return e(C)(t,[{key:"add",value:function(e,t){var n=xv.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}]),t}(),xv=new(function(){"use strict";function t(n,r){e(E)(this,t),this.i=n,this.j=r,this.h=0,this.g=null}return e(C)(t,[{key:"get",value:function(){var e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}]),t}())((function(){return new Ev}),(function(e){return e.reset()})),Ev=function(){"use strict";function t(){e(E)(this,t),this.next=this.g=this.h=null}return e(C)(t,[{key:"set",value:function(e,t){this.h=e,this.g=t,this.next=null}},{key:"reset",value:function(){this.next=this.g=this.h=null}}]),t}();function Cv(e){rd.setTimeout((function(){throw e}),0)}function Sv(e,t){Iv||function(){var e=rd.Promise.resolve(void 0);Iv=function(){e.then(Rv)}}(),Nv||(Iv(),Nv=!0),Av.add(e,t)}var Nv=!1,Av=new Tv;function Rv(){for(var e;e=bv();){try{e.h.call(e.g)}catch(e){Cv(e)}var t=xv;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Nv=!1}function Dv(e,t){gv.call(this),this.h=e||1,this.g=t||rd,this.j=hd(this.kb,this),this.l=Date.now()}function Pv(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function Ov(e,t,n){if("function"==typeof e)n&&(e=hd(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=hd(e.handleEvent,e)}return 2147483647<Number(t)?-1:rd.setTimeout(e,t||0)}function Lv(e){e.g=Ov((function(){e.g=null,e.i&&(e.i=!1,Lv(e))}),e.j);var t=e.h;e.h=null,e.m.apply(null,t)}dd(Dv,gv),(Jf=Dv.prototype).da=!1,Jf.S=null,Jf.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),kv(this,"tick"),this.da&&(Pv(this),this.start()))}},Jf.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},Jf.M=function(){Dv.Z.M.call(this),Pv(this),delete this.g};var Mv=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this)).m=t,a.j=i,a.h=null,a.i=!1,a.g=null,a}return e(C)(r,[{key:"l",value:function(e){this.h=arguments,this.g?this.i=!0:Lv(this)}},{key:"M",value:function(){e(Gu)(e(Xu)(r.prototype),"M",this).call(this),this.g&&(rd.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}]),r}(vd);function Fv(e){vd.call(this),this.h=e,this.g={}}dd(Fv,vd);var Uv=[];function Vv(e,t,n,r){Array.isArray(n)||(n&&(Uv[0]=n.toString()),n=Uv);for(var i=0;i<n.length;i++){var a=uv(t,n[i],r||e.handleEvent,!1,e.h||e);if(!a)break;e.g[a.key]=a}}function jv(e){Cd(e.g,(function(e,t){this.g.hasOwnProperty(t)&&fv(e)}),e),e.g={}}function qv(){this.g=!0}function Bv(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var a=i[0];if("noop"!=a&&"stop"!=a&&"close"!=a)for(var o=1;o<i.length;o++)i[o]=""}}}return wv(n)}catch(e){return t}}(e,n)+(r?" "+r:"")}))}Fv.prototype.M=function(){Fv.Z.M.call(this),jv(this)},Fv.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},qv.prototype.Aa=function(){this.g=!1},qv.prototype.info=function(){};var Hv={},Wv=null;function zv(){return Wv=Wv||new gv}function Kv(e){Xd.call(this,Hv.Ma,e)}function Gv(e){var t=zv();kv(t,new Kv(t,e))}function Qv(e,t){Xd.call(this,Hv.STAT_EVENT,e),this.stat=t}function Yv(e){var t=zv();kv(t,new Qv(t,e))}function Xv(e,t){Xd.call(this,Hv.Na,e),this.size=t}function Jv(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return rd.setTimeout((function(){e()}),t)}Hv.Ma="serverreachability",dd(Kv,Xd),Hv.STAT_EVENT="statevent",dd(Qv,Xd),Hv.Na="timingevent",dd(Xv,Xd);var $v={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Zv={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ep(){}function tp(e){return e.h||(e.h=e.i())}function np(){}ep.prototype.h=null;var rp,ip={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ap(){Xd.call(this,"d")}function op(){Xd.call(this,"c")}function sp(){}function up(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Fv(this),this.P=lp,e=Fd?125:void 0,this.W=new Dv(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new cp}function cp(){this.i=null,this.g="",this.h=!1}dd(ap,Xd),dd(op,Xd),dd(sp,ep),sp.prototype.g=function(){return new XMLHttpRequest},sp.prototype.i=function(){return{}},rp=new sp;var lp=45e3,hp={},fp={};function dp(e,t,n){e.K=1,e.v=Mp(Ap(t)),e.s=n,e.U=!0,vp(e,null)}function vp(e,t){e.F=Date.now(),gp(e),e.A=Ap(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),Yp(n.h,"t",r),e.C=0,n=e.l.H,e.h=new cp,e.g=Xy(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Mv(hd(e.Ia,e,e.g),e.O)),Vv(e.V,e.g,"readystatechange",e.gb),t=e.H?Sd(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Gv(1),function(e,t,n,r,i,a){e.info((function(){if(e.g)if(a)for(var o="",s=a.split("&"),u=0;u<s.length;u++){var c=s[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+c+"&":o+(l+"=redacted&")}}else o=null;else o=a;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}(e.j,e.u,e.A,e.m,e.X,e.s)}function pp(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function yp(e,t,n){for(var r,i=!0;!e.I&&e.C<n.length;){if((r=mp(e,n))==fp){4==t&&(e.o=4,Yv(14),i=!1),Bv(e.j,e.m,null,"[Incomplete Response]");break}if(r==hp){e.o=4,Yv(15),Bv(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}Bv(e.j,e.m,r,null),Ip(e,r)}pp(e)&&r!=fp&&r!=hp&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,Yv(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,(t=e.l).g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),By(t),t.L=!0,Yv(11))):(Bv(e.j,e.m,n,"[Invalid Chunked Response]"),bp(e),wp(e))}function mp(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?fp:(n=Number(t.substring(n,r)),isNaN(n)?hp:(r+=1)+n>t.length?fp:(t=t.substr(r,n),e.C=r+n,t))}function gp(e){e.Y=Date.now()+e.P,kp(e,e.P)}function kp(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Jv(hd(e.eb,e),t)}function _p(e){e.B&&(rd.clearTimeout(e.B),e.B=null)}function wp(e){0==e.l.G||e.I||zy(e.l,e)}function bp(e){_p(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Pv(e.W),jv(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ip(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||ny(n.i,e)))if(n.I=e.N,!e.J&&ny(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(a){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;Wy(n),Py(n)}qy(n),Yv(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=Jv(hd(n.ab,n),6e3));if(1>=ty(n.i)&&n.ka){try{n.ka()}catch(a){}n.ka=void 0}}else Gy(n,11)}else if((e.J||n.g==e)&&Wy(n),!_d(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){var a=i[t];if(n.U=a[0],a=a[1],2==n.G)if("c"==a[0]){n.J=a[1],n.la=a[2];var o=a[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var s=a[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));var u=a[5];null!=u&&"number"==typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var c=e.g;if(c){var l=c.g?c.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(Id(l,"spdy")||Id(l,"quic")||Id(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(ry(h,h.h),h.h=null))}if(r.D){var f=c.g?c.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Lp(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms"));var d=e;if((r=n).oa=Yy(r,r.H?r.la:null,r.W),d.J){iy(r.i,d);var v=d,p=r.K;p&&v.setTimeout(p),v.B&&(_p(v),gp(v)),r.g=d}else jy(r);0<n.l.length&&My(n)}else"stop"!=a[0]&&"close"!=a[0]||Gy(n,7);else 3==n.G&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?Gy(n,7):Dy(n):"noop"!=a[0]&&n.j&&n.j.wa(a),n.A=0)}Gv(4)}catch(a){}}function Tp(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(ad(e)||"string"==typeof e)md(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(ad(e)||"string"==typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=function(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"==typeof e)return e.split("");if(ad(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length;for(var a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}}function xp(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof xp)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function Ep(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Cp(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)Cp(i,r=e.g[t])||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Cp(e,t){return Object.prototype.hasOwnProperty.call(e,t)}(Jf=up.prototype).setTimeout=function(e){this.P=e},Jf.gb=function(e){e=e.target;var t=this.L;t&&3==Cy(e)?t.l():this.Ia(e)},Jf.Ia=function(e){try{if(e==this.g)e:{var t=Cy(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>t)&&(3!=t||Fd||this.g&&(this.h.h||this.g.ga()||Sy(this.g)))){this.I||4!=t||7==n||Gv(8==n||0>=r?3:2),_p(this);var i=this.g.ba();this.N=i;t:if(pp(this)){var a=Sy(this.g);e="";var o=a.length,s=4==Cy(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){bp(this),wp(this);var u="";break t}this.h.i=new rd.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,e+=this.h.i.decode(a[n],{stream:s&&n==o-1});a.splice(0,o),this.h.g+=e,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(e,t,n,r,i,a,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+a+" "+o}))}(this.j,this.u,this.A,this.m,this.X,t,i),this.i){if(this.$&&!this.J){t:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_d(c)){var h=c;break t}}h=null}if(!(i=h)){this.i=!1,this.o=3,Yv(12),bp(this),wp(this);break e}Bv(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ip(this,i)}this.U?(yp(this,t,u),Fd&&this.i&&3==t&&(Vv(this.V,this.W,"tick",this.fb),this.W.start())):(Bv(this.j,this.m,u,null),Ip(this,u)),4==t&&bp(this),this.i&&!this.I&&(4==t?zy(this.l,this):(this.i=!1,gp(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Yv(12)):(this.o=0,Yv(13)),bp(this),wp(this)}}}catch(t){}},Jf.fb=function(){if(this.g){var e=Cy(this.g),t=this.g.ga();this.C<t.length&&(_p(this),yp(this,e,t),this.i&&4!=e&&gp(this))}},Jf.cancel=function(){this.I=!0,bp(this)},Jf.eb=function(){this.B=null;var e=Date.now();0<=e-this.Y?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.j,this.A),2!=this.K&&(Gv(3),Yv(17)),bp(this),this.o=2,wp(this)):kp(this,this.Y-e)},(Jf=xp.prototype).R=function(){Ep(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},Jf.T=function(){return Ep(this),this.g.concat()},Jf.get=function(e,t){return Cp(this.h,e)?this.h[e]:t},Jf.set=function(e,t){Cp(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},Jf.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],a=this.get(i);e.call(t,a,i,this)}};var Sp=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Np(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Np){this.g=void 0!==t?t:e.g,Rp(this,e.j),this.s=e.s,Dp(this,e.i),Pp(this,e.m),this.l=e.l,t=e.h;var n=new zp;n.i=t.i,t.g&&(n.g=new xp(t.g),n.h=t.h),Op(this,n),this.o=e.o}else e&&(n=String(e).match(Sp))?(this.g=!!t,Rp(this,n[1]||"",!0),this.s=Fp(n[2]||""),Dp(this,n[3]||"",!0),Pp(this,n[4]),this.l=Fp(n[5]||"",!0),Op(this,n[6]||"",!0),this.o=Fp(n[7]||"")):(this.g=!!t,this.h=new zp(null,this.g))}function Ap(e){return new Np(e)}function Rp(e,t,n){e.j=n?Fp(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Dp(e,t,n){e.i=n?Fp(t,!0):t}function Pp(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Op(e,t,n){t instanceof zp?(e.h=t,function(e,t){t&&!e.j&&(Kp(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(Gp(this,t),Yp(this,n,e))}),e)),e.j=t}(e.h,e.g)):(n||(t=Up(t,Hp)),e.h=new zp(t,e.g))}function Lp(e,t,n){e.h.set(t,n)}function Mp(e){return Lp(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Fp(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Up(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,Vp),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Vp(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}Np.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Up(t,jp,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Up(t,jp,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(Up(n,"/"==n.charAt(0)?Bp:qp,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Up(n,Wp)),e.join("")};var jp=/[#\/\?@]/g,qp=/[#\?:]/g,Bp=/[#\?]/g,Hp=/[#\?@]/g,Wp=/#/g;function zp(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function Kp(e){e.g||(e.g=new xp,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var a=e[n].substring(0,r);i=e[n].substring(r+1)}else a=e[n];t(a,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function Gp(e,t){Kp(e),t=Xp(e,t),Cp(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,Cp((e=e.g).h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Ep(e)))}function Qp(e,t){return Kp(e),t=Xp(e,t),Cp(e.g.h,t)}function Yp(e,t,n){Gp(e,t),0<n.length&&(e.i=null,e.g.set(Xp(e,t),kd(n)),e.h+=n.length)}function Xp(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(Jf=zp.prototype).add=function(e,t){Kp(this),this.i=null,e=Xp(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},Jf.forEach=function(e,t){Kp(this),this.g.forEach((function(n,r){md(n,(function(n){e.call(t,n,r,this)}),this)}),this)},Jf.T=function(){Kp(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],a=0;a<i.length;a++)n.push(t[r]);return n},Jf.R=function(e){Kp(this);var t=[];if("string"==typeof e)Qp(this,e)&&(t=gd(t,this.g.get(Xp(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=gd(t,e[n])}return t},Jf.set=function(e,t){return Kp(this),this.i=null,Qp(this,e=Xp(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},Jf.get=function(e,t){return e&&0<(e=this.R(e)).length?String(e[0]):t},Jf.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var a=0;a<r.length;a++){var o=i;""!==r[a]&&(o+="="+encodeURIComponent(String(r[a]))),e.push(o)}}return this.i=e.join("&")};var Jp=function t(n,r){"use strict";e(E)(this,t),this.h=n,this.g=r};function $p(e){this.l=e||Zp,rd.PerformanceNavigationTiming?e=0<(e=rd.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(rd.g&&rd.g.Ea&&rd.g.Ea()&&rd.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Zp=10;function ey(e){return!!e.h||!!e.g&&e.g.size>=e.j}function ty(e){return e.h?1:e.g?e.g.size:0}function ny(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function ry(e,t){e.g?e.g.add(t):e.h=t}function iy(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ay(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){var t=e.i,n=!0,r=!1,i=void 0;try{for(var a,o=e.g.values()[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;t=t.concat(s.D)}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t}return kd(e.i)}function oy(){}function sy(){this.g=new oy}function uy(e,t,n){var r=n||"";try{Tp(e,(function(e,n){var i=e;od(e)&&(i=wv(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(e){throw t.push(r+"type="+encodeURIComponent("_badmap")),e}}function cy(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(e){}}function ly(e){this.l=e.$b||null,this.j=e.ib||!1}function hy(e,t){gv.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=fy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$p.prototype.cancel=function(){if(this.i=ay(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){var e=!0,t=!1,n=void 0;try{for(var r,i=this.g.values()[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){r.value.cancel()}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}this.g.clear()}},oy.prototype.stringify=function(e){return rd.JSON.stringify(e,void 0)},oy.prototype.parse=function(e){return rd.JSON.parse(e,void 0)},dd(ly,ep),ly.prototype.g=function(){return new hy(this.l,this.j)},ly.prototype.i=function(e){return function(){return e}}({}),dd(hy,gv);var fy=0;function dy(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function vy(e){e.readyState=4,e.l=null,e.j=null,e.A=null,py(e)}function py(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(Jf=hy.prototype).open=function(e,t){if(this.readyState!=fy)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,py(this)},Jf.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||rd).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},Jf.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vy(this)),this.readyState=fy},Jf.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,py(this)),this.g&&(this.readyState=3,py(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==rd.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dy(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},Jf.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?vy(this):py(this),3==this.readyState&&dy(this)}},Jf.Ua=function(e){this.g&&(this.response=this.responseText=e,vy(this))},Jf.Ta=function(e){this.g&&(this.response=e,vy(this))},Jf.ha=function(){this.g&&vy(this)},Jf.setRequestHeader=function(e,t){this.v.append(e,t)},Jf.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},Jf.getAllResponseHeaders=function(){if(!this.h)return"";for(var e=[],t=this.h.entries(),n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(hy.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var yy=rd.JSON.parse;function my(e){gv.call(this),this.headers=new xp,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=gy,this.K=this.L=!1}dd(my,gv);var gy="",ky=/^https?$/i,_y=["POST","PUT"];function wy(e){return"content-type"==e.toLowerCase()}function by(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Iy(e),xy(e)}function Iy(e){e.D||(e.D=!0,kv(e,"complete"),kv(e,"error"))}function Ty(e){if(e.h&&void 0!==nd&&(!e.C[1]||4!=Cy(e)||2!=e.ba()))if(e.v&&4==Cy(e))Ov(e.Fa,0,e);else if(kv(e,"readystatechange"),4==Cy(e)){e.h=!1;try{var t,n=e.ba();e:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break e;default:r=!1}if(!(t=r)){var i;if(i=0===n){var a=String(e.H).match(Sp)[1]||null;if(!a&&rd.self&&rd.self.location){var o=rd.self.location.protocol;a=o.substr(0,o.length-1)}i=!ky.test(a?a.toLowerCase():"")}t=i}if(t)kv(e,"complete"),kv(e,"success");else{e.m=6;try{var s=2<Cy(e)?e.g.statusText:""}catch(e){s=""}e.j=s+" ["+e.ba()+"]",Iy(e)}}finally{xy(e)}}}function xy(e,t){if(e.g){Ey(e);var n=e.g,r=e.C[0]?id:null;e.g=null,e.C=null,t||kv(e,"ready");try{n.onreadystatechange=r}catch(e){}}}function Ey(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(rd.clearTimeout(e.A),e.A=null)}function Cy(e){return e.g?e.g.readyState:0}function Sy(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case gy:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Ny(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=function(e){var t="";return Cd(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):Lp(e,t,n))}function Ay(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Ry(e){this.za=0,this.l=[],this.h=new qv,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ay("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ay("baseRetryDelayMs",5e3,e),this.$a=Ay("retryDelaySeedMs",1e4,e),this.Ya=Ay("forwardChannelMaxRetries",2,e),this.ra=Ay("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new $p(e&&e.concurrentRequestLimit),this.Ca=new sy,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function Dy(e){if(Oy(e),3==e.G){var t=e.V++,n=Ap(e.F);Lp(n,"SID",e.J),Lp(n,"RID",t),Lp(n,"TYPE","terminate"),Uy(e,n),(t=new up(e,e.h,t,void 0)).K=2,t.v=Mp(Ap(n)),n=!1,rd.navigator&&rd.navigator.sendBeacon&&(n=rd.navigator.sendBeacon(t.v.toString(),"")),!n&&rd.Image&&((new Image).src=t.v,n=!0),n||(t.g=Xy(t.l,null),t.g.ea(t.v)),t.F=Date.now(),gp(t)}Qy(e)}function Py(e){e.g&&(By(e),e.g.cancel(),e.g=null)}function Oy(e){Py(e),e.u&&(rd.clearTimeout(e.u),e.u=null),Wy(e),e.i.cancel(),e.m&&("number"==typeof e.m&&rd.clearTimeout(e.m),e.m=null)}function Ly(e,t){e.l.push(new Jp(e.Za++,t)),3==e.G&&My(e)}function My(e){ey(e.i)||e.m||(e.m=!0,Sv(e.Ha,e),e.C=0)}function Fy(e,t){var n;n=t?t.m:e.V++;var r=Ap(e.F);Lp(r,"SID",e.J),Lp(r,"RID",n),Lp(r,"AID",e.U),Uy(e,r),e.o&&e.s&&Ny(r,e.o,e.s),n=new up(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Vy(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),ry(e.i,n),dp(n,r,t)}function Uy(e,t){e.j&&Tp({},(function(e,n){Lp(t,n,e)}))}function Vy(e,t,n){n=Math.min(e.l.length,n);var r=e.j?hd(e.j.Oa,e.j,e):null;e:for(var i=e.l,a=-1;;){var o=["count="+n];-1==a?0<n?(a=i[0].h,o.push("ofs="+a)):a=0:o.push("ofs="+a);for(var s=!0,u=0;u<n;u++){var c=i[u].h,l=i[u].g;if(0>(c-=a))a=Math.max(0,i[u].h-100),s=!1;else try{uy(l,o,"req"+c+"_")}catch(e){r&&r(l)}}if(s){r=o.join("&");break e}}return e=e.l.splice(0,n),t.D=e,r}function jy(e){e.g||e.u||(e.Y=1,Sv(e.Ga,e),e.A=0)}function qy(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=Jv(hd(e.Ga,e),Ky(e,e.A)),e.A++,!0)}function By(e){null!=e.B&&(rd.clearTimeout(e.B),e.B=null)}function Hy(e){e.g=new up(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Ap(e.oa);Lp(t,"RID","rpc"),Lp(t,"SID",e.J),Lp(t,"CI",e.N?"0":"1"),Lp(t,"AID",e.U),Uy(e,t),Lp(t,"TYPE","xmlhttp"),e.o&&e.s&&Ny(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=Mp(Ap(t)),n.s=null,n.U=!0,vp(n,e)}function Wy(e){null!=e.v&&(rd.clearTimeout(e.v),e.v=null)}function zy(e,t){var n=null;if(e.g==t){Wy(e),By(e),e.g=null;var r=2}else{if(!ny(e.i,t))return;n=t.D,iy(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;kv(r=zv(),new Xv(r,n,t,i)),My(e)}else jy(e);else if(3==(i=t.o)||0==i&&0<e.I||!(1==r&&function(e,t){return!(ty(e.i)>=e.i.j-(e.m?1:0)||(e.m?(e.l=t.D.concat(e.l),0):1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya)||(e.m=Jv(hd(e.Ha,e,t),Ky(e,e.C)),e.C++,0)))}(e,t)||2==r&&qy(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Gy(e,5);break;case 4:Gy(e,10);break;case 3:Gy(e,6);break;default:Gy(e,2)}}function Ky(e,t){var n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Gy(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=hd(e.jb,e);n||(n=new Np("//www.google.com/images/cleardot.gif"),rd.location&&"http"==rd.location.protocol||Rp(n,"https"),Mp(n)),function(e,t){var n=new qv;if(rd.Image){var r=new Image;r.onload=fd(cy,n,r,"TestLoadImage: loaded",!0,t),r.onerror=fd(cy,n,r,"TestLoadImage: error",!1,t),r.onabort=fd(cy,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=fd(cy,n,r,"TestLoadImage: timeout",!1,t),rd.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(n.toString(),r)}else Yv(2);e.G=0,e.j&&e.j.va(t),Qy(e),Oy(e)}function Qy(e){e.G=0,e.I=-1,e.j&&(0==ay(e.i).length&&0==e.l.length||(e.i.i.length=0,kd(e.l),e.l.length=0),e.j.ua())}function Yy(e,t,n){var r=function(e){return e instanceof Np?Ap(e):new Np(e,void 0)}(n);if(""!=r.i)t&&Dp(r,t+"."+r.i),Pp(r,r.m);else{var i=rd.location;r=function(e,t,n,r){var i=new Np(null,void 0);return e&&Rp(i,e),t&&Dp(i,t),n&&Pp(i,n),r&&(i.l=r),i}(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Cd(e.aa,(function(e,t){Lp(r,t,e)})),t=e.D,n=e.sa,t&&n&&Lp(r,t,n),Lp(r,"VER",e.ma),Uy(e,r),r}function Xy(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Ba&&!e.qa?new my(new ly({ib:!0})):new my(e.qa)).L=e.H,t}function Jy(){}function $y(){if(Ld&&!(10<=Number(Qd)))throw Error("Environmental error: no available transport.")}function Zy(e,t){gv.call(this),this.g=new Ry(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!_d(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!_d(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new nm(this)}function em(e){ap.call(this);var t=e.__sm__;if(t){e:{for(var n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function tm(){op.call(this),this.status=1}function nm(e){this.g=e}(Jf=my.prototype).ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():rp.g(),this.C=this.u?tp(this.u):tp(rp),this.g.onreadystatechange=hd(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(e){return void by(this,e)}e=n||"";var i=new xp(this.headers);r&&Tp(r,(function(e,t){i.set(t,e)})),r=function(e){e:{for(var t=wy,n=e.length,r="string"==typeof e?e.split(""):e,i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"==typeof e?e.charAt(t):e[t]}(i.T()),n=rd.FormData&&e instanceof rd.FormData,!(0<=yd(_y,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ey(this),0<this.B&&((this.K=function(e){return Ld&&Kd()&&"number"==typeof e.timeout&&void 0!==e.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=hd(this.pa,this)):this.A=Ov(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(e){by(this,e)}},Jf.pa=function(){void 0!==nd&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,kv(this,"timeout"),this.abort(8))},Jf.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,kv(this,"complete"),kv(this,"abort"),xy(this))},Jf.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xy(this,!0)),my.Z.M.call(this)},Jf.Fa=function(){this.s||(this.F||this.v||this.l?Ty(this):this.cb())},Jf.cb=function(){Ty(this)},Jf.ba=function(){try{return 2<Cy(this)?this.g.status:-1}catch(e){return-1}},Jf.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},Jf.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),yy(t)}},Jf.Da=function(){return this.m},Jf.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(Jf=Ry.prototype).ma=8,Jf.G=1,Jf.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(e){}},Jf.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;var t=new up(this,this.h,e,void 0),n=this.s;if(this.P&&(n?Ad(n=Sd(n),this.P):n=this.P),null===this.o&&(t.H=n),this.ja)e:{for(var r=0,i=0;i<this.l.length;i++){var a=this.l[i];if(void 0===(a="__data__"in a.g&&"string"==typeof(a=a.g.__data__)?a.length:void 0))break;if(4096<(r+=a)){r=i;break e}if(4096===r||i===this.l.length-1){r=i+1;break e}}r=1e3}else r=1e3;r=Vy(this,t,r),Lp(i=Ap(this.F),"RID",e),Lp(i,"CVER",22),this.D&&Lp(i,"X-HTTP-Session-Id",this.D),Uy(this,i),this.o&&n&&Ny(i,this.o,n),ry(this.i,t),this.Ra&&Lp(i,"TYPE","init"),this.ja?(Lp(i,"$req",r),Lp(i,"SID","null"),t.$=!0,dp(t,i,null)):dp(t,i,r),this.G=2}}else 3==this.G&&(e?Fy(this,e):0==this.l.length||ey(this.i)||Fy(this))},Jf.Ga=function(){if(this.u=null,Hy(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Jv(hd(this.bb,this),e)}},Jf.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Yv(10),Py(this),Hy(this))},Jf.ab=function(){null!=this.v&&(this.v=null,Py(this),qy(this),Yv(19))},Jf.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Yv(2)):(this.h.info("Failed to ping google.com"),Yv(1))},(Jf=Jy.prototype).xa=function(){},Jf.wa=function(){},Jf.va=function(){},Jf.ua=function(){},Jf.Oa=function(){},$y.prototype.g=function(e,t){return new Zy(e,t)},dd(Zy,gv),Zy.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Sv(hd(e.hb,e,t))),Yv(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Yy(e,null,e.W),My(e)},Zy.prototype.close=function(){Dy(this.g)},Zy.prototype.u=function(e){if("string"==typeof e){var t={};t.__data__=e,Ly(this.g,t)}else this.v?((t={}).__data__=wv(e),Ly(this.g,t)):Ly(this.g,e)},Zy.prototype.M=function(){this.g.j=null,delete this.j,Dy(this.g),delete this.g,Zy.Z.M.call(this)},dd(em,ap),dd(tm,op),dd(nm,Jy),nm.prototype.xa=function(){kv(this.g,"a")},nm.prototype.wa=function(e){kv(this.g,new em(e))},nm.prototype.va=function(e){kv(this.g,new tm(e))},nm.prototype.ua=function(){kv(this.g,"b")},$y.prototype.createWebChannel=$y.prototype.g,Zy.prototype.send=Zy.prototype.u,Zy.prototype.open=Zy.prototype.m,Zy.prototype.close=Zy.prototype.close,$v.NO_ERROR=0,$v.TIMEOUT=8,$v.HTTP_ERROR=6,Zv.COMPLETE="complete",np.EventType=ip,ip.OPEN="a",ip.CLOSE="b",ip.ERROR="c",ip.MESSAGE="d",gv.prototype.listen=gv.prototype.N,my.prototype.listenOnce=my.prototype.O,my.prototype.getLastError=my.prototype.La,my.prototype.getLastErrorCode=my.prototype.Da,my.prototype.getStatus=my.prototype.ba,my.prototype.getResponseJson=my.prototype.Qa,my.prototype.getResponseText=my.prototype.ga,my.prototype.send=my.prototype.ea;var rm=td.createWebChannelTransport=function(){return new $y},im=td.getStatEventTarget=function(){return zv()},am=td.ErrorCode=$v,om=td.EventType=Zv,sm=td.Event=Hv,um=td.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},cm=td.FetchXmlHttpFactory=ly,lm=td.WebChannel=np,hm=td.XhrIo=my,fm=(qt=i("6qd2L"),"@firebase/firestore"),dm=function(){"use strict";function t(n){e(E)(this,t),this.uid=n}return e(C)(t,[{key:"isAuthenticated",value:function(){return null!=this.uid}},{key:"toKey",value:function(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}},{key:"isEqual",value:function(e){return e.uid===this.uid}}]),t}();dm.UNAUTHENTICATED=new dm(null),dm.GOOGLE_CREDENTIALS=new dm("google-credentials-uid"),dm.FIRST_PARTY=new dm("first-party-uid"),dm.MOCK_USER=new dm("mock-user");
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
var vm="9.8.3",pm=new qe("@firebase/firestore");
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
 */function ym(){return pm.logLevel}function mm(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pm.logLevel<=De.DEBUG){var a,o=r.map(_m);(a=pm).debug.apply(a,["Firestore (".concat(vm,"): ").concat(t)].concat(e(A)(o)))}}function gm(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pm.logLevel<=De.ERROR){var a,o=r.map(_m);(a=pm).error.apply(a,["Firestore (".concat(vm,"): ").concat(t)].concat(e(A)(o)))}}function km(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];if(pm.logLevel<=De.WARN){var a,o=r.map(_m);(a=pm).warn.apply(a,["Firestore (".concat(vm,"): ").concat(t)].concat(e(A)(o)))}}function _m(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function wm(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(vm,") INTERNAL ASSERTION FAILED: ")+e;throw gm(t),new Error(t)}function bm(e,t){e||wm()}function Im(e,t){return e}
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
 */var Tm={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},xm=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this,t,i)).code=t,a.message=i,a.toString=function(){return"".concat(a.name,": [code=").concat(a.code,"]: ").concat(a.message)},e(Zf)(a)}return r}(re),Em=function t(){"use strict";var n=this;e(E)(this,t),this.promise=new Promise((function(e,t){n.resolve=e,n.reject=t}))},Cm=function t(n,r){"use strict";e(E)(this,t),this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(n))},Sm=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"getToken",value:function(){return Promise.resolve(null)}},{key:"invalidateToken",value:function(){}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(dm.UNAUTHENTICATED)}))}},{key:"shutdown",value:function(){}}]),t}(),Nm=function(){"use strict";function t(n){e(E)(this,t),this.t=n,this.currentUser=dm.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}return e(C)(t,[{key:"start",value:function(t,n){var r=this,i=this.i,s=function(e){return r.i!==i?(i=r.i,n(e)):Promise.resolve()},u=new Em;this.o=function(){var e=r;r.i++,r.currentUser=r.u(),u.resolve(),u=new Em,t.enqueueRetryable((function(){return s(e.currentUser)}))};var c=function(){var n=u,i=r;t.enqueueRetryable(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.promise;case 2:return e.next=4,s(i.currentUser);case 4:case"end":return e.stop()}}),t)}))))},l=function(e){mm("FirebaseAuthCredentialsProvider","Auth detected"),r.auth=e,r.auth.addAuthTokenListener(r.o),c()};this.t.onInit((function(e){return l(e)})),setTimeout((function(){if(!r.auth){var e=r.t.getImmediate({optional:!0});e?l(e):(mm("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Em)}}),0),c()}},{key:"getToken",value:function(){var e=this,t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return e.i!==t?(mm("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),e.getToken()):n?(bm("string"==typeof n.accessToken),new Cm(n.accessToken,e.currentUser)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.auth&&this.auth.removeAuthTokenListener(this.o)}},{key:"u",value:function(){var e=this.auth&&this.auth.getUid();return bm(null===e||"string"==typeof e),new dm(e)}}]),t}(),Am=function t(n,r,i){"use strict";e(E)(this,t),this.type="FirstParty",this.user=dm.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",r);var a=n.auth.getAuthHeaderValueForFirstParty([]);a&&this.headers.set("Authorization",a),i&&this.headers.set("X-Goog-Iam-Authorization-Token",i)},Rm=function(){"use strict";function t(n,r,i){e(E)(this,t),this.h=n,this.l=r,this.m=i}return e(C)(t,[{key:"getToken",value:function(){return Promise.resolve(new Am(this.h,this.l,this.m))}},{key:"start",value:function(e,t){e.enqueueRetryable((function(){return t(dm.FIRST_PARTY)}))}},{key:"shutdown",value:function(){}},{key:"invalidateToken",value:function(){}}]),t}(),Dm=function t(n){"use strict";e(E)(this,t),this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)},Pm=function(){"use strict";function t(n){e(E)(this,t),this.g=n,this.forceRefresh=!1,this.appCheck=null,this.p=null}return e(C)(t,[{key:"start",value:function(e,t){var n=this;this.o=function(r){e.enqueueRetryable((function(){return function(e){null!=e.error&&mm("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));var r=e.token!==n.p;return n.p=e.token,mm("FirebaseAppCheckTokenProvider","Received ".concat(r?"new":"existing"," token.")),r?t(e.token):Promise.resolve()}(r)}))};var r=function(e){mm("FirebaseAppCheckTokenProvider","AppCheck detected"),n.appCheck=e,n.appCheck.addTokenListener(n.o)};this.g.onInit((function(e){return r(e)})),setTimeout((function(){if(!n.appCheck){var e=n.g.getImmediate({optional:!0});e?r(e):mm("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}},{key:"getToken",value:function(){var e=this,t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((function(t){return t?(bm("string"==typeof t.token),e.p=t.token,new Dm(t.token)):null})):Promise.resolve(null)}},{key:"invalidateToken",value:function(){this.forceRefresh=!0}},{key:"shutdown",value:function(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}]),t}();
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
function Om(e){var t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(var r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */var Lm=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,null,[{key:"I",value:function(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";n.length<20;)for(var r=Om(40),i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length));return n}}]),t}();function Mm(e,t){return e<t?-1:e>t?1:0}function Fm(e,t,n){return e.length===t.length&&e.every((function(e,r){return n(e,t[r])}))}
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
var Um=function(){"use strict";function t(n,r){if(e(E)(this,t),this.seconds=n,this.nanoseconds=r,r<0)throw new xm(Tm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new xm(Tm.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(n<-62135596800)throw new xm(Tm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new xm(Tm.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}return e(C)(t,[{key:"toDate",value:function(){return new Date(this.toMillis())}},{key:"toMillis",value:function(){return 1e3*this.seconds+this.nanoseconds/1e6}},{key:"_compareTo",value:function(e){return this.seconds===e.seconds?Mm(this.nanoseconds,e.nanoseconds):Mm(this.seconds,e.seconds)}},{key:"isEqual",value:function(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}},{key:"toString",value:function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}},{key:"toJSON",value:function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}},{key:"valueOf",value:function(){var e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}],[{key:"now",value:function(){return t.fromMillis(Date.now())}},{key:"fromDate",value:function(e){return t.fromMillis(e.getTime())}},{key:"fromMillis",value:function(e){var n=Math.floor(e/1e3);return new t(n,Math.floor(1e6*(e-1e3*n)))}}]),t}(),Vm=function(){"use strict";function t(n){e(E)(this,t),this.timestamp=n}return e(C)(t,[{key:"compareTo",value:function(e){return this.timestamp._compareTo(e.timestamp)}},{key:"isEqual",value:function(e){return this.timestamp.isEqual(e.timestamp)}},{key:"toMicroseconds",value:function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}},{key:"toString",value:function(){return"SnapshotVersion("+this.timestamp.toString()+")"}},{key:"toTimestamp",value:function(){return this.timestamp}}],[{key:"fromTimestamp",value:function(e){return new t(e)}},{key:"min",value:function(){return new t(new Um(0,0))}},{key:"max",value:function(){return new t(new Um(253402300799,999999999))}}]),t}(),jm=function(){"use strict";function t(n,r,i){e(E)(this,t),void 0===r?r=0:r>n.length&&wm(),void 0===i?i=n.length-r:i>n.length-r&&wm(),this.segments=n,this.offset=r,this.len=i}return e(C)(t,[{key:"length",get:function(){return this.len}},{key:"isEqual",value:function(e){return 0===t.comparator(this,e)}},{key:"child",value:function(e){var n=this.segments.slice(this.offset,this.limit());return e instanceof t?e.forEach((function(e){n.push(e)})):n.push(e),this.construct(n)}},{key:"limit",value:function(){return this.offset+this.length}},{key:"popFirst",value:function(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}},{key:"popLast",value:function(){return this.construct(this.segments,this.offset,this.length-1)}},{key:"firstSegment",value:function(){return this.segments[this.offset]}},{key:"lastSegment",value:function(){return this.get(this.length-1)}},{key:"get",value:function(e){return this.segments[this.offset+e]}},{key:"isEmpty",value:function(){return 0===this.length}},{key:"isPrefixOf",value:function(e){if(e.length<this.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"isImmediateParentOf",value:function(e){if(this.length+1!==e.length)return!1;for(var t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}},{key:"forEach",value:function(e){for(var t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}},{key:"toArray",value:function(){return this.segments.slice(this.offset,this.limit())}}],[{key:"comparator",value:function(e,t){for(var n=Math.min(e.length,t.length),r=0;r<n;r++){var i=e.get(r),a=t.get(r);if(i<a)return-1;if(i>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}]),t}(),qm=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(C)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().join("/")}},{key:"toString",value:function(){return this.canonicalString()}}],[{key:"fromString",value:function(){for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];var a=[],o=!0,s=!1,u=void 0;try{for(var c,l=n[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h,f=c.value;if(f.indexOf("//")>=0)throw new xm(Tm.INVALID_ARGUMENT,"Invalid segment (".concat(f,"). Paths must not contain // in them."));(h=a).push.apply(h,e(A)(f.split("/").filter((function(e){return e.length>0}))))}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return new r(a)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(jm),Bm=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Hm=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return e(C)(r,[{key:"construct",value:function(e,t,n){return new r(e,t,n)}},{key:"canonicalString",value:function(){return this.toArray().map((function(e){return e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),r.isValidIdentifier(e)||(e="`"+e+"`"),e})).join(".")}},{key:"toString",value:function(){return this.canonicalString()}},{key:"isKeyField",value:function(){return 1===this.length&&"__name__"===this.get(0)}}],[{key:"isValidIdentifier",value:function(e){return Bm.test(e)}},{key:"keyField",value:function(){return new r(["__name__"])}},{key:"fromServerFormat",value:function(e){for(var t=[],n="",i=0,a=function(){if(0===n.length)throw new xm(Tm.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},o=!1;i<e.length;){var s=e[i];if("\\"===s){if(i+1===e.length)throw new xm(Tm.INVALID_ARGUMENT,"Path has trailing escape character: "+e);var u=e[i+1];if("\\"!==u&&"."!==u&&"`"!==u)throw new xm(Tm.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=u,i+=2}else"`"===s?(o=!o,i++):"."!==s||o?(n+=s,i++):(a(),i++)}if(a(),o)throw new xm(Tm.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new r(t)}},{key:"emptyPath",value:function(){return new r([])}}]),r}(jm),Wm=function(){"use strict";function t(n){e(E)(this,t),this.path=n}return e(C)(t,[{key:"collectionGroup",get:function(){return this.path.popLast().lastSegment()}},{key:"hasCollectionId",value:function(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}},{key:"getCollectionGroup",value:function(){return this.path.get(this.path.length-2)}},{key:"getCollectionPath",value:function(){return this.path.popLast()}},{key:"isEqual",value:function(e){return null!==e&&0===qm.comparator(this.path,e.path)}},{key:"toString",value:function(){return this.path.toString()}}],[{key:"fromPath",value:function(e){return new t(qm.fromString(e))}},{key:"fromName",value:function(e){return new t(qm.fromString(e).popFirst(5))}},{key:"empty",value:function(){return new t(qm.emptyPath())}},{key:"comparator",value:function(e,t){return qm.comparator(e.path,t.path)}},{key:"isDocumentKey",value:function(e){return e.length%2==0}},{key:"fromSegments",value:function(e){return new t(new qm(e.slice()))}}]),t}(),zm=function t(n,r,i,a){"use strict";e(E)(this,t),this.indexId=n,this.collectionGroup=r,this.fields=i,this.indexState=a};
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
 */zm.UNKNOWN_ID=-1;function Km(e,t){var n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=Vm.fromTimestamp(1e9===r?new Um(n+1,0):new Um(n,r));return new Qm(i,Wm.empty(),t)}function Gm(e){return new Qm(e.readTime,e.key,-1)}var Qm=function(){"use strict";function t(n,r,i){e(E)(this,t),this.readTime=n,this.documentKey=r,this.largestBatchId=i}return e(C)(t,null,[{key:"min",value:function(){return new t(Vm.min(),Wm.empty(),-1)}},{key:"max",value:function(){return new t(Vm.max(),Wm.empty(),-1)}}]),t}();function Ym(e,t){var n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=Wm.comparator(e.documentKey,t.documentKey))?n:Mm(e.largestBatchId,t.largestBatchId)}
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
 */var Xm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",Jm=function(){"use strict";function t(){e(E)(this,t),this.onCommittedListeners=[]}return e(C)(t,[{key:"addOnCommittedListener",value:function(e){this.onCommittedListeners.push(e)}},{key:"raiseOnCommittedEvent",value:function(){this.onCommittedListeners.forEach((function(e){return e()}))}}]),t}();function $m(e){return Zm.apply(this,arguments)}function Zm(){return(Zm=
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
e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.code===Tm.FAILED_PRECONDITION&&n.message===Xm){e.next=2;break}throw n;case 2:mm("LocalStore","Unexpectedly lost primary lease");case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var eg=function(){"use strict";function t(n){var r=this;e(E)(this,t),this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n((function(e){r.isDone=!0,r.result=e,r.nextCallback&&r.nextCallback(e)}),(function(e){r.isDone=!0,r.error=e,r.catchCallback&&r.catchCallback(e)}))}return e(C)(t,[{key:"catch",value:function(e){return this.next(void 0,e)}},{key:"next",value:function(e,n){var r=this;return this.callbackAttached&&wm(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new t((function(t,i){var a=r;r.nextCallback=function(n){a.wrapSuccess(e,n).next(t,i)},r.catchCallback=function(e){a.wrapFailure(n,e).next(t,i)}}))}},{key:"toPromise",value:function(){var e=this;return new Promise((function(t,n){e.next(t,n)}))}},{key:"wrapUserFunction",value:function(e){try{var n=e();return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}}},{key:"wrapSuccess",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.resolve(n)}},{key:"wrapFailure",value:function(e,n){return e?this.wrapUserFunction((function(){return e(n)})):t.reject(n)}}],[{key:"resolve",value:function(e){return new t((function(t,n){t(e)}))}},{key:"reject",value:function(e){return new t((function(t,n){n(e)}))}},{key:"waitFor",value:function(e){return new t((function(t,n){var r=0,i=0,a=!1;e.forEach((function(e){++r,e.next((function(){++i,a&&i===r&&t()}),(function(e){return n(e)}))})),a=!0,i===r&&t()}))}},{key:"or",value:function(e){var n=t.resolve(!1),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,r){var i=r.value;n=n.next((function(e){return e?t.resolve(e):i()}))},u=e[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return n}},{key:"forEach",value:function(e,t){var n=this,r=[];return e.forEach((function(e,i){r.push(t.call(n,e,i))})),this.waitFor(r)}},{key:"mapArray",value:function(e,n){return new t((function(t,r){for(var i=function(i){var u=i;n(e[u]).next((function(e){o[u]=e,++s===a&&t(o)}),(function(e){return r(e)}))},a=e.length,o=new Array(a),s=0,u=0;u<a;u++)i(u)}))}},{key:"doWhile",value:function(e,n){return new t((function(t,r){var i=function(){!0===e()?n().next((function(){i()}),r):t()};i()}))}}]),t}();
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
 */function tg(e){return"IndexedDbTransactionError"===e.name}var ng=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.previousValue=n,r&&(r.sequenceNumberHandler=function(e){return i.it(e)},this.rt=function(e){return r.writeSequenceNumber(e)})}return e(C)(t,[{key:"it",value:function(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}},{key:"next",value:function(){var e=++this.previousValue;return this.rt&&this.rt(e),e}}]),t}();
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
function rg(e){var t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ig(e,t){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ag(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */ng.ot=-1;var og=function(){"use strict";function t(n,r){e(E)(this,t),this.comparator=n,this.root=r||ug.EMPTY}return e(C)(t,[{key:"insert",value:function(e,n){return new t(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ug.BLACK,null,null))}},{key:"remove",value:function(e){return new t(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ug.BLACK,null,null))}},{key:"get",value:function(e){for(var t=this.root;!t.isEmpty();){var n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}},{key:"indexOf",value:function(e){for(var t=0,n=this.root;!n.isEmpty();){var r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}},{key:"isEmpty",value:function(){return this.root.isEmpty()}},{key:"size",get:function(){return this.root.size}},{key:"minKey",value:function(){return this.root.minKey()}},{key:"maxKey",value:function(){return this.root.maxKey()}},{key:"inorderTraversal",value:function(e){return this.root.inorderTraversal(e)}},{key:"forEach",value:function(e){this.inorderTraversal((function(t,n){return e(t,n),!1}))}},{key:"toString",value:function(){var e=[];return this.inorderTraversal((function(t,n){return e.push("".concat(t,":").concat(n)),!1})),"{".concat(e.join(", "),"}")}},{key:"reverseTraversal",value:function(e){return this.root.reverseTraversal(e)}},{key:"getIterator",value:function(){return new sg(this.root,null,this.comparator,!1)}},{key:"getIteratorFrom",value:function(e){return new sg(this.root,e,this.comparator,!1)}},{key:"getReverseIterator",value:function(){return new sg(this.root,null,this.comparator,!0)}},{key:"getReverseIteratorFrom",value:function(e){return new sg(this.root,e,this.comparator,!0)}}]),t}(),sg=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.isReverse=a,this.nodeStack=[];for(var o=1;!n.isEmpty();)if(o=r?i(n.key,r):1,r&&a&&(o*=-1),o<0)n=this.isReverse?n.left:n.right;else{if(0===o){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}return e(C)(t,[{key:"getNext",value:function(){var e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}},{key:"hasNext",value:function(){return this.nodeStack.length>0}},{key:"peek",value:function(){if(0===this.nodeStack.length)return null;var e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}]),t}(),ug=function(){"use strict";function t(n,r,i,a,o){e(E)(this,t),this.key=n,this.value=r,this.color=null!=i?i:t.RED,this.left=null!=a?a:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return e(C)(t,[{key:"copy",value:function(e,n,r,i,a){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=a?a:this.right)}},{key:"isEmpty",value:function(){return!1}},{key:"inorderTraversal",value:function(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}},{key:"reverseTraversal",value:function(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}},{key:"min",value:function(){return this.left.isEmpty()?this:this.left.min()}},{key:"minKey",value:function(){return this.min().key}},{key:"maxKey",value:function(){return this.right.isEmpty()?this.key:this.right.maxKey()}},{key:"insert",value:function(e,t,n){var r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}},{key:"removeMin",value:function(){if(this.left.isEmpty())return t.EMPTY;var e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}},{key:"remove",value:function(e,n){var r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===n(e,i.key)){if(i.right.isEmpty())return t.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}},{key:"isRed",value:function(){return this.color}},{key:"fixUp",value:function(){var e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}},{key:"moveRedLeft",value:function(){var e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}},{key:"moveRedRight",value:function(){var e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}},{key:"rotateLeft",value:function(){var e=this.copy(null,null,t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}},{key:"rotateRight",value:function(){var e=this.copy(null,null,t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}},{key:"colorFlip",value:function(){var e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}},{key:"checkMaxDepth",value:function(){var e=this.check();return Math.pow(2,e)<=this.size+1}},{key:"check",value:function(){if(this.isRed()&&this.left.isRed())throw wm();if(this.right.isRed())throw wm();var e=this.left.check();if(e!==this.right.check())throw wm();return e+(this.isRed()?0:1)}}]),t}();ug.EMPTY=null,ug.RED=!0,ug.BLACK=!1,ug.EMPTY=new(function(){"use strict";function t(){e(E)(this,t),this.size=0}return e(C)(t,[{key:"key",get:function(){throw wm()}},{key:"value",get:function(){throw wm()}},{key:"color",get:function(){throw wm()}},{key:"left",get:function(){throw wm()}},{key:"right",get:function(){throw wm()}},{key:"copy",value:function(e,t,n,r,i){return this}},{key:"insert",value:function(e,t,n){return new ug(e,t)}},{key:"remove",value:function(e,t){return this}},{key:"isEmpty",value:function(){return!0}},{key:"inorderTraversal",value:function(e){return!1}},{key:"reverseTraversal",value:function(e){return!1}},{key:"minKey",value:function(){return null}},{key:"maxKey",value:function(){return null}},{key:"isRed",value:function(){return!1}},{key:"checkMaxDepth",value:function(){return!0}},{key:"check",value:function(){return 0}}]),t}());
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
var cg=function(){"use strict";function t(n){e(E)(this,t),this.comparator=n,this.data=new og(this.comparator)}return e(C)(t,[{key:"has",value:function(e){return null!==this.data.get(e)}},{key:"first",value:function(){return this.data.minKey()}},{key:"last",value:function(){return this.data.maxKey()}},{key:"size",get:function(){return this.data.size}},{key:"indexOf",value:function(e){return this.data.indexOf(e)}},{key:"forEach",value:function(e){this.data.inorderTraversal((function(t,n){return e(t),!1}))}},{key:"forEachInRange",value:function(e,t){for(var n=this.data.getIteratorFrom(e[0]);n.hasNext();){var r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}},{key:"forEachWhile",value:function(e,t){var n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}},{key:"firstAfterOrEqual",value:function(e){var t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}},{key:"getIterator",value:function(){return new lg(this.data.getIterator())}},{key:"getIteratorFrom",value:function(e){return new lg(this.data.getIteratorFrom(e))}},{key:"add",value:function(e){return this.copy(this.data.remove(e).insert(e,!0))}},{key:"delete",value:function(e){return this.has(e)?this.copy(this.data.remove(e)):this}},{key:"isEmpty",value:function(){return this.data.isEmpty()}},{key:"unionWith",value:function(e){var t=this;return t.size<e.size&&(t=e,e=this),e.forEach((function(e){t=t.add(e)})),t}},{key:"isEqual",value:function(e){if(!(e instanceof t))return!1;if(this.size!==e.size)return!1;for(var n=this.data.getIterator(),r=e.data.getIterator();n.hasNext();){var i=n.getNext().key,a=r.getNext().key;if(0!==this.comparator(i,a))return!1}return!0}},{key:"toArray",value:function(){var e=[];return this.forEach((function(t){e.push(t)})),e}},{key:"toString",value:function(){var e=[];return this.forEach((function(t){return e.push(t)})),"SortedSet("+e.toString()+")"}},{key:"copy",value:function(e){var n=new t(this.comparator);return n.data=e,n}}]),t}(),lg=function(){"use strict";function t(n){e(E)(this,t),this.iter=n}return e(C)(t,[{key:"getNext",value:function(){return this.iter.getNext().key}},{key:"hasNext",value:function(){return this.iter.hasNext()}}]),t}();
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
var hg=function(){"use strict";function t(n){e(E)(this,t),this.fields=n,n.sort(Hm.comparator)}return e(C)(t,[{key:"unionWith",value:function(e){var n=new cg(Hm.comparator),r=!0,i=!1,a=void 0;try{for(var o,s=this.fields[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n=n.add(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var c=!0,l=!1,h=void 0;try{for(var f,d=e[Symbol.iterator]();!(c=(f=d.next()).done);c=!0){var v=f.value;n=n.add(v)}}catch(e){l=!0,h=e}finally{try{c||null==d.return||d.return()}finally{if(l)throw h}}return new t(n.toArray())}},{key:"covers",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.fields[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.isPrefixOf(e))return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"isEqual",value:function(e){return Fm(this.fields,e.fields,(function(e,t){return e.isEqual(t)}))}}],[{key:"empty",value:function(){return new t([])}}]),t}();
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
 */var fg=Symbol.iterator,dg=function(){"use strict";function t(n){e(E)(this,t),this.binaryString=n}return e(C)(t,[{key:fg,value:function(){var e=this,t=0;return{next:function(){return t<e.binaryString.length?{value:e.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}}},{key:"toBase64",value:function(){var e;return e=this.binaryString,btoa(e)}},{key:"toUint8Array",value:function(){return function(e){for(var t=new Uint8Array(e.length),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}},{key:"approximateByteSize",value:function(){return 2*this.binaryString.length}},{key:"compareTo",value:function(e){return Mm(this.binaryString,e.binaryString)}},{key:"isEqual",value:function(e){return this.binaryString===e.binaryString}}],[{key:"fromBase64String",value:function(e){return new t(atob(e))}},{key:"fromUint8Array",value:function(e){return new t(function(e){for(var t="",n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}}]),t}();
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
 */dg.EMPTY_BYTE_STRING=new dg("");var vg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pg(e){if(bm(!!e),"string"==typeof e){var t=0,n=vg.exec(e);if(bm(!!n),n[1]){var r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}var i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:yg(e.seconds),nanos:yg(e.nanos)}}function yg(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function mg(e){return"string"==typeof e?dg.fromBase64String(e):dg.fromUint8Array(e)}
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
 */function gg(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function kg(e){var t=pg(e.mapValue.fields.__local_write_time__.timestampValue);return new Um(t.seconds,t.nanos)}
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
 */var _g=function t(n,r,i,a,o,s,u,c){"use strict";e(E)(this,t),this.databaseId=n,this.appId=r,this.persistenceKey=i,this.host=a,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=u,this.useFetchStreams=c},wg=function(){"use strict";function t(n,r){e(E)(this,t),this.projectId=n,this.database=r||"(default)"}return e(C)(t,[{key:"isDefaultDatabase",get:function(){return"(default)"===this.database}},{key:"isEqual",value:function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database}}],[{key:"empty",value:function(){return new t("","")}}]),t}();
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
function bg(e){return null==e}function Ig(e){return 0===e&&1/e==-1/0}function Tg(e){return"number"==typeof e&&Number.isInteger(e)&&!Ig(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */var xg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Eg(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?gg(e)?4:Fg(e)?9007199254740991:10:wm()}function Cg(e,t){if(e===t)return!0;var n,r=Eg(e);if(r!==Eg(t))return!1;switch(r){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return kg(e).isEqual(kg(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;var n=pg(e.timestampValue),r=pg(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return n=t,mg(e.bytesValue).isEqual(mg(n.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return yg(e.geoPointValue.latitude)===yg(t.geoPointValue.latitude)&&yg(e.geoPointValue.longitude)===yg(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return yg(e.integerValue)===yg(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){var n=yg(e.doubleValue),r=yg(t.doubleValue);return n===r?Ig(n)===Ig(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Fm(e.arrayValue.values||[],t.arrayValue.values||[],Cg);case 10:return function(e,t){var n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(rg(n)!==rg(r))return!1;for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Cg(n[i],r[i])))return!1;return!0}(e,t);default:return wm()}}function Sg(e,t){return void 0!==(e.values||[]).find((function(e){return Cg(e,t)}))}function Ng(e,t){if(e===t)return 0;var n,r,i,a,o=Eg(e),s=Eg(t);if(o!==s)return Mm(o,s);switch(o){case 0:case 9007199254740991:return 0;case 1:return Mm(e.booleanValue,t.booleanValue);case 2:return r=t,i=yg((n=e).integerValue||n.doubleValue),a=yg(r.integerValue||r.doubleValue),i<a?-1:i>a?1:i===a?0:isNaN(i)?isNaN(a)?0:-1:1;case 3:return Ag(e.timestampValue,t.timestampValue);case 4:return Ag(kg(e),kg(t));case 5:return Mm(e.stringValue,t.stringValue);case 6:return function(e,t){var n=mg(e),r=mg(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){for(var n=e.split("/"),r=t.split("/"),i=0;i<n.length&&i<r.length;i++){var a=Mm(n[i],r[i]);if(0!==a)return a}return Mm(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){var n=Mm(yg(e.latitude),yg(t.latitude));return 0!==n?n:Mm(yg(e.longitude),yg(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){for(var n=e.values||[],r=t.values||[],i=0;i<n.length&&i<r.length;++i){var a=Ng(n[i],r[i]);if(a)return a}return Mm(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===xg.mapValue&&t===xg.mapValue)return 0;if(e===xg.mapValue)return 1;if(t===xg.mapValue)return-1;var n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(var o=0;o<r.length&&o<a.length;++o){var s=Mm(r[o],a[o]);if(0!==s)return s;var u=Ng(n[r[o]],i[a[o]]);if(0!==u)return u}return Mm(r.length,a.length)}(e.mapValue,t.mapValue);default:throw wm()}}function Ag(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Mm(e,t);var n=pg(e),r=pg(t),i=Mm(n.seconds,r.seconds);return 0!==i?i:Mm(n.nanos,r.nanos)}function Rg(e){return Dg(e)}function Dg(e){var t,n,r,i;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?(r=e.timestampValue,i=pg(r),"time(".concat(i.seconds,",").concat(i.nanos,")")):"stringValue"in e?e.stringValue:"bytesValue"in e?mg(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Wm.fromName(n).toString()):"geoPointValue"in e?"geo(".concat((t=e.geoPointValue).latitude,",").concat(t.longitude,")"):"arrayValue"in e?function(e){var t="[",n=!0,r=!0,i=!1,a=void 0;try{for(var o,s=(e.values||[])[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;n?n=!1:t+=",",t+=Dg(u)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return t+"]"}(e.arrayValue):"mapValue"in e?function(e){var t=Object.keys(e.fields||{}).sort(),n="{",r=!0,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r?r=!1:n+=",",n+="".concat(c,":").concat(Dg(e.fields[c]))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return n+"}"}(e.mapValue):wm()}function Pg(e){return!!e&&"integerValue"in e}function Og(e){return!!e&&"arrayValue"in e}function Lg(e){return!!e&&"mapValue"in e}function Mg(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){var t={mapValue:{fields:{}}};return ig(e.mapValue.fields,(function(e,n){return t.mapValue.fields[e]=Mg(n)})),t}if(e.arrayValue){for(var n={arrayValue:{values:[]}},r=0;r<(e.arrayValue.values||[]).length;++r)n.arrayValue.values[r]=Mg(e.arrayValue.values[r]);return n}return Object.assign({},e)}function Fg(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
var Ug=function(){"use strict";function t(n){e(E)(this,t),this.value=n}return e(C)(t,[{key:"field",value:function(e){if(e.isEmpty())return this.value;for(var t=this.value,n=0;n<e.length-1;++n)if(!Lg(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}},{key:"set",value:function(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mg(t)}},{key:"setAll",value:function(e){var t=this,n=Hm.emptyPath(),r={},i=[];e.forEach((function(e,a){if(!n.isImmediateParentOf(a)){var o=t.getFieldsMap(n);t.applyChanges(o,r,i),r={},i=[],n=a.popLast()}e?r[a.lastSegment()]=Mg(e):i.push(a.lastSegment())}));var a=this.getFieldsMap(n);this.applyChanges(a,r,i)}},{key:"delete",value:function(e){var t=this.field(e.popLast());Lg(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}},{key:"isEqual",value:function(e){return Cg(this.value,e.value)}},{key:"getFieldsMap",value:function(e){var t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(var n=0;n<e.length;++n){var r=t.mapValue.fields[e.get(n)];Lg(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}},{key:"applyChanges",value:function(e,t,n){ig(t,(function(t,n){return e[t]=n}));var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;delete e[u]}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"clone",value:function(){return new t(Mg(this.value))}}],[{key:"empty",value:function(){return new t({mapValue:{}})}}]),t}();function Vg(e){var t=[];return ig(e.fields,(function(e,n){var r=new Hm([e]);if(Lg(n)){var i=Vg(n.mapValue).fields,a=!0,o=!1,s=void 0;if(0===i.length)t.push(r);else try{for(var u,c=i[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.push(r.child(l))}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}}else t.push(r)})),new hg(t)
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
 */}var jg=function(){"use strict";function t(n,r,i,a,o,s){e(E)(this,t),this.key=n,this.documentType=r,this.version=i,this.readTime=a,this.data=o,this.documentState=s}return e(C)(t,[{key:"convertToFoundDocument",value:function(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}},{key:"convertToNoDocument",value:function(e){return this.version=e,this.documentType=2,this.data=Ug.empty(),this.documentState=0,this}},{key:"convertToUnknownDocument",value:function(e){return this.version=e,this.documentType=3,this.data=Ug.empty(),this.documentState=2,this}},{key:"setHasCommittedMutations",value:function(){return this.documentState=2,this}},{key:"setHasLocalMutations",value:function(){return this.documentState=1,this.version=Vm.min(),this}},{key:"setReadTime",value:function(e){return this.readTime=e,this}},{key:"hasLocalMutations",get:function(){return 1===this.documentState}},{key:"hasCommittedMutations",get:function(){return 2===this.documentState}},{key:"hasPendingWrites",get:function(){return this.hasLocalMutations||this.hasCommittedMutations}},{key:"isValidDocument",value:function(){return 0!==this.documentType}},{key:"isFoundDocument",value:function(){return 1===this.documentType}},{key:"isNoDocument",value:function(){return 2===this.documentType}},{key:"isUnknownDocument",value:function(){return 3===this.documentType}},{key:"isEqual",value:function(e){return e instanceof t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}},{key:"mutableCopy",value:function(){return new t(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}},{key:"toString",value:function(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}}],[{key:"newInvalidDocument",value:function(e){return new t(e,0,Vm.min(),Vm.min(),Ug.empty(),0)}},{key:"newFoundDocument",value:function(e,n,r){return new t(e,1,n,Vm.min(),r,0)}},{key:"newNoDocument",value:function(e,n){return new t(e,2,n,Vm.min(),Ug.empty(),0)}},{key:"newUnknownDocument",value:function(e,n){return new t(e,3,n,Vm.min(),Ug.empty(),2)}}]),t}(),qg=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;e(E)(this,t),this.path=n,this.collectionGroup=r,this.orderBy=i,this.filters=a,this.limit=o,this.startAt=s,this.endAt=u,this.ut=null};
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
 */function Bg(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new qg(e,t,n,r,i,a,o)}function Hg(e){var t=Im(e);if(null===t.ut){var n=t.path.canonicalString();null!==t.collectionGroup&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((function(e){var t;return(t=e).field.canonicalString()+t.op.toString()+Rg(t.value)})).join(","),n+="|ob:",n+=t.orderBy.map((function(e){return(t=e).field.canonicalString()+t.dir;var t})).join(","),bg(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Rg(e)})).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Rg(e)})).join(",")),t.ut=n}return t.ut}function Wg(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(var n=0;n<e.orderBy.length;n++)if(!nk(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(var r=0;r<e.filters.length;r++)if(i=e.filters[r],a=t.filters[r],i.op!==a.op||!i.field.isEqual(a.field)||!Cg(i.value,a.value))return!1;var i,a;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!ik(e.startAt,t.startAt)&&ik(e.endAt,t.endAt)}var zg=function(t){"use strict";e(S)(r,(function t(){e(E)(this,t)}));var n=e(D)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this)).field=t,o.op=i,o.value=a,e(Zf)(o)}return e(C)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(Ng(t,this.value)):null!==t&&Eg(this.value)===Eg(t)&&this.at(Ng(t,this.value))}},{key:"at",value:function(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return wm()}}},{key:"ht",value:function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}],[{key:"create",value:function(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Kg(e,t,n):"array-contains"===t?new Xg(e,n):"in"===t?new Jg(e,n):"not-in"===t?new $g(e,n):"array-contains-any"===t?new Zg(e,n):new r(e,t,n)}},{key:"ct",value:function(e,t,n){return"in"===t?new Gg(e,n):new Qg(e,n)}}]),r}(),Kg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,t,i,a)).key=Wm.fromName(a.referenceValue),e(Zf)(o)}return e(C)(r,[{key:"matches",value:function(e){var t=Wm.comparator(e.key,this.key);return this.at(t)}}]),r}(zg),Gg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this,t,"in",i)).keys=Yg("in",i),e(Zf)(a)}return e(C)(r,[{key:"matches",value:function(e){return this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(zg),Qg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this,t,"not-in",i)).keys=Yg("not-in",i),e(Zf)(a)}return e(C)(r,[{key:"matches",value:function(e){return!this.keys.some((function(t){return t.isEqual(e.key)}))}}]),r}(zg);function Yg(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(e){return Wm.fromName(e.referenceValue)}))}var Xg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){return e(E)(this,r),n.call(this,t,"array-contains",i)}return e(C)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return Og(t)&&Sg(t.arrayValue,this.value)}}]),r}(zg),Jg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){return e(E)(this,r),n.call(this,t,"in",i)}return e(C)(r,[{key:"matches",value:function(e){var t=e.data.field(this.field);return null!==t&&Sg(this.value.arrayValue,t)}}]),r}(zg),$g=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){return e(E)(this,r),n.call(this,t,"not-in",i)}return e(C)(r,[{key:"matches",value:function(e){if(Sg(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;var t=e.data.field(this.field);return null!==t&&!Sg(this.value.arrayValue,t)}}]),r}(zg),Zg=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){return e(E)(this,r),n.call(this,t,"array-contains-any",i)}return e(C)(r,[{key:"matches",value:function(e){var t=this,n=e.data.field(this.field);return!(!Og(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(e){return Sg(t.value.arrayValue,e)}))}}]),r}(zg),ek=function t(n,r){"use strict";e(E)(this,t),this.position=n,this.inclusive=r},tk=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";e(E)(this,t),this.field=n,this.dir=r};function nk(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function rk(e,t,n){for(var r=0,i=0;i<e.position.length;i++){var a=t[i],o=e.position[i];if(r=a.field.isKeyField()?Wm.comparator(Wm.fromName(o.referenceValue),n.key):Ng(o,n.data.field(a.field)),"desc"===a.dir&&(r*=-1),0!==r)break}return r}function ik(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(var n=0;n<e.position.length;n++)if(!Cg(e.position[n],t.position[n]))return!1;return!0}
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
 */var ak=function t(n){"use strict";var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"F",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null,c=arguments.length>7&&void 0!==arguments[7]?arguments[7]:null;e(E)(this,t),this.path=n,this.collectionGroup=r,this.explicitOrderBy=i,this.filters=a,this.limit=o,this.limitType=s,this.startAt=u,this.endAt=c,this.lt=null,this.ft=null,this.startAt,this.endAt};function ok(e,t,n,r,i,a,o,s){return new ak(e,t,n,r,i,a,o,s)}function sk(e){return new ak(e)}function uk(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ck(e){var t=!0,n=!1,r=void 0;try{for(var i,a=e.filters[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value;if(o.ht())return o.field}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return null}function lk(e){return null!==e.collectionGroup}function hk(e){var t=Im(e);if(null===t.lt){t.lt=[];var n=ck(t),r=uk(t);if(null!==n&&null===r)n.isKeyField()||t.lt.push(new tk(n)),t.lt.push(new tk(Hm.keyField(),"asc"));else{var i=!1,a=!0,o=!1,s=void 0;try{for(var u,c=t.explicitOrderBy[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;t.lt.push(l),l.field.isKeyField()&&(i=!0)}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}if(!i){var h=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new tk(Hm.keyField(),h))}}}return t.lt}function fk(e){var t=Im(e);if(!t.ft)if("F"===t.limitType)t.ft=Bg(t.path,t.collectionGroup,hk(t),t.filters,t.limit,t.startAt,t.endAt);else{var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=hk(t)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c="desc"===u.dir?"asc":"desc";n.push(new tk(u.field,c))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}var l=t.endAt?new ek(t.endAt.position,t.endAt.inclusive):null,h=t.startAt?new ek(t.startAt.position,t.startAt.inclusive):null;t.ft=Bg(t.path,t.collectionGroup,n,t.filters,t.limit,l,h)}return t.ft}function dk(e,t,n){return new ak(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function vk(e,t){return Wg(fk(e),fk(t))&&e.limitType===t.limitType}function pk(e){return"".concat(Hg(fk(e)),"|lt:").concat(e.limitType)}function yk(e){return"Query(target=".concat((t=fk(e),n=t.path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map((function(e){var t;return"".concat((t=e).field.canonicalString()," ").concat(t.op," ").concat(Rg(t.value))})).join(", "),"]")),bg(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map((function(e){return"".concat((t=e).field.canonicalString()," (").concat(t.dir,")");var t})).join(", "),"]")),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((function(e){return Rg(e)})).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((function(e){return Rg(e)})).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")");var t,n}function mk(e,t){return t.isFoundDocument()&&(i=e,o=(a=t).key.path,null!==i.collectionGroup?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(o):Wm.isDocumentKey(i.path)?i.path.isEqual(o):i.path.isImmediateParentOf(o))&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.explicitOrderBy[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(!s.field.isKeyField()&&null===t.data.field(s.field))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=e.filters[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){if(!a.value.matches(t))return!1}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){var r=rk(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,hk(n),r)||n.endAt&&!function(e,t,n){var r=rk(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,hk(n),r)));var n,r,i,a,o}function gk(e){return function(t,n){var r=!1,i=!0,a=!1,o=void 0;try{for(var s,u=hk(e)[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=kk(c,t,n);if(0!==l)return l;r=r||c.field.isKeyField()}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return 0}}function kk(e,t,n){var r,i,a,o,s=e.field.isKeyField()?Wm.comparator(t.key,n.key):(r=e.field,i=n,a=t.data.field(r),o=i.data.field(r),null!==a&&null!==o?Ng(a,o):wm());switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return wm()}}
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
 */function _k(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ig(t)?"-0":t}}function wk(e){return{integerValue:""+e}}function bk(e,t){return Tg(t)?wk(t):_k(e,t)}
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
 */var Ik=function t(){"use strict";e(E)(this,t),this._=void 0};function Tk(e,t,n){return e instanceof Ck?(i=t,a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:(r=n).seconds,nanos:r.nanoseconds}}}},i&&(a.fields.__previous_value__=i),{mapValue:a}):e instanceof Sk?Nk(e,t):e instanceof Ak?Rk(e,t):function(e,t){var n=Ek(e,t),r=Pk(n)+Pk(e._t);return Pg(n)&&Pg(e._t)?wk(r):_k(e.wt,r)}(e,t);var r,i,a}function xk(e,t,n){return e instanceof Sk?Nk(e,t):e instanceof Ak?Rk(e,t):n}function Ek(e,t){var n,r;return e instanceof Dk?Pg(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null}var Ck=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(){return e(E)(this,r),n.apply(this,arguments)}return r}(Ik),Sk=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).elements=t,e(Zf)(i)}return r}(Ik);function Nk(e,t){var n=Ok(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n.some((function(e){return Cg(e,r)}))||n.push(r)},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Ak=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).elements=t,e(Zf)(i)}return r}(Ik);function Rk(e,t){var n=Ok(t),r=!0,i=!1,a=void 0;try{for(var o,s=function(e,t){var r=t.value;n=n.filter((function(e){return!Cg(e,r)}))},u=e.elements[Symbol.iterator]();!(r=(o=u.next()).done);r=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw a}}return{arrayValue:{values:n}}}var Dk=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this)).wt=t,a._t=i,e(Zf)(a)}return r}(Ik);function Pk(e){return yg(e.integerValue||e.doubleValue)}function Ok(e){return Og(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */var Lk=function t(n,r){"use strict";e(E)(this,t),this.version=n,this.transformResults=r},Mk=function(){"use strict";function t(n,r){e(E)(this,t),this.updateTime=n,this.exists=r}return e(C)(t,[{key:"isNone",get:function(){return void 0===this.updateTime&&void 0===this.exists}},{key:"isEqual",value:function(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}],[{key:"none",value:function(){return new t}},{key:"exists",value:function(e){return new t(void 0,e)}},{key:"updateTime",value:function(e){return new t(e)}}]),t}();function Fk(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}var Uk=function t(){"use strict";e(E)(this,t)};function Vk(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Jk(e.key,Mk.none()):new Wk(e.key,e.data,Mk.none());var n=e.data,r=Ug.empty(),i=new cg(Hm.comparator),a=!0,o=!1,s=void 0;try{for(var u,c=t.fields[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;if(!i.has(l)){var h=n.field(l);null===h&&l.length>1&&(l=l.popLast(),h=n.field(l)),null===h?r.delete(l):r.set(l,h),i=i.add(l)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new zk(e.key,r,new hg(i.toArray()),Mk.none())}function jk(e,t,n){var r,i,a,o,s;e instanceof Wk?(i=t,a=n,o=(r=e).value.clone(),s=Gk(r.fieldTransforms,i,a.transformResults),o.setAll(s),i.convertToFoundDocument(a.version,o).setHasCommittedMutations()):e instanceof zk?function(e,t,n){if(Fk(e.precondition,t)){var r=Gk(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Kk(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}else t.convertToUnknownDocument(n.version)}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function qk(e,t,n,r){return e instanceof Wk?function(e,t,n,r){if(!Fk(e.precondition,t))return n;var i=e.value.clone(),a=Qk(e.fieldTransforms,r,t);return i.setAll(a),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof zk?function(e,t,n,r){if(!Fk(e.precondition,t))return n;var i=Qk(e.fieldTransforms,r,t),a=t.data;return a.setAll(Kk(e)),a.setAll(i),t.convertToFoundDocument(t.version,a).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((function(e){return e.field})))}(e,t,n,r):(i=t,a=n,Fk(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a);var i,a}function Bk(e,t){var n=null,r=!0,i=!1,a=void 0;try{for(var o,s=e.fieldTransforms[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value,c=t.data.field(u.field),l=Ek(u.transform,c||null);null!=l&&(null===n&&(n=Ug.empty()),n.set(u.field,l))}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n||null}function Hk(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Fm(n,r,(function(e,t){return function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof Sk&&r instanceof Sk||n instanceof Ak&&r instanceof Ak?Fm(n.elements,r.elements,Cg):n instanceof Dk&&r instanceof Dk?Cg(n._t,r._t):n instanceof Ck&&r instanceof Ck);var n,r}(e,t)}))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask));var n,r}var Wk=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[];return e(E)(this,r),(o=n.call(this)).key=t,o.value=i,o.precondition=a,o.fieldTransforms=s,o.type=0,e(Zf)(o)}return e(C)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Uk),zk=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o){var s,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];return e(E)(this,r),(s=n.call(this)).key=t,s.data=i,s.fieldMask=a,s.precondition=o,s.fieldTransforms=u,s.type=1,e(Zf)(s)}return e(C)(r,[{key:"getFieldMask",value:function(){return this.fieldMask}}]),r}(Uk);function Kk(e){var t=new Map;return e.fieldMask.fields.forEach((function(n){if(!n.isEmpty()){var r=e.data.field(n);t.set(n,r)}})),t}function Gk(e,t,n){var r=new Map;bm(e.length===n.length);for(var i=0;i<n.length;i++){var a=e[i],o=a.transform,s=t.data.field(a.field);r.set(a.field,xk(o,s,n[i]))}return r}function Qk(e,t,n){var r=new Map,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value,l=c.transform,h=n.data.field(c.field);r.set(c.field,Tk(l,h,t))}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var Yk,Xk,Jk=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=2,a.fieldTransforms=[],e(Zf)(a)}return e(C)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Uk),$k=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i){var a;return e(E)(this,r),(a=n.call(this)).key=t,a.precondition=i,a.type=3,a.fieldTransforms=[],e(Zf)(a)}return e(C)(r,[{key:"getFieldMask",value:function(){return null}}]),r}(Uk);function Zk(e){switch(e){default:return wm();case Tm.CANCELLED:case Tm.UNKNOWN:case Tm.DEADLINE_EXCEEDED:case Tm.RESOURCE_EXHAUSTED:case Tm.INTERNAL:case Tm.UNAVAILABLE:case Tm.UNAUTHENTICATED:return!1;case Tm.INVALID_ARGUMENT:case Tm.NOT_FOUND:case Tm.ALREADY_EXISTS:case Tm.PERMISSION_DENIED:case Tm.FAILED_PRECONDITION:case Tm.ABORTED:case Tm.OUT_OF_RANGE:case Tm.UNIMPLEMENTED:case Tm.DATA_LOSS:return!0}}function e_(e){if(void 0===e)return gm("GRPC error has no .code"),Tm.UNKNOWN;switch(e){case Yk.OK:return Tm.OK;case Yk.CANCELLED:return Tm.CANCELLED;case Yk.UNKNOWN:return Tm.UNKNOWN;case Yk.DEADLINE_EXCEEDED:return Tm.DEADLINE_EXCEEDED;case Yk.RESOURCE_EXHAUSTED:return Tm.RESOURCE_EXHAUSTED;case Yk.INTERNAL:return Tm.INTERNAL;case Yk.UNAVAILABLE:return Tm.UNAVAILABLE;case Yk.UNAUTHENTICATED:return Tm.UNAUTHENTICATED;case Yk.INVALID_ARGUMENT:return Tm.INVALID_ARGUMENT;case Yk.NOT_FOUND:return Tm.NOT_FOUND;case Yk.ALREADY_EXISTS:return Tm.ALREADY_EXISTS;case Yk.PERMISSION_DENIED:return Tm.PERMISSION_DENIED;case Yk.FAILED_PRECONDITION:return Tm.FAILED_PRECONDITION;case Yk.ABORTED:return Tm.ABORTED;case Yk.OUT_OF_RANGE:return Tm.OUT_OF_RANGE;case Yk.UNIMPLEMENTED:return Tm.UNIMPLEMENTED;case Yk.DATA_LOSS:return Tm.DATA_LOSS;default:return wm()}}(Xk=Yk||(Yk={}))[Xk.OK=0]="OK",Xk[Xk.CANCELLED=1]="CANCELLED",Xk[Xk.UNKNOWN=2]="UNKNOWN",Xk[Xk.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Xk[Xk.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Xk[Xk.NOT_FOUND=5]="NOT_FOUND",Xk[Xk.ALREADY_EXISTS=6]="ALREADY_EXISTS",Xk[Xk.PERMISSION_DENIED=7]="PERMISSION_DENIED",Xk[Xk.UNAUTHENTICATED=16]="UNAUTHENTICATED",Xk[Xk.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Xk[Xk.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Xk[Xk.ABORTED=10]="ABORTED",Xk[Xk.OUT_OF_RANGE=11]="OUT_OF_RANGE",Xk[Xk.UNIMPLEMENTED=12]="UNIMPLEMENTED",Xk[Xk.INTERNAL=13]="INTERNAL",Xk[Xk.UNAVAILABLE=14]="UNAVAILABLE",Xk[Xk.DATA_LOSS=15]="DATA_LOSS";
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
var t_=function(){"use strict";function t(n,r){e(E)(this,t),this.mapKeyFn=n,this.equalsFn=r,this.inner={},this.innerSize=0}return e(C)(t,[{key:"get",value:function(t){var n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(N)(s.value,2),l=c[0],h=c[1];if(this.equalsFn(l,t))return h}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}}},{key:"has",value:function(e){return void 0!==this.get(e)}},{key:"set",value:function(e,t){var n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(var i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}},{key:"delete",value:function(e){var t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(var r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}},{key:"forEach",value:function(t){ig(this.inner,(function(n,r){var i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=e(N)(s.value,2),l=c[0],h=c[1];t(l,h)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}}))}},{key:"isEmpty",value:function(){return ag(this.inner)}},{key:"size",value:function(){return this.innerSize}}]),t}(),n_=new og(Wm.comparator);
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
 */function r_(){return n_}var i_=new og(Wm.comparator);function a_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=i_,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.insert(c.key,c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}function o_(e){var t=i_;return e.forEach((function(e,n){return t=t.insert(e,n.overlayedDocument)})),t}function s_(){return c_()}function u_(){return c_()}function c_(){return new t_((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)}))}var l_=new og(Wm.comparator),h_=new cg(Wm.comparator);function f_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=h_,i=!0,a=!1,o=void 0;try{for(var s,u=t[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;r=r.add(c)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return r}var d_=new cg(Mm);function v_(){return d_}
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
var p_=function t(n,r){"use strict";e(E)(this,t),this.databaseId=n,this.dt=r};function y_(e,t){return e.dt?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function m_(e,t){return e.dt?t.toBase64():t.toUint8Array()}function g_(e,t){return y_(e,t.toTimestamp())}function k_(e){return bm(!!e),Vm.fromTimestamp((t=pg(e),new Um(t.seconds,t.nanos)));var t}function __(e,t){return(n=e,new qm(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function w_(e){var t=qm.fromString(e);return bm(D_(t)),t}function b_(e,t){return __(e.databaseId,t.path)}function I_(e){var t=w_(e);return 4===t.length?qm.emptyPath():x_(t)}function T_(e){return new qm(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function x_(e){return bm(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function E_(e,t,n){return{name:b_(e,t),fields:n.value.mapValue.fields}}function C_(e,t){var n,r,i;if(t instanceof Wk)n={update:E_(e,t.key,t.value)};else if(t instanceof Jk)n={delete:b_(e,t.key)};else if(t instanceof zk)n={update:E_(e,t.key,t.data),updateMask:(r=t.fieldMask,i=[],r.fields.forEach((function(e){return i.push(e.canonicalString())})),{fieldPaths:i})};else{if(!(t instanceof $k))return wm();n={verify:b_(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((function(e){return function(e,t){var n=t.transform;if(n instanceof Ck)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Sk)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ak)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Dk)return{fieldPath:t.field.canonicalString(),increment:n._t};throw wm()}(0,e)}))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:g_(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:wm()}(e,t.precondition)),n}function S_(e){var t=I_(e.parent),n=e.structuredQuery,r=n.from?n.from.length:0,i=null;if(r>0){bm(1===r);var a=n.from[0];a.allDescendants?i=a.collectionId:t=t.child(a.collectionId)}var o=[];n.where&&(o=N_(n.where));var s=[];n.orderBy&&(s=n.orderBy.map((function(e){return new tk(A_((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));var u,c,l=null;n.limit&&(u=n.limit,l=bg(c="object"==typeof u?u.value:u)?null:c);var h=null;n.startAt&&(h=function(e){var t=!!e.before,n=e.values||[];return new ek(n,t)}(n.startAt));var f=null;return n.endAt&&(f=function(e){var t=!e.before,n=e.values||[];return new ek(n,t)}(n.endAt)),ok(t,i,s,o,l,"F",h,f)}function N_(e){return e?void 0!==e.unaryFilter?[R_(e)]:void 0!==e.fieldFilter?[(t=e,zg.create(A_(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return wm()}}(t.fieldFilter.op),t.fieldFilter.value))]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((function(e){return N_(e)})).reduce((function(e,t){return e.concat(t)})):wm():[];var t}function A_(e){return Hm.fromServerFormat(e.fieldPath)}function R_(e){switch(e.unaryFilter.op){case"IS_NAN":var t=A_(e.unaryFilter.field);return zg.create(t,"==",{doubleValue:NaN});case"IS_NULL":var n=A_(e.unaryFilter.field);return zg.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":var r=A_(e.unaryFilter.field);return zg.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":var i=A_(e.unaryFilter.field);return zg.create(i,"!=",{nullValue:"NULL_VALUE"});default:return wm()}}function D_(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */var P_=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],O_=(e(A)(P_).concat(["documentOverlays"]),["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"]),L_=O_;
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
 */e(A)(L_).concat(["indexConfiguration","indexState","indexEntries"]);
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
var M_=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.batchId=n,this.localWriteTime=r,this.baseMutations=i,this.mutations=a}return e(C)(t,[{key:"applyToRemoteDocument",value:function(e,t){for(var n=t.mutationResults,r=0;r<this.mutations.length;r++){var i=this.mutations[r];i.key.isEqual(e.key)&&jk(i,e,n[r])}}},{key:"applyToLocalView",value:function(e,t){var n=!0,r=!1,i=void 0;try{for(var a,o=this.baseMutations[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;s.key.isEqual(e.key)&&(t=qk(s,e,t,this.localWriteTime))}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}var u=!0,c=!1,l=void 0;try{for(var h,f=this.mutations[Symbol.iterator]();!(u=(h=f.next()).done);u=!0){var d=h.value;d.key.isEqual(e.key)&&(t=qk(d,e,t,this.localWriteTime))}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}return t}},{key:"applyToLocalDocumentSet",value:function(e,t){var n=this,r=u_();return this.mutations.forEach((function(i){var a=e.get(i.key),o=a.overlayedDocument,s=n.applyToLocalView(o,a.mutatedFields),u=Vk(o,s=t.has(i.key)?null:s);null!==u&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Vm.min())})),r}},{key:"keys",value:function(){return this.mutations.reduce((function(e,t){return e.add(t.key)}),f_())}},{key:"isEqual",value:function(e){return this.batchId===e.batchId&&Fm(this.mutations,e.mutations,(function(e,t){return Hk(e,t)}))&&Fm(this.baseMutations,e.baseMutations,(function(e,t){return Hk(e,t)}))}}]),t}(),F_=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.batch=n,this.commitVersion=r,this.mutationResults=i,this.docVersions=a}return e(C)(t,null,[{key:"from",value:function(e,n,r){bm(e.mutations.length===r.length);for(var i=l_,a=e.mutations,o=0;o<a.length;o++)i=i.insert(a[o].key,r[o].version);return new t(e,n,r,i)}}]),t}(),U_=function(){"use strict";function t(n,r){e(E)(this,t),this.largestBatchId=n,this.mutation=r}return e(C)(t,[{key:"getKey",value:function(){return this.mutation.key}},{key:"isEqual",value:function(e){return null!==e&&this.mutation===e.mutation}},{key:"toString",value:function(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}}]),t}(),V_=function t(n){"use strict";e(E)(this,t),this.ne=n};function j_(e){var t=S_({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?dk(t,t.limit,"L"):t}
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
 */var q_=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"re",value:function(e,t){this.oe(e,t),t.ue()}},{key:"oe",value:function(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(yg(e.integerValue));else if("doubleValue"in e){var n=yg(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Ig(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){var r=e.timestampValue;this.ce(t,20),"string"==typeof r?t.he(r):(t.he("".concat(r.seconds||"")),t.ae(r.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(mg(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){var i=e.geoPointValue;this.ce(t,45),t.ae(i.latitude||0),t.ae(i.longitude||0)}else"mapValue"in e?Fg(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):wm()}},{key:"le",value:function(e,t){this.ce(t,25),this.ge(e,t)}},{key:"ge",value:function(e,t){t.he(e)}},{key:"we",value:function(e,t){var n=e.fields||{};this.ce(t,55);var r=!0,i=!1,a=void 0;try{for(var o,s=Object.keys(n)[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.le(u,t),this.oe(n[u],t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"me",value:function(e,t){var n=e.values||[];this.ce(t,50);var r=!0,i=!1,a=void 0;try{for(var o,s=n[Symbol.iterator]();!(r=(o=s.next()).done);r=!0){var u=o.value;this.oe(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"_e",value:function(e,t){var n=this;this.ce(t,37),Wm.fromName(e).path.forEach((function(e){n.ce(t,60),n.ge(e,t)}))}},{key:"ce",value:function(e,t){e.ae(t)}},{key:"fe",value:function(e){e.ae(2)}}]),t}();q_.ye=new q_;
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
var B_=function(){"use strict";function t(){e(E)(this,t),this.ze=new H_}return e(C)(t,[{key:"addToCollectionParentIndex",value:function(e,t){return this.ze.add(t),eg.resolve()}},{key:"getCollectionParents",value:function(e,t){return eg.resolve(this.ze.getEntries(t))}},{key:"addFieldIndex",value:function(e,t){return eg.resolve()}},{key:"deleteFieldIndex",value:function(e,t){return eg.resolve()}},{key:"getDocumentsMatchingTarget",value:function(e,t){return eg.resolve(null)}},{key:"getIndexType",value:function(e,t){return eg.resolve(0)}},{key:"getFieldIndexes",value:function(e,t){return eg.resolve([])}},{key:"getNextCollectionGroupToUpdate",value:function(e){return eg.resolve(null)}},{key:"getMinOffset",value:function(e,t){return eg.resolve(Qm.min())}},{key:"getMinOffsetFromCollectionGroup",value:function(e,t){return eg.resolve(Qm.min())}},{key:"updateCollectionGroup",value:function(e,t,n){return eg.resolve()}},{key:"updateIndexEntries",value:function(e,t){return eg.resolve()}}]),t}(),H_=function(){"use strict";function t(){e(E)(this,t),this.index={}}return e(C)(t,[{key:"add",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new cg(qm.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}},{key:"has",value:function(e){var t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}},{key:"getEntries",value:function(e){return(this.index[e]||new cg(qm.comparator)).toArray()}}]),t}();
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
 */new Uint8Array(0);
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
var W_=function(){"use strict";function t(n,r,i){e(E)(this,t),this.cacheSizeCollectionThreshold=n,this.percentileToCollect=r,this.maximumSequenceNumbersToCollect=i}return e(C)(t,null,[{key:"withCacheSize",value:function(e){return new t(e,t.DEFAULT_COLLECTION_PERCENTILE,t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}]),t}();
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
 */W_.DEFAULT_COLLECTION_PERCENTILE=10,W_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,W_.DEFAULT=new W_(41943040,W_.DEFAULT_COLLECTION_PERCENTILE,W_.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),W_.DISABLED=new W_(-1,0,0);
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
var z_=function(){"use strict";function t(n){e(E)(this,t),this.En=n}return e(C)(t,[{key:"next",value:function(){return this.En+=2,this.En}}],[{key:"An",value:function(){return new t(0)}},{key:"Rn",value:function(){return new t(-1)}}]),t}();
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
var K_=function(){"use strict";function t(){e(E)(this,t),this.changes=new t_((function(e){return e.toString()}),(function(e,t){return e.isEqual(t)})),this.changesApplied=!1}return e(C)(t,[{key:"addEntry",value:function(e){this.assertNotApplied(),this.changes.set(e.key,e)}},{key:"removeEntry",value:function(e,t){this.assertNotApplied(),this.changes.set(e,jg.newInvalidDocument(e).setReadTime(t))}},{key:"getEntry",value:function(e,t){this.assertNotApplied();var n=this.changes.get(t);return void 0!==n?eg.resolve(n):this.getFromCache(e,t)}},{key:"getEntries",value:function(e,t){return this.getAllFromCache(e,t)}},{key:"apply",value:function(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}},{key:"assertNotApplied",value:function(){}}]),t}();
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
var G_=function t(n,r){"use strict";e(E)(this,t),this.overlayedDocument=n,this.mutatedFields=r},Q_=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.remoteDocumentCache=n,this.mutationQueue=r,this.documentOverlayCache=i,this.indexManager=a}return e(C)(t,[{key:"getDocument",value:function(e,t){var n=this,r=null;return this.documentOverlayCache.getOverlay(e,t).next((function(i){return r=i,n.getBaseDocument(e,t,r)})).next((function(e){return null!==r&&qk(r.mutation,e,hg.empty(),Um.now()),e}))}},{key:"getDocuments",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.getLocalViewOfDocuments(e,t,f_()).next((function(){return t}))}))}},{key:"getLocalViewOfDocuments",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:f_(),r=this,i=s_();return this.populateOverlays(e,i,t).next((function(){return r.computeViews(e,t,i,n).next((function(e){var t=a_();return e.forEach((function(e,n){t=t.insert(e,n.overlayedDocument)})),t}))}))}},{key:"getOverlayedDocuments",value:function(e,t){var n=this,r=s_();return this.populateOverlays(e,r,t).next((function(){return n.computeViews(e,t,r,f_())}))}},{key:"populateOverlays",value:function(e,t,n){var r=[];return n.forEach((function(e){t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((function(e){e.forEach((function(e,n){t.set(e,n)}))}))}},{key:"computeViews",value:function(e,t,n,r){var i=r_(),a=c_(),o=c_();return t.forEach((function(e,t){var o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof zk)?i=i.insert(t.key,t):void 0!==o&&(a.set(t.key,o.mutation.getFieldMask()),qk(o.mutation,t,o.mutation.getFieldMask(),Um.now()))})),this.recalculateAndSaveOverlays(e,i).next((function(e){return e.forEach((function(e,t){return a.set(e,t)})),t.forEach((function(e,t){var n;return o.set(e,new G_(t,null!==(n=a.get(e))&&void 0!==n?n:null))})),o}))}},{key:"recalculateAndSaveOverlays",value:function(e,t){var n=this,r=c_(),i=new og((function(e,t){return e-t})),a=f_();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((function(e){var n=!0,a=!1,o=void 0;try{for(var s,u=function(e,n){var a=n.value;a.keys().forEach((function(e){var n=t.get(e);if(null!==n){var o=r.get(e)||hg.empty();o=a.applyToLocalView(n,o),r.set(e,o);var s=(i.get(a.batchId)||f_()).add(e);i=i.insert(a.batchId,s)}}))},c=e[Symbol.iterator]();!(n=(s=c.next()).done);n=!0)u(0,s)}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}})).next((function(){for(var o=[],s=i.getReverseIterator();s.hasNext();){var u=s.getNext(),c=u.key,l=u.value,h=u_();l.forEach((function(e){if(!a.has(e)){var n=Vk(t.get(e),r.get(e));null!==n&&h.set(e,n),a=a.add(e)}})),o.push(n.documentOverlayCache.saveOverlays(e,c,h))}return eg.waitFor(o)})).next((function(){return r}))}},{key:"recalculateAndSaveOverlaysForDocumentKeys",value:function(e,t){var n=this;return this.remoteDocumentCache.getEntries(e,t).next((function(t){return n.recalculateAndSaveOverlays(e,t)}))}},{key:"getDocumentsMatchingQuery",value:function(e,t,n){return r=t,Wm.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):lk(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n);var r}},{key:"getNextDocuments",value:function(e,t,n,r){var i=this;return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((function(a){var o=i,s=r-a.size>0?i.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-a.size):eg.resolve(s_()),u=-1,c=a;return s.next((function(t){return eg.forEach(t,(function(t,n){return u<n.largestBatchId&&(u=n.largestBatchId),a.get(t)?eg.resolve():o.getBaseDocument(e,t,n).next((function(e){c=c.insert(t,e)}))})).next((function(){return o.populateOverlays(e,t,a)})).next((function(){return o.computeViews(e,c,t,f_())})).next((function(e){return{batchId:u,changes:o_(e)}}))}))}))}},{key:"getDocumentsMatchingDocumentQuery",value:function(e,t){return this.getDocument(e,new Wm(t)).next((function(e){var t=a_();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}},{key:"getDocumentsMatchingCollectionGroupQuery",value:function(e,t,n){var r=this,i=t.collectionGroup,a=a_();return this.indexManager.getCollectionParents(e,i).next((function(o){return eg.forEach(o,(function(o){var s,u,c=(s=t,u=o.child(i),new ak(u,null,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt));return r.getDocumentsMatchingCollectionQuery(e,c,n).next((function(e){e.forEach((function(e,t){a=a.insert(e,t)}))}))})).next((function(){return a}))}))}},{key:"getDocumentsMatchingCollectionQuery",value:function(e,t,n){var r,i=this;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((function(a){return r=a,i.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)})).next((function(e){e.forEach((function(e,t){var n=t.getKey();null===r.get(n)&&(r=r.insert(n,jg.newInvalidDocument(n)))}));var n=a_();return r.forEach((function(r,i){var a=e.get(r);void 0!==a&&qk(a.mutation,i,hg.empty(),Um.now()),mk(t,i)&&(n=n.insert(r,i))})),n}))}},{key:"getBaseDocument",value:function(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):eg.resolve(jg.newInvalidDocument(t))}}]),t}(),Y_=function(){"use strict";function t(n){e(E)(this,t),this.wt=n,this.Jn=new Map,this.Yn=new Map}return e(C)(t,[{key:"getBundleMetadata",value:function(e,t){return eg.resolve(this.Jn.get(t))}},{key:"saveBundleMetadata",value:function(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:k_(n.createTime)}),eg.resolve()}},{key:"getNamedQuery",value:function(e,t){return eg.resolve(this.Yn.get(t))}},{key:"saveNamedQuery",value:function(e,t){return this.Yn.set(t.name,{name:(n=t).name,query:j_(n.bundledQuery),readTime:k_(n.readTime)}),eg.resolve();var n}}]),t}(),X_=function(){"use strict";function t(){e(E)(this,t),this.overlays=new og(Wm.comparator),this.Xn=new Map}return e(C)(t,[{key:"getOverlay",value:function(e,t){return eg.resolve(this.overlays.get(t))}},{key:"getOverlays",value:function(e,t){var n=this,r=s_();return eg.forEach(t,(function(t){return n.getOverlay(e,t).next((function(e){null!==e&&r.set(t,e)}))})).next((function(){return r}))}},{key:"saveOverlays",value:function(e,t,n){var r=this;return n.forEach((function(n,i){r.ie(e,t,i)})),eg.resolve()}},{key:"removeOverlaysForBatchId",value:function(e,t,n){var r=this,i=this.Xn.get(n);return void 0!==i&&(i.forEach((function(e){return r.overlays=r.overlays.remove(e)})),this.Xn.delete(n)),eg.resolve()}},{key:"getOverlaysForCollection",value:function(e,t,n){for(var r=s_(),i=t.length+1,a=new Wm(t.child("")),o=this.overlays.getIteratorFrom(a);o.hasNext();){var s=o.getNext().value,u=s.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&s.largestBatchId>n&&r.set(s.getKey(),s)}return eg.resolve(r)}},{key:"getOverlaysForCollectionGroup",value:function(e,t,n,r){for(var i=new og((function(e,t){return e-t})),a=this.overlays.getIterator();a.hasNext();){var o=a.getNext().value;if(o.getKey().getCollectionGroup()===t&&o.largestBatchId>n){var s=i.get(o.largestBatchId);null===s&&(s=s_(),i=i.insert(o.largestBatchId,s)),s.set(o.getKey(),o)}}for(var u=s_(),c=i.getIterator();c.hasNext()&&(c.getNext().value.forEach((function(e,t){return u.set(e,t)})),!(u.size()>=r)););return eg.resolve(u)}},{key:"ie",value:function(e,t,n){var r=this.overlays.get(n.key);if(null!==r){var i=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,i)}this.overlays=this.overlays.insert(n.key,new U_(t,n));var a=this.Xn.get(t);void 0===a&&(a=f_(),this.Xn.set(t,a)),this.Xn.set(t,a.add(n.key))}}]),t}(),J_=function(){"use strict";function t(){e(E)(this,t),this.Zn=new cg($_.ts),this.es=new cg($_.ns)}return e(C)(t,[{key:"isEmpty",value:function(){return this.Zn.isEmpty()}},{key:"addReference",value:function(e,t){var n=new $_(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}},{key:"ss",value:function(e,t){var n=this;e.forEach((function(e){return n.addReference(e,t)}))}},{key:"removeReference",value:function(e,t){this.rs(new $_(e,t))}},{key:"os",value:function(e,t){var n=this;e.forEach((function(e){return n.removeReference(e,t)}))}},{key:"us",value:function(e){var t=this,n=new Wm(new qm([])),r=new $_(n,e),i=new $_(n,e+1),a=[];return this.es.forEachInRange([r,i],(function(e){t.rs(e),a.push(e.key)})),a}},{key:"cs",value:function(){var e=this;this.Zn.forEach((function(t){return e.rs(t)}))}},{key:"rs",value:function(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}},{key:"hs",value:function(e){var t=new Wm(new qm([])),n=new $_(t,e),r=new $_(t,e+1),i=f_();return this.es.forEachInRange([n,r],(function(e){i=i.add(e.key)})),i}},{key:"containsKey",value:function(e){var t=new $_(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}]),t}(),$_=function(){"use strict";function t(n,r){e(E)(this,t),this.key=n,this.ls=r}return e(C)(t,null,[{key:"ts",value:function(e,t){return Wm.comparator(e.key,t.key)||Mm(e.ls,t.ls)}},{key:"ns",value:function(e,t){return Mm(e.ls,t.ls)||Wm.comparator(e.key,t.key)}}]),t}(),Z_=function(){"use strict";function t(n,r){e(E)(this,t),this.indexManager=n,this.referenceDelegate=r,this.mutationQueue=[],this.fs=1,this.ds=new cg($_.ts)}return e(C)(t,[{key:"checkEmpty",value:function(e){return eg.resolve(0===this.mutationQueue.length)}},{key:"addMutationBatch",value:function(e,t,n,r){var i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];var a=new M_(i,t,n,r);this.mutationQueue.push(a);var o=!0,s=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var h=c.value;this.ds=this.ds.add(new $_(h.key,i)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast())}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return eg.resolve(a)}},{key:"lookupMutationBatch",value:function(e,t){return eg.resolve(this._s(t))}},{key:"getNextMutationBatchAfterBatchId",value:function(e,t){var n=t+1,r=this.ws(n),i=r<0?0:r;return eg.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}},{key:"getHighestUnacknowledgedBatchId",value:function(){return eg.resolve(0===this.mutationQueue.length?-1:this.fs-1)}},{key:"getAllMutationBatches",value:function(e){return eg.resolve(this.mutationQueue.slice())}},{key:"getAllMutationBatchesAffectingDocumentKey",value:function(e,t){var n=this,r=new $_(t,0),i=new $_(t,Number.POSITIVE_INFINITY),a=[];return this.ds.forEachInRange([r,i],(function(e){var t=n._s(e.ls);a.push(t)})),eg.resolve(a)}},{key:"getAllMutationBatchesAffectingDocumentKeys",value:function(e,t){var n=this,r=new cg(Mm);return t.forEach((function(e){var t=new $_(e,0),i=new $_(e,Number.POSITIVE_INFINITY);n.ds.forEachInRange([t,i],(function(e){r=r.add(e.ls)}))})),eg.resolve(this.gs(r))}},{key:"getAllMutationBatchesAffectingQuery",value:function(e,t){var n=t.path,r=n.length+1,i=n;Wm.isDocumentKey(i)||(i=i.child(""));var a=new $_(new Wm(i),0),o=new cg(Mm);return this.ds.forEachWhile((function(e){var t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),a),eg.resolve(this.gs(o))}},{key:"gs",value:function(e){var t=this,n=[];return e.forEach((function(e){var r=t._s(e);null!==r&&n.push(r)})),n}},{key:"removeMutationBatch",value:function(e,t){var n=this;bm(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();var r=this.ds;return eg.forEach(t.mutations,(function(i){var a=new $_(i.key,t.batchId);return r=r.delete(a),n.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((function(){n.ds=r}))}},{key:"In",value:function(e){}},{key:"containsKey",value:function(e,t){var n=new $_(t,0),r=this.ds.firstAfterOrEqual(n);return eg.resolve(t.isEqual(r&&r.key))}},{key:"performConsistencyCheck",value:function(e){return this.mutationQueue.length,eg.resolve()}},{key:"ys",value:function(e,t){return this.ws(e)}},{key:"ws",value:function(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}},{key:"_s",value:function(e){var t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}]),t}(),ew=function(){"use strict";function t(n){e(E)(this,t),this.ps=n,this.docs=new og(Wm.comparator),this.size=0}return e(C)(t,[{key:"setIndexManager",value:function(e){this.indexManager=e}},{key:"addEntry",value:function(e,t){var n=t.key,r=this.docs.get(n),i=r?r.size:0,a=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}},{key:"removeEntry",value:function(e){var t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}},{key:"getEntry",value:function(e,t){var n=this.docs.get(t);return eg.resolve(n?n.document.mutableCopy():jg.newInvalidDocument(t))}},{key:"getEntries",value:function(e,t){var n=this,r=r_();return t.forEach((function(e){var t=n.docs.get(e);r=r.insert(e,t?t.document.mutableCopy():jg.newInvalidDocument(e))})),eg.resolve(r)}},{key:"getAllFromCollection",value:function(e,t,n){for(var r=r_(),i=new Wm(t.child("")),a=this.docs.getIteratorFrom(i);a.hasNext();){var o=a.getNext(),s=o.key,u=o.value.document;if(!t.isPrefixOf(s.path))break;s.path.length>t.length+1||Ym(Gm(u),n)<=0||(r=r.insert(u.key,u.mutableCopy()))}return eg.resolve(r)}},{key:"getAllFromCollectionGroup",value:function(e,t,n,r){wm()}},{key:"Is",value:function(e,t){return eg.forEach(this.docs,(function(e){return t(e)}))}},{key:"newChangeBuffer",value:function(e){return new tw(this)}},{key:"getSize",value:function(e){return eg.resolve(this.size)}}]),t}(),tw=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).zn=t,e(Zf)(i)}return e(C)(r,[{key:"applyChanges",value:function(e){var t=this,n=[];return this.changes.forEach((function(r,i){i.isValidDocument()?n.push(t.zn.addEntry(e,i)):t.zn.removeEntry(r)})),eg.waitFor(n)}},{key:"getFromCache",value:function(e,t){return this.zn.getEntry(e,t)}},{key:"getAllFromCache",value:function(e,t){return this.zn.getEntries(e,t)}}]),r}(K_),nw=function(){"use strict";function t(n){e(E)(this,t),this.persistence=n,this.Ts=new t_((function(e){return Hg(e)}),Wg),this.lastRemoteSnapshotVersion=Vm.min(),this.highestTargetId=0,this.Es=0,this.As=new J_,this.targetCount=0,this.Rs=z_.An()}return e(C)(t,[{key:"forEachTarget",value:function(e,t){return this.Ts.forEach((function(e,n){return t(n)})),eg.resolve()}},{key:"getLastRemoteSnapshotVersion",value:function(e){return eg.resolve(this.lastRemoteSnapshotVersion)}},{key:"getHighestSequenceNumber",value:function(e){return eg.resolve(this.Es)}},{key:"allocateTargetId",value:function(e){return this.highestTargetId=this.Rs.next(),eg.resolve(this.highestTargetId)}},{key:"setTargetsMetadata",value:function(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),eg.resolve()}},{key:"vn",value:function(e){this.Ts.set(e.target,e);var t=e.targetId;t>this.highestTargetId&&(this.Rs=new z_(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}},{key:"addTargetData",value:function(e,t){return this.vn(t),this.targetCount+=1,eg.resolve()}},{key:"updateTargetData",value:function(e,t){return this.vn(t),eg.resolve()}},{key:"removeTargetData",value:function(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,eg.resolve()}},{key:"removeTargets",value:function(e,t,n){var r=this,i=0,a=[];return this.Ts.forEach((function(o,s){s.sequenceNumber<=t&&null===n.get(s.targetId)&&(r.Ts.delete(o),a.push(r.removeMatchingKeysForTargetId(e,s.targetId)),i++)})),eg.waitFor(a).next((function(){return i}))}},{key:"getTargetCount",value:function(e){return eg.resolve(this.targetCount)}},{key:"getTargetData",value:function(e,t){var n=this.Ts.get(t)||null;return eg.resolve(n)}},{key:"addMatchingKeys",value:function(e,t,n){return this.As.ss(t,n),eg.resolve()}},{key:"removeMatchingKeys",value:function(e,t,n){this.As.os(t,n);var r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((function(t){i.push(r.markPotentiallyOrphaned(e,t))})),eg.waitFor(i)}},{key:"removeMatchingKeysForTargetId",value:function(e,t){return this.As.us(t),eg.resolve()}},{key:"getMatchingKeysForTargetId",value:function(e,t){var n=this.As.hs(t);return eg.resolve(n)}},{key:"containsKey",value:function(e,t){return eg.resolve(this.As.containsKey(t))}}]),t}(),rw=function(){"use strict";function t(n,r){var i=this;e(E)(this,t),this.bs={},this.overlays={},this.Ps=new ng(0),this.vs=!1,this.vs=!0,this.referenceDelegate=n(this),this.Vs=new nw(this),this.indexManager=new B_,this.remoteDocumentCache=new ew((function(e){return i.referenceDelegate.Ss(e)})),this.wt=new V_(r),this.Ds=new Y_(this.wt)}return e(C)(t,[{key:"start",value:function(){return Promise.resolve()}},{key:"shutdown",value:function(){return this.vs=!1,Promise.resolve()}},{key:"started",get:function(){return this.vs}},{key:"setDatabaseDeletedListener",value:function(){}},{key:"setNetworkEnabled",value:function(){}},{key:"getIndexManager",value:function(e){return this.indexManager}},{key:"getDocumentOverlayCache",value:function(e){var t=this.overlays[e.toKey()];return t||(t=new X_,this.overlays[e.toKey()]=t),t}},{key:"getMutationQueue",value:function(e,t){var n=this.bs[e.toKey()];return n||(n=new Z_(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}},{key:"getTargetCache",value:function(){return this.Vs}},{key:"getRemoteDocumentCache",value:function(){return this.remoteDocumentCache}},{key:"getBundleCache",value:function(){return this.Ds}},{key:"runTransaction",value:function(e,t,n){var r=this;mm("MemoryPersistence","Starting transaction:",e);var i=new iw(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((function(e){return r.referenceDelegate.xs(i).next((function(){return e}))})).toPromise().then((function(e){return i.raiseOnCommittedEvent(),e}))}},{key:"Ns",value:function(e,t){return eg.or(Object.values(this.bs).map((function(n){return function(){return n.containsKey(e,t)}})))}}]),t}(),iw=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this)).currentSequenceNumber=t,e(Zf)(i)}return r}(Jm),aw=function(){"use strict";function t(n){e(E)(this,t),this.persistence=n,this.ks=new J_,this.Os=null}return e(C)(t,[{key:"Fs",get:function(){if(this.Os)return this.Os;throw wm()}},{key:"addReference",value:function(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),eg.resolve()}},{key:"removeReference",value:function(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),eg.resolve()}},{key:"markPotentiallyOrphaned",value:function(e,t){return this.Fs.add(t.toString()),eg.resolve()}},{key:"removeTarget",value:function(e,t){var n=this;this.ks.us(t.targetId).forEach((function(e){return n.Fs.add(e.toString())}));var r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((function(e){var t=n;e.forEach((function(e){return t.Fs.add(e.toString())}))})).next((function(){return r.removeTargetData(e,t)}))}},{key:"Cs",value:function(){this.Os=new Set}},{key:"xs",value:function(e){var t=this,n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return eg.forEach(this.Fs,(function(r){var i=Wm.fromPath(r);return t.$s(e,i).next((function(e){e||n.removeEntry(i,Vm.min())}))})).next((function(){return t.Os=null,n.apply(e)}))}},{key:"updateLimboDocument",value:function(e,t){var n=this;return this.$s(e,t).next((function(e){e?n.Fs.delete(t.toString()):n.Fs.add(t.toString())}))}},{key:"Ss",value:function(e){return 0}},{key:"$s",value:function(e,t){var n=this;return eg.or([function(){return eg.resolve(n.ks.containsKey(t))},function(){return n.persistence.getTargetCache().containsKey(e,t)},function(){return n.persistence.Ns(e,t)}])}}],[{key:"Ms",value:function(e){return new t(e)}}]),t}();
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
var ow=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.targetId=n,this.fromCache=r,this.Pi=i,this.vi=a}return e(C)(t,null,[{key:"Vi",value:function(e,n){var r=f_(),i=f_(),a=!0,o=!1,s=void 0;try{for(var u,c=n.docChanges[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l=u.value;switch(l.type){case 0:r=r.add(l.doc.key);break;case 1:i=i.add(l.doc.key)}}}catch(e){o=!0,s=e}finally{try{a||null==c.return||c.return()}finally{if(o)throw s}}return new t(e,n.fromCache,r,i)}}]),t}(),sw=function(){"use strict";function t(){e(E)(this,t),this.Si=!1}return e(C)(t,[{key:"initialize",value:function(e,t){this.Di=e,this.indexManager=t,this.Si=!0}},{key:"getDocumentsMatchingQuery",value:function(e,t,n,r){var i=this;return this.Ci(e,t).next((function(a){return a||i.xi(e,t,r,n)})).next((function(n){return n||i.Ni(e,t)}))}},{key:"Ci",value:function(e,t){return eg.resolve(null)}},{key:"xi",value:function(e,t,n,r){var i=this;return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(Vm.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((function(a){var o=i.ki(t,a);return i.Oi(t,o,n,r)?i.Ni(e,t):(ym()<=De.DEBUG&&mm("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),yk(t)),i.Mi(e,o,t,Km(r,-1)))}))}},{key:"ki",value:function(e,t){var n=new cg(gk(e));return t.forEach((function(t,r){mk(e,r)&&(n=n.add(r))})),n}},{key:"Oi",value:function(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;var i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}},{key:"Ni",value:function(e,t){return ym()<=De.DEBUG&&mm("QueryEngine","Using full collection scan to execute query:",yk(t)),this.Di.getDocumentsMatchingQuery(e,t,Qm.min())}},{key:"Mi",value:function(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((function(e){return t.forEach((function(t){e=e.insert(t.key,t)})),e}))}}]),t}(),uw=function(){"use strict";function t(n,r,i,a){e(E)(this,t),this.persistence=n,this.Fi=r,this.wt=a,this.$i=new og(Mm),this.Bi=new t_((function(e){return Hg(e)}),Wg),this.Li=new Map,this.Ui=n.getRemoteDocumentCache(),this.Vs=n.getTargetCache(),this.Ds=n.getBundleCache(),this.qi(i)}return e(C)(t,[{key:"qi",value:function(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Q_(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}},{key:"collectGarbage",value:function(e){var t=this;return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return e.collect(n,t.$i)}))}}]),t}();
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
 */function cw(e,t,n,r){return new uw(e,t,n,r)}function lw(e,t){return hw.apply(this,arguments)}function hw(){return(hw=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Im(n),e.next=3,i.persistence.runTransaction("Handle user change","readonly",(function(e){var t;return i.mutationQueue.getAllMutationBatches(e).next((function(n){return t=n,i.qi(r),i.mutationQueue.getAllMutationBatches(e)})).next((function(n){var r=[],a=[],o=f_(),s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;r.push(f.batchId);var d=!0,v=!1,p=void 0;try{for(var y,m=f.mutations[Symbol.iterator]();!(d=(y=m.next()).done);d=!0){var g=y.value;o=o.add(g.key)}}catch(e){v=!0,p=e}finally{try{d||null==m.return||m.return()}finally{if(v)throw p}}}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var k=!0,_=!1,w=void 0;try{for(var b,I=n[Symbol.iterator]();!(k=(b=I.next()).done);k=!0){var T=b.value;a.push(T.batchId);var x=!0,E=!1,C=void 0;try{for(var S,N=T.mutations[Symbol.iterator]();!(x=(S=N.next()).done);x=!0){var A=S.value;o=o.add(A.key)}}catch(e){E=!0,C=e}finally{try{x||null==N.return||N.return()}finally{if(E)throw C}}}}catch(e){_=!0,w=e}finally{try{k||null==I.return||I.return()}finally{if(_)throw w}}return i.localDocuments.getDocuments(e,o).next((function(e){return{Ki:e,removedBatchIds:r,addedBatchIds:a}}))}))}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function fw(e,t){var n=Im(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(e){var r,i,a,o,s,u,c,l=t.batch.keys(),h=n.Ui.newChangeBuffer({trackRemovals:!0});return(r=n,i=e,a=t,o=h,s=a.batch,u=s.keys(),c=eg.resolve(),u.forEach((function(e){c=c.next((function(){return o.getEntry(i,e)})).next((function(t){var n=a.docVersions.get(e);bm(null!==n),t.version.compareTo(n)<0&&(s.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),o.addEntry(t)))}))})),c.next((function(){return r.mutationQueue.removeMutationBatch(i,s)}))).next((function(){return h.apply(e)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){for(var t=f_(),n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))})).next((function(){return n.localDocuments.getDocuments(e,l)}))}))}function dw(e){var t=Im(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(function(e){return t.Vs.getLastRemoteSnapshotVersion(e)}))}function vw(e,t){var n=Im(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(function(e){return void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)}))}var pw=function(){"use strict";function t(){e(E)(this,t),this.activeTargetIds=v_()}return e(C)(t,[{key:"Xi",value:function(e){this.activeTargetIds=this.activeTargetIds.add(e)}},{key:"Zi",value:function(e){this.activeTargetIds=this.activeTargetIds.delete(e)}},{key:"Yi",value:function(){var e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}]),t}(),yw=function(){"use strict";function t(){e(E)(this,t),this.Fr=new pw,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}return e(C)(t,[{key:"addPendingMutation",value:function(e){}},{key:"updateMutationState",value:function(e,t,n){}},{key:"addLocalQueryTarget",value:function(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}},{key:"updateQueryState",value:function(e,t,n){this.$r[e]=t}},{key:"removeLocalQueryTarget",value:function(e){this.Fr.Zi(e)}},{key:"isLocalQueryTarget",value:function(e){return this.Fr.activeTargetIds.has(e)}},{key:"clearQueryState",value:function(e){delete this.$r[e]}},{key:"getAllActiveQueryTargets",value:function(){return this.Fr.activeTargetIds}},{key:"isActiveQueryTarget",value:function(e){return this.Fr.activeTargetIds.has(e)}},{key:"start",value:function(){return this.Fr=new pw,Promise.resolve()}},{key:"handleUserChange",value:function(e,t,n){}},{key:"setOnlineState",value:function(e){}},{key:"shutdown",value:function(){}},{key:"writeSequenceNumber",value:function(e){}},{key:"notifyBundleLoaded",value:function(e){}}]),t}(),mw=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"Br",value:function(e){}},{key:"shutdown",value:function(){}}]),t}(),gw=function(){"use strict";function t(){var n=this;e(E)(this,t),this.Lr=function(){return n.Ur()},this.qr=function(){return n.Kr()},this.Gr=[],this.Qr()}return e(C)(t,[{key:"Br",value:function(e){this.Gr.push(e)}},{key:"shutdown",value:function(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}},{key:"Qr",value:function(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}},{key:"Ur",value:function(){mm("ConnectivityMonitor","Network connectivity changed: AVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Gr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(0)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"Kr",value:function(){mm("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");var e=!0,t=!1,n=void 0;try{for(var r,i=this.Gr[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){(0,r.value)(1)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}}],[{key:"V",value:function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}]),t}(),kw={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},_w=function(){"use strict";function t(n){e(E)(this,t),this.jr=n.jr,this.Wr=n.Wr}return e(C)(t,[{key:"zr",value:function(e){this.Hr=e}},{key:"Jr",value:function(e){this.Yr=e}},{key:"onMessage",value:function(e){this.Xr=e}},{key:"close",value:function(){this.Wr()}},{key:"send",value:function(e){this.jr(e)}},{key:"Zr",value:function(){this.Hr()}},{key:"eo",value:function(e){this.Yr(e)}},{key:"no",value:function(e){this.Xr(e)}}]),t}(),ww=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t){var i;return e(E)(this,r),(i=n.call(this,t)).forceLongPolling=t.forceLongPolling,i.autoDetectLongPolling=t.autoDetectLongPolling,i.useFetchStreams=t.useFetchStreams,e(Zf)(i)}return e(C)(r,[{key:"co",value:function(e,t,n,r){return new Promise((function(i,a){var o=new hm;o.listenOnce(om.COMPLETE,(function(){try{switch(o.getLastErrorCode()){case am.NO_ERROR:var t=o.getResponseJson();mm("Connection","XHR received:",JSON.stringify(t)),i(t);break;case am.TIMEOUT:mm("Connection",'RPC "'+e+'" timed out'),a(new xm(Tm.DEADLINE_EXCEEDED,"Request time out"));break;case am.HTTP_ERROR:var n=o.getStatus();if(mm("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){var r=o.getResponseJson().error;if(r&&r.status&&r.message){var s=(u=r.status,c=u.toLowerCase().replace(/_/g,"-"),Object.values(Tm).indexOf(c)>=0?c:Tm.UNKNOWN);a(new xm(s,r.message))}else a(new xm(Tm.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new xm(Tm.UNAVAILABLE,"Connection failed."));break;default:wm()}}finally{mm("Connection",'RPC "'+e+'" completed.')}var u,c}));var s=JSON.stringify(r);o.send(t,"POST",s,n,15)}))}},{key:"ho",value:function(e,t,n){var r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=rm(),a=im(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new cm({})),this.uo(o.initMessageHeaders,t,n),Y()||J()||Q().indexOf("Electron/")>=0||$()||Q().indexOf("MSAppHost/")>=0||X()||(o.httpHeadersOverwriteParam="$httpHeaders");var s=r.join("");mm("Connection","Creating WebChannel: "+s,o);var u=i.createWebChannel(s,o),c=!1,l=!1,h=new _w({jr:function(e){l?mm("Connection","Not sending because WebChannel is closed:",e):(c||(mm("Connection","Opening WebChannel transport."),u.open(),c=!0),mm("Connection","WebChannel sending:",e),u.send(e))},Wr:function(){return u.close()}}),f=function(e,t,n){e.listen(t,(function(e){try{n(e)}catch(e){setTimeout((function(){throw e}),0)}}))};return f(u,lm.EventType.OPEN,(function(){l||mm("Connection","WebChannel transport opened.")})),f(u,lm.EventType.CLOSE,(function(){l||(l=!0,mm("Connection","WebChannel transport closed"),h.eo())})),f(u,lm.EventType.ERROR,(function(e){l||(l=!0,km("Connection","WebChannel transport errored:",e),h.eo(new xm(Tm.UNAVAILABLE,"The operation could not be completed")))})),f(u,lm.EventType.MESSAGE,(function(e){var t;if(!l){var n=e.data[0];bm(!!n);var r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){mm("Connection","WebChannel received error:",i);var a=i.status,o=function(e){var t=Yk[e];if(void 0!==t)return e_(t)}(a),s=i.message;void 0===o&&(o=Tm.INTERNAL,s="Unknown error status: "+a+" with message "+i.message),l=!0,h.eo(new xm(o,s)),u.close()}else mm("Connection","WebChannel received:",n),h.no(n)}})),f(a,sm.STAT_EVENT,(function(e){e.stat===um.PROXY?mm("Connection","Detected buffering proxy"):e.stat===um.NOPROXY&&mm("Connection","Detected no buffering proxy")})),setTimeout((function(){h.Zr()}),0),h}}]),r}(function(){"use strict";function t(n){e(E)(this,t),this.databaseInfo=n,this.databaseId=n.databaseId;var r=n.ssl?"https":"http";this.so=r+"://"+n.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}return e(C)(t,[{key:"ro",value:function(e,t,n,r,i){var a=this.oo(e,t);mm("RestConnection","Sending: ",a,n);var o={};return this.uo(o,r,i),this.co(e,a,o,n).then((function(e){return mm("RestConnection","Received: ",e),e}),(function(t){throw km("RestConnection","".concat(e," failed with error: "),t,"url: ",a,"request:",n),t}))}},{key:"ao",value:function(e,t,n,r,i){return this.ro(e,t,n,r,i)}},{key:"uo",value:function(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+vm,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((function(t,n){return e[n]=t})),n&&n.headers.forEach((function(t,n){return e[n]=t}))}},{key:"oo",value:function(e,t){var n=kw[e];return"".concat(this.so,"/v1/").concat(t,":").concat(n)}}]),t}());function bw(){return"undefined"!=typeof document?document:null}
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
 */function Iw(e){return new p_(e,!0)}var Tw=function(){"use strict";function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1.5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:6e4;e(E)(this,t),this.js=n,this.timerId=r,this.lo=i,this.fo=a,this._o=o,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}return e(C)(t,[{key:"reset",value:function(){this.wo=0}},{key:"po",value:function(){this.wo=this._o}},{key:"Io",value:function(e){var t=this;this.cancel();var n=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),i=Math.max(0,n-r);i>0&&mm("ExponentialBackoff","Backing off for ".concat(i," ms (base delay: ").concat(this.wo," ms, delay with jitter: ").concat(n," ms, last attempt: ").concat(r," ms ago)")),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(function(){return t.yo=Date.now(),e()})),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}},{key:"Eo",value:function(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}},{key:"cancel",value:function(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}},{key:"To",value:function(){return(Math.random()-.5)*this.wo}}]),t}(),xw=function(){"use strict";function t(n,r,i,a,o,s,u,c){e(E)(this,t),this.js=n,this.Ao=i,this.Ro=a,this.bo=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=u,this.listener=c,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Tw(n,r)}return e(C)(t,[{key:"Do",value:function(){return 1===this.state||5===this.state||this.Co()}},{key:"Co",value:function(){return 2===this.state||3===this.state}},{key:"start",value:function(){4!==this.state?this.auth():this.xo()}},{key:"stop",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=t.Do(),!e.t0){e.next=4;break}return e.next=4,t.close(0);case 4:case"end":return e.stop()}}),n)})))()}},{key:"No",value:function(){this.state=0,this.So.reset()}},{key:"ko",value:function(){var e=this;this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(function(){return e.Oo()})))}},{key:"Mo",value:function(e){this.Fo(),this.stream.send(e)}},{key:"Oo",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Co()){e.next=2;break}return e.abrupt("return",t.close(0));case 2:case"end":return e.stop()}}),n)})))()}},{key:"Fo",value:function(){this.vo&&(this.vo.cancel(),this.vo=null)}},{key:"$o",value:function(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}},{key:"close",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.Fo(),r.$o(),r.So.cancel(),r.Po++,4!==t?r.So.reset():n&&n.code===Tm.RESOURCE_EXHAUSTED?(gm(n.toString()),gm("Using maximum backoff delay to prevent overloading the backend."),r.So.po()):n&&n.code===Tm.UNAUTHENTICATED&&3!==r.state&&(r.authCredentialsProvider.invalidateToken(),r.appCheckCredentialsProvider.invalidateToken()),null!==r.stream&&(r.Bo(),r.stream.close(),r.stream=null),r.state=t,e.next=9,r.listener.Jr(n);case 9:case"end":return e.stop()}}),i)})))()}},{key:"Bo",value:function(){}},{key:"auth",value:function(){var t=this;this.state=1;var n=this.Lo(this.Po),r=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((function(n){var i=e(N)(n,2),a=i[0],o=i[1];t.Po===r&&t.Uo(a,o)}),(function(e){var r=t;n((function(){var t=new xm(Tm.UNKNOWN,"Fetching auth token failed: "+e.message);return r.qo(t)}))}))}},{key:"Uo",value:function(e,t){var n=this,r=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((function(){var e=n;r((function(){return e.state=2,e.Vo=e.js.enqueueAfterDelay(e.Ro,1e4,(function(){return e.Co()&&(e.state=3),Promise.resolve()})),e.listener.zr()}))})),this.stream.Jr((function(e){var t=n;r((function(){return t.qo(e)}))})),this.stream.onMessage((function(e){var t=n;r((function(){return t.onMessage(e)}))}))}},{key:"xo",value:function(){var t=this;this.state=5,this.So.Io(e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.state=0,t.start();case 1:case"end":return e.stop()}}),n)}))))}},{key:"qo",value:function(e){return mm("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}},{key:"Lo",value:function(e){var t=this;return function(n){var r=t;t.js.enqueueAndForget((function(){return r.Po===e?n():(mm("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}}}]),t}(),Ew=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a,o,s,u){var c;return e(E)(this,r),(c=n.call(this,t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",i,a,o,u)).wt=s,c.Wo=!1,e(Zf)(c)}return e(C)(r,[{key:"zo",get:function(){return this.Wo}},{key:"start",value:function(){this.Wo=!1,this.lastStreamToken=void 0,e(Gu)(e(Xu)(r.prototype),"start",this).call(this)}},{key:"Bo",value:function(){this.Wo&&this.Ho([])}},{key:"Ko",value:function(e,t){return this.bo.ho("Write",e,t)}},{key:"onMessage",value:function(e){if(bm(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();var t=(r=e.writeResults,i=e.commitTime,r&&r.length>0?(bm(void 0!==i),r.map((function(e){return n=i,(r=(t=e).updateTime?k_(t.updateTime):k_(n)).isEqual(Vm.min())&&(r=k_(n)),new Lk(r,t.transformResults||[]);var t,n,r}))):[]),n=k_(e.commitTime);return this.listener.Jo(n,t)}var r,i;return bm(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}},{key:"Xo",value:function(){var e={};e.database=T_(this.wt),this.Mo(e)}},{key:"Ho",value:function(e){var t=this,n={streamToken:this.lastStreamToken,writes:e.map((function(e){return C_(t.wt,e)}))};this.Mo(n)}}]),r}(xw),Cw=function(t){"use strict";e(S)(r,(function t(){e(E)(this,t)}));var n=e(D)(r);function r(t,i,a,o){var s;return e(E)(this,r),(s=n.call(this)).authCredentials=t,s.appCheckCredentials=i,s.bo=a,s.wt=o,s.Zo=!1,e(Zf)(s)}return e(C)(r,[{key:"tu",value:function(){if(this.Zo)throw new xm(Tm.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"ro",value:function(t,n,r){var i=this;return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(N)(a,2),s=o[0],u=o[1];return i.bo.ro(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Tm.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new xm(Tm.UNKNOWN,e.toString())}))}},{key:"ao",value:function(t,n,r){var i=this;return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((function(a){var o=e(N)(a,2),s=o[0],u=o[1];return i.bo.ao(t,n,r,s,u)})).catch((function(e){throw"FirebaseError"===e.name?(e.code===Tm.UNAUTHENTICATED&&(i.authCredentials.invalidateToken(),i.appCheckCredentials.invalidateToken()),e):new xm(Tm.UNKNOWN,e.toString())}))}},{key:"terminate",value:function(){this.Zo=!0}}]),r}(),Sw=function(){"use strict";function t(n,r){e(E)(this,t),this.asyncQueue=n,this.onlineStateHandler=r,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}return e(C)(t,[{key:"iu",value:function(){var e=this;0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(function(){return e.nu=null,e.ou("Backend didn't respond within 10 seconds."),e.ru("Offline"),Promise.resolve()})))}},{key:"uu",value:function(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.ru("Offline")))}},{key:"set",value:function(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}},{key:"ru",value:function(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}},{key:"ou",value:function(e){var t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.su?(gm(t),this.su=!1):mm("OnlineStateTracker",t)}},{key:"cu",value:function(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}]),t}(),Nw=function t(n,r,i,s,u){"use strict";var c=this;e(E)(this,t),this.localStore=n,this.datastore=r,this.asyncQueue=i,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=u,this.du.Br((function(t){var n=c;i.enqueueAndForget(e(a)(e(o).mark((function t(){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=Ow(n),!t.t0){t.next=5;break}return mm("RemoteStore","Restarting streams for network reachability change."),t.next=5,function(){var t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=Im(n)).lu.add(4),e.next=4,Dw(r);case 4:return r._u.set("Unknown"),r.lu.delete(4),e.next=8,Aw(r);case 8:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()(n);case 5:case"end":return t.stop()}}),t)}))))})),this._u=new Sw(i,s)};
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
 */function Aw(e){return Rw.apply(this,arguments)}function Rw(){return(Rw=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=!0,i=!1,a=void 0,!Ow(n)){e.next=25;break}e.prev=2,s=n.fu[Symbol.iterator]();case 4:if(r=(u=s.next()).done){e.next=11;break}return c=u.value,e.next=8,c(!0);case 8:r=!0,e.next=4;break;case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),i=!0,a=e.t0;case 17:e.prev=17,e.prev=18,r||null==s.return||s.return();case 20:if(e.prev=20,!i){e.next=23;break}throw a;case 23:return e.finish(20);case 24:return e.finish(17);case 25:case"end":return e.stop()}}),t,null,[[2,13,17,25],[18,,20,24]])})))).apply(this,arguments)}function Dw(e){return Pw.apply(this,arguments)}function Pw(){return(Pw=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=!0,i=!1,a=void 0,e.prev=1,s=n.fu[Symbol.iterator]();case 3:if(r=(u=s.next()).done){e.next=10;break}return c=u.value,e.next=7,c(!1);case 7:r=!0,e.next=3;break;case 10:e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),i=!0,a=e.t0;case 16:e.prev=16,e.prev=17,r||null==s.return||s.return();case 19:if(e.prev=19,!i){e.next=22;break}throw a;case 22:return e.finish(19);case 23:return e.finish(16);case 24:case"end":return e.stop()}}),t,null,[[1,12,16,24],[17,,19,23]])})))).apply(this,arguments)}function Ow(e){return 0===Im(e).lu.size}function Lw(e,t,n){return Mw.apply(this,arguments)}function Mw(){return(Mw=e(a)(e(o).mark((function t(n,r,i){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(tg(r)){t.next=2;break}throw r;case 2:return n.lu.add(1),t.next=5,Dw(n);case 5:n._u.set("Offline"),i||(i=function(){return dw(n.localStore)}),n.asyncQueue.enqueueRetryable(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mm("RemoteStore","Retrying IndexedDB access"),e.next=3,i();case 3:return n.lu.delete(1),e.next=6,Aw(n);case 6:case"end":return e.stop()}}),t)}))));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Fw(e,t){return t().catch((function(n){return Lw(e,n,t)}))}function Uw(e){return Vw.apply(this,arguments)}function Vw(){return(Vw=e(a)(e(o).mark((function t(n){var r,i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=Im(n),i=nb(r),a=r.au.length>0?r.au[r.au.length-1].batchId:-1;case 2:if(!jw(r)){e.next=19;break}return e.prev=3,e.next=6,vw(r.localStore,a);case 6:if(null!==(s=e.sent)){e.next=10;break}return 0===r.au.length&&i.ko(),e.abrupt("break",19);case 10:a=s.batchId,qw(r,s),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(3),e.next=17,Lw(r,e.t0);case 17:e.next=2;break;case 19:Bw(r)&&Hw(r);case 20:case"end":return e.stop()}}),t,null,[[3,13]])})))).apply(this,arguments)}function jw(e){return Ow(e)&&e.au.length<10}function qw(e,t){e.au.push(t);var n=nb(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function Bw(e){return Ow(e)&&!nb(e).Do()&&e.au.length>0}function Hw(e){nb(e).start()}function Ww(e){return zw.apply(this,arguments)}function zw(){return(zw=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:nb(n).Xo();case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Kw(e){return Gw.apply(this,arguments)}function Gw(){return(Gw=e(a)(e(o).mark((function t(n){var r,i,a,s,u,c,l;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=nb(n),i=!0,a=!1,s=void 0,e.prev=2,u=n.au[Symbol.iterator]();!(i=(c=u.next()).done);i=!0)l=c.value,r.Ho(l.mutations);e.next=10;break;case 6:e.prev=6,e.t0=e.catch(2),a=!0,s=e.t0;case 10:e.prev=10,e.prev=11,i||null==u.return||u.return();case 13:if(e.prev=13,!a){e.next=16;break}throw s;case 16:return e.finish(13);case 17:return e.finish(10);case 18:case"end":return e.stop()}}),t,null,[[2,6,10,18],[11,,13,17]])})))).apply(this,arguments)}function Qw(e,t,n){return Yw.apply(this,arguments)}function Yw(){return(Yw=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.au.shift(),s=F_.from(a,r,i),e.next=3,Fw(n,(function(){return n.remoteSyncer.applySuccessfulWrite(s)}));case 3:return e.next=5,Uw(n);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Xw(e,t){return Jw.apply(this,arguments)}function Jw(){return Jw=e(a)(e(o).mark((function t(n,r){return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=r&&nb(n).zo,!t.t0){t.next=4;break}return t.next=4,function(){var t=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Zk(a=r.code)||a===Tm.ABORTED){e.next=7;break}return i=n.au.shift(),nb(n).No(),e.next=5,Fw(n,(function(){return n.remoteSyncer.rejectFailedWrite(i.batchId,r)}));case 5:return e.next=7,Uw(n);case 7:case 8:case"end":return e.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()(n,r);case 4:Bw(n)&&Hw(n);case 5:case"end":return t.stop()}}),t)}))),Jw.apply(this,arguments)}function $w(e,t){return Zw.apply(this,arguments)}function Zw(){return(Zw=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(i=Im(n)).asyncQueue.verifyOperationInProgress(),mm("RemoteStore","RemoteStore received new credentials"),a=Ow(i),i.lu.add(3),e.next=6,Dw(i);case 6:return a&&i._u.set("Unknown"),e.next=9,i.remoteSyncer.handleCredentialChange(r);case 9:return i.lu.delete(3),e.next=12,Aw(i);case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function eb(e,t){return tb.apply(this,arguments)}function tb(){return(tb=e(a)(e(o).mark((function t(n,r){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=Im(n),!r){e.next=7;break}return i.lu.delete(2),e.next=5,Aw(i);case 5:e.next=13;break;case 7:if(e.t0=r,e.t0){e.next=13;break}return i.lu.add(2),e.next=12,Dw(i);case 12:i._u.set("Unknown");case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function nb(t){return t.gu||(t.gu=(r=t.datastore,i=t.asyncQueue,s={zr:Ww.bind(null,t),Jr:Xw.bind(null,t),Yo:Kw.bind(null,t),Jo:Qw.bind(null,t)},(u=Im(r)).tu(),new Ew(i,u.bo,u.authCredentials,u.appCheckCredentials,u.wt,s)),t.fu.push((n=e(a)(e(o).mark((function n(r){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r){e.next=6;break}return t.gu.No(),e.next=4,Uw(t);case 4:e.next=9;break;case 6:return e.next=8,t.gu.stop();case 8:t.au.length>0&&(mm("RemoteStore","Stopping write stream with ".concat(t.au.length," pending writes")),t.au=[]);case 9:case"end":return e.stop()}}),n)}))),function(e){return n.apply(this,arguments)}))),t.gu
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
 */;var n,r,i,s,u}var rb=function(){"use strict";function t(n,r,i,a,o){e(E)(this,t),this.asyncQueue=n,this.timerId=r,this.targetTimeMs=i,this.op=a,this.removalCallback=o,this.deferred=new Em,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((function(e){}))}return e(C)(t,[{key:"start",value:function(e){var t=this;this.timerHandle=setTimeout((function(){return t.handleDelayElapsed()}),e)}},{key:"skipDelay",value:function(){return this.handleDelayElapsed()}},{key:"cancel",value:function(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new xm(Tm.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}},{key:"handleDelayElapsed",value:function(){var e=this;this.asyncQueue.enqueueAndForget((function(){return null!==e.timerHandle?(e.clearTimeout(),e.op().then((function(t){return e.deferred.resolve(t)}))):Promise.resolve()}))}},{key:"clearTimeout",value:function(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}],[{key:"createAndSchedule",value:function(e,n,r,i,a){var o=new t(e,n,Date.now()+r,i,a);return o.start(r),o}}]),t}();function ib(e,t){if(gm("AsyncQueue","".concat(t,": ").concat(e)),tg(e))return new xm(Tm.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}
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
 */var ab=function t(){"use strict";e(E)(this,t),this.queries=new t_((function(e){return pk(e)}),vk),this.onlineState="Unknown",this.Tu=new Set};
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
 */function ob(e){e.Tu.forEach((function(e){e.next()}))}
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
var sb=function(){"use strict";function t(n,r,i,a,o,s){e(E)(this,t),this.localStore=n,this.remoteStore=r,this.eventManager=i,this.sharedClientState=a,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new t_((function(e){return pk(e)}),vk),this.ec=new Map,this.nc=new Set,this.sc=new og(Wm.comparator),this.ic=new Map,this.rc=new J_,this.oc={},this.uc=new Map,this.cc=z_.Rn(),this.onlineState="Unknown",this.ac=void 0}return e(C)(t,[{key:"isPrimaryClient",get:function(){return!0===this.ac}}]),t}();function ub(e,t,n){return cb.apply(this,arguments)}function cb(){return(cb=e(a)(e(o).mark((function t(n,r,i){var a,s,u;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=wb(n),e.prev=1,e.next=4,function(e,t){var n,r,i=Im(e),a=Um.now(),o=t.reduce((function(e,t){return e.add(t.key)}),f_());return i.persistence.runTransaction("Locally write mutations","readwrite",(function(e){var s=r_(),u=f_();return i.Ui.getEntries(e,o).next((function(e){(s=e).forEach((function(e,t){t.isValidDocument()||(u=u.add(e))}))})).next((function(){return i.localDocuments.getOverlayedDocuments(e,s)})).next((function(r){n=r;var o=[],s=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value,d=Bk(f,n.get(f.key).overlayedDocument);null!=d&&o.push(new zk(f.key,d,Vg(d.value.mapValue),Mk.exists(!0)))}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}return i.mutationQueue.addMutationBatch(e,a,o,t)})).next((function(t){r=t;var a=t.applyToLocalDocumentSet(n,u);return i.documentOverlayCache.saveOverlays(e,t.batchId,a)}))})).then((function(){return{batchId:r.batchId,changes:o_(n)}}))}(a.localStore,r);case 4:return s=e.sent,a.sharedClientState.addPendingMutation(s.batchId),t=a,o=s.batchId,c=i,l=void 0,(l=t.oc[t.currentUser.toKey()])||(l=new og(Mm)),l=l.insert(o,c),t.oc[t.currentUser.toKey()]=l,e.next=9,mb(a,s.changes);case 9:return e.next=11,Uw(a.remoteStore);case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),u=ib(e.t0,"Failed to persist write"),i.reject(u);case 17:case"end":return e.stop()}var t,o,c,l}),t,null,[[1,13]])})))).apply(this,arguments)}function lb(e,t,n){var r=Im(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){var i=[];r.tc.forEach((function(e,n){var r=n.view.Eu(t);r.snapshot&&i.push(r.snapshot)})),function(e,t){var n=Im(e);n.onlineState=t;var r=!1;n.queries.forEach((function(e,n){var i=!0,a=!1,o=void 0;try{for(var s,u=n.listeners[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){s.value.Eu(t)&&(r=!0)}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}})),r&&ob(n)}(r.eventManager,t),i.length&&r.Zu.Go(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}function hb(e,t){return fb.apply(this,arguments)}function fb(){return(fb=e(a)(e(o).mark((function t(n,r){var i,a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Im(n),a=r.batch.batchId,e.prev=1,e.next=4,fw(i.localStore,r);case 4:return s=e.sent,yb(i,a,null),pb(i,a),i.sharedClientState.updateMutationState(a,"acknowledged"),e.next=10,mb(i,s);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,$m(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function db(e,t,n){return vb.apply(this,arguments)}function vb(){return(vb=e(a)(e(o).mark((function t(n,r,i){var a,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Im(n),e.prev=1,e.next=4,function(e,t){var n=Im(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(e){var r;return n.mutationQueue.lookupMutationBatch(e,t).next((function(t){return bm(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)})).next((function(){return n.mutationQueue.performConsistencyCheck(e)})).next((function(){return n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)})).next((function(){return n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)})).next((function(){return n.localDocuments.getDocuments(e,r)}))}))}(a.localStore,r);case 4:return s=e.sent,yb(a,r,i),pb(a,r),a.sharedClientState.updateMutationState(r,"rejected",i),e.next=10,mb(a,s);case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(1),e.next=16,$m(e.t0);case 16:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function pb(e,t){(e.uc.get(t)||[]).forEach((function(e){e.resolve()})),e.uc.delete(t)}function yb(e,t,n){var r=Im(e),i=r.oc[r.currentUser.toKey()];if(i){var a=i.get(t);a&&(n?a.reject(n):a.resolve(),i=i.remove(t)),r.oc[r.currentUser.toKey()]=i}}function mb(e,t,n){return gb.apply(this,arguments)}function gb(){return gb=e(a)(e(o).mark((function t(n,r,i){var s,u,c,l;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=Im(n),u=[],c=[],l=[],t.t0=s.tc.isEmpty(),t.t0){t.next=9;break}return s.tc.forEach((function(e,t){l.push(s.hc(t,r,i).then((function(e){if(e){s.isPrimaryClient&&s.sharedClientState.updateQueryState(t.targetId,e.fromCache?"not-current":"current"),u.push(e);var n=ow.Vi(t.targetId,e);c.push(n)}})))})),t.next=6,Promise.all(l);case 6:return s.Zu.Go(u),t.next=9,function(){var t=e(a)(e(o).mark((function t(n,r){var i,a,s,u,c,l,h,f,d,v,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Im(n),e.prev=1,e.next=4,i.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(e){return eg.forEach(r,(function(t){return eg.forEach(t.Pi,(function(n){return i.persistence.referenceDelegate.addReference(e,t.targetId,n)})).next((function(){return eg.forEach(t.vi,(function(n){return i.persistence.referenceDelegate.removeReference(e,t.targetId,n)}))}))}))}));case 4:e.next=11;break;case 6:if(e.prev=6,e.t0=e.catch(1),tg(e.t0)){e.next=10;break}throw e.t0;case 10:mm("LocalStore","Failed to update sequence numbers: "+e.t0);case 11:for(a=!0,s=!1,u=void 0,e.prev=12,c=r[Symbol.iterator]();!(a=(l=c.next()).done);a=!0)h=l.value,f=h.targetId,h.fromCache||(d=i.$i.get(f),v=d.snapshotVersion,p=d.withLastLimboFreeSnapshotVersion(v),i.$i=i.$i.insert(f,p));e.next=20;break;case 16:e.prev=16,e.t1=e.catch(12),s=!0,u=e.t1;case 20:e.prev=20,e.prev=21,a||null==c.return||c.return();case 23:if(e.prev=23,!s){e.next=26;break}throw u;case 26:return e.finish(23);case 27:return e.finish(20);case 28:case"end":return e.stop()}}),t,null,[[1,6],[12,16,20,28],[21,,23,27]])})));return function(e,n){return t.apply(this,arguments)}}()(s.localStore,c);case 9:case"end":return t.stop()}}),t)}))),gb.apply(this,arguments)}function kb(e,t){return _b.apply(this,arguments)}function _b(){return(_b=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((i=Im(n)).currentUser.isEqual(r)){e.next=11;break}return mm("SyncEngine","User change. New user:",r.toKey()),e.next=5,lw(i.localStore,r);case 5:return a=e.sent,i.currentUser=r,(t=i).uc.forEach((function(e){e.forEach((function(e){e.reject(new xm(Tm.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.uc.clear(),i.sharedClientState.handleUserChange(r,a.removedBatchIds,a.addedBatchIds),e.next=11,mb(i,a.Ki);case 11:case"end":return e.stop()}var t}),t)})))).apply(this,arguments)}function wb(e){var t=Im(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hb.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=db.bind(null,t),t}var bb=function(){"use strict";function t(){e(E)(this,t),this.synchronizeTabs=!1}return e(C)(t,[{key:"initialize",value:function(t){var n=this;return e(a)(e(o).mark((function r(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.wt=Iw(t.databaseInfo.databaseId),n.sharedClientState=n.dc(t),n.persistence=n._c(t),e.next=5,n.persistence.start();case 5:n.localStore=n.wc(t),n.gcScheduler=n.mc(t,n.localStore),n.indexBackfillerScheduler=n.gc(t,n.localStore);case 8:case"end":return e.stop()}}),r)})))()}},{key:"mc",value:function(e,t){return null}},{key:"gc",value:function(e,t){return null}},{key:"wc",value:function(e){return cw(this.persistence,new sw,e.initialUser,this.wt)}},{key:"_c",value:function(e){return new rw(aw.Ms,this.wt)}},{key:"dc",value:function(e){return new yw}},{key:"terminate",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.gcScheduler&&t.gcScheduler.stop(),e.next=3,t.sharedClientState.shutdown();case 3:return e.next=5,t.persistence.shutdown();case 5:case"end":return e.stop()}}),n)})))()}}]),t}(),Ib=function(){"use strict";function t(){e(E)(this,t)}return e(C)(t,[{key:"initialize",value:function(t,n){var r=this;return e(a)(e(o).mark((function i(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=r.localStore,e.t0){e.next=12;break}return r.localStore=t.localStore,r.sharedClientState=t.sharedClientState,r.datastore=r.createDatastore(n),r.remoteStore=r.createRemoteStore(n),r.eventManager=r.createEventManager(n),r.syncEngine=r.createSyncEngine(n,!t.synchronizeTabs),r.sharedClientState.onlineStateHandler=function(e){return lb(r.syncEngine,e,1)},r.remoteStore.remoteSyncer.handleCredentialChange=kb.bind(null,r.syncEngine),e.next=12,eb(r.remoteStore,r.syncEngine.isPrimaryClient);case 12:case"end":return e.stop()}}),i)})))()}},{key:"createEventManager",value:function(e){return new ab}},{key:"createDatastore",value:function(e){var t,n,r,i=Iw(e.databaseInfo.databaseId),a=(t=e.databaseInfo,new ww(t));return n=e.authCredentials,r=e.appCheckCredentials,new Cw(n,r,a,i)}},{key:"createRemoteStore",value:function(e){var t,n,r,i,a,o=this;return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=function(e){return lb(o.syncEngine,e,0)},a=gw.V()?new gw:new mw,new Nw(t,n,r,i,a)}},{key:"createSyncEngine",value:function(e,t){return n=this.localStore,r=this.remoteStore,i=this.eventManager,a=this.sharedClientState,o=e.initialUser,s=e.maxConcurrentLimboResolutions,u=t,c=new sb(n,r,i,a,o,s),u&&(c.ac=!0),c;var n,r,i,a,o,s,u,c}},{key:"terminate",value:function(){return(t=e(a)(e(o).mark((function t(n){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Im(n),mm("RemoteStore","RemoteStore shutting down."),r.lu.add(5),e.next=5,Dw(r);case 5:r.du.shutdown(),r._u.set("Unknown");case 7:case"end":return e.stop()}}),t)}))),function(e){return t.apply(this,arguments)})(this.remoteStore);var t}}]),t}();
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
var Tb=function(){"use strict";function t(n,r,i,s){var u=this;e(E)(this,t);var c,l=this;this.authCredentials=n,this.appCheckCredentials=r,this.asyncQueue=i,this.databaseInfo=s,this.user=dm.UNAUTHENTICATED,this.clientId=Lm.I(),this.authCredentialListener=function(){return Promise.resolve()},this.appCheckCredentialListener=function(){return Promise.resolve()},this.authCredentials.start(i,(c=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return mm("FirestoreClient","Received user=",n.uid),e.next=3,l.authCredentialListener(n);case 3:l.user=n;case 4:case"end":return e.stop()}}),t)}))),function(e){return c.apply(this,arguments)})),this.appCheckCredentials.start(i,(function(e){return mm("FirestoreClient","Received new app check token=",e),u.appCheckCredentialListener(e,u.user)}))}return e(C)(t,[{key:"getConfiguration",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{asyncQueue:t.asyncQueue,databaseInfo:t.databaseInfo,clientId:t.clientId,authCredentials:t.authCredentials,appCheckCredentials:t.appCheckCredentials,initialUser:t.user,maxConcurrentLimboResolutions:100});case 1:case"end":return e.stop()}}),n)})))()}},{key:"setCredentialChangeListener",value:function(e){this.authCredentialListener=e}},{key:"setAppCheckTokenChangeListener",value:function(e){this.appCheckCredentialListener=e}},{key:"verifyNotTerminated",value:function(){if(this.asyncQueue.isShuttingDown)throw new xm(Tm.FAILED_PRECONDITION,"The client has already been terminated.")}},{key:"terminate",value:function(){this.asyncQueue.enterRestrictedMode();var t=new Em,n=this;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(e(a)(e(o).mark((function r(){var i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,e.t0=n.onlineComponents,!e.t0){e.next=5;break}return e.next=5,n.onlineComponents.terminate();case 5:if(e.t1=n.offlineComponents,!e.t1){e.next=9;break}return e.next=9,n.offlineComponents.terminate();case 9:n.authCredentials.shutdown(),n.appCheckCredentials.shutdown(),t.resolve(),e.next=18;break;case 14:e.prev=14,e.t2=e.catch(0),i=ib(e.t2,"Failed to shutdown persistence"),t.reject(i);case 18:case"end":return e.stop()}}),r,null,[[0,14]])})))),t.promise}}]),t}();
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
 */function xb(e,t){return Eb.apply(this,arguments)}function Eb(){return Eb=e(a)(e(o).mark((function t(n,r){var i,s;return e(o).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.asyncQueue.verifyOperationInProgress(),mm("FirestoreClient","Initializing OfflineComponentProvider"),t.next=3,n.getConfiguration();case 3:return i=t.sent,t.next=6,r.initialize(i);case 6:s=i.initialUser,n.setCredentialChangeListener(function(){var t=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=s.isEqual(n),e.t0){e.next=5;break}return e.next=4,lw(r.localStore,n);case 4:s=n;case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),r.persistence.setDatabaseDeletedListener((function(){return n.terminate()})),n.offlineComponents=r;case 8:case"end":return t.stop()}}),t)}))),Eb.apply(this,arguments)}function Cb(e,t){return Sb.apply(this,arguments)}function Sb(){return(Sb=e(a)(e(o).mark((function t(n,r){var i,a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.asyncQueue.verifyOperationInProgress(),e.next=3,Nb(n);case 3:return i=e.sent,mm("FirestoreClient","Initializing OnlineComponentProvider"),e.next=7,n.getConfiguration();case 7:return a=e.sent,e.next=10,r.initialize(i,a);case 10:n.setCredentialChangeListener((function(e){return $w(r.remoteStore,e)})),n.setAppCheckTokenChangeListener((function(e,t){return $w(r.remoteStore,t)})),n.onlineComponents=r;case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Nb(e){return Ab.apply(this,arguments)}function Ab(){return(Ab=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.offlineComponents,e.t0){e.next=5;break}return mm("FirestoreClient","Using default OfflineComponentProvider"),e.next=5,xb(n,new bb);case 5:return e.abrupt("return",(e.t0||e.sent,n.offlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Rb(e){return Db.apply(this,arguments)}function Db(){return(Db=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=n.onlineComponents,e.t0){e.next=5;break}return mm("FirestoreClient","Using default OnlineComponentProvider"),e.next=5,Cb(n,new Ib);case 5:return e.abrupt("return",(e.t0||e.sent,n.onlineComponents));case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Pb(e){return Rb(e).then((function(e){return e.syncEngine}))}var Ob=new Map;
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
 */function Lb(e,t,n){if(!n)throw new xm(Tm.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function Mb(e){if(!Wm.isDocumentKey(e))throw new xm(Tm.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function Fb(e){if(Wm.isDocumentKey(e))throw new xm(Tm.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function Ub(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";var t=(n=e).constructor?n.constructor.name:null;return t?"a custom ".concat(t," object"):"an object"}var n;return"function"==typeof e?"a function":wm()}function Vb(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new xm(Tm.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");var n=Ub(e);throw new xm(Tm.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}return e}
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
var jb=function(){"use strict";function t(n){var r;if(e(E)(this,t),void 0===n.host){if(void 0!==n.ssl)throw new xm(Tm.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=null===(r=n.ssl)||void 0===r||r;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,void 0===n.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==n.cacheSizeBytes&&n.cacheSizeBytes<1048576)throw new xm(Tm.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new xm(Tm.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))}("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}return e(C)(t,[{key:"isEqual",value:function(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}]),t}(),qb=function(){"use strict";function t(n,r,i){e(E)(this,t),this._authCredentials=r,this._appCheckCredentials=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jb({}),this._settingsFrozen=!1,n instanceof wg?this._databaseId=n:(this._app=n,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new xm(Tm.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wg(e.options.projectId)}(n))}return e(C)(t,[{key:"app",get:function(){if(!this._app)throw new xm(Tm.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}},{key:"_initialized",get:function(){return this._settingsFrozen}},{key:"_terminated",get:function(){return void 0!==this._terminateTask}},{key:"_setSettings",value:function(e){if(this._settingsFrozen)throw new xm(Tm.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jb(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Sm;switch(e.type){case"gapi":var t=e.client;return bm(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Rm(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new xm(Tm.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}},{key:"_getSettings",value:function(){return this._settings}},{key:"_freezeSettings",value:function(){return this._settingsFrozen=!0,this._settings}},{key:"_delete",value:function(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}},{key:"toJSON",value:function(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}},{key:"_terminate",value:function(){return e=this,(t=Ob.get(e))&&(mm("ComponentProvider","Removing Datastore"),Ob.delete(e),t.terminate()),Promise.resolve();var e,t}}]),t}();
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
var Bb=function(){"use strict";function t(n,r,i){e(E)(this,t),this.converter=r,this._key=i,this.type="document",this.firestore=n}return e(C)(t,[{key:"_path",get:function(){return this._key.path}},{key:"id",get:function(){return this._key.path.lastSegment()}},{key:"path",get:function(){return this._key.path.canonicalString()}},{key:"parent",get:function(){return new Wb(this.firestore,this.converter,this._key.path.popLast())}},{key:"withConverter",value:function(e){return new t(this.firestore,e,this._key)}}]),t}(),Hb=function(){"use strict";function t(n,r,i){e(E)(this,t),this.converter=r,this._query=i,this.type="query",this.firestore=n}return e(C)(t,[{key:"withConverter",value:function(e){return new t(this.firestore,e,this._query)}}]),t}(),Wb=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,t,i,sk(a)))._path=a,o.type="collection",e(Zf)(o)}return e(C)(r,[{key:"id",get:function(){return this._query.path.lastSegment()}},{key:"path",get:function(){return this._query.path.canonicalString()}},{key:"parent",get:function(){var e=this._path.popLast();return e.isEmpty()?null:new Bb(this.firestore,null,new Wm(e))}},{key:"withConverter",value:function(e){return new r(this.firestore,e,this._path)}}]),r}(Hb);function zb(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=Se(t),Lb("collection","path",n),t instanceof qb){var o,s=(o=qm).fromString.apply(o,[n].concat(e(A)(i)));return Fb(s),new Wb(t,null,s)}var u;if(!(t instanceof Bb||t instanceof Wb))throw new xm(Tm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=qm).fromString.apply(u,[n].concat(e(A)(i))));return Fb(c),new Wb(t.firestore,null,c)}function Kb(t,n){for(var r=arguments.length,i=new Array(r>2?r-2:0),a=2;a<r;a++)i[a-2]=arguments[a];if(t=Se(t),1===arguments.length&&(n=Lm.I()),Lb("doc","path",n),t instanceof qb){var o,s=(o=qm).fromString.apply(o,[n].concat(e(A)(i)));return Mb(s),new Bb(t,null,new Wm(s))}var u;if(!(t instanceof Bb||t instanceof Wb))throw new xm(Tm.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");var c=t._path.child((u=qm).fromString.apply(u,[n].concat(e(A)(i))));return Mb(c),new Bb(t.firestore,t instanceof Wb?t.converter:null,new Wm(c))}
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
var Gb=function(){"use strict";function t(){var n=this;e(E)(this,t),this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Tw(this,"async_queue_retry"),this.Kc=function(){var e=bw();e&&mm("AsyncQueue","Visibility state changed to "+e.visibilityState),n.So.Eo()};var r=bw();r&&"function"==typeof r.addEventListener&&r.addEventListener("visibilitychange",this.Kc)}return e(C)(t,[{key:"isShuttingDown",get:function(){return this.Fc}},{key:"enqueueAndForget",value:function(e){this.enqueue(e)}},{key:"enqueueAndForgetEvenWhileRestricted",value:function(e){this.Gc(),this.Qc(e)}},{key:"enterRestrictedMode",value:function(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;var t=bw();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}},{key:"enqueue",value:function(e){var t=this;if(this.Gc(),this.Fc)return new Promise((function(){}));var n=new Em;return this.Qc((function(){return t.Fc&&t.Uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)})).then((function(){return n.promise}))}},{key:"enqueueRetryable",value:function(e){var t=this;this.enqueueAndForget((function(){return t.Mc.push(e),t.jc()}))}},{key:"jc",value:function(){var t=this;return e(a)(e(o).mark((function n(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.Mc.length){e.next=14;break}return e.prev=1,e.next=4,t.Mc[0]();case 4:t.Mc.shift(),t.So.reset(),e.next=13;break;case 8:if(e.prev=8,e.t0=e.catch(1),tg(e.t0)){e.next=12;break}throw e.t0;case 12:mm("AsyncQueue","Operation failed with retryable error: "+e.t0);case 13:t.Mc.length>0&&t.So.Io((function(){return t.jc()}));case 14:case"end":return e.stop()}}),n,null,[[1,8]])})))()}},{key:"Qc",value:function(e){var t=this,n=this.Oc.then((function(){return t.Lc=!0,e().catch((function(e){var n,r;throw t.Bc=e,t.Lc=!1,gm("INTERNAL UNHANDLED ERROR: ",(r=(n=e).message||"",n.stack&&(r=n.stack.includes(n.message)?n.stack:n.message+"\n"+n.stack),r)),e})).then((function(e){return t.Lc=!1,e}))}));return this.Oc=n,n}},{key:"enqueueAfterDelay",value:function(e,t,n){var r=this;this.Gc(),this.qc.indexOf(e)>-1&&(t=0);var i=rb.createAndSchedule(this,e,t,n,(function(e){return r.Wc(e)}));return this.$c.push(i),i}},{key:"Gc",value:function(){this.Bc&&wm()}},{key:"verifyOperationInProgress",value:function(){}},{key:"zc",value:function(){var t=this;return e(a)(e(o).mark((function n(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case 1:return r=t.Oc,e.next=4,r;case 4:if(r!==t.Oc){e.next=1;break}case 5:case"end":return e.stop()}}),n)})))()}},{key:"Hc",value:function(e){var t=!0,n=!1,r=void 0;try{for(var i,a=this.$c[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){if(i.value.timerId===e)return!0}}catch(e){n=!0,r=e}finally{try{t||null==a.return||a.return()}finally{if(n)throw r}}return!1}},{key:"Jc",value:function(e){var t=this;return this.zc().then((function(){t.$c.sort((function(e,t){return e.targetTimeMs-t.targetTimeMs}));var n=!0,r=!1,i=void 0;try{for(var a,o=t.$c[Symbol.iterator]();!(n=(a=o.next()).done);n=!0){var s=a.value;if(s.skipDelay(),"all"!==e&&s.timerId===e)break}}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return t.zc()}))}},{key:"Yc",value:function(e){this.qc.push(e)}},{key:"Wc",value:function(e){var t=this.$c.indexOf(e);this.$c.splice(t,1)}}]),t}();var Qb=function(t){"use strict";e(S)(r,t);var n=e(D)(r);function r(t,i,a){var o;return e(E)(this,r),(o=n.call(this,t,i,a)).type="firestore",o._queue=new Gb,o._persistenceKey="name"in t?t.name:"[DEFAULT]",e(Zf)(o)}return e(C)(r,[{key:"_terminate",value:function(){return this._firestoreClient||Xb(this),this._firestoreClient.terminate()}}]),r}(qb);
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
 */function Yb(e){return e._firestoreClient||Xb(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Xb(e){var t,n,r,i,a,o=e._freezeSettings(),s=(n=e._databaseId,r=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",i=e._persistenceKey,new _g(n,r,i,(a=o).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));e._firestoreClient=new Tb(e._authCredentials,e._appCheckCredentials,e._queue,s)}
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
var Jb=function(){"use strict";function t(){for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];e(E)(this,t);for(var a=0;a<r.length;++a)if(0===r[a].length)throw new xm(Tm.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Hm(r)}return e(C)(t,[{key:"isEqual",value:function(e){return this._internalPath.isEqual(e._internalPath)}}]),t}();
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
var $b=function(){"use strict";function t(n){e(E)(this,t),this._byteString=n}return e(C)(t,[{key:"toBase64",value:function(){return this._byteString.toBase64()}},{key:"toUint8Array",value:function(){return this._byteString.toUint8Array()}},{key:"toString",value:function(){return"Bytes(base64: "+this.toBase64()+")"}},{key:"isEqual",value:function(e){return this._byteString.isEqual(e._byteString)}}],[{key:"fromBase64String",value:function(e){try{return new t(dg.fromBase64String(e))}catch(e){throw new xm(Tm.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}},{key:"fromUint8Array",value:function(e){return new t(dg.fromUint8Array(e))}}]),t}(),Zb=function t(n){"use strict";e(E)(this,t),this._methodName=n},eI=function(){"use strict";function t(n,r){if(e(E)(this,t),!isFinite(n)||n<-90||n>90)throw new xm(Tm.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(r)||r<-180||r>180)throw new xm(Tm.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=n,this._long=r}return e(C)(t,[{key:"latitude",get:function(){return this._lat}},{key:"longitude",get:function(){return this._long}},{key:"isEqual",value:function(e){return this._lat===e._lat&&this._long===e._long}},{key:"toJSON",value:function(){return{latitude:this._lat,longitude:this._long}}},{key:"_compareTo",value:function(e){return Mm(this._lat,e._lat)||Mm(this._long,e._long)}}]),t}(),tI=/^__.*__$/,nI=function(){"use strict";function t(n,r,i){e(E)(this,t),this.data=n,this.fieldMask=r,this.fieldTransforms=i}return e(C)(t,[{key:"toMutation",value:function(e,t){return null!==this.fieldMask?new zk(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wk(e,this.data,t,this.fieldTransforms)}}]),t}();
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
 */function rI(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw wm()}}var iI=function(){"use strict";function t(n,r,i,a,o,s){e(E)(this,t),this.settings=n,this.databaseId=r,this.wt=i,this.ignoreUndefinedProperties=a,void 0===o&&this.Xc(),this.fieldTransforms=o||[],this.fieldMask=s||[]}return e(C)(t,[{key:"path",get:function(){return this.settings.path}},{key:"Zc",get:function(){return this.settings.Zc}},{key:"ta",value:function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}},{key:"ea",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}},{key:"ia",value:function(e){var t,n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}},{key:"ra",value:function(e){return this.ta({path:void 0,na:!0})}},{key:"oa",value:function(e){return pI(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}},{key:"contains",value:function(e){return void 0!==this.fieldMask.find((function(t){return e.isPrefixOf(t)}))||void 0!==this.fieldTransforms.find((function(t){return e.isPrefixOf(t.field)}))}},{key:"Xc",value:function(){if(this.path)for(var e=0;e<this.path.length;e++)this.sa(this.path.get(e))}},{key:"sa",value:function(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(rI(this.Zc)&&tI.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}]),t}(),aI=function(){"use strict";function t(n,r,i){e(E)(this,t),this.databaseId=n,this.ignoreUndefinedProperties=r,this.wt=i||Iw(n)}return e(C)(t,[{key:"aa",value:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new iI({Zc:e,methodName:t,ca:n,path:Hm.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}]),t}();function oI(e){var t=e._freezeSettings(),n=Iw(e._databaseId);return new aI(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sI(e,t,n,r,i){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},o=e.aa(a.merge||a.mergeFields?2:0,t,n,i);hI("Data must be an object, but it was:",o,r);var s,u,c=cI(r,o);if(a.merge)s=new hg(o.fieldMask),u=o.fieldTransforms;else if(a.mergeFields){var l=[],h=!0,f=!1,d=void 0;try{for(var v,p=a.mergeFields[Symbol.iterator]();!(h=(v=p.next()).done);h=!0){var y=v.value,m=fI(t,y,n);if(!o.contains(m))throw new xm(Tm.INVALID_ARGUMENT,"Field '".concat(m,"' is specified in your field mask but missing from your input data."));yI(l,m)||l.push(m)}}catch(e){f=!0,d=e}finally{try{h||null==p.return||p.return()}finally{if(f)throw d}}s=new hg(l),u=o.fieldTransforms.filter((function(e){return s.covers(e.field)}))}else s=null,u=o.fieldTransforms;return new nI(new Ug(c),s,u)}function uI(e,t){if(lI(e=Se(e)))return hI("Unsupported field value:",t,e),cI(e,t);if(e instanceof Zb)return function(e,t){if(!rI(t.Zc))throw t.oa("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.oa("".concat(e._methodName,"() is not currently supported inside arrays"));var n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){var n=[],r=0,i=!0,a=!1,o=void 0;try{for(var s,u=e[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=uI(s.value,t.ra(r));null==c&&(c={nullValue:"NULL_VALUE"}),n.push(c),r++}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Se(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return bk(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){var n=Um.fromDate(e);return{timestampValue:y_(t.wt,n)}}if(e instanceof Um){var r=new Um(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:y_(t.wt,r)}}if(e instanceof eI)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof $b)return{bytesValue:m_(t.wt,e._byteString)};if(e instanceof Bb){var i=t.databaseId,a=e.firestore._databaseId;if(!a.isEqual(i))throw t.oa("Document reference is for database ".concat(a.projectId,"/").concat(a.database," but should be for database ").concat(i.projectId,"/").concat(i.database));return{referenceValue:__(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa("Unsupported field value: ".concat(Ub(e)))}(e,t)}function cI(e,t){var n={};return ag(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ig(e,(function(e,r){var i=uI(r,t.ea(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function lI(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Um||e instanceof eI||e instanceof $b||e instanceof Bb||e instanceof Zb)}function hI(e,t,n){if(!lI(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){var r=Ub(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}var i}function fI(e,t,n){if((t=Se(t))instanceof Jb)return t._internalPath;if("string"==typeof t)return vI(e,t);throw pI("Field path arguments must be of type string or ",e,!1,void 0,n)}var dI=new RegExp("[~\\*/\\[\\]]");function vI(t,n,r){if(n.search(dI)>=0)throw pI("Invalid field path (".concat(n,"). Paths must not contain '~', '*', '/', '[', or ']'"),t,!1,void 0,r);try{return e($f)(Jb,e(A)(n.split(".")))._internalPath}catch(e){throw pI("Invalid field path (".concat(n,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),t,!1,void 0,r)}}function pI(e,t,n,r,i){var a=r&&!r.isEmpty(),o=void 0!==i,s="Function ".concat(t,"() called with invalid data");n&&(s+=" (via `toFirestore()`)"),s+=". ";var u="";return(a||o)&&(u+=" (found",a&&(u+=" in field ".concat(r)),o&&(u+=" in document ".concat(i)),u+=")"),new xm(Tm.INVALID_ARGUMENT,s+e+u)}function yI(e,t){return e.some((function(e){return e.isEqual(t)}))}
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
function mI(e,t,n){return e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t}function gI(e,t){var n=Vb(e.firestore,Qb),r=Kb(e),i=mI(e.converter,t);return kI(n,[sI(oI(e.firestore),"addDoc",r._key,i,null!==e.converter,{}).toMutation(r._key,Mk.exists(!1))]).then((function(){return r}))}function kI(t,n){return r=Yb(t),i=n,s=new Em,r.asyncQueue.enqueueAndForget(e(a)(e(o).mark((function t(){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ub,e.next=3,Pb(r);case 3:return e.t1=e.sent,e.t2=i,e.t3=s,e.abrupt("return",(0,e.t0)(e.t1,e.t2,e.t3));case 7:case"end":return e.stop()}}),t)})))),s.promise;var r,i,s}!function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];vm=Tt,kt(new Ne("firestore",(function(e,n){var r=n.options,i=e.getProvider("app").getImmediate(),a=new Qb(i,new Nm(e.getProvider("auth-internal")),new Pm(e.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:t},r),a._setSettings(r),a}),"PUBLIC")),Et(fm,"3.4.10",e),Et(fm,"3.4.10","esm2017")}();u=i("dh4R1");var _I,wI,bI,II,TI,xI=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var n=t;t={name:n}}var r=Object.assign({name:vt,automaticDataCollectionEnabled:!1},t),i=r.name;if("string"!=typeof i||!i)throw bt.create("bad-app-name",{appName:String(i)});var a=yt.get(i);if(a){if(pe(e,a.options)&&pe(r,a.config))return a;throw bt.create("duplicate-app",{appName:i})}var o=new Oe(i),s=!0,u=!1,c=void 0;try{for(var l,h=mt.values()[Symbol.iterator]();!(s=(l=h.next()).done);s=!0){var f=l.value;o.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==h.return||h.return()}finally{if(u)throw c}}var d=new It(e,r,o);return yt.set(i,d),d}({apiKey:"AIzaSyDl7udEYc6yHxHTsho7iDZ8HPitihaHEU4",authDomain:"filmoteka-46cf5.firebaseapp.com",databaseURL:"https://filmoteka-46cf5-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-46cf5",storageBucket:"filmoteka-46cf5.appspot.com",messagingSenderId:"1056346694690",appId:"1:1056346694690:web:c5c566f94f38d4dac1167b",measurementId:"G-9M2V8M9NTK"}),EI=(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt(),t=_t(e=Se(e),nu);t.isInitialized()?t.getImmediate():Hu(e)}(xI),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt();return _t(e,"firestore").getImmediate()}(xI)),CI=
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
 */
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt(),t=_t(e,"auth");return t.isInitialized()?t.getImmediate():fc(e,{popupRedirectResolver:Wf,persistence:[qh,mh,kh]})}(),SI={formWrap:document.querySelector(".form-auth"),libBtn:document.querySelector(".nav__library"),regForm:document.querySelector('[name="regForm"]'),regBtn:document.querySelector('[name="regBtn"]'),loginForm:document.querySelector('[name="loginForm"]'),logoutBtn:document.querySelector('[name="logoutBtn"]'),loginBtn:document.querySelector('[name="loginBtn"]')};function NI(){return(NI=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.elements.emailLogin.value.trim(),i=n.target.elements.passwordLogin.value.trim(),CI.currentUser,e.next=6,fh(CI,r,i);case 6:SI.loginForm.classList.add("is-hidden"),SI.formWrap.classList.add("is-hidden");case 8:case"end":return e.stop()}}),t)})))).apply(this,arguments)}SI.regForm.addEventListener("submit",(function(t){t.preventDefault();var n=t.target.elements.emailReg.value.trim(),r=t.target.elements.passwordReg.value.trim();lh(CI,n,r).then((i=e(a)(e(o).mark((function t(i){var a;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("New user registered ".concat(i.user.email)),e.prev=1,e.next=4,gI(zb(EI,"users"),{email:n,password:r,films:{}});case 4:a=e.sent,console.log("Document written with ID: ",a.id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error("Error adding document: ",e.t0);case 11:SI.regForm.classList.add("is-hidden"),SI.formWrap.classList.add("is-hidden");case 13:case"end":return e.stop()}}),t,null,[[1,8]])}))),function(e){return i.apply(this,arguments)}));var i})),SI.loginForm.addEventListener("submit",(function(e){return NI.apply(this,arguments)})),SI.logoutBtn.addEventListener("click",(function(e){e.preventDefault(),t=CI,Se(t).signOut(),SI.libBtn.classList.add("is-hidden");var t})),SI.loginBtn.addEventListener("click",(function(){SI.loginForm.classList.remove("is-hidden"),SI.formWrap.classList.remove("is-hidden"),SI.regForm.classList.add("is-hidden")})),SI.regBtn.addEventListener("click",(function(){SI.regForm.classList.remove("is-hidden"),SI.formWrap.classList.remove("is-hidden"),SI.loginForm.classList.add("is-hidden")})),_I=CI,TI=e(a)(e(o).mark((function t(n){return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&(SI.logoutBtn.classList.remove("is-hidden"),SI.libBtn.classList.remove("is-hidden"),SI.loginBtn.classList.add("is-hidden"),SI.regBtn.classList.add("is-hidden")),n){e.next=7;break}return SI.loginBtn.classList.remove("is-hidden"),SI.regBtn.classList.remove("is-hidden"),SI.libBtn.classList.add("is-hidden"),SI.logoutBtn.classList.add("is-hidden"),e.abrupt("return");case 7:case"end":return e.stop()}}),t)}))),wI=function(e){return TI.apply(this,arguments)},Se(_I).onAuthStateChanged(wI,bI,II);_=i("1vR0Z");var AI,RI=i("eMaQ6"),DI=i("7LMqv"),PI=document.querySelector(".movie-card-list");function OI(){return(OI=e(a)(e(o).mark((function t(n){var r,i;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.target.dataset.target){e.next=2;break}return e.abrupt("return");case 2:return r=n.target.dataset.id,e.next=5,u.default.fetchFullMovieInfo(r);case 5:if(i=e.sent,"watched"!==n.target.dataset.target){e.next=14;break}if(n.target.classList.toggle("pressed"),!n.target.classList.contains("pressed")){e.next=12;break}return n.target.textContent="Remove from Watched",(0,RI.default)(i,_.watchedArr,n.target.dataset.target),e.abrupt("return");case 12:n.target.textContent="Add to Watched",(0,DI.default)(r,_.watchedArr,n.target.dataset.target);case 14:if("queue"!==n.target.dataset.target){e.next=22;break}if(n.target.classList.toggle("pressed"),!n.target.classList.contains("pressed")){e.next=20;break}return n.target.textContent="Remove from Queue",(0,RI.default)(i,_.queueArr,n.target.dataset.target),e.abrupt("return");case 20:n.target.textContent="Add to Queue",(0,DI.default)(r,_.queueArr,n.target.dataset.target);case 22:case"end":return e.stop()}}),t)})))).apply(this,arguments)}e(l).start(),(0,_.default)(PI),u.default.fetchGenresList().then((function(e){AI=e})),u.default.fetchTrendData().then((function(t){var n,r,i=h(c(t.results,AI));PI.insertAdjacentHTML("beforeend",i),n=t.results,r=n.map((function(t){var n=t.poster_path,r=t.id,i=n?"".concat("https://image.tmdb.org/t/p/w500").concat(n):e(s);return'<div class="swiper-slide">\n\t\t\t\t<img src="'.concat(i,'" alt="poster" class="slide-poster" data-id="').concat(r,'"/>\n\t\t\t</div>')})).join(""),Mo.insertAdjacentHTML("beforeend",r);var a=document.querySelectorAll(".btn-watche"),o=document.querySelectorAll(".btn-queue");a.forEach((function(e){_.watchedArr.forEach((function(t){t.id===Number(e.dataset.id)&&(e.classList.add("pressed"),e.textContent="Remove from Watched")}))})),o.forEach((function(e){_.queueArr.forEach((function(t){t.id===Number(e.dataset.id)&&(e.classList.add("pressed"),e.textContent="Remove from Queue")}))})),m(t.total_pages,t.page)})).catch((function(e){return console.log(e)})),e(l).done(),PI.addEventListener("click",(function(e){return OI.apply(this,arguments)}))}();
//# sourceMappingURL=index.732f00e8.js.map
