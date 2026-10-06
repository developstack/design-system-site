var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/combobox.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/combobox.tsx`,export:`ComboboxDemo`,example:`https://hextaui.com/r/combobox-demo.json`},note:{summaryZh:`组合框（通用组件）。`,importLine:`import { Combobox } from "@/components/vendor/hextaui/ui/combobox";`,usage:`<Combobox />`,exports:[{name:`Combobox`,kind:`component`,propsType:`Props<Value, Multiple, Item>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:38,names:[`actionsRef`,`autoComplete`,`autoHighlight`,`children`,`defaultInputValue`,`defaultOpen`,`defaultValue`,`disabled`,`filter`,`filteredItems`,`form`,`grid`]}]},{name:`ComboboxInput`,kind:`component`,propsType:`ComboboxInputProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`showTrigger`,type:`boolean`,optional:!0},{name:`showClear`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`@types/react`,count:304,names:[]},{package:`@base-ui/react`,count:3,names:[`disabled`,`render`,`style`]}]},{name:`ComboboxContent`,kind:`component`,propsType:`ComboboxContentProps`,inline:!1,union:!1,props:[{name:`align`,type:`Align`,optional:!0,default:`"start"`,from:`@base-ui/react`},{name:`alignOffset`,type:`number | OffsetFunction`,optional:!0,default:`0`,from:`@base-ui/react`},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`6`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:6,names:[`anchor`,`className`,`finalFocus`,`initialFocus`,`render`,`style`]}]},{name:`ComboboxList`,kind:`component`,propsType:`ComboboxListProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:4,names:[`children`,`className`,`render`,`style`]}]},{name:`ComboboxItem`,kind:`component`,propsType:`ComboboxItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:272,names:[]},{package:`@base-ui/react`,count:9,names:[`children`,`className`,`disabled`,`index`,`nativeButton`,`onClick`,`render`,`style`,`value`]}]},{name:`ComboboxGroup`,kind:`component`,propsType:`ComboboxGroupProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`items`,`render`,`style`]}]},{name:`ComboboxLabel`,kind:`component`,propsType:`ComboboxGroupLabelProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ComboboxCollection`,kind:`component`,propsType:`ComboboxCollectionProps`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:1,names:[`children`]}]},{name:`ComboboxEmpty`,kind:`component`,propsType:`ComboboxEmptyProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ComboboxStatus`,kind:`component`,propsType:`ComboboxStatusProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ComboboxSeparator`,kind:`component`,propsType:`ComboboxSeparatorProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`orientation`,`render`,`style`]}]},{name:`ComboboxChips`,kind:`component`,propsType:`ComboboxChipsProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:2,names:[`render`,`style`]}]},{name:`ComboboxChip`,kind:`component`,propsType:`ComboboxChipProps`,inline:!1,union:!1,props:[{name:`showRemove`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ComboboxChipsInput`,kind:`component`,propsType:`ComboboxInputProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:304,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`disabled`,`render`,`style`]}]},{name:`ComboboxTrigger`,kind:`component`,propsType:`ComboboxTriggerProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:5,names:[`className`,`disabled`,`nativeButton`,`render`,`style`]}]},{name:`ComboboxValue`,kind:`component`,propsType:`ComboboxValueProps`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:2,names:[`children`,`placeholder`]}]},{name:`ComboboxClear`,kind:`component`,propsType:`ComboboxClearProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:6,names:[`className`,`disabled`,`keepMounted`,`nativeButton`,`render`,`style`]}]},{name:`comboboxFieldVariants`,kind:`function`,signature:`(props?: ClassProp | undefined) => string`,params:[`props`],requiredParams:0},{name:`useComboboxAnchor`,kind:`hook`,signature:`() => RefObject<HTMLDivElement | null>`,params:[],requiredParams:0},{name:`useComboboxFilter`,kind:`hook`,signature:`(options?: UseComboboxFilterOptions | undefined) => Filter`,params:[`options`],requiredParams:0},{name:`useComboboxFilteredItems`,kind:`hook`,signature:`<T>() => T[]`,params:[],requiredParams:0},{name:`createComboboxItems`,kind:`function`,signature:`<Item, Value extends ComboboxPrimitiveValue>(data: (ComboboxItemsData<Item> & RejectGroupShapedItems<Item>) | undefined, options: CreateComboboxItemsOptions<Item, Value>) => ComboboxItemCollection<..…`,params:[`data`,`options`],requiredParams:2},{name:`ComboboxInputProps`,kind:`type`},{name:`ComboboxContentProps`,kind:`type`},{name:`ComboboxChipsProps`,kind:`type`},{name:`ComboboxChipProps`,kind:`type`}],example:{url:`https://hextaui.com/r/combobox-demo.json`,code:`"use client"

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/vendor/hextaui/ui/combobox"
import { Label } from "@/components/vendor/hextaui/ui/label"

const fruits = [
  "Apple",
  "Apricot",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Grape",
  "Grapefruit",
  "Kiwi",
  "Lychee",
  "Mango",
  "Orange",
  "Papaya",
  "Peach",
  "Pear",
  "Pineapple",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Watermelon",
]

export function ComboboxDemo() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Label htmlFor="combobox-demo">Fruit</Label>
      <Combobox items={fruits}>
        <ComboboxInput id="combobox-demo" placeholder="Select a fruit" />
        <ComboboxContent>
          <ComboboxEmpty>No fruit found.</ComboboxEmpty>
          <ComboboxList>
            {(item: string) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
`},exampleNote:null}},docsField:`A filterable select with chips, groups and async results, in a popup that… 主要导出：Combobox、ComboboxInput、ComboboxContent、ComboboxList 等。 最小用法：<Combobox />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/combobox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-combobox.md。`,upstream:`https://hextaui.com/r/combobox.json`};export{e as default};