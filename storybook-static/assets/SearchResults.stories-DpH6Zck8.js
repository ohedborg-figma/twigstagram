import{j as r}from"./jsx-runtime-CGpYA4L6.js";import"./index-CleY8y_P.js";import{L as m}from"./Loader-DUht5tEw.js";import{G as p}from"./GridPostList-CFDhzv4K.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CJuOCMJj.js";import"./index-C2jgcCTd.js";import"./index-Df8taAry.js";import"./AuthContext-CP3wofEh.js";import"./queriesAndMutations-C1C6liHq.js";import"./QueryClientProvider-CirB6fzW.js";import"./PostStats-C_e7IZNj.js";import"./utils-sGJAxcXv.js";const o=({isSearchFetching:t,searchedPosts:s})=>t?r.jsx(m,{}):s&&s.documents.length>0?r.jsx(p,{posts:s.documents}):r.jsx("p",{className:"text-light-4 mt-10 text-center w-full",children:"No results found"}),n=o;try{o.displayName="SearchResults",o.__docgenInfo={description:"",displayName:"SearchResults",props:{isSearchFetching:{defaultValue:null,description:"",name:"isSearchFetching",required:!0,type:{name:"boolean"}},searchedPosts:{defaultValue:null,description:"",name:"searchedPosts",required:!0,type:{name:"Document[]"}}}}}catch{}const L={title:"Twigstagram/shared/SearchResults",component:n},u=[],l=t=>r.jsx(n,{...t}),e=l.bind({});e.args={isSearchFetching:!1,searchedPosts:{documents:u}};var a,c,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"args => <SearchResults {...args} />",...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,L as default};
