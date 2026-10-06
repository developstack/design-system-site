var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/tabs.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/tabs.tsx`,export:`TabsDemo`,example:`https://hextaui.com/r/tabs-demo.json`},note:{summaryZh:`标签页（通用组件）。`,importLine:`import { Tabs } from "@/components/vendor/hextaui/ui/tabs";`,usage:`<Tabs />`,exports:[{name:`Tabs`,kind:`component`,propsType:`TabsRootProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`defaultValue`,`onValueChange`,`orientation`,`render`,`style`,`value`]}]},{name:`TabsContent`,kind:`component`,propsType:`TabsPanelProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:5,names:[`className`,`keepMounted`,`render`,`style`,`value`]}]},{name:`TabsList`,kind:`component`,propsType:`TabsListProps`,inline:!1,union:!1,props:[{name:`variant`,type:`TabsVariant`,optional:!0,default:`"default"`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:5,names:[`activateOnFocus`,`className`,`loopFocus`,`render`,`style`]}]},{name:`TabsTrigger`,kind:`component`,propsType:`TabsTabProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:6,names:[`className`,`disabled`,`nativeButton`,`render`,`style`,`value`]}]},{name:`tabsListVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; line: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`TabsListProps`,kind:`type`},{name:`TabsVariant`,kind:`type`}],example:{url:`https://hextaui.com/r/tabs-demo.json`,code:`import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/vendor/hextaui/ui/tabs"

export function TabsDemo() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="rounded-xl border p-4 text-sm">
          <p className="font-medium">Overview</p>
          <p className="text-muted-foreground">
            Visitors are up 12% this week, mostly from search.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="analytics">
        <div className="rounded-xl border p-4 text-sm">
          <p className="font-medium">Analytics</p>
          <p className="text-muted-foreground">
            Average session length is 4m 12s across 18,240 visits.
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="rounded-xl border p-4 text-sm">
          <p className="font-medium">Reports</p>
          <p className="text-muted-foreground">
            Three scheduled reports go out on Monday.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  )
}
`},exampleNote:null}},docsField:`Switch between views with an indicator that slides to the active tab, as a segmented control or an… 主要导出：Tabs、TabsContent、TabsList、TabsTrigger 等。 最小用法：<Tabs />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/tabs.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-tabs.md。`,upstream:`https://hextaui.com/r/tabs.json`};export{e as default};