import{Z as d,r as g,a2 as l,a9 as a,a3 as m,a4 as r,m as n,an as f,a5 as h,a1 as p}from"./index-103e1f77.js";import{V as c}from"./VContainer-4184c105.js";import{d as y}from"./VBtn-d66e0214.js";const v={style:{position:"relative"}},k=h("div",{class:"d-flex align-center justify-center fill-height skeleton",style:{opacity:"0.5"}},null,-1),_=["alt"],w=h("div",{class:"d-flex align-center justify-center fill-height skeleton",style:{opacity:"0.5"}},null,-1),C=d({__name:"GifCardComponent",props:{gif:{},original:{type:Boolean}},setup(b){const t=g(!1);let i;async function u(e){navigator.share?await navigator.share({title:e.title,url:e.url}).then(()=>{o(),console.log("The link was successfully shared!")}).catch(s=>{console.error("An error occurred while trying to share:",s)}):(console.log("Web Share API is not supported in this browser."),navigator.clipboard.writeText(`${e.title} ${e.url}`).then(()=>{o(),console.log("Successfully copied to the clipboard.")},s=>{console.error("Error copying to clipboard:",s)}));const o=()=>{t.value=!0,clearTimeout(i),i=setTimeout(()=>{t.value=!1},2e3)};p(()=>{clearTimeout(i)})}return(e,o)=>(l(),a("div",v,[e.original?(l(),m(c,{key:0,class:"mx-auto","max-width":"1200",height:"100%","lazy-src":e.gif.images.fixed_height_still.url,src:e.gif.images.original.url},{placeholder:r(()=>[k]),_:1},8,["lazy-src","src"])):(l(),a("div",{key:1,class:"skeleton",alt:e.gif.title,style:"width: 100%; height: 170px;background-color: #f1f1f1;"},[n(c,{class:"mx-auto","max-width":"100%",height:"100%",cover:"","lazy-src":e.gif.images.fixed_height_still.url,src:e.gif.images.original.url},{placeholder:r(()=>[w]),_:1},8,["lazy-src","src"])],8,_)),n(y,{color:t.value?"success":"white",size:"x-small",class:"ma-1",style:{position:"absolute",bottom:"0",right:"0"},onClick:o[0]||(o[0]=f(s=>u(e.gif),["prevent"])),icon:t.value?"mdi-check-circle":"mdi-link-variant-plus"},null,8,["color","icon"])]))}});export{C as _};
