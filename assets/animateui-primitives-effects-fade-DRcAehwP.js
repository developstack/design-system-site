var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/fade.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-fade.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-fade.json`,props:{delay:0,initialOpacity:0,opacity:1}},note:{summaryZh:`淡入淡出动效（动效原语）。`,importLine:`import { Fade } from "@/components/vendor/animateui/primitives/effects/fade";`,usage:`<Fade />`,exports:[{name:`Fade`,kind:`component`,propsType:`FadeProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!0},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initialOpacity`,type:`number`,optional:!0,default:`0`},{name:`opacity`,type:`number`,optional:!0,default:`1`},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`Fades`,kind:`component`,propsType:`FadeListProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initialOpacity`,type:`number`,optional:!0},{name:`opacity`,type:`number`,optional:!0},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1},{name:`holdDelay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FadeProps`,kind:`type`},{name:`FadeListProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-fade.json`,code:`import { Fade } from '@/components/vendor/animateui/primitives/effects/fade';

type FadeDemoProps = {
  delay?: number;
  initialOpacity?: number;
  opacity?: number;
};

export default function FadeDemo({
  delay = 0,
  initialOpacity = 0,
  opacity = 1,
}: FadeDemoProps) {
  return (
    <Fade
      delay={delay}
      initialOpacity={initialOpacity}
      opacity={opacity}
      className="px-6 py-4 bg-accent"
    >
      Fade
    </Fade>
  );
}
`},exampleNote:null}},docsField:`An effect that allows you to animate elements with a fade effect on first view or load. 主要导出：Fade、Fades。 最小用法：<Fade />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/reveal.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-fade.md。`,upstream:`https://animate-ui.com/r/primitives-effects-fade.json`};export{e as default};