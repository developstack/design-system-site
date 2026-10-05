var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/text-states.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/text-states.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/text-states-demo.json`},note:{summaryZh:`文字动效（组件）。`,importLine:`import { TextStates } from "@/components/vendor/spectrum/text-states";`,usage:`<TextStates text={…} />`,exports:[{name:`TextStatesProps`,kind:`type`},{name:`TextStates`,kind:`component`,propsType:`TextStatesProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1,doc:`Current text. Each change runs the exit/enter swap`},{name:`duration`,type:`number`,optional:!0,default:`150`,doc:`Swap duration in ms (each phase). Default 150`},{name:`translateY`,type:`number`,optional:!0,default:`4`,doc:`Travel distance in px. Default 4`},{name:`blur`,type:`number`,optional:!0,default:`2`,doc:`Blur amount in px. Default 2`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/text-states-demo.json`,code:`'use client';

import * as React from 'react';
import { Check, Loader2 } from 'lucide-react';
import { TextStates } from '@/components/vendor/spectrum/text-states';

type Phase = 'idle' | 'saving' | 'saved';
const LABEL: Record<Phase, string> = { idle: 'Save changes', saving: 'Saving…', saved: 'Saved' };

export default function TextStatesDemo() {
  const [phase, setPhase] = React.useState<Phase>('idle');

  const save = () => {
    if (phase !== 'idle') return;
    setPhase('saving');
    window.setTimeout(() => setPhase('saved'), 1400);
    window.setTimeout(() => setPhase('idle'), 3200);
  };

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <button
        type="button"
        onClick={save}
        className="inline-flex h-11 min-w-[168px] items-center justify-center gap-2 rounded-full bg-neutral-900 px-5 text-[15px] font-medium text-white transition-[transform,background-color] hover:bg-neutral-800 active:scale-[0.97] dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
      >
        {phase === 'saving' && <Loader2 className="size-4 animate-spin" aria-hidden />}
        {phase === 'saved' && <Check className="size-4" aria-hidden />}
        <TextStates text={LABEL[phase]} />
      </button>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Click — the label exits up with blur and the next state enters from below.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`A status label that swaps its text in place, exiting up with blur and entering from below. 主要导出：TextStates。 最小用法：<TextStates text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-text-states.md。`,upstream:`https://ui.spectrumhq.in/r/text-states.json`};export{e as default};