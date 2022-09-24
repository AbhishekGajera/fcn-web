/*! For license information please see 45.9275036c.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[45],{165:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(5),o=a.n(i),l=a(0),c=a.n(l),s=a(6),u=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.as,d=void 0===l?"div":l,f=Object(n.a)(e,u),v=Object(s.a)(a,"col"),p=[],b=[];return m.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+v+o:""+v+o+"-"+t),null!=r&&b.push("order"+o+"-"+r),null!=a&&b.push("offset"+o+"-"+a)})),p.length||p.push(v),c.a.createElement(d,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[i].concat(p,b))}))}));d.displayName="Col",t.a=d},170:function(e,t,a){"use strict";var r=a(1),n=a(3),i=a(5),o=a.n(i),l=a(0),c=a.n(l),s=(a(106),a(4)),u=a.n(s),m=["as","className","type","tooltip"],d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"div":a,l=e.className,s=e.type,u=void 0===s?"valid":s,d=e.tooltip,f=void 0!==d&&d,v=Object(n.a)(e,m);return c.a.createElement(i,Object(r.a)({},v,{ref:t,className:o()(l,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var v=f,p=c.a.createContext({controlId:void 0}),b=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.type,d=void 0===m?"checkbox":m,f=e.isValid,v=void 0!==f&&f,y=e.isInvalid,E=void 0!==y&&y,N=e.isStatic,g=e.as,x=void 0===g?"input":g,w=Object(n.a)(e,h),O=Object(l.useContext)(p),j=O.controlId,P=O.custom?[s,"custom-control-input"]:[i,"form-check-input"],k=P[0],I=P[1];return i=Object(b.a)(k,I),c.a.createElement(x,Object(r.a)({},w,{ref:t,type:d,id:a||j,className:o()(u,i,v&&"is-valid",E&&"is-invalid",N&&"position-static")}))}));y.displayName="FormCheckInput";var E=y,N=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,N),d=Object(l.useContext)(p),f=d.controlId,v=d.custom?[i,"custom-control-label"]:[a,"form-check-label"],h=v[0],y=v[1];return a=Object(b.a)(h,y),c.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:o()(s,a)}))}));g.displayName="FormCheckLabel";var x=g,w=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],O=c.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,m=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d,h=e.isValid,y=void 0!==h&&h,N=e.isInvalid,g=void 0!==N&&N,O=e.feedbackTooltip,j=void 0!==O&&O,P=e.feedback,k=e.className,I=e.style,C=e.title,F=void 0===C?"":C,L=e.type,S=void 0===L?"checkbox":L,T=e.label,R=e.children,_=e.custom,V=e.as,G=void 0===V?"input":V,D=Object(n.a)(e,w),q="switch"===S||_,B=q?[s,"custom-control"]:[i,"form-check"],z=B[0],A=B[1];i=Object(b.a)(z,A);var M=Object(l.useContext)(p).controlId,U=Object(l.useMemo)((function(){return{controlId:a||M,custom:q}}),[M,q,a]),H=q||null!=T&&!1!==T&&!R,J=c.a.createElement(E,Object(r.a)({},D,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:g,isStatic:!H,disabled:f,as:G}));return c.a.createElement(p.Provider,{value:U},c.a.createElement("div",{style:I,className:o()(k,i,q&&"custom-"+S,m&&i+"-inline")},R||c.a.createElement(c.a.Fragment,null,J,H&&c.a.createElement(x,{title:F},T),(y||g)&&c.a.createElement(v,{type:y?"valid":"invalid",tooltip:j},P))))}));O.displayName="FormCheck",O.Input=E,O.Label=x;var j=O,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=c.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,f=e.lang,v=e.as,h=void 0===v?"input":v,y=Object(n.a)(e,P),E=Object(l.useContext)(p),N=E.controlId,g=E.custom?[s,"custom-file-input"]:[i,"form-control-file"],x=g[0],w=g[1];return i=Object(b.a)(x,w),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:a||N,type:"file",lang:f,className:o()(u,i,m&&"is-valid",d&&"is-invalid")}))}));k.displayName="FormFileInput";var I=k,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,C),d=Object(l.useContext)(p),f=d.controlId,v=d.custom?[i,"custom-file-label"]:[a,"form-file-label"],h=v[0],y=v[1];return a=Object(b.a)(h,y),c.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:o()(s,a),"data-browse":m["data-browse"]}))}));F.displayName="FormFileLabel";var L=F,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=c.a.forwardRef((function(e,t){var a=e.id,i=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,m=void 0!==u&&u,d=e.isValid,f=void 0!==d&&d,h=e.isInvalid,y=void 0!==h&&h,E=e.feedbackTooltip,N=void 0!==E&&E,g=e.feedback,x=e.className,w=e.style,O=e.label,j=e.children,P=e.custom,k=e.lang,C=e["data-browse"],F=e.as,T=void 0===F?"div":F,R=e.inputAs,_=void 0===R?"input":R,V=Object(n.a)(e,S),G=P?[s,"custom"]:[i,"form-file"],D=G[0],q=G[1];i=Object(b.a)(D,q);var B=Object(l.useContext)(p).controlId,z=Object(l.useMemo)((function(){return{controlId:a||B,custom:P}}),[B,P,a]),A=null!=O&&!1!==O&&!j,M=c.a.createElement(I,Object(r.a)({},V,{ref:t,isValid:f,isInvalid:y,disabled:m,as:_,lang:k}));return c.a.createElement(p.Provider,{value:z},c.a.createElement(T,{style:w,className:o()(x,i,P&&"custom-file")},j||c.a.createElement(c.a.Fragment,null,P?c.a.createElement(c.a.Fragment,null,M,A&&c.a.createElement(L,{"data-browse":C},O)):c.a.createElement(c.a.Fragment,null,A&&c.a.createElement(L,null,O),M),(f||y)&&c.a.createElement(v,{type:f?"valid":"invalid",tooltip:N},g))))}));T.displayName="FormFile",T.Input=I,T.Label=L;var R=T,_=(a(47),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),V=c.a.forwardRef((function(e,t){var a,i,s=e.bsPrefix,u=e.bsCustomPrefix,m=e.type,d=e.size,f=e.htmlSize,v=e.id,h=e.className,y=e.isValid,E=void 0!==y&&y,N=e.isInvalid,g=void 0!==N&&N,x=e.plaintext,w=e.readOnly,O=e.custom,j=e.as,P=void 0===j?"input":j,k=Object(n.a)(e,_),I=Object(l.useContext)(p).controlId,C=O?[u,"custom"]:[s,"form-control"],F=C[0],L=C[1];if(s=Object(b.a)(F,L),x)(i={})[s+"-plaintext"]=!0,a=i;else if("file"===m){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===m){var T;(T={})[s+"-range"]=!0,a=T}else if("select"===P&&O){var R;(R={})[s+"-select"]=!0,R[s+"-select-"+d]=d,a=R}else{var V;(V={})[s]=!0,V[s+"-"+d]=d,a=V}return c.a.createElement(P,Object(r.a)({},k,{type:m,size:f,ref:t,readOnly:w,id:v||I,className:o()(h,a,E&&"is-valid",g&&"is-invalid")}))}));V.displayName="FormControl";var G=Object.assign(V,{Feedback:v}),D=["bsPrefix","className","children","controlId","as"],q=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.children,u=e.controlId,m=e.as,d=void 0===m?"div":m,f=Object(n.a)(e,D);a=Object(b.a)(a,"form-group");var v=Object(l.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(p.Provider,{value:v},c.a.createElement(d,Object(r.a)({},f,{ref:t,className:o()(i,a)}),s))}));q.displayName="FormGroup";var B=q,z=a(165),A=["as","bsPrefix","column","srOnly","className","htmlFor"],M=c.a.forwardRef((function(e,t){var a=e.as,i=void 0===a?"label":a,s=e.bsPrefix,u=e.column,m=e.srOnly,d=e.className,f=e.htmlFor,v=Object(n.a)(e,A),h=Object(l.useContext)(p).controlId;s=Object(b.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var E=o()(d,s,m&&"sr-only",u&&y);return f=f||h,u?c.a.createElement(z.a,Object(r.a)({ref:t,as:"label",className:E,htmlFor:f},v)):c.a.createElement(i,Object(r.a)({ref:t,className:E,htmlFor:f},v))}));M.displayName="FormLabel",M.defaultProps={column:!1,srOnly:!1};var U=M,H=["bsPrefix","className","as","muted"],J=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,l=e.as,s=void 0===l?"small":l,u=e.muted,m=Object(n.a)(e,H);return a=Object(b.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},m,{ref:t,className:o()(i,a,u&&"text-muted")}))}));J.displayName="FormText";var Y=J,K=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));K.displayName="Switch",K.Input=j.Input,K.Label=j.Label;var Q=K,W=a(49),X=["bsPrefix","inline","className","validated","as"],Z=Object(W.a)("form-row"),$=c.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.inline,l=e.className,s=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(n.a)(e,X);return a=Object(b.a)(a,"form"),c.a.createElement(m,Object(r.a)({},d,{ref:t,className:o()(l,s&&"was-validated",i&&a+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=Z,$.Group=B,$.Control=G,$.Check=j,$.File=R,$.Switch=Q,$.Label=U,$.Text=Y;t.a=$},618:function(e,t,a){"use strict";a.r(t);var r=a(41),n=a(31),i=a(0),o=a.n(i),l=a(173),c=a(168),s=a(170),u=a(163);function m(){m=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,i=Object.create(n.prototype),o=new O(r||[]);return i._invoke=function(e,t,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return P()}for(a.method=n,a.arg=i;;){var o=a.delegate;if(o){var l=g(o,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,o),i}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=c;var u={};function d(){}function f(){}function v(){}var p={};l(p,n,(function(){return this}));var b=Object.getPrototypeOf,h=b&&b(b(j([])));h&&h!==t&&a.call(h,n)&&(p=h);var y=v.prototype=d.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;this._invoke=function(n,i){function o(){return new t((function(r,o){!function r(n,i,o,l){var c=s(e[n],e,i);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,l)}))}l(c.arg)}(n,i,r,o)}))}return r=r?r.then(o,o):o()}}function g(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:P}}function P(){return{value:void 0,done:!0}}return f.prototype=v,l(y,"constructor",v),l(v,"constructor",f),f.displayName=l(v,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,l(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(N.prototype),l(N.prototype,i,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,r,n,i){void 0===i&&(i=Promise);var o=new N(c(t,a,r,n),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),l(y,o,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,a,i,d,f,v=Object(u.a)(["user"]),p=Object(n.a)(v,2),b=(p[0],p[1],o.a.useState(!1)),h=Object(n.a)(b,2),y=h[0],E=h[1],N=Object(c.a)({mode:"onChange"}),g=N.register,x=N.handleSubmit,w=N.formState,O=w.errors,j=(w.isDirty,w.isValid,(0,N.getValues)()),P=function(){var e=Object(r.a)(m().mark((function e(t){return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("data",t),E(!1);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(l.a,{show:y,onHide:function(){E(!1)},backdrop:"static",keyboard:!1},o.a.createElement(l.a.Header,{closeButton:!0},o.a.createElement(l.a.Title,null,"Send Notification")),o.a.createElement(l.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:x(P)},o.a.createElement("p",{className:"card-description"}," Send Notification "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Title"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"title"},g("title",{required:!0}))),O&&O.title&&o.a.createElement("p",null,"Title is required field"))),o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"," "),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"description"},g("description",{required:!0}))),O&&O.description&&o.a.createElement("p",null,"Description is required field"))),o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Upload Image"," "),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(s.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"file",multiple:!1},g("file",{required:!0}))),o.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===j||void 0===j||null===(e=j.file)||void 0===e||null===(t=e[0])||void 0===t||t.name," btn-primary"))},(null===j||void 0===j||null===(a=j.file)||void 0===a||null===(i=a[0])||void 0===i?void 0:i.name)?null===j||void 0===j||null===(d=j.file)||void 0===d||null===(f=d[0])||void 0===f?void 0:f.name:"Upload Image"),O&&O.file&&o.a.createElement("p",null,"Upload image is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"Send"))))))))),o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Notification / Branch "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},"Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Branch")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row",style:{marginBottom:"14px"}},o.a.createElement("div",{className:"col-md-3"},o.a.createElement("button",{className:"btn btn-gradient-primary btn-lg",type:"button",onClick:function(){return E(!0)}},"Send Notification")),o.a.createElement("div",{className:"col-md-9"})),o.a.createElement("h4",{className:"card-title"},"Receiver list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Title "),o.a.createElement("th",null," Description "),o.a.createElement("th",null," Delete "))),o.a.createElement("tbody",null)))))))}}}]);
//# sourceMappingURL=45.9275036c.chunk.js.map