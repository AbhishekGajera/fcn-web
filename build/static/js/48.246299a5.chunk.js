/*! For license information please see 48.246299a5.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[48],{176:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(36),a=r(0),o=r(7),i=function(e){var t=Object(o.g)(),r=Object(o.h)(),i=r.search,c=r.pathname,l=new URLSearchParams(i),s=l.get(e),u=Object(a.useState)(null!==s?s:""),d=Object(n.a)(u,2),f=d[0],m=d[1];return[f,function(r){l.set(e,r),t.replace({pathname:c,search:l.toString()}),m(r)}]}},556:function(e,t,r){"use strict";r.r(t);var n=r(49),a=r(36),o=r(0),i=r.n(o),c=r(169),l=r(180),s=r.n(l),u=r(178),d=r(173),f=r(179),m=r(52),h=r(183),p=r.n(h),v=r(82),y=r(176),g=r(81),b=r(7);function E(){E=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var u={};function d(){}function f(){}function m(){}var h={};c(h,a,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(N([])));v&&v!==t&&r.call(v,a)&&(h=v);var y=m.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=s(e[a],e,o);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return f.prototype=m,c(y,"constructor",m),c(m,"constructor",f),f.displayName=c(m,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(b.prototype),c(b.prototype,o,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(o.useState)(0),r=Object(a.a)(t,2),l=r[0],h=r[1],w=Object(y.a)("page"),O=Object(a.a)(w,2),j=O[0],x=O[1],N=Object(o.useState)(10),L=Object(a.a)(N,1)[0],k=i.a.useState(!1),S=Object(a.a)(k,2),D=S[0],T=S[1],_=Object(o.useState)({}),C=Object(a.a)(_,2),P=C[0],B=C[1],G=Object(c.a)(["user"]),V=Object(a.a)(G,2),F=V[0],Y=V[1],A=Object(o.useState)([]),I=Object(a.a)(A,2),J=I[0],U=I[1],R=Object(o.useState)(!0),q=Object(a.a)(R,2),H=q[0],z=q[1],Z=Object(b.g)();Object(o.useEffect)((function(){te()}),[j,L]);var K=Object(d.a)({mode:"onChange"}),M=K.register,Q=K.handleSubmit,W=K.reset,X=K.formState,$=X.errors,ee=(X.isDirty,X.isValid,function(){var e=Object(n.a)(E().mark((function e(t){var r;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.target_id=null===P||void 0===P?void 0:P.id,r=JSON.stringify(t),e.next=5,Object(m.m)(r);case 5:g.b.success("Target updated Successfully",{autoClose:3e3}),te(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?g.b.error(e.t0.response.data.message):g.b.error("There was an internal server error please try again later or contact support@fcn.com");case 12:return e.prev=12,T(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(t){return e.apply(this,arguments)}}()),te=function(){var e=Object(n.a)(E().mark((function e(){var t,r,n,a,o,i;return E().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,e.next=4,Object(m.bb)();case 4:return e.next=6,e.sent.data;case 6:t=e.sent,U(null===t||void 0===t?void 0:t.results),h(null===t||void 0===t?void 0:t.totalPages),z(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?g.b.error(e.t0.response.data.message):g.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.code)&&(i=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),Y("user",null,{path:"/"}),Object(m.mb)(i).finally((function(){Z.push("/user-pages/login-1")})));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(u.a,{show:D,onHide:function(){T(!1),B({}),W()},backdrop:"static",keyboard:!1},i.a.createElement(u.a.Header,{closeButton:!0},i.a.createElement(u.a.Title,null,"Update Target")),i.a.createElement(u.a.Body,null,i.a.createElement("div",{className:"row auth"},i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-sample",onSubmit:Q(ee)},i.a.createElement("p",{className:"card-description"}," Update Target "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(f.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement(f.a.Control,Object.assign({as:"textarea",type:"text",name:"Description",defaultValue:P.Description},M("Description",{required:!0}),{placeholder:"Description"})),$&&$.Description&&i.a.createElement("p",null,"Description is required field"))))),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"})),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Video / Show Video "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===F||void 0===F||null===(e=F.user)||void 0===e?void 0:e.role," Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Show Video")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Video list"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Type "),i.a.createElement("th",null," Title "),i.a.createElement("th",null," Delete "))),i.a.createElement("tbody",null,H?i.a.createElement(i.a.Fragment,null,i.a.createElement(v.a,null)):null===J||void 0===J?void 0:J.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",null,null===e||void 0===e?void 0:e.type),i.a.createElement("td",null,null===e||void 0===e?void 0:e.title),i.a.createElement("td",null,i.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void p.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(m.z)(t).finally((function(){return te()})),p.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===p.a.DismissReason.cancel&&p.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return t=null===e||void 0===e?void 0:e.url,void window.open(t,"_blank");var t}},"Download Video")))})))),i.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){x(e.selected)},pageRangeDisplayed:5,pageCount:l,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:j}))))))}}}]);
//# sourceMappingURL=48.246299a5.chunk.js.map