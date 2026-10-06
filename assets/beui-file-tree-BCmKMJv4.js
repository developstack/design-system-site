var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/file-tree.tsx`,`components/vendor/beui/motion/shared-layout-bg.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/file-tree.tsx`,export:`FileTreePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/file-tree.preview.tsx`},note:{summaryZh:`文件树（动效组件）。`,importLine:`import { FileTree } from "@/components/vendor/beui/motion/file-tree";`,usage:`<FileTree>…</FileTree>`,exports:[{name:`FileTreeFolderProps`,kind:`type`},{name:`FileTreeFileProps`,kind:`type`},{name:`FileTreeClassNames`,kind:`type`},{name:`FileTreeProps`,kind:`type`},{name:`FileTreeFolder`,kind:`component`,propsType:`FileTreeFolderProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`name`,type:`string`,optional:!1},{name:`icon`,type:`ReactNode`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`FileTreeFile`,kind:`component`,propsType:`FileTreeFileProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`name`,type:`string`,optional:!1},{name:`icon`,type:`ReactNode`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`FileTree`,kind:`component`,propsType:`FileTreeProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0,default:`null`},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`expandedIds`,type:`string[]`,optional:!0},{name:`defaultExpandedIds`,type:`string[]`,optional:!0,default:`[]`},{name:`onExpandedChange`,type:`(expandedIds: string[]) => void`,optional:!0},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Files"`},{name:`indent`,type:`number`,optional:!0,default:`18`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`FileTreeClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/file-tree.preview.tsx`,code:`"use client";

import {
  Braces,
  FileCode2,
  FileJson2,
  FileText,
  Palette,
} from "lucide-react";
import {
  FileTree,
  FileTreeFile,
  FileTreeFolder,
} from "@/components/vendor/beui/motion/file-tree";

export function FileTreePreview() {
  return (
    <div className="flex min-h-[420px] w-full items-start justify-center px-4 pt-10">
      <div className="w-full max-w-xs p-2">
        <FileTree
          defaultValue="file-tree"
          defaultExpandedIds={["app", "components"]}
          ariaLabel="Project files"
        >
          <FileTreeFolder value="app" name="app">
            <FileTreeFolder value="components" name="components">
              <FileTreeFile
                value="file-tree"
                name="file-tree.tsx"
                icon={<Braces className="size-4 text-sky-500" />}
              />
              <FileTreeFile
                value="button"
                name="button.tsx"
                icon={<Braces className="size-4 text-sky-500" />}
              />
            </FileTreeFolder>
            <FileTreeFile
              value="page"
              name="page.tsx"
              icon={<FileCode2 className="size-4 text-sky-500" />}
            />
            <FileTreeFile
              value="styles"
              name="globals.css"
              icon={<Palette className="size-4 text-violet-500" />}
            />
          </FileTreeFolder>
          <FileTreeFolder value="public" name="public">
            <FileTreeFile value="logo" name="logo.svg" />
            <FileTreeFile value="grid" name="grid.svg" />
          </FileTreeFolder>
          <FileTreeFile
            value="package"
            name="package.json"
            icon={<FileJson2 className="size-4 text-amber-500" />}
          />
          <FileTreeFile
            value="readme"
            name="README.md"
            icon={<FileText className="size-4 text-muted-foreground" />}
          />
        </FileTree>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable file and folder primitives with springing branches, a gliding selection, and… 主要导出：FileTree、FileTreeFolder、FileTreeFile。 最小用法：<FileTree>…</FileTree>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/tree.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-file-tree.md。`,upstream:`https://beui.dev/r/file-tree.json`};export{e as default};