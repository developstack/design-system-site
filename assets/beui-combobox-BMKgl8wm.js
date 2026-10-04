var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/combobox.tsx`,`components/vendor/beui/motion/combobox/content.tsx`,`components/vendor/beui/motion/combobox/context.tsx`,`components/vendor/beui/motion/combobox/list.tsx`,`components/vendor/beui/motion/combobox/trigger.tsx`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/motion/combobox/use-active-option.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/combobox.tsx`,export:`ComboboxPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/combobox.preview.tsx`},note:{summaryZh:`组合框（动效组件）。`,importLine:`import { Combobox } from "@/components/vendor/beui/motion/combobox";`,usage:`<Combobox>…</Combobox>`,exports:[{name:`ComboboxContent`,kind:`component`,propsType:`ComboboxContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`side`,type:`Side`,optional:!0,default:`"bottom"`},{name:`align`,type:`Align`,optional:!0,default:`"start"`},{name:`sideOffset`,type:`number`,optional:!0,default:`6`},{name:`avoidCollisions`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxContentProps`,kind:`type`},{name:`Combobox`,kind:`component`,propsType:`ComboboxProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`query`,type:`string`,optional:!0},{name:`defaultQuery`,type:`string`,optional:!0,default:`""`},{name:`onQueryChange`,type:`(query: string) => void`,optional:!0},{name:`filter`,type:`ComboboxFilter`,optional:!0,default:`defaultFilter`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxFilter`,kind:`type`},{name:`ComboboxProps`,kind:`type`},{name:`ComboboxEmpty`,kind:`component`,propsType:`ComboboxEmptyProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0,default:`"No options found."`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxEmptyProps`,kind:`type`},{name:`ComboboxGroup`,kind:`component`,propsType:`ComboboxGroupProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxGroupProps`,kind:`type`},{name:`ComboboxItem`,kind:`component`,propsType:`ComboboxItemProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`textValue`,type:`string`,optional:!0},{name:`keywords`,type:`string[]`,optional:!0,default:`[]`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`onSelect`,type:`(value: string) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxItemProps`,kind:`type`},{name:`ComboboxLabel`,kind:`component`,propsType:`ComboboxLabelProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxLabelProps`,kind:`type`},{name:`ComboboxList`,kind:`component`,propsType:`ComboboxListProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Options"`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxListProps`,kind:`type`},{name:`ComboboxSeparator`,kind:`component`,propsType:`ComboboxSeparatorProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxSeparatorProps`,kind:`type`},{name:`ComboboxInput`,kind:`component`,propsType:`ComboboxInputProps`,inline:!1,union:!1,props:[{name:`ref`,type:`Ref<HTMLInputElement>`,optional:!0},{name:`wrapperClassName`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0,default:`"Search options"`,from:`@types/react`},{name:`placeholder`,type:`string`,optional:!0,default:`"Search…"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:304,names:[]}]},{name:`ComboboxInputProps`,kind:`type`},{name:`ComboboxTrigger`,kind:`component`,propsType:`ComboboxTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxTriggerProps`,kind:`type`},{name:`ComboboxValue`,kind:`component`,propsType:`ComboboxValueProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`ReactNode`,optional:!0,default:`"Select an option"`},{name:`children`,type:`((value: string | undefined, label: string | undefined) => ReactNode) | ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ComboboxValueProps`,kind:`type`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/combobox.preview.tsx`,code:`"use client";

import { Blocks, Box, Component, Layers3 } from "lucide-react";
import { useState } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
} from "@/components/vendor/beui/motion/combobox";

const WORKSPACES = [
  {
    value: "studio",
    label: "Design studio",
    detail: "12 projects",
    group: "Recent",
    icon: Component,
    color: "bg-amber-400/20 text-amber-700 dark:text-amber-300",
  },
  {
    value: "product",
    label: "Product team",
    detail: "8 projects",
    group: "Recent",
    icon: Layers3,
    color: "bg-sky-400/20 text-sky-700 dark:text-sky-300",
  },
  {
    value: "playground",
    label: "Playground",
    detail: "24 experiments",
    group: "Workspaces",
    icon: Blocks,
    color: "bg-emerald-400/20 text-emerald-700 dark:text-emerald-300",
  },
  {
    value: "archive",
    label: "Component archive",
    detail: "41 components",
    group: "Workspaces",
    icon: Box,
    color: "bg-rose-400/20 text-rose-700 dark:text-rose-300",
  },
] as const;

function WorkspaceMark({ value }: { value: string }) {
  const workspace = WORKSPACES.find((item) => item.value === value);
  if (!workspace) return null;
  const Icon = workspace.icon;
  return (
    <span
      className={\`grid size-7 shrink-0 place-items-center rounded-lg \${workspace.color}\`}
    >
      <Icon className="size-3.5" />
    </span>
  );
}

export function ComboboxPreview() {
  const [value, setValue] = useState("studio");

  return (
    <div className="w-full max-w-72">
      <p className="mb-2 text-xs font-medium text-muted-foreground">
        Workspace
      </p>
      <Combobox value={value} onValueChange={setValue}>
        <ComboboxTrigger className="h-12 rounded-2xl px-2.5">
          <ComboboxInput
            aria-label="Search workspaces"
            placeholder="Search workspaces…"
          />
        </ComboboxTrigger>

        <ComboboxContent className="w-72 rounded-2xl">
          <ComboboxList ariaLabel="Workspaces" className="p-2">
            <ComboboxEmpty>No workspaces found.</ComboboxEmpty>
            {(["Recent", "Workspaces"] as const).map((group, groupIndex) => (
              <ComboboxGroup key={group}>
                {groupIndex > 0 ? <ComboboxSeparator /> : null}
                <ComboboxLabel>{group}</ComboboxLabel>
                {WORKSPACES.filter((item) => item.group === group).map(
                  (workspace) => (
                    <ComboboxItem
                      key={workspace.value}
                      value={workspace.value}
                      textValue={workspace.label}
                      keywords={[workspace.detail, workspace.group]}
                      className="py-2"
                    >
                      <span className="flex min-w-0 items-center gap-2.5">
                        <WorkspaceMark value={workspace.value} />
                        <span className="min-w-0">
                          <span className="block truncate font-medium text-foreground">
                            {workspace.label}
                          </span>
                          <span className="block truncate text-xs text-muted-foreground">
                            {workspace.detail}
                          </span>
                        </span>
                      </span>
                    </ComboboxItem>
                  ),
                )}
              </ComboboxGroup>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  );
}
`},exampleNote:null}},docsField:`Searchable combobox with a morphing portal, grouped filtering, keyboard… 主要导出：Combobox、ComboboxContent、ComboboxEmpty、ComboboxGroup 等。 最小用法：<Combobox>…</Combobox>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/combobox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-combobox.md。`,upstream:`https://beui.dev/r/combobox.json`};export{e as default};