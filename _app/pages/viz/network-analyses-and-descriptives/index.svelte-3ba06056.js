var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,l=(t,l)=>{for(var o in l||(l={}))e.call(l,o)&&n(t,o,l[o]);if(a)for(var o of a(l))s.call(l,o)&&n(t,o,l[o]);return t};import{S as o,i as r,s as i,e as c,c as h,a as d,d as f,b as u,f as g,F as m,N as p,z as v,ao as y,y as b,ap as $,V as w,a3 as x,a6 as E,K as k,E as I,t as D,g as j,h as z,a0 as V,J as O,l as L,O as N,aq as P,X as _,_ as C,ae as S,k as B,n as Z,j as A,m as T,o as q,v as F,r as G,w as H,a7 as J,a8 as K,a9 as W,u as X,x as M,ab as Q,B as R,am as U,ac as Y,C as tt}from"../../../chunks/vendor-d868d53a.js";import{b as et}from"../../../chunks/paths-45dac81d.js";import{P as at}from"../../../chunks/PageIntro-27a8d3de.js";function st(t){let e;return{c(){e=c("div"),this.h()},l(t){e=h(t,"DIV",{class:!0}),d(e).forEach(f),this.h()},h(){u(e,"class","w-100 h-100")},m(a,s){g(a,e,s),t[2](e)},p:m,i:m,o:m,d(a){a&&f(e),t[2](null)}}}function nt(t,e,a){let s,n,o,{data:r}=e;const i=p("hovered");return v((async()=>{o=y({container:n,elements:s,layout:{name:"preset",fit:!0},minZoom:.1,maxZoom:2,userZoomingEnabled:!0,boxSelectionEnabled:!1,style:[{selector:"node",style:{label:"data(id)",width:"data(size)",height:"data(size)","border-width":1,"border-color":"#fff","text-outline-color":"#fff","text-outline-width":1}},{selector:"node.highlight",style:{"background-color":"#0dcaf0"}},{selector:"node.semitransp",style:{opacity:.2}},{selector:"edge",style:{width:"data(size)","line-color":"#ccc",opacity:.5}},{selector:"edge.semitransp",style:{opacity:.2}},{selector:"core",style:{"active-bg-size":0}}]}),o.on("tap","node",(function(t){})),o.on("mouseover","node",(function(t){const e=t.target,a=e.id();i.set(a),e.addClass("highlight")})),o.on("mouseout","node",(function(t){var e=t.target;i.set(null),e.removeClass("highlight")}))})),b((()=>{o.elements().remove(),o.json({elements:s}),o.fit()})),$((()=>{o&&o.destroy()})),t.$$set=t=>{"data"in t&&a(1,r=t.data)},t.$$.update=()=>{2&t.$$.dirty&&(s=function(t){const e=t.nodes.map((t=>({group:"nodes",data:t,position:{x:t.x,y:t.y},locked:!0,grabbable:!1,selectable:!1,pannable:!0}))),a=w().domain(x(t.edges,(t=>t.size))).range([1,10]);return[...e,...t.edges.map((t=>({group:"edges",data:l(l({},t),{size:a(t.size)}),locked:!0,grabbable:!1,selectable:!1})))]}(r))},[n,r,function(t){E[t?"unshift":"push"]((()=>{n=t,a(0,n)}))}]}class lt extends o{constructor(t){super(),r(this,t,nt,st,i,{data:1})}}function ot(t,e,a){const s=t.slice();return s[14]=e[a],s}function rt(t){let e,a,s,n,l,o=t[8]&&it(t),r=t[7],i=[];for(let c=0;c<r.length;c+=1)i[c]=ct(ot(t,r,c));return{c(){e=k("svg"),a=k("g"),s=k("path"),o&&o.c(),l=k("g");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=h(t,"svg",{width:!0,height:!0},1);var n=d(e);a=h(n,"g",{transform:!0},1);var r=d(a);s=h(r,"path",{d:!0,class:!0},1),d(s).forEach(f),o&&o.l(r),r.forEach(f),l=h(n,"g",{transform:!0},1);var c=d(l);for(let e=0;e<i.length;e+=1)i[e].l(c);c.forEach(f),n.forEach(f),this.h()},h(){u(s,"d",n=t[6](t[0])),u(s,"class","evolution svelte-1lndw99"),u(a,"transform","translate("+t[9].left+","+t[9].top+")"),u(l,"transform","translate("+t[9].left+", "+t[9].top+")"),u(e,"width",t[1]),u(e,"height",t[2])},m(t,n){g(t,e,n),I(e,a),I(a,s),o&&o.m(a,null),I(e,l);for(let e=0;e<i.length;e+=1)i[e].m(l,null)},p(t,c){if(65&c&&n!==(n=t[6](t[0]))&&u(s,"d",n),t[8]?o?o.p(t,c):(o=it(t),o.c(),o.m(a,null)):o&&(o.d(1),o=null),168&c){let e;for(r=t[7],e=0;e<r.length;e+=1){const a=ot(t,r,e);i[e]?i[e].p(a,c):(i[e]=ct(a),i[e].c(),i[e].m(l,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=r.length}2&c&&u(e,"width",t[1]),4&c&&u(e,"height",t[2])},d(t){t&&f(e),o&&o.d(),O(i,t)}}}function it(t){let e,a,s,n,l,o,r,i=t[12](t[0],t[8])+"";return{c(){e=k("line"),l=k("text"),o=D(i),this.h()},l(t){e=h(t,"line",{class:!0,x1:!0,y1:!0,x2:!0,y2:!0,"line-width":!0},1),d(e).forEach(f),l=h(t,"text",{"text-anchor":!0,"font-size":!0,"font-weight":!0,"dominant-baseline":!0,x:!0,y:!0},1);var a=d(l);o=j(a,i),a.forEach(f),this.h()},h(){u(e,"class","selectedDay svelte-1lndw99"),u(e,"x1",a=t[4](t[8])),u(e,"y1","0"),u(e,"x2",s=t[4](t[8])),u(e,"y2",t[10]),u(e,"line-width",n=t[4].bandwidth()),u(l,"text-anchor","middle"),u(l,"font-size","10px"),u(l,"font-weight","bold"),u(l,"dominant-baseline","hanging"),u(l,"x",r=t[4](t[8])),u(l,"y",t[10]+5)},m(t,a){g(t,e,a),g(t,l,a),I(l,o)},p(t,c){272&c&&a!==(a=t[4](t[8]))&&u(e,"x1",a),272&c&&s!==(s=t[4](t[8]))&&u(e,"x2",s),16&c&&n!==(n=t[4].bandwidth())&&u(e,"line-width",n),257&c&&i!==(i=t[12](t[0],t[8])+"")&&z(o,i),272&c&&r!==(r=t[4](t[8]))&&u(l,"x",r)},d(t){t&&f(e),t&&f(l)}}}function ct(t){let e,a,s,n,l,o=(t[5].domain()[1]>1e3?V("~s")(t[14]):t[14])+"";return{c(){e=k("g"),a=k("line"),s=k("text"),n=D(o),this.h()},l(t){e=h(t,"g",{class:!0,opacity:!0,transform:!0},1);var l=d(e);a=h(l,"line",{stroke:!0,x2:!0},1),d(a).forEach(f),s=h(l,"text",{"dominant-baseline":!0,"text-anchor":!0,fill:!0,x:!0,"font-size":!0},1);var r=d(s);n=j(r,o),r.forEach(f),l.forEach(f),this.h()},h(){u(a,"stroke","#DEE2E6"),u(a,"x2",t[3]),u(s,"dominant-baseline","middle"),u(s,"text-anchor","end"),u(s,"fill","currentColor"),u(s,"x","-3"),u(s,"font-size","10px"),u(e,"class","tick"),u(e,"opacity","1"),u(e,"transform",l="translate(0,"+t[5](t[14])+")")},m(t,l){g(t,e,l),I(e,a),I(e,s),I(s,n)},p(t,s){8&s&&u(a,"x2",t[3]),160&s&&o!==(o=(t[5].domain()[1]>1e3?V("~s")(t[14]):t[14])+"")&&z(n,o),160&s&&l!==(l="translate(0,"+t[5](t[14])+")")&&u(e,"transform",l)},d(t){t&&f(e)}}}function ht(t){let e,a=t[1]&&t[2]&&t[0]&&rt(t);return{c(){a&&a.c(),e=L()},l(t){a&&a.l(t),e=L()},m(t,s){a&&a.m(t,s),g(t,e,s)},p(t,[s]){t[1]&&t[2]&&t[0]?a?a.p(t,s):(a=rt(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},i:m,o:m,d(t){a&&a.d(t),t&&f(e)}}}function dt(t,e,a){let s,n,l,o,r,i,{data:c}=e,{width:h}=e,{height:d}=e;const f={top:10,right:10,bottom:20,left:30},u=d-f.top-f.bottom,g=p("hovered");return N(t,g,(t=>a(8,i=t))),t.$$set=t=>{"data"in t&&a(0,c=t.data),"width"in t&&a(1,h=t.width),"height"in t&&a(2,d=t.height)},t.$$.update=()=>{2&t.$$.dirty&&a(3,s=h-f.left-f.right),9&t.$$.dirty&&a(4,n=P().domain(c.map((t=>t.x))).range([0,s])),1&t.$$.dirty&&a(5,l=w().domain([0,_(c,(t=>t.y))]).range([u,0])),48&t.$$.dirty&&a(6,o=C().defined((t=>!isNaN(t.y))).x((t=>n(t.x))).y1((t=>l(t.y))).y0((t=>l(0))).curve(S)),32&t.$$.dirty&&a(7,r=l.ticks(3)),16&t.$$.dirty&&(n.domain()[0],n.domain()[1])},[c,h,d,s,n,l,o,r,i,f,u,g,function(t,e){if(e){const a=t.filter((t=>t.x===e));return a[0].y>1?a[0].y:V(".2")(a[0].y)}return null}]}class ft extends o{constructor(t){super(),r(this,t,dt,ht,i,{data:0,width:1,height:2})}}function ut(t,e,a){const s=t.slice();return s[10]=e[a],s}function gt(t,e,a){const s=t.slice();return s[13]=e[a],s}function mt(t){let e,a,s,n=t[13]+"";return{c(){e=c("option"),a=D(n),s=B(),this.h()},l(t){e=h(t,"OPTION",{value:!0});var l=d(e);a=j(l,n),s=Z(l),l.forEach(f),this.h()},h(){e.__value=t[13],e.value=e.__value},m(t,n){g(t,e,n),I(e,a),I(e,s)},p:m,d(t){t&&f(e)}}}function pt(t){let e,a,s,n,l,o,r,i,m,p,v,y=t[10].title+"",b=t[10].desc+"";return m=new ft({props:{width:t[2],height:110,data:t[6](t[0][t[3]].nodes,t[10].key)}}),{c(){e=c("div"),a=c("h5"),s=D(y),n=B(),l=c("p"),o=D(b),r=B(),i=c("div"),A(m.$$.fragment),p=B(),this.h()},l(t){e=h(t,"DIV",{class:!0});var c=d(e);a=h(c,"H5",{});var u=d(a);s=j(u,y),u.forEach(f),n=Z(c),l=h(c,"P",{class:!0});var g=d(l);o=j(g,b),g.forEach(f),r=Z(c),i=h(c,"DIV",{class:!0});var v=d(i);T(m.$$.fragment,v),v.forEach(f),p=Z(c),c.forEach(f),this.h()},h(){u(l,"class","mb-2"),u(i,"class","bg-white border rounded"),u(e,"class","mb-4")},m(t,c){g(t,e,c),I(e,a),I(a,s),I(e,n),I(e,l),I(l,o),I(e,r),I(e,i),q(m,i,null),I(e,p),v=!0},p(t,e){const a={};4&e&&(a.width=t[2]),9&e&&(a.data=t[6](t[0][t[3]].nodes,t[10].key)),m.$set(a)},i(t){v||(F(m.$$.fragment,t),v=!0)},o(t){G(m.$$.fragment,t),v=!1},d(t){t&&f(e),H(m)}}}function vt(t){let e,a,s,n,l,o,r,i,m,p,v,y,b,$,w,x,E,k,z,V,L,N;a=new at({props:{title:t[1].title}});let P=t[4],_=[];for(let c=0;c<P.length;c+=1)_[c]=mt(gt(t,P,c));let C=t[5],S=[];for(let c=0;c<C.length;c+=1)S[c]=pt(ut(t,C,c));const M=t=>G(S[t],1,1,(()=>{S[t]=null}));return z=new lt({props:{data:t[0][t[3]]}}),{c(){e=c("div"),A(a.$$.fragment),s=B(),n=c("div"),l=c("div"),o=c("div"),r=c("div"),i=c("div"),m=c("label"),p=D("Language"),v=B(),y=c("select");for(let t=0;t<_.length;t+=1)_[t].c();b=B(),$=c("div");for(let t=0;t<S.length;t+=1)S[t].c();x=B(),E=c("div"),k=c("div"),A(z.$$.fragment),this.h()},l(t){e=h(t,"DIV",{class:!0});var c=d(e);T(a.$$.fragment,c),c.forEach(f),s=Z(t),n=h(t,"DIV",{class:!0});var u=d(n);l=h(u,"DIV",{class:!0});var g=d(l);o=h(g,"DIV",{class:!0});var w=d(o);r=h(w,"DIV",{class:!0});var I=d(r);i=h(I,"DIV",{class:!0});var D=d(i);m=h(D,"LABEL",{for:!0,class:!0});var V=d(m);p=j(V,"Language"),V.forEach(f),v=Z(D),y=h(D,"SELECT",{class:!0,id:!0,"aria-label":!0});var O=d(y);for(let e=0;e<_.length;e+=1)_[e].l(O);O.forEach(f),D.forEach(f),b=Z(I),$=h(I,"DIV",{class:!0});var L=d($);for(let e=0;e<S.length;e+=1)S[e].l(L);L.forEach(f),I.forEach(f),x=Z(w),E=h(w,"DIV",{class:!0});var N=d(E);k=h(N,"DIV",{class:!0});var P=d(k);T(z.$$.fragment,P),P.forEach(f),N.forEach(f),w.forEach(f),g.forEach(f),u.forEach(f),this.h()},h(){u(e,"class","container"),u(m,"for","language"),u(m,"class","form-label"),u(y,"class","form-select"),u(y,"id","language"),u(y,"aria-label","Language"),void 0===t[3]&&Q((()=>t[7].call(y))),u(i,"class","my-4"),u($,"class","w-100"),Q((()=>t[8].call($))),u(r,"class","col-3 overflow-scroll h-100 border-end"),u(k,"class","w-100 h-100"),u(E,"class","col-9"),u(o,"class","row flex-grow-1 overflow-hidden"),u(l,"class","container h-100 d-flex flex-column"),u(n,"class","bg-light w-100 containerViz svelte-11zrb3w")},m(c,h){g(c,e,h),q(a,e,null),g(c,s,h),g(c,n,h),I(n,l),I(l,o),I(o,r),I(r,i),I(i,m),I(m,p),I(i,v),I(i,y);for(let t=0;t<_.length;t+=1)_[t].m(y,null);J(y,t[3]),I(r,b),I(r,$);for(let t=0;t<S.length;t+=1)S[t].m($,null);w=K($,t[8].bind($)),I(o,x),I(o,E),I(E,k),q(z,k,null),V=!0,L||(N=W(y,"change",t[7]),L=!0)},p(t,[e]){const s={};if(2&e&&(s.title=t[1].title),a.$set(s),16&e){let a;for(P=t[4],a=0;a<P.length;a+=1){const s=gt(t,P,a);_[a]?_[a].p(s,e):(_[a]=mt(s),_[a].c(),_[a].m(y,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=P.length}if(24&e&&J(y,t[3]),109&e){let a;for(C=t[5],a=0;a<C.length;a+=1){const s=ut(t,C,a);S[a]?(S[a].p(s,e),F(S[a],1)):(S[a]=pt(s),S[a].c(),F(S[a],1),S[a].m($,null))}for(R(),a=C.length;a<S.length;a+=1)M(a);X()}const n={};9&e&&(n.data=t[0][t[3]]),z.$set(n)},i(t){if(!V){F(a.$$.fragment,t);for(let t=0;t<C.length;t+=1)F(S[t]);F(z.$$.fragment,t),V=!0}},o(t){G(a.$$.fragment,t),S=S.filter(Boolean);for(let e=0;e<S.length;e+=1)G(S[e]);G(z.$$.fragment,t),V=!1},d(t){t&&f(e),H(a),t&&f(s),t&&f(n),O(_,t),O(S,t),w(),H(z),L=!1,N()}}}async function yt({page:t,fetch:e}){const a=et+t.path,s=await e(`${a}/data.json`),n=await e(`${a}.json`),l=await n.json();return{props:{networks:(await s.json()).networks,info:l.data}}}function bt(t,e,a){let s,{networks:n}=e,{info:l}=e,o=Array.from(Object.keys(n)),r=o[0],i=tt(null);M("hovered",i);return t.$$set=t=>{"networks"in t&&a(0,n=t.networks),"info"in t&&a(1,l=t.info)},[n,l,s,r,o,[{title:"Numbers of Nodes",desc:"Lorem Ipsum",key:"n_nodes"},{title:"Density",desc:"Lorem Ipsum",key:"density"},{title:"Global Clustering",desc:"Lorem Ipsum",key:"global_clustering"}],function(t,e){return t.map((t=>({x:t.id,y:+t.attributes[e]}))).sort(((t,e)=>U(t.y,e.y?e.y:0)))},function(){r=Y(this),a(3,r),a(4,o)},function(){s=this.clientWidth,a(2,s)}]}export default class extends o{constructor(t){super(),r(this,t,bt,vt,i,{networks:0,info:1})}}export{yt as load};
