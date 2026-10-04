var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/slide.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-slide.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-slide.json`,props:{delay:0,direction:`up`,offset:100}},note:{summaryZh:`滑入动效（动效原语）。`,importLine:`import { Slide } from "@/components/vendor/animateui/primitives/effects/slide";`,usage:`<Slide />`,exports:[{name:`Slide`,kind:`component`,propsType:`SlideProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!0},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`direction`,type:`SlideDirection`,optional:!0,default:`'up'`},{name:`offset`,type:`number`,optional:!0,default:`100`},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`Slides`,kind:`component`,propsType:`SlideListProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`direction`,type:`SlideDirection`,optional:!0},{name:`offset`,type:`number`,optional:!0},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1},{name:`holdDelay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`SlideProps`,kind:`type`},{name:`SlideListProps`,kind:`type`},{name:`SlideDirection`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-slide.json`,code:`import {
  Slide,
  type SlideDirection,
} from '@/components/vendor/animateui/primitives/effects/slide';

type SlideDemoProps = {
  delay?: number;
  direction?: SlideDirection;
  offset?: number;
};

export default function SlideDemo({
  delay = 0,
  direction = 'up',
  offset = 100,
}: SlideDemoProps) {
  return (
    <Slide
      delay={delay}
      direction={direction}
      offset={offset}
      className="px-6 py-4 bg-accent"
    >
      Slide
    </Slide>
  );
}
`},exampleNote:null}},docsField:`An effect that allows you to animate elements with a slide effect on first view or load. 主要导出：Slide、Slides。 最小用法：<Slide />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/reveal.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-slide.md。`,upstream:`https://animate-ui.com/r/primitives-effects-slide.json`};export{e as default};