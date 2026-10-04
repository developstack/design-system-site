var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/overflow-actions.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/overflow-actions.tsx`,export:`OverflowActionsPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/overflow-actions.preview.tsx`},note:{summaryZh:null,importLine:`import { OverflowActions } from "@/components/vendor/beui/motion/overflow-actions";`,usage:`<OverflowActions primaryActions={…} overflowActions={…} />`,exports:[{name:`OverflowActionsSize`,kind:`type`},{name:`OverflowActionItem`,kind:`type`},{name:`OverflowActionsClassNames`,kind:`type`},{name:`OverflowActionsProps`,kind:`type`},{name:`OverflowActions`,kind:`component`,propsType:`OverflowActionsProps`,inline:!1,union:!1,props:[{name:`primaryActions`,type:`OverflowActionItem[]`,optional:!1},{name:`overflowActions`,type:`OverflowActionItem[]`,optional:!1},{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0,default:`false`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`onAction`,type:`(item: OverflowActionItem) => void`,optional:!0},{name:`collapseOnAction`,type:`boolean`,optional:!0,default:`false`},{name:`size`,type:`OverflowActionsSize`,optional:!0,default:`"md"`},{name:`openLabel`,type:`string`,optional:!0,default:`"Show extra actions"`},{name:`closeLabel`,type:`string`,optional:!0,default:`"Hide extra actions"`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`OverflowActionsClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/overflow-actions.preview.tsx`,code:`"use client";

import { CalendarClock, Eye, GitBranch, Pin } from "lucide-react";
import { useState } from "react";
import {
  type OverflowActionItem,
  OverflowActions,
} from "@/components/vendor/beui/motion/overflow-actions";

const primaryActions: OverflowActionItem[] = [
  {
    id: "preview",
    label: "Preview",
    icon: <Eye className="h-4 w-4" />,
  },
  {
    id: "pin",
    label: "Pin",
    icon: <Pin className="h-4 w-4" />,
  },
];

const overflowActions: OverflowActionItem[] = [
  {
    id: "branch",
    label: "Branch",
    icon: <GitBranch className="h-4 w-4" />,
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: <CalendarClock className="h-4 w-4" />,
  },
];

export function OverflowActionsPreview() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex w-full items-center justify-center">
      <OverflowActions
        primaryActions={primaryActions}
        overflowActions={overflowActions}
        expanded={expanded}
        onExpandedChange={setExpanded}
        openLabel="Open action rail"
        closeLabel="Collapse action rail"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Connected pill rail for primary actions that springs open to re… 主要导出：OverflowActions。 最小用法：<OverflowActions primaryActions={…} overflowActions={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/action-bar.md。属性与示例见 packages/registry/docs/vendor/beui-overflow-actions.md。`,upstream:`https://beui.dev/r/overflow-actions.json`};export{e as default};