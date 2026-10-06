var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/item.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`class-variance-authority`,`cn`],registryDependencies:[`@developstack/hextaui-motion`],preview:{kind:`example`,module:`examples/hextaui/item.tsx`,export:`ItemDemo`,example:`https://hextaui.com/r/item-demo.json`},note:{summaryZh:null,importLine:`import { Item } from "@/components/vendor/hextaui/ui/item";`,usage:`<Item />`,exports:[{name:`Item`,kind:`component`,propsType:`ItemProps`,inline:!1,union:!1,props:[{name:`variant`,type:`ItemVariant`,optional:!0,default:`"default"`},{name:`size`,type:`ItemSize`,optional:!0,default:`"default"`}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemActions`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemChevron`,kind:`component`,propsType:`IconProps & RefAttributes<SVGSVGElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:487,names:[]},{package:`@tabler/icons-react`,count:3,names:[`size`,`stroke`,`title`]}]},{name:`ItemContent`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemDescription`,kind:`component`,propsType:`ComponentProps<"p", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemFooter`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemGroup`,kind:`component`,propsType:`ItemGroupProps`,inline:!1,union:!1,props:[{name:`variant`,type:`ItemGroupVariant`,optional:!0,default:`"default"`},{name:`highlight`,type:`boolean`,optional:!0,default:`true`},{name:`arrowNavigation`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemHeader`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemMedia`,kind:`component`,propsType:`ItemMediaProps`,inline:!1,union:!1,props:[{name:`variant`,type:`ItemMediaVariant`,optional:!0,default:`"default"`},{name:`tone`,type:`ItemMediaTone`,optional:!0}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemSeparator`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`ItemTitle`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`itemGroupVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; grouped: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`itemMediaVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; icon: string; image: string; }; tone: { gray: string; red: string; orange: string; yellow: string; green: string; teal: string; sky: string; blu…`,params:[`props`],requiredParams:0},{name:`itemVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; outline: string; muted: string; }; size: { default: string; sm: string; xs: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`ItemGroupProps`,kind:`type`},{name:`ItemMediaProps`,kind:`type`},{name:`ItemMediaTone`,kind:`type`},{name:`ItemProps`,kind:`type`}],example:{url:`https://hextaui.com/r/item-demo.json`,code:`import {
  IconBell,
  IconDeviceDesktop,
  IconKey,
  IconUserCircle,
} from "@tabler/icons-react"

import {
  Item,
  ItemChevron,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
  type ItemMediaTone,
} from "@/components/vendor/hextaui/ui/item"

const settings: {
  href: string
  icon: typeof IconBell
  title: string
  tone: ItemMediaTone
  description: string
}[] = [
  {
    href: "#profile",
    icon: IconUserCircle,
    title: "Profile",
    tone: "gray",
    description: "Name, photo and handle",
  },
  {
    href: "#notifications",
    icon: IconBell,
    title: "Notifications",
    tone: "red",
    description: "Mentions, replies and digests",
  },
  {
    href: "#security",
    icon: IconKey,
    title: "Password and passkeys",
    tone: "green",
    description: "Two passkeys, last used today",
  },
  {
    href: "#sessions",
    icon: IconDeviceDesktop,
    title: "Sessions",
    tone: "blue",
    description: "Signed in on 3 devices",
  },
]

export function ItemDemo() {
  return (
    <ItemGroup variant="grouped" className="max-w-sm">
      {settings.map((setting) => (
        <Item key={setting.href} size="sm" render={<a href={setting.href} />}>
          <ItemMedia variant="icon" tone={setting.tone}>
            <setting.icon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>{setting.title}</ItemTitle>
            <ItemDescription>{setting.description}</ItemDescription>
          </ItemContent>
          <ItemChevron />
        </Item>
      ))}
    </ItemGroup>
  )
}
`},exampleNote:null}},docsField:`A row of media, text and actions for lists, settings and pickers, with a grouped surface and a hover highlight that glides between rows. 主要导出：Item、ItemActions、ItemChevron、ItemContent 等。 最小用法：<Item />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/hextaui-item.md。`,upstream:`https://hextaui.com/r/item.json`};export{e as default};