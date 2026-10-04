var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/text-scramble.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/text-scramble.tsx`,export:`TextScramblePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-scramble.preview.tsx`},note:{summaryZh:`文字动效（动效组件）。`,importLine:`import { TextScramble } from "@/components/vendor/beui/motion/text-scramble";`,usage:`<TextScramble text={…} />`,exports:[{name:`TextScrambleProps`,kind:`type`},{name:`TextScramble`,doc:"Character scramble that resolves to `text` and respects reduced motion.",kind:`component`,propsType:`TextScrambleProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1,doc:`Final text revealed by the scramble animation.`},{name:`duration`,type:`number`,optional:!0,doc:`Maximum animation duration in milliseconds.`},{name:`glyphs`,type:`string`,optional:!0,default:`DEFAULT_GLYPHS`,doc:`Characters sampled while unresolved positions are scrambling.`},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-scramble.preview.tsx`,code:`"use client";

import { useState } from "react";
import { TextScramble } from "@/components/vendor/beui/motion/text-scramble";

const PHRASES = [
  "Inspecting the repository",
  "Running the checks",
  "Preparing the update",
];

export function TextScramblePreview() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex w-full flex-col items-center gap-8 text-center">
      <TextScramble
        text={PHRASES[index]}
        className="font-mono text-xl font-medium text-foreground"
      />

      <button
        type="button"
        onClick={() => setIndex((current) => (current + 1) % PHRASES.length)}
        className="inline-flex h-9 items-center rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Next phrase
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`A controlled character scramble that resolves changed text while keeping its final value accessible. 主要导出：TextScramble。 最小用法：<TextScramble text={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-text-scramble.md。`,upstream:`https://beui.dev/r/text-scramble.json`};export{e as default};