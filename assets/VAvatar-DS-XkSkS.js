import{g as i,av as g,aG as f,m as o,aw as y,p as V,a7 as k,b as P,c as C,d as S,i as h,j as l,W as z}from"./index-BDTVZir0.js";import{h as I,b as A,r as x,k as D,l as R,n as T,d as b,s as B,f as F,V as _,q as j}from"./index-Bs3-qWMH.js";function N(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",s=arguments.length>2?arguments[2]:void 0;return i()({name:s??g(f(a.replace(/__/g,"-"))),props:{tag:{type:String,default:r},...o()},setup(e,u){let{slots:t}=u;return()=>{var n;return y(e.tag,{class:[a,e.class],style:e.style},(n=t.default)==null?void 0:n.call(t))}}})}const q=V({start:Boolean,end:Boolean,icon:k,image:String,text:String,...o(),...I(),...A(),...x(),...P(),...C(),...D({variant:"flat"})},"VAvatar"),O=i()({name:"VAvatar",props:q(),setup(a,r){let{slots:s}=r;const{themeClasses:e}=S(a),{colorClasses:u,colorStyles:t,variantClasses:n}=R(a),{densityClasses:c}=T(a),{roundedClasses:m}=b(a),{sizeClasses:d,sizeStyles:v}=B(a);return h(()=>l(a.tag,{class:["v-avatar",{"v-avatar--start":a.start,"v-avatar--end":a.end},e.value,u.value,c.value,m.value,d.value,n.value,a.class],style:[t.value,v.value,a.style]},{default:()=>[s.default?l(z,{key:"content-defaults",defaults:{VImg:{cover:!0,image:a.image},VIcon:{icon:a.icon}}},{default:()=>[s.default()]}):a.image?l(F,{key:"image",src:a.image,alt:"",cover:!0},null):a.icon?l(_,{key:"icon",icon:a.icon},null):a.text,j(!1,"v-avatar")]})),{}}});export{O as V,N as c};
