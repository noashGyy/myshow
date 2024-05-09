import{_ as J}from"./ImgPreview.vue_vue_type_script_setup_true_lang-9bqMs36W.js";import{i as r}from"./index-B5jnxQay.js";import{m as K,V as W,b as X,a as L}from"./VWindowItem-B5fbiX8T.js";import{p as P,a7 as D,g as w,H as Y,ab as Z,B as V,D as E,E as ee,i as I,j as l,F as S,W as ae,L as B,k as te,m as T,b as $,c as le,d as ne,f as h,ad as N,t as b,an as z,Q as F,ao as se,al as G,ap as ie,u as O,am as oe,S as re,l as ce,q as _,v as R,w as g,a1 as C,ae as ue,o as y,r as U,n as j,y as H,x as de}from"./index-BIC-rGfy.js";import{V as ve,b as me,u as pe,a as fe,c as xe,d as ge}from"./VBtn-I3kjeD6X.js";import{w as ye,x as Ve,f as A,R as he,V as be,a as Pe,b as we,c as Ie,d as ke}from"./index-Cp_DFiMm.js";import{V as _e,a as Ce}from"./VRow-DAtAMUyS.js";const Ee=P({color:String,cycle:Boolean,delimiterIcon:{type:D,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...K({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),Se=w()({name:"VCarousel",props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;const a=Y(e,"modelValue"),{t:s}=Z(),o=V();let u=-1;E(a,f),E(()=>e.interval,f),E(()=>e.cycle,p=>{p?f():window.clearTimeout(u)}),ee(m);function m(){!e.cycle||!o.value||(u=window.setTimeout(o.value.group.next,+e.interval>0?+e.interval:6e3))}function f(){window.clearTimeout(u),window.requestAnimationFrame(m)}return I(()=>{const p=W.filterProps(e);return l(W,B({ref:o},p,{modelValue:a.value,"onUpdate:modelValue":d=>a.value=d,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:te(e.height)},e.style]}),{default:t.default,additional:d=>{let{group:v}=d;return l(S,null,[!e.hideDelimiters&&l("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[v.items.value.length>0&&l(ae,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[v.items.value.map((n,i)=>{const x={id:`carousel-item-${n.id}`,"aria-label":s("$vuetify.carousel.ariaLabel.delimiter",i+1,v.items.value.length),class:["v-carousel__controls__item",v.isSelected(n.id)&&"v-btn--active"],onClick:()=>v.select(n.id,!0)};return t.item?t.item({props:x,item:n}):l(ve,B(n,x),null)})]})]),e.progress&&l(ye,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(v.getItemIndex(a.value)+1)/v.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),Be=P({...Ve(),...X()},"VCarouselItem"),Te=w()({name:"VCarouselItem",inheritAttrs:!1,props:Be(),setup(e,c){let{slots:t,attrs:a}=c;I(()=>{const s=A.filterProps(e),o=L.filterProps(e);return l(L,B({class:"v-carousel-item"},o),{default:()=>[l(A,B(a,s),t)]})})}}),k=Symbol.for("vuetify:v-expansion-panel"),Ue=["default","accordion","inset","popout"],je=P({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ue.includes(e)},readonly:Boolean,...T(),...me(),...$(),...le()},"VExpansionPanels"),De=w()({name:"VExpansionPanels",props:je(),emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:t}=c;pe(e,k);const{themeClasses:a}=ne(e),s=h(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return N({VExpansionPanel:{color:b(e,"color"),readonly:b(e,"readonly")},VExpansionPanelTitle:{focusable:b(e,"focusable"),static:b(e,"static")}}),I(()=>l(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},a.value,s.value,e.class],style:e.style},t)),{}}}),Ae=P({...T(),...z()},"VExpansionPanelText"),M=w()({name:"VExpansionPanelText",props:Ae(),setup(e,c){let{slots:t}=c;const a=F(k);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:o}=se(e,a.isSelected);return I(()=>l(fe,{onAfterLeave:o},{default:()=>{var u;return[G(l("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&l("div",{class:"v-expansion-panel-text__wrapper"},[(u=t.default)==null?void 0:u.call(t)])]),[[ie,a.isSelected.value]])]}})),{}}}),q=P({color:String,expandIcon:{type:D,default:"$expand"},collapseIcon:{type:D,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...T()},"VExpansionPanelTitle"),Q=w()({name:"VExpansionPanelTitle",directives:{Ripple:he},props:q(),setup(e,c){let{slots:t}=c;const a=F(k);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:o}=O(e,"color"),u=h(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return I(()=>{var m;return G(l("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[o.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[l("span",{class:"v-expansion-panel-title__overlay"},null),(m=t.default)==null?void 0:m.call(t,u.value),!e.hideActions&&l("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(u.value):l(be,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[oe("ripple"),e.ripple]])}),{}}}),We=P({title:String,text:String,bgColor:String,...T(),...Pe(),...xe(),...z(),...we(),...$(),...q()},"VExpansionPanel"),Le=w()({name:"VExpansionPanel",props:We(),emits:{"group:selected":e=>!0},setup(e,c){let{slots:t}=c;const a=ge(e,k),{backgroundColorClasses:s,backgroundColorStyles:o}=O(e,"bgColor"),{elevationClasses:u}=Ie(e),{roundedClasses:m}=ke(e),f=h(()=>(a==null?void 0:a.disabled.value)||e.disabled),p=h(()=>a.group.items.value.reduce((n,i,x)=>(a.group.selected.value.includes(i.id)&&n.push(x),n),[])),d=h(()=>{const n=a.group.items.value.findIndex(i=>i.id===a.id);return!a.isSelected.value&&p.value.some(i=>i-n===1)}),v=h(()=>{const n=a.group.items.value.findIndex(i=>i.id===a.id);return!a.isSelected.value&&p.value.some(i=>i-n===-1)});return re(k,a),N({VExpansionPanelText:{eager:b(e,"eager")},VExpansionPanelTitle:{readonly:b(e,"readonly")}}),I(()=>{const n=!!(t.text||e.text),i=!!(t.title||e.title);return l(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":d.value,"v-expansion-panel--after-active":v.value,"v-expansion-panel--disabled":f.value},m.value,s.value,e.class],style:[o.value,e.style]},{default:()=>{var x;return[l("div",{class:["v-expansion-panel__shadow",...u.value]},null),i&&l(Q,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),n&&l(M,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(x=t.default)==null?void 0:x.call(t)]}})}),{}}}),Re={class:"fill-height","max-width":"640",style:{padding:"0"}},Me=ce({__name:"project",setup(e){const c=V(r("banner",7)),t=V(1),a=V(),s=V(!1),o=V();E(t,async(m,f)=>{a.value=list.filter(p=>p.type===m)});const u=V([{title:"上海时宜财务系统",imageUrls:r("shiyi",0),content:`上海时宜财务系统是一个专注于财务付款审批管理的解决方案，致力于为企业提供高效、便捷的财务管理体验。此系统通过与多个外部系统对接，如飞书、分贝通、金蝶、支付宝、收钱吧和招商银行等，实现了付款流水的统一管理和快速查询。
      核心功能方面，系统从付款申请开始，到审批流程的每一步，再到与银行付款状态的对接，以及获取银行流水数据，都进行了细致的考虑和设计。此外，编辑银行流水并生成金蝶凭证的功能，更是增强了系统的实用性和便利性。
      在技术实现上，该项目面临的核心挑战是如何高效地对接不同系统的数据，同时有效处理外部系统 API  的调用。特别是在并发场景下，如何利用 Redis  和行锁等技术来处理异常情况，确保系统的稳定性和数据的完整性，是该项目的技术难点。
      项目团队由一名产品经理、一名开发人员组成。我作为该项目的开发人员，负责整个系统的所有开发任务。从需求分析、架构设计、系统开发。`,teachs:["vue2","element","javascript","redis"]},{title:"医管家",imageUrls:r("yiguanjia",8),content:"上海益中恒泰医管家工单管理系统是一个综合性平台，旨在通过 PC端（Web）、移动端（安卓与 iOS ）以及微信小程序，全面优化和提升医管工作的效率。此系统不仅覆盖了广泛的用户触点，更在功能上实现了多重突破。",teachs:["vue2","element","javascript","redis"]},{title:"修不尽",imageUrls:r("xiuxian",6),content:"独立策略游戏;基于cocos",teachs:["vue3","bootstrap5","ts","vite"]},{title:"友游戏",imageUrls:r("youyou",6),content:"链游发布平台",teachs:["vue3","bootstrap5","ts","vite"]},{title:"觅友记",imageUrls:r("miyou",5),content:`简要：链游玩家的聚集地，游戏开发者的推广社区；
前端框架：vue3+bootstrap5 基于 vite 快速构建前端界面;;`,teachs:["vue3","bootstrap5","ts","vite"]},{title:"GAME雇佣兵",imageUrls:r("youweb",7),content:`独立单机游戏产品的 数字典藏展示网站；学习为目的，从需求分析，竞品分析，功能原型设计，UI 视觉设计，最后 WEB 前端开发。
前端框架：bootstrap4 PC端（Web）、移动端（安卓与 iOS ）以及微信小程序，全面优化和提升医管工作的效率。此系统不仅覆盖了广泛的用户触点，更在功能上实现了多重突破。`,teachs:["bootstrap5"]},{title:"华为光传送内部信息传播网站",imageUrls:r("yiguanjia",0),content:`类似博客类知识网站；
纯 html+css+js  开发，毫无感情的技术活； PC端（Web）、移动端（安卓与 iOS ）以及微信小程序，全面优化和提升医管工作的效率。此系统不仅覆盖了广泛的用户触点，更在功能上实现了多重突破。`,teachs:["H5","javascript"]},{title:"美中在线教育",imageUrls:r("mz",6),content:`该项目为在线教育平台
前端框架：VUE +vue-router+axios+iviewUI  实现前后端分离的数据异步获取。
微信小程序：uni-app`,teachs:["H5","javascript"]},{title:"查验预约平台",imageUrls:r("chay",6),content:"该项目为吴淞海关提供给各个监管仓对于货物查验提供预约，以及查验管理，数据统计的平台系统",teachs:["H5","javascript"]},{title:"邮轮云",imageUrls:r("youlun",0),content:`该项目为上海吴淞港开发项目，包括票务平台海关后台监控管理系统（内部运行），微信小程序.
开发框架：vue+amazeUI  构建前端 WEB  页面`,teachs:["H5","javascript"]},{title:"华运通tms系统",imageUrls:r("yiguanjia",0),content:"临时外包项目，负责项目客户端以及后台管理页面的 UI  升级",teachs:["H5","javascript"]},{title:"集运天下",imageUrls:r("jiyun",4),content:"该项目为解决集装箱空运程浪费问题，开发内容 web  网站，微信公众号",teachs:["H5","javascript"]},{title:"物流宝盒",imageUrls:r("wuliu",8),content:"该项目货运物流匹配平台；WEB  网站，安卓，ios",teachs:["H5","javascript"]}]);return(m,f)=>{const p=J;return y(),_("div",Re,[R("div",null,[l(Se,{height:"146","show-arrows":!1,cycle:""},{default:g(()=>[(y(!0),_(S,null,U(C(c),(d,v)=>(y(),j(Te,{src:d,cover:""},null,8,["src"]))),256))]),_:1})]),l(De,{class:"my-4",variant:"inset"},{default:g(()=>[(y(!0),_(S,null,U(C(u),(d,v)=>(y(),j(Le,{key:v},{default:g(()=>[l(Q,null,{default:g(({open:n})=>[R("h4",null,H(d.title),1)]),_:2},1024),l(M,null,{default:g(()=>[l(_e,{justify:"start"},{default:g(()=>[(y(!0),_(S,null,U(d.imageUrls,(n,i)=>(y(),j(Ce,{key:i,cols:"4"},{default:g(()=>[l(A,{src:n,"image-preview":n,onClick:x=>{s.value=!0,o.value=n}},null,8,["src","image-preview","onClick"])]),_:2},1024))),128))]),_:2},1024),de(" "+H(d.content),1)]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(p,{modelValue:C(s),"onUpdate:modelValue":f[0]||(f[0]=d=>ue(s)?s.value=d:null),currentImage:C(o)},null,8,["modelValue","currentImage"])])}}});export{Me as default};