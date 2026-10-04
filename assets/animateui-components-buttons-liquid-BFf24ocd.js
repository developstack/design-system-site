var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/buttons/liquid.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-primitives-buttons-liquid`],preview:{kind:`example`,module:`examples/animateui/components-buttons-liquid.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-components-buttons-liquid.json`,props:{variant:`default`,size:`default`}},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { LiquidButton } from "@/components/vendor/animateui/components/buttons/liquid";`,usage:`<LiquidButton />`,exports:[{name:`LiquidButton`,kind:`component`,propsType:`LiquidButtonProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"default" | "destructive" | "ghost" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`delay`,type:`string`,optional:!0},{name:`fillHeight`,type:`string`,optional:!0},{name:`hoverScale`,type:`number`,optional:!0},{name:`tapScale`,type:`number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`buttonVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; destructive: string; secondary: string; ghost: string; }; size: { default: string; sm: string; lg: string; icon: string; 'icon-sm': string; 'ico…`,params:[`props`],requiredParams:0},{name:`LiquidButtonProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-buttons-liquid.json`,code:`import { PlusIcon } from 'lucide-react';
import {
  LiquidButton,
  type LiquidButtonProps,
} from '@/components/vendor/animateui/components/buttons/liquid';

interface LiquidButtonDemoProps {
  variant: LiquidButtonProps['variant'];
  size: LiquidButtonProps['size'];
}

export default function LiquidButtonDemo({
  variant,
  size,
}: LiquidButtonDemoProps) {
  return (
    <LiquidButton variant={variant} size={size}>
      {size === 'icon' ? <PlusIcon /> : 'Hover me'}
    </LiquidButton>
  );
}
`},exampleNote:null}},docsField:`A button that fills on hover. 主要导出：LiquidButton、buttonVariants。 最小用法：<LiquidButton />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/button.md。属性与示例见 packages/registry/docs/vendor/animateui-components-buttons-liquid.md。`,upstream:`https://animate-ui.com/r/components-buttons-liquid.json`};export{e as default};