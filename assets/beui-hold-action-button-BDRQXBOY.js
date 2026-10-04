var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/hold-action-button.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/hold-action-button.tsx`,export:`HoldActionButtonPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/hold-action-button.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { HoldActionButton } from "@/components/vendor/beui/motion/hold-action-button";`,usage:`<HoldActionButton>…</HoldActionButton>`,exports:[{name:`HoldActionButtonProps`,kind:`type`},{name:`HoldActionButton`,kind:`component`,propsType:`Omit<HoldActionButtonProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`type`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`},{name:`holdingLabel`,type:`ReactNode`,optional:!0,default:`"Keep holding"`},{name:`completeLabel`,type:`ReactNode`,optional:!0,default:`"Done"`},{name:`holdDuration`,type:`number`,optional:!0,default:`1600`},{name:`onHoldComplete`,type:`() => void`,optional:!0},{name:`fillClassName`,type:`string`,optional:!0},{name:`labelClassName`,type:`string`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/hold-action-button.preview.tsx`,code:`"use client";

import { useState } from "react";
import { HoldActionButton } from "@/components/vendor/beui/motion/hold-action-button";

export function HoldActionButtonPreview() {
  const [confirmed, setConfirmed] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <HoldActionButton
        onHoldComplete={() => {
          setConfirmed(true);
          window.setTimeout(() => setConfirmed(false), 1800);
        }}
      >
        Hold for vertical fill
      </HoldActionButton>
      <HoldActionButton
        type="horizontal"
        onHoldComplete={() => {
          setConfirmed(true);
          window.setTimeout(() => setConfirmed(false), 1800);
        }}
      >
        Hold for horizontal fill
      </HoldActionButton>
      <p className="h-4 text-xs text-muted-foreground" aria-live="polite">
        {confirmed ? "Action confirmed" : "Release early to cancel"}
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Hold to complete with a vertical or horizontal liquid fill; release early to cancel. 主要导出：HoldActionButton。 最小用法：<HoldActionButton>…</HoldActionButton>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-hold-action-button.md。`,upstream:`https://beui.dev/r/hold-action-button.json`};export{e as default};