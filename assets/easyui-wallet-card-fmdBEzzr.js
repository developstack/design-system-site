var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/wallet-card.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/wallet-card.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/wallet-card.tsx`},note:{summaryZh:`钱包卡片（动效组件）。`,importLine:`import { WalletCard } from "@/components/vendor/easyui/ui/wallet-card";`,usage:`<WalletCard />`,exports:[{name:`WalletCardProps`,kind:`type`},{name:`WalletCard`,kind:`component`,propsType:`WalletCardProps`,inline:!1,union:!1,props:[{name:`balance`,type:`string`,optional:!0,default:`'$4,566.00'`,doc:`Balance string rendered as the headline figure.`},{name:`cardType`,type:`string`,optional:!0,default:`'Mastercard'`,doc:`Card brand label (e.g. "Mastercard", "Visa").`},{name:`cardLastFour`,type:`string`,optional:!0,default:`'3040'`,doc:`Last four digits of the underlying card.`},{name:`buttonLabel`,type:`string`,optional:!0,default:`'Use Wallet'`,doc:`Label for the action button.`},{name:`onUseWallet`,type:`() => void`,optional:!0,doc:`Optional click handler for the action button.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disable the action button.`},{name:`balanceLabel`,type:`string`,optional:!0,default:`'Total Balance'`,doc:`Caption rendered as the small label under the balance.`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`default`,local:`WalletCard`,kind:`component`,propsType:`WalletCardProps`,inline:!1,union:!1,props:[{name:`balance`,type:`string`,optional:!0,default:`'$4,566.00'`,doc:`Balance string rendered as the headline figure.`},{name:`cardType`,type:`string`,optional:!0,default:`'Mastercard'`,doc:`Card brand label (e.g. "Mastercard", "Visa").`},{name:`cardLastFour`,type:`string`,optional:!0,default:`'3040'`,doc:`Last four digits of the underlying card.`},{name:`buttonLabel`,type:`string`,optional:!0,default:`'Use Wallet'`,doc:`Label for the action button.`},{name:`onUseWallet`,type:`() => void`,optional:!0,doc:`Optional click handler for the action button.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disable the action button.`},{name:`balanceLabel`,type:`string`,optional:!0,default:`'Total Balance'`,doc:`Caption rendered as the small label under the balance.`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/wallet-card.tsx`,code:`import { WalletCard } from '@/components/vendor/easyui/ui/wallet-card';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 w-full flex items-center justify-center p-3 pointer-events-none overflow-hidden">
            {/* Outer container holds the slot; the inner wallet card is
                rendered at its natural 458×285 size and visually scaled
                to fit so the text and fixed-positioned content all
                scale together and never overlap. */}
            <div className="w-[290px] h-[180px] overflow-hidden flex items-center justify-center">
              <div
                className="origin-center shrink-0"
                style={{ width: 458, height: 285, transform: 'scale(0.6)' }}
              >
                <WalletCard
                  balance={hovered ? '$5,128.40' : '$4,566.00'}
                  buttonLabel="Use Wallet"
                  cardType="Mastercard"
                  cardLastFour="3040"
                />
              </div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A premium dark wallet card with a blue radial-gradient surface, live balance display, iOS-style toggle, and a primary acti… 主要导出：WalletCard。 最小用法：<WalletCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-wallet-card.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#wallet-card`};export{e as default};