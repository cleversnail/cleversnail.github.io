import{m as O,p as R,a as S,q as Q,s as Y,v as x,e as l,x as A,y as w,z as X,A as Z,B as ee,l as N,C as te,D as T,E as ne,G as oe,H as ae,I as le,J as se,r as ie,K as ce,L as K,M as re,N as ue,P as de,O as F,Q as me,R as fe,S as Be,T as ve,U as ge,u as L,f as z,b as U,h as he,c as be,d as o,n as pe,k as C,j as B,F as ye,V as Ce}from"./index-DG5awykm.js";import{m as _e,u as we,a as I,s as ke}from"./index-C9nhHDE0.js";import{b as _}from"./date-DzHNuEYm.js";import{P as Pe,i as xe}from"./PopAdd-B0NzTewT.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const[M,$]=O("action-bar"),V=Symbol(M),Se={placeholder:Boolean,safeAreaInsetBottom:x};var De=R({name:M,props:Se,setup(e,{slots:s}){const a=S(),i=Q(a,$),{linkChildren:t}=Y(V);t();const d=()=>{var f;return l("div",{ref:a,class:[$(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(f=s.default)==null?void 0:f.call(s)])};return()=>e.placeholder?i(d):d()}});const Te=A(De),[Ee,Oe]=O("action-bar-button"),Re=w({},X,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Ae=R({name:Ee,props:Re,setup(e,{slots:s}){const a=Z(),{parent:i,index:t}=ee(V),d=N(()=>{if(i){const r=i.children[t.value-1];return!(r&&"isButton"in r)}}),f=N(()=>{if(i){const r=i.children[t.value+1];return!(r&&"isButton"in r)}});return te({isButton:!0}),()=>{const{type:r,icon:h,text:b,color:p,loading:c,disabled:y}=e;return l(T,{class:Oe([r,{last:f.value,first:d.value}]),size:"large",type:r,icon:h,color:p,loading:c,disabled:y,onClick:a},{default:()=>[s.default?s.default():b]})}}});const H=A(Ae),[Ne,m,P]=O("dialog"),Fe=w({},ne,{title:String,theme:String,width:oe,message:[String,Function],callback:Function,allowHtml:Boolean,className:ae,transition:le("van-dialog-bounce"),messageAlign:String,closeOnPopstate:x,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:x,closeOnClickOverlay:Boolean,keyboardEnabled:x}),Ie=[...se,"transition","closeOnPopstate"];var q=R({name:Ne,props:Fe,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:s,slots:a}){const i=S(),t=ie({confirm:!1,cancel:!1}),d=n=>s("update:show",n),f=n=>{var u;d(!1),(u=e.callback)==null||u.call(e,n)},r=n=>()=>{e.show&&(s(n),e.beforeClose?(t[n]=!0,ve(e.beforeClose,{args:[n],done(){f(n),t[n]=!1},canceled(){t[n]=!1}})):f(n))},h=r("cancel"),b=r("confirm"),p=ce(n=>{var u,v;if(!e.keyboardEnabled||n.target!==((v=(u=i.value)==null?void 0:u.popupRef)==null?void 0:v.value))return;({Enter:e.showConfirmButton?b:F,Escape:e.showCancelButton?h:F})[n.key](),s("keydown",n)},["enter","esc"]),c=()=>{const n=a.title?a.title():e.title;if(n)return l("div",{class:m("header",{isolated:!e.message&&!a.default})},[n])},y=n=>{const{message:u,allowHtml:v,messageAlign:g}=e,k=m("message",{"has-title":n,[g]:g}),D=me(u)?u():u;return v&&typeof D=="string"?l("div",{class:k,innerHTML:D},null):l("div",{class:k},[D])},W=()=>{if(a.default)return l("div",{class:m("content")},[a.default()]);const{title:n,message:u,allowHtml:v}=e;if(u){const g=!!(n||a.title);return l("div",{key:v?1:0,class:m("content",{isolated:!g})},[y(g)])}},j=()=>l("div",{class:[Be,m("footer")]},[e.showCancelButton&&l(T,{size:"large",text:e.cancelButtonText||P("cancel"),class:m("cancel"),style:{color:e.cancelButtonColor},loading:t.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&l(T,{size:"large",text:e.confirmButtonText||P("confirm"),class:[m("confirm"),{[fe]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:t.confirm,disabled:e.confirmButtonDisabled,onClick:b},null)]),G=()=>l(Te,{class:m("footer")},{default:()=>[e.showCancelButton&&l(H,{type:"warning",text:e.cancelButtonText||P("cancel"),class:m("cancel"),color:e.cancelButtonColor,loading:t.cancel,disabled:e.cancelButtonDisabled,onClick:h},null),e.showConfirmButton&&l(H,{type:"danger",text:e.confirmButtonText||P("confirm"),class:m("confirm"),color:e.confirmButtonColor,loading:t.confirm,disabled:e.confirmButtonDisabled,onClick:b},null)]}),J=()=>a.footer?a.footer():e.theme==="round-button"?G():j();return()=>{const{width:n,title:u,theme:v,message:g,className:k}=e;return l(de,K({ref:i,role:"dialog",class:[m([v]),k],style:{width:ue(n)},tabindex:0,"aria-labelledby":u||g,onKeydown:p,"onUpdate:show":d},re(e,Ie)),{default:()=>[c(),W(),J()]})}}});let E;const $e={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let He=w({},$e);function Ke(){({instance:E}=_e({setup(){const{state:s,toggle:a}=we();return()=>l(q,K(s,{"onUpdate:show":a}),null)}}))}function Le(e){return ge?new Promise((s,a)=>{E||Ke(),E.open(w({},He,e,{callback:i=>{(i==="confirm"?s:a)(i)}}))}):Promise.resolve(void 0)}const ze=e=>Le(w({showCancelButton:!0},e));A(q);const Ue={__name:"Head",props:{title:{type:String,default:""}},setup(e){const s=L(),a=()=>{s.back()};return(i,t)=>{const d=z("van-nav-bar");return U(),he(d,{title:e.title,"left-arrow":"",onClickLeft:a},null,8,["title"])}}},Me={class:"detail"},Ve={class:"content"},qe={class:"card"},We={class:"title"},je={class:"money"},Ge={class:"data"},Je={class:"date"},Qe={class:"remark"},Ye={class:"bottom"},ot={__name:"Detail",setup(e){const s=Ce(),a=L(),i=s.query.id,t=S({}),d=S(null),f=async()=>{I.get(`/api/bill/detail?id=${i}`).then(p=>{console.log(p),t.value=p.data})};f();const r=async()=>{ze({message:"确定删除该条账单吗？"}).then(async()=>{await I.post("/api/bill/delete",{id:i}),ke("删除成功"),a.push("/home")}).catch(()=>{})},h=()=>{d.value.show=!0},b=()=>{f()};return(p,c)=>{const y=z("van-icon");return U(),be(ye,null,[o("div",Me,[l(Ue,{title:"账单详情"}),o("div",Ve,[o("div",qe,[o("div",We,[o("i",{class:pe(["iconfont",[C(xe)[t.value.type_name],t.value.pay_type===1?"expense":"income"]])},null,2),o("p",null,B(t.value.type_name),1)]),o("div",je,B(t.value.pay_type===1?"-":"+")+B(t.value.amount),1),o("div",Ge,[o("div",Je,[c[0]||(c[0]=o("i",null,"记录时间",-1)),o("span",null,B(C(_)(t.value.date)[0])+"年 "+B(C(_)(t.value.date)[1])+" 月 "+B(C(_)(t.value.date)[2])+" 日 "+B(C(_)(t.value.date)[3])+":"+B(C(_)(t.value.date)[4]),1)]),c[2]||(c[2]=o("div",{class:"from"},[o("i",null,"来源"),o("span",null,"支付宝")],-1)),o("div",Qe,[c[1]||(c[1]=o("i",null,"备注",-1)),o("span",null,B(t.value.remark),1)])]),o("div",Ye,[o("div",{class:"delete",onClick:r},[l(y,{name:"delete-o"}),c[3]||(c[3]=o("span",null,"删除",-1))]),o("div",{class:"edit",onClick:h},[l(y,{name:"edit"}),c[4]||(c[4]=o("span",null,"编辑",-1))])])])])]),l(Pe,{ref_key:"popEditRef",ref:d,billDetail:t.value,onRefresh:b},null,8,["billDetail"])],64)}}};export{ot as default};