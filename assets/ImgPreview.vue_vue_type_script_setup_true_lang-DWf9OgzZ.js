import{l as m,aq as t,ar as r,q as u,j as s,w as d,as as n,o as i,v as p}from"./index-DdFeKO3n.js";import{f as c}from"./index-Dnlbl27h.js";const f=m({__name:"ImgPreview",props:t(["showImage","currentImage"],{modelValue:{prop:"showImage",event:"update:showImage"},modelModifiers:{}}),emits:t(["update:showImage"],["update:modelValue"]),setup(o,{emit:g}){const a=r(o,"modelValue");return(v,e)=>(i(),u("div",null,[s(n,{modelValue:a.value,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value=l),width:"auto"},{default:d(()=>[p("div",null,[s(c,{width:"375","aspect-ratio":"16/9",cover:"",src:o.currentImage,onClick:e[0]||(e[0]=l=>a.value=!1)},null,8,["src"])])]),_:1},8,["modelValue"])]))}});export{f as _};
