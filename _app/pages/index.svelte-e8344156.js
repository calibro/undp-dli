import{S as t,i as s,s as e,e as a,t as o,k as i,c as n,a as l,g as r,d as h,n as c,b as f,f as u,F as v,h as d,l as p,G as g,H as m}from"../chunks/vendor-f8496567.js";import{b as k}from"../chunks/paths-45dac81d.js";function E(t,s,e){const a=t.slice();return a[1]=s[e],a[3]=e,a}function j(t){let s,e,p,g,m=t[1].title+"";return{c(){s=a("div"),e=a("h1"),p=o(m),g=i(),this.h()},l(t){s=n(t,"DIV",{class:!0});var a=l(s);e=n(a,"H1",{});var o=l(e);p=r(o,m),o.forEach(h),g=c(a),a.forEach(h),this.h()},h(){f(s,"class","col-3")},m(t,a){u(t,s,a),v(s,e),v(e,p),v(s,g)},p(t,s){1&s&&m!==(m=t[1].title+"")&&d(p,m)},d(t){t&&h(s)}}}function x(t){let s,e,d,k,x,H,S,V,b,K,W=t[0],$=[];for(let a=0;a<W.length;a+=1)$[a]=j(E(t,W,a));return{c(){s=a("h1"),e=o("Welcome to SvelteKit"),d=i(),k=a("p"),x=o("Visit "),H=a("a"),S=o("kit.svelte.dev"),V=o(" to read the documentation"),b=i();for(let t=0;t<$.length;t+=1)$[t].c();K=p(),this.h()},l(t){s=n(t,"H1",{});var a=l(s);e=r(a,"Welcome to SvelteKit"),a.forEach(h),d=c(t),k=n(t,"P",{});var o=l(k);x=r(o,"Visit "),H=n(o,"A",{href:!0});var i=l(H);S=r(i,"kit.svelte.dev"),i.forEach(h),V=r(o," to read the documentation"),o.forEach(h),b=c(t);for(let s=0;s<$.length;s+=1)$[s].l(t);K=p(),this.h()},h(){f(H,"href","https://kit.svelte.dev")},m(t,a){u(t,s,a),v(s,e),u(t,d,a),u(t,k,a),v(k,x),v(k,H),v(H,S),v(k,V),u(t,b,a);for(let s=0;s<$.length;s+=1)$[s].m(t,a);u(t,K,a)},p(t,[s]){if(1&s){let e;for(W=t[0],e=0;e<W.length;e+=1){const a=E(t,W,e);$[e]?$[e].p(a,s):($[e]=j(a),$[e].c(),$[e].m(K.parentNode,K))}for(;e<$.length;e+=1)$[e].d(1);$.length=W.length}},i:g,o:g,d(t){t&&h(s),t&&h(d),t&&h(k),t&&h(b),m($,t),t&&h(K)}}}async function H({fetch:t,page:s}){console.log(s,k,false);var e;return{props:{visualisations:(await(e="./visualisations.json",t(e).then((t=>t.json())))).visualisations}}}function S(t,s,e){let{visualisations:a}=s;return console.log(a),t.$$set=t=>{"visualisations"in t&&e(0,a=t.visualisations)},[a]}export default class extends t{constructor(t){super(),s(this,t,S,x,e,{visualisations:0})}}export{H as load};
