import{b as Q,u as ee,f as H}from"./VBtn-qQnKh9Pd.js";import{p as te,a7 as G,m as le,aG as ae,b as ne,g as se,ac as ue,a5 as oe,s as x,f as S,e as D,aH as ie,D as ce,i as re,j as h,Z as ve,C as fe}from"./index-DdFeKO3n.js";import{V as L}from"./index-Dnlbl27h.js";function $(a){const s=Math.abs(a);return Math.sign(a)*(s/((1/.501-2)*(1-s)+1))}function q(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:z,currentScrollOffset:r,isHorizontal:n}=a;const u=n?d.clientWidth:d.clientHeight,t=n?d.offsetLeft:d.offsetTop,c=z&&n?i-t-u:t,v=s+r,o=u+c,g=u*.4;return c<=r?r=Math.max(c-g,0):v<=o&&(r=Math.min(r-(v-o-g),i-s)),r}function de(a){let{selectedElement:d,containerSize:s,contentSize:i,isRtl:z,isHorizontal:r}=a;const n=r?d.clientWidth:d.clientHeight,u=r?d.offsetLeft:d.offsetTop,t=z&&r?i-u-n/2-s/2:u+n/2-s/2;return Math.min(i-s,Math.max(0,t))}const me=Symbol.for("vuetify:v-slide-group"),pe=te({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:me},nextIcon:{type:G,default:"$next"},prevIcon:{type:G,default:"$prev"},showArrows:{type:[Boolean,String],validator:a=>typeof a=="boolean"||["always","desktop","mobile"].includes(a)},...le(),...ae(),...ne(),...Q({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ye=se()({name:"VSlideGroup",props:pe(),emits:{"update:modelValue":a=>!0},setup(a,d){let{slots:s}=d;const{isRtl:i}=ue(),{displayClasses:z,mobile:r}=oe(a),n=ee(a,a.symbol),u=x(!1),t=x(0),c=x(0),v=x(0),o=S(()=>a.direction==="horizontal"),{resizeRef:g,contentRect:R}=D(),{resizeRef:f,contentRect:k}=D(),A=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[0]):-1),B=S(()=>n.selected.value.length?n.items.value.findIndex(e=>e.id===n.selected.value[n.selected.value.length-1]):-1);if(ie){let e=-1;ce(()=>[n.selected.value,R.value,k.value,o.value],()=>{cancelAnimationFrame(e),e=requestAnimationFrame(()=>{if(R.value&&k.value){const l=o.value?"width":"height";c.value=R.value[l],v.value=k.value[l],u.value=c.value+1<v.value}if(A.value>=0&&f.value){const l=f.value.children[B.value];A.value===0||!u.value?t.value=0:a.centerActive?t.value=de({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,isHorizontal:o.value}):u.value&&(t.value=q({selectedElement:l,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value}))}})})}const b=x(!1);let C=0,I=0;function N(e){const l=o.value?"clientX":"clientY";I=(i.value&&o.value?-1:1)*t.value,C=e.touches[0][l],b.value=!0}function W(e){if(!u.value)return;const l=o.value?"clientX":"clientY",m=i.value&&o.value?-1:1;t.value=m*(I+C-e.touches[0][l])}function X(e){const l=v.value-c.value;t.value<0||!u.value?t.value=0:t.value>=l&&(t.value=l),b.value=!1}function Y(){g.value&&(g.value[o.value?"scrollLeft":"scrollTop"]=0)}const w=x(!1);function j(e){if(w.value=!0,!(!u.value||!f.value)){for(const l of e.composedPath())for(const m of f.value.children)if(m===l){t.value=q({selectedElement:m,containerSize:c.value,contentSize:v.value,isRtl:i.value,currentScrollOffset:t.value,isHorizontal:o.value});return}}}function K(e){w.value=!1}function U(e){var l;!w.value&&!(e.relatedTarget&&((l=f.value)!=null&&l.contains(e.relatedTarget)))&&p()}function Z(e){f.value&&(o.value?e.key==="ArrowRight"?p(i.value?"prev":"next"):e.key==="ArrowLeft"&&p(i.value?"next":"prev"):e.key==="ArrowDown"?p("next"):e.key==="ArrowUp"&&p("prev"),e.key==="Home"?p("first"):e.key==="End"&&p("last"))}function p(e){var l,m,F,M,E;if(f.value)if(!e)(l=ve(f.value)[0])==null||l.focus();else if(e==="next"){const y=(m=f.value.querySelector(":focus"))==null?void 0:m.nextElementSibling;y?y.focus():p("first")}else if(e==="prev"){const y=(F=f.value.querySelector(":focus"))==null?void 0:F.previousElementSibling;y?y.focus():p("last")}else e==="first"?(M=f.value.firstElementChild)==null||M.focus():e==="last"&&((E=f.value.lastElementChild)==null||E.focus())}function T(e){const l=t.value+(e==="prev"?-1:1)*c.value;t.value=fe(l,0,v.value-c.value)}const J=S(()=>{let e=t.value>v.value-c.value?-(v.value-c.value)+$(v.value-c.value-t.value):-t.value;t.value<=0&&(e=$(-t.value));const l=i.value&&o.value?-1:1;return{transform:`translate${o.value?"X":"Y"}(${l*e}px)`,transition:b.value?"none":"",willChange:b.value?"transform":""}}),O=S(()=>({next:n.next,prev:n.prev,select:n.select,isSelected:n.isSelected})),P=S(()=>{switch(a.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return u.value||Math.abs(t.value)>0;case"mobile":return r.value||u.value||Math.abs(t.value)>0;default:return!r.value&&(u.value||Math.abs(t.value)>0)}}),_=S(()=>Math.abs(t.value)>0),V=S(()=>v.value>Math.abs(t.value)+c.value);return re(()=>h(a.tag,{class:["v-slide-group",{"v-slide-group--vertical":!o.value,"v-slide-group--has-affixes":P.value,"v-slide-group--is-overflowing":u.value},z.value,a.class],style:a.style,tabindex:w.value||n.selected.value.length?-1:0,onFocus:U},{default:()=>{var e,l,m;return[P.value&&h("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!_.value}],onClick:()=>_.value&&T("prev")},[((e=s.prev)==null?void 0:e.call(s,O.value))??h(H,null,{default:()=>[h(L,{icon:i.value?a.nextIcon:a.prevIcon},null)]})]),h("div",{key:"container",ref:g,class:"v-slide-group__container",onScroll:Y},[h("div",{ref:f,class:"v-slide-group__content",style:J.value,onTouchstartPassive:N,onTouchmovePassive:W,onTouchendPassive:X,onFocusin:j,onFocusout:K,onKeydown:Z},[(l=s.default)==null?void 0:l.call(s,O.value)])]),P.value&&h("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!V.value}],onClick:()=>V.value&&T("next")},[((m=s.next)==null?void 0:m.call(s,O.value))??h(H,null,{default:()=>[h(L,{icon:i.value?a.prevIcon:a.nextIcon},null)]})])]}})),{selected:n.selected,scrollTo:T,scrollOffset:t,focus:p}}});export{ye as V,pe as m};
