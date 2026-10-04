var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/wallet-card/index.tsx`,`components/vendor/beui/motion/wallet-card/account-switcher.tsx`,`components/vendor/beui/motion/wallet-card/actions.tsx`,`components/vendor/beui/motion/wallet-card/balance-delta.tsx`,`components/vendor/beui/motion/wallet-card/search-bar.tsx`,`components/vendor/beui/motion/wallet-card/types.ts`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/motion/button/index.tsx`,`components/vendor/beui/motion/wallet-card/account-avatar.tsx`,`components/vendor/beui/motion/wallet-card/constants.ts`,`components/vendor/beui/motion/wallet-card/copy-button.tsx`,`components/vendor/beui/motion/wallet-card/utils.ts`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/motion/button/magnetic.tsx`,`components/vendor/beui/motion/button/metallic.tsx`,`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/wallet-card.tsx`,export:`WalletCardPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/wallet-card.preview.tsx`},note:{summaryZh:`钱包卡片（动效区块）。`,importLine:`import { WalletCard } from "@/components/vendor/beui/motion/wallet-card";`,usage:`<WalletCard accounts={…} balance={…} />`,exports:[{name:`WalletAccount`,kind:`type`},{name:`WalletCardProps`,kind:`type`},{name:`WalletCard`,doc:`Composed wallet overview card: an account switcher whose trigger morphs open into a full-width panel, a search icon that morphs into a search bar, a rolling balance with a transient change indicator, and Send / Deposit actions. Actions and search are plain callbacks — the resulting flow is left to the consumer.`,kind:`component`,propsType:`WalletCardProps`,inline:!1,union:!1,props:[{name:`accounts`,type:`WalletAccount[]`,optional:!1},{name:`accountId`,type:`string`,optional:!0},{name:`defaultAccountId`,type:`string`,optional:!0},{name:`onAccountChange`,type:`(id: string) => void`,optional:!0},{name:`balance`,type:`number`,optional:!1},{name:`balancePrefix`,type:`string`,optional:!0,default:`"$"`},{name:`defaultChange`,type:`number`,optional:!0,doc:`Initial balance change shown in the pill before any live change.`},{name:`defaultBalanceHidden`,type:`boolean`,optional:!0,default:`false`,doc:`Start with the balance hidden behind dots.`},{name:`onSend`,type:`() => void`,optional:!0},{name:`onDeposit`,type:`() => void`,optional:!0},{name:`onSwap`,type:`() => void`,optional:!0},{name:`onBuy`,type:`() => void`,optional:!0},{name:`searchPlaceholder`,type:`string`,optional:!0},{name:`searchRecent`,type:`string[]`,optional:!0,doc:`Recent searches shown in the expanded search panel.`},{name:`onSearchChange`,type:`(value: string) => void`,optional:!0},{name:`onSearchSubmit`,type:`(value: string) => void`,optional:!0},{name:`hasNotifications`,type:`boolean`,optional:!0,default:`false`,doc:`Show an unread pulse on the notifications bell.`},{name:`onNotifications`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/wallet-card.preview.tsx`,code:`"use client";

import { useState } from "react";
import { WalletCard } from "@/components/vendor/beui/motion/wallet-card";
import { Button } from "@/components/vendor/beui/motion/button";

const ACCOUNTS = [
  { id: "main", name: "Main Wallet", address: "0x8f3Cb1a29e4D7c6F1B2a3E9d0C4b5A6f7D8e9C0b" },
  { id: "trading", name: "Trading", address: "0x1a2B3c4D5e6F7a8B9c0D1e2F3a4B5c6D7e8F9a0B" },
  { id: "cold", name: "Cold Storage", address: "0x9F8e7D6c5B4a3E2d1C0b9A8f7E6d5C4b3A2e1F0d" },
];

const RECENT_SEARCHES = ["vitalik.eth", "0xA0b8…6EB4", "Uniswap", "Send to Trading"];

export function WalletCardPreview() {
  const [balance, setBalance] = useState(12480.32);

  return (
    <div className="flex w-full flex-col items-center gap-4 p-6">
      <WalletCard
        accounts={ACCOUNTS}
        balance={balance}
        defaultChange={124.5}
        searchRecent={RECENT_SEARCHES}
        hasNotifications
      />
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setBalance((b) => b + (Math.random() > 0.5 ? 1 : -1) * (50 + Math.random() * 400))}
      >
        Simulate balance change
      </Button>
    </div>
  );
}
`},exampleNote:null}},docsField:`Wallet overview card with an account switcher and search that morph open from their triggers, a cascading balance with a live change pill… 主要导出：WalletCard。 最小用法：<WalletCard accounts={…} balance={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-wallet-card.md。`,upstream:`https://beui.dev/r/wallet-card.json`};export{e as default};