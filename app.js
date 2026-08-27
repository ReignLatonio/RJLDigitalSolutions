(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function H0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Vp={exports:{}},pl={},Gp={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eo=Symbol.for("react.element"),V0=Symbol.for("react.portal"),G0=Symbol.for("react.fragment"),W0=Symbol.for("react.strict_mode"),j0=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),q0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),J0=Symbol.for("react.lazy"),af=Symbol.iterator;function Z0(t){return t===null||typeof t!="object"?null:(t=af&&t[af]||t["@@iterator"],typeof t=="function"?t:null)}var Wp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jp=Object.assign,Xp={};function _s(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Wp}_s.prototype.isReactComponent={};_s.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_s.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function qp(){}qp.prototype=_s.prototype;function Yc(t,e,n){this.props=t,this.context=e,this.refs=Xp,this.updater=n||Wp}var Kc=Yc.prototype=new qp;Kc.constructor=Yc;jp(Kc,_s.prototype);Kc.isPureReactComponent=!0;var lf=Array.isArray,Qp=Object.prototype.hasOwnProperty,Jc={current:null},Yp={key:!0,ref:!0,__self:!0,__source:!0};function Kp(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Qp.call(e,i)&&!Yp.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Eo,type:t,key:s,ref:o,props:r,_owner:Jc.current}}function $0(t,e){return{$$typeof:Eo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zc(t){return typeof t=="object"&&t!==null&&t.$$typeof===Eo}function ev(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var uf=/\/+/g;function Bl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ev(""+t.key):e.toString(36)}function wa(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Eo:case V0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Bl(o,0):i,lf(r)?(n="",t!=null&&(n=t.replace(uf,"$&/")+"/"),wa(r,e,n,"",function(c){return c})):r!=null&&(Zc(r)&&(r=$0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(uf,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",lf(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Bl(s,a);o+=wa(s,e,n,l,r)}else if(l=Z0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Bl(s,a++),o+=wa(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function No(t,e,n){if(t==null)return t;var i=[],r=0;return wa(t,i,"","",function(s){return e.call(n,s,r++)}),i}function tv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},Aa={transition:null},nv={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:Jc};function Jp(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!Zc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ge.Component=_s;Ge.Fragment=G0;Ge.Profiler=j0;Ge.PureComponent=Yc;Ge.StrictMode=W0;Ge.Suspense=Y0;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nv;Ge.act=Jp;Ge.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=jp({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jc.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Qp.call(e,l)&&!Yp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Eo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(t){return t={$$typeof:q0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:X0,_context:t},t.Consumer=t};Ge.createElement=Kp;Ge.createFactory=function(t){var e=Kp.bind(null,t);return e.type=t,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(t){return{$$typeof:Q0,render:t}};Ge.isValidElement=Zc;Ge.lazy=function(t){return{$$typeof:J0,_payload:{_status:-1,_result:t},_init:tv}};Ge.memo=function(t,e){return{$$typeof:K0,type:t,compare:e===void 0?null:e}};Ge.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};Ge.unstable_act=Jp;Ge.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Ge.useContext=function(t){return Kt.current.useContext(t)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Ge.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Ge.useId=function(){return Kt.current.useId()};Ge.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Ge.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Ge.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Ge.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Ge.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Ge.useRef=function(t){return Kt.current.useRef(t)};Ge.useState=function(t){return Kt.current.useState(t)};Ge.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Ge.useTransition=function(){return Kt.current.useTransition()};Ge.version="18.3.1";Gp.exports=Ge;var ut=Gp.exports;const iv=H0(ut);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv=ut,sv=Symbol.for("react.element"),ov=Symbol.for("react.fragment"),av=Object.prototype.hasOwnProperty,lv=rv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uv={key:!0,ref:!0,__self:!0,__source:!0};function Zp(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)av.call(e,i)&&!uv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:sv,type:t,key:s,ref:o,props:r,_owner:lv.current}}pl.Fragment=ov;pl.jsx=Zp;pl.jsxs=Zp;Vp.exports=pl;var b=Vp.exports,ju={},$p={exports:{}},vn={},em={exports:{}},tm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,O){var W=P.length;P.push(O);e:for(;0<W;){var K=W-1>>>1,Z=P[K];if(0<r(Z,O))P[K]=O,P[W]=Z,W=K;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var O=P[0],W=P.pop();if(W!==O){P[0]=W;e:for(var K=0,Z=P.length,X=Z>>>1;K<X;){var J=2*(K+1)-1,ue=P[J],he=J+1,ge=P[he];if(0>r(ue,W))he<Z&&0>r(ge,ue)?(P[K]=ge,P[he]=W,K=he):(P[K]=ue,P[J]=W,K=J);else if(he<Z&&0>r(ge,W))P[K]=ge,P[he]=W,K=he;else break e}}return O}function r(P,O){var W=P.sortIndex-O.sortIndex;return W!==0?W:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,p=null,h=3,v=!1,y=!1,x=!1,f=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(P){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=P)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(P){if(x=!1,m(P),!y)if(n(l)!==null)y=!0,q(C);else{var O=n(c);O!==null&&Q(S,O.startTime-P)}}function C(P,O){y=!1,x&&(x=!1,u(U),U=-1),v=!0;var W=h;try{for(m(O),p=n(l);p!==null&&(!(p.expirationTime>O)||P&&!z());){var K=p.callback;if(typeof K=="function"){p.callback=null,h=p.priorityLevel;var Z=K(p.expirationTime<=O);O=t.unstable_now(),typeof Z=="function"?p.callback=Z:p===n(l)&&i(l),m(O)}else i(l);p=n(l)}if(p!==null)var X=!0;else{var J=n(c);J!==null&&Q(S,J.startTime-O),X=!1}return X}finally{p=null,h=W,v=!1}}var A=!1,T=null,U=-1,_=5,E=-1;function z(){return!(t.unstable_now()-E<_)}function Y(){if(T!==null){var P=t.unstable_now();E=P;var O=!0;try{O=T(!0,P)}finally{O?re():(A=!1,T=null)}}else A=!1}var re;if(typeof g=="function")re=function(){g(Y)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,G=I.port2;I.port1.onmessage=Y,re=function(){G.postMessage(null)}}else re=function(){f(Y,0)};function q(P){T=P,A||(A=!0,re())}function Q(P,O){U=f(function(){P(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||v||(y=!0,q(C))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var W=h;h=O;try{return P()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var W=h;h=P;try{return O()}finally{h=W}},t.unstable_scheduleCallback=function(P,O,W){var K=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?K+W:K):W=K,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=W+Z,P={id:d++,callback:O,priorityLevel:P,startTime:W,expirationTime:Z,sortIndex:-1},W>K?(P.sortIndex=W,e(c,P),n(l)===null&&P===n(c)&&(x?(u(U),U=-1):x=!0,Q(S,W-K))):(P.sortIndex=Z,e(l,P),y||v||(y=!0,q(C))),P},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(P){var O=h;return function(){var W=h;h=O;try{return P.apply(this,arguments)}finally{h=W}}}})(tm);em.exports=tm;var cv=em.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dv=ut,gn=cv;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nm=new Set,io={};function Er(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(io[t]=e,t=0;t<e.length;t++)nm.add(e[t])}var di=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xu=Object.prototype.hasOwnProperty,fv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cf={},df={};function hv(t){return Xu.call(df,t)?!0:Xu.call(cf,t)?!1:fv.test(t)?df[t]=!0:(cf[t]=!0,!1)}function pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mv(t,e,n,i){if(e===null||typeof e>"u"||pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var $c=/[\-:]([a-z])/g;function ed(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($c,ed);Dt[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($c,ed);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($c,ed);Dt[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function td(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mv(e,n,r,i)&&(n=null),i||r===null?hv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=dv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fo=Symbol.for("react.element"),Vr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),nd=Symbol.for("react.strict_mode"),qu=Symbol.for("react.profiler"),im=Symbol.for("react.provider"),rm=Symbol.for("react.context"),id=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Yu=Symbol.for("react.suspense_list"),rd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),sm=Symbol.for("react.offscreen"),ff=Symbol.iterator;function Cs(t){return t===null||typeof t!="object"?null:(t=ff&&t[ff]||t["@@iterator"],typeof t=="function"?t:null)}var ft=Object.assign,zl;function Gs(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Hl=!1;function Vl(t,e){if(!t||Hl)return"";Hl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function gv(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Vl(t.type,!1),t;case 11:return t=Vl(t.type.render,!1),t;case 1:return t=Vl(t.type,!0),t;default:return""}}function Ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gr:return"Fragment";case Vr:return"Portal";case qu:return"Profiler";case nd:return"StrictMode";case Qu:return"Suspense";case Yu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rm:return(t.displayName||"Context")+".Consumer";case im:return(t._context.displayName||"Context")+".Provider";case id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rd:return e=t.displayName||null,e!==null?e:Ku(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return Ku(t(e))}catch{}}return null}function vv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ku(e);case 8:return e===nd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function om(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xv(t){var e=om(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Oo(t){t._valueTracker||(t._valueTracker=xv(t))}function am(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=om(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Gi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lm(t,e){e=e.checked,e!=null&&td(t,"checked",e,!1)}function Zu(t,e){lm(t,e);var n=Gi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$u(t,e.type,n):e.hasOwnProperty("defaultValue")&&$u(t,e.type,Gi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function pf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $u(t,e,n){(e!=="number"||Oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ws=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Gi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ec(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function mf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(Ws(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gi(n)}}function um(t,e){var n=Gi(e.value),i=Gi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function cm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?cm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ko,dm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ko=ko||document.createElement("div"),ko.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ko.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var qs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yv=["Webkit","ms","Moz","O"];Object.keys(qs).forEach(function(t){yv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),qs[e]=qs[t]})});function fm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||qs.hasOwnProperty(t)&&qs[t]?(""+e).trim():e+"px"}function hm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=fm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Sv=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(t,e){if(e){if(Sv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rc=null;function sd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sc=null,is=null,rs=null;function vf(t){if(t=To(t)){if(typeof sc!="function")throw Error(te(280));var e=t.stateNode;e&&(e=yl(e),sc(t.stateNode,t.type,e))}}function pm(t){is?rs?rs.push(t):rs=[t]:is=t}function mm(){if(is){var t=is,e=rs;if(rs=is=null,vf(t),e)for(t=0;t<e.length;t++)vf(e[t])}}function gm(t,e){return t(e)}function vm(){}var Gl=!1;function xm(t,e,n){if(Gl)return t(e,n);Gl=!0;try{return gm(t,e,n)}finally{Gl=!1,(is!==null||rs!==null)&&(vm(),mm())}}function so(t,e){var n=t.stateNode;if(n===null)return null;var i=yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var oc=!1;if(di)try{var bs={};Object.defineProperty(bs,"passive",{get:function(){oc=!0}}),window.addEventListener("test",bs,bs),window.removeEventListener("test",bs,bs)}catch{oc=!1}function _v(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Qs=!1,ka=null,Ba=!1,ac=null,Mv={onError:function(t){Qs=!0,ka=t}};function Ev(t,e,n,i,r,s,o,a,l){Qs=!1,ka=null,_v.apply(Mv,arguments)}function wv(t,e,n,i,r,s,o,a,l){if(Ev.apply(this,arguments),Qs){if(Qs){var c=ka;Qs=!1,ka=null}else throw Error(te(198));Ba||(Ba=!0,ac=c)}}function wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xf(t){if(wr(t)!==t)throw Error(te(188))}function Av(t){var e=t.alternate;if(!e){if(e=wr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xf(r),t;if(s===i)return xf(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function Sm(t){return t=Av(t),t!==null?_m(t):null}function _m(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_m(t);if(e!==null)return e;t=t.sibling}return null}var Mm=gn.unstable_scheduleCallback,yf=gn.unstable_cancelCallback,Tv=gn.unstable_shouldYield,Rv=gn.unstable_requestPaint,vt=gn.unstable_now,Cv=gn.unstable_getCurrentPriorityLevel,od=gn.unstable_ImmediatePriority,Em=gn.unstable_UserBlockingPriority,za=gn.unstable_NormalPriority,bv=gn.unstable_LowPriority,wm=gn.unstable_IdlePriority,ml=null,Yn=null;function Lv(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(ml,t,void 0,(t.current.flags&128)===128)}catch{}}var zn=Math.clz32?Math.clz32:Dv,Pv=Math.log,Uv=Math.LN2;function Dv(t){return t>>>=0,t===0?32:31-(Pv(t)/Uv|0)|0}var Bo=64,zo=4194304;function js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=js(a):(s&=o,s!==0&&(i=js(s)))}else o=n&~r,o!==0?i=js(o):s!==0&&(i=js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Iv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-zn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=Iv(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Am(){var t=Bo;return Bo<<=1,!(Bo&4194240)&&(Bo=64),t}function Wl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function wo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-zn(e),t[e]=n}function Fv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function ad(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Ye=0;function Tm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Rm,ld,Cm,bm,Lm,uc=!1,Ho=[],Ui=null,Di=null,Ii=null,oo=new Map,ao=new Map,Ti=[],Ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sf(t,e){switch(t){case"focusin":case"focusout":Ui=null;break;case"dragenter":case"dragleave":Di=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ao.delete(e.pointerId)}}function Ls(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=To(e),e!==null&&ld(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function kv(t,e,n,i,r){switch(e){case"focusin":return Ui=Ls(Ui,t,e,n,i,r),!0;case"dragenter":return Di=Ls(Di,t,e,n,i,r),!0;case"mouseover":return Ii=Ls(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return oo.set(s,Ls(oo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ao.set(s,Ls(ao.get(s)||null,t,e,n,i,r)),!0}return!1}function Pm(t){var e=ar(t.target);if(e!==null){var n=wr(e);if(n!==null){if(e=n.tag,e===13){if(e=ym(n),e!==null){t.blockedOn=e,Lm(t.priority,function(){Cm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ta(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=cc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rc=i,n.target.dispatchEvent(i),rc=null}else return e=To(n),e!==null&&ld(e),t.blockedOn=n,!1;e.shift()}return!0}function _f(t,e,n){Ta(t)&&n.delete(e)}function Bv(){uc=!1,Ui!==null&&Ta(Ui)&&(Ui=null),Di!==null&&Ta(Di)&&(Di=null),Ii!==null&&Ta(Ii)&&(Ii=null),oo.forEach(_f),ao.forEach(_f)}function Ps(t,e){t.blockedOn===e&&(t.blockedOn=null,uc||(uc=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,Bv)))}function lo(t){function e(r){return Ps(r,t)}if(0<Ho.length){Ps(Ho[0],t);for(var n=1;n<Ho.length;n++){var i=Ho[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ui!==null&&Ps(Ui,t),Di!==null&&Ps(Di,t),Ii!==null&&Ps(Ii,t),oo.forEach(e),ao.forEach(e),n=0;n<Ti.length;n++)i=Ti[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ti.length&&(n=Ti[0],n.blockedOn===null);)Pm(n),n.blockedOn===null&&Ti.shift()}var ss=gi.ReactCurrentBatchConfig,Va=!0;function zv(t,e,n,i){var r=Ye,s=ss.transition;ss.transition=null;try{Ye=1,ud(t,e,n,i)}finally{Ye=r,ss.transition=s}}function Hv(t,e,n,i){var r=Ye,s=ss.transition;ss.transition=null;try{Ye=4,ud(t,e,n,i)}finally{Ye=r,ss.transition=s}}function ud(t,e,n,i){if(Va){var r=cc(t,e,n,i);if(r===null)eu(t,e,i,Ga,n),Sf(t,i);else if(kv(r,t,e,n,i))i.stopPropagation();else if(Sf(t,i),e&4&&-1<Ov.indexOf(t)){for(;r!==null;){var s=To(r);if(s!==null&&Rm(s),s=cc(t,e,n,i),s===null&&eu(t,e,i,Ga,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else eu(t,e,i,null,n)}}var Ga=null;function cc(t,e,n,i){if(Ga=null,t=sd(i),t=ar(t),t!==null)if(e=wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ga=t,null}function Um(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Cv()){case od:return 1;case Em:return 4;case za:case bv:return 16;case wm:return 536870912;default:return 16}default:return 16}}var Ci=null,cd=null,Ra=null;function Dm(){if(Ra)return Ra;var t,e=cd,n=e.length,i,r="value"in Ci?Ci.value:Ci.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ra=r.slice(t,1<i?1-i:void 0)}function Ca(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Vo(){return!0}function Mf(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Vo:Mf,this.isPropagationStopped=Mf,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vo)},persist:function(){},isPersistent:Vo}),e}var Ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dd=xn(Ms),Ao=ft({},Ms,{view:0,detail:0}),Vv=xn(Ao),jl,Xl,Us,gl=ft({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(jl=t.screenX-Us.screenX,Xl=t.screenY-Us.screenY):Xl=jl=0,Us=t),jl)},movementY:function(t){return"movementY"in t?t.movementY:Xl}}),Ef=xn(gl),Gv=ft({},gl,{dataTransfer:0}),Wv=xn(Gv),jv=ft({},Ao,{relatedTarget:0}),ql=xn(jv),Xv=ft({},Ms,{animationName:0,elapsedTime:0,pseudoElement:0}),qv=xn(Xv),Qv=ft({},Ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yv=xn(Qv),Kv=ft({},Ms,{data:0}),wf=xn(Kv),Jv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$v={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$v[t])?!!e[t]:!1}function fd(){return ex}var tx=ft({},Ao,{key:function(t){if(t.key){var e=Jv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ca(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fd,charCode:function(t){return t.type==="keypress"?Ca(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ca(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),nx=xn(tx),ix=ft({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Af=xn(ix),rx=ft({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fd}),sx=xn(rx),ox=ft({},Ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),ax=xn(ox),lx=ft({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=xn(lx),cx=[9,13,27,32],hd=di&&"CompositionEvent"in window,Ys=null;di&&"documentMode"in document&&(Ys=document.documentMode);var dx=di&&"TextEvent"in window&&!Ys,Im=di&&(!hd||Ys&&8<Ys&&11>=Ys),Tf=" ",Rf=!1;function Nm(t,e){switch(t){case"keyup":return cx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function fx(t,e){switch(t){case"compositionend":return Fm(e);case"keypress":return e.which!==32?null:(Rf=!0,Tf);case"textInput":return t=e.data,t===Tf&&Rf?null:t;default:return null}}function hx(t,e){if(Wr)return t==="compositionend"||!hd&&Nm(t,e)?(t=Dm(),Ra=cd=Ci=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Im&&e.locale!=="ko"?null:e.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!px[t.type]:e==="textarea"}function Om(t,e,n,i){pm(i),e=Wa(e,"onChange"),0<e.length&&(n=new dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ks=null,uo=null;function mx(t){Qm(t,0)}function vl(t){var e=qr(t);if(am(e))return t}function gx(t,e){if(t==="change")return e}var km=!1;if(di){var Ql;if(di){var Yl="oninput"in document;if(!Yl){var bf=document.createElement("div");bf.setAttribute("oninput","return;"),Yl=typeof bf.oninput=="function"}Ql=Yl}else Ql=!1;km=Ql&&(!document.documentMode||9<document.documentMode)}function Lf(){Ks&&(Ks.detachEvent("onpropertychange",Bm),uo=Ks=null)}function Bm(t){if(t.propertyName==="value"&&vl(uo)){var e=[];Om(e,uo,t,sd(t)),xm(mx,e)}}function vx(t,e,n){t==="focusin"?(Lf(),Ks=e,uo=n,Ks.attachEvent("onpropertychange",Bm)):t==="focusout"&&Lf()}function xx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(uo)}function yx(t,e){if(t==="click")return vl(e)}function Sx(t,e){if(t==="input"||t==="change")return vl(e)}function _x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:_x;function co(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xu.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Pf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Uf(t,e){var n=Pf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pf(n)}}function zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hm(){for(var t=window,e=Oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Oa(t.document)}return e}function pd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Mx(t){var e=Hm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zm(n.ownerDocument.documentElement,n)){if(i!==null&&pd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Uf(n,s);var o=Uf(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ex=di&&"documentMode"in document&&11>=document.documentMode,jr=null,dc=null,Js=null,fc=!1;function Df(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||jr==null||jr!==Oa(i)||(i=jr,"selectionStart"in i&&pd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Js&&co(Js,i)||(Js=i,i=Wa(dc,"onSelect"),0<i.length&&(e=new dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jr)))}function Go(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Kl={},Vm={};di&&(Vm=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function xl(t){if(Kl[t])return Kl[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vm)return Kl[t]=e[n];return t}var Gm=xl("animationend"),Wm=xl("animationiteration"),jm=xl("animationstart"),Xm=xl("transitionend"),qm=new Map,If="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xi(t,e){qm.set(t,e),Er(e,[t])}for(var Jl=0;Jl<If.length;Jl++){var Zl=If[Jl],wx=Zl.toLowerCase(),Ax=Zl[0].toUpperCase()+Zl.slice(1);Xi(wx,"on"+Ax)}Xi(Gm,"onAnimationEnd");Xi(Wm,"onAnimationIteration");Xi(jm,"onAnimationStart");Xi("dblclick","onDoubleClick");Xi("focusin","onFocus");Xi("focusout","onBlur");Xi(Xm,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function Nf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,wv(i,e,void 0,t),t.currentTarget=null}function Qm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Nf(r,a,c),s=l}}}if(Ba)throw t=ac,Ba=!1,ac=null,t}function nt(t,e){var n=e[vc];n===void 0&&(n=e[vc]=new Set);var i=t+"__bubble";n.has(i)||(Ym(e,t,2,!1),n.add(i))}function $l(t,e,n){var i=0;e&&(i|=4),Ym(n,t,i,e)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function fo(t){if(!t[Wo]){t[Wo]=!0,nm.forEach(function(n){n!=="selectionchange"&&(Tx.has(n)||$l(n,!1,t),$l(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wo]||(e[Wo]=!0,$l("selectionchange",!1,e))}}function Ym(t,e,n,i){switch(Um(e)){case 1:var r=zv;break;case 4:r=Hv;break;default:r=ud}n=r.bind(null,e,n,t),r=void 0,!oc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function eu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xm(function(){var c=s,d=sd(n),p=[];e:{var h=qm.get(t);if(h!==void 0){var v=dd,y=t;switch(t){case"keypress":if(Ca(n)===0)break e;case"keydown":case"keyup":v=nx;break;case"focusin":y="focus",v=ql;break;case"focusout":y="blur",v=ql;break;case"beforeblur":case"afterblur":v=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Wv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=sx;break;case Gm:case Wm:case jm:v=qv;break;case Xm:v=ax;break;case"scroll":v=Vv;break;case"wheel":v=ux;break;case"copy":case"cut":case"paste":v=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Af}var x=(e&4)!==0,f=!x&&t==="scroll",u=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,m;g!==null;){m=g;var S=m.stateNode;if(m.tag===5&&S!==null&&(m=S,u!==null&&(S=so(g,u),S!=null&&x.push(ho(g,S,m)))),f)break;g=g.return}0<x.length&&(h=new v(h,y,null,n,d),p.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",h&&n!==rc&&(y=n.relatedTarget||n.fromElement)&&(ar(y)||y[fi]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(y=n.relatedTarget||n.toElement,v=c,y=y?ar(y):null,y!==null&&(f=wr(y),y!==f||y.tag!==5&&y.tag!==6)&&(y=null)):(v=null,y=c),v!==y)){if(x=Ef,S="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Af,S="onPointerLeave",u="onPointerEnter",g="pointer"),f=v==null?h:qr(v),m=y==null?h:qr(y),h=new x(S,g+"leave",v,n,d),h.target=f,h.relatedTarget=m,S=null,ar(d)===c&&(x=new x(u,g+"enter",y,n,d),x.target=m,x.relatedTarget=f,S=x),f=S,v&&y)t:{for(x=v,u=y,g=0,m=x;m;m=Ar(m))g++;for(m=0,S=u;S;S=Ar(S))m++;for(;0<g-m;)x=Ar(x),g--;for(;0<m-g;)u=Ar(u),m--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=Ar(x),u=Ar(u)}x=null}else x=null;v!==null&&Ff(p,h,v,x,!1),y!==null&&f!==null&&Ff(p,f,y,x,!0)}}e:{if(h=c?qr(c):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=gx;else if(Cf(h))if(km)C=Sx;else{C=xx;var A=vx}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=yx);if(C&&(C=C(t,c))){Om(p,C,n,d);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&$u(h,"number",h.value)}switch(A=c?qr(c):window,t){case"focusin":(Cf(A)||A.contentEditable==="true")&&(jr=A,dc=c,Js=null);break;case"focusout":Js=dc=jr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,Df(p,n,d);break;case"selectionchange":if(Ex)break;case"keydown":case"keyup":Df(p,n,d)}var T;if(hd)e:{switch(t){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else Wr?Nm(t,n)&&(U="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(U="onCompositionStart");U&&(Im&&n.locale!=="ko"&&(Wr||U!=="onCompositionStart"?U==="onCompositionEnd"&&Wr&&(T=Dm()):(Ci=d,cd="value"in Ci?Ci.value:Ci.textContent,Wr=!0)),A=Wa(c,U),0<A.length&&(U=new wf(U,t,null,n,d),p.push({event:U,listeners:A}),T?U.data=T:(T=Fm(n),T!==null&&(U.data=T)))),(T=dx?fx(t,n):hx(t,n))&&(c=Wa(c,"onBeforeInput"),0<c.length&&(d=new wf("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}Qm(p,e)})}function ho(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Wa(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=so(t,n),s!=null&&i.unshift(ho(t,s,r)),s=so(t,e),s!=null&&i.push(ho(t,s,r))),t=t.return}return i}function Ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ff(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=so(n,s),l!=null&&o.unshift(ho(n,l,a))):r||(l=so(n,s),l!=null&&o.push(ho(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Rx=/\r\n?/g,Cx=/\u0000|\uFFFD/g;function Of(t){return(typeof t=="string"?t:""+t).replace(Rx,`
`).replace(Cx,"")}function jo(t,e,n){if(e=Of(e),Of(t)!==e&&n)throw Error(te(425))}function ja(){}var hc=null,pc=null;function mc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,kf=typeof Promise=="function"?Promise:void 0,Lx=typeof queueMicrotask=="function"?queueMicrotask:typeof kf<"u"?function(t){return kf.resolve(null).then(t).catch(Px)}:gc;function Px(t){setTimeout(function(){throw t})}function tu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);lo(e)}function Ni(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Es=Math.random().toString(36).slice(2),Qn="__reactFiber$"+Es,po="__reactProps$"+Es,fi="__reactContainer$"+Es,vc="__reactEvents$"+Es,Ux="__reactListeners$"+Es,Dx="__reactHandles$"+Es;function ar(t){var e=t[Qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fi]||n[Qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bf(t);t!==null;){if(n=t[Qn])return n;t=Bf(t)}return e}t=n,n=t.parentNode}return null}function To(t){return t=t[Qn]||t[fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function yl(t){return t[po]||null}var xc=[],Qr=-1;function qi(t){return{current:t}}function rt(t){0>Qr||(t.current=xc[Qr],xc[Qr]=null,Qr--)}function tt(t,e){Qr++,xc[Qr]=t.current,t.current=e}var Wi={},Ht=qi(Wi),nn=qi(!1),gr=Wi;function ds(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function Xa(){rt(nn),rt(Ht)}function zf(t,e,n){if(Ht.current!==Wi)throw Error(te(168));tt(Ht,e),tt(nn,n)}function Km(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,vv(t)||"Unknown",r));return ft({},n,i)}function qa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,gr=Ht.current,tt(Ht,t),tt(nn,nn.current),!0}function Hf(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=Km(t,e,gr),i.__reactInternalMemoizedMergedChildContext=t,rt(nn),rt(Ht),tt(Ht,t)):rt(nn),tt(nn,n)}var si=null,Sl=!1,nu=!1;function Jm(t){si===null?si=[t]:si.push(t)}function Ix(t){Sl=!0,Jm(t)}function Qi(){if(!nu&&si!==null){nu=!0;var t=0,e=Ye;try{var n=si;for(Ye=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Sl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Mm(od,Qi),r}finally{Ye=e,nu=!1}}return null}var Yr=[],Kr=0,Qa=null,Ya=0,_n=[],Mn=0,vr=null,ai=1,li="";function tr(t,e){Yr[Kr++]=Ya,Yr[Kr++]=Qa,Qa=t,Ya=e}function Zm(t,e,n){_n[Mn++]=ai,_n[Mn++]=li,_n[Mn++]=vr,vr=t;var i=ai;t=li;var r=32-zn(i)-1;i&=~(1<<r),n+=1;var s=32-zn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ai=1<<32-zn(e)+r|n<<r|i,li=s+t}else ai=1<<s|n<<r|i,li=t}function md(t){t.return!==null&&(tr(t,1),Zm(t,1,0))}function gd(t){for(;t===Qa;)Qa=Yr[--Kr],Yr[Kr]=null,Ya=Yr[--Kr],Yr[Kr]=null;for(;t===vr;)vr=_n[--Mn],_n[Mn]=null,li=_n[--Mn],_n[Mn]=null,ai=_n[--Mn],_n[Mn]=null}var pn=null,hn=null,st=!1,Fn=null;function $m(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pn=t,hn=Ni(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pn=t,hn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:ai,overflow:li}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pn=t,hn=null,!0):!1;default:return!1}}function yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(st){var e=hn;if(e){var n=e;if(!Vf(t,e)){if(yc(t))throw Error(te(418));e=Ni(n.nextSibling);var i=pn;e&&Vf(t,e)?$m(i,n):(t.flags=t.flags&-4097|2,st=!1,pn=t)}}else{if(yc(t))throw Error(te(418));t.flags=t.flags&-4097|2,st=!1,pn=t}}}function Gf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pn=t}function Xo(t){if(t!==pn)return!1;if(!st)return Gf(t),st=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mc(t.type,t.memoizedProps)),e&&(e=hn)){if(yc(t))throw eg(),Error(te(418));for(;e;)$m(t,e),e=Ni(e.nextSibling)}if(Gf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){hn=Ni(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}hn=null}}else hn=pn?Ni(t.stateNode.nextSibling):null;return!0}function eg(){for(var t=hn;t;)t=Ni(t.nextSibling)}function fs(){hn=pn=null,st=!1}function vd(t){Fn===null?Fn=[t]:Fn.push(t)}var Nx=gi.ReactCurrentBatchConfig;function Ds(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Wf(t){var e=t._init;return e(t._payload)}function tg(t){function e(u,g){if(t){var m=u.deletions;m===null?(u.deletions=[g],u.flags|=16):m.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Bi(u,g),u.index=0,u.sibling=null,u}function s(u,g,m){return u.index=m,t?(m=u.alternate,m!==null?(m=m.index,m<g?(u.flags|=2,g):m):(u.flags|=2,g)):(u.flags|=1048576,g)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,g,m,S){return g===null||g.tag!==6?(g=uu(m,u.mode,S),g.return=u,g):(g=r(g,m),g.return=u,g)}function l(u,g,m,S){var C=m.type;return C===Gr?d(u,g,m.props.children,S,m.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Wf(C)===g.type)?(S=r(g,m.props),S.ref=Ds(u,g,m),S.return=u,S):(S=Na(m.type,m.key,m.props,null,u.mode,S),S.ref=Ds(u,g,m),S.return=u,S)}function c(u,g,m,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==m.containerInfo||g.stateNode.implementation!==m.implementation?(g=cu(m,u.mode,S),g.return=u,g):(g=r(g,m.children||[]),g.return=u,g)}function d(u,g,m,S,C){return g===null||g.tag!==7?(g=dr(m,u.mode,S,C),g.return=u,g):(g=r(g,m),g.return=u,g)}function p(u,g,m){if(typeof g=="string"&&g!==""||typeof g=="number")return g=uu(""+g,u.mode,m),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Fo:return m=Na(g.type,g.key,g.props,null,u.mode,m),m.ref=Ds(u,null,g),m.return=u,m;case Vr:return g=cu(g,u.mode,m),g.return=u,g;case wi:var S=g._init;return p(u,S(g._payload),m)}if(Ws(g)||Cs(g))return g=dr(g,u.mode,m,null),g.return=u,g;qo(u,g)}return null}function h(u,g,m,S){var C=g!==null?g.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:a(u,g,""+m,S);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fo:return m.key===C?l(u,g,m,S):null;case Vr:return m.key===C?c(u,g,m,S):null;case wi:return C=m._init,h(u,g,C(m._payload),S)}if(Ws(m)||Cs(m))return C!==null?null:d(u,g,m,S,null);qo(u,m)}return null}function v(u,g,m,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(m)||null,a(g,u,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fo:return u=u.get(S.key===null?m:S.key)||null,l(g,u,S,C);case Vr:return u=u.get(S.key===null?m:S.key)||null,c(g,u,S,C);case wi:var A=S._init;return v(u,g,m,A(S._payload),C)}if(Ws(S)||Cs(S))return u=u.get(m)||null,d(g,u,S,C,null);qo(g,S)}return null}function y(u,g,m,S){for(var C=null,A=null,T=g,U=g=0,_=null;T!==null&&U<m.length;U++){T.index>U?(_=T,T=null):_=T.sibling;var E=h(u,T,m[U],S);if(E===null){T===null&&(T=_);break}t&&T&&E.alternate===null&&e(u,T),g=s(E,g,U),A===null?C=E:A.sibling=E,A=E,T=_}if(U===m.length)return n(u,T),st&&tr(u,U),C;if(T===null){for(;U<m.length;U++)T=p(u,m[U],S),T!==null&&(g=s(T,g,U),A===null?C=T:A.sibling=T,A=T);return st&&tr(u,U),C}for(T=i(u,T);U<m.length;U++)_=v(T,u,U,m[U],S),_!==null&&(t&&_.alternate!==null&&T.delete(_.key===null?U:_.key),g=s(_,g,U),A===null?C=_:A.sibling=_,A=_);return t&&T.forEach(function(z){return e(u,z)}),st&&tr(u,U),C}function x(u,g,m,S){var C=Cs(m);if(typeof C!="function")throw Error(te(150));if(m=C.call(m),m==null)throw Error(te(151));for(var A=C=null,T=g,U=g=0,_=null,E=m.next();T!==null&&!E.done;U++,E=m.next()){T.index>U?(_=T,T=null):_=T.sibling;var z=h(u,T,E.value,S);if(z===null){T===null&&(T=_);break}t&&T&&z.alternate===null&&e(u,T),g=s(z,g,U),A===null?C=z:A.sibling=z,A=z,T=_}if(E.done)return n(u,T),st&&tr(u,U),C;if(T===null){for(;!E.done;U++,E=m.next())E=p(u,E.value,S),E!==null&&(g=s(E,g,U),A===null?C=E:A.sibling=E,A=E);return st&&tr(u,U),C}for(T=i(u,T);!E.done;U++,E=m.next())E=v(T,u,U,E.value,S),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?U:E.key),g=s(E,g,U),A===null?C=E:A.sibling=E,A=E);return t&&T.forEach(function(Y){return e(u,Y)}),st&&tr(u,U),C}function f(u,g,m,S){if(typeof m=="object"&&m!==null&&m.type===Gr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Fo:e:{for(var C=m.key,A=g;A!==null;){if(A.key===C){if(C=m.type,C===Gr){if(A.tag===7){n(u,A.sibling),g=r(A,m.props.children),g.return=u,u=g;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===wi&&Wf(C)===A.type){n(u,A.sibling),g=r(A,m.props),g.ref=Ds(u,A,m),g.return=u,u=g;break e}n(u,A);break}else e(u,A);A=A.sibling}m.type===Gr?(g=dr(m.props.children,u.mode,S,m.key),g.return=u,u=g):(S=Na(m.type,m.key,m.props,null,u.mode,S),S.ref=Ds(u,g,m),S.return=u,u=S)}return o(u);case Vr:e:{for(A=m.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===m.containerInfo&&g.stateNode.implementation===m.implementation){n(u,g.sibling),g=r(g,m.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=cu(m,u.mode,S),g.return=u,u=g}return o(u);case wi:return A=m._init,f(u,g,A(m._payload),S)}if(Ws(m))return y(u,g,m,S);if(Cs(m))return x(u,g,m,S);qo(u,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,m),g.return=u,u=g):(n(u,g),g=uu(m,u.mode,S),g.return=u,u=g),o(u)):n(u,g)}return f}var hs=tg(!0),ng=tg(!1),Ka=qi(null),Ja=null,Jr=null,xd=null;function yd(){xd=Jr=Ja=null}function Sd(t){var e=Ka.current;rt(Ka),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function os(t,e){Ja=t,xd=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(xd!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(Ja===null)throw Error(te(308));Jr=t,Ja.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var lr=null;function _d(t){lr===null?lr=[t]:lr.push(t)}function ig(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,_d(e)):(n.next=r.next,r.next=n),e.interleaved=n,hi(t,i)}function hi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ai=!1;function Md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ci(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,hi(t,n)}return r=i.interleaved,r===null?(e.next=e,_d(i)):(e.next=r.next,r.next=e),i.interleaved=e,hi(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ad(t,n)}}function jf(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Za(t,e,n,i){var r=t.updateQueue;Ai=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var p=r.baseState;o=0,d=c=l=null,a=s;do{var h=a.lane,v=a.eventTime;if((i&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,x=a;switch(h=e,v=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(v,p,h);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,h=typeof y=="function"?y.call(v,p,h):y,h==null)break e;p=ft({},p,h);break e;case 2:Ai=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else v={eventTime:v,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=v,l=p):d=d.next=v,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(d===null&&(l=p),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);yr|=o,t.lanes=o,t.memoizedState=p}}function Xf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Ro={},Kn=qi(Ro),mo=qi(Ro),go=qi(Ro);function ur(t){if(t===Ro)throw Error(te(174));return t}function Ed(t,e){switch(tt(go,e),tt(mo,t),tt(Kn,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:tc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=tc(e,t)}rt(Kn),tt(Kn,e)}function ps(){rt(Kn),rt(mo),rt(go)}function sg(t){ur(go.current);var e=ur(Kn.current),n=tc(e,t.type);e!==n&&(tt(mo,t),tt(Kn,n))}function wd(t){mo.current===t&&(rt(Kn),rt(mo))}var ct=qi(0);function $a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var iu=[];function Ad(){for(var t=0;t<iu.length;t++)iu[t]._workInProgressVersionPrimary=null;iu.length=0}var La=gi.ReactCurrentDispatcher,ru=gi.ReactCurrentBatchConfig,xr=0,dt=null,_t=null,Ct=null,el=!1,Zs=!1,vo=0,Fx=0;function Nt(){throw Error(te(321))}function Td(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function Rd(t,e,n,i,r,s){if(xr=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,La.current=t===null||t.memoizedState===null?zx:Hx,t=n(i,r),Zs){s=0;do{if(Zs=!1,vo=0,25<=s)throw Error(te(301));s+=1,Ct=_t=null,e.updateQueue=null,La.current=Vx,t=n(i,r)}while(Zs)}if(La.current=tl,e=_t!==null&&_t.next!==null,xr=0,Ct=_t=dt=null,el=!1,e)throw Error(te(300));return t}function Cd(){var t=vo!==0;return vo=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?dt.memoizedState=Ct=t:Ct=Ct.next=t,Ct}function Cn(){if(_t===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=_t.next;var e=Ct===null?dt.memoizedState:Ct.next;if(e!==null)Ct=e,_t=t;else{if(t===null)throw Error(te(310));_t=t,t={memoizedState:_t.memoizedState,baseState:_t.baseState,baseQueue:_t.baseQueue,queue:_t.queue,next:null},Ct===null?dt.memoizedState=Ct=t:Ct=Ct.next=t}return Ct}function xo(t,e){return typeof e=="function"?e(t):e}function su(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=_t,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((xr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=p,o=i):l=l.next=p,dt.lanes|=d,yr|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Gn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,dt.lanes|=s,yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ou(t){var e=Cn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Gn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function og(){}function ag(t,e){var n=dt,i=Cn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,bd(cg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,yo(9,ug.bind(null,n,i,r,e),void 0,null),bt===null)throw Error(te(349));xr&30||lg(n,e,r)}return r}function lg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ug(t,e,n,i){e.value=n,e.getSnapshot=i,dg(e)&&fg(t)}function cg(t,e,n){return n(function(){dg(e)&&fg(t)})}function dg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function fg(t){var e=hi(t,1);e!==null&&Hn(e,t,1,-1)}function qf(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:t},e.queue=t,t=t.dispatch=Bx.bind(null,dt,t),[e.memoizedState,t]}function yo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function hg(){return Cn().memoizedState}function Pa(t,e,n,i){var r=Xn();dt.flags|=t,r.memoizedState=yo(1|e,n,void 0,i===void 0?null:i)}function _l(t,e,n,i){var r=Cn();i=i===void 0?null:i;var s=void 0;if(_t!==null){var o=_t.memoizedState;if(s=o.destroy,i!==null&&Td(i,o.deps)){r.memoizedState=yo(e,n,s,i);return}}dt.flags|=t,r.memoizedState=yo(1|e,n,s,i)}function Qf(t,e){return Pa(8390656,8,t,e)}function bd(t,e){return _l(2048,8,t,e)}function pg(t,e){return _l(4,2,t,e)}function mg(t,e){return _l(4,4,t,e)}function gg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vg(t,e,n){return n=n!=null?n.concat([t]):null,_l(4,4,gg.bind(null,e,t),n)}function Ld(){}function xg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yg(t,e){var n=Cn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Td(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Sg(t,e,n){return xr&21?(Gn(n,e)||(n=Am(),dt.lanes|=n,yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Ox(t,e){var n=Ye;Ye=n!==0&&4>n?n:4,t(!0);var i=ru.transition;ru.transition={};try{t(!1),e()}finally{Ye=n,ru.transition=i}}function _g(){return Cn().memoizedState}function kx(t,e,n){var i=ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Mg(t))Eg(e,n);else if(n=ig(t,e,n,i),n!==null){var r=Qt();Hn(n,t,i,r),wg(n,e,i)}}function Bx(t,e,n){var i=ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Mg(t))Eg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Gn(a,o)){var l=e.interleaved;l===null?(r.next=r,_d(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ig(t,e,r,i),n!==null&&(r=Qt(),Hn(n,t,i,r),wg(n,e,i))}}function Mg(t){var e=t.alternate;return t===dt||e!==null&&e===dt}function Eg(t,e){Zs=el=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function wg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,ad(t,n)}}var tl={readContext:Rn,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},zx={readContext:Rn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:Qf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Pa(4194308,4,gg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Pa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Pa(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kx.bind(null,dt,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:qf,useDebugValue:Ld,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=qf(!1),e=t[0];return t=Ox.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=dt,r=Xn();if(st){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),bt===null)throw Error(te(349));xr&30||lg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Qf(cg.bind(null,i,s,t),[t]),i.flags|=2048,yo(9,ug.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=bt.identifierPrefix;if(st){var n=li,i=ai;n=(i&~(1<<32-zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hx={readContext:Rn,useCallback:xg,useContext:Rn,useEffect:bd,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:su,useRef:hg,useState:function(){return su(xo)},useDebugValue:Ld,useDeferredValue:function(t){var e=Cn();return Sg(e,_t.memoizedState,t)},useTransition:function(){var t=su(xo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:ag,useId:_g,unstable_isNewReconciler:!1},Vx={readContext:Rn,useCallback:xg,useContext:Rn,useEffect:bd,useImperativeHandle:vg,useInsertionEffect:pg,useLayoutEffect:mg,useMemo:yg,useReducer:ou,useRef:hg,useState:function(){return ou(xo)},useDebugValue:Ld,useDeferredValue:function(t){var e=Cn();return _t===null?e.memoizedState=t:Sg(e,_t.memoizedState,t)},useTransition:function(){var t=ou(xo)[0],e=Cn().memoizedState;return[t,e]},useMutableSource:og,useSyncExternalStore:ag,useId:_g,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=ft({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ft({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ml={isMounted:function(t){return(t=t._reactInternals)?wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ki(t),s=ci(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(Hn(e,t,r,i),ba(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ki(t),s=ci(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(Hn(e,t,r,i),ba(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ki(t),r=ci(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(Hn(e,t,i,n),ba(e,t,i))}};function Yf(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!co(n,i)||!co(r,s):!0}function Ag(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=rn(e)?gr:Ht.current,i=e.contextTypes,s=(i=i!=null)?ds(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ml,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Kf(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ml.enqueueReplaceState(e,e.state,null)}function Ec(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Md(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=rn(e)?gr:Ht.current,r.context=ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ml.enqueueReplaceState(r,r.state,null),Za(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e){try{var n="",i=e;do n+=gv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gx=typeof WeakMap=="function"?WeakMap:Map;function Tg(t,e,n){n=ci(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){il||(il=!0,Ic=i),wc(t,e)},n}function Rg(t,e,n){n=ci(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wc(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Jf(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=iy.bind(null,t,e,n),e.then(t,t))}function Zf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $f(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ci(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var Wx=gi.ReactCurrentOwner,tn=!1;function Xt(t,e,n,i){e.child=t===null?ng(e,null,n,i):hs(e,t.child,n,i)}function eh(t,e,n,i,r){n=n.render;var s=e.ref;return os(e,r),i=Rd(t,e,n,i,s,r),n=Cd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(st&&n&&md(e),e.flags|=1,Xt(t,e,i,r),e.child)}function th(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cg(t,e,s,i,r)):(t=Na(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:co,n(o,i)&&t.ref===e.ref)return pi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(co(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,pi(t,e,r)}return Ac(t,e,n,i,r)}function bg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt($r,cn),cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt($r,cn),cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,tt($r,cn),cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,tt($r,cn),cn|=i;return Xt(t,e,r,n),e.child}function Lg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ac(t,e,n,i,r){var s=rn(n)?gr:Ht.current;return s=ds(e,s),os(e,r),n=Rd(t,e,n,i,s,r),i=Cd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,pi(t,e,r)):(st&&i&&md(e),e.flags|=1,Xt(t,e,n,r),e.child)}function nh(t,e,n,i,r){if(rn(n)){var s=!0;qa(e)}else s=!1;if(os(e,r),e.stateNode===null)Ua(t,e),Ag(e,n,i),Ec(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=rn(n)?gr:Ht.current,c=ds(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Kf(e,o,i,c),Ai=!1;var h=e.memoizedState;o.state=h,Za(e,i,o,r),l=e.memoizedState,a!==i||h!==l||nn.current||Ai?(typeof d=="function"&&(Mc(e,n,d,i),l=e.memoizedState),(a=Ai||Yf(e,n,a,i,h,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,rg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),o.props=c,p=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=rn(n)?gr:Ht.current,l=ds(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==p||h!==l)&&Kf(e,o,i,l),Ai=!1,h=e.memoizedState,o.state=h,Za(e,i,o,r);var y=e.memoizedState;a!==p||h!==y||nn.current||Ai?(typeof v=="function"&&(Mc(e,n,v,i),y=e.memoizedState),(c=Ai||Yf(e,n,c,i,h,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),o.props=i,o.state=y,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Tc(t,e,n,i,s,r)}function Tc(t,e,n,i,r,s){Lg(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hf(e,n,!1),pi(t,e,s);i=e.stateNode,Wx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=hs(e,t.child,null,s),e.child=hs(e,null,a,s)):Xt(t,e,a,s),e.memoizedState=i.state,r&&Hf(e,n,!0),e.child}function Pg(t){var e=t.stateNode;e.pendingContext?zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zf(t,e.context,!1),Ed(t,e.containerInfo)}function ih(t,e,n,i,r){return fs(),vd(r),e.flags|=256,Xt(t,e,n,i),e.child}var Rc={dehydrated:null,treeContext:null,retryLane:0};function Cc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ug(t,e,n){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(ct,r&1),t===null)return Sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Al(o,i,0,null),t=dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Cc(n),e.memoizedState=Rc,t):Pd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Bi(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Cc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rc,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Pd(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qo(t,e,n,i){return i!==null&&vd(i),hs(e,t.child,null,n),t=Pd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=au(Error(te(422))),Qo(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Al({mode:"visible",children:i.children},r,0,null),s=dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&hs(e,t.child,null,o),e.child.memoizedState=Cc(o),e.memoizedState=Rc,s);if(!(e.mode&1))return Qo(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=au(s,i,void 0),Qo(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,hi(t,r),Hn(i,t,r,-1))}return Od(),i=au(Error(te(421))),Qo(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ry.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,hn=Ni(r.nextSibling),pn=e,st=!0,Fn=null,t!==null&&(_n[Mn++]=ai,_n[Mn++]=li,_n[Mn++]=vr,ai=t.id,li=t.overflow,vr=e),e=Pd(e,i.children),e.flags|=4096,e)}function rh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),_c(t.return,e,n)}function lu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Dg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Xt(t,e,i.children,n),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rh(t,n,e);else if(t.tag===19)rh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$a(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),lu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$a(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}lu(e,!0,n,null,s);break;case"together":lu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Xx(t,e,n){switch(e.tag){case 3:Pg(e),fs();break;case 5:sg(e);break;case 1:rn(e.type)&&qa(e);break;case 4:Ed(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Ka,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(ct,ct.current&1),e.flags|=128,null):n&e.child.childLanes?Ug(t,e,n):(tt(ct,ct.current&1),t=pi(t,e,n),t!==null?t.sibling:null);tt(ct,ct.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Dg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,bg(t,e,n)}return pi(t,e,n)}var Ig,bc,Ng,Fg;Ig=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};Ng=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,ur(Kn.current);var s=null;switch(n){case"input":r=Ju(t,r),i=Ju(t,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=ec(t,r),i=ec(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=ja)}nc(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(io.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(io.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&nt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Fg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Is(t,e){if(!st)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qx(t,e,n){var i=e.pendingProps;switch(gd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(e),null;case 1:return rn(e.type)&&Xa(),Ft(e),null;case 3:return i=e.stateNode,ps(),rt(nn),rt(Ht),Ad(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(Oc(Fn),Fn=null))),bc(t,e),Ft(e),null;case 5:wd(e);var r=ur(go.current);if(n=e.type,t!==null&&e.stateNode!=null)Ng(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Ft(e),null}if(t=ur(Kn.current),Xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Qn]=e,i[po]=s,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Xs.length;r++)nt(Xs[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":hf(i,s),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},nt("invalid",i);break;case"textarea":mf(i,s),nt("invalid",i)}nc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(i.textContent,a,t),r=["children",""+a]):io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Oo(i),pf(i,s,!0);break;case"textarea":Oo(i),gf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=ja)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=cm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Qn]=e,t[po]=i,Ig(t,e,!1,!1),e.stateNode=t;e:{switch(o=ic(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Xs.length;r++)nt(Xs[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":hf(t,i),r=Ju(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),nt("invalid",t);break;case"textarea":mf(t,i),r=ec(t,i),nt("invalid",t);break;default:r=i}nc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ro(t,l):typeof l=="number"&&ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&nt("scroll",t):l!=null&&td(t,s,l,o))}switch(n){case"input":Oo(t),pf(t,i,!1);break;case"textarea":Oo(t),gf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Gi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ns(t,!!i.multiple,s,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ft(e),null;case 6:if(t&&e.stateNode!=null)Fg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=ur(go.current),ur(Kn.current),Xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Qn]=e,(s=i.nodeValue!==n)&&(t=pn,t!==null))switch(t.tag){case 3:jo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Qn]=e,e.stateNode=i}return Ft(e),null;case 13:if(rt(ct),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(st&&hn!==null&&e.mode&1&&!(e.flags&128))eg(),fs(),e.flags|=98560,s=!1;else if(s=Xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Qn]=e}else fs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ft(e),s=!1}else Fn!==null&&(Oc(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ct.current&1?Mt===0&&(Mt=3):Od())),e.updateQueue!==null&&(e.flags|=4),Ft(e),null);case 4:return ps(),bc(t,e),t===null&&fo(e.stateNode.containerInfo),Ft(e),null;case 10:return Sd(e.type._context),Ft(e),null;case 17:return rn(e.type)&&Xa(),Ft(e),null;case 19:if(rt(ct),s=e.memoizedState,s===null)return Ft(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Is(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$a(t),o!==null){for(e.flags|=128,Is(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(ct,ct.current&1|2),e.child}t=t.sibling}s.tail!==null&&vt()>gs&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304)}else{if(!i)if(t=$a(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Is(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Ft(e),null}else 2*vt()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,i=!0,Is(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=vt(),e.sibling=null,n=ct.current,tt(ct,i?n&1|2:n&1),e):(Ft(e),null);case 22:case 23:return Fd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?cn&1073741824&&(Ft(e),e.subtreeFlags&6&&(e.flags|=8192)):Ft(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function Qx(t,e){switch(gd(e),e.tag){case 1:return rn(e.type)&&Xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),rt(nn),rt(Ht),Ad(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wd(e),null;case 13:if(rt(ct),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));fs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(ct),null;case 4:return ps(),null;case 10:return Sd(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var Yo=!1,Bt=!1,Yx=typeof WeakSet=="function"?WeakSet:Set,fe=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Lc(t,e,n){try{n()}catch(i){mt(t,e,i)}}var sh=!1;function Kx(t,e){if(hc=Va,t=Hm(),pd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,p=t,h=null;t:for(;;){for(var v;p!==n||r!==0&&p.nodeType!==3||(a=o+r),p!==s||i!==0&&p.nodeType!==3||(l=o+i),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)h=p,p=v;for(;;){if(p===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++d===i&&(l=o),(v=p.nextSibling)!==null)break;p=h,h=p.parentNode}p=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(pc={focusedElem:t,selectionRange:n},Va=!1,fe=e;fe!==null;)if(e=fe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,fe=t;else for(;fe!==null;){e=fe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,f=y.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:In(e.type,x),f);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}return y=sh,sh=!1,y}function $s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Lc(e,n,s)}r=r.next}while(r!==i)}}function El(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Og(t){var e=t.alternate;e!==null&&(t.alternate=null,Og(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Qn],delete e[po],delete e[vc],delete e[Ux],delete e[Dx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kg(t){return t.tag===5||t.tag===3||t.tag===4}function oh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Uc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ja));else if(i!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}function Dc(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Dc(t,e,n),t=t.sibling;t!==null;)Dc(t,e,n),t=t.sibling}var Lt=null,Nn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Bg(t,e,n),n=n.sibling}function Bg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(ml,n)}catch{}switch(n.tag){case 5:Bt||Zr(n,e);case 6:var i=Lt,r=Nn;Lt=null,vi(t,e,n),Lt=i,Nn=r,Lt!==null&&(Nn?(t=Lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Lt.removeChild(n.stateNode));break;case 18:Lt!==null&&(Nn?(t=Lt,n=n.stateNode,t.nodeType===8?tu(t.parentNode,n):t.nodeType===1&&tu(t,n),lo(t)):tu(Lt,n.stateNode));break;case 4:i=Lt,r=Nn,Lt=n.stateNode.containerInfo,Nn=!0,vi(t,e,n),Lt=i,Nn=r;break;case 0:case 11:case 14:case 15:if(!Bt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Lc(n,e,o),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!Bt&&(Zr(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){mt(n,e,a)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(Bt=(i=Bt)||n.memoizedState!==null,vi(t,e,n),Bt=i):vi(t,e,n);break;default:vi(t,e,n)}}function ah(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Yx),e.forEach(function(i){var r=sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Lt=a.stateNode,Nn=!1;break e;case 3:Lt=a.stateNode.containerInfo,Nn=!0;break e;case 4:Lt=a.stateNode.containerInfo,Nn=!0;break e}a=a.return}if(Lt===null)throw Error(te(160));Bg(s,o,r),Lt=null,Nn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){mt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zg(e,t),e=e.sibling}function zg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),jn(t),i&4){try{$s(3,t,t.return),El(3,t)}catch(x){mt(t,t.return,x)}try{$s(5,t,t.return)}catch(x){mt(t,t.return,x)}}break;case 1:Ln(e,t),jn(t),i&512&&n!==null&&Zr(n,n.return);break;case 5:if(Ln(e,t),jn(t),i&512&&n!==null&&Zr(n,n.return),t.flags&32){var r=t.stateNode;try{ro(r,"")}catch(x){mt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lm(r,s),ic(a,o);var c=ic(a,s);for(o=0;o<l.length;o+=2){var d=l[o],p=l[o+1];d==="style"?hm(r,p):d==="dangerouslySetInnerHTML"?dm(r,p):d==="children"?ro(r,p):td(r,d,p,c)}switch(a){case"input":Zu(r,s);break;case"textarea":um(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ns(r,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ns(r,!!s.multiple,s.defaultValue,!0):ns(r,!!s.multiple,s.multiple?[]:"",!1))}r[po]=s}catch(x){mt(t,t.return,x)}}break;case 6:if(Ln(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){mt(t,t.return,x)}}break;case 3:if(Ln(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{lo(e.containerInfo)}catch(x){mt(t,t.return,x)}break;case 4:Ln(e,t),jn(t);break;case 13:Ln(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Id=vt())),i&4&&ah(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Bt=(c=Bt)||d,Ln(e,t),Bt=c):Ln(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(fe=t,d=t.child;d!==null;){for(p=fe=d;fe!==null;){switch(h=fe,v=h.child,h.tag){case 0:case 11:case 14:case 15:$s(4,h,h.return);break;case 1:Zr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(x){mt(i,n,x)}}break;case 5:Zr(h,h.return);break;case 22:if(h.memoizedState!==null){uh(p);continue}}v!==null?(v.return=h,fe=v):uh(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{r=p.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fm("display",o))}catch(x){mt(t,t.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(x){mt(t,t.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ln(e,t),jn(t),i&4&&ah(t);break;case 21:break;default:Ln(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(kg(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ro(r,""),i.flags&=-33);var s=oh(t);Dc(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=oh(t);Uc(t,a,o);break;default:throw Error(te(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jx(t,e,n){fe=t,Hg(t)}function Hg(t,e,n){for(var i=(t.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Yo;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Bt;a=Yo;var c=Bt;if(Yo=o,(Bt=l)&&!c)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?ch(r):l!==null?(l.return=o,fe=l):ch(r);for(;s!==null;)fe=s,Hg(s),s=s.sibling;fe=r,Yo=a,Bt=c}lh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):lh(t)}}function lh(t){for(;fe!==null;){var e=fe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Bt||El(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Bt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xf(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&lo(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Bt||e.flags&512&&Pc(e)}catch(h){mt(e,e.return,h)}}if(e===t){fe=null;break}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}}function uh(t){for(;fe!==null;){var e=fe;if(e===t){fe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,fe=n;break}fe=e.return}}function ch(t){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{El(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{Pc(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===t){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var Zx=Math.ceil,nl=gi.ReactCurrentDispatcher,Ud=gi.ReactCurrentOwner,Tn=gi.ReactCurrentBatchConfig,Xe=0,bt=null,St=null,Ut=0,cn=0,$r=qi(0),Mt=0,So=null,yr=0,wl=0,Dd=0,eo=null,$t=null,Id=0,gs=1/0,ri=null,il=!1,Ic=null,Oi=null,Ko=!1,bi=null,rl=0,to=0,Nc=null,Da=-1,Ia=0;function Qt(){return Xe&6?vt():Da!==-1?Da:Da=vt()}function ki(t){return t.mode&1?Xe&2&&Ut!==0?Ut&-Ut:Nx.transition!==null?(Ia===0&&(Ia=Am()),Ia):(t=Ye,t!==0||(t=window.event,t=t===void 0?16:Um(t.type)),t):1}function Hn(t,e,n,i){if(50<to)throw to=0,Nc=null,Error(te(185));wo(t,n,i),(!(Xe&2)||t!==bt)&&(t===bt&&(!(Xe&2)&&(wl|=n),Mt===4&&Ri(t,Ut)),sn(t,i),n===1&&Xe===0&&!(e.mode&1)&&(gs=vt()+500,Sl&&Qi()))}function sn(t,e){var n=t.callbackNode;Nv(t,e);var i=Ha(t,t===bt?Ut:0);if(i===0)n!==null&&yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yf(n),e===1)t.tag===0?Ix(dh.bind(null,t)):Jm(dh.bind(null,t)),Lx(function(){!(Xe&6)&&Qi()}),n=null;else{switch(Tm(i)){case 1:n=od;break;case 4:n=Em;break;case 16:n=za;break;case 536870912:n=wm;break;default:n=za}n=Yg(n,Vg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vg(t,e){if(Da=-1,Ia=0,Xe&6)throw Error(te(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var i=Ha(t,t===bt?Ut:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=sl(t,i);else{e=i;var r=Xe;Xe|=2;var s=Wg();(bt!==t||Ut!==e)&&(ri=null,gs=vt()+500,cr(t,e));do try{ty();break}catch(a){Gg(t,a)}while(!0);yd(),nl.current=s,Xe=r,St!==null?e=0:(bt=null,Ut=0,e=Mt)}if(e!==0){if(e===2&&(r=lc(t),r!==0&&(i=r,e=Fc(t,r))),e===1)throw n=So,cr(t,0),Ri(t,i),sn(t,vt()),n;if(e===6)Ri(t,i);else{if(r=t.current.alternate,!(i&30)&&!$x(r)&&(e=sl(t,i),e===2&&(s=lc(t),s!==0&&(i=s,e=Fc(t,s))),e===1))throw n=So,cr(t,0),Ri(t,i),sn(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:nr(t,$t,ri);break;case 3:if(Ri(t,i),(i&130023424)===i&&(e=Id+500-vt(),10<e)){if(Ha(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gc(nr.bind(null,t,$t,ri),e);break}nr(t,$t,ri);break;case 4:if(Ri(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-zn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Zx(i/1960))-i,10<i){t.timeoutHandle=gc(nr.bind(null,t,$t,ri),i);break}nr(t,$t,ri);break;case 5:nr(t,$t,ri);break;default:throw Error(te(329))}}}return sn(t,vt()),t.callbackNode===n?Vg.bind(null,t):null}function Fc(t,e){var n=eo;return t.current.memoizedState.isDehydrated&&(cr(t,e).flags|=256),t=sl(t,e),t!==2&&(e=$t,$t=n,e!==null&&Oc(e)),t}function Oc(t){$t===null?$t=t:$t.push.apply($t,t)}function $x(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ri(t,e){for(e&=~Dd,e&=~wl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-zn(e),i=1<<n;t[n]=-1,e&=~i}}function dh(t){if(Xe&6)throw Error(te(327));as();var e=Ha(t,0);if(!(e&1))return sn(t,vt()),null;var n=sl(t,e);if(t.tag!==0&&n===2){var i=lc(t);i!==0&&(e=i,n=Fc(t,i))}if(n===1)throw n=So,cr(t,0),Ri(t,e),sn(t,vt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,$t,ri),sn(t,vt()),null}function Nd(t,e){var n=Xe;Xe|=1;try{return t(e)}finally{Xe=n,Xe===0&&(gs=vt()+500,Sl&&Qi())}}function Sr(t){bi!==null&&bi.tag===0&&!(Xe&6)&&as();var e=Xe;Xe|=1;var n=Tn.transition,i=Ye;try{if(Tn.transition=null,Ye=1,t)return t()}finally{Ye=i,Tn.transition=n,Xe=e,!(Xe&6)&&Qi()}}function Fd(){cn=$r.current,rt($r)}function cr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,bx(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(gd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xa();break;case 3:ps(),rt(nn),rt(Ht),Ad();break;case 5:wd(i);break;case 4:ps();break;case 13:rt(ct);break;case 19:rt(ct);break;case 10:Sd(i.type._context);break;case 22:case 23:Fd()}n=n.return}if(bt=t,St=t=Bi(t.current,null),Ut=cn=e,Mt=0,So=null,Dd=wl=yr=0,$t=eo=null,lr!==null){for(e=0;e<lr.length;e++)if(n=lr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}lr=null}return t}function Gg(t,e){do{var n=St;try{if(yd(),La.current=tl,el){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}el=!1}if(xr=0,Ct=_t=dt=null,Zs=!1,vo=0,Ud.current=null,n===null||n.return===null){Mt=1,So=e,St=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Zf(o);if(v!==null){v.flags&=-257,$f(v,o,a,s,e),v.mode&1&&Jf(s,c,e),e=v,l=c;var y=e.updateQueue;if(y===null){var x=new Set;x.add(l),e.updateQueue=x}else y.add(l);break e}else{if(!(e&1)){Jf(s,c,e),Od();break e}l=Error(te(426))}}else if(st&&a.mode&1){var f=Zf(o);if(f!==null){!(f.flags&65536)&&(f.flags|=256),$f(f,o,a,s,e),vd(ms(l,a));break e}}s=l=ms(l,a),Mt!==4&&(Mt=2),eo===null?eo=[s]:eo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Tg(s,l,e);jf(s,u);break e;case 1:a=l;var g=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Oi===null||!Oi.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Rg(s,a,e);jf(s,S);break e}}s=s.return}while(s!==null)}Xg(n)}catch(C){e=C,St===n&&n!==null&&(St=n=n.return);continue}break}while(!0)}function Wg(){var t=nl.current;return nl.current=tl,t===null?tl:t}function Od(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),bt===null||!(yr&268435455)&&!(wl&268435455)||Ri(bt,Ut)}function sl(t,e){var n=Xe;Xe|=2;var i=Wg();(bt!==t||Ut!==e)&&(ri=null,cr(t,e));do try{ey();break}catch(r){Gg(t,r)}while(!0);if(yd(),Xe=n,nl.current=i,St!==null)throw Error(te(261));return bt=null,Ut=0,Mt}function ey(){for(;St!==null;)jg(St)}function ty(){for(;St!==null&&!Tv();)jg(St)}function jg(t){var e=Qg(t.alternate,t,cn);t.memoizedProps=t.pendingProps,e===null?Xg(t):St=e,Ud.current=null}function Xg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qx(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=qx(n,e,cn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function nr(t,e,n){var i=Ye,r=Tn.transition;try{Tn.transition=null,Ye=1,ny(t,e,n,i)}finally{Tn.transition=r,Ye=i}return null}function ny(t,e,n,i){do as();while(bi!==null);if(Xe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Fv(t,s),t===bt&&(St=bt=null,Ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ko||(Ko=!0,Yg(za,function(){return as(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var o=Ye;Ye=1;var a=Xe;Xe|=4,Ud.current=null,Kx(t,n),zg(n,t),Mx(pc),Va=!!hc,pc=hc=null,t.current=n,Jx(n),Rv(),Xe=a,Ye=o,Tn.transition=s}else t.current=n;if(Ko&&(Ko=!1,bi=t,rl=r),s=t.pendingLanes,s===0&&(Oi=null),Lv(n.stateNode),sn(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(il)throw il=!1,t=Ic,Ic=null,t;return rl&1&&t.tag!==0&&as(),s=t.pendingLanes,s&1?t===Nc?to++:(to=0,Nc=t):to=0,Qi(),null}function as(){if(bi!==null){var t=Tm(rl),e=Tn.transition,n=Ye;try{if(Tn.transition=null,Ye=16>t?16:t,bi===null)var i=!1;else{if(t=bi,bi=null,rl=0,Xe&6)throw Error(te(331));var r=Xe;for(Xe|=4,fe=t.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(fe=c;fe!==null;){var d=fe;switch(d.tag){case 0:case 11:case 15:$s(8,d,s)}var p=d.child;if(p!==null)p.return=d,fe=p;else for(;fe!==null;){d=fe;var h=d.sibling,v=d.return;if(Og(d),d===c){fe=null;break}if(h!==null){h.return=v,fe=h;break}fe=v}}}var y=s.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var f=x.sibling;x.sibling=null,x=f}while(x!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$s(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,fe=u;break e}fe=s.return}}var g=t.current;for(fe=g;fe!==null;){o=fe;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,fe=m;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:El(9,a)}}catch(C){mt(a,a.return,C)}if(a===o){fe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,fe=S;break e}fe=a.return}}if(Xe=r,Qi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(ml,t)}catch{}i=!0}return i}finally{Ye=n,Tn.transition=e}}return!1}function fh(t,e,n){e=ms(n,e),e=Tg(t,e,1),t=Fi(t,e,1),e=Qt(),t!==null&&(wo(t,1,e),sn(t,e))}function mt(t,e,n){if(t.tag===3)fh(t,t,n);else for(;e!==null;){if(e.tag===3){fh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=ms(n,t),t=Rg(e,t,1),e=Fi(e,t,1),t=Qt(),e!==null&&(wo(e,1,t),sn(e,t));break}}e=e.return}}function iy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,bt===t&&(Ut&n)===n&&(Mt===4||Mt===3&&(Ut&130023424)===Ut&&500>vt()-Id?cr(t,0):Dd|=n),sn(t,e)}function qg(t,e){e===0&&(t.mode&1?(e=zo,zo<<=1,!(zo&130023424)&&(zo=4194304)):e=1);var n=Qt();t=hi(t,e),t!==null&&(wo(t,e,n),sn(t,n))}function ry(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qg(t,n)}function sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),qg(t,n)}var Qg;Qg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Xx(t,e,n);tn=!!(t.flags&131072)}else tn=!1,st&&e.flags&1048576&&Zm(e,Ya,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ua(t,e),t=e.pendingProps;var r=ds(e,Ht.current);os(e,n),r=Rd(null,e,i,t,r,n);var s=Cd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,qa(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Md(e),r.updater=Ml,e.stateNode=r,r._reactInternals=e,Ec(e,i,t,n),e=Tc(null,e,i,!0,s,n)):(e.tag=0,st&&s&&md(e),Xt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ua(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ay(i),t=In(i,t),r){case 0:e=Ac(null,e,i,t,n);break e;case 1:e=nh(null,e,i,t,n);break e;case 11:e=eh(null,e,i,t,n);break e;case 14:e=th(null,e,i,In(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ac(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),nh(t,e,i,r,n);case 3:e:{if(Pg(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,rg(t,e),Za(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ms(Error(te(423)),e),e=ih(t,e,i,n,r);break e}else if(i!==r){r=ms(Error(te(424)),e),e=ih(t,e,i,n,r);break e}else for(hn=Ni(e.stateNode.containerInfo.firstChild),pn=e,st=!0,Fn=null,n=ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fs(),i===r){e=pi(t,e,n);break e}Xt(t,e,i,n)}e=e.child}return e;case 5:return sg(e),t===null&&Sc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mc(i,r)?o=null:s!==null&&mc(i,s)&&(e.flags|=32),Lg(t,e),Xt(t,e,o,n),e.child;case 6:return t===null&&Sc(e),null;case 13:return Ug(t,e,n);case 4:return Ed(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=hs(e,null,i,n):Xt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),eh(t,e,i,r,n);case 7:return Xt(t,e,e.pendingProps,n),e.child;case 8:return Xt(t,e,e.pendingProps.children,n),e.child;case 12:return Xt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Ka,i._currentValue),i._currentValue=o,s!==null)if(Gn(s.value,o)){if(s.children===r.children&&!nn.current){e=pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=ci(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,os(e,n),r=Rn(r),i=i(r),e.flags|=1,Xt(t,e,i,n),e.child;case 14:return i=e.type,r=In(i,e.pendingProps),r=In(i.type,r),th(t,e,i,r,n);case 15:return Cg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:In(i,r),Ua(t,e),e.tag=1,rn(i)?(t=!0,qa(e)):t=!1,os(e,n),Ag(e,i,r),Ec(e,i,r,n),Tc(null,e,i,!0,t,n);case 19:return Dg(t,e,n);case 22:return bg(t,e,n)}throw Error(te(156,e.tag))};function Yg(t,e){return Mm(t,e)}function oy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new oy(t,e,n,i)}function kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ay(t){if(typeof t=="function")return kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===id)return 11;if(t===rd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Na(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gr:return dr(n.children,r,s,e);case nd:o=8,r|=8;break;case qu:return t=An(12,n,e,r|2),t.elementType=qu,t.lanes=s,t;case Qu:return t=An(13,n,e,r),t.elementType=Qu,t.lanes=s,t;case Yu:return t=An(19,n,e,r),t.elementType=Yu,t.lanes=s,t;case sm:return Al(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case im:o=10;break e;case rm:o=9;break e;case id:o=11;break e;case rd:o=14;break e;case wi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function dr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function Al(t,e,n,i){return t=An(22,t,i,e),t.elementType=sm,t.lanes=n,t.stateNode={isHidden:!1},t}function uu(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function cu(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ly(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wl(0),this.expirationTimes=Wl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bd(t,e,n,i,r,s,o,a,l){return t=new ly(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Md(s),t}function uy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Kg(t){if(!t)return Wi;t=t._reactInternals;e:{if(wr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(rn(n))return Km(t,n,e)}return e}function Jg(t,e,n,i,r,s,o,a,l){return t=Bd(n,i,!0,t,r,s,o,a,l),t.context=Kg(null),n=t.current,i=Qt(),r=ki(n),s=ci(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,wo(t,r,i),sn(t,i),t}function Tl(t,e,n,i){var r=e.current,s=Qt(),o=ki(r);return n=Kg(n),e.context===null?e.context=n:e.pendingContext=n,e=ci(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,o),t!==null&&(Hn(t,r,o,s),ba(t,r,o)),o}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function zd(t,e){hh(t,e),(t=t.alternate)&&hh(t,e)}function cy(){return null}var Zg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hd(t){this._internalRoot=t}Rl.prototype.render=Hd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Tl(t,e,null,null)};Rl.prototype.unmount=Hd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Tl(null,t,null,null)}),e[fi]=null}};function Rl(t){this._internalRoot=t}Rl.prototype.unstable_scheduleHydration=function(t){if(t){var e=bm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ti.length&&e!==0&&e<Ti[n].priority;n++);Ti.splice(n,0,t),n===0&&Pm(t)}};function Vd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ph(){}function dy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=ol(o);s.call(c)}}var o=Jg(e,i,t,0,null,!1,!1,"",ph);return t._reactRootContainer=o,t[fi]=o.current,fo(t.nodeType===8?t.parentNode:t),Sr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=ol(l);a.call(c)}}var l=Bd(t,0,!1,null,null,!1,!1,"",ph);return t._reactRootContainer=l,t[fi]=l.current,fo(t.nodeType===8?t.parentNode:t),Sr(function(){Tl(e,l,n,i)}),l}function bl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=ol(o);a.call(l)}}Tl(e,o,t,r)}else o=dy(n,e,t,r,i);return ol(o)}Rm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=js(e.pendingLanes);n!==0&&(ad(e,n|1),sn(e,vt()),!(Xe&6)&&(gs=vt()+500,Qi()))}break;case 13:Sr(function(){var i=hi(t,1);if(i!==null){var r=Qt();Hn(i,t,1,r)}}),zd(t,1)}};ld=function(t){if(t.tag===13){var e=hi(t,134217728);if(e!==null){var n=Qt();Hn(e,t,134217728,n)}zd(t,134217728)}};Cm=function(t){if(t.tag===13){var e=ki(t),n=hi(t,e);if(n!==null){var i=Qt();Hn(n,t,e,i)}zd(t,e)}};bm=function(){return Ye};Lm=function(t,e){var n=Ye;try{return Ye=t,e()}finally{Ye=n}};sc=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=yl(i);if(!r)throw Error(te(90));am(i),Zu(i,r)}}}break;case"textarea":um(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};gm=Nd;vm=Sr;var fy={usingClientEntryPoint:!1,Events:[To,qr,yl,pm,mm,Nd]},Ns={findFiberByHostInstance:ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hy={bundleType:Ns.bundleType,version:Ns.version,rendererPackageName:Ns.rendererPackageName,rendererConfig:Ns.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sm(t),t===null?null:t.stateNode},findFiberByHostInstance:Ns.findFiberByHostInstance||cy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{ml=Jo.inject(hy),Yn=Jo}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fy;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vd(e))throw Error(te(200));return uy(t,e,null,n)};vn.createRoot=function(t,e){if(!Vd(t))throw Error(te(299));var n=!1,i="",r=Zg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bd(t,1,!1,null,null,n,!1,i,r),t[fi]=e.current,fo(t.nodeType===8?t.parentNode:t),new Hd(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=Sm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Sr(t)};vn.hydrate=function(t,e,n){if(!Cl(e))throw Error(te(200));return bl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Vd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Zg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Jg(e,null,t,1,n??null,r,!1,s,o),t[fi]=e.current,fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Rl(e)};vn.render=function(t,e,n){if(!Cl(e))throw Error(te(200));return bl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!Cl(t))throw Error(te(40));return t._reactRootContainer?(Sr(function(){bl(null,null,t,!1,function(){t._reactRootContainer=null,t[fi]=null})}),!0):!1};vn.unstable_batchedUpdates=Nd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Cl(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return bl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function $g(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($g)}catch(t){console.error(t)}}$g(),$p.exports=vn;var py=$p.exports,mh=py;ju.createRoot=mh.createRoot,ju.hydrateRoot=mh.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gd="160",my=0,gh=1,gy=2,e0=1,vy=2,ii=3,ji=0,on=1,oi=2,zi=0,ls=1,vh=2,xh=3,yh=4,xy=5,sr=100,yy=101,Sy=102,Sh=103,_h=104,_y=200,My=201,Ey=202,wy=203,kc=204,Bc=205,Ay=206,Ty=207,Ry=208,Cy=209,by=210,Ly=211,Py=212,Uy=213,Dy=214,Iy=0,Ny=1,Fy=2,al=3,Oy=4,ky=5,By=6,zy=7,t0=0,Hy=1,Vy=2,Hi=0,Gy=1,Wy=2,jy=3,Xy=4,qy=5,Qy=6,n0=300,vs=301,xs=302,zc=303,Hc=304,Ll=306,Vc=1e3,kn=1001,Gc=1002,qt=1003,Mh=1004,du=1005,En=1006,Yy=1007,_o=1008,Vi=1009,Ky=1010,Jy=1011,Wd=1012,i0=1013,Li=1014,Pi=1015,Mo=1016,r0=1017,s0=1018,fr=1020,Zy=1021,Bn=1023,$y=1024,eS=1025,hr=1026,ys=1027,tS=1028,o0=1029,nS=1030,a0=1031,l0=1033,fu=33776,hu=33777,pu=33778,mu=33779,Eh=35840,wh=35841,Ah=35842,Th=35843,u0=36196,Rh=37492,Ch=37496,bh=37808,Lh=37809,Ph=37810,Uh=37811,Dh=37812,Ih=37813,Nh=37814,Fh=37815,Oh=37816,kh=37817,Bh=37818,zh=37819,Hh=37820,Vh=37821,gu=36492,Gh=36494,Wh=36495,iS=36283,jh=36284,Xh=36285,qh=36286,c0=3e3,pr=3001,rS=3200,sS=3201,d0=0,oS=1,wn="",Pt="srgb",mi="srgb-linear",jd="display-p3",Pl="display-p3-linear",ll="linear",it="srgb",ul="rec709",cl="p3",Tr=7680,Qh=519,aS=512,lS=513,uS=514,f0=515,cS=516,dS=517,fS=518,hS=519,Yh=35044,Kh="300 es",Wc=1035,ui=2e3,dl=2001;class ws{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vu=Math.PI/180,jc=180/Math.PI;function Co(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function pS(t,e){return(t%e+e)%e}function xu(t,e,n){return(1-n)*t+n*e}function Jh(t){return(t&t-1)===0&&t!==0}function Xc(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Fs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],p=i[7],h=i[2],v=i[5],y=i[8],x=r[0],f=r[3],u=r[6],g=r[1],m=r[4],S=r[7],C=r[2],A=r[5],T=r[8];return s[0]=o*x+a*g+l*C,s[3]=o*f+a*m+l*A,s[6]=o*u+a*S+l*T,s[1]=c*x+d*g+p*C,s[4]=c*f+d*m+p*A,s[7]=c*u+d*S+p*T,s[2]=h*x+v*g+y*C,s[5]=h*f+v*m+y*A,s[8]=h*u+v*S+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=d*o-a*c,h=a*l-d*s,v=c*s-o*l,y=n*p+i*h+r*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*c-d*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=v*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(yu.makeScale(e,n)),this}rotate(e){return this.premultiply(yu.makeRotation(-e)),this}translate(e,n){return this.premultiply(yu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const yu=new He;function h0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function fl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function mS(){const t=fl("canvas");return t.style.display="block",t}const Zh={};function no(t){t in Zh||(Zh[t]=!0,console.warn(t))}const $h=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ep=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zo={[mi]:{transfer:ll,primaries:ul,toReference:t=>t,fromReference:t=>t},[Pt]:{transfer:it,primaries:ul,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Pl]:{transfer:ll,primaries:cl,toReference:t=>t.applyMatrix3(ep),fromReference:t=>t.applyMatrix3($h)},[jd]:{transfer:it,primaries:cl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(ep),fromReference:t=>t.applyMatrix3($h).convertLinearToSRGB()}},gS=new Set([mi,Pl]),Je={enabled:!0,_workingColorSpace:mi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zo[e].toReference,r=Zo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zo[t].primaries},getTransfer:function(t){return t===wn?ll:Zo[t].transfer}};function us(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Su(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Rr;class p0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Rr===void 0&&(Rr=fl("canvas")),Rr.width=e.width,Rr.height=e.height;const i=Rr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Rr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=fl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=us(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(us(n[i]/255)*255):n[i]=us(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vS=0;class m0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vS++}),this.uuid=Co(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(_u(r[o].image)):s.push(_u(r[o]))}else s=_u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function _u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?p0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xS=0;class mn extends ws{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=kn,r=kn,s=En,o=_o,a=Bn,l=Vi,c=mn.DEFAULT_ANISOTROPY,d=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Co(),this.name="",this.source=new m0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===pr?Pt:wn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==n0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vc:e.x=e.x-Math.floor(e.x);break;case kn:e.x=e.x<0?0:1;break;case Gc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vc:e.y=e.y-Math.floor(e.y);break;case kn:e.y=e.y<0?0:1;break;case Gc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Pt?pr:c0}set encoding(e){no("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===pr?Pt:wn}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=n0;mn.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,n=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],p=l[8],h=l[1],v=l[5],y=l[9],x=l[2],f=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(p-x)<.01&&Math.abs(y-f)<.01){if(Math.abs(d+h)<.1&&Math.abs(p+x)<.1&&Math.abs(y+f)<.1&&Math.abs(c+v+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const m=(c+1)/2,S=(v+1)/2,C=(u+1)/2,A=(d+h)/4,T=(p+x)/4,U=(y+f)/4;return m>S&&m>C?m<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(m),r=A/i,s=T/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=U/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=T/s,r=U/s),this.set(i,r,s,n),this}let g=Math.sqrt((f-y)*(f-y)+(p-x)*(p-x)+(h-d)*(h-d));return Math.abs(g)<.001&&(g=1),this.x=(f-y)/g,this.y=(p-x)/g,this.z=(h-d)/g,this.w=Math.acos((c+v+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yS extends ws{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ot(0,0,e,n),this.scissorTest=!1,this.viewport=new ot(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(no("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===pr?Pt:wn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new m0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _r extends yS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class g0 extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class SS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=qt,this.minFilter=qt,this.wrapR=kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],p=i[r+3];const h=s[o+0],v=s[o+1],y=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p;return}if(a===1){e[n+0]=h,e[n+1]=v,e[n+2]=y,e[n+3]=x;return}if(p!==x||l!==h||c!==v||d!==y){let f=1-a;const u=l*h+c*v+d*y+p*x,g=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const C=Math.sqrt(m),A=Math.atan2(C,u*g);f=Math.sin(f*A)/C,a=Math.sin(a*A)/C}const S=a*g;if(l=l*f+h*S,c=c*f+v*S,d=d*f+y*S,p=p*f+x*S,f===1-a){const C=1/Math.sqrt(l*l+c*c+d*d+p*p);l*=C,c*=C,d*=C,p*=C}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],p=s[o],h=s[o+1],v=s[o+2],y=s[o+3];return e[n]=a*y+d*p+l*v-c*h,e[n+1]=l*y+d*h+c*p-a*v,e[n+2]=c*y+d*v+a*h-l*p,e[n+3]=d*y-a*p-l*h-c*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),p=a(s/2),h=l(i/2),v=l(r/2),y=l(s/2);switch(o){case"XYZ":this._x=h*d*p+c*v*y,this._y=c*v*p-h*d*y,this._z=c*d*y+h*v*p,this._w=c*d*p-h*v*y;break;case"YXZ":this._x=h*d*p+c*v*y,this._y=c*v*p-h*d*y,this._z=c*d*y-h*v*p,this._w=c*d*p+h*v*y;break;case"ZXY":this._x=h*d*p-c*v*y,this._y=c*v*p+h*d*y,this._z=c*d*y+h*v*p,this._w=c*d*p-h*v*y;break;case"ZYX":this._x=h*d*p-c*v*y,this._y=c*v*p+h*d*y,this._z=c*d*y-h*v*p,this._w=c*d*p+h*v*y;break;case"YZX":this._x=h*d*p+c*v*y,this._y=c*v*p+h*d*y,this._z=c*d*y-h*v*p,this._w=c*d*p-h*v*y;break;case"XZY":this._x=h*d*p-c*v*y,this._y=c*v*p-h*d*y,this._z=c*d*y+h*v*p,this._w=c*d*p+h*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],p=n[10],h=i+a+p;if(h>0){const v=.5/Math.sqrt(h+1);this._w=.25/v,this._x=(d-l)*v,this._y=(s-c)*v,this._z=(o-r)*v}else if(i>a&&i>p){const v=2*Math.sqrt(1+i-a-p);this._w=(d-l)/v,this._x=.25*v,this._y=(r+o)/v,this._z=(s+c)/v}else if(a>p){const v=2*Math.sqrt(1+a-i-p);this._w=(s-c)/v,this._x=(r+o)/v,this._y=.25*v,this._z=(l+d)/v}else{const v=2*Math.sqrt(1+p-i-a);this._w=(o-r)/v,this._x=(s+c)/v,this._y=(l+d)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const v=1-n;return this._w=v*o+n*this._w,this._x=v*i+n*this._x,this._y=v*r+n*this._y,this._z=v*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),p=Math.sin((1-n)*d)/c,h=Math.sin(n*d)/c;return this._w=o*p+this._w*h,this._x=i*p+this._x*h,this._y=r*p+this._y*h,this._z=s*p+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),p=2*(s*i-o*n);return this.x=n+l*c+o*p-a*d,this.y=i+l*d+a*c-s*p,this.z=r+l*p+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new N,tp=new bo;class Lo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$o.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$o.copy(i.boundingBox)),$o.applyMatrix4(e.matrixWorld),this.union($o)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),ea.subVectors(this.max,Os),Cr.subVectors(e.a,Os),br.subVectors(e.b,Os),Lr.subVectors(e.c,Os),xi.subVectors(br,Cr),yi.subVectors(Lr,br),Ji.subVectors(Cr,Lr);let n=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Ji.z,Ji.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Ji.z,0,-Ji.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Ji.y,Ji.x,0];return!Eu(n,Cr,br,Lr,ea)||(n=[1,0,0,0,1,0,0,0,1],!Eu(n,Cr,br,Lr,ea))?!1:(ta.crossVectors(xi,yi),n=[ta.x,ta.y,ta.z],Eu(n,Cr,br,Lr,ea))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zn=[new N,new N,new N,new N,new N,new N,new N,new N],Pn=new N,$o=new Lo,Cr=new N,br=new N,Lr=new N,xi=new N,yi=new N,Ji=new N,Os=new N,ea=new N,ta=new N,Zi=new N;function Eu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Zi.fromArray(t,s);const a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=n.dot(Zi),d=i.dot(Zi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const _S=new Lo,ks=new N,wu=new N;class Ul{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_S.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ks.subVectors(e,this.center);const n=ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ks.copy(e.center).add(wu)),this.expandByPoint(ks.copy(e.center).sub(wu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $n=new N,Au=new N,na=new N,Si=new N,Tu=new N,ia=new N,Ru=new N;class v0{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=$n.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,n),$n.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Au.copy(e).add(n).multiplyScalar(.5),na.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Au);const s=e.distanceTo(n)*.5,o=-this.direction.dot(na),a=Si.dot(this.direction),l=-Si.dot(na),c=Si.lengthSq(),d=Math.abs(1-o*o);let p,h,v,y;if(d>0)if(p=o*l-a,h=o*a-l,y=s*d,p>=0)if(h>=-y)if(h<=y){const x=1/d;p*=x,h*=x,v=p*(p+o*h+2*a)+h*(o*p+h+2*l)+c}else h=s,p=Math.max(0,-(o*h+a)),v=-p*p+h*(h+2*l)+c;else h=-s,p=Math.max(0,-(o*h+a)),v=-p*p+h*(h+2*l)+c;else h<=-y?(p=Math.max(0,-(-o*s+a)),h=p>0?-s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c):h<=y?(p=0,h=Math.min(Math.max(-s,-l),s),v=h*(h+2*l)+c):(p=Math.max(0,-(o*s+a)),h=p>0?s:Math.min(Math.max(-s,-l),s),v=-p*p+h*(h+2*l)+c);else h=o>0?-s:s,p=Math.max(0,-(o*h+a)),v=-p*p+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Au).addScaledVector(na,h),v}intersectSphere(e,n){$n.subVectors(e.center,this.origin);const i=$n.dot(this.direction),r=$n.dot($n)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,o=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,o=(e.min.y-h.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(a=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,n,i,r,s){Tu.subVectors(n,e),ia.subVectors(i,e),Ru.crossVectors(Tu,ia);let o=this.direction.dot(Ru),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,e);const l=a*this.direction.dot(ia.crossVectors(Si,ia));if(l<0)return null;const c=a*this.direction.dot(Tu.cross(Si));if(c<0||l+c>o)return null;const d=-a*Si.dot(Ru);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,d,p,h,v,y,x,f){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,p,h,v,y,x,f)}set(e,n,i,r,s,o,a,l,c,d,p,h,v,y,x,f){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=p,u[14]=h,u[3]=v,u[7]=y,u[11]=x,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const h=o*d,v=o*p,y=a*d,x=a*p;n[0]=l*d,n[4]=-l*p,n[8]=c,n[1]=v+y*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=y+v*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*d,v=l*p,y=c*d,x=c*p;n[0]=h+x*a,n[4]=y*a-v,n[8]=o*c,n[1]=o*p,n[5]=o*d,n[9]=-a,n[2]=v*a-y,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*d,v=l*p,y=c*d,x=c*p;n[0]=h-x*a,n[4]=-o*p,n[8]=y+v*a,n[1]=v+y*a,n[5]=o*d,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*d,v=o*p,y=a*d,x=a*p;n[0]=l*d,n[4]=y*c-v,n[8]=h*c+x,n[1]=l*p,n[5]=x*c+h,n[9]=v*c-y,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,v=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=x-h*p,n[8]=y*p+v,n[1]=p,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=v*p+y,n[10]=h-x*p}else if(e.order==="XZY"){const h=o*l,v=o*c,y=a*l,x=a*c;n[0]=l*d,n[4]=-p,n[8]=c*d,n[1]=h*p+x,n[5]=o*d,n[9]=v*p-y,n[2]=y*p-v,n[6]=a*d,n[10]=x*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(MS,e,ES)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),_i.crossVectors(i,ln),_i.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),_i.crossVectors(i,ln)),_i.normalize(),ra.crossVectors(ln,_i),r[0]=_i.x,r[4]=ra.x,r[8]=ln.x,r[1]=_i.y,r[5]=ra.y,r[9]=ln.y,r[2]=_i.z,r[6]=ra.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],p=i[5],h=i[9],v=i[13],y=i[2],x=i[6],f=i[10],u=i[14],g=i[3],m=i[7],S=i[11],C=i[15],A=r[0],T=r[4],U=r[8],_=r[12],E=r[1],z=r[5],Y=r[9],re=r[13],I=r[2],G=r[6],q=r[10],Q=r[14],P=r[3],O=r[7],W=r[11],K=r[15];return s[0]=o*A+a*E+l*I+c*P,s[4]=o*T+a*z+l*G+c*O,s[8]=o*U+a*Y+l*q+c*W,s[12]=o*_+a*re+l*Q+c*K,s[1]=d*A+p*E+h*I+v*P,s[5]=d*T+p*z+h*G+v*O,s[9]=d*U+p*Y+h*q+v*W,s[13]=d*_+p*re+h*Q+v*K,s[2]=y*A+x*E+f*I+u*P,s[6]=y*T+x*z+f*G+u*O,s[10]=y*U+x*Y+f*q+u*W,s[14]=y*_+x*re+f*Q+u*K,s[3]=g*A+m*E+S*I+C*P,s[7]=g*T+m*z+S*G+C*O,s[11]=g*U+m*Y+S*q+C*W,s[15]=g*_+m*re+S*Q+C*K,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],p=e[6],h=e[10],v=e[14],y=e[3],x=e[7],f=e[11],u=e[15];return y*(+s*l*p-r*c*p-s*a*h+i*c*h+r*a*v-i*l*v)+x*(+n*l*v-n*c*h+s*o*h-r*o*v+r*c*d-s*l*d)+f*(+n*c*p-n*a*v-s*o*p+i*o*v+s*a*d-i*c*d)+u*(-r*a*d-n*l*p+n*a*h+r*o*p-i*o*h+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],p=e[9],h=e[10],v=e[11],y=e[12],x=e[13],f=e[14],u=e[15],g=p*f*c-x*h*c+x*l*v-a*f*v-p*l*u+a*h*u,m=y*h*c-d*f*c-y*l*v+o*f*v+d*l*u-o*h*u,S=d*x*c-y*p*c+y*a*v-o*x*v-d*a*u+o*p*u,C=y*p*l-d*x*l-y*a*h+o*x*h+d*a*f-o*p*f,A=n*g+i*m+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(x*h*s-p*f*s-x*r*v+i*f*v+p*r*u-i*h*u)*T,e[2]=(a*f*s-x*l*s+x*r*c-i*f*c-a*r*u+i*l*u)*T,e[3]=(p*l*s-a*h*s-p*r*c+i*h*c+a*r*v-i*l*v)*T,e[4]=m*T,e[5]=(d*f*s-y*h*s+y*r*v-n*f*v-d*r*u+n*h*u)*T,e[6]=(y*l*s-o*f*s-y*r*c+n*f*c+o*r*u-n*l*u)*T,e[7]=(o*h*s-d*l*s+d*r*c-n*h*c-o*r*v+n*l*v)*T,e[8]=S*T,e[9]=(y*p*s-d*x*s-y*i*v+n*x*v+d*i*u-n*p*u)*T,e[10]=(o*x*s-y*a*s+y*i*c-n*x*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*p*s-d*i*c+n*p*c+o*i*v-n*a*v)*T,e[12]=C*T,e[13]=(d*x*r-y*p*r+y*i*h-n*x*h-d*i*f+n*p*f)*T,e[14]=(y*a*r-o*x*r-y*i*l+n*x*l+o*i*f-n*a*f)*T,e[15]=(o*p*r-d*a*r+d*i*l-n*p*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,p=a+a,h=s*c,v=s*d,y=s*p,x=o*d,f=o*p,u=a*p,g=l*c,m=l*d,S=l*p,C=i.x,A=i.y,T=i.z;return r[0]=(1-(x+u))*C,r[1]=(v+S)*C,r[2]=(y-m)*C,r[3]=0,r[4]=(v-S)*A,r[5]=(1-(h+u))*A,r[6]=(f+g)*A,r[7]=0,r[8]=(y+m)*T,r[9]=(f-g)*T,r[10]=(1-(h+x))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,d=1/o,p=1/a;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=d,Un.elements[5]*=d,Un.elements[6]*=d,Un.elements[8]*=p,Un.elements[9]*=p,Un.elements[10]*=p,n.setFromRotationMatrix(Un),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=ui){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),p=(n+e)/(n-e),h=(i+r)/(i-r);let v,y;if(a===ui)v=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===dl)v=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ui){const l=this.elements,c=1/(n-e),d=1/(i-r),p=1/(o-s),h=(n+e)*c,v=(i+r)*d;let y,x;if(a===ui)y=(o+s)*p,x=-2*p;else if(a===dl)y=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-v,l[2]=0,l[6]=0,l[10]=x,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Pr=new N,Un=new xt,MS=new N(0,0,0),ES=new N(1,1,1),_i=new N,ra=new N,ln=new N,np=new xt,ip=new bo;class Dl{constructor(e=0,n=0,i=0,r=Dl.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],p=r[2],h=r[6],v=r[10];switch(n){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,v),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,v));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return np.makeRotationFromQuaternion(e),this.setFromRotationMatrix(np,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ip.setFromEuler(this),this.setFromQuaternion(ip,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dl.DEFAULT_ORDER="XYZ";class x0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let wS=0;const rp=new N,Ur=new bo,ei=new xt,sa=new N,Bs=new N,AS=new N,TS=new bo,sp=new N(1,0,0),op=new N(0,1,0),ap=new N(0,0,1),RS={type:"added"},CS={type:"removed"};class Yt extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new N,n=new Dl,i=new bo,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new He}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new x0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(sp,e)}rotateY(e){return this.rotateOnAxis(op,e)}rotateZ(e){return this.rotateOnAxis(ap,e)}translateOnAxis(e,n){return rp.copy(e).applyQuaternion(this.quaternion),this.position.add(rp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(sp,e)}translateY(e){return this.translateOnAxis(op,e)}translateZ(e){return this.translateOnAxis(ap,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?sa.copy(e):sa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Bs,sa,this.up):ei.lookAt(sa,Bs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ei),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(RS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CS)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,TS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),p=o(e.shapes),h=o(e.skeletons),v=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),v.length>0&&(i.animations=v),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new N(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new N,ti=new N,Cu=new N,ni=new N,Dr=new N,Ir=new N,lp=new N,bu=new N,Lu=new N,Pu=new N;let oa=!1;class On{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),ti.subVectors(i,n),Cu.subVectors(e,n);const o=Dn.dot(Dn),a=Dn.dot(ti),l=Dn.dot(Cu),c=ti.dot(ti),d=ti.dot(Cu),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const h=1/p,v=(c*l-a*d)*h,y=(o*d-a*l)*h;return s.set(1-v-y,y,v)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getUV(e,n,i,r,s,o,a,l){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),ti.subVectors(e,n),Dn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Dn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return oa===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),oa=!0),On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Dr.subVectors(r,i),Ir.subVectors(s,i),bu.subVectors(e,i);const l=Dr.dot(bu),c=Ir.dot(bu);if(l<=0&&c<=0)return n.copy(i);Lu.subVectors(e,r);const d=Dr.dot(Lu),p=Ir.dot(Lu);if(d>=0&&p<=d)return n.copy(r);const h=l*p-d*c;if(h<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Dr,o);Pu.subVectors(e,s);const v=Dr.dot(Pu),y=Ir.dot(Pu);if(y>=0&&v<=y)return n.copy(s);const x=v*c-l*y;if(x<=0&&c>=0&&y<=0)return a=c/(c-y),n.copy(i).addScaledVector(Ir,a);const f=d*y-v*p;if(f<=0&&p-d>=0&&v-y>=0)return lp.subVectors(s,r),a=(p-d)/(p-d+(v-y)),n.copy(r).addScaledVector(lp,a);const u=1/(f+x+h);return o=x*u,a=h*u,n.copy(i).addScaledVector(Dr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const y0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Uu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=pS(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Uu(o,s,e+1/3),this.g=Uu(o,s,e),this.b=Uu(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=Pt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Pt){const i=y0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}copyLinearToSRGB(e){return this.r=Su(e.r),this.g=Su(e.g),this.b=Su(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Je.fromWorkingColorSpace(kt.copy(this),e),Math.round(en(kt.r*255,0,255))*65536+Math.round(en(kt.g*255,0,255))*256+Math.round(en(kt.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(kt.copy(this),n);const i=kt.r,r=kt.g,s=kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=d<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(kt.copy(this),n),e.r=kt.r,e.g=kt.g,e.b=kt.b,e}getStyle(e=Pt){Je.fromWorkingColorSpace(kt.copy(this),e);const n=kt.r,i=kt.g,r=kt.b;return e!==Pt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(aa);const i=xu(Mi.h,aa.h,n),r=xu(Mi.s,aa.s,n),s=xu(Mi.l,aa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kt=new qe;qe.NAMES=y0;let bS=0;class As extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=ls,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kc,this.blendDst=Bc,this.blendEquation=sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=al,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ls&&(i.blending=this.blending),this.side!==ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kc&&(i.blendSrc=this.blendSrc),this.blendDst!==Bc&&(i.blendDst=this.blendDst),this.blendEquation!==sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==al&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class S0 extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=t0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new N,la=new We;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Yh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)la.fromBufferAttribute(this,n),la.applyMatrix3(e),this.setXY(n,la.x,la.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Fs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}}class _0 extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class M0 extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const Sn=new xt,Du=new Yt,Nr=new N,un=new Lo,zs=new Lo,Rt=new N;class bn extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(h0(e)?M0:_0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Du.lookAt(e),Du.updateMatrix(),this.applyMatrix4(Du.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(Rt.addVectors(un.min,zs.min),un.expandByPoint(Rt),Rt.addVectors(un.max,zs.max),un.expandByPoint(Rt)):(un.expandByPoint(zs.min),un.expandByPoint(zs.max))}un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Rt.fromBufferAttribute(a,c),l&&(Nr.fromBufferAttribute(e,c),Rt.add(Nr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],d=[];for(let E=0;E<a;E++)c[E]=new N,d[E]=new N;const p=new N,h=new N,v=new N,y=new We,x=new We,f=new We,u=new N,g=new N;function m(E,z,Y){p.fromArray(r,E*3),h.fromArray(r,z*3),v.fromArray(r,Y*3),y.fromArray(o,E*2),x.fromArray(o,z*2),f.fromArray(o,Y*2),h.sub(p),v.sub(p),x.sub(y),f.sub(y);const re=1/(x.x*f.y-f.x*x.y);isFinite(re)&&(u.copy(h).multiplyScalar(f.y).addScaledVector(v,-x.y).multiplyScalar(re),g.copy(v).multiplyScalar(x.x).addScaledVector(h,-f.x).multiplyScalar(re),c[E].add(u),c[z].add(u),c[Y].add(u),d[E].add(g),d[z].add(g),d[Y].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let E=0,z=S.length;E<z;++E){const Y=S[E],re=Y.start,I=Y.count;for(let G=re,q=re+I;G<q;G+=3)m(i[G+0],i[G+1],i[G+2])}const C=new N,A=new N,T=new N,U=new N;function _(E){T.fromArray(s,E*3),U.copy(T);const z=c[E];C.copy(z),C.sub(T.multiplyScalar(T.dot(z))).normalize(),A.crossVectors(U,z);const re=A.dot(d[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=re}for(let E=0,z=S.length;E<z;++E){const Y=S[E],re=Y.start,I=Y.count;for(let G=re,q=re+I;G<q;G+=3)_(i[G+0]),_(i[G+1]),_(i[G+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,v=i.count;h<v;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,p=new N;if(e)for(let h=0,v=e.count;h<v;h+=3){const y=e.getX(h+0),x=e.getX(h+1),f=e.getX(h+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,f),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,f),a.add(d),l.add(d),c.add(d),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(f,c.x,c.y,c.z)}else for(let h=0,v=n.count;h<v;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),d.subVectors(o,s),p.subVectors(r,s),d.cross(p),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,p=a.normalized,h=new c.constructor(l.length*d);let v=0,y=0;for(let x=0,f=l.length;x<f;x++){a.isInterleavedBufferAttribute?v=l[x]*a.data.stride+a.offset:v=l[x]*d;for(let u=0;u<d;u++)h[y++]=c[v++]}return new Vn(h,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,p=c.length;d<p;d++){const h=c[d],v=e(h,i);l.push(v)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let p=0,h=c.length;p<h;p++){const v=c[p];d.push(v.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],p=s[c];for(let h=0,v=p.length;h<v;h++)d.push(p[h].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const up=new xt,$i=new v0,ua=new Ul,cp=new N,Fr=new N,Or=new N,kr=new N,Iu=new N,ca=new N,da=new We,fa=new We,ha=new We,dp=new N,fp=new N,hp=new N,pa=new N,ma=new N;class fn extends Yt{constructor(e=new bn,n=new S0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ca.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],p=s[l];d!==0&&(Iu.fromBufferAttribute(p,e),o?ca.addScaledVector(Iu,d):ca.addScaledVector(Iu.sub(n),d))}n.add(ca)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ua.copy(i.boundingSphere),ua.applyMatrix4(s),$i.copy(e.ray).recast(e.near),!(ua.containsPoint($i.origin)===!1&&($i.intersectSphere(ua,cp)===null||$i.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(up.copy(s).invert(),$i.copy(e.ray).applyMatrix4(up),!(i.boundingBox!==null&&$i.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,$i)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,p=s.attributes.normal,h=s.groups,v=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const f=h[y],u=o[f.materialIndex],g=Math.max(f.start,v.start),m=Math.min(a.count,Math.min(f.start+f.count,v.start+v.count));for(let S=g,C=m;S<C;S+=3){const A=a.getX(S),T=a.getX(S+1),U=a.getX(S+2);r=ga(this,u,e,i,c,d,p,A,T,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),x=Math.min(a.count,v.start+v.count);for(let f=y,u=x;f<u;f+=3){const g=a.getX(f),m=a.getX(f+1),S=a.getX(f+2);r=ga(this,o,e,i,c,d,p,g,m,S),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let y=0,x=h.length;y<x;y++){const f=h[y],u=o[f.materialIndex],g=Math.max(f.start,v.start),m=Math.min(l.count,Math.min(f.start+f.count,v.start+v.count));for(let S=g,C=m;S<C;S+=3){const A=S,T=S+1,U=S+2;r=ga(this,u,e,i,c,d,p,A,T,U),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=f.materialIndex,n.push(r))}}else{const y=Math.max(0,v.start),x=Math.min(l.count,v.start+v.count);for(let f=y,u=x;f<u;f+=3){const g=f,m=f+1,S=f+2;r=ga(this,o,e,i,c,d,p,g,m,S),r&&(r.faceIndex=Math.floor(f/3),n.push(r))}}}}function PS(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ji,a),l===null)return null;ma.copy(a),ma.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ma);return c<n.near||c>n.far?null:{distance:c,point:ma.clone(),object:t}}function ga(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fr),t.getVertexPosition(l,Or),t.getVertexPosition(c,kr);const d=PS(t,e,n,i,Fr,Or,kr,pa);if(d){r&&(da.fromBufferAttribute(r,a),fa.fromBufferAttribute(r,l),ha.fromBufferAttribute(r,c),d.uv=On.getInterpolation(pa,Fr,Or,kr,da,fa,ha,new We)),s&&(da.fromBufferAttribute(s,a),fa.fromBufferAttribute(s,l),ha.fromBufferAttribute(s,c),d.uv1=On.getInterpolation(pa,Fr,Or,kr,da,fa,ha,new We),d.uv2=d.uv1),o&&(dp.fromBufferAttribute(o,a),fp.fromBufferAttribute(o,l),hp.fromBufferAttribute(o,c),d.normal=On.getInterpolation(pa,Fr,Or,kr,dp,fp,hp,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const p={a,b:l,c,normal:new N,materialIndex:0};On.getNormal(Fr,Or,kr,p.normal),d.face=p}return d}class Po extends bn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],p=[];let h=0,v=0;y("z","y","x",-1,-1,i,n,e,o,s,0),y("z","y","x",1,-1,i,n,-e,o,s,1),y("x","z","y",1,1,e,i,n,r,o,2),y("x","z","y",1,-1,e,i,-n,r,o,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(p,2));function y(x,f,u,g,m,S,C,A,T,U,_){const E=S/T,z=C/U,Y=S/2,re=C/2,I=A/2,G=T+1,q=U+1;let Q=0,P=0;const O=new N;for(let W=0;W<q;W++){const K=W*z-re;for(let Z=0;Z<G;Z++){const X=Z*E-Y;O[x]=X*g,O[f]=K*m,O[u]=I,c.push(O.x,O.y,O.z),O[x]=0,O[f]=0,O[u]=A>0?1:-1,d.push(O.x,O.y,O.z),p.push(Z/T),p.push(1-W/U),Q+=1}}for(let W=0;W<U;W++)for(let K=0;K<T;K++){const Z=h+K+G*W,X=h+K+G*(W+1),J=h+(K+1)+G*(W+1),ue=h+(K+1)+G*W;l.push(Z,X,ue),l.push(X,J,ue),P+=6}a.addGroup(v,P,_),v+=P,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Ss(t[n]);for(const r in i)e[r]=i[r]}return e}function US(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function E0(t){return t.getRenderTarget()===null?t.outputColorSpace:Je.workingColorSpace}const DS={clone:Ss,merge:jt};var IS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=IS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class w0 extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class dn extends w0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jc*2*Math.atan(Math.tan(vu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(vu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Br=-90,zr=1;class FS extends Yt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Br,zr,e,n);r.layers=this.layers,this.add(r);const s=new dn(Br,zr,e,n);s.layers=this.layers,this.add(s);const o=new dn(Br,zr,e,n);o.layers=this.layers,this.add(o);const a=new dn(Br,zr,e,n);a.layers=this.layers,this.add(a);const l=new dn(Br,zr,e,n);l.layers=this.layers,this.add(l);const c=new dn(Br,zr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===dl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),v=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(p,h,v),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class A0 extends mn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:vs,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OS extends _r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(no("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===pr?Pt:wn),this.texture=new A0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:En}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Po(5,5,5),s=new Mr({name:"CubemapFromEquirect",uniforms:Ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:zi});s.uniforms.tEquirect.value=n;const o=new fn(r,s),a=n.minFilter;return n.minFilter===_o&&(n.minFilter=En),new FS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Nu=new N,kS=new N,BS=new He;class ir{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nu.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BS.getNormalMatrix(e),r=this.coplanarPoint(Nu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const er=new Ul,va=new N;class Xd{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,o=new ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],p=r[6],h=r[7],v=r[8],y=r[9],x=r[10],f=r[11],u=r[12],g=r[13],m=r[14],S=r[15];if(i[0].setComponents(l-s,h-c,f-v,S-u).normalize(),i[1].setComponents(l+s,h+c,f+v,S+u).normalize(),i[2].setComponents(l+o,h+d,f+y,S+g).normalize(),i[3].setComponents(l-o,h-d,f-y,S-g).normalize(),i[4].setComponents(l-a,h-p,f-x,S-m).normalize(),n===ui)i[5].setComponents(l+a,h+p,f+x,S+m).normalize();else if(n===dl)i[5].setComponents(a,p,x,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(e){return er.center.set(0,0,0),er.radius=.7071067811865476,er.applyMatrix4(e.matrixWorld),this.intersectsSphere(er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(va.x=r.normal.x>0?e.max.x:e.min.x,va.y=r.normal.y>0?e.max.y:e.min.y,va.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(va)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function T0(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function zS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const p=c.array,h=c.usage,v=p.byteLength,y=t.createBuffer();t.bindBuffer(d,y),t.bufferData(d,p,h),c.onUploadCallback();let x;if(p instanceof Float32Array)x=t.FLOAT;else if(p instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)x=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=t.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=t.SHORT;else if(p instanceof Uint32Array)x=t.UNSIGNED_INT;else if(p instanceof Int32Array)x=t.INT;else if(p instanceof Int8Array)x=t.BYTE;else if(p instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:c.version,size:v}}function s(c,d,p){const h=d.array,v=d._updateRange,y=d.updateRanges;if(t.bindBuffer(p,c),v.count===-1&&y.length===0&&t.bufferSubData(p,0,h),y.length!==0){for(let x=0,f=y.length;x<f;x++){const u=y[x];n?t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h,u.start,u.count):t.bufferSubData(p,u.start*h.BYTES_PER_ELEMENT,h.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}v.count!==-1&&(n?t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h,v.offset,v.count):t.bufferSubData(p,v.offset*h.BYTES_PER_ELEMENT,h.subarray(v.offset,v.offset+v.count)),v.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const p=i.get(c);if(p===void 0)i.set(c,r(c,d));else if(p.version<c.version){if(p.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,c,d),p.version=c.version}}return{get:o,remove:a,update:l}}class qd extends bn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,p=e/a,h=n/l,v=[],y=[],x=[],f=[];for(let u=0;u<d;u++){const g=u*h-o;for(let m=0;m<c;m++){const S=m*p-s;y.push(S,-g,0),x.push(0,0,1),f.push(m/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<a;g++){const m=g+c*u,S=g+c*(u+1),C=g+1+c*(u+1),A=g+1+c*u;v.push(m,S,A),v.push(S,C,A)}this.setIndex(v),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.width,e.height,e.widthSegments,e.heightSegments)}}var HS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,QS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,KS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,a1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,u1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,d1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,w1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,C1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,b1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,L1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,B1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,z1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,q1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,J1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,n_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,i_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,r_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,s_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,o_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,d_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,f_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,S_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,__=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,E_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,T_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,C_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,L_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,U_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,I_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,N_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,F_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,B_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Q_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,J_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Z_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ne={alphahash_fragment:HS,alphahash_pars_fragment:VS,alphamap_fragment:GS,alphamap_pars_fragment:WS,alphatest_fragment:jS,alphatest_pars_fragment:XS,aomap_fragment:qS,aomap_pars_fragment:QS,batching_pars_vertex:YS,batching_vertex:KS,begin_vertex:JS,beginnormal_vertex:ZS,bsdfs:$S,iridescence_fragment:e1,bumpmap_pars_fragment:t1,clipping_planes_fragment:n1,clipping_planes_pars_fragment:i1,clipping_planes_pars_vertex:r1,clipping_planes_vertex:s1,color_fragment:o1,color_pars_fragment:a1,color_pars_vertex:l1,color_vertex:u1,common:c1,cube_uv_reflection_fragment:d1,defaultnormal_vertex:f1,displacementmap_pars_vertex:h1,displacementmap_vertex:p1,emissivemap_fragment:m1,emissivemap_pars_fragment:g1,colorspace_fragment:v1,colorspace_pars_fragment:x1,envmap_fragment:y1,envmap_common_pars_fragment:S1,envmap_pars_fragment:_1,envmap_pars_vertex:M1,envmap_physical_pars_fragment:I1,envmap_vertex:E1,fog_vertex:w1,fog_pars_vertex:A1,fog_fragment:T1,fog_pars_fragment:R1,gradientmap_pars_fragment:C1,lightmap_fragment:b1,lightmap_pars_fragment:L1,lights_lambert_fragment:P1,lights_lambert_pars_fragment:U1,lights_pars_begin:D1,lights_toon_fragment:N1,lights_toon_pars_fragment:F1,lights_phong_fragment:O1,lights_phong_pars_fragment:k1,lights_physical_fragment:B1,lights_physical_pars_fragment:z1,lights_fragment_begin:H1,lights_fragment_maps:V1,lights_fragment_end:G1,logdepthbuf_fragment:W1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:X1,logdepthbuf_vertex:q1,map_fragment:Q1,map_pars_fragment:Y1,map_particle_fragment:K1,map_particle_pars_fragment:J1,metalnessmap_fragment:Z1,metalnessmap_pars_fragment:$1,morphcolor_vertex:e_,morphnormal_vertex:t_,morphtarget_pars_vertex:n_,morphtarget_vertex:i_,normal_fragment_begin:r_,normal_fragment_maps:s_,normal_pars_fragment:o_,normal_pars_vertex:a_,normal_vertex:l_,normalmap_pars_fragment:u_,clearcoat_normal_fragment_begin:c_,clearcoat_normal_fragment_maps:d_,clearcoat_pars_fragment:f_,iridescence_pars_fragment:h_,opaque_fragment:p_,packing:m_,premultiplied_alpha_fragment:g_,project_vertex:v_,dithering_fragment:x_,dithering_pars_fragment:y_,roughnessmap_fragment:S_,roughnessmap_pars_fragment:__,shadowmap_pars_fragment:M_,shadowmap_pars_vertex:E_,shadowmap_vertex:w_,shadowmask_pars_fragment:A_,skinbase_vertex:T_,skinning_pars_vertex:R_,skinning_vertex:C_,skinnormal_vertex:b_,specularmap_fragment:L_,specularmap_pars_fragment:P_,tonemapping_fragment:U_,tonemapping_pars_fragment:D_,transmission_fragment:I_,transmission_pars_fragment:N_,uv_pars_fragment:F_,uv_pars_vertex:O_,uv_vertex:k_,worldpos_vertex:B_,background_vert:z_,background_frag:H_,backgroundCube_vert:V_,backgroundCube_frag:G_,cube_vert:W_,cube_frag:j_,depth_vert:X_,depth_frag:q_,distanceRGBA_vert:Q_,distanceRGBA_frag:Y_,equirect_vert:K_,equirect_frag:J_,linedashed_vert:Z_,linedashed_frag:$_,meshbasic_vert:eM,meshbasic_frag:tM,meshlambert_vert:nM,meshlambert_frag:iM,meshmatcap_vert:rM,meshmatcap_frag:sM,meshnormal_vert:oM,meshnormal_frag:aM,meshphong_vert:lM,meshphong_frag:uM,meshphysical_vert:cM,meshphysical_frag:dM,meshtoon_vert:fM,meshtoon_frag:hM,points_vert:pM,points_frag:mM,shadow_vert:gM,shadow_frag:vM,sprite_vert:xM,sprite_frag:yM},oe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},qn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ne.meshbasic_vert,fragmentShader:Ne.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshlambert_vert,fragmentShader:Ne.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ne.meshphong_vert,fragmentShader:Ne.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ne.meshtoon_vert,fragmentShader:Ne.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ne.meshmatcap_vert,fragmentShader:Ne.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Ne.points_vert,fragmentShader:Ne.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ne.linedashed_vert,fragmentShader:Ne.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Ne.depth_vert,fragmentShader:Ne.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ne.meshnormal_vert,fragmentShader:Ne.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Ne.sprite_vert,fragmentShader:Ne.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ne.background_vert,fragmentShader:Ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ne.backgroundCube_vert,fragmentShader:Ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ne.cube_vert,fragmentShader:Ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ne.equirect_vert,fragmentShader:Ne.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ne.distanceRGBA_vert,fragmentShader:Ne.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ne.shadow_vert,fragmentShader:Ne.shadow_frag}};qn.physical={uniforms:jt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ne.meshphysical_vert,fragmentShader:Ne.meshphysical_frag};const xa={r:0,b:0,g:0};function SM(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,d,p=null,h=0,v=null;function y(f,u){let g=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?n:e).get(m)),m===null?x(a,l):m&&m.isColor&&(x(m,1),g=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||g)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),m&&(m.isCubeTexture||m.mapping===Ll)?(d===void 0&&(d=new fn(new Po(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ss(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=m,d.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=Je.getTransfer(m.colorSpace)!==it,(p!==m||h!==m.version||v!==t.toneMapping)&&(d.material.needsUpdate=!0,p=m,h=m.version,v=t.toneMapping),d.layers.enableAll(),f.unshift(d,d.geometry,d.material,0,0,null)):m&&m.isTexture&&(c===void 0&&(c=new fn(new qd(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ss(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=m,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=Je.getTransfer(m.colorSpace)!==it,m.matrixAutoUpdate===!0&&m.updateMatrix(),c.material.uniforms.uvTransform.value.copy(m.matrix),(p!==m||h!==m.version||v!==t.toneMapping)&&(c.material.needsUpdate=!0,p=m,h=m.version,v=t.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,u){f.getRGB(xa,E0(t)),i.buffers.color.setClear(xa.r,xa.g,xa.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(f,u=1){a.set(f),l=u,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(a,l)},render:y}}function _M(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=f(null);let c=l,d=!1;function p(I,G,q,Q,P){let O=!1;if(o){const W=x(Q,q,G);c!==W&&(c=W,v(c.object)),O=u(I,Q,q,P),O&&g(I,Q,q,P)}else{const W=G.wireframe===!0;(c.geometry!==Q.id||c.program!==q.id||c.wireframe!==W)&&(c.geometry=Q.id,c.program=q.id,c.wireframe=W,O=!0)}P!==null&&n.update(P,t.ELEMENT_ARRAY_BUFFER),(O||d)&&(d=!1,U(I,G,q,Q),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(P).buffer))}function h(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function v(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function y(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function x(I,G,q){const Q=q.wireframe===!0;let P=a[I.id];P===void 0&&(P={},a[I.id]=P);let O=P[G.id];O===void 0&&(O={},P[G.id]=O);let W=O[Q];return W===void 0&&(W=f(h()),O[Q]=W),W}function f(I){const G=[],q=[],Q=[];for(let P=0;P<r;P++)G[P]=0,q[P]=0,Q[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:Q,object:I,attributes:{},index:null}}function u(I,G,q,Q){const P=c.attributes,O=G.attributes;let W=0;const K=q.getAttributes();for(const Z in K)if(K[Z].location>=0){const J=P[Z];let ue=O[Z];if(ue===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(ue=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(ue=I.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;W++}return c.attributesNum!==W||c.index!==Q}function g(I,G,q,Q){const P={},O=G.attributes;let W=0;const K=q.getAttributes();for(const Z in K)if(K[Z].location>=0){let J=O[Z];J===void 0&&(Z==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),Z==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),P[Z]=ue,W++}c.attributes=P,c.attributesNum=W,c.index=Q}function m(){const I=c.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function S(I){C(I,0)}function C(I,G){const q=c.newAttributes,Q=c.enabledAttributes,P=c.attributeDivisors;q[I]=1,Q[I]===0&&(t.enableVertexAttribArray(I),Q[I]=1),P[I]!==G&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),P[I]=G)}function A(){const I=c.newAttributes,G=c.enabledAttributes;for(let q=0,Q=G.length;q<Q;q++)G[q]!==I[q]&&(t.disableVertexAttribArray(q),G[q]=0)}function T(I,G,q,Q,P,O,W){W===!0?t.vertexAttribIPointer(I,G,q,P,O):t.vertexAttribPointer(I,G,q,Q,P,O)}function U(I,G,q,Q){if(i.isWebGL2===!1&&(I.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const P=Q.attributes,O=q.getAttributes(),W=G.defaultAttributeValues;for(const K in O){const Z=O[K];if(Z.location>=0){let X=P[K];if(X===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const J=X.normalized,ue=X.itemSize,he=n.get(X);if(he===void 0)continue;const ge=he.buffer,Pe=he.type,De=he.bytesPerElement,Ae=i.isWebGL2===!0&&(Pe===t.INT||Pe===t.UNSIGNED_INT||X.gpuType===i0);if(X.isInterleavedBufferAttribute){const je=X.data,k=je.stride,Vt=X.offset;if(je.isInstancedInterleavedBuffer){for(let _e=0;_e<Z.locationSize;_e++)C(Z.location+_e,je.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let _e=0;_e<Z.locationSize;_e++)S(Z.location+_e);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let _e=0;_e<Z.locationSize;_e++)T(Z.location+_e,ue/Z.locationSize,Pe,J,k*De,(Vt+ue/Z.locationSize*_e)*De,Ae)}else{if(X.isInstancedBufferAttribute){for(let je=0;je<Z.locationSize;je++)C(Z.location+je,X.meshPerAttribute);I.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let je=0;je<Z.locationSize;je++)S(Z.location+je);t.bindBuffer(t.ARRAY_BUFFER,ge);for(let je=0;je<Z.locationSize;je++)T(Z.location+je,ue/Z.locationSize,Pe,J,ue*De,ue/Z.locationSize*je*De,Ae)}}else if(W!==void 0){const J=W[K];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(Z.location,J);break;case 3:t.vertexAttrib3fv(Z.location,J);break;case 4:t.vertexAttrib4fv(Z.location,J);break;default:t.vertexAttrib1fv(Z.location,J)}}}}A()}function _(){Y();for(const I in a){const G=a[I];for(const q in G){const Q=G[q];for(const P in Q)y(Q[P].object),delete Q[P];delete G[q]}delete a[I]}}function E(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const q in G){const Q=G[q];for(const P in Q)y(Q[P].object),delete Q[P];delete G[q]}delete a[I.id]}function z(I){for(const G in a){const q=a[G];if(q[I.id]===void 0)continue;const Q=q[I.id];for(const P in Q)y(Q[P].object),delete Q[P];delete q[I.id]}}function Y(){re(),d=!0,c!==l&&(c=l,v(c.object))}function re(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:re,dispose:_,releaseStatesOfGeometry:E,releaseStatesOfProgram:z,initAttributes:m,enableAttribute:S,disableUnusedAttributes:A}}function MM(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}function a(d,p){t.drawArrays(s,d,p),n.update(p,s,1)}function l(d,p,h){if(h===0)return;let v,y;if(r)v=t,y="drawArraysInstanced";else if(v=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",v===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[y](s,d,p,h),n.update(p,s,h)}function c(d,p,h){if(h===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let y=0;y<h;y++)this.render(d[y],p[y]);else{v.multiDrawArraysWEBGL(s,d,0,p,0,h);let y=0;for(let x=0;x<h;x++)y+=p[x];n.update(y,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function EM(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),x=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),g=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),m=h>0,S=o||e.has("OES_texture_float"),C=m&&S,A=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:h,maxTextureSize:v,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:f,maxVaryings:u,maxFragmentUniforms:g,vertexTextures:m,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function wM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ir,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const v=p.length!==0||h||i!==0||r;return r=h,i=p.length,v},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,h){n=d(p,h,0)},this.setState=function(p,h,v){const y=p.clippingPlanes,x=p.clipIntersection,f=p.clipShadows,u=t.get(p);if(!r||y===null||y.length===0||s&&!f)s?d(null):c();else{const g=s?0:i,m=g*4;let S=u.clippingState||null;l.value=S,S=d(y,h,m,v);for(let C=0;C!==m;++C)S[C]=n[C];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(p,h,v,y){const x=p!==null?p.length:0;let f=null;if(x!==0){if(f=l.value,y!==!0||f===null){const u=v+x*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(f===null||f.length<u)&&(f=new Float32Array(u));for(let m=0,S=v;m!==x;++m,S+=4)o.copy(p[m]).applyMatrix4(g,a),o.normal.toArray(f,S),f[S+3]=o.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function AM(t){let e=new WeakMap;function n(o,a){return a===zc?o.mapping=vs:a===Hc&&(o.mapping=xs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===zc||a===Hc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new OS(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class TM extends w0{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const es=4,pp=[.125,.215,.35,.446,.526,.582],or=20,Fu=new TM,mp=new qe;let Ou=null,ku=0,Bu=0;const rr=(1+Math.sqrt(5))/2,Hr=1/rr,gp=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,rr,Hr),new N(0,rr,-Hr),new N(Hr,0,rr),new N(-Hr,0,rr),new N(rr,Hr,0),new N(-rr,Hr,0)];class vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ou,ku,Bu),e.scissorTest=!1,ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ou=this._renderer.getRenderTarget(),ku=this._renderer.getActiveCubeFace(),Bu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:En,minFilter:En,generateMipmaps:!1,type:Mo,format:Bn,colorSpace:mi,depthBuffer:!1},r=xp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RM(s)),this._blurMaterial=CM(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,Fu)}_sceneToCubeUV(e,n,i,r){const a=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,h=d.toneMapping;d.getClearColor(mp),d.toneMapping=Hi,d.autoClear=!1;const v=new S0({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),y=new fn(new Po,v);let x=!1;const f=e.background;f?f.isColor&&(v.color.copy(f),e.background=null,x=!0):(v.color.copy(mp),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):g===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const m=this._cubeSize;ya(r,g*m,u>2?m:0,m,m),d.setRenderTarget(r),x&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=h,d.autoClear=p,e.background=f}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new fn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Fu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=gp[(r-1)%gp.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new fn(this._lodPlanes[r],c),h=c.uniforms,v=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*or-1),x=s/y,f=isFinite(s)?1+Math.floor(d*x):or;f>or&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${or}`);const u=[];let g=0;for(let T=0;T<or;++T){const U=T/x,_=Math.exp(-U*U/2);u.push(_),T===0?g+=_:T<f&&(g+=2*_)}for(let T=0;T<u.length;T++)u[T]=u[T]/g;h.envMap.value=e.texture,h.samples.value=f,h.weights.value=u,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:m}=this;h.dTheta.value=y,h.mipInt.value=m-i;const S=this._sizeLods[r],C=3*S*(r>m-es?r-m+es:0),A=4*(this._cubeSize-S);ya(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(p,Fu)}}function RM(t){const e=[],n=[],i=[];let r=t;const s=t-es+1+pp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-es?l=pp[o-t+es-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,p=1+c,h=[d,d,p,d,p,p,d,d,p,p,d,p],v=6,y=6,x=3,f=2,u=1,g=new Float32Array(x*y*v),m=new Float32Array(f*y*v),S=new Float32Array(u*y*v);for(let A=0;A<v;A++){const T=A%3*2/3-1,U=A>2?0:-1,_=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];g.set(_,x*y*A),m.set(h,f*y*A);const E=[A,A,A,A,A,A];S.set(E,u*y*A)}const C=new bn;C.setAttribute("position",new Vn(g,x)),C.setAttribute("uv",new Vn(m,f)),C.setAttribute("faceIndex",new Vn(S,u)),e.push(C),r>es&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xp(t,e,n){const i=new _r(t,e,n);return i.texture.mapping=Ll,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function CM(t,e,n){const i=new Float32Array(or),r=new N(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:or,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function yp(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Sp(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Qd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function bM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===zc||l===Hc,d=l===vs||l===xs;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let p=e.get(a);return n===null&&(n=new vp(t)),p=c?n.fromEquirectangular(a,p):n.fromCubemap(a,p),e.set(a,p),p.texture}else{if(e.has(a))return e.get(a).texture;{const p=a.image;if(c&&p&&p.height>0||d&&p&&r(p)){n===null&&(n=new vp(t));const h=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function LM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PM(t,e,n,i){const r={},s=new WeakMap;function o(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);for(const y in h.morphAttributes){const x=h.morphAttributes[y];for(let f=0,u=x.length;f<u;f++)e.remove(x[f])}h.removeEventListener("dispose",o),delete r[h.id];const v=s.get(h);v&&(e.remove(v),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(p,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const y in h)e.update(h[y],t.ARRAY_BUFFER);const v=p.morphAttributes;for(const y in v){const x=v[y];for(let f=0,u=x.length;f<u;f++)e.update(x[f],t.ARRAY_BUFFER)}}function c(p){const h=[],v=p.index,y=p.attributes.position;let x=0;if(v!==null){const g=v.array;x=v.version;for(let m=0,S=g.length;m<S;m+=3){const C=g[m+0],A=g[m+1],T=g[m+2];h.push(C,A,A,T,T,C)}}else if(y!==void 0){const g=y.array;x=y.version;for(let m=0,S=g.length/3-1;m<S;m+=3){const C=m+0,A=m+1,T=m+2;h.push(C,A,A,T,T,C)}}else return;const f=new(h0(h)?M0:_0)(h,1);f.version=x;const u=s.get(p);u&&e.remove(u),s.set(p,f)}function d(p){const h=s.get(p);if(h){const v=p.index;v!==null&&h.version<v.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:d}}function UM(t,e,n,i){const r=i.isWebGL2;let s;function o(v){s=v}let a,l;function c(v){a=v.type,l=v.bytesPerElement}function d(v,y){t.drawElements(s,y,a,v*l),n.update(y,s,1)}function p(v,y,x){if(x===0)return;let f,u;if(r)f=t,u="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[u](s,y,a,v*l,x),n.update(y,s,x)}function h(v,y,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<x;u++)this.render(v[u]/l,y[u]);else{f.multiDrawElementsWEBGL(s,y,0,a,v,0,x);let u=0;for(let g=0;g<x;g++)u+=y[g];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=p,this.renderMultiDraw=h}function DM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function IM(t,e){return t[0]-e[0]}function NM(t,e){return Math.abs(e[1])-Math.abs(t[1])}function FM(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,p){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=y!==void 0?y.length:0;let f=s.get(d);if(f===void 0||f.count!==x){let G=function(){re.dispose(),s.delete(d),d.removeEventListener("dispose",G)};var v=G;f!==void 0&&f.texture.dispose();const m=d.morphAttributes.position!==void 0,S=d.morphAttributes.normal!==void 0,C=d.morphAttributes.color!==void 0,A=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let _=0;m===!0&&(_=1),S===!0&&(_=2),C===!0&&(_=3);let E=d.attributes.position.count*_,z=1;E>e.maxTextureSize&&(z=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const Y=new Float32Array(E*z*4*x),re=new g0(Y,E,z,x);re.type=Pi,re.needsUpdate=!0;const I=_*4;for(let q=0;q<x;q++){const Q=A[q],P=T[q],O=U[q],W=E*z*4*q;for(let K=0;K<Q.count;K++){const Z=K*I;m===!0&&(o.fromBufferAttribute(Q,K),Y[W+Z+0]=o.x,Y[W+Z+1]=o.y,Y[W+Z+2]=o.z,Y[W+Z+3]=0),S===!0&&(o.fromBufferAttribute(P,K),Y[W+Z+4]=o.x,Y[W+Z+5]=o.y,Y[W+Z+6]=o.z,Y[W+Z+7]=0),C===!0&&(o.fromBufferAttribute(O,K),Y[W+Z+8]=o.x,Y[W+Z+9]=o.y,Y[W+Z+10]=o.z,Y[W+Z+11]=O.itemSize===4?o.w:1)}}f={count:x,texture:re,size:new We(E,z)},s.set(d,f),d.addEventListener("dispose",G)}let u=0;for(let m=0;m<h.length;m++)u+=h[m];const g=d.morphTargetsRelative?1:1-u;p.getUniforms().setValue(t,"morphTargetBaseInfluence",g),p.getUniforms().setValue(t,"morphTargetInfluences",h),p.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),p.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}else{const y=h===void 0?0:h.length;let x=i[d.id];if(x===void 0||x.length!==y){x=[];for(let S=0;S<y;S++)x[S]=[S,0];i[d.id]=x}for(let S=0;S<y;S++){const C=x[S];C[0]=S,C[1]=h[S]}x.sort(NM);for(let S=0;S<8;S++)S<y&&x[S][1]?(a[S][0]=x[S][0],a[S][1]=x[S][1]):(a[S][0]=Number.MAX_SAFE_INTEGER,a[S][1]=0);a.sort(IM);const f=d.morphAttributes.position,u=d.morphAttributes.normal;let g=0;for(let S=0;S<8;S++){const C=a[S],A=C[0],T=C[1];A!==Number.MAX_SAFE_INTEGER&&T?(f&&d.getAttribute("morphTarget"+S)!==f[A]&&d.setAttribute("morphTarget"+S,f[A]),u&&d.getAttribute("morphNormal"+S)!==u[A]&&d.setAttribute("morphNormal"+S,u[A]),r[S]=T,g+=T):(f&&d.hasAttribute("morphTarget"+S)===!0&&d.deleteAttribute("morphTarget"+S),u&&d.hasAttribute("morphNormal"+S)===!0&&d.deleteAttribute("morphNormal"+S),r[S]=0)}const m=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(t,"morphTargetBaseInfluence",m),p.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function OM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,p=e.get(l,d);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class R0 extends mn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:hr,d!==hr&&d!==ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===hr&&(i=Li),i===void 0&&d===ys&&(i=fr),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:qt,this.minFilter=l!==void 0?l:qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const C0=new mn,b0=new R0(1,1);b0.compareFunction=f0;const L0=new g0,P0=new SS,U0=new A0,_p=[],Mp=[],Ep=new Float32Array(16),wp=new Float32Array(9),Ap=new Float32Array(4);function Ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_p[r];if(s===void 0&&(s=new Float32Array(r),_p[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Et(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Il(t,e){let n=Mp[e];n===void 0&&(n=new Int32Array(e),Mp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function kM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function BM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function zM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Et(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function HM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function VM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Ap.set(i),t.uniformMatrix2fv(this.addr,!1,Ap),wt(n,i)}}function GM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;wp.set(i),t.uniformMatrix3fv(this.addr,!1,wp),wt(n,i)}}function WM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Et(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(Et(n,i))return;Ep.set(i),t.uniformMatrix4fv(this.addr,!1,Ep),wt(n,i)}}function jM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function XM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function qM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function QM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function YM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function KM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Et(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function JM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Et(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function ZM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Et(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function $M(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?b0:C0;n.setTexture2D(e||s,r)}function eE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||P0,r)}function tE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||U0,r)}function nE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||L0,r)}function iE(t){switch(t){case 5126:return kM;case 35664:return BM;case 35665:return zM;case 35666:return HM;case 35674:return VM;case 35675:return GM;case 35676:return WM;case 5124:case 35670:return jM;case 35667:case 35671:return XM;case 35668:case 35672:return qM;case 35669:case 35673:return QM;case 5125:return YM;case 36294:return KM;case 36295:return JM;case 36296:return ZM;case 35678:case 36198:case 36298:case 36306:case 35682:return $M;case 35679:case 36299:case 36307:return eE;case 35680:case 36300:case 36308:case 36293:return tE;case 36289:case 36303:case 36311:case 36292:return nE}}function rE(t,e){t.uniform1fv(this.addr,e)}function sE(t,e){const n=Ts(e,this.size,2);t.uniform2fv(this.addr,n)}function oE(t,e){const n=Ts(e,this.size,3);t.uniform3fv(this.addr,n)}function aE(t,e){const n=Ts(e,this.size,4);t.uniform4fv(this.addr,n)}function lE(t,e){const n=Ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function uE(t,e){const n=Ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function cE(t,e){const n=Ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function dE(t,e){t.uniform1iv(this.addr,e)}function fE(t,e){t.uniform2iv(this.addr,e)}function hE(t,e){t.uniform3iv(this.addr,e)}function pE(t,e){t.uniform4iv(this.addr,e)}function mE(t,e){t.uniform1uiv(this.addr,e)}function gE(t,e){t.uniform2uiv(this.addr,e)}function vE(t,e){t.uniform3uiv(this.addr,e)}function xE(t,e){t.uniform4uiv(this.addr,e)}function yE(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||C0,s[o])}function SE(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||P0,s[o])}function _E(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||U0,s[o])}function ME(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);Et(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||L0,s[o])}function EE(t){switch(t){case 5126:return rE;case 35664:return sE;case 35665:return oE;case 35666:return aE;case 35674:return lE;case 35675:return uE;case 35676:return cE;case 5124:case 35670:return dE;case 35667:case 35671:return fE;case 35668:case 35672:return hE;case 35669:case 35673:return pE;case 5125:return mE;case 36294:return gE;case 36295:return vE;case 36296:return xE;case 35678:case 36198:case 36298:case 36306:case 35682:return yE;case 35679:case 36299:case 36307:return SE;case 35680:case 36300:case 36308:case 36293:return _E;case 36289:case 36303:case 36311:case 36292:return ME}}class wE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=iE(n.type)}}class AE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=EE(n.type)}}class TE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function Tp(t,e){t.seq.push(e),t.map[e.id]=e}function RE(t,e,n){const i=t.name,r=i.length;for(zu.lastIndex=0;;){const s=zu.exec(i),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Tp(n,c===void 0?new wE(a,t,e):new AE(a,t,e));break}else{let p=n.map[a];p===void 0&&(p=new TE(a),Tp(n,p)),n=p}}}class Fa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);RE(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Rp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const CE=37297;let bE=0;function LE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function PE(t){const e=Je.getPrimaries(Je.workingColorSpace),n=Je.getPrimaries(t);let i;switch(e===n?i="":e===cl&&n===ul?i="LinearDisplayP3ToLinearSRGB":e===ul&&n===cl&&(i="LinearSRGBToLinearDisplayP3"),t){case mi:case Pl:return[i,"LinearTransferOETF"];case Pt:case jd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Cp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+LE(t.getShaderSource(e),o)}else return r}function UE(t,e){const n=PE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function DE(t,e){let n;switch(e){case Gy:n="Linear";break;case Wy:n="Reinhard";break;case jy:n="OptimizedCineon";break;case Xy:n="ACESFilmic";break;case Qy:n="AgX";break;case qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function IE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ts).join(`
`)}function NE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ts).join(`
`)}function FE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function OE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ts(t){return t!==""}function bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const kE=/^[ \t]*#include +<([\w\d./]+)>/gm;function qc(t){return t.replace(kE,zE)}const BE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zE(t,e){let n=Ne[e];if(n===void 0){const i=BE.get(e);if(i!==void 0)n=Ne[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qc(n)}const HE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(t){return t.replace(HE,VE)}function VE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Up(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function GE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===e0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function WE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Ll:e="ENVMAP_TYPE_CUBE_UV";break}return e}function jE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function XE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case t0:e="ENVMAP_BLENDING_MULTIPLY";break;case Hy:e="ENVMAP_BLENDING_MIX";break;case Vy:e="ENVMAP_BLENDING_ADD";break}return e}function qE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QE(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=GE(n),c=WE(n),d=jE(n),p=XE(n),h=qE(n),v=n.isWebGL2?"":IE(n),y=NE(n),x=FE(s),f=r.createProgram();let u,g,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ts).join(`
`),u.length>0&&(u+=`
`),g=[v,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ts).join(`
`),g.length>0&&(g+=`
`)):(u=[Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ts).join(`
`),g=[v,Up(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Ne.tonemapping_pars_fragment:"",n.toneMapping!==Hi?DE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ne.colorspace_pars_fragment,UE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ts).join(`
`)),o=qc(o),o=bp(o,n),o=Lp(o,n),a=qc(a),a=bp(a,n),a=Lp(a,n),o=Pp(o),a=Pp(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,u=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,g=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=m+u+o,C=m+g+a,A=Rp(r,r.VERTEX_SHADER,S),T=Rp(r,r.FRAGMENT_SHADER,C);r.attachShader(f,A),r.attachShader(f,T),n.index0AttributeName!==void 0?r.bindAttribLocation(f,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(f,0,"position"),r.linkProgram(f);function U(Y){if(t.debug.checkShaderErrors){const re=r.getProgramInfoLog(f).trim(),I=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(T).trim();let q=!0,Q=!0;if(r.getProgramParameter(f,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,f,A,T);else{const P=Cp(r,A,"vertex"),O=Cp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(f,r.VALIDATE_STATUS)+`

Program Info Log: `+re+`
`+P+`
`+O)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(I===""||G==="")&&(Q=!1);Q&&(Y.diagnostics={runnable:q,programLog:re,vertexShader:{log:I,prefix:u},fragmentShader:{log:G,prefix:g}})}r.deleteShader(A),r.deleteShader(T),_=new Fa(r,f),E=OE(r,f)}let _;this.getUniforms=function(){return _===void 0&&U(this),_};let E;this.getAttributes=function(){return E===void 0&&U(this),E};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(f,CE)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(f),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bE++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=T,this}let YE=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new JE(e),n.set(e,i)),i}}class JE{constructor(e){this.id=YE++,this.code=e,this.usedTimes=0}}function ZE(t,e,n,i,r,s,o){const a=new x0,l=new KE,c=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,h=r.vertexTextures;let v=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return _===0?"uv":`uv${_}`}function f(_,E,z,Y,re){const I=Y.fog,G=re.geometry,q=_.isMeshStandardMaterial?Y.environment:null,Q=(_.isMeshStandardMaterial?n:e).get(_.envMap||q),P=Q&&Q.mapping===Ll?Q.image.height:null,O=y[_.type];_.precision!==null&&(v=r.getMaxPrecision(_.precision),v!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",v,"instead."));const W=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,K=W!==void 0?W.length:0;let Z=0;G.morphAttributes.position!==void 0&&(Z=1),G.morphAttributes.normal!==void 0&&(Z=2),G.morphAttributes.color!==void 0&&(Z=3);let X,J,ue,he;if(O){const Gt=qn[O];X=Gt.vertexShader,J=Gt.fragmentShader}else X=_.vertexShader,J=_.fragmentShader,l.update(_),ue=l.getVertexShaderID(_),he=l.getFragmentShaderID(_);const ge=t.getRenderTarget(),Pe=re.isInstancedMesh===!0,De=re.isBatchedMesh===!0,Ae=!!_.map,je=!!_.matcap,k=!!Q,Vt=!!_.aoMap,_e=!!_.lightMap,be=!!_.bumpMap,ve=!!_.normalMap,at=!!_.displacementMap,Fe=!!_.emissiveMap,R=!!_.metalnessMap,M=!!_.roughnessMap,H=_.anisotropy>0,ne=_.clearcoat>0,ee=_.iridescence>0,ie=_.sheen>0,xe=_.transmission>0,ce=H&&!!_.anisotropyMap,pe=ne&&!!_.clearcoatMap,we=ne&&!!_.clearcoatNormalMap,Oe=ne&&!!_.clearcoatRoughnessMap,$=ee&&!!_.iridescenceMap,Ke=ee&&!!_.iridescenceThicknessMap,Ve=ie&&!!_.sheenColorMap,Ce=ie&&!!_.sheenRoughnessMap,Se=!!_.specularMap,me=!!_.specularColorMap,Ie=!!_.specularIntensityMap,Qe=xe&&!!_.transmissionMap,ht=xe&&!!_.thicknessMap,Be=!!_.gradientMap,se=!!_.alphaMap,L=_.alphaTest>0,ae=!!_.alphaHash,le=!!_.extensions,Te=!!G.attributes.uv1,Me=!!G.attributes.uv2,Ze=!!G.attributes.uv3;let $e=Hi;return _.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&($e=t.toneMapping),{isWebGL2:d,shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:J,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:he,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:v,batching:De,instancing:Pe,instancingColor:Pe&&re.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:ge===null?t.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:mi,map:Ae,matcap:je,envMap:k,envMapMode:k&&Q.mapping,envMapCubeUVHeight:P,aoMap:Vt,lightMap:_e,bumpMap:be,normalMap:ve,displacementMap:h&&at,emissiveMap:Fe,normalMapObjectSpace:ve&&_.normalMapType===oS,normalMapTangentSpace:ve&&_.normalMapType===d0,metalnessMap:R,roughnessMap:M,anisotropy:H,anisotropyMap:ce,clearcoat:ne,clearcoatMap:pe,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,iridescence:ee,iridescenceMap:$,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:me,specularIntensityMap:Ie,transmission:xe,transmissionMap:Qe,thicknessMap:ht,gradientMap:Be,opaque:_.transparent===!1&&_.blending===ls,alphaMap:se,alphaTest:L,alphaHash:ae,combine:_.combine,mapUv:Ae&&x(_.map.channel),aoMapUv:Vt&&x(_.aoMap.channel),lightMapUv:_e&&x(_.lightMap.channel),bumpMapUv:be&&x(_.bumpMap.channel),normalMapUv:ve&&x(_.normalMap.channel),displacementMapUv:at&&x(_.displacementMap.channel),emissiveMapUv:Fe&&x(_.emissiveMap.channel),metalnessMapUv:R&&x(_.metalnessMap.channel),roughnessMapUv:M&&x(_.roughnessMap.channel),anisotropyMapUv:ce&&x(_.anisotropyMap.channel),clearcoatMapUv:pe&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:we&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&x(_.sheenRoughnessMap.channel),specularMapUv:Se&&x(_.specularMap.channel),specularColorMapUv:me&&x(_.specularColorMap.channel),specularIntensityMapUv:Ie&&x(_.specularIntensityMap.channel),transmissionMapUv:Qe&&x(_.transmissionMap.channel),thicknessMapUv:ht&&x(_.thicknessMap.channel),alphaMapUv:se&&x(_.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ve||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:Te,vertexUv2s:Me,vertexUv3s:Ze,pointsUvs:re.isPoints===!0&&!!G.attributes.uv&&(Ae||se),fog:!!I,useFog:_.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:re.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Ae&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===oi,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:le&&_.extensions.derivatives===!0,extensionFragDepth:le&&_.extensions.fragDepth===!0,extensionDrawBuffers:le&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&_.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()}}function u(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)E.push(z),E.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(g(E,_),m(E,_),E.push(t.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function g(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function m(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),_.push(a.mask)}function S(_){const E=y[_.type];let z;if(E){const Y=qn[E];z=DS.clone(Y.uniforms)}else z=_.uniforms;return z}function C(_,E){let z;for(let Y=0,re=c.length;Y<re;Y++){const I=c[Y];if(I.cacheKey===E){z=I,++z.usedTimes;break}}return z===void 0&&(z=new QE(t,E,_,s),c.push(z)),z}function A(_){if(--_.usedTimes===0){const E=c.indexOf(_);c[E]=c[c.length-1],c.pop(),_.destroy()}}function T(_){l.remove(_)}function U(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:U}}function $E(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ew(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Dp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(p,h,v,y,x,f){let u=t[e];return u===void 0?(u={id:p.id,object:p,geometry:h,material:v,groupOrder:y,renderOrder:p.renderOrder,z:x,group:f},t[e]=u):(u.id=p.id,u.object=p,u.geometry=h,u.material=v,u.groupOrder=y,u.renderOrder=p.renderOrder,u.z=x,u.group=f),e++,u}function a(p,h,v,y,x,f){const u=o(p,h,v,y,x,f);v.transmission>0?i.push(u):v.transparent===!0?r.push(u):n.push(u)}function l(p,h,v,y,x,f){const u=o(p,h,v,y,x,f);v.transmission>0?i.unshift(u):v.transparent===!0?r.unshift(u):n.unshift(u)}function c(p,h){n.length>1&&n.sort(p||ew),i.length>1&&i.sort(h||Dp),r.length>1&&r.sort(h||Dp)}function d(){for(let p=e,h=t.length;p<h;p++){const v=t[p];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function tw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ip,t.set(i,[o])):r>=s.length?(o=new Ip,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function nw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new qe};break;case"SpotLight":n={position:new N,direction:new N,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function iw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let rw=0;function sw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ow(t,e){const n=new nw,i=iw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new N);const s=new N,o=new xt,a=new xt;function l(d,p){let h=0,v=0,y=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let x=0,f=0,u=0,g=0,m=0,S=0,C=0,A=0,T=0,U=0,_=0;d.sort(sw);const E=p===!0?Math.PI:1;for(let Y=0,re=d.length;Y<re;Y++){const I=d[Y],G=I.color,q=I.intensity,Q=I.distance,P=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=G.r*q*E,v+=G.g*q*E,y+=G.b*q*E;else if(I.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(I.sh.coefficients[O],q);_++}else if(I.isDirectionalLight){const O=n.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),I.castShadow){const W=I.shadow,K=i.get(I);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.directionalShadow[x]=K,r.directionalShadowMap[x]=P,r.directionalShadowMatrix[x]=I.shadow.matrix,S++}r.directional[x]=O,x++}else if(I.isSpotLight){const O=n.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(G).multiplyScalar(q*E),O.distance=Q,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,r.spot[u]=O;const W=I.shadow;if(I.map&&(r.spotLightMap[T]=I.map,T++,W.updateMatrices(I),I.castShadow&&U++),r.spotLightMatrix[u]=W.matrix,I.castShadow){const K=i.get(I);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.spotShadow[u]=K,r.spotShadowMap[u]=P,A++}u++}else if(I.isRectAreaLight){const O=n.get(I);O.color.copy(G).multiplyScalar(q),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),r.rectArea[g]=O,g++}else if(I.isPointLight){const O=n.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity*E),O.distance=I.distance,O.decay=I.decay,I.castShadow){const W=I.shadow,K=i.get(I);K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,r.pointShadow[f]=K,r.pointShadowMap[f]=P,r.pointShadowMatrix[f]=I.shadow.matrix,C++}r.point[f]=O,f++}else if(I.isHemisphereLight){const O=n.get(I);O.skyColor.copy(I.color).multiplyScalar(q*E),O.groundColor.copy(I.groundColor).multiplyScalar(q*E),r.hemi[m]=O,m++}}g>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=v,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==x||z.pointLength!==f||z.spotLength!==u||z.rectAreaLength!==g||z.hemiLength!==m||z.numDirectionalShadows!==S||z.numPointShadows!==C||z.numSpotShadows!==A||z.numSpotMaps!==T||z.numLightProbes!==_)&&(r.directional.length=x,r.spot.length=u,r.rectArea.length=g,r.point.length=f,r.hemi.length=m,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+T-U,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=_,z.directionalLength=x,z.pointLength=f,z.spotLength=u,z.rectAreaLength=g,z.hemiLength=m,z.numDirectionalShadows=S,z.numPointShadows=C,z.numSpotShadows=A,z.numSpotMaps=T,z.numLightProbes=_,r.version=rw++)}function c(d,p){let h=0,v=0,y=0,x=0,f=0;const u=p.matrixWorldInverse;for(let g=0,m=d.length;g<m;g++){const S=d[g];if(S.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),h++}else if(S.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(u),y++}else if(S.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),a.identity(),o.copy(S.matrixWorld),o.premultiply(u),a.extractRotation(o),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const C=r.point[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(u),v++}else if(S.isHemisphereLight){const C=r.hemi[f];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(u),f++}}}return{setup:l,setupView:c,state:r}}function Np(t,e){const n=new ow(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(p){i.push(p)}function a(p){r.push(p)}function l(p){n.setup(i,p)}function c(p){n.setupView(i,p)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function aw(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Np(t,e),n.set(s,[l])):o>=a.length?(l=new Np(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class lw extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uw extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fw(t,e,n){let i=new Xd;const r=new We,s=new We,o=new ot,a=new lw({depthPacking:sS}),l=new uw,c={},d=n.maxTextureSize,p={[ji]:on,[on]:ji,[oi]:oi},h=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:cw,fragmentShader:dw}),v=h.clone();v.defines.HORIZONTAL_PASS=1;const y=new bn;y.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new fn(y,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=e0;let u=this.type;this.render=function(A,T,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||A.length===0)return;const _=t.getRenderTarget(),E=t.getActiveCubeFace(),z=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(zi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const re=u!==ii&&this.type===ii,I=u===ii&&this.type!==ii;for(let G=0,q=A.length;G<q;G++){const Q=A[G],P=Q.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);const O=P.getFrameExtents();if(r.multiply(O),s.copy(P.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,P.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,P.mapSize.y=s.y)),P.map===null||re===!0||I===!0){const K=this.type!==ii?{minFilter:qt,magFilter:qt}:{};P.map!==null&&P.map.dispose(),P.map=new _r(r.x,r.y,K),P.map.texture.name=Q.name+".shadowMap",P.camera.updateProjectionMatrix()}t.setRenderTarget(P.map),t.clear();const W=P.getViewportCount();for(let K=0;K<W;K++){const Z=P.getViewport(K);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),Y.viewport(o),P.updateMatrices(Q,K),i=P.getFrustum(),S(T,U,P.camera,Q,this.type)}P.isPointLightShadow!==!0&&this.type===ii&&g(P,U),P.needsUpdate=!1}u=this.type,f.needsUpdate=!1,t.setRenderTarget(_,E,z)};function g(A,T){const U=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,v.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,v.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new _r(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,U,h,x,null),v.uniforms.shadow_pass.value=A.mapPass.texture,v.uniforms.resolution.value=A.mapSize,v.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,U,v,x,null)}function m(A,T,U,_){let E=null;const z=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(z!==void 0)E=z;else if(E=U.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const Y=E.uuid,re=T.uuid;let I=c[Y];I===void 0&&(I={},c[Y]=I);let G=I[re];G===void 0&&(G=E.clone(),I[re]=G,T.addEventListener("dispose",C)),E=G}if(E.visible=T.visible,E.wireframe=T.wireframe,_===ii?E.side=T.shadowSide!==null?T.shadowSide:T.side:E.side=T.shadowSide!==null?T.shadowSide:p[T.side],E.alphaMap=T.alphaMap,E.alphaTest=T.alphaTest,E.map=T.map,E.clipShadows=T.clipShadows,E.clippingPlanes=T.clippingPlanes,E.clipIntersection=T.clipIntersection,E.displacementMap=T.displacementMap,E.displacementScale=T.displacementScale,E.displacementBias=T.displacementBias,E.wireframeLinewidth=T.wireframeLinewidth,E.linewidth=T.linewidth,U.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Y=t.properties.get(E);Y.light=U}return E}function S(A,T,U,_,E){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===ii)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);const re=e.update(A),I=A.material;if(Array.isArray(I)){const G=re.groups;for(let q=0,Q=G.length;q<Q;q++){const P=G[q],O=I[P.materialIndex];if(O&&O.visible){const W=m(A,O,_,E);A.onBeforeShadow(t,A,T,U,re,W,P),t.renderBufferDirect(U,null,re,W,A,P),A.onAfterShadow(t,A,T,U,re,W,P)}}}else if(I.visible){const G=m(A,I,_,E);A.onBeforeShadow(t,A,T,U,re,G,null),t.renderBufferDirect(U,null,re,G,A,null),A.onAfterShadow(t,A,T,U,re,G,null)}}const Y=A.children;for(let re=0,I=Y.length;re<I;re++)S(Y[re],T,U,_,E)}function C(A){A.target.removeEventListener("dispose",C);for(const U in c){const _=c[U],E=A.target.uuid;E in _&&(_[E].dispose(),delete _[E])}}}function hw(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ae=new ot;let le=null;const Te=new ot(0,0,0,0);return{setMask:function(Me){le!==Me&&!L&&(t.colorMask(Me,Me,Me,Me),le=Me)},setLocked:function(Me){L=Me},setClear:function(Me,Ze,$e,At,Gt){Gt===!0&&(Me*=At,Ze*=At,$e*=At),ae.set(Me,Ze,$e,At),Te.equals(ae)===!1&&(t.clearColor(Me,Ze,$e,At),Te.copy(ae))},reset:function(){L=!1,le=null,Te.set(-1,0,0,0)}}}function s(){let L=!1,ae=null,le=null,Te=null;return{setTest:function(Me){Me?De(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Me){ae!==Me&&!L&&(t.depthMask(Me),ae=Me)},setFunc:function(Me){if(le!==Me){switch(Me){case Iy:t.depthFunc(t.NEVER);break;case Ny:t.depthFunc(t.ALWAYS);break;case Fy:t.depthFunc(t.LESS);break;case al:t.depthFunc(t.LEQUAL);break;case Oy:t.depthFunc(t.EQUAL);break;case ky:t.depthFunc(t.GEQUAL);break;case By:t.depthFunc(t.GREATER);break;case zy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=Me}},setLocked:function(Me){L=Me},setClear:function(Me){Te!==Me&&(t.clearDepth(Me),Te=Me)},reset:function(){L=!1,ae=null,le=null,Te=null}}}function o(){let L=!1,ae=null,le=null,Te=null,Me=null,Ze=null,$e=null,At=null,Gt=null;return{setTest:function(et){L||(et?De(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(et){ae!==et&&!L&&(t.stencilMask(et),ae=et)},setFunc:function(et,Wt,Wn){(le!==et||Te!==Wt||Me!==Wn)&&(t.stencilFunc(et,Wt,Wn),le=et,Te=Wt,Me=Wn)},setOp:function(et,Wt,Wn){(Ze!==et||$e!==Wt||At!==Wn)&&(t.stencilOp(et,Wt,Wn),Ze=et,$e=Wt,At=Wn)},setLocked:function(et){L=et},setClear:function(et){Gt!==et&&(t.clearStencil(et),Gt=et)},reset:function(){L=!1,ae=null,le=null,Te=null,Me=null,Ze=null,$e=null,At=null,Gt=null}}}const a=new r,l=new s,c=new o,d=new WeakMap,p=new WeakMap;let h={},v={},y=new WeakMap,x=[],f=null,u=!1,g=null,m=null,S=null,C=null,A=null,T=null,U=null,_=new qe(0,0,0),E=0,z=!1,Y=null,re=null,I=null,G=null,q=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,O=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(W)[1]),P=O>=1):W.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),P=O>=2);let K=null,Z={};const X=t.getParameter(t.SCISSOR_BOX),J=t.getParameter(t.VIEWPORT),ue=new ot().fromArray(X),he=new ot().fromArray(J);function ge(L,ae,le,Te){const Me=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(L,Ze),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let $e=0;$e<le;$e++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ae,0,t.RGBA,1,1,Te,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ae+$e,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Ze}const Pe={};Pe[t.TEXTURE_2D]=ge(t.TEXTURE_2D,t.TEXTURE_2D,1),Pe[t.TEXTURE_CUBE_MAP]=ge(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[t.TEXTURE_2D_ARRAY]=ge(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Pe[t.TEXTURE_3D]=ge(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),De(t.DEPTH_TEST),l.setFunc(al),Fe(!1),R(gh),De(t.CULL_FACE),ve(zi);function De(L){h[L]!==!0&&(t.enable(L),h[L]=!0)}function Ae(L){h[L]!==!1&&(t.disable(L),h[L]=!1)}function je(L,ae){return v[L]!==ae?(t.bindFramebuffer(L,ae),v[L]=ae,i&&(L===t.DRAW_FRAMEBUFFER&&(v[t.FRAMEBUFFER]=ae),L===t.FRAMEBUFFER&&(v[t.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(L,ae){let le=x,Te=!1;if(L)if(le=y.get(ae),le===void 0&&(le=[],y.set(ae,le)),L.isWebGLMultipleRenderTargets){const Me=L.texture;if(le.length!==Me.length||le[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,$e=Me.length;Ze<$e;Ze++)le[Ze]=t.COLOR_ATTACHMENT0+Ze;le.length=Me.length,Te=!0}}else le[0]!==t.COLOR_ATTACHMENT0&&(le[0]=t.COLOR_ATTACHMENT0,Te=!0);else le[0]!==t.BACK&&(le[0]=t.BACK,Te=!0);Te&&(n.isWebGL2?t.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function Vt(L){return f!==L?(t.useProgram(L),f=L,!0):!1}const _e={[sr]:t.FUNC_ADD,[yy]:t.FUNC_SUBTRACT,[Sy]:t.FUNC_REVERSE_SUBTRACT};if(i)_e[Sh]=t.MIN,_e[_h]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(_e[Sh]=L.MIN_EXT,_e[_h]=L.MAX_EXT)}const be={[_y]:t.ZERO,[My]:t.ONE,[Ey]:t.SRC_COLOR,[kc]:t.SRC_ALPHA,[by]:t.SRC_ALPHA_SATURATE,[Ry]:t.DST_COLOR,[Ay]:t.DST_ALPHA,[wy]:t.ONE_MINUS_SRC_COLOR,[Bc]:t.ONE_MINUS_SRC_ALPHA,[Cy]:t.ONE_MINUS_DST_COLOR,[Ty]:t.ONE_MINUS_DST_ALPHA,[Ly]:t.CONSTANT_COLOR,[Py]:t.ONE_MINUS_CONSTANT_COLOR,[Uy]:t.CONSTANT_ALPHA,[Dy]:t.ONE_MINUS_CONSTANT_ALPHA};function ve(L,ae,le,Te,Me,Ze,$e,At,Gt,et){if(L===zi){u===!0&&(Ae(t.BLEND),u=!1);return}if(u===!1&&(De(t.BLEND),u=!0),L!==xy){if(L!==g||et!==z){if((m!==sr||A!==sr)&&(t.blendEquation(t.FUNC_ADD),m=sr,A=sr),et)switch(L){case ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vh:t.blendFunc(t.ONE,t.ONE);break;case xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case xh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,C=null,T=null,U=null,_.set(0,0,0),E=0,g=L,z=et}return}Me=Me||ae,Ze=Ze||le,$e=$e||Te,(ae!==m||Me!==A)&&(t.blendEquationSeparate(_e[ae],_e[Me]),m=ae,A=Me),(le!==S||Te!==C||Ze!==T||$e!==U)&&(t.blendFuncSeparate(be[le],be[Te],be[Ze],be[$e]),S=le,C=Te,T=Ze,U=$e),(At.equals(_)===!1||Gt!==E)&&(t.blendColor(At.r,At.g,At.b,Gt),_.copy(At),E=Gt),g=L,z=!1}function at(L,ae){L.side===oi?Ae(t.CULL_FACE):De(t.CULL_FACE);let le=L.side===on;ae&&(le=!le),Fe(le),L.blending===ls&&L.transparent===!1?ve(zi):ve(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const Te=L.stencilWrite;c.setTest(Te),Te&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?De(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(L){Y!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),Y=L)}function R(L){L!==my?(De(t.CULL_FACE),L!==re&&(L===gh?t.cullFace(t.BACK):L===gy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),re=L}function M(L){L!==I&&(P&&t.lineWidth(L),I=L)}function H(L,ae,le){L?(De(t.POLYGON_OFFSET_FILL),(G!==ae||q!==le)&&(t.polygonOffset(ae,le),G=ae,q=le)):Ae(t.POLYGON_OFFSET_FILL)}function ne(L){L?De(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function ee(L){L===void 0&&(L=t.TEXTURE0+Q-1),K!==L&&(t.activeTexture(L),K=L)}function ie(L,ae,le){le===void 0&&(K===null?le=t.TEXTURE0+Q-1:le=K);let Te=Z[le];Te===void 0&&(Te={type:void 0,texture:void 0},Z[le]=Te),(Te.type!==L||Te.texture!==ae)&&(K!==le&&(t.activeTexture(le),K=le),t.bindTexture(L,ae||Pe[L]),Te.type=L,Te.texture=ae)}function xe(){const L=Z[K];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ce(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function we(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ke(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(L){ue.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),ue.copy(L))}function Qe(L){he.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),he.copy(L))}function ht(L,ae){let le=p.get(ae);le===void 0&&(le=new WeakMap,p.set(ae,le));let Te=le.get(L);Te===void 0&&(Te=t.getUniformBlockIndex(ae,L.name),le.set(L,Te))}function Be(L,ae){const Te=p.get(ae).get(L);d.get(ae)!==Te&&(t.uniformBlockBinding(ae,Te,L.__bindingPointIndex),d.set(ae,Te))}function se(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},K=null,Z={},v={},y=new WeakMap,x=[],f=null,u=!1,g=null,m=null,S=null,C=null,A=null,T=null,U=null,_=new qe(0,0,0),E=0,z=!1,Y=null,re=null,I=null,G=null,q=null,ue.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:De,disable:Ae,bindFramebuffer:je,drawBuffers:k,useProgram:Vt,setBlending:ve,setMaterial:at,setFlipSided:Fe,setCullFace:R,setLineWidth:M,setPolygonOffset:H,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:xe,compressedTexImage2D:ce,compressedTexImage3D:pe,texImage2D:Se,texImage3D:me,updateUBOMapping:ht,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:Ce,texSubImage2D:we,texSubImage3D:Oe,compressedTexSubImage2D:$,compressedTexSubImage3D:Ke,scissor:Ie,viewport:Qe,reset:se}}function pw(t,e,n,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const h=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,M){return v?new OffscreenCanvas(R,M):fl("canvas")}function x(R,M,H,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=M?Xc:Math.floor,xe=ie(ee*R.width),ce=ie(ee*R.height);p===void 0&&(p=y(xe,ce));const pe=H?y(xe,ce):p;return pe.width=xe,pe.height=ce,pe.getContext("2d").drawImage(R,0,0,xe,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+ce+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function f(R){return Jh(R.width)&&Jh(R.height)}function u(R){return a?!1:R.wrapS!==kn||R.wrapT!==kn||R.minFilter!==qt&&R.minFilter!==En}function g(R,M){return R.generateMipmaps&&M&&R.minFilter!==qt&&R.minFilter!==En}function m(R){t.generateMipmap(R)}function S(R,M,H,ne,ee=!1){if(a===!1)return M;if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=M;if(M===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),M===t.RGBA){const xe=ee?ll:Je.getTransfer(ne);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=xe===it?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function C(R,M,H){return g(R,H)===!0||R.isFramebufferTexture&&R.minFilter!==qt&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function A(R){return R===qt||R===Mh||R===du?t.NEAREST:t.LINEAR}function T(R){const M=R.target;M.removeEventListener("dispose",T),_(M),M.isVideoTexture&&d.delete(M)}function U(R){const M=R.target;M.removeEventListener("dispose",U),z(M)}function _(R){const M=i.get(R);if(M.__webglInit===void 0)return;const H=R.source,ne=h.get(H);if(ne){const ee=ne[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&E(R),Object.keys(ne).length===0&&h.delete(H)}i.remove(R)}function E(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const H=R.source,ne=h.get(H);delete ne[M.__cacheKey],o.memory.textures--}function z(R){const M=R.texture,H=i.get(R),ne=i.get(M);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(H.__webglFramebuffer[ee]))for(let ie=0;ie<H.__webglFramebuffer[ee].length;ie++)t.deleteFramebuffer(H.__webglFramebuffer[ee][ie]);else t.deleteFramebuffer(H.__webglFramebuffer[ee]);H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer[ee])}else{if(Array.isArray(H.__webglFramebuffer))for(let ee=0;ee<H.__webglFramebuffer.length;ee++)t.deleteFramebuffer(H.__webglFramebuffer[ee]);else t.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&t.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&t.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let ee=0;ee<H.__webglColorRenderbuffer.length;ee++)H.__webglColorRenderbuffer[ee]&&t.deleteRenderbuffer(H.__webglColorRenderbuffer[ee]);H.__webglDepthRenderbuffer&&t.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=M.length;ee<ie;ee++){const xe=i.get(M[ee]);xe.__webglTexture&&(t.deleteTexture(xe.__webglTexture),o.memory.textures--),i.remove(M[ee])}i.remove(M),i.remove(R)}let Y=0;function re(){Y=0}function I(){const R=Y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),Y+=1,R}function G(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function q(R,M){const H=i.get(R);if(R.isVideoTexture&&at(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(H,R,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function Q(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ue(H,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function P(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){ue(H,R,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function O(R,M){const H=i.get(R);if(R.version>0&&H.__version!==R.version){he(H,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const W={[Vc]:t.REPEAT,[kn]:t.CLAMP_TO_EDGE,[Gc]:t.MIRRORED_REPEAT},K={[qt]:t.NEAREST,[Mh]:t.NEAREST_MIPMAP_NEAREST,[du]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Yy]:t.LINEAR_MIPMAP_NEAREST,[_o]:t.LINEAR_MIPMAP_LINEAR},Z={[aS]:t.NEVER,[hS]:t.ALWAYS,[lS]:t.LESS,[f0]:t.LEQUAL,[uS]:t.EQUAL,[fS]:t.GEQUAL,[cS]:t.GREATER,[dS]:t.NOTEQUAL};function X(R,M,H){if(H?(t.texParameteri(R,t.TEXTURE_WRAP_S,W[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,W[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,W[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,K[M.minFilter])):(t.texParameteri(R,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(R,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==kn||M.wrapT!==kn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(R,t.TEXTURE_MAG_FILTER,A(M.magFilter)),t.texParameteri(R,t.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==qt&&M.minFilter!==En&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===qt||M.minFilter!==du&&M.minFilter!==_o||M.type===Pi&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Mo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function J(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",T));const ne=M.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const ie=G(M);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,H=!0),ee[ie].usedTimes++;const xe=ee[R.__cacheKey];xe!==void 0&&(ee[R.__cacheKey].usedTimes--,xe.usedTimes===0&&E(M)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return H}function ue(R,M,H){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const ee=J(R,M),ie=M.source;n.bindTexture(ne,R.__webglTexture,t.TEXTURE0+H);const xe=i.get(ie);if(ie.version!==xe.__version||ee===!0){n.activeTexture(t.TEXTURE0+H);const ce=Je.getPrimaries(Je.workingColorSpace),pe=M.colorSpace===wn?null:Je.getPrimaries(M.colorSpace),we=M.colorSpace===wn||ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=u(M)&&f(M.image)===!1;let $=x(M.image,Oe,!1,r.maxTextureSize);$=Fe(M,$);const Ke=f($)||a,Ve=s.convert(M.format,M.colorSpace);let Ce=s.convert(M.type),Se=S(M.internalFormat,Ve,Ce,M.colorSpace,M.isVideoTexture);X(ne,M,Ke);let me;const Ie=M.mipmaps,Qe=a&&M.isVideoTexture!==!0&&Se!==u0,ht=xe.__version===void 0||ee===!0,Be=C(M,$,Ke);if(M.isDepthTexture)Se=t.DEPTH_COMPONENT,a?M.type===Pi?Se=t.DEPTH_COMPONENT32F:M.type===Li?Se=t.DEPTH_COMPONENT24:M.type===fr?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:M.type===Pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===hr&&Se===t.DEPTH_COMPONENT&&M.type!==Wd&&M.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Li,Ce=s.convert(M.type)),M.format===ys&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,M.type!==fr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=fr,Ce=s.convert(M.type))),ht&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,Se,$.width,$.height):n.texImage2D(t.TEXTURE_2D,0,Se,$.width,$.height,0,Ve,Ce,null));else if(M.isDataTexture)if(Ie.length>0&&Ke){Qe&&ht&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ie[0].width,Ie[0].height);for(let se=0,L=Ie.length;se<L;se++)me=Ie[se],Qe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Ve,Ce,me.data):n.texImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,Ve,Ce,me.data);M.generateMipmaps=!1}else Qe?(ht&&n.texStorage2D(t.TEXTURE_2D,Be,Se,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,$.width,$.height,Ve,Ce,$.data)):n.texImage2D(t.TEXTURE_2D,0,Se,$.width,$.height,0,Ve,Ce,$.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Qe&&ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Se,Ie[0].width,Ie[0].height,$.depth);for(let se=0,L=Ie.length;se<L;se++)me=Ie[se],M.format!==Bn?Ve!==null?Qe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,$.depth,Ve,me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,$.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,$.depth,Ve,Ce,me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Se,me.width,me.height,$.depth,0,Ve,Ce,me.data)}else{Qe&&ht&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ie[0].width,Ie[0].height);for(let se=0,L=Ie.length;se<L;se++)me=Ie[se],M.format!==Bn?Ve!==null?Qe?n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Ve,me.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,Ve,Ce,me.data):n.texImage2D(t.TEXTURE_2D,se,Se,me.width,me.height,0,Ve,Ce,me.data)}else if(M.isDataArrayTexture)Qe?(ht&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Se,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,Ve,Ce,$.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,$.width,$.height,$.depth,0,Ve,Ce,$.data);else if(M.isData3DTexture)Qe?(ht&&n.texStorage3D(t.TEXTURE_3D,Be,Se,$.width,$.height,$.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,Ve,Ce,$.data)):n.texImage3D(t.TEXTURE_3D,0,Se,$.width,$.height,$.depth,0,Ve,Ce,$.data);else if(M.isFramebufferTexture){if(ht)if(Qe)n.texStorage2D(t.TEXTURE_2D,Be,Se,$.width,$.height);else{let se=$.width,L=$.height;for(let ae=0;ae<Be;ae++)n.texImage2D(t.TEXTURE_2D,ae,Se,se,L,0,Ve,Ce,null),se>>=1,L>>=1}}else if(Ie.length>0&&Ke){Qe&&ht&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ie[0].width,Ie[0].height);for(let se=0,L=Ie.length;se<L;se++)me=Ie[se],Qe?n.texSubImage2D(t.TEXTURE_2D,se,0,0,Ve,Ce,me):n.texImage2D(t.TEXTURE_2D,se,Se,Ve,Ce,me);M.generateMipmaps=!1}else Qe?(ht&&n.texStorage2D(t.TEXTURE_2D,Be,Se,$.width,$.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ce,$)):n.texImage2D(t.TEXTURE_2D,0,Se,Ve,Ce,$);g(M,Ke)&&m(ne),xe.__version=ie.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function he(R,M,H){if(M.image.length!==6)return;const ne=J(R,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){n.activeTexture(t.TEXTURE0+H);const xe=Je.getPrimaries(Je.workingColorSpace),ce=M.colorSpace===wn?null:Je.getPrimaries(M.colorSpace),pe=M.colorSpace===wn||xe===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const we=M.isCompressedTexture||M.image[0].isCompressedTexture,Oe=M.image[0]&&M.image[0].isDataTexture,$=[];for(let se=0;se<6;se++)!we&&!Oe?$[se]=x(M.image[se],!1,!0,r.maxCubemapSize):$[se]=Oe?M.image[se].image:M.image[se],$[se]=Fe(M,$[se]);const Ke=$[0],Ve=f(Ke)||a,Ce=s.convert(M.format,M.colorSpace),Se=s.convert(M.type),me=S(M.internalFormat,Ce,Se,M.colorSpace),Ie=a&&M.isVideoTexture!==!0,Qe=ie.__version===void 0||ne===!0;let ht=C(M,Ke,Ve);X(t.TEXTURE_CUBE_MAP,M,Ve);let Be;if(we){Ie&&Qe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,me,Ke.width,Ke.height);for(let se=0;se<6;se++){Be=$[se].mipmaps;for(let L=0;L<Be.length;L++){const ae=Be[L];M.format!==Bn?Ce!==null?Ie?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Ce,ae.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,me,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,0,0,ae.width,ae.height,Ce,Se,ae.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L,me,ae.width,ae.height,0,Ce,Se,ae.data)}}}else{Be=M.mipmaps,Ie&&Qe&&(Be.length>0&&ht++,n.texStorage2D(t.TEXTURE_CUBE_MAP,ht,me,$[0].width,$[0].height));for(let se=0;se<6;se++)if(Oe){Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,$[se].width,$[se].height,Ce,Se,$[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,$[se].width,$[se].height,0,Ce,Se,$[se].data);for(let L=0;L<Be.length;L++){const le=Be[L].image[se].image;Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,le.width,le.height,Ce,Se,le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,me,le.width,le.height,0,Ce,Se,le.data)}}else{Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,Se,$[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,me,Ce,Se,$[se]);for(let L=0;L<Be.length;L++){const ae=Be[L];Ie?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,0,0,Ce,Se,ae.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,L+1,me,Ce,Se,ae.image[se])}}}g(M,Ve)&&m(t.TEXTURE_CUBE_MAP),ie.__version=ee.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ge(R,M,H,ne,ee,ie){const xe=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),pe=S(H.internalFormat,xe,ce,H.colorSpace);if(!i.get(M).__hasExternalTextures){const Oe=Math.max(1,M.width>>ie),$=Math.max(1,M.height>>ie);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,ie,pe,Oe,$,M.depth,0,xe,ce,null):n.texImage2D(ee,ie,pe,Oe,$,0,xe,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,0,be(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ee,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Pe(R,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer&&!M.stencilBuffer){let ne=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(H||ve(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===Pi?ne=t.DEPTH_COMPONENT32F:ee.type===Li&&(ne=t.DEPTH_COMPONENT24));const ie=be(M);ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ie,ne,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ie,ne,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,R)}else if(M.depthBuffer&&M.stencilBuffer){const ne=be(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,R)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],xe=s.convert(ie.format,ie.colorSpace),ce=s.convert(ie.type),pe=S(ie.internalFormat,xe,ce,ie.colorSpace),we=be(M);H&&ve(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,we,pe,M.width,M.height):ve(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,we,pe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,pe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function De(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,ee=be(M);if(M.depthTexture.format===hr)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===ys)ve(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ae(R){const M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");De(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=t.createRenderbuffer(),Pe(M.__webglDepthbuffer[ne],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),Pe(M.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(R,M,H){const ne=i.get(R);M!==void 0&&ge(ne.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ae(R)}function k(R){const M=R.texture,H=i.get(R),ne=i.get(M);R.addEventListener("dispose",U),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,xe=f(R)||a;if(ee){H.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ce]=[];for(let pe=0;pe<M.mipmaps.length;pe++)H.__webglFramebuffer[ce][pe]=t.createFramebuffer()}else H.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(a&&M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)H.__webglFramebuffer[ce]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(ie)if(r.drawBuffers){const ce=R.texture;for(let pe=0,we=ce.length;pe<we;pe++){const Oe=i.get(ce[pe]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ve(R)===!1){const ce=ie?M:[M];H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<ce.length;pe++){const we=ce[pe];H.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Oe=s.convert(we.format,we.colorSpace),$=s.convert(we.type),Ke=S(we.internalFormat,Oe,$,we.colorSpace,R.isXRRenderTarget===!0),Ve=be(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Ke,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),Pe(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),X(t.TEXTURE_CUBE_MAP,M,xe);for(let ce=0;ce<6;ce++)if(a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ge(H.__webglFramebuffer[ce][pe],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,pe);else ge(H.__webglFramebuffer[ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(M,xe)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ie){const ce=R.texture;for(let pe=0,we=ce.length;pe<we;pe++){const Oe=ce[pe],$=i.get(Oe);n.bindTexture(t.TEXTURE_2D,$.__webglTexture),X(t.TEXTURE_2D,Oe,xe),ge(H.__webglFramebuffer,R,Oe,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),g(Oe,xe)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ce,ne.__webglTexture),X(ce,M,xe),a&&M.mipmaps&&M.mipmaps.length>0)for(let pe=0;pe<M.mipmaps.length;pe++)ge(H.__webglFramebuffer[pe],R,M,t.COLOR_ATTACHMENT0,ce,pe);else ge(H.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ce,0);g(M,xe)&&m(ce),n.unbindTexture()}R.depthBuffer&&Ae(R)}function Vt(R){const M=f(R)||a,H=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=H.length;ne<ee;ne++){const ie=H[ne];if(g(ie,M)){const xe=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(ie).__webglTexture;n.bindTexture(xe,ce),m(xe),n.unbindTexture()}}}function _e(R){if(a&&R.samples>0&&ve(R)===!1){const M=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],H=R.width,ne=R.height;let ee=t.COLOR_BUFFER_BIT;const ie=[],xe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(R),pe=R.isWebGLMultipleRenderTargets===!0;if(pe)for(let we=0;we<M.length;we++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let we=0;we<M.length;we++){ie.push(t.COLOR_ATTACHMENT0+we),R.depthBuffer&&ie.push(xe);const Oe=ce.__ignoreDepthValues!==void 0?ce.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),pe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[we]),Oe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[xe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[xe])),pe){const $=i.get(M[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$,0)}t.blitFramebuffer(0,0,H,ne,0,0,H,ne,ee,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ie)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let we=0;we<M.length;we++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,ce.__webglColorRenderbuffer[we]);const Oe=i.get(M[we]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Oe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}}function be(R){return Math.min(r.maxSamples,R.samples)}function ve(R){const M=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(R){const M=o.render.frame;d.get(R)!==M&&(d.set(R,M),R.update())}function Fe(R,M){const H=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===Wc||H!==mi&&H!==wn&&(Je.getTransfer(H)===it?a===!1?e.has("EXT_sRGB")===!0&&ne===Bn?(R.format=Wc,R.minFilter=En,R.generateMipmaps=!1):M=p0.sRGBToLinear(M):(ne!==Bn||ee!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}this.allocateTextureUnit=I,this.resetTextureUnits=re,this.setTexture2D=q,this.setTexture2DArray=Q,this.setTexture3D=P,this.setTextureCube=O,this.rebindTextures=je,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ve}function mw(t,e,n){const i=n.isWebGL2;function r(s,o=wn){let a;const l=Je.getTransfer(o);if(s===Vi)return t.UNSIGNED_BYTE;if(s===r0)return t.UNSIGNED_SHORT_4_4_4_4;if(s===s0)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ky)return t.BYTE;if(s===Jy)return t.SHORT;if(s===Wd)return t.UNSIGNED_SHORT;if(s===i0)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===Pi)return t.FLOAT;if(s===Mo)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Zy)return t.ALPHA;if(s===Bn)return t.RGBA;if(s===$y)return t.LUMINANCE;if(s===eS)return t.LUMINANCE_ALPHA;if(s===hr)return t.DEPTH_COMPONENT;if(s===ys)return t.DEPTH_STENCIL;if(s===Wc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===tS)return t.RED;if(s===o0)return t.RED_INTEGER;if(s===nS)return t.RG;if(s===a0)return t.RG_INTEGER;if(s===l0)return t.RGBA_INTEGER;if(s===fu||s===hu||s===pu||s===mu)if(l===it)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eh||s===wh||s===Ah||s===Th)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Eh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===wh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ah)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Th)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===u0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Rh||s===Ch)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Rh)return l===it?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ch)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bh||s===Lh||s===Ph||s===Uh||s===Dh||s===Ih||s===Nh||s===Fh||s===Oh||s===kh||s===Bh||s===zh||s===Hh||s===Vh)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Lh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ph)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Uh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Dh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ih)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Nh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Oh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===kh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Bh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Vh)return l===it?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gu||s===Gh||s===Wh)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gu)return l===it?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Gh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Wh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iS||s===jh||s===Xh||s===qh)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===jh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fr?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class gw extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Sa extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vw={type:"move"};class Hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const f=n.getJointPose(x,i),u=this._getHandJoint(c,x);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const d=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=d.position.distanceTo(p.position),v=.02,y=.005;c.inputState.pinching&&h>v+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=v-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vw)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class xw extends ws{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,p=null,h=null,v=null,y=null;const x=n.getContextAttributes();let f=null,u=null;const g=[],m=[],S=new We;let C=null;const A=new dn;A.layers.enable(1),A.viewport=new ot;const T=new dn;T.layers.enable(2),T.viewport=new ot;const U=[A,T],_=new gw;_.layers.enable(1),_.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=g[X];return J===void 0&&(J=new Hu,g[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=g[X];return J===void 0&&(J=new Hu,g[X]=J),J.getGripSpace()},this.getHand=function(X){let J=g[X];return J===void 0&&(J=new Hu,g[X]=J),J.getHandSpace()};function Y(X){const J=m.indexOf(X.inputSource);if(J===-1)return;const ue=g[J];ue!==void 0&&(ue.update(X.inputSource,X.frame,c||o),ue.dispatchEvent({type:X.type,data:X.inputSource}))}function re(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",re),r.removeEventListener("inputsourceschange",I);for(let X=0;X<g.length;X++){const J=m[X];J!==null&&(m[X]=null,g[X].disconnect(J))}E=null,z=null,e.setRenderTarget(f),v=null,h=null,p=null,r=null,u=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:v},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",re),r.addEventListener("inputsourceschange",I),x.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:v}),e.setPixelRatio(1),e.setSize(v.framebufferWidth,v.framebufferHeight,!1),u=new _r(v.framebufferWidth,v.framebufferHeight,{format:Bn,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ue=null,he=null;x.depth&&(he=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=x.stencil?ys:hr,ue=x.stencil?fr:Li);const ge={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};p=new XRWebGLBinding(r,n),h=p.createProjectionLayer(ge),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),u=new _r(h.textureWidth,h.textureHeight,{format:Bn,type:Vi,depthTexture:new R0(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=h.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(X){for(let J=0;J<X.removed.length;J++){const ue=X.removed[J],he=m.indexOf(ue);he>=0&&(m[he]=null,g[he].disconnect(ue))}for(let J=0;J<X.added.length;J++){const ue=X.added[J];let he=m.indexOf(ue);if(he===-1){for(let Pe=0;Pe<g.length;Pe++)if(Pe>=m.length){m.push(ue),he=Pe;break}else if(m[Pe]===null){m[Pe]=ue,he=Pe;break}if(he===-1)break}const ge=g[he];ge&&ge.connect(ue)}}const G=new N,q=new N;function Q(X,J,ue){G.setFromMatrixPosition(J.matrixWorld),q.setFromMatrixPosition(ue.matrixWorld);const he=G.distanceTo(q),ge=J.projectionMatrix.elements,Pe=ue.projectionMatrix.elements,De=ge[14]/(ge[10]-1),Ae=ge[14]/(ge[10]+1),je=(ge[9]+1)/ge[5],k=(ge[9]-1)/ge[5],Vt=(ge[8]-1)/ge[0],_e=(Pe[8]+1)/Pe[0],be=De*Vt,ve=De*_e,at=he/(-Vt+_e),Fe=at*-Vt;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Fe),X.translateZ(at),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const R=De+at,M=Ae+at,H=be-Fe,ne=ve+(he-Fe),ee=je*Ae/M*R,ie=k*Ae/M*R;X.projectionMatrix.makePerspective(H,ne,ee,ie,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function P(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;_.near=T.near=A.near=X.near,_.far=T.far=A.far=X.far,(E!==_.near||z!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,z=_.far);const J=X.parent,ue=_.cameras;P(_,J);for(let he=0;he<ue.length;he++)P(ue[he],J);ue.length===2?Q(_,A,T):_.projectionMatrix.copy(A.projectionMatrix),O(X,_,J)};function O(X,J,ue){ue===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ue.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=jc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&v===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=X)};let W=null;function K(X,J){if(d=J.getViewerPose(c||o),y=J,d!==null){const ue=d.views;v!==null&&(e.setRenderTargetFramebuffer(u,v.framebuffer),e.setRenderTarget(u));let he=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,he=!0);for(let ge=0;ge<ue.length;ge++){const Pe=ue[ge];let De=null;if(v!==null)De=v.getViewport(Pe);else{const je=p.getViewSubImage(h,Pe);De=je.viewport,ge===0&&(e.setRenderTargetTextures(u,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(u))}let Ae=U[ge];Ae===void 0&&(Ae=new dn,Ae.layers.enable(ge),Ae.viewport=new ot,U[ge]=Ae),Ae.matrix.fromArray(Pe.transform.matrix),Ae.matrix.decompose(Ae.position,Ae.quaternion,Ae.scale),Ae.projectionMatrix.fromArray(Pe.projectionMatrix),Ae.projectionMatrixInverse.copy(Ae.projectionMatrix).invert(),Ae.viewport.set(De.x,De.y,De.width,De.height),ge===0&&(_.matrix.copy(Ae.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),he===!0&&_.cameras.push(Ae)}}for(let ue=0;ue<g.length;ue++){const he=m[ue],ge=g[ue];he!==null&&ge!==void 0&&ge.update(he,J,c||o)}W&&W(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),y=null}const Z=new T0;Z.setAnimationLoop(K),this.setAnimationLoop=function(X){W=X},this.dispose=function(){}}}function yw(t,e){function n(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function i(f,u){u.color.getRGB(f.fogColor.value,E0(t)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function r(f,u,g,m,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(f,u):u.isMeshToonMaterial?(s(f,u),p(f,u)):u.isMeshPhongMaterial?(s(f,u),d(f,u)):u.isMeshStandardMaterial?(s(f,u),h(f,u),u.isMeshPhysicalMaterial&&v(f,u,S)):u.isMeshMatcapMaterial?(s(f,u),y(f,u)):u.isMeshDepthMaterial?s(f,u):u.isMeshDistanceMaterial?(s(f,u),x(f,u)):u.isMeshNormalMaterial?s(f,u):u.isLineBasicMaterial?(o(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,g,m):u.isSpriteMaterial?c(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,n(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,n(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,n(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===on&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,n(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===on&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,n(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,n(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const g=e.get(u).envMap;if(g&&(f.envMap.value=g,f.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap){f.lightMap.value=u.lightMap;const m=t._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=u.lightMapIntensity*m,n(u.lightMap,f.lightMapTransform)}u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,f.aoMapTransform))}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,n(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,g,m){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*g,f.scale.value=m*.5,u.map&&(f.map.value=u.map,n(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,n(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function c(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,n(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,n(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function d(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function p(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function h(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,f.roughnessMapTransform)),e.get(u).envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function v(f,u,g){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&f.clearcoatNormalScale.value.negate())),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=g.texture,f.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,f.specularIntensityMapTransform))}function y(f,u){u.matcap&&(f.matcap.value=u.matcap)}function x(f,u){const g=e.get(u).light;f.referencePosition.value.setFromMatrixPosition(g.matrixWorld),f.nearDistance.value=g.shadow.camera.near,f.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sw(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,m){const S=m.program;i.uniformBlockBinding(g,S)}function c(g,m){let S=r[g.id];S===void 0&&(y(g),S=d(g),r[g.id]=S,g.addEventListener("dispose",f));const C=m.program;i.updateUBOMapping(g,C);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function d(g){const m=p();g.__bindingPointIndex=m;const S=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,m,S),S}function p(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const m=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,m);for(let A=0,T=S.length;A<T;A++){const U=Array.isArray(S[A])?S[A]:[S[A]];for(let _=0,E=U.length;_<E;_++){const z=U[_];if(v(z,A,_,C)===!0){const Y=z.__offset,re=Array.isArray(z.value)?z.value:[z.value];let I=0;for(let G=0;G<re.length;G++){const q=re[G],Q=x(q);typeof q=="number"||typeof q=="boolean"?(z.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,Y+I,z.__data)):q.isMatrix3?(z.__data[0]=q.elements[0],z.__data[1]=q.elements[1],z.__data[2]=q.elements[2],z.__data[3]=0,z.__data[4]=q.elements[3],z.__data[5]=q.elements[4],z.__data[6]=q.elements[5],z.__data[7]=0,z.__data[8]=q.elements[6],z.__data[9]=q.elements[7],z.__data[10]=q.elements[8],z.__data[11]=0):(q.toArray(z.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,Y,z.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function v(g,m,S,C){const A=g.value,T=m+"_"+S;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{const U=C[T];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return C[T]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function y(g){const m=g.uniforms;let S=0;const C=16;for(let T=0,U=m.length;T<U;T++){const _=Array.isArray(m[T])?m[T]:[m[T]];for(let E=0,z=_.length;E<z;E++){const Y=_[E],re=Array.isArray(Y.value)?Y.value:[Y.value];for(let I=0,G=re.length;I<G;I++){const q=re[I],Q=x(q),P=S%C;P!==0&&C-P<Q.boundary&&(S+=C-P),Y.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=S,S+=Q.storage}}}const A=S%C;return A>0&&(S+=C-A),g.__size=S,g.__cache={},this}function x(g){const m={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(m.boundary=4,m.storage=4):g.isVector2?(m.boundary=8,m.storage=8):g.isVector3||g.isColor?(m.boundary=16,m.storage=12):g.isVector4?(m.boundary=16,m.storage=16):g.isMatrix3?(m.boundary=48,m.storage=48):g.isMatrix4?(m.boundary=64,m.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),m}function f(g){const m=g.target;m.removeEventListener("dispose",f);const S=o.indexOf(m.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[m.id]),delete r[m.id],delete s[m.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class D0{constructor(e={}){const{canvas:n=mS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const v=new Uint32Array(4),y=new Int32Array(4);let x=null,f=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pt,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const m=this;let S=!1,C=0,A=0,T=null,U=-1,_=null;const E=new ot,z=new ot;let Y=null;const re=new qe(0);let I=0,G=n.width,q=n.height,Q=1,P=null,O=null;const W=new ot(0,0,G,q),K=new ot(0,0,G,q);let Z=!1;const X=new Xd;let J=!1,ue=!1,he=null;const ge=new xt,Pe=new We,De=new N,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return T===null?Q:1}let k=i;function Vt(w,F){for(let V=0;V<w.length;V++){const j=w[V],B=n.getContext(j,F);if(B!==null)return B}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Gd}`),n.addEventListener("webglcontextlost",se,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ae,!1),k===null){const F=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&F.shift(),k=Vt(F,w),k===null)throw Vt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let _e,be,ve,at,Fe,R,M,H,ne,ee,ie,xe,ce,pe,we,Oe,$,Ke,Ve,Ce,Se,me,Ie,Qe;function ht(){_e=new LM(k),be=new EM(k,_e,e),_e.init(be),me=new mw(k,_e,be),ve=new hw(k,_e,be),at=new DM(k),Fe=new $E,R=new pw(k,_e,ve,Fe,be,me,at),M=new AM(m),H=new bM(m),ne=new zS(k,be),Ie=new _M(k,_e,ne,be),ee=new PM(k,ne,at,Ie),ie=new OM(k,ee,ne,at),Ve=new FM(k,be,R),Oe=new wM(Fe),xe=new ZE(m,M,H,_e,be,Ie,Oe),ce=new yw(m,Fe),pe=new tw,we=new aw(_e,be),Ke=new SM(m,M,H,ve,ie,h,l),$=new fw(m,ie,be),Qe=new Sw(k,at,be,ve),Ce=new MM(k,_e,at,be),Se=new UM(k,_e,at,be),at.programs=xe.programs,m.capabilities=be,m.extensions=_e,m.properties=Fe,m.renderLists=pe,m.shadowMap=$,m.state=ve,m.info=at}ht();const Be=new xw(m,k);this.xr=Be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=_e.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=_e.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(G,q,!1))},this.getSize=function(w){return w.set(G,q)},this.setSize=function(w,F,V=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=w,q=F,n.width=Math.floor(w*Q),n.height=Math.floor(F*Q),V===!0&&(n.style.width=w+"px",n.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(G*Q,q*Q).floor()},this.setDrawingBufferSize=function(w,F,V){G=w,q=F,Q=V,n.width=Math.floor(w*V),n.height=Math.floor(F*V),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(W)},this.setViewport=function(w,F,V,j){w.isVector4?W.set(w.x,w.y,w.z,w.w):W.set(w,F,V,j),ve.viewport(E.copy(W).multiplyScalar(Q).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,F,V,j){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,F,V,j),ve.scissor(z.copy(K).multiplyScalar(Q).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){ve.setScissorTest(Z=w)},this.setOpaqueSort=function(w){P=w},this.setTransparentSort=function(w){O=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(w=!0,F=!0,V=!0){let j=0;if(w){let B=!1;if(T!==null){const de=T.texture.format;B=de===l0||de===a0||de===o0}if(B){const de=T.texture.type,ye=de===Vi||de===Li||de===Wd||de===fr||de===r0||de===s0,Ee=Ke.getClearColor(),Re=Ke.getClearAlpha(),ke=Ee.r,Le=Ee.g,Ue=Ee.b;ye?(v[0]=ke,v[1]=Le,v[2]=Ue,v[3]=Re,k.clearBufferuiv(k.COLOR,0,v)):(y[0]=ke,y[1]=Le,y[2]=Ue,y[3]=Re,k.clearBufferiv(k.COLOR,0,y))}else j|=k.COLOR_BUFFER_BIT}F&&(j|=k.DEPTH_BUFFER_BIT),V&&(j|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",se,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ae,!1),pe.dispose(),we.dispose(),Fe.dispose(),M.dispose(),H.dispose(),ie.dispose(),Ie.dispose(),Qe.dispose(),xe.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",Gt),Be.removeEventListener("sessionend",et),he&&(he.dispose(),he=null),Wt.stop()};function se(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=at.autoReset,F=$.enabled,V=$.autoUpdate,j=$.needsUpdate,B=$.type;ht(),at.autoReset=w,$.enabled=F,$.autoUpdate=V,$.needsUpdate=j,$.type=B}function ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function le(w){const F=w.target;F.removeEventListener("dispose",le),Te(F)}function Te(w){Me(w),Fe.remove(w)}function Me(w){const F=Fe.get(w).programs;F!==void 0&&(F.forEach(function(V){xe.releaseProgram(V)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,V,j,B,de){F===null&&(F=Ae);const ye=B.isMesh&&B.matrixWorld.determinant()<0,Ee=O0(w,F,V,j,B);ve.setMaterial(j,ye);let Re=V.index,ke=1;if(j.wireframe===!0){if(Re=ee.getWireframeAttribute(V),Re===void 0)return;ke=2}const Le=V.drawRange,Ue=V.attributes.position;let gt=Le.start*ke,an=(Le.start+Le.count)*ke;de!==null&&(gt=Math.max(gt,de.start*ke),an=Math.min(an,(de.start+de.count)*ke)),Re!==null?(gt=Math.max(gt,0),an=Math.min(an,Re.count)):Ue!=null&&(gt=Math.max(gt,0),an=Math.min(an,Ue.count));const Tt=an-gt;if(Tt<0||Tt===1/0)return;Ie.setup(B,j,Ee,V,Re);let Jn,lt=Ce;if(Re!==null&&(Jn=ne.get(Re),lt=Se,lt.setIndex(Jn)),B.isMesh)j.wireframe===!0?(ve.setLineWidth(j.wireframeLinewidth*je()),lt.setMode(k.LINES)):lt.setMode(k.TRIANGLES);else if(B.isLine){let ze=j.linewidth;ze===void 0&&(ze=1),ve.setLineWidth(ze*je()),B.isLineSegments?lt.setMode(k.LINES):B.isLineLoop?lt.setMode(k.LINE_LOOP):lt.setMode(k.LINE_STRIP)}else B.isPoints?lt.setMode(k.POINTS):B.isSprite&&lt.setMode(k.TRIANGLES);if(B.isBatchedMesh)lt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)lt.renderInstances(gt,Tt,B.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nl=Math.min(V.instanceCount,ze);lt.renderInstances(gt,Tt,Nl)}else lt.render(gt,Tt)};function Ze(w,F,V){w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,Io(w,F,V),w.side=ji,w.needsUpdate=!0,Io(w,F,V),w.side=oi):Io(w,F,V)}this.compile=function(w,F,V=null){V===null&&(V=w),f=we.get(V),f.init(),g.push(f),V.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),w!==V&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(m._useLegacyLights);const j=new Set;return w.traverse(function(B){const de=B.material;if(de)if(Array.isArray(de))for(let ye=0;ye<de.length;ye++){const Ee=de[ye];Ze(Ee,V,B),j.add(Ee)}else Ze(de,V,B),j.add(de)}),g.pop(),f=null,j},this.compileAsync=function(w,F,V=null){const j=this.compile(w,F,V);return new Promise(B=>{function de(){if(j.forEach(function(ye){Fe.get(ye).currentProgram.isReady()&&j.delete(ye)}),j.size===0){B(w);return}setTimeout(de,10)}_e.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let $e=null;function At(w){$e&&$e(w)}function Gt(){Wt.stop()}function et(){Wt.start()}const Wt=new T0;Wt.setAnimationLoop(At),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(w){$e=w,Be.setAnimationLoop(w),w===null?Wt.stop():Wt.start()},Be.addEventListener("sessionstart",Gt),Be.addEventListener("sessionend",et),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(F),F=Be.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,F,T),f=we.get(w,g.length),f.init(),g.push(f),ge.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),X.setFromProjectionMatrix(ge),ue=this.localClippingEnabled,J=Oe.init(this.clippingPlanes,ue),x=pe.get(w,u.length),x.init(),u.push(x),Wn(w,F,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(P,O),this.info.render.frame++,J===!0&&Oe.beginShadows();const V=f.state.shadowsArray;if($.render(V,w,F),J===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(x,w),f.setupLights(m._useLegacyLights),F.isArrayCamera){const j=F.cameras;for(let B=0,de=j.length;B<de;B++){const ye=j[B];ef(x,w,ye,ye.viewport)}}else ef(x,w,F);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(m,w,F),Ie.resetDefaultState(),U=-1,_=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Wn(w,F,V,j){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)V=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||X.intersectsSprite(w)){j&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const ye=ie.update(w),Ee=w.material;Ee.visible&&x.push(w,ye,Ee,V,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||X.intersectsObject(w))){const ye=ie.update(w),Ee=w.material;if(j&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),De.copy(ye.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){const Re=ye.groups;for(let ke=0,Le=Re.length;ke<Le;ke++){const Ue=Re[ke],gt=Ee[Ue.materialIndex];gt&&gt.visible&&x.push(w,ye,gt,V,De.z,Ue)}}else Ee.visible&&x.push(w,ye,Ee,V,De.z,null)}}const de=w.children;for(let ye=0,Ee=de.length;ye<Ee;ye++)Wn(de[ye],F,V,j)}function ef(w,F,V,j){const B=w.opaque,de=w.transmissive,ye=w.transparent;f.setupLightsView(V),J===!0&&Oe.setGlobalState(m.clippingPlanes,V),de.length>0&&F0(B,de,F,V),j&&ve.viewport(E.copy(j)),B.length>0&&Do(B,F,V),de.length>0&&Do(de,F,V),ye.length>0&&Do(ye,F,V),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function F0(w,F,V,j){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const de=be.isWebGL2;he===null&&(he=new _r(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?Mo:Vi,minFilter:_o,samples:de?4:0})),m.getDrawingBufferSize(Pe),de?he.setSize(Pe.x,Pe.y):he.setSize(Xc(Pe.x),Xc(Pe.y));const ye=m.getRenderTarget();m.setRenderTarget(he),m.getClearColor(re),I=m.getClearAlpha(),I<1&&m.setClearColor(16777215,.5),m.clear();const Ee=m.toneMapping;m.toneMapping=Hi,Do(w,V,j),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he);let Re=!1;for(let ke=0,Le=F.length;ke<Le;ke++){const Ue=F[ke],gt=Ue.object,an=Ue.geometry,Tt=Ue.material,Jn=Ue.group;if(Tt.side===oi&&gt.layers.test(j.layers)){const lt=Tt.side;Tt.side=on,Tt.needsUpdate=!0,tf(gt,V,j,an,Tt,Jn),Tt.side=lt,Tt.needsUpdate=!0,Re=!0}}Re===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he)),m.setRenderTarget(ye),m.setClearColor(re,I),m.toneMapping=Ee}function Do(w,F,V){const j=F.isScene===!0?F.overrideMaterial:null;for(let B=0,de=w.length;B<de;B++){const ye=w[B],Ee=ye.object,Re=ye.geometry,ke=j===null?ye.material:j,Le=ye.group;Ee.layers.test(V.layers)&&tf(Ee,F,V,Re,ke,Le)}}function tf(w,F,V,j,B,de){w.onBeforeRender(m,F,V,j,B,de),w.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(m,F,V,j,w,de),B.transparent===!0&&B.side===oi&&B.forceSinglePass===!1?(B.side=on,B.needsUpdate=!0,m.renderBufferDirect(V,F,j,B,w,de),B.side=ji,B.needsUpdate=!0,m.renderBufferDirect(V,F,j,B,w,de),B.side=oi):m.renderBufferDirect(V,F,j,B,w,de),w.onAfterRender(m,F,V,j,B,de)}function Io(w,F,V){F.isScene!==!0&&(F=Ae);const j=Fe.get(w),B=f.state.lights,de=f.state.shadowsArray,ye=B.state.version,Ee=xe.getParameters(w,B.state,de,F,V),Re=xe.getProgramCacheKey(Ee);let ke=j.programs;j.environment=w.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(w.isMeshStandardMaterial?H:M).get(w.envMap||j.environment),ke===void 0&&(w.addEventListener("dispose",le),ke=new Map,j.programs=ke);let Le=ke.get(Re);if(Le!==void 0){if(j.currentProgram===Le&&j.lightsStateVersion===ye)return rf(w,Ee),Le}else Ee.uniforms=xe.getUniforms(w),w.onBuild(V,Ee,m),w.onBeforeCompile(Ee,m),Le=xe.acquireProgram(Ee,Re),ke.set(Re,Le),j.uniforms=Ee.uniforms;const Ue=j.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=Oe.uniform),rf(w,Ee),j.needsLights=B0(w),j.lightsStateVersion=ye,j.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),j.currentProgram=Le,j.uniformsList=null,Le}function nf(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Fa.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function rf(w,F){const V=Fe.get(w);V.outputColorSpace=F.outputColorSpace,V.batching=F.batching,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function O0(w,F,V,j,B){F.isScene!==!0&&(F=Ae),R.resetTextureUnits();const de=F.fog,ye=j.isMeshStandardMaterial?F.environment:null,Ee=T===null?m.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:mi,Re=(j.isMeshStandardMaterial?H:M).get(j.envMap||ye),ke=j.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Le=!!V.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ue=!!V.morphAttributes.position,gt=!!V.morphAttributes.normal,an=!!V.morphAttributes.color;let Tt=Hi;j.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Tt=m.toneMapping);const Jn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,lt=Jn!==void 0?Jn.length:0,ze=Fe.get(j),Nl=f.state.lights;if(J===!0&&(ue===!0||w!==_)){const yn=w===_&&j.id===U;Oe.setState(j,w,yn)}let pt=!1;j.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Nl.state.version||ze.outputColorSpace!==Ee||B.isBatchedMesh&&ze.batching===!1||!B.isBatchedMesh&&ze.batching===!0||B.isInstancedMesh&&ze.instancing===!1||!B.isInstancedMesh&&ze.instancing===!0||B.isSkinnedMesh&&ze.skinning===!1||!B.isSkinnedMesh&&ze.skinning===!0||B.isInstancedMesh&&ze.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&ze.instancingColor===!1&&B.instanceColor!==null||ze.envMap!==Re||j.fog===!0&&ze.fog!==de||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==ke||ze.vertexTangents!==Le||ze.morphTargets!==Ue||ze.morphNormals!==gt||ze.morphColors!==an||ze.toneMapping!==Tt||be.isWebGL2===!0&&ze.morphTargetsCount!==lt)&&(pt=!0):(pt=!0,ze.__version=j.version);let Yi=ze.currentProgram;pt===!0&&(Yi=Io(j,F,B));let sf=!1,Rs=!1,Fl=!1;const It=Yi.getUniforms(),Ki=ze.uniforms;if(ve.useProgram(Yi.program)&&(sf=!0,Rs=!0,Fl=!0),j.id!==U&&(U=j.id,Rs=!0),sf||_!==w){It.setValue(k,"projectionMatrix",w.projectionMatrix),It.setValue(k,"viewMatrix",w.matrixWorldInverse);const yn=It.map.cameraPosition;yn!==void 0&&yn.setValue(k,De.setFromMatrixPosition(w.matrixWorld)),be.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&It.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Rs=!0,Fl=!0)}if(B.isSkinnedMesh){It.setOptional(k,B,"bindMatrix"),It.setOptional(k,B,"bindMatrixInverse");const yn=B.skeleton;yn&&(be.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),It.setValue(k,"boneTexture",yn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(It.setOptional(k,B,"batchingTexture"),It.setValue(k,"batchingTexture",B._matricesTexture,R));const Ol=V.morphAttributes;if((Ol.position!==void 0||Ol.normal!==void 0||Ol.color!==void 0&&be.isWebGL2===!0)&&Ve.update(B,V,Yi),(Rs||ze.receiveShadow!==B.receiveShadow)&&(ze.receiveShadow=B.receiveShadow,It.setValue(k,"receiveShadow",B.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ki.envMap.value=Re,Ki.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Rs&&(It.setValue(k,"toneMappingExposure",m.toneMappingExposure),ze.needsLights&&k0(Ki,Fl),de&&j.fog===!0&&ce.refreshFogUniforms(Ki,de),ce.refreshMaterialUniforms(Ki,j,Q,q,he),Fa.upload(k,nf(ze),Ki,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fa.upload(k,nf(ze),Ki,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&It.setValue(k,"center",B.center),It.setValue(k,"modelViewMatrix",B.modelViewMatrix),It.setValue(k,"normalMatrix",B.normalMatrix),It.setValue(k,"modelMatrix",B.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const yn=j.uniformsGroups;for(let kl=0,z0=yn.length;kl<z0;kl++)if(be.isWebGL2){const of=yn[kl];Qe.update(of,Yi),Qe.bind(of,Yi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yi}function k0(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function B0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,V){Fe.get(w.texture).__webglTexture=F,Fe.get(w.depthTexture).__webglTexture=V;const j=Fe.get(w);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=V===void 0,j.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const V=Fe.get(w);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,V=0){T=w,C=F,A=V;let j=!0,B=null,de=!1,ye=!1;if(w){const Re=Fe.get(w);Re.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Re.__webglFramebuffer===void 0?R.setupRenderTarget(w):Re.__hasExternalTextures&&R.rebindTextures(w,Fe.get(w.texture).__webglTexture,Fe.get(w.depthTexture).__webglTexture);const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(ye=!0);const Le=Fe.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Le[F])?B=Le[F][V]:B=Le[F],de=!0):be.isWebGL2&&w.samples>0&&R.useMultisampledRTT(w)===!1?B=Fe.get(w).__webglMultisampledFramebuffer:Array.isArray(Le)?B=Le[V]:B=Le,E.copy(w.viewport),z.copy(w.scissor),Y=w.scissorTest}else E.copy(W).multiplyScalar(Q).floor(),z.copy(K).multiplyScalar(Q).floor(),Y=Z;if(ve.bindFramebuffer(k.FRAMEBUFFER,B)&&be.drawBuffers&&j&&ve.drawBuffers(w,B),ve.viewport(E),ve.scissor(z),ve.setScissorTest(Y),de){const Re=Fe.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,V)}else if(ye){const Re=Fe.get(w.texture),ke=F||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,V||0,ke)}U=-1},this.readRenderTargetPixels=function(w,F,V,j,B,de,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Fe.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){ve.bindFramebuffer(k.FRAMEBUFFER,Ee);try{const Re=w.texture,ke=Re.format,Le=Re.type;if(ke!==Bn&&me.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ue=Le===Mo&&(_e.has("EXT_color_buffer_half_float")||be.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Le!==Vi&&me.convert(Le)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Le===Pi&&(be.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Ue){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-j&&V>=0&&V<=w.height-B&&k.readPixels(F,V,j,B,me.convert(ke),me.convert(Le),de)}finally{const Re=T!==null?Fe.get(T).__webglFramebuffer:null;ve.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(w,F,V=0){const j=Math.pow(2,-V),B=Math.floor(F.image.width*j),de=Math.floor(F.image.height*j);R.setTexture2D(F,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,w.x,w.y,B,de),ve.unbindTexture()},this.copyTextureToTexture=function(w,F,V,j=0){const B=F.image.width,de=F.image.height,ye=me.convert(V.format),Ee=me.convert(V.type);R.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,w.x,w.y,B,de,ye,Ee,F.image.data):F.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,ye,F.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,w.x,w.y,ye,Ee,F.image),j===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(w,F,V,j,B=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=w.max.x-w.min.x+1,ye=w.max.y-w.min.y+1,Ee=w.max.z-w.min.z+1,Re=me.convert(j.format),ke=me.convert(j.type);let Le;if(j.isData3DTexture)R.setTexture3D(j,0),Le=k.TEXTURE_3D;else if(j.isDataArrayTexture||j.isCompressedArrayTexture)R.setTexture2DArray(j,0),Le=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const Ue=k.getParameter(k.UNPACK_ROW_LENGTH),gt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),an=k.getParameter(k.UNPACK_SKIP_PIXELS),Tt=k.getParameter(k.UNPACK_SKIP_ROWS),Jn=k.getParameter(k.UNPACK_SKIP_IMAGES),lt=V.isCompressedTexture?V.mipmaps[B]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,lt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Le,B,F.x,F.y,F.z,de,ye,Ee,Re,ke,lt.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Le,B,F.x,F.y,F.z,de,ye,Ee,Re,lt.data)):k.texSubImage3D(Le,B,F.x,F.y,F.z,de,ye,Ee,Re,ke,lt),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ue),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,an),k.pixelStorei(k.UNPACK_SKIP_ROWS,Tt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jn),B===0&&j.generateMipmaps&&k.generateMipmap(Le),ve.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?R.setTextureCube(w,0):w.isData3DTexture?R.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?R.setTexture2DArray(w,0):R.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,ve.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===jd?"display-p3":"srgb",n.unpackColorSpace=Je.workingColorSpace===Pl?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Pt?pr:c0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===pr?Pt:mi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class _w extends D0{}_w.prototype.isWebGL1Renderer=!0;class Mw extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}}class I0 extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fp=new xt,Qc=new v0,_a=new Ul,Ma=new N;class Ew extends Yt{constructor(e=new bn,n=new I0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_a.copy(i.boundingSphere),_a.applyMatrix4(r),_a.radius+=s,e.ray.intersectsSphere(_a)===!1)return;Fp.copy(r).invert(),Qc.copy(e.ray).applyMatrix4(Fp);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let y=h,x=v;y<x;y++){const f=c.getX(y);Ma.fromBufferAttribute(p,f),Op(Ma,f,l,r,e,n,this)}}else{const h=Math.max(0,o.start),v=Math.min(p.count,o.start+o.count);for(let y=h,x=v;y<x;y++)Ma.fromBufferAttribute(p,y),Op(Ma,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Op(t,e,n,i,r,s,o){const a=Qc.distanceSqToPoint(t);if(a<n){const l=new N;Qc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Uo extends bn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const m=new N,S=new N,C=new N;for(let A=0;A<n.length;A+=3)v(n[A+0],m),v(n[A+1],S),v(n[A+2],C),l(m,S,C,g)}function l(g,m,S,C){const A=C+1,T=[];for(let U=0;U<=A;U++){T[U]=[];const _=g.clone().lerp(S,U/A),E=m.clone().lerp(S,U/A),z=A-U;for(let Y=0;Y<=z;Y++)Y===0&&U===A?T[U][Y]=_:T[U][Y]=_.clone().lerp(E,Y/z)}for(let U=0;U<A;U++)for(let _=0;_<2*(A-U)-1;_++){const E=Math.floor(_/2);_%2===0?(h(T[U][E+1]),h(T[U+1][E]),h(T[U][E])):(h(T[U][E+1]),h(T[U+1][E+1]),h(T[U+1][E]))}}function c(g){const m=new N;for(let S=0;S<s.length;S+=3)m.x=s[S+0],m.y=s[S+1],m.z=s[S+2],m.normalize().multiplyScalar(g),s[S+0]=m.x,s[S+1]=m.y,s[S+2]=m.z}function d(){const g=new N;for(let m=0;m<s.length;m+=3){g.x=s[m+0],g.y=s[m+1],g.z=s[m+2];const S=f(g)/2/Math.PI+.5,C=u(g)/Math.PI+.5;o.push(S,1-C)}y(),p()}function p(){for(let g=0;g<o.length;g+=6){const m=o[g+0],S=o[g+2],C=o[g+4],A=Math.max(m,S,C),T=Math.min(m,S,C);A>.9&&T<.1&&(m<.2&&(o[g+0]+=1),S<.2&&(o[g+2]+=1),C<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function v(g,m){const S=g*3;m.x=e[S+0],m.y=e[S+1],m.z=e[S+2]}function y(){const g=new N,m=new N,S=new N,C=new N,A=new We,T=new We,U=new We;for(let _=0,E=0;_<s.length;_+=9,E+=6){g.set(s[_+0],s[_+1],s[_+2]),m.set(s[_+3],s[_+4],s[_+5]),S.set(s[_+6],s[_+7],s[_+8]),A.set(o[E+0],o[E+1]),T.set(o[E+2],o[E+3]),U.set(o[E+4],o[E+5]),C.copy(g).add(m).add(S).divideScalar(3);const z=f(C);x(A,E+0,g,z),x(T,E+2,m,z),x(U,E+4,S,z)}}function x(g,m,S,C){C<0&&g.x===1&&(o[m]=g.x-1),S.x===0&&S.z===0&&(o[m]=C/2/Math.PI+.5)}function f(g){return Math.atan2(g.z,-g.x)}function u(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uo(e.vertices,e.indices,e.radius,e.details)}}class Yd extends Uo{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Yd(e.radius,e.detail)}}class Kd extends Uo{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kd(e.radius,e.detail)}}class Jd extends Uo{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Jd(e.radius,e.detail)}}class Zd extends bn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,p=new N,h=new N;for(let v=0;v<=i;v++)for(let y=0;y<=r;y++){const x=y/r*s,f=v/i*Math.PI*2;p.x=(e+n*Math.cos(f))*Math.cos(x),p.y=(e+n*Math.cos(f))*Math.sin(x),p.z=n*Math.sin(f),a.push(p.x,p.y,p.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(p,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/r),c.push(v/i)}for(let v=1;v<=i;v++)for(let y=1;y<=r;y++){const x=(r+1)*v+y-1,f=(r+1)*(v-1)+y-1,u=(r+1)*(v-1)+y,g=(r+1)*v+y;o.push(x,f,g),o.push(f,u,g)}this.setIndex(o),this.setAttribute("position",new zt(a,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class $d extends bn{constructor(e=1,n=.4,i=64,r=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:o},i=Math.floor(i),r=Math.floor(r);const a=[],l=[],c=[],d=[],p=new N,h=new N,v=new N,y=new N,x=new N,f=new N,u=new N;for(let m=0;m<=i;++m){const S=m/i*s*Math.PI*2;g(S,s,o,e,v),g(S+.01,s,o,e,y),f.subVectors(y,v),u.addVectors(y,v),x.crossVectors(f,u),u.crossVectors(x,f),x.normalize(),u.normalize();for(let C=0;C<=r;++C){const A=C/r*Math.PI*2,T=-n*Math.cos(A),U=n*Math.sin(A);p.x=v.x+(T*u.x+U*x.x),p.y=v.y+(T*u.y+U*x.y),p.z=v.z+(T*u.z+U*x.z),l.push(p.x,p.y,p.z),h.subVectors(p,v).normalize(),c.push(h.x,h.y,h.z),d.push(m/i),d.push(C/r)}}for(let m=1;m<=i;m++)for(let S=1;S<=r;S++){const C=(r+1)*(m-1)+(S-1),A=(r+1)*m+(S-1),T=(r+1)*m+S,U=(r+1)*(m-1)+S;a.push(C,A,U),a.push(A,T,U)}this.setIndex(a),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(d,2));function g(m,S,C,A,T){const U=Math.cos(m),_=Math.sin(m),E=C/S*m,z=Math.cos(E);T.x=A*(2+z)*.5*U,T.y=A*(2+z)*_*.5,T.z=A*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $d(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Ea extends As{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=d0,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N0 extends Yt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Vu=new xt,kp=new N,Bp=new N;class ww{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),n.position.copy(kp),Bp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Bp),n.updateMatrixWorld(),Vu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zp=new xt,Hs=new N,Gu=new N;class Aw extends ww{constructor(){super(new dn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new We(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Hs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hs),Gu.copy(i.position),Gu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Gu),i.updateMatrixWorld(),r.makeTranslation(-Hs.x,-Hs.y,-Hs.z),zp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zp)}}class Wu extends N0{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Aw}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tw extends N0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Rw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Hp();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Hp(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gd);const Vs="/rjl-logo.png",D={navy:"#07070F",purple:"#1F0C4E",teal:"#006D7A",tealBright:"#00A5B5",pink:"#FF2D78",pinkGlow:"rgba(255,45,120,0.15)",white:"#FFFFFF",silver:"#E8E9EF",muted:"#8B8D9C",glass:"rgba(255,255,255,0.035)",border:"rgba(255,255,255,0.07)"};function Cw(){const t=ut.useRef(null);return ut.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new Mw,s=new dn(60,n/i,.1,100);s.position.z=5;const o=new D0({alpha:!0,antialias:!0});o.setSize(n,i),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(o.domElement);const a=new Tw(2236996,.8);r.add(a);const l=new Wu(16723320,2,20);l.position.set(3,3,4),r.add(l);const c=new Wu(28026,2,20);c.position.set(-3,-2,3),r.add(c);const d=new Wu(13216110,1.5,15);d.position.set(0,4,2),r.add(d);const p=new Ea({color:16723320,wireframe:!0,transparent:!0,opacity:.25}),h=new Ea({color:28026,wireframe:!0,transparent:!0,opacity:.2}),v=new Ea({color:13216110,wireframe:!0,transparent:!0,opacity:.2}),y=new Ea({color:2034766,metalness:.9,roughness:.1,transparent:!0,opacity:.5}),x=[],f=new fn(new Zd(1.8,.15,16,100),p);f.position.set(2.5,.5,-2),r.add(f),x.push({mesh:f,rx:.003,ry:.005,rz:.002,floatY:.5,floatSpeed:.8,phase:0});const u=new fn(new Kd(1.2,0),h);u.position.set(-2.8,-.5,-1.5),r.add(u),x.push({mesh:u,rx:.004,ry:.003,rz:.001,floatY:.4,floatSpeed:1.2,phase:1});const g=new fn(new Jd(.8,0),v);g.position.set(.5,2.2,-1),r.add(g),x.push({mesh:g,rx:.005,ry:.002,rz:.004,floatY:.3,floatSpeed:1.5,phase:2});const m=new fn(new Yd(.6,0),y);m.position.set(-1,1.5,-.5),r.add(m),x.push({mesh:m,rx:.002,ry:.006,rz:.003,floatY:.35,floatSpeed:.9,phase:3});const S=new fn(new $d(.5,.15,64,8,2,3),p.clone());S.material.opacity=.15,S.position.set(3,-1.8,-1),r.add(S),x.push({mesh:S,rx:.003,ry:.004,rz:.001,floatY:.25,floatSpeed:1.1,phase:4});const C=120,A=new Float32Array(C*3);for(let Q=0;Q<C;Q++)A[Q*3]=(Math.random()-.5)*14,A[Q*3+1]=(Math.random()-.5)*10,A[Q*3+2]=(Math.random()-.5)*8;const T=new bn;T.setAttribute("position",new Vn(A,3));const U=new I0({color:16723320,size:.03,transparent:!0,opacity:.5}),_=new Ew(T,U);r.add(_);let E=0,z=0;const Y=Q=>{E=(Q.clientX/n-.5)*2,z=(Q.clientY/i-.5)*2};e.addEventListener("mousemove",Y);let re;const I=new Rw,G=()=>{re=requestAnimationFrame(G);const Q=I.getElapsedTime();x.forEach(P=>{P.mesh.rotation.x+=P.rx,P.mesh.rotation.y+=P.ry,P.mesh.rotation.z+=P.rz,P.mesh.position.y+=Math.sin(Q*P.floatSpeed+P.phase)*.003}),_.rotation.y=Q*.02,_.rotation.x=Q*.01,s.position.x+=(E*.5-s.position.x)*.02,s.position.y+=(-z*.3-s.position.y)*.02,s.lookAt(0,0,0),o.render(r,s)};G();const q=()=>{const Q=e.clientWidth,P=e.clientHeight;s.aspect=Q/P,s.updateProjectionMatrix(),o.setSize(Q,P)};return window.addEventListener("resize",q),()=>{cancelAnimationFrame(re),e.removeEventListener("mousemove",Y),window.removeEventListener("resize",q),o.dispose(),e.contains(o.domElement)&&e.removeChild(o.domElement)}},[]),b.jsx("div",{ref:t,style:{position:"absolute",inset:0,zIndex:0}})}function mr(t=.12){const e=ut.useRef(null),[n,i]=ut.useState(!1);return ut.useEffect(()=>{const r=e.current;if(!r)return;const s=new IntersectionObserver(([o])=>{o.isIntersecting&&(i(!0),s.unobserve(r))},{threshold:t});return s.observe(r),()=>s.disconnect()},[t]),[e,n]}function Ei({children:t,id:e,style:n={},delay:i=0}){const[r,s]=mr(.08);return b.jsx("section",{id:e,ref:r,style:{opacity:s?1:0,transform:s?"translateY(0)":"translateY(60px)",transition:`opacity 1s cubic-bezier(.16,1,.3,1) ${i}ms, transform 1s cubic-bezier(.16,1,.3,1) ${i}ms`,...n},children:t})}function hl({children:t,style:e={},className:n=""}){const i=ut.useRef(null),[r,s]=ut.useState("perspective(800px) rotateX(0) rotateY(0)"),[o,a]=ut.useState({x:50,y:50,opacity:0}),l=d=>{const p=i.current;if(!p)return;const h=p.getBoundingClientRect(),v=(d.clientX-h.left)/h.width,y=(d.clientY-h.top)/h.height,x=(v-.5)*16,f=(.5-y)*12;s(`perspective(800px) rotateX(${f}deg) rotateY(${x}deg) scale(1.02)`),a({x:v*100,y:y*100,opacity:.12})},c=()=>{s("perspective(800px) rotateX(0) rotateY(0) scale(1)"),a({x:50,y:50,opacity:0})};return b.jsxs("div",{ref:i,className:n,onMouseMove:l,onMouseLeave:c,style:{...e,transform:r,transition:"transform 0.4s cubic-bezier(.16,1,.3,1)",position:"relative"},children:[t,b.jsx("div",{style:{position:"absolute",inset:0,pointerEvents:"none",borderRadius:"inherit",overflow:"hidden",background:`radial-gradient(circle at ${o.x}% ${o.y}%, rgba(255,255,255,${o.opacity}), transparent 60%)`,transition:"opacity 0.3s"}})]})}function bw({text:t,style:e={},delay:n=0}){const[i,r]=mr(.2),s=t.split(" ");return b.jsx("h1",{ref:i,style:e,children:s.map((o,a)=>b.jsx("span",{style:{display:"inline-block",overflow:"hidden",marginRight:"0.3em",verticalAlign:"top"},children:b.jsx("span",{style:{display:"inline-block",transform:r?"translateY(0)":"translateY(110%)",opacity:r?1:0,transition:`transform 0.8s cubic-bezier(.16,1,.3,1) ${n+a*60}ms, opacity 0.6s ease ${n+a*60}ms`},children:o})},a))})}function Lw({p:t,i:e}){const[n,i]=mr(.1),r=e%2===1;return b.jsxs("div",{ref:n,className:"proj-row",style:{display:"flex",flexDirection:r?"row-reverse":"row",gap:"clamp(24px, 5vw, 72px)",alignItems:"center",opacity:i?1:0,transform:i?"translateY(0)":`translate${r?"X(80px)":"X(-80px)"}`,transition:`all 1s cubic-bezier(.16,1,.3,1) ${e*100}ms`,marginBottom:"clamp(56px, 8vw, 110px)"},children:[b.jsxs(hl,{style:{flex:"1 1 55%",aspectRatio:"16/10",borderRadius:20,background:t.img?`url(${t.img}) center/cover no-repeat`:`linear-gradient(135deg, ${D.purple} 0%, ${D.teal} 50%, ${D.pink}30 100%)`,boxShadow:"0 8px 40px rgba(0,0,0,0.3)",minHeight:180,cursor:"default",overflow:"hidden"},children:[!t.img&&b.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",color:D.muted,fontSize:12,letterSpacing:3,textTransform:"uppercase",fontFamily:"Manrope, sans-serif",zIndex:1},children:"Project Screenshot"}),b.jsx("div",{style:{position:"absolute",inset:-1,borderRadius:21,zIndex:0,padding:1,background:`conic-gradient(from var(--angle, 0deg), ${D.pink}, ${D.teal}, ${D.purple}, ${D.pink})`,mask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",maskComposite:"exclude",WebkitMaskComposite:"xor",animation:"spin-border 4s linear infinite",opacity:.5}})]}),b.jsxs("div",{style:{flex:"1 1 40%"},children:[b.jsxs("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:3,marginBottom:14},children:["0",e+1]}),b.jsx("h3",{style:{fontFamily:"Sora, sans-serif",fontSize:"clamp(22px, 2.8vw, 36px)",fontWeight:700,color:D.white,margin:"0 0 16px",lineHeight:1.15},children:t.name}),b.jsxs("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:15,color:D.muted,lineHeight:1.7,marginBottom:8},children:[b.jsx("span",{style:{color:D.silver,fontWeight:600},children:"The challenge:"})," ",t.problem]}),b.jsxs("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:15,color:D.muted,lineHeight:1.7,marginBottom:24},children:[b.jsx("span",{style:{color:D.silver,fontWeight:600},children:"What changed:"})," ",t.result]}),t.link&&b.jsx("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"glow-link",style:{fontFamily:"Sora, sans-serif",fontSize:13,fontWeight:600,color:D.pink,textDecoration:"none",paddingBottom:3,transition:"all 0.3s",position:"relative"},children:"View Live Project →"})]})]})}function Pw({tier:t,i:e,go:n}){const[i,r]=mr(.15),[s,o]=ut.useState(!1);return b.jsx(hl,{style:{flex:"1 1 300px",maxWidth:380,position:"relative",background:t.featured?`linear-gradient(165deg, ${D.purple}50, ${D.teal}30, ${D.pinkGlow})`:D.glass,border:`1px solid ${s?D.pink+"50":t.featured?D.pink+"30":D.border}`,borderRadius:24,padding:"clamp(28px, 3vw, 44px)",opacity:r?1:0,boxShadow:s?`0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${D.pinkGlow}`:"none"},children:b.jsxs("div",{ref:i,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{position:"relative",zIndex:1},children:[t.featured&&b.jsx("div",{style:{position:"absolute",top:-56,left:"50%",transform:"translateX(-50%)",background:`linear-gradient(90deg, ${D.pink}, ${D.teal})`,color:D.white,padding:"5px 20px",borderRadius:20,fontSize:10,fontFamily:"Sora, sans-serif",fontWeight:700,letterSpacing:1.5,textTransform:"uppercase",whiteSpace:"nowrap",zIndex:2},children:"Most Popular"}),b.jsx("h3",{style:{fontFamily:"Sora, sans-serif",fontSize:22,fontWeight:700,color:D.white,marginBottom:4},children:t.name}),b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:20,fontWeight:700,color:D.pink,marginBottom:4},children:t.price}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:12,color:D.muted,marginBottom:24},children:t.type}),b.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:t.items.map((a,l)=>b.jsxs("div",{style:{display:"flex",gap:10,alignItems:"flex-start"},children:[b.jsx("span",{style:{color:D.tealBright,fontWeight:700,fontSize:14,lineHeight:"20px",flexShrink:0},children:"✓"}),b.jsx("span",{style:{fontFamily:"Manrope, sans-serif",fontSize:13,color:D.muted,lineHeight:1.5},children:a})]},l))}),b.jsx("button",{onClick:()=>n("contact"),style:{width:"100%",marginTop:28,padding:"13px 0",background:t.featured?`linear-gradient(135deg, ${D.pink}, ${D.teal})`:"transparent",border:`1.5px solid ${t.featured?"transparent":D.teal}`,color:D.white,borderRadius:12,fontFamily:"Sora, sans-serif",fontSize:13,fontWeight:600,cursor:"pointer",transition:"all 0.35s"},onMouseEnter:a=>{a.target.style.background=`linear-gradient(135deg, ${D.pink}, ${D.teal})`,a.target.style.borderColor="transparent",a.target.style.transform="translateY(-2px)"},onMouseLeave:a=>{t.featured||(a.target.style.background="transparent",a.target.style.borderColor=D.teal),a.target.style.transform="translateY(0)"},children:"Let's Talk"})]})})}function Uw({type:t}){return t==="linkedin"?b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}):t==="facebook"?b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"})}):t==="instagram"?b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}):t==="whatsapp"?b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"})}):b.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"})})}function Dw({type:t}){const e={stroke:D.pink,fill:"none",strokeWidth:1.4},n={fill:D.silver};return t==="web"?b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[b.jsx("rect",{x:"3",y:"6",width:"26",height:"18",rx:"3",...e}),b.jsx("line",{x1:"3",y1:"11",x2:"29",y2:"11",stroke:D.pink,strokeWidth:"1",fill:"none"}),b.jsx("circle",{cx:"7",cy:"8.5",r:"0.9",...n}),b.jsx("circle",{cx:"10",cy:"8.5",r:"0.9",...n}),b.jsx("circle",{cx:"13",cy:"8.5",r:"0.9",...n})]}):t==="auto"?b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[b.jsx("circle",{cx:"16",cy:"16",r:"14",...e}),b.jsx("path",{d:"M10 16h3l2-5 4 10 2-5h3",stroke:D.silver,strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"})]}):t==="ai"?b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[b.jsx("rect",{x:"5",y:"5",width:"22",height:"22",rx:"6",...e}),b.jsx("circle",{cx:"12",cy:"14",r:"2",...n}),b.jsx("circle",{cx:"20",cy:"14",r:"2",...n}),b.jsx("path",{d:"M11 21c1.3 1.3 2.8 1.8 5 1.8s3.7-.5 5-1.8",stroke:D.silver,strokeWidth:"1.4",strokeLinecap:"round",fill:"none"})]}):t==="funnel"?b.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:b.jsx("path",{d:"M6 8h20l-6 8v8l-4 2V16z",...e,strokeLinejoin:"round"})}):t==="report"?b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[b.jsx("rect",{x:"7",y:"3",width:"18",height:"26",rx:"3",...e}),b.jsx("line",{x1:"12",y1:"11",x2:"20",y2:"11",stroke:D.silver,strokeWidth:"1.2"}),b.jsx("line",{x1:"12",y1:"16",x2:"20",y2:"16",stroke:D.silver,strokeWidth:"1.2"}),b.jsx("line",{x1:"12",y1:"21",x2:"17",y2:"21",stroke:D.silver,strokeWidth:"1.2"})]}):b.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[b.jsx("circle",{cx:"16",cy:"16",r:"14",...e}),b.jsx("line",{x1:"16",y1:"10",x2:"16",y2:"22",stroke:D.silver,strokeWidth:"1.8",strokeLinecap:"round"}),b.jsx("line",{x1:"10",y1:"16",x2:"22",y2:"16",stroke:D.silver,strokeWidth:"1.8",strokeLinecap:"round"})]})}const Iw=[{name:"Law Firm Website",problem:"A law firm needed a professional online presence that matched the quality of their legal work but had no site, no booking system, and no way for potential clients to reach them after hours.",result:"Delivered a full website with client intake forms, appointment booking, and a lead capture funnel. The firm went from invisible online to receiving qualified enquiries within the first week of launch.",link:"https://cuddly-triceratops-185741-03e406aee.framer.app/",img:"/project-1.png"},{name:"Property Inspection Report Automation",problem:"Property inspectors were manually taking photos, writing comments, and sending everything over email. Reports took hours to assemble, formatting was inconsistent, and nothing was standardised.",result:"Built a custom web-based form where inspectors select the property, upload photos, add comments, and mark pass or fail on site. One click generates a professional PDF report automatically. What used to take hours now takes minutes.",link:"https://buildcompmonthlyinspectionv2-2.vercel.app/",img:"/project-2.png"},{name:"Hotel Attendance and Payroll System",problem:"Hotel managers were tracking staff attendance on paper and spreadsheets. Payroll calculations were done manually every month, eating up time and leaving room for errors.",result:"Created a digital attendance form for managers to submit daily. The system tracks every shift, calculates hours automatically, and generates monthly payroll reports with zero manual math. Accurate, fast, and error-free.",img:"/project-3.png"},{name:"AI Email Management System",problem:"A business was drowning in emails with no way to prioritise, sort, or respond efficiently. Important messages got buried, and drafting replies took too much time.",result:"Built an automated system that tags and categorises incoming emails on arrival, then drafts context-aware replies for review before sending. Response time dropped dramatically and nothing gets missed.",link:"/email-case-study.pdf",img:"/project-4.png"}],Nw=[{icon:"web",title:"Professional Websites",desc:"Clean, conversion-focused websites that make your firm look as good online as you are in person. No templates."},{icon:"auto",title:"Automation and Workflows",desc:"We connect your tools, cut the repetitive stuff, and build systems that keep running while you focus on growth."},{icon:"funnel",title:"Lead Capture Funnels",desc:"From first click to booked call. We build the systems that turn visitors into conversations."},{icon:"ai",title:"AI-Assisted Systems",desc:"Smart intake forms, automated responses, and intelligent task routing. Practical tools that save real hours every week."},{icon:"report",title:"CRM, Reporting, and Operations",desc:"See your pipeline, track your clients, and know exactly where your business stands at any moment."},{icon:"more",title:"Whatever Your Firm Needs",desc:"Google Business setup, SMS campaigns, custom tools. If it helps your business grow, we build it."}],Fw=[{name:"Starter",price:"$600 – $800",type:"One-time payment depending on complexity",items:["Professional 5-page business website","Landing pages for campaigns or services","Contact forms and booking integration","Basic task automation to cut manual work","Mobile-responsive, fast-loading design","Google Business Profile setup and optimisation"],featured:!1},{name:"Growth",price:"$1,200 – $1,500",type:"One-time payment depending on complexity",items:["Everything in Starter","Lead capture funnels with automated follow-up","Email and SMS automation sequences","Workflows to connect and streamline your tools","Advanced task automation across your operations","CRM pipeline to track every lead and client","Monthly performance reporting"],featured:!0},{name:"Full Suite",price:"$500/mo",type:"Ongoing monthly subscription",items:["Everything in Starter and Growth included","Custom tools built for your operations (reports, forms, dashboards)","Workflow automation across your existing tools","Ongoing support, updates, and strategy calls","Priority response and continuous optimisation","Your dedicated digital team on retainer"],featured:!1}];function Ow(){const[t,e]=ut.useState(0),[n,i]=ut.useState(!1),[r,s]=ut.useState({name:"",email:"",business:"",message:""}),[o,a]=ut.useState(!1),[l,c]=ut.useState(!1),[d,p]=ut.useState(!1),[h,v]=ut.useState({x:0,y:0});ut.useEffect(()=>{setTimeout(()=>p(!0),300)},[]),ut.useEffect(()=>{let f=!1;const u=()=>{f||(requestAnimationFrame(()=>{e(window.scrollY),f=!1}),f=!0)};return window.addEventListener("scroll",u,{passive:!0}),()=>window.removeEventListener("scroll",u)},[]),ut.useEffect(()=>{const f=u=>v({x:u.clientX,y:u.clientY});return window.addEventListener("mousemove",f,{passive:!0}),()=>window.removeEventListener("mousemove",f)},[]);const y=ut.useCallback(f=>{var u;i(!1),(u=document.getElementById(f))==null||u.scrollIntoView({behavior:"smooth"})},[]),x=[{label:"Work",id:"work"},{label:"About",id:"about"},{label:"Team",id:"team"},{label:"Services",id:"services"},{label:"Contact",id:"contact"}];return b.jsxs("div",{style:{background:D.navy,color:D.silver,minHeight:"100vh",fontFamily:"Manrope, sans-serif",overflowX:"hidden"},children:[b.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Manrope:wght@400;500;600;700&display=swap');
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        html{scroll-behavior:smooth}body{background:${D.navy}}
        ::selection{background:${D.pink};color:${D.white}}
        @media(max-width:768px){
          .proj-row{flex-direction:column!important}
          .tier-wrap{flex-direction:column!important;align-items:center!important}
          .svc-grid{grid-template-columns:1fr 1fr!important}
          .vp-grid{grid-template-columns:1fr!important}
          .tools-grid{gap:8px!important}
          .desk-nav{display:none!important}
          .mob-btn{display:flex!important}
          .hero-logo{width:120px!important;height:120px!important}
          .cursor-glow{display:none!important}
        }
        @media(max-width:480px){.svc-grid{grid-template-columns:1fr!important}}
        @media(min-width:769px){.mob-btn{display:none!important}.mob-overlay{display:none!important}}
        input:focus,textarea:focus{outline:none;border-color:${D.pink}!important}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes tool-float-0{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes tool-float-1{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(2deg)}}
        @keyframes tool-float-2{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(-2deg)}}
        @keyframes tool-float-3{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:0.25}50%{transform:scale(1.1);opacity:0.1}}
        @keyframes spin-border{to{--angle:360deg}}
        @property --angle{syntax:"<angle>";initial-value:0deg;inherits:false}
        .glow-link::after{content:"";position:absolute;bottom:-2px;left:0;width:0;height:2px;background:linear-gradient(90deg,${D.pink},${D.teal});transition:width 0.4s cubic-bezier(.16,1,.3,1)}
        .glow-link:hover::after{width:100%}
      `}),b.jsx("div",{className:"cursor-glow",style:{position:"fixed",left:h.x-200,top:h.y-200,width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle, ${D.pinkGlow} 0%, transparent 70%)`,pointerEvents:"none",zIndex:1,transition:"left 0.1s linear, top 0.1s linear",mixBlendMode:"screen"}}),b.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"12px clamp(16px, 5vw, 60px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:t>60?"rgba(7,7,15,0.92)":"transparent",backdropFilter:t>60?"blur(20px) saturate(1.4)":"none",borderBottom:t>60?`1px solid ${D.border}`:"1px solid transparent",transition:"all 0.5s"},children:[b.jsx("div",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{cursor:"pointer"},children:b.jsx("img",{src:Vs,alt:"RJL Digital Solutions",style:{height:44,width:"auto",objectFit:"contain",filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}})}),b.jsxs("div",{className:"desk-nav",style:{display:"flex",gap:36,alignItems:"center"},children:[x.map(f=>b.jsx("button",{onClick:()=>y(f.id),style:{background:"none",border:"none",cursor:"pointer",fontFamily:"Manrope, sans-serif",fontSize:13,fontWeight:500,color:D.muted,transition:"color 0.3s"},onMouseEnter:u=>u.target.style.color=D.white,onMouseLeave:u=>u.target.style.color=D.muted,children:f.label},f.id)),b.jsx("button",{onClick:()=>y("contact"),style:{background:"transparent",color:D.pink,border:`1.5px solid ${D.pink}50`,padding:"9px 22px",borderRadius:10,fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,cursor:"pointer",transition:"all 0.35s"},onMouseEnter:f=>{f.target.style.background=D.pink,f.target.style.color=D.white,f.target.style.borderColor=D.pink,f.target.style.boxShadow=`0 0 30px ${D.pinkGlow}`},onMouseLeave:f=>{f.target.style.background="transparent",f.target.style.color=D.pink,f.target.style.borderColor=`${D.pink}50`,f.target.style.boxShadow="none"},children:"Tell Us Your Challenge"})]}),b.jsxs("button",{className:"mob-btn",onClick:()=>i(!n),style:{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",gap:5,padding:8},children:[b.jsx("span",{style:{width:24,height:2,background:D.pink,borderRadius:2,transition:"all 0.3s",transform:n?"rotate(45deg) translateY(7px)":"none"}}),b.jsx("span",{style:{width:24,height:2,background:D.pink,borderRadius:2,opacity:n?0:1,transition:"opacity 0.3s"}}),b.jsx("span",{style:{width:24,height:2,background:D.pink,borderRadius:2,transition:"all 0.3s",transform:n?"rotate(-45deg) translateY(-7px)":"none"}})]})]}),n&&b.jsxs("div",{className:"mob-overlay",style:{position:"fixed",inset:0,zIndex:99,background:"rgba(7,7,15,0.97)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:36},children:[b.jsx("img",{src:Vs,alt:"RJL",style:{width:80,height:80,objectFit:"contain",marginBottom:16}}),x.map(f=>b.jsx("button",{onClick:()=>y(f.id),style:{background:"none",border:"none",cursor:"pointer",fontFamily:"Sora, sans-serif",fontSize:28,fontWeight:600,color:D.silver},children:f.label},f.id))]}),b.jsxs("section",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",padding:"120px clamp(20px, 8vw, 100px) 80px",position:"relative",overflow:"hidden"},children:[b.jsx(Cw,{}),b.jsxs("div",{style:{position:"relative",zIndex:2,marginBottom:36,opacity:d?1:0,transform:d?"scale(1)":"scale(0.7)",transition:"all 1.4s cubic-bezier(.16,1,.3,1) 0.2s"},children:[b.jsx("div",{style:{position:"absolute",inset:-24,borderRadius:"50%",border:`1px solid ${D.pink}20`,animation:"pulse 4s ease-in-out infinite"}}),b.jsx("img",{className:"hero-logo",src:Vs,alt:"RJL Digital Solutions",style:{width:160,height:160,objectFit:"contain",filter:"drop-shadow(0 0 40px rgba(255,45,120,0.2)) drop-shadow(0 0 80px rgba(0,109,122,0.15))",position:"relative",zIndex:1}})]}),b.jsx(bw,{text:"We build the systems behind businesses that never miss a beat.",delay:600,style:{fontFamily:"Sora, sans-serif",fontWeight:800,fontSize:"clamp(28px, 5.2vw, 64px)",lineHeight:1.08,color:D.white,maxWidth:860,marginBottom:24,letterSpacing:"-0.025em",position:"relative",zIndex:2}}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:"clamp(15px, 1.7vw, 18px)",color:D.muted,maxWidth:540,lineHeight:1.65,marginBottom:48,position:"relative",zIndex:2,opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transition:"all 1s cubic-bezier(.16,1,.3,1) 1.4s"},children:"Websites. Automation. AI. Funnels. CRM. Whatever your firm needs to stop losing leads and start growing on autopilot."}),b.jsxs("div",{style:{display:"flex",gap:16,flexWrap:"wrap",justifyContent:"center",position:"relative",zIndex:2},children:[b.jsx("button",{onClick:()=>y("contact"),style:{background:`linear-gradient(135deg, ${D.pink}, ${D.teal})`,color:D.white,border:"none",padding:"16px 40px",borderRadius:14,fontFamily:"Sora, sans-serif",fontSize:15,fontWeight:600,cursor:"pointer",transition:"all 0.4s",boxShadow:`0 0 40px ${D.pinkGlow}, 0 8px 30px rgba(0,0,0,0.3)`,opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transitionDelay:"1.6s"},onMouseEnter:f=>{f.target.style.transform="translateY(-3px) scale(1.05)",f.target.style.boxShadow=`0 0 60px ${D.pinkGlow}, 0 20px 50px rgba(0,0,0,0.3)`},onMouseLeave:f=>{f.target.style.transform="translateY(0) scale(1)",f.target.style.boxShadow=`0 0 40px ${D.pinkGlow}, 0 8px 30px rgba(0,0,0,0.3)`},children:"Let Us Know How We Can Help"}),b.jsx("a",{href:"https://calendly.com/rjldigitalsolutions94/30min",target:"_blank",rel:"noopener noreferrer",style:{background:"transparent",color:D.white,border:`1.5px solid ${D.white}40`,padding:"16px 36px",borderRadius:14,fontFamily:"Sora, sans-serif",fontSize:15,fontWeight:600,cursor:"pointer",transition:"all 0.4s",textDecoration:"none",display:"inline-block",opacity:d?1:0,transform:d?"translateY(0)":"translateY(20px)",transitionDelay:"1.8s"},onMouseEnter:f=>{f.target.style.transform="translateY(-3px)",f.target.style.borderColor=D.pink,f.target.style.color=D.pink,f.target.style.boxShadow=`0 0 30px ${D.pinkGlow}`},onMouseLeave:f=>{f.target.style.transform="translateY(0)",f.target.style.borderColor=`${D.white}40`,f.target.style.color=D.white,f.target.style.boxShadow="none"},children:"Book a Free Strategy Call"})]}),b.jsxs("div",{style:{position:"absolute",bottom:36,left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:10,opacity:t>80?0:.4,transition:"opacity 0.5s",zIndex:2},children:[b.jsx("span",{style:{fontSize:10,fontFamily:"Manrope, sans-serif",color:D.muted,letterSpacing:4,textTransform:"uppercase"},children:"Scroll"}),b.jsx("div",{style:{width:20,height:32,borderRadius:10,border:`1.5px solid ${D.muted}40`,position:"relative"},children:b.jsx("div",{style:{width:3,height:8,borderRadius:2,background:D.pink,position:"absolute",left:"50%",top:6,transform:"translateX(-50%)",animation:"float 2s ease-in-out infinite"}})})]})]}),b.jsx(Ei,{style:{padding:"60px clamp(20px, 8vw, 120px)",borderTop:`1px solid ${D.border}`,borderBottom:`1px solid ${D.border}`},children:b.jsx("div",{className:"vp-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"24px 32px",maxWidth:900,margin:"0 auto"},children:[{icon:"⚡",title:"Built to Save You Time",desc:"We automate the repetitive work that eats your hours so your team can focus on what actually matters."},{icon:"🔧",title:"Custom, Not Cookie-Cutter",desc:"No templates, no one-size-fits-all. Every system is designed around how your business actually runs."},{icon:"🤝",title:"Partners, Not Just Vendors",desc:"We have sat in your seat. We know the pressure, the deadlines, and the cost of broken systems."},{icon:"🚀",title:"Built to Grow With You",desc:"Start with what you need now. As your business scales, your systems scale with it."}].map((f,u)=>{const[g,m]=mr(.1);return b.jsxs("div",{ref:g,style:{display:"flex",gap:16,alignItems:"flex-start",background:D.glass,border:`1px solid ${D.border}`,borderRadius:16,padding:"24px 28px",transition:"all 0.5s cubic-bezier(.16,1,.3,1)",cursor:"default",opacity:m?1:0,transform:m?"translateY(0)":"translateY(30px)",transitionDelay:`${u*100}ms`},onMouseEnter:S=>{S.currentTarget.style.borderColor=`${D.pink}35`,S.currentTarget.style.transform="translateY(-4px)",S.currentTarget.style.boxShadow=`0 8px 30px rgba(0,0,0,0.2), 0 0 20px ${D.pinkGlow}`},onMouseLeave:S=>{S.currentTarget.style.borderColor=D.border,S.currentTarget.style.transform="translateY(0)",S.currentTarget.style.boxShadow="none"},children:[b.jsx("div",{style:{fontSize:26,flexShrink:0,marginTop:2},children:f.icon}),b.jsxs("div",{children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:15,fontWeight:700,color:D.white,marginBottom:6},children:f.title}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:13,color:D.muted,lineHeight:1.6},children:f.desc})]})]},u)})})}),b.jsx(Ei,{id:"about",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)"},children:b.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16,textAlign:"center"},children:"Our Story"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,marginBottom:32,letterSpacing:"-0.02em",textAlign:"center"},children:"We have been inside the businesses we now help build."}),b.jsx("div",{style:{width:60,height:3,background:`linear-gradient(90deg, ${D.pink}, ${D.teal})`,borderRadius:2,margin:"0 auto 32px"}}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:"clamp(15px, 1.5vw, 17px)",color:D.muted,lineHeight:1.85,marginBottom:20,textAlign:"center"},children:"RJL Digital Solutions started because Reign and Jessica, together with their team, spent years doing the work firsthand. Legal operations, business development, B2B sales, client communications, hospitality management, property inspections consulting, immigration consulting. They kept seeing the same problems everywhere: talented teams buried under manual processes, leads falling through the cracks, and growth stuck behind systems that simply had not kept up."}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:"clamp(15px, 1.5vw, 17px)",color:D.muted,lineHeight:1.85,marginBottom:20,textAlign:"center"},children:"So they started building the systems they wished they had. Not off-the-shelf software, but custom solutions designed around how a business actually runs. Built by people who have lived on the operational side and know what it feels like when things break down at 5pm on a Friday."}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:"clamp(15px, 1.5vw, 17px)",color:D.silver,lineHeight:1.85,textAlign:"center",fontWeight:500},children:"That is the difference. We do not just understand the technology. We understand the pressure it is supposed to relieve."})]})}),b.jsx(Ei,{id:"team",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)"},children:b.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[b.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(40px, 5vw, 72px)"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16},children:"The People Behind The Work"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,letterSpacing:"-0.02em",maxWidth:700,margin:"0 auto"},children:"Meet the team."}),b.jsx("div",{style:{width:60,height:3,background:`linear-gradient(90deg, ${D.pink}, ${D.teal})`,borderRadius:2,margin:"24px auto 0"}})]}),b.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:28},children:[{name:"Reign Latonio",role:"Co-CEO / Senior Digital Operations Lead",desc:"Leads strategy, technical delivery, and system architecture. Reign ensures every project is built to solve the real problem, not just the visible one.",img:"data:image/jpeg;base64,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",linkedin:"https://www.linkedin.com/in/reign-latonio-9b7959207/"},{name:"Jessica Harris",role:"Co-CEO / Client Relations Lead",desc:"Manages client communications, onboarding, and business development. Jessica makes sure every client feels supported from first contact to final delivery.",img:"data:image/jpeg;base64,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",linkedin:"#"},{name:"Gly Taylor",role:"Research and Development Specialist",desc:"Leads market research, lead generation, and prospecting. Gly ensures we understand the industries we serve before we start building.",img:"data:image/jpeg;base64,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",linkedin:"#"},{name:"Bryan Apollo",role:"Digital Operations Specialist",desc:"Handles automation workflows, AI video production, and marketing systems. Bryan builds and manages the operational tools that power client projects.",img:"data:image/jpeg;base64,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",linkedin:"#"}].map((f,u)=>b.jsxs(hl,{style:{background:D.glass,border:`1px solid ${D.border}`,borderRadius:20,overflow:"hidden",cursor:"default"},children:[b.jsxs("div",{style:{position:"relative"},children:[b.jsx("img",{src:f.img,alt:f.name,style:{width:"100%",aspectRatio:"3/4",objectFit:"cover",objectPosition:"top",display:"block"}}),b.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top, ${D.navy} 0%, transparent 50%)`}})]}),b.jsxs("div",{style:{padding:"clamp(18px, 2vw, 28px)"},children:[b.jsx("h3",{style:{fontFamily:"Sora, sans-serif",fontSize:18,fontWeight:700,color:D.white,marginBottom:4},children:f.name}),b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:11,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:1.5,marginBottom:12},children:f.role}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:13,color:D.muted,lineHeight:1.6,marginBottom:16},children:f.desc}),f.linkedin!=="#"&&b.jsxs("a",{href:f.linkedin,target:"_blank",rel:"noreferrer",style:{display:"inline-flex",alignItems:"center",gap:6,color:D.teal,fontSize:12,fontWeight:600,textDecoration:"none"},children:[b.jsx("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor",children:b.jsx("path",{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"})}),"Connect on LinkedIn"]})]})]},u))})]})}),b.jsxs("section",{id:"work",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)",maxWidth:1200,margin:"0 auto"},children:[b.jsxs(Ei,{children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16,textAlign:"center"},children:"Featured Work"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,textAlign:"center",marginBottom:"clamp(48px, 6vw, 80px)",letterSpacing:"-0.02em"},children:"Real problems. Real systems. Real results."})]}),Iw.map((f,u)=>b.jsx(Lw,{p:f,i:u},u))]}),b.jsx(Ei,{id:"capabilities",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)",background:`linear-gradient(180deg, transparent 0%, ${D.purple}10 50%, transparent 100%)`},children:b.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[b.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(40px, 5vw, 72px)"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16},children:"What We Do"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,letterSpacing:"-0.02em",maxWidth:700,margin:"0 auto"},children:"Your firm does not fit in a box. Neither do we."})]}),b.jsx("div",{className:"svc-grid",style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:20},children:Nw.map((f,u)=>{const[g,m]=mr(.1);return b.jsx(hl,{style:{background:D.glass,border:`1px solid ${D.border}`,borderRadius:20,padding:"clamp(22px, 2.5vw, 32px)",opacity:m?1:0,cursor:"default"},children:b.jsxs("div",{ref:g,style:{position:"relative",zIndex:1},children:[b.jsx("div",{style:{marginBottom:14},children:b.jsx(Dw,{type:f.icon})}),b.jsx("h3",{style:{fontFamily:"Sora, sans-serif",fontSize:16,fontWeight:700,color:D.white,marginBottom:8},children:f.title}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:13,color:D.muted,lineHeight:1.6},children:f.desc})]})},u)})})]})}),b.jsx(Ei,{style:{padding:"clamp(70px, 10vw, 100px) clamp(20px, 8vw, 120px)"},children:b.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[b.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(32px, 4vw, 56px)"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16},children:"Our Toolkit"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(24px, 3vw, 38px)",color:D.white,lineHeight:1.12,letterSpacing:"-0.02em"},children:"Tools and platforms we work with every day."})]}),b.jsx("div",{className:"tools-grid",style:{display:"flex",flexWrap:"wrap",justifyContent:"center",gap:28,alignItems:"center",padding:"20px 0"},children:[{name:"Google Workspace",color:"#4285F4",path:"M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm-.004 4.174c2.19 0 4.016.722 5.42 2.148l-2.194 2.14C14.348 7.56 13.283 7.1 12 7.1c-2.738 0-4.967 2.272-4.967 5.074 0 2.803 2.229 5.075 4.967 5.075 2.57 0 3.978-1.468 4.314-3.102H12v-2.89h7.633c.09.493.139 1.007.139 1.545 0 4.616-3.086 7.898-7.776 7.898C6.663 20.7 2.4 16.478 2.4 12S6.663 3.3 11.996 4.174z"},{name:"n8n",color:"#EA4B71",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.5 7h3v4.5h4.5v3h-4.5V19h-3v-4.5H6v-3h4.5V7z"},{name:"Make",color:"#6D00CC",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 7.5l7 4.5-7 4.5v-9z"},{name:"Claude AI",color:"#D4A574",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 4a8 8 0 110 16 8 8 0 010-16zm0 2.5c-1.5 0-2.7.6-3.5 1.5-.4.5-.3 1.1.2 1.4.5.3 1.1.2 1.4-.3.5-.5 1.1-.8 1.9-.8s1.4.3 1.9.8c.3.5.9.6 1.4.3.5-.3.6-.9.2-1.4C14.7 7.1 13.5 6.5 12 6.5zm-3 5.5h6c0 1.7-1.3 3-3 3s-3-1.3-3-3z"},{name:"Gemini",color:"#4285F4",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3c2.5 0 4.5 2 4.5 4.5S14.5 12 12 12 7.5 10 7.5 7.5 9.5 3 12 3zm0 18c-2.5 0-4.5-2-4.5-4.5S9.5 12 12 12s4.5 2 4.5 4.5S14.5 21 12 21z"},{name:"Apps Script",color:"#4285F4",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM9 7h6l-3 5 3 5H9l3-5-3-5z"},{name:"Asana",color:"#F06A6A",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 5.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm-4.5 7a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm9 0a2.5 2.5 0 110 5 2.5 2.5 0 010-5z"},{name:"Monday",color:"#FF3D57",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM7 8a1.5 1.5 0 011.5 1.5v5a1.5 1.5 0 01-3 0v-5A1.5 1.5 0 017 8zm5-1a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-3 0v-6A1.5 1.5 0 0112 7zm5 3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-3 0v-3A1.5 1.5 0 0117 10z"},{name:"Slack",color:"#4A154B",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 6.5a1 1 0 112 0V10h1.5a1 1 0 110 2H10V6.5zM6.5 10a1 1 0 110 2H8v1.5a1 1 0 11-2 0V10H6.5zm4 7.5a1 1 0 11-2 0V14H7a1 1 0 110-2h3.5v5.5zm7-4a1 1 0 110-2H16v-1.5a1 1 0 112 0V14h-0.5z"},{name:"WhatsApp",color:"#25D366",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.04 4.2c4.293 0 7.78 3.487 7.78 7.78 0 4.294-3.487 7.78-7.78 7.78a7.75 7.75 0 01-3.72-.95L4.2 19.8l1.01-3.69a7.74 7.74 0 01-1.05-3.89c0-4.293 3.487-7.78 7.78-7.78l.1-.02z"},{name:"Microsoft",color:"#00A4EF",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6 6h5v5H6V6zm7 0h5v5h-5V6zM6 13h5v5H6v-5zm7 0h5v5h-5v-5z"},{name:"ReLeased",color:"#00B4D8",path:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3 7h2v3h2V7h2v10h-2v-4h-2v4H9V7z"}].map((f,u)=>{const[g,m]=mr(.05),S=3+u%5*.8,C=u*.4%3;return b.jsxs("div",{ref:g,title:f.name,style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8,opacity:m?1:0,transform:m?"translateY(0)":"translateY(30px)",transition:`opacity 0.6s cubic-bezier(.16,1,.3,1) ${u*80}ms, transform 0.6s cubic-bezier(.16,1,.3,1) ${u*80}ms`,animation:m?`tool-float-${u%4} ${S}s ease-in-out ${C}s infinite`:"none",cursor:"default"},children:[b.jsx("div",{style:{width:64,height:64,borderRadius:16,background:D.glass,border:`1px solid ${D.border}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.4s"},onMouseEnter:A=>{A.currentTarget.style.borderColor=f.color,A.currentTarget.style.boxShadow=`0 8px 30px ${f.color}25`,A.currentTarget.style.transform="scale(1.15)"},onMouseLeave:A=>{A.currentTarget.style.borderColor=D.border,A.currentTarget.style.boxShadow="none",A.currentTarget.style.transform="scale(1)"},children:b.jsx("svg",{width:"28",height:"28",viewBox:"0 0 24 24",fill:f.color,children:b.jsx("path",{d:f.path})})}),b.jsx("span",{style:{fontFamily:"Manrope, sans-serif",fontSize:10,color:D.muted,textAlign:"center",maxWidth:70},children:f.name})]},u)})}),b.jsx("p",{style:{textAlign:"center",marginTop:24,fontFamily:"Manrope, sans-serif",fontSize:13,color:D.muted},children:"And whatever else your project needs. We learn fast."})]})}),b.jsx(Ei,{id:"services",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)"},children:b.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[b.jsxs("div",{style:{textAlign:"center",marginBottom:"clamp(40px, 5vw, 72px)"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16},children:"How We Work"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,letterSpacing:"-0.02em"},children:"Pick a starting point. We will build from there."})]}),b.jsx("div",{className:"tier-wrap",style:{display:"flex",gap:24,justifyContent:"center",flexWrap:"wrap"},children:Fw.map((f,u)=>b.jsx(Pw,{tier:f,i:u,go:y},u))}),b.jsxs("p",{style:{textAlign:"center",marginTop:40,fontFamily:"Manrope, sans-serif",fontSize:14,color:D.muted,lineHeight:1.7,maxWidth:560,marginLeft:"auto",marginRight:"auto"},children:["Need something outside these packages? We also take on custom builds at ",b.jsx("span",{style:{color:D.pink,fontWeight:600},children:"$25/hr"}),", depending on complexity. Just tell us what you need and we will scope it out together."]})]})}),b.jsx(Ei,{id:"contact",style:{padding:"clamp(70px, 10vw, 140px) clamp(20px, 8vw, 120px)",background:`linear-gradient(180deg, transparent, ${D.purple}10)`},children:b.jsxs("div",{style:{maxWidth:600,margin:"0 auto",textAlign:"center"},children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:12,fontWeight:600,color:D.pink,textTransform:"uppercase",letterSpacing:4,marginBottom:16},children:"Let's Talk"}),b.jsx("h2",{style:{fontFamily:"Sora, sans-serif",fontWeight:700,fontSize:"clamp(26px, 3.5vw, 44px)",color:D.white,lineHeight:1.12,marginBottom:16,letterSpacing:"-0.02em"},children:"Tell us what is slowing you down."}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:15,color:D.muted,lineHeight:1.65,marginBottom:48},children:"No pitch decks. No pressure. Just a straight conversation about what you need and whether we can help you build it."}),o?b.jsxs("div",{style:{padding:48,borderRadius:24,background:D.glass,border:`1px solid ${D.pink}30`},children:[b.jsx("img",{src:Vs,alt:"RJL",style:{width:56,height:56,objectFit:"contain",marginBottom:20}}),b.jsx("h3",{style:{fontFamily:"Sora, sans-serif",fontSize:22,color:D.white,marginBottom:12},children:"We will be in touch soon."}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:15,color:D.muted},children:"Thanks for reaching out. Expect to hear from us within 24 hours."})]}):b.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:18,textAlign:"left"},children:[[{key:"name",label:"Your Name",ph:"Full name"},{key:"email",label:"Email",ph:"you@company.com"},{key:"business",label:"Business or Firm Name",ph:"Your company"}].map(f=>b.jsxs("div",{children:[b.jsx("label",{style:{fontFamily:"Manrope, sans-serif",fontSize:12,fontWeight:600,color:D.silver,display:"block",marginBottom:8},children:f.label}),b.jsx("input",{type:f.key==="email"?"email":"text",placeholder:f.ph,value:r[f.key],onChange:u=>s(g=>({...g,[f.key]:u.target.value})),style:{width:"100%",padding:"14px 18px",borderRadius:12,background:D.glass,border:`1px solid ${D.border}`,color:D.white,fontFamily:"Manrope, sans-serif",fontSize:15,transition:"all 0.3s"},onFocus:u=>{u.target.style.boxShadow=`0 0 0 3px ${D.pink}12`,u.target.style.borderColor=D.pink},onBlur:u=>{u.target.style.boxShadow="none",u.target.style.borderColor=D.border}})]},f.key)),b.jsxs("div",{children:[b.jsx("label",{style:{fontFamily:"Manrope, sans-serif",fontSize:12,fontWeight:600,color:D.silver,display:"block",marginBottom:8},children:"What are you looking to solve?"}),b.jsx("textarea",{placeholder:"Tell us about the bottleneck, the challenge, or the system you need...",value:r.message,onChange:f=>s(u=>({...u,message:f.target.value})),rows:4,style:{width:"100%",padding:"14px 18px",borderRadius:12,background:D.glass,border:`1px solid ${D.border}`,color:D.white,fontFamily:"Manrope, sans-serif",fontSize:15,resize:"vertical",transition:"all 0.3s"},onFocus:f=>{f.target.style.boxShadow=`0 0 0 3px ${D.pink}12`,f.target.style.borderColor=D.pink},onBlur:f=>{f.target.style.boxShadow="none",f.target.style.borderColor=D.border}})]}),b.jsx("button",{onClick:async()=>{if(!(!r.name||!r.email||!r.message)){c(!0);try{await fetch("https://formspree.io/f/xjybeyvb",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:r.name,email:r.email,business:r.business,message:r.message})}),a(!0)}catch{alert("Something went wrong. Please try again or email us directly.")}finally{c(!1)}}},disabled:l,style:{width:"100%",padding:"16px 0",marginTop:8,background:l?D.muted:`linear-gradient(135deg, ${D.pink}, ${D.teal})`,border:"none",borderRadius:14,color:D.white,fontFamily:"Sora, sans-serif",fontSize:15,fontWeight:600,cursor:l?"wait":"pointer",transition:"all 0.4s",boxShadow:`0 0 40px ${D.pinkGlow}, 0 8px 30px rgba(0,0,0,0.2)`,opacity:l?.7:1},onMouseEnter:f=>{l||(f.target.style.transform="translateY(-2px) scale(1.02)",f.target.style.boxShadow="0 0 60px rgba(255,45,120,0.3), 0 16px 50px rgba(0,0,0,0.3)")},onMouseLeave:f=>{f.target.style.transform="translateY(0) scale(1)",f.target.style.boxShadow=`0 0 40px ${D.pinkGlow}, 0 8px 30px rgba(0,0,0,0.2)`},children:l?"Sending...":"Start the Conversation"})]})]})}),b.jsxs("footer",{style:{padding:"56px clamp(20px, 8vw, 120px) 36px",borderTop:`1px solid ${D.border}`,maxWidth:1200,margin:"0 auto"},children:[b.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:24},children:[b.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[b.jsx("img",{src:Vs,alt:"RJL Digital Solutions",style:{height:52,width:"auto",objectFit:"contain",filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.3))"}}),b.jsxs("div",{children:[b.jsx("p",{style:{fontFamily:"Sora, sans-serif",fontSize:14,fontWeight:700,color:D.white,marginBottom:4},children:"RJL Digital Solutions"}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:12,color:D.muted},children:"Automation and AI Systems"})]})]}),b.jsx("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[{type:"linkedin",url:"https://www.linkedin.com/in/reign-latonio-9b7959207/"},{type:"facebook",url:"https://www.facebook.com/profile.php?id=61593400359905"},{type:"instagram",url:"https://www.instagram.com/reign_virtual_professional"},{type:"whatsapp",url:"https://api.whatsapp.com/send?phone=639913359128"},{type:"email",url:"mailto:rjldigitalsolutions94@gmail.com"}].map(f=>b.jsx("a",{href:f.url,target:"_blank",rel:"noopener noreferrer",style:{color:D.muted,display:"flex",transition:"all 0.3s",width:36,height:36,borderRadius:10,border:`1px solid ${D.border}`,alignItems:"center",justifyContent:"center",textDecoration:"none"},onMouseEnter:u=>{u.currentTarget.style.color=D.pink,u.currentTarget.style.borderColor=`${D.pink}50`,u.currentTarget.style.transform="translateY(-3px)",u.currentTarget.style.boxShadow=`0 4px 20px ${D.pinkGlow}`},onMouseLeave:u=>{u.currentTarget.style.color=D.muted,u.currentTarget.style.borderColor=D.border,u.currentTarget.style.transform="translateY(0)",u.currentTarget.style.boxShadow="none"},children:b.jsx(Uw,{type:f.type})},f.type))})]}),b.jsxs("div",{style:{marginTop:40,paddingTop:20,borderTop:`1px solid ${D.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12},children:[b.jsxs("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:11,color:"rgba(139,141,156,0.5)"},children:["© ",new Date().getFullYear()," RJL Digital Solutions. All rights reserved."]}),b.jsx("p",{style:{fontFamily:"Manrope, sans-serif",fontSize:11,color:"rgba(139,141,156,0.35)"},children:"Built with care by real people who get it."})]})]})]})}ju.createRoot(document.getElementById("root")).render(b.jsx(iv.StrictMode,{children:b.jsx(Ow,{})}));
