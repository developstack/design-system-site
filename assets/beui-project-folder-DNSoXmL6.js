var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/project-folder.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/project-folder.tsx`,export:`ProjectFolderPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/project-folder.preview.tsx`},note:{summaryZh:`文件夹（动效区块）。`,importLine:`import { ProjectFolder } from "@/components/vendor/beui/motion/project-folder";`,usage:`<ProjectFolder title={…} />`,exports:[{name:`ProjectFolderPreview`,kind:`type`},{name:`ProjectFolderProps`,kind:`type`},{name:`ProjectFolder`,kind:`component`,propsType:`ProjectFolderProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!1},{name:`description`,type:`string`,optional:!0,default:`"Updated recently"`},{name:`previews`,type:`ProjectFolderPreview[]`,optional:!0,default:`[]`},{name:`count`,type:`number`,optional:!0,default:`previews.length`},{name:`itemLabel`,type:`string`,optional:!0,default:`"file"`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0,default:`false`},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`onClick`,type:`() => void`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`ariaLabel`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/project-folder.preview.tsx`,code:`"use client";

import { ProjectFolder } from "@/components/vendor/beui/motion/project-folder";

const previews = [
  { id: "moss", color: "bg-emerald-200", mark: "A" },
  { id: "clay", color: "bg-orange-200", mark: "B" },
  { id: "sky", color: "bg-sky-200", mark: "C" },
  { id: "lilac", color: "bg-violet-200", mark: "D" },
  { id: "sand", color: "bg-amber-100", mark: "E" },
].map((preview) => ({
  id: preview.id,
  content: (
    <span className={cn("relative block h-full w-full", preview.color)}>
      <span className="absolute left-3 top-3 h-2 w-8 rounded-full bg-black/15" />
      <span className="absolute inset-x-3 top-8 h-px bg-black/10" />
      <span className="absolute inset-x-3 top-11 h-px bg-black/10" />
      <span className="absolute bottom-3 right-3 text-sm font-medium text-black/50">
        {preview.mark}
      </span>
    </span>
  ),
}));

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function ProjectFolderPreview() {
  return (
    <div className="flex min-h-80 w-full items-center justify-center px-6 py-10">
      <ProjectFolder
        title="Brand direction"
        description="Updated recently"
        count={5}
        previews={previews}
        onClick={() => {}}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`An interactive project folder that opens its file fan on hover or focus, expands into a focus-managed overlay, then retraces the complete… 主要导出：ProjectFolder。 最小用法：<ProjectFolder title={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-project-folder.md。`,upstream:`https://beui.dev/r/project-folder.json`};export{e as default};