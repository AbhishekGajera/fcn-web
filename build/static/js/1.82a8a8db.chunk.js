(this["webpackJsonppurple-react-free"]=this["webpackJsonppurple-react-free"]||[]).push([[1],{179:function(e,n,t){"use strict";var a,o=t(3),r=t(1),i=t(5),c=t.n(i),s=t(59),l=t(84),u=t(55),d=t(102);function f(e){if((!a&&0!==a||e)&&l.a){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),a=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return a}var b=t(99),m=t(10),p=t(371),h=t(105),v=t(0),g=t.n(v);function O(e){void 0===e&&(e=Object(u.a)());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch(t){return e.body}}var j=t(101),E=t(31),y=t(4),N=t.n(y),w=t(23),k=t.n(w),C=t(100),x=t(98),R=t(65);function F(e,n){e.classList?e.classList.add(n):Object(R.a)(e,n)||("string"===typeof e.className?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function S(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function T(e,n){e.classList?e.classList.remove(n):"string"===typeof e.className?e.className=S(e.className,n):e.setAttribute("class",S(e.className&&e.className.baseVal||"",n))}var D=t(35);function H(e){return"window"in e&&e.window===e?e:"nodeType"in(n=e)&&n.nodeType===document.DOCUMENT_NODE&&e.defaultView||!1;var n}function A(e){var n;return H(e)||(n=e)&&"body"===n.tagName.toLowerCase()?function(e){var n=H(e)?Object(u.a)():Object(u.a)(e),t=H(e)||n.defaultView;return n.body.clientWidth<t.innerWidth}(e):e.scrollHeight>e.clientHeight}var M=["template","script","style"],B=function(e,n,t){[].forEach.call(e.children,(function(e){-1===n.indexOf(e)&&function(e){var n=e.nodeType,t=e.tagName;return 1===n&&-1===M.indexOf(t.toLowerCase())}(e)&&t(e)}))};function I(e,n){n&&(e?n.setAttribute("aria-hidden","true"):n.removeAttribute("aria-hidden"))}var P,L=function(){function e(e){var n=void 0===e?{}:e,t=n.hideSiblingNodes,a=void 0===t||t,o=n.handleContainerOverflow,r=void 0===o||o;this.hideSiblingNodes=void 0,this.handleContainerOverflow=void 0,this.modals=void 0,this.containers=void 0,this.data=void 0,this.scrollbarSize=void 0,this.hideSiblingNodes=a,this.handleContainerOverflow=r,this.modals=[],this.containers=[],this.data=[],this.scrollbarSize=f()}var n=e.prototype;return n.isContainerOverflowing=function(e){var n=this.data[this.containerIndexFromModal(e)];return n&&n.overflowing},n.containerIndexFromModal=function(e){return function(e,n){var t=-1;return e.some((function(e,a){return!!n(e,a)&&(t=a,!0)})),t}(this.data,(function(n){return-1!==n.modals.indexOf(e)}))},n.setContainerStyle=function(e,n){var t={overflow:"hidden"};e.style={overflow:n.style.overflow,paddingRight:n.style.paddingRight},e.overflowing&&(t.paddingRight=parseInt(Object(D.a)(n,"paddingRight")||"0",10)+this.scrollbarSize+"px"),Object(D.a)(n,t)},n.removeContainerStyle=function(e,n){Object.assign(n.style,e.style)},n.add=function(e,n,t){var a=this.modals.indexOf(e),o=this.containers.indexOf(n);if(-1!==a)return a;if(a=this.modals.length,this.modals.push(e),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;B(e,[t,a],(function(e){return I(!0,e)}))}(n,e),-1!==o)return this.data[o].modals.push(e),a;var r={modals:[e],classes:t?t.split(/\s+/):[],overflowing:A(n)};return this.handleContainerOverflow&&this.setContainerStyle(r,n),r.classes.forEach(F.bind(null,n)),this.containers.push(n),this.data.push(r),a},n.remove=function(e){var n=this.modals.indexOf(e);if(-1!==n){var t=this.containerIndexFromModal(e),a=this.data[t],o=this.containers[t];if(a.modals.splice(a.modals.indexOf(e),1),this.modals.splice(n,1),0===a.modals.length)a.classes.forEach(T.bind(null,o)),this.handleContainerOverflow&&this.removeContainerStyle(a,o),this.hideSiblingNodes&&function(e,n){var t=n.dialog,a=n.backdrop;B(e,[t,a],(function(e){return I(!1,e)}))}(o,e),this.containers.splice(t,1),this.data.splice(t,1);else if(this.hideSiblingNodes){var r=a.modals[a.modals.length-1],i=r.backdrop;I(!1,r.dialog),I(!1,i)}}},n.isTopModal=function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e},e}(),z=function(e){var n;return"undefined"===typeof document?null:null==e?Object(u.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(n=e)&&n.nodeType&&e||null)};function K(e){var n=e||(P||(P=new L),P),t=Object(v.useRef)({dialog:null,backdrop:null});return Object.assign(t.current,{add:function(e,a){return n.add(t.current,e,a)},remove:function(){return n.remove(t.current)},isTopModal:function(){return n.isTopModal(t.current)},setDialogRef:Object(v.useCallback)((function(e){t.current.dialog=e}),[]),setBackdropRef:Object(v.useCallback)((function(e){t.current.backdrop=e}),[])})}var _=Object(v.forwardRef)((function(e,n){var t=e.show,a=void 0!==t&&t,i=e.role,c=void 0===i?"dialog":i,s=e.className,u=e.style,d=e.children,f=e.backdrop,b=void 0===f||f,h=e.keyboard,y=void 0===h||h,N=e.onBackdropClick,w=e.onEscapeKeyDown,R=e.transition,F=e.backdropTransition,S=e.autoFocus,T=void 0===S||S,D=e.enforceFocus,H=void 0===D||D,A=e.restoreFocus,M=void 0===A||A,B=e.restoreFocusOptions,I=e.renderDialog,P=e.renderBackdrop,L=void 0===P?function(e){return g.a.createElement("div",e)}:P,_=e.manager,U=e.container,V=e.containerClassName,W=e.onShow,$=e.onHide,J=void 0===$?function(){}:$,q=e.onExit,G=e.onExited,Q=e.onExiting,X=e.onEnter,Y=e.onEntering,Z=e.onEntered,ee=Object(o.a)(e,["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","containerClassName","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"]),ne=function(e,n){var t=Object(v.useState)((function(){return z(e)})),a=t[0],o=t[1];if(!a){var r=z(e);r&&o(r)}return Object(v.useEffect)((function(){n&&a&&n(a)}),[n,a]),Object(v.useEffect)((function(){var n=z(e);n!==a&&o(n)}),[e,a]),a}(U),te=K(_),ae=Object(C.a)(),oe=Object(x.a)(a),re=Object(v.useState)(!a),ie=re[0],ce=re[1],se=Object(v.useRef)(null);Object(v.useImperativeHandle)(n,(function(){return te}),[te]),l.a&&!oe&&a&&(se.current=O()),R||a||ie?a&&ie&&ce(!1):ce(!0);var le=Object(m.a)((function(){if(te.add(ne,V),pe.current=Object(E.a)(document,"keydown",be),me.current=Object(E.a)(document,"focus",(function(){return setTimeout(de)}),!0),W&&W(),T){var e=O(document);te.dialog&&e&&!Object(j.a)(te.dialog,e)&&(se.current=e,te.dialog.focus())}})),ue=Object(m.a)((function(){var e;(te.remove(),null==pe.current||pe.current(),null==me.current||me.current(),M)&&(null==(e=se.current)||null==e.focus||e.focus(B),se.current=null)}));Object(v.useEffect)((function(){a&&ne&&le()}),[a,ne,le]),Object(v.useEffect)((function(){ie&&ue()}),[ie,ue]),Object(p.a)((function(){ue()}));var de=Object(m.a)((function(){if(H&&ae()&&te.isTopModal()){var e=O();te.dialog&&e&&!Object(j.a)(te.dialog,e)&&te.dialog.focus()}})),fe=Object(m.a)((function(e){e.target===e.currentTarget&&(null==N||N(e),!0===b&&J())})),be=Object(m.a)((function(e){y&&27===e.keyCode&&te.isTopModal()&&(null==w||w(e),e.defaultPrevented||J())})),me=Object(v.useRef)(),pe=Object(v.useRef)(),he=R;if(!ne||!(a||he&&!ie))return null;var ve=Object(r.a)({role:c,ref:te.setDialogRef,"aria-modal":"dialog"===c||void 0},ee,{style:u,className:s,tabIndex:-1}),ge=I?I(ve):g.a.createElement("div",ve,g.a.cloneElement(d,{role:"document"}));he&&(ge=g.a.createElement(he,{appear:!0,unmountOnExit:!0,in:!!a,onExit:q,onExiting:Q,onExited:function(){ce(!0);for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];null==G||G.apply(void 0,n)},onEnter:X,onEntering:Y,onEntered:Z},ge));var Oe=null;if(b){var je=F;Oe=L({ref:te.setBackdropRef,onClick:fe}),je&&(Oe=g.a.createElement(je,{appear:!0,in:!!a},Oe))}return g.a.createElement(g.a.Fragment,null,k.a.createPortal(g.a.createElement(g.a.Fragment,null,Oe,ge),ne))})),U={show:N.a.bool,container:N.a.any,onShow:N.a.func,onHide:N.a.func,backdrop:N.a.oneOfType([N.a.bool,N.a.oneOf(["static"])]),renderDialog:N.a.func,renderBackdrop:N.a.func,onEscapeKeyDown:N.a.func,onBackdropClick:N.a.func,containerClassName:N.a.string,keyboard:N.a.bool,transition:N.a.elementType,backdropTransition:N.a.elementType,autoFocus:N.a.bool,enforceFocus:N.a.bool,restoreFocus:N.a.bool,restoreFocusOptions:N.a.shape({preventScroll:N.a.bool}),onEnter:N.a.func,onEntering:N.a.func,onEntered:N.a.func,onExit:N.a.func,onExiting:N.a.func,onExited:N.a.func,manager:N.a.instanceOf(L)};_.displayName="Modal",_.propTypes=U;var V=Object.assign(_,{Manager:L}),W=(t(52),t(9)),$=t(49),J=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",q=".sticky-top",G=".navbar-toggler",Q=function(e){function n(){return e.apply(this,arguments)||this}Object(W.a)(n,e);var t=n.prototype;return t.adjustAndStore=function(e,n,t){var a,o=n.style[e];n.dataset[e]=o,Object(D.a)(n,((a={})[e]=parseFloat(Object(D.a)(n,e))+t+"px",a))},t.restore=function(e,n){var t,a=n.dataset[e];void 0!==a&&(delete n.dataset[e],Object(D.a)(n,((t={})[e]=a,t)))},t.setContainerStyle=function(n,t){var a=this;if(e.prototype.setContainerStyle.call(this,n,t),n.overflowing){var o=f();Object($.a)(t,J).forEach((function(e){return a.adjustAndStore("paddingRight",e,o)})),Object($.a)(t,q).forEach((function(e){return a.adjustAndStore("marginRight",e,-o)})),Object($.a)(t,G).forEach((function(e){return a.adjustAndStore("marginRight",e,o)}))}},t.removeContainerStyle=function(n,t){var a=this;e.prototype.removeContainerStyle.call(this,n,t),Object($.a)(t,J).forEach((function(e){return a.restore("paddingRight",e)})),Object($.a)(t,q).forEach((function(e){return a.restore("marginRight",e)})),Object($.a)(t,G).forEach((function(e){return a.restore("marginRight",e)}))},n}(L),X=t(104),Y=t(54),Z=Object(Y.a)("modal-body"),ee=g.a.createContext({onHide:function(){}}),ne=t(6),te=["bsPrefix","className","contentClassName","centered","size","children","scrollable"],ae=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.contentClassName,s=e.centered,l=e.size,u=e.children,d=e.scrollable,f=Object(o.a)(e,te),b=(t=Object(ne.a)(t,"modal"))+"-dialog";return g.a.createElement("div",Object(r.a)({},f,{ref:n,className:c()(b,a,l&&t+"-"+l,s&&b+"-centered",d&&b+"-scrollable")}),g.a.createElement("div",{className:c()(t+"-content",i)},u))}));ae.displayName="ModalDialog";var oe=ae,re=Object(Y.a)("modal-footer"),ie=["label","onClick","className"],ce={label:N.a.string.isRequired,onClick:N.a.func},se=g.a.forwardRef((function(e,n){var t=e.label,a=e.onClick,i=e.className,s=Object(o.a)(e,ie);return g.a.createElement("button",Object(r.a)({ref:n,type:"button",className:c()("close",i),onClick:a},s),g.a.createElement("span",{"aria-hidden":"true"},"\xd7"),g.a.createElement("span",{className:"sr-only"},t))}));se.displayName="CloseButton",se.propTypes=ce,se.defaultProps={label:"Close"};var le=se,ue=["bsPrefix","closeLabel","closeButton","onHide","className","children"],de=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.closeLabel,i=e.closeButton,s=e.onHide,l=e.className,u=e.children,d=Object(o.a)(e,ue);t=Object(ne.a)(t,"modal-header");var f=Object(v.useContext)(ee),b=Object(m.a)((function(){f&&f.onHide(),s&&s()}));return g.a.createElement("div",Object(r.a)({ref:n},d,{className:c()(l,t)}),u,i&&g.a.createElement(le,{label:a,onClick:b}))}));de.displayName="ModalHeader",de.defaultProps={closeLabel:"Close",closeButton:!1};var fe,be,me=de,pe=(fe="h4",g.a.forwardRef((function(e,n){return g.a.createElement("div",Object(r.a)({},e,{ref:n,className:c()(e.className,fe)}))}))),he=Object(Y.a)("modal-title",{Component:pe}),ve=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],ge={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:oe};function Oe(e){return g.a.createElement(X.a,Object(r.a)({},e,{timeout:null}))}function je(e){return g.a.createElement(X.a,Object(r.a)({},e,{timeout:null}))}var Ee=g.a.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,i=e.style,O=e.dialogClassName,j=e.contentClassName,E=e.children,y=e.dialogAs,N=e["aria-labelledby"],w=e.show,k=e.animation,C=e.backdrop,x=e.keyboard,R=e.onEscapeKeyDown,F=e.onShow,S=e.onHide,T=e.container,D=e.autoFocus,H=e.enforceFocus,A=e.restoreFocus,M=e.restoreFocusOptions,B=e.onEntered,I=e.onExit,P=e.onExiting,L=e.onEnter,z=e.onEntering,K=e.onExited,_=e.backdropClassName,U=e.manager,W=Object(o.a)(e,ve),$=Object(v.useState)({}),J=$[0],q=$[1],G=Object(v.useState)(!1),X=G[0],Y=G[1],Z=Object(v.useRef)(!1),te=Object(v.useRef)(!1),ae=Object(v.useRef)(null),oe=Object(b.a)(),re=oe[0],ie=oe[1],ce=Object(m.a)(S);t=Object(ne.a)(t,"modal"),Object(v.useImperativeHandle)(n,(function(){return{get _modal(){return re}}}),[re]);var se=Object(v.useMemo)((function(){return{onHide:ce}}),[ce]);function le(){return U||(be||(be=new Q),be)}function ue(e){if(l.a){var n=le().isContainerOverflowing(re),t=e.scrollHeight>Object(u.a)(e).documentElement.clientHeight;q({paddingRight:n&&!t?f():void 0,paddingLeft:!n&&t?f():void 0})}}var de=Object(m.a)((function(){re&&ue(re.dialog)}));Object(p.a)((function(){Object(d.a)(window,"resize",de),ae.current&&ae.current()}));var fe=function(){Z.current=!0},me=function(e){Z.current&&re&&e.target===re.dialog&&(te.current=!0),Z.current=!1},pe=function(){Y(!0),ae.current=Object(h.a)(re.dialog,(function(){Y(!1)}))},he=function(e){"static"!==C?te.current||e.target!==e.currentTarget?te.current=!1:null==S||S():function(e){e.target===e.currentTarget&&pe()}(e)},ge=Object(v.useCallback)((function(e){return g.a.createElement("div",Object(r.a)({},e,{className:c()(t+"-backdrop",_,!k&&"show")}))}),[k,_,t]),Ee=Object(r.a)({},i,J);k||(Ee.display="block");return g.a.createElement(ee.Provider,{value:se},g.a.createElement(V,{show:w,ref:ie,backdrop:C,container:T,keyboard:!0,autoFocus:D,enforceFocus:H,restoreFocus:A,restoreFocusOptions:M,onEscapeKeyDown:function(e){x||"static"!==C?x&&R&&R(e):(e.preventDefault(),pe())},onShow:F,onHide:S,onEnter:function(e,n){e&&(e.style.display="block",ue(e)),null==L||L(e,n)},onEntering:function(e,n){null==z||z(e,n),Object(s.a)(window,"resize",de)},onEntered:B,onExit:function(e){null==ae.current||ae.current(),null==I||I(e)},onExiting:P,onExited:function(e){e&&(e.style.display=""),null==K||K(e),Object(d.a)(window,"resize",de)},manager:le(),containerClassName:t+"-open",transition:k?Oe:void 0,backdropTransition:k?je:void 0,renderBackdrop:ge,renderDialog:function(e){return g.a.createElement("div",Object(r.a)({role:"dialog"},e,{style:Ee,className:c()(a,t,X&&t+"-static"),onClick:C?he:void 0,onMouseUp:me,"aria-labelledby":N}),g.a.createElement(y,Object(r.a)({},W,{onMouseDown:fe,className:O,contentClassName:j}),E))}}))}));Ee.displayName="Modal",Ee.defaultProps=ge,Ee.Body=Z,Ee.Header=me,Ee.Title=he,Ee.Footer=re,Ee.Dialog=oe,Ee.TRANSITION_DURATION=300,Ee.BACKDROP_TRANSITION_DURATION=150;n.a=Ee},371:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var a=t(0);function o(e){var n=function(e){var n=Object(a.useRef)(e);return n.current=e,n}(e);Object(a.useEffect)((function(){return function(){return n.current()}}),[])}}}]);
//# sourceMappingURL=1.82a8a8db.chunk.js.map