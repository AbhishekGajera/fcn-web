/*! For license information please see 12.34ef11c4.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[12],{172:function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var n=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],r=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],o=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],c=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],i=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],u=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},s=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(34),r=a(0),l=function(e,t){var a=Object(r.useState)(e),l=Object(n.a)(a,2),o=l[0],c=l[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o}},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){for(var t=e||10,a="abcdefghijklmnopqrstuvwxyz",n="",r="";n.length<t;){var l=Math.ceil(a.length*Math.random()*Math.random()),o=Math.ceil("0123456789".length*Math.random()*Math.random()),c=Math.ceil("!@#$%^&*()_+~`|}{[]:;?><,./-=".length*Math.random()*Math.random()),i=a.charAt(l);r+=i=n.length%2==0?i.toUpperCase():i,r+="0123456789".charAt(o),n=r+="!@#$%^&*()_+~`|}{[]:;?><,./-=".charAt(c)}return(n=n.split("").sort((function(){return.5-Math.random()})).join("")).substr(0,e)}},486:function(e,t,a){"use strict";a.r(t);var n=a(45),r=a(34),l=a(0),o=a.n(l),c=a(163),i=a(177),u=a.n(i),s=a(47),m=a(179),d=a.n(m),v=a(173),f=a(169),h=a(171),p=a(76),b=a(7),g=a(172),E=a(184),y=a(176),w=a(77);function N(){N=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(D){c=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,l=Object.create(r.prototype),o=new x(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return S()}for(a.method=r,a.arg=l;;){var o=a.delegate;if(o){var c=y(o,a);if(c){if(c===s)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=u(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===s)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),l}function u(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(D){return{type:"throw",arg:D}}}e.wrap=i;var s={};function m(){}function d(){}function v(){}var f={};c(f,r,(function(){return this}));var h=Object.getPrototypeOf,p=h&&h(h(j([])));p&&p!==t&&a.call(p,r)&&(f=p);var b=v.prototype=m.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(r,l){function o(){return new t((function(n,o){!function n(r,l,o,c){var i=u(e[r],e,l);if("throw"!==i.type){var s=i.arg,m=s.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,o,c)}),(function(e){n("throw",e,o,c)})):t.resolve(m).then((function(e){s.value=e,o(s)}),(function(e){return n("throw",e,o,c)}))}c(i.arg)}(r,l,n,o)}))}return n=n?n.then(o,o):o()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,c(b,"constructor",v),c(v,"constructor",d),d.displayName=c(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,c(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(E.prototype),c(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var o=new E(i(t,a,n,r),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(b),c(b,o,"Generator"),c(b,r,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return o.type="throw",o.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;O(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t=Object(l.useState)(""),a=Object(r.a)(t,2),i=a[0],m=a[1],O=Object(l.useState)(0),x=Object(r.a)(O,2),j=x[0],S=x[1],D=Object(l.useState)(0),L=Object(r.a)(D,2),C=L[0],k=L[1],B=Object(l.useState)(10),P=Object(r.a)(B,1)[0],T=o.a.useState(!1),A=Object(r.a)(T,2),G=A[0],_=A[1],F=Object(l.useState)({}),I=Object(r.a)(F,2),M=I[0],R=I[1],q=Object(l.useState)(0),Y=Object(r.a)(q,2),U=Y[0],z=Y[1],J=Object(l.useState)(""),V=Object(r.a)(J,2),$=V[0],H=V[1],Z=Object(y.a)(i,500),K=Object(c.a)(["user"]),Q=Object(r.a)(K,2),W=Q[0],X=Q[1],ee=Object(l.useState)([]),te=Object(r.a)(ee,2),ae=te[0],ne=te[1],re=Object(b.g)(),le=Object(l.useState)(!0),oe=Object(r.a)(le,2),ce=oe[0],ie=oe[1],ue=Object(f.a)({mode:"onChange"}),se=ue.register,me=ue.handleSubmit,de=ue.formState,ve=de.errors,fe=(de.isDirty,de.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),he=function(){var e=Object(n.a)(N().mark((function e(t){var a,n;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(E.a)(),n=JSON.stringify({password:a}),e.prev=2,e.next=5,Object(s.z)(n,t);case 5:p.b.success("Password generated and sended to user via Email successfully",{autoClose:3e3}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),p.b.error("Password generation failed, please try again later");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(n.a)(N().mark((function e(t){var a,n,r,l,o,c;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.status=U,t.role=$,e.prev=2,a=JSON.stringify(t),e.next=6,Object(s.z)(a,null===M||void 0===M?void 0:M.id);case 6:p.b.success("User updated Successfully",{autoClose:3e3}),be(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?p.b.error(e.t0.response.data.message):p.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.code)&&(c=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),X("user",null,{path:"/"}),Object(s.A)(c).finally((function(){re.push("/user-pages/login-1")})));case 14:return e.prev=14,_(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){be()}),[C,P]),Object(l.useEffect)((function(){be()}),[Z]);var be=function(){var e=Object(n.a)(N().mark((function e(){var t;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(!0),e.next=3,Object(s.m)(P,+C+0,i);case 3:return e.next=5,e.sent.data;case 5:t=e.sent,ne(null===t||void 0===t?void 0:t.results),S(null===t||void 0===t?void 0:t.totalPages),ie(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(v.a,{show:G,onHide:function(){_(!1),R({}),z(0)},backdrop:"static",keyboard:!1},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Update Client")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:me(pe)},o.a.createElement("p",{className:"card-description"}," Update Client "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(h.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(h.a.Control,Object.assign({type:"text",name:"name",defaultValue:M.name},se("name",{required:!0}))),ve&&ve.name&&o.a.createElement("p",null,"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(h.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(h.a.Control,Object.assign({type:"text",name:"contactno",defaultValue:M.contactno},se("contactno",{required:!0,pattern:fe}))),ve&&ve.contactno&&"required"===ve.contactno.type&&o.a.createElement("p",null,"contact number is required field"),ve&&ve.contactno&&"pattern"===ve.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(h.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(h.a.Control,Object.assign({type:"text",name:"email",defaultValue:M.email},se("email",{required:!0,pattern:/^\S+@\S+$/i}))),ve&&ve.email&&"required"===ve.email.type&&o.a.createElement("p",null,"email is required field"),ve&&ve.email&&"pattern"===ve.email.type&&o.a.createElement("p",null,"invalid email formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(h.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"status"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3",name:"status",onChange:function(e){var t;z(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||0)}},null===g.g||void 0===g.g?void 0:g.g.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e.value,selected:+U===+(null===e||void 0===e?void 0:e.value)},null===e||void 0===e?void 0:e.label)}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(h.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Role"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;H(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===g.e||void 0===g.e?void 0:g.e.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.value===$,value:e.value},e.label))}))))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"branches / Fetch Branch "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===W||void 0===W||null===(e=W.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Fetch branches")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"}),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"search-field d-none d-md-block"},o.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},o.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),o.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Clients",value:i,onChange:function(e){var t;m(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),k(0)}})))))),o.a.createElement("h4",{className:"card-title"},"Branch list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Contact no. "),o.a.createElement("th",null," Branch "),o.a.createElement("th",null," Email "),o.a.createElement("th",null," Role "),o.a.createElement("th",null," Status "),o.a.createElement("th",null," Generate Password "),o.a.createElement("th",null," Edit "),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null,ce?o.a.createElement(w.a,null):null===ae||void 0===ae?void 0:ae.map((function(e){return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),o.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.role),o.a.createElement("td",null,Object(g.a)(null===e||void 0===e?void 0:e.status)),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return he(null===e||void 0===e?void 0:e.id)}},"Generate")),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return R(t=e),z((null===t||void 0===t?void 0:t.status)||0),H(null===t||void 0===t?void 0:t.role),void _(!0);var t},className:"mdi mdi-lead-pencil"})),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void d.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(s.k)(t).finally((function(){return be()})),d.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===d.a.DismissReason.cancel&&d.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})))})))),o.a.createElement(u.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){k(e.selected)},pageRangeDisplayed:5,pageCount:j,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:C}))))))}}}]);
//# sourceMappingURL=12.34ef11c4.chunk.js.map