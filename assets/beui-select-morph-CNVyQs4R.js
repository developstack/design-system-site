var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/select-morph.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/select-morph.tsx`,export:`SelectMorphPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/select-morph.preview.tsx`},note:{summaryZh:`下拉选择（动效组件）。`,importLine:`import { MorphSelect } from "@/components/vendor/beui/motion/select-morph";`,usage:`<MorphSelect>…</MorphSelect>`,exports:[{name:`MorphSelectProps`,kind:`type`},{name:`MorphSelect`,doc:"Select whose trigger morphs into the panel via a shared layoutId — instead of a separate dropdown opening, the trigger itself grows into the menu and shrinks back, never detaching. Composable like `Select` (the gooey variant).",kind:`component`,propsType:`MorphSelectProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`MorphSelectValueProps`,kind:`type`},{name:`MorphSelectValue`,kind:`component`,propsType:`MorphSelectValueProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MorphSelectTriggerProps`,kind:`type`},{name:`MorphSelectTrigger`,kind:`component`,propsType:`MorphSelectTriggerProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`MorphSelectContentProps`,kind:`type`},{name:`MorphSelectContent`,kind:`component`,propsType:`MorphSelectContentProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]},{name:`MorphSelectItemProps`,kind:`type`},{name:`MorphSelectItem`,kind:`component`,propsType:`MorphSelectItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/select-morph.preview.tsx`,code:`"use client";

import { useState } from "react";
import {
  MorphSelect,
  MorphSelectContent,
  MorphSelectItem,
  MorphSelectTrigger,
  MorphSelectValue,
} from "@/components/vendor/beui/motion/select-morph";

export function SelectMorphPreview() {
  const [value, setValue] = useState("next");
  return (
    <div className="w-56">
      <MorphSelect value={value} onValueChange={setValue}>
        <MorphSelectTrigger>
          <MorphSelectValue placeholder="Pick a framework" />
        </MorphSelectTrigger>
        <MorphSelectContent>
          <MorphSelectItem value="next">Next.js</MorphSelectItem>
          <MorphSelectItem value="remix">Remix</MorphSelectItem>
          <MorphSelectItem value="astro">Astro</MorphSelectItem>
          <MorphSelectItem value="vite">Vite</MorphSelectItem>
        </MorphSelectContent>
      </MorphSelect>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable primitives (MorphSelect, MorphSelectTrigger, MorphSelectValue, MorphSelectContent, Morp… 主要导出：MorphSelect、MorphSelectValue、MorphSelectTrigger、MorphSelectContent 等。 最小用法：<MorphSelect>…</MorphSelect>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-select-morph.md。`,upstream:`https://beui.dev/r/select-morph.json`};export{e as default};