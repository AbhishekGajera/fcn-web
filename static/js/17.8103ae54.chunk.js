/*! For license information please see 17.8103ae54.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[17],{172:function(e,t,r){"use strict";r.d(t,"g",(function(){return n})),r.d(t,"e",(function(){return a})),r.d(t,"f",(function(){return l})),r.d(t,"h",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return s}));var n=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],a=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],o=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],i=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],c=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],u=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},s=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},176:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(34),a=r(0),l=function(e,t){var r=Object(a.useState)(e),l=Object(n.a)(r,2),o=l[0],i=l[1];return Object(a.useEffect)((function(){var r=setTimeout((function(){i(e)}),t);return function(){clearTimeout(r)}}),[e,t]),o}},185:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(34),a=r(0),l=r(7),o=function(e){var t=Object(l.g)(),r=Object(l.h)(),o=r.search,i=r.pathname,c=new URLSearchParams(o),u=c.get(e),s=Object(a.useState)(null!==u?u:""),d=Object(n.a)(s,2),f=d[0],v=d[1];return[f,function(r){c.set(e,r),t.replace({pathname:i,search:c.toString()}),v(r)}]}},492:function(e,t,r){"use strict";r.r(t);var n=r(45),a=r(34),l=r(0),o=r.n(l),i=r(163),c=r(177),u=r.n(c),s=r(47),d=r(179),f=r.n(d),v=r(176),h=r(77),m=r(185),p=r(76),b=r(7),g=r(172);function y(){y=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(N){i=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,l=Object.create(a.prototype),o=new j(n||[]);return l._invoke=function(e,t,r){var n="suspendedStart";return function(a,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw l;return D()}for(r.method=a,r.arg=l;;){var o=r.delegate;if(o){var i=w(o,r);if(i){if(i===s)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,o),l}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=c;var s={};function d(){}function f(){}function v(){}var h={};i(h,a,(function(){return this}));var m=Object.getPrototypeOf,p=m&&m(m(L([])));p&&p!==t&&r.call(p,a)&&(h=p);var b=v.prototype=d.prototype=Object.create(h);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,l){function o(){return new t((function(n,o){!function n(a,l,o,i){var c=u(e[a],e,l);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,o,i)}),(function(e){n("throw",e,o,i)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,i)}))}i(c.arg)}(a,l,n,o)}))}return n=n?n.then(o,o):o()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:D}}function D(){return{value:void 0,done:!0}}return f.prototype=v,i(b,"constructor",v),i(v,"constructor",f),f.displayName=i(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,i(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(E.prototype),i(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,l){void 0===l&&(l=Promise);var o=new E(c(t,r,n,a),l);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(b),i(b,o,"Generator"),i(b,a,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var i=r.call(l,"catchLoc"),c=r.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(l.useState)(""),r=Object(a.a)(t,2),c=r[0],d=r[1],E=Object(v.a)(c,500),w=Object(l.useState)(0),O=Object(a.a)(w,2),x=O[0],j=O[1],L=Object(m.a)("page"),D=Object(a.a)(L,2),N=D[0],S=D[1],T=Object(l.useState)(10),k=Object(a.a)(T,1)[0],B=Object(i.a)(["user"]),P=Object(a.a)(B,2),I=P[0],_=P[1],C=Object(l.useState)([]),A=Object(a.a)(C,2),F=A[0],G=A[1],R=Object(l.useState)(!0),Y=Object(a.a)(R,2),M=Y[0],U=Y[1],J=Object(b.g)();Object(l.useEffect)((function(){z()}),[N,k,E]);var z=function(){var e=Object(n.a)(y().mark((function e(){var t,r,n,a,l,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return U(!0),e.prev=1,e.next=4,Object(s.r)(k,+N+1,c);case 4:return e.next=6,e.sent.data;case 6:t=e.sent,G(null===t||void 0===t?void 0:t.results),j(null===t||void 0===t?void 0:t.totalPages),U(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?p.b.error(e.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),_("user",null,{path:"/"}),Object(s.A)(o).finally((function(){J.push("/user-pages/login-1")})));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Targets / Fetch Targets "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===I||void 0===I||null===(e=I.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch Targets")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"}),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"search-field d-none d-md-block"},o.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},o.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),o.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Products",value:c,onChange:function(e){var t;d(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),S(0)}})))))),o.a.createElement("h4",{className:"card-title"},"Targets list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Id "),o.a.createElement("th",null," Product "),o.a.createElement("th",null," Quantity "),o.a.createElement("th",null," User Type "),o.a.createElement("th",null," User "),o.a.createElement("th",null," Description "),o.a.createElement("th",null," Status "))),o.a.createElement("tbody",null,M?o.a.createElement(o.a.Fragment,null,o.a.createElement(h.a,null)):null===F||void 0===F?void 0:F.map((function(e,t){var r,n;return o.a.createElement("tr",{key:t},o.a.createElement("td",null,t+1),o.a.createElement("td",null,null===e||void 0===e||null===(r=e.product)||void 0===r?void 0:r.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.qty),o.a.createElement("td",null,null===e||void 0===e?void 0:e.userType),o.a.createElement("td",null,null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.Description),o.a.createElement("td",null,Object(g.b)(null===e||void 0===e?void 0:e.status)),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void f.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(s.j)(t).finally((function(){return z()})),f.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===f.a.DismissReason.cancel&&f.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})))})))),o.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){S(e.selected)},pageRangeDisplayed:5,pageCount:x,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:N}))))))}}}]);
//# sourceMappingURL=17.8103ae54.chunk.js.map