function r(t){let e=t.getFullYear()+"",n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,g=t.getDate()<10?"0"+t.getDate():t.getDate();return[e,n,g]}function l(t){let e=new Date(t),n=e.getHours()<10?"0"+e.getHours():e.getHours(),g=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes();return`${n}:${g}`}function s(t){t=new Date(Number(t));let e=t.getFullYear()+"",n=t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1,g=t.getDate()<10?"0"+t.getDate():t.getDate(),u=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes();return[e,n,g,u,o]}export{r as a,s as b,l as f};