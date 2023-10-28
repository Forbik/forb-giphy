import{r as D,aa as Je,j as ne,A as R,ab as de,a9 as Qe,l as B,ac as Ze,y as _e,p,c as v,b as x,m as l,q as et,D as ae,n as tt,ad as Se,s as A,Q as nt,R as pe,F as J,U as Ce,L as we,G as at,I as $,ae as ke,P as ve,u as q,w as U,v as P,g as Ie,e as st,d as xe,i as it,a as rt,B as lt,o as ot,af as ut,O as ct,k as dt,ag as vt,ah as mt,K as Q,ai as ft,aj as gt,ak as ht,E as yt,al as bt,am as me,an as _t,ao as fe}from"./index-b668dd78.js";import{m as z,u as L,j as St,b as Ve,a as Y,d as Ee,e as Z,k as pt,i as Ct,l as wt,n as kt}from"./VRow-9c0f0f4d.js";function It(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const a=D(),t=D();if(Je){const i=new ResizeObserver(s=>{e==null||e(s,i),s.length&&(n==="content"?t.value=s[0].contentRect:t.value=s[0].target.getBoundingClientRect())});ne(()=>{i.disconnect()}),R(a,(s,r)=>{r&&(i.unobserve(de(r)),t.value=void 0),s&&i.observe(de(s))},{flush:"post"})}return{resizeRef:a,contentRect:Qe(t)}}const xt=p({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),X=B(!1)({name:"VDefaultsProvider",props:xt(),setup(e,n){let{slots:a}=n;const{defaults:t,disabled:i,reset:s,root:r,scoped:u}=Ze(e);return _e(t,{reset:s,root:r,scoped:u,disabled:i}),()=>{var m;return(m=a.default)==null?void 0:m.call(a)}}});const Pe=p({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function Be(e){return{dimensionStyles:v(()=>({height:x(e.height),maxHeight:x(e.maxHeight),maxWidth:x(e.maxWidth),minHeight:x(e.minHeight),minWidth:x(e.minWidth),width:x(e.width)}))}}function Vt(e){return{aspectStyles:v(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const Te=p({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...z(),...Pe()},"VResponsive"),ge=B()({name:"VResponsive",props:Te(),setup(e,n){let{slots:a}=n;const{aspectStyles:t}=Vt(e),{dimensionStyles:i}=Be(e);return L(()=>{var s;return l("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[l("div",{class:"v-responsive__sizer",style:t.value},null),(s=a.additional)==null?void 0:s.call(a),a.default&&l("div",{class:["v-responsive__content",e.contentClass]},[a.default()])])}),{}}}),Et=p({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),M=(e,n)=>{let{slots:a}=n;const{transition:t,disabled:i,...s}=e,{component:r=tt,...u}=typeof t=="object"?t:{};return et(r,ae(typeof t=="string"?{name:i?"":t}:u,s,{disabled:i}),a)};function Pt(e,n){if(!Se)return;const a=n.modifiers||{},t=n.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},r=new IntersectionObserver(function(){var _;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],m=arguments.length>1?arguments[1]:void 0;const d=(_=e._observe)==null?void 0:_[n.instance.$.uid];if(!d)return;const f=u.some(o=>o.isIntersecting);i&&(!a.quiet||d.init)&&(!a.once||f||d.init)&&i(f,u,m),f&&a.once?Le(e,n):d.init=!0},s);e._observe=Object(e._observe),e._observe[n.instance.$.uid]={init:!1,observer:r},r.observe(e)}function Le(e,n){var t;const a=(t=e._observe)==null?void 0:t[n.instance.$.uid];a&&(a.observer.unobserve(e),delete e._observe[n.instance.$.uid])}const Bt={mounted:Pt,unmounted:Le},Tt=Bt,Lt=p({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Te(),...z(),...Et()},"VImg"),vn=B()({name:"VImg",directives:{intersect:Tt},props:Lt(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,n){let{emit:a,slots:t}=n;const i=A(""),s=D(),r=A(e.eager?"loading":"idle"),u=A(),m=A(),d=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),f=v(()=>d.value.aspect||u.value/m.value||0);R(()=>e.src,()=>{_(r.value!=="idle")}),R(f,(g,b)=>{!g&&b&&s.value&&C(s.value)}),nt(()=>_());function _(g){if(!(e.eager&&g)&&!(Se&&!g&&!e.eager)){if(r.value="loading",d.value.lazySrc){const b=new Image;b.src=d.value.lazySrc,C(b,null)}d.value.src&&pe(()=>{var b,I;if(a("loadstart",((b=s.value)==null?void 0:b.currentSrc)||d.value.src),(I=s.value)!=null&&I.complete){if(s.value.naturalWidth||c(),r.value==="error")return;f.value||C(s.value,null),o()}else f.value||C(s.value),S()})}}function o(){var g;S(),r.value="loaded",a("load",((g=s.value)==null?void 0:g.currentSrc)||d.value.src)}function c(){var g;r.value="error",a("error",((g=s.value)==null?void 0:g.currentSrc)||d.value.src)}function S(){const g=s.value;g&&(i.value=g.currentSrc||g.src)}let h=-1;function C(g){let b=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const I=()=>{clearTimeout(h);const{naturalHeight:H,naturalWidth:O}=g;H||O?(u.value=O,m.value=H):!g.complete&&r.value==="loading"&&b!=null?h=window.setTimeout(I,b):(g.currentSrc.endsWith(".svg")||g.currentSrc.startsWith("data:image/svg+xml"))&&(u.value=1,m.value=1)};I()}const w=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),y=()=>{var I;if(!d.value.src||r.value==="idle")return null;const g=l("img",{class:["v-img__img",w.value],src:d.value.src,srcset:d.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:o,onError:c},null),b=(I=t.sources)==null?void 0:I.call(t);return l(M,{transition:e.transition,appear:!0},{default:()=>[J(b?l("picture",{class:"v-img__picture"},[b,g]):g,[[at,r.value==="loaded"]])]})},k=()=>l(M,{transition:e.transition},{default:()=>[d.value.lazySrc&&r.value!=="loaded"&&l("img",{class:["v-img__img","v-img__img--preload",w.value],src:d.value.lazySrc,alt:e.alt},null)]}),T=()=>t.placeholder?l(M,{transition:e.transition,appear:!0},{default:()=>[(r.value==="loading"||r.value==="error"&&!t.error)&&l("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,E=()=>t.error?l(M,{transition:e.transition,appear:!0},{default:()=>[r.value==="error"&&l("div",{class:"v-img__error"},[t.error()])]}):null,N=()=>e.gradient?l("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,G=A(!1);{const g=R(f,b=>{b&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{G.value=!0})}),g())})}return L(()=>{const[g]=ge.filterProps(e);return J(l(ge,ae({class:["v-img",{"v-img--booting":!G.value},e.class],style:[{width:x(e.width==="auto"?u.value:e.width)},e.style]},g,{aspectRatio:f.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>l(we,null,[l(y,null,null),l(k,null,null),l(N,null,null),l(T,null,null),l(E,null,null)]),default:t.default}),[[Ce("intersect"),{handler:_,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:s,state:r,naturalWidth:u,naturalHeight:m}}}),Re=p({border:[Boolean,Number,String]},"border");function $e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{borderClasses:v(()=>{const t=ke(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${n}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const ze=p({elevation:{type:[Number,String],validator(e){const n=parseInt(e);return!isNaN(n)&&n>=0&&n<=24}}},"elevation");function Ne(e){return{elevationClasses:v(()=>{const a=ke(e)?e.value:e.elevation,t=[];return a==null||t.push(`elevation-${a}`),t})}}const Rt=[null,"default","comfortable","compact"],Oe=p({density:{type:String,default:"default",validator:e=>Rt.includes(e)}},"density");function Ae(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{densityClasses:v(()=>`${n}--density-${e.density}`)}}const $t=["elevated","flat","tonal","outlined","text","plain"];function zt(e,n){return l(we,null,[e&&l("span",{key:"overlay",class:`${n}__overlay`},null),l("span",{key:"underlay",class:`${n}__underlay`},null)])}const De=p({color:String,variant:{type:String,default:"elevated",validator:e=>$t.includes(e)}},"variant");function Nt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();const a=v(()=>{const{variant:s}=ve(e);return`${n}--variant-${s}`}),{colorClasses:t,colorStyles:i}=St(v(()=>{const{variant:s,color:r}=ve(e);return{[["elevated","flat"].includes(s)?"background":"text"]:r}}));return{colorClasses:t,colorStyles:i,variantClasses:a}}const We=p({divided:Boolean,...Re(),...z(),...Oe(),...ze(),...Ve(),...Y(),...q(),...De()},"VBtnGroup"),he=B()({name:"VBtnGroup",props:We(),setup(e,n){let{slots:a}=n;const{themeClasses:t}=U(e),{densityClasses:i}=Ae(e),{borderClasses:s}=$e(e),{elevationClasses:r}=Ne(e),{roundedClasses:u}=Ee(e);_e({VBtn:{height:"auto",color:P(e,"color"),density:P(e,"density"),flat:!0,variant:P(e,"variant")}}),L(()=>l(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,i.value,r.value,u.value,e.class],style:e.style},a))}}),Ot=p({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),At=p({value:null,disabled:Boolean,selectedClass:String},"group-item");function Dt(e,n){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Ie("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=st();xe(Symbol.for(`${n.description}:id`),i);const s=it(n,null);if(!s){if(!a)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${n.description}`)}const r=P(e,"value"),u=v(()=>!!(s.disabled.value||e.disabled));s.register({id:i,value:r,disabled:u},t),ne(()=>{s.unregister(i)});const m=v(()=>s.isSelected(i)),d=v(()=>m.value&&[s.selectedClass.value,e.selectedClass]);return R(m,f=>{t.emit("group:selected",{value:f})}),{id:i,isSelected:m,toggle:()=>s.select(i,!m.value),select:f=>s.select(i,f),selectedClass:d,value:r,disabled:u,group:s}}function Wt(e,n){let a=!1;const t=rt([]),i=lt(e,"modelValue",[],o=>o==null?[]:je(t,ct(o)),o=>{const c=Gt(t,o);return e.multiple?c:c[0]}),s=Ie("useGroup");function r(o,c){const S=o,h=Symbol.for(`${n.description}:id`),w=dt(h,s==null?void 0:s.vnode).indexOf(c);w>-1?t.splice(w,0,S):t.push(S)}function u(o){if(a)return;m();const c=t.findIndex(S=>S.id===o);t.splice(c,1)}function m(){const o=t.find(c=>!c.disabled);o&&e.mandatory==="force"&&!i.value.length&&(i.value=[o.id])}ot(()=>{m()}),ne(()=>{a=!0});function d(o,c){const S=t.find(h=>h.id===o);if(!(c&&(S!=null&&S.disabled)))if(e.multiple){const h=i.value.slice(),C=h.findIndex(y=>y===o),w=~C;if(c=c??!w,w&&e.mandatory&&h.length<=1||!w&&e.max!=null&&h.length+1>e.max)return;C<0&&c?h.push(o):C>=0&&!c&&h.splice(C,1),i.value=h}else{const h=i.value.includes(o);if(e.mandatory&&h)return;i.value=c??!h?[o]:[]}}function f(o){if(e.multiple,i.value.length){const c=i.value[0],S=t.findIndex(w=>w.id===c);let h=(S+o)%t.length,C=t[h];for(;C.disabled&&h!==S;)h=(h+o)%t.length,C=t[h];if(C.disabled)return;i.value=[t[h].id]}else{const c=t.find(S=>!S.disabled);c&&(i.value=[c.id])}}const _={register:r,unregister:u,selected:i,select:d,disabled:P(e,"disabled"),prev:()=>f(t.length-1),next:()=>f(1),isSelected:o=>i.value.includes(o),selectedClass:v(()=>e.selectedClass),items:v(()=>t),getItemIndex:o=>jt(t,o)};return xe(n,_),_}function jt(e,n){const a=je(e,[n]);return a.length?e.findIndex(t=>t.id===a[0]):-1}function je(e,n){const a=[];return n.forEach(t=>{const i=e.find(r=>ut(t,r.value)),s=e[t];(i==null?void 0:i.value)!=null?a.push(i.id):s!=null&&a.push(s.id)}),a}function Gt(e,n){const a=[];return n.forEach(t=>{const i=e.findIndex(s=>s.id===t);if(~i){const s=e[i];a.push(s.value!=null?s.value:i)}}),a}const Ge=Symbol.for("vuetify:v-btn-toggle"),Ht=p({...We(),...Ot()},"VBtnToggle");B()({name:"VBtnToggle",props:Ht(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const{isSelected:t,next:i,prev:s,select:r,selected:u}=Wt(e,Ge);return L(()=>{const[m]=he.filterProps(e);return l(he,ae({class:["v-btn-toggle",e.class]},m,{style:e.style}),{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a,{isSelected:t,next:i,prev:s,select:r,selected:u})]}})}),{next:i,prev:s,select:r}}});const Mt=["x-small","small","default","large","x-large"],se=p({size:{type:[String,Number],default:"default"}},"size");function ie(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return vt(()=>{let a,t;return mt(Mt,e.size)?a=`${n}--size-${e.size}`:e.size&&(t={width:x(e.size),height:x(e.size)}),{sizeClasses:a,sizeStyles:t}})}const Ft=p({color:String,start:Boolean,end:Boolean,icon:Q,...z(),...se(),...Y({tag:"i"}),...q()},"VIcon"),K=B()({name:"VIcon",props:Ft(),setup(e,n){let{attrs:a,slots:t}=n;const i=D(),{themeClasses:s}=U(e),{iconData:r}=ft(v(()=>i.value||e.icon)),{sizeClasses:u}=ie(e),{textColorClasses:m,textColorStyles:d}=Z(P(e,"color"));return L(()=>{var _,o;const f=(_=t.default)==null?void 0:_.call(t);return f&&(i.value=(o=gt(f).filter(c=>c.type===ht&&c.children&&typeof c.children=="string")[0])==null?void 0:o.children),l(r.value.component,{tag:e.tag,icon:r.value.icon,class:["v-icon","notranslate",s.value,u.value,m.value,{"v-icon--clickable":!!a.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:x(e.size),height:x(e.size),width:x(e.size)},d.value,e.style],role:a.onClick?"button":void 0,"aria-hidden":!a.onClick},{default:()=>[f]})}),{}}});const qt=p({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...z(),...se(),...Y({tag:"div"}),...q()},"VProgressCircular"),Ut=B()({name:"VProgressCircular",props:qt(),setup(e,n){let{slots:a}=n;const t=20,i=2*Math.PI*t,s=D(),{themeClasses:r}=U(e),{sizeClasses:u,sizeStyles:m}=ie(e),{textColorClasses:d,textColorStyles:f}=Z(P(e,"color")),{textColorClasses:_,textColorStyles:o}=Z(P(e,"bgColor")),{intersectionRef:c,isIntersecting:S}=pt(),{resizeRef:h,contentRect:C}=It(),w=v(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),y=v(()=>Number(e.width)),k=v(()=>m.value?Number(e.size):C.value?C.value.width:Math.max(y.value,32)),T=v(()=>t/(1-y.value/k.value)*2),E=v(()=>y.value/k.value*T.value),N=v(()=>x((100-w.value)/100*i));return yt(()=>{c.value=s.value,h.value=s.value}),L(()=>l(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},r.value,u.value,d.value,e.class],style:[m.value,f.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:w.value},{default:()=>[l("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${T.value} ${T.value}`},[l("circle",{class:["v-progress-circular__underlay",_.value],style:o.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),l("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":E.value,"stroke-dasharray":i,"stroke-dashoffset":N.value},null)]),a.default&&l("div",{class:"v-progress-circular__content"},[a.default({value:w.value})])]})),{}}}),Yt=p({loading:[Boolean,String]},"loader");function Xt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{loaderClasses:v(()=>({[`${n}--loading`]:e.loading}))}}function mn(e,n){var t;let{slots:a}=n;return l("div",{class:`${e.name}__loader`},[((t=a.default)==null?void 0:t.call(a,{color:e.color,isActive:e.active}))||l(Ct,{active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Kt=["static","relative","fixed","absolute","sticky"],Jt=p({position:{type:String,validator:e=>Kt.includes(e)}},"position");function Qt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:$();return{positionClasses:v(()=>e.position?`${n}--${e.position}`:void 0)}}function Zt(e,n){const a=bt("RouterLink"),t=v(()=>!!(e.href||e.to)),i=v(()=>(t==null?void 0:t.value)||me(n,"click")||me(e,"click"));if(typeof a=="string")return{isLink:t,isClickable:i,href:P(e,"href")};const s=e.to?a.useLink(e):void 0;return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&v(()=>{var r,u;return e.exact?(r=s.isExactActive)==null?void 0:r.value:(u=s.isActive)==null?void 0:u.value}),href:v(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const en=p({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function tn(e,n){R(()=>{var a;return(a=e.isActive)==null?void 0:a.value},a=>{e.isLink.value&&a&&n&&pe(()=>{n(!0)})},{immediate:!0})}const ee=Symbol("rippleStop"),nn=80;function ye(e,n){e.style.transform=n,e.style.webkitTransform=n}function te(e){return e.constructor.name==="TouchEvent"}function He(e){return e.constructor.name==="KeyboardEvent"}const an=function(e,n){var _;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!He(e)){const o=n.getBoundingClientRect(),c=te(e)?e.touches[e.touches.length-1]:e;t=c.clientX-o.left,i=c.clientY-o.top}let s=0,r=.3;(_=n._ripple)!=null&&_.circle?(r=.15,s=n.clientWidth/2,s=a.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(n.clientWidth**2+n.clientHeight**2)/2;const u=`${(n.clientWidth-s*2)/2}px`,m=`${(n.clientHeight-s*2)/2}px`,d=a.center?u:`${t-s}px`,f=a.center?m:`${i-s}px`;return{radius:s,scale:r,x:d,y:f,centerX:u,centerY:m}},F={show(e,n){var c;let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((c=n==null?void 0:n._ripple)!=null&&c.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",a.class&&(t.className+=` ${a.class}`);const{radius:s,scale:r,x:u,y:m,centerX:d,centerY:f}=an(e,n,a),_=`${s*2}px`;i.className="v-ripple__animation",i.style.width=_,i.style.height=_,n.appendChild(t);const o=window.getComputedStyle(n);o&&o.position==="static"&&(n.style.position="relative",n.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),ye(i,`translate(${u}, ${m}) scale3d(${r},${r},${r})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),ye(i,`translate(${d}, ${f}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const n=e.getElementsByClassName("v-ripple__animation");if(n.length===0)return;const a=n[n.length-1];if(a.dataset.isHiding)return;a.dataset.isHiding="true";const t=performance.now()-Number(a.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{a.classList.remove("v-ripple__animation--in"),a.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=a.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(a.parentNode)},300)},i)}};function Me(e){return typeof e>"u"||!!e}function W(e){const n={},a=e.currentTarget;if(!(!(a!=null&&a._ripple)||a._ripple.touched||e[ee])){if(e[ee]=!0,te(e))a._ripple.touched=!0,a._ripple.isTouch=!0;else if(a._ripple.isTouch)return;if(n.center=a._ripple.centered||He(e),a._ripple.class&&(n.class=a._ripple.class),te(e)){if(a._ripple.showTimerCommit)return;a._ripple.showTimerCommit=()=>{F.show(e,a,n)},a._ripple.showTimer=window.setTimeout(()=>{var t;(t=a==null?void 0:a._ripple)!=null&&t.showTimerCommit&&(a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null)},nn)}else F.show(e,a,n)}}function be(e){e[ee]=!0}function V(e){const n=e.currentTarget;if(n!=null&&n._ripple){if(window.clearTimeout(n._ripple.showTimer),e.type==="touchend"&&n._ripple.showTimerCommit){n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null,n._ripple.showTimer=window.setTimeout(()=>{V(e)});return}window.setTimeout(()=>{n._ripple&&(n._ripple.touched=!1)}),F.hide(n)}}function Fe(e){const n=e.currentTarget;n!=null&&n._ripple&&(n._ripple.showTimerCommit&&(n._ripple.showTimerCommit=null),window.clearTimeout(n._ripple.showTimer))}let j=!1;function qe(e){!j&&(e.keyCode===fe.enter||e.keyCode===fe.space)&&(j=!0,W(e))}function Ue(e){j=!1,V(e)}function Ye(e){j&&(j=!1,V(e))}function Xe(e,n,a){const{value:t,modifiers:i}=n,s=Me(t);if(s||F.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,_t(t)&&t.class&&(e._ripple.class=t.class),s&&!a){if(i.stop){e.addEventListener("touchstart",be,{passive:!0}),e.addEventListener("mousedown",be);return}e.addEventListener("touchstart",W,{passive:!0}),e.addEventListener("touchend",V,{passive:!0}),e.addEventListener("touchmove",Fe,{passive:!0}),e.addEventListener("touchcancel",V),e.addEventListener("mousedown",W),e.addEventListener("mouseup",V),e.addEventListener("mouseleave",V),e.addEventListener("keydown",qe),e.addEventListener("keyup",Ue),e.addEventListener("blur",Ye),e.addEventListener("dragstart",V,{passive:!0})}else!s&&a&&Ke(e)}function Ke(e){e.removeEventListener("mousedown",W),e.removeEventListener("touchstart",W),e.removeEventListener("touchend",V),e.removeEventListener("touchmove",Fe),e.removeEventListener("touchcancel",V),e.removeEventListener("mouseup",V),e.removeEventListener("mouseleave",V),e.removeEventListener("keydown",qe),e.removeEventListener("keyup",Ue),e.removeEventListener("dragstart",V),e.removeEventListener("blur",Ye)}function sn(e,n){Xe(e,n,!1)}function rn(e){delete e._ripple,Ke(e)}function ln(e,n){if(n.value===n.oldValue)return;const a=Me(n.oldValue);Xe(e,n,a)}const on={mounted:sn,unmounted:rn,updated:ln},un=p({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ge},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Q,appendIcon:Q,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Re(),...z(),...Oe(),...Pe(),...ze(),...At(),...Yt(),...wt(),...Jt(),...Ve(),...en(),...se(),...Y({tag:"button"}),...q(),...De({variant:"elevated"})},"VBtn"),fn=B()({name:"VBtn",directives:{Ripple:on},props:un(),emits:{"group:selected":e=>!0},setup(e,n){let{attrs:a,slots:t}=n;const{themeClasses:i}=U(e),{borderClasses:s}=$e(e),{colorClasses:r,colorStyles:u,variantClasses:m}=Nt(e),{densityClasses:d}=Ae(e),{dimensionStyles:f}=Be(e),{elevationClasses:_}=Ne(e),{loaderClasses:o}=Xt(e),{locationStyles:c}=kt(e),{positionClasses:S}=Qt(e),{roundedClasses:h}=Ee(e),{sizeClasses:C,sizeStyles:w}=ie(e),y=Dt(e,e.symbol,!1),k=Zt(e,a),T=v(()=>{var b;return e.active!==void 0?e.active:k.isLink.value?(b=k.isActive)==null?void 0:b.value:y==null?void 0:y.isSelected.value}),E=v(()=>(y==null?void 0:y.disabled.value)||e.disabled),N=v(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),G=v(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function g(b){var I;E.value||k.isLink.value&&(b.metaKey||b.ctrlKey||b.shiftKey||b.button!==0||a.target==="_blank")||((I=k.navigate)==null||I.call(k,b),y==null||y.toggle())}return tn(k,y==null?void 0:y.select),L(()=>{var le,oe;const b=k.isLink.value?"a":e.tag,I=!!(e.prependIcon||t.prepend),H=!!(e.appendIcon||t.append),O=!!(e.icon&&e.icon!==!0),re=(y==null?void 0:y.isSelected.value)&&(!k.isLink.value||((le=k.isActive)==null?void 0:le.value))||!y||((oe=k.isActive)==null?void 0:oe.value);return J(l(b,{type:b==="a"?void 0:"button",class:["v-btn",y==null?void 0:y.selectedClass.value,{"v-btn--active":T.value,"v-btn--block":e.block,"v-btn--disabled":E.value,"v-btn--elevated":N.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,re?r.value:void 0,d.value,_.value,o.value,S.value,h.value,C.value,m.value,e.class],style:[re?u.value:void 0,f.value,c.value,w.value,e.style],disabled:E.value||void 0,href:k.href.value,onClick:g,value:G.value},{default:()=>{var ue;return[zt(!0,"v-btn"),!e.icon&&I&&l("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?l(X,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):l(K,{key:"prepend-icon",icon:e.prependIcon},null)]),l("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&O?l(K,{key:"content-icon",icon:e.icon},null):l(X,{key:"content-defaults",disabled:!O,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var ce;return[((ce=t.default)==null?void 0:ce.call(t))??e.text]}})]),!e.icon&&H&&l("span",{key:"append",class:"v-btn__append"},[t.append?l(X,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):l(K,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&l("span",{key:"loader",class:"v-btn__loader"},[((ue=t.loader)==null?void 0:ue.call(t))??l(Ut,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Ce("ripple"),!E.value&&e.ripple,null]])}),{}}});export{Tt as I,mn as L,M,vn as V,ze as a,$e as b,Ne as c,X as d,Et as e,K as f,Yt as g,Xt as h,Oe as i,Ae as j,fn as k,Wt as l,Re as m,At as n,Dt as o,Lt as p,se as q,De as r,Nt as s,ie as t,It as u,zt as v};
