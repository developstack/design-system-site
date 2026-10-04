var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/tabs.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/tabs.tsx`,export:`TabsPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tabs.preview.tsx`},note:{summaryZh:`标签页（动效组件）。`,importLine:`import { Tabs } from "@/components/vendor/beui/motion/tabs";`,usage:`<Tabs>…</Tabs>`,exports:[{name:`Tabs`,kind:`component`,propsType:`{ defaultValue?: string | undefined; value?: string | undefined; onValueChange?: ((v: string) => vo…`,inline:!0,union:!1,props:[{name:`defaultValue`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!0},{name:`onValueChange`,type:`(v: string) => void`,optional:!0},{name:`variant`,type:`Variant`,optional:!0,default:`"pill"`},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`TabsList`,kind:`component`,propsType:`{ children: ReactNode; className?: string | undefined; wrapperClassName?: string | undefined; }`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`wrapperClassName`,type:`string`,optional:!0}],inherited:[]},{name:`TabsTrigger`,kind:`component`,propsType:`{ value: string; children: ReactNode; className?: string | undefined; indicatorClassName?: string |…`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`indicatorClassName`,type:`string`,optional:!0}],inherited:[]},{name:`TabsContent`,kind:`component`,propsType:`{ value: string; children: ReactNode; className?: string | undefined; }`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/tabs.preview.tsx`,code:`"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/vendor/beui/motion/tabs";

export function TabsPreview() {
  return (
    <div className="flex w-full max-w-md flex-col gap-8">
      <Section title="Pill">
        <Tabs defaultValue="overview" variant="pill">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="text-sm text-muted-foreground">High-level summary.</TabsContent>
          <TabsContent value="activity" className="text-sm text-muted-foreground">Recent events.</TabsContent>
          <TabsContent value="settings" className="text-sm text-muted-foreground">Preferences.</TabsContent>
        </Tabs>
      </Section>
      <Section title="Overflow">
        <Tabs defaultValue="Overview" className="w-full max-w-xs">
          <TabsList>
            {["Overview", "Activity", "Analytics", "Members", "Billing", "Settings"].map((label) => (
              <TabsTrigger key={label} value={label}>{label}</TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </Section>
      <Section title="Segment">
        <Tabs defaultValue="day" variant="segment">
          <TabsList>
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </Section>
      <Section title="Underline">
        <Tabs defaultValue="all" variant="underline">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="open">Open</TabsTrigger>
            <TabsTrigger value="closed">Closed</TabsTrigger>
          </TabsList>
        </Tabs>
      </Section>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{title}</span>
      {children}
    </div>
  );
}
`},exampleNote:null}},docsField:`Pill, segment or underline tabs with a spring layoutId indicator. 主要导出：Tabs、TabsList、TabsTrigger、TabsContent。 最小用法：<Tabs>…</Tabs>。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/tabs.md。属性与示例见 packages/registry/docs/vendor/beui-tabs.md。`,upstream:`https://beui.dev/r/tabs.json`};export{e as default};