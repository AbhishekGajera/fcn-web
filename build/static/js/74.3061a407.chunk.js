/*! For license information please see 74.3061a407.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[74],{650:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r(10),o=r(0),i=r.n(o),c=r(97),l=r(190),s=r(192),u=r(33),d=r(15),f=r(11);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(O){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(O){return{type:"throw",arg:O}}}e.wrap=l;var u={};function d(){}function f(){}function p(){}var h={};c(h,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(k([])));y&&y!==t&&r.call(y,a)&&(h=y);var g=p.prototype=d.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function k(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,c(g,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(E.prototype),c(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=k,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:k(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,r,o,p,h,v,y=Object(s.a)(["user"]),g=Object(a.a)(y,1)[0],b=Object(f.g)(),E=Object(c.a)({mode:"onChange"}),w=E.register,N=E.handleSubmit,x=E.reset,L=E.formState,k=L.errors,j=(L.isDirty,L.isValid,(0,E.getValues)()),O=function(){var e=Object(n.a)(m().mark((function e(t){var r,n,a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("dl",t.file[0]),(n=new FormData).append("files",t.file[0]),e.next=5,Object(d.j)(n);case 5:if(a=e.sent,n.append("user",null===g||void 0===g||null===(r=g.user)||void 0===r?void 0:r.id),n.append("type",null===t||void 0===t?void 0:t.category),n.append("title","sample"),!a.error){e.next=13;break}u.b.error(a.error.message),e.next=26;break;case 13:return e.prev=13,n.url=a.secure_url,console.log("myfl",n),e.next=18,Object(d.y)(n);case 18:u.b.success("Add Video successfully"),x(),b.push("/video/fetch-video"),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(13),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 26:case"end":return e.stop()}}),e,null,[[13,23]])})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Video / Add Video "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===g||void 0===g||null===(e=g.user)||void 0===e?void 0:e.role," Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Add Video")))),i.a.createElement("div",{className:"row auth",style:{display:"flex",justifyContent:"center"}},i.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12 col-xs-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-sample",onSubmit:N(O),enctype:"multipart/form-data"},i.a.createElement("p",{className:"card-description"}," Add Video "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(l.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-4 col-form-label"},"Category"),i.a.createElement("div",{className:"col-sm-8 d-flex align-item-center"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"radio",className:"form-check-input",name:"category",id:"optionsRadios1",value:"free"}),i.a.createElement("i",{className:"input-helper"}),"Free")),i.a.createElement("div",{className:"form-check ml-3"},i.a.createElement("label",{className:"form-check-label"},i.a.createElement("input",{type:"radio",className:"form-check-input",name:"category",id:"optionsRadios2",value:"paid",defaultChecked:!0}),i.a.createElement("i",{className:"input-helper"}),"Paid")))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(l.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-4 col-form-label"},"Upload Video"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(l.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"file",accept:"video/mp4,video/x-m4v,video/*",multiple:!1},w("file",{required:!0}))),i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===j||void 0===j||null===(t=j.file)||void 0===t||null===(r=t[0])||void 0===r||r.name," btn-primary"))},(null===j||void 0===j||null===(o=j.file)||void 0===o||null===(p=o[0])||void 0===p?void 0:p.name)?null===j||void 0===j||null===(h=j.file)||void 0===h||null===(v=h[0])||void 0===v?void 0:v.name:"Upload Video"),k&&k.file&&i.a.createElement("p",null,"Upload Video is required field"))))),i.a.createElement("div",{className:"mt-3",style:{display:"flex",justifyContent:"center"}},i.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=74.3061a407.chunk.js.map