/*! For license information please see 70.1fe186e0.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[70],{536:function(e,t,r){"use strict";r.r(t);var n=r(13),a=r(18),o=r(0),i=r.n(o),l=r(169),c=r(181),u=r.n(c),s=r(61),h=r(60),f=r(10);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var s={};function h(){}function f(){}function p(){}var v={};l(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==t&&r.call(y,a)&&(v=y);var g=p.prototype=h.prototype=Object.create(v);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(h).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=p,l(g,"constructor",p),l(p,"constructor",f),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),l(g,i,"Generator"),l(g,a,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;L(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(f.g)(),r=Object(l.a)(["user"]),c=Object(a.a)(r,2),p=c[0],v=c[1],m=Object(o.useState)([]),y=Object(a.a)(m,2),g=y[0],b=y[1],E=Object(o.useState)(null),w=Object(a.a)(E,2),x=(w[0],w[1]),L=Object(o.useState)(0),O=Object(a.a)(L,2),j=O[0],N=O[1],k=Object(o.useState)(0),_=Object(a.a)(k,2),S=_[0],G=_[1],P=Object(o.useState)(10),T=Object(a.a)(P,2),F=T[0];T[1];Object(o.useEffect)((function(){Object(n.a)(d().mark((function e(){var r,n,a,o,i,l,c,u,f;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=S+F,e.prev=1,e.next=4,Object(s.k)(F,S);case 4:return e.next=6,e.sent.data;case 6:o=e.sent,b(null===o||void 0===o?void 0:o.results),console.log("Loading items from ".concat(S," to ").concat(r)),x(null===o||void 0===o||null===(n=o.results)||void 0===n?void 0:n.slice(S,r)),N(Math.ceil((null===o||void 0===o||null===(a=o.results)||void 0===a?void 0:a.length)/F)),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(1),console.info("error ",e.t0),(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.message)?h.b.error(e.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(u=c.data)||void 0===u?void 0:u.code)&&(f=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),v("user",null,{path:"/"}),Object(s.s)(f).finally((function(){t.push("/user-pages/login-1")})));case 18:case"end":return e.stop()}}),e,null,[[1,13]])})))()}),[S,F]);return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Clients / Fetch Employee "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===p||void 0===p||null===(e=p.user)||void 0===e?void 0:e.role," Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch Employee")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Employee list"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Name "),i.a.createElement("th",null," Contact no. "),i.a.createElement("th",null," Branch "),i.a.createElement("th",null," Email "),i.a.createElement("th",null," Role "),i.a.createElement("th",null," Edit "),i.a.createElement("th",null," Delete "))),i.a.createElement("tbody",null,null===g||void 0===g?void 0:g.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,null===e||void 0===e?void 0:e.name),i.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),i.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),i.a.createElement("td",null,null===e||void 0===e?void 0:e.email),i.a.createElement("td",null,null===e||void 0===e?void 0:e.role),i.a.createElement("td",null,i.a.createElement("i",{className:"mdi mdi-lead-pencil"})),i.a.createElement("td",null,i.a.createElement("i",{className:"mdi mdi-delete"})))})))),i.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){var t=e.selected*F%g.length;console.log("User requested page number ".concat(e.selected,", which is offset ").concat(t)),G(t)},pageRangeDisplayed:5,pageCount:j,previousLabel:"< previous",renderOnZeroPageCount:null}))))))}}}]);
//# sourceMappingURL=70.1fe186e0.chunk.js.map