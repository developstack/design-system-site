var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/context-menu.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/context-menu.tsx`,export:`ContextMenuPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/context-menu.preview.tsx`},note:{summaryZh:`右键菜单（动效组件）。`,importLine:`import { ContextMenu } from "@/components/vendor/beui/motion/context-menu";`,usage:`<ContextMenu>…</ContextMenu>`,exports:[{name:`ContextMenuProps`,kind:`type`},{name:`ContextMenu`,kind:`component`,propsType:`ContextMenuProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuTriggerProps`,kind:`type`},{name:`ContextMenuTrigger`,kind:`component`,propsType:`ContextMenuTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactElement<TriggerElementProps, string | JSXElementConstructor<any>>`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuContentProps`,kind:`type`},{name:`ContextMenuContent`,kind:`component`,propsType:`ContextMenuContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Context menu"`}],inherited:[]},{name:`ContextMenuItemProps`,kind:`type`},{name:`ContextMenuItem`,kind:`component`,propsType:`ContextMenuItemProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`onSelect`,type:`() => void`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`closeOnSelect`,type:`boolean`,optional:!0},{name:`tone`,type:`ContextMenuItemTone`,optional:!0},{name:`inset`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`textValue`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuCheckboxItemProps`,kind:`type`},{name:`ContextMenuCheckboxItem`,kind:`component`,propsType:`ContextMenuCheckboxItemProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0},{name:`closeOnSelect`,type:`boolean`,optional:!0},{name:`tone`,type:`ContextMenuItemTone`,optional:!0},{name:`inset`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`textValue`,type:`string`,optional:!0},{name:`checked`,type:`boolean`,optional:!1},{name:`onCheckedChange`,type:`(checked: boolean) => void`,optional:!0}],inherited:[]},{name:`ContextMenuRadioGroupProps`,kind:`type`},{name:`ContextMenuRadioGroup`,kind:`component`,propsType:`ContextMenuRadioGroupProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuRadioItemProps`,kind:`type`},{name:`ContextMenuRadioItem`,kind:`component`,propsType:`ContextMenuRadioItemProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`disabled`,type:`boolean`,optional:!0},{name:`closeOnSelect`,type:`boolean`,optional:!0},{name:`tone`,type:`ContextMenuItemTone`,optional:!0},{name:`inset`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`textValue`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!1}],inherited:[]},{name:`ContextMenuLabelProps`,kind:`type`},{name:`ContextMenuLabel`,kind:`component`,propsType:`ContextMenuLabelProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`inset`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuSeparatorProps`,kind:`type`},{name:`ContextMenuSeparator`,kind:`component`,propsType:`ContextMenuSeparatorProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ContextMenuShortcutProps`,kind:`type`},{name:`ContextMenuShortcut`,kind:`component`,propsType:`ContextMenuShortcutProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/context-menu.preview.tsx`,code:`"use client";

import {
  Check,
  Copy,
  Download,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/components/vendor/beui/motion/context-menu";
import { SPRING_SWAP } from "@/components/vendor/beui/lib/ease";

export function ContextMenuPreview() {
  const reduce = useReducedMotion() ?? false;
  const [message, setMessage] = useState<string | null>(null);
  const [offline, setOffline] = useState(false);

  return (
    <div className="flex min-h-[360px] w-full items-center justify-center">
      <ContextMenu>
        <ContextMenuTrigger>
          <button
            type="button"
            className="group flex flex-col items-center outline-none"
          >
            <div className="relative h-24 w-32 transition-transform duration-150 group-active:scale-[0.98] group-focus-visible:rounded-2xl group-focus-visible:ring-2 group-focus-visible:ring-foreground/20 group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-background">
              <div className="absolute left-1 top-1 h-7 w-14 rounded-t-[10px] bg-[#d4a84f] dark:bg-[#a77d2f]" />
              <div className="absolute inset-x-0 bottom-0 top-5 rounded-[14px] bg-[#e7bb61] shadow-[0_14px_24px_-16px_rgba(90,58,8,0.75)] dark:bg-[#bd8d36]" />
              <div className="absolute inset-x-0 bottom-0 top-9 rounded-[14px] bg-[#efc86f] dark:bg-[#cb9a41]" />
              <div className="absolute inset-x-5 bottom-4 h-px bg-black/10 dark:bg-white/10" />
            </div>

            <span className="mt-4 text-sm font-medium text-foreground">
              Right click on me
            </span>

            <div className="mt-1 h-4">
              <AnimatePresence mode="wait" initial={false}>
                {message ? (
                  <motion.span
                    key={message}
                    initial={
                      reduce
                        ? { opacity: 0 }
                        : { opacity: 0, y: 3, filter: "blur(2px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={
                      reduce
                        ? { opacity: 0 }
                        : { opacity: 0, y: -2, filter: "blur(2px)" }
                    }
                    transition={reduce ? { duration: 0.1 } : SPRING_SWAP}
                    className="flex items-center gap-1 text-[10px] text-muted-foreground"
                  >
                    <Check aria-hidden="true" className="h-3 w-3 text-success" />
                    {message}
                  </motion.span>
                ) : (
                  <span className="text-[10px] text-muted-foreground">
                    or long-press · Shift + F10
                  </span>
                )}
              </AnimatePresence>
            </div>
          </button>
        </ContextMenuTrigger>

        <ContextMenuContent ariaLabel="Folder actions" className="w-60">
          <ContextMenuLabel>Project files</ContextMenuLabel>
          <ContextMenuItem
            textValue="Open"
            onSelect={() => setMessage("Folder opened")}
          >
            <Eye aria-hidden="true" className="h-4 w-4" />
            Open
            <ContextMenuShortcut>↵</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            textValue="Rename"
            onSelect={() => setMessage("Ready to rename")}
          >
            <Pencil aria-hidden="true" className="h-4 w-4" />
            Rename
            <ContextMenuShortcut>R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            textValue="Duplicate"
            onSelect={() => setMessage("Folder duplicated")}
          >
            <Copy aria-hidden="true" className="h-4 w-4" />
            Duplicate
            <ContextMenuShortcut>⌘D</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem
            textValue="Download"
            onSelect={() => setMessage("Download started")}
          >
            <Download aria-hidden="true" className="h-4 w-4" />
            Download
          </ContextMenuItem>

          <ContextMenuSeparator />

          <ContextMenuCheckboxItem
            textValue="Keep offline"
            checked={offline}
            closeOnSelect={false}
            onCheckedChange={(checked) => {
              setOffline(checked);
              setMessage(checked ? "Available offline" : "Online only");
            }}
          >
            Keep offline
          </ContextMenuCheckboxItem>

          <ContextMenuSeparator />

          <ContextMenuItem
            tone="destructive"
            textValue="Move to trash"
            onSelect={() => setMessage("Moved to trash")}
          >
            <Trash2 aria-hidden="true" className="h-4 w-4" />
            Move to trash
            <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable context-menu primitives with a pointer-origin clip morph, a gliding active row, checkbo… 主要导出：ContextMenu、ContextMenuTrigger、ContextMenuContent、ContextMenuItem 等。 最小用法：<ContextMenu>…</ContextMenu>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-context-menu.md。`,upstream:`https://beui.dev/r/context-menu.json`};export{e as default};