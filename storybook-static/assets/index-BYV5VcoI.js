import{_ as h}from"./extends-CCbyfPlC.js";import{r as l}from"./index-CleY8y_P.js";function A(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function E(...e){return t=>e.forEach(n=>A(n,t))}function w(...e){return l.useCallback(E(...e),e)}const j=l.forwardRef((e,t)=>{const{children:n,...r}=e,i=l.Children.toArray(n),o=i.find(P);if(o){const a=o.props.children,s=i.map(m=>m===o?l.Children.count(a)>1?l.Children.only(null):l.isValidElement(a)?a.props.children:null:m);return l.createElement($,h({},r,{ref:t}),l.isValidElement(a)?l.cloneElement(a,void 0,s):null)}return l.createElement($,h({},r,{ref:t}),n)});j.displayName="Slot";const $=l.forwardRef((e,t)=>{const{children:n,...r}=e;return l.isValidElement(n)?l.cloneElement(n,{...S(r,n.props),ref:t?E(t,n.ref):n.ref}):l.Children.count(n)>1?l.Children.only(null):null});$.displayName="SlotClone";const p=({children:e})=>l.createElement(l.Fragment,null,e);function P(e){return l.isValidElement(e)&&e.type===p}function S(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...s)=>{o(...s),i(...s)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function V(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=V(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function k(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=V(e))&&(r&&(r+=" "),r+=t);return r}const C=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,b=k,H=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return b(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,a=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],f=o==null?void 0:o[c];if(u===null)return null;const d=C(u)||C(f);return i[c][d]}),s=n&&Object.entries(n).reduce((c,u)=>{let[f,d]=u;return d===void 0||(c[f]=d),c},{}),m=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:f,className:d,...N}=u;return Object.entries(N).every(x=>{let[y,v]=x;return Array.isArray(v)?v.includes({...o,...s}[y]):{...o,...s}[y]===v})?[...c,f,d]:c},[]);return b(e,a,m,n==null?void 0:n.class,n==null?void 0:n.className)};export{j as $,w as a,H as c};
