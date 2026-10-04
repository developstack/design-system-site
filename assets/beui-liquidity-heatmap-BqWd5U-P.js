var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/liquidity-heatmap.tsx`,`components/vendor/beui/charts/liquidity-heatmap/model.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/liquidity-heatmap.tsx`,export:`LiquidityHeatmapPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/liquidity-heatmap.preview.tsx`},note:{summaryZh:`热力图（图表组件）。`,importLine:`import { LiquidityHeatmap } from "@/components/vendor/beui/charts/liquidity-heatmap";`,usage:`<LiquidityHeatmap snapshots={…} />`,exports:[{name:`useLiquidityHeatmap`,kind:`hook`,signature:`() => { columns: { id: string; label: string; price?: number | undefined; levels: Map<number, number>; }[]; prices: number[]; maximum: number; } & { ceiling: number; unit: string; formatPrice: (value…`,params:[],requiredParams:0},{name:`LiquidityHeatmap`,kind:`component`,propsType:`LiquidityHeatmapProps`,inline:!1,union:!1,props:[{name:`snapshots`,type:`readonly LiquiditySnapshot[]`,optional:!1,doc:`Time-ordered snapshots; use consistent price buckets and stable IDs.`},{name:`maxSize`,type:`number`,optional:!0,doc:`Fixed intensity ceiling keeps colors comparable across live updates.`},{name:`unit`,type:`string`,optional:!0,default:`"units"`},{name:`label`,type:`string`,optional:!0,default:`"Liquidity heatmap"`},{name:`formatPrice`,type:`(price: number) => string`,optional:!0,default:`formatPrice`},{name:`formatSize`,type:`(size: number) => string`,optional:!0,default:`formatSize`},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`LiquidityHeatmapPlot`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`LiquidityHeatmapLegend`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`LiquiditySnapshot`,kind:`type`},{name:`LiquidityHeatmapProps`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/liquidity-heatmap.preview.tsx`,code:`"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { Button } from "@/components/vendor/beui/motion/button";
import { LiquidityHeatmap, type LiquiditySnapshot } from "@/components/vendor/beui/charts/liquidity-heatmap";

// Deterministic illustrative order-book history; no market feed is implied.
function snapshots(phase: number): LiquiditySnapshot[] {
  return Array.from({ length: 24 }, (_, time) => ({
    id: \`minute-\${time}\`,
    label: \`14:\${String(time * 2).padStart(2, "0")}\`,
    price: 245.5 + Math.sin(time * 0.27 + phase * 0.4) * 1.2 + time * 0.035,
    levels: Array.from({ length: 18 }, (_, row) => {
      const price = 250 - row * 0.5;
      const shelf =
        Math.exp(-((row - 4 - Math.sin(time * 0.18 + phase) * 0.7) ** 2) / 0.8) +
        Math.exp(-((row - 13 + Math.cos(time * 0.15 + phase) * 0.8) ** 2) / 1.2);
      const noise = (Math.sin(row * 12.9 + time * 7.3 + phase * 2.1) + 1) / 2;
      return {
        price,
        size: Math.round(90 + noise * 350 + shelf * (1500 + Math.sin(time * 0.3 + phase) * 450)),
      };
    }),
  }));
}
export function LiquidityHeatmapPreview() {
  const [phase, setPhase] = useState(0);
  return (
    <div className="w-full space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-medium">Where liquidity rests</h3>
          <p className="mt-1 text-xs text-muted-foreground">SOL / USD · Simulated depth</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2"
          onClick={() => setPhase((value) => value + 1)}
        >
          <RefreshCw aria-hidden="true" className="size-3.5" />
          Resimulate
        </Button>
      </div>
      <LiquidityHeatmap
        snapshots={snapshots(phase)}
        maxSize={2400}
        unit="SOL"
        formatPrice={(price) => \`$\${price.toFixed(2)}\`}
      />
      <p className="text-center text-[11px] text-muted-foreground">
        Brighter bands hold more liquidity · White line tracks price
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Animated liquidity bands across price and time, with a price trace… 主要导出：LiquidityHeatmap、useLiquidityHeatmap、LiquidityHeatmapPlot、LiquidityHeatmapLegend。 最小用法：<LiquidityHeatmap snapshots={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-liquidity-heatmap.md。`,upstream:`https://beui.dev/r/liquidity-heatmap.json`};export{e as default};