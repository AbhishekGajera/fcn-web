/*! For license information please see 86.b6aefc10.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[86],{496:function(e,t,a){"use strict";a.r(t);var r=a(70),n=a(44),l=a(34),o=a(0),c=a.n(o),s=a(167),i=a(173),m=a(163),u=a(76),d=a(47),p=a(7),f=a(180),v=a.n(f),h=a(197),b=a.n(h),E=a(220),g=a.n(E);a(198);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,l=Object.create(n.prototype),o=new O(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return _()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=N(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=i(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,o),l}function i(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var m={};function u(){}function d(){}function p(){}var f={};c(f,n,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(j([])));h&&h!==t&&a.call(h,n)&&(f=h);var b=p.prototype=u.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var s=i(e[n],e,l);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(u).then((function(e){m.value=e,o(m)}),(function(e){return r("throw",e,o,c)}))}c(s.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=i(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:_}}function _(){return{value:void 0,done:!0}}return d.prototype=p,c(b,"constructor",p),c(p,"constructor",d),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(g.prototype),c(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new g(s(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(b),c(b,o,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e,t=g.a.parse(window.location.search),a=Object(o.useState)(),f=Object(l.a)(a,2),h=f[0],E=f[1],N=Object(m.a)(["user"]),w=Object(l.a)(N,2),x=w[0],O=w[1],j=Object(o.useState)([]),_=Object(l.a)(j,2),k=_[0],C=_[1],S=Object(o.useState)([]),q=Object(l.a)(S,2),L=q[0],G=q[1],A=Object(o.useState)([]),I=Object(l.a)(A,2),T=I[0],F=I[1],P=Object(o.useState)((null===h||void 0===h?void 0:h.contactno)||"+91"),B=Object(l.a)(P,2),D=B[0],R=B[1],Y=Object(o.useState)(!1),J=Object(l.a)(Y,2),M=J[0],U=J[1],$=function(e){e.target.value=(""+e.target.value).toUpperCase()},V=Object(p.g)(),Z=Object(s.a)({mode:"onChange"}),z=Z.register,H=Z.handleSubmit,K=Z.formState,Q=K.errors,W=(K.isDirty,K.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"),new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})")),X=(new RegExp("^[A-Z]{4}0[A-Z0-9]{6}$"),new RegExp("^([0-9]){12}$")),ee=function(){var e=Object(n.a)(y().mark((function e(){var a,r,n;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.H)(t.id);case 3:return e.next=5,e.sent.data;case 5:a=e.sent,E(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),te=function(){var e=Object(n.a)(y().mark((function e(t){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.contactno=D,t.name=t.first_name+" "+t.last_name,delete t.first_name,delete t.last_name,e.next=7,Object(d.h)(t);case 7:u.b.success("user created successfully"),V.push("/clients/clientlist"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){ae()}),[]),Object(o.useEffect)((function(){t.id&&ee(),re()}),[]),Object(o.useEffect)((function(){ne()}),[]);var ae=function(){var e=Object(n.a)(y().mark((function e(){var t,a,r,n,l,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.F)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,C(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(d.qb)(o).finally((function(){V.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(n.a)(y().mark((function e(){var t,a,r,n,l,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.L)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,G(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(d.qb)(o).finally((function(){V.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(n.a)(y().mark((function e(){var t,a,r,n,l,o;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(d.R)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,F(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(d.qb)(o).finally((function(){V.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},"Clients / create Clients "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===x||void 0===x||null===(e=x.user)||void 0===e?void 0:e.role," Dashboard")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Create clients")))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-sample",onSubmit:H(te)},c.a.createElement("p",{className:"card-description"}," Personal info "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"First Name"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"first_name",defaultValue:null===h||void 0===h?void 0:h.name.split(" ")[0],onChange:function(e){var t;return E(Object(r.a)(Object(r.a)({},h),{},{name:null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value}))}},z("first_name",{required:!0}))),Q&&Q.first_name&&c.a.createElement("p",null,"first name is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Last Name"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"last_name",defaultValue:null===h||void 0===h?void 0:h.name.split(" ")[1],onChange:function(e){var t;return E(Object(r.a)(Object(r.a)({},h),{},{name:null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value}))}},z("last_name",{required:!0}))),Q&&Q.last_name&&c.a.createElement("p",null,"last name is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Address"," "),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"address"},z("address",{required:!0}))),Q&&Q.address&&c.a.createElement("p",null,"address is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"DOB"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(i.a.Control,Object.assign({type:"date",name:"dob",max:v()().format("YYYY-MM-DD")},z("dob",{required:!0}))),Q&&Q.dob&&c.a.createElement("p",null,"DOB is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Product"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"product"},z("product",{required:!0})),c.a.createElement("option",{value:""},"--Select product--"),T.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))),Q&&Q.product&&c.a.createElement("p",null,"Select product is required field")))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Branch"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"branch"},z("branch",{required:!0})),c.a.createElement("option",{value:""},"--Select branch--"),k.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name,selected:(null===h||void 0===h?void 0:h.branch)===(null===e||void 0===e?void 0:e.name)})}))),Q&&Q.branch&&c.a.createElement("p",null,"Select branch is required field")))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Ibo"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"IBO"},z("IBO",{required:!0})),c.a.createElement("option",{value:""},"--Select ibo--"),L.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))),Q&&Q.ibo&&c.a.createElement("p",null,"Select Ibo is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"email"},z("email",{required:!0,pattern:/^\S+@\S+$/i}))),Q&&Q.email&&"required"===Q.email.type&&c.a.createElement("p",null,"email is required field"),Q&&Q.email&&"pattern"===Q.email.type&&c.a.createElement("p",null,"invalid email formate")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Password"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(i.a.Control,Object.assign({type:M?"text":"password",name:"password"},z("password",{required:!0,pattern:W}))),c.a.createElement("span",{className:"d-flex",style:{float:"right",marginTop:"10px"}},c.a.createElement("input",{style:{marginRight:"10px"},type:"checkbox",value:M,onChange:function(){U(!M)}}),"show password"),Q&&Q.password&&"required"===Q.password.type&&c.a.createElement("p",null,"password is required field"),Q&&Q.password&&"pattern"===Q.password.type&&c.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Country"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"country"},z("country",{required:!0})),c.a.createElement("option",null,"Country"),c.a.createElement("option",null,"United States of America"),c.a.createElement("option",{selected:!0},"India"),c.a.createElement("option",null,"United Kingdom"),c.a.createElement("option",null,"Germany"),c.a.createElement("option",null,"Argentina"))))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Contact"),c.a.createElement("div",{className:"col-sm-8 contact_no"},c.a.createElement(b.a,{inputExtraProps:{name:"contactno",required:!0,autoFocus:!0},country:"US",value:D,onChange:function(e){R(e)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Bank Account no"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"bankAccNo"},z("bankAccNo",{required:!0}))),Q&&Q.bankAccNo&&c.a.createElement("p",null,"Bank Account number is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"IFSC code"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"bankIfscCode",onInput:$},z("bankIfscCode",{required:!0,pattern:W}))),Q&&Q.bankIfscCode&&"required"===Q.bankIfscCode.type&&c.a.createElement("p",null,"Bank IFSC number is required field"),Q&&Q.bankIfscCode&&"pattern"===Q.bankIfscCode.type&&c.a.createElement("p",null,"IFSC code should have Capital latter and Number"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-5 col-form-label"},"AadharCard Number"),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"aadhar_card_no"},z("aadhar_card_no",{required:!0,pattern:X}))),Q&&Q.aadhar_card_no&&"required"===Q.aadhar_card_no.type&&c.a.createElement("p",null,"Aadharcard number is required field"),Q&&Q.aadhar_card_no&&"pattern"===Q.aadhar_card_no.type&&c.a.createElement("p",null,"Aadharcard should have number")))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Min Amount"," "),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({id:"minamount",className:"form-control",type:"number",name:"minAmount",placeholder:"minamount"},z("minAmount",{required:!0}))),Q&&Q.minAmount&&c.a.createElement("p",null,"Product minamount is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-7"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"PanCard Number"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"pan_card_no",onInput:$},z("pan_card_no",{required:!0}))),Q&&Q.pan_card_no&&c.a.createElement("p",null,"PanCard number is required field")))),c.a.createElement("div",{className:"col-md-5"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Max Amount"," "),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({id:"maxamount",className:"form-control",type:"number",name:"maxAmount",placeholder:"maxamount"},z("maxAmount",{required:!0}))),Q&&Q.maxAmount&&c.a.createElement("p",null,"Product maxamount is required field"))))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=86.b6aefc10.chunk.js.map