var Ft=Object.defineProperty;var Dt=(n,t,e)=>t in n?Ft(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var g=(n,t,e)=>(Dt(n,typeof t!="symbol"?t+"":t,e),e),et=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var m=(n,t,e)=>(et(n,t,"read from private field"),e?e.call(n):t.get(n)),v=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},x=(n,t,e,i)=>(et(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var K=(n,t,e)=>(et(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=window,ct=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),pt=new WeakMap;let St=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ct&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=pt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&pt.set(e,t))}return t}toString(){return this.cssText}};const Gt=n=>new St(typeof n=="string"?n:n+"",void 0,dt),k=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new St(e,n,dt)},Jt=(n,t)=>{ct?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=z.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},gt=ct?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Gt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var it;const W=window,ut=W.trustedTypes,Zt=ut?ut.emptyScript:"",mt=W.reactiveElementPolyfillSupport,lt={toAttribute(n,t){switch(t){case Boolean:n=n?Zt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Ct=(n,t)=>t!==n&&(t==t||n==n),st={attribute:!0,type:String,converter:lt,reflect:!1,hasChanged:Ct};let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||st}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(gt(s))}else t!==void 0&&e.push(gt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Jt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=st){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:lt).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),c=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:lt;this._$El=o,this[o]=c.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};R.finalized=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},mt==null||mt({ReactiveElement:R}),((it=W.reactiveElementVersions)!==null&&it!==void 0?it:W.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var nt;const V=window,O=V.trustedTypes,At=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,ht="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,Bt="?"+w,qt=`<${Bt}>`,M=document,Y=()=>M.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",kt=Array.isArray,Kt=n=>kt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ot=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,vt=/>/g,S=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,yt=/"/g,Rt=/^(?:script|style|textarea|title)$/i,zt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),p=zt(1),B=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),Et=new WeakMap,I=M.createTreeWalker(M,129,null,!1),Xt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=j;for(let a=0;a<e;a++){const l=n[a];let A,h,d=-1,f=0;for(;f<l.length&&(r.lastIndex=f,h=r.exec(l),h!==null);)f=r.lastIndex,r===j?h[1]==="!--"?r=ft:h[1]!==void 0?r=vt:h[2]!==void 0?(Rt.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=S):h[3]!==void 0&&(r=S):r===S?h[0]===">"?(r=s??j,d=-1):h[1]===void 0?d=-2:(d=r.lastIndex-h[2].length,A=h[1],r=h[3]===void 0?S:h[3]==='"'?yt:bt):r===yt||r===bt?r=S:r===ft||r===vt?r=j:(r=S,s=void 0);const Z=r===S&&n[a+1].startsWith("/>")?" ":"";o+=r===j?l+qt:d>=0?(i.push(A),l.slice(0,d)+ht+l.slice(d)+w+Z):l+w+(d===-2?(i.push(void 0),a):Z)}const c=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[At!==void 0?At.createHTML(c):c,i]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const c=t.length-1,a=this.parts,[l,A]=Xt(t,e);if(this.el=F.createElement(l,i),I.currentNode=this.el.content,e===2){const h=this.el.content,d=h.firstChild;d.remove(),h.append(...d.childNodes)}for(;(s=I.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const d of s.getAttributeNames())if(d.endsWith(ht)||d.startsWith(w)){const f=A[r++];if(h.push(d),f!==void 0){const Z=s.getAttribute(f.toLowerCase()+ht).split(w),q=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:q[2],strings:Z,ctor:q[1]==="."?Vt:q[1]==="?"?_t:q[1]==="@"?te:tt})}else a.push({type:6,index:o})}for(const d of h)s.removeAttribute(d)}if(Rt.test(s.tagName)){const h=s.textContent.split(w),d=h.length-1;if(d>0){s.textContent=O?O.emptyScript:"";for(let f=0;f<d;f++)s.append(h[f],Y()),I.nextNode(),a.push({type:2,index:++o});s.append(h[d],Y())}}}else if(s.nodeType===8)if(s.data===Bt)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(w,h+1))!==-1;)a.push({type:7,index:o}),h+=w.length-1}o++}}static createElement(t,e){const i=M.createElement("template");return i.innerHTML=t,i}}function L(n,t,e=n,i){var s,o,r,c;if(t===B)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=H(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(c=e)._$Co)!==null&&r!==void 0?r:c._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=L(n,a._$AS(n,t.values),a,i)),t}class Wt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:M).importNode(i,!0);I.currentNode=o;let r=I.nextNode(),c=0,a=0,l=s[0];for(;l!==void 0;){if(c===l.index){let A;l.type===2?A=new J(r,r.nextSibling,this,t):l.type===1?A=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(A=new ee(r,this,t)),this.u.push(A),l=s[++a]}c!==(l==null?void 0:l.index)&&(r=I.nextNode(),c++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),H(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==B&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Kt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==u&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(M.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=F.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const r=new Wt(o,this),c=r.v(this.options);r.p(i),this.T(c),this._$AH=r}}_$AC(t){let e=Et.get(t.strings);return e===void 0&&Et.set(t.strings,e=new F(t)),e}k(t){kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new J(this.S(Y()),this.S(Y()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class tt{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=L(this,t,e,0),r=!H(t)||t!==this._$AH&&t!==B,r&&(this._$AH=t);else{const c=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=L(this,c[i+a],e,a),l===B&&(l=this._$AH[a]),r||(r=!H(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Vt extends tt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const $t=O?O.emptyScript:"";class _t extends tt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,$t):this.element.removeAttribute(this.name)}}class te extends tt{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=L(this,t,e,0))!==null&&i!==void 0?i:u)===B)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class ee{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const xt=V.litHtmlPolyfillSupport;xt==null||xt(F,J),((nt=V.litHtmlVersions)!==null&&nt!==void 0?nt:V.litHtmlVersions=[]).push("2.7.0");const ie=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const c=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new J(t.insertBefore(Y(),c),c,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt,at;class b extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return B}}b.finalized=!0,b._$litElement$=!0,(rt=globalThis.litElementHydrateSupport)===null||rt===void 0||rt.call(globalThis,{LitElement:b});const wt=globalThis.litElementPolyfillSupport;wt==null||wt({LitElement:b});((at=globalThis.litElementVersions)!==null&&at!==void 0?at:globalThis.litElementVersions=[]).push("3.3.0");class se extends b{static get styles(){return k`
      :host {
        background: white;
        padding: 10px 25px;
        border-top: 1px solid #c3c3c3;
        width: 100%;
      }
    `}constructor(){super()}render(){return p`
        <slot></slot>
    `}}customElements.get("hypergamma-footer")||customElements.define("hypergamma-footer",se);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=n=>(...t)=>({_$litDirective$:n,values:t});let re=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=oe(class extends re{constructor(n){var t;if(super(n),n.type!==ne.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const i=n[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[t]){const{style:e}=n.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return B}});class le extends b{constructor({primary:t,label:e,backgroundColor:i=null,size:s,onClick:o}={}){super(),this.label=e,this.primary=t,this.backgroundColor=i,this.size=s,this.onClick=o}static get styles(){return k`
    :host {
      display: inline-block;
    }

    .storybook-button {
      font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: 700;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
    }
    .storybook-button--primary {
      color: white;
      background-color: hsl(190, 60%, 36%);
    }
    .storybook-button--secondary {
      color: #333;
      background-color: transparent;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    }
    .storybook-button--small {
      font-size: 12px;
      padding: 10px 16px;
    }
    .storybook-button--medium {
      font-size: 14px;
      padding: 11px 20px;
    }
    .storybook-button--large {
      font-size: 16px;
      padding: 12px 24px;
    }
`}static get properties(){return{primary:{type:Boolean},backgroundColor:{type:String},size:{type:String},onClick:{type:Function},label:{type:String}}}render(){const t=this.primary?"storybook-button--primary":"storybook-button--secondary";return p`
      <button
        type="button"
        class=${["storybook-button",`storybook-button--${this.size||"medium"}`,t].join(" ")}
        style=${ae({backgroundColor:this.backgroundColor})}
        @click=${this.onClick}
      >
        <slot>${this.label??""}</slot>
      </button>
    `}}customElements.get("hypergamma-button")||customElements.define("hypergamma-button",le);class y extends b{constructor(e={}){super();g(this,"info",{globalState:{}});g(this,"query",e=>(this.shadowRoot??this).querySelector(e));g(this,"onSet",()=>{});g(this,"set",e=>{e&&(Object.assign(this.info,e),this.onSet(),this.requestUpdate())});g(this,"onTransition",()=>{});Object.assign(this.info,e)}static get styles(){return k`
      section {
        width: 100%;
        height: 100%;
      }
    `}render(){return p`
    <section><slot></slot></section>
    `}}customElements.get("hypergamma-page")||customElements.define("hypergamma-page",y);class Pt extends y{constructor(...t){super(...t)}render(){return p`
    <h1>Home</h1>
    <p>Coming soon...</p>
    `}}customElements.get("hypergamma-home-page")||customElements.define("hypergamma-home-page",Pt);class It extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Hyper+</h1>
      <div>
        <hypergamma-button @click=${()=>this.onTransition("plus/focus")}>Focus</hypergamma-button>
        <hypergamma-button @click=${()=>this.onTransition("plus/training")}>Training</hypergamma-button>
        <hypergamma-button @click=${()=>this.onTransition("plus/performance")}>Peformance</hypergamma-button>
        <hypergamma-button @click=${()=>this.onTransition("plus/meditation")}>Meditation</hypergamma-button>
    `}}customElements.get("hypergamma-hyperplus-page")||customElements.define("hypergamma-hyperplus-page",It);class Ut extends y{static get styles(){return k`
      .row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
      }

      .row > div {
        padding: 10px;
        flex-grow: 1;
    `}constructor(...t){super(...t)}render(){return p`
    <h1>Devices Manager</h1>
    <label>Device</label>
    <select>
      <option>Device 1</option>
      <option>Device 2</option>
      <option>Device 3</option>
      <option>Device 4</option>
    </select>

    <label>Channel</label>
    <select> 
      <option>Channel #1</option>
    </select>

    <div class="row">
      <div>
        <h3>Battery Life</h3>
        <p>100%</p>
      </div>
      <div>
        <h3>Device Status</h3>
        <p>Connected</p>
      </div>
      <div>
        <h3>Last Session</h3>
        <p>${new Date().toUTCString()}</p>
      </div>
      <div>
        <h3>Average Session Duration</h3>
        <p>${(120*Math.random()).toFixed(2)} minutes</p>
      </div>
    </div>



    `}}customElements.get("hypergamma-devices-page")||customElements.define("hypergamma-devices-page",Ut);class Tt extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Analytics</h1>
    `}}customElements.get("hypergamma-analytics-page")||customElements.define("hypergamma-analytics-page",Tt);class Qt extends y{constructor(...t){super(...t)}render(){return p`
    <h1>Reports</h1>
    <p>Coming soon...</p>
    `}}customElements.get("hypergamma-reports-page")||customElements.define("hypergamma-reports-page",Qt);const he=k`
    :host {
        position: relative;
        display: grid;
        grid-template-rows: fit-content(100%) 1fr fit-content(100%);
        overflow: hidden;
        height: 100%;
    }

    section { 
      padding: 25px;
    }
`;var C;class Ot extends b{constructor({toRender:e}={}){super();g(this,"history",[]);g(this,"onTransition",()=>{});v(this,C,[]);this.toRender=e}static get styles(){return he}static get properties(){return{toRender:{type:Object,reflect:!1}}}attributeChangedCallback(...e){const i=["toRender"];super.attributeChangedCallback(...e),i.includes(e[0])&&this.requestUpdate()}set(e){let i=e.page??e;typeof i=="function"&&(i=new i),i.onTransition=this.onTransition,this.content?this.toRender=e.page?e:{page:i}:m(this,C).push(i)}updated(){this.content=(this.shadowRoot??this).querySelector("#content"),m(this,C).length&&(m(this,C).forEach(e=>this.set(e)),x(this,C,[]))}render(){let{page:e=""}=this.toRender??{};return p`
      <main id="content">
        <section>
          ${e}
        </section>
      </main>
    `}}C=new WeakMap;customElements.get("hypergamma-main")||customElements.define("hypergamma-main",Ot);const ce=k`
 
a {
  text-decoration: none;
  display: flex;
  align-items: center;
  user-select: none;
}

img {
  width: 50px;
  padding-right: 15px;
  box-sizing: border-box;
}

li {
  margin-bottom: 10px;
}

#sidebarCollapse {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: transparent;
  position: absolute;
  top: 8px;
  left: 200px;
  cursor: pointer;
  border: none;
  z-index: 2;
  transition: all 0.25s linear;
}

#sidebarCollapse span {
  width: 80%;
  height: 2px;
  margin: 0 auto;
  display: block;
  background: var(--color-light-green);
  transition: all 0.25s linear;
  /* transition: all 0.1s cubic-bezier(0.81, -0.33, 0.345, 1.375); */
}
/* animate toggle button */
#sidebarCollapse span:first-of-type {
  transition: all 0.25s linear;
  transform: rotate(45deg) translate(2px, 2px);
}
#sidebarCollapse span:nth-of-type(2) {
  transition: all 0.25s linear;
  opacity: 0;
}
#sidebarCollapse span:last-of-type {
  transition: all 0.25s linear;
  transform: rotate(-45deg) translate(1px, -1px);
}

#sidebarCollapse.active span {
  transition: all 0.25s linear;
  transform: none;
  opacity: 1;
  margin: 5px auto;
}

#main-nav {
  background: var(--color-sidebar);
  border-top: 1px solid #d5d5d5;
  color: white;
  font-family: "Source Sans Pro", sans-serif;
  transition: all 0.25s linear;
  transform-origin: 0 50%; /* Set the transformed position of sidebar to center left side. */
}

#main-nav.active {
  width: 0px;
  overflow: hidden;
  /* transform: rotateY(150deg);  */
}

.navbar-btn {
  transition: margin-left 600ms ease;
}

.navbar-btn.active {
  margin-left: -190px;
  transition: all 0.25s linear;
}

.navbar-btn:focus {
  outline: none;
}

.navbar-btn.active:focus {
  outline: none;
}

.dash-content.active {
  margin-left: -230px;
}

a[data-toggle="collapse"] {
  position: relative;
}

.dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}

#main-nav .sidebar-header {
  padding: 20px;
  padding-bottom: 0px;
}

#main-nav ul.components {
  list-style: none;
  padding-right: 10px;
  padding-left: 3px;
  margin-right: 0;
  margin-top: 10px;
}

#main-nav ul p {
  color: white;
  padding: 10px;
}

#main-nav ul li a {
  font-size: 14px;
  line-height: 45px;
  padding-left: 20px;
  margin-bottom: 5px;
  text-align: left;
  padding-right: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  border-left: 4px solid transparent;
}

#main-nav ul li a svg {
  fill: #000;
}

#main-nav ul li a a {
  padding-left: 10px;
  text-align: left;
  padding-right: 10px;
}

#main-nav ul li a i {
  margin-right: 25px;
  font-size: 20px;
}

#main-nav ul li a:hover {
  text-decoration: none;
  background: none;
  font-weight: 600;
}

#main-nav ul li a.is-selected {
  color: var(--color-accent);
  background: none;
  font-weight: 600;
  border-left: 4px solid var(--color-accent);
  /* margin-left: -3px; */
  border-radius: 0;
}

#main-nav ul li a.is-selected svg {
  fill: var(--color-accent);
}

.help-section {
  bottom: 2px;
  position: absolute;
  width: 230px;
}

.help-section ul {
  padding-left: 15px !important;
}

.help-section a {
  text-decoration: none;
  line-height: 5px;
  border: none;
  color: #f0f0f0;
  width: 35px !important;
  padding-right: 3px !important;
  padding-left: 3px !important;
  z-index: 200;
}

.help-section a i {
  font-size: 17px;
  opacity: 0.7;
}

.help-section a:hover {
  background: none !important;
  border: none !important;
}

.help-section a:hover i {
  opacity: 1;
}

.help-section a.is-selected {
  color: #000 !important;
  background: none !important;
  border: none !important;
}

.list-unstyled {
  list-style: none;
  border-bottom: none;
}

.list-unstyled.components li a {
  -webkit-user-drag: none;
}

.collapse:not(.show) {
  display: none;
}

.collapse.show {
  display: block;
}

.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}
@media (prefers-reduced-motion: reduce) {
  .collapsing {
    -webkit-transition: none;
    -o-transition: none;
    transition: none;
  }
}

.nav {
  padding: 0px 0px;
  /* position: fixed; */
  width: 240px;
  min-height: 100vh;
  color: var(--color-subtle);
  visibility: visible;
  left: 0;
  z-index: 1;
  align-items: stretch;
  /* display: flex; */
  transition: 0.5s;
}

@media screen and (max-height: 500px) {
  #main-nav {
    padding-top: 15px;
  }
  #main-nav a {
    font-size: 13px;
  }
}

.nav.is-shown {
  visibility: visible;
  opacity: 1;
}

.nav-header {
  position: relative;
  padding: 10px 10px;
  margin-top: 10px;
  margin-bottom: 30px;
}

.nav-title strong {
  color: var(--color-light-green);
  opacity: 0.8;
  transition: color 0.1s ease-in;
}

.nav-title strong:hover {
  color: linear-gradient(90deg, rgba(37, 129, 147, 1) 0%, rgba(52, 207, 196, 1) 51%);
}

.nav-header-icon {
  position: absolute;
  width: 165px;
  height: 70px;
  top: 1.3rem;
  right: 1.8rem;
}

.nav-item {
  padding: 0.5em 0;
  vertical-align: middle;
  width: 240px !important;
}

.nav-icon {
  width: 30px;
  height: 30px;
  margin-right: 27px;
  padding-bottom: 1px;
  padding-top: 1px;
  margin-left: -22px;
  margin-top: 10px;
  margin-bottom: 10px;
  vertical-align: middle;
}

.nav-icon.logo {
  width: 45px;
  height: 45px;
  margin-right: 24px;
  margin-left: 15px;
  margin-bottom: 75px;
  vertical-align: middle;
}

.nav-video {
  width: 18px;
  height: 21px;
  vertical-align: sub;
  text-decoration: none;
}

.nav-category {
  margin: 0.2em 0;
  padding-left: 2rem;
  font-size: 11px;
  font-weight: normal;
  text-transform: uppercase;
}

.nav-button {
  display: block;
  width: 100%;
  padding: 0.5rem;
  padding-left: calc(5rem + 5px + 0.5rem); /* padding + icon + magic */
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  line-height: 2;
  text-align: left;
  font-size: 16px;
  color: white;
  border: none;
  background-color: transparent;
  outline: none;
  opacity: 0.8;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  background-position: 22px center;
}

.nav-button:hover,
.nav-button:focus:not(.is-selected) {
  background-color: hsla(0, 0%, 0%, 0.1);
  color: white;
  opacity: 1;
}

.nav-button.is-selected {
  background-color: var(--color-accent);
}

.nav-button.is-selected,
.nav-button.is-selected em {
  color: white;
  font-weight: 500;
  opacity: 1;
}

.nav-button.is-selected:focus {
  opacity: 1;
}

.nav-button em {
  font-style: normal;
  font-weight: 600;
  color: var(--color-strong);
  pointer-events: none; /* makes it invisible to clicks */
}

.nav-footer {
  margin-top: 1rem;
  padding: 2rem;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.nav-footer-icon {
  width: calc(770px / 6.5);
  height: calc(88px / 6.5);
}

.nav-footer a {
  outline: none;
}

.nav-footer-button {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0.75rem;
  line-height: 2;
  text-align: left;
  font: inherit;
  font-size: 15px;
  color: inherit;
  border: none;
  background-color: transparent;
  cursor: default;
  outline: none;
  text-align: center;
}

.nav-footer-button:focus {
  color: var(--color-strong);
}

.nav-footer-logo {
  color: hsl(0, 0%, 66%);
}

.nav-footer-logo:focus {
  color: hsl(0, 0%, 33%);
}

/* Remove border on the logo */
.nav-footer-logo.nav-footer-logo {
  border-bottom: none;
}

.nav-center-logo-image {
  display: block;
  width: 100%;
  padding: 0px 25px;
}
`;var U,D,E;class Mt extends b{constructor(e={}){super();g(this,"initialize",!0);g(this,"show",()=>{x(this,U,!1),this.nav&&(this.nav.classList.remove("active"),this.toggle.classList.remove("active"),this.style.display="block")});v(this,U,!1);g(this,"hide",e=>{x(this,U,!0),this.nav&&(this.nav.classList.add("active"),this.toggle.classList.add("active"),e&&(this.style.display="none"))});g(this,"onClick",()=>{});g(this,"selectItem",e=>{x(this,E,e.split("/")[0]||"/"),(this.shadowRoot??this).querySelectorAll("a").forEach(o=>o.classList.remove("is-selected"));const s=(this.shadowRoot??this).querySelector(`a[data-id="${m(this,E)}"]`);s&&s.classList.add("is-selected")});v(this,D,e=>{if(!this.pages[e])throw new Error(`No page found for key ${e}`);this.selectItem(e),this.onClick(e,this.pages[e])});v(this,E,"");g(this,"select",e=>{var s;const i=(s=this.pages)==null?void 0:s[e];i&&m(this,D).call(this,e,i)});this.pages=e.pages,this.name=e.name??"",this.logo=e.logo,this.subtitle=e.subtitle,this.renderName=e.renderName??!0}static get styles(){return ce}static get properties(){return{pages:{type:Object,reflect:!1},name:{type:String,reflect:!0},logo:{type:String,reflect:!0},subtitle:{type:String,reflect:!0},renderName:{type:Boolean,reflect:!0}}}attributeChangedCallback(...e){const i=["pages","name","subtitle","renderName"];super.attributeChangedCallback(...e),i.includes(e[0])&&this.requestUpdate()}updated(){this.nav=(this.shadowRoot??this).querySelector("#main-nav"),this.subtitleElement=(this.shadowRoot??this).querySelector("#subtitle");const e=this.toggle=(this.shadowRoot??this).querySelector("#sidebarCollapse");e.onclick=()=>{this.nav.classList.toggle("active"),e.classList.toggle("active")};let i=m(this,E)?(this.shadowRoot??this).querySelector(`ul[data-id='${m(this,E)}']`):(this.shadowRoot??this).querySelector("ul").children[0];this.initialize&&i?i.click():m(this,E)&&this.selectItem(m(this,E)),m(this,U)&&this.hide(!0)}render(){const e=this.name&&this.renderName,i=this.logo&&!e;return console.log("hasName",e,this.renderName),p`
    <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="main-nav" class="nav js-nav">
        <div id="nav-items" class="nav-item u-category-windows">
          <!-- Sidebar Header -->
          <div class="sidebar-header">
              ${i?p`
                <img
                  id="button-soda-big-icon"
                  class="nav-center-logo-image"
                  src="${this.logo}"
                />
              `:""}
                ${e?p`<h1 style="margin: 0;">${this.name}</h1>`:""}
                ${this.subtitle?p`<span id="subtitle" style="font-size: 14px; ${i?"padding-top: 15px; text-align: center; width: 100%; display: block;":""}">${this.subtitle}</span>`:""}
            </div>
            <!-- Sidebar Links -->
            <ul class="list-unstyled components">
              ${Object.entries(this.pages).map(([s,o])=>{const r=o.info??{};let c=r.label??s;const a=r.icon??"";return p`<li @click="${()=>m(this,D).call(this,s)}">
                  <a data-id="${s}" href="#">
                    ${a}
                    ${c}
                  </a>
                </li>`})}
            </ul>
            <div>
            ${!i&&this.logo?p`
            <img
              id="button-soda-big-icon"
              class="nav-center-logo-image"
              style="padding:0px 40px;"
              src="${this.logo}"
            />
          `:""}
            </div>
          </div>
        </div>
      </nav>
    `}}U=new WeakMap,D=new WeakMap,E=new WeakMap;customElements.get("hypergamma-sidebar")||customElements.define("hypergamma-sidebar",Mt);const de=k`
    :host {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
    }

    hypergamma-main {
        background: #fff;
        border-top: 1px solid #c3c3c3;
    }
`;var T,$,Q,X,_,G;class Lt extends b{constructor(e={}){super();v(this,Q);g(this,"main");g(this,"sidebar");g(this,"pagesById",{});v(this,T,void 0);v(this,$,void 0);v(this,_,e=>{const i=this.getPage(this.pagesById[e]);if(x(this,$,e),i){const{id:s,label:o}=i.info;history.pushState({page:s,label:o},o,`?page=${s}`)}});g(this,"addPage",(e,i)=>{let[s,o]=i;const r={...o.info};r.id?s=r.id:o.info.id=s;const c=r.pages;if(delete r.pages,o instanceof HTMLElement&&(e[s]=o),c){const a=Object.values(c);Object.entries(c).forEach(([l,A],h)=>{A.info.base=s,A.info.previous=a[h-1],A.info.next=a[h+1],A.info.id=`${s}/${l}`,A.info.parent=o}),Object.entries(c).forEach(l=>this.addPage(e,l))}return e});v(this,G,!0);this.main=new Ot,this.main.classList.add("dash-app"),this.sidebar=new Mt,this.sidebar.onClick=(s,o)=>this.setAttribute("activePage",o.info.id),this.pages=e.pages??{},this.name=e.name,this.logo=e.logo,this.renderNameInSidebar=e.renderNameInSidebar??!0,e.activePage&&this.setAttribute("activePage",e.activePage);const i=window.history.pushState;window.history.pushState=function(s){return typeof window.onpushstate=="function"&&window.onpushstate({state:s}),i.apply(window.history,arguments)},window.onpushstate=window.onpopstate=s=>{s.state&&(document.title=`${s.state.label} - ${this.name}`,this.setMain(this.pagesById[s.state.page],void 0,!1))},K(this,Q,X).call(this)}static get styles(){return de}static get properties(){return{renderNameInSidebar:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},logo:{type:String,reflect:!0},subtitle:{type:String,reflect:!0},activePage:{type:String,reflect:!0}}}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(...arguments),this.sidebar&&(e==="name"||e==="logo"||e==="subtitle"))this.sidebar[e]=s;else if(e==="renderNameInSidebar")this.sidebar.renderName=s==="true"||s===!0;else if(e==="pages")K(this,Q,X).call(this,s);else if(e.toLowerCase()==="activepage"){this.sidebar.selectItem(s),this.sidebar.initialize=!1,m(this,_).call(this,s);return}}getPage(e){if(!e)throw new Error("Page not found...");const i=e.page??e;if(i instanceof HTMLElement)return i;if(typeof i=="object")return this.getPage(Object.values(i)[0])}setMain(e,i={}){e.info;const s=m(this,T);if(s===e)return;s&&(s.info.parent&&s.info.section&&s.save(),s.active=!1),x(this,T,e);const o={...i};s&&(o.globalState=s.info.globalState),e.set(o),this.main.set({page:e})}updated(){const e=(this.shadowRoot??this).querySelector("div");e.style.height="100vh",m(this,G)&&(x(this,G,!1),K(this,Q,X).call(this))}render(){return this.style.width="100%",this.style.height="100%",this.style.display="grid",this.style.gridTemplateColumns="fit-content(0px) 1fr",this.style.position="relative",this.name&&(this.sidebar.name=this.name),this.logo&&(this.sidebar.logo=this.logo),"renderNameInSidebar"in this&&(this.sidebar.renderName=this.renderNameInSidebar),p`
        <div>
          ${this.sidebar}
        </div>
        ${this.main}
    `}}T=new WeakMap,$=new WeakMap,Q=new WeakSet,X=function(e=this.pages){const i=new URL(window.location.href);let s=i.pathname.slice(1);s=new URLSearchParams(i.search).get("page"),s||(s=this.activePage),this.main.onTransition=o=>{if(typeof o=="number"){const r=m(this,T).info,c=Math.sign(o);if(c===1)return this.setAttribute("activePage",r.next.info.id);if(c===-1)return this.setAttribute("activePage",(r.previous??r.parent).info.id)}o in this.pages?this.sidebar.select(o):this.setAttribute("activePage",o)},this.pagesById={},Object.entries(e).forEach(o=>this.addPage(this.pagesById,o)),this.sidebar.pages=e,console.log("active",s),s&&this.setAttribute("activePage",s)},_=new WeakMap,G=new WeakMap;customElements.get("hypergamma-dashboard")||customElements.define("hypergamma-dashboard",Lt);class Nt extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Training</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${()=>this.onTransition("plus")}>Back</hypergamma-button>
    `}}customElements.get("hypergamma-training-page")||customElements.define("hypergamma-training-page",Nt);class jt extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Focus</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${()=>this.onTransition("plus")}>Back</hypergamma-button>
    `}}customElements.get("hypergamma-focus-page")||customElements.define("hypergamma-focus-page",jt);class Yt extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Peformance</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${()=>this.onTransition("plus")}>Back</hypergamma-button>
    `}}customElements.get("hypergamma-performance-page")||customElements.define("hypergamma-performance-page",Yt);class Ht extends y{constructor(...t){super(...t)}render(){return p`
      <h1>Meditation</h1>
      <p>Coming soon...</p>
      <br>
      <hypergamma-button @click=${()=>this.onTransition("plus")}>Back</hypergamma-button>
    `}}customElements.get("hypergamma-meditation-page")||customElements.define("hypergamma-meditation-page",Ht);const pe="data:image/png;base64,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",ge="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABBCAYAAABhNaJ7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAMFSURBVHgB7Zu/axRBFMe/M3e5xiDoH6BBrBRMoShYyB2KlXYWohYe6l8QsDRa6B+goKCiBAuLWAgKWggndqIR0UqDhqDYWmihl9w8Z2Iid9lhZ2/f7sTLvQ8ce8w+vvOYfT92bvcAQRAEYXhRKIDxM7SXFJpWbbsiVLvP2fFFbTALjbtvb6lXa6GXBnsBnLMV4KYBtlmxUY+m9Rk/7HHOaJwLOV20XogqmFQNJpTCuHXzDhncpwoWu8+rDqpa4YT92rRXbsIej8fUC/oPJhXCQXekDq68mcJn6yL1WpDadxrzSyFtcCi2XggNJpqwyV4JzHiddSh6OYZPzsbZxtYLzgcm9orpCv11bGXs+kNquc8/o4vKOBtnG1svRBEpkIRQz2QXQS8EewG0L0gz2sXQC1FKBPic40QARy+ELACY+JzTGe1i6IXgR4BJjvmal88uhl4ISQEwkRSQLpAcUwUvgJIUyGaXB0kBMNGeduS9ihnbVtF6IcqpARntYuiFiJ4CZ492bWs90BDsBerok4G7EfKFrE3ZBnKyLrbDtx+r58jJukgBDgO7F3hyL73gFT1vHsreDtdREv/3dnj52OnkL3w9c1TQyjJvHspJgeWxw838ha+bZ1OUad48SBEEk6y3rpON/gripZZqpOkNRAp0oxgFUZcYZdEWYGUsdEdoC2gr7xx5KKUN6hS7Cy/SC+PlA56Cl6LHRX4QAZN+UyC2XohSb4RCdjH0QsivwmCiMzrMejwuKZDNLg/ltMGCH45y9EJIFwATSQG5EUqODX0XGKonQ1IEfe3IJLe8nDbI0QvBfl3+wS5q2xwd2VpDbc+MWvDZvN5NI/NttElh4dg7VYupF4L/rrDBrAvHL22cdI6tPu/GvrZxytlY2w+x9ULwU0Dhqg3RGyBMfvuN5qOd1BOcdkxbZ7fAPfglXIutF4K9AL86mN6gsdE63bRO709o0tIfHj6Sxnkbb9Ox9UIU8p+hpztos3VsrAOMmlWvsGsFY8d/6irmjrxX39dCTxAEQRD8/AGgBO2QRI1L4wAAAABJRU5ErkJggg==",ue="data:image/png;base64,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",me="data:image/png;base64,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",Ae="data:image/png;base64,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",fe="data:image/png;base64,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",ve={home:pe,plus:ge,devices:ue,analytics:me,reports:Ae},P={};for(const[n,t]of Object.entries(ve)){const e=document.createElement("img");e.src=t,P[n]=e}let N=document.querySelector("hypergamma-dashboard");N||(N=new Lt);N.logo=fe;N.name="HyperGamma";N.renderNameInSidebar=!1;const be={"/":new Pt({label:"Home",icon:P.home}),analytics:new Tt({label:"Analytics",icon:P.analytics}),plus:new It({label:"Hyper+",icon:P.plus,pages:{focus:new jt({label:"Focus"}),training:new Nt({label:"Training"}),performance:new Yt({label:"Performance"}),meditation:new Ht({label:"Meditation"})}}),devices:new Ut({label:"Devices",icon:P.devices}),reports:new Qt({label:"Reports",icon:P.reports})};N.pages=be;
