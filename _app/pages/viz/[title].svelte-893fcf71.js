var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,o=(t,a,s)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[a]=s,n=(e,n)=>{for(var l in n||(n={}))t.call(n,l)&&o(e,l,n[l]);if(a)for(var l of a(n))s.call(n,l)&&o(e,l,n[l]);return e};import{S as l,i as r,s as i,e as p,t as c,k as d,c as g,a as u,g as _,d as f,n as m,b,f as v,F as h,h as S,l as j,G as y,H as $,j as w,m as z,o as O,v as M,r as T,w as k}from"../../chunks/vendor-1001426b.js";import{P as E}from"../../chunks/PageIntro-69491e01.js";import"../../chunks/paths-45dac81d.js";var I=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/coding-tree.d831345c.png"}),P=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/emotions.7f95e3bc.png"}),x=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/overview-1.f4d6b541.png"}),D=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/overview-2.6cd9b381.png"}),V=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/overview-3.82703978.png"}),G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/pipeline1.783bf74e.png"}),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/pipeline2.641912b2.png"}),F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/temporalnetwork-1.6b28de02.png"}),N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/temporalnetwork-2.a85a5625.png"}),q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/temporalnetwork-3.d5426412.png"}),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/valence.41abc590.png"}),B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/viz1.cbdfc3a2.png"}),C=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/viz2.cf30bd19.png"}),J=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"/undp-dli/_app/assets/viz3.2fd19340.png"});function K(e,t,a){const s=e.slice();return s[1]=t[a],s}function L(e){let t,a,s,o,n,l,r,i,j,y,$,w,z,O,M=e[1].title+"",T=e[1].description+"";return{c(){t=p("div"),a=p("div"),s=p("h4"),o=c(M),n=d(),l=p("p"),r=c(T),i=d(),j=p("div"),y=p("div"),$=p("img"),O=d(),this.h()},l(e){t=g(e,"DIV",{class:!0});var p=u(t);a=g(p,"DIV",{class:!0});var c=u(a);s=g(c,"H4",{});var d=u(s);o=_(d,M),d.forEach(f),n=m(c),l=g(c,"P",{});var b=u(l);r=_(b,T),b.forEach(f),c.forEach(f),i=m(p),j=g(p,"DIV",{class:!0});var v=u(j);y=g(v,"DIV",{class:!0});var h=u(y);$=g(h,"IMG",{class:!0,src:!0,alt:!0}),h.forEach(f),v.forEach(f),O=m(p),p.forEach(f),this.h()},h(){b(a,"class","col-4"),b($,"class","img-fluid"),$.src!==(w=e[1].img_path.default)&&b($,"src",w),b($,"alt",z=e[1].title),b(y,"class","d-flex justify-content-center"),b(j,"class","col-8"),b(t,"class","row my-3 border-bottom border-light")},m(e,p){v(e,t,p),h(t,a),h(a,s),h(s,o),h(a,n),h(a,l),h(l,r),h(t,i),h(t,j),h(j,y),h(y,$),h(t,O)},p(e,t){1&t&&M!==(M=e[1].title+"")&&S(o,M),1&t&&T!==(T=e[1].description+"")&&S(r,T),1&t&&$.src!==(w=e[1].img_path.default)&&b($,"src",w),1&t&&z!==(z=e[1].title)&&b($,"alt",z)},d(e){e&&f(t)}}}function Q(e){let t,a=e[0],s=[];for(let o=0;o<a.length;o+=1)s[o]=L(K(e,a,o));return{c(){for(let e=0;e<s.length;e+=1)s[e].c();t=j()},l(e){for(let t=0;t<s.length;t+=1)s[t].l(e);t=j()},m(e,a){for(let t=0;t<s.length;t+=1)s[t].m(e,a);v(e,t,a)},p(e,[o]){if(1&o){let n;for(a=e[0],n=0;n<a.length;n+=1){const l=K(e,a,n);s[n]?s[n].p(l,o):(s[n]=L(l),s[n].c(),s[n].m(t.parentNode,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=a.length}},i:y,o:y,d(e){$(s,e),e&&f(t)}}}function R(e,t,a){let{sections:s}=t;return e.$$set=e=>{"sections"in e&&a(0,s=e.sections)},[s]}class U extends l{constructor(e){super(),r(this,e,R,Q,i,{sections:0})}}function W(e){let t,a,s,o,n;return a=new E({props:{title:e[0].title,description:e[0].description}}),o=new U({props:{sections:e[0].sections}}),{c(){t=p("div"),w(a.$$.fragment),s=d(),w(o.$$.fragment),this.h()},l(e){t=g(e,"DIV",{class:!0});var n=u(t);z(a.$$.fragment,n),s=m(n),z(o.$$.fragment,n),n.forEach(f),this.h()},h(){b(t,"class","container")},m(e,l){v(e,t,l),O(a,t,null),h(t,s),O(o,t,null),n=!0},p(e,[t]){const s={};1&t&&(s.title=e[0].title),1&t&&(s.description=e[0].description),a.$set(s);const n={};1&t&&(n.sections=e[0].sections),o.$set(n)},i(e){n||(M(a.$$.fragment,e),M(o.$$.fragment,e),n=!0)},o(e){T(a.$$.fragment,e),T(o.$$.fragment,e),n=!1},d(e){e&&f(t),k(a),k(o)}}}const X={"./_images/coding-tree.png":I,"./_images/emotions.png":P,"./_images/overview-1.png":x,"./_images/overview-2.png":D,"./_images/overview-3.png":V,"./_images/pipeline1.png":G,"./_images/pipeline2.png":H,"./_images/temporalnetwork-1.png":F,"./_images/temporalnetwork-2.png":N,"./_images/temporalnetwork-3.png":q,"./_images/valence.png":A,"./_images/viz1.png":B,"./_images/viz2.png":C,"./_images/viz3.png":J};async function Y({fetch:e,page:t}){const a=await e(`/viz/${t.params.title}.json`),s=await a.json();return s.data.sections=s.data.sections.map((e=>n(n({},e),{img_path:X["./_images/"+e.img]}))),{props:{data:s.data}}}function Z(e,t,a){let{data:s}=t;return e.$$set=e=>{"data"in e&&a(0,s=e.data)},[s]}export default class extends l{constructor(e){super(),r(this,e,Z,W,i,{data:0})}}export{Y as load};
