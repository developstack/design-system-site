var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/buttons/ripple.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-buttons-ripple.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-buttons-ripple.json`,props:{hoverScale:1.05,tapScale:.95}},note:{summaryZh:`按钮（动效原语）。`,importLine:`import { RippleButton } from "@/components/vendor/animateui/primitives/buttons/ripple";`,usage:`<RippleButton />`,exports:[{name:`RippleButton`,kind:`component`,propsType:`RippleButtonProps`,inline:!1,union:!0,props:[{name:`hoverScale`,type:`number`,optional:!0,default:`1.05`},{name:`tapScale`,type:`number`,optional:!0,default:`0.95`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`RippleButtonRipples`,kind:`component`,propsType:`RippleButtonRipplesProps`,inline:!1,union:!0,props:[{name:`color`,type:`string`,optional:!0,default:`'var(--ripple-button-ripple-color)'`},{name:`scale`,type:`number`,optional:!0,default:`10`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.6, ease: 'easeOut' }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`RippleButtonProps`,kind:`type`},{name:`RippleButtonRipplesProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-buttons-ripple.json`,code:`import {
  RippleButton,
  RippleButtonRipples,
} from '@/components/vendor/animateui/primitives/buttons/ripple';

interface RippleButtonDemoProps {
  hoverScale: number;
  tapScale: number;
}

export default function RippleButtonDemo({
  hoverScale,
  tapScale,
}: RippleButtonDemoProps) {
  return (
    <RippleButton
      key={\`\${hoverScale}-\${tapScale}\`}
      hoverScale={hoverScale}
      tapScale={tapScale}
      className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 h-10 [--ripple-button-ripple-color:var(--primary-foreground)]"
    >
      Ripple Button
      <RippleButtonRipples />
    </RippleButton>
  );
}
`},exampleNote:null}},docsField:`A button that animates on tap with a ripple effect. 主要导出：RippleButton、RippleButtonRipples。 最小用法：<RippleButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-buttons-ripple.md。`,upstream:`https://animate-ui.com/r/primitives-buttons-ripple.json`};export{e as default};