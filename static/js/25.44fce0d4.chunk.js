/*! For license information please see 25.44fce0d4.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[25],{168:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),c=a(0),s=a.n(c),i=a(6),m=["bsPrefix","className","as"],u=["xl","lg","md","sm","xs"],d=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,d=void 0===c?"div":c,f=Object(n.a)(e,m),p=Object(i.a)(a,"col"),v=[],b=[];return u.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&v.push(!0===t?""+p+o:""+p+o+"-"+t),null!=r&&b.push("order"+o+"-"+r),null!=a&&b.push("offset"+o+"-"+a)})),v.length||v.push(p),s.a.createElement(d,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[l].concat(v,b))}))}));d.displayName="Col",t.a=d},171:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),c=a(0),s=a.n(c),i=(a(106),a(4)),m=a.n(i),u=["as","className","type","tooltip"],d={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},f=s.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,c=e.className,i=e.type,m=void 0===i?"valid":i,d=e.tooltip,f=void 0!==d&&d,p=Object(n.a)(e,u);return s.a.createElement(l,Object(r.a)({},p,{ref:t,className:o()(c,m+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var p=f,v=s.a.createContext({controlId:void 0}),b=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,u=e.type,d=void 0===u?"checkbox":u,f=e.isValid,p=void 0!==f&&f,y=e.isInvalid,E=void 0!==y&&y,N=e.isStatic,g=e.as,w=void 0===g?"input":g,x=Object(n.a)(e,h),O=Object(c.useContext)(v),j=O.controlId,C=O.custom?[i,"custom-control-input"]:[l,"form-check-input"],k=C[0],P=C[1];return l=Object(b.a)(k,P),s.a.createElement(w,Object(r.a)({},x,{ref:t,type:d,id:a||j,className:o()(m,l,p&&"is-valid",E&&"is-invalid",N&&"position-static")}))}));y.displayName="FormCheckInput";var E=y,N=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,i=e.className,m=e.htmlFor,u=Object(n.a)(e,N),d=Object(c.useContext)(v),f=d.controlId,p=d.custom?[l,"custom-control-label"]:[a,"form-check-label"],h=p[0],y=p[1];return a=Object(b.a)(h,y),s.a.createElement("label",Object(r.a)({},u,{ref:t,htmlFor:m||f,className:o()(i,a)}))}));g.displayName="FormCheckLabel";var w=g,x=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],O=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.inline,u=void 0!==m&&m,d=e.disabled,f=void 0!==d&&d,h=e.isValid,y=void 0!==h&&h,N=e.isInvalid,g=void 0!==N&&N,O=e.feedbackTooltip,j=void 0!==O&&O,C=e.feedback,k=e.className,P=e.style,I=e.title,F=void 0===I?"":I,L=e.type,S=void 0===L?"checkbox":L,q=e.label,G=e.children,T=e.custom,R=e.as,A=void 0===R?"input":R,_=Object(n.a)(e,x),V="switch"===S||T,B=V?[i,"custom-control"]:[l,"form-check"],z=B[0],D=B[1];l=Object(b.a)(z,D);var J=Object(c.useContext)(v).controlId,M=Object(c.useMemo)((function(){return{controlId:a||J,custom:V}}),[J,V,a]),U=V||null!=q&&!1!==q&&!G,Y=s.a.createElement(E,Object(r.a)({},_,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:g,isStatic:!U,disabled:f,as:A}));return s.a.createElement(v.Provider,{value:M},s.a.createElement("div",{style:P,className:o()(k,l,V&&"custom-"+S,u&&l+"-inline")},G||s.a.createElement(s.a.Fragment,null,Y,U&&s.a.createElement(w,{title:F},q),(y||g)&&s.a.createElement(p,{type:y?"valid":"invalid",tooltip:j},C))))}));O.displayName="FormCheck",O.Input=E,O.Label=w;var j=O,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],k=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.className,u=e.isValid,d=e.isInvalid,f=e.lang,p=e.as,h=void 0===p?"input":p,y=Object(n.a)(e,C),E=Object(c.useContext)(v),N=E.controlId,g=E.custom?[i,"custom-file-input"]:[l,"form-control-file"],w=g[0],x=g[1];return l=Object(b.a)(w,x),s.a.createElement(h,Object(r.a)({},y,{ref:t,id:a||N,type:"file",lang:f,className:o()(m,l,u&&"is-valid",d&&"is-invalid")}))}));k.displayName="FormFileInput";var P=k,I=["bsPrefix","bsCustomPrefix","className","htmlFor"],F=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,i=e.className,m=e.htmlFor,u=Object(n.a)(e,I),d=Object(c.useContext)(v),f=d.controlId,p=d.custom?[l,"custom-file-label"]:[a,"form-file-label"],h=p[0],y=p[1];return a=Object(b.a)(h,y),s.a.createElement("label",Object(r.a)({},u,{ref:t,htmlFor:m||f,className:o()(i,a),"data-browse":u["data-browse"]}))}));F.displayName="FormFileLabel";var L=F,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],q=s.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,i=e.bsCustomPrefix,m=e.disabled,u=void 0!==m&&m,d=e.isValid,f=void 0!==d&&d,h=e.isInvalid,y=void 0!==h&&h,E=e.feedbackTooltip,N=void 0!==E&&E,g=e.feedback,w=e.className,x=e.style,O=e.label,j=e.children,C=e.custom,k=e.lang,I=e["data-browse"],F=e.as,q=void 0===F?"div":F,G=e.inputAs,T=void 0===G?"input":G,R=Object(n.a)(e,S),A=C?[i,"custom"]:[l,"form-file"],_=A[0],V=A[1];l=Object(b.a)(_,V);var B=Object(c.useContext)(v).controlId,z=Object(c.useMemo)((function(){return{controlId:a||B,custom:C}}),[B,C,a]),D=null!=O&&!1!==O&&!j,J=s.a.createElement(P,Object(r.a)({},R,{ref:t,isValid:f,isInvalid:y,disabled:u,as:T,lang:k}));return s.a.createElement(v.Provider,{value:z},s.a.createElement(q,{style:x,className:o()(w,l,C&&"custom-file")},j||s.a.createElement(s.a.Fragment,null,C?s.a.createElement(s.a.Fragment,null,J,D&&s.a.createElement(L,{"data-browse":I},O)):s.a.createElement(s.a.Fragment,null,D&&s.a.createElement(L,null,O),J),(f||y)&&s.a.createElement(p,{type:f?"valid":"invalid",tooltip:N},g))))}));q.displayName="FormFile",q.Input=P,q.Label=L;var G=q,T=(a(44),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=s.a.forwardRef((function(e,t){var a,l,i=e.bsPrefix,m=e.bsCustomPrefix,u=e.type,d=e.size,f=e.htmlSize,p=e.id,h=e.className,y=e.isValid,E=void 0!==y&&y,N=e.isInvalid,g=void 0!==N&&N,w=e.plaintext,x=e.readOnly,O=e.custom,j=e.as,C=void 0===j?"input":j,k=Object(n.a)(e,T),P=Object(c.useContext)(v).controlId,I=O?[m,"custom"]:[i,"form-control"],F=I[0],L=I[1];if(i=Object(b.a)(F,L),w)(l={})[i+"-plaintext"]=!0,a=l;else if("file"===u){var S;(S={})[i+"-file"]=!0,a=S}else if("range"===u){var q;(q={})[i+"-range"]=!0,a=q}else if("select"===C&&O){var G;(G={})[i+"-select"]=!0,G[i+"-select-"+d]=d,a=G}else{var R;(R={})[i]=!0,R[i+"-"+d]=d,a=R}return s.a.createElement(C,Object(r.a)({},k,{type:u,size:f,ref:t,readOnly:x,id:p||P,className:o()(h,a,E&&"is-valid",g&&"is-invalid")}))}));R.displayName="FormControl";var A=Object.assign(R,{Feedback:p}),_=["bsPrefix","className","children","controlId","as"],V=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.children,m=e.controlId,u=e.as,d=void 0===u?"div":u,f=Object(n.a)(e,_);a=Object(b.a)(a,"form-group");var p=Object(c.useMemo)((function(){return{controlId:m}}),[m]);return s.a.createElement(v.Provider,{value:p},s.a.createElement(d,Object(r.a)({},f,{ref:t,className:o()(l,a)}),i))}));V.displayName="FormGroup";var B=V,z=a(168),D=["as","bsPrefix","column","srOnly","className","htmlFor"],J=s.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,i=e.bsPrefix,m=e.column,u=e.srOnly,d=e.className,f=e.htmlFor,p=Object(n.a)(e,D),h=Object(c.useContext)(v).controlId;i=Object(b.a)(i,"form-label");var y="col-form-label";"string"===typeof m&&(y=y+" "+y+"-"+m);var E=o()(d,i,u&&"sr-only",m&&y);return f=f||h,m?s.a.createElement(z.a,Object(r.a)({ref:t,as:"label",className:E,htmlFor:f},p)):s.a.createElement(l,Object(r.a)({ref:t,className:E,htmlFor:f},p))}));J.displayName="FormLabel",J.defaultProps={column:!1,srOnly:!1};var M=J,U=["bsPrefix","className","as","muted"],Y=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,i=void 0===c?"small":c,m=e.muted,u=Object(n.a)(e,U);return a=Object(b.a)(a,"form-text"),s.a.createElement(i,Object(r.a)({},u,{ref:t,className:o()(l,a,m&&"text-muted")}))}));Y.displayName="FormText";var $=Y,K=s.a.forwardRef((function(e,t){return s.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));K.displayName="Switch",K.Input=j.Input,K.Label=j.Label;var Z=K,H=a(48),Q=["bsPrefix","inline","className","validated","as"],W=Object(H.a)("form-row"),X=s.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,c=e.className,i=e.validated,m=e.as,u=void 0===m?"form":m,d=Object(n.a)(e,Q);return a=Object(b.a)(a,"form"),s.a.createElement(u,Object(r.a)({},d,{ref:t,className:o()(c,i&&"was-validated",l&&a+"-inline")}))}));X.displayName="Form",X.defaultProps={inline:!1},X.Row=W,X.Group=B,X.Control=A,X.Check=j,X.File=G,X.Switch=Z,X.Label=M,X.Text=$;t.a=X},483:function(e,t,a){"use strict";a.r(t);var r=a(45),n=a(34),l=a(0),o=a.n(l),c=a(169),s=a(171),i=a(163),m=a(76),u=a(47),d=a(7);function f(){f=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof u?t:u,l=Object.create(n.prototype),o=new O(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return C()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=g(o,a);if(c){if(c===m)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=i(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===m)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,o),l}function i(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var m={};function u(){}function d(){}function p(){}var v={};c(v,n,(function(){return this}));var b=Object.getPrototypeOf,h=b&&b(b(j([])));h&&h!==t&&a.call(h,n)&&(v=h);var y=p.prototype=u.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function N(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var s=i(e[n],e,l);if("throw"!==s.type){var m=s.arg,u=m.value;return u&&"object"==typeof u&&a.call(u,"__await")?t.resolve(u.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(u).then((function(e){m.value=e,o(m)}),(function(e){return r("throw",e,o,c)}))}c(s.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function g(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=i(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,c(y,"constructor",p),c(p,"constructor",d),d.displayName=c(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(N.prototype),c(N.prototype,l,(function(){return this})),e.AsyncIterator=N,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new N(s(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(y),c(y,o,"Generator"),c(y,n,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),s=a.call(l,"finallyLoc");if(c&&s){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,m):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e,t=Object(i.a)(["user"]),a=Object(n.a)(t,2),p=a[0],v=a[1],b=Object(l.useState)([]),h=Object(n.a)(b,2),y=h[0],E=h[1],N=Object(l.useState)([]),g=Object(n.a)(N,2),w=g[0],x=g[1],O=Object(d.g)(),j=Object(c.a)({mode:"onChange"}),C=j.register,k=j.handleSubmit,P=j.formState,I=P.errors,F=(P.isDirty,P.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),L=new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})"),S=function(){var e=Object(r.a)(f().mark((function e(t){return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.c)(t);case 3:m.b.success("user crated successfully"),O.push("/clients/clientlist"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){q()}),[]),Object(l.useEffect)((function(){G()}),[]);var q=function(){var e=Object(r.a)(f().mark((function e(){var t,a,r,n,l,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.m)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,E(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),v("user",null,{path:"/"}),Object(u.A)(o).finally((function(){O.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(f().mark((function e(){var t,a,r,n,l,o;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.p)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,x(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?m.b.error(e.t0.response.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),v("user",null,{path:"/"}),Object(u.A)(o).finally((function(){O.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Clients / create Clients "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===p||void 0===p||null===(e=p.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Create clients")))),o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:k(S)},o.a.createElement("p",{className:"card-description"}," Personal info "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"name"},C("name",{required:!0}))),I&&I.name&&o.a.createElement("p",null,"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"address"},C("address",{required:!0}))),I&&I.address&&o.a.createElement("p",null,"address is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-4"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Contact"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"contactno"},C("contactno",{required:!0,pattern:F}))),I&&I.contactno&&"required"===I.contactno.type&&o.a.createElement("p",null,"contact number is required field"),I&&I.contactno&&"pattern"===I.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate")))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Branch"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"branch"},C("branch",{required:!0})),y.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})})))))),o.a.createElement("div",{className:"col-md-4"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Ibo"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"ibo"},C("ibo",{required:!0})),w.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"email"},C("email",{required:!0,pattern:/^\S+@\S+$/i}))),I&&I.email&&"required"===I.email.type&&o.a.createElement("p",null,"email is required field"),I&&I.email&&"pattern"===I.email.type&&o.a.createElement("p",null,"invalid email formate")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"DOB"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"date",name:"dob"},C("dob",{required:!0}))),I&&I.dob&&o.a.createElement("p",null,"DOB is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Password"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"password"},C("password",{required:!0,pattern:L}))),I&&I.password&&"required"===I.password.type&&o.a.createElement("p",null,"password is required field"),I&&I.password&&"pattern"===I.password.type&&o.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Country"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"country"},C("country",{required:!0})),o.a.createElement("option",null,"Country"),o.a.createElement("option",null,"United States of America"),o.a.createElement("option",{selected:!0},"India"),o.a.createElement("option",null,"United Kingdom"),o.a.createElement("option",null,"Germany"),o.a.createElement("option",null,"Argentina")))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Bank Account no"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"bankAccNo"},C("bankAccNo",{required:!0}))),I&&I.bankAccNo&&o.a.createElement("p",null,"Bank Account number is required field")))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"IFSC code"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"text",name:"bankIfscCode"},C("bankIfscCode",{required:!0}))),I&&I.bankIfscCode&&o.a.createElement("p",null,"Bank IFSC number is required field"))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=25.44fce0d4.chunk.js.map