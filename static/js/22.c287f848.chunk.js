/*! For license information please see 22.c287f848.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[22],{197:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r(10),a=r(0),o=function(e,t){var r=Object(a.useState)(e),o=Object(n.a)(r,2),c=o[0],l=o[1];return Object(a.useEffect)((function(){var r=setTimeout((function(){l(e)}),t);return function(){clearTimeout(r)}}),[e,t]),c}},604:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r(10),o=r(0),c=r.n(o),l=r(192),i=r(98),u=r.n(i),s=r(15),m=r(277),d=r(278),f=r(279),h=r(33),v=r(11),p=r(58),b=r.n(p),y=r(97),g=r(99),E=r(197),w=r(67),x=r(100),O=r.n(x),j=r(190);function N(){N=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(S){l=function(e,t,r){return e[t]=r}}function i(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var l=E(c,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var i=u(e,t,r);if("normal"===i.type){if(n=r.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(n="completed",r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=i;var s={};function m(){}function d(){}function f(){}var h={};l(h,a,(function(){return this}));var v=Object.getPrototypeOf,p=v&&v(v(j([])));p&&p!==t&&r.call(p,a)&&(h=p);var b=f.prototype=m.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,l){var i=u(e[a],e,o);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,c,l)}),(function(e){n("throw",e,c,l)})):t.resolve(m).then((function(e){s.value=e,c(s)}),(function(e){return n("throw",e,c,l)}))}l(i.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return d.prototype=f,l(b,"constructor",f),l(f,"constructor",d),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},y(g.prototype),l(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new g(i(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},y(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(v.g)(),r=Object(l.a)(["user"]),i=Object(a.a)(r,2),p=i[0],x=i[1],L=Object(o.useState)([]),S=Object(a.a)(L,2),k=S[0],C=S[1],_=Object(o.useState)(""),T=Object(a.a)(_,2),D=T[0],P=(T[1],Object(o.useState)()),B=Object(a.a)(P,2),F=B[0],Y=B[1],G=Object(o.useState)(""),A=Object(a.a)(G,2),I=A[0],R=A[1],J=Object(o.useState)([]),M=Object(a.a)(J,2),V=M[0],U=M[1],Z=Object(E.a)(D,500),W=Object(y.a)({mode:"onChange"}).formState,q=(W.errors,W.isDirty,W.isValid,Object(o.useState)(0)),z=Object(a.a)(q,2),H=z[0],K=z[1],Q=Object(g.a)("page"),X=Object(a.a)(Q,2),$=X[0],ee=X[1],te=Object(o.useState)(20),re=Object(a.a)(te,1)[0],ne=Object(o.useState)(!0),ae=Object(a.a)(ne,2),oe=ae[0],ce=ae[1];Object(o.useEffect)((function(){le()}),[$,re,F,I,Z]),Object(o.useEffect)((function(){ue()}),[]);var le=function(){var e=Object(n.a)(N().mark((function e(){var r,n,a,o,c,l,i,u,m,d,f;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ce(!0),e.prev=1,"branch"!==(null===p||void 0===p||null===(r=p.user)||void 0===r?void 0:r.role)){e.next=8;break}return e.next=5,Object(s.Z)(re,+$+1,D,null===p||void 0===p||null===(l=p.user)||void 0===l?void 0:l.name);case 5:return e.next=7,e.sent.data;case 7:c=e.sent;case 8:if("admin"!==(null===p||void 0===p||null===(n=p.user)||void 0===n?void 0:n.role)){e.next=14;break}return e.next=11,Object(s.Y)(re,+$+1,I,F);case 11:return e.next=13,e.sent.data;case 13:c=e.sent;case 14:C(null===(a=c)||void 0===a?void 0:a.results),K(null===(o=c)||void 0===o?void 0:o.totalPages),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(u=i.data)||void 0===u?void 0:u.message)?h.b.error(e.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(m=e.t0.response)||void 0===m||null===(d=m.data)||void 0===d?void 0:d.code)&&(f=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),x("user",null,{path:"/"}),Object(s.ec)(f).finally((function(){t.push("/user-pages/login-1")})));case 22:ce(!1);case 23:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(){return e.apply(this,arguments)}}(),ie={data:k,headers:[{label:"Name",key:"name"},{label:"Contact no",key:"contactno"},{label:"Branch",key:"branch"},{label:"Date",key:"date"},{label:"Type",key:"type"}],filename:"Clue_Mediator_Report.csv"},ue=function(){var e=Object(n.a)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(s.W)(5e3,1,"","branch");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,U(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},"Contacted clients / Fetch Clients "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===p||void 0===p||null===(e=p.user)||void 0===e?void 0:e.role," Dashboard")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"fetch clients")))),c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-3"},c.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm "},c.a.createElement(m.CSVLink,Object.assign({},ie,{className:"text-white"}),"Export to CSV"))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return function(e){var t={Sheets:{data:f.b.json_to_sheet(k)},SheetNames:["data"]},r=f.c(t,{bookType:"xlsx",type:"array"}),n=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"});d.saveAs(n,e+".xlsx")}("test")}},"Download Excel"))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(j.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-6 col-form-label"},"Search Branch"),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){ee(0),R(e.target.value)}},c.a.createElement("option",{selected:""===I,value:""},"Not Selected"),null===V||void 0===V?void 0:V.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.name===I,value:e.name},e.name))})))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(j.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-6 col-form-label"},"Search Type"),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"type",onChange:function(e){ee(0),Y(e.target.value)}},c.a.createElement("option",{selected:""===F,value:""},"Not Selected"),c.a.createElement("option",{value:1},"Free"),c.a.createElement("option",{value:2},"Paid")))))),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Name "),c.a.createElement("th",null," Contact no. "),c.a.createElement("th",null," Branch "),c.a.createElement("th",null," Date "),c.a.createElement("th",null," Type "),c.a.createElement("th",null," Convert "),c.a.createElement("th",null," Delete "))),c.a.createElement("tbody",null,oe?c.a.createElement(w.a,null):null===k||void 0===k?void 0:k.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,null===e||void 0===e?void 0:e.name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),c.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),c.a.createElement("td",null,O()(null===e||void 0===e?void 0:e.fromDate).format("DD-MM-YYYY")),c.a.createElement("td",null,1===(null===e||void 0===e?void 0:e.type)?"Free":"Paid"),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){var r;r=null===e||void 0===e?void 0:e.id,t.push({pathname:"/clients/createclient",search:"?"+new URLSearchParams({id:r}).toString()})}},"Convert")),c.a.createElement("td",null," ",c.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void b.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(s.B)(t).finally((function(){return le()})),b.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===b.a.DismissReason.cancel&&b.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"}," ")))})))),c.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),ee(e.selected)},pageRangeDisplayed:5,pageCount:H,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:$}))))))}}}]);
//# sourceMappingURL=22.c287f848.chunk.js.map