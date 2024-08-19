import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import"./index-BBkUAzwr.js";const a=({children:l,imgSrc:t,imgAltText:p})=>e.jsxs("div",{className:"card-container",children:[t?e.jsx("div",{className:"card-header",children:e.jsx("div",{className:"card-header__inner",children:e.jsx("img",{className:"card-img",src:t,alt:p})})}):void 0,e.jsx("div",{className:"card-body",children:l})]});a.__docgenInfo={description:`カード
@param param0 
@returns`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子要素"},imgSrc:{required:!1,tsType:{name:"string"},description:"画像のURL"},imgAltText:{required:!1,tsType:{name:"string"},description:"画像のaltテキスト"}}};const g={title:"Example/Card",component:a,tags:["autodocs"]},r=()=>e.jsx(a,{imgSrc:"https://picsum.photos/400",imgAltText:"カードの画像",children:e.jsx("div",{children:"Hello"})}),s=()=>e.jsx(a,{children:e.jsx("div",{children:"Hello"})});r.__docgenInfo={description:"",methods:[],displayName:"normal"};s.__docgenInfo={description:"",methods:[],displayName:"withoutImage"};var d,o,i;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  return <Card imgSrc="https://picsum.photos/400" imgAltText="カードの画像">
        <div>Hello</div>
      </Card>;
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var n,c,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <Card>
        <div>Hello</div>
      </Card>;
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const x=["normal","withoutImage"];export{x as __namedExportsOrder,g as default,r as normal,s as withoutImage};
