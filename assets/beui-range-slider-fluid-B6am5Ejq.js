var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/range-slider-fluid.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-slider.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/range-slider-fluid.tsx`,export:`RangeSliderFluidPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-fluid.preview.tsx`},note:{summaryZh:`滑块（动效组件）。`,importLine:`import { FluidSlider } from "@/components/vendor/beui/motion/range-slider-fluid";`,usage:`<FluidSlider />`,exports:[{name:`FluidSliderProps`,kind:`type`},{name:`FluidSlider`,doc:`Thumbless slider: the whole pill is the control. The fill glides to the new value behind a rounded liquid cap, and the label reads inverted wherever the fill has covered it.`,kind:`component`,propsType:`FluidSliderProps`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0,doc:`Text shown on the left of the track.`},{name:`format`,type:`(value: number) => string`,optional:!0,default:"(v) => `${v}%`",doc:`Formats the value shown on the right.`},{name:`className`,type:`string`,optional:!0},{name:`value`,type:`number`,optional:!0},{name:`defaultValue`,type:`number`,optional:!0},{name:`onValueChange`,type:`(value: number) => void`,optional:!0},{name:`min`,type:`number`,optional:!0},{name:`max`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`formatValueText`,type:`(value: number) => string`,optional:!0,doc:`Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-fluid.preview.tsx`,code:`"use client";

import { useState } from "react";

import { FluidSlider } from "@/components/vendor/beui/motion/range-slider-fluid";

export function RangeSliderFluidPreview() {
  const [value, setValue] = useState(35);

  return (
    <div className="w-full max-w-sm">
      <FluidSlider
        value={value}
        onValueChange={setValue}
        label="Brightness"
        aria-label="Brightness"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`No thumb. The fill slides behind a rounded liquid cap, and the label flips color wherever the fill covers it. 主要导出：FluidSlider。 最小用法：<FluidSlider />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-range-slider-fluid.md。`,upstream:`https://beui.dev/r/range-slider-fluid.json`};export{e as default};