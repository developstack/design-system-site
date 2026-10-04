var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/multi-select/index.tsx`,`components/vendor/beui/motion/multi-select/context.tsx`,`components/vendor/beui/motion/multi-select/trigger.tsx`,`components/vendor/beui/motion/multi-select/content.tsx`,`components/vendor/beui/motion/multi-select/list.tsx`,`components/vendor/beui/motion/combobox/use-active-option.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/multi-select.tsx`,export:`MultiSelectPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/multi-select.preview.tsx`},note:{summaryZh:`多选下拉框（动效组件）。`,importLine:`import { MultiSelect } from "@/components/vendor/beui/motion/multi-select";`,usage:`<MultiSelect>…</MultiSelect>`,exports:[{name:`MultiSelect`,kind:`component`,propsType:`MultiSelectProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`value`,type:`string[]`,optional:!0},{name:`defaultValue`,type:`string[]`,optional:!0,default:`[]`},{name:`onValueChange`,type:`(value: string[]) => void`,optional:!0},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`query`,type:`string`,optional:!0},{name:`defaultQuery`,type:`string`,optional:!0,default:`""`},{name:`onQueryChange`,type:`(query: string) => void`,optional:!0},{name:`filter`,type:`MultiSelectFilter`,optional:!0,default:`defaultFilter`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectFilter`,kind:`type`},{name:`MultiSelectProps`,kind:`type`},{name:`MultiSelectInput`,kind:`component`,propsType:`MultiSelectInputProps`,inline:!1,union:!1,props:[{name:`ref`,type:`Ref<HTMLInputElement>`,optional:!0},{name:`showIcon`,type:`boolean`,optional:!0,default:`false`},{name:`aria-label`,type:`string`,optional:!0,default:`"Search options"`,from:`@types/react`},{name:`placeholder`,type:`string`,optional:!0,default:`"Search…"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:304,names:[]}]},{name:`MultiSelectInputProps`,kind:`type`},{name:`MultiSelectTrigger`,kind:`component`,propsType:`MultiSelectTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectTriggerProps`,kind:`type`},{name:`MultiSelectValue`,kind:`component`,propsType:`MultiSelectValueProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`ReactNode`,optional:!0,default:`"Select options"`},{name:`children`,type:`(value: string, label: string) => ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`chipClassName`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectValueProps`,kind:`type`},{name:`MultiSelectContent`,kind:`component`,propsType:`MultiSelectContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`},{name:`align`,type:`Align`,optional:!0,default:`"start"`},{name:`sideOffset`,type:`number`,optional:!0,default:`6`},{name:`avoidCollisions`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectContentProps`,kind:`type`},{name:`MultiSelectEmpty`,kind:`component`,propsType:`MultiSelectEmptyProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0,default:`"No options found."`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectEmptyProps`,kind:`type`},{name:`MultiSelectGroup`,kind:`component`,propsType:`MultiSelectGroupProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectGroupProps`,kind:`type`},{name:`MultiSelectItem`,kind:`component`,propsType:`MultiSelectItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`textValue`,type:`string`,optional:!0},{name:`keywords`,type:`string[]`,optional:!0,default:`[]`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`onSelect`,type:`(value: string) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectItemProps`,kind:`type`},{name:`MultiSelectLabel`,kind:`component`,propsType:`MultiSelectLabelProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectLabelProps`,kind:`type`},{name:`MultiSelectList`,kind:`component`,propsType:`MultiSelectListProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Options"`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectListProps`,kind:`type`},{name:`MultiSelectSeparator`,kind:`component`,propsType:`MultiSelectSeparatorProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`MultiSelectSeparatorProps`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/multi-select.preview.tsx`,code:`"use client";

import { Circle } from "lucide-react";
import {
  MultiSelect,
  MultiSelectContent,
  MultiSelectEmpty,
  MultiSelectGroup,
  MultiSelectInput,
  MultiSelectItem,
  MultiSelectLabel,
  MultiSelectList,
  MultiSelectTrigger,
  MultiSelectValue,
} from "@/components/vendor/beui/motion/multi-select";

const colors = {
  design: "fill-rose-500 text-rose-500",
  engineering: "fill-sky-500 text-sky-500",
  product: "fill-amber-500 text-amber-500",
  research: "fill-violet-500 text-violet-500",
  marketing: "fill-emerald-500 text-emerald-500",
  operations: "fill-slate-500 text-slate-500",
};

function Option({
  value,
  children,
}: {
  value: keyof typeof colors;
  children: string;
}) {
  return (
    <MultiSelectItem value={value} textValue={children}>
      <span className="flex items-center gap-2.5">
        <Circle aria-hidden="true" className={\`size-2.5 \${colors[value]}\`} />
        {children}
      </span>
    </MultiSelectItem>
  );
}

export function MultiSelectPreview() {
  return (
    <div className="flex min-h-[420px] w-full items-start justify-center px-4 pt-24">
      <div className="w-full max-w-sm">
        <MultiSelect defaultValue={["design", "engineering"]}>
          <MultiSelectTrigger>
            <MultiSelectValue placeholder="Choose teams" />
            <MultiSelectInput aria-label="Search teams" />
          </MultiSelectTrigger>
          <MultiSelectContent>
            <MultiSelectList ariaLabel="Teams">
              <MultiSelectGroup>
                <MultiSelectLabel>Product teams</MultiSelectLabel>
                <Option value="design">Design</Option>
                <Option value="engineering">Engineering</Option>
                <Option value="product">Product</Option>
                <Option value="research">Research</Option>
              </MultiSelectGroup>
              <MultiSelectGroup>
                <MultiSelectLabel>Business teams</MultiSelectLabel>
                <Option value="marketing">Marketing</Option>
                <Option value="operations">Operations</Option>
              </MultiSelectGroup>
              <MultiSelectEmpty>No teams found.</MultiSelectEmpty>
            </MultiSelectList>
          </MultiSelectContent>
        </MultiSelect>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable multi-select primitives with sear… 主要导出：MultiSelect、MultiSelectInput、MultiSelectTrigger、MultiSelectValue 等。 最小用法：<MultiSelect>…</MultiSelect>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/combobox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-multi-select.md。`,upstream:`https://beui.dev/r/multi-select.json`};export{e as default};