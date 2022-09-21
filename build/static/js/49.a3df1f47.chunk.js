/*! For license information please see 49.a3df1f47.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[49],{168:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(5),i=a.n(o),l=a(0),c=a.n(l),s=a(6),m=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,d=void 0===l?"div":l,f=Object(n.a)(e,m),p=Object(s.a)(a,"col"),v=[],b=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+i:""+p+i+"-"+t),null!=r&&b.push("order"+i+"-"+r),null!=a&&b.push("offset"+i+"-"+a)})),v.length||v.push(p),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[o].concat(v,b))}))}));d.displayName="Col",t.a=d},175:function(e,t,a){"use strict";var r=a(1),n=a(3),o=a(5),i=a.n(o),l=a(0),c=a.n(l),s=(a(106),a(4)),m=a.n(s),u=["as","className","type","tooltip"],d={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"div":a,l=e.className,s=e.type,m=void 0===s?"valid":s,d=e.tooltip,f=void 0!==d&&d,p=Object(n.a)(e,u);return c.a.createElement(o,Object(r.a)({},p,{ref:t,className:i()(l,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var p=f,v=c.a.createContext({controlId:void 0}),b=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,m=e.className,u=e.type,d=void 0===u?"checkbox":u,f=e.isValid,p=void 0!==f&&f,y=e.isInvalid,E=void 0!==y&&y,g=e.isStatic,N=e.as,x=void 0===N?"input":N,w=Object(n.a)(e,h),O=Object(l.useContext)(v),j=O.controlId,P=O.custom?[s,"custom-control-input"]:[o,"form-check-input"],C=P[0],k=P[1];return o=Object(b.a)(C,k),c.a.createElement(x,Object(r.a)({},w,{ref:t,type:d,id:a||j,className:i()(m,o,p&&"is-valid",E&&"is-invalid",g&&"position-static")}))}));y.displayName="FormCheckInput";var E=y,g=["bsPrefix","bsCustomPrefix","className","htmlFor"],N=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,m=e.htmlFor,u=Object(n.a)(e,g),d=Object(l.useContext)(v),f=d.controlId,p=d.custom?[o,"custom-control-label"]:[a,"form-check-label"],h=p[0],y=p[1];return a=Object(b.a)(h,y),c.a.createElement("label",Object(r.a)({},u,{ref:t,htmlFor:m||f,className:i()(s,a)}))}));N.displayName="FormCheckLabel";var x=N,w=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],O=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,m=e.inline,u=void 0!==m&&m,d=e.disabled,f=void 0!==d&&d,h=e.isValid,y=void 0!==h&&h,g=e.isInvalid,N=void 0!==g&&g,O=e.feedbackTooltip,j=void 0!==O&&O,P=e.feedback,C=e.className,k=e.style,F=e.title,I=void 0===F?"":F,L=e.type,S=void 0===L?"checkbox":L,T=e.label,R=e.children,_=e.custom,G=e.as,V=void 0===G?"input":G,q=Object(n.a)(e,w),D="switch"===S||_,z=D?[s,"custom-control"]:[o,"form-check"],A=z[0],J=z[1];o=Object(b.a)(A,J);var M=Object(l.useContext)(v).controlId,U=Object(l.useMemo)((function(){return{controlId:a||M,custom:D}}),[M,D,a]),Y=D||null!=T&&!1!==T&&!R,B=c.a.createElement(E,Object(r.a)({},q,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:N,isStatic:!Y,disabled:f,as:V}));return c.a.createElement(v.Provider,{value:U},c.a.createElement("div",{style:k,className:i()(C,o,D&&"custom-"+S,u&&o+"-inline")},R||c.a.createElement(c.a.Fragment,null,B,Y&&c.a.createElement(x,{title:I},T),(y||N)&&c.a.createElement(p,{type:y?"valid":"invalid",tooltip:j},P))))}));O.displayName="FormCheck",O.Input=E,O.Label=x;var j=O,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],C=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,m=e.className,u=e.isValid,d=e.isInvalid,f=e.lang,p=e.as,h=void 0===p?"input":p,y=Object(n.a)(e,P),E=Object(l.useContext)(v),g=E.controlId,N=E.custom?[s,"custom-file-input"]:[o,"form-control-file"],x=N[0],w=N[1];return o=Object(b.a)(x,w),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:a||g,type:"file",lang:f,className:i()(m,o,u&&"is-valid",d&&"is-invalid")}))}));C.displayName="FormFileInput";var k=C,F=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.bsCustomPrefix,s=e.className,m=e.htmlFor,u=Object(n.a)(e,F),d=Object(l.useContext)(v),f=d.controlId,p=d.custom?[o,"custom-file-label"]:[a,"form-file-label"],h=p[0],y=p[1];return a=Object(b.a)(h,y),c.a.createElement("label",Object(r.a)({},u,{ref:t,htmlFor:m||f,className:i()(s,a),"data-browse":u["data-browse"]}))}));I.displayName="FormFileLabel";var L=I,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=c.a.forwardRef((function(e,t){var a=e.id,o=e.bsPrefix,s=e.bsCustomPrefix,m=e.disabled,u=void 0!==m&&m,d=e.isValid,f=void 0!==d&&d,h=e.isInvalid,y=void 0!==h&&h,E=e.feedbackTooltip,g=void 0!==E&&E,N=e.feedback,x=e.className,w=e.style,O=e.label,j=e.children,P=e.custom,C=e.lang,F=e["data-browse"],I=e.as,T=void 0===I?"div":I,R=e.inputAs,_=void 0===R?"input":R,G=Object(n.a)(e,S),V=P?[s,"custom"]:[o,"form-file"],q=V[0],D=V[1];o=Object(b.a)(q,D);var z=Object(l.useContext)(v).controlId,A=Object(l.useMemo)((function(){return{controlId:a||z,custom:P}}),[z,P,a]),J=null!=O&&!1!==O&&!j,M=c.a.createElement(k,Object(r.a)({},G,{ref:t,isValid:f,isInvalid:y,disabled:u,as:_,lang:C}));return c.a.createElement(v.Provider,{value:A},c.a.createElement(T,{style:w,className:i()(x,o,P&&"custom-file")},j||c.a.createElement(c.a.Fragment,null,P?c.a.createElement(c.a.Fragment,null,M,J&&c.a.createElement(L,{"data-browse":F},O)):c.a.createElement(c.a.Fragment,null,J&&c.a.createElement(L,null,O),M),(f||y)&&c.a.createElement(p,{type:f?"valid":"invalid",tooltip:g},N))))}));T.displayName="FormFile",T.Input=k,T.Label=L;var R=T,_=(a(47),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),G=c.a.forwardRef((function(e,t){var a,o,s=e.bsPrefix,m=e.bsCustomPrefix,u=e.type,d=e.size,f=e.htmlSize,p=e.id,h=e.className,y=e.isValid,E=void 0!==y&&y,g=e.isInvalid,N=void 0!==g&&g,x=e.plaintext,w=e.readOnly,O=e.custom,j=e.as,P=void 0===j?"input":j,C=Object(n.a)(e,_),k=Object(l.useContext)(v).controlId,F=O?[m,"custom"]:[s,"form-control"],I=F[0],L=F[1];if(s=Object(b.a)(I,L),x)(o={})[s+"-plaintext"]=!0,a=o;else if("file"===u){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===u){var T;(T={})[s+"-range"]=!0,a=T}else if("select"===P&&O){var R;(R={})[s+"-select"]=!0,R[s+"-select-"+d]=d,a=R}else{var G;(G={})[s]=!0,G[s+"-"+d]=d,a=G}return c.a.createElement(P,Object(r.a)({},C,{type:u,size:f,ref:t,readOnly:w,id:p||k,className:i()(h,a,E&&"is-valid",N&&"is-invalid")}))}));G.displayName="FormControl";var V=Object.assign(G,{Feedback:p}),q=["bsPrefix","className","children","controlId","as"],D=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.children,m=e.controlId,u=e.as,d=void 0===u?"div":u,f=Object(n.a)(e,q);a=Object(b.a)(a,"form-group");var p=Object(l.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(v.Provider,{value:p},c.a.createElement(d,Object(r.a)({},f,{ref:t,className:i()(o,a)}),s))}));D.displayName="FormGroup";var z=D,A=a(168),J=["as","bsPrefix","column","srOnly","className","htmlFor"],M=c.a.forwardRef((function(e,t){var a=e.as,o=void 0===a?"label":a,s=e.bsPrefix,m=e.column,u=e.srOnly,d=e.className,f=e.htmlFor,p=Object(n.a)(e,J),h=Object(l.useContext)(v).controlId;s=Object(b.a)(s,"form-label");var y="col-form-label";"string"===typeof m&&(y=y+" "+y+"-"+m);var E=i()(d,s,u&&"sr-only",m&&y);return f=f||h,m?c.a.createElement(A.a,Object(r.a)({ref:t,as:"label",className:E,htmlFor:f},p)):c.a.createElement(o,Object(r.a)({ref:t,className:E,htmlFor:f},p))}));M.displayName="FormLabel",M.defaultProps={column:!1,srOnly:!1};var U=M,Y=["bsPrefix","className","as","muted"],B=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,l=e.as,s=void 0===l?"small":l,m=e.muted,u=Object(n.a)(e,Y);return a=Object(b.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},u,{ref:t,className:i()(o,a,m&&"text-muted")}))}));B.displayName="FormText";var H=B,K=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));K.displayName="Switch",K.Input=j.Input,K.Label=j.Label;var Q=K,W=a(48),X=["bsPrefix","inline","className","validated","as"],Z=Object(W.a)("form-row"),$=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.inline,l=e.className,s=e.validated,m=e.as,u=void 0===m?"form":m,d=Object(n.a)(e,X);return a=Object(b.a)(a,"form"),c.a.createElement(u,Object(r.a)({},d,{ref:t,className:i()(l,s&&"was-validated",o&&a+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=Z,$.Group=z,$.Control=V,$.Check=j,$.File=R,$.Switch=Q,$.Label=U,$.Text=H;t.a=$},571:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(0),o=a.n(n),i=a(167),l=a(175),c=a(46),s=a(76),m=a(7);function u(){u=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(C){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),i=new O(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return P()}for(a.method=n,a.arg=o;;){var i=a.delegate;if(i){var l=N(i,a);if(l){if(l===m)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var m={};function d(){}function f(){}function p(){}var v={};l(v,n,(function(){return this}));var b=Object.getPrototypeOf,h=b&&b(b(j([])));h&&h!==t&&a.call(h,n)&&(v=h);var y=p.prototype=d.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,o){function i(){return new t((function(r,i){!function r(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var m=c.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,i,l)}),(function(e){r("throw",e,i,l)})):t.resolve(u).then((function(e){m.value=e,i(m)}),(function(e){return r("throw",e,i,l)}))}l(c.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=p,l(y,"constructor",p),l(p,"constructor",f),f.displayName=l(p,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(g.prototype),l(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var i=new g(c(t,a,r,n),o);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},E(y),l(y,i,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var l=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e,t,a,n,d,f,p=Object(m.g)(),v=Object(i.a)({mode:"onChange"}),b=v.register,h=v.handleSubmit,y=v.formState,E=y.errors,g=(y.isDirty,y.isValid,(0,v.getValues)()),N=function(){var e=Object(r.a)(u().mark((function e(t){var a,r,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t.file[0]),e.next=4,Object(c.i)(a);case 4:if(!(r=e.sent).error){e.next=9;break}s.b.error(r.error.message),e.next=19;break;case 9:return n=JSON.stringify({name:(null===t||void 0===t?void 0:t.name)||"",desc:t.desc||"",price:null===t||void 0===t?void 0:t.price,image:r.secure_url,type:null===t||void 0===t?void 0:t.type}),e.prev=10,e.next=13,Object(c.r)(n);case 13:p.push("/travel/ourplan"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(10),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?s.b.error(e.t0.response.data.message):s.b.error("There was an internal server error please try again later or contact support@fcn.com");case 19:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"}," Customize Tour  "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Travel")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Tour")))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-8 grid-margin stretch-card"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},"Add your travel plans here"),o.a.createElement("form",{className:"form-sample",onSubmit:h(N)},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"name",placeholder:"Enter name"},b("name",{required:!0}))),E&&E.name&&o.a.createElement("p",{style:{color:"red"}},"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"text",name:"desc",placeholder:"Enter Description"},b("desc",{required:!0}))),E&&E.description&&o.a.createElement("p",{style:{color:"red"}},"description is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Price"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(l.a.Control,Object.assign({type:"number",name:"price",placeholder:"Enter price per person"},b("price",{required:!0}))),E&&E.price&&o.a.createElement("p",{style:{color:"red"}},"price is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Upload Image"," "),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(l.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"file",multiple:!1},b("file",{required:!0}))),o.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===g||void 0===g||null===(e=g.file)||void 0===e||null===(t=e[0])||void 0===t||t.name," btn-primary"))},(null===g||void 0===g||null===(a=g.file)||void 0===a||null===(n=a[0])||void 0===n?void 0:n.name)?null===g||void 0===g||null===(d=g.file)||void 0===d||null===(f=d[0])||void 0===f?void 0:f.name:"Upload Image"),E&&E.file&&o.a.createElement("p",null,"Upload image is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(l.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Type"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"type"},b("type",{required:!0})),o.a.createElement("option",{value:"regular"},"Regular"),o.a.createElement("option",{value:"pre"},"Pre Departure")),E&&E.type&&o.a.createElement("p",null,"Select type is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Create"))))))))}}}]);
//# sourceMappingURL=49.a3df1f47.chunk.js.map