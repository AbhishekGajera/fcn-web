/*! For license information please see 68.ea979c6c.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[68],{540:function(e,t,r){"use strict";r.r(t);var n=r(49),a=r(36),o=r(0),i=r.n(o),c=r(178),l=r(173),s=r(179),u=r(169);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),i=new L(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return j()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function f(){}function d(){}function h(){}var p={};c(p,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(O([])));y&&y!==t&&r.call(y,a)&&(p=y);var g=h.prototype=f.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(m).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=h,c(g,"constructor",h),c(h,"constructor",d),d.displayName=c(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,i,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(g),c(g,i,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,r,o,f,d,h=Object(u.a)(["user"]),p=Object(a.a)(h,2),v=(p[0],p[1],i.a.useState(!1)),y=Object(a.a)(v,2),g=y[0],E=y[1],b=Object(l.a)({mode:"onChange"}),w=b.register,N=b.handleSubmit,x=b.formState,L=x.errors,O=(x.isDirty,x.isValid,(0,b.getValues)()),j=function(){var e=Object(n.a)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("data",t),E(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(c.a,{show:g,onHide:function(){E(!1)},backdrop:"static",keyboard:!1},i.a.createElement(c.a.Header,{closeButton:!0},i.a.createElement(c.a.Title,null,"Send Notification")),i.a.createElement(c.a.Body,null,i.a.createElement("div",{className:"row auth"},i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-sample",onSubmit:N(j)},i.a.createElement("p",{className:"card-description"}," Send Notification "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(s.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Title"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement(s.a.Control,Object.assign({type:"text",name:"title"},w("title",{required:!0}))),L&&L.title&&i.a.createElement("p",null,"Title is required field"))),i.a.createElement(s.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(s.a.Control,Object.assign({type:"text",name:"description"},w("description",{required:!0}))),L&&L.description&&i.a.createElement("p",null,"Description is required field"))),i.a.createElement(s.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-4 col-form-label"},"Upload Image"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(s.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"file",multiple:!1},w("file",{required:!0}))),i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===O||void 0===O||null===(e=O.file)||void 0===e||null===(t=e[0])||void 0===t||t.name," btn-primary"))},(null===O||void 0===O||null===(r=O.file)||void 0===r||null===(o=r[0])||void 0===o?void 0:o.name)?null===O||void 0===O||null===(f=O.file)||void 0===f||null===(d=f[0])||void 0===d?void 0:d.name:"Upload Image"),L&&L.file&&i.a.createElement("p",null,"Upload image is required field"))))),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Send"))))))))),i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Notification / Branch "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Branch")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row",style:{marginBottom:"14px"}},i.a.createElement("div",{className:"col-md-3"},i.a.createElement("button",{className:"btn btn-gradient-primary btn-lg",type:"button",onClick:function(){return E(!0)}},"Send Notification")),i.a.createElement("div",{className:"col-md-9"})),i.a.createElement("h4",{className:"card-title"},"Receiver list"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Name "),i.a.createElement("th",null," Title "),i.a.createElement("th",null," Description "),i.a.createElement("th",null," Delete "))),i.a.createElement("tbody",null)))))))}}}]);
//# sourceMappingURL=68.ea979c6c.chunk.js.map