/*! For license information please see 87.2f053bfd.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[87],{470:function(e,t,r){"use strict";r.r(t);var a=r(13),n=r(0),o=r.n(n),l=r(51),c=r(90);function i(){i=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function s(e,t,r,a){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),l=new L(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var l=r.delegate;if(l){var c=g(l,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var i=m(e,t,r);if("normal"===i.type){if(a=r.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(a="completed",r.method="throw",r.arg=i.arg)}}}(e,r,l),o}function m(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var u={};function d(){}function f(){}function h(){}var p={};c(p,n,(function(){return this}));var v=Object.getPrototypeOf,E=v&&v(v(O([])));E&&E!==t&&r.call(E,n)&&(p=E);var y=h.prototype=d.prototype=Object.create(p);function N(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var a;this._invoke=function(n,o){function l(){return new t((function(a,l){!function a(n,o,l,c){var i=m(e[n],e,o);if("throw"!==i.type){var s=i.arg,u=s.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,l,c)}),(function(e){a("throw",e,l,c)})):t.resolve(u).then((function(e){s.value=e,l(s)}),(function(e){return a("throw",e,l,c)}))}c(i.arg)}(n,o,a,l)}))}return a=a?a.then(l,l):l()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=m(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=h,c(y,"constructor",h),c(h,"constructor",f),f.displayName=c(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,c(e,l,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},N(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var l=new b(s(t,r,a,n),o);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},N(y),c(y,l,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=O,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return l.type="throw",l.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],l=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(c&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:O(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e=Object(c.a)({mode:"onChange"}),t=e.register,r=e.handleSubmit,n=e.formState,s=n.errors,m=(n.isDirty,n.isValid,function(){var e=Object(a.a)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("hi");case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"}," Passport Form  "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Travel")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Passport")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Passport Form"),o.a.createElement("form",{className:"form-sample",onSubmit:r(m)},o.a.createElement("p",{className:"card-description"}," Applicant Details "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Applicant's Given Name "),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"name",placeholder:"Enter Your Name"},t("name",{required:!0}))),s&&s.name&&o.a.createElement("p",{style:{color:"red"}},"name is required field")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Surname"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"surname",placeholder:"Enter Your surname"},t("surname",{required:!0}))),s&&s.surname&&o.a.createElement("p",{style:{color:"red"}},"surname is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"exampleFormControlSelect1"},"Gender"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-lg",id:"exampleFormControlSelect1"},o.a.createElement("option",null,"Male"),o.a.createElement("option",null,"Female"),o.a.createElement("option",null,"Transgender")))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"exampleFormControlSelect1"},"Date Of Birth"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"dob",placeholder:"Enter Your dob"},t("dob",{required:!0}))),s&&s.dob&&o.a.createElement("p",{style:{color:"red"}},"Date of birth is required field"))))),o.a.createElement("p",{className:"card-description"},"Place Of Birth "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-6 col-form-label"},"Is Your Place of Birth out of India? *"),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios1",defaultChecked:!0})," Yes",o.a.createElement("i",{className:"input-helper"})))),o.a.createElement("div",{className:"col-sm-3"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label"},o.a.createElement("input",{type:"radio",className:"form-check-input",name:"ExampleRadio4",id:"membershipRadios2"})," No",o.a.createElement("i",{className:"input-helper"}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"City"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"city",placeholder:"Enter Your city"},t("city",{required:!0}))),s&&s.city&&o.a.createElement("p",{style:{color:"red"}},"city is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"PAN Number"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"pan",placeholder:"Enter Your pan"},t("pan",{required:!0}))),s&&s.pan&&o.a.createElement("p",{style:{color:"red"}},"PAN is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Voter ID Number"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"voter",placeholder:"Enter Your Voter ID"},t("voter",{required:!0}))),s&&s.voter&&o.a.createElement("p",{style:{color:"red"}},"voter id is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=87.2f053bfd.chunk.js.map