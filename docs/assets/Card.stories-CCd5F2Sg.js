import{j as r}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const s=({children:o,imgSrc:n})=>r.jsxs("div",{className:"card-container",children:[r.jsx("div",{className:"card-header",children:r.jsx("div",{className:"card-header__inner",children:r.jsx("img",{className:"card-img",src:n,alt:""})})}),r.jsx("div",{className:"card-body",children:o})]});s.__docgenInfo={description:`カード
@param param0 
@returns`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子要素"},imgSrc:{required:!0,tsType:{name:"string"},description:"画像のURL"}}};const m={title:"Example/Card",component:s,tags:["autodocs"]},e=()=>r.jsx(s,{imgSrc:"https://picsum.photos/400",children:r.jsx("div",{children:"Hello"})});e.__docgenInfo={description:"",methods:[],displayName:"normal"};var a,d,t;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Card imgSrc="https://picsum.photos/400">
        <div>Hello</div>
      </Card>;
}`,...(t=(d=e.parameters)==null?void 0:d.docs)==null?void 0:t.source}}};const p=["normal"];export{p as __namedExportsOrder,m as default,e as normal};
