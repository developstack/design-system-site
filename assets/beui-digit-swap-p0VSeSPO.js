var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/digit-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/digit-swap.tsx`,export:`DigitSwapPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/digit-swap.preview.tsx`},note:{summaryZh:`数字动画（动效组件）。`,importLine:`import { DigitSwap } from "@/components/vendor/beui/motion/digit-swap";`,usage:`<DigitSwap value={…} />`,exports:[{name:`DigitSwapDirection`,kind:`type`},{name:`DigitSwapProps`,kind:`type`},{name:`DigitSwap`,doc:`Fixed-slot digits and mask glyphs that roll when their value changes.`,kind:`component`,propsType:`DigitSwapProps`,inline:!1,union:!1,props:[{name:`value`,type:`string | number`,optional:!1,doc:`Numeric or masked value rendered in fixed character slots.`},{name:`animationKey`,type:`string | number`,optional:!0,doc:`Replays every glyph when the value itself contains unchanged characters.`},{name:`direction`,type:`DigitSwapDirection`,optional:!0,default:`"up"`,doc:`Direction the next glyph enters from.`},{name:`duration`,type:`number`,optional:!0,default:`0.18`,doc:`Per-glyph transition duration in seconds.`},{name:`stagger`,type:`number`,optional:!0,default:`0.006`,doc:`Delay in seconds between neighboring glyphs.`},{name:`suffixLength`,type:`number`,optional:!0,default:`0`,doc:"Number of final characters that receive `suffixClassName`."},{name:`className`,type:`string`,optional:!0},{name:`glyphClassName`,type:`string`,optional:!0},{name:`suffixClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/digit-swap.preview.tsx`,code:`"use client";

import { useState } from "react";
import { DigitSwap } from "@/components/vendor/beui/motion/digit-swap";

const CARD_NUMBER = "4242 4242 4242 0806";
const MASKED_NUMBER = "•••• •••• •••• 0806";

export function DigitSwapPreview() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="flex w-80 flex-col gap-5">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-medium text-muted-foreground">
          Card number
        </span>
        <DigitSwap
          value={revealed ? CARD_NUMBER : MASKED_NUMBER}
          animationKey={revealed ? "revealed" : "masked"}
          direction={revealed ? "up" : "down"}
          suffixLength={4}
          glyphClassName={
            revealed ? "text-foreground" : "text-muted-foreground"
          }
          suffixClassName="text-foreground"
          className="font-mono text-lg tracking-[0.08em] tabular-nums"
        />
      </div>

      <button
        type="button"
        aria-label={revealed ? "Animate masked number" : "Animate card number"}
        aria-pressed={revealed}
        onClick={() => setRevealed((current) => !current)}
        className="h-10 self-start rounded-lg border border-border px-3 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
      >
        Animate
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`Fixed-slot digits and mask glyphs that roll on change with controllable direction, stagger, replay, and suffix… 主要导出：DigitSwap。 最小用法：<DigitSwap value={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/number.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-digit-swap.md。`,upstream:`https://beui.dev/r/digit-swap.json`};export{e as default};