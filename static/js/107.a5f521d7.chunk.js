/*! For license information please see 107.a5f521d7.chunk.js.LICENSE.txt */
(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[107],{588:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(34),i=a(0),o=a.n(i),l=a(7),s=a(174),c=a(22),u=a(169),m=a(45),d=a(179),p=a(189),v=a.n(p);function h(){h=function(){return e};var e={},t=Object.prototype,a=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",o=r.toStringTag||"@@toStringTag";function l(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(T){l=function(e,t,a){return e[t]=a}}function s(e,t,a,r){var n=t&&t.prototype instanceof m?t:m,i=Object.create(n.prototype),o=new w(r||[]);return i._invoke=function(e,t,a){var r="suspendedStart";return function(n,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw i;return I()}for(a.method=n,a.arg=i;;){var o=a.delegate;if(o){var l=b(o,a);if(l){if(l===u)continue;return l}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if("suspendedStart"===r)throw r="completed",a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);r="executing";var s=c(e,t,a);if("normal"===s.type){if(r=a.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(r="completed",a.method="throw",a.arg=s.arg)}}}(e,a,o),i}function c(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(T){return{type:"throw",arg:T}}}e.wrap=s;var u={};function m(){}function d(){}function p(){}var v={};l(v,n,(function(){return this}));var f=Object.getPrototypeOf,y=f&&f(f(L([])));y&&y!==t&&a.call(y,n)&&(v=y);var g=p.prototype=m.prototype=Object.create(v);function E(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function M(e,t){var r;this._invoke=function(n,i){function o(){return new t((function(r,o){!function r(n,i,o,l){var s=c(e[n],e,i);if("throw"!==s.type){var u=s.arg,m=u.value;return m&&"object"==typeof m&&a.call(m,"__await")?t.resolve(m.__await).then((function(e){r("next",e,o,l)}),(function(e){r("throw",e,o,l)})):t.resolve(m).then((function(e){u.value=e,o(u)}),(function(e){return r("throw",e,o,l)}))}l(s.arg)}(n,i,r,o)}))}return r=r?r.then(o,o):o()}}function b(e,t){var a=e.iterator[t.method];if(void 0===a){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(a,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,u;var n=r.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function L(e){if(e){var t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function t(){for(;++r<e.length;)if(a.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:I}}function I(){return{value:void 0,done:!0}}return d.prototype=p,l(g,"constructor",p),l(p,"constructor",d),d.displayName=l(p,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,l(e,o,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},E(M.prototype),l(M.prototype,i,(function(){return this})),e.AsyncIterator=M,e.async=function(t,a,r,n,i){void 0===i&&(i=Promise);var o=new M(s(t,a,r,n),i);return e.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},E(g),l(g,o,"Generator"),l(g,n,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var a in e)t.push(a);return t.reverse(),function a(){for(;t.length;){var r=t.pop();if(r in e)return a.value=r,a.done=!1,a}return a.done=!0,a}},e.values=L,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&a.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(a,r){return o.type="throw",o.arg=e,t.next=a,r&&(t.method="next",t.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],o=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=a.call(i,"catchLoc"),s=a.call(i,"finallyLoc");if(l&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),x(a),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;x(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,a){return this.delegate={iterator:L(e),resultName:t,nextLoc:a},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e,t,i,p,f,y,g,E,M,b,N,x,w,L,I,T,j,S,k,C,O,z,P=Object(l.g)(),q=Object(s.a)({mode:"onChange"}),B=q.register,H=q.handleSubmit,G=q.formState,_=G.errors,V=G.isDirty,A=G.isValid,F=q.getValues,U=Object(u.a)(["user"]),D=Object(n.a)(U,2),R=D[0],Y=D[1],J=o.a.useState(!1),$=Object(n.a)(J,2),K=$[0],Z=$[1],Q=function(){var e=Object(r.a)(h().mark((function e(){var t;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=JSON.stringify({refreshToken:localStorage.getItem("refreshToken")}),Y("user",null,{path:"/"}),Object(c.Sb)(t).finally((function(){P.push("/user-pages/login-1")}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(h().mark((function e(t){var a,r,n,i,o,l,s,u,d;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!1),delete t.terms,t.password||delete t.password,(a=new FormData).append("file",t.image[0]),e.next=7,Object(c.j)(a);case 7:if(!(r=e.sent).error){e.next=12;break}m.b.error(r.error.message),e.next=26;break;case 12:return e.prev=12,delete t.image,t.avatar=r.secure_url,e.next=17,Object(c.Pb)(t,null===R||void 0===R||null===(n=R.user)||void 0===n?void 0:n.id);case 17:i=e.sent,Y("user",i.data,{path:"/"}),m.b.success("Profile updated sucssefully"),e.next=26;break;case 22:e.prev=22,e.t0=e.catch(12),(null===e.t0||void 0===e.t0||null===(o=e.t0.response)||void 0===o||null===(l=o.data)||void 0===l?void 0:l.message)?m.b.error(null===e.t0||void 0===e.t0||null===(d=e.t0.response)||void 0===d?void 0:d.data.message):m.b.error("There was an internal server error please try again later or contact support@fcn.com"),401===(null===e.t0||void 0===e.t0||null===(s=e.t0.response)||void 0===s||null===(u=s.data)||void 0===u?void 0:u.code)&&Q();case 26:case"end":return e.stop()}}),e,null,[[12,22]])})));return function(t){return e.apply(this,arguments)}}(),X=F(),ee=new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.{8,})"),te=new RegExp("^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$");return o.a.createElement("div",null,o.a.createElement("div",{className:"",style:{margin:"0 -2.25rem"}},o.a.createElement("div",{className:"CmtLayout-content css-m7fmz7"},o.a.createElement("div",{className:"CmtLayout-root css-7u9s91"},o.a.createElement("div",{className:"CmtLayout-header css-1p8zl8c"},o.a.createElement("div",{className:"css-1onfrn1"},o.a.createElement("div",{className:"MuiCardHeader-root css-t7d2qp"},o.a.createElement("div",{className:"MuiCardHeader-avatar css-1p83tvv"},o.a.createElement("div",{className:"MuiAvatar-root MuiAvatar-circular css-h1p9ca"},(null===R||void 0===R||null===(e=R.user)||void 0===e?void 0:e.avatar)?o.a.createElement("img",{alt:"Remy Sharp",src:null===R||void 0===R||null===(t=R.user)||void 0===t?void 0:t.avatar,className:"MuiAvatar-img css-1hy9t21"}):o.a.createElement("img",{alt:"Remy Sharp",src:a(83),className:"MuiAvatar-img css-1hy9t21"}))),o.a.createElement("div",{className:"MuiCardHeader-content css-11qjisw"},o.a.createElement("span",{className:"MuiTypography-root MuiTypography-body2 MuiCardHeader-title css-1rnw72g"},null===R||void 0===R||null===(i=R.user)||void 0===i?void 0:i.name),o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-flosfx"},null===R||void 0===R||null===(p=R.user)||void 0===p?void 0:p.address)),o.a.createElement("div",{className:"MuiCardHeader-action css-tevfyd"})),o.a.createElement("div",{className:"css-69i1ev"},o.a.createElement("div",{className:"css-11qjisw"}),o.a.createElement("div",{className:"css-1tu59u4"},o.a.createElement("button",{onClick:function(){return Z(!0)},className:"MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-rdgd1y",tabIndex:"0",type:"button"},o.a.createElement("span",{className:"MuiButton-startIcon MuiButton-iconSizeMedium css-1l6c7y9"},o.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"SettingsIcon"},o.a.createElement("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"}))),"Edit Profile"))))),o.a.createElement("div",{className:"CmtLayout-wrapper MuiBox-root css-1ofxjzb mb-3",style:{alignItems:"baseline"}},o.a.createElement("div",{className:"CmtLayout-sidebar css-1r7ek9c"},o.a.createElement("div",{className:"MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-3.75 css-1p273sh"},o.a.createElement("div",{className:"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-6 MuiGrid-grid-lg-12 css-c49ov"},o.a.createElement("div",{className:"MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1oiueny mb-3"},o.a.createElement("div",{className:"MuiCardHeader-root css-xjuj3x"},o.a.createElement("div",{className:"MuiCardHeader-content css-11qjisw"},o.a.createElement("span",{className:"MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw"},"Contact"))),o.a.createElement("ul",{className:"MuiList-root css-f9w29w"},o.a.createElement("li",{className:"MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1f151m1"},o.a.createElement("div",{className:"MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-2h18d4"},o.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"EmailOutlinedIcon"},o.a.createElement("path",{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"}))),o.a.createElement("div",{className:"MuiListItemText-root MuiListItemText-multiline css-1xar93x"},o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-hxfal"},"Email"),o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body2 MuiListItemText-secondary css-15mdt76"},o.a.createElement("a",{className:"MuiTypography-root MuiTypography-body1 MuiLink-root MuiLink-underlineNone css-zknl6a",href:"#"},null===R||void 0===R||null===(f=R.user)||void 0===f?void 0:f.email)))),o.a.createElement("li",{className:"MuiListItem-root MuiListItem-gutters MuiListItem-padding MuiListItem-alignItemsFlexStart css-1f151m1"},o.a.createElement("div",{className:"MuiListItemIcon-root MuiListItemIcon-alignItemsFlexStart css-2h18d4"},o.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"LocalPhoneOutlinedIcon"},o.a.createElement("path",{d:"M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z"}))),o.a.createElement("div",{className:"MuiListItemText-root MuiListItemText-multiline css-1xar93x"},o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-hxfal"},"Phone"),o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-s1cnk"},null===R||void 0===R||null===(y=R.user)||void 0===y?void 0:y.contactno)))))))),o.a.createElement("div",{className:"CmtLayout-main css-1nibzor"},o.a.createElement("div",{className:"MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root css-1t8yj35"},o.a.createElement("div",{className:"MuiCardHeader-root css-ngeif"},o.a.createElement("div",{className:"MuiCardHeader-content css-11qjisw"},o.a.createElement("span",{className:"MuiTypography-root MuiTypography-h5 MuiCardHeader-title css-1dwyhfw"},"About")),o.a.createElement("div",{className:"MuiCardHeader-action css-tevfyd"},o.a.createElement("div",{className:"css-la1z4w"},o.a.createElement("div",{className:"MuiTabs-root css-gz38gd"},o.a.createElement("div",{className:"MuiTabs-scroller MuiTabs-fixed css-1anid1y",style:{overflow:"hidden",marginBottom:"0px"}},o.a.createElement("div",{"aria-label":"lab API tabs example",className:"MuiTabs-flexContainer css-k008qs",role:"tablist"},o.a.createElement("button",{className:"MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected css-fmop3j",tabindex:"0",type:"button",role:"tab","aria-selected":"true","aria-controls":"mui-p-61216-P-1",id:"mui-p-61216-T-1"},"Overview",o.a.createElement("span",{className:"MuiTouchRipple-root css-w0pj6f"}))),o.a.createElement("span",{className:"MuiTabs-indicator css-1vgkktx",style:{left:"0px",width:"100.438px"}})))))),o.a.createElement("div",{className:"MuiCardContent-root css-1q0msn4"},o.a.createElement("ul",{className:"MuiList-root css-1igju9t"},o.a.createElement("li",{className:"MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr"},o.a.createElement("div",{className:"MuiListItemIcon-root css-12rpcfg"},o.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CakeOutlinedIcon"},o.a.createElement("path",{d:"M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z"}))),o.a.createElement("div",{className:"MuiListItemText-root MuiListItemText-multiline css-1xar93x"},o.a.createElement("h6",{className:"MuiTypography-root MuiTypography-h6 css-1qe7fy0"},"Birthday"),o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-s1cnk"},v()(null===R||void 0===R||null===(g=R.user)||void 0===g?void 0:g.dob).format("DD-MM-YYYY")))),o.a.createElement("li",{className:"MuiListItem-root MuiListItem-gutters MuiListItem-padding css-16fnjgr"},o.a.createElement("div",{className:"MuiListItemIcon-root css-12rpcfg"},o.a.createElement("svg",{className:"MuiSvgIcon-root MuiSvgIcon-fontSizeInherit css-1cw4hi4",focusable:"false","aria-hidden":"true",viewBox:"0 0 24 24","data-testid":"CottageOutlinedIcon"},o.a.createElement("path",{d:"M12 3 6 7.58V6H4v3.11L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4 12 3zm6 16h-5v-4h-2v4H6v-8.9l6-4.58 6 4.58V19zM10 1c0 1.66-1.34 3-3 3-.55 0-1 .45-1 1H4c0-1.66 1.34-3 3-3 .55 0 1-.45 1-1h2z"}))),o.a.createElement("div",{className:"MuiListItemText-root MuiListItemText-multiline css-1xar93x"},o.a.createElement("h6",{className:"MuiTypography-root MuiTypography-h6 css-1qe7fy0"},"Lives in"),o.a.createElement("p",{className:"MuiTypography-root MuiTypography-body1 css-s1cnk"},null===R||void 0===R||null===(E=R.user)||void 0===E?void 0:E.country))))))))))),o.a.createElement(d.a,{show:K,onHide:function(){Z(!1)},backdrop:"static",keyboard:!1},o.a.createElement(d.a.Header,{closeButton:!0},o.a.createElement(d.a.Title,null,"Edit Profile")),o.a.createElement(d.a.Body,null,o.a.createElement("div",{className:"d-flex align-items-center auth px-0"},o.a.createElement("div",{className:"row w-100 mx-0"},o.a.createElement("div",{className:"col-md-12 mx-auto"},o.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},o.a.createElement("div",{className:"d-flex align-items-center justify-content-center"},o.a.createElement("div",{className:"nav-profile-img"},(null===R||void 0===R||null===(M=R.user)||void 0===M?void 0:M.avatar)?o.a.createElement("img",{src:null===R||void 0===R||null===(b=R.user)||void 0===b?void 0:b.avatar,alt:"user"}):o.a.createElement("img",{src:a(83),alt:"user"}),o.a.createElement("span",{className:"availability-status online"}))),o.a.createElement("h4",null,"Change in details?"),o.a.createElement("h6",{className:"font-weight-light"},"Update your profile is normal, no required to verify again"),o.a.createElement("form",{className:"pt-3",autoComplete:"new-password",onSubmit:H(W)},o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Username",name:"name",defaultValue:null===R||void 0===R||null===(N=R.user)||void 0===N?void 0:N.name},B("name",{required:!0}))),_&&_.name&&o.a.createElement("p",null,"name is required field")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputEmail1",placeholder:"Email",name:"email",defaultValue:null===R||void 0===R||null===(x=R.user)||void 0===x?void 0:x.email},B("email",{required:!0,pattern:/^\S+@\S+$/i}))),_&&_.email&&"required"===_.email.type&&o.a.createElement("p",null,"email is required field"),_&&_.email&&"pattern"===_.email.type&&o.a.createElement("p",null,"invalid email formate")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({type:"date",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Date of birth",name:"dob"},B("dob",{required:!0}),{defaultValue:null===R||void 0===R||null===(w=R.user)||void 0===w?void 0:w.dob})),_&&_.dob&&o.a.createElement("p",null,"birthdate is required field")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({type:"text",className:"form-control form-control-lg",id:"exampleInputUsername1",placeholder:"Contact number",name:"contactno"},B("contactno",{required:!0,pattern:te}),{defaultValue:null===R||void 0===R||null===(L=R.user)||void 0===L?void 0:L.contactno})),_&&_.contactno&&"required"===_.contactno.type&&o.a.createElement("p",null,"contact number is required field"),_&&_.contactno&&"pattern"===_.contactno.type&&o.a.createElement("p",null,"invalid phone number please use valid formate")),o.a.createElement("div",{className:"form-group"},o.a.createElement("select",Object.assign({className:"form-control form-control-lg",id:"exampleFormControlSelect2",defaultValue:null===R||void 0===R||null===(I=R.user)||void 0===I?void 0:I.country,name:"country"},B("country",{required:!0})),o.a.createElement("option",null,"Country"),o.a.createElement("option",null,"United States of America"),o.a.createElement("option",{selected:!0},"India"),o.a.createElement("option",null,"United Kingdom"),o.a.createElement("option",null,"Germany"),o.a.createElement("option",null,"Argentina"))),"google"!==(null===R||void 0===R||null===(T=R.user)||void 0===T?void 0:T.registrationType)&&o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({type:"password",className:"form-control form-control-lg",id:"exampleInputPassword1",placeholder:"Password",autoComplete:"new-password",name:"password"},B("password",{required:!1,pattern:ee}))),o.a.createElement("p",null,"Note :- if you don't want to update your password then simply leave it blank or fill your new password"),_&&_.password&&"pattern"===_.password.type&&o.a.createElement("p",null,"password should have at least 8 characters , 1 number and latter")),o.a.createElement("div",{className:"form-group"},o.a.createElement("input",Object.assign({id:"input-id",className:"d-none",type:"file",name:"image",multiple:!1},B("image",{required:!0}))),o.a.createElement("button",{onClick:function(e){e.preventDefault();var t=document.getElementById("input-id");t&&t.click()},style:{width:"100%"},className:"btn btn-outline-".concat((null===X||void 0===X||null===(j=X.image)||void 0===j||null===(S=j[0])||void 0===S||S.name," btn-primary"))},(null===X||void 0===X||null===(k=X.image)||void 0===k||null===(C=k[0])||void 0===C?void 0:C.name)?null===X||void 0===X||null===(O=X.image)||void 0===O||null===(z=O[0])||void 0===z?void 0:z.name:"Upload Profile")),o.a.createElement("div",{className:"mb-4"},o.a.createElement("div",{className:"form-check"},o.a.createElement("label",{className:"form-check-label text-muted"},o.a.createElement("input",Object.assign({type:"checkbox",className:"form-check-input",name:"terms"},B("terms",{required:!0}))),o.a.createElement("i",{className:"input-helper"})," Confirm your deatils"))),o.a.createElement("div",{className:"mt-3"},o.a.createElement("button",{className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn",type:"submit",disabled:!V||!A},"UPDATE PROFILE"))))))))))}}}]);
//# sourceMappingURL=107.a5f521d7.chunk.js.map