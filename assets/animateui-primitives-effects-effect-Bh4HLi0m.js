var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/effect.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-effect.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-effect.json`,props:{delay:0,blur:!0,slide:!0,fade:!0,zoom:!0}},note:{summaryZh:null,importLine:`import { Effect } from "@/components/vendor/animateui/primitives/effects/effect";`,usage:`<Effect />`,exports:[{name:`Effect`,kind:`component`,propsType:`EffectProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!0},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`blur`,type:`boolean | Blur`,optional:!0,default:`false`},{name:`slide`,type:`boolean | Slide`,optional:!0,default:`false`},{name:`fade`,type:`boolean | Fade`,optional:!0,default:`false`},{name:`zoom`,type:`boolean | Zoom`,optional:!0,default:`false`},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`Effects`,kind:`component`,propsType:`EffectsProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`blur`,type:`boolean | Blur`,optional:!0},{name:`slide`,type:`boolean | Slide`,optional:!0},{name:`fade`,type:`boolean | Fade`,optional:!0},{name:`zoom`,type:`boolean | Zoom`,optional:!0},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1},{name:`holdDelay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`EffectProps`,kind:`type`},{name:`EffectsProps`,kind:`type`},{name:`SlideDirection`,kind:`type`},{name:`Slide`,kind:`type`},{name:`Fade`,kind:`type`},{name:`Zoom`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-effect.json`,code:`import { Effect } from '@/components/vendor/animateui/primitives/effects/effect';

type EffectDemoProps = {
  delay?: number;
  blur?: boolean;
  slide?: boolean;
  fade?: boolean;
  zoom?: boolean;
};

export default function EffectDemo({
  delay = 0,
  blur = false,
  slide = false,
  fade = false,
  zoom = false,
}: EffectDemoProps) {
  return (
    <Effect
      delay={delay}
      blur={blur}
      slide={slide}
      fade={fade}
      zoom={zoom}
      className="px-6 py-4 bg-accent"
    >
      Effect
    </Effect>
  );
}
`},exampleNote:null}},docsField:`An effect that allows you to animate elements on first view or load. 主要导出：Effect、Effects。 最小用法：<Effect />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/reveal.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-effect.md。`,upstream:`https://animate-ui.com/r/primitives-effects-effect.json`};export{e as default};