var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/command-search.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[`@developstack/spectrum-use-typewriter`],preview:{kind:`example`,module:`examples/spectrum/command-search.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/command-search-demo.json`},note:{summaryZh:`搜索框（组件）。`,importLine:`import { CommandSearch } from "@/components/vendor/spectrum/command-search";`,usage:`<CommandSearch />`,exports:[{name:`CommandSearchItem`,kind:`type`},{name:`CommandSearchGroup`,kind:`type`},{name:`CommandSearchProps`,kind:`type`},{name:`CommandSearch`,kind:`component`,propsType:`CommandSearchProps`,inline:!1,union:!1,props:[{name:`query`,type:`string`,optional:!0,default:`"anim"`,doc:"Static text for the search field (used when `autoType` is false)."},{name:`queries`,type:`string[]`,optional:!0,doc:`Queries the palette types out and live-filters by.`},{name:`autoType`,type:`boolean`,optional:!0,default:`true`,doc:`Type the queries automatically and filter results as they type.`},{name:`placeholder`,type:`string`,optional:!0,default:`"Search…"`},{name:`groups`,type:`CommandSearchGroup[]`,optional:!0,default:`DEFAULT_GROUPS`,doc:`Grouped results rendered below the search field.`},{name:`onSelect`,type:`(item: CommandSearchItem) => void`,optional:!0,doc:`Called with the item when a row is clicked.`},{name:`height`,type:`number`,optional:!0,default:`408`,doc:`Fixed height of the palette. Content overflows are clipped like a real palette.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/command-search-demo.json`,code:`"use client"

import { CommandSearch } from "@/components/vendor/spectrum/command-search"

export default function CommandSearchDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="w-full max-w-[512px]">
        <CommandSearch />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A command palette that types queries and live-filters grouped results, with keyboard navigation. 主要导出：CommandSearch。 最小用法：<CommandSearch />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/search.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-command-search.md。`,upstream:`https://ui.spectrumhq.in/r/command-search.json`};export{e as default};