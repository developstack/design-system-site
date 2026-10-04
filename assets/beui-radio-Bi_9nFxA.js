var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/radio.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/radio.tsx`,export:`RadioPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/radio.preview.tsx`},note:{summaryZh:`单选组（动效组件）。`,importLine:`import { RadioGroup } from "@/components/vendor/beui/motion/radio";`,usage:`<RadioGroup>…</RadioGroup>`,exports:[{name:`RadioGroupProps`,kind:`type`},{name:`RadioGroup`,kind:`component`,propsType:`RadioGroupProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0,default:`""`},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`orientation`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`}],inherited:[]},{name:`RadioGroupItemProps`,kind:`type`},{name:`RadioGroupItem`,kind:`component`,propsType:`RadioGroupItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`label`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`id`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/radio.preview.tsx`,code:`"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/vendor/beui/motion/radio";

export function RadioPreview() {
  const [plan, setPlan] = useState("pro");

  return (
    <RadioGroup value={plan} onValueChange={setPlan} className="min-w-48">
      <RadioGroupItem value="starter" label="Starter — free" />
      <RadioGroupItem value="pro" label="Pro — $12/mo" />
      <RadioGroupItem value="team" label="Team — $29/mo" />
      <RadioGroupItem value="legacy" label="Legacy plan" disabled />
    </RadioGroup>
  );
}
`},exampleNote:null}},docsField:`Single-select choice control with a gliding layoutId indicator dot and spring press feedback. 主要导出：RadioGroup、RadioGroupItem。 最小用法：<RadioGroup>…</RadioGroup>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-radio.md。`,upstream:`https://beui.dev/r/radio.json`};export{e as default};