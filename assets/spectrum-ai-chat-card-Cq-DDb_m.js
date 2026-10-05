var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/ai-chat-card.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[`@developstack/spectrum-use-typewriter`],preview:{kind:`example`,module:`examples/spectrum/ai-chat-card.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/ai-chat-card-demo.json`},note:{summaryZh:`卡片（组件）。`,importLine:`import { AIChatCard } from "@/components/vendor/spectrum/ai-chat-card";`,usage:`<AIChatCard />`,exports:[{name:`AIChatCardProps`,kind:`type`},{name:`AIChatCard`,kind:`component`,propsType:`AIChatCardProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0,default:`"New Chat"`},{name:`subtitle`,type:`string`,optional:!0,default:`"How can I help you today?"`},{name:`greeting`,type:`string`,optional:!0,default:`"Morning, Arihant!"`},{name:`prompt`,type:`string`,optional:!0,default:`"What are we working on today? Press send to start a new co…`},{name:`prompts`,type:`string[]`,optional:!0,default:`DEFAULT_PROMPTS`,doc:`Prompts the composer types out on a loop.`},{name:`autoType`,type:`boolean`,optional:!0,default:`true`,doc:`Turn the prompt-typing animation off.`},{name:`placeholder`,type:`string`,optional:!0,default:`"Ask anything…"`},{name:`icon`,type:`ReactNode`,optional:!0},{name:`onSend`,type:`(message: string) => void`,optional:!0},{name:`onReset`,type:`() => void`,optional:!0},{name:`onAttach`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/ai-chat-card-demo.json`,code:`"use client"

import { AIChatCard } from "@/components/vendor/spectrum/ai-chat-card"

export default function AIChatCardDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="w-full max-w-[360px]">
        <AIChatCard className="min-h-[520px]" />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`An AI chat card that types prompts into its composer, with send, attach and reset actions. 主要导出：AIChatCard。 最小用法：<AIChatCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-ai-chat-card.md。`,upstream:`https://ui.spectrumhq.in/r/ai-chat-card.json`};export{e as default};