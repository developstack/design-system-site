var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/checkbox.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/checkbox.tsx`,export:`CheckboxPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/checkbox.preview.tsx`},note:{summaryZh:`复选框（动效组件）。`,importLine:`import { Checkbox } from "@/components/vendor/beui/motion/checkbox";`,usage:`<Checkbox checked={…} onCheckedChange={…} />`,exports:[{name:`CheckboxProps`,kind:`type`},{name:`Checkbox`,kind:`component`,propsType:`CheckboxProps`,inline:!1,union:!1,props:[{name:`checked`,type:`boolean`,optional:!1},{name:`onCheckedChange`,type:`(checked: boolean) => void`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0},{name:`indeterminate`,type:`boolean`,optional:!0},{name:`label`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`id`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`aria-describedby`,type:`string`,optional:!0,doc:`Associates an external message (e.g. a form error) with the control.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/checkbox.preview.tsx`,code:`"use client";

import { useState } from "react";
import { Checkbox } from "@/components/vendor/beui/motion/checkbox";

export function CheckboxPreview() {
  const [terms, setTerms] = useState(true);
  const [updates, setUpdates] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <Checkbox
        checked={terms}
        onCheckedChange={setTerms}
        label="Accept terms and conditions"
      />
      <Checkbox
        checked={updates}
        onCheckedChange={setUpdates}
        label="Email me product updates"
      />
      <Checkbox checked indeterminate onCheckedChange={() => {}} label="Select all (partial)" />
      <Checkbox checked disabled onCheckedChange={() => {}} label="Disabled" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Form choice control with a draw-on checkmark, spring press feedback and indeterminate stat… 主要导出：Checkbox。 最小用法：<Checkbox checked={…} onCheckedChange={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/checkbox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-checkbox.md。`,upstream:`https://beui.dev/r/checkbox.json`};export{e as default};