var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/popover.tsx`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/popover.tsx`,export:`PopoverPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/popover.preview.tsx`},note:{summaryZh:`弹出层（动效组件）。`,importLine:`import { Popover } from "@/components/vendor/beui/motion/popover";`,usage:`<Popover>…</Popover>`,exports:[{name:`PopoverProps`,kind:`type`},{name:`Popover`,kind:`component`,propsType:`PopoverProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`open`,type:`boolean`,optional:!0,doc:`Controlled open state.`},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`,doc:`Uncontrolled initial open state.`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`trigger`,type:`TriggerMode`,optional:!0,default:`"click"`,doc:`How the popover is summoned. Default "click".`},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`,doc:`Which side of the trigger the panel oozes out of. Default "bottom".`},{name:`align`,type:`Align`,optional:!0,default:`"center"`,doc:`Alignment along the trigger's edge. Default "center".`},{name:`sideOffset`,type:`number`,optional:!0,default:`14`,doc:`Gap between trigger and panel, in px — the length of the gooey neck. Default 14.`},{name:`panelRadius`,type:`number`,optional:!0,default:`16`,doc:`Corner radius of the open panel, in px. Default 16.`},{name:`gooStrength`,type:`number`,optional:!0,default:`8`,doc:`Blur radius feeding the goo filter — higher melts more. Default 8.`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`PopoverTriggerProps`,kind:`type`},{name:`PopoverTrigger`,kind:`component`,propsType:`PopoverTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1,doc:`A single focusable element (e.g. a Button) that opens the popover.`}],inherited:[]},{name:`PopoverContentProps`,kind:`type`},{name:`PopoverContent`,kind:`component`,propsType:`PopoverContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/popover.preview.tsx`,code:`"use client";

import { Button } from "@/components/vendor/beui/motion/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/vendor/beui/motion/popover";

export function PopoverPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Popover side="bottom" align="start">
        <PopoverTrigger>
          <Button variant="secondary">Edit profile</Button>
        </PopoverTrigger>
        <PopoverContent className="w-72">
          <p className="text-sm font-medium text-foreground">Dimensions</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Set the width and height for the layer.
          </p>
          <div className="mt-3 flex flex-col gap-2">
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Width</span>
              <input
                defaultValue="100%"
                className="h-8 w-32 rounded-lg border border-border bg-background px-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              />
            </label>
            <label className="flex items-center justify-between gap-3 text-sm">
              <span className="text-muted-foreground">Height</span>
              <input
                defaultValue="auto"
                className="h-8 w-32 rounded-lg border border-border bg-background px-2.5 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-foreground/20"
              />
            </label>
          </div>
        </PopoverContent>
      </Popover>

      <Popover trigger="hover" side="top">
        <PopoverTrigger>
          <Button variant="outline">Hover me</Button>
        </PopoverTrigger>
        <PopoverContent className="w-56">
          <p className="text-sm text-foreground">
            Opens on hover, with a grace window so you can move into the panel.
          </p>
        </PopoverContent>
      </Popover>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable Popover, PopoverTrigger, PopoverContent; the panel oozes out of the trigger through an SVG goo filter with a liquid neck, cris… 主要导出：Popover、PopoverTrigger、PopoverContent。 最小用法：<Popover>…</Popover>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-popover.md。`,upstream:`https://beui.dev/r/popover.json`};export{e as default};