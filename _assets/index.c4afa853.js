import{a as e,r as t,f as a,h as o,i as s,o as i,j as r,w as p,k as n,p as l}from"./index.82957b1b.js";import"./xlsx.9d951958.js";import"./Trigger.98e610ea.js";import"./omit.f6a7e4f4.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.aed85997.js";import"./index.81a614c0.js";import"./index.6704e890.js";import"./RightOutlined.3c04d9c6.js";import"./usePageContext.5c284b04.js";import"./types.231a34f8.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.3ebda32c.js";import"./index.e2ac5270.js";import"./transButton.1b860824.js";import{a as d}from"./index.fe9d95e6.js";import"./RightOutlined.e5ee841f.js";import"./useTimeout.c9ec92d1.js";import"./tsxHelper.265b5a74.js";import"./index.d5115b9a.js";import"./animation.42dceed5.js";import"./useScrollTo.a7ef93d5.js";import{s as m}from"./index.812d3d59.js";import{u}from"./useCopyToClipboard.079f9fcd.js";var c=e({name:"Copy",components:{CollapseContainer:d,PageWrapper:m},setup(){const e=t(""),{createMessage:s}=o(),{clipboardRef:i,copiedRef:r}=u();return{handleCopy:function(){const t=a(e);t?(i.value=t,a(r)&&s.warning("copy success！")):s.warning("请输入要拷贝的内容！")},value:e}}});const j={class:"flex justify-center"},f=l("Copy");c.render=function(e,t,a,o,l,d){const m=s("a-input"),u=s("a-button"),c=s("CollapseContainer"),x=s("PageWrapper");return i(),r(x,{title:"文本复制示例"},{default:p((()=>[n(c,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:p((()=>[n("div",j,[n(m,{placeholder:"请输入",value:e.value,"onUpdate:value":t[1]||(t[1]=t=>e.value=t)},null,8,["value"]),n(u,{type:"primary",onClick:e.handleCopy},{default:p((()=>[f])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default c;