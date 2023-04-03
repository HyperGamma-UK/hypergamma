var Lt=Object.defineProperty;var Mt=(n,t,e)=>t in n?Lt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e;var p=(n,t,e)=>(Mt(n,typeof t!="symbol"?t+"":t,e),e),tt=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var g=(n,t,e)=>(tt(n,t,"read from private field"),e?e.call(n):t.get(n)),b=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},x=(n,t,e,i)=>(tt(n,t,"write to private field"),i?i.call(n,e):t.set(n,e),e);var W=(n,t,e)=>(tt(n,t,"access private method"),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F=window,ht=F.ShadowRoot&&(F.ShadyCSS===void 0||F.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),ct=new WeakMap;let wt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ht&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ct.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ct.set(e,t))}return t}toString(){return this.cssText}};const zt=n=>new wt(typeof n=="string"?n:n+"",void 0,dt),E=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1],n[0]);return new wt(e,n,dt)},It=(n,t)=>{ht?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),s=F.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)})},pt=ht?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return zt(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var et;const Y=window,ut=Y.trustedTypes,jt=ut?ut.emptyScript:"",gt=Y.reactiveElementPolyfillSupport,at={toAttribute(n,t){switch(t){case Boolean:n=n?jt:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},At=(n,t)=>t!==n&&(t==t||n==n),it={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:At};let C=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const s=this._$Ep(i,e);s!==void 0&&(this._$Ev.set(s,i),t.push(s))}),t}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const o=this[t];this[e]=s,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||it}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const s of i)this.createProperty(s,e[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(pt(s))}else t!==void 0&&e.push(pt(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return It(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=it){var s;const o=this.constructor._$Ep(t,i);if(o!==void 0&&i.reflect===!0){const r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:at).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,o=s._$Ev.get(t);if(o!==void 0&&this._$El!==o){const r=s.getPropertyOptions(o),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:at;this._$El=o,this[o]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||At)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,o)=>this[o]=s),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)}),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};C.finalized=!0,C.elementProperties=new Map,C.elementStyles=[],C.shadowRootOptions={mode:"open"},gt==null||gt({ReactiveElement:C}),((et=Y.reactiveElementVersions)!==null&&et!==void 0?et:Y.reactiveElementVersions=[]).push("1.6.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var st;const Z=window,R=Z.trustedTypes,mt=R?R.createPolicy("lit-html",{createHTML:n=>n}):void 0,lt="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,St="?"+_,Bt=`<${St}>`,U=document,M=()=>U.createComment(""),z=n=>n===null||typeof n!="object"&&typeof n!="function",Et=Array.isArray,Dt=n=>Et(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",nt=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vt=/-->/g,ft=/>/g,w=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),bt=/'/g,yt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),m=qt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),$t=new WeakMap,k=U.createTreeWalker(U,129,null,!1),Vt=(n,t)=>{const e=n.length-1,i=[];let s,o=t===2?"<svg>":"",r=L;for(let a=0;a<e;a++){const l=n[a];let v,h,c=-1,f=0;for(;f<l.length&&(r.lastIndex=f,h=r.exec(l),h!==null);)f=r.lastIndex,r===L?h[1]==="!--"?r=vt:h[1]!==void 0?r=ft:h[2]!==void 0?(Ct.test(h[2])&&(s=RegExp("</"+h[2],"g")),r=w):h[3]!==void 0&&(r=w):r===w?h[0]===">"?(r=s??L,c=-1):h[1]===void 0?c=-2:(c=r.lastIndex-h[2].length,v=h[1],r=h[3]===void 0?w:h[3]==='"'?yt:bt):r===yt||r===bt?r=w:r===vt||r===ft?r=L:(r=w,s=void 0);const q=r===w&&n[a+1].startsWith("/>")?" ":"";o+=r===L?l+Bt:c>=0?(i.push(v),l.slice(0,c)+lt+l.slice(c)+_+q):l+_+(c===-2?(i.push(void 0),a):q)}const d=o+(n[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return[mt!==void 0?mt.createHTML(d):d,i]};class I{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,r=0;const d=t.length-1,a=this.parts,[l,v]=Vt(t,e);if(this.el=I.createElement(l,i),k.currentNode=this.el.content,e===2){const h=this.el.content,c=h.firstChild;c.remove(),h.append(...c.childNodes)}for(;(s=k.nextNode())!==null&&a.length<d;){if(s.nodeType===1){if(s.hasAttributes()){const h=[];for(const c of s.getAttributeNames())if(c.endsWith(lt)||c.startsWith(_)){const f=v[r++];if(h.push(c),f!==void 0){const q=s.getAttribute(f.toLowerCase()+lt).split(_),V=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:V[2],strings:q,ctor:V[1]==="."?Ft:V[1]==="?"?Yt:V[1]==="@"?Zt:X})}else a.push({type:6,index:o})}for(const c of h)s.removeAttribute(c)}if(Ct.test(s.tagName)){const h=s.textContent.split(_),c=h.length-1;if(c>0){s.textContent=R?R.emptyScript:"";for(let f=0;f<c;f++)s.append(h[f],M()),k.nextNode(),a.push({type:2,index:++o});s.append(h[c],M())}}}else if(s.nodeType===8)if(s.data===St)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:o}),h+=_.length-1}o++}}static createElement(t,e){const i=U.createElement("template");return i.innerHTML=t,i}}function H(n,t,e=n,i){var s,o,r,d;if(t===S)return t;let a=i!==void 0?(s=e._$Co)===null||s===void 0?void 0:s[i]:e._$Cl;const l=z(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((o=a==null?void 0:a._$AO)===null||o===void 0||o.call(a,!1),l===void 0?a=void 0:(a=new l(n),a._$AT(n,e,i)),i!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=H(n,a._$AS(n,t.values),a,i)),t}class Wt{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,o=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:U).importNode(i,!0);k.currentNode=o;let r=k.nextNode(),d=0,a=0,l=s[0];for(;l!==void 0;){if(d===l.index){let v;l.type===2?v=new D(r,r.nextSibling,this,t):l.type===1?v=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(v=new Jt(r,this,t)),this.u.push(v),l=s[++a]}d!==(l==null?void 0:l.index)&&(r=k.nextNode(),d++)}return o}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var o;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=(o=s==null?void 0:s.isConnected)===null||o===void 0||o}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),z(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this.g(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}g(t){this._$AH!==u&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,o=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(s.h,this.options)),s);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===o)this._$AH.p(i);else{const r=new Wt(o,this),d=r.v(this.options);r.p(i),this.T(d),this._$AH=r}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new I(t)),e}k(t){Et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new D(this.S(M()),this.S(M()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class X{constructor(t,e,i,s,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const o=this.strings;let r=!1;if(o===void 0)t=H(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const d=t;let a,l;for(t=o[0],a=0;a<o.length-1;a++)l=H(this,d[i+a],e,a),l===S&&(l=this._$AH[a]),r||(r=!z(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+o[a+1]),this._$AH[a]=l}r&&!s&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ft extends X{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const Kt=R?R.emptyScript:"";class Yt extends X{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,Kt):this.element.removeAttribute(this.name)}}class Zt extends X{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){var i;if((t=(i=H(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const s=this._$AH,o=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==u&&(s===u||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const xt=Z.litHtmlPolyfillSupport;xt==null||xt(I,D),((st=Z.litHtmlVersions)!==null&&st!==void 0?st:Z.litHtmlVersions=[]).push("2.7.0");const Gt=(n,t,e)=>{var i,s;const o=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=o._$litPart$;if(r===void 0){const d=(s=e==null?void 0:e.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new D(t.insertBefore(M(),d),d,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ot,rt;class y extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Gt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}}y.finalized=!0,y._$litElement$=!0,(ot=globalThis.litElementHydrateSupport)===null||ot===void 0||ot.call(globalThis,{LitElement:y});const _t=globalThis.litElementPolyfillSupport;_t==null||_t({LitElement:y});((rt=globalThis.litElementVersions)!==null&&rt!==void 0?rt:globalThis.litElementVersions=[]).push("3.3.0");class Qt extends y{static get styles(){return E`
      :host {
        background: white;
        padding: 10px 25px;
        border-top: 1px solid #c3c3c3;
        width: 100%;
      }
    `}constructor(){super()}render(){return m`
        <slot></slot>
    `}}customElements.get("hypergamma-footer")||customElements.define("hypergamma-footer",Qt);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Xt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},te=n=>(...t)=>({_$litDirective$:n,values:t});let ee=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=te(class extends ee{constructor(n){var t;if(super(n),n.type!==Xt.ATTRIBUTE||n.name!=="style"||((t=n.strings)===null||t===void 0?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const i=n[e];return i==null?t:t+`${e=e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`},"")}update(n,[t]){const{style:e}=n.element;if(this.vt===void 0){this.vt=new Set;for(const i in t)this.vt.add(i);return this.render(t)}this.vt.forEach(i=>{t[i]==null&&(this.vt.delete(i),i.includes("-")?e.removeProperty(i):e[i]="")});for(const i in t){const s=t[i];s!=null&&(this.vt.add(i),i.includes("-")?e.setProperty(i,s):e[i]=s)}return S}});class se extends y{constructor({primary:t,label:e,backgroundColor:i=null,size:s,onClick:o}={}){super(),this.label=e,this.primary=t,this.backgroundColor=i,this.size=s,this.onClick=o}static get styles(){return E`
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
`}static get properties(){return{primary:{type:Boolean},backgroundColor:{type:String},size:{type:String},onClick:{type:Function},label:{type:String}}}render(){const t=this.primary?"storybook-button--primary":"storybook-button--secondary";return m`
      <button
        type="button"
        class=${["storybook-button",`storybook-button--${this.size||"medium"}`,t].join(" ")}
        style=${ie({backgroundColor:this.backgroundColor})}
        @click=${this.onClick}
      >
        <slot>${this.label??""}</slot>
      </button>
    `}}customElements.get("hypergamma-button")||customElements.define("hypergamma-button",se);class O extends y{constructor(e={}){super();p(this,"info",{globalState:{}});p(this,"query",e=>(this.shadowRoot??this).querySelector(e));p(this,"onSet",()=>{});p(this,"set",e=>{e&&(Object.assign(this.info,e),this.onSet(),this.requestUpdate())});p(this,"onTransition",()=>{});Object.assign(this.info,e)}static get styles(){return E`
      section {
        width: 100%;
        height: 100%;
      }
    `}render(){return m`
    <section><slot></slot></section>
    `}}customElements.get("hypergamma-page")||customElements.define("hypergamma-page",O);class kt extends O{constructor(...t){super(...t)}render(){return m`
    <h1>Home</h1>
    <p>Coming soon...</p>
    `}}customElements.get("hypergamma-home-page")||customElements.define("hypergamma-home-page",kt);class Pt extends O{constructor(...t){super(...t)}render(){return m`
      <h1>Hyper+</h1>
      <div>
        <hypergamma-button>Focus</hypergamma-button>
        <hypergamma-button>Training</hypergamma-button>
        <hypergamma-button>Peformance</hypergamma-button>
        <hypergamma-button>Meditation</hypergamma-button>
    `}}customElements.get("hypergamma-hyperplus-page")||customElements.define("hypergamma-hyperplus-page",Pt);class Nt extends O{static get styles(){return E`
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
    `}constructor(...t){super(...t)}render(){return m`
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



    `}}customElements.get("hypergamma-devices-page")||customElements.define("hypergamma-devices-page",Nt);class Tt extends O{constructor(...t){super(...t)}render(){return m`
      <h1>Analytics</h1>
    `}}customElements.get("hypergamma-analytics-page")||customElements.define("hypergamma-analytics-page",Tt);class Rt extends O{constructor(...t){super(...t)}render(){return m`
    <h1>Reports</h1>
    <p>Coming soon...</p>
    `}}customElements.get("hypergamma-reports-page")||customElements.define("hypergamma-reports-page",Rt);const ne=E`
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
`;var A;class Ut extends y{constructor({toRender:e}={}){super();p(this,"history",[]);p(this,"onTransition",()=>{});b(this,A,[]);this.toRender=e}static get styles(){return ne}static get properties(){return{toRender:{type:Object,reflect:!1}}}attributeChangedCallback(...e){const i=["toRender"];super.attributeChangedCallback(...e),i.includes(e[0])&&this.requestUpdate()}set(e){let i=e.page??e;typeof i=="function"&&(i=new i),i.onTransition=this.onTransition,this.content?this.toRender=e.page?e:{page:i}:g(this,A).push(i)}updated(){this.content=(this.shadowRoot??this).querySelector("#content"),g(this,A).length&&(g(this,A).forEach(e=>this.set(e)),x(this,A,[]))}render(){let{page:e=""}=this.toRender??{};return m`
      <main id="content">
        <section>
          ${e}
        </section>
      </main>
    `}}A=new WeakMap;customElements.get("hypergamma-main")||customElements.define("hypergamma-main",Ut);const oe=E`
 
a {
  text-decoration: none;
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
  color: black;
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
  color: #000;
  padding: 10px;
}

#main-nav ul li a {
  font-size: 14px;
  display: block;
  line-height: 45px;
  padding-left: 20px;
  margin-bottom: 5px;
  text-align: left;
  padding-right: 10px;
  color: #000;
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
  color: var(--color-light-green);
  background: none;
  font-weight: 600;
  border-left: 4px solid var(--color-light-green);
  /* margin-left: -3px; */
  border-radius: 0;
}

#main-nav ul li a.is-selected svg {
  fill: var(--color-light-green);
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
`;var P,j,$;class Ht extends y{constructor(e={}){super();p(this,"initialize",!0);p(this,"show",()=>{x(this,P,!1),this.nav&&(this.nav.classList.remove("active"),this.toggle.classList.remove("active"),this.style.display="block")});b(this,P,!1);p(this,"hide",e=>{x(this,P,!0),this.nav&&(this.nav.classList.add("active"),this.toggle.classList.add("active"),e&&(this.style.display="none"))});p(this,"onClick",()=>{});p(this,"selectItem",e=>{x(this,$,e.split("/")[0]||"/"),(this.shadowRoot??this).querySelectorAll("a").forEach(o=>o.classList.remove("is-selected"));const s=(this.shadowRoot??this).querySelector(`a[data-id="${g(this,$)}"]`);s&&s.classList.add("is-selected")});b(this,j,e=>{if(!this.pages[e])throw new Error(`No page found for key ${e}`);this.selectItem(e),this.onClick(e,this.pages[e])});b(this,$,"");p(this,"select",e=>{var s;const i=(s=this.pages)==null?void 0:s[e];i&&g(this,j).call(this,e,i)});this.pages=e.pages,this.name=e.name??"",this.logo=e.logo,this.subtitle=e.subtitle??"0.0.1",this.renderName=e.renderName??!0}static get styles(){return oe}static get properties(){return{pages:{type:Object,reflect:!1},name:{type:String,reflect:!0},logo:{type:String,reflect:!0},subtitle:{type:String,reflect:!0},renderName:{type:Boolean,reflect:!0}}}attributeChangedCallback(...e){const i=["pages","name","subtitle","renderName"];super.attributeChangedCallback(...e),i.includes(e[0])&&this.requestUpdate()}updated(){this.nav=(this.shadowRoot??this).querySelector("#main-nav"),this.subtitleElement=(this.shadowRoot??this).querySelector("#subtitle");const e=this.toggle=(this.shadowRoot??this).querySelector("#sidebarCollapse");e.onclick=()=>{this.nav.classList.toggle("active"),e.classList.toggle("active")};let i=g(this,$)?(this.shadowRoot??this).querySelector(`ul[data-id='${g(this,$)}']`):(this.shadowRoot??this).querySelector("ul").children[0];this.initialize&&i?i.click():g(this,$)&&this.selectItem(g(this,$)),g(this,P)&&this.hide(!0)}render(){const e=this.name&&this.renderName,i=this.logo&&!e;return console.log("hasName",e,this.renderName),m`
    <button type="button" id="sidebarCollapse" class="navbar-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="main-nav" class="nav js-nav">
        <div id="nav-items" class="nav-item u-category-windows">
          <!-- Sidebar Header -->
          <div class="sidebar-header">
              ${i?m`
                <img
                  id="button-soda-big-icon"
                  class="nav-center-logo-image"
                  src="${this.logo}"
                />
              `:""}
                ${e?m`<h1 style="margin: 0;">${this.name}</h1>`:""}
                ${this.subtitle?m`<span id="subtitle" style="font-size: 14px; ${i?"padding-top: 15px; text-align: center; width: 100%; display: block;":""}">${this.subtitle}</span>`:""}
            </div>
            <!-- Sidebar Links -->
            <ul class="list-unstyled components">
              ${Object.entries(this.pages).map(([s,o])=>{const r=o.info??{};let d=r.label??s;const a=r.icon??"",l=document.createElement("a");return l.setAttribute("data-id",s),l.href="#",l.innerHTML=`
                  ${a}
                  ${d}
                `,m`<li @click="${()=>g(this,j).call(this,s)}">${l}</li>`})}
            </ul>
            <div>
            ${!i&&this.logo?m`
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
    `}}P=new WeakMap,j=new WeakMap,$=new WeakMap;customElements.get("hypergamma-sidebar")||customElements.define("hypergamma-sidebar",Ht);const re=E`
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
`;var N,G,T,K,Q,B;class Ot extends y{constructor(e={}){super();b(this,T);p(this,"main");p(this,"sidebar");p(this,"pagesById",{});b(this,N,void 0);b(this,G,void 0);b(this,Q,e=>{const i=this.getPage(this.pagesById[e]);if(x(this,G,e),i){const{id:s,label:o}=i.info;history.pushState({page:s,label:o},o,`?page=${s}`)}});p(this,"addPage",(e,i)=>{let[s,o]=i;const r={...o.info};r.id?s=r.id:o.info.id=s;const d=r.pages;if(delete r.pages,o instanceof HTMLElement&&(e[s]=o),d){const a=Object.values(d);Object.entries(d).forEach(([l,v],h)=>{v.info.base=s,v.info.previous=a[h-1],v.info.next=a[h+1],v.info.id=`${s}/${l}`,v.info.parent=o}),Object.entries(d).forEach(l=>this.addPage(e,l))}return e});b(this,B,!0);this.main=new Ut,this.main.classList.add("dash-app"),this.sidebar=new Ht,this.sidebar.onClick=(s,o)=>this.setAttribute("activePage",o.info.id),this.pages=e.pages??{},this.name=e.name,this.logo=e.logo,this.renderNameInSidebar=e.renderNameInSidebar??!0,e.activePage&&this.setAttribute("activePage",e.activePage);const i=window.history.pushState;window.history.pushState=function(s){return typeof window.onpushstate=="function"&&window.onpushstate({state:s}),i.apply(window.history,arguments)},window.onpushstate=window.onpopstate=s=>{s.state&&(document.title=`${s.state.label} - ${this.name}`,this.setMain(this.pagesById[s.state.page],void 0,!1))},W(this,T,K).call(this)}static get styles(){return re}static get properties(){return{renderNameInSidebar:{type:Boolean,reflect:!0},name:{type:String,reflect:!0},logo:{type:String,reflect:!0},subtitle:{type:String,reflect:!0},activePage:{type:String,reflect:!0}}}attributeChangedCallback(e,i,s){if(super.attributeChangedCallback(...arguments),this.sidebar&&(e==="name"||e==="logo"||e==="subtitle"))this.sidebar[e]=s;else if(e==="renderNameInSidebar")this.sidebar.renderName=s==="true"||s===!0;else if(e==="pages")W(this,T,K).call(this,s);else if(e.toLowerCase()==="activepage"){this.sidebar.selectItem(s),this.sidebar.initialize=!1,g(this,Q).call(this,s);return}}getPage(e){if(!e)throw new Error("Page not found...");const i=e.page??e;if(i instanceof HTMLElement)return i;if(typeof i=="object")return this.getPage(Object.values(i)[0])}setMain(e,i={}){e.info;const s=g(this,N);if(s===e)return;s&&(s.info.parent&&s.info.section&&s.save(),s.active=!1),x(this,N,e);const o={...i};s&&(o.globalState=s.info.globalState),e.set(o),this.main.set({page:e})}updated(){const e=(this.shadowRoot??this).querySelector("div");e.style.height="100vh",g(this,B)&&(x(this,B,!1),W(this,T,K).call(this))}render(){return this.style.width="100%",this.style.height="100%",this.style.display="grid",this.style.gridTemplateColumns="fit-content(0px) 1fr",this.style.position="relative",this.name&&(this.sidebar.name=this.name),this.logo&&(this.sidebar.logo=this.logo),"renderNameInSidebar"in this&&(this.sidebar.renderName=this.renderNameInSidebar),m`
        <div>
          ${this.sidebar}
        </div>
        ${this.main}
    `}}N=new WeakMap,G=new WeakMap,T=new WeakSet,K=function(e=this.pages){const i=new URL(window.location.href);let s=i.pathname.slice(1);s=new URLSearchParams(i.search).get("page"),s||(s=this.activePage),this.main.onTransition=o=>{if(console.log("transition",o),typeof o=="number"){const r=g(this,N).info,d=Math.sign(o);if(d===1)return this.setAttribute("activePage",r.next.info.id);if(d===-1)return this.setAttribute("activePage",(r.previous??r.parent).info.id)}o in this.pages?this.sidebar.select(o):this.setAttribute("activePage",o)},this.pagesById={},Object.entries(e).forEach(o=>this.addPage(this.pagesById,o)),this.sidebar.pages=e,console.log("active",s),s&&this.setAttribute("activePage",s)},Q=new WeakMap,B=new WeakMap;customElements.get("hypergamma-dashboard")||customElements.define("hypergamma-dashboard",Ot);let J=document.querySelector("hypergamma-dashboard");J||(J=new Ot);J.name="HyperGamma";const ae={"/":new kt({label:"Home"}),analytics:new Tt({label:"Analytics"}),plus:new Pt({label:"Hyper+"}),devices:new Nt({label:"Devices"}),reports:new Rt({label:"Reports"})};J.pages=ae;const le=document.querySelector("hypergamma-dashboard");le.subtitle="Web Version";
