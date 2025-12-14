var __COMPONENTS__=(function(o,d,ot,Pt){"use strict";function xt(r){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}return t.default=r,Object.freeze(t)}const Lt=xt(ot);const k=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const K=globalThis,et=K.ShadowRoot&&(K.ShadyCSS===void 0||K.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,lt=Symbol(),ht=new WeakMap;let Mt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==lt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ht.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ht.set(e,t))}return t}toString(){return this.cssText}};const Vt=r=>new Mt(typeof r=="string"?r:r+"",void 0,lt),Dt=(r,t)=>{if(et)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=K.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},ut=et?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Vt(e)})(r):r;const{is:Rt,defineProperty:Ht,getOwnPropertyDescriptor:Ut,getOwnPropertyNames:Nt,getOwnPropertySymbols:jt,getPrototypeOf:zt}=Object,B=globalThis,ct=B.trustedTypes,Kt=ct?ct.emptyScript:"",Bt=B.reactiveElementPolyfillSupport,D=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Kt:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},it=(r,t)=>!Rt(r,t),dt={attribute:!0,type:String,converter:q,reflect:!1,useDefault:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),B.litPropertyMetadata??=new WeakMap;class R extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ht(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=Ut(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const l=s?.call(this);n?.call(this,a),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=zt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,i=[...Nt(e),...jt(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ut(s))}else t!==void 0&&e.push(ut(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:q).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:q;this._$Em=s;const l=a.fromAttribute(e,n.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??it)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}R.elementStyles=[],R.shadowRootOptions={mode:"open"},R[D("elementProperties")]=new Map,R[D("finalized")]=new Map,Bt?.({ReactiveElement:R}),(B.reactiveElementVersions??=[]).push("2.1.1");const qt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:it},Ft=(r=qt,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:a}=e;return{set(l){const h=t.get.call(this);t.set.call(this,l),this.requestUpdate(a,h,r)},init(l){return l!==void 0&&this.C(a,void 0,r,l),l}}}if(i==="setter"){const{name:a}=e;return function(l){const h=this[a];t.call(this,l),this.requestUpdate(a,h,r)}}throw Error("Unsupported decorator location: "+i)};function u(r){return(t,e)=>typeof e=="object"?Ft(r,t,e):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}function m(r){return u({...r,state:!0,attribute:!1})}const st=globalThis,F=st.trustedTypes,pt=F?F.createPolicy("lit-html",{createHTML:r=>r}):void 0,$t="$lit$",E=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+E,Yt=`<${gt}>`,O=document,Y=()=>O.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",rt=Array.isArray,Jt=r=>rt(r)||typeof r?.[Symbol.iterator]=="function",nt=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ft=/-->/g,mt=/>/g,P=RegExp(`>|${nt}(?:([^\\s"'>=/]+)(${nt}*=${nt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vt=/'/g,bt=/"/g,yt=/^(?:script|style|textarea|title)$/i,x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),_t=new WeakMap,L=O.createTreeWalker(O,129);function wt(r,t){if(!rt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Wt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=U;for(let l=0;l<e;l++){const h=r[l];let c,p,$=-1,f=0;for(;f<h.length&&(a.lastIndex=f,p=a.exec(h),p!==null);)f=a.lastIndex,a===U?p[1]==="!--"?a=ft:p[1]!==void 0?a=mt:p[2]!==void 0?(yt.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=P):p[3]!==void 0&&(a=P):a===P?p[0]===">"?(a=s??U,$=-1):p[1]===void 0?$=-2:($=a.lastIndex-p[2].length,c=p[1],a=p[3]===void 0?P:p[3]==='"'?bt:vt):a===bt||a===vt?a=P:a===ft||a===mt?a=U:(a=P,s=void 0);const v=a===P&&r[l+1].startsWith("/>")?" ":"";n+=a===U?h+Yt:$>=0?(i.push(c),h.slice(0,$)+$t+h.slice($)+E+v):h+E+($===-2?l:v)}return[wt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const l=t.length-1,h=this.parts,[c,p]=Wt(t,e);if(this.el=N.createElement(c,i),L.currentNode=this.el.content,e===2||e===3){const $=this.el.content.firstChild;$.replaceWith(...$.childNodes)}for(;(s=L.nextNode())!==null&&h.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const $ of s.getAttributeNames())if($.endsWith($t)){const f=p[a++],v=s.getAttribute($).split(E),g=/([.?@])?(.*)/.exec(f);h.push({type:1,index:n,name:g[2],strings:v,ctor:g[1]==="."?Zt:g[1]==="?"?Xt:g[1]==="@"?Qt:W}),s.removeAttribute($)}else $.startsWith(E)&&(h.push({type:6,index:n}),s.removeAttribute($));if(yt.test(s.tagName)){const $=s.textContent.split(E),f=$.length-1;if(f>0){s.textContent=F?F.emptyScript:"";for(let v=0;v<f;v++)s.append($[v],Y()),L.nextNode(),h.push({type:2,index:++n});s.append($[f],Y())}}}else if(s.nodeType===8)if(s.data===gt)h.push({type:2,index:n});else{let $=-1;for(;($=s.data.indexOf(E,$+1))!==-1;)h.push({type:7,index:n}),$+=E.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function V(r,t,e=r,i){if(t===x)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=H(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=V(r,s._$AS(r,t.values),s,i)),t}class Gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??O).importNode(e,!0);L.currentNode=s;let n=L.nextNode(),a=0,l=0,h=i[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new J(n,n.nextSibling,this,t):h.type===1?c=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(c=new te(n,this,t)),this._$AV.push(c),h=i[++l]}a!==h?.index&&(n=L.nextNode(),a++)}return L.currentNode=O,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),H(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Jt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement(wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new Gt(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new N(t)),e}k(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new J(this.O(Y()),this.O(Y()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=b}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=V(this,t,e,0),a=!H(t)||t!==this._$AH&&t!==x,a&&(this._$AH=t);else{const l=t;let h,c;for(t=n[0],h=0;h<n.length-1;h++)c=V(this,l[i+h],e,h),c===x&&(c=this._$AH[h]),a||=!H(c)||c!==this._$AH[h],c===b?t=b:t!==b&&(t+=(c??"")+n[h+1]),this._$AH[h]=c}a&&!s&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Zt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class Xt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class Qt extends W{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??b)===x)return;const i=this._$AH,s=t===b&&i!==b||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==b&&(i===b||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class te{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const ee=st.litHtmlPolyfillSupport;ee?.(N,J),(st.litHtmlVersions??=[]).push("3.3.1");const It={ATTRIBUTE:1,CHILD:2},At=r=>(...t)=>({_$litDirective$:r,values:t});class St{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const G=At(class extends St{constructor(r){if(super(r),r.type!==It.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return x}});var ie=Object.defineProperty,j=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&ie(t,e,s),s};const Z=r=>{class t extends r{constructor(){super(...arguments),this.disabled=!1,this.name="",this.placeholder="",this.required=!1,this.value=""}renderHidden(){return typeof this.$value=="string"?this.name?d.html`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `:"":this.$value.map(i=>d.html`
              <input name="${this.name}[]" type="hidden" value="${i}" />
            `)}emit(){this.dispatchEvent(new CustomEvent(this["input-event"],{detail:{value:this.$value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.initializeValue()}}return j([u({type:Boolean})],t.prototype,"disabled"),j([u({type:String})],t.prototype,"name"),j([u({type:String})],t.prototype,"placeholder"),j([u({type:Boolean})],t.prototype,"required"),j([u({type:String})],t.prototype,"value"),t};class at extends St{constructor(t){if(super(t),this.it=b,t.type!==It.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===b||t==null)return this._t=void 0,this.it=t;if(t===x)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}at.directiveName="unsafeHTML",at.resultType=1;const se=At(at);function X(r,t=!1){if(t){if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),r}return r}if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),{}}if(r.replace(/\\:/g,"").includes(":"))try{const e={};return Tt(r.replace(/[;\s]+$/,""),";").forEach(s=>{const n=Tt(s.trim(),":");if(n.length>=2){const a=n[0].trim(),l=n.slice(1).join(":").trim();a&&(e[a]=Et(l))}}),e}catch(e){return console.error("Error parsing key-value pairs:",r,e),{}}return Et(r)}function Tt(r,t){const e=[];let i="",s=0;for(;s<r.length;)r[s]==="\\"&&s+1<r.length&&r[s+1]===t?(i+="\\"+t,s+=2):r[s]===t?(e.push(i),i="",s++):(i+=r[s],s++);return e.push(i),e}function Et(r){return r.replace(/\\:/g,":").replace(/\\;/g,";")}function re(r){const t={},e=(s,n=[])=>{const a=n.length>0?{keywords:n}:{};return Object.keys(s.dataset).forEach(l=>{if(l==="keywords"){const h=s.dataset.keywords.split(",").map(c=>c.trim()).filter(c=>c.length>0);a.keywords=n.length>0?[...n,...h]:h}else a[l]=s.dataset[l]}),a},i=(s,n,a,l=!1)=>{const h=a.hasAttribute("value")?a.getAttribute("value"):a.textContent.trim(),c=e(a,[h]);t[s]||(t[s]={text:n,options:[]}),t[s].options.push({group:s,value:h,text:a.textContent.trim(),disabled:l||a.disabled,selected:a.hasAttribute("selected"),data:c})};return Array.from(r.children).forEach(s=>{if(s.nodeName==="OPTGROUP"){const n=s,a=n.dataset.key||n.getAttribute("label"),l=n.getAttribute("label").trim(),h=e(n);Array.from(n.children).forEach(c=>{c.nodeName==="OPTION"&&i(a,l,c,n.disabled)}),Object.keys(h).length>0&&(t[a]||(t[a]={text:l,options:[]}),t[a].data=h)}else s.nodeName==="OPTION"&&i("__","__",s)}),t}var ne=Object.defineProperty,I=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&ne(t,e,s),s};let Q=null,Ct=!1;class y extends d.LitElement{constructor(){super(...arguments),this.cls="",this.stl="",this.i18n="",this["force-prevent-rerender"]=!1,this.$i18n={},this.$cls={},this.$stl={},this.$config={},this.$i=new Map,this.$template="",this.$data={},this.isRendered=!1,this.HTMLScript=null,this.HTMLIconContainer=null,this.HTMLTemplateContainer=null,this.HTMLDataSource=null,this.configObserver=null,this.dataSourceObserver=null,this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner"}get $normalizedI18n(){const t={};return Object.keys(this.$i18n).forEach(e=>{const i=this.$i18n[e];t[e]=i.includes(",")?i.split(",").map(s=>s.trim()):i}),t}$icons(t){return this.$i.get(t)}getI18nText(t,e={},i){let s=this.$i18n[t];if(!s){const n=this.tagName.toLowerCase(),a=this.$i18n[n];typeof a=="object"&&a!==null&&t in a&&(s=a[t])}return s||(s=e[t]||""),i!==void 0&&(typeof i=="number"?s=s.replace("{n}",String(i)):Object.keys(i).forEach(n=>{const a=i[n];s=s.replace(new RegExp(`\\{${n}\\}`,"g"),String(a))})),s}initializeCls(){if(this.cls){const t=X(this.cls);typeof t=="string"?this.$cls[this["cls-default-element"]]=t:Object.keys(t).forEach(e=>{this.$cls[e]=t[e]})}}initializeStl(){if(this.stl){const t=X(this.stl);typeof t=="string"?this.$stl[this["stl-default-element"]]=t:Object.keys(t).forEach(e=>{this.$stl[e]=t[e]})}}initializeGI18n(){if(Ct)return;Ct=!0;const t=document.getElementById("uk-i18n");if(t&&t.textContent)try{Q=JSON.parse(t.textContent)}catch(e){console.error('Failed to parse global i18n from <script id="uk-i18n">.',e),Q={}}else Q={}}initializeI18n(){this.initializeGI18n();const t=this.i18n?X(this.i18n):{};typeof t=="object"&&t!==null&&(this.$i18n=Object.assign({},Q,t))}initializeConfig(){this.HTMLScript=this.querySelector('script[data-fn="config"][type="application/json"]')}initializeIcons(){this.HTMLIconContainer=this.querySelector('template[data-fn="icons"]')}initializeTemplate(){this.HTMLTemplateContainer=this.querySelector('template[data-fn="template"]')}initializeDataSource(){this.HTMLDataSource=this.querySelector('select[data-fn="data-source"]')}parseIcons(){if(!this.HTMLIconContainer)return;this.HTMLIconContainer.querySelectorAll("[data-key]").forEach(e=>{const i=e.getAttribute("data-key");if(i){const s=e.cloneNode(!0);s.removeAttribute("data-key");const n=s.outerHTML;this.$i.set(i,d.html`${se(n)}`)}})}parseTemplate(){this.HTMLTemplateContainer&&(this.$template=this.HTMLTemplateContainer.innerHTML.trim())}parseConfig(){if(this.HTMLScript)try{const t=this.HTMLScript.textContent;if(this.$config=t?JSON.parse(t):{},this.$config&&typeof this.$config=="object"){if("i18n"in this.$config){const e=this.$config.i18n;typeof e=="object"&&e!==null&&(this.$i18n={...this.$i18n,...e})}if("cls"in this.$config){const e=this.$config.cls;typeof e=="string"?this.$cls[this["cls-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$cls={...this.$cls,...e})}if("stl"in this.$config){const e=this.$config.stl;typeof e=="string"?this.$stl[this["stl-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$stl={...this.$stl,...e})}}}catch(t){console.warn(`${this.tagName.toLowerCase()}: Failed to parse config JSON:`,t),this.$config={}}}parseDataSource(){this.HTMLDataSource&&(this.$data=re(this.HTMLDataSource))}initializeConfigObserver(){!this.HTMLScript||!this.HTMLScript.hasAttribute("data-reactive")||(this.configObserver=new MutationObserver(()=>{this.parseConfig(),this.onConfigChanged()}),this.configObserver.observe(this.HTMLScript,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}initializeDataSourceObserver(){!this.HTMLDataSource||!this.HTMLDataSource.hasAttribute("data-reactive")||(this.dataSourceObserver=new MutationObserver(()=>{this.parseDataSource(),this.onDataSourceChanged()}),this.dataSourceObserver.observe(this.HTMLDataSource,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}onConfigChanged(){}onDataSourceChanged(){}connectedCallback(){super.connectedCallback(),this["force-prevent-rerender"]&&this.querySelector("[data-host-inner]")&&(this.isRendered=!0),this.initializeI18n(),this.initializeCls(),this.initializeStl(),this.initializeConfig(),this.initializeIcons(),this.initializeTemplate(),this.initializeDataSource(),this.HTMLScript&&(this.parseConfig(),this.initializeConfigObserver()),this.HTMLIconContainer&&this.parseIcons(),this.HTMLTemplateContainer&&this.parseTemplate(),this.HTMLDataSource&&(this.parseDataSource(),this.initializeDataSourceObserver())}disconnectedCallback(){super.disconnectedCallback(),this.configObserver&&(this.configObserver.disconnect(),this.configObserver=null),this.dataSourceObserver&&(this.dataSourceObserver.disconnect(),this.dataSourceObserver=null)}shouldUpdate(t){return this["force-prevent-rerender"]&&this.isRendered?!1:super.shouldUpdate(t)}updated(t){super.updated(t),this.isRendered||(this.isRendered=!0)}createRenderRoot(){return this}}I([u({type:String})],y.prototype,"cls"),I([u({type:String})],y.prototype,"stl"),I([u({type:String})],y.prototype,"i18n"),I([u({type:Boolean})],y.prototype,"force-prevent-rerender"),I([m()],y.prototype,"$i18n"),I([m()],y.prototype,"$cls"),I([m()],y.prototype,"$stl"),I([m()],y.prototype,"$config"),I([m()],y.prototype,"$i"),I([m()],y.prototype,"$template"),I([m()],y.prototype,"$data");var ae=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,A=(r,t,e,i)=>{for(var s=i>1?void 0:i?oe(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ae(t,e,s),s};o.InputPin=class extends Z(y){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-pin:change",this.autofocus=!1,this.length=6,this["input-mode"]="numeric",this["show-labels"]=!1,this.defaultI18n={label:"PIN Code",description:"Enter {length}-digit code","field-label":"Digit {n} of {total}",loaded:"PIN input ready",complete:"PIN entry complete","field-filled":"Field {n} filled","invalid-character":"Invalid character entered"},this.$cls={"host-inner":"",wrapper:"uk-input-pin",input:"",label:"",description:""},this.$stl={container:"",wrapper:"",input:"",label:"",description:""},this.$pin="",this.$inputs=null,this.groupId=""}get $value(){return this.$pin}get $text(){return""}initializeValue(){if(this.groupId=this.id?`${this.id}-group`:`pin-${Math.random().toString(36).substr(2,9)}`,this.value){const t=this.value.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(t)){console.warn(`[uk-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`);return}this.$pin=t}}firstUpdated(t){this.$inputs=this.renderRoot.querySelectorAll("input[data-pin-input]"),this.setupPasteHandlers(),this.populateInitialValue(),this.announceToScreenReader(this.getI18nText("loaded",this.defaultI18n))}populateInitialValue(){if(!(!this.$pin||!this.$inputs)&&(this.$pin.split("").forEach((t,e)=>{const i=this.$inputs[e];i&&(i.value=t,i.disabled=!1)}),this.$pin.length<this.length)){const t=this.$inputs[this.$pin.length];t&&(t.disabled=!1)}}setupPasteHandlers(){this.$inputs?.forEach(t=>{t.addEventListener("paste",e=>{e.preventDefault();const i=e.clipboardData;i&&this.handlePaste(i.getData("Text"))})})}handlePaste(t){if(!this.$inputs)return;const e=t.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(e)){this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}this.$pin=e,e.split("").forEach((i,s)=>{const n=this.$inputs[s];n.disabled=!1,n.value=i});for(let i=e.length;i<this.length;i++){const s=this.$inputs[i];s.value="",s.disabled=i!==e.length}if(e.length<this.length){const i=this.$inputs[e.length];i.disabled=!1,i.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e.length+1}))}else this.$inputs[this.$focus]?.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.emit()}handleKeyNavigation(t,e){if(!(this.$focus===void 0||!this.$inputs))switch(t.key){case"Backspace":if(e.value.length===0&&this.$focus>0){t.preventDefault();const i=this.$inputs[this.$focus-1];i.focus(),i.select(),e.disabled=!0}break;case"Delete":if(e.value.length===0){t.preventDefault();const i=this.$inputs[this.$focus+1];i&&(i.focus(),i.setSelectionRange(0,0))}break;case"ArrowLeft":if(t.preventDefault(),this.$focus>0){const i=this.$inputs[this.$focus-1];i.focus(),i.setSelectionRange(1,1)}break;case"ArrowRight":if(t.preventDefault(),this.$focus<this.length-1){const i=this.$inputs[this.$focus+1];i.disabled||(i.focus(),i.setSelectionRange(0,0))}break;case"Home":t.preventDefault(),this.$inputs[0]?.focus();break;case"End":t.preventDefault();for(let i=this.length-1;i>=0;i--){const s=this.$inputs[i];if(!s.disabled){s.focus();break}}break}}handleInput(t,e){if(!this.$inputs)return;const i=t.target;if(this.pattern&&i.value&&!new RegExp(`[${this.pattern}]`).test(i.value)){i.value="",this.announceToScreenReader(this.getI18nText("invalid-character",this.defaultI18n));return}if(i.value.length===1)if(e<this.length-1){const s=this.$inputs[e+1];s.disabled=!1,s.focus(),this.announceToScreenReader(this.getI18nText("field-filled",this.defaultI18n,{n:e+2}))}else i.blur(),this.announceToScreenReader(this.getI18nText("complete",this.defaultI18n)),this.emitComplete();this.updatePinValue(),this.emit()}updatePinValue(){if(!this.$inputs)return;let t="";this.$inputs.forEach(e=>{t+=e.value}),this.$pin=t}emitComplete(){this.dispatchEvent(new CustomEvent("uk-input-pin:complete",{detail:{value:this.$value},bubbles:!0,composed:!0}))}announceToScreenReader(t){if(!t)return;const e=this.renderRoot.querySelector('[role="status"]');e&&(e.textContent=t,setTimeout(()=>{e.textContent=""},1e3))}get groupLabel(){return this.getI18nText("label",this.defaultI18n)}get groupDescription(){return this.getI18nText("description",this.defaultI18n,{length:this.length})}getFieldLabel(t){return this.getI18nText("field-label",this.defaultI18n,{n:t+1,total:this.length})}renderInput(t){const e=this.getFieldLabel(t);return d.html`
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
    `}renderLabel(){return this.querySelector('[slot="label"]')?d.html`
        <span
          id="${this.groupId}-label"
          class=${G({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.label}
        >
          <slot name="label"></slot>
        </span>
      `:d.html`
      <span
        id="${this.groupId}-label"
        class=${G({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.label}
      >
        ${this.groupLabel}
      </span>
    `}renderDescription(){return this.querySelector('[slot="description"]')?d.html`
        <span
          id="${this.groupId}-desc"
          class=${G({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.description}
        >
          <slot name="description"></slot>
        </span>
      `:d.html`
      <span
        id="${this.groupId}-desc"
        class=${G({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.description}
      >
        ${this.groupDescription}
      </span>
    `}render(){return d.html`
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
    `}},A([u({type:Boolean})],o.InputPin.prototype,"autofocus",2),A([u({type:Number})],o.InputPin.prototype,"length",2),A([u({type:String,attribute:"input-mode"})],o.InputPin.prototype,"input-mode",2),A([u({type:String})],o.InputPin.prototype,"pattern",2),A([u({type:Boolean,attribute:"show-labels"})],o.InputPin.prototype,"show-labels",2),A([m()],o.InputPin.prototype,"$cls",2),A([m()],o.InputPin.prototype,"$stl",2),A([m()],o.InputPin.prototype,"$focus",2),A([m()],o.InputPin.prototype,"$pin",2),o.InputPin=A([k("uk-input-pin")],o.InputPin);var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,C=(r,t,e,i)=>{for(var s=i>1?void 0:i?he(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&le(t,e,s),s};o.InputRange=class extends Z(y){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-range:input",this.multiple=!1,this.min=0,this.max=100,this.step=1,this.label=!1,this["label-position"]="top",this["aria-label"]="",this._lowValue=this.min,this._highValue=this.max,this._label=!1,this.activeKnob=null,this.trackElement=null,this.isDragging=!1,this.defaultI18n={ariaValueText:"Value: {value}",ariaRangeText:"Range from {low} to {high}",lowKnobLabel:"Minimum value",highKnobLabel:"Maximum value",ariaLabel:"Range slider"},this.preventScrolling=t=>{this.isDragging&&t.preventDefault()},this.onPointerStart=(t,e)=>{this.disabled||(t.preventDefault(),t.stopPropagation(),this.activeKnob=e,this.isDragging=!0,t.currentTarget.focus(),document.addEventListener("pointermove",this.onPointerMove,{passive:!1}),document.addEventListener("pointerup",this.onPointerEnd),document.addEventListener("pointercancel",this.onPointerEnd),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onPointerEnd),document.addEventListener("touchcancel",this.onPointerEnd))},this.onPointerMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.clientX);this.handleValueChange(this.activeKnob,e)},this.onTouchMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.touches[0].clientX);this.handleValueChange(this.activeKnob,e)},this.onPointerEnd=()=>{this.isDragging=!1,this.activeKnob=null,this.cleanupEventListeners()},this.onKeyDown=(t,e)=>{if(this.disabled)return;const i=e==="low"?this._lowValue:this._highValue;let s=0;switch(t.key){case"ArrowRight":case"ArrowUp":s=this.step;break;case"ArrowLeft":case"ArrowDown":s=-this.step;break;case"Home":this.handleValueChange(e,e==="low"?this.min:this._lowValue),t.preventDefault();return;case"End":this.handleValueChange(e,e==="high"?this.max:this._highValue),t.preventDefault();return;case"PageUp":s=this.step*10;break;case"PageDown":s=-this.step*10;break;default:return}s&&(t.preventDefault(),this.handleValueChange(e,i+s))}}get $text(){return""}get $value(){return this.multiple?this.value.split(",").map(t=>t.trim()):this.value}get precision(){const t=this.step.toString();return t.includes(".")?t.split(".")[1].length:0}connectedCallback(){super.connectedCallback();const t=this.getAttribute("label");this._label=t===""?!0:t||!1,this.addEventListener("touchstart",this.preventScrolling,{passive:!1})}disconnectedCallback(){this.removeEventListener("touchstart",this.preventScrolling),this.cleanupEventListeners(),super.disconnectedCallback?.()}updated(t){(t.has("value")||t.has("multiple"))&&this.parseValue()}initializeValue(){this.value?this.parseValue():(this._lowValue=this.min,this._highValue=this.max,this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue))}parseValue(){if(this.multiple){const[t,e]=this.value.split(",").map(i=>parseFloat(i));t!==void 0&&e!==void 0&&(this._lowValue=this.clamp(t),this._highValue=this.clamp(e))}else this._lowValue=this.clamp(parseFloat(this.value))}formatValue(t){return t.toFixed(this.precision)}clamp(t){const e=Math.min(Math.max(t,this.min),this.max);return parseFloat(e.toFixed(this.precision))}valueToPercent(t){return(t-this.min)/(this.max-this.min)*100}positionToValue(t){this.trackElement||(this.trackElement=this.querySelector("[data-range-track]"));const e=this.trackElement.getBoundingClientRect(),i=Math.max(0,Math.min(1,(t-e.left)/e.width));return this.min+i*(this.max-this.min)}updateValue(){this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue),this.emit()}handleValueChange(t,e){const i=Math.round(e/this.step)*this.step,s=parseFloat(i.toFixed(this.precision));e=this.clamp(s),t==="low"?this._lowValue=this.multiple?Math.min(e,this._highValue):e:this._highValue=Math.max(e,this._lowValue),this.updateValue(),this.requestUpdate()}cleanupEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerEnd),document.removeEventListener("pointercancel",this.onPointerEnd),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onPointerEnd),document.removeEventListener("touchcancel",this.onPointerEnd)}getAriaValueText(t){return this.multiple?this.getI18nText("ariaRangeText",this.defaultI18n,{low:this.formatValue(this._lowValue),high:this.formatValue(this._highValue)}):this.getI18nText("ariaValueText",this.defaultI18n,{value:this.formatValue(t)})}getKnobAriaLabel(t){const e=t==="low"?"lowKnobLabel":"highKnobLabel";return this.getI18nText(e,this.defaultI18n)}renderKnob(t){const e=t==="low"?this._lowValue:this._highValue,i=this.valueToPercent(e),s=t==="low"?this.min:this._lowValue,n=t==="low"?this.multiple?this._highValue:this.max:this.max,a=this.isDragging&&this.activeKnob===t,l=[this.$cls.knob||"uk-input-range-knob",this.$cls[t==="low"?"knobLow":"knobHigh"]||"",a&&this.$cls.knobDragging||""].filter(Boolean).join(" "),h=this["label-position"]==="top"?this.$cls.labelTop||"uk-input-range-label-top":this.$cls.labelBottom||"uk-input-range-label-bottom";return d.html`
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
        style="${this.$stl.knob||""}${this.$stl[t==="low"?"knobLow":"knobHigh"]||""}left: ${i}%;"
        data-knob="${t}"
        data-dragging="${a}"
        @pointerdown=${c=>this.onPointerStart(c,t)}
        @touchstart=${c=>this.onPointerStart(c,t)}
        @keydown=${c=>this.onKeyDown(c,t)}
      >
        ${this._label?d.html`
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
    `}render(){const t=this.valueToPercent(this._lowValue),e=this.multiple?this.valueToPercent(this._highValue):t,i=`left: ${this.multiple?t:0}%; width: ${this.multiple?e-t:t}%`,s=this["aria-label"]||this.getI18nText("ariaLabel",this.defaultI18n);return d.html`
      <div
        data-host-inner
        class="${this.$cls.container||"uk-input-range"}"
        style="${this.$stl.container||""}"
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
    `}},C([u({type:Boolean})],o.InputRange.prototype,"multiple",2),C([u({type:Number})],o.InputRange.prototype,"min",2),C([u({type:Number})],o.InputRange.prototype,"max",2),C([u({type:Number})],o.InputRange.prototype,"step",2),C([u({type:String})],o.InputRange.prototype,"label",2),C([u({type:String})],o.InputRange.prototype,"label-position",2),C([u({type:String})],o.InputRange.prototype,"aria-label",2),o.InputRange=C([k("uk-input-range")],o.InputRange);function ue(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var tt={exports:{}},ce=tt.exports,kt;function de(){return kt||(kt=1,(function(r,t){(function(e,i,s){r.exports=s(),r.exports.default=s()})("slugify",ce,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(n,a){if(typeof n!="string")throw new Error("slugify: string argument expected");a=typeof a=="string"?{replacement:a}:a||{};var l=i[a.locale]||{},h=a.replacement===void 0?"-":a.replacement,c=a.trim===void 0?!0:a.trim,p=n.normalize().split("").reduce(function($,f){var v=l[f];return v===void 0&&(v=e[f]),v===void 0&&(v=f),v===h&&(v=" "),$+v.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return a.strict&&(p=p.replace(/[^A-Za-z0-9\s]/g,"")),c&&(p=p.trim()),p=p.replace(/\s+/g,h),a.lower&&(p=p.toLowerCase()),p}return s.extend=function(n){Object.assign(e,n)},s})})(tt)),tt.exports}var pe=de();const Ot=ue(pe);var $e=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,_=(r,t,e,i)=>{for(var s=i>1?void 0:i?ge(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&$e(t,e,s),s};o.InputTag=class extends Z(y){constructor(){super(...arguments),this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner",this["input-event"]="uk-input-tag:input",this.maxlength=20,this.minlength=1,this.slugify=!1,this["slugify-options"]="",this.delimiters=",",this["allow-duplicates"]=!1,this["max-tags"]=0,this.$input="",this.$slugOptions={lower:!0,strict:!0},this.$tags=[],this.$error="",this.defaultI18n={placeholder:"Add a tag...","remove-label":"Remove tag","edit-label":"Edit tag","tag-list-label":"Tags","min-length-error":"Tag must be at least {min} characters","max-length-error":"Tag cannot exceed {max} characters","duplicate-error":"Tag already exists","max-tags-error":"Maximum {max} tags allowed","input-label":"Tag input"},this.$cls={"host-inner":"",wrapper:"uk-input-tag","tag-list":"uk-input-tag-list",tag:"uk-tag uk-tag-secondary","tag-text":"","tag-remove":"",input:"",error:"sr-only"},this.$stl={"host-inner":"",wrapper:"","tag-list":"",tag:"","tag-text":"","tag-remove":"",input:"",error:""}}get $value(){return this.$tags}get $text(){return""}get delimiterChars(){return this.delimiters.split("")}initializeValue(){this.initializeTags(),this.initializeSlugOptions()}initializeTags(){this.$tags=this.value===""?[]:this.value.split(",")}initializeSlugOptions(){if(!this["slugify-options"])return;const t=X(this["slugify-options"]);t.replacement&&(this.$slugOptions.replacement=t.replacement),t.remove&&(this.$slugOptions.remove=new RegExp(t.remove,"g")),t.lower&&(this.$slugOptions.lower=t.lower==="true"),t.strict&&(this.$slugOptions.strict=t.strict==="true"),t.locale&&(this.$slugOptions.locale=t.locale),t.trim&&(this.$slugOptions.trim=t.trim==="true")}validateTag(t){return this.$error="",t.length<this.minlength?(this.$error=this.getI18nText("min-length-error",this.defaultI18n,{min:String(this.minlength)}),!1):t.length>this.maxlength?(this.$error=this.getI18nText("max-length-error",this.defaultI18n,{max:String(this.maxlength)}),!1):!this["allow-duplicates"]&&this.$tags.includes(t)?(this.$error=this.getI18nText("duplicate-error",this.defaultI18n),!1):this["max-tags"]>0&&this.$tags.length>=this["max-tags"]?(this.$error=this.getI18nText("max-tags-error",this.defaultI18n,{max:String(this["max-tags"])}),!1):!0}addTag(){if(!this.$input.trim())return;let t=this.$input.trim();this.slugify&&(t=Ot(t,this.$slugOptions)),this.validateTag(t)&&(this.$tags=[...this.$tags,t],this.$input="",this.$error="",this.emit(),this.requestUpdate())}removeTag(t){this.disabled||(this.$tags=this.$tags.filter((e,i)=>i!==t),this.$error="",this.emit(),this.requestUpdate())}editTag(t){this.disabled||(this.$input=this.$tags[t],this.removeTag(t),this.updateComplete.then(()=>{this.renderRoot.querySelector("input")?.focus()}))}handleKeydown(t){switch(t.key){case"Backspace":this.$tags.length>0&&this.$input.length===0&&(t.preventDefault(),this.editTag(this.$tags.length-1));break;case"Enter":t.preventDefault(),this.addTag();break;case"Escape":this.$input&&(t.preventDefault(),this.$input="",this.$error="",this.requestUpdate());break;default:this.delimiterChars.includes(t.key)&&(t.preventDefault(),this.addTag());break}}handleInput(t){const e=t.target;this.$input=e.value,this.$error=""}handlePaste(t){const e=t.clipboardData?.getData("text");if(!e)return;if(this.delimiterChars.some(s=>e.includes(s))){t.preventDefault();const s=new RegExp(`[${this.delimiterChars.join("")}]`);e.split(s).map(a=>a.trim()).filter(a=>a.length>0).forEach(a=>{this.slugify&&(a=Ot(a,this.$slugOptions)),this.validateTag(a)&&(this.$tags=[...this.$tags,a])}),this.$input="",this.emit(),this.requestUpdate()}}renderTag(t,e){const i=this.getI18nText("remove-label",this.defaultI18n),s=this.getI18nText("edit-label",this.defaultI18n);return d.html`
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
    `}renderError(){return this.$error?d.html`
      <div
        class="${this.$cls.error||""}"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="polite"
      >
        ${this.$error}
      </div>
    `:""}render(){const t=this.placeholder||this.getI18nText("placeholder",this.defaultI18n),e=this.getI18nText("tag-list-label",this.defaultI18n),i=this.getI18nText("input-label",this.defaultI18n);return d.html`
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
    `}},_([u({type:Number})],o.InputTag.prototype,"maxlength",2),_([u({type:Number})],o.InputTag.prototype,"minlength",2),_([u({type:Boolean})],o.InputTag.prototype,"slugify",2),_([u({type:String})],o.InputTag.prototype,"slugify-options",2),_([u({type:String})],o.InputTag.prototype,"delimiters",2),_([u({type:Boolean})],o.InputTag.prototype,"allow-duplicates",2),_([u({type:Number})],o.InputTag.prototype,"max-tags",2),_([m()],o.InputTag.prototype,"$input",2),_([m()],o.InputTag.prototype,"$slugOptions",2),_([m()],o.InputTag.prototype,"$tags",2),_([m()],o.InputTag.prototype,"$error",2),_([m()],o.InputTag.prototype,"$cls",2),_([m()],o.InputTag.prototype,"$stl",2),o.InputTag=_([k("uk-input-tag")],o.InputTag);function fe(r){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(r))throw new Error("Invalid time format. Use HH:MM (24-hour format)");return r}var me=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,S=(r,t,e,i)=>{for(var s=i>1?void 0:i?ve(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&me(t,e,s),s};o.InputTime=class extends Z(y){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="uk-input-time:input",this.autofocus=!1,this.now=!1,this.clock="12h",this.min="",this.max="",this.$min=0,this.$meridiem="am",this.defaultI18n={am:"AM",pm:"PM",hourLabel:"Hour",minuteLabel:"Minute",meridiemLabel:"AM/PM",timeLabel:"Time",hourPlaceholder:"HH",minutePlaceholder:"MM",invalidTime:"Invalid time format"}}get $HH(){return this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"00"}get $MM(){return this.$min>=0?this.$min.toString().padStart(2,"0"):"00"}get $value(){if(this.$hour===void 0||this.$hour===null)return"";let t=this.$hour;return this.clock==="12h"&&(this.$meridiem==="pm"?t=this.$hour===12?12:this.$hour+12:t=this.$hour===12?0:this.$hour),`${t.toString().padStart(2,"0")}:${this.$min.toString().padStart(2,"0")}`}get $text(){return""}initializeValue(){this.value?this.parseTimeValue():this.now&&this.setCurrentTime()}updated(t){["$hour","$min","$meridiem"].some(e=>t.has(e))&&this.emit()}parseTimeValue(){try{const t=fe(this.value),[e,i]=t.split(":").map(Number);this.clock==="12h"?this.$hour=e%12||12:this.$hour=e,this.$min=i,this.$meridiem=e<12?"am":"pm"}catch(t){console.error(this.getI18nText("invalidTime",this.defaultI18n),t)}}setCurrentTime(){const t=new Date;this.clock==="12h"?this.$hour=t.getHours()%12||12:this.$hour=t.getHours(),this.$min=t.getMinutes(),this.$meridiem=t.getHours()<12?"am":"pm"}isTimeValid(){const t=this.$value;return t?!(this.min&&t<this.min||this.max&&t>this.max):!0}handleInput(t,e){const i=t.target,s=i.value.replace(/[^0-9]/g,"").substring(0,2),n=parseInt(s);switch(e){case"$hour":this.clock==="12h"?this.$hour=n<=12?n:12:this.$hour=n<=23?n:23;break;case"$min":this.$min=n<=59?n:59;break}i.value=s}handleBlur(t,e){const i=t.target,s=parseInt(i.value);switch(e){case"$hour":if(i.value===""){this.required?i.value=this.$HH:this.$hour=void 0;return}this.clock==="12h"&&s>12?(this.$hour=12,i.value="12"):this.clock==="12h"&&s===0?(this.$hour=12,i.value="12"):this.clock==="24h"&&s>23?(this.$hour=23,i.value="23"):i.value=this.$HH;break;case"$min":s>59&&(this.$min=59),i.value=this.$MM;break}}handleKeydown(t,e){const i=t.target;if((e==="$hour"?this.$hour:this.$min)===void 0&&e==="$hour")return;let n=0,a=!1;switch(t.key){case"ArrowUp":n=1,a=!0;break;case"ArrowDown":n=-1,a=!0;break;case"PageUp":n=e==="$hour"?1:15,a=!0;break;case"PageDown":n=e==="$hour"?-1:-15,a=!0;break}if(a&&n!==0)if(t.preventDefault(),e==="$hour"){const l=this.clock==="12h"?12:23,h=this.clock==="12h"?1:0;let c=(this.$hour||0)+n;c>l&&(c=h),c<h&&(c=l),this.$hour=c,i.value=c.toString().padStart(2,"0")}else{let l=this.$min+n;l>59&&(l=0),l<0&&(l=59),this.$min=l,i.value=l.toString().padStart(2,"0")}}toggleMeridiem(){this.$meridiem=this.$meridiem==="am"?"pm":"am"}handleMeridiemKeydown(t){(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key===" ")&&(t.preventDefault(),this.toggleMeridiem())}renderInput(t){const{min:e,max:i,state:s,key:n}=t,a=s==="$hour",l=a?this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"":this.$hour===void 0?"":this.$min>=0?this.$min.toString().padStart(2,"0"):"00",h=this.getI18nText(a?"hourLabel":"minuteLabel",this.defaultI18n),c=this.getI18nText(a?"hourPlaceholder":"minutePlaceholder",this.defaultI18n),p=a?this.$cls.hourInput||this.$cls.input||"":this.$cls.minuteInput||this.$cls.input||"",$=a?this.$stl.hourInput||this.$stl.input||"":this.$stl.minuteInput||this.$stl.input||"";return d.html`
      <input
        class="${p}"
        part="${a?"hour-input":"minute-input"} input"
        style="${$}"
        data-key="${n}"
        data-field="${s}"
        type="number"
        inputmode="numeric"
        role="spinbutton"
        aria-label="${h}"
        aria-valuemin="${e}"
        aria-valuemax="${i}"
        aria-valuenow="${a?this.$hour||0:this.$min}"
        aria-invalid="${!this.isTimeValid()}"
        min="${e}"
        max="${i}"
        step="1"
        placeholder="${c}"
        maxlength="2"
        value="${l}"
        .autofocus="${a&&this.autofocus}"
        ?disabled="${this.disabled||!a&&this.$hour===void 0}"
        @keydown="${f=>this.handleKeydown(f,s)}"
        @input="${f=>this.handleInput(f,s)}"
        @blur="${f=>this.handleBlur(f,s)}"
      />
    `}render(){const t=this.getI18nText("timeLabel",this.defaultI18n),e=this.getI18nText("meridiemLabel",this.defaultI18n);let i=d.html``;if(this.clock==="12h"){const s=this.getI18nText("am",this.defaultI18n),n=this.getI18nText("pm",this.defaultI18n),a=this.$meridiem==="am"?s:n;i=d.html`
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
          @click="${l=>{l.preventDefault(),this.toggleMeridiem()}}"
          @keydown="${this.handleMeridiemKeydown}"
        >
          ${a}
        </button>
      `}return d.html`
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
    `}},S([u({type:Boolean})],o.InputTime.prototype,"autofocus",2),S([u({type:Boolean})],o.InputTime.prototype,"now",2),S([u({type:String})],o.InputTime.prototype,"clock",2),S([u({type:String})],o.InputTime.prototype,"min",2),S([u({type:String})],o.InputTime.prototype,"max",2),S([m()],o.InputTime.prototype,"$hour",2),S([m()],o.InputTime.prototype,"$min",2),S([m()],o.InputTime.prototype,"$meridiem",2),o.InputTime=S([k("uk-input-time")],o.InputTime);function be(r=5){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:r},()=>t.charAt(Math.floor(Math.random()*t.length))).join("")}var ye=Object.defineProperty,_e=Object.getOwnPropertyDescriptor,T=(r,t,e,i)=>{for(var s=i>1?void 0:i?_e(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ye(t,e,s),s};o.Keyval=class extends y{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.keys="",this.values="",this.sensitive=!1,this.noninsertable=!1,this.max=0,this.min=1,this["aria-label"]="",this.valueVisibility={},this.defaultI18n={headerKey:"Key",headerValue:"Value",placeholderKey:"Enter key",placeholderValue:"Enter value",addRowLabel:"Add row",removeRowLabel:"Remove row",toggleVisibilityLabel:"Toggle visibility",generateRandomLabel:"Generate random value",tableLabel:"Key-value pairs",actionsLabel:"Actions",keyLabel:"Key for row {index}",valueLabel:"Value for row {index}"},this.handleKeyDown=t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&!this.noninsertable&&(t.preventDefault(),this.addRow())}}connectedCallback(){super.connectedCallback(),this.HTMLDataSource||(this.initializeEmptyData(),this.addRow()),this.initializePasswordVisibility()}onDataSourceChanged(){(!this.$data.__||!this.$data.__.options||this.$data.__.options.length===0)&&(this.initializeEmptyData(),this.addRow())}initializeEmptyData(){this.$data={__:{text:"__",options:[]}}}initializePasswordVisibility(){this.sensitive&&this.$data.__&&this.$data.__.options&&this.$data.__.options.forEach((t,e)=>{this.valueVisibility[e]=!1})}canAddRow(){return this.max===0?!0:this.$data.__.options.length<this.max}canRemoveRow(){return this.$data.__.options.length>this.min}addRow(){if(!this.canAddRow())return;this.$data.__||this.initializeEmptyData();const t=this.$data.__.options.length;this.$data.__.options.push({group:"__",value:"",text:"",disabled:!1,selected:!1,data:{gid:""}}),this.sensitive&&(this.valueVisibility[t]=!1),this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelectorAll('[data-field="key"]')[t];i&&i.focus()})}removeRow(t){this.canRemoveRow()&&this.$data.__&&this.$data.__.options&&(this.$data.__.options.splice(t,1),this.reindexVisibilityAfterRemoval(t),this.requestUpdate())}reindexVisibilityAfterRemoval(t){const e={};Object.keys(this.valueVisibility).forEach(i=>{const s=parseInt(i);s<t?e[s]=this.valueVisibility[s]:s>t&&(e[s-1]=this.valueVisibility[s])}),this.valueVisibility=e}handleKeyChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].data.gid=s,this.requestUpdate())}handleValueChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=s,this.requestUpdate())}setRandomValue(t){this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=be(16),this.valueVisibility[t]=!0,this.requestUpdate())}togglePasswordVisibility(t){this.sensitive&&(this.valueVisibility[t]=!this.valueVisibility[t],this.requestUpdate())}getPasswordVisibility(t){return this.valueVisibility[t]||!1}getInputType(t){return this.sensitive?this.getPasswordVisibility(t)?"text":"password":"text"}$icons(t){const e=super.$icons(t);if(e)return e;switch(t){case"plus":return d.html`
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
        `;case"wand":return d.html`
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
        `;case"eye-off":return d.html`
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
        `;case"eye":return d.html`
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
        `;case"trash-2":return d.html`
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
        `}}render(){const t=this["aria-label"]||this.getI18nText("tableLabel",this.defaultI18n),e=this.getI18nText("headerKey",this.defaultI18n),i=this.getI18nText("headerValue",this.defaultI18n),s=this.getI18nText("actionsLabel",this.defaultI18n),n=this.getI18nText("addRowLabel",this.defaultI18n);return d.html`
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
                ${this.noninsertable?"":d.html`
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
            ${this.$data.__&&this.$data.__.options?this.$data.__.options.map((a,l)=>{const h=this.getI18nText("keyLabel",this.defaultI18n,{index:String(l+1)}),c=this.getI18nText("valueLabel",this.defaultI18n,{index:String(l+1)}),p=this.getI18nText("placeholderKey",this.defaultI18n),$=this.getI18nText("placeholderValue",this.defaultI18n),f=this.getI18nText("removeRowLabel",this.defaultI18n),v=this.getI18nText("toggleVisibilityLabel",this.defaultI18n),g=this.getI18nText("generateRandomLabel",this.defaultI18n);return d.html`
                    <tr
                      class="${this.$cls.row||""}"
                      style="${this.$stl.row||""}"
                      role="row"
                      data-row-index="${l}"
                    >
                      <td role="cell">
                        <input
                          class="${this.$cls.keyInput||this.$cls.input||""}"
                          style="${this.$stl.keyInput||this.$stl.input||""}"
                          autocomplete="off"
                          type="text"
                          placeholder="${p}"
                          value="${a.data.gid||""}"
                          aria-label="${h}"
                          data-field="key"
                          @input=${z=>this.handleKeyChange(l,z)}
                        />
                      </td>
                      <td role="cell">
                        <div
                          class="${this.$cls.valueWrapper||""}"
                          style="${this.$stl.valueWrapper||""}"
                        >
                          ${this.sensitive?d.html`
                                <button
                                  class="${this.$cls.randomButton||this.$cls.button||""}"
                                  style="${this.$stl.randomButton||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${g}"
                                  ?disabled="${!!a.value}"
                                  @click=${()=>this.setRandomValue(l)}
                                >
                                  ${this.$icons("wand")}
                                </button>
                              `:""}

                          <input
                            class="${this.$cls.valueInput||this.$cls.input||""}"
                            style="${this.$stl.valueInput||this.$stl.input||""}"
                            autocomplete="off"
                            type="${this.getInputType(l)}"
                            placeholder="${$}"
                            name="${a.data.gid||""}"
                            value="${a.value}"
                            aria-label="${c}"
                            data-field="value"
                            ?disabled=${!a.data.gid}
                            @input=${z=>this.handleValueChange(l,z)}
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
                          ${this.sensitive?d.html`
                                <button
                                  class="${this.$cls.toggleButton||this.$cls.button||""}"
                                  style="${this.$stl.toggleButton||this.$stl.button||""}"
                                  type="button"
                                  aria-label="${v}"
                                  aria-pressed="${this.getPasswordVisibility(l)}"
                                  @click=${()=>this.togglePasswordVisibility(l)}
                                >
                                  ${this.getPasswordVisibility(l)?this.$icons("eye-off"):this.$icons("eye")}
                                </button>
                              `:""}
                          <button
                            class="${this.$cls.removeButton||this.$cls.button||""}"
                            style="${this.$stl.removeButton||this.$stl.button||""}"
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
    `}},T([u({type:String})],o.Keyval.prototype,"keys",2),T([u({type:String})],o.Keyval.prototype,"values",2),T([u({type:Boolean})],o.Keyval.prototype,"sensitive",2),T([u({type:Boolean})],o.Keyval.prototype,"noninsertable",2),T([u({type:Number})],o.Keyval.prototype,"max",2),T([u({type:Number})],o.Keyval.prototype,"min",2),T([u({type:String})],o.Keyval.prototype,"aria-label",2),T([m()],o.Keyval.prototype,"valueVisibility",2),o.Keyval=T([k("uk-keyval")],o.Keyval);var we=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,w=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ie(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&we(t,e,s),s};o.Icon=class extends y{constructor(){super(...arguments),this["cls-default-element"]="svg",this["stl-default-element"]="svg",this.icon="",this.label="",this.decorative=!1,this.role="",this["stroke-width"]="2",this.height="16",this.width="16",this.color="",this.fill="none",this.defaultI18n={label:""}}get key(){return this.icon.trim().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}getEffectiveLabel(){return this.getI18nText("label",this.defaultI18n)||this.label}updated(t){(["icon","stroke-width","height","width","size","color","fill","label","decorative","role","$cls","$stl"].some(i=>t.has(i))||t.has("$i18n"))&&this.updateComplete.then(()=>{this.regenerateSvg()})}regenerateSvg(){this.$svg=this.createSvg({icon:this.key,cls:this.$cls.svg||"",stl:this.$stl.svg||"",height:this.size||this.height,width:this.size||this.width,strokeWidth:this["stroke-width"],color:this.color,fill:this.fill,label:this.getEffectiveLabel(),decorative:this.decorative,role:this.role})}createSvg(t){const{icon:e,cls:i,stl:s,height:n,width:a,strokeWidth:l,color:h,fill:c,label:p,decorative:$,role:f}=t;try{const v=Lt[e];if(!v){console.warn(`uk-icon: Icon "${this.icon}" not found in Lucide icons.`);return}const g=ot.createElement(v);if(i&&g.setAttribute("class",i),s&&g.setAttribute("style",s),g.setAttribute("height",n),g.setAttribute("width",a),g.setAttribute("stroke-width",l),c!=="none"&&g.setAttribute("fill",c),h){const z=g.getAttribute("style")||"";g.setAttribute("style",`${z}; color: ${h};`)}return $?(g.setAttribute("aria-hidden","true"),g.removeAttribute("role"),g.removeAttribute("aria-label")):p?(g.setAttribute("role",f||"img"),g.setAttribute("aria-label",p),g.removeAttribute("aria-hidden")):f&&(g.setAttribute("role",f),g.removeAttribute("aria-hidden")),g.setAttribute("data-icon",this.icon),g.setAttribute("data-lucide",this.icon),g}catch(v){console.warn(`uk-icon: Failed to create icon "${this.icon}":`,v);return}}render(){return this.renderRoot.children.length===0?this.$svg:d.nothing}},w([u({type:String})],o.Icon.prototype,"icon",2),w([u({type:String})],o.Icon.prototype,"label",2),w([u({type:Boolean})],o.Icon.prototype,"decorative",2),w([u({type:String})],o.Icon.prototype,"role",2),w([u({type:String})],o.Icon.prototype,"stroke-width",2),w([u({type:String})],o.Icon.prototype,"height",2),w([u({type:String})],o.Icon.prototype,"width",2),w([u({type:String})],o.Icon.prototype,"size",2),w([u({type:String})],o.Icon.prototype,"color",2),w([u({type:String})],o.Icon.prototype,"fill",2),w([m()],o.Icon.prototype,"$svg",2),o.Icon=w([k("uk-icon")],o.Icon);var Ae=Object.defineProperty,Se=Object.getOwnPropertyDescriptor,M=(r,t,e,i)=>{for(var s=i>1?void 0:i?Se(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Ae(t,e,s),s};return o.Chart=class extends y{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.loading=!1,this.width="100%",this.height="auto",this["aria-label"]="",this.hasError=!1,this.errorMessage="",this.apexCharts=null,this.defaultI18n={chartLabel:"Chart",loadingMessage:"Loading chart...",errorMessage:"Failed to load chart. Please try again.",noDataMessage:"No data available"}}get $apexChartsConfig(){return"apexCharts"in this.$config&&typeof this.$config=="object"?this.$config.apexCharts:{}}hasValidConfig(){return Object.keys(this.$apexChartsConfig).length>0}firstUpdated(t){super.firstUpdated(t),this.loading||this.initializeApexCharts()}updated(t){super.updated(t),t.has("loading")&&!this.loading&&!this.apexCharts&&this.initializeApexCharts()}disconnectedCallback(){super.disconnectedCallback(),this.apexCharts&&(this.apexCharts.destroy(),this.apexCharts=null)}onConfigChanged(){if(this.apexCharts&&this.hasValidConfig())try{this.apexCharts.updateOptions(this.$apexChartsConfig,!0,!0),this.hasError=!1,this.errorMessage=""}catch(t){console.error("uk-chart: Failed to update chart:",t),this.hasError=!0,this.errorMessage=t instanceof Error?t.message:"Unknown error"}else!this.apexCharts&&this.hasValidConfig()&&this.initializeApexCharts()}async initializeApexCharts(){const t=this.renderRoot.querySelector("[data-chart-container]");if(!t){console.warn("uk-chart: Chart container not found");return}if(!this.hasValidConfig()){console.warn("uk-chart: No valid chart configuration found"),this.hasError=!0,this.errorMessage=this.getI18nText("noDataMessage",this.defaultI18n);return}if(this.apexCharts===null)try{const e={...this.$apexChartsConfig,chart:{...this.$apexChartsConfig.chart,width:this.width,height:this.height}};this.apexCharts=new Pt(t,e),await this.apexCharts.render(),this.isRendered=!0,this.hasError=!1,this.errorMessage=""}catch(e){console.error("uk-chart: Failed to initialize chart:",e),this.hasError=!0,this.errorMessage=e instanceof Error?e.message:this.getI18nText("errorMessage",this.defaultI18n)}}renderLoading(){const t=this.getI18nText("loadingMessage",this.defaultI18n);return d.html`
      <div
        class="${this.$cls.loading||""}"
        style="${this.$stl.loading||""}"
        role="status"
        aria-live="polite"
        aria-label="${t}"
      >
        <span>${t}</span>
      </div>
    `}renderError(){const t=this.errorMessage||this.getI18nText("errorMessage",this.defaultI18n);return d.html`
      <div
        class="${this.$cls.error||""}"
        part="error"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="assertive"
      >
        <span>${t}</span>
      </div>
    `}render(){const t=this["aria-label"]||this.getI18nText("chartLabel",this.defaultI18n);return d.html`
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
        ${this.loading?this.renderLoading():this.hasError?this.renderError():d.html`
                <div
                  data-chart-container
                  class="${this.$cls.chart||""}"
                  part="chart"
                  style="${this.$stl.chart||""}"
                ></div>
              `}
      </div>
    `}async updateChart(t,e=!0,i=!0){if(this.apexCharts)try{await this.apexCharts.updateOptions(t,e,i),this.hasError=!1,this.errorMessage=""}catch(s){throw console.error("uk-chart: Failed to update chart:",s),this.hasError=!0,this.errorMessage=s instanceof Error?s.message:"Unknown error",s}else throw new Error("Chart not initialized")}async updateSeries(t,e=!0){if(this.apexCharts)try{await this.apexCharts.updateSeries(t,e),this.hasError=!1,this.errorMessage=""}catch(i){throw console.error("uk-chart: Failed to update series:",i),this.hasError=!0,this.errorMessage=i instanceof Error?i.message:"Unknown error",i}else throw new Error("Chart not initialized")}getChartInstance(){return this.apexCharts}},M([u({type:Boolean})],o.Chart.prototype,"loading",2),M([u({type:String})],o.Chart.prototype,"width",2),M([u({type:String})],o.Chart.prototype,"height",2),M([u({type:String})],o.Chart.prototype,"aria-label",2),M([m()],o.Chart.prototype,"hasError",2),M([m()],o.Chart.prototype,"errorMessage",2),o.Chart=M([k("uk-chart")],o.Chart),Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),o})({},Lit,Lucide,ApexCharts);
