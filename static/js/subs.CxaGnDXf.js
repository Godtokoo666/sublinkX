import{bd as e,d as a,r as l,o as t,C as o,c as u,e as r,Z as s,w as n,M as i,N as d,m as p,a2 as c,t as v,l as m,g as f,$ as y,ay as g,W as _,aH as h,a1 as C,a0 as b,aN as k,aO as w}from"./index.BEL0k1uT.js";import{E as j}from"./el-card.NEOTCDFP.js";import{g as V,E as N,a as x,c as I,d as D,b as E}from"./node.B0xVC5Ii.js";import{E as z}from"./el-tag.BLFacvqW.js";import{E as S,a as U}from"./el-select.DpWaLYER.js";import"./el-scrollbar.C983lo3e.js";import"./el-popper.CI4OGcaS.js";import"./el-tooltip.l0sNRNKZ.js";import{E as T}from"./el-dialog.0kwwX0P2.js";import{E as O,a as B}from"./el-col.BdNv8Amm.js";import{_ as $}from"./_plugin-vue_export-helper.BCo6x5W8.js";import"./isEqual.C5Jvut-J.js";import"./_initCloneObject.B_H1lMTh.js";import"./debounce.9WCS1hu3.js";import"./index.Be1gaN0H.js";import"./strings.BJYEQLBd.js";import"./isUndefined.DgmxjSXK.js";import"./use-dialog.tuO39jkU.js";import"./refs.BRROSo1d.js";function L(a){return e({url:"/api/v1/subcription/delete",method:"delete",params:a})}const H=e=>(k("data-v-cbd695a4"),e=e(),w(),e),J={class:"dialog-footer"},K={class:"m-4"},M=H((()=>m("p",null,"选择已有的节点列表",-1))),R={class:"dialog-footer"},q=H((()=>m("div",{style:{"margin-bottom":"10px"}},null,-1))),A={key:0},G={key:0},P={key:1},Q=H((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),W=H((()=>m("div",{style:{"margin-top":"20px"}},null,-1))),Z=$(a({__name:"subs",setup(a){const k=l([]),w=l(""),$=l(""),H=l(""),Z=l(""),F=l(!1);l(!1);const X=l(),Y=l([]),ee=l([]),ae=l([]),le=l(!1),te=l([]);async function oe(){const{data:a}=await e({url:"/api/v1/subcription/get",method:"get"});k.value=a}t((()=>{oe()})),t((async()=>{const{data:e}=await V();Y.value=e}));const ue=async()=>{const a=JSON.stringify({clash:w.value.trim(),udp:!!ae.value.includes("udp"),cert:!!ae.value.includes("cert")});var l;"添加订阅"===$.value?(await(l={config:a,name:H.value.trim(),nodes:ee.value.join(",")},e({url:"/api/v1/subcription/add",method:"post",data:l,headers:{"Content-Type":"multipart/form-data"}})),oe(),g.success("添加成功")):(await function(a){return e({url:"/api/v1/subcription/update",method:"post",data:a,headers:{"Content-Type":"multipart/form-data"}})}({config:a,name:H.value.trim(),nodes:ee.value.join(","),oldname:Z.value}),oe(),g.success("更新成功")),F.value=!1},re=l([]),se=e=>{re.value=e},ne=()=>{$.value="添加订阅",H.value="",Z.value="",ae.value=[],w.value="./template/clash.yaml",F.value=!0,ee.value=[]},ie=()=>{0!==re.value.length&&h.confirm("你是否要删除选中这些 ?","提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{for(let e=0;e<re.value.length;e++)L({id:re.value[e].ID}),k.value=k.value.filter((a=>a.ID!==re.value[e].ID));g({type:"success",message:"删除成功"})}))},de=l(1),pe=l(10),ce=e=>{pe.value=e},ve=e=>{de.value=e},me=o((()=>{const e=(de.value-1)*pe.value,a=e+pe.value;return k.value.slice(e,a)})),fe=e=>{navigator.clipboard.writeText(e).then((function(){g({type:"success",message:"复制成功！"})}),(function(e){g({type:"warning",message:"复制失败！"})}))},ye=l(!1),ge=["v2ray","clash"],_e=l({}),he=e=>{let a=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"");ge.forEach((l=>{var t;_e.value[l]=`${a}/c/${l}/${t=e,window.btoa(unescape(encodeURIComponent(t)))}`})),ye.value=!0};return(e,a)=>{const l=z,t=C,o=O,V=B,re=T,ge=N,Ce=x,be=b,ke=I,we=D,je=S,Ve=U,Ne=E,xe=j;return u(),r("div",null,[s(re,{modelValue:ye.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ye.value=e),title:"客户端",draggable:""},{default:n((()=>[s(V,null,{default:n((()=>[(u(!0),r(i,null,d(_e.value,((e,a)=>(u(),p(o,{style:{"margin-bottom":"10px"}},{default:n((()=>[s(l,{type:"success"},{default:n((()=>[c(v(a),1)])),_:2},1024),s(l,{type:"primary"},{default:n((()=>[c(v(e),1)])),_:2},1024),s(t,{onClick:a=>{return l=e,void window.open(l);var l}},{default:n((()=>[c("打开")])),_:2},1032,["onClick"]),s(t,{onClick:a=>fe(e)},{default:n((()=>[c("复制")])),_:2},1032,["onClick"])])),_:2},1024)))),256))])),_:1})])),_:1},8,["modelValue"]),s(re,{modelValue:le.value,"onUpdate:modelValue":a[1]||(a[1]=e=>le.value=e),title:"访问记录",width:"80%",draggable:""},{footer:n((()=>[m("div",J,[s(Ce,{data:te.value,border:"",style:{width:"100%"}},{default:n((()=>[s(ge,{prop:"IP",label:"Ip"}),s(ge,{prop:"Count",label:"当日访问次数"}),s(ge,{prop:"Addr",label:"来源"}),s(ge,{prop:"Date",label:"时间"})])),_:1},8,["data"])])])),_:1},8,["modelValue"]),s(re,{modelValue:F.value,"onUpdate:modelValue":a[7]||(a[7]=e=>F.value=e),title:$.value},{footer:n((()=>[m("div",R,[s(t,{onClick:a[6]||(a[6]=e=>F.value=!1)},{default:n((()=>[c("关闭")])),_:1}),s(t,{type:"primary",onClick:ue},{default:n((()=>[c("确定")])),_:1})])])),default:n((()=>[s(be,{modelValue:H.value,"onUpdate:modelValue":a[2]||(a[2]=e=>H.value=e),placeholder:"请输入订阅名称"},null,8,["modelValue"]),s(V,null,{default:n((()=>[s(l,{type:"primary"},{default:n((()=>[c("clash本地模版文件或url连接")])),_:1}),s(be,{modelValue:w.value,"onUpdate:modelValue":a[3]||(a[3]=e=>w.value=e),placeholder:"clash模版文件"},null,8,["modelValue"])])),_:1}),s(V,null,{default:n((()=>[s(l,{type:"primary"},{default:n((()=>[c("强制开启选项")])),_:1}),s(we,{modelValue:ae.value,"onUpdate:modelValue":a[4]||(a[4]=e=>ae.value=e),style:{margin:"5px"}},{default:n((()=>[s(ke,{value:"udp"},{default:n((()=>[c("udp")])),_:1}),s(ke,{value:"cert"},{default:n((()=>[c("跳过证书")])),_:1})])),_:1},8,["modelValue"])])),_:1}),m("div",K,[M,s(Ve,{modelValue:ee.value,"onUpdate:modelValue":a[5]||(a[5]=e=>ee.value=e),multiple:"",placeholder:"Select",style:{width:"100%"}},{default:n((()=>[(u(!0),r(i,null,d(Y.value,(e=>(u(),p(je,{key:e.Name,label:e.Name,value:e.Name},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])),_:1},8,["modelValue","title"]),s(xe,null,{default:n((()=>[s(t,{type:"primary",onClick:ne},{default:n((()=>[c("添加订阅")])),_:1}),q,s(Ce,{ref_key:"table",ref:X,data:f(me),style:{width:"100%"},stripe:"",onSelectionChange:se,"row-key":"ID","tree-props":{children:"Nodes"}},{default:n((()=>[s(ge,{type:"selection",fixed:"",prop:"ID",label:"id"}),s(ge,{prop:"Name",label:"订阅名称 / 节点"},{default:n((({row:e})=>[s(l,{type:e.Nodes?"success":"primary"},{default:n((()=>[c(v(e.Name),1)])),_:2},1032,["type"])])),_:1}),s(ge,{prop:"Link",label:"链接","show-overflow-tooltip":!0},{default:n((({row:e})=>[e.Nodes?(u(),r("div",A,[s(t,{onClick:a=>he(e.Name)},{default:n((()=>[c("客户端")])),_:2},1032,["onClick"])])):y("",!0)])),_:1}),s(ge,{prop:"CreateDate",label:"创建时间",sortable:""}),s(ge,{label:"操作",width:"120"},{default:n((e=>[e.row.Nodes?(u(),r("div",G,[s(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,le.value=!0,void _((()=>{k.value.forEach((e=>{e.ID===l.ID&&(te.value=e.SubLogs)}))}));var l}},{default:n((()=>[c("记录")])),_:2},1032,["onClick"]),s(t,{link:"",type:"primary",size:"small",onClick:a=>(e=>{for(let l=0;l<k.value.length;l++)if(k.value[l].ID===e.ID){const e="string"==typeof(a=k.value[l].Config)?JSON.parse(a):a;$.value="编辑订阅",H.value=k.value[l].Name,Z.value=H.value,e.udp&&ae.value.push("udp"),e.cert&&ae.value.push("cert"),w.value=e.clash,F.value=!0,ee.value=k.value[l].Nodes.map((e=>e.Name))}var a})(e.row)},{default:n((()=>[c("编辑")])),_:2},1032,["onClick"]),s(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,void h.confirm(`你是否要删除 ${l.Name} ?`,"提示",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((async()=>{await L({id:l.ID}),oe(),g({type:"success",message:"删除成功"})}));var l}},{default:n((()=>[c("删除")])),_:2},1032,["onClick"])])):(u(),r("div",P,[s(t,{link:"",type:"primary",size:"small",onClick:a=>{return l=e.row,void fe(l.Link);var l}},{default:n((()=>[c("复制")])),_:2},1032,["onClick"])]))])),_:1})])),_:1},8,["data"]),Q,s(t,{type:"info",onClick:a[8]||(a[8]=e=>{k.value.forEach((e=>{X.value.toggleRowSelection(e,!0)}))})},{default:n((()=>[c("全选")])),_:1}),s(t,{type:"warning",onClick:a[9]||(a[9]=e=>{X.value.clearSelection()})},{default:n((()=>[c("取消选择")])),_:1}),s(t,{type:"danger",onClick:ie},{default:n((()=>[c("批量删除")])),_:1}),W,s(Ne,{onSizeChange:ce,onCurrentChange:ve,"current-page":de.value,"page-size":pe.value,layout:"total, sizes, prev, pager, next, jumper","page-sizes":[10,20,30,40],total:k.value.length},null,8,["current-page","page-size","total"])])),_:1})])}}}),[["__scopeId","data-v-cbd695a4"]]);export{Z as default};