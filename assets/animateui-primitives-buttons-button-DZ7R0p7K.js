var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/buttons/button.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-buttons-button.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-buttons-button.json`,props:{hoverScale:1.05,tapScale:.95}},note:{summaryZh:`按钮（动效原语）。`,importLine:`import { Button } from "@/components/vendor/animateui/primitives/buttons/button";`,usage:`<Button />`,exports:[{name:`Button`,kind:`component`,propsType:`ButtonProps`,inline:!1,union:!0,props:[{name:`hoverScale`,type:`number`,optional:!0,default:`1.05`},{name:`tapScale`,type:`number`,optional:!0,default:`0.95`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ButtonProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-buttons-button.json`,code:`import { Button } from '@/components/vendor/animateui/primitives/buttons/button';

interface ButtonDemoProps {
  hoverScale: number;
  tapScale: number;
}

export default function ButtonDemo({ hoverScale, tapScale }: ButtonDemoProps) {
  return (
    <Button
      key={\`\${hoverScale}-\${tapScale}\`}
      hoverScale={hoverScale}
      tapScale={tapScale}
      className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 h-10"
    >
      Button
    </Button>
  );
}
`},exampleNote:null}},docsField:`A simple button that animates on hover and tap. 主要导出：Button。 最小用法：<Button />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-buttons-button.md。`,upstream:`https://animate-ui.com/r/primitives-buttons-button.json`};export{e as default};