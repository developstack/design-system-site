var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/table/index.tsx`,`components/vendor/beui/motion/table/editable-cell.tsx`,`components/vendor/beui/motion/table/row-handle.tsx`,`components/vendor/beui/motion/table/skeleton-rows.tsx`,`components/vendor/beui/motion/table/table-header.tsx`,`components/vendor/beui/motion/table/types.ts`,`components/vendor/beui/motion/table/use-column-reorder.ts`,`components/vendor/beui/motion/table/use-column-resize.ts`,`components/vendor/beui/motion/table/use-column-sort.ts`,`components/vendor/beui/motion/table/use-row-selection.ts`,`components/vendor/beui/motion/table/utils.ts`,`components/vendor/beui/motion/checkbox.tsx`,`components/vendor/beui/motion/table/table-menu.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@tanstack/react-virtual`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/table-editable.tsx`,export:`TableEditablePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table-editable.preview.tsx`},note:{summaryZh:`表格（动效组件）。`,importLine:`import { Table } from "@/components/vendor/beui/motion/table";`,usage:`<Table data={…} columns={…} />`,exports:[{name:`SortDirection`,kind:`type`},{name:`SortState`,kind:`type`},{name:`TableColumn`,kind:`type`},{name:`TableProps`,kind:`type`},{name:`Table`,kind:`component`,propsType:`TableProps<T>`,inline:!1,union:!1,props:[{name:`data`,type:`T[]`,optional:!1},{name:`columns`,type:`TableColumn<T>[]`,optional:!1},{name:`getRowId`,type:`(row: T, index: number) => string`,optional:!0,doc:`Stable id per row, required for correct selection across sorts. Defaults to row index.`},{name:`selectable`,type:`boolean`,optional:!0,default:`false`,doc:`Render a leading checkbox column with select-all in the header.`},{name:`selectedRowIds`,type:`string[]`,optional:!0},{name:`defaultSelectedRowIds`,type:`string[]`,optional:!0},{name:`onSelectionChange`,type:`(ids: string[]) => void`,optional:!0},{name:`sort`,type:`SortState | null`,optional:!0},{name:`defaultSort`,type:`SortState | null`,optional:!0,default:`null`},{name:`onSortChange`,type:`(sort: SortState | null) => void`,optional:!0},{name:`resizable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging the right edge of a header to resize that column.`},{name:`minColumnWidth`,type:`number`,optional:!0,default:`64`,doc:`Minimum column width in px when resizing.`},{name:`onColumnResize`,type:`(key: string, width: number) => void`,optional:!0},{name:`reorderable`,type:`boolean`,optional:!0,default:`false`,doc:`Allow dragging a header grip to reorder columns.`},{name:`onColumnOrderChange`,type:`(keys: string[]) => void`,optional:!0},{name:`onCellEdit`,type:`(rowId: string, columnKey: string, value: string) => void`,optional:!0,doc:"Called when an `editable` cell changes."},{name:`onColumnRename`,type:`(columnKey: string, value: string) => void`,optional:!0,doc:`When set, non-sortable headers become editable inputs for the column name.`},{name:`onInsertRow`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the row menu (Insert before / after). Receives the target index.`},{name:`onDeleteRow`,type:`(rowId: string, index: number) => void`,optional:!0,doc:`Enables Delete in the row menu.`},{name:`onInsertColumn`,type:`(index: number, position: InsertPosition) => void`,optional:!0,doc:`Enables the column menu (Insert before / after). Receives the target column index.`},{name:`onDeleteColumn`,type:`(columnKey: string, index: number) => void`,optional:!0,doc:`Enables Delete in the column menu.`},{name:`rowHeight`,type:`number`,optional:!0,default:`48`,doc:`Fixed row height in px — required for virtualization.`},{name:`height`,type:`number`,optional:!0,default:`440`,doc:`Scroll viewport height in px.`},{name:`overscan`,type:`number`,optional:!0,default:`10`,doc:`Rows rendered above/below the viewport.`},{name:`onEndReached`,type:`() => void`,optional:!0,doc:`Fires when the viewport scrolls near the bottom — load the next page.`},{name:`loading`,type:`boolean`,optional:!0,default:`false`,doc:"Currently fetching — shows skeleton rows and pauses `onEndReached`."},{name:`skeletonRows`,type:`number`,optional:!0,default:`3`,doc:`How many skeleton rows to show while loading more (default 3).`},{name:`emptyState`,type:`ReactNode`,optional:!0,default:`"No data"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/table-editable.preview.tsx`,code:`"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { Switch } from "@/components/vendor/beui/motion/switch";
import { Table, type TableColumn } from "@/components/vendor/beui/motion/table";

type Row = { id: string; [key: string]: string };

const INITIAL_ROWS: Row[] = [
  { id: "r1", name: "Ava Cole", role: "Owner", team: "Design" },
  { id: "r2", name: "Leo Frost", role: "Admin", team: "Growth" },
  { id: "r3", name: "Mia Vale", role: "Member", team: "Design" },
  { id: "r4", name: "Kai Reyes", role: "Member", team: "Platform" },
];

export function TableEditablePreview() {
  const [rows, setRows] = useState<Row[]>(INITIAL_ROWS);
  const [keys, setKeys] = useState<string[]>(["name", "role", "team"]);
  const [labels, setLabels] = useState<Record<string, string>>({
    name: "Name",
    role: "Role",
    team: "Team",
  });
  const nextRow = useRef(5);
  const nextCol = useRef(1);
  const [editable, setEditable] = useState(true);

  const onCellEdit = useCallback(
    (rowId: string, key: string, value: string) => {
      setRows((prev) =>
        prev.map((row) => (row.id === rowId ? { ...row, [key]: value } : row)),
      );
    },
    [],
  );

  const onInsertRow = useCallback(
    (index: number, position: "before" | "after") => {
      const at = position === "after" ? index + 1 : index;
      setRows((prev) => {
        const next = [...prev];
        next.splice(at, 0, { id: \`r\${nextRow.current}\` });
        return next;
      });
      nextRow.current += 1;
    },
    [],
  );

  const onDeleteRow = useCallback((rowId: string) => {
    setRows((prev) => prev.filter((row) => row.id !== rowId));
  }, []);

  const onInsertColumn = useCallback(
    (index: number, position: "before" | "after") => {
      const key = \`field\${nextCol.current}\`;
      const at = position === "after" ? index + 1 : index;
      setLabels((prev) => ({ ...prev, [key]: \`Field \${nextCol.current}\` }));
      setKeys((prev) => {
        const next = [...prev];
        next.splice(at, 0, key);
        return next;
      });
      setRows((prev) => prev.map((row) => ({ ...row, [key]: "" })));
      nextCol.current += 1;
    },
    [],
  );

  const onColumnRename = useCallback((key: string, value: string) => {
    setLabels((prev) => ({ ...prev, [key]: value }));
  }, []);

  const onDeleteColumn = useCallback((key: string) => {
    setKeys((prev) => prev.filter((k) => k !== key));
    setRows((prev) =>
      prev.map((row) => {
        const next = { ...row };
        delete next[key];
        return next;
      }),
    );
  }, []);

  const columns = useMemo<TableColumn<Row>[]>(
    () =>
      keys.map((key, i) => ({
        key,
        header: labels[key] ?? key,
        editable,
        width: i === 0 ? undefined : "180px",
      })),
    [keys, labels, editable],
  );

  const bodyHeight = Math.min(Math.max(rows.length, 1), 6) * 48;

  return (
    <div className="flex w-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <p className="text-muted-foreground text-xs">
          {editable
            ? "Click a cell to edit. Use the column and row handles to insert or delete."
            : "Read-only."}
        </p>
        <Switch
          checked={editable}
          onCheckedChange={setEditable}
          label="Editable"
        />
      </div>
      <Table
        data={rows}
        columns={columns}
        getRowId={(row) => row.id}
        rowHeight={48}
        height={bodyHeight}
        onCellEdit={editable ? onCellEdit : undefined}
        onColumnRename={editable ? onColumnRename : undefined}
        onInsertRow={editable ? onInsertRow : undefined}
        onDeleteRow={editable ? onDeleteRow : undefined}
        onInsertColumn={editable ? onInsertColumn : undefined}
        onDeleteColumn={editable ? onDeleteColumn : undefined}
        emptyState={
          <button
            type="button"
            onClick={() => onInsertRow(0, "before")}
            className="rounded-full border border-border px-3 py-1.5 font-medium text-foreground text-xs transition-colors hover:bg-muted"
          >
            Insert first row
          </button>
        }
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Edit cells inline and insert or delete rows and columns via border handles; the table re-renders from the updated data and column defs. 主要导出：Table。 最小用法：<Table data={…} columns={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-table-editable.md。`,upstream:`https://beui.dev/r/table-editable.json`};export{e as default};