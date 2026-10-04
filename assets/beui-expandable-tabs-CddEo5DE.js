var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/expandable-tabs.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/expandable-tabs.tsx`,export:`ExpandableTabsPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/expandable-tabs.preview.tsx`},note:{summaryZh:`标签页（动效区块）。`,importLine:`import { ExpandableTabs } from "@/components/vendor/beui/motion/expandable-tabs";`,usage:`<ExpandableTabs items={…} />`,exports:[{name:`ExpandableTabsItem`,kind:`type`},{name:`ExpandableTabsClassNames`,kind:`type`},{name:`ExpandableTabsProps`,kind:`type`},{name:`ExpandableTabs`,kind:`component`,propsType:`ExpandableTabsProps`,inline:!1,union:!1,props:[{name:`items`,type:`ExpandableTabsItem[]`,optional:!1},{name:`value`,type:`string | null`,optional:!0,doc:`Active tab id, or null/undefined for the closed (bar-only) state.`},{name:`defaultValue`,type:`string | null`,optional:!0,default:`null`},{name:`onValueChange`,type:`(id: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`ExpandableTabsClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/expandable-tabs.preview.tsx`,code:`"use client";

import {
  BadgeCheck,
  Brush,
  CalendarClock,
  ChartSpline,
  ChevronRight,
  ClipboardCheck,
  CloudUpload,
  FileText,
  Gauge,
  GitBranch,
  Images,
  Inbox,
  type LucideIcon,
  Megaphone,
  MessageCircle,
  PackageOpen,
  RefreshCw,
  Rocket,
  Siren,
  SwatchBook,
  UploadCloud,
  Users,
  Webhook,
  Workflow,
} from "lucide-react";
import { ExpandableTabs } from "@/components/vendor/beui/motion/expandable-tabs";

function Row({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <button
      type="button"
      className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
    >
      <Icon className="h-4 w-4 text-muted-foreground" />
      <span className="flex-1">{label}</span>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}

function Menu({ rows }: { rows: { icon: LucideIcon; label: string }[] }) {
  return (
    <div className="flex w-[17.125rem] flex-col gap-0.5">
      {rows.map((r) => (
        <Row key={r.label} icon={r.icon} label={r.label} />
      ))}
    </div>
  );
}

export function ExpandableTabsPreview() {
  return (
    <div className="flex min-h-88 w-full items-end justify-center">
      <ExpandableTabs
        items={[
          {
            id: "launch",
            label: "Launch",
            icon: <Rocket className="h-4 w-4" />,
            content: (
              <Menu
                rows={[
                  { icon: FileText, label: "Release Brief" },
                  { icon: ClipboardCheck, label: "Launch Checklist" },
                  { icon: Megaphone, label: "Campaign Notes" },
                  { icon: CalendarClock, label: "Rollout Calendar" },
                  { icon: CloudUpload, label: "Ship Build" },
                ]}
              />
            ),
          },
          {
            id: "inbox",
            label: "Inbox",
            icon: <Inbox className="h-4 w-4" />,
            content: (
              <Menu
                rows={[
                  { icon: MessageCircle, label: "Client Feedback" },
                  { icon: Users, label: "Team Requests" },
                  { icon: BadgeCheck, label: "Approval Notes" },
                ]}
              />
            ),
          },
          {
            id: "flows",
            label: "Flows",
            icon: <Workflow className="h-4 w-4" />,
            content: (
              <Menu
                rows={[
                  { icon: GitBranch, label: "Trigger Map" },
                  { icon: Webhook, label: "Webhook Runs" },
                  { icon: RefreshCw, label: "Retry Queue" },
                ]}
              />
            ),
          },
          {
            id: "assets",
            label: "Assets",
            icon: <PackageOpen className="h-4 w-4" />,
            content: (
              <Menu
                rows={[
                  { icon: SwatchBook, label: "Brand Kit" },
                  { icon: Images, label: "Mockup Library" },
                  { icon: Brush, label: "Design Tokens" },
                  { icon: UploadCloud, label: "Export Queue" },
                ]}
              />
            ),
          },
          {
            id: "status",
            label: "Status",
            icon: <ChartSpline className="h-4 w-4" />,
            content: (
              <Menu
                rows={[
                  { icon: Gauge, label: "Activation" },
                  { icon: ChartSpline, label: "Conversion" },
                  { icon: Siren, label: "Incidents" },
                ]}
              />
            ),
          },
        ]}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Icon tab bar where the active tab expands to a labelled pill, with a panel above that morphs height and slides content direction-aware on… 主要导出：ExpandableTabs。 最小用法：<ExpandableTabs items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-expandable-tabs.md。`,upstream:`https://beui.dev/r/expandable-tabs.json`};export{e as default};