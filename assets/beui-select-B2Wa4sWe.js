var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/select.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/select.tsx`,export:`SelectPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/select.preview.tsx`},note:{summaryZh:`下拉选择（动效组件）。`,importLine:`import { Select } from "@/components/vendor/beui/motion/select";`,usage:`<Select>…</Select>`,exports:[{name:`SelectProps`,kind:`type`},{name:`Select`,kind:`component`,propsType:`SelectProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`open`,type:`boolean`,optional:!0,doc:`Controlled open state of the panel. A layout that stacks selects can hold this to keep exactly one panel open — the panel is absolutely positioned inside its field, so two open at once paint over each other's options.`},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`,doc:`Uncontrolled initial open state. Default false.`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0,doc:`Fires whenever the panel opens or closes. The panel is absolutely positioned inside the field, so a layout that stacks selects has to know which one is open to paint it above its neighbours.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`SelectTriggerProps`,kind:`type`},{name:`SelectTrigger`,kind:`component`,propsType:`SelectTriggerProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`SelectValueProps`,kind:`type`},{name:`SelectValue`,kind:`component`,propsType:`SelectValueProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`SelectContentProps`,kind:`type`},{name:`SelectContent`,kind:`component`,propsType:`SelectContentProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`SelectItemProps`,kind:`type`},{name:`SelectItem`,kind:`component`,propsType:`SelectItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/select.preview.tsx`,code:`"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/vendor/beui/motion/select";

export function SelectPreview() {
  const [value, setValue] = useState("next");
  return (
    <div className="w-56">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Pick a framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable primitives (Select, SelectTrigger, SelectValue, SelectContent, SelectItem); t… 主要导出：Select、SelectTrigger、SelectValue、SelectContent 等。 最小用法：<Select>…</Select>。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/select.md。属性与示例见 packages/registry/docs/vendor/beui-select.md。`,upstream:`https://beui.dev/r/select.json`};export{e as default};