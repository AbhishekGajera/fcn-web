/*! For license information please see 81.d8609785.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[81],{638:function(e,t,a){"use strict";a.r(t);var r=a(12),n=a(10),l=a(0),o=a.n(l),i=a(11),c=a(33),s=a(15),u=a(192),d=a(68),m=a.n(d);function v(){v=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",l=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(j){i=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,l=Object.create(n.prototype),o=new x(r||[]);return l._invoke=function(e,t,a){var r="suspendedStart";return function(n,l){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw l;return O()}for(a.method=n,a.arg=l;;){var o=a.delegate;if(o){var i=N(o,a);if(i){if(i===u)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,o),l}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(j){return{type:"throw",arg:j}}}e.wrap=c;var u={};function d(){}function m(){}function h(){}var p={};i(p,n,(function(){return this}));var f=Object.getPrototypeOf,E=f&&f(f(L([])));E&&E!==t&&a.call(E,n)&&(p=E);var b=h.prototype=d.prototype=Object.create(p);function g(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var r;this._invoke=function(n,l){function o(){return new t((function(r,o){!function r(n,l,o,i){var c=s(e[n],e,l);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,o,i)}),(function(e){r("throw",e,o,i)})):t.resolve(d).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,i)}))}i(c.arg)}(n,l,r,o)}))}return r=r?r.then(o,o):o()}}function N(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,N(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,l=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return l.next=l}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=h,i(b,"constructor",h),i(h,"constructor",m),m.displayName=i(h,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,o,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(y.prototype),i(y.prototype,l,(function(){return this})),e.AsyncIterator=y,e.async=function(t,a,r,n,l){void 0===l&&(l=Promise);var o=new y(c(t,a,r,n),l);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(b),i(b,o,"Generator"),i(b,n,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var l=this.tryEntries[n],o=l.completion;if("root"===l.tryLoc)return r("end");if(l.tryLoc<=this.prev){var i=a.call(l,"catchLoc"),c=a.call(l,"finallyLoc");if(i&&c){if(this.prev<l.catchLoc)return r(l.catchLoc,!0);if(this.prev<l.finallyLoc)return r(l.finallyLoc)}else if(i){if(this.prev<l.catchLoc)return r(l.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<l.finallyLoc)return r(l.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var l=n;break}}l&&("break"===e||"continue"===e)&&l.tryLoc<=t&&t<=l.finallyLoc&&(l=null);var o=l?l.completion:{};return o.type=e,o.arg=t,l?(this.method="next",this.next=l.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),_(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;_(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,a,d,h,p,f,E,b,g,y,N,w,_,x,L,O,j,k,C,A=Object(i.i)().id,I=Object(l.useState)([]),Y=Object(n.a)(I,2),D=Y[0],P=Y[1],S=Object(u.a)(["user"]),M=Object(n.a)(S,2),G=(M[0],M[1]),T=Object(i.g)(),B=function(){var e=Object(r.a)(v().mark((function e(){var t,a,r,n,l,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(s.Fb)(A);case 3:return e.next=5,e.sent.data;case 5:t=e.sent,P(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?c.b.error(e.t0.response.data.message):c.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.code)&&(o=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),G("user",null,{path:"/"}),Object(s.ec)(o).finally((function(){T.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){B()}),[A]),o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h3",{className:"page-title"}," View Detail "),o.a.createElement("nav",{"aria-label":"breadcrumb"},o.a.createElement("ol",{className:"breadcrumb"},o.a.createElement("li",{className:"breadcrumb-item"},"View"),o.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"View Detail")))),o.a.createElement("div",{className:"video-section"},o.a.createElement("div",{class:""},o.a.createElement("div",{class:"card-group vgr-cards"},o.a.createElement("div",{class:"card"},o.a.createElement("div",{class:"card-body"},o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-10"},"Personal Information : ")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Name: ")," ",null===D||void 0===D?void 0:D.name)),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Email: ")," ",null===D||void 0===D?void 0:D.email)),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Contact No: ")," ",null===D||void 0===D?void 0:D.contactno)),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Date Of Birth: ")," ",m()(null===D||void 0===D?void 0:D.dob).format("DD-MM-YYYY"))),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Address: ")," ",null===D||void 0===D?void 0:D.address)),o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Country: ")," ",null===D||void 0===D?void 0:D.country)),(null===D||void 0===D?void 0:D.bankAccNo)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Bank Account No: ")," ",null===D||void 0===D?void 0:D.bankAccNo)),(null===D||void 0===D?void 0:D.bankIfscCode)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Bank IFSC Code: ")," ",null===D||void 0===D?void 0:D.bankIfscCode))),o.a.createElement("div",{className:"col-md-6"},(null===D||void 0===D?void 0:D.image)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Upload Cancel Cheque Image: "),o.a.createElement("br",null),o.a.createElement("img",{src:null===D||void 0===D?void 0:D.image,alt:"aadhar_card_img",className:"proof_img"}))),(null===D||void 0===D?void 0:D.avatar)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Upload Cancel Cheque Image: "),o.a.createElement("br",null),o.a.createElement("img",{src:null===D||void 0===D?void 0:D.avatar,alt:"aadhar_card_img",className:"proof_img"}))),(null===D||void 0===D?void 0:D.cancel_cheque)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Cancel Cheque Image: "),o.a.createElement("br",null),o.a.createElement("img",{src:null===D||void 0===D?void 0:D.cancel_cheque,alt:"cancel_cheque",className:"proof_img"}))),(null===D||void 0===D?void 0:D.aadhar_card_img)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Aadhar Card Image: "),o.a.createElement("br",null),o.a.createElement("img",{src:null===D||void 0===D?void 0:D.aadhar_card_img,alt:"aadhar_card_img",className:"proof_img"}))),(null===D||void 0===D?void 0:D.aadhar_card_no)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Aadhar Card No: ")," ",null===D||void 0===D?void 0:D.aadhar_card_no)),(null===D||void 0===D?void 0:D.pan_card_img)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Pan Card Image: "),o.a.createElement("br",null),o.a.createElement("img",{src:null===D||void 0===D?void 0:D.pan_card_img,alt:"pan_card_img",className:"proof_img"}))),(null===D||void 0===D?void 0:D.pan_card_no)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Pan Card No: ")," ",null===D||void 0===D?void 0:D.pan_card_no)),(null===D||void 0===D?void 0:D.branch)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",null,o.a.createElement("b",null,"Branch: ")," ",null===D||void 0===D?void 0:D.branch)),(null===D||void 0===D?void 0:D.b_head_name)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",null,o.a.createElement("b",null,"Branch Head Name: ")," ",null===D||void 0===D?void 0:D.b_head_name)),(null===D||void 0===D?void 0:D.b_aadhar_card_no)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",null,o.a.createElement("b",null,"Branch AadharCard No: ")," ",null===D||void 0===D?void 0:D.b_aadhar_card_no)),(null===D||void 0===D?void 0:D.b_head_contact_no)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",null,o.a.createElement("b",null,"Branch Head Contact No: ")," ",null===D||void 0===D?void 0:D.b_head_contact_no))),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-10"},"Product Information : ")),(null===D||void 0===D||null===(e=D.products)||void 0===e||null===(t=e[0])||void 0===t||null===(a=t.product)||void 0===a?void 0:a.name)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Product Name: ")," ",null===D||void 0===D||null===(d=D.products)||void 0===d||null===(h=d[0])||void 0===h||null===(p=h.product)||void 0===p?void 0:p.name)),(null===D||void 0===D||null===(f=D.products)||void 0===f||null===(E=f[0])||void 0===E||null===(b=E.product)||void 0===b?void 0:b.description)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Product Description: ")," ",null===D||void 0===D||null===(g=D.products)||void 0===g||null===(y=g[0])||void 0===y||null===(N=y.product)||void 0===N?void 0:N.description)),(null===D||void 0===D?void 0:D.registration_date)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Registration Date: ")," ",m()(null===D||void 0===D?void 0:D.registration_date).format("DD-MM-YYYY"))),(null===D||void 0===D?void 0:D.maturity_date)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Maturity Date: ")," ",m()(null===D||void 0===D?void 0:D.maturity_date).format("DD-MM-YYYY"))),(null===D||void 0===D||null===(w=D.products)||void 0===w||null===(_=w[0])||void 0===_?void 0:_.minAmount)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Min Amount: ")," ",null===D||void 0===D||null===(x=D.products)||void 0===x||null===(L=x[0])||void 0===L?void 0:L.minAmount)),(null===D||void 0===D||null===(O=D.products)||void 0===O||null===(j=O[0])||void 0===j?void 0:j.maxAmount)&&o.a.createElement("div",{className:"row"},o.a.createElement("span",{className:"mb-4"},o.a.createElement("b",null,"Max Amount: ")," ",null===D||void 0===D||null===(k=D.products)||void 0===k||null===(C=k[0])||void 0===C?void 0:C.maxAmount))))))))))}}}]);
//# sourceMappingURL=81.d8609785.chunk.js.map