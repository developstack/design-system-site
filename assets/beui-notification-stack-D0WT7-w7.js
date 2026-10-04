var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/notification-stack.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/notification-stack.tsx`,export:`NotificationStackPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/notification-stack.preview.tsx`},note:{summaryZh:`通知堆叠（动效区块）。`,importLine:`import { NotificationStack } from "@/components/vendor/beui/motion/notification-stack";`,usage:`<NotificationStack items={…} />`,exports:[{name:`NotificationStackItem`,kind:`type`},{name:`NotificationStackClassNames`,kind:`type`},{name:`NotificationStackProps`,kind:`type`},{name:`NotificationStack`,kind:`component`,propsType:`NotificationStackProps`,inline:!1,union:!1,props:[{name:`items`,type:`NotificationStackItem[]`,optional:!1},{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0,default:`false`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`onViewAll`,type:`() => void`,optional:!0},{name:`maxVisible`,type:`number`,optional:!0,default:`3`},{name:`collapsedLabel`,type:`string`,optional:!0,default:`"Notifications"`},{name:`expandedLabel`,type:`string`,optional:!0,default:`"View all"`},{name:`emptyLabel`,type:`string`,optional:!0,default:`"All caught up"`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`NotificationStackClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/notification-stack.preview.tsx`,code:`"use client";

import { RotateCw } from "lucide-react";
import {
  NotificationStack,
  type NotificationStackItem,
} from "@/components/vendor/beui/motion/notification-stack";

const notifications: NotificationStackItem[] = [
  {
    id: "import-failed",
    title: "Orders import failed",
    description: "42s · TimeoutError at Step 2",
    trailing: (
      <span className="inline-flex items-center gap-1 text-amber-500 dark:text-amber-400">
        <RotateCw className="h-3.5 w-3.5" aria-hidden="true" />
        2
      </span>
    ),
  },
  {
    id: "sla-breach",
    title: "SLA breach",
    description: "2m 11s · Data enrichment",
  },
  {
    id: "sync-fixed",
    title: "Product sync auto-fixed",
    description: "5m · 404 on GET /products",
  },
];

export function NotificationStackPreview() {
  return (
    <div className="flex w-full items-center justify-center pt-52 pb-6">
      <NotificationStack items={notifications} />
    </div>
  );
}
`},exampleNote:null}},docsField:`Compact notification cards that spring from a stacked summary into a readable list on… 主要导出：NotificationStack。 最小用法：<NotificationStack items={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/notification.md。属性与示例见 packages/registry/docs/vendor/beui-notification-stack.md。`,upstream:`https://beui.dev/r/notification-stack.json`};export{e as default};