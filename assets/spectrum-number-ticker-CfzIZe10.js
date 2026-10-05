var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/motion/number-ticker.tsx`,`components/vendor/spectrum/lib/ease.ts`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/number-ticker.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/number-ticker-demo.json`},note:{summaryZh:`数字动画（动效组件）。`,importLine:`import { NumberTicker } from "@/components/vendor/spectrum/motion/number-ticker";`,usage:`<NumberTicker value={…} />`,exports:[{name:`NumberTickerProps`,kind:`type`},{name:`NumberTicker`,kind:`component`,propsType:`NumberTickerProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!1},{name:`pad`,type:`number`,optional:!0,doc:`Digits to pad to (left).`},{name:`duration`,type:`number`,optional:!0,default:`0.9`,doc:`Per-digit roll duration in seconds.`},{name:`stagger`,type:`number`,optional:!0,default:`0.04`,doc:`Stagger between digits.`},{name:`startOnView`,type:`boolean`,optional:!0,default:`true`,doc:`Render only after the element enters the viewport.`},{name:`prefix`,type:`string`,optional:!0},{name:`suffix`,type:`string`,optional:!0},{name:`blur`,type:`boolean`,optional:!0,default:`false`,doc:`Add a small blur during digit rolls.`},{name:`className`,type:`string`,optional:!0},{name:`digitClassName`,type:`string`,optional:!0},{name:`locale`,type:`boolean`,optional:!0,doc:`Insert locale group separators (commas). Server-component safe.`},{name:`format`,type:`(value: number) => string`,optional:!0,doc:"Custom formatter. Client-only — server components must use `locale` instead."}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/number-ticker-demo.json`,code:`'use client';

import * as React from 'react';
import { Minus, Plus, Shuffle } from 'lucide-react';
import { NumberTicker } from '@/components/vendor/spectrum/motion/number-ticker';

const STEP = 1250;

function RoundButton({
  onClick,
  children,
  label,
}: {
  onClick: () => void;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-9 items-center justify-center rounded-full border border-black/10 text-neutral-700 transition-colors hover:bg-black/4 active:scale-95 dark:border-white/12 dark:text-neutral-200 dark:hover:bg-white/6"
    >
      {children}
    </button>
  );
}

export default function NumberTickerDemo() {
  const [value, setValue] = React.useState(48250);

  return (
    <div className="flex w-full flex-col items-center gap-6 py-10">
      <div className="w-full max-w-[360px] rounded-2xl border border-black/8 bg-white p-6 dark:border-white/10 dark:bg-neutral-950">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.06em] text-neutral-500 dark:text-neutral-400">
          Monthly revenue
        </p>
        <div className="mt-3 text-[40px] font-semibold leading-none tracking-[-0.03em] text-neutral-900 dark:text-neutral-100">
          <NumberTicker value={value} prefix="$" locale blur />
        </div>
        <p className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
          Each digit rolls to its new value.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <RoundButton label="Decrease" onClick={() => setValue((v) => Math.max(0, v - STEP))}>
          <Minus className="size-4" />
        </RoundButton>
        <RoundButton
          label="Randomize"
          onClick={() => setValue(Math.round(10000 + Math.random() * 990000))}
        >
          <Shuffle className="size-4" />
        </RoundButton>
        <RoundButton label="Increase" onClick={() => setValue((v) => v + STEP)}>
          <Plus className="size-4" />
        </RoundButton>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A rolling digit ticker that counts to a value with per-digit stagger, padding and blur. 主要导出：NumberTicker。 最小用法：<NumberTicker value={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/number.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-number-ticker.md。`,upstream:`https://ui.spectrumhq.in/r/number-ticker.json`};export{e as default};