import{S as s,i as r,s as a,e as t,t as e,c as o,a as n,g as c,d as u,f,D as p,h as d,k as l,l as i,n as m,E as h}from"./chunks/vendor-4bddffe0.js";function k(s){let r,a,l=s[1].stack+"";return{c(){r=t("pre"),a=e(l)},l(s){r=o(s,"PRE",{});var t=n(r);a=c(t,l),t.forEach(u)},m(s,t){f(s,r,t),p(r,a)},p(s,r){2&r&&l!==(l=s[1].stack+"")&&d(a,l)},d(s){s&&u(r)}}}function E(s){let r,a,E,v,g,x,P,$=s[1].message+"",b=s[1].stack&&k(s);return{c(){r=t("h1"),a=e(s[0]),E=l(),v=t("p"),g=e($),x=l(),b&&b.c(),P=i()},l(t){r=o(t,"H1",{});var e=n(r);a=c(e,s[0]),e.forEach(u),E=m(t),v=o(t,"P",{});var f=n(v);g=c(f,$),f.forEach(u),x=m(t),b&&b.l(t),P=i()},m(s,t){f(s,r,t),p(r,a),f(s,E,t),f(s,v,t),p(v,g),f(s,x,t),b&&b.m(s,t),f(s,P,t)},p(s,[r]){1&r&&d(a,s[0]),2&r&&$!==($=s[1].message+"")&&d(g,$),s[1].stack?b?b.p(s,r):(b=k(s),b.c(),b.m(P.parentNode,P)):b&&(b.d(1),b=null)},i:h,o:h,d(s){s&&u(r),s&&u(E),s&&u(v),s&&u(x),b&&b.d(s),s&&u(P)}}}function v({error:s,status:r}){return{props:{error:s,status:r}}}function g(s,r,a){let{status:t}=r,{error:e}=r;return s.$$set=s=>{"status"in s&&a(0,t=s.status),"error"in s&&a(1,e=s.error)},[t,e]}export default class extends s{constructor(s){super(),r(this,s,g,E,a,{status:0,error:1})}}export{v as load};
