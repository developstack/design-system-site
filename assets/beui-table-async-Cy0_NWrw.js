var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/table/index.tsx`,`components/vendor/beui/motion/table/editable-cell.tsx`,`components/vendor/beui/motion/table/row-handle.tsx`,`components/vendor/beui/motion/table/skeleton-rows.tsx`,`components/vendor/beui/motion/table/table-header.tsx`,`components/vendor/beui/motion/table/types.ts`,`components/vendor/beui/motion/table/use-column-reorder.ts`,`components/vendor/beui/motion/table/use-column-resize.ts`,`components/vendor/beui/motion/table/use-column-sort.ts`,`components/vendor/beui/motion/table/use-row-selection.ts`,`components/vendor/beui/motion/table/utils.ts`,`components/vendor/beui/motion/checkbox.tsx`,`components/vendor/beui/motion/table/table-menu.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@tanstack/react-virtual`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/table-async.tsx`,export:`TableAsyncPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table-async.preview.tsx`},note:{summaryZh:`表格（动效组件）。`,importLine:`import { Table } from "@/components/vendor/beui/motion/table";`,usage:`<Table data={…} columns={…} />`,exports:[{name:`SortDirection`,kind:`type`},{name:`SortState`,kind:`type`},{name:`TableColumn`,kind:`type`},{name:`TableProps`,kind:`type`},{name:`Table`,kind:`component`,propsType:`TableProps<T>`,inline:!1,union:!1,props:[{name:`data`,type:`T[]`,optional:!1},{name:`columns`,type:`TableColumn<T>[]`,optional:!1},{name:`getRowId`,type:`(row: T, index: number) => string`,optional:!0,doc:`Stable id per row, required for correct selection across sorts. Defaults to row index.`},{name:`selectable`,type:`boolean`,optional:!0,default:`false`,doc:`Render a leading checkbox column with select-all in the header.`},{name:`selectedRowIds`,type:`string[]`,optional:!0},{name:`defaultSelectedRowIds`,type:`string[]`,optional:!0},{name:`onSelectionChange`,type:`(ids: string[]) => void`,optional:!0},{name:`sort`,type:`SortState | null`,optional:!0},{name:`defaultSort`,type:`SortState | null`,optional:!0,default:`null`},{name:`onSortChange`,type:`(sort: SortState | null) => void`,optional:!0},{name:`resizable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging the right edge of a header to resize that column.`},{name:`minColumnWidth`,type:`number`,optional:!0,default:`64`,doc:`Minimum column width in px when resizing.`},{name:`onColumnResize`,type:`(key: string, width: number) => void`,optional:!0},{name:`reorderable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging a header grip to reorder columns.`},{name:`onColumnOrderChange`,type:`(keys: string[]) => void`,optional:!0},{name:`onCellEdit`,type:`(rowId: string, columnKey: string, value: string) => void`,optional:!0,doc:"Called when an `editable` cell changes."},{name:`onColumnRename`,type:`(columnKey: string, value: string) => void`,optional:!0,doc:`When set, non-sortable headers become editable inputs for the column name.`},{name:`onInsertRow`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the row menu (Insert before / after). Receives the target index.`},{name:`onDeleteRow`,type:`(rowId: string, index: number) => void`,optional:!0,doc:`Enables Delete in the row menu.`},{name:`onInsertColumn`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the column menu (Insert before / after). Receives the target column index.`},{name:`onDeleteColumn`,type:`(columnKey: string, index: number) => void`,optional:!0,doc:`Enables Delete in the column menu.`},{name:`rowHeight`,type:`number`,optional:!0,default:`48`,doc:`Fixed row height in px — required for virtualization.`},{name:`height`,type:`number`,optional:!0,default:`440`,doc:`Scroll viewport height in px.`},{name:`overscan`,type:`number`,optional:!0,default:`10`,doc:`Rows rendered above/below the viewport.`},{name:`onEndReached`,type:`() => void`,optional:!0,doc:`Fires when the viewport scrolls near the bottom — load the next page.`},{name:`loading`,type:`boolean`,optional:!0,default:`false`,doc:"Currently fetching — shows skeleton rows and pauses `onEndReached`."},{name:`skeletonRows`,type:`number`,optional:!0,default:`3`,doc:`How many skeleton rows to show while loading more (default 3).`},{name:`emptyState`,type:`ReactNode`,optional:!0,default:`"No data"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table-async.preview.tsx`,code:`"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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

const FIRST = ["Ava", "Leo", "Mia", "Kai", "Zoe", "Eli", "Noa", "Ren", "Ivy", "Jude"];
const LAST = ["Cole", "Frost", "Vale", "Reyes", "Okafor", "Sato", "Lund", "Marsh", "Bose", "Quinn"];
const ROLES = ["Owner", "Admin", "Member", "Viewer"];
const STATUSES: Person["status"][] = ["active", "invited", "suspended"];

const PAGE_SIZE = 20;
const MAX_PAGES = 8;

function buildPage(page: number): Person[] {
  const out: Person[] = [];
  const start = page * PAGE_SIZE;
  for (let n = start; n < start + PAGE_SIZE; n++) {
    const first = FIRST[n % FIRST.length];
    const last = LAST[(n * 7) % LAST.length];
    out.push({
      id: String(n),
      name: \`\${first} \${last}\`,
      email: \`\${first.toLowerCase()}.\${last.toLowerCase()}\${n}@beui.dev\`,
      role: ROLES[(n * 3) % ROLES.length],
      status: STATUSES[(n * 5) % STATUSES.length],
      mrr: 12 + ((n * 37) % 488),
    });
  }
  return out;
}

const STATUS_STYLES: Record<Person["status"], string> = {
  active: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  invited: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  suspended: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
};

export function TableAsyncPreview() {
  const [rows, setRows] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const pageRef = useRef(0);
  const loadingRef = useRef(false);

  const loadMore = useCallback(() => {
    if (loadingRef.current || pageRef.current >= MAX_PAGES) return;
    loadingRef.current = true;
    setLoading(true);
    // Simulate a network request.
    setTimeout(() => {
      const page = pageRef.current;
      setRows((prev) => [...prev, ...buildPage(page)]);
      pageRef.current = page + 1;
      loadingRef.current = false;
      setLoading(false);
    }, 700);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: run once on mount
  useEffect(() => {
    loadMore();
  }, []);

  const columns = useMemo<TableColumn<Person>[]>(
    () => [
      {
        key: "name",
        header: "Name",
        cell: (r) => <span className="font-medium">{r.name}</span>,
      },
      { key: "email", header: "Email", width: "220px" },
      { key: "role", header: "Role", width: "110px" },
      {
        key: "status",
        header: "Status",
        width: "120px",
        cell: (r) => (
          <span
            className={cn(
              "rounded-full px-2 py-0.5 font-medium text-xs capitalize",
              STATUS_STYLES[r.status],
            )}
          >
            {r.status}
          </span>
        ),
      },
      {
        key: "mrr",
        header: "MRR",
        align: "right",
        width: "100px",
        cell: (r) => <span className="tabular-nums">\${r.mrr.toLocaleString()}</span>,
      },
    ],
    [],
  );

  const done = pageRef.current >= MAX_PAGES;

  return (
    <div className="flex w-full justify-center p-4">
      <div className="flex w-full flex-col gap-2">
        <div className="flex items-center justify-between px-1 text-muted-foreground text-xs">
          <span>{rows.length.toLocaleString()} loaded</span>
          <span>{loading ? "Loading…" : done ? "All loaded" : "Scroll for more"}</span>
        </div>
        <Table
          data={rows}
          columns={columns}
          getRowId={(row) => row.id}
          height={420}
          rowHeight={52}
          onEndReached={loadMore}
          loading={loading}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Loads pages on demand — skeleton rows on first load, then infinite scroll via onEndReached as the virtualized list nears the bottom. 主要导出：Table。 最小用法：<Table data={…} columns={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-table-async.md。`,upstream:`https://beui.dev/r/table-async.json`};export{e as default};