import{l as _,r as d,A as v,af as x,F as f,L as n,S as e,N as s,H as F,ah as k,E as y,T as C,W as E,ag as S}from"./index-2RU_e24t.js";import{f as P,h as A,g as B}from"./persona-BVAGkkvY.js";const W={class:"persona-page"},D={class:"characteristic-page"},L={class:"skill-page"},N=_({__name:"PersonaPage",setup(T){const r=d([]),u=P(),g=+k().params.id,l=d(10),h=d(window.innerWidth),c=()=>{h.value<500?l.value=5:l.value=10},p=({columnIndex:o,row:a})=>a[0].level===1&&(a[0].colSpan=0,a[1].colSpan=2,o===0)?{display:"none"}:{"text-align":"center"},b=({columnIndex:o})=>{switch(o){case 0:return{"text-align":"center"};case 1:return{"text-align":"center"};case 2:return{"text-align":"center"};case 3:return{"text-align":"center","background-color":"#F7C477"};case 4:return{"text-align":"center","background-color":"#FFA51E"};case 5:return{"text-align":"center","background-color":"#FF8585"};case 6:return{"text-align":"center","background-color":"#96B0FF"};case 7:return{"text-align":"center","background-color":"#EBEC5A"};case 8:return{"text-align":"center","background-color":"#99E849"};case 9:return{"text-align":"center","background-color":"#FFA8FF"};case 10:return{"text-align":"center","background-color":"#96ACEE"};case 11:return{"text-align":"center","background-color":"#FFFFCC"};case 12:return{"text-align":"center","background-color":"#D2D2C6"}}},m=()=>{r.value=[u.personas[g-1]]};return v(()=>{m(),console.log("处理了阿尔卡纳列表和面具"),window.addEventListener("resize",c),c()}),x(()=>{window.removeEventListener("resize",c)}),(o,a)=>{const t=B,i=A;return y(),f(F,null,[n("div",W,[e(i,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":b},{default:s(()=>[e(t,{prop:"name",label:"名称","min-width":l.value,class:"name"},{default:s(w=>[n("div",null,[n("a",{href:"",onClick:a[0]||(a[0]=C(()=>{},["prevent"]))},E(w.row.name),1)])]),_:1},8,["min-width"]),e(t,{prop:"arcana",label:"阿尔卡纳","min-width":l.value,class:"arcana"},null,8,["min-width"]),e(t,{prop:"level",label:"基础等级","min-width":l.value,class:"level"},null,8,["min-width"]),e(t,{prop:"physics",label:"物","min-width":"4"}),e(t,{prop:"gun",label:"枪","min-width":"4"}),e(t,{prop:"fire",label:"火","min-width":"4"}),e(t,{prop:"ice",label:"冰","min-width":"4"}),e(t,{prop:"electricity",label:"电","min-width":"4"}),e(t,{prop:"wind",label:"风","min-width":"4"}),e(t,{prop:"cognition",label:"念","min-width":"4"}),e(t,{prop:"nuclear",label:"核","min-width":"4"}),e(t,{prop:"bless",label:"祝","min-width":"4"}),e(t,{prop:"curse",label:"咒","min-width":"4"})]),_:1},8,["data"])]),n("div",D,[e(i,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":p,"cell-style":{"text-align":"center"}},{default:s(()=>[e(t,{prop:"characteristic",label:"特性"}),e(t,{prop:"characteristic",label:"特性"})]),_:1},8,["data"])]),n("div",L,[e(i,{data:r.value,border:"",style:{width:"100%"},"header-cell-style":p,"cell-style":{"text-align":"center"}},{default:s(()=>[e(t,{prop:"skill",label:"技能"}),e(t,{prop:"skill",label:"技能"})]),_:1},8,["data"])])],64)}}}),V=S(N,[["__scopeId","data-v-f999343b"]]);export{V as default};
