/*! For license information please see 16.74698ff3.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[16],{178:function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"e",(function(){return r})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return c})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var n=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],r=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],c=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],o=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],i=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],s=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},u=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},179:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(36),r=a(0),l=function(e,t){var a=Object(r.useState)(e),l=Object(n.a)(a,2),c=l[0],o=l[1];return Object(r.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[e,t]),c}},182:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(36),r=a(0),l=a(7),c=function(e){var t=Object(l.g)(),a=Object(l.h)(),c=a.search,o=a.pathname,i=new URLSearchParams(c),s=i.get(e),u=Object(r.useState)(null!==s?s:""),m=Object(n.a)(u,2),d=m[0],v=m[1];return[d,function(a){i.set(e,a),t.replace({pathname:o,search:i.toString()}),v(a)}]}},197:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=function(e){for(var t=e||10,a="abcdefghijklmnopqrstuvwxyz",n="",r="";n.length<t;){var l=Math.ceil(a.length*Math.random()*Math.random()),c=Math.ceil("0123456789".length*Math.random()*Math.random()),o=Math.ceil("!@#$%^&*()_+~`|}{[]:;?><,./-=".length*Math.random()*Math.random()),i=a.charAt(l);r+=i=n.length%2==0?i.toUpperCase():i,r+="0123456789".charAt(c),n=r+="!@#$%^&*()_+~`|}{[]:;?><,./-=".charAt(o)}return(n=n.split("").sort((function(){return.5-Math.random()})).join("")).substr(0,e)}},508:function(e,t,a){"use strict";a.r(t);var n=a(49),r=a(36),l=a(0),c=a.n(l),o=a(169),i=a(180),s=a.n(i),u=a(52),m=a(81),d=a(7),v=a(185),f=a.n(v),p=a(176),h=a(173),b=a(177),E=a(197),g=a(182),y=a(178),N=a(179),w=a(82);function O(){O=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},r=n.iterator||"@@iterator",l=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(C){o=function(e,t,a){return e[t]=a}}function i(e,t,a,n){var r=t&&t.prototype instanceof m?t:m,l=Object.create(r.prototype),c=new j(n||[]);return l._invoke=function(e,t,a){var n="suspendedStart";return function(r,l){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===r)throw l;return S()}for(a.method=r,a.arg=l;;){var c=a.delegate;if(c){var o=y(c,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===n)throw n="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);n="executing";var i=s(e,t,a);if("normal"===i.type){if(n=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(n="completed",a.method="throw",a.arg=i.arg)}}}(e,a,c),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=i;var u={};function m(){}function d(){}function v(){}var f={};o(f,r,(function(){return this}));var p=Object.getPrototypeOf,h=p&&p(p(x([])));h&&h!==t&&a.call(h,r)&&(f=h);var b=v.prototype=m.prototype=Object.create(f);function E(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var n;this._invoke=function(r,l){function c(){return new t((function(n,c){!function n(r,l,c,o){var i=s(e[r],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){n("next",e,c,o)}),(function(e){n("throw",e,c,o)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,o)}))}o(i.arg)}(r,l,n,c)}))}return n=n?n.then(c,c):c()}}function y(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(a,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var r=n.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,l=function t(){for(;++n<e.length;)if(a.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,o(b,"constructor",v),o(v,"constructor",d),d.displayName=o(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,o(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(g.prototype),o(g.prototype,l,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,n,r,l){void 0===l&&(l=Promise);var c=new g(i(t,a,n,r),l);return e.isGeneratorFunction(a)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(b),o(b,c,"Generator"),o(b,r,(function(){return this})),o(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var n=t.pop();if(n in e)return a.value=n,a.done=!1,a}return a.done=!0,a}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(a,n){return c.type="throw",c.arg=e,t.next=a,n&&(t.method="next",t.arg=void 0),!!n}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],c=l.completion;if("root"===l.tryLoc)return n("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(o&&i){if(this.prev<l.catchLoc)return n(l.catchLoc,!0);if(this.prev<l.finallyLoc)return n(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return n(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return n(l.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var c=l?l.completion:{};return c.type=e,c.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var n=a.completion;if("throw"===n.type){var r=n.arg;w(a)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:x(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(d.g)(),a=Object(o.a)(["user"]),i=Object(r.a)(a,2),v=i[0],j=i[1],x=Object(l.useState)([]),S=Object(r.a)(x,2),C=S[0],k=S[1],B=Object(l.useState)(""),D=Object(r.a)(B,2),L=D[0],_=D[1],P=Object(N.a)(L,500),G=Object(h.a)({mode:"onChange"}),T=G.register,I=G.handleSubmit,F=G.reset,A=G.formState,q=A.errors,M=(A.isDirty,A.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),R=function(){var e=Object(n.a)(O().mark((function e(a){var n,r,l,c,o,i;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.status=ie,a.branch=ke,a.IBO=_e,a.role=Ie,e.prev=4,n=JSON.stringify(a),e.next=8,Object(u.R)(n,null===re||void 0===re?void 0:re.id);case 8:m.b.success("User updated Successfully",{autoClose:3e3}),Ye(),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.message)?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(c=e.t0.response)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.code)&&(i=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),j("user",null,{path:"/"}),Object(u.S)(i).finally((function(){t.push("/user-pages/login-1")})));case 16:return e.prev=16,te(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),U=Object(l.useState)(0),V=Object(r.a)(U,2),Y=V[0],J=V[1],$=Object(g.a)("page"),z=Object(r.a)($,2),H=z[0],Z=z[1],K=Object(l.useState)(10),Q=Object(r.a)(K,1)[0],W=c.a.useState(!1),X=Object(r.a)(W,2),ee=X[0],te=X[1],ae=Object(l.useState)({}),ne=Object(r.a)(ae,2),re=ne[0],le=ne[1],ce=Object(l.useState)(0),oe=Object(r.a)(ce,2),ie=oe[0],se=oe[1],ue=Object(l.useState)([]),me=Object(r.a)(ue,2),de=me[0],ve=me[1],fe=Object(l.useState)(""),pe=Object(r.a)(fe,2),he=pe[0],be=pe[1],Ee=Object(l.useState)([]),ge=Object(r.a)(Ee,2),ye=ge[0],Ne=ge[1],we=Object(l.useState)(""),Oe=Object(r.a)(we,2),je=Oe[0],xe=Oe[1],Se=Object(l.useState)(""),Ce=Object(r.a)(Se,2),ke=Ce[0],Be=Ce[1],De=Object(l.useState)(""),Le=Object(r.a)(De,2),_e=Le[0],Pe=Le[1],Ge=Object(l.useState)(""),Te=Object(r.a)(Ge,2),Ie=Te[0],Fe=Te[1],Ae=Object(l.useState)(!0),qe=Object(r.a)(Ae,2),Me=qe[0],Re=qe[1];Object(l.useEffect)((function(){Ye()}),[H,Q,he,je]),Object(l.useEffect)((function(){Ye()}),[P]),Object(l.useEffect)((function(){Ue(),Ve()}),[]);var Ue=function(){var e=Object(n.a)(O().mark((function e(){var t;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.x)(5e3,1,"","branch");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,ve(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(n.a)(O().mark((function e(){var t;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.B)(5e3,1,"");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,Ne(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(n.a)(O().mark((function e(){var a,n,r,l,c,o;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Re(!0),e.prev=1,e.next=4,Object(u.I)(Q,+H+1,L,"user",he,je);case 4:return e.next=6,e.sent.data;case 6:a=e.sent,k(null===a||void 0===a?void 0:a.results),J(null===a||void 0===a?void 0:a.totalPages),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(c=l.data)||void 0===c?void 0:c.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),j("user",null,{path:"/"}),Object(u.S)(o).finally((function(){t.push("/user-pages/login-1")})));case 15:Re(!1);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}(),Je=function(){var e=Object(n.a)(O().mark((function e(t){var a,n;return O().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(E.a)(),n=JSON.stringify({password:a}),e.prev=2,e.next=5,Object(u.R)(n,t);case 5:m.b.success("Password generated and sended to user via Email successfully",{autoClose:3e3}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),m.b.error("Password generation failed, please try again later");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement(p.a,{show:ee,onHide:function(){te(!1),le({}),se(0),Be(""),Pe(""),Fe(""),F()},backdrop:"static",keyboard:!1},c.a.createElement(p.a.Header,{closeButton:!0},c.a.createElement(p.a.Title,null,"Update Client")),c.a.createElement(p.a.Body,null,c.a.createElement("div",{className:"row auth"},c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-sample",onSubmit:I(R)},c.a.createElement("p",{className:"card-description"}," Update Client "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Name"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"name",defaultValue:re.name},T("name",{required:!0}))),q&&q.name&&c.a.createElement("p",null,"name is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Address"," "),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"address",defaultValue:re.address},T("address",{required:!0}))),q&&q.address&&c.a.createElement("p",null,"address is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Contact No"),c.a.createElement("div",{className:"col-sm-8 contact_no"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"contactno",defaultValue:re.contactno},T("contactno",{required:!0,pattern:M}))),q&&q.contactno&&"required"===q.contactno.type&&c.a.createElement("p",null,"contact number is required field"),q&&q.contactno&&"pattern"===q.contactno.type&&c.a.createElement("p",null,"invalid phone number please use valid formate"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Email"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"email",defaultValue:re.email},T("email",{required:!0,pattern:/^\S+@\S+$/i}))),q&&q.email&&"required"===q.email.type&&c.a.createElement("p",null,"email is required field"),q&&q.email&&"pattern"===q.email.type&&c.a.createElement("p",null,"invalid email formate"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"status"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3",name:"status",onChange:function(e){var t;se(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||0)}},null===y.g||void 0===y.g?void 0:y.g.map((function(e){return c.a.createElement("option",{value:null===e||void 0===e?void 0:e.value,selected:+ie===+(null===e||void 0===e?void 0:e.value)},null===e||void 0===e?void 0:e.label)}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Search Branch"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;Be(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===de||void 0===de?void 0:de.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.name===ke,value:e.name},e.name))}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select IBO"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;Pe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===ye||void 0===ye?void 0:ye.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.name===_e,value:e.name},e.name))}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Role"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;Fe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===y.e||void 0===y.e?void 0:y.e.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.value===Ie,value:e.value},e.label))}))))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"AadharCard Number"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"aadhar_card_no",defaultValue:re.aadhar_card_no},T("aadhar_card_no",{required:!0}))),q&&q.aadhar_card_no&&c.a.createElement("p",null,"Aadharcard number is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"PanCard Number"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(b.a.Control,Object.assign({type:"text",name:"pan_card_no",defaultValue:re.pan_card_no},T("pan_card_no",{required:!0}))),q&&q.pan_card_no&&c.a.createElement("p",null,"PanCard number is required field"))))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},"Clients / Show Clients "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===v||void 0===v||null===(e=v.user)||void 0===e?void 0:e.role," Dashboard")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Show clients")))),c.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-6 col-form-label"},"Search Branch"),c.a.createElement("div",{className:"col-sm-6"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){Z(0),be(e.target.value)}},c.a.createElement("option",{selected:""===he,value:""},"Not Selected"),null===de||void 0===de?void 0:de.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.name===he,value:e.name},e.name))})))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(b.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-5 col-form-label"},"Search IBO"),c.a.createElement("div",{className:"col-sm-7"},c.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){Z(0),xe(e.target.value)}},c.a.createElement("option",{selected:""===je,value:""},"Not Selected"),null===ye||void 0===ye?void 0:ye.map((function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("option",{selected:e.name===je,value:e.name},e.name))})))))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"search-field d-none d-md-block"},c.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},c.a.createElement("div",{className:"input-group"},c.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},c.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),c.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Clients",value:L,onChange:function(e){var t;_(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),Z(0)}})))))),c.a.createElement("h4",{className:"card-title"},"Client list"),c.a.createElement("div",{className:"table-responsive"},c.a.createElement("table",{className:"table table-striped"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null," Name "),c.a.createElement("th",null," Contact no. "),c.a.createElement("th",null," Branch "),c.a.createElement("th",null," IBO "),c.a.createElement("th",null," Email "),c.a.createElement("th",null," Role "),c.a.createElement("th",null," Status "),c.a.createElement("th",null," Generate Password "),c.a.createElement("th",null," Edit "),c.a.createElement("th",null," Delete "))),c.a.createElement("tbody",null,Me?c.a.createElement(w.a,null):null===C||void 0===C?void 0:C.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,null===e||void 0===e?void 0:e.name),c.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),c.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),c.a.createElement("td",null,null===e||void 0===e?void 0:e.IBO),c.a.createElement("td",null,null===e||void 0===e?void 0:e.email),c.a.createElement("td",null,null===e||void 0===e?void 0:e.role),c.a.createElement("td",null,Object(y.a)(null===e||void 0===e?void 0:e.status)),c.a.createElement("td",null,c.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return Je(null===e||void 0===e?void 0:e.id)}},"Generate")),c.a.createElement("td",null,c.a.createElement("i",{onClick:function(){return t=e,F(),le(t),se((null===t||void 0===t?void 0:t.status)||0),Be(null===t||void 0===t?void 0:t.branch),Pe(null===t||void 0===t?void 0:t.IBO),Fe(null===t||void 0===t?void 0:t.role),void te(!0);var t},className:"mdi mdi-lead-pencil"})),c.a.createElement("td",null,c.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void f.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(u.u)(t).finally((function(){return Ye()})),f.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===f.a.DismissReason.cancel&&f.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"}," ")))})))),c.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),Z(e.selected)},pageRangeDisplayed:5,pageCount:Y,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:H}))))))}}}]);
//# sourceMappingURL=16.74698ff3.chunk.js.map