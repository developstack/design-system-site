var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/sortable-list.tsx`,`components/vendor/beui/motion/sortable-stack.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/sortable-stack.tsx`,export:`SortableListPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/sortable-stack.preview.tsx`},note:{summaryZh:`列表（动效组件）。`,importLine:`import { SortableList } from "@/components/vendor/beui/motion/sortable-list";`,usage:`<SortableList getItemLabel={…} />`,exports:[{name:`useSortableList`,doc:`Shared ordering and undo actions for custom list controls.`,kind:`hook`,signature:`() => { ids: string[]; disabled: boolean; canUndo: boolean; moveItem: (id: string, direction: MoveDirection) => void; undo: () => void; }`,params:[],requiredParams:0},{name:`SortableListProps`,kind:`type`},{name:`SortableList`,doc:`Stable item ids keep focus and content attached to their row during sorting.`,kind:`component`,propsType:`SortableListProps<T>`,inline:!1,union:!1,props:[{name:`items`,type:`T[]`,optional:!0},{name:`defaultItems`,type:`T[]`,optional:!0,default:`[]`},{name:`onItemsChange`,type:`(items: T[]) => void`,optional:!0},{name:`renderItem`,type:`(item: T, index: number) => ReactNode`,optional:!0,doc:`Convenience row contents when children are omitted.`},{name:`getItemLabel`,type:`(item: T) => string`,optional:!1},{name:`children`,type:`((items: T[]) => ReactNode) | ReactNode`,optional:!0,doc:`Compose parts; the render function receives items in their current order.`},{name:`label`,type:`string`,optional:!0,default:`"Sortable items"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`showUndo`,type:`boolean`,optional:!0,default:`true`,doc:`Show the automatic undo button in the convenience composition.`},{name:`className`,type:`string`,optional:!0},{name:`itemClassName`,type:`string`,optional:!0}],inherited:[]},{name:`SortableListGroupProps`,kind:`type`},{name:`SortableListGroup`,doc:`The ordered rows; keep headers and footer controls outside this group.`,kind:`component`,propsType:`SortableListGroupProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`SortableListItemProps`,kind:`type`},{name:`SortableListItem`,kind:`component`,propsType:`SortableListItemProps`,inline:!1,union:!1,props:[{name:`id`,type:`string`,optional:!1,doc:`Identity of an item supplied to the root. Use it as the React key too.`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`SortableListHandleProps`,kind:`type`},{name:`SortableListHandle`,kind:`component`,propsType:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:290,names:[]}]},{name:`SortableListItemContentProps`,kind:`type`},{name:`SortableListItemContent`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`SortableListUndoProps`,kind:`type`},{name:`SortableListUndo`,kind:`component`,propsType:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:290,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/sortable-stack.preview.tsx`,code:`"use client";

import { Circle, FileText, Layers, Palette, Rocket } from "lucide-react";
import {
  SortableList,
  SortableListGroup,
  SortableListItem,
  SortableListHandle,
  SortableListItemContent,
  SortableListUndo,
} from "@/components/vendor/beui/motion/sortable-list";

const tasks = [
  {
    id: "research",
    title: "Collect references",
    detail: "Find the right direction",
    icon: FileText,
    color: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    id: "design",
    title: "Explore the visual system",
    detail: "Type, color, and composition",
    icon: Palette,
    color: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
  {
    id: "build",
    title: "Build the first prototype",
    detail: "Make the interaction tangible",
    icon: Layers,
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    id: "ship",
    title: "Ship something useful",
    detail: "Polish the details and release",
    icon: Rocket,
    color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export function SortableListPreview() {
  return (
    <div className="w-full max-w-md">
      <div className="mb-5 flex items-end justify-between gap-4 px-1">
        <div>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            In the studio
          </p>
          <h3 className="text-lg font-medium tracking-tight">
            Make room for what matters.
          </h3>
        </div>
        <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
          04 tasks
        </span>
      </div>
      <SortableList
        defaultItems={tasks}
        label="Studio priorities"
        getItemLabel={(item) => item.title}
      >
        {(items) => (
          <>
            <SortableListGroup>
              {items.map((item, index) => (
                <SortableListItem key={item.id} id={item.id}>
                  <SortableListHandle />
                  <SortableListItemContent>
                    <div className="flex items-center gap-3">
                      <span
                        className={\`flex size-10 shrink-0 items-center justify-center rounded-xl \${item.color}\`}
                      >
                        <item.icon size={18} aria-hidden="true" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                      <span className="text-[10px] tabular-nums text-muted-foreground">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Circle
                        size={14}
                        className="text-border"
                        aria-hidden="true"
                      />
                    </div>
                  </SortableListItemContent>
                </SortableListItem>
              ))}
            </SortableListGroup>
            <SortableListUndo />
          </>
        )}
      </SortableList>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable sortable list with group, item, dr… 主要导出：SortableList、useSortableList、SortableListGroup、SortableListItem 等。 最小用法：<SortableList getItemLabel={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/list.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-sortable-stack.md。`,upstream:`https://beui.dev/r/sortable-stack.json`};export{e as default};