import{W as q,a as x,r as E,o as M,b as i,c as l,e as p,w as D,d as a,n as u,g as A,j as c,F as y,i as T,X as L,Y as O,f as m,k as w}from"./index-DG5awykm.js";import{a as _,b as S}from"./index-C9nhHDE0.js";import{a as v,b as W}from"./date-DzHNuEYm.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";const g={餐饮:"icon-canyin",交通:"icon-gongjiao",旅行:"icon-feiji",人情:"icon-renqing",转账:"icon-zhuanzhang",其他:"icon-qita",购物:"icon-tianchongxing-",工资:"icon-gongzi",理财:"icon-licai",服饰:"icon-fushi",日用:"icon-riyongcopy",学习:"icon-xuexi",奖金:"icon-jiangjin",退款:"icon-tuikuanshouhou",医疗:"icon-yiliao"},Y={class:"add-wrap"},G={class:"head"},H={class:"left"},J={class:"money"},K={class:"amount"},Q={class:"type-wrap"},R={key:0,class:"expense grid"},Z=["onClick"],ee={key:1,class:"income grid"},te=["onClick"],ne={class:"remark"},ae={class:"keyboard"},oe={__name:"PopAdd",props:{billDetail:{type:Object,default:()=>({})}},emits:["refresh"],setup(h,{expose:C,emit:N}){const s=h;q(()=>s.billDetail.pay_type,o=>{o===2?e.payType="income":e.payType="expense",e.date=W(s.billDetail.date),e.currentType={id:s.billDetail.type_id,name:s.billDetail.type_name},e.amount=s.billDetail.amount,e.remark=s.billDetail.remark});const d=x(!1),r=x(!1),e=E({expense:[],income:[],payType:"expense",currentDate:v(new Date),date:v(new Date),currentType:{},remark:"",amount:""});M(async()=>{const o=await _.get("/api/type/list");console.log(o),e.expense=o.data.list.filter(t=>t.type==="1"),e.income=o.data.list.filter(t=>t.type==="2"),e.currentType=e.expense[0],s.billDetail.type_id&&(e.currentType={id:s.billDetail.type_id,name:s.billDetail.type_name})});const f=o=>{e.payType=o},j=()=>{e.date=e.currentDate,r.value=!1},b=o=>{e.currentType=o},V=o=>{o=="."&&e.amount.includes(".")||e.amount.includes(".")&&e.amount.split(".")[1].length>=2||(e.amount+=o)},$=()=>{e.amount=e.amount.slice(0,-1)},z=N,B=async()=>{if(Number.isNaN(Number(e.amount))||e.amount==""){S("请输入正确的金额");return}const o={amount:Number(e.amount).toFixed(2),type_id:e.currentType.id,type_name:e.currentType.name,date:new Date(e.date.slice(0,3).join("-")).getTime(),pay_type:e.payType=="expense"?1:2,remark:e.remark,id:s.billDetail.id};s.billDetail.id?await _.post("/api/bill/update",o):(await _.post("/api/bill/add",o),e.currentType=e.expense[0],e.date=v(new Date),e.amount="",e.remark="",e.payType="expense"),d.value=!1,z("refresh")};return C({show:d}),(o,t)=>{const U=m("van-icon"),F=m("van-number-keyboard"),k=m("van-popup"),I=m("van-date-picker");return i(),l(y,null,[p(k,{position:"bottom",round:"",show:d.value,"onUpdate:show":t[4]||(t[4]=n=>d.value=n),closeable:""},{default:D(()=>[a("div",Y,[a("div",G,[a("div",H,[a("span",{onClick:t[0]||(t[0]=n=>f("expense")),class:u({active:e.payType==="expense"})},"支出",2),a("span",{onClick:t[1]||(t[1]=n=>f("income")),class:u({active:e.payType==="income"})},"收入",2)]),a("div",{class:"right",onClick:t[2]||(t[2]=n=>r.value=!0)},[a("span",null,[A(c(e.date[1])+"月"+c(e.date[2])+"日 ",1),p(U,{name:"play",style:{transform:"rotate(90deg)"}})])])]),a("div",J,[t[8]||(t[8]=a("span",{class:"icon"},"¥",-1)),a("span",K,c(e.amount),1)]),a("div",Q,[e.payType==="expense"?(i(),l("div",R,[(i(!0),l(y,null,T(e.expense,n=>(i(),l("div",{class:"item",key:n.id,onClick:P=>b(n)},[a("i",{class:u(["iconfont",[w(g)[n.name],e.currentType.id===n.id?"is-active":""]])},null,2),a("p",null,c(n.name),1)],8,Z))),128))])):(i(),l("div",ee,[(i(!0),l(y,null,T(e.income,n=>(i(),l("div",{class:"item",key:n.id,onClick:P=>b(n)},[a("i",{class:u(["iconfont",[w(g)[n.name],e.currentType.id===n.id?"is-active":""]])},null,2),a("p",null,c(n.name),1)],8,te))),128))]))]),a("div",ne,[L(a("input",{type:"text",placeholder:"添加备注","onUpdate:modelValue":t[3]||(t[3]=n=>e.remark=n)},null,512),[[O,e.remark]])]),a("div",ae,[p(F,{show:"",theme:"custom","extra-key":".","close-button-text":"确定",onInput:V,onDelete:$,onClose:B})])])]),_:1},8,["show"]),p(k,{position:"bottom",round:"",show:r.value,"onUpdate:show":t[7]||(t[7]=n=>r.value=n)},{default:D(()=>[p(I,{modelValue:e.currentDate,"onUpdate:modelValue":t[5]||(t[5]=n=>e.currentDate=n),title:"选择日期","min-date":new Date(2020,0,1),"max-date":new Date,onCancel:t[6]||(t[6]=()=>r.value=!1),onConfirm:j},null,8,["modelValue","min-date","max-date"])]),_:1},8,["show"])],64)}}},pe=X(oe,[["__scopeId","data-v-1142cf5f"]]);export{pe as P,g as i};