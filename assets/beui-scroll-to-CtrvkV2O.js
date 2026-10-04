var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/scroll-to.tsx`,`components/vendor/beui/motion/smooth-scroll.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lenis`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/scroll-to.tsx`,export:`ScrollToPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-to.preview.tsx`},note:{summaryZh:null,importLine:`import { ScrollTo } from "@/components/vendor/beui/motion/scroll-to";`,usage:`<ScrollTo to={…}>…</ScrollTo>`,exports:[{name:`ScrollToProps`,kind:`type`},{name:`ScrollTo`,doc:`Button that smooth-scrolls to a target via the active SmoothScroll provider (or native scroll as a fallback). Respects reduced motion — jumps instantly.`,kind:`component`,propsType:`ScrollToProps`,inline:!1,union:!1,props:[{name:`to`,type:`ScrollTarget`,optional:!1,doc:`Where to scroll: px offset, selector string or element.`},{name:`offset`,type:`number`,optional:!0,doc:`Extra px offset from the target (e.g. to clear a sticky header).`},{name:`duration`,type:`number`,optional:!0,doc:`Override the ease duration in seconds.`},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:285,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-to.preview.tsx`,code:`"use client";

import { ScrollTo } from "@/components/vendor/beui/motion/scroll-to";
import { SmoothScroll } from "@/components/vendor/beui/motion/smooth-scroll";

// ScrollTo uses the active SmoothScroll provider. Here it's contained
// (root={false}); the nav buttons glide the box to each section.
const SECTIONS = [
  { id: "sec-intro", label: "Intro" },
  { id: "sec-features", label: "Features" },
  { id: "sec-pricing", label: "Pricing" },
  { id: "sec-faq", label: "FAQ" },
];

export function ScrollToPreview() {
  return (
    <SmoothScroll
      root={false}
      className="relative h-80 w-full max-w-lg overflow-y-auto scrollbar-hide rounded-2xl border border-border bg-card"
    >
      <nav className="sticky top-0 z-10 flex gap-1.5 border-b border-border bg-background/80 p-2 backdrop-blur">
        {SECTIONS.map((s) => (
          <ScrollTo
            key={s.id}
            to={\`#\${s.id}\`}
            offset={-48}
            className="rounded-full px-3 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {s.label}
          </ScrollTo>
        ))}
      </nav>

      {SECTIONS.map((s) => (
        <section
          id={s.id}
          key={s.id}
          className="flex h-64 items-center justify-center text-lg font-medium text-foreground"
        >
          {s.label}
        </section>
      ))}
    </SmoothScroll>
  );
}
`},exampleNote:null}},docsField:`Button that smooth-scrolls to a target (offset, selector or element) via the active SmoothScroll provider; reduced-motion jumps instantly. 主要导出：ScrollTo。 最小用法：<ScrollTo to={…}>…</ScrollTo>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-scroll-to.md。`,upstream:`https://beui.dev/r/scroll-to.json`};export{e as default};