import{p as g,az as X,af as Y,l as R,ag as Z,u as w,m as o,c as m,ae as ee,F as U,am as te,at as D,s as C,r as W,B as P,T as ne,U as se,H as O,W as ae,O as A,b as z,I as re,K as $,ar as ie,S as G,aA as oe,aB as le,ao as ce,M as ue,q as de,x as fe,aC as ge,N as ve,v as me,aD as he,aE as ye,y as Se}from"./index-103e1f77.js";const k=g({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),_e="9AErMLTDCKyC1JWWp80OGUjsKKvsm5f1",be="https://api.giphy.com/v1/gifs";function ze(e){const t=Object.keys(e).map(n=>`${encodeURIComponent(n)}=${encodeURIComponent(e[n])}`).join("&");return t?`?${t}`:""}function b(e,t){const n=ze({api_key:_e,...t});return`${be}/${e}${n}`}const Oe=X("giphy",{state:()=>({gifs:[],limit:20,searchQuery:"",currentGif:[]}),actions:{setSearchQuery(e){this.searchQuery=e,this.gifs=[]},async fetchGifById(e){try{const n=await(await fetch(b(e))).json();return this.currentGif=n.data,this.currentGif}catch(t){console.error("Error fetching gif details: ",t)}},async fetchTrandingGifs(){const e=b("trending",{limit:this.limit});try{const n=await(await fetch(e)).json();return n.data.length>0&&(this.gifs=n.data),this.gifs}catch(t){console.error("Error fetching tranding gifs: ",t)}},async loadMore(e){const t=this.gifs.length;let n=b("trending",{limit:this.limit,offset:t});e&&e.length>0&&(n=b("search",{q:e,limit:this.limit,offset:t}));try{const i=await(await fetch(n)).json();i.data.length>0&&(this.gifs=[...this.gifs,...i.data])}catch(s){console.error("Error fetching more gifs: ",s)}},async searchGifs(e){const t=this.gifs.length,n=b("search",{q:e,limit:this.limit,offset:t});try{const i=await(await fetch(n)).json();return i.data.length>0?this.gifs=[...this.gifs,...i.data]:this.searchGifs("not found"),this.gifs}catch(s){console.error("Error fetch search gifs: ",s)}},async randomGifs(){const e=b("random");try{return(await(await fetch(e)).json()).data}catch(t){console.error("Error fetch random gifs: ",t)}}}}),F=g({tag:{type:String,default:"div"}},"tag");function Ce(e){return{aspectStyles:m(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const L=g({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...k(),...Y()},"VResponsive"),N=R()({name:"VResponsive",props:L(),setup(e,t){let{slots:n}=t;const{aspectStyles:s}=Ce(e),{dimensionStyles:i}=Z(e);return w(()=>{var a;return o("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[o("div",{class:"v-responsive__sizer",style:s.value},null),(a=n.additional)==null?void 0:a.call(n),n.default&&o("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Ie=g({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),V=(e,t)=>{let{slots:n}=t;const{transition:s,disabled:i,...a}=e,{component:l=te,...d}=typeof s=="object"?s:{};return ee(l,U(typeof s=="string"?{name:i?"":s}:d,a,{disabled:i}),n)};function Ve(e,t){if(!D)return;const n=t.modifiers||{},s=t.value,{handler:i,options:a}=typeof s=="object"?s:{handler:s,options:{}},l=new IntersectionObserver(function(){var v;let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],h=arguments.length>1?arguments[1]:void 0;const c=(v=e._observe)==null?void 0:v[t.instance.$.uid];if(!c)return;const f=d.some(S=>S.isIntersecting);i&&(!n.quiet||c.init)&&(!n.once||f||c.init)&&i(f,d,h),f&&n.once?M(e,t):c.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function M(e,t){var s;const n=(s=e._observe)==null?void 0:s[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const Re={mounted:Ve,unmounted:M},we=Re,$e=g({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...L(),...k(),...Ie()},"VImg"),Ge=R()({name:"VImg",directives:{intersect:we},props:$e(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:s}=t;const i=C(""),a=W(),l=C(e.eager?"loading":"idle"),d=C(),h=C(),c=m(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=m(()=>c.value.aspect||d.value/h.value||0);P(()=>e.src,()=>{v(l.value!=="idle")}),P(f,(r,u)=>{!r&&u&&a.value&&I(a.value)}),ne(()=>v());function v(r){if(!(e.eager&&r)&&!(D&&!r&&!e.eager)){if(l.value="loading",c.value.lazySrc){const u=new Image;u.src=c.value.lazySrc,I(u,null)}c.value.src&&se(()=>{var u,y;if(n("loadstart",((u=a.value)==null?void 0:u.currentSrc)||c.value.src),(y=a.value)!=null&&y.complete){if(a.value.naturalWidth||_(),l.value==="error")return;f.value||I(a.value,null),S()}else f.value||I(a.value),p()})}}function S(){var r;p(),l.value="loaded",n("load",((r=a.value)==null?void 0:r.currentSrc)||c.value.src)}function _(){var r;l.value="error",n("error",((r=a.value)==null?void 0:r.currentSrc)||c.value.src)}function p(){const r=a.value;r&&(i.value=r.currentSrc||r.src)}let T=-1;function I(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const y=()=>{clearTimeout(T);const{naturalHeight:x,naturalWidth:E}=r;x||E?(d.value=E,h.value=x):!r.complete&&l.value==="loading"&&u!=null?T=window.setTimeout(y,u):(r.currentSrc.endsWith(".svg")||r.currentSrc.startsWith("data:image/svg+xml"))&&(d.value=1,h.value=1)};y()}const j=m(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),q=()=>{var y;if(!c.value.src||l.value==="idle")return null;const r=o("img",{class:["v-img__img",j.value],src:c.value.src,srcset:c.value.srcset,alt:e.alt,sizes:e.sizes,ref:a,onLoad:S,onError:_},null),u=(y=s.sources)==null?void 0:y.call(s);return o(V,{transition:e.transition,appear:!0},{default:()=>[O(u?o("picture",{class:"v-img__picture"},[u,r]):r,[[re,l.value==="loaded"]])]})},K=()=>o(V,{transition:e.transition},{default:()=>[c.value.lazySrc&&l.value!=="loaded"&&o("img",{class:["v-img__img","v-img__img--preload",j.value],src:c.value.lazySrc,alt:e.alt},null)]}),H=()=>s.placeholder?o(V,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!s.error)&&o("div",{class:"v-img__placeholder"},[s.placeholder()])]}):null,Q=()=>s.error?o(V,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&o("div",{class:"v-img__error"},[s.error()])]}):null,J=()=>e.gradient?o("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,B=C(!1);{const r=P(f,u=>{u&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{B.value=!0})}),r())})}return w(()=>{const[r]=N.filterProps(e);return O(o(N,U({class:["v-img",{"v-img--booting":!B.value},e.class],style:[{width:z(e.width==="auto"?d.value:e.width)},e.style]},r,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>o(A,null,[o(q,null,null),o(K,null,null),o(J,null,null),o(H,null,null),o(Q,null,null)]),default:s.default}),[[ae("intersect"),{handler:v,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:a,state:l,naturalWidth:d,naturalHeight:h}}}),Ne=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ue(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{roundedClasses:m(()=>{const s=ie(e)?e.value:e.rounded,i=[];if(s===!0||s==="")i.push(`${t}--rounded`);else if(typeof s=="string"||s===0)for(const a of String(s).split(" "))i.push(`rounded-${a}`);return i})}}const ke=[null,"default","comfortable","compact"],De=g({density:{type:String,default:"default",validator:e=>ke.includes(e)}},"density");function We(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{densityClasses:m(()=>`${t}--density-${e.density}`)}}const Pe=["elevated","flat","tonal","outlined","text","plain"];function Ae(e,t){return o(A,null,[e&&o("span",{key:"overlay",class:`${t}__overlay`},null),o("span",{key:"underlay",class:`${t}__underlay`},null)])}const Fe=g({color:String,variant:{type:String,default:"elevated",validator:e=>Pe.includes(e)}},"variant");function Le(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();const n=m(()=>{const{variant:a}=G(e);return`${t}--variant-${a}`}),{colorClasses:s,colorStyles:i}=oe(m(()=>{const{variant:a,color:l}=G(e);return{[["elevated","flat"].includes(a)?"background":"text"]:l}}));return{colorClasses:s,colorStyles:i,variantClasses:n}}const pe=["x-small","small","default","large","x-large"],Te=g({size:{type:[String,Number],default:"default"}},"size");function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return le(()=>{let n,s;return ce(pe,e.size)?n=`${t}--size-${e.size}`:e.size&&(s={width:z(e.size),height:z(e.size)}),{sizeClasses:n,sizeStyles:s}})}const Be=g({color:String,start:Boolean,end:Boolean,icon:ue,...k(),...Te(),...F({tag:"i"}),...de()},"VIcon"),Me=R()({name:"VIcon",props:Be(),setup(e,t){let{attrs:n,slots:s}=t;const i=W(),{themeClasses:a}=fe(e),{iconData:l}=ge(m(()=>i.value||e.icon)),{sizeClasses:d}=je(e),{textColorClasses:h,textColorStyles:c}=ve(me(e,"color"));return w(()=>{var v,S;const f=(v=s.default)==null?void 0:v.call(s);return f&&(i.value=(S=he(f).filter(_=>_.type===ye&&_.children&&typeof _.children=="string")[0])==null?void 0:S.children),o(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",a.value,d.value,h.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[d.value?void 0:{fontSize:z(e.size),height:z(e.size),width:z(e.size)},c.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[f]})}),{}}});const xe=g({fluid:{type:Boolean,default:!1},...k(),...F()},"VContainer"),qe=R()({name:"VContainer",props:xe(),setup(e,t){let{slots:n}=t;const{rtlClasses:s}=Se();return w(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},n)),{}}});export{we as I,V as M,Ge as V,F as a,Ne as b,Ie as c,Me as d,De as e,We as f,Oe as g,qe as h,Fe as i,Le as j,Ae as k,Te as l,k as m,je as n,Ue as u};