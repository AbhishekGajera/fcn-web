/*! For license information please see 51.7f2f40ea.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[51],{177:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var r=a(36),n=a(0),l=a(7),c=function(e){var t=Object(l.g)(),a=Object(l.h)(),c=a.search,i=a.pathname,s=new URLSearchParams(c),o=s.get(e),m=Object(n.useState)(null!==o?o:""),d=Object(r.a)(m,2),u=d[0],h=d[1];return[u,function(a){s.set(e,a),t.replace({pathname:i,search:s.toString()}),h(a)}]}},481:function(e,t,a){"use strict";a.r(t);var r=a(49),n=a(36),l=a(0),c=a.n(l),i=a(189),s=a(7),o=a(479),m=(a(388),a(168)),d=a(169),u=a(52),h=a(177);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,l=Object.create(n.prototype),c=new O(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return k()}for(a.method=n,a.arg=l;;){var c=a.delegate;if(c){var i=x(c,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=o(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,c),l}function o(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var m={};function d(){}function u(){}function h(){}var p={};i(p,n,(function(){return this}));var f=Object.getPrototypeOf,E=f&&f(f(L([])));E&&E!==t&&a.call(E,n)&&(p=E);var b=h.prototype=d.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;this._invoke=function(n,l){function c(){return new t((function(r,c){!function r(n,l,c,i){var s=o(e[n],e,l);if("throw"!==s.type){var m=s.arg,d=m.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(d).then((function(e){m.value=e,c(m)}),(function(e){return r("throw",e,c,i)}))}i(s.arg)}(n,l,r,c)}))}return r=r?r.then(c,c):c()}}function x(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=o(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function y(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(y,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:k}}function k(){return{value:void 0,done:!0}}return u.prototype=h,i(b,"constructor",h),i(h,"constructor",u),u.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(N.prototype),i(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var c=new N(s(t,a,r,n),l);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},g(b),i(b,c,"Generator"),i(b,n,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=L,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return c.type="throw",c.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],c=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(i&&s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e,t=Object(s.g)(),a=Object(d.a)(["user"]),p=Object(n.a)(a,2),f=p[0],E=(p[1],Object(l.useState)([])),b=Object(n.a)(E,2),g=b[0],N=b[1],x=Object(l.useState)([]),y=Object(n.a)(x,2),w=y[0],O=y[1],L=Object(l.useState)(!0),k=Object(n.a)(L,2),j=(k[0],k[1]),S=Object(h.a)("page"),C=Object(n.a)(S,2),R=C[0],z=(C[1],Object(l.useState)(10)),P=Object(n.a)(z,1)[0],_=Object(l.useState)(0),T=Object(n.a)(_,2),F=(T[0],T[1]),I=Object(l.useState)({labels:["free-cources","paid-cources","demat","commodities","forex","powerone","SSP","CP","insurance"],datasets:[{label:"# of Votes",data:[10,19,3,5,2,3,11,9,13],backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(153, 102, 255, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 99, 132, 0.2)","rgba(54, 162, 235, 0.2)","rgba(255, 206, 86, 0.2)"],borderColor:["rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)","rgba(75, 192, 192, 1)","rgba(153, 102, 255, 1)","rgba(255, 159, 64, 1)","rgba(255,99,132,1)","rgba(54, 162, 235, 1)","rgba(255, 206, 86, 1)"],borderWidth:1,fill:!1}]}),B=Object(n.a)(I,1)[0],G=function(){var e=Object(r.a)(v().mark((function e(){var t;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,Object(u.T)(P,+R+1);case 4:return e.next=6,e.sent.data;case 6:t=e.sent,N(null===t||void 0===t?void 0:t.results),F(null===t||void 0===t?void 0:t.totalPages),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(1);case 13:j(!1);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(r.a)(v().mark((function e(){var t,a,r;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.prev=1,e.next=4,Object(u.J)(P,+R+1);case 4:return e.next=6,e.sent.data;case 6:t=e.sent,O(null===t||void 0===t?void 0:t.results),F(null===t||void 0===t?void 0:t.totalPages),j(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),401===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.code)&&JSON.stringify({refreshToken:localStorage.getItem("refreshToken")});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){G()}),[R,P]),Object(l.useEffect)((function(){A()}),[R,P]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"mb-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"welcome-text mb-0"},"Welcome , ",c.a.createElement(m.a,null,null===f||void 0===f||null===(e=f.user)||void 0===e?void 0:e.name))))),c.a.createElement("div",{className:"mb-3"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},c.a.createElement("span",{className:"page-title-icon bg-gradient-primary text-white mr-2"},c.a.createElement("i",{className:"mdi mdi-home"}))," ","Dashboard"," "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ul",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},c.a.createElement("span",null),"Overview"," ",c.a.createElement("i",{className:"mdi mdi-alert-circle-outline icon-sm text-primary align-middle"}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 text-white",style:{borderRadius:"8px",padding:"26px 20px",background:"#6A6CFF"}},c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/training/free")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-chalkboard-teacher"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"500+"),c.a.createElement("h6",{className:"card-text"},"Training"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/trading/demat")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-chart-bar"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"45,6334+"),c.a.createElement("h6",{className:"card-text"},"Trading"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/investment/powerone")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-money-bill-wave"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"95,5741+"),c.a.createElement("h6",{className:"card-text"},"Investments"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-building"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Real Estate"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-camera-retro"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Digital Studio"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-money-check-alt"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Loan"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-school"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Foreign Education"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-credit-card"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Visa"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-plane"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"International Tour"))),c.a.createElement("div",{className:"d-flex align-items-center mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"symbol",style:{marginRight:"16px"}},c.a.createElement("div",{className:"symbol-label"},c.a.createElement(o.a,{icon:["fas","fa-plane"],className:"float-right",size:"xl"}))),c.a.createElement("div",{style:{marginLeft:"16px"}},c.a.createElement("h4",null,"1400+"),c.a.createElement("h6",{className:"card-text"},"Air Tickets/Hotel Booking"))))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-plane"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"},"Travels")))))),c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-coins"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"},"Demat Account")))))),c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-money-bill-wave"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"},"Financial Planning")))))),c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-coins"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"},"SIP")))))),c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-heartbeat"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"},"Insurance")))))),c.a.createElement("div",{className:"col-md-4 mb-3",onClick:function(){return t.push("/travel/ourplan")}},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body",style:{padding:"16px",height:"130px",border:"1px solid rgba(0,0,0,.05)",borderRadius:"0.375rem",boxShadow:"0px 0px 13px 0px rgb(35 19 196 / 8%)"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("h4",null,"1400")),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{icon:["fas","fa-credit-card"],className:"float-right",size:"xl"}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("h6",{className:"text-muted card-text"}," Passport")))))))),c.a.createElement("div",null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 grid-margin stretch-card"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("h4",{className:"card-title"},"Courses Completed"),c.a.createElement(i.Bar,{data:B,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]},legend:{display:!1},elements:{point:{radius:0}}}}))))))))))),c.a.createElement("div",{className:"mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{style:{padding:"16px",borderRadius:"0.375rem"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"panel-hdr",style:{borderBottom:"1px solid rgba(0, 0, 0, 0.07)"}},c.a.createElement("h6",null,"Recent Clients")),c.a.createElement("div",{className:"panel-container show p-3"},c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead-light"},c.a.createElement("tr",null,c.a.createElement("th",null," Name "),c.a.createElement("th",null," Contact no. "),c.a.createElement("th",null," Branch "),c.a.createElement("th",null," IBO "),c.a.createElement("th",null," Email "))),c.a.createElement("tbody",null,null===g||void 0===g?void 0:g.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,null===e||void 0===e?void 0:e.name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),c.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),c.a.createElement("td",null,null===e||void 0===e?void 0:e.IBO),c.a.createElement("td",null,null===e||void 0===e?void 0:e.email))}))))))))))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{style:{padding:"16px",borderRadius:"0.375rem"}},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("div",{className:"panel-hdr",style:{borderBottom:"1px solid rgba(0, 0, 0, 0.07)"}},c.a.createElement("h6",null,"Recent Leads")),c.a.createElement("div",{className:"panel-container show p-3"},c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table"},c.a.createElement("thead",{className:"thead-light"},c.a.createElement("tr",null,c.a.createElement("th",null," Name "),c.a.createElement("th",null," Title "),c.a.createElement("th",null," Branch Name "),c.a.createElement("th",null," Email "),c.a.createElement("th",null," Phone "))),c.a.createElement("tbody",null,null===w||void 0===w?void 0:w.map((function(e,t){return c.a.createElement("tr",null,c.a.createElement("td",null,null===e||void 0===e?void 0:e.name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.title),c.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),c.a.createElement("td",null,null===e||void 0===e?void 0:e.email),c.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno))}))))))))))))))}}}]);
//# sourceMappingURL=51.7f2f40ea.chunk.js.map