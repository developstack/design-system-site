var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/scroll-area.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/scroll-area.tsx`,export:`ScrollAreaDemo`,example:`https://hextaui.com/r/scroll-area-demo.json`},note:{summaryZh:null,importLine:`import { ScrollArea } from "@/components/vendor/hextaui/ui/scroll-area";`,usage:`<ScrollArea />`,exports:[{name:`ScrollArea`,kind:`component`,propsType:`ScrollAreaProps`,inline:!1,union:!1,props:[{name:`scrollbars`,type:`"both" | "horizontal" | "vertical"`,optional:!0,default:`"vertical"`},{name:`fade`,type:`boolean`,optional:!0,default:`true`},{name:`peek`,type:`boolean`,optional:!0,default:`false`},{name:`viewportRef`,type:`Ref<HTMLDivElement>`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`overflowEdgeThreshold`,`render`,`style`]}]},{name:`ScrollBar`,kind:`component`,propsType:`ScrollAreaScrollbarProps`,inline:!1,union:!1,props:[{name:`orientation`,type:`"horizontal" | "vertical"`,optional:!0,default:`"vertical"`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`keepMounted`,`render`,`style`]}]},{name:`scrollAreaVariants`,kind:`function`,signature:`(props?: ClassProp | undefined) => string`,params:[`props`],requiredParams:0},{name:`getPeekHeight`,kind:`function`,signature:`(items: PeekItem[], viewportHeight: number) => { height: number; visible: number; } | null`,params:[`items`,`viewportHeight`],requiredParams:2},{name:`ScrollAreaProps`,kind:`type`},{name:`PeekItem`,kind:`type`}],example:{url:`https://hextaui.com/r/scroll-area-demo.json`,code:`import { ScrollArea } from "@/components/vendor/hextaui/ui/scroll-area"

const names = [
  "Olivia Martin",
  "Jackson Lee",
  "Isabella Nguyen",
  "William Kim",
  "Sofia Davis",
  "Liam Patel",
  "Emma Garcia",
  "Noah Wilson",
]
const roles = ["Design", "Engineering", "Product", "Support"]

const people = Array.from({ length: 40 }, (_, index) => ({
  id: index + 1,
  name: names[index % names.length],
  role: roles[index % roles.length],
}))

export function ScrollAreaDemo() {
  return (
    <ScrollArea peek className="h-80 w-full max-w-sm rounded-lg border">
      <ul className="flex flex-col gap-1 p-2">
        {people.map((person) => (
          <li
            key={person.id}
            className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-sm hover:bg-muted"
          >
            <span className="truncate font-medium">
              {person.id}. {person.name}
            </span>
            <span className="text-muted-foreground">{person.role}</span>
          </li>
        ))}
      </ul>
    </ScrollArea>
  )
}
`},exampleNote:null}},docsField:`Native scrolling with a minimal scrollbar, edges that fade only where there’s more to see, and an optional peek that cuts the last item i… 主要导出：ScrollArea、ScrollBar、scrollAreaVariants、getPeekHeight。 最小用法：<ScrollArea />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/hextaui-scroll-area.md。`,upstream:`https://hextaui.com/r/scroll-area.json`};export{e as default};