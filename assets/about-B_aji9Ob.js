import{i as Ce,u as ge}from"./app-ebP0WrLE.js";import{V as h,a as M,b as H,c as ke,d as W}from"./VCard-BUMyZ1TV.js";import{h as Y,a as R,i as Ve,j as be,b as F,k as he,l as Se,n as Z,c as p,o as xe,p as Te,d as ee,q as Ie,V as g,r as te,s as De,f as J}from"./index-Bs3-qWMH.js";import{c as Pe,V as we}from"./VAvatar-DS-XkSkS.js";import{V as j,b as A}from"./VToolbar-BwooChb9.js";import{V as K,a as Q}from"./VChip-Bh3XkSQ-.js";import{p as w,a7 as N,m as z,a8 as le,b as q,c as ne,g as B,H as ze,f as k,d as ae,a9 as ie,aa as Be,t as V,ab as $e,j as t,W as L,L as je,ac as Ae,ad as Le,i as E,k as P,u as X,s as Re,B as x,D as Fe,l as Ne,q as S,w as n,a3 as qe,o as y,v as C,x as m,y as _,a1 as f,F as T,r as I,n as D}from"./index-BDTVZir0.js";import{V as Ee,a as Oe}from"./VRow-BXdcvWd8.js";import{V as Ue}from"./VBtn-BDkiv6Z9.js";import"./VSlideGroup-CS3OQ8MS.js";const Ge=Pe("v-alert-title"),Me=["success","info","warning","error"],He=w({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:N,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>Me.includes(e)},...z(),...Y(),...le(),...R(),...Ve(),...be(),...F(),...q(),...ne(),...he({variant:"flat"})},"VAlert"),We=B()({name:"VAlert",props:He(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,i){let{emit:a,slots:l}=i;const v=ze(e,"modelValue"),r=k(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),c=k(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:o}=ae(e),{colorClasses:d,colorStyles:s,variantClasses:u}=Se(c),{densityClasses:oe}=Z(e),{dimensionStyles:se}=ie(e),{elevationClasses:re}=p(e),{locationStyles:ce}=xe(e),{positionClasses:de}=Te(e),{roundedClasses:ue}=ee(e),{textColorClasses:me,textColorStyles:ve}=Be(V(e,"borderColor")),{t:fe}=$e(),O=k(()=>({"aria-label":fe(e.closeLabel),onClick($){v.value=!1,a("click:close",$)}}));return()=>{const $=!!(l.prepend||r.value),ye=!!(l.title||e.title),_e=!!(l.close||e.closable);return v.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},o.value,d.value,oe.value,re.value,de.value,ue.value,u.value,e.class],style:[s.value,se.value,ce.value,e.style],role:"alert"},{default:()=>{var U,G;return[Ie(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",me.value],style:ve.value},null),$&&t("div",{key:"prepend",class:"v-alert__prepend"},[l.prepend?t(L,{key:"prepend-defaults",disabled:!r.value,defaults:{VIcon:{density:e.density,icon:r.value,size:e.prominent?44:28}}},l.prepend):t(g,{key:"prepend-icon",density:e.density,icon:r.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[ye&&t(Ge,{key:"title"},{default:()=>{var b;return[((b=l.title)==null?void 0:b.call(l))??e.title]}}),((U=l.text)==null?void 0:U.call(l))??e.text,(G=l.default)==null?void 0:G.call(l)]),l.append&&t("div",{key:"append",class:"v-alert__append"},[l.append()]),_e&&t("div",{key:"close",class:"v-alert__close"},[l.close?t(L,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var b;return[(b=l.close)==null?void 0:b.call(l,{props:O.value})]}}):t(Ue,je({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},O.value),null)])]}})}}}),Je=w({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...z(),...Y(),...q(),...ne()},"VTimeline"),Ke=B()({name:"VTimeline",props:Je(),setup(e,i){let{slots:a}=i;const{themeClasses:l}=ae(e),{densityClasses:v}=Z(e),{rtlClasses:r}=Ae();Le({VTimelineDivider:{lineColor:V(e,"lineColor")},VTimelineItem:{density:V(e,"density"),lineInset:V(e,"lineInset")}});const c=k(()=>{const d=e.side?e.side:e.density!=="default"?"end":null;return d&&`v-timeline--side-${d}`}),o=k(()=>{const d=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return d;case"start":return d[0];case"end":return d[1];default:return null}});return E(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},l.value,v.value,c.value,r.value,e.class],style:[{"--v-timeline-line-thickness":P(e.lineThickness)},e.style]},a)),{}}}),Qe=w({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...z(),...F(),...te(),...R()},"VTimelineDivider"),Xe=B()({name:"VTimelineDivider",props:Qe(),setup(e,i){let{slots:a}=i;const{sizeClasses:l,sizeStyles:v}=De(e,"v-timeline-divider__dot"),{backgroundColorStyles:r,backgroundColorClasses:c}=X(V(e,"dotColor")),{roundedClasses:o}=ee(e,"v-timeline-divider__dot"),{elevationClasses:d}=p(e),{backgroundColorClasses:s,backgroundColorStyles:u}=X(V(e,"lineColor"));return E(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",s.value],style:u.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",d.value,o.value,l.value],style:v.value},[t("div",{class:["v-timeline-divider__inner-dot",c.value,o.value],style:r.value},[a.default?t(L,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},a.default):t(g,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",s.value],style:u.value},null)])),{}}}),Ye=w({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...z(),...le(),...R(),...F(),...te(),...q()},"VTimelineItem"),Ze=B()({name:"VTimelineItem",props:Ye(),setup(e,i){let{slots:a}=i;const{dimensionStyles:l}=ie(e),v=Re(0),r=x();return Fe(r,c=>{var o;c&&(v.value=((o=c.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),E(()=>{var c,o;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":P(v.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${P(e.lineInset)})`:P(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:l.value},[(c=a.default)==null?void 0:c.call(a)]),t(Xe,{ref:r,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:a.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=a.opposite)==null?void 0:o.call(a))])])}),{}}}),pe={class:"fill-height","max-width":"640",style:{padding:"0"}},et={class:"d-flex flex-no-wrap justify-space-between"},tt=C("br",null,null,-1),lt=C("br",null,null,-1),nt=C("br",null,null,-1),at=C("br",null,null,-1),yt=Ne({__name:"about",setup(e){const i=k(()=>ge().userInfo),a=x(["html","css","less","js","ts","vue2全家桶","vue3","uni-app","vuetify","uview","element-ui","electron","sql"]),l=x(["PS","axure"]),v=x(Ce("certify",4)),r=x([{company:"深圳市基石协作科技有限公司",timerange:"2023-03 至 2024-04",waork:`
            负责公司产品以及外包项目前端开发任务，织信低代码平台文档编写，客户技术培训等
          `,color:"info",icon:"mdi-information"},{company:"自主创业",timerange:"2021-03 至 2023-04",waork:`
            期间制作游戏<<修不尽>>,游戏社交平台《觅友记》，游戏下载平台《GAME雇佣兵》
          `,color:"info",icon:"mdi-information"},{company:"中软国际（中国）科技有限公司",timerange:"2020-03 至 2021-03",waork:`
            负责华为光传送产品线的内部知识传播网站的前端开发，以及负责各类活动宣传物料编辑，与其他项目组的工作，提供专业的前端技术支持，分享技术知识，助力团队解决各类技术难题。
          `,color:"info",icon:"mdi-information"},{company:"深圳美中教育管理有限公司",timerange:"2019-03 至 2019-11",waork:`
            负责公司产品前端开发，少儿编程课程内容编制，学校活动拍摄以及剪辑。
          `,color:"info",icon:"mdi-information"},{company:"上海泛智信息科技有限公司",timerange:"2015-10 至 2019-01",waork:`
            负责公司产品UI设计以及前端开发，以及项目管理。
          `,color:"info",icon:"mdi-information"},{company:"太原理工大学",timerange:"2011 至 2015",waork:`
            全日制，专业为机械设计制造及其自动化，期间学习UI设计以及编程基础。
          `,color:"error",icon:"mdi-information"}]);return(c,o)=>{const d=qe("v-contaner");return y(),S("div",pe,[t(d,null,{default:n(()=>[t(h,{color:"deep-orange"},{default:n(()=>[C("div",et,[C("div",null,[t(M,{class:"text-h5"},{default:n(()=>[m(_(f(i).name),1)]),_:1}),t(H,null,{default:n(()=>[t(g,{icon:"mdi-school"}),m(" "+_(f(i).eduback)+" "+_(f(i).year)+" ",1),tt,t(g,{icon:"mdi-cellphone"}),m(" "+_(f(i).phone),1),lt,t(g,{icon:"mdi-map-marker"}),m(" "+_(f(i).address)+" ",1),nt,t(g,{icon:"mdi-email"}),m(" "+_(f(i).email),1)]),_:1})]),t(we,{class:"ma-3",rounded:"0",size:"125"},{default:n(()=>[t(J,{src:f(i).avater},null,8,["src"])]),_:1})])]),_:1}),t(h,{class:"mx-auto",hover:""},{default:n(()=>[t(ke,null,{default:n(()=>[t(M,null,{default:n(()=>[m(" 前端工程师 ")]),_:1}),t(H,null,{default:n(()=>[m(" web,app,小程序,vue,javascript,ps ")]),_:1})]),_:1}),t(W,null,{default:n(()=>[m(" 资深编程工程师，虽未专攻底层技术以及架构设计，但精通运用各类前端技术解决业务问题，具高效学习力与实践力。丰富的项目经验积淀深厚工具知识，锤炼出应对各类问题的自信。 "),at,m("业余爱好集中于科普纪录、游戏动漫、跑步骑行，热衷探索新知，积极分享，力求所学与时俱进，不断超越。 ")]),_:1})]),_:1}),t(h,{class:"mx-auto"},{default:n(()=>[t(j,{color:"deep-orange-accent-1"},{default:n(()=>[t(A,null,{default:n(()=>[m("技能分布")]),_:1})]),_:1}),t(W,null,{default:n(()=>[t(K,{column:""},{default:n(()=>[(y(!0),S(T,null,I(f(a),(s,u)=>(y(),D(Q,{text:s,key:u,variant:"outlined"},null,8,["text"]))),128))]),_:1}),t(K,{column:""},{default:n(()=>[(y(!0),S(T,null,I(f(l),(s,u)=>(y(),D(Q,{text:s,key:u,variant:"outlined"},null,8,["text"]))),128))]),_:1})]),_:1})]),_:1}),t(h,null,{default:n(()=>[t(j,{color:"deep-orange-accent-1"},{default:n(()=>[t(A,null,{default:n(()=>[m("生平履历")]),_:1})]),_:1}),t(Ke,{side:"end"},{default:n(()=>[(y(!0),S(T,null,I(f(r),(s,u)=>(y(),D(Ze,{key:u,"dot-color":s.color,size:"small"},{default:n(()=>[t(We,{color:"grey-lighten-2",value:!0},{default:n(()=>[C("h4",null,_(s.company),1),C("small",null,_(s.timerange),1),C("p",null,_(s.waork),1)]),_:2},1024)]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1}),t(h,null,{default:n(()=>[t(j,{color:"deep-orange-accent-1"},{default:n(()=>[t(A,null,{default:n(()=>[m("资质证书")]),_:1})]),_:1}),t(Ee,null,{default:n(()=>[(y(!0),S(T,null,I(f(v),(s,u)=>(y(),D(Oe,{class:"px-4 py-4",cols:"6",key:u},{default:n(()=>[t(J,{style:{"max-height":"120px"},src:s,onClick:o[0]||(o[0]=()=>{})},null,8,["src"])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})])}}});export{yt as default};
