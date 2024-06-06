import{j as _}from"./jsx-runtime-CGpYA4L6.js";import{r as o,R as A}from"./index-CleY8y_P.js";import{_ as R}from"./extends-CCbyfPlC.js";import{R as ze,r as ge}from"./index-C2jgcCTd.js";import{a as k,$ as pe,c as Ze}from"./index-BYV5VcoI.js";import{$ as I,a as Ce}from"./index-v4o0YGA1.js";import{c as U}from"./utils-sGJAxcXv.js";import"./_commonjsHelpers-Cpj98o6Y.js";function P(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function _e(e,t=[]){let n=[];function r(a,l){const c=o.createContext(l),d=n.length;n=[...n,l];function i(f){const{scope:x,children:T,...$}=f,v=(x==null?void 0:x[e][d])||c,u=o.useMemo(()=>$,Object.values($));return o.createElement(v.Provider,{value:u},T)}function p(f,x){const T=(x==null?void 0:x[e][d])||c,$=o.useContext(T);if($)return $;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${a}\``)}return i.displayName=a+"Provider",[i,p]}const s=()=>{const a=n.map(l=>o.createContext(l));return function(c){const d=(c==null?void 0:c[e])||a;return o.useMemo(()=>({[`__scope${e}`]:{...c,[e]:d}}),[c,d])}};return s.scopeName=e,[r,Ge(s,...t)]}function Ge(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(a){const l=r.reduce((c,{useScope:d,scopeName:i})=>{const f=d(a)[`__scope${i}`];return{...c,...f}},{});return o.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function Je(e){const t=e+"CollectionProvider",[n,r]=_e(t),[s,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),l=T=>{const{scope:$,children:v}=T,u=A.useRef(null),w=A.useRef(new Map).current;return A.createElement(s,{scope:$,itemMap:w,collectionRef:u},v)},c=e+"CollectionSlot",d=A.forwardRef((T,$)=>{const{scope:v,children:u}=T,w=a(c,v),b=k($,w.collectionRef);return A.createElement(pe,{ref:b},u)}),i=e+"CollectionItemSlot",p="data-radix-collection-item",f=A.forwardRef((T,$)=>{const{scope:v,children:u,...w}=T,b=A.useRef(null),h=k($,b),y=a(i,v);return A.useEffect(()=>(y.itemMap.set(b,{ref:b,...w}),()=>void y.itemMap.delete(b))),A.createElement(pe,{[p]:"",ref:h},u)});function x(T){const $=a(e+"CollectionConsumer",T);return A.useCallback(()=>{const u=$.collectionRef.current;if(!u)return[];const w=Array.from(u.querySelectorAll(`[${p}]`));return Array.from($.itemMap.values()).sort((y,g)=>w.indexOf(y.ref.current)-w.indexOf(g.ref.current))},[$.collectionRef,$.itemMap])}return[{Provider:l,Slot:d,ItemSlot:f},x,r]}function L(e){const t=o.useRef(e);return o.useEffect(()=>{t.current=e}),o.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}function Qe(e,t=globalThis==null?void 0:globalThis.document){const n=L(e);o.useEffect(()=>{const r=s=>{s.key==="Escape"&&n(s)};return t.addEventListener("keydown",r),()=>t.removeEventListener("keydown",r)},[n,t])}const ae="dismissableLayer.update",et="dismissableLayer.pointerDownOutside",tt="dismissableLayer.focusOutside";let me;const Pe=o.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ot=o.forwardRef((e,t)=>{var n;const{disableOutsidePointerEvents:r=!1,onEscapeKeyDown:s,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:c,onDismiss:d,...i}=e,p=o.useContext(Pe),[f,x]=o.useState(null),T=(n=f==null?void 0:f.ownerDocument)!==null&&n!==void 0?n:globalThis==null?void 0:globalThis.document,[,$]=o.useState({}),v=k(t,E=>x(E)),u=Array.from(p.layers),[w]=[...p.layersWithOutsidePointerEventsDisabled].slice(-1),b=u.indexOf(w),h=f?u.indexOf(f):-1,y=p.layersWithOutsidePointerEventsDisabled.size>0,g=h>=b,C=rt(E=>{const D=E.target,V=[...p.branches].some(S=>S.contains(D));!g||V||(a==null||a(E),c==null||c(E),E.defaultPrevented||d==null||d())},T),N=st(E=>{const D=E.target;[...p.branches].some(S=>S.contains(D))||(l==null||l(E),c==null||c(E),E.defaultPrevented||d==null||d())},T);return Qe(E=>{h===p.layers.size-1&&(s==null||s(E),!E.defaultPrevented&&d&&(E.preventDefault(),d()))},T),o.useEffect(()=>{if(f)return r&&(p.layersWithOutsidePointerEventsDisabled.size===0&&(me=T.body.style.pointerEvents,T.body.style.pointerEvents="none"),p.layersWithOutsidePointerEventsDisabled.add(f)),p.layers.add(f),ve(),()=>{r&&p.layersWithOutsidePointerEventsDisabled.size===1&&(T.body.style.pointerEvents=me)}},[f,T,r,p]),o.useEffect(()=>()=>{f&&(p.layers.delete(f),p.layersWithOutsidePointerEventsDisabled.delete(f),ve())},[f,p]),o.useEffect(()=>{const E=()=>$({});return document.addEventListener(ae,E),()=>document.removeEventListener(ae,E)},[]),o.createElement(I.div,R({},i,{ref:v,style:{pointerEvents:y?g?"auto":"none":void 0,...e.style},onFocusCapture:P(e.onFocusCapture,N.onFocusCapture),onBlurCapture:P(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:P(e.onPointerDownCapture,C.onPointerDownCapture)}))}),nt=o.forwardRef((e,t)=>{const n=o.useContext(Pe),r=o.useRef(null),s=k(t,r);return o.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),o.createElement(I.div,R({},e,{ref:s}))});function rt(e,t=globalThis==null?void 0:globalThis.document){const n=L(e),r=o.useRef(!1),s=o.useRef(()=>{});return o.useEffect(()=>{const a=c=>{if(c.target&&!r.current){let i=function(){Re(et,n,d,{discrete:!0})};const d={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=i,t.addEventListener("click",s.current,{once:!0})):i()}else t.removeEventListener("click",s.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",a),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function st(e,t=globalThis==null?void 0:globalThis.document){const n=L(e),r=o.useRef(!1);return o.useEffect(()=>{const s=a=>{a.target&&!r.current&&Re(tt,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ve(){const e=new CustomEvent(ae);document.dispatchEvent(e)}function Re(e,t,n,{discrete:r}){const s=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?Ce(s,a):s.dispatchEvent(a)}const at=ot,it=nt,ct=o.forwardRef((e,t)=>{var n;const{container:r=globalThis==null||(n=globalThis.document)===null||n===void 0?void 0:n.body,...s}=e;return r?ze.createPortal(o.createElement(I.div,R({},s,{ref:t})),r):null}),ie=globalThis!=null&&globalThis.document?o.useLayoutEffect:()=>{};function dt(e,t){return o.useReducer((n,r)=>{const s=t[n][r];return s??n},e)}const Ne=e=>{const{present:t,children:n}=e,r=lt(t),s=typeof n=="function"?n({present:r.isPresent}):o.Children.only(n),a=k(r.ref,s.ref);return typeof n=="function"||r.isPresent?o.cloneElement(s,{ref:a}):null};Ne.displayName="Presence";function lt(e){const[t,n]=o.useState(),r=o.useRef({}),s=o.useRef(e),a=o.useRef("none"),l=e?"mounted":"unmounted",[c,d]=dt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return o.useEffect(()=>{const i=z(r.current);a.current=c==="mounted"?i:"none"},[c]),ie(()=>{const i=r.current,p=s.current;if(p!==e){const x=a.current,T=z(i);e?d("MOUNT"):T==="none"||(i==null?void 0:i.display)==="none"?d("UNMOUNT"):d(p&&x!==T?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,d]),ie(()=>{if(t){const i=f=>{const T=z(r.current).includes(f.animationName);f.target===t&&T&&ge.flushSync(()=>d("ANIMATION_END"))},p=f=>{f.target===t&&(a.current=z(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else d("ANIMATION_END")},[t,d]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:o.useCallback(i=>{i&&(r.current=getComputedStyle(i)),n(i)},[])}}function z(e){return(e==null?void 0:e.animationName)||"none"}function ut({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,s]=ft({defaultProp:t,onChange:n}),a=e!==void 0,l=a?e:r,c=L(n),d=o.useCallback(i=>{if(a){const f=typeof i=="function"?i(e):i;f!==e&&c(f)}else s(i)},[a,e,s,c]);return[l,d]}function ft({defaultProp:e,onChange:t}){const n=o.useState(e),[r]=n,s=o.useRef(r),a=L(t);return o.useEffect(()=>{s.current!==r&&(a(r),s.current=r)},[r,s,a]),n}const De=o.forwardRef((e,t)=>o.createElement(I.span,R({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),Se="ToastProvider",[ue,pt,mt]=Je("Toast"),[Oe,Zt]=_e("Toast",[mt]),[vt,oe]=Oe(Se),Ae=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:a=50,children:l}=e,[c,d]=o.useState(null),[i,p]=o.useState(0),f=o.useRef(!1),x=o.useRef(!1);return o.createElement(ue.Provider,{scope:t},o.createElement(vt,{scope:t,label:n,duration:r,swipeDirection:s,swipeThreshold:a,toastCount:i,viewport:c,onViewportChange:d,onToastAdd:o.useCallback(()=>p(T=>T+1),[]),onToastRemove:o.useCallback(()=>p(T=>T-1),[]),isFocusedToastEscapeKeyDownRef:f,isClosePausedRef:x},l))};Ae.propTypes={label(e){if(e.label&&typeof e.label=="string"&&!e.label.trim()){const t=`Invalid prop \`label\` supplied to \`${Se}\`. Expected non-empty \`string\`.`;return new Error(t)}return null}};const bt="ToastViewport",Tt=["F8"],ce="toast.viewportPause",de="toast.viewportResume",$t=o.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Tt,label:s="Notifications ({hotkey})",...a}=e,l=oe(bt,n),c=pt(n),d=o.useRef(null),i=o.useRef(null),p=o.useRef(null),f=o.useRef(null),x=k(t,f,l.onViewportChange),T=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),$=l.toastCount>0;o.useEffect(()=>{const u=w=>{var b;r.every(y=>w[y]||w.code===y)&&((b=f.current)===null||b===void 0||b.focus())};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[r]),o.useEffect(()=>{const u=d.current,w=f.current;if($&&u&&w){const b=()=>{if(!l.isClosePausedRef.current){const C=new CustomEvent(ce);w.dispatchEvent(C),l.isClosePausedRef.current=!0}},h=()=>{if(l.isClosePausedRef.current){const C=new CustomEvent(de);w.dispatchEvent(C),l.isClosePausedRef.current=!1}},y=C=>{!u.contains(C.relatedTarget)&&h()},g=()=>{u.contains(document.activeElement)||h()};return u.addEventListener("focusin",b),u.addEventListener("focusout",y),u.addEventListener("pointermove",b),u.addEventListener("pointerleave",g),window.addEventListener("blur",b),window.addEventListener("focus",h),()=>{u.removeEventListener("focusin",b),u.removeEventListener("focusout",y),u.removeEventListener("pointermove",b),u.removeEventListener("pointerleave",g),window.removeEventListener("blur",b),window.removeEventListener("focus",h)}}},[$,l.isClosePausedRef]);const v=o.useCallback(({tabbingDirection:u})=>{const b=c().map(h=>{const y=h.ref.current,g=[y,...It(y)];return u==="forwards"?g:g.reverse()});return(u==="forwards"?b.reverse():b).flat()},[c]);return o.useEffect(()=>{const u=f.current;if(u){const w=b=>{const h=b.altKey||b.ctrlKey||b.metaKey;if(b.key==="Tab"&&!h){const E=document.activeElement,D=b.shiftKey;if(b.target===u&&D){var g;(g=i.current)===null||g===void 0||g.focus();return}const F=v({tabbingDirection:D?"backwards":"forwards"}),X=F.findIndex(m=>m===E);if(se(F.slice(X+1)))b.preventDefault();else{var C,N;D?(C=i.current)===null||C===void 0||C.focus():(N=p.current)===null||N===void 0||N.focus()}}};return u.addEventListener("keydown",w),()=>u.removeEventListener("keydown",w)}},[c,v]),o.createElement(it,{ref:d,role:"region","aria-label":s.replace("{hotkey}",T),tabIndex:-1,style:{pointerEvents:$?void 0:"none"}},$&&o.createElement(be,{ref:i,onFocusFromOutsideViewport:()=>{const u=v({tabbingDirection:"forwards"});se(u)}}),o.createElement(ue.Slot,{scope:n},o.createElement(I.ol,R({tabIndex:-1},a,{ref:x}))),$&&o.createElement(be,{ref:p,onFocusFromOutsideViewport:()=>{const u=v({tabbingDirection:"backwards"});se(u)}}))}),Et="ToastFocusProxy",be=o.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...s}=e,a=oe(Et,n);return o.createElement(De,R({"aria-hidden":!0,tabIndex:0},s,{ref:t,style:{position:"fixed"},onFocus:l=>{var c;const d=l.relatedTarget;!((c=a.viewport)!==null&&c!==void 0&&c.contains(d))&&r()}}))}),ne="Toast",wt="toast.swipeStart",ht="toast.swipeMove",yt="toast.swipeCancel",xt="toast.swipeEnd",gt=o.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:s,onOpenChange:a,...l}=e,[c=!0,d]=ut({prop:r,defaultProp:s,onChange:a});return o.createElement(Ne,{present:n||c},o.createElement(Ie,R({open:c},l,{ref:t,onClose:()=>d(!1),onPause:L(e.onPause),onResume:L(e.onResume),onSwipeStart:P(e.onSwipeStart,i=>{i.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(e.onSwipeMove,i=>{const{x:p,y:f}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","move"),i.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${p}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${f}px`)}),onSwipeCancel:P(e.onSwipeCancel,i=>{i.currentTarget.setAttribute("data-swipe","cancel"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(e.onSwipeEnd,i=>{const{x:p,y:f}=i.detail.delta;i.currentTarget.setAttribute("data-swipe","end"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),i.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),i.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${p}px`),i.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${f}px`),d(!1)})})))}),[Ct,_t]=Oe(ne,{onClose(){}}),Ie=o.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:s,open:a,onClose:l,onEscapeKeyDown:c,onPause:d,onResume:i,onSwipeStart:p,onSwipeMove:f,onSwipeCancel:x,onSwipeEnd:T,...$}=e,v=oe(ne,n),[u,w]=o.useState(null),b=k(t,m=>w(m)),h=o.useRef(null),y=o.useRef(null),g=s||v.duration,C=o.useRef(0),N=o.useRef(g),E=o.useRef(0),{onToastAdd:D,onToastRemove:V}=v,S=L(()=>{var m;(u==null?void 0:u.contains(document.activeElement))&&((m=v.viewport)===null||m===void 0||m.focus()),l()}),F=o.useCallback(m=>{!m||m===1/0||(window.clearTimeout(E.current),C.current=new Date().getTime(),E.current=window.setTimeout(S,m))},[S]);o.useEffect(()=>{const m=v.viewport;if(m){const O=()=>{F(N.current),i==null||i()},M=()=>{const K=new Date().getTime()-C.current;N.current=N.current-K,window.clearTimeout(E.current),d==null||d()};return m.addEventListener(ce,M),m.addEventListener(de,O),()=>{m.removeEventListener(ce,M),m.removeEventListener(de,O)}}},[v.viewport,g,d,i,F]),o.useEffect(()=>{a&&!v.isClosePausedRef.current&&F(g)},[a,g,v.isClosePausedRef,F]),o.useEffect(()=>(D(),()=>V()),[D,V]);const X=o.useMemo(()=>u?ke(u):null,[u]);return v.viewport?o.createElement(o.Fragment,null,X&&o.createElement(Pt,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0},X),o.createElement(Ct,{scope:n,onClose:S},ge.createPortal(o.createElement(ue.ItemSlot,{scope:n},o.createElement(at,{asChild:!0,onEscapeKeyDown:P(c,()=>{v.isFocusedToastEscapeKeyDownRef.current||S(),v.isFocusedToastEscapeKeyDownRef.current=!1})},o.createElement(I.li,R({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":v.swipeDirection},$,{ref:b,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:P(e.onKeyDown,m=>{m.key==="Escape"&&(c==null||c(m.nativeEvent),m.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,S()))}),onPointerDown:P(e.onPointerDown,m=>{m.button===0&&(h.current={x:m.clientX,y:m.clientY})}),onPointerMove:P(e.onPointerMove,m=>{if(!h.current)return;const O=m.clientX-h.current.x,M=m.clientY-h.current.y,K=!!y.current,j=["left","right"].includes(v.swipeDirection),H=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,He=j?H(0,O):0,Ye=j?0:H(0,M),re=m.pointerType==="touch"?10:2,Y={x:He,y:Ye},fe={originalEvent:m,delta:Y};K?(y.current=Y,Z(ht,f,fe,{discrete:!1})):Te(Y,v.swipeDirection,re)?(y.current=Y,Z(wt,p,fe,{discrete:!1}),m.target.setPointerCapture(m.pointerId)):(Math.abs(O)>re||Math.abs(M)>re)&&(h.current=null)}),onPointerUp:P(e.onPointerUp,m=>{const O=y.current,M=m.target;if(M.hasPointerCapture(m.pointerId)&&M.releasePointerCapture(m.pointerId),y.current=null,h.current=null,O){const K=m.currentTarget,j={originalEvent:m,delta:O};Te(O,v.swipeDirection,v.swipeThreshold)?Z(xt,T,j,{discrete:!0}):Z(yt,x,j,{discrete:!0}),K.addEventListener("click",H=>H.preventDefault(),{once:!0})}})})))),v.viewport))):null});Ie.propTypes={type(e){if(e.type&&!["foreground","background"].includes(e.type)){const t=`Invalid prop \`type\` supplied to \`${ne}\`. Expected \`foreground | background\`.`;return new Error(t)}return null}};const Pt=e=>{const{__scopeToast:t,children:n,...r}=e,s=oe(ne,t),[a,l]=o.useState(!1),[c,d]=o.useState(!1);return Ot(()=>l(!0)),o.useEffect(()=>{const i=window.setTimeout(()=>d(!0),1e3);return()=>window.clearTimeout(i)},[]),c?null:o.createElement(ct,{asChild:!0},o.createElement(De,r,a&&o.createElement(o.Fragment,null,s.label," ",n)))},Rt=o.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.createElement(I.div,R({},r,{ref:t}))}),Nt=o.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.createElement(I.div,R({},r,{ref:t}))}),Dt="ToastAction",Le=o.forwardRef((e,t)=>{const{altText:n,...r}=e;return n?o.createElement(Fe,{altText:n,asChild:!0},o.createElement(Me,R({},r,{ref:t}))):null});Le.propTypes={altText(e){return e.altText?null:new Error(`Missing prop \`altText\` expected on \`${Dt}\``)}};const St="ToastClose",Me=o.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,s=_t(St,n);return o.createElement(Fe,{asChild:!0},o.createElement(I.button,R({type:"button"},r,{ref:t,onClick:P(e.onClick,s.onClose)})))}),Fe=o.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...s}=e;return o.createElement(I.div,R({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0},s,{ref:t}))});function ke(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),At(r)){const s=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!s)if(a){const l=r.dataset.radixToastAnnounceAlt;l&&t.push(l)}else t.push(...ke(r))}}),t}function Z(e,t,n,{discrete:r}){const s=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?Ce(s,a):s.dispatchEvent(a)}const Te=(e,t,n=0)=>{const r=Math.abs(e.x),s=Math.abs(e.y),a=r>s;return t==="left"||t==="right"?a&&r>n:!a&&s>n};function Ot(e=()=>{}){const t=L(e);ie(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function At(e){return e.nodeType===e.ELEMENT_NODE}function It(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function se(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}const Lt=Ae,Ve=$t,Ue=gt,Ke=Rt,je=Nt,We=Le,Be=Me;/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qe=(...e)=>e.filter((t,n,r)=>!!t&&r.indexOf(t)===n).join(" ");/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ft={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=o.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:a,iconNode:l,...c},d)=>o.createElement("svg",{ref:d,...Ft,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:qe("lucide",s),...c},[...l.map(([i,p])=>o.createElement(i,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(e,t)=>{const n=o.forwardRef(({className:r,...s},a)=>o.createElement(kt,{ref:a,iconNode:t,className:qe(`lucide-${Mt(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.376.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=Vt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),le=Lt,G=o.forwardRef(({className:e,...t},n)=>_.jsx(Ve,{ref:n,className:U("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));G.displayName=Ve.displayName;const Kt=Ze("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),q=o.forwardRef(({className:e,variant:t,...n},r)=>_.jsx(Ue,{ref:r,className:U(Kt({variant:t}),e),...n}));q.displayName=Ue.displayName;const J=o.forwardRef(({className:e,...t},n)=>_.jsx(We,{ref:n,className:U("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));J.displayName=We.displayName;const Q=o.forwardRef(({className:e,...t},n)=>_.jsx(Be,{ref:n,className:U("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:_.jsx(Ut,{className:"h-4 w-4"})}));Q.displayName=Be.displayName;const ee=o.forwardRef(({className:e,...t},n)=>_.jsx(Ke,{ref:n,className:U("text-sm font-semibold",e),...t}));ee.displayName=Ke.displayName;const te=o.forwardRef(({className:e,...t},n)=>_.jsx(je,{ref:n,className:U("text-sm opacity-90",e),...t}));te.displayName=je.displayName;try{le.displayName="ToastProvider",le.__docgenInfo={description:"",displayName:"ToastProvider",props:{}}}catch{}try{G.displayName="ToastViewport",G.__docgenInfo={description:"",displayName:"ToastViewport",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="Toast",q.__docgenInfo={description:"",displayName:"Toast",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:'"default" | "destructive" | null'}}}}}catch{}try{ee.displayName="ToastTitle",ee.__docgenInfo={description:"",displayName:"ToastTitle",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{te.displayName="ToastDescription",te.__docgenInfo={description:"",displayName:"ToastDescription",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{Q.displayName="ToastClose",Q.__docgenInfo={description:"",displayName:"ToastClose",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{J.displayName="ToastAction",J.__docgenInfo={description:"",displayName:"ToastAction",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const Gt={title:"Twigstagram/ui/Toast",component:q},Xe=e=>_.jsx(le,{children:_.jsx(G,{children:_.jsxs(q,{...e,children:[_.jsx(ee,{children:"This is a toast title"}),_.jsx(te,{children:"This is a toast description"}),_.jsx(Q,{}),_.jsx(J,{children:"Undo"})]})})}),W=Xe.bind({});W.args={};const B=Xe.bind({});B.args={variant:"destructive"};var $e,Ee,we;W.parameters={...W.parameters,docs:{...($e=W.parameters)==null?void 0:$e.docs,source:{originalSource:`args => <ToastProvider>
    <ToastViewport>
      <Toast {...args}>
        <ToastTitle>This is a toast title</ToastTitle>
        <ToastDescription>This is a toast description</ToastDescription>
        <ToastClose />
        <ToastAction>Undo</ToastAction>
      </Toast>
    </ToastViewport>
  </ToastProvider>`,...(we=(Ee=W.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var he,ye,xe;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`args => <ToastProvider>
    <ToastViewport>
      <Toast {...args}>
        <ToastTitle>This is a toast title</ToastTitle>
        <ToastDescription>This is a toast description</ToastDescription>
        <ToastClose />
        <ToastAction>Undo</ToastAction>
      </Toast>
    </ToastViewport>
  </ToastProvider>`,...(xe=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const Jt=["DefaultToast","DestructiveToast"];export{W as DefaultToast,B as DestructiveToast,Jt as __namedExportsOrder,Gt as default};
