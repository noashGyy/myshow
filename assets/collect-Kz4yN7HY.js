import{i as G}from"./index-BnEEsE1u.js";import{m as Z,V as I}from"./VBtn-qQnKh9Pd.js";import{p as W,M as ee,g as X,aa as te,B as S,f as E,i as j,j as r,F as _,L as M,X as ae,ag as le,ah as oe,b as se,H as re,u as ne,t as f,ad as ie,k as de,ai as ue,l as ce,D as fe,q as T,w as u,a1 as C,ae as U,o as m,r as P,n as $,x as me,y as H}from"./index-DdFeKO3n.js";import{m as ge,V as N}from"./VSlideGroup-njn-UKMT.js";import{h as be,n as ve,f as xe}from"./index-Dnlbl27h.js";import{V as ye,a as he}from"./VWindowItem-Dkipt73c.js";import{V as Ve}from"./VContainer-DGWDG9oD.js";import{V as Ce,a as Se}from"./VRow-qlnRCmnv.js";import{V as ke,a as pe}from"./VCard-Ct2CLoM5.js";import"./VAvatar-CCnpLy6I.js";const q=Symbol.for("vuetify:v-tabs"),Te=W({fixed:Boolean,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...ee(Z({selectedClass:"v-tab--selected",variant:"text"}),["active","block","flat","location","position","symbol"])},"VTab"),A=X()({name:"VTab",props:Te(),setup(e,n){let{slots:o,attrs:g}=n;const{textColorClasses:V,textColorStyles:s}=te(e,"sliderColor"),d=S(),l=S(),a=E(()=>e.direction==="horizontal"),t=E(()=>{var i,c;return((c=(i=d.value)==null?void 0:i.group)==null?void 0:c.isSelected.value)??!1});function b(i){var R,z;let{value:c}=i;if(c){const w=(z=(R=d.value)==null?void 0:R.$el.parentElement)==null?void 0:z.querySelector(".v-tab--selected .v-tab__slider"),B=l.value;if(!w||!B)return;const L=getComputedStyle(w).color,v=w.getBoundingClientRect(),x=B.getBoundingClientRect(),k=a.value?"x":"y",p=a.value?"X":"Y",D=a.value?"right":"bottom",y=a.value?"width":"height",O=v[k],Y=x[k],h=O>Y?v[D]-x[D]:v[k]-x[k],J=Math.sign(h)>0?a.value?"right":"bottom":Math.sign(h)<0?a.value?"left":"top":"center",K=(Math.abs(h)+(Math.sign(h)<0?v[y]:x[y]))/Math.max(v[y],x[y])||0,Q=v[y]/x[y]||0,F=1.5;le(B,{backgroundColor:[L,"currentcolor"],transform:[`translate${p}(${h}px) scale${p}(${Q})`,`translate${p}(${h/F}px) scale${p}(${(K-1)/F+1})`,"none"],transformOrigin:Array(3).fill(J)},{duration:225,easing:oe})}}return j(()=>{const i=I.filterProps(e);return r(I,M({symbol:q,ref:d,class:["v-tab",e.class],style:e.style,tabindex:t.value?0:-1,role:"tab","aria-selected":String(t.value),active:!1},i,g,{block:e.fixed,maxWidth:e.fixed?300:void 0,"onGroup:selected":b}),{...o,default:()=>{var c;return r(_,null,[((c=o.default)==null?void 0:c.call(o))??e.text,!e.hideSlider&&r("div",{ref:l,class:["v-tab__slider",V.value],style:s.value},null)])}})}),ae({},d)}});function _e(e){return e?e.map(n=>ue(n)?n:{text:n,value:n}):[]}const we=W({alignTabs:{type:String,default:"start"},color:String,fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,...ge({mandatory:"force"}),...be(),...se()},"VTabs"),Be=X()({name:"VTabs",props:we(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:o}=n;const g=re(e,"modelValue"),V=E(()=>_e(e.items)),{densityClasses:s}=ve(e),{backgroundColorClasses:d,backgroundColorStyles:l}=ne(f(e,"bgColor"));return ie({VTab:{color:f(e,"color"),direction:f(e,"direction"),stacked:f(e,"stacked"),fixed:f(e,"fixedTabs"),sliderColor:f(e,"sliderColor"),hideSlider:f(e,"hideSlider")}}),j(()=>{const a=N.filterProps(e);return r(N,M(a,{modelValue:g.value,"onUpdate:modelValue":t=>g.value=t,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,d.value,e.class],style:[{"--v-tabs-height":de(e.height)},l.value,e.style],role:"tablist",symbol:q}),{default:()=>[o.default?o.default():V.value.map(t=>r(A,M(t,{key:t.text}),null))]})}),{}}}),Pe={class:"fill-height","max-width":"640",style:{padding:"0"}},Ne=ce({__name:"collect",setup(e){const n=S(["设计","绘画"]),o=[],g=G("oter",10),V=G("paint",5);g.forEach(l=>{o.push({type:0,src:l,flex:6})}),V.forEach(l=>{o.push({type:1,src:l,flex:6})});const s=S(0),d=S();return d.value=o.filter(l=>l.type===s.value),fe(s,async(l,a)=>{d.value=o.filter(t=>t.type===l)}),(l,a)=>(m(),T("div",Pe,[r(Be,{"bg-color":"indigo","next-icon":"mdi-arrow-right-bold-box-outline","prev-icon":"mdi-arrow-left-bold-box-outline","show-arrows":"","center-active":"",modelValue:C(s),"onUpdate:modelValue":a[0]||(a[0]=t=>U(s)?s.value=t:null)},{default:u(()=>[(m(!0),T(_,null,P(C(n),(t,b)=>(m(),$(A,{key:b},{default:u(()=>[me(H(t),1)]),_:2},1024))),128))]),_:1},8,["modelValue"]),r(ye,{modelValue:C(s),"onUpdate:modelValue":a[1]||(a[1]=t=>U(s)?s.value=t:null)},{default:u(()=>[(m(!0),T(_,null,P(C(n),(t,b)=>(m(),$(he,{value:b,key:b},{default:u(()=>[r(Ve,{fluid:""},{default:u(()=>[r(Ce,{dense:""},{default:u(()=>[(m(!0),T(_,null,P(C(d),i=>(m(),$(Se,{key:i.title,cols:i.flex},{default:u(()=>[r(ke,{link:""},{default:u(()=>[r(xe,{src:i.src,class:"align-end",height:"146px",cover:""},{default:u(()=>[r(pe,{class:"text-white",textContent:H(i.title)},null,8,["textContent"])]),_:2},1032,["src"])]),_:2},1024)]),_:2},1032,["cols"]))),128))]),_:1})]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]))}});export{Ne as default};
