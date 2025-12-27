var __COMPONENTS__=(function(o,c,Tt,te){"use strict";function ee(r){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}return t.default=r,Object.freeze(t)}const ie=ee(Tt);const _=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const et=globalThis,pt=et.ShadowRoot&&(et.ShadyCSS===void 0||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),At=new WeakMap;let se=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=At.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&At.set(e,t))}return t}toString(){return this.cssText}};const ne=r=>new se(typeof r=="string"?r:r+"",void 0,Ct),re=(r,t)=>{if(pt)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=et.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},xt=pt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return ne(e)})(r):r;const{is:ae,defineProperty:oe,getOwnPropertyDescriptor:le,getOwnPropertyNames:he,getOwnPropertySymbols:ue,getPrototypeOf:ce}=Object,it=globalThis,Et=it.trustedTypes,de=Et?Et.emptyScript:"",pe=it.reactiveElementPolyfillSupport,Y=(r,t)=>r,st={toAttribute(r,t){switch(t){case Boolean:r=r?de:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},$t=(r,t)=>!ae(r,t),Dt={attribute:!0,type:String,converter:st,reflect:!1,useDefault:!1,hasChanged:$t};Symbol.metadata??=Symbol("metadata"),it.litPropertyMetadata??=new WeakMap;class F extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&oe(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=le(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const h=s?.call(this);n?.call(this,a),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;const t=ce(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){const e=this.properties,i=[...he(e),...ue(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(xt(s))}else t!==void 0&&e.push(xt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return re(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:st).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:st;this._$Em=s;const h=a.fromAttribute(e,n.type);this[s]=h??this._$Ej?.get(s)??h,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??$t)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,h=this[s];a!==!0||this._$AL.has(s)||h===void 0||this.C(s,void 0,n,h)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[Y("elementProperties")]=new Map,F[Y("finalized")]=new Map,pe?.({ReactiveElement:F}),(it.reactiveElementVersions??=[]).push("2.1.1");const $e={attribute:!0,type:String,converter:st,reflect:!1,hasChanged:$t},me=(r=$e,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:a}=e;return{set(h){const l=t.get.call(this);t.set.call(this,h),this.requestUpdate(a,l,r)},init(h){return h!==void 0&&this.C(a,void 0,r,h),h}}}if(i==="setter"){const{name:a}=e;return function(h){const l=this[a];t.call(this,h),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+i)};function u(r){return(t,e)=>typeof e=="object"?me(r,t,e):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}function m(r){return u({...r,state:!0,attribute:!1})}const mt=globalThis,nt=mt.trustedTypes,Mt=nt?nt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Ot="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Lt="?"+O,fe=`<${Lt}>`,P=document,rt=()=>P.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",ft=Array.isArray,ge=r=>ft(r)||typeof r?.[Symbol.iterator]=="function",gt=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,Ht=/>/g,H=RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jt=/'/g,Ut=/"/g,Rt=/^(?:script|style|textarea|title)$/i,L=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Nt=new WeakMap,j=P.createTreeWalker(P,129);function Vt(r,t){if(!ft(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Mt!==void 0?Mt.createHTML(t):t}const be=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=W;for(let h=0;h<e;h++){const l=r[h];let d,$,p=-1,f=0;for(;f<l.length&&(a.lastIndex=f,$=a.exec(l),$!==null);)f=a.lastIndex,a===W?$[1]==="!--"?a=Pt:$[1]!==void 0?a=Ht:$[2]!==void 0?(Rt.test($[2])&&(s=RegExp("</"+$[2],"g")),a=H):$[3]!==void 0&&(a=H):a===H?$[0]===">"?(a=s??W,p=-1):$[1]===void 0?p=-2:(p=a.lastIndex-$[2].length,d=$[1],a=$[3]===void 0?H:$[3]==='"'?Ut:jt):a===Ut||a===jt?a=H:a===Pt||a===Ht?a=W:(a=H,s=void 0);const g=a===H&&r[h+1].startsWith("/>")?" ":"";n+=a===W?l+fe:p>=0?(i.push(d),l.slice(0,p)+Ot+l.slice(p)+O+g):l+O+(p===-2?h:g)}return[Vt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class G{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const h=t.length-1,l=this.parts,[d,$]=be(t,e);if(this.el=G.createElement(d,i),j.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=j.nextNode())!==null&&l.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(Ot)){const f=$[a++],g=s.getAttribute(p).split(O),b=/([.?@])?(.*)/.exec(f);l.push({type:1,index:n,name:b[2],strings:g,ctor:b[1]==="."?ye:b[1]==="?"?we:b[1]==="@"?ke:at}),s.removeAttribute(p)}else p.startsWith(O)&&(l.push({type:6,index:n}),s.removeAttribute(p));if(Rt.test(s.tagName)){const p=s.textContent.split(O),f=p.length-1;if(f>0){s.textContent=nt?nt.emptyScript:"";for(let g=0;g<f;g++)s.append(p[g],rt()),j.nextNode(),l.push({type:2,index:++n});s.append(p[f],rt())}}}else if(s.nodeType===8)if(s.data===Lt)l.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(O,p+1))!==-1;)l.push({type:7,index:n}),p+=O.length-1}n++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}}function q(r,t,e=r,i){if(t===L)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=J(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=q(r,s._$AS(r,t.values),s,i)),t}let ve=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);j.currentNode=s;let n=j.nextNode(),a=0,h=0,l=i[0];for(;l!==void 0;){if(a===l.index){let d;l.type===2?d=new Z(n,n.nextSibling,this,t):l.type===1?d=new l.ctor(n,l.name,l.strings,this,t):l.type===6&&(d=new Ie(n,this,t)),this._$AV.push(d),l=i[++h]}a!==l?.index&&(n=j.nextNode(),a++)}return j.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=q(this,t,e),J(t)?t===y||t==null||t===""?(this._$AH!==y&&this._$AR(),this._$AH=y):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ge(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==y&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(P.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=G.createElement(Vt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new ve(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new G(t)),e}k(t){ft(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Z(this.O(rt()),this.O(rt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class at{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=y,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=y}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=q(this,t,e,0),a=!J(t)||t!==this._$AH&&t!==L,a&&(this._$AH=t);else{const h=t;let l,d;for(t=n[0],l=0;l<n.length-1;l++)d=q(this,h[i+l],e,l),d===L&&(d=this._$AH[l]),a||=!J(d)||d!==this._$AH[l],d===y?t=y:t!==y&&(t+=(d??"")+n[l+1]),this._$AH[l]=d}a&&!s&&this.j(t)}j(t){t===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ye extends at{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===y?void 0:t}}class we extends at{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==y)}}class ke extends at{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=q(this,t,e,0)??y)===L)return;const i=this._$AH,s=t===y&&i!==y||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==y&&(i===y||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ie{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){q(this,t)}}const Se={I:Z},_e=mt.litHtmlPolyfillSupport;_e?.(G,Z),(mt.litHtmlVersions??=[]).push("3.3.1");const bt={ATTRIBUTE:1,CHILD:2},vt=r=>(...t)=>({_$litDirective$:r,values:t});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const zt=vt(class extends yt{constructor(r){if(super(r),r.type!==bt.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return L}});const{I:Te}=Se,Bt=()=>document.createComment(""),X=(r,t,e)=>{const i=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=i.insertBefore(Bt(),s),a=i.insertBefore(Bt(),s);e=new Te(n,a,r,r.options)}else{const n=e._$AB.nextSibling,a=e._$AM,h=a!==r;if(h){let l;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(l=r._$AU)!==a._$AU&&e._$AP(l)}if(n!==s||h){let l=e._$AA;for(;l!==n;){const d=l.nextSibling;i.insertBefore(l,s),l=d}}}return e},U=(r,t,e=r)=>(r._$AI(t,e),r),Ce={},Ae=(r,t=Ce)=>r._$AH=t,xe=r=>r._$AH,wt=r=>{r._$AR(),r._$AA.remove()};const qt=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},R=vt(class extends yt{constructor(r){if(super(r),r.type!==bt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],n=[];let a=0;for(const h of r)s[a]=i?i(h,a):a,n[a]=e(h,a),a++;return{values:n,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=xe(r),{values:n,keys:a}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=a,n;const h=this.ut??=[],l=[];let d,$,p=0,f=s.length-1,g=0,b=n.length-1;for(;p<=f&&g<=b;)if(s[p]===null)p++;else if(s[f]===null)f--;else if(h[p]===a[g])l[g]=U(s[p],n[g]),p++,g++;else if(h[f]===a[b])l[b]=U(s[f],n[b]),f--,b--;else if(h[p]===a[b])l[b]=U(s[p],n[b]),X(r,l[b+1],s[p]),p++,b--;else if(h[f]===a[g])l[g]=U(s[f],n[g]),X(r,s[p],s[f]),f--,g++;else if(d===void 0&&(d=qt(a,g,b),$=qt(h,p,f)),d.has(h[p]))if(d.has(h[f])){const k=$.get(a[g]),z=k!==void 0?s[k]:null;if(z===null){const B=X(r,s[p]);U(B,n[g]),l[g]=B}else l[g]=U(z,n[g]),X(r,s[p],z),s[k]=null;g++}else wt(s[f]),f--;else wt(s[p]),p++;for(;g<=b;){const k=X(r,l[b+1]);U(k,n[g]),l[g++]=k}for(;p<=f;){const k=s[p++];k!==null&&wt(k)}return this.ut=a,Ae(r,l),L}});function Q(r){if(!/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(r))throw new Error("Invalid date format. Expected YYYY-MM-DD or YYYY-MM-DDTHH:MM");const e=new Date(r);if(isNaN(e.getTime()))throw new Error("Invalid date value");return e}function Ee(r){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(r))throw new Error("Invalid time format. Use HH:MM (24-hour format)");return r}function De(r,t,e="en-US"){const i=p=>{if(p>=11&&p<=13)return"th";switch(p%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},s=new Intl.DateTimeFormat(e,{month:"long"}),n=new Intl.DateTimeFormat(e,{month:"short"}),a=new Intl.DateTimeFormat(e,{weekday:"long"}),h=new Intl.DateTimeFormat(e,{weekday:"short"}),l={YYYY:()=>r.getFullYear().toString(),YY:()=>(r.getFullYear()%100).toString().padStart(2,"0"),MMMM:()=>s.format(r),MMM:()=>n.format(r),MM:()=>(r.getMonth()+1).toString().padStart(2,"0"),M:()=>(r.getMonth()+1).toString(),dddd:()=>a.format(r),ddd:()=>h.format(r),Do:()=>r.getDate()+(e.startsWith("en")?i(r.getDate()):""),DD:()=>r.getDate().toString().padStart(2,"0"),D:()=>r.getDate().toString(),HH:()=>r.getHours().toString().padStart(2,"0"),H:()=>r.getHours().toString(),hh:()=>(r.getHours()%12||12).toString().padStart(2,"0"),h:()=>(r.getHours()%12||12).toString(),mm:()=>r.getMinutes().toString().padStart(2,"0"),m:()=>r.getMinutes().toString(),A:()=>r.getHours()>=12?"PM":"AM",a:()=>r.getHours()>=12?"pm":"am"},d=Object.keys(l).sort((p,f)=>f.length-p.length),$=new RegExp(d.join("|"),"g");return t.replace($,p=>l[p]())}var Me=Object.defineProperty,A=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Me(t,e,s),s};const Kt=r=>{class t extends r{constructor(){super(...arguments),this.today=!1,this.jumpable=!1,this["starts-with"]=0,this["disabled-dates"]="",this["marked-dates"]="",this["view-date"]=new Date().toISOString().split("T")[0],this.min="",this.max="",this["weekday-format"]="short",this.lang="en-us",this.isDirty=!1}get $viewDate(){const[i,s,n]=this["view-date"].split("-").map(Number);return this.createUTCDate(i,s-1,n)}createUTCDate(i,s,n){return new Date(Date.UTC(i,s,n))}dateToUTC(i){return this.createUTCDate(i.getFullYear(),i.getMonth(),i.getDate())}getTodayUTC(){return this.dateToUTC(new Date)}getUTCDate(i){return this.dateToUTC(i)}isDateInRange(i){if(!this.min&&!this.max)return!0;const s=new Date(i);if(this.min){const n=Q(this.min);if(s<n)return!1}if(this.max){const n=Q(this.max);if(n.setDate(n.getDate()+1),s>=n)return!1}return!0}parseDates(i){return i?i.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{try{return Q(s).toISOString().slice(0,10)}catch{return console.warn(`[fr-calendar] Invalid date format in list: "${s}".`),""}}).filter(Boolean):[]}getTimestampComponent(i){const s=this.lang||void 0;return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,monthName:i.toLocaleDateString(s,{month:"long",timeZone:"UTC"}),day:i.getUTCDate(),dayName:i.toLocaleDateString(s,{weekday:"long",timeZone:"UTC"}),ISOString:i.toISOString()}}$icons(i){const s=super.$icons(i);if(s)return s;switch(i){case"chevron-left":return c.html`
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
          `}}}return A([u({type:Boolean})],t.prototype,"today"),A([u({type:Boolean})],t.prototype,"jumpable"),A([u({type:Number})],t.prototype,"starts-with"),A([u({type:String})],t.prototype,"disabled-dates"),A([u({type:String})],t.prototype,"marked-dates"),A([u({type:String})],t.prototype,"view-date"),A([u({type:String})],t.prototype,"min"),A([u({type:String})],t.prototype,"max"),A([u({type:String})],t.prototype,"weekday-format"),A([u({type:String})],t.prototype,"lang"),t};var Oe=Object.defineProperty,tt=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Oe(t,e,s),s};const N=r=>{class t extends r{constructor(){super(...arguments),this.disabled=!1,this.name="",this.placeholder="",this.required=!1,this.value=""}renderHidden(){return typeof this.$value=="string"?this.name?c.html`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `:"":this.$value.map(i=>c.html`
              <input name="${this.name}[]" type="hidden" value="${i}" />
            `)}emit(){this.dispatchEvent(new CustomEvent(this["input-event"],{detail:{value:this.$value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.initializeValue()}}return tt([u({type:Boolean})],t.prototype,"disabled"),tt([u({type:String})],t.prototype,"name"),tt([u({type:String})],t.prototype,"placeholder"),tt([u({type:Boolean})],t.prototype,"required"),tt([u({type:String})],t.prototype,"value"),t};class kt extends yt{constructor(t){if(super(t),this.it=y,t.type!==bt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===y||t==null)return this._t=void 0,this.it=t;if(t===L)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}kt.directiveName="unsafeHTML",kt.resultType=1;const Yt=vt(kt);function ot(r,t=!1){if(t){if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),r}return r}if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),{}}if(r.replace(/\\:/g,"").includes(":"))try{const e={};return Ft(r.replace(/[;\s]+$/,""),";").forEach(s=>{const n=Ft(s.trim(),":");if(n.length>=2){const a=n[0].trim(),h=n.slice(1).join(":").trim();a&&(e[a]=Jt(h))}}),e}catch(e){return console.error("Error parsing key-value pairs:",r,e),{}}return Jt(r)}function Ft(r,t){const e=[];let i="",s=0;for(;s<r.length;)r[s]==="\\"&&s+1<r.length&&r[s+1]===t?(i+="\\"+t,s+=2):r[s]===t?(e.push(i),i="",s++):(i+=r[s],s++);return e.push(i),e}function Jt(r){return r.replace(/\\:/g,":").replace(/\\;/g,";")}function Le(r){const t={},e=(s,n=[])=>{const a=n.length>0?{keywords:n}:{};return Object.keys(s.dataset).forEach(h=>{if(h==="keywords"){const l=s.dataset.keywords.split(",").map(d=>d.trim()).filter(d=>d.length>0);a.keywords=n.length>0?[...n,...l]:l}else a[h]=s.dataset[h]}),a},i=(s,n,a,h=!1)=>{const l=a.hasAttribute("value")?a.getAttribute("value"):a.textContent.trim(),d=e(a,[l]);t[s]||(t[s]={text:n,options:[]}),t[s].options.push({group:s,value:l,text:a.textContent.trim(),disabled:h||a.disabled,selected:a.hasAttribute("selected"),data:d})};return Array.from(r.children).forEach(s=>{if(s.nodeName==="OPTGROUP"){const n=s,a=n.dataset.key||n.getAttribute("label"),h=n.getAttribute("label").trim(),l=e(n);Array.from(n.children).forEach(d=>{d.nodeName==="OPTION"&&i(a,h,d,n.disabled)}),Object.keys(l).length>0&&(t[a]||(t[a]={text:h,options:[]}),t[a].data=l)}else s.nodeName==="OPTION"&&i("__","__",s)}),t}var Pe=Object.defineProperty,T=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Pe(t,e,s),s};let lt=null,Wt=!1;class v extends c.LitElement{constructor(){super(...arguments),this.cls="",this.stl="",this.i18n="",this["force-prevent-rerender"]=!1,this.$i18n={},this.$cls={},this.$stl={},this.$config={},this.$i=new Map,this.$template="",this.$data={},this.isRendered=!1,this.HTMLScript=null,this.HTMLIconContainer=null,this.HTMLTemplateContainer=null,this.HTMLDataSource=null,this.configObserver=null,this.dataSourceObserver=null,this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner"}get $normalizedI18n(){const t={};return Object.keys(this.$i18n).forEach(e=>{const i=this.$i18n[e];t[e]=i.includes(",")?i.split(",").map(s=>s.trim()):i}),t}$icons(t){return this.$i.get(t)}getI18nText(t,e={},i){let s=this.$i18n[t];if(!s){const n=this.tagName.toLowerCase(),a=this.$i18n[n];typeof a=="object"&&a!==null&&t in a&&(s=a[t])}return s||(s=e[t]||""),i!==void 0&&(typeof i=="number"?s=s.replace("{n}",String(i)):Object.keys(i).forEach(n=>{const a=i[n];s=s.replace(new RegExp(`\\{${n}\\}`,"g"),String(a))})),s}initializeCls(){if(this.cls){const t=ot(this.cls);typeof t=="string"?this.$cls[this["cls-default-element"]]=t:Object.keys(t).forEach(e=>{this.$cls[e]=t[e]})}}initializeStl(){if(this.stl){const t=ot(this.stl);typeof t=="string"?this.$stl[this["stl-default-element"]]=t:Object.keys(t).forEach(e=>{this.$stl[e]=t[e]})}}initializeGI18n(){if(Wt)return;Wt=!0;const t=document.getElementById("uk-i18n");if(t&&t.textContent)try{lt=JSON.parse(t.textContent)}catch(e){console.error('Failed to parse global i18n from <script id="uk-i18n">.',e),lt={}}else lt={}}initializeI18n(){this.initializeGI18n();const t=this.i18n?ot(this.i18n):{};typeof t=="object"&&t!==null&&(this.$i18n=Object.assign({},lt,t))}initializeConfig(){this.HTMLScript=this.querySelector('script[data-fn="config"][type="application/json"]')}initializeIcons(){this.HTMLIconContainer=this.querySelector('template[data-fn="icons"]')}initializeTemplate(){this.HTMLTemplateContainer=this.querySelector('template[data-fn="template"]')}initializeDataSource(){this.HTMLDataSource=this.querySelector('select[data-fn="data-source"]')}parseIcons(){if(!this.HTMLIconContainer)return;this.HTMLIconContainer.content.querySelectorAll("[data-key]").forEach(e=>{const i=e.getAttribute("data-key");if(i){const s=e.cloneNode(!0);s.removeAttribute("data-key");const n=s.outerHTML;this.$i.set(i,c.html`${Yt(n)}`)}})}parseTemplate(){this.HTMLTemplateContainer&&(this.$template=this.HTMLTemplateContainer.innerHTML.trim())}parseConfig(){if(this.HTMLScript)try{const t=this.HTMLScript.textContent;if(this.$config=t?JSON.parse(t):{},this.$config&&typeof this.$config=="object"){if("i18n"in this.$config){const e=this.$config.i18n;typeof e=="object"&&e!==null&&(this.$i18n={...this.$i18n,...e})}if("cls"in this.$config){const e=this.$config.cls;typeof e=="string"?this.$cls[this["cls-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$cls={...this.$cls,...e})}if("stl"in this.$config){const e=this.$config.stl;typeof e=="string"?this.$stl[this["stl-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$stl={...this.$stl,...e})}}}catch(t){console.warn(`${this.tagName.toLowerCase()}: Failed to parse config JSON:`,t),this.$config={}}}parseDataSource(){this.HTMLDataSource&&(this.$data=Le(this.HTMLDataSource))}initializeConfigObserver(){!this.HTMLScript||!this.HTMLScript.hasAttribute("data-reactive")||(this.configObserver=new MutationObserver(()=>{this.parseConfig(),this.onConfigChanged()}),this.configObserver.observe(this.HTMLScript,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}initializeDataSourceObserver(){!this.HTMLDataSource||!this.HTMLDataSource.hasAttribute("data-reactive")||(this.dataSourceObserver=new MutationObserver(()=>{this.parseDataSource(),this.onDataSourceChanged()}),this.dataSourceObserver.observe(this.HTMLDataSource,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}onConfigChanged(){}onDataSourceChanged(){}connectedCallback(){super.connectedCallback(),this["force-prevent-rerender"]&&this.querySelector("[data-host-inner]")&&(this.isRendered=!0),this.initializeI18n(),this.initializeCls(),this.initializeStl(),this.initializeConfig(),this.initializeIcons(),this.initializeTemplate(),this.initializeDataSource(),this.HTMLScript&&(this.parseConfig(),this.initializeConfigObserver()),this.HTMLIconContainer&&this.parseIcons(),this.HTMLTemplateContainer&&this.parseTemplate(),this.HTMLDataSource&&(this.parseDataSource(),this.initializeDataSourceObserver())}disconnectedCallback(){super.disconnectedCallback(),this.configObserver&&(this.configObserver.disconnect(),this.configObserver=null),this.dataSourceObserver&&(this.dataSourceObserver.disconnect(),this.dataSourceObserver=null)}shouldUpdate(t){return this["force-prevent-rerender"]&&this.isRendered?!1:super.shouldUpdate(t)}updated(t){super.updated(t),this.isRendered||(this.isRendered=!0)}createRenderRoot(){return this}}T([u({type:String})],v.prototype,"cls"),T([u({type:String})],v.prototype,"stl"),T([u({type:String})],v.prototype,"i18n"),T([u({type:Boolean})],v.prototype,"force-prevent-rerender"),T([m()],v.prototype,"$i18n"),T([m()],v.prototype,"$cls"),T([m()],v.prototype,"$stl"),T([m()],v.prototype,"$config"),T([m()],v.prototype,"$i"),T([m()],v.prototype,"$template"),T([m()],v.prototype,"$data");var He=Object.defineProperty,je=Object.getOwnPropertyDescriptor,ht=(r,t,e,i)=>{for(var s=i>1?void 0:i?je(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&He(t,e,s),s};o.Calendar=class extends Kt(N(v)){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-calendar:change",this.$cls={"host-inner":"uk-cal",header:"uk-cal-header","previous-button":"uk-button uk-button-secondary uk-button-icon uk-button-small","next-button":"uk-button uk-button-secondary uk-button-icon uk-button-small",title:"uk-cal-title",jumper:"uk-cal-jumper","month-select":"uk-select uk-form-small","year-input":"uk-input uk-form-small",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"uk-cal-jumper-month","jumper-year":"uk-cal-jumper-year","jumper-button":"uk-button uk-button-secondary uk-button-icon uk-button-small","day-outside-month":"uk-cal-oom","day-selected":"uk-active","day-today":"uk-nothing","day-marked":"uk-cal-marked","button-outside-month":"uk-nothing","button-selected":"uk-nothing","button-today":"uk-nothing","button-marked":"uk-nothing"},this.$stl={"host-inner":"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-button":"","day-outside-month":"","day-selected":"","day-today":"","day-marked":"","button-outside-month":"","button-selected":"","button-today":"","button-marked":""},this.defaultI18n={"prev-month":"Previous month","next-month":"Next month","prev-year":"Previous year","next-year":"Next year","select-month":"Select month","select-year":"Select year"},this.navigate=t=>{const e=t.target;if(!e?.matches("button[data-iso]"))return;const i=Array.from(this.querySelectorAll("button[data-iso]")),s=i.indexOf(e),n=this.getGridPosition(e);if(!n)return;const{rowIndex:a,colIndex:h}=n;let l;const d={ArrowLeft:()=>this.findNextEnabled(i,s-1,-1),ArrowRight:()=>this.findNextEnabled(i,s+1,1),ArrowUp:()=>this.getNextEnabledInColumn(a-1,h,-1),ArrowDown:()=>this.getNextEnabledInColumn(a+1,h,1),Home:()=>this.getRowFirstEnabledButton(a),End:()=>this.getRowLastEnabledButton(a),PageUp:t.ctrlKey||t.metaKey?()=>{this.navigateYear("prev")}:()=>{this.navigateMonth("prev")},PageDown:t.ctrlKey||t.metaKey?()=>{this.navigateYear("next")}:()=>{this.navigateMonth("next")}};if(d[t.key]){t.preventDefault();const $=d[t.key]();$&&(l=$)}else if(t.key==="Enter"||t.key===" "){t.preventDefault(),e.click();return}l?.focus()}}get $value(){return this.$active?this.$active.slice(0,10):""}get $text(){return""}initializeValue(){if(this.value)try{const t=Q(this.value);this.$active=t.toISOString(),this["view-date"]=t.toISOString().slice(0,10)}catch(t){console.error(`[uk-calendar] Invalid date format for value: "${this.value}".`,t)}else this.today&&(this.$active=this.getTodayUTC().toISOString())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.navigate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.navigate)}updated(t){t.has("$active")&&(this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);e&&this.isDirty&&e.focus()}),this.emit())}findNextEnabled(t,e,i){for(let s=e;s>=0&&s<t.length;s+=i)if(!t[s].disabled)return t[s]}getNextEnabledInColumn(t,e,i){const s=Array.from(this.querySelectorAll("tr"));for(let n=t;n>=0&&n<s.length;n+=i){const a=s[n]?.children[e]?.querySelector("button[data-iso]");if(a&&!a.disabled)return a}}getRowFirstEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).find(i=>!i.disabled)}getRowLastEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).reverse().find(i=>!i.disabled)}getGridPosition(t){const e=t.closest("td"),i=e?.closest("tr");return!i||!e?null:{rowIndex:Array.from(this.querySelectorAll("tr")).indexOf(i),colIndex:Array.from(i.children).indexOf(e)}}select(t){this.$active=t.ISOString,t.month!=="current"&&(this["view-date"]=t.ISOString.slice(0,10)),this.isDirty||(this.isDirty=!0)}navigateYear(t){const[e,i,s]=this["view-date"].split("-"),n=t==="prev"?parseInt(e)-1:parseInt(e)+1;this["view-date"]=`${n}-${i}-${s}`}navigateMonth(t){const[e,i]=this["view-date"].split("-").map(Number);let s=i,n=e;t==="prev"?i===1?(s=12,n-=1):s-=1:i===12?(s=1,n+=1):s+=1,this["view-date"]=`${n}-${s.toString().padStart(2,"0")}-01`}selectMonth(t){const[e]=this["view-date"].split("-");this["view-date"]=`${e}-${(t+1).toString().padStart(2,"0")}-01`}setYear(t){if(/^\d{4}$/.test(t)){const[,e,i]=this["view-date"].split("-");this["view-date"]=`${t}-${e}-${i}`}}get weekdays(){const t=this.lang||void 0,e=[];for(let i=0;i<7;i++){const s=(this["starts-with"]+i)%7,n=this.createUTCDate(2023,0,1+s);e.push(n.toLocaleDateString(t,{weekday:this["weekday-format"],timeZone:"UTC"}))}return e}get calendar(){const[t,e]=this["view-date"].split("-").map(Number),i=this.getTodayUTC().toISOString().slice(0,10),s=this.parseDates(this["marked-dates"]),n=new Set(this.parseDates(this["disabled-dates"])),a=this.createUTCDate(t,e-1,1),h=this.createUTCDate(t,e,0).getUTCDate(),l=this.createUTCDate(t,e-1,0).getUTCDate();let d=(a.getUTCDay()-this["starts-with"]+7)%7;const $=[];let p=1,f=l-d+1,g=1;for(let b=0;b<6;b++){const k=[];for(let z=0;z<7;z++){let B,ct,dt;b===0&&z<d?(B=this.createUTCDate(t,e-2,f),ct=f,dt="prev",f++):p>h?(B=this.createUTCDate(t,e,g),ct=g,dt="next",g++):(B=this.createUTCDate(t,e-1,p),ct=p,dt="current",p++);const St=B.toISOString(),_t=St.slice(0,10);k.push({date:ct,month:dt,isToday:_t===i,isDisabled:n.has(_t)||!this.isDateInRange(St),isMarked:s.includes(_t),ISOString:St})}if($.push(k),p>h&&b>=4)break}return $}render(){return c.html`
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
    `}renderJumper(){const{year:t,month:e}=this.getTimestampComponent(this.$viewDate),i=this.lang||void 0,s=Array.from({length:12},(d,$)=>this.createUTCDate(2e3,$,15).toLocaleDateString(i,{month:"long",timeZone:"UTC"})),n=this.getI18nText("prev-month",this.defaultI18n),a=this.getI18nText("next-month",this.defaultI18n),h=this.getI18nText("prev-year",this.defaultI18n),l=this.getI18nText("next-year",this.defaultI18n);return c.html`
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
            ${s.map((d,$)=>c.html`<option value=${$}>${d.substring(0,3)}</option>`)}
          </select>
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
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
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateYear("prev")}
            type="button"
            aria-label=${h}
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
            @input=${d=>{const $=d.target;$.value.length===4&&this.setYear($.value)}}
          />
          <button
            class="${this.$cls["jumper-button"]}"
            style=${this.$stl["jumper-button"]}
            @click=${()=>this.navigateYear("next")}
            type="button"
            aria-label=${l}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
      </div>
    `}renderWeek(t){return c.html`
      <tr class=${this.$cls.week} style=${this.$stl.week} role="row">
        ${R(t,e=>e.ISOString,e=>this.renderDay(e))}
      </tr>
    `}renderDay(t){const e=this.$active===t.ISOString,i=new Date(t.ISOString),s=this.lang||void 0,n=i.toLocaleDateString(s,{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),a={[this.$cls.day]:!0,[this.$cls["day-outside-month"]]:t.month!=="current",[this.$cls["day-selected"]]:e,[this.$cls["day-today"]]:t.isToday,[this.$cls["day-marked"]]:t.isMarked},h={[this.$cls["day-button"]]:!0,[this.$cls["button-selected"]]:e,[this.$cls["button-today"]]:t.isToday,[this.$cls["button-marked"]]:t.isMarked,[this.$cls["button-outside-month"]]:t.month!=="current"};return c.html`
      <td
        class=${zt(a)}
        style=${this.$stl.day}
        role="gridcell"
        aria-selected=${e?"true":"false"}
      >
        <button
          class=${zt(h)}
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
    `}},ht([m()],o.Calendar.prototype,"$active",2),ht([m()],o.Calendar.prototype,"$cls",2),ht([m()],o.Calendar.prototype,"$stl",2),o.Calendar=ht([_("uk-calendar")],o.Calendar);var Ue=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,x=(r,t,e,i)=>{for(var s=i>1?void 0:i?Re(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ue(t,e,s),s};o.InputDate=class extends Kt(N(v)){constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["input-event"]="uk-input-date:change",this["display-format"]="MMMM DD, YYYY",this["with-time"]=!1,this.clock="12h",this["require-time"]=!1,this.drop="mode: click; animation: uk-animation-slide-top-small;",this.$cls={container:"",button:"","button-text":"",icon:"",dropdown:"uk-datepicker-dropdown",calendar:"","time-wrapper":"uk-datepicker-time",time:""},this.$stl={container:"",button:"","button-text":"",icon:"",dropdown:"",calendar:"","time-wrapper":"",time:""},this.defaultI18n={"button-label":"Select date","dialog-label":"Date picker",selected:"selected",placeholder:"Select a date","placeholder-with-time":"Select a date and time"}}get $value(){return this.$date&&this.$time?`${this.$date}T${this.$time}`:this.$date?this.$date:""}get $text(){if(this.$value)try{const t=this.$value.includes("T")?new Date(this.$value):new Date(this.$value+"T00:00:00");let e=this["display-format"];if(this["with-time"]&&this.$time){const i=this.clock==="12h"?"h:mm A":"HH:mm";e=`${this["display-format"]} ${i}`}return De(t,e,this.lang)}catch(t){return console.error("[uk-input-date] Failed to format date:",t),this.$value}return this.placeholder?this.placeholder:this.getI18nText(this["with-time"]?"placeholder-with-time":"placeholder",this.defaultI18n)}connectedCallback(){super.connectedCallback()}firstUpdated(t){super.firstUpdated?.(t),this.renderRoot.querySelector("uk-calendar")?.addEventListener("uk-calendar:change",e=>{this.$date=e.detail.value}),this["with-time"]&&this.renderRoot.querySelector("uk-input-time")?.addEventListener("uk-input-time:input",e=>{this.$time=e.detail.value})}updated(t){super.updated(t),(t.has("$date")||t.has("$time"))&&this.emit()}initializeValue(){if(this.value)try{if(Q(this.value),!this.value.includes("T"))this.$date=this.value;else{const[e,i]=this.value.split("T");this.$date=e,this.$time=i}}catch(t){console.error("[uk-input-date] Failed to initialize date value:",t)}}get buttonLabel(){const t=this.getI18nText("button-text",this.defaultI18n);return this.$value?`${t}, ${this.getI18nText("selected",this.defaultI18n)}: ${this.$text}`:t}render(){const t=this.getI18nText("dialog-label",this.defaultI18n);return c.html`
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
    `:c.nothing}},x([u({type:String,attribute:"display-format"})],o.InputDate.prototype,"display-format",2),x([u({type:Boolean,attribute:"with-time"})],o.InputDate.prototype,"with-time",2),x([u({type:String})],o.InputDate.prototype,"clock",2),x([u({type:Boolean,attribute:"require-time"})],o.InputDate.prototype,"require-time",2),x([u({type:String})],o.InputDate.prototype,"drop",2),x([m()],o.InputDate.prototype,"$date",2),x([m()],o.InputDate.prototype,"$time",2),x([m()],o.InputDate.prototype,"$cls",2),x([m()],o.InputDate.prototype,"$stl",2),o.InputDate=x([_("uk-input-date")],o.InputDate);var Ne=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,D=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ve(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ne(t,e,s),s};o.InputPin=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="wrapper",this["stl-default-element"]="wrapper",this["input-event"]="uk-input-pin:change",this.autofocus=!1,this.length=6,this["input-mode"]="numeric",this.defaultI18n={label:"PIN Code",description:"Enter {length}-digit code","field-label":"Digit {n} of {total}",loaded:"PIN input ready",complete:"PIN entry complete","field-filled":"Field {n} filled","invalid-character":"Invalid character entered"},this.$cls={"host-inner":"",wrapper:"uk-input-pin",input:"",label:"sr-only",description:"sr-only"},this.$stl={container:"",wrapper:"",input:"",label:"",description:""},this.$pin="",this.$inputs=null,this.groupId=""}get $value(){return this.$pin}get $text(){return""}initializeValue(){if(this.groupId=this.id?`${this.id}-group`:`pin-${Math.random().toString(36).substr(2,9)}`,this.value){const t=this.value.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(t)){console.warn(`[uk-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`);return}this.$pin=t}}firstUpdated(t){this.$inputs=this.renderRoot.querySelectorAll("input[data-pin-input]"),this.setupPasteHandlers(),this.populateInitialValue(),this.announceToScreenReader(this.getI18nText("loaded",this.defaultI18n))}populateInitialValue(){if(!(!this.$pin||!this.$inputs)&&(this.$pin.split("").forEach((t,e)=>{const i=this.$inputs[e];i&&(i.value=t,i.disabled=!1)}),this.$pin.length<this.length)){const t=this.$inputs[this.$pin.length];t&&(t.disabled=!1)}}setupPasteHandlers(){this.$inputs?.forEach(t=>{t.addEventListener("paste",e=>{e.preventDefault();const i=e.clipboardData;i&&this.handlePaste(i.getData("Text"))})})}handlePaste(t){if(!this.$inputs)return;const e=t.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(e)){this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}this.$pin=e,e.split("").forEach((i,s)=>{const n=this.$inputs[s];n.disabled=!1,n.value=i});for(let i=e.length;i<this.length;i++){const s=this.$inputs[i];s.value="",s.disabled=i!==e.length}if(e.length<this.length){const i=this.$inputs[e.length];i.disabled=!1,i.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e.length+1}))}else this.$inputs[this.$focus]?.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.emit()}handleKeyNavigation(t,e){if(!(this.$focus===void 0||!this.$inputs))switch(t.key){case"Backspace":if(e.value.length===0&&this.$focus>0){t.preventDefault();const i=this.$inputs[this.$focus-1];i.focus(),i.select(),e.disabled=!0}break;case"Delete":if(e.value.length===0){t.preventDefault();const i=this.$inputs[this.$focus+1];i&&(i.focus(),i.setSelectionRange(0,0))}break;case"ArrowLeft":if(t.preventDefault(),this.$focus>0){const i=this.$inputs[this.$focus-1];i.focus(),i.setSelectionRange(1,1)}break;case"ArrowRight":if(t.preventDefault(),this.$focus<this.length-1){const i=this.$inputs[this.$focus+1];i.disabled||(i.focus(),i.setSelectionRange(0,0))}break;case"Home":t.preventDefault(),this.$inputs[0]?.focus();break;case"End":t.preventDefault();for(let i=this.length-1;i>=0;i--){const s=this.$inputs[i];if(!s.disabled){s.focus();break}}break}}handleInput(t,e){if(!this.$inputs)return;const i=t.target;if(this.pattern&&i.value&&!new RegExp(`[${this.pattern}]`).test(i.value)){i.value="",this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}if(i.value.length===1)if(e<this.length-1){const s=this.$inputs[e+1];s.disabled=!1,s.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e+2}))}else i.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.updatePinValue(),this.emit()}updatePinValue(){if(!this.$inputs)return;let t="";this.$inputs.forEach(e=>{t+=e.value}),this.$pin=t}emitComplete(){this.dispatchEvent(new CustomEvent("uk-input-pin:complete",{detail:{value:this.$value},bubbles:!0,composed:!0}))}announceToScreenReader(t){if(!t)return;const e=this.renderRoot.querySelector('[role="status"]');e&&(e.textContent=t,setTimeout(()=>{e.textContent=""},1e3))}get groupLabel(){return this.getI18nText("label",this.defaultI18n)}get groupDescription(){return this.getI18nText("description",this.defaultI18n,{length:this.length})}getFieldLabel(t){return this.getI18nText("field-label",this.defaultI18n,{n:t+1,total:this.length})}renderInput(t){const e=this.getFieldLabel(t);return c.html`
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
    `}render(){return c.html`
      <div
        data-host-inner
        class=${this.$cls["host-inner"]}
        style=${this.$stl["host-inner"]}
        role="group"
        aria-labelledby="${this.groupId}-label ${this.groupId}-desc"
      >
        <span
          id="${this.groupId}-label"
          class="${this.$cls.label}"
          style=${this.$stl.label}
        >
          ${this.groupLabel}
        </span>

        <span
          id="${this.groupId}-desc"
          class="${this.$cls.description}"
          style=${this.$stl.description}
        >
          ${this.groupDescription}
        </span>

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
    `}},D([u({type:Boolean})],o.InputPin.prototype,"autofocus",2),D([u({type:Number})],o.InputPin.prototype,"length",2),D([u({type:String,attribute:"input-mode"})],o.InputPin.prototype,"input-mode",2),D([u({type:String})],o.InputPin.prototype,"pattern",2),D([m()],o.InputPin.prototype,"$cls",2),D([m()],o.InputPin.prototype,"$stl",2),D([m()],o.InputPin.prototype,"$focus",2),D([m()],o.InputPin.prototype,"$pin",2),o.InputPin=D([_("uk-input-pin")],o.InputPin);var ze=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,E=(r,t,e,i)=>{for(var s=i>1?void 0:i?Be(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ze(t,e,s),s};o.InputRange=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-range:input",this.multiple=!1,this.min=0,this.max=100,this.step=1,this.label=!1,this["label-position"]="top",this["aria-label"]="",this._lowValue=this.min,this._highValue=this.max,this._label=!1,this.activeKnob=null,this.trackElement=null,this.isDragging=!1,this.defaultI18n={"aria-value-text":"Value: {value}","aria-range-text":"Range from {low} to {high}","low-knob-label":"Minimum value","high-knob-label":"Maximum value","aria-label":"Range slider"},this.$cls={"host-inner":"uk-input-range",runnable:"",fill:"",knob:"","knob-low":"","knob-high":"","knob-dragging":"",label:"","label-top":"","label-bottom":""},this.$stl={"host-inner":"",runnable:"",fill:"",knob:"","knob-low":"","knob-high":"",label:"","label-top":"","label-bottom":""},this.preventScrolling=t=>{this.isDragging&&t.preventDefault()},this.onPointerStart=(t,e)=>{this.disabled||(t.preventDefault(),t.stopPropagation(),this.activeKnob=e,this.isDragging=!0,t.currentTarget.focus(),document.addEventListener("pointermove",this.onPointerMove,{passive:!1}),document.addEventListener("pointerup",this.onPointerEnd),document.addEventListener("pointercancel",this.onPointerEnd),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onPointerEnd),document.addEventListener("touchcancel",this.onPointerEnd))},this.onPointerMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.clientX);this.handleValueChange(this.activeKnob,e)},this.onTouchMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.touches[0].clientX);this.handleValueChange(this.activeKnob,e)},this.onPointerEnd=()=>{this.isDragging=!1,this.activeKnob=null,this.cleanupEventListeners()},this.onKeyDown=(t,e)=>{if(this.disabled)return;const i=e==="low"?this._lowValue:this._highValue;let s=0;switch(t.key){case"ArrowRight":case"ArrowUp":s=this.step;break;case"ArrowLeft":case"ArrowDown":s=-this.step;break;case"Home":this.handleValueChange(e,e==="low"?this.min:this._lowValue),t.preventDefault();return;case"End":this.handleValueChange(e,e==="high"?this.max:this._highValue),t.preventDefault();return;case"PageUp":s=this.step*10;break;case"PageDown":s=-this.step*10;break;default:return}s&&(t.preventDefault(),this.handleValueChange(e,i+s))}}get $text(){return""}get $value(){return this.multiple?this.value.split(",").map(t=>t.trim()):this.value}get precision(){const t=this.step.toString();return t.includes(".")?t.split(".")[1].length:0}connectedCallback(){super.connectedCallback();const t=this.getAttribute("label");this._label=t===""?!0:t||!1,this.addEventListener("touchstart",this.preventScrolling,{passive:!1})}disconnectedCallback(){this.removeEventListener("touchstart",this.preventScrolling),this.cleanupEventListeners(),super.disconnectedCallback?.()}updated(t){(t.has("value")||t.has("multiple"))&&this.parseValue()}initializeValue(){this.value?this.parseValue():(this._lowValue=this.min,this._highValue=this.max,this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue))}parseValue(){if(this.multiple){const[t,e]=this.value.split(",").map(i=>parseFloat(i));t!==void 0&&e!==void 0&&(this._lowValue=this.clamp(t),this._highValue=this.clamp(e))}else this._lowValue=this.clamp(parseFloat(this.value))}formatValue(t){return t.toFixed(this.precision)}clamp(t){const e=Math.min(Math.max(t,this.min),this.max);return parseFloat(e.toFixed(this.precision))}valueToPercent(t){return(t-this.min)/(this.max-this.min)*100}positionToValue(t){this.trackElement||(this.trackElement=this.querySelector("[data-range-track]"));const e=this.trackElement.getBoundingClientRect(),i=Math.max(0,Math.min(1,(t-e.left)/e.width));return this.min+i*(this.max-this.min)}updateValue(){this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue),this.emit()}handleValueChange(t,e){const i=Math.round(e/this.step)*this.step,s=parseFloat(i.toFixed(this.precision));e=this.clamp(s),t==="low"?this._lowValue=this.multiple?Math.min(e,this._highValue):e:this._highValue=Math.max(e,this._lowValue),this.updateValue(),this.requestUpdate()}cleanupEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerEnd),document.removeEventListener("pointercancel",this.onPointerEnd),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onPointerEnd),document.removeEventListener("touchcancel",this.onPointerEnd)}getAriaValueText(t){return this.multiple?this.getI18nText("aria-range-text",this.defaultI18n,{low:this.formatValue(this._lowValue),high:this.formatValue(this._highValue)}):this.getI18nText("aria-value-text",this.defaultI18n,{value:this.formatValue(t)})}getKnobAriaLabel(t){const e=t==="low"?"low-knob-label":"high-knob-label";return this.getI18nText(e,this.defaultI18n)}renderKnob(t){const e=t==="low"?this._lowValue:this._highValue,i=this.valueToPercent(e),s=t==="low"?this.min:this._lowValue,n=t==="low"?this.multiple?this._highValue:this.max:this.max,a=this.isDragging&&this.activeKnob===t,h=[this.$cls.knob||"uk-input-range-knob",this.$cls[t==="low"?"knob-low":"knob-high"]||"",a&&this.$cls["knob-dragging"]||""].filter(Boolean).join(" "),l=this["label-position"]==="top"?this.$cls["label-top"]||"uk-input-range-label-top":this.$cls["label-bottom"]||"uk-input-range-label-bottom";return c.html`
      <button
        type="button"
        class="${h}"
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
        data-dragging="${a}"
        @pointerdown=${d=>this.onPointerStart(d,t)}
        @touchstart=${d=>this.onPointerStart(d,t)}
        @keydown=${d=>this.onKeyDown(d,t)}
      >
        ${this._label?c.html`
              <span
                class="${this.$cls.label||"uk-input-range-label"} ${l}"
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
    `}},E([u({type:Boolean})],o.InputRange.prototype,"multiple",2),E([u({type:Number})],o.InputRange.prototype,"min",2),E([u({type:Number})],o.InputRange.prototype,"max",2),E([u({type:Number})],o.InputRange.prototype,"step",2),E([u({type:String})],o.InputRange.prototype,"label",2),E([u({type:String})],o.InputRange.prototype,"label-position",2),E([u({type:String})],o.InputRange.prototype,"aria-label",2),E([m()],o.InputRange.prototype,"$cls",2),E([m()],o.InputRange.prototype,"$stl",2),o.InputRange=E([_("uk-input-range")],o.InputRange);function qe(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ut={exports:{}},Ke=ut.exports,Gt;function Ye(){return Gt||(Gt=1,(function(r,t){(function(e,i,s){r.exports=s(),r.exports.default=s()})("slugify",Ke,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(n,a){if(typeof n!="string")throw new Error("slugify: string argument expected");a=typeof a=="string"?{replacement:a}:a||{};var h=i[a.locale]||{},l=a.replacement===void 0?"-":a.replacement,d=a.trim===void 0?!0:a.trim,$=n.normalize().split("").reduce(function(p,f){var g=h[f];return g===void 0&&(g=e[f]),g===void 0&&(g=f),g===l&&(g=" "),p+g.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return a.strict&&($=$.replace(/[^A-Za-z0-9\s]/g,"")),d&&($=$.trim()),$=$.replace(/\s+/g,l),a.lower&&($=$.toLowerCase()),$}return s.extend=function(n){Object.assign(e,n)},s})})(ut)),ut.exports}var Fe=Ye();const Zt=qe(Fe);var Je=Object.defineProperty,We=Object.getOwnPropertyDescriptor,w=(r,t,e,i)=>{for(var s=i>1?void 0:i?We(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Je(t,e,s),s};o.InputTag=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="wrapper",this["stl-default-element"]="wrapper",this["input-event"]="uk-input-tag:input",this.maxlength=20,this.minlength=1,this.slugify=!1,this["slugify-options"]="",this.delimiters=",",this["allow-duplicates"]=!1,this["max-tags"]=0,this.$input="",this.$slugOptions={lower:!0,strict:!0},this.$tags=[],this.$error="",this.defaultI18n={placeholder:"Add a tag...","remove-label":"Remove tag","edit-label":"Edit tag","tag-list-label":"Tags","min-length-error":"Tag must be at least {min} characters","max-length-error":"Tag cannot exceed {max} characters","duplicate-error":"Tag already exists","max-tags-error":"Maximum {max} tags allowed","input-label":"Tag input"},this.$cls={"host-inner":"",wrapper:"uk-input-tag","tag-list":"uk-input-tag-list",tag:"uk-tag uk-tag-secondary","tag-text":"","tag-remove":"",input:"",error:"sr-only"},this.$stl={"host-inner":"",wrapper:"","tag-list":"",tag:"","tag-text":"","tag-remove":"",input:"",error:""}}get $value(){return this.$tags}get $text(){return""}get delimiterChars(){return this.delimiters.split("")}initializeValue(){this.initializeTags(),this.initializeSlugOptions()}initializeTags(){this.$tags=this.value===""?[]:this.value.split(",")}initializeSlugOptions(){if(!this["slugify-options"])return;const t=ot(this["slugify-options"]);t.replacement&&(this.$slugOptions.replacement=t.replacement),t.remove&&(this.$slugOptions.remove=new RegExp(t.remove,"g")),t.lower&&(this.$slugOptions.lower=t.lower==="true"),t.strict&&(this.$slugOptions.strict=t.strict==="true"),t.locale&&(this.$slugOptions.locale=t.locale),t.trim&&(this.$slugOptions.trim=t.trim==="true")}validateTag(t){return this.$error="",t.length<this.minlength?(this.$error=this.getI18nText("min-length-error",this.defaultI18n,{min:String(this.minlength)}),!1):t.length>this.maxlength?(this.$error=this.getI18nText("max-length-error",this.defaultI18n,{max:String(this.maxlength)}),!1):!this["allow-duplicates"]&&this.$tags.includes(t)?(this.$error=this.getI18nText("duplicate-error",this.defaultI18n),!1):this["max-tags"]>0&&this.$tags.length>=this["max-tags"]?(this.$error=this.getI18nText("max-tags-error",this.defaultI18n,{max:String(this["max-tags"])}),!1):!0}addTag(){if(!this.$input.trim())return;let t=this.$input.trim();this.slugify&&(t=Zt(t,this.$slugOptions)),this.validateTag(t)&&(this.$tags=[...this.$tags,t],this.$input="",this.$error="",this.emit(),this.requestUpdate())}removeTag(t){this.disabled||(this.$tags=this.$tags.filter((e,i)=>i!==t),this.$error="",this.emit(),this.requestUpdate())}editTag(t){this.disabled||(this.$input=this.$tags[t],this.removeTag(t),this.updateComplete.then(()=>{this.renderRoot.querySelector("input")?.focus()}))}handleKeydown(t){switch(t.key){case"Backspace":this.$tags.length>0&&this.$input.length===0&&(t.preventDefault(),this.editTag(this.$tags.length-1));break;case"Enter":t.preventDefault(),this.addTag();break;case"Escape":this.$input&&(t.preventDefault(),this.$input="",this.$error="",this.requestUpdate());break;default:this.delimiterChars.includes(t.key)&&(t.preventDefault(),this.addTag());break}}handleInput(t){const e=t.target;this.$input=e.value,this.$error=""}handlePaste(t){const e=t.clipboardData?.getData("text");if(!e)return;if(this.delimiterChars.some(s=>e.includes(s))){t.preventDefault();const s=new RegExp(`[${this.delimiterChars.join("")}]`);e.split(s).map(a=>a.trim()).filter(a=>a.length>0).forEach(a=>{this.slugify&&(a=Zt(a,this.$slugOptions)),this.validateTag(a)&&(this.$tags=[...this.$tags,a])}),this.$input="",this.emit(),this.requestUpdate()}}renderTag(t,e){const i=this.getI18nText("remove-label",this.defaultI18n),s=this.getI18nText("edit-label",this.defaultI18n);return c.html`
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
    `}},w([u({type:Number})],o.InputTag.prototype,"maxlength",2),w([u({type:Number})],o.InputTag.prototype,"minlength",2),w([u({type:Boolean})],o.InputTag.prototype,"slugify",2),w([u({type:String})],o.InputTag.prototype,"slugify-options",2),w([u({type:String})],o.InputTag.prototype,"delimiters",2),w([u({type:Boolean})],o.InputTag.prototype,"allow-duplicates",2),w([u({type:Number})],o.InputTag.prototype,"max-tags",2),w([m()],o.InputTag.prototype,"$input",2),w([m()],o.InputTag.prototype,"$slugOptions",2),w([m()],o.InputTag.prototype,"$tags",2),w([m()],o.InputTag.prototype,"$error",2),w([m()],o.InputTag.prototype,"$cls",2),w([m()],o.InputTag.prototype,"$stl",2),o.InputTag=w([_("uk-input-tag")],o.InputTag);var Ge=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,C=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ze(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ge(t,e,s),s};o.InputTime=class extends N(v){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="uk-input-time:input",this.autofocus=!1,this.now=!1,this.clock="12h",this.min="",this.max="",this.$min=0,this.$meridiem="am",this.defaultI18n={am:"AM",pm:"PM","hour-label":"Hour","minute-label":"Minute","meridiem-label":"AM/PM","time-label":"Time","hour-placeholder":"HH","minute-placeholder":"MM","invalid-time":"Invalid time format"},this.$cls={container:"uk-input-time",input:"uk-input","hour-input":"","minute-input":"",separator:"","meridiem-button":"uk-input-fake",button:""},this.$stl={container:"",input:"","hour-input":"","minute-input":"",separator:"","meridiem-button":"",button:""}}get $HH(){return this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"00"}get $MM(){return this.$min>=0?this.$min.toString().padStart(2,"0"):"00"}get $value(){if(this.$hour===void 0||this.$hour===null)return"";let t=this.$hour;return this.clock==="12h"&&(this.$meridiem==="pm"?t=this.$hour===12?12:this.$hour+12:t=this.$hour===12?0:this.$hour),`${t.toString().padStart(2,"0")}:${this.$min.toString().padStart(2,"0")}`}get $text(){return""}initializeValue(){this.value?this.parseTimeValue():this.now&&this.setCurrentTime()}updated(t){["$hour","$min","$meridiem"].some(e=>t.has(e))&&this.emit()}parseTimeValue(){try{const t=Ee(this.value),[e,i]=t.split(":").map(Number);this.clock==="12h"?this.$hour=e%12||12:this.$hour=e,this.$min=i,this.$meridiem=e<12?"am":"pm"}catch(t){console.error(this.getI18nText("invalid-time",this.defaultI18n),t)}}setCurrentTime(){const t=new Date;this.clock==="12h"?this.$hour=t.getHours()%12||12:this.$hour=t.getHours(),this.$min=t.getMinutes(),this.$meridiem=t.getHours()<12?"am":"pm"}isTimeValid(){const t=this.$value;return t?!(this.min&&t<this.min||this.max&&t>this.max):!0}handleInput(t,e){const i=t.target,s=i.value.replace(/[^0-9]/g,"").substring(0,2),n=parseInt(s);switch(e){case"$hour":this.clock==="12h"?this.$hour=n<=12?n:12:this.$hour=n<=23?n:23;break;case"$min":this.$min=n<=59?n:59;break}i.value=s}handleBlur(t,e){const i=t.target,s=parseInt(i.value);switch(e){case"$hour":if(i.value===""){this.required?i.value=this.$HH:this.$hour=void 0;return}this.clock==="12h"&&s>12?(this.$hour=12,i.value="12"):this.clock==="12h"&&s===0?(this.$hour=12,i.value="12"):this.clock==="24h"&&s>23?(this.$hour=23,i.value="23"):i.value=this.$HH;break;case"$min":s>59&&(this.$min=59),i.value=this.$MM;break}}handleKeydown(t,e){const i=t.target;if((e==="$hour"?this.$hour:this.$min)===void 0&&e==="$hour")return;let n=0,a=!1;switch(t.key){case"ArrowUp":n=1,a=!0;break;case"ArrowDown":n=-1,a=!0;break;case"PageUp":n=e==="$hour"?1:15,a=!0;break;case"PageDown":n=e==="$hour"?-1:-15,a=!0;break}if(a&&n!==0)if(t.preventDefault(),e==="$hour"){const h=this.clock==="12h"?12:23,l=this.clock==="12h"?1:0;let d=(this.$hour||0)+n;d>h&&(d=l),d<l&&(d=h),this.$hour=d,i.value=d.toString().padStart(2,"0")}else{let h=this.$min+n;h>59&&(h=0),h<0&&(h=59),this.$min=h,i.value=h.toString().padStart(2,"0")}}toggleMeridiem(){this.$meridiem=this.$meridiem==="am"?"pm":"am"}handleMeridiemKeydown(t){(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key===" ")&&(t.preventDefault(),this.toggleMeridiem())}renderInput(t){const{min:e,max:i,state:s,key:n}=t,a=s==="$hour",h=a?this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"":this.$hour===void 0?"":this.$min>=0?this.$min.toString().padStart(2,"0"):"00",l=this.getI18nText(a?"hour-label":"minute-label",this.defaultI18n),d=this.getI18nText(a?"hour-placeholder":"minute-placeholder",this.defaultI18n),$=a?this.$cls["hour-input"]||this.$cls.input||"":this.$cls["minute-input"]||this.$cls.input||"",p=a?this.$stl["hour-input"]||this.$stl.input||"":this.$stl["minute-input"]||this.$stl.input||"";return c.html`
      <input
        class="${$}"
        style="${p}"
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
        placeholder="${d}"
        maxlength="2"
        value="${h}"
        .autofocus="${a&&this.autofocus}"
        ?disabled="${this.disabled||!a&&this.$hour===void 0}"
        @keydown="${f=>this.handleKeydown(f,s)}"
        @input="${f=>this.handleInput(f,s)}"
        @blur="${f=>this.handleBlur(f,s)}"
      />
    `}render(){const t=this.getI18nText("time-label",this.defaultI18n),e=this.getI18nText("meridiem-label",this.defaultI18n);let i=c.html``;if(this.clock==="12h"){const s=this.getI18nText("am",this.defaultI18n),n=this.getI18nText("pm",this.defaultI18n),a=this.$meridiem==="am"?s:n;i=c.html`
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
          @click="${h=>{h.preventDefault(),this.toggleMeridiem()}}"
          @keydown="${this.handleMeridiemKeydown}"
        >
          ${a}
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
    `}},C([u({type:Boolean})],o.InputTime.prototype,"autofocus",2),C([u({type:Boolean})],o.InputTime.prototype,"now",2),C([u({type:String})],o.InputTime.prototype,"clock",2),C([u({type:String})],o.InputTime.prototype,"min",2),C([u({type:String})],o.InputTime.prototype,"max",2),C([m()],o.InputTime.prototype,"$hour",2),C([m()],o.InputTime.prototype,"$min",2),C([m()],o.InputTime.prototype,"$meridiem",2),C([m()],o.InputTime.prototype,"$cls",2),C([m()],o.InputTime.prototype,"$stl",2),o.InputTime=C([_("uk-input-time")],o.InputTime);var Xe=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,I=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qe(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Xe(t,e,s),s};o.Icon=class extends v{constructor(){super(...arguments),this["cls-default-element"]="svg",this["stl-default-element"]="svg",this.icon="",this.label="",this.decorative=!1,this.role="",this["stroke-width"]="2",this.height="16",this.width="16",this.color="",this.fill="none",this.defaultI18n={label:""}}get key(){return this.icon.trim().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}getEffectiveLabel(){return this.getI18nText("label",this.defaultI18n)||this.label}updated(t){(["icon","stroke-width","height","width","size","color","fill","label","decorative","role","$cls","$stl"].some(i=>t.has(i))||t.has("$i18n"))&&this.updateComplete.then(()=>{this.regenerateSvg()})}regenerateSvg(){this.$svg=this.createSvg({icon:this.key,cls:this.$cls.svg||"",stl:this.$stl.svg||"",height:this.size||this.height,width:this.size||this.width,strokeWidth:this["stroke-width"],color:this.color,fill:this.fill,label:this.getEffectiveLabel(),decorative:this.decorative,role:this.role})}createSvg(t){const{icon:e,cls:i,stl:s,height:n,width:a,strokeWidth:h,color:l,fill:d,label:$,decorative:p,role:f}=t;try{const g=ie[e];if(!g){console.warn(`uk-icon: Icon "${this.icon}" not found in Lucide icons.`);return}const b=Tt.createElement(g);if(i&&b.setAttribute("class",i),s&&b.setAttribute("style",s),b.setAttribute("height",n),b.setAttribute("width",a),b.setAttribute("stroke-width",h),d!=="none"&&b.setAttribute("fill",d),l){const k=b.getAttribute("style")||"";b.setAttribute("style",`${k}; color: ${l};`)}return p?(b.setAttribute("aria-hidden","true"),b.removeAttribute("role"),b.removeAttribute("aria-label")):$?(b.setAttribute("role",f||"img"),b.setAttribute("aria-label",$),b.removeAttribute("aria-hidden")):f&&(b.setAttribute("role",f),b.removeAttribute("aria-hidden")),b.setAttribute("data-icon",this.icon),b.setAttribute("data-lucide",this.icon),b}catch(g){console.warn(`uk-icon: Failed to create icon "${this.icon}":`,g);return}}render(){return this.renderRoot.children.length===0?this.$svg:c.nothing}},I([u({type:String})],o.Icon.prototype,"icon",2),I([u({type:String})],o.Icon.prototype,"label",2),I([u({type:Boolean})],o.Icon.prototype,"decorative",2),I([u({type:String})],o.Icon.prototype,"role",2),I([u({type:String})],o.Icon.prototype,"stroke-width",2),I([u({type:String})],o.Icon.prototype,"height",2),I([u({type:String})],o.Icon.prototype,"width",2),I([u({type:String})],o.Icon.prototype,"size",2),I([u({type:String})],o.Icon.prototype,"color",2),I([u({type:String})],o.Icon.prototype,"fill",2),I([m()],o.Icon.prototype,"$svg",2),o.Icon=I([_("uk-icon")],o.Icon);var ti=Object.defineProperty,ei=Object.getOwnPropertyDescriptor,V=(r,t,e,i)=>{for(var s=i>1?void 0:i?ei(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ti(t,e,s),s};o.Chart=class extends v{constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this.defaultI18n={"chart-label":"Chart","loading-message":"Loading chart...","error-message":"Failed to load chart. Please try again.","no-data-message":"No data available"},this.loading=!1,this.width="100%",this.height="auto",this.hasError=!1,this.$cls={"host-inner":"",chart:"uk-chart",loading:"sr-only",error:"sr-only"},this.$stl={"host-inner":"",chart:"",loading:"",error:""},this.apexCharts=null}get $apexChartsConfig(){return"apexCharts"in this.$config&&typeof this.$config=="object"?this.$config.apexCharts:{}}hasValidConfig(){return Object.keys(this.$apexChartsConfig).length>0}firstUpdated(t){super.firstUpdated(t),this.loading||this.initializeApexCharts()}updated(t){super.updated(t),t.has("loading")&&!this.loading&&!this.apexCharts&&this.initializeApexCharts()}disconnectedCallback(){super.disconnectedCallback(),this.apexCharts&&(this.apexCharts.destroy(),this.apexCharts=null)}onConfigChanged(){if(this.apexCharts&&this.hasValidConfig())try{this.apexCharts.updateOptions(this.$apexChartsConfig,!0,!0),this.hasError=!1}catch(t){console.error("uk-chart: Failed to update chart:",t),this.hasError=!0}else!this.apexCharts&&this.hasValidConfig()&&this.initializeApexCharts()}async initializeApexCharts(){const t=this.renderRoot.querySelector("[data-chart-container]");if(!t){console.warn("uk-chart: Chart container not found in render root");return}if(!this.hasValidConfig()){console.warn("uk-chart: No valid chart configuration found"),this.hasError=!0;return}if(this.apexCharts===null)try{const e={...this.$apexChartsConfig,chart:{...this.$apexChartsConfig.chart,width:this.width,height:this.height}};this.apexCharts=new te(t,e),await this.apexCharts.render(),this.isRendered=!0,this.hasError=!1}catch(e){console.error("uk-chart: Failed to initialize chart:",e),this.hasError=!0}}renderLoading(){const t=this.getI18nText("loading-message",this.defaultI18n);return c.html`
      <div
        class="${this.$cls.loading}"
        style="${this.$stl.loading}"
        role="status"
        aria-live="polite"
        aria-label="${t}"
      >
        <span>${t}</span>
      </div>
    `}renderError(){const t=this.hasValidConfig()?this.getI18nText("error-message",this.defaultI18n):this.getI18nText("no-data-message",this.defaultI18n);return c.html`
      <div
        class="${this.$cls.error}"
        style="${this.$stl.error}"
        role="alert"
        aria-live="assertive"
      >
        <span>${t}</span>
      </div>
    `}render(){const t=this.getI18nText("chart-label",this.defaultI18n);return c.html`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]}"
        style="${this.$stl["host-inner"]}"
        role="img"
        aria-label="${t}"
        data-loading="${this.loading}"
        data-error="${this.hasError}"
        data-rendered="${this.isRendered}"
      >
        ${this.loading?this.renderLoading():this.hasError?this.renderError():c.html`
                <div
                  data-chart-container
                  class="${this.$cls.chart}"
                  style="${this.$stl.chart}"
                ></div>
              `}
      </div>
    `}async updateChart(t,e=!0,i=!0){if(this.apexCharts)try{await this.apexCharts.updateOptions(t,e,i),this.hasError=!1}catch(s){throw console.error("uk-chart: Failed to update chart:",s),this.hasError=!0,s}else throw new Error("Chart not initialized")}async updateSeries(t,e=!0){if(this.apexCharts)try{await this.apexCharts.updateSeries(t,e),this.hasError=!1}catch(i){throw console.error("uk-chart: Failed to update series:",i),this.hasError=!0,i}else throw new Error("Chart not initialized")}getChartInstance(){return this.apexCharts}},V([u({type:Boolean})],o.Chart.prototype,"loading",2),V([u({type:String})],o.Chart.prototype,"width",2),V([u({type:String})],o.Chart.prototype,"height",2),V([m()],o.Chart.prototype,"hasError",2),V([m()],o.Chart.prototype,"$cls",2),V([m()],o.Chart.prototype,"$stl",2),o.Chart=V([_("uk-chart")],o.Chart);var ii=Object.defineProperty,It=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&ii(t,e,s),s};const Xt=r=>{class t extends r{constructor(){super(...arguments),this.$term="",this.$focused=-1,this.$open=!1,this.selected=null,this.HTMLRectParent=null,this.HTMLRectActive=null}get options(){const i={};return Object.entries(this.$data).forEach(([s,n])=>{const a=n.options.filter(h=>h.data.keywords?.some(l=>l.toLowerCase().includes(this.$term.toLowerCase())));a.length>0&&(i[s]={text:n.text,options:a,...n.data&&{data:n.data}})}),i}get count(){let i=0;for(const s in this.options){const n=this.options[s].options.length;i+=n}return i-1}updated(i){if(super.updated(i),i.has("$term")&&i.get("$term")!==void 0&&(this.dispatchEvent(new CustomEvent(this["search-event"],{detail:{value:this.$term},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{this.$focused=-1})),i.has("$focused")&&this.HTMLRectParent){this.HTMLRectParent.querySelector('[role="option"][aria-selected="true"]')?.removeAttribute("aria-selected");const s=Array.from(this.HTMLRectParent.querySelectorAll('[role="option"]'));this.HTMLRectActive=s[this.$focused],this.HTMLRectActive&&(this.HTMLRectActive.setAttribute("aria-selected","true"),this.focusActiveOption())}}navigate(i){switch(i){case"t":this.$focused<=0?this.$focused=this.count:this.$focused--;break;case"d":this.$focused<this.count?this.$focused++:this.$focused=0;break}}focusActiveOption(i="smooth"){if(this.HTMLRectParent&&this.HTMLRectActive){const s={parent:this.HTMLRectParent.getBoundingClientRect(),active:this.HTMLRectActive.getBoundingClientRect()};this.HTMLRectParent.scrollTo({top:this.HTMLRectActive.offsetTop-this.HTMLRectParent.offsetTop-s.parent.height/2+s.active.height/2,behavior:i})}}onKeydown(i){if(this.$open===!0)switch(i.key){case"ArrowDown":i.preventDefault(),this.navigate("d");break;case"ArrowUp":i.preventDefault(),this.navigate("t");break;case"Enter":if(i.preventDefault(),this.$focused===-1)return;this.onKeydownEnter();break;case"Home":i.preventDefault(),this.$focused=0;break;case"End":i.preventDefault(),this.$focused=this.count;break}}renderList(){const i=this._cls();return c.html`
        <ul
          class="${i.list}"
          style="${this.$stl.list}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText("list-label",this.defaultI18n)}"
          @keydown="${this.onKeydown}"
        >
          ${R(Object.keys(this.options),s=>c.html`
              ${this.renderListHeader(s)}
              ${R(this.options[s].options,(n,a)=>this.renderListItem(s,n,a))}
            `)}
        </ul>
      `}renderListHeader(i){const s=this._cls();return i!=="__"?c.html`<li
            class="${s["item-header"]}"
            style="${this.$cls["item-header"]}"
            role="presentation"
          >
            ${i}
          </li>`:""}onDropClose(){this.$focused=-1,this.$term=""}$icons(i){const s=super.$icons(i);if(s)return s;switch(i){case"search":return c.html`
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
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
          `;case"check":return c.html`
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
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          `;case"chevrons-up-down":return c.html`
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
            >
              <path d="m7 15 5 5 5-5" />
              <path d="m7 9 5-5 5 5" />
            </svg>
          `}}}return It([m()],t.prototype,"$term"),It([m()],t.prototype,"$focused"),It([m()],t.prototype,"$open"),t};function Qt(r){return r?r.toLowerCase().split(" ").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "):""}var si=Object.defineProperty,ni=Object.getOwnPropertyDescriptor,K=(r,t,e,i)=>{for(var s=i>1?void 0:i?ni(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&si(t,e,s),s};o.Command=class extends Xt(v){constructor(){super(...arguments),this["cls-default-element"]="modal",this["stl-default-element"]="modal",this["search-event"]="uk-command:search",this["input-event"]="uk-command:click",this.modifier="ctrl",this.toggle="",this.$cls={modal:"uk-modal uk-flex-top",dialog:"uk-modal-dialog uk-margin-auto-vertical",header:"uk-cmd-header","header-icon":"uk-cmd-header-icon","header-input":"uk-cmd-header-input","header-esc":"uk-cmd-header-esc",list:"uk-overflow-auto uk-nav uk-nav-alt uk-nav-primary uk-nav-cmd uk-cmd-body",item:"","item-header":"uk-nav-header","item-link":"","item-wrapper":"uk-cmd-item-wrapper","item-icon":"uk-cmd-item-icon","item-text":"uk-cmd-item-text","item-key":"uk-cmd-item-key","item-subtitle":"uk-nav-subtitle","escape-button":"uk-button uk-button-default uk-button-small"},this.$stl={modal:"",dialog:"",header:"","header-icon":"","header-input":"","header-esc":"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-key":"","item-subtitle":"","escape-button":"uk-button uk-button-default uk-button-small"},this.defaultI18n={placeholder:"Search commands...","search-label":"Search","list-label":"Commands","close-label":"Close","modal-label":"Command palette","escape-button-label":"Esc"},this.HTMLModal=null,this.handleGlobalKeydown=t=>{this.getModifierPressed(t)&&t.key===this.key&&(t.preventDefault(),this.HTMLModal&&window.UIkit.modal(this.HTMLModal).toggle())},this.onInputKeydown=t=>{this.$open&&(this.onKeydown(t),Object.values(this.options).forEach(e=>{e.options.forEach(i=>{if(i.data?.key&&this.getModifierPressed(t,i.data?.modifier||"ctrl")&&t.key.toLowerCase()===i.data.key.toLowerCase()){t.preventDefault(),t.stopPropagation(),this.select(i);return}})}))}}get $value(){return""}get $text(){return""}connectedCallback(){super.connectedCallback(),this.key!==void 0&&document.addEventListener("keydown",this.handleGlobalKeydown)}disconnectedCallback(){super.disconnectedCallback(),this.key!==void 0&&document.removeEventListener("keydown",this.handleGlobalKeydown)}firstUpdated(t){super.firstUpdated?.(t),this.HTMLModal=this.renderRoot.querySelector(".uk-modal"),this.HTMLModal&&(this.HTMLRectParent=this.renderRoot.querySelector("ul"),window.UIkit.util.on(this.HTMLModal,"shown",()=>{this.$open=!0,this.focusSearchInput()}),window.UIkit.util.on(this.HTMLModal,"hidden",()=>{this.$open=!1,this.$focused=-1,this.$term=""})),this.isRendered=!0}initializeValue(){}focusSearchInput(){const t=this.renderRoot.querySelector('input[type="text"]');t&&t.focus()}_cls(t){return{button:"",icon:"",list:this.$cls.list,item:t?.item.disabled===!0?"uk-disabled":this.$cls.item,"item-header":this.$cls["item-header"],"item-link":t?.item.disabled===!1?"uk-modal-close":this.$cls["item-link"],"item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":"",search:"","search-input":"","search-icon":"","item-key":this.$cls["item-key"],"item-subtitle":this.$cls["item-subtitle"]}}onClick(t){const{item:e}=t;this.select(e)}onKeydownEnter(){const t=this.HTMLRectActive?.dataset;if(t){const e=t.key,i=t.index;this.select(this.options[e].options[i])}}select(t){t.disabled||(this.HTMLModal&&window.UIkit.modal(this.HTMLModal).hide(),this.dispatchEvent(new CustomEvent("uk-command:click",{detail:{value:t},bubbles:!0,composed:!0})))}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.getGlobalIndex(t,i);return c.html`
      <li
        class="${s.item}"
        style="${this.$stl.item}"
        role="option"
        aria-selected="${n===this.$focused?"true":"false"}"
        aria-disabled="${e.disabled?"true":"false"}"
        data-key="${t}"
        data-index="${i}"
      >
        <a
          class="${s["item-link"]}"
          style="${this.$stl["item-link"]}"
          @click="${()=>this.onClick({item:e,index:i})}"
          tabindex="-1"
          ?disabled="${e.disabled}"
          aria-label="${e.text}${e.data?.key?` (${Qt(e.data?.modifier||"ctrl")} + ${e.data.key.toUpperCase()})`:""}"
        >
          <div
            class="${s["item-wrapper"]}"
            style="${this.$stl["item-wrapper"]}"
          >
            ${e.data.icon?c.html`
                  <span
                    class="${s["item-icon"]}"
                    style="${this.$stl["item-icon"]}"
                  >
                    ${this.$icons(e.data.icon)||c.nothing}
                  </span>
                `:c.nothing}
            <span class="${s["item-text"]}" style="${this.$stl["item-text"]}">
              ${e.text}
            </span>
            ${e.data.key?c.html`
                  <span
                    class="${s["item-key"]}"
                    style="${this.$stl["item-key"]}"
                  >
                    ${Qt(e.data?.modifier)||"Ctrl"} +
                    ${e.data.key.toUpperCase()}
                  </span>
                `:""}
          </div>
        </a>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}getModifierPressed(t,e){switch((e||this.modifier).toLowerCase()){case"ctrl":return t.ctrlKey;case"alt":return t.altKey;case"shift":return t.shiftKey;case"meta":return t.metaKey;default:return t.ctrlKey}}renderSearch(){return c.html`
      <div class="${this.$cls.header}" style="${this.$stl.header}">
        <div
          class="${this.$cls["header-icon"]}"
          style="${this.$stl["header-icon"]}"
          aria-hidden="true"
        >
          ${this.$icons("search")}
        </div>
        <div
          class="${this.$cls["header-input"]}"
          style="${this.$stl["header-input"]}"
        >
          <input
            autofocus
            type="text"
            role="searchbox"
            aria-label="${this.getI18nText("search-label",this.defaultI18n)}"
            placeholder="${this.getI18nText("placeholder",this.defaultI18n)}"
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
            class="${this.$cls["escape-button"]} uk-modal-close"
            style="${this.$stl["escape-button"]}"
            aria-label="${this.getI18nText("close-label",this.defaultI18n)}"
          >
            ${this.getI18nText("escape-button-label",this.defaultI18n)}
          </button>
        </div>
      </div>
      ${Object.keys(this.options).length>0?c.html`<hr class="uk-hr" />`:""}
    `}render(){const t=this.toggle||`uk-command-${this.id||Math.random().toString(36).substr(2,9)}`;return c.html`
      <div
        data-host-inner
        class="${this.$cls.modal}"
        style="${this.$stl.modal}"
        id="${t}"
        data-uk-modal
        role="dialog"
        aria-modal="true"
        aria-label="${this.getI18nText("modal-label",this.defaultI18n)}"
      >
        <div
          class="${this.$cls.dialog}"
          style="${this.$stl.dialog}"
          role="document"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
      </div>
    `}},K([u({type:String})],o.Command.prototype,"key",2),K([u({type:String})],o.Command.prototype,"modifier",2),K([u({type:String})],o.Command.prototype,"toggle",2),K([m()],o.Command.prototype,"$cls",2),K([m()],o.Command.prototype,"$stl",2),o.Command=K([_("uk-command")],o.Command);var ri=Object.defineProperty,ai=Object.getOwnPropertyDescriptor,S=(r,t,e,i)=>{for(var s=i>1?void 0:i?ai(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ri(t,e,s),s};o.Select=class extends Xt(N(v)){constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["input-event"]="uk-select:input",this["search-event"]="uk-select:search",this.drop="mode: click; animation: uk-animation-slide-top-small;",this.searchable=!1,this.insertable=!1,this["send-headers"]="",this["send-url"]="",this["send-method"]="POST",this.multiple=!1,this.icon="",this.$selected=[],this.$cls={"host-inner":"uk-position-relative",button:"","button-text":"",icon:"",list:"uk-nav uk-dropdown-nav uk-overflow-auto uk-custom-select-list",item:"","item-active":"uk-active","item-disabled":"uk-disabled","item-header":"uk-nav-header","item-link":"","item-wrapper":"uk-custom-select-item-wrapper","item-icon":"uk-custom-select-item-icon","item-text":"uk-custom-select-item-text","item-check":"","item-subtitle":"",search:"uk-custom-select-search","search-input":"","search-icon":"",dropdown:"uk-select-dropdown",divider:"uk-hr"},this.$stl={"host-inner":"",button:"","button-text":"",icon:"",list:"",item:"","item-active":"uk-active","item-disabled":"uk-disabled","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",dropdown:"",divider:"uk-hr"},this.defaultI18n={"button-label":"Select an option","selection-count":"{n} options selected","search-placeholder":"Search",insert:"Insert","list-label":"Options"},this.HTMLDrop=null,this.onInputKeydown=t=>{if(this.onKeydown(t),this.$open===!0)switch(t.key){case"Tab":!t.altKey&&!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&t.preventDefault();break}}}get $text(){return this.$selected.length===0?this.placeholder!==""?this.placeholder:this.getI18nText("button-label",this.defaultI18n):this.multiple===!1&&this.selected?this.selected.text:this.$selected.length===1&&this.selected?this.selected.text:this.getI18nText("selection-count",this.defaultI18n,{n:this.$selected.length})}get $value(){return this.multiple?this.$selected:this.$selected.length===1?this.$selected[0]:""}get count(){let t=this.insertable&&this.$term!==""&&!this.hasOption(this.$term)?1:0;for(const e in this.options){const i=this.options[e].options.length;t+=i}return t-1}connectedCallback(){super.connectedCallback(),this.insertable&&(this.searchable=!0)}firstUpdated(t){super.firstUpdated?.(t),this.HTMLDrop=this.renderRoot.querySelector(".uk-drop"),this.HTMLDrop&&(this.HTMLRectParent=this.renderRoot.querySelector("ul"),window.UIkit.util.on(this.HTMLDrop,"hidden",()=>{this.$open=!1,this.$focused=-1,this.$term=""}),window.UIkit.util.on(this.HTMLDrop,"shown",()=>{this.$open=!0})),this.updateComplete.then(()=>{if(this.hasAttribute("value"))this.$selected=this.value.split(",").map(e=>e.trim()),this.multiple||(this.$selected=this.$selected.slice(-1)),this.updateSelectedFromValues();else{let e=[];for(const i in this.$data){const s=this.$data[i].options;if(this.multiple)s.forEach(n=>{n.selected&&e.push(n.value)});else{const n=[...s].reverse().find(a=>a.selected);if(n){e=[n.value],this.selected=n;break}}}this.$selected=e,this.multiple&&this.updateSelectedFromValues()}}),this.isRendered=!0}updated(t){super.updated(t),this.isRendered&&t.has("$selected")&&t.get("$selected")!==void 0&&this.emit()}initializeValue(){}select(t){t.disabled||(this.multiple?(this.$selected.findIndex(i=>i===t?.value)===-1?this.$selected=[...this.$selected,t.value]:this.$selected=this.$selected.filter(i=>i!==t.value),this.$selected.length>0&&this.updateSelectedFromValues(),this.requestUpdate()):(this.$selected=[t.value],this.selected=t))}updateSelectedFromValues(){if(this.$selected.length>0){const t=this.$selected[this.$selected.length-1];for(const e in this.$data){const i=this.$data[e].options.find(s=>s.value===t);if(i){this.selected=i;break}}}}onKeydownEnter(){const t=this.HTMLRectActive?.dataset;if(t){const e=t.key,i=t.index;e==="__insert__"?this.insert():this.select(this.options[e].options[i])}}onClick(t){const{item:e}=t;this.select(e)}_cls(t){const e=[this.$cls.item];return t?.item.disabled&&e.push(this.$cls["item-disabled"]),this.$focused===t?.index&&e.push(this.$cls["item-active"]),{button:this.$cls.button,icon:this.$cls.icon,list:this.$cls.list,item:e.join(" "),"item-header":this.$cls["item-header"],"item-link":this.multiple===!1?"uk-drop-close":"","item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":this.$cls["item-check"],"item-subtitle":this.$cls["item-subtitle"],search:this.$cls.search,"search-input":this.$cls["search-input"],"search-icon":this.$cls["search-icon"],dropdown:this.$cls.dropdown}}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.$selected.includes(e.value),a=this.getGlobalIndex(t,i);return c.html`
      <li
        class="${s.item}"
        role="option"
        aria-selected="${a===this.$focused?"true":"false"}"
        aria-disabled="${e.disabled?"true":"false"}"
        data-key="${t}"
        data-index="${i}"
      >
        <a
          class="${s["item-link"]}"
          @click="${()=>this.onClick({item:e,index:i})}"
          tabindex="-1"
          ?disabled="${e.disabled}"
          aria-label="${e.text}"
        >
          <div class="${s["item-wrapper"]}">
            ${e.data.icon?c.html`
                  <span class="${s["item-icon"]}">
                    ${this.$icons(e.data.icon)||c.nothing}
                  </span>
                `:c.nothing}
            ${e.data.description?c.html`
                  <div>
                    <span class="${s["item-text"]}">${e.text}</span>
                    <div class="${s["item-subtitle"]}">
                      ${e.data.description}
                    </div>
                  </div>
                `:c.html`<span class="${s["item-text"]}">${e.text}</span>`}
          </div>
          ${n?c.html`
                <span class="${s["item-check"]}">
                  ${this.$icons("check")||c.nothing}
                </span>
              `:c.nothing}
        </a>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;this.insertable&&this.$term&&!this.hasOption(this.$term)&&i++;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}hasOption(t){return Object.values(this.$data).some(e=>e.options.some(i=>i.value===t))}addOption(t,e){const s=(this.$data[e]?.options||[]).some(n=>n.value===t.value);return s||(this.$data={...this.$data},this.$data[e]===void 0&&(this.$data[e]={text:t.group||"__",options:[]}),this.$data[e].options.push(t)),!s}async send(){function t(e){return typeof e=="object"&&"group"in e&&"value"in e&&"text"in e&&"disabled"in e&&"selected"in e&&"data"in e&&"key"in e.data&&"keywords"in e.data}try{if(!this["send-url"])throw new Error("No send URL provided");const e=this["send-headers"]?JSON.parse(this["send-headers"]):{"Content-Type":"application/json"},i={term:this.$term},s=await fetch(this["send-url"],{method:this["send-method"],headers:e,body:JSON.stringify(i)});if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const n=await s.json();if(t(n))return n;throw new Error("Invalid response format")}catch{return{group:"__",text:this.$term,value:this.$term,data:{gid:"__",keywords:[this.$term]},selected:!0,disabled:!1}}}async insert(){const t=await this.send();this.addOption(t,t.data.gid),this.multiple?this.$selected=[...this.$selected,this.$term]:this.$selected=[this.$term],this.selected=t,this.$term=""}renderSearch(){const t=this._cls();return this.searchable===!0?c.html`
          <div class="${t.search}" role="search">
            <span class="${t["search-icon"]}">
              ${this.$icons("search")||c.nothing}
            </span>
            <input
              class="${t["search-input"]}"
              placeholder="${this.getI18nText("search-placeholder",this.defaultI18n)}"
              type="text"
              role="searchbox"
              aria-label="${this.getI18nText("search-placeholder",this.defaultI18n)}"
              .value="${this.$term}"
              @input="${e=>{const i=e.target;this.$term=i.value}}"
              @keydown="${this.onInputKeydown}"
            />
          </div>
          ${Object.keys(this.options).length>0?c.html`<hr
                class="${this.$cls.divider}"
                style="${this.$stl.divider}"
              />`:""}
        `:""}renderInsertion(){const t=this._cls();return c.html`
      <li class="${t.item}" role="option" data-key="__insert__">
        <button
          type="button"
          class="${t["item-link"]}"
          @click="${e=>{e.preventDefault(),this.insert()}}"
          tabindex="-1"
          aria-label="${this.getI18nText("insert",this.defaultI18n)} ${this.$term}"
        >
          ${this.getI18nText("insert",this.defaultI18n)} ${this.$term}
        </button>
      </li>
    `}renderList(){const t=this._cls();return c.html`
      <ul
        class="${t.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText("list-label",this.defaultI18n)}"
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
        class="${this.$cls["host-inner"]}"
        style="${this.$stl["host-inner"]}"
      >
        <button
          id="${e}"
          class="${t.button}"
          style="${this.$stl.button}"
          type="button"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded="${this.$open}"
          aria-controls="${i}"
          aria-label="${this.getI18nText("button-label",this.defaultI18n)}"
          ?disabled="${this.disabled}"
          @keydown="${this.onKeydown}"
        >
          <span
            class="${t["button-text"]}"
            style="${this.$stl["button-text"]}"
            >${this.$text}</span
          >
          <span class="${t.icon}" style="${this.$stl.icon}">
            ${this.icon?this.$icons(this.icon)||c.nothing:this.$icons("chevrons-up-down")}
          </span>
        </button>

        <div
          id="${i}"
          class="${t.dropdown} uk-drop"
          style="${this.$stl.dropdown}"
          data-uk-dropdown="${this.drop}"
          role="dialog"
          aria-label="${this.getI18nText("button-label",this.defaultI18n)}"
        >
          ${this.renderSearch()} ${this.renderList()}
        </div>
        ${this.renderHidden()}
      </div>
    `}},S([u({type:String})],o.Select.prototype,"drop",2),S([u({type:Boolean})],o.Select.prototype,"searchable",2),S([u({type:Boolean})],o.Select.prototype,"insertable",2),S([u({type:String,attribute:"send-headers"})],o.Select.prototype,"send-headers",2),S([u({type:String,attribute:"send-url"})],o.Select.prototype,"send-url",2),S([u({type:String,attribute:"send-method"})],o.Select.prototype,"send-method",2),S([u({type:Boolean})],o.Select.prototype,"multiple",2),S([u({type:String})],o.Select.prototype,"icon",2),S([m()],o.Select.prototype,"$selected",2),S([m()],o.Select.prototype,"$cls",2),S([m()],o.Select.prototype,"$stl",2),o.Select=S([_("uk-select")],o.Select);var oi=Object.defineProperty,li=Object.getOwnPropertyDescriptor,M=(r,t,e,i)=>{for(var s=i>1?void 0:i?li(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&oi(t,e,s),s};return o.Lsh=class extends v{constructor(){super(...arguments),this["cls-default-element"]="button",this["stl-default-element"]="button",this["change-event"]="uk-lsh:change",this["before-change-event"]="uk-lsh:before-change",this.defaultI18n={"aria-label":"Toggle theme","active-label":"Active","switch-to-dark":"Switch to dark mode","switch-to-light":"Switch to light mode"},this.value="",this.group="",this["prevent-autoupdate"]=!1,this.toggle=!1,this.isActive=!1,this.lshConfig={},this.$cls={button:"uk-lsh"},this.$stl={button:""},this.boundHandleExternalChange=this.handleExternalChange.bind(this)}connectedCallback(){super.connectedCallback(),this.initializeConfiguration(),this.updateActiveState(),this["prevent-autoupdate"]||document.addEventListener("uk-lsh:change",this.boundHandleExternalChange)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("uk-lsh:change",this.boundHandleExternalChange)}updated(t){super.updated(t),(t.has("value")||t.has("group"))&&this.updateActiveState(),t.has("prevent-autoupdate")&&(this["prevent-autoupdate"]?document.removeEventListener("uk-lsh:change",this.boundHandleExternalChange):document.addEventListener("uk-lsh:change",this.boundHandleExternalChange))}initializeConfiguration(){this.lshConfig.mode=document.documentElement.classList.contains("dark")?"dark":"light";const t=localStorage.getItem("__FRANKEN__");if(t)try{const e=JSON.parse(t);Object.keys(e).forEach(i=>{this.lshConfig[i]=e[i]})}catch(e){console.warn("[uk-lsh] Failed to parse stored configuration:",e)}}saveConfiguration(){try{localStorage.setItem("__FRANKEN__",JSON.stringify(this.lshConfig))}catch(t){console.warn("[uk-lsh] Failed to save configuration:",t)}}emitBeforeChangeEvent(t,e,i){const s=new CustomEvent(this["before-change-event"],{detail:{group:t,value:e,previousValue:i,config:{...this.lshConfig}},bubbles:!0,composed:!0,cancelable:!0});return this.dispatchEvent(s)}emitChangeEvent(t,e,i){this.dispatchEvent(new CustomEvent(this["change-event"],{detail:{group:t,value:e,previousValue:i,config:{...this.lshConfig}},bubbles:!0,composed:!0}))}applyThemeValue(t,e){if(!t||!e)return;const i=this.lshConfig[t]||"";if(!this.emitBeforeChangeEvent(t,e,i))return;const n=document.documentElement;if(this.lshConfig[t]=e,t==="mode")e==="dark"?n.classList.add("dark"):n.classList.remove("dark");else{const a=e.split("-").slice(0,2).join("-")+"-",h=Array.from(n.classList).find(l=>l.startsWith(a));h&&n.classList.remove(h),n.classList.add(e)}this.saveConfiguration(),this.emitChangeEvent(t,e,i)}isValueActive(t,e){if(!t||!e)return!1;if(t==="mode"){const i=document.documentElement.classList.contains("dark");return e==="dark"&&i||e==="light"&&!i}else return this.lshConfig[t]===e}updateActiveState(){this.isActive=this.isValueActive(this.group,this.value)}handleExternalChange(t){const e=t;if(e.target===this)return;const{group:i}=e.detail;i===this.group&&this.updateActiveState()}handleClick(){if(this.toggle&&this.group==="mode"){const e=(document.documentElement.classList.contains("dark")?"dark":"light")==="dark"?"light":"dark";this.applyThemeValue("mode",e)}else this.applyThemeValue(this.group,this.value);this.updateActiveState()}handleKeydown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.handleClick())}getAriaLabel(){if(this.toggle&&this.group==="mode"){const n=(document.documentElement.classList.contains("dark")?"dark":"light")==="dark"?this.getI18nText("switch-to-light",this.defaultI18n):this.getI18nText("switch-to-dark",this.defaultI18n);return`${this.getI18nText("aria-label",this.defaultI18n)} (${n})`}const t=this.getI18nText("aria-label",this.defaultI18n),e=this.value||"",i=this.isActive?`, ${this.getI18nText("active-label",this.defaultI18n)}`:"";return`${t}: ${e}${i}`}render(){return c.html`
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
        ${Yt(this.$template)}
      </button>
    `}},M([u({type:String})],o.Lsh.prototype,"value",2),M([u({type:String})],o.Lsh.prototype,"group",2),M([u({type:Boolean})],o.Lsh.prototype,"prevent-autoupdate",2),M([u({type:Boolean})],o.Lsh.prototype,"toggle",2),M([m()],o.Lsh.prototype,"isActive",2),M([m()],o.Lsh.prototype,"lshConfig",2),M([m()],o.Lsh.prototype,"$cls",2),M([m()],o.Lsh.prototype,"$stl",2),o.Lsh=M([_("uk-lsh")],o.Lsh),Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),o})({},Lit,Lucide,ApexCharts);
