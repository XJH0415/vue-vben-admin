import{a as e,i as t,o as i,j as o,k as n,w as a,p as s}from"./index.dc12d3c5.js";import"./xlsx.a48e520c.js";import"./useSortable.21535c0e.js";import"./index.41f60c4b.js";import"./Trigger.142edc1f.js";import"./omit.02e063d9.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.6b76f1fa.js";import"./CheckOutlined.fffda28c.js";import"./index.fa3985b1.js";import"./colors.10f556e6.js";import"./index.0616d603.js";import"./RightOutlined.a70b4ee4.js";import"./index.d9af1a5a.js";import"./types.6d681d3e.js";import"./_stringToArray.943e7f6c.js";import"./domUtils.2cd2d3e8.js";import"./_baseFor.f4e5f03f.js";import"./index.e86a54b9.js";import"./index.a172b251.js";import"./index.9f7110f0.js";import"./index.4d043235.js";import"./UpOutlined.b2b80e9e.js";import"./LeftOutlined.fd1f9817.js";import"./index.d2c7e5f0.js";import"./index.aab85027.js";import"./index.599b5919.js";import"./index.6cba0df7.js";import"./index.d437983f.js";import"./zh_CN.0242bd16.js";import"./index.52dad374.js";import"./index.92b03691.js";import"./CaretDownFilled.9cd05574.js";import"./index.47ef10aa.js";import"./CheckOutlined.9bb6282e.js";import"./CloseOutlined.4f388f3b.js";import{s as d,a as r}from"./index.bb73e3b0.js";import"./FullscreenOutlined.6da9f78b.js";import"./LeftOutlined.db5f23aa.js";import"./LoadingOutlined.f68cb32b.js";import{s as l}from"./TableAction.8167910e.js";import"./RightOutlined.29e5aa33.js";import"./SettingOutlined.86be5837.js";import"./useTimeout.4b3d5646.js";import"./tsxHelper.bb7d9f89.js";import"./index.8bdaead9.js";import"./animation.b7c575cc.js";import"./useScrollTo.c17bccfb.js";import"./useAttrs.1918a6ca.js";import"./index.74fc0660.js";import"./index.75e7151a.js";import"./useWindowSizeFn.248d4164.js";import"./useForm.3e1c3265.js";import"./uuid.40269c00.js";import"./useExpose.97caf2e5.js";import{u as m}from"./useTable.6da73207.js";const c=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],p=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var j=e({components:{BasicTable:d,EditTableHeaderIcon:r,TableAction:l},setup(){const[e,{getDataSource:t}]=m({columns:c,showIndexColumn:!1,dataSource:p,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function i(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function o(e){var i;if(null==(i=e.onEdit)||i.call(e,!1),e.isNew){const i=t(),o=i.findIndex((t=>t.key===e.key));i.splice(o,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:i,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:o.bind(null,e,t)}}]:[{label:"编辑",onClick:i.bind(null,e)},{label:"删除"}]},handleAdd:function(){t().push({name:"",no:"",dept:"",editable:!0,isNew:!0})},getDataSource:t}}});const b=s("新增成员");j.render=function(e,s,d,r,l,m){const c=t("TableAction"),p=t("BasicTable"),j=t("a-button");return i(),o("div",null,[n(p,{onRegister:e.registerTable},{action:a((({record:t,column:i})=>[n(c,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"]),n(j,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:a((()=>[b])),_:1},8,["onClick"])])};export default j;