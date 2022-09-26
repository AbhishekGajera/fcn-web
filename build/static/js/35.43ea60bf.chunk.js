/*! For license information please see 35.43ea60bf.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[35],{171:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),i=a(0),c=a.n(i),s=a(6),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.as,m=void 0===i?"div":i,f=Object(n.a)(e,u),v=Object(s.a)(a,"col"),b=[],p=[];return d.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+v+o:""+v+o+"-"+t),null!=r&&p.push("order"+o+"-"+r),null!=a&&p.push("offset"+o+"-"+a)})),b.length||b.push(v),c.a.createElement(m,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[l].concat(b,p))}))}));m.displayName="Col",t.a=m},176:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),o=a.n(l),i=a(0),c=a.n(i),s=(a(112),a(4)),u=a.n(s),d=["as","className","type","tooltip"],m={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,i=e.className,s=e.type,u=void 0===s?"valid":s,m=e.tooltip,f=void 0!==m&&m,v=Object(n.a)(e,d);return c.a.createElement(l,Object(r.a)({},v,{ref:t,className:o()(i,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m;var v=f,b=c.a.createContext({controlId:void 0}),p=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.type,m=void 0===d?"checkbox":d,f=e.isValid,v=void 0!==f&&f,y=e.isInvalid,g=void 0!==y&&y,E=e.isStatic,O=e.as,w=void 0===O?"input":O,x=Object(n.a)(e,h),N=Object(i.useContext)(b),j=N.controlId,P=N.custom?[s,"custom-control-input"]:[l,"form-check-input"],I=P[0],F=P[1];return l=Object(p.a)(I,F),c.a.createElement(w,Object(r.a)({},x,{ref:t,type:m,id:a||j,className:o()(u,l,v&&"is-valid",g&&"is-invalid",E&&"position-static")}))}));y.displayName="FormCheckInput";var g=y,E=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,E),m=Object(i.useContext)(b),f=m.controlId,v=m.custom?[l,"custom-control-label"]:[a,"form-check-label"],h=v[0],y=v[1];return a=Object(p.a)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:o()(s,a)}))}));O.displayName="FormCheckLabel";var w=O,x=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],N=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,m=e.disabled,f=void 0!==m&&m,h=e.isValid,y=void 0!==h&&h,E=e.isInvalid,O=void 0!==E&&E,N=e.feedbackTooltip,j=void 0!==N&&N,P=e.feedback,I=e.className,F=e.style,k=e.title,C=void 0===k?"":k,L=e.type,S=void 0===L?"checkbox":L,D=e.label,T=e.children,B=e.custom,R=e.as,G=void 0===R?"input":R,A=Object(n.a)(e,x),V="switch"===S||B,_=V?[s,"custom-control"]:[l,"form-check"],U=_[0],q=_[1];l=Object(p.a)(U,q);var M=Object(i.useContext)(b).controlId,z=Object(i.useMemo)((function(){return{controlId:a||M,custom:V}}),[M,V,a]),J=V||null!=D&&!1!==D&&!T,Y=c.a.createElement(g,Object(r.a)({},A,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:O,isStatic:!J,disabled:f,as:G}));return c.a.createElement(b.Provider,{value:z},c.a.createElement("div",{style:F,className:o()(I,l,V&&"custom-"+S,d&&l+"-inline")},T||c.a.createElement(c.a.Fragment,null,Y,J&&c.a.createElement(w,{title:C},D),(y||O)&&c.a.createElement(v,{type:y?"valid":"invalid",tooltip:j},P))))}));N.displayName="FormCheck",N.Input=g,N.Label=w;var j=N,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,f=e.lang,v=e.as,h=void 0===v?"input":v,y=Object(n.a)(e,P),g=Object(i.useContext)(b),E=g.controlId,O=g.custom?[s,"custom-file-input"]:[l,"form-control-file"],w=O[0],x=O[1];return l=Object(p.a)(w,x),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:a||E,type:"file",lang:f,className:o()(u,l,d&&"is-valid",m&&"is-invalid")}))}));I.displayName="FormFileInput";var F=I,k=["bsPrefix","bsCustomPrefix","className","htmlFor"],C=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,k),m=Object(i.useContext)(b),f=m.controlId,v=m.custom?[l,"custom-file-label"]:[a,"form-file-label"],h=v[0],y=v[1];return a=Object(p.a)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:o()(s,a),"data-browse":d["data-browse"]}))}));C.displayName="FormFileLabel";var L=C,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],D=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,m=e.isValid,f=void 0!==m&&m,h=e.isInvalid,y=void 0!==h&&h,g=e.feedbackTooltip,E=void 0!==g&&g,O=e.feedback,w=e.className,x=e.style,N=e.label,j=e.children,P=e.custom,I=e.lang,k=e["data-browse"],C=e.as,D=void 0===C?"div":C,T=e.inputAs,B=void 0===T?"input":T,R=Object(n.a)(e,S),G=P?[s,"custom"]:[l,"form-file"],A=G[0],V=G[1];l=Object(p.a)(A,V);var _=Object(i.useContext)(b).controlId,U=Object(i.useMemo)((function(){return{controlId:a||_,custom:P}}),[_,P,a]),q=null!=N&&!1!==N&&!j,M=c.a.createElement(F,Object(r.a)({},R,{ref:t,isValid:f,isInvalid:y,disabled:d,as:B,lang:I}));return c.a.createElement(b.Provider,{value:U},c.a.createElement(D,{style:x,className:o()(w,l,P&&"custom-file")},j||c.a.createElement(c.a.Fragment,null,P?c.a.createElement(c.a.Fragment,null,M,q&&c.a.createElement(L,{"data-browse":k},N)):c.a.createElement(c.a.Fragment,null,q&&c.a.createElement(L,null,N),M),(f||y)&&c.a.createElement(v,{type:f?"valid":"invalid",tooltip:E},O))))}));D.displayName="FormFile",D.Input=F,D.Label=L;var T=D,B=(a(52),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),R=c.a.forwardRef((function(e,t){var a,l,s=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,m=e.size,f=e.htmlSize,v=e.id,h=e.className,y=e.isValid,g=void 0!==y&&y,E=e.isInvalid,O=void 0!==E&&E,w=e.plaintext,x=e.readOnly,N=e.custom,j=e.as,P=void 0===j?"input":j,I=Object(n.a)(e,B),F=Object(i.useContext)(b).controlId,k=N?[u,"custom"]:[s,"form-control"],C=k[0],L=k[1];if(s=Object(p.a)(C,L),w)(l={})[s+"-plaintext"]=!0,a=l;else if("file"===d){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===d){var D;(D={})[s+"-range"]=!0,a=D}else if("select"===P&&N){var T;(T={})[s+"-select"]=!0,T[s+"-select-"+m]=m,a=T}else{var R;(R={})[s]=!0,R[s+"-"+m]=m,a=R}return c.a.createElement(P,Object(r.a)({},I,{type:d,size:f,ref:t,readOnly:x,id:v||F,className:o()(h,a,g&&"is-valid",O&&"is-invalid")}))}));R.displayName="FormControl";var G=Object.assign(R,{Feedback:v}),A=["bsPrefix","className","children","controlId","as"],V=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,u=e.controlId,d=e.as,m=void 0===d?"div":d,f=Object(n.a)(e,A);a=Object(p.a)(a,"form-group");var v=Object(i.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(b.Provider,{value:v},c.a.createElement(m,Object(r.a)({},f,{ref:t,className:o()(l,a)}),s))}));V.displayName="FormGroup";var _=V,U=a(171),q=["as","bsPrefix","column","srOnly","className","htmlFor"],M=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,s=e.bsPrefix,u=e.column,d=e.srOnly,m=e.className,f=e.htmlFor,v=Object(n.a)(e,q),h=Object(i.useContext)(b).controlId;s=Object(p.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var g=o()(m,s,d&&"sr-only",u&&y);return f=f||h,u?c.a.createElement(U.a,Object(r.a)({ref:t,as:"label",className:g,htmlFor:f},v)):c.a.createElement(l,Object(r.a)({ref:t,className:g,htmlFor:f},v))}));M.displayName="FormLabel",M.defaultProps={column:!1,srOnly:!1};var z=M,J=["bsPrefix","className","as","muted"],Y=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,i=e.as,s=void 0===i?"small":i,u=e.muted,d=Object(n.a)(e,J);return a=Object(p.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},d,{ref:t,className:o()(l,a,u&&"text-muted")}))}));Y.displayName="FormText";var Q=Y,Z=c.a.forwardRef((function(e,t){return c.a.createElement(j,Object(r.a)({},e,{ref:t,type:"switch"}))}));Z.displayName="Switch",Z.Input=j.Input,Z.Label=j.Label;var H=Z,K=a(54),W=["bsPrefix","inline","className","validated","as"],X=Object(K.a)("form-row"),$=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,i=e.className,s=e.validated,u=e.as,d=void 0===u?"form":u,m=Object(n.a)(e,W);return a=Object(p.a)(a,"form"),c.a.createElement(d,Object(r.a)({},m,{ref:t,className:o()(i,s&&"was-validated",l&&a+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=X,$.Group=_,$.Control=G,$.Check=j,$.File=T,$.Switch=H,$.Label=z,$.Text=Q;t.a=$},187:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return o})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],n=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],o=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],i=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],c=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],s=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},u=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},605:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(33),l=a(0),o=a.n(l),i=a(169),c=a(174),s=a(176),u=a(45),d=a(24),m=a(7),f=a(187);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(I){i=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,l=Object.create(n.prototype),o=new N(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return P()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var i=O(o,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=c;var u={};function d(){}function m(){}function f(){}var b={};i(b,n,(function(){return this}));var p=Object.getPrototypeOf,h=p&&p(p(j([])));h&&h!==t&&a.call(h,n)&&(b=h);var y=f.prototype=d.prototype=Object.create(b);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,i){var c=s(e[n],e,l);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,i)}))}i(c.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function O(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function j(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=f,i(y,"constructor",f),i(f,"constructor",m),m.displayName=i(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,i(e,o,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},g(E.prototype),i(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new E(c(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(y),i(y,o,"Generator"),i(y,n,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=j,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:j(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(i.a)(["user"]),a=Object(n.a)(t,1)[0],b=Object(m.g)(),p=Object(l.useState)([]),h=Object(n.a)(p,2),y=h[0],g=h[1],E=Object(l.useState)([]),O=Object(n.a)(E,2),w=O[0],x=O[1],N=Object(l.useState)([]),j=Object(n.a)(N,2),P=j[0],I=j[1],F=Object(l.useState)("IBO"),k=Object(n.a)(F,2),C=k[0],L=k[1];Object(l.useEffect)((function(){S(),D(),T()}),[]);var S=function(){var e=Object(r.a)(v().mark((function e(){var t,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.ib)(3e3);case 2:a=e.sent,g(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(r.a)(v().mark((function e(){var t,a,r,n;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.Z)(5e3);case 2:n=e.sent,x(null===n||void 0===n||null===(t=n.data)||void 0===t?void 0:t.results),q("selectUser",null===n||void 0===n||null===(a=n.data)||void 0===a||null===(r=a.results[0])||void 0===r?void 0:r.id),M("selectUser");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(r.a)(v().mark((function e(){var t,a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.O)(5e3);case 2:a=e.sent,I(null===a||void 0===a||null===(t=a.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=Object(c.a)({mode:"onChange"}),R=B.register,G=B.handleSubmit,A=B.formState,V=A.errors,_=(A.isDirty,A.isValid,B.getValues),U=B.watch,q=B.setValue,M=B.clearErrors,z=_(),J=U();Object(l.useEffect)((function(){"branch"===(null===J||void 0===J?void 0:J.addto)&&"branch"!==C&&(L("branch"),q("selectUser",P[0].id)),"IBO"===(null===J||void 0===J?void 0:J.addto)&&"IBO"!==C&&(L("IBO"),q("selectUser",w[0].id))}),[J]);var Y=function(){var e=Object(r.a)(v().mark((function e(t){var a;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify({product:null===t||void 0===t?void 0:t.selectProduct,user:null===t||void 0===t?void 0:t.selectUser,userType:null===t||void 0===t?void 0:t.addto,Description:null===t||void 0===t?void 0:t.description,qty:null===t||void 0===t?void 0:t.qty,status:1}),e.prev=1,e.next=4,Object(d.h)(a);case 4:u.b.success("Target added successfully"),b.push("/targets/viewtarget"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"},"Targets / Add Target "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},o.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===a||void 0===a||null===(e=a.user)||void 0===e?void 0:e.role," Dashboard")),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Add Target")))),o.a.createElement("div",{className:"row auth",style:{display:"flex",justifyContent:"center"}},o.a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12 grid-margin"},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card-body"},o.a.createElement("form",{className:"form-sample",onSubmit:G(Y)},o.a.createElement("p",{className:"card-description"}," Add Target "),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Description"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({as:"textarea",type:"text",name:"description"},R("description",{required:!0}),{placeholder:"description"})),V&&V.description&&o.a.createElement("p",null,"Description is required field"))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Add to"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"addto"},R("addto",{required:!0})),f.f.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.value,label:null===e||void 0===e?void 0:e.label})}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Product"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"selectProduct"},R("selectProduct",{required:!0})),o.a.createElement("option",{value:""},"--Select Product--"),null===y||void 0===y?void 0:y.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))))))),"branch"===(null===z||void 0===z?void 0:z.addto)&&o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Users"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"selectUser"},R("selectUser",{required:!1})),o.a.createElement("option",{value:""},"--Select User--"),null===P||void 0===P?void 0:P.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))))))),"IBO"===(null===z||void 0===z?void 0:z.addto)&&o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Users"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"selectUser"},R("selectUser",{required:!0})),null===w||void 0===w?void 0:w.map((function(e,t){return o.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement(s.a.Group,{className:"row"},o.a.createElement("label",{className:"col-sm-3 col-form-label"},"Quantity"," "),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement(s.a.Control,Object.assign({type:"number",name:"qty"},R("qty",{required:!1}),{placeholder:"qty"})))))),o.a.createElement("div",{className:"mt-3",style:{display:"flex",justifyContent:"center"}},o.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=35.43ea60bf.chunk.js.map