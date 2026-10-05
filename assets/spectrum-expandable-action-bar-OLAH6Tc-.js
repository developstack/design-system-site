var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/motion/expandable-action-bar.tsx`,`components/vendor/spectrum/lib/hooks/use-dismiss.ts`,`components/vendor/spectrum/lib/hooks/use-hover-gesture.ts`,`components/vendor/spectrum/lib/hooks/use-tap-gesture.ts`,`components/vendor/spectrum/lib/touch.ts`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/expandable-action-bar.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/expandable-action-bar-demo.json`},note:{summaryZh:null,importLine:`import { ExpandableActionBar } from "@/components/vendor/spectrum/motion/expandable-action-bar";`,usage:`<ExpandableActionBar items={…} />`,exports:[{name:`ExpandableActionBarSize`,kind:`type`},{name:`ExpandableActionBarItem`,kind:`type`},{name:`ExpandableActionBarClassNames`,kind:`type`},{name:`ExpandableActionBarProps`,kind:`type`},{name:`ExpandableActionBar`,kind:`component`,propsType:`ExpandableActionBarProps`,inline:!1,union:!1,props:[{name:`items`,type:`ExpandableActionBarItem[]`,optional:!1},{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0,default:`false`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`activeId`,type:`string`,optional:!0},{name:`onAction`,type:`(item: ExpandableActionBarItem) => void`,optional:!0},{name:`size`,type:`ExpandableActionBarSize`,optional:!0,default:`"md"`},{name:`expandOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Expand when a pointer that hovers rests on the bar. Default true. It also governs the touch equivalent: with no hover to reveal the labels, the first tap expands the bar and runs no action, and the second one acts. Set false to make every tap and click act immediately.`},{name:`expandOnFocus`,type:`boolean`,optional:!0,default:`true`},{name:`collapseDelay`,type:`number`,optional:!0,default:`90`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`ExpandableActionBarClassNames`,optional:!0},{name:`renderItem`,type:`(item: ExpandableActionBarItem, state: { expanded: boolean; active: boolean; }) => ReactNode`,optional:!0}],inherited:[]},{name:`useExpandableActionBar`,kind:`hook`,signature:`(items: ExpandableActionBarItem[]) => { expanded: boolean; setExpanded: Dispatch<SetStateAction<boolean>>; activeId: string; setActiveId: Dispatch<...>; activeItem: ExpandableActionBarItem | undefine…`,params:[`items`],requiredParams:1}],example:{url:`https://ui.spectrumhq.in/r/expandable-action-bar-demo.json`,code:`'use client';

import * as React from 'react';
import { Bookmark, Copy, Link2, Pencil, Share2, Trash2 } from 'lucide-react';
import { ExpandableActionBar } from '@/components/vendor/spectrum/motion/expandable-action-bar';

const ITEMS = [
  { id: 'edit', label: 'Edit', icon: <Pencil className="size-4" />, shortcut: 'E' },
  { id: 'copy', label: 'Duplicate', icon: <Copy className="size-4" />, shortcut: '⌘D' },
  { id: 'link', label: 'Copy link', icon: <Link2 className="size-4" /> },
  { id: 'share', label: 'Share', icon: <Share2 className="size-4" /> },
  { id: 'save', label: 'Save', icon: <Bookmark className="size-4" />, badge: 3 },
  { id: 'delete', label: 'Delete', icon: <Trash2 className="size-4" /> },
];

export default function ExpandableActionBarDemo() {
  const [last, setLast] = React.useState<string | null>(null);

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <ExpandableActionBar items={ITEMS} onAction={(item) => setLast(String(item.label))} />
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        {last
          ? \`Last action: \${last}\`
          : 'Hover or focus the bar — the icons expand into labeled controls.'}
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Compact icon actions that expand into labeled con… 主要导出：ExpandableActionBar、useExpandableActionBar。 最小用法：<ExpandableActionBar items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/action-bar.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-expandable-action-bar.md。`,upstream:`https://ui.spectrumhq.in/r/expandable-action-bar.json`};export{e as default};