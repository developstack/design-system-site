var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/popover-morph.tsx`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/popover-morph.tsx`,export:`MorphPopoverPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/popover-morph.preview.tsx`},note:{summaryZh:`弹出层（动效组件）。`,importLine:`import { MorphPopover } from "@/components/vendor/beui/motion/popover-morph";`,usage:`<MorphPopover>…</MorphPopover>`,exports:[{name:`MorphPopoverProps`,kind:`type`},{name:`MorphPopover`,doc:`A popover whose panel morphs open from the trigger corner: it's laid out at full size but clipped to the corner nearest the trigger, then unclips as one piece. Closes on outside pointer / Escape. Controlled or uncontrolled.`,kind:`component`,propsType:`MorphPopoverProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`open`,type:`boolean`,optional:!0,doc:`Controlled open state.`},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`,doc:`Uncontrolled initial open state.`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MorphPopoverTriggerProps`,kind:`type`},{name:`MorphPopoverTrigger`,doc:`Wraps a single element, toggling the popover on click.`,kind:`component`,propsType:`MorphPopoverTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1}],inherited:[]},{name:`MorphPopoverContentProps`,kind:`type`},{name:`MorphPopoverContent`,kind:`component`,propsType:`MorphPopoverContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`side`,type:`Side`,optional:!0},{name:`align`,type:`Align`,optional:!0},{name:`sideOffset`,type:`number`,optional:!0,doc:`Gap between trigger and panel, in px. Default 8.`},{name:`radius`,type:`number`,optional:!0,doc:`Panel corner radius, in px. Default 16.`},{name:`shadow`,type:`boolean`,optional:!0,doc:`Draw the surface shadow. Default true.`},{name:`onOpenAutoFocus`,type:`(content: HTMLDivElement) => void`,optional:!0,doc:`Runs after the portalled surface is positioned and visible.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/popover-morph.preview.tsx`,code:`"use client";

import { ChevronDown, Copy, Pencil, Share2, Trash2 } from "lucide-react";
import { useState } from "react";
import {
  MorphPopover,
  MorphPopoverContent,
  MorphPopoverTrigger,
} from "@/components/vendor/beui/motion/popover-morph";

const ACTIONS = [
  { icon: Pencil, label: "Edit" },
  { icon: Copy, label: "Duplicate" },
  { icon: Share2, label: "Share" },
  { icon: Trash2, label: "Delete" },
];

export function MorphPopoverPreview() {
  const [open, setOpen] = useState(false);

  return (
    <MorphPopover open={open} onOpenChange={setOpen}>
      <MorphPopoverTrigger>
        <button
          type="button"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-4 text-sm font-medium text-foreground outline-none transition-colors hover:border-border-strong focus-visible:ring-2 focus-visible:ring-ring"
        >
          Options
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </MorphPopoverTrigger>

      <MorphPopoverContent align="start" className="w-48 p-1.5">
        {ACTIONS.map(({ icon: Icon, label }) => (
          <button
            key={label}
            type="button"
            onClick={() => setOpen(false)}
            className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-sm text-foreground outline-none transition-colors hover:bg-muted focus-visible:bg-muted"
          >
            <Icon className="h-4 w-4 text-muted-foreground" />
            {label}
          </button>
        ))}
      </MorphPopoverContent>
    </MorphPopover>
  );
}
`},exampleNote:null}},docsField:`Composable MorphPopover, MorphPopoverTrigger, MorphPopover… 主要导出：MorphPopover、MorphPopoverTrigger、MorphPopoverContent。 最小用法：<MorphPopover>…</MorphPopover>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/popover.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-popover-morph.md。`,upstream:`https://beui.dev/r/popover-morph.json`};export{e as default};