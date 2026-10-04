var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/scroll-progress.tsx`,`components/vendor/beui/motion/smooth-scroll.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lenis`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/scroll-progress.tsx`,export:`ScrollProgressPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-progress.preview.tsx`},note:{summaryZh:`滚动进度条（动效组件）。`,importLine:`import { ScrollProgress } from "@/components/vendor/beui/motion/scroll-progress";`,usage:`<ScrollProgress />`,exports:[{name:`ScrollProgressBarProps`,kind:`type`},{name:`ScrollProgressCircleProps`,kind:`type`},{name:`ScrollProgressProps`,kind:`type`},{name:`ScrollProgress`,kind:`component`,propsType:`ScrollProgressProps`,inline:!1,union:!0,props:[{name:`progress`,type:`MotionValue<number>`,optional:!0,doc:`Override the scroll source. Defaults to the page via useSmoothScroll.`},{name:`spring`,type:`boolean`,optional:!0,doc:`Spring-smooth the value. Disabled automatically under reduced motion.`},{name:`className`,type:`string`,optional:!0},{name:`variant`,type:`"bar" | "circle"`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/scroll-progress.preview.tsx`,code:`"use client";

import { useScroll } from "motion/react";
import { useRef } from "react";

import { ScrollProgress } from "@/components/vendor/beui/motion/scroll-progress";

// Real usage: drop <ScrollProgress /> anywhere — it reads page scroll via
// useSmoothScroll and pins itself with \`fixed\`. Here we scope it to a box by
// passing a contained \`progress\` source and \`fixed={false}\`.
const SECTIONS = Array.from({ length: 18 }, (_, i) => i + 1);

export function ScrollProgressPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card">
      <ScrollProgress progress={scrollYProgress} fixed={false} height={3} />
      <div className="absolute right-3 top-3 z-10 rounded-full bg-background/70 p-1 backdrop-blur">
        <ScrollProgress variant="circle" progress={scrollYProgress} size={36} />
      </div>
      <div ref={ref} className="h-64 overflow-y-auto scrollbar-hide">
        <div className="space-y-3 p-4">
          {SECTIONS.map((n) => (
            <div
              key={\`row-\${n}\`}
              className="rounded-lg bg-muted/60 px-3 py-4 text-sm text-muted-foreground"
            >
              Section {n}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Reading-progress indicator — fixed bar or circular ring — driven by scroll position via useSmoothScroll, with spring smoothing. 主要导出：ScrollProgress。 最小用法：<ScrollProgress />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-scroll-progress.md。`,upstream:`https://beui.dev/r/scroll-progress.json`};export{e as default};