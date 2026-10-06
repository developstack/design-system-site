var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/radio-group.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`cn`],registryDependencies:[`@developstack/hextaui-motion`],preview:{kind:`example`,module:`examples/hextaui/radio-group.tsx`,export:`RadioGroupDemo`,example:`https://hextaui.com/r/radio-group-demo.json`},note:{summaryZh:`单选组（通用组件）。`,importLine:`import { RadioGroup } from "@/components/vendor/hextaui/ui/radio-group";`,usage:`<RadioGroup />`,exports:[{name:`RadioGroup`,kind:`component`,propsType:`RadioGroupProps<Value>`,inline:!1,union:!1,props:[{name:`variant`,type:`RadioGroupVariant`,optional:!0,default:`"default"`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:12,names:[`className`,`defaultValue`,`disabled`,`form`,`inputRef`,`name`,`onValueChange`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`RadioGroupCard`,kind:`component`,propsType:`RadioGroupCardProps`,inline:!1,union:!1,props:[{name:`radioClassName`,type:`string | ((state: RadioRootState) => string | undefined)`,optional:!0}],inherited:[{package:`@types/react`,count:281,names:[]},{package:`@base-ui/react`,count:5,names:[`disabled`,`inputRef`,`readOnly`,`required`,`value`]}]},{name:`RadioGroupCardDescription`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`RadioGroupCardTitle`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`RadioGroupItem`,kind:`component`,propsType:`Props<any>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`disabled`,`inputRef`,`nativeButton`,`readOnly`,`render`,`required`,`style`,`value`]}]},{name:`radioGroupItemClassName`,kind:`constant`,type:`"peer relative inline-flex size-4 shrink-0 items-center justify-center rounded-full bg-background t…`},{name:`RadioGroupCardProps`,kind:`type`},{name:`RadioGroupProps`,kind:`type`},{name:`RadioGroupVariant`,kind:`type`}],example:{url:`https://hextaui.com/r/radio-group-demo.json`,code:`import { RadioGroup, RadioGroupItem } from "@/components/vendor/hextaui/ui/radio-group"

const options = [
  { value: "all", label: "All new messages" },
  { value: "mentions", label: "Direct messages and mentions" },
  { value: "none", label: "Nothing" },
]

export function RadioGroupDemo() {
  return (
    <RadioGroup
      aria-label="Notify me about"
      defaultValue="mentions"
      className="w-fit"
    >
      {options.map((option) => (
        <label key={option.value} className="flex items-center gap-3 text-sm">
          <RadioGroupItem value={option.value} />
          {option.label}
        </label>
      ))}
    </RadioGroup>
  )
}
`},exampleNote:null}},docsField:`Pick one option from a set, with a dot that hands off… 主要导出：RadioGroup、RadioGroupCard、RadioGroupCardDescription、RadioGroupCardTitle 等。 最小用法：<RadioGroup />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/radio.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-radio-group.md。`,upstream:`https://hextaui.com/r/radio-group.json`};export{e as default};