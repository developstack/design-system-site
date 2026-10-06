var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/table/index.tsx`,`components/vendor/beui/motion/table/editable-cell.tsx`,`components/vendor/beui/motion/table/row-handle.tsx`,`components/vendor/beui/motion/table/skeleton-rows.tsx`,`components/vendor/beui/motion/table/table-header.tsx`,`components/vendor/beui/motion/table/types.ts`,`components/vendor/beui/motion/table/use-column-reorder.ts`,`components/vendor/beui/motion/table/use-column-resize.ts`,`components/vendor/beui/motion/table/use-column-sort.ts`,`components/vendor/beui/motion/table/use-row-selection.ts`,`components/vendor/beui/motion/table/utils.ts`,`components/vendor/beui/motion/checkbox.tsx`,`components/vendor/beui/motion/table/table-menu.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@tanstack/react-virtual`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/table.tsx`,export:`TablePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table.preview.tsx`},note:{summaryZh:`数据表格（动效组件）。`,importLine:`import { Table } from "@/components/vendor/beui/motion/table";`,usage:`<Table data={…} columns={…} />`,exports:[{name:`SortDirection`,kind:`type`},{name:`SortState`,kind:`type`},{name:`TableColumn`,kind:`type`},{name:`TableProps`,kind:`type`},{name:`Table`,kind:`component`,propsType:`TableProps<T>`,inline:!1,union:!1,props:[{name:`data`,type:`T[]`,optional:!1},{name:`columns`,type:`TableColumn<T>[]`,optional:!1},{name:`getRowId`,type:`(row: T, index: number) => string`,optional:!0,doc:`Stable id per row, required for correct selection across sorts. Defaults to row index.`},{name:`selectable`,type:`boolean`,optional:!0,default:`false`,doc:`Render a leading checkbox column with select-all in the header.`},{name:`selectedRowIds`,type:`string[]`,optional:!0},{name:`defaultSelectedRowIds`,type:`string[]`,optional:!0},{name:`onSelectionChange`,type:`(ids: string[]) => void`,optional:!0},{name:`sort`,type:`SortState | null`,optional:!0},{name:`defaultSort`,type:`SortState | null`,optional:!0,default:`null`},{name:`onSortChange`,type:`(sort: SortState | null) => void`,optional:!0},{name:`resizable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging the right edge of a header to resize that column.`},{name:`minColumnWidth`,type:`number`,optional:!0,default:`64`,doc:`Minimum column width in px when resizing.`},{name:`onColumnResize`,type:`(key: string, width: number) => void`,optional:!0},{name:`reorderable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging a header grip to reorder columns.`},{name:`onColumnOrderChange`,type:`(keys: string[]) => void`,optional:!0},{name:`onCellEdit`,type:`(rowId: string, columnKey: string, value: string) => void`,optional:!0,doc:"Called when an `editable` cell changes."},{name:`onColumnRename`,type:`(columnKey: string, value: string) => void`,optional:!0,doc:`When set, non-sortable headers become editable inputs for the column name.`},{name:`onInsertRow`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the row menu (Insert before / after). Receives the target index.`},{name:`onDeleteRow`,type:`(rowId: string, index: number) => void`,optional:!0,doc:`Enables Delete in the row menu.`},{name:`onInsertColumn`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the column menu (Insert before / after). Receives the target column index.`},{name:`onDeleteColumn`,type:`(columnKey: string, index: number) => void`,optional:!0,doc:`Enables Delete in the column menu.`},{name:`rowHeight`,type:`number`,optional:!0,default:`48`,doc:`Fixed row height in px — required for virtualization.`},{name:`height`,type:`number`,optional:!0,default:`440`,doc:`Scroll viewport height in px.`},{name:`overscan`,type:`number`,optional:!0,default:`10`,doc:`Rows rendered above/below the viewport.`},{name:`onEndReached`,type:`() => void`,optional:!0,doc:`Fires when the viewport scrolls near the bottom — load the next page.`},{name:`loading`,type:`boolean`,optional:!0,default:`false`,doc:"Currently fetching — shows skeleton rows and pauses `onEndReached`."},{name:`skeletonRows`,type:`number`,optional:!0,default:`3`,doc:`How many skeleton rows to show while loading more (default 3).`},{name:`emptyState`,type:`ReactNode`,optional:!0,default:`"No data"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table.preview.tsx`,code:`"use client";

import { useMemo, useState } from "react";
import { Table, type TableColumn } from "@/components/vendor/beui/motion/table";
import { cn } from "@/lib/utils";

type Person = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "invited" | "suspended";
  mrr: number;
};

const FIRST = [
  "Ava",
  "Leo",
  "Mia",
  "Kai",
  "Zoe",
  "Eli",
  "Noa",
  "Ren",
  "Ivy",
  "Jude",
];
const LAST = [
  "Cole",
  "Frost",
  "Vale",
  "Reyes",
  "Okafor",
  "Sato",
  "Lund",
  "Marsh",
  "Bose",
  "Quinn",
];
const ROLES = ["Owner", "Admin", "Member", "Viewer"];
const STATUSES: Person["status"][] = ["active", "invited", "suspended"];

// Deterministic so SSR and client render the same rows (no hydration drift).
function buildPeople(count: number): Person[] {
  const out: Person[] = [];
  for (let i = 0; i < count; i++) {
    const first = FIRST[i % FIRST.length];
    const last = LAST[(i * 7) % LAST.length];
    out.push({
      id: String(i),
      name: \`\${first} \${last}\`,
      email: \`\${first.toLowerCase()}.\${last.toLowerCase()}\${i}@beui.dev\`,
      role: ROLES[(i * 3) % ROLES.length],
      status: STATUSES[(i * 5) % STATUSES.length],
      mrr: 12 + ((i * 37) % 488),
    });
  }
  return out;
}

const STATUS_STYLES: Record<Person["status"], string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  invited: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  suspended: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

function StatusBadge({ status }: { status: Person["status"] }) {
  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 font-medium text-xs capitalize",
        STATUS_STYLES[status],
      )}
    >
      {status}
    </span>
  );
}

export function TablePreview() {
  const data = useMemo(() => buildPeople(10_000), []);
  const [selected, setSelected] = useState<string[]>([]);

  const columns = useMemo<TableColumn<Person>[]>(
    () => [
      {
        key: "name",
        header: "Name",
        sortable: true,
        width: "1.4fr",
        cell: (row) => <span className="font-medium">{row.name}</span>,
      },
      { key: "email", header: "Email", width: "1.8fr" },
      { key: "role", header: "Role", sortable: true, width: "120px" },
      {
        key: "status",
        header: "Status",
        width: "130px",
        cell: (row) => <StatusBadge status={row.status} />,
      },
      {
        key: "mrr",
        header: "MRR",
        sortable: true,
        align: "right",
        width: "110px",
        cell: (row) => (
          <span className="tabular-nums">\${row.mrr.toLocaleString()}</span>
        ),
      },
    ],
    [],
  );

  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between px-1 text-muted-foreground text-xs">
          <span>{data.length.toLocaleString()} rows</span>
          {selected.length > 0 ? (
            <span>{selected.length.toLocaleString()} selected</span>
          ) : null}
        </div>
        <Table
          data={data}
          columns={columns}
          selectable
          resizable
          reorderable
          selectedRowIds={selected}
          onSelectionChange={setSelected}
          defaultSort={{ key: "mrr", direction: "desc" }}
          height={420}
          rowHeight={52}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`10k virtualized rows with sortable headers, row selection, column resize and reorder. 主要导出：Table。 最小用法：<Table data={…} columns={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/table.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-table.md。`,upstream:`https://beui.dev/r/table.json`};export{e as default};