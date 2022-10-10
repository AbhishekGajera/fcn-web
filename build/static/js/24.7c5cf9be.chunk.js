/*! For license information please see 24.7c5cf9be.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[24],{171:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),c=a(0),i=a.n(c),s=a(6),u=["bsPrefix","className","as"],m=["xl","lg","md","sm","xs"],d=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,d=void 0===c?"div":c,f=Object(n.a)(e,u),v=Object(s.a)(a,"col"),b=[],p=[];return m.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+v+o:""+v+o+"-"+t),null!=r&&p.push("order"+o+"-"+r),null!=a&&p.push("offset"+o+"-"+a)})),b.length||b.push(v),i.a.createElement(d,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[l].concat(b,p))}))}));d.displayName="Col",t.a=d},176:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),c=a(0),i=a.n(c),s=(a(112),a(4)),u=a.n(s),m=["as","className","type","tooltip"],d={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=i.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,c=e.className,s=e.type,u=void 0===s?"valid":s,d=e.tooltip,f=void 0!==d&&d,v=Object(n.a)(e,m);return i.a.createElement(l,Object(r.a)({},v,{ref:t,className:o()(c,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=d;var v=f,b=i.a.createContext({controlId:void 0}),p=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],E=i.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.type,d=void 0===m?"checkbox":m,f=e.isValid,v=void 0!==f&&f,E=e.isInvalid,y=void 0!==E&&E,g=e.isStatic,N=e.as,w=void 0===N?"input":N,O=Object(n.a)(e,h),x=Object(c.useContext)(b),j=x.controlId,P=x.custom?[s,"custom-control-input"]:[l,"form-check-input"],C=P[0],k=P[1];return l=Object(p.a)(C,k),i.a.createElement(w,Object(r.a)({},O,{ref:t,type:d,id:a||j,className:o()(u,l,v&&"is-valid",y&&"is-invalid",g&&"position-static")}))}));E.displayName="FormCheckInput";var y=E,g=["bsPrefix","bsCustomPrefix","className","htmlFor"],N=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,g),d=Object(c.useContext)(b),f=d.controlId,v=d.custom?[l,"custom-control-label"]:[a,"form-check-label"],h=v[0],E=v[1];return a=Object(p.a)(h,E),i.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:o()(s,a)}))}));N.displayName="FormCheckLabel";var w=N,O=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],x=i.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,m=void 0!==u&&u,d=e.disabled,f=void 0!==d&&d,h=e.isValid,E=void 0!==h&&h,g=e.isInvalid,N=void 0!==g&&g,x=e.feedbackTooltip,j=void 0!==x&&x,P=e.feedback,C=e.className,k=e.style,S=e.title,I=void 0===S?"":S,F=e.type,L=void 0===F?"checkbox":F,T=e.label,D=e.children,B=e.custom,R=e.as,G=void 0===R?"input":R,A=Object(n.a)(e,O),V="switch"===L||B,M=V?[s,"custom-control"]:[l,"form-check"],_=M[0],q=M[1];l=Object(p.a)(_,q);var J=Object(c.useContext)(b).controlId,z=Object(c.useMemo)((function(){return{controlId:a||J,custom:V}}),[J,V,a]),U=V||null!=T&&!1!==T&&!D,Y=i.a.createElement(y,Object(r.a)({},A,{type:"switch"===L?"checkbox":L,ref:t,isValid:E,isInvalid:N,isStatic:!U,disabled:f,as:G}));return i.a.createElement(b.Provider,{value:z},i.a.createElement("div",{style:k,className:o()(C,l,V&&"custom-"+L,m&&l+"-inline")},D||i.a.createElement(i.a.Fragment,null,Y,U&&i.a.createElement(w,{title:I},T),(E||N)&&i.a.createElement(v,{type:E?"valid":"invalid",tooltip:j},P))))}));x.displayName="FormCheck",x.Input=y,x.Label=w;var j=x,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],C=i.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,m=e.isValid,d=e.isInvalid,f=e.lang,v=e.as,h=void 0===v?"input":v,E=Object(n.a)(e,P),y=Object(c.useContext)(b),g=y.controlId,N=y.custom?[s,"custom-file-input"]:[l,"form-control-file"],w=N[0],O=N[1];return l=Object(p.a)(w,O),i.a.createElement(h,Object(r.a)({},E,{ref:t,id:a||g,type:"file",lang:f,className:o()(u,l,m&&"is-valid",d&&"is-invalid")}))}));C.displayName="FormFileInput";var k=C,S=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,m=Object(n.a)(e,S),d=Object(c.useContext)(b),f=d.controlId,v=d.custom?[l,"custom-file-label"]:[a,"form-file-label"],h=v[0],E=v[1];return a=Object(p.a)(h,E),i.a.createElement("label",Object(r.a)({},m,{ref:t,htmlFor:u||f,className:o()(s,a),"data-browse":m["data-browse"]}))}));I.displayName="FormFileLabel";var F=I,L=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=i.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,m=void 0!==u&&u,d=e.isValid,f=void 0!==d&&d,h=e.isInvalid,E=void 0!==h&&h,y=e.feedbackTooltip,g=void 0!==y&&y,N=e.feedback,w=e.className,O=e.style,x=e.label,j=e.children,P=e.custom,C=e.lang,S=e["data-browse"],I=e.as,T=void 0===I?"div":I,D=e.inputAs,B=void 0===D?"input":D,R=Object(n.a)(e,L),G=P?[s,"custom"]:[l,"form-file"],A=G[0],V=G[1];l=Object(p.a)(A,V);var M=Object(c.useContext)(b).controlId,_=Object(c.useMemo)((function(){return{controlId:a||M,custom:P}}),[M,P,a]),q=null!=x&&!1!==x&&!j,J=i.a.createElement(k,Object(r.a)({},R,{ref:t,isValid:f,isInvalid:E,disabled:m,as:B,lang:C}));return i.a.createElement(b.Provider,{value:_},i.a.createElement(T,{style:O,className:o()(w,l,P&&"custom-file")},j||i.a.createElement(i.a.Fragment,null,P?i.a.createElement(i.a.Fragment,null,J,q&&i.a.createElement(F,{"data-browse":S},x)):i.a.createElement(i.a.Fragment,null,q&&i.a.createElement(F,null,x),J),(f||E)&&i.a.createElement(v,{type:f?"valid":"invalid",tooltip:g},N))))}));T.displayName="FormFile",T.Input=k,T.Label=F;var D=T,B=(a(52),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=i.a.forwardRef((function(e,t){var a,l,s=e.bsPrefix,u=e.bsCustomPrefix,m=e.type,d=e.size,f=e.htmlSize,v=e.id,h=e.className,E=e.isValid,y=void 0!==E&&E,g=e.isInvalid,N=void 0!==g&&g,w=e.plaintext,O=e.readOnly,x=e.custom,j=e.as,P=void 0===j?"input":j,C=Object(n.a)(e,B),k=Object(c.useContext)(b).controlId,S=x?[u,"custom"]:[s,"form-control"],I=S[0],F=S[1];if(s=Object(p.a)(I,F),w)(l={})[s+"-plaintext"]=!0,a=l;else if("file"===m){var L;(L={})[s+"-file"]=!0,a=L}else if("range"===m){var T;(T={})[s+"-range"]=!0,a=T}else if("select"===P&&x){var D;(D={})[s+"-select"]=!0,D[s+"-select-"+d]=d,a=D}else{var R;(R={})[s]=!0,R[s+"-"+d]=d,a=R}return i.a.createElement(P,Object(r.a)({},C,{type:m,size:f,ref:t,readOnly:O,id:v||k,className:o()(h,a,y&&"is-valid",N&&"is-invalid")}))}));R.displayName="FormControl";var G=Object.assign(R,{Feedback:v}),A=["bsPrefix","className","children","controlId","as"],V=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,u=e.controlId,m=e.as,d=void 0===m?"div":m,f=Object(n.a)(e,A);a=Object(p.a)(a,"form-group");var v=Object(c.useMemo)((function(){return{controlId:u}}),[u]);return i.a.createElement(b.Provider,{value:v},i.a.createElement(d,Object(r.a)({},f,{ref:t,className:o()(l,a)}),s))}));V.displayName="FormGroup";var M=V,_=a(171),q=["as","bsPrefix","column","srOnly","className","htmlFor"],J=i.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,s=e.bsPrefix,u=e.column,m=e.srOnly,d=e.className,f=e.htmlFor,v=Object(n.a)(e,q),h=Object(c.useContext)(b).controlId;s=Object(p.a)(s,"form-label");var E="col-form-label";"string"===typeof u&&(E=E+" "+E+"-"+u);var y=o()(d,s,m&&"sr-only",u&&E);return f=f||h,u?i.a.createElement(_.a,Object(r.a)({ref:t,as:"label",className:y,htmlFor:f},v)):i.a.createElement(l,Object(r.a)({ref:t,className:y,htmlFor:f},v))}));J.displayName="FormLabel",J.defaultProps={column:!1,srOnly:!1};var z=J,U=["bsPrefix","className","as","muted"],Y=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,s=void 0===c?"small":c,u=e.muted,m=Object(n.a)(e,U);return a=Object(p.a)(a,"form-text"),i.a.createElement(s,Object(r.a)({},m,{ref:t,className:o()(l,a,u&&"text-muted")}))}));Y.displayName="FormText";var H=Y,Q=i.a.forwardRef((function(e,t){return i.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));Q.displayName="Switch",Q.Input=j.Input,Q.Label=j.Label;var $=Q,Z=a(54),K=["bsPrefix","inline","className","validated","as"],W=Object(Z.a)("form-row"),X=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,c=e.className,s=e.validated,u=e.as,m=void 0===u?"form":u,d=Object(n.a)(e,K);return a=Object(p.a)(a,"form"),i.a.createElement(m,Object(r.a)({},d,{ref:t,className:o()(c,s&&"was-validated",l&&a+"-inline")}))}));X.displayName="Form",X.defaultProps={inline:!1},X.Row=W,X.Group=M,X.Control=G,X.Check=j,X.File=D,X.Switch=$,X.Label=z,X.Text=H;t.a=X},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(34),n=a(0),l=function(e,t){var a=Object(n.useState)(e),l=Object(r.a)(a,2),o=l[0],c=l[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){c(e)}),t);return function(){clearTimeout(a)}}),[e,t]),o}},187:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],n=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],o=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],c=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],i=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],s=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},u=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},273:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var r=function(e){for(var t=e||10,a="abcdefghijklmnopqrstuvwxyz",r="",n="";r.length<t;){var l=Math.ceil(a.length*Math.random()*Math.random()),o=Math.ceil("0123456789".length*Math.random()*Math.random()),c=a.charAt(l);n+=c=r.length%2==0?c.toUpperCase():c,r=n+="0123456789".charAt(o)}return(r=r.split("").sort((function(){return.5-Math.random()})).join("")).substr(0,e)}},602:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(34),l=a(0),o=a.n(l),c=a(169),i=a(182),s=a.n(i),u=a(22),m=a(181),d=a(188),f=a.n(d),v=a(179),b=a(174),p=a(176),h=a(45),E=a(7),y=a(187),g=a(273),N=a(82);function w(){w=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function c(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(C){c=function(e,t,a){return e[t]=a}}function i(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,l=Object.create(n.prototype),o=new x(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return P()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var c=g(o,a);if(c){if(c===u)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var i=s(e,t,a);if("normal"===i.type){if(r=a.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:a.done}}"throw"===i.type&&(r="completed",a.method="throw",a.arg=i.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var v={};c(v,n,(function(){return this}));var b=Object.getPrototypeOf,p=b&&b(b(j([])));p&&p!==t&&a.call(p,n)&&(v=p);var h=f.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,c){var i=s(e[n],e,l);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,c)}),(function(e){r("throw",e,o,c)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,c)}))}c(i.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function g(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=f,c(h,"constructor",f),c(f,"constructor",d),d.displayName=c(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,c(e,o,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},E(y.prototype),c(y.prototype,l,(function(){return this})),e.AsyncIterator=y,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new y(i(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(h),c(h,o,"Generator"),c(h,n,(function(){return this})),c(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var c=a.call(l,"catchLoc"),i=a.call(l,"finallyLoc");if(c&&i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),O(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;O(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,a=Object(c.a)(["user"]),i=Object(n.a)(a,2),d=i[0],O=i[1],x=Object(l.useState)([]),j=Object(n.a)(x,2),P=j[0],C=j[1],k=Object(E.g)(),S=Object(l.useState)(""),I=Object(n.a)(S,2),F=I[0],L=I[1],T=Object(l.useState)(!0),D=Object(n.a)(T,2),B=D[0],R=D[1],G=o.a.useState(!1),A=Object(n.a)(G,2),V=A[0],M=A[1],_=Object(l.useState)(0),q=Object(n.a)(_,2),J=q[0],z=q[1],U=Object(l.useState)(0),Y=Object(n.a)(U,2),H=Y[0],Q=Y[1],$=Object(l.useState)(20),Z=Object(n.a)($,1)[0],K=o.a.useState(!1),W=Object(n.a)(K,2),X=W[0],ee=W[1],te=Object(l.useState)({}),ae=Object(n.a)(te,2),re=ae[0],ne=ae[1],le=Object(l.useState)(0),oe=Object(n.a)(le,2),ce=oe[0],ie=oe[1],se=Object(l.useState)(1),ue=Object(n.a)(se,2),me=ue[0],de=ue[1],fe=Object(l.useState)([]),ve=Object(n.a)(fe,2),be=ve[0],pe=ve[1],he=Object(l.useState)(""),Ee=Object(n.a)(he,2),ye=Ee[0],ge=Ee[1],Ne=Object(l.useState)(""),we=Object(n.a)(Ne,2),Oe=we[0],xe=we[1],je=Object(m.a)(F,500),Pe=Object(b.a)({mode:"onChange"}),Ce=Pe.register,ke=Pe.handleSubmit,Se=Pe.reset,Ie=Pe.formState,Fe=Ie.errors,Le=(Ie.isDirty,Ie.isValid,new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")),Te=function(){ee(!1),ne({}),ie(0),Se()},De=function(){var e=Object(r.a)(w().mark((function e(t){var a,r,n,l,o,c;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.status=ce,""===t.password&&delete t.password,e.prev=2,a=JSON.stringify(t),e.next=6,Object(u.Nb)(a,null===re||void 0===re?void 0:re.id);case 6:h.b.success("User updated Successfully",{autoClose:3e3}),Ae(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),(null===e.t0||void 0===e.t0||null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)?h.b.error(e.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(l=e.t0.response)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.code)&&(c=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(u.Qb)(c).finally((function(){k.push("/user-pages/login-1")})));case 14:return e.prev=14,ee(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[2,10,14,17]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Ae()}),[H,Z]);var Be=function(){var e=Object(r.a)(w().mark((function e(t){var a,r;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(g.a)(),r=JSON.stringify({password:a}),e.prev=2,e.next=5,Object(u.Nb)(r,t);case 5:h.b.success("Password generated and sended to user via Email successfully",{autoClose:3e3}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),h.b.error("Password generation failed, please try again later");case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){Ae()}),[H,Z,ye]),Object(l.useEffect)((function(){Ae()}),[je]),Object(l.useEffect)((function(){Re()}),[]);var Re=function(){var e=Object(r.a)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.P)(5e3,1,"","branch");case 2:return e.next=4,e.sent.data;case 4:t=e.sent,pe(null===t||void 0===t?void 0:t.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(r.a)(w().mark((function e(){var t,a,r,n,l,o;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=JSON.stringify({perfomance:me}),e.next=4,Object(u.Nb)(t,null===re||void 0===re?void 0:re.id);case 4:h.b.success("Add Perfomance Successfully",{autoClose:3e3}),Ae(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?h.b.error(e.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(u.Qb)(o).finally((function(){k.push("/user-pages/login-1")})));case 12:return e.prev=12,M(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}(),Ae=function(){var e=Object(r.a)(w().mark((function e(){var t,a,r,n,l,o;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.prev=1,e.next=4,Object(u.ab)(Z,+H+1,F,ye);case 4:return e.next=6,e.sent.data;case 6:t=e.sent,C(null===t||void 0===t?void 0:t.results),z(null===t||void 0===t?void 0:t.totalPages),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?h.b.error(e.t0.response.data.message):h.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),O("user",null,{path:"/"}),Object(u.Qb)(o).finally((function(){k.push("/user-pages/login-1")})));case 15:R(!1);case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement(v.a,{show:V,onHide:Te,backdrop:"static",keyboard:!1},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Make Top Perfomer")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample"},o.a.createElement("p",{className:"card-description"}," Make Top Perfomer "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Perfomance Rank"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3",name:"perfomence",onChange:function(e){var t;de(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||0)}},o.a.createElement("option",{value:"1",selected:1===(null===re||void 0===re?void 0:re.perfomance)},"1"),o.a.createElement("option",{value:"2",selected:2===(null===re||void 0===re?void 0:re.perfomance)},"2"),o.a.createElement("option",{value:"3",selected:3===(null===re||void 0===re?void 0:re.perfomance)},"3")))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"button",onClick:Ge},"Submit Perfomance"))))))))),o.a.createElement(v.a,{show:X,onHide:Te,backdrop:"static",keyboard:!1},o.a.createElement(v.a.Header,{closeButton:!0},o.a.createElement(v.a.Title,null,"Update Ibo")),o.a.createElement(v.a.Body,null,o.a.createElement("div",{className:"row auth"},o.a.createElement("div",{className:"col-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:ke(De)},o.a.createElement("p",{className:"card-description"}," Update Ibo "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Name"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"name",defaultValue:re.name},Ce("name",{required:!0}))),Fe&&Fe.name&&o.a.createElement("p",null,"name is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),o.a.createElement("div",{className:"col-sm-10"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"address"},Ce("address",{required:!0}))),Fe&&Fe.address&&o.a.createElement("p",null,"address is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),o.a.createElement("div",{className:"col-sm-9 contact_no"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"contactno",defaultValue:re.contactno},Ce("contactno",{required:!0,pattern:Le}))),Fe&&Fe.contactno&&"required"===Fe.contactno.type&&o.a.createElement("p",null,"contact number is required field"),Fe&&Fe.contactno&&"pattern"===Fe.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Search Branch"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){var t;xe(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}},null===be||void 0===be?void 0:be.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.name===Oe,value:e.name},e.name))}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",name:"email",defaultValue:re.email},Ce("email",{required:!0,pattern:/^\S+@\S+$/i}))),Fe&&Fe.email&&"required"===Fe.email.type&&o.a.createElement("p",null,"email is required field"),Fe&&Fe.email&&"pattern"===Fe.email.type&&o.a.createElement("p",null,"invalid email formate"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"status"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect3",name:"status",onChange:function(e){var t;ie(+(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)||0)}},null===y.g||void 0===y.g?void 0:y.g.map((function(e){return o.a.createElement("option",{value:null===e||void 0===e?void 0:e.value,selected:+ce===+(null===e||void 0===e?void 0:e.value)},null===e||void 0===e?void 0:e.label)}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Role"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(p.a.Control,Object.assign({type:"text",defaultValue:re.role,name:"role"},Ce("role",{required:!0}))),Fe&&Fe.branch&&o.a.createElement("p",null,"role is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Password"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement(p.a.Control,Object.assign({type:"password",name:"password"},Ce("password"))))))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"UPDATE"))))))))),o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"ibos / Show Ibos "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===d||void 0===d||null===(e=d.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Show Ibos")))),o.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(p.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-4 col-form-label"},"Search Branch"),o.a.createElement("div",{className:"col-sm-8"},o.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){Q(0),ge(e.target.value)}},o.a.createElement("option",{selected:""===ye,value:""},"Not Selected"),null===be||void 0===be?void 0:be.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("option",{selected:e.name===ye,value:e.name},e.name))})))))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"search-field d-none d-md-block"},o.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},o.a.createElement("div",{className:"input-group"},o.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},o.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),o.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search IBO",value:F,onChange:function(e){var t;L(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),Q(0)}})))))),o.a.createElement("h4",{className:"card-title"},"Ibo list"),o.a.createElement("div",{className:"table-responsive"},o.a.createElement("table",{className:"table table-striped"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null," Name "),o.a.createElement("th",null," Contact no. "),o.a.createElement("th",null," Branch "),o.a.createElement("th",null," Email "),o.a.createElement("th",null," Role "),o.a.createElement("th",null," Status "),o.a.createElement("th",null," Generate Password "),o.a.createElement("th",null," View "),o.a.createElement("th",null," Edit "),o.a.createElement("th",null," Delete "),["admin"].includes(null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.role)&&o.a.createElement("th",null))),o.a.createElement("tbody",null,B?o.a.createElement(N.a,null):null===P||void 0===P?void 0:P.map((function(e){var t;return o.a.createElement("tr",null,o.a.createElement("td",null,null===e||void 0===e?void 0:e.name),o.a.createElement("td",null,null===e||void 0===e?void 0:e.contactno),o.a.createElement("td",null,null===e||void 0===e?void 0:e.branch),o.a.createElement("td",null,null===e||void 0===e?void 0:e.email),o.a.createElement("td",null,null===e||void 0===e?void 0:e.role),o.a.createElement("td",null,Object(y.a)(null===e||void 0===e?void 0:e.status)),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return Be(null===e||void 0===e?void 0:e.id)}},"Generate")),o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){var t;t=null===e||void 0===e?void 0:e.id,k.push("/viewUser/".concat(t))}},"View")),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=e,Se(),ne(t),void ee(!0);var t},className:"mdi mdi-lead-pencil"})),o.a.createElement("td",null,o.a.createElement("i",{onClick:function(){return t=null===e||void 0===e?void 0:e.id,void f.a.fire({title:"Are you sure?",text:"You will not be able to recover this imaginary file!",icon:"warning",showCancelButton:!0,cancelButtonColor:"#DD6B55",confirmButtonColor:"#DD6B55",confirmButtonText:"Yes, delete it!",cancelButtonText:"No, keep it"}).then((function(e){if(e.value)return Object(u.J)(t).finally((function(){return Ae()})),f.a.fire("Deleted!","Your imaginary file has been deleted.","success");e.dismiss===f.a.DismissReason.cancel&&f.a.fire("Cancelled","Your imaginary file is safe :)","error")}));var t},className:"mdi mdi-delete"})),["admin"].includes(null===d||void 0===d||null===(t=d.user)||void 0===t?void 0:t.role)&&o.a.createElement("td",null,o.a.createElement("button",{type:"button",className:"btn btn-gradient-primary btn-sm ",onClick:function(){return t=e,Se(),ne(t),void M(!0);var t}},"Make Top Perfomer")))})))),o.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),Q(e.selected)},pageRangeDisplayed:5,pageCount:J,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:H}))))))}}}]);
//# sourceMappingURL=24.7c5cf9be.chunk.js.map