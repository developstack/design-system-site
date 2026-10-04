var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/tooltip.tsx`,export:`TooltipPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tooltip.preview.tsx`},note:{summaryZh:`文字提示（动效组件）。`,importLine:`import { Tooltip } from "@/components/vendor/beui/motion/tooltip";`,usage:`<Tooltip content={…} />`,exports:[{name:`TooltipProps`,kind:`type`},{name:`Tooltip`,kind:`component`,propsType:`TooltipProps`,inline:!1,union:!1,props:[{name:`content`,type:`ReactNode`,optional:!1},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!0},{name:`anchorRef`,type:`RefObject<HTMLElement | SVGElement | null>`,optional:!0,doc:`Existing trigger for controlled integrations such as chart cells.`},{name:`anchorPoint`,type:`{ x: number; y: number; }`,optional:!0,doc:`Point within the anchor, as fractions of its rendered width and height.`},{name:`followCursor`,type:`boolean`,optional:!0,default:`false`,doc:`Follow real pointer coordinates; keyboard focus still uses the anchor.`},{name:`open`,type:`boolean`,optional:!0},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`id`,type:`string`,optional:!0},{name:`side`,type:`Side`,optional:!0,default:`"top"`},{name:`delay`,type:`number`,optional:!0,default:`120`,doc:`Delay before showing (ms). Default 120.`},{name:`className`,type:`string`,optional:!0},{name:`wrapperClassName`,type:`string`,optional:!0,doc:`Classes for the outer wrapper span. Use to fix baseline / fill parent.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tooltip.preview.tsx`,code:`"use client";

import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import { Tooltip } from "@/components/vendor/beui/motion/tooltip";

const placements = [
  { side: "top", label: "Top", icon: ArrowUp, position: "col-start-2 row-start-1" },
  { side: "left", label: "Left", icon: ArrowLeft, position: "col-start-1 row-start-2" },
  { side: "right", label: "Right", icon: ArrowRight, position: "col-start-3 row-start-2" },
  { side: "bottom", label: "Bottom", icon: ArrowDown, position: "col-start-2 row-start-3" },
] as const;

export function TooltipPreview() {
  return (
    <div className="flex w-full flex-col items-center gap-8 py-6">
      <div className="grid grid-cols-3 gap-x-3 gap-y-5">
        {placements.map(({ side, label, icon: Icon, position }) => (
          <Tooltip key={side} content="More context" side={side} wrapperClassName={position}>
            <button
              type="button"
              className="inline-flex h-10 w-20 items-center justify-center gap-1.5 rounded-lg border border-border bg-card text-xs font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <Icon aria-hidden="true" className="size-3.5 text-muted-foreground" />
              {label}
            </button>
          </Tooltip>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground">Hover or focus. Press Esc to dismiss.</p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Hover or focus tooltip with a subtle scale and fade, collision-aware placement, and optional cursor tracking. 主要导出：Tooltip。 最小用法：<Tooltip content={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/tooltip.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-tooltip.md。`,upstream:`https://beui.dev/r/tooltip.json`};export{e as default};