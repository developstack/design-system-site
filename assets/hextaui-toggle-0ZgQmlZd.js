var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/toggle.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/toggle.tsx`,export:`ToggleDemo`,example:`https://hextaui.com/r/toggle-demo.json`},note:{summaryZh:`切换按钮（通用组件）。`,importLine:`import { Toggle } from "@/components/vendor/hextaui/ui/toggle";`,usage:`<Toggle />`,exports:[{name:`Toggle`,kind:`component`,propsType:`ToggleProps<Value>`,inline:!1,union:!1,props:[{name:`variant`,type:`"default" | "outline" | null`,optional:!0,default:`"default"`},{name:`size`,type:`"default" | "lg" | "sm" | null`,optional:!0,default:`"default"`}],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`defaultPressed`,`disabled`,`nativeButton`,`onPressedChange`,`pressed`,`render`,`style`,`value`]}]},{name:`toggleVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; outline: string; }; size: { default: string; sm: string; lg: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`ToggleProps`,kind:`type`}],example:{url:`https://hextaui.com/r/toggle-demo.json`,code:`import { IconBold, IconItalic, IconUnderline } from "@tabler/icons-react"

import { Toggle } from "@/components/vendor/hextaui/ui/toggle"

export function ToggleDemo() {
  return (
    <div className="flex items-center gap-1">
      <Toggle aria-label="Bold" defaultPressed>
        <IconBold />
      </Toggle>
      <Toggle aria-label="Italic">
        <IconItalic />
      </Toggle>
      <Toggle aria-label="Underline">
        <IconUnderline />
      </Toggle>
    </div>
  )
}
`},exampleNote:null}},docsField:`A button that stays on or off, with a fill that settles in when pressed, a clear hover-to-on step and icons that can… 主要导出：Toggle、toggleVariants。 最小用法：<Toggle />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/toggle.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-toggle.md。`,upstream:`https://hextaui.com/r/toggle.json`};export{e as default};