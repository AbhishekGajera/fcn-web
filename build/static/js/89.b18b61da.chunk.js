/*! For license information please see 89.b18b61da.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[89],{609:function(e,t,r){"use strict";r.r(t);var a=r(44),n=r(34),o=r(0),c=r.n(o),l=r(174),i=r(176),s=r(169),u=r(45),m=r(7),d=r(25),f=r(285),v=r.n(f);r(286);function p(){p=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},n=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(L){l=function(e,t,r){return e[t]=r}}function i(e,t,r,a){var n=t&&t.prototype instanceof m?t:m,o=Object.create(n.prototype),c=new j(a||[]);return o._invoke=function(e,t,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return S()}for(r.method=n,r.arg=o;;){var c=r.delegate;if(c){var l=w(c,r);if(l){if(l===u)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var i=s(e,t,r);if("normal"===i.type){if(a=r.done?"completed":"suspendedYield",i.arg===u)continue;return{value:i.arg,done:r.done}}"throw"===i.type&&(a="completed",r.method="throw",r.arg=i.arg)}}}(e,r,c),o}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=i;var u={};function m(){}function d(){}function f(){}var v={};l(v,n,(function(){return this}));var h=Object.getPrototypeOf,b=h&&h(h(x([])));b&&b!==t&&r.call(b,n)&&(v=b);var y=f.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var a;this._invoke=function(n,o){function c(){return new t((function(a,c){!function a(n,o,c,l){var i=s(e[n],e,o);if("throw"!==i.type){var u=i.arg,m=u.value;return m&&"object"==typeof m&&r.call(m,"__await")?t.resolve(m.__await).then((function(e){a("next",e,c,l)}),(function(e){a("throw",e,c,l)})):t.resolve(m).then((function(e){u.value=e,c(u)}),(function(e){return a("throw",e,c,l)}))}l(i.arg)}(n,o,a,c)}))}return a=a?a.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var a=s(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,u;var n=a.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function x(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var a=-1,o=function t(){for(;++a<e.length;)if(r.call(e,a))return t.value=e[a],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=f,l(y,"constructor",f),l(f,"constructor",d),d.displayName=l(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,l(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},E(g.prototype),l(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var c=new g(i(t,r,a,n),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},E(y),l(y,c,"Generator"),l(y,n,(function(){return this})),l(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var a=t.pop();if(a in e)return r.value=a,r.done=!1,r}return r.done=!0,r}},e.values=x,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function a(r,a){return c.type="throw",c.arg=e,t.next=r,a&&(t.method="next",t.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],c=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),i=r.call(o,"finallyLoc");if(l&&i){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!i)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;O(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t=Object(m.g)(),r=Object(s.a)(["user"]),f=Object(n.a)(r,1)[0],h=Object(o.useState)([]),b=Object(n.a)(h,2),y=b[0],E=b[1],g=Object(o.useState)([]),w=Object(n.a)(g,2),N=w[0],O=w[1],j=Object(o.useState)([]),x=Object(n.a)(j,2),S=x[0],L=x[1],k=Object(o.useState)([]),P=Object(n.a)(k,2),_=P[0],C=P[1],q=Object(o.useState)("+91"),G=Object(n.a)(q,2),I=G[0],T=G[1],B=Object(l.a)({mode:"onChange"}),R=B.register,F=B.handleSubmit,A=B.formState,D=A.errors;A.isDirty,A.isValid;Object(o.useEffect)((function(){U(),Y(),M(),J()}),[]);var J=function(){var e=Object(a.a)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.yb)(3e3);case 2:r=e.sent,L(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(a.a)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.jb)(3e3);case 2:r=e.sent,C(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Y=function(){var e=Object(a.a)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.ab)(5e3);case 2:r=e.sent,O(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(a.a)(p().mark((function e(){var t,r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.P)(5e3);case 2:r=e.sent,E(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(a.a)(p().mark((function e(r){var a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=JSON.stringify({branch:null===r||void 0===r?void 0:r.branch,IBO:null===r||void 0===r?void 0:r.ibo,contactno:null===r||void 0===r?void 0:r.contactno,user:null===r||void 0===r?void 0:r.user,commision_branch:null===r||void 0===r?void 0:r.commissionBranch,commision_ibo:null===r||void 0===r?void 0:r.commissionIbo,net_revenue:null===r||void 0===r?void 0:r.netProfit,product:null===r||void 0===r?void 0:r.Product,total_revenue:null===r||void 0===r?void 0:r.totalRevenue}),e.prev=1,e.next=4,Object(d.g)(a);case 4:e.sent,u.b.success("Revenue created successfully"),t.push("/revenue/revenuelist"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.info("error ",e.t0),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?u.b.error(e.t0.response.data.message):u.b.error("There was an internal server error please try again later or contact support@fcn.com");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",null,c.a.createElement("div",{className:"page-header"},c.a.createElement("h3",{className:"page-title"},"Clients / Create Revenue "),c.a.createElement("nav",{"aria-label":"breadcrumb"},c.a.createElement("ol",{className:"breadcrumb"},c.a.createElement("li",{className:"breadcrumb-item"},c.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===f||void 0===f||null===(e=f.user)||void 0===e?void 0:e.role," Dashboard")),c.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Create Revenue")))),c.a.createElement("div",{className:"row auth"},c.a.createElement("div",{className:"col-12 grid-margin"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("form",{className:"form-sample",onSubmit:F(V)},c.a.createElement("p",{className:"card-description"}," Add Revenue "),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Product"," "),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"Product"},R("Product",{required:!0})),c.a.createElement("option",{value:""},"--Select Product--"),null===_||void 0===_?void 0:_.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))),D&&D.Product&&c.a.createElement("p",null,"Selecting a product is required field")))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Branch"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"branch"},R("branch",{required:!0})),c.a.createElement("option",{value:""},"--Select branch--"),y.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})}))),D&&D.branch&&c.a.createElement("p",null,"Selecting a branch is required field")))),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"IBO"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"ibo"},R("ibo",{required:!0})),c.a.createElement("option",{value:""},"--Select ibo--"),N.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})}))),D&&D.ibo&&c.a.createElement("p",null,"Selecting a IBO is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Users"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"user"},R("user",{required:!0})),null===S||void 0===S?void 0:S.map((function(e,t){return c.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.id,label:null===e||void 0===e?void 0:e.name})}))),D&&D.user&&c.a.createElement("p",null,"Slecting a user is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),c.a.createElement("div",{className:"col-sm-9 contact_no"},c.a.createElement(v.a,{inputExtraProps:{name:"contactno",required:!0,autoFocus:!0},country:"US",value:I,onChange:function(e){T(e)}}))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Net Profit"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"number",name:"netProfit"},R("netProfit",{required:!0}))),D&&D.netProfit&&c.a.createElement("p",null,"Net Profit is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-3 col-form-label"},"Total Revenue"),c.a.createElement("div",{className:"col-sm-9"},c.a.createElement(i.a.Control,Object.assign({type:"number",name:"totalRevenue"},R("totalRevenue",{required:!0}))),D&&D.totalRevenue&&"required"===D.totalRevenue.type&&c.a.createElement("p",null,"Total Revenue is required field"))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Commision To Branch"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"commissionBranch"},R("commissionBranch",{required:!0}))),D&&D.commissionBranch&&c.a.createElement("p",null,"Commission To Branch is required field")))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(i.a.Group,{className:"row"},c.a.createElement("label",{className:"col-sm-4 col-form-label"},"Commision To IBO"),c.a.createElement("div",{className:"col-sm-8"},c.a.createElement(i.a.Control,Object.assign({type:"text",name:"commissionIbo"},R("commissionIbo",{required:!0}))),D&&D.commissionIbo&&c.a.createElement("p",null,"Commission To Ibo is required field"))))),c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=89.b18b61da.chunk.js.map