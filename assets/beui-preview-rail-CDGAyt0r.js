var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/preview-rail.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/preview-rail.tsx`,export:`PreviewRailPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/preview-rail.preview.tsx`},note:{summaryZh:null,importLine:`import { PreviewRail } from "@/components/vendor/beui/motion/preview-rail";`,usage:`<PreviewRail items={…} />`,exports:[{name:`PreviewRailItem`,kind:`type`},{name:`PreviewRailProps`,kind:`type`},{name:`PreviewRail`,kind:`component`,propsType:`PreviewRailProps`,inline:!1,union:!1,props:[{name:`items`,type:`PreviewRailItem[]`,optional:!1},{name:`label`,type:`string`,optional:!0,default:`"Section navigation"`},{name:`orientation`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`},{name:`activeId`,type:`string`,optional:!0},{name:`defaultActiveId`,type:`string`,optional:!0},{name:`onActiveChange`,type:`(id: string) => void`,optional:!0},{name:`onItemSelect`,type:`(item: PreviewRailItem) => void`,optional:!0},{name:`renderPreview`,type:`(item: PreviewRailItem) => ReactNode`,optional:!0},{name:`showPreview`,type:`boolean`,optional:!0,default:`true`},{name:`previewSide`,type:`"after" | "before"`,optional:!0,default:`"after"`},{name:`highlightActive`,type:`boolean`,optional:!0,default:`false`},{name:`itemSize`,type:`number`,optional:!0,default:`24`},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`railClassName`,type:`string`,optional:!0},{name:`previewContainerClassName`,type:`string`,optional:!0},{name:`previewClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/preview-rail.preview.tsx`,code:`"use client";

import { PreviewRail } from "@/components/vendor/beui/motion/preview-rail";

export const previewRailItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    description: "Return to your workspace overview and recent activity.",
    href: "#dashboard",
  },
  {
    id: "components",
    label: "Components",
    description: "Browse motion primitives for React and Next.js.",
    href: "#components",
  },
  {
    id: "blocks",
    label: "Blocks",
    description: "Explore composed, product-ready interface blocks.",
    href: "#blocks",
  },
  {
    id: "playground",
    label: "Playground",
    description: "Tune motion values and preview behavior live.",
    href: "#playground",
  },
  {
    id: "docs",
    label: "Documentation",
    description: "Read installation, usage, and API reference notes.",
    href: "#docs",
  },
  {
    id: "changelog",
    label: "Changelog",
    description: "Review newly launched components and improvements.",
    href: "#changelog",
  },
  {
    id: "sponsors",
    label: "Sponsors",
    description: "Support continued development of the open-source library.",
    href: "#sponsors",
  },
  {
    id: "pro",
    label: "beUI Pro",
    description: "Get premium components and lifetime access.",
    href: "#pro",
  },
  {
    id: "examples",
    label: "Examples",
    description: "See components composed in practical interface patterns.",
    href: "#examples",
  },
  {
    id: "templates",
    label: "Templates",
    description: "Start from polished layouts built with beUI components.",
    href: "#templates",
  },
  {
    id: "guides",
    label: "Guides",
    description: "Learn how to combine motion primitives effectively.",
    href: "#guides",
  },
  {
    id: "community",
    label: "Community",
    description: "Discover what other builders are creating with beUI.",
    href: "#community",
  },
  {
    id: "github",
    label: "GitHub",
    description: "View the source, report issues, and contribute improvements.",
    href: "#github",
  },
  {
    id: "about",
    label: "About",
    description: "Learn more about the ideas and people behind beUI.",
    href: "#about",
  },
];

export function PreviewRailPreview() {
  return (
    <div className="flex w-full flex-col gap-8">
      <PreviewRail
        items={previewRailItems}
        defaultActiveId="docs"
        className="mx-auto h-[360px] w-full max-w-2xl"
      />
      <PreviewRail
        items={previewRailItems}
        orientation="horizontal"
        defaultActiveId="docs"
        className="mx-auto h-[280px] w-full max-w-2xl"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Codex app-inspired navigation rail with compact ticks that form a hover pyramid and reveal a floating destination preview. 主要导出：PreviewRail。 最小用法：<PreviewRail items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-preview-rail.md。`,upstream:`https://beui.dev/r/preview-rail.json`};export{e as default};