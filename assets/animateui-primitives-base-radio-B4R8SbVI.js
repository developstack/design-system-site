var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/radio.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-radio.tsx`,export:`BaseRadioDemo`,example:`https://animate-ui.com/r/demo-primitives-base-radio.json`},note:{summaryZh:`单选框（基于 Base UI 的原语）。`,importLine:`import { Radio } from "@/components/vendor/animateui/primitives/base/radio";`,usage:`<Radio />`,exports:[{name:`RadioGroup`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:12,names:[`className`,`defaultValue`,`disabled`,`form`,`inputRef`,`name`,`onValueChange`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`Radio`,kind:`component`,propsType:`RadioProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:11,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`disabled`,`inputRef`,`nativeButton`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`RadioIndicator`,kind:`component`,propsType:`RadioIndicatorProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 16 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`keepMounted`,`render`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`useRadioGroup`,kind:`hook`,signature:`() => RadioGroupContextType`,params:[],requiredParams:0},{name:`useRadio`,kind:`hook`,signature:`() => RadioContextType`,params:[],requiredParams:0},{name:`RadioGroupProps`,kind:`type`},{name:`RadioProps`,kind:`type`},{name:`RadioIndicatorProps`,kind:`type`},{name:`RadioGroupContextType`,kind:`type`},{name:`RadioContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-radio.json`,code:`import { Label } from '@/components/ui/label';
import {
  RadioGroup,
  Radio,
  RadioIndicator,
} from '@/components/vendor/animateui/primitives/base/radio';

const itemClassName =
  'size-5 rounded-full flex items-center justify-center border';
const indicatorClassName = 'size-3 bg-primary rounded-full';

export function BaseRadioDemo() {
  return (
    <RadioGroup defaultValue="default" className="flex flex-col gap-2">
      <Label className="flex items-center gap-x-3">
        <Radio value="default" className={itemClassName}>
          <RadioIndicator className={indicatorClassName} />
        </Radio>
        Default
      </Label>
      <Label className="flex items-center gap-x-3">
        <Radio value="comfortable" className={itemClassName}>
          <RadioIndicator className={indicatorClassName} />
        </Radio>
        Comfortable
      </Label>
      <Label className="flex items-center gap-x-3">
        <Radio value="compact" className={itemClassName}>
          <RadioIndicator className={indicatorClassName} />
        </Radio>
        Compact
      </Label>
    </RadioGroup>
  );
}
`},exampleNote:null}},docsField:`An easily stylable radio button component. 主要导出：Radio、RadioGroup、RadioIndicator、useRadioGroup 等。 最小用法：<Radio />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/radio.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-radio.md。`,upstream:`https://animate-ui.com/r/primitives-base-radio.json`};export{e as default};