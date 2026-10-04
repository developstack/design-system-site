var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/buttons/flip.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-components-buttons-button`,`@developstack/animateui-primitives-buttons-flip`],preview:{kind:`example`,module:`examples/animateui/components-buttons-flip.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-components-buttons-flip.json`,props:{frontVariant:`accent`,frontSize:`default`,backVariant:`default`,backSize:`default`}},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { FlipButton } from "@/components/vendor/animateui/components/buttons/flip";`,usage:`<FlipButton />`,exports:[{name:`FlipButton`,kind:`component`,propsType:`FlipButtonProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"accent" | "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`from`,type:`FlipDirection`,optional:!0},{name:`tapScale`,type:`number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FlipButtonFront`,kind:`component`,propsType:`FlipButtonFrontProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"accent" | "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FlipButtonBack`,kind:`component`,propsType:`FlipButtonBackProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"accent" | "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`FlipButtonProps`,kind:`type`},{name:`FlipButtonFrontProps`,kind:`type`},{name:`FlipButtonBackProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-buttons-flip.json`,code:`import { PlusIcon } from 'lucide-react';
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
  type FlipButtonProps,
} from '@/components/vendor/animateui/components/buttons/flip';

interface ButtonDemoProps {
  frontVariant: FlipButtonProps['variant'];
  frontSize: FlipButtonProps['size'];
  backVariant: FlipButtonProps['variant'];
  backSize: FlipButtonProps['size'];
}

export default function ButtonDemo({
  frontVariant,
  frontSize,
  backVariant,
  backSize,
}: ButtonDemoProps) {
  return (
    <FlipButton>
      <FlipButtonFront variant={frontVariant} size={frontSize}>
        {frontSize === 'icon' ? <PlusIcon /> : 'Front Button'}
      </FlipButtonFront>
      <FlipButtonBack variant={backVariant} size={backSize}>
        {backSize === 'icon' ? <PlusIcon /> : 'Back Button'}
      </FlipButtonBack>
    </FlipButton>
  );
}
`},exampleNote:null}},docsField:`A button that flips between two states on hover. 主要导出：FlipButton、FlipButtonFront、FlipButtonBack。 最小用法：<FlipButton />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-buttons-flip.md。`,upstream:`https://animate-ui.com/r/components-buttons-flip.json`};export{e as default};