var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/switch.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/switch.tsx`,export:`SwitchPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/switch.preview.tsx`},note:{summaryZh:`开关（动效组件）。`,importLine:`import { Switch } from "@/components/vendor/beui/motion/switch";`,usage:`<Switch checked={…} onCheckedChange={…} />`,exports:[{name:`SwitchProps`,kind:`type`},{name:`Switch`,kind:`component`,propsType:`SwitchProps`,inline:!1,union:!1,props:[{name:`checked`,type:`boolean`,optional:!1},{name:`onCheckedChange`,type:`(checked: boolean) => void`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0},{name:`label`,type:`string`,optional:!0},{name:`ariaLabel`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/switch.preview.tsx`,code:`"use client";

import { useState } from "react";
import { Switch } from "@/components/vendor/beui/motion/switch";

export function SwitchPreview() {
  const [on, setOn] = useState(true);
  return (
    <div className="flex flex-col gap-3">
      <Switch checked={on} onCheckedChange={setOn} label="Enable notifications" />
      <Switch checked={false} onCheckedChange={() => {}} label="Off" />
      <Switch checked disabled onCheckedChange={() => {}} label="Disabled" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Toggle with a spring-driven thumb and press feedback. 主要导出：Switch。 最小用法：<Switch checked={…} onCheckedChange={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/switch.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-switch.md。`,upstream:`https://beui.dev/r/switch.json`};export{e as default};