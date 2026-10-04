var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/scroll-reveal.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/scroll-reveal.tsx`,export:`ScrollRevealPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-reveal.preview.tsx`},note:{summaryZh:`滚动显现动效（动效组件）。`,importLine:`import { ScrollReveal } from "@/components/vendor/beui/motion/scroll-reveal";`,usage:`<ScrollReveal>…</ScrollReveal>`,exports:[{name:`ScrollRevealProps`,kind:`type`},{name:`ScrollReveal`,kind:`component`,propsType:`ScrollRevealProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`y`,type:`number`,optional:!0,default:`16`,doc:`Slide distance in px before reveal.`},{name:`blur`,type:`number`,optional:!0,default:`8`,doc:`Enter blur in px (kept ≤ 10 per motion conventions).`},{name:`duration`,type:`number`,optional:!0,default:`0.6`,doc:`Reveal duration in seconds.`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`once`,type:`boolean`,optional:!0,default:`true`,doc:`Reveal only once (default) or every time it enters view.`},{name:`amount`,type:`number | "all" | "some"`,optional:!0,default:`0.3`,doc:`Portion of the element that must be visible to trigger.`},{name:`root`,type:`RefObject<Element | null>`,optional:!0,doc:`Scroll root for contained scroll areas. Defaults to the viewport.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-reveal.preview.tsx`,code:`"use client";

import { useRef } from "react";

import { ScrollReveal } from "@/components/vendor/beui/motion/scroll-reveal";

// On a page <ScrollReveal> tracks the viewport. Here root points at the box so
// each card reveals as it scrolls into the contained view.
const CARDS = ["Spring slide", "Blur in", "Staggered by delay", "Reveal once"];

export function ScrollRevealPreview() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-80 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <div className="flex flex-col gap-16 p-6">
        <div className="text-center text-sm text-muted-foreground">
          Scroll ↓
        </div>
        {CARDS.map((label, i) => (
          <ScrollReveal
            key={label}
            root={containerRef}
            once={false}
            delay={i * 0.05}
            className="rounded-xl border border-border bg-muted/50 px-4 py-16 text-center text-base font-medium text-foreground"
          >
            {label}
          </ScrollReveal>
        ))}
        <div className="text-center text-sm text-muted-foreground">End</div>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Reveals its children with a spring slide and blur as they enter the viewport, once or every time. 主要导出：ScrollReveal。 最小用法：<ScrollReveal>…</ScrollReveal>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-scroll-reveal.md。`,upstream:`https://beui.dev/r/scroll-reveal.json`};export{e as default};