import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-BRsgvuRh.js";import{t as r}from"./utils-CWN7nxjK.js";var i=e(t(),1),a=n(),o=({number:e=20,color:t=`#94A3B8`,trailColor:n=`#64748B`,tailLength:o=60,angle:s=215,minDelay:c=.2,maxDelay:l=1.2,minDuration:u=2,maxDuration:d=8,className:f,children:p,style:m,...h})=>{let[g,_]=(0,i.useState)(!1);(0,i.useEffect)(()=>{_(!0)},[]);let v=(0,i.useMemo)(()=>Array.from({length:e}).map(()=>({top:`0px`,left:`${Math.floor(Math.random()*800)-200}px`,animationDelay:`${(Math.random()*(l-c)+c).toFixed(2)}s`,animationDuration:`${Math.floor(Math.random()*(d-u)+u)}s`})),[l,d,c,u,e]);return(0,a.jsxs)(`div`,{className:r(`pointer-events-none absolute inset-0 overflow-hidden`,f),style:m,"aria-hidden":`true`,...h,children:[(0,a.jsx)(`style`,{children:`
        @keyframes easyui-meteor-streak {
          0% {
            transform: rotate(${s}deg) translateX(0);
            opacity: 1;
          }
          70% {
            opacity: 1;
          }
          100% {
            transform: rotate(${s}deg) translateX(-600px);
            opacity: 0;
          }
        }
        .easyui-meteor-item {
          animation-name: easyui-meteor-streak;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: transform, opacity;
        }
        @media (prefers-reduced-motion: reduce) {
          .easyui-meteor-item {
            animation: none !important;
            display: none !important;
          }
        }
      `}),g&&v.map((e,r)=>(0,a.jsx)(`span`,{className:`easyui-meteor-item absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full`,style:{backgroundColor:t,boxShadow:`0 0 0 1px rgba(255, 255, 255, 0.12), 0 0 8px 1px ${t}`,top:e.top,left:e.left,animationDelay:e.animationDelay,animationDuration:e.animationDuration},children:(0,a.jsx)(`span`,{className:`pointer-events-none absolute top-1/2 -translate-y-1/2 block`,style:{width:`${o}px`,height:`1px`,background:`linear-gradient(to right, ${n}, transparent)`}})},`meteor-${r}`)),p&&(0,a.jsx)(`div`,{className:`pointer-events-auto relative z-10 h-full w-full flex items-center justify-center`,children:p})]})};export{o as Meteors,o as default};