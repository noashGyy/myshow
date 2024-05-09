import{_ as ge}from"./ImgPreview.vue_vue_type_script_setup_true_lang-3x1cnJay.js";import{u as Ce}from"./app-Cjj_Sbn-.js";import{i as ke}from"./index-CTY90RvK.js";import{V as I,a as K,b as Q,c as Ve,d as X}from"./VCard-Bwkc2D1l.js";import{h as te,a as q,i as be,j as he,b as E,k as Se,l as xe,n as le,c as ne,o as Ie,p as Te,d as ae,q as Pe,V as b,r as ie,s as De,f as Y}from"./index-Co4NaVFx.js";import{c as we,V as ze}from"./VAvatar-3ox6q2O8.js";import{V as L,b as F}from"./VToolbar-mFosAGKj.js";import{V as Z,a as p}from"./VChip-WCua7qdB.js";import{p as B,a7 as O,m as $,a8 as oe,b as U,c as se,g as R,H as Be,f as h,d as re,a9 as ce,aa as $e,t as S,ab as Re,j as t,W as N,L as je,ac as Ae,ad as Le,i as G,k as z,u as ee,s as Fe,B as V,D as Ne,l as qe,q as T,w as n,a1 as d,ae as Ee,o as y,v as g,x as m,y as _,F as P,r as D,n as w}from"./index-sXhc3enb.js";import{V as Oe,a as Ue}from"./VRow-CoANVP61.js";import{V as Ge}from"./VBtn-BgHPSMcl.js";import"./VSlideGroup-Dt52zuad.js";const Me=we("v-alert-title"),He=["success","info","warning","error"],We=B({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:O,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>He.includes(e)},...$(),...te(),...oe(),...q(),...be(),...he(),...E(),...U(),...se(),...Se({variant:"flat"})},"VAlert"),Je=R()({name:"VAlert",props:We(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,o){let{emit:a,slots:l}=o;const v=Be(e,"modelValue"),c=h(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),i=h(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:s}=re(e),{colorClasses:u,colorStyles:C,variantClasses:k}=xe(i),{densityClasses:j}=le(e),{dimensionStyles:r}=ce(e),{elevationClasses:f}=ne(e),{locationStyles:M}=Ie(e),{positionClasses:de}=Te(e),{roundedClasses:ue}=ae(e),{textColorClasses:me,textColorStyles:ve}=$e(S(e,"borderColor")),{t:fe}=Re(),H=h(()=>({"aria-label":fe(e.closeLabel),onClick(A){v.value=!1,a("click:close",A)}}));return()=>{const A=!!(l.prepend||c.value),ye=!!(l.title||e.title),_e=!!(l.close||e.closable);return v.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},s.value,u.value,j.value,f.value,de.value,ue.value,k.value,e.class],style:[C.value,r.value,M.value,e.style],role:"alert"},{default:()=>{var W,J;return[Pe(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",me.value],style:ve.value},null),A&&t("div",{key:"prepend",class:"v-alert__prepend"},[l.prepend?t(N,{key:"prepend-defaults",disabled:!c.value,defaults:{VIcon:{density:e.density,icon:c.value,size:e.prominent?44:28}}},l.prepend):t(b,{key:"prepend-icon",density:e.density,icon:c.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[ye&&t(Me,{key:"title"},{default:()=>{var x;return[((x=l.title)==null?void 0:x.call(l))??e.title]}}),((W=l.text)==null?void 0:W.call(l))??e.text,(J=l.default)==null?void 0:J.call(l)]),l.append&&t("div",{key:"append",class:"v-alert__append"},[l.append()]),_e&&t("div",{key:"close",class:"v-alert__close"},[l.close?t(N,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var x;return[(x=l.close)==null?void 0:x.call(l,{props:H.value})]}}):t(Ge,je({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},H.value),null)])]}})}}}),Ke=B({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineInset:{type:[String,Number],default:0},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...$(),...te(),...U(),...se()},"VTimeline"),Qe=R()({name:"VTimeline",props:Ke(),setup(e,o){let{slots:a}=o;const{themeClasses:l}=re(e),{densityClasses:v}=le(e),{rtlClasses:c}=Ae();Le({VTimelineDivider:{lineColor:S(e,"lineColor")},VTimelineItem:{density:S(e,"density"),lineInset:S(e,"lineInset")}});const i=h(()=>{const u=e.side?e.side:e.density!=="default"?"end":null;return u&&`v-timeline--side-${u}`}),s=h(()=>{const u=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return u;case"start":return u[0];case"end":return u[1];default:return null}});return G(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,s.value,{"v-timeline--inset-line":!!e.lineInset},l.value,v.value,i.value,c.value,e.class],style:[{"--v-timeline-line-thickness":z(e.lineThickness)},e.style]},a)),{}}}),Xe=B({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:O,iconColor:String,lineColor:String,...$(),...E(),...ie(),...q()},"VTimelineDivider"),Ye=R()({name:"VTimelineDivider",props:Xe(),setup(e,o){let{slots:a}=o;const{sizeClasses:l,sizeStyles:v}=De(e,"v-timeline-divider__dot"),{backgroundColorStyles:c,backgroundColorClasses:i}=ee(S(e,"dotColor")),{roundedClasses:s}=ae(e,"v-timeline-divider__dot"),{elevationClasses:u}=ne(e),{backgroundColorClasses:C,backgroundColorStyles:k}=ee(S(e,"lineColor"));return G(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",C.value],style:k.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",u.value,s.value,l.value],style:v.value},[t("div",{class:["v-timeline-divider__inner-dot",i.value,s.value],style:c.value},[a.default?t(N,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},a.default):t(b,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",C.value],style:k.value},null)])),{}}}),Ze=B({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:O,iconColor:String,lineInset:[Number,String],...$(),...oe(),...q(),...E(),...ie(),...U()},"VTimelineItem"),pe=R()({name:"VTimelineItem",props:Ze(),setup(e,o){let{slots:a}=o;const{dimensionStyles:l}=ce(e),v=Fe(0),c=V();return Ne(c,i=>{var s;i&&(v.value=((s=i.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:s.getBoundingClientRect().width)??0)},{flush:"post"}),G(()=>{var i,s;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":z(v.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${z(e.lineInset)})`:z(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:l.value},[(i=a.default)==null?void 0:i.call(a)]),t(Ye,{ref:c,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:a.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((s=a.opposite)==null?void 0:s.call(a))])])}),{}}}),et={class:"fill-height","max-width":"640",style:{padding:"0"}},tt={class:"d-flex flex-no-wrap justify-space-between"},lt=g("br",null,null,-1),nt=g("br",null,null,-1),at=g("br",null,null,-1),it=g("br",null,null,-1),Ct=qe({__name:"about",setup(e){const o=h(()=>Ce().userInfo),a=V(["html","css","less","js","ts","vue2全家桶","vue3","uni-app","vuetify","uview","element-ui","electron","sql"]),l=V(["PS","axure"]),v=V(ke("certify",4)),c=V([{company:"深圳市基石协作科技有限公司",timerange:"2023-03 至 2024-04",waork:`
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
          `,color:"error",icon:"mdi-information"}]),i=V(!1),s=V(""),u=C=>{console.log(C),i.value=!0,s.value=C};return(C,k)=>{const j=ge;return y(),T("div",et,[t(I,{color:"deep-orange"},{default:n(()=>[g("div",tt,[g("div",null,[t(K,{class:"text-h5"},{default:n(()=>[m(_(d(o).name),1)]),_:1}),t(Q,null,{default:n(()=>[t(b,{icon:"mdi-school"}),m(" "+_(d(o).eduback)+" "+_(d(o).year)+" ",1),lt,t(b,{icon:"mdi-cellphone"}),m(" "+_(d(o).phone),1),nt,t(b,{icon:"mdi-map-marker"}),m(" "+_(d(o).address)+" ",1),at,t(b,{icon:"mdi-email"}),m(" "+_(d(o).email),1)]),_:1})]),t(ze,{class:"ma-3",rounded:"0",size:"125"},{default:n(()=>[t(Y,{src:d(o).avater},null,8,["src"])]),_:1})])]),_:1}),t(I,{class:"mx-auto",hover:""},{default:n(()=>[t(Ve,null,{default:n(()=>[t(K,null,{default:n(()=>[m(" 前端工程师 ")]),_:1}),t(Q,null,{default:n(()=>[m(" web,app,小程序,vue,javascript,ps ")]),_:1})]),_:1}),t(X,null,{default:n(()=>[m(" 资深编程工程师，虽未专攻底层技术以及架构设计，但精通运用各类前端技术解决业务问题，具高效学习力与实践力。丰富的项目经验积淀深厚工具知识，锤炼出应对各类问题的自信。 "),it,m("业余爱好集中于科普纪录、游戏动漫、跑步骑行，热衷探索新知，积极分享，力求所学与时俱进，不断超越。 ")]),_:1})]),_:1}),t(I,{class:"mx-auto"},{default:n(()=>[t(L,{color:"deep-orange-accent-1"},{default:n(()=>[t(F,null,{default:n(()=>[m("技能分布")]),_:1})]),_:1}),t(X,null,{default:n(()=>[t(Z,{column:""},{default:n(()=>[(y(!0),T(P,null,D(d(a),(r,f)=>(y(),w(p,{text:r,key:f,variant:"outlined"},null,8,["text"]))),128))]),_:1}),t(Z,{column:""},{default:n(()=>[(y(!0),T(P,null,D(d(l),(r,f)=>(y(),w(p,{text:r,key:f,variant:"outlined"},null,8,["text"]))),128))]),_:1})]),_:1})]),_:1}),t(I,null,{default:n(()=>[t(L,{color:"deep-orange-accent-1"},{default:n(()=>[t(F,null,{default:n(()=>[m("生平履历")]),_:1})]),_:1}),t(Qe,{side:"end"},{default:n(()=>[(y(!0),T(P,null,D(d(c),(r,f)=>(y(),w(pe,{key:f,"dot-color":r.color,size:"small"},{default:n(()=>[t(Je,{color:"grey-lighten-2",value:!0},{default:n(()=>[g("h4",null,_(r.company),1),g("small",null,_(r.timerange),1),g("p",null,_(r.waork),1)]),_:2},1024)]),_:2},1032,["dot-color"]))),128))]),_:1})]),_:1}),t(I,null,{default:n(()=>[t(L,{color:"deep-orange-accent-1"},{default:n(()=>[t(F,null,{default:n(()=>[m("资质证书")]),_:1})]),_:1}),t(Oe,null,{default:n(()=>[(y(!0),T(P,null,D(d(v),(r,f)=>(y(),w(Ue,{class:"px-4 py-4",cols:"6",key:f},{default:n(()=>[t(Y,{style:{"max-height":"120px"},src:r,onClick:M=>u(r)},null,8,["src","onClick"])]),_:2},1024))),128))]),_:1})]),_:1}),t(j,{modelValue:d(i),"onUpdate:modelValue":k[0]||(k[0]=r=>Ee(i)?i.value=r:null),currentImage:d(s)},null,8,["modelValue","currentImage"])])}}});export{Ct as default};