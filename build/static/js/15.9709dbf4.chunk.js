/*! For license information please see 15.9709dbf4.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[15],{174:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),i=a.n(l),o=a(0),c=a.n(o),s=a(6),u=["bsPrefix","className","as"],d=["xl","lg","md","sm","xs"],m=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.as,m=void 0===o?"div":o,f=Object(n.a)(e,u),v=Object(s.a)(a,"col"),b=[],p=[];return d.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"===typeof n&&null!=n){var l=n.span;t=void 0===l||l,a=n.offset,r=n.order}else t=n;var i="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+v+i:""+v+i+"-"+t),null!=r&&p.push("order"+i+"-"+r),null!=a&&p.push("offset"+i+"-"+a)})),b.length||b.push(v),c.a.createElement(m,Object(r.a)({},f,{ref:t,className:i.a.apply(void 0,[l].concat(b,p))}))}));m.displayName="Col",t.a=m},176:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var r=a(36),n=a(0),l=function(e,t){var a=Object(n.useState)(e),l=Object(r.a)(a,2),i=l[0],o=l[1];return Object(n.useEffect)((function(){var a=setTimeout((function(){o(e)}),t);return function(){clearTimeout(a)}}),[e,t]),i}},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var r=a(36),n=a(0),l=a(7),i=function(e){var t=Object(l.g)(),a=Object(l.h)(),i=a.search,o=a.pathname,c=new URLSearchParams(i),s=c.get(e),u=Object(n.useState)(null!==s?s:""),d=Object(r.a)(u,2),m=d[0],f=d[1];return[m,function(a){c.set(e,a),t.replace({pathname:o,search:c.toString()}),f(a)}]}},179:function(e,t,a){"use strict";var r=a(1),n=a(3),l=a(5),i=a.n(l),o=a(0),c=a.n(o),s=(a(112),a(4)),u=a.n(s),d=["as","className","type","tooltip"],m={type:u.a.string,tooltip:u.a.bool,as:u.a.elementType},f=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"div":a,o=e.className,s=e.type,u=void 0===s?"valid":s,m=e.tooltip,f=void 0!==m&&m,v=Object(n.a)(e,d);return c.a.createElement(l,Object(r.a)({},v,{ref:t,className:i()(o,u+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m;var v=f,b=c.a.createContext({controlId:void 0}),p=a(6),h=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],y=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.type,m=void 0===d?"checkbox":d,f=e.isValid,v=void 0!==f&&f,y=e.isInvalid,g=void 0!==y&&y,E=e.isStatic,O=e.as,x=void 0===O?"input":O,w=Object(n.a)(e,h),j=Object(o.useContext)(b),N=j.controlId,P=j.custom?[s,"custom-control-input"]:[l,"form-check-input"],I=P[0],F=P[1];return l=Object(p.a)(I,F),c.a.createElement(x,Object(r.a)({},w,{ref:t,type:m,id:a||N,className:i()(u,l,v&&"is-valid",g&&"is-invalid",E&&"position-static")}))}));y.displayName="FormCheckInput";var g=y,E=["bsPrefix","bsCustomPrefix","className","htmlFor"],O=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,E),m=Object(o.useContext)(b),f=m.controlId,v=m.custom?[l,"custom-control-label"]:[a,"form-check-label"],h=v[0],y=v[1];return a=Object(p.a)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:i()(s,a)}))}));O.displayName="FormCheckLabel";var x=O,w=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],j=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.inline,d=void 0!==u&&u,m=e.disabled,f=void 0!==m&&m,h=e.isValid,y=void 0!==h&&h,E=e.isInvalid,O=void 0!==E&&E,j=e.feedbackTooltip,N=void 0!==j&&j,P=e.feedback,I=e.className,F=e.style,C=e.title,k=void 0===C?"":C,L=e.type,S=void 0===L?"checkbox":L,T=e.label,R=e.children,D=e.custom,_=e.as,B=void 0===_?"input":_,A=Object(n.a)(e,w),G="switch"===S||D,V=G?[s,"custom-control"]:[l,"form-check"],z=V[0],M=V[1];l=Object(p.a)(z,M);var J=Object(o.useContext)(b).controlId,Y=Object(o.useMemo)((function(){return{controlId:a||J,custom:G}}),[J,G,a]),U=G||null!=T&&!1!==T&&!R,Z=c.a.createElement(g,Object(r.a)({},A,{type:"switch"===S?"checkbox":S,ref:t,isValid:y,isInvalid:O,isStatic:!U,disabled:f,as:B}));return c.a.createElement(b.Provider,{value:Y},c.a.createElement("div",{style:F,className:i()(I,l,G&&"custom-"+S,d&&l+"-inline")},R||c.a.createElement(c.a.Fragment,null,Z,U&&c.a.createElement(x,{title:k},T),(y||O)&&c.a.createElement(v,{type:y?"valid":"invalid",tooltip:N},P))))}));j.displayName="FormCheck",j.Input=g,j.Label=x;var N=j,P=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],I=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.className,d=e.isValid,m=e.isInvalid,f=e.lang,v=e.as,h=void 0===v?"input":v,y=Object(n.a)(e,P),g=Object(o.useContext)(b),E=g.controlId,O=g.custom?[s,"custom-file-input"]:[l,"form-control-file"],x=O[0],w=O[1];return l=Object(p.a)(x,w),c.a.createElement(h,Object(r.a)({},y,{ref:t,id:a||E,type:"file",lang:f,className:i()(u,l,d&&"is-valid",m&&"is-invalid")}))}));I.displayName="FormFileInput";var F=I,C=["bsPrefix","bsCustomPrefix","className","htmlFor"],k=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.bsCustomPrefix,s=e.className,u=e.htmlFor,d=Object(n.a)(e,C),m=Object(o.useContext)(b),f=m.controlId,v=m.custom?[l,"custom-file-label"]:[a,"form-file-label"],h=v[0],y=v[1];return a=Object(p.a)(h,y),c.a.createElement("label",Object(r.a)({},d,{ref:t,htmlFor:u||f,className:i()(s,a),"data-browse":d["data-browse"]}))}));k.displayName="FormFileLabel";var L=k,S=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],T=c.a.forwardRef((function(e,t){var a=e.id,l=e.bsPrefix,s=e.bsCustomPrefix,u=e.disabled,d=void 0!==u&&u,m=e.isValid,f=void 0!==m&&m,h=e.isInvalid,y=void 0!==h&&h,g=e.feedbackTooltip,E=void 0!==g&&g,O=e.feedback,x=e.className,w=e.style,j=e.label,N=e.children,P=e.custom,I=e.lang,C=e["data-browse"],k=e.as,T=void 0===k?"div":k,R=e.inputAs,D=void 0===R?"input":R,_=Object(n.a)(e,S),B=P?[s,"custom"]:[l,"form-file"],A=B[0],G=B[1];l=Object(p.a)(A,G);var V=Object(o.useContext)(b).controlId,z=Object(o.useMemo)((function(){return{controlId:a||V,custom:P}}),[V,P,a]),M=null!=j&&!1!==j&&!N,J=c.a.createElement(F,Object(r.a)({},_,{ref:t,isValid:f,isInvalid:y,disabled:d,as:D,lang:I}));return c.a.createElement(b.Provider,{value:z},c.a.createElement(T,{style:w,className:i()(x,l,P&&"custom-file")},N||c.a.createElement(c.a.Fragment,null,P?c.a.createElement(c.a.Fragment,null,J,M&&c.a.createElement(L,{"data-browse":C},j)):c.a.createElement(c.a.Fragment,null,M&&c.a.createElement(L,null,j),J),(f||y)&&c.a.createElement(v,{type:f?"valid":"invalid",tooltip:E},O))))}));T.displayName="FormFile",T.Input=F,T.Label=L;var R=T,D=(a(50),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),_=c.a.forwardRef((function(e,t){var a,l,s=e.bsPrefix,u=e.bsCustomPrefix,d=e.type,m=e.size,f=e.htmlSize,v=e.id,h=e.className,y=e.isValid,g=void 0!==y&&y,E=e.isInvalid,O=void 0!==E&&E,x=e.plaintext,w=e.readOnly,j=e.custom,N=e.as,P=void 0===N?"input":N,I=Object(n.a)(e,D),F=Object(o.useContext)(b).controlId,C=j?[u,"custom"]:[s,"form-control"],k=C[0],L=C[1];if(s=Object(p.a)(k,L),x)(l={})[s+"-plaintext"]=!0,a=l;else if("file"===d){var S;(S={})[s+"-file"]=!0,a=S}else if("range"===d){var T;(T={})[s+"-range"]=!0,a=T}else if("select"===P&&j){var R;(R={})[s+"-select"]=!0,R[s+"-select-"+m]=m,a=R}else{var _;(_={})[s]=!0,_[s+"-"+m]=m,a=_}return c.a.createElement(P,Object(r.a)({},I,{type:d,size:f,ref:t,readOnly:w,id:v||F,className:i()(h,a,g&&"is-valid",O&&"is-invalid")}))}));_.displayName="FormControl";var B=Object.assign(_,{Feedback:v}),A=["bsPrefix","className","children","controlId","as"],G=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,s=e.children,u=e.controlId,d=e.as,m=void 0===d?"div":d,f=Object(n.a)(e,A);a=Object(p.a)(a,"form-group");var v=Object(o.useMemo)((function(){return{controlId:u}}),[u]);return c.a.createElement(b.Provider,{value:v},c.a.createElement(m,Object(r.a)({},f,{ref:t,className:i()(l,a)}),s))}));G.displayName="FormGroup";var V=G,z=a(174),M=["as","bsPrefix","column","srOnly","className","htmlFor"],J=c.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"label":a,s=e.bsPrefix,u=e.column,d=e.srOnly,m=e.className,f=e.htmlFor,v=Object(n.a)(e,M),h=Object(o.useContext)(b).controlId;s=Object(p.a)(s,"form-label");var y="col-form-label";"string"===typeof u&&(y=y+" "+y+"-"+u);var g=i()(m,s,d&&"sr-only",u&&y);return f=f||h,u?c.a.createElement(z.a,Object(r.a)({ref:t,as:"label",className:g,htmlFor:f},v)):c.a.createElement(l,Object(r.a)({ref:t,className:g,htmlFor:f},v))}));J.displayName="FormLabel",J.defaultProps={column:!1,srOnly:!1};var Y=J,U=["bsPrefix","className","as","muted"],Z=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,o=e.as,s=void 0===o?"small":o,u=e.muted,d=Object(n.a)(e,U);return a=Object(p.a)(a,"form-text"),c.a.createElement(s,Object(r.a)({},d,{ref:t,className:i()(l,a,u&&"text-muted")}))}));Z.displayName="FormText";var q=Z,H=c.a.forwardRef((function(e,t){return c.a.createElement(N,Object(r.a)({},e,{ref:t,type:"switch"}))}));H.displayName="Switch",H.Input=N.Input,H.Label=N.Label;var K=H,Q=a(53),W=["bsPrefix","inline","className","validated","as"],X=Object(Q.a)("form-row"),$=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.inline,o=e.className,s=e.validated,u=e.as,d=void 0===u?"form":u,m=Object(n.a)(e,W);return a=Object(p.a)(a,"form"),c.a.createElement(d,Object(r.a)({},m,{ref:t,className:i()(o,s&&"was-validated",l&&a+"-inline")}))}));$.displayName="Form",$.defaultProps={inline:!1},$.Row=X,$.Group=V,$.Control=B,$.Check=N,$.File=R,$.Switch=K,$.Label=Y,$.Text=q;t.a=$},180:function(e,t,a){"use strict";a.d(t,"g",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return l})),a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return c})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return u}));var r=[{value:0,label:"Active"},{value:1,label:"In Active"},{value:2,label:"Terminated"}],n=[{value:"user",label:"User"},{value:"admin",label:"Admin"},{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],l=[{value:"IBO",label:"IBO"},{value:"branch",label:"Branch"}],i=[{value:(new Date).setDate((new Date).getDate()-7),label:"1 week"},{value:(new Date).setDate((new Date).getDate()-30),label:"1 month"},{value:(new Date).setDate((new Date).getDate()-90),label:"3 month"},{value:(new Date).setDate((new Date).getDate()-180),label:"6 month"},{value:(new Date).setDate((new Date).getDate()-365),label:"1 Year"}],o=[{value:"Office expence",label:"Office expence"},{value:"Employee expence",label:"Employee expence"},{value:"Misleniuneous expence",label:"Misleniuneous expence"},{value:"Other expence",label:"Other expence"}],c=[{value:"Petrol",label:"Petrol"},{value:"Food",label:"Food"},{value:"Rent",label:"Rent"},{value:"Tea",label:"Tea"},{value:"Transport",label:"Transport"},{value:"Gift",label:"Gift"},{value:"Printing",label:"Printing"},{value:"Advertising",label:"Advertising"},{value:"Electricity Bill",label:"Electricity Bill"},{value:"Cleaning",label:"Cleaning"},{value:"Salary",label:"Salary"},{value:"Medical Expences",label:"Medical Expences"},{value:"Insurance",label:"Insurance"},{value:"Legal & Professionals Fees",label:"Legal & Professionals Fees"},{value:"Phone Bill",label:"Phone Bill"},{value:"Internet Bill",label:"Internet Bill"},{value:"Stationaries Bill",label:"Stationaries Bill"},{value:"Depreciation",label:"Depreciation"},{value:"Row materials",label:"Row materials"},{value:"Books and magazine subscriptions",label:"Books and magazine subscriptions"}],s=function(e){switch(+e){case 0:return"Active";case 1:return"In Active";case 2:return"Terminated";default:return"Active"}},u=function(e){switch(+e){case 1:return"Running";case 2:return"Finished";case 3:return"Cancelled";case 4:return"Archieved";default:return"Cancelled"}}},521:function(e,t,a){"use strict";a.r(t);var r=a(49),n=a(36),l=a(0),i=a.n(l),o=a(169),c=a(181),s=a.n(c),u=a(52),d=a(179),m=a(176),f=a(82),v=a(177),b=a(81),p=a(7),h=a(180);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function o(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{o({},"")}catch(I){o=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,l=Object.create(n.prototype),i=new j(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return P()}for(a.method=n,a.arg=l;;){var i=a.delegate;if(i){var o=O(i,a);if(o){if(o===u)continue;return o}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,i),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(I){return{type:"throw",arg:I}}}e.wrap=c;var u={};function d(){}function m(){}function f(){}var v={};o(v,n,(function(){return this}));var b=Object.getPrototypeOf,p=b&&b(b(N([])));p&&p!==t&&a.call(p,n)&&(v=p);var h=f.prototype=d.prototype=Object.create(v);function g(e){["next","throw","return"].forEach((function(t){o(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var r;this._invoke=function(n,l){function i(){return new t((function(r,i){!function r(n,l,i,o){var c=s(e[n],e,l);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,i,o)}),(function(e){r("throw",e,i,o)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return r("throw",e,i,o)}))}o(c.arg)}(n,l,r,i)}))}return r=r?r.then(i,i):i()}}function O(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,O(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function N(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=f,o(h,"constructor",f),o(f,"constructor",m),m.displayName=o(f,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,o(e,i,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},g(E.prototype),o(E.prototype,l,(function(){return this})),e.AsyncIterator=E,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var i=new E(c(t,a,r,n),l);return e.isGeneratorFunction(a)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},g(h),o(h,i,"Generator"),o(h,n,(function(){return this})),o(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=N,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return i.type="throw",i.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],i=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var o=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(o&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(o){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var i=l?l.completion:{};return i.type=e,i.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),w(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;w(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:N(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(l.useState)(""),a=Object(n.a)(t,2),c=a[0],g=a[1],E=Object(m.a)(c,500),O=Object(l.useState)(0),x=Object(n.a)(O,2),w=x[0],j=x[1],N=Object(l.useState)(""),P=Object(n.a)(N,2),I=P[0],F=P[1],C=Object(v.a)("page"),k=Object(n.a)(C,2),L=k[0],S=k[1],T=Object(l.useState)(10),R=Object(n.a)(T,1)[0],D=Object(o.a)(["user"]),_=Object(n.a)(D,2),B=_[0],A=_[1],G=Object(l.useState)([]),V=Object(n.a)(G,2),z=V[0],M=V[1],J=Object(l.useState)(!0),Y=Object(n.a)(J,2),U=Y[0],Z=Y[1],q=Object(p.g)();Object(l.useEffect)((function(){H()}),[L,R,E]);var H=function(){var e=Object(r.a)(y().mark((function e(){var t,a,r,n,l,i;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.next=4,Object(u.J)(R,+L+1);case 4:return e.next=6,e.sent.data;case 6:t=e.sent,M(null===t||void 0===t?void 0:t.results),j(null===t||void 0===t?void 0:t.totalPages),Z(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?b.b.error(e.t0.response.data.message):b.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(i=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),A("user",null,{path:"/"}),Object(u.Y)(i).finally((function(){q.push("/user-pages/login-1")})));case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",null,i.a.createElement("div",{className:"page-header"},i.a.createElement("h3",{className:"page-title"},"Revenue / Show Revenue "),i.a.createElement("nav",{"aria-label":"breadcrumb"},i.a.createElement("ol",{className:"breadcrumb"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===B||void 0===B||null===(e=B.user)||void 0===e?void 0:e.role," Dashboard")),i.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Show Revenue")))),i.a.createElement("div",{className:"col-lg-12 grid-margin stretch-card p0"},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-md-6"},i.a.createElement(d.a.Group,{className:"row"},i.a.createElement("label",{className:"col-sm-4 col-form-label"},"Select Time"),i.a.createElement("div",{className:"col-sm-8"},i.a.createElement("select",{className:"form-control form-control-sm",id:"exampleFormControlSelect2",name:"branch",onChange:function(e){S(0),F(e.target.value)}},i.a.createElement("option",{selected:""===I,value:""},"Not Selected"),null===h.h||void 0===h.h?void 0:h.h.map((function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("option",{selected:e.value===I,value:e.value},e.label))})))))),i.a.createElement("div",{className:"col-md-6"},i.a.createElement("div",{className:"search-field d-none d-md-block"},i.a.createElement("form",{className:"d-flex align-items-center h-100",action:"#"},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend outline-gray bg-transparent"},i.a.createElement("i",{className:"input-group-text border-0 mdi mdi-magnify"})),i.a.createElement("input",{type:"text",className:"form-control outline-gray bg-transparent border-0",placeholder:"Search Revenue",value:c,onChange:function(e){var t;g(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value),S(0)}})))))),i.a.createElement("h4",{className:"card-title"},"Revenue list"),i.a.createElement("div",{className:"table-responsive"},i.a.createElement("table",{className:"table table-striped"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Earning From "),i.a.createElement("th",null," Product "),i.a.createElement("th",null," Total Revenue "),i.a.createElement("th",null," Net Profit "),i.a.createElement("th",null," Commision To Branch "),i.a.createElement("th",null," Commission To IBO "))),i.a.createElement("tbody",null,U?i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,null)):null===z||void 0===z?void 0:z.map((function(e,t){var a;return i.a.createElement("tr",{key:t},i.a.createElement("td",null,null===e||void 0===e?void 0:e.earning_from),i.a.createElement("td",null,null===e||void 0===e||null===(a=e.product)||void 0===a?void 0:a.name),i.a.createElement("td",null,null===e||void 0===e?void 0:e.total_revenue),i.a.createElement("td",null,null===e||void 0===e?void 0:e.net_revenue),i.a.createElement("td",null,null===e||void 0===e?void 0:e.commision_branch),i.a.createElement("td",null,null===e||void 0===e?void 0:e.commision_ibo),i.a.createElement("td",null))})))),i.a.createElement(s.a,{breakLabel:"...",nextLabel:"next >",className:"client-list",onPageChange:function(e){window.scrollTo(0,0),S(e.selected)},pageRangeDisplayed:5,pageCount:w,previousLabel:"< previous",renderOnZeroPageCount:null,forcePage:L}))))))}}}]);
//# sourceMappingURL=15.9709dbf4.chunk.js.map