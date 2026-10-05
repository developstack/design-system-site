import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,n}from"./vendor-preview-96-fUOOI.js";var r=n(),i=e(t(),1);function a(e){let t=e.replace(`#`,``);(t.length===3||t.length===4)&&(t=t.split(``).map(e=>e+e).join(``));let n=t.length>=8?parseInt(t.slice(6,8),16)/255:1;return[parseInt(t.slice(0,2),16)/255,parseInt(t.slice(2,4),16)/255,parseInt(t.slice(4,6),16)/255,n]}function o(e,t,n){e/=255,t/=255,n/=255;let r=Math.max(e,t,n),i=r-Math.min(e,t,n),a=0,o=r===0?0:i/r;return i!==0&&(a=r===e?((t-n)/i+6)%6:r===t?(n-e)/i+2:(e-t)/i+4,a/=6),[a,o,r]}function s(e,t,n){let r=Math.floor(e*6),i=e*6-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=0,l=0,u=0;switch(r%6){case 0:c=n,l=s,u=a;break;case 1:c=o,l=n,u=a;break;case 2:c=a,l=n,u=s;break;case 3:c=a,l=o,u=n;break;case 4:c=s,l=a,u=n;break;case 5:c=n,l=a,u=o}return[Math.round(c*255),Math.round(l*255),Math.round(u*255)]}var c=66,l=66,u=1500,d=1,f=16,p=96,m=2,h={colorBack:`#00000000`,speed:1,repetition:1.5,softness:.05,shiftRed:.3,shiftBlue:.3,distortion:.1,contour:.4,angle:90,shape:0,scale:1,rotation:0,offsetX:0,offsetY:0,originX:.5,originY:.5,worldWidth:0,worldHeight:0,fit:1},g={chromatic:{name:`chromatic`,modes:{dark:{...h,colorTint:`#88ccff2e`,shiftRed:.75,shiftBlue:.75,repetition:2,softness:.09,shaderOpacity:1},light:{...h,colorTint:`#66b0ff99`,shiftRed:.6,shiftBlue:.6,shaderOpacity:1}}},silver:{name:`silver`,modes:{dark:{...h,colorTint:`#ffffff66`,shaderOpacity:.88},light:{...h,colorTint:`#ffffff40`,shaderOpacity:1}}},gold:{name:`gold`,modes:{dark:{...h,colorTint:`#ffcc55cc`,speed:.85,shaderOpacity:.92},light:{...h,colorTint:`#f7d488aa`,shaderOpacity:1}}}},_=`#version 300 es
precision mediump float;

uniform sampler2D u_image;
uniform float u_imageAspectRatio;

uniform vec2 u_resolution;
uniform float u_time;

uniform vec4 u_colorBack;
uniform vec4 u_colorTint;

uniform float u_softness;
uniform float u_repetition;
uniform float u_shiftRed;
uniform float u_shiftBlue;
uniform float u_distortion;
uniform float u_contour;
uniform float u_angle;

uniform float u_shape;
uniform bool u_isImage;

in vec2 v_objectUV;
in vec2 v_responsiveUV;
in vec2 v_responsiveBoxGivenSize;
in vec2 v_imageUV;

out vec4 fragColor;


#define TWO_PI 6.28318530718
#define PI 3.14159265358979323846


vec2 rotate(vec2 uv, float th) {
  return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
}


vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
    -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
    + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
  m = m * m;
  m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}


float getColorChanges(float c1, float c2, float stripe_p, vec3 w, float blur, float bump, float tint) {

  float ch = mix(c2, c1, smoothstep(.0, 2. * blur, stripe_p));

  float border = w[0];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  if (u_isImage == true) {
    bump = smoothstep(.2, .8, bump);
  }
  border = w[0] + .4 * (1. - bump) * w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + .5 * (1. - bump) * w[1];
  ch = mix(ch, c2, smoothstep(border, border + 2. * blur, stripe_p));

  border = w[0] + w[1];
  ch = mix(ch, c1, smoothstep(border, border + 2. * blur, stripe_p));

  float gradient_t = (stripe_p - w[0] - w[1]) / w[2];
  float gradient = mix(c1, c2, smoothstep(0., 1., gradient_t));
  ch = mix(ch, gradient, smoothstep(border, border + .5 * blur, stripe_p));

  // Tint color is applied with color burn blending
  ch = mix(ch, 1. - min(1., (1. - ch) / max(tint, 0.0001)), u_colorTint.a);
  return ch;
}

float getImgFrame(vec2 uv, float th) {
  float frame = 1.;
  frame *= smoothstep(0., th, uv.y);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.y);
  frame *= smoothstep(0., th, uv.x);
  frame *= 1.0 - smoothstep(1. - th, 1., uv.x);
  return frame;
}

float blurEdge3x3(sampler2D tex, vec2 uv, vec2 dudx, vec2 dudy, float radius, float centerSample) {
  vec2 texel = 1.0 / vec2(textureSize(tex, 0));
  vec2 r = radius * texel;

  float w1 = 1.0, w2 = 2.0, w4 = 4.0;
  float norm = 16.0;
  float sum = w4 * centerSample;

  sum += w2 * textureGrad(tex, uv + vec2(0.0, -r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(0.0, r.y), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(-r.x, 0.0), dudx, dudy).r;
  sum += w2 * textureGrad(tex, uv + vec2(r.x, 0.0), dudx, dudy).r;

  sum += w1 * textureGrad(tex, uv + vec2(-r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, -r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(-r.x, r.y), dudx, dudy).r;
  sum += w1 * textureGrad(tex, uv + vec2(r.x, r.y), dudx, dudy).r;

  return sum / norm;
}

float lst(float edge0, float edge1, float x) {
  return clamp((x - edge0) / (edge1 - edge0), 0.0, 1.0);
}

void main() {

  const float firstFrameOffset = 2.8;
  float t = .3 * (u_time + firstFrameOffset);

  vec2 uv = v_imageUV;
  vec2 dudx = dFdx(v_imageUV);
  vec2 dudy = dFdy(v_imageUV);
  vec4 img = textureGrad(u_image, uv, dudx, dudy);

  if (u_isImage == false) {
    uv = v_objectUV + .5;
    uv.y = 1. - uv.y;
  }

  float cycleWidth = u_repetition;
  float edge = 0.;
  float contOffset = 1.;

  vec2 rotatedUV = uv - vec2(.5);
  float angle = (-u_angle + 70.) * PI / 180.;
  float cosA = cos(angle);
  float sinA = sin(angle);
  rotatedUV = vec2(
  rotatedUV.x * cosA - rotatedUV.y * sinA,
  rotatedUV.x * sinA + rotatedUV.y * cosA
  ) + vec2(.5);

  if (u_isImage == true) {
    float edgeRaw = img.r;
    edge = blurEdge3x3(u_image, uv, dudx, dudy, 6., edgeRaw);
    edge = pow(edge, 1.6);
    edge *= mix(0.0, 1.0, smoothstep(0.0, 0.4, u_contour));
  } else {
    if (u_shape < 1.) {
      // full-fill on canvas
      vec2 borderUV = v_responsiveUV + .5;
      float ratio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
      vec2 mask = min(borderUV, 1. - borderUV);
      vec2 pixel_thickness = min(250. / v_responsiveBoxGivenSize, vec2(.5));
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);

      uv = v_responsiveUV;
      if (ratio > 1.) {
        uv.y /= ratio;
      } else {
        uv.x *= ratio;
      }
      uv += .5;
      uv.y = 1. - uv.y;

      cycleWidth *= 2.;
      contOffset = 1.5;

    } else if (u_shape < 2.) {
      // circle
      vec2 shapeUV = uv - .5;
      shapeUV *= .67;
      edge = pow(clamp(3. * length(shapeUV), 0., 1.), 18.);
    } else if (u_shape < 3.) {
      // daisy
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.68;

      float r = length(shapeUV) * 2.;
      float a = atan(shapeUV.y, shapeUV.x) + .2;
      r *= (1. + .05 * sin(3. * a + 2. * t));
      float f = abs(cos(a * 3.));
      edge = smoothstep(f, f + .7, r);
      edge *= edge;

      uv *= .8;
      cycleWidth *= 1.6;

    } else if (u_shape < 4.) {
      // diamond
      vec2 shapeUV = uv - .5;
      shapeUV = rotate(shapeUV, .25 * PI);
      shapeUV *= 1.42;
      shapeUV += .5;
      vec2 mask = min(shapeUV, 1. - shapeUV);
      vec2 pixel_thickness = vec2(.15);
      float maskX = smoothstep(0.0, pixel_thickness.x, mask.x);
      float maskY = smoothstep(0.0, pixel_thickness.y, mask.y);
      maskX = pow(maskX, .25);
      maskY = pow(maskY, .25);
      edge = clamp(1. - maskX * maskY, 0., 1.);
    } else if (u_shape < 5.) {
      // metaballs
      vec2 shapeUV = uv - .5;
      shapeUV *= 1.3;
      edge = 0.;
      for (int i = 0; i < 5; i++) {
        float fi = float(i);
        float speed = 1.5 + 2./3. * sin(fi * 12.345);
        float angle = -fi * 1.5;
        vec2 dir1 = vec2(cos(angle), sin(angle));
        vec2 dir2 = vec2(cos(angle + 1.57), sin(angle + 1.));
        vec2 traj = .4 * (dir1 * sin(t * speed + fi * 1.23) + dir2 * cos(t * (speed * 0.7) + fi * 2.17));
        float d = length(shapeUV + traj);
        edge += pow(1.0 - clamp(d, 0.0, 1.0), 4.0);
      }
      edge = 1. - smoothstep(.65, .9, edge);
      edge = pow(edge, 4.);
    }

    edge = mix(smoothstep(.9 - 2. * fwidth(edge), .9, edge), edge, smoothstep(0.0, 0.4, u_contour));

  }

  float opacity = 0.;
  if (u_isImage == true) {
    opacity = img.g;
    float frame = getImgFrame(v_imageUV, 0.);
    opacity *= frame;
  } else {
    opacity = 1. - smoothstep(.9 - 2. * fwidth(edge), .9, edge);
    if (u_shape < 2.) {
      edge = 1.2 * edge;
    } else if (u_shape < 5.) {
      edge = 1.8 * pow(edge, 1.5);
    }
  }

  float diagBLtoTR = rotatedUV.x - rotatedUV.y;
  float diagTLtoBR = rotatedUV.x + rotatedUV.y;

  vec3 color = vec3(0.);
  vec3 color1 = vec3(.98, 0.98, 1.);
  vec3 color2 = vec3(.1, .1, .1 + .1 * smoothstep(.7, 1.3, diagTLtoBR));

  vec2 grad_uv = uv - .5;

  float dist = length(grad_uv + vec2(0., .2 * diagBLtoTR));
  grad_uv = rotate(grad_uv, (.25 - .2 * diagBLtoTR) * PI);
  float direction = grad_uv.x;

  float bump = pow(1.8 * dist, 1.2);
  bump = 1. - bump;
  bump *= pow(uv.y, .3);


  float thin_strip_1_ratio = .12 / cycleWidth * (1. - .4 * bump);
  float thin_strip_2_ratio = .07 / cycleWidth * (1. + .4 * bump);
  float wide_strip_ratio = (1. - thin_strip_1_ratio - thin_strip_2_ratio);

  float thin_strip_1_width = cycleWidth * thin_strip_1_ratio;
  float thin_strip_2_width = cycleWidth * thin_strip_2_ratio;

  float noise = snoise(uv - t);

  edge += (1. - edge) * u_distortion * noise;

  direction += diagBLtoTR;
  float contour = 0.;
  direction -= 2. * noise * diagBLtoTR * (smoothstep(0., 1., edge) * (1.0 - smoothstep(0., 1., edge)));
  direction *= mix(1., 1. - edge, smoothstep(.5, 1., u_contour));
  direction -= 1.7 * edge * smoothstep(.5, 1., u_contour);
  direction += .2 * pow(u_contour, 4.) * (1.0 - smoothstep(0., 1., edge));

  bump *= clamp(pow(uv.y, .1), .3, 1.);
  direction *= (.1 + (1.1 - edge) * bump);

  direction *= (.4 + .6 * (1.0 - smoothstep(.5, 1., edge)));
  direction += .18 * (smoothstep(.1, .2, uv.y) * (1.0 - smoothstep(.2, .4, uv.y)));
  direction += .03 * (smoothstep(.1, .2, 1. - uv.y) * (1.0 - smoothstep(.2, .4, 1. - uv.y)));

  direction *= (.5 + .5 * pow(uv.y, 2.));
  direction *= cycleWidth;
  direction -= t;


  float colorDispersion = (1. - bump);
  colorDispersion = clamp(colorDispersion, 0., 1.);
  float dispersionRed = colorDispersion;
  dispersionRed += .03 * bump * noise;
  dispersionRed += 5. * (smoothstep(-.1, .2, uv.y) * (1.0 - smoothstep(.1, .5, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, 1., bump)));
  dispersionRed -= diagBLtoTR;

  float dispersionBlue = colorDispersion;
  dispersionBlue *= 1.3;
  dispersionBlue += (smoothstep(0., .4, uv.y) * (1.0 - smoothstep(.1, .8, uv.y))) * (smoothstep(.4, .6, bump) * (1.0 - smoothstep(.4, .8, bump)));
  dispersionBlue -= .2 * edge;

  dispersionRed *= (u_shiftRed / 20.);
  dispersionBlue *= (u_shiftBlue / 20.);

  float blur = 0.;
  float rExtraBlur = 0.;
  float gExtraBlur = 0.;
  if (u_isImage == true) {
    float softness = 0.05 * u_softness;
    blur = softness + .5 * smoothstep(1., 10., u_repetition) * smoothstep(.0, 1., edge);
    float smallCanvasT = 1.0 - smoothstep(100., 500., min(u_resolution.x, u_resolution.y));
    blur += smallCanvasT * smoothstep(.0, 1., edge);
    rExtraBlur = softness * (0.05 + .1 * (u_shiftRed / 20.) * bump);
    gExtraBlur = softness * 0.05 / max(0.001, abs(1. - diagBLtoTR));
  } else {
    blur = u_softness / 15. + .3 * contour;
  }

  vec3 w = vec3(thin_strip_1_width, thin_strip_2_width, wide_strip_ratio);
  w[1] -= .02 * smoothstep(.0, 1., edge + bump);
  float stripe_r = fract(direction + dispersionRed);
  float r = getColorChanges(color1.r, color2.r, stripe_r, w, blur + fwidth(stripe_r) + rExtraBlur, bump, u_colorTint.r);
  float stripe_g = fract(direction);
  float g = getColorChanges(color1.g, color2.g, stripe_g, w, blur + fwidth(stripe_g) + gExtraBlur, bump, u_colorTint.g);
  float stripe_b = fract(direction - dispersionBlue);
  float b = getColorChanges(color1.b, color2.b, stripe_b, w, blur + fwidth(stripe_b), bump, u_colorTint.b);

  color = vec3(r, g, b);
  color *= opacity;

  vec3 bgColor = u_colorBack.rgb * u_colorBack.a;
  color = color + bgColor * (1. - opacity);
  opacity = opacity + u_colorBack.a * (1. - opacity);

  
  color += 1. / 256. * (fract(sin(dot(.014 * gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453123) - .5);


  fragColor = vec4(color, opacity);
}
`,v=`#version 300 es
precision mediump float;

layout(location = 0) in vec4 a_position;

uniform vec2 u_resolution;
uniform float u_pixelRatio;
uniform float u_imageAspectRatio;
uniform float u_originX;
uniform float u_originY;
uniform float u_worldWidth;
uniform float u_worldHeight;
uniform float u_fit;
uniform float u_scale;
uniform float u_rotation;
uniform float u_offsetX;
uniform float u_offsetY;

out vec2 v_objectUV;
out vec2 v_objectBoxSize;
out vec2 v_responsiveUV;
out vec2 v_responsiveBoxGivenSize;
out vec2 v_patternUV;
out vec2 v_patternBoxSize;
out vec2 v_imageUV;

vec3 getBoxSize(float boxRatio, vec2 givenBoxSize) {
  vec2 box = vec2(0.);
  // fit = none
  box.x = boxRatio * min(givenBoxSize.x / boxRatio, givenBoxSize.y);
  float noFitBoxWidth = box.x;
  if (u_fit == 1.) { // fit = contain
    box.x = boxRatio * min(u_resolution.x / boxRatio, u_resolution.y);
  } else if (u_fit == 2.) { // fit = cover
    box.x = boxRatio * max(u_resolution.x / boxRatio, u_resolution.y);
  }
  box.y = box.x / boxRatio;
  return vec3(box, noFitBoxWidth);
}

void main() {
  gl_Position = a_position;

  vec2 uv = gl_Position.xy * .5;
  vec2 boxOrigin = vec2(.5 - u_originX, u_originY - .5);
  vec2 givenBoxSize = vec2(u_worldWidth, u_worldHeight);
  givenBoxSize = max(givenBoxSize, vec2(1.)) * u_pixelRatio;
  float r = u_rotation * 3.14159265358979323846 / 180.;
  mat2 graphicRotation = mat2(cos(r), sin(r), -sin(r), cos(r));
  vec2 graphicOffset = vec2(-u_offsetX, u_offsetY);


  // ===================================================

  float fixedRatio = 1.;
  vec2 fixedRatioBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );

  v_objectBoxSize = getBoxSize(fixedRatio, fixedRatioBoxGivenSize).xy;
  vec2 objectWorldScale = u_resolution.xy / v_objectBoxSize;

  v_objectUV = uv;
  v_objectUV *= objectWorldScale;
  v_objectUV += boxOrigin * (objectWorldScale - 1.);
  v_objectUV += graphicOffset;
  v_objectUV /= u_scale;
  v_objectUV = graphicRotation * v_objectUV;

  // ===================================================

  v_responsiveBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  float responsiveRatio = v_responsiveBoxGivenSize.x / v_responsiveBoxGivenSize.y;
  vec2 responsiveBoxSize = getBoxSize(responsiveRatio, v_responsiveBoxGivenSize).xy;
  vec2 responsiveBoxScale = u_resolution.xy / responsiveBoxSize;

  v_responsiveUV = uv;
  v_responsiveUV *= responsiveBoxScale;
  v_responsiveUV += boxOrigin * (responsiveBoxScale - 1.);
  v_responsiveUV += graphicOffset;
  v_responsiveUV /= u_scale;
  v_responsiveUV.x *= responsiveRatio;
  v_responsiveUV = graphicRotation * v_responsiveUV;
  v_responsiveUV.x /= responsiveRatio;

  // ===================================================

  float patternBoxRatio = givenBoxSize.x / givenBoxSize.y;
  vec2 patternBoxGivenSize = vec2(
  (u_worldWidth == 0.) ? u_resolution.x : givenBoxSize.x,
  (u_worldHeight == 0.) ? u_resolution.y : givenBoxSize.y
  );
  patternBoxRatio = patternBoxGivenSize.x / patternBoxGivenSize.y;

  vec3 boxSizeData = getBoxSize(patternBoxRatio, patternBoxGivenSize);
  v_patternBoxSize = boxSizeData.xy;
  float patternBoxNoFitBoxWidth = boxSizeData.z;
  vec2 patternBoxScale = u_resolution.xy / v_patternBoxSize;

  v_patternUV = uv;
  v_patternUV += graphicOffset / patternBoxScale;
  v_patternUV += boxOrigin;
  v_patternUV -= boxOrigin / patternBoxScale;
  v_patternUV *= u_resolution.xy;
  v_patternUV /= u_pixelRatio;
  if (u_fit > 0.) {
    v_patternUV *= (patternBoxNoFitBoxWidth / v_patternBoxSize.x);
  }
  v_patternUV /= u_scale;
  v_patternUV = graphicRotation * v_patternUV;
  v_patternUV += boxOrigin / patternBoxScale;
  v_patternUV -= boxOrigin;
  // x100 is a default multiplier between vertex and fragmant shaders
  // we use it to avoid UV presision issues
  v_patternUV *= .01;

  // ===================================================

  vec2 imageBoxSize;
  if (u_fit == 1.) { // contain
    imageBoxSize.x = min(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else if (u_fit == 2.) { // cover
    imageBoxSize.x = max(u_resolution.x / u_imageAspectRatio, u_resolution.y) * u_imageAspectRatio;
  } else {
    imageBoxSize.x = min(10.0, 10.0 / u_imageAspectRatio * u_imageAspectRatio);
  }
  imageBoxSize.y = imageBoxSize.x / u_imageAspectRatio;
  vec2 imageBoxScale = u_resolution.xy / imageBoxSize;

  v_imageUV = uv;
  v_imageUV *= imageBoxScale;
  v_imageUV += boxOrigin * (imageBoxScale - 1.);
  v_imageUV += graphicOffset;
  v_imageUV /= u_scale;
  v_imageUV.x *= u_imageAspectRatio;
  v_imageUV = graphicRotation * v_imageUV;
  v_imageUV.x /= u_imageAspectRatio;

  v_imageUV += .5;
  v_imageUV.y = 1. - v_imageUV.y;
}`,y=_;function b(e,t,n){let r=e.createShader(t);if(!r)throw Error(`metal-fx: gl.createShader returned null`);if(e.shaderSource(r,n),e.compileShader(r),!e.getShaderParameter(r,e.COMPILE_STATUS)){let t=e.getShaderInfoLog(r);throw e.deleteShader(r),Error(`metal-fx: shader compile failed: ${t??`(no info log)`}`)}return r}function x(e,t,n){let r=e.createProgram();if(!r)throw Error(`metal-fx: gl.createProgram returned null`);if(e.attachShader(r,t),e.attachShader(r,n),e.linkProgram(r),!e.getProgramParameter(r,e.LINK_STATUS)){let t=e.getProgramInfoLog(r);throw e.deleteProgram(r),Error(`metal-fx: program link failed: ${t??`(no info log)`}`)}return r}var S=140,C=40,w=1.6,T=1.3,E=null,D=null;function O(){var e;if(D!==null)return D;if(typeof document>`u`)return D=!1;try{let t=document.createElement(`canvas`).getContext(`webgl2`);D=!!t,(e=t?.getExtension(`WEBGL_lose_context`))==null||e.loseContext()}catch{D=!1}return D}var k=null;function A(e){k=e}var j=[`u_resolution`,`u_time`,`u_pixelRatio`,`u_colorBack`,`u_colorTint`,`u_repetition`,`u_softness`,`u_shiftRed`,`u_shiftBlue`,`u_distortion`,`u_contour`,`u_angle`,`u_shape`,`u_isImage`,`u_image`,`u_originX`,`u_originY`,`u_worldWidth`,`u_worldHeight`,`u_fit`,`u_scale`,`u_rotation`,`u_offsetX`,`u_offsetY`,`u_imageAspectRatio`];function M(e){e.enable(e.BLEND),e.blendFunc(e.ONE,e.ONE_MINUS_SRC_ALPHA);let t=x(e,b(e,e.VERTEX_SHADER,v),b(e,e.FRAGMENT_SHADER,y));e.useProgram(t);let n=e.createBuffer();if(!n)throw Error(`metal-fx: gl.createBuffer returned null`);e.bindBuffer(e.ARRAY_BUFFER,n),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW);let r=e.getAttribLocation(t,`a_position`);e.enableVertexAttribArray(r),e.vertexAttribPointer(r,2,e.FLOAT,!1,0,0);let i={};for(let n of j)i[n]=e.getUniformLocation(t,n);let a=e.createTexture();return a&&(e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,a),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),i.u_image&&e.uniform1i(i.u_image,0)),{program:t,buffer:n,uniforms:i,dummyTexture:a}}function N(){if(E)return E;let e=Math.min(m,typeof window<`u`&&window.devicePixelRatio||1),t=Math.round(p*e),n=typeof OffscreenCanvas<`u`,r,i;if(n)r=new OffscreenCanvas(t,t),i=r.getContext(`webgl2`,{alpha:!0,premultipliedAlpha:!0,antialias:!1});else{let e=document.createElement(`canvas`);e.width=t,e.height=t,i=e.getContext(`webgl2`,{alpha:!0,premultipliedAlpha:!0,antialias:!1,preserveDrawingBuffer:!0}),r=e}if(!i)throw Error(`metal-fx: WebGL2 not supported`);let{program:a,buffer:o,uniforms:s,dummyTexture:c}=M(i);return r.addEventListener(`webglcontextlost`,e=>{e.preventDefault(),E&&(E.contextLost=!0)},!1),r.addEventListener(`webglcontextrestored`,()=>{if(!E)return;let e=M(E.gl);E.program=e.program,E.buffer=e.buffer,E.uniforms=e.uniforms,E.dummyTexture=e.dummyTexture,E.presetDirty=!0,E.contextLost=!1,k?.()},!1),E={glCanvas:r,gl:i,program:a,buffer:o,uniforms:s,dummyTexture:c,preset:g.chromatic.modes.dark,presetDirty:!0,contextLost:!1,useOffscreen:n,frameBitmap:null,startMs:performance.now(),pausedMs:0,pausedAtMs:null,rafId:0,dpr:e,instances:new Set,frameCount:0,glowQueue:[],glowIdx:0,glowSkip:0,glowPixels:new Uint8Array(t*t*4),glowPixelsW:t,glowPixelsH:t},E}function P(){var e;if(!E)return;let{gl:t,program:n,buffer:r,frameBitmap:i,dummyTexture:a}=E;try{i?.close(),t.deleteBuffer(r),t.deleteProgram(n),a&&t.deleteTexture(a),(e=t.getExtension(`WEBGL_lose_context`))==null||e.loseContext()}catch{}E=null}var F=0;function I(){if(!E)return;let e=performance.now();if(e-F<u)return;F=e;let{gl:t,glCanvas:n}=E,r=n.width,i=n.height;(E.glowPixelsW!==r||E.glowPixelsH!==i)&&(E.glowPixelsW=r,E.glowPixelsH=i,E.glowPixels=new Uint8Array(r*i*4)),t.readPixels(0,0,r,i,t.RGBA,t.UNSIGNED_BYTE,E.glowPixels)}var L={bx:0,by:0};function R(e,t,n){if(!E)return L.bx=0,L.by=0,L;let{glCanvas:r}=E,i=r.width,a=r.height,o=e.dpr,s=e.cssWidth*o,c=e.cssHeight*o,l=S*o,u=C*o,d=i/l*s/e.shaderScale,f=a/u*c/e.shaderScale;d>i&&(d=i),f>a&&(f=a);let p=(i-d)/2,m=(a-f)/2,h=p+t/e.cssWidth*d,g=m+n/e.cssHeight*f;return L.bx=Math.round(h),L.by=Math.round(a-1-g),L}var z={r:0,g:0,b:0,lum:0,count:0};function B(e,t,n,r,i,a){let o=Math.max(1,a|0),s=Math.max(0,r-o),c=Math.min(t,r+o+1),l=Math.max(0,i-o),u=Math.min(n,i+o+1);z.r=0,z.g=0,z.b=0,z.lum=0,z.count=0;for(let n=l;n<u;n++){let r=n*t;for(let t=s;t<c;t++){let n=(r+t)*4;z.r+=e[n],z.g+=e[n+1],z.b+=e[n+2],z.lum+=(.2126*e[n]+.7152*e[n+1]+.0722*e[n+2])/255,z.count++}}return z}var V={r:255,g:255,b:255};function ee(e,t,n,r){if(!E)return 0;let i=R(e,t,n),a=B(E.glowPixels,E.glowPixelsW,E.glowPixelsH,i.bx,i.by,r);return a.count>0?a.lum/a.count:0}function te(e,t,n,r){if(!E)return V.r=255,V.g=255,V.b=255,V;let i=R(e,t,n),a=B(E.glowPixels,E.glowPixelsW,E.glowPixelsH,i.bx,i.by,r);return a.count===0?(V.r=255,V.g=255,V.b=255,V):(V.r=a.r/a.count,V.g=a.g/a.count,V.b=a.b/a.count,V)}function ne(e,t,n,r){if(!E)return V.r=255,V.g=255,V.b=255,V;let i=R(e,t,n),{glowPixels:a,glowPixelsW:o,glowPixelsH:s}=E,c=Math.max(1,r|0),l=Math.max(0,i.bx-c),u=Math.min(o,i.bx+c+1),d=Math.max(0,i.by-c),f=Math.min(s,i.by+c+1),p=-1;V.r=255,V.g=255,V.b=255;for(let e=d;e<f;e++){let t=e*o;for(let e=l;e<u;e++){let n=(t+e)*4,r=a[n],i=a[n+1],o=a[n+2],s=Math.max(r,i,o),c=(s>0?(s-Math.min(r,i,o))/s:0)*(.35+s/255*.65);c>p&&(p=c,V.r=r,V.g=i,V.b=o)}}return V}var re=14,ie=1.5,ae={x:0,y:0};function H(e=512){return{xy:new Float32Array(e*2),n:0}}function oe(e,t,n,r,i,a,o=H()){i=Math.max(0,Math.min(i,Math.min(n,r)/2));let s=60+Math.ceil(2*(n+r)/ie)+8;o.xy.length<s*2&&(o.xy=new Float32Array(s*2));let c=o.xy,l=0,u=(e,t)=>{a?(a(e,t,ae),c[l*2]=ae.x,c[l*2+1]=ae.y):(c[l*2]=e,c[l*2+1]=t),l++},d=(e,t,n,r)=>{let i=Math.hypot(n-e,r-t),a=Math.max(1,Math.ceil(i/ie));for(let i=0;i<a;i++){let o=i/a;u(e+(n-e)*o,t+(r-t)*o)}},f=(e,t,n,r)=>{for(let a=0;a<=re;a++){let o=n+(r-n)*(a/re);u(e+i*Math.cos(o),t+i*Math.sin(o))}};return d(e+i,t,e+n-i,t),f(e+n-i,t+i,-Math.PI/2,0),d(e+n,t+i,e+n,t+r-i),f(e+n-i,t+r-i,0,Math.PI/2),d(e+n-i,t+r,e+i,t+r),f(e+i,t+r-i,Math.PI/2,Math.PI),d(e,t+r-i,e,t+i),f(e+i,t+i,Math.PI,1.5*Math.PI),o.n=l,o}A(()=>{E&&E.instances.size>0&&E.pausedAtMs===null&&ke()}),typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>{!E||E.pausedAtMs!==null||E.contextLost||(document.hidden?Ae():E.instances.size>0&&ke())});function se(e){let t=N(),n=e.hostCanvas.getContext(`2d`,{alpha:!0});if(!n)throw Error(`metal-fx: canvas 2D context unavailable`);let r=e.scale??1,i={canvas:e.hostCanvas,ctx:n,cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius,kind:e.kind,ringCssPx:e.ringCssPx??(e.kind===`circle`?2:1)*r,shaderScale:e.shaderScale??(e.kind===`circle`?T:w)*r,opacityMul:e.opacityMul??1,glowGain:e.glowGain??1,visible:!0,paused:e.paused??!1,everCopied:!1,frozen:null,dpr:typeof window<`u`&&window.devicePixelRatio||1,scale:r,onAfterFrame:e.onAfterFrame,onComposite:e.onComposite,onFirstCopy:e.onFirstCopy,mask:e.mask??null,deform:null,deformLayers:null,overscan:0,cursorLight:null,glowFast:!1,rawCanvas:null,wantRaw:!1,ringCanvas:null,wantRing:!1};return ye(i),t.instances.add(i),t.rafId===0&&t.pausedAtMs===null&&ke(),i}function ce(e){if(!E)return;E.instances.delete(e);let t=E.glowQueue.indexOf(e);t!==-1&&E.glowQueue.splice(t,1),E.instances.size===0&&(Ae(),P())}function le(e){E&&(E.glowQueue.includes(e)||E.glowQueue.push(e))}function ue(e){if(!E)return;let t=E.glowQueue.indexOf(e);t!==-1&&E.glowQueue.splice(t,1)}function de(e,t){let n=!1;t.mask!==void 0&&(e.mask=t.mask),t.cssWidth!==void 0&&t.cssWidth!==e.cssWidth&&(e.cssWidth=t.cssWidth,n=!0),t.cssHeight!==void 0&&t.cssHeight!==e.cssHeight&&(e.cssHeight=t.cssHeight,n=!0),t.cornerRadius!==void 0&&(e.cornerRadius=t.cornerRadius),t.scale!==void 0&&(e.scale=t.scale),t.kind!==void 0&&t.kind!==e.kind&&(e.kind=t.kind,t.shaderScale===void 0&&(e.shaderScale=(t.kind===`circle`?T:w)*e.scale),t.ringCssPx===void 0&&(e.ringCssPx=(t.kind===`circle`?2:1)*e.scale)),t.shaderScale!==void 0&&(e.shaderScale=t.shaderScale),t.ringCssPx!==void 0&&(e.ringCssPx=t.ringCssPx),t.opacityMul!==void 0&&(e.opacityMul=t.opacityMul),t.glowGain!==void 0&&(e.glowGain=t.glowGain),t.paused!==void 0&&t.paused!==e.paused&&(e.paused=t.paused,t.paused?Ce(e):e.frozen=null,!t.paused&&E&&E.rafId===0&&E.pausedAtMs===null&&!E.contextLost&&ke()),n&&ye(e)}function fe(e,t){e.visible=t,t&&E&&E.rafId===0&&E.pausedAtMs===null&&!E.contextLost&&ke()}function pe(e){return(typeof window<`u`&&window.devicePixelRatio||1)!==e.dpr&&(ye(e),we(e),!0)}var me=null;function he(e,t){let n=N();n.preset=me??g[e].modes[t],n.presetDirty=!0}var ge=null;function _e(e){ge=e}function ve(e,t){!ge||!E||!e.visible||e.paused||E.glowQueue.includes(e)&&(e.glowFast=!!ge(e,t))}function ye(e){e.dpr=typeof window<`u`&&window.devicePixelRatio||1;let t=e.overscan,n=Math.max(1,Math.round((e.cssWidth+2*t)*e.dpr)),r=Math.max(1,Math.round((e.cssHeight+2*t)*e.dpr));e.canvas.width!==n&&(e.canvas.width=n),e.canvas.height!==r&&(e.canvas.height=r);let i=e.canvas.style;t>0?(i.left=`${-t}px`,i.top=`${-t}px`,i.width=`calc(100% + ${2*t}px)`,i.height=`calc(100% + ${2*t}px)`,i.borderRadius=`0`):i.left!==``&&(i.left=``,i.top=``,i.width=`100%`,i.height=`100%`,i.borderRadius=``)}function be(e){let{ctx:t,dpr:n,canvas:r}=e,i=e.ringCssPx*n,a=r.width,o=r.height,s=Math.max(0,(e.cornerRadius-e.ringCssPx)*n);t.save(),t.globalCompositeOperation=`destination-out`,t.fillStyle=`#000`,t.beginPath(),t.roundRect(i,i,a-2*i,o-2*i,s),t.fill(),t.restore()}var xe=H();function Se(e,t,n,r,i,a,o,s){let{xy:c,n:l}=oe(t,n,r,i,a,o,xe);e.beginPath();for(let t=0;t<l;t++)t===0?e.moveTo(c[0]*s,c[1]*s):e.lineTo(c[t*2]*s,c[t*2+1]*s);e.closePath()}function Ce(e){if(!E)return null;let t=E.frameBitmap??E.glCanvas,n=E.glCanvas.width,r=E.glCanvas.height;if(n<1||r<1)return null;let i=e.frozen;i||(i=document.createElement(`canvas`),e.frozen=i),(i.width!==n||i.height!==r)&&(i.width=n,i.height=r);let a=i.getContext(`2d`);return a?(a.clearRect(0,0,n,r),a.drawImage(t,0,0),i):(e.frozen=null,null)}function we(e){var t,n;if(!E)return;let r=(e.paused?e.frozen??Ce(e):null)??E.frameBitmap??E.glCanvas,i=e.dpr,a=e.canvas.width,o=e.canvas.height;if(a<1||o<1)return;let s=Math.max(1,Math.round(e.cssWidth*i)),c=Math.max(1,Math.round(e.cssHeight*i)),l=e.overscan*i,u=r.width,d=r.height,f=S*i,p=C*i,m=u/f*s/e.shaderScale,h=d/p*c/e.shaderScale;m>u&&(m=u),h>d&&(h=d);let g=Math.max(0,(u-m)/2),_=Math.max(0,(d-h)/2),v=e.opacityMul*E.preset.shaderOpacity,y=e.ctx;y.clearRect(0,0,a,o);let b=e.deform;if(e.mask){if(v<1&&(y.globalAlpha=v),y.drawImage(r,g,_,m,h,0,0,a,o),v<1&&(y.globalAlpha=1),e.wantRaw){let t=e.rawCanvas;t||(t=document.createElement(`canvas`),e.rawCanvas=t),(t.width!==a||t.height!==o)&&(t.width=a,t.height=o);let n=t.getContext(`2d`);n&&(n.clearRect(0,0,a,o),n.drawImage(e.canvas,0,0))}y.save(),y.globalCompositeOperation=`destination-in`,y.fillStyle=`#000`,e.mask(y,a,o,i),y.restore(),y.globalCompositeOperation=`source-over`}else if(!b)v<1&&(y.globalAlpha=v),y.drawImage(r,g,_,m,h,0,0,a,o),v<1&&(y.globalAlpha=1),be(e);else{let t=e.cssWidth,n=e.cssHeight,f=e.cornerRadius,p=e.ringCssPx,g=e.deformLayers;y.save(),y.translate(l,l);let _=s/m,x=c/h,S=Math.min(u,m*(s+2*l)/s),C=Math.min(d,h*(c+2*l)/c),w=Math.max(0,(u-S)/2),T=Math.max(0,(d-C)/2),E=S*_,D=C*x;if(v<1&&(y.globalAlpha=v),y.drawImage(r,w,T,S,C,s/2-E/2,c/2-D/2,E,D),v<1&&(y.globalAlpha=1),y.globalCompositeOperation=`destination-in`,Se(y,0,0,t,n,f,b,i),y.fillStyle=`#000`,y.fill(),y.globalCompositeOperation=`destination-out`,Se(y,p,p,t-2*p,n-2*p,Math.max(0,f-p),b,i),y.fill(),e.wantRing){let u=e.ringCanvas;u||(u=document.createElement(`canvas`),e.ringCanvas=u),(u.width!==a||u.height!==o)&&(u.width=a,u.height=o);let d=u.getContext(`2d`);d&&(d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation=`source-over`,d.clearRect(0,0,a,o),d.translate(l,l),v<1&&(d.globalAlpha=v),d.drawImage(r,w,T,S,C,s/2-E/2,c/2-D/2,E,D),d.globalAlpha=1,d.globalCompositeOperation=`destination-out`,Se(d,p,p,t-2*p,n-2*p,Math.max(0,f-p),b,i),d.fillStyle=`#000`,d.fill(),d.globalCompositeOperation=`source-over`,d.setTransform(1,0,0,1,0,0))}if(g!=null&&g.hairline){let e=g.hairline;y.globalCompositeOperation=`destination-over`,Se(y,e.inset,e.inset,t-2*e.inset,n-2*e.inset,Math.max(0,f-e.inset),b,i),y.lineWidth=e.width*i,y.strokeStyle=e.color,y.stroke()}if(g!=null&&g.fill&&(y.globalCompositeOperation=`destination-over`,Se(y,0,0,t,n,f,b,i),y.fillStyle=g.fill,y.fill()),g!=null&&g.rim){let e=g.rim;y.globalCompositeOperation=`source-over`,y.save(),Se(y,0,0,t,n,f,b,i),y.clip();let r=e.inset+e.width/2;Se(y,r,r,t-2*r,n-2*r,Math.max(0,f-r),b,i),y.lineWidth=e.width*i,y.strokeStyle=e.color,y.stroke(),y.restore()}y.restore(),y.globalCompositeOperation=`source-over`}if((t=e.onComposite)==null||t.call(e),e.onFirstCopy){let t=e.onFirstCopy;e.onFirstCopy=void 0,t()}(n=e.onAfterFrame)==null||n.call(e)}function Te(){if(!E)return;let{gl:e,uniforms:t,preset:n,glCanvas:r,dpr:i}=E;t.u_resolution&&e.uniform2f(t.u_resolution,r.width,r.height),t.u_pixelRatio&&e.uniform1f(t.u_pixelRatio,i),t.u_colorBack&&e.uniform4fv(t.u_colorBack,a(n.colorBack)),t.u_colorTint&&e.uniform4fv(t.u_colorTint,a(n.colorTint)),t.u_repetition&&e.uniform1f(t.u_repetition,n.repetition),t.u_softness&&e.uniform1f(t.u_softness,n.softness),t.u_shiftRed&&e.uniform1f(t.u_shiftRed,n.shiftRed),t.u_shiftBlue&&e.uniform1f(t.u_shiftBlue,n.shiftBlue),t.u_distortion&&e.uniform1f(t.u_distortion,n.distortion),t.u_contour&&e.uniform1f(t.u_contour,n.contour),t.u_angle&&e.uniform1f(t.u_angle,n.angle),t.u_shape&&e.uniform1f(t.u_shape,n.shape),t.u_isImage&&e.uniform1i(t.u_isImage,0),t.u_imageAspectRatio&&e.uniform1f(t.u_imageAspectRatio,1),t.u_originX&&e.uniform1f(t.u_originX,n.originX),t.u_originY&&e.uniform1f(t.u_originY,n.originY),t.u_worldWidth&&e.uniform1f(t.u_worldWidth,n.worldWidth),t.u_worldHeight&&e.uniform1f(t.u_worldHeight,n.worldHeight),t.u_fit&&e.uniform1f(t.u_fit,n.fit),t.u_scale&&e.uniform1f(t.u_scale,n.scale),t.u_rotation&&e.uniform1f(t.u_rotation,n.rotation),t.u_offsetX&&e.uniform1f(t.u_offsetX,n.offsetX),t.u_offsetY&&e.uniform1f(t.u_offsetY,n.offsetY),E.presetDirty=!1}function Ee(e){if(!E)return;let{gl:t,uniforms:n,preset:r,glCanvas:i}=E,a=(e-E.startMs-E.pausedMs)/1e3*r.speed;t.viewport(0,0,i.width,i.height),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),E.presetDirty&&Te(),n.u_time&&t.uniform1f(n.u_time,a),t.drawArrays(t.TRIANGLES,0,6),E.frameCount++}var De=0;function Oe(e){var t;if(!E)return;if(E.contextLost){E.rafId=0;return}let n=!1;for(let e of E.instances)if(e.visible&&(!e.paused||!e.everCopied)){n=!0;break}if(!n){E.rafId=0;return}if(E.rafId=requestAnimationFrame(Oe),e-De<c){if(ge)for(let t of E.glowQueue)t.glowFast&&t.visible&&!t.paused&&(t.glowFast=!!ge(t,e));return}De=e,Ee(e),I(),E.useOffscreen&&((t=E.frameBitmap)==null||t.close(),E.frameBitmap=E.glCanvas.transferToImageBitmap());for(let e of E.instances)e.visible&&(e.paused&&e.everCopied||(we(e),e.everCopied=!0));if(ge&&E.glowQueue.length>0&&++E.glowSkip%d===0)for(let t of E.glowQueue)t.visible&&!t.paused&&(t.glowFast=!!ge(t,e))}function ke(){!E||E.rafId!==0||(E.rafId=requestAnimationFrame(Oe))}function Ae(){E&&(E.rafId!==0&&cancelAnimationFrame(E.rafId),E.rafId=0)}var je={linear:e=>e,smoothstep:e=>e*e*(3-2*e)};function Me(e,t,n,r=je.linear){return{from:e,to:t,dur:n,ease:r,startMs:-1,val:e,done:!1}}function Ne(e,t){e.startMs=t,e.val=e.from,e.done=!1}function Pe(e,t){if(e.done||e.startMs<0)return e.val;let n=Math.min(1,(t-e.startMs)/e.dur);return e.val=e.from+(e.to-e.from)*e.ease(n),n>=1&&(e.done=!0),e.val}var U={...Object.freeze({haloOpMul:2,extraIntensity:3.51,peakOp:.85,baseOp:.34,inset:1.5,extraOutward:1,wanderRange:15,wanderLerp:.0075,fadeRate:.00875,lumLo:.08,lumHi:.32,minDwellMs:1500,relocFadeMs:300,relocFadeOutMs:450,pointGain:2.5,haloHalfLen:7.8,extraHalfLen:9.13952/3,haloStrokeXl:26.4,haloStrokeLg:15.6,haloStrokeMd:7.2,haloStrokeSm:3,haloBlurXl:8.4,haloBlurLg:4.8,haloBlurMd:2.1,haloBlurSm:.9,haloOpXl:.385,haloOpLg:.595,haloOpMd:.7,haloOpSm:.7,extraStrokeOuter:4/3,extraStrokeCore:2/3,extraBlurOuter:2/3,extraBlurCore:1.35/3,extraFadeR:13/3,extraOpOuter:.85})},Fe=new Set;function Ie(e){return Fe.add(e),()=>{Fe.delete(e)}}var Le={...Object.freeze({enabled:!0,reach:56,fadeMs:200,cursor:!0,cursorDistance:186,cursorStrength:3.35,cursorDiffuse:1.4,cursorFalloff:37,cursorDepth:.4,cursorEdge:0,cursorReach:11.5,cursorBlur:.5,cursorZoom:3,spill:!1,spillRadius:48,spillStrength:.55,spillOffset:.35,spillLumGain:.7,spillSaturation:1.3,spillInside:.5,spillBlur:0,catchLight:!1,catchFollow:.25,catchGain:1})},Re=!1,ze=0,Be=0,Ve=0,He=!1,Ue=0,We=0,W=NaN,Ge=NaN,Ke=0,qe=0,Je=0,Ye=0,G=null,K={d:0,nx:0,ny:0,k:1,left:0,top:0},Xe={x:0,y:0},q={r:255,g:255,b:255},J=null,Ze=``,Qe=-1,$e=-1,et=!1;function tt(){Ve++,at()}function nt(){Ve=Math.max(0,Ve-1),Ve===0&&ot()}var rt=e=>typeof window.matchMedia==`function`&&window.matchMedia(e).matches;function it(){if(Re||performance.now()<ze||1)return!1;let e=window.visualViewport;return!(e&&Math.abs(e.scale-1)>.001)}function at(){He||Ve===0||typeof document>`u`||rt(`(pointer: fine)`)&&(He=!0,document.addEventListener(`pointermove`,lt,{passive:!0}),document.addEventListener(`pointerleave`,Y),document.addEventListener(`pointercancel`,Y),document.addEventListener(`keydown`,ut,{passive:!0}),document.addEventListener(`visibilitychange`,Y),window.addEventListener(`blur`,Y))}function ot(){He&&(He=!1,document.removeEventListener(`pointermove`,lt),document.removeEventListener(`pointerleave`,Y),document.removeEventListener(`pointercancel`,Y),document.removeEventListener(`keydown`,ut),document.removeEventListener(`visibilitychange`,Y),window.removeEventListener(`blur`,Y),Ue!==0&&(cancelAnimationFrame(Ue),Ue=0),G&&=(G.cursorLight=null,null),Je=0,Ye=0,J&&(J.remove(),J=null,Ze=``,Qe=-1,$e=-1,et=!1),Et(),pt&&=(pt.remove(),null))}var st=!0,ct=!1;function lt(e){st=e.pointerType===`mouse`||e.pointerType===``,ct=!1,W=Ke=e.clientX,Ge=qe=e.clientY,mt&&pt&&(st&&wt(W,Ge)||Et()),dt()}function ut(){ct=!0,Et()}function Y(){W=Ge=NaN,dt()}function dt(){!He||Ue!==0||(We=performance.now(),Ue=requestAnimationFrame(kt))}function ft(e,t,n,r,i,a,o){let s=a===`circle`?Math.min(n,r)/2:Math.max(0,Math.min(i,Math.min(n,r)/2)),c=n/2,l=r/2,u=Math.max(0,n/2-s),d=Math.max(0,r/2-s),f=Math.max(-u,Math.min(u,e-c)),p=Math.max(-d,Math.min(d,t-l)),m=e-c-f,h=t-l-p,g=Math.hypot(m,h);if(g>1e-6)return o.x=c+f+m/g*s,o.y=l+p+h/g*s,g-s;let _=e,v=n-e,y=t,b=r-t,x=Math.min(_,v,y,b);return x===_?(o.x=0,o.y=t):x===v?(o.x=n,o.y=t):x===y?(o.x=e,o.y=0):(o.x=e,o.y=r),-x}var pt=null,mt=!1,ht=!1,gt=``,X=null,_t=``,vt=/^(INPUT|TEXTAREA|SELECT)$/,yt=new WeakMap,bt=0,xt=null;function St(e){let t=e;for(;t&&t!==document.body;){if(vt.test(t.tagName)||t.isContentEditable)return!0;t=t.parentElement}return!1}function Ct(){if(pt)return!0;let e=document.createElement(`div`);e.className=`metal-fx-cursor`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`position:fixed;left:0;top:0;pointer-events:none;z-index:2147483001;will-change:transform;transform-origin:0 0;display:none`;let t=document.createElement(`canvas`);t.style.display=`block`,e.appendChild(t),document.body.appendChild(e);let n=t.getContext(`2d`),r=document.createElement(`canvas`).getContext(`2d`);return!n||!r?(e.remove(),!1):(pt=e,!0)}function wt(e,t,n=!1){let r=performance.now();if(!n&&ht&&r-bt<12)return!0;bt=r;let i=document.elementFromPoint(e,t);if(!i)return Tt(),!1;if(i===xt&&ht)return!0;xt=i;let a=yt.get(i);if(a===void 0){if(a=!St(i),a){let e=getComputedStyle(i).cursor;a=e===`auto`||e==="default"||e===`none`}yt.set(i,a)}if(!a)return Tt(),!1;if(!ht){let e=document.documentElement;gt=e.style.cursor,e.style.cursor=`none`,ht=!0}return i!==X&&(X&&(X.style.cursor=_t,X=null,_t=``),getComputedStyle(i).cursor!==`none`&&(X=i,_t=i.style.cursor,i.style.cursor=`none`)),!0}function Tt(){X&&(X.isConnected&&(X.style.cursor=_t),X=null,_t=``),ht&&(document.documentElement.style.cursor=gt,ht=!1,gt=``),xt=null,yt=new WeakMap}function Et(){Tt(),pt&&mt&&(pt.style.display=`none`,mt=!1)}function Dt(){if(J)return J;let e=document.createElement(`div`);return e.className=`metal-fx-cursor-spill`,e.setAttribute(`aria-hidden`,`true`),e.style.cssText=`position:fixed;left:0;top:0;pointer-events:none;z-index:2147483000;border-radius:50%;mix-blend-mode:plus-lighter;will-change:transform,opacity;opacity:0;display:none`,document.body.appendChild(e),J=e,e}function Ot(){!J||!et||(J.style.display=`none`,J.style.opacity=`0`,et=!1)}function kt(e){if(Ue=0,!He)return;let t=performance.now();try{At(e)}catch(e){Re=!0,Et(),Ot(),G&&=(G.cursorLight=null,null),typeof console<`u`&&console.warn(`metal-fx: cursor light disabled after error`,e);return}performance.now()-t>6?++Be>=20&&(Be=0,ze=performance.now()+5e3,Et()):Be>0&&Be--}function At(e){let t=Le,n=Math.min(.05,Math.max(.001,(e-We)/1e3));We=e;let r=null,i=0,a=0;if(t.enabled&&E&&!Number.isNaN(W)){let e=1/0,n=Math.max(1,t.reach),o=t.cursor&&it()?Math.max(1,t.cursorDistance):0,s=Math.max(n,o);for(let t of E.instances){if(!t.visible||!t.canvas.isConnected)continue;let n=t.canvas.getBoundingClientRect();if(n.width<=0)continue;let i=t.overscan,a=n.width/(t.cssWidth+2*i),o=n.left+i*a,c=n.top+i*a,l=s*a;if(W<o-l||W>o+t.cssWidth*a+l||Ge<c-l||Ge>c+t.cssHeight*a+l)continue;let u=ft((W-o)/a,(Ge-c)/a,t.cssWidth,t.cssHeight,t.cornerRadius,t.kind,Xe),d=Math.abs(u);d<=s&&d<e&&(e=d,r=t,K.d=u,K.nx=Xe.x,K.ny=Xe.y,K.k=a,K.left=o,K.top=c)}if(r){if(e<=n){let t=1-e/n;i=t*t*(3-2*t)}e<=o&&(a=Math.min(1,(1-e/o)*3)),r.mask&&(K.nx=r.cssWidth/2,K.ny=r.cssHeight/2,r.wantRaw=!0)}}let c=1-Math.exp(-(n*1e3)/(Math.max(1,t.fadeMs)/3));if(Je+=(i-Je)*c,Ye+=(a-Ye)*c,r&&r!==G&&(G&&(G.cursorLight=null,ve(G,e)),G=r),!r&&Je<.002&&Ye<.002){Je=0,Ye=0,G&&=(G.cursorLight=null,ve(G,e),null),Ot(),Et();return}if(G){if(t.catchLight){let e=G.cursorLight??(G.cursorLight={x:0,y:0,w:0});e.x=K.nx,e.y=K.ny,e.w=Je}else G.cursorLight&&(G.cursorLight=null);if(ve(G,e),t.cursor&&Ye>.002&&st&&!ct&&!Number.isNaN(W)&&it()&&Ct()&&wt(W,Ge)||Et(),t.spill){let e=Dt(),n=te(G,K.nx,K.ny,2),r=ee(G,K.nx,K.ny,3),i=Math.max(n.r,n.g,n.b)||1,a=o(n.r*255/i,n.g*255/i,n.b*255/i),[c,l,u]=s(a[0],Math.min(1,a[1]*t.spillSaturation),1);q.r+=(c-q.r)*.15,q.g+=(l-q.g)*.15,q.b+=(u-q.b)*.15;let d=Math.round(q.r/6)*6,f=Math.round(q.g/6)*6,p=Math.round(q.b/6)*6,m=`radial-gradient(closest-side, rgba(${d},${f},${p},1) 0%, rgba(${d},${f},${p},0.35) 45%, rgba(${d},${f},${p},0) 100%)`;m!==Ze&&(Ze=m,e.style.background=m);let h=Math.max(1,t.spillRadius*K.k);h!==Qe&&(Qe=h,e.style.width=`${(2*h).toFixed(1)}px`,e.style.height=`${(2*h).toFixed(1)}px`),t.spillBlur!==$e&&($e=t.spillBlur,e.style.filter=t.spillBlur>0?`blur(${t.spillBlur}px)`:``);let g=K.left+K.nx*K.k,_=K.top+K.ny*K.k,v=Ke+(g-Ke)*t.spillOffset,y=qe+(_-qe)*t.spillOffset;e.style.transform=`translate3d(${(v-h).toFixed(2)}px,${(y-h).toFixed(2)}px,0)`;let b=Math.min(1,Math.max(0,r/.3)),x=1-t.spillLumGain+t.spillLumGain*b,S=K.d<0?t.spillInside:1,C=Math.max(0,Math.min(1,t.spillStrength*Je*x*S));et||=(e.style.display=``,!0),e.style.opacity=C.toFixed(3)}else Ot();Ue=requestAnimationFrame(kt)}}var jt=new Map;function Mt(e,t){let n=Math.sqrt(12*e*e/t+1),r=Math.floor(n);r%2==0&&r--;let i=r+2,a=(12*e*e-t*r*r-4*t*r-3*t)/(-4*r-4),o=Math.round(a),s=[];for(let e=0;e<t;e++)s.push(e<o?r:i);return s}function Nt(e,t,n,r,i){let a=1/(i+i+1);for(let o=0;o<r;o++){let r=o*n,s=0;for(let t=-i;t<=i;t++)s+=e[r+Math.min(n-1,Math.max(0,t))];for(let o=0;o<n;o++){t[r+o]=s*a;let c=r+Math.max(0,o-i),l=r+Math.min(n-1,o+i+1);s+=e[l]-e[c]}}}function Pt(e,t,n,r,i){let a=1/(i+i+1);for(let o=0;o<n;o++){let s=0;for(let t=-i;t<=i;t++)s+=e[Math.min(r-1,Math.max(0,t))*n+o];for(let c=0;c<r;c++){t[c*n+o]=s*a;let l=Math.max(0,c-i)*n+o,u=Math.min(r-1,c+i+1)*n+o;s+=e[u]-e[l]}}}function Ft(e,t,n,r){if(r<=.05)return e;let i=new Float32Array(e.length),a=e;for(let e of Mt(r,3)){let r=(e-1)/2;Nt(a,i,t,n,r),Pt(i,a,t,n,r)}return a}function It(e,t,n,r,i,a,o){let s=document.createElement(`canvas`);s.width=n,s.height=r;let c=s.getContext(`2d`,{willReadFrequently:!0}),l=new Float32Array(n*r);if(!c)return l;c.scale(i,i),c.strokeStyle=`#fff`,c.lineCap=`round`,c.lineJoin=`round`,c.lineWidth=t,c.beginPath(),c.moveTo(a-e,o),c.lineTo(a+e,o),c.stroke();let u=c.getImageData(0,0,n,r).data;for(let e=0,t=3;e<l.length;e++,t+=4)l[e]=u[t]/255;return l}function Lt(e,t,n,r,i){let a=0;for(let t of e)a=Math.max(a,(t.stroke/2+3*t.blur)*n);let o=Math.ceil(a)+1,s=2*t+2*o,c=2*o,l=Math.ceil(s*r),u=Math.ceil(c*r),d=new Float32Array(l*u);for(let i of e){let e=It(t,i.stroke*n,l,u,r,o,o);e=Ft(e,l,u,i.blur*n*r);let a=i.opacity;for(let t=0;t<d.length;t++){let n=e[t]*a;d[t]=d[t]+n*(1-d[t])}}if(i>0){let e=o*r,t=o*r,a=i*n*r;for(let n=0;n<u;n++)for(let r=0;r<l;r++){let i=Math.hypot(r+.5-e,n+.5-t)/a,o;o=i<=.3?1:i<=.65?1-(i-.3)/.35*.75:i<1?.25*(1-(i-.65)/.35):0,d[n*l+r]*=o}}let f=document.createElement(`canvas`);f.width=l,f.height=u;let p=f.getContext(`2d`),m=new Uint8ClampedArray(l*u);for(let e=0;e<d.length;e++)m[e]=Math.round(Math.min(1,d[e])*255);if(p){let e=p.createImageData(l,u),t=e.data;for(let e=0,n=0;e<d.length;e++,n+=4)t[n]=255,t[n+1]=255,t[n+2]=255,t[n+3]=m[e];p.putImageData(e,0,0)}return{canvas:f,alpha:m,w:s,h:c,ax:o,ay:o}}function Rt(){return[U.haloStrokeXl,U.haloStrokeLg,U.haloStrokeMd,U.haloStrokeSm,U.haloBlurXl,U.haloBlurLg,U.haloBlurMd,U.haloBlurSm,U.haloOpXl,U.haloOpLg,U.haloOpMd,U.haloOpSm,U.extraStrokeOuter,U.extraStrokeCore,U.extraBlurOuter,U.extraBlurCore,U.extraFadeR,U.extraOpOuter].join(`,`)}function zt(e,t,n){let r=`h|${e.toFixed(2)}|${t}|${n}|${Rt()}`,i=jt.get(r);return i||(i=Lt([{stroke:U.haloStrokeXl,blur:U.haloBlurXl,opacity:U.haloOpXl},{stroke:U.haloStrokeLg,blur:U.haloBlurLg,opacity:U.haloOpLg},{stroke:U.haloStrokeMd,blur:U.haloBlurMd,opacity:U.haloOpMd},{stroke:U.haloStrokeSm,blur:U.haloBlurSm,opacity:U.haloOpSm}],e,t,n,0),jt.set(r,i)),i}function Bt(e,t,n){let r=`e|${e.toFixed(2)}|${t}|${n}|${Rt()}`,i=jt.get(r);return i||(i=Lt([{stroke:U.extraStrokeOuter,blur:U.extraBlurOuter,opacity:U.extraOpOuter},{stroke:U.extraStrokeCore,blur:U.extraBlurCore,opacity:1}],e,t,n,U.extraFadeR),jt.set(r,i)),i}function Vt(e,t,n,r,i){let a=t<<16|n<<8|r;if(i.canvas&&i.tint===a&&i.src===e)return i.canvas;let o=i.canvas,s=i.img;(!o||!s||i.src!==e)&&(o=document.createElement(`canvas`),o.width=e.canvas.width,o.height=e.canvas.height,s=o.getContext(`2d`)?.createImageData(o.width,o.height)??null);let c=o.getContext(`2d`);if(c&&s){let i=s.data,a=e.alpha;for(let e=0,o=0;e<a.length;e++,o+=4)i[o]=t,i[o+1]=n,i[o+2]=r,i[o+3]=a[e];c.putImageData(s,0,0)}return i.canvas=o,i.img=s,i.tint=a,i.src=e,o}function Ht(e,t,n){let r=Math.max(0,Math.min(n,Math.min(e,t)/2));return 2*Math.max(0,e-2*r)+2*Math.max(0,t-2*r)+2*Math.PI*r}function Ut(e,t,n,r){return r===`circle`?2*Math.PI*Math.max(0,Math.min(n,Math.min(e,t)/2)):Ht(e,t,n)}function Wt(e,t,n,r,i,a,o,s){let c=s||{x:0,y:0},l=Math.max(0,Math.min(r,Math.min(t,n)/2));if(o===`circle`){let r=2*Math.PI*l;if(r<=1e-4)return c.x=t*.5,c.y=n*.5,c;e=(e%r+r)%r;let o=-Math.PI/2+e/r*Math.PI*2,s=Math.max(0,l-i+a);return c.x=t*.5+s*Math.cos(o),c.y=n*.5+s*Math.sin(o),c}let u=Math.max(0,t-2*l),d=Math.max(0,n-2*l),f=Math.PI*l/2,p=2*(u+d)+4*f;e=(e%p+p)%p;let m=Math.max(0,l-i+a),h=e;if(h<u)return c.x=l+h,c.y=i-a,c;if(h-=u,h<f){let e=-Math.PI/2+(f>0?h/f:0)*(Math.PI/2);return c.x=t-l+m*Math.cos(e),c.y=l+m*Math.sin(e),c}if(h-=f,h<d)return c.x=t-i+a,c.y=l+h,c;if(h-=d,h<f){let e=(f>0?h/f:0)*(Math.PI/2);return c.x=t-l+m*Math.cos(e),c.y=n-l+m*Math.sin(e),c}if(h-=f,h<u)return c.x=t-l-h,c.y=n-i+a,c;if(h-=u,h<f){let e=Math.PI/2+(f>0?h/f:0)*(Math.PI/2);return c.x=l+m*Math.cos(e),c.y=n-l+m*Math.sin(e),c}if(h-=f,h<d)return c.x=i-a,c.y=n-l-h,c;h-=d;let g=Math.PI+(f>0?h/f:0)*(Math.PI/2);return c.x=l+m*Math.cos(g),c.y=l+m*Math.sin(g),c}function Gt(e,t,n,r,i,a){let o=Math.max(0,Math.min(i,Math.min(n,r)/2));if(a===`circle`){let i=2*Math.PI*o;return i<=1e-4?0:((Math.atan2(t-r/2,e-n/2)+Math.PI/2)/(2*Math.PI)*i%i+i)%i}let s=Math.max(0,n-2*o),c=Math.max(0,r-2*o),l=Math.PI*o/2,u=Math.PI/2,d=s,f=d+l,p=f+c,m=p+l,h=m+s,g=h+l,_=g+c,v=e>=o&&e<=n-o,y=t>=o&&t<=r-o;if(v&&y){let i=e,a=n-e,s=t,c=r-t,l=Math.min(i,a,s,c);return l===s?e-o:l===a?f+(t-o):l===c?m+(n-o-e):g+(r-o-t)}return v?t<r/2?e-o:m+(n-o-e):y?e>n/2?f+(t-o):g+(r-o-t):e>n/2&&t<r/2?d+(Math.atan2(t-o,e-(n-o))+u)/u*l:e>n/2?p+Math.atan2(t-(r-o),e-(n-o))/u*l:t>r/2?h+(Math.atan2(t-(r-o),e-o)-u)/u*l:_+(Math.atan2(t-o,e-o)+Math.PI)/u*l}var Kt={x:0,y:0},qt={x:0,y:0};function Jt(e,t,n,r,i,a){return Wt(e-.1,t,n,r,i,0,a,Kt),Wt(e+.1,t,n,r,i,0,a,qt),Math.atan2(qt.y-Kt.y,qt.x-Kt.x)}function Yt(e,t,n){if(e===t)return n<e?0:1;let r=Math.max(0,Math.min(1,(n-e)/(t-e)));return r*r*(3-2*r)}function Xt(e){if(e.samplePoints&&e.samplePoints.length>0)return e.samplePoints.map((e,t)=>({x:e.x,y:e.y,arc:t}));let t=Ut(e.width,e.height,e.cornerRadius,e.kind),n=U.inset*(e.scale??1),r=[];for(let i=0;i<f;i++){let a=i/f*t,o=Wt(a,e.width,e.height,e.cornerRadius,n,0,e.kind);r.push({x:o.x,y:o.y,arc:a})}return r}var Zt=.05,Qt=1e3/15*120,$t=1e3/15,en=2e3,tn=400,nn=2.625,rn=1.008,an=.31,on=140,sn=40,cn=20,ln=34,un=.25,dn=.01,fn=.004,pn=.5,mn=3.5,Z={x:0,y:0};function hn(e,t){let{width:n,height:r}=t,i=t.scale??1,a=Math.min(3,typeof window<`u`&&window.devicePixelRatio||1),o=Ut(n,r,t.cornerRadius,t.kind)/Ht(on,sn,cn),s=Math.max(1,U.haloHalfLen*o),c=Math.max(.6,U.extraHalfLen*o),l=zt(s,i,a),u=Bt(c,i,a),d=Math.ceil(Math.max(l.ay,u.ay)+U.extraOutward*o*i+2),f=document.createElement(`div`);f.className=`metal-fx-glow-svg`,f.setAttribute(`aria-hidden`,`true`);let p=document.createElement(`div`);p.className=`metal-fx-glow-env`,p.style.cssText=`position:absolute;inset:0;pointer-events:none;opacity:0`;let m=document.createElement(`canvas`);m.className=`metal-fx-glow-canvas`;let h=n+2*d,g=r+2*d;m.width=Math.ceil(h*a),m.height=Math.ceil(g*a),m.style.cssText=`position:absolute;left:${-d}px;top:${-d}px;width:${h}px;height:${g}px;pointer-events:none`,p.appendChild(m),f.appendChild(p),e.appendChild(f);let _=m.getContext(`2d`,{willReadFrequently:!!t.maskDataUrl});if(!_)throw Error(`metal-fx: glow canvas 2D context unavailable`);let v={wrap:f,env:p,canvas:m,ctx:_,surroundPath:null,bandPath:null,maskAlpha:null,maskReady:!1,margin:d,dpr:a,halo:l,extra:u,haloTint:{canvas:null,img:null,tint:-1,src:null},extraTint:{canvas:null,img:null,tint:-1,src:null},mO:H(),mI:H(),maskSum:NaN,maskDeformed:!1,deform:null,width:n,height:r,cornerRadius:t.cornerRadius,kind:t.kind,scale:i,perim:Xt(t),pointMode:!!(t.samplePoints&&t.samplePoints.length>0),currentIdx:0,appearedAt:0,glowOpacity:0,relocTween:null,relocNextIdx:-1,relocMul:0,envClock:0,cursorMode:!1,cursorArc:0,cursorTargetArc:0,lastTickMs:0,wanderS:0,wanderTargetS:0,wanderFrames:0,tintFrom:{r:255,g:255,b:255},tintTarget:{r:255,g:255,b:255},tintTween:null,tintHoldUntil:0,dX:NaN,dY:NaN,dAng:NaN,dEX:NaN,dEY:NaN,dHOp:NaN,dEOp:NaN,dHaloTint:``,dExtraTint:``,dirty:!0,dEnv:-1};if(t.maskDataUrl){let e=new Image;e.onload=()=>{let t=document.createElement(`canvas`);t.width=m.width,t.height=m.height;let i=t.getContext(`2d`,{willReadFrequently:!0});if(!i)return;i.scale(a,a),i.drawImage(e,d,d,n,r);let o=i.getImageData(0,0,t.width,t.height).data,s=t.width*t.height,c=new Float32Array(s);for(let e=0,t=3;e<s;e++,t+=4)c[e]=o[t]/255;let l=Ft(Float32Array.from(c),t.width,t.height,mn*a),u=0;for(let e=0;e<s;e++)l[e]>u&&(u=l[e]);let f=u>0?pn/u:0,p=new Uint8ClampedArray(s);for(let e=0;e<s;e++)p[e]=Math.round(Math.max(c[e],l[e]*f)*255);v.maskAlpha=p,v.maskReady=!0,v.dirty=!0},e.src=t.maskDataUrl}else gn(v,null);return v}function gn(e,t){if(e.pointMode)return;let{margin:n,width:r,height:i,cornerRadius:a}=e,o=e.kind===`circle`?2:1;oe(0,0,r,i,a,t,e.mO),oe(o,o,r-2*o,i-2*o,Math.max(0,a-o),t,e.mI);let s=new Path2D;_n(s,e.mO,n);let c=new Path2D;_n(c,e.mO,n),_n(c,e.mI,n);let l=new Path2D;l.rect(0,0,r+2*n,i+2*n),l.addPath(s),e.surroundPath=l,e.bandPath=c,e.maskReady=!0}function _n(e,t,n){let r=t.xy;for(let i=0;i<t.n;i++){let t=r[i*2]+n,a=r[i*2+1]+n;i===0?e.moveTo(t,a):e.lineTo(t,a)}e.closePath()}function vn(e,t){if(!e)return 0;oe(0,0,t.width,t.height,t.cornerRadius,e,t.mO);let n=0,r=t.mO.xy;for(let e=0;e<t.mO.n;e+=4)n+=r[e*2]*1.37+r[e*2+1];return n}function yn(e,t){if(e.deform=t,!e.pointMode){if(t){let n=vn(t,e);n!==e.maskSum&&(e.maskSum=n,gn(e,t),e.maskDeformed=!0,e.dirty=!0)}else e.maskDeformed&&(e.maskSum=NaN,gn(e,null),e.maskDeformed=!1,e.dirty=!0)}}function bn(e,t,n,r,i=`dark`){var a;let{width:c,height:l,cornerRadius:u,perim:d}=e;if(d.length===0)return!1;let f=-1,p=e.currentIdx,m=0;for(let n=0;n<d.length;n++){let r=d[n],i=ee(t,r.x,r.y,2);i>f&&(f=i,p=n),n===e.currentIdx&&(m=i)}let h=e.appearedAt>0&&n-e.appearedAt<U.minDwellMs,g=U.baseOp+(U.peakOp-U.baseOp)*Yt(U.lumLo,U.lumHi,m),_=!h&&f-m>Zt,v=t.cursorLight,y=Le.enabled&&Le.catchLight&&!e.pointMode&&!!v&&v.w>.02,b=Ut(c,l,u,e.kind);y&&(e.cursorTargetArc=Gt(v.x,v.y,c,l,u,e.kind));let x=y?Math.min(1,U.peakOp*Le.catchGain*v.w):0,S=e.lastTickMs>0?Math.min(200,Math.max(.5,n-e.lastTickMs)):$t;e.lastTickMs=n,e.envClock+=Math.min(S,ln);let C=e=>1-(1-e)**(S/$t),w=Math.max(1,U.relocFadeMs),T=Math.max(1,U.relocFadeOutMs),E=()=>{e.appearedAt=n,e.wanderS=0,e.wanderTargetS=0,e.wanderFrames=0,e.relocTween=Me(0,1,w,je.smoothstep),Ne(e.relocTween,e.envClock)},D=t=>{e.relocNextIdx=t,e.relocTween=Me(1,0,T,je.smoothstep),Ne(e.relocTween,e.envClock)};if((a=e.relocTween)!=null&&a.done&&e.relocTween.to===0){let n=e.relocNextIdx;if(n===-2&&!y&&(n=-3),n===-3)e.cursorMode=!1,e.appearedAt=0,e.relocTween=null;else if(n===-2)e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=x,E();else{e.currentIdx=n;let r=d[e.currentIdx],i=ee(t,r.x,r.y,2);e.glowOpacity=U.baseOp+(U.peakOp-U.baseOp)*Yt(U.lumLo,U.lumHi,i),E()}}if((!e.relocTween||e.relocTween.done)&&(e.appearedAt===0?(y?(e.cursorMode=!0,e.cursorArc=e.cursorTargetArc,e.glowOpacity=x):(e.cursorMode=!1,e.currentIdx=p,e.glowOpacity=g),E()):y===e.cursorMode?!e.cursorMode&&_&&D(p):D(y?-2:-3)),e.cursorMode){y&&(e.glowOpacity=x);let t=1-(1-Math.max(.01,Math.min(1,Le.catchFollow)))**(S/(1e3/60)),n=e.cursorTargetArc-e.cursorArc;n=(n%b+b*1.5)%b-b/2,e.cursorArc+=n*t}else e.glowOpacity+=(g-e.glowOpacity)*C(U.fadeRate);e.glowOpacity=Math.max(0,Math.min(1,e.glowOpacity)),e.relocMul=e.relocTween?Pe(e.relocTween,e.envClock):1;let O=Ut(c,l,u,e.kind)/Ht(on,sn,cn),k=U.wanderRange*O;e.wanderFrames+=S,e.wanderFrames>=Qt&&(e.wanderTargetS=(Math.random()*2-1)*k,e.wanderFrames=0),e.wanderS+=(e.wanderTargetS-e.wanderS)*C(U.wanderLerp);let A,j,M,N,P;if(e.pointMode){let t=d[e.currentIdx];A=t.x+e.wanderS,j=t.y,M=0,N=A,P=j}else{let t=e.cursorMode?e.cursorArc:d[e.currentIdx].arc+e.wanderS,n=U.inset*e.scale;Wt(t,c,l,u,n,0,e.kind,Z),A=Z.x,j=Z.y,M=Jt(t,c,l,u,n,e.kind),Wt(t,c,l,u,n,U.extraOutward*O*e.scale,e.kind,Z),N=Z.x,P=Z.y}e.deform&&(e.deform(A,j,Z),A=Z.x,j=Z.y,e.deform(N,P,Z),N=Z.x,P=Z.y);let F=i===`light`,I=F?ne(t,A,j,2):te(t,A,j,2);e.tintTween?e.tintTween.done&&(F?(e.tintFrom={r:e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*e.tintTween.val,g:e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*e.tintTween.val,b:e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*e.tintTween.val},e.tintTarget={...I},e.tintTween=Me(0,1,tn),Ne(e.tintTween,n)):n>=e.tintHoldUntil&&(e.tintFrom={...e.tintTarget},e.tintTarget={...I},e.tintTween=Me(0,1,tn),Ne(e.tintTween,n),e.tintHoldUntil=n+en)):(e.tintFrom={...I},e.tintTarget={...I},e.tintTween=Me(0,1,tn),Ne(e.tintTween,n),e.tintHoldUntil=F?0:n+en),Pe(e.tintTween,n);let L=e.tintTween.val,R,z,B;if(F)R=Math.round(e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*L),z=Math.round(e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*L),B=Math.round(e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*L);else{let t=e.tintFrom.r+(e.tintTarget.r-e.tintFrom.r)*L,n=e.tintFrom.g+(e.tintTarget.g-e.tintFrom.g)*L,r=e.tintFrom.b+(e.tintTarget.b-e.tintFrom.b)*L,i=Math.max(t,n,r)||1;R=Math.round(t/i*255),z=Math.round(n/i*255),B=Math.round(r/i*255)}let V=`rgb(${R},${z},${B})`,re=`#ffffff`;if(F){let e=o(R,z,B),[t,n,r]=s(e[0],Math.min(1,e[1]*nn),Math.max(an,e[2]*rn));re=`rgb(${t},${n},${r})`}let ie=Math.max(0,Math.min(1,r))*(e.pointMode?U.pointGain:1),ae=Math.min(1,e.glowOpacity*U.haloOpMul*ie),H=Math.min(1,e.glowOpacity*U.extraIntensity*ie);if(Math.abs(e.relocMul-e.dEnv)>.002){let t=e.relocMul>=.998&&e.dEnv<.998;e.dEnv=e.relocMul,e.env.style.opacity=e.relocMul.toFixed(3),t&&(e.dirty=!0)}let oe=!(!e.relocTween||e.relocTween.done)||e.cursorMode,se=!(Math.abs(A-e.dX)<un&&Math.abs(j-e.dY)<un&&Math.abs(M-e.dAng)<dn&&Math.abs(N-e.dEX)<un&&Math.abs(P-e.dEY)<un),ce=!(Math.abs(ae-e.dHOp)<fn&&Math.abs(H-e.dEOp)<fn),le=V!==e.dHaloTint||re!==e.dExtraTint;return(e.dirty||se||ce||le)&&(e.dX=A,e.dY=j,e.dAng=M,e.dEX=N,e.dEY=P,e.dHOp=ae,e.dEOp=H,e.dHaloTint=V,e.dExtraTint=re,e.dirty=!1,xn(e,A,j,M,N,P,ae,H,V,re)),oe}function xn(e,t,n,r,i,a,o,s,c,l){let{ctx:u,canvas:d,dpr:f,margin:p}=e;if(u.setTransform(1,0,0,1,0,0),u.globalCompositeOperation=`source-over`,u.globalAlpha=1,u.clearRect(0,0,d.width,d.height),o<=.002&&s<=.002||!e.maskReady)return;let m=o>.002?Vt(e.halo,...Cn(c),e.haloTint):null,h=s>.002?l===`#ffffff`?e.extra.canvas:Vt(e.extra,...Cn(l),e.extraTint):null,g=c=>{m&&(u.save(),u.translate(t+p,n+p),u.rotate(r),u.globalAlpha=o*c,u.drawImage(m,-e.halo.ax,-e.halo.ay,e.halo.w,e.halo.h),u.restore()),h&&(u.save(),u.translate(i+p,a+p),u.rotate(r),u.globalAlpha=s*c,u.drawImage(h,-e.extra.ax,-e.extra.ay,e.extra.w,e.extra.h),u.restore())};if(!e.pointMode&&e.surroundPath&&e.bandPath){u.save(),u.scale(f,f),u.clip(e.surroundPath,`evenodd`),g(.5),u.restore(),u.save(),u.scale(f,f),u.clip(e.bandPath,`evenodd`),g(1),u.restore();return}u.save(),u.scale(f,f),g(1),u.restore();let _=e.maskAlpha;if(!_)return;let v=u.getImageData(0,0,d.width,d.height),y=v.data;for(let e=0,t=3;e<_.length;e++,t+=4){let n=_[e];if(n!==255){if(n===0){y[t]=0;continue}y[t]=(y[t]*n+127)/255}}u.putImageData(v,0,0)}var Sn=[255,255,255];function Cn(e){if(e[0]===`#`)return Sn[0]=parseInt(e.slice(1,3),16),Sn[1]=parseInt(e.slice(3,5),16),Sn[2]=parseInt(e.slice(5,7),16),Sn;let t=4,n=0,r=0;for(;t<e.length&&r<3;){let i=e.charCodeAt(t++);i>=48&&i<=57?n=n*10+(i-48):(i===44||i===41)&&(Sn[r++]=n,n=0)}return Sn}function wn(e,t){e.pointMode===t.pointMode&&(t.currentIdx=Math.min(e.currentIdx,Math.max(0,t.perim.length-1)),t.appearedAt=e.appearedAt,t.glowOpacity=e.glowOpacity,t.relocTween=e.relocTween,t.relocNextIdx=e.relocNextIdx,t.relocMul=e.relocMul,t.envClock=e.envClock,t.cursorMode=e.cursorMode,t.cursorArc=e.cursorArc,t.cursorTargetArc=e.cursorTargetArc,t.lastTickMs=e.lastTickMs,t.wanderS=e.wanderS,t.wanderTargetS=e.wanderTargetS,t.wanderFrames=e.wanderFrames,t.tintFrom=e.tintFrom,t.tintTarget=e.tintTarget,t.tintTween=e.tintTween,t.tintHoldUntil=e.tintHoldUntil,t.dEnv=e.relocMul,t.env.style.opacity=e.relocMul.toFixed(3))}var Tn=Object.freeze({offsetY:1,blur:.5,alpha:.9,color:`#ffffff`});function En(e,t,n){let r=Math.min(3,typeof window<`u`&&window.devicePixelRatio||1),i=Math.ceil(3*n.blur+Math.abs(n.offsetY)+1),a=t.width+2*i,o=t.height+2*i,s=document.createElement(`canvas`);s.className=`metal-fx-rim-canvas`,s.setAttribute(`aria-hidden`,`true`),s.width=Math.ceil(a*r),s.height=Math.ceil(o*r),s.style.cssText=`position:absolute;left:${-i}px;top:${-i}px;width:${a}px;height:${o}px;pointer-events:none`;let c=s.getContext(`2d`),l=document.createElement(`canvas`);l.width=s.width,l.height=s.height;let u=l.getContext(`2d`,{willReadFrequently:!0});if(!c||!u)return null;e.appendChild(s);let d={canvas:s,ctx:c,scratch:l,sctx:u,width:t.width,height:t.height,cornerRadius:t.cornerRadius,kind:t.kind,ring:t.ring,margin:i,dpr:r,opts:n,mO:H(),mI:H(),sum:NaN};return On(d,null,!0),d}function Dn(e,t,n){let r=t.xy;for(let i=0;i<t.n;i++){let t=r[i*2]+n,a=r[i*2+1]+n;i===0?e.moveTo(t,a):e.lineTo(t,a)}e.closePath()}function On(e,t,n=!1){let{width:r,height:i,cornerRadius:a,ring:o,margin:s,dpr:c}=e;oe(0,0,r,i,a,t,e.mO),oe(o,o,r-2*o,i-2*o,Math.max(0,a-o),t,e.mI);let l=0,u=e.mO.xy;for(let t=0;t<e.mO.n;t+=4)l+=u[t*2]*1.37+u[t*2+1];if(!n&&l===e.sum)return;e.sum=l;let{sctx:d,scratch:f,ctx:p,canvas:m,opts:h}=e,g=f.width,_=f.height;d.setTransform(1,0,0,1,0,0),d.clearRect(0,0,g,_),d.scale(c,c),d.fillStyle=`#fff`,d.beginPath(),Dn(d,e.mO,s),Dn(d,e.mI,s),d.fill(`evenodd`);let v=d.getImageData(0,0,g,_).data,y=g*_,b=new Float32Array(y);for(let e=0,t=3;e<y;e++,t+=4)b[e]=v[t]/255;let x=Math.round(h.offsetY*c)*g,S=new Float32Array(y);if(x>=0)for(let e=0;e<y;e++)S[e]=Math.max(0,b[e]-(e>=x?b[e-x]:0));else for(let e=0;e<y;e++)S[e]=Math.max(0,b[e]-(e-x<y?b[e-x]:0));let C=Ft(S,g,_,h.blur*c),w=parseInt(h.color.slice(1,3),16),T=parseInt(h.color.slice(3,5),16),E=parseInt(h.color.slice(5,7),16),D=p.createImageData(g,_),O=D.data;for(let e=0,t=0;e<y;e++,t+=4)O[t]=w,O[t+1]=T,O[t+2]=E,O[t+3]=Math.round(Math.min(1,C[e]*b[e]*h.alpha)*255);p.setTransform(1,0,0,1,0,0),p.putImageData(D,0,0)}function kn(e){e&&e.canvas.remove()}var An=12,jn=32,Mn=1,Nn=.55,Pn=1,Fn=.85,In=0,Ln=1.3,Rn=3.6,zn=.7,Bn=1,Vn=.52,Hn=1,Un=.044,Wn=235,Gn=2.535,Kn=.7,qn=.5,Jn=new Set([`INPUT`,`TEXTAREA`,`SELECT`,`OPTION`]);function Yn(e,t){let n=Math.max(e.left-t.right,t.left-e.right,0),r=Math.max(e.top-t.bottom,t.top-e.bottom,0);return Math.sqrt(n*n+r*r)}function Xn(e,t,n,r){return!(Math.min(e.bottom,t.bottom)-Math.max(e.top,t.top)<n||Math.max(e.left-t.right,t.left-e.right,0)>r)}function Zn(e,t,n,r){return Math.min(e.right,t.right)-Math.max(e.left,t.left)<n?!1:Math.max(e.top-t.bottom,t.top-e.bottom,0)<=r}function Qn(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,r*.5,i*.5)),s=e.roundRect;if(typeof s==`function`){s.call(e,t,n,r,i,o);return}e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n)}function $n(e,t,n,r,i){if(!i.flipX&&!i.flipY){e.drawImage(t,i.sx??0,i.sy??0,n,r,i.x,i.y,i.w,i.h);return}e.save(),i.flipX&&(e.translate(i.x+i.w,0),e.scale(-1,1)),i.flipY&&(e.translate(0,i.y+i.h),e.scale(1,-1)),e.drawImage(t,i.sx??0,i.sy??0,n,r,i.flipX?0:i.x,i.flipY?0:i.y,i.w,i.h),e.restore()}function er(e,t,n,r,i,a,o){if(r<=2*o||i<=2*o){e.beginPath(),Qn(e,t,n,r,i,a),e.clip();return}e.beginPath(),Qn(e,t,n,r,i,a),Qn(e,t+o,n+o,r-2*o,i-2*o,Math.max(0,a-o)),e.clip(`evenodd`)}function tr(e,t,n,r,i,a,o,s,c,l,u,d){let f=d??Math.max(1,Math.round(24*u)),p=Math.max(0,o),m=!0;for(let o=0;o<3&&p>1e-4;o++){let o=Math.min(1,p);e.save(),er(e,l.x,l.y,l.w,l.h,l.r,f),e.globalCompositeOperation=m?`source-over`:`lighter`,m=!1,e.globalAlpha=o,$n(e,t,n,r,c),e.globalAlpha=1,e.globalCompositeOperation=`destination-in`,e.fillStyle=s,e.fillRect(0,0,i,a),e.restore(),p-=o}}function nr(e,t,n,r,i,a,o){let s=o|0;if(s<1||r<=2*s||i<=2*s){e.beginPath(),Qn(e,t,n,r,i,a),e.clip();return}e.beginPath(),Qn(e,t,n,r,i,a),Qn(e,t+s,n+s,r-2*s,i-2*s,Math.max(0,a-s)),e.clip(`evenodd`)}function rr(e,t,n,r,i,a,o,s,c,l,u,d){let f=s*u,p=!0;for(let s=0;s<3&&f>1e-4;s++){let s=Math.min(1,f);e.save(),nr(e,o.x,o.y,o.w,o.h,o.r,c),e.globalCompositeOperation=p?`source-over`:`lighter`,p=!1,e.globalAlpha=s,$n(e,t,n,r,d),e.globalAlpha=1,e.globalCompositeOperation=`destination-in`,e.fillStyle=l,e.fillRect(0,0,i,a),e.restore(),f-=s}}function ir(e,t,n,r,i,a,o,s){let c=e.createLinearGradient(r,i,a,o);c.addColorStop(0,`rgba(255,255,255,${s.toFixed(3)})`),c.addColorStop(.5,`rgba(255,255,255,${(s*.45).toFixed(3)})`),c.addColorStop(1,`rgba(255,255,255,0)`),e.save(),nr(e,t.x,t.y,t.w,t.h,t.r,n),e.globalCompositeOperation=`lighter`,e.lineWidth=n*2,e.strokeStyle=c,e.beginPath(),Qn(e,t.x,t.y,t.w,t.h,t.r),e.stroke(),e.restore()}function ar(e){let t=getComputedStyle(e),n=[parseFloat(t.borderTopLeftRadius)||0,parseFloat(t.borderTopRightRadius)||0,parseFloat(t.borderBottomRightRadius)||0,parseFloat(t.borderBottomLeftRadius)||0].filter(e=>e>0);return n.length?Math.min.apply(null,n):0}function or(e){let t=getComputedStyle(e),n=Math.max(parseFloat(t.borderTopWidth)||0,parseFloat(t.borderRightWidth)||0,parseFloat(t.borderBottomWidth)||0,parseFloat(t.borderLeftWidth)||0),r=0,i=0,a=t.boxShadow;if(a&&a!==`none`){let e=a.replace(/rgba?\([^)]*\)/g,e=>e.replace(/,/g,`\0`)).split(/,\s*/),t=1/0,n=1/0;for(let r of e){let e=r.match(/-?\d+(?:\.\d+)?px/g);if(!e||e.length<4)continue;let i=parseFloat(e[3]);i>0&&(/\binset\b/.test(r)?i<t&&(t=i):i<n&&(n=i))}Number.isFinite(t)&&(r=t),Number.isFinite(n)&&(i=n)}return{width:Math.max(n,r,i)||1,outerCssPx:Math.max(n,i)}}function sr(e){e.cornerRadius=ar(e.el);let t=or(e.el);e.hairlineWidth=t.width,e.hairlineOuterCssPx=t.outerCssPx}function cr(e){typeof ResizeObserver<`u`&&(e.resizeObserver=new ResizeObserver(()=>sr(e)),e.resizeObserver.observe(e.el)),typeof MutationObserver<`u`&&(e.mutationObserver=new MutationObserver(()=>sr(e)),e.mutationObserver.observe(e.el,{attributes:!0,attributeFilter:[`style`,`class`]}))}function lr(e){var t,n;(t=e.resizeObserver)==null||t.disconnect(),e.resizeObserver=null,(n=e.mutationObserver)==null||n.disconnect(),e.mutationObserver=null}var Q=new Set,ur={...Object.freeze({enabled:!0,radius:11.5,strength:.57,penumbra:.55,falloff:.21,edgeFade:.7,softness:.24,repaintMs:36})},dr=null,fr=0,pr=0,mr=!1;function hr(){fr!==0||typeof requestAnimationFrame>`u`||(fr=requestAnimationFrame(e=>{if(fr=0,e-pr<ur.repaintMs){hr();return}pr=e,kr()}))}var gr=!1;function _r(e,t){let n=ur.radius;for(let r of Q){let i=r.anchorEl.getBoundingClientRect(),a=r.el.getBoundingClientRect(),o=Math.min(i.left,a.left)-n,s=Math.max(i.right,a.right)+n,c=Math.min(i.top,a.top)-n,l=Math.max(i.bottom,a.bottom)+n;if(e>=o&&e<=s&&t>=c&&t<=l)return!0}return!1}function vr(e){if(dr={x:e.clientX,y:e.clientY},!ur.enabled)return;let t=_r(e.clientX,e.clientY);(t||gr)&&hr(),gr=t}function yr(){dr=null,gr&&hr(),gr=!1}function br(e){typeof document>`u`||e===mr||(mr=e,e?(document.addEventListener(`pointermove`,vr,{passive:!0}),document.addEventListener(`pointerleave`,yr),window.addEventListener(`blur`,yr)):(document.removeEventListener(`pointermove`,vr),document.removeEventListener(`pointerleave`,yr),window.removeEventListener(`blur`,yr),dr=null))}function xr(e,t,n,r,i,a,o,s,c){if(!dr)return;let l=ur;if(!l.enabled||l.strength<=0)return;let u=l.radius,d,f,p,m,h,g;if(i){let e=n.left>=r.right;d=e?r.right:n.right,f=e?n.left:r.left,p=dr.x,m=dr.y,h=Math.max(n.top,r.top),g=Math.min(n.bottom,r.bottom)}else{let e=n.top>=r.bottom;d=e?r.bottom:n.bottom,f=e?n.top:r.top,p=dr.y,m=dr.x,h=Math.max(n.left,r.left),g=Math.min(n.right,r.right)}let _=Math.min(d,f),v=Math.max(d,f),y=Math.max(1,v-_);if(p<_-u||p>v+u||m<h-u||m>g+u)return;let b=Math.max(0,Math.min(1,Math.abs(p-d)/y)),x=Math.max(.5,u*l.edgeFade),S=Math.min(1,Math.min(p-(_-u),v+u-p)/x),C=Math.min(1,Math.min(m-(h-u),g+u-m)/x),w=l.strength*(1-l.falloff*b)*S*C;if(w<=.001)return;let T=u*c*(1+l.penumbra*b),E=i?(m-r.top+s)*c:(m-r.left+s)*c,D=Math.max(0,Math.min(.5,(1-l.softness)*.5)),O=Math.max(.001,.5-D),k=i?o:a,A=Math.max(0,Math.floor(E-T)),j=Math.min(k,Math.ceil(E+T));if(j<=A)return;let M=new Float32Array(j-A);for(let e=A;e<j;e++){let t=(e+.5-(E-T))/(2*T),n=t<O?t/O:t>1-O?(1-t)/O:1;M[e-A]=1-w*Math.max(0,Math.min(1,n))}for(let n of[e,t]){let e=i?0:A,t=i?A:0,r=i?a:j-A,s=i?j-A:o,c=n.getImageData(e,t,r,s),l=c.data;if(i)for(let e=0;e<s;e++){let t=M[e];if(!(t>=.999))for(let n=e*r*4+3,i=(e+1)*r*4;n<i;n+=4)l[n]=l[n]*t}else for(let e=0;e<s;e++)for(let t=0;t<r;t++){let n=M[t];if(n>=.999)continue;let i=(e*r+t)*4+3;l[i]=l[i]*n}n.putImageData(c,e,t)}}var $=null,Sr=null,Cr=null,wr=null;function Tr(e,t){return $||($=document.createElement(`canvas`),Sr=document.createElement(`canvas`),Cr=$.getContext(`2d`,{alpha:!0}),wr=Sr.getContext(`2d`,{alpha:!0})),!Cr||!wr||!$||!Sr?!1:($.width!==e&&($.width=e,Sr.width=e),$.height!==t&&($.height=t,Sr.height=t),Cr.setTransform(1,0,0,1,0,0),wr.setTransform(1,0,0,1,0,0),Cr.globalCompositeOperation=`source-over`,wr.globalCompositeOperation=`source-over`,Cr.clearRect(0,0,e,t),wr.clearRect(0,0,e,t),!0)}function Er(e,t,n,r=1){if(typeof document>`u`||Jn.has(e.tagName))return null;for(let t of Q)if(t.el===e)return t.strength=r,t;let i=document.createElement(`div`);i.setAttribute(`data-metal-fx-reflection`,``),i.setAttribute(`aria-hidden`,`true`);let a=document.createElement(`canvas`);a.className=`metal-fx-reflection-canvas`;let o=a.getContext(`2d`,{alpha:!0,willReadFrequently:!0});if(!o)return null;let s=document.createElement(`canvas`);s.className=`metal-fx-reflection-stroke-canvas`;let c=s.getContext(`2d`,{alpha:!0,willReadFrequently:!0});if(!c)return null;i.appendChild(a),i.appendChild(s);let l=getComputedStyle(e),u=!1;l.position===`static`&&(e.style.position=`relative`,u=!0);let d=!1;l.isolation!==`isolate`&&(e.style.isolation=`isolate`,d=!0),e.setAttribute(`data-metal-fx-reflect-host`,``),e.insertBefore(i,e.firstChild);let f=or(e),p={el:e,anchor:t,anchorEl:n,strength:r,wrap:i,canvas:a,ctx:o,strokeCanvas:s,strokeCtx:c,cornerRadius:ar(e),hairlineWidth:f.width,hairlineOuterCssPx:f.outerCssPx,appliedPositionRelative:u,appliedIsolation:d,resizeObserver:null,mutationObserver:null};return cr(p),Q.add(p),br(!0),p}function Dr(e){for(let t of Q)if(t.el===e){lr(t),t.canvas.width=0,t.canvas.height=0,t.strokeCanvas.width=0,t.strokeCanvas.height=0,t.wrap.parentNode===t.el&&t.el.removeChild(t.wrap),t.el.removeAttribute(`data-metal-fx-reflect-host`),t.appliedPositionRelative&&(t.el.style.position=``),t.appliedIsolation&&(t.el.style.isolation=``),Q.delete(t),Q.size===0&&br(!1);return}}function Or(e,t,n,r,i){if(r<1||i<1)return null;let a=e.getContext(`2d`);if(!a)return null;let o=a.getImageData(t,n,r,i).data,s=r,c=i,l=-1,u=-1;for(let e=0;e<i;e++){let t=e*r;for(let n=0;n<r;n++)o[(t+n)*4+3]>8&&(n<s&&(s=n),n>l&&(l=n),e<c&&(c=e),e>u&&(u=e))}return l<0?null:{x:t+s,y:n+c,w:l-s+1,h:u-c+1}}function kr(){if(Q.size===0)return;let e=typeof window<`u`&&window.devicePixelRatio||1,t=new Map;for(let n of Q){let r=n.el.getBoundingClientRect(),i=t.get(n.anchorEl);if(i||(i=n.anchorEl.getBoundingClientRect(),t.set(n.anchorEl,i)),r.width<1||r.height<1||i.width<1||i.height<1)continue;let a=n.el.hasAttribute(`data-metal-fx-text`);if(a&&!n.glyphStyled&&(n.canvas.style.filter=`blur(0.4px) saturate(1.35) brightness(1.2)`,n.glyphStyled=!0),!Xn(i,r,Mn,jn)&&!Zn(i,r,Mn,jn)){n.canvas.width!==1&&(n.canvas.width=1,n.canvas.height=1),n.strokeCanvas.width!==1&&(n.strokeCanvas.width=1,n.strokeCanvas.height=1);continue}let o=a&&!!n.anchor.mask;o&&!n.anchor.wantRaw&&(n.anchor.wantRaw=!0),n.anchor.wantRing||(n.anchor.wantRing=!0);let s=!!n.anchor.deform&&!!n.anchor.ringCanvas,c=o&&n.anchor.rawCanvas?n.anchor.rawCanvas:s?n.anchor.ringCanvas:n.anchor.canvas,l=Math.round(n.anchor.overscan*e),u=l,d=l,f=(c.width|0)-2*l,p=(c.height|0)-2*l;if(n.anchor.mask&&!o){let e=Or(c,u,d,f,p);e&&(u=e.x,d=e.y,f=e.w,p=e.h)}if(f<4||p<4)continue;let m=(i.left+i.right)*.5,h=(i.top+i.bottom)*.5,g=(r.left+r.right)*.5,_=(r.top+r.bottom)*.5,v=m-g,y=h-_,b=Math.max(i.left-r.right,r.left-i.right,0)>=Math.max(i.top-r.bottom,r.top-i.bottom,0),x=Yn(i,r),S=1-Math.min(1,x/An);S=S*S*(3-2*S);let C=Nn+.44999999999999996*S,w=Math.min(Rn,C*Ln*zn)*n.strength,T=i.left>=r.left&&i.right<=r.right&&i.top>=r.top&&i.bottom<=r.bottom?[!0,!1]:[b],E=n.anchor.scale??1,D=Math.max(Bn*E,n.hairlineWidth),O=Math.max(1,Math.round(D*e)),k=Math.max(1,Math.round(Math.max(Hn*E,n.hairlineWidth)*e)),A=n.hairlineOuterCssPx;n.wrap.style.inset=`${-A}px`,n.wrap.style.borderRadius=`${Math.max(0,n.cornerRadius)}px`;let j=Math.max(1,Math.round((r.width+A*2)*e)),M=Math.max(1,Math.round((r.height+A*2)*e));n.canvas.width!==j&&(n.canvas.width=j),n.canvas.height!==M&&(n.canvas.height=M),n.strokeCanvas.width!==j&&(n.strokeCanvas.width=j),n.strokeCanvas.height!==M&&(n.strokeCanvas.height=M);let N=n.ctx;N.setTransform(1,0,0,1,0,0),N.clearRect(0,0,j,M);let P=n.strokeCtx;P.setTransform(1,0,0,1,0,0),P.clearRect(0,0,j,M);for(let[t,o]of T.entries()){let s=t>0&&Tr(j,M),l=s?Cr:N,m=s?wr:P,h=Math.min((a?An*1.5:An)*e,Math.max(j,M)),g,_,b,x;o?(g=v>0?j:0,b=v>0?j-h:h,_=M*.5,x=M*.5):(_=y>0?M:0,x=y>0?M-h:h,g=j*.5,b=j*.5);let S=N.createLinearGradient(g,_,b,x);S.addColorStop(0,`rgba(0,0,0,${Pn})`),S.addColorStop(.5,`rgba(0,0,0,${Fn})`),S.addColorStop(1,`rgba(0,0,0,${In})`);let C=f/e,T=a?Math.max(1,Math.min(o?j:M,Math.round(o?f:p))):Math.max(1,Math.round(Wn*Math.max(.1,C/140)*e)),E,D,F,I,L=!1,R=!1;if(o){let t=Math.max(i.top,r.top),n=Math.min(i.bottom,r.bottom);L=!0,E=v>0?j-T:0,D=Math.round((t-r.top+A)*e),F=T,I=Math.max(1,Math.round((n-t)*e))}else{let t=Math.max(i.left,r.left),n=Math.min(i.right,r.right);R=!0,E=Math.round((t-r.left+A)*e),D=y>0?M-T:0,F=Math.max(1,Math.round((n-t)*e)),I=T}let z={x:E,y:D,w:F,h:I,flipX:L,flipY:R,sx:u,sy:d},B={x:0,y:0,w:j,h:M,r:Math.max(0,n.cornerRadius*e)},V=a?Math.min(1,w*Kn):Math.min(Rn,w*Gn*Kn*qn);tr(l,c,f,p,j,M,V,S,z,B,e,a?Math.max(j,M):void 0),a||(rr(m,c,f,p,j,M,B,w,O,S,Vn,z),ir(m,B,k,g,_,b,x,Math.min(.85,Un*w))),s&&(N.globalCompositeOperation=`lighter`,N.drawImage($,0,0),P.globalCompositeOperation=`lighter`,P.drawImage(Sr,0,0))}for(let t of T)xr(N,P,i,r,t,j,M,A,e);N.globalCompositeOperation=`source-over`,P.globalCompositeOperation=`source-over`}}var Ar=!1,jr=0;function Mr(){Ar||(Ar=!0,typeof requestAnimationFrame<`u`&&requestAnimationFrame(e=>{Ar=!1,!(e-jr<l)&&(jr=e,kr())}))}var Nr=`metal-fx-styles`,Pr=`
.metal-fx-root {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  isolation: isolate;
  overflow: visible;
  background: #272727;
  color: #f8f8f8;
}
.metal-fx-root[data-theme='light'] {
  background: #ffffff;
  color: #1d1d1d;
}

.metal-fx-root::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 2;
  box-shadow: inset 0 0 50px 0 rgba(255, 255, 255, 0.02);
}
.metal-fx-root[data-theme='light']::before {
  box-shadow: inset 0 0 50px 0 rgba(0, 0, 0, 0.02);
}

.metal-fx-root::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  pointer-events: none;
  z-index: 4;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light']::after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.06);
}
/* Circle variant gets a thicker outer rim than the button variant. */
.metal-fx-root[data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.1);
}
.metal-fx-root[data-theme='light'][data-variant='circle']::after {
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.06);
}

.metal-fx-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 0;
  pointer-events: none;
  border-radius: inherit;
}

/* The inner spacer — defines the inset geometry where the metal ring meets
   the interior (3 px for Button, 1-2 px for Circle) and carries the Circle dark
   hairline ('box-shadow: inset' rules below). Intentionally transparent so
   the wrapper's background propagates through to the punched shader centre,
   giving consumers a single surface tone to override. See "Single-surface
   background" in the file header for the rationale. */
.metal-fx-inner {
  position: absolute;
  inset: 3px;
  border-radius: inherit;
  z-index: 1;
  pointer-events: none;
}

.metal-fx-root[data-variant='button'][data-shape='pill'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 20px) - 3px);
}
.metal-fx-root[data-variant='button'][data-shape='circle'] .metal-fx-inner {
  border-radius: calc(var(--mfx-radius, 16px) - 3px);
}
.metal-fx-root[data-variant='circle'][data-shape='pill'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 20px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
.metal-fx-root[data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  inset: 0;
  border-radius: var(--mfx-radius, 16px);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.45);
}
/* Circle-variant hairline alpha — light mode.
   Source-of-truth: index.html L2261-2267. The 0.45-alpha black inset that
   reads as a single-pixel frame against the dark interior is too heavy
   on a #ffffff inner: it ends up looking like a hard 2-px black ring
   against the iridescent shader. Suppressed entirely (alpha 0) — the
   shader's own iridescent rim already defines the silhouette in light
   mode, so an extra dark hairline only competes with it. The rule is
   kept (rather than deleted) as a tunable hook in case a future variant
   wants to re-introduce a soft edge. NOTE: we keep the dark-mode inset
   and border-radius values because — unlike index.html — our renderer
   does NOT overscan the canvas in light mode, so there is no 1-px gap
   between inner element and shader to compensate for. */
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='pill'] .metal-fx-inner,
.metal-fx-root[data-theme='light'][data-variant='circle'][data-shape='circle'] .metal-fx-inner {
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0);
}

/* ─── Combined glow SVG (z=3) ──────────────────────────────────────────────
   Single SVG per instance that holds BOTH the wide-halo group
   (#mfx_haloTravel) and the catch-light group (#mfx_extraTravel), exactly
   mirroring canonical's _buildGlowSvgInner (index.html L8078). One
   mix-blend-mode: screen lifts the combined composite onto the shader
   ring; per-frame opacity attributes on each inner group still drive the
   independent fade-in / fade-out cycles for the halo and the catch-light.

   Why a single SVG: the circle variant anchors halo + catch-light at the same
   perimeter point, so they overlap in the bright zone. Two separately-
   screened SVGs would double-screen the overlap (A + B + C - AB - AC -
   BC + ABC instead of A + B + C - AB - AC once both groups composite
   in source-over inside one SVG and then screen against the host once).
   That overlap looked muted versus canonical specifically on the circle
   variant where both layers travel together.

   Source-of-truth opacity: #btnGlowSvg drops to 0.7 in dark and 0.2746 in
   light (index.html L632/L643). */
.metal-fx-glow-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
  z-index: 3;
  pointer-events: none;
  opacity: 0.7;
}
.metal-fx-root[data-theme='light'] .metal-fx-glow-svg {
  /* Light-mode 1-px overscan mirrors .btn-glow-svg in metal.html so the
     halo stays glued to the visible silhouette (the shader ring there sits
     1 px outside the host's padding box). */
  inset: -1px;
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  mix-blend-mode: multiply;
  /* Source-of-truth: html[data-theme="light"] #btnGlowSvg { opacity: 0.2746 }
     → −35 % from 0.4225 from the original 0.7 dark-mode opacity. */
  opacity: 0.2746;
  filter: saturate(5.355) brightness(0.78);
}
/* Circle light-mode small variants (e.g. 36×36 send button): the geometrically
   shrunk halo loses density when multiplied against #ffffff. Mirror the
   canonical override at index.html L2316 — bump saturation + drop brightness
   so the small glow holds together visually. */
.metal-fx-root[data-variant='circle'][data-shape='circle'][data-theme='light'] .metal-fx-glow-svg {
  filter: saturate(7.5) brightness(0.6);
}

/* The wrapped child — hoisted into z=5 so it sits above every overlay, with
   normalized chrome so consumer button styles don't fight the metal frame. */
.metal-fx-content {
  position: relative;
  z-index: 5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  pointer-events: none;
}
.metal-fx-content > * {
  pointer-events: auto;
}
.metal-fx-root[data-normalize='true'] .metal-fx-content > * {
  background: transparent !important;
  border: 0 !important;
  outline: 0 !important;
  box-shadow: none !important;
  /* Sizing: we deliberately DO NOT force \`width: 100%; height: 100%\` on the
     child here. That used to be the contract ("the wrapper is the visible
     button surface; the child stretches to fill it"), but it created a cyclic
     percentage dependency: the wrapper is \`inline-flex\` with no intrinsic
     size, .metal-fx-content is \`width/height: 100%\` of the wrapper, and the
     child was \`100%\` of .metal-fx-content. With nothing breaking the cycle,
     icon-only / class-sized children collapsed.

     The new contract: the child sizes itself (intrinsic content, CSS class,
     or inline style — all work), and the wrapper's \`inline-flex\` wraps it
     tightly. Consumers who want a metal frame BIGGER than the child (e.g.
     padding around an icon) size <MetalFx style={{ width, height }}> AND
     explicitly set width/height on the child to fill (or accept that the
     child renders at its intrinsic size, centered).

     Typography is intentionally NOT touched. We used to apply
     \`color: inherit; font: inherit;\` here to "match" the wrapper, but
     \`font: inherit\` is a shorthand that overrides font-family, font-size,
     font-weight, AND line-height on the child — which (a) shrank the
     button height (line-height changes propagate through the flex
     content box) and (b) scaled em-based icons / font-icons inside the
     child to whatever the wrapper inherited. The wrapper now stays out
     of the child's typography entirely; consumers who want typographic
     normalization can apply it themselves on the child element. */
}

[data-metal-fx-reflection] {
  position: absolute;
  inset: 0;
  pointer-events: none;
  border-radius: inherit;
  overflow: hidden;
  z-index: 0;
  isolation: isolate;
}
.metal-fx-reflection-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: blur(4px) saturate(1.2) brightness(1.58);
}
.metal-fx-reflection-stroke-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
  filter: saturate(1.35) brightness(1.75);
}
/* Hosts that participate as reflection targets need positioning + isolation
   so the wrap composites only against the host (not the parent stack). The
   wrap injects these inline as well, but stating them here keeps reflections
   working on hosts that already have other inline styles applied. */
[data-metal-fx-reflect-host] {
  isolation: isolate;
}
`,Fr=!1;function Ir(){if(Fr||typeof document>`u`)return;if(document.getElementById(Nr)){Fr=!0;return}let e=document.createElement(`style`);e.id=Nr,e.textContent=Pr,document.head.appendChild(e),Fr=!0}Ir();var Lr={position:`absolute`,inset:0,width:`100%`,height:`100%`},Rr={position:`absolute`,inset:3},zr={position:`absolute`,inset:0,pointerEvents:`none`,zIndex:3,borderRadius:`inherit`},Br={position:`absolute`,inset:0,pointerEvents:`none`,zIndex:4},Vr=new Map;function Hr(){let e=globalThis;e.__MFX_DEBUG__&&(e.__mfxGlow=Vr)}_e((e,t)=>{let n=Vr.get(e);return n?bn(n.handles,e,t,e.opacityMul*e.glowGain,n.themeRef.current):!1});function Ur(e){let[t,n]=(0,i.useState)(()=>e===`auto`?typeof window>`u`||!window.matchMedia||window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:e);return(0,i.useEffect)(()=>{if(e!==`auto`){n(e);return}if(typeof window>`u`||!window.matchMedia)return;let t=window.matchMedia(`(prefers-color-scheme: dark)`),r=()=>n(t.matches?`dark`:`light`);return r(),t.addEventListener(`change`,r),()=>t.removeEventListener(`change`,r)},[e]),t}var Wr=(0,i.forwardRef)(function({children:e,variant:t=`button`,preset:n=`chromatic`,theme:a=`auto`,strength:o=1,glowGain:s=1,paused:c=!1,borderRadius:l,normalizeHostStyles:u=!0,reflectionTargets:d,disableGlow:f=!1,innerShadow:p,shaderScale:m,ringCssPx:h,scale:g=1,mask:_,glowMode:v=`mask`,className:y,style:b,...x},S){let C=(0,i.useRef)(null),w=(0,i.useRef)(null),T=(0,i.useRef)(null),E=(0,i.useRef)(null),D=(0,i.useRef)(null),k=(0,i.useRef)(null),A=(0,i.useRef)(null),j=(0,i.useRef)(null),M=(0,i.useRef)(`dark`),N=(0,i.useRef)(0),[P,F]=(0,i.useState)(!1),I=Ur(a),L=(0,i.useMemo)(()=>O(),[]);M.current=I;let R=t===`circle`?`circle`:`pill`,z=!f;(0,i.useImperativeHandle)(S,()=>C.current,[]);let B=(e,t)=>{if(R===`circle`)return Math.min(e,t)/2;let n=typeof l==`number`?l:(()=>{let e=k.current?.firstElementChild;if(e){let t=parseFloat(getComputedStyle(e).borderTopLeftRadius);if(Number.isFinite(t)&&t>0)return t}return N.current})();return Math.min(n,Math.min(e,t)/2)};(0,i.useEffect)(()=>{L&&he(n,I)},[n,I,L]),(0,i.useEffect)(()=>{let e=A.current;e&&de(e,{mask:_??null})},[_]),(0,i.useEffect)(()=>{let e=A.current;e&&de(e,{paused:c})},[c]),(0,i.useEffect)(()=>{let e=A.current;if(!e)return;let t={};m!==void 0&&(t.shaderScale=m),h!==void 0&&(t.ringCssPx=h),g!==void 0&&(t.scale=g),Object.keys(t).length>0&&de(e,t)},[m,h,g]),(0,i.useLayoutEffect)(()=>{let e=w.current,t=C.current,n=T.current;if(!e||!t||!L)return;{let e=getComputedStyle(t),n=parseFloat(e.borderTopLeftRadius);N.current=Number.isFinite(n)?n:0}let r=()=>{let e=t.getBoundingClientRect(),n=Math.max(1,Math.round(e.width)),r=Math.max(1,Math.round(e.height));return{cssWidth:n,cssHeight:r,cornerRadius:B(n,r)}},i=r();A.current=se({onComposite:()=>{let e=A.current,t=j.current;e&&t&&yn(t,e.deform);let n=D.current;e&&n&&On(n,e.deform)},hostCanvas:e,cssWidth:i.cssWidth,cssHeight:i.cssHeight,cornerRadius:i.cornerRadius,kind:R,paused:c,shaderScale:m,ringCssPx:h,scale:g,mask:_??null,onFirstCopy:()=>F(!0)}),t.style.setProperty(`--mfx-radius`,`${i.cornerRadius}px`),t.style.borderRadius=`${i.cornerRadius}px`;let a=(e,t)=>{if(!_||v===`ring`)return{};let n=window.devicePixelRatio||1,r=document.createElement(`canvas`);r.width=Math.max(1,Math.round(e*n)),r.height=Math.max(1,Math.round(t*n));let i=r.getContext(`2d`);if(!i)return{};i.fillStyle=`#fff`,_(i,r.width,r.height,n);let a=i.getImageData(0,0,r.width,r.height).data,o=[],s=Math.max(1,Math.round(2*n));for(let e=s>>1;e<r.height;e+=s)for(let t=s>>1;t<r.width;t+=s)a[(e*r.width+t)*4+3]>128&&o.push({x:t/n,y:e/n});return{samplePoints:o,maskDataUrl:r.toDataURL(`image/png`)}};n&&(j.current=hn(n,{width:i.cssWidth,height:i.cssHeight,cornerRadius:i.cornerRadius,kind:R,scale:g,...a(i.cssWidth,i.cssHeight)}));let o=e=>{if(!n)return;let t=j.current;n.innerHTML=``,j.current=hn(n,{width:e.cssWidth,height:e.cssHeight,cornerRadius:e.cornerRadius,kind:R,scale:g,...a(e.cssWidth,e.cssHeight)}),t&&wn(t,j.current);let r=A.current;r&&j.current&&Vr.set(r,{handles:j.current,themeRef:M})},s=()=>p?p===!0?Tn:{...Tn,...p}:null,l=e=>{let t=E.current,n=A.current;kn(D.current),D.current=null;let r=s();!t||!n||!r||(D.current=En(t,{width:e.cssWidth,height:e.cssHeight,cornerRadius:e.cornerRadius,kind:R,ring:n.ringCssPx},r))};l(i);let u=0,d=i.cssWidth,f=i.cssHeight,y=i.cornerRadius,b=new ResizeObserver(()=>{u===0&&(u=requestAnimationFrame(()=>{u=0;let e=r(),n=A.current;!n||Math.abs(e.cssWidth-d)<.5&&Math.abs(e.cssHeight-f)<.5&&Math.abs(e.cornerRadius-y)<.5||(d=e.cssWidth,f=e.cssHeight,y=e.cornerRadius,de(n,{cssWidth:e.cssWidth,cssHeight:e.cssHeight,cornerRadius:e.cornerRadius}),t.style.setProperty(`--mfx-radius`,`${e.cornerRadius}px`),t.style.borderRadius=`${e.cornerRadius}px`,o(e),l(e))}))});b.observe(t);let x=null,S=()=>{let e=A.current;if(e&&pe(e)){let e=r();o(e),l(e)}O()},O=()=>{x?.removeEventListener(`change`,S),x=typeof window.matchMedia==`function`?window.matchMedia(`(resolution: ${window.devicePixelRatio||1}dppx)`):null,x?.addEventListener(`change`,S)};O();let k=Ie(e=>{e&&A.current&&o(r())}),P=null;return typeof IntersectionObserver<`u`&&(P=new IntersectionObserver(e=>{let t=A.current;if(t)for(let n of e)fe(t,n.isIntersecting)},{rootMargin:`64px`}),P.observe(t)),A.current&&j.current&&(Vr.set(A.current,{handles:j.current,themeRef:M}),le(A.current)),tt(),Hr(),()=>{nt(),kn(D.current),D.current=null,b.disconnect(),x?.removeEventListener(`change`,S),P?.disconnect(),k(),u!==0&&cancelAnimationFrame(u);let e=A.current;e&&(Vr.delete(e),ue(e),ce(e)),A.current=null,j.current=null,n&&(n.innerHTML=``)}},[R]),(0,i.useEffect)(()=>{let e=A.current;e&&de(e,{opacityMul:Math.max(0,Math.min(1,o)),glowGain:Math.max(0,s)})},[o,s,t]),(0,i.useEffect)(()=>{let e=A.current,t=C.current;if(!e||!t||!d||I!==`dark`)return;e.onAfterFrame=Mr;let n=d.flatMap(e=>{let t=`current`in e?e:e.ref,n=`current`in e?1:e.strength??1;return t.current?[{el:t.current,strength:n}]:[]});for(let{el:r,strength:i}of n)Er(r,e,t,i);return()=>{e.onAfterFrame=void 0;for(let{el:e}of n)Dr(e)}},[d,I]),(0,i.useEffect)(()=>{let e=C.current,t=A.current;if(!e||!t)return;let n=B(t.cssWidth,t.cssHeight);de(t,{cornerRadius:n}),e.style.setProperty(`--mfx-radius`,`${n}px`),e.style.borderRadius=`${n}px`},[l,I,t,R]);let V=(0,i.useMemo)(()=>({...b,"--mfx-strength":String(Math.min(1,Math.max(0,o))),opacity:+!!P,visibility:P?`visible`:`hidden`,transition:P?`opacity 0.15s ease-out`:`none`}),[b,o,P]);return L?(0,r.jsxs)(`div`,{...x,ref:C,className:y?`metal-fx-root ${y}`:`metal-fx-root`,"data-variant":t,"data-shape":R,"data-theme":I,"data-paused":c?`true`:void 0,"data-normalize":u?`true`:`false`,style:V,children:[(0,r.jsx)(`canvas`,{ref:w,className:`metal-fx-canvas`,style:Lr}),(0,r.jsx)(`div`,{className:`metal-fx-inner`,"aria-hidden":`true`,style:Rr}),(0,r.jsx)(`div`,{ref:T,"aria-hidden":`true`,style:{...zr,display:z?void 0:`none`}}),p?(0,r.jsx)(`div`,{ref:E,"aria-hidden":`true`,style:Br}):null,(0,r.jsx)(`div`,{ref:k,className:`metal-fx-content`,children:e})]}):(0,r.jsx)(`div`,{...x,ref:C,className:y?`metal-fx-fallback ${y}`:`metal-fx-fallback`,"data-metal-fx-unsupported":``,style:{display:`inline-flex`,...b},children:e})});Wr.displayName=`MetalFx`,Object.freeze({metalOpacity:.62,shaderScale:2.8,glowGain:2.5,innerShadow:{offsetY:1,blur:.5,alpha:.9}}),Object.freeze({metalOpacity:.8,shaderScale:1.6,core:Object.freeze({r:46,blur:100,a:.94,size:49}),gradient:0,glow:.41}),{...Object.freeze({enabled:!0,applyTo:`ring`,strength:.74,fadeInMs:200,fadeOutMs:350,smoothMs:140,reach:36,blob:13,liquidBlob:10,maxDisp:9,gain:.6,pressGain:.55,pullGain:.49,press:5,liquid:7.5,liquidReach:8,liquidStiffness:53,liquidDamping:9,stiffness:260,damping:13,mass:1,follow:.32,mapRes:2,smooth:.25})};export{Wr as t};