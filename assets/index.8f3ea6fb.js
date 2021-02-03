import{d as e,r as o,cp as t,cq as i,h as r,o as s,i as n,bw as d,j as p,m as l}from"./index.5083dc91.js";import{C as a}from"./index.e4576809.js";import"./index.c3b5e8d6.js";import"./index.cf567728.js";import{_ as m}from"./index.62b6b966.js";import c from"./PersonTable.5bf320c7.js";import{_ as f}from"./index.136e7d6e.js";import{u as b}from"./useForm.232757ae.js";import"./vendor.3b1829c7.js";import"./index.0cc01a94.js";import"./UpOutlined.6d16ca11.js";import"./LeftOutlined.033237a7.js";import"./DownOutlined.ad3384b4.js";import"./RightOutlined.e15855c8.js";import"./PlusOutlined.e1bba46b.js";import"./responsiveObserve.c545f1cc.js";import"./index.1c59bd17.js";import"./findIndex.d667fd27.js";import"./isEqual.54d9b6d5.js";import"./get.1bdf74a7.js";import"./_baseProperty.74f89655.js";import"./toInteger.368318f3.js";import"./index.47fe438f.js";import"./SearchOutlined.bbd8729c.js";import"./EyeOutlined.b4b248e9.js";import"./index.3ae1bbe2.js";import"./CheckOutlined.d6ac4a16.js";import"./index.e662a5af.js";import"./colors.cbbbc0c2.js";import"./index.a9223e98.js";import"./index.ec10f4ee.js";import"./RedoOutlined.1d1b9d98.js";import"./index.e7b0242c.js";import"./EllipsisOutlined.3b6bce0a.js";import"./types.7d0557e6.js";import"./Tree.62ba477a.js";import"./util.1cd56a81.js";import"./useAttrs.5e2798d7.js";/* empty css              */import"./uuid.6199f68d.js";import"./index.c7d6f120.js";import"./DeleteOutlined.f5481f39.js";import"./index.4b14cc02.js";import"./index.ff339dff.js";import"./useTimeout.6f85263a.js";import"./useWindowSizeFn.b104c8eb.js";import"./index.65229165.js";import"./index.ec9957f2.js";import"./domUtils.57616fad.js";import"./_stringToArray.267a0e21.js";import"./useScrollTo.946cd9d0.js";import"./animation.543b2081.js";import"./FullscreenOutlined.0c5bdf7c.js";import"./index.7cf3cb61.js";import"./index.b0b4264c.js";import"./index.71d590fa.js";import"./download.3be52d8b.js";import"./index.5ed110bf.js";import"./index.6e3fea3e.js";import"./DoubleLeftOutlined.b534f38d.js";import"./DoubleRightOutlined.6aba1a64.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.8328ef76.js";import"./CaretDownFilled.840088b6.js";import"./clickOutside.9ad4939a.js";import"./useSortable.4df8daf6.js";import"./SettingOutlined.9de56f91.js";import"./useExpose.0170b1c8.js";import"./useTable.b11af12c.js";import"./index.dcb73a74.js";import"./index.ec0ccb98.js";import"./usePageContext.d8053a7f.js";import"./ArrowLeftOutlined.f35b6c77.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],x=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:m,PersonTable:c,PageWrapper:f,[a.name]:a},setup(){const e=o(null),[t,{validate:i}]=b({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1}),[r,{validate:s}]=b({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:r,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([i(),s()])}catch(o){}},tableRef:e}}});const O=d("data-v-2d2b3260");t("data-v-2d2b3260");const h=l(" 提交 ");i();const q=O(((e,o,t,i,d,l)=>{const a=r("BasicForm"),m=r("a-card"),c=r("PersonTable"),f=r("a-button"),b=r("PageWrapper");return s(),n(b,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。",contentClass:"p-4"},{rightFooter:O((()=>[p(f,{type:"primary",onClick:e.submitAll},{default:O((()=>[h])),_:1},8,["onClick"])])),default:O((()=>[p(m,{title:"仓库管理",bordered:!1},{default:O((()=>[p(a,{onRegister:e.register},null,8,["onRegister"])])),_:1}),p(m,{title:"任务管理",bordered:!1,class:"mt-5"},{default:O((()=>[p(a,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),p(m,{title:"成员管理",bordered:!1,class:"mt-5"},{default:O((()=>[p(c,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-2d2b3260";export default g;