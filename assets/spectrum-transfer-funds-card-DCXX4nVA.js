var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/transfer-funds-card.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/transfer-funds-card.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/transfer-funds-card-demo.json`},note:{summaryZh:`卡片（组件）。`,importLine:`import { TransferFundsCard } from "@/components/vendor/spectrum/transfer-funds-card";`,usage:`<TransferFundsCard />`,exports:[{name:`TransferSummaryRow`,kind:`type`},{name:`TransferFundsCardProps`,kind:`type`},{name:`TransferFundsCard`,kind:`component`,propsType:`TransferFundsCardProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0,default:`"Transfer Funds"`},{name:`description`,type:`string`,optional:!0,default:`"Move money between your connected accounts."`},{name:`amountLabel`,type:`string`,optional:!0,default:`"Amount to Transfer"`},{name:`currencySymbol`,type:`string`,optional:!0,default:`"$"`},{name:`amount`,type:`string`,optional:!0,default:`"1,200.00"`},{name:`fromLabel`,type:`string`,optional:!0,default:`"From Account"`},{name:`fromAccount`,type:`string`,optional:!0,default:`"Main Checking (··8402) — $12,450.00"`},{name:`toLabel`,type:`string`,optional:!0,default:`"To Account"`},{name:`toAccount`,type:`string`,optional:!0,default:`"High Yield Savings (··1192) — $42,100.00"`},{name:`summary`,type:`TransferSummaryRow[]`,optional:!0,default:`DEFAULT_SUMMARY`},{name:`buttonLabel`,type:`string`,optional:!0,default:`"Confirm Transfer"`},{name:`onConfirm`,type:`() => void`,optional:!0},{name:`onClose`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/transfer-funds-card-demo.json`,code:`"use client"

import { TransferFundsCard } from "@/components/vendor/spectrum/transfer-funds-card"

export default function TransferFundsCardDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="w-full max-w-[378px]">
        <TransferFundsCard />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A money transfer form card with account pickers, a summary and a confirm action. 主要导出：TransferFundsCard。 最小用法：<TransferFundsCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-transfer-funds-card.md。`,upstream:`https://ui.spectrumhq.in/r/transfer-funds-card.json`};export{e as default};