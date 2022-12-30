/*! For license information please see 57.493e4b81.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[57],{664:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(12),l=n(10),o=n(0),i=n.n(o),c=n(57),u=n(97),s=n(33),d=n(99),m=n(190),v=n(15),f=n(11),p=n(192),h=n(67),b=n(98),g=n.n(b),E=n(58),y=n.n(E),O=n(45),w=n(563),N=["label","options","asyncSelect","loadOptions","components","placeholder","fixedHeight","onSelect","defaultOptions"],j=function(e){e.label,e.options,e.asyncSelect;var t=e.loadOptions,n=e.components,a=e.placeholder,r=(e.fixedHeight,e.onSelect),c=e.defaultOptions,u=void 0===c?[]:c,s=Object(O.a)(e,N),d=Object(o.useRef)(),m=Object(o.useRef)(),v=Object(o.useState)(),f=Object(l.a)(v,2),p=f[0],h=f[1],b=function(e){console.info("inputvalue++ -> ",e),h(e),r(e)},g=function(){m.current.select.blur()};return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{ref:d}),i.a.createElement(w.a,Object.assign({ref:m},s,{value:p,components:n||null,loadOptions:t||function(){return null},placeholder:a||"Select...",searchPromptText:"Start Typing",autoload:!0,isSearchable:!0,searchable:!0,cacheOptions:!0,onChange:b,onInputChange:function(e,t){e||"input-change"!==t.action||b(null)},onFocus:function(){p&&(m.current.state.inputValue=p.label,m.current.select.state.inputValue=p.label,m.current.handleInputChange(p.label))},onKeyDown:function(e){13===e.keyCode&&g()},onMenuClose:g,defaultOptions:u})))};function x(){x=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},r=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",o=a.toStringTag||"@@toStringTag";function i(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,n){return e[t]=n}}function c(e,t,n,a){var r=t&&t.prototype instanceof d?t:d,l=Object.create(r.prototype),o=new N(a||[]);return l._invoke=function(e,t,n){var a="suspendedStart";return function(r,l){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===r)throw l;return k()}for(n.method=r,n.arg=l;;){var o=n.delegate;if(o){var i=y(o,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===a)throw a="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);a="executing";var c=u(e,t,n);if("normal"===c.type){if(a=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(a="completed",n.method="throw",n.arg=c.arg)}}}(e,n,o),l}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(S){return{type:"throw",arg:S}}}e.wrap=c;var s={};function d(){}function m(){}function v(){}var f={};i(f,r,(function(){return this}));var p=Object.getPrototypeOf,h=p&&p(p(j([])));h&&h!==t&&n.call(h,r)&&(f=h);var b=v.prototype=d.prototype=Object.create(f);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var a;this._invoke=function(r,l){function o(){return new t((function(a,o){!function a(r,l,o,i){var c=u(e[r],e,l);if("throw"!==c.type){var s=c.arg,d=s.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,o,i)}),(function(e){a("throw",e,o,i)})):t.resolve(d).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,i)}))}i(c.arg)}(r,l,a,o)}))}return a=a?a.then(o,o):o()}}function y(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,y(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var a=u(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,s;var r=a.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,l=function t(){for(;++a<e.length;)if(n.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,i(b,"constructor",v),i(v,"constructor",m),m.displayName=i(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,i(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(E.prototype),i(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,a,r,l){void 0===l&&(l=Promise);var o=new E(c(t,n,a,r),l);return e.isGeneratorFunction(n)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(b),i(b,o,"Generator"),i(b,r,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var a=t.pop();if(a in e)return n.value=a,n.done=!1,n}return n.done=!0,n}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(n,a){return o.type="throw",o.arg=e,t.next=n,a&&(t.method="next",t.arg=void 0),!!a}for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r],o=l.completion;if("root"===l.tryLoc)return a("end");if(l.tryLoc<=this.prev){var i=n.call(l,"catchLoc"),c=n.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return a(l.catchLoc,!0);if(this.prev<l.finallyLoc)return a(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return a(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return a(l.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var r=this.tryEntries[a];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var l=r;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,s):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var a=n.completion;if("throw"===a.type){var r=a.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:j(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},e}t.default=function(){var e,t,n,b=Object(f.g)(),E=Object(p.a)(["user"]),O=Object(l.a)(E,2),w=O[0],N=O[1],k=i.a.useState(!1),S=Object(l.a)(k,2),L=S[0],C=S[1],T=Object(o.useState)(0),A=Object(l.a)(T,2),_=A[0],P=A[1],D=Object(o.useState)(0),B=Object(l.a)(D,2),G=(B[0],B[1]),I=Object(o.useState)(0),V=Object(l.a)(I,2),F=V[0],Y=V[1],R=Object(d.a)("page"),U=Object(l.a)(R,2),q=U[0],H=U[1],J=Object(d.a)("page"),Z=Object(l.a)(J,2),z=Z[0],K=Z[1],M=Object(d.a)("page"),X=Object(l.a)(M,2),Q=(X[0],X[1],Object(o.useState)(20)),W=Object(l.a)(Q,1)[0],$=Object(o.useState)([]),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ae=Object(o.useState)([]),re=Object(l.a)(ae,2),le=re[0],oe=re[1],ie=Object(o.useState)([]),ce=Object(l.a)(ie,2),ue=ce[0],se=ce[1],de=Object(o.useState)(!0),me=Object(l.a)(de,2),ve=me[0],fe=me[1],pe=Object(o.useState)(),he=Object(l.a)(pe,2),be=he[0],ge=he[1],Ee=Object(o.useState)([]),ye=Object(l.a)(Ee,2),Oe=ye[0],we=ye[1],Ne=Object(o.useState)(""),je=Object(l.a)(Ne,2),xe=je[0],ke=je[1],Se=function(){C(!1),Be()};Object(o.useEffect)((function(){Ae(),Te()}),[q,W]),Object(o.useEffect)((function(){var e=setTimeout((function(){Ae()}),5e3);return function(){return clearTimeout(e)}}),[]);var Le=function(e){var t=JSON.stringify({is_delete:"true"});y.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(n){var a;if(n.value)return"admin"!==(null===w||void 0===w||null===(a=w.user)||void 0===a?void 0:a.role)?(Object(v.Xb)(e,t).finally((function(){return Ae()})),y.a.fire("Deleted!","Your imaginary file has been deleted.","success")):(Object(v.H)(e).finally((function(){return Ae()})),y.a.fire("Deleted!","Your imaginary file has been deleted.","success"));n.dismiss===y.a.DismissReason.cancel&&y.a.fire("Cancelled","Your imaginary file is safe :)","error")}))},Ce=function(e){b.push({pathname:"/viewNotification",search:"?"+new URLSearchParams({id:e}).toString()})},Te=function(){var e=Object(r.a)(x().mark((function e(){var t,n,r,l,o,i=arguments;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=i.length>0&&void 0!==i[0]?i[0]:"",e.next=3,Object(v.T)(500,1,r);case 3:return l=e.sent,o=l.data,we(null===o||void 0===o||null===(t=o.results)||void 0===t?void 0:t.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))),e.abrupt("return",null===o||void 0===o||null===(n=o.results)||void 0===n?void 0:n.map((function(e){return Object(a.a)(Object(a.a)({},e),{},{value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})})));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(r.a)(x().mark((function e(){var t,n,a,r,l,o,i,c,u,d,m,f,p,h,g,E,y,O,j,k,S,L,C,T,A,_,D,B,I,V,F,R,U;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(fe(!0),e.prev=1,"admin"!==(null===w||void 0===w||null===(n=w.user)||void 0===n?void 0:n.role)){e.next=11;break}return e.next=5,Object(v.kb)("1",W,+q+1);case 5:return e.next=7,e.sent.data;case 7:i=e.sent,ne(null===(c=i)||void 0===c?void 0:c.results),e.next=36;break;case 11:if("IBO"!==(null===w||void 0===w||null===(a=w.user)||void 0===a?void 0:a.role)){e.next=20;break}return e.next=14,Object(v.lb)(1,"all",W,+q+1);case 14:return e.next=16,e.sent.data;case 16:i=e.sent,ne(null===(u=i)||void 0===u||null===(d=u.results)||void 0===d?void 0:d.filter((function(e){return"false"===e.is_delete}))),e.next=36;break;case 20:if("branch"!==(null===w||void 0===w||null===(r=w.user)||void 0===r?void 0:r.role)){e.next=29;break}return e.next=23,Object(v.lb)(1,"all",W,+q+1);case 23:return e.next=25,e.sent.data;case 25:i=e.sent,ne(null===(m=i)||void 0===m||null===(f=m.results)||void 0===f?void 0:f.filter((function(e){return"false"===e.is_delete}))),e.next=36;break;case 29:if("user"!==(null===w||void 0===w||null===(l=w.user)||void 0===l?void 0:l.role)){e.next=36;break}return e.next=32,Object(v.lb)(1,"all",W,+q+1);case 32:return e.next=34,e.sent.data;case 34:i=e.sent,ne(null===(p=i)||void 0===p||null===(h=p.results)||void 0===h?void 0:h.filter((function(e){return"false"===e.is_delete})));case 36:P(null===(o=i)||void 0===o?void 0:o.totalPages),e.next=43;break;case 39:e.prev=39,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(g=e.t0.response)||void 0===g||null===(E=g.data)||void 0===E?void 0:E.message)?s.b.error(e.t0.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(y=e.t0.response)||void 0===y||null===(O=y.data)||void 0===O?void 0:O.code)&&(j=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),N("user",null,{path:"/"}),Object(v.ec)(j).finally((function(){b.push("/user-pages/login-1")})));case 43:if("admin"===(null===w||void 0===w||null===(t=w.user)||void 0===t?void 0:t.role)){e.next=71;break}return e.prev=44,"IBO"===(null===w||void 0===w||null===(S=w.user)||void 0===S?void 0:S.role)?k="ibo":"branch"===(null===w||void 0===w||null===(L=w.user)||void 0===L?void 0:L.role)?k="branch":"user"===(null===w||void 0===w||null===(C=w.user)||void 0===C?void 0:C.role)&&(k="user"),e.next=48,Object(v.lb)(1,k,W,+z+1);case 48:return e.next=50,e.sent.data;case 50:A=e.sent,oe(null===A||void 0===A||null===(T=A.results)||void 0===T?void 0:T.filter((function(e){return"false"===e.is_delete}))),Y(null===A||void 0===A?void 0:A.totalPages),e.next=58;break;case 55:e.prev=55,e.t1=e.catch(44),(null===e.t1||void 0===e.t1||null===(_=e.t1.response)||void 0===_||null===(D=_.data)||void 0===D?void 0:D.message)?s.b.error(e.t1.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com");case 58:return e.prev=58,e.next=61,Object(v.ob)(null===w||void 0===w||null===(B=w.user)||void 0===B?void 0:B.id,W,+z);case 61:return e.next=63,e.sent.data;case 63:F=e.sent,se(null===F||void 0===F||null===(I=F.results)||void 0===I||null===(V=I.results)||void 0===V?void 0:V.filter((function(e){return"false"===e.is_delete}))),G(null===F||void 0===F?void 0:F.totalPages),e.next=71;break;case 68:e.prev=68,e.t2=e.catch(58),(null===e.t2||void 0===e.t2||null===(R=e.t2.response)||void 0===R||null===(U=R.data)||void 0===U?void 0:U.message)?s.b.error(e.t2.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com");case 71:fe(!1);case 72:case"end":return e.stop()}}),e,null,[[1,39],[44,55],[58,68]])})));return function(){return e.apply(this,arguments)}}(),_e=Object(u.a)({mode:"onChange"}),Pe=_e.register,De=_e.handleSubmit,Be=_e.reset,Ge=_e.formState,Ie=Ge.errors,Ve=(Ge.isDirty,Ge.isValid,(0,_e.getValues)()),Fe=function(){var e=Object(r.a)(x().mark((function e(t){var n,a,r;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Se(),n=new FormData,!be){e.next=8;break}return n.append("file",be),e.next=6,Object(v.j)(n);case 6:(a=e.sent).error&&s.b.error(a.error.message);case 8:return e.prev=8,t.attachment=a?a.secure_url:"",t.user=null===w||void 0===w||null===(r=w.user)||void 0===r?void 0:r.id,t.type="all",t.status=1,"specificUser"===(null===t||void 0===t?void 0:t.targetAudience)&&(t.user=xe),e.next=16,Object(v.s)(t);case 16:e.sent,s.b.success("Notification Added successfully"),Ae(),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?s.b.error(e.t0.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com");case 24:case"end":return e.stop()}}),e,null,[[8,21]])})));return function(t){return e.apply(this,arguments)}}(),Ye=function(){var e=Object(r.a)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){return e(Re(t))})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Re=function(){var e=Object(r.a)(x().mark((function e(t){return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Te(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement(c.a,{show:L,onHide:Se,backdrop:"static",keyboard:!1},i.a.createElement(c.a.Header,{closeButton:!0},i.a.createElement(c.a.Title,null,"Send Notification")),i.a.createElement(c.a.Body,null,i.a.createElement("div",{className:"row auth"},i.a.createElement("div",{className:"col-12 grid-margin"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("form",{className:"form-sample",onSubmit:De(Fe)},i.a.createElement("p",{className:"card-description"}," Send Notification "),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-12"},i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Title"),i.a.createElement("div",{className:"col-sm-9"},i.a.createElement(m.a.Control,Object.assign({type:"text",name:"title"},Pe("title",{required:!0}))),Ie&&Ie.title&&i.a.createElement("p",null,"Title is required field"))),i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select targetAudience"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("select",Object.assign({name:"targetAudience",className:"form-control form-control-lg"},Pe("targetAudience",{required:!0})),i.a.createElement("option",{value:"all"},"All"),i.a.createElement("option",{value:"branch"},"Branch"),i.a.createElement("option",{value:"ibo"},"IBO"),i.a.createElement("option",{value:"client"},"Client"),i.a.createElement("option",{value:"specificUser"},"Specific User")))),"specificUser"===(null===Ve||void 0===Ve?void 0:Ve.targetAudience)&&i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select user to target"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(j,{name:"addressLookup",className:"addressLookupContainer",label:"Address Lookup",asyncSelect:!0,loadOptions:Ye,onSelect:function(e){return ke(null===e||void 0===e?void 0:e.value)},defaultOptions:Oe}))),i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement(m.a.Control,Object.assign({type:"text",name:"content"},Pe("content",{required:!0}))),Ie&&Ie.content&&i.a.createElement("p",null,"Content is required field"))),i.a.createElement(m.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-4 col-form-label"},"Notification Image"," "),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("input",{type:"file",id:"input-id",className:"d-none",onChange:function(e){var t;ge(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0])}}),i.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===be||void 0===be||be.name," btn-primary"))},(null===be||void 0===be?void 0:be.name)?null===be||void 0===be?void 0:be.name:"Upload Image"))))),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Send"))))))))),i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Notification / All "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"All")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row",style:{marginBottom:"14px"}},i.a.createElement("div",{className:"col-md-3"},"admin"===(null===w||void 0===w||null===(e=w.user)||void 0===e?void 0:e.role)&&i.a.createElement("button",{className:"btn btn-gradient-primary btn-lg",type:"button",onClick:function(){return C(!0)}},"Send Notification")),i.a.createElement("div",{className:"col-md-9"})),i.a.createElement("h4",{className:"card-title"}),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Title "),i.a.createElement("th",null," content "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Target Audience "),i.a.createElement("th",null," View "),i.a.createElement("th",null," Action "))),i.a.createElement("tbody",null,ve?i.a.createElement(h.a,null):null===te||void 0===te?void 0:te.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",null,null===e||void 0===e?void 0:e.title),i.a.createElement("td",{className:"max-width-200"},null===e||void 0===e?void 0:e.content),i.a.createElement("td",null,null===e||void 0===e?void 0:e.type),i.a.createElement("td",null,null===e||void 0===e?void 0:e.targetAudience),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){Ce(null===e||void 0===e?void 0:e.id)}},"View")),i.a.createElement("td",null,i.a.createElement("td",null,i.a.createElement("i",{onClick:function(){return Le(null===e||void 0===e?void 0:e.id)},className:"mdi mdi-delete"})))))})))),i.a.createElement(g.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){H(e.selected)},pageRangeDisplayed:5,pageCount:_,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:q}))))),"admin"!==(null===w||void 0===w||null===(t=w.user)||void 0===t?void 0:t.role)&&"0"!==le.length&&i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},null===w||void 0===w?void 0:w.user.role," Notification list"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Title "),i.a.createElement("th",null," content "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Target Audience "),i.a.createElement("th",null," View "),i.a.createElement("th",null," Action "))),i.a.createElement("tbody",null,ve?i.a.createElement(h.a,null):null===le||void 0===le?void 0:le.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,null===e||void 0===e?void 0:e.title),i.a.createElement("td",null,null===e||void 0===e?void 0:e.content),i.a.createElement("td",null,null===e||void 0===e?void 0:e.type),i.a.createElement("td",null,null===e||void 0===e?void 0:e.targetAudience),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){Ce(null===e||void 0===e?void 0:e.id)}},"View")),i.a.createElement("td",null,i.a.createElement("td",null,i.a.createElement("i",{onClick:function(){return Le(null===e||void 0===e?void 0:e.id)},className:"mdi mdi-delete"}))))})))),i.a.createElement(g.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){K(e.selected)},pageRangeDisplayed:5,pageCount:F,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:z}))))),"admin"!==(null===w||void 0===w||null===(n=w.user)||void 0===n?void 0:n.role)&&"0"!==ue.length&&i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"card-title"},"Personalize "),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null," Title "),i.a.createElement("th",null," content "),i.a.createElement("th",null," Type "),i.a.createElement("th",null," Target Audience "),i.a.createElement("th",null," View "),i.a.createElement("th",null," Action "))),i.a.createElement("tbody",null,ve?i.a.createElement(h.a,null):null===ue||void 0===ue?void 0:ue.map((function(e){return i.a.createElement("tr",null,i.a.createElement("td",null,null===e||void 0===e?void 0:e.title),i.a.createElement("td",null,null===e||void 0===e?void 0:e.content),i.a.createElement("td",null,null===e||void 0===e?void 0:e.type),i.a.createElement("td",null,null===e||void 0===e?void 0:e.targetAudience),i.a.createElement("td",null,i.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){Ce(null===e||void 0===e?void 0:e.id)}},"View")),i.a.createElement("td",null,i.a.createElement("td",null,i.a.createElement("i",{onClick:function(){return Le(null===e||void 0===e?void 0:e.id)},className:"mdi mdi-delete"}))))})))))))))}}}]);
//# sourceMappingURL=57.493e4b81.chunk.js.map