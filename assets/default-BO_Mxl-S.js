import{m as W,a as ee,b as te,u as ae,c as oe,d as le,V as K}from"./index-Cp_DFiMm.js";import{p as B,m as se,a as q,b as ne,c as re,g as C,d as ie,u as ue,t as L,s as S,e as ce,f as c,h as Y,i as I,j as f,k as ve,l as M,o as P,n as A,w as y,q as Z,F as G,r as X,v as E,x as N,y as D,z as de,A as fe,B as R,C as me,D as w,E as pe,G as he,H as J,I as ge,J as ye,K as Ve,L as x,M as _e,N as be,V as Se,O as ke,P as Te,Q as Pe,R as H,S as we,T as xe,U as F,W as Be,X as Ce,Y as Ie,Z as j,_ as Le,$ as z,a0 as Ae,a1 as O,a2 as Ee,a3 as Ne,a4 as De}from"./index-BIC-rGfy.js";import{u as U}from"./app-CGPK7vv_.js";import{u as Me}from"./index-B5jnxQay.js";import{m as Re,V as He}from"./VBtn-I3kjeD6X.js";import{V as Fe,a as je,b as ze}from"./VList-B_BgO7UT.js";import{m as Oe,V as $,a as Ue,b as $e}from"./VToolbar-B7wC1J4N.js";import"./VAvatar-CLOVv_Z6.js";const Ke=B({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...W(),...se(),...ee(),...q(),...te(),...ne({tag:"footer"}),...re()},"VFooter"),qe=C()({name:"VFooter",props:Ke(),setup(e,i){let{slots:r}=i;const{themeClasses:n}=ie(e),{backgroundColorClasses:a,backgroundColorStyles:l}=ue(L(e,"color")),{borderClasses:d}=ae(e),{elevationClasses:u}=oe(e),{roundedClasses:s}=le(e),m=S(32),{resizeRef:p}=ce(v=>{v.length&&(m.value=v[0].target.clientHeight)}),b=c(()=>e.height==="auto"?m.value:parseInt(e.height,10)),{layoutItemStyles:V}=Y({id:e.name,order:c(()=>parseInt(e.order,10)),position:c(()=>"bottom"),layoutSize:b,elementSize:c(()=>e.height==="auto"?void 0:b.value),active:c(()=>e.app),absolute:L(e,"absolute")});return I(()=>f(e.tag,{ref:p,class:["v-footer",n.value,a.value,d.value,u.value,s.value,e.class],style:[l.value,e.app?V.value:{height:ve(e.height)},e.style]},r)),{}}}),Q=e=>(de("data-v-d5e4efc3"),e=e(),fe(),e),Ye=["href","title"],Ze={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},Ge=Q(()=>E("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),Xe=Q(()=>E("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),Je=M({__name:"AppFooter",setup(e){const i=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:"svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:"mdi-discord",href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(r,n)=>(P(),A(qe,{height:"40",app:""},{default:y(()=>[(P(),Z(G,null,X(i,a=>E("a",{key:a.title,href:a.href,title:a.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[f(K,{icon:a.icon,size:a.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,Ye)),64)),E("div",Ze,[N(" © 2016-"+D(new Date().getFullYear())+" ",1),Ge,N(" — "),Xe])]),_:1}))}}),Qe=(e,i)=>{const r=e.__vccOpts||e;for(const[n,a]of i)r[n]=a;return r},We=Qe(Je,[["__scopeId","data-v-d5e4efc3"]]),et=B({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function tt(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:r}=i;let n=0;const a=R(null),l=S(0),d=S(0),u=S(0),s=S(!1),m=S(!1),p=c(()=>Number(e.scrollThreshold)),b=c(()=>me((p.value-l.value)/p.value||0)),V=()=>{const v=a.value;!v||r&&!r.value||(n=l.value,l.value="window"in v?v.pageYOffset:v.scrollTop,m.value=l.value<n,u.value=Math.abs(l.value-p.value))};return w(m,()=>{d.value=d.value||l.value}),w(s,()=>{d.value=0}),pe(()=>{w(()=>e.scrollTarget,v=>{var t;const k=v?document.querySelector(v):window;k&&k!==a.value&&((t=a.value)==null||t.removeEventListener("scroll",V),a.value=k,a.value.addEventListener("scroll",V,{passive:!0}))},{immediate:!0})}),he(()=>{var v;(v=a.value)==null||v.removeEventListener("scroll",V)}),r&&w(r,V,{immediate:!0}),{scrollThreshold:p,currentScroll:l,currentThreshold:u,isScrollActive:s,scrollRatio:b,isScrollingUp:m,savedScroll:d}}const at=B({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Oe(),...q(),...et(),height:{type:[Number,String],default:64}},"VAppBar"),ot=C()({name:"VAppBar",props:at(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:r}=i;const n=R(),a=J(e,"modelValue"),l=c(()=>{var g;const o=new Set(((g=e.scrollBehavior)==null?void 0:g.split(" "))??[]);return{hide:o.has("hide"),inverted:o.has("inverted"),collapse:o.has("collapse"),elevate:o.has("elevate"),fadeImage:o.has("fade-image")}}),d=c(()=>{const o=l.value;return o.hide||o.inverted||o.collapse||o.elevate||o.fadeImage||!a.value}),{currentScroll:u,scrollThreshold:s,isScrollingUp:m,scrollRatio:p}=tt(e,{canScroll:d}),b=c(()=>e.collapse||l.value.collapse&&(l.value.inverted?p.value>0:p.value===0)),V=c(()=>e.flat||l.value.elevate&&(l.value.inverted?u.value>0:u.value===0)),v=c(()=>l.value.fadeImage?l.value.inverted?1-p.value:p.value:void 0),k=c(()=>{var _,T;if(l.value.hide&&l.value.inverted)return 0;const o=((_=n.value)==null?void 0:_.contentHeight)??0,g=((T=n.value)==null?void 0:T.extensionHeight)??0;return o+g});ge(c(()=>!!e.scrollBehavior),()=>{ye(()=>{l.value.hide?l.value.inverted?a.value=u.value>s.value:a.value=m.value||u.value<s.value:a.value=!0})});const{ssrBootStyles:t}=Ve(),{layoutItemStyles:h}=Y({id:e.name,order:c(()=>parseInt(e.order,10)),position:L(e,"location"),layoutSize:k,elementSize:S(void 0),active:a,absolute:L(e,"absolute")});return I(()=>{const o=$.filterProps(e);return f($,x({ref:n,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...h.value,"--v-toolbar-image-opacity":v.value,height:void 0,...t.value},e.style]},o,{collapse:b.value,flat:V.value}),r)}),{}}}),lt=B({...Re({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),st=C()({name:"VAppBarNavIcon",props:lt(),setup(e,i){let{slots:r}=i;return I(()=>f(He,x(e,{class:["v-app-bar-nav-icon"]}),r)),{}}}),nt=C()({name:"VAppBarTitle",props:Ue(),setup(e,i){let{slots:r}=i;return I(()=>f($e,x(e,{class:"v-app-bar-title"}),r)),{}}}),rt=B({id:String,..._e(be({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:Se}}),["absolute"])},"VMenu"),it=C()({name:"VMenu",props:rt(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:r}=i;const n=J(e,"modelValue"),{scopeId:a}=ke(),l=Te(),d=c(()=>e.id||`v-menu-${l}`),u=R(),s=Pe(H,null),m=S(0);we(H,{register(){++m.value},unregister(){--m.value},closeParents(t){setTimeout(()=>{!m.value&&(t==null||t&&!xe(t,u.value.contentEl))&&(n.value=!1,s==null||s.closeParents())},40)}});async function p(t){var g,_,T;const h=t.relatedTarget,o=t.target;await Ie(),n.value&&h!==o&&((g=u.value)!=null&&g.contentEl)&&((_=u.value)!=null&&_.globalTop)&&![document,u.value.contentEl].includes(o)&&!u.value.contentEl.contains(o)&&((T=j(u.value.contentEl)[0])==null||T.focus())}w(n,t=>{t?(s==null||s.register(),document.addEventListener("focusin",p,{once:!0})):(s==null||s.unregister(),document.removeEventListener("focusin",p))});function b(t){s==null||s.closeParents(t)}function V(t){var h,o,g;e.disabled||(t.key==="Tab"?Le(j((h=u.value)==null?void 0:h.contentEl,!1),t.shiftKey?"prev":"next",T=>T.tabIndex>=0)||(n.value=!1,(g=(o=u.value)==null?void 0:o.activatorEl)==null||g.focus()):["Enter"," "].includes(t.key)&&e.closeOnContentClick&&(n.value=!1,s==null||s.closeParents()))}function v(t){var o;if(e.disabled)return;const h=(o=u.value)==null?void 0:o.contentEl;h&&n.value?t.key==="ArrowDown"?(t.preventDefault(),z(h,"next")):t.key==="ArrowUp"&&(t.preventDefault(),z(h,"prev")):["ArrowDown","ArrowUp"].includes(t.key)&&(n.value=!0,t.preventDefault(),setTimeout(()=>setTimeout(()=>v(t))))}const k=c(()=>x({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":d.value,onKeydown:v},e.activatorProps));return I(()=>{const t=F.filterProps(e);return f(F,x({ref:u,id:d.value,class:["v-menu",e.class],style:e.style},t,{modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,absolute:!0,activatorProps:k.value,"onClick:outside":b,onKeydown:V},a),{activator:r.activator,default:function(){for(var h=arguments.length,o=new Array(h),g=0;g<h;g++)o[g]=arguments[g];return f(Be,{root:"VMenu"},{default:()=>{var _;return[(_=r.default)==null?void 0:_.call(r,...o)]}})}})}),Ce({id:d,ΨopenChildren:m},u)}}),ut=M({__name:"AppNav",setup(e){const i=Ae();console.log(i.path),console.log(i.fullPath),console.log(i.params),console.log(i.query);const r=c(()=>U().navList),n=c(()=>U().navList.find(d=>d.path===i.path).title),{navigateTo:a}=Me(),l=d=>{a(d)};return(d,u)=>(P(),A(ot,{elevation:2},{prepend:y(()=>[f(st,{id:"menu-activator"}),f(it,{activator:"#menu-activator",transition:"slide-x-transition",style:{width:"100%"}},{default:y(()=>[f(Fe,null,{default:y(()=>[(P(!0),Z(G,null,X(O(r),(s,m)=>(P(),A(je,{key:m,value:m,style:{"padding-right":"64px"},onClick:p=>l(s.path)},{prepend:y(()=>[f(K,{icon:s.preIcon},null,8,["icon"])]),default:y(()=>[f(ze,null,{default:y(()=>[N(D(s.title),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1})]),default:y(()=>[f(nt,null,{default:y(()=>[N(D(O(n)),1)]),_:1})]),_:1}))}}),Vt=M({__name:"default",setup(e){return(i,r)=>{const n=ut,a=Ne("router-view"),l=We;return P(),A(Ee,{style:{"max-width":"375px",position:"relative",margin:"0 auto"}},{default:y(()=>[f(n),f(De,null,{default:y(()=>[f(a)]),_:1}),f(l)]),_:1})}}});export{Vt as default};
