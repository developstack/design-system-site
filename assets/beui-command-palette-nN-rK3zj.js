var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/command-palette.tsx`,`components/vendor/beui/lib/command-search.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-on-open.ts`,`components/vendor/beui/lib/hooks/use-row-cursor.ts`,`components/vendor/beui/lib/hooks/use-touch-capable.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/command-palette.tsx`,export:`CommandPalettePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/command-palette.preview.tsx`},note:{summaryZh:`命令面板（动效区块）。`,importLine:`import { CommandPalette } from "@/components/vendor/beui/motion/command-palette";`,usage:`<CommandPalette items={…} />`,exports:[{name:`CommandItem`,kind:`type`},{name:`CommandPaletteProps`,kind:`type`},{name:`CommandPalette`,kind:`component`,propsType:`CommandPaletteProps`,inline:!1,union:!1,props:[{name:`items`,type:`CommandItem[]`,optional:!1},{name:`shortcut`,type:`string`,optional:!0,default:`"k"`,doc:`Opens with Cmd/Ctrl + this key. Default: "k"`},{name:`placeholder`,type:`string`,optional:!0,default:`"Type a command or search…"`},{name:`emptyMessage`,type:`string`,optional:!0,default:`"No results found."`},{name:`open`,type:`boolean`,optional:!0},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/command-palette.preview.tsx`,code:`"use client";

import { FileText, Home, Plus, Settings, User } from "lucide-react";
import { useState } from "react";
import { CommandPalette } from "@/components/vendor/beui/motion/command-palette";

export function CommandPalettePreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-start gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 items-center rounded-full border border-border bg-card px-5 text-sm font-medium text-foreground press hover:border-(--color-border-strong)"
      >
        Open command palette
      </button>
      <p className="text-sm text-muted-foreground">
        Press{" "}
        <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-xs text-foreground">
          ⌘ J
        </kbd>{" "}
        (or <kbd className="rounded border border-border bg-card px-1.5 py-0.5 text-xs text-foreground">Ctrl J</kbd>) to open.
      </p>
      <CommandPalette
        open={open}
        onOpenChange={setOpen}
        shortcut="j"
        items={[
          { id: "home", label: "Go to Home", group: "Navigation", icon: Home, hint: "G H", onSelect: () => {} },
          { id: "profile", label: "Open profile", group: "Navigation", icon: User, hint: "G P", onSelect: () => {} },
          { id: "settings", label: "Settings", group: "Navigation", icon: Settings, onSelect: () => {} },
          { id: "new-doc", label: "Create document", group: "Actions", icon: FileText, hint: "⌘ N", onSelect: () => {} },
          { id: "new-project", label: "New project", group: "Actions", icon: Plus, hint: "⌘ ⇧ N", onSelect: () => {} },
        ]}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`⌘K palette with fuzzy filter, spring-animated active row and glass surface. 主要导出：CommandPalette。 最小用法：<CommandPalette items={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-command-palette.md。`,upstream:`https://beui.dev/r/command-palette.json`};export{e as default};