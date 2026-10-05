var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/motion/animated-toast-stack.tsx`,`components/vendor/spectrum/lib/ease.ts`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/toast-stack.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/toast-stack-demo.json`},note:{summaryZh:`通知堆叠（动效组件）。`,importLine:`import { AnimatedToastStack } from "@/components/vendor/spectrum/motion/animated-toast-stack";`,usage:`<AnimatedToastStack toasts={…} />`,exports:[{name:`ToastStatus`,kind:`type`},{name:`ToastPosition`,kind:`type`},{name:`AnimatedToastAction`,kind:`type`},{name:`AnimatedToast`,kind:`type`},{name:`ToastInput`,kind:`type`},{name:`ToastClassNames`,kind:`type`},{name:`AnimatedToastStackProps`,kind:`type`},{name:`UseAnimatedToastStackOptions`,kind:`type`},{name:`useAnimatedToastStack`,kind:`hook`,signature:`({ initialToasts, defaultDuration, limit, }?: UseAnimatedToastStackOptions) => { toasts: AnimatedToast[]; showToast: (input: ToastInput) => string; updateToast: (id: string, patch: Partial<...>) => v…`,params:[`__0`],requiredParams:0},{name:`AnimatedToastStack`,kind:`component`,propsType:`AnimatedToastStackProps`,inline:!1,union:!1,props:[{name:`toasts`,type:`AnimatedToast[]`,optional:!1},{name:`onDismiss`,type:`(id: string) => void`,optional:!0},{name:`position`,type:`ToastPosition`,optional:!0,default:`"bottom-right"`},{name:`placement`,type:`"absolute" | "fixed" | "static"`,optional:!0},{name:`fixed`,type:`boolean`,optional:!0,default:`false`},{name:`portal`,type:`boolean`,optional:!0},{name:`portalRoot`,type:`Element | null`,optional:!0},{name:`maxVisible`,type:`number`,optional:!0,default:`4`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`ToastClassNames`,optional:!0},{name:`icons`,type:`Partial<Record<ToastStatus, ReactNode>>`,optional:!0},{name:`renderToast`,type:`(toast: AnimatedToast) => ReactNode`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/toast-stack-demo.json`,code:`'use client';

import * as React from 'react';
import {
  AnimatedToastStack,
  useAnimatedToastStack,
} from '@/components/vendor/spectrum/motion/animated-toast-stack';

function PillButton({ onClick, children }: { onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-black/10 px-3.5 py-1.5 text-[13px] font-medium text-neutral-700 transition-colors hover:bg-black/4 active:scale-[0.97] dark:border-white/12 dark:text-neutral-200 dark:hover:bg-white/6"
    >
      {children}
    </button>
  );
}

export default function ToastStackDemo() {
  const { toasts, showToast, updateToast, dismissToast } = useAnimatedToastStack({ limit: 4 });

  const deploy = () => {
    const id = showToast({ status: 'loading', title: 'Deploying to production…', duration: 0 });
    window.setTimeout(() => {
      updateToast(id, {
        status: 'success',
        title: 'Deployed',
        description: 'spectrum-ui · 42s · 3 regions',
        duration: 4200,
        action: { label: 'Open', onClick: () => undefined },
      });
    }, 1800);
  };

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="flex flex-wrap items-center justify-center gap-2">
        <PillButton onClick={deploy}>Deploy</PillButton>
        <PillButton
          onClick={() =>
            showToast({
              status: 'info',
              title: 'New comment',
              description: 'Ava replied on “Empty states”.',
            })
          }
        >
          Info
        </PillButton>
        <PillButton
          onClick={() =>
            showToast({
              status: 'error',
              title: 'Payment failed',
              description: 'Card declined. Try another method.',
              action: { label: 'Retry', onClick: () => undefined },
            })
          }
        >
          Error
        </PillButton>
        <PillButton onClick={() => showToast({ status: 'neutral', title: 'Copied to clipboard' })}>
          Neutral
        </PillButton>
      </div>
      <div className="relative flex min-h-[220px] w-full max-w-[480px] items-end justify-center">
        <AnimatedToastStack
          toasts={toasts}
          onDismiss={dismissToast}
          placement="static"
          position="bottom-center"
        />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Toasts stack, morph between statuses and swipe away.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Stacked toasts with status morphs, swipe to dismiss, actions and… 主要导出：AnimatedToastStack、useAnimatedToastStack。 最小用法：<AnimatedToastStack toasts={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/toast.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-toast-stack.md。`,upstream:`https://ui.spectrumhq.in/r/toast-stack.json`};export{e as default};