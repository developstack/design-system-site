var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/citations.tsx`,`components/vendor/beui/agents/agent-disclosure.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-favicon.ts`,`components/vendor/beui/lib/favicon.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/citations.tsx`,export:`CitationsPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/citations.preview.tsx`},note:{summaryZh:`引用列表（Agent 界面组件）。`,importLine:`import { Citations } from "@/components/vendor/beui/agents/citations";`,usage:`<Citations citations={…} />`,exports:[{name:`CitationItem`,kind:`type`},{name:`CitationsProps`,kind:`type`},{name:`CitationProps`,kind:`type`},{name:`CitationListProps`,kind:`type`},{name:`CitationStackProps`,kind:`type`},{name:`Citation`,kind:`component`,propsType:`CitationProps`,inline:!1,union:!1,props:[{name:`citationId`,type:`string`,optional:!1},{name:`index`,type:`number`,optional:!1},{name:`idPrefix`,type:`string`,optional:!1,doc:`Must match the related Citations idPrefix.`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`CitationFavicon`,kind:`component`,propsType:`{ url?: string | undefined; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`url`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`CitationStack`,kind:`component`,propsType:`CitationStackProps`,inline:!1,union:!1,props:[{name:`citations`,type:`CitationItem[]`,optional:!1},{name:`limit`,type:`number`,optional:!0,default:`3`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`CitationList`,kind:`component`,propsType:`CitationListProps`,inline:!1,union:!1,props:[{name:`citations`,type:`CitationItem[]`,optional:!1},{name:`idPrefix`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`Citations`,kind:`component`,propsType:`CitationsProps`,inline:!1,union:!1,props:[{name:`citations`,type:`CitationItem[]`,optional:!1},{name:`title`,type:`ReactNode`,optional:!0,default:`"Sources"`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`idPrefix`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/citations.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import {
  Citation,
  Citations,
  type CitationItem,
} from "@/components/vendor/beui/agents/citations";

const CITATION_ITEMS: CitationItem[] = [
  {
    id: "motion",
    title: "Motion documentation",
    domain: "motion.dev",
    url: "https://motion.dev/docs/react",
  },
  {
    id: "wai",
    title: "WAI accessibility patterns",
    domain: "w3.org",
    url: "https://www.w3.org/WAI/ARIA/apg/",
  },
  {
    id: "react",
    title: "React documentation",
    domain: "react.dev",
    url: "https://react.dev/learn",
  },
];

function CitationsDemo() {
  const reduce = useReducedMotion() ?? false;
  const [visible, setVisible] = useState(reduce ? CITATION_ITEMS.length : 0);

  useEffect(() => {
    if (reduce) return;
    const timers = CITATION_ITEMS.map((_, index) =>
      window.setTimeout(() => setVisible(index + 1), 500 + index * 700),
    );
    return () => timers.forEach(window.clearTimeout);
  }, [reduce]);

  return (
    <div className="space-y-4">
      <p className="text-sm leading-6 text-foreground/90">
        Use layout-aware motion for newly appended results{" "}
        <Citation citationId="motion" index={1} idPrefix="preview-source" /> and preserve accessible
        disclosure behavior <Citation citationId="wai" index={2} idPrefix="preview-source" /> as the list
        grows.
      </p>
      <Citations
        idPrefix="preview-source"
        citations={CITATION_ITEMS.slice(0, visible)}
        defaultOpen
      />
    </div>
  );
}

export function CitationsPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[410px] w-full max-w-lg">
      <CitationsDemo key={run} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`Inline citation markers paired with a collapsible, progressively rendered reference collection for grounded agent… 主要导出：Citations、Citation、CitationFavicon、CitationStack 等。 最小用法：<Citations citations={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-citations.md。`,upstream:`https://beui.dev/r/citations.json`};export{e as default};