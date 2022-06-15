function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=e.parcelRequire37c5;null==s&&((s=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var s={id:t,exports:{}};return n[t]=s,e.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){i[t]=e},e.parcelRequire37c5=s),s("kyEFX").register(JSON.parse('{"5ZPII":"index.727f0995.js","5JHSy":"no-poster.325dd571.jpg","5UbS1":"index.3368ca06.css","84cAH":"index.0be73bd1.js"}')),s("cXP6Y"),s("kcHu4");var r,o=s("iyB0E");r=new URL(s("kyEFX").resolve("5JHSy"),import.meta.url).toString();function a(e,n){const i=null==n?void 0:n.genres;return e.map((({poster_path:e,original_title:n,release_date:s,genre_ids:o,id:a})=>{""===n&&(n="Sorry, no title for the movie."),s||(s="Expected");const l=o.reduce(((t,e,n)=>{if(!o.length)return t;if(n<=1){const s=null==i?void 0:i.find((({id:t})=>t===e));return n<=o.length-2?t+(null==s?void 0:s.name)+", ":t+(null==s?void 0:s.name)+" "}return 2===n?t+"Others":t}),""),h=i?l:"Other",c=null==s?void 0:s.split("-").slice(0,1);return{id:a,imagePoster:e?`https://image.tmdb.org/t/p/w500${e}`:t(r),original_title:n,releaseYear:c,fullGenresNames:h}}))}o=s("iyB0E"),o=s("iyB0E");var l=s("k6WP2");function h(t){return t.map((({id:t,imagePoster:e,original_title:n,releaseYear:i,fullGenresNames:s})=>`<li  class="movie-card-item">\n    \t\t\t\t<div class="movie-poster__container">\n    \t\t\t\t\t<img src="${e}" alt="poster" class="imagePoster" data-id="${t}"/>\n\t\t\t\t\t\t<div class="btn-box gallery">\n\t\t\t\t\t\t\t<button class="btn-watche gallery-btn" data-id="${t}" data-target="watched">add to <br class="transfer" />Watched</button>\n\t\t\t\t\t\t\t<button class="btn-queue gallery-btn" data-id="${t}" data-target="queue">add to queue</button>\n\t\t\t\t  \t\t</div> \n    \t\t\t\t</div>\n    \t\t\t\t<div class="movie-card-item__info">\n    \t\t\t\t\t<h2 class="movie-card-item__title" data-id="${t}">${n}</h2>\n    \t\t\t\t\t<p class="movie-card-item__text">${s} | ${i} </p>\n    \t\t\t\t</div>\n\t\t\t\t\t\t\n    \t\t\t</li>`)).join("")}const c=document.querySelector(".movie-card-list"),u=document.querySelector(".pagination");let d,f=0;function p(t,e){let n="",i=e-2,s=e-1,r=e+1,o=e+2;f=e,t<=1||(e>1&&(n+='<li class="pagination-item pagination-arrow">&laquo</li>'),e>3&&(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+='<li class="pagination-item pagination-pages">1</li>')),e>2&&(!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e>4&&(n+='<li class="pagination-item">...</li>'),i>0&&(n+=`<li class="pagination-item pagination-pages">${i}</li>`)),s>0&&(n+=`<li class="pagination-item pagination-pages">${s}</li>`),n+=`<li class="pagination-item pagination-pages current-page">${e}</li>`,e<t&&(n+=`<li class="pagination-item pagination-pages">${r}</li>`),e<t-1&&(e<t-2&&(n+=`<li class="pagination-item pagination-pages">${o}</li>`,!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&e<t-3&&(n+='<li class="pagination-item">...</li>')),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||(n+=`<li class="pagination-item pagination-pages">${t}</li>`)),e<t&&(n+='<li class="pagination-item pagination-arrow">&raquo</li>'),u.innerHTML=n,u.addEventListener("click",g))}function g(e){if("LI"!==e.target.nodeName)return;const n=e.target.textContent;switch(n){case"«":f-=1;break;case"»":f+=1;break;case"...":return;default:f=n}c.innerHTML="",t(l).start(),o.default.fetchGenresList().then((t=>{d=t})),o.input.value?o.default.movieSearch(f).then((e=>{t(l).done();const n=h(a(e.results,d));c.insertAdjacentHTML("beforeend",n),p(e.total_pages,e.page)})).catch((t=>console.log(t))):(o.default.fetchTrendData(f).then((t=>{const e=h(a(t.results,d));c.insertAdjacentHTML("beforeend",e),p(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done())}var m=s("idPZz");l=s("k6WP2");s("ahn2g");var y=s("ix4Jr"),_=s("4a6xH"),v=s("ffjl9"),w=s("7vF8m"),C=s("4TNnu");
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
 */let E="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class T{set(t,e){null==e?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),(0,v.stringify)(e))}get(t){const e=this.domStorage_.getItem(this.prefixedName_(t));return null==e?null:(0,v.jsonEval)(e)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}constructor(t){this.domStorage_=t,this.prefix_="firebase:"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{set(t,e){null==e?delete this.cache_[t]:this.cache_[t]=e}get(t){return(0,v.contains)(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}constructor(){this.cache_={},this.isInMemoryStorage=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t){try{if("undefined"!=typeof window&&void 0!==window[t]){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new T(e)}}catch(t){}return new b},S=I("localStorage"),N=I("sessionStorage"),k=new(0,w.Logger)("@firebase/database"),A=function(){let t=1;return function(){return t++}}(),R=function(t){const e=(0,v.stringToByteArray)(t),n=new(0,v.Sha1);n.update(e);const i=n.digest();return v.base64.encodeByteArray(i)},x=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?e+=x.apply(null,i):e+="object"==typeof i?(0,v.stringify)(i):i,e+=" "}return e};let D=null,P=!0;const L=function(t,e){(0,v.assert)(!e||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(k.logLevel=w.LogLevel.VERBOSE,D=k.log.bind(k),e&&N.set("logging_enabled",!0)):"function"==typeof t?D=t:(D=null,N.remove("logging_enabled"))},M=function(...t){if(!0===P&&(P=!1,null===D&&!0===N.get("logging_enabled")&&L(!0)),D){const e=x.apply(null,t);D(e)}},O=function(t){return function(...e){M(t,...e)}},F=function(...t){const e="FIREBASE INTERNAL ERROR: "+x(...t);k.error(e)},V=function(...t){const e=`FIREBASE FATAL ERROR: ${x(...t)}`;throw k.error(e),new Error(e)},U=function(...t){const e="FIREBASE WARNING: "+x(...t);k.warn(e)},q=function(t){return"number"==typeof t&&(t!=t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},B=function(t,e){if(t===e)return 0;if("[MIN_NAME]"===t||"[MAX_NAME]"===e)return-1;if("[MIN_NAME]"===e||"[MAX_NAME]"===t)return 1;{const n=Q(t),i=Q(e);return null!==n?null!==i?n-i==0?t.length-e.length:n-i:-1:null!==i?1:t<e?-1:1}},j=function(t,e){return t===e?0:t<e?-1:1},H=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+(0,v.stringify)(e))},W=function(t){if("object"!=typeof t||null===t)return(0,v.stringify)(t);const e=[];for(const n in t)e.push(n);e.sort();let n="{";for(let i=0;i<e.length;i++)0!==i&&(n+=","),n+=(0,v.stringify)(e[i]),n+=":",n+=W(t[e[i]]);return n+="}",n},G=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let s=0;s<n;s+=e)s+e>n?i.push(t.substring(s,n)):i.push(t.substring(s,s+e));return i};function K(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const $=function(t){(0,v.assert)(!q(t),"Invalid JSON number");const e=1023;let n,i,s,r,o;0===t?(i=0,s=0,n=1/t==-1/0?1:0):(n=t<0,(t=Math.abs(t))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(t)/Math.LN2),e),i=r+e,s=Math.round(t*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(t/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let h="";for(o=0;o<64;o+=8){let t=parseInt(l.substr(o,8),2).toString(16);1===t.length&&(t="0"+t),h+=t}return h.toLowerCase()};const z=new RegExp("^-?(0*)\\d{1,10}$"),Q=function(t){if(z.test(t)){const e=Number(t);if(e>=-2147483648&&e<=2147483647)return e}return null},X=function(t){try{t()}catch(t){setTimeout((()=>{const e=t.stack||"";throw U("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Y=function(t,e){const n=setTimeout(t,e);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class J{getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise(((e,n)=>{setTimeout((()=>{this.appCheck?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){var e;null===(e=this.appCheckProvider)||void 0===e||e.get().then((e=>e.addTokenListener(t)))}notifyForInvalidToken(){U(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}constructor(t,e){this.appName_=t,this.appCheckProvider=e,this.appCheck=null==e?void 0:e.getImmediate({optional:!0}),this.appCheck||null==e||e.get().then((t=>this.appCheck=t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{getToken(t){return this.auth_?this.auth_.getToken(t).catch((t=>t&&"auth/token-not-initialized"===t.code?(M("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t))):new Promise(((e,n)=>{setTimeout((()=>{this.auth_?this.getToken(t).then(e,n):e(null)}),0)}))}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then((e=>e.addAuthTokenListener(t)))}removeTokenChangeListener(t){this.authProvider_.get().then((e=>e.removeAuthTokenListener(t)))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',U(t)}constructor(t,e,n){this.appName_=t,this.firebaseOptions_=e,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((t=>this.auth_=t))}}class tt{getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}constructor(t){this.accessToken=t}}tt.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const et=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class nt{isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&S.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",e=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${e}`}constructor(t,e,n,i,s=!1,r="",o=!1){this.secure=e,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=S.get("host:"+t)||this._host}}function it(t,e,n){let i;if((0,v.assert)("string"==typeof e,"typeof type must == string"),(0,v.assert)("object"==typeof n,"typeof params must == object"),"websocket"===e)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else{if("long_polling"!==e)throw new Error("Unknown connection type: "+e);i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?"}(function(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams})(t)&&(n.ns=t.namespace);const s=[];return K(n,((t,e)=>{s.push(t+"="+e)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{incrementCounter(t,e=1){(0,v.contains)(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=e}get(){return(0,v.deepCopy)(this.counters_)}constructor(){this.counters_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt={},ot={};function at(t){const e=t.toString();return rt[e]||(rt[e]=new st),rt[e]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class lt{closeAfter(t,e){this.closeAfterResponse=t,this.onClose=e,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,e){for(this.pendingResponses[t]=e;this.pendingResponses[this.currentResponseNum];){const t=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let e=0;e<t.length;++e)t[e]&&X((()=>{this.onMessage_(t[e])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{open(t,e){this.curSegmentNum=0,this.onDisconnect_=e,this.myPacketOrderer=new lt(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(t){if((0,v.isNodeSdk)()||"complete"===document.readyState)t();else{let e=!1;const n=function(){document.body?e||(e=!0,t()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new ct(((...t)=>{const[e,n,i,s,r]=t;if(this.incrementIncomingBytes_(t),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===e)this.id=n,this.password=i;else{if("close"!==e)throw new Error("Unrecognized command received: "+e);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...t)=>{const[e,n]=t;this.incrementIncomingBytes_(t),this.myPacketOrderer.handleResponse(e,n)}),(()=>{this.onClosed_()}),this.urlFn);const t={start:"t"};t.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(t.cb=this.scriptTagHolder.uniqueCallbackIdentifier),t.v="5",this.transportSessionId&&(t.s=this.transportSessionId),this.lastSessionId&&(t.ls=this.lastSessionId),this.applicationId&&(t.p=this.applicationId),this.appCheckToken&&(t.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&et.test(location.hostname)&&(t.r="f");const e=this.urlFn(t);this.log_("Connecting via long-poll to "+e),this.scriptTagHolder.addTag(e,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ht.forceAllow_=!0}static forceDisallow(){ht.forceDisallow_=!0}static isAvailable(){return!(0,v.isNodeSdk)()&&(!!ht.forceAllow_||!(ht.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const e=(0,v.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=(0,v.base64Encode)(e),i=G(n,1840);for(let t=0;t<i.length;t++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[t]),this.curSegmentNum++}addDisconnectPingFrame(t,e){if((0,v.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=t,n.pw=e,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const e=(0,v.stringify)(t).length;this.bytesReceived+=e,this.stats_.incrementCounter("bytes_received",e)}constructor(t,e,n,i,s,r,o){this.connId=t,this.repoInfo=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=O(t),this.stats_=at(e),this.urlFn=t=>(this.appCheckToken&&(t.ac=this.appCheckToken),it(e,"long_polling",t))}}class ct{static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(t);try{t.contentWindow.document||M("No IE domain setting required")}catch(e){const n=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,e){for(this.myID=t,this.myPW=e,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t.id=this.myID,t.pw=this.myPW,t.ser=this.currentSerial;let e=this.urlFn(t),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const t=this.pendingSegs.shift();n=n+"&seg"+i+"="+t.seg+"&ts"+i+"="+t.ts+"&d"+i+"="+t.d,i++}}return e+=n,this.addLongPollTag_(e,this.currentSerial),!0}return!1}enqueueSegment(t,e,n){this.pendingSegs.push({seg:t,ts:e,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(t,e){this.outstandingRequests.add(e);const n=()=>{this.outstandingRequests.delete(e),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(t,(()=>{clearTimeout(i),n()}))}addTag(t,e){(0,v.isNodeSdk)()?this.doNodeLongPoll(t,e):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=t,n.onload=n.onreadystatechange=function(){const t=n.readyState;t&&"loaded"!==t&&"complete"!==t||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),e())},n.onerror=()=>{M("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(t){}}),Math.floor(1))}constructor(t,e,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,v.isNodeSdk)())this.commandCB=t,this.onMessageCB=e;else{this.uniqueCallbackIdentifier=A(),window["pLPCommand"+this.uniqueCallbackIdentifier]=t,window["pRTLPCB"+this.uniqueCallbackIdentifier]=e,this.myIFrame=ct.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(t){M("frame writing exception"),t.stack&&M(t.stack),M(t)}}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ut=null;"undefined"!=typeof MozWebSocket?ut=MozWebSocket:"undefined"!=typeof WebSocket&&(ut=WebSocket);class dt{static connectionURL_(t,e,n,i,s){const r={v:"5"};return!(0,v.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&et.test(location.hostname)&&(r.r="f"),e&&(r.s=e),n&&(r.ls=n),i&&(r.ac=i),s&&(r.p=s),it(t,"websocket",r)}open(t,e){this.onDisconnect=e,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,S.set("previous_websocket_failure",!0);try{let t;if((0,v.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node",e={headers:{"User-Agent":`Firebase/5/${E}/${C.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}};this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ut(this.connURL,[],t)}catch(t){this.log_("Error instantiating WebSocket.");const e=t.message||t.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=t=>{this.handleIncomingFrame(t)},this.mySock.onerror=t=>{this.log_("WebSocket error.  Closing connection.");const e=t.message||t.data;e&&this.log_(e),this.onClosed_()}}start(){}static forceDisallow(){dt.forceDisallow_=!0}static isAvailable(){let t=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const e=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(e);n&&n.length>1&&parseFloat(n[1])<4.4&&(t=!0)}return!t&&null!==ut&&!dt.forceDisallow_}static previouslyFailed(){return S.isInMemoryStorage||!0===S.get("previous_websocket_failure")}markConnectionHealthy(){S.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const e=(0,v.jsonEval)(t);this.onMessage(e)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if((0,v.assert)(null===this.frames,"We already have a frame buffer"),t.length<=6){const e=Number(t);if(!isNaN(e))return this.handleNewFrameCount_(e),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(null===this.mySock)return;const e=t.data;if(this.bytesReceived+=e.length,this.stats_.incrementCounter("bytes_received",e.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(e);else{const t=this.extractFrameCount_(e);null!==t&&this.appendFrame_(t)}}send(t){this.resetKeepAlive();const e=(0,v.stringify)(t);this.bytesSent+=e.length,this.stats_.incrementCounter("bytes_sent",e.length);const n=G(e,16384);n.length>1&&this.sendString_(String(n.length));for(let t=0;t<n.length;t++)this.sendString_(n[t])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(t){try{this.mySock.send(t)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}constructor(t,e,n,i,s,r,o){this.connId=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=O(this.connId),this.stats_=at(e),this.connURL=dt.connectionURL_(e,r,o,i,n),this.nodeAdmin=e.nodeAdmin}}dt.responsesRequiredToBeHealthy=2,dt.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ft{static get ALL_TRANSPORTS(){return[ht,dt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const e=dt&&dt.isAvailable();let n=e&&!dt.previouslyFailed();if(t.webSocketOnly&&(e||U("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[dt];else{const t=this.transports_=[];for(const e of ft.ALL_TRANSPORTS)e&&e.isAvailable()&&t.push(e);ft.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}constructor(t){this.initTransports_(t)}}ft.globalTransportInitialized_=!1;class pt{start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(e,n)}),Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Y((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return e=>{t===this.conn_?this.onConnectionLost_(e):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return e=>{2!==this.state_&&(t===this.rx_?this.onPrimaryMessageReceived_(e):t===this.secondaryConn_?this.onSecondaryMessageReceived_(e):this.log_("message on old connection"))}}sendRequest(t){const e={t:"d",d:t};this.sendData_(e)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if("t"in t){const e=t.t;"a"===e?this.upgradeIfSecondaryHealthy_():"r"===e?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===e&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const e=H("t",t),n=H("d",t);if("c"===e)this.onSecondaryControl_(n);else{if("d"!==e)throw new Error("Unknown protocol layer: "+e);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const e=H("t",t),n=H("d",t);"c"===e?this.onControl_(n):"d"===e&&this.onDataMessage_(n)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const e=H("t",t);if("d"in t){const n=t.d;if("h"===e)this.onHandshake_(n);else if("n"===e){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let t=0;t<this.pendingDataMessages.length;++t)this.onDataMessage_(this.pendingDataMessages[t]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===e?this.onConnectionShutdown_(n):"r"===e?this.onReset_(n):"e"===e?F("Server Error: "+n):"o"===e?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):F("Unknown control packet command: "+e)}}onHandshake_(t){const e=t.ts,n=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,e),"5"!==n&&U("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const e=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(e,n),Y((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,e){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(e,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Y((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==t&&this.rx_!==t||this.close()}onConnectionLost_(t){this.conn_=null,t||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(S.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(t)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}constructor(t,e,n,i,s,r,o,a,l,h){this.id=t,this.repoInfo_=e,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=O("c:"+this.id+":"),this.transportManager_=new ft(e),this.log_("Connection created"),this.start_()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{put(t,e,n,i){}merge(t,e,n,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,e,n){}onDisconnectMerge(t,e,n){}onDisconnectCancel(t,e){}reportStats(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{trigger(t,...e){if(Array.isArray(this.listeners_[t])){const n=[...this.listeners_[t]];for(let t=0;t<n.length;t++)n[t].callback.apply(n[t].context,e)}}on(t,e,n){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:e,context:n});const i=this.getInitialEvent(t);i&&e.apply(n,i)}off(t,e,n){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let t=0;t<i.length;t++)if(i[t].callback===e&&(!n||n===i[t].context))return void i.splice(t,1)}validateEventType_(t){(0,v.assert)(this.allowedEvents_.find((e=>e===t)),"Unknown event: "+t)}constructor(t){this.allowedEvents_=t,this.listeners_={},(0,v.assert)(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends mt{static getInstance(){return new yt}getInitialEvent(t){return(0,v.assert)("online"===t,"Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,v.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{toString(){let t="";for(let e=this.pieceNum_;e<this.pieces_.length;e++)""!==this.pieces_[e]&&(t+="/"+this.pieces_[e]);return t||"/"}constructor(t,e){if(void 0===e){this.pieces_=t.split("/");let e=0;for(let t=0;t<this.pieces_.length;t++)this.pieces_[t].length>0&&(this.pieces_[e]=this.pieces_[t],e++);this.pieces_.length=e,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=e}}function vt(){return new _t("")}function wt(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ct(t){return t.pieces_.length-t.pieceNum_}function Et(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new _t(t.pieces_,e)}function Tt(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bt(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function It(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new _t(e,0)}function St(t,e){const n=[];for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);if(e instanceof _t)for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);else{const t=e.split("/");for(let e=0;e<t.length;e++)t[e].length>0&&n.push(t[e])}return new _t(n,0)}function Nt(t){return t.pieceNum_>=t.pieces_.length}function kt(t,e){const n=wt(t),i=wt(e);if(null===n)return e;if(n===i)return kt(Et(t),Et(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function At(t,e){if(Ct(t)!==Ct(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function Rt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(Ct(t)>Ct(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class xt{constructor(t,e){this.errorPrefix_=e,this.parts_=bt(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let t=0;t<this.parts_.length;t++)this.byteLength_+=(0,v.stringLength)(this.parts_[t]);Dt(this)}}function Dt(t){if(t.byteLength_>768)throw new Error(t.errorPrefix_+"has a key path longer than 768 bytes ("+t.byteLength_+").");if(t.parts_.length>32)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Pt(t))}function Pt(t){return 0===t.parts_.length?"":"in property '"+t.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends mt{static getInstance(){return new Lt}getInitialEvent(t){return(0,v.assert)("visible"===t,"Unknown event type: "+t),[this.visible_]}constructor(){let t,e;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(e="visibilitychange",t="hidden"):void 0!==document.mozHidden?(e="mozvisibilitychange",t="mozHidden"):void 0!==document.msHidden?(e="msvisibilitychange",t="msHidden"):void 0!==document.webkitHidden&&(e="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,e&&document.addEventListener(e,(()=>{const e=!document[t];e!==this.visible_&&(this.visible_=e,this.trigger("visible",e))}),!1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt extends gt{sendRequest(t,e,n){const i=++this.requestNumber_,s={r:i,a:t,b:e};this.log_((0,v.stringify)(s)),(0,v.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(t){this.initConnection_();const e=new(0,v.Deferred),n={p:t._path.toString(),q:t._queryObject},i={action:"g",request:n,onComplete:t=>{const i=t.d;"ok"===t.s?(this.onDataUpdate_(n.p,i,!1,null),e.resolve(i)):e.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const t=this.outstandingGets_[s];void 0!==t&&i===t&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),e.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),e.promise}listen(t,e,n,i){this.initConnection_();const s=t._queryIdentifier,r=t._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,v.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,v.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:e,query:t,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(t){const e=this.outstandingGets_[t];this.sendRequest("g",e.request,(n=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),e.onComplete&&e.onComplete(n)}))}sendListen_(t){const e=t.query,n=e._path.toString(),i=e._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};t.tag&&(s.q=e._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Mt.warnOnListenWarnings_(r,e);(this.listens.get(n)&&this.listens.get(n).get(i))===t&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),t.onComplete&&t.onComplete(o,r))}))}static warnOnListenWarnings_(t,e){if(t&&"object"==typeof t&&(0,v.contains)(t,"w")){const n=(0,v.safeGet)(t,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const t='".indexOn": "'+e._queryParams.getIndex().toString()+'"',n=e._path.toString();U(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${t} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&40===t.length||(0,v.isAdmin)(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,e=(0,v.isValidFormat)(t)?"auth":"gauth",n={cred:t};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(e,n,(e=>{const n=e.s,i=e.d||"error";this.authToken_===t&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(t=>{const e=t.s,n=t.d||"error";"ok"===e?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(e,n)}))}unlisten(t,e){const n=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,v.assert)(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,t._queryObject,e)}sendUnlisten_(t,e,n,i){this.log_("Unlisten on "+t+" for "+e);const s={p:t};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:e,onComplete:n})}onDisconnectMerge(t,e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,e,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:e,onComplete:n})}onDisconnectCancel(t,e){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,e):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:e})}sendOnDisconnect_(t,e,n,i){const s={p:e,d:n};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,(t=>{i&&setTimeout((()=>{i(t.s,t.d)}),Math.floor(0))}))}put(t,e,n,i){this.putInternal("p",t,e,n,i)}merge(t,e,n,i){this.putInternal("m",t,e,n,i)}putInternal(t,e,n,i,s){this.initConnection_();const r={p:e,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:t,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+e)}sendPut_(t){const e=this.outstandingPuts_[t].action,n=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(e,n,(n=>{this.log_(e+" response",n),delete this.outstandingPuts_[t],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(t){if(this.connected_){const e={c:t};this.log_("reportStats",e),this.sendRequest("s",e,(t=>{if("ok"!==t.s){const e=t.d;this.log_("reportStats","Error sending stats: "+e)}}))}}onDataMessage_(t){if("r"in t){this.log_("from server: "+(0,v.stringify)(t));const e=t.r,n=this.requestCBHash_[e];n&&(delete this.requestCBHash_[e],n(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,e){this.log_("handleServerMessage",t,e),"d"===t?this.onDataUpdate_(e.p,e.d,!1,e.t):"m"===t?this.onDataUpdate_(e.p,e.d,!0,e.t):"c"===t?this.onListenRevoked_(e.p,e.q):"ac"===t?this.onAuthRevoked_(e.s,e.d):"apc"===t?this.onAppCheckRevoked_(e.s,e.d):"sd"===t?this.onSecurityDebugPacket_(e):F("Unrecognized action received from server: "+(0,v.stringify)(t)+"\nAre you using the latest client?")}onReady_(t,e){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(t),this.lastSessionId=e,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){(0,v.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const t=(new Date).getTime()-this.lastConnectionAttemptTime_;let e=Math.max(0,this.reconnectDelay_-t);e=Math.random()*e,this.log_("Trying to reconnect in "+e+"ms"),this.scheduleConnect_(e),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),e=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Mt.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(t){(0,v.assert)(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(t)};this.realtime_={close:a,sendRequest:l};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);r?M("getToken() completed but was canceled"):(M("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new pt(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,e,n,(t=>{U(t+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(t){this.log_("Failed to get token: "+t),r||(this.repoInfo_.nodeAdmin&&U(t),a())}}}interrupt(t){M("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){M("Resuming connection for reason: "+t),delete this.interruptReasons_[t],(0,v.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const e=t-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:e})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const e=this.outstandingPuts_[t];e&&"h"in e.request&&e.queued&&(e.onComplete&&e.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(t,e){let n;n=e?e.map((t=>W(t))).join("$"):"default";const i=this.removeListen_(t,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,e){const n=new _t(t).toString();let i;if(this.listens.has(n)){const t=this.listens.get(n);i=t.get(e),t.delete(e),0===t.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(t,e){M("Auth token revoked: "+t+"/"+e),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,e){M("App check token revoked: "+t+"/"+e),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==t&&"permission_denied"!==t||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const e of t.values())this.sendListen_(e);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let e="js";(0,v.isNodeSdk)()&&(e=this.repoInfo_.nodeAdmin?"admin_node":"node"),t["sdk."+e+"."+E.replace(/\./g,"-")]=1,(0,v.isMobileCordova)()?t["framework.cordova"]=1:(0,v.isReactNative)()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=yt.getInstance().currentlyOnline();return(0,v.isEmpty)(this.interruptReasons_)&&t}constructor(t,e,n,i,s,r,o,a){if(super(),this.repoInfo_=t,this.applicationId_=e,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Mt.nextPersistentConnectionId_++,this.log_=O("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!(0,v.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Lt.getInstance().on("visible",this.onVisible_,this),-1===t.host.indexOf("fblocal")&&yt.getInstance().on("online",this.onOnline_,this)}}Mt.nextPersistentConnectionId_=0,Mt.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ot{static Wrap(t,e){return new Ot(t,e)}constructor(t,e){this.name=t,this.node=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,e){const n=new Ot("[MIN_NAME]",t),i=new Ot("[MIN_NAME]",e);return 0!==this.compare(n,i)}minPost(){return Ot.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt;class Ut extends Ft{static get __EMPTY_NODE(){return Vt}static set __EMPTY_NODE(t){Vt=t}compare(t,e){return B(t.name,e.name)}isDefinedOn(t){throw(0,v.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,e){return!1}minPost(){return Ot.MIN}maxPost(){return new Ot("[MAX_NAME]",Vt)}makePost(t,e){return(0,v.assert)("string"==typeof t,"KeyIndex indexValue must always be a string."),new Ot(t,Vt)}toString(){return".key"}}const qt=new Ut;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{getNext(){if(0===this.nodeStack_.length)return null;let t,e=this.nodeStack_.pop();if(t=this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}constructor(t,e,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!t.isEmpty();)if(r=e?n(t.key,e):1,i&&(r*=-1),r<0)t=this.isReverse_?t.left:t.right;else{if(0===r){this.nodeStack_.push(t);break}this.nodeStack_.push(t),t=this.isReverse_?t.right:t.left}}}class jt{copy(t,e,n,i,s){return new jt(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ht.EMPTY_NODE;let t=this;return t.left.isRed_()||t.left.left.isRed_()||(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,e){let n,i;if(n=this,e(t,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(t,e),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===e(t,n.key)){if(n.right.isEmpty())return Ht.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(t,e))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:jt.RED,this.left=null!=i?i:Ht.EMPTY_NODE,this.right=null!=s?s:Ht.EMPTY_NODE}}jt.RED=!0,jt.BLACK=!1;class Ht{insert(t,e){return new Ht(this.comparator_,this.root_.insert(t,e,this.comparator_).copy(null,null,jt.BLACK,null,null))}remove(t){return new Ht(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,jt.BLACK,null,null))}get(t){let e,n=this.root_;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e)return n.value;e<0?n=n.left:e>0&&(n=n.right)}return null}getPredecessorKey(t){let e,n=this.root_,i=null;for(;!n.isEmpty();){if(e=this.comparator_(t,n.key),0===e){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}e<0?n=n.left:e>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Bt(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,e){return new Bt(this.root_,t,this.comparator_,!1,e)}getReverseIteratorFrom(t,e){return new Bt(this.root_,t,this.comparator_,!0,e)}getReverseIterator(t){return new Bt(this.root_,null,this.comparator_,!0,t)}constructor(t,e=Ht.EMPTY_NODE){this.comparator_=t,this.root_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Wt(t,e){return B(t.name,e.name)}function Gt(t,e){return B(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kt;Ht.EMPTY_NODE=new class{copy(t,e,n,i,s){return this}insert(t,e,n){return new jt(t,e,null)}remove(t,e){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const $t=function(t){return"number"==typeof t?"number:"+$(t):"string:"+t},zt=function(t){if(t.isLeafNode()){const e=t.val();(0,v.assert)("string"==typeof e||"number"==typeof e||"object"==typeof e&&(0,v.contains)(e,".sv"),"Priority must be a string or number.")}else(0,v.assert)(t===Kt||t.isEmpty(),"priority of unexpected type.");(0,v.assert)(t===Kt||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
let Qt,Xt,Yt;class Jt{static set __childrenNodeConstructor(t){Qt=t}static get __childrenNodeConstructor(){return Qt}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Jt(this.value_,t)}getImmediateChild(t){return".priority"===t?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return Nt(t)?this:".priority"===wt(t)?this.priorityNode_:Jt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,e){return null}updateImmediateChild(t,e){return".priority"===t?this.updatePriority(e):e.isEmpty()&&".priority"!==t?this:Jt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,e).updatePriority(this.priorityNode_)}updateChild(t,e){const n=wt(t);return null===n?e:e.isEmpty()&&".priority"!==n?this:((0,v.assert)(".priority"!==n||1===Ct(t),".priority must be the last token in a path"),this.updateImmediateChild(n,Jt.__childrenNodeConstructor.EMPTY_NODE.updateChild(Et(t),e)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,e){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+$t(this.priorityNode_.val())+":");const e=typeof this.value_;t+=e+":",t+="number"===e?$(this.value_):this.value_,this.lazyHash_=R(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Jt.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Jt.__childrenNodeConstructor?-1:((0,v.assert)(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const e=typeof t.value_,n=typeof this.value_,i=Jt.VALUE_TYPE_ORDER.indexOf(e),s=Jt.VALUE_TYPE_ORDER.indexOf(n);return(0,v.assert)(i>=0,"Unknown leaf type: "+e),(0,v.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const e=t;return this.value_===e.value_&&this.priorityNode_.equals(e.priorityNode_)}return!1}constructor(t,e=Jt.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=e,this.lazyHash_=null,(0,v.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),zt(this.priorityNode_)}}Jt.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Zt=new class extends Ft{compare(t,e){const n=t.node.getPriority(),i=e.node.getPriority(),s=n.compareTo(i);return 0===s?B(t.name,e.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,e){return!t.getPriority().equals(e.getPriority())}minPost(){return Ot.MIN}maxPost(){return new Ot("[MAX_NAME]",new Jt("[PRIORITY-POST]",Yt))}makePost(t,e){const n=Xt(t);return new Ot(e,new Jt("[PRIORITY-POST]",n))}toString(){return".priority"}},te=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}constructor(t){var e;this.count=(e=t+1,parseInt(Math.log(e)/te,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=t+1&n}}const ne=function(t,e,n,i){t.sort(e);const s=function(e,i){const r=i-e;let o,a;if(0===r)return null;if(1===r)return o=t[e],a=n?n(o):o,new jt(a,o.node,jt.BLACK,null,null);{const l=parseInt(r/2,10)+e,h=s(e,l),c=s(l+1,i);return o=t[l],a=n?n(o):o,new jt(a,o.node,jt.BLACK,h,c)}},r=function(e){let i=null,r=null,o=t.length;const a=function(e,i){const r=o-e,a=o;o-=e;const h=s(r+1,a),c=t[r],u=n?n(c):c;l(new jt(u,c.node,i,null,h))},l=function(t){i?(i.left=t,i=t):(r=t,i=t)};for(let t=0;t<e.count;++t){const n=e.nextBitIsOne(),i=Math.pow(2,e.count-(t+1));n?a(i,jt.BLACK):(a(i,jt.BLACK),a(i,jt.RED))}return r}(new ee(t.length));return new Ht(i||e,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ie;const se={};class re{static get Default(){return(0,v.assert)(se&&Zt,"ChildrenNode.ts has not been loaded"),ie=ie||new re({".priority":se},{".priority":Zt}),ie}get(t){const e=(0,v.safeGet)(this.indexes_,t);if(!e)throw new Error("No index defined for "+t);return e instanceof Ht?e:null}hasIndex(t){return(0,v.contains)(this.indexSet_,t.toString())}addIndex(t,e){(0,v.assert)(t!==qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=e.getIterator(Ot.Wrap);let r,o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ne(n,t.getCompare()):se;const a=t.toString(),l=Object.assign({},this.indexSet_);l[a]=t;const h=Object.assign({},this.indexes_);return h[a]=r,new re(h,l)}addToIndexes(t,e){const n=(0,v.map)(this.indexes_,((n,i)=>{const s=(0,v.safeGet)(this.indexSet_,i);if((0,v.assert)(s,"Missing index implementation for "+i),n===se){if(s.isDefinedOn(t.node)){const n=[],i=e.getIterator(Ot.Wrap);let r=i.getNext();for(;r;)r.name!==t.name&&n.push(r),r=i.getNext();return n.push(t),ne(n,s.getCompare())}return se}{const i=e.get(t.name);let s=n;return i&&(s=s.remove(new Ot(t.name,i))),s.insert(t,t.node)}}));return new re(n,this.indexSet_)}removeFromIndexes(t,e){const n=(0,v.map)(this.indexes_,(n=>{if(n===se)return n;{const i=e.get(t.name);return i?n.remove(new Ot(t.name,i)):n}}));return new re(n,this.indexSet_)}constructor(t,e){this.indexes_=t,this.indexSet_=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oe;class ae{static get EMPTY_NODE(){return oe||(oe=new ae(new Ht(Gt),null,re.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oe}updatePriority(t){return this.children_.isEmpty()?this:new ae(this.children_,t,this.indexMap_)}getImmediateChild(t){if(".priority"===t)return this.getPriority();{const e=this.children_.get(t);return null===e?oe:e}}getChild(t){const e=wt(t);return null===e?this:this.getImmediateChild(e).getChild(Et(t))}hasChild(t){return null!==this.children_.get(t)}updateImmediateChild(t,e){if((0,v.assert)(e,"We should always be passing snapshot nodes"),".priority"===t)return this.updatePriority(e);{const n=new Ot(t,e);let i,s;e.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(t,e),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?oe:this.priorityNode_;return new ae(i,r,s)}}updateChild(t,e){const n=wt(t);if(null===n)return e;{(0,v.assert)(".priority"!==wt(t)||1===Ct(t),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Et(t),e);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const e={};let n=0,i=0,s=!0;if(this.forEachChild(Zt,((r,o)=>{e[r]=o.val(t),n++,s&&ae.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!t&&s&&i<2*n){const t=[];for(const n in e)t[n]=e[n];return t}return t&&!this.getPriority().isEmpty()&&(e[".priority"]=this.getPriority().val()),e}hash(){if(null===this.lazyHash_){let t="";this.getPriority().isEmpty()||(t+="priority:"+$t(this.getPriority().val())+":"),this.forEachChild(Zt,((e,n)=>{const i=n.hash();""!==i&&(t+=":"+e+":"+i)})),this.lazyHash_=""===t?"":R(t)}return this.lazyHash_}getPredecessorChildName(t,e,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Ot(t,e));return n?n.name:null}return this.children_.getPredecessorKey(t)}getFirstChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.minKey();return t&&t.name}return this.children_.minKey()}getFirstChild(t){const e=this.getFirstChildName(t);return e?new Ot(e,this.children_.get(e)):null}getLastChildName(t){const e=this.resolveIndex_(t);if(e){const t=e.maxKey();return t&&t.name}return this.children_.maxKey()}getLastChild(t){const e=this.getLastChildName(t);return e?new Ot(e,this.children_.get(e)):null}forEachChild(t,e){const n=this.resolveIndex_(t);return n?n.inorderTraversal((t=>e(t.name,t.node))):this.children_.inorderTraversal(e)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getIteratorFrom(t,(t=>t));{const n=this.children_.getIteratorFrom(t.name,Ot.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,e){const n=this.resolveIndex_(e);if(n)return n.getReverseIteratorFrom(t,(t=>t));{const n=this.children_.getReverseIteratorFrom(t.name,Ot.Wrap);let i=n.peek();for(;null!=i&&e.compare(i,t)>0;)n.getNext(),i=n.peek();return n}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===le?-1:0}withIndex(t){if(t===qt||this.indexMap_.hasIndex(t))return this;{const e=this.indexMap_.addIndex(t,this.children_);return new ae(this.children_,this.priorityNode_,e)}}isIndexed(t){return t===qt||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const e=t;if(this.getPriority().equals(e.getPriority())){if(this.children_.count()===e.children_.count()){const t=this.getIterator(Zt),n=e.getIterator(Zt);let i=t.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=t.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(t){return t===qt?null:this.indexMap_.get(t.toString())}constructor(t,e,n){this.children_=t,this.priorityNode_=e,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&zt(this.priorityNode_),this.children_.isEmpty()&&(0,v.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}}ae.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const le=new class extends ae{compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return ae.EMPTY_NODE}isEmpty(){return!1}constructor(){super(new Ht(Gt),ae.EMPTY_NODE,re.Default)}};Object.defineProperties(Ot,{MIN:{value:new Ot("[MIN_NAME]",ae.EMPTY_NODE)},MAX:{value:new Ot("[MAX_NAME]",le)}}),Ut.__EMPTY_NODE=ae.EMPTY_NODE,Jt.__childrenNodeConstructor=ae,Kt=le,function(t){Yt=t}(le);function he(t,e=null){if(null===t)return ae.EMPTY_NODE;if("object"==typeof t&&".priority"in t&&(e=t[".priority"]),(0,v.assert)(null===e||"string"==typeof e||"number"==typeof e||"object"==typeof e&&".sv"in e,"Invalid priority type found: "+typeof e),"object"==typeof t&&".value"in t&&null!==t[".value"]&&(t=t[".value"]),"object"!=typeof t||".sv"in t){return new Jt(t,he(e))}if(t instanceof Array){let n=ae.EMPTY_NODE;return K(t,((e,i)=>{if((0,v.contains)(t,e)&&"."!==e.substring(0,1)){const t=he(i);!t.isLeafNode()&&t.isEmpty()||(n=n.updateImmediateChild(e,t))}})),n.updatePriority(he(e))}{const n=[];let i=!1;if(K(t,((t,e)=>{if("."!==t.substring(0,1)){const s=he(e);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Ot(t,s)))}})),0===n.length)return ae.EMPTY_NODE;const s=ne(n,Wt,(t=>t.name),Gt);if(i){const t=ne(n,Zt.getCompare());return new ae(s,he(e),new re({".priority":t},{".priority":Zt}))}return new ae(s,he(e),re.Default)}}!function(t){Xt=t}(he);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ce extends Ft{extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,e){const n=this.extractChild(t.node),i=this.extractChild(e.node),s=n.compareTo(i);return 0===s?B(t.name,e.name):s}makePost(t,e){const n=he(t),i=ae.EMPTY_NODE.updateChild(this.indexPath_,n);return new Ot(e,i)}maxPost(){const t=ae.EMPTY_NODE.updateChild(this.indexPath_,le);return new Ot("[MAX_NAME]",t)}toString(){return bt(this.indexPath_,0).join("/")}constructor(t){super(),this.indexPath_=t,(0,v.assert)(!Nt(t)&&".priority"!==wt(t),"Can't create PathIndex with empty path or .priority key")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new class extends Ft{compare(t,e){const n=t.node.compareTo(e.node);return 0===n?B(t.name,e.name):n}isDefinedOn(t){return!0}indexedValueChanged(t,e){return!t.equals(e)}minPost(){return Ot.MIN}maxPost(){return Ot.MAX}makePost(t,e){const n=he(t);return new Ot(e,n)}toString(){return".value"}},de="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function fe(t){return{type:"value",snapshotNode:t}}function pe(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ge(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function me(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ye{hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,v.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,v.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:"[MIN_NAME]"}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,v.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,v.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:"[MAX_NAME]"}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,v.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Zt}copy(){const t=new ye;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Zt}}function _e(t){const e={};if(t.isDefault())return e;let n;return t.index_===Zt?n="$priority":t.index_===ue?n="$value":t.index_===qt?n="$key":((0,v.assert)(t.index_ instanceof ce,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=(0,v.stringify)(n),t.startSet_&&(e.startAt=(0,v.stringify)(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+(0,v.stringify)(t.indexStartName_))),t.endSet_&&(e.endAt=(0,v.stringify)(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+(0,v.stringify)(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ve(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;""===n&&(n=t.isViewFromLeft()?"l":"r"),e.vf=n}return t.index_!==Zt&&(e.i=t.index_.toString()),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we extends gt{reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,e){return void 0!==e?"tag$"+e:((0,v.assert)(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,e,n,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const r=we.getListenId_(t,n),o={};this.listens_[r]=o;const a=_e(t._queryParams);this.restRequest_(s+".json",a,((t,e)=>{let a=e;if(404===t&&(a=null,t=null),null===t&&this.onDataUpdate_(s,a,!1,n),(0,v.safeGet)(this.listens_,r)===o){let e;e=t?401===t?"permission_denied":"rest_error:"+t:"ok",i(e,null)}}))}unlisten(t,e){const n=we.getListenId_(t,e);delete this.listens_[n]}get(t){const e=_e(t._queryParams),n=t._path.toString(),i=new(0,v.Deferred);return this.restRequest_(n+".json",e,((t,e)=>{let s=e;404===t&&(s=null,t=null),null===t?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(t){}restRequest_(t,e={},n){return e.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(e.auth=i.accessToken),s&&s.token&&(e.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+(0,v.querystring)(e);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=(0,v.jsonEval)(o.responseText)}catch(t){U("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&U("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}constructor(t,e,n,i){super(),this.repoInfo_=t,this.onDataUpdate_=e,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=O("p:rest:"),this.listens_={}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,e){this.rootNode_=this.rootNode_.updateChild(t,e)}constructor(){this.rootNode_=ae.EMPTY_NODE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(){return{value:null,children:new Map}}function Te(t,e,n){if(Nt(e))t.value=n,t.children.clear();else if(null!==t.value)t.value=t.value.updateChild(e,n);else{const i=wt(e);t.children.has(i)||t.children.set(i,Ee());Te(t.children.get(i),e=Et(e),n)}}function be(t,e,n){null!==t.value?n(e,t.value):function(t,e){t.children.forEach(((t,n)=>{e(n,t)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,((t,i)=>{be(i,new _t(e.toString()+"/"+t),n)}))}class Ie{get(){const t=this.collection_.get(),e=Object.assign({},t);return this.last_&&K(this.last_,((t,n)=>{e[t]=e[t]-n})),this.last_=t,e}constructor(t){this.collection_=t,this.last_=null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{reportStats_(){const t=this.statsListener_.get(),e={};let n=!1;K(t,((t,i)=>{i>0&&(0,v.contains)(this.statsToReport_,t)&&(e[t]=i,n=!0)})),n&&this.server_.reportStats(e),Y(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}constructor(t,e){this.server_=e,this.statsToReport_={},this.statsListener_=new Ie(t);const n=1e4+2e4*Math.random();Y(this.reportStats_.bind(this),Math.floor(n))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ke;function Ae(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ke=Ne||(Ne={}))[ke.OVERWRITE=0]="OVERWRITE",ke[ke.MERGE=1]="MERGE",ke[ke.ACK_USER_WRITE=2]="ACK_USER_WRITE",ke[ke.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Re{operationForChild(t){if(Nt(this.path)){if(null!=this.affectedTree.value)return(0,v.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const e=this.affectedTree.subtree(new _t(t));return new Re(vt(),e,this.revert)}}return(0,v.assert)(wt(this.path)===t,"operationForChild called for unrelated child."),new Re(Et(this.path),this.affectedTree,this.revert)}constructor(t,e,n){this.path=t,this.affectedTree=e,this.revert=n,this.type=Ne.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class xe{operationForChild(t){return Nt(this.path)?new xe(this.source,vt(),this.snap.getImmediateChild(t)):new xe(this.source,Et(this.path),this.snap)}constructor(t,e,n){this.source=t,this.path=e,this.snap=n,this.type=Ne.OVERWRITE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{operationForChild(t){if(Nt(this.path)){const e=this.children.subtree(new _t(t));return e.isEmpty()?null:e.value?new xe(this.source,vt(),e.value):new De(this.source,vt(),e)}return(0,v.assert)(wt(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new De(this.source,Et(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}constructor(t,e,n){this.source=t,this.path=e,this.children=n,this.type=Ne.MERGE}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(Nt(t))return this.isFullyInitialized()&&!this.filtered_;const e=wt(t);return this.isCompleteForChild(e)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}constructor(t,e,n){this.node_=t,this.fullyInitialized_=e,this.filtered_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e,n,i,s,r){const o=i.filter((t=>t.type===n));o.sort(((e,n)=>function(t,e,n){if(null==e.childName||null==n.childName)throw(0,v.assertionError)("Should only compare child_ events.");const i=new Ot(e.childName,e.snapshotNode),s=new Ot(n.childName,n.snapshotNode);return t.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,n))),o.forEach((n=>{const i=function(t,e,n){return"value"===e.type||"child_removed"===e.type||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}(t,n,r);s.forEach((s=>{s.respondsTo(n.type)&&e.push(s.createEvent(i,t.query_))}))}))}function Me(t,e){return{eventCache:t,serverCache:e}}function Oe(t,e,n,i){return Me(new Pe(e,n,i),t.serverCache)}function Fe(t,e,n,i){return Me(t.eventCache,new Pe(e,n,i))}function Ve(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Ue(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;class Be{static fromObject(t){let e=new Be(null);return K(t,((t,n)=>{e=e.set(new _t(t),n)})),e}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,e){if(null!=this.value&&e(this.value))return{path:vt(),value:this.value};if(Nt(t))return null;{const n=wt(t),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Et(t),e);if(null!=s){return{path:St(new _t(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,(()=>!0))}subtree(t){if(Nt(t))return this;{const e=wt(t),n=this.children.get(e);return null!==n?n.subtree(Et(t)):new Be(null)}}set(t,e){if(Nt(t))return new Be(e,this.children);{const n=wt(t),i=(this.children.get(n)||new Be(null)).set(Et(t),e),s=this.children.insert(n,i);return new Be(this.value,s)}}remove(t){if(Nt(t))return this.children.isEmpty()?new Be(null):new Be(null,this.children);{const e=wt(t),n=this.children.get(e);if(n){const i=n.remove(Et(t));let s;return s=i.isEmpty()?this.children.remove(e):this.children.insert(e,i),null===this.value&&s.isEmpty()?new Be(null):new Be(this.value,s)}return this}}get(t){if(Nt(t))return this.value;{const e=wt(t),n=this.children.get(e);return n?n.get(Et(t)):null}}setTree(t,e){if(Nt(t))return e;{const n=wt(t),i=(this.children.get(n)||new Be(null)).setTree(Et(t),e);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Be(this.value,s)}}fold(t){return this.fold_(vt(),t)}fold_(t,e){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(St(t,i),e)})),e(t,this.value,n)}findOnPath(t,e){return this.findOnPath_(t,vt(),e)}findOnPath_(t,e,n){const i=!!this.value&&n(e,this.value);if(i)return i;if(Nt(t))return null;{const i=wt(t),s=this.children.get(i);return s?s.findOnPath_(Et(t),St(e,i),n):null}}foreachOnPath(t,e){return this.foreachOnPath_(t,vt(),e)}foreachOnPath_(t,e,n){if(Nt(t))return this;{this.value&&n(e,this.value);const i=wt(t),s=this.children.get(i);return s?s.foreachOnPath_(Et(t),St(e,i),n):new Be(null)}}foreach(t){this.foreach_(vt(),t)}foreach_(t,e){this.children.inorderTraversal(((n,i)=>{i.foreach_(St(t,n),e)})),this.value&&e(t,this.value)}foreachChild(t){this.children.inorderTraversal(((e,n)=>{n.value&&t(e,n.value)}))}constructor(t,e=(()=>(qe||(qe=new Ht(j)),qe))()){this.value=t,this.children=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{static empty(){return new je(new Be(null))}constructor(t){this.writeTree_=t}}function He(t,e,n){if(Nt(e))return new je(new Be(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(null!=i){const s=i.path;let r=i.value;const o=kt(s,e);return r=r.updateChild(o,n),new je(t.writeTree_.set(s,r))}{const i=new Be(n),s=t.writeTree_.setTree(e,i);return new je(s)}}}function We(t,e,n){let i=t;return K(n,((t,n)=>{i=He(i,St(e,t),n)})),i}function Ge(t,e){if(Nt(e))return je.empty();{const n=t.writeTree_.setTree(e,new Be(null));return new je(n)}}function Ke(t,e){return null!=$e(t,e)}function $e(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return null!=n?t.writeTree_.get(n.path).getChild(kt(n.path,e)):null}function ze(t){const e=[],n=t.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Zt,((t,n)=>{e.push(new Ot(t,n))})):t.writeTree_.children.inorderTraversal(((t,n)=>{null!=n.value&&e.push(new Ot(t,n.value))})),e}function Qe(t,e){if(Nt(e))return t;{const n=$e(t,e);return new je(null!=n?new Be(n):t.writeTree_.subtree(e))}}function Xe(t){return t.writeTree_.isEmpty()}function Ye(t,e){return Je(vt(),t.writeTree_,e)}function Je(t,e,n){if(null!=e.value)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal(((e,s)=>{".priority"===e?((0,v.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=Je(St(t,e),s,n)})),n.getChild(t).isEmpty()||null===i||(n=n.updateChild(St(t,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t,e){return fn(e,t)}function tn(t,e){const n=t.allWrites.findIndex((t=>t.writeId===e));(0,v.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let s=i.visible,r=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const e=t.allWrites[o];e.visible&&(o>=n&&en(e,i.path)?s=!1:Rt(i.path,e.path)&&(r=!0)),o--}if(s){if(r)return function(t){t.visibleWrites=sn(t.allWrites,nn,vt()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}(t),!0;if(i.snap)t.visibleWrites=Ge(t.visibleWrites,i.path);else{K(i.children,(e=>{t.visibleWrites=Ge(t.visibleWrites,St(i.path,e))}))}return!0}return!1}function en(t,e){if(t.snap)return Rt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Rt(St(t.path,n),e))return!0;return!1}function nn(t){return t.visible}function sn(t,e,n){let i=je.empty();for(let s=0;s<t.length;++s){const r=t[s];if(e(r)){const t=r.path;let e;if(r.snap)Rt(n,t)?(e=kt(n,t),i=He(i,e,r.snap)):Rt(t,n)&&(e=kt(t,n),i=He(i,vt(),r.snap.getChild(e)));else{if(!r.children)throw(0,v.assertionError)("WriteRecord should have .snap or .children");if(Rt(n,t))e=kt(n,t),i=We(i,e,r.children);else if(Rt(t,n))if(e=kt(t,n),Nt(e))i=We(i,vt(),r.children);else{const t=(0,v.safeGet)(r.children,wt(e));if(t){const n=t.getChild(Et(e));i=He(i,vt(),n)}}}}}return i}function rn(t,e,n,i,s){if(i||s){const r=Qe(t.visibleWrites,e);if(!s&&Xe(r))return n;if(s||null!=n||Ke(r,vt())){const r=function(t){return(t.visible||s)&&(!i||!~i.indexOf(t.writeId))&&(Rt(t.path,e)||Rt(e,t.path))};return Ye(sn(t.allWrites,r,e),n||ae.EMPTY_NODE)}return null}{const i=$e(t.visibleWrites,e);if(null!=i)return i;{const i=Qe(t.visibleWrites,e);if(Xe(i))return n;if(null!=n||Ke(i,vt())){return Ye(i,n||ae.EMPTY_NODE)}return null}}}function on(t,e,n,i){return rn(t.writeTree,t.treePath,e,n,i)}function an(t,e){return function(t,e,n){let i=ae.EMPTY_NODE;const s=$e(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(Zt,((t,e)=>{i=i.updateImmediateChild(t,e)})),i;if(n){const s=Qe(t.visibleWrites,e);return n.forEachChild(Zt,((t,e)=>{const n=Ye(Qe(s,new _t(t)),e);i=i.updateImmediateChild(t,n)})),ze(s).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}return ze(Qe(t.visibleWrites,e)).forEach((t=>{i=i.updateImmediateChild(t.name,t.node)})),i}(t.writeTree,t.treePath,e)}function ln(t,e,n,i){return function(t,e,n,i,s){(0,v.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=St(e,n);if(Ke(t.visibleWrites,r))return null;{const e=Qe(t.visibleWrites,r);return Xe(e)?s.getChild(n):Ye(e,s.getChild(n))}}(t.writeTree,t.treePath,e,n,i)}function hn(t,e){return function(t,e){return $e(t.visibleWrites,e)}(t.writeTree,St(t.treePath,e))}function cn(t,e,n,i,s,r){return function(t,e,n,i,s,r,o){let a;const l=Qe(t.visibleWrites,e),h=$e(l,vt());if(null!=h)a=h;else{if(null==n)return[];a=Ye(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const t=[],e=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&t.length<s;)0!==e(l,i)&&t.push(l),l=n.getNext();return t}}(t.writeTree,t.treePath,e,n,i,s,r)}function un(t,e,n){return function(t,e,n,i){const s=St(e,n),r=$e(t.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return Ye(Qe(t.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(t.writeTree,t.treePath,e,n)}function dn(t,e){return fn(St(t.treePath,e),t.writeTree)}function fn(t,e){return{treePath:t,writeTree:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{trackChildChange(t){const e=t.type,n=t.childName;(0,v.assert)("child_added"===e||"child_changed"===e||"child_removed"===e,"Only child changes supported for tracking"),(0,v.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===e&&"child_removed"===s)this.changeMap.set(n,me(n,t.snapshotNode,i.snapshotNode));else if("child_removed"===e&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===e&&"child_changed"===s)this.changeMap.set(n,ge(n,i.oldSnap));else if("child_changed"===e&&"child_added"===s)this.changeMap.set(n,pe(n,t.snapshotNode));else{if("child_changed"!==e||"child_changed"!==s)throw(0,v.assertionError)("Illegal combination of changes: "+t+" occurred after "+i);this.changeMap.set(n,me(n,t.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,t)}getChanges(){return Array.from(this.changeMap.values())}constructor(){this.changeMap=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new class{getCompleteChild(t){return null}getChildAfterChild(t,e,n){return null}};class mn{getCompleteChild(t){const e=this.viewCache_.eventCache;if(e.isCompleteForChild(t))return e.getNode().getImmediateChild(t);{const e=null!=this.optCompleteServerCache_?new Pe(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return un(this.writes_,t,e)}}getChildAfterChild(t,e,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Ue(this.viewCache_),s=cn(this.writes_,i,e,1,n,t);return 0===s.length?null:s[0]}constructor(t,e,n=null){this.writes_=t,this.viewCache_=e,this.optCompleteServerCache_=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e,n,i,s){const r=new pn;let o,a;if(n.type===Ne.OVERWRITE){const l=n;l.source.fromUser?o=wn(t,e,l.path,l.snap,i,s,r):((0,v.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered()&&!Nt(l.path),o=vn(t,e,l.path,l.snap,i,s,a,r))}else if(n.type===Ne.MERGE){const l=n;l.source.fromUser?o=function(t,e,n,i,s,r,o){let a=e;return i.foreach(((i,l)=>{const h=St(n,i);Cn(e,wt(h))&&(a=wn(t,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=St(n,i);Cn(e,wt(h))||(a=wn(t,a,h,l,s,r,o))})),a}(t,e,l.path,l.children,i,s,r):((0,v.assert)(l.source.fromServer,"Unknown source."),a=l.source.tagged||e.serverCache.isFiltered(),o=Tn(t,e,l.path,l.children,i,s,a,r))}else if(n.type===Ne.ACK_USER_WRITE){const a=n;o=a.revert?function(t,e,n,i,s,r){let o;if(null!=hn(i,n))return e;{const a=new mn(i,e,s),l=e.eventCache.getNode();let h;if(Nt(n)||".priority"===wt(n)){let n;if(e.serverCache.isFullyInitialized())n=on(i,Ue(e));else{const t=e.serverCache.getNode();(0,v.assert)(t instanceof ae,"serverChildren would be complete if leaf node"),n=an(i,t)}h=t.filter.updateFullNode(l,n,r)}else{const s=wt(n);let c=un(i,s,e.serverCache);null==c&&e.serverCache.isCompleteForChild(s)&&(c=l.getImmediateChild(s)),h=null!=c?t.filter.updateChild(l,s,c,Et(n),a,r):e.eventCache.getNode().hasChild(s)?t.filter.updateChild(l,s,ae.EMPTY_NODE,Et(n),a,r):l,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=on(i,Ue(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,r)))}return o=e.serverCache.isFullyInitialized()||null!=hn(i,vt()),Oe(e,h,o,t.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,e,a.path,i,s,r):function(t,e,n,i,s,r,o){if(null!=hn(s,n))return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(null!=i.value){if(Nt(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return vn(t,e,n,l.getNode().getChild(n),s,r,a,o);if(Nt(n)){let i=new Be(null);return l.getNode().forEachChild(qt,((t,e)=>{i=i.set(new _t(t),e)})),Tn(t,e,n,i,s,r,a,o)}return e}{let h=new Be(null);return i.foreach(((t,e)=>{const i=St(n,t);l.isCompleteForPath(i)&&(h=h.set(t,l.getNode().getChild(i)))})),Tn(t,e,n,h,s,r,a,o)}}(t,e,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Ne.LISTEN_COMPLETE)throw(0,v.assertionError)("Unknown operation type: "+n.type);o=function(t,e,n,i,s){const r=e.serverCache,o=Fe(e,r.getNode(),r.isFullyInitialized()||Nt(n),r.isFiltered());return _n(t,o,n,i,gn,s)}(t,e,n.path,i,r)}const l=r.getChanges();return function(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ve(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(fe(Ve(e)))}}(e,o,l),{viewCache:o,changes:l}}function _n(t,e,n,i,s,r){const o=e.eventCache;if(null!=hn(i,n))return e;{let a,l;if(Nt(n))if((0,v.assert)(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const n=Ue(e),s=an(i,n instanceof ae?n:ae.EMPTY_NODE);a=t.filter.updateFullNode(e.eventCache.getNode(),s,r)}else{const n=on(i,Ue(e));a=t.filter.updateFullNode(e.eventCache.getNode(),n,r)}else{const h=wt(n);if(".priority"===h){(0,v.assert)(1===Ct(n),"Can't have a priority with additional path components");const s=o.getNode();l=e.serverCache.getNode();const r=ln(i,n,s,l);a=null!=r?t.filter.updatePriority(s,r):o.getNode()}else{const c=Et(n);let u;if(o.isCompleteForChild(h)){l=e.serverCache.getNode();const t=ln(i,n,o.getNode(),l);u=null!=t?o.getNode().getImmediateChild(h).updateChild(c,t):o.getNode().getImmediateChild(h)}else u=un(i,h,e.serverCache);a=null!=u?t.filter.updateChild(o.getNode(),h,u,c,s,r):o.getNode()}}return Oe(e,a,o.isFullyInitialized()||Nt(n),t.filter.filtersNodes())}}function vn(t,e,n,i,s,r,o,a){const l=e.serverCache;let h;const c=o?t.filter:t.filter.getIndexedFilter();if(Nt(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const t=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),t,null)}else{const t=wt(n);if(!l.isCompleteForPath(n)&&Ct(n)>1)return e;const s=Et(n),r=l.getNode().getImmediateChild(t).updateChild(s,i);h=".priority"===t?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),t,r,s,gn,null)}const u=Fe(e,h,l.isFullyInitialized()||Nt(n),c.filtersNodes());return _n(t,u,n,s,new mn(s,u,r),a)}function wn(t,e,n,i,s,r,o){const a=e.eventCache;let l,h;const c=new mn(s,e,r);if(Nt(n))h=t.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Oe(e,h,!0,t.filter.filtersNodes());else{const s=wt(n);if(".priority"===s)h=t.filter.updatePriority(e.eventCache.getNode(),i),l=Oe(e,h,a.isFullyInitialized(),a.isFiltered());else{const r=Et(n),h=a.getNode().getImmediateChild(s);let u;if(Nt(r))u=i;else{const t=c.getCompleteChild(s);u=null!=t?".priority"===Tt(r)&&t.getChild(It(r)).isEmpty()?t:t.updateChild(r,i):ae.EMPTY_NODE}if(h.equals(u))l=e;else{l=Oe(e,t.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Cn(t,e){return t.eventCache.isCompleteForChild(e)}function En(t,e,n){return n.foreach(((t,n)=>{e=e.updateChild(t,n)})),e}function Tn(t,e,n,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l,h=e;l=Nt(n)?i:new Be(null).setTree(n,i);const c=e.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=En(0,e.serverCache.getNode().getImmediateChild(n),i);h=vn(t,h,new _t(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!e.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!c.hasChild(n)&&!l){const l=En(0,e.serverCache.getNode().getImmediateChild(n),i);h=vn(t,h,new _t(n),l,s,r,o,a)}})),h}function bn(t,e){const n=Ue(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Nt(e)&&!n.getImmediateChild(wt(e)).isEmpty())?n.getChild(e):null}function In(t,e,n,i){e.type===Ne.MERGE&&null!==e.source.queryId&&((0,v.assert)(Ue(t.viewCache_),"We should always have a full cache before handling merges"),(0,v.assert)(Ve(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,r=yn(t.processor_,s,e,n,i);var o,a;return o=t.processor_,a=r.viewCache,(0,v.assert)(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),(0,v.assert)(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),(0,v.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Sn(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Sn(t,e,n,i){const s=i?[i]:t.eventRegistrations_;return function(t,e,n,i){const s=[],r=[];return e.forEach((e=>{var n;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */"child_changed"===e.type&&t.index_.indexedValueChanged(e.oldSnap,e.snapshotNode)&&r.push((n=e.childName,{type:"child_moved",snapshotNode:e.snapshotNode,childName:n}))})),Le(t,s,"child_removed",e,i,n),Le(t,s,"child_added",e,i,n),Le(t,s,"child_moved",r,i,n),Le(t,s,"child_changed",e,i,n),Le(t,s,"value",e,i,n),s}(t.eventGenerator_,e,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nn,kn;function An(t,e,n,i){const s=e.source.queryId;if(null!==s){const r=t.views.get(s);return(0,v.assert)(null!=r,"SyncTree gave us an op for an invalid query."),In(r,e,n,i)}{let s=[];for(const r of t.views.values())s=s.concat(In(r,e,n,i));return s}}function Rn(t,e){let n=null;for(const i of t.views.values())n=n||bn(i,e);return n}class xn{constructor(t){this.listenProvider_=t,this.syncPointTree_=new Be(null),this.pendingWriteTree_={visibleWrites:je.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Dn(t,e,n,i,s){return function(t,e,n,i,s){(0,v.assert)(i>t.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:s}),s&&(t.visibleWrites=He(t.visibleWrites,e,n)),t.lastWriteId=i}(t.pendingWriteTree_,e,n,i,s),s?On(t,new xe({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},e,n)):[]}function Pn(t,e,n=!1){const i=function(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}(t.pendingWriteTree_,e);if(tn(t.pendingWriteTree_,e)){let e=new Be(null);return null!=i.snap?e=e.set(vt(),!0):K(i.children,(t=>{e=e.set(new _t(t),!0)})),On(t,new Re(i.path,e,n))}return[]}function Ln(t,e,n){return On(t,new xe({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,n))}function Mn(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,((t,n)=>{const i=Rn(n,kt(t,e));if(i)return i}));return rn(i,e,s,n,!0)}function On(t,e){return Fn(e,t.syncPointTree_,null,Ze(t.pendingWriteTree_,vt()))}function Fn(t,e,n,i){if(Nt(t.path))return Vn(t,e,n,i);{const s=e.get(vt());null==n&&null!=s&&(n=Rn(s,vt()));let r=[];const o=wt(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const t=n?n.getImmediateChild(o):null,e=dn(i,o);r=r.concat(Fn(a,l,t,e))}return s&&(r=r.concat(An(s,t,i,n))),r}}function Vn(t,e,n,i){const s=e.get(vt());null==n&&null!=s&&(n=Rn(s,vt()));let r=[];return e.children.inorderTraversal(((e,s)=>{const o=n?n.getImmediateChild(e):null,a=dn(i,e),l=t.operationForChild(e);l&&(r=r.concat(Vn(l,s,o,a)))})),s&&(r=r.concat(An(s,t,i,n))),r}function Un(t,e){return t.tagToQueryMap.get(e)}function qn(t){const e=t.indexOf("$");return(0,v.assert)(-1!==e&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new _t(t.substr(0,e))}}function Bn(t,e,n){const i=t.syncPointTree_.get(e);(0,v.assert)(i,"Missing sync point for query tag that we're tracking");return An(i,n,Ze(t.pendingWriteTree_,e),null)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class jn{getImmediateChild(t){const e=this.node_.getImmediateChild(t);return new jn(e)}node(){return this.node_}constructor(t){this.node_=t}}class Hn{getImmediateChild(t){const e=St(this.path_,t);return new Hn(this.syncTree_,e)}node(){return Mn(this.syncTree_,this.path_)}constructor(t,e){this.syncTree_=t,this.path_=e}}const Wn=function(t,e,n){return t&&"object"==typeof t?((0,v.assert)(".sv"in t,"Unexpected leaf node or priority contents"),"string"==typeof t[".sv"]?Gn(t[".sv"],e,n):"object"==typeof t[".sv"]?Kn(t[".sv"],e):void(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2))):t},Gn=function(t,e,n){if("timestamp"===t)return n.timestamp;(0,v.assert)(!1,"Unexpected server value: "+t)},Kn=function(t,e,n){t.hasOwnProperty("increment")||(0,v.assert)(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;"number"!=typeof i&&(0,v.assert)(!1,"Unexpected increment value: "+i);const s=e.node();if((0,v.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},$n=function(t,e,n,i){return Qn(e,new Hn(n,t),i)},zn=function(t,e,n){return Qn(t,new jn(e),n)};function Qn(t,e,n){const i=t.getPriority().val(),s=Wn(i,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const i=t,r=Wn(i.getValue(),e,n);return r!==i.getValue()||s!==i.getPriority().val()?new Jt(r,he(s)):t}{const i=t;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Jt(s))),i.forEachChild(Zt,((t,i)=>{const s=Qn(i,e.getImmediateChild(t),n);s!==i&&(r=r.updateImmediateChild(t,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(t="",e=null,n={children:{},childCount:0}){this.name=t,this.parent=e,this.node=n}}function Yn(t,e){let n=e instanceof _t?e:new _t(e),i=t,s=wt(n);for(;null!==s;){const t=(0,v.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new Xn(s,i,t),n=Et(n),s=wt(n)}return i}function Jn(t){return t.node.value}function Zn(t,e){t.node.value=e,si(t)}function ti(t){return t.node.childCount>0}function ei(t,e){K(t.node.children,((n,i)=>{e(new Xn(n,t,i))}))}function ni(t,e,n,i){n&&!i&&e(t),ei(t,(t=>{ni(t,e,!0,i)})),n&&i&&e(t)}function ii(t){return new _t(null===t.parent?t.name:ii(t.parent)+"/"+t.name)}function si(t){null!==t.parent&&function(t,e,n){const i=function(t){return void 0===Jn(t)&&!ti(t)}(n),s=(0,v.contains)(t.node.children,e);i&&s?(delete t.node.children[e],t.node.childCount--,si(t)):i||s||(t.node.children[e]=n.node,t.node.childCount++,si(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.parent,t.name,t)}const ri=/[\[\].#$\/\u0000-\u001F\u007F]/,oi=/[\[\].#$\u0000-\u001F\u007F]/,ai=function(t){return"string"==typeof t&&0!==t.length&&!ri.test(t)},li=function(t){return"string"==typeof t&&0!==t.length&&!oi.test(t)},hi=function(t,e,n){const i=n instanceof _t?new xt(n,t):n;if(void 0===e)throw new Error(t+"contains undefined "+Pt(i));if("function"==typeof e)throw new Error(t+"contains a function "+Pt(i)+" with contents = "+e.toString());if(q(e))throw new Error(t+"contains "+e.toString()+" "+Pt(i));if("string"==typeof e&&e.length>10485760/3&&(0,v.stringLength)(e)>10485760)throw new Error(t+"contains a string greater than 10485760 utf8 bytes "+Pt(i)+" ('"+e.substring(0,50)+"...')");if(e&&"object"==typeof e){let n=!1,s=!1;if(K(e,((e,r)=>{if(".value"===e)n=!0;else if(".priority"!==e&&".sv"!==e&&(s=!0,!ai(e)))throw new Error(t+" contains an invalid key ("+e+") "+Pt(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=e,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=(0,v.stringLength)(a),Dt(o),hi(t,r,i),function(t){const e=t.parts_.pop();t.byteLength_-=(0,v.stringLength)(e),t.parts_.length>0&&(t.byteLength_-=1)}(i)})),n&&s)throw new Error(t+' contains ".value" child '+Pt(i)+" in addition to actual children.")}},ci=function(t,e){const n=e.path.toString();if("string"!=typeof e.repoInfo.host||0===e.repoInfo.host.length||!ai(e.repoInfo.namespace)&&"localhost"!==e.repoInfo.host.split(":")[0]||0!==n.length&&!function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),li(t)}(n))throw new Error((0,v.errorPrefix)(t,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ui{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function di(t,e){let n=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();null===n||At(r,n.path)||(t.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&t.eventLists_.push(n)}function fi(t,e,n){di(t,n),pi(t,(t=>Rt(t,e)||Rt(e,t)))}function pi(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const s=t.eventLists_[i];if(s){e(s.path)?(gi(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function gi(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(null!==n){t.events[e]=null;const i=n.getEventRunner();D&&M("event: "+n.toString()),X(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}constructor(t,e,n,i){this.repoInfo_=t,this.forceRestClient_=e,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ui,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ee(),this.transactionQueueTree_=new Xn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}}function yi(t,e,n){if(t.stats_=at(t.repoInfo_),t.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)t.server_=new we(t.repoInfo_,((e,n,i,s)=>{wi(t,e,n,i,s)}),t.authTokenProvider_,t.appCheckProvider_),setTimeout((()=>Ci(t,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,v.stringify)(n)}catch(t){throw new Error("Invalid authOverride provided: "+t)}}t.persistentConnection_=new Mt(t.repoInfo_,e,((e,n,i,s)=>{wi(t,e,n,i,s)}),(e=>{Ci(t,e)}),(e=>{!function(t,e){K(e,((e,n)=>{Ei(t,e,n)}))}(t,e)}),t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener((e=>{t.server_.refreshAuthToken(e)})),t.appCheckProvider_.addTokenChangeListener((e=>{t.server_.refreshAppCheckToken(e.token)})),t.statsReporter_=function(t,e){const n=t.toString();return ot[n]||(ot[n]=e()),ot[n]}(t.repoInfo_,(()=>new Se(t.stats_,t.server_))),t.infoData_=new Ce,t.infoSyncTree_=new xn({startListening:(e,n,i,s)=>{let r=[];const o=t.infoData_.getNode(e._path);return o.isEmpty()||(r=Ln(t.infoSyncTree_,e._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Ei(t,"connected",!1),t.serverSyncTree_=new xn({startListening:(e,n,i,s)=>(t.server_.listen(e,i,n,((n,i)=>{const r=s(n,i);fi(t.eventQueue_,e._path,r)})),[]),stopListening:(e,n)=>{t.server_.unlisten(e,n)}})}function _i(t){const e=t.infoData_.getNode(new _t(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+e}function vi(t){return(e=(e={timestamp:_i(t)})||{}).timestamp=e.timestamp||(new Date).getTime(),e;var e}function wi(t,e,n,i,s){t.dataUpdateCount++;const r=new _t(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(i){const e=(0,v.map)(n,(t=>he(t)));o=function(t,e,n,i){const s=Un(t,i);if(s){const i=qn(s),r=i.path,o=i.queryId,a=kt(r,e),l=Be.fromObject(n);return Bn(t,r,new De(Ae(o),a,l))}return[]}(t.serverSyncTree_,r,e,s)}else{const e=he(n);o=function(t,e,n,i){const s=Un(t,i);if(null!=s){const i=qn(s),r=i.path,o=i.queryId,a=kt(r,e);return Bn(t,r,new xe(Ae(o),a,n))}return[]}(t.serverSyncTree_,r,e,s)}else if(i){const e=(0,v.map)(n,(t=>he(t)));o=function(t,e,n){const i=Be.fromObject(n);return On(t,new De({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},e,i))}(t.serverSyncTree_,r,e)}else{const e=he(n);o=Ln(t.serverSyncTree_,r,e)}let a=r;o.length>0&&(a=ki(t,r)),fi(t.eventQueue_,a,o)}function Ci(t,e){Ei(t,"connected",e),!1===e&&function(t){Ii(t,"onDisconnectEvents");const e=vi(t),n=Ee();be(t.onDisconnect_,vt(),((i,s)=>{const r=$n(i,s,t.serverSyncTree_,e);Te(n,i,r)}));let i=[];be(n,vt(),((e,n)=>{i=i.concat(Ln(t.serverSyncTree_,e,n));const s=Pi(t,e);ki(t,s)})),t.onDisconnect_=Ee(),fi(t.eventQueue_,vt(),i)}(t)}function Ei(t,e,n){const i=new _t("/.info/"+e),s=he(n);t.infoData_.updateSnapshot(i,s);const r=Ln(t.infoSyncTree_,i,s);fi(t.eventQueue_,i,r)}function Ti(t){return t.nextWriteId_++}function bi(t){t.persistentConnection_&&t.persistentConnection_.interrupt("repo_interrupt")}function Ii(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),M(n,...e)}function Si(t,e,n){return Mn(t.serverSyncTree_,e,n)||ae.EMPTY_NODE}function Ni(t,e=t.transactionQueueTree_){if(e||Di(t,e),Jn(e)){const n=Ri(t,e);(0,v.assert)(n.length>0,"Sending zero length transaction queue");n.every((t=>0===t.status))&&function(t,e,n){const i=n.map((t=>t.currentWriteId)),s=Si(t,e,i);let r=s;const o=s.hash();for(let t=0;t<n.length;t++){const i=n[t];(0,v.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=kt(e,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,(i=>{Ii(t,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let e=0;e<n.length;e++)n[e].status=2,s=s.concat(Pn(t.serverSyncTree_,n[e].currentWriteId)),n[e].onComplete&&i.push((()=>n[e].onComplete(null,!0,n[e].currentOutputSnapshotResolved))),n[e].unwatcher();Di(t,Yn(t.transactionQueueTree_,e)),Ni(t,t.transactionQueueTree_),fi(t.eventQueue_,e,s);for(let t=0;t<i.length;t++)X(i[t])}else{if("datastale"===i)for(let t=0;t<n.length;t++)3===n[t].status?n[t].status=4:n[t].status=0;else{U("transaction at "+l.toString()+" failed: "+i);for(let t=0;t<n.length;t++)n[t].status=4,n[t].abortReason=i}ki(t,e)}}),o)}(t,ii(e),n)}else ti(e)&&ei(e,(e=>{Ni(t,e)}))}function ki(t,e){const n=Ai(t,e),i=ii(n);return function(t,e,n){if(0===e.length)return;const i=[];let s=[];const r=e.filter((t=>0===t.status)).map((t=>t.currentWriteId));for(let a=0;a<e.length;a++){const l=e[a],h=kt(n,l.path);let c,u=!1;if((0,v.assert)(null!==h,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,c=l.abortReason,s=s.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,c="maxretry",s=s.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else{const n=Si(t,l.path,r);l.currentInputSnapshot=n;const i=e[a].update(n.val());if(void 0!==i){hi("transaction failed: Data returned ",i,l.path);let e=he(i);"object"==typeof i&&null!=i&&(0,v.contains)(i,".priority")||(e=e.updatePriority(n.getPriority()));const o=l.currentWriteId,a=vi(t),h=zn(e,n,a);l.currentOutputSnapshotRaw=e,l.currentOutputSnapshotResolved=h,l.currentWriteId=Ti(t),r.splice(r.indexOf(o),1),s=s.concat(Dn(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),s=s.concat(Pn(t.serverSyncTree_,o,!0))}else u=!0,c="nodata",s=s.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0))}fi(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,o=e[a].unwatcher,setTimeout(o,Math.floor(0)),e[a].onComplete&&("nodata"===c?i.push((()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot))):i.push((()=>e[a].onComplete(new Error(c),!1,null)))))}var o;Di(t,t.transactionQueueTree_);for(let t=0;t<i.length;t++)X(i[t]);Ni(t,t.transactionQueueTree_)}(t,Ri(t,n),i),i}function Ai(t,e){let n,i=t.transactionQueueTree_;for(n=wt(e);null!==n&&void 0===Jn(i);)i=Yn(i,n),n=wt(e=Et(e));return i}function Ri(t,e){const n=[];return xi(t,e,n),n.sort(((t,e)=>t.order-e.order)),n}function xi(t,e,n){const i=Jn(e);if(i)for(let t=0;t<i.length;t++)n.push(i[t]);ei(e,(e=>{xi(t,e,n)}))}function Di(t,e){const n=Jn(e);if(n){let t=0;for(let e=0;e<n.length;e++)2!==n[e].status&&(n[t]=n[e],t++);n.length=t,Zn(e,n.length>0?n:void 0)}ei(e,(e=>{Di(t,e)}))}function Pi(t,e){const n=ii(Ai(t,e)),i=Yn(t.transactionQueueTree_,e);return function(t,e,n){let i=n?t:t.parent;for(;null!==i;){if(e(i))return!0;i=i.parent}}(i,(e=>{Li(t,e)})),Li(t,i),ni(i,(e=>{Li(t,e)})),n}function Li(t,e){const n=Jn(e);if(n){const i=[];let s=[],r=-1;for(let e=0;e<n.length;e++)3===n[e].status||(1===n[e].status?((0,v.assert)(r===e-1,"All SENT items should be at beginning of queue."),r=e,n[e].status=3,n[e].abortReason="set"):((0,v.assert)(0===n[e].status,"Unexpected transaction status in abort"),n[e].unwatcher(),s=s.concat(Pn(t.serverSyncTree_,n[e].currentWriteId,!0)),n[e].onComplete&&i.push(n[e].onComplete.bind(null,new Error("set"),!1,null))));-1===r?Zn(e,void 0):n.length=r+1,fi(t.eventQueue_,ii(e),s);for(let t=0;t<i.length;t++)X(i[t])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=function(t,e){const n=Oi(t),i=n.namespace;"firebase.com"===n.domain&&V(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||V("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&U("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new nt(n.host,n.secure,i,s,e,"",i!==n.subdomain),path:new _t(n.pathString)}},Oi=function(t){let e="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof t){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let c=t.indexOf("/");-1===c&&(c=t.length);let u=t.indexOf("?");-1===u&&(u=t.length),e=t.substring(0,Math.min(c,u)),c<u&&(s=function(t){let e="";const n=t.split("/");for(let t=0;t<n.length;t++)if(n[t].length>0){let i=n[t];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(t){}e+="/"+i}return e}(t.substring(c,u)));const d=function(t){const e={};"?"===t.charAt(0)&&(t=t.substring(1));for(const n of t.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):U(`Invalid query segment '${n}' in query '${t}'`)}return e}(t.substring(Math.min(t.length,u)));h=e.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(e.substring(h+1),10)):h=e.length;const f=e.slice(0,h);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const t=e.indexOf(".");i=e.substring(0,t).toLowerCase(),n=e.substring(t+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
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
class Fi{get key(){return Nt(this._path)?null:Tt(this._path)}get ref(){return new Vi(this._repo,this._path)}get _queryIdentifier(){const t=ve(this._queryParams),e=W(t);return"{}"===e?"default":e}get _queryObject(){return ve(this._queryParams)}isEqual(t){if(!((t=(0,v.getModularInstance)(t))instanceof Fi))return!1;const e=this._repo===t._repo,n=At(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return e&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)""!==t.pieces_[n]&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}(this._path)}constructor(t,e,n,i){this._repo=t,this._path=e,this._queryParams=n,this._orderByCalled=i}}class Vi extends Fi{get parent(){const t=It(this._path);return null===t?null:new Vi(this._repo,t)}get root(){let t=this;for(;null!==t.parent;)t=t.parent;return t}constructor(t,e){super(t,e,new ye,!1)}}!function(t){(0,v.assert)(!Nn,"__referenceConstructor has already been defined"),Nn=t}(Vi),function(t){(0,v.assert)(!kn,"__referenceConstructor has already been defined"),kn=t}(Vi);
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
const Ui={};let qi=!1;function Bi(t,e,n,i,s){let r=i||t.options.databaseURL;void 0===r&&(t.options.projectId||V("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),M("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=Mi(r,s),h=l.repoInfo;void 0!==C&&C.env&&(a=C.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${h.namespace}`,l=Mi(r,s),h=l.repoInfo):o=!l.repoInfo.secure;const c=s&&o?new tt(tt.OWNER):new Z(t.name,t.options,e);ci("Invalid Firebase Database URL",l),Nt(l.path)||V("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(t,e,n,i){let s=Ui[e.name];s||(s={},Ui[e.name]=s);let r=s[t.toURLString()];r&&V("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new mi(t,qi,n,i),s[t.toURLString()]=r,r}(h,t,c,new J(t.name,n));return new ji(u,t)}class ji{get _repo(){return this._instanceStarted||(yi(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vi(this._repo,vt())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(t,e){const n=Ui[e];n&&n[t.key]===t||V(`Database ${e}(${t.repoInfo_}) has already been deleted.`),bi(t),delete n[t.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){null===this._rootInternal&&V("Cannot call "+t+" on a deleted database.")}constructor(t,e){this._repoInternal=t,this.app=e,this.type="database",this._instanceStarted=!1}}Mt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)},Mt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};
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
var Hi,Wi;
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
 */Wi=y.SDK_VERSION,E=Wi,(0,y._registerComponent)(new(0,_.Component)("database",((t,{instanceIdentifier:e})=>Bi(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"),t.getProvider("app-check-internal"),e)),"PUBLIC").setMultipleInstances(!0)),(0,y.registerVersion)("@firebase/database","0.13.1",Hi),(0,y.registerVersion)("@firebase/database","0.13.1","esm2017");const Gi={authPage:document.querySelector(".form-auth"),authCloseBtn:document.querySelector(".auth-page__btn-close")};Gi.authCloseBtn.addEventListener("click",(function(){Gi.authPage.classList.add("is-hidden")}));var Ki=s("iB56l");m=s("idPZz");const $i=document.querySelector(".mySwiper");(0,m.default)($i);new(0,Ki.default)(".mySwiper",{modules:[Ki.Navigation,Ki.Autoplay],spaceBetween:5,breakpointsBase:"container",autoplay:{delay:2e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{210:{slidesPerView:2},600:{slidesPerView:6},768:{slidesPerView:8}}});const zi=document.querySelector(".swiper-wrapper");function Qi(e){const n=e.map((({poster_path:e,id:n})=>`<div class="swiper-slide">\n\t\t\t\t<img src="${e?`https://image.tmdb.org/t/p/w500${e}`:t(r)}" alt="poster" class="slide-poster" data-id="${n}"/>\n\t\t\t</div>`)).join("");zi.insertAdjacentHTML("beforeend",n)}var Xi,Yi,Ji={};function Zi(t){return(Zi="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Xi="undefined"!=typeof self?self:void 0,Yi=function(t){t.addBackToTop=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.backgroundColor,n=void 0===e?"#000":e,i=t.cornerOffset,s=void 0===i?20:i,r=t.diameter,o=void 0===r?56:r,a=t.ease,l=void 0===a?q:a,h=t.id,c=void 0===h?"back-to-top":h,u=t.innerHTML,d=void 0===u?'<svg viewBox="0 0 24 24"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path></svg>':u,f=t.onClickScrollTo,p=void 0===f?0:f,g=t.scrollContainer,m=void 0===g?document.body:g,y=t.scrollDuration,_=void 0===y?100:y,v=t.showWhenScrollTopIs,w=void 0===v?1:v,C=t.size,E=void 0===C?o:C,T=t.textColor,b=void 0===T?"#fff":T,I=t.zIndex,S=void 0===I?1:I,N=m===document.body,k=N&&document.documentElement;O();var A=M(),R=!0,x=N?window:m;function D(){V()>=w?P():L()}function P(){R&&(A.className="",R=!1)}function L(){R||(A.className="hidden",R=!0)}function M(){var t=document.createElement("div");return t.id=c,t.className="hidden",t.innerHTML=d,t.addEventListener("click",(function(t){t.preventDefault(),F()})),document.body.appendChild(t),t}function O(){var t=Math.round(.43*E),e=Math.round(.29*E),i="#"+c+"{background:"+n+";-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;bottom:"+s+"px;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-moz-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);color:"+b+";cursor:pointer;display:block;height:"+E+"px;opacity:1;outline:0;position:fixed;right:"+s+"px;-webkit-tap-highlight-color:transparent;-webkit-touch-callout:none;-webkit-transition:bottom .2s,opacity .2s;-o-transition:bottom .2s,opacity .2s;-moz-transition:bottom .2s,opacity .2s;transition:bottom .2s,opacity .2s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:"+E+"px;z-index:"+S+"}#"+c+" svg{display:block;fill:currentColor;height:"+t+"px;margin:"+e+"px auto 0;width:"+t+"px}#"+c+".hidden{bottom:-"+E+"px;opacity:0}",r=document.createElement("style");r.appendChild(document.createTextNode(i)),document.head.insertAdjacentElement("afterbegin",r)}function F(){var t="function"==typeof p?p():p,e=window,n=e.performance,i=e.requestAnimationFrame;if(_<=0||void 0===n||void 0===i)return U(t);var s=n.now(),r=V(),o=r-t;i((function t(e){var n=Math.min((e-s)/_,1);U(r-Math.round(l(n)*o)),n<1&&i(t)}))}function V(){return m.scrollTop||k&&document.documentElement.scrollTop||0}function U(t){m.scrollTop=t,k&&(document.documentElement.scrollTop=t)}function q(t){return.5*(1-Math.cos(Math.PI*t))}x.addEventListener("scroll",D),D()}},"function"==typeof define&&define.amd?define(["exports"],Yi):"object"===Zi(Ji)&&"string"!=typeof Ji.nodeName?Yi(Ji):Yi(Xi.commonJsStrict={}),(0,Ji.addBackToTop)({diameter:40,backgroundColor:"#f7f7f7",textColor:"#FF6B01"});y=s("ix4Jr");
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
(0,(y=s("ix4Jr")).registerVersion)("firebase","9.8.3","app");var ts,es=(0,(y=s("ix4Jr")).initializeApp)({apiKey:"AIzaSyDl7udEYc6yHxHTsho7iDZ8HPitihaHEU4",authDomain:"filmoteka-46cf5.firebaseapp.com",databaseURL:"https://filmoteka-46cf5-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-46cf5",storageBucket:"filmoteka-46cf5.appspot.com",messagingSenderId:"1056346694690",appId:"1:1056346694690:web:c5c566f94f38d4dac1167b",measurementId:"G-9M2V8M9NTK"}),ns=s("amyG6"),is=(y=s("ix4Jr"),_=s("4a6xH"),w=s("7vF8m"),v=s("ffjl9"),"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{}),ss={},rs=rs||{},os=is||self;function as(){}function ls(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function hs(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var cs="closure_uid_"+(1e9*Math.random()>>>0),us=0;function ds(t,e,n){return t.call.apply(t.bind,arguments)}function fs(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function ps(t,e,n){return(ps=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ds:fs).apply(null,arguments)}function gs(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function ms(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,i){for(var s=Array(arguments.length-2),r=2;r<arguments.length;r++)s[r-2]=arguments[r];return e.prototype[n].apply(t,s)}}function ys(){this.s=this.s,this.o=this.o}var _s={};ys.prototype.s=!1,ys.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,cs)&&t[cs]||(t[cs]=++us)}(this);delete _s[t]}},ys.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const vs=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},ws=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const i=t.length,s="string"==typeof t?t.split(""):t;for(let r=0;r<i;r++)r in s&&e.call(n,s[r],r,t)};function Cs(t){return Array.prototype.concat.apply([],arguments)}function Es(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Ts(t){return/^[\s\xa0]*$/.test(t)}var bs,Is=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ss(t,e){return-1!=t.indexOf(e)}function Ns(t,e){return t<e?-1:t>e?1:0}t:{var ks=os.navigator;if(ks){var As=ks.userAgent;if(As){bs=As;break t}}bs=""}function Rs(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function xs(t){const e={};for(const n in t)e[n]=t[n];return e}var Ds="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ps(t,e){let n,i;for(let e=1;e<arguments.length;e++){for(n in i=arguments[e],i)t[n]=i[n];for(let e=0;e<Ds.length;e++)n=Ds[e],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Ls(t){return Ls[" "](t),t}Ls[" "]=as;var Ms,Os,Fs=Ss(bs,"Opera"),Vs=Ss(bs,"Trident")||Ss(bs,"MSIE"),Us=Ss(bs,"Edge"),qs=Us||Vs,Bs=Ss(bs,"Gecko")&&!(Ss(bs.toLowerCase(),"webkit")&&!Ss(bs,"Edge"))&&!(Ss(bs,"Trident")||Ss(bs,"MSIE"))&&!Ss(bs,"Edge"),js=Ss(bs.toLowerCase(),"webkit")&&!Ss(bs,"Edge");function Hs(){var t=os.document;return t?t.documentMode:void 0}t:{var Ws="",Gs=(Os=bs,Bs?/rv:([^\);]+)(\)|;)/.exec(Os):Us?/Edge\/([\d\.]+)/.exec(Os):Vs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Os):js?/WebKit\/(\S+)/.exec(Os):Fs?/(?:Version)[ \/]?(\S+)/.exec(Os):void 0);if(Gs&&(Ws=Gs?Gs[1]:""),Vs){var Ks=Hs();if(null!=Ks&&Ks>parseFloat(Ws)){Ms=String(Ks);break t}}Ms=Ws}var $s,zs={};function Qs(){return function(t){var e=zs;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=Is(String(Ms)).split("."),n=Is("9").split("."),i=Math.max(e.length,n.length);for(let o=0;0==t&&o<i;o++){var s=e[o]||"",r=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],0==s[0].length&&0==r[0].length)break;t=Ns(0==s[1].length?0:parseInt(s[1],10),0==r[1].length?0:parseInt(r[1],10))||Ns(0==s[2].length,0==r[2].length)||Ns(s[2],r[2]),s=s[3],r=r[3]}while(0==t)}return 0<=t}))}if(os.document&&Vs){var Xs=Hs();$s=Xs||(parseInt(Ms,10)||void 0)}else $s=void 0;var Ys=$s,Js=function(){if(!os.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{os.addEventListener("test",as,e),os.removeEventListener("test",as,e)}catch(t){}return t}();function Zs(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function tr(t,e){if(Zs.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Bs){t:{try{Ls(e.nodeName);var s=!0;break t}catch(t){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:er[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&tr.Z.h.call(this)}}Zs.prototype.h=function(){this.defaultPrevented=!0},ms(tr,Zs);var er={2:"touch",3:"pen",4:"mouse"};tr.prototype.h=function(){tr.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var nr="closure_listenable_"+(1e6*Math.random()|0),ir=0;function sr(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.ia=s,this.key=++ir,this.ca=this.fa=!1}function rr(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function or(t){this.src=t,this.g={},this.h=0}function ar(t,e){var n=e.type;if(n in t.g){var i,s=t.g[n],r=vs(s,e);(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(rr(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lr(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.ca&&r.listener==e&&r.capture==!!n&&r.ia==i)return s}return-1}or.prototype.add=function(t,e,n,i,s){var r=t.toString();(t=this.g[r])||(t=this.g[r]=[],this.h++);var o=lr(t,e,i,s);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new sr(e,this.src,r,!!i,s)).fa=n,t.push(e)),e};var hr="closure_lm_"+(1e6*Math.random()|0),cr={};function ur(t,e,n,i,s){if(i&&i.once)return fr(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)ur(t,e[r],n,i,s);return null}return n=wr(n),t&&t[nr]?t.N(e,n,hs(i)?!!i.capture:!!i,s):dr(t,e,n,!1,i,s)}function dr(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=hs(s)?!!s.capture:!!s,a=_r(t);if(a||(t[hr]=a=new or(t)),(n=a.add(e,n,i,o,r)).proxy)return n;if(i=function(){function t(n){return e.call(t.src,t.listener,n)}var e=yr;return t}(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Js||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(mr(e.toString()),i);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(i)}return n}function fr(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)fr(t,e[r],n,i,s);return null}return n=wr(n),t&&t[nr]?t.O(e,n,hs(i)?!!i.capture:!!i,s):dr(t,e,n,!0,i,s)}function pr(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)pr(t,e[r],n,i,s);else i=hs(i)?!!i.capture:!!i,n=wr(n),t&&t[nr]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lr(r=t.g[e],n,i,s))&&(rr(r[n]),Array.prototype.splice.call(r,n,1),0==r.length&&(delete t.g[e],t.h--)))):t&&(t=_r(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lr(e,n,i,s)),(n=-1<t?e[t]:null)&&gr(n))}function gr(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[nr])ar(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(mr(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=_r(e))?(ar(n,t),0==n.h&&(n.src=null,e[hr]=null)):rr(t)}}}function mr(t){return t in cr?cr[t]:cr[t]="on"+t}function yr(t,e){if(t.ca)t=!0;else{e=new tr(e,this);var n=t.listener,i=t.ia||t.src;t.fa&&gr(t),t=n.call(i,e)}return t}function _r(t){return(t=t[hr])instanceof or?t:null}var vr="__closure_events_fn_"+(1e9*Math.random()>>>0);function wr(t){return"function"==typeof t?t:(t[vr]||(t[vr]=function(e){return t.handleEvent(e)}),t[vr])}function Cr(){ys.call(this),this.i=new or(this),this.P=this,this.I=null}function Er(t,e){var n,i=t.I;if(i)for(n=[];i;i=i.I)n.push(i);if(t=t.P,i=e.type||e,"string"==typeof e)e=new Zs(e,t);else if(e instanceof Zs)e.target=e.target||t;else{var s=e;Ps(e=new Zs(i,t),s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=Tr(o,i,!0,e)&&s}if(s=Tr(o=e.g=t,i,!0,e)&&s,s=Tr(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)s=Tr(o=e.g=n[r],i,!1,e)&&s}function Tr(t,e,n,i){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ar(t.i,o),s=!1!==a.call(l,i)&&s}}return s&&!i.defaultPrevented}ms(Cr,ys),Cr.prototype[nr]=!0,Cr.prototype.removeEventListener=function(t,e,n,i){pr(this,t,e,n,i)},Cr.prototype.M=function(){if(Cr.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],i=0;i<n.length;i++)rr(n[i]);delete e.g[t],e.h--}}this.I=null},Cr.prototype.N=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)},Cr.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};var br=os.JSON.stringify;function Ir(){var t=Dr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var Sr,Nr=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new kr),(t=>t.reset()));class kr{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Ar(t){os.setTimeout((()=>{throw t}),0)}function Rr(t,e){Sr||function(){var t=os.Promise.resolve(void 0);Sr=function(){t.then(Pr)}}(),xr||(Sr(),xr=!0),Dr.add(t,e)}var xr=!1,Dr=new class{add(t,e){const n=Nr.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Pr(){for(var t;t=Ir();){try{t.h.call(t.g)}catch(t){Ar(t)}var e=Nr;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}xr=!1}function Lr(t,e){Cr.call(this),this.h=t||1,this.g=e||os,this.j=ps(this.kb,this),this.l=Date.now()}function Mr(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Or(t,e,n){if("function"==typeof t)n&&(t=ps(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=ps(t.handleEvent,t)}return 2147483647<Number(e)?-1:os.setTimeout(t,e||0)}function Fr(t){t.g=Or((()=>{t.g=null,t.i&&(t.i=!1,Fr(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}ms(Lr,Cr),(ts=Lr.prototype).da=!1,ts.S=null,ts.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Er(this,"tick"),this.da&&(Mr(this),this.start()))}},ts.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},ts.M=function(){Lr.Z.M.call(this),Mr(this),delete this.g};class Vr extends ys{l(t){this.h=arguments,this.g?this.i=!0:Fr(this)}M(){super.M(),this.g&&(os.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function Ur(t){ys.call(this),this.h=t,this.g={}}ms(Ur,ys);var qr=[];function Br(t,e,n,i){Array.isArray(n)||(n&&(qr[0]=n.toString()),n=qr);for(var s=0;s<n.length;s++){var r=ur(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function jr(t){Rs(t.g,(function(t,e){this.g.hasOwnProperty(e)&&gr(t)}),t),t.g={}}function Hr(){this.g=!0}function Wr(t,e,n,i){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if("noop"!=r&&"stop"!=r&&"close"!=r)for(var o=1;o<s.length;o++)s[o]=""}}}return br(n)}catch(t){return e}}(t,n)+(i?" "+i:"")}))}Ur.prototype.M=function(){Ur.Z.M.call(this),jr(this)},Ur.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Hr.prototype.Aa=function(){this.g=!1},Hr.prototype.info=function(){};var Gr={},Kr=null;function $r(){return Kr=Kr||new Cr}function zr(t){Zs.call(this,Gr.Ma,t)}function Qr(t){const e=$r();Er(e,new zr(e,t))}function Xr(t,e){Zs.call(this,Gr.STAT_EVENT,t),this.stat=e}function Yr(t){const e=$r();Er(e,new Xr(e,t))}function Jr(t,e){Zs.call(this,Gr.Na,t),this.size=e}function Zr(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return os.setTimeout((function(){t()}),e)}Gr.Ma="serverreachability",ms(zr,Zs),Gr.STAT_EVENT="statevent",ms(Xr,Zs),Gr.Na="timingevent",ms(Jr,Zs);var to={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},eo={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function no(){}function io(t){return t.h||(t.h=t.i())}function so(){}no.prototype.h=null;var ro,oo={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ao(){Zs.call(this,"d")}function lo(){Zs.call(this,"c")}function ho(){}function co(t,e,n,i){this.l=t,this.j=e,this.m=n,this.X=i||1,this.V=new Ur(this),this.P=fo,t=qs?125:void 0,this.W=new Lr(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new uo}function uo(){this.i=null,this.g="",this.h=!1}ms(ao,Zs),ms(lo,Zs),ms(ho,no),ho.prototype.g=function(){return new XMLHttpRequest},ho.prototype.i=function(){return{}},ro=new ho;var fo=45e3,po={},go={};function mo(t,e,n){t.K=1,t.v=Uo(Po(e)),t.s=n,t.U=!0,yo(t,null)}function yo(t,e){t.F=Date.now(),Co(t),t.A=Po(t.v);var n=t.A,i=t.X;Array.isArray(i)||(i=[String(i)]),Jo(n.h,"t",i),t.C=0,n=t.l.H,t.h=new uo,t.g=Ja(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Vr(ps(t.Ia,t,t.g),t.O)),Br(t.V,t.g,"readystatechange",t.gb),e=t.H?xs(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qr(1),function(t,e,n,i,s,r){t.info((function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var c=h[0];h=h[1];var u=c.split("_");o=2<=u.length&&"type"==u[1]?o+(c+"=")+h+"&":o+(c+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function _o(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function vo(t,e,n){let i,s=!0;for(;!t.I&&t.C<n.length;){if(i=wo(t,n),i==go){4==e&&(t.o=4,Yr(14),s=!1),Wr(t.j,t.m,null,"[Incomplete Response]");break}if(i==po){t.o=4,Yr(15),Wr(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}Wr(t.j,t.m,i,null),So(t,i)}_o(t)&&i!=go&&i!=po&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Yr(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Wa(e),e.L=!0,Yr(11))):(Wr(t.j,t.m,n,"[Invalid Chunked Response]"),Io(t),bo(t))}function wo(t,e){var n=t.C,i=e.indexOf("\n",n);return-1==i?go:(n=Number(e.substring(n,i)),isNaN(n)?po:(i+=1)+n>e.length?go:(e=e.substr(i,n),t.C=i+n,e))}function Co(t){t.Y=Date.now()+t.P,Eo(t,t.P)}function Eo(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Zr(ps(t.eb,t),e)}function To(t){t.B&&(os.clearTimeout(t.B),t.B=null)}function bo(t){0==t.l.G||t.I||$a(t.l,t)}function Io(t){To(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Mr(t.W),jr(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function So(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||sa(n.i,t)))if(n.I=t.N,!t.J&&sa(n.i,t)&&3==n.G){try{var i=n.Ca.g.parse(e)}catch(t){i=null}if(Array.isArray(i)&&3==i.length){var s=i;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Ka(n),Ma(n)}Ha(n),Yr(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=Zr(ps(n.ab,n),6e3));if(1>=ia(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Qa(n,11)}else if((t.J||n.g==t)&&Ka(n),!Ts(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let h=s[e];if(n.U=h[0],h=h[1],2==n.G)if("c"==h[0]){n.J=h[1],n.la=h[2];const e=h[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=h[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const c=h[5];null!=c&&"number"==typeof c&&0<c&&(i=1.5*c,n.K=i,n.h.info("backChannelRequestTimeoutMs_="+i)),i=n;const u=t.g;if(u){const t=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var r=i.i;!r.g&&(Ss(t,"spdy")||Ss(t,"quic")||Ss(t,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(ra(r,r.h),r.h=null))}if(i.D){const t=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(i.sa=t,Vo(i.F,i.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((i=n).oa=Ya(i,i.H?i.la:null,i.W),o.J){oa(i.i,o);var a=o,l=i.K;l&&a.setTimeout(l),a.B&&(To(a),Co(a)),i.g=o}else ja(i);0<n.l.length&&Va(n)}else"stop"!=h[0]&&"close"!=h[0]||Qa(n,7);else 3==n.G&&("stop"==h[0]||"close"==h[0]?"stop"==h[0]?Qa(n,7):La(n):"noop"!=h[0]&&n.j&&n.j.wa(h),n.A=0)}Qr(4)}catch(t){}}function No(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(ls(t)||"string"==typeof t)ws(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(ls(t)||"string"==typeof t){n=[];for(var i=t.length,s=0;s<i;s++)n.push(s)}else for(s in n=[],i=0,t)n[i++]=s;i=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(ls(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}for(i in e=[],n=0,t)e[n++]=t[i];return e}(t),s=i.length;for(var r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}}function ko(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var i=0;i<n;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof ko)for(n=t.T(),i=0;i<n.length;i++)this.set(n[i],t.get(n[i]));else for(i in t)this.set(i,t[i])}function Ao(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var i=t.g[e];Ro(t.h,i)&&(t.g[n++]=i),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)Ro(s,i=t.g[e])||(t.g[n++]=i,s[i]=1),e++;t.g.length=n}}function Ro(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(ts=co.prototype).setTimeout=function(t){this.P=t},ts.gb=function(t){t=t.target;const e=this.L;e&&3==Aa(t)?e.l():this.Ia(t)},ts.Ia=function(t){try{if(t==this.g)t:{const c=Aa(this.g);var e=this.g.Da();const u=this.g.ba();if(!(3>c)&&(3!=c||qs||this.g&&(this.h.h||this.g.ga()||Ra(this.g)))){this.I||4!=c||7==e||Qr(8==e||0>=u?3:2),To(this);var n=this.g.ba();this.N=n;e:if(_o(this)){var i=Ra(this.g);t="";var s=i.length,r=4==Aa(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Io(this),bo(this);var o="";break e}this.h.i=new os.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,i,s,r,o){t.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+r+" "+o}))}(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ts(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,Yr(12),Io(this),bo(this);break t}Wr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,So(this,n)}this.U?(vo(this,c,o),qs&&this.i&&3==c&&(Br(this.V,this.W,"tick",this.fb),this.W.start())):(Wr(this.j,this.m,o,null),So(this,o)),4==c&&Io(this),this.i&&!this.I&&(4==c?$a(this.l,this):(this.i=!1,Co(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Yr(12)):(this.o=0,Yr(13)),Io(this),bo(this)}}}catch(t){}},ts.fb=function(){if(this.g){var t=Aa(this.g),e=this.g.ga();this.C<e.length&&(To(this),vo(this,t,e),this.i&&4!=t&&Co(this))}},ts.cancel=function(){this.I=!0,Io(this)},ts.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Qr(3),Yr(17)),Io(this),this.o=2,bo(this)):Eo(this,this.Y-t)},(ts=ko.prototype).R=function(){Ao(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},ts.T=function(){return Ao(this),this.g.concat()},ts.get=function(t,e){return Ro(this.h,t)?this.h[t]:e},ts.set=function(t,e){Ro(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},ts.forEach=function(t,e){for(var n=this.T(),i=0;i<n.length;i++){var s=n[i],r=this.get(s);t.call(e,r,s,this)}};var xo=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Do(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Do){this.g=void 0!==e?e:t.g,Lo(this,t.j),this.s=t.s,Mo(this,t.i),Oo(this,t.m),this.l=t.l,e=t.h;var n=new zo;n.i=e.i,e.g&&(n.g=new ko(e.g),n.h=e.h),Fo(this,n),this.o=t.o}else t&&(n=String(t).match(xo))?(this.g=!!e,Lo(this,n[1]||"",!0),this.s=qo(n[2]||""),Mo(this,n[3]||"",!0),Oo(this,n[4]),this.l=qo(n[5]||"",!0),Fo(this,n[6]||"",!0),this.o=qo(n[7]||"")):(this.g=!!e,this.h=new zo(null,this.g))}function Po(t){return new Do(t)}function Lo(t,e,n){t.j=n?qo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Mo(t,e,n){t.i=n?qo(e,!0):e}function Oo(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fo(t,e,n){e instanceof zo?(t.h=e,function(t,e){e&&!t.j&&(Qo(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Xo(this,e),Jo(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Bo(e,Ko)),t.h=new zo(e,t.g))}function Vo(t,e,n){t.h.set(e,n)}function Uo(t){return Vo(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function qo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Bo(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,jo),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function jo(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Do.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Bo(e,Ho,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Bo(e,Ho,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Bo(n,"/"==n.charAt(0)?Go:Wo,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Bo(n,$o)),t.join("")};var Ho=/[#\/\?@]/g,Wo=/[#\?:]/g,Go=/[#\?]/g,Ko=/[#\?@]/g,$o=/#/g;function zo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Qo(t){t.g||(t.g=new ko,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Xo(t,e){Qo(t),e=Zo(t,e),Ro(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Ro((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ao(t)))}function Yo(t,e){return Qo(t),e=Zo(t,e),Ro(t.g.h,e)}function Jo(t,e,n){Xo(t,e),0<n.length&&(t.i=null,t.g.set(Zo(t,e),Es(n)),t.h+=n.length)}function Zo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(ts=zo.prototype).add=function(t,e){Qo(this),this.i=null,t=Zo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},ts.forEach=function(t,e){Qo(this),this.g.forEach((function(n,i){ws(n,(function(n){t.call(e,n,i,this)}),this)}),this)},ts.T=function(){Qo(this);for(var t=this.g.R(),e=this.g.T(),n=[],i=0;i<e.length;i++)for(var s=t[i],r=0;r<s.length;r++)n.push(e[i]);return n},ts.R=function(t){Qo(this);var e=[];if("string"==typeof t)Yo(this,t)&&(e=Cs(e,this.g.get(Zo(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=Cs(e,t[n])}return e},ts.set=function(t,e){return Qo(this),this.i=null,Yo(this,t=Zo(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},ts.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},ts.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var i=e[n],s=encodeURIComponent(String(i));i=this.R(i);for(var r=0;r<i.length;r++){var o=s;""!==i[r]&&(o+="="+encodeURIComponent(String(i[r]))),t.push(o)}}return this.i=t.join("&")};function ta(t){this.l=t||ea,os.PerformanceNavigationTiming?t=0<(t=os.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(os.g&&os.g.Ea&&os.g.Ea()&&os.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ea=10;function na(t){return!!t.h||!!t.g&&t.g.size>=t.j}function ia(t){return t.h?1:t.g?t.g.size:0}function sa(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function ra(t,e){t.g?t.g.add(e):t.h=e}function oa(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function aa(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Es(t.i)}function la(){}function ha(){this.g=new la}function ca(t,e,n){const i=n||"";try{No(t,(function(t,n){let s=t;hs(t)&&(s=br(t)),e.push(i+n+"="+encodeURIComponent(s))}))}catch(t){throw e.push(i+"type="+encodeURIComponent("_badmap")),t}}function ua(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch(t){}}function da(t){this.l=t.$b||null,this.j=t.ib||!1}function fa(t,e){Cr.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=pa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ta.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},la.prototype.stringify=function(t){return os.JSON.stringify(t,void 0)},la.prototype.parse=function(t){return os.JSON.parse(t,void 0)},ms(da,no),da.prototype.g=function(){return new fa(this.l,this.j)},da.prototype.i=function(t){return function(){return t}}({}),ms(fa,Cr);var pa=0;function ga(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ya(t)}function ya(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(ts=fa.prototype).open=function(t,e){if(this.readyState!=pa)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ya(this)},ts.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||os).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},ts.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,ma(this)),this.readyState=pa},ts.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ya(this)),this.g&&(this.readyState=3,ya(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==os.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ga(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},ts.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ma(this):ya(this),3==this.readyState&&ga(this)}},ts.Ua=function(t){this.g&&(this.response=this.responseText=t,ma(this))},ts.Ta=function(t){this.g&&(this.response=t,ma(this))},ts.ha=function(){this.g&&ma(this)},ts.setRequestHeader=function(t,e){this.v.append(t,e)},ts.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},ts.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(fa.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var _a=os.JSON.parse;function va(t){Cr.call(this),this.headers=new ko,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=wa,this.K=this.L=!1}ms(va,Cr);var wa="",Ca=/^https?$/i,Ea=["POST","PUT"];function Ta(t){return"content-type"==t.toLowerCase()}function ba(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Ia(t),Na(t)}function Ia(t){t.D||(t.D=!0,Er(t,"complete"),Er(t,"error"))}function Sa(t){if(t.h&&void 0!==rs&&(!t.C[1]||4!=Aa(t)||2!=t.ba()))if(t.v&&4==Aa(t))Or(t.Fa,0,t);else if(Er(t,"readystatechange"),4==Aa(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var i;if(i=0===a){var s=String(t.H).match(xo)[1]||null;if(!s&&os.self&&os.self.location){var r=os.self.location.protocol;s=r.substr(0,r.length-1)}i=!Ca.test(s?s.toLowerCase():"")}n=i}if(n)Er(t,"complete"),Er(t,"success");else{t.m=6;try{var o=2<Aa(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Ia(t)}}finally{Na(t)}}}function Na(t,e){if(t.g){ka(t);const n=t.g,i=t.C[0]?as:null;t.g=null,t.C=null,e||Er(t,"ready");try{n.onreadystatechange=i}catch(t){}}}function ka(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(os.clearTimeout(t.A),t.A=null)}function Aa(t){return t.g?t.g.readyState:0}function Ra(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case wa:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xa(t,e,n){t:{for(i in n){var i=!1;break t}i=!0}i||(n=function(t){let e="";return Rs(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Vo(t,e,n))}function Da(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pa(t){this.za=0,this.l=[],this.h=new Hr,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Da("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Da("baseRetryDelayMs",5e3,t),this.$a=Da("retryDelaySeedMs",1e4,t),this.Ya=Da("forwardChannelMaxRetries",2,t),this.ra=Da("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new ta(t&&t.concurrentRequestLimit),this.Ca=new ha,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function La(t){if(Oa(t),3==t.G){var e=t.V++,n=Po(t.F);Vo(n,"SID",t.J),Vo(n,"RID",e),Vo(n,"TYPE","terminate"),qa(t,n),(e=new co(t,t.h,e,void 0)).K=2,e.v=Uo(Po(n)),n=!1,os.navigator&&os.navigator.sendBeacon&&(n=os.navigator.sendBeacon(e.v.toString(),"")),!n&&os.Image&&((new Image).src=e.v,n=!0),n||(e.g=Ja(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Co(e)}Xa(t)}function Ma(t){t.g&&(Wa(t),t.g.cancel(),t.g=null)}function Oa(t){Ma(t),t.u&&(os.clearTimeout(t.u),t.u=null),Ka(t),t.i.cancel(),t.m&&("number"==typeof t.m&&os.clearTimeout(t.m),t.m=null)}function Fa(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Va(t)}function Va(t){na(t.i)||t.m||(t.m=!0,Rr(t.Ha,t),t.C=0)}function Ua(t,e){var n;n=e?e.m:t.V++;const i=Po(t.F);Vo(i,"SID",t.J),Vo(i,"RID",n),Vo(i,"AID",t.U),qa(t,i),t.o&&t.s&&xa(i,t.o,t.s),n=new co(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=Ba(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ra(t.i,n),mo(n,i,e)}function qa(t,e){t.j&&No({},(function(t,n){Vo(e,n,t)}))}function Ba(t,e,n){n=Math.min(t.l.length,n);var i=t.j?ps(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let r=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),r=!1;else try{ca(a,t,"req"+n+"_")}catch(t){i&&i(a)}}if(r){i=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,i}function ja(t){t.g||t.u||(t.Y=1,Rr(t.Ga,t),t.A=0)}function Ha(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=Zr(ps(t.Ga,t),za(t,t.A)),t.A++,!0)}function Wa(t){null!=t.B&&(os.clearTimeout(t.B),t.B=null)}function Ga(t){t.g=new co(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Po(t.oa);Vo(e,"RID","rpc"),Vo(e,"SID",t.J),Vo(e,"CI",t.N?"0":"1"),Vo(e,"AID",t.U),qa(t,e),Vo(e,"TYPE","xmlhttp"),t.o&&t.s&&xa(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Uo(Po(e)),n.s=null,n.U=!0,yo(n,t)}function Ka(t){null!=t.v&&(os.clearTimeout(t.v),t.v=null)}function $a(t,e){var n=null;if(t.g==e){Ka(t),Wa(t),t.g=null;var i=2}else{if(!sa(t.i,e))return;n=e.D,oa(t.i,e),i=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==i){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;Er(i=$r(),new Jr(i,n,e,s)),Va(t)}else ja(t);else if(3==(s=e.o)||0==s&&0<t.I||!(1==i&&function(t,e){return!(ia(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=Zr(ps(t.Ha,t,e),za(t,t.C)),t.C++,0)))}(t,e)||2==i&&Ha(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Qa(t,5);break;case 4:Qa(t,10);break;case 3:Qa(t,6);break;default:Qa(t,2)}}function za(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Qa(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var i=ps(t.jb,t);n||(n=new Do("//www.google.com/images/cleardot.gif"),os.location&&"http"==os.location.protocol||Lo(n,"https"),Uo(n)),function(t,e){const n=new Hr;if(os.Image){const i=new Image;i.onload=gs(ua,n,i,"TestLoadImage: loaded",!0,e),i.onerror=gs(ua,n,i,"TestLoadImage: error",!1,e),i.onabort=gs(ua,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=gs(ua,n,i,"TestLoadImage: timeout",!1,e),os.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=t}else e(!1)}(n.toString(),i)}else Yr(2);t.G=0,t.j&&t.j.va(e),Xa(t),Oa(t)}function Xa(t){t.G=0,t.I=-1,t.j&&(0==aa(t.i).length&&0==t.l.length||(t.i.i.length=0,Es(t.l),t.l.length=0),t.j.ua())}function Ya(t,e,n){let i=function(t){return t instanceof Do?Po(t):new Do(t,void 0)}(n);if(""!=i.i)e&&Mo(i,e+"."+i.i),Oo(i,i.m);else{const t=os.location;i=function(t,e,n,i){var s=new Do(null,void 0);return t&&Lo(s,t),e&&Mo(s,e),n&&Oo(s,n),i&&(s.l=i),s}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&Rs(t.aa,(function(t,e){Vo(i,e,t)})),e=t.D,n=t.sa,e&&n&&Vo(i,e,n),Vo(i,"VER",t.ma),qa(t,i),i}function Ja(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new va(new da({ib:!0})):new va(t.qa)).L=t.H,e}function Za(){}function tl(){if(Vs&&!(10<=Number(Ys)))throw Error("Environmental error: no available transport.")}function el(t,e){Cr.call(this),this.g=new Pa(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Ts(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ts(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new sl(this)}function nl(t){ao.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function il(){lo.call(this),this.status=1}function sl(t){this.g=t}(ts=va.prototype).ea=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ro.g(),this.C=this.u?io(this.u):io(ro),this.g.onreadystatechange=ps(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void ba(this,t)}t=n||"";const s=new ko(this.headers);i&&No(i,(function(t,e){s.set(e,t)})),i=function(t){t:{var e=Ta;const n=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in i&&e.call(void 0,i[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(s.T()),n=os.FormData&&t instanceof os.FormData,!(0<=vs(Ea,e))||i||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ka(this),0<this.B&&((this.K=function(t){return Vs&&Qs()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ps(this.pa,this)):this.A=Or(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){ba(this,t)}},ts.pa=function(){void 0!==rs&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Er(this,"timeout"),this.abort(8))},ts.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Er(this,"complete"),Er(this,"abort"),Na(this))},ts.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Na(this,!0)),va.Z.M.call(this)},ts.Fa=function(){this.s||(this.F||this.v||this.l?Sa(this):this.cb())},ts.cb=function(){Sa(this)},ts.ba=function(){try{return 2<Aa(this)?this.g.status:-1}catch(t){return-1}},ts.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},ts.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_a(e)}},ts.Da=function(){return this.m},ts.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(ts=Pa.prototype).ma=8,ts.G=1,ts.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},ts.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new co(this,this.h,t,void 0);let r=this.s;if(this.P&&(r?(r=xs(r),Ps(r,this.P)):r=this.P),null===this.o&&(s.H=r),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var i=this.l[n];if(void 0===(i="__data__"in i.g&&"string"==typeof(i=i.g.__data__)?i.length:void 0))break;if(4096<(e+=i)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Ba(this,s,e),Vo(n=Po(this.F),"RID",t),Vo(n,"CVER",22),this.D&&Vo(n,"X-HTTP-Session-Id",this.D),qa(this,n),this.o&&r&&xa(n,this.o,r),ra(this.i,s),this.Ra&&Vo(n,"TYPE","init"),this.ja?(Vo(n,"$req",e),Vo(n,"SID","null"),s.$=!0,mo(s,n,null)):mo(s,n,e),this.G=2}}else 3==this.G&&(t?Ua(this,t):0==this.l.length||na(this.i)||Ua(this))},ts.Ga=function(){if(this.u=null,Ga(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=Zr(ps(this.bb,this),t)}},ts.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Yr(10),Ma(this),Ga(this))},ts.ab=function(){null!=this.v&&(this.v=null,Ma(this),Ha(this),Yr(19))},ts.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Yr(2)):(this.h.info("Failed to ping google.com"),Yr(1))},(ts=Za.prototype).xa=function(){},ts.wa=function(){},ts.va=function(){},ts.ua=function(){},ts.Oa=function(){},tl.prototype.g=function(t,e){return new el(t,e)},ms(el,Cr),el.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Rr(ps(t.hb,t,e))),Yr(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Ya(t,null,t.W),Va(t)},el.prototype.close=function(){La(this.g)},el.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Fa(this.g,e)}else this.v?((e={}).__data__=br(t),Fa(this.g,e)):Fa(this.g,t)},el.prototype.M=function(){this.g.j=null,delete this.j,La(this.g),delete this.g,el.Z.M.call(this)},ms(nl,ao),ms(il,lo),ms(sl,Za),sl.prototype.xa=function(){Er(this.g,"a")},sl.prototype.wa=function(t){Er(this.g,new nl(t))},sl.prototype.va=function(t){Er(this.g,new il(t))},sl.prototype.ua=function(){Er(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,el.prototype.send=el.prototype.u,el.prototype.open=el.prototype.m,el.prototype.close=el.prototype.close,to.NO_ERROR=0,to.TIMEOUT=8,to.HTTP_ERROR=6,eo.COMPLETE="complete",so.EventType=oo,oo.OPEN="a",oo.CLOSE="b",oo.ERROR="c",oo.MESSAGE="d",Cr.prototype.listen=Cr.prototype.N,va.prototype.listenOnce=va.prototype.O,va.prototype.getLastError=va.prototype.La,va.prototype.getLastErrorCode=va.prototype.Da,va.prototype.getStatus=va.prototype.ba,va.prototype.getResponseJson=va.prototype.Qa,va.prototype.getResponseText=va.prototype.ga,va.prototype.send=va.prototype.ea;var rl=ss.createWebChannelTransport=function(){return new tl},ol=ss.getStatEventTarget=function(){return $r()},al=ss.ErrorCode=to,ll=ss.EventType=eo,hl=ss.Event=Gr,cl=ss.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},ul=ss.FetchXmlHttpFactory=da,dl=ss.WebChannel=so,fl=ss.XhrIo=va;C=s("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class pl{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}pl.UNAUTHENTICATED=new pl(null),pl.GOOGLE_CREDENTIALS=new pl("google-credentials-uid"),pl.FIRST_PARTY=new pl("first-party-uid"),pl.MOCK_USER=new pl("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
let gl="9.8.3";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=new(0,w.Logger)("@firebase/firestore");function yl(){return ml.logLevel}function _l(t,...e){if(ml.logLevel<=w.LogLevel.DEBUG){const n=e.map(Cl);ml.debug(`Firestore (${gl}): ${t}`,...n)}}function vl(t,...e){if(ml.logLevel<=w.LogLevel.ERROR){const n=e.map(Cl);ml.error(`Firestore (${gl}): ${t}`,...n)}}function wl(t,...e){if(ml.logLevel<=w.LogLevel.WARN){const n=e.map(Cl);ml.warn(`Firestore (${gl}): ${t}`,...n)}}function Cl(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function El(t="Unexpected state"){const e=`FIRESTORE (${gl}) INTERNAL ASSERTION FAILED: `+t;throw vl(e),new Error(e)}function Tl(t,e){t||El()}function bl(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Il={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Sl extends v.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Al{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(pl.UNAUTHENTICATED)))}shutdown(){}}class Rl{start(t,e){let n=this.i;const i=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Nl;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Nl,t.enqueueRetryable((()=>i(this.currentUser)))};const r=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await i(this.currentUser)}))},o=t=>{_l("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(_l("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Nl)}}),0),r()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(_l("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Tl("string"==typeof e.accessToken),new kl(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Tl(null===t||"string"==typeof t),new pl(t)}constructor(t){this.t=t,this.currentUser=pl.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class xl{constructor(t,e,n){this.type="FirstParty",this.user=pl.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Dl{getToken(){return Promise.resolve(new xl(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(pl.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class Pl{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ll{start(t,e){const n=t=>{null!=t.error&&_l("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,_l("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const i=t=>{_l("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>i(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):_l("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Tl("string"==typeof t.token),this.p=t.token,new Pl(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
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
function Ml(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const i=Ml(40);for(let s=0;s<i.length;++s)n.length<20&&i[s]<e&&(n+=t.charAt(i[s]%t.length))}return n}}function Fl(t,e){return t<e?-1:t>e?1:0}function Vl(t,e,n){return t.length===e.length&&t.every(((t,i)=>n(t,e[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ul{static now(){return Ul.fromMillis(Date.now())}static fromDate(t){return Ul.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new Ul(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?Fl(this.nanoseconds,t.nanoseconds):Fl(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Sl(Il.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Sl(Il.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Sl(Il.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Sl(Il.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{static fromTimestamp(t){return new ql(t)}static min(){return new ql(new Ul(0,0))}static max(){return new ql(new Ul(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{get length(){return this.len}isEqual(t){return 0===Bl.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Bl?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const n=t.get(i),s=e.get(i);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&El(),void 0===n?n=t.length-e:n>t.length-e&&El(),this.segments=t,this.offset=e,this.len=n}}class jl extends Bl{construct(t,e,n){return new jl(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Sl(Il.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new jl(e)}static emptyPath(){return new jl([])}}const Hl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wl extends Bl{construct(t,e,n){return new Wl(t,e,n)}static isValidIdentifier(t){return Hl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wl.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Wl(["__name__"])}static fromServerFormat(t){const e=[];let n="",i=0;const s=()=>{if(0===n.length)throw new Sl(Il.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let r=!1;for(;i<t.length;){const e=t[i];if("\\"===e){if(i+1===t.length)throw new Sl(Il.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[i+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Sl(Il.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,i+=2}else"`"===e?(r=!r,i++):"."!==e||r?(n+=e,i++):(s(),i++)}if(s(),r)throw new Sl(Il.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Wl(e)}static emptyPath(){return new Wl([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{static fromPath(t){return new Gl(jl.fromString(t))}static fromName(t){return new Gl(jl.fromString(t).popFirst(5))}static empty(){return new Gl(jl.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===jl.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return jl.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new Gl(new jl(t.slice()))}constructor(t){this.path=t}}
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
 */class Kl{constructor(t,e,n,i){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=i}}Kl.UNKNOWN_ID=-1;function $l(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=ql.fromTimestamp(1e9===i?new Ul(n+1,0):new Ul(n,i));return new Ql(s,Gl.empty(),e)}function zl(t){return new Ql(t.readTime,t.key,-1)}class Ql{static min(){return new Ql(ql.min(),Gl.empty(),-1)}static max(){return new Ql(ql.max(),Gl.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function Xl(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=Gl.comparator(t.documentKey,e.documentKey),0!==n?n:Fl(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Jl{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zl(t){if(t.code!==Il.FAILED_PRECONDITION||t.message!==Yl)throw t;_l("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&El(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new th(((n,i)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,i)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof th?e:th.resolve(e)}catch(t){return th.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):th.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):th.reject(e)}static resolve(t){return new th(((e,n)=>{e(t)}))}static reject(t){return new th(((e,n)=>{n(t)}))}static waitFor(t){return new th(((e,n)=>{let i=0,s=0,r=!1;t.forEach((t=>{++i,t.next((()=>{++s,r&&s===i&&e()}),(t=>n(t)))})),r=!0,s===i&&e()}))}static or(t){let e=th.resolve(!1);for(const n of t)e=e.next((t=>t?th.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,i)=>{n.push(e.call(this,t,i))})),this.waitFor(n)}static mapArray(t,e){return new th(((n,i)=>{const s=t.length,r=new Array(s);let o=0;for(let a=0;a<s;a++){const l=a;e(t[l]).next((t=>{r[l]=t,++o,o===s&&n(r)}),(t=>i(t)))}}))}static doWhile(t,e){return new th(((n,i)=>{const s=()=>{!0===t()?e().next((()=>{s()}),i):n()};s()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(t){return"IndexedDbTransactionError"===t.name}
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
class nh{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sh(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function rh(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nh.ot=-1;class oh{insert(t,e){return new oh(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lh.BLACK,null,null))}remove(t){return new oh(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lh.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(0===i)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ah(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ah(this.root,t,this.comparator,!1)}getReverseIterator(){return new ah(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ah(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||lh.EMPTY}}class ah{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class lh{copy(t,e,n,i,s){return new lh(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const s=n(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,n),null):0===s?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lh.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===e(t,i.key)){if(i.right.isEmpty())return lh.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lh.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lh.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw El();if(this.right.isRed())throw El();const t=this.left.check();if(t!==this.right.check())throw El();return t+(this.isRed()?0:1)}constructor(t,e,n,i,s){this.key=t,this.value=e,this.color=null!=n?n:lh.RED,this.left=null!=i?i:lh.EMPTY,this.right=null!=s?s:lh.EMPTY,this.size=this.left.size+1+this.right.size}}lh.EMPTY=null,lh.RED=!0,lh.BLACK=!1,lh.EMPTY=new class{get key(){throw El()}get value(){throw El()}get color(){throw El()}get left(){throw El()}get right(){throw El()}copy(t,e,n,i,s){return this}insert(t,e,n){return new lh(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class hh{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ch(this.data.getIterator())}getIteratorFrom(t){return new ch(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof hh))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,i=n.getNext().key;if(0!==this.comparator(t,i))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new hh(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new oh(this.comparator)}}class ch{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
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
class uh{static empty(){return new uh([])}unionWith(t){let e=new hh(Wl.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new uh(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Vl(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(Wl.comparator)}}
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
 */let dh=Symbol.iterator;
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
 */class fh{static fromBase64String(t){const e=atob(t);return new fh(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new fh(e)}[dh](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Fl(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}fh.EMPTY_BYTE_STRING=new fh("");const ph=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gh(t){if(Tl(!!t),"string"==typeof t){let e=0;const n=ph.exec(t);if(Tl(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:mh(t.seconds),nanos:mh(t.nanos)}}function mh(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function yh(t){return"string"==typeof t?fh.fromBase64String(t):fh.fromUint8Array(t)}
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
 */function _h(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function vh(t){const e=gh(t.mapValue.fields.__local_write_time__.timestampValue);return new Ul(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(t,e,n,i,s,r,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=s,this.forceLongPolling=r,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ch{static empty(){return new Ch("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ch&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){return null==t}function Th(t){return 0===t&&1/t==-1/0}function bh(t){return"number"==typeof t&&Number.isInteger(t)&&!Th(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Ih={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sh(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_h(t)?4:Fh(t)?9007199254740991:10:El()}function Nh(t,e){if(t===e)return!0;const n=Sh(t);if(n!==Sh(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vh(t).isEqual(vh(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=gh(t.timestampValue),i=gh(e.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return i=e,yh(t.bytesValue).isEqual(yh(i.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return mh(t.geoPointValue.latitude)===mh(e.geoPointValue.latitude)&&mh(t.geoPointValue.longitude)===mh(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return mh(t.integerValue)===mh(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=mh(t.doubleValue),i=mh(e.doubleValue);return n===i?Th(n)===Th(i):isNaN(n)&&isNaN(i)}return!1}(t,e);case 9:return Vl(t.arrayValue.values||[],e.arrayValue.values||[],Nh);case 10:return function(t,e){const n=t.mapValue.fields||{},i=e.mapValue.fields||{};if(ih(n)!==ih(i))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===i[t]||!Nh(n[t],i[t])))return!1;return!0}(t,e);default:return El()}var i}function kh(t,e){return void 0!==(t.values||[]).find((t=>Nh(t,e)))}function Ah(t,e){if(t===e)return 0;const n=Sh(t),i=Sh(e);if(n!==i)return Fl(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return Fl(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=mh(t.integerValue||t.doubleValue),i=mh(e.integerValue||e.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(t,e);case 3:return Rh(t.timestampValue,e.timestampValue);case 4:return Rh(vh(t),vh(e));case 5:return Fl(t.stringValue,e.stringValue);case 6:return function(t,e){const n=yh(t),i=yh(e);return n.compareTo(i)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),i=e.split("/");for(let t=0;t<n.length&&t<i.length;t++){const e=Fl(n[t],i[t]);if(0!==e)return e}return Fl(n.length,i.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=Fl(mh(t.latitude),mh(e.latitude));return 0!==n?n:Fl(mh(t.longitude),mh(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],i=e.values||[];for(let t=0;t<n.length&&t<i.length;++t){const e=Ah(n[t],i[t]);if(e)return e}return Fl(n.length,i.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Ih.mapValue&&e===Ih.mapValue)return 0;if(t===Ih.mapValue)return 1;if(e===Ih.mapValue)return-1;const n=t.fields||{},i=Object.keys(n),s=e.fields||{},r=Object.keys(s);i.sort(),r.sort();for(let t=0;t<i.length&&t<r.length;++t){const e=Fl(i[t],r[t]);if(0!==e)return e;const o=Ah(n[i[t]],s[r[t]]);if(0!==o)return o}return Fl(i.length,r.length)}(t.mapValue,e.mapValue);default:throw El()}}function Rh(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return Fl(t,e);const n=gh(t),i=gh(e),s=Fl(n.seconds,i.seconds);return 0!==s?s:Fl(n.nanos,i.nanos)}function xh(t){return Dh(t)}function Dh(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=gh(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?yh(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,Gl.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const i of t.values||[])n?n=!1:e+=",",e+=Dh(i);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",i=!0;for(const s of e)i?i=!1:n+=",",n+=`${s}:${Dh(t.fields[s])}`;return n+"}"}(t.mapValue):El()}function Ph(t){return!!t&&"integerValue"in t}function Lh(t){return!!t&&"arrayValue"in t}function Mh(t){return!!t&&"mapValue"in t}function Oh(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sh(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Oh(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oh(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fh(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Vh{static empty(){return new Vh({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Mh(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Oh(e)}setAll(t){let e=Wl.emptyPath(),n={},i=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,i),n={},i=[],e=s.popLast()}t?n[s.lastSegment()]=Oh(t):i.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,i)}delete(t){const e=this.field(t.popLast());Mh(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Nh(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Mh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){sh(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Vh(Oh(this.value))}constructor(t){this.value=t}}function Uh(t){const e=[];return sh(t.fields,((t,n)=>{const i=new Wl([t]);if(Mh(n)){const t=Uh(n.mapValue).fields;if(0===t.length)e.push(i);else for(const n of t)e.push(i.child(n))}else e.push(i)})),new uh(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class qh{static newInvalidDocument(t){return new qh(t,0,ql.min(),ql.min(),Vh.empty(),0)}static newFoundDocument(t,e,n){return new qh(t,1,e,ql.min(),n,0)}static newNoDocument(t,e){return new qh(t,2,e,ql.min(),Vh.empty(),0)}static newUnknownDocument(t,e){return new qh(t,3,e,ql.min(),Vh.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Vh.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Vh.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ql.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof qh&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new qh(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,i,s,r){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.data=s,this.documentState=r}}
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
 */class Bh{constructor(t,e=null,n=[],i=[],s=null,r=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=s,this.startAt=r,this.endAt=o,this.ut=null}}function jh(t,e=null,n=[],i=[],s=null,r=null,o=null){return new Bh(t,e,n,i,s,r,o)}function Hh(t){const e=bl(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+xh(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),Eh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>xh(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>xh(t))).join(",")),e.ut=t}return e.ut}function Wh(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nc(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],i=e.filters[s],n.op!==i.op||!n.field.isEqual(i.field)||!Nh(n.value,i.value))return!1;var n,i;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sc(t.startAt,e.startAt)&&sc(t.endAt,e.endAt)}class Gh extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Kh(t,e,n):"array-contains"===e?new Xh(t,n):"in"===e?new Yh(t,n):"not-in"===e?new Jh(t,n):"array-contains-any"===e?new Zh(t,n):new Gh(t,e,n)}static ct(t,e,n){return"in"===e?new $h(t,n):new zh(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(Ah(e,this.value)):null!==e&&Sh(this.value)===Sh(e)&&this.at(Ah(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return El()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Kh extends Gh{matches(t){const e=Gl.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=Gl.fromName(n.referenceValue)}}class $h extends Gh{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Qh("in",e)}}class zh extends Gh{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Qh("not-in",e)}}function Qh(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>Gl.fromName(t.referenceValue)))}class Xh extends Gh{matches(t){const e=t.data.field(this.field);return Lh(e)&&kh(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Yh extends Gh{matches(t){const e=t.data.field(this.field);return null!==e&&kh(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Jh extends Gh{matches(t){if(kh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!kh(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Zh extends Gh{matches(t){const e=t.data.field(this.field);return!(!Lh(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>kh(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class tc{constructor(t,e){this.position=t,this.inclusive=e}}class ec{constructor(t,e="asc"){this.field=t,this.dir=e}}function nc(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function ic(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(i=r.field.isKeyField()?Gl.comparator(Gl.fromName(o.referenceValue),n.key):Ah(o,n.data.field(r.field)),"desc"===r.dir&&(i*=-1),0!==i)break}return i}function sc(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Nh(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e=null,n=[],i=[],s=null,r="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=s,this.limitType=r,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function oc(t,e,n,i,s,r,o,a){return new rc(t,e,n,i,s,r,o,a)}function ac(t){return new rc(t)}function lc(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function hc(t){for(const e of t.filters)if(e.ht())return e.field;return null}function cc(t){return null!==t.collectionGroup}function uc(t){const e=bl(t);if(null===e.lt){e.lt=[];const t=hc(e),n=lc(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ec(t)),e.lt.push(new ec(Wl.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ec(Wl.keyField(),t))}}}return e.lt}function dc(t){const e=bl(t);if(!e.ft)if("F"===e.limitType)e.ft=jh(e.path,e.collectionGroup,uc(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of uc(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ec(n.field,e))}const n=e.endAt?new tc(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new tc(e.startAt.position,e.startAt.inclusive):null;e.ft=jh(e.path,e.collectionGroup,t,e.filters,e.limit,n,i)}return e.ft}function fc(t,e,n){return new rc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pc(t,e){return Wh(dc(t),dc(e))&&t.limitType===e.limitType}function gc(t){return`${Hh(dc(t))}|lt:${t.limitType}`}function mc(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${xh(e.value)}`})).join(", ")}]`),Eh(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>xh(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>xh(t))).join(",")),`Target(${e})`}(dc(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):Gl.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(i=e,!((n=t).startAt&&!function(t,e,n){const i=ic(t,e,n);return t.inclusive?i<=0:i<0}(n.startAt,uc(n),i)||n.endAt&&!function(t,e,n){const i=ic(t,e,n);return t.inclusive?i>=0:i>0}(n.endAt,uc(n),i)));var n,i}function _c(t){return(e,n)=>{let i=!1;for(const s of uc(t)){const t=vc(s,e,n);if(0!==t)return t;i=i||s.field.isKeyField()}return 0}}function vc(t,e,n){const i=t.field.isKeyField()?Gl.comparator(e.key,n.key):function(t,e,n){const i=e.data.field(t),s=n.data.field(t);return null!==i&&null!==s?Ah(i,s):El()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return El()}}
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
 */function wc(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Th(e)?"-0":e}}function Cc(t){return{integerValue:""+t}}function Ec(t,e){return bh(e)?Cc(e):wc(t,e)}
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
 */class Tc{constructor(){this._=void 0}}function bc(t,e,n){return t instanceof Nc?kc(t,e):t instanceof Ac?Rc(t,e):n}function Ic(t,e){var n,i;return t instanceof xc?Ph(n=e)||(i=n)&&"doubleValue"in i?e:{integerValue:0}:null}class Sc extends Tc{}class Nc extends Tc{constructor(t){super(),this.elements=t}}function kc(t,e){const n=Pc(e);for(const e of t.elements)n.some((t=>Nh(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Ac extends Tc{constructor(t){super(),this.elements=t}}function Rc(t,e){let n=Pc(e);for(const e of t.elements)n=n.filter((t=>!Nh(t,e)));return{arrayValue:{values:n}}}class xc extends Tc{constructor(t,e){super(),this.wt=t,this._t=e}}function Dc(t){return mh(t.integerValue||t.doubleValue)}function Pc(t){return Lh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(t,e){this.version=t,this.transformResults=e}}class Mc{static none(){return new Mc}static exists(t){return new Mc(void 0,t)}static updateTime(t){return new Mc(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Oc(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Fc{}function Vc(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new zc(t.key,Mc.none()):new Hc(t.key,t.data,Mc.none());{const n=t.data,i=Vh.empty();let s=new hh(Wl.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?i.delete(t):i.set(t,e),s=s.add(t)}return new Wc(t.key,i,new uh(s.toArray()),Mc.none())}}function Uc(t,e,n){var i;t instanceof Hc?function(t,e,n){const i=t.value.clone(),s=Kc(t.fieldTransforms,e,n.transformResults);i.setAll(s),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):t instanceof Wc?function(t,e,n){if(!Oc(t.precondition,e))return void e.convertToUnknownDocument(n.version);const i=Kc(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Gc(t)),s.setAll(i),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):(i=n,e.convertToNoDocument(i.version).setHasCommittedMutations())}function qc(t,e,n,i){return t instanceof Hc?function(t,e,n,i){if(!Oc(t.precondition,e))return n;const s=t.value.clone(),r=$c(t.fieldTransforms,i,e);return s.setAll(r),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,i):t instanceof Wc?function(t,e,n,i){if(!Oc(t.precondition,e))return n;const s=$c(t.fieldTransforms,i,e),r=e.data;return r.setAll(Gc(t)),r.setAll(s),e.convertToFoundDocument(e.version,r).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,i):(s=e,r=n,Oc(t.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):r);var s,r}function Bc(t,e){let n=null;for(const i of t.fieldTransforms){const t=e.data.field(i.field),s=Ic(i.transform,t||null);null!=s&&(null===n&&(n=Vh.empty()),n.set(i.field,s))}return n||null}function jc(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,i=e.fieldTransforms,!!(void 0===n&&void 0===i||n&&i&&Vl(n,i,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,i=e.transform,n instanceof Nc&&i instanceof Nc||n instanceof Ac&&i instanceof Ac?Vl(n.elements,i.elements,Nh):n instanceof xc&&i instanceof xc?Nh(n._t,i._t):n instanceof Sc&&i instanceof Sc);var n,i}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,i}class Hc extends Fc{getFieldMask(){return null}constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Wc extends Fc{getFieldMask(){return this.fieldMask}constructor(t,e,n,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=s,this.type=1}}function Gc(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}})),e}function Kc(t,e,n){const i=new Map;Tl(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,bc(o,a,n[s]))}return i}function $c(t,e,n){const i=new Map;for(const a of t){const t=a.transform,l=n.data.field(a.field);i.set(a.field,(r=l,o=e,(s=t)instanceof Sc?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,r):s instanceof Nc?kc(s,r):s instanceof Ac?Rc(s,r):function(t,e){const n=Ic(t,e),i=Dc(n)+Dc(t._t);return Ph(n)&&Ph(t._t)?Cc(i):wc(t.wt,i)}(s,r)))}var s,r,o;return i}class zc extends Fc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Qc extends Fc{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
var Xc,Yc;function Jc(t){switch(t){default:return El();case Il.CANCELLED:case Il.UNKNOWN:case Il.DEADLINE_EXCEEDED:case Il.RESOURCE_EXHAUSTED:case Il.INTERNAL:case Il.UNAVAILABLE:case Il.UNAUTHENTICATED:return!1;case Il.INVALID_ARGUMENT:case Il.NOT_FOUND:case Il.ALREADY_EXISTS:case Il.PERMISSION_DENIED:case Il.FAILED_PRECONDITION:case Il.ABORTED:case Il.OUT_OF_RANGE:case Il.UNIMPLEMENTED:case Il.DATA_LOSS:return!0}}function Zc(t){if(void 0===t)return vl("GRPC error has no .code"),Il.UNKNOWN;switch(t){case Xc.OK:return Il.OK;case Xc.CANCELLED:return Il.CANCELLED;case Xc.UNKNOWN:return Il.UNKNOWN;case Xc.DEADLINE_EXCEEDED:return Il.DEADLINE_EXCEEDED;case Xc.RESOURCE_EXHAUSTED:return Il.RESOURCE_EXHAUSTED;case Xc.INTERNAL:return Il.INTERNAL;case Xc.UNAVAILABLE:return Il.UNAVAILABLE;case Xc.UNAUTHENTICATED:return Il.UNAUTHENTICATED;case Xc.INVALID_ARGUMENT:return Il.INVALID_ARGUMENT;case Xc.NOT_FOUND:return Il.NOT_FOUND;case Xc.ALREADY_EXISTS:return Il.ALREADY_EXISTS;case Xc.PERMISSION_DENIED:return Il.PERMISSION_DENIED;case Xc.FAILED_PRECONDITION:return Il.FAILED_PRECONDITION;case Xc.ABORTED:return Il.ABORTED;case Xc.OUT_OF_RANGE:return Il.OUT_OF_RANGE;case Xc.UNIMPLEMENTED:return Il.UNIMPLEMENTED;case Xc.DATA_LOSS:return Il.DATA_LOSS;default:return El()}}(Yc=Xc||(Xc={}))[Yc.OK=0]="OK",Yc[Yc.CANCELLED=1]="CANCELLED",Yc[Yc.UNKNOWN=2]="UNKNOWN",Yc[Yc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Yc[Yc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Yc[Yc.NOT_FOUND=5]="NOT_FOUND",Yc[Yc.ALREADY_EXISTS=6]="ALREADY_EXISTS",Yc[Yc.PERMISSION_DENIED=7]="PERMISSION_DENIED",Yc[Yc.UNAUTHENTICATED=16]="UNAUTHENTICATED",Yc[Yc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Yc[Yc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Yc[Yc.ABORTED=10]="ABORTED",Yc[Yc.OUT_OF_RANGE=11]="OUT_OF_RANGE",Yc[Yc.UNIMPLEMENTED=12]="UNIMPLEMENTED",Yc[Yc.INTERNAL=13]="INTERNAL",Yc[Yc.UNAVAILABLE=14]="UNAVAILABLE",Yc[Yc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class tu{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,i]of n)if(this.equalsFn(e,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(void 0===i)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<i.length;n++)if(this.equalsFn(i[n][0],t))return void(i[n]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return 1===n.length?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){sh(this.inner,((e,n)=>{for(const[e,i]of n)t(e,i)}))}isEmpty(){return rh(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new oh(Gl.comparator);function nu(){return eu}const iu=new oh(Gl.comparator);function su(...t){let e=iu;for(const n of t)e=e.insert(n.key,n);return e}function ru(t){let e=iu;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function ou(){return lu()}function au(){return lu()}function lu(){return new tu((t=>t.toString()),((t,e)=>t.isEqual(e)))}const hu=new oh(Gl.comparator),cu=new hh(Gl.comparator);function uu(...t){let e=cu;for(const n of t)e=e.add(n);return e}const du=new hh(Fl);function fu(){return du}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(t,e){this.databaseId=t,this.dt=e}}function gu(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mu(t,e){return t.dt?e.toBase64():e.toUint8Array()}function yu(t,e){return gu(t,e.toTimestamp())}function _u(t){return Tl(!!t),ql.fromTimestamp(function(t){const e=gh(t);return new Ul(e.seconds,e.nanos)}(t))}function vu(t,e){return(n=t,new jl(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function wu(t){const e=jl.fromString(t);return Tl(Du(e)),e}function Cu(t,e){return vu(t.databaseId,e.path)}function Eu(t){const e=wu(t);return 4===e.length?jl.emptyPath():bu(e)}function Tu(t){return new jl(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bu(t){return Tl(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Iu(t,e,n){return{name:Cu(t,e),fields:n.value.mapValue.fields}}function Su(t,e){let n;if(e instanceof Hc)n={update:Iu(t,e.key,e.value)};else if(e instanceof zc)n={delete:Cu(t,e.key)};else if(e instanceof Wc)n={update:Iu(t,e.key,e.data),updateMask:xu(e.fieldMask)};else{if(!(e instanceof Qc))return El();n={verify:Cu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Sc)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Nc)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ac)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof xc)return{fieldPath:e.field.canonicalString(),increment:n._t};throw El()}(0,t)))),e.precondition.isNone||(n.currentDocument=(i=t,void 0!==(s=e.precondition).updateTime?{updateTime:yu(i,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:El())),n;var i,s}function Nu(t){let e=Eu(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){Tl(1===i);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let r=[];n.where&&(r=ku(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ec(Au((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Eh(e)?null:e}(n.limit));let l=null;n.startAt&&(l=function(t){const e=!!t.before,n=t.values||[];return new tc(n,e)}(n.startAt));let h=null;return n.endAt&&(h=function(t){const e=!t.before,n=t.values||[];return new tc(n,e)}(n.endAt)),oc(e,s,o,r,a,"F",l,h)}function ku(t){return t?void 0!==t.unaryFilter?[Ru(t)]:void 0!==t.fieldFilter?[(e=t,Gh.create(Au(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return El()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ku(t))).reduce(((t,e)=>t.concat(e))):El():[];var e}function Au(t){return Wl.fromServerFormat(t.fieldPath)}function Ru(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Au(t.unaryFilter.field);return Gh.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Au(t.unaryFilter.field);return Gh.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Au(t.unaryFilter.field);return Gh.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Au(t.unaryFilter.field);return Gh.create(s,"!=",{nullValue:"NULL_VALUE"});default:return El()}}function xu(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Du(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Lu=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mu=Lu;
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
class Ou{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const i=this.mutations[e];i.key.isEqual(t.key)&&Uc(i,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=qc(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=qc(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=au();return this.mutations.forEach((i=>{const s=t.get(i.key),r=s.overlayedDocument;let o=this.applyToLocalView(r,s.mutatedFields);o=e.has(i.key)?null:o;const a=Vc(r,o);null!==a&&n.set(i.key,a),r.isValidDocument()||r.convertToNoDocument(ql.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),uu())}isEqual(t){return this.batchId===t.batchId&&Vl(this.mutations,t.mutations,((t,e)=>jc(t,e)))&&Vl(this.baseMutations,t.baseMutations,((t,e)=>jc(t,e)))}constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}}class Fu{static from(t,e,n){Tl(t.mutations.length===n.length);let i=hu;const s=t.mutations;for(let t=0;t<s.length;t++)i=i.insert(s[t].key,n[t].version);return new Fu(t,e,n,i)}constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}}
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
 */class Vu{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Uu{constructor(t){this.ne=t}}function qu(t){const e=Nu({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?fc(e,e.limit,"L"):e}
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
 */class Bu{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(mh(t.integerValue));else if("doubleValue"in t){const n=mh(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Th(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(yh(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Fh(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):El()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),Gl.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}Bu.ye=new Bu;
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
class ju{addToCollectionParentIndex(t,e){return this.ze.add(e),th.resolve()}getCollectionParents(t,e){return th.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return th.resolve()}deleteFieldIndex(t,e){return th.resolve()}getDocumentsMatchingTarget(t,e){return th.resolve(null)}getIndexType(t,e){return th.resolve(0)}getFieldIndexes(t,e){return th.resolve([])}getNextCollectionGroupToUpdate(t){return th.resolve(null)}getMinOffset(t,e){return th.resolve(Ql.min())}getMinOffsetFromCollectionGroup(t,e){return th.resolve(Ql.min())}updateCollectionGroup(t,e,n){return th.resolve()}updateIndexEntries(t,e){return th.resolve()}constructor(){this.ze=new Hu}}class Hu{add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new hh(jl.comparator),s=!i.has(n);return this.index[e]=i.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new hh(jl.comparator)).toArray()}constructor(){this.index={}}}
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
 */new Uint8Array(0);class Wu{static withCacheSize(t){return new Wu(t,Wu.DEFAULT_COLLECTION_PERCENTILE,Wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
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
 */Wu.DEFAULT_COLLECTION_PERCENTILE=10,Wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wu.DEFAULT=new Wu(41943040,Wu.DEFAULT_COLLECTION_PERCENTILE,Wu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wu.DISABLED=new Wu(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Gu{next(){return this.En+=2,this.En}static An(){return new Gu(0)}static Rn(){return new Gu(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ku{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,qh.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?th.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new tu((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class $u{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&qc(n.mutation,t,uh.empty(),Ul.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,uu()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=uu()){const i=ou();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((t=>{let e=su();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=ou();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,uu())))}populateOverlays(t,e,n){const i=[];return n.forEach((t=>{e.has(t)||i.push(t)})),this.documentOverlayCache.getOverlays(t,i).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,i){let s=nu();const r=lu(),o=lu();return e.forEach(((t,e)=>{const o=n.get(e.key);i.has(e.key)&&(void 0===o||o.mutation instanceof Wc)?s=s.insert(e.key,e):void 0!==o&&(r.set(e.key,o.mutation.getFieldMask()),qc(o.mutation,e,o.mutation.getFieldMask(),Ul.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>r.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new $u(e,null!==(n=r.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=lu();let i=new oh(((t,e)=>t-e)),s=uu();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const r=e.get(t);if(null===r)return;let o=n.get(t)||uh.empty();o=s.applyToLocalView(r,o),n.set(t,o);const a=(i.get(s.batchId)||uu()).add(t);i=i.insert(s.batchId,a)}))})).next((()=>{const r=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,l=i.value,h=au();l.forEach((t=>{if(!s.has(t)){const i=Vc(e.get(t),n.get(t));null!==i&&h.set(t,i),s=s.add(t)}})),r.push(this.documentOverlayCache.saveOverlays(t,a,h))}return th.waitFor(r)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return i=e,Gl.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):cc(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var i}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((s=>{const r=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-s.size):th.resolve(ou());let o=-1,a=s;return r.next((e=>th.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?th.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,uu()))).next((t=>({batchId:o,changes:ru(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new Gl(e)).next((t=>{let e=su();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const i=e.collectionGroup;let s=su();return this.indexManager.getCollectionParents(t,i).next((r=>th.forEach(r,(r=>{const o=(a=e,l=r.child(i),new rc(l,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,l;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let i;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===i.get(n)&&(i=i.insert(n,qh.newInvalidDocument(n)))}));let n=su();return i.forEach(((i,s)=>{const r=t.get(i);void 0!==r&&qc(r.mutation,s,uh.empty(),Ul.now()),yc(e,s)&&(n=n.insert(i,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):th.resolve(qh.newInvalidDocument(e))}constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}}
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
 */class Qu{getBundleMetadata(t,e){return th.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:_u(n.createTime)}),th.resolve()}getNamedQuery(t,e){return th.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:qu(n.bundledQuery),readTime:_u(n.readTime)}),th.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
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
 */class Xu{getOverlay(t,e){return th.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ou();return th.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,i)=>{this.ie(t,e,i)})),th.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.Xn.get(n);return void 0!==i&&(i.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),th.resolve()}getOverlaysForCollection(t,e,n){const i=ou(),s=e.length+1,r=new Gl(e.child("")),o=this.overlays.getIteratorFrom(r);for(;o.hasNext();){const t=o.getNext().value,r=t.getKey();if(!e.isPrefixOf(r.path))break;r.path.length===s&&t.largestBatchId>n&&i.set(t.getKey(),t)}return th.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let s=new oh(((t,e)=>t-e));const r=this.overlays.getIterator();for(;r.hasNext();){const t=r.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=ou(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=ou(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=i)););return th.resolve(o)}ie(t,e,n){const i=this.overlays.get(n.key);if(null!==i){const t=this.Xn.get(i.largestBatchId).delete(n.key);this.Xn.set(i.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new Vu(e,n));let s=this.Xn.get(e);void 0===s&&(s=uu(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}constructor(){this.overlays=new oh(Gl.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Ju(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Ju(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new Gl(new jl([])),n=new Ju(e,t),i=new Ju(e,t+1),s=[];return this.es.forEachInRange([n,i],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new Gl(new jl([])),n=new Ju(e,t),i=new Ju(e,t+1);let s=uu();return this.es.forEachInRange([n,i],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Ju(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new hh(Ju.ts),this.es=new hh(Ju.ns)}}class Ju{static ts(t,e){return Gl.comparator(t.key,e.key)||Fl(t.ls,e.ls)}static ns(t,e){return Fl(t.ls,e.ls)||Gl.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{checkEmpty(t){return th.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,i){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const r=new Ou(s,e,n,i);this.mutationQueue.push(r);for(const e of i)this.ds=this.ds.add(new Ju(e.key,s)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return th.resolve(r)}lookupMutationBatch(t,e){return th.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.ws(n),s=i<0?0:i;return th.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return th.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return th.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Ju(e,0),i=new Ju(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,i],(t=>{const e=this._s(t.ls);s.push(e)})),th.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new hh(Fl);return e.forEach((t=>{const e=new Ju(t,0),i=new Ju(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,i],(t=>{n=n.add(t.ls)}))})),th.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let s=n;Gl.isDocumentKey(s)||(s=s.child(""));const r=new Ju(new Gl(s),0);let o=new hh(Fl);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===i&&(o=o.add(t.ls)),!0)}),r),th.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Tl(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return th.forEach(e.mutations,(i=>{const s=new Ju(i.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Ju(e,0),i=this.ds.firstAfterOrEqual(n);return th.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,th.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new hh(Ju.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),s=i?i.size:0,r=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:r}),this.size+=r-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return th.resolve(n?n.document.mutableCopy():qh.newInvalidDocument(e))}getEntries(t,e){let n=nu();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():qh.newInvalidDocument(t))})),th.resolve(n)}getAllFromCollection(t,e,n){let i=nu();const s=new Gl(e.child("")),r=this.docs.getIteratorFrom(s);for(;r.hasNext();){const{key:t,value:{document:s}}=r.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||Xl(zl(s),n)<=0||(i=i.insert(s.key,s.mutableCopy()))}return th.resolve(i)}getAllFromCollectionGroup(t,e,n,i){El()}Is(t,e){return th.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new ed(this)}getSize(t){return th.resolve(this.size)}constructor(t){this.ps=t,this.docs=new oh(Gl.comparator),this.size=0}}class ed extends Ku{applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.zn.addEntry(t,i)):this.zn.removeEntry(n)})),th.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),th.resolve()}getLastRemoteSnapshotVersion(t){return th.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return th.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),th.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),th.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Gu(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,th.resolve()}updateTargetData(t,e){return this.vn(e),th.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,th.resolve()}removeTargets(t,e,n){let i=0;const s=[];return this.Ts.forEach(((r,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(r),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),i++)})),th.waitFor(s).next((()=>i))}getTargetCount(t){return th.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return th.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),th.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach((e=>{s.push(i.markPotentiallyOrphaned(t,e))})),th.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),th.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return th.resolve(n)}containsKey(t,e){return th.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new tu((t=>Hh(t)),Wh),this.lastRemoteSnapshotVersion=ql.min(),this.highestTargetId=0,this.Es=0,this.As=new Yu,this.targetCount=0,this.Rs=Gu.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new Xu,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Zu(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){_l("MemoryPersistence","Starting transaction:",t);const i=new sd(this.Ps.next());return this.referenceDelegate.Cs(),n(i).next((t=>this.referenceDelegate.xs(i).next((()=>t)))).toPromise().then((t=>(i.raiseOnCommittedEvent(),t)))}Ns(t,e){return th.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new nh(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new nd(this),this.indexManager=new ju,this.remoteDocumentCache=new td((t=>this.referenceDelegate.Ss(t))),this.wt=new Uu(e),this.Ds=new Qu(this.wt)}}class sd extends Jl{constructor(t){super(),this.currentSequenceNumber=t}}class rd{static Ms(t){return new rd(t)}get Fs(){if(this.Os)return this.Os;throw El()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),th.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),th.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),th.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return th.forEach(this.Fs,(n=>{const i=Gl.fromPath(n);return this.$s(t,i).next((t=>{t||e.removeEntry(i,ql.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return th.or([()=>th.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new Yu,this.Os=null}}
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
class od{static Vi(t,e){let n=uu(),i=uu();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new od(t,e.fromCache,n,i)}constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=i}}
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
 */class ad{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,i){return this.Ci(t,e).next((s=>s||this.xi(t,e,i,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return th.resolve(null)}xi(t,e,n,i){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||i.isEqual(ql.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const r=this.ki(e,s);return this.Oi(e,r,n,i)?this.Ni(t,e):(yl()<=w.LogLevel.DEBUG&&_l("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),mc(e)),this.Mi(t,r,e,$l(i,-1)))}))}ki(t,e){let n=new hh(_c(t));return e.forEach(((e,i)=>{yc(t,i)&&(n=n.add(i))})),n}Oi(t,e,n,i){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ni(t,e){return yl()<=w.LogLevel.DEBUG&&_l("QueryEngine","Using full collection scan to execute query:",mc(e)),this.Di.getDocumentsMatchingQuery(t,e,Ql.min())}Mi(t,e,n,i){return this.Di.getDocumentsMatchingQuery(t,n,i).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
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
 */class ld{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new zu(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,i){this.persistence=t,this.Fi=e,this.wt=i,this.$i=new oh(Fl),this.Bi=new tu((t=>Hh(t)),Wh),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function hd(t,e,n,i){return new ld(t,e,n,i)}async function cd(t,e){const n=bl(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let i;return n.mutationQueue.getAllMutationBatches(t).next((s=>(i=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],r=[];let o=uu();for(const t of i){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:r})))}))}))}function ud(t){const e=bl(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function dd(t,e){const n=bl(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class fd{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=fu()}}class pd{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new fd,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new fd,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
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
 */class gd{Br(t){}shutdown(){}}
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
 */class md{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){_l("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){_l("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
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
 */const yd={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd extends class{ro(t,e,n,i,s){const r=this.oo(t,e);_l("RestConnection","Sending: ",r,n);const o={};return this.uo(o,i,s),this.co(t,r,o,n).then((t=>(_l("RestConnection","Received: ",t),t)),(e=>{throw wl("RestConnection",`${t} failed with error: `,e,"url: ",r,"request:",n),e}))}ao(t,e,n,i,s){return this.ro(t,e,n,i,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+gl,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=yd[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,i){return new Promise(((s,r)=>{const o=new fl;o.listenOnce(ll.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case al.NO_ERROR:const e=o.getResponseJson();_l("Connection","XHR received:",JSON.stringify(e)),s(e);break;case al.TIMEOUT:_l("Connection",'RPC "'+t+'" timed out'),r(new Sl(Il.DEADLINE_EXCEEDED,"Request time out"));break;case al.HTTP_ERROR:const n=o.getStatus();if(_l("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Il).indexOf(e)>=0?e:Il.UNKNOWN}(t.status);r(new Sl(e,t.message))}else r(new Sl(Il.UNKNOWN,"Server responded with status "+o.getStatus()))}else r(new Sl(Il.UNAVAILABLE,"Connection failed."));break;default:El()}}finally{_l("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(i);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const i=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=rl(),r=ol(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new ul({})),this.uo(o.initMessageHeaders,e,n),(0,v.isMobileCordova)()||(0,v.isReactNative)()||(0,v.isElectron)()||(0,v.isIE)()||(0,v.isUWP)()||(0,v.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const a=i.join("");_l("Connection","Creating WebChannel: "+a,o);const l=s.createWebChannel(a,o);let h=!1,c=!1;const u=new _d({jr:t=>{c?_l("Connection","Not sending because WebChannel is closed:",t):(h||(_l("Connection","Opening WebChannel transport."),l.open(),h=!0),_l("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,dl.EventType.OPEN,(()=>{c||_l("Connection","WebChannel transport opened.")})),d(l,dl.EventType.CLOSE,(()=>{c||(c=!0,_l("Connection","WebChannel transport closed"),u.eo())})),d(l,dl.EventType.ERROR,(t=>{c||(c=!0,wl("Connection","WebChannel transport errored:",t),u.eo(new Sl(Il.UNAVAILABLE,"The operation could not be completed")))})),d(l,dl.EventType.MESSAGE,(t=>{var e;if(!c){const n=t.data[0];Tl(!!n);const i=n,s=i.error||(null===(e=i[0])||void 0===e?void 0:e.error);if(s){_l("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Xc[t];if(void 0!==e)return Zc(e)}(t),n=s.message;void 0===e&&(e=Il.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),c=!0,u.eo(new Sl(e,n)),l.close()}else _l("Connection","WebChannel received:",n),u.no(n)}})),d(r,hl.STAT_EVENT,(t=>{t.stat===cl.PROXY?_l("Connection","Detected buffering proxy"):t.stat===cl.NOPROXY&&_l("Connection","Detected no buffering proxy")})),setTimeout((()=>{u.Zr()}),0),u}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
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
 */function wd(){return"undefined"!=typeof document?document:null}
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
 */function Cd(t){return new pu(t,!0)}class Ed{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),i=Math.max(0,e-n);i>0&&_l("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,i,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,i=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=i,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Il.RESOURCE_EXHAUSTED?(vl(e.toString()),vl("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Il.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Sl(Il.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return _l("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(_l("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,i,s,r,o,a){this.js=t,this.Ao=n,this.Ro=i,this.bo=s,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Ed(t,e)}}class bd extends Td{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Tl(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const i=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(Tl(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?_u(t.updateTime):_u(e);return n.isEqual(ql.min())&&(n=_u(e)),new Lc(n,t.transformResults||[])}(t,n)))):[]),s=_u(t.commitTime);return this.listener.Jo(s,i)}var e,n;return Tl(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Tu(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>Su(this.wt,t)))};this.Mo(e)}constructor(t,e,n,i,s,r){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,r),this.wt=s,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id extends class{}{tu(){if(this.Zo)throw new Sl(Il.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ro(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Il.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sl(Il.UNKNOWN,t.toString())}))}ao(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Il.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Sl(Il.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=i,this.Zo=!1}}class Sd{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(vl(e),this.su=!1):_l("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(t,e,n,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{Rd(this)&&(_l("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=bl(t);e.lu.add(4),await Ad(e),e._u.set("Unknown"),e.lu.delete(4),await kd(e)}(this))}))})),this._u=new Sd(n,i)}}async function kd(t){if(Rd(t))for(const e of t.fu)await e(!0)}async function Ad(t){for(const e of t.fu)await e(!1)}function Rd(t){return 0===bl(t).lu.size}async function xd(t,e,n){if(!eh(e))throw e;t.lu.add(1),await Ad(t),t._u.set("Offline"),n||(n=()=>ud(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{_l("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await kd(t)}))}function Dd(t,e){return e().catch((n=>xd(t,n,e)))}async function Pd(t){const e=bl(t),n=Wd(e);let i=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;Ld(e);)try{const t=await dd(e.localStore,i);if(null===t){0===e.au.length&&n.ko();break}i=t.batchId,Md(e,t)}catch(t){await xd(e,t)}Od(e)&&Fd(e)}function Ld(t){return Rd(t)&&t.au.length<10}function Md(t,e){t.au.push(e);const n=Wd(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Od(t){return Rd(t)&&!Wd(t).Do()&&t.au.length>0}function Fd(t){Wd(t).start()}async function Vd(t){Wd(t).Xo()}async function Ud(t){const e=Wd(t);for(const n of t.au)e.Ho(n.mutations)}async function qd(t,e,n){const i=t.au.shift(),s=Fu.from(i,e,n);await Dd(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Pd(t)}async function Bd(t,e){e&&Wd(t).zo&&await async function(t,e){if(Jc(n=e.code)&&n!==Il.ABORTED){const n=t.au.shift();Wd(t).No(),await Dd(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await Pd(t)}var n}(t,e),Od(t)&&Fd(t)}async function jd(t,e){const n=bl(t);n.asyncQueue.verifyOperationInProgress(),_l("RemoteStore","RemoteStore received new credentials");const i=Rd(n);n.lu.add(3),await Ad(n),i&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await kd(n)}async function Hd(t,e){const n=bl(t);e?(n.lu.delete(2),await kd(n)):e||(n.lu.add(2),await Ad(n),n._u.set("Unknown"))}function Wd(t){return t.gu||(t.gu=function(t,e,n){const i=bl(t);return i.tu(),new bd(e,i.bo,i.authCredentials,i.appCheckCredentials,i.wt,n)}(t.datastore,t.asyncQueue,{zr:Vd.bind(null,t),Jr:Bd.bind(null,t),Yo:Ud.bind(null,t),Jo:qd.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await Pd(t)):(await t.gu.stop(),t.au.length>0&&(_l("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Gd{static createAndSchedule(t,e,n,i,s){const r=Date.now()+n,o=new Gd(t,e,r,i,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Sl(Il.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=s,this.deferred=new Nl,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Kd(t,e){if(vl("AsyncQueue",`${e}: ${t}`),eh(t))return new Sl(Il.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(){this.queries=new tu((t=>gc(t)),pc),this.onlineState="Unknown",this.Tu=new Set}}function zd(t){t.Tu.forEach((t=>{t.next()}))}class Qd{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,i,s,r){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=r,this.Zu={},this.tc=new tu((t=>gc(t)),pc),this.ec=new Map,this.nc=new Set,this.sc=new oh(Gl.comparator),this.ic=new Map,this.rc=new Yu,this.oc={},this.uc=new Map,this.cc=Gu.Rn(),this.onlineState="Unknown",this.ac=void 0}}function Xd(t,e,n){const i=bl(t);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const t=[];i.tc.forEach(((n,i)=>{const s=i.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=bl(t);n.onlineState=e;let i=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(i=!0)})),i&&zd(n)}(i.eventManager,e),t.length&&i.Zu.Go(t),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Yd(t,e){const n=bl(t),i=e.batch.batchId;try{const t=await function(t,e){const n=bl(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const i=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,i){const s=n.batch,r=s.keys();let o=th.resolve();return r.forEach((t=>{o=o.next((()=>i.getEntry(e,t))).next((e=>{const r=n.docVersions.get(t);Tl(null!==r),e.version.compareTo(r)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),i.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=uu();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(n.localStore,e);tf(n,i,null),Zd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ef(n,t)}catch(t){await Zl(t)}}async function Jd(t,e,n){const i=bl(t);try{const t=await function(t,e){const n=bl(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let i;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Tl(null!==e),i=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,i,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,i))).next((()=>n.localDocuments.getDocuments(t,i)))}))}(i.localStore,e);tf(i,e,n),Zd(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ef(i,t)}catch(t){await Zl(t)}}function Zd(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function tf(t,e,n){const i=bl(t);let s=i.oc[i.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),i.oc[i.currentUser.toKey()]=s}}async function ef(t,e,n){const i=bl(t),s=[],r=[],o=[];i.tc.isEmpty()||(i.tc.forEach(((t,a)=>{o.push(i.hc(a,e,n).then((t=>{if(t){i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=od.Vi(a.targetId,t);r.push(e)}})))})),await Promise.all(o),i.Zu.Go(s),await async function(t,e){const n=bl(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>th.forEach(e,(e=>th.forEach(e.Pi,(i=>n.persistence.referenceDelegate.addReference(t,e.targetId,i))).next((()=>th.forEach(e.vi,(i=>n.persistence.referenceDelegate.removeReference(t,e.targetId,i)))))))))}catch(t){if(!eh(t))throw t;_l("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),i=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(i);n.$i=n.$i.insert(e,s)}}}(i.localStore,r))}async function nf(t,e){const n=bl(t);if(!n.currentUser.isEqual(e)){_l("SyncEngine","User change. New user:",e.toKey());const t=await cd(n.localStore,e);n.currentUser=e,(i=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new Sl(Il.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),i.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ef(n,t.Ki)}var i}function sf(t){const e=bl(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Yd.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Jd.bind(null,e),e}class rf{async initialize(t){this.wt=Cd(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return hd(this.persistence,new ad,t.initialUser,this.wt)}_c(t){return new id(rd.Ms,this.wt)}dc(t){return new pd}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class of{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Xd(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=nf.bind(null,this.syncEngine),await Hd(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new $d}createDatastore(t){const e=Cd(t.databaseInfo.databaseId),n=(i=t.databaseInfo,new vd(i));var i,s,r;return s=t.authCredentials,r=t.appCheckCredentials,new Id(s,r,n,e)}createRemoteStore(t){var e,n,i,s,r;return e=this.localStore,n=this.datastore,i=t.asyncQueue,s=t=>Xd(this.syncEngine,t,0),r=md.V()?new md:new gd,new Nd(e,n,i,s,r)}createSyncEngine(t,e){return function(t,e,n,i,s,r,o){const a=new Qd(t,e,n,i,s,r);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=bl(t);_l("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await Ad(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class af{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Sl(Il.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Nl;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Kd(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=pl.UNAUTHENTICATED,this.clientId=Ol.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{_l("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(_l("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function lf(t,e){t.asyncQueue.verifyOperationInProgress(),_l("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener((async t=>{i.isEqual(t)||(await cd(e.localStore,t),i=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function hf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await cf(t);_l("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener((t=>jd(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>jd(e.remoteStore,n))),t.onlineComponents=e}async function cf(t){return t.offlineComponents||(_l("FirestoreClient","Using default OfflineComponentProvider"),await lf(t,new rf)),t.offlineComponents}async function uf(t){return t.onlineComponents||(_l("FirestoreClient","Using default OnlineComponentProvider"),await hf(t,new of)),t.onlineComponents}function df(t){return uf(t).then((t=>t.syncEngine))}const ff=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(t,e,n){if(!n)throw new Sl(Il.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function gf(t){if(!Gl.isDocumentKey(t))throw new Sl(Il.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mf(t){if(Gl.isDocumentKey(t))throw new Sl(Il.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function yf(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":El()}function _f(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Sl(Il.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yf(t);throw new Sl(Il.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
class vf{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Sl(Il.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Sl(Il.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,i){if(!0===e&&!0===i)throw new Sl(Il.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
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
 */class wf{get app(){if(!this._app)throw new Sl(Il.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Sl(Il.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vf(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new Al;switch(t.type){case"gapi":const e=t.client;return Tl(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Dl(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Sl(Il.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ff.get(t);e&&(_l("ComponentProvider","Removing Datastore"),ff.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vf({}),this._settingsFrozen=!1,t instanceof Ch?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Sl(Il.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ch(t.options.projectId)}(t))}}
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
class Cf{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tf(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Cf(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ef{withConverter(t){return new Ef(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class Tf extends Ef{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Cf(this.firestore,null,new Gl(t))}withConverter(t){return new Tf(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ac(n)),this._path=n,this.type="collection"}}function bf(t,e,...n){if(t=(0,v.getModularInstance)(t),pf("collection","path",e),t instanceof wf){const i=jl.fromString(e,...n);return mf(i),new Tf(t,null,i)}{if(!(t instanceof Cf||t instanceof Tf))throw new Sl(Il.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(jl.fromString(e,...n));return mf(i),new Tf(t.firestore,null,i)}}function If(t,e,...n){if(t=(0,v.getModularInstance)(t),1===arguments.length&&(e=Ol.I()),pf("doc","path",e),t instanceof wf){const i=jl.fromString(e,...n);return gf(i),new Cf(t,null,new Gl(i))}{if(!(t instanceof Cf||t instanceof Tf))throw new Sl(Il.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(jl.fromString(e,...n));return gf(i),new Cf(t.firestore,t instanceof Tf?t.converter:null,new Gl(i))}}
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
class Sf{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=wd();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Nl;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!eh(t))throw t;_l("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw vl("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const i=Gd.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(i),i}Gc(){this.Bc&&El()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Ed(this,"async_queue_retry"),this.Kc=()=>{const t=wd();t&&_l("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=wd();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}class Nf extends wf{_terminate(){return this._firestoreClient||Af(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Sf,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function kf(t){return t._firestoreClient||Af(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Af(t){var e;const n=t._freezeSettings(),i=(s=t._databaseId,r=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new wh(s,r,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var s,r,o,a;t._firestoreClient=new af(t._authCredentials,t._appCheckCredentials,t._queue,i)}
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
class Rf{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Sl(Il.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wl(t)}}
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
class xf{static fromBase64String(t){try{return new xf(fh.fromBase64String(t))}catch(t){throw new Sl(Il.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new xf(fh.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
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
 */class Df{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return Fl(this._lat,t._lat)||Fl(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Sl(Il.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Sl(Il.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf=/^__.*__$/;class Mf{toMutation(t,e){return null!==this.fieldMask?new Wc(t,this.data,this.fieldMask,e,this.fieldTransforms):new Hc(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Of(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw El()}}class Ff{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Ff(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.sa(t),i}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),i=this.ta({path:n,na:!1});return i.Xc(),i}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return zf(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Of(this.Zc)&&Lf.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,i,s,r){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=i,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=r||[]}}class Vf{aa(t,e,n,i=!1){return new Ff({Zc:t,methodName:e,ca:n,path:Wl.emptyPath(),na:!1,ua:i},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Cd(t)}}function Uf(t){const e=t._freezeSettings(),n=Cd(t._databaseId);return new Vf(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qf(t,e,n,i,s,r={}){const o=t.aa(r.merge||r.mergeFields?2:0,e,n,s);Wf("Data must be an object, but it was:",o,i);const a=jf(i,o);let l,h;if(r.merge)l=new uh(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const t=[];for(const i of r.mergeFields){const s=Gf(e,i,n);if(!o.contains(s))throw new Sl(Il.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Qf(t,s)||t.push(s)}l=new uh(t),h=o.fieldTransforms.filter((t=>l.covers(t.field)))}else l=null,h=o.fieldTransforms;return new Mf(new Vh(a),l,h)}function Bf(t,e){if(Hf(t=(0,v.getModularInstance)(t)))return Wf("Unsupported field value:",e,t),jf(t,e);if(t instanceof Df)return function(t,e){if(!Of(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let i=0;for(const s of t){let t=Bf(s,e.ra(i));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),i++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,v.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ec(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=Ul.fromDate(t);return{timestampValue:gu(e.wt,n)}}if(t instanceof Ul){const n=new Ul(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:gu(e.wt,n)}}if(t instanceof Pf)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof xf)return{bytesValue:mu(e.wt,t._byteString)};if(t instanceof Cf){const n=e.databaseId,i=t.firestore._databaseId;if(!i.isEqual(n))throw e.oa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:vu(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${yf(t)}`)}(t,e)}function jf(t,e){const n={};return rh(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sh(t,((t,i)=>{const s=Bf(i,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Hf(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof Ul||t instanceof Pf||t instanceof xf||t instanceof Cf||t instanceof Df)}function Wf(t,e,n){if(!Hf(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=yf(n);throw"an object"===i?e.oa(t+" a custom object"):e.oa(t+" "+i)}var i}function Gf(t,e,n){if((e=(0,v.getModularInstance)(e))instanceof Rf)return e._internalPath;if("string"==typeof e)return $f(t,e);throw zf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kf=new RegExp("[~\\*/\\[\\]]");function $f(t,e,n){if(e.search(Kf)>=0)throw zf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Rf(...e.split("."))._internalPath}catch(i){throw zf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function zf(t,e,n,i,s){const r=i&&!i.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${i}`),o&&(l+=` in document ${s}`),l+=")"),new Sl(Il.INVALID_ARGUMENT,a+t+l)}function Qf(t,e){return t.some((t=>t.isEqual(e)))}
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
function Xf(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Yf(t,e){const n=_f(t.firestore,Nf),i=If(t),s=Xf(t.converter,e);return Jf(n,[qf(Uf(t.firestore),"addDoc",i._key,s,null!==t.converter,{}).toMutation(i._key,Mc.exists(!1))]).then((()=>i))}function Jf(t,e){return function(t,e){const n=new Nl;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const i=sf(t);try{const t=await function(t,e){const n=bl(t),i=Ul.now(),s=e.reduce(((t,e)=>t.add(e.key)),uu());let r,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=nu(),l=uu();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(l=l.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{r=s;const o=[];for(const t of e){const e=Bc(t,r.get(t.key).overlayedDocument);null!=e&&o.push(new Wc(t.key,e,Uh(e.value.mapValue),Mc.exists(!0)))}return n.mutationQueue.addMutationBatch(t,i,o,e)})).next((e=>{o=e;const i=e.applyToLocalDocumentSet(r,l);return n.documentOverlayCache.saveOverlays(t,e.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ru(r)})))}(i.localStore,e);i.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let i=t.oc[t.currentUser.toKey()];i||(i=new oh(Fl)),i=i.insert(e,n),t.oc[t.currentUser.toKey()]=i}(i,t.batchId,n),await ef(i,t.changes),await Pd(i.remoteStore)}catch(t){const e=Kd(t,"Failed to persist write");n.reject(e)}}(await df(t),e,n))),n.promise}(kf(t),e)}!function(t,e=!0){var n;n=y.SDK_VERSION,gl=n,(0,y._registerComponent)(new(0,_.Component)("firestore",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),s=new Nf(i,new Rl(t.getProvider("auth-internal")),new Ll(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,y.registerVersion)("@firebase/firestore","3.4.10",t),(0,y.registerVersion)("@firebase/firestore","3.4.10","esm2017")}();o=s("iyB0E");const Zf=function(t=(0,y.getApp)()){return(0,y._getProvider)(t,"firestore").getImmediate()}(es),tp=(0,ns.getAuth)(),ep={formWrap:document.querySelector(".form-auth"),loginForm:document.querySelector('[name="loginForm"]'),regForm:document.querySelector('[name="regForm"]'),regBtn:document.querySelector('[name="regBtn"]'),loginBtn:document.querySelector('[name="loginBtn"]'),libBtn:document.querySelector(".nav__library"),logoutBtn:document.querySelector('[name="logoutBtn"]'),homeBtn:document.querySelector(".nav__home")};ep.regForm.addEventListener("submit",(function(t){t.preventDefault();const e=t.target.elements.emailReg.value.trim(),n=t.target.elements.passwordReg.value.trim();if(""===e||""===n)return void(ep.regForm.querySelector(".error").innerHTML="Input fields are not filled");(0,ns.createUserWithEmailAndPassword)(tp,e,n).then((async t=>{console.log(`New user registered ${t.user.email}`);try{await Yf(bf(Zf,"users"),{email:e,password:n,watched:[],queue:[]});ep.regForm.querySelector(".error").innerHTML=""}catch(t){console.error("Error adding document: ",t)}})).catch((t=>{console.log(t.message),t.message.includes("email-already-in-use")?ep.regForm.querySelector(".error").innerHTML="Email already in use":t.message.includes("weak-password")&&(ep.regForm.querySelector(".error").innerHTML="Password should be at least 6 characters")}))})),ep.loginForm.addEventListener("submit",(async function(t){t.preventDefault();const e=t.target.elements.emailLogin.value.trim(),n=t.target.elements.passwordLogin.value.trim();if(""===e||""===n)return void(ep.loginForm.querySelector(".error").innerHTML="Input fields are not filled");await(0,ns.signInWithEmailAndPassword)(tp,e,n).then((()=>{ep.loginForm.querySelector(".error").innerHTML=""})).catch((t=>{console.log(t),t.message.includes("wrong-password")?ep.loginForm.querySelector(".error").innerHTML="Wrong password":t.message.includes("user-not-found)")?ep.loginForm.querySelector(".error").innerHTML="User email not found":t.message.includes("too-many-requests)")&&(ep.loginForm.querySelector(".error").innerHTML=" Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.")}))})),ep.logoutBtn.addEventListener("click",(function(t){t.preventDefault(),(0,ns.signOut)(tp)})),ep.loginBtn.addEventListener("click",(function(){ep.loginForm.classList.remove("is-hidden"),ep.formWrap.classList.remove("is-hidden"),ep.regForm.classList.add("is-hidden"),ep.homeBtn.classList.remove("nav__current"),ep.loginBtn.classList.add("nav__current"),ep.regBtn.classList.remove("nav__current")})),ep.regBtn.addEventListener("click",(function(){ep.regForm.classList.remove("is-hidden"),ep.formWrap.classList.remove("is-hidden"),ep.loginForm.classList.add("is-hidden"),ep.regBtn.classList.add("nav__current"),ep.loginBtn.classList.remove("nav__current")})),(0,ns.onAuthStateChanged)(tp,(async t=>{t&&(ep.logoutBtn.classList.remove("is-hidden"),ep.libBtn.classList.remove("is-hidden"),ep.loginBtn.classList.add("is-hidden"),ep.regBtn.classList.add("is-hidden"),ep.regForm.classList.add("is-hidden"),ep.formWrap.classList.add("is-hidden"),ep.homeBtn.classList.add("nav__current")),t||(ep.loginBtn.classList.remove("is-hidden"),ep.regBtn.classList.remove("is-hidden"),ep.libBtn.classList.add("is-hidden"),ep.logoutBtn.classList.add("is-hidden"))}));m=s("idPZz");var np=s("58AAY"),ip=s("1qskl");let sp;const rp=document.querySelector(".movie-card-list");t(l).start(),(0,m.default)(rp),o.default.fetchGenresList().then((t=>{sp=t})),o.default.fetchTrendData().then((t=>{const e=h(a(t.results,sp));rp.insertAdjacentHTML("beforeend",e),Qi(t.results);const n=document.querySelectorAll(".btn-watche"),i=document.querySelectorAll(".btn-queue");n.forEach((t=>{m.watchedArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Watched")}))})),i.forEach((t=>{m.queueArr.forEach((e=>{e.id===Number(t.dataset.id)&&(t.classList.add("pressed"),t.textContent="Remove from Queue")}))})),p(t.total_pages,t.page)})).catch((t=>console.log(t))),t(l).done(),rp.addEventListener("click",(async function(t){if(!t.target.dataset.target)return;const e=t.target.dataset.id,n=await o.default.fetchFullMovieInfo(e);if("watched"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Watched",void(0,np.default)(n,m.watchedArr,t.target.dataset.target);t.target.textContent="Add to Watched",(0,ip.default)(e,m.watchedArr,t.target.dataset.target)}if("queue"===t.target.dataset.target){if(t.target.classList.toggle("pressed"),t.target.classList.contains("pressed"))return t.target.textContent="Remove from Queue",void(0,np.default)(n,m.queueArr,t.target.dataset.target);t.target.textContent="Add to Queue",(0,ip.default)(e,m.queueArr,t.target.dataset.target)}}));
//# sourceMappingURL=index.727f0995.js.map
