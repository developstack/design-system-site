var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/morphing-search.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-on-open.ts`,`components/vendor/beui/lib/hooks/use-row-cursor.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/morphing-search.tsx`,export:`MorphingSearchPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/morphing-search.preview.tsx`},note:{summaryZh:`搜索框（动效区块）。`,importLine:`import { MorphingSearch } from "@/components/vendor/beui/motion/morphing-search";`,usage:`<MorphingSearch items={…} />`,exports:[{name:`MorphingSearchItem`,kind:`type`},{name:`MorphingSearchProps`,kind:`type`},{name:`MorphingSearch`,kind:`component`,propsType:`MorphingSearchProps`,inline:!1,union:!1,props:[{name:`items`,type:`MorphingSearchItem[]`,optional:!1},{name:`placeholder`,type:`string`,optional:!0,default:`"Search"`},{name:`shortcut`,type:`string`,optional:!0,default:`"f"`},{name:`iconOnly`,type:`boolean`,optional:!0,default:`false`,doc:`Render the closed trigger as a compact search icon.`},{name:`emptyMessage`,type:`string`,optional:!0,default:`"No results found."`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`onQueryChange`,type:`(query: string) => void`,optional:!0},{name:`onSelect`,type:`(item: MorphingSearchItem) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/morphing-search.preview.tsx`,code:`"use client";

import { Blocks, BookOpen, Bot, FolderOpen, Palette } from "lucide-react";
import {
  MorphingSearch,
  type MorphingSearchItem,
} from "@/components/vendor/beui/motion/morphing-search";

const ITEMS: MorphingSearchItem[] = [
  {
    id: "project-folder",
    title: "Project Folder",
    description: "Block · Files and previews",
    keywords: ["files", "overlay"],
    icon: FolderOpen,
  },
  {
    id: "motion-components",
    title: "Motion components",
    description: "Collection · Interaction primitives",
    keywords: ["animation", "components"],
    icon: Blocks,
  },
  {
    id: "agent-interfaces",
    title: "Agent interfaces",
    description: "Collection · AI building blocks",
    keywords: ["ai", "chat"],
    icon: Bot,
  },
  {
    id: "installation",
    title: "Installation guide",
    description: "Documentation · Add your first component",
    keywords: ["setup", "shadcn"],
    icon: BookOpen,
  },
  {
    id: "design-tokens",
    title: "Design tokens",
    description: "Documentation · Color, type, and motion",
    keywords: ["theme", "styles"],
    icon: Palette,
  },
];

export function MorphingSearchPreview() {
  return (
    <div className="flex w-full max-w-[22rem] items-center gap-3">
      <MorphingSearch items={ITEMS} placeholder="Find components" />
      <MorphingSearch
        items={ITEMS}
        placeholder="Find components"
        shortcut=""
        iconOnly
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Search field or compact icon that morphs into a glass results surface, whether opened by click o… 主要导出：MorphingSearch。 最小用法：<MorphingSearch items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/search.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-morphing-search.md。`,upstream:`https://beui.dev/r/morphing-search.json`};export{e as default};