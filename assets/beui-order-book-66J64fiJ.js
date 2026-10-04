var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/charts/order-book.tsx`,`components/vendor/beui/charts/order-book/depth-row.tsx`,`components/vendor/beui/charts/order-book/model.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/order-book.tsx`,export:`OrderBookPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/order-book.preview.tsx`},note:{summaryZh:`订单簿（图表组件）。`,importLine:`import { OrderBook } from "@/components/vendor/beui/charts/order-book";`,usage:`<OrderBook bids={…} asks={…} />`,exports:[{name:`OrderBookLevel`,kind:`type`},{name:`OrderBookProps`,kind:`type`},{name:`useOrderBook`,kind:`hook`,signature:`() => { bids: DepthLevel[]; asks: DepthLevel[]; bidTotal: number; askTotal: number; maxTotal: number; midpoint: number | null; spread: number | null; price: number | null; ... 4 more ...; reduce: boo…`,params:[],requiredParams:0},{name:`OrderBook`,doc:`A snapshot-driven depth ladder. No timers or invented market data live in the chart.`,kind:`component`,propsType:`OrderBookProps`,inline:!1,union:!1,props:[{name:`bids`,type:`readonly OrderBookLevel[]`,optional:!1,doc:`Snapshot of buy levels. Equal prices are combined; invalid and zero sizes are omitted.`},{name:`asks`,type:`readonly OrderBookLevel[]`,optional:!1,doc:`Snapshot of sell levels. Supply new arrays when the book changes.`},{name:`levels`,type:`number`,optional:!0,doc:`Number of nearest levels to show on each side.`},{name:`lastPrice`,type:`number`,optional:!0,doc:`Last traded price. Omit to show the midpoint of the best bid and ask.`},{name:`label`,type:`string`,optional:!0,default:`"Order book"`},{name:`baseSymbol`,type:`string`,optional:!0},{name:`quoteSymbol`,type:`string`,optional:!0},{name:`formatPrice`,type:`(value: number) => string`,optional:!0},{name:`formatSize`,type:`(value: number) => string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`OrderBookHeader`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`OrderBookSide`,kind:`component`,propsType:`{ side: "ask" | "bid"; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`side`,type:`"ask" | "bid"`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`OrderBookSpread`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`OrderBookBalance`,doc:`Balance of the displayed depth, not the entire exchange order book.`,kind:`component`,propsType:`{ className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/charts/order-book.preview.tsx`,code:`"use client";

import { useEffect, useState } from "react";
import {
  OrderBook,
  OrderBookBalance,
  OrderBookHeader,
  OrderBookSide,
  OrderBookSpread,
} from "@/components/vendor/beui/charts/order-book";
import { Button } from "@/components/vendor/beui/motion/button";

// Illustrative snapshots only. Replace with your exchange's aggregated price levels.
const askSizes = [284, 574, 363, 278, 1800, 2200, 1100, 1200, 782];
const bidSizes = [194, 543, 314, 592, 715, 744, 789, 735, 1100];
function snapshot(tick: number) {
  const side = (sizes: number[], direction: number) =>
    sizes.map((size, index) => {
      // Update one third of the levels per beat; unchanged quotes keep their identity.
      const phase = (index + (direction === 1 ? 1 : 0)) % 3;
      const lastUpdate = tick - ((tick + phase) % 3);
      return {
        price: Number((245.85 + direction * (index + 1) * 0.15).toFixed(2)),
        size:
          lastUpdate <= 0
            ? size
            : Math.round(size * (1 + Math.sin(lastUpdate * 1.3 + index * 2.1 + direction) * 0.32)),
      };
    });
  return { asks: side(askSizes, 1), bids: side(bidSizes, -1) };
}

export function OrderBookPreview() {
  const [playing, setPlaying] = useState(true);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setTick((value) => value + 1);
    }, 950);
    return () => window.clearInterval(timer);
  }, [playing]);
  const book = snapshot(tick);
  return (
    <div className="w-full max-w-[520px] space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3 px-1">
        <div className="flex items-center gap-2 text-sm font-medium">
          SOL / USD
          <span className="rounded border border-border px-1.5 py-0.5 text-[9px] font-normal uppercase tracking-wider text-muted-foreground">
            Simulated
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setPlaying((value) => !value)}>
            {playing ? "Pause" : "Resume"}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setPlaying(false);
              setTick((value) => value + 1);
            }}
          >
            Step
          </Button>
        </div>
      </div>
      <OrderBook
        {...book}
        baseSymbol="SOL"
        quoteSymbol="USD"
        label="Simulated SOL / USD order book"
      >
        <OrderBookHeader />
        <OrderBookSide side="ask" />
        <OrderBookSpread />
        <OrderBookSide side="bid" />
        <OrderBookBalance />
      </OrderBook>
    </div>
  );
}
`},exampleNote:null}},docsField:`Animated order book with bid and ask depth, spread, and volume balance. 主要导出：OrderBook、useOrderBook、OrderBookHeader、OrderBookSide 等。 最小用法：<OrderBook bids={…} asks={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-order-book.md。`,upstream:`https://beui.dev/r/order-book.json`};export{e as default};