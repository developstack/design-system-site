var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/button/magnetic.tsx`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/button-magnetic.tsx`,export:`ButtonMagneticPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-magnetic.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { MagneticButton } from "@/components/vendor/beui/motion/button/magnetic";`,usage:`<MagneticButton />`,exports:[{name:`MagneticButtonProps`,kind:`type`},{name:`MagneticButton`,kind:`component`,propsType:`Omit<MagneticButtonProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`variant`,type:`ButtonVariant`,optional:!0},{name:`size`,type:`ButtonSize`,optional:!0},{name:`pressScale`,type:`number`,optional:!0},{name:`ripple`,type:`boolean`,optional:!0,doc:`Spawn a Material-style ripple from the press point. Off by default.`},{name:`children`,type:`ReactNode`,optional:!0},{name:`strength`,type:`number`,optional:!0,default:`0.25`,doc:`Magnetic pull strength. Default 0.25.`},{name:`magneticClassName`,type:`string`,optional:!0,doc:`Class applied to the magnetic wrapper.`}],inherited:[{package:`映射类型生成，来源无法定位`,count:282,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-magnetic.preview.tsx`,code:`"use client";

import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/vendor/beui/motion/button";

export function ButtonMagneticPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <MagneticButton variant="primary" size="md" strength={0.35}>
        Hover me
        <ArrowRight className="h-4 w-4" />
      </MagneticButton>
      <MagneticButton variant="secondary" size="md" strength={0.25}>
        Subtle pull
      </MagneticButton>
      <MagneticButton variant="outline" size="md" strength={0.5}>
        Strong pull
      </MagneticButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Button composed with the Magnetic wrapper for cursor-attracted pull. 主要导出：MagneticButton。 最小用法：<MagneticButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-button-magnetic.md。`,upstream:`https://beui.dev/r/button-magnetic.json`};export{e as default};