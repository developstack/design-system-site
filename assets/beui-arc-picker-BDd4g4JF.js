var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/arc-picker.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/arc-picker.tsx`,export:`ArcPickerPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/arc-picker.preview.tsx`},note:{summaryZh:null,importLine:`import { ArcPicker } from "@/components/vendor/beui/motion/arc-picker";`,usage:`<ArcPicker options={…} />`,exports:[{name:`ArcPickerOption`,kind:`type`},{name:`ArcPickerSide`,kind:`type`},{name:`ArcPickerProps`,kind:`type`},{name:`ArcPicker`,doc:`A radial single-choice picker with drag momentum and native button controls.`,kind:`component`,propsType:`ArcPickerProps`,inline:!1,union:!1,props:[{name:`options`,type:`readonly ArcPickerOption[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0,doc:`Called for each enabled choice crossed during scrolling, dragging and momentum.`},{name:`side`,type:`ArcPickerSide`,optional:!0,default:`"right"`,doc:`The side the arc bows toward. Top and bottom scroll horizontally.`},{name:`radius`,type:`number`,optional:!0,default:`280`,doc:`Radius in pixels. Larger radii make a gentler curve.`},{name:`itemHeight`,type:`number`,optional:!0,default:`48`,doc:`Minimum spacing along the arc. Horizontal sides also make room for label widths.`},{name:`visibleCount`,type:`number`,optional:!0,default:`7`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`name`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0,default:`"Choose an option"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:276,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/arc-picker.preview.tsx`,code:`"use client";

import { useState } from "react";
import { ArcPicker, type ArcPickerSide } from "@/components/vendor/beui/motion/arc-picker";
import { Button } from "@/components/vendor/beui/motion/button";

const SIDES = ["top", "bottom", "left", "right"] as const;

const OPTIONS = [
  { value: "first-light", label: "First light" },
  { value: "dawn", label: "Dawn" },
  { value: "daybreak", label: "Daybreak" },
  { value: "sunrise", label: "Sunrise" },
  { value: "early-morning", label: "Early morning" },
  { value: "morning", label: "Morning" },
  { value: "late-morning", label: "Late morning" },
  { value: "midday", label: "Midday" },
  { value: "noon", label: "Noon" },
  { value: "afternoon", label: "Afternoon" },
  { value: "golden-hour", label: "Golden hour" },
  { value: "sunset", label: "Sunset" },
  { value: "blue-hour", label: "Blue hour" },
  { value: "dusk", label: "Dusk" },
  { value: "twilight", label: "Twilight" },
  { value: "evening", label: "Evening" },
  { value: "nightfall", label: "Nightfall" },
  { value: "night", label: "Night" },
  { value: "late-night", label: "Late night" },
  { value: "midnight", label: "Midnight" },
  { value: "deep-night", label: "Deep night" },
  { value: "starlight", label: "Starlight" },
];

export function ArcPickerPreview() {
  const [value, setValue] = useState("golden-hour");
  const [side, setSide] = useState<ArcPickerSide>("right");

  return (
    <div className="w-full max-w-xl py-5">
      <fieldset className="flex flex-wrap items-center justify-center gap-1 px-4">
        <legend className="sr-only">Curve side</legend>
        {SIDES.map((direction) => (
          <Button
            key={direction}
            size="sm"
            variant={side === direction ? "secondary" : "ghost"}
            aria-pressed={side === direction}
            onClick={() => setSide(direction)}
            className="capitalize"
          >
            {direction}
          </Button>
        ))}
      </fieldset>
      <div className="my-8 flex min-h-108 items-center sm:my-10">
        <ArcPicker
          options={OPTIONS}
          value={value}
          onValueChange={setValue}
          aria-label="Time of day"
          side={side}
          radius={260}
          visibleCount={9}
          itemHeight={48}
        />
      </div>
      <p className="px-6 text-center text-xs text-muted-foreground">
        Drag{" "}
        {side === "top" || side === "bottom" ? "horizontally" : "vertically"},
        scroll or use the arrow keys.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Radial text picker with top, bottom, left or right curves, smooth wheel movement and live selection on each scroll step. 主要导出：ArcPicker。 最小用法：<ArcPicker options={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-arc-picker.md。`,upstream:`https://beui.dev/r/arc-picker.json`};export{e as default};