/*! For license information please see 80.85f2a388.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[80],{655:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(10),l=a(0),o=a.n(l),c=a(192),i=a(99),s=a.n(i),u=a(15),m=a(100),d=a(33),f=a(57),p=a(190),v=a(58),h=a.n(v),b=a(98),E=a(11);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(L){c=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,l=Object.create(n.prototype),o=new x(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return k()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=N(o,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var p={};c(p,n,(function(){return this}));var v=Object.getPrototypeOf,h=v&&v(v(j([])));h&&h!==t&&a.call(h,n)&&(p=h);var b=f.prototype=m.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var i=s(e[n],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:k}}function k(){return{value:void 0,done:!0}}return d.prototype=f,c(b,"constructor",f),c(f,"constructor",d),d.displayName=c(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(g.prototype),c(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new g(i(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(b),c(b,o,"Generator"),c(b,n,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(E.g)(),a=o.a.useState(!1),i=Object(n.a)(a,2),v=i[0],g=i[1],N=Object(c.a)(["user"]),w=Object(n.a)(N,2),O=w[0],x=w[1],j=Object(l.useState)([]),k=Object(n.a)(j,2),L=k[0],C=k[1],S=Object(l.useState)(0),_=Object(n.a)(S,2),q=_[0],G=_[1],B=Object(m.a)("page"),T=Object(n.a)(B,2),D=T[0],F=T[1],A=Object(l.useState)(20),I=Object(n.a)(A,1)[0],P=Object(l.useState)({}),V=Object(n.a)(P,2),Y=V[0],J=V[1],R=Object(l.useState)(""),U=Object(n.a)(R,2),H=U[0],Z=U[1],$=Object(l.useState)([]),z=Object(n.a)($,2),W=z[0],K=z[1],M=Object(l.useState)(""),Q=Object(n.a)(M,2),X=(Q[0],Q[1]),ee=new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"),te=(new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})"),Object(b.a)({mode:"onChange"})),ae=te.register,re=te.handleSubmit,ne=te.reset,le=te.formState,oe=le.errors,ce=(le.isDirty,le.isValid,function(){var e=Object(r.a)(y().mark((function e(a){var r,n,l,o,c,i;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.branch=H,e.prev=1,r=JSON.stringify(a),e.next=5,Object(u.m)(null===Y||void 0===Y?void 0:Y.id,r);case 5:d.b.success("Employee updated Successfully",{autoClose:3e3}),se(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message)?d.b.error(e.t0.response.data.message):d.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(c=o.data)||void 0===c?void 0:c.code)&&(i=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),x("user",null,{path:"/"}),Object(u.ec)(i).finally((function(){t.push("/user-pages/login-1")})));case 13:return e.prev=13,g(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,9,13,16]])})));return function(t){return e.apply(this,arguments)}}());Object(l.useEffect)((function(){ie(),se()}),[]);var ie=function(){var e=Object(r.a)(y().mark((function e(){var t;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.W)(5e3,1,"","branch");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,K(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),se=function(){var e=Object(r.a)(y().mark((function e(){var a,r,n,l,o,c,i,s,m,f;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"branch"!==(null===O||void 0===O||null===(a=O.user)||void 0===a?void 0:a.role)){e.next=9;break}return e.next=4,Object(u.eb)(null===O||void 0===O||null===(o=O.user)||void 0===o?void 0:o.id,I,+D+1);case 4:return e.next=6,e.sent.data;case 6:l=e.sent,e.next=14;break;case 9:return e.next=11,Object(u.gb)(I,+D+1);case 11:return e.next=13,e.sent.data;case 13:l=e.sent;case 14:C(null===(r=l)||void 0===r?void 0:r.results),G(null===(n=l)||void 0===n?void 0:n.totalPages),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(0),console.info("error ",e.t0),(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(i=c.data)||void 0===i?void 0:i.message)?d.b.error(e.t0.response.data.message):d.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s||null===(m=s.data)||void 0===m?void 0:m.code)&&(f=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),x("user",null,{path:"/"}),Object(u.ec)(f).finally((function(){t.push("/user-pages/login-1")})));case 23:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){se()}),[D,I]);return o.a.createElement("div",null,o.a.createElement(f.a,{show:v,onHide:function(){g(!1),J({}),Z(""),ne()},backdrop:"static",keyboard:!1},o.a.createElement(f.a.Header,{closeButton:!0},o.a.createElement(f.a.Title,null,"Update Employee")),o.a.createElement(f.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:re(ce)},o.a.createElement("p",{className:"card-description"}," Update Employee "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"First Name"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"first_name",defaultValue:Y.first_name},ae("first_name",{required:!0}))),oe&&oe.name&&o.a.createElement("p",null,"First Name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Last Name"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"last_name",defaultValue:Y.last_name},ae("last_name",{required:!0}))),oe&&oe.name&&o.a.createElement("p",null,"Last Name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"email",defaultValue:Y.email},ae("email",{required:!0,pattern:/^\S+@\S+$/i}))),oe&&oe.email&&"required"===oe.email.type&&o.a.createElement("p",null,"email is required field"),oe&&oe.email&&"pattern"===oe.email.type&&o.a.createElement("p",null,"invalid email formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Branch"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){F(0),X(e.target.value)}},null===W||void 0===W?void 0:W.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.id===H,value:e.id},e.name))}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Contact No"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"contactno",defaultValue:Y.contactno},ae("contactno",{required:!0,pattern:ee}))),oe&&oe.contactno&&"required"===oe.contactno.type&&o.a.createElement("p",null,"contact number is required field"),oe&&oe.contactno&&"pattern"===oe.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Address"," "),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"address",defaultValue:Y.address},ae("address",{required:!0}))),oe&&oe.address&&o.a.createElement("p",null,"address is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Bank Account no"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"bankAccNo",defaultValue:Y.bankAccNo},ae("bankAccNo",{required:!0}))),oe&&oe.bankAccNo&&o.a.createElement("p",null,"Bank Account number is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"IFSC code"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"bankIfscCode",defaultValue:Y.bankIfscCode},ae("bankIfscCode",{required:!0}))),oe&&oe.bankIfscCode&&o.a.createElement("p",null,"Bank IFSC number is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"DOB"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"date",name:"dob",defaultValue:Y.dob},ae("dob",{required:!0}))),oe&&oe.dob&&o.a.createElement("p",null,"DOB is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Employee / Fetch Employee "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===O||void 0===O||null===(e=O.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch Employee")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Employee list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Branch "),o.a.createElement("th",null," Email "),o.a.createElement("th",null," Contact no. "),o.a.createElement("th",null," Edit "),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null,null===L||void 0===L?void 0:L.map((function(e){var t;return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e||null===(t=e.branch)||void 0===t?void 0:t.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),o.a.createElement("td",null,o.a.createElement("i",{className:"mdi mdi-lead-pencil",onClick:function(){return function(e){var t;ne(),J(e),Z(null===e||void 0===e||null===(t=e.branch)||void 0===t?void 0:t.id),g(!0)}(e)}})),o.a.createElement("td",null,o.a.createElement("i",{className:"mdi mdi-delete",onClick:function(){return t=null===e||void 0===e?void 0:e.id,void h.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(u.E)(t).finally((function(){return se()})),h.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===h.a.DismissReason.cancel&&h.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t}})))})))),o.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){F(e.selected)},pageRangeDisplayed:5,pageCount:q,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:D}))))))}}}]);
//# sourceMappingURL=80.85f2a388.chunk.js.map