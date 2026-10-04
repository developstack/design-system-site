var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/color-selector.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/color-selector.tsx`,export:`ColorSelectorPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/color-selector.preview.tsx`},note:{summaryZh:`颜色选择器（动效组件）。`,importLine:`import { ColorSelector } from "@/components/vendor/beui/motion/color-selector";`,usage:`<ColorSelector />`,exports:[{name:`ColorSelectorProps`,kind:`type`},{name:`ColorSelector`,doc:`A single color choice. Give it a ColorSelectorLabel or an aria-label.`,kind:`component`,propsType:`ColorSelectorProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0,default:`""`},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`name`,type:`string`,optional:!0,doc:`The radio group name used in form submission. Generated when omitted.`},{name:`required`,type:`boolean`,optional:!0,default:`false`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,from:`@types/react`}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`ColorSelectorLabelProps`,kind:`type`},{name:`ColorSelectorLabel`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ColorSelectorListProps`,kind:`type`},{name:`ColorSelectorList`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ColorSelectorItemProps`,kind:`type`},{name:`ColorSelectorItem`,kind:`component`,propsType:`ColorSelectorItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`color`,type:`string`,optional:!1,doc:`Any CSS color, including a custom property.`},{name:`label`,type:`string`,optional:!1,doc:`Accessible color name; selection never relies on color alone.`},{name:`className`,type:`string`,optional:!0,doc:`Applied to the visible swatch surface.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,from:`@types/react`}],inherited:[{package:`@types/react`,count:299,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/color-selector.preview.tsx`,code:`"use client";

import {
  ColorSelector,
  ColorSelectorItem,
  ColorSelectorLabel,
  ColorSelectorList,
} from "@/components/vendor/beui/motion/color-selector";

export function ColorSelectorPreview() {
  return (
    <ColorSelector defaultValue="blue" name="accent">
      <ColorSelectorLabel>Accent</ColorSelectorLabel>
      <ColorSelectorList>
        <ColorSelectorItem value="blue" color="#3478f6" label="Blue" />
        <ColorSelectorItem value="purple" color="#9270e8" label="Purple" />
        <ColorSelectorItem value="pink" color="#e66aa4" label="Pink" />
        <ColorSelectorItem value="red" color="#e55656" label="Red" />
        <ColorSelectorItem value="orange" color="#ed9141" label="Orange" />
        <ColorSelectorItem value="amber" color="#e5b63c" label="Amber" />
        <ColorSelectorItem value="green" color="#65a65a" label="Green" />
        <ColorSelectorItem value="teal" color="#169d83" label="Teal" />
      </ColorSelectorList>
    </ColorSelector>
  );
}
`},exampleNote:null}},docsField:`Composable color swatches with a spring-gliding selection… 主要导出：ColorSelector、ColorSelectorLabel、ColorSelectorList、ColorSelectorItem。 最小用法：<ColorSelector />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/radio.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-color-selector.md。`,upstream:`https://beui.dev/r/color-selector.json`};export{e as default};