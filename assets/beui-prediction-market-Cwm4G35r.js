var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/prediction-market.tsx`,`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/motion/tabs.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/prediction-market.tsx`,export:`PredictionMarketPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/prediction-market.preview.tsx`},note:{summaryZh:null,importLine:`import { PredictionMarket } from "@/components/vendor/beui/motion/prediction-market";`,usage:`<PredictionMarket />`,exports:[{name:`PredictionMarketMode`,kind:`type`},{name:`PredictionMarketOutcome`,kind:`type`},{name:`PredictionMarketOrderValue`,kind:`type`},{name:`PredictionMarketQuote`,kind:`type`},{name:`PredictionMarketClassNames`,kind:`type`},{name:`PredictionMarketProps`,kind:`type`},{name:`PredictionMarket`,kind:`component`,propsType:`PredictionMarketProps`,inline:!1,union:!1,props:[{name:`outcomes`,type:`PredictionMarketOutcome[]`,optional:!0,default:`DEFAULT_OUTCOMES`},{name:`value`,type:`PredictionMarketOrderValue`,optional:!0},{name:`defaultValue`,type:`Partial<PredictionMarketOrderValue>`,optional:!0},{name:`onValueChange`,type:`(value: PredictionMarketOrderValue) => void`,optional:!0},{name:`onTrade`,type:`(order: PredictionMarketOrderValue, quote: PredictionMarketQuote) => void`,optional:!0},{name:`onSignIn`,type:`() => void`,optional:!0},{name:`authenticated`,type:`boolean`,optional:!0,default:`true`},{name:`orderTypeLabel`,type:`string`,optional:!0,default:`"Market"`},{name:`balance`,type:`number`,optional:!0,default:`500`},{name:`positions`,type:`Record<string, number>`,optional:!0,default:`{ up: 24, down: 16 }`},{name:`quickAmounts`,type:`number[]`,optional:!0,default:`DEFAULT_QUICK_AMOUNTS`},{name:`minTrade`,type:`number`,optional:!0,default:`1`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`PredictionMarketClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/prediction-market.preview.tsx`,code:`"use client";

import { useState } from "react";
import {
  PredictionMarket,
  type PredictionMarketOrderValue,
} from "@/components/vendor/beui/motion/prediction-market";

const outcomes = [
  {
    id: "yes",
    label: "Yes",
    price: 0.167,
  },
  {
    id: "no",
    label: "No",
    price: 0.834,
  },
];

export function PredictionMarketPreview() {
  const [order, setOrder] = useState<PredictionMarketOrderValue>({
    mode: "buy",
    outcomeId: "yes",
    amount: "115",
  });

  return (
    <div className="flex w-full items-center justify-center">
      <PredictionMarket
        outcomes={outcomes}
        value={order}
        onValueChange={setOrder}
        balance={500}
        positions={{ yes: 125, no: 48 }}
        quickAmounts={[1, 5, 10, 100]}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Buy and sell outcomes with rolling amount entry, quick add chips and trade states. 主要导出：PredictionMarket。 最小用法：<PredictionMarket />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-prediction-market.md。`,upstream:`https://beui.dev/r/prediction-market.json`};export{e as default};