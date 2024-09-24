(function(){"use strict";function E(){return window.panel}function K(){return E().api}function ve(){const r=K();return{load:({parent:t,name:e})=>r.get(`${t}/sections/${e}`)}}function J(){return E().app.$store}const l=window.Vue,H=l.computed;l.customRef,l.defineAsyncComponent,l.defineComponent,l.effectScope,l.getCurrentInstance,l.getCurrentScope,l.h,l.inject,l.isProxy,l.isReactive,l.isReadonly,l.isRef,l.isShallow,l.markRaw;const be=l.nextTick;l.onActivated,l.onBeforeMount,l.onBeforeUnmount,l.onBeforeUpdate,l.onDeactivated,l.onErrorCaptured,l.onMounted,l.onRenderTracked,l.onRenderTriggered,l.onScopeDispose,l.onServerPrefetch,l.onUnmounted,l.onUpdated,l.provide,l.proxyRefs,l.reactive,l.readonly;const v=l.ref;l.shallowReactive,l.shallowReadonly,l.shallowRef,l.toRaw,l.toRef,l.toRefs,l.triggerRef;const Z=l.unref;l.useAttrs,l.useCssModule,l.useCssVars,l.useListeners,l.useSlots;const _e=l.watch;l.watchEffect,l.watchPostEffect,l.watchSyncEffect;const ke={blueprint:String,lock:[Boolean,Object],help:String,name:String,parent:String,timestamp:Number};function N(r,s,t,e,n,i,o,f){var a=typeof r=="function"?r.options:r;return s&&(a.render=s,a.staticRenderFns=t,a._compiled=!0),{exports:r,options:a}}const j={en:{"modal.info":"Thanks for purchasing {label}! Please enter your email address and order ID to activate your license.","modal.fields.orderId.help":'<a href="https://app.lemonsqueezy.com/my-orders" target="_blank">Find your order number</a> on Lemon Squeezy or <a href="mailto:hello@kirby.tools">contact us</a> if you cannot find it.',"modal.error.required.fields":"Email address and order ID are required","modal.error.invalid.unauthorized":"Email address or order ID is incorrect","modal.error.invalid.licenseKey":"License key invalid for this plugin","modal.error.incompatible.licenseKey":"License key invalid for this plugin version","modal.error.registered":"License key already registered",activate:"Activate",activated:"Plugin activated"},de:{"modal.info":"Dankeschön für den Kauf von {label}! Bitte gib deine E-Mail-Adresse und Bestellnummer ein, um deine Lizenz zu aktivieren.","modal.fields.orderId.help":'<a href="https://app.lemonsqueezy.com/my-orders" target="_blank">Finde deine Bestellnummer</a> bei Lemon Squeezy oder <a href="mailto:hello@kirby.tools">kontaktiere uns</a>, wenn du sie nicht finden kannst.',"modal.error.required.fields":"E-Mail-Adresse und Bestellnummer sind notwendig","modal.error.invalid.unauthorized":"E-Mail-Adresse oder Bestellnummer ist falsch","modal.error.invalid.licenseKey":"Lizenzschlüssel ungültig für dieses Plugin","modal.error.incompatible.licenseKey":"Lizenzschlüssel ungültig für diese Plugin-Version","modal.error.registered":"Lizenzschlüssel bereits registriert",activate:"Aktivieren",activated:"Plugin aktiviert"},fr:{"modal.info":"Merci d'avoir acheté {label} ! Veuillez saisir votre adresse e-mail et votre numéro de commande pour activer votre licence.","modal.fields.orderId.help":'<a href="https://app.lemonsqueezy.com/my-orders" target="_blank">Trouvez votre numéro de commande</a> sur Lemon Squeezy ou <a href="mailto:hello@kirby.tools">contactez-nous</a> si vous ne le trouvez pas.',"modal.error.required.fields":"Adresse e-mail et numéro de commande requis","modal.error.invalid.unauthorized":"Adresse e-mail ou numéro de commande incorrect","modal.error.invalid.licenseKey":"Clé de licence invalide pour ce plugin","modal.error.incompatible.licenseKey":"Clé de licence invalide pour cette version du plugin","modal.error.registered":"Clé de licence déjà enregistrée",activate:"Activer",activated:"Plugin activé"}};function x(r,s,t){var o;const n=E().translation.code,i=((o=j==null?void 0:j[n])==null?void 0:o[r])??t;if(i)return s?Se(i,s):i}function Se(r,s,t){return r.replace(/\{(\w+)\}/g,(e,n)=>s[n]||n)}const Ae=["localhost","127.0.0.1","[::1]"],we=["local","test","ddev.site"];function xe({label:r,apiNamespace:s}){const t=E(),e=K(),n=Re(),i=async(a,u)=>{if(!a||!u)throw new Error("Email and order ID are required");const d=await e.post(`${s}/register`,{email:a,orderId:u});if((d==null?void 0:d.status)!=="ok")throw new Error("Registration failed");return!0};return{isLocalhost:n,assertActivationIntegrity:async({component:a,licenseStatus:u})=>{if(Z(u)==="active")return;await be();const d=Z(a);if(!(d!=null&&d.$el)||window.getComputedStyle(d.$el).display==="none"||window.getComputedStyle(d.$el).visibility==="hidden"||window.getComputedStyle(d.$el).opacity==="0")throw new Error("Are you trying to hide the activation buttons? Please buy a license.")},openLicenseModal:()=>{let a=!1;return new Promise(u=>{t.dialog.open({component:"k-form-dialog",props:{submitButton:{icon:"check",theme:"love",text:x("activate",{label:r})},fields:{info:{type:"info",text:x("modal.info",{label:r})},email:{label:t.t("email"),type:"email"},orderId:{label:"Order ID",type:"text",help:x("modal.fields.orderId.help",{label:r})}}},on:{close:()=>{u({isRegistered:a})},submit:async d=>{const{email:m,orderId:c}=d;if(!m||!c){t.notification.error(x("modal.error.required.fields"));return}try{await i(m,Number(c))}catch(p){let h=p.message;h==="Unauthorized"?h=x("modal.error.invalid.unauthorized"):h==="License key not valid for this plugin"?h=x("modal.error.invalid.licenseKey"):h==="License key not valid for this plugin version"?h=x("modal.error.incompatible.licenseKey"):h==="License key already registered"&&(h=x("modal.error.registered")),t.notification.error(h);return}a=!0,t.dialog.close(),t.notification.success(x("activated"))}}})})}}}function Re(){const{hostname:r}=window.location,s=Ae.includes(r),t=we.some(e=>r.endsWith(`.${e}`));return s||t}class Le{constructor(){this.defaultColor="#7f8c8d",this.levelColorMap={0:"#c0392b",1:"#f39c12",2:"#00BCD4"},this.typeColorMap={success:"#2ecc71"}}_getLogFn(s){return s<1?console.error:console.log}log(s){const t=this._getLogFn(s.level),e=s.type==="log"?"":s.type,n=s.tag||"",o=`
  background: ${this.typeColorMap[s.type]||this.levelColorMap[s.level]||this.defaultColor};
  border-radius: 0.5em;
  color: white;
  font-weight: bold;
  padding: 2px 0.5em;
`.trimStart(),f=`%c${[n,e].filter(Boolean).join(":")}`;typeof s.args[0]=="string"?t(`${f}%c ${s.args[0]}`,o,"",...s.args.slice(1)):t(f,o,...s.args)}}const Ee={error:0,warn:1,info:2};function ze(r){const s=new Le;return new Proxy({},{get(t,e){return(...n)=>{s.log({level:Ee[e],type:e,tag:r,args:n})}}})}let Be;function X(){return Be??(Be=ze("seo-audit"))}let I=[];const q=new Map;async function Ce(r){if(!Array.isArray(r))throw new TypeError("Expected an array of assets");I.length>0||(I=r)}function $e(r){if(I.length===0)throw new Error("Plugin assets are not registered");const s=I.find(t=>t.filename===r);if(!s)throw new Error(`Plugin asset "${r}" not found`);return s}async function M(r){if(r.endsWith(".js")||(r+=".js"),q.has(r))return q.get(r);const t=await import($e(r).url);return q.set(r,t),t}async function Q(r){const s=await r;return s.default||s}var ee={};Object.defineProperty(ee,"__esModule",{value:!0});var U=ee.default={sentenceLength:{recommendedWordCount:20,slightlyTooMany:25,farTooMany:30},fleschReading:{borders:{veryEasy:90,easy:80,fairlyEasy:70,okay:60,fairlyDifficult:50,difficult:30,veryDifficult:0},scores:{veryEasy:9,easy:9,fairlyEasy:9,okay:9,fairlyDifficult:6,difficult:3,veryDifficult:3}}};const Te=["TaxonomyTextLengthAssessment","UrlLengthAssessment","UrlStopWordsAssessment","SingleH1Assessment"],He={FleschReadingEaseAssessment:"fleschReading",SentenceLengthInTextAssessment:"sentenceLength"},Oe=["FunctionWordsInKeyphraseAssessment","IntroductionKeywordAssessment","KeyphraseLengthAssessment","KeywordDensityAssessment","KeyphraseDistributionAssessment","MetaDescriptionKeywordAssessment","SubheadingsKeywordAssessment","TitleKeywordAssessment","UrlKeywordAssessment"],O=Object.freeze({af:"af-ZA",ar:"ar-SA",az:"az-Latn-AZ",be:"be-BY",bg:"bg-BG",ca:"ca-ES",cs:"cs-CZ",da:"da-DK",de:"de-DE",dv:"dv-MV",el:"el-GR",en:"en-US",es:"es-ES",et:"et-EE",eu:"eu-ES",fa:"fa-IR",fi:"fi-FI",fo:"fo-FO",fr:"fr-FR",gl:"gl-ES",gu:"gu-IN",he:"he-IL",hi:"hi-IN",hr:"hr-HR",hu:"hu-HU",hy:"hy-AM",id:"id-ID",is:"is-IS",it:"it-IT",ja:"ja-JP",ka:"ka-GE",kk:"kk-KZ",kn:"kn-IN",ko:"ko-KR",kok:"kok-IN",ky:"ky-KG",lt:"lt-LT",lv:"lv-LV",mk:"mk-MK",mn:"mn-MN",mr:"mr-IN",ms:"ms-MY",nl:"nl-NL",no:"nb-NO",pa:"pa-IN",pl:"pl-PL",pt:"pt-BR",ro:"ro-RO",ru:"ru-RU",sa:"sa-IN",sk:"sk-SK",sl:"sl-SI",sq:"sq-AL",sr:"sr-Latn-CS",sv:"sv-SE",sw:"sw-KE",syr:"syr-SY",ta:"ta-IN",te:"te-IN",th:"th-TH",tr:"tr-TR",tt:"tt-RU",uk:"uk-UA",ur:"ur-PK",uz:"uz-Latn-UZ",vi:"vi-VN"}),Ie=["error","warn","info","debug"],Me="kirby$seo-audit$",Fe={AltAttributeAssessment:{_label:"Alt-Attribut für Bilder",na:"Der Text enthält keine Bilder.",none:"Keines der {imagesWithoutAltAttribute} Bilder enthält ein Attribut für alternativen Text. Fügen Sie sie hinzu!",some:"Einige der {imagesWithoutAltAttribute} Bilder enthalten ein Attribut für alternativen Text. Fügen Sie sie hinzu!",every:"Alle Bilder enthalten ein Attribut für alternativen Text. Gute Arbeit!"},HeadingStructureOrderAssessment:{_label:"Reihenfolge der Überschriften",sequential:"Die Überschriftenstruktur ist in sequenzieller Reihenfolge. Gute Arbeit!",nonSequential:"Die Überschriftenstruktur ist nicht in sequenzieller Reihenfolge. Korrigieren Sie Ihre Überschriftenstruktur!"},SingleH1Assessment:{_label:"Einzelne H1",one:"Der Text enthält einen H1-Tag. Gute Arbeit!",multiple:"Der Text enthält mehrere H1-Tags. Überdenken Sie Ihre Überschriftenstruktur!",none:"Der Text enthält keinen H1-Tag. Fügen Sie ihn hinzu!"}},Pe={AltAttributeAssessment:{_label:"Image alt attribute",na:"The text doesn't contain any images.",none:"None of the {imagesWithoutAltAttribute} images contain an alternative text attribute. Add them!",some:"Some of the {imagesWithoutAltAttribute} images contain an alternative text attribute. Add them!",every:"All images contain an alternative text attribute. Good job!"},HeadingStructureOrderAssessment:{_label:"Heading structure",sequential:"The heading structure is in sequential order. Good job!",nonSequential:"The heading structure is not in sequential order. Fix your heading structure!"},SingleH1Assessment:{_label:"Single H1",one:"The text contains a single H1 tag. Good job!",multiple:"The text contains multiple H1 tags. Rethink your heading structure!",none:"The text contains no H1 tag. Add it!"}},De={AltAttributeAssessment:{_label:"Alt-tekst voor afbeeldingen",na:"De tekst bevat geen afbeeldingen.",none:"Geen van de {imagesWithoutAltAttribute} afbeeldingen bevat alt-tekst. Voeg ze toe!",some:"Sommige van de {imagesWithoutAltAttribute} afbeeldingen bevatten alt-tekst. Voeg ze toe!",every:"Alle afbeeldingen bevatten alt-tekst. Goed gedaan!"},HeadingStructureOrderAssessment:{_label:"Kopstructuur volgorde",sequential:"De kopstructuur is in opeenvolgende volgorde. Goed gedaan!",nonSequential:"De kopstructuur is niet in opeenvolgende volgorde. Corrigeer je kopstructuur!"},SingleH1Assessment:{_label:"Enkele H1",one:"De tekst bevat één H1-tag. Goed gedaan!",multiple:"De tekst bevat meerdere H1-tags. Herzie je kopstructuur!",none:"De tekst bevat geen H1-tag. Voeg er een toe!"}};function Ke({htmlDocument:r,contentSelector:s}){const t=G(`${s} h1`,r);return{score:t.length===1?9:3,translation:t.length===1?"one":t.length>1?"multiple":"none"}}function Ne({htmlDocument:r,contentSelector:s}){const t=G(`${s} img`,r);if(t.length===0)return{score:9,translation:"na"};const n=t.filter(i=>i.getAttribute("alt")===null).length;return{score:n===t.length||n>0?3:9,translation:n===t.length?"none":n>0?"some":"every",...n>0&&{context:{imagesWithoutAltAttribute:n}}}}function je({htmlDocument:r,contentSelector:s}){const t=G(`${s} h1, ${s} h2, ${s} h3, ${s} h4, ${s} h5, ${s} h6`,r);let e=0;const n=[];for(const o of t){const f=Number.parseInt(o.tagName.substring(1),10);f-e>1&&n.push(o),e=f}const i=n.length===0;return{score:i?9:3,translation:i?"sequential":"nonSequential",...!i&&{details:{text:`<ul>${n.map(o=>`<li><strong>${o.tagName}</strong>: ${o.innerText}</li>`).join("")}</ul>`}}}}function G(r,s){return Array.from(s.querySelectorAll(r))}function te(r,s,t){if(!r)return t;let e,n;if(Array.isArray(s)?e=[...s]:typeof s=="string"?e=s.split("."):typeof s=="symbol"&&(e=[s]),!Array.isArray(e))throw new TypeError(`Expected props to be an array, a string or a symbol, got ${typeof e}`);for(;e.length;)if(n=e.shift(),!r||(r=r[n],r===void 0))return t;return r}function qe(r,s,t){return r.replace(/\{(\w+)\}/g,(e,n)=>s[n.toLowerCase()]||n)}const se={de:Fe,en:Pe,nl:De},Ue={seo:{AltAttributeAssessment:Ne,HeadingStructureOrderAssessment:je,SingleH1Assessment:Ke}};function Ge({htmlDocument:r,contentSelector:s,assessments:t,locale:e}){const n=se[e]||se.en,i={};for(const[o,f]of Object.entries(Ue)){const a=[];for(const[u,d]of Object.entries(f)){if(t.length>0&&!t.includes(u.toLowerCase()))continue;const{score:m,translation:c,context:p={},details:h}=d({htmlDocument:r,contentSelector:s}),A=te(n,`${u}.${c}`);if(!A)continue;const S=te(n,`${u}._label`,u),b=Object.fromEntries(Object.entries(p).map(([w,_])=>[w.toLowerCase(),_]));a.push({score:m,rating:ne(m),text:`${S}: ${qe(A,b)}`,details:h})}i[o]=a}return i}async function We({htmlDocument:r,contentSelector:s,options:t,translations:e}){var c;const n=await M("yoastseo"),{Jed:i}=await M("jed"),o=await Q(M("string-pixel-width")),f=((c=r.querySelector(s))==null?void 0:c.innerHTML)||"",a=new n.Paper(f,{keyword:t.keyword,synonyms:t.synonyms.join(","),url:new URL(t.url).pathname,permalink:t.url,title:t.title,titleWidth:t.title?o(t.title,{font:"arial",size:20}):void 0,description:t.description,locale:t.langCulture.replace("-","_")}),u=new n.Researcher(a),d=new i({domain:"js-text-analysis",locale_data:{"js-text-analysis":e||{"":{}}}}),m=Object.entries(n.assessments).reduce((p,[h,A])=>{for(const[S,b]of Object.entries(A))if(!Te.includes(S)&&!(!t.keyword&&t.assessments.length===0&&Oe.includes(S))&&!(t.assessments.length>0&&!t.assessments.includes(S.toLowerCase()))){if(typeof b=="object"&&Object.prototype.hasOwnProperty.call(b,"getResult")){const w=b.getResult(a,u,d);p[h].push(w)}else if(typeof b=="function"){const w=He[S],_=(U==null?void 0:U[w])||{},B=new b(_).getResult(a,u,d);p[h].push(B)}}return p},{seo:[],readability:[]});for(const p of Object.keys(m))m[p]=m[p].filter(h=>h.text).map(h=>({score:h.score,rating:ne(h.score),text:h.text}));return m}function ne(r){return r===-1?"error":r===0?"feedback":r<=4?"bad":r<=7?"ok":r>7?"good":""}async function Ve(r){var o,f,a;const t=new DOMParser().parseFromString(r,"text/html");for(const u of Array.from(t.body.querySelectorAll("script, style")))u.remove();let e=t.documentElement.lang??O.en;e.includes("-")||(e=(O==null?void 0:O[e.toLowerCase()])??O.en);const n=t.title||((o=t.querySelector("h1"))==null?void 0:o.innerText)||((f=t.querySelector("h2"))==null?void 0:f.innerText)||"",i=((a=t.querySelector('meta[name="description"]'))==null?void 0:a.content)||"";return{htmlDocument:t,locale:e,title:n,description:i}}function Ye(){const r=E(),s=J();H(()=>s.getters["content/values"]());const t=X();return{generateReport:async(n,i,o)=>{const f=await Q(M("yoastseo-translations"));if(o.logLevel>1){i&&t.info("Content selector:",i);const c=n.querySelectorAll(i),p=(c==null?void 0:c.innerHTML)||"";t.info("Selected elements:",c),t.info("Selected content:",p)}o.assessments=o.assessments.map(c=>{let p=c.toLowerCase();return p.endsWith("assessment")||(p+="assessment"),p});const a=r.translation.code,u={seo:[],readability:[]},d=Ge({htmlDocument:n,contentSelector:i,assessments:o.assessments,locale:a});for(const[c,p]of Object.entries(d))u[c]=u[c].concat(p);const m=await We({htmlDocument:n,contentSelector:i,options:o,translations:f[a]});for(const[c,p]of Object.entries(m))u[c]=u[c].concat(p);return u}}}const re=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function Je(r,s){s?s={...re,...s}:s=re;const t=ie(s);return t.dispatch(r),t.toString()}const Ze=Object.freeze(["prototype","__proto__","constructor"]);function ie(r){let s="",t=new Map;const e=n=>{s+=n};return{toString(){return s},getContext(){return t},dispatch(n){return r.replacer&&(n=r.replacer(n)),this[n===null?"null":typeof n](n)},object(n){if(n&&typeof n.toJSON=="function")return this.object(n.toJSON());const i=Object.prototype.toString.call(n);let o="";const f=i.length;f<10?o="unknown:["+i+"]":o=i.slice(8,f-1),o=o.toLowerCase();let a=null;if((a=t.get(n))===void 0)t.set(n,t.size);else return this.dispatch("[CIRCULAR:"+a+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(n))return e("buffer:"),e(n.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")this[o]?this[o](n):r.ignoreUnknown||this.unkown(n,o);else{let u=Object.keys(n);r.unorderedObjects&&(u=u.sort());let d=[];r.respectType!==!1&&!ae(n)&&(d=Ze),r.excludeKeys&&(u=u.filter(c=>!r.excludeKeys(c)),d=d.filter(c=>!r.excludeKeys(c))),e("object:"+(u.length+d.length)+":");const m=c=>{this.dispatch(c),e(":"),r.excludeValues||this.dispatch(n[c]),e(",")};for(const c of u)m(c);for(const c of d)m(c)}},array(n,i){if(i=i===void 0?r.unorderedArrays!==!1:i,e("array:"+n.length+":"),!i||n.length<=1){for(const a of n)this.dispatch(a);return}const o=new Map,f=n.map(a=>{const u=ie(r);u.dispatch(a);for(const[d,m]of u.getContext())o.set(d,m);return u.toString()});return t=o,f.sort(),this.array(f,!1)},date(n){return e("date:"+n.toJSON())},symbol(n){return e("symbol:"+n.toString())},unkown(n,i){if(e(i),!!n&&(e(":"),n&&typeof n.entries=="function"))return this.array(Array.from(n.entries()),!0)},error(n){return e("error:"+n.toString())},boolean(n){return e("bool:"+n)},string(n){e("string:"+n.length+":"),e(n)},function(n){e("fn:"),ae(n)?this.dispatch("[native]"):this.dispatch(n.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(n.name)),r.respectFunctionProperties&&this.object(n)},number(n){return e("number:"+n)},xml(n){return e("xml:"+n.toString())},null(){return e("Null")},undefined(){return e("Undefined")},regexp(n){return e("regex:"+n.toString())},uint8array(n){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(n))},uint8clampedarray(n){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(n))},int8array(n){return e("int8array:"),this.dispatch(Array.prototype.slice.call(n))},uint16array(n){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(n))},int16array(n){return e("int16array:"),this.dispatch(Array.prototype.slice.call(n))},uint32array(n){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(n))},int32array(n){return e("int32array:"),this.dispatch(Array.prototype.slice.call(n))},float32array(n){return e("float32array:"),this.dispatch(Array.prototype.slice.call(n))},float64array(n){return e("float64array:"),this.dispatch(Array.prototype.slice.call(n))},arraybuffer(n){return e("arraybuffer:"),this.dispatch(new Uint8Array(n))},url(n){return e("url:"+n.toString())},map(n){e("map:");const i=[...n];return this.array(i,r.unorderedSets!==!1)},set(n){e("set:");const i=[...n];return this.array(i,r.unorderedSets!==!1)},file(n){return e("file:"),this.dispatch([n.name,n.size,n.type,n.lastModfied])},blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return e("domwindow")},bigint(n){return e("bigint:"+n.toString())},process(){return e("process")},timer(){return e("timer")},pipe(){return e("pipe")},tcp(){return e("tcp")},udp(){return e("udp")},tty(){return e("tty")},statwatcher(){return e("statwatcher")},securecontext(){return e("securecontext")},connection(){return e("connection")},zlib(){return e("zlib")},context(){return e("context")},nodescript(){return e("nodescript")},httpparser(){return e("httpparser")},dataview(){return e("dataview")},signal(){return e("signal")},fsevent(){return e("fsevent")},tlswrap(){return e("tlswrap")}}}const oe="[native code] }",Xe=oe.length;function ae(r){return typeof r!="function"?!1:Function.prototype.toString.call(r).slice(-Xe)===oe}var Qe=Object.defineProperty,et=(r,s,t)=>s in r?Qe(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t,C=(r,s,t)=>(et(r,typeof s!="symbol"?s+"":s,t),t);class R{constructor(s,t){C(this,"words"),C(this,"sigBytes"),s=this.words=s||[],this.sigBytes=t===void 0?s.length*4:t}toString(s){return(s||tt).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let t=0;t<s.sigBytes;t++){const e=s.words[t>>>2]>>>24-t%4*8&255;this.words[this.sigBytes+t>>>2]|=e<<24-(this.sigBytes+t)%4*8}else for(let t=0;t<s.sigBytes;t+=4)this.words[this.sigBytes+t>>>2]=s.words[t>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new R([...this.words])}}const tt={stringify(r){const s=[];for(let t=0;t<r.sigBytes;t++){const e=r.words[t>>>2]>>>24-t%4*8&255;s.push((e>>>4).toString(16),(e&15).toString(16))}return s.join("")}},st={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=[];for(let e=0;e<r.sigBytes;e+=3){const n=r.words[e>>>2]>>>24-e%4*8&255,i=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,f=n<<16|i<<8|o;for(let a=0;a<4&&e*8+a*6<r.sigBytes*8;a++)t.push(s.charAt(f>>>6*(3-a)&63))}return t.join("")}},nt={parse(r){const s=r.length,t=[];for(let e=0;e<s;e++)t[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new R(t,s)}},rt={parse(r){return nt.parse(unescape(encodeURIComponent(r)))}};class it{constructor(){C(this,"_data",new R),C(this,"_nDataBytes",0),C(this,"_minBufferSize",0),C(this,"blockSize",512/32)}reset(){this._data=new R,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=rt.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,t){}_process(s){let t,e=this._data.sigBytes/(this.blockSize*4);s?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const n=e*this.blockSize,i=Math.min(n*4,this._data.sigBytes);if(n){for(let o=0;o<n;o+=this.blockSize)this._doProcessBlock(this._data.words,o);t=this._data.words.splice(0,n),this._data.sigBytes-=i}return new R(t,i)}}class ot extends it{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}var at=Object.defineProperty,lt=(r,s,t)=>s in r?at(r,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[s]=t,ct=(r,s,t)=>(lt(r,s+"",t),t);const le=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],ut=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],z=[];class dt extends ot{constructor(){super(...arguments),ct(this,"_hash",new R([...le]))}reset(){super.reset(),this._hash=new R([...le])}_doProcessBlock(s,t){const e=this._hash.words;let n=e[0],i=e[1],o=e[2],f=e[3],a=e[4],u=e[5],d=e[6],m=e[7];for(let c=0;c<64;c++){if(c<16)z[c]=s[t+c]|0;else{const _=z[c-15],B=(_<<25|_>>>7)^(_<<14|_>>>18)^_>>>3,L=z[c-2],$=(L<<15|L>>>17)^(L<<13|L>>>19)^L>>>10;z[c]=B+z[c-7]+$+z[c-16]}const p=a&u^~a&d,h=n&i^n&o^i&o,A=(n<<30|n>>>2)^(n<<19|n>>>13)^(n<<10|n>>>22),S=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),b=m+S+p+ut[c]+z[c],w=A+h;m=d,d=u,u=a,a=f+b|0,f=o,o=i,i=n,n=b+w|0}e[0]=e[0]+n|0,e[1]=e[1]+i|0,e[2]=e[2]+o|0,e[3]=e[3]+f|0,e[4]=e[4]+a|0,e[5]=e[5]+u|0,e[6]=e[6]+d|0,e[7]=e[7]+m|0}finalize(s){super.finalize(s);const t=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(t/4294967296),this._data.words[(e+64>>>9<<4)+15]=t,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function ft(r){return new dt().finalize(r).toString(st)}function ht(r,s={}){const t=typeof r=="string"?r:Je(r,s);return ft(t).slice(0,10)}function pt(...r){return`${Me}${ht([...r])}`}const gt={__name:"SeoRatingBubble",props:{rating:{type:String,required:!0}},setup(r){return{__sfc:!0,colorMap:{good:"green",ok:"orange",bad:"red"}}}};var mt=function(){var s=this,t=s._self._c,e=s._self._setupProxy;return t("div",{staticClass:"ksr-mt-[0.375em] ksr-h-[12px] ksr-w-[12px] ksr-rounded-full",style:{backgroundColor:`var(--color-${e.colorMap[s.rating]??"gray"}-600)`}},[t("span",{staticClass:"ksr-sr-only"},[s._v(s._s(s.rating))])])},yt=[],vt=N(gt,mt,yt);const bt=vt.exports,_t={__name:"SeoResultEntry",props:{result:{type:Object,required:!0},links:{type:Boolean,default:!0}},setup(r){const s=r,t=E(),e=H(()=>{const i=s.result.text.replace(/!$/,".");return s.links?i:n(i)});function n(i){return new DOMParser().parseFromString(i,"text/html").body.textContent||""}return{__sfc:!0,props:s,panel:t,parseText:e,stripTags:n,SeoRatingBubble:bt}}};var kt=function(){var s=this,t=s._self._c,e=s._self._setupProxy;return t("div",{staticClass:"ksr-flex ksr-items-start ksr-gap-2"},[t(e.SeoRatingBubble,{staticClass:"ksr-mx-1 ksr-shrink-0",attrs:{rating:s.result.rating}}),t("div",[t("div",{domProps:{innerHTML:s._s(e.parseText)}}),s.result.details?t("details",[t("summary",[s._v(s._s(e.panel.t("johannschopplich.seo-audit.issues")))]),t("div",{staticClass:"ksr-mb-1 ksr-rounded-[var(--rounded)] ksr-bg-[var(--color-border)] ksr-py-0.5",domProps:{innerHTML:s._s(s.result.details.text)}})]):s._e()])],1)},St=[],At=N(_t,kt,St);const wt=At.exports,ce={...ke},xt=Object.assign({inheritAttrs:!1},{__name:"SeoAudit",props:ce,setup(r){const s=r,t=E(),e=K(),n=J(),i=X(),{generateReport:o}=Ye(),{openLicenseModal:f,assertActivationIntegrity:a}=xe({label:"Kirby SEO Audit",apiNamespace:"__seo-audit__"}),u=pt(t.view.path);let d;const m=v(),c=v(),p=v(),h=v(),A=v(),S=v(),b=v(),w=v(),_=v(),B=v(),L=v(),$=v(),ue=v(!1),W=v(!1),de=v(),F=v(),V=H(()=>n.getters["content/values"]()),fe=H(()=>c.value||V.value[p.value]||""),he=H(()=>{if(!h.value&&!A.value)return[];const g=h.value||V.value[A.value];return Array.isArray(g)?g:typeof g=="string"?g.split(",").map(k=>k.trim()):[]});_e(()=>t.language.code,()=>{Y()}),Y(!0);const{format:Bt}=new Intl.DateTimeFormat(t.translation.code.replace("_","-"),{dateStyle:"short",timeStyle:"short"});async function Y(g=!1){const{load:k}=ve(),y=await k({parent:s.parent,name:s.name});if(g){if(m.value=pe(y.label)||t.t("johannschopplich.seo-audit.label"),p.value=y.keyphraseField,A.value=y.synonymsField,S.value=y.assessments,b.value=y.contentSelector,w.value=y.links,_.value=y.persisted,B.value=Ie.indexOf(y.config.logLevel??y.logLevel),L.value=y.config,$.value=y.license,Ce(y.assets),_.value){const P=JSON.parse(localStorage.getItem(u));P&&(F.value=P)}ue.value=!0,a({component:de,licenseStatus:$.value})}c.value=y.keyphrase,h.value=y.synonyms,d=(await e.get(t.view.path,{select:"previewUrl"})).previewUrl}function pe(g){return!g||typeof g=="string"?g:g[t.translation.code]??Object.values(g)[0]}async function Ct(){if(!d){t.notification.error(t.t("johannschopplich.seo-audit.error.missingPreviewUrl"));return}const g=d;t.isLoading=!0,W.value=!0;try{const k=await me(g),{htmlDocument:y,locale:T,title:P,description:Tt}=await Ve(k),D=await o(y,b.value,{assessments:S.value,logLevel:B.value,url:g,title:P,description:Tt,langCulture:T,keyword:fe.value,synonyms:he.value});for(const ye of Object.keys(D))D[ye]=ge(D[ye]);F.value={result:D,timestamp:Date.now()},_.value&&localStorage.setItem(u,JSON.stringify(F.value))}catch(k){console.error(k),t.notification.error(t.t("johannschopplich.seo-audit.analyze.error"))}t.isLoading=!1,W.value=!1,t.notification.success({icon:"check",message:t.t("johannschopplich.seo-audit.analyze.success")})}function ge(g){return g.toSorted((k,y)=>k.rating==="feedback"?-1:y.rating==="feedback"?1:k.score<y.score?-1:1)}async function me(g){if(location.origin===new URL(g).origin){const T=await fetch(g);return T.ok||i.warn(`Response status code ${T.status} for URL ${g} is an indication that the error page is being analyzed.`),await T.text()}const{code:k,html:y}=await e.post("__seo-audit__/proxy",{url:g});return k!==200&&i.warn(`Response status code ${k} for URL ${g} is an indication that the error page is being analyzed.`),y}async function $t(){const{isRegistered:g}=await f();g&&($.value="active")}return{__sfc:!0,propsDefinition:ce,props:s,panel:t,api:e,store:n,logger:i,generateReport:o,openLicenseModal:f,assertActivationIntegrity:a,storageKey:u,previewUrl:d,label:m,keyphrase:c,keyphraseField:p,synonyms:h,synonymsField:A,assessments:S,contentSelector:b,links:w,persisted:_,logLevel:B,config:L,license:$,isInitialized:ue,isGenerating:W,licenseButtonGroup:de,report:F,currentContent:V,resolvedKeyphrase:fe,resolvedSynonyms:he,format:Bt,updateSectionData:Y,t:pe,analyze:Ct,sortResults:ge,fetchHtml:me,handleRegistration:$t,SeoResultEntry:wt}}});var Rt=function(){var s=this,t=s._self._c,e=s._self._setupProxy;return e.isInitialized?t("k-section",{attrs:{label:e.label}},[e.license!=="active"?t("k-button-group",{ref:"licenseButtonGroup",attrs:{slot:"options",layout:"collapsed"},slot:"options"},[t("k-button",{attrs:{theme:"love",variant:"filled",size:"xs",link:"https://kirbyseo.com/buy",target:"_blank",text:e.panel.t("johannschopplich.seo-audit.license.buy")}}),t("k-button",{attrs:{theme:"love",variant:"filled",size:"xs",icon:"key",text:e.panel.t("johannschopplich.seo-audit.license.activate")},on:{click:function(n){return e.handleRegistration()}}})],1):s._e(),t("div",{staticClass:"ksr-space-y-4"},[t("k-button-group",{attrs:{layout:"collapsed"}},[t("k-button",{attrs:{icon:e.isGenerating?"loader":"seo-audit-analyze",text:e.panel.t("johannschopplich.seo-audit.analyze"),variant:"filled",size:"sm",theme:"positive",disabled:e.isGenerating},on:{click:function(n){return e.analyze()}}})],1),e.report?t("div",[t("k-box",{class:[e.isGenerating&&"ksr-cusor-wait ksr-pointer-events-none ksr-animate-pulse"],staticStyle:{"--link-color":"var(--color-text)"},attrs:{theme:"passive"}},[t("k-text",{staticClass:"ksr-space-y-4",class:[e.isGenerating&&"ksr-opacity-50"]},[e.report.result.seo.length>0?t("div",s._l(e.report.result.seo,function(n,i){return t("div",{key:i},[t(e.SeoResultEntry,{attrs:{result:n,links:e.links}})],1)}),0):s._e(),e.report.result.readability.length>0?t("div",[t("k-label",{staticClass:"ksr-mb-1",style:{color:"var(--color-text)"}},[s._v(" "+s._s(e.panel.t("johannschopplich.seo-audit.readability"))+" ")]),s._l(e.report.result.readability,function(n,i){return t("div",{key:i},[t(e.SeoResultEntry,{attrs:{result:n,links:e.links}})],1)})],2):s._e()])],1),t("k-box",{staticClass:"ksr-border-transparent",attrs:{theme:"empty",icon:"clock"}},[s._v(" "+s._s(e.format(e.report.timestamp))+" ")])],1):s._e()],1)],1):s._e()},Lt=[],Et=N(xt,Rt,Lt);const zt=Et.exports;window.panel.plugin("johannschopplich/seo-audit",{sections:{"seo-audit":zt},icons:{"seo-audit-analyze":'<path d="M8 3a7 7 0 0 0 0 14h1.07a7.06 7.06 0 0 1 0-2H8A5 5 0 0 1 8 5h8a5 5 0 0 1 4.9 6a7.021 7.021 0 0 1 1.426 2A7 7 0 0 0 16 3zm8 10a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-5 3a5 5 0 1 1 9.172 2.757l2.535 2.536l-1.414 1.414l-2.536-2.535A5 5 0 0 1 11 16" />'}})})();
