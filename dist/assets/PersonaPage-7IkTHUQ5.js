import{l as b,r as h,A as m,F as _,L as l,S as e,N as o,H as w,ah as x,E as F,T as f,W as k,ag as y}from"./index-0B7HjHFW.js";import{f as v,h as C,g as E}from"./persona-01CK2lKE.js";const S={class:"persona-page"},P={class:"characteristic-page"},A={class:"skill-page"},B=b({__name:"PersonaPage",setup(D){const r=h([]),i=v(),d=+x().params.id,s=({columnIndex:n,row:a})=>a[0].level===1&&(a[0].colSpan=0,a[1].colSpan=2,n===0)?{display:"none"}:{"text-align":"center"},p=({columnIndex:n})=>{switch(n){case 0:return{"text-align":"center"};case 1:return{"text-align":"center"};case 2:return{"text-align":"center"};case 3:return{"text-align":"center","background-color":"#F7C477"};case 4:return{"text-align":"center","background-color":"#FFA51E"};case 5:return{"text-align":"center","background-color":"#FF8585"};case 6:return{"text-align":"center","background-color":"#96B0FF"};case 7:return{"text-align":"center","background-color":"#EBEC5A"};case 8:return{"text-align":"center","background-color":"#99E849"};case 9:return{"text-align":"center","background-color":"#FFA8FF"};case 10:return{"text-align":"center","background-color":"#96ACEE"};case 11:return{"text-align":"center","background-color":"#FFFFCC"};case 12:return{"text-align":"center","background-color":"#D2D2C6"}}},u=()=>{r.value=[i.personas[d-1]]};return m(()=>{u(),console.log("处理了阿尔卡纳列表和面具")}),(n,a)=>{const t=E,c=C;return F(),_(w,null,[l("div",S,[e(c,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":p},{default:o(()=>[e(t,{prop:"name",label:"名称","min-width":"10",class:"name"},{default:o(g=>[l("div",null,[l("a",{href:"",onClick:a[0]||(a[0]=f(()=>{},["prevent"]))},k(g.row.name),1)])]),_:1}),e(t,{prop:"arcana",label:"阿尔卡纳","min-width":"10",class:"arcana"}),e(t,{prop:"level",label:"基础等级","min-width":"10",class:"level"}),e(t,{prop:"physics",label:"物","min-width":"4"}),e(t,{prop:"gun",label:"枪","min-width":"4"}),e(t,{prop:"fire",label:"火","min-width":"4"}),e(t,{prop:"ice",label:"冰","min-width":"4"}),e(t,{prop:"electricity",label:"电","min-width":"4"}),e(t,{prop:"wind",label:"风","min-width":"4"}),e(t,{prop:"cognition",label:"念","min-width":"4"}),e(t,{prop:"nuclear",label:"核","min-width":"4"}),e(t,{prop:"bless",label:"祝","min-width":"4"}),e(t,{prop:"curse",label:"咒","min-width":"4"})]),_:1},8,["data"])]),l("div",P,[e(c,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":s,"cell-style":{"text-align":"center"}},{default:o(()=>[e(t,{prop:"characteristic",label:"特性","min-width":""}),e(t,{prop:"characteristic",label:"特性","min-width":""})]),_:1},8,["data"])]),l("div",A,[e(c,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":s,"cell-style":{"text-align":"center"}},{default:o(()=>[e(t,{prop:"skill",label:"技能","min-width":""}),e(t,{prop:"skill",label:"技能","min-width":""})]),_:1},8,["data"])])],64)}}}),M=y(B,[["__scopeId","data-v-8683df3b"]]);export{M as default};