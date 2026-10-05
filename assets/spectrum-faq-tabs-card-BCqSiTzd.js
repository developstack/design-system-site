var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/faq-tabs-card.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/faq-tabs-card.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/faq-tabs-card-demo.json`},note:{summaryZh:`卡片（组件）。`,importLine:`import { FAQTabsCard } from "@/components/vendor/spectrum/faq-tabs-card";`,usage:`<FAQTabsCard />`,exports:[{name:`FaqItem`,kind:`type`},{name:`FaqTab`,kind:`type`},{name:`FAQTabsCardProps`,kind:`type`},{name:`FAQTabsCard`,kind:`component`,propsType:`FAQTabsCardProps`,inline:!1,union:!1,props:[{name:`tabs`,type:`FaqTab[]`,optional:!0,default:`DEFAULT_TABS`},{name:`defaultTab`,type:`number`,optional:!0,default:`0`,doc:`Index of the tab selected initially.`},{name:`defaultOpenIndex`,type:`number`,optional:!0,default:`0`,doc:`Index of the FAQ expanded initially (-1 for none).`},{name:`footerLabel`,type:`string`,optional:!0,default:`"Contact Support"`},{name:`onFooterClick`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/faq-tabs-card-demo.json`,code:`"use client"

import { FAQTabsCard } from "@/components/vendor/spectrum/faq-tabs-card"

export default function FAQTabsCardDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="w-full max-w-[378px]">
        <FAQTabsCard />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A tabbed FAQ card with animated accordion answers and a support footer. 主要导出：FAQTabsCard。 最小用法：<FAQTabsCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-faq-tabs-card.md。`,upstream:`https://ui.spectrumhq.in/r/faq-tabs-card.json`};export{e as default};