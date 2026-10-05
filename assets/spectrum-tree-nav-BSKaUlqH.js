var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/tree-nav.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/spectrum-use-typewriter`],preview:{kind:`example`,module:`examples/spectrum/tree-nav.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/tree-nav-demo.json`},note:{summaryZh:`导航（组件）。`,importLine:`import { TreeNav } from "@/components/vendor/spectrum/tree-nav";`,usage:`<TreeNav items={…} />`,exports:[{name:`TreeNavItem`,kind:`type`},{name:`TreeNavProps`,kind:`type`},{name:`TreeNav`,kind:`component`,propsType:`TreeNavProps`,inline:!1,union:!1,props:[{name:`items`,type:`TreeNavItem[]`,optional:!1},{name:`activeHref`,type:`string`,optional:!0,doc:`href of the current page; the marker and background rest on this row.`},{name:`followHover`,type:`boolean`,optional:!0,default:`true`,doc:`Slide the marker and background to the hovered row and spring back on leave.`},{name:`linkComponent`,type:`LinkComponent`,optional:!0,default:`'a'`,doc:`Element used for links, e.g. Next's Link. Defaults to a plain anchor.`},{name:`onSelect`,type:`(item: TreeNavItem, event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/tree-nav-demo.json`,code:`"use client"

import * as React from "react"
import { TreeNav } from "@/components/vendor/spectrum/tree-nav"

const ITEMS = [
  { label: "Overview", href: "#overview" },
  { label: "Installation", href: "#installation" },
  { label: "Usage", href: "#usage" },
  { label: "Theming", href: "#theming", badge: "New" },
  { label: "Accessibility", href: "#accessibility" },
  { label: "Changelog", href: "#changelog" },
]

export default function TreeNavDemo() {
  const [active, setActive] = React.useState(ITEMS[0].href)

  return (
    <div className="flex w-full justify-center py-8">
      <TreeNav
        className="w-full max-w-[240px]"
        items={ITEMS}
        activeHref={active}
        onSelect={(item, event) => {
          event.preventDefault()
          setActive(item.href)
        }}
      />
    </div>
  )
}
`},exampleNote:null}},docsField:`A nav list with a tree rail and a spring marker that follows hover and settles on the active link. 主要导出：TreeNav。 最小用法：<TreeNav items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/nav.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-tree-nav.md。`,upstream:`https://ui.spectrumhq.in/r/tree-nav.json`};export{e as default};