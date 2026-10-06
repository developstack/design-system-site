import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-BysRXe6T.js";import{t as r}from"./utils-CWN7nxjK.js";var i=e(t(),1),a=n(),o=(0,i.forwardRef)(({children:e,...t},n)=>{if(i.isValidElement(e)){let a=e;return i.cloneElement(a,{...t,...a.props,ref:n,className:r(t.className,a.props.className)})}return null});o.displayName=`Slot`;function s({variant:e=`default`,size:t=`default`,className:n}={}){let i=r(`relative cursor-pointer group transition-all duration-200 select-none`,`inline-flex items-center justify-center gap-2 shrink-0`,`rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50`,`text-sm font-semibold whitespace-nowrap`,`disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]`,`[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0`),a={default:r(`border-0 text-white shadow-sm`,`bg-[linear-gradient(#0c0d0e,#0c0d0e),linear-gradient(#0c0d0e_50%,rgba(12,13,14,0.6)_80%,rgba(12,13,14,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]`,`bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box]`,`[border:calc(0.125rem)_solid_transparent]`,`hover:brightness-110`,`dark:bg-[linear-gradient(#0c0d0e,#0c0d0e),linear-gradient(#0c0d0e_50%,rgba(12,13,14,0.6)_80%,rgba(12,13,14,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]`),outline:r(`border border-input border-b-transparent text-slate-100 shadow-sm`,`bg-[linear-gradient(#18191c,#18191c),linear-gradient(#18191c_50%,rgba(24,25,28,0.6)_80%,rgba(24,25,28,0)),linear-gradient(90deg,var(--color-1),var(--color-5),var(--color-3),var(--color-4),var(--color-2))]`,`bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box]`,`hover:brightness-110`)};return r(i,a[e],{default:`h-10 px-5 py-2`,sm:`h-8 px-3.5 text-xs rounded-lg gap-1.5`,lg:`h-12 px-8 text-base rounded-2xl gap-2.5`,icon:`h-10 w-10 p-0 rounded-xl justify-center`}[t],n)}var c=(0,i.forwardRef)(({className:e,variant:t=`default`,size:n=`default`,asChild:i=!1,color1:c=`hsl(0 100% 63%)`,color2:l=`hsl(270 100% 63%)`,color3:u=`hsl(210 100% 63%)`,color4:d=`hsl(195 100% 63%)`,color5:f=`hsl(90 100% 63%)`,speed:p=3,glow:m=!0,style:h,children:g,..._},v)=>{let y=i?o:`button`,b={"--color-1":c,"--color-2":l,"--color-3":u,"--color-4":d,"--color-5":f,"--rainbow-speed":`${p}s`,...h};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:`
          @keyframes easyui-rainbow-pan {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 200% 50%;
            }
          }
          .easyui-rainbow-active {
            animation: easyui-rainbow-pan var(--rainbow-speed, 3s) linear infinite;
          }
          .easyui-rainbow-glow::before {
            content: '';
            position: absolute;
            bottom: -22%;
            left: 50%;
            z-index: -1;
            height: 30%;
            width: 75%;
            transform: translateX(-50%);
            animation: easyui-rainbow-pan var(--rainbow-speed, 3s) linear infinite;
            background: linear-gradient(90deg, var(--color-1), var(--color-5), var(--color-3), var(--color-4), var(--color-2));
            background-size: 200%;
            filter: blur(12px);
            opacity: 0.85;
            transition: opacity 0.3s ease, filter 0.3s ease;
          }
          .easyui-rainbow-glow:hover::before {
            opacity: 1;
            filter: blur(16px);
          }
          @media (prefers-reduced-motion: reduce) {
            .easyui-rainbow-active,
            .easyui-rainbow-glow::before {
              animation: none !important;
            }
          }
        `}),(0,a.jsx)(y,{"data-slot":`button`,ref:v,className:r(`easyui-rainbow-active`,m&&`easyui-rainbow-glow`,s({variant:t,size:n,className:e})),style:b,..._,children:g})]})});c.displayName=`RainbowButton`;export{c as RainbowButton,c as default,s as rainbowButtonVariants};