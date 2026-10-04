var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/returns-calendar.tsx`,`components/vendor/beui/charts/returns-calendar/context.ts`,`components/vendor/beui/charts/returns-calendar/grid.tsx`,`components/vendor/beui/charts/returns-calendar/tooltip.tsx`,`components/vendor/beui/charts/returns-calendar/types.ts`,`components/vendor/beui/charts/returns-calendar/utils.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/returns-calendar.tsx`,export:`ReturnsCalendarPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/returns-calendar.preview.tsx`},note:{summaryZh:`日历（图表组件）。`,importLine:`import { ReturnsCalendar } from "@/components/vendor/beui/charts/returns-calendar";`,usage:`<ReturnsCalendar />`,exports:[{name:`ReturnsCalendar`,doc:`Compose Grid and Tooltip, or omit children for the complete chart.`,kind:`component`,propsType:`ReturnsCalendarProps`,inline:!1,union:!1,props:[{name:`years`,type:`number[]`,optional:!0,doc:"Row labels, one per row of `returns`."},{name:`returns`,type:`number[][]`,optional:!0,doc:"`returns[year][month]` in percent, twelve months per row."},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`selection`,type:`ReturnsCalendarSelection | null`,optional:!0},{name:`defaultSelection`,type:`ReturnsCalendarSelection | null`,optional:!0},{name:`onSelectionChange`,type:`(selection: ReturnsCalendarSelection | null) => void`,optional:!0}],inherited:[]},{name:`useReturnsCalendar`,kind:`hook`,signature:`() => { years: number[]; reduce: boolean | null; canHover: boolean; hover: ReturnsCalendarCell | null; pinned: ReturnsCalendarCell | null; ... 21 more ...; setSelection: (next: ReturnsCalendarSelecti…`,params:[],requiredParams:0},{name:`ReturnsCalendarGrid`,kind:`component`,propsType:`{ children?: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ReturnsCalendarTooltip`,kind:`component`,propsType:`{ children?: ((data: ReturnsCalendarTooltipData) => ReactNode) | ReactNode; className?: string | un…`,inline:!0,union:!1,props:[{name:`children`,type:`((data: ReturnsCalendarTooltipData) => ReactNode) | ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ReturnsCalendarProps`,kind:`type`},{name:`ReturnsCalendarSelection`,kind:`type`},{name:`ReturnsCalendarTooltipData`,kind:`type`},{name:`ReturnsCalendarCell`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/returns-calendar.preview.tsx`,code:`"use client";

import {
  ReturnsCalendar,
  ReturnsCalendarGrid,
  ReturnsCalendarTooltip,
} from "@/components/vendor/beui/charts/returns-calendar";

const MONTHS = Array.from({ length: 12 });
const DEFAULT_YEARS = [2021, 2022, 2023, 2024, 2025];

/** Deterministic sample field so every render agrees; 2022 reads as a down year. */
const DEFAULT_RETURNS: number[][] = (() => {
  let seed = 2021;
  const rnd = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return seed / 0x7fffffff;
  };
  return DEFAULT_YEARS.map((_, yi) =>
    MONTHS.map(() => Math.round(((yi === 1 ? -1.6 : 0.9) + (rnd() - 0.5) * 12) * 10) / 10),
  );
})();

export function ReturnsCalendarPreview() {
  return (
    <ReturnsCalendar years={DEFAULT_YEARS} returns={DEFAULT_RETURNS}>
      <ReturnsCalendarGrid>
        <ReturnsCalendarTooltip />
      </ReturnsCalendarGrid>
    </ReturnsCalendar>
  );
}
`},exampleNote:null}},docsField:`Composable monthly returns calendar with Gri… 主要导出：ReturnsCalendar、useReturnsCalendar、ReturnsCalendarGrid、ReturnsCalendarTooltip。 最小用法：<ReturnsCalendar />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/calendar.md。属性与示例见 packages/registry/docs/vendor/beui-returns-calendar.md。`,upstream:`https://beui.dev/r/returns-calendar.json`};export{e as default};