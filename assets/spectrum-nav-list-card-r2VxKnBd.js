var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/nav-list-card.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/nav-list-card.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/nav-list-card-demo.json`},note:{summaryZh:`卡片（组件）。`,importLine:`import { NavListCard } from "@/components/vendor/spectrum/nav-list-card";`,usage:`<NavListCard />`,exports:[{name:`NavListItem`,kind:`type`},{name:`NavListCardProps`,kind:`type`},{name:`PLANNING_NAV_ITEMS`,kind:`constant`,type:`NavListItem[]`},{name:`SUPPORT_NAV_ITEMS`,kind:`constant`,type:`NavListItem[]`},{name:`NavListCard`,kind:`component`,propsType:`NavListCardProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0,default:`"Planning"`},{name:`items`,type:`NavListItem[]`,optional:!0,default:`PLANNING_NAV_ITEMS`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/nav-list-card-demo.json`,code:`"use client"

import { NavListCard, SUPPORT_NAV_ITEMS } from "@/components/vendor/spectrum/nav-list-card"

export default function NavListCardDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="grid w-full max-w-[360px] grid-cols-2 items-start gap-3">
        <NavListCard />
        <NavListCard title="Support" items={SUPPORT_NAV_ITEMS} />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A compact navigation card that lists links with icons, with a spring slide… 主要导出：NavListCard、PLANNING_NAV_ITEMS、SUPPORT_NAV_ITEMS。 最小用法：<NavListCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-nav-list-card.md。`,upstream:`https://ui.spectrumhq.in/r/nav-list-card.json`};export{e as default};