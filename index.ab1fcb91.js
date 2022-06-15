function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequire37c5;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire37c5=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.ab1fcb91.js","5JHSy":"no-poster.325dd571.jpg","5UbS1":"index.a93e5eba.css","1x9ka":"index.29639819.js"}')),s("cXP6Y"),s("kcHu4");var r,o=s("iyB0E");r=new URL(s("kyEFX").resolve("5JHSy"),import.meta.url).toString();function a(e,n){const i=null==n?void 0:n.genres;return e.map((({poster_path:e,original_title:n,release_date:s,genre_ids:o,id:a})=>{""===n&&(n="Sorry, no title for the movie."),s||(s="Expected");const l=o.reduce(((t,e,n)=>{if(!o.length)return t;if(n<=1){const s=null==i?void 0:i.find((({id:t})=>t===e));return n<=o.length-2?t+(null==s?void 0:s.name)+", ":t+(null==s?void 0:s.name)+" "}return 2===n?t+"Others":t}),""),h=i?l:"Other",c=null==s?void 0:s.split("-").slice(0,1);return{id:a,imagePoster:e?`https://image.tmdb.org/t/p/w500${e}`:t(r),original_title:n,releaseYear:c,fullGenresNames:h}}))}o=s("iyB0E"),o=s("iyB0E");var l=s("k6WP2");function h(t){return t.map((({id:t,imagePoster:e,original_title:n,releaseYear:i,fullGenresNames:s})=>`<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="${e}" alt="poster" class="imagePoster" data-id="${t}"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="${t}" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="${t}" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="${t}">${n}</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">${s} | ${i} </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>`)).join("")}const c=document.querySelector(".movie-card-list"),u=document.querySelector(".pagination"),d=document.querySelector(".movie-card-list");let f,p=0;function g(t,e){let n="",i=e-2,s=e-1,r=e+1,o=e+2;p=e,t<=1||(e>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),e>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),e>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e>4&&(n+='<li class="pagination-item">...</li>'),i>0&&(n+=`<li class="pagination-item pagination-pages">${i}</li>`)),s>0&&(n+=`<li class="pagination-item pagination-pages">${s}</li>`),n+=`<li class="pagination-item pagination-pages current-page">${e}</li>`,e<t&&(n+=`<li class="pagination-item pagination-pages">${r}</li>`),e<t-1&&(e<t-2&&(n+=`<li class="pagination-item pagination-pages">${o}</li>`,!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e<t-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+=`<li class="pagination-item pagination-pages">${t}</li>`)),e<t&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),u.innerHTML=n,u.addEventListener("click",m))}function m(e){if("LI"!==e.target.nodeName)return;const n=e.target.textContent;switch(n){case"«":p-=1;break;case"»":p+=1;break;case"...":return;default:p=n}d.innerHTML="",t(l).start(),o.default.fetchGenresList().then((t=>{f=t})),o.input.value?o.default.movieSearch(p).then((e=>{t(l).done();const n=h(a(e.results,f));c.insertAdjacentHTML("beforeend",n),g(e.total_pages,e.page)})).catch((t=>console.log(t))):(o.default.fetchTrendData(p).then((t=>{const e=h(a(t.results,f));c.insertAdjacentHTML("beforeend",e),g(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done())}s("dbDJu");var y=s("eS71k"),_=(o=s("iyB0E"),l=s("k6WP2"),o=s("iyB0E"),s("01N8a"));const v=document.querySelector(".movie-card-list"),w=document.querySelector(".form__search"),C=document.querySelector(".movie-card-list"),E=document.querySelector(".search__error");let T;o.default.fetchGenresList().then((t=>{T=t})),null==w||w.addEventListener("submit",(function(e){if(e.preventDefault(),!o.input.value)return E.textContent="Search field is empty. Enter movie name and press the search button",void(E.style.display="block");t(l).start(),o.default.movieSearch().then((t=>{if(0===t.total_results)E.textContent="Search result is unsuccessful. Enter the correct movie name and press the search button",E.style.display="block";else{E.style.display="none",C.innerHTML="",u.innerHTML="";const e=h(a(t.results,T));v.insertAdjacentHTML("beforeend",e),(0,_.default)(),g(t.total_pages,t.page)}})).catch((t=>console.log(t))),t(l).done()}));l=s("k6WP2");s("baGT8");var b=s("ix4Jr"),I=s("4a6xH"),S=s("ffjl9"),N=s("7vF8m"),k=s("4TNnu");
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
 */let A="";
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
class R{set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,S.stringify)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,S.jsonEval)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}constructor(t){this.domStorage_=t,this.prefix_="firebase:"}}
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
 */class x{set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,S.contains)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
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
 */const D=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new R(e)}}catch(t){}return new x},P=D("localStorage"),L=D("sessionStorage"),M=new(0,N.Logger)("@firebase/database"),O=function(){let t=1;return function(){return t++}}(),F=function(t){const e=(0,S.stringToByteArray)(t),n=new(0,S.Sha1);n.update(e);const i=n.digest();return S.base64.encodeByteArray(i)},V=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=V.apply(null,i):e+="object"==typeof i?(0,S.stringify)(i):i,e+=" "}return e};let U=null,q=!0;const B=function(t,e){(0,S.assert)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(M.logLevel=N.LogLevel.VERBOSE,U=M.log.bind(M),e&&L.set("logging_enabled",!0)):"function"==typeof t?U=t:(U=null,L.remove("logging_enabled"))},j=function(...t){if(!0===q&&(q=!1,null===U&&!0===L.get("logging_enabled")&&B(!0)),U){const e=V.apply(null,t);U(e)}},H=function(t){return function(...e){j(t,...e)}},W=function(...t){const e="FIREBASE INTERNAL ERROR: "+V(...t);M.error(e)},G=function(...t){const e=`FIREBASE FATAL ERROR: ${V(...t)}`;throw M.error(e),new Error(e)},$=function(...t){const e="FIREBASE WARNING: "+V(...t);M.warn(e)},K=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},z=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=nt(t),i=nt(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},Q=function(t,e){return t===e?0:t<e?-1:1},X=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,S.stringify)(e))},Y=function(t){if("object"!=typeof t||null===t)return(0,S.stringify)(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,S.stringify)(e[i]),n+=":",n+=Y(t[e[i]]);return n+="}",n},J=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function Z(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const tt=function(t){(0,S.assert)(!K(t),"Invalid JSON number");const e=1023;let n,i,s,r,o;0===t?(i=0,s=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=r+e,s=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(t/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let h="";for(o=0;o<64;o+=8){let t=parseInt(l.substr(o,8),2).toString(16);1===t.length&&(t="0"+t),h+=t}return h.toLowerCase()};const et=new RegExp("^-?(0*)\\d{1,10}$"),nt=function(t){if(et.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},it=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw $("Exception was thrown by user callback.",e),t}),Math.floor(0))}},st=function(t,e){const n=setTimeout(t,e);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class rt{getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){$(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}}
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
 */class ot{getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(j("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',$(t)}constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}}class at{getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}constructor(t){this.accessToken=t}}at.OWNER="owner";
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
const lt=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class ht{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&P.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}constructor(t,e,n,i,s=!1,r="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=P.get("host:"+t)||this._host}}function ct(t,e,n){let i;if((0,S.assert)("string"==typeof e,"typeof type must == string"),(0,S.assert)("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const s=[];return Z(n,((t,e)=>{s.push(t+"="+e)})),i+s.join("&")}
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
 */class ut{incrementCounter(t,e=1){(0,S.contains)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,S.deepCopy)(this.counters_)}constructor(){this.counters_={}}}
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
 */const dt={},ft={};function pt(t){const e=t.toString();return dt[e]||(dt[e]=new ut),dt[e]}
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
class gt{closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&it((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
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
 */class mt{open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new gt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if((0,S.isNodeSdk)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new yt(((...t)=>{const[e,n,i,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&lt.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){mt.forceAllow_=!0}static forceDisallow(){mt.forceDisallow_=!0}static isAvailable(){return!(0,S.isNodeSdk)()&&(!!mt.forceAllow_||!(mt.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,S.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,S.base64Encode)(e),i=J(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,S.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,S.stringify)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(t,e,n,i,s,r,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=H(t),this.stats_=pt(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),ct(e,"long_polling",t))}}class yt{static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||j("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){(0,S.isNodeSdk)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{j("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,S.isNodeSdk)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=O(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=yt.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){j("frame writing exception"),t.stack&&j(t.stack),j(t)}}}}
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
 */let _t=null;"undefined"!=typeof MozWebSocket?_t=MozWebSocket:"undefined"!=typeof WebSocket&&(_t=WebSocket);class vt{static connectionURL_(t,e,n,i,s){const r={v:"5"};return!(0,S.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&lt.test(location.hostname)&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),ct(t,"websocket",r)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,P.set("previous_websocket_failure",!0);try{let t;if((0,S.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/5/${A}/${k.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new _t(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){vt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==_t&&!vt.forceDisallow_}static previouslyFailed(){return P.isInMemoryStorage||!0===P.get("previous_websocket_failure")}markConnectionHealthy(){P.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,S.jsonEval)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,S.assert)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,S.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=J(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(t,e,n,i,s,r,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=H(this.connId),this.stats_=pt(e),this.connURL=vt.connectionURL_(e,r,o,i,n),this.nodeAdmin=e.nodeAdmin}}vt.responsesRequiredToBeHealthy=2,vt.healthyTimeout=3e4;
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
class wt{static get ALL_TRANSPORTS(){return[mt,vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=vt&&vt.isAvailable();let n=e&&!vt.previouslyFailed();if(t.webSocketOnly&&(e||$("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[vt];else{const t=this.transports_=[];for(const e of wt.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);wt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(t){this.initTransports_(t)}}wt.globalTransportInitialized_=!1;class Ct{start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=st((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=X("t",t),n=X("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=X("t",t),n=X("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=X("t",t);if("d"in t){const n=t.d;if("h"===e)this.onHandshake_(n);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?W("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):W("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&$("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),st((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):st((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(P.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(t,e,n,i,s,r,o,a,l,h){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=H("c:"+this.id+":"),this.transportManager_=new wt(e),this.log_("Connection created"),this.start_()}}
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
 */class Et{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
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
 */class Tt{trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){(0,S.assert)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}constructor(t){this.allowedEvents_=t,this.listeners_={},(0,S.assert)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}}
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
 */class bt extends Tt{static getInstance(){return new bt}getInitialEvent(t){return(0,S.assert)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,S.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
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
 */class It{toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}}function St(){return new It("")}function Nt(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function kt(t){return t.pieces_.length-t.pieceNum_}function At(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new It(t.pieces_,e)}function Rt(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function xt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Dt(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new It(e,0)}function Pt(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof It)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new It(n,0)}function Lt(t){return t.pieceNum_>=t.pieces_.length}function Mt(t,e){const n=Nt(t),i=Nt(e);if(null===n)return e;if(n===i)return Mt(At(t),At(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Ot(t,e){if(kt(t)!==kt(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Ft(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(kt(t)>kt(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class Vt{constructor(t,e){this.errorPrefix_=e,this.parts_=xt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=(0,S.stringLength)(this.parts_[t]);Ut(this)}}function Ut(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+qt(t))}function qt(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
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
 */class Bt extends Tt{static getInstance(){return new Bt}getInitialEvent(t){return(0,S.assert)("visible"===t,"Unknown event type: "+t),[this.visible_]}constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
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
 */class jt extends Et{sendRequest(t,e,n){const i=++this.requestNumber_,s={r:i,a:t,b:e};this.log_((0,S.stringify)(s)),(0,S.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new(0,S.Deferred),n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const i=t.d;"ok"===t.s?(this.onDataUpdate_(n.p,i,!1,null),e.resolve(i)):e.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[s];void 0!==t&&i===t&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),e.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),e.promise}listen(t,e,n,i){this.initConnection_();const s=t._queryIdentifier,r=t._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,S.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,S.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};t.tag&&(s.q=e._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;jt.warnOnListenWarnings_(r,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&(0,S.contains)(t,"w")){const n=(0,S.safeGet)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();$(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||(0,S.isAdmin)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,S.isValidFormat)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,S.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const r={p:e,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,S.stringify)(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):W("Unrecognized action received from server: "+(0,S.stringify)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,S.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jt.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(t){(0,S.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?j("getToken() completed but was canceled"):(j("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new Ct(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{$(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(t){this.log_("Failed to get token: "+t),r||(this.repoInfo_.nodeAdmin&&$(t),a())}}}interrupt(t){j("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){j("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,S.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>Y(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new It(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){j("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){j("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,S.isNodeSdk)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+A.replace(/\./g,"-")]=1,(0,S.isMobileCordova)()?t["framework.cordova"]=1:(0,S.isReactNative)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=bt.getInstance().currentlyOnline();return(0,S.isEmpty)(this.interruptReasons_)&&t}constructor(t,e,n,i,s,r,o,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=jt.nextPersistentConnectionId_++,this.log_=H("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,S.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bt.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&bt.getInstance().on("online",this.onOnline_,this)}}jt.nextPersistentConnectionId_=0,jt.nextConnectionId_=0;
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
class Ht{static Wrap(t,e){return new Ht(t,e)}constructor(t,e){this.name=t,this.node=e}}
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
 */class Wt{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Ht("[MIN_NAME]",t),i=new Ht("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return Ht.MIN}}
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
 */let Gt;class $t extends Wt{static get __EMPTY_NODE(){return Gt}static set __EMPTY_NODE(t){Gt=t}compare(t,e){return z(t.name,e.name)}isDefinedOn(t){throw(0,S.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Ht.MIN}maxPost(){return new Ht("[MAX_NAME]",Gt)}makePost(t,e){return(0,S.assert)("string"==typeof t,"KeyIndex indexValue must always be a string."),new Ht(t,Gt)}toString(){return".key"}}const Kt=new $t;
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
 */class zt{getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}}class Qt{copy(t,e,n,i,s){return new Qt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Xt.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Xt.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:Qt.RED,this.left=null!=i?i:Xt.EMPTY_NODE,this.right=null!=s?s:Xt.EMPTY_NODE}}Qt.RED=!0,Qt.BLACK=!1;class Xt{insert(t,e){return new Xt(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,Qt.BLACK,null,null))}remove(t){return new Xt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Qt.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new zt(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new zt(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new zt(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new zt(this.root_,null,this.comparator_,!0,t)}constructor(t,e=Xt.EMPTY_NODE){this.comparator_=t,this.root_=e}}
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
function Yt(t,e){return z(t.name,e.name)}function Jt(t,e){return z(t,e)}
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
 */let Zt;Xt.EMPTY_NODE=new class{copy(t,e,n,i,s){return this}insert(t,e,n){return new Qt(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const te=function(t){return"number"==typeof t?"number:"+tt(t):"string:"+t},ee=function(t){if(t.isLeafNode()){const e=t.val();(0,S.assert)("string"==typeof e||"number"==typeof e||"object"==typeof e&&(0,S.contains)(e,".sv"),"Priority must be a string or number.")}else(0,S.assert)(t===Zt||t.isEmpty(),"priority of unexpected type.");(0,S.assert)(t===Zt||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let ne,ie,se;class re{static set __childrenNodeConstructor(t){ne=t}static get __childrenNodeConstructor(){return ne}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new re(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Lt(t)?this:".priority"===Nt(t)?this.priorityNode_:re.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:re.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=Nt(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,S.assert)(".priority"!==n||1===kt(t),".priority must be the last token in a path"),this.updateImmediateChild(n,re.__childrenNodeConstructor.EMPTY_NODE.updateChild(At(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+te(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?tt(this.value_):this.value_,this.lazyHash_=F(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===re.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof re.__childrenNodeConstructor?-1:((0,S.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=re.VALUE_TYPE_ORDER.indexOf(e),s=re.VALUE_TYPE_ORDER.indexOf(n);return(0,S.assert)(i>=0,"Unknown leaf type: "+e),(0,S.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(t,e=re.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,S.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),ee(this.priorityNode_)}}re.VALUE_TYPE_ORDER=["object","boolean","number","string"];const oe=new class extends Wt{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?z(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Ht.MIN}maxPost(){return new Ht("[MAX_NAME]",new re("[PRIORITY-POST]",se))}makePost(t,e){const n=ie(t);return new Ht(e,new re("[PRIORITY-POST]",n))}toString(){return".priority"}},ae=Math.log(2);
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
 */class le{nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/ae,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}}const he=function(t,e,n,i){t.sort(e);const s=function(e,i){const r=i-e;let o,a;if(0===r)return null;if(1===r)return o=t[e],a=n?n(o):o,new Qt(a,o.node,Qt.BLACK,null,null);{const l=parseInt(r/2,10)+e,h=s(e,l),c=s(l+1,i);return o=t[l],a=n?n(o):o,new Qt(a,o.node,Qt.BLACK,h,c)}},r=function(e){let i=null,r=null,o=t.length;const a=function(e,i){const r=o-e,a=o;o-=e;const h=s(r+1,a),c=t[r],u=n?n(c):c;l(new Qt(u,c.node,i,null,h))},l=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,Qt.BLACK):(a(i,Qt.BLACK),a(i,Qt.RED))}return r}(new le(t.length));return new Xt(i||e,r)};
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
 */let ce;const ue={};class de{static get Default(){return(0,S.assert)(ue&&oe,"ChildrenNode.ts has not been loaded"),ce=ce||new de({".priority":ue},{".priority":oe}),ce}get(t){const e=(0,S.safeGet)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Xt?e:null}hasIndex(t){return(0,S.contains)(this.indexSet_,t.toString())}addIndex(t,e){(0,S.assert)(t!==Kt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=e.getIterator(Ht.Wrap);let r,o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?he(n,t.getCompare()):ue;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const h=Object.assign({},this.indexes_);return h[a]=r,new de(h,l)}addToIndexes(t,e){const n=(0,S.map)(this.indexes_,((n,i)=>{const s=(0,S.safeGet)(this.indexSet_,i);if((0,S.assert)(s,"Missing index implementation for "+i),n===ue){if(s.isDefinedOn(t.node)){const n=[],i=e.getIterator(Ht.Wrap);let r=i.getNext();for(;r;)r.name!==t.name&&n.push(r),r=i.getNext();return n.push(t),he(n,s.getCompare())}return ue}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new Ht(t.name,i))),s.insert(t,t.node)}}));return new de(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,S.map)(this.indexes_,(n=>{if(n===ue)return n;{const i=e.get(t.name);return i?n.remove(new Ht(t.name,i)):n}}));return new de(n,this.indexSet_)}constructor(t,e){this.indexes_=t,this.indexSet_=e}}
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
 */let fe;class pe{static get EMPTY_NODE(){return fe||(fe=new pe(new Xt(Jt),null,de.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fe}updatePriority(t){return this.children_.isEmpty()?this:new pe(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?fe:e}}getChild(t){const e=Nt(t);return null===e?this:this.getImmediateChild(e).getChild(At(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,S.assert)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Ht(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?fe:this.priorityNode_;return new pe(i,r,s)}}updateChild(t,e){const n=Nt(t);if(null===n)return e;{(0,S.assert)(".priority"!==Nt(t)||1===kt(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(At(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(oe,((r,o)=>{e[r]=o.val(t),n++,s&&pe.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+te(this.getPriority().val())+":"),this.forEachChild(oe,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":F(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ht(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Ht(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Ht(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Ht.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Ht.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===ge?-1:0}withIndex(t){if(t===Kt||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new pe(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===Kt||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(oe),n=e.getIterator(oe);let i=t.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===Kt?null:this.indexMap_.get(t.toString())}constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&ee(this.priorityNode_),this.children_.isEmpty()&&(0,S.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}pe.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ge=new class extends pe{compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return pe.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Xt(Jt),pe.EMPTY_NODE,de.Default)}};Object.defineProperties(Ht,{MIN:{value:new Ht("[MIN_NAME]",pe.EMPTY_NODE)},MAX:{value:new Ht("[MAX_NAME]",ge)}}),$t.__EMPTY_NODE=pe.EMPTY_NODE,re.__childrenNodeConstructor=pe,Zt=ge,function(t){se=t}(ge);function me(t,e=null){if(null===t)return pe.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),(0,S.assert)(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new re(t,me(e))}if(t instanceof Array){let n=pe.EMPTY_NODE;return Z(t,((e,i)=>{if((0,S.contains)(t,e)&&"."!==e.substring(0,1)){const t=me(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(me(e))}{const n=[];let i=!1;if(Z(t,((t,e)=>{if("."!==t.substring(0,1)){const s=me(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Ht(t,s)))}})),0===n.length)return pe.EMPTY_NODE;const s=he(n,Yt,(t=>t.name),Jt);if(i){const t=he(n,oe.getCompare());return new pe(s,me(e),new de({".priority":t},{".priority":oe}))}return new pe(s,me(e),de.Default)}}!function(t){ie=t}(me);
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
class ye extends Wt{extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?z(t.name,e.name):s}makePost(t,e){const n=me(t),i=pe.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ht(e,i)}maxPost(){const t=pe.EMPTY_NODE.updateChild(this.indexPath_,ge);return new Ht("[MAX_NAME]",t)}toString(){return xt(this.indexPath_,0).join("/")}constructor(t){super(),this.indexPath_=t,(0,S.assert)(!Lt(t)&&".priority"!==Nt(t),"Can't create PathIndex with empty path or .priority key")}}
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
 */const _e=new class extends Wt{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?z(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Ht.MIN}maxPost(){return Ht.MAX}makePost(t,e){const n=me(t);return new Ht(e,n)}toString(){return".value"}},ve="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
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
 */!function(){let t=0;const e=[]}();
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
function we(t){return{type:"value",snapshotNode:t}}function Ce(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ee(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Te(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
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
class be{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,S.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,S.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,S.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,S.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,S.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const t=new be;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}}function Ie(t){const e={};if(t.isDefault())return e;let n;return t.index_===oe?n="$priority":t.index_===_e?n="$value":t.index_===Kt?n="$key":((0,S.assert)(t.index_ instanceof ye,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=(0,S.stringify)(n),t.startSet_&&(e.startAt=(0,S.stringify)(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+(0,S.stringify)(t.indexStartName_))),t.endSet_&&(e.endAt=(0,S.stringify)(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+(0,S.stringify)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Se(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}
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
 */class Ne extends Et{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,S.assert)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const r=Ne.getListenId_(t,n),o={};this.listens_[r]=o;const a=Ie(t._queryParams);this.restRequest_(s+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(s,a,!1,n),(0,S.safeGet)(this.listens_,r)===o){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=Ne.getListenId_(t,e);delete this.listens_[n]}get(t){const e=Ie(t._queryParams),n=t._path.toString(),i=new(0,S.Deferred);return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(e.auth=i.accessToken),s&&s.token&&(e.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,S.querystring)(e);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,S.jsonEval)(o.responseText)}catch(t){$("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&$("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=H("p:rest:"),this.listens_={}}}
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
 */class ke{getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}constructor(){this.rootNode_=pe.EMPTY_NODE}}
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
 */function Ae(){return{value:null,children:new Map}}function Re(t,e,n){if(Lt(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=Nt(e);t.children.has(i)||t.children.set(i,Ae());Re(t.children.get(i),e=At(e),n)}}function xe(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
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
 */(t,((t,i)=>{xe(i,new It(e.toString()+"/"+t),n)}))}class De{get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&Z(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}constructor(t){this.collection_=t,this.last_=null}}
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
 */class Pe{reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;Z(t,((t,i)=>{i>0&&(0,S.contains)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),st(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new De(t);const n=1e4+2e4*Math.random();st(this.reportStats_.bind(this),Math.floor(n))}}
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
 */var Le,Me;function Oe(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
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
 */(Me=Le||(Le={}))[Me.OVERWRITE=0]="OVERWRITE",Me[Me.MERGE=1]="MERGE",Me[Me.ACK_USER_WRITE=2]="ACK_USER_WRITE",Me[Me.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Fe{operationForChild(t){if(Lt(this.path)){if(null!=this.affectedTree.value)return(0,S.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new It(t));return new Fe(St(),e,this.revert)}}return(0,S.assert)(Nt(this.path)===t,"operationForChild called for unrelated child."),new Fe(At(this.path),this.affectedTree,this.revert)}constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Le.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
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
class Ve{operationForChild(t){return Lt(this.path)?new Ve(this.source,St(),this.snap.getImmediateChild(t)):new Ve(this.source,At(this.path),this.snap)}constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Le.OVERWRITE}}
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
 */class Ue{operationForChild(t){if(Lt(this.path)){const e=this.children.subtree(new It(t));return e.isEmpty()?null:e.value?new Ve(this.source,St(),e.value):new Ue(this.source,St(),e)}return(0,S.assert)(Nt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ue(this.source,At(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Le.MERGE}}
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
 */class qe{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Lt(t))return this.isFullyInitialized()&&!this.filtered_;const e=Nt(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}}
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
 */function Be(t,e,n,i,s,r){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw(0,S.assertionError)("Should only compare child_ events.");const i=new Ht(e.childName,e.snapshotNode),s=new Ht(n.childName,n.snapshotNode);return t.index_.compare(i,s)}
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
 */(t,e,n))),o.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,r);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function je(t,e){return{eventCache:t,serverCache:e}}function He(t,e,n,i){return je(new qe(e,n,i),t.serverCache)}function We(t,e,n,i){return je(t.eventCache,new qe(e,n,i))}function Ge(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function $e(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
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
 */let Ke;class ze{static fromObject(t){let e=new ze(null);return Z(t,((t,n)=>{e=e.set(new It(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:St(),value:this.value};if(Lt(t))return null;{const n=Nt(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(At(t),e);if(null!=s){return{path:Pt(new It(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Lt(t))return this;{const e=Nt(t),n=this.children.get(e);return null!==n?n.subtree(At(t)):new ze(null)}}set(t,e){if(Lt(t))return new ze(e,this.children);{const n=Nt(t),i=(this.children.get(n)||new ze(null)).set(At(t),e),s=this.children.insert(n,i);return new ze(this.value,s)}}remove(t){if(Lt(t))return this.children.isEmpty()?new ze(null):new ze(null,this.children);{const e=Nt(t),n=this.children.get(e);if(n){const i=n.remove(At(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new ze(null):new ze(this.value,s)}return this}}get(t){if(Lt(t))return this.value;{const e=Nt(t),n=this.children.get(e);return n?n.get(At(t)):null}}setTree(t,e){if(Lt(t))return e;{const n=Nt(t),i=(this.children.get(n)||new ze(null)).setTree(At(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new ze(this.value,s)}}fold(t){return this.fold_(St(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Pt(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,St(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(Lt(t))return null;{const i=Nt(t),s=this.children.get(i);return s?s.findOnPath_(At(t),Pt(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,St(),e)}foreachOnPath_(t,e,n){if(Lt(t))return this;{this.value&&n(e,this.value);const i=Nt(t),s=this.children.get(i);return s?s.foreachOnPath_(At(t),Pt(e,i),n):new ze(null)}}foreach(t){this.foreach_(St(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(Pt(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}constructor(t,e=(()=>(Ke||(Ke=new Xt(Q)),Ke))()){this.value=t,this.children=e}}
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
 */class Qe{static empty(){return new Qe(new ze(null))}constructor(t){this.writeTree_=t}}function Xe(t,e,n){if(Lt(e))return new Qe(new ze(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let r=i.value;const o=Mt(s,e);return r=r.updateChild(o,n),new Qe(t.writeTree_.set(s,r))}{const i=new ze(n),s=t.writeTree_.setTree(e,i);return new Qe(s)}}}function Ye(t,e,n){let i=t;return Z(n,((t,n)=>{i=Xe(i,Pt(e,t),n)})),i}function Je(t,e){if(Lt(e))return Qe.empty();{const n=t.writeTree_.setTree(e,new ze(null));return new Qe(n)}}function Ze(t,e){return null!=tn(t,e)}function tn(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(Mt(n.path,e)):null}function en(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(oe,((t,n)=>{e.push(new Ht(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Ht(t,n.value))})),e}function nn(t,e){if(Lt(e))return t;{const n=tn(t,e);return new Qe(null!=n?new ze(n):t.writeTree_.subtree(e))}}function sn(t){return t.writeTree_.isEmpty()}function rn(t,e){return on(St(),t.writeTree_,e)}function on(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,s)=>{".priority"===e?((0,S.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=on(Pt(t,e),s,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(Pt(t,".priority"),i)),n}}
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
 */function an(t,e){return wn(e,t)}function ln(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,S.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const e=t.allWrites[o];e.visible&&(o>=n&&hn(e,i.path)?s=!1:Ft(i.path,e.path)&&(r=!0)),o--}if(s){if(r)return function(t){t.visibleWrites=un(t.allWrites,cn,St()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=Je(t.visibleWrites,i.path);else{Z(i.children,(e=>{t.visibleWrites=Je(t.visibleWrites,Pt(i.path,e))}))}return!0}return!1}function hn(t,e){if(t.snap)return Ft(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Ft(Pt(t.path,n),e))return!0;return!1}function cn(t){return t.visible}function un(t,e,n){let i=Qe.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const t=r.path;let e;if(r.snap)Ft(n,t)?(e=Mt(n,t),i=Xe(i,e,r.snap)):Ft(t,n)&&(e=Mt(t,n),i=Xe(i,St(),r.snap.getChild(e)));else{if(!r.children)throw(0,S.assertionError)("WriteRecord should have .snap or .children");if(Ft(n,t))e=Mt(n,t),i=Ye(i,e,r.children);else if(Ft(t,n))if(e=Mt(t,n),Lt(e))i=Ye(i,St(),r.children);else{const t=(0,S.safeGet)(r.children,Nt(e));if(t){const n=t.getChild(At(e));i=Xe(i,St(),n)}}}}}return i}function dn(t,e,n,i,s){if(i||s){const r=nn(t.visibleWrites,e);if(!s&&sn(r))return n;if(s||null!=n||Ze(r,St())){const r=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(Ft(t.path,e)||Ft(e,t.path))};return rn(un(t.allWrites,r,e),n||pe.EMPTY_NODE)}return null}{const i=tn(t.visibleWrites,e);if(null!=i)return i;{const i=nn(t.visibleWrites,e);if(sn(i))return n;if(null!=n||Ze(i,St())){return rn(i,n||pe.EMPTY_NODE)}return null}}}function fn(t,e,n,i){return dn(t.writeTree,t.treePath,e,n,i)}function pn(t,e){return function(t,e,n){let i=pe.EMPTY_NODE;const s=tn(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=nn(t.visibleWrites,e);return n.forEachChild(oe,((t,e)=>{const n=rn(nn(s,new It(t)),e);i=i.updateImmediateChild(t,n)})),en(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return en(nn(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function gn(t,e,n,i){return function(t,e,n,i,s){(0,S.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Pt(e,n);if(Ze(t.visibleWrites,r))return null;{const e=nn(t.visibleWrites,r);return sn(e)?s.getChild(n):rn(e,s.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function mn(t,e){return function(t,e){return tn(t.visibleWrites,e)}(t.writeTree,Pt(t.treePath,e))}function yn(t,e,n,i,s,r){return function(t,e,n,i,s,r,o){let a;const l=nn(t.visibleWrites,e),h=tn(l,St());if(null!=h)a=h;else{if(null==n)return[];a=rn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&t.length<s;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,s,r)}function _n(t,e,n){return function(t,e,n,i){const s=Pt(e,n),r=tn(t.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return rn(nn(t.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function vn(t,e){return wn(Pt(t.treePath,e),t.writeTree)}function wn(t,e){return{treePath:t,writeTree:e}}
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
 */class Cn{trackChildChange(t){const e=t.type,n=t.childName;(0,S.assert)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,S.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===e&&"child_removed"===s)this.changeMap.set(n,Te(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===s)this.changeMap.set(n,Ee(n,i.oldSnap));else if("child_changed"===e&&"child_added"===s)this.changeMap.set(n,Ce(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==s)throw(0,S.assertionError)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,Te(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
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
 */const En=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class Tn{getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new qe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return _n(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:$e(this.viewCache_),s=yn(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}}
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
 */function bn(t,e,n,i,s){const r=new Cn;let o,a;if(n.type===Le.OVERWRITE){const l=n;l.source.fromUser?o=Nn(t,e,l.path,l.snap,i,s,r):((0,S.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Lt(l.path),o=Sn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===Le.MERGE){const l=n;l.source.fromUser?o=function(t,e,n,i,s,r,o){let a=e;return i.foreach(((i,l)=>{const h=Pt(n,i);kn(e,Nt(h))&&(a=Nn(t,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=Pt(n,i);kn(e,Nt(h))||(a=Nn(t,a,h,l,s,r,o))})),a}(t,e,l.path,l.children,i,s,r):((0,S.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Rn(t,e,l.path,l.children,i,s,a,r))}else if(n.type===Le.ACK_USER_WRITE){const a=n;o=a.revert?function(t,e,n,i,s,r){let o;if(null!=mn(i,n))return e;{const a=new Tn(i,e,s),l=e.eventCache.getNode();let h;if(Lt(n)||".priority"===Nt(n)){let n;if(e.serverCache.isFullyInitialized())n=fn(i,$e(e));else{const t=e.serverCache.getNode();(0,S.assert)(t instanceof pe,"serverChildren would be complete if leaf node"),n=pn(i,t)}h=t.filter.updateFullNode(l,n,r)}else{const s=Nt(n);let c=_n(i,s,e.serverCache);null==c&&e.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?t.filter.updateChild(l,s,c,At(n),a,r):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(l,s,pe.EMPTY_NODE,At(n),a,r):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=fn(i,$e(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||null!=mn(i,St()),He(e,h,o,t.filter.filtersNodes())}}
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
 */(t,e,a.path,i,s,r):function(t,e,n,i,s,r,o){if(null!=mn(s,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(Lt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Sn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Lt(n)){let i=new ze(null);return l.getNode().forEachChild(Kt,((t,e)=>{i=i.set(new It(t),e)})),Rn(t,e,n,i,s,r,a,o)}return e}{let h=new ze(null);return i.foreach(((t,e)=>{const i=Pt(n,t);l.isCompleteForPath(i)&&(h=h.set(t,l.getNode().getChild(i)))})),Rn(t,e,n,h,s,r,a,o)}}(t,e,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Le.LISTEN_COMPLETE)throw(0,S.assertionError)("Unknown operation type: "+n.type);o=function(t,e,n,i,s){const r=e.serverCache,o=We(e,r.getNode(),r.isFullyInitialized()||Lt(n),r.isFiltered());return In(t,o,n,i,En,s)}(t,e,n.path,i,r)}const l=r.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ge(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(we(Ge(e)))}}(e,o,l),{viewCache:o,changes:l}}function In(t,e,n,i,s,r){const o=e.eventCache;if(null!=mn(i,n))return e;{let a,l;if(Lt(n))if((0,S.assert)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=$e(e),s=pn(i,n instanceof pe?n:pe.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),s,r)}else{const n=fn(i,$e(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,r)}else{const h=Nt(n);if(".priority"===h){(0,S.assert)(1===kt(n),"Can't have a priority with additional path components");const s=o.getNode();l=e.serverCache.getNode();const r=gn(i,n,s,l);a=null!=r?t.filter.updatePriority(s,r):o.getNode()}else{const c=At(n);let u;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const t=gn(i,n,o.getNode(),l);u=null!=t?o.getNode().getImmediateChild(h).updateChild(c,t):o.getNode().getImmediateChild(h)}else u=_n(i,h,e.serverCache);a=null!=u?t.filter.updateChild(o.getNode(),h,u,c,s,r):o.getNode()}}return He(e,a,o.isFullyInitialized()||Lt(n),t.filter.filtersNodes())}}function Sn(t,e,n,i,s,r,o,a){const l=e.serverCache;let h;const c=o?t.filter:t.filter.getIndexedFilter();if(Lt(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),t,null)}else{const t=Nt(n);if(!l.isCompleteForPath(n)&&kt(n)>1)return e;const s=At(n),r=l.getNode().getImmediateChild(t).updateChild(s,i);h=".priority"===t?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),t,r,s,En,null)}const u=We(e,h,l.isFullyInitialized()||Lt(n),c.filtersNodes());return In(t,u,n,s,new Tn(s,u,r),a)}function Nn(t,e,n,i,s,r,o){const a=e.eventCache;let l,h;const c=new Tn(s,e,r);if(Lt(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=He(e,h,!0,t.filter.filtersNodes());else{const s=Nt(n);if(".priority"===s)h=t.filter.updatePriority(e.eventCache.getNode(),i),l=He(e,h,a.isFullyInitialized(),a.isFiltered());else{const r=At(n),h=a.getNode().getImmediateChild(s);let u;if(Lt(r))u=i;else{const t=c.getCompleteChild(s);u=null!=t?".priority"===Rt(r)&&t.getChild(Dt(r)).isEmpty()?t:t.updateChild(r,i):pe.EMPTY_NODE}if(h.equals(u))l=e;else{l=He(e,t.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function kn(t,e){return t.eventCache.isCompleteForChild(e)}function An(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function Rn(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,h=e;l=Lt(n)?i:new ze(null).setTree(n,i);const c=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=An(0,e.serverCache.getNode().getImmediateChild(n),i);h=Sn(t,h,new It(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!l){const l=An(0,e.serverCache.getNode().getImmediateChild(n),i);h=Sn(t,h,new It(n),l,s,r,o,a)}})),h}function xn(t,e){const n=$e(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Lt(e)&&!n.getImmediateChild(Nt(e)).isEmpty())?n.getChild(e):null}function Dn(t,e,n,i){e.type===Le.MERGE&&null!==e.source.queryId&&((0,S.assert)($e(t.viewCache_),"We should always have a full cache before handling merges"),(0,S.assert)(Ge(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=bn(t.processor_,s,e,n,i);var o,a;return o=t.processor_,a=r.viewCache,(0,S.assert)(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),(0,S.assert)(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),(0,S.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Pn(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Pn(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const s=[],r=[];return e.forEach((e=>{var n;
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
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),Be(t,s,"child_removed",e,i,n),Be(t,s,"child_added",e,i,n),Be(t,s,"child_moved",r,i,n),Be(t,s,"child_changed",e,i,n),Be(t,s,"value",e,i,n),s}(t.eventGenerator_,e,n,s)}
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
 */let Ln,Mn;function On(t,e,n,i){const s=e.source.queryId;if(null!==s){const r=t.views.get(s);return(0,S.assert)(null!=r,"SyncTree gave us an op for an invalid query."),Dn(r,e,n,i)}{let s=[];for(const r of t.views.values())s=s.concat(Dn(r,e,n,i));return s}}function Fn(t,e){let n=null;for(const i of t.views.values())n=n||xn(i,e);return n}class Vn{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ze(null),this.pendingWriteTree_={visibleWrites:Qe.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Un(t,e,n,i,s){return function(t,e,n,i,s){(0,S.assert)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=Xe(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,s),s?Hn(t,new Ve({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function qn(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(ln(t.pendingWriteTree_,e)){let e=new ze(null);return null!=i.snap?e=e.set(St(),!0):Z(i.children,(t=>{e=e.set(new It(t),!0)})),Hn(t,new Fe(i.path,e,n))}return[]}function Bn(t,e,n){return Hn(t,new Ve({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function jn(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=Fn(n,Mt(t,e));if(i)return i}));return dn(i,e,s,n,!0)}function Hn(t,e){return Wn(e,t.syncPointTree_,null,an(t.pendingWriteTree_,St()))}function Wn(t,e,n,i){if(Lt(t.path))return Gn(t,e,n,i);{const s=e.get(St());null==n&&null!=s&&(n=Fn(s,St()));let r=[];const o=Nt(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=vn(i,o);r=r.concat(Wn(a,l,t,e))}return s&&(r=r.concat(On(s,t,i,n))),r}}function Gn(t,e,n,i){const s=e.get(St());null==n&&null!=s&&(n=Fn(s,St()));let r=[];return e.children.inorderTraversal(((e,s)=>{const o=n?n.getImmediateChild(e):null,a=vn(i,e),l=t.operationForChild(e);l&&(r=r.concat(Gn(l,s,o,a)))})),s&&(r=r.concat(On(s,t,i,n))),r}function $n(t,e){return t.tagToQueryMap.get(e)}function Kn(t){const e=t.indexOf("$");return(0,S.assert)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new It(t.substr(0,e))}}function zn(t,e,n){const i=t.syncPointTree_.get(e);(0,S.assert)(i,"Missing sync point for query tag that we're tracking");return On(i,n,an(t.pendingWriteTree_,e),null)}
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
class Qn{getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new Qn(e)}node(){return this.node_}constructor(t){this.node_=t}}class Xn{getImmediateChild(t){const e=Pt(this.path_,t);return new Xn(this.syncTree_,e)}node(){return jn(this.syncTree_,this.path_)}constructor(t,e){this.syncTree_=t,this.path_=e}}const Yn=function(t,e,n){return t&&"object"==typeof t?((0,S.assert)(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Jn(t[".sv"],e,n):"object"==typeof t[".sv"]?Zn(t[".sv"],e):void(0,S.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Jn=function(t,e,n){if("timestamp"===t)return n.timestamp;(0,S.assert)(!1,"Unexpected server value: "+t)},Zn=function(t,e,n){t.hasOwnProperty("increment")||(0,S.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&(0,S.assert)(!1,"Unexpected increment value: "+i);const s=e.node();if((0,S.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},ti=function(t,e,n,i){return ni(e,new Xn(n,t),i)},ei=function(t,e,n){return ni(t,new Qn(e),n)};function ni(t,e,n){const i=t.getPriority().val(),s=Yn(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=Yn(i.getValue(),e,n);return r!==i.getValue()||s!==i.getPriority().val()?new re(r,me(s)):t}{const i=t;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new re(s))),i.forEachChild(oe,((t,i)=>{const s=ni(i,e.getImmediateChild(t),n);s!==i&&(r=r.updateImmediateChild(t,s))})),r}}
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
 */class ii{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function si(t,e){let n=e instanceof It?e:new It(e),i=t,s=Nt(n);for(;null!==s;){const t=(0,S.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new ii(s,i,t),n=At(n),s=Nt(n)}return i}function ri(t){return t.node.value}function oi(t,e){t.node.value=e,ui(t)}function ai(t){return t.node.childCount>0}function li(t,e){Z(t.node.children,((n,i)=>{e(new ii(n,t,i))}))}function hi(t,e,n,i){n&&!i&&e(t),li(t,(t=>{hi(t,e,!0,i)})),n&&i&&e(t)}function ci(t){return new It(null===t.parent?t.name:ci(t.parent)+"/"+t.name)}function ui(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===ri(t)&&!ai(t)}(n),s=(0,S.contains)(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,ui(t)):i||s||(t.node.children[e]=n.node,t.node.childCount++,ui(t))}
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
 */(t.parent,t.name,t)}const di=/[\[\].#$\/\u0000-\u001F\u007F]/,fi=/[\[\].#$\u0000-\u001F\u007F]/,pi=function(t){return"string"==typeof t&&0!==t.length&&!di.test(t)},gi=function(t){return"string"==typeof t&&0!==t.length&&!fi.test(t)},mi=function(t,e,n){const i=n instanceof It?new Vt(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+qt(i));if("function"==typeof e)throw new Error(t+"contains a function "+qt(i)+" with contents = "+e.toString());if(K(e))throw new Error(t+"contains "+e.toString()+" "+qt(i));if("string"==typeof e&&e.length>10485760/3&&(0,S.stringLength)(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+qt(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,s=!1;if(Z(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!pi(e)))throw new Error(t+" contains an invalid key ("+e+") "+qt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=e,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=(0,S.stringLength)(a),Ut(o),mi(t,r,i),function(t){const e=t.parts_.pop();t.byteLength_-=(0,S.stringLength)(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&s)throw new Error(t+' contains ".value" child '+qt(i)+" in addition to actual children.")}},yi=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!pi(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),gi(t)}(n))throw new Error((0,S.errorPrefix)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class _i{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vi(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();null===n||Ot(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function wi(t,e,n){vi(t,n),Ci(t,(t=>Ft(t,e)||Ft(e,t)))}function Ci(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){e(s.path)?(Ei(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Ei(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();U&&j("event: "+n.toString()),it(i)}}}
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
 */class Ti{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new _i,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ae(),this.transactionQueueTree_=new ii,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function bi(t,e,n){if(t.stats_=pt(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new Ne(t.repoInfo_,((e,n,i,s)=>{Ni(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>ki(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,S.stringify)(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new jt(t.repoInfo_,e,((e,n,i,s)=>{Ni(t,e,n,i,s)}),(e=>{ki(t,e)}),(e=>{!function(t,e){Z(e,((e,n)=>{Ai(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return ft[n]||(ft[n]=e()),ft[n]}(t.repoInfo_,(()=>new Pe(t.stats_,t.server_))),t.infoData_=new ke,t.infoSyncTree_=new Vn({startListening:(e,n,i,s)=>{let r=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(r=Bn(t.infoSyncTree_,e._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Ai(t,"connected",!1),t.serverSyncTree_=new Vn({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const r=s(n,i);wi(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function Ii(t){const e=t.infoData_.getNode(new It(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function Si(t){return(e=(e={timestamp:Ii(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function Ni(t,e,n,i,s){t.dataUpdateCount++;const r=new It(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const e=(0,S.map)(n,(t=>me(t)));o=function(t,e,n,i){const s=$n(t,i);if(s){const i=Kn(s),r=i.path,o=i.queryId,a=Mt(r,e),l=ze.fromObject(n);return zn(t,r,new Ue(Oe(o),a,l))}return[]}(t.serverSyncTree_,r,e,s)}else{const e=me(n);o=function(t,e,n,i){const s=$n(t,i);if(null!=s){const i=Kn(s),r=i.path,o=i.queryId,a=Mt(r,e);return zn(t,r,new Ve(Oe(o),a,n))}return[]}(t.serverSyncTree_,r,e,s)}else if(i){const e=(0,S.map)(n,(t=>me(t)));o=function(t,e,n){const i=ze.fromObject(n);return Hn(t,new Ue({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,r,e)}else{const e=me(n);o=Bn(t.serverSyncTree_,r,e)}let a=r;o.length>0&&(a=Mi(t,r)),wi(t.eventQueue_,a,o)}function ki(t,e){Ai(t,"connected",e),!1===e&&function(t){Di(t,"onDisconnectEvents");const e=Si(t),n=Ae();xe(t.onDisconnect_,St(),((i,s)=>{const r=ti(i,s,t.serverSyncTree_,e);Re(n,i,r)}));let i=[];xe(n,St(),((e,n)=>{i=i.concat(Bn(t.serverSyncTree_,e,n));const s=qi(t,e);Mi(t,s)})),t.onDisconnect_=Ae(),wi(t.eventQueue_,St(),i)}(t)}function Ai(t,e,n){const i=new It("/.info/"+e),s=me(n);t.infoData_.updateSnapshot(i,s);const r=Bn(t.infoSyncTree_,i,s);wi(t.eventQueue_,i,r)}function Ri(t){return t.nextWriteId_++}function xi(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function Di(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),j(n,...e)}function Pi(t,e,n){return jn(t.serverSyncTree_,e,n)||pe.EMPTY_NODE}function Li(t,e=t.transactionQueueTree_){if(e||Ui(t,e),ri(e)){const n=Fi(t,e);(0,S.assert)(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),s=Pi(t,e,i);let r=s;const o=s.hash();for(let t=0;t<n.length;t++){const i=n[t];(0,S.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Mt(e,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Di(t,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(qn(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Ui(t,si(t.transactionQueueTree_,e)),Li(t,t.transactionQueueTree_),wi(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)it(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{$("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}Mi(t,e)}}),o)}(t,ci(e),n)}else ai(e)&&li(e,(e=>{Li(t,e)}))}function Mi(t,e){const n=Oi(t,e),i=ci(n);return function(t,e,n){if(0===e.length)return;const i=[];let s=[];const r=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],h=Mt(n,l.path);let c,u=!1;if((0,S.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,c=l.abortReason,s=s.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,c="maxretry",s=s.concat(qn(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Pi(t,l.path,r);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){mi("transaction failed: Data returned ",i,l.path);let e=me(i);"object"==typeof i&&null!=i&&(0,S.contains)(i,".priority")||(e=e.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Si(t),h=ei(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=h,l.currentWriteId=Ri(t),r.splice(r.indexOf(o),1),s=s.concat(Un(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),s=s.concat(qn(t.serverSyncTree_,o,!0))}else u=!0,c="nodata",s=s.concat(qn(t.serverSyncTree_,l.currentWriteId,!0))}wi(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,o=e[a].unwatcher,setTimeout(o,Math.floor(0)),e[a].onComplete&&("nodata"===c?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(c),!1,null)))))}var o;Ui(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)it(i[t]);Li(t,t.transactionQueueTree_)}(t,Fi(t,n),i),i}function Oi(t,e){let n,i=t.transactionQueueTree_;for(n=Nt(e);null!==n&&void 0===ri(i);)i=si(i,n),n=Nt(e=At(e));return i}function Fi(t,e){const n=[];return Vi(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function Vi(t,e,n){const i=ri(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);li(e,(e=>{Vi(t,e,n)}))}function Ui(t,e){const n=ri(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,oi(e,n.length>0?n:void 0)}li(e,(e=>{Ui(t,e)}))}function qi(t,e){const n=ci(Oi(t,e)),i=si(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{Bi(t,e)})),Bi(t,i),hi(i,(e=>{Bi(t,e)})),n}function Bi(t,e){const n=ri(e);if(n){const i=[];let s=[],r=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,S.assert)(r===e-1,"All SENT items should be at beginning of queue."),r=e,n[e].status=3,n[e].abortReason="set"):((0,S.assert)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),s=s.concat(qn(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===r?oi(e,void 0):n.length=r+1,wi(t.eventQueue_,ci(e),s);for(let t=0;t<i.length;t++)it(i[t])}}
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
 */const ji=function(t,e){const n=Hi(t),i=n.namespace;"firebase.com"===n.domain&&G(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||G("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&$("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ht(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new It(n.pathString)}},Hi=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof t){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let c=t.indexOf("/");-1===c&&(c=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(c,u)),c<u&&(s=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(c,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):$(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));h=e.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(h+1),10)):h=e.length;const f=e.slice(0,h);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
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
class Wi{get key(){return Lt(this._path)?null:Rt(this._path)}get ref(){return new Gi(this._repo,this._path)}get _queryIdentifier(){const t=Se(this._queryParams),e=Y(t);return"{}"===e?"default":e}get _queryObject(){return Se(this._queryParams)}isEqual(t){if(!((t=(0,S.getModularInstance)(t))instanceof Wi))return!1;const e=this._repo===t._repo,n=Ot(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}}class Gi extends Wi{get parent(){const t=Dt(this._path);return null===t?null:new Gi(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}constructor(t,e){super(t,e,new be,!1)}}!function(t){(0,S.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=t}(Gi),function(t){(0,S.assert)(!Mn,"__referenceConstructor has already been defined"),Mn=t}(Gi);
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
const $i={};let Ki=!1;function zi(t,e,n,i,s){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||G("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),j("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ji(r,s),h=l.repoInfo;void 0!==k&&k.env&&(a=k.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,l=ji(r,s),h=l.repoInfo):o=!l.repoInfo.secure;const c=s&&o?new at(at.OWNER):new ot(t.name,t.options,e);yi("Invalid Firebase Database URL",l),Lt(l.path)||G("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let s=$i[e.name];s||(s={},$i[e.name]=s);let r=s[t.toURLString()];r&&G("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Ti(t,Ki,n,i),s[t.toURLString()]=r,r}(h,t,c,new rt(t.name,n));return new Qi(u,t)}class Qi{get _repo(){return this._instanceStarted||(bi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Gi(this._repo,St())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=$i[e];n&&n[t.key]===t||G(`Database ${e}(${t.repoInfo_}) has already been deleted.`),xi(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&G("Cannot call "+t+" on a deleted database.")}constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}}jt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},jt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};
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
var Xi,Yi;
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
 */Yi=b.SDK_VERSION,A=Yi,(0,b._registerComponent)(new(0,I.Component)("database",((t,{instanceIdentifier:e})=>zi(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),(0,b.registerVersion)("@firebase/database","0.13.1",Xi),(0,b.registerVersion)("@firebase/database","0.13.1","esm2017");const Ji={authPage:document.querySelector(".form-auth"),authCloseBtn:document.querySelector(".auth-page__btn-close")};Ji.authCloseBtn.addEventListener("click",(function(){Ji.authPage.classList.add("is-hidden")}));var Zi=s("iB56l");y=s("eS71k");const ts=document.querySelector(".mySwiper");(0,y.default)(ts);new(0,Zi.default)(".mySwiper",{modules:[Zi.Navigation,Zi.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});const es=document.querySelector(".swiper-wrapper");function ns(e){const n=e.map((({poster_path:e,id:n})=>`<div class="swiper-slide">\n\t\t\t\t<img src="${e?`https://image.tmdb.org/t/p/w500${e}`:t(r)}" alt="poster" class="slide-poster" data-id="${n}"/>\n\t\t\t</div>`)).join("");es.insertAdjacentHTML("beforeend",n)}var is,ss,rs={};function os(t){return(os="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}is="undefined"!=typeof self?self:void 0,ss=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,i=t.cornerOffset,s=void 0===i?20:i,r=t.diameter,o=void 0===r?56:r,a=t.ease,l=void 0===a?q:a,h=t.id,c=void 0===h?"back-to-top":h,u=t.innerHTML,d=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,f=t.onClickScrollTo,p=void 0===f?0:f,g=t.scrollContainer,m=void 0===g?document.body:g,y=t.scrollDuration,_=void 0===y?100:y,v=t.showWhenScrollTopIs,w=void 0===v?1:v,C=t.size,E=void 0===C?o:C,T=t.textColor,b=void 0===T?"#fff":T,I=t.zIndex,S=void 0===I?1:I,N=m===document.body,k=N&&document.documentElement;O();var A=M(),R=!0,x=N?window:m;function D(){V()>=w?P():L()}function P(){R&&(A.className="",R=!1)}function L(){R||(A.className="hidden",R=!0)}function M(){var t=document.createElement("div");return t.id=c,t.className="hidden",t.innerHTML=d,t.addEventListener("click",(function(t){t.preventDefault(),F()})),document.body.appendChild(t),t}function O(){var t=Math.round(.43*E),e=Math.round(.29*E),i="#"+c+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+b+";cursor:pointer;display:block;height:"+E+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+E+"px;z-index:"+S+"}#"+c+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+c+".hidden{bottom:-"+E+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(i)),document.head.insertAdjacentElement("afterbegin",r)}function F(){var t="function"==typeof p?p():p,e=window,n=e.performance,i=e.requestAnimationFrame;if(_<=0||void 0===n||void 0===i)return U(t);var s=n.now(),r=V(),o=r-t;i((function t(e){var n=Math.min((e-s)/_,1);U(r-Math.round(l(n)*o)),n<1&&i(t)}))}function V(){return m.scrollTop||k&&document.documentElement.scrollTop||0}function U(t){m.scrollTop=t,k&&(document.documentElement.scrollTop=t)}function q(t){return.5*(1-Math.cos(Math.PI*t))}x.addEventListener("scroll",D),D()}},"function"==typeof define&&define.amd?define(["exports"],ss):"object"===os(rs)&&"string"!=typeof rs.nodeName?ss(rs):ss(is.commonJsStrict={}),(0,rs.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"});var as,ls=s("b5a3y"),hs=s("amyG6"),cs=(b=s("ix4Jr"),I=s("4a6xH"),N=s("7vF8m"),S=s("ffjl9"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),us={},ds=ds||{},fs=cs||self;function ps(){}function gs(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function ms(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var ys="closure_uid_"+(1e9*Math.random()>>>0),_s=0;function vs(t,e,n){return t.call.apply(t.bind,arguments)}function ws(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function Cs(t,e,n){return(Cs=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?vs:ws).apply(null,arguments)}function Es(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function Ts(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function bs(){this.s=this.s,this.o=this.o}var Is={};bs.prototype.s=!1,bs.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,ys)&&t[ys]||(t[ys]=++_s)}(this);delete Is[t]}},bs.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ss=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},Ns=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function ks(t){return Array.prototype.concat.apply([],arguments)}function As(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Rs(t){return/^[\s\xa0]*$/.test(t)}var xs,Ds=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ps(t,e){return-1!=t.indexOf(e)}function Ls(t,e){return t<e?-1:t>e?1:0}t:{var Ms=fs.navigator;if(Ms){var Os=Ms.userAgent;if(Os){xs=Os;break t}}xs=""}function Fs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function Vs(t){const e={};for(const n in t)e[n]=t[n];return e}var Us="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qs(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Us.length;e++)n=Us[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Bs(t){return Bs[" "](t),t}Bs[" "]=ps;var js,Hs,Ws=Ps(xs,"Opera"),Gs=Ps(xs,"Trident")||Ps(xs,"MSIE"),$s=Ps(xs,"Edge"),Ks=$s||Gs,zs=Ps(xs,"Gecko")&&!(Ps(xs.toLowerCase(),"webkit")&&!Ps(xs,"Edge"))&&!(Ps(xs,"Trident")||Ps(xs,"MSIE"))&&!Ps(xs,"Edge"),Qs=Ps(xs.toLowerCase(),"webkit")&&!Ps(xs,"Edge");function Xs(){var t=fs.document;return t?t.documentMode:void 0}t:{var Ys="",Js=(Hs=xs,zs?/rv:([^\);]+)(\)|;)/.exec(Hs):$s?/Edge\/([\d\.]+)/.exec(Hs):Gs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Hs):Qs?/WebKit\/(\S+)/.exec(Hs):Ws?/(?:Version)[ \/]?(\S+)/.exec(Hs):void 0);if(Js&&(Ys=Js?Js[1]:""),Gs){var Zs=Xs();if(null!=Zs&&Zs>parseFloat(Ys)){js=String(Zs);break t}}js=Ys}var tr,er={};function nr(){return function(t){var e=er;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Ds(String(js)).split("."),n=Ds("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ls(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ls(0==s[2].length,0==r[2].length)||Ls(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(fs.document&&Gs){var ir=Xs();tr=ir||(parseInt(js,10)||void 0)}else tr=void 0;var sr=tr,rr=function(){if(!fs.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{fs.addEventListener("test",ps,e),fs.removeEventListener("test",ps,e)}catch(t){}return t}();function or(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ar(t,e){if(or.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(zs){t:{try{Bs(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:lr[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ar.Z.h.call(this)}}or.prototype.h=function(){this.defaultPrevented=!0},Ts(ar,or);var lr={2:"touch",3:"pen",4:"mouse"};ar.prototype.h=function(){ar.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var hr="closure_listenable_"+(1e6*Math.random()|0),cr=0;function ur(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++cr,this.ca=this.fa=!1}function dr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function fr(t){this.src=t,this.g={},this.h=0}function pr(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=Ss(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(dr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function gr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}fr.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=gr(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ur(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var mr="closure_lm_"+(1e6*Math.random()|0),yr={};function _r(t,e,n,i,s){if(i&&i.once)return wr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)_r(t,e[r],n,i,s);return null}return n=Nr(n),t&&t[hr]?t.N(e,n,ms(i)?!!i.capture:!!i,s):vr(t,e,n,!1,i,s)}function vr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=ms(s)?!!s.capture:!!s,a=Ir(t);if(a||(t[mr]=a=new fr(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=br;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)rr||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(Tr(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function wr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)wr(t,e[r],n,i,s);return null}return n=Nr(n),t&&t[hr]?t.O(e,n,ms(i)?!!i.capture:!!i,s):vr(t,e,n,!0,i,s)}function Cr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)Cr(t,e[r],n,i,s);else i=ms(i)?!!i.capture:!!i,n=Nr(n),t&&t[hr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=gr(r=t.g[e],n,i,s))&&(dr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=Ir(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gr(e,n,i,s)),(n=-1<t?e[t]:null)&&Er(n))}function Er(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[hr])pr(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(Tr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Ir(e))?(pr(n,t),0==n.h&&(n.src=null,e[mr]=null)):dr(t)}}}function Tr(t){return t in yr?yr[t]:yr[t]="on"+t}function br(t,e){if(t.ca)t=!0;else{e=new ar(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&Er(t),t=n.call(i,e)}return t}function Ir(t){return(t=t[mr])instanceof fr?t:null}var Sr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nr(t){return"function"==typeof t?t:(t[Sr]||(t[Sr]=function(e){return t.handleEvent(e)}),t[Sr])}function kr(){bs.call(this),this.i=new fr(this),this.P=this,this.I=null}function Ar(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new or(e,t);else if(e instanceof or)e.target=e.target||t;else{var s=e;qs(e=new or(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Rr(o,i,!0,e)&&s}if(s=Rr(o=e.g=t,i,!0,e)&&s,s=Rr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Rr(o=e.g=n[r],i,!1,e)&&s}function Rr(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&pr(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}Ts(kr,bs),kr.prototype[hr]=!0,kr.prototype.removeEventListener=function(t,e,n,i){Cr(this,t,e,n,i)},kr.prototype.M=function(){if(kr.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)dr(n[i]);delete e.g[t],e.h--}}this.I=null},kr.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},kr.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var xr=fs.JSON.stringify;function Dr(){var t=Ur;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Pr,Lr=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Mr),(t=>t.reset()));class Mr{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Or(t){fs.setTimeout((()=>{throw t}),0)}function Fr(t,e){Pr||function(){var t=fs.Promise.resolve(void 0);Pr=function(){t.then(qr)}}(),Vr||(Pr(),Vr=!0),Ur.add(t,e)}var Vr=!1,Ur=new class{add(t,e){const n=Lr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function qr(){for(var t;t=Dr();){try{t.h.call(t.g)}catch(t){Or(t)}var e=Lr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Vr=!1}function Br(t,e){kr.call(this),this.h=t||1,this.g=e||fs,this.j=Cs(this.kb,this),this.l=Date.now()}function jr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Hr(t,e,n){if("function"==typeof t)n&&(t=Cs(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=Cs(t.handleEvent,t)}return 2147483647<Number(e)?-1:fs.setTimeout(t,e||0)}function Wr(t){t.g=Hr((()=>{t.g=null,t.i&&(t.i=!1,Wr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}Ts(Br,kr),(as=Br.prototype).da=!1,as.S=null,as.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ar(this,"tick"),this.da&&(jr(this),this.start()))}},as.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},as.M=function(){Br.Z.M.call(this),jr(this),delete this.g};class Gr extends bs{l(t){this.h=arguments,this.g?this.i=!0:Wr(this)}M(){super.M(),this.g&&(fs.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function $r(t){bs.call(this),this.h=t,this.g={}}Ts($r,bs);var Kr=[];function zr(t,e,n,i){Array.isArray(n)||(n&&(Kr[0]=n.toString()),n=Kr);for(var s=0;s<n.length;s++){var r=_r(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Qr(t){Fs(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Er(t)}),t),t.g={}}function Xr(){this.g=!0}function Yr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return xr(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}$r.prototype.M=function(){$r.Z.M.call(this),Qr(this)},$r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Xr.prototype.Aa=function(){this.g=!1},Xr.prototype.info=function(){};var Jr={},Zr=null;function to(){return Zr=Zr||new kr}function eo(t){or.call(this,Jr.Ma,t)}function no(t){const e=to();Ar(e,new eo(e,t))}function io(t,e){or.call(this,Jr.STAT_EVENT,t),this.stat=e}function so(t){const e=to();Ar(e,new io(e,t))}function ro(t,e){or.call(this,Jr.Na,t),this.size=e}function oo(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return fs.setTimeout((function(){t()}),e)}Jr.Ma="serverreachability",Ts(eo,or),Jr.STAT_EVENT="statevent",Ts(io,or),Jr.Na="timingevent",Ts(ro,or);var ao={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},lo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ho(){}function co(t){return t.h||(t.h=t.i())}function uo(){}ho.prototype.h=null;var fo,po={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function go(){or.call(this,"d")}function mo(){or.call(this,"c")}function yo(){}function _o(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new $r(this),this.P=wo,t=Ks?125:void 0,this.W=new Br(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new vo}function vo(){this.i=null,this.g="",this.h=!1}Ts(go,or),Ts(mo,or),Ts(yo,ho),yo.prototype.g=function(){return new XMLHttpRequest},yo.prototype.i=function(){return{}},fo=new yo;var wo=45e3,Co={},Eo={};function To(t,e,n){t.K=1,t.v=$o(qo(e)),t.s=n,t.U=!0,bo(t,null)}function bo(t,e){t.F=Date.now(),ko(t),t.A=qo(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),ra(n.h,"t",i),t.C=0,n=t.l.H,t.h=new vo,t.g=rl(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gr(Cs(t.Ia,t,t.g),t.O)),zr(t.V,t.g,"readystatechange",t.gb),e=t.H?Vs(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),no(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function Io(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function So(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=No(t,n),i==Eo){4==e&&(t.o=4,so(14),s=!1),Yr(t.j,t.m,null,"[Incomplete Response]");break}if(i==Co){t.o=4,so(15),Yr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Yr(t.j,t.m,i,null),Po(t,i)}Io(t)&&i!=Eo&&i!=Co&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,so(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ya(e),e.L=!0,so(11))):(Yr(t.j,t.m,n,"[Invalid Chunked Response]"),Do(t),xo(t))}function No(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?Eo:(n=Number(e.substring(n,i)),isNaN(n)?Co:(i+=1)+n>e.length?Eo:(e=e.substr(i,n),t.C=i+n,e))}function ko(t){t.Y=Date.now()+t.P,Ao(t,t.P)}function Ao(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oo(Cs(t.eb,t),e)}function Ro(t){t.B&&(fs.clearTimeout(t.B),t.B=null)}function xo(t){0==t.l.G||t.I||tl(t.l,t)}function Do(t){Ro(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,jr(t.W),Qr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Po(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||ua(n.i,t)))if(n.I=t.N,!t.J&&ua(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Za(n),ja(n)}Xa(n),so(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=oo(Cs(n.ab,n),6e3));if(1>=ca(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else nl(n,11)}else if((t.J||n.g==t)&&Za(n),!Rs(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Ps(t,"spdy")||Ps(t,"quic")||Ps(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(da(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Go(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=sl(i,i.H?i.la:null,i.W),o.J){fa(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(Ro(a),ko(a)),i.g=o}else Qa(i);0<n.l.length&&Ga(n)}else"stop"!=h[0]&&"close"!=h[0]||nl(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?nl(n,7):Ba(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}no(4)}catch(t){}}function Lo(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(gs(t)||"string"==typeof t)Ns(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(gs(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(gs(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function Mo(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof Mo)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Oo(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Fo(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Fo(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function Fo(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(as=_o.prototype).setTimeout=function(t){this.P=t},as.gb=function(t){t=t.target;const e=this.L;e&&3==Oa(t)?e.l():this.Ia(t)},as.Ia=function(t){try{if(t==this.g)t:{const c=Oa(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||Ks||this.g&&(this.h.h||this.g.ga()||Fa(this.g)))){this.I||4!=c||7==e||no(8==e||0>=u?3:2),Ro(this);var n=this.g.ba();this.N=n;e:if(Io(this)){var i=Fa(this.g);t="";var s=i.length,r=4==Oa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Do(this),xo(this);var o="";break e}this.h.i=new fs.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rs(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,so(12),Do(this),xo(this);break t}Yr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Po(this,n)}this.U?(So(this,c,o),Ks&&this.i&&3==c&&(zr(this.V,this.W,"tick",this.fb),this.W.start())):(Yr(this.j,this.m,o,null),Po(this,o)),4==c&&Do(this),this.i&&!this.I&&(4==c?tl(this.l,this):(this.i=!1,ko(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,so(12)):(this.o=0,so(13)),Do(this),xo(this)}}}catch(t){}},as.fb=function(){if(this.g){var t=Oa(this.g),e=this.g.ga();this.C<e.length&&(Ro(this),So(this,t,e),this.i&&4!=t&&ko(this))}},as.cancel=function(){this.I=!0,Do(this)},as.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(no(3),so(17)),Do(this),this.o=2,xo(this)):Ao(this,this.Y-t)},(as=Mo.prototype).R=function(){Oo(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},as.T=function(){return Oo(this),this.g.concat()},as.get=function(t,e){return Fo(this.h,t)?this.h[t]:e},as.set=function(t,e){Fo(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},as.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var Vo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Uo(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Uo){this.g=void 0!==e?e:t.g,Bo(this,t.j),this.s=t.s,jo(this,t.i),Ho(this,t.m),this.l=t.l,e=t.h;var n=new ea;n.i=e.i,e.g&&(n.g=new Mo(e.g),n.h=e.h),Wo(this,n),this.o=t.o}else t&&(n=String(t).match(Vo))?(this.g=!!e,Bo(this,n[1]||"",!0),this.s=Ko(n[2]||""),jo(this,n[3]||"",!0),Ho(this,n[4]),this.l=Ko(n[5]||"",!0),Wo(this,n[6]||"",!0),this.o=Ko(n[7]||"")):(this.g=!!e,this.h=new ea(null,this.g))}function qo(t){return new Uo(t)}function Bo(t,e,n){t.j=n?Ko(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function jo(t,e,n){t.i=n?Ko(e,!0):e}function Ho(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wo(t,e,n){e instanceof ea?(t.h=e,function(t,e){e&&!t.j&&(na(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ia(this,e),ra(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=zo(e,Zo)),t.h=new ea(e,t.g))}function Go(t,e,n){t.h.set(e,n)}function $o(t){return Go(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ko(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function zo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Qo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Qo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Uo.prototype.toString=function(){var t=[],e=this.j;e&&t.push(zo(e,Xo,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(zo(e,Xo,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(zo(n,"/"==n.charAt(0)?Jo:Yo,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",zo(n,ta)),t.join("")};var Xo=/[#\/\?@]/g,Yo=/[#\?:]/g,Jo=/[#\?]/g,Zo=/[#\?@]/g,ta=/#/g;function ea(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function na(t){t.g||(t.g=new Mo,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ia(t,e){na(t),e=oa(t,e),Fo(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Fo((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Oo(t)))}function sa(t,e){return na(t),e=oa(t,e),Fo(t.g.h,e)}function ra(t,e,n){ia(t,e),0<n.length&&(t.i=null,t.g.set(oa(t,e),As(n)),t.h+=n.length)}function oa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(as=ea.prototype).add=function(t,e){na(this),this.i=null,t=oa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},as.forEach=function(t,e){na(this),this.g.forEach((function(n,i){Ns(n,(function(n){t.call(e,n,i,this)}),this)}),this)},as.T=function(){na(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},as.R=function(t){na(this);var e=[];if("string"==typeof t)sa(this,t)&&(e=ks(e,this.g.get(oa(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=ks(e,t[n])}return e},as.set=function(t,e){return na(this),this.i=null,sa(this,t=oa(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},as.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},as.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function aa(t){this.l=t||la,fs.PerformanceNavigationTiming?t=0<(t=fs.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(fs.g&&fs.g.Ea&&fs.g.Ea()&&fs.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var la=10;function ha(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ca(t){return t.h?1:t.g?t.g.size:0}function ua(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function da(t,e){t.g?t.g.add(e):t.h=e}function fa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function pa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return As(t.i)}function ga(){}function ma(){this.g=new ga}function ya(t,e,n){const i=n||"";try{Lo(t,(function(t,n){let s=t;ms(t)&&(s=xr(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function _a(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function va(t){this.l=t.$b||null,this.j=t.ib||!1}function wa(t,e){kr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Ca,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}aa.prototype.cancel=function(){if(this.i=pa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ga.prototype.stringify=function(t){return fs.JSON.stringify(t,void 0)},ga.prototype.parse=function(t){return fs.JSON.parse(t,void 0)},Ts(va,ho),va.prototype.g=function(){return new wa(this.l,this.j)},va.prototype.i=function(t){return function(){return t}}({}),Ts(wa,kr);var Ca=0;function Ea(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ta(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ba(t)}function ba(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(as=wa.prototype).open=function(t,e){if(this.readyState!=Ca)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ba(this)},as.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||fs).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},as.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ta(this)),this.readyState=Ca},as.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ba(this)),this.g&&(this.readyState=3,ba(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==fs.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ea(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},as.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ta(this):ba(this),3==this.readyState&&Ea(this)}},as.Ua=function(t){this.g&&(this.response=this.responseText=t,Ta(this))},as.Ta=function(t){this.g&&(this.response=t,Ta(this))},as.ha=function(){this.g&&Ta(this)},as.setRequestHeader=function(t,e){this.v.append(t,e)},as.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},as.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(wa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Ia=fs.JSON.parse;function Sa(t){kr.call(this),this.headers=new Mo,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Na,this.K=this.L=!1}Ts(Sa,kr);var Na="",ka=/^https?$/i,Aa=["POST","PUT"];function Ra(t){return"content-type"==t.toLowerCase()}function xa(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Da(t),La(t)}function Da(t){t.D||(t.D=!0,Ar(t,"complete"),Ar(t,"error"))}function Pa(t){if(t.h&&void 0!==ds&&(!t.C[1]||4!=Oa(t)||2!=t.ba()))if(t.v&&4==Oa(t))Hr(t.Fa,0,t);else if(Ar(t,"readystatechange"),4==Oa(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(Vo)[1]||null;if(!s&&fs.self&&fs.self.location){var r=fs.self.location.protocol;s=r.substr(0,r.length-1)}i=!ka.test(s?s.toLowerCase():"")}n=i}if(n)Ar(t,"complete"),Ar(t,"success");else{t.m=6;try{var o=2<Oa(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Da(t)}}finally{La(t)}}}function La(t,e){if(t.g){Ma(t);const n=t.g,i=t.C[0]?ps:null;t.g=null,t.C=null,e||Ar(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function Ma(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(fs.clearTimeout(t.A),t.A=null)}function Oa(t){return t.g?t.g.readyState:0}function Fa(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Na:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Va(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Fs(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Go(t,e,n))}function Ua(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qa(t){this.za=0,this.l=[],this.h=new Xr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Ua("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Ua("baseRetryDelayMs",5e3,t),this.$a=Ua("retryDelaySeedMs",1e4,t),this.Ya=Ua("forwardChannelMaxRetries",2,t),this.ra=Ua("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new aa(t&&t.concurrentRequestLimit),this.Ca=new ma,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Ba(t){if(Ha(t),3==t.G){var e=t.V++,n=qo(t.F);Go(n,"SID",t.J),Go(n,"RID",e),Go(n,"TYPE","terminate"),Ka(t,n),(e=new _o(t,t.h,e,void 0)).K=2,e.v=$o(qo(n)),n=!1,fs.navigator&&fs.navigator.sendBeacon&&(n=fs.navigator.sendBeacon(e.v.toString(),"")),!n&&fs.Image&&((new Image).src=e.v,n=!0),n||(e.g=rl(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ko(e)}il(t)}function ja(t){t.g&&(Ya(t),t.g.cancel(),t.g=null)}function Ha(t){ja(t),t.u&&(fs.clearTimeout(t.u),t.u=null),Za(t),t.i.cancel(),t.m&&("number"==typeof t.m&&fs.clearTimeout(t.m),t.m=null)}function Wa(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Ga(t)}function Ga(t){ha(t.i)||t.m||(t.m=!0,Fr(t.Ha,t),t.C=0)}function $a(t,e){var n;n=e?e.m:t.V++;const i=qo(t.F);Go(i,"SID",t.J),Go(i,"RID",n),Go(i,"AID",t.U),Ka(t,i),t.o&&t.s&&Va(i,t.o,t.s),n=new _o(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=za(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),da(t.i,n),To(n,i,e)}function Ka(t,e){t.j&&Lo({},(function(t,n){Go(e,n,t)}))}function za(t,e,n){n=Math.min(t.l.length,n);var i=t.j?Cs(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{ya(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function Qa(t){t.g||t.u||(t.Y=1,Fr(t.Ga,t),t.A=0)}function Xa(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=oo(Cs(t.Ga,t),el(t,t.A)),t.A++,!0)}function Ya(t){null!=t.B&&(fs.clearTimeout(t.B),t.B=null)}function Ja(t){t.g=new _o(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=qo(t.oa);Go(e,"RID","rpc"),Go(e,"SID",t.J),Go(e,"CI",t.N?"0":"1"),Go(e,"AID",t.U),Ka(t,e),Go(e,"TYPE","xmlhttp"),t.o&&t.s&&Va(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=$o(qo(e)),n.s=null,n.U=!0,bo(n,t)}function Za(t){null!=t.v&&(fs.clearTimeout(t.v),t.v=null)}function tl(t,e){var n=null;if(t.g==e){Za(t),Ya(t),t.g=null;var i=2}else{if(!ua(t.i,e))return;n=e.D,fa(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Ar(i=to(),new ro(i,n,e,s)),Ga(t)}else Qa(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(ca(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=oo(Cs(t.Ha,t,e),el(t,t.C)),t.C++,0)))}(t,e)||2==i&&Xa(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:nl(t,5);break;case 4:nl(t,10);break;case 3:nl(t,6);break;default:nl(t,2)}}function el(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function nl(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=Cs(t.jb,t);n||(n=new Uo("//www.google.com/images/cleardot.gif"),fs.location&&"http"==fs.location.protocol||Bo(n,"https"),$o(n)),function(t,e){const n=new Xr;if(fs.Image){const i=new Image;i.onload=Es(_a,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Es(_a,n,i,"TestLoadImage: error",!1,e),i.onabort=Es(_a,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Es(_a,n,i,"TestLoadImage: timeout",!1,e),fs.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else so(2);t.G=0,t.j&&t.j.va(e),il(t),Ha(t)}function il(t){t.G=0,t.I=-1,t.j&&(0==pa(t.i).length&&0==t.l.length||(t.i.i.length=0,As(t.l),t.l.length=0),t.j.ua())}function sl(t,e,n){let i=function(t){return t instanceof Uo?qo(t):new Uo(t,void 0)}(n);if(""!=i.i)e&&jo(i,e+"."+i.i),Ho(i,i.m);else{const t=fs.location;i=function(t,e,n,i){var s=new Uo(null,void 0);return t&&Bo(s,t),e&&jo(s,e),n&&Ho(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Fs(t.aa,(function(t,e){Go(i,e,t)})),e=t.D,n=t.sa,e&&n&&Go(i,e,n),Go(i,"VER",t.ma),Ka(t,i),i}function rl(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new Sa(new va({ib:!0})):new Sa(t.qa)).L=t.H,e}function ol(){}function al(){if(Gs&&!(10<=Number(sr)))throw Error("Environmental error: no available transport.")}function ll(t,e){kr.call(this),this.g=new qa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rs(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new ul(this)}function hl(t){go.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function cl(){mo.call(this),this.status=1}function ul(t){this.g=t}(as=Sa.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():fo.g(),this.C=this.u?co(this.u):co(fo),this.g.onreadystatechange=Cs(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void xa(this,t)}t=n||"";const s=new Mo(this.headers);i&&Lo(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=Ra;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=fs.FormData&&t instanceof fs.FormData,!(0<=Ss(Aa,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Ma(this),0<this.B&&((this.K=function(t){return Gs&&nr()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Cs(this.pa,this)):this.A=Hr(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){xa(this,t)}},as.pa=function(){void 0!==ds&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ar(this,"timeout"),this.abort(8))},as.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ar(this,"complete"),Ar(this,"abort"),La(this))},as.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),La(this,!0)),Sa.Z.M.call(this)},as.Fa=function(){this.s||(this.F||this.v||this.l?Pa(this):this.cb())},as.cb=function(){Pa(this)},as.ba=function(){try{return 2<Oa(this)?this.g.status:-1}catch(t){return-1}},as.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},as.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Ia(e)}},as.Da=function(){return this.m},as.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(as=qa.prototype).ma=8,as.G=1,as.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},as.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new _o(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=Vs(r),qs(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=za(this,s,e),Go(n=qo(this.F),"RID",t),Go(n,"CVER",22),this.D&&Go(n,"X-HTTP-Session-Id",this.D),Ka(this,n),this.o&&r&&Va(n,this.o,r),da(this.i,s),this.Ra&&Go(n,"TYPE","init"),this.ja?(Go(n,"$req",e),Go(n,"SID","null"),s.$=!0,To(s,n,null)):To(s,n,e),this.G=2}}else 3==this.G&&(t?$a(this,t):0==this.l.length||ha(this.i)||$a(this))},as.Ga=function(){if(this.u=null,Ja(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=oo(Cs(this.bb,this),t)}},as.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,so(10),ja(this),Ja(this))},as.ab=function(){null!=this.v&&(this.v=null,ja(this),Xa(this),so(19))},as.jb=function(t){t?(this.h.info("Successfully pinged google.com"),so(2)):(this.h.info("Failed to ping google.com"),so(1))},(as=ol.prototype).xa=function(){},as.wa=function(){},as.va=function(){},as.ua=function(){},as.Oa=function(){},al.prototype.g=function(t,e){return new ll(t,e)},Ts(ll,kr),ll.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Fr(Cs(t.hb,t,e))),so(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=sl(t,null,t.W),Ga(t)},ll.prototype.close=function(){Ba(this.g)},ll.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Wa(this.g,e)}else this.v?((e={}).__data__=xr(t),Wa(this.g,e)):Wa(this.g,t)},ll.prototype.M=function(){this.g.j=null,delete this.j,Ba(this.g),delete this.g,ll.Z.M.call(this)},Ts(hl,go),Ts(cl,mo),Ts(ul,ol),ul.prototype.xa=function(){Ar(this.g,"a")},ul.prototype.wa=function(t){Ar(this.g,new hl(t))},ul.prototype.va=function(t){Ar(this.g,new cl(t))},ul.prototype.ua=function(){Ar(this.g,"b")},al.prototype.createWebChannel=al.prototype.g,ll.prototype.send=ll.prototype.u,ll.prototype.open=ll.prototype.m,ll.prototype.close=ll.prototype.close,ao.NO_ERROR=0,ao.TIMEOUT=8,ao.HTTP_ERROR=6,lo.COMPLETE="complete",uo.EventType=po,po.OPEN="a",po.CLOSE="b",po.ERROR="c",po.MESSAGE="d",kr.prototype.listen=kr.prototype.N,Sa.prototype.listenOnce=Sa.prototype.O,Sa.prototype.getLastError=Sa.prototype.La,Sa.prototype.getLastErrorCode=Sa.prototype.Da,Sa.prototype.getStatus=Sa.prototype.ba,Sa.prototype.getResponseJson=Sa.prototype.Qa,Sa.prototype.getResponseText=Sa.prototype.ga,Sa.prototype.send=Sa.prototype.ea;var dl=us.createWebChannelTransport=function(){return new al},fl=us.getStatEventTarget=function(){return to()},pl=us.ErrorCode=ao,gl=us.EventType=lo,ml=us.Event=Jr,yl=us.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},_l=us.FetchXmlHttpFactory=va,vl=us.WebChannel=uo,wl=us.XhrIo=Sa;k=s("4TNnu");
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
class Cl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}Cl.UNAUTHENTICATED=new Cl(null),Cl.GOOGLE_CREDENTIALS=new Cl("google-credentials-uid"),Cl.FIRST_PARTY=new Cl("first-party-uid"),Cl.MOCK_USER=new Cl("mock-user");
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
let El="9.8.3";
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
 */const Tl=new(0,N.Logger)("@firebase/firestore");function bl(){return Tl.logLevel}function Il(t,...e){if(Tl.logLevel<=N.LogLevel.DEBUG){const n=e.map(kl);Tl.debug(`Firestore (${El}): ${t}`,...n)}}function Sl(t,...e){if(Tl.logLevel<=N.LogLevel.ERROR){const n=e.map(kl);Tl.error(`Firestore (${El}): ${t}`,...n)}}function Nl(t,...e){if(Tl.logLevel<=N.LogLevel.WARN){const n=e.map(kl);Tl.warn(`Firestore (${El}): ${t}`,...n)}}function kl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Al(t="Unexpected state"){const e=`FIRESTORE (${El}) INTERNAL ASSERTION FAILED: `+t;throw Sl(e),new Error(e)}function Rl(t,e){t||Al()}function xl(t,e){return t}
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
 */const Dl={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Pl extends S.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Ll{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
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
 */class Ml{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Ol{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Cl.UNAUTHENTICATED)))}shutdown(){}}class Fl{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Ll;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ll,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{Il("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Il("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ll)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Il("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Rl("string"==typeof e.accessToken),new Ml(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Rl(null===t||"string"==typeof t),new Cl(t)}constructor(t){this.t=t,this.currentUser=Cl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class Vl{constructor(t,e,n){this.type="FirstParty",this.user=Cl.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ul{getToken(){return Promise.resolve(new Vl(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Cl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class ql{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bl{start(t,e){const n=t=>{null!=t.error&&Il("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Il("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{Il("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Il("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Rl("string"==typeof t.token),this.p=t.token,new ql(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
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
function jl(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
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
 */class Hl{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=jl(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Wl(t,e){return t<e?-1:t>e?1:0}function Gl(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
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
class $l{static now(){return $l.fromMillis(Date.now())}static fromDate(t){return $l.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new $l(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Wl(this.nanoseconds,t.nanoseconds):Wl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Pl(Dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Pl(Dl.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Pl(Dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Pl(Dl.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
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
 */class Kl{static fromTimestamp(t){return new Kl(t)}static min(){return new Kl(new $l(0,0))}static max(){return new Kl(new $l(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
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
 */class zl{get length(){return this.len}isEqual(t){return 0===zl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof zl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&Al(),void 0===n?n=t.length-e:n>t.length-e&&Al(),this.segments=t,this.offset=e,this.len=n}}class Ql extends zl{construct(t,e,n){return new Ql(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Pl(Dl.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ql(e)}static emptyPath(){return new Ql([])}}const Xl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Yl extends zl{construct(t,e,n){return new Yl(t,e,n)}static isValidIdentifier(t){return Xl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Yl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Yl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Pl(Dl.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Pl(Dl.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Pl(Dl.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Pl(Dl.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Yl(e)}static emptyPath(){return new Yl([])}}
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
 */class Jl{static fromPath(t){return new Jl(Ql.fromString(t))}static fromName(t){return new Jl(Ql.fromString(t).popFirst(5))}static empty(){return new Jl(Ql.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ql.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ql.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Jl(new Ql(t.slice()))}constructor(t){this.path=t}}
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
 */class Zl{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Zl.UNKNOWN_ID=-1;function th(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=Kl.fromTimestamp(1e9===i?new $l(n+1,0):new $l(n,i));return new nh(s,Jl.empty(),e)}function eh(t){return new nh(t.readTime,t.key,-1)}class nh{static min(){return new nh(Kl.min(),Jl.empty(),-1)}static max(){return new nh(Kl.max(),Jl.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function ih(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Jl.comparator(t.documentKey,e.documentKey),0!==n?n:Wl(t.largestBatchId,e.largestBatchId))}
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
 */const sh="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class rh{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
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
 */async function oh(t){if(t.code!==Dl.FAILED_PRECONDITION||t.message!==sh)throw t;Il("LocalStore","Unexpectedly lost primary lease")}
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
 */class ah{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Al(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new ah(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof ah?e:ah.resolve(e)}catch(t){return ah.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):ah.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):ah.reject(e)}static resolve(t){return new ah(((e,n)=>{e(t)}))}static reject(t){return new ah(((e,n)=>{n(t)}))}static waitFor(t){return new ah(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=ah.resolve(!1);for(const n of t)e=e.next((t=>t?ah.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new ah(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new ah(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
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
 */function lh(t){return"IndexedDbTransactionError"===t.name}
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
class hh{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
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
 */function ch(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function uh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function dh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */hh.ot=-1;class fh{insert(t,e){return new fh(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,gh.BLACK,null,null))}remove(t){return new fh(this.comparator,this.root.remove(t,this.comparator).copy(null,null,gh.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ph(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ph(this.root,t,this.comparator,!1)}getReverseIterator(){return new ph(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ph(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||gh.EMPTY}}class ph{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class gh{copy(t,e,n,i,s){return new gh(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gh.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return gh.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,gh.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,gh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Al();if(this.right.isRed())throw Al();const t=this.left.check();if(t!==this.right.check())throw Al();return t+(this.isRed()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:gh.RED,this.left=null!=i?i:gh.EMPTY,this.right=null!=s?s:gh.EMPTY,this.size=this.left.size+1+this.right.size}}gh.EMPTY=null,gh.RED=!0,gh.BLACK=!1,gh.EMPTY=new class{get key(){throw Al()}get value(){throw Al()}get color(){throw Al()}get left(){throw Al()}get right(){throw Al()}copy(t,e,n,i,s){return this}insert(t,e,n){return new gh(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
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
class mh{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new yh(this.data.getIterator())}getIteratorFrom(t){return new yh(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof mh))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new mh(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new fh(this.comparator)}}class yh{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class _h{static empty(){return new _h([])}unionWith(t){let e=new mh(Yl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new _h(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Gl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Yl.comparator)}}
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
 */let vh=Symbol.iterator;
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
 */class wh{static fromBase64String(t){const e=atob(t);return new wh(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new wh(e)}[vh](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Wl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}wh.EMPTY_BYTE_STRING=new wh("");const Ch=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Eh(t){if(Rl(!!t),"string"==typeof t){let e=0;const n=Ch.exec(t);if(Rl(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:Th(t.seconds),nanos:Th(t.nanos)}}function Th(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function bh(t){return"string"==typeof t?wh.fromBase64String(t):wh.fromUint8Array(t)}
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
 */function Ih(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Sh(t){const e=Eh(t.mapValue.fields.__local_write_time__.timestampValue);return new $l(e.seconds,e.nanos)}
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
 */class Nh{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class kh{static empty(){return new kh("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof kh&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
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
 */function Ah(t){return null==t}function Rh(t){return 0===t&&1/t==-1/0}function xh(t){return"number"==typeof t&&Number.isInteger(t)&&!Rh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Dh={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ph(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ih(t)?4:Wh(t)?9007199254740991:10:Al()}function Lh(t,e){if(t===e)return!0;const n=Ph(t);if(n!==Ph(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Sh(t).isEqual(Sh(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Eh(t.timestampValue),i=Eh(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,bh(t.bytesValue).isEqual(bh(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Th(t.geoPointValue.latitude)===Th(e.geoPointValue.latitude)&&Th(t.geoPointValue.longitude)===Th(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Th(t.integerValue)===Th(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Th(t.doubleValue),i=Th(e.doubleValue);return n===i?Rh(n)===Rh(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Gl(t.arrayValue.values||[],e.arrayValue.values||[],Lh);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ch(n)!==ch(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Lh(n[t],i[t])))return!1;return!0}(t,e);default:return Al()}var i}function Mh(t,e){return void 0!==(t.values||[]).find((t=>Lh(t,e)))}function Oh(t,e){if(t===e)return 0;const n=Ph(t),i=Ph(e);if(n!==i)return Wl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Wl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Th(t.integerValue||t.doubleValue),i=Th(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Fh(t.timestampValue,e.timestampValue);case 4:return Fh(Sh(t),Sh(e));case 5:return Wl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=bh(t),i=bh(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Wl(n[t],i[t]);if(0!==e)return e}return Wl(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Wl(Th(t.latitude),Th(e.latitude));return 0!==n?n:Wl(Th(t.longitude),Th(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Oh(n[t],i[t]);if(e)return e}return Wl(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Dh.mapValue&&e===Dh.mapValue)return 0;if(t===Dh.mapValue)return 1;if(e===Dh.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Wl(i[t],r[t]);if(0!==e)return e;const o=Oh(n[i[t]],s[r[t]]);if(0!==o)return o}return Wl(i.length,r.length)}(t.mapValue,e.mapValue);default:throw Al()}}function Fh(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Wl(t,e);const n=Eh(t),i=Eh(e),s=Wl(n.seconds,i.seconds);return 0!==s?s:Wl(n.nanos,i.nanos)}function Vh(t){return Uh(t)}function Uh(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Eh(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?bh(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Jl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Uh(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Uh(t.fields[s])}`;return n+"}"}(t.mapValue):Al()}function qh(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function jh(t){return!!t&&"mapValue"in t}function Hh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return uh(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Hh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Hh(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Wh(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class Gh{static empty(){return new Gh({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!jh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Hh(e)}setAll(t){let e=Yl.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Hh(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());jh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Lh(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];jh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){uh(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Gh(Hh(this.value))}constructor(t){this.value=t}}function $h(t){const e=[];return uh(t.fields,((t,n)=>{const i=new Yl([t]);if(jh(n)){const t=$h(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new _h(e)
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
 */}class Kh{static newInvalidDocument(t){return new Kh(t,0,Kl.min(),Kl.min(),Gh.empty(),0)}static newFoundDocument(t,e,n){return new Kh(t,1,e,Kl.min(),n,0)}static newNoDocument(t,e){return new Kh(t,2,e,Kl.min(),Gh.empty(),0)}static newUnknownDocument(t,e){return new Kh(t,3,e,Kl.min(),Gh.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gh.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Kl.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Kh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Kh(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}}
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
 */class zh{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ut=null}}function Qh(t,e=null,n=[],i=[],s=null,r=null,o=null){return new zh(t,e,n,i,s,r,o)}function Xh(t){const e=xl(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+Vh(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Ah(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>Vh(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>Vh(t))).join(",")),e.ut=t}return e.ut}function Yh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hc(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Lh(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!uc(t.startAt,e.startAt)&&uc(t.endAt,e.endAt)}class Jh extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Zh(t,e,n):"array-contains"===e?new ic(t,n):"in"===e?new sc(t,n):"not-in"===e?new rc(t,n):"array-contains-any"===e?new oc(t,n):new Jh(t,e,n)}static ct(t,e,n){return"in"===e?new tc(t,n):new ec(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Oh(e,this.value)):null!==e&&Ph(this.value)===Ph(e)&&this.at(Oh(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Al()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Zh extends Jh{matches(t){const e=Jl.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=Jl.fromName(n.referenceValue)}}class tc extends Jh{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=nc("in",e)}}class ec extends Jh{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=nc("not-in",e)}}function nc(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Jl.fromName(t.referenceValue)))}class ic extends Jh{matches(t){const e=t.data.field(this.field);return Bh(e)&&Mh(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class sc extends Jh{matches(t){const e=t.data.field(this.field);return null!==e&&Mh(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class rc extends Jh{matches(t){if(Mh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Mh(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class oc extends Jh{matches(t){const e=t.data.field(this.field);return!(!Bh(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Mh(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class ac{constructor(t,e){this.position=t,this.inclusive=e}}class lc{constructor(t,e="asc"){this.field=t,this.dir=e}}function hc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function cc(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Jl.comparator(Jl.fromName(o.referenceValue),n.key):Oh(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function uc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Lh(t.position[n],e.position[n]))return!1;return!0}
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
 */class dc{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function fc(t,e,n,i,s,r,o,a){return new dc(t,e,n,i,s,r,o,a)}function pc(t){return new dc(t)}function gc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function mc(t){for(const e of t.filters)if(e.ht())return e.field;return null}function yc(t){return null!==t.collectionGroup}function _c(t){const e=xl(t);if(null===e.lt){e.lt=[];const t=mc(e),n=gc(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new lc(t)),e.lt.push(new lc(Yl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new lc(Yl.keyField(),t))}}}return e.lt}function vc(t){const e=xl(t);if(!e.ft)if("F"===e.limitType)e.ft=Qh(e.path,e.collectionGroup,_c(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of _c(e)){const e="desc"===n.dir?"asc":"desc";t.push(new lc(n.field,e))}const n=e.endAt?new ac(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ac(e.startAt.position,e.startAt.inclusive):null;e.ft=Qh(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function wc(t,e,n){return new dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Cc(t,e){return Yh(vc(t),vc(e))&&t.limitType===e.limitType}function Ec(t){return`${Xh(vc(t))}|lt:${t.limitType}`}function Tc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${Vh(e.value)}`})).join(", ")}]`),Ah(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>Vh(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>Vh(t))).join(",")),`Target(${e})`}(vc(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Jl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=cc(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,_c(n),i)||n.endAt&&!function(t,e,n){const i=cc(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,_c(n),i)));var n,i}function Ic(t){return(e,n)=>{let i=!1;for(const s of _c(t)){const t=Sc(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function Sc(t,e,n){const i=t.field.isKeyField()?Jl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Oh(i,s):Al()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Al()}}
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
 */function Nc(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Rh(e)?"-0":e}}function kc(t){return{integerValue:""+t}}function Ac(t,e){return xh(e)?kc(e):Nc(t,e)}
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
 */class Rc{constructor(){this._=void 0}}function xc(t,e,n){return t instanceof Lc?Mc(t,e):t instanceof Oc?Fc(t,e):n}function Dc(t,e){var n,i;return t instanceof Vc?qh(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class Pc extends Rc{}class Lc extends Rc{constructor(t){super(),this.elements=t}}function Mc(t,e){const n=qc(e);for(const e of t.elements)n.some((t=>Lh(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Oc extends Rc{constructor(t){super(),this.elements=t}}function Fc(t,e){let n=qc(e);for(const e of t.elements)n=n.filter((t=>!Lh(t,e)));return{arrayValue:{values:n}}}class Vc extends Rc{constructor(t,e){super(),this.wt=t,this._t=e}}function Uc(t){return Th(t.integerValue||t.doubleValue)}function qc(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */class Bc{constructor(t,e){this.version=t,this.transformResults=e}}class jc{static none(){return new jc}static exists(t){return new jc(void 0,t)}static updateTime(t){return new jc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Hc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Wc{}function Gc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new eu(t.key,jc.none()):new Xc(t.key,t.data,jc.none());{const n=t.data,i=Gh.empty();let s=new mh(Yl.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Yc(t.key,i,new _h(s.toArray()),jc.none())}}function $c(t,e,n){var i;t instanceof Xc?function(t,e,n){const i=t.value.clone(),s=Zc(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Yc?function(t,e,n){if(!Hc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Zc(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Jc(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function Kc(t,e,n,i){return t instanceof Xc?function(t,e,n,i){if(!Hc(t.precondition,e))return n;const s=t.value.clone(),r=tu(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Yc?function(t,e,n,i){if(!Hc(t.precondition,e))return n;const s=tu(t.fieldTransforms,i,e),r=e.data;return r.setAll(Jc(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(s=e,r=n,Hc(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function zc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Dc(i.transform,t||null);null!=s&&(null===n&&(n=Gh.empty()),n.set(i.field,s))}return n||null}function Qc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Gl(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Lc&&i instanceof Lc||n instanceof Oc&&i instanceof Oc?Gl(n.elements,i.elements,Lh):n instanceof Vc&&i instanceof Vc?Lh(n._t,i._t):n instanceof Pc&&i instanceof Pc);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Xc extends Wc{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Yc extends Wc{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Jc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Zc(t,e,n){const i=new Map;Rl(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,xc(o,a,n[s]))}return i}function tu(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=e,(s=t)instanceof Pc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):s instanceof Lc?Mc(s,r):s instanceof Oc?Fc(s,r):function(t,e){const n=Dc(t,e),i=Uc(n)+Uc(t._t);return qh(n)&&qh(t._t)?kc(i):Nc(t.wt,i)}(s,r)))}var s,r,o;return i}class eu extends Wc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class nu extends Wc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
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
var iu,su;function ru(t){switch(t){default:return Al();case Dl.CANCELLED:case Dl.UNKNOWN:case Dl.DEADLINE_EXCEEDED:case Dl.RESOURCE_EXHAUSTED:case Dl.INTERNAL:case Dl.UNAVAILABLE:case Dl.UNAUTHENTICATED:return!1;case Dl.INVALID_ARGUMENT:case Dl.NOT_FOUND:case Dl.ALREADY_EXISTS:case Dl.PERMISSION_DENIED:case Dl.FAILED_PRECONDITION:case Dl.ABORTED:case Dl.OUT_OF_RANGE:case Dl.UNIMPLEMENTED:case Dl.DATA_LOSS:return!0}}function ou(t){if(void 0===t)return Sl("GRPC error has no .code"),Dl.UNKNOWN;switch(t){case iu.OK:return Dl.OK;case iu.CANCELLED:return Dl.CANCELLED;case iu.UNKNOWN:return Dl.UNKNOWN;case iu.DEADLINE_EXCEEDED:return Dl.DEADLINE_EXCEEDED;case iu.RESOURCE_EXHAUSTED:return Dl.RESOURCE_EXHAUSTED;case iu.INTERNAL:return Dl.INTERNAL;case iu.UNAVAILABLE:return Dl.UNAVAILABLE;case iu.UNAUTHENTICATED:return Dl.UNAUTHENTICATED;case iu.INVALID_ARGUMENT:return Dl.INVALID_ARGUMENT;case iu.NOT_FOUND:return Dl.NOT_FOUND;case iu.ALREADY_EXISTS:return Dl.ALREADY_EXISTS;case iu.PERMISSION_DENIED:return Dl.PERMISSION_DENIED;case iu.FAILED_PRECONDITION:return Dl.FAILED_PRECONDITION;case iu.ABORTED:return Dl.ABORTED;case iu.OUT_OF_RANGE:return Dl.OUT_OF_RANGE;case iu.UNIMPLEMENTED:return Dl.UNIMPLEMENTED;case iu.DATA_LOSS:return Dl.DATA_LOSS;default:return Al()}}(su=iu||(iu={}))[su.OK=0]="OK",su[su.CANCELLED=1]="CANCELLED",su[su.UNKNOWN=2]="UNKNOWN",su[su.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",su[su.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",su[su.NOT_FOUND=5]="NOT_FOUND",su[su.ALREADY_EXISTS=6]="ALREADY_EXISTS",su[su.PERMISSION_DENIED=7]="PERMISSION_DENIED",su[su.UNAUTHENTICATED=16]="UNAUTHENTICATED",su[su.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",su[su.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",su[su.ABORTED=10]="ABORTED",su[su.OUT_OF_RANGE=11]="OUT_OF_RANGE",su[su.UNIMPLEMENTED=12]="UNIMPLEMENTED",su[su.INTERNAL=13]="INTERNAL",su[su.UNAVAILABLE=14]="UNAVAILABLE",su[su.DATA_LOSS=15]="DATA_LOSS";
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
class au{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){uh(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return dh(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
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
 */const lu=new fh(Jl.comparator);function hu(){return lu}const cu=new fh(Jl.comparator);function uu(...t){let e=cu;for(const n of t)e=e.insert(n.key,n);return e}function du(t){let e=cu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function fu(){return gu()}function pu(){return gu()}function gu(){return new au((t=>t.toString()),((t,e)=>t.isEqual(e)))}const mu=new fh(Jl.comparator),yu=new mh(Jl.comparator);function _u(...t){let e=yu;for(const n of t)e=e.add(n);return e}const vu=new mh(Wl);function wu(){return vu}
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
 */class Cu{constructor(t,e){this.databaseId=t,this.dt=e}}function Eu(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tu(t,e){return t.dt?e.toBase64():e.toUint8Array()}function bu(t,e){return Eu(t,e.toTimestamp())}function Iu(t){return Rl(!!t),Kl.fromTimestamp(function(t){const e=Eh(t);return new $l(e.seconds,e.nanos)}(t))}function Su(t,e){return(n=t,new Ql(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function Nu(t){const e=Ql.fromString(t);return Rl(Uu(e)),e}function ku(t,e){return Su(t.databaseId,e.path)}function Au(t){const e=Nu(t);return 4===e.length?Ql.emptyPath():xu(e)}function Ru(t){return new Ql(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function xu(t){return Rl(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Du(t,e,n){return{name:ku(t,e),fields:n.value.mapValue.fields}}function Pu(t,e){let n;if(e instanceof Xc)n={update:Du(t,e.key,e.value)};else if(e instanceof eu)n={delete:ku(t,e.key)};else if(e instanceof Yc)n={update:Du(t,e.key,e.data),updateMask:Vu(e.fieldMask)};else{if(!(e instanceof nu))return Al();n={verify:ku(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Pc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Lc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Oc)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Vc)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Al()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(s=e.precondition).updateTime?{updateTime:bu(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:Al())),n;var i,s}function Lu(t){let e=Au(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Rl(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=Mu(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new lc(Ou((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Ah(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new ac(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new ac(n,e)}(n.endAt)),fc(e,s,o,r,a,"F",l,h)}function Mu(t){return t?void 0!==t.unaryFilter?[Fu(t)]:void 0!==t.fieldFilter?[(e=t,Jh.create(Ou(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Al()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Mu(t))).reduce(((t,e)=>t.concat(e))):Al():[];var e}function Ou(t){return Yl.fromServerFormat(t.fieldPath)}function Fu(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Ou(t.unaryFilter.field);return Jh.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Ou(t.unaryFilter.field);return Jh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ou(t.unaryFilter.field);return Jh.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ou(t.unaryFilter.field);return Jh.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Al()}}function Vu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Uu(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
 */const qu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Bu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ju=Bu;
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
class Hu{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&$c(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Kc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Kc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=pu();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Gc(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(Kl.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),_u())}isEqual(t){return this.batchId===t.batchId&&Gl(this.mutations,t.mutations,((t,e)=>Qc(t,e)))&&Gl(this.baseMutations,t.baseMutations,((t,e)=>Qc(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class Wu{static from(t,e,n){Rl(t.mutations.length===n.length);let i=mu;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Wu(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
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
 */class Gu{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
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
 */class $u{constructor(t){this.ne=t}}function Ku(t){const e=Lu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?wc(e,e.limit,"L"):e}
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
 */class zu{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Th(t.integerValue));else if("doubleValue"in t){const n=Th(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Rh(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(bh(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Wh(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Al()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),Jl.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}zu.ye=new zu;
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
class Qu{addToCollectionParentIndex(t,e){return this.ze.add(e),ah.resolve()}getCollectionParents(t,e){return ah.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return ah.resolve()}deleteFieldIndex(t,e){return ah.resolve()}getDocumentsMatchingTarget(t,e){return ah.resolve(null)}getIndexType(t,e){return ah.resolve(0)}getFieldIndexes(t,e){return ah.resolve([])}getNextCollectionGroupToUpdate(t){return ah.resolve(null)}getMinOffset(t,e){return ah.resolve(nh.min())}getMinOffsetFromCollectionGroup(t,e){return ah.resolve(nh.min())}updateCollectionGroup(t,e,n){return ah.resolve()}updateIndexEntries(t,e){return ah.resolve()}constructor(){this.ze=new Xu}}class Xu{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new mh(Ql.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new mh(Ql.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Yu{static withCacheSize(t){return new Yu(t,Yu.DEFAULT_COLLECTION_PERCENTILE,Yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Yu.DEFAULT_COLLECTION_PERCENTILE=10,Yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Yu.DEFAULT=new Yu(41943040,Yu.DEFAULT_COLLECTION_PERCENTILE,Yu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Yu.DISABLED=new Yu(-1,0,0);
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
class Ju{next(){return this.En+=2,this.En}static An(){return new Ju(0)}static Rn(){return new Ju(-1)}constructor(t){this.En=t}}
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
class Zu{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Kh.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?ah.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new au((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
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
class td{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
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
 */class ed{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&Kc(n.mutation,t,_h.empty(),$l.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,_u()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=_u()){const i=fu();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=uu();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=fu();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,_u())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=hu();const r=gu(),o=gu();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Yc)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),Kc(o.mutation,e,o.mutation.getFieldMask(),$l.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new td(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=gu();let i=new fh(((t,e)=>t-e)),s=_u();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||_h.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||_u()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,h=pu();l.forEach((t=>{if(!s.has(t)){const i=Gc(e.get(t),n.get(t));null!==i&&h.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return ah.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,Jl.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):yc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):ah.resolve(fu());let o=-1,a=s;return r.next((e=>ah.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?ah.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,_u()))).next((t=>({batchId:o,changes:du(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Jl(e)).next((t=>{let e=uu();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=uu();return this.indexManager.getCollectionParents(t,i).next((r=>ah.forEach(r,(r=>{const o=(a=e,l=r.child(i),new dc(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,Kh.newInvalidDocument(n)))}));let n=uu();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&Kc(r.mutation,s,_h.empty(),$l.now()),bc(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):ah.resolve(Kh.newInvalidDocument(e))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
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
 */class nd{getBundleMetadata(t,e){return ah.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Iu(n.createTime)}),ah.resolve()}getNamedQuery(t,e){return ah.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:Ku(n.bundledQuery),readTime:Iu(n.readTime)}),ah.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
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
 */class id{getOverlay(t,e){return ah.resolve(this.overlays.get(e))}getOverlays(t,e){const n=fu();return ah.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),ah.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),ah.resolve()}getOverlaysForCollection(t,e,n){const i=fu(),s=e.length+1,r=new Jl(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return ah.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new fh(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=fu(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=fu(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return ah.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Gu(e,n));let s=this.Xn.get(e);void 0===s&&(s=_u(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}constructor(){this.overlays=new fh(Jl.comparator),this.Xn=new Map}}
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
 */class sd{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new rd(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new rd(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Jl(new Ql([])),n=new rd(e,t),i=new rd(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Jl(new Ql([])),n=new rd(e,t),i=new rd(e,t+1);let s=_u();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new rd(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new mh(rd.ts),this.es=new mh(rd.ns)}}class rd{static ts(t,e){return Jl.comparator(t.key,e.key)||Wl(t.ls,e.ls)}static ns(t,e){return Wl(t.ls,e.ls)||Jl.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
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
 */class od{checkEmpty(t){return ah.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Hu(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.ds=this.ds.add(new rd(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return ah.resolve(r)}lookupMutationBatch(t,e){return ah.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),s=i<0?0:i;return ah.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return ah.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return ah.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new rd(e,0),i=new rd(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);s.push(e)})),ah.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new mh(Wl);return e.forEach((t=>{const e=new rd(t,0),i=new rd(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),ah.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Jl.isDocumentKey(s)||(s=s.child(""));const r=new rd(new Jl(s),0);let o=new mh(Wl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),ah.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Rl(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return ah.forEach(e.mutations,(i=>{const s=new rd(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new rd(e,0),i=this.ds.firstAfterOrEqual(n);return ah.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,ah.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new mh(rd.ts)}}
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
 */class ad{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return ah.resolve(n?n.document.mutableCopy():Kh.newInvalidDocument(e))}getEntries(t,e){let n=hu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Kh.newInvalidDocument(t))})),ah.resolve(n)}getAllFromCollection(t,e,n){let i=hu();const s=new Jl(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||ih(eh(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return ah.resolve(i)}getAllFromCollectionGroup(t,e,n,i){Al()}Is(t,e){return ah.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ld(this)}getSize(t){return ah.resolve(this.size)}constructor(t){this.ps=t,this.docs=new fh(Jl.comparator),this.size=0}}class ld extends Zu{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),ah.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
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
 */class hd{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),ah.resolve()}getLastRemoteSnapshotVersion(t){return ah.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return ah.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),ah.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),ah.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ju(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,ah.resolve()}updateTargetData(t,e){return this.vn(e),ah.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,ah.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),ah.waitFor(s).next((()=>i))}getTargetCount(t){return ah.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return ah.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),ah.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),ah.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),ah.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return ah.resolve(n)}containsKey(t,e){return ah.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new au((t=>Xh(t)),Yh),this.lastRemoteSnapshotVersion=Kl.min(),this.highestTargetId=0,this.Es=0,this.As=new sd,this.targetCount=0,this.Rs=Ju.An()}}
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
 */class cd{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new id,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new od(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Il("MemoryPersistence","Starting transaction:",t);const i=new ud(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return ah.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new hh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new hd(this),this.indexManager=new Qu,this.remoteDocumentCache=new ad((t=>this.referenceDelegate.Ss(t))),this.wt=new $u(e),this.Ds=new nd(this.wt)}}class ud extends rh{constructor(t){super(),this.currentSequenceNumber=t}}class dd{static Ms(t){return new dd(t)}get Fs(){if(this.Os)return this.Os;throw Al()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),ah.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),ah.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),ah.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ah.forEach(this.Fs,(n=>{const i=Jl.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,Kl.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return ah.or([()=>ah.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new sd,this.Os=null}}
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
class fd{static Vi(t,e){let n=_u(),i=_u();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new fd(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}}
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
 */class pd{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((s=>s||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return ah.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(Kl.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const r=this.ki(e,s);return this.Oi(e,r,n,i)?this.Ni(t,e):(bl()<=N.LogLevel.DEBUG&&Il("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Tc(e)),this.Mi(t,r,e,th(i,-1)))}))}ki(t,e){let n=new mh(Ic(t));return e.forEach(((e,i)=>{bc(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(t,e){return bl()<=N.LogLevel.DEBUG&&Il("QueryEngine","Using full collection scan to execute query:",Tc(e)),this.Di.getDocumentsMatchingQuery(t,e,nh.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
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
 */class gd{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new ed(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new fh(Wl),this.Bi=new au((t=>Xh(t)),Yh),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function md(t,e,n,i){return new gd(t,e,n,i)}async function yd(t,e){const n=xl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=_u();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function _d(t){const e=xl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function vd(t,e){const n=xl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class wd{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=wu()}}class Cd{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new wd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new wd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class Ed{Br(t){}shutdown(){}}
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
 */class Td{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Il("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Il("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
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
 */const bd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Id{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
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
 */class Sd extends class{ro(t,e,n,i,s){const r=this.oo(t,e);Il("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.co(t,r,o,n).then((t=>(Il("RestConnection","Received: ",t),t)),(e=>{throw Nl("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+El,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=bd[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,i){return new Promise(((s,r)=>{const o=new wl;o.listenOnce(gl.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case pl.NO_ERROR:const e=o.getResponseJson();Il("Connection","XHR received:",JSON.stringify(e)),s(e);break;case pl.TIMEOUT:Il("Connection",'RPC "'+t+'" timed out'),r(new Pl(Dl.DEADLINE_EXCEEDED,"Request time out"));break;case pl.HTTP_ERROR:const n=o.getStatus();if(Il("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Dl).indexOf(e)>=0?e:Dl.UNKNOWN}(t.status);r(new Pl(e,t.message))}else r(new Pl(Dl.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Pl(Dl.UNAVAILABLE,"Connection failed."));break;default:Al()}}finally{Il("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=dl(),r=fl(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new _l({})),this.uo(o.initMessageHeaders,e,n),(0,S.isMobileCordova)()||(0,S.isReactNative)()||(0,S.isElectron)()||(0,S.isIE)()||(0,S.isUWP)()||(0,S.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");Il("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let h=!1,c=!1;const u=new Id({jr:t=>{c?Il("Connection","Not sending because WebChannel is closed:",t):(h||(Il("Connection","Opening WebChannel transport."),l.open(),h=!0),Il("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,vl.EventType.OPEN,(()=>{c||Il("Connection","WebChannel transport opened.")})),d(l,vl.EventType.CLOSE,(()=>{c||(c=!0,Il("Connection","WebChannel transport closed"),u.eo())})),d(l,vl.EventType.ERROR,(t=>{c||(c=!0,Nl("Connection","WebChannel transport errored:",t),u.eo(new Pl(Dl.UNAVAILABLE,"The operation could not be completed")))})),d(l,vl.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];Rl(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){Il("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=iu[t];if(void 0!==e)return ou(e)}(t),n=s.message;void 0===e&&(e=Dl.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),c=!0,u.eo(new Pl(e,n)),l.close()}else Il("Connection","WebChannel received:",n),u.no(n)}})),d(r,ml.STAT_EVENT,(t=>{t.stat===yl.PROXY?Il("Connection","Detected buffering proxy"):t.stat===yl.NOPROXY&&Il("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.Zr()}),0),u}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function Nd(){return"undefined"!=typeof document?document:null}
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
 */function kd(t){return new Cu(t,!0)}class Ad{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&Il("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
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
 */class Rd{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Dl.RESOURCE_EXHAUSTED?(Sl(e.toString()),Sl("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Dl.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Pl(Dl.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Il("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Il("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,s,r,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ad(t,e)}}class xd extends Rd{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Rl(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Rl(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?Iu(t.updateTime):Iu(e);return n.isEqual(Kl.min())&&(n=Iu(e)),new Bc(n,t.transformResults||[])}(t,n)))):[]),s=Iu(t.commitTime);return this.listener.Jo(s,i)}var e,n;return Rl(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Ru(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Pu(this.wt,t)))};this.Mo(e)}constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.wt=s,this.Wo=!1}}
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
 */class Dd extends class{}{tu(){if(this.Zo)throw new Pl(Dl.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Pl(Dl.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Dl.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Pl(Dl.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}}class Pd{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Sl(e),this.su=!1):Il("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
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
 */class Ld{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Fd(this)&&(Il("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=xl(t);e.lu.add(4),await Od(e),e._u.set("Unknown"),e.lu.delete(4),await Md(e)}(this))}))})),this._u=new Pd(n,i)}}async function Md(t){if(Fd(t))for(const e of t.fu)await e(!0)}async function Od(t){for(const e of t.fu)await e(!1)}function Fd(t){return 0===xl(t).lu.size}async function Vd(t,e,n){if(!lh(e))throw e;t.lu.add(1),await Od(t),t._u.set("Offline"),n||(n=()=>_d(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Il("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await Md(t)}))}function Ud(t,e){return e().catch((n=>Vd(t,n,e)))}async function qd(t){const e=xl(t),n=Yd(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Bd(e);)try{const t=await vd(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,jd(e,t)}catch(t){await Vd(e,t)}Hd(e)&&Wd(e)}function Bd(t){return Fd(t)&&t.au.length<10}function jd(t,e){t.au.push(e);const n=Yd(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Hd(t){return Fd(t)&&!Yd(t).Do()&&t.au.length>0}function Wd(t){Yd(t).start()}async function Gd(t){Yd(t).Xo()}async function $d(t){const e=Yd(t);for(const n of t.au)e.Ho(n.mutations)}async function Kd(t,e,n){const i=t.au.shift(),s=Wu.from(i,e,n);await Ud(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await qd(t)}async function zd(t,e){e&&Yd(t).zo&&await async function(t,e){if(ru(n=e.code)&&n!==Dl.ABORTED){const n=t.au.shift();Yd(t).No(),await Ud(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await qd(t)}var n}(t,e),Hd(t)&&Wd(t)}async function Qd(t,e){const n=xl(t);n.asyncQueue.verifyOperationInProgress(),Il("RemoteStore","RemoteStore received new credentials");const i=Fd(n);n.lu.add(3),await Od(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await Md(n)}async function Xd(t,e){const n=xl(t);e?(n.lu.delete(2),await Md(n)):e||(n.lu.add(2),await Od(n),n._u.set("Unknown"))}function Yd(t){return t.gu||(t.gu=function(t,e,n){const i=xl(t);return i.tu(),new xd(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:Gd.bind(null,t),Jr:zd.bind(null,t),Yo:$d.bind(null,t),Jo:Kd.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await qd(t)):(await t.gu.stop(),t.au.length>0&&(Il("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
 */}class Jd{static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Jd(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Pl(Dl.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Ll,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Zd(t,e){if(Sl("AsyncQueue",`${e}: ${t}`),lh(t))return new Pl(Dl.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class tf{constructor(){this.queries=new au((t=>Ec(t)),Cc),this.onlineState="Unknown",this.Tu=new Set}}function ef(t){t.Tu.forEach((t=>{t.next()}))}class nf{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new au((t=>Ec(t)),Cc),this.ec=new Map,this.nc=new Set,this.sc=new fh(Jl.comparator),this.ic=new Map,this.rc=new sd,this.oc={},this.uc=new Map,this.cc=Ju.Rn(),this.onlineState="Unknown",this.ac=void 0}}function sf(t,e,n){const i=xl(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=xl(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&ef(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function rf(t,e){const n=xl(t),i=e.batch.batchId;try{const t=await function(t,e){const n=xl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=ah.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Rl(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=_u();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);lf(n,i,null),af(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await hf(n,t)}catch(t){await oh(t)}}async function of(t,e,n){const i=xl(t);try{const t=await function(t,e){const n=xl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Rl(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);lf(i,e,n),af(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await hf(i,t)}catch(t){await oh(t)}}function af(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function lf(t,e,n){const i=xl(t);let s=i.oc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}async function hf(t,e,n){const i=xl(t),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=fd.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Go(s),await async function(t,e){const n=xl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>ah.forEach(e,(e=>ah.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>ah.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!lh(t))throw t;Il("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,s)}}}(i.localStore,r))}async function cf(t,e){const n=xl(t);if(!n.currentUser.isEqual(e)){Il("SyncEngine","User change. New user:",e.toKey());const t=await yd(n.localStore,e);n.currentUser=e,(i=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new Pl(Dl.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await hf(n,t.Ki)}var i}function uf(t){const e=xl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=rf.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=of.bind(null,e),e}class df{async initialize(t){this.wt=kd(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return md(this.persistence,new pd,t.initialUser,this.wt)}_c(t){return new cd(dd.Ms,this.wt)}dc(t){return new Cd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ff{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>sf(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=cf.bind(null,this.syncEngine),await Xd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new tf}createDatastore(t){const e=kd(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new Sd(i));var i,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new Dd(s,r,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>sf(this.syncEngine,t,0),r=Td.V()?new Td:new Ed,new Ld(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new nf(t,e,n,i,s,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=xl(t);Il("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Od(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class pf{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Pl(Dl.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Ll;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Zd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=Cl.UNAUTHENTICATED,this.clientId=Hl.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Il("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Il("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function gf(t,e){t.asyncQueue.verifyOperationInProgress(),Il("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await yd(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function mf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yf(t);Il("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>Qd(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Qd(e.remoteStore,n))),t.onlineComponents=e}async function yf(t){return t.offlineComponents||(Il("FirestoreClient","Using default OfflineComponentProvider"),await gf(t,new df)),t.offlineComponents}async function _f(t){return t.onlineComponents||(Il("FirestoreClient","Using default OnlineComponentProvider"),await mf(t,new ff)),t.onlineComponents}function vf(t){return _f(t).then((t=>t.syncEngine))}const wf=new Map;
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
 */function Cf(t,e,n){if(!n)throw new Pl(Dl.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ef(t){if(!Jl.isDocumentKey(t))throw new Pl(Dl.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Tf(t){if(Jl.isDocumentKey(t))throw new Pl(Dl.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function bf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":Al()}function If(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Pl(Dl.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=bf(t);throw new Pl(Dl.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class Sf{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Pl(Dl.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Pl(Dl.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Pl(Dl.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class Nf{get app(){if(!this._app)throw new Pl(Dl.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Pl(Dl.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Ol;switch(t.type){case"gapi":const e=t.client;return Rl(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Ul(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Pl(Dl.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=wf.get(t);e&&(Il("ComponentProvider","Removing Datastore"),wf.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sf({}),this._settingsFrozen=!1,t instanceof kh?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Pl(Dl.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kh(t.options.projectId)}(t))}}
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
class kf{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new kf(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Af{withConverter(t){return new Af(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Rf extends Af{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new kf(this.firestore,null,new Jl(t))}withConverter(t){return new Rf(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,pc(n)),this._path=n,this.type="collection"}}function xf(t,e,...n){if(t=(0,S.getModularInstance)(t),Cf("collection","path",e),t instanceof Nf){const i=Ql.fromString(e,...n);return Tf(i),new Rf(t,null,i)}{if(!(t instanceof kf||t instanceof Rf))throw new Pl(Dl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ql.fromString(e,...n));return Tf(i),new Rf(t.firestore,null,i)}}function Df(t,e,...n){if(t=(0,S.getModularInstance)(t),1===arguments.length&&(e=Hl.I()),Cf("doc","path",e),t instanceof Nf){const i=Ql.fromString(e,...n);return Ef(i),new kf(t,null,new Jl(i))}{if(!(t instanceof kf||t instanceof Rf))throw new Pl(Dl.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(Ql.fromString(e,...n));return Ef(i),new kf(t.firestore,t instanceof Rf?t.converter:null,new Jl(i))}}
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
class Pf{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Nd();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Ll;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!lh(t))throw t;Il("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw Sl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Jd.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&Al()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ad(this,"async_queue_retry"),this.Kc=()=>{const t=Nd();t&&Il("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Nd();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class Lf extends Nf{_terminate(){return this._firestoreClient||Of(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Pf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Mf(t){return t._firestoreClient||Of(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Of(t){var e;const n=t._freezeSettings(),i=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new Nh(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;t._firestoreClient=new pf(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class Ff{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Pl(Dl.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Yl(t)}}
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
class Vf{static fromBase64String(t){try{return new Vf(wh.fromBase64String(t))}catch(t){throw new Pl(Dl.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Vf(wh.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class Uf{constructor(t){this._methodName=t}}
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
 */class qf{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Wl(this._lat,t._lat)||Wl(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Pl(Dl.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Pl(Dl.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
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
 */const Bf=/^__.*__$/;class jf{toMutation(t,e){return null!==this.fieldMask?new Yc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Xc(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Hf(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Al()}}class Wf{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Wf(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return ep(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Hf(this.Zc)&&Bf.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Gf{aa(t,e,n,i=!1){return new Wf({Zc:t,methodName:e,ca:n,path:Yl.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||kd(t)}}function $f(t){const e=t._freezeSettings(),n=kd(t._databaseId);return new Gf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Kf(t,e,n,i,s,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,s);Yf("Data must be an object, but it was:",o,i);const a=Qf(i,o);let l,h;if(r.merge)l=new _h(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Jf(e,i,n);if(!o.contains(s))throw new Pl(Dl.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);np(t,s)||t.push(s)}l=new _h(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new jf(new Gh(a),l,h)}function zf(t,e){if(Xf(t=(0,S.getModularInstance)(t)))return Yf("Unsupported field value:",e,t),Qf(t,e);if(t instanceof Uf)return function(t,e){if(!Hf(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=zf(s,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,S.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ac(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=$l.fromDate(t);return{timestampValue:Eu(e.wt,n)}}if(t instanceof $l){const n=new $l(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Eu(e.wt,n)}}if(t instanceof qf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Vf)return{bytesValue:Tu(e.wt,t._byteString)};if(t instanceof kf){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Su(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${bf(t)}`)}(t,e)}function Qf(t,e){const n={};return dh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):uh(t,((t,i)=>{const s=zf(i,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Xf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof $l||t instanceof qf||t instanceof Vf||t instanceof kf||t instanceof Uf)}function Yf(t,e,n){if(!Xf(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=bf(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}var i}function Jf(t,e,n){if((e=(0,S.getModularInstance)(e))instanceof Ff)return e._internalPath;if("string"==typeof e)return tp(t,e);throw ep("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zf=new RegExp("[~\\*/\\[\\]]");function tp(t,e,n){if(e.search(Zf)>=0)throw ep(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ff(...e.split("."))._internalPath}catch(i){throw ep(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ep(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Pl(Dl.INVALID_ARGUMENT,a+t+l)}function np(t,e){return t.some((t=>t.isEqual(e)))}
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
function ip(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function sp(t,e){const n=If(t.firestore,Lf),i=Df(t),s=ip(t.converter,e);return rp(n,[Kf($f(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,jc.exists(!1))]).then((()=>i))}function rp(t,e){return function(t,e){const n=new Ll;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=uf(t);try{const t=await function(t,e){const n=xl(t),i=$l.now(),s=e.reduce(((t,e)=>t.add(e.key)),_u());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=hu(),l=_u();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=zc(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Yc(t.key,e,$h(e.value.mapValue),jc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:du(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new fh(Wl)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await hf(i,t.changes),await qd(i.remoteStore)}catch(t){const e=Zd(t,"Failed to persist write");n.reject(e)}}(await vf(t),e,n))),n.promise}(Mf(t),e)}!function(t,e=!0){var n;n=b.SDK_VERSION,El=n,(0,b._registerComponent)(new(0,I.Component)("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Lf(i,new Fl(t.getProvider("auth-internal")),new Bl(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,b.registerVersion)("@firebase/firestore","3.4.10",t),(0,b.registerVersion)("@firebase/firestore","3.4.10","esm2017")}();o=s("iyB0E");const op=function(t=(0,b.getApp)()){return(0,b._getProvider)(t,"firestore").getImmediate()}(ls.default),ap=(0,hs.getAuth)(),lp={formWrap:document.querySelector(".form-auth"),loginForm:document.querySelector('[name="loginForm"]'),regForm:document.querySelector('[name="regForm"]'),regBtn:document.querySelector('[name="regBtn"]'),loginBtn:document.querySelector('[name="loginBtn"]'),libBtn:document.querySelector(".nav__library"),logoutBtn:document.querySelector('[name="logoutBtn"]'),homeBtn:document.querySelector(".nav__home")};lp.regForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements.emailReg.value.trim(),n=t.target.elements.passwordReg.value.trim();if(""===e||""===n)return void(lp.regForm.querySelector(".error").innerHTML="Input fields are not filled");(0,hs.createUserWithEmailAndPassword)(ap,e,n).then((async t=>{console.log(`New user registered ${t.user.email}`);try{await sp(xf(op,"users"),{email:e,password:n,watched:[],queue:[]});lp.regForm.querySelector(".error").innerHTML=""}catch(t){console.error("Error adding document: ",t)}})).catch((t=>{console.log(t.message),t.message.includes("email-already-in-use")?lp.regForm.querySelector(".error").innerHTML="Email already in use":t.message.includes("weak-password")&&(lp.regForm.querySelector(".error").innerHTML="Password should be at least 6 characters")}))})),lp.loginForm.addEventListener("submit",(async function(t){t.preventDefault();const e=t.target.elements.emailLogin.value.trim(),n=t.target.elements.passwordLogin.value.trim();if(""===e||""===n)return void(lp.loginForm.querySelector(".error").innerHTML="Input fields are not filled");await(0,hs.signInWithEmailAndPassword)(ap,e,n).then((()=>{lp.loginForm.querySelector(".error").innerHTML=""})).catch((t=>{console.log(t),t.message.includes("wrong-password")?lp.loginForm.querySelector(".error").innerHTML="Wrong password":t.message.includes("user-not-found)")?lp.loginForm.querySelector(".error").innerHTML="User email not found":t.message.includes("too-many-requests)")&&(lp.loginForm.querySelector(".error").innerHTML=" Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")}))})),lp.logoutBtn.addEventListener("click",(function(t){t.preventDefault(),(0,hs.signOut)(ap)})),lp.loginBtn.addEventListener("click",(function(){lp.loginForm.classList.remove("is-hidden"),lp.formWrap.classList.remove("is-hidden"),lp.regForm.classList.add("is-hidden"),lp.homeBtn.classList.remove("nav__current"),lp.loginBtn.classList.add("nav__current"),lp.regBtn.classList.remove("nav__current")})),lp.regBtn.addEventListener("click",(function(){lp.regForm.classList.remove("is-hidden"),lp.formWrap.classList.remove("is-hidden"),lp.loginForm.classList.add("is-hidden"),lp.regBtn.classList.add("nav__current"),lp.loginBtn.classList.remove("nav__current")})),(0,hs.onAuthStateChanged)(ap,(async t=>{t&&(lp.logoutBtn.classList.remove("is-hidden"),lp.libBtn.classList.remove("is-hidden"),lp.loginBtn.classList.add("is-hidden"),lp.regBtn.classList.add("is-hidden"),lp.regForm.classList.add("is-hidden"),lp.formWrap.classList.add("is-hidden"),lp.homeBtn.classList.add("nav__current")),t||(lp.loginBtn.classList.remove("is-hidden"),lp.regBtn.classList.remove("is-hidden"),lp.libBtn.classList.add("is-hidden"),lp.logoutBtn.classList.add("is-hidden"))}));y=s("eS71k");var hp=s("ejlBz"),cp=s("lEkuA");let up;const dp=document.querySelector(".movie-card-list");t(l).start(),(0,y.default)(dp),o.default.fetchGenresList().then((t=>{up=t})),o.default.fetchTrendData().then((t=>{const e=h(a(t.results,up));dp.insertAdjacentHTML("beforeend",e),ns(t.results);const n=document.querySelectorAll(".btn-watche"),i=document.querySelectorAll(".btn-queue");n.forEach((t=>{y.watchedArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Watched")}))})),i.forEach((t=>{y.queueArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Queue")}))})),g(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done(),dp.addEventListener("click",(async function(t){if(!t.target.dataset.target)return;const e=t.target.dataset.id,n=await o.default.fetchFullMovieInfo(e);if("watched"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Watched",void(0,hp.default)(n,y.watchedArr,t.target.dataset.target);t.target.textContent="Add to Watched",(0,cp.default)(e,y.watchedArr,t.target.dataset.target)}if("queue"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Queue",void(0,hp.default)(n,y.queueArr,t.target.dataset.target);t.target.textContent="Add to Queue",(0,cp.default)(e,y.queueArr,t.target.dataset.target)}}));
//# sourceMappingURL=index.ab1fcb91.js.map
