import{d as e,r as t,e as a,g as o,h as i,o as s,i as r,w as n,j as p,m as d}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./DownOutlined.7914d6be.js";import{I as l}from"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import"./index.b4107331.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./index.074cf711.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./transButton.ee7e6c60.js";import{a as m}from"./index.3322d17d.js";import{_ as c}from"./index.dc0ec1cc.js";import"./RightOutlined.ffcbe06b.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./usePageContext.dfe3de60.js";import{u}from"./useCopyToClipboard.f3ec82c3.js";var f=e({name:"Copy",components:{CollapseContainer:m,PageWrapper:c,[l.name]:l},setup(){const e=t(""),{createMessage:i}=o(),{clipboardRef:s,copiedRef:r}=u();return{handleCopy:function(){const t=a(e);t?(s.value=t,a(r)&&i.warning("copy success！")):i.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},b=d("Copy");f.render=function(e,t,a,o,d,l){const m=i("a-input"),c=i("a-button"),u=i("CollapseContainer"),f=i("PageWrapper");return s(),r(f,{title:"文本复制示例"},{default:n((()=>[p(u,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n((()=>[p("div",j,[p(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),p(c,{type:"primary",onClick:e.handleCopy},{default:n((()=>[b])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;