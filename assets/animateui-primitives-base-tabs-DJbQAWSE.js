var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/tabs.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-effects-auto-height`,`@developstack/animateui-primitives-effects-highlight`],preview:{kind:`example`,module:`examples/animateui/primitives-base-tabs.tsx`,export:`BaseTabsDemo`,example:`https://animate-ui.com/r/demo-primitives-base-tabs.json`,props:{mode:`auto-height`}},note:{summaryZh:`标签页（基于 Base UI 的原语）。`,importLine:`import { Tabs } from "@/components/vendor/animateui/primitives/base/tabs";`,usage:`<Tabs />`,exports:[{name:`Tabs`,kind:`component`,propsType:`Omit<TabsRootProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`defaultValue`,`onValueChange`,`orientation`,`render`,`style`,`value`]}]},{name:`TabsHighlight`,kind:`component`,propsType:`TabsHighlightProps`,inline:!0,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`ref`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`mode`,type:`"children" | "parent"`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 25 }`},{name:`hover`,type:`boolean`,optional:!0},{name:`click`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`enabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1}],inherited:[]},{name:`TabsHighlightItem`,kind:`component`,propsType:`TabsHighlightItemProps`,inline:!1,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`children`,type:`ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1},{name:`id`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0},{name:`activeClassName`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`forceUpdateBounds`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`TabsList`,kind:`component`,propsType:`Omit<TabsListProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:5,names:[`activateOnFocus`,`className`,`loopFocus`,`render`,`style`]}]},{name:`TabsTab`,kind:`component`,propsType:`Omit<TabsTabProps, "ref"> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:6,names:[`className`,`disabled`,`nativeButton`,`render`,`style`,`value`]}]},{name:`TabsPanel`,kind:`component`,propsType:`TabsPanelProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.5, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:5,names:[`className`,`keepMounted`,`render`,`style`,`value`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`TabsPanels`,kind:`component`,propsType:`TabsPanelsProps`,inline:!1,union:!0,props:[{name:`mode`,type:`"auto-height" | "layout"`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1},{name:`animate`,type:`boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition`,optional:!0,doc:'Values to animate to, variant label(s), or `LegacyAnimationControls`. ```jsx // As values <motion.div animate={{ opacity: 1 }} /> // As variant <motion.div animate="visible" variants={variants} /> // Multiple variants <motion.div animate={["visible", "active"]} variants={variants} /> // LegacyAnimationControls <motion.div animate={animation} /> ```'},{name:`transition`,type:`ValueAnimationTransition<any> | (ValueAnimationTransition<any> & StyleTransitions & SVGPathTransiti…`,optional:!0,default:`defaultTransition`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:61,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`exit`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TabsProps`,kind:`type`},{name:`TabsHighlightProps`,kind:`type`},{name:`TabsHighlightItemProps`,kind:`type`},{name:`TabsListProps`,kind:`type`},{name:`TabsTabProps`,kind:`type`},{name:`TabsPanelProps`,kind:`type`},{name:`TabsPanelsProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-tabs.json`,code:`import {
  Tabs,
  TabsPanel,
  TabsPanels,
  TabsHighlight,
  TabsHighlightItem,
  TabsList,
  TabsTab,
  type TabsPanelsProps,
} from '@/components/vendor/animateui/primitives/base/tabs';

interface BaseTabsDemoProps {
  mode: TabsPanelsProps['mode'];
}

export function BaseTabsDemo({ mode }: BaseTabsDemoProps) {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsHighlight className="bg-background absolute z-0 inset-0">
        <TabsList className="h-10 inline-flex p-1 bg-accent w-full">
          <TabsHighlightItem value="account" className="flex-1">
            <TabsTab
              value="account"
              className="h-full px-4 py-2 leading-0 w-full text-sm"
            >
              Account
            </TabsTab>
          </TabsHighlightItem>
          <TabsHighlightItem value="password" className="flex-1">
            <TabsTab
              value="password"
              className="h-full px-4 py-2 leading-0 w-full text-sm"
            >
              Password
            </TabsTab>
          </TabsHighlightItem>
        </TabsList>
      </TabsHighlight>
      <TabsPanels
        mode={mode}
        className="bg-background p-3 border-4 border-accent border-t-0"
      >
        <TabsPanel value="account" className="space-y-4">
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
        </TabsPanel>
        <TabsPanel value="password" className="space-y-4">
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
        </TabsPanel>
      </TabsPanels>
    </Tabs>
  );
}
`},exampleNote:null}},docsField:`A component for toggling between related panels on the same page. 主要导出：Tabs、TabsHighlight、TabsHighlightItem、TabsList 等。 最小用法：<Tabs />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-tabs.md。`,upstream:`https://animate-ui.com/r/primitives-base-tabs.json`};export{e as default};