var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/radio.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`],registryDependencies:[`@developstack/animateui-primitives-base-radio`],preview:{kind:`example`,module:`examples/animateui/components-base-radio.tsx`,export:`BaseRadioDemo`,example:`https://animate-ui.com/r/demo-components-base-radio.json`},note:{summaryZh:`单选框（基于 Base UI 的组件）。`,importLine:`import { Radio } from "@/components/vendor/animateui/components/base/radio";`,usage:`<Radio />`,exports:[{name:`RadioGroup`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:12,names:[`className`,`defaultValue`,`disabled`,`form`,`inputRef`,`name`,`onValueChange`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`Radio`,kind:`component`,propsType:`RadioProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:11,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`disabled`,`inputRef`,`nativeButton`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`RadioGroupProps`,kind:`type`},{name:`RadioProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-radio.json`,code:`import * as React from 'react';

import { RadioGroup, Radio } from '@/components/vendor/animateui/components/base/radio';
import { Label } from '@/components/ui/label';

export const BaseRadioDemo = () => {
  return (
    <RadioGroup defaultValue="default">
      <Label className="flex items-center gap-x-3">
        <Radio value="default" />
        Default
      </Label>
      <Label className="flex items-center gap-x-3">
        <Radio value="comfortable" />
        Comfortable
      </Label>
      <Label className="flex items-center gap-x-3">
        <Radio value="compact" />
        Compact
      </Label>
    </RadioGroup>
  );
};
`},exampleNote:null}},docsField:`An easily stylable radio button component. 主要导出：Radio、RadioGroup。 最小用法：<Radio />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/radio.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-base-radio.md。`,upstream:`https://animate-ui.com/r/components-base-radio.json`};export{e as default};