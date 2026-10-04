var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/animate/tabs.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-animate-tabs`],preview:{kind:`example`,module:`examples/animateui/components-animate-tabs.tsx`,export:`AnimateTabsDemo`,example:`https://animate-ui.com/r/demo-components-animate-tabs.json`},note:{summaryZh:`标签页（动效组件）。`,importLine:`import { Tabs } from "@/components/vendor/animateui/components/animate/tabs";`,usage:`<Tabs>…</Tabs>`,exports:[{name:`Tabs`,kind:`component`,propsType:`TabsProps`,inline:!1,union:!0,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`defaultValue`,type:`string | (readonly string[] & string)`,optional:!0}],inherited:[{package:`@types/react`,count:278,names:[]}]},{name:`TabsList`,kind:`component`,propsType:`TabsListProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`TabsTrigger`,kind:`component`,propsType:`TabsTriggerProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0},{name:`value`,type:`string | (string & readonly string[])`,optional:!1},{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!1}],inherited:[{package:`映射类型生成，来源无法定位`,count:283,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsContents`,kind:`component`,propsType:`TabsContentsProps`,inline:!1,union:!1,props:[{name:`children`,type:`((string | number | bigint | boolean | Iterable<ReactNode> | MotionValueNumber | MotionValueString …`,optional:!1},{name:`transition`,type:`Transition<any> & Transition`,optional:!0,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsContent`,kind:`component`,propsType:`TabsContentProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0},{name:`value`,type:`string`,optional:!1},{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!1}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsProps`,kind:`type`},{name:`TabsListProps`,kind:`type`},{name:`TabsTriggerProps`,kind:`type`},{name:`TabsContentsProps`,kind:`type`},{name:`TabsContentProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-animate-tabs.json`,code:`import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from '@/components/vendor/animateui/components/animate/tabs';
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

export function AnimateTabsDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <Card className="shadow-none py-0">
          <TabsContents className="py-6">
            <TabsContent value="account" className="flex flex-col gap-6">
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
            </TabsContent>
            <TabsContent value="password" className="flex flex-col gap-6">
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
            </TabsContent>
          </TabsContents>
        </Card>
      </Tabs>
    </div>
  );
}
`},exampleNote:null}},docsField:`A set of layered sections of content—known as tab panels—that are displayed one at a time. 主要导出：Tabs、TabsList、TabsTrigger、TabsContents 等。 最小用法：<Tabs>…</Tabs>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-animate-tabs.md。`,upstream:`https://animate-ui.com/r/components-animate-tabs.json`};export{e as default};