var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/checkbox.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`class-variance-authority`],registryDependencies:[`@developstack/animateui-primitives-base-checkbox`],preview:{kind:`example`,module:`examples/animateui/components-base-checkbox.tsx`,export:`BaseCheckboxDemo`,example:`https://animate-ui.com/r/demo-components-base-checkbox.json`,props:{indeterminate:!1,variant:`default`,size:`default`}},note:{summaryZh:`复选框（基于 Base UI 的组件）。`,importLine:`import { Checkbox } from "@/components/vendor/animateui/components/base/checkbox";`,usage:`<Checkbox />`,exports:[{name:`Checkbox`,kind:`component`,propsType:`CheckboxProps`,inline:!1,union:!1,props:[{name:`variant`,type:`"accent" | "default" | null`,optional:!0},{name:`size`,type:`"default" | "lg" | "sm" | null`,optional:!0},{name:`children`,type:`((string | number | bigint | boolean | Iterable<ReactNode> | Promise<AwaitedReactNode> | ReactEleme…`,optional:!0}],inherited:[{package:`@types/react`,count:272,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:17,names:[`checked`,`className`,`defaultChecked`,`disabled`,`form`,`id`,`indeterminate`,`inputRef`,`name`,`nativeButton`,`onCheckedChange`,`parent`]},{package:`映射类型生成，来源无法定位`,count:9,names:[]}]},{name:`CheckboxProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-checkbox.json`,code:`import { Label } from '@/components/ui/label';
import {
  Checkbox,
  type CheckboxProps,
} from '@/components/vendor/animateui/components/base/checkbox';

interface BaseCheckboxDemoProps {
  indeterminate: boolean;
  variant: CheckboxProps['variant'];
  size: CheckboxProps['size'];
}

export const BaseCheckboxDemo = ({
  indeterminate,
  variant,
  size,
}: BaseCheckboxDemoProps) => {
  return (
    <Label className="flex items-center gap-x-3">
      <Checkbox indeterminate={indeterminate} variant={variant} size={size} />
      Accept terms and conditions
    </Label>
  );
};
`},exampleNote:null}},docsField:`An easily stylable checkbox component. 主要导出：Checkbox。 最小用法：<Checkbox />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/checkbox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-base-checkbox.md。`,upstream:`https://animate-ui.com/r/components-base-checkbox.json`};export{e as default};