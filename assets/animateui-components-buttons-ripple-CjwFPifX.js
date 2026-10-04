var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/buttons/ripple.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-components-buttons-button`,`@developstack/animateui-primitives-buttons-ripple`],preview:{kind:`example`,module:`examples/animateui/components-buttons-ripple.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-components-buttons-ripple.json`,props:{variant:`default`,size:`default`}},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { RippleButton } from "@/components/vendor/animateui/components/buttons/ripple";`,usage:`<RippleButton />`,exports:[{name:`RippleButton`,kind:`component`,propsType:`RippleButtonProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"accent" | "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`hoverScale`,type:`number`,optional:!0},{name:`tapScale`,type:`number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`RippleButtonRipples`,kind:`component`,propsType:`RippleButtonRipplesProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`color`,type:`string`,optional:!0},{name:`scale`,type:`number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`RippleButtonProps`,kind:`type`},{name:`RippleButtonRipplesProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-buttons-ripple.json`,code:`import { PlusIcon } from 'lucide-react';
import {
  RippleButton,
  RippleButtonRipples,
  type RippleButtonProps,
} from '@/components/vendor/animateui/components/buttons/ripple';

interface RippleButtonDemoProps {
  variant: RippleButtonProps['variant'];
  size: RippleButtonProps['size'];
}

export default function RippleButtonDemo({
  variant,
  size,
}: RippleButtonDemoProps) {
  return (
    <RippleButton variant={variant} size={size}>
      {size === 'icon' ? <PlusIcon /> : 'Click me'}
      <RippleButtonRipples />
    </RippleButton>
  );
}
`},exampleNote:null}},docsField:`A button that animates on tap with a ripple effect. 主要导出：RippleButton、RippleButtonRipples。 最小用法：<RippleButton />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/button.md。属性与示例见 packages/registry/docs/vendor/animateui-components-buttons-ripple.md。`,upstream:`https://animate-ui.com/r/components-buttons-ripple.json`};export{e as default};