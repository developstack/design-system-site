var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/feedback-widget.tsx`,`components/vendor/beui/motion/button/index.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/motion/button/magnetic.tsx`,`components/vendor/beui/motion/button/metallic.tsx`,`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/feedback-widget.tsx`,export:`FeedbackWidgetPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/feedback-widget.preview.tsx`},note:{summaryZh:null,importLine:`import { FeedbackWidget } from "@/components/vendor/beui/motion/feedback-widget";`,usage:`<FeedbackWidget />`,exports:[{name:`FeedbackData`,kind:`type`},{name:`FeedbackWidgetProps`,kind:`type`},{name:`FeedbackWidget`,kind:`component`,propsType:`FeedbackWidgetProps`,inline:!1,union:!1,props:[{name:`onSubmit`,type:`(data: FeedbackData) => void | Promise<void>`,optional:!0,doc:`Called on submit. May be async; the button shows a sending state until it resolves.`},{name:`position`,type:`"bottom-left" | "bottom-right"`,optional:!0,default:`"bottom-right"`},{name:`title`,type:`string`,optional:!0,default:`"Help us improve"`},{name:`placeholder`,type:`string`,optional:!0,default:`"Share an idea or report a bug"`},{name:`icon`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/feedback-widget.preview.tsx`,code:`"use client";

import { useRef } from "react";
import { FeedbackWidget } from "@/components/vendor/beui/motion/feedback-widget";

export function FeedbackWidgetPreview() {
  const attempts = useRef(0);

  const submitFeedback = async () => {
    await new Promise((resolve) => setTimeout(resolve, 900));
    attempts.current += 1;

    if (attempts.current === 1) {
      throw new Error("Preview submission failed");
    }
  };

  return (
    <div className="relative h-80 w-full max-w-md overflow-hidden rounded-2xl border border-border bg-background">
      {/* Faux app surface so the corner trigger has something to sit on. */}
      <div className="border-b border-border px-5 py-3">
        <div className="h-2.5 w-24 rounded-full bg-muted-foreground/20" />
      </div>
      <div className="flex flex-col gap-3 p-5">
        <div className="h-2.5 w-3/4 rounded-full bg-muted-foreground/15" />
        <div className="h-2.5 w-1/2 rounded-full bg-muted-foreground/15" />
        <div className="h-24 w-full rounded-xl bg-muted-foreground/[0.06]" />
        <div className="h-2.5 w-2/3 rounded-full bg-muted-foreground/15" />
      </div>

      <FeedbackWidget onSubmit={submitFeedback} />
    </div>
  );
}
`},exampleNote:null}},docsField:`Corner trigger that morphs open into a feedback popup with message entry and animated sending, success and retry states. 主要导出：FeedbackWidget。 最小用法：<FeedbackWidget />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-feedback-widget.md。`,upstream:`https://beui.dev/r/feedback-widget.json`};export{e as default};