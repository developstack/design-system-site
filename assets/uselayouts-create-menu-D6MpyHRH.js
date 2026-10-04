var e={vendored:{source:`uselayouts`,license:`MIT`,files:[`components/vendor/uselayouts/create-menu.tsx`,`components/vendor/uselayouts/NOTICE.md`],dependencies:[`@hugeicons/core-free-icons`,`@hugeicons/react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/uselayouts/create-menu.tsx`,export:`default`,example:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/create-menu-demo.tsx`},note:{summaryZh:`菜单（动效组件）。`,importLine:`import CreateMenu from "@/components/vendor/uselayouts/create-menu";`,usage:`<CreateMenu />`,exports:[{name:`default`,local:`CreateMenu`,kind:`component`,propsType:null,union:!1,props:[],inherited:[]}],example:{url:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/create-menu-demo.tsx`,code:`"use client";

import CreateMenu from "@/components/vendor/uselayouts/create-menu";

export default function CreateMenuPreview() {
  return (
    <div className="flex aspect-[16/10] w-full max-w-[860px] overflow-hidden rounded-2xl border border-border bg-muted/40">
      <div className="flex w-[240px] shrink-0 flex-col gap-3 border-r border-border bg-background p-3">
        <div className="mb-1 flex items-center gap-2 px-1">
          <div className="size-7 rounded-lg bg-muted" />
          <div className="h-3 w-24 rounded bg-muted" />
        </div>
        <CreateMenu />
        <div className="mt-1 space-y-2 px-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="size-4 rounded bg-muted" />
              <div
                className="h-3 rounded bg-muted"
                style={{ width: \`\${58 + (i % 3) * 12}%\` }}
              />
            </div>
          ))}
        </div>
        <div className="mt-auto space-y-2 px-1 pb-1">
          <div className="h-3 w-16 rounded bg-muted" />
          <div className="h-9 w-full rounded-lg bg-muted" />
        </div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-4 bg-background p-5">
        <div className="flex items-center justify-between">
          <div className="h-4 w-32 rounded bg-muted" />
          <div className="h-8 w-8 rounded-md bg-muted" />
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3">
          <div className="rounded-xl bg-muted" />
          <div className="rounded-xl bg-muted" />
          <div className="col-span-2 rounded-xl bg-muted" />
        </div>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A Start Creating pill that springs open into a list of create actions. 主要导出：CreateMenu。 最小用法：<CreateMenu />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/menu.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/uselayouts-create-menu.md。`,upstream:`https://uselayouts.com/r/create-menu.json`};export{e as default};