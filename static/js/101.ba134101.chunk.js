/*! For license information please see 101.ba134101.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[101],{500:function(e,t,r){"use strict";r.r(t);var n=r(49),a=r(36),o=r(0),i=r.n(o),c=r(7),s=r(2),l=r(177),u=r(173),h=r(169),f=r(52),p=r(81),m=r(222),d=r.n(m);function g(){g=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(j){c=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,o=Object.create(a.prototype),i=new N(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return O()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,i),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var u={};function h(){}function f(){}function p(){}var m={};c(m,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(L([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=p.prototype=h.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,h=u.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(h).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(s.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return f.prototype=p,c(y,"constructor",p),c(p,"constructor",f),f.displayName=c(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(w.prototype),c(w.prototype,o,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(s(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(c&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e=Object(c.g)(),t=Object(u.a)({mode:"onChange"}),o=t.register,m=t.handleSubmit,v=t.formState,y=v.errors,b=v.isDirty,w=v.isValid,E=Object(h.a)(["user"]),x=Object(a.a)(E,2)[1],k=function(){var t=Object(n.a)(g().mark((function t(r){var n;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return delete r.terms,t.prev=1,t.next=4,Object(f.M)(r);case 4:(n=t.sent).data.user.auth="verified",x("user",n.data.user,{path:"/"}),localStorage.setItem("accessToken",n.data.tokens.access.token),localStorage.setItem("refreshToken",n.data.tokens.refresh.token),e.push("/dashboard"),p.b.success("login Successfully"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.message?p.b.error(t.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}(),N=function(){var t=Object(n.a)(g().mark((function t(r){var n,a;return g().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=JSON.stringify({token:r.tokenId}),t.prev=1,t.next=4,Object(f.K)(n);case 4:(a=t.sent).data.user.auth="verified",x("user",a.data.user,{path:"/"}),localStorage.setItem("accessToken",a.data.tokens.access.token),localStorage.setItem("refreshToken",a.data.tokens.refresh.token),p.b.success("login sucssefully"),e.push("/dashboard"),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(1),t.t0&&t.t0.response&&t.t0.response.data&&t.t0.response.data.message?p.b.error(t.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com");case 16:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-4 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("img",{src:r(114),alt:"logo"})),i.a.createElement("h4",null,"Hello! let's get started"),i.a.createElement("h6",{className:"font-weight-light"},"Sign in to continue."),i.a.createElement(l.a,{className:"pt-3",onSubmit:m(k)},i.a.createElement(l.a.Group,{className:"d-flex flex-wrap search-field"},i.a.createElement(l.a.Control,Object.assign({type:"email",placeholder:"Email",size:"lg",name:"email",className:"h-auto"},o("email",{required:!0,pattern:/^\S+@\S+$/i})))," ",i.a.createElement("br",null),y&&y.email&&"required"===y.email.type&&i.a.createElement("p",null,"email is required field"),y&&y.email&&"pattern"===y.email.type&&i.a.createElement("p",null,"invalid email formate")),i.a.createElement(l.a.Group,{className:"d-flex flex-wrap search-field"},i.a.createElement(l.a.Control,Object.assign({type:"password",placeholder:"Password",size:"lg",className:"h-auto",name:"password"},o("password",{required:!0})))," ",i.a.createElement("br",null),y&&y.password&&i.a.createElement("p",null,"password is required field")),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",disabled:!b||!w},"SIGN IN")),i.a.createElement("div",{className:"my-2 d-flex justify-content-between align-items-center"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"terms"},o("terms"))),i.a.createElement("i",{className:"input-helper"}),"Keep me signed in")),i.a.createElement(s.b,{to:"/user-pages/forgot-password-1",className:"auth-link text-black"},"Forgot password?")),i.a.createElement("div",{className:"mt-3 mb-3 google-registration-button"},i.a.createElement(d.a,{clientId:"367988835055-0qt4mpc2pdmc6p8e0g4chvgse22sk8gr.apps.googleusercontent.com",buttonText:"Sign in with Google",onSuccess:N,onFailure:function(e){p.b.error(e.error)},cookiePolicy:"single_host_origin"})),i.a.createElement("div",{className:"mb-2"},i.a.createElement("button",{type:"button",className:"btn btn-block btn-facebook auth-form-btn"},i.a.createElement("i",{className:"mdi mdi-facebook mr-2"}),"Connect using facebook")),i.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",i.a.createElement(s.b,{to:"/user-pages/register-1",className:"text-primary"},"Create"))))))))}}}]);
//# sourceMappingURL=101.ba134101.chunk.js.map