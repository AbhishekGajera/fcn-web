/*! For license information please see 12.f21a4e02.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[12],{177:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){for(var t=e||10,a="abcdefghijklmnopqrstuvwxyz",r="",n="";r.length<t;){var l=Math.ceil(a.length*Math.random()*Math.random()),o=Math.ceil("0123456789".length*Math.random()*Math.random()),c=Math.ceil("!@#$%^&*()_+~`|}{[]:;?><,./-=".length*Math.random()*Math.random()),i=a.charAt(l);n+=i=r.length%2==0?i.toUpperCase():i,n+="0123456789".charAt(o),r=n+="!@#$%^&*()_+~`|}{[]:;?><,./-=".charAt(c)}return(r=r.split("").sort((function(){return.5-Math.random()})).join("")).substr(0,e)}},178:function(e,t,a){"use strict";a.d(t,"c",(function(){return r})),a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return l}));var r=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],n=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(18),n=a(0),l=function(e,t){var a=Object(n.useState)(e),l=Object(r.a)(a,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o}},488:function(e,t,a){"use strict";a.r(t);var r=a(13),n=a(18),l=a(0),o=a.n(l),c=a(169),i=a(180),s=a.n(i),u=a(61),m=a(179),d=a(185),f=a.n(d),v=a(52),h=a(90),p=a(51),b=a(60),E=a(10),g=a(178),y=a(177);function N(){N=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,l=Object.create(n.prototype),o=new j(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return S()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=y(o,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var v={};c(v,n,(function(){return this}));var h=Object.getPrototypeOf,p=h&&h(h(x([])));p&&p!==t&&a.call(p,n)&&(v=p);var b=f.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var i=s(e[n],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=f,c(b,"constructor",f),c(f,"constructor",d),d.displayName=c(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(g.prototype),c(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new g(i(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(b),c(b,o,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(c.a)(["user"]),a=Object(n.a)(t,2),i=a[0],d=a[1],w=Object(l.useState)([]),O=Object(n.a)(w,2),j=O[0],x=O[1],S=Object(E.g)(),k=Object(l.useState)(""),L=Object(n.a)(k,2),C=L[0],T=L[1],G=Object(l.useState)(0),_=Object(n.a)(G,2),B=_[0],A=_[1],I=Object(l.useState)(0),q=Object(n.a)(I,2),P=q[0],D=q[1],F=Object(l.useState)(10),M=Object(n.a)(F,1)[0],J=o.a.useState(!1),U=Object(n.a)(J,2),Y=U[0],R=U[1],V=Object(l.useState)({}),$=Object(n.a)(V,2),H=$[0],z=$[1],Z=Object(l.useState)(0),K=Object(n.a)(Z,2),Q=K[0],W=K[1],X=Object(l.useState)([]),ee=Object(n.a)(X,2),te=ee[0],ae=ee[1],re=Object(l.useState)(""),ne=Object(n.a)(re,2),le=ne[0],oe=ne[1],ce=Object(l.useState)(""),ie=Object(n.a)(ce,2),se=ie[0],ue=ie[1],me=Object(m.a)(C,500),de=Object(h.a)({mode:"onChange"}),fe=de.register,ve=de.handleSubmit,he=de.formState,pe=he.errors,be=(he.isDirty,he.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),Ee=function(){var e=Object(r.a)(N().mark((function e(t){var a,r,n,l,o,c;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.status=Q,e.prev=1,a=JSON.stringify(t),e.next=5,Object(u.r)(a,null===H||void 0===H?void 0:H.id);case 5:b.b.success("User updated Successfully",{autoClose:3e3}),Ne(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?b.b.error(e.t0.response.data.message):b.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.code)&&(c=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),d("user",null,{path:"/"}),Object(u.s)(c).finally((function(){S.push("/user-pages/login-1")})));case 13:return e.prev=13,R(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Ne()}),[P,M]);var ge=function(){var e=Object(r.a)(N().mark((function e(t){var a,r;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(y.a)(),r=JSON.stringify({password:a}),e.prev=2,e.next=5,Object(u.r)(r,t);case 5:b.b.success("Password generated and sended to user via Email successfully",{autoClose:3e3}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),b.b.error("Password generation failed, please try again later");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Ne()}),[P,M,le]),Object(l.useEffect)((function(){Ne()}),[me]),Object(l.useEffect)((function(){ye()}),[]);var ye=function(){var e=Object(r.a)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.h)(5e3,1,"","branch");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,ae(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ne=function(){var e=Object(r.a)(N().mark((function e(){var t,a,r,n,l,o;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.j)(M,P,C,le);case 3:return e.next=5,e.sent.data;case 5:t=e.sent,x(null===t||void 0===t?void 0:t.results),A(null===t||void 0===t?void 0:t.totalPages),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?b.b.error(e.t0.response.data.message):b.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),d("user",null,{path:"/"}),Object(u.s)(o).finally((function(){S.push("/user-pages/login-1")})));case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(v.a,{show:Y,onHide:function(){R(!1),z({}),W(0)},backdrop:"static",keyboard:!1},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Update Ibo")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:ve(Ee)},o.a.createElement("p",{className:"card-description"}," Update Ibo "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"name",defaultValue:H.name},fe("name",{required:!0}))),pe&&pe.name&&o.a.createElement("p",null,"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"address"},fe("address",{required:!0}))),pe&&pe.address&&o.a.createElement("p",null,"address is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"contactno",defaultValue:H.contactno},fe("contactno",{required:!0,pattern:be}))),pe&&pe.contactno&&"required"===pe.contactno.type&&o.a.createElement("p",null,"contact number is required field"),pe&&pe.contactno&&"pattern"===pe.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Search Branch"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;ue(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===te||void 0===te?void 0:te.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.name===se,value:e.name},e.name))}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"email",defaultValue:H.email},fe("email",{required:!0,pattern:/^\S+@\S+$/i}))),pe&&pe.email&&"required"===pe.email.type&&o.a.createElement("p",null,"email is required field"),pe&&pe.email&&"pattern"===pe.email.type&&o.a.createElement("p",null,"invalid email formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"status"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3",name:"status",onChange:function(e){var t;W(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||0)}},null===g.c||void 0===g.c?void 0:g.c.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e.value,selected:+Q===+(null===e||void 0===e?void 0:e.value)},null===e||void 0===e?void 0:e.label)}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Role"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",defaultValue:H.role,name:"role"},fe("role",{required:!0}))),pe&&pe.branch&&o.a.createElement("p",null,"role is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"ibos / Fetch Ibos "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===i||void 0===i||null===(e=i.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch Ibos")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Search Branch"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){D(0),oe(e.target.value)}},o.a.createElement("option",{selected:""===le,value:""},"Not Selected"),null===te||void 0===te?void 0:te.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.name===le,value:e.name},e.name))})))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"search-field d-none d-md-block"},o.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},o.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),o.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Clients",value:C,onChange:function(e){var t;T(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),D(0)}})))))),o.a.createElement("h4",{className:"card-title"},"Ibo list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Contact no. "),o.a.createElement("th",null," Branch "),o.a.createElement("th",null," Email "),o.a.createElement("th",null," Role "),o.a.createElement("th",null," Status "),o.a.createElement("th",null," Generate Password "),o.a.createElement("th",null," Edit "),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null,null===j||void 0===j?void 0:j.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),o.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.role),o.a.createElement("td",null,Object(g.a)(null===e||void 0===e?void 0:e.status)),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return ge(null===e||void 0===e?void 0:e.id)}},"Generate")),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return z(e),void R(!0)},className:"mdi mdi-lead-pencil"})),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void f.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(u.f)(t).finally((function(){return Ne()})),f.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===f.a.DismissReason.cancel&&f.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})))})))),o.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){var t=e.selected*M%j.length;D(t)},pageRangeDisplayed:5,pageCount:B,previousLabel:"< previous",renderOnZeroPageCount:null}))))))}}}]);
//# sourceMappingURL=12.f21a4e02.chunk.js.map