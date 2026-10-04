var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/expandable-action-bar.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/expandable-action-bar.tsx`,export:`ExpandableActionBarPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/expandable-action-bar.preview.tsx`},note:{summaryZh:null,importLine:`import { ExpandableActionBar } from "@/components/vendor/beui/motion/expandable-action-bar";`,usage:`<ExpandableActionBar items={…} />`,exports:[{name:`ExpandableActionBarSize`,kind:`type`},{name:`ExpandableActionBarItem`,kind:`type`},{name:`ExpandableActionBarClassNames`,kind:`type`},{name:`ExpandableActionBarProps`,kind:`type`},{name:`ExpandableActionBar`,kind:`component`,propsType:`ExpandableActionBarProps`,inline:!1,union:!1,props:[{name:`items`,type:`ExpandableActionBarItem[]`,optional:!1},{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0,default:`false`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`activeId`,type:`string`,optional:!0},{name:`onAction`,type:`(item: ExpandableActionBarItem) => void`,optional:!0},{name:`size`,type:`ExpandableActionBarSize`,optional:!0,default:`"md"`},{name:`expandOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Expand when a pointer that hovers rests on the bar. Default true. It also governs the touch equivalent: with no hover to reveal the labels, the first tap expands the bar and runs no action, and the second one acts. Set false to make every tap and click act immediately.`},{name:`expandOnFocus`,type:`boolean`,optional:!0,default:`true`},{name:`collapseDelay`,type:`number`,optional:!0,default:`90`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`ExpandableActionBarClassNames`,optional:!0},{name:`renderItem`,type:`(item: ExpandableActionBarItem, state: { expanded: boolean; active: boolean; }) => ReactNode`,optional:!0}],inherited:[]},{name:`useExpandableActionBar`,kind:`hook`,signature:`(items: ExpandableActionBarItem[]) => { expanded: boolean; setExpanded: Dispatch<SetStateAction<boolean>>; activeId: string; setActiveId: Dispatch<...>; activeItem: ExpandableActionBarItem | undefine…`,params:[`items`],requiredParams:1}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/expandable-action-bar.preview.tsx`,code:`"use client";

import {
  Archive,
  Bell,
  Copy,
  Download,
  Send,
  Settings,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";
import {
  ExpandableActionBar,
  type ExpandableActionBarItem,
} from "@/components/vendor/beui/motion/expandable-action-bar";

const ACTIONS: ExpandableActionBarItem[] = [
  {
    id: "send",
    label: "Send",
    icon: <Send className="h-4 w-4 motion-safe:group-hover:animate-action-send" />,
    shortcut: "S",
  },
  {
    id: "copy",
    label: "Copy",
    icon: <Copy className="h-4 w-4 motion-safe:group-hover:animate-action-copy" />,
    shortcut: "C",
  },
  {
    id: "download",
    label: "Export",
    icon: <Download className="h-4 w-4 motion-safe:group-hover:animate-action-download" />,
    shortcut: "E",
  },
  {
    id: "archive",
    label: "Archive",
    icon: <Archive className="h-4 w-4 motion-safe:group-hover:animate-action-archive" />,
  },
  {
    id: "alerts",
    label: "Alerts",
    icon: <Bell className="h-4 w-4 origin-top motion-safe:group-hover:animate-action-bell" />,
    badge: "3",
  },
  {
    id: "settings",
    label: "Settings",
    icon: <Settings className="h-4 w-4 motion-safe:group-hover:animate-action-settings" />,
  },
];

export function ExpandableActionBarPreview() {
  const [expanded, setExpanded] = useState(false);
  const [activeId, setActiveId] = useState("send");

  const items = useMemo(
    () =>
      ACTIONS.map((item) => ({
        ...item,
        active: item.id === activeId,
      })),
    [activeId],
  );

  return (
    <div className="flex min-h-72 w-full flex-col items-center justify-center gap-6">
      <div className="flex min-h-24 w-full items-center justify-center">
        <ExpandableActionBar
          items={items}
          expanded={expanded}
          onExpandedChange={setExpanded}
          activeId={activeId}
          onAction={(item) => setActiveId(item.id)}
          classNames={{
            item: "group",
          }}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <motion.button
          type="button"
          onClick={() => setExpanded((current) => !current)}
          className="relative flex h-9 w-[110px] items-center justify-center overflow-hidden rounded-full border border-border bg-card text-xs font-medium text-foreground transition-colors hover:border-(--color-border-strong)"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.96 }}
        >
          <motion.div layout className="flex items-center gap-1.5">
            <motion.svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 shrink-0"
            >
              <motion.path
                initial={false}
                animate={{
                  d: expanded ? "M 10 20 L 10 14 L 4 14" : "M 9 21 L 3 21 L 3 15",
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              />
              <motion.path
                initial={false}
                animate={{
                  d: expanded ? "M 14 4 L 14 10 L 20 10" : "M 15 3 L 21 3 L 21 9",
                }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              />
              <line x1="14" x2="21" y1="10" y2="3" />
              <line x1="3" x2="10" y1="21" y2="14" />
            </motion.svg>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={expanded ? "expanded" : "collapsed"}
                initial={{ opacity: 0, y: -25, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 25, filter: "blur(4px)" }}
                transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              >
                {expanded ? "Collapse" : "Expand"}
              </motion.span>
            </AnimatePresence>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Compact icon actions that expand into labeled controls on h… 主要导出：ExpandableActionBar、useExpandableActionBar。 最小用法：<ExpandableActionBar items={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/action-bar.md。属性与示例见 packages/registry/docs/vendor/beui-expandable-action-bar.md。`,upstream:`https://beui.dev/r/expandable-action-bar.json`};export{e as default};