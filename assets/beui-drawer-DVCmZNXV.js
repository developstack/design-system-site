var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/drawer.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/drawer.tsx`,export:`DrawerPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/drawer.preview.tsx`},note:{summaryZh:`抽屉（动效组件）。`,importLine:`import { Drawer } from "@/components/vendor/beui/motion/drawer";`,usage:`<Drawer open={…} onOpenChange={…}>…</Drawer>`,exports:[{name:`DrawerProps`,kind:`type`},{name:`Drawer`,kind:`component`,propsType:`DrawerProps`,inline:!1,union:!1,props:[{name:`open`,type:`boolean`,optional:!1},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!1},{name:`side`,type:`"left" | "right"`,optional:!0,default:`"right"`},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0,doc:`Class for the panel surface.`},{name:`backdropClassName`,type:`string`,optional:!0,doc:`Class for the backdrop.`},{name:`ariaLabel`,type:`string`,optional:!0},{name:`dismissable`,type:`boolean`,optional:!0,default:`true`,doc:`Close when the backdrop is clicked. Default true.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/drawer.preview.tsx`,code:`"use client";

import { useState } from "react";
import { Drawer } from "@/components/vendor/beui/motion/drawer";

export function DrawerPreview() {
  const [open, setOpen] = useState(false);
  const [side, setSide] = useState<"left" | "right">("right");

  const openWith = (s: "left" | "right") => {
    setSide(s);
    setOpen(true);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={() => openWith("left")}
        className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground transition-colors hover:bg-card/70"
      >
        Open left
      </button>
      <button
        type="button"
        onClick={() => openWith("right")}
        className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Open right
      </button>

      <Drawer
        open={open}
        onOpenChange={setOpen}
        side={side}
        ariaLabel="Demo drawer"
        className="gap-4 p-6"
      >
        <h2 className="text-sm font-semibold text-foreground">Drawer</h2>
        <p className="text-sm text-muted-foreground">
          Slides in from the {side}. Press Esc or click outside to close.
        </p>
      </Drawer>
    </div>
  );
}
`},exampleNote:null}},docsField:`Side panel that slides in from the left or right with a spring, backdrop blur, body scroll lock and esc… 主要导出：Drawer。 最小用法：<Drawer open={…} onOpenChange={…}>…</Drawer>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/drawer.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-drawer.md。`,upstream:`https://beui.dev/r/drawer.json`};export{e as default};