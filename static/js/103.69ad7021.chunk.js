/*! For license information please see 103.69ad7021.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[103],{500:function(e,t,r){"use strict";r.r(t);var n=r(49),a=r(36),o=r(0),i=r.n(o),l=r(7),c=r(173),u=r(52),s=r(169),m=r(81);function d(){d=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof m?t:m,o=Object.create(a.prototype),i=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=w(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var s={};function m(){}function p(){}function f(){}var h={};l(h,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&r.call(g,a)&&(h=g);var y=f.prototype=m.prototype=Object.create(h);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var c=u(e[a],e,o);if("throw"!==c.type){var s=c.arg,m=s.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(m).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(c.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=f,l(y,"constructor",f),l(f,"constructor",p),p.displayName=l(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new E(c(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(y),l(y,i,"Generator"),l(y,a,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t,o,p,f,h,v,g,y,b,E,w,x,N=Object(l.g)(),O=Object(c.a)({mode:"onChange"}),j=O.register,L=O.handleSubmit,k=O.formState,S=k.errors,_=k.isDirty,q=k.isValid,I=O.getValues,P=Object(s.a)(["user"]),T=Object(a.a)(P,2),C=T[0],G=T[1],U=function(){var e=Object(n.a)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),G("user",null,{path:"/"}),Object(u.kb)(t).finally((function(){N.push("/user-pages/login-1")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(n.a)(d().mark((function e(t){var r,n,a,o,i,l,c,s,p;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return delete t.terms,t.password||delete t.password,(r=new FormData).append("file",t.image[0]),e.next=6,Object(u.i)(r);case 6:if(!(n=e.sent).error){e.next=11;break}m.b.error(n.error.message),e.next=26;break;case 11:return e.prev=11,delete t.image,t.avatar=n.secure_url,console.log("data",t),e.next=17,Object(u.ib)(t,null===C||void 0===C||null===(a=C.user)||void 0===a?void 0:a.id);case 17:o=e.sent,G("user",o.data,{path:"/"}),m.b.success("Profile updated sucssefully"),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(11),(null===e.t0||void 0===e.t0||null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.message)?m.b.error(null===e.t0||void 0===e.t0||null===(p=e.t0.response)||void 0===p?void 0:p.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(s=c.data)||void 0===s?void 0:s.code)&&U();case 26:case"end":return e.stop()}}),e,null,[[11,22]])})));return function(t){return e.apply(this,arguments)}}(),V=I(),A=new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})"),D=new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$");return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-7 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},i.a.createElement("div",{className:"nav-profile-img"},C.user.avatar?i.a.createElement("img",{src:null===C||void 0===C||null===(e=C.user)||void 0===e?void 0:e.avatar,alt:"user"}):i.a.createElement("img",{src:r(84),alt:"user"}),i.a.createElement("span",{className:"availability-status online"}))),i.a.createElement("h4",null,"Change in details?"),i.a.createElement("h6",{className:"font-weight-light"},"Update your profile is normal, no required to verify again"),i.a.createElement("form",{className:"pt-3",autoComplete:"new-password",onSubmit:L(F)},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Username",name:"name",defaultValue:null===C||void 0===C||null===(t=C.user)||void 0===t?void 0:t.name},j("name",{required:!0}))),S&&S.name&&i.a.createElement("p",null,"name is required field")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputEmail1",placeholder:"Email",name:"email",defaultValue:null===C||void 0===C||null===(o=C.user)||void 0===o?void 0:o.email},j("email",{required:!0,pattern:/^\S+@\S+$/i}))),S&&S.email&&"required"===S.email.type&&i.a.createElement("p",null,"email is required field"),S&&S.email&&"pattern"===S.email.type&&i.a.createElement("p",null,"invalid email formate")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({type:"date",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Date of birth",name:"dob"},j("dob",{required:!0}),{defaultValue:null===C||void 0===C||null===(p=C.user)||void 0===p?void 0:p.dob})),S&&S.dob&&i.a.createElement("p",null,"birthdate is required field")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Contact number",name:"contactno"},j("contactno",{required:!0,pattern:D}),{defaultValue:null===C||void 0===C||null===(f=C.user)||void 0===f?void 0:f.contactno})),S&&S.contactno&&"required"===S.contactno.type&&i.a.createElement("p",null,"contact number is required field"),S&&S.contactno&&"pattern"===S.contactno.type&&i.a.createElement("p",null,"invalid phone number please use valid formate")),i.a.createElement("div",{className:"form-group"},i.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",defaultValue:null===C||void 0===C||null===(h=C.user)||void 0===h?void 0:h.country,name:"country"},j("country",{required:!0})),i.a.createElement("option",null,"Country"),i.a.createElement("option",null,"United States of America"),i.a.createElement("option",{selected:!0},"India"),i.a.createElement("option",null,"United Kingdom"),i.a.createElement("option",null,"Germany"),i.a.createElement("option",null,"Argentina"))),"google"!==(null===C||void 0===C||null===(v=C.user)||void 0===v?void 0:v.registrationType)&&i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",placeholder:"Password",autoComplete:"new-password",name:"password"},j("password",{required:!1,pattern:A}))),i.a.createElement("p",null,"Note :- if you don't want to update your password then simply leave it blank or fill your new password"),S&&S.password&&"pattern"===S.password.type&&i.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({id:"input-id",className:"d-none",type:"file",name:"image",multiple:!1},j("image",{required:!0}))),i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},style:{width:"100%"},className:"btn btn-outline-".concat((null===V||void 0===V||null===(g=V.image)||void 0===g||null===(y=g[0])||void 0===y||y.name," btn-primary"))},(null===V||void 0===V||null===(b=V.image)||void 0===b||null===(E=b[0])||void 0===E?void 0:E.name)?null===V||void 0===V||null===(w=V.image)||void 0===w||null===(x=w[0])||void 0===x?void 0:x.name:"Upload Profile")),i.a.createElement("div",{className:"mb-4"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"terms"},j("terms",{required:!0}))),i.a.createElement("i",{className:"input-helper"})," Confirm your deatils"))),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit",disabled:!_||!q},"UPDATE PROFILE"))))))))}}}]);
//# sourceMappingURL=103.69ad7021.chunk.js.map