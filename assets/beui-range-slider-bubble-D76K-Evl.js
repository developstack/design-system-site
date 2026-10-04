var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/range-slider-bubble.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-slider.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/range-slider-bubble.tsx`,export:`RangeSliderBubblePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-bubble.preview.tsx`},note:{summaryZh:`滑块（动效组件）。`,importLine:`import { BubbleSlider } from "@/components/vendor/beui/motion/range-slider-bubble";`,usage:`<BubbleSlider />`,exports:[{name:`BubbleSliderProps`,kind:`type`},{name:`BubbleSlider`,doc:`Slider with a value bubble that pops out of the thumb on grab and reacts to how fast you drag: it leans into the direction of travel and squashes along the way, then settles upright when you let go.`,kind:`component`,propsType:`BubbleSliderProps`,inline:!1,union:!1,props:[{name:`format`,type:`(value: number) => string`,optional:!0,doc:`Formats the value shown in the bubble.`},{name:`className`,type:`string`,optional:!0},{name:`value`,type:`number`,optional:!0},{name:`defaultValue`,type:`number`,optional:!0},{name:`onValueChange`,type:`(value: number) => void`,optional:!0},{name:`min`,type:`number`,optional:!0},{name:`max`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`formatValueText`,type:`(value: number) => string`,optional:!0,doc:`Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-bubble.preview.tsx`,code:`"use client";

import { useState } from "react";

import { BubbleSlider } from "@/components/vendor/beui/motion/range-slider-bubble";

export function RangeSliderBubblePreview() {
  const [value, setValue] = useState(28);

  return (
    <div className="flex w-full max-w-sm flex-col gap-1">
      <span className="text-sm text-muted-foreground">Drag fast and the bubble leans</span>
      <BubbleSlider value={value} onValueChange={setValue} aria-label="Value" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Grab the thumb and a value bubble pops out of it. 主要导出：BubbleSlider。 最小用法：<BubbleSlider />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/slider.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-range-slider-bubble.md。`,upstream:`https://beui.dev/r/range-slider-bubble.json`};export{e as default};