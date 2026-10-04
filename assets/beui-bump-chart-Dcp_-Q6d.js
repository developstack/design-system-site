var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/bump-chart.tsx`,`components/vendor/beui/charts/bump-chart/context.tsx`,`components/vendor/beui/charts/bump-chart/legend.tsx`,`components/vendor/beui/charts/bump-chart/model.ts`,`components/vendor/beui/charts/bump-chart/plot.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/charts/bump-chart/point.tsx`,`components/vendor/beui/charts/bump-chart/series.tsx`,`components/vendor/beui/charts/bump-chart/use-geometry.ts`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/bump-chart.tsx`,export:`BumpChartPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/bump-chart.preview.tsx`},note:{summaryZh:`图表（图表组件）。`,importLine:`import { BumpChart } from "@/components/vendor/beui/charts/bump-chart";`,usage:`<BumpChart series={…} periods={…} />`,exports:[{name:`BumpChart`,doc:`Compose the plot and legend, or supply children for your own arrangement.`,kind:`component`,propsType:`BumpChartProps`,inline:!1,union:!1,props:[{name:`series`,type:`readonly BumpSeries[]`,optional:!1},{name:`periods`,type:`readonly string[]`,optional:!1,doc:`Unique period labels, in chronological order.`},{name:`active`,type:`string | null`,optional:!0,doc:`Pinned series ID. Null clears the selection.`},{name:`defaultActive`,type:`string | null`,optional:!0},{name:`onActiveChange`,type:`(id: string | null) => void`,optional:!0},{name:`label`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`BumpChartLegend`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`BumpChartPlot`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`useBumpChart`,kind:`hook`,signature:`() => { rows: { id: string; name: string; color: string; ranks: (number | null)[]; }[]; ranks: number[]; maxRank: number; height: number; x: (index: number) => number; y: (rank: number) => number; pe…`,params:[],requiredParams:0},{name:`BumpChartProps`,kind:`type`},{name:`BumpChartSeries`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/bump-chart.preview.tsx`,code:`"use client";

import { useState } from "react";
import { Shuffle } from "lucide-react";
import { Button } from "@/components/vendor/beui/motion/button";
import { BumpChart, BumpChartLegend, BumpChartPlot } from "@/components/vendor/beui/charts/bump-chart";

const periods = ["Apr", "May", "Jun", "Jul", "Aug", "Sep"];
// Illustrative product rankings; replace these with your own period-by-period ranks.
const initialSeries = [
  { id: "studio", name: "Studio", ranks: [4, 3, 2, 3, 2, 1], color: "#8b5cf6" },
  { id: "canvas", name: "Canvas", ranks: [1, 1, 3, 2, 1, 2], color: "#0d9488" },
  { id: "layers", name: "Layers", ranks: [3, 2, 1, 1, 3, 3], color: "#f59e0b" },
  { id: "orbit", name: "Orbit", ranks: [2, 4, 5, 4, 5, 4], color: "#3b82f6" },
  { id: "frame", name: "Frame", ranks: [5, 5, 4, 5, 4, 5], color: "#f43f5e" },
];

export function BumpChartPreview() {
  const [series, setSeries] = useState(initialSeries);
  const shuffle = () => {
    // Each period is a permutation: exactly one product at each rank.
    const columns = periods.map(() => {
      const ranks = initialSeries.map((_, index) => index + 1);
      for (let i = ranks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [ranks[i], ranks[j]] = [ranks[j], ranks[i]];
      }
      return ranks;
    });
    setSeries((previous) =>
      previous.map((row, index) => ({ ...row, ranks: columns.map((ranks) => ranks[index]) })),
    );
  };
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 px-2">
        <div>
          <h3 className="text-sm font-medium text-foreground">The leaderboard</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Five products. Six months. Every move.
          </p>
        </div>
        <Button variant="ghost" size="sm" onClick={shuffle} className="shrink-0 gap-2">
          <Shuffle className="size-3.5" aria-hidden="true" />
          Shuffle rankings
        </Button>
      </div>
      <BumpChart
        series={series}
        periods={periods}
        label="Illustrative product rankings, April to September"
      >
        <BumpChartPlot />
        <BumpChartLegend />
      </BumpChart>
      <p className="text-center text-[11px] text-muted-foreground">
        Inspect a dot for details · Select to pin a product
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Animated rankings with curved paths, interactive rank dots, and tooltips. 主要导出：BumpChart、BumpChartLegend、BumpChartPlot、useBumpChart。 最小用法：<BumpChart series={…} periods={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-bump-chart.md。`,upstream:`https://beui.dev/r/bump-chart.json`};export{e as default};