/*! For license information please see 78.9de67b26.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[78],{470:function(e,a,t){"use strict";t.r(a);var r=t(13),c=t(18),l=t(0),n=t.n(l),s=t(90),m=t(51),o=t(169);function i(){i=function(){return e};var e={},a=Object.prototype,t=a.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},c=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function s(e,a,t){return Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[a]}try{s({},"")}catch(q){s=function(e,a,t){return e[a]=t}}function m(e,a,t,r){var c=a&&a.prototype instanceof d?a:d,l=Object.create(c.prototype),n=new x(r||[]);return l._invoke=function(e,a,t){var r="suspendedStart";return function(c,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===c)throw l;return j()}for(t.method=c,t.arg=l;;){var n=t.delegate;if(n){var s=k(n,t);if(s){if(s===u)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var m=o(e,a,t);if("normal"===m.type){if(r=t.done?"completed":"suspendedYield",m.arg===u)continue;return{value:m.arg,done:t.done}}"throw"===m.type&&(r="completed",t.method="throw",t.arg=m.arg)}}}(e,t,n),l}function o(e,a,t){try{return{type:"normal",arg:e.call(a,t)}}catch(q){return{type:"throw",arg:q}}}e.wrap=m;var u={};function d(){}function h(){}function p(){}var f={};s(f,c,(function(){return this}));var E=Object.getPrototypeOf,N=E&&E(E(O([])));N&&N!==a&&t.call(N,c)&&(f=N);var b=p.prototype=d.prototype=Object.create(f);function v(e){["next","throw","return"].forEach((function(a){s(e,a,(function(e){return this._invoke(a,e)}))}))}function y(e,a){var r;this._invoke=function(c,l){function n(){return new a((function(r,n){!function r(c,l,n,s){var m=o(e[c],e,l);if("throw"!==m.type){var i=m.arg,u=i.value;return u&&"object"==typeof u&&t.call(u,"__await")?a.resolve(u.__await).then((function(e){r("next",e,n,s)}),(function(e){r("throw",e,n,s)})):a.resolve(u).then((function(e){i.value=e,n(i)}),(function(e){return r("throw",e,n,s)}))}s(m.arg)}(c,l,r,n)}))}return r=r?r.then(n,n):n()}}function k(e,a){var t=e.iterator[a.method];if(void 0===t){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=void 0,k(e,a),"throw"===a.method))return u;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=o(t,e.iterator,a.arg);if("throw"===r.type)return a.method="throw",a.arg=r.arg,a.delegate=null,u;var c=r.arg;return c?c.done?(a[e.resultName]=c.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,u):c:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,u)}function g(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function w(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function O(e){if(e){var a=e[c];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function a(){for(;++r<e.length;)if(t.call(e,r))return a.value=e[r],a.done=!1,a;return a.value=void 0,a.done=!0,a};return l.next=l}}return{next:j}}function j(){return{value:void 0,done:!0}}return h.prototype=p,s(b,"constructor",p),s(p,"constructor",h),h.displayName=s(p,n,"GeneratorFunction"),e.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===h||"GeneratorFunction"===(a.displayName||a.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,n,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},v(y.prototype),s(y.prototype,l,(function(){return this})),e.AsyncIterator=y,e.async=function(a,t,r,c,l){void 0===l&&(l=Promise);var n=new y(m(a,t,r,c),l);return e.isGeneratorFunction(t)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},v(b),s(b,n,"Generator"),s(b,c,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var a=[];for(var t in e)a.push(t);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var a in this)"t"===a.charAt(0)&&t.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function r(t,r){return n.type="throw",n.arg=e,a.next=t,r&&(a.method="next",a.arg=void 0),!!r}for(var c=this.tryEntries.length-1;c>=0;--c){var l=this.tryEntries[c],n=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var s=t.call(l,"catchLoc"),m=t.call(l,"finallyLoc");if(s&&m){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!m)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,a){for(var r=this.tryEntries.length-1;r>=0;--r){var c=this.tryEntries[r];if(c.tryLoc<=this.prev&&t.call(c,"finallyLoc")&&this.prev<c.finallyLoc){var l=c;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=a&&a<=l.finallyLoc&&(l=null);var n=l?l.completion:{};return n.type=e,n.arg=a,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(n)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),u},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),w(t),u}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var c=r.arg;w(t)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:O(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=void 0),u}},e}a.default=function(){var e,a,t=Object(o.a)(["user"]),l=Object(c.a)(t,2),u=l[0],d=(l[1],Object(s.a)({mode:"onChange"})),h=d.register,p=d.handleSubmit,f=d.formState,E=f.errors,N=(f.isDirty,f.isValid,function(){var e=Object(r.a)(i().mark((function e(a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("hi");case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());return n.a.createElement("div",null,n.a.createElement("div",{className:"page-header"},n.a.createElement("h3",{className:"page-title"},"Opening Form / Colleteral Plan "),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Invesment")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Colleteral Plan")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 grid-margin"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"text-right"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-right"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select City"),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("select",{className:"form-control"},n.a.createElement("option",null,"Surat"),n.a.createElement("option",null,"Baroda"),n.a.createElement("option",null,"Vapi"),n.a.createElement("option",null,"Ahmedabad"))))))),n.a.createElement("h4",{className:"card-title"},"Colleteral Plan"),n.a.createElement("form",{className:"form-sample",onSubmit:p(N)},n.a.createElement("p",{className:"card-description"}," Personal info "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement(m.a.Control,Object.assign({type:"text",name:"name",placeholder:"Enter Your Name"},h("name",{required:!0}))),E&&E.name&&n.a.createElement("p",null,"name is required field"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement(m.a.Control,Object.assign({type:"text",name:"address",placeholder:"Enter Your Address"},h("address",{required:!0}))),E&&E.address&&n.a.createElement("p",null,"address is required field"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Mobile"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(m.a.Control,Object.assign({type:"text",name:"mobile",defaultValue:null===u||void 0===u||null===(e=u.user)||void 0===e?void 0:e.contactno},h("mobile",{required:!0})))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Branch"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(m.a.Control,Object.assign({type:"text",name:"branch"},h("branch",{required:!0}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(m.a.Control,Object.assign({type:"text",name:"email",defaultValue:null===u||void 0===u||null===(a=u.user)||void 0===a?void 0:a.email},h("email",{required:!0}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3  col-form-label"},"KYC"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"pancard"},h("pancard",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Pan card"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"adhaarcard"},h("adhaarcard",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Adhaar card"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"bankpassbook"},h("bankpassbook",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Bank Passbook"))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:""},n.a.createElement("label",{className:"label"},n.a.createElement("input",Object.assign({type:"file",className:"input",name:"file",multiple:!0},h("file",{required:!0}))),E&&E.file&&n.a.createElement("p",null," file is required field")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Mobile Type"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"android"},h("android",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Android"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"iphone"},h("iphone",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"IPhone")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Occupation"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"student"},h("student",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Student"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"business"},h("android",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Business"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"job"},h("job",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Job")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Occupation"),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"stock"},h("stock",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Stock"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"currency"},h("currency",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Currency"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"comodity"},h("comodity",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Comodity"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"diamond"},h("diamond",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Diamond")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Completed Any Course?"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"yes"},h("yes",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Yes"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"no"},h("no",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"No")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Reference"),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"facebook"},h("facebook",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Facebook"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"whatsapp"},h("whatsapp",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Whatsapp"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"handbill"},h("handbill",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Handbill"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"call"},h("call",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Call")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(m.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Batch Time"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"batch7"},h("batch7",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"7 to 8"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"batch2"},h("batch2",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"8 to 9")))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=78.9de67b26.chunk.js.map