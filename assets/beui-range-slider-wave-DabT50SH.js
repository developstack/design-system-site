var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/range-slider-wave.tsx`,`components/vendor/beui/lib/hooks/use-slider.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/range-slider-wave.tsx`,export:`RangeSliderWavePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-wave.preview.tsx`},note:{summaryZh:`滑块（动效组件）。`,importLine:`import { WaveSlider } from "@/components/vendor/beui/motion/range-slider-wave";`,usage:`<WaveSlider />`,exports:[{name:`WaveSliderProps`,kind:`type`},{name:`WaveSlider`,doc:`Equalizer slider: bars rise into a crest around the handle position and fall back as it passes, so the value reads as a travelling wave. Bars up to the value are filled, the rest stay muted.`,kind:`component`,propsType:`WaveSliderProps`,inline:!1,union:!1,props:[{name:`bars`,type:`number`,optional:!0,default:`BARS`,doc:`Number of bars drawn across the track.`},{name:`className`,type:`string`,optional:!0},{name:`value`,type:`number`,optional:!0},{name:`defaultValue`,type:`number`,optional:!0},{name:`onValueChange`,type:`(value: number) => void`,optional:!0},{name:`min`,type:`number`,optional:!0},{name:`max`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`aria-label`,type:`string`,optional:!0},{name:`formatValueText`,type:`(value: number) => string`,optional:!0,doc:`Announced instead of the raw number — pass one when the value carries a unit or a suffix ("72.5 kg", "35%"); a bare number needs no valueText.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/range-slider-wave.preview.tsx`,code:`"use client";

import { useState } from "react";

import { WaveSlider } from "@/components/vendor/beui/motion/range-slider-wave";

export function RangeSliderWavePreview() {
  const [value, setValue] = useState(45);

  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Gain</span>
        <span className="tabular-nums text-foreground">{value}</span>
      </div>
      <WaveSlider value={value} onValueChange={setValue} aria-label="Gain" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Equalizer bars peak around the handle and drop back once it passes, so the value moves down the track as a wave. 主要导出：WaveSlider。 最小用法：<WaveSlider />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/slider.md。属性与示例见 packages/registry/docs/vendor/beui-range-slider-wave.md。`,upstream:`https://beui.dev/r/range-slider-wave.json`};export{e as default};