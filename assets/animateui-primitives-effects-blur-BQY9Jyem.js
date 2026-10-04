var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/blur.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-blur.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-blur.json`,props:{delay:0,initialBlur:10,blur:0}},note:{summaryZh:`模糊动效（动效原语）。`,importLine:`import { Blur } from "@/components/vendor/animateui/primitives/effects/blur";`,usage:`<Blur />`,exports:[{name:`Blur`,kind:`component`,propsType:`BlurProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!0},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initialBlur`,type:`number`,optional:!0,default:`10`},{name:`blur`,type:`number`,optional:!0,default:`0`},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`Blurs`,kind:`component`,propsType:`BlurListProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initialBlur`,type:`number`,optional:!0},{name:`blur`,type:`number`,optional:!0},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1},{name:`holdDelay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`BlurProps`,kind:`type`},{name:`BlurListProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-blur.json`,code:`import { Blur } from '@/components/vendor/animateui/primitives/effects/blur';

type BlurDemoProps = {
  delay?: number;
  initialBlur?: number;
  blur?: number;
};

export default function BlurDemo({
  delay = 0,
  initialBlur = 10,
  blur = 0,
}: BlurDemoProps) {
  return (
    <Blur
      delay={delay}
      initialBlur={initialBlur}
      blur={blur}
      className="px-6 py-4 bg-accent"
    >
      Blur
    </Blur>
  );
}
`},exampleNote:null}},docsField:`An effect that allows you to animate elements with a blur effect on first view or load. 主要导出：Blur、Blurs。 最小用法：<Blur />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/reveal.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-blur.md。`,upstream:`https://animate-ui.com/r/primitives-effects-blur.json`};export{e as default};