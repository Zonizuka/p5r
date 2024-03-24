import{ah as X,r as v,k as Y,z as Z,af as ee,E as C,K as y,Q as t,M as P,G as U,ai as te,D as N,S as G,U as H,a1 as le,F as ne,ag as se}from"./index-D0nZi2vQ.js";import{h as K,j as ae,i as re}from"./persona-D3QoT5ys.js";const Q=X("persona-detail",()=>{const n=v([]),i=v([]),S=v([]);return{skills:n,fusions:i,personaDetails:S,setSkills:b=>{n.value=b},setFusions:b=>{i.value=b},setPersonaDetails:b=>{S.value=b},removeSkills:()=>{n.value=[]},removeFusions:()=>{i.value=[]},removePersonaDetails:()=>{S.value=[]}}},{persist:!0}),h=Q(),oe=async()=>{if(h.personaDetails.length>0)return h.personaDetails;try{const n=await fetch("/json/PersonaDetail.json");if(!n.ok)throw new Error("Failed to load PersonaDetail JSON file");const i=await n.json();h.setPersonaDetails(i)}catch(n){console.error("Error fetching PersonaDetail JSON data:",n)}return h.personaDetails},ie=async()=>{if(h.skills.length>0)return h.skills;try{const n=await fetch("/json/Skill.json");if(!n.ok)throw new Error("Failed to load Skill JSON file");const i=await n.json();h.setSkills(i)}catch(n){console.error("Error fetching Skill JSON data:",n)}return h.skills},ce=async()=>{if(h.fusions.length>0)return h.fusions;try{const n=await fetch("/json/Fusion.json");if(!n.ok)throw new Error("Failed to load Fusion JSON file");const i=await n.json();h.setFusions(i)}catch(n){console.error("Error fetching Fusion JSON data:",n)}return h.fusions},ue={class:"persona-page"},de={class:"characteristic-page"},pe={class:"skill-page"},he={class:"fusion-page"},fe=["onClick"],ge={key:0},ve=Y({__name:"PersonaPage",setup(n){const i=v([]),S=v([]),T=v([]),j=v([]),A=Q();let m=+te().params.id;const x=v(10),b=v(window.innerWidth),L=()=>{b.value<500?x.value=5:x.value=10},B=({columnIndex:s,row:a})=>a[0].level===1&&(a[0].colSpan=0,a[1].colSpan=2,s===0)?{display:"none"}:{"text-align":"center"},$=({columnIndex:s})=>{switch(s){case 0:return{"text-align":"center"};case 1:return{"text-align":"center"};case 2:return{"text-align":"center"};case 3:return{"text-align":"center","background-color":"#F7C477"};case 4:return{"text-align":"center","background-color":"#FFA51E"};case 5:return{"text-align":"center","background-color":"#FF8585"};case 6:return{"text-align":"center","background-color":"#96B0FF"};case 7:return{"text-align":"center","background-color":"#EBEC5A"};case 8:return{"text-align":"center","background-color":"#99E849"};case 9:return{"text-align":"center","background-color":"#FFA8FF"};case 10:return{"text-align":"center","background-color":"#96ACEE"};case 11:return{"text-align":"center","background-color":"#FFFFCC"};case 12:return{"text-align":"center","background-color":"#D2D2C6"}}},V=()=>{var s={},a=[];oe().then(e=>{s=e[m-1],ie().then(c=>{a=c,S.value=[{characteristicName:i.value[0].characteristic,characteristicDetail:a[s.characteristic-1].skillDetail}],T.value=(()=>{const u=[],o=s.skill,r=i.value[0].skill;for(let d=0;d<o.length;d++)u.push({skillName:r[d],skillDetail:a[o[d]-1].skillDetail});return u})()})})},W={},z=()=>{ce().then(s=>{const a=A.personaDetails[m-1],e=a.resultType,c=[];if(e==1){const u=s[a.arcana-1].arcanaFusion,o=[1,1e3],r=J(a.arcana),d=a.level;for(let l=0;l<r.length;l++)if(r[l].level<d&&r[l].resultType==1)o[0]=r[l].level;else if(r[l].level>d&&r[l].resultType==1){o[1]=d;break}console.log("interval",o);for(let l=0;l<u.length-1;l+=2){const _=u[l],F=u[l+1],f=J(_),g=J(F);for(let w=0;w<f.length;w++){const p=f[w];if(p.fusionType<=3){const E=[(o[0]-1)*2-p.level,(o[1]-1)*2-p.level];for(let O=0;O<g.length;O++){const D=g[O];p.fusionType===2&&D.fusionType===2&&I[p.id]===D.id||p.fusionType===3&&D.fusionType!==3||p.fusionType!==3&&D.fusionType===3||D.level>E[0]&&D.level<=E[1]&&c.push([p,D])}}}}const k=r.filter(l=>l.id!==m&&l.fusionType<=2);console.log("subSelfArr",r),console.log("removedArray",k),console.log("id",m);for(let l=0;l<k.length;l++){const _=k[l];for(let F=l+1;F<k.length;F++){const f=k[F];if(!(_.level<d&&f.level<d)&&I[_.id]!==f.id&&f.level>d){let g=F,w=f.level;for(;g>=0&&k[g].level>d;)g!==l&&g!==F&&k[g].resultType==1&&(w=k[g].level),g--;let p=(_.level+f.level)/2+1,E=w===f.level;p>=d&&p<=w&&E?c.push([_,f]):p>=d&&p<w&&!E&&c.push([_,f])}}}console.log("resultArray",c)}else if(e==2){const u=a.fusionList;if(u===void 0)throw console.error("未添加合成信息!");let o=[];for(let r=0;r<u.length;r++)o.push(A.personaDetails[u[r]-1]);c.push(o),console.log("resultArray",c)}else e==3&&c.push();j.value=c})},J=s=>s in W?W[s]:A.personaDetails.slice(M[s-1][0],M[s-1][1]),q=s=>{m=s,K().then(a=>{i.value=[a[m-1]],V(),z()})};Z(()=>{K().then(s=>{i.value=[s[m-1]],V(),z()}),window.addEventListener("resize",L),L()}),ee(()=>{window.removeEventListener("resize",L)});const M=[[0,17],[17,28],[28,37],[37,46],[46,55],[55,62],[62,71],[71,82],[82,91],[91,103],[103,114],[114,124],[124,134],[134,147],[147,156],[156,165],[165,174],[174,183],[183,196],[196,204],[204,213],[213,222],[222,230]],I={25:51,163:164,69:210};return(s,a)=>{const e=re,c=ae;return N(),C(U,null,[y("div",ue,[t(c,{data:i.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":$},{default:P(()=>[t(e,{label:"名称","min-width":x.value,class:"name"},{default:P(u=>[y("div",null,[y("a",{href:"",onClick:a[0]||(a[0]=G(()=>{},["prevent"]))},H(u.row.name),1)])]),_:1},8,["min-width"]),t(e,{prop:"arcana",label:"阿尔卡纳","min-width":x.value,class:"arcana"},null,8,["min-width"]),t(e,{prop:"level",label:"基础等级","min-width":x.value,class:"level"},null,8,["min-width"]),t(e,{prop:"physics",label:"物","min-width":"4"}),t(e,{prop:"gun",label:"枪","min-width":"4"}),t(e,{prop:"fire",label:"火","min-width":"4"}),t(e,{prop:"ice",label:"冰","min-width":"4"}),t(e,{prop:"electricity",label:"电","min-width":"4"}),t(e,{prop:"wind",label:"风","min-width":"4"}),t(e,{prop:"cognition",label:"念","min-width":"4"}),t(e,{prop:"nuclear",label:"核","min-width":"4"}),t(e,{prop:"bless",label:"祝","min-width":"4"}),t(e,{prop:"curse",label:"咒","min-width":"4"})]),_:1},8,["data"])]),y("div",de,[t(c,{data:S.value,border:"",style:{width:"100%"},"header-cell-style":B,"cell-style":{"text-align":"center"}},{default:P(()=>[t(e,{prop:"characteristicName",label:"特性","min-width":"29"}),t(e,{prop:"characteristicDetail",label:"特性","min-width":"71"})]),_:1},8,["data"])]),y("div",pe,[t(c,{data:T.value,border:"",style:{width:"100%"},"header-cell-style":B,"cell-style":{"text-align":"center"}},{default:P(()=>[t(e,{prop:"skillName",label:"技能","min-width":"29"}),t(e,{prop:"skillDetail",label:"技能","min-width":"71"})]),_:1},8,["data"])]),y("div",he,[t(c,{data:j.value,border:"",style:{width:"100%"},"header-cell-style":{"text-align":"center"},"cell-style":{"text-align":"center"}},{default:P(()=>[t(e,{label:"反向合成表"},{default:P(u=>[y("div",null,[(N(!0),C(U,null,le(u.row,(o,r)=>(N(),C("span",{key:r},[y("a",{href:"",onClick:G(d=>q(o.id),["prevent"])},H(o.arcanaName+"LV"+o.level+o.name),9,fe),r<u.row.length-1?(N(),C("span",ge," + ")):ne("",!0)]))),128))])]),_:1})]),_:1},8,["data"])])],64)}}}),we=se(ve,[["__scopeId","data-v-7472d679"]]);export{we as default};
