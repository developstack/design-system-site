var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/wheel-picker.tsx`,`components/vendor/beui/lib/tick-sound.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/wheel-picker.tsx`,export:`WheelPickerPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/wheel-picker.preview.tsx`},note:{summaryZh:`滚轮选择器（动效组件）。`,importLine:`import { WheelPicker } from "@/components/vendor/beui/motion/wheel-picker";`,usage:`<WheelPicker options={…} />`,exports:[{name:`WheelPickerOption`,kind:`type`},{name:`WheelPickerProps`,kind:`type`},{name:`WheelPicker`,kind:`component`,propsType:`WheelPickerProps`,inline:!1,union:!1,props:[{name:`options`,type:`WheelPickerOption[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`visibleCount`,type:`number`,optional:!0,default:`5`,doc:`Rows visible through the window, odd. More = flatter curve. Default 5.`},{name:`itemHeight`,type:`number`,optional:!0,default:`36`,doc:`Row height in px. Default 36.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`sound`,type:`boolean`,optional:!0,default:`false`,doc:`Play a short tick each time the selected value changes. Default false.`},{name:`className`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/wheel-picker.preview.tsx`,code:`"use client";

import { useEffect, useState } from "react";
import { Switch } from "@/components/vendor/beui/motion/switch";
import { WheelPicker } from "@/components/vendor/beui/motion/wheel-picker";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const YEARS = Array.from({ length: 60 }, (_, i) => String(1980 + i));

function daysIn(month: number, year: number) {
  return new Date(year, month + 1, 0).getDate();
}

export function WheelPickerPreview() {
  const [month, setMonth] = useState("June");
  const [year, setYear] = useState("2004");
  const [day, setDay] = useState("9");
  const [sound, setSound] = useState(false);

  const monthIndex = MONTHS.indexOf(month);
  const dayCount = daysIn(monthIndex, Number(year));
  const days = Array.from({ length: dayCount }, (_, i) => String(i + 1));

  // A short month or a non-leap February can strand the day past the end —
  // pull it back to the last valid day.
  useEffect(() => {
    if (Number(day) > dayCount) setDay(String(dayCount));
  }, [day, dayCount]);

  return (
    <div className="flex flex-col items-center gap-4">
      <span className="text-sm text-muted-foreground">
        Born{" "}
        <span className="font-medium text-foreground tabular-nums">
          {month} {day}, {year}
        </span>
      </span>
      <div className="flex items-stretch gap-1 rounded-3xl border border-border bg-background p-2">
        <WheelPicker
          options={MONTHS}
          value={month}
          onValueChange={setMonth}
          className="w-32 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Month"
        />
        <WheelPicker
          options={days}
          value={day}
          onValueChange={setDay}
          className="w-14 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Day"
        />
        <WheelPicker
          options={YEARS}
          value={year}
          onValueChange={setYear}
          className="w-20 border-0 bg-transparent"
          visibleCount={7}
          itemHeight={42}
          sound={sound}
          aria-label="Year"
        />
      </div>
      <Switch
        checked={sound}
        onCheckedChange={setSound}
        label="Tick sound"
        className="origin-left scale-[0.85] [&_label]:text-sm"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`iOS-style picker wheel: a 3D drum on native momentum scroll that snaps to the nearest notch, with wheel, drag and keyboard control. 主要导出：WheelPicker。 最小用法：<WheelPicker options={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-wheel-picker.md。`,upstream:`https://beui.dev/r/wheel-picker.json`};export{e as default};