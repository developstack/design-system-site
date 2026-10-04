var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/magnetic.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-magnetic.tsx`,export:`MagneticDemo`,example:`https://animate-ui.com/r/demo-primitives-effects-magnetic.json`,props:{onlyOnHover:!1,strength:.5,range:120}},note:{summaryZh:`磁吸动效（动效原语）。`,importLine:`import { Magnetic } from "@/components/vendor/animateui/primitives/effects/magnetic";`,usage:`<Magnetic />`,exports:[{name:`Magnetic`,kind:`component`,propsType:`MagneticProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!0},{name:`strength`,type:`number`,optional:!0,default:`0.5`},{name:`range`,type:`number`,optional:!0,default:`120`},{name:`springOptions`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 100, damping: 10, mass: 0.5 }`},{name:`onlyOnHover`,type:`boolean`,optional:!0,default:`false`},{name:`disableOnTouch`,type:`boolean`,optional:!0,default:`true`},{name:`ref`,type:`((RefObject<HTMLElement | null> | ((instance: HTMLElement | null) => void | (() => VoidOrUndefinedO…`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`MagneticProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-magnetic.json`,code:`import { Magnetic } from '@/components/vendor/animateui/primitives/effects/magnetic';

interface MagneticDemoProps {
  onlyOnHover: boolean;
  strength: number;
  range: number;
}

export const MagneticDemo = (props: MagneticDemoProps) => {
  return (
    <div className="size-full flex items-center justify-center">
      <Magnetic className="size-20 bg-primary" {...props} />
    </div>
  );
};
`},exampleNote:null}},docsField:`A magnetic effect that clings to the cursor, creating a magnetic attraction effect. 主要导出：Magnetic。 最小用法：<Magnetic />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-magnetic.md。`,upstream:`https://animate-ui.com/r/primitives-effects-magnetic.json`};export{e as default};