var __COMPONENTS__=(function(l,d,Zi,G,Xi,Dn){"use strict";function xn(r){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const e in r)if(e!=="default"){const i=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,i.get?i:{enumerable:!0,get:()=>r[e]})}}return t.default=r,Object.freeze(t)}const Mn=xn(Xi);const w=r=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(r,t)})):customElements.define(r,t)};const Ct=globalThis,Gt=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qi=Symbol(),ts=new WeakMap;let Pn=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qi)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Gt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ts.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ts.set(e,t))}return t}toString(){return this.cssText}};const Ln=r=>new Pn(typeof r=="string"?r:r+"",void 0,Qi),qn=(r,t)=>{if(Gt)r.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const i=document.createElement("style"),s=Ct.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},es=Gt?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ln(e)})(r):r;const{is:Rn,defineProperty:jn,getOwnPropertyDescriptor:Hn,getOwnPropertyNames:Un,getOwnPropertySymbols:Vn,getPrototypeOf:Nn}=Object,It=globalThis,is=It.trustedTypes,Bn=is?is.emptyScript:"",Fn=It.reactiveElementPolyfillSupport,ht=(r,t)=>r,At={toAttribute(r,t){switch(t){case Boolean:r=r?Bn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Wt=(r,t)=>!Rn(r,t),ss={attribute:!0,type:String,converter:At,reflect:!1,useDefault:!1,hasChanged:Wt};Symbol.metadata??=Symbol("metadata"),It.litPropertyMetadata??=new WeakMap;class ut extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ss){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&jn(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=Hn(this.prototype,t)??{get(){return this[e]},set(a){this[e]=a}};return{get:s,set(a){const o=s?.call(this);n?.call(this,a),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ss}static _$Ei(){if(this.hasOwnProperty(ht("elementProperties")))return;const t=Nn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ht("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ht("properties"))){const e=this.properties,i=[...Un(e),...Vn(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(es(s))}else t!==void 0&&e.push(es(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return qn(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ET(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:At).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:At;this._$Em=s;const o=a.fromAttribute(e,n.type);this[s]=o??this._$Ej?.get(s)??o,this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){const s=this.constructor,n=this[t];if(i??=s.getPropertyOptions(t),!((i.hasChanged??Wt)(n,e)||i.useDefault&&i.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(s._$Eu(t,i))))return;this.C(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:i,reflect:s,wrapped:n},a){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,a??e??this[t]),n!==!0||a!==void 0)||(this._$AL.has(t)||(this.hasUpdated||i||(e=void 0),this._$AL.set(t,e)),s===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i){const{wrapped:a}=n,o=this[s];a!==!0||this._$AL.has(s)||o===void 0||this.C(s,void 0,n,o)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((i=>i.hostUpdate?.())),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}}ut.elementStyles=[],ut.shadowRootOptions={mode:"open"},ut[ht("elementProperties")]=new Map,ut[ht("finalized")]=new Map,Fn?.({ReactiveElement:ut}),(It.reactiveElementVersions??=[]).push("2.1.1");const zn={attribute:!0,type:String,converter:At,reflect:!1,hasChanged:Wt},Kn=(r=zn,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),i==="setter"&&((r=Object.create(r)).wrapped=!0),n.set(e.name,r),i==="accessor"){const{name:a}=e;return{set(o){const h=t.get.call(this);t.set.call(this,o),this.requestUpdate(a,h,r)},init(o){return o!==void 0&&this.C(a,void 0,r,o),o}}}if(i==="setter"){const{name:a}=e;return function(o){const h=this[a];t.call(this,o),this.requestUpdate(a,h,r)}}throw Error("Unsupported decorator location: "+i)};function c(r){return(t,e)=>typeof e=="object"?Kn(r,t,e):((i,s,n)=>{const a=s.hasOwnProperty(n);return s.constructor.createProperty(n,i),a?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}function v(r){return c({...r,state:!0,attribute:!1})}const Yn=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);function Jt(r,t){return(e,i,s)=>{const n=a=>a.renderRoot?.querySelector(r)??null;return Yn(e,i,{get(){return n(this)}})}}const Zt=globalThis,Ot=Zt.trustedTypes,rs=Ot?Ot.createPolicy("lit-html",{createHTML:r=>r}):void 0,ns="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,as="?"+z,Gn=`<${as}>`,W=document,kt=()=>W.createComment(""),ct=r=>r===null||typeof r!="object"&&typeof r!="function",Xt=Array.isArray,Wn=r=>Xt(r)||typeof r?.[Symbol.iterator]=="function",Qt=`[ 	
\f\r]`,dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,os=/-->/g,ls=/>/g,J=RegExp(`>|${Qt}(?:([^\\s"'>=/]+)(${Qt}*=${Qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),hs=/'/g,us=/"/g,cs=/^(?:script|style|textarea|title)$/i,U=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),ds=new WeakMap,Z=W.createTreeWalker(W,129);function ps(r,t){if(!Xt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return rs!==void 0?rs.createHTML(t):t}const Jn=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",a=dt;for(let o=0;o<e;o++){const h=r[o];let u,f,p=-1,g=0;for(;g<h.length&&(a.lastIndex=g,f=a.exec(h),f!==null);)g=a.lastIndex,a===dt?f[1]==="!--"?a=os:f[1]!==void 0?a=ls:f[2]!==void 0?(cs.test(f[2])&&(s=RegExp("</"+f[2],"g")),a=J):f[3]!==void 0&&(a=J):a===J?f[0]===">"?(a=s??dt,p=-1):f[1]===void 0?p=-2:(p=a.lastIndex-f[2].length,u=f[1],a=f[3]===void 0?J:f[3]==='"'?us:hs):a===us||a===hs?a=J:a===os||a===ls?a=dt:(a=J,s=void 0);const $=a===J&&r[o+1].startsWith("/>")?" ":"";n+=a===dt?h+Gn:p>=0?(i.push(u),h.slice(0,p)+ns+h.slice(p)+z+$):h+z+(p===-2?o:$)}return[ps(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class pt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,a=0;const o=t.length-1,h=this.parts,[u,f]=Jn(t,e);if(this.el=pt.createElement(u,i),Z.currentNode=this.el.content,e===2||e===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(s=Z.nextNode())!==null&&h.length<o;){if(s.nodeType===1){if(s.hasAttributes())for(const p of s.getAttributeNames())if(p.endsWith(ns)){const g=f[a++],$=s.getAttribute(p).split(z),m=/([.?@])?(.*)/.exec(g);h.push({type:1,index:n,name:m[2],strings:$,ctor:m[1]==="."?Xn:m[1]==="?"?Qn:m[1]==="@"?ta:Dt}),s.removeAttribute(p)}else p.startsWith(z)&&(h.push({type:6,index:n}),s.removeAttribute(p));if(cs.test(s.tagName)){const p=s.textContent.split(z),g=p.length-1;if(g>0){s.textContent=Ot?Ot.emptyScript:"";for(let $=0;$<g;$++)s.append(p[$],kt()),Z.nextNode(),h.push({type:2,index:++n});s.append(p[g],kt())}}}else if(s.nodeType===8)if(s.data===as)h.push({type:2,index:n});else{let p=-1;for(;(p=s.data.indexOf(z,p+1))!==-1;)h.push({type:7,index:n}),p+=z.length-1}n++}}static createElement(t,e){const i=W.createElement("template");return i.innerHTML=t,i}}function ot(r,t,e=r,i){if(t===U)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=ct(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=ot(r,s._$AS(r,t.values),s,i)),t}let Zn=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??W).importNode(e,!0);Z.currentNode=s;let n=Z.nextNode(),a=0,o=0,h=i[0];for(;h!==void 0;){if(a===h.index){let u;h.type===2?u=new ft(n,n.nextSibling,this,t):h.type===1?u=new h.ctor(n,h.name,h.strings,this,t):h.type===6&&(u=new ea(n,this,t)),this._$AV.push(u),h=i[++o]}a!==h?.index&&(n=Z.nextNode(),a++)}return Z.currentNode=W,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}};class ft{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),ct(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&ct(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=pt.createElement(ps(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new Zn(s,this),a=n.u(this.options);n.p(e),this.T(a),this._$AH=n}}_$AC(t){let e=ds.get(t.strings);return e===void 0&&ds.set(t.strings,e=new pt(t)),e}k(t){Xt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new ft(this.O(kt()),this.O(kt()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=S}_$AI(t,e=this,i,s){const n=this.strings;let a=!1;if(n===void 0)t=ot(this,t,e,0),a=!ct(t)||t!==this._$AH&&t!==U,a&&(this._$AH=t);else{const o=t;let h,u;for(t=n[0],h=0;h<n.length-1;h++)u=ot(this,o[i+h],e,h),u===U&&(u=this._$AH[h]),a||=!ct(u)||u!==this._$AH[h],u===S?t=S:t!==S&&(t+=(u??"")+n[h+1]),this._$AH[h]=u}a&&!s&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Xn extends Dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}}class Qn extends Dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}}class ta extends Dt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=ot(this,t,e,0)??S)===U)return;const i=this._$AH,s=t===S&&i!==S||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==S&&(i===S||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ea{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const ia={I:ft},sa=Zt.litHtmlPolyfillSupport;sa?.(pt,ft),(Zt.litHtmlVersions??=[]).push("3.3.1");const xt={ATTRIBUTE:1,CHILD:2},Mt=r=>(...t)=>({_$litDirective$:r,values:t});let Pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};let te=class extends Pt{constructor(t){if(super(t),this.it=S,t.type!==xt.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===S||t==null)return this._t=void 0,this.it=t;if(t===U)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};te.directiveName="unsafeHTML",te.resultType=1;const L=Mt(te);function Lt(r,t=!1){if(t){if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),r}return r}if(r.startsWith("{"))try{return JSON.parse(r)}catch(e){return console.error("Error parsing JSON:",r,e),{}}if(r.replace(/\\:/g,"").includes(":"))try{const e={};return fs(r.replace(/[;\s]+$/,""),";").forEach(s=>{const n=fs(s.trim(),":");if(n.length>=2){const a=n[0].trim(),o=n.slice(1).join(":").trim();a&&(e[a]=gs(o))}}),e}catch(e){return console.error("Error parsing key-value pairs:",r,e),{}}return gs(r)}function fs(r,t){const e=[];let i="",s=0;for(;s<r.length;)r[s]==="\\"&&s+1<r.length&&r[s+1]===t?(i+="\\"+t,s+=2):r[s]===t?(e.push(i),i="",s++):(i+=r[s],s++);return e.push(i),e}function gs(r){return r.replace(/\\:/g,":").replace(/\\;/g,";")}function ra(r){const t={},e=(s,n=[])=>{const a=n.length>0?{keywords:n}:{};return Object.keys(s.dataset).forEach(o=>{if(o==="keywords"){const h=s.dataset.keywords.split(",").map(u=>u.trim()).filter(u=>u.length>0);a.keywords=n.length>0?[...n,...h]:h}else a[o]=s.dataset[o]}),a},i=(s,n,a,o=!1)=>{const h=a.hasAttribute("value")?a.getAttribute("value"):a.textContent.trim(),u=e(a,[h]);t[s]||(t[s]={text:n,options:[]}),t[s].options.push({group:s,value:h,text:a.textContent.trim(),disabled:o||a.disabled,selected:a.hasAttribute("selected"),data:u})};return Array.from(r.children).forEach(s=>{if(s.nodeName==="OPTGROUP"){const n=s,a=n.dataset.key||n.getAttribute("label"),o=n.getAttribute("label").trim(),h=e(n);Array.from(n.children).forEach(u=>{u.nodeName==="OPTION"&&i(a,o,u,n.disabled)}),Object.keys(h).length>0&&(t[a]||(t[a]={text:o,options:[]}),t[a].data=h)}else s.nodeName==="OPTION"&&i("__","__",s)}),t}var na=Object.defineProperty,q=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&na(t,e,s),s};let qt=null,$s=!1;class b extends d.LitElement{constructor(){super(...arguments),this.cls="",this.stl="",this.i18n="",this["force-prevent-rerender"]=!1,this.$i18n={},this.$cls={},this.$stl={},this.$config={},this.$i=new Map,this.$template="",this.$data={},this.isRendered=!1,this.HTMLScript=null,this.HTMLIconContainer=null,this.HTMLTemplateContainer=null,this.HTMLDataSource=null,this.configObserver=null,this.dataSourceObserver=null,this["cls-default-element"]="host-inner",this["stl-default-element"]="host-inner"}get $normalizedI18n(){const t={};return Object.keys(this.$i18n).forEach(e=>{const i=this.$i18n[e];t[e]=i.includes(",")?i.split(",").map(s=>s.trim()):i}),t}$icons(t){return this.$i.get(t)}getI18nText(t,e={},i){let s=this.$i18n[t];if(!s){const n=this.tagName.toLowerCase(),a=this.$i18n[n];typeof a=="object"&&a!==null&&t in a&&(s=a[t])}return s||(s=e[t]||""),i!==void 0&&(typeof i=="number"?s=s.replace("{n}",String(i)):Object.keys(i).forEach(n=>{const a=i[n];s=s.replace(new RegExp(`\\{${n}\\}`,"g"),String(a))})),s}initializeCls(){if(this.cls){const t=Lt(this.cls);typeof t=="string"?this.$cls[this["cls-default-element"]]=t:Object.keys(t).forEach(e=>{this.$cls[e]=t[e]})}}initializeStl(){if(this.stl){const t=Lt(this.stl);typeof t=="string"?this.$stl[this["stl-default-element"]]=t:Object.keys(t).forEach(e=>{this.$stl[e]=t[e]})}}initializeGI18n(){if($s)return;$s=!0;const t=document.getElementById("fr-i18n");if(t&&t.textContent)try{qt=JSON.parse(t.textContent)}catch(e){console.error('Failed to parse global i18n from <script id="fr-i18n">.',e),qt={}}else qt={}}initializeI18n(){this.initializeGI18n();const t=this.i18n?Lt(this.i18n):{};typeof t=="object"&&t!==null&&(this.$i18n=Object.assign({},qt,t))}initializeConfig(){this.HTMLScript=this.querySelector('script[data-fn="config"][type="application/json"]')}initializeIcons(){this.HTMLIconContainer=this.querySelector('template[data-fn="icons"]')}initializeTemplate(){this.HTMLTemplateContainer=this.querySelector('template[data-fn="template"]')}initializeDataSource(){this.HTMLDataSource=this.querySelector('select[data-fn="data-source"]')}parseIcons(){if(!this.HTMLIconContainer)return;this.HTMLIconContainer.querySelectorAll("[data-key]").forEach(e=>{const i=e.getAttribute("data-key");if(i){const s=e.cloneNode(!0);s.removeAttribute("data-key");const n=s.outerHTML;this.$i.set(i,d.html`${L(n)}`)}})}parseTemplate(){this.HTMLTemplateContainer&&(this.$template=this.HTMLTemplateContainer.innerHTML.trim())}parseConfig(){if(this.HTMLScript)try{const t=this.HTMLScript.textContent;if(this.$config=t?JSON.parse(t):{},this.$config&&typeof this.$config=="object"){if("i18n"in this.$config){const e=this.$config.i18n;typeof e=="object"&&e!==null&&(this.$i18n={...this.$i18n,...e})}if("cls"in this.$config){const e=this.$config.cls;typeof e=="string"?this.$cls[this["cls-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$cls={...this.$cls,...e})}if("stl"in this.$config){const e=this.$config.stl;typeof e=="string"?this.$stl[this["stl-default-element"]]=e:typeof e=="object"&&e!==null&&(this.$stl={...this.$stl,...e})}}}catch(t){console.warn(`${this.tagName.toLowerCase()}: Failed to parse config JSON:`,t),this.$config={}}}parseDataSource(){this.HTMLDataSource&&(this.$data=ra(this.HTMLDataSource))}initializeConfigObserver(){!this.HTMLScript||!this.HTMLScript.hasAttribute("data-reactive")||(this.configObserver=new MutationObserver(()=>{this.parseConfig(),this.onConfigChanged()}),this.configObserver.observe(this.HTMLScript,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}initializeDataSourceObserver(){!this.HTMLDataSource||!this.HTMLDataSource.hasAttribute("data-reactive")||(this.dataSourceObserver=new MutationObserver(()=>{this.parseDataSource(),this.onDataSourceChanged()}),this.dataSourceObserver.observe(this.HTMLDataSource,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))}onConfigChanged(){}onDataSourceChanged(){}connectedCallback(){super.connectedCallback(),this["force-prevent-rerender"]&&this.querySelector("[data-host-inner]")&&(this.isRendered=!0),this.initializeI18n(),this.initializeCls(),this.initializeStl(),this.initializeConfig(),this.initializeIcons(),this.initializeTemplate(),this.initializeDataSource(),this.HTMLScript&&(this.parseConfig(),this.initializeConfigObserver()),this.HTMLIconContainer&&this.parseIcons(),this.HTMLTemplateContainer&&this.parseTemplate(),this.HTMLDataSource&&(this.parseDataSource(),this.initializeDataSourceObserver())}disconnectedCallback(){super.disconnectedCallback(),this.configObserver&&(this.configObserver.disconnect(),this.configObserver=null),this.dataSourceObserver&&(this.dataSourceObserver.disconnect(),this.dataSourceObserver=null)}shouldUpdate(t){return this["force-prevent-rerender"]&&this.isRendered?!1:super.shouldUpdate(t)}updated(t){super.updated(t),this.isRendered||(this.isRendered=!0)}createRenderRoot(){return this}}q([c({type:String})],b.prototype,"cls"),q([c({type:String})],b.prototype,"stl"),q([c({type:String})],b.prototype,"i18n"),q([c({type:Boolean})],b.prototype,"force-prevent-rerender"),q([v()],b.prototype,"$i18n"),q([v()],b.prototype,"$cls"),q([v()],b.prototype,"$stl"),q([v()],b.prototype,"$config"),q([v()],b.prototype,"$i"),q([v()],b.prototype,"$template"),q([v()],b.prototype,"$data");var aa=Object.defineProperty,oa=Object.getOwnPropertyDescriptor,ms=(r,t,e,i)=>{for(var s=i>1?void 0:i?oa(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&aa(t,e,s),s};l.Accordion=class extends b{constructor(){super(...arguments),this.collapsible="single"}get items(){return Array.from(this.querySelectorAll(":scope > fr-accordion-item"))}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-toggle-request",this.handleToggleRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-toggle-request",this.handleToggleRequest)}handleToggleRequest(t){t.stopPropagation();const e=t.detail.item,i=this.items.filter(s=>s.open);this.collapsible==="single"?this.items.forEach(s=>{s===e?s.toggle(!s.open):s.open&&s.toggle(!1)}):this.collapsible==="none"?(!e.open||i.length>1)&&e.toggle():e.toggle()}render(){return d.nothing}},ms([c({type:String})],l.Accordion.prototype,"collapsible",2),l.Accordion=ms([w("fr-accordion")],l.Accordion);var la=Object.defineProperty,ha=Object.getOwnPropertyDescriptor,ee=(r,t,e,i)=>{for(var s=i>1?void 0:i?ha(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&la(t,e,s),s};let ua=0;l.AccordionItem=class extends b{constructor(){super(...arguments),this.open=!1,this.iid=`fr-accordion-item-${++ua}`}get accordionItemTitle(){return this.querySelector("fr-accordion-item-title")}get accordionItemContent(){return this.querySelector("fr-accordion-item-content")}get allItems(){const t=this.parentElement;return t?Array.from(t.querySelectorAll(":scope > fr-accordion-item")):[]}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-title-click",this.handleTitleClick),this.addEventListener("fr-navigation-key",this.handleNavigationKey),this.open&&requestAnimationFrame(()=>{this.updateChildrenAria()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-title-click",this.handleTitleClick),this.removeEventListener("fr-navigation-key",this.handleNavigationKey)}handleTitleClick(){this.dispatchEvent(new CustomEvent("fr-toggle-request",{bubbles:!0,composed:!0,detail:{item:this}}))}handleNavigationKey(t){const{key:e,originalEvent:i}=t.detail,s=this.allItems,n=s.indexOf(this);if(n!==-1)switch(e){case"ArrowDown":case"ArrowRight":i.preventDefault();const a=(n+1)%s.length;s[a]?.focusTitle();break;case"ArrowUp":case"ArrowLeft":i.preventDefault();const o=n===0?s.length-1:n-1;s[o]?.focusTitle();break;case"Home":i.preventDefault(),s[0]?.focusTitle();break;case"End":i.preventDefault(),s[s.length-1]?.focusTitle();break}}focusTitle(){(this.accordionItemTitle?.querySelector("[data-accordion-trigger]")).focus()}updateChildrenAria(){this.accordionItemTitle&&this.accordionItemTitle.updateAria(this.open,`${this.iid}-content`),this.accordionItemContent&&this.accordionItemContent.updateAria(`${this.iid}-title`,this.open)}toggle(t){const e=t===void 0?!this.open:t;if(e===this.open)return;const i=e?"beforeShow":"beforeHide",s=new CustomEvent(i,{bubbles:!0,composed:!0,cancelable:!0,detail:{item:this}});this.dispatchEvent(s),!s.defaultPrevented&&(this.open=e)}updated(t){super.updated(t),t.has("open")&&(this.updateChildrenAria(),this.dispatchEvent(new CustomEvent(this.open?"show":"hide",{bubbles:!0,composed:!0,detail:{item:this}})))}render(){return d.nothing}},ee([c({type:Boolean,reflect:!0})],l.AccordionItem.prototype,"open",2),ee([v()],l.AccordionItem.prototype,"iid",2),l.AccordionItem=ee([w("fr-accordion-item")],l.AccordionItem);var ca=Object.defineProperty,da=Object.getOwnPropertyDescriptor,gt=(r,t,e,i)=>{for(var s=i>1?void 0:i?da(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ca(t,e,s),s};l.AccordionItemTitle=class extends b{constructor(){super(...arguments),this.isExpanded=!1,this.controlsId="",this.$cls={container:"",trigger:""},this.$stl={container:"",trigger:""},this["cls-default-element"]="trigger",this["stl-default-element"]="trigger"}handleClick(){this.dispatchEvent(new CustomEvent("fr-title-click",{bubbles:!0,composed:!0}))}handleKeydown(t){if(t.key==="Enter"||t.key===" "){t.preventDefault(),this.handleClick();return}["ArrowDown","ArrowRight","ArrowUp","ArrowLeft","Home","End"].includes(t.key)&&this.dispatchEvent(new CustomEvent("fr-navigation-key",{bubbles:!0,composed:!0,detail:{key:t.key,originalEvent:t}}))}updateAria(t,e){this.isExpanded=t,this.controlsId=e}focus(){this.querySelector("button[data-host-inner]")?.focus()}render(){return d.html`
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
          ${this.$template?L(this.$template):d.nothing}
        </button>
      </div>
    `}},gt([v()],l.AccordionItemTitle.prototype,"isExpanded",2),gt([v()],l.AccordionItemTitle.prototype,"controlsId",2),gt([v()],l.AccordionItemTitle.prototype,"$cls",2),gt([v()],l.AccordionItemTitle.prototype,"$stl",2),l.AccordionItemTitle=gt([w("fr-accordion-item-title")],l.AccordionItemTitle);var pa=Object.defineProperty,fa=Object.getOwnPropertyDescriptor,ie=(r,t,e,i)=>{for(var s=i>1?void 0:i?fa(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&pa(t,e,s),s};l.AccordionItemContent=class extends b{constructor(){super(...arguments),this.labelledById="",this.isOpen=!1,this.contentElement=null,this.currentAnimation=null}updateAria(t,e){this.labelledById=t,this.isOpen!==e&&(this.isOpen=e,this.animateContent(e))}animateContent(t){if(this.contentElement)if(this.currentAnimation&&this.currentAnimation.pause(),t){this.contentElement.style.display="block",this.contentElement.style.overflow="hidden";const e=this.contentElement.scrollHeight;this.contentElement.style.height="0px",this.contentElement.style.opacity="0",this.currentAnimation=Zi.animate(this.contentElement,{height:e,opacity:1,duration:400,ease:"outQuint",onComplete:()=>{this.contentElement&&(this.contentElement.style.height="auto",this.contentElement.style.overflow="visible"),this.currentAnimation=null}})}else{const e=this.contentElement.offsetHeight;this.contentElement.style.height=`${e}px`,this.contentElement.style.overflow="hidden",this.contentElement.offsetHeight,this.currentAnimation=Zi.animate(this.contentElement,{height:0,opacity:0,duration:400,ease:"inOutQuint",onComplete:()=>{this.contentElement&&(this.contentElement.style.height="0px",this.contentElement.style.opacity="0"),this.currentAnimation=null}})}}firstUpdated(){this.contentElement=this.querySelector("[data-host-inner]"),this.contentElement&&(this.isOpen||(this.contentElement.style.height="0px",this.contentElement.style.opacity="0",this.contentElement.style.overflow="hidden"))}disconnectedCallback(){super.disconnectedCallback(),this.currentAnimation&&(this.currentAnimation.pause(),this.currentAnimation=null)}render(){return d.html`
      <div
        id="${this.parentElement?.id?`${this.parentElement.id}-content`:""}"
        class="${this.$cls["host-inner"]||""}"
        style="${this.$stl["host-inner"]||""}"
        role="region"
        aria-labelledby="${this.labelledById}"
        aria-hidden="${!this.isOpen}"
        data-host-inner
      >
        ${this.$template?L(this.$template):d.nothing}
      </div>
    `}},ie([v()],l.AccordionItemContent.prototype,"labelledById",2),ie([v()],l.AccordionItemContent.prototype,"isOpen",2),l.AccordionItemContent=ie([w("fr-accordion-item-content")],l.AccordionItemContent);var Rt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vs(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var se,bs;function ga(){if(bs)return se;bs=1;function r(){this.__data__=[],this.size=0}return se=r,se}var re,ys;function jt(){if(ys)return re;ys=1;function r(t,e){return t===e||t!==t&&e!==e}return re=r,re}var ne,_s;function Ht(){if(_s)return ne;_s=1;var r=jt();function t(e,i){for(var s=e.length;s--;)if(r(e[s][0],i))return s;return-1}return ne=t,ne}var ae,ws;function $a(){if(ws)return ae;ws=1;var r=Ht(),t=Array.prototype,e=t.splice;function i(s){var n=this.__data__,a=r(n,s);if(a<0)return!1;var o=n.length-1;return a==o?n.pop():e.call(n,a,1),--this.size,!0}return ae=i,ae}var oe,Es;function ma(){if(Es)return oe;Es=1;var r=Ht();function t(e){var i=this.__data__,s=r(i,e);return s<0?void 0:i[s][1]}return oe=t,oe}var le,Ts;function va(){if(Ts)return le;Ts=1;var r=Ht();function t(e){return r(this.__data__,e)>-1}return le=t,le}var he,Ss;function ba(){if(Ss)return he;Ss=1;var r=Ht();function t(e,i){var s=this.__data__,n=r(s,e);return n<0?(++this.size,s.push([e,i])):s[n][1]=i,this}return he=t,he}var ue,Cs;function Ut(){if(Cs)return ue;Cs=1;var r=ga(),t=$a(),e=ma(),i=va(),s=ba();function n(a){var o=-1,h=a==null?0:a.length;for(this.clear();++o<h;){var u=a[o];this.set(u[0],u[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,ue=n,ue}var ce,Is;function ya(){if(Is)return ce;Is=1;var r=Ut();function t(){this.__data__=new r,this.size=0}return ce=t,ce}var de,As;function _a(){if(As)return de;As=1;function r(t){var e=this.__data__,i=e.delete(t);return this.size=e.size,i}return de=r,de}var pe,Os;function wa(){if(Os)return pe;Os=1;function r(t){return this.__data__.get(t)}return pe=r,pe}var fe,ks;function Ea(){if(ks)return fe;ks=1;function r(t){return this.__data__.has(t)}return fe=r,fe}var ge,Ds;function xs(){if(Ds)return ge;Ds=1;var r=typeof Rt=="object"&&Rt&&Rt.Object===Object&&Rt;return ge=r,ge}var $e,Ms;function lt(){if(Ms)return $e;Ms=1;var r=xs(),t=typeof self=="object"&&self&&self.Object===Object&&self,e=r||t||Function("return this")();return $e=e,$e}var me,Ps;function Ls(){if(Ps)return me;Ps=1;var r=lt(),t=r.Symbol;return me=t,me}var ve,qs;function Ta(){if(qs)return ve;qs=1;var r=Ls(),t=Object.prototype,e=t.hasOwnProperty,i=t.toString,s=r?r.toStringTag:void 0;function n(a){var o=e.call(a,s),h=a[s];try{a[s]=void 0;var u=!0}catch{}var f=i.call(a);return u&&(o?a[s]=h:delete a[s]),f}return ve=n,ve}var be,Rs;function Sa(){if(Rs)return be;Rs=1;var r=Object.prototype,t=r.toString;function e(i){return t.call(i)}return be=e,be}var ye,js;function Vt(){if(js)return ye;js=1;var r=Ls(),t=Ta(),e=Sa(),i="[object Null]",s="[object Undefined]",n=r?r.toStringTag:void 0;function a(o){return o==null?o===void 0?s:i:n&&n in Object(o)?t(o):e(o)}return ye=a,ye}var _e,Hs;function X(){if(Hs)return _e;Hs=1;function r(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}return _e=r,_e}var we,Us;function Ee(){if(Us)return we;Us=1;var r=Vt(),t=X(),e="[object AsyncFunction]",i="[object Function]",s="[object GeneratorFunction]",n="[object Proxy]";function a(o){if(!t(o))return!1;var h=r(o);return h==i||h==s||h==e||h==n}return we=a,we}var Te,Vs;function Ca(){if(Vs)return Te;Vs=1;var r=lt(),t=r["__core-js_shared__"];return Te=t,Te}var Se,Ns;function Ia(){if(Ns)return Se;Ns=1;var r=Ca(),t=(function(){var i=/[^.]+$/.exec(r&&r.keys&&r.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""})();function e(i){return!!t&&t in i}return Se=e,Se}var Ce,Bs;function Aa(){if(Bs)return Ce;Bs=1;var r=Function.prototype,t=r.toString;function e(i){if(i!=null){try{return t.call(i)}catch{}try{return i+""}catch{}}return""}return Ce=e,Ce}var Ie,Fs;function Oa(){if(Fs)return Ie;Fs=1;var r=Ee(),t=Ia(),e=X(),i=Aa(),s=/[\\^$.*+?()[\]{}|]/g,n=/^\[object .+?Constructor\]$/,a=Function.prototype,o=Object.prototype,h=a.toString,u=o.hasOwnProperty,f=RegExp("^"+h.call(u).replace(s,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function p(g){if(!e(g)||t(g))return!1;var $=r(g)?f:n;return $.test(i(g))}return Ie=p,Ie}var Ae,zs;function ka(){if(zs)return Ae;zs=1;function r(t,e){return t?.[e]}return Ae=r,Ae}var Oe,Ks;function ke(){if(Ks)return Oe;Ks=1;var r=Oa(),t=ka();function e(i,s){var n=t(i,s);return r(n)?n:void 0}return Oe=e,Oe}var De,Ys;function Gs(){if(Ys)return De;Ys=1;var r=ke(),t=lt(),e=r(t,"Map");return De=e,De}var xe,Ws;function Nt(){if(Ws)return xe;Ws=1;var r=ke(),t=r(Object,"create");return xe=t,xe}var Me,Js;function Da(){if(Js)return Me;Js=1;var r=Nt();function t(){this.__data__=r?r(null):{},this.size=0}return Me=t,Me}var Pe,Zs;function xa(){if(Zs)return Pe;Zs=1;function r(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}return Pe=r,Pe}var Le,Xs;function Ma(){if(Xs)return Le;Xs=1;var r=Nt(),t="__lodash_hash_undefined__",e=Object.prototype,i=e.hasOwnProperty;function s(n){var a=this.__data__;if(r){var o=a[n];return o===t?void 0:o}return i.call(a,n)?a[n]:void 0}return Le=s,Le}var qe,Qs;function Pa(){if(Qs)return qe;Qs=1;var r=Nt(),t=Object.prototype,e=t.hasOwnProperty;function i(s){var n=this.__data__;return r?n[s]!==void 0:e.call(n,s)}return qe=i,qe}var Re,tr;function La(){if(tr)return Re;tr=1;var r=Nt(),t="__lodash_hash_undefined__";function e(i,s){var n=this.__data__;return this.size+=this.has(i)?0:1,n[i]=r&&s===void 0?t:s,this}return Re=e,Re}var je,er;function qa(){if(er)return je;er=1;var r=Da(),t=xa(),e=Ma(),i=Pa(),s=La();function n(a){var o=-1,h=a==null?0:a.length;for(this.clear();++o<h;){var u=a[o];this.set(u[0],u[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,je=n,je}var He,ir;function Ra(){if(ir)return He;ir=1;var r=qa(),t=Ut(),e=Gs();function i(){this.size=0,this.__data__={hash:new r,map:new(e||t),string:new r}}return He=i,He}var Ue,sr;function ja(){if(sr)return Ue;sr=1;function r(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}return Ue=r,Ue}var Ve,rr;function Bt(){if(rr)return Ve;rr=1;var r=ja();function t(e,i){var s=e.__data__;return r(i)?s[typeof i=="string"?"string":"hash"]:s.map}return Ve=t,Ve}var Ne,nr;function Ha(){if(nr)return Ne;nr=1;var r=Bt();function t(e){var i=r(this,e).delete(e);return this.size-=i?1:0,i}return Ne=t,Ne}var Be,ar;function Ua(){if(ar)return Be;ar=1;var r=Bt();function t(e){return r(this,e).get(e)}return Be=t,Be}var Fe,or;function Va(){if(or)return Fe;or=1;var r=Bt();function t(e){return r(this,e).has(e)}return Fe=t,Fe}var ze,lr;function Na(){if(lr)return ze;lr=1;var r=Bt();function t(e,i){var s=r(this,e),n=s.size;return s.set(e,i),this.size+=s.size==n?0:1,this}return ze=t,ze}var Ke,hr;function Ba(){if(hr)return Ke;hr=1;var r=Ra(),t=Ha(),e=Ua(),i=Va(),s=Na();function n(a){var o=-1,h=a==null?0:a.length;for(this.clear();++o<h;){var u=a[o];this.set(u[0],u[1])}}return n.prototype.clear=r,n.prototype.delete=t,n.prototype.get=e,n.prototype.has=i,n.prototype.set=s,Ke=n,Ke}var Ye,ur;function Fa(){if(ur)return Ye;ur=1;var r=Ut(),t=Gs(),e=Ba(),i=200;function s(n,a){var o=this.__data__;if(o instanceof r){var h=o.__data__;if(!t||h.length<i-1)return h.push([n,a]),this.size=++o.size,this;o=this.__data__=new e(h)}return o.set(n,a),this.size=o.size,this}return Ye=s,Ye}var Ge,cr;function za(){if(cr)return Ge;cr=1;var r=Ut(),t=ya(),e=_a(),i=wa(),s=Ea(),n=Fa();function a(o){var h=this.__data__=new r(o);this.size=h.size}return a.prototype.clear=t,a.prototype.delete=e,a.prototype.get=i,a.prototype.has=s,a.prototype.set=n,Ge=a,Ge}var We,dr;function pr(){if(dr)return We;dr=1;var r=ke(),t=(function(){try{var e=r(Object,"defineProperty");return e({},"",{}),e}catch{}})();return We=t,We}var Je,fr;function Ze(){if(fr)return Je;fr=1;var r=pr();function t(e,i,s){i=="__proto__"&&r?r(e,i,{configurable:!0,enumerable:!0,value:s,writable:!0}):e[i]=s}return Je=t,Je}var Xe,gr;function $r(){if(gr)return Xe;gr=1;var r=Ze(),t=jt();function e(i,s,n){(n!==void 0&&!t(i[s],n)||n===void 0&&!(s in i))&&r(i,s,n)}return Xe=e,Xe}var Qe,mr;function Ka(){if(mr)return Qe;mr=1;function r(t){return function(e,i,s){for(var n=-1,a=Object(e),o=s(e),h=o.length;h--;){var u=o[t?h:++n];if(i(a[u],u,a)===!1)break}return e}}return Qe=r,Qe}var ti,vr;function Ya(){if(vr)return ti;vr=1;var r=Ka(),t=r();return ti=t,ti}var $t={exports:{}};$t.exports;var br;function Ga(){return br||(br=1,(function(r,t){var e=lt(),i=t&&!t.nodeType&&t,s=i&&!0&&r&&!r.nodeType&&r,n=s&&s.exports===i,a=n?e.Buffer:void 0,o=a?a.allocUnsafe:void 0;function h(u,f){if(f)return u.slice();var p=u.length,g=o?o(p):new u.constructor(p);return u.copy(g),g}r.exports=h})($t,$t.exports)),$t.exports}var ei,yr;function Wa(){if(yr)return ei;yr=1;var r=lt(),t=r.Uint8Array;return ei=t,ei}var ii,_r;function Ja(){if(_r)return ii;_r=1;var r=Wa();function t(e){var i=new e.constructor(e.byteLength);return new r(i).set(new r(e)),i}return ii=t,ii}var si,wr;function Za(){if(wr)return si;wr=1;var r=Ja();function t(e,i){var s=i?r(e.buffer):e.buffer;return new e.constructor(s,e.byteOffset,e.length)}return si=t,si}var ri,Er;function Xa(){if(Er)return ri;Er=1;function r(t,e){var i=-1,s=t.length;for(e||(e=Array(s));++i<s;)e[i]=t[i];return e}return ri=r,ri}var ni,Tr;function Qa(){if(Tr)return ni;Tr=1;var r=X(),t=Object.create,e=(function(){function i(){}return function(s){if(!r(s))return{};if(t)return t(s);i.prototype=s;var n=new i;return i.prototype=void 0,n}})();return ni=e,ni}var ai,Sr;function to(){if(Sr)return ai;Sr=1;function r(t,e){return function(i){return t(e(i))}}return ai=r,ai}var oi,Cr;function Ir(){if(Cr)return oi;Cr=1;var r=to(),t=r(Object.getPrototypeOf,Object);return oi=t,oi}var li,Ar;function Or(){if(Ar)return li;Ar=1;var r=Object.prototype;function t(e){var i=e&&e.constructor,s=typeof i=="function"&&i.prototype||r;return e===s}return li=t,li}var hi,kr;function eo(){if(kr)return hi;kr=1;var r=Qa(),t=Ir(),e=Or();function i(s){return typeof s.constructor=="function"&&!e(s)?r(t(s)):{}}return hi=i,hi}var ui,Dr;function mt(){if(Dr)return ui;Dr=1;function r(t){return t!=null&&typeof t=="object"}return ui=r,ui}var ci,xr;function io(){if(xr)return ci;xr=1;var r=Vt(),t=mt(),e="[object Arguments]";function i(s){return t(s)&&r(s)==e}return ci=i,ci}var di,Mr;function Pr(){if(Mr)return di;Mr=1;var r=io(),t=mt(),e=Object.prototype,i=e.hasOwnProperty,s=e.propertyIsEnumerable,n=r((function(){return arguments})())?r:function(a){return t(a)&&i.call(a,"callee")&&!s.call(a,"callee")};return di=n,di}var pi,Lr;function qr(){if(Lr)return pi;Lr=1;var r=Array.isArray;return pi=r,pi}var fi,Rr;function jr(){if(Rr)return fi;Rr=1;var r=9007199254740991;function t(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=r}return fi=t,fi}var gi,Hr;function $i(){if(Hr)return gi;Hr=1;var r=Ee(),t=jr();function e(i){return i!=null&&t(i.length)&&!r(i)}return gi=e,gi}var mi,Ur;function so(){if(Ur)return mi;Ur=1;var r=$i(),t=mt();function e(i){return t(i)&&r(i)}return mi=e,mi}var vt={exports:{}},vi,Vr;function ro(){if(Vr)return vi;Vr=1;function r(){return!1}return vi=r,vi}vt.exports;var Nr;function Br(){return Nr||(Nr=1,(function(r,t){var e=lt(),i=ro(),s=t&&!t.nodeType&&t,n=s&&!0&&r&&!r.nodeType&&r,a=n&&n.exports===s,o=a?e.Buffer:void 0,h=o?o.isBuffer:void 0,u=h||i;r.exports=u})(vt,vt.exports)),vt.exports}var bi,Fr;function no(){if(Fr)return bi;Fr=1;var r=Vt(),t=Ir(),e=mt(),i="[object Object]",s=Function.prototype,n=Object.prototype,a=s.toString,o=n.hasOwnProperty,h=a.call(Object);function u(f){if(!e(f)||r(f)!=i)return!1;var p=t(f);if(p===null)return!0;var g=o.call(p,"constructor")&&p.constructor;return typeof g=="function"&&g instanceof g&&a.call(g)==h}return bi=u,bi}var yi,zr;function ao(){if(zr)return yi;zr=1;var r=Vt(),t=jr(),e=mt(),i="[object Arguments]",s="[object Array]",n="[object Boolean]",a="[object Date]",o="[object Error]",h="[object Function]",u="[object Map]",f="[object Number]",p="[object Object]",g="[object RegExp]",$="[object Set]",m="[object String]",_="[object WeakMap]",C="[object ArrayBuffer]",k="[object DataView]",T="[object Float32Array]",Y="[object Float64Array]",rt="[object Int8Array]",F="[object Int16Array]",nt="[object Int32Array]",P="[object Uint8Array]",I="[object Uint8ClampedArray]",Yt="[object Uint16Array]",A="[object Uint32Array]",y={};y[T]=y[Y]=y[rt]=y[F]=y[nt]=y[P]=y[I]=y[Yt]=y[A]=!0,y[i]=y[s]=y[C]=y[n]=y[k]=y[a]=y[o]=y[h]=y[u]=y[f]=y[p]=y[g]=y[$]=y[m]=y[_]=!1;function St(at){return e(at)&&t(at.length)&&!!y[r(at)]}return yi=St,yi}var _i,Kr;function oo(){if(Kr)return _i;Kr=1;function r(t){return function(e){return t(e)}}return _i=r,_i}var bt={exports:{}};bt.exports;var Yr;function lo(){return Yr||(Yr=1,(function(r,t){var e=xs(),i=t&&!t.nodeType&&t,s=i&&!0&&r&&!r.nodeType&&r,n=s&&s.exports===i,a=n&&e.process,o=(function(){try{var h=s&&s.require&&s.require("util").types;return h||a&&a.binding&&a.binding("util")}catch{}})();r.exports=o})(bt,bt.exports)),bt.exports}var wi,Gr;function Wr(){if(Gr)return wi;Gr=1;var r=ao(),t=oo(),e=lo(),i=e&&e.isTypedArray,s=i?t(i):r;return wi=s,wi}var Ei,Jr;function Zr(){if(Jr)return Ei;Jr=1;function r(t,e){if(!(e==="constructor"&&typeof t[e]=="function")&&e!="__proto__")return t[e]}return Ei=r,Ei}var Ti,Xr;function ho(){if(Xr)return Ti;Xr=1;var r=Ze(),t=jt(),e=Object.prototype,i=e.hasOwnProperty;function s(n,a,o){var h=n[a];(!(i.call(n,a)&&t(h,o))||o===void 0&&!(a in n))&&r(n,a,o)}return Ti=s,Ti}var Si,Qr;function uo(){if(Qr)return Si;Qr=1;var r=ho(),t=Ze();function e(i,s,n,a){var o=!n;n||(n={});for(var h=-1,u=s.length;++h<u;){var f=s[h],p=a?a(n[f],i[f],f,n,i):void 0;p===void 0&&(p=i[f]),o?t(n,f,p):r(n,f,p)}return n}return Si=e,Si}var Ci,tn;function co(){if(tn)return Ci;tn=1;function r(t,e){for(var i=-1,s=Array(t);++i<t;)s[i]=e(i);return s}return Ci=r,Ci}var Ii,en;function sn(){if(en)return Ii;en=1;var r=9007199254740991,t=/^(?:0|[1-9]\d*)$/;function e(i,s){var n=typeof i;return s=s??r,!!s&&(n=="number"||n!="symbol"&&t.test(i))&&i>-1&&i%1==0&&i<s}return Ii=e,Ii}var Ai,rn;function po(){if(rn)return Ai;rn=1;var r=co(),t=Pr(),e=qr(),i=Br(),s=sn(),n=Wr(),a=Object.prototype,o=a.hasOwnProperty;function h(u,f){var p=e(u),g=!p&&t(u),$=!p&&!g&&i(u),m=!p&&!g&&!$&&n(u),_=p||g||$||m,C=_?r(u.length,String):[],k=C.length;for(var T in u)(f||o.call(u,T))&&!(_&&(T=="length"||$&&(T=="offset"||T=="parent")||m&&(T=="buffer"||T=="byteLength"||T=="byteOffset")||s(T,k)))&&C.push(T);return C}return Ai=h,Ai}var Oi,nn;function fo(){if(nn)return Oi;nn=1;function r(t){var e=[];if(t!=null)for(var i in Object(t))e.push(i);return e}return Oi=r,Oi}var ki,an;function go(){if(an)return ki;an=1;var r=X(),t=Or(),e=fo(),i=Object.prototype,s=i.hasOwnProperty;function n(a){if(!r(a))return e(a);var o=t(a),h=[];for(var u in a)u=="constructor"&&(o||!s.call(a,u))||h.push(u);return h}return ki=n,ki}var Di,on;function ln(){if(on)return Di;on=1;var r=po(),t=go(),e=$i();function i(s){return e(s)?r(s,!0):t(s)}return Di=i,Di}var xi,hn;function $o(){if(hn)return xi;hn=1;var r=uo(),t=ln();function e(i){return r(i,t(i))}return xi=e,xi}var Mi,un;function mo(){if(un)return Mi;un=1;var r=$r(),t=Ga(),e=Za(),i=Xa(),s=eo(),n=Pr(),a=qr(),o=so(),h=Br(),u=Ee(),f=X(),p=no(),g=Wr(),$=Zr(),m=$o();function _(C,k,T,Y,rt,F,nt){var P=$(C,T),I=$(k,T),Yt=nt.get(I);if(Yt){r(C,T,Yt);return}var A=F?F(P,I,T+"",C,k,nt):void 0,y=A===void 0;if(y){var St=a(I),at=!St&&h(I),kn=!St&&!at&&g(I);A=I,St||at||kn?a(P)?A=P:o(P)?A=i(P):at?(y=!1,A=t(I,!0)):kn?(y=!1,A=e(I,!0)):A=[]:p(I)||n(I)?(A=P,n(P)?A=m(P):(!f(P)||u(P))&&(A=s(I))):y=!1}y&&(nt.set(I,A),rt(A,I,Y,F,nt),nt.delete(I)),r(C,T,A)}return Mi=_,Mi}var Pi,cn;function vo(){if(cn)return Pi;cn=1;var r=za(),t=$r(),e=Ya(),i=mo(),s=X(),n=ln(),a=Zr();function o(h,u,f,p,g){h!==u&&e(u,function($,m){if(g||(g=new r),s($))i(h,u,m,f,o,p,g);else{var _=p?p(a(h,m),$,m+"",h,u,g):void 0;_===void 0&&(_=$),t(h,m,_)}},n)}return Pi=o,Pi}var Li,dn;function pn(){if(dn)return Li;dn=1;function r(t){return t}return Li=r,Li}var qi,fn;function bo(){if(fn)return qi;fn=1;function r(t,e,i){switch(i.length){case 0:return t.call(e);case 1:return t.call(e,i[0]);case 2:return t.call(e,i[0],i[1]);case 3:return t.call(e,i[0],i[1],i[2])}return t.apply(e,i)}return qi=r,qi}var Ri,gn;function yo(){if(gn)return Ri;gn=1;var r=bo(),t=Math.max;function e(i,s,n){return s=t(s===void 0?i.length-1:s,0),function(){for(var a=arguments,o=-1,h=t(a.length-s,0),u=Array(h);++o<h;)u[o]=a[s+o];o=-1;for(var f=Array(s+1);++o<s;)f[o]=a[o];return f[s]=n(u),r(i,this,f)}}return Ri=e,Ri}var ji,$n;function _o(){if($n)return ji;$n=1;function r(t){return function(){return t}}return ji=r,ji}var Hi,mn;function wo(){if(mn)return Hi;mn=1;var r=_o(),t=pr(),e=pn(),i=t?function(s,n){return t(s,"toString",{configurable:!0,enumerable:!1,value:r(n),writable:!0})}:e;return Hi=i,Hi}var Ui,vn;function Eo(){if(vn)return Ui;vn=1;var r=800,t=16,e=Date.now;function i(s){var n=0,a=0;return function(){var o=e(),h=t-(o-a);if(a=o,h>0){if(++n>=r)return arguments[0]}else n=0;return s.apply(void 0,arguments)}}return Ui=i,Ui}var Vi,bn;function To(){if(bn)return Vi;bn=1;var r=wo(),t=Eo(),e=t(r);return Vi=e,Vi}var Ni,yn;function So(){if(yn)return Ni;yn=1;var r=pn(),t=yo(),e=To();function i(s,n){return e(t(s,n,r),s+"")}return Ni=i,Ni}var Bi,_n;function Co(){if(_n)return Bi;_n=1;var r=jt(),t=$i(),e=sn(),i=X();function s(n,a,o){if(!i(o))return!1;var h=typeof a;return(h=="number"?t(o)&&e(a,o.length):h=="string"&&a in o)?r(o[a],n):!1}return Bi=s,Bi}var Fi,wn;function Io(){if(wn)return Fi;wn=1;var r=So(),t=Co();function e(i){return r(function(s,n){var a=-1,o=n.length,h=o>1?n[o-1]:void 0,u=o>2?n[2]:void 0;for(h=i.length>3&&typeof h=="function"?(o--,h):void 0,u&&t(n[0],n[1],u)&&(h=o<3?void 0:h,o=1),s=Object(s);++a<o;){var f=n[a];f&&i(s,f,a,h)}return s})}return Fi=e,Fi}var zi,En;function Ao(){if(En)return zi;En=1;var r=vo(),t=Io(),e=t(function(i,s,n){r(i,s,n)});return zi=e,zi}var Oo=Ao();const ko=vs(Oo);var Do=Object.defineProperty,E=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Do(t,e,s),s};const Ft=r=>{var i;const t=(i=class extends r{constructor(){super(...arguments),this.toggleSelector="- *",this.trigger="click",this.disabled=!1,this.placement="bottom-start",this.offset=8,this.matchWidth=!1,this.arrow=!1,this.label="",this.describedby="",this.delayShow=0,this.delayHide=0,this.duration=200,this.closeOnOutsideClick=!0,this.closeOnEscape=!0,this.closeOnScroll=!1,this.focusTrap=!1,this.returnFocus=!0,this.isOpen=!1,this.$dropCls={drop:"",arrow:""},this.$dropStl={drop:"",arrow:""},this.stackIndex=0,this.handleToggleClick=n=>{this.disabled||(n.preventDefault(),n.stopPropagation(),this.toggle())},this.clearHideTimeout=()=>{clearTimeout(this.hideTimeout)},this.handleMouseEnter=()=>{this.disabled||(this.clearHideTimeout(),this.showTimeout=window.setTimeout(()=>{this.show()},this.delayShow))},this.handleMouseLeave=()=>{this.disabled||(clearTimeout(this.showTimeout),this.hideTimeout=window.setTimeout(()=>{this.hide()},this.delayHide))},this.handleKeyDown=n=>{this.disabled||((n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.toggle()),this.focusTrap&&this.isOpen&&n.key==="Tab"&&this.handleFocusTrap(n))},this.handleEscapeKey=n=>{if(n.key==="Escape"&&i.openDrops.length>0){const a=i.openDrops[i.openDrops.length-1];a===this&&(n.preventDefault(),a.hide())}},this.handleScroll=()=>{this.isOpen&&this.hide()},this.handleOutsideClick=n=>{if(i.openDrops.length===0||i.openDrops[i.openDrops.length-1]!==this)return;const a=n.target;i.openDrops.some(h=>h.isConnected&&(h.contains(a)||h.dropEl?.contains(a)||h.toggleEl?.contains(a)))||[...i.openDrops].reverse().forEach(u=>u.hide())},this.handleDropMouseEnter=()=>{this.clearHideTimeout()},this.handleDropMouseLeave=()=>{this.handleMouseLeave()}}get $floatingConfig(){return"floating"in this.$config&&typeof this.$config=="object"?this.$config.floating:{}}onDropOpen(){}onDropClose(){}onConfigChanged(){this.isOpen&&this.dropEl&&this.toggleEl&&this.updatePosition()}onDropPositioned(n){}connectedCallback(){super.connectedCallback(),requestAnimationFrame(()=>{this.initializeToggle(),this.setupEventListeners()})}disconnectedCallback(){super.disconnectedCallback(),this.cleanup(),this.removeFromStack()}updated(n){super.updated(n),n.has("disabled")&&(this.disabled&&(this.isOpen&&this.hide(),clearTimeout(this.showTimeout),clearTimeout(this.hideTimeout)),this.updateToggleDisabledState())}initializeToggle(){if(this.toggleSelector==="- *")this.toggleEl=this.previousElementSibling;else{const a=this.parentElement;a&&(this.toggleEl=a.querySelector(this.toggleSelector))}if(!this.toggleEl){console.warn("Droppable: Toggle element not found");return}const n=this.id||`drop-${Math.random().toString(36).substr(2,9)}`;this.id||(this.id=n),this.toggleEl.setAttribute("aria-haspopup","dialog"),this.toggleEl.setAttribute("aria-expanded","false"),this.toggleEl.setAttribute("aria-controls",n),!this.toggleEl.hasAttribute("tabindex")&&this.toggleEl.tagName!=="BUTTON"&&this.toggleEl.tagName!=="A"&&this.toggleEl.setAttribute("tabindex","0"),this.updateToggleDisabledState()}updateToggleDisabledState(){this.toggleEl&&(this.disabled?(this.toggleEl.setAttribute("aria-disabled","true"),this.toggleEl.tagName==="BUTTON"&&(this.toggleEl.disabled=!0)):(this.toggleEl.removeAttribute("aria-disabled"),this.toggleEl.tagName==="BUTTON"&&(this.toggleEl.disabled=!1)))}setupEventListeners(){if(!this.toggleEl)return;this.trigger.split(",").map(a=>a.trim()).forEach(a=>{switch(a){case"click":this.toggleEl.addEventListener("click",this.handleToggleClick);break;case"hover":this.toggleEl.addEventListener("mouseenter",this.handleMouseEnter),this.toggleEl.addEventListener("mouseleave",this.handleMouseLeave);break}}),this.toggleEl.addEventListener("keydown",this.handleKeyDown),this.closeOnOutsideClick&&document.addEventListener("mousedown",this.handleOutsideClick),this.closeOnEscape&&document.addEventListener("keydown",this.handleEscapeKey),this.closeOnScroll&&window.addEventListener("scroll",this.handleScroll,!0)}handleFocusTrap(n){if(!this.dropEl||(this.focusableElements||(this.focusableElements=Array.from(this.dropEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'))),this.focusableElements.length===0))return;const a=this.focusableElements[0],o=this.focusableElements[this.focusableElements.length-1];n.shiftKey?document.activeElement===a&&(n.preventDefault(),o.focus()):document.activeElement===o&&(n.preventDefault(),a.focus())}toggle(){this.disabled||(this.isOpen?this.hide():this.show())}async show(){if(!(this.isOpen||this.disabled)&&(this.isOpen=!0,this.addToStack(),this.returnFocus&&(this.lastFocusedElement=document.activeElement),this.toggleEl?.setAttribute("aria-expanded","true"),this.onDropOpen(),this.dispatchEvent(new CustomEvent("open",{detail:{drop:this},bubbles:!0})),await this.updateComplete,this.startAutoUpdate(),this.focusTrap&&this.dropEl)){const n=Array.from(this.dropEl.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));n.length>0&&(n[0].focus(),this.focusableElements=n)}}async hide(){this.isOpen&&(this.isOpen=!1,this.toggleEl?.setAttribute("aria-expanded","false"),this.onDropClose(),this.dispatchEvent(new CustomEvent("close",{detail:{drop:this},bubbles:!0})),this.returnFocus&&this.lastFocusedElement&&(this.lastFocusedElement.focus(),this.lastFocusedElement=void 0),this.focusableElements=void 0,this.removeFromStack(),this.stopAutoUpdate())}addToStack(){let n=this.parentElement;for(;n;){if(n instanceof i){const a=n;if(a.isOpen){this.parentDrop=a;break}}n=n.parentElement}this.stackIndex=i.openDrops.length,i.openDrops.push(this),this.stackIndex>0&&this.dispatchEvent(new CustomEvent("stack",{detail:{drop:this,stackIndex:this.stackIndex,parentDrop:this.parentDrop},bubbles:!0}))}removeFromStack(){const n=i.openDrops.indexOf(this);if(n===-1)return;i.openDrops.slice(n+1).forEach(o=>{o.isOpen&&o.hide()}),i.openDrops.splice(n,1),this.parentDrop=void 0,this.stackIndex=0}getMiddleware(){const n=[G.offset(this.offset),G.flip(),G.shift({padding:5})];return this.matchWidth&&n.push(G.size({apply({rects:a,elements:o}){Object.assign(o.floating.style,{width:`${a.reference.width}px`})}})),this.arrow&&this.arrowEl&&n.push(G.arrow({element:this.arrowEl,padding:5})),n}startAutoUpdate(){!this.dropEl||!this.toggleEl||(this.stopAutoUpdate(),this.cleanupAutoUpdate=G.autoUpdate(this.toggleEl,this.dropEl,()=>this.updatePosition(),{ancestorScroll:!this.closeOnScroll,ancestorResize:!0,elementResize:!0,layoutShift:!0}))}stopAutoUpdate(){this.cleanupAutoUpdate&&(this.cleanupAutoUpdate(),this.cleanupAutoUpdate=void 0)}async updatePosition(){if(!this.dropEl||!this.toggleEl)return;const n=this.getMiddleware(),a=ko({},{placement:this.placement,middleware:n,strategy:"absolute"},this.$floatingConfig),o=await G.computePosition(this.toggleEl,this.dropEl,a);if(Object.assign(this.dropEl.style,{left:`${o.x}px`,top:`${o.y}px`}),this.arrow&&this.arrowEl&&o.middlewareData.arrow){const{x:h,y:u}=o.middlewareData.arrow;Object.assign(this.arrowEl.style,{left:h!=null?`${h}px`:"",top:u!=null?`${u}px`:""});const f=o.placement.split("-")[0];this.arrowEl.setAttribute("data-side",f)}this.onDropPositioned(o),this.dispatchEvent(new CustomEvent("positioned",{detail:{position:o},bubbles:!0}))}updateFloating(){this.isOpen&&this.updatePosition()}cleanup(){this.toggleEl&&(this.toggleEl.removeEventListener("click",this.handleToggleClick),this.toggleEl.removeEventListener("mouseenter",this.handleMouseEnter),this.toggleEl.removeEventListener("mouseleave",this.handleMouseLeave),this.toggleEl.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("mousedown",this.handleOutsideClick),document.removeEventListener("keydown",this.handleEscapeKey),window.removeEventListener("scroll",this.handleScroll,!0),this.stopAutoUpdate(),clearTimeout(this.showTimeout),clearTimeout(this.hideTimeout)}},i.openDrops=[],i);return E([c({type:String,attribute:"toggle"})],t.prototype,"toggleSelector"),E([c({type:String})],t.prototype,"trigger"),E([c({type:Boolean,reflect:!0})],t.prototype,"disabled"),E([c({type:String})],t.prototype,"placement"),E([c({type:Number})],t.prototype,"offset"),E([c({type:Boolean,attribute:"match-width"})],t.prototype,"matchWidth"),E([c({type:Boolean})],t.prototype,"arrow"),E([c({type:String})],t.prototype,"label"),E([c({type:String})],t.prototype,"describedby"),E([c({type:Number,attribute:"delay-show"})],t.prototype,"delayShow"),E([c({type:Number,attribute:"delay-hide"})],t.prototype,"delayHide"),E([c({type:Number})],t.prototype,"duration"),E([c({type:Boolean,attribute:"close-on-outside-click"})],t.prototype,"closeOnOutsideClick"),E([c({type:Boolean,attribute:"close-on-escape"})],t.prototype,"closeOnEscape"),E([c({type:Boolean,attribute:"close-on-scroll"})],t.prototype,"closeOnScroll"),E([c({type:Boolean,attribute:"focus-trap"})],t.prototype,"focusTrap"),E([c({type:Boolean,attribute:"return-focus"})],t.prototype,"returnFocus"),E([v()],t.prototype,"isOpen"),E([v()],t.prototype,"$dropCls"),E([v()],t.prototype,"$dropStl"),E([Jt("[data-drop]")],t.prototype,"dropEl"),E([Jt("[data-arrow]")],t.prototype,"arrowEl"),t};var xo=Object.getOwnPropertyDescriptor,Mo=(r,t,e,i)=>{for(var s=i>1?void 0:i?xo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};l.Drop=class extends Ft(b){constructor(){super(...arguments),this["cls-default-element"]="drop"}render(){const t=this.$i18n.label||this.label||void 0,e=this.describedby||void 0,i=1e3+this.stackIndex;return d.html`
      <div
        data-host-inner
        data-drop
        id="${this.id}"
        class="${this.$dropCls.drop} ${this.stackIndex>0?"nested":""}"
        style="display: ${this.isOpen?"block":"none"}; position: absolute; --drop-duration: ${this.duration}ms; z-index: ${i}; ${this.$dropStl.drop||""}"
        role="dialog"
        aria-modal="${this.focusTrap}"
        aria-label="${t||d.nothing}"
        aria-describedby="${e||d.nothing}"
        aria-labelledby="${this.toggleEl?.id||d.nothing}"
        @mouseenter=${this.trigger.includes("hover")?this.handleDropMouseEnter:d.nothing}
        @mouseleave=${this.trigger.includes("hover")?this.handleDropMouseLeave:d.nothing}
      >
        ${L(this.$template)}
        ${this.arrow?d.html`
              <div
                data-arrow
                class="${this.$dropCls.arrow||""}"
                style="position: absolute; ${this.$dropStl.arrow||""}"
              ></div>
            `:d.nothing}
      </div>
    `}},l.Drop=Mo([w("fr-drop")],l.Drop);function yt(r){if(!/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2})?$/.test(r))throw new Error("Invalid date format. Expected YYYY-MM-DD or YYYY-MM-DDTHH:MM");const e=new Date(r);if(isNaN(e.getTime()))throw new Error("Invalid date value");return e}function Po(r){if(!/^([01]\d|2[0-3]):([0-5]\d)$/.test(r))throw new Error("Invalid time format. Use HH:MM (24-hour format)");return r}function Lo(r,t,e="en-US"){const i=p=>{if(p>=11&&p<=13)return"th";switch(p%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},s=new Intl.DateTimeFormat(e,{month:"long"}),n=new Intl.DateTimeFormat(e,{month:"short"}),a=new Intl.DateTimeFormat(e,{weekday:"long"}),o=new Intl.DateTimeFormat(e,{weekday:"short"}),h={YYYY:()=>r.getFullYear().toString(),YY:()=>(r.getFullYear()%100).toString().padStart(2,"0"),MMMM:()=>s.format(r),MMM:()=>n.format(r),MM:()=>(r.getMonth()+1).toString().padStart(2,"0"),M:()=>(r.getMonth()+1).toString(),dddd:()=>a.format(r),ddd:()=>o.format(r),Do:()=>r.getDate()+(e.startsWith("en")?i(r.getDate()):""),DD:()=>r.getDate().toString().padStart(2,"0"),D:()=>r.getDate().toString(),HH:()=>r.getHours().toString().padStart(2,"0"),H:()=>r.getHours().toString(),hh:()=>(r.getHours()%12||12).toString().padStart(2,"0"),h:()=>(r.getHours()%12||12).toString(),mm:()=>r.getMinutes().toString().padStart(2,"0"),m:()=>r.getMinutes().toString(),A:()=>r.getHours()>=12?"PM":"AM",a:()=>r.getHours()>=12?"pm":"am"},u=Object.keys(h).sort((p,g)=>g.length-p.length),f=new RegExp(u.join("|"),"g");return t.replace(f,p=>h[p]())}var qo=Object.defineProperty,j=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&qo(t,e,s),s};const Tn=r=>{class t extends r{constructor(){super(...arguments),this.today=!1,this.jumpable=!1,this["starts-with"]=0,this["disabled-dates"]="",this["marked-dates"]="",this["view-date"]=new Date().toISOString().split("T")[0],this.min="",this.max="",this["weekday-format"]="short",this.lang="",this.isDirty=!1}get $viewDate(){const[i,s,n]=this["view-date"].split("-").map(Number);return this.createUTCDate(i,s-1,n)}createUTCDate(i,s,n){return new Date(Date.UTC(i,s,n))}dateToUTC(i){return this.createUTCDate(i.getFullYear(),i.getMonth(),i.getDate())}getTodayUTC(){return this.dateToUTC(new Date)}getUTCDate(i){return this.dateToUTC(i)}isDateInRange(i){if(!this.min&&!this.max)return!0;const s=new Date(i);if(this.min){const n=yt(this.min);if(s<n)return!1}if(this.max){const n=yt(this.max);if(n.setDate(n.getDate()+1),s>=n)return!1}return!0}parseDates(i){return i?i.split(",").map(s=>s.trim()).filter(Boolean).map(s=>{try{return yt(s).toISOString().slice(0,10)}catch{return console.warn(`[fr-calendar] Invalid date format in list: "${s}".`),""}}).filter(Boolean):[]}getTimestampComponent(i){const s=this.lang||void 0;return{year:i.getUTCFullYear(),month:i.getUTCMonth()+1,monthName:i.toLocaleDateString(s,{month:"long",timeZone:"UTC"}),day:i.getUTCDate(),dayName:i.toLocaleDateString(s,{weekday:"long",timeZone:"UTC"}),ISOString:i.toISOString()}}$icons(i){const s=super.$icons(i);if(s)return s;switch(i){case"chevron-left":return d.html`
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
          `;case"chevron-right":return d.html`
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
          `;case"calendar":return d.html`
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
          `}}}return j([c({type:Boolean})],t.prototype,"today"),j([c({type:Boolean})],t.prototype,"jumpable"),j([c({type:Number})],t.prototype,"starts-with"),j([c({type:String})],t.prototype,"disabled-dates"),j([c({type:String})],t.prototype,"marked-dates"),j([c({type:String})],t.prototype,"view-date"),j([c({type:String})],t.prototype,"min"),j([c({type:String})],t.prototype,"max"),j([c({type:String})],t.prototype,"weekday-format"),j([c({type:String})],t.prototype,"lang"),t};var Ro=Object.defineProperty,_t=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&Ro(t,e,s),s};const Q=r=>{class t extends r{constructor(){super(...arguments),this.disabled=!1,this.name="",this.placeholder="",this.required=!1,this.value=""}renderHidden(){return typeof this.$value=="string"?this.name?d.html`
              <input name="${this.name}" type="hidden" value="${this.$value}" />
            `:"":this.$value.map(i=>d.html`
              <input name="${this.name}[]" type="hidden" value="${i}" />
            `)}emit(){this.dispatchEvent(new CustomEvent(this["input-event"],{detail:{value:this.$value},bubbles:!0,composed:!0}))}connectedCallback(){super.connectedCallback(),this.initializeValue()}}return _t([c({type:Boolean})],t.prototype,"disabled"),_t([c({type:String})],t.prototype,"name"),_t([c({type:String})],t.prototype,"placeholder"),_t([c({type:Boolean})],t.prototype,"required"),_t([c({type:String})],t.prototype,"value"),t};var jo=Object.defineProperty,Ho=Object.getOwnPropertyDescriptor,V=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ho(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&jo(t,e,s),s};l.InputDate=class extends Ft(Tn(Q(b))){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-date:change",this["display-format"]="MMMM DD, YYYY",this["with-time"]=!1,this.clock="12h",this["require-time"]=!1,this.$cls={container:"",button:"","button-text":"",icon:"",drop:"",calendar:"","time-wrapper":"",time:"",arrow:""},this.$stl={container:"",button:"","button-text":"",icon:"",drop:"",calendar:"","time-wrapper":"",time:"",arrow:""}}get $value(){return this.$date&&this.$time?`${this.$date}T${this.$time}`:this.$date?this.$date:""}get $text(){if(this.$value)try{const t=this.$value.includes("T")?new Date(this.$value):new Date(this.$value+"T00:00:00");let e=this["display-format"];if(this["with-time"]&&this.$time){const i=this.clock==="12h"?"h:mm A":"HH:mm";e=`${this["display-format"]} ${i}`}return Lo(t,e,this.lang)}catch(t){return console.error("[fr-input-date] Failed to format date:",t),this.$value}return this.placeholder?this.placeholder:this.getI18nText("placeholder",this["with-time"]?{placeholder:"Select a date and time"}:{placeholder:"Select a date"})}connectedCallback(){super.connectedCallback(),this.toggleSelector="button"}firstUpdated(t){super.firstUpdated?.(t);const e=this.dropEl?.querySelector("fr-calendar");if(e&&e.addEventListener("fr-calendar:change",i=>{this.$date=i.detail.value,this["with-time"]||this.hide()}),this["with-time"]){const i=this.dropEl?.querySelector("fr-input-time");i&&i.addEventListener("fr-input-time:input",s=>{this.$time=s.detail.value})}}updated(t){super.updated(t),(t.has("$date")||t.has("$time"))&&this.emit()}initializeValue(){if(this.value)try{if(yt(this.value),!this.value.includes("T"))this.$date=this.value;else{const[e,i]=this.value.split("T");this.$date=e,this.$time=i}}catch(t){console.error("[fr-input-date] Failed to initialize date value:",t)}}onDropOpen(){}onDropClose(){}get buttonLabel(){const t=this.getI18nText("buttonLabel",{buttonLabel:"Select date"});return this.$value?`${t}, ${this.getI18nText("selected",{selected:"selected"})}: ${this.$text}`:t}render(){const t=this.getI18nText("dialogLabel",{dialogLabel:"Date picker"}),e=1e3+this.stackIndex;return d.html`
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
          ${this.arrow?d.html`
                <div
                  data-arrow
                  class="${this.$dropCls.arrow} ${this.$cls.arrow}"
                  style="position: absolute; ${this.$dropStl.arrow||""} ${this.$stl.arrow}"
                ></div>
              `:""}
        </div>

        ${this.renderHidden()}
      </div>
    `}renderTimeInput(){return this["with-time"]?d.html`
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
    `:d.nothing}},V([c({type:String,attribute:"display-format"})],l.InputDate.prototype,"display-format",2),V([c({type:Boolean,attribute:"with-time"})],l.InputDate.prototype,"with-time",2),V([c({type:String})],l.InputDate.prototype,"clock",2),V([c({type:Boolean,attribute:"require-time"})],l.InputDate.prototype,"require-time",2),V([v()],l.InputDate.prototype,"$date",2),V([v()],l.InputDate.prototype,"$time",2),V([v()],l.InputDate.prototype,"$cls",2),V([v()],l.InputDate.prototype,"$stl",2),l.InputDate=V([w("fr-input-date")],l.InputDate);const tt=Mt(class extends Pt{constructor(r){if(super(r),r.type!==xt.ATTRIBUTE||r.name!=="class"||r.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(r){return" "+Object.keys(r).filter((t=>r[t])).join(" ")+" "}update(r,[t]){if(this.st===void 0){this.st=new Set,r.strings!==void 0&&(this.nt=new Set(r.strings.join(" ").split(/\s/).filter((i=>i!==""))));for(const i in t)t[i]&&!this.nt?.has(i)&&this.st.add(i);return this.render(t)}const e=r.element.classList;for(const i of this.st)i in t||(e.remove(i),this.st.delete(i));for(const i in t){const s=!!t[i];s===this.st.has(i)||this.nt?.has(i)||(s?(e.add(i),this.st.add(i)):(e.remove(i),this.st.delete(i)))}return U}});const Sn="important",Uo=" !"+Sn,Vo=Mt(class extends Pt{constructor(r){if(super(r),r.type!==xt.ATTRIBUTE||r.name!=="style"||r.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(r){return Object.keys(r).reduce(((t,e)=>{const i=r[e];return i==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${i};`}),"")}update(r,[t]){const{style:e}=r.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const i of this.ft)t[i]==null&&(this.ft.delete(i),i.includes("-")?e.removeProperty(i):e[i]=null);for(const i in t){const s=t[i];if(s!=null){this.ft.add(i);const n=typeof s=="string"&&s.endsWith(Uo);i.includes("-")||n?e.setProperty(i,n?s.slice(0,-11):s,n?Sn:""):e[i]=s}}return U}});var No=Object.defineProperty,Bo=Object.getOwnPropertyDescriptor,H=(r,t,e,i)=>{for(var s=i>1?void 0:i?Bo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&No(t,e,s),s};l.InputPin=class extends Q(b){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-pin:change",this.autofocus=!1,this.length=6,this["input-mode"]="numeric",this["show-labels"]=!1,this.$cls={container:"",wrapper:"",input:"",label:"",description:""},this.$stl={container:"",wrapper:"",input:"",label:"",description:""},this.$pin="",this.$inputs=null,this.groupId=""}get $value(){return this.$pin}get $text(){return""}initializeValue(){if(this.groupId=this.id?`${this.id}-group`:`pin-${Math.random().toString(36).substr(2,9)}`,this.value){const t=this.value.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(t)){console.warn(`[fr-input-pin] Initial value "${this.value}" does not match pattern "${this.pattern}"`);return}this.$pin=t}}firstUpdated(t){this.$inputs=this.renderRoot.querySelectorAll("input[data-pin-input]"),this.setupPasteHandlers(),this.populateInitialValue(),this.announceToScreenReader(this.getI18nText("loaded",{loaded:"PIN input ready"}))}populateInitialValue(){if(!(!this.$pin||!this.$inputs)&&(this.$pin.split("").forEach((t,e)=>{const i=this.$inputs[e];i&&(i.value=t,i.disabled=!1)}),this.$pin.length<this.length)){const t=this.$inputs[this.$pin.length];t&&(t.disabled=!1)}}setupPasteHandlers(){this.$inputs?.forEach(t=>{t.addEventListener("paste",e=>{e.preventDefault();const i=e.clipboardData;i&&this.handlePaste(i.getData("Text"))})})}handlePaste(t){if(!this.$inputs)return;const e=t.substring(0,this.length);if(this.pattern&&!new RegExp(`^[${this.pattern}]*$`).test(e)){this.announceToScreenReader(this.getI18nText("invalidCharacter",{invalidCharacter:"Invalid character entered"}));return}this.$pin=e,e.split("").forEach((i,s)=>{const n=this.$inputs[s];n.disabled=!1,n.value=i});for(let i=e.length;i<this.length;i++){const s=this.$inputs[i];s.value="",s.disabled=i!==e.length}if(e.length<this.length){const i=this.$inputs[e.length];i.disabled=!1,i.focus(),this.announceToScreenReader(this.getI18nText("fieldFilled",{fieldFilled:"Field {n} filled"},{n:e.length+1}))}else this.$inputs[this.$focus]?.blur(),this.announceToScreenReader(this.getI18nText("complete",{complete:"PIN entry complete"})),this.emitComplete();this.emit()}handleKeyNavigation(t,e){if(!(this.$focus===void 0||!this.$inputs))switch(t.key){case"Backspace":if(e.value.length===0&&this.$focus>0){t.preventDefault();const i=this.$inputs[this.$focus-1];i.focus(),i.select(),e.disabled=!0}break;case"Delete":if(e.value.length===0){t.preventDefault();const i=this.$inputs[this.$focus+1];i&&(i.focus(),i.setSelectionRange(0,0))}break;case"ArrowLeft":if(t.preventDefault(),this.$focus>0){const i=this.$inputs[this.$focus-1];i.focus(),i.setSelectionRange(1,1)}break;case"ArrowRight":if(t.preventDefault(),this.$focus<this.length-1){const i=this.$inputs[this.$focus+1];i.disabled||(i.focus(),i.setSelectionRange(0,0))}break;case"Home":t.preventDefault(),this.$inputs[0]?.focus();break;case"End":t.preventDefault();for(let i=this.length-1;i>=0;i--){const s=this.$inputs[i];if(!s.disabled){s.focus();break}}break}}handleInput(t,e){if(!this.$inputs)return;const i=t.target;if(this.pattern&&i.value&&!new RegExp(`[${this.pattern}]`).test(i.value)){i.value="",this.announceToScreenReader(this.getI18nText("invalidCharacter",{invalidCharacter:"Invalid character entered"}));return}if(i.value.length===1)if(e<this.length-1){const s=this.$inputs[e+1];s.disabled=!1,s.focus(),this.announceToScreenReader(this.getI18nText("fieldFilled",{fieldFilled:"Field {n} filled"},{n:e+2}))}else i.blur(),this.announceToScreenReader(this.getI18nText("complete",{complete:"PIN entry complete"})),this.emitComplete();this.updatePinValue(),this.emit()}updatePinValue(){if(!this.$inputs)return;let t="";this.$inputs.forEach(e=>{t+=e.value}),this.$pin=t}emitComplete(){this.dispatchEvent(new CustomEvent("fr-input-pin:complete",{detail:{value:this.$value},bubbles:!0,composed:!0}))}announceToScreenReader(t){if(!t)return;const e=this.renderRoot.querySelector('[role="status"]');e&&(e.textContent=t,setTimeout(()=>{e.textContent=""},1e3))}get groupLabel(){return this.getI18nText("label",{label:"PIN Code"})}get groupDescription(){return this.getI18nText("description",{description:"Enter {length}-digit code"},{length:this.length})}getFieldLabel(t){return this.getI18nText("fieldLabel",{fieldLabel:"Digit {n} of {total}"},{n:t+1,total:this.length})}renderInput(t){const e=this.getFieldLabel(t);return d.html`
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
    `}renderLabel(){return this.querySelector('[slot="label"]')?d.html`
        <span
          part="label"
          id="${this.groupId}-label"
          class=${tt({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.label}
        >
          <slot name="label"></slot>
        </span>
      `:d.html`
      <span
        part="label"
        id="${this.groupId}-label"
        class=${tt({[this.$cls.label]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.label}
      >
        ${this.groupLabel}
      </span>
    `}renderDescription(){return this.querySelector('[slot="description"]')?d.html`
        <span
          part="description"
          id="${this.groupId}-desc"
          class=${tt({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
          style=${this.$stl.description}
        >
          <slot name="description"></slot>
        </span>
      `:d.html`
      <span
        part="description"
        id="${this.groupId}-desc"
        class=${tt({[this.$cls.description]:!0,"sr-only":!this["show-labels"]})}
        style=${this.$stl.description}
      >
        ${this.groupDescription}
      </span>
    `}render(){return d.html`
      <div
        data-host-inner
        part="container"
        class=${tt(this.$cls)}
        style=${Vo(this.$stl)}
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
    `}},H([c({type:Boolean})],l.InputPin.prototype,"autofocus",2),H([c({type:Number})],l.InputPin.prototype,"length",2),H([c({type:String,attribute:"input-mode"})],l.InputPin.prototype,"input-mode",2),H([c({type:String})],l.InputPin.prototype,"pattern",2),H([c({type:Boolean,attribute:"show-labels"})],l.InputPin.prototype,"show-labels",2),H([v()],l.InputPin.prototype,"$cls",2),H([v()],l.InputPin.prototype,"$stl",2),H([v()],l.InputPin.prototype,"$focus",2),H([v()],l.InputPin.prototype,"$pin",2),l.InputPin=H([w("fr-input-pin")],l.InputPin);var Fo=Object.defineProperty,zo=Object.getOwnPropertyDescriptor,K=(r,t,e,i)=>{for(var s=i>1?void 0:i?zo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Fo(t,e,s),s};l.InputRange=class extends Q(b){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-range:input",this.multiple=!1,this.min=0,this.max=100,this.step=1,this.label=!1,this["label-position"]="top",this["aria-label"]="",this._lowValue=this.min,this._highValue=this.max,this._label=!1,this.activeKnob=null,this.trackElement=null,this.isDragging=!1,this.defaultI18n={ariaValueText:"Value: {value}",ariaRangeText:"Range from {low} to {high}",lowKnobLabel:"Minimum value",highKnobLabel:"Maximum value",ariaLabel:"Range slider"},this.preventScrolling=t=>{this.isDragging&&t.preventDefault()},this.onPointerStart=(t,e)=>{this.disabled||(t.preventDefault(),t.stopPropagation(),this.activeKnob=e,this.isDragging=!0,t.currentTarget.focus(),document.addEventListener("pointermove",this.onPointerMove,{passive:!1}),document.addEventListener("pointerup",this.onPointerEnd),document.addEventListener("pointercancel",this.onPointerEnd),document.addEventListener("touchmove",this.onTouchMove,{passive:!1}),document.addEventListener("touchend",this.onPointerEnd),document.addEventListener("touchcancel",this.onPointerEnd))},this.onPointerMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.clientX);this.handleValueChange(this.activeKnob,e)},this.onTouchMove=t=>{if(!this.isDragging||!this.activeKnob||this.disabled)return;t.preventDefault();const e=this.positionToValue(t.touches[0].clientX);this.handleValueChange(this.activeKnob,e)},this.onPointerEnd=()=>{this.isDragging=!1,this.activeKnob=null,this.cleanupEventListeners()},this.onKeyDown=(t,e)=>{if(this.disabled)return;const i=e==="low"?this._lowValue:this._highValue;let s=0;switch(t.key){case"ArrowRight":case"ArrowUp":s=this.step;break;case"ArrowLeft":case"ArrowDown":s=-this.step;break;case"Home":this.handleValueChange(e,e==="low"?this.min:this._lowValue),t.preventDefault();return;case"End":this.handleValueChange(e,e==="high"?this.max:this._highValue),t.preventDefault();return;case"PageUp":s=this.step*10;break;case"PageDown":s=-this.step*10;break;default:return}s&&(t.preventDefault(),this.handleValueChange(e,i+s))}}get $text(){return""}get $value(){return this.multiple?this.value.split(",").map(t=>t.trim()):this.value}connectedCallback(){super.connectedCallback();const t=this.getAttribute("label");this._label=t===""?!0:t||!1,this.addEventListener("touchstart",this.preventScrolling,{passive:!1})}disconnectedCallback(){this.removeEventListener("touchstart",this.preventScrolling),this.cleanupEventListeners(),super.disconnectedCallback?.()}updated(t){(t.has("value")||t.has("multiple"))&&this.parseValue()}initializeValue(){this.value?this.parseValue():(this._lowValue=this.min,this._highValue=this.max,this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue))}parseValue(){if(this.multiple){const[t,e]=this.value.split(",").map(i=>parseFloat(i));t!==void 0&&e!==void 0&&(this._lowValue=this.clamp(t),this._highValue=this.clamp(e))}else this._lowValue=this.clamp(parseFloat(this.value))}formatValue(t){const e=t.toFixed(2);return e.endsWith(".00")?e.slice(0,-3):e}clamp(t){return parseFloat(Math.min(Math.max(t,this.min),this.max).toFixed(2))}valueToPercent(t){return(t-this.min)/(this.max-this.min)*100}positionToValue(t){this.trackElement||(this.trackElement=this.querySelector("[data-range-track]"));const e=this.trackElement.getBoundingClientRect(),i=Math.max(0,Math.min(1,(t-e.left)/e.width));return this.min+i*(this.max-this.min)}updateValue(){this.value=this.multiple?`${this.formatValue(this._lowValue)},${this.formatValue(this._highValue)}`:this.formatValue(this._lowValue),this.emit()}handleValueChange(t,e){e=this.clamp(Math.round(e/this.step)*this.step),t==="low"?this._lowValue=this.multiple?Math.min(e,this._highValue):e:this._highValue=Math.max(e,this._lowValue),this.updateValue(),this.requestUpdate()}cleanupEventListeners(){document.removeEventListener("pointermove",this.onPointerMove),document.removeEventListener("pointerup",this.onPointerEnd),document.removeEventListener("pointercancel",this.onPointerEnd),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onPointerEnd),document.removeEventListener("touchcancel",this.onPointerEnd)}getAriaValueText(t){return this.multiple?this.getI18nText("ariaRangeText",this.defaultI18n,{low:this.formatValue(this._lowValue),high:this.formatValue(this._highValue)}):this.getI18nText("ariaValueText",this.defaultI18n,{value:this.formatValue(t)})}getKnobAriaLabel(t){const e=t==="low"?"lowKnobLabel":"highKnobLabel";return this.getI18nText(e,this.defaultI18n)}renderKnob(t){const e=t==="low"?this._lowValue:this._highValue,i=this.valueToPercent(e),s=t==="low"?this.min:this._lowValue,n=t==="low"?this.multiple?this._highValue:this.max:this.max,a=this.isDragging&&this.activeKnob===t,o=[this.$cls.knob||"",this.$cls[t==="low"?"knobLow":"knobHigh"]||"",a&&this.$cls.knobDragging||""].filter(Boolean).join(" ");return d.html`
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
        @pointerdown=${h=>this.onPointerStart(h,t)}
        @touchstart=${h=>this.onPointerStart(h,t)}
        @keydown=${h=>this.onKeyDown(h,t)}
      >
        ${this._label?d.html`
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
    `}render(){const t=this.valueToPercent(this._lowValue),e=this.multiple?this.valueToPercent(this._highValue):t,i=`left: ${this.multiple?t:0}%; width: ${this.multiple?e-t:t}%`,s=this["aria-label"]||this.getI18nText("ariaLabel",this.defaultI18n);return d.html`
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
    `}},K([c({type:Boolean})],l.InputRange.prototype,"multiple",2),K([c({type:Number})],l.InputRange.prototype,"min",2),K([c({type:Number})],l.InputRange.prototype,"max",2),K([c({type:Number})],l.InputRange.prototype,"step",2),K([c({type:String})],l.InputRange.prototype,"label",2),K([c({type:String})],l.InputRange.prototype,"label-position",2),K([c({type:String})],l.InputRange.prototype,"aria-label",2),l.InputRange=K([w("fr-input-range")],l.InputRange);var zt={exports:{}},Ko=zt.exports,Cn;function Yo(){return Cn||(Cn=1,(function(r,t){(function(e,i,s){r.exports=s(),r.exports.default=s()})("slugify",Ko,function(){var e=JSON.parse(`{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E'","Ը":"Y'","Թ":"T'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C'","Կ":"K","Հ":"H","Ձ":"D'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P'","Ք":"Q'","Օ":"O''","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"'","’":"'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}`),i=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function s(n,a){if(typeof n!="string")throw new Error("slugify: string argument expected");a=typeof a=="string"?{replacement:a}:a||{};var o=i[a.locale]||{},h=a.replacement===void 0?"-":a.replacement,u=a.trim===void 0?!0:a.trim,f=n.normalize().split("").reduce(function(p,g){var $=o[g];return $===void 0&&($=e[g]),$===void 0&&($=g),$===h&&($=" "),p+$.replace(a.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")},"");return a.strict&&(f=f.replace(/[^A-Za-z0-9\s]/g,"")),u&&(f=f.trim()),f=f.replace(/\s+/g,h),a.lower&&(f=f.toLowerCase()),f}return s.extend=function(n){Object.assign(e,n)},s})})(zt)),zt.exports}var Go=Yo();const In=vs(Go);var Wo=Object.defineProperty,Jo=Object.getOwnPropertyDescriptor,D=(r,t,e,i)=>{for(var s=i>1?void 0:i?Jo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Wo(t,e,s),s};l.InputTag=class extends Q(b){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-tag:input",this.maxlength=20,this.minlength=1,this.slugify=!1,this["slugify-options"]="",this.delimiters=",",this["allow-duplicates"]=!1,this["max-tags"]=0,this.$input="",this.$slugOptions={lower:!0,strict:!0},this.$tags=[],this.$error="",this.defaultI18n={placeholder:"Add a tag...",removeLabel:"Remove tag",editLabel:"Edit tag",tagListLabel:"Tags",minLengthError:"Tag must be at least {min} characters",maxLengthError:"Tag cannot exceed {max} characters",duplicateError:"Tag already exists",maxTagsError:"Maximum {max} tags allowed",inputLabel:"Tag input"}}get $value(){return this.$tags}get $text(){return""}get delimiterChars(){return this.delimiters.split("")}initializeValue(){this.initializeTags(),this.initializeSlugOptions()}initializeTags(){this.$tags=this.value===""?[]:this.value.split(",")}initializeSlugOptions(){if(!this["slugify-options"])return;const t=Lt(this["slugify-options"]);t.replacement&&(this.$slugOptions.replacement=t.replacement),t.remove&&(this.$slugOptions.remove=new RegExp(t.remove,"g")),t.lower&&(this.$slugOptions.lower=t.lower==="true"),t.strict&&(this.$slugOptions.strict=t.strict==="true"),t.locale&&(this.$slugOptions.locale=t.locale),t.trim&&(this.$slugOptions.trim=t.trim==="true")}validateTag(t){return this.$error="",t.length<this.minlength?(this.$error=this.getI18nText("minLengthError",this.defaultI18n,{min:String(this.minlength)}),!1):t.length>this.maxlength?(this.$error=this.getI18nText("maxLengthError",this.defaultI18n,{max:String(this.maxlength)}),!1):!this["allow-duplicates"]&&this.$tags.includes(t)?(this.$error=this.getI18nText("duplicateError",this.defaultI18n),!1):this["max-tags"]>0&&this.$tags.length>=this["max-tags"]?(this.$error=this.getI18nText("maxTagsError",this.defaultI18n,{max:String(this["max-tags"])}),!1):!0}addTag(){if(!this.$input.trim())return;let t=this.$input.trim();this.slugify&&(t=In(t,this.$slugOptions)),this.validateTag(t)&&(this.$tags=[...this.$tags,t],this.$input="",this.$error="",this.emit(),this.requestUpdate())}removeTag(t){this.disabled||(this.$tags=this.$tags.filter((e,i)=>i!==t),this.$error="",this.emit(),this.requestUpdate())}editTag(t){this.disabled||(this.$input=this.$tags[t],this.removeTag(t),this.updateComplete.then(()=>{this.renderRoot.querySelector("input")?.focus()}))}handleKeydown(t){switch(t.key){case"Backspace":this.$tags.length>0&&this.$input.length===0&&(t.preventDefault(),this.editTag(this.$tags.length-1));break;case"Enter":t.preventDefault(),this.addTag();break;case"Escape":this.$input&&(t.preventDefault(),this.$input="",this.$error="",this.requestUpdate());break;default:this.delimiterChars.includes(t.key)&&(t.preventDefault(),this.addTag());break}}handleInput(t){const e=t.target;this.$input=e.value,this.$error=""}handlePaste(t){const e=t.clipboardData?.getData("text");if(!e)return;if(this.delimiterChars.some(s=>e.includes(s))){t.preventDefault();const s=new RegExp(`[${this.delimiterChars.join("")}]`);e.split(s).map(a=>a.trim()).filter(a=>a.length>0).forEach(a=>{this.slugify&&(a=In(a,this.$slugOptions)),this.validateTag(a)&&(this.$tags=[...this.$tags,a])}),this.$input="",this.emit(),this.requestUpdate()}}renderTag(t,e){const i=this.getI18nText("removeLabel",this.defaultI18n),s=this.getI18nText("editLabel",this.defaultI18n);return d.html`
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
    `}renderError(){return this.$error?d.html`
      <div
        class="${this.$cls.error||""}"
        part="error"
        style="${this.$stl.error||""}"
        role="alert"
        aria-live="polite"
      >
        ${this.$error}
      </div>
    `:""}render(){const t=this.placeholder||this.getI18nText("placeholder",this.defaultI18n),e=this.getI18nText("tagListLabel",this.defaultI18n),i=this.getI18nText("inputLabel",this.defaultI18n);return d.html`
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
    `}},D([c({type:Number})],l.InputTag.prototype,"maxlength",2),D([c({type:Number})],l.InputTag.prototype,"minlength",2),D([c({type:Boolean})],l.InputTag.prototype,"slugify",2),D([c({type:String})],l.InputTag.prototype,"slugify-options",2),D([c({type:String})],l.InputTag.prototype,"delimiters",2),D([c({type:Boolean})],l.InputTag.prototype,"allow-duplicates",2),D([c({type:Number})],l.InputTag.prototype,"max-tags",2),D([v()],l.InputTag.prototype,"$input",2),D([v()],l.InputTag.prototype,"$slugOptions",2),D([v()],l.InputTag.prototype,"$tags",2),D([v()],l.InputTag.prototype,"$error",2),l.InputTag=D([w("fr-input-tag")],l.InputTag);var Zo=Object.defineProperty,Xo=Object.getOwnPropertyDescriptor,N=(r,t,e,i)=>{for(var s=i>1?void 0:i?Xo(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Zo(t,e,s),s};l.InputTime=class extends Q(b){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-input-time:input",this.autofocus=!1,this.now=!1,this.clock="12h",this.min="",this.max="",this.$min=0,this.$meridiem="am",this.defaultI18n={am:"AM",pm:"PM",hourLabel:"Hour",minuteLabel:"Minute",meridiemLabel:"AM/PM",timeLabel:"Time",hourPlaceholder:"HH",minutePlaceholder:"MM",invalidTime:"Invalid time format"}}get $HH(){return this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"00"}get $MM(){return this.$min>=0?this.$min.toString().padStart(2,"0"):"00"}get $value(){if(this.$hour===void 0||this.$hour===null)return"";let t=this.$hour;return this.clock==="12h"&&(this.$meridiem==="pm"?t=this.$hour===12?12:this.$hour+12:t=this.$hour===12?0:this.$hour),`${t.toString().padStart(2,"0")}:${this.$min.toString().padStart(2,"0")}`}get $text(){return""}initializeValue(){this.value?this.parseTimeValue():this.now&&this.setCurrentTime()}updated(t){["$hour","$min","$meridiem"].some(e=>t.has(e))&&this.emit()}parseTimeValue(){try{const t=Po(this.value),[e,i]=t.split(":").map(Number);this.clock==="12h"?this.$hour=e%12||12:this.$hour=e,this.$min=i,this.$meridiem=e<12?"am":"pm"}catch(t){console.error(this.getI18nText("invalidTime",this.defaultI18n),t)}}setCurrentTime(){const t=new Date;this.clock==="12h"?this.$hour=t.getHours()%12||12:this.$hour=t.getHours(),this.$min=t.getMinutes(),this.$meridiem=t.getHours()<12?"am":"pm"}isTimeValid(){const t=this.$value;return t?!(this.min&&t<this.min||this.max&&t>this.max):!0}handleInput(t,e){const i=t.target,s=i.value.replace(/[^0-9]/g,"").substring(0,2),n=parseInt(s);switch(e){case"$hour":this.clock==="12h"?this.$hour=n<=12?n:12:this.$hour=n<=23?n:23;break;case"$min":this.$min=n<=59?n:59;break}i.value=s}handleBlur(t,e){const i=t.target,s=parseInt(i.value);switch(e){case"$hour":if(i.value===""){this.required?i.value=this.$HH:this.$hour=void 0;return}this.clock==="12h"&&s>12?(this.$hour=12,i.value="12"):this.clock==="12h"&&s===0?(this.$hour=12,i.value="12"):this.clock==="24h"&&s>23?(this.$hour=23,i.value="23"):i.value=this.$HH;break;case"$min":s>59&&(this.$min=59),i.value=this.$MM;break}}handleKeydown(t,e){const i=t.target;if((e==="$hour"?this.$hour:this.$min)===void 0&&e==="$hour")return;let n=0,a=!1;switch(t.key){case"ArrowUp":n=1,a=!0;break;case"ArrowDown":n=-1,a=!0;break;case"PageUp":n=e==="$hour"?1:15,a=!0;break;case"PageDown":n=e==="$hour"?-1:-15,a=!0;break}if(a&&n!==0)if(t.preventDefault(),e==="$hour"){const o=this.clock==="12h"?12:23,h=this.clock==="12h"?1:0;let u=(this.$hour||0)+n;u>o&&(u=h),u<h&&(u=o),this.$hour=u,i.value=u.toString().padStart(2,"0")}else{let o=this.$min+n;o>59&&(o=0),o<0&&(o=59),this.$min=o,i.value=o.toString().padStart(2,"0")}}toggleMeridiem(){this.$meridiem=this.$meridiem==="am"?"pm":"am"}handleMeridiemKeydown(t){(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key===" ")&&(t.preventDefault(),this.toggleMeridiem())}renderInput(t){const{min:e,max:i,state:s,key:n}=t,a=s==="$hour",o=a?this.$hour!==void 0?this.$hour.toString().padStart(2,"0"):"":this.$hour===void 0?"":this.$min>=0?this.$min.toString().padStart(2,"0"):"00",h=this.getI18nText(a?"hourLabel":"minuteLabel",this.defaultI18n),u=this.getI18nText(a?"hourPlaceholder":"minutePlaceholder",this.defaultI18n),f=a?this.$cls.hourInput||this.$cls.input||"":this.$cls.minuteInput||this.$cls.input||"",p=a?this.$stl.hourInput||this.$stl.input||"":this.$stl.minuteInput||this.$stl.input||"";return d.html`
      <input
        class="${f}"
        part="${a?"hour-input":"minute-input"} input"
        style="${p}"
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
        placeholder="${u}"
        maxlength="2"
        value="${o}"
        .autofocus="${a&&this.autofocus}"
        ?disabled="${this.disabled||!a&&this.$hour===void 0}"
        @keydown="${g=>this.handleKeydown(g,s)}"
        @input="${g=>this.handleInput(g,s)}"
        @blur="${g=>this.handleBlur(g,s)}"
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
          @click="${o=>{o.preventDefault(),this.toggleMeridiem()}}"
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
    `}},N([c({type:Boolean})],l.InputTime.prototype,"autofocus",2),N([c({type:Boolean})],l.InputTime.prototype,"now",2),N([c({type:String})],l.InputTime.prototype,"clock",2),N([c({type:String})],l.InputTime.prototype,"min",2),N([c({type:String})],l.InputTime.prototype,"max",2),N([v()],l.InputTime.prototype,"$hour",2),N([v()],l.InputTime.prototype,"$min",2),N([v()],l.InputTime.prototype,"$meridiem",2),l.InputTime=N([w("fr-input-time")],l.InputTime);function Qo(r=5){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";return Array.from({length:r},()=>t.charAt(Math.floor(Math.random()*t.length))).join("")}var tl=Object.defineProperty,el=Object.getOwnPropertyDescriptor,B=(r,t,e,i)=>{for(var s=i>1?void 0:i?el(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&tl(t,e,s),s};l.Keyval=class extends b{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.keys="",this.values="",this.sensitive=!1,this.noninsertable=!1,this.max=0,this.min=1,this["aria-label"]="",this.valueVisibility={},this.defaultI18n={headerKey:"Key",headerValue:"Value",placeholderKey:"Enter key",placeholderValue:"Enter value",addRowLabel:"Add row",removeRowLabel:"Remove row",toggleVisibilityLabel:"Toggle visibility",generateRandomLabel:"Generate random value",tableLabel:"Key-value pairs",actionsLabel:"Actions",keyLabel:"Key for row {index}",valueLabel:"Value for row {index}"},this.handleKeyDown=t=>{(t.ctrlKey||t.metaKey)&&t.key==="Enter"&&!this.noninsertable&&(t.preventDefault(),this.addRow())}}connectedCallback(){super.connectedCallback(),this.HTMLDataSource||(this.initializeEmptyData(),this.addRow()),this.initializePasswordVisibility()}onDataSourceChanged(){(!this.$data.__||!this.$data.__.options||this.$data.__.options.length===0)&&(this.initializeEmptyData(),this.addRow())}initializeEmptyData(){this.$data={__:{text:"__",options:[]}}}initializePasswordVisibility(){this.sensitive&&this.$data.__&&this.$data.__.options&&this.$data.__.options.forEach((t,e)=>{this.valueVisibility[e]=!1})}canAddRow(){return this.max===0?!0:this.$data.__.options.length<this.max}canRemoveRow(){return this.$data.__.options.length>this.min}addRow(){if(!this.canAddRow())return;this.$data.__||this.initializeEmptyData();const t=this.$data.__.options.length;this.$data.__.options.push({group:"__",value:"",text:"",disabled:!1,selected:!1,data:{gid:""}}),this.sensitive&&(this.valueVisibility[t]=!1),this.requestUpdate(),this.updateComplete.then(()=>{const i=this.renderRoot.querySelectorAll('[data-field="key"]')[t];i&&i.focus()})}removeRow(t){this.canRemoveRow()&&this.$data.__&&this.$data.__.options&&(this.$data.__.options.splice(t,1),this.reindexVisibilityAfterRemoval(t),this.requestUpdate())}reindexVisibilityAfterRemoval(t){const e={};Object.keys(this.valueVisibility).forEach(i=>{const s=parseInt(i);s<t?e[s]=this.valueVisibility[s]:s>t&&(e[s-1]=this.valueVisibility[s])}),this.valueVisibility=e}handleKeyChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].data.gid=s,this.requestUpdate())}handleValueChange(t,e){const s=e.target.value;this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=s,this.requestUpdate())}setRandomValue(t){this.$data.__&&this.$data.__.options[t]&&(this.$data.__.options[t].value=Qo(16),this.valueVisibility[t]=!0,this.requestUpdate())}togglePasswordVisibility(t){this.sensitive&&(this.valueVisibility[t]=!this.valueVisibility[t],this.requestUpdate())}getPasswordVisibility(t){return this.valueVisibility[t]||!1}getInputType(t){return this.sensitive?this.getPasswordVisibility(t)?"text":"password":"text"}$icons(t){const e=super.$icons(t);if(e)return e;switch(t){case"plus":return d.html`
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
            ${this.$data.__&&this.$data.__.options?this.$data.__.options.map((a,o)=>{const h=this.getI18nText("keyLabel",this.defaultI18n,{index:String(o+1)}),u=this.getI18nText("valueLabel",this.defaultI18n,{index:String(o+1)}),f=this.getI18nText("placeholderKey",this.defaultI18n),p=this.getI18nText("placeholderValue",this.defaultI18n),g=this.getI18nText("removeRowLabel",this.defaultI18n),$=this.getI18nText("toggleVisibilityLabel",this.defaultI18n),m=this.getI18nText("generateRandomLabel",this.defaultI18n);return d.html`
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
                          placeholder="${f}"
                          value="${a.data.gid||""}"
                          aria-label="${h}"
                          data-field="key"
                          @input=${_=>this.handleKeyChange(o,_)}
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
                            placeholder="${p}"
                            name="${a.data.gid||""}"
                            value="${a.value}"
                            aria-label="${u}"
                            data-field="value"
                            ?disabled=${!a.data.gid}
                            @input=${_=>this.handleValueChange(o,_)}
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
                                  aria-label="${$}"
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
                            aria-label="${g}"
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
    `}},B([c({type:String})],l.Keyval.prototype,"keys",2),B([c({type:String})],l.Keyval.prototype,"values",2),B([c({type:Boolean})],l.Keyval.prototype,"sensitive",2),B([c({type:Boolean})],l.Keyval.prototype,"noninsertable",2),B([c({type:Number})],l.Keyval.prototype,"max",2),B([c({type:Number})],l.Keyval.prototype,"min",2),B([c({type:String})],l.Keyval.prototype,"aria-label",2),B([v()],l.Keyval.prototype,"valueVisibility",2),l.Keyval=B([w("fr-keyval")],l.Keyval);const{I:il}=ia,An=()=>document.createComment(""),wt=(r,t,e)=>{const i=r._$AA.parentNode,s=t===void 0?r._$AB:t._$AA;if(e===void 0){const n=i.insertBefore(An(),s),a=i.insertBefore(An(),s);e=new il(n,a,r,r.options)}else{const n=e._$AB.nextSibling,a=e._$AM,o=a!==r;if(o){let h;e._$AQ?.(r),e._$AM=r,e._$AP!==void 0&&(h=r._$AU)!==a._$AU&&e._$AP(h)}if(n!==s||o){let h=e._$AA;for(;h!==n;){const u=h.nextSibling;i.insertBefore(h,s),h=u}}}return e},et=(r,t,e=r)=>(r._$AI(t,e),r),sl={},rl=(r,t=sl)=>r._$AH=t,nl=r=>r._$AH,Ki=r=>{r._$AR(),r._$AA.remove()};const On=(r,t,e)=>{const i=new Map;for(let s=t;s<=e;s++)i.set(r[s],s);return i},it=Mt(class extends Pt{constructor(r){if(super(r),r.type!==xt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const s=[],n=[];let a=0;for(const o of r)s[a]=i?i(o,a):a,n[a]=e(o,a),a++;return{values:n,keys:s}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,i]){const s=nl(r),{values:n,keys:a}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=a,n;const o=this.ut??=[],h=[];let u,f,p=0,g=s.length-1,$=0,m=n.length-1;for(;p<=g&&$<=m;)if(s[p]===null)p++;else if(s[g]===null)g--;else if(o[p]===a[$])h[$]=et(s[p],n[$]),p++,$++;else if(o[g]===a[m])h[m]=et(s[g],n[m]),g--,m--;else if(o[p]===a[m])h[m]=et(s[p],n[m]),wt(r,h[m+1],s[p]),p++,m--;else if(o[g]===a[$])h[$]=et(s[g],n[$]),wt(r,s[p],s[g]),g--,$++;else if(u===void 0&&(u=On(a,$,m),f=On(o,p,g)),u.has(o[p]))if(u.has(o[g])){const _=f.get(a[$]),C=_!==void 0?s[_]:null;if(C===null){const k=wt(r,s[p]);et(k,n[$]),h[$]=k}else h[$]=et(C,n[$]),wt(r,s[p],C),s[_]=null;$++}else Ki(s[g]),g--;else Ki(s[p]),p++;for(;$<=m;){const _=wt(r,h[m+1]);et(_,n[$]),h[$++]=_}for(;p<=g;){const _=s[p++];_!==null&&Ki(_)}return this.ut=a,rl(r,h),U}});var al=Object.defineProperty,ol=Object.getOwnPropertyDescriptor,Kt=(r,t,e,i)=>{for(var s=i>1?void 0:i?ol(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&al(t,e,s),s};l.Calendar=class extends Tn(Q(b)){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-calendar:change",this.$cls={container:"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-btn":"","day-outside-month":"x","day-selected":"x","day-today":"x","day-marked":"x","button-outside-month":"x","button-selected":"x","button-today":"x","button-marked":"x"},this.$stl={container:"",header:"","previous-button":"","next-button":"",title:"",jumper:"","month-select":"","year-input":"",grid:"",weekdays:"",weekday:"",week:"",day:"","day-button":"","jumper-month":"","jumper-year":"","jumper-btn":"","day-outside-month":"","day-selected":"","day-today":"","day-marked":"","button-outside-month":"","button-selected":"","button-today":"","button-marked":""},this.navigate=t=>{const e=t.target;if(!e?.matches("button[data-iso]"))return;const i=Array.from(this.querySelectorAll("button[data-iso]")),s=i.indexOf(e),n=this.getGridPosition(e);if(!n)return;const{rowIndex:a,colIndex:o}=n;let h;const u={ArrowLeft:()=>this.findNextEnabled(i,s-1,-1),ArrowRight:()=>this.findNextEnabled(i,s+1,1),ArrowUp:()=>this.getNextEnabledInColumn(a-1,o,-1),ArrowDown:()=>this.getNextEnabledInColumn(a+1,o,1),Home:()=>this.getRowFirstEnabledButton(a),End:()=>this.getRowLastEnabledButton(a),PageUp:t.ctrlKey||t.metaKey?()=>{this.navigateYear("prev")}:()=>{this.navigateMonth("prev")},PageDown:t.ctrlKey||t.metaKey?()=>{this.navigateYear("next")}:()=>{this.navigateMonth("next")}};if(u[t.key]){t.preventDefault();const f=u[t.key]();f&&(h=f)}else if(t.key==="Enter"||t.key===" "){t.preventDefault(),e.click();return}h?.focus()}}get $value(){return this.$active?this.$active.slice(0,10):""}get $text(){return""}initializeValue(){if(this.value)try{const t=yt(this.value);this.$active=t.toISOString(),this["view-date"]=t.toISOString().slice(0,10)}catch(t){console.error(`[fr-calendar] Invalid date format for value: "${this.value}".`,t)}else this.today&&(this.$active=this.getTodayUTC().toISOString())}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.navigate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("keydown",this.navigate)}updated(t){t.has("$active")&&(this.updateComplete.then(()=>{const e=this.renderRoot.querySelector(`button[data-iso="${this.$active}"]`);e&&this.isDirty&&e.focus()}),this.emit())}findNextEnabled(t,e,i){for(let s=e;s>=0&&s<t.length;s+=i)if(!t[s].disabled)return t[s]}getNextEnabledInColumn(t,e,i){const s=Array.from(this.querySelectorAll("tr"));for(let n=t;n>=0&&n<s.length;n+=i){const a=s[n]?.children[e]?.querySelector("button[data-iso]");if(a&&!a.disabled)return a}}getRowFirstEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).find(i=>!i.disabled)}getRowLastEnabledButton(t){const e=this.querySelectorAll("tr")[t];return Array.from(e?.querySelectorAll("button[data-iso]")||[]).reverse().find(i=>!i.disabled)}getGridPosition(t){const e=t.closest("td"),i=e?.closest("tr");return!i||!e?null:{rowIndex:Array.from(this.querySelectorAll("tr")).indexOf(i),colIndex:Array.from(i.children).indexOf(e)}}select(t){this.$active=t.ISOString,t.month!=="current"&&(this["view-date"]=t.ISOString.slice(0,10)),this.isDirty||(this.isDirty=!0)}navigateYear(t){const[e,i,s]=this["view-date"].split("-"),n=t==="prev"?parseInt(e)-1:parseInt(e)+1;this["view-date"]=`${n}-${i}-${s}`}navigateMonth(t){const[e,i]=this["view-date"].split("-").map(Number);let s=i,n=e;t==="prev"?i===1?(s=12,n-=1):s-=1:i===12?(s=1,n+=1):s+=1,this["view-date"]=`${n}-${s.toString().padStart(2,"0")}-01`}selectMonth(t){const[e]=this["view-date"].split("-");this["view-date"]=`${e}-${(t+1).toString().padStart(2,"0")}-01`}setYear(t){if(/^\d{4}$/.test(t)){const[,e,i]=this["view-date"].split("-");this["view-date"]=`${t}-${e}-${i}`}}get weekdays(){const t=this.lang||void 0,e=[];for(let i=0;i<7;i++){const s=(this["starts-with"]+i)%7,n=this.createUTCDate(2023,0,1+s);e.push(n.toLocaleDateString(t,{weekday:this["weekday-format"],timeZone:"UTC"}))}return e}get calendar(){const[t,e]=this["view-date"].split("-").map(Number),i=this.getTodayUTC().toISOString().slice(0,10),s=this.parseDates(this["marked-dates"]),n=new Set(this.parseDates(this["disabled-dates"])),a=this.createUTCDate(t,e-1,1),o=this.createUTCDate(t,e,0).getUTCDate(),h=this.createUTCDate(t,e-1,0).getUTCDate();let u=(a.getUTCDay()-this["starts-with"]+7)%7;const f=[];let p=1,g=h-u+1,$=1;for(let m=0;m<6;m++){const _=[];for(let C=0;C<7;C++){let k,T,Y;m===0&&C<u?(k=this.createUTCDate(t,e-2,g),T=g,Y="prev",g++):p>o?(k=this.createUTCDate(t,e,$),T=$,Y="next",$++):(k=this.createUTCDate(t,e-1,p),T=p,Y="current",p++);const rt=k.toISOString(),F=rt.slice(0,10);_.push({date:T,month:Y,isToday:F===i,isDisabled:n.has(F)||!this.isDateInRange(rt),isMarked:s.includes(F),ISOString:rt})}if(f.push(_),p>o&&m>=4)break}return f}render(){return d.html`
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
              ${it(this.weekdays,t=>t,t=>d.html`<th
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
            ${it(this.calendar,t=>t[0].ISOString,t=>this.renderWeek(t))}
          </tbody>
        </table>
        ${this.renderHidden()}
      </div>
    `}renderHeader(){const{year:t,monthName:e}=this.getTimestampComponent(this.$viewDate),i=this.getI18nText("prevMonth",{prevMonth:"Previous month"}),s=this.getI18nText("nextMonth",{nextMonth:"Next month"});return d.html`
      <div class=${this.$cls.header} style=${this.$stl.header}>
        ${this.jumpable?d.nothing:d.html`
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
          ${this.jumpable?this.renderJumper():d.html`<span>${e} ${t}</span>`}
        </div>

        ${this.jumpable?d.nothing:d.html`
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
    `}renderJumper(){const{year:t,month:e}=this.getTimestampComponent(this.$viewDate),i=this.lang||void 0,s=Array.from({length:12},(u,f)=>this.createUTCDate(2e3,f,15).toLocaleDateString(i,{month:"long",timeZone:"UTC"})),n=this.getI18nText("prevMonth",{prevMonth:"Previous month"}),a=this.getI18nText("nextMonth",{nextMonth:"Next month"}),o=this.getI18nText("prevYear",{prevYear:"Previous year"}),h=this.getI18nText("nextYear",{nextYear:"Next year"});return d.html`
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
            @change=${u=>this.selectMonth(Number(u.target.value))}
          >
            ${s.map((u,f)=>d.html`<option value=${f}>${u}</option>`)}
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
            @input=${u=>{const f=u.target;f.value.length===4&&this.setYear(f.value)}}
          />
          <button
            class="${this.$cls["jumper-btn"]}"
            style=${this.$stl["jumper-btn"]}
            @click=${()=>this.navigateYear("next")}
            type="button"
            aria-label=${h}
          >
            ${this.$icons("chevron-right")}
          </button>
        </div>
      </div>
    `}renderWeek(t){return d.html`
      <tr class=${this.$cls.week} style=${this.$stl.week} role="row">
        ${it(t,e=>e.ISOString,e=>this.renderDay(e))}
      </tr>
    `}renderDay(t){const e=this.$active===t.ISOString,i=new Date(t.ISOString),s=this.lang||void 0,n=i.toLocaleDateString(s,{weekday:"long",year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}),a={[this.$cls.day]:!0,[this.$cls["day-outside-month"]]:t.month!=="current",[this.$cls["day-selected"]]:e,[this.$cls["day-today"]]:t.isToday,[this.$cls["day-marked"]]:t.isMarked},o={[this.$cls["day-button"]]:!0,[this.$cls["button-selected"]]:e,[this.$cls["button-today"]]:t.isToday,[this.$cls["button-marked"]]:t.isMarked,[this.$cls["button-outside-month"]]:t.month!=="current"};return d.html`
      <td
        class=${tt(a)}
        style=${this.$stl.day}
        role="gridcell"
        aria-selected=${e?"true":"false"}
      >
        <button
          class=${tt(o)}
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
    `}},Kt([v()],l.Calendar.prototype,"$active",2),Kt([v()],l.Calendar.prototype,"$cls",2),Kt([v()],l.Calendar.prototype,"$stl",2),l.Calendar=Kt([w("fr-calendar")],l.Calendar);var ll=Object.defineProperty,Yi=(r,t,e,i)=>{for(var s=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(t,e,s)||s);return s&&ll(t,e,s),s};const hl=r=>{class t extends r{constructor(){super(...arguments),this.$term="",this.$focused=-1,this.selected=null}get options(){const i={};return Object.entries(this.$data).forEach(([s,n])=>{const a=n.options.filter(o=>o.data.keywords?.some(h=>h.toLowerCase().includes(this.$term.toLowerCase())));a.length>0&&(i[s]={text:n.text,options:a,...n.data&&{data:n.data}})}),i}get count(){let i=0;for(const s in this.options){const n=this.options[s].options.length;i+=n}return i-1}updated(i){if(super.updated(i),i.has("$term")&&i.get("$term")!==void 0&&(this.dispatchEvent(new CustomEvent(this["search-event"],{detail:{value:this.$term},bubbles:!0,composed:!0})),this.updateComplete.then(()=>{this.$focused=-1})),i.has("$focused")&&this.listboxEl){this.listboxEl.querySelector('[role="option"][aria-selected="true"]')?.removeAttribute("aria-selected");const s=Array.from(this.listboxEl.querySelectorAll('[role="option"]'));this.activeOptionEl=s[this.$focused],this.activeOptionEl&&(this.activeOptionEl.setAttribute("aria-selected","true"),this.focusActiveOption())}}navigate(i){switch(i){case"t":this.$focused<=0?this.$focused=this.count:this.$focused--;break;case"d":this.$focused<this.count?this.$focused++:this.$focused=0;break}}focusActiveOption(i="smooth"){if(this.listboxEl&&this.activeOptionEl){const s={parent:this.listboxEl.getBoundingClientRect(),active:this.activeOptionEl.getBoundingClientRect()};this.listboxEl.scrollTo({top:this.activeOptionEl.offsetTop-this.listboxEl.offsetTop-s.parent.height/2+s.active.height/2,behavior:i})}}onKeydown(i){if(this.isOpen===!0)switch(i.key){case"ArrowDown":i.preventDefault(),this.navigate("d");break;case"ArrowUp":i.preventDefault(),this.navigate("t");break;case"Enter":if(i.preventDefault(),this.$focused===-1)return;this.onKeydownEnter();break;case"Home":i.preventDefault(),this.$focused=0;break;case"End":i.preventDefault(),this.$focused=this.count;break}}renderList(){const i=this._cls();return d.html`
        <ul
          class="${i.list}"
          role="listbox"
          tabindex="-1"
          aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
          @keydown="${this.onKeydown}"
        >
          ${it(Object.keys(this.options),s=>d.html`
              ${this.renderListHeader(s)}
              ${it(this.options[s].options,(n,a)=>this.renderListItem(s,n,a))}
            `)}
        </ul>
      `}renderListHeader(i){const s=this._cls();return i!=="__"?d.html`<li class="${s["item-header"]}" role="presentation">
            ${i}
          </li>`:""}onDropClose(){this.$focused=-1,this.$term=""}}return Yi([v()],t.prototype,"$term"),Yi([v()],t.prototype,"$focused"),Yi([Jt('[role="listbox"]')],t.prototype,"listboxEl"),t};var ul=Object.defineProperty,cl=Object.getOwnPropertyDescriptor,x=(r,t,e,i)=>{for(var s=i>1?void 0:i?cl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&ul(t,e,s),s};l.Select=class extends Ft(hl(Q(b))){constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this["input-event"]="fr-select:input",this["search-event"]="fr-select:search",this.searchable=!1,this.insertable=!1,this["send-headers"]="",this["send-url"]="",this["send-method"]="POST",this.multiple=!1,this.icon="",this.$selected=[],this.$i18n={"search-placeholder":"Search","selection-count":"{n} options selected",insert:"Insert",listLabel:"Options",buttonLabel:"Select an option"},this.$cls={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",drop:"",dropdown:"",arrow:""},this.$stl={container:"",button:"","button-text":"",icon:"",list:"",item:"","item-header":"","item-link":"","item-wrapper":"","item-icon":"","item-text":"","item-check":"","item-subtitle":"",search:"","search-input":"","search-icon":"",drop:"",dropdown:"",arrow:""},this.onInputKeydown=t=>{if(this.onKeydown(t),this.isOpen===!0)switch(t.key){case"Tab":!t.altKey&&!t.shiftKey&&!t.ctrlKey&&!t.metaKey&&t.preventDefault();break}}}get $text(){return this.$selected.length===0?this.placeholder!==""?this.placeholder:this.getI18nText("buttonLabel",{buttonLabel:"Select an option"}):this.multiple===!1&&this.selected?this.selected.text:this.$selected.length===1&&this.selected?this.selected.text:this.getI18nText("selection-count",{"selection-count":"{n} options selected"},{n:this.$selected.length})}get $value(){return this.multiple?this.$selected:this.$selected.length===1?this.$selected[0]:""}get count(){let t=this.insertable&&this.$term!==""&&!this.hasOption(this.$term)?1:0;for(const e in this.options){const i=this.options[e].options.length;t+=i}return t-1}connectedCallback(){super.connectedCallback(),this.toggleSelector="button",this.insertable&&(this.searchable=!0)}firstUpdated(t){super.firstUpdated?.(t),this.updateComplete.then(()=>{if(this.hasAttribute("value"))this.$selected=this.value.split(",").map(e=>e.trim()),this.multiple||(this.$selected=this.$selected.slice(-1)),this.updateSelectedFromValues();else{let e=[];for(const i in this.$data){const s=this.$data[i].options;if(this.multiple)s.forEach(n=>{n.selected&&e.push(n.value)});else{const n=[...s].reverse().find(a=>a.selected);if(n){e=[n.value],this.selected=n;break}}}this.$selected=e,this.multiple&&this.updateSelectedFromValues()}})}updated(t){super.updated(t),this.isRendered&&t.has("$selected")&&t.get("$selected")!==void 0&&this.emit()}initializeValue(){}select(t){t.disabled||(this.multiple?(this.$selected.findIndex(i=>i===t?.value)===-1?this.$selected=[...this.$selected,t.value]:this.$selected=this.$selected.filter(i=>i!==t.value),this.$selected.length>0&&this.updateSelectedFromValues(),this.requestUpdate()):(this.$selected=[t.value],this.selected=t,this.hide()))}updateSelectedFromValues(){if(this.$selected.length>0){const t=this.$selected[this.$selected.length-1];for(const e in this.$data){const i=this.$data[e].options.find(s=>s.value===t);if(i){this.selected=i;break}}}}onKeydownEnter(){const t=this.activeOptionEl?.dataset;if(t){const e=t.key,i=t.index;e==="__insert__"?this.insert():this.select(this.options[e].options[i])}}onClick(t){const{item:e}=t;this.select(e)}_cls(t){return{button:this.$cls.button,icon:this.$cls.icon,list:this.$cls.list,item:t?.item.disabled===!0?this.$cls.item:this.$cls.item,"item-header":this.$cls["item-header"],"item-link":this.$cls["item-link"],"item-wrapper":this.$cls["item-wrapper"],"item-icon":this.$cls["item-icon"],"item-text":this.$cls["item-text"],"item-check":this.$cls["item-check"],"item-subtitle":this.$cls["item-subtitle"],search:this.$cls.search,"search-input":this.$cls["search-input"],"search-icon":this.$cls["search-icon"],dropdown:this.$cls.dropdown}}renderListItem(t,e,i){const s=this._cls({item:e,index:i}),n=this.$selected.includes(e.value),a=this.getGlobalIndex(t,i);return d.html`
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
            ${e.data.icon?d.html`<span class="${s["item-icon"]}">${e.data.icon}</span>`:""}
            ${e.data.description?d.html`
                  <div>
                    <span class="${s["item-text"]}">${e.text}</span>
                    <div class="${s["item-subtitle"]}">
                      ${e.data.description}
                    </div>
                  </div>
                `:d.html`<span class="${s["item-text"]}">${e.text}</span>`}
          </div>
          ${n?d.html`<span class="${s["item-check"]}">✓</span>`:""}
        </button>
      </li>
    `}getGlobalIndex(t,e){let i=0,s=!1;this.insertable&&this.$term&&!this.hasOption(this.$term)&&i++;for(const n in this.options){if(n===t){i+=e,s=!0;break}i+=this.options[n].options.length}return s?i:-1}hasOption(t){return Object.values(this.$data).some(e=>e.options.some(i=>i.value===t))}addOption(t,e){const s=(this.$data[e]?.options||[]).some(n=>n.value===t.value);return s||(this.$data={...this.$data},this.$data[e]===void 0&&(this.$data[e]={text:t.group||"__",options:[]}),this.$data[e].options.push(t)),!s}async send(){function t(e){return typeof e=="object"&&"group"in e&&"value"in e&&"text"in e&&"disabled"in e&&"selected"in e&&"data"in e&&"key"in e.data&&"keywords"in e.data}try{if(!this["send-url"])throw new Error("No send URL provided");const e=this["send-headers"]?JSON.parse(this["send-headers"]):{"Content-Type":"application/json"},i={term:this.$term},s=await fetch(this["send-url"],{method:this["send-method"],headers:e,body:JSON.stringify(i)});if(!s.ok)throw new Error(`HTTP error: ${s.status}`);const n=await s.json();if(t(n))return n;throw new Error("Invalid response format")}catch{return{group:"__",text:this.$term,value:this.$term,data:{gid:"__",keywords:[this.$term]},selected:!0,disabled:!1}}}async insert(){const t=await this.send();this.addOption(t,t.data.gid),this.multiple?this.$selected=[...this.$selected,this.$term]:this.$selected=[this.$term],this.selected=t,this.$term="",this.hide()}renderSearch(){const t=this._cls();return this.searchable===!0?d.html`
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
        `:""}renderInsertion(){const t=this._cls();return d.html`
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
    `}renderList(){const t=this._cls();return d.html`
      <ul
        class="${t.list}"
        role="listbox"
        tabindex="-1"
        aria-label="${this.getI18nText("listLabel",{listLabel:"Options"})}"
        aria-multiselectable="${this.multiple}"
        @keydown="${this.onKeydown}"
      >
        ${this.insertable&&this.$term&&!this.hasOption(this.$term)?this.renderInsertion():""}
        ${it(Object.keys(this.options),e=>d.html`
            ${this.renderListHeader(e)}
            ${it(this.options[e].options,(i,s)=>this.renderListItem(e,i,s))}
          `)}
      </ul>
    `}onDropOpen(){}render(){const t=this._cls(),e=this.id?`${this.id}-button`:`fr-select-${Math.random().toString(36).substr(2,9)}`,i=this.id?`${this.id}-listbox`:`fr-listbox-${Math.random().toString(36).substr(2,9)}`,s=1e3+this.stackIndex;return d.html`
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
          ${this.icon?d.html`<span class="${t.icon}" style="${this.$stl.icon}"
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
          ${this.arrow?d.html`
                <div
                  data-arrow
                  class="${this.$dropCls.arrow} ${this.$cls.arrow}"
                  style="position: absolute; ${this.$dropStl.arrow||""} ${this.$stl.arrow}"
                ></div>
              `:""}
        </div>

        ${this.renderHidden()}
      </div>
    `}},x([c({type:Boolean})],l.Select.prototype,"searchable",2),x([c({type:Boolean})],l.Select.prototype,"insertable",2),x([c({type:String,attribute:"send-headers"})],l.Select.prototype,"send-headers",2),x([c({type:String,attribute:"send-url"})],l.Select.prototype,"send-url",2),x([c({type:String,attribute:"send-method"})],l.Select.prototype,"send-method",2),x([c({type:Boolean})],l.Select.prototype,"multiple",2),x([c({type:String})],l.Select.prototype,"icon",2),x([v()],l.Select.prototype,"$selected",2),x([v()],l.Select.prototype,"$i18n",2),x([v()],l.Select.prototype,"$cls",2),x([v()],l.Select.prototype,"$stl",2),l.Select=x([w("fr-select")],l.Select);var dl=Object.defineProperty,pl=Object.getOwnPropertyDescriptor,O=(r,t,e,i)=>{for(var s=i>1?void 0:i?pl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&dl(t,e,s),s};const Et=[],fl=1e3,gl=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","button:not([disabled])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");l.Modal=class extends b{constructor(){super(...arguments),this["cls-default-element"]="dialog",this["stl-default-element"]="dialog",this.open=!1,this.draggable=!1,this.closeOnBackdrop=!0,this.closeOnEscape=!0,this.restoreFocus=!0,this.lockScroll=!0,this.ariaLabelledby=null,this.ariaLabel=null,this.ariaDescribedby=null,this.animationDuration=300,this.dragPosition=null,this.$cls={"host-inner":"",backdrop:"",dialog:"",header:"",content:"",footer:""},this.$stl={"host-inner":"",backdrop:"",dialog:"",header:"",content:"",footer:""},this.dialogElement=null,this.triggerElement=null,this.previouslyFocusedElement=null,this.isDragging=!1,this.dragStartPos=null,this.dragStartMousePos=null,this.templates=new Map,this.defaultI18n={closeLabel:"Close modal",modalLabel:"Modal dialog"},this.handleKeyDown=t=>{if(this.open){if(t.key==="Escape"&&this.closeOnEscape){t.preventDefault(),this.hide("escape");return}t.key==="Tab"&&this.handleTabKey(t)}},this.handleBackdropClick=t=>{t.target===t.currentTarget&&this.closeOnBackdrop&&this.hide("backdrop")},this.handleCloseClick=t=>{const e=t.target;(e.hasAttribute("data-modal-close")||e.closest("[data-modal-close]"))&&(t.preventDefault(),this.hide("button"))},this.handleMouseDown=t=>{if(!this.draggable)return;const e=t.target;if(!e.closest("[data-header]")||e.matches("button, a, input, select, textarea")||e.closest("button, a, input, select, textarea"))return;t.preventDefault(),this.isDragging=!0,this.dragStartMousePos={x:t.clientX,y:t.clientY};const s=this.dragPosition||{x:0,y:0};this.dragStartPos={...s},document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),this.dialogElement?.setAttribute("data-dragging","")},this.handleMouseMove=t=>{if(!this.isDragging||!this.dragStartPos||!this.dragStartMousePos)return;const e=t.clientX-this.dragStartMousePos.x,i=t.clientY-this.dragStartMousePos.y,s={x:this.dragStartPos.x+e,y:this.dragStartPos.y+i};this.dragPosition=s;const n=new CustomEvent("dragging",{detail:{modal:this,x:s.x,y:s.y},bubbles:!0,composed:!0});this.dispatchEvent(n)},this.handleMouseUp=()=>{this.isDragging&&(this.isDragging=!1,this.dragStartPos=null,this.dragStartMousePos=null,document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.dialogElement?.removeAttribute("data-dragging"))}}getTemplate(t){return this.templates.get(t)||""}parseTemplates(){this.querySelectorAll('template[data-fn="template"][data-name]').forEach(e=>{const i=e.getAttribute("data-name");i&&e instanceof HTMLTemplateElement&&this.templates.set(i,e.innerHTML.trim())})}async show(t){if(this.open)return;t&&(this.triggerElement=t);const e=new CustomEvent("opening",{detail:{modal:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.previouslyFocusedElement=document.activeElement,Et.push(this),this.open=!0,this.lockScroll&&(document.body.style.overflow="hidden"),await this.updateComplete,this.focusFirstElement(),setTimeout(()=>{const i=new CustomEvent("opened",{detail:{modal:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0});this.dispatchEvent(i)},this.animationDuration))}async hide(t){if(!this.open)return;const e=new CustomEvent("closing",{detail:{modal:this,trigger:this.triggerElement||void 0,reason:t},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(e))return;this.open=!1;const i=Et.indexOf(this);i>-1&&Et.splice(i,1),this.lockScroll&&Et.length===0&&(document.body.style.overflow=""),this.restoreFocus&&(this.triggerElement&&document.contains(this.triggerElement)?this.triggerElement.focus():this.previouslyFocusedElement&&document.contains(this.previouslyFocusedElement)&&this.previouslyFocusedElement.focus()),this.triggerElement=null,this.previouslyFocusedElement=null,this.dragPosition=null,setTimeout(()=>{const s=new CustomEvent("closed",{detail:{modal:this,reason:t},bubbles:!0,composed:!0});this.dispatchEvent(s)},this.animationDuration)}toggle(t){this.open?this.hide():this.show(t)}focusFirstElement(){this.dialogElement||(this.dialogElement=this.querySelector("[data-dialog]"));const t=this.getFocusableElements();t.length>0?t[0].focus():this.dialogElement&&this.dialogElement.focus()}getFocusableElements(){return this.dialogElement?Array.from(this.dialogElement.querySelectorAll(gl)):[]}handleTabKey(t){const e=this.getFocusableElements();if(e.length===0){t.preventDefault();return}const i=e[0],s=e[e.length-1],n=document.activeElement;t.shiftKey?(n===i||!this.dialogElement?.contains(n))&&(t.preventDefault(),s.focus()):n===s&&(t.preventDefault(),i.focus())}getZIndex(){const t=Et.indexOf(this);return fl+(t>=0?t*10:0)}connectedCallback(){super.connectedCallback(),this.parseTemplates(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.templates.clear()}updated(t){super.updated(t),this.open&&!this.dialogElement&&(this.dialogElement=this.querySelector("[data-dialog]"))}render(){const t=this.open,e=this.getZIndex(),i=this.ariaLabel||this.getI18nText("modalLabel",this.defaultI18n),s=this.dragPosition?`translate(${this.dragPosition.x}px, ${this.dragPosition.y}px)`:"",n=this.getTemplate("header"),a=this.getTemplate("footer"),o=this.getTemplate("body")||this.$template,h=t?"display: flex;":"display: none;";return d.html`
      <div
        data-host-inner
        class="${this.$cls["host-inner"]}"
        style="${this.$stl["host-inner"]}"
      >
        <div
          class="${this.$cls.backdrop}"
          style="${h} z-index: ${e}; ${this.$stl.backdrop}"
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
            ${n?d.html`
                  <div
                    data-header
                    class="${this.$cls.header}"
                    style="${this.$stl.header}"
                  >
                    ${L(n)}
                  </div>
                `:""}
            <div
              data-content
              class="${this.$cls.content}"
              style="${this.$stl.content}"
            >
              ${L(o)}
            </div>
            ${a?d.html`
                  <div
                    data-footer
                    class="${this.$cls.footer}"
                    style="${this.$stl.footer}"
                  >
                    ${L(a)}
                  </div>
                `:""}
          </div>
        </div>
      </div>
    `}},O([c({type:Boolean,reflect:!0})],l.Modal.prototype,"open",2),O([c({type:Boolean})],l.Modal.prototype,"draggable",2),O([c({type:Boolean,attribute:"close-on-backdrop"})],l.Modal.prototype,"closeOnBackdrop",2),O([c({type:Boolean,attribute:"close-on-escape"})],l.Modal.prototype,"closeOnEscape",2),O([c({type:Boolean,attribute:"restore-focus"})],l.Modal.prototype,"restoreFocus",2),O([c({type:Boolean,attribute:"lock-scroll"})],l.Modal.prototype,"lockScroll",2),O([c({type:String,attribute:"aria-labelledby"})],l.Modal.prototype,"ariaLabelledby",2),O([c({type:String,attribute:"aria-label"})],l.Modal.prototype,"ariaLabel",2),O([c({type:String,attribute:"aria-describedby"})],l.Modal.prototype,"ariaDescribedby",2),O([c({type:Number,attribute:"animation-duration"})],l.Modal.prototype,"animationDuration",2),O([v()],l.Modal.prototype,"dragPosition",2),O([v()],l.Modal.prototype,"$cls",2),O([v()],l.Modal.prototype,"$stl",2),l.Modal=O([w("fr-modal")],l.Modal);var $l=Object.defineProperty,ml=Object.getOwnPropertyDescriptor,R=(r,t,e,i)=>{for(var s=i>1?void 0:i?ml(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&$l(t,e,s),s};const Tt=[],vl=1100;l.Drawer=class extends b{constructor(){super(...arguments),this["cls-default-element"]="drawer",this["stl-default-element"]="drawer",this.open=!1,this.closeOnBackdrop=!0,this.closeOnEscape=!0,this.restoreFocus=!0,this.lockScroll=!0,this.position="right",this.animationDuration=300,this.size="md",this.triggerElement=null,this.previouslyFocusedElement=null,this.$cls={"host-inner":"",backdrop:"",drawer:""},this.$stl={"host-inner":"",backdrop:"",drawer:""},this.handleKeyDown=t=>{this.open&&t.key==="Escape"&&this.closeOnEscape&&(t.preventDefault(),this.hide("escape"))},this.handleBackdropClick=t=>{t.target===t.currentTarget&&this.closeOnBackdrop&&this.hide("backdrop")}}async show(t){if(this.open)return;t&&(this.triggerElement=t);const e=new CustomEvent("opening",{detail:{drawer:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(e)&&(this.previouslyFocusedElement=document.activeElement,Tt.push(this),this.open=!0,this.lockScroll&&(document.body.style.overflow="hidden"),await this.updateComplete,setTimeout(()=>{const i=new CustomEvent("opened",{detail:{drawer:this,trigger:this.triggerElement||void 0},bubbles:!0,composed:!0});this.dispatchEvent(i)},this.animationDuration))}async hide(t){if(!this.open)return;const e=new CustomEvent("closing",{detail:{drawer:this,trigger:this.triggerElement||void 0,reason:t},bubbles:!0,composed:!0,cancelable:!0});if(!this.dispatchEvent(e))return;this.open=!1;const i=Tt.indexOf(this);i>-1&&Tt.splice(i,1),this.lockScroll&&Tt.length===0&&(document.body.style.overflow=""),this.restoreFocus&&(this.triggerElement&&document.contains(this.triggerElement)?this.triggerElement.focus():this.previouslyFocusedElement&&document.contains(this.previouslyFocusedElement)&&this.previouslyFocusedElement.focus()),this.triggerElement=null,this.previouslyFocusedElement=null,setTimeout(()=>{const s=new CustomEvent("closed",{detail:{drawer:this,reason:t},bubbles:!0,composed:!0});this.dispatchEvent(s)},this.animationDuration)}toggle(t){this.open?this.hide():this.show(t)}getZIndex(){const t=Tt.indexOf(this);return vl+(t>=0?t*10:0)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this.handleKeyDown)}render(){const t=this.open,e=this.getZIndex(),i={left:"translateX(-100%)",right:"translateX(100%)",top:"translateY(-100%)",bottom:"translateY(100%)"}[this.position],s=t?"display: flex;":"display: none;",n=t?"translate(0, 0)":i,a={sm:"240px",md:"400px",lg:"640px",full:"100%"}[this.size];return d.html`
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
            ${L(this.$template)}
          </div>
        </div>
      </div>
    `}},R([c({type:Boolean,reflect:!0})],l.Drawer.prototype,"open",2),R([c({type:Boolean,attribute:"close-on-backdrop"})],l.Drawer.prototype,"closeOnBackdrop",2),R([c({type:Boolean,attribute:"close-on-escape"})],l.Drawer.prototype,"closeOnEscape",2),R([c({type:Boolean,attribute:"restore-focus"})],l.Drawer.prototype,"restoreFocus",2),R([c({type:Boolean,attribute:"lock-scroll"})],l.Drawer.prototype,"lockScroll",2),R([c({type:String})],l.Drawer.prototype,"position",2),R([c({type:Number,attribute:"animation-duration"})],l.Drawer.prototype,"animationDuration",2),R([c({type:String})],l.Drawer.prototype,"size",2),R([v()],l.Drawer.prototype,"$cls",2),R([v()],l.Drawer.prototype,"$stl",2),l.Drawer=R([w("fr-drawer")],l.Drawer);var bl=Object.getOwnPropertyDescriptor,yl=(r,t,e,i)=>{for(var s=i>1?void 0:i?bl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};l.Tab=class extends b{get items(){return Array.from(this.querySelectorAll(":scope > fr-tab-item"))}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-tab-activate-request",this.handleActivateRequest)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-tab-activate-request",this.handleActivateRequest)}handleActivateRequest(t){t.stopPropagation();const e=t.detail.item;this.items.forEach(i=>{i.setActive(i===e)})}render(){return this.setAttribute("role","tablist"),d.nothing}},l.Tab=yl([w("fr-tab")],l.Tab);var _l=Object.defineProperty,wl=Object.getOwnPropertyDescriptor,Gi=(r,t,e,i)=>{for(var s=i>1?void 0:i?wl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&_l(t,e,s),s};let El=0;l.TabItem=class extends b{constructor(){super(...arguments),this.active=!1,this.tid=`fr-tab-item-${++El}`}get titleElement(){return this.querySelector("fr-tab-title")}get panelElement(){return this.querySelector("fr-tab-panel")}get allItems(){const t=this.parentElement;return t?Array.from(t.querySelectorAll(":scope > fr-tab-item")):[]}connectedCallback(){super.connectedCallback(),this.addEventListener("fr-tab-title-click",this.handleTitleClick),this.addEventListener("fr-tab-navigation-key",this.handleNavigationKey),this.active&&requestAnimationFrame(()=>this.updateChildrenAria())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("fr-tab-title-click",this.handleTitleClick),this.removeEventListener("fr-tab-navigation-key",this.handleNavigationKey)}handleTitleClick(){this.dispatchEvent(new CustomEvent("fr-tab-activate-request",{bubbles:!0,composed:!0,detail:{item:this}}))}handleNavigationKey(t){const{key:e,originalEvent:i}=t.detail,s=this.allItems,n=s.indexOf(this);if(n===-1)return;let a=n;switch(e){case"ArrowRight":i.preventDefault(),a=(n+1)%s.length;break;case"ArrowLeft":i.preventDefault(),a=n===0?s.length-1:n-1;break;case"Home":i.preventDefault(),a=0;break;case"End":i.preventDefault(),a=s.length-1;break;default:return}s[a]?.focusTitle()}focusTitle(){this.titleElement?.focus()}updateChildrenAria(){this.titleElement?.updateAria(this.active,`${this.tid}-panel`),this.panelElement?.updateAria(`${this.tid}-title`,this.active)}setActive(t){this.active!==t&&(this.active=t)}updated(t){super.updated(t),t.has("active")&&(this.updateChildrenAria(),this.dispatchEvent(new CustomEvent(this.active?"activate":"deactivate",{bubbles:!0,composed:!0,detail:{item:this}})))}render(){return d.nothing}},Gi([c({type:Boolean,reflect:!0})],l.TabItem.prototype,"active",2),Gi([v()],l.TabItem.prototype,"tid",2),l.TabItem=Gi([w("fr-tab-item")],l.TabItem);var Tl=Object.defineProperty,Sl=Object.getOwnPropertyDescriptor,Wi=(r,t,e,i)=>{for(var s=i>1?void 0:i?Sl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Tl(t,e,s),s};l.TabTitle=class extends b{constructor(){super(...arguments),this.isActive=!1,this.controlsId="",this.$cls={container:"",button:""},this.$stl={container:"",button:""},this["cls-default-element"]="button",this["stl-default-element"]="button"}handleClick(){this.dispatchEvent(new CustomEvent("fr-tab-title-click",{bubbles:!0,composed:!0}))}handleKeydown(t){if(t.key==="Enter"||t.key===" "){t.preventDefault(),this.handleClick();return}["ArrowLeft","ArrowRight","Home","End"].includes(t.key)&&this.dispatchEvent(new CustomEvent("fr-tab-navigation-key",{bubbles:!0,composed:!0,detail:{key:t.key,originalEvent:t}}))}updateAria(t,e){this.isActive=t,this.controlsId=e}focus(){this.querySelector("button[data-tab-trigger]")?.focus()}render(){return d.html`
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
          ${this.$template?L(this.$template):d.nothing}
        </button>
      </div>
    `}},Wi([v()],l.TabTitle.prototype,"isActive",2),Wi([v()],l.TabTitle.prototype,"controlsId",2),l.TabTitle=Wi([w("fr-tab-title")],l.TabTitle);var Cl=Object.defineProperty,Il=Object.getOwnPropertyDescriptor,Ji=(r,t,e,i)=>{for(var s=i>1?void 0:i?Il(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&Cl(t,e,s),s};l.TabPanel=class extends b{constructor(){super(...arguments),this.labelledBy="",this.visible=!1}updateAria(t,e){this.labelledBy=t,this.visible=e,requestAnimationFrame(()=>{const i=this.querySelector("[data-host-inner]");i&&(i.hidden=!e,i.style.display=e?"block":"none")})}render(){return d.html`
      <div
        role="tabpanel"
        id="${this.parentElement?.id?`${this.parentElement.id}-panel`:""}"
        aria-labelledby="${this.labelledBy}"
        class="${this.$cls["host-inner"]||""}"
        style="${this.$stl["host-inner"]||""}"
        data-host-inner
        ?hidden="${!this.visible}"
      >
        ${this.$template?L(this.$template):d.nothing}
      </div>
    `}},Ji([v()],l.TabPanel.prototype,"labelledBy",2),Ji([v()],l.TabPanel.prototype,"visible",2),l.TabPanel=Ji([w("fr-tab-panel")],l.TabPanel);var Al=Object.getOwnPropertyDescriptor,Ol=(r,t,e,i)=>{for(var s=i>1?void 0:i?Al(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=a(s)||s);return s};l.Tooltip=class extends Ft(b){constructor(){super(),this["cls-default-element"]="tooltip",this.trigger="hover",this.placement="top",this.delayShow=200,this.delayHide=0,this.offset=8,this.closeOnOutsideClick=!1,this.closeOnEscape=!1,this.closeOnScroll=!1,this.focusTrap=!1,this.returnFocus=!1}render(){const t=this.$i18n.label||this.label||void 0,e=this.describedby||void 0,i=1e3+this.stackIndex;return d.html`
      <div
        data-host-inner
        data-drop
        id="${this.id}"
        class="${this.$dropCls.tooltip||this.$dropCls.drop||""} ${this.stackIndex>0?"nested":""}"
        style="display: ${this.isOpen?"block":"none"}; position: absolute; --tooltip-duration: ${this.duration}ms; z-index: ${i}; ${this.$dropStl.tooltip||this.$dropStl.drop||""}"
        role="tooltip"
        aria-label="${t||d.nothing}"
        aria-describedby="${e||d.nothing}"
        @mouseenter=${this.trigger.includes("hover")?this.handleDropMouseEnter:d.nothing}
        @mouseleave=${this.trigger.includes("hover")?this.handleDropMouseLeave:d.nothing}
      >
        ${L(this.$template)}
        ${this.arrow?d.html`
              <div
                data-arrow
                class="${this.$dropCls.arrow||""}"
                style="position: absolute; ${this.$dropStl.arrow||""}"
              ></div>
            `:d.nothing}
      </div>
    `}},l.Tooltip=Ol([w("fr-tooltip")],l.Tooltip);var kl=Object.defineProperty,Dl=Object.getOwnPropertyDescriptor,M=(r,t,e,i)=>{for(var s=i>1?void 0:i?Dl(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&kl(t,e,s),s};l.Icon=class extends b{constructor(){super(...arguments),this["cls-default-element"]="svg",this["stl-default-element"]="svg",this.icon="",this.label="",this.decorative=!1,this.role="",this["stroke-width"]="2",this.height="16",this.width="16",this.color="",this.fill="none",this.defaultI18n={label:""}}get key(){return this.icon.trim().split("-").map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")}getEffectiveLabel(){return this.getI18nText("label",this.defaultI18n)||this.label}updated(t){(["icon","stroke-width","height","width","size","color","fill","label","decorative","role","$cls","$stl"].some(i=>t.has(i))||t.has("$i18n"))&&this.updateComplete.then(()=>{this.regenerateSvg()})}regenerateSvg(){this.$svg=this.createSvg({icon:this.key,cls:this.$cls.svg||"",stl:this.$stl.svg||"",height:this.size||this.height,width:this.size||this.width,strokeWidth:this["stroke-width"],color:this.color,fill:this.fill,label:this.getEffectiveLabel(),decorative:this.decorative,role:this.role})}createSvg(t){const{icon:e,cls:i,stl:s,height:n,width:a,strokeWidth:o,color:h,fill:u,label:f,decorative:p,role:g}=t;try{const $=Mn[e];if(!$){console.warn(`fr-icon: Icon "${this.icon}" not found in Lucide icons.`);return}const m=Xi.createElement($);if(i&&m.setAttribute("class",i),s&&m.setAttribute("style",s),m.setAttribute("height",n),m.setAttribute("width",a),m.setAttribute("stroke-width",o),u!=="none"&&m.setAttribute("fill",u),h){const _=m.getAttribute("style")||"";m.setAttribute("style",`${_}; color: ${h};`)}return p?(m.setAttribute("aria-hidden","true"),m.removeAttribute("role"),m.removeAttribute("aria-label")):f?(m.setAttribute("role",g||"img"),m.setAttribute("aria-label",f),m.removeAttribute("aria-hidden")):g&&(m.setAttribute("role",g),m.removeAttribute("aria-hidden")),m.setAttribute("data-icon",this.icon),m.setAttribute("data-lucide",this.icon),m}catch($){console.warn(`fr-icon: Failed to create icon "${this.icon}":`,$);return}}render(){return this.renderRoot.children.length===0?this.$svg:d.nothing}},M([c({type:String})],l.Icon.prototype,"icon",2),M([c({type:String})],l.Icon.prototype,"label",2),M([c({type:Boolean})],l.Icon.prototype,"decorative",2),M([c({type:String})],l.Icon.prototype,"role",2),M([c({type:String})],l.Icon.prototype,"stroke-width",2),M([c({type:String})],l.Icon.prototype,"height",2),M([c({type:String})],l.Icon.prototype,"width",2),M([c({type:String})],l.Icon.prototype,"size",2),M([c({type:String})],l.Icon.prototype,"color",2),M([c({type:String})],l.Icon.prototype,"fill",2),M([v()],l.Icon.prototype,"$svg",2),l.Icon=M([w("fr-icon")],l.Icon);var xl=Object.defineProperty,Ml=Object.getOwnPropertyDescriptor,st=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ml(t,e):t,n=r.length-1,a;n>=0;n--)(a=r[n])&&(s=(i?a(t,e,s):a(s))||s);return i&&s&&xl(t,e,s),s};return l.Chart=class extends b{constructor(){super(...arguments),this["cls-default-element"]="container",this["stl-default-element"]="container",this.loading=!1,this.width="100%",this.height="auto",this["aria-label"]="",this.hasError=!1,this.errorMessage="",this.apexCharts=null,this.defaultI18n={chartLabel:"Chart",loadingMessage:"Loading chart...",errorMessage:"Failed to load chart. Please try again.",noDataMessage:"No data available"}}get $apexChartsConfig(){return"apexCharts"in this.$config&&typeof this.$config=="object"?this.$config.apexCharts:{}}hasValidConfig(){return Object.keys(this.$apexChartsConfig).length>0}firstUpdated(t){super.firstUpdated(t),this.loading||this.initializeApexCharts()}updated(t){super.updated(t),t.has("loading")&&!this.loading&&!this.apexCharts&&this.initializeApexCharts()}disconnectedCallback(){super.disconnectedCallback(),this.apexCharts&&(this.apexCharts.destroy(),this.apexCharts=null)}onConfigChanged(){if(this.apexCharts&&this.hasValidConfig())try{this.apexCharts.updateOptions(this.$apexChartsConfig,!0,!0),this.hasError=!1,this.errorMessage=""}catch(t){console.error("fr-chart: Failed to update chart:",t),this.hasError=!0,this.errorMessage=t instanceof Error?t.message:"Unknown error"}else!this.apexCharts&&this.hasValidConfig()&&this.initializeApexCharts()}async initializeApexCharts(){const t=this.renderRoot.querySelector("[data-chart-container]");if(!t){console.warn("fr-chart: Chart container not found");return}if(!this.hasValidConfig()){console.warn("fr-chart: No valid chart configuration found"),this.hasError=!0,this.errorMessage=this.getI18nText("noDataMessage",this.defaultI18n);return}if(this.apexCharts===null)try{const e={...this.$apexChartsConfig,chart:{...this.$apexChartsConfig.chart,width:this.width,height:this.height}};this.apexCharts=new Dn(t,e),await this.apexCharts.render(),this.isRendered=!0,this.hasError=!1,this.errorMessage=""}catch(e){console.error("fr-chart: Failed to initialize chart:",e),this.hasError=!0,this.errorMessage=e instanceof Error?e.message:this.getI18nText("errorMessage",this.defaultI18n)}}renderLoading(){const t=this.getI18nText("loadingMessage",this.defaultI18n);return d.html`
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
    `}async updateChart(t,e=!0,i=!0){if(this.apexCharts)try{await this.apexCharts.updateOptions(t,e,i),this.hasError=!1,this.errorMessage=""}catch(s){throw console.error("fr-chart: Failed to update chart:",s),this.hasError=!0,this.errorMessage=s instanceof Error?s.message:"Unknown error",s}else throw new Error("Chart not initialized")}async updateSeries(t,e=!0){if(this.apexCharts)try{await this.apexCharts.updateSeries(t,e),this.hasError=!1,this.errorMessage=""}catch(i){throw console.error("fr-chart: Failed to update series:",i),this.hasError=!0,this.errorMessage=i instanceof Error?i.message:"Unknown error",i}else throw new Error("Chart not initialized")}getChartInstance(){return this.apexCharts}},st([c({type:Boolean})],l.Chart.prototype,"loading",2),st([c({type:String})],l.Chart.prototype,"width",2),st([c({type:String})],l.Chart.prototype,"height",2),st([c({type:String})],l.Chart.prototype,"aria-label",2),st([v()],l.Chart.prototype,"hasError",2),st([v()],l.Chart.prototype,"errorMessage",2),l.Chart=st([w("fr-chart")],l.Chart),Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),l})({},Lit,AnimeJS,FloatingUI,Lucide,ApexCharts);
