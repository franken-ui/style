var __COMPONENTS__=(function(o,c,At,ee){"use strict";function ie(a){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(a){for(const e in a)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(a,e);Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>a[e]})}}return t.default=a,Object.freeze(t)}const se=ie(At);const _=a=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(a,t)})):customElements.define(a,t)};const st=globalThis,ft=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),xt=new WeakMap;let ne=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ft&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=xt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&xt.set(e,t))}return t}toString(){return this.cssText}};const ae=a=>new ne(typeof a=="string"?a:a+"",void 0,Et),re=(a,t)=>{if(ft)a.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=st.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,a.appendChild(i)}},Dt=ft?a=>a:a=>a instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ae(e)})(a):a;const{is:oe,defineProperty:le,getOwnPropertyDescriptor:he,getOwnPropertyNames:ue,getOwnPropertySymbols:ce,getPrototypeOf:de}=Object,nt=globalThis,Mt=nt.trustedTypes,pe=Mt?Mt.emptyScript:"",$e=nt.reactiveElementPolyfillSupport,J=(a,t)=>a,at={toAttribute(a,t){switch(t){case Boolean:a=a?pe:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,t){let e=a;switch(t){case Boolean:e=a!==null;break;case Number:e=a===null?null:Number(a);break;case Object:case Array:try{e=JSON.parse(a)}catch{e=null}}return e}},gt=(a,t)=>!oe(a,t),Lt={attribute:!0,type:String,converter:at,reflect:!1,useDefault:!1,hasChanged:gt};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;class W extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&le(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=he(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:s,set(r){const l=s?.call(this);n?.call(this,r),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Lt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;const t=de(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){const e=this.properties,i=[...ue(e),...ce(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(Dt(s))}else t!==void 0&&e.push(Dt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:at).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:at;this._$Em=s;const l=r.fromAttribute(e,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??gt)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:r}=n,l=this[s];r!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[J("elementProperties")]=new Map,W[J("finalized")]=new Map,$e?.({ReactiveElement:W}),(nt.reactiveElementVersions??=[]).push("2.1.1");const me={attribute:!0,type:String,converter:at,reflect:!1,hasChanged:gt},fe=(a=me,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((a=Object.create(a)).wrapped=!0),n.set(e.name,a),i==="accessor"){const{name:r}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,h,a)},init(l){return l!==void 0&&this.C(r,void 0,a,l),l}}}if(i==="setter"){const{name:r}=e;return function(l){const h=this[r];t.call(this,l),this.requestUpdate(r,h,a)}}throw Error("Unsupported decorator location: "+i)};function u(a){return(t,e)=>typeof e=="object"?fe(a,t,e):((i,s,n)=>{const r=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),r?Object.getOwnPropertyDescriptor(s,n):void 0})(a,t,e)}function $(a){return u({...a,state:!0,attribute:!1})}const ge=(a,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(a,t,e),e);function be(a,t){return(e,i,s)=>{const n=r=>r.renderRoot?.querySelector(a)??null;return ge(e,i,{get(){return n(this)}})}}const bt=globalThis,rt=bt.trustedTypes,Ot=rt?rt.createPolicy("lit-html",{createHTML:a=>a}):void 0,Pt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Ht="?"+O,ve=`<${Ht}>`,H=document,ot=()=>H.createComment(""),G=a=>a===null||typeof a!="object"&&typeof a!="function",vt=Array.isArray,ye=a=>vt(a)||typeof a?.[Symbol.iterator]=="function",yt=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,jt=/>/g,U=RegExp(`>|${yt}(?:([^\\s"'>=/]+)(${yt}*=${yt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Vt=/'/g,Rt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,P=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),zt=new WeakMap,j=H.createTreeWalker(H,129);function Kt(a,t){if(!vt(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ot!==void 0?Ot.createHTML(t):t}const we=(a,t)=>{const e=a.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",r=Z;for(let l=0;l<e;l++){const h=a[l];let d,m,p=-1,f=0;for(;f<h.length&&(r.lastIndex=f,m=r.exec(h),m!==null);)f=r.lastIndex,r===Z?m[1]==="!--"?r=Ut:m[1]!==void 0?r=jt:m[2]!==void 0?(Nt.test(m[2])&&(s=RegExp("</"+m[2],"g")),r=U):m[3]!==void 0&&(r=U):r===U?m[0]===">"?(r=s??Z,p=-1):m[1]===void 0?p=-2:(p=r.lastIndex-m[2].length,d=m[1],r=m[3]===void 0?U:m[3]==='"'?Rt:Vt):r===Rt||r===Vt?r=U:r===Ut||r===jt?r=Z:(r=U,s=void 0);const g=r===U&&a[l+1].startsWith("/>")?" ":"";n+=r===Z?h+ve:p>=0?(i.push(d),h.slice(0,p)+Pt+h.slice(p)+O+g):h+O+(p===-2?l:g)}return[Kt(a,n+(a[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class X{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const l=t.length-1,h=this.parts,[d,m]=we(t,e);if(this.el=X.createElement(d,i),j.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=j.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Pt)){const f=m[r++],g=s.getAttribute(p).split(O),b=/([.?@])?(.*)/.exec(f);h.push({type:1,index:n,name:b[2],strings:g,ctor:b[1]==="."?Ie:b[1]==="?"?_e:b[1]==="@"?Se:lt}),s.removeAttribute(p)}else p.startsWith(O)&&(h.push({type:6,index:n}),s.removeAttribute(p));if(Nt.test(s.tagName)){const p=s.textContent.split(O),f=p.length-1;if(f>0){s.textContent=rt?rt.emptyScript:"";for(let g=0;g<f;g++)s.append(p[g],ot()),j.nextNode(),h.push({type:2,index:++n});s.append(p[f],ot())}}}else if(s.nodeType===8)if(s.data===Ht)h.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(O,p+1))!==-1;)h.push({type:7,index:n}),p+=O.length-1}n++}}static createElement(t,e){const i=H.createElement("template");return i.innerHTML=t,i}}function Y(a,t,e=a,i){if(t===P)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=G(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(a),s._$AT(a,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=Y(a,s._$AS(a,t.values),s,i)),t}let ke=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??H).importNode(e,!0);j.currentNode=s;let n=j.nextNode(),r=0,l=0,h=i[0];for(;h!==void 0;){if(r===h.index){let d;h.type===2?d=new Q(n,n.nextSibling,this,t):h.type===1?d=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(d=new Te(n,this,t)),this._$AV.push(d),h=i[++l]}r!==h?.index&&(n=j.nextNode(),r++)}return j.currentNode=H,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class Q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Y(this,t,e),G(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ye(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&G(this._$AH)?this._$AA.nextSibling.data=t:this.T(H.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=X.createElement(Kt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new ke(s,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=zt.get(t.strings);return e===void 0&&zt.set(t.strings,e=new X(t)),e}k(t){vt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Q(this.O(ot()),this.O(ot()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class lt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(n===void 0)t=Y(this,t,e,0),r=!G(t)||t!==this._$AH&&t!==P,r&&(this._$AH=t);else{const l=t;let h,d;for(t=n[0],h=0;h<n.length-1;h++)d=Y(this,l[i+h],e,h),d===P&&(d=this._$AH[h]),r||=!G(d)||d!==this._$AH[h],d===y?t=y:t!==y&&(t+=(d??"")+n[h+1]),this._$AH[h]=d}r&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ie extends lt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class _e extends lt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class Se extends lt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Y(this,t,e,0)??y)===P)return;const i=this._$AH,s=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Te{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Y(this,t)}}const Ce={I:Q},Ae=bt.litHtmlPolyfillSupport;Ae?.(X,Q),(bt.litHtmlVersions??=[]).push("3.3.1");const wt={ATTRIBUTE:1,CHILD:2},kt=a=>(...t)=>({_$litDirective$:a,values:t});class It{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const F=kt(class extends It{constructor(a){if(super(a),a.type!==wt.ATTRIBUTE||a.name!=="class"||a.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter((t=>a[t])).join(" ")+" "}update(a,[t]){if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=a.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return P}});const{I:Ee}=Ce,Bt=()=>document.createComment(""),tt=(a,t,e)=>{const i=a._$AA.parentNode,s=t===void 0?a._$AB:t._$AA;if(e===void 0){const n=i.insertBefore(Bt(),s),r=i.insertBefore(Bt(),s);e=new Ee(n,r,a,a.options)}else{const n=e._$AB.nextSibling,r=e._$AM,l=r!==a;if(l){let h;e._$AQ?.(a),e._$AM=a,e._$AP!==void 0&&(h=a._$AU)!==r._$AU&&e._$AP(h)}if(n!==s||l){let h=e._$AA;for(;h!==n;){const d=h.nextSibling;i.insertBefore(h,s),h=d}}}return e},V=(a,t,e=a)=>(a._$AI(t,e),a),xe={},De=(a,t=xe)=>a._$AH=t,Me=a=>a._$AH,_t=a=>{a._$AR(),a._$AA.remove()};const qt=(a,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(a[s],s);return i},R=kt(class extends It{constructor(a){if(super(a),a.type!==wt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(a,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],n=[];let r=0;for(const l of a)s[r]=i?i(l,r):r,n[r]=e(l,r),r++;return{values:n,keys:s}}render(a,t,e){return this.dt(a,t,e).values}update(a,[t,e,i]){const s=Me(a),{values:n,keys:r}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=r,n;const l=this.ut??=[],h=[];let d,m,p=0,f=s.length-1,g=0,b=n.length-1;for(;p<=f&&g<=b;)if(s[p]===null)p++;else if(s[f]===null)f--;else if(l[p]===r[g])h[g]=V(s[p],n[g]),p++,g++;else if(l[f]===r[b])h[b]=V(s[f],n[b]),f--,b--;else if(l[p]===r[b])h[b]=V(s[p],n[b]),tt(a,h[b+1],s[p]),p++,b--;else if(l[f]===r[g])h[g]=V(s[f],n[g]),tt(a,s[p],s[f]),f--,g++;else if(d===void 0&&(d=qt(r,g,b),m=qt(l,p,f)),d.has(l[p]))if(d.has(l[f])){const w=m.get(r[g]),B=w!==void 0?s[w]:null;if(B===null){const q=tt(a,s[p]);V(q,n[g]),h[g]=q}else h[g]=V(B,n[g]),tt(a,s[p],B),s[w]=null;g++}else _t(s[f]),f--;else _t(s[p]),p++;for(;g<=b;){const w=tt(a,h[b+1]);V(w,n[g]),h[g++]=w}for(;p<=f;){const w=s[p++];w!==null&&_t(w)}return this.ut=r,De(a,h),P}});function et(a){if(!/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(a))throw new Error("Invalid date format. Expected YYYY-MM-DD or YYYY-MM-DDTHH:MM");const e=new Date(a);if(isNaN(e.getTime()))throw new Error("Invalid date value");return e}function Le(a){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(a))throw new Error("Invalid time format. Use HH:MM (24-hour format)");return a}function Oe(a,t,e="en-US"){const i=p=>{if(p>=11&&p<=13)return"th";switch(p%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},s=new Intl.DateTimeFormat(e,{month:"long"}),n=new Intl.DateTimeFormat(e,{month:"short"}),r=new Intl.DateTimeFormat(e,{weekday:"long"}),l=new Intl.DateTimeFormat(e,{weekday:"short"}),h={YYYY:()=>a.getFullYear().toString(),YY:()=>(a.getFullYear()%100).toString().padStart(2,"0"),MMMM:()=>s.format(a),MMM:()=>n.format(a),MM:()=>(a.getMonth()+1).toString().padStart(2,"0"),M:()=>(a.getMonth()+1).toString(),dddd:()=>r.format(a),ddd:()=>l.format(a),Do:()=>a.getDate()+(e.startsWith("en")?i(a.getDate()):""),DD:()=>a.getDate().toString().padStart(2,"0"),D:()=>a.getDate().toString(),HH:()=>a.getHours().toString().padStart(2,"0"),H:()=>a.getHours().toString(),hh:()=>(a.getHours()%12||12).toString().padStart(2,"0"),h:()=>(a.getHours()%12||12).toString(),mm:()=>a.getMinutes().toString().padStart(2,"0"),m:()=>a.getMinutes().toString(),A:()=>a.getHours()>=12?"PM":"AM",a:()=>a.getHours()>=12?"pm":"am"},d=Object.keys(h).sort((p,f)=>f.length-p.length),m=new RegExp(d.join("|"),"g");return t.replace(m,p=>h[p]())}var Pe=Object.defineProperty,E=(a,t,e,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(t,e,s)||s);return s&&Pe(t,e,s),s};const Yt=a=>{class t extends a{constructor(){super(...arguments),this.today=!1,this.jumpable=!1,this["starts-with"]=0,this["disabled-dates"]="",this["marked-dates"]="",this["view-date"]=new Date().toISOString().split("T")[0],this.min="",this.max="",this["weekday-format"]="short",this.lang="en-us",this.isDirty=!1}get $viewDate(){const[i,s,n]=this["view-date"].split("-").map(Number);return this.createUTCDate(i,s-1,n)}createUTCDate(i,s,n){return new Date(Date.UTC(i,s,n))}dateToUTC(i){return this.createUTCDate(i.getFullYear(),i.getMonth(),i.getDate())}getTodayUTC(){return this.dateToUTC(new Date)}getUTCDate(i){return this.dateToUTC(i)}isDateInRange(i){if(!this.min&&!this.max)return!0;const s=new Date(i);if(this.min){const n=et(this.min);if(s<n)return!1}if(this.max){const n=et(this.max);if(n.setDate(n.getDate()+1),s>=n)return!1}return!0}parseDates(i){return i?i.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{try{return et(s).toISOString().slice(0,10)}catch{return console.warn(`[fr-calendar] Invalid date format in list: "${s}".`),""}}).filter(Boolean):[]}getTimestampComponent(i){const s=this.lang||void 0;return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,monthName:i.toLocaleDateString(s,{month:"long",timeZone:"UTC"}),day:i.getUTCDate(),dayName:i.toLocaleDateString(s,{weekday:"long",timeZone:"UTC"}),ISOString:i.toISOString()}}$icons(i){const s=super.$icons(i);if(s)return s;switch(i){case"chevron-left":return c.html`
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
          `;case"chevron-right":return c.html`
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
          `;case"calendar":return c.html`
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
          `}}}return E([u({type:Boolean})],t.prototype,"today"),E([u({type:Boolean})],t.prototype,"jumpable"),E([u({type:Number})],t.prototype,"starts-with"),E([u({type:String})],t.prototype,"disabled-dates"),E([u({type:String})],t.prototype,"marked-dates"),E([u({type:String})],t.prototype,"view-date"),E([u({type:String})],t.prototype,"min"),E([u({type:String})],t.prototype,"max"),E([u({type:String})],t.prototype,"weekday-format"),E([u({type:String})],t.prototype,"lang"),t};var He=Object.defineProperty,it=(a,t,e,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(t,e,s)||s);return s&&He(t,e,s),s};const N=a=>{class t extends a{constructor(){super(...arguments),this.disabled=!1,this.name="",this.placeholder="",this.required=!1,this.value=""}renderHidden(){return typeof this.$value=="string"?this.name?c.html`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `:"":this.$value.map(i=>c.html`
              <input name="${this.name}[]" type="hidden" value="${i}" />
            `)}emit(){this.dispatchEvent(new CustomEvent(this["input-event"],{detail:{value:this.$value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.initializeValue()}}return it([u({type:Boolean})],t.prototype,"disabled"),it([u({type:String})],t.prototype,"name"),it([u({type:String})],t.prototype,"placeholder"),it([u({type:Boolean})],t.prototype,"required"),it([u({type:String})],t.prototype,"value"),t};class St extends It{constructor(t){if(super(t),this.it=y,t.type!==wt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===P)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}St.directiveName="unsafeHTML",St.resultType=1;const Ft=kt(St);function ht(a,t=!1){if(t){if(a.startsWith("{"))try{return JSON.parse(a)}catch(e){return console.error("Error parsing JSON:",a,e),a}return a}if(a.startsWith("{"))try{return JSON.parse(a)}catch(e){return console.error("Error parsing JSON:",a,e),{}}if(a.replace(/\\:/g,"").includes(":"))try{const e={};return Jt(a.replace(/[;\s]+$/,""),";").forEach(s=>{const n=Jt(s.trim(),":");if(n.length>=2){const r=n[0].trim(),l=n.slice(1).join(":").trim();r&&(e[r]=Wt(l))}}),e}catch(e){return console.error("Error parsing key-value pairs:",a,e),{}}return Wt(a)}function Jt(a,t){const e=[];let i="",s=0;for(;s<a.length;)a[s]==="\\"&&s+1<a.length&&a[s+1]===t?(i+="\\"+t,s+=2):a[s]===t?(e.push(i),i="",s++):(i+=a[s],s++);return e.push(i),e}function Wt(a){return a.replace(/\\:/g,":").replace(/\\;/g,";")}function Ue(a){const t={},e=(s,n=[])=>{const r=n.length>0?{keywords:n}:{};return Object.keys(s.dataset).forEach(l=>{if(l==="keywords"){const h=s.dataset.keywords.split(",").map(d=>d.trim()).filter(d=>d.length>0);r.keywords=n.length>0?[...n,...h]:h}else r[l]=s.dataset[l]}),r},i=(s,n,r,l=!1)=>{const h=r.hasAttribute("value")?r.getAttribute("value"):r.textContent.trim(),d=e(r,[h]);t[s]||(t[s]={text:n,options:[]}),t[s].options.push({group:s,value:h,text:r.textContent.trim(),disabled:l||r.disabled,selected:r.hasAttribute("selected"),data:d})};return Array.from(a.children).forEach(s=>{if(s.nodeName==="OPTGROUP"){const n=s,r=n.dataset.key||n.getAttribute("label"),l=n.getAttribute("label").trim(),h=e(n);Array.from(n.children).forEach(d=>{d.nodeName==="OPTION"&&i(r,l,d,n.disabled)}),Object.keys(h).length>0&&(t[r]||(t[r]={text:l,options:[]}),t[r].data=h)}else s.nodeName==="OPTION"&&i("__","__",s)}),t}var je=Object.defineProperty,T=(a,t,e,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(t,e,s)||s);return s&&je(t,e,s),s};let ut=null,Gt=!1;class v extends c.LitElement{constructor(){super(...arguments),this.cls="",this.stl="",this.i18n="",this["force-prevent-rerender"]=!1,this.$i18n={},this.$cls={},this.$stl={},this.$config={},this.$i=new Map,this.$template="",this.$data={},this.isRendered=!1,this.HTMLScript=null,this.HTMLIconContainer=null,this.HTMLTemplateContainer=null,this.HTMLDataSource=null,this.configObserver=null,this.dataSourceObserver=null,this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner"}get $normalizedI18n(){const t={};return Object.keys(this.$i18n).forEach(e=>{const i=this.$i18n[e];t[e]=i.includes(",")?i.split(",").map(s=>s.trim()):i}),t}$icons(t){return this.$i.get(t)}getI18nText(t,e={},i){let s=this.$i18n[t];if(!s){const n=this.tagName.toLowerCase(),r=this.$i18n[n];typeof r=="object"&&r!==null&&t in r&&(s=r[t])}return s||(s=e[t]||""),i!==void 0&&(typeof i=="number"?s=s.replace("{n}",String(i)):Object.keys(i).forEach(n=>{const r=i[n];s=s.replace(new RegExp(`\\{${n}\\}`,"g"),String(r))})),s}initializeCls(){if(this.cls){const t=ht(this.cls);typeof t=="string"?this.$cls[this["cls-default-element"]]=t:Object.keys(t).forEach(e=>{this.$cls[e]=t[e]})}}initializeStl(){if(this.stl){const t=ht(this.stl);typeof t=="string"?this.$stl[this["stl-default-element"]]=t:Object.keys(t).forEach(e=>{this.$stl[e]=t[e]})}}initializeGI18n(){if(Gt)return;Gt=!0;const t=document.getElementById("uk-i18n");if(t&&t.textContent)try{ut=JSON.parse(t.textContent)}catch(e){console.error('Failed to parse global i18n from <script id="uk-i18n">.',e),ut={}}else ut={}}initializeI18n(){this.initializeGI18n();const t=this.i18n?ht(this.i18n):{};typeof t=="object"&&t!==null&&(this.$i18n=Object.assign({},ut,t))}initializeConfig(){this.HTMLScript=this.querySelector('script[data-fn="config"][type="application/json"]')}initializeIcons(){this.HTMLIconContainer=this.querySelector('template[data-fn="icons"]')}initializeTemplate(){this.HTMLTemplateContainer=this.querySelector('template[data-fn="template"]')}initializeDataSource(){this.HTMLDataSource=this.querySelector('select[data-fn="data-source"]')}parseIcons(){if(!this.HTMLIconContainer)return;this.HTMLIconContainer.content.querySelectorAll("[data-key]").forEach(e=>{const i=e.getAttribute("data-key");if(i){const s=e.cloneNode(!0);s.removeAttribute("data-key");const n=s.outerHTML;this.$i.set(i,c.html`${Ft(n)}`)}})}parseTemplate(){this.HTMLTemplateContainer&&(this.$template=this.HTMLTemplateContainer.innerHTML.trim())}parseConfig(){if(this.HTMLScript)try{const t=this.HTMLScript.textContent;if(this.$config=t?JSON.parse(t):{},this.$config&&typeof this.$config=="object"){if("i18n"in this.$config){const e=this.$config.i18n;typeof e=="object"&&e!==null&&(this.$i18n={...this.$i18n,...e})}if("cls"in this.$config){const e=this.$config.cls;typeof e=="string"?this.$cls[this["cls-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$cls={...this.$cls,...e})}if("stl"in this.$config){const e=this.$config.stl;typeof e=="string"?this.$stl[this["stl-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$stl={...this.$stl,...e})}}}catch(t){console.warn(`${this.tagName.toLowerCase()}: Failed to parse config JSON:`,t),this.$config={}}}parseDataSource(){this.HTMLDataSource&&(this.$data=Ue(this.HTMLDataSource))}initializeConfigObserver(){!this.HTMLScript||!this.HTMLScript.hasAttribute("data-reactive")||(this.configObserver=new MutationObserver(()=>{this.parseConfig(),this.onConfigChanged()}),this.configObserver.observe(this.HTMLScript,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}initializeDataSourceObserver(){!this.HTMLDataSource||!this.HTMLDataSource.hasAttribute("data-reactive")||(this.dataSourceObserver=new MutationObserver(()=>{this.parseDataSource(),this.onDataSourceChanged()}),this.dataSourceObserver.observe(this.HTMLDataSource,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}onConfigChanged(){}onDataSourceChanged(){}connectedCallback(){super.connectedCallback(),this["force-prevent-rerender"]&&this.querySelector("[data-host-inner]")&&(this.isRendered=!0),this.initializeI18n(),this.initializeCls(),this.initializeStl(),this.initializeConfig(),this.initializeIcons(),this.initializeTemplate(),this.initializeDataSource(),this.HTMLScript&&(this.parseConfig(),this.initializeConfigObserver()),this.HTMLIconContainer&&this.parseIcons(),this.HTMLTemplateContainer&&this.parseTemplate(),this.HTMLDataSource&&(this.parseDataSource(),this.initializeDataSourceObserver())}disconnectedCallback(){super.disconnectedCallback(),this.configObserver&&(this.configObserver.disconnect(),this.configObserver=null),this.dataSourceObserver&&(this.dataSourceObserver.disconnect(),this.dataSourceObserver=null)}shouldUpdate(t){return this["force-prevent-rerender"]&&this.isRendered?!1:super.shouldUpdate(t)}updated(t){super.updated(t),this.isRendered||(this.isRendered=!0)}createRenderRoot(){return this}}T([u({type:String})],v.prototype,"cls"),T([u({type:String})],v.prototype,"stl"),T([u({type:String})],v.prototype,"i18n"),T([u({type:Boolean})],v.prototype,"force-prevent-rerender"),T([$()],v.prototype,"$i18n"),T([$()],v.prototype,"$cls"),T([$()],v.prototype,"$stl"),T([$()],v.prototype,"$config"),T([$()],v.prototype,"$i"),T([$()],v.prototype,"$template"),T([$()],v.prototype,"$data");var Ve=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,ct=(a,t,e,i)=>{for(var s=i>1?void 0:i?Re(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ve(t,e,s),s};o.Calendar=class extends Yt(N(v)){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-calendar:change",this.$cls={"host-inner":"uk-cal",header:"uk-cal-header","previous-button":"uk-button uk-button-secondary uk-button-icon uk-button-small","next-button":"uk-button uk-button-secondary uk-button-icon uk-button-small",title:"uk-cal-title",jumper:"uk-cal-jumper","month-select":"uk-select uk-form-small","year-input":"uk-input uk-form-small",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"uk-cal-jumper-month","jumper-year":"uk-cal-jumper-year","jumper-button":"uk-button uk-button-secondary uk-button-icon uk-button-small","day-outside-month":"uk-cal-oom","day-selected":"uk-active","day-today":"uk-nothing","day-marked":"uk-cal-marked","button-outside-month":"uk-nothing","button-selected":"uk-nothing","button-today":"uk-nothing","button-marked":"uk-nothing"},this.$stl={"host-inner":"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-button":"","day-outside-month":"","day-selected":"","day-today":"","day-marked":"","button-outside-month":"","button-selected":"","button-today":"","button-marked":""},this.defaultI18n={"prev-month":"Previous month","next-month":"Next month","prev-year":"Previous year","next-year":"Next year","select-month":"Select month","select-year":"Select year"},this.navigate=t=>{const e=t.target;if(!e?.matches("button[data-iso]"))return;const i=Array.from(this.querySelectorAll("button[data-iso]")),s=i.indexOf(e),n=this.getGridPosition(e);if(!n)return;const{rowIndex:r,colIndex:l}=n;let h;const d={ArrowLeft:()=>this.findNextEnabled(i,s-1,-1),ArrowRight:()=>this.findNextEnabled(i,s+1,1),ArrowUp:()=>this.getNextEnabledInColumn(r-1,l,-1),ArrowDown:()=>this.getNextEnabledInColumn(r+1,l,1),Home:()=>this.getRowFirstEnabledButton(r),End:()=>this.getRowLastEnabledButton(r),PageUp:t.ctrlKey||t.metaKey?()=>{this.navigateYear("prev")}:()=>{this.navigateMonth("prev")},PageDown:t.ctrlKey||t.metaKey?()=>{this.navigateYear("next")}:()=>{this.navigateMonth("next")}};if(d[t.key]){t.preventDefault();const m=d[t.key]();m&&(h=m)}else if(t.key==="Enter"||t.key===" "){t.preventDefault(),e.click();return}h?.focus()}}get $value(){return this.$active?this.$active.slice(0,10):""}get $text(){return""}initializeValue(){if(this.value)try{const t=et(this.value);this.$active=t.toISOString(),this["view-date"]=t.toISOString().slice(0,10)}catch(t){console.error(`[uk-calendar] Invalid date format for value: "${this.value}".`,t)}else this.today&&(this.$active=this.getTodayUTC().toISOString())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.navigate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.navigate)}updated(t){t.has("$active")&&(this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);e&&this.isDirty&&e.focus()}),this.emit())}findNextEnabled(t,e,i){for(let s=e;s>=0&&s<t.length;s+=i)if(!t[s].disabled)return t[s]}getNextEnabledInColumn(t,e,i){const s=Array.from(this.querySelectorAll("tr"));for(let n=t;n>=0&&n<s.length;n+=i){const r=s[n]?.children[e]?.querySelector("button[data-iso]");if(r&&!r.disabled)return r}}getRowFirstEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).find(i=>!i.disabled)}getRowLastEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).reverse().find(i=>!i.disabled)}getGridPosition(t){const e=t.closest("td"),i=e?.closest("tr");return!i||!e?null:{rowIndex:Array.from(this.querySelectorAll("tr")).indexOf(i),colIndex:Array.from(i.children).indexOf(e)}}select(t){this.$active=t.ISOString,t.month!=="current"&&(this["view-date"]=t.ISOString.slice(0,10)),this.isDirty||(this.isDirty=!0)}navigateYear(t){const[e,i,s]=this["view-date"].split("-"),n=t==="prev"?parseInt(e)-1:parseInt(e)+1;this["view-date"]=`${n}-${i}-${s}`}navigateMonth(t){const[e,i]=this["view-date"].split("-").map(Number);let s=i,n=e;t==="prev"?i===1?(s=12,n-=1):s-=1:i===12?(s=1,n+=1):s+=1,this["view-date"]=`${n}-${s.toString().padStart(2,"0")}-01`}selectMonth(t){const[e]=this["view-date"].split("-");this["view-date"]=`${e}-${(t+1).toString().padStart(2,"0")}-01`}setYear(t){if(/^\d{4}$/.test(t)){const[,e,i]=this["view-date"].split("-");this["view-date"]=`${t}-${e}-${i}`}}get weekdays(){const t=this.lang||void 0,e=[];for(let i=0;i<7;i++){const s=(this["starts-with"]+i)%7,n=this.createUTCDate(2023,0,1+s);e.push(n.toLocaleDateString(t,{weekday:this["weekday-format"],timeZone:"UTC"}))}return e}get calendar(){const[t,e]=this["view-date"].split("-").map(Number),i=this.getTodayUTC().toISOString().slice(0,10),s=this.parseDates(this["marked-dates"]),n=new Set(this.parseDates(this["disabled-dates"])),r=this.createUTCDate(t,e-1,1),l=this.createUTCDate(t,e,0).getUTCDate(),h=this.createUTCDate(t,e-1,0).getUTCDate();let d=(r.getUTCDay()-this["starts-with"]+7)%7;const m=[];let p=1,f=h-d+1,g=1;for(let b=0;b<6;b++){const w=[];for(let B=0;B<7;B++){let q,$t,mt;b===0&&B<d?(q=this.createUTCDate(t,e-2,f),$t=f,mt="prev",f++):p>l?(q=this.createUTCDate(t,e,g),$t=g,mt="next",g++):(q=this.createUTCDate(t,e-1,p),$t=p,mt="current",p++);const Tt=q.toISOString(),Ct=Tt.slice(0,10);w.push({date:$t,month:mt,isToday:Ct===i,isDisabled:n.has(Ct)||!this.isDateInRange(Tt),isMarked:s.includes(Ct),ISOString:Tt})}if(m.push(w),p>l&&b>=4)break}return m}render(){return c.html`
      <div
        data-host-inner
        class=${this.$cls["host-inner"]}
        style=${this.$stl["host-inner"]}
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
              ${R(this.weekdays,t=>t,t=>c.html`<th
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
            ${R(this.calendar,t=>t[0].ISOString,t=>this.renderWeek(t))}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `}renderHeader(){const{year:t,monthName:e}=this.getTimestampComponent(this.$viewDate),i=this.getI18nText("prev-month",this.defaultI18n),s=this.getI18nText("next-month",this.defaultI18n);return c.html`
      <div class=${this.$cls.header} style=${this.$stl.header}>
        ${this.jumpable?c.nothing:c.html`
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
          ${this.jumpable?this.renderJumper():c.html`<span>${e} ${t}</span>`}
        </div>

        ${this.jumpable?c.nothing:c.html`
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
    `}renderJumper(){const{year:t,month:e}=this.getTimestampComponent(this.$viewDate),i=this.lang||void 0,s=Array.from({length:12},(d,m)=>this.createUTCDate(2e3,m,15).toLocaleDateString(i,{month:"long",timeZone:"UTC"})),n=this.getI18nText("prev-month",this.defaultI18n),r=this.getI18nText("next-month",this.defaultI18n),l=this.getI18nText("prev-year",this.defaultI18n),h=this.getI18nText("next-year",this.defaultI18n);return c.html`
      <div class=${this.$cls.jumper} style=${this.$stl.jumper}>
        <div
          class="${this.$cls["jumper-month"]}"
          style=${this.$stl["jumper-month"]}
        >
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateMonth("prev")}
            type="button"
            aria-label=${n}
          >
            ${this.$icons("chevron-left")}
          </button>
          <select
            class=${this.$cls["month-select"]}
            style=${this.$stl["month-select"]}
            aria-label=${this.getI18nText("select-month",{selectMonth:"Select month"})}
            .value=${(e-1).toString()}
            @change=${d=>this.selectMonth(Number(d.target.value))}
          >
            ${s.map((d,m)=>c.html`<option value=${m}>${d.substring(0,3)}</option>`)}
          </select>
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateMonth("next")}
            type="button"
            aria-label=${r}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
        <div
          class="${this.$cls["jumper-year"]}"
          style=${this.$stl["jumper-year"]}
        >
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateYear("prev")}
            type="button"
            aria-label=${l}
          >
            ${this.$icons("chevron-left")}
          </button>
          <input
            class=${this.$cls["year-input"]}
            style=${this.$stl["year-input"]}
            type="number"
            step="1"
            aria-label=${this.getI18nText("select-year",this.defaultI18n)}
            .value=${t.toString()}
            @input=${d=>{const m=d.target;m.value.length===4&&this.setYear(m.value)}}
          />
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateYear("next")}
            type="button"
            aria-label=${h}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
      </div>
    `}renderWeek(t){return c.html`
      <tr class=${this.$cls.week} style=${this.$stl.week} role="row">
        ${R(t,e=>e.ISOString,e=>this.renderDay(e))}
      </tr>
    `}renderDay(t){const e=this.$active===t.ISOString,i=new Date(t.ISOString),s=this.lang||void 0,n=i.toLocaleDateString(s,{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),r={[this.$cls.day]:!0,[this.$cls["day-outside-month"]]:t.month!=="current",[this.$cls["day-selected"]]:e,[this.$cls["day-today"]]:t.isToday,[this.$cls["day-marked"]]:t.isMarked},l={[this.$cls["day-button"]]:!0,[this.$cls["button-selected"]]:e,[this.$cls["button-today"]]:t.isToday,[this.$cls["button-marked"]]:t.isMarked,[this.$cls["button-outside-month"]]:t.month!=="current"};return c.html`
      <td
        class=${F(r)}
        style=${this.$stl.day}
        role="gridcell"
        aria-selected=${e?"true":"false"}
      >
        <button
          class=${F(l)}
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
    `}},ct([$()],o.Calendar.prototype,"$active",2),ct([$()],o.Calendar.prototype,"$cls",2),ct([$()],o.Calendar.prototype,"$stl",2),o.Calendar=ct([_("uk-calendar")],o.Calendar);var Ne=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,x=(a,t,e,i)=>{for(var s=i>1?void 0:i?ze(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ne(t,e,s),s};o.InputDate=class extends Yt(N(v)){constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["input-event"]="uk-input-date:change",this["display-format"]="MMMM DD, YYYY",this["with-time"]=!1,this.clock="12h",this["require-time"]=!1,this.drop="mode: click; animation: uk-animation-slide-top-small;",this.$cls={container:"",button:"","button-text":"",icon:"",dropdown:"uk-datepicker-dropdown",calendar:"","time-wrapper":"uk-datepicker-time",time:""},this.$stl={container:"",button:"","button-text":"",icon:"",dropdown:"",calendar:"","time-wrapper":"",time:""},this.defaultI18n={"button-label":"Select date","dialog-label":"Date picker",selected:"selected",placeholder:"Select a date","placeholder-with-time":"Select a date and time"}}get $value(){return this.$date&&this.$time?`${this.$date}T${this.$time}`:this.$date?this.$date:""}get $text(){if(this.$value)try{const t=this.$value.includes("T")?new Date(this.$value):new Date(this.$value+"T00:00:00");let e=this["display-format"];if(this["with-time"]&&this.$time){const i=this.clock==="12h"?"h:mm A":"HH:mm";e=`${this["display-format"]} ${i}`}return Oe(t,e,this.lang)}catch(t){return console.error("[uk-input-date] Failed to format date:",t),this.$value}return this.placeholder?this.placeholder:this.getI18nText(this["with-time"]?"placeholder-with-time":"placeholder",this.defaultI18n)}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated?.(t),this.renderRoot.querySelector("uk-calendar")?.addEventListener("uk-calendar:change",e=>{this.$date=e.detail.value}),this["with-time"]&&this.renderRoot.querySelector("uk-input-time")?.addEventListener("uk-input-time:input",e=>{this.$time=e.detail.value})}updated(t){super.updated(t),(t.has("$date")||t.has("$time"))&&this.emit()}initializeValue(){if(this.value)try{if(et(this.value),!this.value.includes("T"))this.$date=this.value;else{const[e,i]=this.value.split("T");this.$date=e,this.$time=i}}catch(t){console.error("[uk-input-date] Failed to initialize date value:",t)}}get buttonLabel(){const t=this.getI18nText("button-text",this.defaultI18n);return this.$value?`${t}, ${this.getI18nText("selected",this.defaultI18n)}: ${this.$text}`:t}render(){const t=this.getI18nText("dialog-label",this.defaultI18n);return c.html`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <div class="uk-position-relative">
          <button
            class="${this.$cls.button}"
            style="${this.$stl.button}"
            type="button"
            ?disabled=${this.disabled}
            aria-label="${this.buttonLabel}"
            aria-haspopup="dialog"
          >
            <span
              class="${this.$cls["button-text"]}"
              style="${this.$stl["button-text"]}"
            >
              ${this.$text}
            </span>
            ${this.$icons("calendar")||c.nothing}
          </button>

          <div
            class="${this.$cls.dropdown} uk-drop"
            style="${this.$stl.dropdown}"
            data-uk-dropdown="${this.drop}"
            role="dialog"
            aria-label="${t}"
          >
            <uk-calendar
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
            ></uk-calendar>

            ${this.renderTimeInput()}
          </div>
        </div>

        ${this.renderHidden()}
      </div>
    `}renderTimeInput(){return this["with-time"]?c.html`
      <div
        class="${this.$cls["time-wrapper"]}"
        style="${this.$stl["time-wrapper"]}"
      >
        <uk-input-time
          class="${this.$cls.time}"
          style="${this.$stl.time}"
          ?required=${this["require-time"]}
          .i18n=${this.i18n}
          .value=${this.$time||""}
          .clock=${this.clock}
          .lang=${this.lang}
          .now=${this.today}
        ></uk-input-time>
      </div>
    `:c.nothing}},x([u({type:String,attribute:"display-format"})],o.InputDate.prototype,"display-format",2),x([u({type:Boolean,attribute:"with-time"})],o.InputDate.prototype,"with-time",2),x([u({type:String})],o.InputDate.prototype,"clock",2),x([u({type:Boolean,attribute:"require-time"})],o.InputDate.prototype,"require-time",2),x([u({type:String})],o.InputDate.prototype,"drop",2),x([$()],o.InputDate.prototype,"$date",2),x([$()],o.InputDate.prototype,"$time",2),x([$()],o.InputDate.prototype,"$cls",2),x([$()],o.InputDate.prototype,"$stl",2),o.InputDate=x([_("uk-input-date")],o.InputDate);var Ke=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,D=(a,t,e,i)=>{for(var s=i>1?void 0:i?Be(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ke(t,e,s),s};o.InputPin=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-pin:change",this.autofocus=!1,this.length=6,this["input-mode"]="numeric",this["show-labels"]=!1,this.defaultI18n={label:"PIN Code",description:"Enter {length}-digit code","field-label":"Digit {n} of {total}",loaded:"PIN input ready",complete:"PIN entry complete","field-filled":"Field {n} filled","invalid-character":"Invalid character entered"},this.$cls={"host-inner":"",wrapper:"uk-input-pin",input:"",label:"",description:""},this.$stl={container:"",wrapper:"",input:"",label:"",description:""},this.$pin="",this.$inputs=null,this.groupId=""}get $value(){return this.$pin}get $text(){return""}initializeValue(){if(this.groupId=this.id?`${this.id}-group`:`pin-${Math.random().toString(36).substr(2,9)}`,this.value){const t=this.value.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(t)){console.warn(`[uk-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`);return}this.$pin=t}}firstUpdated(t){this.$inputs=this.renderRoot.querySelectorAll("input[data-pin-input]"),this.setupPasteHandlers(),this.populateInitialValue(),this.announceToScreenReader(this.getI18nText("loaded",this.defaultI18n))}populateInitialValue(){if(!(!this.$pin||!this.$inputs)&&(this.$pin.split("").forEach((t,e)=>{const i=this.$inputs[e];i&&(i.value=t,i.disabled=!1)}),this.$pin.length<this.length)){const t=this.$inputs[this.$pin.length];t&&(t.disabled=!1)}}setupPasteHandlers(){this.$inputs?.forEach(t=>{t.addEventListener("paste",e=>{e.preventDefault();const i=e.clipboardData;i&&this.handlePaste(i.getData("Text"))})})}handlePaste(t){if(!this.$inputs)return;const e=t.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(e)){this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}this.$pin=e,e.split("").forEach((i,s)=>{const n=this.$inputs[s];n.disabled=!1,n.value=i});for(let i=e.length;i<this.length;i++){const s=this.$inputs[i];s.value="",s.disabled=i!==e.length}if(e.length<this.length){const i=this.$inputs[e.length];i.disabled=!1,i.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e.length+1}))}else this.$inputs[this.$focus]?.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.emit()}handleKeyNavigation(t,e){if(!(this.$focus===void 0||!this.$inputs))switch(t.key){case"Backspace":if(e.value.length===0&&this.$focus>0){t.preventDefault();const i=this.$inputs[this.$focus-1];i.focus(),i.select(),e.disabled=!0}break;case"Delete":if(e.value.length===0){t.preventDefault();const i=this.$inputs[this.$focus+1];i&&(i.focus(),i.setSelectionRange(0,0))}break;case"ArrowLeft":if(t.preventDefault(),this.$focus>0){const i=this.$inputs[this.$focus-1];i.focus(),i.setSelectionRange(1,1)}break;case"ArrowRight":if(t.preventDefault(),this.$focus<this.length-1){const i=this.$inputs[this.$focus+1];i.disabled||(i.focus(),i.setSelectionRange(0,0))}break;case"Home":t.preventDefault(),this.$inputs[0]?.focus();break;case"End":t.preventDefault();for(let i=this.length-1;i>=0;i--){const s=this.$inputs[i];if(!s.disabled){s.focus();break}}break}}handleInput(t,e){if(!this.$inputs)return;const i=t.target;if(this.pattern&&i.value&&!new RegExp(`[${this.pattern}]`).test(i.value)){i.value="",this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}if(i.value.length===1)if(e<this.length-1){const s=this.$inputs[e+1];s.disabled=!1,s.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e+2}))}else i.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.updatePinValue(),this.emit()}updatePinValue(){if(!this.$inputs)return;let t="";this.$inputs.forEach(e=>{t+=e.value}),this.$pin=t}emitComplete(){this.dispatchEvent(new CustomEvent("uk-input-pin:complete",{detail:{value:this.$value},bubbles:!0,composed:!0}))}announceToScreenReader(t){if(!t)return;const e=this.renderRoot.querySelector('[role="status"]');e&&(e.textContent=t,setTimeout(()=>{e.textContent=""},1e3))}get groupLabel(){return this.getI18nText("label",this.defaultI18n)}get groupDescription(){return this.getI18nText("description",this.defaultI18n,{length:this.length})}getFieldLabel(t){return this.getI18nText("field-label",this.defaultI18n,{n:t+1,total:this.length})}renderInput(t){const e=this.getFieldLabel(t);return c.html`
      <input
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
    `}renderLabel(){return this.querySelector('[slot="label"]')?c.html`
        <span
          id="${this.groupId}-label"
          class=${F({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.label}
        >
          <slot name="label"></slot>
        </span>
      `:c.html`
      <span
        id="${this.groupId}-label"
        class=${F({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.label}
      >
        ${this.groupLabel}
      </span>
    `}renderDescription(){return this.querySelector('[slot="description"]')?c.html`
        <span
          id="${this.groupId}-desc"
          class=${F({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.description}
        >
          <slot name="description"></slot>
        </span>
      `:c.html`
      <span
        id="${this.groupId}-desc"
        class=${F({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.description}
      >
        ${this.groupDescription}
      </span>
    `}render(){return c.html`
      <div
        data-host-inner
        class=${this.$cls["host-inner"]}
        style=${this.$cls["host-inner"]}
        role="group"
        aria-labelledby="${this.groupId}-label ${this.groupId}-desc"
      >
        ${this.renderLabel()} ${this.renderDescription()}

        <div
          class=${this.$cls.wrapper}
          style=${this.$stl.wrapper}
          role="presentation"
        >
          ${Array(this.length).fill("").map((t,e)=>this.renderInput(e))}
        </div>

        <span
          role="status"
          aria-live="polite"
          aria-atomic="true"
          class="sr-only"
        ></span>

        ${this.renderHidden()}
      </div>
    `}},D([u({type:Boolean})],o.InputPin.prototype,"autofocus",2),D([u({type:Number})],o.InputPin.prototype,"length",2),D([u({type:String,attribute:"input-mode"})],o.InputPin.prototype,"input-mode",2),D([u({type:String})],o.InputPin.prototype,"pattern",2),D([u({type:Boolean,attribute:"show-labels"})],o.InputPin.prototype,"show-labels",2),D([$()],o.InputPin.prototype,"$cls",2),D([$()],o.InputPin.prototype,"$stl",2),D([$()],o.InputPin.prototype,"$focus",2),D([$()],o.InputPin.prototype,"$pin",2),o.InputPin=D([_("uk-input-pin")],o.InputPin);var qe=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,M=(a,t,e,i)=>{for(var s=i>1?void 0:i?Ye(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&qe(t,e,s),s};o.InputRange=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-range:input",this.multiple=!1,this.min=0,this.max=100,this.step=1,this.label=!1,this["label-position"]="top",this["aria-label"]="",this._lowValue=this.min,this._highValue=this.max,this._label=!1,this.activeKnob=null,this.trackElement=null,this.isDragging=!1,this.defaultI18n={"aria-value-text":"Value: {value}","aria-range-text":"Range from {low} to {high}","low-knob-label":"Minimum value","high-knob-label":"Maximum value","aria-label":"Range slider"},this.$cls={"host-inner":"uk-input-range",runnable:"",fill:"",knob:"","knob-low":"","knob-high":"","knob-dragging":"",label:"","label-top":"","label-bottom":""},this.$stl={"host-inner":"",runnable:"",fill:"",knob:"","knob-low":"","knob-high":"",label:"","label-top":"","label-bottom":""},this.preventScrolling=t=>{this.isDragging&&t.preventDefault()},this.onPointerStart=(t,e)=>{this.disabled||(t.preventDefault(),t.stopPropagation(),this.activeKnob=e,this.isDragging=!0,t.currentTarget.focus(),document.addEventListener("pointermove",this.onPointerMove,{passive:!1}),document.addEventListener("pointerup",this.onPointerEnd),document.addEventListener("pointercancel",this.onPointerEnd),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onPointerEnd),document.addEventListener("touchcancel",this.onPointerEnd))},this.onPointerMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.clientX);this.handleValueChange(this.activeKnob,e)},this.onTouchMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.touches[0].clientX);this.handleValueChange(this.activeKnob,e)},this.onPointerEnd=()=>{this.isDragging=!1,this.activeKnob=null,this.cleanupEventListeners()},this.onKeyDown=(t,e)=>{if(this.disabled)return;const i=e==="low"?this._lowValue:this._highValue;let s=0;switch(t.key){case"ArrowRight":case"ArrowUp":s=this.step;break;case"ArrowLeft":case"ArrowDown":s=-this.step;break;case"Home":this.handleValueChange(e,e==="low"?this.min:this._lowValue),t.preventDefault();return;case"End":this.handleValueChange(e,e==="high"?this.max:this._highValue),t.preventDefault();return;case"PageUp":s=this.step*10;break;case"PageDown":s=-this.step*10;break;default:return}s&&(t.preventDefault(),this.handleValueChange(e,i+s))}}get $text(){return""}get $value(){return this.multiple?this.value.split(",").map(t=>t.trim()):this.value}get precision(){const t=this.step.toString();return t.includes(".")?t.split(".")[1].length:0}connectedCallback(){super.connectedCallback();const t=this.getAttribute("label");this._label=t===""?!0:t||!1,this.addEventListener("touchstart",this.preventScrolling,{passive:!1})}disconnectedCallback(){this.removeEventListener("touchstart",this.preventScrolling),this.cleanupEventListeners(),super.disconnectedCallback?.()}updated(t){(t.has("value")||t.has("multiple"))&&this.parseValue()}initializeValue(){this.value?this.parseValue():(this._lowValue=this.min,this._highValue=this.max,this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue))}parseValue(){if(this.multiple){const[t,e]=this.value.split(",").map(i=>parseFloat(i));t!==void 0&&e!==void 0&&(this._lowValue=this.clamp(t),this._highValue=this.clamp(e))}else this._lowValue=this.clamp(parseFloat(this.value))}formatValue(t){return t.toFixed(this.precision)}clamp(t){const e=Math.min(Math.max(t,this.min),this.max);return parseFloat(e.toFixed(this.precision))}valueToPercent(t){return(t-this.min)/(this.max-this.min)*100}positionToValue(t){this.trackElement||(this.trackElement=this.querySelector("[data-range-track]"));const e=this.trackElement.getBoundingClientRect(),i=Math.max(0,Math.min(1,(t-e.left)/e.width));return this.min+i*(this.max-this.min)}updateValue(){this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue),this.emit()}handleValueChange(t,e){const i=Math.round(e/this.step)*this.step,s=parseFloat(i.toFixed(this.precision));e=this.clamp(s),t==="low"?this._lowValue=this.multiple?Math.min(e,this._highValue):e:this._highValue=Math.max(e,this._lowValue),this.updateValue(),this.requestUpdate()}cleanupEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerEnd),document.removeEventListener("pointercancel",this.onPointerEnd),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onPointerEnd),document.removeEventListener("touchcancel",this.onPointerEnd)}getAriaValueText(t){return this.multiple?this.getI18nText("aria-range-text",this.defaultI18n,{low:this.formatValue(this._lowValue),high:this.formatValue(this._highValue)}):this.getI18nText("aria-value-text",this.defaultI18n,{value:this.formatValue(t)})}getKnobAriaLabel(t){const e=t==="low"?"low-knob-label":"high-knob-label";return this.getI18nText(e,this.defaultI18n)}renderKnob(t){const e=t==="low"?this._lowValue:this._highValue,i=this.valueToPercent(e),s=t==="low"?this.min:this._lowValue,n=t==="low"?this.multiple?this._highValue:this.max:this.max,r=this.isDragging&&this.activeKnob===t,l=[this.$cls.knob||"uk-input-range-knob",this.$cls[t==="low"?"knob-low":"knob-high"]||"",r&&this.$cls["knob-dragging"]||""].filter(Boolean).join(" "),h=this["label-position"]==="top"?this.$cls["label-top"]||"uk-input-range-label-top":this.$cls["label-bottom"]||"uk-input-range-label-bottom";return c.html`
      <button
        type="button"
        class="${l}"
        role="slider"
        aria-label="${this.getKnobAriaLabel(t)}"
        aria-valuemin="${s}"
        aria-valuemax="${n}"
        aria-valuenow="${e}"
        aria-valuetext="${this.getAriaValueText(e)}"
        aria-disabled="${this.disabled}"
        ?disabled=${this.disabled}
        style="${this.$stl.knob||""}${this.$stl[t==="low"?"knob-low":"knob-high"]||""}left: ${i}%;"
        data-knob="${t}"
        data-dragging="${r}"
        @pointerdown=${d=>this.onPointerStart(d,t)}
        @touchstart=${d=>this.onPointerStart(d,t)}
        @keydown=${d=>this.onKeyDown(d,t)}
      >
        ${this._label?c.html`
              <span
                class="${this.$cls.label||"uk-input-range-label"} ${h}"
                style="${this.$stl.label||""}"
                data-label-position="${this["label-position"]}"
              >
                ${t==="low"?this.formatValue(e):""}
                ${typeof this.label=="string"?this.label:""}
                ${t==="high"?this.formatValue(e):""}
              </span>
            `:""}
      </button>
    `}render(){const t=this.valueToPercent(this._lowValue),e=this.multiple?this.valueToPercent(this._highValue):t,i=`left: ${this.multiple?t:0}%; width: ${this.multiple?e-t:t}%`,s=this["aria-label"]||this.getI18nText("aria-label",this.defaultI18n);return c.html`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]||""}"
        style="${this.$stl["host-inner"]||""}"
        role="group"
        aria-label="${s}"
        data-disabled="${this.disabled}"
        data-multiple="${this.multiple}"
      >
        <div
          class="${this.$cls.runnable||"uk-input-range-runnable"}"
          style="${this.$stl.runnable||""}"
          data-range-track
        ></div>
        <div
          class="${this.$cls.fill||"uk-input-range-fill"}"
          style="${this.$stl.fill||""}${i}"
          data-fill-track
        ></div>
        ${this.renderKnob("low")}
        ${this.multiple?this.renderKnob("high"):""} ${this.renderHidden()}
      </div>
    `}},M([u({type:Boolean})],o.InputRange.prototype,"multiple",2),M([u({type:Number})],o.InputRange.prototype,"min",2),M([u({type:Number})],o.InputRange.prototype,"max",2),M([u({type:Number})],o.InputRange.prototype,"step",2),M([u({type:String})],o.InputRange.prototype,"label",2),M([u({type:String})],o.InputRange.prototype,"label-position",2),M([u({type:String})],o.InputRange.prototype,"aria-label",2),M([$()],o.InputRange.prototype,"$cls",2),M([$()],o.InputRange.prototype,"$stl",2),o.InputRange=M([_("uk-input-range")],o.InputRange);function Fe(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var dt={exports:{}},Je=dt.exports,Zt;function We(){return Zt||(Zt=1,(function(a,t){(function(e,i,s){a.exports=s(),a.exports.default=s()})("slugify",Je,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(n,r){if(typeof n!="string")throw new Error("slugify: string argument expected");r=typeof r=="string"?{replacement:r}:r||{};var l=i[r.locale]||{},h=r.replacement===void 0?"-":r.replacement,d=r.trim===void 0?!0:r.trim,m=n.normalize().split("").reduce(function(p,f){var g=l[f];return g===void 0&&(g=e[f]),g===void 0&&(g=f),g===h&&(g=" "),p+g.replace(r.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return r.strict&&(m=m.replace(/[^A-Za-z0-9\s]/g,"")),d&&(m=m.trim()),m=m.replace(/\s+/g,h),r.lower&&(m=m.toLowerCase()),m}return s.extend=function(n){Object.assign(e,n)},s})})(dt)),dt.exports}var Ge=We();const Xt=Fe(Ge);var Ze=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,k=(a,t,e,i)=>{for(var s=i>1?void 0:i?Xe(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Ze(t,e,s),s};o.InputTag=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-tag:input",this.maxlength=20,this.minlength=1,this.slugify=!1,this["slugify-options"]="",this.delimiters=",",this["allow-duplicates"]=!1,this["max-tags"]=0,this.$input="",this.$slugOptions={lower:!0,strict:!0},this.$tags=[],this.$error="",this.defaultI18n={placeholder:"Add a tag...","remove-label":"Remove tag","edit-label":"Edit tag","tag-list-label":"Tags","min-length-error":"Tag must be at least {min} characters","max-length-error":"Tag cannot exceed {max} characters","duplicate-error":"Tag already exists","max-tags-error":"Maximum {max} tags allowed","input-label":"Tag input"},this.$cls={"host-inner":"",wrapper:"uk-input-tag","tag-list":"uk-input-tag-list",tag:"uk-tag uk-tag-secondary","tag-text":"","tag-remove":"",input:"",error:"sr-only"},this.$stl={"host-inner":"",wrapper:"","tag-list":"",tag:"","tag-text":"","tag-remove":"",input:"",error:""}}get $value(){return this.$tags}get $text(){return""}get delimiterChars(){return this.delimiters.split("")}initializeValue(){this.initializeTags(),this.initializeSlugOptions()}initializeTags(){this.$tags=this.value===""?[]:this.value.split(",")}initializeSlugOptions(){if(!this["slugify-options"])return;const t=ht(this["slugify-options"]);t.replacement&&(this.$slugOptions.replacement=t.replacement),t.remove&&(this.$slugOptions.remove=new RegExp(t.remove,"g")),t.lower&&(this.$slugOptions.lower=t.lower==="true"),t.strict&&(this.$slugOptions.strict=t.strict==="true"),t.locale&&(this.$slugOptions.locale=t.locale),t.trim&&(this.$slugOptions.trim=t.trim==="true")}validateTag(t){return this.$error="",t.length<this.minlength?(this.$error=this.getI18nText("min-length-error",this.defaultI18n,{min:String(this.minlength)}),!1):t.length>this.maxlength?(this.$error=this.getI18nText("max-length-error",this.defaultI18n,{max:String(this.maxlength)}),!1):!this["allow-duplicates"]&&this.$tags.includes(t)?(this.$error=this.getI18nText("duplicate-error",this.defaultI18n),!1):this["max-tags"]>0&&this.$tags.length>=this["max-tags"]?(this.$error=this.getI18nText("max-tags-error",this.defaultI18n,{max:String(this["max-tags"])}),!1):!0}addTag(){if(!this.$input.trim())return;let t=this.$input.trim();this.slugify&&(t=Xt(t,this.$slugOptions)),this.validateTag(t)&&(this.$tags=[...this.$tags,t],this.$input="",this.$error="",this.emit(),this.requestUpdate())}removeTag(t){this.disabled||(this.$tags=this.$tags.filter((e,i)=>i!==t),this.$error="",this.emit(),this.requestUpdate())}editTag(t){this.disabled||(this.$input=this.$tags[t],this.removeTag(t),this.updateComplete.then(()=>{this.renderRoot.querySelector("input")?.focus()}))}handleKeydown(t){switch(t.key){case"Backspace":this.$tags.length>0&&this.$input.length===0&&(t.preventDefault(),this.editTag(this.$tags.length-1));break;case"Enter":t.preventDefault(),this.addTag();break;case"Escape":this.$input&&(t.preventDefault(),this.$input="",this.$error="",this.requestUpdate());break;default:this.delimiterChars.includes(t.key)&&(t.preventDefault(),this.addTag());break}}handleInput(t){const e=t.target;this.$input=e.value,this.$error=""}handlePaste(t){const e=t.clipboardData?.getData("text");if(!e)return;if(this.delimiterChars.some(s=>e.includes(s))){t.preventDefault();const s=new RegExp(`[${this.delimiterChars.join("")}]`);e.split(s).map(r=>r.trim()).filter(r=>r.length>0).forEach(r=>{this.slugify&&(r=Xt(r,this.$slugOptions)),this.validateTag(r)&&(this.$tags=[...this.$tags,r])}),this.$input="",this.emit(),this.requestUpdate()}}renderTag(t,e){const i=this.getI18nText("remove-label",this.defaultI18n),s=this.getI18nText("edit-label",this.defaultI18n);return c.html`
      <div
        class="${this.$cls.tag||""}"
        style="${this.$stl.tag||""}"
        role="listitem"
        data-tag-index="${e}"
      >
        <span
          class="${this.$cls["tag-text"]||""}"
          style="${this.$stl["tag-text"]||""}"
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
          class="${this.$cls["tag-remove"]||""}"
          style="${this.$stl["tag-remove"]||""}"
          aria-label="${i}: ${t}"
          ?disabled="${this.disabled}"
          @click="${()=>this.removeTag(e)}"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `}renderError(){return this.$error?c.html`
      <div
        class="${this.$cls.error||""}"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="polite"
      >
        ${this.$error}
      </div>
    `:""}render(){const t=this.placeholder||this.getI18nText("placeholder",this.defaultI18n),e=this.getI18nText("tag-list-label",this.defaultI18n),i=this.getI18nText("input-label",this.defaultI18n);return c.html`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]||""}"
        style="${this.$stl["host-inner"]||""}"
        data-disabled="${this.disabled}"
        data-has-error="${!!this.$error}"
      >
        <div
          class="${this.$cls.wrapper||""}"
          style="${this.$stl.wrapper||""}"
        >
          <div
            class="${this.$cls["tag-list"]||""}"
            style="${this.$stl["tag-list"]||""}"
            role="list"
            aria-label="${e}"
          >
            ${this.$tags.map((s,n)=>this.renderTag(s,n))}
          </div>

          <input
            class="${this.$cls.input||""}"
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
        </div>

        ${this.renderError()} ${this.renderHidden()}
      </div>
    `}},k([u({type:Number})],o.InputTag.prototype,"maxlength",2),k([u({type:Number})],o.InputTag.prototype,"minlength",2),k([u({type:Boolean})],o.InputTag.prototype,"slugify",2),k([u({type:String})],o.InputTag.prototype,"slugify-options",2),k([u({type:String})],o.InputTag.prototype,"delimiters",2),k([u({type:Boolean})],o.InputTag.prototype,"allow-duplicates",2),k([u({type:Number})],o.InputTag.prototype,"max-tags",2),k([$()],o.InputTag.prototype,"$input",2),k([$()],o.InputTag.prototype,"$slugOptions",2),k([$()],o.InputTag.prototype,"$tags",2),k([$()],o.InputTag.prototype,"$error",2),k([$()],o.InputTag.prototype,"$cls",2),k([$()],o.InputTag.prototype,"$stl",2),o.InputTag=k([_("uk-input-tag")],o.InputTag);var Qe=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,C=(a,t,e,i)=>{for(var s=i>1?void 0:i?ti(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&Qe(t,e,s),s};o.InputTime=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="uk-input-time:input",this.autofocus=!1,this.now=!1,this.clock="12h",this.min="",this.max="",this.$min=0,this.$meridiem="am",this.defaultI18n={am:"AM",pm:"PM","hour-label":"Hour","minute-label":"Minute","meridiem-label":"AM/PM","time-label":"Time","hour-placeholder":"HH","minute-placeholder":"MM","invalid-time":"Invalid time format"},this.$cls={container:"uk-input-time",input:"uk-input","hour-input":"","minute-input":"",separator:"","meridiem-button":"uk-input-fake",button:""},this.$stl={container:"",input:"","hour-input":"","minute-input":"",separator:"","meridiem-button":"",button:""}}get $HH(){return this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"00"}get $MM(){return this.$min>=0?this.$min.toString().padStart(2,"0"):"00"}get $value(){if(this.$hour===void 0||this.$hour===null)return"";let t=this.$hour;return this.clock==="12h"&&(this.$meridiem==="pm"?t=this.$hour===12?12:this.$hour+12:t=this.$hour===12?0:this.$hour),`${t.toString().padStart(2,"0")}:${this.$min.toString().padStart(2,"0")}`}get $text(){return""}initializeValue(){this.value?this.parseTimeValue():this.now&&this.setCurrentTime()}updated(t){["$hour","$min","$meridiem"].some(e=>t.has(e))&&this.emit()}parseTimeValue(){try{const t=Le(this.value),[e,i]=t.split(":").map(Number);this.clock==="12h"?this.$hour=e%12||12:this.$hour=e,this.$min=i,this.$meridiem=e<12?"am":"pm"}catch(t){console.error(this.getI18nText("invalid-time",this.defaultI18n),t)}}setCurrentTime(){const t=new Date;this.clock==="12h"?this.$hour=t.getHours()%12||12:this.$hour=t.getHours(),this.$min=t.getMinutes(),this.$meridiem=t.getHours()<12?"am":"pm"}isTimeValid(){const t=this.$value;return t?!(this.min&&t<this.min||this.max&&t>this.max):!0}handleInput(t,e){const i=t.target,s=i.value.replace(/[^0-9]/g,"").substring(0,2),n=parseInt(s);switch(e){case"$hour":this.clock==="12h"?this.$hour=n<=12?n:12:this.$hour=n<=23?n:23;break;case"$min":this.$min=n<=59?n:59;break}i.value=s}handleBlur(t,e){const i=t.target,s=parseInt(i.value);switch(e){case"$hour":if(i.value===""){this.required?i.value=this.$HH:this.$hour=void 0;return}this.clock==="12h"&&s>12?(this.$hour=12,i.value="12"):this.clock==="12h"&&s===0?(this.$hour=12,i.value="12"):this.clock==="24h"&&s>23?(this.$hour=23,i.value="23"):i.value=this.$HH;break;case"$min":s>59&&(this.$min=59),i.value=this.$MM;break}}handleKeydown(t,e){const i=t.target;if((e==="$hour"?this.$hour:this.$min)===void 0&&e==="$hour")return;let n=0,r=!1;switch(t.key){case"ArrowUp":n=1,r=!0;break;case"ArrowDown":n=-1,r=!0;break;case"PageUp":n=e==="$hour"?1:15,r=!0;break;case"PageDown":n=e==="$hour"?-1:-15,r=!0;break}if(r&&n!==0)if(t.preventDefault(),e==="$hour"){const l=this.clock==="12h"?12:23,h=this.clock==="12h"?1:0;let d=(this.$hour||0)+n;d>l&&(d=h),d<h&&(d=l),this.$hour=d,i.value=d.toString().padStart(2,"0")}else{let l=this.$min+n;l>59&&(l=0),l<0&&(l=59),this.$min=l,i.value=l.toString().padStart(2,"0")}}toggleMeridiem(){this.$meridiem=this.$meridiem==="am"?"pm":"am"}handleMeridiemKeydown(t){(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key===" ")&&(t.preventDefault(),this.toggleMeridiem())}renderInput(t){const{min:e,max:i,state:s,key:n}=t,r=s==="$hour",l=r?this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"":this.$hour===void 0?"":this.$min>=0?this.$min.toString().padStart(2,"0"):"00",h=this.getI18nText(r?"hour-label":"minute-label",this.defaultI18n),d=this.getI18nText(r?"hour-placeholder":"minute-placeholder",this.defaultI18n),m=r?this.$cls["hour-input"]||this.$cls.input||"":this.$cls["minute-input"]||this.$cls.input||"",p=r?this.$stl["hour-input"]||this.$stl.input||"":this.$stl["minute-input"]||this.$stl.input||"";return c.html`
      <input
        class="${m}"
        style="${p}"
        data-key="${n}"
        data-field="${s}"
        type="number"
        inputmode="numeric"
        role="spinbutton"
        aria-label="${h}"
        aria-valuemin="${e}"
        aria-valuemax="${i}"
        aria-valuenow="${r?this.$hour||0:this.$min}"
        aria-invalid="${!this.isTimeValid()}"
        min="${e}"
        max="${i}"
        step="1"
        placeholder="${d}"
        maxlength="2"
        value="${l}"
        .autofocus="${r&&this.autofocus}"
        ?disabled="${this.disabled||!r&&this.$hour===void 0}"
        @keydown="${f=>this.handleKeydown(f,s)}"
        @input="${f=>this.handleInput(f,s)}"
        @blur="${f=>this.handleBlur(f,s)}"
      />
    `}render(){const t=this.getI18nText("time-label",this.defaultI18n),e=this.getI18nText("meridiem-label",this.defaultI18n);let i=c.html``;if(this.clock==="12h"){const s=this.getI18nText("am",this.defaultI18n),n=this.getI18nText("pm",this.defaultI18n),r=this.$meridiem==="am"?s:n;i=c.html`
        <button
          class="${this.$cls["meridiem-button"]||this.$cls.button||""}"
          style="${this.$stl["meridiem-button"]||this.$stl.button||""}"
          data-key="meridiem"
          data-meridiem="${this.$meridiem}"
          type="button"
          role="switch"
          aria-label="${e}"
          aria-checked="${this.$meridiem==="pm"}"
          ?disabled="${this.disabled||this.$hour===void 0}"
          @click="${l=>{l.preventDefault(),this.toggleMeridiem()}}"
          @keydown="${this.handleMeridiemKeydown}"
        >
          ${r}
        </button>
      `}return c.html`
      <div
        data-host-inner
        class="${this.$cls.container||""}"
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
          style="${this.$stl.separator||""}"
          aria-hidden="true"
        >
          :
        </span>
        ${this.renderInput({min:0,max:59,state:"$min",key:"$MM"})}
        ${i} ${this.renderHidden()}
      </div>
    `}},C([u({type:Boolean})],o.InputTime.prototype,"autofocus",2),C([u({type:Boolean})],o.InputTime.prototype,"now",2),C([u({type:String})],o.InputTime.prototype,"clock",2),C([u({type:String})],o.InputTime.prototype,"min",2),C([u({type:String})],o.InputTime.prototype,"max",2),C([$()],o.InputTime.prototype,"$hour",2),C([$()],o.InputTime.prototype,"$min",2),C([$()],o.InputTime.prototype,"$meridiem",2),C([$()],o.InputTime.prototype,"$cls",2),C([$()],o.InputTime.prototype,"$stl",2),o.InputTime=C([_("uk-input-time")],o.InputTime);function ei(a=5){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:a},()=>t.charAt(Math.floor(Math.random()*t.length))).join("")}function Qt(a){return a?a.toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""}var ii=Object.defineProperty,si=Object.getOwnPropertyDescriptor,A=(a,t,e,i)=>{for(var s=i>1?void 0:i?si(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ii(t,e,s),s};o.Keyval=class extends v{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.keys="",this.values="",this.sensitive=!1,this.noninsertable=!1,this.max=0,this.min=1,this["aria-label"]="",this.valueVisibility={},this.$defaultI18n={"header-key":"Key","header-value":"Value","placeholder-key":"Enter key","placeholder-value":"Enter value","add-row-label":"Add row","remove-row-label":"Remove row","toggle-visibility-label":"Toggle visibility","generate-random-label":"Generate random value","table-label":"Key-value pairs","actions-label":"Actions","key-label":"Key for row {index}","value-label":"Value for row {index}"},this.$cls={container:"uk-keyval",table:"uk-table uk-table-divider","header-row":"",row:"","add-button":"uk-button uk-button-default",button:"uk-keyval-button","key-input":"",input:"uk-input","value-wrapper":"uk-keyval-value-wrapper","random-button":"","value-input":"uk-input",actions:"uk-keyval-actions","toggle-button":"","remove-button":""},this.$stl={container:"",table:"","header-row":"",row:"","add-button":"",button:"","key-input":"",input:"","value-wrapper":"","random-button":"","value-input":"",actions:"","toggle-button":"","remove-button":""},this.handleKeyDown=t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&!this.noninsertable&&(t.preventDefault(),this.addRow())}}connectedCallback(){super.connectedCallback(),this.HTMLDataSource||(this.initializeEmptyData(),this.addRow()),this.initializePasswordVisibility()}onDataSourceChanged(){(!this.$data.__||!this.$data.__.options||this.$data.__.options.length===0)&&(this.initializeEmptyData(),this.addRow())}initializeEmptyData(){this.$data={__:{text:"__",options:[]}}}initializePasswordVisibility(){this.sensitive&&this.$data.__&&this.$data.__.options&&this.$data.__.options.forEach((t,e)=>{this.valueVisibility[e]=!1})}canAddRow(){return this.max===0?!0:this.$data.__.options.length<this.max}canRemoveRow(){return this.$data.__.options.length>this.min}addRow(){if(!this.canAddRow())return;this.$data.__||this.initializeEmptyData();const t=this.$data.__.options.length;this.$data.__.options.push({group:"__",value:"",text:"",disabled:!1,selected:!1,data:{gid:""}}),this.sensitive&&(this.valueVisibility[t]=!1),this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelectorAll('[data-field="key"]')[t];i&&i.focus()})}removeRow(t){this.canRemoveRow()&&this.$data.__&&this.$data.__.options&&(this.$data.__.options.splice(t,1),this.reindexVisibilityAfterRemoval(t),this.requestUpdate())}reindexVisibilityAfterRemoval(t){const e={};Object.keys(this.valueVisibility).forEach(i=>{const s=parseInt(i);s<t?e[s]=this.valueVisibility[s]:s>t&&(e[s-1]=this.valueVisibility[s])}),this.valueVisibility=e}handleKeyChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].data.gid=s,this.requestUpdate())}handleValueChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=s,this.requestUpdate())}setRandomValue(t){this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=ei(16),this.valueVisibility[t]=!0,this.requestUpdate())}togglePasswordVisibility(t){this.sensitive&&(this.valueVisibility[t]=!this.valueVisibility[t],this.requestUpdate())}getPasswordVisibility(t){return this.valueVisibility[t]||!1}getInputType(t){return this.sensitive?this.getPasswordVisibility(t)?"text":"password":"text"}$icons(t){const e=super.$icons(t);if(e)return e;switch(t){case"plus":return c.html`
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
        `;case"wand":return c.html`
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
        `;case"eye-off":return c.html`
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
        `;case"eye":return c.html`
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
        `;case"trash-2":return c.html`
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
        `}}render(){const t=this["aria-label"]||this.getI18nText("table-label",this.$defaultI18n),e=this.getI18nText("header-key",this.$defaultI18n),i=this.getI18nText("header-value",this.$defaultI18n),s=this.getI18nText("actions-label",this.$defaultI18n),n=this.getI18nText("add-row-label",this.$defaultI18n);return c.html`
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
              class="${this.$cls["header-row"]||""}"
              style="${this.$stl["header-row"]||""}"
              role="row"
            >
              <th role="columnheader">${e}</th>
              <th role="columnheader">${i}</th>
              <th role="columnheader">
                ${s}
                ${this.noninsertable?"":c.html`
                      <button
                        class="${this.$cls["add-button"]||this.$cls.button||""}"
                        style="${this.$stl["add-button"]||this.$stl.button||""}"
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
            ${this.$data.__&&this.$data.__.options?this.$data.__.options.map((r,l)=>{const h=this.getI18nText("key-label",this.$defaultI18n,{index:String(l+1)}),d=this.getI18nText("value-label",this.$defaultI18n,{index:String(l+1)}),m=this.getI18nText("placeholder-key",this.$defaultI18n),p=this.getI18nText("placeholder-value",this.$defaultI18n),f=this.getI18nText("remove-row-label",this.$defaultI18n),g=this.getI18nText("toggle-visibility-label",this.$defaultI18n),b=this.getI18nText("generate-random-label",this.$defaultI18n);return c.html`
                    <tr
                      class="${this.$cls.row||""}"
                      style="${this.$stl.row||""}"
                      role="row"
                      data-row-index="${l}"
                    >
                      <td role="cell">
                        <input
                          class="${this.$cls["key-input"]||this.$cls.input||""}"
                          style="${this.$stl["key-input"]||this.$stl.input||""}"
                          autocomplete="off"
                          type="text"
                          placeholder="${m}"
                          value="${r.data.gid||""}"
                          aria-label="${h}"
                          data-field="key"
                          @input=${w=>this.handleKeyChange(l,w)}
                        />
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls["value-wrapper"]||""}"
                          style="${this.$stl["value-wrapper"]||""}"
                        >
                          ${this.sensitive?c.html`
                                <button
                                  class="${this.$cls["random-button"]||this.$cls.button||""}"
                                  style="${this.$stl["random-button"]||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${b}"
                                  ?disabled="${!!r.value}"
                                  @click=${()=>this.setRandomValue(l)}
                                >
                                  ${this.$icons("wand")}
                                </button>
                              `:""}

                          <input
                            class="${this.$cls["value-input"]||this.$cls.input||""}"
                            style="${this.$stl["value-input"]||this.$stl.input||""}"
                            autocomplete="off"
                            type="${this.getInputType(l)}"
                            placeholder="${p}"
                            name="${r.data.gid||""}"
                            value="${r.value}"
                            aria-label="${d}"
                            data-field="value"
                            ?disabled=${!r.data.gid}
                            @input=${w=>this.handleValueChange(l,w)}
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
                          ${this.sensitive?c.html`
                                <button
                                  class="${this.$cls["toggle-button"]||this.$cls.button||""}"
                                  style="${this.$stl["toggle-button"]||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${g}"
                                  aria-pressed="${this.getPasswordVisibility(l)}"
                                  @click=${()=>this.togglePasswordVisibility(l)}
                                >
                                  ${this.getPasswordVisibility(l)?this.$icons("eye-off"):this.$icons("eye")}
                                </button>
                              `:""}
                          <button
                            class="${this.$cls["remove-button"]||this.$cls.button||""}"
                            style="${this.$stl["remove-button"]||this.$stl.button||""}"
                            type="button"
                            aria-label="${f}"
                            ?disabled=${!this.canRemoveRow()}
                            @click=${()=>this.removeRow(l)}
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
    `}},A([u({type:String})],o.Keyval.prototype,"keys",2),A([u({type:String})],o.Keyval.prototype,"values",2),A([u({type:Boolean})],o.Keyval.prototype,"sensitive",2),A([u({type:Boolean})],o.Keyval.prototype,"noninsertable",2),A([u({type:Number})],o.Keyval.prototype,"max",2),A([u({type:Number})],o.Keyval.prototype,"min",2),A([u({type:String})],o.Keyval.prototype,"aria-label",2),A([$()],o.Keyval.prototype,"valueVisibility",2),A([$()],o.Keyval.prototype,"$cls",2),A([$()],o.Keyval.prototype,"$stl",2),o.Keyval=A([_("uk-keyval")],o.Keyval);var ni=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,S=(a,t,e,i)=>{for(var s=i>1?void 0:i?ai(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ni(t,e,s),s};o.Icon=class extends v{constructor(){super(...arguments),this["cls-default-element"]="svg",this["stl-default-element"]="svg",this.icon="",this.label="",this.decorative=!1,this.role="",this["stroke-width"]="2",this.height="16",this.width="16",this.color="",this.fill="none",this.defaultI18n={label:""}}get key(){return this.icon.trim().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}getEffectiveLabel(){return this.getI18nText("label",this.defaultI18n)||this.label}updated(t){(["icon","stroke-width","height","width","size","color","fill","label","decorative","role","$cls","$stl"].some(i=>t.has(i))||t.has("$i18n"))&&this.updateComplete.then(()=>{this.regenerateSvg()})}regenerateSvg(){this.$svg=this.createSvg({icon:this.key,cls:this.$cls.svg||"",stl:this.$stl.svg||"",height:this.size||this.height,width:this.size||this.width,strokeWidth:this["stroke-width"],color:this.color,fill:this.fill,label:this.getEffectiveLabel(),decorative:this.decorative,role:this.role})}createSvg(t){const{icon:e,cls:i,stl:s,height:n,width:r,strokeWidth:l,color:h,fill:d,label:m,decorative:p,role:f}=t;try{const g=se[e];if(!g){console.warn(`uk-icon: Icon "${this.icon}" not found in Lucide icons.`);return}const b=At.createElement(g);if(i&&b.setAttribute("class",i),s&&b.setAttribute("style",s),b.setAttribute("height",n),b.setAttribute("width",r),b.setAttribute("stroke-width",l),d!=="none"&&b.setAttribute("fill",d),h){const w=b.getAttribute("style")||"";b.setAttribute("style",`${w}; color: ${h};`)}return p?(b.setAttribute("aria-hidden","true"),b.removeAttribute("role"),b.removeAttribute("aria-label")):m?(b.setAttribute("role",f||"img"),b.setAttribute("aria-label",m),b.removeAttribute("aria-hidden")):f&&(b.setAttribute("role",f),b.removeAttribute("aria-hidden")),b.setAttribute("data-icon",this.icon),b.setAttribute("data-lucide",this.icon),b}catch(g){console.warn(`uk-icon: Failed to create icon "${this.icon}":`,g);return}}render(){return this.renderRoot.children.length===0?this.$svg:c.nothing}},S([u({type:String})],o.Icon.prototype,"icon",2),S([u({type:String})],o.Icon.prototype,"label",2),S([u({type:Boolean})],o.Icon.prototype,"decorative",2),S([u({type:String})],o.Icon.prototype,"role",2),S([u({type:String})],o.Icon.prototype,"stroke-width",2),S([u({type:String})],o.Icon.prototype,"height",2),S([u({type:String})],o.Icon.prototype,"width",2),S([u({type:String})],o.Icon.prototype,"size",2),S([u({type:String})],o.Icon.prototype,"color",2),S([u({type:String})],o.Icon.prototype,"fill",2),S([$()],o.Icon.prototype,"$svg",2),o.Icon=S([_("uk-icon")],o.Icon);var ri=Object.defineProperty,oi=Object.getOwnPropertyDescriptor,z=(a,t,e,i)=>{for(var s=i>1?void 0:i?oi(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ri(t,e,s),s};o.Chart=class extends v{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.loading=!1,this.width="100%",this.height="auto",this["aria-label"]="",this.hasError=!1,this.errorMessage="",this.apexCharts=null,this.defaultI18n={chartLabel:"Chart",loadingMessage:"Loading chart...",errorMessage:"Failed to load chart. Please try again.",noDataMessage:"No data available"}}get $apexChartsConfig(){return"apexCharts"in this.$config&&typeof this.$config=="object"?this.$config.apexCharts:{}}hasValidConfig(){return Object.keys(this.$apexChartsConfig).length>0}firstUpdated(t){super.firstUpdated(t),this.loading||this.initializeApexCharts()}updated(t){super.updated(t),t.has("loading")&&!this.loading&&!this.apexCharts&&this.initializeApexCharts()}disconnectedCallback(){super.disconnectedCallback(),this.apexCharts&&(this.apexCharts.destroy(),this.apexCharts=null)}onConfigChanged(){if(this.apexCharts&&this.hasValidConfig())try{this.apexCharts.updateOptions(this.$apexChartsConfig,!0,!0),this.hasError=!1,this.errorMessage=""}catch(t){console.error("uk-chart: Failed to update chart:",t),this.hasError=!0,this.errorMessage=t instanceof Error?t.message:"Unknown error"}else!this.apexCharts&&this.hasValidConfig()&&this.initializeApexCharts()}async initializeApexCharts(){const t=this.renderRoot.querySelector("[data-chart-container]");if(!t){console.warn("uk-chart: Chart container not found");return}if(!this.hasValidConfig()){console.warn("uk-chart: No valid chart configuration found"),this.hasError=!0,this.errorMessage=this.getI18nText("noDataMessage",this.defaultI18n);return}if(this.apexCharts===null)try{const e={...this.$apexChartsConfig,chart:{...this.$apexChartsConfig.chart,width:this.width,height:this.height}};this.apexCharts=new ee(t,e),await this.apexCharts.render(),this.isRendered=!0,this.hasError=!1,this.errorMessage=""}catch(e){console.error("uk-chart: Failed to initialize chart:",e),this.hasError=!0,this.errorMessage=e instanceof Error?e.message:this.getI18nText("errorMessage",this.defaultI18n)}}renderLoading(){const t=this.getI18nText("loadingMessage",this.defaultI18n);return c.html`
      <div
        class="${this.$cls.loading||""}"
        style="${this.$stl.loading||""}"
        role="status"
        aria-live="polite"
        aria-label="${t}"
      >
        <span>${t}</span>
      </div>
    `}renderError(){const t=this.errorMessage||this.getI18nText("errorMessage",this.defaultI18n);return c.html`
      <div
        class="${this.$cls.error||""}"
        part="error"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="assertive"
      >
        <span>${t}</span>
      </div>
    `}render(){const t=this["aria-label"]||this.getI18nText("chartLabel",this.defaultI18n);return c.html`
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
        ${this.loading?this.renderLoading():this.hasError?this.renderError():c.html`
                <div
                  data-chart-container
                  class="${this.$cls.chart||""}"
                  part="chart"
                  style="${this.$stl.chart||""}"
                ></div>
              `}
      </div>
    `}async updateChart(t,e=!0,i=!0){if(this.apexCharts)try{await this.apexCharts.updateOptions(t,e,i),this.hasError=!1,this.errorMessage=""}catch(s){throw console.error("uk-chart: Failed to update chart:",s),this.hasError=!0,this.errorMessage=s instanceof Error?s.message:"Unknown error",s}else throw new Error("Chart not initialized")}async updateSeries(t,e=!0){if(this.apexCharts)try{await this.apexCharts.updateSeries(t,e),this.hasError=!1,this.errorMessage=""}catch(i){throw console.error("uk-chart: Failed to update series:",i),this.hasError=!0,this.errorMessage=i instanceof Error?i.message:"Unknown error",i}else throw new Error("Chart not initialized")}getChartInstance(){return this.apexCharts}},z([u({type:Boolean})],o.Chart.prototype,"loading",2),z([u({type:String})],o.Chart.prototype,"width",2),z([u({type:String})],o.Chart.prototype,"height",2),z([u({type:String})],o.Chart.prototype,"aria-label",2),z([$()],o.Chart.prototype,"hasError",2),z([$()],o.Chart.prototype,"errorMessage",2),o.Chart=z([_("uk-chart")],o.Chart);var li=Object.defineProperty,pt=(a,t,e,i)=>{for(var s=void 0,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=r(t,e,s)||s);return s&&li(t,e,s),s};const te=a=>{class t extends a{constructor(){super(...arguments),this.$term="",this.$focused=-1,this.$open=!1,this.selected=null,this.HTMLRectParent=null}get options(){const i={};return Object.entries(this.$data).forEach(([s,n])=>{const r=n.options.filter(l=>l.data.keywords?.some(h=>h.toLowerCase().includes(this.$term.toLowerCase())));r.length>0&&(i[s]={text:n.text,options:r,...n.data&&{data:n.data}})}),i}get count(){let i=0;for(const s in this.options){const n=this.options[s].options.length;i+=n}return i-1}updated(i){if(super.updated(i),i.has("$term")&&i.get("$term")!==void 0&&(this.dispatchEvent(new CustomEvent(this["search-event"],{detail:{value:this.$term},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{this.$focused=-1})),i.has("$focused")&&this.listboxEl){this.listboxEl.querySelector('[role="option"][aria-selected="true"]')?.removeAttribute("aria-selected");const s=Array.from(this.listboxEl.querySelectorAll('[role="option"]'));this.activeOptionEl=s[this.$focused],this.activeOptionEl&&(this.activeOptionEl.setAttribute("aria-selected","true"),this.focusActiveOption())}}navigate(i){switch(i){case"t":this.$focused<=0?this.$focused=this.count:this.$focused--;break;case"d":this.$focused<this.count?this.$focused++:this.$focused=0;break}}focusActiveOption(i="smooth"){if(this.listboxEl&&this.activeOptionEl){const s={parent:this.listboxEl.getBoundingClientRect(),active:this.activeOptionEl.getBoundingClientRect()};this.listboxEl.scrollTo({top:this.activeOptionEl.offsetTop-this.listboxEl.offsetTop-s.parent.height/2+s.active.height/2,behavior:i})}}onKeydown(i){if(this.$open===!0)switch(i.key){case"ArrowDown":i.preventDefault(),this.navigate("d");break;case"ArrowUp":i.preventDefault(),this.navigate("t");break;case"Enter":if(i.preventDefault(),this.$focused===-1)return;this.onKeydownEnter();break;case"Home":i.preventDefault(),this.$focused=0;break;case"End":i.preventDefault(),this.$focused=this.count;break}}renderList(){const i=this._cls();return c.html`
        <ul
          class="${i.list}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
          @keydown="${this.onKeydown}"
        >
          ${R(Object.keys(this.options),s=>c.html`
              ${this.renderListHeader(s)}
              ${R(this.options[s].options,(n,r)=>this.renderListItem(s,n,r))}
            `)}
        </ul>
      `}renderListHeader(i){const s=this._cls();return i!=="__"?c.html`<li class="${s["item-header"]}" role="presentation">
            ${i}
          </li>`:""}onDropClose(){this.$focused=-1,this.$term=""}}return pt([$()],t.prototype,"$term"),pt([$()],t.prototype,"$focused"),pt([$()],t.prototype,"$open"),pt([be('[role="listbox"]')],t.prototype,"listboxEl"),t};var hi=Object.defineProperty,ui=Object.getOwnPropertyDescriptor,K=(a,t,e,i)=>{for(var s=i>1?void 0:i?ui(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&hi(t,e,s),s};o.Command=class extends te(v){constructor(){super(...arguments),this["cls-default-element"]="modal",this["stl-default-element"]="modal",this["search-event"]="uk-command:search",this["input-event"]="uk-command:click",this.modifier="ctrl",this.toggle="",this.$i18n={placeholder:"Search commands...",searchLabel:"Search",listLabel:"Commands",closeLabel:"Close",modalLabel:"Command palette"},this.$cls={modal:"uk-modal uk-flex-top",dialog:"uk-modal-dialog uk-margin-auto-vertical",header:"uk-cmd-header","header-icon":"uk-cmd-header-icon","header-input":"uk-cmd-header-input","header-esc":"uk-cmd-header-esc",list:"uk-overflow-auto uk-nav uk-nav-secondary uk-cmd-body",item:"","item-header":"uk-nav-header","item-link":"","item-wrapper":"uk-cmd-item-wrapper","item-icon":"uk-cmd-item-icon","item-text":"uk-cmd-item-text","item-key":"uk-cmd-item-key","item-subtitle":"uk-nav-subtitle"},this.$stl={modal:"",dialog:"",header:"","header-icon":"","header-input":"","header-esc":"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-key":"","item-subtitle":""},this.HTMLModal=null,this.handleGlobalKeydown=t=>{this.getModifierPressed(t)&&t.key===this.key&&(t.preventDefault(),this.HTMLModal&&window.UIkit.modal(this.HTMLModal).toggle())},this.onInputKeydown=t=>{this.$open&&(this.onKeydown(t),Object.values(this.options).forEach(e=>{e.options.forEach(i=>{if(i.data?.key&&this.getModifierPressed(t,i.data?.modifier||"ctrl")&&t.key.toLowerCase()===i.data.key.toLowerCase()){t.preventDefault(),t.stopPropagation(),this.select(i);return}})}))}}get $value(){return""}get $text(){return""}connectedCallback(){super.connectedCallback(),this.key!==void 0&&document.addEventListener("keydown",this.handleGlobalKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.key!==void 0&&document.removeEventListener("keydown",this.handleGlobalKeydown)}firstUpdated(t){super.firstUpdated?.(t),this.HTMLModal=this.renderRoot.querySelector(".uk-modal"),this.HTMLModal&&(this.HTMLRectParent=this.renderRoot.querySelector("ul"),window.UIkit.util.on(this.HTMLModal,"shown",()=>{this.$open=!0,this.focusSearchInput()}),window.UIkit.util.on(this.HTMLModal,"hidden",()=>{this.$open=!1,this.$focused=-1,this.$term=""})),this.isRendered=!0}initializeValue(){}focusSearchInput(){const t=this.renderRoot.querySelector('input[type="text"]');t&&t.focus()}_cls(t){return{button:"",icon:"",list:this.$cls.list,item:t?.item.disabled===!0?"uk-disabled opacity-50":this.$cls.item,"item-header":this.$cls["item-header"],"item-link":t?.item.disabled===!1?"uk-modal-close":this.$cls["item-link"],"item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":"",search:"","search-input":"","search-icon":"","item-key":this.$cls["item-key"],"item-subtitle":this.$cls["item-subtitle"]}}onClick(t){const{item:e}=t;this.select(e)}onKeydownEnter(){const t=this.activeOptionEl?.dataset;if(t){const e=t.key,i=t.index;this.select(this.options[e].options[i])}}select(t){t.disabled||(this.HTMLModal&&window.UIkit.modal(this.HTMLModal).hide(),this.dispatchEvent(new CustomEvent("uk-command:click",{detail:{value:t},bubbles:!0,composed:!0})))}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.getGlobalIndex(t,i);return c.html`
      <li
        class="${s.item}"
        role="option"
        aria-selected="${n===this.$focused?"true":"false"}"
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
          aria-label="${e.text}${e.data?.key?` (${Qt(e.data?.modifier||"ctrl")} + ${e.data.key.toUpperCase()})`:""}"
        >
          <div class="${s["item-wrapper"]}">
            ${e.data.icon?c.html`<span class="${s["item-icon"]}">${e.data.icon}</span>`:""}
            <span class="${s["item-text"]}">${e.text}</span>
            ${e.data.key?c.html`
                  <span class="${s["item-key"]}">
                    ${Qt(e.data?.modifier)||"Ctrl"} +
                    ${e.data.key.toUpperCase()}
                  </span>
                `:""}
          </div>
        </button>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}getModifierPressed(t,e){switch((e||this.modifier).toLowerCase()){case"ctrl":return t.ctrlKey;case"alt":return t.altKey;case"shift":return t.shiftKey;case"meta":return t.metaKey;default:return t.ctrlKey}}renderSearch(){return c.html`
      <div class="${this.$cls.header}" style="${this.$stl.header}">
        <div
          class="${this.$cls["header-icon"]}"
          style="${this.$stl["header-icon"]}"
          aria-hidden="true"
        >
          ${this.getI18nText("searchIcon",{searchIcon:"🔍"})}
        </div>
        <div
          class="${this.$cls["header-input"]}"
          style="${this.$stl["header-input"]}"
        >
          <input
            type="text"
            role="searchbox"
            aria-label="${this.getI18nText("searchLabel",{searchLabel:"Search"})}"
            placeholder="${this.getI18nText("placeholder",{placeholder:"Search commands..."})}"
            .value="${this.$term}"
            @keydown=${this.onInputKeydown}
            @input=${t=>{const e=t.target;this.$term=e.value}}
          />
        </div>
        <div
          class="${this.$cls["header-esc"]}"
          style="${this.$stl["header-esc"]}"
        >
          <button
            type="button"
            class="uk-modal-close uk-btn uk-btn-default uk-btn-sm"
            aria-label="${this.getI18nText("closeLabel",{closeLabel:"Close"})}"
          >
            Esc
          </button>
        </div>
      </div>
      ${Object.keys(this.options).length>0?c.html`<hr class="uk-hr" />`:""}
    `}renderList(){const t=this._cls();return c.html`
      <ul
        class="${t.list}"
        style="${this.$stl.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText("listLabel",{listLabel:"Commands"})}"
        @keydown="${this.onKeydown}"
      >
        ${super.renderList()}
      </ul>
    `}render(){const t=this.toggle||`uk-command-${this.id||Math.random().toString(36).substr(2,9)}`;return c.html`
      <div
        data-host-inner
        class="${this.$cls.modal}"
        style="${this.$stl.modal}"
        id="${t}"
        data-uk-modal
        role="dialog"
        aria-modal="true"
        aria-label="${this.getI18nText("modalLabel",{modalLabel:"Command palette"})}"
      >
        <div
          class="${this.$cls.dialog}"
          style="${this.$stl.dialog}"
          role="document"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
      </div>
    `}},K([u({type:String})],o.Command.prototype,"key",2),K([u({type:String})],o.Command.prototype,"modifier",2),K([u({type:String})],o.Command.prototype,"toggle",2),K([$()],o.Command.prototype,"$i18n",2),K([$()],o.Command.prototype,"$cls",2),K([$()],o.Command.prototype,"$stl",2),o.Command=K([_("uk-command")],o.Command);var ci=Object.defineProperty,di=Object.getOwnPropertyDescriptor,I=(a,t,e,i)=>{for(var s=i>1?void 0:i?di(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&ci(t,e,s),s};o.Select=class extends te(N(v)){constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["input-event"]="uk-select:input",this["search-event"]="uk-select:search",this.drop="mode: click; animation: uk-anmt-slide-top-sm;",this.searchable=!1,this.insertable=!1,this["send-headers"]="",this["send-url"]="",this["send-method"]="POST",this.multiple=!1,this.icon="",this.$selected=[],this.$i18n={"search-placeholder":"Search","selection-count":"{n} options selected",insert:"Insert",listLabel:"Options",buttonLabel:"Select an option"},this.$cls={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",dropdown:"uk-select-dropdown"},this.$stl={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",dropdown:""},this.HTMLDrop=null,this.onInputKeydown=t=>{if(this.onKeydown(t),this.$open===!0)switch(t.key){case"Tab":!t.altKey&&!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&t.preventDefault();break}}}get $text(){return this.$selected.length===0?this.placeholder!==""?this.placeholder:this.getI18nText("buttonLabel",{buttonLabel:"Select an option"}):this.multiple===!1&&this.selected?this.selected.text:this.$selected.length===1&&this.selected?this.selected.text:this.getI18nText("selection-count",{"selection-count":"{n} options selected"},{n:this.$selected.length})}get $value(){return this.multiple?this.$selected:this.$selected.length===1?this.$selected[0]:""}get count(){let t=this.insertable&&this.$term!==""&&!this.hasOption(this.$term)?1:0;for(const e in this.options){const i=this.options[e].options.length;t+=i}return t-1}connectedCallback(){super.connectedCallback(),this.insertable&&(this.searchable=!0)}firstUpdated(t){super.firstUpdated?.(t),this.HTMLDrop=this.renderRoot.querySelector(".uk-drop"),this.HTMLDrop&&(this.HTMLRectParent=this.renderRoot.querySelector("ul"),window.UIkit.util.on(this.HTMLDrop,"hidden",()=>{this.$open=!1,this.$focused=-1,this.$term=""}),window.UIkit.util.on(this.HTMLDrop,"shown",()=>{this.$open=!0})),this.updateComplete.then(()=>{if(this.hasAttribute("value"))this.$selected=this.value.split(",").map(e=>e.trim()),this.multiple||(this.$selected=this.$selected.slice(-1)),this.updateSelectedFromValues();else{let e=[];for(const i in this.$data){const s=this.$data[i].options;if(this.multiple)s.forEach(n=>{n.selected&&e.push(n.value)});else{const n=[...s].reverse().find(r=>r.selected);if(n){e=[n.value],this.selected=n;break}}}this.$selected=e,this.multiple&&this.updateSelectedFromValues()}}),this.isRendered=!0}updated(t){super.updated(t),this.isRendered&&t.has("$selected")&&t.get("$selected")!==void 0&&this.emit()}initializeValue(){}select(t){t.disabled||(this.multiple?(this.$selected.findIndex(i=>i===t?.value)===-1?this.$selected=[...this.$selected,t.value]:this.$selected=this.$selected.filter(i=>i!==t.value),this.$selected.length>0&&this.updateSelectedFromValues(),this.requestUpdate()):(this.$selected=[t.value],this.selected=t))}updateSelectedFromValues(){if(this.$selected.length>0){const t=this.$selected[this.$selected.length-1];for(const e in this.$data){const i=this.$data[e].options.find(s=>s.value===t);if(i){this.selected=i;break}}}}onKeydownEnter(){const t=this.activeOptionEl?.dataset;if(t){const e=t.key,i=t.index;e==="__insert__"?this.insert():this.select(this.options[e].options[i])}}onClick(t){const{item:e}=t;this.select(e)}_cls(t){return{button:this.$cls.button,icon:this.$cls.icon,list:this.$cls.list,item:t?.item.disabled===!0?this.$cls.item:this.$cls.item,"item-header":this.$cls["item-header"],"item-link":this.multiple===!1?"uk-drop-close":"","item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":this.$cls["item-check"],"item-subtitle":this.$cls["item-subtitle"],search:this.$cls.search,"search-input":this.$cls["search-input"],"search-icon":this.$cls["search-icon"],dropdown:this.$cls.dropdown}}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.$selected.includes(e.value),r=this.getGlobalIndex(t,i);return c.html`
      <li
        class="${s.item}"
        role="option"
        aria-selected="${r===this.$focused?"true":"false"}"
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
            ${e.data.icon?c.html`<span class="${s["item-icon"]}">${e.data.icon}</span>`:""}
            ${e.data.description?c.html`
                  <div>
                    <span class="${s["item-text"]}">${e.text}</span>
                    <div class="${s["item-subtitle"]}">
                      ${e.data.description}
                    </div>
                  </div>
                `:c.html`<span class="${s["item-text"]}">${e.text}</span>`}
          </div>
          ${n?c.html`<span class="${s["item-check"]}">✓</span>`:""}
        </button>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;this.insertable&&this.$term&&!this.hasOption(this.$term)&&i++;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}hasOption(t){return Object.values(this.$data).some(e=>e.options.some(i=>i.value===t))}addOption(t,e){const s=(this.$data[e]?.options||[]).some(n=>n.value===t.value);return s||(this.$data={...this.$data},this.$data[e]===void 0&&(this.$data[e]={text:t.group||"__",options:[]}),this.$data[e].options.push(t)),!s}async send(){function t(e){return typeof e=="object"&&"group"in e&&"value"in e&&"text"in e&&"disabled"in e&&"selected"in e&&"data"in e&&"key"in e.data&&"keywords"in e.data}try{if(!this["send-url"])throw new Error("No send URL provided");const e=this["send-headers"]?JSON.parse(this["send-headers"]):{"Content-Type":"application/json"},i={term:this.$term},s=await fetch(this["send-url"],{method:this["send-method"],headers:e,body:JSON.stringify(i)});if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const n=await s.json();if(t(n))return n;throw new Error("Invalid response format")}catch{return{group:"__",text:this.$term,value:this.$term,data:{gid:"__",keywords:[this.$term]},selected:!0,disabled:!1}}}async insert(){const t=await this.send();this.addOption(t,t.data.gid),this.multiple?this.$selected=[...this.$selected,this.$term]:this.$selected=[this.$term],this.selected=t,this.$term=""}renderSearch(){const t=this._cls();return this.searchable===!0?c.html`
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
        `:""}renderInsertion(){const t=this._cls();return c.html`
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
    `}renderList(){const t=this._cls();return c.html`
      <ul
        class="${t.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
        aria-multiselectable="${this.multiple}"
        @keydown="${this.onKeydown}"
      >
        ${this.insertable&&this.$term&&!this.hasOption(this.$term)?this.renderInsertion():""}
        ${R(Object.keys(this.options),e=>c.html`
            ${this.renderListHeader(e)}
            ${R(this.options[e].options,(i,s)=>this.renderListItem(e,i,s))}
          `)}
      </ul>
    `}render(){const t=this._cls(),e=this.id?`${this.id}-button`:`uk-select-${Math.random().toString(36).substr(2,9)}`,i=this.id?`${this.id}-listbox`:`uk-listbox-${Math.random().toString(36).substr(2,9)}`;return c.html`
      <div
        data-host-inner
        class="${this.$cls.container}"
        style="${this.$stl.container}"
      >
        <div class="uk-position-relative">
          <button
            id="${e}"
            class="${t.button}"
            style="${this.$stl.button}"
            type="button"
            role="combobox"
            aria-haspopup="listbox"
            aria-expanded="${this.$open}"
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
            ${this.icon?c.html`<span class="${t.icon}" style="${this.$stl.icon}"
                  >${this.icon}</span
                >`:""}
          </button>

          <div
            id="${i}"
            class="${t.dropdown} uk-drop"
            style="${this.$stl.dropdown}"
            data-uk-dropdown="${this.drop}"
            role="dialog"
            aria-label="${this.getI18nText("buttonLabel",{buttonLabel:"Select an option"})}"
          >
            ${this.renderSearch()} ${this.renderList()}
          </div>
        </div>

        ${this.renderHidden()}
      </div>
    `}},I([u({type:String})],o.Select.prototype,"drop",2),I([u({type:Boolean})],o.Select.prototype,"searchable",2),I([u({type:Boolean})],o.Select.prototype,"insertable",2),I([u({type:String,attribute:"send-headers"})],o.Select.prototype,"send-headers",2),I([u({type:String,attribute:"send-url"})],o.Select.prototype,"send-url",2),I([u({type:String,attribute:"send-method"})],o.Select.prototype,"send-method",2),I([u({type:Boolean})],o.Select.prototype,"multiple",2),I([u({type:String})],o.Select.prototype,"icon",2),I([$()],o.Select.prototype,"$selected",2),I([$()],o.Select.prototype,"$i18n",2),I([$()],o.Select.prototype,"$cls",2),I([$()],o.Select.prototype,"$stl",2),o.Select=I([_("uk-select")],o.Select);var pi=Object.defineProperty,$i=Object.getOwnPropertyDescriptor,L=(a,t,e,i)=>{for(var s=i>1?void 0:i?$i(t,e):t,n=a.length-1,r;n>=0;n--)(r=a[n])&&(s=(i?r(t,e,s):r(s))||s);return i&&s&&pi(t,e,s),s};return o.Lsh=class extends v{constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["change-event"]="uk-lsh:change",this["before-change-event"]="uk-lsh:before-change",this.defaultI18n={ariaLabel:"Toggle theme",activeLabel:"Active",switchToDark:"Switch to dark mode",switchToLight:"Switch to light mode"},this.value="",this.group="",this["prevent-autoupdate"]=!1,this.toggle=!1,this.isActive=!1,this.lshConfig={},this.$i18n={ariaLabel:"Toggle theme",activeLabel:"Active",switchToDark:"Switch to dark mode",switchToLight:"Switch to light mode"},this.$cls={button:"uk-lsh"},this.$stl={button:""},this.boundHandleExternalChange=this.handleExternalChange.bind(this)}connectedCallback(){super.connectedCallback(),this.initializeConfiguration(),this.updateActiveState(),this["prevent-autoupdate"]||document.addEventListener("uk-lsh:change",this.boundHandleExternalChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("uk-lsh:change",this.boundHandleExternalChange)}updated(t){super.updated(t),(t.has("value")||t.has("group"))&&this.updateActiveState(),t.has("prevent-autoupdate")&&(this["prevent-autoupdate"]?document.removeEventListener("uk-lsh:change",this.boundHandleExternalChange):document.addEventListener("uk-lsh:change",this.boundHandleExternalChange))}initializeConfiguration(){this.lshConfig.mode=document.documentElement.classList.contains("dark")?"dark":"light";const t=localStorage.getItem("__FRANKEN__");if(t)try{const e=JSON.parse(t);Object.keys(e).forEach(i=>{this.lshConfig[i]=e[i]})}catch(e){console.warn("[uk-lsh] Failed to parse stored configuration:",e)}}saveConfiguration(){try{localStorage.setItem("__FRANKEN__",JSON.stringify(this.lshConfig))}catch(t){console.warn("[uk-lsh] Failed to save configuration:",t)}}emitBeforeChangeEvent(t,e,i){const s=new CustomEvent(this["before-change-event"],{detail:{group:t,value:e,previousValue:i,config:{...this.lshConfig}},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(s)}emitChangeEvent(t,e,i){this.dispatchEvent(new CustomEvent(this["change-event"],{detail:{group:t,value:e,previousValue:i,config:{...this.lshConfig}},bubbles:!0,composed:!0}))}applyThemeValue(t,e){if(!t||!e)return;const i=this.lshConfig[t]||"";if(!this.emitBeforeChangeEvent(t,e,i))return;const n=document.documentElement;if(this.lshConfig[t]=e,t==="mode")e==="dark"?n.classList.add("dark"):n.classList.remove("dark");else{const r=e.split("-").slice(0,2).join("-")+"-",l=Array.from(n.classList).find(h=>h.startsWith(r));l&&n.classList.remove(l),n.classList.add(e)}this.saveConfiguration(),this.emitChangeEvent(t,e,i)}isValueActive(t,e){if(!t||!e)return!1;if(t==="mode"){const i=document.documentElement.classList.contains("dark");return e==="dark"&&i||e==="light"&&!i}else return this.lshConfig[t]===e}updateActiveState(){this.isActive=this.isValueActive(this.group,this.value)}handleExternalChange(t){const e=t;if(e.target===this)return;const{group:i}=e.detail;i===this.group&&this.updateActiveState()}handleClick(){if(this.toggle&&this.group==="mode"){const e=(document.documentElement.classList.contains("dark")?"dark":"light")==="dark"?"light":"dark";this.applyThemeValue("mode",e)}else this.applyThemeValue(this.group,this.value);this.updateActiveState()}handleKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.handleClick())}getAriaLabel(){if(this.toggle&&this.group==="mode"){const n=(document.documentElement.classList.contains("dark")?"dark":"light")==="dark"?this.getI18nText("switchToLight",this.defaultI18n):this.getI18nText("switchToDark",this.defaultI18n);return`${this.getI18nText("ariaLabel",this.defaultI18n)} (${n})`}const t=this.getI18nText("ariaLabel",this.defaultI18n),e=this.value||"",i=this.isActive?`, ${this.getI18nText("activeLabel",this.defaultI18n)}`:"";return`${t}: ${e}${i}`}render(){return c.html`
      <button
        data-host-inner
        class="${this.$cls.button} ${this.isActive?"uk-active":""}"
        style="${this.$stl.button}"
        @click="${this.handleClick}"
        @keydown="${this.handleKeydown}"
        type="button"
        aria-label="${this.getAriaLabel()}"
        aria-pressed="${this.isActive}"
      >
        ${Ft(this.$template)}
      </button>
    `}},L([u({type:String})],o.Lsh.prototype,"value",2),L([u({type:String})],o.Lsh.prototype,"group",2),L([u({type:Boolean,attribute:"prevent-autoupdate"})],o.Lsh.prototype,"prevent-autoupdate",2),L([u({type:Boolean})],o.Lsh.prototype,"toggle",2),L([$()],o.Lsh.prototype,"isActive",2),L([$()],o.Lsh.prototype,"lshConfig",2),L([$()],o.Lsh.prototype,"$i18n",2),L([$()],o.Lsh.prototype,"$cls",2),L([$()],o.Lsh.prototype,"$stl",2),o.Lsh=L([_("uk-lsh")],o.Lsh),Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),o})({},Lit,Lucide,ApexCharts);
