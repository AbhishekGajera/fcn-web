/*! For license information please see 98.4db85c45.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[98],{592:function(e,t,r){"use strict";r.r(t);var a=r(12),n=r(10),o=r(0),c=r.n(o),l=r(190),i=r(192),s=r(98),m=r(11),u=r(33),d=r(15),f=r(68),h=r.n(f);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function i(e,t,r,a){var n=t&&t.prototype instanceof u?t:u,o=Object.create(n.prototype),c=new O(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return j()}for(r.method=n,r.arg=o;;){var c=r.delegate;if(c){var l=N(c,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var i=s(e,t,r);if("normal"===i.type){if(a=r.done?"completed":"suspendedYield",i.arg===m)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(a="completed",r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=i;var m={};function u(){}function d(){}function f(){}var h={};l(h,n,(function(){return this}));var v=Object.getPrototypeOf,E=v&&v(v(L([])));E&&E!==t&&r.call(E,n)&&(h=E);var y=f.prototype=u.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var a;this._invoke=function(n,o){function c(){return new t((function(a,c){!function a(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var m=i.arg,u=m.value;return u&&"object"==typeof u&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,c,l)}),(function(e){a("throw",e,c,l)})):t.resolve(u).then((function(e){m.value=e,c(m)}),(function(e){return a("throw",e,c,l)}))}l(i.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}}function N(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,m;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=f,l(y,"constructor",f),l(f,"constructor",d),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),l(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var c=new g(i(t,r,a,n),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),l(y,c,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return c.type="throw",c.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;x(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e=Object(i.a)(["user"]),t=Object(n.a)(e,2),r=(t[0],t[1],Object(m.g)()),o=Object(s.a)({mode:"onChange"}),f=o.register,v=o.handleSubmit,E=o.formState,y=E.errors,b=(E.isDirty,E.isValid,function(){var e=Object(a.a)(p().mark((function e(t){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.z)(t);case 3:e.sent,u.b.success("Visa Added successfully"),r.push("/travel/visalist"),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.info("error ",e.t0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}());return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"}," Visa Form "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Travel")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Visa")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Visa Form"),c.a.createElement("form",{className:"form-sample",onSubmit:v(b)},c.a.createElement("p",{className:"card-description"}," Applicant Details "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Applicant's Given Name "),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(l.a.Control,Object.assign({type:"text",name:"name",placeholder:"Enter Your Name"},f("name",{required:!0}))),y&&y.name&&c.a.createElement("p",{style:{color:"red"}},"name is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Surname"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(l.a.Control,Object.assign({type:"text",name:"surname",placeholder:"Enter Your surname"},f("surname",{required:!0}))),y&&y.surname&&c.a.createElement("p",{style:{color:"red"}},"surname is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"exampleFormControlSelect1"},"Gender"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",name:"gender"},f("gender",{required:!0}),{id:"exampleFormControlSelect1"}),c.a.createElement("option",{value:"Male"},"Male"),c.a.createElement("option",{value:"Female"},"Female"),c.a.createElement("option",{value:"Transgender"},"Transgender")))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label",htmlFor:"exampleFormControlSelect1"},"Date Of Birth"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(l.a.Control,Object.assign({type:"date",name:"dob",placeholder:"Enter Your dob",max:h()().format("YYYY-MM-DD")},f("dob",{required:!0}))),y&&y.dob&&c.a.createElement("p",{style:{color:"red"}},"Date of birth is required field"))))),c.a.createElement("p",{className:"card-description"},"Place Of Birth "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-8"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-6 col-form-label"},"Is Your Place of Birth out of India? *"),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",Object.assign({type:"radio",className:"form-check-input",name:"isOutIndiaBirth"},f("isOutIndiaBirth",{required:!1}),{value:"yes",id:"membershipRadios1",defaultChecked:!0}))," Yes",c.a.createElement("i",{className:"input-helper"})))),c.a.createElement("div",{className:"col-sm-3"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label"},c.a.createElement("input",Object.assign({type:"radio",className:"form-check-input",name:"isOutIndiaBirth"},f("isOutIndiaBirth",{required:!1}),{value:"no",id:"membershipRadios2"}))," No",c.a.createElement("i",{className:"input-helper"}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-5 col-form-label"},"City"),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement(l.a.Control,Object.assign({type:"text",name:"city",placeholder:"Enter Your city"},f("city",{required:!0}))),y&&y.city&&c.a.createElement("p",{style:{color:"red"}},"City is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-5 col-form-label"},"PAN Number"),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement(l.a.Control,Object.assign({type:"text",name:"pan",placeholder:"Enter Your PanNumber"},f("pan",{required:!0}))),y&&y.pan&&c.a.createElement("p",{style:{color:"red"}},"PAN Number is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement(l.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-5 col-form-label"},"Voter ID Number"),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement(l.a.Control,Object.assign({type:"text",name:"voter",placeholder:"Enter Your Voter ID"},f("voter",{required:!0}))),y&&y.voter&&c.a.createElement("p",{style:{color:"red"}},"voter id is required field"))))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=98.4db85c45.chunk.js.map