/*! For license information please see 38.1be82ffc.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[38],{174:function(e,a,t){"use strict";var r=t(1),l=t(3),c=t(5),n=t.n(c),s=t(0),o=t.n(s),i=t(6),m=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.as,u=void 0===s?"div":s,f=Object(l.a)(e,m),p=Object(i.a)(t,"col"),b=[],h=[];return d.forEach((function(e){var a,t,r,l=f[e];if(delete f[e],"object"===typeof l&&null!=l){var c=l.span;a=void 0===c||c,t=l.offset,r=l.order}else a=l;var n="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+p+n:""+p+n+"-"+a),null!=r&&h.push("order"+n+"-"+r),null!=t&&h.push("offset"+n+"-"+t)})),b.length||b.push(p),o.a.createElement(u,Object(r.a)({},f,{ref:a,className:n.a.apply(void 0,[c].concat(b,h))}))}));u.displayName="Col",a.a=u},179:function(e,a,t){"use strict";var r=t(1),l=t(3),c=t(5),n=t.n(c),s=t(0),o=t.n(s),i=(t(112),t(4)),m=t.n(i),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=o.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"div":t,s=e.className,i=e.type,m=void 0===i?"valid":i,u=e.tooltip,f=void 0!==u&&u,p=Object(l.a)(e,d);return o.a.createElement(c,Object(r.a)({},p,{ref:a,className:n()(s,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=u;var p=f,b=o.a.createContext({controlId:void 0}),h=t(6),v=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],E=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,f=e.isValid,p=void 0!==f&&f,E=e.isInvalid,N=void 0!==E&&E,y=e.isStatic,k=e.as,g=void 0===k?"input":k,x=Object(l.a)(e,v),w=Object(s.useContext)(b),O=w.controlId,j=w.custom?[i,"custom-control-input"]:[c,"form-check-input"],P=j[0],C=j[1];return c=Object(h.a)(P,C),o.a.createElement(g,Object(r.a)({},x,{ref:a,type:u,id:t||O,className:n()(m,c,p&&"is-valid",N&&"is-invalid",y&&"position-static")}))}));E.displayName="FormCheckInput";var N=E,y=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,i=e.className,m=e.htmlFor,d=Object(l.a)(e,y),u=Object(s.useContext)(b),f=u.controlId,p=u.custom?[c,"custom-control-label"]:[t,"form-check-label"],v=p[0],E=p[1];return t=Object(h.a)(v,E),o.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||f,className:n()(i,t)}))}));k.displayName="FormCheckLabel";var g=k,x=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],w=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,f=void 0!==u&&u,v=e.isValid,E=void 0!==v&&v,y=e.isInvalid,k=void 0!==y&&y,w=e.feedbackTooltip,O=void 0!==w&&w,j=e.feedback,P=e.className,C=e.style,F=e.title,I=void 0===F?"":F,L=e.type,q=void 0===L?"checkbox":L,G=e.label,S=e.children,R=e.custom,T=e.as,V=void 0===T?"input":T,_=Object(l.a)(e,x),A="switch"===q||R,B=A?[i,"custom-control"]:[c,"form-check"],M=B[0],Y=B[1];c=Object(h.a)(M,Y);var z=Object(s.useContext)(b).controlId,D=Object(s.useMemo)((function(){return{controlId:t||z,custom:A}}),[z,A,t]),J=A||null!=G&&!1!==G&&!S,H=o.a.createElement(N,Object(r.a)({},_,{type:"switch"===q?"checkbox":q,ref:a,isValid:E,isInvalid:k,isStatic:!J,disabled:f,as:V}));return o.a.createElement(b.Provider,{value:D},o.a.createElement("div",{style:C,className:n()(P,c,A&&"custom-"+q,d&&c+"-inline")},S||o.a.createElement(o.a.Fragment,null,H,J&&o.a.createElement(g,{title:I},G),(E||k)&&o.a.createElement(p,{type:E?"valid":"invalid",tooltip:O},j))))}));w.displayName="FormCheck",w.Input=N,w.Label=g;var O=w,j=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,f=e.lang,p=e.as,v=void 0===p?"input":p,E=Object(l.a)(e,j),N=Object(s.useContext)(b),y=N.controlId,k=N.custom?[i,"custom-file-input"]:[c,"form-control-file"],g=k[0],x=k[1];return c=Object(h.a)(g,x),o.a.createElement(v,Object(r.a)({},E,{ref:a,id:t||y,type:"file",lang:f,className:n()(m,c,d&&"is-valid",u&&"is-invalid")}))}));P.displayName="FormFileInput";var C=P,F=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.bsCustomPrefix,i=e.className,m=e.htmlFor,d=Object(l.a)(e,F),u=Object(s.useContext)(b),f=u.controlId,p=u.custom?[c,"custom-file-label"]:[t,"form-file-label"],v=p[0],E=p[1];return t=Object(h.a)(v,E),o.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||f,className:n()(i,t),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var L=I,q=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],G=o.a.forwardRef((function(e,a){var t=e.id,c=e.bsPrefix,i=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,f=void 0!==u&&u,v=e.isInvalid,E=void 0!==v&&v,N=e.feedbackTooltip,y=void 0!==N&&N,k=e.feedback,g=e.className,x=e.style,w=e.label,O=e.children,j=e.custom,P=e.lang,F=e["data-browse"],I=e.as,G=void 0===I?"div":I,S=e.inputAs,R=void 0===S?"input":S,T=Object(l.a)(e,q),V=j?[i,"custom"]:[c,"form-file"],_=V[0],A=V[1];c=Object(h.a)(_,A);var B=Object(s.useContext)(b).controlId,M=Object(s.useMemo)((function(){return{controlId:t||B,custom:j}}),[B,j,t]),Y=null!=w&&!1!==w&&!O,z=o.a.createElement(C,Object(r.a)({},T,{ref:a,isValid:f,isInvalid:E,disabled:d,as:R,lang:P}));return o.a.createElement(b.Provider,{value:M},o.a.createElement(G,{style:x,className:n()(g,c,j&&"custom-file")},O||o.a.createElement(o.a.Fragment,null,j?o.a.createElement(o.a.Fragment,null,z,Y&&o.a.createElement(L,{"data-browse":F},w)):o.a.createElement(o.a.Fragment,null,Y&&o.a.createElement(L,null,w),z),(f||E)&&o.a.createElement(p,{type:f?"valid":"invalid",tooltip:y},k))))}));G.displayName="FormFile",G.Input=C,G.Label=L;var S=G,R=(t(50),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),T=o.a.forwardRef((function(e,a){var t,c,i=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,f=e.htmlSize,p=e.id,v=e.className,E=e.isValid,N=void 0!==E&&E,y=e.isInvalid,k=void 0!==y&&y,g=e.plaintext,x=e.readOnly,w=e.custom,O=e.as,j=void 0===O?"input":O,P=Object(l.a)(e,R),C=Object(s.useContext)(b).controlId,F=w?[m,"custom"]:[i,"form-control"],I=F[0],L=F[1];if(i=Object(h.a)(I,L),g)(c={})[i+"-plaintext"]=!0,t=c;else if("file"===d){var q;(q={})[i+"-file"]=!0,t=q}else if("range"===d){var G;(G={})[i+"-range"]=!0,t=G}else if("select"===j&&w){var S;(S={})[i+"-select"]=!0,S[i+"-select-"+u]=u,t=S}else{var T;(T={})[i]=!0,T[i+"-"+u]=u,t=T}return o.a.createElement(j,Object(r.a)({},P,{type:d,size:f,ref:a,readOnly:x,id:p||C,className:n()(v,t,N&&"is-valid",k&&"is-invalid")}))}));T.displayName="FormControl";var V=Object.assign(T,{Feedback:p}),_=["bsPrefix","className","children","controlId","as"],A=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,i=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,f=Object(l.a)(e,_);t=Object(h.a)(t,"form-group");var p=Object(s.useMemo)((function(){return{controlId:m}}),[m]);return o.a.createElement(b.Provider,{value:p},o.a.createElement(u,Object(r.a)({},f,{ref:a,className:n()(c,t)}),i))}));A.displayName="FormGroup";var B=A,M=t(174),Y=["as","bsPrefix","column","srOnly","className","htmlFor"],z=o.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"label":t,i=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,f=e.htmlFor,p=Object(l.a)(e,Y),v=Object(s.useContext)(b).controlId;i=Object(h.a)(i,"form-label");var E="col-form-label";"string"===typeof m&&(E=E+" "+E+"-"+m);var N=n()(u,i,d&&"sr-only",m&&E);return f=f||v,m?o.a.createElement(M.a,Object(r.a)({ref:a,as:"label",className:N,htmlFor:f},p)):o.a.createElement(c,Object(r.a)({ref:a,className:N,htmlFor:f},p))}));z.displayName="FormLabel",z.defaultProps={column:!1,srOnly:!1};var D=z,J=["bsPrefix","className","as","muted"],H=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.className,s=e.as,i=void 0===s?"small":s,m=e.muted,d=Object(l.a)(e,J);return t=Object(h.a)(t,"form-text"),o.a.createElement(i,Object(r.a)({},d,{ref:a,className:n()(c,t,m&&"text-muted")}))}));H.displayName="FormText";var K=H,U=o.a.forwardRef((function(e,a){return o.a.createElement(O,Object(r.a)({},e,{ref:a,type:"switch"}))}));U.displayName="Switch",U.Input=O.Input,U.Label=O.Label;var W=U,Q=t(53),X=["bsPrefix","inline","className","validated","as"],Z=Object(Q.a)("form-row"),$=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.inline,s=e.className,i=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(l.a)(e,X);return t=Object(h.a)(t,"form"),o.a.createElement(d,Object(r.a)({},u,{ref:a,className:n()(s,i&&"was-validated",c&&t+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=Z,$.Group=B,$.Control=V,$.Check=O,$.File=S,$.Switch=W,$.Label=D,$.Text=K;a.a=$},493:function(e,a,t){"use strict";t.r(a);var r=t(49),l=t(36),c=t(0),n=t.n(c),s=t(173),o=t(179),i=t(169);function m(){m=function(){return e};var e={},a=Object.prototype,t=a.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},l=r.iterator||"@@iterator",c=r.asyncIterator||"@@asyncIterator",n=r.toStringTag||"@@toStringTag";function s(e,a,t){return Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}),e[a]}try{s({},"")}catch(P){s=function(e,a,t){return e[a]=t}}function o(e,a,t,r){var l=a&&a.prototype instanceof u?a:u,c=Object.create(l.prototype),n=new w(r||[]);return c._invoke=function(e,a,t){var r="suspendedStart";return function(l,c){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===l)throw c;return j()}for(t.method=l,t.arg=c;;){var n=t.delegate;if(n){var s=k(n,t);if(s){if(s===d)continue;return s}}if("next"===t.method)t.sent=t._sent=t.arg;else if("throw"===t.method){if("suspendedStart"===r)throw r="completed",t.arg;t.dispatchException(t.arg)}else"return"===t.method&&t.abrupt("return",t.arg);r="executing";var o=i(e,a,t);if("normal"===o.type){if(r=t.done?"completed":"suspendedYield",o.arg===d)continue;return{value:o.arg,done:t.done}}"throw"===o.type&&(r="completed",t.method="throw",t.arg=o.arg)}}}(e,t,n),c}function i(e,a,t){try{return{type:"normal",arg:e.call(a,t)}}catch(P){return{type:"throw",arg:P}}}e.wrap=o;var d={};function u(){}function f(){}function p(){}var b={};s(b,l,(function(){return this}));var h=Object.getPrototypeOf,v=h&&h(h(O([])));v&&v!==a&&t.call(v,l)&&(b=v);var E=p.prototype=u.prototype=Object.create(b);function N(e){["next","throw","return"].forEach((function(a){s(e,a,(function(e){return this._invoke(a,e)}))}))}function y(e,a){var r;this._invoke=function(l,c){function n(){return new a((function(r,n){!function r(l,c,n,s){var o=i(e[l],e,c);if("throw"!==o.type){var m=o.arg,d=m.value;return d&&"object"==typeof d&&t.call(d,"__await")?a.resolve(d.__await).then((function(e){r("next",e,n,s)}),(function(e){r("throw",e,n,s)})):a.resolve(d).then((function(e){m.value=e,n(m)}),(function(e){return r("throw",e,n,s)}))}s(o.arg)}(l,c,r,n)}))}return r=r?r.then(n,n):n()}}function k(e,a){var t=e.iterator[a.method];if(void 0===t){if(a.delegate=null,"throw"===a.method){if(e.iterator.return&&(a.method="return",a.arg=void 0,k(e,a),"throw"===a.method))return d;a.method="throw",a.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=i(t,e.iterator,a.arg);if("throw"===r.type)return a.method="throw",a.arg=r.arg,a.delegate=null,d;var l=r.arg;return l?l.done?(a[e.resultName]=l.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,d):l:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,d)}function g(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function x(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function O(e){if(e){var a=e[l];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,c=function a(){for(;++r<e.length;)if(t.call(e,r))return a.value=e[r],a.done=!1,a;return a.value=void 0,a.done=!0,a};return c.next=c}}return{next:j}}function j(){return{value:void 0,done:!0}}return f.prototype=p,s(E,"constructor",p),s(p,"constructor",f),f.displayName=s(p,n,"GeneratorFunction"),e.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===f||"GeneratorFunction"===(a.displayName||a.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,s(e,n,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},N(y.prototype),s(y.prototype,c,(function(){return this})),e.AsyncIterator=y,e.async=function(a,t,r,l,c){void 0===c&&(c=Promise);var n=new y(o(a,t,r,l),c);return e.isGeneratorFunction(t)?n:n.next().then((function(e){return e.done?e.value:n.next()}))},N(E),s(E,n,"Generator"),s(E,l,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var a=[];for(var t in e)a.push(t);return a.reverse(),function t(){for(;a.length;){var r=a.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=O,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var a in this)"t"===a.charAt(0)&&t.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function r(t,r){return n.type="throw",n.arg=e,a.next=t,r&&(a.method="next",a.arg=void 0),!!r}for(var l=this.tryEntries.length-1;l>=0;--l){var c=this.tryEntries[l],n=c.completion;if("root"===c.tryLoc)return r("end");if(c.tryLoc<=this.prev){var s=t.call(c,"catchLoc"),o=t.call(c,"finallyLoc");if(s&&o){if(this.prev<c.catchLoc)return r(c.catchLoc,!0);if(this.prev<c.finallyLoc)return r(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return r(c.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return r(c.finallyLoc)}}}},abrupt:function(e,a){for(var r=this.tryEntries.length-1;r>=0;--r){var l=this.tryEntries[r];if(l.tryLoc<=this.prev&&t.call(l,"finallyLoc")&&this.prev<l.finallyLoc){var c=l;break}}c&&("break"===e||"continue"===e)&&c.tryLoc<=a&&a<=c.finallyLoc&&(c=null);var n=c?c.completion:{};return n.type=e,n.arg=a,c?(this.method="next",this.next=c.finallyLoc,d):this.complete(n)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),d},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.finallyLoc===e)return this.complete(t.completion,t.afterLoc),x(t),d}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var t=this.tryEntries[a];if(t.tryLoc===e){var r=t.completion;if("throw"===r.type){var l=r.arg;x(t)}return l}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,t){return this.delegate={iterator:O(e),resultName:a,nextLoc:t},"next"===this.method&&(this.arg=void 0),d}},e}a.default=function(){var e,a,t=Object(i.a)(["user"]),c=Object(l.a)(t,2),d=c[0],u=(c[1],Object(s.a)({mode:"onChange"})),f=u.register,p=u.handleSubmit,b=u.formState,h=b.errors,v=(b.isDirty,b.isValid,function(){var e=Object(r.a)(m().mark((function e(a){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:alert("hi");case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}());return n.a.createElement("div",null,n.a.createElement("div",{className:"page-header"},n.a.createElement("h3",{className:"page-title"},"Opening Form / Colleteral Plan "),n.a.createElement("nav",{"aria-label":"breadcrumb"},n.a.createElement("ol",{className:"breadcrumb"},n.a.createElement("li",{className:"breadcrumb-item"},n.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Invesment")),n.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Colleteral Plan")))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 grid-margin"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"text-right"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-right"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select City"),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("select",{className:"form-control"},n.a.createElement("option",null,"Surat"),n.a.createElement("option",null,"Baroda"),n.a.createElement("option",null,"Vapi"),n.a.createElement("option",null,"Ahmedabad"))))))),n.a.createElement("h4",{className:"card-title"},"Colleteral Plan"),n.a.createElement("form",{className:"form-sample",onSubmit:p(v)},n.a.createElement("p",{className:"card-description"}," Personal info "),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement(o.a.Control,Object.assign({type:"text",name:"name",placeholder:"Enter Your Name"},f("name",{required:!0}))),h&&h.name&&n.a.createElement("p",null,"name is required field"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),n.a.createElement("div",{className:"col-sm-10"},n.a.createElement(o.a.Control,Object.assign({type:"text",name:"address",placeholder:"Enter Your Address"},f("address",{required:!0}))),h&&h.address&&n.a.createElement("p",null,"address is required field"))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Mobile"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(o.a.Control,Object.assign({type:"text",name:"mobile",defaultValue:null===d||void 0===d||null===(e=d.user)||void 0===e?void 0:e.contactno},f("mobile",{required:!0})))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Branch"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(o.a.Control,Object.assign({type:"text",name:"branch"},f("branch",{required:!0}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),n.a.createElement("div",{className:"col-sm-9"},n.a.createElement(o.a.Control,Object.assign({type:"text",name:"email",defaultValue:null===d||void 0===d||null===(a=d.user)||void 0===a?void 0:a.email},f("email",{required:!0}))))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3  col-form-label"},"KYC"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"pancard"},f("pancard",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Pan card"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"adhaarcard"},f("adhaarcard",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Adhaar card"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"bankpassbook"},f("bankpassbook",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Bank Passbook"))))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:""},n.a.createElement("label",{className:"label"},n.a.createElement("input",Object.assign({type:"file",className:"input",name:"file",multiple:!0},f("file",{required:!0}))),h&&h.file&&n.a.createElement("p",null," file is required field")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Mobile Type"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"android"},f("android",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Android"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"iphone"},f("iphone",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"IPhone")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Occupation"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"student"},f("student",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Student"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"business"},f("android",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Business"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"job"},f("job",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Job")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Occupation"),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"stock"},f("stock",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Stock"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"currency"},f("currency",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Currency"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"comodity"},f("comodity",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Comodity"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"diamond"},f("diamond",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Diamond")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Completed Any Course?"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"yes"},f("yes",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Yes"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"no"},f("no",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"No")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-2 col-form-label"},"Reference"),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"facebook"},f("facebook",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Facebook"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"whatsapp"},f("whatsapp",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Whatsapp"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"handbill"},f("handbill",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Handbill"))),n.a.createElement("div",{className:"col-sm-2"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"call"},f("call",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"Call")))))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement(o.a.Group,{className:"row"},n.a.createElement("label",{className:"col-sm-3 col-form-label"},"Batch Time"),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"batch7"},f("batch7",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"7 to 8"))),n.a.createElement("div",{className:"col-sm-3"},n.a.createElement("div",{className:"form-check"},n.a.createElement("label",{className:"form-check-label"},n.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"batch2"},f("batch2",{required:!0}))),n.a.createElement("i",{className:"input-helper"}),"8 to 9")))))),n.a.createElement("div",{className:"mt-3"},n.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=38.1be82ffc.chunk.js.map