var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/navigation-menu.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`class-variance-authority`,`cn`],registryDependencies:[`@developstack/hextaui-motion`,`@developstack/hextaui-safe-area`],preview:{kind:`example`,module:`examples/hextaui/navigation-menu.tsx`,export:`NavigationMenuDemo`,example:`https://hextaui.com/r/navigation-menu-demo.json`},note:{summaryZh:`菜单（通用组件）。`,importLine:`import { NavigationMenu } from "@/components/vendor/hextaui/ui/navigation-menu";`,usage:`<NavigationMenu />`,exports:[{name:`NavigationMenu`,kind:`component`,propsType:`NavigationMenuProps`,inline:!1,union:!1,props:[{name:`variant`,type:`NavigationMenuVariant`,optional:!0,default:`"dropdown"`},{name:`showSafeArea`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:15,names:[`actionsRef`,`align`,`alignOffset`,`className`,`closeDelay`,`collisionPadding`,`defaultValue`,`delay`,`onOpenChangeComplete`,`onValueChange`,`orientation`,`render`]}]},{name:`NavigationMenuContent`,kind:`component`,propsType:`NavigationMenuContentProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`keepMounted`,`render`,`style`]}]},{name:`NavigationMenuItem`,kind:`component`,propsType:`NavigationMenuItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`render`,`style`,`value`]}]},{name:`NavigationMenuLink`,kind:`component`,propsType:`NavigationMenuLinkProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:5,names:[`active`,`className`,`closeOnClick`,`render`,`style`]}]},{name:`NavigationMenuList`,kind:`component`,propsType:`NavigationMenuListProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`NavigationMenuPositioner`,kind:`component`,propsType:`NavigationMenuPositionerProps & { popupRef?: Ref<HTMLDivElement> | undefined; }`,inline:!1,union:!1,props:[{name:`popupRef`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`align`,type:`Align`,optional:!0,default:`"start"`,from:`@base-ui/react`},{name:`alignOffset`,type:`number | OffsetFunction`,optional:!0,default:`0`,from:`@base-ui/react`},{name:`collisionPadding`,type:`Padding`,optional:!0,default:`8`,from:`@base-ui/react`},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`8`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:10,names:[`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`disableAnchorTracking`,`positionMethod`,`render`,`sticky`,`style`]}]},{name:`NavigationMenuTrigger`,kind:`component`,propsType:`NavigationMenuTriggerProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:5,names:[`className`,`disabled`,`nativeButton`,`render`,`style`]}]},{name:`navigationMenuTriggerStyle`,kind:`function`,signature:`(props?: ClassProp | undefined) => string`,params:[`props`],requiredParams:0},{name:`NavigationMenuProps`,kind:`type`},{name:`NavigationMenuVariant`,kind:`type`}],example:{url:`https://hextaui.com/r/navigation-menu-demo.json`,code:`import {
  IconBook,
  IconBrandGithub,
  IconBuildingStore,
  IconChartBar,
  IconCode,
  IconComponents,
  IconLayoutDashboard,
  IconLifebuoy,
  IconPalette,
  IconRocket,
  IconShieldLock,
  IconUsers,
} from "@tabler/icons-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/vendor/hextaui/ui/navigation-menu"

type Entry = {
  title: string
  description: string
  icon: typeof IconBook
}

const products: Entry[] = [
  {
    title: "Components",
    description: "Accessible building blocks with motion built in.",
    icon: IconComponents,
  },
  {
    title: "Blocks",
    description: "Full sections you can drop into a page.",
    icon: IconLayoutDashboard,
  },
  {
    title: "Themes",
    description: "Tokens for color, radius and type.",
    icon: IconPalette,
  },
  {
    title: "Templates",
    description: "Starter apps ready to deploy.",
    icon: IconBuildingStore,
  },
]

const solutions: Entry[] = [
  {
    title: "Startups",
    description: "Ship a polished product on day one.",
    icon: IconRocket,
  },
  {
    title: "Teams",
    description: "One system shared across every app.",
    icon: IconUsers,
  },
  {
    title: "Analytics",
    description: "Dashboards, tables and charts.",
    icon: IconChartBar,
  },
  {
    title: "Security",
    description: "Audited for accessibility and safe defaults.",
    icon: IconShieldLock,
  },
  {
    title: "Developers",
    description: "Typed APIs that read like shadcn.",
    icon: IconCode,
  },
  {
    title: "Open source",
    description: "Read every line on GitHub.",
    icon: IconBrandGithub,
  },
]

const resources: Entry[] = [
  {
    title: "Documentation",
    description: "Every component, example and prop.",
    icon: IconBook,
  },
  {
    title: "Support",
    description: "Questions, bugs and feature requests.",
    icon: IconLifebuoy,
  },
]

function Links({ entries }: { entries: Entry[] }) {
  return (
    <ul className="grid gap-1 sm:grid-cols-2">
      {entries.map((entry) => (
        <li key={entry.title}>
          <NavigationMenuLink href="#">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-background ring-(length:--hairline) ring-border">
              <entry.icon className="text-foreground" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="font-medium">{entry.title}</span>
              <span className="text-muted-foreground">{entry.description}</span>
            </span>
          </NavigationMenuLink>
        </li>
      ))}
    </ul>
  )
}

export function NavigationMenuDemo() {
  return (
    <div className="w-full max-w-2xl rounded-xl border px-2 py-1.5">
      <NavigationMenu variant="panel" aria-label="Main">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Links entries={products} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Links entries={solutions} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
            <NavigationMenuContent>
              <Links entries={resources} />
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
`},exampleNote:null}},docsField:`Site navigation with dropdowns, or one fu… 主要导出：NavigationMenu、NavigationMenuContent、NavigationMenuItem、NavigationMenuLink 等。 最小用法：<NavigationMenu />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/nav.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-navigation-menu.md。`,upstream:`https://hextaui.com/r/navigation-menu.json`};export{e as default};