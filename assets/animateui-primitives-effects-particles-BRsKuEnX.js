var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/particles.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-particles.tsx`,export:`ParticlesDemo`,example:`https://animate-ui.com/r/demo-primitives-effects-particles.json`,props:{side:`top`,sideOffset:0,align:`center`,alignOffset:0,count:6,radius:30,spread:360,duration:.8,holdDelay:.05,delay:0}},note:{summaryZh:`粒子动效（动效原语）。`,importLine:`import { Particles } from "@/components/vendor/animateui/primitives/effects/particles";`,usage:`<Particles>…</Particles>`,exports:[{name:`Particles`,kind:`component`,propsType:`ParticlesProps`,inline:!1,union:!0,props:[{name:`animate`,type:`(boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition) & boolean`,optional:!0,default:`true`,doc:'Values to animate to, variant label(s), or `LegacyAnimationControls`. ```jsx // As values <motion.div animate={{ opacity: 1 }} /> // As variant <motion.div animate="visible" variants={variants} /> // Multiple variants <motion.div animate={["visible", "active"]} variants={variants} /> // LegacyAnimationControls <motion.div animate={animation} /> ```'},{name:`children`,type:`ReactNode | (ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>)`,optional:!1},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`exit`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ParticlesEffect`,kind:`component`,propsType:`ParticlesEffectProps`,inline:!1,union:!1,props:[{name:`side`,type:`Side`,optional:!0,default:`'top'`},{name:`align`,type:`Align`,optional:!0,default:`'center'`},{name:`count`,type:`number`,optional:!0,default:`6`},{name:`radius`,type:`number`,optional:!0,default:`30`},{name:`spread`,type:`number`,optional:!0,default:`360`},{name:`duration`,type:`number`,optional:!0,default:`0.8`},{name:`holdDelay`,type:`number`,optional:!0,default:`0.05`},{name:`sideOffset`,type:`number`,optional:!0,default:`0`},{name:`alignOffset`,type:`number`,optional:!0,default:`0`},{name:`delay`,type:`number`,optional:!0,default:`0`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ParticlesProps`,kind:`type`},{name:`ParticlesEffectProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-particles.json`,code:`import {
  Particles,
  ParticlesEffect,
  type ParticlesEffectProps,
} from '@/components/vendor/animateui/primitives/effects/particles';
import { useState } from 'react';

export function ParticlesDemo(props: ParticlesEffectProps) {
  const [key, setKey] = useState(0);

  return (
    <Particles key={key}>
      <button
        className="px-4 py-2 bg-accent"
        onClick={() => setKey((k) => k + 1)}
      >
        Particles
      </button>
      <ParticlesEffect className="bg-primary size-1 rounded-full" {...props} />
    </Particles>
  );
}
`},exampleNote:null}},docsField:`A particles effect that creates a particle system. 主要导出：Particles、ParticlesEffect。 最小用法：<Particles>…</Particles>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-particles.md。`,upstream:`https://animate-ui.com/r/primitives-effects-particles.json`};export{e as default};