import{_ as d}from"./Dt16mE4L.js";import{_ as b}from"./C98MZ0Lt.js";import{f,v as x,q as h,s as t,o as a,c as n,t as r,a as s,b as u,w as k,x as y}from"./COnMWywl.js";import{u as w}from"./CVI5lMxP.js";const v={key:0},B={key:1},$={key:2},C={class:"subpage-content blog container"},N={class:"slug-blog__h2 text-white text-2xl text-white uppercase font-teko"},H=["innerHTML"],T=f({__name:"[slug]",async setup(L){let o,c;const i=y(),p=x(),{data:e,error:_}=([o,c]=h(()=>w("post",()=>$fetch(`${i.public.apiBaseUrl}/json-posts/${p.params.slug}`))),o=await o,c(),o);return(V,l)=>{const m=d,g=b;return t(_)?(a(),n("div",v,"Hiba történt: "+r(t(_).message),1)):t(e)?(a(),n("div",$,[s("section",null,[s("div",C,[s("h2",N,r(t(e).title),1),u(m,{class:"slug-blog__img",src:`${t(i).public.apiBaseUrl}/storage/${t(e).image}`,alt:t(e).title},null,8,["src","alt"]),s("div",{class:"text-white blog-text-content",innerHTML:t(e).body},null,8,H),u(g,{to:"/",class:"go-back-button"},{default:k(()=>l[0]||(l[0]=[s("span",{class:"go-back-button__icon"},"←",-1),s("span",{class:"go-back-button__text"},"Vissza a főoldalra",-1)])),_:1})])])])):(a(),n("div",B,"Betöltés..."))}}});export{T as default};