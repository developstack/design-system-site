var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/bouncy-accordion.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/bouncy-accordion.tsx`,export:`BouncyAccordionPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bouncy-accordion.preview.tsx`},note:{summaryZh:`手风琴折叠面板（动效组件）。`,importLine:`import { BouncyAccordion } from "@/components/vendor/beui/motion/bouncy-accordion";`,usage:`<BouncyAccordion items={…} />`,exports:[{name:`BouncyAccordionItem`,kind:`type`},{name:`BouncyAccordionClassNames`,kind:`type`},{name:`BouncyAccordionProps`,kind:`type`},{name:`BouncyAccordion`,kind:`component`,propsType:`BouncyAccordionProps`,inline:!1,union:!1,props:[{name:`items`,type:`BouncyAccordionItem[]`,optional:!1},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0,default:`null`},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`collapsible`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`BouncyAccordionClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bouncy-accordion.preview.tsx`,code:`"use client";

import {
  CalendarClock,
  FileText,
  FolderKanban,
  PackageCheck,
  RadioTower,
  ShieldCheck,
} from "lucide-react";
import { BouncyAccordion } from "@/components/vendor/beui/motion/bouncy-accordion";

const items = [
  {
    id: "brief",
    title: "Release Brief",
    description:
      "Collect launch notes, owners, and risks in one compact handoff before the release window opens.",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    id: "launch",
    title: "Launch Checklist",
    description:
      "Verify copy, links, analytics, rollback steps, and final approvals without leaving the queue.",
    icon: <ShieldCheck className="h-4 w-4" />,
  },
  {
    id: "campaign",
    title: "Campaign Notes",
    description:
      "Keep channel-specific notes close to the task while preserving a calm collapsed list.",
    icon: <RadioTower className="h-4 w-4" />,
  },
  {
    id: "calendar",
    title: "Rollout Calendar",
    description:
      "Plan announcements, staging checks, reminders, and quiet periods around the same timeline.",
    icon: <CalendarClock className="h-4 w-4" />,
  },
  {
    id: "ship",
    title: "Ship Build",
    description:
      "Track the current artifact, deploy status, and final sign-off before marking the release complete.",
    icon: <PackageCheck className="h-4 w-4" />,
  },
  {
    id: "archive",
    title: "Archive Assets",
    description:
      "Move final copy, images, and source files into the campaign folder once the rollout is done.",
    icon: <FolderKanban className="h-4 w-4" />,
  },
];

export function BouncyAccordionPreview() {
  return (
    <div className="flex min-h-96 w-full items-center justify-center">
      <div className="w-full max-w-sm h-[480px]">
        <BouncyAccordion items={items} defaultValue="calendar" />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Single-open accordion with weighted spring layout, icon rows and reduced-motion-safe content reveals. 主要导出：BouncyAccordion。 最小用法：<BouncyAccordion items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-bouncy-accordion.md。`,upstream:`https://beui.dev/r/bouncy-accordion.json`};export{e as default};