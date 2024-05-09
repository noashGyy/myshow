import{p as E,aE as Y,m as R,b as z,c as F,g as T,d as w,ad as Z,t as r,i as ee,j as l,L as j,a7 as b,aC as G,aj as ae,ab as le,H as te,ak as ne,f as V,al as _,am as se,W as v,ap as ie,F as x}from"./index-DdFeKO3n.js";import{b as ce,u as de,c as oe,d as ue,e as re}from"./VBtn-qQnKh9Pd.js";import{m as ve,V as D}from"./VSlideGroup-njn-UKMT.js";import{k as M,m as fe,h as pe,a as me,b as ke,r as he,R as ye,u as Ce,l as be,n as Ve,c as Ie,d as Pe,s as ge,q as Se,V as f}from"./index-Dnlbl27h.js";import{V as L}from"./VAvatar-CCnpLy6I.js";const O=Symbol.for("vuetify:v-chip-group"),Ae=E({column:Boolean,filter:Boolean,valueComparator:{type:Function,default:Y},...ve(),...R(),...ce({selectedClass:"v-chip--selected"}),...z(),...F(),...M({variant:"tonal"})},"VChipGroup"),Ee=T()({name:"VChipGroup",props:Ae(),emits:{"update:modelValue":e=>!0},setup(e,p){let{slots:c}=p;const{themeClasses:o}=w(e),{isSelected:t,select:m,next:k,prev:h,selected:y}=de(e,O);return Z({VChip:{color:r(e,"color"),disabled:r(e,"disabled"),filter:r(e,"filter"),variant:r(e,"variant")}}),ee(()=>{const C=D.filterProps(e);return l(D,j(C,{class:["v-chip-group",{"v-chip-group--column":e.column},o.value,e.class],style:e.style}),{default:()=>{var u;return[(u=c.default)==null?void 0:u.call(c,{isSelected:t,select:m,next:k,prev:h,selected:y.value})]}})}),{}}}),Be=E({activeClass:String,appendAvatar:String,appendIcon:b,closable:Boolean,closeIcon:{type:b,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:{type:Boolean,default:void 0},pill:Boolean,prependAvatar:String,prependIcon:b,ripple:{type:[Boolean,Object],default:!0},text:String,modelValue:{type:Boolean,default:!0},onClick:G(),onClickOnce:G(),...fe(),...R(),...pe(),...me(),...oe(),...ke(),...ae(),...he(),...z({tag:"span"}),...F(),...M({variant:"tonal"})},"VChip"),Re=T()({name:"VChip",directives:{Ripple:ye},props:Be(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0,click:e=>!0},setup(e,p){let{attrs:c,emit:o,slots:t}=p;const{t:m}=le(),{borderClasses:k}=Ce(e),{colorClasses:h,colorStyles:y,variantClasses:C}=be(e),{densityClasses:u}=Ve(e),{elevationClasses:$}=Ie(e),{roundedClasses:q}=Pe(e),{sizeClasses:K}=ge(e),{themeClasses:H}=w(e),I=te(e,"modelValue"),a=ue(e,O,!1),s=ne(e,c),N=V(()=>e.link!==!1&&s.isLink.value),i=V(()=>!e.disabled&&e.link!==!1&&(!!a||e.link||s.isClickable.value)),W=V(()=>({"aria-label":m(e.closeLabel),onClick(n){n.stopPropagation(),I.value=!1,o("click:close",n)}}));function P(n){var d;o("click",n),i.value&&((d=s.navigate)==null||d.call(s,n),a==null||a.toggle())}function X(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),P(n))}return()=>{const n=s.isLink.value?"a":e.tag,d=!!(e.appendIcon||e.appendAvatar),J=!!(d||t.append),Q=!!(t.close||e.closable),g=!!(t.filter||e.filter)&&a,S=!!(e.prependIcon||e.prependAvatar),U=!!(S||t.prepend),A=!a||a.isSelected.value;return I.value&&_(l(n,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":i.value,"v-chip--filter":g,"v-chip--pill":e.pill},H.value,k.value,A?h.value:void 0,u.value,$.value,q.value,K.value,C.value,a==null?void 0:a.selectedClass.value,e.class],style:[A?y.value:void 0,e.style],disabled:e.disabled||void 0,draggable:e.draggable,href:s.href.value,tabindex:i.value?0:void 0,onClick:P,onKeydown:i.value&&!N.value&&X},{default:()=>{var B;return[Se(i.value,"v-chip"),g&&l(re,{key:"filter"},{default:()=>[_(l("div",{class:"v-chip__filter"},[t.filter?l(v,{key:"filter-defaults",disabled:!e.filterIcon,defaults:{VIcon:{icon:e.filterIcon}}},t.filter):l(f,{key:"filter-icon",icon:e.filterIcon},null)]),[[ie,a.isSelected.value]])]}),U&&l("div",{key:"prepend",class:"v-chip__prepend"},[t.prepend?l(v,{key:"prepend-defaults",disabled:!S,defaults:{VAvatar:{image:e.prependAvatar,start:!0},VIcon:{icon:e.prependIcon,start:!0}}},t.prepend):l(x,null,[e.prependIcon&&l(f,{key:"prepend-icon",icon:e.prependIcon,start:!0},null),e.prependAvatar&&l(L,{key:"prepend-avatar",image:e.prependAvatar,start:!0},null)])]),l("div",{class:"v-chip__content","data-no-activator":""},[((B=t.default)==null?void 0:B.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))??e.text]),J&&l("div",{key:"append",class:"v-chip__append"},[t.append?l(v,{key:"append-defaults",disabled:!d,defaults:{VAvatar:{end:!0,image:e.appendAvatar},VIcon:{end:!0,icon:e.appendIcon}}},t.append):l(x,null,[e.appendIcon&&l(f,{key:"append-icon",end:!0,icon:e.appendIcon},null),e.appendAvatar&&l(L,{key:"append-avatar",end:!0,image:e.appendAvatar},null)])]),Q&&l("button",j({key:"close",class:"v-chip__close",type:"button"},W.value),[t.close?l(v,{key:"close-defaults",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},t.close):l(f,{key:"close-icon",icon:e.closeIcon,size:"x-small"},null)])]}}),[[se("ripple"),i.value&&e.ripple,null]])}}});export{Ee as V,Re as a};
