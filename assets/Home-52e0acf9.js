import{j as v,n as p,k as w,l as k}from"./VRow-76da0abf.js";import{_ as x}from"./GifCardComponent.vue_vue_type_script_setup_true_lang-21287e81.js";import{U as d,r as u,c as C,o as V,x as y,W as G,$ as B,Y as r,Z as n,X as a,m as c,a0 as E,a1 as L,J as S,a2 as T,a3 as $}from"./index-432f8fa7.js";import{g as H}from"./VBtn-26cebf2e.js";const N={class:"d-flex align-center",style:{height:"80px"}},Q=d({__name:"GifsGridComponent",setup(_){const e=v(),l=u(e.gifs),t=u(!1);let i;const s=C({get:()=>e.searchQuery,set:o=>e.setSearchQuery(o)});V(()=>{s.value&&s.value.length>0?e.searchGifs(s.value):e.fetchTrandingGifs(),window.addEventListener("scroll",f),y(e,o=>{l.value=o.gifs})});const f=()=>{window.innerHeight+window.scrollY>=document.documentElement.offsetHeight-500&&!t.value&&(t.value||(t.value=!0,clearTimeout(i),i=setTimeout(()=>{s.value&&s.value.length>0?e.searchGifs(s.value):e.loadMore(),t.value=!1},800)))};return G(()=>{window.removeEventListener("scroll",f),clearTimeout(i)}),(o,F)=>{const g=B("router-link");return a(),r(p,null,{default:n(()=>[c(w,null,{default:n(()=>[(a(!0),E(S,null,L(l.value,(m,h)=>(a(),r(k,{key:h,cols:"12",sm:"6",md:"4",lg:"3"},{default:n(()=>[c(g,{to:`/details/${m.id}`},{default:n(()=>[c(x,{gif:m},null,8,["gif"])]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1}),T("div",N,[t.value?(a(),r(H,{key:0,indeterminate:"",height:2})):$("",!0)])]),_:1})}}}),I=d({__name:"Home",setup(_){const e=u([]);return(l,t)=>(a(),r(Q,{gifs:e.value},null,8,["gifs"]))}});export{I as default};
