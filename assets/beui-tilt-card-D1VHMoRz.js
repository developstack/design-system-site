var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/tilt-card.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/tilt-card.tsx`,export:`TiltCardPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tilt-card.preview.tsx`},note:{summaryZh:`倾斜卡片（动效组件）。`,importLine:`import { TiltCard } from "@/components/vendor/beui/motion/tilt-card";`,usage:`<TiltCard>…</TiltCard>`,exports:[{name:`TiltCardProps`,kind:`type`},{name:`TiltCard`,kind:`component`,propsType:`TiltCardProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`max`,type:`number`,optional:!0,default:`12`},{name:`glare`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tilt-card.preview.tsx`,code:`"use client";

import { TiltCard } from "@/components/vendor/beui/motion/tilt-card";

export function TiltCardPreview() {
  return (
    <div className="flex items-center justify-center p-6">
      <TiltCard className="w-[280px] border border-border bg-card p-8">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Premium</div>
        <h3 className="mt-2 text-2xl font-semibold text-foreground">Tilt me</h3>
        <p className="mt-3 text-sm text-muted-foreground">Move your cursor across the card to see 3D tilt + glare.</p>
      </TiltCard>
    </div>
  );
}
`},exampleNote:null}},docsField:`3D perspective tilt on hover with cursor-tracked glare. 主要导出：TiltCard。 最小用法：<TiltCard>…</TiltCard>。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/card.md。属性与示例见 packages/registry/docs/vendor/beui-tilt-card.md。`,upstream:`https://beui.dev/r/tilt-card.json`};export{e as default};