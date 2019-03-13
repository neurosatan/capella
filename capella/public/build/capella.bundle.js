var capella=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",function(){return i});var o=n(4),i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.uploadUrl="/upload",this.uploadFileButton=document.getElementById("uploadFileButton"),this.uploadLinkField=document.getElementById("uploadLinkField"),this.uploadFileButton&&this.uploadFileButton.addEventListener("click",this.uploadByTransport.bind(this),!1),this.uploadLinkField&&this.uploadLinkField.addEventListener("keydown",this.uploadByUrl.bind(this),!1)}var t,n,i;return t=e,(n=[{key:"uploadByTransport",value:function(){var e=this;Promise.resolve().then(function(){return o.transport({url:e.uploadUrl,multiple:!1,accept:"image/png, image/gif, image/jpg, image/jpeg, image/bmp, image/tiff",progress:e.progress,fieldName:"file",beforeSend:e.before})}).then(this.success).catch(function(t){e.error(t)})}},{key:"uploadByUrl",value:function(e){13===e.keyCode&&(e.preventDefault(),this.uploadLinkField&&this.upload({link:this.uploadLinkField.value}))}},{key:"uploadBlob",value:function(e){var t=new FormData;this.currentFileName=e.name,t.append("file",e,e.name),this.upload(t)}},{key:"upload",value:function(e){var t=this;Promise.resolve().then(function(){return o.post({url:t.uploadUrl,data:e,type:o.contentType.FORM,progress:t.progress,beforeSend:t.before})}).then(this.success).catch(function(e){t.error(e)})}},{key:"before",value:function(e){var t;e instanceof FormData&&(t=this.currentFileName),e&&e.link&&(t=e.link),e[0]instanceof File&&(t=e[0].name),capella.uploadScreen.show(t)}},{key:"progress",value:function(e){e*=.95,capella.uploadScreen.progress(e)}},{key:"success",value:function(e){var t=e.body;t.success?(capella.uploadScreen.progress(100),window.location.href="/image/"+t.id):capella.uploadScreen.hide()}},{key:"error",value:function(e){var t=e.body;capella.notifier.show({message:"<i class='cdx-notify__warning-sign'></i>"+t.message,time:7e3}),capella.uploadScreen.hide()}}])&&r(t.prototype,n),i&&r(t,i),e}()},function(e,t,n){n(2),e.exports=n(3)},function(e,t,n){},function(e,t,n){"use strict";var r={},o=n(0).default,i=n(5).default,a=n(6).default,c=n(7).default;r.uploader=n(0),r.copyable=n(8),r.notificationToggler=n(9),r.notifier=n(10),r.uploadScreen=new c,r.uploader=new o,r.clipboard=new i,r.dnd=new a(".capella"),r.init=function(){r.copyable.init()},e.exports=r},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(2),o=setTimeout;function i(){}function a(e){if(!(this instanceof a))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],d(e,this)}function c(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,a._immediateFn(function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void u(t.promise,e)}s(t.promise,r)}else(1===e._state?s:u)(t.promise,e._value)})):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof a)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void d((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,o}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&a._immediateFn(function(){e._handled||a._unhandledRejectionFn(e._value)});for(var t=0,n=e._deferreds.length;t<n;t++)c(e,e._deferreds[t]);e._deferreds=null}function f(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function d(e,t){var n=!1;try{e(function(e){n||(n=!0,s(t,e))},function(e){n||(n=!0,u(t,e))})}catch(e){if(n)return;n=!0,u(t,e)}}a.prototype.catch=function(e){return this.then(null,e)},a.prototype.then=function(e,t){var n=new this.constructor(i);return c(this,new f(e,t,n)),n},a.prototype.finally=r.a,a.all=function(e){return new a(function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void c.call(a,function(t){i(e,t)},n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])})},a.resolve=function(e){return e&&"object"==typeof e&&e.constructor===a?e:new a(function(t){t(e)})},a.reject=function(e){return new a(function(t,n){n(e)})},a.race=function(e){return new a(function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)})},a._immediateFn="function"==typeof e&&function(t){e(t)}||function(e){o(e,0)},a._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},t.a=a}).call(this,n(5).setImmediate)},function(e,t,n){"use strict";t.a=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){return t.reject(n)})})}},function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n(4);var o,i,a,c,s,u,l=n(8),f=(i=function(e){return new Promise(function(t,n){e=c(e),e=s(e);var r=window.XMLHttpRequest?new window.XMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");r.open(e.method,e.url),r.setRequestHeader("X-Requested-With","XMLHttpRequest"),Object.keys(e.headers).forEach(function(t){var n=e.headers[t];r.setRequestHeader(t,n)});var o=e.ratio;r.upload.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*o/100);e.progress(r)},!1),r.addEventListener("progress",function(t){var n=Math.round(t.loaded/t.total*100),r=Math.ceil(n*(100-o)/100)+o;e.progress(r)},!1),r.onreadystatechange=function(){if(4===r.readyState){var e=r.response;try{e=JSON.parse(e)}catch(e){}var o=l.parseHeaders(r.getAllResponseHeaders()),i={body:e,code:r.status,headers:o};200===r.status?t(i):n(i)}},r.send(e.data)})},a=function(e){return e.method="POST",i(e)},c=function(e){if(!e.url||"string"!=typeof e.url)throw new Error("Url must be a non-empty string");if(e.method&&"string"!=typeof e.method)throw new Error("`method` must be a string or null");if(e.method=e.method?e.method.toUpperCase():"GET",e.headers&&"object"!==r(e.headers))throw new Error("`headers` must be an object or null");if(e.headers=e.headers||{},e.type&&("string"!=typeof e.type||!Object.values(o).includes(e.type)))throw new Error("`type` must be taken from module's «contentType» library");if(e.progress&&"function"!=typeof e.progress)throw new Error("`progress` must be a function or null");if(e.progress=e.progress||function(e){},e.beforeSend=e.beforeSend||function(e){},e.ratio&&"number"!=typeof e.ratio)throw new Error("`ratio` must be a number");if(e.ratio<0||e.ratio>100)throw new Error("`ratio` must be in a 0-100 interval");if(e.ratio=e.ratio||90,e.accept&&"string"!=typeof e.accept)throw new Error("`accept` must be a string with a list of allowed mime-types");if(e.accept=e.accept||"*/*",e.multiple&&"boolean"!=typeof e.multiple)throw new Error("`multiple` must be a true or false");if(e.multiple=e.multiple||!1,e.fieldName&&"string"!=typeof e.fieldName)throw new Error("`fieldName` must be a string");return e.fieldName=e.fieldName||"files",e},s=function(e){switch(e.method){case"GET":var t=u(e.data,o.URLENCODED);delete e.data,e.url=/\?/.test(e.url)?e.url+"&"+t:e.url+"?"+t;break;case"POST":case"PUT":case"DELETE":case"UPDATE":var n=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).type||o.JSON}(e);(l.isFormData(e.data)||l.isFormElement(e.data))&&(n=o.FORM),e.data=u(e.data,n),n!==f.contentType.FORM&&(e.headers["content-type"]=n)}return e},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};switch(arguments.length>1?arguments[1]:void 0){case o.URLENCODED:return l.urlEncode(e);case o.JSON:return l.jsonEncode(e);case o.FORM:return l.formEncode(e);default:return e}},{contentType:o={URLENCODED:"application/x-www-form-urlencoded; charset=utf-8",FORM:"multipart/form-data",JSON:"application/json; charset=utf-8"},request:i,get:function(e){return e.method="GET",i(e)},post:a,transport:function(e){return e=c(e),l.transport(e).then(function(t){return l.isObject(e.data)&&Object.keys(e.data).forEach(function(n){var r=e.data[n];t.append(n,r)}),e.data=t,a(e)})}});e.exports=f},function(e,t,n){"use strict";n.r(t);var r=n(1);window.Promise=window.Promise||r.a},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(6),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(0))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,c,s=1,u={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick(function(){m(e)})}:function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?(a="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&m(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),r=function(t){e.postMessage(a+t,"*")}):e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){m(e.data)},r=function(e){i.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,r=function(e){var t=f.createElement("script");t.onreadystatechange=function(){m(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(m,0,e)},d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return u[s]=o,r(s),s++},d.clearImmediate=p}function p(e){delete u[e]}function m(e){if(l)setTimeout(m,0,e);else{var t=u[e];if(t){l=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{p(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(0),n(7))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var s,u=[],l=!1,f=-1;function d(){l&&s&&(l=!1,s.length?u=s.concat(u):f=-1,u.length&&p())}function p(){if(!l){var e=c(d);l=!0;for(var t=u.length;t;){for(s=u,u=[];++f<t;)s&&s[f].run();f=-1,t=u.length}s=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new m(e,t)),1!==u.length||l||c(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(9);e.exports=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"urlEncode",value:function(e){return o(e)}},{key:"jsonEncode",value:function(e){return JSON.stringify(e)}},{key:"formEncode",value:function(e){if(this.isFormData(e))return e;if(this.isFormElement(e))return new FormData(e);if(this.isObject(e)){var t=new FormData;return Object.keys(e).forEach(function(n){var r=e[n];t.append(n,r)}),t}throw new Error("`data` must be an instance of Object, FormData or <FORM> HTMLElement")}},{key:"isObject",value:function(e){return"[object Object]"===Object.prototype.toString.call(e)}},{key:"isFormData",value:function(e){return e instanceof FormData}},{key:"isFormElement",value:function(e){return e instanceof HTMLFormElement}},{key:"transport",value:function(e){return new Promise(function(t,n){var r=document.createElement("INPUT");r.type="file",e.multiple&&r.setAttribute("multiple","multiple"),e.accept&&r.setAttribute("accept",e.accept),r.style.display="none",document.body.appendChild(r),r.addEventListener("change",function(n){for(var r=n.target.files,o=new FormData,i=0;i<r.length;i++)o.append(e.fieldName,r[i],r[i].name);e.beforeSend(r),t(o)},!1),r.click()})}},{key:"parseHeaders",value:function(e){var t=e.trim().split(/[\r\n]+/),n={};return t.forEach(function(e){var t=e.split(": "),r=t.shift(),o=t.join(": ");r&&(n[r]=o)}),n}}])&&r(t,n),e}()},function(e,t){var n=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,escape).replace(/%20/g,"+")},r=function(e,t,o,i){return t=t||null,o=o||"&",i=i||null,e?function(e){for(var t=new Array,n=0;n<e.length;n++)e[n]&&t.push(e[n]);return t}(Object.keys(e).map(function(a){var c,s,u=a;if(i&&(u=i+"["+u+"]"),"object"==typeof e[a]&&null!==e[a])c=r(e[a],null,o,u);else{t&&(s=u,u=!isNaN(parseFloat(s))&&isFinite(s)?t+Number(u):u);var l=e[a];l=(l=0===(l=!1===(l=!0===l?"1":l)?"0":l)?"0":l)||"",c=n(u)+"="+n(l)}return c})).join(o).replace(/[!'()*]/g,""):""};e.exports=r}])},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",function(){return o});var o=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pasteCatcher=null,window.Clipboard?document.body.addEventListener("paste",function(e){t.pasteHandler(e)}):(this.pasteCatcher=document.createElement("DIV"),this.pasteCatcher.setAttribute("contenteditable",!0),this.pasteCatcher.style.opacity=0,this.pasteCatcher.style.position="absolute",document.body.appendChild(this.pasteCatcher),document.body.addEventListener("paste",function(e){t.pasteCatcher.focus(),t.pasteHandler(e)}))}var t,n,o;return t=e,(n=[{key:"pasteHandler",value:function(e){var t=(e.clipboardData||e.originalEvent.clipboardData||window.clipboardData).getData("Text");if(t){e.preventDefault();if(t.match(/^((http[s]?):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/))return void capella.uploader.upload({link:t});document.getElementById("uploadLinkField").value=t}this.pasteImageHandler(e)}},{key:"pasteImageHandler",value:function(e){var t=this;if(window.Clipboard){if(e.preventDefault(),!e.clipboardData)return;var n=e.clipboardData.items;if(n)for(var r=0;r<n.length;r++)if(-1!==n[r].type.indexOf("image")){var o=n[r].getAsFile();capella.uploader.uploadBlob(o);break}}else setTimeout(function(){return t.checkPasteCatcher()},50)}},{key:"checkPasteCatcher",value:function(){var e=this.pasteCatcher.querySelector("IMG");this.pasteCatcher.innerHTML="",e&&"IMG"===e.tagName&&this.createImage(e.src).then(function(e){return capella.uploader.uploadBlob(e)}).catch(console.log)}},{key:"createImage",value:function(e){var t=this;return new Promise(function(n,r){var o=new Image;o.onload=function(){t.loadXHR(e).then(n).catch(r)},o.src=e})}},{key:"loadXHR",value:function(e){return new Promise(function(t,n){try{var r=new XMLHttpRequest;r.open("GET",e),r.responseType="blob",r.onerror=function(){n("Network error.")},r.onload=function(){200===r.status?t(r.response):n("Loading error: "+r.statusText)},r.send()}catch(e){n(e.message)}})}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",function(){return o});var o=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.wrapper=document.querySelector(t),this.wrapper.addEventListener("dragenter",this.dragover.bind(this)),this.wrapper.addEventListener("dragover",this.dragover.bind(this)),this.wrapper.addEventListener("dragleave",this.drageleave.bind(this)),this.wrapper.addEventListener("drop",this.drop.bind(this))}var t,n,o;return t=e,(n=[{key:"dragover",value:function(e){e.preventDefault(),this.wrapper.classList.add("capella--dark")}},{key:"drageleave",value:function(e){e.preventDefault(),this.wrapper.classList.remove("capella--dark")}},{key:"drop",value:function(e){this.wrapper.classList.remove("capella--dark");var t=e.dataTransfer.files[0];capella.uploader.uploadBlob(t),e.preventDefault()}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.r(t),n.d(t,"default",function(){return o});var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.mainContainer=document.querySelector(".capella"),this.progressBar=document.querySelector(".js-capella__uploading-progress"),this.loadingClass="capella--loading"}var t,n,o;return t=e,(n=[{key:"show",value:function(e){this.mainContainer.querySelector(".capella__uploading-filename").textContent=e,this.mainContainer.classList.add(this.loadingClass)}},{key:"hide",value:function(){this.mainContainer.classList.remove(this.loadingClass)}},{key:"progress",value:function(e){this.progressBar.style.width=e+"%"}}])&&r(t.prototype,n),o&&r(t,o),e}()},function(e,t){var n,r,o,i,a,c;e.exports=(n="js-copyable",r="js-copyable-authorize",o=function(e,t){e.addEventListener("click",c),e.addEventListener("copied",t)},i=function(e){e.addEventListener("click",a)},a=function(){this.querySelector("[name="+n+"]").click()},c=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(this),t.removeAllRanges(),t.addRange(n),document.execCommand("copy"),t.removeAllRanges();var r=new CustomEvent("copied",{bubbles:!1,cancelable:!1,detail:n.toString()});this.dispatchEvent(r),e.stopPropagation()},{init:function(e){var t=document.getElementsByName(n);if(t){for(var a=0;a<t.length;a++)o(t[a],e);for(var c=document.getElementsByName(r),s=0;s<c.length;s++)i(c[s]);console.log("Copyable module initialized"),this.clipboardButton=document.querySelector(".js-result__copy"),this.clipboardButton&&this.clipboardButton.addEventListener("click",capella.notificationToggler.toggleCopiedIcon,!0)}else console.log("There are no copyable elements")}})},function(e,t,n){"use strict";var r,o,i,a;e.exports=(o=".js-result__is-copied",i="js-hidden",a=document.querySelector(o),{toggleCopiedIcon:function(e){if(e.ctrlKey||e.metaKey||2===e.which)return!1;e.preventDefault(),r&&clearTimeout(r),a.classList.remove(i),r=setTimeout(function(){a.classList.add(i)},2e3)}})},function(e,t,n){window,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){"use strict";n(1),
/*!
 * Codex JavaScript Notification module
 * https://github.com/codex-team/js-notifier
 */
e.exports=function(){var e=n(6),t=null;return{show:function(n){if(n.message){!function(){if(t)return!0;t=e.getWrapper(),document.body.appendChild(t)}();var r=null,o=n.time||8e3;switch(n.type){case"confirm":r=e.confirm(n);break;case"prompt":r=e.prompt(n);break;default:r=e.alert(n),window.setTimeout(function(){r.remove()},o)}t.appendChild(r),r.classList.add("cdx-notify--bounce-in")}}}}()},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),n(4)(r,{hmr:!0,transform:void 0,insertInto:void 0}),r.locals&&(e.exports=r.locals)},function(e,t,n){(e.exports=n(3)(!1)).push([e.i,'.cdx-notify--error{background:#fffbfb!important}.cdx-notify--error::before{background:#fb5d5d!important}.cdx-notify__input{max-width:130px;padding:5px 10px;background:#f7f7f7;border:0;border-radius:3px;font-size:13px;color:#656b7c;outline:0}.cdx-notify__input:-ms-input-placeholder{color:#656b7c}.cdx-notify__input::placeholder{color:#656b7c}.cdx-notify__input:focus:-ms-input-placeholder{color:rgba(101,107,124,.3)}.cdx-notify__input:focus::placeholder{color:rgba(101,107,124,.3)}.cdx-notify__button{border:none;border-radius:3px;font-size:13px;padding:5px 10px;cursor:pointer}.cdx-notify__button:last-child{margin-left:10px}.cdx-notify__button--cancel{background:#f2f5f7;box-shadow:0 2px 1px 0 rgba(16,19,29,0);color:#656b7c}.cdx-notify__button--cancel:hover{background:#eee}.cdx-notify__button--confirm{background:#34c992;box-shadow:0 1px 1px 0 rgba(18,49,35,.05);color:#fff}.cdx-notify__button--confirm:hover{background:#33b082}.cdx-notify__btns-wrapper{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;margin-top:5px}.cdx-notify__cross{position:absolute;top:5px;right:5px;width:10px;height:10px;padding:5px;opacity:.54;cursor:pointer}.cdx-notify__cross::after,.cdx-notify__cross::before{content:\'\';position:absolute;left:9px;top:5px;height:12px;width:2px;background:#575d67}.cdx-notify__cross::before{transform:rotate(-45deg)}.cdx-notify__cross::after{transform:rotate(45deg)}.cdx-notify__cross:hover{opacity:1}.cdx-notifies{position:fixed;z-index:2;bottom:20px;left:20px;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif}.cdx-notify{position:relative;width:220px;margin-top:15px;padding:13px 16px;background:#fff;box-shadow:0 11px 17px 0 rgba(23,32,61,.13);border-radius:5px;font-size:14px;line-height:1.4em;word-wrap:break-word}.cdx-notify::before{content:\'\';position:absolute;display:block;top:0;left:0;width:3px;height:calc(100% - 6px);margin:3px;border-radius:5px;background:0 0}@keyframes bounceIn{0%{opacity:0;transform:scale(.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(.9)}100%{transform:scale(1)}}.cdx-notify--bounce-in{animation-name:bounceIn;animation-duration:.6s;animation-iteration-count:1}.cdx-notify--success{background:#fafffe!important}.cdx-notify--success::before{background:#41ffb1!important}',""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n,r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var i=(n=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),a=o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"});return[r].concat(a).concat([i]).join("\n")}return[r].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var t={};return function(e){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e){return document.querySelector(e)}.call(this,e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),s=null,u=0,l=[],f=n(5);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],t))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),l.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,o)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=l.indexOf(e);t>=0&&l.splice(t,1)}function y(e){var t=document.createElement("style");return void 0===e.attrs.type&&(e.attrs.type="text/css"),v(t,e.attrs),m(e,t),t}function v(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function b(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i=t.transform(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=s||(s=y(t)),r=x.bind(null,n,a,!1),o=x.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(t,e.attrs),m(e,t),t}(t),r=function(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,n,t),o=function(){h(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=function(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),o=function(){h(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=p(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(c=i[a.id]).refs--,r.push(c)}for(e&&d(p(e,t),t),o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var g,w=(g=[],function(e,t){return g[e]=t,g.filter(Boolean).join("\n")});function x(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,t,n){"use strict";var r,o,i,a,c,s;e.exports=(r="cdx-notify",o="cdx-notify__cross",i="cdx-notify__button--confirm",a="cdx-notify__button",c="cdx-notify__btns-wrapper",{alert:s=function(e){var t=document.createElement("DIV"),n=document.createElement("DIV"),i=e.message,a=e.style;return t.classList.add(r),a&&t.classList.add(r+"--"+a),t.innerHTML=i,n.classList.add(o),n.addEventListener("click",t.remove.bind(t)),t.appendChild(n),t},confirm:function(e){var t=s(e),n=document.createElement("div"),r=document.createElement("button"),u=document.createElement("button"),l=t.querySelector("."+o),f=e.cancelHandler,d=e.okHandler;return n.classList.add(c),r.innerHTML=e.okText||"Confirm",u.innerHTML=e.cancelText||"Cancel",r.classList.add(a),u.classList.add(a),r.classList.add(i),u.classList.add("cdx-notify__button--cancel"),f&&"function"==typeof f&&(u.addEventListener("click",f),l.addEventListener("click",f)),d&&"function"==typeof d&&r.addEventListener("click",d),r.addEventListener("click",t.remove.bind(t)),u.addEventListener("click",t.remove.bind(t)),n.appendChild(r),n.appendChild(u),t.appendChild(n),t},prompt:function(e){var t=s(e),n=document.createElement("div"),r=document.createElement("button"),u=document.createElement("input"),l=t.querySelector("."+o),f=e.cancelHandler,d=e.okHandler;return n.classList.add(c),r.innerHTML=e.okText||"Ok",r.classList.add(a),r.classList.add(i),u.classList.add("cdx-notify__input"),e.placeholder&&u.setAttribute("placeholder",e.placeholder),e.default&&(u.value=e.default),e.inputType&&(u.type=e.inputType),f&&"function"==typeof f&&l.addEventListener("click",f),d&&"function"==typeof d&&r.addEventListener("click",function(){d(u.value)}),r.addEventListener("click",t.remove.bind(t)),n.appendChild(u),n.appendChild(r),t.appendChild(n),t},getWrapper:function(){var e=document.createElement("DIV");return e.classList.add("cdx-notifies"),e}})}])}]);