/*! For license information please see 63.c5b9d063.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[63],{177:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r(34),a=r(0),o=r(7),i=function(t){var e=Object(o.g)(),r=Object(o.h)(),i=r.search,c=r.pathname,l=new URLSearchParams(i),u=l.get(t),s=Object(a.useState)(null!==u?u:""),h=Object(n.a)(s,2),f=h[0],d=h[1];return[f,function(r){l.set(t,r),e.replace({pathname:c,search:l.toString()}),d(r)}]}},570:function(t,e,r){"use strict";r.r(e);var n=r(44),a=r(34),o=r(0),i=r.n(o),c=r(169),l=r(2),u=r(22),s=r(177),h=r(45),f=r(7),d=r(336);function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof h?e:h,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return N()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var s={};function h(){}function f(){}function d(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,y=m&&m(m(L([])));y&&y!==e&&r.call(y,a)&&(v=y);var g=d.prototype=h.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=u(t[a],t,o);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(h).then((function(t){s.value=t,i(s)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=d,c(g,"constructor",d),c(d,"constructor",f),f.displayName=c(d,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=L,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}e.default=function(){var t=Object(o.useState)(0),e=Object(a.a)(t,2),r=(e[0],e[1]),v=Object(s.a)("page"),m=Object(a.a)(v,2),y=m[0],g=(m[1],Object(o.useState)(10)),b=Object(a.a)(g,1)[0],E=i.a.useState(!1),w=Object(a.a)(E,2),j=(w[0],w[1],Object(o.useState)({})),O=Object(a.a)(j,2),x=(O[0],O[1],Object(c.a)(["user"])),L=Object(a.a)(x,2),N=(L[0],L[1]),S=Object(o.useState)([]),k=Object(a.a)(S,2),_=k[0],T=k[1],P=Object(o.useState)(!0),G=Object(a.a)(P,2),F=(G[0],G[1]),I=Object(f.g)(),J=function(){var t=Object(n.a)(p().mark((function t(){var e,n,a,o,i,c;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return F(!0),t.prev=1,t.next=4,Object(u.Hb)();case 4:return t.next=6,t.sent.data;case 6:e=t.sent,T(null===e||void 0===e?void 0:e.results),r(null===e||void 0===e?void 0:e.totalPages),F(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),(null===t.t0||void 0===t.t0||null===(n=t.t0.response)||void 0===n||null===(a=n.data)||void 0===a?void 0:a.message)?h.b.error(t.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===t.t0||void 0===t.t0||null===(o=t.t0.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.code)&&(c=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),N("user",null,{path:"/"}),Object(u.Sb)(c).finally((function(){I.push("/user-pages/login-1")})));case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();return Object(o.useEffect)((function(){J()}),[y,b]),console.log("it",_),i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"}," Paid Video "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(t){return t.preventDefault()}},"Training")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Paid Video")))),i.a.createElement("div",{className:"video-section"},i.a.createElement("div",{class:"container"},i.a.createElement("div",{class:"card-group vgr-cards"},null===_||void 0===_?void 0:_.map((function(t){return i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-img-body"},i.a.createElement(d.b,{cloudName:"dihq2mfsj",publicId:"khmmih18bjul8qndwbv0"},i.a.createElement(d.a,{height:"1",overlay:"text:arial_60:watchme",gravity:"north",y:"10"}))),i.a.createElement("div",{class:"card-body"},i.a.createElement("h4",{class:"card-title"},t.title),i.a.createElement("p",{class:"card-text"},t.description),i.a.createElement("div",null),i.a.createElement("small",{className:"instructor card-text"},"Kalob Taulien"," ")," ",i.a.createElement("br",null),i.a.createElement("div",null,i.a.createElement("div",{className:"pt-2"},i.a.createElement("span",null,i.a.createElement("b",null,"Total: ")," 12 Lectures")," ",i.a.createElement("br",null),i.a.createElement("span",null,i.a.createElement("b",null,"Duration: ")," 37 min")),i.a.createElement(l.b,{to:"#",className:"btn-enrollment mt-3 btn btn-outline-primary"},"Enroll"))))}))))))}}}]);
//# sourceMappingURL=63.c5b9d063.chunk.js.map