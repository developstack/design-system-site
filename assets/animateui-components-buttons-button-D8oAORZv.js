var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/buttons/button.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-primitives-buttons-button`],preview:{kind:`example`,module:`examples/animateui/components-buttons-button.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-components-buttons-button.json`,props:{variant:`default`,size:`default`}},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { Button } from "@/components/vendor/animateui/components/buttons/button";`,usage:`<Button />`,exports:[{name:`Button`,kind:`component`,propsType:`ButtonProps`,inline:!1,union:!0,props:[{name:`variant`,type:`"accent" | "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0},{name:`hoverScale`,type:`number`,optional:!0},{name:`tapScale`,type:`number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`buttonVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; accent: string; destructive: string; outline: string; secondary: string; ghost: string; link: string; }; size: { default: string; sm: string; lg…`,params:[`props`],requiredParams:0},{name:`ButtonProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-buttons-button.json`,code:`import { PlusIcon } from 'lucide-react';
import { Button, type ButtonProps } from '@/components/vendor/animateui/components/buttons/button';

interface ButtonDemoProps {
  variant: ButtonProps['variant'];
  size: ButtonProps['size'];
}

export default function ButtonDemo({ variant, size }: ButtonDemoProps) {
  return (
    <Button variant={variant} size={size}>
      {size === 'icon' ? <PlusIcon /> : 'Click me'}
    </Button>
  );
}
`},exampleNote:null}},docsField:`A button component with a variety of styles and animations. 主要导出：Button、buttonVariants。 最小用法：<Button />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/button.md。属性与示例见 packages/registry/docs/vendor/animateui-components-buttons-button.md。`,upstream:`https://animate-ui.com/r/components-buttons-button.json`};export{e as default};