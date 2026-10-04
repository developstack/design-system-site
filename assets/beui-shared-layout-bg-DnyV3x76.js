var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/shared-layout-bg.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/shared-layout-bg.tsx`,export:`SharedLayoutBgPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/shared-layout-bg.preview.tsx`},note:{summaryZh:`动画背景（动效组件）。`,importLine:`import { SharedLayoutBg } from "@/components/vendor/beui/motion/shared-layout-bg";`,usage:`<SharedLayoutBg>…</SharedLayoutBg>`,exports:[{name:`SharedLayoutBgProps`,kind:`type`},{name:`SharedLayoutBg`,kind:`component`,propsType:`SharedLayoutBgProps & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`as`,type:`"div" | "ul"`,optional:!0,default:`"div"`,doc:`Semantic container used for the children.`},{name:`pillClassName`,type:`string`,optional:!0,doc:`Tailwind class applied to the moving pill. Defaults to a subtle foreground tint.`},{name:`inset`,type:`number`,optional:!0,default:`20`,doc:`Horizontal inset of the pill relative to each row (px). Default 20.`},{name:`pillContainerClassName`,type:`string`,optional:!0,doc:`Optional positioning override for the pill wrapper inside each item.`}],inherited:[{package:`@types/react`,count:279,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/shared-layout-bg.preview.tsx`,code:`"use client";

import { ArrowUpRight } from "lucide-react";
import { SharedLayoutBg } from "@/components/vendor/beui/motion/shared-layout-bg";

const items = [
  { title: "Inbox", body: "12 unread threads, 3 mentions today." },
  { title: "Drafts", body: "4 posts waiting for a final pass." },
  { title: "Releases", body: "Last shipped 2 days ago, v0.4.1." },
  { title: "Billing", body: "Plan renews on the 1st of next month." },
];

export function SharedLayoutBgPreview() {
  return (
    <div className="w-full max-w-lg px-2">
      <SharedLayoutBg>
        {items.map((it) => (
          <button
            type="button"
            key={it.title}
            className="group flex flex-col gap-1 px-2 py-3 text-left"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium text-foreground">{it.title}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="text-sm text-muted-foreground">{it.body}</p>
          </button>
        ))}
      </SharedLayoutBg>
    </div>
  );
}
`},exampleNote:null}},docsField:`A pill that glides between hovered items via motion's shared layout, with blur enter/exit. 主要导出：SharedLayoutBg。 最小用法：<SharedLayoutBg>…</SharedLayoutBg>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/highlight.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-shared-layout-bg.md。`,upstream:`https://beui.dev/r/shared-layout-bg.json`};export{e as default};