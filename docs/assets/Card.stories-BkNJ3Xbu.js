import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const a=({children:p,imgSrc:o})=>e.jsxs("div",{className:"card-container",children:[o?e.jsx("div",{className:"card-header",children:e.jsx("div",{className:"card-header__inner",children:e.jsx("img",{className:"card-img",src:o,alt:""})})}):void 0,e.jsx("div",{className:"card-body",children:p})]});a.__docgenInfo={description:`カード
@param param0 
@returns`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子要素"},imgSrc:{required:!1,tsType:{name:"string"},description:"画像のURL"}}};const h={title:"Example/Card",component:a,tags:["autodocs"]},r=()=>e.jsx(a,{imgSrc:"https://picsum.photos/400",children:e.jsx("div",{children:"Hello"})}),s=()=>e.jsx(a,{children:e.jsx("div",{children:"Hello"})});r.__docgenInfo={description:"",methods:[],displayName:"normal"};s.__docgenInfo={description:"",methods:[],displayName:"withoutImage"};var d,t,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Card imgSrc="https://picsum.photos/400">
        <div>Hello</div>
      </Card>;
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var i,c,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <Card>
        <div>Hello</div>
      </Card>;
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const g=["normal","withoutImage"];export{g as __namedExportsOrder,h as default,r as normal,s as withoutImage};
