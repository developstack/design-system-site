var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/slide-action-button.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/slide-action-button.tsx`,export:`SlideActionButtonPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/slide-action-button.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { SlideActionButton } from "@/components/vendor/beui/motion/slide-action-button";`,usage:`<SlideActionButton>…</SlideActionButton>`,exports:[{name:`SlideActionButtonProps`,kind:`type`},{name:`SlideActionButton`,kind:`component`,propsType:`SlideActionButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`completeLabel`,type:`ReactNode`,optional:!0,default:`"Complete"`},{name:`threshold`,type:`number`,optional:!0,default:`0.82`},{name:`resetDelay`,type:`number`,optional:!0,default:`1200`},{name:`onComplete`,type:`() => void`,optional:!0},{name:`thumbClassName`,type:`string`,optional:!0},{name:`fillClassName`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/slide-action-button.preview.tsx`,code:`"use client";

import { useState } from "react";
import { SlideActionButton } from "@/components/vendor/beui/motion/slide-action-button";

export function SlideActionButtonPreview() {
  const [continued, setContinued] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <SlideActionButton
        completeLabel="Ready"
        onComplete={() => {
          setContinued(true);
          window.setTimeout(() => setContinued(false), 1800);
        }}
      >
        Slide to continue
      </SlideActionButton>
      <p className="h-4 text-xs text-muted-foreground" aria-live="polite">
        {continued ? "Action completed" : "Drag the arrow to the end"}
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Drag the thumb to the end to confirm an action; release early to spring back. 主要导出：SlideActionButton。 最小用法：<SlideActionButton>…</SlideActionButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-slide-action-button.md。`,upstream:`https://beui.dev/r/slide-action-button.json`};export{e as default};