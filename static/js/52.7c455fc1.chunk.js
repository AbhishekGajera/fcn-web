/*! For license information please see 52.7c455fc1.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[52],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(34),a=r(0),o=r(7),l=function(e){var t=Object(o.g)(),r=Object(o.h)(),l=r.search,i=r.pathname,c=new URLSearchParams(l),s=c.get(e),u=Object(a.useState)(null!==s?s:""),d=Object(n.a)(u,2),m=d[0],f=d[1];return[m,function(r){c.set(e,r),t.replace({pathname:i,search:c.toString()}),f(r)}]}},615:function(e,t,r){"use strict";r.r(t);var n=r(44),a=r(34),o=r(0),l=r.n(o),i=r(174),c=r(167),s=r(76),u=r(171),d=r(175),m=r(46),f=r(7),p=r(163),v=r(77),h=r(178),b=r.n(h);function g(){g=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),l=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return k()}for(r.method=a,r.arg=o;;){var l=r.delegate;if(l){var i=w(l,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,l),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var u={};function d(){}function m(){}function f(){}var p={};i(p,a,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(j([])));h&&h!==t&&r.call(h,a)&&(p=h);var b=f.prototype=d.prototype=Object.create(p);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function l(){return new t((function(n,l){!function n(a,o,l,i){var c=s(e[a],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,l,i)}),(function(e){n("throw",e,l,i)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return n("throw",e,l,i)}))}i(c.arg)}(a,o,n,l)}))}return n=n?n.then(l,l):l()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=f,i(b,"constructor",f),i(f,"constructor",m),m.displayName=i(f,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var l=new E(c(t,r,n,a),o);return e.isGeneratorFunction(r)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},y(b),i(b,l,"Generator"),i(b,a,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return l.type="throw",l.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],l=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,r,h,y,E,w,N=Object(f.g)(),x=Object(p.a)(["user"]),O=Object(a.a)(x,2),j=O[0],k=O[1],L=l.a.useState(!1),S=Object(a.a)(L,2),T=S[0],_=S[1],C=Object(o.useState)(0),G=Object(a.a)(C,2),A=G[0],P=G[1],I=Object(u.a)("page"),D=Object(a.a)(I,2),q=D[0],B=D[1],F=Object(o.useState)(20),V=(Object(a.a)(F,1)[0],Object(o.useState)([])),J=Object(a.a)(V,2),U=J[0],H=J[1],R=Object(o.useState)(!0),Y=Object(a.a)(R,2),Z=Y[0],z=Y[1];Object(o.useEffect)((function(){var e=setTimeout((function(){K()}),5e3);return function(){return clearTimeout(e)}}),[]);var K=function(){var e=Object(n.a)(g().mark((function e(){var t,r,n,a,o,l,i,c,u,d,f,p;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(!0),e.prev=1,"admin"!==(null===j||void 0===j||null===(t=j.user)||void 0===t?void 0:t.role)){e.next=10;break}return e.next=5,Object(m.U)();case 5:return e.next=7,e.sent.data;case 7:i=e.sent,e.next=32;break;case 10:if("IBO"!==(null===j||void 0===j||null===(r=j.user)||void 0===r?void 0:r.role)){e.next=18;break}return e.next=13,Object(m.V)(1,"ibo");case 13:return e.next=15,e.sent.data;case 15:i=e.sent,e.next=32;break;case 18:if("branch"!==(null===j||void 0===j||null===(n=j.user)||void 0===n?void 0:n.role)){e.next=26;break}return e.next=21,Object(m.V)(1,"branch");case 21:return e.next=23,e.sent.data;case 23:i=e.sent,e.next=32;break;case 26:if("user"!==(null===j||void 0===j||null===(a=j.user)||void 0===a?void 0:a.role)){e.next=32;break}return e.next=29,Object(m.V)(1,"client");case 29:return e.next=31,e.sent.data;case 31:i=e.sent;case 32:H(null===(o=i)||void 0===o?void 0:o.results),P(null===(l=i)||void 0===l?void 0:l.totalPages),e.next=40;break;case 36:e.prev=36,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(u=c.data)||void 0===u?void 0:u.message)?s.b.error(e.t0.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(f=d.data)||void 0===f?void 0:f.code)&&(p=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),k("user",null,{path:"/"}),Object(m.Db)(p).finally((function(){N.push("/user-pages/login-1")})));case 40:z(!1);case 41:case"end":return e.stop()}}),e,null,[[1,36]])})));return function(){return e.apply(this,arguments)}}(),M=Object(c.a)({mode:"onChange"}),Q=M.register,W=M.handleSubmit,X=M.formState,$=X.errors,ee=(X.isDirty,X.isValid,(0,M.getValues)()),te=function(){var e=Object(n.a)(g().mark((function e(t){var r,n,a;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!1),(r=new FormData).append("file",t.file[0]),e.next=5,Object(m.i)(r);case 5:if(!(n=e.sent).error){e.next=10;break}s.b.error(n.error.message),e.next=26;break;case 10:return e.prev=10,delete t.file,t.attachment=n.secure_url,t.user=null===j||void 0===j||null===(a=j.user)||void 0===a?void 0:a.id,t.type="all",t.status=1,e.next=18,Object(m.p)(t);case 18:e.sent,s.b.success("Notification Added successfully"),K(),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(10),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?s.b.error(e.t0.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com");case 26:case"end":return e.stop()}}),e,null,[[10,23]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(i.a,{show:T,onHide:function(){_(!1)},backdrop:"static",keyboard:!1},l.a.createElement(i.a.Header,{closeButton:!0},l.a.createElement(i.a.Title,null,"Send Notification")),l.a.createElement(i.a.Body,null,l.a.createElement("div",{className:"row auth"},l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-sample",onSubmit:W(te)},l.a.createElement("p",{className:"card-description"}," Send Notification "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(d.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Title"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(d.a.Control,Object.assign({type:"text",name:"title"},Q("title",{required:!0}))),$&&$.title&&l.a.createElement("p",null,"Title is required field"))),l.a.createElement(d.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select targetAudience"," "),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement("select",Object.assign({name:"targetAudience",className:"form-control form-control-lg"},Q("targetAudience",{required:!0})),l.a.createElement("option",{value:"all"},"All"),l.a.createElement("option",{value:"branch"},"Branch"),l.a.createElement("option",{value:"ibo"},"IBO"),l.a.createElement("option",{value:"client"},"Client")))),l.a.createElement(d.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"," "),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement(d.a.Control,Object.assign({type:"text",name:"content"},Q("content",{required:!0}))),$&&$.content&&l.a.createElement("p",null,"Content is required field"))),l.a.createElement(d.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-4 col-form-label"},"Notification Image"," "),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement(d.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"file",multiple:!1},Q("file",{required:!0}))),l.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===ee||void 0===ee||null===(e=ee.file)||void 0===e||null===(t=e[0])||void 0===t||t.name," btn-primary"))},(null===ee||void 0===ee||null===(r=ee.file)||void 0===r||null===(h=r[0])||void 0===h?void 0:h.name)?null===ee||void 0===ee||null===(y=ee.file)||void 0===y||null===(E=y[0])||void 0===E?void 0:E.name:"Upload Image"),$&&$.file&&l.a.createElement("p",null,"Notification image is required field"))))),l.a.createElement("div",{className:"mt-3"},l.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Send"))))))))),l.a.createElement("div",{className:"page-header"},l.a.createElement("h3",{className:"page-title"},"Notification / All "),l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Dashboard")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"All")))),l.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row",style:{marginBottom:"14px"}},l.a.createElement("div",{className:"col-md-3"},"admin"===(null===j||void 0===j||null===(w=j.user)||void 0===w?void 0:w.role)&&l.a.createElement("button",{className:"btn btn-gradient-primary btn-lg",type:"button",onClick:function(){return _(!0)}},"Send Notification")),l.a.createElement("div",{className:"col-md-9"})),l.a.createElement("h4",{className:"card-title"},"Notification list"),l.a.createElement("div",{className:"table-responsive"},l.a.createElement("table",{className:"table table-striped"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Title "),l.a.createElement("th",null," content "),l.a.createElement("th",null," Type "),l.a.createElement("th",null," Target Audience "))),l.a.createElement("tbody",null,Z?l.a.createElement(v.a,null):null===U||void 0===U?void 0:U.map((function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,null===e||void 0===e?void 0:e.title),l.a.createElement("td",null,null===e||void 0===e?void 0:e.content),l.a.createElement("td",null,null===e||void 0===e?void 0:e.type),l.a.createElement("td",null,null===e||void 0===e?void 0:e.targetAudience))})))),l.a.createElement(b.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){B(e.selected)},pageRangeDisplayed:5,pageCount:A,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:q}))))))}}}]);
//# sourceMappingURL=52.7c455fc1.chunk.js.map