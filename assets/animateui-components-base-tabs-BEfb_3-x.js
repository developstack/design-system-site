var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/tabs.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-base-tabs`],preview:{kind:`example`,module:`examples/animateui/components-base-tabs.tsx`,export:`BaseTabsDemo`,example:`https://animate-ui.com/r/demo-components-base-tabs.json`},note:{summaryZh:`标签页（基于 Base UI 的组件）。`,importLine:`import { Tabs } from "@/components/vendor/animateui/components/base/tabs";`,usage:`<Tabs />`,exports:[{name:`Tabs`,kind:`component`,propsType:`Omit<TabsRootProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`defaultValue`,`onValueChange`,`orientation`,`render`,`style`,`value`]}]},{name:`TabsList`,kind:`component`,propsType:`Omit<TabsListProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:5,names:[`activateOnFocus`,`className`,`loopFocus`,`render`,`style`]}]},{name:`TabsTab`,kind:`component`,propsType:`Omit<TabsTabProps, "ref"> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:6,names:[`className`,`disabled`,`nativeButton`,`render`,`style`,`value`]}]},{name:`TabsPanels`,kind:`component`,propsType:`TabsPanelsProps`,inline:!1,union:!0,props:[{name:`mode`,type:`"auto-height" | "layout"`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1},{name:`animate`,type:`boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition`,optional:!0,doc:'Values to animate to, variant label(s), or `LegacyAnimationControls`. ```jsx // As values <motion.div animate={{ opacity: 1 }} /> // As variant <motion.div animate="visible" variants={variants} /> // Multiple variants <motion.div animate={["visible", "active"]} variants={variants} /> // LegacyAnimationControls <motion.div animate={animation} /> ```'},{name:`transition`,type:`ValueAnimationTransition<any> | (ValueAnimationTransition<any> & StyleTransitions & SVGPathTransiti…`,optional:!0,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:61,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`exit`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsPanel`,kind:`component`,propsType:`TabsPanelProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:5,names:[`className`,`keepMounted`,`render`,`style`,`value`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`TabsProps`,kind:`type`},{name:`TabsListProps`,kind:`type`},{name:`TabsTabProps`,kind:`type`},{name:`TabsPanelsProps`,kind:`type`},{name:`TabsPanelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-tabs.json`,code:`import {
  Tabs,
  TabsPanel,
  TabsPanels,
  TabsList,
  TabsTab,
} from '@/components/vendor/animateui/components/base/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function BaseTabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTab value="account">Account</TabsTab>
          <TabsTab value="password">Password</TabsTab>
        </TabsList>
        <Card className="shadow-none py-0">
          <TabsPanels className="py-6">
            <TabsPanel value="account" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Account</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-name">Name</Label>
                  <Input id="tabs-demo-name" defaultValue="Pedro Duarte" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save changes</Button>
              </CardFooter>
            </TabsPanel>
            <TabsPanel value="password" className="flex flex-col gap-6">
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you&apos;ll be logged
                  out.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-current">Current password</Label>
                  <Input id="tabs-demo-current" type="password" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="tabs-demo-new">New password</Label>
                  <Input id="tabs-demo-new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </TabsPanel>
          </TabsPanels>
        </Card>
      </Tabs>
    </div>
  );
}
`},exampleNote:null}},docsField:`A component for toggling between related panels on the same page. 主要导出：Tabs、TabsList、TabsTab、TabsPanels 等。 最小用法：<Tabs />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/tabs.md。属性与示例见 packages/registry/docs/vendor/animateui-components-base-tabs.md。`,upstream:`https://animate-ui.com/r/components-base-tabs.json`};export{e as default};