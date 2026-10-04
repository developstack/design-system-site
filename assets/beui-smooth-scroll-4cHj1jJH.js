var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/smooth-scroll.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lenis`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/smooth-scroll.tsx`,export:`SmoothScrollPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/smooth-scroll.preview.tsx`},note:{summaryZh:`平滑滚动（动效组件）。`,importLine:`import { SmoothScroll } from "@/components/vendor/beui/motion/smooth-scroll";`,usage:`<SmoothScroll>…</SmoothScroll>`,exports:[{name:`ScrollTarget`,kind:`type`},{name:`ScrollToOptions`,kind:`type`},{name:`SmoothScrollApi`,kind:`type`},{name:`SmoothScrollProps`,kind:`type`},{name:`SmoothScroll`,kind:`component`,propsType:`SmoothScrollProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`root`,type:`boolean`,optional:!0,default:`true`,doc:`Drive the page (window) when true, or a contained scroll area when false.`},{name:`lerp`,type:`number`,optional:!0,default:`0.1`,doc:`Smoothing factor; lower is smoother and heavier.`},{name:`duration`,type:`number`,optional:!0,default:`1.2`,doc:`Wheel / programmatic ease duration in seconds.`},{name:`orientation`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`},{name:`wheelMultiplier`,type:`number`,optional:!0,default:`1`,doc:`Wheel scroll speed multiplier.`},{name:`touch`,type:`boolean`,optional:!0,default:`false`,doc:`Smooth touch scrolling. Off by default — native momentum is good on mobile.`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`useSmoothScroll`,doc:`Read the page's smooth-scroll state. Inside <SmoothScroll> it returns the shared motion values; outside it falls back to a native window scroll listener so scroll-driven components still work without the provider.`,kind:`hook`,signature:`() => SmoothScrollApi`,params:[],requiredParams:0}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/smooth-scroll.preview.tsx`,code:`"use client";

import { ArrowUp } from "lucide-react";

import { SmoothScroll, useSmoothScroll } from "@/components/vendor/beui/motion/smooth-scroll";

// In production <SmoothScroll> wraps the page (root). Here it runs in contained
// mode (root={false}) so the box itself smooth-scrolls — the same engine, and
// the button uses the useSmoothScroll() hook to glide back to the top.
const SECTIONS = Array.from({ length: 16 }, (_, i) => i + 1);

function ScrollTopButton() {
  const { scrollTo } = useSmoothScroll();
  return (
    <button
      type="button"
      onClick={() => scrollTo(0)}
      className="sticky bottom-3 left-[calc(100%-3rem)] z-10 grid size-9 place-items-center rounded-full border border-border bg-background/80 text-foreground backdrop-blur transition-colors hover:bg-background"
      aria-label="Scroll to top"
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export function SmoothScrollPreview() {
  return (
    <SmoothScroll
      root={false}
      className="h-64 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <div className="space-y-3 p-4">
        {SECTIONS.map((n) => (
          <div
            key={\`section-\${n}\`}
            className="rounded-lg bg-muted/60 px-3 py-4 text-sm text-muted-foreground"
          >
            Section {n}
          </div>
        ))}
      </div>
      <ScrollTopButton />
    </SmoothScroll>
  );
}
`},exampleNote:null}},docsField:`Smooth-scroll provider over Lenis with a useSmoothScroll hook exposing scroll offset, progress and velocity. 主要导出：SmoothScroll、useSmoothScroll。 最小用法：<SmoothScroll>…</SmoothScroll>。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-smooth-scroll.md。`,upstream:`https://beui.dev/r/smooth-scroll.json`};export{e as default};