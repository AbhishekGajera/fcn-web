/*! For license information please see 24.792434b1.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[24],{198:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],a=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],o=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],i=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],c=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],u=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},s=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},614:function(e,t,n){"use strict";n.r(t);var r=n(12),a=n(10),l=n(0),o=n.n(l),i=n(192),c=n(98),u=n.n(c),s=n(15),d=n(58),v=n.n(d),m=n(198),f=n(190),h=n(11),p=n(33);function b(){b=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(L){i=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var a=t&&t.prototype instanceof d?t:d,l=Object.create(a.prototype),o=new N(r||[]);return l._invoke=function(e,t,n){var r="suspendedStart";return function(a,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw l;return j()}for(n.method=a,n.arg=l;;){var o=n.delegate;if(o){var i=w(o,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=u(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,o),l}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(L){return{type:"throw",arg:L}}}e.wrap=c;var s={};function d(){}function v(){}function m(){}var f={};i(f,a,(function(){return this}));var h=Object.getPrototypeOf,p=h&&h(h(D([])));p&&p!==t&&n.call(p,a)&&(f=p);var g=m.prototype=d.prototype=Object.create(f);function y(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(a,l){function o(){return new t((function(r,o){!function r(a,l,o,i){var c=u(e[a],e,l);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return r("throw",e,o,i)}))}i(c.arg)}(a,l,r,o)}))}return r=r?r.then(o,o):o()}}function w(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=u(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,s;var a=r.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function D(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=m,i(g,"constructor",m),i(m,"constructor",v),v.displayName=i(m,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,i(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},y(E.prototype),i(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,a,l){void 0===l&&(l=Promise);var o=new E(c(t,n,r,a),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},y(g),i(g,o,"Generator"),i(g,a,(function(){return this})),i(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=D,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return o.type="throw",o.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var l=this.tryEntries[a],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var l=a;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;O(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:D(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(l.useState)(""),n=Object(a.a)(t,2),c=n[0],d=n[1],g=Object(l.useState)(""),y=Object(a.a)(g,2),E=y[0],w=y[1],x=Object(l.useState)(""),O=Object(a.a)(x,2),N=O[0],D=O[1],j=Object(l.useState)(0),L=Object(a.a)(j,2),S=L[0],C=L[1],B=Object(l.useState)(0),k=Object(a.a)(B,2),T=k[0],P=k[1],F=Object(l.useState)(20),I=Object(a.a)(F,1)[0],_=Object(i.a)(["user"]),G=Object(a.a)(_,2),A=G[0],R=G[1],Y=Object(l.useState)([]),M=Object(a.a)(Y,2),J=M[0],U=M[1],z=Object(h.g)();Object(l.useEffect)((function(){Z()}),[T,I,c,E,N]);var Z=function(){var e=Object(r.a)(b().mark((function e(){var t,n,r,a,l,o,i,u;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.bb)(I,+T+1,E,c,["IBO","branch"].includes(null===A||void 0===A||null===(t=A.user)||void 0===t?void 0:t.role)?null===A||void 0===A||null===(n=A.user)||void 0===n?void 0:n.id:"");case 3:return e.next=5,e.sent.data;case 5:r=e.sent,U(null===r||void 0===r?void 0:r.results),console.log("res",null===r||void 0===r?void 0:r.results),C(null===r||void 0===r?void 0:r.totalPages),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(l=a.data)||void 0===l?void 0:l.message)?p.b.error(e.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(i=o.data)||void 0===i?void 0:i.code)&&(u=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),R("user",null,{path:"/"}),Object(s.ec)(u).finally((function(){z.push("/user-pages/login-1")})));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"costs / Show Costs "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===A||void 0===A||null===(e=A.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Show Costs")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-6 col-form-label"},"Select Expence Category"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){P(0),w(e.target.value)}},o.a.createElement("option",{selected:""===E,value:""},"Not Selected"),null===m.c||void 0===m.c?void 0:m.c.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.value===E,value:e.value},e.label))})))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Time"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){P(0),D(e.target.value)}},o.a.createElement("option",{selected:""===N,value:""},"Not Selected"),null===m.h||void 0===m.h?void 0:m.h.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.label===N,value:e.value},e.label))})))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-6 col-form-label"},"Select Expence Type"),o.a.createElement("div",{className:"col-sm-6"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){P(0),d(e.target.value)}},o.a.createElement("option",{selected:""===c,value:""},"Not Selected"),null===m.d||void 0===m.d?void 0:m.d.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.value===c,value:e.value},e.label))}))))))),o.a.createElement("h4",{className:"card-title"},"Expence list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Expence Category "),o.a.createElement("th",null," Total Expence "),o.a.createElement("th",null," Type "),o.a.createElement("th",null," Description "),o.a.createElement("th",null," User "),o.a.createElement("th",null," User Type"),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null,null===J||void 0===J?void 0:J.map((function(e){var t,n;return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.category),o.a.createElement("td",null,null===e||void 0===e?void 0:e.totalCost),o.a.createElement("td",null,null===e||void 0===e?void 0:e.type),o.a.createElement("td",null,null===e||void 0===e?void 0:e.description),o.a.createElement("td",null,null===e||void 0===e||null===(t=e.user)||void 0===t?void 0:t.name),o.a.createElement("td",null,null===e||void 0===e||null===(n=e.user)||void 0===n?void 0:n.role),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void v.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(s.C)(t).finally((function(){return Z()})),v.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===v.a.DismissReason.cancel&&v.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return t=null===e||void 0===e?void 0:e.image,void window.open(t,"_blank");var t}},"Download Invoice")))})))),o.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),P(e.selected)},pageRangeDisplayed:5,pageCount:S,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:T}))))))}}}]);
//# sourceMappingURL=24.792434b1.chunk.js.map