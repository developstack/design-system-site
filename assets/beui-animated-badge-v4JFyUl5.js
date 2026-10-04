var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/animated-badge.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/animated-badge.tsx`,export:`AnimatedBadgePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-badge.preview.tsx`},note:{summaryZh:`徽标（动效组件）。`,importLine:`import { AnimatedBadge } from "@/components/vendor/beui/motion/animated-badge";`,usage:`<AnimatedBadge />`,exports:[{name:`AnimatedBadgeStatus`,kind:`type`},{name:`AnimatedBadgeSize`,kind:`type`},{name:`AnimatedBadgeProps`,kind:`type`},{name:`AnimatedBadge`,kind:`component`,propsType:`AnimatedBadgeProps`,inline:!1,union:!1,props:[{name:`status`,type:`AnimatedBadgeStatus`,optional:!0,default:`"neutral"`},{name:`size`,type:`AnimatedBadgeSize`,optional:!0,default:`"md"`},{name:`children`,type:`ReactNode`,optional:!0},{name:`icon`,type:`ReactNode`,optional:!0},{name:`showIcon`,type:`boolean`,optional:!0,default:`true`},{name:`pulse`,type:`boolean`,optional:!0,default:`status === "loading"`},{name:`contentKey`,type:`string | number`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-badge.preview.tsx`,code:`"use client";

import { useEffect, useState } from "react";
import { AnimatedBadge, type AnimatedBadgeStatus } from "@/components/vendor/beui/motion/animated-badge";

const STATES: Array<{ status: AnimatedBadgeStatus; label: string }> = [
  { status: "loading", label: "Syncing" },
  { status: "success", label: "Synced" },
  { status: "warning", label: "Review" },
  { status: "danger", label: "Failed" },
];

export function AnimatedBadgePreview() {
  const [active, setActive] = useState(0);
  const state = STATES[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % STATES.length);
    }, 1600);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex h-16 items-center justify-center">
        <AnimatedBadge status={state.status} size="md" aria-live="polite">
          {state.label}
        </AnimatedBadge>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        <AnimatedBadge status="neutral" size="sm">Queued</AnimatedBadge>
        <AnimatedBadge status="info" size="sm">Live</AnimatedBadge>
        <AnimatedBadge status="loading" size="sm">Indexing</AnimatedBadge>
        <AnimatedBadge status="success" size="sm">Verified</AnimatedBadge>
        <AnimatedBadge status="warning" size="sm">Pending</AnimatedBadge>
        <AnimatedBadge status="danger" size="sm">Blocked</AnimatedBadge>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Status badge with animated state icons, pulse feedback and compact size variants. 主要导出：AnimatedBadge。 最小用法：<AnimatedBadge />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-animated-badge.md。`,upstream:`https://beui.dev/r/animated-badge.json`};export{e as default};