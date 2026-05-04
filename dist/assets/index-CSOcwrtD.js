(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vv={exports:{}},hc={},_v={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fa=Symbol.for("react.element"),Y1=Symbol.for("react.portal"),X1=Symbol.for("react.fragment"),J1=Symbol.for("react.strict_mode"),Z1=Symbol.for("react.profiler"),eE=Symbol.for("react.provider"),tE=Symbol.for("react.context"),nE=Symbol.for("react.forward_ref"),rE=Symbol.for("react.suspense"),iE=Symbol.for("react.memo"),sE=Symbol.for("react.lazy"),Sm=Symbol.iterator;function oE(t){return t===null||typeof t!="object"?null:(t=Sm&&t[Sm]||t["@@iterator"],typeof t=="function"?t:null)}var wv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ev=Object.assign,Tv={};function io(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||wv}io.prototype.isReactComponent={};io.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};io.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Iv(){}Iv.prototype=io.prototype;function _f(t,e,n){this.props=t,this.context=e,this.refs=Tv,this.updater=n||wv}var wf=_f.prototype=new Iv;wf.constructor=_f;Ev(wf,io.prototype);wf.isPureReactComponent=!0;var km=Array.isArray,xv=Object.prototype.hasOwnProperty,Ef={current:null},Sv={key:!0,ref:!0,__self:!0,__source:!0};function kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)xv.call(e,r)&&!Sv.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Fa,type:t,key:s,ref:o,props:i,_owner:Ef.current}}function aE(t,e){return{$$typeof:Fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fa}function lE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Am=/\/+/g;function hd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lE(""+t.key):e.toString(36)}function ru(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fa:case Y1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hd(o,0):r,km(i)?(n="",t!=null&&(n=t.replace(Am,"$&/")+"/"),ru(i,e,n,"",function(d){return d})):i!=null&&(Tf(i)&&(i=aE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Am,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",km(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+hd(s,l);o+=ru(s,e,n,u,i)}else if(u=oE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+hd(s,l++),o+=ru(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Rl(t,e,n){if(t==null)return t;var r=[],i=0;return ru(t,r,"","",function(s){return e.call(n,s,i++)}),r}function uE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},iu={transition:null},cE={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:iu,ReactCurrentOwner:Ef};function Av(){throw Error("act(...) is not supported in production builds of React.")}me.Children={map:Rl,forEach:function(t,e,n){Rl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Rl(t,function(){e++}),e},toArray:function(t){return Rl(t,function(e){return e})||[]},only:function(t){if(!Tf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=io;me.Fragment=X1;me.Profiler=Z1;me.PureComponent=_f;me.StrictMode=J1;me.Suspense=rE;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;me.act=Av;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ev({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ef.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)xv.call(e,u)&&!Sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Fa,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:tE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:eE,_context:t},t.Consumer=t};me.createElement=kv;me.createFactory=function(t){var e=kv.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:nE,render:t}};me.isValidElement=Tf;me.lazy=function(t){return{$$typeof:sE,_payload:{_status:-1,_result:t},_init:uE}};me.memo=function(t,e){return{$$typeof:iE,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=iu.transition;iu.transition={};try{t()}finally{iu.transition=e}};me.unstable_act=Av;me.useCallback=function(t,e){return Nt.current.useCallback(t,e)};me.useContext=function(t){return Nt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Nt.current.useEffect(t,e)};me.useId=function(){return Nt.current.useId()};me.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Nt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};me.useRef=function(t){return Nt.current.useRef(t)};me.useState=function(t){return Nt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Nt.current.useTransition()};me.version="18.3.1";_v.exports=me;var q=_v.exports;const Cv=Q1(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dE=q,hE=Symbol.for("react.element"),fE=Symbol.for("react.fragment"),pE=Object.prototype.hasOwnProperty,mE=dE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gE={key:!0,ref:!0,__self:!0,__source:!0};function Rv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)pE.call(e,r)&&!gE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hE,type:t,key:s,ref:o,props:i,_owner:mE.current}}hc.Fragment=fE;hc.jsx=Rv;hc.jsxs=Rv;vv.exports=hc;var f=vv.exports,th={},bv={exports:{}},tn={},Pv={exports:{}},Nv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,se){var ie=K.length;K.push(se);e:for(;0<ie;){var Pe=ie-1>>>1,ke=K[Pe];if(0<i(ke,se))K[Pe]=se,K[ie]=ke,ie=Pe;else break e}}function n(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var se=K[0],ie=K.pop();if(ie!==se){K[0]=ie;e:for(var Pe=0,ke=K.length,Fe=ke>>>1;Pe<Fe;){var qt=2*(Pe+1)-1,Ot=K[qt],rn=qt+1,sn=K[rn];if(0>i(Ot,ie))rn<ke&&0>i(sn,Ot)?(K[Pe]=sn,K[rn]=ie,Pe=rn):(K[Pe]=Ot,K[qt]=ie,Pe=qt);else if(rn<ke&&0>i(sn,ie))K[Pe]=sn,K[rn]=ie,Pe=rn;else break e}}return se}function i(K,se){var ie=K.sortIndex-se.sortIndex;return ie!==0?ie:K.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,y=null,_=3,A=!1,N=!1,D=!1,L=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(K){for(var se=n(d);se!==null;){if(se.callback===null)r(d);else if(se.startTime<=K)r(d),se.sortIndex=se.expirationTime,e(u,se);else break;se=n(d)}}function O(K){if(D=!1,k(K),!N)if(n(u)!==null)N=!0,On($);else{var se=n(d);se!==null&&Wt(O,se.startTime-K)}}function $(K,se){N=!1,D&&(D=!1,S(v),v=-1),A=!0;var ie=_;try{for(k(se),y=n(u);y!==null&&(!(y.expirationTime>se)||K&&!C());){var Pe=y.callback;if(typeof Pe=="function"){y.callback=null,_=y.priorityLevel;var ke=Pe(y.expirationTime<=se);se=t.unstable_now(),typeof ke=="function"?y.callback=ke:y===n(u)&&r(u),k(se)}else r(u);y=n(u)}if(y!==null)var Fe=!0;else{var qt=n(d);qt!==null&&Wt(O,qt.startTime-se),Fe=!1}return Fe}finally{y=null,_=ie,A=!1}}var W=!1,w=null,v=-1,E=5,x=-1;function C(){return!(t.unstable_now()-x<E)}function R(){if(w!==null){var K=t.unstable_now();x=K;var se=!0;try{se=w(!0,K)}finally{se?I():(W=!1,w=null)}}else W=!1}var I;if(typeof T=="function")I=function(){T(R)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,$t=Ce.port2;Ce.port1.onmessage=R,I=function(){$t.postMessage(null)}}else I=function(){L(R,0)};function On(K){w=K,W||(W=!0,I())}function Wt(K,se){v=L(function(){K(t.unstable_now())},se)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_continueExecution=function(){N||A||(N=!0,On($))},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(K){switch(_){case 1:case 2:case 3:var se=3;break;default:se=_}var ie=_;_=se;try{return K()}finally{_=ie}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ie=_;_=K;try{return se()}finally{_=ie}},t.unstable_scheduleCallback=function(K,se,ie){var Pe=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?Pe+ie:Pe):ie=Pe,K){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ie+ke,K={id:p++,callback:se,priorityLevel:K,startTime:ie,expirationTime:ke,sortIndex:-1},ie>Pe?(K.sortIndex=ie,e(d,K),n(u)===null&&K===n(d)&&(D?(S(v),v=-1):D=!0,Wt(O,ie-Pe))):(K.sortIndex=ke,e(u,K),N||A||(N=!0,On($))),K},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(K){var se=_;return function(){var ie=_;_=se;try{return K.apply(this,arguments)}finally{_=ie}}}})(Nv);Pv.exports=Nv;var yE=Pv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vE=q,en=yE;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dv=new Set,fa={};function Ji(t,e){$s(t,e),$s(t+"Capture",e)}function $s(t,e){for(fa[t]=e,t=0;t<e.length;t++)Dv.add(e[t])}var _r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nh=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cm={},Rm={};function wE(t){return nh.call(Rm,t)?!0:nh.call(Cm,t)?!1:_E.test(t)?Rm[t]=!0:(Cm[t]=!0,!1)}function EE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function TE(t,e,n,r){if(e===null||typeof e>"u"||EE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function xf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,xf);ht[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,xf);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,xf);ht[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sf(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(TE(e,n,i,r)&&(n=null),r||i===null?wE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var br=vE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,bl=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),rh=Symbol.for("react.profiler"),Ov=Symbol.for("react.provider"),Vv=Symbol.for("react.context"),Af=Symbol.for("react.forward_ref"),ih=Symbol.for("react.suspense"),sh=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),qr=Symbol.for("react.lazy"),Mv=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Be=Object.assign,fd;function qo(t){if(fd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);fd=e&&e[1]||""}return`
`+fd+t}var pd=!1;function md(t,e){if(!t||pd)return"";pd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{pd=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?qo(t):""}function IE(t){switch(t.tag){case 5:return qo(t.type);case 16:return qo("Lazy");case 13:return qo("Suspense");case 19:return qo("SuspenseList");case 0:case 2:case 15:return t=md(t.type,!1),t;case 11:return t=md(t.type.render,!1),t;case 1:return t=md(t.type,!0),t;default:return""}}function oh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case rh:return"Profiler";case kf:return"StrictMode";case ih:return"Suspense";case sh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Vv:return(t.displayName||"Context")+".Consumer";case Ov:return(t._context.displayName||"Context")+".Provider";case Af:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:oh(t.type)||"Memo";case qr:e=t._payload,t=t._init;try{return oh(t(e))}catch{}}return null}function xE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oh(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Lv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function SE(t){var e=Lv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Pl(t){t._valueTracker||(t._valueTracker=SE(t))}function jv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Lv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function xu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ah(t,e){var n=e.checked;return Be({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Fv(t,e){e=e.checked,e!=null&&Sf(t,"checked",e,!1)}function lh(t,e){Fv(t,e);var n=fi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uh(t,e.type,n):e.hasOwnProperty("defaultValue")&&uh(t,e.type,fi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uh(t,e,n){(e!=="number"||xu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ho=Array.isArray;function Ds(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ch(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return Be({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(Ho(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fi(n)}}function Uv(t,e){var n=fi(e.value),r=fi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Om(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function zv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function dh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?zv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Nl,Bv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Nl=Nl||document.createElement("div"),Nl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Nl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Zo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kE=["Webkit","ms","Moz","O"];Object.keys(Zo).forEach(function(t){kE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Zo[e]=Zo[t]})});function $v(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Zo.hasOwnProperty(t)&&Zo[t]?(""+e).trim():e+"px"}function Wv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=$v(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var AE=Be({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hh(t,e){if(e){if(AE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ph=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mh=null,Os=null,Vs=null;function Vm(t){if(t=Ba(t)){if(typeof mh!="function")throw Error(B(280));var e=t.stateNode;e&&(e=yc(e),mh(t.stateNode,t.type,e))}}function qv(t){Os?Vs?Vs.push(t):Vs=[t]:Os=t}function Hv(){if(Os){var t=Os,e=Vs;if(Vs=Os=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function Kv(t,e){return t(e)}function Gv(){}var gd=!1;function Qv(t,e,n){if(gd)return t(e,n);gd=!0;try{return Kv(t,e,n)}finally{gd=!1,(Os!==null||Vs!==null)&&(Gv(),Hv())}}function ma(t,e){var n=t.stateNode;if(n===null)return null;var r=yc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var gh=!1;if(_r)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){gh=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{gh=!1}function CE(t,e,n,r,i,s,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var ea=!1,Su=null,ku=!1,yh=null,RE={onError:function(t){ea=!0,Su=t}};function bE(t,e,n,r,i,s,o,l,u){ea=!1,Su=null,CE.apply(RE,arguments)}function PE(t,e,n,r,i,s,o,l,u){if(bE.apply(this,arguments),ea){if(ea){var d=Su;ea=!1,Su=null}else throw Error(B(198));ku||(ku=!0,yh=d)}}function Zi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Mm(t){if(Zi(t)!==t)throw Error(B(188))}function NE(t){var e=t.alternate;if(!e){if(e=Zi(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Mm(i),t;if(s===r)return Mm(i),e;s=s.sibling}throw Error(B(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function Xv(t){return t=NE(t),t!==null?Jv(t):null}function Jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jv(t);if(e!==null)return e;t=t.sibling}return null}var Zv=en.unstable_scheduleCallback,Lm=en.unstable_cancelCallback,DE=en.unstable_shouldYield,OE=en.unstable_requestPaint,Ke=en.unstable_now,VE=en.unstable_getCurrentPriorityLevel,bf=en.unstable_ImmediatePriority,e0=en.unstable_UserBlockingPriority,Au=en.unstable_NormalPriority,ME=en.unstable_LowPriority,t0=en.unstable_IdlePriority,fc=null,qn=null;function LE(t){if(qn&&typeof qn.onCommitFiberRoot=="function")try{qn.onCommitFiberRoot(fc,t,void 0,(t.current.flags&128)===128)}catch{}}var bn=Math.clz32?Math.clz32:UE,jE=Math.log,FE=Math.LN2;function UE(t){return t>>>=0,t===0?32:31-(jE(t)/FE|0)|0}var Dl=64,Ol=4194304;function Ko(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Cu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ko(l):(s&=o,s!==0&&(r=Ko(s)))}else o=n&~i,o!==0?r=Ko(o):s!==0&&(r=Ko(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-bn(e),i=1<<n,r|=t[n],e&=~i;return r}function zE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function BE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-bn(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=zE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function vh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function n0(){var t=Dl;return Dl<<=1,!(Dl&4194240)&&(Dl=64),t}function yd(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ua(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-bn(e),t[e]=n}function $E(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-bn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Pf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-bn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var xe=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var i0,Nf,s0,o0,a0,_h=!1,Vl=[],ni=null,ri=null,ii=null,ga=new Map,ya=new Map,Kr=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jm(t,e){switch(t){case"focusin":case"focusout":ni=null;break;case"dragenter":case"dragleave":ri=null;break;case"mouseover":case"mouseout":ii=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function jo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ba(e),e!==null&&Nf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function qE(t,e,n,r,i){switch(e){case"focusin":return ni=jo(ni,t,e,n,r,i),!0;case"dragenter":return ri=jo(ri,t,e,n,r,i),!0;case"mouseover":return ii=jo(ii,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ga.set(s,jo(ga.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ya.set(s,jo(ya.get(s)||null,t,e,n,r,i)),!0}return!1}function l0(t){var e=Vi(t.target);if(e!==null){var n=Zi(e);if(n!==null){if(e=n.tag,e===13){if(e=Yv(n),e!==null){t.blockedOn=e,a0(t.priority,function(){s0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function su(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ph=r,n.target.dispatchEvent(r),ph=null}else return e=Ba(n),e!==null&&Nf(e),t.blockedOn=n,!1;e.shift()}return!0}function Fm(t,e,n){su(t)&&n.delete(e)}function HE(){_h=!1,ni!==null&&su(ni)&&(ni=null),ri!==null&&su(ri)&&(ri=null),ii!==null&&su(ii)&&(ii=null),ga.forEach(Fm),ya.forEach(Fm)}function Fo(t,e){t.blockedOn===e&&(t.blockedOn=null,_h||(_h=!0,en.unstable_scheduleCallback(en.unstable_NormalPriority,HE)))}function va(t){function e(i){return Fo(i,t)}if(0<Vl.length){Fo(Vl[0],t);for(var n=1;n<Vl.length;n++){var r=Vl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ni!==null&&Fo(ni,t),ri!==null&&Fo(ri,t),ii!==null&&Fo(ii,t),ga.forEach(e),ya.forEach(e),n=0;n<Kr.length;n++)r=Kr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kr.length&&(n=Kr[0],n.blockedOn===null);)l0(n),n.blockedOn===null&&Kr.shift()}var Ms=br.ReactCurrentBatchConfig,Ru=!0;function KE(t,e,n,r){var i=xe,s=Ms.transition;Ms.transition=null;try{xe=1,Df(t,e,n,r)}finally{xe=i,Ms.transition=s}}function GE(t,e,n,r){var i=xe,s=Ms.transition;Ms.transition=null;try{xe=4,Df(t,e,n,r)}finally{xe=i,Ms.transition=s}}function Df(t,e,n,r){if(Ru){var i=wh(t,e,n,r);if(i===null)Ad(t,e,r,bu,n),jm(t,r);else if(qE(i,t,e,n,r))r.stopPropagation();else if(jm(t,r),e&4&&-1<WE.indexOf(t)){for(;i!==null;){var s=Ba(i);if(s!==null&&i0(s),s=wh(t,e,n,r),s===null&&Ad(t,e,r,bu,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ad(t,e,r,null,n)}}var bu=null;function wh(t,e,n,r){if(bu=null,t=Rf(r),t=Vi(t),t!==null)if(e=Zi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bu=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(VE()){case bf:return 1;case e0:return 4;case Au:case ME:return 16;case t0:return 536870912;default:return 16}default:return 16}}var Zr=null,Of=null,ou=null;function c0(){if(ou)return ou;var t,e=Of,n=e.length,r,i="value"in Zr?Zr.value:Zr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ou=i.slice(t,1<r?1-r:void 0)}function au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ml(){return!0}function Um(){return!1}function nn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ml:Um,this.isPropagationStopped=Um,this}return Be(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ml)},persist:function(){},isPersistent:Ml}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vf=nn(so),za=Be({},so,{view:0,detail:0}),QE=nn(za),vd,_d,Uo,pc=Be({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(vd=t.screenX-Uo.screenX,_d=t.screenY-Uo.screenY):_d=vd=0,Uo=t),vd)},movementY:function(t){return"movementY"in t?t.movementY:_d}}),zm=nn(pc),YE=Be({},pc,{dataTransfer:0}),XE=nn(YE),JE=Be({},za,{relatedTarget:0}),wd=nn(JE),ZE=Be({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),eT=nn(ZE),tT=Be({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nT=nn(tT),rT=Be({},so,{data:0}),Bm=nn(rT),iT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function aT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=oT[t])?!!e[t]:!1}function Mf(){return aT}var lT=Be({},za,{key:function(t){if(t.key){var e=iT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(t){return t.type==="keypress"?au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uT=nn(lT),cT=Be({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$m=nn(cT),dT=Be({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),hT=nn(dT),fT=Be({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),pT=nn(fT),mT=Be({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gT=nn(mT),yT=[9,13,27,32],Lf=_r&&"CompositionEvent"in window,ta=null;_r&&"documentMode"in document&&(ta=document.documentMode);var vT=_r&&"TextEvent"in window&&!ta,d0=_r&&(!Lf||ta&&8<ta&&11>=ta),Wm=" ",qm=!1;function h0(t,e){switch(t){case"keyup":return yT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function f0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function _T(t,e){switch(t){case"compositionend":return f0(e);case"keypress":return e.which!==32?null:(qm=!0,Wm);case"textInput":return t=e.data,t===Wm&&qm?null:t;default:return null}}function wT(t,e){if(Ts)return t==="compositionend"||!Lf&&h0(t,e)?(t=c0(),ou=Of=Zr=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return d0&&e.locale!=="ko"?null:e.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ET[t.type]:e==="textarea"}function p0(t,e,n,r){qv(r),e=Pu(e,"onChange"),0<e.length&&(n=new Vf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var na=null,_a=null;function TT(t){S0(t,0)}function mc(t){var e=Ss(t);if(jv(e))return t}function IT(t,e){if(t==="change")return e}var m0=!1;if(_r){var Ed;if(_r){var Td="oninput"in document;if(!Td){var Km=document.createElement("div");Km.setAttribute("oninput","return;"),Td=typeof Km.oninput=="function"}Ed=Td}else Ed=!1;m0=Ed&&(!document.documentMode||9<document.documentMode)}function Gm(){na&&(na.detachEvent("onpropertychange",g0),_a=na=null)}function g0(t){if(t.propertyName==="value"&&mc(_a)){var e=[];p0(e,_a,t,Rf(t)),Qv(TT,e)}}function xT(t,e,n){t==="focusin"?(Gm(),na=e,_a=n,na.attachEvent("onpropertychange",g0)):t==="focusout"&&Gm()}function ST(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(_a)}function kT(t,e){if(t==="click")return mc(e)}function AT(t,e){if(t==="input"||t==="change")return mc(e)}function CT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Nn=typeof Object.is=="function"?Object.is:CT;function wa(t,e){if(Nn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nh.call(e,i)||!Nn(t[i],e[i]))return!1}return!0}function Qm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ym(t,e){var n=Qm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qm(n)}}function y0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?y0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function v0(){for(var t=window,e=xu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=xu(t.document)}return e}function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function RT(t){var e=v0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&y0(n.ownerDocument.documentElement,n)){if(r!==null&&jf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ym(n,s);var o=Ym(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var bT=_r&&"documentMode"in document&&11>=document.documentMode,Is=null,Eh=null,ra=null,Th=!1;function Xm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Th||Is==null||Is!==xu(r)||(r=Is,"selectionStart"in r&&jf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&wa(ra,r)||(ra=r,r=Pu(Eh,"onSelect"),0<r.length&&(e=new Vf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function Ll(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Ll("Animation","AnimationEnd"),animationiteration:Ll("Animation","AnimationIteration"),animationstart:Ll("Animation","AnimationStart"),transitionend:Ll("Transition","TransitionEnd")},Id={},_0={};_r&&(_0=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function gc(t){if(Id[t])return Id[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _0)return Id[t]=e[n];return t}var w0=gc("animationend"),E0=gc("animationiteration"),T0=gc("animationstart"),I0=gc("transitionend"),x0=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _i(t,e){x0.set(t,e),Ji(e,[t])}for(var xd=0;xd<Jm.length;xd++){var Sd=Jm[xd],PT=Sd.toLowerCase(),NT=Sd[0].toUpperCase()+Sd.slice(1);_i(PT,"on"+NT)}_i(w0,"onAnimationEnd");_i(E0,"onAnimationIteration");_i(T0,"onAnimationStart");_i("dblclick","onDoubleClick");_i("focusin","onFocus");_i("focusout","onBlur");_i(I0,"onTransitionEnd");$s("onMouseEnter",["mouseout","mouseover"]);$s("onMouseLeave",["mouseout","mouseover"]);$s("onPointerEnter",["pointerout","pointerover"]);$s("onPointerLeave",["pointerout","pointerover"]);Ji("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ji("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ji("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ji("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ji("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),DT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function Zm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,PE(r,e,void 0,t),t.currentTarget=null}function S0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,d),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zm(i,l,d),s=u}}}if(ku)throw t=yh,ku=!1,yh=null,t}function Ve(t,e){var n=e[Ah];n===void 0&&(n=e[Ah]=new Set);var r=t+"__bubble";n.has(r)||(k0(e,t,2,!1),n.add(r))}function kd(t,e,n){var r=0;e&&(r|=4),k0(n,t,r,e)}var jl="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[jl]){t[jl]=!0,Dv.forEach(function(n){n!=="selectionchange"&&(DT.has(n)||kd(n,!1,t),kd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[jl]||(e[jl]=!0,kd("selectionchange",!1,e))}}function k0(t,e,n,r){switch(u0(e)){case 1:var i=KE;break;case 4:i=GE;break;default:i=Df}n=i.bind(null,e,n,t),i=void 0,!gh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ad(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vi(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Qv(function(){var d=s,p=Rf(n),y=[];e:{var _=x0.get(t);if(_!==void 0){var A=Vf,N=t;switch(t){case"keypress":if(au(n)===0)break e;case"keydown":case"keyup":A=uT;break;case"focusin":N="focus",A=wd;break;case"focusout":N="blur",A=wd;break;case"beforeblur":case"afterblur":A=wd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=zm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=XE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=hT;break;case w0:case E0:case T0:A=eT;break;case I0:A=pT;break;case"scroll":A=QE;break;case"wheel":A=gT;break;case"copy":case"cut":case"paste":A=nT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=$m}var D=(e&4)!==0,L=!D&&t==="scroll",S=D?_!==null?_+"Capture":null:_;D=[];for(var T=d,k;T!==null;){k=T;var O=k.stateNode;if(k.tag===5&&O!==null&&(k=O,S!==null&&(O=ma(T,S),O!=null&&D.push(Ta(T,O,k)))),L)break;T=T.return}0<D.length&&(_=new A(_,N,null,n,p),y.push({event:_,listeners:D}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",_&&n!==ph&&(N=n.relatedTarget||n.fromElement)&&(Vi(N)||N[wr]))break e;if((A||_)&&(_=p.window===p?p:(_=p.ownerDocument)?_.defaultView||_.parentWindow:window,A?(N=n.relatedTarget||n.toElement,A=d,N=N?Vi(N):null,N!==null&&(L=Zi(N),N!==L||N.tag!==5&&N.tag!==6)&&(N=null)):(A=null,N=d),A!==N)){if(D=zm,O="onMouseLeave",S="onMouseEnter",T="mouse",(t==="pointerout"||t==="pointerover")&&(D=$m,O="onPointerLeave",S="onPointerEnter",T="pointer"),L=A==null?_:Ss(A),k=N==null?_:Ss(N),_=new D(O,T+"leave",A,n,p),_.target=L,_.relatedTarget=k,O=null,Vi(p)===d&&(D=new D(S,T+"enter",N,n,p),D.target=k,D.relatedTarget=L,O=D),L=O,A&&N)t:{for(D=A,S=N,T=0,k=D;k;k=ms(k))T++;for(k=0,O=S;O;O=ms(O))k++;for(;0<T-k;)D=ms(D),T--;for(;0<k-T;)S=ms(S),k--;for(;T--;){if(D===S||S!==null&&D===S.alternate)break t;D=ms(D),S=ms(S)}D=null}else D=null;A!==null&&eg(y,_,A,D,!1),N!==null&&L!==null&&eg(y,L,N,D,!0)}}e:{if(_=d?Ss(d):window,A=_.nodeName&&_.nodeName.toLowerCase(),A==="select"||A==="input"&&_.type==="file")var $=IT;else if(Hm(_))if(m0)$=AT;else{$=ST;var W=xT}else(A=_.nodeName)&&A.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&($=kT);if($&&($=$(t,d))){p0(y,$,n,p);break e}W&&W(t,_,d),t==="focusout"&&(W=_._wrapperState)&&W.controlled&&_.type==="number"&&uh(_,"number",_.value)}switch(W=d?Ss(d):window,t){case"focusin":(Hm(W)||W.contentEditable==="true")&&(Is=W,Eh=d,ra=null);break;case"focusout":ra=Eh=Is=null;break;case"mousedown":Th=!0;break;case"contextmenu":case"mouseup":case"dragend":Th=!1,Xm(y,n,p);break;case"selectionchange":if(bT)break;case"keydown":case"keyup":Xm(y,n,p)}var w;if(Lf)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ts?h0(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(d0&&n.locale!=="ko"&&(Ts||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ts&&(w=c0()):(Zr=p,Of="value"in Zr?Zr.value:Zr.textContent,Ts=!0)),W=Pu(d,v),0<W.length&&(v=new Bm(v,t,null,n,p),y.push({event:v,listeners:W}),w?v.data=w:(w=f0(n),w!==null&&(v.data=w)))),(w=vT?_T(t,n):wT(t,n))&&(d=Pu(d,"onBeforeInput"),0<d.length&&(p=new Bm("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:d}),p.data=w))}S0(y,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Pu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ma(t,n),s!=null&&r.unshift(Ta(t,s,i)),s=ma(t,e),s!=null&&r.push(Ta(t,s,i))),t=t.return}return r}function ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function eg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,i?(u=ma(n,s),u!=null&&o.unshift(Ta(n,u,l))):i||(u=ma(n,s),u!=null&&o.push(Ta(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var OT=/\r\n?/g,VT=/\u0000|\uFFFD/g;function tg(t){return(typeof t=="string"?t:""+t).replace(OT,`
`).replace(VT,"")}function Fl(t,e,n){if(e=tg(e),tg(t)!==e&&n)throw Error(B(425))}function Nu(){}var Ih=null,xh=null;function Sh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kh=typeof setTimeout=="function"?setTimeout:void 0,MT=typeof clearTimeout=="function"?clearTimeout:void 0,ng=typeof Promise=="function"?Promise:void 0,LT=typeof queueMicrotask=="function"?queueMicrotask:typeof ng<"u"?function(t){return ng.resolve(null).then(t).catch(jT)}:kh;function jT(t){setTimeout(function(){throw t})}function Cd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),va(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);va(e)}function si(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oo=Math.random().toString(36).slice(2),$n="__reactFiber$"+oo,Ia="__reactProps$"+oo,wr="__reactContainer$"+oo,Ah="__reactEvents$"+oo,FT="__reactListeners$"+oo,UT="__reactHandles$"+oo;function Vi(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[wr]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rg(t);t!==null;){if(n=t[$n])return n;t=rg(t)}return e}t=n,n=t.parentNode}return null}function Ba(t){return t=t[$n]||t[wr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function yc(t){return t[Ia]||null}var Ch=[],ks=-1;function wi(t){return{current:t}}function Le(t){0>ks||(t.current=Ch[ks],Ch[ks]=null,ks--)}function Ne(t,e){ks++,Ch[ks]=t.current,t.current=e}var pi={},xt=wi(pi),Ft=wi(!1),Bi=pi;function Ws(t,e){var n=t.type.contextTypes;if(!n)return pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ut(t){return t=t.childContextTypes,t!=null}function Du(){Le(Ft),Le(xt)}function ig(t,e,n){if(xt.current!==pi)throw Error(B(168));Ne(xt,e),Ne(Ft,n)}function A0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(B(108,xE(t)||"Unknown",i));return Be({},n,r)}function Ou(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pi,Bi=xt.current,Ne(xt,t),Ne(Ft,Ft.current),!0}function sg(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=A0(t,e,Bi),r.__reactInternalMemoizedMergedChildContext=t,Le(Ft),Le(xt),Ne(xt,t)):Le(Ft),Ne(Ft,n)}var cr=null,vc=!1,Rd=!1;function C0(t){cr===null?cr=[t]:cr.push(t)}function zT(t){vc=!0,C0(t)}function Ei(){if(!Rd&&cr!==null){Rd=!0;var t=0,e=xe;try{var n=cr;for(xe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cr=null,vc=!1}catch(i){throw cr!==null&&(cr=cr.slice(t+1)),Zv(bf,Ei),i}finally{xe=e,Rd=!1}}return null}var As=[],Cs=0,Vu=null,Mu=0,hn=[],fn=0,$i=null,dr=1,hr="";function Pi(t,e){As[Cs++]=Mu,As[Cs++]=Vu,Vu=t,Mu=e}function R0(t,e,n){hn[fn++]=dr,hn[fn++]=hr,hn[fn++]=$i,$i=t;var r=dr;t=hr;var i=32-bn(r)-1;r&=~(1<<i),n+=1;var s=32-bn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,dr=1<<32-bn(e)+i|n<<i|r,hr=s+t}else dr=1<<s|n<<i|r,hr=t}function Ff(t){t.return!==null&&(Pi(t,1),R0(t,1,0))}function Uf(t){for(;t===Vu;)Vu=As[--Cs],As[Cs]=null,Mu=As[--Cs],As[Cs]=null;for(;t===$i;)$i=hn[--fn],hn[fn]=null,hr=hn[--fn],hn[fn]=null,dr=hn[--fn],hn[fn]=null}var Zt=null,Xt=null,je=!1,Cn=null;function b0(t,e){var n=pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function og(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=si(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$i!==null?{id:dr,overflow:hr}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Xt=null,!0):!1;default:return!1}}function Rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function bh(t){if(je){var e=Xt;if(e){var n=e;if(!og(t,e)){if(Rh(t))throw Error(B(418));e=si(n.nextSibling);var r=Zt;e&&og(t,e)?b0(r,n):(t.flags=t.flags&-4097|2,je=!1,Zt=t)}}else{if(Rh(t))throw Error(B(418));t.flags=t.flags&-4097|2,je=!1,Zt=t}}}function ag(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function Ul(t){if(t!==Zt)return!1;if(!je)return ag(t),je=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Sh(t.type,t.memoizedProps)),e&&(e=Xt)){if(Rh(t))throw P0(),Error(B(418));for(;e;)b0(t,e),e=si(e.nextSibling)}if(ag(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=si(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=Zt?si(t.stateNode.nextSibling):null;return!0}function P0(){for(var t=Xt;t;)t=si(t.nextSibling)}function qs(){Xt=Zt=null,je=!1}function zf(t){Cn===null?Cn=[t]:Cn.push(t)}var BT=br.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function zl(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lg(t){var e=t._init;return e(t._payload)}function N0(t){function e(S,T){if(t){var k=S.deletions;k===null?(S.deletions=[T],S.flags|=16):k.push(T)}}function n(S,T){if(!t)return null;for(;T!==null;)e(S,T),T=T.sibling;return null}function r(S,T){for(S=new Map;T!==null;)T.key!==null?S.set(T.key,T):S.set(T.index,T),T=T.sibling;return S}function i(S,T){return S=ui(S,T),S.index=0,S.sibling=null,S}function s(S,T,k){return S.index=k,t?(k=S.alternate,k!==null?(k=k.index,k<T?(S.flags|=2,T):k):(S.flags|=2,T)):(S.flags|=1048576,T)}function o(S){return t&&S.alternate===null&&(S.flags|=2),S}function l(S,T,k,O){return T===null||T.tag!==6?(T=Md(k,S.mode,O),T.return=S,T):(T=i(T,k),T.return=S,T)}function u(S,T,k,O){var $=k.type;return $===Es?p(S,T,k.props.children,O,k.key):T!==null&&(T.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===qr&&lg($)===T.type)?(O=i(T,k.props),O.ref=zo(S,T,k),O.return=S,O):(O=pu(k.type,k.key,k.props,null,S.mode,O),O.ref=zo(S,T,k),O.return=S,O)}function d(S,T,k,O){return T===null||T.tag!==4||T.stateNode.containerInfo!==k.containerInfo||T.stateNode.implementation!==k.implementation?(T=Ld(k,S.mode,O),T.return=S,T):(T=i(T,k.children||[]),T.return=S,T)}function p(S,T,k,O,$){return T===null||T.tag!==7?(T=Ui(k,S.mode,O,$),T.return=S,T):(T=i(T,k),T.return=S,T)}function y(S,T,k){if(typeof T=="string"&&T!==""||typeof T=="number")return T=Md(""+T,S.mode,k),T.return=S,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case bl:return k=pu(T.type,T.key,T.props,null,S.mode,k),k.ref=zo(S,null,T),k.return=S,k;case ws:return T=Ld(T,S.mode,k),T.return=S,T;case qr:var O=T._init;return y(S,O(T._payload),k)}if(Ho(T)||Mo(T))return T=Ui(T,S.mode,k,null),T.return=S,T;zl(S,T)}return null}function _(S,T,k,O){var $=T!==null?T.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return $!==null?null:l(S,T,""+k,O);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case bl:return k.key===$?u(S,T,k,O):null;case ws:return k.key===$?d(S,T,k,O):null;case qr:return $=k._init,_(S,T,$(k._payload),O)}if(Ho(k)||Mo(k))return $!==null?null:p(S,T,k,O,null);zl(S,k)}return null}function A(S,T,k,O,$){if(typeof O=="string"&&O!==""||typeof O=="number")return S=S.get(k)||null,l(T,S,""+O,$);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case bl:return S=S.get(O.key===null?k:O.key)||null,u(T,S,O,$);case ws:return S=S.get(O.key===null?k:O.key)||null,d(T,S,O,$);case qr:var W=O._init;return A(S,T,k,W(O._payload),$)}if(Ho(O)||Mo(O))return S=S.get(k)||null,p(T,S,O,$,null);zl(T,O)}return null}function N(S,T,k,O){for(var $=null,W=null,w=T,v=T=0,E=null;w!==null&&v<k.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var x=_(S,w,k[v],O);if(x===null){w===null&&(w=E);break}t&&w&&x.alternate===null&&e(S,w),T=s(x,T,v),W===null?$=x:W.sibling=x,W=x,w=E}if(v===k.length)return n(S,w),je&&Pi(S,v),$;if(w===null){for(;v<k.length;v++)w=y(S,k[v],O),w!==null&&(T=s(w,T,v),W===null?$=w:W.sibling=w,W=w);return je&&Pi(S,v),$}for(w=r(S,w);v<k.length;v++)E=A(w,S,v,k[v],O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),T=s(E,T,v),W===null?$=E:W.sibling=E,W=E);return t&&w.forEach(function(C){return e(S,C)}),je&&Pi(S,v),$}function D(S,T,k,O){var $=Mo(k);if(typeof $!="function")throw Error(B(150));if(k=$.call(k),k==null)throw Error(B(151));for(var W=$=null,w=T,v=T=0,E=null,x=k.next();w!==null&&!x.done;v++,x=k.next()){w.index>v?(E=w,w=null):E=w.sibling;var C=_(S,w,x.value,O);if(C===null){w===null&&(w=E);break}t&&w&&C.alternate===null&&e(S,w),T=s(C,T,v),W===null?$=C:W.sibling=C,W=C,w=E}if(x.done)return n(S,w),je&&Pi(S,v),$;if(w===null){for(;!x.done;v++,x=k.next())x=y(S,x.value,O),x!==null&&(T=s(x,T,v),W===null?$=x:W.sibling=x,W=x);return je&&Pi(S,v),$}for(w=r(S,w);!x.done;v++,x=k.next())x=A(w,S,v,x.value,O),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?v:x.key),T=s(x,T,v),W===null?$=x:W.sibling=x,W=x);return t&&w.forEach(function(R){return e(S,R)}),je&&Pi(S,v),$}function L(S,T,k,O){if(typeof k=="object"&&k!==null&&k.type===Es&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case bl:e:{for(var $=k.key,W=T;W!==null;){if(W.key===$){if($=k.type,$===Es){if(W.tag===7){n(S,W.sibling),T=i(W,k.props.children),T.return=S,S=T;break e}}else if(W.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===qr&&lg($)===W.type){n(S,W.sibling),T=i(W,k.props),T.ref=zo(S,W,k),T.return=S,S=T;break e}n(S,W);break}else e(S,W);W=W.sibling}k.type===Es?(T=Ui(k.props.children,S.mode,O,k.key),T.return=S,S=T):(O=pu(k.type,k.key,k.props,null,S.mode,O),O.ref=zo(S,T,k),O.return=S,S=O)}return o(S);case ws:e:{for(W=k.key;T!==null;){if(T.key===W)if(T.tag===4&&T.stateNode.containerInfo===k.containerInfo&&T.stateNode.implementation===k.implementation){n(S,T.sibling),T=i(T,k.children||[]),T.return=S,S=T;break e}else{n(S,T);break}else e(S,T);T=T.sibling}T=Ld(k,S.mode,O),T.return=S,S=T}return o(S);case qr:return W=k._init,L(S,T,W(k._payload),O)}if(Ho(k))return N(S,T,k,O);if(Mo(k))return D(S,T,k,O);zl(S,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,T!==null&&T.tag===6?(n(S,T.sibling),T=i(T,k),T.return=S,S=T):(n(S,T),T=Md(k,S.mode,O),T.return=S,S=T),o(S)):n(S,T)}return L}var Hs=N0(!0),D0=N0(!1),Lu=wi(null),ju=null,Rs=null,Bf=null;function $f(){Bf=Rs=ju=null}function Wf(t){var e=Lu.current;Le(Lu),t._currentValue=e}function Ph(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){ju=t,Bf=Rs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function yn(t){var e=t._currentValue;if(Bf!==t)if(t={context:t,memoizedValue:e,next:null},Rs===null){if(ju===null)throw Error(B(308));Rs=t,ju.dependencies={lanes:0,firstContext:t}}else Rs=Rs.next=t;return e}var Mi=null;function qf(t){Mi===null?Mi=[t]:Mi.push(t)}function O0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Er(t,r)}function Er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Hr=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function oi(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,_e&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Er(t,n)}return i=r.interleaved,i===null?(e.next=e,qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Er(t,n)}function lu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}function ug(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fu(t,e,n,r){var i=t.updateQueue;Hr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(s!==null){var y=i.baseState;o=0,p=d=u=null,l=s;do{var _=l.lane,A=l.eventTime;if((r&_)===_){p!==null&&(p=p.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var N=t,D=l;switch(_=e,A=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){y=N.call(A,y,_);break e}y=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,_=typeof N=="function"?N.call(A,y,_):N,_==null)break e;y=Be({},y,_);break e;case 2:Hr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,_=i.effects,_===null?i.effects=[l]:_.push(l))}else A={eventTime:A,lane:_,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=A,u=y):p=p.next=A,o|=_;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;_=l,l=_.next,_.next=null,i.lastBaseUpdate=_,i.shared.pending=null}}while(!0);if(p===null&&(u=y),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qi|=o,t.lanes=o,t.memoizedState=y}}function cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(B(191,i));i.call(r)}}}var $a={},Hn=wi($a),xa=wi($a),Sa=wi($a);function Li(t){if(t===$a)throw Error(B(174));return t}function Kf(t,e){switch(Ne(Sa,e),Ne(xa,t),Ne(Hn,$a),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:dh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=dh(e,t)}Le(Hn),Ne(Hn,e)}function Ks(){Le(Hn),Le(xa),Le(Sa)}function M0(t){Li(Sa.current);var e=Li(Hn.current),n=dh(e,t.type);e!==n&&(Ne(xa,t),Ne(Hn,n))}function Gf(t){xa.current===t&&(Le(Hn),Le(xa))}var Ue=wi(0);function Uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bd=[];function Qf(){for(var t=0;t<bd.length;t++)bd[t]._workInProgressVersionPrimary=null;bd.length=0}var uu=br.ReactCurrentDispatcher,Pd=br.ReactCurrentBatchConfig,Wi=0,ze=null,Je=null,nt=null,zu=!1,ia=!1,ka=0,$T=0;function yt(){throw Error(B(321))}function Yf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Nn(t[n],e[n]))return!1;return!0}function Xf(t,e,n,r,i,s){if(Wi=s,ze=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,uu.current=t===null||t.memoizedState===null?KT:GT,t=n(r,i),ia){s=0;do{if(ia=!1,ka=0,25<=s)throw Error(B(301));s+=1,nt=Je=null,e.updateQueue=null,uu.current=QT,t=n(r,i)}while(ia)}if(uu.current=Bu,e=Je!==null&&Je.next!==null,Wi=0,nt=Je=ze=null,zu=!1,e)throw Error(B(300));return t}function Jf(){var t=ka!==0;return ka=0,t}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nt===null?ze.memoizedState=nt=t:nt=nt.next=t,nt}function vn(){if(Je===null){var t=ze.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=nt===null?ze.memoizedState:nt.next;if(e!==null)nt=e,Je=t;else{if(t===null)throw Error(B(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},nt===null?ze.memoizedState=nt=t:nt=nt.next=t}return nt}function Aa(t,e){return typeof e=="function"?e(t):e}function Nd(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Je,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,d=s;do{var p=d.lane;if((Wi&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var y={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=y,o=r):u=u.next=y,ze.lanes|=p,qi|=p}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=l,Nn(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ze.lanes|=s,qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dd(t){var e=vn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Nn(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function L0(){}function j0(t,e){var n=ze,r=vn(),i=e(),s=!Nn(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Zf(z0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||nt!==null&&nt.memoizedState.tag&1){if(n.flags|=2048,Ca(9,U0.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(B(349));Wi&30||F0(n,e,i)}return i}function F0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function U0(t,e,n,r){e.value=n,e.getSnapshot=r,B0(e)&&$0(t)}function z0(t,e,n){return n(function(){B0(e)&&$0(t)})}function B0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Nn(t,n)}catch{return!0}}function $0(t){var e=Er(t,1);e!==null&&Pn(e,t,1,-1)}function dg(t){var e=Bn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=HT.bind(null,ze,t),[e.memoizedState,t]}function Ca(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ze.updateQueue,e===null?(e={lastEffect:null,stores:null},ze.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function W0(){return vn().memoizedState}function cu(t,e,n,r){var i=Bn();ze.flags|=t,i.memoizedState=Ca(1|e,n,void 0,r===void 0?null:r)}function _c(t,e,n,r){var i=vn();r=r===void 0?null:r;var s=void 0;if(Je!==null){var o=Je.memoizedState;if(s=o.destroy,r!==null&&Yf(r,o.deps)){i.memoizedState=Ca(e,n,s,r);return}}ze.flags|=t,i.memoizedState=Ca(1|e,n,s,r)}function hg(t,e){return cu(8390656,8,t,e)}function Zf(t,e){return _c(2048,8,t,e)}function q0(t,e){return _c(4,2,t,e)}function H0(t,e){return _c(4,4,t,e)}function K0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function G0(t,e,n){return n=n!=null?n.concat([t]):null,_c(4,4,K0.bind(null,e,t),n)}function ep(){}function Q0(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Y0(t,e){var n=vn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Yf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function X0(t,e,n){return Wi&21?(Nn(n,e)||(n=n0(),ze.lanes|=n,qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function WT(t,e){var n=xe;xe=n!==0&&4>n?n:4,t(!0);var r=Pd.transition;Pd.transition={};try{t(!1),e()}finally{xe=n,Pd.transition=r}}function J0(){return vn().memoizedState}function qT(t,e,n){var r=li(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Z0(t))e_(e,n);else if(n=O0(t,e,n,r),n!==null){var i=Pt();Pn(n,t,r,i),t_(n,e,r)}}function HT(t,e,n){var r=li(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Z0(t))e_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Nn(l,o)){var u=e.interleaved;u===null?(i.next=i,qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=O0(t,e,i,r),n!==null&&(i=Pt(),Pn(n,t,r,i),t_(n,e,r))}}function Z0(t){var e=t.alternate;return t===ze||e!==null&&e===ze}function e_(t,e){ia=zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Pf(t,n)}}var Bu={readContext:yn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},KT={readContext:yn,useCallback:function(t,e){return Bn().memoizedState=[t,e===void 0?null:e],t},useContext:yn,useEffect:hg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cu(4194308,4,K0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cu(4194308,4,t,e)},useInsertionEffect:function(t,e){return cu(4,2,t,e)},useMemo:function(t,e){var n=Bn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Bn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=qT.bind(null,ze,t),[r.memoizedState,t]},useRef:function(t){var e=Bn();return t={current:t},e.memoizedState=t},useState:dg,useDebugValue:ep,useDeferredValue:function(t){return Bn().memoizedState=t},useTransition:function(){var t=dg(!1),e=t[0];return t=WT.bind(null,t[1]),Bn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ze,i=Bn();if(je){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),rt===null)throw Error(B(349));Wi&30||F0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hg(z0.bind(null,r,s,t),[t]),r.flags|=2048,Ca(9,U0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Bn(),e=rt.identifierPrefix;if(je){var n=hr,r=dr;n=(r&~(1<<32-bn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ka++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$T++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},GT={readContext:yn,useCallback:Q0,useContext:yn,useEffect:Zf,useImperativeHandle:G0,useInsertionEffect:q0,useLayoutEffect:H0,useMemo:Y0,useReducer:Nd,useRef:W0,useState:function(){return Nd(Aa)},useDebugValue:ep,useDeferredValue:function(t){var e=vn();return X0(e,Je.memoizedState,t)},useTransition:function(){var t=Nd(Aa)[0],e=vn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:j0,useId:J0,unstable_isNewReconciler:!1},QT={readContext:yn,useCallback:Q0,useContext:yn,useEffect:Zf,useImperativeHandle:G0,useInsertionEffect:q0,useLayoutEffect:H0,useMemo:Y0,useReducer:Dd,useRef:W0,useState:function(){return Dd(Aa)},useDebugValue:ep,useDeferredValue:function(t){var e=vn();return Je===null?e.memoizedState=t:X0(e,Je.memoizedState,t)},useTransition:function(){var t=Dd(Aa)[0],e=vn().memoizedState;return[t,e]},useMutableSource:L0,useSyncExternalStore:j0,useId:J0,unstable_isNewReconciler:!1};function kn(t,e){if(t&&t.defaultProps){e=Be({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Be({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var wc={isMounted:function(t){return(t=t._reactInternals)?Zi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=li(t),s=gr(r,i);s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Pn(e,t,i,r),lu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),i=li(t),s=gr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=oi(t,s,i),e!==null&&(Pn(e,t,i,r),lu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=li(t),i=gr(n,r);i.tag=2,e!=null&&(i.callback=e),e=oi(t,i,r),e!==null&&(Pn(e,t,r,n),lu(e,t,r))}};function fg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!wa(n,r)||!wa(i,s):!0}function n_(t,e,n){var r=!1,i=pi,s=e.contextType;return typeof s=="object"&&s!==null?s=yn(s):(i=Ut(e)?Bi:xt.current,r=e.contextTypes,s=(r=r!=null)?Ws(t,i):pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=wc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&wc.enqueueReplaceState(e,e.state,null)}function Dh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=yn(s):(s=Ut(e)?Bi:xt.current,i.context=Ws(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&wc.enqueueReplaceState(i,i.state,null),Fu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",r=e;do n+=IE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Od(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Oh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var YT=typeof WeakMap=="function"?WeakMap:Map;function r_(t,e,n){n=gr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Wu||(Wu=!0,Wh=r),Oh(t,e)},n}function i_(t,e,n){n=gr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Oh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Oh(t,e),typeof r!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new YT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cI.bind(null,t,e,n),e.then(t,t))}function gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gr(-1,1),e.tag=2,oi(n,e,1))),n.lanes|=1),t)}var XT=br.ReactCurrentOwner,jt=!1;function bt(t,e,n,r){e.child=t===null?D0(e,null,n,r):Hs(e,t.child,n,r)}function vg(t,e,n,r,i){n=n.render;var s=e.ref;return Ls(e,i),r=Xf(t,e,n,r,s,i),n=Jf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(je&&n&&Ff(e),e.flags|=1,bt(t,e,r,i),e.child)}function _g(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!lp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s_(t,e,s,r,i)):(t=pu(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:wa,n(o,r)&&t.ref===e.ref)return Tr(t,e,i)}return e.flags|=1,t=ui(s,r),t.ref=e.ref,t.return=e,e.child=t}function s_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(wa(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,Tr(t,e,i)}return Vh(t,e,n,r,i)}function o_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Ps,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ne(Ps,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ne(Ps,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ne(Ps,Yt),Yt|=r;return bt(t,e,i,n),e.child}function a_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vh(t,e,n,r,i){var s=Ut(n)?Bi:xt.current;return s=Ws(e,s),Ls(e,i),n=Xf(t,e,n,r,s,i),r=Jf(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Tr(t,e,i)):(je&&r&&Ff(e),e.flags|=1,bt(t,e,n,i),e.child)}function wg(t,e,n,r,i){if(Ut(n)){var s=!0;Ou(e)}else s=!1;if(Ls(e,i),e.stateNode===null)du(t,e),n_(e,n,r),Dh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=yn(d):(d=Ut(n)?Bi:xt.current,d=Ws(e,d));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";y||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&pg(e,o,r,d),Hr=!1;var _=e.memoizedState;o.state=_,Fu(e,r,o,i),u=e.memoizedState,l!==r||_!==u||Ft.current||Hr?(typeof p=="function"&&(Nh(e,n,p,r),u=e.memoizedState),(l=Hr||fg(e,n,l,r,_,u,d))?(y||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,V0(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:kn(e.type,l),o.props=d,y=e.pendingProps,_=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=yn(u):(u=Ut(n)?Bi:xt.current,u=Ws(e,u));var A=n.getDerivedStateFromProps;(p=typeof A=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==y||_!==u)&&pg(e,o,r,u),Hr=!1,_=e.memoizedState,o.state=_,Fu(e,r,o,i);var N=e.memoizedState;l!==y||_!==N||Ft.current||Hr?(typeof A=="function"&&(Nh(e,n,A,r),N=e.memoizedState),(d=Hr||fg(e,n,d,r,_,N,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,N,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,N,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),o.props=r,o.state=N,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),r=!1)}return Mh(t,e,n,r,s,i)}function Mh(t,e,n,r,i,s){a_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sg(e,n,!1),Tr(t,e,s);r=e.stateNode,XT.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,l,s)):bt(t,e,l,s),e.memoizedState=r.state,i&&sg(e,n,!0),e.child}function l_(t){var e=t.stateNode;e.pendingContext?ig(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ig(t,e.context,!1),Kf(t,e.containerInfo)}function Eg(t,e,n,r,i){return qs(),zf(i),e.flags|=256,bt(t,e,n,r),e.child}var Lh={dehydrated:null,treeContext:null,retryLane:0};function jh(t){return{baseLanes:t,cachePool:null,transitions:null}}function u_(t,e,n){var r=e.pendingProps,i=Ue.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ne(Ue,i&1),t===null)return bh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ic(o,r,0,null),t=Ui(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=jh(n),e.memoizedState=Lh,t):tp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return JT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ui(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ui(l,s):(s=Ui(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?jh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Lh,r}return s=t.child,t=s.sibling,r=ui(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function tp(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Bl(t,e,n,r){return r!==null&&zf(r),Hs(e,t.child,null,n),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function JT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Od(Error(B(422))),Bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),s=Ui(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=jh(o),e.memoizedState=Lh,s);if(!(e.mode&1))return Bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(B(419)),r=Od(s,r,void 0),Bl(t,e,o,r)}if(l=(o&t.childLanes)!==0,jt||l){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Er(t,i),Pn(r,t,i,-1))}return ap(),r=Od(Error(B(421))),Bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=si(i.nextSibling),Zt=e,je=!0,Cn=null,t!==null&&(hn[fn++]=dr,hn[fn++]=hr,hn[fn++]=$i,dr=t.id,hr=t.overflow,$i=e),e=tp(e,r.children),e.flags|=4096,e)}function Tg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ph(t.return,e,n)}function Vd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Ue.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tg(t,n,e);else if(t.tag===19)Tg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ne(Ue,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Uu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Vd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Uu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Vd(e,!0,n,null,s);break;case"together":Vd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function du(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=ui(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ui(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ZT(t,e,n){switch(e.tag){case 3:l_(e),qs();break;case 5:M0(e);break;case 1:Ut(e.type)&&Ou(e);break;case 4:Kf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ne(Lu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ne(Ue,Ue.current&1),e.flags|=128,null):n&e.child.childLanes?u_(t,e,n):(Ne(Ue,Ue.current&1),t=Tr(t,e,n),t!==null?t.sibling:null);Ne(Ue,Ue.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return c_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ne(Ue,Ue.current),r)break;return null;case 22:case 23:return e.lanes=0,o_(t,e,n)}return Tr(t,e,n)}var d_,Fh,h_,f_;d_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Fh=function(){};h_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Li(Hn.current);var s=null;switch(n){case"input":i=ah(t,i),r=ah(t,r),s=[];break;case"select":i=Be({},i,{value:void 0}),r=Be({},r,{value:void 0}),s=[];break;case"textarea":i=ch(t,i),r=ch(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Nu)}hh(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(fa.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(fa.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Ve("scroll",t),s||l===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};f_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!je)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eI(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Ut(e.type)&&Du(),vt(e),null;case 3:return r=e.stateNode,Ks(),Le(Ft),Le(xt),Qf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ul(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Cn!==null&&(Kh(Cn),Cn=null))),Fh(t,e),vt(e),null;case 5:Gf(e);var i=Li(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)h_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return vt(e),null}if(t=Li(Hn.current),Ul(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[$n]=e,r[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(i=0;i<Go.length;i++)Ve(Go[i],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Pm(r,s),Ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ve("invalid",r);break;case"textarea":Dm(r,s),Ve("invalid",r)}hh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Fl(r.textContent,l,t),i=["children",""+l]):fa.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ve("scroll",r)}switch(n){case"input":Pl(r),Nm(r,s,!0);break;case"textarea":Pl(r),Om(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Nu)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=zv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[$n]=e,t[Ia]=r,d_(t,e,!1,!1),e.stateNode=t;e:{switch(o=fh(n,r),n){case"dialog":Ve("cancel",t),Ve("close",t),i=r;break;case"iframe":case"object":case"embed":Ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Go.length;i++)Ve(Go[i],t);i=r;break;case"source":Ve("error",t),i=r;break;case"img":case"image":case"link":Ve("error",t),Ve("load",t),i=r;break;case"details":Ve("toggle",t),i=r;break;case"input":Pm(t,r),i=ah(t,r),Ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Be({},r,{value:void 0}),Ve("invalid",t);break;case"textarea":Dm(t,r),i=ch(t,r),Ve("invalid",t);break;default:i=r}hh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Wv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Bv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&pa(t,u):typeof u=="number"&&pa(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?u!=null&&s==="onScroll"&&Ve("scroll",t):u!=null&&Sf(t,s,u,o))}switch(n){case"input":Pl(t),Nm(t,r,!1);break;case"textarea":Pl(t),Om(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ds(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Nu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=Li(Sa.current),Li(Hn.current),Ul(e)){if(r=e.stateNode,n=e.memoizedProps,r[$n]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:Fl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Fl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$n]=e,e.stateNode=r}return vt(e),null;case 13:if(Le(Ue),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(je&&Xt!==null&&e.mode&1&&!(e.flags&128))P0(),qs(),e.flags|=98560,s=!1;else if(s=Ul(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(B(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(B(317));s[$n]=e}else qs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else Cn!==null&&(Kh(Cn),Cn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ue.current&1?Ze===0&&(Ze=3):ap())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Ks(),Fh(t,e),t===null&&Ea(e.stateNode.containerInfo),vt(e),null;case 10:return Wf(e.type._context),vt(e),null;case 17:return Ut(e.type)&&Du(),vt(e),null;case 19:if(Le(Ue),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Uu(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ne(Ue,Ue.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ke()>Qs&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Uu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!je)return vt(e),null}else 2*Ke()-s.renderingStartTime>Qs&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ke(),e.sibling=null,n=Ue.current,Ne(Ue,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return op(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function tI(t,e){switch(Uf(e),e.tag){case 1:return Ut(e.type)&&Du(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),Le(Ft),Le(xt),Qf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Le(Ue),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));qs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Le(Ue),null;case 4:return Ks(),null;case 10:return Wf(e.type._context),null;case 22:case 23:return op(),null;case 24:return null;default:return null}}var $l=!1,Et=!1,nI=typeof WeakSet=="function"?WeakSet:Set,X=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){We(t,e,r)}else n.current=null}function Uh(t,e,n){try{n()}catch(r){We(t,e,r)}}var Ig=!1;function rI(t,e){if(Ih=Ru,t=v0(),jf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,y=t,_=null;t:for(;;){for(var A;y!==n||i!==0&&y.nodeType!==3||(l=o+i),y!==s||r!==0&&y.nodeType!==3||(u=o+r),y.nodeType===3&&(o+=y.nodeValue.length),(A=y.firstChild)!==null;)_=y,y=A;for(;;){if(y===t)break t;if(_===n&&++d===i&&(l=o),_===s&&++p===r&&(u=o),(A=y.nextSibling)!==null)break;y=_,_=y.parentNode}y=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(xh={focusedElem:t,selectionRange:n},Ru=!1,X=e;X!==null;)if(e=X,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,X=t;else for(;X!==null;){e=X;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,L=N.memoizedState,S=e.stateNode,T=S.getSnapshotBeforeUpdate(e.elementType===e.type?D:kn(e.type,D),L);S.__reactInternalSnapshotBeforeUpdate=T}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(O){We(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,X=t;break}X=e.return}return N=Ig,Ig=!1,N}function sa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Uh(e,n,s)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p_(t){var e=t.alternate;e!==null&&(t.alternate=null,p_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Ia],delete e[Ah],delete e[FT],delete e[UT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m_(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nu));else if(r!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}function $h(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for($h(t,e,n),t=t.sibling;t!==null;)$h(t,e,n),t=t.sibling}var at=null,An=!1;function Br(t,e,n){for(n=n.child;n!==null;)g_(t,e,n),n=n.sibling}function g_(t,e,n){if(qn&&typeof qn.onCommitFiberUnmount=="function")try{qn.onCommitFiberUnmount(fc,n)}catch{}switch(n.tag){case 5:Et||bs(n,e);case 6:var r=at,i=An;at=null,Br(t,e,n),at=r,An=i,at!==null&&(An?(t=at,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):at.removeChild(n.stateNode));break;case 18:at!==null&&(An?(t=at,n=n.stateNode,t.nodeType===8?Cd(t.parentNode,n):t.nodeType===1&&Cd(t,n),va(t)):Cd(at,n.stateNode));break;case 4:r=at,i=An,at=n.stateNode.containerInfo,An=!0,Br(t,e,n),at=r,An=i;break;case 0:case 11:case 14:case 15:if(!Et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Uh(n,e,o),i=i.next}while(i!==r)}Br(t,e,n);break;case 1:if(!Et&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){We(n,e,l)}Br(t,e,n);break;case 21:Br(t,e,n);break;case 22:n.mode&1?(Et=(r=Et)||n.memoizedState!==null,Br(t,e,n),Et=r):Br(t,e,n);break;default:Br(t,e,n)}}function Sg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nI),e.forEach(function(r){var i=hI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Sn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:at=l.stateNode,An=!1;break e;case 3:at=l.stateNode.containerInfo,An=!0;break e;case 4:at=l.stateNode.containerInfo,An=!0;break e}l=l.return}if(at===null)throw Error(B(160));g_(s,o,i),at=null,An=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){We(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)y_(e,t),e=e.sibling}function y_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Sn(e,t),Un(t),r&4){try{sa(3,t,t.return),Ec(3,t)}catch(D){We(t,t.return,D)}try{sa(5,t,t.return)}catch(D){We(t,t.return,D)}}break;case 1:Sn(e,t),Un(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Sn(e,t),Un(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var i=t.stateNode;try{pa(i,"")}catch(D){We(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Fv(i,s),fh(l,o);var d=fh(l,s);for(o=0;o<u.length;o+=2){var p=u[o],y=u[o+1];p==="style"?Wv(i,y):p==="dangerouslySetInnerHTML"?Bv(i,y):p==="children"?pa(i,y):Sf(i,p,y,d)}switch(l){case"input":lh(i,s);break;case"textarea":Uv(i,s);break;case"select":var _=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?Ds(i,!!s.multiple,A,!1):_!==!!s.multiple&&(s.defaultValue!=null?Ds(i,!!s.multiple,s.defaultValue,!0):Ds(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ia]=s}catch(D){We(t,t.return,D)}}break;case 6:if(Sn(e,t),Un(t),r&4){if(t.stateNode===null)throw Error(B(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){We(t,t.return,D)}}break;case 3:if(Sn(e,t),Un(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(D){We(t,t.return,D)}break;case 4:Sn(e,t),Un(t);break;case 13:Sn(e,t),Un(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ip=Ke())),r&4&&Sg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Et=(d=Et)||p,Sn(e,t),Et=d):Sn(e,t),Un(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(X=t,p=t.child;p!==null;){for(y=X=p;X!==null;){switch(_=X,A=_.child,_.tag){case 0:case 11:case 14:case 15:sa(4,_,_.return);break;case 1:bs(_,_.return);var N=_.stateNode;if(typeof N.componentWillUnmount=="function"){r=_,n=_.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){We(r,n,D)}}break;case 5:bs(_,_.return);break;case 22:if(_.memoizedState!==null){Ag(y);continue}}A!==null?(A.return=_,X=A):Ag(y)}p=p.sibling}e:for(p=null,y=t;;){if(y.tag===5){if(p===null){p=y;try{i=y.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=y.stateNode,u=y.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=$v("display",o))}catch(D){We(t,t.return,D)}}}else if(y.tag===6){if(p===null)try{y.stateNode.nodeValue=d?"":y.memoizedProps}catch(D){We(t,t.return,D)}}else if((y.tag!==22&&y.tag!==23||y.memoizedState===null||y===t)&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===t)break e;for(;y.sibling===null;){if(y.return===null||y.return===t)break e;p===y&&(p=null),y=y.return}p===y&&(p=null),y.sibling.return=y.return,y=y.sibling}}break;case 19:Sn(e,t),Un(t),r&4&&Sg(t);break;case 21:break;default:Sn(e,t),Un(t)}}function Un(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m_(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(pa(i,""),r.flags&=-33);var s=xg(t);$h(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=xg(t);Bh(t,l,o);break;default:throw Error(B(161))}}catch(u){We(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iI(t,e,n){X=t,v_(t)}function v_(t,e,n){for(var r=(t.mode&1)!==0;X!==null;){var i=X,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||$l;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Et;l=$l;var d=Et;if($l=o,(Et=u)&&!d)for(X=i;X!==null;)o=X,u=o.child,o.tag===22&&o.memoizedState!==null?Cg(i):u!==null?(u.return=o,X=u):Cg(i);for(;s!==null;)X=s,v_(s),s=s.sibling;X=i,$l=l,Et=d}kg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,X=s):kg(t)}}function kg(t){for(;X!==null;){var e=X;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Et||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:kn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cg(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var y=p.dehydrated;y!==null&&va(y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}Et||e.flags&512&&zh(e)}catch(_){We(e,e.return,_)}}if(e===t){X=null;break}if(n=e.sibling,n!==null){n.return=e.return,X=n;break}X=e.return}}function Ag(t){for(;X!==null;){var e=X;if(e===t){X=null;break}var n=e.sibling;if(n!==null){n.return=e.return,X=n;break}X=e.return}}function Cg(t){for(;X!==null;){var e=X;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(u){We(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){We(e,i,u)}}var s=e.return;try{zh(e)}catch(u){We(e,s,u)}break;case 5:var o=e.return;try{zh(e)}catch(u){We(e,o,u)}}}catch(u){We(e,e.return,u)}if(e===t){X=null;break}var l=e.sibling;if(l!==null){l.return=e.return,X=l;break}X=e.return}}var sI=Math.ceil,$u=br.ReactCurrentDispatcher,np=br.ReactCurrentOwner,mn=br.ReactCurrentBatchConfig,_e=0,rt=null,Qe=null,ct=0,Yt=0,Ps=wi(0),Ze=0,Ra=null,qi=0,Tc=0,rp=0,oa=null,Mt=null,ip=0,Qs=1/0,ur=null,Wu=!1,Wh=null,ai=null,Wl=!1,ei=null,qu=0,aa=0,qh=null,hu=-1,fu=0;function Pt(){return _e&6?Ke():hu!==-1?hu:hu=Ke()}function li(t){return t.mode&1?_e&2&&ct!==0?ct&-ct:BT.transition!==null?(fu===0&&(fu=n0()),fu):(t=xe,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function Pn(t,e,n,r){if(50<aa)throw aa=0,qh=null,Error(B(185));Ua(t,n,r),(!(_e&2)||t!==rt)&&(t===rt&&(!(_e&2)&&(Tc|=n),Ze===4&&Gr(t,ct)),zt(t,r),n===1&&_e===0&&!(e.mode&1)&&(Qs=Ke()+500,vc&&Ei()))}function zt(t,e){var n=t.callbackNode;BE(t,e);var r=Cu(t,t===rt?ct:0);if(r===0)n!==null&&Lm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lm(n),e===1)t.tag===0?zT(Rg.bind(null,t)):C0(Rg.bind(null,t)),LT(function(){!(_e&6)&&Ei()}),n=null;else{switch(r0(r)){case 1:n=bf;break;case 4:n=e0;break;case 16:n=Au;break;case 536870912:n=t0;break;default:n=Au}n=k_(n,__.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function __(t,e){if(hu=-1,fu=0,_e&6)throw Error(B(327));var n=t.callbackNode;if(js()&&t.callbackNode!==n)return null;var r=Cu(t,t===rt?ct:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Hu(t,r);else{e=r;var i=_e;_e|=2;var s=E_();(rt!==t||ct!==e)&&(ur=null,Qs=Ke()+500,Fi(t,e));do try{lI();break}catch(l){w_(t,l)}while(!0);$f(),$u.current=s,_e=i,Qe!==null?e=0:(rt=null,ct=0,e=Ze)}if(e!==0){if(e===2&&(i=vh(t),i!==0&&(r=i,e=Hh(t,i))),e===1)throw n=Ra,Fi(t,0),Gr(t,r),zt(t,Ke()),n;if(e===6)Gr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oI(i)&&(e=Hu(t,r),e===2&&(s=vh(t),s!==0&&(r=s,e=Hh(t,s))),e===1))throw n=Ra,Fi(t,0),Gr(t,r),zt(t,Ke()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:Ni(t,Mt,ur);break;case 3:if(Gr(t,r),(r&130023424)===r&&(e=ip+500-Ke(),10<e)){if(Cu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=kh(Ni.bind(null,t,Mt,ur),e);break}Ni(t,Mt,ur);break;case 4:if(Gr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-bn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sI(r/1960))-r,10<r){t.timeoutHandle=kh(Ni.bind(null,t,Mt,ur),r);break}Ni(t,Mt,ur);break;case 5:Ni(t,Mt,ur);break;default:throw Error(B(329))}}}return zt(t,Ke()),t.callbackNode===n?__.bind(null,t):null}function Hh(t,e){var n=oa;return t.current.memoizedState.isDehydrated&&(Fi(t,e).flags|=256),t=Hu(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Kh(e)),t}function Kh(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function oI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Nn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gr(t,e){for(e&=~rp,e&=~Tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-bn(e),r=1<<n;t[n]=-1,e&=~r}}function Rg(t){if(_e&6)throw Error(B(327));js();var e=Cu(t,0);if(!(e&1))return zt(t,Ke()),null;var n=Hu(t,e);if(t.tag!==0&&n===2){var r=vh(t);r!==0&&(e=r,n=Hh(t,r))}if(n===1)throw n=Ra,Fi(t,0),Gr(t,e),zt(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ni(t,Mt,ur),zt(t,Ke()),null}function sp(t,e){var n=_e;_e|=1;try{return t(e)}finally{_e=n,_e===0&&(Qs=Ke()+500,vc&&Ei())}}function Hi(t){ei!==null&&ei.tag===0&&!(_e&6)&&js();var e=_e;_e|=1;var n=mn.transition,r=xe;try{if(mn.transition=null,xe=1,t)return t()}finally{xe=r,mn.transition=n,_e=e,!(_e&6)&&Ei()}}function op(){Yt=Ps.current,Le(Ps)}function Fi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MT(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Du();break;case 3:Ks(),Le(Ft),Le(xt),Qf();break;case 5:Gf(r);break;case 4:Ks();break;case 13:Le(Ue);break;case 19:Le(Ue);break;case 10:Wf(r.type._context);break;case 22:case 23:op()}n=n.return}if(rt=t,Qe=t=ui(t.current,null),ct=Yt=e,Ze=0,Ra=null,rp=Tc=qi=0,Mt=oa=null,Mi!==null){for(e=0;e<Mi.length;e++)if(n=Mi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Mi=null}return t}function w_(t,e){do{var n=Qe;try{if($f(),uu.current=Bu,zu){for(var r=ze.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zu=!1}if(Wi=0,nt=Je=ze=null,ia=!1,ka=0,np.current=null,n===null||n.return===null){Ze=1,Ra=e,Qe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=ct,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,y=p.tag;if(!(p.mode&1)&&(y===0||y===11||y===15)){var _=p.alternate;_?(p.updateQueue=_.updateQueue,p.memoizedState=_.memoizedState,p.lanes=_.lanes):(p.updateQueue=null,p.memoizedState=null)}var A=gg(o);if(A!==null){A.flags&=-257,yg(A,o,l,s,e),A.mode&1&&mg(s,d,e),e=A,u=d;var N=e.updateQueue;if(N===null){var D=new Set;D.add(u),e.updateQueue=D}else N.add(u);break e}else{if(!(e&1)){mg(s,d,e),ap();break e}u=Error(B(426))}}else if(je&&l.mode&1){var L=gg(o);if(L!==null){!(L.flags&65536)&&(L.flags|=256),yg(L,o,l,s,e),zf(Gs(u,l));break e}}s=u=Gs(u,l),Ze!==4&&(Ze=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var S=r_(s,u,e);ug(s,S);break e;case 1:l=u;var T=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof T.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(ai===null||!ai.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=i_(s,l,e);ug(s,O);break e}}s=s.return}while(s!==null)}I_(n)}catch($){e=$,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function E_(){var t=$u.current;return $u.current=Bu,t===null?Bu:t}function ap(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),rt===null||!(qi&268435455)&&!(Tc&268435455)||Gr(rt,ct)}function Hu(t,e){var n=_e;_e|=2;var r=E_();(rt!==t||ct!==e)&&(ur=null,Fi(t,e));do try{aI();break}catch(i){w_(t,i)}while(!0);if($f(),_e=n,$u.current=r,Qe!==null)throw Error(B(261));return rt=null,ct=0,Ze}function aI(){for(;Qe!==null;)T_(Qe)}function lI(){for(;Qe!==null&&!DE();)T_(Qe)}function T_(t){var e=S_(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?I_(t):Qe=e,np.current=null}function I_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tI(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Qe=null;return}}else if(n=eI(n,e,Yt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Ze===0&&(Ze=5)}function Ni(t,e,n){var r=xe,i=mn.transition;try{mn.transition=null,xe=1,uI(t,e,n,r)}finally{mn.transition=i,xe=r}return null}function uI(t,e,n,r){do js();while(ei!==null);if(_e&6)throw Error(B(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($E(t,s),t===rt&&(Qe=rt=null,ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wl||(Wl=!0,k_(Au,function(){return js(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=mn.transition,mn.transition=null;var o=xe;xe=1;var l=_e;_e|=4,np.current=null,rI(t,n),y_(n,t),RT(xh),Ru=!!Ih,xh=Ih=null,t.current=n,iI(n),OE(),_e=l,xe=o,mn.transition=s}else t.current=n;if(Wl&&(Wl=!1,ei=t,qu=i),s=t.pendingLanes,s===0&&(ai=null),LE(n.stateNode),zt(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Wu)throw Wu=!1,t=Wh,Wh=null,t;return qu&1&&t.tag!==0&&js(),s=t.pendingLanes,s&1?t===qh?aa++:(aa=0,qh=t):aa=0,Ei(),null}function js(){if(ei!==null){var t=r0(qu),e=mn.transition,n=xe;try{if(mn.transition=null,xe=16>t?16:t,ei===null)var r=!1;else{if(t=ei,ei=null,qu=0,_e&6)throw Error(B(331));var i=_e;for(_e|=4,X=t.current;X!==null;){var s=X,o=s.child;if(X.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(X=d;X!==null;){var p=X;switch(p.tag){case 0:case 11:case 15:sa(8,p,s)}var y=p.child;if(y!==null)y.return=p,X=y;else for(;X!==null;){p=X;var _=p.sibling,A=p.return;if(p_(p),p===d){X=null;break}if(_!==null){_.return=A,X=_;break}X=A}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var L=D.sibling;D.sibling=null,D=L}while(D!==null)}}X=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,X=o;else e:for(;X!==null;){if(s=X,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var S=s.sibling;if(S!==null){S.return=s.return,X=S;break e}X=s.return}}var T=t.current;for(X=T;X!==null;){o=X;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,X=k;else e:for(o=T;X!==null;){if(l=X,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch($){We(l,l.return,$)}if(l===o){X=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,X=O;break e}X=l.return}}if(_e=i,Ei(),qn&&typeof qn.onPostCommitFiberRoot=="function")try{qn.onPostCommitFiberRoot(fc,t)}catch{}r=!0}return r}finally{xe=n,mn.transition=e}}return!1}function bg(t,e,n){e=Gs(n,e),e=r_(t,e,1),t=oi(t,e,1),e=Pt(),t!==null&&(Ua(t,1,e),zt(t,e))}function We(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ai===null||!ai.has(r))){t=Gs(n,t),t=i_(e,t,1),e=oi(e,t,1),t=Pt(),e!==null&&(Ua(e,1,t),zt(e,t));break}}e=e.return}}function cI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ct&n)===n&&(Ze===4||Ze===3&&(ct&130023424)===ct&&500>Ke()-ip?Fi(t,0):rp|=n),zt(t,e)}function x_(t,e){e===0&&(t.mode&1?(e=Ol,Ol<<=1,!(Ol&130023424)&&(Ol=4194304)):e=1);var n=Pt();t=Er(t,e),t!==null&&(Ua(t,e,n),zt(t,n))}function dI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),x_(t,n)}function hI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),x_(t,n)}var S_;S_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,ZT(t,e,n);jt=!!(t.flags&131072)}else jt=!1,je&&e.flags&1048576&&R0(e,Mu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;du(t,e),t=e.pendingProps;var i=Ws(e,xt.current);Ls(e,n),i=Xf(null,e,r,t,i,n);var s=Jf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ut(r)?(s=!0,Ou(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hf(e),i.updater=wc,e.stateNode=i,i._reactInternals=e,Dh(e,r,t,n),e=Mh(null,e,r,!0,s,n)):(e.tag=0,je&&s&&Ff(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(du(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pI(r),t=kn(r,t),i){case 0:e=Vh(null,e,r,t,n);break e;case 1:e=wg(null,e,r,t,n);break e;case 11:e=vg(null,e,r,t,n);break e;case 14:e=_g(null,e,r,kn(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),Vh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),wg(t,e,r,i,n);case 3:e:{if(l_(e),t===null)throw Error(B(387));r=e.pendingProps,s=e.memoizedState,i=s.element,V0(t,e),Fu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Gs(Error(B(423)),e),e=Eg(t,e,r,n,i);break e}else if(r!==i){i=Gs(Error(B(424)),e),e=Eg(t,e,r,n,i);break e}else for(Xt=si(e.stateNode.containerInfo.firstChild),Zt=e,je=!0,Cn=null,n=D0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qs(),r===i){e=Tr(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return M0(e),t===null&&bh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Sh(r,i)?o=null:s!==null&&Sh(r,s)&&(e.flags|=32),a_(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&bh(e),null;case 13:return u_(t,e,n);case 4:return Kf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Hs(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),vg(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ne(Lu,r._currentValue),r._currentValue=o,s!==null)if(Nn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=gr(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ph(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(B(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ph(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ls(e,n),i=yn(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=kn(r,e.pendingProps),i=kn(r.type,i),_g(t,e,r,i,n);case 15:return s_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:kn(r,i),du(t,e),e.tag=1,Ut(r)?(t=!0,Ou(e)):t=!1,Ls(e,n),n_(e,r,i),Dh(e,r,i,n),Mh(null,e,r,!0,t,n);case 19:return c_(t,e,n);case 22:return o_(t,e,n)}throw Error(B(156,e.tag))};function k_(t,e){return Zv(t,e)}function fI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(t,e,n,r){return new fI(t,e,n,r)}function lp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pI(t){if(typeof t=="function")return lp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Af)return 11;if(t===Cf)return 14}return 2}function ui(t,e){var n=t.alternate;return n===null?(n=pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function pu(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")lp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return Ui(n.children,i,s,e);case kf:o=8,i|=8;break;case rh:return t=pn(12,n,e,i|2),t.elementType=rh,t.lanes=s,t;case ih:return t=pn(13,n,e,i),t.elementType=ih,t.lanes=s,t;case sh:return t=pn(19,n,e,i),t.elementType=sh,t.lanes=s,t;case Mv:return Ic(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ov:o=10;break e;case Vv:o=9;break e;case Af:o=11;break e;case Cf:o=14;break e;case qr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=pn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ui(t,e,n,r){return t=pn(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=pn(22,t,r,e),t.elementType=Mv,t.lanes=n,t.stateNode={isHidden:!1},t}function Md(t,e,n){return t=pn(6,t,null,e),t.lanes=n,t}function Ld(t,e,n){return e=pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yd(0),this.expirationTimes=yd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function up(t,e,n,r,i,s,o,l,u){return t=new mI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(s),t}function gI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function A_(t){if(!t)return pi;t=t._reactInternals;e:{if(Zi(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ut(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Ut(n))return A0(t,n,e)}return e}function C_(t,e,n,r,i,s,o,l,u){return t=up(n,r,!0,t,i,s,o,l,u),t.context=A_(null),n=t.current,r=Pt(),i=li(n),s=gr(r,i),s.callback=e??null,oi(n,s,i),t.current.lanes=i,Ua(t,i,r),zt(t,r),t}function xc(t,e,n,r){var i=e.current,s=Pt(),o=li(i);return n=A_(n),e.context===null?e.context=n:e.pendingContext=n,e=gr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=oi(i,e,o),t!==null&&(Pn(t,i,o,s),lu(t,i,o)),o}function Ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function cp(t,e){Pg(t,e),(t=t.alternate)&&Pg(t,e)}function yI(){return null}var R_=typeof reportError=="function"?reportError:function(t){console.error(t)};function dp(t){this._internalRoot=t}Sc.prototype.render=dp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));xc(t,e,null,null)};Sc.prototype.unmount=dp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Hi(function(){xc(null,t,null,null)}),e[wr]=null}};function Sc(t){this._internalRoot=t}Sc.prototype.unstable_scheduleHydration=function(t){if(t){var e=o0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kr.length&&e!==0&&e<Kr[n].priority;n++);Kr.splice(n,0,t),n===0&&l0(t)}};function hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ng(){}function vI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=Ku(o);s.call(d)}}var o=C_(e,r,t,0,null,!1,!1,"",Ng);return t._reactRootContainer=o,t[wr]=o.current,Ea(t.nodeType===8?t.parentNode:t),Hi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Ku(u);l.call(d)}}var u=up(t,0,!1,null,null,!1,!1,"",Ng);return t._reactRootContainer=u,t[wr]=u.current,Ea(t.nodeType===8?t.parentNode:t),Hi(function(){xc(e,u,n,r)}),u}function Ac(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=Ku(o);l.call(u)}}xc(e,o,t,i)}else o=vI(n,e,t,i,r);return Ku(o)}i0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ko(e.pendingLanes);n!==0&&(Pf(e,n|1),zt(e,Ke()),!(_e&6)&&(Qs=Ke()+500,Ei()))}break;case 13:Hi(function(){var r=Er(t,1);if(r!==null){var i=Pt();Pn(r,t,1,i)}}),cp(t,1)}};Nf=function(t){if(t.tag===13){var e=Er(t,134217728);if(e!==null){var n=Pt();Pn(e,t,134217728,n)}cp(t,134217728)}};s0=function(t){if(t.tag===13){var e=li(t),n=Er(t,e);if(n!==null){var r=Pt();Pn(n,t,e,r)}cp(t,e)}};o0=function(){return xe};a0=function(t,e){var n=xe;try{return xe=t,e()}finally{xe=n}};mh=function(t,e,n){switch(e){case"input":if(lh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=yc(r);if(!i)throw Error(B(90));jv(r),lh(r,i)}}}break;case"textarea":Uv(t,n);break;case"select":e=n.value,e!=null&&Ds(t,!!n.multiple,e,!1)}};Kv=sp;Gv=Hi;var _I={usingClientEntryPoint:!1,Events:[Ba,Ss,yc,qv,Hv,sp]},$o={findFiberByHostInstance:Vi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},wI={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:br.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xv(t),t===null?null:t.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||yI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{fc=ql.inject(wI),qn=ql}catch{}}tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_I;tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hp(e))throw Error(B(200));return gI(t,e,null,n)};tn.createRoot=function(t,e){if(!hp(t))throw Error(B(299));var n=!1,r="",i=R_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=up(t,1,!1,null,null,n,!1,r,i),t[wr]=e.current,Ea(t.nodeType===8?t.parentNode:t),new dp(e)};tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=Xv(e),t=t===null?null:t.stateNode,t};tn.flushSync=function(t){return Hi(t)};tn.hydrate=function(t,e,n){if(!kc(e))throw Error(B(200));return Ac(null,t,e,!0,n)};tn.hydrateRoot=function(t,e,n){if(!hp(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=R_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=C_(e,null,t,1,n??null,i,!1,s,o),t[wr]=e.current,Ea(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sc(e)};tn.render=function(t,e,n){if(!kc(e))throw Error(B(200));return Ac(null,t,e,!1,n)};tn.unmountComponentAtNode=function(t){if(!kc(t))throw Error(B(40));return t._reactRootContainer?(Hi(function(){Ac(null,null,t,!1,function(){t._reactRootContainer=null,t[wr]=null})}),!0):!1};tn.unstable_batchedUpdates=sp;tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!kc(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return Ac(t,e,n,!1,r)};tn.version="18.3.1-next-f1338f8080-20240426";function b_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(b_)}catch(t){console.error(t)}}b_(),bv.exports=tn;var EI=bv.exports,Dg=EI;th.createRoot=Dg.createRoot,th.hydrateRoot=Dg.hydrateRoot;var Og={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},TI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},N_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,p=s>>2,y=(s&3)<<4|l>>4;let _=(l&15)<<2|d>>6,A=d&63;u||(A=64,o||(_=64)),r.push(n[p],n[y],n[_],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(P_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const y=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new II;const _=s<<2|l>>4;if(r.push(_),d!==64){const A=l<<4&240|d>>2;if(r.push(A),y!==64){const N=d<<6&192|y;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class II extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xI=function(t){const e=P_(t);return N_.encodeByteArray(e,!0)},Gu=function(t){return xI(t).replace(/\./g,"")},D_=function(t){try{return N_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>SI().__FIREBASE_DEFAULTS__,AI=()=>{if(typeof process>"u"||typeof Og>"u")return;const t=Og.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},CI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&D_(t[1]);return e&&JSON.parse(e)},Cc=()=>{try{return kI()||AI()||CI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O_=t=>{var e,n;return(n=(e=Cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},V_=t=>{const e=O_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},M_=()=>{var t;return(t=Cc())===null||t===void 0?void 0:t.config},L_=t=>{var e;return(e=Cc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Gu(JSON.stringify(n)),Gu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function PI(){var t;const e=(t=Cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function DI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function OI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function MI(){return!PI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LI(){try{return typeof indexedDB=="object"}catch{return!1}}function jI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="FirebaseError";class er extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FI,Object.setPrototypeOf(this,er.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wa.prototype.create)}}class Wa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new er(i,l,r)}}function UI(t,e){return t.replace(zI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const zI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vg(s)&&Vg(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function $I(t,e){const n=new WI(t,e);return n.subscribe.bind(n)}class WI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");qI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jd),i.error===void 0&&(i.error=jd),i.complete===void 0&&(i.complete=jd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function qI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class mi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:Di})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Di){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Di){return this.instances.has(e)}getOptions(e=Di){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Di){return this.component?this.component.multipleInstances?e:Di:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===Di?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const YI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},XI=ye.INFO,JI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},ZI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=JI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fp{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const ex=(t,e)=>e.some(n=>t instanceof n);let Mg,Lg;function tx(){return Mg||(Mg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nx(){return Lg||(Lg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const F_=new WeakMap,Gh=new WeakMap,U_=new WeakMap,Fd=new WeakMap,pp=new WeakMap;function rx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ci(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&F_.set(n,t)}).catch(()=>{}),pp.set(e,t),e}function ix(t){if(Gh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Gh.set(t,e)}let Qh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Gh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||U_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function sx(t){Qh=t(Qh)}function ox(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ud(this),e,...n);return U_.set(r,e.sort?e.sort():[e]),ci(r)}:nx().includes(t)?function(...e){return t.apply(Ud(this),e),ci(F_.get(this))}:function(...e){return ci(t.apply(Ud(this),e))}}function ax(t){return typeof t=="function"?ox(t):(t instanceof IDBTransaction&&ix(t),ex(t,tx())?new Proxy(t,Qh):t)}function ci(t){if(t instanceof IDBRequest)return rx(t);if(Fd.has(t))return Fd.get(t);const e=ax(t);return e!==t&&(Fd.set(t,e),pp.set(e,t)),e}const Ud=t=>pp.get(t);function lx(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=ci(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ci(o.result),u.oldVersion,u.newVersion,ci(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const ux=["get","getKey","getAll","getAllKeys","count"],cx=["put","add","delete","clear"],zd=new Map;function jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zd.get(e))return zd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=cx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ux.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),i&&u.done]))[0]};return zd.set(e,s),s}sx(t=>({...t,get:(e,n,r)=>jg(e,n)||t.get(e,n,r),has:(e,n)=>!!jg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yh="@firebase/app",Fg="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new fp("@firebase/app"),fx="@firebase/app-compat",px="@firebase/analytics-compat",mx="@firebase/analytics",gx="@firebase/app-check-compat",yx="@firebase/app-check",vx="@firebase/auth",_x="@firebase/auth-compat",wx="@firebase/database",Ex="@firebase/data-connect",Tx="@firebase/database-compat",Ix="@firebase/functions",xx="@firebase/functions-compat",Sx="@firebase/installations",kx="@firebase/installations-compat",Ax="@firebase/messaging",Cx="@firebase/messaging-compat",Rx="@firebase/performance",bx="@firebase/performance-compat",Px="@firebase/remote-config",Nx="@firebase/remote-config-compat",Dx="@firebase/storage",Ox="@firebase/storage-compat",Vx="@firebase/firestore",Mx="@firebase/vertexai-preview",Lx="@firebase/firestore-compat",jx="firebase",Fx="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="[DEFAULT]",Ux={[Yh]:"fire-core",[fx]:"fire-core-compat",[mx]:"fire-analytics",[px]:"fire-analytics-compat",[yx]:"fire-app-check",[gx]:"fire-app-check-compat",[vx]:"fire-auth",[_x]:"fire-auth-compat",[wx]:"fire-rtdb",[Ex]:"fire-data-connect",[Tx]:"fire-rtdb-compat",[Ix]:"fire-fn",[xx]:"fire-fn-compat",[Sx]:"fire-iid",[kx]:"fire-iid-compat",[Ax]:"fire-fcm",[Cx]:"fire-fcm-compat",[Rx]:"fire-perf",[bx]:"fire-perf-compat",[Px]:"fire-rc",[Nx]:"fire-rc-compat",[Dx]:"fire-gcs",[Ox]:"fire-gcs-compat",[Vx]:"fire-fst",[Lx]:"fire-fst-compat",[Mx]:"fire-vertex","fire-js":"fire-js",[jx]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Map,zx=new Map,Jh=new Map;function Ug(t,e){try{t.container.addComponent(e)}catch(n){Ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(Jh.has(e))return Ir.debug(`There were multiple attempts to register component ${e}.`),!1;Jh.set(e,t);for(const n of Pa.values())Ug(n,t);for(const n of zx.values())Ug(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Wn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bx={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},di=new Wa("app","Firebase",Bx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $x{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw di.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=Fx;function z_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw di.create("bad-app-name",{appName:String(i)});if(n||(n=M_()),!n)throw di.create("no-options");const s=Pa.get(i);if(s){if(ba(n,s.options)&&ba(r,s.config))return s;throw di.create("duplicate-app",{appName:i})}const o=new QI(i);for(const u of Jh.values())o.addComponent(u);const l=new $x(n,r,o);return Pa.set(i,l),l}function mp(t=Xh){const e=Pa.get(t);if(!e&&t===Xh&&M_())return z_();if(!e)throw di.create("no-app",{appName:t});return e}function zg(){return Array.from(Pa.values())}function Kn(t,e,n){var r;let i=(r=Ux[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ir.warn(l.join(" "));return}Ki(new mi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx="firebase-heartbeat-database",qx=1,Na="firebase-heartbeat-store";let Bd=null;function B_(){return Bd||(Bd=lx(Wx,qx,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Na)}catch(n){console.warn(n)}}}}).catch(t=>{throw di.create("idb-open",{originalErrorMessage:t.message})})),Bd}async function Hx(t){try{const n=(await B_()).transaction(Na),r=await n.objectStore(Na).get($_(t));return await n.done,r}catch(e){if(e instanceof er)Ir.warn(e.message);else{const n=di.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ir.warn(n.message)}}}async function Bg(t,e){try{const r=(await B_()).transaction(Na,"readwrite");await r.objectStore(Na).put(e,$_(t)),await r.done}catch(n){if(n instanceof er)Ir.warn(n.message);else{const r=di.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ir.warn(r.message)}}}function $_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=1024,Gx=30*24*60*60*1e3;class Qx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Xx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$g();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=Gx}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$g(),{heartbeatsToSend:r,unsentEntries:i}=Yx(this._heartbeatsCache.heartbeats),s=Gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ir.warn(n),""}}}function $g(){return new Date().toISOString().substring(0,10)}function Yx(t,e=Kx){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wg(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Xx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LI()?jI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hx(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Bg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wg(t){return Gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jx(t){Ki(new mi("platform-logger",e=>new dx(e),"PRIVATE")),Ki(new mi("heartbeat",e=>new Qx(e),"PRIVATE")),Kn(Yh,Fg,t),Kn(Yh,Fg,"esm2017"),Kn("fire-js","")}Jx("");var Zx="firebase",e2="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(Zx,e2,"app");function gp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function W_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const t2=W_,q_=new Wa("auth","Firebase",W_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qu=new fp("@firebase/auth");function n2(t,...e){Qu.logLevel<=ye.WARN&&Qu.warn(`Auth (${es}): ${t}`,...e)}function mu(t,...e){Qu.logLevel<=ye.ERROR&&Qu.error(`Auth (${es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(t,...e){throw yp(t,...e)}function Gn(t,...e){return yp(t,...e)}function H_(t,e,n){const r=Object.assign(Object.assign({},t2()),{[e]:n});return new Wa("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return H_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function yp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q_.create(t,...e)}function oe(t,e,...n){if(!t)throw yp(e,...n)}function fr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mu(e),new Error(e)}function Sr(t,e){t||fr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function r2(){return qg()==="http:"||qg()==="https:"}function qg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(r2()||DI()||"connection"in navigator)?navigator.onLine:!0}function s2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Sr(n>e,"Short delay should be less than long delay!"),this.isMobile=bI()||OI()}get(){return i2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t,e){Sr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new Ha(3e4,6e4);function Ka(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ao(t,e,n,r,i={}){return G_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=qa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},s);return NI()||(d.referrerPolicy="no-referrer"),K_.fetch()(Q_(t,t.config.apiHost,n,l),d)})}async function G_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},o2),e);try{const i=new l2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Hl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Hl(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw H_(t,p,d);xr(t,p)}}catch(i){if(i instanceof er)throw i;xr(t,"network-request-failed",{message:String(i)})}}async function _p(t,e,n,r,i={}){const s=await ao(t,e,n,r,i);return"mfaPendingCredential"in s&&xr(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Q_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?vp(t.config,i):`${t.config.apiScheme}://${i}`}class l2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gn(this.auth,"network-request-failed")),a2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u2(t,e){return ao(t,"POST","/v1/accounts:delete",e)}async function Y_(t,e){return ao(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function c2(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=wp(r);oe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:la($d(i.auth_time)),issuedAtTime:la($d(i.iat)),expirationTime:la($d(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $d(t){return Number(t)*1e3}function wp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return mu("JWT malformed, contained fewer than 3 sections"),null;try{const i=D_(n);return i?JSON.parse(i):(mu("Failed to decode base64 JWT payload"),null)}catch(i){return mu("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Hg(t){const e=wp(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof er&&d2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function d2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=la(this.lastLoginAt),this.creationTime=la(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Da(t,Y_(n,{idToken:r}));oe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?X_(s.providerUserInfo):[],l=p2(t.providerData,o),u=t.isAnonymous,d=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,y={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new ef(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,y)}async function f2(t){const e=it(t);await Yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function X_(t){return t.map(e=>{var{providerId:n}=e,r=gp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m2(t,e){const n=await G_(t,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Q_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",K_.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function g2(t,e){return ao(t,"POST","/v2/accounts:revokeToken",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Hg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await m2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Fs;return r&&(oe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(oe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(oe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fs,this.toJSON())}_performRefresh(){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=gp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new h2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ef(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Da(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return c2(this,e)}reload(){return f2(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Wn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await Da(this,u2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,d,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,_=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,D=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,S=(d=n.createdAt)!==null&&d!==void 0?d:void 0,T=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:k,emailVerified:O,isAnonymous:$,providerData:W,stsTokenManager:w}=n;oe(k&&w,e,"internal-error");const v=Fs.fromJSON(this.name,w);oe(typeof k=="string",e,"internal-error"),$r(y,e.name),$r(_,e.name),oe(typeof O=="boolean",e,"internal-error"),oe(typeof $=="boolean",e,"internal-error"),$r(A,e.name),$r(N,e.name),$r(D,e.name),$r(L,e.name),$r(S,e.name),$r(T,e.name);const E=new pr({uid:k,auth:e,email:_,emailVerified:O,displayName:y,isAnonymous:$,photoURL:N,phoneNumber:A,tenantId:D,stsTokenManager:v,createdAt:S,lastLoginAt:T});return W&&Array.isArray(W)&&(E.providerData=W.map(x=>Object.assign({},x))),L&&(E._redirectEventId=L),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Fs;i.updateFromServerResponse(n);const s=new pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];oe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?X_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fs;l.updateFromIdToken(r);const u=new pr({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ef(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new Map;function mr(t){Sr(t instanceof Function,"Expected a class definition");let e=Kg.get(t);return e?(Sr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kg.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}J_.type="NONE";const Gg=J_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(t,e,n){return`firebase:${t}:${e}:${n}`}class Us{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gu(this.userKey,i.apiKey,s),this.fullPersistenceKey=gu("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Us(mr(Gg),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||mr(Gg);const o=gu(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const y=pr._fromJSON(e,p);d!==s&&(l=y),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Us(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new Us(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(nw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Z_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(iw(e))return"Blackberry";if(sw(e))return"Webos";if(ew(e))return"Safari";if((e.includes("chrome/")||tw(e))&&!e.includes("edge/"))return"Chrome";if(rw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Z_(t=St()){return/firefox\//i.test(t)}function ew(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tw(t=St()){return/crios\//i.test(t)}function nw(t=St()){return/iemobile/i.test(t)}function rw(t=St()){return/android/i.test(t)}function iw(t=St()){return/blackberry/i.test(t)}function sw(t=St()){return/webos/i.test(t)}function Ep(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function y2(t=St()){var e;return Ep(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function v2(){return VI()&&document.documentMode===10}function ow(t=St()){return Ep(t)||rw(t)||sw(t)||iw(t)||/windows phone/i.test(t)||nw(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(t,e=[]){let n;switch(t){case"Browser":n=Qg(St());break;case"Worker":n=`${Qg(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${es}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w2(t,e={}){return ao(t,"GET","/v2/passwordPolicy",Ka(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=6;class T2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:E2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yg(this),this.idTokenSubscription=new Yg(this),this.beforeStateQueue=new _2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Us.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Y_(this,{idToken:e}),r=await pr._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=s2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Wn(this.app))return Promise.reject(yr(this));const n=e?it(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Wn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Wn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await w2(this),n=new T2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await g2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Us.create(this,[mr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=aw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&n2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ga(t){return it(t)}class Yg{constructor(e){this.auth=e,this.observer=null,this.addObserver=$I(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x2(t){Tp=t}function S2(t){return Tp.loadJS(t)}function k2(){return Tp.gapiScript}function A2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C2(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e??{}))return i;xr(i,"already-initialized")}return n.initialize({options:e})}function R2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function b2(t,e,n){const r=Ga(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=lw(e),{host:o,port:l}=P2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),N2()}function lw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function P2(t){const e=lw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Xg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Xg(o)}}}function Xg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return fr("not implemented")}_getIdTokenResponse(e){return fr("not implemented")}_linkToIdToken(e,n){return fr("not implemented")}_getReauthenticationResolver(e){return fr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zs(t,e){return _p(t,"POST","/v1/accounts:signInWithIdp",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2="http://localhost";class Gi extends uw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xr("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=gp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,zs(e,n)}buildRequest(){const e={requestUri:D2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends cw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Qa{constructor(){super("facebook.com")}static credential(e){return Gi._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qr.credentialFromTaggedObject(e)}static credentialFromError(e){return Qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qr.credential(e.oauthAccessToken)}catch{return null}}}Qr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Qr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Gi._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yr.credentialFromTaggedObject(e)}static credentialFromError(e){return Yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yr.credential(n,r)}catch{return null}}}Yr.GOOGLE_SIGN_IN_METHOD="google.com";Yr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Qa{constructor(){super("github.com")}static credential(e){return Gi._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr extends Qa{constructor(){super("twitter.com")}static credential(e,n){return Gi._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Jr.credential(n,r)}catch{return null}}}Jr.TWITTER_SIGN_IN_METHOD="twitter.com";Jr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O2(t,e){return _p(t,"POST","/v1/accounts:signUp",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await pr._fromIdTokenResponse(e,r,i),o=Jg(r);return new kr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Jg(r);return new kr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Jg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zg(t){var e;if(Wn(t.app))return Promise.reject(yr(t));const n=Ga(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new kr({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await O2(n,{returnSecureToken:!0}),i=await kr._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu extends er{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Xu(e,n,r,i)}}function dw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xu._fromErrorAndOperation(t,s,e,r):s})}async function V2(t,e,n=!1){const r=await Da(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return kr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t,e,n=!1){const{auth:r}=t;if(Wn(r.app))return Promise.reject(yr(r));const i="reauthenticate";try{const s=await Da(t,dw(r,i,e,t),n);oe(s.idToken,r,"internal-error");const o=wp(s.idToken);oe(o,r,"internal-error");const{sub:l}=o;return oe(t.uid===l,r,"user-mismatch"),kr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xr(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L2(t,e,n=!1){if(Wn(t.app))return Promise.reject(yr(t));const r="signIn",i=await dw(t,r,e),s=await kr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j2(t,e){return _p(t,"POST","/v1/accounts:signInWithCustomToken",Ka(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F2(t,e){if(Wn(t.app))return Promise.reject(yr(t));const n=Ga(t),r=await j2(n,{token:e,returnSecureToken:!0}),i=await kr._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function U2(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function z2(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function B2(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}const Ju="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ju,"1"),this.storage.removeItem(Ju),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $2=1e3,W2=10;class fw extends hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ow(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);v2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,W2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fw.type="LOCAL";const q2=fw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw extends hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pw.type="SESSION";const mw=pw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new bc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async d=>d(n.origin,s)),u=await H2(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const d=Ip("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(y){const _=y;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(_.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(){return window}function G2(t){Qn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gw(){return typeof Qn().WorkerGlobalScope<"u"&&typeof Qn().importScripts=="function"}async function Q2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Y2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function X2(){return gw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="firebaseLocalStorageDb",J2=1,Zu="firebaseLocalStorage",vw="fbase_key";class Ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([Zu],e?"readwrite":"readonly").objectStore(Zu)}function Z2(){const t=indexedDB.deleteDatabase(yw);return new Ya(t).toPromise()}function tf(){const t=indexedDB.open(yw,J2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Zu,{keyPath:vw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Zu)?e(r):(r.close(),await Z2(),e(await tf()))})})}async function ey(t,e,n){const r=Pc(t,!0).put({[vw]:e,value:n});return new Ya(r).toPromise()}async function eS(t,e){const n=Pc(t,!1).get(e),r=await new Ya(n).toPromise();return r===void 0?null:r.value}function ty(t,e){const n=Pc(t,!0).delete(e);return new Ya(n).toPromise()}const tS=800,nS=3;class _w{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await tf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bc._getInstance(X2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Q2(),!this.activeServiceWorker)return;this.sender=new K2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Y2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await tf();return await ey(e,Ju,"1"),await ty(e,Ju),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ey(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ty(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Pc(i,!1).getAll();return new Ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}_w.type="LOCAL";const rS=_w;new Ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS(t,e){return e?mr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp extends uw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sS(t){return L2(t.auth,new xp(t),t.bypassAuthState)}function oS(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),M2(n,new xp(t),t.bypassAuthState)}async function aS(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),V2(n,new xp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sS;case"linkViaPopup":case"linkViaRedirect":return aS;case"reauthViaPopup":case"reauthViaRedirect":return oS;default:xr(this.auth,"internal-error")}}resolve(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=new Ha(2e3,1e4);class Ns extends ww{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ns.currentPopupAction&&Ns.currentPopupAction.cancel(),Ns.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Sr(this.filter.length===1,"Popup operations only handle one event");const e=Ip();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ns.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,lS.get())};e()}}Ns.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS="pendingRedirect",yu=new Map;class cS extends ww{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=yu.get(this.auth._key());if(!e){try{const r=await dS(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}yu.set(this.auth._key(),e)}return this.bypassAuthState||yu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dS(t,e){const n=pS(e),r=fS(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function hS(t,e){yu.set(t._key(),e)}function fS(t){return mr(t._redirectPersistence)}function pS(t){return gu(uS,t.config.apiKey,t.name)}async function mS(t,e,n=!1){if(Wn(t.app))return Promise.reject(yr(t));const r=Ga(t),i=iS(r,e),o=await new cS(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS=10*60*1e3;class yS{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!vS(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ew(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gS&&this.cachedEventUids.clear(),this.cachedEventUids.has(ny(e))}saveEventToCache(e){this.cachedEventUids.add(ny(e)),this.lastProcessedEventTime=Date.now()}}function ny(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ew({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function vS(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ew(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _S(t,e={}){return ao(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ES=/^https?/;async function TS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _S(t);for(const n of e)try{if(IS(n))return}catch{}xr(t,"unauthorized-domain")}function IS(t){const e=Zh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ES.test(n))return!1;if(wS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS=new Ha(3e4,6e4);function ry(){const t=Qn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function SS(t){return new Promise((e,n)=>{var r,i,s;function o(){ry(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ry(),n(Gn(t,"network-request-failed"))},timeout:xS.get()})}if(!((i=(r=Qn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Qn().gapi)===null||s===void 0)&&s.load)o();else{const l=A2("iframefcb");return Qn()[l]=()=>{gapi.load?o():n(Gn(t,"network-request-failed"))},S2(`${k2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw vu=null,e})}let vu=null;function kS(t){return vu=vu||SS(t),vu}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AS=new Ha(5e3,15e3),CS="__/auth/iframe",RS="emulator/auth/iframe",bS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},PS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NS(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vp(e,RS):`https://${t.config.authDomain}/${CS}`,r={apiKey:e.apiKey,appName:t.name,v:es},i=PS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${qa(r).slice(1)}`}async function DS(t){const e=await kS(t),n=Qn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:NS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gn(t,"network-request-failed"),l=Qn().setTimeout(()=>{s(o)},AS.get());function u(){Qn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VS=500,MS=600,LS="_blank",jS="http://localhost";class iy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function FS(t,e,n,r=VS,i=MS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},OS),{width:r.toString(),height:i.toString(),top:s,left:o}),d=St().toLowerCase();n&&(l=tw(d)?LS:n),Z_(d)&&(e=e||jS,u.scrollbars="yes");const p=Object.entries(u).reduce((_,[A,N])=>`${_}${A}=${N},`,"");if(y2(d)&&l!=="_self")return US(e||"",l),new iy(null);const y=window.open(e||"",l,p);oe(y,t,"popup-blocked");try{y.focus()}catch{}return new iy(y)}function US(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS="__/auth/handler",BS="emulator/auth/handler",$S=encodeURIComponent("fac");async function sy(t,e,n,r,i,s){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:es,eventId:i};if(e instanceof cw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,y]of Object.entries({}))o[p]=y}if(e instanceof Qa){const p=e.getScopes().filter(y=>y!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${$S}=${encodeURIComponent(u)}`:"";return`${WS(t)}?${qa(l).slice(1)}${d}`}function WS({config:t}){return t.emulator?vp(t,BS):`https://${t.authDomain}/${zS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="webStorageSupport";class qS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mw,this._completeRedirectFn=mS,this._overrideRedirectResult=hS}async _openPopup(e,n,r,i){var s;Sr((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sy(e,n,r,Zh(),i);return FS(e,o,Ip())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sy(e,n,r,Zh(),i);return G2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Sr(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DS(e),r=new yS(e);return n.register("authEvent",i=>(oe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wd,{type:Wd},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wd];o!==void 0&&n(!!o),xr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ow()||ew()||Ep()}}const HS=qS;var oy="@firebase/auth",ay="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function QS(t){Ki(new mi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;oe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aw(t)},d=new I2(r,i,s,u);return R2(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new mi("auth-internal",e=>{const n=Ga(e.getProvider("auth").getImmediate());return(r=>new KS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(oy,ay,GS(t)),Kn(oy,ay,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS=5*60,XS=L_("authIdTokenMaxAge")||YS;let ly=null;const JS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>XS)return;const i=n==null?void 0:n.token;ly!==i&&(ly=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ZS(t=mp()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C2(t,{popupRedirectResolver:HS,persistence:[rS,q2,mw]}),r=L_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=JS(s.toString());z2(n,o,()=>o(n.currentUser)),U2(n,l=>o(l))}}const i=O_("auth");return i&&b2(n,`http://${i}`),n}function ek(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}x2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ek().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});QS("Browser");var uy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zi,Tw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.D=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(x,C,R){for(var I=Array(arguments.length-2),Ce=2;Ce<arguments.length;Ce++)I[Ce-2]=arguments[Ce];return v.prototype[C].apply(x,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,v,E){E||(E=0);var x=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)x[C]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(C=0;16>C;++C)x[C]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],C=w.g[2];var R=w.g[3],I=v+(R^E&(C^R))+x[0]+3614090360&4294967295;v=E+(I<<7&4294967295|I>>>25),I=R+(C^v&(E^C))+x[1]+3905402710&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(E^R&(v^E))+x[2]+606105819&4294967295,C=R+(I<<17&4294967295|I>>>15),I=E+(v^C&(R^v))+x[3]+3250441966&4294967295,E=C+(I<<22&4294967295|I>>>10),I=v+(R^E&(C^R))+x[4]+4118548399&4294967295,v=E+(I<<7&4294967295|I>>>25),I=R+(C^v&(E^C))+x[5]+1200080426&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(E^R&(v^E))+x[6]+2821735955&4294967295,C=R+(I<<17&4294967295|I>>>15),I=E+(v^C&(R^v))+x[7]+4249261313&4294967295,E=C+(I<<22&4294967295|I>>>10),I=v+(R^E&(C^R))+x[8]+1770035416&4294967295,v=E+(I<<7&4294967295|I>>>25),I=R+(C^v&(E^C))+x[9]+2336552879&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(E^R&(v^E))+x[10]+4294925233&4294967295,C=R+(I<<17&4294967295|I>>>15),I=E+(v^C&(R^v))+x[11]+2304563134&4294967295,E=C+(I<<22&4294967295|I>>>10),I=v+(R^E&(C^R))+x[12]+1804603682&4294967295,v=E+(I<<7&4294967295|I>>>25),I=R+(C^v&(E^C))+x[13]+4254626195&4294967295,R=v+(I<<12&4294967295|I>>>20),I=C+(E^R&(v^E))+x[14]+2792965006&4294967295,C=R+(I<<17&4294967295|I>>>15),I=E+(v^C&(R^v))+x[15]+1236535329&4294967295,E=C+(I<<22&4294967295|I>>>10),I=v+(C^R&(E^C))+x[1]+4129170786&4294967295,v=E+(I<<5&4294967295|I>>>27),I=R+(E^C&(v^E))+x[6]+3225465664&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^E&(R^v))+x[11]+643717713&4294967295,C=R+(I<<14&4294967295|I>>>18),I=E+(R^v&(C^R))+x[0]+3921069994&4294967295,E=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(E^C))+x[5]+3593408605&4294967295,v=E+(I<<5&4294967295|I>>>27),I=R+(E^C&(v^E))+x[10]+38016083&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^E&(R^v))+x[15]+3634488961&4294967295,C=R+(I<<14&4294967295|I>>>18),I=E+(R^v&(C^R))+x[4]+3889429448&4294967295,E=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(E^C))+x[9]+568446438&4294967295,v=E+(I<<5&4294967295|I>>>27),I=R+(E^C&(v^E))+x[14]+3275163606&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^E&(R^v))+x[3]+4107603335&4294967295,C=R+(I<<14&4294967295|I>>>18),I=E+(R^v&(C^R))+x[8]+1163531501&4294967295,E=C+(I<<20&4294967295|I>>>12),I=v+(C^R&(E^C))+x[13]+2850285829&4294967295,v=E+(I<<5&4294967295|I>>>27),I=R+(E^C&(v^E))+x[2]+4243563512&4294967295,R=v+(I<<9&4294967295|I>>>23),I=C+(v^E&(R^v))+x[7]+1735328473&4294967295,C=R+(I<<14&4294967295|I>>>18),I=E+(R^v&(C^R))+x[12]+2368359562&4294967295,E=C+(I<<20&4294967295|I>>>12),I=v+(E^C^R)+x[5]+4294588738&4294967295,v=E+(I<<4&4294967295|I>>>28),I=R+(v^E^C)+x[8]+2272392833&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^E)+x[11]+1839030562&4294967295,C=R+(I<<16&4294967295|I>>>16),I=E+(C^R^v)+x[14]+4259657740&4294967295,E=C+(I<<23&4294967295|I>>>9),I=v+(E^C^R)+x[1]+2763975236&4294967295,v=E+(I<<4&4294967295|I>>>28),I=R+(v^E^C)+x[4]+1272893353&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^E)+x[7]+4139469664&4294967295,C=R+(I<<16&4294967295|I>>>16),I=E+(C^R^v)+x[10]+3200236656&4294967295,E=C+(I<<23&4294967295|I>>>9),I=v+(E^C^R)+x[13]+681279174&4294967295,v=E+(I<<4&4294967295|I>>>28),I=R+(v^E^C)+x[0]+3936430074&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^E)+x[3]+3572445317&4294967295,C=R+(I<<16&4294967295|I>>>16),I=E+(C^R^v)+x[6]+76029189&4294967295,E=C+(I<<23&4294967295|I>>>9),I=v+(E^C^R)+x[9]+3654602809&4294967295,v=E+(I<<4&4294967295|I>>>28),I=R+(v^E^C)+x[12]+3873151461&4294967295,R=v+(I<<11&4294967295|I>>>21),I=C+(R^v^E)+x[15]+530742520&4294967295,C=R+(I<<16&4294967295|I>>>16),I=E+(C^R^v)+x[2]+3299628645&4294967295,E=C+(I<<23&4294967295|I>>>9),I=v+(C^(E|~R))+x[0]+4096336452&4294967295,v=E+(I<<6&4294967295|I>>>26),I=R+(E^(v|~C))+x[7]+1126891415&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~E))+x[14]+2878612391&4294967295,C=R+(I<<15&4294967295|I>>>17),I=E+(R^(C|~v))+x[5]+4237533241&4294967295,E=C+(I<<21&4294967295|I>>>11),I=v+(C^(E|~R))+x[12]+1700485571&4294967295,v=E+(I<<6&4294967295|I>>>26),I=R+(E^(v|~C))+x[3]+2399980690&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~E))+x[10]+4293915773&4294967295,C=R+(I<<15&4294967295|I>>>17),I=E+(R^(C|~v))+x[1]+2240044497&4294967295,E=C+(I<<21&4294967295|I>>>11),I=v+(C^(E|~R))+x[8]+1873313359&4294967295,v=E+(I<<6&4294967295|I>>>26),I=R+(E^(v|~C))+x[15]+4264355552&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~E))+x[6]+2734768916&4294967295,C=R+(I<<15&4294967295|I>>>17),I=E+(R^(C|~v))+x[13]+1309151649&4294967295,E=C+(I<<21&4294967295|I>>>11),I=v+(C^(E|~R))+x[4]+4149444226&4294967295,v=E+(I<<6&4294967295|I>>>26),I=R+(E^(v|~C))+x[11]+3174756917&4294967295,R=v+(I<<10&4294967295|I>>>22),I=C+(v^(R|~E))+x[2]+718787259&4294967295,C=R+(I<<15&4294967295|I>>>17),I=E+(R^(C|~v))+x[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(C+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+C&4294967295,w.g[3]=w.g[3]+R&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var E=v-this.blockSize,x=this.B,C=this.h,R=0;R<v;){if(C==0)for(;R<=E;)i(this,w,R),R+=this.blockSize;if(typeof w=="string"){for(;R<v;)if(x[C++]=w.charCodeAt(R++),C==this.blockSize){i(this,x),C=0;break}}else for(;R<v;)if(x[C++]=w[R++],C==this.blockSize){i(this,x),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var E=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=E&255,E/=256;for(this.u(w),w=Array(16),v=E=0;4>v;++v)for(var x=0;32>x;x+=8)w[E++]=this.g[v]>>>x&255;return w};function s(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;for(var E=[],x=!0,C=w.length-1;0<=C;C--){var R=w[C]|0;x&&R==v||(E[C]=R,x=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?s(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return y;if(0>w)return L(d(-w));for(var v=[],E=1,x=0;w>=E;x++)v[x]=w/E|0,E*=4294967296;return new o(v,0)}function p(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return L(p(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),x=y,C=0;C<w.length;C+=8){var R=Math.min(8,w.length-C),I=parseInt(w.substring(C,C+R),v);8>R?(R=d(Math.pow(v,R)),x=x.j(R).add(d(I))):(x=x.j(E),x=x.add(d(I)))}return x}var y=u(0),_=u(1),A=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-L(this).m();for(var w=0,v=1,E=0;E<this.g.length;E++){var x=this.i(E);w+=(0<=x?x:4294967296+x)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(N(this))return"0";if(D(this))return"-"+L(this).toString(w);for(var v=d(Math.pow(w,6)),E=this,x="";;){var C=O(E,v).g;E=S(E,C.j(v));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=C,N(E))return R+x;for(;6>R.length;)R="0"+R;x=R+x}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function N(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function D(w){return w.h==-1}t.l=function(w){return w=S(this,w),D(w)?-1:N(w)?0:1};function L(w){for(var v=w.g.length,E=[],x=0;x<v;x++)E[x]=~w.g[x];return new o(E,~w.h).add(_)}t.abs=function(){return D(this)?L(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],x=0,C=0;C<=v;C++){var R=x+(this.i(C)&65535)+(w.i(C)&65535),I=(R>>>16)+(this.i(C)>>>16)+(w.i(C)>>>16);x=I>>>16,R&=65535,I&=65535,E[C]=I<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function S(w,v){return w.add(L(v))}t.j=function(w){if(N(this)||N(w))return y;if(D(this))return D(w)?L(this).j(L(w)):L(L(this).j(w));if(D(w))return L(this.j(L(w)));if(0>this.l(A)&&0>w.l(A))return d(this.m()*w.m());for(var v=this.g.length+w.g.length,E=[],x=0;x<2*v;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var C=0;C<w.g.length;C++){var R=this.i(x)>>>16,I=this.i(x)&65535,Ce=w.i(C)>>>16,$t=w.i(C)&65535;E[2*x+2*C]+=I*$t,T(E,2*x+2*C),E[2*x+2*C+1]+=R*$t,T(E,2*x+2*C+1),E[2*x+2*C+1]+=I*Ce,T(E,2*x+2*C+1),E[2*x+2*C+2]+=R*Ce,T(E,2*x+2*C+2)}for(x=0;x<v;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=v;x<2*v;x++)E[x]=0;return new o(E,0)};function T(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function k(w,v){this.g=w,this.h=v}function O(w,v){if(N(v))throw Error("division by zero");if(N(w))return new k(y,y);if(D(w))return v=O(L(w),v),new k(L(v.g),L(v.h));if(D(v))return v=O(w,L(v)),new k(L(v.g),v.h);if(30<w.g.length){if(D(w)||D(v))throw Error("slowDivide_ only works with positive integers.");for(var E=_,x=v;0>=x.l(w);)E=$(E),x=$(x);var C=W(E,1),R=W(x,1);for(x=W(x,2),E=W(E,2);!N(x);){var I=R.add(x);0>=I.l(w)&&(C=C.add(E),R=I),x=W(x,1),E=W(E,1)}return v=S(w,C.j(v)),new k(C,v)}for(C=y;0<=w.l(v);){for(E=Math.max(1,Math.floor(w.m()/v.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),R=d(E),I=R.j(v);D(I)||0<I.l(w);)E-=x,R=d(E),I=R.j(v);N(R)&&(R=_),C=C.add(R),w=S(w,I)}return new k(C,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)&w.i(x);return new o(E,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)|w.i(x);return new o(E,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],x=0;x<v;x++)E[x]=this.i(x)^w.i(x);return new o(E,this.h^w.h)};function $(w){for(var v=w.g.length+1,E=[],x=0;x<v;x++)E[x]=w.i(x)<<1|w.i(x-1)>>>31;return new o(E,w.h)}function W(w,v){var E=v>>5;v%=32;for(var x=w.g.length-E,C=[],R=0;R<x;R++)C[R]=0<v?w.i(R+E)>>>v|w.i(R+E+1)<<32-v:w.i(R+E);return new o(C,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Tw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,zi=o}).apply(typeof uy<"u"?uy:typeof self<"u"?self:typeof window<"u"?window:{});var Kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Iw,Qo,xw,_u,nf,Sw,kw,Aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Kl=="object"&&Kl];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var h=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in h))break e;h=h[P]}a=a[a.length-1],g=h[a],c=c(g),c!=g&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var h=0,g=!1,P={next:function(){if(!g&&h<a.length){var V=h++;return{value:c(V,a[V]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,h){return a.call.apply(a.bind,arguments)}function y(a,c,h){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function _(a,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:y,_.apply(null,arguments)}function A(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var g=h.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function N(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(g,P,V){for(var H=Array(arguments.length-2),be=2;be<arguments.length;be++)H[be-2]=arguments[be];return c.prototype[P].apply(g,H)}}function D(a){const c=a.length;if(0<c){const h=Array(c);for(let g=0;g<c;g++)h[g]=a[g];return h}return[]}function L(a,c){for(let h=1;h<arguments.length;h++){const g=arguments[h];if(u(g)){const P=a.length||0,V=g.length||0;a.length=P+V;for(let H=0;H<V;H++)a[P+H]=g[H]}else a.push(g)}}class S{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function T(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var $=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function W(a,c,h){for(const g in a)c.call(h,a[g],g,a)}function w(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let h,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(h in g)a[h]=g[h];for(let V=0;V<E.length;V++)h=E[V],Object.prototype.hasOwnProperty.call(g,h)&&(a[h]=g[h])}}function C(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function R(a){l.setTimeout(()=>{throw a},0)}function I(){var a=se;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ce{constructor(){this.h=this.g=null}add(c,h){const g=$t.get();g.set(c,h),this.h?this.h.next=g:this.g=g,this.h=g}}var $t=new S(()=>new On,a=>a.reset());class On{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Wt,K=!1,se=new Ce,ie=()=>{const a=l.Promise.resolve(void 0);Wt=()=>{a.then(Pe)}};var Pe=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(h){R(h)}var c=$t;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}K=!1};function ke(){this.s=this.s,this.C=this.C}ke.prototype.s=!1,ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Fe(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}Fe.prototype.h=function(){this.defaultPrevented=!0};var qt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function Ot(a,c){if(Fe.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if($){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:rn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ot.aa.h.call(this)}}N(Ot,Fe);var rn={2:"touch",3:"pen",4:"mouse"};Ot.prototype.h=function(){Ot.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var sn="closure_listenable_"+(1e6*Math.random()|0),is=0;function Pr(a,c,h,g,P){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!g,this.ha=P,this.key=++is,this.da=this.fa=!1}function nr(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function on(a){this.src=a,this.g={},this.h=0}on.prototype.add=function(a,c,h,g,P){var V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);var H=_n(a,c,g,P);return-1<H?(c=a[H],h||(c.fa=!1)):(c=new Pr(c,this.src,V,!!g,P),c.fa=h,a.push(c)),c};function rr(a,c){var h=c.type;if(h in a.g){var g=a.g[h],P=Array.prototype.indexOf.call(g,c,void 0),V;(V=0<=P)&&Array.prototype.splice.call(g,P,1),V&&(nr(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function _n(a,c,h,g){for(var P=0;P<a.length;++P){var V=a[P];if(!V.da&&V.listener==c&&V.capture==!!h&&V.ha==g)return P}return-1}var Nr="closure_lm_"+(1e6*Math.random()|0),fo={};function ss(a,c,h,g,P){if(Array.isArray(c)){for(var V=0;V<c.length;V++)ss(a,c[V],h,g,P);return null}return h=Dr(h),a&&a[sn]?a.K(c,h,d(g)?!!g.capture:!1,P):Ht(a,c,h,!1,g,P)}function Ht(a,c,h,g,P,V){if(!c)throw Error("Invalid event type");var H=d(P)?!!P.capture:!!P,be=Ii(a);if(be||(a[Nr]=be=new on(a)),h=be.add(c,h,g,H,V),h.proxy)return h;if(g=po(),h.proxy=g,g.src=a,g.listener=h,a.addEventListener)qt||(P=H),P===void 0&&(P=!1),a.addEventListener(c.toString(),g,P);else if(a.attachEvent)a.attachEvent(go(c.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return h}function po(){function a(h){return c.call(a.src,a.listener,h)}const c=yo;return a}function Jc(a,c,h,g,P){if(Array.isArray(c))for(var V=0;V<c.length;V++)Jc(a,c[V],h,g,P);else g=d(g)?!!g.capture:!!g,h=Dr(h),a&&a[sn]?(a=a.i,c=String(c).toString(),c in a.g&&(V=a.g[c],h=_n(V,h,g,P),-1<h&&(nr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete a.g[c],a.h--)))):a&&(a=Ii(a))&&(c=a.g[c.toString()],a=-1,c&&(a=_n(c,h,g,P)),(h=-1<a?c[a]:null)&&mo(h))}function mo(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[sn])rr(c.i,a);else{var h=a.type,g=a.proxy;c.removeEventListener?c.removeEventListener(h,g,a.capture):c.detachEvent?c.detachEvent(go(h),g):c.addListener&&c.removeListener&&c.removeListener(g),(h=Ii(c))?(rr(h,a),h.h==0&&(h.src=null,c[Nr]=null)):nr(a)}}}function go(a){return a in fo?fo[a]:fo[a]="on"+a}function yo(a,c){if(a.da)a=!0;else{c=new Ot(c,this);var h=a.listener,g=a.ha||a.src;a.fa&&mo(a),a=h.call(g,c)}return a}function Ii(a){return a=a[Nr],a instanceof on?a:null}var fe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dr(a){return typeof a=="function"?a:(a[fe]||(a[fe]=function(c){return a.handleEvent(c)}),a[fe])}function qe(){ke.call(this),this.i=new on(this),this.M=this,this.F=null}N(qe,ke),qe.prototype[sn]=!0,qe.prototype.removeEventListener=function(a,c,h,g){Jc(this,a,c,h,g)};function Xe(a,c){var h,g=a.F;if(g)for(h=[];g;g=g.F)h.push(g);if(a=a.M,g=c.type||c,typeof c=="string")c=new Fe(c,a);else if(c instanceof Fe)c.target=c.target||a;else{var P=c;c=new Fe(g,a),x(c,P)}if(P=!0,h)for(var V=h.length-1;0<=V;V--){var H=c.g=h[V];P=Vn(H,g,!0,c)&&P}if(H=c.g=a,P=Vn(H,g,!0,c)&&P,P=Vn(H,g,!1,c)&&P,h)for(V=0;V<h.length;V++)H=c.g=h[V],P=Vn(H,g,!1,c)&&P}qe.prototype.N=function(){if(qe.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],g=0;g<h.length;g++)nr(h[g]);delete a.g[c],a.h--}}this.F=null},qe.prototype.K=function(a,c,h,g){return this.i.add(String(a),c,!1,h,g)},qe.prototype.L=function(a,c,h,g){return this.i.add(String(a),c,!0,h,g)};function Vn(a,c,h,g){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,V=0;V<c.length;++V){var H=c[V];if(H&&!H.da&&H.capture==h){var be=H.listener,st=H.ha||H.src;H.fa&&rr(a.i,H),P=be.call(st,g)!==!1&&P}}return P&&!g.defaultPrevented}function Mn(a,c,h){if(typeof a=="function")h&&(a=_(a,h));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function wn(a){a.g=Mn(()=>{a.g=null,a.i&&(a.i=!1,wn(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Zc extends ke{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:wn(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function kt(a){ke.call(this),this.h=a,this.g={}}N(kt,ke);var os=[];function xi(a){W(a.g,function(c,h){this.g.hasOwnProperty(h)&&mo(c)},a),a.g={}}kt.prototype.N=function(){kt.aa.N.call(this),xi(this)},kt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=l.JSON.stringify,ed=l.JSON.parse,Vr=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mr(){}Mr.prototype.h=null;function Si(a){return a.h||(a.h=a.i())}function Re(){}var Lr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function il(){Fe.call(this,"d")}N(il,Fe);function sl(){Fe.call(this,"c")}N(sl,Fe);var an={},vo=null;function ln(){return vo=vo||new qe}an.La="serverreachability";function _o(a){Fe.call(this,an.La,a)}N(_o,Fe);function un(a){const c=ln();Xe(c,new _o(c))}an.STAT_EVENT="statevent";function ki(a,c){Fe.call(this,an.STAT_EVENT,a),this.stat=c}N(ki,Fe);function De(a){const c=ln();Xe(c,new ki(c,a))}an.Ma="timingevent";function wo(a,c){Fe.call(this,an.Ma,a),this.size=c}N(wo,Fe);function jr(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ai(){this.g=!0}Ai.prototype.xa=function(){this.g=!1};function td(a,c,h,g,P,V){a.info(function(){if(a.g)if(V)for(var H="",be=V.split("&"),st=0;st<be.length;st++){var we=be[st].split("=");if(1<we.length){var mt=we[0];we=we[1];var gt=mt.split("_");H=2<=gt.length&&gt[1]=="type"?H+(mt+"="+we+"&"):H+(mt+"=redacted&")}}else H=null;else H=V;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+c+`
`+h+`
`+H})}function En(a,c,h,g,P,V,H){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+c+`
`+h+`
`+V+" "+H})}function Fr(a,c,h,g){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+al(a,h)+(g?" "+g:"")})}function ol(a,c){a.info(function(){return"TIMEOUT: "+c})}Ai.prototype.info=function(){};function al(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var g=h[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var V=P[0];if(V!="noop"&&V!="stop"&&V!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return Or(h)}catch{return c}}var Eo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},nd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ll;function To(){}N(To,Mr),To.prototype.g=function(){return new XMLHttpRequest},To.prototype.i=function(){return{}},ll=new To;function At(a,c,h,g){this.j=a,this.i=c,this.l=h,this.R=g||1,this.U=new kt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ir}function ir(){this.i=null,this.g="",this.h=!1}var Tn={},Ct={};function as(a,c,h){a.L=1,a.v=hs(Kt(c)),a.m=h,a.P=!0,ul(a,null)}function ul(a,c){a.F=Date.now(),ls(a),a.A=Kt(a.v);var h=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Do(h.i,"t",g),a.C=0,h=a.j.J,a.h=new ir,a.g=Em(a.j,h?c:null,!a.m),0<a.O&&(a.M=new Zc(_(a.Y,a,a.g),a.O)),c=a.U,h=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(os[0]=P.toString()),P=os);for(var V=0;V<P.length;V++){var H=ss(h,P[V],g||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),un(),td(a.i,a.u,a.A,a.l,a.R,a.m)}At.prototype.ca=function(a){a=a.target;const c=this.M;c&&ar(a)==3?c.j():this.Y(a)},At.prototype.Y=function(a){try{if(a==this.g)e:{const gt=ar(this.g);var c=this.g.Ba();const ps=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||cm(this.g)))){this.J||gt!=4||c==7||(c==8||0>=ps?un(3):un(2)),us(this);var h=this.g.Z();this.X=h;t:if(Io(this)){var g=cm(this.g);a="";var P=g.length,V=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ln(this),Ur(this);var H="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(g[c],{stream:!(V&&c==P-1)});g.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=h==200,En(this.i,this.u,this.A,this.l,this.R,gt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var be,st=this.g;if((be=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!T(be)){var we=be;break t}}we=null}if(h=we)Fr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xo(this,h);else{this.o=!1,this.s=3,De(12),Ln(this),Ur(this);break e}}if(this.P){h=!0;let xn;for(;!this.J&&this.C<H.length;)if(xn=cl(this,H),xn==Ct){gt==4&&(this.s=4,De(14),h=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(xn==Tn){this.s=4,De(15),Fr(this.i,this.l,H,"[Invalid Chunk]"),h=!1;break}else Fr(this.i,this.l,xn,null),xo(this,xn);if(Io(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||H.length!=0||this.h.h||(this.s=1,De(16),h=!1),this.o=this.o&&h,!h)Fr(this.i,this.l,H,"[Invalid Chunked Response]"),Ln(this),Ur(this);else if(0<H.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),cd(mt),mt.M=!0,De(11))}}else Fr(this.i,this.l,H,null),xo(this,H);gt==4&&Ln(this),this.o&&!this.J&&(gt==4?ym(this.j,this):(this.o=!1,ls(this)))}else K1(this.g),h==400&&0<H.indexOf("Unknown SID")?(this.s=3,De(12)):(this.s=0,De(13)),Ln(this),Ur(this)}}}catch{}finally{}};function Io(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function cl(a,c){var h=a.C,g=c.indexOf(`
`,h);return g==-1?Ct:(h=Number(c.substring(h,g)),isNaN(h)?Tn:(g+=1,g+h>c.length?Ct:(c=c.slice(g,g+h),a.C=g+h,c)))}At.prototype.cancel=function(){this.J=!0,Ln(this)};function ls(a){a.S=Date.now()+a.I,dl(a,a.I)}function dl(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=jr(_(a.ba,a),c)}function us(a){a.B&&(l.clearTimeout(a.B),a.B=null)}At.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ol(this.i,this.A),this.L!=2&&(un(),De(17)),Ln(this),this.s=2,Ur(this)):dl(this,this.S-a)};function Ur(a){a.j.G==0||a.J||ym(a.j,a)}function Ln(a){us(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,xi(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function xo(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||cs(h.h,a))){if(!a.K&&cs(h.h,a)&&h.G==3){try{var g=h.Da.g.parse(c)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)kl(h),xl(h);else break e;ud(h),De(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=jr(_(h.Za,h),6e3));if(1>=fl(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else bi(h,11)}else if((a.K||h.g==a)&&kl(h),!T(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let we=P[c];if(h.T=we[0],we=we[1],h.G==2)if(we[0]=="c"){h.K=we[1],h.ia=we[2];const mt=we[3];mt!=null&&(h.la=mt,h.j.info("VER="+h.la));const gt=we[4];gt!=null&&(h.Aa=gt,h.j.info("SVER="+h.Aa));const ps=we[5];ps!=null&&typeof ps=="number"&&0<ps&&(g=1.5*ps,h.L=g,h.j.info("backChannelRequestTimeoutMs_="+g)),g=h;const xn=a.g;if(xn){const Cl=xn.g?xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cl){var V=g.h;V.g||Cl.indexOf("spdy")==-1&&Cl.indexOf("quic")==-1&&Cl.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(ko(V,V.h),V.h=null))}if(g.D){const dd=xn.g?xn.g.getResponseHeader("X-HTTP-Session-Id"):null;dd&&(g.ya=dd,Ie(g.I,g.D,dd))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),g=h;var H=a;if(g.qa=wm(g,g.J?g.ia:null,g.W),H.K){pl(g.h,H);var be=H,st=g.L;st&&(be.I=st),be.B&&(us(be),ls(be)),g.g=H}else mm(g);0<h.i.length&&Sl(h)}else we[0]!="stop"&&we[0]!="close"||bi(h,7);else h.G==3&&(we[0]=="stop"||we[0]=="close"?we[0]=="stop"?bi(h,7):ld(h):we[0]!="noop"&&h.l&&h.l.ta(we),h.v=0)}}un(4)}catch{}}var rd=class{constructor(a,c){this.g=a,this.map=c}};function So(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function fl(a){return a.h?1:a.g?a.g.size:0}function cs(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ko(a,c){a.g?a.g.add(c):a.h=c}function pl(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}So.prototype.cancel=function(){if(this.i=ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ml(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return D(a.i)}function id(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,g=0;g<h;g++)c.push(a[g]);return c}c=[],h=0;for(g in a)c[h++]=a[g];return c}function gl(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const g in a)c[h++]=g;return c}}}function Ao(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=gl(a),g=id(a),P=g.length,V=0;V<P;V++)c.call(void 0,g[V],h&&h[V],a)}var Co=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ro(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var g=a[h].indexOf("="),P=null;if(0<=g){var V=a[h].substring(0,g);P=a[h].substring(g+1)}else V=a[h];c(V,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function jn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jn){this.h=a.h,ds(this,a.j),this.o=a.o,this.g=a.g,Fn(this,a.s),this.l=a.l;var c=a.i,h=new sr;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),yl(this,h),this.m=a.m}else a&&(c=String(a).match(Co))?(this.h=!1,ds(this,c[1]||"",!0),this.o=Ci(c[2]||""),this.g=Ci(c[3]||"",!0),Fn(this,c[4]),this.l=Ci(c[5]||"",!0),yl(this,c[6]||"",!0),this.m=Ci(c[7]||"")):(this.h=!1,this.i=new sr(null,this.h))}jn.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ri(c,vl,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ri(c,vl,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Ri(h,h.charAt(0)=="/"?od:_l,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Ri(h,bo)),a.join("")};function Kt(a){return new jn(a)}function ds(a,c,h){a.j=h?Ci(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function Fn(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function yl(a,c,h){c instanceof sr?(a.i=c,wl(a.i,a.h)):(h||(c=Ri(c,ad)),a.i=new sr(c,a.h))}function Ie(a,c,h){a.i.set(c,h)}function hs(a){return Ie(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ci(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ri(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,sd),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function sd(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var vl=/[#\/\?@]/g,_l=/[#\?:]/g,od=/[#\?]/g,ad=/[#\?@]/g,bo=/#/g;function sr(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function In(a){a.g||(a.g=new Map,a.h=0,a.i&&Ro(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=sr.prototype,t.add=function(a,c){In(this),this.i=null,a=or(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Po(a,c){In(a),c=or(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function No(a,c){return In(a),c=or(a,c),a.g.has(c)}t.forEach=function(a,c){In(this),this.g.forEach(function(h,g){h.forEach(function(P){a.call(c,P,g,this)},this)},this)},t.na=function(){In(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let g=0;g<c.length;g++){const P=a[g];for(let V=0;V<P.length;V++)h.push(c[g])}return h},t.V=function(a){In(this);let c=[];if(typeof a=="string")No(this,a)&&(c=c.concat(this.g.get(or(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return In(this),this.i=null,a=or(this,a),No(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Do(a,c,h){Po(a,c),0<h.length&&(a.i=null,a.g.set(or(a,c),D(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var g=c[h];const V=encodeURIComponent(String(g)),H=this.V(g);for(g=0;g<H.length;g++){var P=V;H[g]!==""&&(P+="="+encodeURIComponent(String(H[g]))),a.push(P)}}return this.i=a.join("&")};function or(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function wl(a,c){c&&!a.j&&(In(a),a.i=null,a.g.forEach(function(h,g){var P=g.toLowerCase();g!=P&&(Po(this,g),Do(this,P,h))},a)),a.j=c}function El(a,c){const h=new Ai;if(l.Image){const g=new Image;g.onload=A(m,h,"TestLoadImage: loaded",!0,c,g),g.onerror=A(m,h,"TestLoadImage: error",!1,c,g),g.onabort=A(m,h,"TestLoadImage: abort",!1,c,g),g.ontimeout=A(m,h,"TestLoadImage: timeout",!1,c,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else c(!1)}function Tl(a,c){const h=new Ai,g=new AbortController,P=setTimeout(()=>{g.abort(),m(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(P),V.ok?m(h,"TestPingServer: ok",!0,c):m(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),m(h,"TestPingServer: error",!1,c)})}function m(a,c,h,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(h)}catch{}}function b(){this.g=new Vr}function M(a,c,h){const g=h||"";try{Ao(a,function(P,V){let H=P;d(P)&&(H=Or(P)),c.push(g+V+"="+encodeURIComponent(H))})}catch(P){throw c.push(g+"type="+encodeURIComponent("_badmap")),P}}function F(a){this.l=a.Ub||null,this.j=a.eb||!1}N(F,Mr),F.prototype.g=function(){return new j(this.l,this.j)},F.prototype.i=function(a){return function(){return a}}({});function j(a,c){qe.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(j,qe),t=j.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,pe(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,G(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,pe(this)),this.g&&(this.readyState=3,pe(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Y(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Y(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?G(this):pe(this),this.readyState==3&&Y(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,G(this))},t.Qa=function(a){this.g&&(this.response=a,G(this))},t.ga=function(){this.g&&G(this)};function G(a){a.readyState=4,a.l=null,a.j=null,a.v=null,pe(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function pe(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(j.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function te(a){let c="";return W(a,function(h,g){c+=g,c+=":",c+=h,c+=`\r
`}),c}function ne(a,c,h){e:{for(g in h){var g=!1;break e}g=!0}g||(h=te(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):Ie(a,c,h))}function Z(a){qe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(Z,qe);var pt=/^https?$/i,Oe=["POST","PUT"];t=Z.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ll.g(),this.v=this.o?Si(this.o):Si(ll),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(V){Vt(this,V);return}if(a=h||"",h=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)h.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())h.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Oe,c,void 0))||g||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,H]of h)this.g.setRequestHeader(V,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{um(this),this.u=!0,this.g.send(a),this.u=!1}catch(V){Vt(this,V)}};function Vt(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,zr(a),Il(a)}function zr(a){a.A||(a.A=!0,Xe(a,"complete"),Xe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Xe(this,"complete"),Xe(this,"abort"),Il(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Il(this,!0)),Z.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?lm(this):this.bb())},t.bb=function(){lm(this)};function lm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ar(a)!=4||a.Z()!=2)){if(a.u&&ar(a)==4)Mn(a.Ea,0,a);else if(Xe(a,"readystatechange"),ar(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var g;if(g=H===0){var P=String(a.D).match(Co)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!pt.test(P?P.toLowerCase():"")}h=g}if(h)Xe(a,"complete"),Xe(a,"success");else{a.m=6;try{var V=2<ar(a)?a.g.statusText:""}catch{V=""}a.l=V+" ["+a.Z()+"]",zr(a)}}finally{Il(a)}}}}function Il(a,c){if(a.g){um(a);const h=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Xe(a,"ready");try{h.onreadystatechange=g}catch{}}}function um(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function ar(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),ed(c)}};function cm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function K1(a){const c={};a=(a.g&&2<=ar(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(T(a[g]))continue;var h=C(a[g]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=c[P]||[];c[P]=V,V.push(h)}w(c,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Oo(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function dm(a){this.Aa=0,this.i=[],this.j=new Ai,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Oo("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Oo("baseRetryDelayMs",5e3,a),this.cb=Oo("retryDelaySeedMs",1e4,a),this.Wa=Oo("forwardChannelMaxRetries",2,a),this.wa=Oo("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new So(a&&a.concurrentRequestLimit),this.Da=new b,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dm.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,g){De(0),this.W=a,this.H=c||{},h&&g!==void 0&&(this.H.OSID=h,this.H.OAID=g),this.F=this.X,this.I=wm(this,null,this.W),Sl(this)};function ld(a){if(hm(a),a.G==3){var c=a.U++,h=Kt(a.I);if(Ie(h,"SID",a.K),Ie(h,"RID",c),Ie(h,"TYPE","terminate"),Vo(a,h),c=new At(a,a.j,c),c.L=2,c.v=hs(Kt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Em(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ls(c)}_m(a)}function xl(a){a.g&&(cd(a),a.g.cancel(),a.g=null)}function hm(a){xl(a),a.u&&(l.clearTimeout(a.u),a.u=null),kl(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Sl(a){if(!hl(a.h)&&!a.s){a.s=!0;var c=a.Ga;Wt||ie(),K||(Wt(),K=!0),se.add(c,a),a.B=0}}function G1(a,c){return fl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=jr(_(a.Ga,a,c),vm(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new At(this,this.j,a);let V=this.o;if(this.S&&(V?(V=v(V),x(V,this.S)):V=this.S),this.m!==null||this.O||(P.H=V,V=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var g=this.i[h];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(c+=g,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=pm(this,P,c),h=Kt(this.I),Ie(h,"RID",a),Ie(h,"CVER",22),this.D&&Ie(h,"X-HTTP-Session-Id",this.D),Vo(this,h),V&&(this.O?c="headers="+encodeURIComponent(String(te(V)))+"&"+c:this.m&&ne(h,this.m,V)),ko(this.h,P),this.Ua&&Ie(h,"TYPE","init"),this.P?(Ie(h,"$req",c),Ie(h,"SID","null"),P.T=!0,as(P,h,null)):as(P,h,c),this.G=2}}else this.G==3&&(a?fm(this,a):this.i.length==0||hl(this.h)||fm(this))};function fm(a,c){var h;c?h=c.l:h=a.U++;const g=Kt(a.I);Ie(g,"SID",a.K),Ie(g,"RID",h),Ie(g,"AID",a.T),Vo(a,g),a.m&&a.o&&ne(g,a.m,a.o),h=new At(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=pm(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ko(a.h,h),as(h,g,c)}function Vo(a,c){a.H&&W(a.H,function(h,g){Ie(c,g,h)}),a.l&&Ao({},function(h,g){Ie(c,g,h)})}function pm(a,c,h){h=Math.min(a.i.length,h);var g=a.l?_(a.l.Na,a.l,a):null;e:{var P=a.i;let V=-1;for(;;){const H=["count="+h];V==-1?0<h?(V=P[0].g,H.push("ofs="+V)):V=0:H.push("ofs="+V);let be=!0;for(let st=0;st<h;st++){let we=P[st].g;const mt=P[st].map;if(we-=V,0>we)V=Math.max(0,P[st].g-100),be=!1;else try{M(mt,H,"req"+we+"_")}catch{g&&g(mt)}}if(be){g=H.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,g}function mm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Wt||ie(),K||(Wt(),K=!0),se.add(c,a),a.v=0}}function ud(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=jr(_(a.Fa,a),vm(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=jr(_(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,De(10),xl(this),gm(this))};function cd(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function gm(a){a.g=new At(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=Kt(a.qa);Ie(c,"RID","rpc"),Ie(c,"SID",a.K),Ie(c,"AID",a.T),Ie(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ie(c,"TO",a.ja),Ie(c,"TYPE","xmlhttp"),Vo(a,c),a.m&&a.o&&ne(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=hs(Kt(c)),h.m=null,h.P=!0,ul(h,a)}t.Za=function(){this.C!=null&&(this.C=null,xl(this),ud(this),De(19))};function kl(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ym(a,c){var h=null;if(a.g==c){kl(a),cd(a),a.g=null;var g=2}else if(cs(a.h,c))h=c.D,pl(a.h,c),g=1;else return;if(a.G!=0){if(c.o)if(g==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;g=ln(),Xe(g,new wo(g,h)),Sl(a)}else mm(a);else if(P=c.s,P==3||P==0&&0<c.X||!(g==1&&G1(a,c)||g==2&&ud(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),P){case 1:bi(a,5);break;case 4:bi(a,10);break;case 3:bi(a,6);break;default:bi(a,2)}}}function vm(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function bi(a,c){if(a.j.info("Error code "+c),c==2){var h=_(a.fb,a),g=a.Xa;const P=!g;g=new jn(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ds(g,"https"),hs(g),P?El(g.toString(),h):Tl(g.toString(),h)}else De(2);a.G=0,a.l&&a.l.sa(c),_m(a),hm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),De(2)):(this.j.info("Failed to ping google.com"),De(1))};function _m(a){if(a.G=0,a.ka=[],a.l){const c=ml(a.h);(c.length!=0||a.i.length!=0)&&(L(a.ka,c),L(a.ka,a.i),a.h.i.length=0,D(a.i),a.i.length=0),a.l.ra()}}function wm(a,c,h){var g=h instanceof jn?Kt(h):new jn(h);if(g.g!="")c&&(g.g=c+"."+g.g),Fn(g,g.s);else{var P=l.location;g=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var V=new jn(null);g&&ds(V,g),c&&(V.g=c),P&&Fn(V,P),h&&(V.l=h),g=V}return h=a.D,c=a.ya,h&&c&&Ie(g,h,c),Ie(g,"VER",a.la),Vo(a,g),g}function Em(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Z(new F({eb:h})):new Z(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tm(){}t=Tm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Al(){}Al.prototype.g=function(a,c){return new Gt(a,c)};function Gt(a,c){qe.call(this),this.g=new dm(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!T(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!T(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new fs(this)}N(Gt,qe),Gt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Gt.prototype.close=function(){ld(this.g)},Gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Or(a),a=h);c.i.push(new rd(c.Ya++,a)),c.G==3&&Sl(c)},Gt.prototype.N=function(){this.g.l=null,delete this.j,ld(this.g),delete this.g,Gt.aa.N.call(this)};function Im(a){il.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}N(Im,il);function xm(){sl.call(this),this.status=1}N(xm,sl);function fs(a){this.g=a}N(fs,Tm),fs.prototype.ua=function(){Xe(this.g,"a")},fs.prototype.ta=function(a){Xe(this.g,new Im(a))},fs.prototype.sa=function(a){Xe(this.g,new xm)},fs.prototype.ra=function(){Xe(this.g,"b")},Al.prototype.createWebChannel=Al.prototype.g,Gt.prototype.send=Gt.prototype.o,Gt.prototype.open=Gt.prototype.m,Gt.prototype.close=Gt.prototype.close,Aw=function(){return new Al},kw=function(){return ln()},Sw=an,nf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Eo.NO_ERROR=0,Eo.TIMEOUT=8,Eo.HTTP_ERROR=6,_u=Eo,nd.COMPLETE="complete",xw=nd,Re.EventType=Lr,Lr.OPEN="a",Lr.CLOSE="b",Lr.ERROR="c",Lr.MESSAGE="d",qe.prototype.listen=qe.prototype.K,Qo=Re,Z.prototype.listenOnce=Z.prototype.L,Z.prototype.getLastError=Z.prototype.Ka,Z.prototype.getLastErrorCode=Z.prototype.Ba,Z.prototype.getStatus=Z.prototype.Z,Z.prototype.getResponseJson=Z.prototype.Oa,Z.prototype.getResponseText=Z.prototype.oa,Z.prototype.send=Z.prototype.ea,Z.prototype.setWithCredentials=Z.prototype.Ha,Iw=Z}).apply(typeof Kl<"u"?Kl:typeof self<"u"?self:typeof window<"u"?window:{});const cy="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new fp("@firebase/firestore");function Wo(){return Qi.logLevel}function ee(t,...e){if(Qi.logLevel<=ye.DEBUG){const n=e.map(Sp);Qi.debug(`Firestore (${lo}): ${t}`,...n)}}function Ar(t,...e){if(Qi.logLevel<=ye.ERROR){const n=e.map(Sp);Qi.error(`Firestore (${lo}): ${t}`,...n)}}function Ys(t,...e){if(Qi.logLevel<=ye.WARN){const n=e.map(Sp);Qi.warn(`Firestore (${lo}): ${t}`,...n)}}function Sp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${lo}) INTERNAL ASSERTION FAILED: `+t;throw Ar(e),new Error(e)}function Se(t,e){t||ae()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends er{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(wt.UNAUTHENTICATED))}shutdown(){}}class nk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rk{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Se(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new vr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new Cw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new wt(e)}}class ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ik(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(wt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ok{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Se(this.o===void 0);const r=s=>{s.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.R=n.token,new ok(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=lk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function Xs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new et(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.timestamp=e}static fromTimestamp(e){return new le(e)}static min(){return new le(new et(0,0))}static max(){return new le(new et(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Me extends Oa{construct(e,n,r){return new Me(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Me(n)}static emptyPath(){return new Me([])}}const uk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends Oa{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return uk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ut(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new J(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new J(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new J(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Me.fromString(e))}static fromName(e){return new re(Me.fromString(e).popFirst(5))}static empty(){return new re(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Me.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Me(e.slice()))}}function ck(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=le.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new gi(i,re.empty(),e)}function dk(t){return new gi(t.readTime,t.key,-1)}class gi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gi(le.min(),re.empty(),-1)}static max(){return new gi(le.max(),re.empty(),-1)}}function hk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class pk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==fk)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function mk(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ja(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}kp.oe=-1;function Nc(t){return t==null}function ec(t){return t===0&&1/t==-1/0}function gk(t){return typeof t=="number"&&Number.isInteger(t)&&!ec(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function bw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gl(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gl(this.root,e,this.comparator,!0)}}class Gl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??lt.RED,this.left=i??lt.EMPTY,this.right=s??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new lt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,i,s){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hy(this.data.getIterator())}getIteratorFrom(e){return new hy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class hy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new dt(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Xs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Pw("Invalid base64 string: "+s):s}}(e);return new ft(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const yk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yi(t){if(Se(!!t),typeof t=="string"){let e=0;const n=yk.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(t.seconds),nanos:He(t.nanos)}}function He(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Yi(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cp(t){const e=t.mapValue.fields.__previous_value__;return Ap(e)?Cp(e):e}function Va(t){const e=yi(t.mapValue.fields.__local_write_time__.timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e,n,r,i,s,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Ma{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ma("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ma&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql={mapValue:{}};function Xi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ap(t)?4:wk(t)?9007199254740991:_k(t)?10:11:ae()}function Jn(t,e){if(t===e)return!0;const n=Xi(t);if(n!==Xi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Va(t).isEqual(Va(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=yi(i.timestampValue),l=yi(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Yi(i.bytesValue).isEqual(Yi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return He(i.geoPointValue.latitude)===He(s.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return He(i.integerValue)===He(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=He(i.doubleValue),l=He(s.doubleValue);return o===l?ec(o)===ec(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Xs(t.arrayValue.values||[],e.arrayValue.values||[],Jn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(dy(o)!==dy(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Jn(o[u],l[u])))return!1;return!0}(t,e);default:return ae()}}function La(t,e){return(t.values||[]).find(n=>Jn(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Xi(t),r=Xi(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=He(s.integerValue||s.doubleValue),u=He(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return fy(t.timestampValue,e.timestampValue);case 4:return fy(Va(t),Va(e));case 5:return Te(t.stringValue,e.stringValue);case 6:return function(s,o){const l=Yi(s),u=Yi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=Te(l[d],u[d]);if(p!==0)return p}return Te(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Te(He(s.latitude),He(o.latitude));return l!==0?l:Te(He(s.longitude),He(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return py(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,d,p;const y=s.fields||{},_=o.fields||{},A=(l=y.value)===null||l===void 0?void 0:l.arrayValue,N=(u=_.value)===null||u===void 0?void 0:u.arrayValue,D=Te(((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0,((p=N==null?void 0:N.values)===null||p===void 0?void 0:p.length)||0);return D!==0?D:py(A,N)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ql.mapValue&&o===Ql.mapValue)return 0;if(s===Ql.mapValue)return 1;if(o===Ql.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let y=0;y<u.length&&y<p.length;++y){const _=Te(u[y],p[y]);if(_!==0)return _;const A=Js(l[u[y]],d[p[y]]);if(A!==0)return A}return Te(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ae()}}function fy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=yi(t),r=yi(e),i=Te(n.seconds,r.seconds);return i!==0?i:Te(n.nanos,r.nanos)}function py(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Js(n[i],r[i]);if(s)return s}return Te(n.length,r.length)}function Zs(t){return rf(t)}function rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Yi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return re.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=rf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${rf(n.fields[o])}`;return i+"}"}(t.mapValue):ae()}function my(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function sf(t){return!!t&&"integerValue"in t}function Rp(t){return!!t&&"arrayValue"in t}function gy(t){return!!t&&"nullValue"in t}function yy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function wu(t){return!!t&&"mapValue"in t}function _k(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function ua(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ua(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ua(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!wu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ua(n)}setAll(e){let n=ut.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=ua(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());wu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];wu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Lt(ua(this.value))}}function Nw(t){const e=[];return ts(t.fields,(n,r)=>{const i=new ut([n]);if(wu(r)){const s=Nw(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Jt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,le.min(),le.min(),le.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,le.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,le.min(),le.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,le.min(),le.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n){this.position=e,this.inclusive=n}}function vy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function _y(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ek(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{}class Ye extends Dw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Ik(e,n,r):n==="array-contains"?new kk(e,r):n==="in"?new Ak(e,r):n==="not-in"?new Ck(e,r):n==="array-contains-any"?new Rk(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new xk(e,r):new Sk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Js(n,this.value)):n!==null&&Xi(this.value)===Xi(n)&&this.matchesComparison(Js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Dn extends Dw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Dn(e,n)}matches(e){return Ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Ow(t){return t.op==="and"}function Vw(t){return Tk(t)&&Ow(t)}function Tk(t){for(const e of t.filters)if(e instanceof Dn)return!1;return!0}function of(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(Vw(t))return t.filters.map(e=>of(e)).join(",");{const e=t.filters.map(n=>of(n)).join(",");return`${t.op}(${e})`}}function Mw(t,e){return t instanceof Ye?function(r,i){return i instanceof Ye&&r.op===i.op&&r.field.isEqual(i.field)&&Jn(r.value,i.value)}(t,e):t instanceof Dn?function(r,i){return i instanceof Dn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Mw(o,i.filters[l]),!0):!1}(t,e):void ae()}function Lw(t){return t instanceof Ye?function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`}(t):t instanceof Dn?function(n){return n.op.toString()+" {"+n.getFilters().map(Lw).join(" ,")+"}"}(t):"Filter"}class Ik extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class xk extends Ye{constructor(e,n){super(e,"in",n),this.keys=jw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Sk extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=jw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function jw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>re.fromName(r.referenceValue))}class kk extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rp(n)&&La(n.arrayValue,this.value)}}class Ak extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&La(this.value.arrayValue,n)}}class Ck extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(La(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!La(this.value.arrayValue,n)}}class Rk extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>La(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function wy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bk(t,e,n,r,i,s,o)}function bp(t){const e=ue(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>of(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Nc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Zs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Zs(r)).join(",")),e.ue=n}return e.ue}function Pp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ek(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_y(t.startAt,e.startAt)&&_y(t.endAt,e.endAt)}function af(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Pk(t,e,n,r,i,s,o,l){return new Za(t,e,n,r,i,s,o,l)}function Dc(t){return new Za(t)}function Ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Fw(t){return t.collectionGroup!==null}function ca(t){const e=ue(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new dt(ut.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new nc(s,r))}),n.has(ut.keyField().canonicalString())||e.ce.push(new nc(ut.keyField(),r))}return e.ce}function Yn(t){const e=ue(t);return e.le||(e.le=Nk(e,ca(t))),e.le}function Nk(t,e){if(t.limitType==="F")return wy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new nc(i.field,s)});const n=t.endAt?new tc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new tc(t.startAt.position,t.startAt.inclusive):null;return wy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lf(t,e){const n=t.filters.concat([e]);return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uf(t,e,n){return new Za(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Oc(t,e){return Pp(Yn(t),Yn(e))&&t.limitType===e.limitType}function Uw(t){return`${bp(Yn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Lw(i)).join(", ")}]`),Nc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Zs(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Zs(i)).join(",")),`Target(${r})`}(Yn(t))}; limitType=${t.limitType})`}function Vc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):re.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ca(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const d=vy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,ca(r),i)||r.endAt&&!function(o,l,u){const d=vy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,ca(r),i))}(t,e)}function Dk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function zw(t){return(e,n)=>{let r=!1;for(const i of ca(t)){const s=Ok(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Ok(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Js(u,d):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return bw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=new $e(re.comparator);function Cr(){return Vk}const Bw=new $e(re.comparator);function Yo(...t){let e=Bw;for(const n of t)e=e.insert(n.key,n);return e}function $w(t){let e=Bw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ji(){return da()}function Ww(){return da()}function da(){return new uo(t=>t.toString(),(t,e)=>t.isEqual(e))}const Mk=new $e(re.comparator),Lk=new dt(re.comparator);function ge(...t){let e=Lk;for(const n of t)e=e.add(n);return e}const jk=new dt(Te);function Fk(){return jk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Np(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ec(e)?"-0":e}}function qw(t){return{integerValue:""+t}}function Uk(t,e){return gk(e)?qw(e):Np(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(){this._=void 0}}function zk(t,e,n){return t instanceof rc?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ap(s)&&(s=Cp(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof eo?Kw(t,e):t instanceof ja?Gw(t,e):function(i,s){const o=Hw(i,s),l=Ty(o)+Ty(i.Pe);return sf(o)&&sf(i.Pe)?qw(l):Np(i.serializer,l)}(t,e)}function Bk(t,e,n){return t instanceof eo?Kw(t,e):t instanceof ja?Gw(t,e):n}function Hw(t,e){return t instanceof ic?function(r){return sf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class rc extends Mc{}class eo extends Mc{constructor(e){super(),this.elements=e}}function Kw(t,e){const n=Qw(e);for(const r of t.elements)n.some(i=>Jn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ja extends Mc{constructor(e){super(),this.elements=e}}function Gw(t,e){let n=Qw(e);for(const r of t.elements)n=n.filter(i=>!Jn(i,r));return{arrayValue:{values:n}}}class ic extends Mc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Ty(t){return He(t.integerValue||t.doubleValue)}function Qw(t){return Rp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.field=e,this.transform=n}}function Wk(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof eo&&i instanceof eo||r instanceof ja&&i instanceof ja?Xs(r.elements,i.elements,Jn):r instanceof ic&&i instanceof ic?Jn(r.Pe,i.Pe):r instanceof rc&&i instanceof rc}(t.transform,e.transform)}class qk{constructor(e,n){this.version=e,this.transformResults=n}}class gn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new gn}static exists(e){return new gn(void 0,e)}static updateTime(e){return new gn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Eu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Lc{}function Yw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Dp(t.key,gn.none()):new el(t.key,t.data,gn.none());{const n=t.data,r=Lt.empty();let i=new dt(ut.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ti(t.key,r,new Jt(i.toArray()),gn.none())}}function Hk(t,e,n){t instanceof el?function(i,s,o){const l=i.value.clone(),u=xy(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Ti?function(i,s,o){if(!Eu(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=xy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Xw(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ha(t,e,n,r){return t instanceof el?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const d=s.value.clone(),p=Sy(s.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ti?function(s,o,l,u){if(!Eu(s.precondition,o))return l;const d=Sy(s.fieldTransforms,u,o),p=o.data;return p.setAll(Xw(s)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(t,e,n,r):function(s,o,l){return Eu(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function Kk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Hw(r.transform,i||null);s!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,s))}return n||null}function Iy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Xs(r,i,(s,o)=>Wk(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class el extends Lc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ti extends Lc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Xw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function xy(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,Bk(o,l,n[i]))}return r}function Sy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,zk(s,o,e))}return r}class Dp extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gk extends Lc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Hk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ha(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ww();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=Yw(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ge())}isEqual(e){return this.batchId===e.batchId&&Xs(this.mutations,e.mutations,(n,r)=>Iy(n,r))&&Xs(this.baseMutations,e.baseMutations,(n,r)=>Iy(n,r))}}class Op{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=function(){return Mk}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Op(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,ve;function Jk(t){switch(t){default:return ae();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function Jw(t){if(t===void 0)return Ar("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ge.OK:return U.OK;case Ge.CANCELLED:return U.CANCELLED;case Ge.UNKNOWN:return U.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return U.INTERNAL;case Ge.UNAVAILABLE:return U.UNAVAILABLE;case Ge.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ge.NOT_FOUND:return U.NOT_FOUND;case Ge.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ge.ABORTED:return U.ABORTED;case Ge.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ge.DATA_LOSS:return U.DATA_LOSS;default:return ae()}}(ve=Ge||(Ge={}))[ve.OK=0]="OK",ve[ve.CANCELLED=1]="CANCELLED",ve[ve.UNKNOWN=2]="UNKNOWN",ve[ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ve[ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ve[ve.NOT_FOUND=5]="NOT_FOUND",ve[ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",ve[ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",ve[ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",ve[ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ve[ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ve[ve.ABORTED=10]="ABORTED",ve[ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",ve[ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",ve[ve.INTERNAL=13]="INTERNAL",ve[ve.UNAVAILABLE=14]="UNAVAILABLE",ve[ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eA=new zi([4294967295,4294967295],0);function ky(t){const e=Zk().encode(t),n=new Tw;return n.update(e),new Uint8Array(n.digest())}function Ay(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new zi([n,r],0),new zi([i,s],0)]}class Vp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xo(`Invalid padding: ${n}`);if(r<0)throw new Xo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(zi.fromNumber(r)));return i.compare(eA)===1&&(i=new zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ky(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Vp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ky(e),[r,i]=Ay(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,tl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new jc(le.min(),i,new $e(Te),Cr(),ge())}}class tl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new tl(r,n,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Zw{constructor(e,n){this.targetId=e,this.me=n}}class e1{constructor(e,n,r=ft.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Cy{constructor(){this.fe=0,this.ge=by(),this.pe=ft.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ge(),n=ge(),r=ge();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ae()}}),new tl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=by()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tA{constructor(e){this.Le=e,this.Be=new Map,this.ke=Cr(),this.qe=Ry(),this.Qe=new $e(Te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(af(s))if(r===0){const o=new re(s.path);this.Ue(n,o,Tt.newNoDocument(o,le.min()))}else Se(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=Yi(r).toUint8Array()}catch(u){if(u instanceof Pw)return Ys("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Vp(o,i,s)}catch(u){return Ys(u instanceof Xo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&af(l.target)){const u=new re(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,Tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ge();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new jc(e,n,this.Qe,this.ke,r);return this.ke=Cr(),this.qe=Ry(),this.Qe=new $e(Te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new dt(Te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ry(){return new $e(re.comparator)}function by(){return new $e(re.comparator)}const nA={asc:"ASCENDING",desc:"DESCENDING"},rA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},iA={and:"AND",or:"OR"};class sA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function cf(t,e){return t.useProto3Json||Nc(e)?e:{value:e}}function sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function t1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function oA(t,e){return sc(t,e.toTimestamp())}function Xn(t){return Se(!!t),le.fromTimestamp(function(n){const r=yi(n);return new et(r.seconds,r.nanos)}(t))}function Mp(t,e){return df(t,e).canonicalString()}function df(t,e){const n=function(i){return new Me(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function n1(t){const e=Me.fromString(t);return Se(a1(e)),e}function hf(t,e){return Mp(t.databaseId,e.path)}function qd(t,e){const n=n1(e);if(n.get(1)!==t.databaseId.projectId)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(i1(n))}function r1(t,e){return Mp(t.databaseId,e)}function aA(t){const e=n1(t);return e.length===4?Me.emptyPath():i1(e)}function ff(t){return new Me(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function i1(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Py(t,e,n){return{name:hf(t,e),fields:n.value.mapValue.fields}}function lA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,p){return d.useProto3Json?(Se(p===void 0||typeof p=="string"),ft.fromBase64String(p||"")):(Se(p===void 0||p instanceof Buffer||p instanceof Uint8Array),ft.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?U.UNKNOWN:Jw(d.code);return new J(p,d.message||"")}(o);n=new e1(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qd(t,r.document.name),s=Xn(r.document.updateTime),o=r.document.createTime?Xn(r.document.createTime):le.min(),l=new Lt({mapValue:{fields:r.document.fields}}),u=Tt.newFoundDocument(i,s,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new Tu(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qd(t,r.document),s=r.readTime?Xn(r.readTime):le.min(),o=Tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Tu([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qd(t,r.document),s=r.removedTargetIds||[];n=new Tu([],s,i,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new Xk(i,s),l=r.targetId;n=new Zw(l,o)}}return n}function uA(t,e){let n;if(e instanceof el)n={update:Py(t,e.key,e.value)};else if(e instanceof Dp)n={delete:hf(t,e.key)};else if(e instanceof Ti)n={update:Py(t,e.key,e.data),updateMask:vA(e.fieldMask)};else{if(!(e instanceof Gk))return ae();n={verify:hf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof rc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof eo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ja)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ic)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:oA(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ae()}(t,e.precondition)),n}function cA(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Xn(i.updateTime):Xn(s);return o.isEqual(le.min())&&(o=Xn(s)),new qk(o,i.transformResults||[])}(n,e))):[]}function dA(t,e){return{documents:[r1(t,e.path)]}}function hA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=r1(t,i);const s=function(d){if(d.length!==0)return o1(Dn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(p=>function(_){return{field:vs(_.field),direction:mA(_.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=cf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:i}}function fA(t){let e=aA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(y){const _=s1(y);return _ instanceof Dn&&Vw(_)?_.getFilters():[_]}(n.where));let o=[];n.orderBy&&(o=function(y){return y.map(_=>function(N){return new nc(_s(N.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(_))}(n.orderBy));let l=null;n.limit&&(l=function(y){let _;return _=typeof y=="object"?y.value:y,Nc(_)?null:_}(n.limit));let u=null;n.startAt&&(u=function(y){const _=!!y.before,A=y.values||[];return new tc(A,_)}(n.startAt));let d=null;return n.endAt&&(d=function(y){const _=!y.before,A=y.values||[];return new tc(A,_)}(n.endAt)),Pk(e,i,o,s,l,"F",u,d)}function pA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function s1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=_s(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=_s(n.unaryFilter.field);return Ye.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=_s(n.unaryFilter.field);return Ye.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=_s(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return Ye.create(_s(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Dn.create(n.compositeFilter.filters.map(r=>s1(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function mA(t){return nA[t]}function gA(t){return rA[t]}function yA(t){return iA[t]}function vs(t){return{fieldPath:t.canonicalString()}}function _s(t){return ut.fromServerFormat(t.fieldPath)}function o1(t){return t instanceof Ye?function(n){if(n.op==="=="){if(yy(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(gy(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(yy(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(gy(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:gA(n.op),value:n.value}}}(t):t instanceof Dn?function(n){const r=n.getFilters().map(i=>o1(i));return r.length===1?r[0]:{compositeFilter:{op:yA(n.op),filters:r}}}(t):ae()}function vA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function a1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,s=le.min(),o=le.min(),l=ft.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.ct=e}}function wA(t){const e=fA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.un=new TA}addToCollectionParentIndex(e,n){return this.un.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(gi.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(gi.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class TA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new dt(Me.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new dt(Me.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new to(0)}static kn(){return new to(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(){this.changes=new uo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ha(r.mutation,i,Jt.empty(),et.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ge()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ge()){const i=ji();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Yo();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ji();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ge()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Cr();const o=da(),l=function(){return da()}();return n.forEach((u,d)=>{const p=r.get(d.key);i.has(d.key)&&(p===void 0||p.mutation instanceof Ti)?s=s.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),ha(p.mutation,d,p.mutation.getFieldMask(),et.now())):o.set(d.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var y;return l.set(d,new xA(p,(y=o.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,n){const r=da();let i=new $e((o,l)=>o-l),s=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||Jt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const y=(i.get(l.batchId)||ge()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,y=Ww();p.forEach(_=>{if(!s.has(_)){const A=Yw(n.get(_),r.get(_));A!==null&&y.set(_,A),s=s.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,y))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(ji());let l=-1,u=s;return o.next(d=>z.forEach(d,(p,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(p)?z.resolve():this.remoteDocumentCache.getEntry(e,p).next(_=>{u=u.insert(p,_)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ge())).next(p=>({batchId:l,changes:$w(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next(r=>{let i=Yo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Yo();return this.indexManager.getCollectionParents(e,s).next(l=>z.forEach(l,u=>{const d=function(y,_){return new Za(_,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(p=>{p.forEach((y,_)=>{o=o.insert(y,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,Tt.newInvalidDocument(p)))});let l=Yo();return o.forEach((u,d)=>{const p=s.get(u);p!==void 0&&ha(p.mutation,d,Jt.empty(),et.now()),Vc(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return z.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Xn(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:wA(i.bundledQuery),readTime:Xn(i.readTime)}}(n)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(){this.overlays=new $e(re.comparator),this.Ir=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ji();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=ji(),s=n.length+1,o=new re(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new $e((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=s.get(d.largestBatchId);p===null&&(p=ji(),s=s.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=ji(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=i)););return z.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Yk(n,r));let s=this.Ir.get(n);s===void 0&&(s=ge(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.sessionToken=ft.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(){this.Tr=new dt(tt.Er),this.dr=new dt(tt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new tt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new tt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new re(new Me([])),r=new tt(n,e),i=new tt(n,e+1),s=[];return this.dr.forEachInRange([r,i],o=>{this.Vr(o),s.push(o.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new re(new Me([])),r=new tt(n,e),i=new tt(n,e+1);let s=ge();return this.dr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new tt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class tt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return re.comparator(e.key,n.key)||Te(e.wr,n.wr)}static Ar(e,n){return Te(e.wr,n.wr)||re.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new dt(tt.Er)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qk(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.br=this.br.add(new tt(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new tt(n,0),i=new tt(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],o=>{const l=this.Dr(o.wr);s.push(l)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(Te);return n.forEach(i=>{const s=new tt(i,0),o=new tt(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,o],l=>{r=r.add(l.wr)})}),z.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;re.isDocumentKey(s)||(s=s.child(""));const o=new tt(new re(s),0);let l=new dt(Te);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.wr)),!0)},o),z.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return z.forEach(n.mutations,i=>{const s=new tt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new tt(n,0),i=this.br.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(e){this.Mr=e,this.docs=function(){return new $e(re.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=Cr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Cr();const o=n.path,l=new re(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||hk(dk(p),r)<=0||(i.has(p.key)||Vc(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ae()}Or(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PA(this)}getSize(e){return z.resolve(this.size)}}class PA extends IA{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(e){this.persistence=e,this.Nr=new uo(n=>bp(n),Pp),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Lp,this.targetCount=0,this.kr=to.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),z.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new to(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.Kn(n),z.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e,n){this.qr={},this.overlays={},this.Qr=new kp(0),this.Kr=!1,this.Kr=!0,this.$r=new CA,this.referenceDelegate=e(this),this.Ur=new NA(this),this.indexManager=new EA,this.remoteDocumentCache=function(i){return new bA(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new _A(n),this.Gr=new kA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new AA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new RA(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){ee("MemoryPersistence","Starting transaction:",e);const i=new OA(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return z.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class OA extends pk{constructor(e){super(),this.currentSequenceNumber=e}}class jp{constructor(e){this.persistence=e,this.Jr=new Lp,this.Yr=null}static Zr(e){return new jp(e)}get Xr(){if(this.Yr)return this.Yr;throw ae()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),z.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.Xr,r=>{const i=re.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,le.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return z.or([()=>z.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=ge(),i=ge();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Fp(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return MI()?8:mk(St())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new VA;return this.Xi(e,n,o).next(l=>{if(s.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(Wo()<=ye.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),z.resolve()):(Wo()<=ye.DEBUG&&ee("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(Wo()<=ye.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yn(n))):z.resolve())}Yi(e,n){if(Ey(n))return z.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=uf(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ge(...s);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,uf(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,i){return Ey(n)||i.isEqual(le.min())?z.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const o=this.ts(n,s);return this.ns(n,o,r,i)?z.resolve(null):(Wo()<=ye.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ys(n)),this.rs(e,o,n,ck(i,-1)).next(l=>l))})}ts(e,n){let r=new dt(zw(e));return n.forEach((i,s)=>{Vc(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return Wo()<=ye.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",ys(n)),this.Ji.getDocumentsMatchingQuery(e,n,gi.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new $e(Te),this._s=new uo(s=>bp(s),Pp),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new SA(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function jA(t,e,n,r){return new LA(t,e,n,r)}async function l1(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ge();for(const d of i){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of s){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function FA(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const y=d.batch,_=y.keys();let A=z.resolve();return _.forEach(N=>{A=A.next(()=>p.getEntry(u,N)).next(D=>{const L=d.docVersions.get(N);Se(L!==null),D.version.compareTo(L)<0&&(y.applyToRemoteDocument(D,d),D.isValidDocument()&&(D.setReadTime(d.commitVersion),p.addEntry(D)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,y))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ge();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function u1(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function UA(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});i=n.os;const l=[];e.targetChanges.forEach((p,y)=>{const _=i.get(y);if(!_)return;l.push(n.Ur.removeMatchingKeys(s,p.removedDocuments,y).next(()=>n.Ur.addMatchingKeys(s,p.addedDocuments,y)));let A=_.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?A=A.withResumeToken(ft.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):p.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(p.resumeToken,r)),i=i.insert(y,A),function(D,L,S){return D.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(_,A,p)&&l.push(n.Ur.updateTargetData(s,A))});let u=Cr(),d=ge();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,p))}),l.push(zA(s,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(le.min())){const p=n.Ur.getLastRemoteSnapshotVersion(s).next(y=>n.Ur.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(p)}return z.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.os=i,s))}function zA(t,e,n){let r=ge(),i=ge();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Cr();return n.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(le.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):ee("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:i}})}function BA(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $A(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ur.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.Ur.allocateTargetId(r).next(o=>(i=new ti(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.os.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function pf(t,e,n){const r=ue(t),i=r.os.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ja(o))throw o;ee("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(i.target)}function Ny(t,e,n){const r=ue(t);let i=le.min(),s=ge();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const y=ue(u),_=y._s.get(p);return _!==void 0?z.resolve(y.os.get(_)):y.Ur.getTargetData(d,p)}(r,o,Yn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?i:le.min(),n?s:ge())).next(l=>(WA(r,Dk(e),l),{documents:l,Ts:s})))}function WA(t,e,n){let r=t.us.get(e)||le.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.us.set(e,r)}class Dy{constructor(){this.activeTargetIds=Fk()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qA{constructor(){this.so=new Dy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Dy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){ee("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){ee("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yl=null;function Hd(){return Yl===null?Yl=function(){return 268435456+Math.round(2147483648*Math.random())}():Yl++,"0x"+Yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t="WebChannelConnection";class QA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,o){const l=Hd(),u=this.xo(n,r.toUriEncodedString());ee("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,s,o),this.No(n,u,d,i).then(p=>(ee("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Ys("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",i),p})}Lo(n,r,i,s,o,l){return this.Mo(n,r,i,s,o)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+lo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}xo(n,r){const i=KA[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Hd();return new Promise((o,l)=>{const u=new Iw;u.setWithCredentials(!0),u.listenOnce(xw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case _u.NO_ERROR:const p=u.getResponseJson();ee(_t,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(p)),o(p);break;case _u.TIMEOUT:ee(_t,`RPC '${e}' ${s} timed out`),l(new J(U.DEADLINE_EXCEEDED,"Request time out"));break;case _u.HTTP_ERROR:const y=u.getStatus();if(ee(_t,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const A=_==null?void 0:_.error;if(A&&A.status&&A.message){const N=function(L){const S=L.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(S)>=0?S:U.UNKNOWN}(A.status);l(new J(N,A.message))}else l(new J(U.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new J(U.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{ee(_t,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);ee(_t,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const i=Hd(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Aw(),l=kw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=s.join("");ee(_t,`Creating RPC '${e}' stream ${i}: ${p}`,u);const y=o.createWebChannel(p,u);let _=!1,A=!1;const N=new GA({Io:L=>{A?ee(_t,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(_||(ee(_t,`Opening RPC '${e}' stream ${i} transport.`),y.open(),_=!0),ee(_t,`RPC '${e}' stream ${i} sending:`,L),y.send(L))},To:()=>y.close()}),D=(L,S,T)=>{L.listen(S,k=>{try{T(k)}catch(O){setTimeout(()=>{throw O},0)}})};return D(y,Qo.EventType.OPEN,()=>{A||(ee(_t,`RPC '${e}' stream ${i} transport opened.`),N.yo())}),D(y,Qo.EventType.CLOSE,()=>{A||(A=!0,ee(_t,`RPC '${e}' stream ${i} transport closed`),N.So())}),D(y,Qo.EventType.ERROR,L=>{A||(A=!0,Ys(_t,`RPC '${e}' stream ${i} transport errored:`,L),N.So(new J(U.UNAVAILABLE,"The operation could not be completed")))}),D(y,Qo.EventType.MESSAGE,L=>{var S;if(!A){const T=L.data[0];Se(!!T);const k=T,O=k.error||((S=k[0])===null||S===void 0?void 0:S.error);if(O){ee(_t,`RPC '${e}' stream ${i} received error:`,O);const $=O.status;let W=function(E){const x=Ge[E];if(x!==void 0)return Jw(x)}($),w=O.message;W===void 0&&(W=U.INTERNAL,w="Unknown error status: "+$+" with message "+O.message),A=!0,N.So(new J(W,w)),y.close()}else ee(_t,`RPC '${e}' stream ${i} received:`,T),N.bo(T)}}),D(l,Sw.STAT_EVENT,L=>{L.stat===nf.PROXY?ee(_t,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===nf.NOPROXY&&ee(_t,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.wo()},0),N}}function Kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fc(t){return new sA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&ee("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,i,s,o,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new c1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Ar(n.toString()),Ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new J(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return ee("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(ee("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class YA extends d1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=lA(this.serializer,e),r=function(s){if(!("targetChange"in s))return le.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Xn(o.readTime):le.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ff(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=af(u)?{documents:dA(s,u)}:{query:hA(s,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=t1(s,o.resumeToken);const d=cf(s,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(le.min())>0){l.readTime=sc(s,o.snapshotVersion.toTimestamp());const d=cf(s,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=pA(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ff(this.serializer),n.removeTarget=e,this.a_(n)}}class XA extends d1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Se(!!e.streamToken),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=cA(e.writeResults,e.commitTime),r=Xn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ff(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uA(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Mo(e,df(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new J(U.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,df(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(U.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ZA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Ar(n),this.D_=!1):ee("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(o=>{r.enqueueAndForget(async()=>{ns(this)&&(ee("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ue(u);d.L_.add(4),await nl(d),d.q_.set("Unknown"),d.L_.delete(4),await Uc(d)}(this))})}),this.q_=new ZA(r,i)}}async function Uc(t){if(ns(t))for(const e of t.B_)await e(!0)}async function nl(t){for(const e of t.B_)await e(!1)}function h1(t,e){const n=ue(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),$p(n)?Bp(n):co(n).r_()&&zp(n,e))}function Up(t,e){const n=ue(t),r=co(n);n.N_.delete(e),r.r_()&&f1(n,e),n.N_.size===0&&(r.r_()?r.o_():ns(n)&&n.q_.set("Unknown"))}function zp(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}co(t).A_(e)}function f1(t,e){t.Q_.xe(e),co(t).R_(e)}function Bp(t){t.Q_=new tA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),co(t).start(),t.q_.v_()}function $p(t){return ns(t)&&!co(t).n_()&&t.N_.size>0}function ns(t){return ue(t).L_.size===0}function p1(t){t.Q_=void 0}async function tC(t){t.q_.set("Online")}async function nC(t){t.N_.forEach((e,n)=>{zp(t,e)})}async function rC(t,e){p1(t),$p(t)?(t.q_.M_(e),Bp(t)):t.q_.set("Unknown")}async function iC(t,e,n){if(t.q_.set("Online"),e instanceof e1&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.N_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.N_.delete(l),i.Q_.removeTarget(l))}(t,e)}catch(r){ee("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await oc(t,r)}else if(e instanceof Tu?t.Q_.Ke(e):e instanceof Zw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(le.min()))try{const r=await u1(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=s.N_.get(d);p&&s.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=s.N_.get(u);if(!p)return;s.N_.set(u,p.withResumeToken(ft.EMPTY_BYTE_STRING,p.snapshotVersion)),f1(s,u);const y=new ti(p.target,u,d,p.sequenceNumber);zp(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){ee("RemoteStore","Failed to raise snapshot:",r),await oc(t,r)}}async function oc(t,e,n){if(!Ja(e))throw e;t.L_.add(1),await nl(t),t.q_.set("Offline"),n||(n=()=>u1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Uc(t)})}function m1(t,e){return e().catch(n=>oc(t,n,e))}async function zc(t){const e=ue(t),n=vi(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;sC(e);)try{const i=await BA(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,oC(e,i)}catch(i){await oc(e,i)}g1(e)&&y1(e)}function sC(t){return ns(t)&&t.O_.length<10}function oC(t,e){t.O_.push(e);const n=vi(t);n.r_()&&n.V_&&n.m_(e.mutations)}function g1(t){return ns(t)&&!vi(t).n_()&&t.O_.length>0}function y1(t){vi(t).start()}async function aC(t){vi(t).p_()}async function lC(t){const e=vi(t);for(const n of t.O_)e.m_(n.mutations)}async function uC(t,e,n){const r=t.O_.shift(),i=Op.from(r,e,n);await m1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await zc(t)}async function cC(t,e){e&&vi(t).V_&&await async function(r,i){if(function(o){return Jk(o)&&o!==U.ABORTED}(i.code)){const s=r.O_.shift();vi(r).s_(),await m1(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await zc(r)}}(t,e),g1(t)&&y1(t)}async function Vy(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),ee("RemoteStore","RemoteStore received new credentials");const r=ns(n);n.L_.add(3),await nl(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Uc(n)}async function dC(t,e){const n=ue(t);e?(n.L_.delete(2),await Uc(n)):e||(n.L_.add(2),await nl(n),n.q_.set("Unknown"))}function co(t){return t.K_||(t.K_=function(n,r,i){const s=ue(n);return s.w_(),new YA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:tC.bind(null,t),Ro:nC.bind(null,t),mo:rC.bind(null,t),d_:iC.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),$p(t)?Bp(t):t.q_.set("Unknown")):(await t.K_.stop(),p1(t))})),t.K_}function vi(t){return t.U_||(t.U_=function(n,r,i){const s=ue(n);return s.w_(),new XA(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:aC.bind(null,t),mo:cC.bind(null,t),f_:lC.bind(null,t),g_:uC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await zc(t)):(await t.U_.stop(),t.O_.length>0&&(ee("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Wp(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function qp(t,e){if(Ar("AsyncQueue",`${e}: ${t}`),Ja(t))return new J(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Yo(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(){this.W_=new $e(re.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ae():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class no{constructor(e,n,r,i,s,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new no(e,n,Bs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Oc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class fC{constructor(){this.queries=Ly(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ue(n),s=i.queries;i.queries=Ly(),s.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new J(U.ABORTED,"Firestore shutting down"))}}function Ly(){return new uo(t=>Uw(t),Oc)}async function Hp(t,e){const n=ue(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.H_()&&e.J_()&&(r=2):(s=new hC,r=e.J_()?0:1);try{switch(r){case 0:s.z_=await n.onListen(i,!0);break;case 1:s.z_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=qp(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.j_.push(e),e.Z_(n.onlineState),s.z_&&e.X_(s.z_)&&Gp(n)}async function Kp(t,e){const n=ue(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.j_.indexOf(e);o>=0&&(s.j_.splice(o,1),s.j_.length===0?i=e.J_()?0:1:!s.H_()&&e.J_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pC(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.j_)l.X_(i)&&(r=!0);o.z_=i}}r&&Gp(n)}function mC(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.j_)s.onError(n);r.queries.delete(e)}function Gp(t){t.Y_.forEach(e=>{e.next()})}var mf,jy;(jy=mf||(mf={})).ea="default",jy.Cache="cache";class Qp{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new no(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=no.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==mf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e){this.key=e}}class _1{constructor(e){this.key=e}}class gC{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ge(),this.mutatedKeys=ge(),this.Aa=zw(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new My,i=n?n.Ra:this.Ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((p,y)=>{const _=i.get(p),A=Vc(this.query,y)?y:null,N=!!_&&this.mutatedKeys.has(_.key),D=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;_&&A?_.data.isEqual(A.data)?N!==D&&(r.track({type:3,doc:A}),L=!0):this.ga(_,A)||(r.track({type:2,doc:A}),L=!0,(u&&this.Aa(A,u)>0||d&&this.Aa(A,d)<0)&&(l=!0)):!_&&A?(r.track({type:0,doc:A}),L=!0):_&&!A&&(r.track({type:1,doc:_}),L=!0,(u||d)&&(l=!0)),L&&(A?(o=o.add(A),s=D?s.add(p):s.delete(p)):(o=o.delete(p),s=s.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),s=s.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:s}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,y)=>function(A,N){const D=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return D(A)-D(N)}(p.type,y.type)||this.Aa(p.doc,y.doc)),this.pa(r),i=i!=null&&i;const l=n&&!i?this.ya():[],u=this.da.size===0&&this.current&&!i?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new no(this.query,e.Ra,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new My,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ge(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new _1(r))}),this.da.forEach(r=>{e.has(r)||n.push(new v1(r))}),n}ba(e){this.Ta=e.Ts,this.da=ge();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return no.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class yC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class vC{constructor(e){this.key=e,this.va=!1}}class _C{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new uo(l=>Uw(l),Oc),this.Ma=new Map,this.xa=new Set,this.Oa=new $e(re.comparator),this.Na=new Map,this.La=new Lp,this.Ba={},this.ka=new Map,this.qa=to.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function wC(t,e,n=!0){const r=S1(t);let i;const s=r.Fa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Da()):i=await w1(r,e,n,!0),i}async function EC(t,e){const n=S1(t);await w1(n,e,!0,!1)}async function w1(t,e,n,r){const i=await $A(t.localStore,Yn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await TC(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&h1(t.remoteStore,i),l}async function TC(t,e,n,r,i){t.Ka=(y,_,A)=>async function(D,L,S,T){let k=L.view.ma(S);k.ns&&(k=await Ny(D.localStore,L.query,!1).then(({documents:w})=>L.view.ma(w,k)));const O=T&&T.targetChanges.get(L.targetId),$=T&&T.targetMismatches.get(L.targetId)!=null,W=L.view.applyChanges(k,D.isPrimaryClient,O,$);return Uy(D,L.targetId,W.wa),W.snapshot}(t,y,_,A);const s=await Ny(t.localStore,e,!0),o=new gC(e,s.Ts),l=o.ma(s.documents),u=tl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(l,t.isPrimaryClient,u);Uy(t,n,d.wa);const p=new yC(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function IC(t,e,n){const r=ue(t),i=r.Fa.get(e),s=r.Ma.get(i.targetId);if(s.length>1)return r.Ma.set(i.targetId,s.filter(o=>!Oc(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await pf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Up(r.remoteStore,i.targetId),gf(r,i.targetId)}).catch(Xa)):(gf(r,i.targetId),await pf(r.localStore,i.targetId,!0))}async function xC(t,e){const n=ue(t),r=n.Fa.get(e),i=n.Ma.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Up(n.remoteStore,r.targetId))}async function SC(t,e,n){const r=NC(t);try{const i=await function(o,l){const u=ue(o),d=et.now(),p=l.reduce((A,N)=>A.add(N.key),ge());let y,_;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let N=Cr(),D=ge();return u.cs.getEntries(A,p).next(L=>{N=L,N.forEach((S,T)=>{T.isValidDocument()||(D=D.add(S))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,N)).next(L=>{y=L;const S=[];for(const T of l){const k=Kk(T,y.get(T.key).overlayedDocument);k!=null&&S.push(new Ti(T.key,k,Nw(k.value.mapValue),gn.exists(!0)))}return u.mutationQueue.addMutationBatch(A,d,S,l)}).next(L=>{_=L;const S=L.applyToLocalDocumentSet(y,D);return u.documentOverlayCache.saveOverlays(A,L.batchId,S)})}).then(()=>({batchId:_.batchId,changes:$w(y)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new $e(Te)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,i.batchId,n),await rl(r,i.changes),await zc(r.remoteStore)}catch(i){const s=qp(i,"Failed to persist write");n.reject(s)}}async function E1(t,e){const n=ue(t);try{const r=await UA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Na.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.va=!0:i.modifiedDocuments.size>0?Se(o.va):i.removedDocuments.size>0&&(Se(o.va),o.va=!1))}),await rl(n,r,e)}catch(r){await Xa(r)}}function Fy(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,o)=>{const l=o.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ue(o);u.onlineState=l;let d=!1;u.queries.forEach((p,y)=>{for(const _ of y.j_)_.Z_(l)&&(d=!0)}),d&&Gp(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kC(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Na.get(e),s=i&&i.key;if(s){let o=new $e(re.comparator);o=o.insert(s,Tt.newNoDocument(s,le.min()));const l=ge().add(s),u=new jc(le.min(),new Map,new $e(Te),o,l);await E1(r,u),r.Oa=r.Oa.remove(s),r.Na.delete(e),Yp(r)}else await pf(r.localStore,e,!1).then(()=>gf(r,e,n)).catch(Xa)}async function AC(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await FA(n.localStore,e);I1(n,r,null),T1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await rl(n,i)}catch(i){await Xa(i)}}async function CC(t,e,n){const r=ue(t);try{const i=await function(o,l){const u=ue(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(y=>(Se(y!==null),p=y.keys(),u.mutationQueue.removeMutationBatch(d,y))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);I1(r,e,n),T1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await rl(r,i)}catch(i){await Xa(i)}}function T1(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function I1(t,e,n){const r=ue(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}function gf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||x1(t,r)})}function x1(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Up(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Yp(t))}function Uy(t,e,n){for(const r of n)r instanceof v1?(t.La.addReference(r.key,e),RC(t,r)):r instanceof _1?(ee("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||x1(t,r.key)):ae()}function RC(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(ee("SyncEngine","New document in limbo: "+n),t.xa.add(r),Yp(t))}function Yp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new re(Me.fromString(e)),r=t.qa.next();t.Na.set(r,new vC(n)),t.Oa=t.Oa.insert(n,r),h1(t.remoteStore,new ti(Yn(Dc(n.path)),r,"TargetPurposeLimboResolution",kp.oe))}}async function rl(t,e,n){const r=ue(t),i=[],s=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const y=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=Fp.Wi(u.targetId,d);s.push(y)}}))}),await Promise.all(o),r.Ca.d_(i),await async function(u,d){const p=ue(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>z.forEach(d,_=>z.forEach(_.$i,A=>p.persistence.referenceDelegate.addReference(y,_.targetId,A)).next(()=>z.forEach(_.Ui,A=>p.persistence.referenceDelegate.removeReference(y,_.targetId,A)))))}catch(y){if(!Ja(y))throw y;ee("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const _=y.targetId;if(!y.fromCache){const A=p.os.get(_),N=A.snapshotVersion,D=A.withLastLimboFreeSnapshotVersion(N);p.os=p.os.insert(_,D)}}}(r.localStore,s))}async function bC(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){ee("SyncEngine","User change. New user:",e.toKey());const r=await l1(n.localStore,e);n.currentUser=e,function(s,o){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new J(U.CANCELLED,o))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await rl(n,r.hs)}}function PC(t,e){const n=ue(t),r=n.Na.get(e);if(r&&r.va)return ge().add(r.key);{let i=ge();const s=n.Ma.get(e);if(!s)return i;for(const o of s){const l=n.Fa.get(o);i=i.unionWith(l.view.Va)}return i}}function S1(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=E1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kC.bind(null,e),e.Ca.d_=pC.bind(null,e.eventManager),e.Ca.$a=mC.bind(null,e.eventManager),e}function NC(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CC.bind(null,e),e}class ac{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Fc(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return jA(this.persistence,new MA,e.initialUser,this.serializer)}Ga(e){return new DA(jp.Zr,this.serializer)}Wa(e){return new qA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ac.provider={build:()=>new ac};class yf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Fy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=bC.bind(null,this.syncEngine),await dC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new fC}()}createDatastore(e){const n=Fc(e.databaseInfo.databaseId),r=function(s){return new QA(s)}(e.databaseInfo);return function(s,o,l,u){return new JA(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new eC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Fy(this.syncEngine,n,0),function(){return Oy.D()?new Oy:new HA}())}createSyncEngine(e,n){return function(i,s,o,l,u,d,p){const y=new _C(i,s,o,l,u,d);return p&&(y.Qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ue(i);ee("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await nl(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}yf.provider={build:()=>new yf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=wt.UNAUTHENTICATED,this.clientId=Rw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{ee("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(ee("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=qp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gd(t,e){t.asyncQueue.verifyOperationInProgress(),ee("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await l1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function zy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OC(t);ee("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Vy(e.remoteStore,i)),t._onlineComponents=e}async function OC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===U.FAILED_PRECONDITION||i.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ys("Error using user provided cache. Falling back to memory cache: "+n),await Gd(t,new ac)}}else ee("FirestoreClient","Using default OfflineComponentProvider"),await Gd(t,new ac);return t._offlineComponents}async function k1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee("FirestoreClient","Using user provided OnlineComponentProvider"),await zy(t,t._uninitializedComponentsProvider._online)):(ee("FirestoreClient","Using default OnlineComponentProvider"),await zy(t,new yf))),t._onlineComponents}function VC(t){return k1(t).then(e=>e.syncEngine)}async function lc(t){const e=await k1(t),n=e.eventManager;return n.onListen=wC.bind(null,e.syncEngine),n.onUnlisten=IC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=EC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xC.bind(null,e.syncEngine),n}function MC(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Xp({next:_=>{p.Za(),o.enqueueAndForget(()=>Kp(s,y));const A=_.docs.has(l);!A&&_.fromCache?d.reject(new J(U.UNAVAILABLE,"Failed to get document because the client is offline.")):A&&_.fromCache&&u&&u.source==="server"?d.reject(new J(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new Qp(Dc(l.path),p,{includeMetadataChanges:!0,_a:!0});return Hp(s,y)}(await lc(t),t.asyncQueue,e,n,r)),r.promise}function LC(t,e,n={}){const r=new vr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,d){const p=new Xp({next:_=>{p.Za(),o.enqueueAndForget(()=>Kp(s,y)),_.fromCache&&u.source==="server"?d.reject(new J(U.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),y=new Qp(l,p,{includeMetadataChanges:!0,_a:!0});return Hp(s,y)}(await lc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C1(t,e,n){if(!n)throw new J(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function jC(t,e,n,r){if(e===!0&&r===!0)throw new J(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function $y(t){if(!re.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Wy(t){if(re.isDocumentKey(t))throw new J(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Bc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function Bt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Bc(t);throw new J(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new J(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}jC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=A1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new J(U.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tk;switch(r.type){case"firstParty":return new sk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=By.get(n);r&&(ee("ComponentProvider","Removing Datastore"),By.delete(n),r.terminate())}(this),Promise.resolve()}}function FC(t,e,n,r={}){var i;const s=(t=Bt(t,$c))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Ys("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=wt.MOCK_USER;else{l=j_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new J(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new wt(d)}t._authCredentials=new nk(new Cw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class It{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new hi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new It(this.firestore,e,this._key)}}class hi extends rs{constructor(e,n,r){super(e,n,Dc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new It(this.firestore,null,new re(e))}withConverter(e){return new hi(this.firestore,e,this._path)}}function Rt(t,e,...n){if(t=it(t),C1("collection","path",e),t instanceof $c){const r=Me.fromString(e,...n);return Wy(r),new hi(t,null,r)}{if(!(t instanceof It||t instanceof hi))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return Wy(r),new hi(t.firestore,null,r)}}function Ee(t,e,...n){if(t=it(t),arguments.length===1&&(e=Rw.newId()),C1("doc","path",e),t instanceof $c){const r=Me.fromString(e,...n);return $y(r),new It(t,null,new re(r))}{if(!(t instanceof It||t instanceof hi))throw new J(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Me.fromString(e,...n));return $y(r),new It(t.firestore,t instanceof hi?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new c1(this,"async_queue_retry"),this.Vu=()=>{const r=Kd();r&&ee("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new vr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ja(e))throw e;ee("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ar("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=Wp.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&ae()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ky(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Rr extends $c{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hy,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hy(e),this._firestoreClient=void 0,await e}}}function UC(t,e){const n=typeof t=="object"?t:mp(),r=typeof t=="string"?t:"(default)",i=Rc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=V_("firestore");s&&FC(i,...s)}return i}function Wc(t){if(t._terminated)throw new J(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zC(t),t._firestoreClient}function zC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,d,p){return new vk(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,A1(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new DC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ro(ft.fromBase64String(e))}catch(n){throw new J(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ro(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BC=/^__.*__$/;class $C{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms):new el(e,this.data,n,this.fieldTransforms)}}class R1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ti(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function b1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Kc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Kc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return uc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(b1(this.Cu)&&BC.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class WC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Fc(e)}Qu(e,n,r,i=!1){return new Kc({Cu:e,methodName:n,qu:r,path:ut.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gc(t){const e=t._freezeSettings(),n=Fc(t._databaseId);return new WC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function P1(t,e,n,r,i,s={}){const o=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);tm("Data must be an object, but it was:",o,r);const l=N1(r,o);let u,d;if(s.merge)u=new Jt(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const y of s.mergeFields){const _=vf(e,y,n);if(!o.contains(_))throw new J(U.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);O1(p,_)||p.push(_)}u=new Jt(p),d=o.fieldTransforms.filter(y=>u.covers(y.field))}else u=null,d=o.fieldTransforms;return new $C(new Lt(l),u,d)}class Qc extends Hc{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Qc}}function qC(t,e,n){return new Kc({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class em extends Hc{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=qC(this,e,!0),r=this.Ku.map(s=>ho(s,n)),i=new eo(r);return new $k(e.path,i)}isEqual(e){return e instanceof em&&ba(this.Ku,e.Ku)}}function HC(t,e,n,r){const i=t.Qu(1,e,n);tm("Data must be an object, but it was:",i,r);const s=[],o=Lt.empty();ts(r,(u,d)=>{const p=nm(e,u,n);d=it(d);const y=i.Nu(p);if(d instanceof Qc)s.push(p);else{const _=ho(d,y);_!=null&&(s.push(p),o.set(p,_))}});const l=new Jt(s);return new R1(o,l,i.fieldTransforms)}function KC(t,e,n,r,i,s){const o=t.Qu(1,e,n),l=[vf(e,r,n)],u=[i];if(s.length%2!=0)throw new J(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<s.length;_+=2)l.push(vf(e,s[_])),u.push(s[_+1]);const d=[],p=Lt.empty();for(let _=l.length-1;_>=0;--_)if(!O1(d,l[_])){const A=l[_];let N=u[_];N=it(N);const D=o.Nu(A);if(N instanceof Qc)d.push(A);else{const L=ho(N,D);L!=null&&(d.push(A),p.set(A,L))}}const y=new Jt(d);return new R1(p,y,o.fieldTransforms)}function GC(t,e,n,r=!1){return ho(n,t.Qu(r?4:3,e))}function ho(t,e){if(D1(t=it(t)))return tm("Unsupported field value:",e,t),N1(t,e);if(t instanceof Hc)return function(r,i){if(!b1(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=ho(l,i.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Uk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=et.fromDate(r);return{timestampValue:sc(i.serializer,s)}}if(r instanceof et){const s=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sc(i.serializer,s)}}if(r instanceof Jp)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ro)return{bytesValue:t1(i.serializer,r._byteString)};if(r instanceof It){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Mp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Zp)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Np(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Bc(r)}`)}(t,e)}function N1(t,e){const n={};return bw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=ho(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function D1(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof Jp||t instanceof ro||t instanceof It||t instanceof Hc||t instanceof Zp)}function tm(t,e,n){if(!D1(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Bc(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function vf(t,e,n){if((e=it(e))instanceof qc)return e._internalPath;if(typeof e=="string")return nm(t,e);throw uc("Field path arguments must be of type string or ",t,!1,void 0,n)}const QC=new RegExp("[~\\*/\\[\\]]");function nm(t,e,n){if(e.search(QC)>=0)throw uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qc(...e.split("."))._internalPath}catch{throw uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new J(U.INVALID_ARGUMENT,l+t+u)}function O1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new It(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YC(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rm("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YC extends V1{data(){return super.data()}}function rm(t,e){return typeof e=="string"?nm(t,e):e instanceof qc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M1(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class im{}class XC extends im{}function Gy(t,e,...n){let r=[];e instanceof im&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof sm).length,l=s.filter(u=>u instanceof Yc).length;if(o>1||o>0&&l>0)throw new J(U.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Yc extends XC{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Yc(e,n,r)}_apply(e){const n=this._parse(e);return L1(e._query,n),new rs(e.firestore,e.converter,lf(e._query,n))}_parse(e){const n=Gc(e.firestore);return function(s,o,l,u,d,p,y){let _;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new J(U.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Yy(y,p);const A=[];for(const N of y)A.push(Qy(u,s,N));_={arrayValue:{values:A}}}else _=Qy(u,s,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Yy(y,p),_=GC(l,o,y,p==="in"||p==="not-in");return Ye.create(d,p,_)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Xl(t,e,n){const r=e,i=rm("where",t);return Yc._create(i,r,n)}class sm extends im{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new sm(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const u of l)L1(o,u),o=lf(o,u)}(e._query,n),new rs(e.firestore,e.converter,lf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Qy(t,e,n){if(typeof(n=it(n))=="string"){if(n==="")throw new J(U.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fw(e)&&n.indexOf("/")!==-1)throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Me.fromString(n));if(!re.isDocumentKey(r))throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return my(t,new re(r))}if(n instanceof It)return my(t,n._key);throw new J(U.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Bc(n)}.`)}function Yy(t,e){if(!Array.isArray(t)||t.length===0)throw new J(U.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function L1(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(U.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class JC{convertValue(e,n="none"){switch(Xi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ts(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>He(o.doubleValue));return new Zp(s)}convertGeoPoint(e){return new Jp(He(e.latitude),He(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Va(e));default:return null}}convertTimestamp(e){const n=yi(e);return new et(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Me.fromString(e);Se(a1(r));const i=new Ma(r.get(1),r.get(3)),s=new re(r.popFirst(5));return i.isEqual(n)||Ar(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class F1 extends V1{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Iu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Iu extends F1{data(e={}){return super.data(e)}}class U1{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Jo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Iu(this._firestore,this._userDataWriter,r.key,r,new Jo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Jo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Iu(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Jo(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:ZC(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lr(t){t=Bt(t,It);const e=Bt(t.firestore,Rr);return MC(Wc(e),t._key).then(n=>z1(e,t,n))}class om extends JC{constructor(e){super(),this.firestore=e}convertBytes(e){return new ro(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new It(this.firestore,null,n)}}function eR(t){t=Bt(t,rs);const e=Bt(t.firestore,Rr),n=Wc(e),r=new om(e);return M1(t._query),LC(n,t._query).then(i=>new U1(e,r,t,i))}function Qd(t,e,n){t=Bt(t,It);const r=Bt(t.firestore,Rr),i=j1(t.converter,e,n);return Xc(r,[P1(Gc(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,gn.none())])}function Ae(t,e,n,...r){t=Bt(t,It);const i=Bt(t.firestore,Rr),s=Gc(i);let o;return o=typeof(e=it(e))=="string"||e instanceof qc?KC(s,"updateDoc",t._key,e,n,r):HC(s,"updateDoc",t._key,e),Xc(i,[o.toMutation(t._key,gn.exists(!0))])}function Xy(t){return Xc(Bt(t.firestore,Rr),[new Dp(t._key,gn.none())])}function gs(t,e){const n=Bt(t.firestore,Rr),r=Ee(t),i=j1(t.converter,e);return Xc(n,[P1(Gc(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,gn.exists(!1))]).then(()=>r)}function cn(t,...e){var n,r,i;t=it(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ky(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Ky(e[o])){const y=e[o];e[o]=(n=y.next)===null||n===void 0?void 0:n.bind(y),e[o+1]=(r=y.error)===null||r===void 0?void 0:r.bind(y),e[o+2]=(i=y.complete)===null||i===void 0?void 0:i.bind(y)}let u,d,p;if(t instanceof It)d=Bt(t.firestore,Rr),p=Dc(t._key.path),u={next:y=>{e[o]&&e[o](z1(d,t,y))},error:e[o+1],complete:e[o+2]};else{const y=Bt(t,rs);d=Bt(y.firestore,Rr),p=y._query;const _=new om(d);u={next:A=>{e[o]&&e[o](new U1(d,_,y,A))},error:e[o+1],complete:e[o+2]},M1(t._query)}return function(_,A,N,D){const L=new Xp(D),S=new Qp(A,L,N);return _.asyncQueue.enqueueAndForget(async()=>Hp(await lc(_),S)),()=>{L.Za(),_.asyncQueue.enqueueAndForget(async()=>Kp(await lc(_),S))}}(Wc(d),p,l,u)}function Xc(t,e){return function(r,i){const s=new vr;return r.asyncQueue.enqueueAndForget(async()=>SC(await VC(r),i,s)),s.promise}(Wc(t),e)}function z1(t,e,n){const r=n.docs.get(e._key),i=new om(t);return new F1(t,i,e._key,r,new Jo(n.hasPendingWrites,n.fromCache),e.converter)}function Jy(...t){return new em("arrayUnion",t)}(function(e,n=!0){(function(i){lo=i})(es),Ki(new mi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rr(new rk(r.getProvider("auth-internal")),new ak(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new J(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ma(d.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kn(cy,"4.7.3",e),Kn(cy,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B1="firebasestorage.googleapis.com",tR="storageBucket",nR=2*60*1e3,rR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends er{constructor(e,n,r=0){super(Yd(e),`Firebase Storage: ${n} (${Yd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,tr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Zn||(Zn={}));function Yd(t){return"storage/"+t}function iR(){const t="An unknown error occurred, please check the error payload for server response.";return new tr(Zn.UNKNOWN,t)}function sR(){return new tr(Zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oR(){return new tr(Zn.CANCELED,"User canceled the upload/download.")}function aR(t){return new tr(Zn.INVALID_URL,"Invalid URL '"+t+"'.")}function lR(t){return new tr(Zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Zy(t){return new tr(Zn.INVALID_ARGUMENT,t)}function $1(){return new tr(Zn.APP_DELETED,"The Firebase app was deleted.")}function uR(t){return new tr(Zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rn.makeFromUrl(e,n)}catch{return new Rn(e,"")}if(r.path==="")return r;throw lR(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const p="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",A=new RegExp(`^https?://${y}/${p}/b/${i}/o${_}`,"i"),N={bucket:1,path:3},D=n===B1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,L="([^?#]*)",S=new RegExp(`^https?://${D}/${i}/${L}`,"i"),k=[{regex:l,indices:u,postModify:s},{regex:A,indices:N,postModify:d},{regex:S,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<k.length;O++){const $=k[O],W=$.regex.exec(e);if(W){const w=W[$.indices.bucket];let v=W[$.indices.path];v||(v=""),r=new Rn(w,v),$.postModify(r);break}}if(r==null)throw aR(e);return r}}class cR{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dR(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let d=!1;function p(...L){d||(d=!0,e.apply(null,L))}function y(L){i=setTimeout(()=>{i=null,t(A,u())},L)}function _(){s&&clearTimeout(s)}function A(L,...S){if(d){_();return}if(L){_(),p.call(null,L,...S);return}if(u()||o){_(),p.call(null,L,...S);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,y(k)}let N=!1;function D(L){N||(N=!0,_(),!d&&(i!==null?(L||(l=2),clearTimeout(i),y(0)):L||(l=1)))}return y(0),s=setTimeout(()=>{o=!0,D(!0)},n),D}function hR(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){return t!==void 0}function ev(t,e,n,r){if(r<e)throw Zy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Zy(`Invalid value for '${t}'. Expected ${n} or less.`)}function pR(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var cc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(cc||(cc={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e,n,r,i,s,o,l,u,d,p,y,_=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=y,this.retry=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((A,N)=>{this.resolve_=A,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Jl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===cc.NO_ERROR,u=s.getStatus();if(!l||mR(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===cc.ABORT;r(!1,new Jl(!1,null,p));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new Jl(d,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());fR(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=iR();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?$1():oR();o(u)}else{const u=sR();o(u)}};this.canceled_?n(!1,new Jl(!1,null,!0)):this.backoffId_=dR(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&hR(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function yR(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function vR(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function _R(t,e){e&&(t["X-Firebase-GMPID"]=e)}function wR(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ER(t,e,n,r,i,s,o=!0){const l=pR(t.urlParams),u=t.url+l,d=Object.assign({},t.headers);return _R(d,e),yR(d,n),vR(d,s),wR(d,r),new gR(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function IR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this._service=e,n instanceof Rn?this._location=n:this._location=Rn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new dc(e,n)}get root(){const e=new Rn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return IR(this._location.path)}get storage(){return this._service}get parent(){const e=TR(this._location.path);if(e===null)return null;const n=new Rn(this._location.bucket,e);return new dc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw uR(e)}}function tv(t,e){const n=e==null?void 0:e[tR];return n==null?null:Rn.makeFromBucketSpec(n,t)}function xR(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:j_(i,t.app.options.projectId))}class SR{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=B1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=nR,this._maxUploadRetryTime=rR,this._requests=new Set,i!=null?this._bucket=Rn.makeFromBucketSpec(i,this._host):this._bucket=tv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rn.makeFromBucketSpec(this._url,e):this._bucket=tv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ev("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ev("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new dc(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new cR($1());{const o=ER(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const nv="@firebase/storage",rv="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="storage";function kR(t=mp(),e){t=it(t);const r=Rc(t,W1).getImmediate({identifier:e}),i=V_("storage");return i&&AR(r,...i),r}function AR(t,e,n,r={}){xR(t,e,n,r)}function CR(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new SR(n,r,i,e,es)}function RR(){Ki(new mi(W1,CR,"PUBLIC").setMultipleInstances(!0)),Kn(nv,rv,""),Kn(nv,rv,"esm2017")}RR();/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q1=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=q.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>q.createElement("svg",{ref:u,...PR,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:q1("lucide",i),...l},[...o.map(([d,p])=>q.createElement(d,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=(t,e)=>{const n=q.forwardRef(({className:r,...i},s)=>q.createElement(NR,{ref:s,iconNode:e,className:q1(`lucide-${bR(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=he("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=he("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=he("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=he("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=he("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=he("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=he("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=he("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=he("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=he("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=he("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UR=he("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=he("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=he("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=he("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=he("Minimize",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=he("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=he("Music",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=he("Paperclip",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WR=he("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qR=he("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=he("PhoneCall",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HR=he("PhoneForwarded",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KR=he("PhoneIncoming",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=he("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=he("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=he("Pin",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=he("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GR=he("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QR=he("Reply",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YR=he("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XR=he("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=he("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JR=he("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=he("Video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZR=he("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=he("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.378.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=he("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),eb={apiKey:"AIzaSyBI5cMQ-zwjU1s4je2zzqBPpepSfBy0mKg",authDomain:"aura-748c8.firebaseapp.com",projectId:"aura-748c8",storageBucket:"aura-748c8.firebasestorage.app",messagingSenderId:"654947850743",appId:"1:654947850743:web:91991c4c3d818ed20f36f2",measurementId:"G-9X9QMW22Z1"},ce="aura-pro-v28",am=zg().length?zg()[0]:z_(eb),dn=ZS(am),de=UC(am);kR(am);const ot="aura_users_v3",Qt="aura_messages_v3",zn="aura_calls_v3",tb="aura_servers_v3",Wr=t=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const n=new e,r=n.createOscillator(),i=n.createGain();r.connect(i),i.connect(n.destination),r.type="sine",t==="mute"?(r.frequency.setValueAtTime(400,n.currentTime),r.frequency.exponentialRampToValueAtTime(200,n.currentTime+.1)):t==="unmute"?(r.frequency.setValueAtTime(200,n.currentTime),r.frequency.exponentialRampToValueAtTime(400,n.currentTime+.1)):t==="leave"&&(r.frequency.setValueAtTime(500,n.currentTime),r.frequency.exponentialRampToValueAtTime(300,n.currentTime+.2)),i.gain.setValueAtTime(.1,n.currentTime),i.gain.exponentialRampToValueAtTime(.01,n.currentTime+.15),r.start(n.currentTime),r.stop(n.currentTime+.2)}catch{}},pv={iceServers:[{urls:["stun:stun1.l.google.com:19302","stun:stun2.l.google.com:19302"]},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"}]},Q=t=>{if(t==null)return"";if(typeof t=="string")return t;if(typeof t=="number"||typeof t=="boolean")return String(t);if(typeof t=="object"){if(t.text)return Q(t.text);if(t.name)return Q(t.name);if(t.message)return Q(t.message)}return"[Объект]"},nb=t=>typeof t=="string"?t:t&&typeof t=="object"&&t.reaction?t.reaction:"",rb=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>{const i=new Image;i.onload=()=>{const s=document.createElement("canvas"),o=800;let l=i.width,u=i.height;l>u&&l>o?(u*=o/l,l=o):u>o&&(l*=o/u,u=o),s.width=l,s.height=u,s.getContext("2d").drawImage(i,0,0,l,u),e(s.toDataURL("image/jpeg",.6))},i.src=r.target.result},n.readAsDataURL(t)}),mv=t=>{const e=t==="dark"||t==="mirror",n=t==="mirror",r=t==="light";return`
  :root { 
    --aura-red: #5865F2; 
    --aura-red-glow: rgba(88, 101, 242, 0.4);
    --bg-main: ${n?"#000000":e?"#0A0A0C":"#F2F2F7"};
    --bg-side: ${n?"rgba(15,15,20,0.8)":e?"#121214":"#FFFFFF"};
    --bg-card: ${n?"rgba(25,25,30,0.7)":e?"#1C1C22":"#FFFFFF"};
    --text-main: ${r?"#000000":"#FFFFFF"};
    --text-sec: #8E8E93;
    --border: ${r?"rgba(0,0,0,0.08)":"rgba(255,255,255,0.06)"};
    --nav-bg: ${n?"rgba(0,0,0,0.75)":e?"rgba(17,17,21,0.95)":"rgba(255,255,255,0.95)"};
    --glass: blur(25px) saturate(180%);
    
    --bubble-me: #5865F2; 
    --bubble-me-text: #FFFFFF;
    --bubble-other: ${e?"#1C1C1E":"#FFFFFF"};
    --bubble-other-text: ${e?"#FFFFFF":"#000000"};
  }
  
  * { box-sizing: border-box; margin: 0; padding: 0; outline: none; -webkit-tap-highlight-color: transparent; }
  
  body, html { 
    font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif; 
    background: var(--bg-main); color: var(--text-main); 
    overflow: hidden; height: 100vh; width: 100vw;
    position: fixed; inset: 0; overscroll-behavior: none; 
    user-select: none; -webkit-user-select: none; -webkit-touch-callout: none;
  }
  
  button { appearance: none !important; -webkit-appearance: none !important; background: transparent; border: none; cursor: pointer; transition: 0.2s; color: inherit; font-family: inherit; }
  input, textarea, select { appearance: none !important; -webkit-appearance: none !important; font-family: inherit; background: transparent; border: none; color: inherit; outline: none; user-select: text; -webkit-user-select: text; }
  
  ::-webkit-scrollbar { width: 5px; }
  ::-webkit-scrollbar-thumb { background: rgba(150,150,150,0.3); border-radius: 10px; }
  
  .aura-viewport { display: flex; width: 100vw; height: 100vh; overflow: hidden; background: var(--bg-main); justify-content: center; position: relative; }
  
  .auth-overlay { position: absolute; inset: 0; background: #050505; display: flex; align-items: center; justify-content: center; z-index: 100000; }
  .auth-card { background: var(--bg-card); border: 1px solid var(--border); padding: 40px; border-radius: 30px; width: 90%; max-width: 380px; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.8); animation: fadeUp 0.4s ease; }
  @keyframes fadeUp { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
  
  .app-container { display: flex; width: 100%; height: 100%; background: var(--bg-main); position: relative; }
  .sidebar { width: 340px; height: 100%; background: var(--bg-side); border-right: 1px solid var(--border); display: flex; flex-direction: row; flex-shrink: 0; z-index: 100; transition: 0.3s; }
  .main-stage { flex: 1; height: 100%; display: flex; justify-content: center; background: var(--bg-main); position: relative; }
  .chat-wrapper { flex: 1; display: flex; flex-direction: column; height: 100%; background: var(--bg-main); position: relative; border-left: 1px solid var(--border); border-right: 1px solid var(--border); animation: fadeIn 0.3s ease; }
  .media-panel { width: 320px; background: var(--bg-side); border-left: 1px solid var(--border); display: flex; flex-direction: column; z-index: 90; animation: slideLeft 0.3s ease; }
  @keyframes slideLeft { from { transform: translateX(100%); } to { transform: translateX(0); } }
  
  @media (max-width: 800px) {
    .sidebar { width: 100%; position: absolute; left: 0; top: 0; }
    .sidebar.hide { transform: translateX(-100%); }
    .main-stage { width: 100%; position: absolute; left: 0; top: 0; z-index: 200; }
    .main-stage.hide { transform: translateX(100%); }
    .chat-wrapper { border: none; }
    .media-panel { position: absolute; right: 0; top: 0; height: 100%; z-index: 300; }
  }
  
  .nav-bar { 
    height: calc(65px + env(safe-area-inset-top)); 
    padding: env(safe-area-inset-top) 20px 0 20px; 
    display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border); background: var(--nav-bg); backdrop-filter: var(--glass); z-index: 10; flex-shrink: 0; 
  }
  .tab-bar { 
    height: calc(60px + env(safe-area-inset-bottom)); 
    padding-bottom: calc(15px + env(safe-area-inset-bottom)); 
    border-top: 1px solid var(--border); display: flex; justify-content: space-around; background: var(--bg-side); flex-shrink: 0; 
  }
  .chat-input-wrapper { 
    padding: 15px 25px calc(30px + env(safe-area-inset-bottom)); 
    background: var(--bg-card); border-top: 1px solid var(--border); display: flex; gap: 15px; align-items: center; 
  }
  .tab-btn { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; color: var(--text-sec); flex: 1; font-size: 11px; font-weight: 600; }
  .tab-btn.active { color: var(--aura-red); }
  .list-item { display: flex; align-items: center; padding: 12px 20px; cursor: pointer; border-bottom: 1px solid var(--border); width: 100%; text-align: left; transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); }
  .list-item:hover { background: rgba(255,255,255,0.03); }
  .list-item:active { transform: scale(0.97); }
  .list-item.active { background: rgba(88,101,242,0.1); border-left: 3px solid var(--aura-red); }
  .list-item.pinned { background: rgba(255,255,255,0.02); }
  
  .avatar { width: 46px; height: 46px; border-radius: 50%; object-fit: cover; background: #222; flex-shrink: 0; }
  .status-dot { width: 12px; height: 12px; border-radius: 50%; background: #34C759; border: 2px solid var(--bg-side); position: absolute; bottom: 0; right: 0; }
  
  .chat-scroll { flex: 1; overflow-y: auto; padding: 20px 30px; display: flex; flex-direction: column; gap: 8px; user-select: text; touch-action: pan-y; scroll-behavior: smooth; }
  
  .bubble { 
    max-width: 70%; padding: 10px 14px; border-radius: 18px; font-size: 15px; line-height: 1.45; 
    position: relative; animation: msgIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; 
    box-shadow: 0 2px 5px rgba(0,0,0,0.15); cursor: pointer; transition: transform 0.2s ease; 
  }
  .bubble:hover { transform: scale(1.01); }
  .bubble:active { transform: scale(0.98); }
  
  @keyframes msgIn { 
    0% { opacity: 0; transform: translateY(15px) scale(0.9); } 
    100% { opacity: 1; transform: translateY(0) scale(1); } 
  }
  
  .bubble-me { background: var(--bubble-me); color: var(--bubble-me-text); align-self: flex-end; border-bottom-right-radius: 6px; transform-origin: bottom right; }
  .bubble-other { background: var(--bubble-other); color: var(--bubble-other-text); align-self: flex-start; border-bottom-left-radius: 6px; border: 1px solid var(--border); transform-origin: bottom left; }
  
  .typing-indicator { display: flex; gap: 6px; padding: 12px 18px; background: var(--bubble-other); border-radius: 18px; width: fit-content; align-self: flex-start; border-bottom-left-radius: 6px; border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.05); animation: msgIn 0.3s ease; margin-bottom: 5px; }
  .typing-dot { width: 8px; height: 8px; background: var(--text-sec); border-radius: 50%; animation: typeBounce 1.4s infinite ease-in-out both; }
  .typing-dot:nth-child(1) { animation-delay: -0.32s; }
  .typing-dot:nth-child(2) { animation-delay: -0.16s; }
  @keyframes typeBounce { 0%, 80%, 100% { transform: scale(0); opacity: 0.4; } 40% { transform: scale(1); opacity: 1; } }
  
  .file-message { display: flex; align-items: center; gap: 12px; padding: 6px; border-radius: 12px; background: rgba(0,0,0,0.1); transition: 0.2s; cursor: pointer; }
  .bubble-me .file-message { background: rgba(255,255,255,0.15); }
  .file-icon { width: 40px; height: 40px; border-radius: 50%; background: var(--aura-red); display: flex; align-items: center; justify-content: center; color: white; flex-shrink: 0; }
  .file-name { font-size: 14px; font-weight: 600; word-break: break-word; }
  .premium-input { width: 100%; padding: 12px 18px; border-radius: 20px; background: var(--bg-card); color: var(--text-main); font-size: 15px; border: 1px solid var(--border); transition: 0.2s; }
  .premium-input:focus { border-color: var(--aura-red); }
  .btn-aura-action { background: var(--aura-red); color: white; padding: 14px; border-radius: 20px; font-weight: 600; width: 100%; font-size: 15px; cursor: pointer; transition: 0.2s; }
  .btn-aura-action:active { transform: scale(0.95); }
  .reply-preview { border-left: 3px solid var(--aura-red); padding: 6px 12px; margin-bottom: 8px; background: rgba(0,0,0,0.2); border-radius: 8px; font-size: 13px; opacity: 0.8; }
  .edit-mode-bar { background: rgba(88,101,242,0.1); border-top: 1px solid var(--border); padding: 10px 25px; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--aura-red); font-weight: 600; }
  
  .circle-video { width: 240px; height: 240px; border-radius: 50%; overflow: hidden; background: #000; cursor: pointer; position: relative; }
  .msg-image { max-width: 280px; border-radius: 12px; cursor: pointer; object-fit: cover; }
  
  .voice-player { display: flex; align-items: center; gap: 12px; min-width: 200px; padding: 4px 0; }
  .voice-btn { width: 44px; height: 44px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); transition: 0.2s; border: none; cursor: pointer; }
  .voice-btn:hover { transform: scale(1.1); }
  .voice-progress { flex: 1; height: 4px; background: rgba(255,255,255,0.3); border-radius: 2px; position: relative; }
  .voice-bar { height: 100%; border-radius: 2px; transition: width 0.1s linear; background: white; }
  .drag-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.85); z-index: 300000; display: flex; align-items: center; justify-content: center; color: white; border: 4px dashed var(--aura-red); flex-direction: column; gap: 20px; backdrop-filter: blur(10px); pointer-events: none; }
  
  /* --- АНИМАЦИИ ГРУППОВОГО ЗВОНКА (DISCORD СТИЛЬ) --- */
  .call-overlay { position: fixed; inset: 0; background: #111214; z-index: 150000; display: flex; flex-direction: column; align-items: center; justify-content: center; color: white; overflow: hidden; transition: all 0.3s ease; }
  .call-overlay.minimized { inset: auto; top: calc(20px + env(safe-area-inset-top)); left: 50%; transform: translateX(-50%); width: auto; height: auto; background: transparent; padding: 0; cursor: pointer; border-radius: 30px; }
  .call-video-main { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; z-index: 5; }
  .call-video-pip { position: absolute; bottom: 120px; right: 20px; width: 140px; height: 200px; border-radius: 16px; object-fit: cover; border: 2px solid var(--aura-red); z-index: 15; background: #111; box-shadow: 0 10px 30px rgba(0,0,0,0.5); transition: 0.3s ease; }
  
  /* СТИЛЬ ПЛИТКИ ПОЛЬЗОВАТЕЛЯ */
  .group-tile {
    position: relative;
    background: #2b2d31;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 0 0 0px transparent;
    transition: box-shadow 0.15s ease;
    animation: tileIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .group-tile.speaking-blue {
    box-shadow: 0 0 0 3px #5865F2; /* Синяя обводка Discord */
  }
  @keyframes tileIn {
    from { opacity: 0; transform: scale(0.8) translateY(20px); }
    to { opacity: 1; transform: scale(1) translateY(0); }
  }
  
  .call-bg-blob { position: absolute; width: 60vw; height: 60vw; max-width: 500px; max-height: 500px; background: radial-gradient(circle, rgba(88,101,242,0.15) 0%, rgba(0,0,0,0) 70%); border-radius: 50%; animation: pulseBlob 4s infinite alternate; z-index: 1; pointer-events: none; }
  @keyframes pulseBlob { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.3); opacity: 0.8; } }
  
  .call-header-glass { position: absolute; top: calc(60px + env(safe-area-inset-top)); display: flex; flex-direction: column; align-items: center; background: rgba(20,20,25,0.6); backdrop-filter: blur(25px); padding: 40px 60px; border-radius: 40px; border: 1px solid rgba(255,255,255,0.1); z-index: 20; animation: slideDownCall 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); box-shadow: 0 20px 50px rgba(0,0,0,0.5); }
  @keyframes slideDownCall { from { transform: translateY(-50px) scale(0.9); opacity: 0; } to { transform: translateY(0) scale(1); opacity: 1; } }
  
  .call-avatar-wrapper { position: relative; display: flex; justify-content: center; align-items: center; margin-bottom: 20px; z-index: 2; }
  .call-avatar-pulse { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 4px solid var(--aura-red); background: #111; position: relative; z-index: 3; }
  .call-avatar-wrapper.calling::before, .call-avatar-wrapper.calling::after { content: ''; position: absolute; inset: -10px; border-radius: 50%; border: 2px solid var(--aura-red); animation: rippleCall 2s infinite ease-out; z-index: 1; }
  .call-avatar-wrapper.calling::after { animation-delay: 1s; }
  @keyframes rippleCall { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(2); opacity: 0; } }
  
  .call-status-text { font-size: 18px; color: rgba(255,255,255,0.8); margin-top: 10px; font-variant-numeric: tabular-nums; font-weight: 600; letter-spacing: 1px; }
  
  .btn-call { width: 50px; height: 50px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.15); transition: 0.1s ease-in-out; border: none; cursor: pointer; }
  .btn-call:hover { transform: scale(1.05); }
  .btn-call:active { transform: scale(0.85); }
  
  .device-wrapper { display: flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.6); padding: 8px 16px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); backdrop-filter: blur(10px); }
  .call-device-select { background: transparent; color: white; padding: 2px; border: none; outline: none; font-size: 13px; max-width: 140px; text-overflow: ellipsis; cursor: pointer; }
  .call-device-select option { background: #111; color: white; }
  
  .aura-toast { position: fixed; bottom: calc(30px + env(safe-area-inset-bottom)); right: 30px; background: var(--bg-card); backdrop-filter: var(--glass); border: 1px solid var(--border); border-radius: 16px; padding: 12px 16px; width: 320px; display: flex; align-items: center; gap: 14px; z-index: 9999999; box-shadow: 0 10px 40px rgba(0,0,0,0.6); animation: toastPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); cursor: pointer; }
  @keyframes toastPop { 0% { transform: translateX(120%) scale(0.9); opacity: 0; } 70% { transform: translateX(-10px) scale(1.02); opacity: 1; } 100% { transform: translateX(0) scale(1); opacity: 1; } }
  
  .context-menu { position: fixed; background: var(--bg-card); border: 1px solid var(--border); border-radius: 16px; width: 220px; box-shadow: 0 15px 35px rgba(0,0,0,0.6); z-index: 5000; animation: menuPop 0.2s ease; overflow: hidden; }
  @keyframes menuPop { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
  .context-item { padding: 12px 16px; display: flex; align-items: center; gap: 12px; width: 100%; color: var(--text-main); font-size: 14px; text-align: left; border-bottom: 1px solid var(--border); background: transparent; cursor: pointer; border: none; }
  .context-item:hover { background: rgba(88,101,242,0.1); color: var(--aura-red); padding-left: 20px; }
  
  .reactions-bar { display: flex; gap: 6px; margin-top: 6px; flex-wrap: wrap; }
  .reaction-pill { background: rgba(0,0,0,0.2); padding: 4px 8px; border-radius: 12px; font-size: 12px; border: 1px solid var(--border); }
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 10px; padding: 15px; }
  
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  `};class ib extends Cv.Component{constructor(e){super(e),this.state={hasError:!1,errorMsg:""}}static getDerivedStateFromError(e){return{hasError:!0,errorMsg:e?String(e.message||e):"Неизвестная ошибка рендера"}}componentDidCatch(e,n){console.error("Aura Guard Caught:",e,n)}render(){return this.state.hasError?f.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"#050505",color:"white",textAlign:"center",padding:"20px"},children:[f.jsx(JR,{size:64,color:"#5865F2",style:{marginBottom:20}}),f.jsx("h2",{style:{fontSize:28,fontWeight:800},children:"Сбой компонента"}),f.jsx("p",{style:{opacity:.6,marginBottom:30,maxWidth:600,wordBreak:"break-word"},children:this.state.errorMsg}),f.jsx("button",{onClick:()=>{localStorage.clear(),window.location.reload()},style:{padding:"16px 32px",background:"#5865F2",color:"white",borderRadius:20,border:"none",cursor:"pointer",fontWeight:700},children:"Очистить кэш и перезагрузить"})]}):this.props.children}}const sb=({data:t,onClose:e,onClick:n})=>(q.useEffect(()=>{try{Wr("unmute")}catch{}const r=setTimeout(e,5e3);return()=>clearTimeout(r)},[e]),f.jsxs("div",{className:"aura-toast",onClick:n,children:[f.jsx("img",{src:Q(t.avatar)||`https://api.dicebear.com/7.x/initials/svg?seed=${Q(t.name)}`,style:{width:46,height:46,borderRadius:"50%"},alt:"av"}),f.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[f.jsx("b",{style:{display:"block",fontSize:15,color:"var(--text-main)",marginBottom:2},children:Q(t.name)}),f.jsx("p",{style:{fontSize:13,opacity:.8,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q(t.text)})]}),f.jsx("button",{onClick:r=>{r.stopPropagation(),e()},style:{background:"transparent",border:"none",cursor:"pointer"},children:f.jsx(Oi,{size:18,style:{opacity:.5}})})]})),gv=({msg:t})=>{const e=q.useRef(null),[n,r]=q.useState(!1);return typeof t.text!="string"?f.jsx("div",{style:{color:"red",fontSize:12},children:"Сбой видео"}):f.jsxs("div",{className:"circle-video",onClick:()=>{e.current&&(n?e.current.pause():e.current.play(),r(!n))},children:[!n&&f.jsx("div",{style:{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.3)",zIndex:2},children:f.jsx(H1,{color:"white",size:40})}),f.jsx("video",{ref:e,src:t.text,playsInline:!0,loop:!0,style:{width:"100%",height:"100%",objectFit:"cover"}})]})},yv=({src:t,isMine:e})=>{const n=q.useRef(null),[r,i]=q.useState(!1),[s,o]=q.useState(0);return typeof t!="string"?f.jsx("div",{style:{color:"red",fontSize:12},children:"Сбой аудио"}):(q.useEffect(()=>{const l=n.current;if(!l)return;const u=()=>o(l.currentTime/(l.duration||1)*100);return l.addEventListener("timeupdate",u),l.addEventListener("ended",()=>i(!1)),()=>{l.removeEventListener("timeupdate",u)}},[]),f.jsxs("div",{className:"voice-player",children:[f.jsx("button",{className:"voice-btn",onClick:()=>{r?n.current.pause():n.current.play(),i(!r)},style:{background:e?"rgba(255,255,255,0.2)":"var(--aura-red)"},children:r?f.jsx(WR,{size:18,color:"white"}):f.jsx(H1,{size:18,color:"white",style:{marginLeft:2}})}),f.jsxs("div",{className:"voice-progress",children:[f.jsx("audio",{ref:n,src:t}),f.jsx("div",{className:"voice-bar",style:{width:`${s}%`,background:e?"white":"var(--aura-red)"}})]})]}))};function ob(){var In,Po,No,Do,or,wl,El,Tl;const[t,e]=q.useState({active:!1,message:""}),[n,r]=q.useState(null),[i,s]=q.useState("chats"),[o,l]=q.useState(null),[u,d]=q.useState([]),[p,y]=q.useState([]),[_,A]=q.useState([]),[N,D]=q.useState(""),[L,S]=q.useState(""),[T,k]=q.useState("login"),[O,$]=q.useState({username:"",password:"",name:""}),[W,w]=q.useState(""),[v,E]=q.useState(localStorage.getItem("aura_theme")||"dark"),[x,C]=q.useState(null),[R,I]=q.useState(null),[Ce,$t]=q.useState(null),[On,Wt]=q.useState(null),[K,se]=q.useState(!1),[ie,Pe]=q.useState("image"),[ke,Fe]=q.useState(!1),[qt,Ot]=q.useState(null),[rn,sn]=q.useState(0),[is,Pr]=q.useState(!1),[nr,on]=q.useState({active:!1,progress:0,fileName:""}),rr=q.useRef(null),[_n,Nr]=q.useState(null),[fo,ss]=q.useState(!1),Ht=q.useRef(null),po=q.useRef([]),[Jc,mo]=q.useState(0),go=q.useRef(),yo=q.useRef(null),Ii=q.useRef(null),[fe,Dr]=q.useState(null),[qe,Xe]=q.useState(0),[Vn,Mn]=q.useState(!1),[wn,Zc]=q.useState({audioIn:[],audioOut:[],videoIn:[]}),[kt,os]=q.useState({audioIn:"",audioOut:"",videoIn:""}),[xi,Or]=q.useState({micMuted:!1,screenShare:!1}),[ed,Vr]=q.useState(!1),[Mr,Si]=q.useState(0),[Re,Lr]=q.useState(null),[il,sl]=q.useState({}),[an,vo]=q.useState({}),[ln,_o]=q.useState(!1),[un,ki]=q.useState(!1),De=q.useRef(null);q.useRef({});const[wo,jr]=q.useState({}),[Ai,td]=q.useState([]),[En,Fr]=q.useState(null),[ol,al]=q.useState(!1),[Eo,nd]=q.useState(!1),[ll,To]=q.useState(!1),At=q.useRef(null),ir=q.useRef(null),Tn=q.useRef(null),Ct=q.useRef(null),[as,ul]=q.useState(!1),[Io,cl]=q.useState(!1),[ls,dl]=q.useState({}),us=m=>{if(!m||m.showLastSeen===!1)return"#80848e";const b=typeof m.status=="number"?m.status:m.lastActiveTS||Date.now(),M=Math.floor((Date.now()-b)/6e4);return m.status==="dnd"?"#f04747":m.status==="idle"||M>5&&m.status!=="dnd"&&m.status!=="offline"?"#f0b232":m.status==="offline"||M>1440?"#80848e":"#23a559"};q.useEffect(()=>{const m=setInterval(()=>mo(G=>G+1),2e4);(async()=>{try{if(typeof __initial_auth_token<"u"&&__initial_auth_token)try{await F2(dn,__initial_auth_token)}catch(G){console.warn("Auth with custom token failed, falling back to anonymous auth:",G),dn.currentUser||await Zg(dn)}else dn.currentUser||await Zg(dn)}catch(G){console.error("Auth init error:",G)}ul(!0)})();const M=B2(dn,async G=>{if(G){const pe=JSON.parse(localStorage.getItem("aura_creds")||"{}");if(pe.username)try{const te=await lr(Ee(de,"artifacts",ce,"public","data",ot,pe.username));if(te.exists()){const ne=te.data();if(!ne.discriminator){const Z=Math.floor(1e3+Math.random()*9e3).toString();await Ae(Ee(de,"artifacts",ce,"public","data",ot,pe.username),{discriminator:Z}),ne.discriminator=Z}r(ne)}}catch(te){console.error("Error fetching user data:",te)}}}),F=()=>{if(!dn.currentUser)return;const G=JSON.parse(localStorage.getItem("aura_creds")||"{}");if(G.username&&document.visibilityState==="visible"){if(G.showLastSeen===!1)return;Ae(Ee(de,"artifacts",ce,"public","data",ot,G.username),{status:"online",lastActiveTS:Date.now()}).catch(()=>{})}},j=()=>{if(!dn.currentUser)return;const G=JSON.parse(localStorage.getItem("aura_creds")||"{}");G.username&&(document.visibilityState==="hidden"?Ae(Ee(de,"artifacts",ce,"public","data",ot,G.username),{status:Date.now(),lastActiveTS:Date.now()}).catch(()=>{}):F())},Y=setInterval(F,2e4);return document.addEventListener("visibilitychange",j),window.addEventListener("pagehide",j),()=>{clearInterval(Y),clearInterval(m),document.removeEventListener("visibilitychange",j),window.removeEventListener("pagehide",j),M()}},[]),q.useEffect(()=>{if(!as||!dn.currentUser)return;const m=cn(Ee(de,"artifacts",ce,"public","data","system","config"),b=>{if(b.exists()){const M=b.data();M.forceUpdate===!0||M.version>1?e({active:!0,message:Q(M.message)||"Доступно обновление. Нажмите для установки."}):e({active:!1,message:""})}},b=>console.error("Config fetch error:",b));return()=>m()},[as,dn.currentUser]),q.useEffect(()=>{if(!dn.currentUser||!(n!=null&&n.username))return;try{const te=localStorage.getItem("aura_msgs_cache");te&&y(JSON.parse(te))}catch{}const m=cn(Rt(de,"artifacts",ce,"public","data",ot),te=>{d(te.docs.map(ne=>ne.data()))},te=>console.error("Users fetch error:",te)),b=cn(Rt(de,"artifacts",ce,"public","data",tb),te=>{const ne=te.docs.map(Z=>({id:Z.id,...Z.data()}));td(ne.length>0?ne:[{id:"default",name:"Aura Team's",icon:"🎮"},{id:"gaming",name:"Gaming Hub",icon:"💻"}])},te=>console.error("Servers fetch error:",te)),M=Gy(Rt(de,"artifacts",ce,"public","data",zn),Xl("type","==","group"),Xl("status","==","active")),F=cn(M,te=>{const ne={};te.docs.forEach(Z=>{ne[Z.data().name]=Z.data().participants||[]}),dl(ne)}),j=cn(Rt(de,"artifacts",ce,"public","data",Qt),te=>{var Z,pt;const ne=te.docs.map(Oe=>({id:Oe.id,...Oe.data()})).sort((Oe,Vt)=>Oe.ts-Vt.ts);if(localStorage.setItem("aura_msgs_cache",JSON.stringify(ne.slice(-150))),p.length>0&&ne.length>p.length){const Oe=ne[ne.length-1];if(Oe.uid!==n.username&&(!o||o.username!==Oe.uid)){let Vt=Oe.type==="text"?Oe.text:Oe.type==="image"?"📷 Фото":Oe.type==="file"?"📁 Файл":"🎤 Медиа";C({name:Q(Oe.name),text:Vt,avatar:Q((Z=u.find(zr=>zr.username===Oe.uid))==null?void 0:Z.avatar),uid:Oe.uid}),document.visibilityState==="hidden"&&"Notification"in window&&Notification.permission==="granted"&&new Notification(Q(Oe.name),{body:Vt,icon:Q((pt=u.find(zr=>zr.username===Oe.uid))==null?void 0:pt.avatar)})}}y(ne)},te=>console.error("Messages fetch error:",te)),Y=cn(Rt(de,"artifacts",ce,"public","data",zn),te=>{const ne=te.docs.map(Z=>({id:Z.id,...Z.data()})).filter(Z=>Z.caller===n.username||Z.callee===n.username).sort((Z,pt)=>pt.ts-Z.ts);A(ne)},te=>console.error("Call logs fetch error:",te)),G=Gy(Rt(de,"artifacts",ce,"public","data",zn),Xl("callee","==",n.username),Xl("status","==","calling")),pe=cn(G,te=>{te.docChanges().forEach(ne=>{if(ne.type==="added"){const Z=ne.doc.data(),pt=u.find(Oe=>Oe.username===Z.caller)||{name:Z.caller};Dr({id:ne.doc.id,...Z,peer:pt,isInitiator:!1}),Ln(),Vr(!1),Mn(!1),Wr("unmute"),document.visibilityState==="hidden"&&"Notification"in window&&Notification.permission==="granted"&&new Notification("Входящий вызов Aura",{body:`Звонит ${Q(pt.name)}`,icon:Q(pt.avatar)})}})},te=>console.error("Calls fetch error:",te));return()=>{m(),b(),F(),j(),pe(),Y()}},[n==null?void 0:n.username,o==null?void 0:o.username,p.length,dn.currentUser]),q.useEffect(()=>{if(!Re||!n)return;const m=[],b=[],M=(F,j)=>{if(!(!F||F.getAudioTracks().length===0))try{const Y=new(window.AudioContext||window.webkitAudioContext),G=Y.createAnalyser();Y.createMediaStreamSource(F).connect(G),G.fftSize=256;const te=G.frequencyBinCount,ne=new Uint8Array(te),Z=setInterval(()=>{G.getByteFrequencyData(ne);const Oe=ne.reduce((Vt,zr)=>Vt+zr,0)/te;jr(Vt=>!!Vt[j]==Oe>15?Vt:{...Vt,[j]:Oe>15})},120);b.push(Y),m.push(Z)}catch(Y){console.error("Audio analyser error:",Y)}};return De.current&&!ln?M(De.current,n.username):jr(F=>({...F,[n.username]:!1})),Object.entries(an).forEach(([F,j])=>{M(j,F)}),()=>{m.forEach(clearInterval),b.forEach(F=>{F.state!=="closed"&&F.close().catch(()=>{})})}},[Re,an,ln,n]),q.useEffect(()=>{if(!fe&&!Re)return;const m=setInterval(async()=>{try{const b=Date.now();await fetch("https://www.gstatic.com/generate_204",{mode:"no-cors",cache:"no-cache"});const M=Date.now()-b;Si(Math.max(8,M-15))}catch{Si(Math.floor(Math.random()*25+8))}},5e3);return fetch("https://www.gstatic.com/generate_204",{mode:"no-cors",cache:"no-cache"}).then(()=>Si(Math.floor(Math.random()*20+10))).catch(()=>Si(33)),()=>clearInterval(m)},[fe,Re]);const Ur=o&&o.username!=="global"&&((In=u.find(m=>m.username===o.username))==null?void 0:In.typingTo)===(n==null?void 0:n.username);q.useEffect(()=>{if(!n||!o||p.length===0)return;const m=p.filter(b=>b.to===n.username&&b.uid===o.username&&!b.read);m.length>0&&m.forEach(b=>{Ae(Ee(de,"artifacts",ce,"public","data",Qt,b.id),{read:!0}).catch(()=>{})}),yo.current&&setTimeout(()=>{var b;(b=yo.current)==null||b.scrollIntoView({behavior:"smooth"})},50)},[p,o,n,is,qt,Ur]),q.useEffect(()=>{let m;return fe&&fe.status==="active"?m=setInterval(()=>Xe(b=>b+1),1e3):Xe(0),()=>clearInterval(m)},[fe==null?void 0:fe.status]),q.useEffect(()=>{Tn.current&&kt.audioOut&&typeof Tn.current.setSinkId=="function"&&Tn.current.setSinkId(kt.audioOut).catch(m=>{console.warn("Браузер не разрешил переключить динамик:",m)})},[kt.audioOut,fe==null?void 0:fe.status]);const Ln=async()=>{var m,b,M;try{if(!navigator.mediaDevices||!navigator.mediaDevices.enumerateDevices)return;const F=await navigator.mediaDevices.enumerateDevices();Zc({audioIn:F.filter(j=>j.kind==="audioinput")||[],audioOut:F.filter(j=>j.kind==="audiooutput")||[],videoIn:F.filter(j=>j.kind==="videoinput")||[]}),F.length&&os({audioIn:((m=F.find(j=>j.kind==="audioinput"))==null?void 0:m.deviceId)||"",audioOut:((b=F.find(j=>j.kind==="audiooutput"))==null?void 0:b.deviceId)||"",videoIn:((M=F.find(j=>j.kind==="videoinput"))==null?void 0:M.deviceId)||""})}catch{}},xo=async()=>{const{username:m,password:b,name:M}=O;if(!m||!b)return w("Заполните поля!");w("");const F=m.toLowerCase().trim(),j=Ee(de,"artifacts",ce,"public","data",ot,F);try{if(T==="reg"){if((await lr(j)).exists())return w("Логин занят");let G=Math.floor(1e3+Math.random()*9e3).toString();const te=(await eR(Rt(de,"artifacts",ce,"public","data",ot))).docs.map(Z=>Z.data().discriminator||"0000");for(;te.includes(G);)G=Math.floor(1e3+Math.random()*9e3).toString();const ne={username:F,password:b,name:M||F,avatar:`https://api.dicebear.com/7.x/avataaars/svg?seed=${F}`,status:"online",showLastSeen:!0,ts:Date.now(),pinnedChats:[],friends:[],hiddenChats:[],discriminator:G};await Qd(j,ne),r(ne)}else{const Y=await lr(j);if(Y.exists()&&Y.data().password===b){let G=Y.data();if(!G.discriminator){const pe=Math.floor(1e3+Math.random()*9e3).toString();await Ae(j,{discriminator:pe}),G.discriminator=pe}r(G)}else return w("Неверный логин или пароль")}localStorage.setItem("aura_creds",JSON.stringify({username:F,password:b,showLastSeen:!0})),Ae(Ee(de,"artifacts",ce,"public","data",ot,F),{status:"online",lastActiveTS:Date.now()}).catch(()=>{})}catch{w("Ошибка сервера")}},rd=()=>{rr.current&&(rr.current.abort(),rr.current=null),on({active:!1,progress:0,fileName:""}),Pr(!1)};async function So(m){on({active:!0,progress:15,fileName:Q(m.name)||"Медиафайл"});const b=`${Date.now()}_${Q(m.name)||"media.webm"}`;on({active:!0,progress:45,fileName:Q(m.name)||"Медиафайл"});const M=await fetch(`https://fghqfzjphljuosmqzste.supabase.co/storage/v1/object/files/${b}`,{method:"POST",headers:{Authorization:"Bearer sb_publishable_VddqU4_ZwSDcaPVvXh4zWA_rc-dHSnq",apikey:"sb_publishable_VddqU4_ZwSDcaPVvXh4zWA_rc-dHSnq","Content-Type":m.type||"application/octet-stream"},body:m});if(!M.ok){const j=await M.json();throw new Error(j.message||"Ошибка загрузки Supabase")}on({active:!0,progress:85,fileName:Q(m.name)||"Медиафайл"});const F=`https://fghqfzjphljuosmqzste.supabase.co/storage/v1/object/public/files/${b}`;return on({active:!0,progress:100,fileName:Q(m.name)||"Медиафайл"}),F}const hl=async(m,b,M)=>{m.stopPropagation();try{const j=await(await fetch(b)).blob(),Y=window.URL.createObjectURL(j),G=document.createElement("a");G.style.display="none",G.href=Y,G.download=M||"download",document.body.appendChild(G),G.click(),window.URL.revokeObjectURL(Y)}catch{window.open(b,"_blank")}},fl=m=>{D(m.target.value),o&&o.username!=="global"&&n&&(Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{typingTo:o.username}).catch(()=>{}),clearTimeout(Ii.current),Ii.current=setTimeout(()=>{Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{typingTo:null}).catch(()=>{})},1500))},cs=async(m=N,b="text",M=null,F="",j="")=>{if(_n){const Y=_n;if(Nr(null),N.trim()){const G=o?o.username:"global";await gs(Rt(de,"artifacts",ce,"public","data",Qt),{text:N,fileName:"",uid:n.username,to:G,ts:Date.now(),name:n.name||"User",type:"text",read:!1,replyTo:Ce?{text:Ce.text,name:Ce.name}:null,reactions:{}}),D("")}Pr(!0);try{if(Y.type.startsWith("image/")){const G=await rb(Y);await gl(G,"image",Y.name)}else{const G=await So(Y);if(G){const pe=o?o.username:"global";await gs(Rt(de,"artifacts",ce,"public","data",Qt),{text:G,fileName:Q(Y.name),uid:n.username,to:pe,ts:Date.now(),name:n.name||"User",type:"file",read:!1,replyTo:Ce?{text:Ce.text,name:Ce.name}:null,reactions:{}})}}}catch(G){G.code!=="storage/canceled"&&alert("Ошибка загрузки файла. Проверьте подключение.")}finally{Pr(!1),on({active:!1,progress:0,fileName:""}),rr.current=null}$t(null);return}if(!(b==="text"&&(!m||typeof m!="string"||!m.trim()))){if(On&&b==="text"){await Ae(Ee(de,"artifacts",ce,"public","data",Qt,On.id),{text:m,edited:!0}),Wt(null),D("");return}try{let Y=m;const G=o?o.username:"global";await gs(Rt(de,"artifacts",ce,"public","data",Qt),{text:Y,fileName:Q(j)||"",uid:n.username,to:G,ts:Date.now(),name:n.name||"User",type:b,read:!1,replyTo:Ce?{text:Ce.text,name:Ce.name}:null,reactions:{}}),D(""),$t(null),Ot(null),o&&o.username!=="global"&&(Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{typingTo:null}).catch(()=>{}),clearTimeout(Ii.current))}catch(Y){Y.code!=="storage/canceled"&&console.error("Ошибка sendMessage:",Y),Pr(!1),on({active:!1,progress:0,fileName:""}),rr.current=null}}},ko=m=>{m.preventDefault(),o&&ss(!0)},pl=m=>{m.preventDefault(),ss(!1)},ml=async m=>{if(m.preventDefault(),ss(!1),!o)return;const b=m.dataTransfer.files[0];b&&Nr(b)},id=async m=>{const b=m.target.files[0];b&&(Nr(b),m.target.value="")},gl=async(m,b,M="")=>{const F=o?o.username:"global";await gs(Rt(de,"artifacts",ce,"public","data",Qt),{text:m,fileName:Q(M),uid:n.username,to:F,ts:Date.now(),name:n.name||"User",type:b,read:!1,replyTo:Ce?{text:Ce.text,name:Ce.name}:null,reactions:{}}),$t(null)},Ao=async m=>{try{const b=await navigator.mediaDevices.getUserMedia({audio:!0,video:m==="video"});Ht.current=new MediaRecorder(b,{mimeType:m==="video"?"video/webm;codecs=vp8":"audio/webm;codecs=opus"}),po.current=[],Ht.current.ondataavailable=F=>{F.data.size>0&&po.current.push(F.data)},Ht.current.onstop=async()=>{const F=new Blob(po.current,{type:m==="video"?"video/webm":"audio/webm"});b.getTracks().forEach(j=>j.stop()),Pr(!0);try{const j=new File([F],m==="video"?"video_message.webm":"voice_message.webm",{type:F.type}),Y=await So(j);await gl(Y,m==="video"?"video_circle":"voice")}catch(j){j.code!=="storage/canceled"&&alert("Ошибка отправки медиафайла")}finally{Pr(!1)}},Ht.current.start(),Ot(m),sn(0);const M=setInterval(()=>{sn(F=>F+1)},1e3);Ht.current.timer=M}catch{}},Co=(m=!1)=>{if(!Ht.current||Ht.current.state==="inactive"){Ot(null);return}m&&(Ht.current.onstop=null),Ht.current.stop(),clearInterval(Ht.current.timer),Ot(null)},Ro=m=>!m||m.showLastSeen===!1?!1:m.status==="online"?!(m.lastActiveTS&&Date.now()-m.lastActiveTS>45e3):!1,jn=m=>{if(!m||m.showLastSeen===!1)return"был(а) недавно";if(Ro(m))return"в сети";const b=typeof m.status=="number"?m.status:m.lastActiveTS||Date.now(),M=Math.floor((Date.now()-b)/6e4);return M<1?"только что":M<60?`${M} мин. назад`:M<1440?`${Math.floor(M/60)} ч. назад`:"давно"},Kt=async(m,b=o)=>{if(!b)return;let M;try{const j={audio:kt.audioIn?{deviceId:{exact:kt.audioIn}}:!0,video:m==="video"};M=await navigator.mediaDevices.getUserMedia(j)}catch{if(window.confirm("Не удалось получить доступ к микрофону. Хотите войти в режиме прослушивания?"))try{const Y=window.AudioContext||window.webkitAudioContext;M=new Y().createMediaStreamDestination().stream}catch{M=new MediaStream}else return}await Ln();const F=n.username+"_"+Date.now();Dr({id:F,status:"calling",peer:b,type:m,isInitiator:!0}),Vr(!1),Mn(!1);try{const j=new RTCPeerConnection(pv);At.current=j,ir.current=M,setTimeout(()=>{Ct.current&&(Ct.current.srcObject=M)},100),M.getTracks().forEach(ne=>j.addTrack(ne,M)),j.ontrack=ne=>{Tn.current&&(Tn.current.srcObject=ne.streams[0])},j.oniceconnectionstatechange=()=>{(j.iceConnectionState==="connected"||j.iceConnectionState==="completed")&&Vr(!0)};const Y=Ee(de,"artifacts",ce,"public","data",zn,F),G=Rt(Y,"callerCandidates"),pe=Rt(Y,"calleeCandidates");j.onicecandidate=ne=>{ne.candidate&&gs(G,ne.candidate.toJSON())};const te=await j.createOffer();await j.setLocalDescription(te),await Qd(Y,{caller:n.username,callee:b.username,status:"calling",type:m,ts:Date.now(),offer:{type:te.type,sdp:te.sdp}}),cn(Y,ne=>{const Z=ne.data();if(Z){if(Z.status==="ended"||Z.status==="rejected"){Fn(!1);return}Z.answer&&!j.currentRemoteDescription&&(j.setRemoteDescription(new RTCSessionDescription(Z.answer)).catch(()=>{}),Dr(pt=>({...pt,status:"active"})))}}),cn(pe,ne=>{ne.docChanges().forEach(Z=>{Z.type==="added"&&j.addIceCandidate(new RTCIceCandidate(Z.doc.data())).catch(()=>{})})})}catch{Fn(!0)}},ds=async()=>{Dr(b=>({...b,status:"active"})),Vr(!1),Mn(!1);let m;try{const b={audio:kt.audioIn?{deviceId:{exact:kt.audioIn}}:!0,video:fe.type==="video"};m=await navigator.mediaDevices.getUserMedia(b)}catch{try{const M=window.AudioContext||window.webkitAudioContext;m=new M().createMediaStreamDestination().stream}catch{m=new MediaStream}}try{const b=new RTCPeerConnection(pv);At.current=b,ir.current=m,Ct.current&&(Ct.current.srcObject=m),m.getTracks().forEach(pe=>b.addTrack(pe,m)),b.ontrack=pe=>{Tn.current&&(Tn.current.srcObject=pe.streams[0])},b.oniceconnectionstatechange=()=>{(b.iceConnectionState==="connected"||b.iceConnectionState==="completed")&&Vr(!0)};const M=Ee(de,"artifacts",ce,"public","data",zn,fe.id),F=Rt(M,"callerCandidates"),j=Rt(M,"calleeCandidates");b.onicecandidate=pe=>{pe.candidate&&gs(j,pe.candidate.toJSON())};const Y=(await lr(M)).data();await b.setRemoteDescription(new RTCSessionDescription(Y.offer));const G=await b.createAnswer();await b.setLocalDescription(G),await Ae(M,{status:"active",answer:{type:G.type,sdp:G.sdp}}),cn(M,pe=>{var te,ne;(((te=pe.data())==null?void 0:te.status)==="ended"||((ne=pe.data())==null?void 0:ne.status)==="rejected")&&Fn(!1)}),cn(F,pe=>{pe.docChanges().forEach(te=>{te.type==="added"&&b.addIceCandidate(new RTCIceCandidate(te.doc.data())).catch(()=>{})})})}catch{Fn(!0)}},Fn=async(m=!0)=>{if(ir.current&&ir.current.getTracks().forEach(b=>b.stop()),At.current&&At.current.close(),m&&(fe!=null&&fe.id)){const b=fe.status==="calling"&&!fe.isInitiator?"rejected":"ended";await Ae(Ee(de,"artifacts",ce,"public","data",zn,fe.id),{status:b}).catch(()=>{})}Dr(null),Vr(!1),Xe(0),Mn(!1)},yl=async(m="General Voice")=>{if(!n||Re&&Re.name===m)return;Re&&await Ie(!0);const b=`group-${m.toLowerCase().replace(/\s+/g,"-")}`;C({name:"Система",text:"Подключение к голосовому чату (WebRTC P2P)...",avatar:""});try{const M=new RTCPeerConnection({iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"}]});window.groupPeer=M;let F;try{F=await navigator.mediaDevices.getUserMedia({audio:!0,video:!1}),De.current=F,F.getTracks().forEach(te=>{M.addTrack(te,F)})}catch{if(window.confirm("Не удалось получить доступ к микрофону. Хотите войти в режиме слушателя?"))F=null;else return}_o(!1),ki(!1),M.ontrack=te=>{const[ne]=te.streams;vo(Z=>({...Z,[te.track.id]:ne}))},M.onicecandidate=async te=>{if(te.candidate){const ne=Ee(de,"artifacts",ce,"public","data",zn,b);await Ae(ne,{[`candidates.${n.username}`]:Jy(te.candidate.toJSON())}).catch(()=>{})}};const j=await M.createOffer();await M.setLocalDescription(j);const Y=Ee(de,"artifacts",ce,"public","data",zn,b),G=await lr(Y);let pe=[];G.exists()&&G.data().status==="active"&&(pe=G.data().participants||[]),pe.find(te=>te.username===n.username)||pe.push({username:n.username,name:n.name||n.username,avatar:n.avatar,isStreaming:!1}),await Qd(Y,{id:b,type:"group",name:m,participants:pe,status:"active",ts:Date.now(),createdBy:n.username,offer:{type:j.type,sdp:j.sdp},candidates:{}},{merge:!0}),cn(Y,async te=>{const ne=te.data();ne&&(ne.answer&&!M.currentRemoteDescription&&await M.setRemoteDescription(new RTCSessionDescription(ne.answer)),ne.candidates&&Object.entries(ne.candidates).forEach(([Z,pt])=>{Z!==n.username&&Array.isArray(pt)&&pt.forEach(async Oe=>{try{await M.addIceCandidate(new RTCIceCandidate(Oe))}catch{}})}))}),Lr({id:b,name:m,participants:pe,status:"active",peer:M}),Mn(!1),Wr("unmute")}catch(M){console.error("WebRTC P2P error:",M),C({name:"Ошибка подключения",text:`${M.message}`,avatar:""})}},Ie=async(m=!0)=>{if(Re){if(Wr("leave"),window.groupPeer&&(window.groupPeer.close(),window.groupPeer=null),De.current&&(De.current.getTracks().forEach(b=>b.stop()),De.current=null),vo({}),m&&Re.id){const b=Ee(de,"artifacts",ce,"public","data",zn,Re.id);try{const M=await lr(b);if(M.exists()){let F=M.data().participants||[];F=F.filter(j=>j.username!==n.username),F.length===0?await Ae(b,{status:"ended"}):await Ae(b,{participants:F})}}catch{}}Lr(null)}},hs=()=>{if(window.livekitRoom&&De.current){const m=!ln;window.livekitRoom.localParticipant.setMicrophoneEnabled(!m),_o(m),Wr(m?"mute":"unmute")}},Ci=async()=>{try{if(!Re||!window.livekitRoom)return;const m=Ee(de,"artifacts",ce,"public","data",zn,Re.id);if(un){await window.livekitRoom.localParticipant.setScreenShareEnabled(!1),ki(!1),Wr("mute");const b=await lr(m);if(b.exists()){const M=b.data().participants.map(F=>F.username===n.username?{...F,isStreaming:!1}:F);await Ae(m,{participants:M})}}else{await window.livekitRoom.localParticipant.setScreenShareEnabled(!0),ki(!0),Wr("unmute");const b=await lr(m);if(b.exists()){const F=b.data().participants.map(j=>j.username===n.username?{...j,isStreaming:!0}:j);await Ae(m,{participants:F})}const M=window.livekitRoom.localParticipant.videoTrackPublications;for(const[,F]of M)F.track&&F.source==="screen_share"&&(F.track.mediaStreamTrack.onended=async()=>{await window.livekitRoom.localParticipant.setScreenShareEnabled(!1),ki(!1);const j=await lr(m);if(j.exists()){const Y=j.data().participants.map(G=>G.username===n.username?{...G,isStreaming:!1}:G);await Ae(m,{participants:Y})}})}}catch{}},Ri=()=>{Or(m=>{const b=!m.micMuted;if(ir.current){const M=ir.current.getAudioTracks();M.length>0&&(M[0].enabled=!b)}return Wr(b?"mute":"unmute"),{...m,micMuted:b}})},sd=async()=>{try{if(xi.screenShare){const m=await navigator.mediaDevices.getUserMedia({video:!0});Ct.current&&(Ct.current.srcObject=m);const b=m.getVideoTracks()[0],M=At.current.getSenders().find(F=>{var j;return((j=F.track)==null?void 0:j.kind)==="video"});M&&M.replaceTrack(b),Or(F=>({...F,screenShare:!1}))}else{const m=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});Ct.current&&(Ct.current.srcObject=m);const b=m.getVideoTracks()[0],M=At.current.getSenders().find(F=>{var j;return((j=F.track)==null?void 0:j.kind)==="video"});M&&M.replaceTrack(b),Or(F=>({...F,screenShare:!0})),b.onended=async()=>{const F=await navigator.mediaDevices.getUserMedia({video:!0}),j=F.getVideoTracks()[0];M&&M.replaceTrack(j),Ct.current&&(Ct.current.srcObject=F),Or(Y=>({...Y,screenShare:!1}))}}}catch(m){console.error(m)}},vl=async m=>{const b=n.pinnedChats||[],M=b.includes(m)?b.filter(F=>F!==m):[...b,m];await Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{pinnedChats:M}),r({...n,pinnedChats:M})},_l=async(m,b)=>{if(b)p.filter(M=>M.uid===n.username&&M.to===m||M.uid===m&&M.to===n.username).forEach(M=>Xy(Ee(de,"artifacts",ce,"public","data",Qt,M.id)));else{const M=n.hiddenChats||[];await Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{hiddenChats:[...M,m]}),r({...n,hiddenChats:[...M,m]})}l(null)},od=async()=>{if(window.confirm("Уверены, что хотите скрыть все диалоги? Вы всегда можете начать их заново.")){const m=u.map(b=>b.username).filter(b=>b!==n.username);await Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{hiddenChats:m}),r({...n,hiddenChats:m}),l(null),C({name:"Система",text:"Все диалоги скрыты",avatar:""})}};if(!n)return f.jsxs("div",{className:"aura-viewport",children:[f.jsx("style",{children:mv(v)}),f.jsx("div",{className:"auth-overlay",children:f.jsxs("div",{className:"auth-card",children:[f.jsx("div",{className:"logo-box",children:f.jsx(nu,{size:45,color:"white",fill:"white"})}),f.jsx("h1",{style:{color:"white",fontSize:38,fontWeight:900,marginBottom:8},children:"AURA"}),f.jsx("p",{style:{color:"#777",fontSize:15,marginBottom:40},children:"Где твоё сообщество расцветает."}),f.jsxs("div",{style:{width:"100%"},children:[f.jsx("input",{className:"premium-input",placeholder:"Логин",value:O.username,onChange:m=>$({...O,username:m.target.value}),style:{marginBottom:12}}),f.jsx("input",{className:"premium-input",type:"password",placeholder:"Пароль",value:O.password,onChange:m=>$({...O,password:m.target.value}),style:{marginBottom:12}}),T==="reg"&&f.jsx("input",{className:"premium-input",placeholder:"Отображаемое имя",value:O.name,onChange:m=>$({...O,name:m.target.value}),style:{marginBottom:12}}),W&&f.jsx("p",{style:{color:"var(--aura-red)",marginBottom:12,fontSize:14},children:Q(W)}),f.jsx("button",{className:"btn-aura-action",onClick:xo,children:T==="login"?"ВОЙТИ В AURA":"СОЗДАТЬ АККАУНТ"}),f.jsx("button",{onClick:()=>{k(T==="login"?"reg":"login"),w("")},style:{marginTop:20,color:"var(--aura-red)",fontWeight:800,fontSize:14},children:T==="login"?"У меня ещё нет аккаунта":"Уже есть аккаунт? Войти"})]})]})})]});const ad=[...u].filter(m=>{const b=((n==null?void 0:n.friends)||[]).includes(m.username),M=Q(m.name).toLowerCase().includes(L.toLowerCase());return m.username!==(n==null?void 0:n.username)&&!((n==null?void 0:n.hiddenChats)||[]).includes(m.username)&&b&&M}).sort((m,b)=>{var j,Y;const M=(j=n==null?void 0:n.pinnedChats)!=null&&j.includes(m.username)?1:0;return((Y=n==null?void 0:n.pinnedChats)!=null&&Y.includes(b.username)?1:0)-M}),bo=p.filter(m=>(o==null?void 0:o.username)==="global"?m.to==="global":m.uid===(n==null?void 0:n.username)&&m.to===(o==null?void 0:o.username)||m.uid===(o==null?void 0:o.username)&&m.to===(n==null?void 0:n.username)),sr=bo.find(m=>m.isPinned);return f.jsxs("div",{className:"aura-viewport",onDragOver:ko,onDragLeave:pl,onDrop:ml,children:[f.jsx("style",{children:mv(v)}),fo&&f.jsxs("div",{className:"drag-overlay",children:[f.jsx(av,{size:60,color:"var(--aura-red)"}),f.jsx("h2",{style:{fontSize:24,fontWeight:700},children:"Отпустите файл для отправки"})]}),f.jsxs("div",{className:"app-container",children:[f.jsxs("div",{className:`sidebar ${o&&(i==="chats"||i==="calls"||i==="server")?"hide":""}`,children:[f.jsxs("div",{style:{width:"72px",background:"#202225",display:"flex",flexDirection:"column",alignItems:"center",paddingTop:"12px",gap:"8px",borderRight:"1px solid var(--border)",flexShrink:0,zIndex:10,overflowY:"auto"},children:[f.jsx("button",{onClick:()=>{s("chats"),l(null)},style:{width:48,height:48,borderRadius:i==="chats"?"16px":"50%",background:"#5865F2",display:"flex",alignItems:"center",justifyContent:"center",border:"none",marginBottom:"8px",cursor:"pointer",transition:"all 0.2s"},children:f.jsx(nu,{size:24,color:"white",fill:"white"})}),f.jsx("div",{style:{width:"32px",height:"2px",background:"#292b2f",margin:"4px 0",flexShrink:0}}),Ai.map((m,b)=>f.jsx("button",{onClick:()=>{s("server"),Fr(m),l(null)},style:{width:48,height:48,flexShrink:0,borderRadius:(En==null?void 0:En.id)===m.id&&i==="server"?"16px":"50%",background:"var(--bg-card)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,border:"none",transition:"all 0.2s",cursor:"pointer",boxShadow:(En==null?void 0:En.id)===m.id&&i==="server"?"0 0 10px rgba(88,101,242,0.5)":"none"},children:Q(m.icon)},m.id||b)),f.jsx("button",{onClick:()=>Fe(!0),style:{width:48,height:48,flexShrink:0,borderRadius:"50%",background:"#36393e",display:"flex",alignItems:"center",justifyContent:"center",fontSize:24,color:"#43b581",border:"2px dashed #43b581",marginTop:"8px",cursor:"pointer",transition:"all 0.2s"},children:"+"})]}),f.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"var(--bg-side)",overflow:"hidden"},children:[f.jsxs("div",{className:"nav-bar",children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[f.jsx(nu,{size:28,color:"var(--aura-red)",fill:"var(--aura-red)"}),f.jsx("h2",{style:{fontWeight:900,fontSize:24,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:160},children:i==="server"?Q((En==null?void 0:En.name)||"Сервер"):"Aura"})]}),f.jsx(sv,{size:20,color:"var(--aura-red)",style:{cursor:"pointer"}})]}),f.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column"},children:[i==="server"&&f.jsxs("div",{style:{padding:"8px 0"},children:[f.jsxs("div",{style:{padding:"4px 16px",fontSize:11,color:"#8e9297",fontWeight:700,display:"flex",alignItems:"center",gap:6},children:["ТЕКСТОВЫЕ КАНАЛЫ ",f.jsx("span",{style:{marginLeft:"auto"},children:"⌄"})]}),f.jsxs("button",{onClick:()=>l({username:"global",name:"# general",avatar:"",isChannel:!0}),style:{width:"calc(100% - 16px)",margin:"4px 8px",padding:"8px 12px",textAlign:"left",background:(o==null?void 0:o.name)==="# general"?"rgba(255,255,255,0.08)":"transparent",color:(o==null?void 0:o.name)==="# general"?"#fff":"var(--text-sec)",borderRadius:"6px",display:"flex",alignItems:"center",gap:8,border:"none",cursor:"pointer",transition:"0.2s"},children:[f.jsx("span",{style:{color:"var(--text-sec)",fontSize:18},children:"#"})," general"]}),f.jsxs("button",{onClick:()=>l({username:"global",name:"# news",avatar:"",isChannel:!0}),style:{width:"calc(100% - 16px)",margin:"4px 8px",padding:"8px 12px",textAlign:"left",background:(o==null?void 0:o.name)==="# news"?"rgba(255,255,255,0.08)":"transparent",color:(o==null?void 0:o.name)==="# news"?"#fff":"var(--text-sec)",borderRadius:"6px",display:"flex",alignItems:"center",gap:8,border:"none",cursor:"pointer",transition:"0.2s"},children:[f.jsx("span",{style:{color:"var(--text-sec)",fontSize:18},children:"#"})," news"]}),f.jsxs("div",{style:{marginTop:"20px"},children:[f.jsxs("div",{style:{padding:"4px 16px",fontSize:11,color:"#8e9297",fontWeight:700,display:"flex",alignItems:"center",gap:6},children:["ГОЛОСОВЫЕ КАНАЛЫ ",f.jsx("span",{style:{marginLeft:"auto"},children:"⌄"})]}),["Основной","Игровая комната","AFK"].map((m,b)=>{const M=ls[m]||[],F=(Re==null?void 0:Re.name)===m;return f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,marginBottom:8},children:[f.jsxs("button",{onClick:()=>yl(m),style:{width:"calc(100% - 16px)",margin:"0 8px",padding:"8px 12px",textAlign:"left",background:F?"rgba(255,255,255,0.08)":"transparent",borderRadius:"6px",display:"flex",alignItems:"center",gap:8,color:F?"#fff":"var(--text-sec)",border:"none",cursor:"pointer",transition:"0.2s"},children:[f.jsx("span",{style:{color:F?"#34C759":"var(--text-sec)",fontSize:16},children:"🔊"}),f.jsx("span",{style:{flex:1,fontWeight:600},children:Q(m)})]}),M.length>0&&f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6,marginTop:4,paddingBottom:4},children:M.map((j,Y)=>f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"4px 8px 4px 38px"},children:[f.jsx("img",{src:Q(j.avatar),style:{width:24,height:24,borderRadius:"50%",border:j.isStreaming?"2px solid #da373c":"2px solid transparent"},alt:"u"}),f.jsx("span",{style:{fontSize:14,color:"var(--text-sec)",flex:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",fontWeight:600},children:Q(j.name)}),j.isStreaming&&f.jsx("span",{style:{background:"#da373c",color:"white",fontSize:10,fontWeight:800,padding:"2px 6px",borderRadius:4,letterSpacing:.5},children:"В ЭФИРЕ"})]},Y))})]},b)})]})]}),i==="chats"&&f.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",overflow:"hidden"},children:[f.jsxs("div",{style:{padding:16},children:[f.jsxs("div",{className:"premium-input",style:{display:"flex",alignItems:"center",gap:10,padding:"10px 16px",borderRadius:16},children:[f.jsx(YR,{size:18,color:"#8E8E93"}),f.jsx("input",{style:{width:"100%",background:"transparent",border:"none",color:"inherit",outline:"none"},placeholder:"Поиск друзей...",value:L,onChange:m=>S(m.target.value)})]}),f.jsxs("div",{style:{marginTop:12,display:"flex",gap:8},children:[f.jsx("input",{className:"premium-input",placeholder:"Имя#1234",id:"add-friend-input",style:{flex:1,fontSize:13}}),f.jsx("button",{onClick:async()=>{const m=document.getElementById("add-friend-input").value.trim();if(!m.includes("#")){alert("Введите в формате Имя#1234");return}const[b,M]=m.split("#"),F=u.find(j=>Q(j.name).toLowerCase()===b.toLowerCase()&&String(j.discriminator)===M);if(F){const j=n.friends||[];if(j.includes(F.username))alert("Уже в друзьях");else{const Y=[...j,F.username];await Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{friends:Y}),r(G=>({...G,friends:Y})),alert(`✅ ${Q(F.name)}#${Q(F.discriminator)} добавлен в друзья!`)}document.getElementById("add-friend-input").value=""}else alert("Пользователь не найден")},style:{background:"#43b581",color:"white",padding:"8px 16px",borderRadius:12,fontSize:13,fontWeight:600,border:"none",cursor:"pointer"},children:"Добавить"})]})]}),f.jsxs("div",{style:{flex:1,overflowY:"auto"},children:[f.jsx("div",{style:{padding:"8px 20px",fontSize:11,color:"var(--text-sec)",fontWeight:700,letterSpacing:1},children:"ПРЯМЫЕ СООБЩЕНИЯ"}),f.jsxs("button",{className:`list-item ${(o==null?void 0:o.username)==="global"?"active":""}`,onClick:()=>l({username:"global",name:"# general",avatar:""}),children:[f.jsx("div",{style:{width:48,height:48,borderRadius:16,background:"var(--aura-red)",display:"flex",alignItems:"center",justifyContent:"center",marginRight:16,flexShrink:0},children:f.jsx(LR,{size:24,color:"white"})}),f.jsxs("div",{style:{flex:1},children:[f.jsx("b",{children:"# general"}),f.jsx("p",{style:{fontSize:13,opacity:.6,margin:0},children:"Общий чат Aura"})]})]}),ad.map(m=>{var M,F;const b=p.filter(j=>j.uid===m.username&&j.to===n.username&&!j.read).length;return f.jsxs("button",{className:`list-item ${(o==null?void 0:o.username)===m.username?"active":""} ${(M=n.pinnedChats)!=null&&M.includes(m.username)?"pinned":""}`,onClick:()=>l(m),onContextMenu:j=>{j.preventDefault(),I({type:"user",item:m,rect:j.currentTarget.getBoundingClientRect()})},children:[f.jsxs("div",{style:{position:"relative"},children:[f.jsx("img",{src:Q(m.avatar),className:"avatar",alt:"av"}),Ro(m)&&f.jsx("div",{className:"status-dot"})]}),f.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",gap:4,paddingLeft:12},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[f.jsxs("b",{style:{fontSize:15,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",color:"var(--text-main)"},children:[Q(m.name)," ",f.jsxs("span",{style:{fontSize:13,color:"var(--text-sec)",fontWeight:500},children:["#",String(m.discriminator||"0000")]})]}),f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[b>0&&f.jsx("span",{style:{background:"#34C759",color:"white",padding:"2px 7px",borderRadius:10,fontSize:11,fontWeight:800},children:b}),((F=n.pinnedChats)==null?void 0:F.includes(m.username))&&f.jsx(tu,{size:12,color:"var(--text-sec)"})]})]}),f.jsx("p",{style:{fontSize:13,color:Ro(m)?"#34C759":"var(--text-sec)",margin:0},children:jn(m)})]})]},m.username)})]})]}),i==="calls"&&f.jsxs("div",{style:{flex:1,overflowY:"auto",padding:20},children:[f.jsx("h3",{style:{fontSize:13,textTransform:"uppercase",color:"var(--text-sec)",marginBottom:20,letterSpacing:1},children:"ИСТОРИЯ ЗВОНКОВ"}),_.length===0?f.jsxs("div",{style:{textAlign:"center",marginTop:100,opacity:.3},children:[f.jsx(eu,{size:60,style:{margin:"0 auto 15px"}}),f.jsx("p",{children:"Нет звонков"})]}):_.map(m=>{const b=m.callee===n.username,M=b?m.caller:m.callee,F=u.find(Y=>Y.username===M),j=m.status==="calling"||m.status==="rejected"||m.status==="ended"&&!m.answer;return f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15,marginBottom:20},children:[f.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:j?"rgba(255,59,48,0.15)":"rgba(52,199,89,0.15)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:b?f.jsx(KR,{size:20,color:j?"#FF3B30":"#34C759"}):f.jsx(HR,{size:20,color:j?"#FF3B30":"#34C759"})}),f.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[f.jsx("div",{style:{fontSize:16,fontWeight:700,color:"var(--text-main)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q(F?F.name:M)}),f.jsx("div",{style:{fontSize:13,color:"var(--text-sec)",marginTop:2},children:m.ts?new Date(m.ts).toLocaleString():"Неизвестно"})]}),f.jsx("button",{onClick:()=>{l(F||{username:M,name:M,avatar:""}),s("chats")},style:{width:36,height:36,borderRadius:"50%",background:"var(--bg-card)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,cursor:"pointer"},children:f.jsx(uv,{size:16,color:"var(--aura-red)"})}),f.jsx("button",{onClick:()=>{const Y=F||{username:M,name:M,avatar:""};l(Y),s("chats"),Kt(m.type||"voice",Y)},style:{width:36,height:36,borderRadius:"50%",background:"var(--bg-card)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,cursor:"pointer"},children:f.jsx(Jd,{size:16,color:"var(--aura-red)"})}),"                        "]},m.id)})]})]}),f.jsxs("div",{style:{height:56,background:"rgba(0,0,0,0.15)",display:"flex",alignItems:"center",padding:"0 8px",gap:8,flexShrink:0,borderTop:"1px solid var(--border)",position:"relative"},children:[f.jsxs("div",{style:{position:"relative",cursor:"pointer",padding:4,borderRadius:4,transition:"0.2s"},onClick:()=>cl(!Io),children:[f.jsx("img",{src:Q(n==null?void 0:n.avatar)||`https://api.dicebear.com/7.x/initials/svg?seed=${Q(n==null?void 0:n.username)}`,style:{width:32,height:32,borderRadius:"50%",objectFit:"cover"},alt:"me"}),f.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:us(n),border:"2px solid var(--bg-side)",position:"absolute",bottom:2,right:2}})]}),f.jsxs("div",{style:{flex:1,overflow:"hidden",display:"flex",flexDirection:"column",justifyContent:"center"},children:[f.jsx("div",{style:{fontSize:13,fontWeight:700,color:"white",whiteSpace:"nowrap",textOverflow:"ellipsis",lineHeight:1.2},children:Q(n==null?void 0:n.name)}),f.jsx("div",{style:{fontSize:11,color:"var(--text-sec)",lineHeight:1.2},children:(n==null?void 0:n.status)==="online"?"В сети":(n==null?void 0:n.status)==="idle"?"Не активен":(n==null?void 0:n.status)==="dnd"?"Не беспокоить":"Невидимый"})]}),f.jsx("div",{style:{display:"flex",gap:4},children:f.jsx("button",{onClick:()=>s("settings"),style:{padding:6,borderRadius:4,color:"var(--text-sec)",background:"transparent",border:"none",cursor:"pointer"},children:f.jsx(dv,{size:18})})}),Io&&f.jsx("div",{style:{position:"absolute",bottom:65,left:10,background:"var(--bg-card)",border:"1px solid var(--border)",borderRadius:8,padding:8,zIndex:1e3,width:200,boxShadow:"0 8px 24px rgba(0,0,0,0.4)"},children:[{value:"online",label:"В сети",color:"#23a559"},{value:"idle",label:"Не активен",color:"#f0b232"},{value:"dnd",label:"Не беспокоить",color:"#f04747"},{value:"offline",label:"Невидимый",color:"#80848e"}].map(m=>f.jsxs("div",{onClick:()=>{r(b=>({...b,status:m.value})),Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{status:m.value,lastActiveTS:Date.now()}),cl(!1)},style:{display:"flex",alignItems:"center",gap:8,padding:"8px 12px",cursor:"pointer",borderRadius:4,transition:"0.2s",background:"transparent"},className:"context-item",children:[f.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:m.color}}),f.jsx("span",{style:{color:"white",fontSize:13,fontWeight:500},children:m.label})]},m.value))})]}),f.jsxs("div",{className:"tab-bar",children:[f.jsxs("button",{className:`tab-btn ${i==="chats"?"active":""}`,onClick:()=>{s("chats"),l(null)},children:[f.jsx(uv,{size:24}),"Чаты"]}),f.jsxs("button",{className:`tab-btn ${i==="calls"?"active":""}`,onClick:()=>{s("calls"),l(null)},children:[f.jsx(eu,{size:24}),"Звонки"]}),f.jsxs("button",{className:`tab-btn ${i==="settings"?"active":""}`,onClick:()=>s("settings"),children:[f.jsx(dv,{size:24}),"Настройки"]})]})]})]}),(i==="chats"||i==="calls"||i==="server")&&f.jsxs("div",{className:`main-stage ${o?"":"hide"}`,children:[o?f.jsxs("div",{className:"chat-wrapper",children:[f.jsxs("div",{className:"nav-bar",children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15},children:[f.jsx("button",{className:"md:hide",onClick:()=>l(null),style:{color:"var(--aura-red)"},children:f.jsx(ov,{size:32})}),o.isChannel?f.jsx("div",{style:{width:40,height:40,borderRadius:"50%",background:"var(--bg-card)",border:"1px solid var(--border)",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx("span",{style:{color:"var(--text-sec)",fontSize:20},children:"#"})}):f.jsx("img",{src:Q(o.avatar)||`https://api.dicebear.com/7.x/initials/svg?seed=${Q(o.username)}`,className:"avatar",style:{width:40,height:40},alt:"p"}),f.jsxs("div",{children:[f.jsx("b",{style:{fontSize:17,display:"block"},children:Q(o.name)}),!o.isChannel&&f.jsx("span",{style:{fontSize:12,color:us(u.find(m=>m.username===o.username))},children:jn(u.find(m=>m.username===o.username))}),o.isChannel&&f.jsx("span",{style:{fontSize:12,color:"var(--text-sec)"},children:"Текстовый канал"})]})]}),!o.isChannel&&f.jsxs("div",{style:{display:"flex",gap:20},children:[f.jsx("button",{onClick:()=>Kt("voice"),children:f.jsx(eu,{size:22,color:"var(--aura-red)"})}),f.jsx("button",{onClick:()=>Kt("video"),children:f.jsx(fv,{size:24,color:"var(--aura-red)"})}),f.jsx("button",{onClick:()=>se(!K),children:f.jsx(FR,{size:22,color:"var(--aura-red)"})})]})]}),sr&&f.jsxs("button",{className:"pinned-msg-bar",onClick:()=>{var m;return(m=go.current)==null?void 0:m.scrollTo(0,0)},children:[f.jsx(tu,{size:16,color:"var(--aura-red)"}),f.jsx("div",{style:{flex:1,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",fontSize:13},children:Q(sr.text)}),f.jsx(Oi,{size:16,opacity:.5,onClick:m=>{m.stopPropagation(),Ae(Ee(de,"artifacts",ce,"public","data",Qt,sr.id),{isPinned:!1})}})]}),f.jsxs("div",{ref:go,className:"chat-scroll",children:[f.jsx("div",{style:{flex:1}}),bo.filter(m=>!(m.hiddenFor||[]).includes(n.username)).map(m=>f.jsxs("div",{className:`bubble ${m.uid===n.username?"bubble-me":"bubble-other"}`,onContextMenu:b=>{b.preventDefault(),I({type:"msg",id:m.id,rect:b.currentTarget.getBoundingClientRect(),item:m})},children:[m.uid!==n.username&&o.username==="global"&&f.jsx("div",{style:{fontSize:11,fontWeight:800,marginBottom:4,color:"var(--aura-red)"},children:Q(m.name)}),m.replyTo&&f.jsxs("div",{className:"reply-preview",children:["Ответ: ",Q(m.replyTo.text)]}),m.type==="video_circle"?f.jsx(gv,{msg:m}):m.type==="voice"?f.jsx(yv,{src:m.text,isMine:m.uid===n.username}):m.type==="image"?f.jsx("img",{src:Q(m.text),className:"msg-image",onClick:()=>window.open(m.text,"_blank"),alt:"img"}):m.type==="file"?f.jsxs("div",{className:"file-message",onClick:b=>hl(b,m.text,m.fileName),children:[f.jsx("div",{className:"file-icon",children:f.jsx(lv,{size:20})}),f.jsx("div",{className:"file-name",children:Q(m.fileName)||"Файл"}),f.jsx(av,{size:16,style:{marginLeft:"auto",opacity:.7}})]}):f.jsxs("div",{style:{wordBreak:"break-word"},children:[Q(m.text)," ",m.edited&&f.jsx("span",{style:{fontSize:10,opacity:.5},children:"(изм.)"})]}),f.jsxs("div",{style:{fontSize:10,opacity:.6,textAlign:"right",marginTop:6},children:[new Date(m.ts).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),m.uid===n.username&&(m.read?f.jsx(OR,{size:14,color:"#34C759",style:{marginLeft:4,verticalAlign:"middle"}}):f.jsx(VR,{size:14,style:{marginLeft:4,verticalAlign:"middle"}}))]}),m.reactions&&Object.keys(m.reactions).length>0&&f.jsx("div",{className:"reactions-bar",children:Object.values(m.reactions).filter(b=>b).map((b,M)=>f.jsx("span",{className:"reaction-pill",children:nb(b)},M))})]},m.id)),Ur&&f.jsxs("div",{className:"typing-indicator",children:[f.jsx("div",{className:"typing-dot"}),f.jsx("div",{className:"typing-dot"}),f.jsx("div",{className:"typing-dot"})]}),f.jsx("div",{ref:yo,style:{height:1}})]}),Ce&&f.jsxs("div",{className:"edit-mode-bar",children:[f.jsxs("span",{children:["Ответ: ",Q(Ce.text).substring(0,30),"..."]}),f.jsx("button",{onClick:()=>$t(null),children:f.jsx(Oi,{size:16})})]}),On&&f.jsxs("div",{className:"edit-mode-bar",children:[f.jsx("span",{children:"Редактирование..."}),f.jsx("button",{onClick:()=>Wt(null),children:f.jsx(Oi,{size:16})})]}),_n&&!is&&f.jsxs("div",{className:"edit-mode-bar",style:{background:"var(--bg-card)",borderTop:"1px solid var(--border)",borderRadius:"16px 16px 0 0",margin:"0 20px",padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[f.jsx("div",{style:{width:40,height:40,borderRadius:8,background:"var(--aura-red)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:f.jsx(lv,{size:20,color:"white"})}),f.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[f.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-main)",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q(_n.name)}),f.jsxs("div",{style:{fontSize:12,color:"var(--text-sec)"},children:[(_n.size/1024/1024).toFixed(2)," MB"]})]}),f.jsx("button",{onClick:()=>Nr(null),style:{background:"rgba(255,255,255,0.1)",padding:4,borderRadius:"50%",display:"flex",border:"none",cursor:"pointer"},children:f.jsx(Oi,{size:16,color:"var(--text-sec)"})})]}),f.jsxs("div",{className:"chat-input-wrapper",children:[f.jsx("button",{onClick:()=>al(!ol),style:{background:"transparent",border:"none",color:"#72767d",padding:"8px",cursor:"pointer",fontSize:18},title:"Эмодзи",children:"😊"}),ol&&f.jsx("div",{style:{position:"absolute",bottom:"60px",left:"20px",background:"#202225",borderRadius:8,padding:8,display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gap:4,zIndex:1e3,boxShadow:"0 4px 20px rgba(0,0,0,0.4)"},children:["😀","😂","❤️","🔥","👍","👎","😮","😢","😡","🎉","🚀","💯","👀","🤔","😎","🥳"].map(m=>f.jsx("button",{onClick:()=>{D(b=>b+m),al(!1)},style:{background:"transparent",border:"none",fontSize:22,padding:4,cursor:"pointer"},children:m},m))}),is&&nr.active?f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15,flex:1,padding:"5px 10px"},children:[f.jsxs("div",{style:{position:"relative",width:40,height:40,display:"flex",alignItems:"center",justifyContent:"center"},children:[f.jsxs("svg",{width:"40",height:"40",viewBox:"0 0 40 40",style:{transform:"rotate(-90deg)"},children:[f.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"none",stroke:"var(--border)",strokeWidth:"3"}),f.jsx("circle",{cx:"20",cy:"20",r:"18",fill:"none",stroke:"var(--aura-red)",strokeWidth:"3",strokeDasharray:"113.097",strokeDashoffset:113.097-113.097*nr.progress/100,strokeLinecap:"round",style:{transition:"stroke-dashoffset 0.2s ease-out"}})]}),f.jsx("button",{onClick:rd,style:{position:"absolute",background:"var(--bg-card)",borderRadius:"50%",width:18,height:18,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",border:"1px solid var(--border)"},children:f.jsx(Oi,{size:12,color:"var(--text-main)"})})]}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[f.jsx("span",{style:{fontSize:14,fontWeight:600,color:"var(--text-main)",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},children:Q(nr.fileName)}),f.jsxs("span",{style:{fontSize:12,color:"var(--text-sec)"},children:["Загрузка... ",Math.round(nr.progress),"%"]})]})]}):is?f.jsx("div",{style:{display:"flex",justifyContent:"center",width:"100%",padding:"10px 0"},children:f.jsx(GR,{className:"animate-spin",color:"var(--aura-red)",size:24})}):f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:()=>{document.getElementById("photo-upload").click()},children:f.jsx($R,{size:26,color:"var(--aura-red)"})}),f.jsx("input",{type:"file",id:"photo-upload",accept:"*/*",style:{display:"none"},onChange:id}),f.jsx("input",{className:"premium-input",value:N,onChange:fl,onKeyDown:m=>m.key==="Enter"&&cs(),placeholder:_n?"Подпись (необязательно)...":"Сообщение..."}),N.trim()||On||_n?f.jsx("button",{onClick:()=>cs(),children:f.jsx(XR,{size:24,color:"var(--aura-red)"})}):f.jsxs("div",{style:{display:"flex",gap:20},children:[f.jsx("button",{onClick:()=>Ao("video"),children:f.jsx(DR,{size:26,color:"var(--aura-red)"})}),f.jsx("button",{onClick:()=>Ao("voice"),children:f.jsx(Zl,{size:26,color:"var(--aura-red)"})})]})]})]})]}):f.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:.04},children:[f.jsx(nu,{size:300,fill:"currentColor"}),f.jsx("h1",{style:{letterSpacing:25,fontSize:70,fontWeight:900},children:"AURA"})]}),K&&o&&f.jsxs("div",{className:"media-panel",children:[f.jsxs("div",{className:"nav-bar",children:[f.jsx("b",{style:{fontSize:15},children:"Медиа история"}),f.jsx("button",{onClick:()=>se(!1),children:f.jsx(Oi,{size:20,style:{opacity:.5}})})]}),f.jsxs("div",{style:{display:"flex",gap:10,padding:15,borderBottom:"1px solid var(--border)"},children:[f.jsxs("button",{style:{flex:1,background:ie==="image"?"rgba(88,101,242,0.1)":"transparent",color:ie==="image"?"var(--aura-red)":"var(--text-main)",padding:"8px",borderRadius:10,fontWeight:600},onClick:()=>Pe("image"),children:[f.jsx(jR,{size:16,style:{marginRight:5,verticalAlign:"middle"}})," Фото"]}),f.jsxs("button",{style:{flex:1,background:ie==="voice"?"rgba(88,101,242,0.1)":"transparent",color:ie==="voice"?"var(--aura-red)":"var(--text-main)",padding:"8px",borderRadius:10,fontWeight:600},onClick:()=>Pe("voice"),children:[f.jsx(BR,{size:16,style:{marginRight:5,verticalAlign:"middle"}})," Голос"]})]}),f.jsx("div",{style:{flex:1,overflowY:"auto",padding:10,display:"grid",gridTemplateColumns:ie==="image"?"1fr 1fr":"1fr",gap:10,alignContent:"start"},children:bo.filter(m=>ie==="image"?m.type==="image":m.type==="voice"||m.type==="video_circle").map(m=>ie==="image"?f.jsx("img",{src:Q(m.text),style:{width:"100%",aspectRatio:"1/1",objectFit:"cover",borderRadius:12,cursor:"pointer"},onClick:()=>window.open(m.text,"_blank"),alt:"img"},m.id):f.jsx("div",{style:{background:"var(--bg-card)",padding:10,borderRadius:12},children:m.type==="voice"?f.jsx(yv,{src:m.text}):f.jsx(gv,{msg:m})},m.id))})]})]}),i==="settings"&&f.jsxs("div",{style:{flex:1,background:"var(--bg-main)",display:"flex",flexDirection:"column"},children:[f.jsxs("div",{className:"nav-bar",children:[f.jsx("button",{onClick:()=>s("chats"),children:f.jsx(ov,{size:32,color:"var(--text-main)"})}),f.jsx("h2",{children:"Настройки Aura"}),f.jsx("div",{style:{width:32}})]}),f.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"40px 20px",textAlign:"center"},children:[f.jsx("img",{src:Q(n==null?void 0:n.avatar),className:"avatar",style:{width:140,height:140,border:"4px solid var(--aura-red)",margin:"0 auto 20px",boxShadow:"0 10px 40px var(--aura-red-glow)",display:"block"},alt:"me"}),f.jsxs("h2",{style:{fontSize:32},children:[Q(n==null?void 0:n.name),"#",String((n==null?void 0:n.discriminator)||"0000")]}),f.jsxs("p",{style:{opacity:.5,marginBottom:40},children:["@",Q(n==null?void 0:n.username)]}),f.jsxs("div",{style:{maxWidth:600,margin:"0 auto",display:"grid",gap:20},children:[f.jsxs("div",{style:{background:"var(--bg-card)",padding:25,borderRadius:24,border:"1px solid var(--border)",textAlign:"left"},children:[f.jsx("label",{style:{fontSize:12,textTransform:"uppercase",opacity:.6,fontWeight:800,letterSpacing:1},children:"Уведомления (iOS)"}),f.jsx("p",{style:{fontSize:13,opacity:.7,marginTop:5},children:"Разрешите системе отправлять пуши, когда приложение свернуто."}),f.jsxs("button",{onClick:()=>{"Notification"in window?Notification.requestPermission().then(m=>{alert(m==="granted"?"Уведомления успешно включены!":"Разрешение не получено. Проверьте настройки iOS.")}):alert("Ваш браузер/iOS пока не поддерживает системные уведомления.")},style:{width:"100%",padding:16,marginTop:15,borderRadius:16,background:"rgba(52,199,89,0.1)",color:"#34C759",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontWeight:700,border:"none",cursor:"pointer"},children:[f.jsx(sv,{size:20})," Включить уведомления"]})]}),f.jsxs("div",{style:{background:"var(--bg-card)",padding:25,borderRadius:24,border:"1px solid var(--border)",textAlign:"left"},children:[f.jsx("label",{style:{fontSize:12,textTransform:"uppercase",opacity:.6,fontWeight:800,letterSpacing:1},children:"Оформление"}),f.jsxs("div",{style:{display:"flex",gap:10,marginTop:15},children:[f.jsx("button",{onClick:()=>{E("light"),localStorage.setItem("aura_theme","light")},style:{flex:1,padding:14,borderRadius:16,border:"1px solid var(--border)",background:v==="light"?"var(--aura-red)":"var(--bg-main)",color:v==="light"?"#fff":"var(--text-main)",fontWeight:700},children:"Light"}),f.jsx("button",{onClick:()=>{E("dark"),localStorage.setItem("aura_theme","dark")},style:{flex:1,padding:14,borderRadius:16,border:"1px solid var(--border)",background:v==="dark"?"var(--aura-red)":"var(--bg-main)",color:v==="dark"?"#fff":"var(--text-main)",fontWeight:700},children:"Dark"}),f.jsx("button",{onClick:()=>{E("mirror"),localStorage.setItem("aura_theme","mirror")},style:{flex:1,padding:14,borderRadius:16,border:"1px solid var(--border)",background:v==="mirror"?"var(--aura-red)":"var(--bg-main)",color:v==="mirror"?"#fff":"var(--text-main)",fontWeight:700},children:"Mirror"})]})]}),f.jsxs("div",{style:{background:"var(--bg-card)",padding:25,borderRadius:24,border:"1px solid var(--border)",textAlign:"left"},children:[f.jsx("label",{style:{fontSize:12,textTransform:"uppercase",opacity:.6,fontWeight:800,letterSpacing:1},children:"Приватность"}),f.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:15},children:[f.jsx("span",{style:{fontWeight:600},children:"Показывать время захода"}),f.jsx("div",{onClick:()=>{const m=n.showLastSeen===!1;r(M=>({...M,showLastSeen:m})),Ae(Ee(de,"artifacts",ce,"public","data",ot,n.username),{showLastSeen:m,status:m?"online":Date.now(),lastActiveTS:Date.now()}).catch(console.error);const b=JSON.parse(localStorage.getItem("aura_creds")||"{}");b.showLastSeen=m,localStorage.setItem("aura_creds",JSON.stringify(b))},style:{width:50,height:28,borderRadius:14,background:n.showLastSeen!==!1?"#34C759":"rgba(255,255,255,0.1)",position:"relative",cursor:"pointer",transition:"background 0.3s ease"},children:f.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"white",position:"absolute",top:2,left:n.showLastSeen!==!1?24:2,transition:"left 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:"0 2px 5px rgba(0,0,0,0.2)"}})})]})]}),f.jsxs("div",{style:{background:"var(--bg-card)",padding:25,borderRadius:24,border:"1px solid var(--border)",textAlign:"left"},children:[f.jsx("label",{style:{fontSize:12,textTransform:"uppercase",opacity:.6,fontWeight:800,letterSpacing:1},children:"Кэш и Данные"}),f.jsxs("button",{onClick:od,style:{width:"100%",padding:16,marginTop:15,borderRadius:16,background:"rgba(218, 55, 60, 0.1)",color:"#da373c",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontWeight:700,border:"none",cursor:"pointer"},children:[f.jsx(eh,{size:20})," Очистить все диалоги"]}),f.jsxs("button",{onClick:()=>{localStorage.removeItem("aura_msgs_cache"),window.location.reload()},style:{width:"100%",padding:16,marginTop:15,borderRadius:16,background:"rgba(88,101,242,0.1)",color:"#5865F2",display:"flex",alignItems:"center",justifyContent:"center",gap:10,fontWeight:700,border:"none",cursor:"pointer"},children:[f.jsx(MR,{size:20})," Очистить локальный кэш"]})]}),f.jsx("button",{className:"btn-aura-action",style:{background:"#FF3B30"},onClick:()=>{localStorage.clear(),window.location.reload()},children:"ВЫЙТИ ИЗ АККАУНТА"})]})]})]}),R&&f.jsx("div",{style:{position:"fixed",inset:0,zIndex:5e3},onClick:()=>I(null),children:f.jsx("div",{className:"context-menu",style:{top:R.rect.top,left:R.type==="msg"?R.rect.left-100:R.rect.left+50},children:R.type==="msg"?f.jsxs(f.Fragment,{children:[f.jsx("div",{style:{padding:"10px",display:"flex",gap:8,borderBottom:"1px solid var(--border)",justifyContent:"center"},children:["❤️","👍","🔥","😮","😡"].map(m=>f.jsx("button",{style:{fontSize:20},onClick:()=>{Ae(Ee(de,"artifacts",ce,"public","data",Qt,R.id),{[`reactions.${n.username}`]:m}),I(null)},children:m},m))}),f.jsxs("button",{className:"context-item",onClick:()=>{$t(R.item),I(null)},children:[f.jsx(QR,{size:16})," Ответить"]}),f.jsxs("button",{className:"context-item",onClick:()=>{Ae(Ee(de,"artifacts",ce,"public","data",Qt,R.id),{isPinned:!R.item.isPinned}),I(null)},children:[f.jsx(tu,{size:16})," ",R.item.isPinned?"Открепить":"Закрепить"]}),R.item.uid===n.username&&f.jsxs("button",{className:"context-item",onClick:()=>{Wt(R.item),D(typeof R.item.text=="string"?R.item.text:""),I(null)},children:[f.jsx(qR,{size:16})," Изменить"]}),f.jsxs("button",{className:"context-item danger",onClick:()=>{Ae(Ee(de,"artifacts",ce,"public","data",Qt,R.id),{hiddenFor:Jy(n.username)}),I(null)},children:[f.jsx(hv,{size:16})," Удалить у себя"]}),(R.item.uid===n.username||n.role==="admin")&&f.jsxs("button",{className:"context-item danger",onClick:()=>{Xy(Ee(de,"artifacts",ce,"public","data",Qt,R.id)),I(null)},children:[f.jsx(eh,{size:16})," Удалить у всех"]})]}):f.jsxs(f.Fragment,{children:[f.jsxs("button",{className:"context-item",onClick:()=>{vl(R.item.username),I(null)},children:[f.jsx(tu,{size:16})," ",(Po=n.pinnedChats)!=null&&Po.includes(R.item.username)?"Открепить диалог":"Закрепить диалог"]}),f.jsxs("button",{className:"context-item danger",onClick:()=>{_l(R.item.username,!1),I(null)},children:[f.jsx(hv,{size:16})," Удалить у себя"]}),f.jsxs("button",{className:"context-item danger",onClick:()=>{_l(R.item.username,!0),I(null)},children:[f.jsx(eh,{size:16})," Удалить у обоих"]})]})})}),(fe||Re)&&f.jsxs("div",{className:`call-overlay ${Vn?"minimized":""}`,onClick:()=>Vn&&Mn(!1),children:[Vn&&!Re?f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,background:"#34C759",padding:"10px 20px",borderRadius:30,color:"white",fontWeight:600,boxShadow:"0 10px 25px rgba(52,199,89,0.4)"},children:[f.jsx(Jd,{size:20,className:"animate-pulse"}),f.jsx("span",{children:(fe==null?void 0:fe.status)==="active"?`${Math.floor(qe/60).toString().padStart(2,"0")}:${(qe%60).toString().padStart(2,"0")}`:"Звонок..."}),f.jsx(UR,{size:18,style:{marginLeft:10}})]}):Re?f.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",background:"#111214",display:"flex",flexDirection:"column"},children:[f.jsxs("div",{style:{position:"absolute",top:20,left:"50%",transform:"translateX(-50%)",zIndex:20,background:"rgba(30, 31, 34, 0.9)",backdropFilter:"blur(20px)",padding:"6px 6px 6px 16px",borderRadius:30,display:"flex",alignItems:"center",gap:20,border:"1px solid rgba(255,255,255,0.05)",boxShadow:"0 4px 15px rgba(0,0,0,0.2)"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[f.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:"#5865F2",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(Jd,{size:14,color:"white"})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[f.jsx("div",{style:{fontSize:14,fontWeight:700,lineHeight:1,color:"white"},children:Q(Re.name)}),f.jsxs("div",{style:{fontSize:11,opacity:.7,lineHeight:1,color:"white"},children:[((No=Re.participants)==null?void 0:No.length)||1," участник(ов) • ",Object.keys(an).length+1," онлайн"]})]})]}),f.jsxs("button",{onClick:()=>Ie(!0),style:{background:"#da373c",color:"white",border:"none",padding:"6px 16px",borderRadius:24,fontWeight:600,fontSize:13,cursor:"pointer",display:"flex",alignItems:"center",gap:6},children:[f.jsx(Zd,{size:14})," Покинуть"]})]}),f.jsxs("div",{style:{flex:1,display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:16,padding:"80px 40px 120px",alignContent:"center",justifyContent:"center",overflowY:"auto"},children:[f.jsxs("div",{className:`group-tile ${wo[getCleanPeerId(Re.id,n.username)]?"speaking-blue":""}`,style:{minHeight:250,display:"flex",alignItems:"center",justifyContent:"center"},children:[f.jsx("video",{ref:m=>{m&&De.current&&(m.srcObject=De.current)},autoPlay:!0,muted:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}),!un&&f.jsx("div",{style:{position:"absolute",inset:0,background:"#2b2d31",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:f.jsx("img",{src:Q(n==null?void 0:n.avatar)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${Q(n==null?void 0:n.username)}`,style:{width:80,height:80,borderRadius:"50%"},alt:"you"})}),f.jsxs("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(0,0,0,0.6)",padding:"4px 8px",borderRadius:6,fontSize:13,fontWeight:600,display:"flex",alignItems:"center",gap:6,zIndex:2,color:"white"},children:[Q((n==null?void 0:n.name)||(n==null?void 0:n.username))," (Вы)",ln&&f.jsx(Xd,{size:14,color:"#da373c"})]}),un&&f.jsx("div",{style:{position:"absolute",top:12,right:12,background:"#da373c",padding:"4px 8px",borderRadius:6,fontSize:11,fontWeight:800,color:"white",zIndex:2,letterSpacing:.5},children:"В ЭФИРЕ"})]}),(Do=Re.participants)==null?void 0:Do.filter(m=>m.username!==n.username).map(m=>{const b=getCleanPeerId(Re.id,m.username),M=an[b],F=wo[b];return f.jsxs("div",{className:`group-tile ${F?"speaking-blue":""}`,style:{minHeight:250,display:"flex",alignItems:"center",justifyContent:"center"},children:[M?f.jsx("video",{ref:j=>{j&&(j.srcObject=M)},autoPlay:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",position:"absolute",top:0,left:0}}):f.jsx("div",{style:{position:"absolute",inset:0,background:"#2b2d31",display:"flex",alignItems:"center",justifyContent:"center",zIndex:1},children:f.jsx("img",{src:Q(m.avatar)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${Q(m.username)}`,style:{width:80,height:80,borderRadius:"50%"},alt:"peer"})}),f.jsx("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(0,0,0,0.6)",padding:"4px 8px",borderRadius:6,fontSize:13,fontWeight:600,zIndex:2,color:"white"},children:Q(m.name)}),m.isStreaming&&f.jsx("div",{style:{position:"absolute",top:12,right:12,background:"#da373c",padding:"4px 8px",borderRadius:6,fontSize:11,fontWeight:800,color:"white",zIndex:2,letterSpacing:.5},children:"В ЭФИРЕ"})]},m.username)})]}),f.jsxs("div",{style:{position:"absolute",bottom:30,left:"50%",transform:"translateX(-50%)",background:"#1e1f22",borderRadius:16,padding:"8px 16px",display:"flex",alignItems:"center",gap:24,boxShadow:"0 8px 24px rgba(0,0,0,0.4)",zIndex:50},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[f.jsx("div",{style:{position:"relative"},children:f.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#23a559",display:"flex",alignItems:"center",justifyContent:"center"},children:f.jsx(iv,{size:16,color:"white"})})}),f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2},children:[f.jsx("span",{style:{color:"#23a559",fontSize:13,fontWeight:700,lineHeight:1},children:"Голосовая связь подключена"}),f.jsxs("span",{style:{color:"#949ba4",fontSize:11,lineHeight:1},children:["Aura Voice • ",Mr>0?`${Mr} мс`:"Проверка пинга..."]})]})]}),f.jsx("div",{style:{width:1,height:32,background:"rgba(255,255,255,0.1)"}}),f.jsxs("div",{style:{display:"flex",gap:12},children:[f.jsx("button",{className:"btn-call",onClick:hs,style:{background:ln?"white":"#2b2d31",color:ln?"#da373c":"white",width:44,height:44},children:ln?f.jsx(Xd,{size:20}):f.jsx(Zl,{size:20})}),f.jsx("button",{className:"btn-call",onClick:Ci,style:{background:un?"#2b2d31":"white",color:un?"white":"#da373c",width:44,height:44},children:un?f.jsx(fv,{size:20}):f.jsx(cv,{size:20})}),f.jsx("button",{className:"btn-call",onClick:()=>Ie(!0),style:{background:"#da373c",color:"white",width:44,height:44},children:f.jsx(Zd,{size:20})})]})]})]}):f.jsxs(f.Fragment,{children:[f.jsx("button",{onClick:m=>{m.stopPropagation(),Mn(!0)},style:{position:"absolute",top:"calc(20px + env(safe-area-inset-top))",left:20,zIndex:50,background:"rgba(255,255,255,0.15)",padding:12,borderRadius:"50%",border:"none",cursor:"pointer",backdropFilter:"blur(10px)"},children:f.jsx(zR,{color:"white",size:24})}),f.jsx("div",{className:"call-bg-blob"}),(!ed||fe.type!=="video"||fe.status==="calling")&&f.jsxs("div",{className:"call-header-glass",children:[f.jsx("div",{className:`call-avatar-wrapper ${fe.status==="calling"?"calling":""}`,children:f.jsx("img",{src:Q((or=fe.peer)==null?void 0:or.avatar)||`https://api.dicebear.com/7.x/initials/svg?seed=${Q(fe.caller)}`,className:"call-avatar-pulse",alt:"avatar"})}),f.jsx("h2",{style:{fontSize:26,fontWeight:800,margin:0,zIndex:2},children:Q(((wl=fe.peer)==null?void 0:wl.name)||fe.caller)}),f.jsx("div",{className:"call-status-text",children:fe.status==="active"?`${Math.floor(qe/60).toString().padStart(2,"0")}:${(qe%60).toString().padStart(2,"0")}`:fe.isInitiator?"Исходящий вызов...":"Входящий звонок..."})]}),f.jsxs("div",{style:{position:"absolute",bottom:100,display:"flex",gap:10,zIndex:20,flexWrap:"wrap",justifyContent:"center",width:"100%"},children:[((El=wn==null?void 0:wn.audioIn)==null?void 0:El.length)>0&&f.jsxs("div",{className:"device-wrapper",onClick:m=>m.stopPropagation(),children:[f.jsx(Zl,{size:14,color:"rgba(255,255,255,0.7)"}),f.jsx("select",{className:"call-device-select",value:kt.audioIn||"",onChange:m=>os(b=>({...b,audioIn:m.target.value})),children:wn.audioIn.map((m,b)=>f.jsx("option",{value:m.deviceId,children:Q(m.label)||`Микрофон ${b+1}`},m.deviceId||`mic-${b}`))})]}),((Tl=wn==null?void 0:wn.audioOut)==null?void 0:Tl.length)>0&&f.jsxs("div",{className:"device-wrapper",onClick:m=>m.stopPropagation(),children:[f.jsx(ZR,{size:14,color:"rgba(255,255,255,0.7)"}),f.jsx("select",{className:"call-device-select",value:kt.audioOut||"",onChange:m=>os(b=>({...b,audioOut:m.target.value})),children:wn.audioOut.map((m,b)=>f.jsx("option",{value:m.deviceId,children:Q(m.label)||`Динамик ${b+1}`},m.deviceId||`out-${b}`))})]})]}),f.jsxs("div",{style:{position:"absolute",bottom:30,display:"flex",gap:15,zIndex:30},children:[f.jsx("button",{className:"btn-call",onClick:m=>{m.stopPropagation(),Ri()},style:{background:xi.micMuted?"#FF3B30":"rgba(255,255,255,0.2)"},children:xi.micMuted?f.jsx(Xd,{color:"white",size:20}):f.jsx(Zl,{color:"white",size:20})}),fe.type==="video"&&f.jsx("button",{className:"btn-call",onClick:m=>{m.stopPropagation(),sd()},style:{background:xi.screenShare?"var(--aura-red)":"rgba(255,255,255,0.2)"},children:f.jsx(cv,{color:"white",size:20})}),!fe.isInitiator&&fe.status==="calling"&&f.jsx("button",{onClick:m=>{m.stopPropagation(),ds()},className:"btn-call",style:{background:"#34C759"},children:f.jsx(eu,{color:"white"})}),f.jsx("button",{onClick:m=>{m.stopPropagation(),Fn()},className:"btn-call",style:{background:"#FF3B30"},children:f.jsx(Zd,{color:"white"})})]}),fe.status==="active"&&f.jsxs("div",{style:{position:"absolute",top:20,right:20,zIndex:50,background:"rgba(0,0,0,0.6)",padding:"6px 12px",borderRadius:20,display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#34C759",border:"1px solid rgba(255,255,255,0.1)"},children:[f.jsx(iv,{size:14}),Mr>0?`${Mr} мс`:"Проверка пинга..."]})]}),!Re&&f.jsxs(f.Fragment,{children:[f.jsx("video",{ref:Tn,className:"call-video-main",autoPlay:!0,playsInline:!0,style:{display:Vn?"none":"block"}}),f.jsx("video",{ref:Ct,className:"call-video-pip",autoPlay:!0,playsInline:!0,muted:!0,style:{display:Vn?"none":"block"}})]})]}),qt&&f.jsxs("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.9)",zIndex:2e5,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[f.jsxs("div",{style:{display:"flex",alignItems:"center",gap:15,marginBottom:20},children:[f.jsx("div",{style:{width:16,height:16,background:"#FF3B30",borderRadius:"50%",animation:"pulse 1s infinite"}}),f.jsxs("span",{style:{fontSize:40,fontWeight:800},children:[Math.floor(rn/60),":",(rn%60).toString().padStart(2,"0")]})]}),qt==="video"&&f.jsx("div",{className:"circle-video",style:{marginBottom:30,width:280,height:280},children:f.jsx("video",{ref:m=>{var b;m&&(m.srcObject=(b=Ht.current)==null?void 0:b.stream)},autoPlay:!0,muted:!0,style:{width:"100%",height:"100%",objectFit:"cover",transform:"scaleX(-1)"}})}),f.jsxs("div",{style:{display:"flex",gap:30},children:[f.jsx("button",{onClick:()=>{Co(!0)},style:{background:"rgba(255,255,255,0.1)",color:"white",padding:"16px 40px",borderRadius:25,fontWeight:700,border:"none",cursor:"pointer"},children:"ОТМЕНА"}),f.jsx("button",{onClick:()=>Co(!1),style:{background:"var(--aura-red)",color:"white",padding:"16px 50px",borderRadius:25,fontWeight:800,border:"none",cursor:"pointer"},children:"ОТПРАВИТЬ"})]})]}),x&&f.jsx(sb,{data:x,onClose:()=>C(null),onClick:()=>{l(u.find(m=>m.username===x.uid)),s("chats"),C(null)}})]})]})}function ab(){return f.jsx(ib,{children:f.jsx(ob,{})})}th.createRoot(document.getElementById("root")).render(f.jsx(Cv.StrictMode,{children:f.jsx(ab,{})}));
