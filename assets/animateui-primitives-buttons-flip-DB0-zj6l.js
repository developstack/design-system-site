var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/buttons/flip.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-buttons-flip.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-buttons-flip.json`,props:{from:`top`,tapScale:.95}},note:{summaryZh:`按钮（动效原语）。`,importLine:`import { FlipButton } from "@/components/vendor/animateui/primitives/buttons/flip";`,usage:`<FlipButton />`,exports:[{name:`FlipButton`,kind:`component`,propsType:`FlipButtonProps`,inline:!1,union:!0,props:[{name:`from`,type:`FlipDirection`,optional:!0,default:`'top'`},{name:`tapScale`,type:`number`,optional:!0,default:`0.95`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FlipButtonFront`,kind:`component`,propsType:`FlipButtonFaceProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 280, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FlipButtonBack`,kind:`component`,propsType:`FlipButtonFaceProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 280, damping: 20 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useFlipButton`,kind:`hook`,signature:`() => FlipButtonContextType`,params:[],requiredParams:0},{name:`FlipButtonProps`,kind:`type`},{name:`FlipButtonFrontProps`,kind:`type`},{name:`FlipButtonBackProps`,kind:`type`},{name:`FlipDirection`,kind:`type`},{name:`FlipButtonContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-buttons-flip.json`,code:`import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from '@/components/vendor/animateui/primitives/buttons/flip';

type FlipButtonDemoProps = {
  from?: 'top' | 'right' | 'bottom' | 'left';
  tapScale?: number;
};

export default function FlipButtonDemo({
  from,
  tapScale,
}: FlipButtonDemoProps) {
  return (
    <FlipButton
      key={\`\${from}-\${tapScale}\`}
      from={from}
      tapScale={tapScale}
      className="text-sm font-medium"
    >
      <FlipButtonFront className="px-4 py-2 h-10 bg-primary text-primary-foreground flex items-center justify-center">
        Front
      </FlipButtonFront>
      <FlipButtonBack className="px-4 py-2 h-10 bg-accent text-accent-foreground flex items-center justify-center">
        Back Button
      </FlipButtonBack>
    </FlipButton>
  );
}
`},exampleNote:null}},docsField:`A button that flips between two states on hover. 主要导出：FlipButton、FlipButtonFront、FlipButtonBack、useFlipButton。 最小用法：<FlipButton />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/button.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-buttons-flip.md。`,upstream:`https://animate-ui.com/r/primitives-buttons-flip.json`};export{e as default};