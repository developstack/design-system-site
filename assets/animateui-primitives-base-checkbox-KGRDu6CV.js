var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/checkbox.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-checkbox.tsx`,export:`BaseCheckboxDemo`,example:`https://animate-ui.com/r/demo-primitives-base-checkbox.json`,props:{indeterminate:!1}},note:{summaryZh:`复选框（基于 Base UI 的原语）。`,importLine:`import { Checkbox } from "@/components/vendor/animateui/primitives/base/checkbox";`,usage:`<Checkbox />`,exports:[{name:`Checkbox`,kind:`component`,propsType:`CheckboxProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:17,names:[`checked`,`className`,`defaultChecked`,`disabled`,`form`,`id`,`indeterminate`,`inputRef`,`name`,`nativeButton`,`onCheckedChange`,`parent`]},{package:`映射类型生成，来源无法定位`,count:9,names:[]}]},{name:`CheckboxIndicator`,kind:`component`,propsType:`CheckboxIndicatorProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:479,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`useCheckbox`,kind:`hook`,signature:`() => CheckboxContextType`,params:[],requiredParams:0},{name:`CheckboxProps`,kind:`type`},{name:`CheckboxIndicatorProps`,kind:`type`},{name:`CheckboxContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-checkbox.json`,code:`import {
  Checkbox,
  CheckboxIndicator,
} from '@/components/vendor/animateui/primitives/base/checkbox';
import { Label } from '@/components/ui/label';

interface BaseCheckboxDemoProps {
  indeterminate: boolean;
}

export const BaseCheckboxDemo = ({ indeterminate }: BaseCheckboxDemoProps) => {
  return (
    <Label className="flex items-center gap-x-3">
      <Checkbox
        indeterminate={indeterminate}
        className="size-5 flex justify-center items-center border [&[data-checked],&[data-indeterminate]]:bg-primary [&[data-checked],&[data-indeterminate]]:text-primary-foreground transition-colors duration-500"
      >
        <CheckboxIndicator className="size-3.5" />
      </Checkbox>
      Accept terms and conditions
    </Label>
  );
};
`},exampleNote:null}},docsField:`An easily stylable checkbox component. 主要导出：Checkbox、CheckboxIndicator、useCheckbox。 最小用法：<Checkbox />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-checkbox.md。`,upstream:`https://animate-ui.com/r/primitives-base-checkbox.json`};export{e as default};