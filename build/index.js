!function(t,e){if("object"===typeof exports&&"object"===typeof module)module.exports=e(require("react"));else if("function"===typeof define&&define.amd)define(["react"],e);else{var r=e("object"===typeof exports?require("react"):t.react);for(var n in r)("object"===typeof exports?exports:t)[n]=r[n]}}(this,function(t){return function(t){function e(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=1)}([function(t,e,r){"use strict";function n(){}function o(t){try{return t.then}catch(t){return m=t,v}}function i(t,e){try{return t(e)}catch(t){return m=t,v}}function a(t,e,r){try{t(e,r)}catch(t){return m=t,v}}function s(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==n&&d(t,this)}function u(t,e,r){return new t.constructor(function(o,i){var a=new s(n);a.then(o,i),c(t,new y(e,r,a))})}function c(t,e){for(;3===t._83;)t=t._18;if(s._47&&s._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);l(t,e)}function l(t,e){b(function(){var r=1===t._83?e.onFulfilled:e.onRejected;if(null===r)return void(1===t._83?f(e.promise,t._18):p(e.promise,t._18));var n=i(r,t._18);n===v?p(e.promise,m):f(e.promise,n)})}function f(t,e){if(e===t)return p(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var r=o(e);if(r===v)return p(t,m);if(r===t.then&&e instanceof s)return t._83=3,t._18=e,void h(t);if("function"===typeof r)return void d(r.bind(e),t)}t._83=1,t._18=e,h(t)}function p(t,e){t._83=2,t._18=e,s._71&&s._71(t,e),h(t)}function h(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function y(t,e,r){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=r}function d(t,e){var r=!1,n=a(t,function(t){r||(r=!0,f(e,t))},function(t){r||(r=!0,p(e,t))});r||n!==v||(r=!0,p(e,m))}var b=r(4),m=null,v={};t.exports=s,s._47=null,s._71=null,s._44=n,s.prototype.then=function(t,e){if(this.constructor!==s)return u(this,t,e);var r=new s(n);return c(this,new y(t,e,r)),r}},function(t,e,r){r(2),t.exports=r(9)},function(t,e,r){"use strict";"undefined"===typeof Promise&&(r(3).enable(),window.Promise=r(6)),r(7),Object.assign=r(8)},function(t,e,r){"use strict";function n(){c=!1,s._47=null,s._71=null}function o(t){function e(e){(t.allRejections||a(f[e].error,t.whitelist||u))&&(f[e].displayId=l++,t.onUnhandled?(f[e].logged=!0,t.onUnhandled(f[e].displayId,f[e].error)):(f[e].logged=!0,i(f[e].displayId,f[e].error)))}function r(e){f[e].logged&&(t.onHandled?t.onHandled(f[e].displayId,f[e].error):f[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+f[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+f[e].displayId+".")))}t=t||{},c&&n(),c=!0;var o=0,l=0,f={};s._47=function(t){2===t._83&&f[t._56]&&(f[t._56].logged?r(t._56):clearTimeout(f[t._56].timeout),delete f[t._56])},s._71=function(t,r){0===t._75&&(t._56=o++,f[t._56]={displayId:null,error:r,timeout:setTimeout(e.bind(null,t._56),a(r,u)?100:2e3),logged:!1})}}function i(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function a(t,e){return e.some(function(e){return t instanceof e})}var s=r(0),u=[ReferenceError,TypeError,RangeError],c=!1;e.disable=n,e.enable=o},function(t,e,r){"use strict";(function(e){function r(t){a.length||(i(),s=!0),a[a.length]=t}function n(){for(;u<a.length;){var t=u;if(u+=1,a[t].call(),u>c){for(var e=0,r=a.length-u;e<r;e++)a[e]=a[e+u];a.length-=u,u=0}}a.length=0,u=0,s=!1}function o(t){return function(){function e(){clearTimeout(r),clearInterval(n),t()}var r=setTimeout(e,0),n=setInterval(e,50)}}t.exports=r;var i,a=[],s=!1,u=0,c=1024,l="undefined"!==typeof e?e:self,f=l.MutationObserver||l.WebKitMutationObserver;i="function"===typeof f?function(t){var e=1,r=new f(t),n=document.createTextNode("");return r.observe(n,{characterData:!0}),function(){e=-e,n.data=e}}(n):o(n),r.requestFlush=i,r.makeRequestCallFromTimer=o}).call(e,r(5))},function(t,e){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(r=window)}t.exports=r},function(t,e,r){"use strict";function n(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=r(0);t.exports=o;var i=n(!0),a=n(!1),s=n(null),u=n(void 0),c=n(0),l=n("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return s;if(void 0===t)return u;if(!0===t)return i;if(!1===t)return a;if(0===t)return c;if(""===t)return l;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,r){r(t)})}return n(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,r){function n(a,s){if(s&&("object"===typeof s||"function"===typeof s)){if(s instanceof o&&s.then===o.prototype.then){for(;3===s._83;)s=s._18;return 1===s._83?n(a,s._18):(2===s._83&&r(s._18),void s.then(function(t){n(a,t)},r))}var u=s.then;if("function"===typeof u){return void new o(u.bind(s)).then(function(t){n(a,t)},r)}}e[a]=s,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)n(a,e[a])})},o.reject=function(t){return new o(function(e,r){r(t)})},o.race=function(t){return new o(function(e,r){t.forEach(function(t){o.resolve(t).then(e,r)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function r(t){return"string"!==typeof t&&(t=String(t)),t}function n(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return m.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}})}function s(t){var e=new FileReader,r=a(e);return e.readAsArrayBuffer(t),r}function u(t){var e=new FileReader,r=a(e);return e.readAsText(t),r}function c(t){for(var e=new Uint8Array(t),r=new Array(e.length),n=0;n<e.length;n++)r[n]=String.fromCharCode(e[n]);return r.join("")}function l(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function f(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(m.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(m.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(m.arrayBuffer&&m.blob&&g(t))this._bodyArrayBuffer=l(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!m.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!_(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=l(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):m.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},m.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(s)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return u(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},m.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function p(t){var e=t.toUpperCase();return w.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var r=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,r||null==t._bodyInit||(r=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=p(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&r)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(r)}function y(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var r=t.split("="),n=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(n),decodeURIComponent(o))}}),e}function d(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var r=t.split(":"),n=r.shift().trim();if(n){var o=r.join(":").trim();e.append(n,o)}}),e}function b(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var m={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(m.arrayBuffer)var v=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],g=function(t){return t&&DataView.prototype.isPrototypeOf(t)},_=ArrayBuffer.isView||function(t){return t&&v.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,n){t=e(t),n=r(n);var o=this.map[t];this.map[t]=o?o+","+n:n},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,n){this.map[e(t)]=r(n)},o.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,r){t.push(r)}),n(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),n(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,r){t.push([r,e])}),n(t)},m.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var w=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},f.call(h.prototype),f.call(b.prototype),b.prototype.clone=function(){return new b(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},b.error=function(){var t=new b(null,{status:0,statusText:""});return t.type="error",t};var j=[301,302,303,307,308];b.redirect=function(t,e){if(-1===j.indexOf(e))throw new RangeError("Invalid status code");return new b(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=b,t.fetch=function(t,e){return new Promise(function(r,n){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:d(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;r(new b(e,t))},i.onerror=function(){n(new TypeError("Network request failed"))},i.ontimeout=function(){n(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&m.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,s,u=n(t),c=1;c<arguments.length;c++){r=Object(arguments[c]);for(var l in r)i.call(r,l)&&(u[l]=r[l]);if(o){s=o(r);for(var f=0;f<s.length;f++)a.call(r,s[f])&&(u[s[f]]=r[s[f]])}}return u}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(10);e.default=n.a},function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var a=r(11),s=r.n(a),u=r(12),c=r.n(u),l=r(15),f=(r.n(l),function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}()),p=function(t){function e(t){n(this,e);var r=o(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.state={inputValue:""},r.onChange=r.onChange.bind(r),r.onFormSubmit=r.onFormSubmit.bind(r),r}return i(e,t),f(e,[{key:"onChange",value:function(t){this.setState({inputValue:t.target.value})}},{key:"onFormSubmit",value:function(t){t.preventDefault(),this.state.inputValue&&(this.props.subscribe.onSubmit(this.state.inputValue),this.setState({inputValue:""}))}},{key:"render",value:function(){var t=this.props,e=t.background,r=t.title,n=t.description,o=t.logo,i=t.subscribe,a=t.links;return e.overlay&&e.overlay.color&&!e.overlay.opacity&&console.error("background.overlay.opacity is required when using background.overlay"),s.a.createElement("div",{className:"UnderConstruction",style:Object.assign({backgroundImage:"url("+e.image+")",backgroundColor:e.color,color:e.textColor},e.style)},e.overlay&&e.overlay.color&&s.a.createElement("div",{style:{backgroundColor:e.overlay.color,opacity:e.overlay.opacity},className:"UnderConstruction-overlay"}),s.a.createElement("div",{className:"UnderConstruction-container"},o.src&&s.a.createElement("div",{className:"UnderConstruction-logo-container"},s.a.createElement("img",{className:"UnderConstruction-logo",alt:o.alt,src:o.src,style:Object.assign({},o.style)})),r.text&&s.a.createElement("div",{className:"UnderConstruction-title",style:Object.assign({},r.style)},r.text),n.text&&s.a.createElement("div",{className:"UnderConstruction-description",style:Object.assign({},n.style)},n.text),i.onSubmit&&s.a.createElement("div",{className:"UnderConstruction-notify"},s.a.createElement("form",{onSubmit:this.onFormSubmit},s.a.createElement("input",{className:"UnderConstruction-input",type:"text",placeholder:i.placeholder,onChange:this.onChange,style:Object.assign({},i.inputStyle),value:this.state.inputValue}),s.a.createElement("button",{style:Object.assign({},i.buttonStyle),className:"UnderConstruction-notify-button",type:"submit"},i.buttonText||"Submit")))),a&&a.length>0&&s.a.createElement("div",{className:"UnderConstruction-social-networks"},a.map(function(t,e){return s.a.createElement("a",{className:"UnderConstruction-social-networks-link",key:e,target:"_blank",rel:"noopener noreferrer",href:t.url},t.image&&s.a.createElement("img",{className:"UnderConstruction-social-networks-image",src:t.image,alt:t.text,style:Object.assign({},t.imageStyle)}),t.text&&s.a.createElement("span",{className:"UnderConstruction-social-networks-text",style:Object.assign({},t.textStyle)},t.text))})))}}]),e}(s.a.Component);p.defaultProps={background:{image:"",color:"",textColor:"",overlay:{},style:{}},logo:{src:"",alt:"",style:{}},title:{text:"",style:{}},description:{text:"",style:{}},subscribe:{onSubmit:null,placeholder:"",buttonText:"",inputStyle:{},buttonStyle:{}},links:[{url:"",image:"",text:"",imageStyle:{},textStyle:{}}]},p.propTypes={background:c.a.shape({image:c.a.string,color:c.a.string,textColor:c.a.string,style:c.a.object,overlay:c.a.shape({color:c.a.string,opacity:c.a.string})}),logo:c.a.shape({src:c.a.string,alt:c.a.string,style:c.a.object}),title:c.a.shape({text:c.a.string,style:c.a.object}),description:c.a.shape({text:c.a.string,style:c.a.object}),subscribe:c.a.shape({onSubmit:c.a.func,placeholder:c.a.string,buttonText:c.a.string,inputStyle:c.a.object,buttonStyle:c.a.object}),links:c.a.arrayOf(c.a.shape({url:c.a.string,image:c.a.string,text:c.a.string,imageStyle:c.a.object,textStyle:c.a.object}))},e.a=p},function(e,r){e.exports=t},function(t,e,r){t.exports=r(13)()},function(t,e,r){"use strict";function n(){}function o(){}var i=r(14);o.resetWarningCache=n,t.exports=function(){function t(t,e,r,n,o,a){if(a!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var r={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:n};return r.PropTypes=r,r}},function(t,e,r){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e){}])});
//# sourceMappingURL=index.js.map