let t=document.createElement("style");t.innerHTML=".vben-basic-arrow[data-v-d16c6c14]{display:inline-block;transform:rotate(0);transition:.3s .1s;transform-origin:center center}.vben-basic-arrow--active[data-v-d16c6c14]{transform:rotate(90deg)}.vben-basic-arrow.inset[data-v-d16c6c14]{line-height:0}.vben-basic-arrow.top[data-v-d16c6c14]{transform:rotate(-90deg)}.vben-basic-arrow.bottom[data-v-d16c6c14],.vben-basic-arrow.top.vben-basic-arrow--active[data-v-d16c6c14]{transform:rotate(90deg)}.vben-basic-arrow.bottom.vben-basic-arrow--active[data-v-d16c6c14]{transform:rotate(-90deg)}",document.head.appendChild(t);import{a,p as o,i as e,o as r,j as s,k as n,X as c}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import{R as i}from"./RightOutlined.f3b30548.js";import"./useContext.1701c2fc.js";import"./useAppContext.cc3110e1.js";import{p as d}from"./propTypes.fc55f516.js";import{u as p}from"./useDesign.90f89f30.js";var b=a({name:"BasicArrow",components:{RightOutlined:i},props:{expand:d.bool,top:d.bool,bottom:d.bool,inset:d.bool},setup(t){const{prefixCls:a}=p("basic-arrow");return{getClass:o((()=>{const{expand:o,top:e,bottom:r,inset:s}=t;return[a,{[`${a}--active`]:o,top:e,inset:s,bottom:r}]}))}}});const m=c("data-v-d16c6c14")(((t,a,o,c,i,d)=>{const p=e("RightOutlined");return r(),s("span",{class:t.getClass},[n(p)],2)}));b.render=m,b.__scopeId="data-v-d16c6c14";export default b;