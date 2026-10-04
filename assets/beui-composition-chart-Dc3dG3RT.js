var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/composition-chart.tsx`,`components/vendor/beui/charts/composition-chart/context.tsx`,`components/vendor/beui/charts/composition-chart/legend.tsx`,`components/vendor/beui/charts/composition-chart/model.ts`,`components/vendor/beui/charts/composition-chart/plot.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/charts/composition-chart/tooltip-content.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/composition-chart.tsx`,export:`CompositionChartPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/composition-chart.preview.tsx`},note:{summaryZh:`图表（图表组件）。`,importLine:`import { CompositionChart } from "@/components/vendor/beui/charts/composition-chart";`,usage:`<CompositionChart series={…} periods={…} />`,exports:[{name:`CompositionChart`,doc:`Normalized stacked shares. Zero-total or incomplete periods are shown as gaps.`,kind:`component`,propsType:`CompositionChartProps`,inline:!1,union:!1,props:[{name:`series`,type:`readonly CompositionSeries[]`,optional:!1},{name:`periods`,type:`readonly string[]`,optional:!1,doc:`Unique labels in chronological order.`},{name:`view`,type:`"area" | "bar"`,optional:!0},{name:`period`,type:`string`,optional:!0},{name:`defaultPeriod`,type:`string`,optional:!0},{name:`onPeriodChange`,type:`(period: string) => void`,optional:!0},{name:`formatValue`,type:`(value: number) => string`,optional:!0},{name:`label`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[]},{name:`CompositionChartPlot`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`CompositionChartLegend`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`useCompositionChart`,kind:`hook`,signature:`() => { rows: CompositionSeries[]; columns: { id: string; valid: boolean; segments: { id: string; name: string; color: string; values: readonly (number | null)[]; value: number | null; share: number;…`,params:[],requiredParams:0},{name:`CompositionChartProps`,kind:`type`},{name:`CompositionChartSeries`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/composition-chart.preview.tsx`,code:`"use client";

import { CompositionChart } from "@/components/vendor/beui/charts/composition-chart";

const periods = Array.from({ length: 36 }, (_, index) =>
  new Date(Date.UTC(2026, 7, index + 1)).toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  }),
);
// Illustrative acquisition data. The library itself never generates observations.
const series = [
  { id: "organic", name: "Organic search", color: "#2563eb", base: 46, trend: -0.45 },
  { id: "direct", name: "Direct", color: "#38bdf8", base: 24, trend: 0.12 },
  { id: "referral", name: "Referrals", color: "#0d9488", base: 10, trend: 0.32 },
  { id: "social", name: "Social", color: "#fbbf24", base: 12, trend: 0.06 },
  { id: "email", name: "Email", color: "#a78bfa", base: 5, trend: 0.09 },
  { id: "other", name: "Other", color: "#a1a1aa", base: 3, trend: 0.02 },
].map(({ base, trend, ...row }, i) => ({
  ...row,
  values: periods.map((_, day) =>
    Math.round((base + day * trend + Math.sin(day * 1.7 + i * 2) * Math.min(base / 3, 5)) * 120),
  ),
}));

function CompositionPreview({ view }: { view: "bar" | "area" }) {
  return (
    <CompositionChart
      view={view}
      series={series}
      periods={periods}
      label="Illustrative acquisition channel shares"
      formatValue={(value) => \`\${value.toLocaleString("en")} visits\`}
    />
  );
}

export function CompositionChartPreview() {
  return (
    <div className="w-full space-y-10">
      <CompositionPreview view="bar" />
      <div className="border-t border-border pt-10">
        <CompositionPreview view="area" />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Stacked bar… 主要导出：CompositionChart、CompositionChartPlot、CompositionChartLegend、useCompositionChart。 最小用法：<CompositionChart series={…} periods={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/chart.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-composition-chart.md。`,upstream:`https://beui.dev/r/composition-chart.json`};export{e as default};