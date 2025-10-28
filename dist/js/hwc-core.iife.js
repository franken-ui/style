var __CORE__=(function(c,Ys,Za){"use strict";function Xa(r){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}return t.default=r,Object.freeze(t)}const Qa=Xa(Ys);const ie=globalThis,se=ie.ShadowRoot&&(ie.ShadyCSS===void 0||ie.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,De=Symbol(),Gs=new WeakMap;let ke=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==De)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(se&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Gs.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Gs.set(e,t))}return t}toString(){return this.cssText}};const Ws=r=>new ke(typeof r=="string"?r:r+"",void 0,De),to=(r,...t)=>{const e=r.length===1?r[0]:t.reduce(((i,s,n)=>i+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1]),r[0]);return new ke(e,r,De)},Js=(r,t)=>{if(se)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=ie.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},Le=se?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ws(e)})(r):r;const{is:eo,defineProperty:io,getOwnPropertyDescriptor:so,getOwnPropertyNames:ro,getOwnPropertySymbols:no,getPrototypeOf:ao}=Object,re=globalThis,Zs=re.trustedTypes,oo=Zs?Zs.emptyScript:"",lo=re.reactiveElementPolyfillSupport,qt=(r,t)=>r,jt={toAttribute(r,t){switch(t){case Boolean:r=r?oo:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},ne=(r,t)=>!eo(r,t),Xs={attribute:!0,type:String,converter:jt,reflect:!1,useDefault:!1,hasChanged:ne};Symbol.metadata??=Symbol("metadata"),re.litPropertyMetadata??=new WeakMap;let mt=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Xs){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&io(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=so(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const o=s?.call(this);n?.call(this,a),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Xs}static _$Ei(){if(this.hasOwnProperty(qt("elementProperties")))return;const t=ao(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(qt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(qt("properties"))){const e=this.properties,i=[...ro(e),...no(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Le(s))}else t!==void 0&&e.push(Le(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Js(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:jt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:jt;this._$Em=s;const o=a.fromAttribute(e,n.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??ne)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},mt[qt("elementProperties")]=new Map,mt[qt("finalized")]=new Map,lo?.({ReactiveElement:mt}),(re.reactiveElementVersions??=[]).push("2.1.1");const Pe=globalThis,ae=Pe.trustedTypes,Qs=ae?ae.createPolicy("lit-html",{createHTML:r=>r}):void 0,Me="$lit$",rt=`lit$${Math.random().toFixed(9).slice(2)}$`,Re="?"+rt,ho=`<${Re}>`,$t=document,Ht=()=>$t.createComment(""),Ut=r=>r===null||typeof r!="object"&&typeof r!="function",qe=Array.isArray,tr=r=>qe(r)||typeof r?.[Symbol.iterator]=="function",je=`[ 	
\f\r]`,Vt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,er=/-->/g,ir=/>/g,vt=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),sr=/'/g,rr=/"/g,nr=/^(?:script|style|textarea|title)$/i,He=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),$=He(1),co=He(2),uo=He(3),K=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),ar=new WeakMap,bt=$t.createTreeWalker($t,129);function or(r,t){if(!qe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Qs!==void 0?Qs.createHTML(t):t}const lr=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=Vt;for(let o=0;o<e;o++){const l=r[o];let h,d,u=-1,f=0;for(;f<l.length&&(a.lastIndex=f,d=a.exec(l),d!==null);)f=a.lastIndex,a===Vt?d[1]==="!--"?a=er:d[1]!==void 0?a=ir:d[2]!==void 0?(nr.test(d[2])&&(s=RegExp("</"+d[2],"g")),a=vt):d[3]!==void 0&&(a=vt):a===vt?d[0]===">"?(a=s??Vt,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,h=d[1],a=d[3]===void 0?vt:d[3]==='"'?rr:sr):a===rr||a===sr?a=vt:a===er||a===ir?a=Vt:(a=vt,s=void 0);const p=a===vt&&r[o+1].startsWith("/>")?" ":"";n+=a===Vt?l+ho:u>=0?(i.push(h),l.slice(0,u)+Me+l.slice(u)+rt+p):l+rt+(u===-2?o:p)}return[or(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Bt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const o=t.length-1,l=this.parts,[h,d]=lr(t,e);if(this.el=Bt.createElement(h,i),bt.currentNode=this.el.content,e===2||e===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=bt.nextNode())!==null&&l.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(Me)){const f=d[a++],p=s.getAttribute(u).split(rt),m=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:m[2],strings:p,ctor:m[1]==="."?cr:m[1]==="?"?ur:m[1]==="@"?dr:Nt}),s.removeAttribute(u)}else u.startsWith(rt)&&(l.push({type:6,index:n}),s.removeAttribute(u));if(nr.test(s.tagName)){const u=s.textContent.split(rt),f=u.length-1;if(f>0){s.textContent=ae?ae.emptyScript:"";for(let p=0;p<f;p++)s.append(u[p],Ht()),bt.nextNode(),l.push({type:2,index:++n});s.append(u[f],Ht())}}}else if(s.nodeType===8)if(s.data===Re)l.push({type:2,index:n});else{let u=-1;for(;(u=s.data.indexOf(rt,u+1))!==-1;)l.push({type:7,index:n}),u+=rt.length-1}n++}}static createElement(t,e){const i=$t.createElement("template");return i.innerHTML=t,i}}function yt(r,t,e=r,i){if(t===K)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=Ut(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=yt(r,s._$AS(r,t.values),s,i)),t}let hr=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??$t).importNode(e,!0);bt.currentNode=s;let n=bt.nextNode(),a=0,o=0,l=i[0];for(;l!==void 0;){if(a===l.index){let h;l.type===2?h=new It(n,n.nextSibling,this,t):l.type===1?h=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(h=new pr(n,this,t)),this._$AV.push(h),l=i[++o]}a!==l?.index&&(n=bt.nextNode(),a++)}return bt.currentNode=$t,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class It{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=yt(this,t,e),Ut(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):tr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&Ut(this._$AH)?this._$AA.nextSibling.data=t:this.T($t.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Bt.createElement(or(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new hr(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=ar.get(t.strings);return e===void 0&&ar.set(t.strings,e=new Bt(t)),e}k(t){qe(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new It(this.O(Ht()),this.O(Ht()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Nt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=yt(this,t,e,0),a=!Ut(t)||t!==this._$AH&&t!==K,a&&(this._$AH=t);else{const o=t;let l,h;for(t=n[0],l=0;l<n.length-1;l++)h=yt(this,o[i+l],e,l),h===K&&(h=this._$AH[l]),a||=!Ut(h)||h!==this._$AH[l],h===E?t=E:t!==E&&(t+=(h??"")+n[l+1]),this._$AH[l]=h}a&&!s&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class cr extends Nt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class ur extends Nt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class dr extends Nt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=yt(this,t,e,0)??E)===K)return;const i=this._$AH,s=t===E&&i!==E||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==E&&(i===E||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class pr{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){yt(this,t)}}const fr={M:Me,P:rt,A:Re,C:1,L:lr,R:hr,D:tr,V:yt,I:It,H:Nt,N:ur,U:dr,B:cr,F:pr},po=Pe.litHtmlPolyfillSupport;po?.(Bt,It),(Pe.litHtmlVersions??=[]).push("3.3.1");const gr=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const n=e?.renderBefore??null;i._$litPart$=s=new It(t.insertBefore(Ht(),n),n,void 0,e??{})}return s._$AI(r),s};const Ue=globalThis;let xt=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=gr(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return K}};xt._$litElement$=!0,xt.finalized=!0,Ue.litElementHydrateSupport?.({LitElement:xt});const fo=Ue.litElementPolyfillSupport;fo?.({LitElement:xt});const go={_$AK:(r,t,e)=>{r._$AK(t,e)},_$AL:r=>r._$AL};(Ue.litElementVersions??=[]).push("4.2.1");const mo=Object.freeze(Object.defineProperty({__proto__:null,CSSResult:ke,LitElement:xt,ReactiveElement:mt,_$LE:go,_$LH:fr,adoptStyles:Js,css:to,defaultConverter:jt,getCompatibleStyle:Le,html:$,isServer:!1,mathml:uo,noChange:K,notEqual:ne,nothing:E,render:gr,supportsAdoptingStyleSheets:se,svg:co,unsafeCSS:Ws},Symbol.toStringTag,{value:"Module"}));const k=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const $o={attribute:!0,type:String,converter:jt,reflect:!1,hasChanged:ne},mr=(r=$o,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:a}=e;return{set(o){const l=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,l,r)},init(o){return o!==void 0&&this.C(a,void 0,r,o),o}}}if(i==="setter"){const{name:a}=e;return function(o){const l=this[a];t.call(this,o),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function g(r){return(t,e)=>typeof e=="object"?mr(r,t,e):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}function b(r){return g({...r,state:!0,attribute:!1})}function vo(r){return(t,e)=>{const i=typeof t=="function"?t:t[e];Object.assign(i,r)}}const Ot=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function oe(r,t){return(e,i,s)=>{const n=a=>a.renderRoot?.querySelector(r)??null;if(t){const{get:a,set:o}=typeof i=="object"?e:s??(()=>{const l=Symbol();return{get(){return this[l]},set(h){this[l]=h}}})();return Ot(e,i,{get(){let l=a.call(this);return l===void 0&&(l=n(this),(l!==null||this.hasUpdated)&&o.call(this,l)),l}})}return Ot(e,i,{get(){return n(this)}})}}let bo;function yo(r){return(t,e)=>Ot(t,e,{get(){return(this.renderRoot??(bo??=document.createDocumentFragment())).querySelectorAll(r)}})}function wo(r){return(t,e)=>Ot(t,e,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(r)??null}})}function _o(r){return(t,e)=>{const{slot:i,selector:s}=r??{},n="slot"+(i?`[name=${i}]`:":not([name])");return Ot(t,e,{get(){const a=this.renderRoot?.querySelector(n),o=a?.assignedElements(r)??[];return s===void 0?o:o.filter((l=>l.matches(s)))}})}}function Eo(r){return(t,e)=>{const{slot:i}=r??{},s="slot"+(i?`[name=${i}]`:":not([name])");return Ot(t,e,{get(){return this.renderRoot?.querySelector(s)?.assignedNodes(r)??[]}})}}const So=Object.freeze(Object.defineProperty({__proto__:null,customElement:k,eventOptions:vo,property:g,query:oe,queryAll:yo,queryAssignedElements:_o,queryAssignedNodes:Eo,queryAsync:wo,standardProperty:mr,state:b},Symbol.toStringTag,{value:"Module"}));const le={ATTRIBUTE:1,CHILD:2},he=r=>(...t)=>({_$litDirective$:r,values:t});let ce=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};const{I:To}=fr,$r=()=>document.createComment(""),Ft=(r,t,e)=>{const i=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=i.insertBefore($r(),s),a=i.insertBefore($r(),s);e=new To(n,a,r,r.options)}else{const n=e._$AB.nextSibling,a=e._$AM,o=a!==r;if(o){let l;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(l=r._$AU)!==a._$AU&&e._$AP(l)}if(n!==s||o){let l=e._$AA;for(;l!==n;){const h=l.nextSibling;i.insertBefore(l,s),l=h}}}return e},wt=(r,t,e=r)=>(r._$AI(t,e),r),Co={},Ao=(r,t=Co)=>r._$AH=t,Io=r=>r._$AH,Ve=r=>{r._$AR(),r._$AA.remove()};const vr=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},ct=he(class extends ce{constructor(r){if(super(r),r.type!==le.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],n=[];let a=0;for(const o of r)s[a]=i?i(o,a):a,n[a]=e(o,a),a++;return{values:n,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=Io(r),{values:n,keys:a}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=a,n;const o=this.ut??=[],l=[];let h,d,u=0,f=s.length-1,p=0,m=n.length-1;for(;u<=f&&p<=m;)if(s[u]===null)u++;else if(s[f]===null)f--;else if(o[u]===a[p])l[p]=wt(s[u],n[p]),u++,p++;else if(o[f]===a[m])l[m]=wt(s[f],n[m]),f--,m--;else if(o[u]===a[m])l[m]=wt(s[u],n[m]),Ft(r,l[m+1],s[u]),u++,m--;else if(o[f]===a[p])l[p]=wt(s[f],n[p]),Ft(r,s[u],s[f]),f--,p++;else if(h===void 0&&(h=vr(a,p,m),d=vr(o,u,f)),h.has(o[u]))if(h.has(o[f])){const v=d.get(a[p]),y=v!==void 0?s[v]:null;if(y===null){const _=Ft(r,s[u]);wt(_,n[p]),l[p]=_}else l[p]=wt(y,n[p]),Ft(r,s[u],y),s[v]=null;p++}else Ve(s[f]),f--;else Ve(s[u]),u++;for(;p<=m;){const v=Ft(r,l[m+1]);wt(v,n[p]),l[p++]=v}for(;u<=f;){const v=s[u++];v!==null&&Ve(v)}return this.ut=a,Ao(r,l),K}});let Be=class extends ce{constructor(t){if(super(t),this.it=E,t.type!==le.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===E||t==null)return this._t=void 0,this.it=t;if(t===K)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Be.directiveName="unsafeHTML",Be.resultType=1;const B=he(Be);function ue(r,t=!1){if(t){if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),r}return r}if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),{}}if(r.replace(/\\:/g,"").includes(":"))try{const e={};return br(r.replace(/[;\s]+$/,""),";").forEach(s=>{const n=br(s.trim(),":");if(n.length>=2){const a=n[0].trim(),o=n.slice(1).join(":").trim();a&&(e[a]=yr(o))}}),e}catch(e){return console.error("Error parsing key-value pairs:",r,e),{}}return yr(r)}function br(r,t){const e=[];let i="",s=0;for(;s<r.length;)r[s]==="\\"&&s+1<r.length&&r[s+1]===t?(i+="\\"+t,s+=2):r[s]===t?(e.push(i),i="",s++):(i+=r[s],s++);return e.push(i),e}function yr(r){return r.replace(/\\:/g,":").replace(/\\;/g,";")}function xo(r){const t={},e=(s,n=[])=>{const a=n.length>0?{keywords:n}:{};return Object.keys(s.dataset).forEach(o=>{if(o==="keywords"){const l=s.dataset.keywords.split(",").map(h=>h.trim()).filter(h=>h.length>0);a.keywords=n.length>0?[...n,...l]:l}else a[o]=s.dataset[o]}),a},i=(s,n,a,o=!1)=>{const l=a.hasAttribute("value")?a.getAttribute("value"):a.textContent.trim(),h=e(a,[l]);t[s]||(t[s]={text:n,options:[]}),t[s].options.push({group:s,value:l,text:a.textContent.trim(),disabled:o||a.disabled,selected:a.hasAttribute("selected"),data:h})};return Array.from(r.children).forEach(s=>{if(s.nodeName==="OPTGROUP"){const n=s,a=n.dataset.key||n.getAttribute("label"),o=n.getAttribute("label").trim(),l=e(n);Array.from(n.children).forEach(h=>{h.nodeName==="OPTION"&&i(a,o,h,n.disabled)}),Object.keys(l).length>0&&(t[a]||(t[a]={text:o,options:[]}),t[a].data=l)}else s.nodeName==="OPTION"&&i("__","__",s)}),t}var Oo=Object.defineProperty,Y=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Oo(t,e,s),s};let de=null,wr=!1;class C extends xt{constructor(){super(...arguments),this.cls="",this.stl="",this.i18n="",this["force-prevent-rerender"]=!1,this.$i18n={},this.$cls={},this.$stl={},this.$config={},this.$i=new Map,this.$template="",this.$data={},this.isRendered=!1,this.HTMLScript=null,this.HTMLIconContainer=null,this.HTMLTemplateContainer=null,this.HTMLDataSource=null,this.configObserver=null,this.dataSourceObserver=null,this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner"}get $normalizedI18n(){const t={};return Object.keys(this.$i18n).forEach(e=>{const i=this.$i18n[e];t[e]=i.includes(",")?i.split(",").map(s=>s.trim()):i}),t}$icons(t){return this.$i.get(t)}getI18nText(t,e={},i){let s=this.$i18n[t];if(!s){const n=this.tagName.toLowerCase(),a=this.$i18n[n];typeof a=="object"&&a!==null&&t in a&&(s=a[t])}return s||(s=e[t]||""),i!==void 0&&(typeof i=="number"?s=s.replace("{n}",String(i)):Object.keys(i).forEach(n=>{const a=i[n];s=s.replace(new RegExp(`\\{${n}\\}`,"g"),String(a))})),s}initializeCls(){if(this.cls){const t=ue(this.cls);typeof t=="string"?this.$cls[this["cls-default-element"]]=t:Object.keys(t).forEach(e=>{this.$cls[e]=t[e]})}}initializeStl(){if(this.stl){const t=ue(this.stl);typeof t=="string"?this.$stl[this["stl-default-element"]]=t:Object.keys(t).forEach(e=>{this.$stl[e]=t[e]})}}initializeGI18n(){if(wr)return;wr=!0;const t=document.getElementById("fr-i18n");if(t&&t.textContent)try{de=JSON.parse(t.textContent)}catch(e){console.error('Failed to parse global i18n from <script id="fr-i18n">.',e),de={}}else de={}}initializeI18n(){this.initializeGI18n();const t=this.i18n?ue(this.i18n):{};typeof t=="object"&&t!==null&&(this.$i18n=Object.assign({},de,t))}initializeConfig(){this.HTMLScript=this.querySelector('script[data-fn="config"][type="application/json"]')}initializeIcons(){this.HTMLIconContainer=this.querySelector('template[data-fn="icons"]')}initializeTemplate(){this.HTMLTemplateContainer=this.querySelector('template[data-fn="template"]')}initializeDataSource(){this.HTMLDataSource=this.querySelector('select[data-fn="data-source"]')}parseIcons(){if(!this.HTMLIconContainer)return;this.HTMLIconContainer.querySelectorAll("[data-key]").forEach(e=>{const i=e.getAttribute("data-key");if(i){const s=e.cloneNode(!0);s.removeAttribute("data-key");const n=s.outerHTML;this.$i.set(i,$`${B(n)}`)}})}parseTemplate(){this.HTMLTemplateContainer&&(this.$template=this.HTMLTemplateContainer.innerHTML.trim())}parseConfig(){if(this.HTMLScript)try{const t=this.HTMLScript.textContent;if(this.$config=t?JSON.parse(t):{},this.$config&&typeof this.$config=="object"){if("i18n"in this.$config){const e=this.$config.i18n;typeof e=="object"&&e!==null&&(this.$i18n={...this.$i18n,...e})}if("cls"in this.$config){const e=this.$config.cls;typeof e=="string"?this.$cls[this["cls-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$cls={...this.$cls,...e})}if("stl"in this.$config){const e=this.$config.stl;typeof e=="string"?this.$stl[this["stl-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$stl={...this.$stl,...e})}}}catch(t){console.warn(`${this.tagName.toLowerCase()}: Failed to parse config JSON:`,t),this.$config={}}}parseDataSource(){this.HTMLDataSource&&(this.$data=xo(this.HTMLDataSource))}initializeConfigObserver(){!this.HTMLScript||!this.HTMLScript.hasAttribute("data-reactive")||(this.configObserver=new MutationObserver(()=>{this.parseConfig(),this.onConfigChanged()}),this.configObserver.observe(this.HTMLScript,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}initializeDataSourceObserver(){!this.HTMLDataSource||!this.HTMLDataSource.hasAttribute("data-reactive")||(this.dataSourceObserver=new MutationObserver(()=>{this.parseDataSource(),this.onDataSourceChanged()}),this.dataSourceObserver.observe(this.HTMLDataSource,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}onConfigChanged(){}onDataSourceChanged(){}connectedCallback(){super.connectedCallback(),this["force-prevent-rerender"]&&this.querySelector("[data-host-inner]")&&(this.isRendered=!0),this.initializeI18n(),this.initializeCls(),this.initializeStl(),this.initializeConfig(),this.initializeIcons(),this.initializeTemplate(),this.initializeDataSource(),this.HTMLScript&&(this.parseConfig(),this.initializeConfigObserver()),this.HTMLIconContainer&&this.parseIcons(),this.HTMLTemplateContainer&&this.parseTemplate(),this.HTMLDataSource&&(this.parseDataSource(),this.initializeDataSourceObserver())}disconnectedCallback(){super.disconnectedCallback(),this.configObserver&&(this.configObserver.disconnect(),this.configObserver=null),this.dataSourceObserver&&(this.dataSourceObserver.disconnect(),this.dataSourceObserver=null)}shouldUpdate(t){return this["force-prevent-rerender"]&&this.isRendered?!1:super.shouldUpdate(t)}updated(t){super.updated(t),this.isRendered||(this.isRendered=!0)}createRenderRoot(){return this}}Y([g({type:String})],C.prototype,"cls"),Y([g({type:String})],C.prototype,"stl"),Y([g({type:String})],C.prototype,"i18n"),Y([g({type:Boolean})],C.prototype,"force-prevent-rerender"),Y([b()],C.prototype,"$i18n"),Y([b()],C.prototype,"$cls"),Y([b()],C.prototype,"$stl"),Y([b()],C.prototype,"$config"),Y([b()],C.prototype,"$i"),Y([b()],C.prototype,"$template"),Y([b()],C.prototype,"$data");var Do=Object.defineProperty,ko=Object.getOwnPropertyDescriptor,_r=(r,t,e,i)=>{for(var s=i>1?void 0:i?ko(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Do(t,e,s),s};c.Accordion=class extends C{constructor(){super(...arguments),this.collapsible="single"}get items(){return Array.from(this.querySelectorAll(":scope > fr-accordion-item"))}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-toggle-request",this.handleToggleRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-toggle-request",this.handleToggleRequest)}handleToggleRequest(t){t.stopPropagation();const e=t.detail.item,i=this.items.filter(s=>s.open);this.collapsible==="single"?this.items.forEach(s=>{s===e?s.toggle(!s.open):s.open&&s.toggle(!1)}):this.collapsible==="none"?(!e.open||i.length>1)&&e.toggle():e.toggle()}render(){return E}},_r([g({type:String})],c.Accordion.prototype,"collapsible",2),c.Accordion=_r([k("fr-accordion")],c.Accordion);var Lo=Object.defineProperty,Po=Object.getOwnPropertyDescriptor,Ne=(r,t,e,i)=>{for(var s=i>1?void 0:i?Po(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Lo(t,e,s),s};let Mo=0;c.AccordionItem=class extends C{constructor(){super(...arguments),this.open=!1,this.iid=`fr-accordion-item-${++Mo}`}get accordionItemTitle(){return this.querySelector("fr-accordion-item-title")}get accordionItemContent(){return this.querySelector("fr-accordion-item-content")}get allItems(){const t=this.parentElement;return t?Array.from(t.querySelectorAll(":scope > fr-accordion-item")):[]}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-title-click",this.handleTitleClick),this.addEventListener("fr-navigation-key",this.handleNavigationKey),this.open&&requestAnimationFrame(()=>{this.updateChildrenAria()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-title-click",this.handleTitleClick),this.removeEventListener("fr-navigation-key",this.handleNavigationKey)}handleTitleClick(){this.dispatchEvent(new CustomEvent("fr-toggle-request",{bubbles:!0,composed:!0,detail:{item:this}}))}handleNavigationKey(t){const{key:e,originalEvent:i}=t.detail,s=this.allItems,n=s.indexOf(this);if(n!==-1)switch(e){case"ArrowDown":case"ArrowRight":i.preventDefault();const a=(n+1)%s.length;s[a]?.focusTitle();break;case"ArrowUp":case"ArrowLeft":i.preventDefault();const o=n===0?s.length-1:n-1;s[o]?.focusTitle();break;case"Home":i.preventDefault(),s[0]?.focusTitle();break;case"End":i.preventDefault(),s[s.length-1]?.focusTitle();break}}focusTitle(){(this.accordionItemTitle?.querySelector("[data-accordion-trigger]")).focus()}updateChildrenAria(){this.accordionItemTitle&&this.accordionItemTitle.updateAria(this.open,`${this.iid}-content`),this.accordionItemContent&&this.accordionItemContent.updateAria(`${this.iid}-title`,this.open)}toggle(t){const e=t===void 0?!this.open:t;if(e===this.open)return;const i=e?"beforeShow":"beforeHide",s=new CustomEvent(i,{bubbles:!0,composed:!0,cancelable:!0,detail:{item:this}});this.dispatchEvent(s),!s.defaultPrevented&&(this.open=e)}updated(t){super.updated(t),t.has("open")&&(this.updateChildrenAria(),this.dispatchEvent(new CustomEvent(this.open?"show":"hide",{bubbles:!0,composed:!0,detail:{item:this}})))}render(){return E}},Ne([g({type:Boolean,reflect:!0})],c.AccordionItem.prototype,"open",2),Ne([b()],c.AccordionItem.prototype,"iid",2),c.AccordionItem=Ne([k("fr-accordion-item")],c.AccordionItem);var Ro=Object.defineProperty,qo=Object.getOwnPropertyDescriptor,zt=(r,t,e,i)=>{for(var s=i>1?void 0:i?qo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ro(t,e,s),s};c.AccordionItemTitle=class extends C{constructor(){super(...arguments),this.isExpanded=!1,this.controlsId="",this.$cls={container:"",trigger:""},this.$stl={container:"",trigger:""},this["cls-default-element"]="trigger",this["stl-default-element"]="trigger"}handleClick(){this.dispatchEvent(new CustomEvent("fr-title-click",{bubbles:!0,composed:!0}))}handleKeydown(t){if(t.key==="Enter"||t.key===" "){t.preventDefault(),this.handleClick();return}["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"].includes(t.key)&&this.dispatchEvent(new CustomEvent("fr-navigation-key",{bubbles:!0,composed:!0,detail:{key:t.key,originalEvent:t}}))}updateAria(t,e){this.isExpanded=t,this.controlsId=e}focus(){this.querySelector("button[data-host-inner]")?.focus()}render(){return $`
      <div
        class="${this.$cls.container}"
        style="${this.$stl.container}"
        data-host-inner
      >
        <button
          id="${this.parentElement?.id?`${this.parentElement.id}-title`:""}"
          class="${this.$cls.trigger||""}"
          style="${this.$stl.trigger||""}"
          type="button"
          aria-expanded="${this.isExpanded}"
          aria-controls="${this.controlsId}"
          @click="${this.handleClick}"
          @keydown="${this.handleKeydown}"
          data-accordion-trigger
        >
          ${this.$template?B(this.$template):E}
        </button>
      </div>
    `}},zt([b()],c.AccordionItemTitle.prototype,"isExpanded",2),zt([b()],c.AccordionItemTitle.prototype,"controlsId",2),zt([b()],c.AccordionItemTitle.prototype,"$cls",2),zt([b()],c.AccordionItemTitle.prototype,"$stl",2),c.AccordionItemTitle=zt([k("fr-accordion-item-title")],c.AccordionItemTitle);var jo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,Er=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ho(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&jo(t,e,s),s};c.AccordionItemContent=class extends C{constructor(){super(...arguments),this.labelledById=""}updateAria(t,e){this.labelledById=t,requestAnimationFrame(()=>{const i=this.querySelector("[data-host-inner]");i&&(e?(i.style.maxHeight=i.scrollHeight+"px",i.style.opacity="1"):(i.style.maxHeight="0",i.style.opacity="0"))})}render(){const t="max-height: 0; opacity: 0; overflow: hidden;",e=this.$stl["host-inner"]||"",i=e?`${t} ${e}`:t;return $`
      <div
        id="${this.parentElement?.id?`${this.parentElement.id}-content`:""}"
        class="${this.$cls["host-inner"]||""}"
        style="${i}"
        role="region"
        aria-labelledby="${this.labelledById}"
        data-host-inner
      >
        ${this.$template?B(this.$template):E}
      </div>
    `}},Er([b()],c.AccordionItemContent.prototype,"labelledById",2),c.AccordionItemContent=Er([k("fr-accordion-item-content")],c.AccordionItemContent);const ut=Math.min,U=Math.max,pe=Math.round,fe=Math.floor,Q=r=>({x:r,y:r}),Uo={left:"right",right:"left",bottom:"top",top:"bottom"},Vo={start:"end",end:"start"};function Fe(r,t,e){return U(r,ut(t,e))}function Dt(r,t){return typeof r=="function"?r(t):r}function dt(r){return r.split("-")[0]}function kt(r){return r.split("-")[1]}function Sr(r){return r==="x"?"y":"x"}function ze(r){return r==="y"?"height":"width"}const Bo=new Set(["top","bottom"]);function nt(r){return Bo.has(dt(r))?"y":"x"}function Ke(r){return Sr(nt(r))}function No(r,t,e){e===void 0&&(e=!1);const i=kt(r),s=Ke(r),n=ze(s);let a=s==="x"?i===(e?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[n]>t.floating[n]&&(a=ge(a)),[a,ge(a)]}function Fo(r){const t=ge(r);return[Ye(r),t,Ye(t)]}function Ye(r){return r.replace(/start|end/g,t=>Vo[t])}const Tr=["left","right"],Cr=["right","left"],zo=["top","bottom"],Ko=["bottom","top"];function Yo(r,t,e){switch(r){case"top":case"bottom":return e?t?Cr:Tr:t?Tr:Cr;case"left":case"right":return t?zo:Ko;default:return[]}}function Go(r,t,e,i){const s=kt(r);let n=Yo(dt(r),e==="start",i);return s&&(n=n.map(a=>a+"-"+s),t&&(n=n.concat(n.map(Ye)))),n}function ge(r){return r.replace(/left|right|bottom|top/g,t=>Uo[t])}function Wo(r){return{top:0,right:0,bottom:0,left:0,...r}}function Ar(r){return typeof r!="number"?Wo(r):{top:r,right:r,bottom:r,left:r}}function me(r){const{x:t,y:e,width:i,height:s}=r;return{width:i,height:s,top:e,left:t,right:t+i,bottom:e+s,x:t,y:e}}function Ir(r,t,e){let{reference:i,floating:s}=r;const n=nt(t),a=Ke(t),o=ze(a),l=dt(t),h=n==="y",d=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,f=i[o]/2-s[o]/2;let p;switch(l){case"top":p={x:d,y:i.y-s.height};break;case"bottom":p={x:d,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:u};break;case"left":p={x:i.x-s.width,y:u};break;default:p={x:i.x,y:i.y}}switch(kt(t)){case"start":p[a]-=f*(e&&h?-1:1);break;case"end":p[a]+=f*(e&&h?-1:1);break}return p}const Jo=async(r,t,e)=>{const{placement:i="bottom",strategy:s="absolute",middleware:n=[],platform:a}=e,o=n.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let h=await a.getElementRects({reference:r,floating:t,strategy:s}),{x:d,y:u}=Ir(h,i,l),f=i,p={},m=0;for(let v=0;v<o.length;v++){const{name:y,fn:_}=o[v],{x:w,y:T,data:O,reset:A}=await _({x:d,y:u,initialPlacement:i,placement:f,strategy:s,middlewareData:p,rects:h,platform:a,elements:{reference:r,floating:t}});d=w??d,u=T??u,p={...p,[y]:{...p[y],...O}},A&&m<=50&&(m++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(h=A.rects===!0?await a.getElementRects({reference:r,floating:t,strategy:s}):A.rects),{x:d,y:u}=Ir(h,f,l)),v=-1)}return{x:d,y:u,placement:f,strategy:s,middlewareData:p}};async function Ge(r,t){var e;t===void 0&&(t={});const{x:i,y:s,platform:n,rects:a,elements:o,strategy:l}=r,{boundary:h="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:f=!1,padding:p=0}=Dt(t,r),m=Ar(p),y=o[f?u==="floating"?"reference":"floating":u],_=me(await n.getClippingRect({element:(e=await(n.isElement==null?void 0:n.isElement(y)))==null||e?y:y.contextElement||await(n.getDocumentElement==null?void 0:n.getDocumentElement(o.floating)),boundary:h,rootBoundary:d,strategy:l})),w=u==="floating"?{x:i,y:s,width:a.floating.width,height:a.floating.height}:a.reference,T=await(n.getOffsetParent==null?void 0:n.getOffsetParent(o.floating)),O=await(n.isElement==null?void 0:n.isElement(T))?await(n.getScale==null?void 0:n.getScale(T))||{x:1,y:1}:{x:1,y:1},A=me(n.convertOffsetParentRelativeRectToViewportRelativeRect?await n.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:w,offsetParent:T,strategy:l}):w);return{top:(_.top-A.top+m.top)/O.y,bottom:(A.bottom-_.bottom+m.bottom)/O.y,left:(_.left-A.left+m.left)/O.x,right:(A.right-_.right+m.right)/O.x}}const Zo=r=>({name:"arrow",options:r,async fn(t){const{x:e,y:i,placement:s,rects:n,platform:a,elements:o,middlewareData:l}=t,{element:h,padding:d=0}=Dt(r,t)||{};if(h==null)return{};const u=Ar(d),f={x:e,y:i},p=Ke(s),m=ze(p),v=await a.getDimensions(h),y=p==="y",_=y?"top":"left",w=y?"bottom":"right",T=y?"clientHeight":"clientWidth",O=n.reference[m]+n.reference[p]-f[p]-n.floating[m],A=f[p]-n.reference[p],P=await(a.getOffsetParent==null?void 0:a.getOffsetParent(h));let I=P?P[T]:0;(!I||!await(a.isElement==null?void 0:a.isElement(P)))&&(I=o.floating[T]||n.floating[m]);const D=O/2-A/2,j=I/2-v[m]/2-1,x=ut(u[_],j),S=ut(u[w],j),R=x,q=I-v[m]-S,M=I/2-v[m]/2+D,At=Fe(R,M,q),ht=!l.arrow&&kt(s)!=null&&M!==At&&n.reference[m]/2-(M<R?x:S)-v[m]/2<0,Z=ht?M<R?M-R:M-q:0;return{[p]:f[p]+Z,data:{[p]:At,centerOffset:M-At-Z,...ht&&{alignmentOffset:Z}},reset:ht}}}),Xo=function(r){return r===void 0&&(r={}),{name:"flip",options:r,async fn(t){var e,i;const{placement:s,middlewareData:n,rects:a,initialPlacement:o,platform:l,elements:h}=t,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:v=!0,...y}=Dt(r,t);if((e=n.arrow)!=null&&e.alignmentOffset)return{};const _=dt(s),w=nt(o),T=dt(o)===o,O=await(l.isRTL==null?void 0:l.isRTL(h.floating)),A=f||(T||!v?[ge(o)]:Fo(o)),P=m!=="none";!f&&P&&A.push(...Go(o,v,m,O));const I=[o,...A],D=await Ge(t,y),j=[];let x=((i=n.flip)==null?void 0:i.overflows)||[];if(d&&j.push(D[_]),u){const M=No(s,a,O);j.push(D[M[0]],D[M[1]])}if(x=[...x,{placement:s,overflows:j}],!j.every(M=>M<=0)){var S,R;const M=(((S=n.flip)==null?void 0:S.index)||0)+1,At=I[M];if(At&&(!(u==="alignment"?w!==nt(At):!1)||x.every(X=>nt(X.placement)===w?X.overflows[0]>0:!0)))return{data:{index:M,overflows:x},reset:{placement:At}};let ht=(R=x.filter(Z=>Z.overflows[0]<=0).sort((Z,X)=>Z.overflows[1]-X.overflows[1])[0])==null?void 0:R.placement;if(!ht)switch(p){case"bestFit":{var q;const Z=(q=x.filter(X=>{if(P){const gt=nt(X.placement);return gt===w||gt==="y"}return!0}).map(X=>[X.placement,X.overflows.filter(gt=>gt>0).reduce((gt,Jc)=>gt+Jc,0)]).sort((X,gt)=>X[1]-gt[1])[0])==null?void 0:q[0];Z&&(ht=Z);break}case"initialPlacement":ht=o;break}if(s!==ht)return{reset:{placement:ht}}}return{}}}},Qo=new Set(["left","top"]);async function tl(r,t){const{placement:e,platform:i,elements:s}=r,n=await(i.isRTL==null?void 0:i.isRTL(s.floating)),a=dt(e),o=kt(e),l=nt(e)==="y",h=Qo.has(a)?-1:1,d=n&&l?-1:1,u=Dt(t,r);let{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return o&&typeof m=="number"&&(p=o==="end"?m*-1:m),l?{x:p*d,y:f*h}:{x:f*h,y:p*d}}const el=function(r){return r===void 0&&(r=0),{name:"offset",options:r,async fn(t){var e,i;const{x:s,y:n,placement:a,middlewareData:o}=t,l=await tl(t,r);return a===((e=o.offset)==null?void 0:e.placement)&&(i=o.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:n+l.y,data:{...l,placement:a}}}}},il=function(r){return r===void 0&&(r={}),{name:"shift",options:r,async fn(t){const{x:e,y:i,placement:s}=t,{mainAxis:n=!0,crossAxis:a=!1,limiter:o={fn:y=>{let{x:_,y:w}=y;return{x:_,y:w}}},...l}=Dt(r,t),h={x:e,y:i},d=await Ge(t,l),u=nt(dt(s)),f=Sr(u);let p=h[f],m=h[u];if(n){const y=f==="y"?"top":"left",_=f==="y"?"bottom":"right",w=p+d[y],T=p-d[_];p=Fe(w,p,T)}if(a){const y=u==="y"?"top":"left",_=u==="y"?"bottom":"right",w=m+d[y],T=m-d[_];m=Fe(w,m,T)}const v=o.fn({...t,[f]:p,[u]:m});return{...v,data:{x:v.x-e,y:v.y-i,enabled:{[f]:n,[u]:a}}}}}},sl=function(r){return r===void 0&&(r={}),{name:"size",options:r,async fn(t){var e,i;const{placement:s,rects:n,platform:a,elements:o}=t,{apply:l=()=>{},...h}=Dt(r,t),d=await Ge(t,h),u=dt(s),f=kt(s),p=nt(s)==="y",{width:m,height:v}=n.floating;let y,_;u==="top"||u==="bottom"?(y=u,_=f===(await(a.isRTL==null?void 0:a.isRTL(o.floating))?"start":"end")?"left":"right"):(_=u,y=f==="end"?"top":"bottom");const w=v-d.top-d.bottom,T=m-d.left-d.right,O=ut(v-d[y],w),A=ut(m-d[_],T),P=!t.middlewareData.shift;let I=O,D=A;if((e=t.middlewareData.shift)!=null&&e.enabled.x&&(D=T),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(I=w),P&&!f){const x=U(d.left,0),S=U(d.right,0),R=U(d.top,0),q=U(d.bottom,0);p?D=m-2*(x!==0||S!==0?x+S:U(d.left,d.right)):I=v-2*(R!==0||q!==0?R+q:U(d.top,d.bottom))}await l({...t,availableWidth:D,availableHeight:I});const j=await a.getDimensions(o.floating);return m!==j.width||v!==j.height?{reset:{rects:!0}}:{}}}};function $e(){return typeof window<"u"}function Lt(r){return xr(r)?(r.nodeName||"").toLowerCase():"#document"}function V(r){var t;return(r==null||(t=r.ownerDocument)==null?void 0:t.defaultView)||window}function tt(r){var t;return(t=(xr(r)?r.ownerDocument:r.document)||window.document)==null?void 0:t.documentElement}function xr(r){return $e()?r instanceof Node||r instanceof V(r).Node:!1}function G(r){return $e()?r instanceof Element||r instanceof V(r).Element:!1}function et(r){return $e()?r instanceof HTMLElement||r instanceof V(r).HTMLElement:!1}function Or(r){return!$e()||typeof ShadowRoot>"u"?!1:r instanceof ShadowRoot||r instanceof V(r).ShadowRoot}const rl=new Set(["inline","contents"]);function Kt(r){const{overflow:t,overflowX:e,overflowY:i,display:s}=W(r);return/auto|scroll|overlay|hidden|clip/.test(t+i+e)&&!rl.has(s)}const nl=new Set(["table","td","th"]);function al(r){return nl.has(Lt(r))}const ol=[":popover-open",":modal"];function ve(r){return ol.some(t=>{try{return r.matches(t)}catch{return!1}})}const ll=["transform","translate","scale","rotate","perspective"],hl=["transform","translate","scale","rotate","perspective","filter"],cl=["paint","layout","strict","content"];function We(r){const t=Je(),e=G(r)?W(r):r;return ll.some(i=>e[i]?e[i]!=="none":!1)||(e.containerType?e.containerType!=="normal":!1)||!t&&(e.backdropFilter?e.backdropFilter!=="none":!1)||!t&&(e.filter?e.filter!=="none":!1)||hl.some(i=>(e.willChange||"").includes(i))||cl.some(i=>(e.contain||"").includes(i))}function ul(r){let t=pt(r);for(;et(t)&&!Pt(t);){if(We(t))return t;if(ve(t))return null;t=pt(t)}return null}function Je(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const dl=new Set(["html","body","#document"]);function Pt(r){return dl.has(Lt(r))}function W(r){return V(r).getComputedStyle(r)}function be(r){return G(r)?{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}:{scrollLeft:r.scrollX,scrollTop:r.scrollY}}function pt(r){if(Lt(r)==="html")return r;const t=r.assignedSlot||r.parentNode||Or(r)&&r.host||tt(r);return Or(t)?t.host:t}function Dr(r){const t=pt(r);return Pt(t)?r.ownerDocument?r.ownerDocument.body:r.body:et(t)&&Kt(t)?t:Dr(t)}function Yt(r,t,e){var i;t===void 0&&(t=[]),e===void 0&&(e=!0);const s=Dr(r),n=s===((i=r.ownerDocument)==null?void 0:i.body),a=V(s);if(n){const o=Ze(a);return t.concat(a,a.visualViewport||[],Kt(s)?s:[],o&&e?Yt(o):[])}return t.concat(s,Yt(s,[],e))}function Ze(r){return r.parent&&Object.getPrototypeOf(r.parent)?r.frameElement:null}function kr(r){const t=W(r);let e=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const s=et(r),n=s?r.offsetWidth:e,a=s?r.offsetHeight:i,o=pe(e)!==n||pe(i)!==a;return o&&(e=n,i=a),{width:e,height:i,$:o}}function Xe(r){return G(r)?r:r.contextElement}function Mt(r){const t=Xe(r);if(!et(t))return Q(1);const e=t.getBoundingClientRect(),{width:i,height:s,$:n}=kr(t);let a=(n?pe(e.width):e.width)/i,o=(n?pe(e.height):e.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const pl=Q(0);function Lr(r){const t=V(r);return!Je()||!t.visualViewport?pl:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function fl(r,t,e){return t===void 0&&(t=!1),!e||t&&e!==V(r)?!1:t}function _t(r,t,e,i){t===void 0&&(t=!1),e===void 0&&(e=!1);const s=r.getBoundingClientRect(),n=Xe(r);let a=Q(1);t&&(i?G(i)&&(a=Mt(i)):a=Mt(r));const o=fl(n,e,i)?Lr(n):Q(0);let l=(s.left+o.x)/a.x,h=(s.top+o.y)/a.y,d=s.width/a.x,u=s.height/a.y;if(n){const f=V(n),p=i&&G(i)?V(i):i;let m=f,v=Ze(m);for(;v&&i&&p!==m;){const y=Mt(v),_=v.getBoundingClientRect(),w=W(v),T=_.left+(v.clientLeft+parseFloat(w.paddingLeft))*y.x,O=_.top+(v.clientTop+parseFloat(w.paddingTop))*y.y;l*=y.x,h*=y.y,d*=y.x,u*=y.y,l+=T,h+=O,m=V(v),v=Ze(m)}}return me({width:d,height:u,x:l,y:h})}function ye(r,t){const e=be(r).scrollLeft;return t?t.left+e:_t(tt(r)).left+e}function Pr(r,t){const e=r.getBoundingClientRect(),i=e.left+t.scrollLeft-ye(r,e),s=e.top+t.scrollTop;return{x:i,y:s}}function gl(r){let{elements:t,rect:e,offsetParent:i,strategy:s}=r;const n=s==="fixed",a=tt(i),o=t?ve(t.floating):!1;if(i===a||o&&n)return e;let l={scrollLeft:0,scrollTop:0},h=Q(1);const d=Q(0),u=et(i);if((u||!u&&!n)&&((Lt(i)!=="body"||Kt(a))&&(l=be(i)),et(i))){const p=_t(i);h=Mt(i),d.x=p.x+i.clientLeft,d.y=p.y+i.clientTop}const f=a&&!u&&!n?Pr(a,l):Q(0);return{width:e.width*h.x,height:e.height*h.y,x:e.x*h.x-l.scrollLeft*h.x+d.x+f.x,y:e.y*h.y-l.scrollTop*h.y+d.y+f.y}}function ml(r){return Array.from(r.getClientRects())}function $l(r){const t=tt(r),e=be(r),i=r.ownerDocument.body,s=U(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),n=U(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let a=-e.scrollLeft+ye(r);const o=-e.scrollTop;return W(i).direction==="rtl"&&(a+=U(t.clientWidth,i.clientWidth)-s),{width:s,height:n,x:a,y:o}}const Mr=25;function vl(r,t){const e=V(r),i=tt(r),s=e.visualViewport;let n=i.clientWidth,a=i.clientHeight,o=0,l=0;if(s){n=s.width,a=s.height;const d=Je();(!d||d&&t==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}const h=ye(i);if(h<=0){const d=i.ownerDocument,u=d.body,f=getComputedStyle(u),p=d.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,m=Math.abs(i.clientWidth-u.clientWidth-p);m<=Mr&&(n-=m)}else h<=Mr&&(n+=h);return{width:n,height:a,x:o,y:l}}const bl=new Set(["absolute","fixed"]);function yl(r,t){const e=_t(r,!0,t==="fixed"),i=e.top+r.clientTop,s=e.left+r.clientLeft,n=et(r)?Mt(r):Q(1),a=r.clientWidth*n.x,o=r.clientHeight*n.y,l=s*n.x,h=i*n.y;return{width:a,height:o,x:l,y:h}}function Rr(r,t,e){let i;if(t==="viewport")i=vl(r,e);else if(t==="document")i=$l(tt(r));else if(G(t))i=yl(t,e);else{const s=Lr(r);i={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return me(i)}function qr(r,t){const e=pt(r);return e===t||!G(e)||Pt(e)?!1:W(e).position==="fixed"||qr(e,t)}function wl(r,t){const e=t.get(r);if(e)return e;let i=Yt(r,[],!1).filter(o=>G(o)&&Lt(o)!=="body"),s=null;const n=W(r).position==="fixed";let a=n?pt(r):r;for(;G(a)&&!Pt(a);){const o=W(a),l=We(a);!l&&o.position==="fixed"&&(s=null),(n?!l&&!s:!l&&o.position==="static"&&!!s&&bl.has(s.position)||Kt(a)&&!l&&qr(r,a))?i=i.filter(d=>d!==a):s=o,a=pt(a)}return t.set(r,i),i}function _l(r){let{element:t,boundary:e,rootBoundary:i,strategy:s}=r;const a=[...e==="clippingAncestors"?ve(t)?[]:wl(t,this._c):[].concat(e),i],o=a[0],l=a.reduce((h,d)=>{const u=Rr(t,d,s);return h.top=U(u.top,h.top),h.right=ut(u.right,h.right),h.bottom=ut(u.bottom,h.bottom),h.left=U(u.left,h.left),h},Rr(t,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function El(r){const{width:t,height:e}=kr(r);return{width:t,height:e}}function Sl(r,t,e){const i=et(t),s=tt(t),n=e==="fixed",a=_t(r,!0,n,t);let o={scrollLeft:0,scrollTop:0};const l=Q(0);function h(){l.x=ye(s)}if(i||!i&&!n)if((Lt(t)!=="body"||Kt(s))&&(o=be(t)),i){const p=_t(t,!0,n,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else s&&h();n&&!i&&s&&h();const d=s&&!i&&!n?Pr(s,o):Q(0),u=a.left+o.scrollLeft-l.x-d.x,f=a.top+o.scrollTop-l.y-d.y;return{x:u,y:f,width:a.width,height:a.height}}function Qe(r){return W(r).position==="static"}function jr(r,t){if(!et(r)||W(r).position==="fixed")return null;if(t)return t(r);let e=r.offsetParent;return tt(r)===e&&(e=e.ownerDocument.body),e}function Hr(r,t){const e=V(r);if(ve(r))return e;if(!et(r)){let s=pt(r);for(;s&&!Pt(s);){if(G(s)&&!Qe(s))return s;s=pt(s)}return e}let i=jr(r,t);for(;i&&al(i)&&Qe(i);)i=jr(i,t);return i&&Pt(i)&&Qe(i)&&!We(i)?e:i||ul(r)||e}const Tl=async function(r){const t=this.getOffsetParent||Hr,e=this.getDimensions,i=await e(r.floating);return{reference:Sl(r.reference,await t(r.floating),r.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function Cl(r){return W(r).direction==="rtl"}const Al={convertOffsetParentRelativeRectToViewportRelativeRect:gl,getDocumentElement:tt,getClippingRect:_l,getOffsetParent:Hr,getElementRects:Tl,getClientRects:ml,getDimensions:El,getScale:Mt,isElement:G,isRTL:Cl};function Ur(r,t){return r.x===t.x&&r.y===t.y&&r.width===t.width&&r.height===t.height}function Il(r,t){let e=null,i;const s=tt(r);function n(){var o;clearTimeout(i),(o=e)==null||o.disconnect(),e=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),n();const h=r.getBoundingClientRect(),{left:d,top:u,width:f,height:p}=h;if(o||t(),!f||!p)return;const m=fe(u),v=fe(s.clientWidth-(d+f)),y=fe(s.clientHeight-(u+p)),_=fe(d),T={rootMargin:-m+"px "+-v+"px "+-y+"px "+-_+"px",threshold:U(0,ut(1,l))||1};let O=!0;function A(P){const I=P[0].intersectionRatio;if(I!==l){if(!O)return a();I?a(!1,I):i=setTimeout(()=>{a(!1,1e-7)},1e3)}I===1&&!Ur(h,r.getBoundingClientRect())&&a(),O=!1}try{e=new IntersectionObserver(A,{...T,root:s.ownerDocument})}catch{e=new IntersectionObserver(A,T)}e.observe(r)}return a(!0),n}function xl(r,t,e,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:n=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,h=Xe(r),d=s||n?[...h?Yt(h):[],...Yt(t)]:[];d.forEach(_=>{s&&_.addEventListener("scroll",e,{passive:!0}),n&&_.addEventListener("resize",e)});const u=h&&o?Il(h,e):null;let f=-1,p=null;a&&(p=new ResizeObserver(_=>{let[w]=_;w&&w.target===h&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var T;(T=p)==null||T.observe(t)})),e()}),h&&!l&&p.observe(h),p.observe(t));let m,v=l?_t(r):null;l&&y();function y(){const _=_t(r);v&&!Ur(v,_)&&e(),v=_,m=requestAnimationFrame(y)}return e(),()=>{var _;d.forEach(w=>{s&&w.removeEventListener("scroll",e),n&&w.removeEventListener("resize",e)}),u?.(),(_=p)==null||_.disconnect(),p=null,l&&cancelAnimationFrame(m)}}const Ol=el,Dl=il,kl=Xo,Ll=sl,Pl=Zo,Ml=(r,t,e)=>{const i=new Map,s={platform:Al,...e},n={...s.platform,_c:i};return Jo(r,t,{...s,platform:n})};var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Vr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ti,Br;function Rl(){if(Br)return ti;Br=1;function r(){this.__data__=[],this.size=0}return ti=r,ti}var ei,Nr;function _e(){if(Nr)return ei;Nr=1;function r(t,e){return t===e||t!==t&&e!==e}return ei=r,ei}var ii,Fr;function Ee(){if(Fr)return ii;Fr=1;var r=_e();function t(e,i){for(var s=e.length;s--;)if(r(e[s][0],i))return s;return-1}return ii=t,ii}var si,zr;function ql(){if(zr)return si;zr=1;var r=Ee(),t=Array.prototype,e=t.splice;function i(s){var n=this.__data__,a=r(n,s);if(a<0)return!1;var o=n.length-1;return a==o?n.pop():e.call(n,a,1),--this.size,!0}return si=i,si}var ri,Kr;function jl(){if(Kr)return ri;Kr=1;var r=Ee();function t(e){var i=this.__data__,s=r(i,e);return s<0?void 0:i[s][1]}return ri=t,ri}var ni,Yr;function Hl(){if(Yr)return ni;Yr=1;var r=Ee();function t(e){return r(this.__data__,e)>-1}return ni=t,ni}var ai,Gr;function Ul(){if(Gr)return ai;Gr=1;var r=Ee();function t(e,i){var s=this.__data__,n=r(s,e);return n<0?(++this.size,s.push([e,i])):s[n][1]=i,this}return ai=t,ai}var oi,Wr;function Se(){if(Wr)return oi;Wr=1;var r=Rl(),t=ql(),e=jl(),i=Hl(),s=Ul();function n(a){var o=-1,l=a==null?0:a.length;for(this.clear();++o<l;){var h=a[o];this.set(h[0],h[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,oi=n,oi}var li,Jr;function Vl(){if(Jr)return li;Jr=1;var r=Se();function t(){this.__data__=new r,this.size=0}return li=t,li}var hi,Zr;function Bl(){if(Zr)return hi;Zr=1;function r(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i}return hi=r,hi}var ci,Xr;function Nl(){if(Xr)return ci;Xr=1;function r(t){return this.__data__.get(t)}return ci=r,ci}var ui,Qr;function Fl(){if(Qr)return ui;Qr=1;function r(t){return this.__data__.has(t)}return ui=r,ui}var di,tn;function en(){if(tn)return di;tn=1;var r=typeof we=="object"&&we&&we.Object===Object&&we;return di=r,di}var pi,sn;function Rt(){if(sn)return pi;sn=1;var r=en(),t=typeof self=="object"&&self&&self.Object===Object&&self,e=r||t||Function("return this")();return pi=e,pi}var fi,rn;function nn(){if(rn)return fi;rn=1;var r=Rt(),t=r.Symbol;return fi=t,fi}var gi,an;function zl(){if(an)return gi;an=1;var r=nn(),t=Object.prototype,e=t.hasOwnProperty,i=t.toString,s=r?r.toStringTag:void 0;function n(a){var o=e.call(a,s),l=a[s];try{a[s]=void 0;var h=!0}catch{}var d=i.call(a);return h&&(o?a[s]=l:delete a[s]),d}return gi=n,gi}var mi,on;function Kl(){if(on)return mi;on=1;var r=Object.prototype,t=r.toString;function e(i){return t.call(i)}return mi=e,mi}var $i,ln;function Te(){if(ln)return $i;ln=1;var r=nn(),t=zl(),e=Kl(),i="[object Null]",s="[object Undefined]",n=r?r.toStringTag:void 0;function a(o){return o==null?o===void 0?s:i:n&&n in Object(o)?t(o):e(o)}return $i=a,$i}var vi,hn;function Et(){if(hn)return vi;hn=1;function r(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}return vi=r,vi}var bi,cn;function yi(){if(cn)return bi;cn=1;var r=Te(),t=Et(),e="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",n="[object Proxy]";function a(o){if(!t(o))return!1;var l=r(o);return l==i||l==s||l==e||l==n}return bi=a,bi}var wi,un;function Yl(){if(un)return wi;un=1;var r=Rt(),t=r["__core-js_shared__"];return wi=t,wi}var _i,dn;function Gl(){if(dn)return _i;dn=1;var r=Yl(),t=(function(){var i=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""})();function e(i){return!!t&&t in i}return _i=e,_i}var Ei,pn;function Wl(){if(pn)return Ei;pn=1;var r=Function.prototype,t=r.toString;function e(i){if(i!=null){try{return t.call(i)}catch{}try{return i+""}catch{}}return""}return Ei=e,Ei}var Si,fn;function Jl(){if(fn)return Si;fn=1;var r=yi(),t=Gl(),e=Et(),i=Wl(),s=/[\\^$.*+?()[\]{}|]/g,n=/^\[object .+?Constructor\]$/,a=Function.prototype,o=Object.prototype,l=a.toString,h=o.hasOwnProperty,d=RegExp("^"+l.call(h).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function u(f){if(!e(f)||t(f))return!1;var p=r(f)?d:n;return p.test(i(f))}return Si=u,Si}var Ti,gn;function Zl(){if(gn)return Ti;gn=1;function r(t,e){return t?.[e]}return Ti=r,Ti}var Ci,mn;function Ai(){if(mn)return Ci;mn=1;var r=Jl(),t=Zl();function e(i,s){var n=t(i,s);return r(n)?n:void 0}return Ci=e,Ci}var Ii,$n;function vn(){if($n)return Ii;$n=1;var r=Ai(),t=Rt(),e=r(t,"Map");return Ii=e,Ii}var xi,bn;function Ce(){if(bn)return xi;bn=1;var r=Ai(),t=r(Object,"create");return xi=t,xi}var Oi,yn;function Xl(){if(yn)return Oi;yn=1;var r=Ce();function t(){this.__data__=r?r(null):{},this.size=0}return Oi=t,Oi}var Di,wn;function Ql(){if(wn)return Di;wn=1;function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}return Di=r,Di}var ki,_n;function th(){if(_n)return ki;_n=1;var r=Ce(),t="__lodash_hash_undefined__",e=Object.prototype,i=e.hasOwnProperty;function s(n){var a=this.__data__;if(r){var o=a[n];return o===t?void 0:o}return i.call(a,n)?a[n]:void 0}return ki=s,ki}var Li,En;function eh(){if(En)return Li;En=1;var r=Ce(),t=Object.prototype,e=t.hasOwnProperty;function i(s){var n=this.__data__;return r?n[s]!==void 0:e.call(n,s)}return Li=i,Li}var Pi,Sn;function ih(){if(Sn)return Pi;Sn=1;var r=Ce(),t="__lodash_hash_undefined__";function e(i,s){var n=this.__data__;return this.size+=this.has(i)?0:1,n[i]=r&&s===void 0?t:s,this}return Pi=e,Pi}var Mi,Tn;function sh(){if(Tn)return Mi;Tn=1;var r=Xl(),t=Ql(),e=th(),i=eh(),s=ih();function n(a){var o=-1,l=a==null?0:a.length;for(this.clear();++o<l;){var h=a[o];this.set(h[0],h[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,Mi=n,Mi}var Ri,Cn;function rh(){if(Cn)return Ri;Cn=1;var r=sh(),t=Se(),e=vn();function i(){this.size=0,this.__data__={hash:new r,map:new(e||t),string:new r}}return Ri=i,Ri}var qi,An;function nh(){if(An)return qi;An=1;function r(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}return qi=r,qi}var ji,In;function Ae(){if(In)return ji;In=1;var r=nh();function t(e,i){var s=e.__data__;return r(i)?s[typeof i=="string"?"string":"hash"]:s.map}return ji=t,ji}var Hi,xn;function ah(){if(xn)return Hi;xn=1;var r=Ae();function t(e){var i=r(this,e).delete(e);return this.size-=i?1:0,i}return Hi=t,Hi}var Ui,On;function oh(){if(On)return Ui;On=1;var r=Ae();function t(e){return r(this,e).get(e)}return Ui=t,Ui}var Vi,Dn;function lh(){if(Dn)return Vi;Dn=1;var r=Ae();function t(e){return r(this,e).has(e)}return Vi=t,Vi}var Bi,kn;function hh(){if(kn)return Bi;kn=1;var r=Ae();function t(e,i){var s=r(this,e),n=s.size;return s.set(e,i),this.size+=s.size==n?0:1,this}return Bi=t,Bi}var Ni,Ln;function ch(){if(Ln)return Ni;Ln=1;var r=rh(),t=ah(),e=oh(),i=lh(),s=hh();function n(a){var o=-1,l=a==null?0:a.length;for(this.clear();++o<l;){var h=a[o];this.set(h[0],h[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,Ni=n,Ni}var Fi,Pn;function uh(){if(Pn)return Fi;Pn=1;var r=Se(),t=vn(),e=ch(),i=200;function s(n,a){var o=this.__data__;if(o instanceof r){var l=o.__data__;if(!t||l.length<i-1)return l.push([n,a]),this.size=++o.size,this;o=this.__data__=new e(l)}return o.set(n,a),this.size=o.size,this}return Fi=s,Fi}var zi,Mn;function dh(){if(Mn)return zi;Mn=1;var r=Se(),t=Vl(),e=Bl(),i=Nl(),s=Fl(),n=uh();function a(o){var l=this.__data__=new r(o);this.size=l.size}return a.prototype.clear=t,a.prototype.delete=e,a.prototype.get=i,a.prototype.has=s,a.prototype.set=n,zi=a,zi}var Ki,Rn;function qn(){if(Rn)return Ki;Rn=1;var r=Ai(),t=(function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch{}})();return Ki=t,Ki}var Yi,jn;function Gi(){if(jn)return Yi;jn=1;var r=qn();function t(e,i,s){i=="__proto__"&&r?r(e,i,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[i]=s}return Yi=t,Yi}var Wi,Hn;function Un(){if(Hn)return Wi;Hn=1;var r=Gi(),t=_e();function e(i,s,n){(n!==void 0&&!t(i[s],n)||n===void 0&&!(s in i))&&r(i,s,n)}return Wi=e,Wi}var Ji,Vn;function ph(){if(Vn)return Ji;Vn=1;function r(t){return function(e,i,s){for(var n=-1,a=Object(e),o=s(e),l=o.length;l--;){var h=o[t?l:++n];if(i(a[h],h,a)===!1)break}return e}}return Ji=r,Ji}var Zi,Bn;function fh(){if(Bn)return Zi;Bn=1;var r=ph(),t=r();return Zi=t,Zi}var Gt={exports:{}};Gt.exports;var Nn;function gh(){return Nn||(Nn=1,(function(r,t){var e=Rt(),i=t&&!t.nodeType&&t,s=i&&!0&&r&&!r.nodeType&&r,n=s&&s.exports===i,a=n?e.Buffer:void 0,o=a?a.allocUnsafe:void 0;function l(h,d){if(d)return h.slice();var u=h.length,f=o?o(u):new h.constructor(u);return h.copy(f),f}r.exports=l})(Gt,Gt.exports)),Gt.exports}var Xi,Fn;function mh(){if(Fn)return Xi;Fn=1;var r=Rt(),t=r.Uint8Array;return Xi=t,Xi}var Qi,zn;function $h(){if(zn)return Qi;zn=1;var r=mh();function t(e){var i=new e.constructor(e.byteLength);return new r(i).set(new r(e)),i}return Qi=t,Qi}var ts,Kn;function vh(){if(Kn)return ts;Kn=1;var r=$h();function t(e,i){var s=i?r(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}return ts=t,ts}var es,Yn;function bh(){if(Yn)return es;Yn=1;function r(t,e){var i=-1,s=t.length;for(e||(e=Array(s));++i<s;)e[i]=t[i];return e}return es=r,es}var is,Gn;function yh(){if(Gn)return is;Gn=1;var r=Et(),t=Object.create,e=(function(){function i(){}return function(s){if(!r(s))return{};if(t)return t(s);i.prototype=s;var n=new i;return i.prototype=void 0,n}})();return is=e,is}var ss,Wn;function wh(){if(Wn)return ss;Wn=1;function r(t,e){return function(i){return t(e(i))}}return ss=r,ss}var rs,Jn;function Zn(){if(Jn)return rs;Jn=1;var r=wh(),t=r(Object.getPrototypeOf,Object);return rs=t,rs}var ns,Xn;function Qn(){if(Xn)return ns;Xn=1;var r=Object.prototype;function t(e){var i=e&&e.constructor,s=typeof i=="function"&&i.prototype||r;return e===s}return ns=t,ns}var as,ta;function _h(){if(ta)return as;ta=1;var r=yh(),t=Zn(),e=Qn();function i(s){return typeof s.constructor=="function"&&!e(s)?r(t(s)):{}}return as=i,as}var os,ea;function Wt(){if(ea)return os;ea=1;function r(t){return t!=null&&typeof t=="object"}return os=r,os}var ls,ia;function Eh(){if(ia)return ls;ia=1;var r=Te(),t=Wt(),e="[object Arguments]";function i(s){return t(s)&&r(s)==e}return ls=i,ls}var hs,sa;function ra(){if(sa)return hs;sa=1;var r=Eh(),t=Wt(),e=Object.prototype,i=e.hasOwnProperty,s=e.propertyIsEnumerable,n=r((function(){return arguments})())?r:function(a){return t(a)&&i.call(a,"callee")&&!s.call(a,"callee")};return hs=n,hs}var cs,na;function aa(){if(na)return cs;na=1;var r=Array.isArray;return cs=r,cs}var us,oa;function la(){if(oa)return us;oa=1;var r=9007199254740991;function t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=r}return us=t,us}var ds,ha;function ps(){if(ha)return ds;ha=1;var r=yi(),t=la();function e(i){return i!=null&&t(i.length)&&!r(i)}return ds=e,ds}var fs,ca;function Sh(){if(ca)return fs;ca=1;var r=ps(),t=Wt();function e(i){return t(i)&&r(i)}return fs=e,fs}var Jt={exports:{}},gs,ua;function Th(){if(ua)return gs;ua=1;function r(){return!1}return gs=r,gs}Jt.exports;var da;function pa(){return da||(da=1,(function(r,t){var e=Rt(),i=Th(),s=t&&!t.nodeType&&t,n=s&&!0&&r&&!r.nodeType&&r,a=n&&n.exports===s,o=a?e.Buffer:void 0,l=o?o.isBuffer:void 0,h=l||i;r.exports=h})(Jt,Jt.exports)),Jt.exports}var ms,fa;function Ch(){if(fa)return ms;fa=1;var r=Te(),t=Zn(),e=Wt(),i="[object Object]",s=Function.prototype,n=Object.prototype,a=s.toString,o=n.hasOwnProperty,l=a.call(Object);function h(d){if(!e(d)||r(d)!=i)return!1;var u=t(d);if(u===null)return!0;var f=o.call(u,"constructor")&&u.constructor;return typeof f=="function"&&f instanceof f&&a.call(f)==l}return ms=h,ms}var $s,ga;function Ah(){if(ga)return $s;ga=1;var r=Te(),t=la(),e=Wt(),i="[object Arguments]",s="[object Array]",n="[object Boolean]",a="[object Date]",o="[object Error]",l="[object Function]",h="[object Map]",d="[object Number]",u="[object Object]",f="[object RegExp]",p="[object Set]",m="[object String]",v="[object WeakMap]",y="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",T="[object Float64Array]",O="[object Int8Array]",A="[object Int16Array]",P="[object Int32Array]",I="[object Uint8Array]",D="[object Uint8ClampedArray]",j="[object Uint16Array]",x="[object Uint32Array]",S={};S[w]=S[T]=S[O]=S[A]=S[P]=S[I]=S[D]=S[j]=S[x]=!0,S[i]=S[s]=S[y]=S[n]=S[_]=S[a]=S[o]=S[l]=S[h]=S[d]=S[u]=S[f]=S[p]=S[m]=S[v]=!1;function R(q){return e(q)&&t(q.length)&&!!S[r(q)]}return $s=R,$s}var vs,ma;function Ih(){if(ma)return vs;ma=1;function r(t){return function(e){return t(e)}}return vs=r,vs}var Zt={exports:{}};Zt.exports;var $a;function xh(){return $a||($a=1,(function(r,t){var e=en(),i=t&&!t.nodeType&&t,s=i&&!0&&r&&!r.nodeType&&r,n=s&&s.exports===i,a=n&&e.process,o=(function(){try{var l=s&&s.require&&s.require("util").types;return l||a&&a.binding&&a.binding("util")}catch{}})();r.exports=o})(Zt,Zt.exports)),Zt.exports}var bs,va;function ba(){if(va)return bs;va=1;var r=Ah(),t=Ih(),e=xh(),i=e&&e.isTypedArray,s=i?t(i):r;return bs=s,bs}var ys,ya;function wa(){if(ya)return ys;ya=1;function r(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}return ys=r,ys}var ws,_a;function Oh(){if(_a)return ws;_a=1;var r=Gi(),t=_e(),e=Object.prototype,i=e.hasOwnProperty;function s(n,a,o){var l=n[a];(!(i.call(n,a)&&t(l,o))||o===void 0&&!(a in n))&&r(n,a,o)}return ws=s,ws}var _s,Ea;function Dh(){if(Ea)return _s;Ea=1;var r=Oh(),t=Gi();function e(i,s,n,a){var o=!n;n||(n={});for(var l=-1,h=s.length;++l<h;){var d=s[l],u=a?a(n[d],i[d],d,n,i):void 0;u===void 0&&(u=i[d]),o?t(n,d,u):r(n,d,u)}return n}return _s=e,_s}var Es,Sa;function kh(){if(Sa)return Es;Sa=1;function r(t,e){for(var i=-1,s=Array(t);++i<t;)s[i]=e(i);return s}return Es=r,Es}var Ss,Ta;function Ca(){if(Ta)return Ss;Ta=1;var r=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function e(i,s){var n=typeof i;return s=s??r,!!s&&(n=="number"||n!="symbol"&&t.test(i))&&i>-1&&i%1==0&&i<s}return Ss=e,Ss}var Ts,Aa;function Lh(){if(Aa)return Ts;Aa=1;var r=kh(),t=ra(),e=aa(),i=pa(),s=Ca(),n=ba(),a=Object.prototype,o=a.hasOwnProperty;function l(h,d){var u=e(h),f=!u&&t(h),p=!u&&!f&&i(h),m=!u&&!f&&!p&&n(h),v=u||f||p||m,y=v?r(h.length,String):[],_=y.length;for(var w in h)(d||o.call(h,w))&&!(v&&(w=="length"||p&&(w=="offset"||w=="parent")||m&&(w=="buffer"||w=="byteLength"||w=="byteOffset")||s(w,_)))&&y.push(w);return y}return Ts=l,Ts}var Cs,Ia;function Ph(){if(Ia)return Cs;Ia=1;function r(t){var e=[];if(t!=null)for(var i in Object(t))e.push(i);return e}return Cs=r,Cs}var As,xa;function Mh(){if(xa)return As;xa=1;var r=Et(),t=Qn(),e=Ph(),i=Object.prototype,s=i.hasOwnProperty;function n(a){if(!r(a))return e(a);var o=t(a),l=[];for(var h in a)h=="constructor"&&(o||!s.call(a,h))||l.push(h);return l}return As=n,As}var Is,Oa;function Da(){if(Oa)return Is;Oa=1;var r=Lh(),t=Mh(),e=ps();function i(s){return e(s)?r(s,!0):t(s)}return Is=i,Is}var xs,ka;function Rh(){if(ka)return xs;ka=1;var r=Dh(),t=Da();function e(i){return r(i,t(i))}return xs=e,xs}var Os,La;function qh(){if(La)return Os;La=1;var r=Un(),t=gh(),e=vh(),i=bh(),s=_h(),n=ra(),a=aa(),o=Sh(),l=pa(),h=yi(),d=Et(),u=Ch(),f=ba(),p=wa(),m=Rh();function v(y,_,w,T,O,A,P){var I=p(y,w),D=p(_,w),j=P.get(D);if(j){r(y,w,j);return}var x=A?A(I,D,w+"",y,_,P):void 0,S=x===void 0;if(S){var R=a(D),q=!R&&l(D),M=!R&&!q&&f(D);x=D,R||q||M?a(I)?x=I:o(I)?x=i(I):q?(S=!1,x=t(D,!0)):M?(S=!1,x=e(D,!0)):x=[]:u(D)||n(D)?(x=I,n(I)?x=m(I):(!d(I)||h(I))&&(x=s(D))):S=!1}S&&(P.set(D,x),O(x,D,T,A,P),P.delete(D)),r(y,w,x)}return Os=v,Os}var Ds,Pa;function jh(){if(Pa)return Ds;Pa=1;var r=dh(),t=Un(),e=fh(),i=qh(),s=Et(),n=Da(),a=wa();function o(l,h,d,u,f){l!==h&&e(h,function(p,m){if(f||(f=new r),s(p))i(l,h,m,d,o,u,f);else{var v=u?u(a(l,m),p,m+"",l,h,f):void 0;v===void 0&&(v=p),t(l,m,v)}},n)}return Ds=o,Ds}var ks,Ma;function Ra(){if(Ma)return ks;Ma=1;function r(t){return t}return ks=r,ks}var Ls,qa;function Hh(){if(qa)return Ls;qa=1;function r(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}return Ls=r,Ls}var Ps,ja;function Uh(){if(ja)return Ps;ja=1;var r=Hh(),t=Math.max;function e(i,s,n){return s=t(s===void 0?i.length-1:s,0),function(){for(var a=arguments,o=-1,l=t(a.length-s,0),h=Array(l);++o<l;)h[o]=a[s+o];o=-1;for(var d=Array(s+1);++o<s;)d[o]=a[o];return d[s]=n(h),r(i,this,d)}}return Ps=e,Ps}var Ms,Ha;function Vh(){if(Ha)return Ms;Ha=1;function r(t){return function(){return t}}return Ms=r,Ms}var Rs,Ua;function Bh(){if(Ua)return Rs;Ua=1;var r=Vh(),t=qn(),e=Ra(),i=t?function(s,n){return t(s,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:e;return Rs=i,Rs}var qs,Va;function Nh(){if(Va)return qs;Va=1;var r=800,t=16,e=Date.now;function i(s){var n=0,a=0;return function(){var o=e(),l=t-(o-a);if(a=o,l>0){if(++n>=r)return arguments[0]}else n=0;return s.apply(void 0,arguments)}}return qs=i,qs}var js,Ba;function Fh(){if(Ba)return js;Ba=1;var r=Bh(),t=Nh(),e=t(r);return js=e,js}var Hs,Na;function zh(){if(Na)return Hs;Na=1;var r=Ra(),t=Uh(),e=Fh();function i(s,n){return e(t(s,n,r),s+"")}return Hs=i,Hs}var Us,Fa;function Kh(){if(Fa)return Us;Fa=1;var r=_e(),t=ps(),e=Ca(),i=Et();function s(n,a,o){if(!i(o))return!1;var l=typeof a;return(l=="number"?t(o)&&e(a,o.length):l=="string"&&a in o)?r(o[a],n):!1}return Us=s,Us}var Vs,za;function Yh(){if(za)return Vs;za=1;var r=zh(),t=Kh();function e(i){return r(function(s,n){var a=-1,o=n.length,l=o>1?n[o-1]:void 0,h=o>2?n[2]:void 0;for(l=i.length>3&&typeof l=="function"?(o--,l):void 0,h&&t(n[0],n[1],h)&&(l=o<3?void 0:l,o=1),s=Object(s);++a<o;){var d=n[a];d&&i(s,d,a,l)}return s})}return Vs=e,Vs}var Bs,Ka;function Gh(){if(Ka)return Bs;Ka=1;var r=jh(),t=Yh(),e=t(function(i,s,n){r(i,s,n)});return Bs=e,Bs}var Wh=Gh();const Jh=Vr(Wh);var Zh=Object.defineProperty,L=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Zh(t,e,s),s};const Ie=r=>{var i;const t=(i=class extends r{constructor(){super(...arguments),this.toggleSelector="- *",this.trigger="click",this.disabled=!1,this.placement="bottom-start",this.offset=8,this.matchWidth=!1,this.arrow=!1,this.label="",this.describedby="",this.delayShow=0,this.delayHide=0,this.duration=200,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.closeOnScroll=!1,this.focusTrap=!1,this.returnFocus=!0,this.isOpen=!1,this.$dropCls={drop:"",arrow:""},this.$dropStl={drop:"",arrow:""},this.stackIndex=0,this.handleToggleClick=n=>{this.disabled||(n.preventDefault(),n.stopPropagation(),this.toggle())},this.clearHideTimeout=()=>{clearTimeout(this.hideTimeout)},this.handleMouseEnter=()=>{this.disabled||(this.clearHideTimeout(),this.showTimeout=window.setTimeout(()=>{this.show()},this.delayShow))},this.handleMouseLeave=()=>{this.disabled||(clearTimeout(this.showTimeout),this.hideTimeout=window.setTimeout(()=>{this.hide()},this.delayHide))},this.handleKeyDown=n=>{this.disabled||((n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggle()),this.focusTrap&&this.isOpen&&n.key==="Tab"&&this.handleFocusTrap(n))},this.handleEscapeKey=n=>{if(n.key==="Escape"&&i.openDrops.length>0){const a=i.openDrops[i.openDrops.length-1];a===this&&(n.preventDefault(),a.hide())}},this.handleScroll=()=>{this.isOpen&&this.hide()},this.handleOutsideClick=n=>{if(i.openDrops.length===0||i.openDrops[i.openDrops.length-1]!==this)return;const a=n.target;i.openDrops.some(l=>l.isConnected&&(l.contains(a)||l.dropEl?.contains(a)||l.toggleEl?.contains(a)))||[...i.openDrops].reverse().forEach(h=>h.hide())},this.handleDropMouseEnter=()=>{this.clearHideTimeout()},this.handleDropMouseLeave=()=>{this.handleMouseLeave()}}get $floatingConfig(){return"floating"in this.$config&&typeof this.$config=="object"?this.$config.floating:{}}onDropOpen(){}onDropClose(){}onConfigChanged(){this.isOpen&&this.dropEl&&this.toggleEl&&this.updatePosition()}onDropPositioned(n){}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this.initializeToggle(),this.setupEventListeners()})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.removeFromStack()}updated(n){super.updated(n),n.has("disabled")&&(this.disabled&&(this.isOpen&&this.hide(),clearTimeout(this.showTimeout),clearTimeout(this.hideTimeout)),this.updateToggleDisabledState())}initializeToggle(){if(this.toggleSelector==="- *")this.toggleEl=this.previousElementSibling;else{const a=this.parentElement;a&&(this.toggleEl=a.querySelector(this.toggleSelector))}if(!this.toggleEl){console.warn("Droppable: Toggle element not found");return}const n=this.id||`drop-${Math.random().toString(36).substr(2,9)}`;this.id||(this.id=n),this.toggleEl.setAttribute("aria-haspopup","dialog"),this.toggleEl.setAttribute("aria-expanded","false"),this.toggleEl.setAttribute("aria-controls",n),!this.toggleEl.hasAttribute("tabindex")&&this.toggleEl.tagName!=="BUTTON"&&this.toggleEl.tagName!=="A"&&this.toggleEl.setAttribute("tabindex","0"),this.updateToggleDisabledState()}updateToggleDisabledState(){this.toggleEl&&(this.disabled?(this.toggleEl.setAttribute("aria-disabled","true"),this.toggleEl.tagName==="BUTTON"&&(this.toggleEl.disabled=!0)):(this.toggleEl.removeAttribute("aria-disabled"),this.toggleEl.tagName==="BUTTON"&&(this.toggleEl.disabled=!1)))}setupEventListeners(){if(!this.toggleEl)return;this.trigger.split(",").map(a=>a.trim()).forEach(a=>{switch(a){case"click":this.toggleEl.addEventListener("click",this.handleToggleClick);break;case"hover":this.toggleEl.addEventListener("mouseenter",this.handleMouseEnter),this.toggleEl.addEventListener("mouseleave",this.handleMouseLeave);break}}),this.toggleEl.addEventListener("keydown",this.handleKeyDown),this.closeOnOutsideClick&&document.addEventListener("mousedown",this.handleOutsideClick),this.closeOnEscape&&document.addEventListener("keydown",this.handleEscapeKey),this.closeOnScroll&&window.addEventListener("scroll",this.handleScroll,!0)}handleFocusTrap(n){if(!this.dropEl||(this.focusableElements||(this.focusableElements=Array.from(this.dropEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))),this.focusableElements.length===0))return;const a=this.focusableElements[0],o=this.focusableElements[this.focusableElements.length-1];n.shiftKey?document.activeElement===a&&(n.preventDefault(),o.focus()):document.activeElement===o&&(n.preventDefault(),a.focus())}toggle(){this.disabled||(this.isOpen?this.hide():this.show())}async show(){if(!(this.isOpen||this.disabled)&&(this.isOpen=!0,this.addToStack(),this.returnFocus&&(this.lastFocusedElement=document.activeElement),this.toggleEl?.setAttribute("aria-expanded","true"),this.onDropOpen(),this.dispatchEvent(new CustomEvent("open",{detail:{drop:this},bubbles:!0})),await this.updateComplete,this.startAutoUpdate(),this.focusTrap&&this.dropEl)){const n=Array.from(this.dropEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));n.length>0&&(n[0].focus(),this.focusableElements=n)}}async hide(){this.isOpen&&(this.isOpen=!1,this.toggleEl?.setAttribute("aria-expanded","false"),this.onDropClose(),this.dispatchEvent(new CustomEvent("close",{detail:{drop:this},bubbles:!0})),this.returnFocus&&this.lastFocusedElement&&(this.lastFocusedElement.focus(),this.lastFocusedElement=void 0),this.focusableElements=void 0,this.removeFromStack(),this.stopAutoUpdate())}addToStack(){let n=this.parentElement;for(;n;){if(n instanceof i){const a=n;if(a.isOpen){this.parentDrop=a;break}}n=n.parentElement}this.stackIndex=i.openDrops.length,i.openDrops.push(this),this.stackIndex>0&&this.dispatchEvent(new CustomEvent("stack",{detail:{drop:this,stackIndex:this.stackIndex,parentDrop:this.parentDrop},bubbles:!0}))}removeFromStack(){const n=i.openDrops.indexOf(this);if(n===-1)return;i.openDrops.slice(n+1).forEach(o=>{o.isOpen&&o.hide()}),i.openDrops.splice(n,1),this.parentDrop=void 0,this.stackIndex=0}getMiddleware(){const n=[Ol(this.offset),kl(),Dl({padding:5})];return this.matchWidth&&n.push(Ll({apply({rects:a,elements:o}){Object.assign(o.floating.style,{width:`${a.reference.width}px`})}})),this.arrow&&this.arrowEl&&n.push(Pl({element:this.arrowEl,padding:5})),n}startAutoUpdate(){!this.dropEl||!this.toggleEl||(this.stopAutoUpdate(),this.cleanupAutoUpdate=xl(this.toggleEl,this.dropEl,()=>this.updatePosition(),{ancestorScroll:!this.closeOnScroll,ancestorResize:!0,elementResize:!0,layoutShift:!0}))}stopAutoUpdate(){this.cleanupAutoUpdate&&(this.cleanupAutoUpdate(),this.cleanupAutoUpdate=void 0)}async updatePosition(){if(!this.dropEl||!this.toggleEl)return;const n=this.getMiddleware(),a=Jh({},{placement:this.placement,middleware:n,strategy:"absolute"},this.$floatingConfig),o=await Ml(this.toggleEl,this.dropEl,a);if(Object.assign(this.dropEl.style,{left:`${o.x}px`,top:`${o.y}px`}),this.arrow&&this.arrowEl&&o.middlewareData.arrow){const{x:l,y:h}=o.middlewareData.arrow;Object.assign(this.arrowEl.style,{left:l!=null?`${l}px`:"",top:h!=null?`${h}px`:""});const d=o.placement.split("-")[0];this.arrowEl.setAttribute("data-side",d)}this.onDropPositioned(o),this.dispatchEvent(new CustomEvent("positioned",{detail:{position:o},bubbles:!0}))}updateFloating(){this.isOpen&&this.updatePosition()}cleanup(){this.toggleEl&&(this.toggleEl.removeEventListener("click",this.handleToggleClick),this.toggleEl.removeEventListener("mouseenter",this.handleMouseEnter),this.toggleEl.removeEventListener("mouseleave",this.handleMouseLeave),this.toggleEl.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("mousedown",this.handleOutsideClick),document.removeEventListener("keydown",this.handleEscapeKey),window.removeEventListener("scroll",this.handleScroll,!0),this.stopAutoUpdate(),clearTimeout(this.showTimeout),clearTimeout(this.hideTimeout)}},i.openDrops=[],i);return L([g({type:String,attribute:"toggle"})],t.prototype,"toggleSelector"),L([g({type:String})],t.prototype,"trigger"),L([g({type:Boolean,reflect:!0})],t.prototype,"disabled"),L([g({type:String})],t.prototype,"placement"),L([g({type:Number})],t.prototype,"offset"),L([g({type:Boolean,attribute:"match-width"})],t.prototype,"matchWidth"),L([g({type:Boolean})],t.prototype,"arrow"),L([g({type:String})],t.prototype,"label"),L([g({type:String})],t.prototype,"describedby"),L([g({type:Number,attribute:"delay-show"})],t.prototype,"delayShow"),L([g({type:Number,attribute:"delay-hide"})],t.prototype,"delayHide"),L([g({type:Number})],t.prototype,"duration"),L([g({type:Boolean,attribute:"close-on-outside-click"})],t.prototype,"closeOnOutsideClick"),L([g({type:Boolean,attribute:"close-on-escape"})],t.prototype,"closeOnEscape"),L([g({type:Boolean,attribute:"close-on-scroll"})],t.prototype,"closeOnScroll"),L([g({type:Boolean,attribute:"focus-trap"})],t.prototype,"focusTrap"),L([g({type:Boolean,attribute:"return-focus"})],t.prototype,"returnFocus"),L([b()],t.prototype,"isOpen"),L([b()],t.prototype,"$dropCls"),L([b()],t.prototype,"$dropStl"),L([oe("[data-drop]")],t.prototype,"dropEl"),L([oe("[data-arrow]")],t.prototype,"arrowEl"),t};var Xh=Object.getOwnPropertyDescriptor,Qh=(r,t,e,i)=>{for(var s=i>1?void 0:i?Xh(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};c.Drop=class extends Ie(C){constructor(){super(...arguments),this["cls-default-element"]="drop"}render(){const t=this.$i18n.label||this.label||void 0,e=this.describedby||void 0,i=1e3+this.stackIndex;return $`
      <div
        data-host-inner
        data-drop
        id="${this.id}"
        class="${this.$dropCls.drop} ${this.stackIndex>0?"nested":""}"
        style="display: ${this.isOpen?"block":"none"}; position: absolute; --drop-duration: ${this.duration}ms; z-index: ${i}; ${this.$dropStl.drop||""}"
        role="dialog"
        aria-modal="${this.focusTrap}"
        aria-label="${t||E}"
        aria-describedby="${e||E}"
        aria-labelledby="${this.toggleEl?.id||E}"
        @mouseenter=${this.trigger.includes("hover")?this.handleDropMouseEnter:E}
        @mouseleave=${this.trigger.includes("hover")?this.handleDropMouseLeave:E}
      >
        ${B(this.$template)}
        ${this.arrow?$`
              <div
                data-arrow
                class="${this.$dropCls.arrow||""}"
                style="position: absolute; ${this.$dropStl.arrow||""}"
              ></div>
            `:E}
      </div>
    `}},c.Drop=Qh([k("fr-drop")],c.Drop);function Xt(r){if(!/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(r))throw new Error("Invalid date format. Expected YYYY-MM-DD or YYYY-MM-DDTHH:MM");const e=new Date(r);if(isNaN(e.getTime()))throw new Error("Invalid date value");return e}function tc(r){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(r))throw new Error("Invalid time format. Use HH:MM (24-hour format)");return r}function ec(r,t,e="en-US"){const i=u=>{if(u>=11&&u<=13)return"th";switch(u%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},s=new Intl.DateTimeFormat(e,{month:"long"}),n=new Intl.DateTimeFormat(e,{month:"short"}),a=new Intl.DateTimeFormat(e,{weekday:"long"}),o=new Intl.DateTimeFormat(e,{weekday:"short"}),l={YYYY:()=>r.getFullYear().toString(),YY:()=>(r.getFullYear()%100).toString().padStart(2,"0"),MMMM:()=>s.format(r),MMM:()=>n.format(r),MM:()=>(r.getMonth()+1).toString().padStart(2,"0"),M:()=>(r.getMonth()+1).toString(),dddd:()=>a.format(r),ddd:()=>o.format(r),Do:()=>r.getDate()+(e.startsWith("en")?i(r.getDate()):""),DD:()=>r.getDate().toString().padStart(2,"0"),D:()=>r.getDate().toString(),HH:()=>r.getHours().toString().padStart(2,"0"),H:()=>r.getHours().toString(),hh:()=>(r.getHours()%12||12).toString().padStart(2,"0"),h:()=>(r.getHours()%12||12).toString(),mm:()=>r.getMinutes().toString().padStart(2,"0"),m:()=>r.getMinutes().toString(),A:()=>r.getHours()>=12?"PM":"AM",a:()=>r.getHours()>=12?"pm":"am"},h=Object.keys(l).sort((u,f)=>f.length-u.length),d=new RegExp(h.join("|"),"g");return t.replace(d,u=>l[u]())}var ic=Object.defineProperty,it=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&ic(t,e,s),s};const Ya=r=>{class t extends r{constructor(){super(...arguments),this.today=!1,this.jumpable=!1,this["starts-with"]=0,this["disabled-dates"]="",this["marked-dates"]="",this["view-date"]=new Date().toISOString().split("T")[0],this.min="",this.max="",this["weekday-format"]="short",this.lang="",this.isDirty=!1}get $viewDate(){const[i,s,n]=this["view-date"].split("-").map(Number);return this.createUTCDate(i,s-1,n)}createUTCDate(i,s,n){return new Date(Date.UTC(i,s,n))}dateToUTC(i){return this.createUTCDate(i.getFullYear(),i.getMonth(),i.getDate())}getTodayUTC(){return this.dateToUTC(new Date)}getUTCDate(i){return this.dateToUTC(i)}isDateInRange(i){if(!this.min&&!this.max)return!0;const s=new Date(i);if(this.min){const n=Xt(this.min);if(s<n)return!1}if(this.max){const n=Xt(this.max);if(n.setDate(n.getDate()+1),s>=n)return!1}return!0}parseDates(i){return i?i.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{try{return Xt(s).toISOString().slice(0,10)}catch{return console.warn(`[fr-calendar] Invalid date format in list: "${s}".`),""}}).filter(Boolean):[]}getTimestampComponent(i){const s=this.lang||void 0;return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,monthName:i.toLocaleDateString(s,{month:"long",timeZone:"UTC"}),day:i.getUTCDate(),dayName:i.toLocaleDateString(s,{weekday:"long",timeZone:"UTC"}),ISOString:i.toISOString()}}$icons(i){const s=super.$icons(i);if(s)return s;switch(i){case"chevron-left":return $`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          `;case"chevron-right":return $`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          `;case"calendar":return $`
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M8 2v4" />
              <path d="M16 2v4" />
              <rect width="18" height="18" x="3" y="4" rx="2" />
              <path d="M3 10h18" />
            </svg>
          `}}}return it([g({type:Boolean})],t.prototype,"today"),it([g({type:Boolean})],t.prototype,"jumpable"),it([g({type:Number})],t.prototype,"starts-with"),it([g({type:String})],t.prototype,"disabled-dates"),it([g({type:String})],t.prototype,"marked-dates"),it([g({type:String})],t.prototype,"view-date"),it([g({type:String})],t.prototype,"min"),it([g({type:String})],t.prototype,"max"),it([g({type:String})],t.prototype,"weekday-format"),it([g({type:String})],t.prototype,"lang"),t};var sc=Object.defineProperty,Qt=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&sc(t,e,s),s};const St=r=>{class t extends r{constructor(){super(...arguments),this.disabled=!1,this.name="",this.placeholder="",this.required=!1,this.value=""}renderHidden(){return typeof this.$value=="string"?this.name?$`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `:"":this.$value.map(i=>$`
              <input name="${this.name}[]" type="hidden" value="${i}" />
            `)}emit(){this.dispatchEvent(new CustomEvent(this["input-event"],{detail:{value:this.$value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.initializeValue()}}return Qt([g({type:Boolean})],t.prototype,"disabled"),Qt([g({type:String})],t.prototype,"name"),Qt([g({type:String})],t.prototype,"placeholder"),Qt([g({type:Boolean})],t.prototype,"required"),Qt([g({type:String})],t.prototype,"value"),t};var rc=Object.defineProperty,nc=Object.getOwnPropertyDescriptor,at=(r,t,e,i)=>{for(var s=i>1?void 0:i?nc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&rc(t,e,s),s};c.InputDate=class extends Ie(Ya(St(C))){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-date:change",this["display-format"]="MMMM DD, YYYY",this["with-time"]=!1,this.clock="12h",this["require-time"]=!1,this.$cls={container:"",button:"","button-text":"",icon:"",drop:"",calendar:"","time-wrapper":"",time:"",arrow:""},this.$stl={container:"",button:"","button-text":"",icon:"",drop:"",calendar:"","time-wrapper":"",time:"",arrow:""}}get $value(){return this.$date&&this.$time?`${this.$date}T${this.$time}`:this.$date?this.$date:""}get $text(){if(this.$value)try{const t=this.$value.includes("T")?new Date(this.$value):new Date(this.$value+"T00:00:00");let e=this["display-format"];if(this["with-time"]&&this.$time){const i=this.clock==="12h"?"h:mm A":"HH:mm";e=`${this["display-format"]} ${i}`}return ec(t,e,this.lang)}catch(t){return console.error("[fr-input-date] Failed to format date:",t),this.$value}return this.placeholder?this.placeholder:this.getI18nText("placeholder",this["with-time"]?{placeholder:"Select a date and time"}:{placeholder:"Select a date"})}connectedCallback(){super.connectedCallback(),this.toggleSelector="button"}firstUpdated(t){super.firstUpdated?.(t);const e=this.dropEl?.querySelector("fr-calendar");if(e&&e.addEventListener("fr-calendar:change",i=>{this.$date=i.detail.value,this["with-time"]||this.hide()}),this["with-time"]){const i=this.dropEl?.querySelector("fr-input-time");i&&i.addEventListener("fr-input-time:input",s=>{this.$time=s.detail.value})}}updated(t){super.updated(t),(t.has("$date")||t.has("$time"))&&this.emit()}initializeValue(){if(this.value)try{if(Xt(this.value),!this.value.includes("T"))this.$date=this.value;else{const[e,i]=this.value.split("T");this.$date=e,this.$time=i}}catch(t){console.error("[fr-input-date] Failed to initialize date value:",t)}}onDropOpen(){}onDropClose(){}get buttonLabel(){const t=this.getI18nText("buttonLabel",{buttonLabel:"Select date"});return this.$value?`${t}, ${this.getI18nText("selected",{selected:"selected"})}: ${this.$text}`:t}render(){const t=this.getI18nText("dialogLabel",{dialogLabel:"Date picker"}),e=1e3+this.stackIndex;return $`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <button
          class="${this.$cls.button}"
          style="${this.$stl.button}"
          type="button"
          ?disabled=${this.disabled}
          aria-label="${this.buttonLabel}"
          aria-haspopup="dialog"
          aria-expanded="${this.isOpen?"true":"false"}"
        >
          <span
            class="${this.$cls["button-text"]}"
            style="${this.$stl["button-text"]}"
          >
            ${this.$text}
          </span>
          ${this.$icons("calendar")||""}
        </button>

        <div
          data-drop
          class="${this.$dropCls.drop} ${this.$cls.drop}"
          style="display: ${this.isOpen?"block":"none"}; position: absolute; z-index: ${e}; ${this.$dropStl.drop||""} ${this.$stl.drop}"
          role="dialog"
          aria-modal="${this.focusTrap}"
          aria-label="${t}"
        >
          <fr-calendar
            class="${this.$cls.calendar}"
            style="${this.$stl.calendar}"
            .starts-with=${this["starts-with"]}
            .disabled-dates=${this["disabled-dates"]}
            .marked-dates=${this["marked-dates"]}
            .i18n=${this.i18n}
            .view-date=${this["view-date"]}
            .min=${this.min}
            .max=${this.max}
            .value=${this.$date||""}
            ?today=${this.today}
            ?jumpable=${this.jumpable}
            .weekday-format=${this["weekday-format"]}
            .lang=${this.lang}
          ></fr-calendar>

          ${this.renderTimeInput()}
          ${this.arrow?$`
                <div
                  data-arrow
                  class="${this.$dropCls.arrow} ${this.$cls.arrow}"
                  style="position: absolute; ${this.$dropStl.arrow||""} ${this.$stl.arrow}"
                ></div>
              `:""}
        </div>

        ${this.renderHidden()}
      </div>
    `}renderTimeInput(){return this["with-time"]?$`
      <div
        class="${this.$cls["time-wrapper"]}"
        style="${this.$stl["time-wrapper"]}"
      >
        <fr-input-time
          class="${this.$cls.time}"
          style="${this.$stl.time}"
          ?required=${this["require-time"]}
          .i18n=${this.i18n}
          .value=${this.$time||""}
          .clock=${this.clock}
          .lang=${this.lang}
        ></fr-input-time>
      </div>
    `:E}},at([g({type:String,attribute:"display-format"})],c.InputDate.prototype,"display-format",2),at([g({type:Boolean,attribute:"with-time"})],c.InputDate.prototype,"with-time",2),at([g({type:String})],c.InputDate.prototype,"clock",2),at([g({type:Boolean,attribute:"require-time"})],c.InputDate.prototype,"require-time",2),at([b()],c.InputDate.prototype,"$date",2),at([b()],c.InputDate.prototype,"$time",2),at([b()],c.InputDate.prototype,"$cls",2),at([b()],c.InputDate.prototype,"$stl",2),c.InputDate=at([k("fr-input-date")],c.InputDate);const Tt=he(class extends ce{constructor(r){if(super(r),r.type!==le.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return K}});const Ga="important",ac=" !"+Ga,oc=he(class extends ce{constructor(r){if(super(r),r.type!==le.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce(((t,e)=>{const i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(r,[t]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const n=typeof s=="string"&&s.endsWith(ac);i.includes("-")||n?e.setProperty(i,n?s.slice(0,-11):s,n?Ga:""):e[i]=s}}return K}});var lc=Object.defineProperty,hc=Object.getOwnPropertyDescriptor,st=(r,t,e,i)=>{for(var s=i>1?void 0:i?hc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&lc(t,e,s),s};c.InputPin=class extends St(C){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-pin:change",this.autofocus=!1,this.length=6,this["input-mode"]="numeric",this["show-labels"]=!1,this.$cls={container:"",wrapper:"",input:"",label:"",description:""},this.$stl={container:"",wrapper:"",input:"",label:"",description:""},this.$pin="",this.$inputs=null,this.groupId=""}get $value(){return this.$pin}get $text(){return""}initializeValue(){if(this.groupId=this.id?`${this.id}-group`:`pin-${Math.random().toString(36).substr(2,9)}`,this.value){const t=this.value.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(t)){console.warn(`[fr-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`);return}this.$pin=t}}firstUpdated(t){this.$inputs=this.renderRoot.querySelectorAll("input[data-pin-input]"),this.setupPasteHandlers(),this.populateInitialValue(),this.announceToScreenReader(this.getI18nText("loaded",{loaded:"PIN input ready"}))}populateInitialValue(){if(!(!this.$pin||!this.$inputs)&&(this.$pin.split("").forEach((t,e)=>{const i=this.$inputs[e];i&&(i.value=t,i.disabled=!1)}),this.$pin.length<this.length)){const t=this.$inputs[this.$pin.length];t&&(t.disabled=!1)}}setupPasteHandlers(){this.$inputs?.forEach(t=>{t.addEventListener("paste",e=>{e.preventDefault();const i=e.clipboardData;i&&this.handlePaste(i.getData("Text"))})})}handlePaste(t){if(!this.$inputs)return;const e=t.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(e)){this.announceToScreenReader(this.getI18nText("invalidCharacter",{invalidCharacter:"Invalid character entered"}));return}this.$pin=e,e.split("").forEach((i,s)=>{const n=this.$inputs[s];n.disabled=!1,n.value=i});for(let i=e.length;i<this.length;i++){const s=this.$inputs[i];s.value="",s.disabled=i!==e.length}if(e.length<this.length){const i=this.$inputs[e.length];i.disabled=!1,i.focus(),this.announceToScreenReader(this.getI18nText("fieldFilled",{fieldFilled:"Field {n} filled"},{n:e.length+1}))}else this.$inputs[this.$focus]?.blur(),this.announceToScreenReader(this.getI18nText("complete",{complete:"PIN entry complete"})),this.emitComplete();this.emit()}handleKeyNavigation(t,e){if(!(this.$focus===void 0||!this.$inputs))switch(t.key){case"Backspace":if(e.value.length===0&&this.$focus>0){t.preventDefault();const i=this.$inputs[this.$focus-1];i.focus(),i.select(),e.disabled=!0}break;case"Delete":if(e.value.length===0){t.preventDefault();const i=this.$inputs[this.$focus+1];i&&(i.focus(),i.setSelectionRange(0,0))}break;case"ArrowLeft":if(t.preventDefault(),this.$focus>0){const i=this.$inputs[this.$focus-1];i.focus(),i.setSelectionRange(1,1)}break;case"ArrowRight":if(t.preventDefault(),this.$focus<this.length-1){const i=this.$inputs[this.$focus+1];i.disabled||(i.focus(),i.setSelectionRange(0,0))}break;case"Home":t.preventDefault(),this.$inputs[0]?.focus();break;case"End":t.preventDefault();for(let i=this.length-1;i>=0;i--){const s=this.$inputs[i];if(!s.disabled){s.focus();break}}break}}handleInput(t,e){if(!this.$inputs)return;const i=t.target;if(this.pattern&&i.value&&!new RegExp(`[${this.pattern}]`).test(i.value)){i.value="",this.announceToScreenReader(this.getI18nText("invalidCharacter",{invalidCharacter:"Invalid character entered"}));return}if(i.value.length===1)if(e<this.length-1){const s=this.$inputs[e+1];s.disabled=!1,s.focus(),this.announceToScreenReader(this.getI18nText("fieldFilled",{fieldFilled:"Field {n} filled"},{n:e+2}))}else i.blur(),this.announceToScreenReader(this.getI18nText("complete",{complete:"PIN entry complete"})),this.emitComplete();this.updatePinValue(),this.emit()}updatePinValue(){if(!this.$inputs)return;let t="";this.$inputs.forEach(e=>{t+=e.value}),this.$pin=t}emitComplete(){this.dispatchEvent(new CustomEvent("fr-input-pin:complete",{detail:{value:this.$value},bubbles:!0,composed:!0}))}announceToScreenReader(t){if(!t)return;const e=this.renderRoot.querySelector('[role="status"]');e&&(e.textContent=t,setTimeout(()=>{e.textContent=""},1e3))}get groupLabel(){return this.getI18nText("label",{label:"PIN Code"})}get groupDescription(){return this.getI18nText("description",{description:"Enter {length}-digit code"},{length:this.length})}getFieldLabel(t){return this.getI18nText("fieldLabel",{fieldLabel:"Digit {n} of {total}"},{n:t+1,total:this.length})}renderInput(t){const e=this.getFieldLabel(t);return $`
      <input
        part="input"
        class=${this.$cls.input}
        style=${this.$stl.input}
        data-pin-input
        type="text"
        inputmode=${this["input-mode"]}
        autocomplete=${t===0?"one-time-code":"off"}
        maxlength="1"
        placeholder="○"
        pattern=${this.pattern||""}
        aria-label=${e}
        .autofocus=${this.autofocus&&t===0}
        .disabled=${this.disabled?!0:t!==0}
        .required=${this.required}
        @keydown=${i=>this.handleKeyNavigation(i,i.target)}
        @input=${i=>this.handleInput(i,t)}
        @focus=${()=>this.$focus=t}
        @blur=${()=>this.$focus=void 0}
      />
    `}renderLabel(){return this.querySelector('[slot="label"]')?$`
        <span
          part="label"
          id="${this.groupId}-label"
          class=${Tt({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.label}
        >
          <slot name="label"></slot>
        </span>
      `:$`
      <span
        part="label"
        id="${this.groupId}-label"
        class=${Tt({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.label}
      >
        ${this.groupLabel}
      </span>
    `}renderDescription(){return this.querySelector('[slot="description"]')?$`
        <span
          part="description"
          id="${this.groupId}-desc"
          class=${Tt({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.description}
        >
          <slot name="description"></slot>
        </span>
      `:$`
      <span
        part="description"
        id="${this.groupId}-desc"
        class=${Tt({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.description}
      >
        ${this.groupDescription}
      </span>
    `}render(){return $`
      <div
        data-host-inner
        part="container"
        class=${Tt(this.$cls)}
        style=${oc(this.$stl)}
        role="group"
        aria-labelledby="${this.groupId}-label ${this.groupId}-desc"
      >
        ${this.renderLabel()} ${this.renderDescription()}

        <div
          part="wrapper"
          class=${this.$cls.wrapper}
          style=${this.$stl.wrapper}
          role="presentation"
        >
          ${Array(this.length).fill("").map((t,e)=>this.renderInput(e))}
        </div>

        <span
          part="live-region"
          role="status"
          aria-live="polite"
          aria-atomic="true"
          class="sr-only"
        ></span>

        ${this.renderHidden()}
      </div>
    `}},st([g({type:Boolean})],c.InputPin.prototype,"autofocus",2),st([g({type:Number})],c.InputPin.prototype,"length",2),st([g({type:String,attribute:"input-mode"})],c.InputPin.prototype,"input-mode",2),st([g({type:String})],c.InputPin.prototype,"pattern",2),st([g({type:Boolean,attribute:"show-labels"})],c.InputPin.prototype,"show-labels",2),st([b()],c.InputPin.prototype,"$cls",2),st([b()],c.InputPin.prototype,"$stl",2),st([b()],c.InputPin.prototype,"$focus",2),st([b()],c.InputPin.prototype,"$pin",2),c.InputPin=st([k("fr-input-pin")],c.InputPin);var cc=Object.defineProperty,uc=Object.getOwnPropertyDescriptor,ft=(r,t,e,i)=>{for(var s=i>1?void 0:i?uc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&cc(t,e,s),s};c.InputRange=class extends St(C){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-range:input",this.multiple=!1,this.min=0,this.max=100,this.step=1,this.label=!1,this["label-position"]="top",this["aria-label"]="",this._lowValue=this.min,this._highValue=this.max,this._label=!1,this.activeKnob=null,this.trackElement=null,this.isDragging=!1,this.defaultI18n={ariaValueText:"Value: {value}",ariaRangeText:"Range from {low} to {high}",lowKnobLabel:"Minimum value",highKnobLabel:"Maximum value",ariaLabel:"Range slider"},this.preventScrolling=t=>{this.isDragging&&t.preventDefault()},this.onPointerStart=(t,e)=>{this.disabled||(t.preventDefault(),t.stopPropagation(),this.activeKnob=e,this.isDragging=!0,t.currentTarget.focus(),document.addEventListener("pointermove",this.onPointerMove,{passive:!1}),document.addEventListener("pointerup",this.onPointerEnd),document.addEventListener("pointercancel",this.onPointerEnd),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onPointerEnd),document.addEventListener("touchcancel",this.onPointerEnd))},this.onPointerMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.clientX);this.handleValueChange(this.activeKnob,e)},this.onTouchMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.touches[0].clientX);this.handleValueChange(this.activeKnob,e)},this.onPointerEnd=()=>{this.isDragging=!1,this.activeKnob=null,this.cleanupEventListeners()},this.onKeyDown=(t,e)=>{if(this.disabled)return;const i=e==="low"?this._lowValue:this._highValue;let s=0;switch(t.key){case"ArrowRight":case"ArrowUp":s=this.step;break;case"ArrowLeft":case"ArrowDown":s=-this.step;break;case"Home":this.handleValueChange(e,e==="low"?this.min:this._lowValue),t.preventDefault();return;case"End":this.handleValueChange(e,e==="high"?this.max:this._highValue),t.preventDefault();return;case"PageUp":s=this.step*10;break;case"PageDown":s=-this.step*10;break;default:return}s&&(t.preventDefault(),this.handleValueChange(e,i+s))}}get $text(){return""}get $value(){return this.multiple?this.value.split(",").map(t=>t.trim()):this.value}connectedCallback(){super.connectedCallback();const t=this.getAttribute("label");this._label=t===""?!0:t||!1,this.addEventListener("touchstart",this.preventScrolling,{passive:!1})}disconnectedCallback(){this.removeEventListener("touchstart",this.preventScrolling),this.cleanupEventListeners(),super.disconnectedCallback?.()}updated(t){(t.has("value")||t.has("multiple"))&&this.parseValue()}initializeValue(){this.value?this.parseValue():(this._lowValue=this.min,this._highValue=this.max,this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue))}parseValue(){if(this.multiple){const[t,e]=this.value.split(",").map(i=>parseFloat(i));t!==void 0&&e!==void 0&&(this._lowValue=this.clamp(t),this._highValue=this.clamp(e))}else this._lowValue=this.clamp(parseFloat(this.value))}formatValue(t){const e=t.toFixed(2);return e.endsWith(".00")?e.slice(0,-3):e}clamp(t){return parseFloat(Math.min(Math.max(t,this.min),this.max).toFixed(2))}valueToPercent(t){return(t-this.min)/(this.max-this.min)*100}positionToValue(t){this.trackElement||(this.trackElement=this.querySelector("[data-range-track]"));const e=this.trackElement.getBoundingClientRect(),i=Math.max(0,Math.min(1,(t-e.left)/e.width));return this.min+i*(this.max-this.min)}updateValue(){this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue),this.emit()}handleValueChange(t,e){e=this.clamp(Math.round(e/this.step)*this.step),t==="low"?this._lowValue=this.multiple?Math.min(e,this._highValue):e:this._highValue=Math.max(e,this._lowValue),this.updateValue(),this.requestUpdate()}cleanupEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerEnd),document.removeEventListener("pointercancel",this.onPointerEnd),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onPointerEnd),document.removeEventListener("touchcancel",this.onPointerEnd)}getAriaValueText(t){return this.multiple?this.getI18nText("ariaRangeText",this.defaultI18n,{low:this.formatValue(this._lowValue),high:this.formatValue(this._highValue)}):this.getI18nText("ariaValueText",this.defaultI18n,{value:this.formatValue(t)})}getKnobAriaLabel(t){const e=t==="low"?"lowKnobLabel":"highKnobLabel";return this.getI18nText(e,this.defaultI18n)}renderKnob(t){const e=t==="low"?this._lowValue:this._highValue,i=this.valueToPercent(e),s=t==="low"?this.min:this._lowValue,n=t==="low"?this.multiple?this._highValue:this.max:this.max,a=this.isDragging&&this.activeKnob===t,o=[this.$cls.knob||"",this.$cls[t==="low"?"knobLow":"knobHigh"]||"",a&&this.$cls.knobDragging||""].filter(Boolean).join(" ");return $`
      <button
        type="button"
        class="${o}"
        part="knob knob-${t} ${a?"knob-dragging":""}"
        role="slider"
        aria-label="${this.getKnobAriaLabel(t)}"
        aria-valuemin="${s}"
        aria-valuemax="${n}"
        aria-valuenow="${e}"
        aria-valuetext="${this.getAriaValueText(e)}"
        aria-disabled="${this.disabled}"
        ?disabled=${this.disabled}
        style="${this.$stl.knob||""}${this.$stl[t==="low"?"knobLow":"knobHigh"]||""}left: ${i}%;"
        data-knob="${t}"
        data-dragging="${a}"
        @pointerdown=${l=>this.onPointerStart(l,t)}
        @touchstart=${l=>this.onPointerStart(l,t)}
        @keydown=${l=>this.onKeyDown(l,t)}
      >
        ${this._label?$`
              <span
                class="${this.$cls.label||""} ${this.$cls[`label-${this["label-position"]}`]||""}"
                part="label label-${this["label-position"]}"
                style="${this.$stl.label||""}"
                data-label-position="${this["label-position"]}"
              >
                ${t==="low"?this.formatValue(e):""}
                ${typeof this.label=="string"?this.label:""}
                ${t==="high"?this.formatValue(e):""}
              </span>
            `:""}
      </button>
    `}render(){const t=this.valueToPercent(this._lowValue),e=this.multiple?this.valueToPercent(this._highValue):t,i=`left: ${this.multiple?t:0}%; width: ${this.multiple?e-t:t}%`,s=this["aria-label"]||this.getI18nText("ariaLabel",this.defaultI18n);return $`
      <div
        data-host-inner
        class="${this.$cls.container||""}"
        part="container"
        style="${this.$stl.container||""}"
        role="group"
        aria-label="${s}"
        data-disabled="${this.disabled}"
        data-multiple="${this.multiple}"
      >
        <div
          class="${this.$cls.runnable||""}"
          part="runnable-track"
          style="${this.$stl.runnable||""}"
          data-range-track
        ></div>
        <div
          class="${this.$cls.fill||""} ${this.$cls.track||""}"
          part="fill-track"
          style="${this.$stl.fill||""}${this.$stl.track||""}${i}"
          data-fill-track
        ></div>
        ${this.renderKnob("low")}
        ${this.multiple?this.renderKnob("high"):""} ${this.renderHidden()}
      </div>
    `}},ft([g({type:Boolean})],c.InputRange.prototype,"multiple",2),ft([g({type:Number})],c.InputRange.prototype,"min",2),ft([g({type:Number})],c.InputRange.prototype,"max",2),ft([g({type:Number})],c.InputRange.prototype,"step",2),ft([g({type:String})],c.InputRange.prototype,"label",2),ft([g({type:String})],c.InputRange.prototype,"label-position",2),ft([g({type:String})],c.InputRange.prototype,"aria-label",2),c.InputRange=ft([k("fr-input-range")],c.InputRange);var xe={exports:{}},dc=xe.exports,Wa;function pc(){return Wa||(Wa=1,(function(r,t){(function(e,i,s){r.exports=s(),r.exports.default=s()})("slugify",dc,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(n,a){if(typeof n!="string")throw new Error("slugify: string argument expected");a=typeof a=="string"?{replacement:a}:a||{};var o=i[a.locale]||{},l=a.replacement===void 0?"-":a.replacement,h=a.trim===void 0?!0:a.trim,d=n.normalize().split("").reduce(function(u,f){var p=o[f];return p===void 0&&(p=e[f]),p===void 0&&(p=f),p===l&&(p=" "),u+p.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return a.strict&&(d=d.replace(/[^A-Za-z0-9\s]/g,"")),h&&(d=d.trim()),d=d.replace(/\s+/g,l),a.lower&&(d=d.toLowerCase()),d}return s.extend=function(n){Object.assign(e,n)},s})})(xe)),xe.exports}var fc=pc();const Ja=Vr(fc);var gc=Object.defineProperty,mc=Object.getOwnPropertyDescriptor,N=(r,t,e,i)=>{for(var s=i>1?void 0:i?mc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&gc(t,e,s),s};c.InputTag=class extends St(C){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-tag:input",this.maxlength=20,this.minlength=1,this.slugify=!1,this["slugify-options"]="",this.delimiters=",",this["allow-duplicates"]=!1,this["max-tags"]=0,this.$input="",this.$slugOptions={lower:!0,strict:!0},this.$tags=[],this.$error="",this.defaultI18n={placeholder:"Add a tag...",removeLabel:"Remove tag",editLabel:"Edit tag",tagListLabel:"Tags",minLengthError:"Tag must be at least {min} characters",maxLengthError:"Tag cannot exceed {max} characters",duplicateError:"Tag already exists",maxTagsError:"Maximum {max} tags allowed",inputLabel:"Tag input"}}get $value(){return this.$tags}get $text(){return""}get delimiterChars(){return this.delimiters.split("")}initializeValue(){this.initializeTags(),this.initializeSlugOptions()}initializeTags(){this.$tags=this.value===""?[]:this.value.split(",")}initializeSlugOptions(){if(!this["slugify-options"])return;const t=ue(this["slugify-options"]);t.replacement&&(this.$slugOptions.replacement=t.replacement),t.remove&&(this.$slugOptions.remove=new RegExp(t.remove,"g")),t.lower&&(this.$slugOptions.lower=t.lower==="true"),t.strict&&(this.$slugOptions.strict=t.strict==="true"),t.locale&&(this.$slugOptions.locale=t.locale),t.trim&&(this.$slugOptions.trim=t.trim==="true")}validateTag(t){return this.$error="",t.length<this.minlength?(this.$error=this.getI18nText("minLengthError",this.defaultI18n,{min:String(this.minlength)}),!1):t.length>this.maxlength?(this.$error=this.getI18nText("maxLengthError",this.defaultI18n,{max:String(this.maxlength)}),!1):!this["allow-duplicates"]&&this.$tags.includes(t)?(this.$error=this.getI18nText("duplicateError",this.defaultI18n),!1):this["max-tags"]>0&&this.$tags.length>=this["max-tags"]?(this.$error=this.getI18nText("maxTagsError",this.defaultI18n,{max:String(this["max-tags"])}),!1):!0}addTag(){if(!this.$input.trim())return;let t=this.$input.trim();this.slugify&&(t=Ja(t,this.$slugOptions)),this.validateTag(t)&&(this.$tags=[...this.$tags,t],this.$input="",this.$error="",this.emit(),this.requestUpdate())}removeTag(t){this.disabled||(this.$tags=this.$tags.filter((e,i)=>i!==t),this.$error="",this.emit(),this.requestUpdate())}editTag(t){this.disabled||(this.$input=this.$tags[t],this.removeTag(t),this.updateComplete.then(()=>{this.renderRoot.querySelector("input")?.focus()}))}handleKeydown(t){switch(t.key){case"Backspace":this.$tags.length>0&&this.$input.length===0&&(t.preventDefault(),this.editTag(this.$tags.length-1));break;case"Enter":t.preventDefault(),this.addTag();break;case"Escape":this.$input&&(t.preventDefault(),this.$input="",this.$error="",this.requestUpdate());break;default:this.delimiterChars.includes(t.key)&&(t.preventDefault(),this.addTag());break}}handleInput(t){const e=t.target;this.$input=e.value,this.$error=""}handlePaste(t){const e=t.clipboardData?.getData("text");if(!e)return;if(this.delimiterChars.some(s=>e.includes(s))){t.preventDefault();const s=new RegExp(`[${this.delimiterChars.join("")}]`);e.split(s).map(a=>a.trim()).filter(a=>a.length>0).forEach(a=>{this.slugify&&(a=Ja(a,this.$slugOptions)),this.validateTag(a)&&(this.$tags=[...this.$tags,a])}),this.$input="",this.emit(),this.requestUpdate()}}renderTag(t,e){const i=this.getI18nText("removeLabel",this.defaultI18n),s=this.getI18nText("editLabel",this.defaultI18n);return $`
      <div
        class="${this.$cls.tag||""}"
        part="tag"
        style="${this.$stl.tag||""}"
        role="listitem"
        data-tag-index="${e}"
      >
        <span
          class="${this.$cls.tagText||""}"
          part="tag-text"
          style="${this.$stl.tagText||""}"
          role="button"
          tabindex="${this.disabled?"-1":"0"}"
          aria-label="${s}: ${t}"
          @click="${()=>this.editTag(e)}"
          @keydown="${n=>{(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.editTag(e))}}"
        >
          ${t}
        </span>
        <button
          type="button"
          class="${this.$cls.tagRemove||""}"
          part="tag-remove"
          style="${this.$stl.tagRemove||""}"
          aria-label="${i}: ${t}"
          ?disabled="${this.disabled}"
          @click="${()=>this.removeTag(e)}"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `}renderError(){return this.$error?$`
      <div
        class="${this.$cls.error||""}"
        part="error"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="polite"
      >
        ${this.$error}
      </div>
    `:""}render(){const t=this.placeholder||this.getI18nText("placeholder",this.defaultI18n),e=this.getI18nText("tagListLabel",this.defaultI18n),i=this.getI18nText("inputLabel",this.defaultI18n);return $`
      <div
        data-host-inner
        class="${this.$cls.container||""}"
        part="container"
        style="${this.$stl.container||""}"
        data-disabled="${this.disabled}"
        data-has-error="${!!this.$error}"
      >
        <div
          class="${this.$cls.tagList||""}"
          part="tag-list"
          style="${this.$stl.tagList||""}"
          role="list"
          aria-label="${e}"
        >
          ${this.$tags.map((s,n)=>this.renderTag(s,n))}
        </div>

        <input
          class="${this.$cls.input||""}"
          part="input"
          style="${this.$stl.input||""}"
          type="text"
          role="textbox"
          aria-label="${i}"
          aria-invalid="${!!this.$error}"
          aria-describedby="${this.$error?"tag-error":""}"
          autocomplete="off"
          placeholder="${t}"
          maxlength="${this.maxlength}"
          .value="${this.$input}"
          ?disabled="${this.disabled}"
          @keydown="${this.handleKeydown}"
          @input="${this.handleInput}"
          @paste="${this.handlePaste}"
        />

        ${this.renderError()} ${this.renderHidden()}
      </div>
    `}},N([g({type:Number})],c.InputTag.prototype,"maxlength",2),N([g({type:Number})],c.InputTag.prototype,"minlength",2),N([g({type:Boolean})],c.InputTag.prototype,"slugify",2),N([g({type:String})],c.InputTag.prototype,"slugify-options",2),N([g({type:String})],c.InputTag.prototype,"delimiters",2),N([g({type:Boolean})],c.InputTag.prototype,"allow-duplicates",2),N([g({type:Number})],c.InputTag.prototype,"max-tags",2),N([b()],c.InputTag.prototype,"$input",2),N([b()],c.InputTag.prototype,"$slugOptions",2),N([b()],c.InputTag.prototype,"$tags",2),N([b()],c.InputTag.prototype,"$error",2),c.InputTag=N([k("fr-input-tag")],c.InputTag);var $c=Object.defineProperty,vc=Object.getOwnPropertyDescriptor,ot=(r,t,e,i)=>{for(var s=i>1?void 0:i?vc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&$c(t,e,s),s};c.InputTime=class extends St(C){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-time:input",this.autofocus=!1,this.now=!1,this.clock="12h",this.min="",this.max="",this.$min=0,this.$meridiem="am",this.defaultI18n={am:"AM",pm:"PM",hourLabel:"Hour",minuteLabel:"Minute",meridiemLabel:"AM/PM",timeLabel:"Time",hourPlaceholder:"HH",minutePlaceholder:"MM",invalidTime:"Invalid time format"}}get $HH(){return this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"00"}get $MM(){return this.$min>=0?this.$min.toString().padStart(2,"0"):"00"}get $value(){if(this.$hour===void 0||this.$hour===null)return"";let t=this.$hour;return this.clock==="12h"&&(this.$meridiem==="pm"?t=this.$hour===12?12:this.$hour+12:t=this.$hour===12?0:this.$hour),`${t.toString().padStart(2,"0")}:${this.$min.toString().padStart(2,"0")}`}get $text(){return""}initializeValue(){this.value?this.parseTimeValue():this.now&&this.setCurrentTime()}updated(t){["$hour","$min","$meridiem"].some(e=>t.has(e))&&this.emit()}parseTimeValue(){try{const t=tc(this.value),[e,i]=t.split(":").map(Number);this.clock==="12h"?this.$hour=e%12||12:this.$hour=e,this.$min=i,this.$meridiem=e<12?"am":"pm"}catch(t){console.error(this.getI18nText("invalidTime",this.defaultI18n),t)}}setCurrentTime(){const t=new Date;this.clock==="12h"?this.$hour=t.getHours()%12||12:this.$hour=t.getHours(),this.$min=t.getMinutes(),this.$meridiem=t.getHours()<12?"am":"pm"}isTimeValid(){const t=this.$value;return t?!(this.min&&t<this.min||this.max&&t>this.max):!0}handleInput(t,e){const i=t.target,s=i.value.replace(/[^0-9]/g,"").substring(0,2),n=parseInt(s);switch(e){case"$hour":this.clock==="12h"?this.$hour=n<=12?n:12:this.$hour=n<=23?n:23;break;case"$min":this.$min=n<=59?n:59;break}i.value=s}handleBlur(t,e){const i=t.target,s=parseInt(i.value);switch(e){case"$hour":if(i.value===""){this.required?i.value=this.$HH:this.$hour=void 0;return}this.clock==="12h"&&s>12?(this.$hour=12,i.value="12"):this.clock==="12h"&&s===0?(this.$hour=12,i.value="12"):this.clock==="24h"&&s>23?(this.$hour=23,i.value="23"):i.value=this.$HH;break;case"$min":s>59&&(this.$min=59),i.value=this.$MM;break}}handleKeydown(t,e){const i=t.target;if((e==="$hour"?this.$hour:this.$min)===void 0&&e==="$hour")return;let n=0,a=!1;switch(t.key){case"ArrowUp":n=1,a=!0;break;case"ArrowDown":n=-1,a=!0;break;case"PageUp":n=e==="$hour"?1:15,a=!0;break;case"PageDown":n=e==="$hour"?-1:-15,a=!0;break}if(a&&n!==0)if(t.preventDefault(),e==="$hour"){const o=this.clock==="12h"?12:23,l=this.clock==="12h"?1:0;let h=(this.$hour||0)+n;h>o&&(h=l),h<l&&(h=o),this.$hour=h,i.value=h.toString().padStart(2,"0")}else{let o=this.$min+n;o>59&&(o=0),o<0&&(o=59),this.$min=o,i.value=o.toString().padStart(2,"0")}}toggleMeridiem(){this.$meridiem=this.$meridiem==="am"?"pm":"am"}handleMeridiemKeydown(t){(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key===" ")&&(t.preventDefault(),this.toggleMeridiem())}renderInput(t){const{min:e,max:i,state:s,key:n}=t,a=s==="$hour",o=a?this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"":this.$hour===void 0?"":this.$min>=0?this.$min.toString().padStart(2,"0"):"00",l=this.getI18nText(a?"hourLabel":"minuteLabel",this.defaultI18n),h=this.getI18nText(a?"hourPlaceholder":"minutePlaceholder",this.defaultI18n),d=a?this.$cls.hourInput||this.$cls.input||"":this.$cls.minuteInput||this.$cls.input||"",u=a?this.$stl.hourInput||this.$stl.input||"":this.$stl.minuteInput||this.$stl.input||"";return $`
      <input
        class="${d}"
        part="${a?"hour-input":"minute-input"} input"
        style="${u}"
        data-key="${n}"
        data-field="${s}"
        type="number"
        inputmode="numeric"
        role="spinbutton"
        aria-label="${l}"
        aria-valuemin="${e}"
        aria-valuemax="${i}"
        aria-valuenow="${a?this.$hour||0:this.$min}"
        aria-invalid="${!this.isTimeValid()}"
        min="${e}"
        max="${i}"
        step="1"
        placeholder="${h}"
        maxlength="2"
        value="${o}"
        .autofocus="${a&&this.autofocus}"
        ?disabled="${this.disabled||!a&&this.$hour===void 0}"
        @keydown="${f=>this.handleKeydown(f,s)}"
        @input="${f=>this.handleInput(f,s)}"
        @blur="${f=>this.handleBlur(f,s)}"
      />
    `}render(){const t=this.getI18nText("timeLabel",this.defaultI18n),e=this.getI18nText("meridiemLabel",this.defaultI18n);let i=$``;if(this.clock==="12h"){const s=this.getI18nText("am",this.defaultI18n),n=this.getI18nText("pm",this.defaultI18n),a=this.$meridiem==="am"?s:n;i=$`
        <button
          class="${this.$cls.meridiemButton||this.$cls.button||""}"
          part="meridiem-button button"
          style="${this.$stl.meridiemButton||this.$stl.button||""}"
          data-key="meridiem"
          data-meridiem="${this.$meridiem}"
          type="button"
          role="switch"
          aria-label="${e}"
          aria-checked="${this.$meridiem==="pm"}"
          ?disabled="${this.disabled||this.$hour===void 0}"
          @click="${o=>{o.preventDefault(),this.toggleMeridiem()}}"
          @keydown="${this.handleMeridiemKeydown}"
        >
          ${a}
        </button>
      `}return $`
      <div
        data-host-inner
        class="${this.$cls.container||""}"
        part="container"
        style="${this.$stl.container||""}"
        role="group"
        aria-label="${t}"
        data-disabled="${this.disabled}"
        data-clock="${this.clock}"
        data-valid="${this.isTimeValid()}"
      >
        ${this.renderInput({min:this.clock==="12h"?1:0,max:this.clock==="12h"?12:23,state:"$hour",key:"$HH"})}
        <span
          class="${this.$cls.separator||""}"
          part="separator"
          style="${this.$stl.separator||""}"
          aria-hidden="true"
        >
          :
        </span>
        ${this.renderInput({min:0,max:59,state:"$min",key:"$MM"})}
        ${i} ${this.renderHidden()}
      </div>
    `}},ot([g({type:Boolean})],c.InputTime.prototype,"autofocus",2),ot([g({type:Boolean})],c.InputTime.prototype,"now",2),ot([g({type:String})],c.InputTime.prototype,"clock",2),ot([g({type:String})],c.InputTime.prototype,"min",2),ot([g({type:String})],c.InputTime.prototype,"max",2),ot([b()],c.InputTime.prototype,"$hour",2),ot([b()],c.InputTime.prototype,"$min",2),ot([b()],c.InputTime.prototype,"$meridiem",2),c.InputTime=ot([k("fr-input-time")],c.InputTime);function bc(r=5){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:r},()=>t.charAt(Math.floor(Math.random()*t.length))).join("")}var yc=Object.defineProperty,wc=Object.getOwnPropertyDescriptor,lt=(r,t,e,i)=>{for(var s=i>1?void 0:i?wc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&yc(t,e,s),s};c.Keyval=class extends C{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.keys="",this.values="",this.sensitive=!1,this.noninsertable=!1,this.max=0,this.min=1,this["aria-label"]="",this.valueVisibility={},this.defaultI18n={headerKey:"Key",headerValue:"Value",placeholderKey:"Enter key",placeholderValue:"Enter value",addRowLabel:"Add row",removeRowLabel:"Remove row",toggleVisibilityLabel:"Toggle visibility",generateRandomLabel:"Generate random value",tableLabel:"Key-value pairs",actionsLabel:"Actions",keyLabel:"Key for row {index}",valueLabel:"Value for row {index}"},this.handleKeyDown=t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&!this.noninsertable&&(t.preventDefault(),this.addRow())}}connectedCallback(){super.connectedCallback(),this.HTMLDataSource||(this.initializeEmptyData(),this.addRow()),this.initializePasswordVisibility()}onDataSourceChanged(){(!this.$data.__||!this.$data.__.options||this.$data.__.options.length===0)&&(this.initializeEmptyData(),this.addRow())}initializeEmptyData(){this.$data={__:{text:"__",options:[]}}}initializePasswordVisibility(){this.sensitive&&this.$data.__&&this.$data.__.options&&this.$data.__.options.forEach((t,e)=>{this.valueVisibility[e]=!1})}canAddRow(){return this.max===0?!0:this.$data.__.options.length<this.max}canRemoveRow(){return this.$data.__.options.length>this.min}addRow(){if(!this.canAddRow())return;this.$data.__||this.initializeEmptyData();const t=this.$data.__.options.length;this.$data.__.options.push({group:"__",value:"",text:"",disabled:!1,selected:!1,data:{gid:""}}),this.sensitive&&(this.valueVisibility[t]=!1),this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelectorAll('[data-field="key"]')[t];i&&i.focus()})}removeRow(t){this.canRemoveRow()&&this.$data.__&&this.$data.__.options&&(this.$data.__.options.splice(t,1),this.reindexVisibilityAfterRemoval(t),this.requestUpdate())}reindexVisibilityAfterRemoval(t){const e={};Object.keys(this.valueVisibility).forEach(i=>{const s=parseInt(i);s<t?e[s]=this.valueVisibility[s]:s>t&&(e[s-1]=this.valueVisibility[s])}),this.valueVisibility=e}handleKeyChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].data.gid=s,this.requestUpdate())}handleValueChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=s,this.requestUpdate())}setRandomValue(t){this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=bc(16),this.valueVisibility[t]=!0,this.requestUpdate())}togglePasswordVisibility(t){this.sensitive&&(this.valueVisibility[t]=!this.valueVisibility[t],this.requestUpdate())}getPasswordVisibility(t){return this.valueVisibility[t]||!1}getInputType(t){return this.sensitive?this.getPasswordVisibility(t)?"text":"password":"text"}$icons(t){const e=super.$icons(t);if(e)return e;switch(t){case"plus":return $`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        `;case"wand":return $`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M15 4V2" />
            <path d="M15 16v-2" />
            <path d="M8 9h2" />
            <path d="M20 9h2" />
            <path d="M17.8 11.8 19 13" />
            <path d="M15 9h.01" />
            <path d="M17.8 6.2 19 5" />
            <path d="m3 21 9-9" />
            <path d="M12.2 6.2 11 5" />
          </svg>
        `;case"eye-off":return $`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
            />
            <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
            <path
              d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
            />
            <path d="m2 2 20 20" />
          </svg>
        `;case"eye":return $`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path
              d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
            />
            <circle cx="12" cy="12" r="3" />
          </svg>
        `;case"trash-2":return $`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 6h18" />
            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
            <line x1="10" x2="10" y1="11" y2="17" />
            <line x1="14" x2="14" y1="11" y2="17" />
          </svg>
        `}}render(){const t=this["aria-label"]||this.getI18nText("tableLabel",this.defaultI18n),e=this.getI18nText("headerKey",this.defaultI18n),i=this.getI18nText("headerValue",this.defaultI18n),s=this.getI18nText("actionsLabel",this.defaultI18n),n=this.getI18nText("addRowLabel",this.defaultI18n);return $`
      <div
        data-host-inner
        class="${this.$cls.container||""}"
        style="${this.$stl.container||""}"
        @keydown="${this.handleKeyDown}"
      >
        <table
          class="${this.$cls.table||""}"
          style="${this.$stl.table||""}"
          role="table"
          aria-label="${t}"
        >
          <thead>
            <tr
              class="${this.$cls.headerRow||""}"
              style="${this.$stl.headerRow||""}"
              role="row"
            >
              <th role="columnheader">${e}</th>
              <th role="columnheader">${i}</th>
              <th role="columnheader">
                ${s}
                ${this.noninsertable?"":$`
                      <button
                        class="${this.$cls.addButton||this.$cls.button||""}"
                        style="${this.$stl.addButton||this.$stl.button||""}"
                        type="button"
                        aria-label="${n}"
                        ?disabled="${!this.canAddRow()}"
                        @click=${()=>this.addRow()}
                      >
                        ${this.$icons("plus")}
                      </button>
                    `}
              </th>
            </tr>
          </thead>
          <tbody>
            ${this.$data.__&&this.$data.__.options?this.$data.__.options.map((a,o)=>{const l=this.getI18nText("keyLabel",this.defaultI18n,{index:String(o+1)}),h=this.getI18nText("valueLabel",this.defaultI18n,{index:String(o+1)}),d=this.getI18nText("placeholderKey",this.defaultI18n),u=this.getI18nText("placeholderValue",this.defaultI18n),f=this.getI18nText("removeRowLabel",this.defaultI18n),p=this.getI18nText("toggleVisibilityLabel",this.defaultI18n),m=this.getI18nText("generateRandomLabel",this.defaultI18n);return $`
                    <tr
                      class="${this.$cls.row||""}"
                      style="${this.$stl.row||""}"
                      role="row"
                      data-row-index="${o}"
                    >
                      <td role="cell">
                        <input
                          class="${this.$cls.keyInput||this.$cls.input||""}"
                          style="${this.$stl.keyInput||this.$stl.input||""}"
                          autocomplete="off"
                          type="text"
                          placeholder="${d}"
                          value="${a.data.gid||""}"
                          aria-label="${l}"
                          data-field="key"
                          @input=${v=>this.handleKeyChange(o,v)}
                        />
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls.valueWrapper||""}"
                          style="${this.$stl.valueWrapper||""}"
                        >
                          ${this.sensitive?$`
                                <button
                                  class="${this.$cls.randomButton||this.$cls.button||""}"
                                  style="${this.$stl.randomButton||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${m}"
                                  ?disabled="${!!a.value}"
                                  @click=${()=>this.setRandomValue(o)}
                                >
                                  ${this.$icons("wand")}
                                </button>
                              `:""}

                          <input
                            class="${this.$cls.valueInput||this.$cls.input||""}"
                            style="${this.$stl.valueInput||this.$stl.input||""}"
                            autocomplete="off"
                            type="${this.getInputType(o)}"
                            placeholder="${u}"
                            name="${a.data.gid||""}"
                            value="${a.value}"
                            aria-label="${h}"
                            data-field="value"
                            ?disabled=${!a.data.gid}
                            @input=${v=>this.handleValueChange(o,v)}
                          />
                        </div>
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls.actions||""}"
                          style="${this.$stl.actions||""}"
                          role="group"
                          aria-label="${s}"
                        >
                          ${this.sensitive?$`
                                <button
                                  class="${this.$cls.toggleButton||this.$cls.button||""}"
                                  style="${this.$stl.toggleButton||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${p}"
                                  aria-pressed="${this.getPasswordVisibility(o)}"
                                  @click=${()=>this.togglePasswordVisibility(o)}
                                >
                                  ${this.getPasswordVisibility(o)?this.$icons("eye-off"):this.$icons("eye")}
                                </button>
                              `:""}
                          <button
                            class="${this.$cls.removeButton||this.$cls.button||""}"
                            style="${this.$stl.removeButton||this.$stl.button||""}"
                            type="button"
                            aria-label="${f}"
                            ?disabled=${!this.canRemoveRow()}
                            @click=${()=>this.removeRow(o)}
                          >
                            ${this.$icons("trash-2")}
                          </button>
                        </div>
                      </td>
                    </tr>
                  `}):""}
          </tbody>
        </table>
      </div>
    `}},lt([g({type:String})],c.Keyval.prototype,"keys",2),lt([g({type:String})],c.Keyval.prototype,"values",2),lt([g({type:Boolean})],c.Keyval.prototype,"sensitive",2),lt([g({type:Boolean})],c.Keyval.prototype,"noninsertable",2),lt([g({type:Number})],c.Keyval.prototype,"max",2),lt([g({type:Number})],c.Keyval.prototype,"min",2),lt([g({type:String})],c.Keyval.prototype,"aria-label",2),lt([b()],c.Keyval.prototype,"valueVisibility",2),c.Keyval=lt([k("fr-keyval")],c.Keyval);var _c=Object.defineProperty,Ec=Object.getOwnPropertyDescriptor,Oe=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ec(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&_c(t,e,s),s};c.Calendar=class extends Ya(St(C)){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-calendar:change",this.$cls={container:"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-btn":"","day-outside-month":"x","day-selected":"x","day-today":"x","day-marked":"x","button-outside-month":"x","button-selected":"x","button-today":"x","button-marked":"x"},this.$stl={container:"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-btn":"","day-outside-month":"","day-selected":"","day-today":"","day-marked":"","button-outside-month":"","button-selected":"","button-today":"","button-marked":""},this.navigate=t=>{const e=t.target;if(!e?.matches("button[data-iso]"))return;const i=Array.from(this.querySelectorAll("button[data-iso]")),s=i.indexOf(e),n=this.getGridPosition(e);if(!n)return;const{rowIndex:a,colIndex:o}=n;let l;const h={ArrowLeft:()=>this.findNextEnabled(i,s-1,-1),ArrowRight:()=>this.findNextEnabled(i,s+1,1),ArrowUp:()=>this.getNextEnabledInColumn(a-1,o,-1),ArrowDown:()=>this.getNextEnabledInColumn(a+1,o,1),Home:()=>this.getRowFirstEnabledButton(a),End:()=>this.getRowLastEnabledButton(a),PageUp:t.ctrlKey||t.metaKey?()=>{this.navigateYear("prev")}:()=>{this.navigateMonth("prev")},PageDown:t.ctrlKey||t.metaKey?()=>{this.navigateYear("next")}:()=>{this.navigateMonth("next")}};if(h[t.key]){t.preventDefault();const d=h[t.key]();d&&(l=d)}else if(t.key==="Enter"||t.key===" "){t.preventDefault(),e.click();return}l?.focus()}}get $value(){return this.$active?this.$active.slice(0,10):""}get $text(){return""}initializeValue(){if(this.value)try{const t=Xt(this.value);this.$active=t.toISOString(),this["view-date"]=t.toISOString().slice(0,10)}catch(t){console.error(`[fr-calendar] Invalid date format for value: "${this.value}".`,t)}else this.today&&(this.$active=this.getTodayUTC().toISOString())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.navigate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.navigate)}updated(t){t.has("$active")&&(this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);e&&this.isDirty&&e.focus()}),this.emit())}findNextEnabled(t,e,i){for(let s=e;s>=0&&s<t.length;s+=i)if(!t[s].disabled)return t[s]}getNextEnabledInColumn(t,e,i){const s=Array.from(this.querySelectorAll("tr"));for(let n=t;n>=0&&n<s.length;n+=i){const a=s[n]?.children[e]?.querySelector("button[data-iso]");if(a&&!a.disabled)return a}}getRowFirstEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).find(i=>!i.disabled)}getRowLastEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).reverse().find(i=>!i.disabled)}getGridPosition(t){const e=t.closest("td"),i=e?.closest("tr");return!i||!e?null:{rowIndex:Array.from(this.querySelectorAll("tr")).indexOf(i),colIndex:Array.from(i.children).indexOf(e)}}select(t){this.$active=t.ISOString,t.month!=="current"&&(this["view-date"]=t.ISOString.slice(0,10)),this.isDirty||(this.isDirty=!0)}navigateYear(t){const[e,i,s]=this["view-date"].split("-"),n=t==="prev"?parseInt(e)-1:parseInt(e)+1;this["view-date"]=`${n}-${i}-${s}`}navigateMonth(t){const[e,i]=this["view-date"].split("-").map(Number);let s=i,n=e;t==="prev"?i===1?(s=12,n-=1):s-=1:i===12?(s=1,n+=1):s+=1,this["view-date"]=`${n}-${s.toString().padStart(2,"0")}-01`}selectMonth(t){const[e]=this["view-date"].split("-");this["view-date"]=`${e}-${(t+1).toString().padStart(2,"0")}-01`}setYear(t){if(/^\d{4}$/.test(t)){const[,e,i]=this["view-date"].split("-");this["view-date"]=`${t}-${e}-${i}`}}get weekdays(){const t=this.lang||void 0,e=[];for(let i=0;i<7;i++){const s=(this["starts-with"]+i)%7,n=this.createUTCDate(2023,0,1+s);e.push(n.toLocaleDateString(t,{weekday:this["weekday-format"],timeZone:"UTC"}))}return e}get calendar(){const[t,e]=this["view-date"].split("-").map(Number),i=this.getTodayUTC().toISOString().slice(0,10),s=this.parseDates(this["marked-dates"]),n=new Set(this.parseDates(this["disabled-dates"])),a=this.createUTCDate(t,e-1,1),o=this.createUTCDate(t,e,0).getUTCDate(),l=this.createUTCDate(t,e-1,0).getUTCDate();let h=(a.getUTCDay()-this["starts-with"]+7)%7;const d=[];let u=1,f=l-h+1,p=1;for(let m=0;m<6;m++){const v=[];for(let y=0;y<7;y++){let _,w,T;m===0&&y<h?(_=this.createUTCDate(t,e-2,f),w=f,T="prev",f++):u>o?(_=this.createUTCDate(t,e,p),w=p,T="next",p++):(_=this.createUTCDate(t,e-1,u),w=u,T="current",u++);const O=_.toISOString(),A=O.slice(0,10);v.push({date:w,month:T,isToday:A===i,isDisabled:n.has(A)||!this.isDateInRange(O),isMarked:s.includes(A),ISOString:O})}if(d.push(v),u>o&&m>=4)break}return d}render(){return $`
      <div
        data-host-inner
        class=${this.$cls.container}
        style=${this.$stl.container}
        role="application"
        aria-label="Calendar"
      >
        ${this.renderHeader()}
        <table class=${this.$cls.grid} style=${this.$stl.grid} role="grid">
          <thead>
            <tr
              class=${this.$cls.weekdays}
              style=${this.$stl.weekdays}
              role="row"
            >
              ${ct(this.weekdays,t=>t,t=>$`<th
                    class=${this.$cls.weekday}
                    style=${this.$stl.weekday}
                    role="columnheader"
                    scope="col"
                  >
                    ${t}
                  </th>`)}
            </tr>
          </thead>
          <tbody>
            ${ct(this.calendar,t=>t[0].ISOString,t=>this.renderWeek(t))}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `}renderHeader(){const{year:t,monthName:e}=this.getTimestampComponent(this.$viewDate),i=this.getI18nText("prevMonth",{prevMonth:"Previous month"}),s=this.getI18nText("nextMonth",{nextMonth:"Next month"});return $`
      <div class=${this.$cls.header} style=${this.$stl.header}>
        ${this.jumpable?E:$`
              <button
                class=${this.$cls["previous-button"]}
                style=${this.$stl["previous-button"]}
                @click=${()=>this.navigateMonth("prev")}
                type="button"
                aria-label=${i}
              >
                ${this.$icons("chevron-left")}
              </button>
            `}

        <div class=${this.$cls.title} style=${this.$stl.title}>
          ${this.jumpable?this.renderJumper():$`<span>${e} ${t}</span>`}
        </div>

        ${this.jumpable?E:$`
              <button
                class=${this.$cls["next-button"]}
                style=${this.$stl["next-button"]}
                @click=${()=>this.navigateMonth("next")}
                type="button"
                aria-label=${s}
              >
                ${this.$icons("chevron-right")}
              </button>
            `}
      </div>
    `}renderJumper(){const{year:t,month:e}=this.getTimestampComponent(this.$viewDate),i=this.lang||void 0,s=Array.from({length:12},(h,d)=>this.createUTCDate(2e3,d,15).toLocaleDateString(i,{month:"long",timeZone:"UTC"})),n=this.getI18nText("prevMonth",{prevMonth:"Previous month"}),a=this.getI18nText("nextMonth",{nextMonth:"Next month"}),o=this.getI18nText("prevYear",{prevYear:"Previous year"}),l=this.getI18nText("nextYear",{nextYear:"Next year"});return $`
      <div class=${this.$cls.jumper} style=${this.$stl.jumper}>
        <div
          class="${this.$cls["jumper-month"]}"
          style=${this.$stl["jumper-month"]}
        >
          <button
            class="${this.$cls["jumper-btn"]}"
            style=${this.$stl["jumper-btn"]}
            @click=${()=>this.navigateMonth("prev")}
            type="button"
            aria-label=${n}
          >
            ${this.$icons("chevron-left")}
          </button>
          <select
            class=${this.$cls["month-select"]}
            style=${this.$stl["month-select"]}
            aria-label=${this.getI18nText("selectMonth",{selectMonth:"Select month"})}
            .value=${(e-1).toString()}
            @change=${h=>this.selectMonth(Number(h.target.value))}
          >
            ${s.map((h,d)=>$`<option value=${d}>${h}</option>`)}
          </select>
          <button
            class="${this.$cls["jumper-month"]}"
            style=${this.$stl["jumper-month"]}
            @click=${()=>this.navigateMonth("next")}
            type="button"
            aria-label=${a}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
        <div
          class="${this.$cls["jumper-year"]}"
          style=${this.$stl["jumper-year"]}
        >
          <button
            class="${this.$cls["jumper-btn"]}"
            style=${this.$stl["jumper-btn"]}
            @click=${()=>this.navigateYear("prev")}
            type="button"
            aria-label=${o}
          >
            ${this.$icons("chevron-left")}
          </button>
          <input
            class=${this.$cls["year-input"]}
            style=${this.$stl["year-input"]}
            type="number"
            step="1"
            aria-label=${this.getI18nText("selectYear",{selectYear:"Select year"})}
            .value=${t.toString()}
            @input=${h=>{const d=h.target;d.value.length===4&&this.setYear(d.value)}}
          />
          <button
            class="${this.$cls["jumper-btn"]}"
            style=${this.$stl["jumper-btn"]}
            @click=${()=>this.navigateYear("next")}
            type="button"
            aria-label=${l}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
      </div>
    `}renderWeek(t){return $`
      <tr class=${this.$cls.week} style=${this.$stl.week} role="row">
        ${ct(t,e=>e.ISOString,e=>this.renderDay(e))}
      </tr>
    `}renderDay(t){const e=this.$active===t.ISOString,i=new Date(t.ISOString),s=this.lang||void 0,n=i.toLocaleDateString(s,{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),a={[this.$cls.day]:!0,[this.$cls["day-outside-month"]]:t.month!=="current",[this.$cls["day-selected"]]:e,[this.$cls["day-today"]]:t.isToday,[this.$cls["day-marked"]]:t.isMarked},o={[this.$cls["day-button"]]:!0,[this.$cls["button-selected"]]:e,[this.$cls["button-today"]]:t.isToday,[this.$cls["button-marked"]]:t.isMarked,[this.$cls["button-outside-month"]]:t.month!=="current"};return $`
      <td
        class=${Tt(a)}
        style=${this.$stl.day}
        role="gridcell"
        aria-selected=${e?"true":"false"}
      >
        <button
          class=${Tt(o)}
          style=${this.$stl["day-button"]}
          data-iso=${t.ISOString}
          @click=${()=>this.select(t)}
          aria-label=${n}
          aria-pressed=${e?"true":"false"}
          aria-disabled=${t.isDisabled?"true":"false"}
          .disabled=${t.isDisabled}
          tabindex=${e||!this.$active&&t.isToday?"0":"-1"}
        >
          ${t.date}
        </button>
      </td>
    `}},Oe([b()],c.Calendar.prototype,"$active",2),Oe([b()],c.Calendar.prototype,"$cls",2),Oe([b()],c.Calendar.prototype,"$stl",2),c.Calendar=Oe([k("fr-calendar")],c.Calendar);var Sc=Object.defineProperty,Ns=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Sc(t,e,s),s};const Tc=r=>{class t extends r{constructor(){super(...arguments),this.$term="",this.$focused=-1,this.selected=null}get options(){const i={};return Object.entries(this.$data).forEach(([s,n])=>{const a=n.options.filter(o=>o.data.keywords?.some(l=>l.toLowerCase().includes(this.$term.toLowerCase())));a.length>0&&(i[s]={text:n.text,options:a,...n.data&&{data:n.data}})}),i}get count(){let i=0;for(const s in this.options){const n=this.options[s].options.length;i+=n}return i-1}updated(i){if(super.updated(i),i.has("$term")&&i.get("$term")!==void 0&&(this.dispatchEvent(new CustomEvent(this["search-event"],{detail:{value:this.$term},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{this.$focused=-1})),i.has("$focused")&&this.listboxEl){this.listboxEl.querySelector('[role="option"][aria-selected="true"]')?.removeAttribute("aria-selected");const s=Array.from(this.listboxEl.querySelectorAll('[role="option"]'));this.activeOptionEl=s[this.$focused],this.activeOptionEl&&(this.activeOptionEl.setAttribute("aria-selected","true"),this.focusActiveOption())}}navigate(i){switch(i){case"t":this.$focused<=0?this.$focused=this.count:this.$focused--;break;case"d":this.$focused<this.count?this.$focused++:this.$focused=0;break}}focusActiveOption(i="smooth"){if(this.listboxEl&&this.activeOptionEl){const s={parent:this.listboxEl.getBoundingClientRect(),active:this.activeOptionEl.getBoundingClientRect()};this.listboxEl.scrollTo({top:this.activeOptionEl.offsetTop-this.listboxEl.offsetTop-s.parent.height/2+s.active.height/2,behavior:i})}}onKeydown(i){if(this.isOpen===!0)switch(i.key){case"ArrowDown":i.preventDefault(),this.navigate("d");break;case"ArrowUp":i.preventDefault(),this.navigate("t");break;case"Enter":if(i.preventDefault(),this.$focused===-1)return;this.onKeydownEnter();break;case"Home":i.preventDefault(),this.$focused=0;break;case"End":i.preventDefault(),this.$focused=this.count;break}}renderList(){const i=this._cls();return $`
        <ul
          class="${i.list}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
          @keydown="${this.onKeydown}"
        >
          ${ct(Object.keys(this.options),s=>$`
              ${this.renderListHeader(s)}
              ${ct(this.options[s].options,(n,a)=>this.renderListItem(s,n,a))}
            `)}
        </ul>
      `}renderListHeader(i){const s=this._cls();return i!=="__"?$`<li class="${s["item-header"]}" role="presentation">
            ${i}
          </li>`:""}onDropClose(){this.$focused=-1,this.$term=""}}return Ns([b()],t.prototype,"$term"),Ns([b()],t.prototype,"$focused"),Ns([oe('[role="listbox"]')],t.prototype,"listboxEl"),t};var Cc=Object.defineProperty,Ac=Object.getOwnPropertyDescriptor,F=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ac(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Cc(t,e,s),s};c.Select=class extends Ie(Tc(St(C))){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-select:input",this["search-event"]="fr-select:search",this.searchable=!1,this.insertable=!1,this["send-headers"]="",this["send-url"]="",this["send-method"]="POST",this.multiple=!1,this.icon="",this.$selected=[],this.$i18n={"search-placeholder":"Search","selection-count":"{n} options selected",insert:"Insert",listLabel:"Options",buttonLabel:"Select an option"},this.$cls={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",drop:"",dropdown:"",arrow:""},this.$stl={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",drop:"",dropdown:"",arrow:""},this.onInputKeydown=t=>{if(this.onKeydown(t),this.isOpen===!0)switch(t.key){case"Tab":!t.altKey&&!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&t.preventDefault();break}}}get $text(){return this.$selected.length===0?this.placeholder!==""?this.placeholder:this.getI18nText("buttonLabel",{buttonLabel:"Select an option"}):this.multiple===!1&&this.selected?this.selected.text:this.$selected.length===1&&this.selected?this.selected.text:this.getI18nText("selection-count",{"selection-count":"{n} options selected"},{n:this.$selected.length})}get $value(){return this.multiple?this.$selected:this.$selected.length===1?this.$selected[0]:""}get count(){let t=this.insertable&&this.$term!==""&&!this.hasOption(this.$term)?1:0;for(const e in this.options){const i=this.options[e].options.length;t+=i}return t-1}connectedCallback(){super.connectedCallback(),this.toggleSelector="button",this.insertable&&(this.searchable=!0)}firstUpdated(t){super.firstUpdated?.(t),this.updateComplete.then(()=>{if(this.hasAttribute("value"))this.$selected=this.value.split(",").map(e=>e.trim()),this.multiple||(this.$selected=this.$selected.slice(-1)),this.updateSelectedFromValues();else{let e=[];for(const i in this.$data){const s=this.$data[i].options;if(this.multiple)s.forEach(n=>{n.selected&&e.push(n.value)});else{const n=[...s].reverse().find(a=>a.selected);if(n){e=[n.value],this.selected=n;break}}}this.$selected=e,this.multiple&&this.updateSelectedFromValues()}})}updated(t){super.updated(t),this.isRendered&&t.has("$selected")&&t.get("$selected")!==void 0&&this.emit()}initializeValue(){}select(t){t.disabled||(this.multiple?(this.$selected.findIndex(i=>i===t?.value)===-1?this.$selected=[...this.$selected,t.value]:this.$selected=this.$selected.filter(i=>i!==t.value),this.$selected.length>0&&this.updateSelectedFromValues(),this.requestUpdate()):(this.$selected=[t.value],this.selected=t,this.hide()))}updateSelectedFromValues(){if(this.$selected.length>0){const t=this.$selected[this.$selected.length-1];for(const e in this.$data){const i=this.$data[e].options.find(s=>s.value===t);if(i){this.selected=i;break}}}}onKeydownEnter(){const t=this.activeOptionEl?.dataset;if(t){const e=t.key,i=t.index;e==="__insert__"?this.insert():this.select(this.options[e].options[i])}}onClick(t){const{item:e}=t;this.select(e)}_cls(t){return{button:this.$cls.button,icon:this.$cls.icon,list:this.$cls.list,item:t?.item.disabled===!0?this.$cls.item:this.$cls.item,"item-header":this.$cls["item-header"],"item-link":this.$cls["item-link"],"item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":this.$cls["item-check"],"item-subtitle":this.$cls["item-subtitle"],search:this.$cls.search,"search-input":this.$cls["search-input"],"search-icon":this.$cls["search-icon"],dropdown:this.$cls.dropdown}}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.$selected.includes(e.value),a=this.getGlobalIndex(t,i);return $`
      <li
        class="${s.item}"
        role="option"
        aria-selected="${a===this.$focused?"true":"false"}"
        aria-disabled="${e.disabled?"true":"false"}"
        data-key="${t}"
        data-index="${i}"
      >
        <button
          type="button"
          class="${s["item-link"]}"
          @click="${()=>this.onClick({item:e,index:i})}"
          tabindex="-1"
          ?disabled="${e.disabled}"
          aria-label="${e.text}"
        >
          <div class="${s["item-wrapper"]}">
            ${e.data.icon?$`<span class="${s["item-icon"]}">${e.data.icon}</span>`:""}
            ${e.data.description?$`
                  <div>
                    <span class="${s["item-text"]}">${e.text}</span>
                    <div class="${s["item-subtitle"]}">
                      ${e.data.description}
                    </div>
                  </div>
                `:$`<span class="${s["item-text"]}">${e.text}</span>`}
          </div>
          ${n?$`<span class="${s["item-check"]}">✓</span>`:""}
        </button>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;this.insertable&&this.$term&&!this.hasOption(this.$term)&&i++;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}hasOption(t){return Object.values(this.$data).some(e=>e.options.some(i=>i.value===t))}addOption(t,e){const s=(this.$data[e]?.options||[]).some(n=>n.value===t.value);return s||(this.$data={...this.$data},this.$data[e]===void 0&&(this.$data[e]={text:t.group||"__",options:[]}),this.$data[e].options.push(t)),!s}async send(){function t(e){return typeof e=="object"&&"group"in e&&"value"in e&&"text"in e&&"disabled"in e&&"selected"in e&&"data"in e&&"key"in e.data&&"keywords"in e.data}try{if(!this["send-url"])throw new Error("No send URL provided");const e=this["send-headers"]?JSON.parse(this["send-headers"]):{"Content-Type":"application/json"},i={term:this.$term},s=await fetch(this["send-url"],{method:this["send-method"],headers:e,body:JSON.stringify(i)});if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const n=await s.json();if(t(n))return n;throw new Error("Invalid response format")}catch{return{group:"__",text:this.$term,value:this.$term,data:{gid:"__",keywords:[this.$term]},selected:!0,disabled:!1}}}async insert(){const t=await this.send();this.addOption(t,t.data.gid),this.multiple?this.$selected=[...this.$selected,this.$term]:this.$selected=[this.$term],this.selected=t,this.$term="",this.hide()}renderSearch(){const t=this._cls();return this.searchable===!0?$`
          <div class="${t.search}" role="search">
            <span class="${t["search-icon"]}"
              >${this.getI18nText("searchIcon",{searchIcon:"🔍"})}</span
            >
            <input
              class="${t["search-input"]}"
              placeholder="${this.getI18nText("search-placeholder",{"search-placeholder":"Search"})}"
              type="text"
              role="searchbox"
              aria-label="${this.getI18nText("search-placeholder",{"search-placeholder":"Search"})}"
              .value="${this.$term}"
              @input="${e=>{const i=e.target;this.$term=i.value}}"
              @keydown="${this.onInputKeydown}"
            />
          </div>
        `:""}renderInsertion(){const t=this._cls();return $`
      <li class="${t.item}" role="option" data-key="__insert__">
        <button
          type="button"
          class="${t["item-link"]}"
          @click="${e=>{e.preventDefault(),this.insert()}}"
          tabindex="-1"
          aria-label="${this.getI18nText("insert",{insert:"Insert"})} ${this.$term}"
        >
          ${this.getI18nText("insert",{insert:"Insert"})} ${this.$term}
        </button>
      </li>
    `}renderList(){const t=this._cls();return $`
      <ul
        class="${t.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
        aria-multiselectable="${this.multiple}"
        @keydown="${this.onKeydown}"
      >
        ${this.insertable&&this.$term&&!this.hasOption(this.$term)?this.renderInsertion():""}
        ${ct(Object.keys(this.options),e=>$`
            ${this.renderListHeader(e)}
            ${ct(this.options[e].options,(i,s)=>this.renderListItem(e,i,s))}
          `)}
      </ul>
    `}onDropOpen(){}render(){const t=this._cls(),e=this.id?`${this.id}-button`:`fr-select-${Math.random().toString(36).substr(2,9)}`,i=this.id?`${this.id}-listbox`:`fr-listbox-${Math.random().toString(36).substr(2,9)}`,s=1e3+this.stackIndex;return $`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <button
          id="${e}"
          class="${t.button}"
          style="${this.$stl.button}"
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="${this.isOpen}"
          aria-controls="${i}"
          aria-label="${this.getI18nText("buttonLabel",{buttonLabel:"Select an option"})}"
          ?disabled="${this.disabled}"
          @keydown="${this.onKeydown}"
        >
          <span
            class="${t["button-text"]}"
            style="${this.$stl["button-text"]}"
            >${this.$text}</span
          >
          ${this.icon?$`<span class="${t.icon}" style="${this.$stl.icon}"
                >${this.icon}</span
              >`:""}
        </button>

        <div
          data-drop
          class="${this.$dropCls.drop} ${this.$cls.drop}"
          style="display: ${this.isOpen?"block":"none"}; position: absolute; z-index: ${s}; ${this.$dropStl.drop||""} ${this.$stl.drop}"
          role="dialog"
          aria-modal="${this.focusTrap}"
          aria-label="${this.getI18nText("buttonLabel",{buttonLabel:"Select an option"})}"
          id="${i}"
        >
          <div class="${t.dropdown}" style="${this.$stl.dropdown}">
            ${this.renderSearch()} ${this.renderList()}
          </div>
          ${this.arrow?$`
                <div
                  data-arrow
                  class="${this.$dropCls.arrow} ${this.$cls.arrow}"
                  style="position: absolute; ${this.$dropStl.arrow||""} ${this.$stl.arrow}"
                ></div>
              `:""}
        </div>

        ${this.renderHidden()}
      </div>
    `}},F([g({type:Boolean})],c.Select.prototype,"searchable",2),F([g({type:Boolean})],c.Select.prototype,"insertable",2),F([g({type:String,attribute:"send-headers"})],c.Select.prototype,"send-headers",2),F([g({type:String,attribute:"send-url"})],c.Select.prototype,"send-url",2),F([g({type:String,attribute:"send-method"})],c.Select.prototype,"send-method",2),F([g({type:Boolean})],c.Select.prototype,"multiple",2),F([g({type:String})],c.Select.prototype,"icon",2),F([b()],c.Select.prototype,"$selected",2),F([b()],c.Select.prototype,"$i18n",2),F([b()],c.Select.prototype,"$cls",2),F([b()],c.Select.prototype,"$stl",2),c.Select=F([k("fr-select")],c.Select);var Ic=Object.defineProperty,xc=Object.getOwnPropertyDescriptor,H=(r,t,e,i)=>{for(var s=i>1?void 0:i?xc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ic(t,e,s),s};const te=[],Oc=1e3,Dc=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");c.Modal=class extends C{constructor(){super(...arguments),this["cls-default-element"]="dialog",this["stl-default-element"]="dialog",this.open=!1,this.draggable=!1,this.closeOnBackdrop=!0,this.closeOnEscape=!0,this.restoreFocus=!0,this.lockScroll=!0,this.ariaLabelledby=null,this.ariaLabel=null,this.ariaDescribedby=null,this.animationDuration=300,this.dragPosition=null,this.$cls={"host-inner":"",backdrop:"",dialog:"",header:"",content:"",footer:""},this.$stl={"host-inner":"",backdrop:"",dialog:"",header:"",content:"",footer:""},this.dialogElement=null,this.triggerElement=null,this.previouslyFocusedElement=null,this.isDragging=!1,this.dragStartPos=null,this.dragStartMousePos=null,this.templates=new Map,this.defaultI18n={closeLabel:"Close modal",modalLabel:"Modal dialog"},this.handleKeyDown=t=>{if(this.open){if(t.key==="Escape"&&this.closeOnEscape){t.preventDefault(),this.hide("escape");return}t.key==="Tab"&&this.handleTabKey(t)}},this.handleBackdropClick=t=>{t.target===t.currentTarget&&this.closeOnBackdrop&&this.hide("backdrop")},this.handleCloseClick=t=>{const e=t.target;(e.hasAttribute("data-modal-close")||e.closest("[data-modal-close]"))&&(t.preventDefault(),this.hide("button"))},this.handleMouseDown=t=>{if(!this.draggable)return;const e=t.target;if(!e.closest("[data-header]")||e.matches("button, a, input, select, textarea")||e.closest("button, a, input, select, textarea"))return;t.preventDefault(),this.isDragging=!0,this.dragStartMousePos={x:t.clientX,y:t.clientY};const s=this.dragPosition||{x:0,y:0};this.dragStartPos={...s},document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.dialogElement?.setAttribute("data-dragging","")},this.handleMouseMove=t=>{if(!this.isDragging||!this.dragStartPos||!this.dragStartMousePos)return;const e=t.clientX-this.dragStartMousePos.x,i=t.clientY-this.dragStartMousePos.y,s={x:this.dragStartPos.x+e,y:this.dragStartPos.y+i};this.dragPosition=s;const n=new CustomEvent("dragging",{detail:{modal:this,x:s.x,y:s.y},bubbles:!0,composed:!0});this.dispatchEvent(n)},this.handleMouseUp=()=>{this.isDragging&&(this.isDragging=!1,this.dragStartPos=null,this.dragStartMousePos=null,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.dialogElement?.removeAttribute("data-dragging"))}}getTemplate(t){return this.templates.get(t)||""}parseTemplates(){this.querySelectorAll('template[data-fn="template"][data-name]').forEach(e=>{const i=e.getAttribute("data-name");i&&e instanceof HTMLTemplateElement&&this.templates.set(i,e.innerHTML.trim())})}async show(t){if(this.open)return;t&&(this.triggerElement=t);const e=new CustomEvent("opening",{detail:{modal:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.previouslyFocusedElement=document.activeElement,te.push(this),this.open=!0,this.lockScroll&&(document.body.style.overflow="hidden"),await this.updateComplete,this.focusFirstElement(),setTimeout(()=>{const i=new CustomEvent("opened",{detail:{modal:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0});this.dispatchEvent(i)},this.animationDuration))}async hide(t){if(!this.open)return;const e=new CustomEvent("closing",{detail:{modal:this,trigger:this.triggerElement||void 0,reason:t},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(e))return;this.open=!1;const i=te.indexOf(this);i>-1&&te.splice(i,1),this.lockScroll&&te.length===0&&(document.body.style.overflow=""),this.restoreFocus&&(this.triggerElement&&document.contains(this.triggerElement)?this.triggerElement.focus():this.previouslyFocusedElement&&document.contains(this.previouslyFocusedElement)&&this.previouslyFocusedElement.focus()),this.triggerElement=null,this.previouslyFocusedElement=null,this.dragPosition=null,setTimeout(()=>{const s=new CustomEvent("closed",{detail:{modal:this,reason:t},bubbles:!0,composed:!0});this.dispatchEvent(s)},this.animationDuration)}toggle(t){this.open?this.hide():this.show(t)}focusFirstElement(){this.dialogElement||(this.dialogElement=this.querySelector("[data-dialog]"));const t=this.getFocusableElements();t.length>0?t[0].focus():this.dialogElement&&this.dialogElement.focus()}getFocusableElements(){return this.dialogElement?Array.from(this.dialogElement.querySelectorAll(Dc)):[]}handleTabKey(t){const e=this.getFocusableElements();if(e.length===0){t.preventDefault();return}const i=e[0],s=e[e.length-1],n=document.activeElement;t.shiftKey?(n===i||!this.dialogElement?.contains(n))&&(t.preventDefault(),s.focus()):n===s&&(t.preventDefault(),i.focus())}getZIndex(){const t=te.indexOf(this);return Oc+(t>=0?t*10:0)}connectedCallback(){super.connectedCallback(),this.parseTemplates(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.templates.clear()}updated(t){super.updated(t),this.open&&!this.dialogElement&&(this.dialogElement=this.querySelector("[data-dialog]"))}render(){const t=this.open,e=this.getZIndex(),i=this.ariaLabel||this.getI18nText("modalLabel",this.defaultI18n),s=this.dragPosition?`translate(${this.dragPosition.x}px, ${this.dragPosition.y}px)`:"",n=this.getTemplate("header"),a=this.getTemplate("footer"),o=this.getTemplate("body")||this.$template,l=t?"display: flex;":"display: none;";return $`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]}"
        style="${this.$stl["host-inner"]}"
      >
        <div
          class="${this.$cls.backdrop}"
          style="${l} z-index: ${e}; ${this.$stl.backdrop}"
          @click="${this.handleBackdropClick}"
        >
          <div
            data-dialog
            class="${this.$cls.dialog}"
            style="z-index: ${e+1}; ${s?`transform: ${s};`:""} ${this.$stl.dialog}"
            role="dialog"
            aria-modal="true"
            aria-labelledby="${this.ariaLabelledby||""}"
            aria-label="${i}"
            aria-describedby="${this.ariaDescribedby||""}"
            tabindex="-1"
            @mousedown="${this.handleMouseDown}"
            @click="${this.handleCloseClick}"
          >
            ${n?$`
                  <div
                    data-header
                    class="${this.$cls.header}"
                    style="${this.$stl.header}"
                  >
                    ${B(n)}
                  </div>
                `:""}
            <div
              data-content
              class="${this.$cls.content}"
              style="${this.$stl.content}"
            >
              ${B(o)}
            </div>
            ${a?$`
                  <div
                    data-footer
                    class="${this.$cls.footer}"
                    style="${this.$stl.footer}"
                  >
                    ${B(a)}
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}},H([g({type:Boolean,reflect:!0})],c.Modal.prototype,"open",2),H([g({type:Boolean})],c.Modal.prototype,"draggable",2),H([g({type:Boolean,attribute:"close-on-backdrop"})],c.Modal.prototype,"closeOnBackdrop",2),H([g({type:Boolean,attribute:"close-on-escape"})],c.Modal.prototype,"closeOnEscape",2),H([g({type:Boolean,attribute:"restore-focus"})],c.Modal.prototype,"restoreFocus",2),H([g({type:Boolean,attribute:"lock-scroll"})],c.Modal.prototype,"lockScroll",2),H([g({type:String,attribute:"aria-labelledby"})],c.Modal.prototype,"ariaLabelledby",2),H([g({type:String,attribute:"aria-label"})],c.Modal.prototype,"ariaLabel",2),H([g({type:String,attribute:"aria-describedby"})],c.Modal.prototype,"ariaDescribedby",2),H([g({type:Number,attribute:"animation-duration"})],c.Modal.prototype,"animationDuration",2),H([b()],c.Modal.prototype,"dragPosition",2),H([b()],c.Modal.prototype,"$cls",2),H([b()],c.Modal.prototype,"$stl",2),c.Modal=H([k("fr-modal")],c.Modal);var kc=Object.defineProperty,Lc=Object.getOwnPropertyDescriptor,J=(r,t,e,i)=>{for(var s=i>1?void 0:i?Lc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&kc(t,e,s),s};const ee=[],Pc=1100;c.Drawer=class extends C{constructor(){super(...arguments),this["cls-default-element"]="drawer",this["stl-default-element"]="drawer",this.open=!1,this.closeOnBackdrop=!0,this.closeOnEscape=!0,this.restoreFocus=!0,this.lockScroll=!0,this.position="right",this.animationDuration=300,this.size="md",this.triggerElement=null,this.previouslyFocusedElement=null,this.$cls={"host-inner":"",backdrop:"",drawer:""},this.$stl={"host-inner":"",backdrop:"",drawer:""},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&this.closeOnEscape&&(t.preventDefault(),this.hide("escape"))},this.handleBackdropClick=t=>{t.target===t.currentTarget&&this.closeOnBackdrop&&this.hide("backdrop")}}async show(t){if(this.open)return;t&&(this.triggerElement=t);const e=new CustomEvent("opening",{detail:{drawer:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.previouslyFocusedElement=document.activeElement,ee.push(this),this.open=!0,this.lockScroll&&(document.body.style.overflow="hidden"),await this.updateComplete,setTimeout(()=>{const i=new CustomEvent("opened",{detail:{drawer:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0});this.dispatchEvent(i)},this.animationDuration))}async hide(t){if(!this.open)return;const e=new CustomEvent("closing",{detail:{drawer:this,trigger:this.triggerElement||void 0,reason:t},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(e))return;this.open=!1;const i=ee.indexOf(this);i>-1&&ee.splice(i,1),this.lockScroll&&ee.length===0&&(document.body.style.overflow=""),this.restoreFocus&&(this.triggerElement&&document.contains(this.triggerElement)?this.triggerElement.focus():this.previouslyFocusedElement&&document.contains(this.previouslyFocusedElement)&&this.previouslyFocusedElement.focus()),this.triggerElement=null,this.previouslyFocusedElement=null,setTimeout(()=>{const s=new CustomEvent("closed",{detail:{drawer:this,reason:t},bubbles:!0,composed:!0});this.dispatchEvent(s)},this.animationDuration)}toggle(t){this.open?this.hide():this.show(t)}getZIndex(){const t=ee.indexOf(this);return Pc+(t>=0?t*10:0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown)}render(){const t=this.open,e=this.getZIndex(),i={left:"translateX(-100%)",right:"translateX(100%)",top:"translateY(-100%)",bottom:"translateY(100%)"}[this.position],s=t?"display: flex;":"display: none;",n=t?"translate(0, 0)":i,a={sm:"240px",md:"400px",lg:"640px",full:"100%"}[this.size];return $`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]}"
        style="${this.$stl["host-inner"]}"
      >
        <div
          class="${this.$cls.backdrop}"
          style="${s} z-index: ${e}; ${this.$stl.backdrop}"
          @click="${this.handleBackdropClick}"
        >
          <div
            data-drawer
            class="${this.$cls.drawer}"
            style="
              --drawer-size: ${a};
              transform: ${n};
              transition: transform ${this.animationDuration}ms ease;
              z-index: ${e+1};
              ${this.$stl.drawer}
            "
            role="dialog"
            aria-modal="true"
            tabindex="-1"
          >
            ${B(this.$template)}
          </div>
        </div>
      </div>
    `}},J([g({type:Boolean,reflect:!0})],c.Drawer.prototype,"open",2),J([g({type:Boolean,attribute:"close-on-backdrop"})],c.Drawer.prototype,"closeOnBackdrop",2),J([g({type:Boolean,attribute:"close-on-escape"})],c.Drawer.prototype,"closeOnEscape",2),J([g({type:Boolean,attribute:"restore-focus"})],c.Drawer.prototype,"restoreFocus",2),J([g({type:Boolean,attribute:"lock-scroll"})],c.Drawer.prototype,"lockScroll",2),J([g({type:String})],c.Drawer.prototype,"position",2),J([g({type:Number,attribute:"animation-duration"})],c.Drawer.prototype,"animationDuration",2),J([g({type:String})],c.Drawer.prototype,"size",2),J([b()],c.Drawer.prototype,"$cls",2),J([b()],c.Drawer.prototype,"$stl",2),c.Drawer=J([k("fr-drawer")],c.Drawer);var Mc=Object.getOwnPropertyDescriptor,Rc=(r,t,e,i)=>{for(var s=i>1?void 0:i?Mc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};c.Tab=class extends C{get items(){return Array.from(this.querySelectorAll(":scope > fr-tab-item"))}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-tab-activate-request",this.handleActivateRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-tab-activate-request",this.handleActivateRequest)}handleActivateRequest(t){t.stopPropagation();const e=t.detail.item;this.items.forEach(i=>{i.setActive(i===e)})}render(){return this.setAttribute("role","tablist"),E}},c.Tab=Rc([k("fr-tab")],c.Tab);var qc=Object.defineProperty,jc=Object.getOwnPropertyDescriptor,Fs=(r,t,e,i)=>{for(var s=i>1?void 0:i?jc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&qc(t,e,s),s};let Hc=0;c.TabItem=class extends C{constructor(){super(...arguments),this.active=!1,this.tid=`fr-tab-item-${++Hc}`}get titleElement(){return this.querySelector("fr-tab-title")}get panelElement(){return this.querySelector("fr-tab-panel")}get allItems(){const t=this.parentElement;return t?Array.from(t.querySelectorAll(":scope > fr-tab-item")):[]}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-tab-title-click",this.handleTitleClick),this.addEventListener("fr-tab-navigation-key",this.handleNavigationKey),this.active&&requestAnimationFrame(()=>this.updateChildrenAria())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-tab-title-click",this.handleTitleClick),this.removeEventListener("fr-tab-navigation-key",this.handleNavigationKey)}handleTitleClick(){this.dispatchEvent(new CustomEvent("fr-tab-activate-request",{bubbles:!0,composed:!0,detail:{item:this}}))}handleNavigationKey(t){const{key:e,originalEvent:i}=t.detail,s=this.allItems,n=s.indexOf(this);if(n===-1)return;let a=n;switch(e){case"ArrowRight":i.preventDefault(),a=(n+1)%s.length;break;case"ArrowLeft":i.preventDefault(),a=n===0?s.length-1:n-1;break;case"Home":i.preventDefault(),a=0;break;case"End":i.preventDefault(),a=s.length-1;break;default:return}s[a]?.focusTitle()}focusTitle(){this.titleElement?.focus()}updateChildrenAria(){this.titleElement?.updateAria(this.active,`${this.tid}-panel`),this.panelElement?.updateAria(`${this.tid}-title`,this.active)}setActive(t){this.active!==t&&(this.active=t)}updated(t){super.updated(t),t.has("active")&&(this.updateChildrenAria(),this.dispatchEvent(new CustomEvent(this.active?"activate":"deactivate",{bubbles:!0,composed:!0,detail:{item:this}})))}render(){return E}},Fs([g({type:Boolean,reflect:!0})],c.TabItem.prototype,"active",2),Fs([b()],c.TabItem.prototype,"tid",2),c.TabItem=Fs([k("fr-tab-item")],c.TabItem);var Uc=Object.defineProperty,Vc=Object.getOwnPropertyDescriptor,zs=(r,t,e,i)=>{for(var s=i>1?void 0:i?Vc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Uc(t,e,s),s};c.TabTitle=class extends C{constructor(){super(...arguments),this.isActive=!1,this.controlsId="",this.$cls={container:"",button:""},this.$stl={container:"",button:""},this["cls-default-element"]="button",this["stl-default-element"]="button"}handleClick(){this.dispatchEvent(new CustomEvent("fr-tab-title-click",{bubbles:!0,composed:!0}))}handleKeydown(t){if(t.key==="Enter"||t.key===" "){t.preventDefault(),this.handleClick();return}["ArrowLeft","ArrowRight","Home","End"].includes(t.key)&&this.dispatchEvent(new CustomEvent("fr-tab-navigation-key",{bubbles:!0,composed:!0,detail:{key:t.key,originalEvent:t}}))}updateAria(t,e){this.isActive=t,this.controlsId=e}focus(){this.querySelector("button[data-tab-trigger]")?.focus()}render(){return $`
      <div
        class="${this.$cls.container}"
        style="${this.$stl.container}"
        data-host-inner
      >
        <button
          role="tab"
          class="${this.$cls.button}"
          style="${this.$stl.button}"
          type="button"
          aria-selected="${this.isActive}"
          aria-controls="${this.controlsId}"
          tabindex="${this.isActive?"0":"-1"}"
          @click="${this.handleClick}"
          @keydown="${this.handleKeydown}"
          data-tab-trigger
        >
          ${this.$template?B(this.$template):E}
        </button>
      </div>
    `}},zs([b()],c.TabTitle.prototype,"isActive",2),zs([b()],c.TabTitle.prototype,"controlsId",2),c.TabTitle=zs([k("fr-tab-title")],c.TabTitle);var Bc=Object.defineProperty,Nc=Object.getOwnPropertyDescriptor,Ks=(r,t,e,i)=>{for(var s=i>1?void 0:i?Nc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Bc(t,e,s),s};c.TabPanel=class extends C{constructor(){super(...arguments),this.labelledBy="",this.visible=!1}updateAria(t,e){this.labelledBy=t,this.visible=e,requestAnimationFrame(()=>{const i=this.querySelector("[data-host-inner]");i&&(i.hidden=!e,i.style.display=e?"block":"none")})}render(){return $`
      <div
        role="tabpanel"
        id="${this.parentElement?.id?`${this.parentElement.id}-panel`:""}"
        aria-labelledby="${this.labelledBy}"
        class="${this.$cls["host-inner"]||""}"
        style="${this.$stl["host-inner"]||""}"
        data-host-inner
        ?hidden="${!this.visible}"
      >
        ${this.$template?B(this.$template):E}
      </div>
    `}},Ks([b()],c.TabPanel.prototype,"labelledBy",2),Ks([b()],c.TabPanel.prototype,"visible",2),c.TabPanel=Ks([k("fr-tab-panel")],c.TabPanel);var Fc=Object.getOwnPropertyDescriptor,zc=(r,t,e,i)=>{for(var s=i>1?void 0:i?Fc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};c.Tooltip=class extends Ie(C){constructor(){super(),this["cls-default-element"]="tooltip",this.trigger="hover",this.placement="top",this.delayShow=200,this.delayHide=0,this.offset=8,this.closeOnOutsideClick=!1,this.closeOnEscape=!1,this.closeOnScroll=!1,this.focusTrap=!1,this.returnFocus=!1}render(){const t=this.$i18n.label||this.label||void 0,e=this.describedby||void 0,i=1e3+this.stackIndex;return $`
      <div
        data-host-inner
        data-drop
        id="${this.id}"
        class="${this.$dropCls.tooltip||this.$dropCls.drop||""} ${this.stackIndex>0?"nested":""}"
        style="display: ${this.isOpen?"block":"none"}; position: absolute; --tooltip-duration: ${this.duration}ms; z-index: ${i}; ${this.$dropStl.tooltip||this.$dropStl.drop||""}"
        role="tooltip"
        aria-label="${t||E}"
        aria-describedby="${e||E}"
        @mouseenter=${this.trigger.includes("hover")?this.handleDropMouseEnter:E}
        @mouseleave=${this.trigger.includes("hover")?this.handleDropMouseLeave:E}
      >
        ${B(this.$template)}
        ${this.arrow?$`
              <div
                data-arrow
                class="${this.$dropCls.arrow||""}"
                style="position: absolute; ${this.$dropStl.arrow||""}"
              ></div>
            `:E}
      </div>
    `}},c.Tooltip=zc([k("fr-tooltip")],c.Tooltip);var Kc=Object.defineProperty,Yc=Object.getOwnPropertyDescriptor,z=(r,t,e,i)=>{for(var s=i>1?void 0:i?Yc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Kc(t,e,s),s};c.Icon=class extends C{constructor(){super(...arguments),this["cls-default-element"]="svg",this["stl-default-element"]="svg",this.icon="",this.label="",this.decorative=!1,this.role="",this["stroke-width"]="2",this.height="16",this.width="16",this.color="",this.fill="none",this.defaultI18n={label:""}}get key(){return this.icon.trim().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}getEffectiveLabel(){return this.getI18nText("label",this.defaultI18n)||this.label}updated(t){(["icon","stroke-width","height","width","size","color","fill","label","decorative","role","$cls","$stl"].some(i=>t.has(i))||t.has("$i18n"))&&this.updateComplete.then(()=>{this.regenerateSvg()})}regenerateSvg(){this.$svg=this.createSvg({icon:this.key,cls:this.$cls.svg||"",stl:this.$stl.svg||"",height:this.size||this.height,width:this.size||this.width,strokeWidth:this["stroke-width"],color:this.color,fill:this.fill,label:this.getEffectiveLabel(),decorative:this.decorative,role:this.role})}createSvg(t){const{icon:e,cls:i,stl:s,height:n,width:a,strokeWidth:o,color:l,fill:h,label:d,decorative:u,role:f}=t;try{const p=Qa[e];if(!p){console.warn(`fr-icon: Icon "${this.icon}" not found in Lucide icons.`);return}const m=Ys.createElement(p);if(i&&m.setAttribute("class",i),s&&m.setAttribute("style",s),m.setAttribute("height",n),m.setAttribute("width",a),m.setAttribute("stroke-width",o),h!=="none"&&m.setAttribute("fill",h),l){const v=m.getAttribute("style")||"";m.setAttribute("style",`${v}; color: ${l};`)}return u?(m.setAttribute("aria-hidden","true"),m.removeAttribute("role"),m.removeAttribute("aria-label")):d?(m.setAttribute("role",f||"img"),m.setAttribute("aria-label",d),m.removeAttribute("aria-hidden")):f&&(m.setAttribute("role",f),m.removeAttribute("aria-hidden")),m.setAttribute("data-icon",this.icon),m.setAttribute("data-lucide",this.icon),m}catch(p){console.warn(`fr-icon: Failed to create icon "${this.icon}":`,p);return}}render(){return this.renderRoot.children.length===0?this.$svg:E}},z([g({type:String})],c.Icon.prototype,"icon",2),z([g({type:String})],c.Icon.prototype,"label",2),z([g({type:Boolean})],c.Icon.prototype,"decorative",2),z([g({type:String})],c.Icon.prototype,"role",2),z([g({type:String})],c.Icon.prototype,"stroke-width",2),z([g({type:String})],c.Icon.prototype,"height",2),z([g({type:String})],c.Icon.prototype,"width",2),z([g({type:String})],c.Icon.prototype,"size",2),z([g({type:String})],c.Icon.prototype,"color",2),z([g({type:String})],c.Icon.prototype,"fill",2),z([b()],c.Icon.prototype,"$svg",2),c.Icon=z([k("fr-icon")],c.Icon);var Gc=Object.defineProperty,Wc=Object.getOwnPropertyDescriptor,Ct=(r,t,e,i)=>{for(var s=i>1?void 0:i?Wc(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Gc(t,e,s),s};return c.Chart=class extends C{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.loading=!1,this.width="100%",this.height="auto",this["aria-label"]="",this.hasError=!1,this.errorMessage="",this.apexCharts=null,this.defaultI18n={chartLabel:"Chart",loadingMessage:"Loading chart...",errorMessage:"Failed to load chart. Please try again.",noDataMessage:"No data available"}}get $apexChartsConfig(){return"apexCharts"in this.$config&&typeof this.$config=="object"?this.$config.apexCharts:{}}hasValidConfig(){return Object.keys(this.$apexChartsConfig).length>0}firstUpdated(t){super.firstUpdated(t),this.loading||this.initializeApexCharts()}updated(t){super.updated(t),t.has("loading")&&!this.loading&&!this.apexCharts&&this.initializeApexCharts()}disconnectedCallback(){super.disconnectedCallback(),this.apexCharts&&(this.apexCharts.destroy(),this.apexCharts=null)}onConfigChanged(){if(this.apexCharts&&this.hasValidConfig())try{this.apexCharts.updateOptions(this.$apexChartsConfig,!0,!0),this.hasError=!1,this.errorMessage=""}catch(t){console.error("fr-chart: Failed to update chart:",t),this.hasError=!0,this.errorMessage=t instanceof Error?t.message:"Unknown error"}else!this.apexCharts&&this.hasValidConfig()&&this.initializeApexCharts()}async initializeApexCharts(){const t=this.renderRoot.querySelector("[data-chart-container]");if(!t){console.warn("fr-chart: Chart container not found");return}if(!this.hasValidConfig()){console.warn("fr-chart: No valid chart configuration found"),this.hasError=!0,this.errorMessage=this.getI18nText("noDataMessage",this.defaultI18n);return}if(this.apexCharts===null)try{const e={...this.$apexChartsConfig,chart:{...this.$apexChartsConfig.chart,width:this.width,height:this.height}};this.apexCharts=new Za(t,e),await this.apexCharts.render(),this.isRendered=!0,this.hasError=!1,this.errorMessage=""}catch(e){console.error("fr-chart: Failed to initialize chart:",e),this.hasError=!0,this.errorMessage=e instanceof Error?e.message:this.getI18nText("errorMessage",this.defaultI18n)}}renderLoading(){const t=this.getI18nText("loadingMessage",this.defaultI18n);return $`
      <div
        class="${this.$cls.loading||""}"
        style="${this.$stl.loading||""}"
        role="status"
        aria-live="polite"
        aria-label="${t}"
      >
        <span>${t}</span>
      </div>
    `}renderError(){const t=this.errorMessage||this.getI18nText("errorMessage",this.defaultI18n);return $`
      <div
        class="${this.$cls.error||""}"
        part="error"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="assertive"
      >
        <span>${t}</span>
      </div>
    `}render(){const t=this["aria-label"]||this.getI18nText("chartLabel",this.defaultI18n);return $`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
        role="img"
        aria-label="${t}"
        data-loading="${this.loading}"
        data-error="${this.hasError}"
        data-rendered="${this.isRendered}"
      >
        ${this.loading?this.renderLoading():this.hasError?this.renderError():$`
                <div
                  data-chart-container
                  class="${this.$cls.chart||""}"
                  part="chart"
                  style="${this.$stl.chart||""}"
                ></div>
              `}
      </div>
    `}async updateChart(t,e=!0,i=!0){if(this.apexCharts)try{await this.apexCharts.updateOptions(t,e,i),this.hasError=!1,this.errorMessage=""}catch(s){throw console.error("fr-chart: Failed to update chart:",s),this.hasError=!0,this.errorMessage=s instanceof Error?s.message:"Unknown error",s}else throw new Error("Chart not initialized")}async updateSeries(t,e=!0){if(this.apexCharts)try{await this.apexCharts.updateSeries(t,e),this.hasError=!1,this.errorMessage=""}catch(i){throw console.error("fr-chart: Failed to update series:",i),this.hasError=!0,this.errorMessage=i instanceof Error?i.message:"Unknown error",i}else throw new Error("Chart not initialized")}getChartInstance(){return this.apexCharts}},Ct([g({type:Boolean})],c.Chart.prototype,"loading",2),Ct([g({type:String})],c.Chart.prototype,"width",2),Ct([g({type:String})],c.Chart.prototype,"height",2),Ct([g({type:String})],c.Chart.prototype,"aria-label",2),Ct([b()],c.Chart.prototype,"hasError",2),Ct([b()],c.Chart.prototype,"errorMessage",2),c.Chart=Ct([k("fr-chart")],c.Chart),window.Lit=mo,window.LitDecorators=So,window.LitRepeat={repeat:ct},window.LitUnsafeHTML={unsafeHTML:B},Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),c})({},Lucide,ApexCharts);
