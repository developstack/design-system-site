var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/text-reveal.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/text-reveal.tsx`,export:`TextRevealPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-reveal.preview.tsx`},note:{summaryZh:`文字动效（动效组件）。`,importLine:`import { TextReveal } from "@/components/vendor/beui/motion/text-reveal";`,usage:`<TextReveal text={…} />`,exports:[{name:`TextRevealProps`,kind:`type`},{name:`TextReveal`,kind:`component`,propsType:`TextRevealProps`,inline:!1,union:!1,props:[{name:`text`,type:`string | string[]`,optional:!1},{name:`as`,type:`ElementType`,optional:!0,default:`"span"`},{name:`className`,type:`string`,optional:!0},{name:`split`,type:`SplitMode`,optional:!0,default:`"word"`},{name:`stagger`,type:`number`,optional:!0,default:`0.09`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`blur`,type:`number`,optional:!0,default:`12`},{name:`yOffset`,type:`string | number`,optional:!0,default:`"40%"`},{name:`spring`,type:`{ stiffness?: number | undefined; damping?: number | undefined; mass?: number | undefined; }`,optional:!0},{name:`once`,type:`boolean`,optional:!0,default:`true`},{name:`whileInView`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-reveal.preview.tsx`,code:`"use client";

import { useState } from "react";
import { TextReveal } from "@/components/vendor/beui/motion/text-reveal";

export function TextRevealPreview() {
  const [key, setKey] = useState(0);
  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <div key={key} className="flex flex-col gap-2">
        <TextReveal
          as="h2"
          text={["Motion that feels", "considered."]}
          className="text-balance text-4xl font-semibold leading-[0.95] tracking-[-0.04em] text-foreground sm:text-5xl"
        />
        <TextReveal
          text="Word by word, with a soft blur."
          delay={0.9}
          stagger={0.05}
          blur={6}
          yOffset="20%"
          className="text-sm text-muted-foreground"
        />
      </div>

      <button
        type="button"
        onClick={() => setKey((k) => k + 1)}
        className="inline-flex h-9 items-center rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Replay
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`Word or character reveal with spring slide-up and blur. 主要导出：TextReveal。 最小用法：<TextReveal text={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-text-reveal.md。`,upstream:`https://beui.dev/r/text-reveal.json`};export{e as default};