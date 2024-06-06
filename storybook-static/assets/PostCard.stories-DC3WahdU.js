import{j as e}from"./jsx-runtime-CGpYA4L6.js";import{R as u}from"./index-CleY8y_P.js";import{u as p}from"./AuthContext-CP3wofEh.js";import{f as x}from"./utils-sGJAxcXv.js";import{L as o}from"./index-CJuOCMJj.js";import{P as h}from"./PostStats-C_e7IZNj.js";import{Q as g}from"./QueryClientProvider-CirB6fzW.js";import{M as f}from"./index-Df8taAry.js";import{Q as j}from"./queryClient-Oa8pBn12.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./queriesAndMutations-C1C6liHq.js";import"./index-C2jgcCTd.js";import"./Loader-DUht5tEw.js";const l=({post:r})=>{var s;const{user:a}=p();if(r.creator)return e.jsxs("div",{className:"post-card",children:[e.jsxs("div",{className:"flex-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(o,{to:`/profile/${r.creator.$id}`,children:e.jsx("img",{src:((s=r==null?void 0:r.creator)==null?void 0:s.imageUrl)||"/assets/icons/profile-placeholder.svg",alt:"creator",className:"rounded-full w-12 lg:h-12"})}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("p",{className:"base-medium lg:body-bold text-light-1",children:r.creator.name}),e.jsxs("div",{className:"flex-center gap-2 text-light-3",children:[e.jsx("p",{className:"subtle=semibold lg:small-regular",children:x(r.$createdAt)}),e.jsx("p",{className:"subtle-semibold lg:small-regular",children:r.location})]})]})]}),e.jsx(o,{to:`/update-post/${r.$id}`,className:`${a.id!==r.creator.$id&&"hidden"}`,children:e.jsx("img",{src:"/assets/icons/edit.svg",alt:"edit",width:20,height:20})})]}),e.jsxs(o,{to:`/posts/${r.$id}`,children:[e.jsxs("div",{className:"small-medium lg:base-medium py-5",children:[e.jsx("p",{children:r.caption}),e.jsx("ul",{className:"flex gap-1 mt-2",children:r.tags.map(i=>e.jsxs("li",{className:"text-light-3",children:["#",i]},i))})]}),e.jsx("img",{src:r.imageUrl||"/assets/icons/profile-placeholder.svg",className:"post-card_img",alt:"post image"})]}),e.jsx(h,{post:r,userId:a.id})]})},m=l;try{l.displayName="PostCard",l.__docgenInfo={description:"",displayName:"PostCard",props:{post:{defaultValue:null,description:"",name:"post",required:!0,type:{name:"Document"}}}}}catch{}const q={title:"Twigstagram/shared/PostCard",component:m,parameters:{layout:"fullscreen"}},v=new j,y=({children:r,user:a})=>{const s=()=>({user:a}),i=u.createContext({user:s().user});return e.jsx(i.Provider,{value:s(),children:r})},C=r=>e.jsx(g,{client:v,children:e.jsx(f,{children:e.jsx(y,{user:r.user,children:e.jsx(m,{...r})})})}),t=C.bind({});t.args={user:{id:"user_id",imageUrl:"/assets/icons/profile-placeholder.svg"},post:{$id:"post_id",creator:{$id:"creator_id",name:"John Doe",imageUrl:"/assets/icons/profile-placeholder.svg"},$createdAt:"2023-05-15T12:34:56.789Z",caption:"This is an example caption for the post.",imageUrl:"https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXN8ZW58MHx8MHx8fDA%3D",location:"Example Location",tags:["nature","travel","adventure"],likes:[],comments:[]}};var c,d,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => <QueryClientProvider client={queryClient}>
    <MemoryRouter>
      <MockAuthProvider user={args.user}>
        <PostCard {...args} />
      </MockAuthProvider>
    </MemoryRouter>
  </QueryClientProvider>`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};const H=["Default"];export{t as Default,H as __namedExportsOrder,q as default};
