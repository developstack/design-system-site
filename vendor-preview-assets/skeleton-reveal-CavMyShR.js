import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-96-fUOOI.js";import{t as r}from"./dist-DuLxksy6.js";var i=e(t(),1),a=n(),o=`
.t-skel{position:relative}
.t-skel-skeleton{position:absolute;inset:0;z-index:1;opacity:1;filter:blur(0);transition:opacity var(--reveal-dur) var(--reveal-ease),filter var(--reveal-dur) var(--reveal-ease)}
.t-skel-content{position:relative;z-index:2;opacity:0;filter:blur(var(--reveal-blur));transition:opacity var(--reveal-dur) var(--reveal-ease),filter var(--reveal-dur) var(--reveal-ease)}
.t-skel.is-revealed .t-skel-skeleton{opacity:0;filter:blur(var(--reveal-blur))}
.t-skel.is-revealed .t-skel-content{opacity:1;filter:blur(0)}
.t-skel.is-resetting .t-skel-skeleton,.t-skel.is-resetting .t-skel-content{transition:none !important}
.t-skel-skeleton.is-pulsing > *{animation:t-skel-pulse var(--pulse-dur) ease-in-out var(--pulse-count)}
@keyframes t-skel-pulse{0%,100%{opacity:1}50%{opacity:var(--pulse-min)}}
@media (prefers-reduced-motion: reduce){.t-skel-skeleton,.t-skel-content{transition:none !important}.t-skel-skeleton.is-pulsing > *{animation:none !important}}
`;function s({loading:e,skeleton:t,children:n,pulseCount:s=1,pulseDuration:c=1e3,revealDuration:l=400,className:u}){let d=i.useRef(null),f=i.useRef(e);return i.useLayoutEffect(()=>{let t=d.current;t&&(e&&!f.current&&(t.classList.add(`is-resetting`),t.offsetWidth,t.classList.remove(`is-resetting`)),f.current=e)},[e]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`style`,{children:o}),(0,a.jsxs)(`div`,{ref:d,className:r(`t-skel`,!e&&`is-revealed`,u),"aria-busy":e||void 0,style:{"--pulse-dur":`${c}ms`,"--pulse-count":s,"--pulse-min":.5,"--reveal-dur":`${l}ms`,"--reveal-blur":`2px`,"--reveal-ease":`ease-in-out`},children:[(0,a.jsx)(`div`,{className:r(`t-skel-skeleton`,e&&`is-pulsing`),"aria-hidden":!0,children:t}),(0,a.jsx)(`div`,{className:`t-skel-content`,children:n})]})]})}export{s as SkeletonReveal};