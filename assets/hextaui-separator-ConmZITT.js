var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/separator.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/separator.tsx`,export:`SeparatorDemo`,example:`https://hextaui.com/r/separator-demo.json`},note:{summaryZh:null,importLine:`import { Separator } from "@/components/vendor/hextaui/ui/separator";`,usage:`<Separator />`,exports:[{name:`Separator`,kind:`component`,propsType:`SeparatorProps`,inline:!1,union:!1,props:[{name:`decorative`,type:`boolean`,optional:!0,default:`false`},{name:`align`,type:`SeparatorAlign`,optional:!0,default:`"center"`},{name:`orientation`,type:`Orientation`,optional:!0,default:`"horizontal"`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`SeparatorAlign`,kind:`type`},{name:`SeparatorProps`,kind:`type`}],example:{url:`https://hextaui.com/r/separator-demo.json`,code:`import { Separator } from "@/components/vendor/hextaui/ui/separator"

export function SeparatorDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 text-sm">
      <div className="flex flex-col gap-1">
        <h4 className="font-medium">HextaUI</h4>
        <p className="text-muted-foreground">
          Components that feel great to use and to write.
        </p>
      </div>
      <Separator />
      <div className="flex h-5 items-center gap-4">
        <a href="#">Docs</a>
        <Separator orientation="vertical" />
        <a href="#">Components</a>
        <Separator orientation="vertical" />
        <a href="#">Source</a>
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A hairline that divides content horizontally or vertically, with an optional label and a decorative mode for purely vis… 主要导出：Separator。 最小用法：<Separator />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/separator.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-separator.md。`,upstream:`https://hextaui.com/r/separator.json`};export{e as default};