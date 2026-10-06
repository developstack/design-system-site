var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/select.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/select.tsx`,export:`SelectDemo`,example:`https://hextaui.com/r/select-demo.json`},note:{summaryZh:`下拉选择（通用组件）。`,importLine:`import { Select } from "@/components/vendor/hextaui/ui/select";`,usage:`<Select />`,exports:[{name:`Select`,kind:`component`,propsType:`Props<Value, Multiple>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:24,names:[`actionsRef`,`autoComplete`,`children`,`defaultOpen`,`defaultValue`,`disabled`,`form`,`highlightItemOnHover`,`id`,`inputRef`,`isItemEqualToValue`,`itemToStringLabel`]}]},{name:`SelectContent`,kind:`component`,propsType:`SelectContentProps`,inline:!1,union:!1,props:[{name:`align`,type:`Align`,optional:!0,default:`"start"`,from:`@base-ui/react`},{name:`alignItemWithTrigger`,type:`boolean`,optional:!0,default:`true`,from:`@base-ui/react`},{name:`alignOffset`,type:`number | OffsetFunction`,optional:!0,default:`0`,from:`@base-ui/react`},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`6`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:5,names:[`children`,`className`,`finalFocus`,`render`,`style`]}]},{name:`SelectGroup`,kind:`component`,propsType:`SelectGroupProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`SelectItem`,kind:`component`,propsType:`SelectItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`@base-ui/react`,count:8,names:[`children`,`className`,`disabled`,`label`,`nativeButton`,`render`,`style`,`value`]}]},{name:`SelectLabel`,kind:`component`,propsType:`SelectGroupLabelProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`SelectScrollDownButton`,kind:`component`,propsType:`SelectScrollDownArrowProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`keepMounted`,`render`,`style`]}]},{name:`SelectScrollUpButton`,kind:`component`,propsType:`SelectScrollUpArrowProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`keepMounted`,`render`,`style`]}]},{name:`SelectSeparator`,kind:`component`,propsType:`SelectSeparatorProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`orientation`,`render`,`style`]}]},{name:`SelectTrigger`,kind:`component`,propsType:`SelectTriggerProps`,inline:!1,union:!1,props:[{name:`size`,type:`"default" | "lg" | "sm"`,optional:!0,default:`"default"`}],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:6,names:[`children`,`className`,`disabled`,`nativeButton`,`render`,`style`]}]},{name:`SelectValue`,kind:`component`,propsType:`SelectValueProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:5,names:[`children`,`className`,`placeholder`,`render`,`style`]}]},{name:`selectTriggerVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ size: { sm: string; default: string; lg: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`SelectContentProps`,kind:`type`},{name:`SelectTriggerProps`,kind:`type`}],example:{url:`https://hextaui.com/r/select-demo.json`,code:`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/vendor/hextaui/ui/select"

const fonts = [
  { value: "inter", label: "Inter" },
  { value: "geist", label: "Geist" },
  { value: "ibm-plex", label: "IBM Plex Sans" },
  { value: "source-serif", label: "Source Serif" },
  { value: "jetbrains", label: "JetBrains Mono" },
]

export function SelectDemo() {
  return (
    <Select items={fonts} defaultValue="geist">
      <SelectTrigger aria-label="Font" className="w-48">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {fonts.map((font) => (
          <SelectItem key={font.value} value={font.value}>
            {font.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
`},exampleNote:null}},docsField:`Pick one or more options from a list that opens on the current value, with typeahead, grou… 主要导出：Select、SelectContent、SelectGroup、SelectItem 等。 最小用法：<Select />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/select.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-select.md。`,upstream:`https://hextaui.com/r/select.json`};export{e as default};