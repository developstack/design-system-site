var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/animated-toast-stack.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/animated-toast-stack.tsx`,export:`AnimatedToastStackPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-toast-stack.preview.tsx`},note:{summaryZh:`通知堆叠（动效组件）。`,importLine:`import { AnimatedToastStack } from "@/components/vendor/beui/motion/animated-toast-stack";`,usage:`<AnimatedToastStack toasts={…} />`,exports:[{name:`ToastStatus`,kind:`type`},{name:`ToastPosition`,kind:`type`},{name:`AnimatedToastAction`,kind:`type`},{name:`AnimatedToast`,kind:`type`},{name:`ToastInput`,kind:`type`},{name:`ToastClassNames`,kind:`type`},{name:`AnimatedToastStackProps`,kind:`type`},{name:`UseAnimatedToastStackOptions`,kind:`type`},{name:`useAnimatedToastStack`,kind:`hook`,signature:`({ initialToasts, defaultDuration, limit, }?: UseAnimatedToastStackOptions) => { toasts: AnimatedToast[]; showToast: (input: ToastInput) => string; updateToast: (id: string, patch: Partial<...>) => v…`,params:[`__0`],requiredParams:0},{name:`AnimatedToastStack`,kind:`component`,propsType:`AnimatedToastStackProps`,inline:!1,union:!1,props:[{name:`toasts`,type:`AnimatedToast[]`,optional:!1},{name:`onDismiss`,type:`(id: string) => void`,optional:!0},{name:`position`,type:`ToastPosition`,optional:!0,default:`"bottom-right"`},{name:`placement`,type:`"absolute" | "fixed" | "static"`,optional:!0},{name:`fixed`,type:`boolean`,optional:!0,default:`false`},{name:`portal`,type:`boolean`,optional:!0},{name:`portalRoot`,type:`Element | null`,optional:!0},{name:`maxVisible`,type:`number`,optional:!0,default:`4`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`ToastClassNames`,optional:!0},{name:`icons`,type:`Partial<Record<ToastStatus, ReactNode>>`,optional:!0},{name:`renderToast`,type:`(toast: AnimatedToast) => ReactNode`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-toast-stack.preview.tsx`,code:`"use client";

import { Check, LoaderCircle, Sparkles, X } from "lucide-react";
import { useState } from "react";
import {
  AnimatedToastStack,
  type ToastInput,
  type ToastPosition,
  useAnimatedToastStack,
} from "@/components/vendor/beui/motion/animated-toast-stack";
import { cn } from "@/lib/utils";

const POSITIONS: ToastPosition[] = [
  "top-left",
  "top-center",
  "top-right",
  "bottom-left",
  "bottom-center",
  "bottom-right",
];

const EXAMPLES: Array<ToastInput & { label: string }> = [
  {
    label: "Title only",
    status: "success",
    title: "Saved",
    duration: 0,
  },
  {
    label: "Promise",
    status: "loading",
    title: "Publishing component",
    description: "Bundling source, preview, and registry metadata.",
    duration: 0,
  },
  {
    label: "Success",
    status: "success",
    title: "Component published",
    description: "Registry endpoint and raw source are available.",
  },
  {
    label: "Error",
    status: "error",
    title: "Snapshot failed",
    description: "Retry after the browser target settles.",
  },
];

export function AnimatedToastStackPreview() {
  const [position, setPosition] = useState<ToastPosition>("bottom-right");
  const {
    toasts,
    showToast,
    updateToast,
    dismissToast,
    clearToasts,
  } = useAnimatedToastStack({
    defaultDuration: 3600,
    limit: 5,
  });

  const openToast = (input: ToastInput) => {
    const id = showToast(input);
    if (input.status === "loading") {
      window.setTimeout(() => {
        updateToast(id, {
          status: "success",
          title: "Publish complete",
          description: "Toast updated in-place from loading to success.",
          duration: 3200,
        });
      }, 1800);
    }
  };

  const moveStack = (nextPosition: ToastPosition) => {
    setPosition(nextPosition);
    showToast({
      status: "info",
      title: "Position changed",
      description: \`New toasts open from \${nextPosition}.\`,
    });
  };

  return (
    <div className="flex min-h-72 w-full flex-col items-center justify-center gap-6">
      <AnimatedToastStack
        toasts={toasts}
        onDismiss={dismissToast}
        position={position}
        placement="fixed"
        maxVisible={4}
        classNames={{
          surface: "bg-card/95",
        }}
        icons={{
          neutral: <Sparkles className="h-3.5 w-3.5" />,
        }}
      />

      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-sm font-medium text-foreground">Open a real toast</p>
        <p className="max-w-sm text-xs leading-5 text-muted-foreground">
          Toasts render fixed on the screen. Change position to open a toast from that edge.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        {EXAMPLES.map((example) => {
          return (
            <button
              key={example.label}
              type="button"
              onClick={() => openToast(example)}
              className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-4 text-xs font-medium text-foreground transition-colors press hover:border-(--color-border-strong)"
            >
              {example.status === "loading" ? (
                <LoaderCircle className="h-3.5 w-3.5" />
              ) : example.status === "success" ? (
                <Check className="h-3.5 w-3.5" />
              ) : (
                <X className="h-3.5 w-3.5" />
              )}
              {example.label}
            </button>
          );
        })}
        <button
          type="button"
          onClick={clearToasts}
          className="inline-flex h-9 items-center rounded-full px-4 text-xs font-medium text-muted-foreground press hover:bg-foreground/[0.06] hover:text-foreground"
        >
          Clear
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-1.5">
        {POSITIONS.map((positionOption) => (
          <button
            key={positionOption}
            type="button"
            onClick={() => moveStack(positionOption)}
            className={cn(
              "rounded-full px-2.5 py-1 text-[11px] font-medium transition-colors press",
              position === positionOption
                ? "bg-foreground text-background"
                : "bg-foreground/[0.04] text-muted-foreground hover:bg-foreground/[0.08] hover:text-foreground",
            )}
          >
            {positionOption}
          </button>
        ))}
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Stacked toasts with status morphs, swipe dismissal, actions and… 主要导出：AnimatedToastStack、useAnimatedToastStack。 最小用法：<AnimatedToastStack toasts={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/toast.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-animated-toast-stack.md。`,upstream:`https://beui.dev/r/animated-toast-stack.json`};export{e as default};