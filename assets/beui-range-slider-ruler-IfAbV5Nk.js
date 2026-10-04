var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/range-slider-ruler.tsx`,`components/vendor/beui/lib/hooks/use-slider.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/range-slider-ruler.tsx`,export:`RangeSliderRulerPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-ruler.preview.tsx`},note:{summaryZh:`滑块（动效组件）。`,importLine:`import { RulerSlider } from "@/components/vendor/beui/motion/range-slider-ruler";`,usage:`<RulerSlider />`,exports:[{name:`RulerSliderProps`,kind:`type`},{name:`RulerSlider`,doc:`Ruler slider: the scale scrolls under a fixed needle instead of a handle moving along a track. Flicks carry momentum and settle onto the nearest tick.`,kind:`component`,propsType:`RulerSliderProps`,inline:!1,union:!1,props:[{name:`gap`,type:`number`,optional:!0,default:`14`,doc:`Pixels between two steps.`},{name:`majorEvery`,type:`number`,optional:!0,default:`5`,doc:`Label every Nth step; those ticks are drawn tall.`},{name:`unit`,type:`string`,optional:!0,doc:`Unit shown next to the value.`},{name:`className`,type:`string`,optional:!0},{name:`value`,type:`number`,optional:!0},{name:`defaultValue`,type:`number`,optional:!0},{name:`onValueChange`,type:`(value: number) => void`,optional:!0},{name:`min`,type:`number`,optional:!0},{name:`max`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`formatValueText`,type:`(value: number) => string`,optional:!0,doc:`Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-ruler.preview.tsx`,code:`"use client";

import { useState } from "react";

import { RulerSlider } from "@/components/vendor/beui/motion/range-slider-ruler";

export function RangeSliderRulerPreview() {
  const [value, setValue] = useState(72.5);

  return (
    <div className="w-full max-w-sm">
      <RulerSlider
        value={value}
        onValueChange={setValue}
        min={40}
        max={120}
        step={0.5}
        gap={12}
        majorEvery={10}
        unit="kg"
        aria-label="Weight"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`The needle stays put and the scale scrolls under it. 主要导出：RulerSlider。 最小用法：<RulerSlider />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/slider.md。属性与示例见 packages/registry/docs/vendor/beui-range-slider-ruler.md。`,upstream:`https://beui.dev/r/range-slider-ruler.json`};export{e as default};