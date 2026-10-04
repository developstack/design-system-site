var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/bottom-sheet.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/bottom-sheet.tsx`,export:`BottomSheetPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bottom-sheet.preview.tsx`},note:{summaryZh:`底部面板（动效组件）。`,importLine:`import { BottomSheet } from "@/components/vendor/beui/motion/bottom-sheet";`,usage:`<BottomSheet open={…} onOpenChange={…} />`,exports:[{name:`BottomSheetProps`,kind:`type`},{name:`BottomSheet`,kind:`component`,propsType:`BottomSheetProps`,inline:!1,union:!1,props:[{name:`open`,type:`boolean`,optional:!1},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!1},{name:`snapPoints`,type:`(number | "auto")[]`,optional:!0,default:`[0.5, 0.92]`,doc:`Heights (0-1 = fraction of viewport, or "auto"). First entry is default.`},{name:`defaultSnap`,type:`number`,optional:!0,default:`0`},{name:`title`,type:`string`,optional:!0},{name:`description`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`dismissThreshold`,type:`number`,optional:!0,default:`120`,doc:`Min drag distance (px) past current snap to dismiss.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bottom-sheet.preview.tsx`,code:`"use client";

import { useState } from "react";
import { BottomSheet } from "@/components/vendor/beui/motion/bottom-sheet";

export function BottomSheetPreview() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Open bottom sheet
      </button>
      <BottomSheet
        open={open}
        onOpenChange={setOpen}
        snapPoints={[0.4, 0.85]}
        title="Quick actions"
        description="Drag the handle, fling, or swipe down to dismiss."
      >
        <ul className="divide-y divide-border">
          {["Share", "Duplicate", "Move to folder", "Rename", "Archive", "Delete"].map((item) => (
            <li key={item} className="py-3 text-sm text-foreground">{item}</li>
          ))}
        </ul>
        <div className="py-12 text-center text-xs text-muted-foreground">
          Fling up to expand, fling down to dismiss.
        </div>
      </BottomSheet>
    </>
  );
}
`},exampleNote:null}},docsField:`Vaul-inspired draggable bottom sheet with snap points, inertia and glass surface. 主要导出：BottomSheet。 最小用法：<BottomSheet open={…} onOpenChange={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/sheet.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-bottom-sheet.md。`,upstream:`https://beui.dev/r/bottom-sheet.json`};export{e as default};