/*! For license information please see 63.5611d089.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[63],{512:function(e,t,a){"use strict";a.r(t);var r=a(49),n=a(36),o=a(0),l=a.n(o),i=a(173),c=a(176),s=a(177),m=a(169),d=a(81),u=a(52),h=a(7),p=a(198),f=a.n(p),v=a(187),b=a.n(v);a(188);function y(){y=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",l=r.toStringTag||"@@toStringTag";function i(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(C){i=function(e,t,a){return e[t]=a}}function c(e,t,a,r){var n=t&&t.prototype instanceof d?t:d,o=Object.create(n.prototype),l=new x(r||[]);return o._invoke=function(e,t,a){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return S()}for(a.method=n,a.arg=o;;){var l=a.delegate;if(l){var i=w(l,a);if(i){if(i===m)continue;return i}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var c=s(e,t,a);if("normal"===c.type){if(r=a.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:a.done}}"throw"===c.type&&(r="completed",a.method="throw",a.arg=c.arg)}}}(e,a,l),o}function s(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(C){return{type:"throw",arg:C}}}e.wrap=c;var m={};function d(){}function u(){}function h(){}var p={};i(p,n,(function(){return this}));var f=Object.getPrototypeOf,v=f&&f(f(O([])));v&&v!==t&&a.call(v,n)&&(p=v);var b=h.prototype=d.prototype=Object.create(p);function E(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function g(e,t){var r;this._invoke=function(n,o){function l(){return new t((function(r,l){!function r(n,o,l,i){var c=s(e[n],e,o);if("throw"!==c.type){var m=c.arg,d=m.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then((function(e){r("next",e,l,i)}),(function(e){r("throw",e,l,i)})):t.resolve(d).then((function(e){m.value=e,l(m)}),(function(e){return r("throw",e,l,i)}))}i(c.arg)}(n,o,r,l)}))}return r=r?r.then(l,l):l()}}function w(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return m;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var r=s(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,m;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,m):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,m)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function O(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return u.prototype=h,i(b,"constructor",h),i(h,"constructor",u),u.displayName=i(h,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===u||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,l,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},E(g.prototype),i(g.prototype,o,(function(){return this})),e.AsyncIterator=g,e.async=function(t,a,r,n,o){void 0===o&&(o=Promise);var l=new g(c(t,a,r,n),o);return e.isGeneratorFunction(a)?l:l.next().then((function(e){return e.done?e.value:l.next()}))},E(b),i(b,l,"Generator"),i(b,n,(function(){return this})),i(b,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=O,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return l.type="throw",l.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],l=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(i&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var l=o?o.completion:{};return l.type=e,l.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(l)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),_(a),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;_(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:O(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),m}},e}t.default=function(){var e,t,a,p,v,E,g,w=Object(m.a)(["user"]),N=Object(n.a)(w,2),_=N[0],x=N[1],O=Object(o.useState)([]),S=Object(n.a)(O,2),C=S[0],j=S[1],P=Object(h.g)(),I=Object(o.useState)(!1),k=Object(n.a)(I,2),q=k[0],L=k[1],A=Object(o.useState)("+91"),F=Object(n.a)(A,2),T=F[0],G=F[1],D=Object(o.useState)(!1),B=Object(n.a)(D,2),U=B[0],R=B[1],H=function(e){e.target.value=(""+e.target.value).toUpperCase()},Y=Object(i.a)({mode:"onChange"}),M=Y.register,J=Y.handleSubmit,V=Y.formState,W=V.errors,K=(V.isDirty,V.isValid,Y.getValues),z=(new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$"),new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})")),Z=new RegExp("^[A-Z0-9]"),$=K(),X=function(){var e=Object(r.a)(y().mark((function e(t){var a,r;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(R(!0),(a=new FormData).append("file",t.image[0]),U){e.next=24;break}return e.next=6,Object(u.h)(a);case 6:if(!(r=e.sent).error){e.next=11;break}d.b.error(r.error.message),e.next=24;break;case 11:return e.prev=11,t.image=r.secure_url,t.role="IBO",t.contactno=T,e.next=17,Object(u.g)(t);case 17:e.sent,d.b.success("user created successfully"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(11),e.t0&&e.t0.response&&e.t0.response.data&&e.t0.response.data.message?d.b.error(e.t0.response.data.message):d.b.error("There was an internal server error please try again later or contact support@fcn.com");case 24:case"end":return e.stop()}}),e,null,[[11,21]])})));return function(t){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){Q()}),[]);var Q=function(){var e=Object(r.a)(y().mark((function e(){var t,a,r,n,o,l;return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u.x)();case 3:return e.next=5,e.sent.data;case 5:t=e.sent,j(null===t||void 0===t?void 0:t.results),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),(null===e.t0||void 0===e.t0||null===(a=e.t0.response)||void 0===a||null===(r=a.data)||void 0===r?void 0:r.message)?d.b.error(e.t0.response.data.message):d.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(o=n.data)||void 0===o?void 0:o.code)&&(l=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),x("user",null,{path:"/"}),Object(u.S)(l).finally((function(){P.push("/user-pages/login-1")})));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement(c.a,{show:U,onHide:function(){return R(!1)},size:"xl"},l.a.createElement(c.a.Header,{closeButton:!0},l.a.createElement(c.a.Title,null,"Terms And Conditions")),l.a.createElement(c.a.Body,{className:"ml-3"},l.a.createElement("p",null,"This memorandum of understanding is made and entered on this the ___Day of JUL , 2022 at Surat in the State of Gujarat between Vijay Pitha Kanpariya (proprietor of FCN Training Academy)"),l.a.createElement("p",null,"Having address U7-8, SHREE NIVAS COMPLEX, B/S I.C.GANDHI SCHOOL, SUMUL DAIRY ROAD, SURAT-395004. Herein after referred to as FIRST PART AND _________________, ADDRESS_________________________ Herein after referred to as SECOND PART. Whereas First Part is engaged in the business of Forex, Share, Commodity Trading & Broking and other business. The Second Part is an Independent individual having been decided to help and invest in the business of the First Part and shall be earning yearly remuneration from the said investments. Whereas parties have mutually arrived to decision and entered into the said MOU to subscribe their hands as per decisions. The terms and conditions of the said Memorandum of Understanding are as under: Second Part has hereby agreed to invest an amount of Rs ____- (TWO LAKHS Only) in the business of the First Part. It is further agreed by and between the parties that First Part shall pay a Yearly remuneration of 24 % (Twenty Four Percent Only) by Cheque or by Online payment yearly to the Second part up till 12 months from the date of investment. 1. It is further agreed by and between the parties that Second Part shall have no claims, rights or interest of any manner in the business of the First Part."),l.a.createElement("p",null,"2. It is also agreed by and between the parties that First Part shall pay by Cheque or - Online Payment in for the compensation to the Second Part for the agreed period i.e. of one year."),l.a.createElement("p",null,"3. It is agreed by and between the parties, that First Part shall return the investment made by Second Part, the amount invested by the Second  Part shall be compensated and refunded together in the form as agreed in Para 2 of the said understanding i.e. of one year."),l.a.createElement("p",null,"4. It is also agreed by and between the party that, Second Part shall have no right or claim as to which of the business the said amount is to be invested, however claim of the Second Part shall be only on the agreed and decided remuneration."),l.a.createElement("p",null,"5. First Part has agreed to give Post Dated Cheque dated of IDBI Bank Having A/C No.1337102000010168 as following to second part and second part can deposit cheque in bank on the date of the cheque or can online payment to first part.  Cheque Number Amount Date       In case of any delay in the clearance of the said Cheque , the First Part shall pay the interest at the rate of 24% p.a. on default amount till the date of payment."),l.a.createElement("p",null,"6. A minimum lock-in period of one year has been fixed and both the Parties have agreed upon the same. In case the Second part would wish to withdraw the sum invested he shall do so only on completion of a period of one year (1 Year) from the date of investment by giving 30 days prior intimation of the same."),l.a.createElement("p",null,"7. In future if any happened with First Part, and First part paid 2,00,000/- through Cheque or online payment to second part then after second part don\u2019t have right to claim on the First Part for his invest amount."),l.a.createElement("p",null,"8. The above agreed terms and conditions shall be binding on both the Parties.   9. It is agreed by and between the parties that any dispute arising out of The agreement will be subject to Surat Jurisdiction."),l.a.createElement("p",null),l.a.createElement("p",null," 10. It is further agreed by and between the parties that an Arbitrator shall Be appointed as under Arbitration Act to resolve the any dispute amongst the parties. In witness whereof the First Part as well as the Second Part by way of acceptance of the said MOU have put their respective hands the day and year first hereinabove written."),l.a.createElement("p",null,"11. First part will give Post Dated Cheque to Second part and will not  Withdraw amount for one year from commencement date of agreement without inform to second part and Second Part will not force to withdraw first part to break agreement amount before maturity date."),l.a.createElement("p",null," ")),l.a.createElement("div",null,l.a.createElement("p",{style:{marginLeft:"35%"}},l.a.createElement("input",{type:"checkbox",id:"agree"}),l.a.createElement("label",{htmlFor:"agree",style:{marginLeft:"1%"}}," I agree to ",l.a.createElement("b",null,"terms and conditions"))))),l.a.createElement("div",{className:"page-header"},l.a.createElement("h3",{className:"page-title"},"Ibo / Create Ibos "),l.a.createElement("nav",{"aria-label":"breadcrumb"},l.a.createElement("ol",{className:"breadcrumb"},l.a.createElement("li",{className:"breadcrumb-item"},l.a.createElement("a",{href:"!#",onClick:function(e){return e.preventDefault()}},null===_||void 0===_||null===(e=_.user)||void 0===e?void 0:e.role," Dashboard")),l.a.createElement("li",{className:"breadcrumb-item active","aria-current":"page"},"Create Ibos")))),l.a.createElement("div",{className:"row auth"},l.a.createElement("div",{className:"col-12 grid-margin"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{className:"form-sample",onSubmit:J(X)},l.a.createElement("p",{className:"card-description"}," Personal info "),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"Name"),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"name"},M("name",{required:!0}))),W&&W.name&&l.a.createElement("p",null,"name is required field"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"Address"," "),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"address"},M("address",{required:!0}))),W&&W.address&&l.a.createElement("p",null,"address is required field"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Select Country"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"country"},M("country",{required:!0})),l.a.createElement("option",null,"Country"),l.a.createElement("option",null,"United States of America"),l.a.createElement("option",{selected:!0},"India"),l.a.createElement("option",null,"United Kingdom"),l.a.createElement("option",null,"Germany"),l.a.createElement("option",null,"Argentina"))))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Contact No"),l.a.createElement("div",{className:"col-sm-9 contact_no"},l.a.createElement(b.a,{inputExtraProps:{name:"contactno",required:!0,autoFocus:!0},country:"US",value:T,onChange:function(e){G(e)}}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Email"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"email"},M("email",{required:!0,pattern:/^\S+@\S+$/i}))),W&&W.email&&"required"===W.email.type&&l.a.createElement("p",null,"email is required field"),W&&W.email&&"pattern"===W.email.type&&l.a.createElement("p",null,"invalid email formate")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"DOB"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"date",name:"dob",max:f()().format("YYYY-MM-DD")},M("dob",{required:!0}))),W&&W.dob&&l.a.createElement("p",null,"DOB is required field"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Password"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:q?"text":"password",name:"password"},M("password",{required:!0,pattern:z}))),l.a.createElement("span",{className:"d-flex",style:{float:"right",marginTop:"10px"}},l.a.createElement("input",{style:{marginRight:"10px"},type:"checkbox",value:q,onChange:function(){L(!q)}}),"show password"),W&&W.password&&"required"===W.password.type&&l.a.createElement("p",null,"password is required field"),W&&W.password&&"pattern"===W.password.type&&l.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Branch"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",name:"branch"},M("branch",{required:!0})),l.a.createElement("option",{value:""},"--Select branch--"),C.map((function(e,t){return l.a.createElement("option",{key:t,value:null===e||void 0===e?void 0:e.name,label:null===e||void 0===e?void 0:e.name})}))),W&&W.branch&&l.a.createElement("p",null,"Select branch is required field"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"Bank Account no"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"bankAccNo"},M("bankAccNo",{required:!0}))),W&&W.bankAccNo&&l.a.createElement("p",null,"Bank Account number is required field")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"IFSC code"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"bankIfscCode",onInput:H},M("bankIfscCode",{required:!0,pattern:Z}))),W&&W.bankIfscCode&&"required"===W.bankIfscCode.type&&l.a.createElement("p",null,"Bank IFSC number is required field"),W&&W.bankIfscCode&&"pattern"===W.bankIfscCode.type&&l.a.createElement("p",null,"IFSC code should have Capital latter"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"PanCard Number"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"pan_card_no",onInput:H},M("pan_card_no",{required:!0}))),W&&W.pan_card_no&&l.a.createElement("p",null,"PanCard number is required field")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-3 col-form-label"},"AadharCard Number"),l.a.createElement("div",{className:"col-sm-9"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"aadhar_card_no"},M("aadhar_card_no",{required:!0}))),W&&W.aadhar_card_no&&l.a.createElement("p",null,"Aadharcard number is required field"))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-2 col-form-label"},"Self Declaration"," "),l.a.createElement("div",{className:"col-sm-10"},l.a.createElement(s.a.Control,Object.assign({type:"text",name:"self_declaration "},M("self_declaration",{required:!0}))),W&&W.self_declaration&&l.a.createElement("p",null,"Self Declaration is required field")))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(s.a.Group,{className:"row"},l.a.createElement("label",{className:"col-sm-4 col-form-label"},"Upload Cancel cheque copy"," "),l.a.createElement("div",{className:"col-sm-8"},l.a.createElement(s.a.Control,Object.assign({id:"input-id",className:"d-none",type:"file",name:"image",multiple:!1},M("image",{required:!0}))),l.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},className:"btn btn-outline-".concat((null===$||void 0===$||null===(t=$.image)||void 0===t||null===(a=t[0])||void 0===a||a.name," btn-primary"))},(null===$||void 0===$||null===(p=$.image)||void 0===p||null===(v=p[0])||void 0===v?void 0:v.name)?null===$||void 0===$||null===(E=$.image)||void 0===E||null===(g=E[0])||void 0===g?void 0:g.name:"Upload Image"),W&&W.image&&l.a.createElement("p",null,"Upload image is required field"))))),l.a.createElement("div",{className:"mt-3"},l.a.createElement("button",{className:"btn  btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit"},"SUBMIT"))))))))}}}]);
//# sourceMappingURL=63.5611d089.chunk.js.map