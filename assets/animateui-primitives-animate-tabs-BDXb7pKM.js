var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/animate/tabs.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`,`@developstack/animateui-primitives-effects-highlight`],preview:{kind:`example`,module:`examples/animateui/primitives-animate-tabs.tsx`,export:`AnimateTabsDemo`,example:`https://animate-ui.com/r/demo-primitives-animate-tabs.json`},note:{summaryZh:`标签页（动效原语）。`,importLine:`import { Tabs } from "@/components/vendor/animateui/primitives/animate/tabs";`,usage:`<Tabs>…</Tabs>`,exports:[{name:`Tabs`,kind:`component`,propsType:`TabsProps`,inline:!1,union:!0,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`defaultValue`,type:`string | (readonly string[] & string)`,optional:!0}],inherited:[{package:`@types/react`,count:278,names:[]}]},{name:`TabsList`,kind:`component`,propsType:`TabsListProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`TabsHighlight`,kind:`component`,propsType:`TabsHighlightProps`,inline:!0,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`ref`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`mode`,type:`"children" | "parent"`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 25 }`},{name:`hover`,type:`boolean`,optional:!0},{name:`click`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`enabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1}],inherited:[]},{name:`TabsHighlightItem`,kind:`component`,propsType:`TabsHighlightItemProps`,inline:!1,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`children`,type:`ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1},{name:`id`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0},{name:`activeClassName`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`forceUpdateBounds`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`TabsTrigger`,kind:`component`,propsType:`TabsTriggerProps`,inline:!1,union:!0,props:[{name:`value`,type:`string | (string & readonly string[])`,optional:!1},{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!1},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:283,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsContents`,kind:`component`,propsType:`TabsContentsProps`,inline:!1,union:!1,props:[{name:`children`,type:`((string | number | bigint | boolean | Iterable<ReactNode> | MotionValueNumber | MotionValueString …`,optional:!1},{name:`transition`,type:`Transition<any> & Transition`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 30, bounce: 0, r…`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsContent`,kind:`component`,propsType:`TabsContentProps`,inline:!1,union:!0,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!1},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useTabs`,kind:`hook`,signature:`() => TabsContextType`,params:[],requiredParams:0},{name:`TabsProps`,kind:`type`},{name:`TabsListProps`,kind:`type`},{name:`TabsHighlightProps`,kind:`type`},{name:`TabsHighlightItemProps`,kind:`type`},{name:`TabsTriggerProps`,kind:`type`},{name:`TabsContentsProps`,kind:`type`},{name:`TabsContentProps`,kind:`type`},{name:`TabsContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-animate-tabs.json`,code:`import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTrigger,
} from '@/components/vendor/animateui/primitives/animate/tabs';

export function AnimateTabsDemo() {
  return (
    <Tabs className="w-[400px]">
      <TabsHighlight className="bg-background absolute z-0 inset-0">
        <TabsList className="h-10 inline-flex p-1 bg-accent w-full">
          <TabsHighlightItem value="account" className="flex-1">
            <TabsTrigger
              value="account"
              className="h-full px-4 py-2 leading-0 w-full text-sm"
            >
              Account
            </TabsTrigger>
          </TabsHighlightItem>
          <TabsHighlightItem value="password" className="flex-1">
            <TabsTrigger
              value="password"
              className="h-full px-4 py-2 leading-0 w-full text-sm"
            >
              Password
            </TabsTrigger>
          </TabsHighlightItem>
        </TabsList>
      </TabsHighlight>
      <TabsContents className="bg-background p-3 border-4 border-accent border-t-0">
        <TabsContent value="account" className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you&apos;re done.
          </p>

          <div className="space-y-3">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                defaultValue="Pedro Duarte"
                className="border px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <input
                id="username"
                defaultValue="@peduarte"
                className="border px-3 py-1.5 text-sm"
              />
            </div>
          </div>

          <button className="bg-primary text-primary-foreground px-3 py-1.5 text-sm">
            Save changes
          </button>
        </TabsContent>
        <TabsContent value="password" className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Change your password here. After saving, you&apos;ll be logged out.
          </p>
          <div className="space-y-3">
            <div className="space-y-1 flex flex-col">
              <label htmlFor="current" className="text-sm">
                Current password
              </label>
              <input
                id="current"
                type="password"
                className="border px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="new" className="text-sm">
                New password
              </label>
              <input
                id="new"
                type="password"
                className="border px-3 py-1.5 text-sm"
              />
            </div>
            <div className="space-y-1 flex flex-col">
              <label htmlFor="confirm" className="text-sm">
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                className="border px-3 py-1.5 text-sm"
              />
            </div>
          </div>

          <button className="bg-primary text-primary-foreground px-3 py-1.5 text-sm">
            Save password
          </button>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
`},exampleNote:null}},docsField:`A set of layered sections of content—known as tab panels—that are displayed one at a time. 主要导出：Tabs、TabsList、TabsHighlight、TabsHighlightItem 等。 最小用法：<Tabs>…</Tabs>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-animate-tabs.md。`,upstream:`https://animate-ui.com/r/primitives-animate-tabs.json`};export{e as default};