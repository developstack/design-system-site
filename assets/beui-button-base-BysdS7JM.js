var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/button-base.tsx`,export:`ButtonBasePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-base.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { Button } from "@/components/vendor/beui/motion/button/base";`,usage:`<Button />`,exports:[{name:`ButtonVariant`,kind:`type`},{name:`ButtonSize`,kind:`type`},{name:`ButtonProps`,kind:`type`},{name:`ButtonLinkProps`,kind:`type`},{name:`Button`,kind:`component`,propsType:`Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`variant`,type:`ButtonVariant`,optional:!0,default:`"primary"`},{name:`size`,type:`ButtonSize`,optional:!0,default:`"md"`},{name:`pressScale`,type:`number`,optional:!0,default:`0.93`},{name:`ripple`,type:`boolean`,optional:!0,default:`false`,doc:`Spawn a Material-style ripple from the press point. Off by default.`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:282,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ButtonLink`,kind:`component`,propsType:`Omit<ButtonLinkProps, "ref"> & RefAttributes<HTMLAnchorElement>`,inline:!1,union:!1,props:[{name:`variant`,type:`ButtonVariant`,optional:!0,default:`"primary"`},{name:`size`,type:`ButtonSize`,optional:!0,default:`"md"`},{name:`pressScale`,type:`number`,optional:!0,default:`0.93`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:280,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-base.preview.tsx`,code:`"use client";

import { ArrowRight, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/vendor/beui/motion/button";

export function ButtonBasePreview() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="md">
          Continue
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="md">
          <Download className="h-4 w-4" />
          Download
        </Button>
        <Button variant="outline" size="md">Outline</Button>
        <Button variant="ghost" size="md">Ghost</Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="md">Medium</Button>
        <Button variant="primary" size="lg">Large</Button>
        <Button variant="secondary" size="icon" aria-label="Delete">
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button variant="primary" size="md" ripple>Ripple</Button>
        <Button variant="outline" size="md" ripple>Tap me</Button>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Press scale, hover lift, variants and sizes. 主要导出：Button、ButtonLink。 最小用法：<Button />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/button.md。属性与示例见 packages/registry/docs/vendor/beui-button-base.md。`,upstream:`https://beui.dev/r/button-base.json`};export{e as default};