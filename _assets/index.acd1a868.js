let e=document.createElement("style");e.innerHTML=".demo-box[data-v-2a8e92fa]{display:flex;width:100%;height:300px;font-size:24px;color:#fff;background:#408ede;border-radius:10px;justify-content:center;align-items:center}",document.head.appendChild(e);import{a as t,r as a,V as i,W as n,i as s,o as c,j as o,k as d,m as l,X as r}from"./index.32a91551.js";import"./xlsx.a48e520c.js";import{A as u}from"./index.653a701c.js";import{C as f}from"./index.0956157a.js";var m=t({components:{ClickOutSide:f,Alert:u},setup(){const e=a("Click");return{innerClick:function(){e.value="Click Inner"},handleClickOutside:function(){e.value="Click Out Side"},text:e}}});const k=r("data-v-2a8e92fa");i("data-v-2a8e92fa");const p={class:"p-10"};n();const x=k(((e,t,a,i,n,r)=>{const u=s("Alert"),f=s("ClickOutSide");return c(),o("div",p,[d(u,{message:"点内外部触发事件","show-icon":""}),d(f,{onClickOutside:e.handleClickOutside,class:"flex justify-center mt-10"},{default:k((()=>[d("div",{onClick:t[1]||(t[1]=(...t)=>e.innerClick&&e.innerClick(...t)),class:"demo-box"},l(e.text),1)])),_:1},8,["onClickOutside"])])}));m.render=x,m.__scopeId="data-v-2a8e92fa";export default m;