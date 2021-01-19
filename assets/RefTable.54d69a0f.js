import{d as e,r as i,g as t,e as o,h as s,o as n,i as a,j as l,w as c,m as r}from"./index.9a6e95d8.js";import"./SearchOutlined.0274a049.js";import"./scrollTo.c9242ea7.js";import"./index.fa1a1838.js";import"./DownOutlined.7914d6be.js";import"./CheckOutlined.9adc9f3e.js";import"./index.a3a1e8cf.js";import"./EyeOutlined.301bca7e.js";import"./index.55de31d8.js";import"./index.3970d233.js";import"./colors.2afe0cf1.js";import"./index.78d832da.js";import"./RightOutlined.a7006a51.js";import"./types.3a3ca354.js";import"./toInteger.858f2e82.js";import"./uuid.d595bce3.js";import{_ as d}from"./index.f03b70c9.js";import"./findIndex.2287226b.js";import"./_stringToArray.c244b21e.js";import"./domUtils.4bf6def6.js";import"./isEqual.b9304b29.js";import"./_baseProperty.74f89655.js";import"./index.734b408e.js";import"./index.47b09016.js";import"./UpOutlined.2c90282e.js";import"./LeftOutlined.7f33cb51.js";import"./index.a42a59eb.js";import"./responsiveObserve.c545f1cc.js";import"./index.c13f1716.js";import"./index.5182ab2a.js";import"./index.dbe75ef4.js";import"./index.c729d376.js";import"./index.b3ef3e6d.js";import"./index.167971e0.js";import"./index.eea1e6d3.js";import"./zh_CN.8094f4d6.js";import"./useSortable.5798cc2d.js";import"./index.b10dc2f3.js";import"./index.5f0ec28f.js";import"./CaretDownFilled.f2b1cd8f.js";import"./transButton.ee7e6c60.js";import"./util.61e89dd9.js";import"./index.3322d17d.js";import"./CheckOutlined.c9ee7d78.js";import"./index.f7e9d603.js";import"./FullscreenOutlined.ae5dc3db.js";import"./RightOutlined.ffcbe06b.js";import"./SettingOutlined.f8b3f595.js";import"./useTimeout.fa08b045.js";import"./index.7069600f.js";import"./index.8d91dadc.js";import"./animation.5c0b7ef6.js";import"./useScrollTo.162b59ba.js";import"./useAttrs.2a07db8f.js";import"./useWindowSizeFn.fed78a59.js";import"./download.8ba6c906.js";import"./useForm.3095a47b.js";import"./clickOutside.24ffb9ff.js";import"./useExpose.9ff1c88c.js";import{getBasicColumns as m,getBasicShortColumns as f}from"./tableData.7aa0192c.js";import{d as p}from"./table.0523121c.js";var u=e({components:{BasicTable:d},setup(){const e=i(null),{createMessage:s}=t();function n(){const i=o(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:p,columns:m(),changeLoading:function(){n().setLoading(!0),setTimeout((()=>{n().setLoading(!1)}),1e3)},changeColumns:function(){n().setColumns(f())},reloadTable:function(){n().setColumns(m()),n().reload({page:1})},getColumn:function(){s.info("请在控制台查看！")},getTableData:function(){s.info("请在控制台查看！")},getPagination:function(){s.info("请在控制台查看！")},setPaginationInfo:function(){n().setPagination({current:2}),n().reload()},getSelectRowList:function(){s.info("请在控制台查看！")},getSelectRowKeyList:function(){s.info("请在控制台查看！")},setSelectedRowKeyList:function(){n().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){n().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=r("还原"),g=r("开启loading"),x=r("更改Columns"),k=r("获取Columns"),w=r("获取表格数据"),S=r("跳转到第2页"),R={class:"mb-4"},_=r("获取选中行"),h=r("获取选中行Key"),y=r("设置选中行"),O=r("清空选中行"),T=r("获取分页信息");u.render=function(e,i,t,o,r,d){const m=s("a-button"),f=s("BasicTable");return n(),a("div",j,[l("div",b,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[w])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),l("div",R,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[h])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[y])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[O])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[T])),_:1},8,["onClick"])]),l(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;