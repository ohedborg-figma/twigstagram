import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{r as t}from"./index-CleY8y_P.js";import{u as p}from"./index-CI3MexTV.js";import{B as u}from"./button-Xx2KT_8X.js";const s=({fieldChange:l,mediaUrl:i})=>{const[x,o]=t.useState([]),[a,c]=t.useState(i),n=t.useCallback(r=>{o(r),l(r),c(URL.createObjectURL(r[0]))},[l]),{getRootProps:d,getInputProps:m}=p({onDrop:n,accept:"image/*",multiple:!1});return e.jsxs("div",{...d(),className:"flex flex-center flex-col bg-dark-3 rounded-x1 cursor-pointer",children:[e.jsx("input",{...m(),className:"cursor-pointer"}),a?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-1 justify-center w-full p-5 lg:p-10",children:e.jsx("img",{src:a,alt:"image",className:"file_uploader-img",style:{maxWidth:"100%",maxHeight:"100%",objectFit:"cover",objectPosition:"center"}})}),e.jsx("p",{className:"file_uploader-label",children:"Click or drag photo to replace"})]}):e.jsxs("div",{className:"file_uploader-box",children:[e.jsx("img",{src:"/assets/icons/file-upload.svg",width:96,height:77,alt:"file-upload"}),e.jsx("h3",{className:"base-medium text-light-2 mb-2 mt-6",children:"Drag photo here"}),e.jsx("p",{className:"text-light-4 small-regular mb-6",children:"SVG, PNG, JPG"}),e.jsx(u,{className:"shad-button_dark_4",children:"Select from computer"})]})]})},_=s;try{s.displayName="FileUploader",s.__docgenInfo={description:"",displayName:"FileUploader",props:{fieldChange:{defaultValue:null,description:"",name:"fieldChange",required:!0,type:{name:"(files: File[]) => void"}},mediaUrl:{defaultValue:null,description:"",name:"mediaUrl",required:!0,type:{name:"string"}}}}}catch{}export{_ as F};
