import{S as a,i as s,s as t,e,k as r,c as n,a as o,d as c,n as l,b as i,M as d,f as h,D as f,J as p,E as g,N as m,t as b,g as u,h as v,j as $,m as k,o as y,v as E,r as x,w as I,K as w}from"../../chunks/vendor-4bddffe0.js";import{H as D}from"../../chunks/header-b4eea14c.js";function T(a){let s,t,b,u,v,$,k,y,E,x,I,w,D,T,V,_,N,j,G,P;return{c(){s=e("div"),t=e("div"),b=e("div"),u=e("img"),k=r(),y=e("div"),E=e("img"),w=r(),D=e("button"),T=e("i"),V=r(),_=e("button"),N=e("i"),this.h()},l(a){s=n(a,"DIV",{class:!0});var e=o(s);t=n(e,"DIV",{class:!0});var r=o(t);b=n(r,"DIV",{class:!0,style:!0});var i=o(b);u=n(i,"IMG",{src:!0,alt:!0}),i.forEach(c),k=l(r),y=n(r,"DIV",{class:!0,style:!0});var d=o(y);E=n(d,"IMG",{src:!0,alt:!0}),d.forEach(c),r.forEach(c),w=l(e),D=n(e,"BUTTON",{disabled:!0,class:!0});var h=o(D);T=n(h,"I",{class:!0}),o(T).forEach(c),h.forEach(c),V=l(e),_=n(e,"BUTTON",{disabled:!0,class:!0});var f=o(_);N=n(f,"I",{class:!0}),o(N).forEach(c),f.forEach(c),e.forEach(c),this.h()},h(){u.src!==(v=a[0].sprites.front_default)&&i(u,"src",v),i(u,"alt",$=a[0].name),i(b,"class","img1 bg-gray-100 duration-500"),d(b,"transform","translateX("+a[2]+"%)"),E.src!==(x=a[0].sprites.back_default)&&i(E,"src",x),i(E,"alt",I=a[0].name),i(y,"class","img2 bg-gray-100 duration-500"),d(y,"transform","translateX("+a[2]+"%)"),i(t,"class","carousel-wrapper rounded-lg border-2 border-gray-500"),i(T,"class","fas fa-chevron-left"),D.disabled=a[1],i(D,"class","prev \r\n   bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-50 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"),i(N,"class","fas fa-chevron-right"),_.disabled=j=!a[1],i(_,"class","next \r\n   bg-gray-300 hover:bg-gray-400 active:bg-gray-500 duration-300 outline-none hover:text-gray-50 active:text-white disabled:opacity-50 disabled:hover:bg-gray-300 disabled:active:bg-gray-300 disabled:hover:text-black disabled:active:text-black"),i(s,"class","carousel")},m(e,r){h(e,s,r),f(s,t),f(t,b),f(b,u),f(t,k),f(t,y),f(y,E),f(s,w),f(s,D),f(D,T),f(s,V),f(s,_),f(_,N),G||(P=[p(D,"click",a[3]),p(_,"click",a[4])],G=!0)},p(a,[s]){1&s&&u.src!==(v=a[0].sprites.front_default)&&i(u,"src",v),1&s&&$!==($=a[0].name)&&i(u,"alt",$),4&s&&d(b,"transform","translateX("+a[2]+"%)"),1&s&&E.src!==(x=a[0].sprites.back_default)&&i(E,"src",x),1&s&&I!==(I=a[0].name)&&i(E,"alt",I),4&s&&d(y,"transform","translateX("+a[2]+"%)"),2&s&&(D.disabled=a[1]),2&s&&j!==(j=!a[1])&&(_.disabled=j)},i:g,o:g,d(a){a&&c(s),G=!1,m(P)}}}function V(a,s,t){let{pokemon:e}=s,r=!0;let n;return a.$$set=a=>{"pokemon"in a&&t(0,e=a.pokemon)},a.$$.update=()=>{2&a.$$.dirty&&t(2,n=r?0:-100)},[e,r,n,()=>t(1,r=!0),()=>t(1,r=!1)]}class _ extends a{constructor(a){super(),s(this,a,V,T,t,{pokemon:0})}}function N(a,s,t){const e=a.slice();return e[1]=s[t],e}function j(a){let s,t=a[0].name+"";return{c(){s=b(t)},l(a){s=u(a,t)},m(a,t){h(a,s,t)},p(a,e){1&e&&t!==(t=a[0].name+"")&&v(s,t)},d(a){a&&c(s)}}}function G(a){let s,t,d,p,g,m,$=a[1].stat.name.toUpperCase()+"",k=a[1].base_stat+"";return{c(){s=e("p"),t=e("span"),d=b($),p=b(":"),g=r(),m=b(k),this.h()},l(a){s=n(a,"P",{});var e=o(s);t=n(e,"SPAN",{class:!0});var r=o(t);d=u(r,$),p=u(r,":"),r.forEach(c),g=l(e),m=u(e,k),e.forEach(c),this.h()},h(){i(t,"class","stat-name")},m(a,e){h(a,s,e),f(s,t),f(t,d),f(t,p),f(s,g),f(s,m)},p(a,s){1&s&&$!==($=a[1].stat.name.toUpperCase()+"")&&v(d,$),1&s&&k!==(k=a[1].base_stat+"")&&v(m,k)},d(a){a&&c(s)}}}function P(a){let s,t,d,p,g,m,T,V,P,U,X,H,M,S=a[0].weight+"";s=new D({props:{$$slots:{default:[j]},$$scope:{ctx:a}}}),p=new _({props:{pokemon:a[0]}});let A=a[0].stats,B=[];for(let e=0;e<A.length;e+=1)B[e]=G(N(a,A,e));return{c(){$(s.$$.fragment),t=r(),d=e("div"),$(p.$$.fragment),g=r(),m=e("div");for(let a=0;a<B.length;a+=1)B[a].c();T=r(),V=e("p"),P=e("span"),U=b("WEIGHT:"),X=r(),H=b(S),this.h()},l(a){k(s.$$.fragment,a),t=l(a),d=n(a,"DIV",{class:!0});var e=o(d);k(p.$$.fragment,e),g=l(e),m=n(e,"DIV",{class:!0});var r=o(m);for(let s=0;s<B.length;s+=1)B[s].l(r);T=l(r),V=n(r,"P",{});var i=o(V);P=n(i,"SPAN",{class:!0});var h=o(P);U=u(h,"WEIGHT:"),h.forEach(c),X=l(i),H=u(i,S),i.forEach(c),r.forEach(c),e.forEach(c),this.h()},h(){i(P,"class","stat-name"),i(m,"class","stats"),i(d,"class","container-inner")},m(a,e){y(s,a,e),h(a,t,e),h(a,d,e),y(p,d,null),f(d,g),f(d,m);for(let s=0;s<B.length;s+=1)B[s].m(m,null);f(m,T),f(m,V),f(V,P),f(P,U),f(V,X),f(V,H),M=!0},p(a,[t]){const e={};17&t&&(e.$$scope={dirty:t,ctx:a}),s.$set(e);const r={};if(1&t&&(r.pokemon=a[0]),p.$set(r),1&t){let s;for(A=a[0].stats,s=0;s<A.length;s+=1){const e=N(a,A,s);B[s]?B[s].p(e,t):(B[s]=G(e),B[s].c(),B[s].m(m,T))}for(;s<B.length;s+=1)B[s].d(1);B.length=A.length}(!M||1&t)&&S!==(S=a[0].weight+"")&&v(H,S)},i(a){M||(E(s.$$.fragment,a),E(p.$$.fragment,a),M=!0)},o(a){x(s.$$.fragment,a),x(p.$$.fragment,a),M=!1},d(a){I(s,a),a&&c(t),a&&c(d),I(p),w(B,a)}}}const U=async a=>{const s=`https://pokeapi.co/api/v2/pokemon/${a.page.params.id}`,t=await fetch(s);return{props:{pokemon:await t.json()}}};function X(a,s,t){let{pokemon:e}=s;return a.$$set=a=>{"pokemon"in a&&t(0,e=a.pokemon)},[e]}export default class extends a{constructor(a){super(),s(this,a,X,P,t,{pokemon:0})}}export{U as load};
