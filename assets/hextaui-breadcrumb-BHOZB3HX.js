var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/breadcrumb.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`cn`],registryDependencies:[`@developstack/hextaui-motion`],preview:{kind:`example`,module:`examples/hextaui/breadcrumb.tsx`,export:`BreadcrumbDemo`,example:`https://hextaui.com/r/breadcrumb-demo.json`},note:{summaryZh:`面包屑（通用组件）。`,importLine:`import { Breadcrumb } from "@/components/vendor/hextaui/ui/breadcrumb";`,usage:`<Breadcrumb />`,exports:[{name:`Breadcrumb`,kind:`component`,propsType:`ComponentProps<"nav", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbList`,kind:`component`,propsType:`ComponentProps<"ol", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbItem`,kind:`component`,propsType:`ComponentProps<"li", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:281,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbLink`,kind:`component`,propsType:`ComponentProps<"a", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:288,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbPage`,kind:`component`,propsType:`ComponentProps<"span", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbSeparator`,kind:`component`,propsType:`ComponentProps<"li", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:281,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbEllipsis`,kind:`component`,propsType:`ComponentProps<"span", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BreadcrumbCollapse`,kind:`component`,propsType:`BreadcrumbCollapseProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`label`,type:`string`,optional:!0,default:`"Show full path"`}],inherited:[]}],example:{url:`https://hextaui.com/r/breadcrumb-demo.json`,code:`import {
  Breadcrumb,
  BreadcrumbCollapse,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/vendor/hextaui/ui/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbCollapse>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Workspace</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Design system</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
        </BreadcrumbCollapse>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Components</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
`},exampleNote:null}},docsField:`A trail of links to the current page that wraps safely, mirrors in ri… 主要导出：Breadcrumb、BreadcrumbList、BreadcrumbItem、BreadcrumbLink 等。 最小用法：<Breadcrumb />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/breadcrumb.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-breadcrumb.md。`,upstream:`https://hextaui.com/r/breadcrumb.json`};export{e as default};