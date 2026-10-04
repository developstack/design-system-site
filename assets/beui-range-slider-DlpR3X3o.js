var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/range-slider.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-slider.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/range-slider.tsx`,export:`RangeSliderPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider.preview.tsx`},note:{summaryZh:`滑块（动效组件）。`,importLine:`import { RangeSlider } from "@/components/vendor/beui/motion/range-slider";`,usage:`<RangeSlider />`,exports:[{name:`RangeSliderProps`,kind:`type`},{name:`RangeSlider`,kind:`component`,propsType:`RangeSliderProps`,inline:!1,union:!1,props:[{name:`showTicks`,type:`boolean`,optional:!0,default:`true`,doc:`Render a tick dot at each step.`},{name:`className`,type:`string`,optional:!0},{name:`value`,type:`number`,optional:!0},{name:`defaultValue`,type:`number`,optional:!0},{name:`onValueChange`,type:`(value: number) => void`,optional:!0},{name:`min`,type:`number`,optional:!0},{name:`max`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`formatValueText`,type:`(value: number) => string`,optional:!0,doc:`Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider.preview.tsx`,code:`"use client";

import { useState } from "react";

import { RangeSlider } from "@/components/vendor/beui/motion/range-slider";

export function RangeSliderPreview() {
  const [value, setValue] = useState(40);

  return (
    <div className="flex w-full max-w-sm flex-col gap-3">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Drag the handle</span>
        <span className="tabular-nums text-foreground">{value}</span>
      </div>
      <RangeSlider value={value} onValueChange={setValue} step={5} aria-label="Value" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Tick dots, and a vertical-bar thumb that bounces as it lands on each step. 主要导出：RangeSlider。 最小用法：<RangeSlider />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/slider.md。属性与示例见 packages/registry/docs/vendor/beui-range-slider.md。`,upstream:`https://beui.dev/r/range-slider.json`};export{e as default};