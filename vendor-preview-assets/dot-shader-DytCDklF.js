import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-BRsgvuRh.js";import{t as r}from"./utils-CWN7nxjK.js";var i=e(t(),1),a=n();function o(e){if(typeof document>`u`)return{r:255,g:255,b:255,a:.2};let t=document.createElement(`canvas`);t.width=1,t.height=1;let n=t.getContext(`2d`);if(!n)return{r:255,g:255,b:255,a:.2};n.clearRect(0,0,1,1),n.fillStyle=e,n.fillRect(0,0,1,1);let[r,i,a,o]=n.getImageData(0,0,1,1).data;return{r:r/255,g:i/255,b:a/255,a:o/255}}var s=`
precision highp float;

attribute vec2 a_position;
attribute vec2 a_grid_pos;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;
uniform float u_cursor_radius;
uniform float u_distortion;
uniform float u_max_scale;
uniform float u_wave_intensity;
uniform float u_base_dot_size;
uniform float u_interactive;
uniform float u_dpr;

varying float v_proximity;
varying vec2 v_center_dist;

void main() {
    vec2 pos = a_position;
    
    // Ambient undulating wave
    float wave = sin(a_grid_pos.x * 0.15 + a_grid_pos.y * 0.15 + u_time * 1.5) * 4.0 * u_wave_intensity;
    pos.y += wave;

    // Cursor proximity & magnetic repulsion
    float dist = distance(pos, u_mouse);
    float normDist = clamp(dist / max(u_cursor_radius, 1.0), 0.0, 1.0);
    float prox = (1.0 - smoothstep(0.0, 1.0, normDist)) * u_interactive;

    // Repulsion along radial vector
    vec2 dir = pos - u_mouse;
    float dirLen = length(dir);
    if (dirLen > 0.001) {
        dir = dir / dirLen;
    } else {
        dir = vec2(0.0, 0.0);
    }
    pos += dir * (prox * 24.0 * u_distortion);

    v_proximity = prox;

    // Point size expansion at cursor center
    float scale = 1.0 + prox * (u_max_scale - 1.0);
    gl_PointSize = u_base_dot_size * 2.0 * scale * u_dpr;

    // Convert pixels to clip space [-1, 1]
    vec2 zeroToOne = pos / u_resolution;
    vec2 zeroToTwo = zeroToOne * 2.0;
    vec2 clipSpace = zeroToTwo - 1.0;
    gl_Position = vec4(clipSpace.x, -clipSpace.y, 0.0, 1.0);
}
`,c=`
precision highp float;

uniform vec4 u_dot_color;
uniform vec4 u_accent_color;

varying float v_proximity;

void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) {
        discard;
    }

    // Soft antialiased border
    float alpha = smoothstep(0.5, 0.38, dist);

    // Color transition from base dot color to illuminated accent
    vec4 finalColor = mix(u_dot_color, u_accent_color, v_proximity);
    gl_FragColor = vec4(finalColor.rgb, finalColor.a * alpha);
}
`;function l(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(e.deleteShader(r),null)):null}var u=({children:e,className:t,dotColor:n=`rgba(255, 255, 255, 0.15)`,accentColor:u=`#00F0FF`,dotSize:d=1.5,spacing:f=22,cursorRadius:p=180,distortionStrength:m=.35,maxScale:h=2.2,waveIntensity:g=.25,speed:_=1,interactive:v=!0,overlay:y=!0,style:b,...x})=>{let S=(0,i.useRef)(null),C=(0,i.useRef)(null),[w,T]=(0,i.useState)(!1),E=(0,i.useRef)({x:-9999,y:-9999}),D=(0,i.useRef)({x:-9999,y:-9999}),O=(0,i.useRef)(!1);return(0,i.useEffect)(()=>{if(typeof window>`u`)return;let e=window.matchMedia(`(prefers-reduced-motion: reduce)`);T(e.matches);let t=e=>T(e.matches);return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[]),(0,i.useEffect)(()=>{let e=C.current,t=S.current;if(!e||!t)return;let r,i=null;try{i=e.getContext(`webgl`,{alpha:!0,antialias:!0,powerPreference:`high-performance`})}catch{i=null}let a=Math.max(10,f),y=Math.max(.5,d),b=Math.max(40,p),x=o(n),T=o(u),O=0,k=0,A=1,j=0,M=null,N=null,P=null,F=null,I=null,L=null,R=null,z=null,B=null,V=null,H=null,U=null,W=null,G=null,K=null,q=-1,J=-1;if(i){let e=l(i,i.VERTEX_SHADER,s),t=l(i,i.FRAGMENT_SHADER,c);e&&t?(P=i.createProgram(),P&&(i.attachShader(P,e),i.attachShader(P,t),i.linkProgram(P),i.getProgramParameter(P,i.LINK_STATUS)?(i.useProgram(P),q=i.getAttribLocation(P,`a_position`),J=i.getAttribLocation(P,`a_grid_pos`),F=i.getUniformLocation(P,`u_resolution`),I=i.getUniformLocation(P,`u_mouse`),L=i.getUniformLocation(P,`u_time`),R=i.getUniformLocation(P,`u_cursor_radius`),z=i.getUniformLocation(P,`u_distortion`),B=i.getUniformLocation(P,`u_max_scale`),V=i.getUniformLocation(P,`u_wave_intensity`),H=i.getUniformLocation(P,`u_base_dot_size`),U=i.getUniformLocation(P,`u_interactive`),W=i.getUniformLocation(P,`u_dpr`),G=i.getUniformLocation(P,`u_dot_color`),K=i.getUniformLocation(P,`u_accent_color`),M=i.createBuffer(),N=i.createBuffer()):i=null)):i=null}let Y=(t,n)=>{O=t,k=n,A=Math.min(window.devicePixelRatio||1,2),e.width=Math.floor(t*A),e.height=Math.floor(n*A),e.style.width=`${t}px`,e.style.height=`${n}px`;let r=Math.ceil(t/a)+2,o=Math.ceil(n/a)+2;j=r*o;let s=new Float32Array(j*2),c=new Float32Array(j*2),l=t%a/2-a/2,u=n%a/2-a/2,d=0;for(let e=0;e<o;e++){let t=u+e*a;for(let n=0;n<r;n++){let r=l+n*a;s[d*2]=r,s[d*2+1]=t,c[d*2]=n,c[d*2+1]=e,d++}}i&&M&&N&&(i.viewport(0,0,e.width,e.height),i.bindBuffer(i.ARRAY_BUFFER,M),i.bufferData(i.ARRAY_BUFFER,s,i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,N),i.bufferData(i.ARRAY_BUFFER,c,i.STATIC_DRAW))},X=t.getBoundingClientRect();X.width>0&&X.height>0&&Y(X.width,X.height);let Z=new ResizeObserver(e=>{for(let t of e){let{width:e,height:n}=t.contentRect;e>0&&n>0&&Y(e,n)}});Z.observe(t);let Q=performance.now(),$=Q,ee=t=>{let o=Math.min(.064,(t-$)/1e3);$=t;let s=(t-Q)*.001*_,c=1-Math.exp(-14*o);if(D.current.x+=(E.current.x-D.current.x)*c,D.current.y+=(E.current.y-D.current.y)*c,i&&P&&M&&N)i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA),i.useProgram(P),i.uniform2f(F,O,k),i.uniform2f(I,D.current.x,D.current.y),i.uniform1f(L,w?0:s),i.uniform1f(R,b),i.uniform1f(z,m),i.uniform1f(B,h),i.uniform1f(V,w?0:g),i.uniform1f(H,y),i.uniform1f(U,v&&!w?1:0),i.uniform1f(W,A),i.uniform4f(G,x.r,x.g,x.b,x.a),i.uniform4f(K,T.r,T.g,T.b,T.a),i.bindBuffer(i.ARRAY_BUFFER,M),i.enableVertexAttribArray(q),i.vertexAttribPointer(q,2,i.FLOAT,!1,0,0),i.bindBuffer(i.ARRAY_BUFFER,N),i.enableVertexAttribArray(J),i.vertexAttribPointer(J,2,i.FLOAT,!1,0,0),i.drawArrays(i.POINTS,0,j);else{let t=e.getContext(`2d`);if(t){t.setTransform(A,0,0,A,0,0),t.clearRect(0,0,O,k);let e=Math.ceil(O/a)+2,r=Math.ceil(k/a)+2,i=O%a/2-a/2,o=k%a/2-a/2,c=D.current.x,l=D.current.y;for(let d=0;d<r;d++){let r=o+d*a;for(let o=0;o<e;o++){let e=i+o*a,f=r;if(!w){let e=Math.sin(o*.15+d*.15+s*1.5)*4*g;f+=e}let p=Math.hypot(e-c,f-l),_=0;if(v&&!w&&p<b){_=1-p/b;let t=Math.atan2(f-l,e-c);e+=Math.cos(t)*(_*24*m),f+=Math.sin(t)*(_*24*m)}let S=1+_*(h-1),C=y*S;t.beginPath(),t.arc(e,f,C,0,Math.PI*2),_>.01?(t.fillStyle=u,t.globalAlpha=x.a+_*(T.a-x.a)):(t.fillStyle=n,t.globalAlpha=x.a),t.fill()}}t.globalAlpha=1}}r=requestAnimationFrame(ee)};return r=requestAnimationFrame(ee),()=>{Z.disconnect(),cancelAnimationFrame(r),i&&(M&&i.deleteBuffer(M),N&&i.deleteBuffer(N),P&&i.deleteProgram(P))}},[n,u,d,f,p,m,h,g,_,v,w]),(0,a.jsxs)(`div`,{ref:S,onPointerMove:e=>{if(!v||w)return;let t=S.current?.getBoundingClientRect();t&&(E.current={x:e.clientX-t.left,y:e.clientY-t.top},O.current=!0)},onPointerLeave:()=>{v&&(O.current=!1,E.current={x:-9999,y:-9999})},className:r(`relative w-full overflow-hidden isolate select-none`,t),style:b,...x,children:[(0,a.jsx)(`canvas`,{ref:C,"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-0 block h-full w-full`}),y&&(0,a.jsx)(`div`,{"aria-hidden":`true`,className:`pointer-events-none absolute inset-0 z-[1] select-none bg-radial from-transparent via-transparent to-background/50`}),e&&(0,a.jsx)(`div`,{className:`relative z-10 h-full w-full flex items-center justify-center`,children:e})]})};export{u as DotShader,u as default};