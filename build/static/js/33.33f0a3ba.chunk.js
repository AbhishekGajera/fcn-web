/*! For license information please see 33.33f0a3ba.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[33],{171:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(34),a=r(0),o=r(7),i=function(e){var t=Object(o.g)(),r=Object(o.h)(),i=r.search,c=r.pathname,l=new URLSearchParams(i),u=l.get(e),s=Object(a.useState)(null!==u?u:""),d=Object(n.a)(s,2),h=d[0],f=d[1];return[h,function(r){l.set(e,r),t.replace({pathname:c,search:l.toString()}),f(r)}]}},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(34),a=r(0),o=function(e,t){var r=Object(a.useState)(e),o=Object(n.a)(r,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){var r=setTimeout((function(){c(e)}),t);return function(){clearTimeout(r)}}),[e,t]),i}},586:function(e,t,r){"use strict";r.r(t);var n=r(44),a=r(34),o=r(0),i=r.n(o),c=r(163),l=r(178),u=r.n(l),s=r(46),d=r(482),h=r(486),f=r(487),m=r(76),p=r(7),v=r(167),y=r(171),b=r(173),g=r(77),E=r(192),w=r.n(E);function x(){x=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=l;var s={};function d(){}function h(){}function f(){}var m={};c(m,a,(function(){return this}));var p=Object.getPrototypeOf,v=p&&p(p(N([])));v&&v!==t&&r.call(v,a)&&(m=v);var y=f.prototype=d.prototype=Object.create(m);function b(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,c)}),(function(e){n("throw",e,i,c)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function N(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=f,c(y,"constructor",f),c(f,"constructor",h),h.displayName=c(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(g.prototype),c(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new g(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:N(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(p.g)(),r=Object(c.a)(["user"]),l=Object(a.a)(r,2),E=l[0],O=l[1],j=Object(o.useState)([]),N=Object(a.a)(j,2),L=N[0],k=N[1],S=Object(o.useState)(""),_=Object(a.a)(S,2),C=_[0],T=_[1],P=Object(b.a)(C,500),D=Object(v.a)({mode:"onChange"}).formState,F=(D.errors,D.isDirty,D.isValid,Object(o.useState)(0)),G=Object(a.a)(F,2),Y=G[0],I=G[1],M=Object(y.a)("page"),R=Object(a.a)(M,2),A=R[0],B=R[1],J=Object(o.useState)(20),U=Object(a.a)(J,1)[0],V=Object(o.useState)(!0),Z=Object(a.a)(V,2),q=Z[0],z=Z[1];Object(o.useEffect)((function(){H()}),[A,U,P]);var H=function(){var e=Object(n.a)(x().mark((function e(){var r,n,a,o,i,c,l,u,d,h,f;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(z(!0),e.prev=1,"branch"!==(null===E||void 0===E||null===(r=E.user)||void 0===r?void 0:r.role)){e.next=8;break}return e.next=5,Object(s.M)(U,+A+1,C,null===E||void 0===E||null===(c=E.user)||void 0===c?void 0:c.name);case 5:return e.next=7,e.sent.data;case 7:i=e.sent;case 8:if("admin"!==(null===E||void 0===E||null===(n=E.user)||void 0===n?void 0:n.role)){e.next=14;break}return e.next=11,Object(s.L)(U,+A+1,C);case 11:return e.next=13,e.sent.data;case 13:i=e.sent;case 14:k(null===(a=i)||void 0===a?void 0:a.results),I(null===(o=i)||void 0===o?void 0:o.totalPages),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(u=l.data)||void 0===u?void 0:u.message)?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d||null===(h=d.data)||void 0===h?void 0:h.code)&&(f=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(s.Db)(f).finally((function(){t.push("/user-pages/login-1")})));case 22:z(!1);case 23:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}(),K={data:L,headers:[{label:"Name",key:"name"},{label:"Contact no",key:"contactno"},{label:"Branch",key:"branch"},{label:"Date",key:"date"},{label:"Type",key:"type"}],filename:"Clue_Mediator_Report.csv"};return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Contacted clients / Fetch Clients "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===E||void 0===E||null===(e=E.user)||void 0===e?void 0:e.role," Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"fetch clients")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-4"},i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm "},i.a.createElement(d.CSVLink,Object.assign({},K,{className:"text-white"}),"Export to CSV"))),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return function(e){var t={Sheets:{data:f.a.json_to_sheet(L)},SheetNames:["data"]},r=f.b(t,{bookType:"xlsx",type:"array"}),n=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});h.saveAs(n,e+".xlsx")}("test")}},"Download Excel")),i.a.createElement("div",{className:"col-md-4"},i.a.createElement("div",{className:"search-field d-none d-md-block"},i.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},i.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),i.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Clients",value:C,onChange:function(e){var t;T(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),B(0)}})))))),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Name "),i.a.createElement("th",null," Contact no. "),i.a.createElement("th",null," Branch "),i.a.createElement("th",null," Date "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Convert "))),i.a.createElement("tbody",null,q?i.a.createElement(g.a,null):null===L||void 0===L?void 0:L.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,null===e||void 0===e?void 0:e.name),i.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),i.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),i.a.createElement("td",null,w()(null===e||void 0===e?void 0:e.fromDate).format("DD-MM-YYYY")),i.a.createElement("td",null,1===(null===e||void 0===e?void 0:e.type)?"Free":"Paid"),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){var r;r=null===e||void 0===e?void 0:e.id,t.push({pathname:"/clients/createclient",search:"?"+new URLSearchParams({id:r}).toString()})}},"Convert")))})))),i.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),B(e.selected)},pageRangeDisplayed:5,pageCount:Y,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:A}))))))}}}]);
//# sourceMappingURL=33.33f0a3ba.chunk.js.map