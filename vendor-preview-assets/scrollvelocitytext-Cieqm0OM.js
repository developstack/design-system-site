import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-BRsgvuRh.js";import{t as r}from"./utils-CWN7nxjK.js";var i=e(t(),1),a=n(),o=i.forwardRef(({text:e,as:t=`span`,className:n,expandDistance:o=500,intensity:s=1,minLetterSpacing:c=0,maxLetterSpacing:l=1,maxScale:u=1.6,fadeStart:d=.4,smoothingMs:f=400,transformOrigin:p=`center center`,scrollContainerRef:m,style:h,...g},_)=>{let v=t,y=`scroll-velocity-text-${i.useId().replace(/[^a-zA-Z0-9-_]/g,``)}`,b=i.useRef(null),x=i.useRef(0),S=i.useRef(0),C=i.useRef(0),w=i.useRef(0),T=i.useRef(void 0),E=i.useRef(!0),D=Math.max(1,o),O=Math.max(0,s),k=Math.max(20,f),A=i.useCallback(e=>{b.current=e,typeof _==`function`?_(e):_&&(_.current=e)},[_]),j=i.useCallback(e=>{let t=b.current;if(!t)return;let n=c+e*(l-c),r=1+e*(u-1),i=d>=1||e<=d?1:Math.max(0,1-(e-d)/(1-d));t.style.letterSpacing=`${n.toFixed(4)}em`,t.style.transform=r===1?``:`scale3d(${r.toFixed(4)}, ${r.toFixed(4)}, 1)`,t.style.opacity=i.toFixed(4)},[c,l,u,d]),M=i.useCallback(()=>{if(T.current!=null)return;w.current=performance.now();let e=t=>{if(!E.current){T.current=void 0;return}let n=Math.min(.064,(t-w.current)/1e3);w.current=t;let r=x.current,i=S.current,a=i-r,o=1e3/k*3.5,s=1-Math.exp(-o*n);if(Math.abs(a)>3e-4){let t=r+a*s;x.current=t,j(t),T.current=window.requestAnimationFrame(e)}else x.current=i,j(i),T.current=void 0};T.current=window.requestAnimationFrame(e)},[j,k]);return i.useEffect(()=>{if(typeof window>`u`)return;let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);E.current=!e.matches;let t=()=>{E.current=!e.matches,E.current||(x.current=0,S.current=0,j(0),T.current!=null&&(window.cancelAnimationFrame(T.current),T.current=void 0))};if(e.addEventListener(`change`,t),!E.current)return j(0),()=>e.removeEventListener(`change`,t);let n=m?.current??window,r=()=>n===window?window.scrollY||window.pageYOffset||0:n.scrollTop;C.current=r();let i=()=>{if(!E.current)return;let e=r(),t=e-C.current;if(C.current=e,t===0)return;let i=t/D*O,a=Math.min(1,Math.max(0,S.current+i));n===window&&e<=0&&(a=0),S.current=a,M()},a=()=>{C.current=r()};return n.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,a,{passive:!0}),()=>{n.removeEventListener(`scroll`,i),window.removeEventListener(`resize`,a),e.removeEventListener(`change`,t),T.current!=null&&(window.cancelAnimationFrame(T.current),T.current=void 0)}},[j,D,O,M,m]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:`
          .scroll-velocity-text-base {
            display: inline-block;
            will-change: letter-spacing, transform, opacity;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased;
          }
          .${y} {
            transform-origin: ${p};
          }
          @media (prefers-reduced-motion: reduce) {
            .${y} {
              letter-spacing: ${c}em !important;
              transform: none !important;
              opacity: 1 !important;
            }
          }
        `}),(0,a.jsx)(v,{ref:A,className:r(`scroll-velocity-text-base`,y,n),style:{letterSpacing:`${c}em`,opacity:1,...h},...g,children:e})]})});o.displayName=`ScrollVelocityText`;var s=o;export{o as ScrollVelocityText,o as default,s as Scrollvelocitytext};