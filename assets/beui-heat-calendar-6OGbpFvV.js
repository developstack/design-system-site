var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/heat-calendar.tsx`,`components/vendor/beui/charts/heat-calendar/context.ts`,`components/vendor/beui/charts/heat-calendar/grid.tsx`,`components/vendor/beui/charts/heat-calendar/legend.tsx`,`components/vendor/beui/charts/heat-calendar/tooltip.tsx`,`components/vendor/beui/charts/heat-calendar/types.ts`,`components/vendor/beui/charts/heat-calendar/utils.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/heat-calendar.tsx`,export:`HeatCalendarPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/heat-calendar.preview.tsx`},note:{summaryZh:`热力日历（图表组件）。`,importLine:`import { HeatCalendar } from "@/components/vendor/beui/charts/heat-calendar";`,usage:`<HeatCalendar />`,exports:[{name:`HeatCalendar`,doc:`Compose Grid, Tooltip and Legend, or omit children for the complete chart.`,kind:`component`,propsType:`HeatCalendarProps`,inline:!1,union:!1,props:[{name:`unit`,type:`string`,optional:!0,doc:`Noun after every count, e.g. "commits", "ships".`},{name:`weeks`,type:`number`,optional:!0,doc:`Number of week columns.`},{name:`maxCount`,type:`number`,optional:!0,doc:"Count a cell at intensity 1 stands for; a cell reads `intensity × maxCount`."},{name:`values`,type:`number[][]`,optional:!0,doc:"`values[week][day]` intensities in 0..1, seven days per week. Missing values are zero."},{name:`endDate`,type:`Date`,optional:!0,doc:`Last UTC calendar day of the grid. Defaults to today after mount; explicit dates render identically in every timezone.`},{name:`color`,type:`string`,optional:!0,doc:`The single hue. Any CSS color; magnitude maps to its strength, never to a second color.`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`selection`,type:`HeatCalendarSelection | null`,optional:!0,doc:`Controlled selection; null clears it. Cell coordinates are zero-based week/day (Monday first).`},{name:`defaultSelection`,type:`HeatCalendarSelection | null`,optional:!0},{name:`onSelectionChange`,type:`(selection: HeatCalendarSelection | null) => void`,optional:!0}],inherited:[]},{name:`useHeatCalendar`,doc:`Read the shared data and selection from any descendant of HeatCalendar.`,kind:`hook`,signature:`() => { unit: string; weeks: number; reduce: boolean | null; canHover: boolean; hover: HeatCalendarCell | null; pinned: HeatCalendarCell | null; ... 28 more ...; setSelection: (next: HeatCalendarSele…`,params:[],requiredParams:0},{name:`HeatCalendarGrid`,kind:`component`,propsType:`{ children?: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`HeatCalendarLegend`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`HeatCalendarTooltip`,kind:`component`,propsType:`{ children?: ((data: { date: Date; count: number; total: number; startDate: Date; endDate: Date; da…`,inline:!0,union:!1,props:[{name:`children`,type:`((data: { date: Date; count: number; total: number; startDate: Date; endDate: Date; days: number; }…`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`HeatCalendarCell`,kind:`type`},{name:`HeatCalendarProps`,kind:`type`},{name:`HeatCalendarSelection`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/heat-calendar.preview.tsx`,code:`"use client";

import {
  HeatCalendar,
  HeatCalendarGrid,
  HeatCalendarLegend,
  HeatCalendarTooltip,
} from "@/components/vendor/beui/charts/heat-calendar";

/** Deterministic demo field so every render agrees; weekends run quieter. */
function demoLevel(week: number, day: number) {
  const s = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  const r = s - Math.floor(s);
  return day >= 5 ? Math.max(0, r - 0.55) * 1.4 : r;
}

const values = Array.from({ length: 16 }, (_, w) => Array.from({ length: 7 }, (_, d) => demoLevel(w, d)));

export function HeatCalendarPreview() {
  return (
    <HeatCalendar unit="commits" weeks={16} maxCount={14} values={values}>
      <HeatCalendarGrid>
        <HeatCalendarTooltip />
      </HeatCalendarGrid>
      <HeatCalendarLegend />
    </HeatCalendar>
  );
}
`},exampleNote:null}},docsField:`Composable activity calendar with Grid, Legend, and Toolti… 主要导出：HeatCalendar、useHeatCalendar、HeatCalendarGrid、HeatCalendarLegend 等。 最小用法：<HeatCalendar />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/calendar.md。属性与示例见 packages/registry/docs/vendor/beui-heat-calendar.md。`,upstream:`https://beui.dev/r/heat-calendar.json`};export{e as default};