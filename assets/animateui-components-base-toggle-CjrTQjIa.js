var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/toggle.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-primitives-base-toggle`],preview:{kind:`example`,module:`examples/animateui/components-base-toggle.tsx`,export:`BaseToggleDemo`,example:`https://animate-ui.com/r/demo-components-base-toggle.json`,props:{variant:`default`,size:`icon`}},note:{summaryZh:`切换按钮（基于 Base UI 的组件）。`,importLine:`import { Toggle } from "@/components/vendor/animateui/components/base/toggle";`,usage:`<Toggle />`,exports:[{name:`Toggle`,kind:`component`,propsType:`ToggleProps`,inline:!1,union:!1,props:[{name:`variant`,type:`"default" | "outline" | null`,optional:!0},{name:`size`,type:`"default" | "icon" | "lg" | "sm" | null`,optional:!0}],inherited:[{package:`@types/react`,count:283,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:8,names:[`className`,`defaultPressed`,`disabled`,`nativeButton`,`onPressedChange`,`pressed`,`style`,`value`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`toggleVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; outline: string; }; size: { default: string; sm: string; lg: string; icon: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`ToggleProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-toggle.json`,code:`import { Toggle, type ToggleProps } from '@/components/vendor/animateui/components/base/toggle';
import { Bold } from 'lucide-react';

interface BaseToggleDemoProps {
  variant: ToggleProps['variant'];
  size: ToggleProps['size'];
}

export function BaseToggleDemo({ variant, size }: BaseToggleDemoProps) {
  return (
    <Toggle aria-label="Toggle italic" variant={variant} size={size}>
      <Bold />
    </Toggle>
  );
}
`},exampleNote:null}},docsField:`A two-state button that can be on or off. 主要导出：Toggle、toggleVariants。 最小用法：<Toggle />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/toggle.md。属性与示例见 packages/registry/docs/vendor/animateui-components-base-toggle.md。`,upstream:`https://animate-ui.com/r/components-base-toggle.json`};export{e as default};