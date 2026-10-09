import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-CIUuMICK.js";import{t as r}from"./dist-DuLxksy6.js";import{t as i}from"./is-motion-value-CGWZbK8B.js";import{t as a}from"./use-transform-CzUFMB1Q.js";import{t as o}from"./use-spring-sSBcl9sW.js";import{t as s}from"./use-motion-value-Nph8ZePg.js";import{t as c}from"./use-reduced-motion-CjZ7gASP.js";import{t as l}from"./react-HdLatX6S.js";import{a as u}from"./ease-CIW3z5WL.js";var d=e(t(),1),f=`
attribute vec2 a_position;
void main() { gl_Position = vec4(a_position, 0.0, 1.0); }
`,p=`
precision highp float;
uniform vec2 u_resolution;
uniform float u_time;
uniform float u_activity;
uniform vec3 u_base;
uniform vec3 u_light;
uniform vec3 u_dark;

float hash(vec3 p) {
  p = fract(p * 0.1031);
  p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
                 mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
                 mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm(vec3 p) {
  return noise(p) * 0.57 + noise(p * 2.03 + 7.2) * 0.28 + noise(p * 4.07 + 3.1) * 0.15;
}
void main() {
  vec2 p = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  float t = u_time * 0.38;
  float angle = atan(p.y, p.x);
  float breath = sin(u_time * 1.4) * 0.008;
  float ripple = sin(angle * 3.0 + t * 2.1) * 0.55
               + sin(angle * 5.0 - t * 1.7) * 0.30
               + sin(angle * 2.0 + t) * 0.15;
  p /= 0.91 + breath + u_activity * 0.025
       + ripple * (0.004 + u_activity * 0.024);
  float r2 = dot(p, p);
  float aa = 3.0 / min(u_resolution.x, u_resolution.y);
  float alpha = 1.0 - smoothstep(1.0 - aa, 1.0, r2);
  if (alpha <= 0.0) { gl_FragColor = vec4(0.0); return; }
  vec3 normal = vec3(p, sqrt(max(0.0, 1.0 - r2)));
  vec3 flow = vec3(normal.xy * 1.65, normal.z * 1.4);
  flow.xy += vec2(sin(normal.y * 2.6 + t), cos(normal.x * 2.3 - t * 0.8))
             * (0.25 + u_activity * 0.22);
  vec3 warp = vec3(noise(flow + vec3(0.0, t, t * 0.3)),
                   noise(flow + vec3(4.7, -t * 0.7, t)),
                   noise(flow + vec3(t * 0.5, 9.2, -t))) - 0.5;
  float pigment = fbm(flow + warp * 1.4 + vec3(t * 0.3, -t * 0.2, t * 0.4));
  float fold = normal.x * 0.50 + normal.y * 0.32
             + sin(normal.y * 2.6 - t) * 0.30 + (pigment - 0.5) * 0.65;
  float shadow = smoothstep(-0.30, 0.42, fold);
  vec3 color = mix(u_dark, u_base, shadow);
  color = mix(color, u_light, smoothstep(0.40, 0.82, pigment) * 0.34);
  float diffuse = max(0.0, dot(normal, normalize(vec3(-0.4, 0.65, 1.0))));
  color *= 0.64 + 0.46 * diffuse;
  float shine = exp(-pow((fold + 0.06) * 8.0, 2.0)) * pow(normal.z, 0.65);
  float innerLight = exp(-pow((fold - 0.28) * 4.0, 2.0)) * normal.z;
  color = mix(color, u_light, innerLight * (0.18 + u_activity * 0.16));
  color = mix(color, mix(u_light, vec3(1.0), 0.55), shine * 0.78);
  float gleam = pow(max(0.0, dot(normal, normalize(vec3(-0.45, 0.55, 1.0)))), 24.0);
  color += gleam * 0.16;
  float rim = pow(1.0 - normal.z, 3.0);
  color = mix(color, u_light, rim * (0.36 + 0.25 * max(0.0, -normal.x)));
  float grain = hash(vec3(gl_FragCoord.xy, 1.0)) - 0.5;
  color += grain * 0.032;
  gl_FragColor = vec4(clamp(color, 0.0, 1.0), alpha);
}
`;function m(e){let t=/^#([\da-f])([\da-f])([\da-f])$/i.exec(e),n=t?`#${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`:e;if(!/^#[\da-f]{6}$/i.test(n))throw Error(`VoiceOrb colors must be #RGB or #RRGGBB hex colors.`);let r=Number.parseInt(n.slice(1),16);return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function h(e,t,n){let r=e.getContext(`webgl`,{alpha:!0,antialias:!1,premultipliedAlpha:!1,powerPreference:`low-power`});if(!r)throw Error(`WebGL is unavailable in this browser.`);let i=!1,a=0,o=0,s=0,c=!0,l=!1,u=!1,d=null,h=null,g=[],_={},v=null,y={width:e.clientWidth,height:e.clientHeight},b=()=>{h&&r.deleteBuffer(h),d&&r.deleteProgram(d);for(let e of g)r.deleteShader(e);h=null,d=null,g=[]},x=()=>{let e=(e,t)=>{let n=r.createShader(e);if(!n)throw Error(`Could not allocate an orb shader.`);if(g.push(n),r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw Error(r.getShaderInfoLog(n)||`Could not compile the orb shader.`);return n},t=e(r.VERTEX_SHADER,f),n=e(r.FRAGMENT_SHADER,p);if(d=r.createProgram(),!d)throw Error(`Could not allocate the orb program.`);if(r.attachShader(d,t),r.attachShader(d,n),r.linkProgram(d),!r.getProgramParameter(d,r.LINK_STATUS))throw Error(r.getProgramInfoLog(d)||`Could not link the orb program.`);if(r.useProgram(d),h=r.createBuffer(),!h)throw Error(`Could not allocate the orb buffer.`);r.bindBuffer(r.ARRAY_BUFFER,h),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),r.STATIC_DRAW);let i=r.getAttribLocation(d,`a_position`);r.enableVertexAttribArray(i),r.vertexAttribPointer(i,2,r.FLOAT,!1,0,0),_=Object.fromEntries([`u_resolution`,`u_time`,`u_activity`,`u_base`,`u_light`,`u_dark`].map(e=>[e,r.getUniformLocation(d,e)])),v=null},S=()=>{cancelAnimationFrame(a),a=0,s=0},C=d=>{if(a=0,i||l||!c||document.hidden){s=0;return}try{let n=t();n.animated&&s&&(o+=Math.min(.05,(d-s)/1e3)*n.speed*(1+n.activity*.6)),s=n.animated?d:0;let i=Math.min(window.devicePixelRatio||1,2),c=Math.max(1,Math.round(y.width*i)),l=Math.max(1,Math.round(y.height*i));if((e.width!==c||e.height!==l)&&(e.width=c,e.height=l),r.viewport(0,0,c,l),r.uniform2f(_.u_resolution??null,c,l),r.uniform1f(_.u_time??null,o),r.uniform1f(_.u_activity??null,n.activity),!v||v.some((e,t)=>e!==n.colors[t])){let e=n.colors.map(m);r.uniform3fv(_.u_base??null,e[0]),r.uniform3fv(_.u_light??null,e[1]),r.uniform3fv(_.u_dark??null,e[2]),v=n.colors}r.drawArrays(r.TRIANGLES,0,6),n.animated&&(a=requestAnimationFrame(C))}catch(e){u=!0,S(),n(e instanceof Error?e:Error(String(e)))}},w=()=>{!i&&!l&&!u&&c&&!document.hidden&&!a&&(a=requestAnimationFrame(C))},T=()=>{document.hidden?S():w()},E=e=>{e.preventDefault(),l=!0,S()},D=()=>{try{b(),x(),l=!1,w()}catch(e){n(e instanceof Error?e:Error(String(e)))}};try{x()}catch(e){throw b(),e}let O=new ResizeObserver(([e])=>{e&&(y={width:e.contentRect.width,height:e.contentRect.height}),w()});O.observe(e);let k=new IntersectionObserver(([e])=>{c=e?.isIntersecting??!0,c?w():S()});return k.observe(e),e.addEventListener(`webglcontextlost`,E),e.addEventListener(`webglcontextrestored`,D),document.addEventListener(`visibilitychange`,T),w(),{requestDraw:w,dispose:()=>{i=!0,S(),O.disconnect(),k.disconnect(),e.removeEventListener(`webglcontextlost`,E),e.removeEventListener(`webglcontextrestored`,D),document.removeEventListener(`visibilitychange`,T),b()}}}var g=n(),_=[`#e8754d`,`#ffe0ac`,`#346b52`],v=e=>Number.isFinite(e)?Math.max(0,Math.min(1,e)):0;function y({activity:e=0,analyser:t=null,colors:n=_,active:f=!0,speed:p=1,onError:m,className:y,style:b,"aria-label":x,...S}){let C=c(),w=(0,d.useRef)(null),T=(0,d.useRef)(null),[E,D]=(0,d.useState)(null),O=s(0),k=o(O,u),A=a(k,e=>`translate3d(0, ${-e*2}px, 0) scale(${1+e*.04}, ${1-e*.018})`),j=(0,d.useRef)({activity:e,analyser:t,colors:n,active:f,speed:p,reducedMotion:C,onError:m});return(0,d.useLayoutEffect)(()=>{j.current={activity:e,analyser:t,colors:n,active:f,speed:p,reducedMotion:C,onError:m};let r=f&&!C?v(i(e)?e.get():e):0;C?(k.jump(0),O.set(0)):O.set(r),T.current?.requestDraw()}),(0,d.useEffect)(()=>{if(i(e))return e.on(`change`,e=>{j.current.active&&!j.current.reducedMotion&&O.set(v(e)),T.current?.requestDraw()})},[e,O]),(0,d.useEffect)(()=>k.on(`change`,()=>T.current?.requestDraw()),[k]),(0,d.useEffect)(()=>{let e=w.current;if(!e)return;let t=null,n=null,r=e=>{D(e),j.current.onError?.(e)};try{T.current=h(e,()=>{let e=j.current;if(e.analyser&&e.active&&!e.reducedMotion&&((n!==e.analyser||t?.length!==e.analyser.fftSize)&&(n=e.analyser,t=new Uint8Array(new ArrayBuffer(e.analyser.fftSize))),t)){e.analyser.getByteTimeDomainData(t);let n=0;for(let e of t)n+=((e-128)/128)**2;O.set(v(Math.sqrt(n/t.length)*3))}return{activity:e.active&&!e.reducedMotion?v(k.get()):0,colors:e.colors,speed:Number.isFinite(e.speed)?Math.max(0,e.speed):1,animated:e.active&&!e.reducedMotion&&(e.speed>0||!!e.analyser)}},r)}catch(e){r(e instanceof Error?e:Error(String(e)))}return()=>{T.current?.dispose(),T.current=null}},[k,O]),(0,g.jsx)(`div`,{...S,role:`img`,"aria-label":x,"aria-hidden":!x||void 0,"data-slot":`voice-orb`,"data-render-state":E?`error`:`ready`,className:r(`relative aspect-square w-64 shrink-0`,y),style:b,children:E?(0,g.jsx)(`div`,{className:`flex size-full items-center justify-center rounded-full border border-border bg-card p-8 text-center text-xs text-muted-foreground`,children:`Orb rendering unavailable`}):(0,g.jsx)(l.div,{className:`size-full`,style:{transform:C?`none`:A},children:(0,g.jsx)(`canvas`,{ref:w,className:`block size-full`})})})}export{y as VoiceOrb};