var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/funnel-chart.tsx`,`components/vendor/beui/charts/funnel-chart/model.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/funnel-chart.tsx`,export:`FunnelChartPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/funnel-chart.preview.tsx`},note:{summaryZh:`图表（图表组件）。`,importLine:`import { FunnelChart } from "@/components/vendor/beui/charts/funnel-chart";`,usage:`<FunnelChart stages={…} />`,exports:[{name:`FunnelChartProps`,kind:`type`},{name:`useFunnelChart`,kind:`hook`,signature:`() => { rows: { id: string; label: string; value: number; color?: string | undefined; proportion: number; conversion: number | null; stepConversion: number | null; change: number | null; }[]; first: …`,params:[],requiredParams:0},{name:`FunnelChart`,kind:`component`,propsType:`FunnelChartProps`,inline:!1,union:!1,props:[{name:`stages`,type:`readonly FunnelStage[]`,optional:!1,doc:`Ordered stages with finite, nonnegative counts; duplicate IDs are omitted.`},{name:`direction`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`},{name:`unit`,type:`string`,optional:!0,default:`"people"`},{name:`label`,type:`string`,optional:!0,default:`"Conversion funnel"`},{name:`formatValue`,type:`(value: number) => string`,optional:!0,default:`defaultFormat`},{name:`className`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[]},{name:`FunnelChartPlot`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`FunnelChartSummary`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`FunnelStage`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/funnel-chart.preview.tsx`,code:`"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { FunnelChart } from "@/components/vendor/beui/charts/funnel-chart";
import { Button } from "@/components/vendor/beui/motion/button";

const labels = ["Visitors", "Signed up", "Activated", "Started trial", "Subscribed"];
const cohorts = [
  [24000, 15600, 10800, 7200, 4320],
  [28000, 18200, 13650, 9100, 6370],
  [22000, 13200, 7920, 4752, 2376],
];
export function FunnelChartPreview() {
  const [direction, setDirection] = useState<"vertical" | "horizontal">("vertical");
  const [cohort, setCohort] = useState(0);
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium">From first visit to first payment</h3>
          <p className="mt-1 text-xs text-muted-foreground">Product conversion · Sample cohorts</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => setCohort((value) => (value + 1) % cohorts.length)}
        >
          <RefreshCw className="size-3.5" aria-hidden="true" />
          Next cohort
        </Button>
      </div>
      <fieldset
        aria-label="Funnel direction"
        className="inline-flex gap-1 rounded-full bg-muted/50 p-1"
      >
        {(["vertical", "horizontal"] as const).map((value) => (
          <Button
            key={value}
            variant="ghost"
            size="sm"
            aria-pressed={direction === value}
            onClick={() => setDirection(value)}
            className={direction === value ? "bg-background shadow-sm" : "text-muted-foreground"}
          >
            {value === "vertical" ? "Vertical" : "Horizontal"}
          </Button>
        ))}
      </fieldset>
      <FunnelChart
        direction={direction}
        stages={labels.map((label, index) => ({ id: label, label, value: cohorts[cohort][index] }))}
      />
      <p className="text-center text-[11px] text-muted-foreground">
        Inspect a stage to see conversion and drop-off
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Vertical and horizontal funnels with curved stages and animated number tooltips. 主要导出：FunnelChart、useFunnelChart、FunnelChartPlot、FunnelChartSummary。 最小用法：<FunnelChart stages={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-funnel-chart.md。`,upstream:`https://beui.dev/r/funnel-chart.json`};export{e as default};