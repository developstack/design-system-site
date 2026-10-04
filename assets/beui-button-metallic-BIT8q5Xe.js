var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/button/metallic.tsx`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/button-metallic.tsx`,export:`ButtonMetallicPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-metallic.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { MetallicButton } from "@/components/vendor/beui/motion/button/metallic";`,usage:`<MetallicButton />`,exports:[{name:`MetallicButtonProps`,kind:`type`},{name:`MetallicButton`,kind:`component`,propsType:`Omit<MetallicButtonProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`size`,type:`ButtonSize`,optional:!0,default:`"md"`},{name:`pressScale`,type:`number`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`paused`,type:`boolean`,optional:!0,default:`false`,doc:`Stops the traveling reflection while preserving the chrome rim.`}],inherited:[{package:`映射类型生成，来源无法定位`,count:282,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-metallic.preview.tsx`,code:`"use client";

import { ArrowUpRight, Sparkles } from "lucide-react";
import { MetallicButton } from "@/components/vendor/beui/motion/button";

export function ButtonMetallicPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-6 py-10">
      <MetallicButton>
        Continue
        <ArrowUpRight className="size-4" />
      </MetallicButton>
      <MetallicButton size="sm">
        <Sparkles className="size-3.5" />
        Generate
      </MetallicButton>
      <MetallicButton size="icon" aria-label="Magic tools">
        <Sparkles className="size-4" />
      </MetallicButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`A neutral button surface framed by a pronounced chrome rim with a straight traveling reflection. 主要导出：MetallicButton。 最小用法：<MetallicButton />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-button-metallic.md。`,upstream:`https://beui.dev/r/button-metallic.json`};export{e as default};