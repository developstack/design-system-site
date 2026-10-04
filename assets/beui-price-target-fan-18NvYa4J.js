var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/price-target-fan.tsx`,`components/vendor/beui/charts/price-target-fan/context.ts`,`components/vendor/beui/charts/price-target-fan/header.tsx`,`components/vendor/beui/charts/price-target-fan/plot.tsx`,`components/vendor/beui/charts/price-target-fan/series.tsx`,`components/vendor/beui/charts/price-target-fan/tooltip.tsx`,`components/vendor/beui/charts/price-target-fan/types.ts`,`components/vendor/beui/charts/price-target-fan/utils.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/price-target-fan.tsx`,export:`PriceTargetFanPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/price-target-fan.preview.tsx`},note:{summaryZh:null,importLine:`import { PriceTargetFan } from "@/components/vendor/beui/charts/price-target-fan";`,usage:`<PriceTargetFan current={…} targets={…} />`,exports:[{name:`PriceTargetFan`,doc:`Owns chart data and interaction; children may replace or rearrange the default parts.`,kind:`component`,propsType:`PriceTargetFanProps`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0,doc:`Accessible name of the chart.`},{name:`current`,type:`number`,optional:!1,doc:`Last traded price; the history walks to this point.`},{name:`targets`,type:`[PriceTarget, PriceTarget, PriceTarget]`,optional:!1,doc:`High, mean and low targets, in that order.`},{name:`dates`,type:`{ start?: string | undefined; mid?: string | undefined; horizon?: string | undefined; }`,optional:!0,doc:`Axis labels, oldest to horizon.`},{name:`history`,type:`PriceHistoryPoint[]`,optional:!0,doc:`Actual prices, oldest first, using ISO dates. Empty history renders only the current price and targets.`},{name:`children`,type:`ReactNode`,optional:!0},{name:`active`,type:`PriceTargetFanActive | null`,optional:!0},{name:`defaultActive`,type:`PriceTargetFanActive | null`,optional:!0},{name:`onActiveChange`,type:`(active: PriceTargetFanActive | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`usePriceTargetFan`,kind:`hook`,signature:`() => { reduce: boolean | null; clipId: string; fadeId: string; svgRef: RefObject<SVGSVGElement | null>; tooltipId: string; active: PriceTargetFanActive | null; ... 21 more ...; onMove: (e: PointerEv…`,params:[],requiredParams:0},{name:`PriceTargetFanHeader`,kind:`component`,propsType:`{ children?: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanAxes`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanPlot`,doc:`HTML positioning container. Place Tooltip beside SVG, never inside SVG.`,kind:`component`,propsType:`{ children?: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanSvg`,kind:`component`,propsType:`{ children?: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanCursor`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanHistory`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanNow`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanTargets`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceTargetFanTooltip`,kind:`component`,propsType:`{ children?: ((data: { px: number; py: number; title: string; metrics: { label: string; value: stri…`,inline:!0,union:!1,props:[{name:`children`,type:`((data: { px: number; py: number; title: string; metrics: { label: string; value: string; }[]; acce…`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PriceHistoryPoint`,kind:`type`},{name:`PriceTarget`,kind:`type`},{name:`PriceTargetFanActive`,kind:`type`},{name:`PriceTargetFanProps`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/price-target-fan.preview.tsx`,code:`"use client";

import {
  PriceTargetFan,
  PriceTargetFanHeader,
  PriceTargetFanPlot,
  PriceTargetFanSvg,
  PriceTargetFanAxes,
  PriceTargetFanHistory,
  PriceTargetFanTargets,
  PriceTargetFanNow,
  PriceTargetFanCursor,
  PriceTargetFanTooltip,
} from "@/components/vendor/beui/charts/price-target-fan";

// Illustrative prices. Replace these dated samples with your own API response.
const history = [
  { date: "2025-09-14", price: 158.4 },
  { date: "2025-10-14", price: 164.2 },
  { date: "2025-11-14", price: 160.8 },
  { date: "2025-12-14", price: 173.1 },
  { date: "2026-01-14", price: 170.6 },
  { date: "2026-02-14", price: 181.3 },
  { date: "2026-03-14", price: 175.8 },
  { date: "2026-04-14", price: 183.7 },
  { date: "2026-05-14", price: 178.2 },
  { date: "2026-06-14", price: 184.1 },
  { date: "2026-07-14", price: 180.5 },
  { date: "2026-08-14", price: 177.3 },
  { date: "2026-09-14", price: 178.52 },
];

export function PriceTargetFanPreview() {
  return (
    <PriceTargetFan
      current={178.52}
      history={history}
      targets={[
        { key: "High", price: 232, analysts: 9 },
        { key: "Mean", price: 205, analysts: 34 },
        { key: "Low", price: 168, analysts: 6 },
      ]}
      dates={{ horizon: "Sep 2027" }}
    >
      <PriceTargetFanHeader />
      <PriceTargetFanPlot>
        <PriceTargetFanSvg>
          <PriceTargetFanAxes />
          <PriceTargetFanHistory />
          <PriceTargetFanTargets />
          <PriceTargetFanNow />
          <PriceTargetFanCursor />
        </PriceTargetFanSvg>
        <PriceTargetFanTooltip />
      </PriceTargetFanPlot>
    </PriceTargetFan>
  );
}
`},exampleNote:null}},docsField:`Composable price target chart… 主要导出：PriceTargetFan、usePriceTargetFan、PriceTargetFanHeader、PriceTargetFanAxes 等。 最小用法：<PriceTargetFan current={…} targets={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/chart.md。属性与示例见 packages/registry/docs/vendor/beui-price-target-fan.md。`,upstream:`https://beui.dev/r/price-target-fan.json`};export{e as default};