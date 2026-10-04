var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/bloom-menu.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/bloom-menu.tsx`,export:`BloomMenuPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/bloom-menu.preview.tsx`},note:{summaryZh:`菜单（动效区块）。`,importLine:`import { BloomMenu } from "@/components/vendor/beui/motion/bloom-menu";`,usage:`<BloomMenu />`,exports:[{name:`BloomMenuProps`,kind:`type`},{name:`BloomMenu`,kind:`component`,propsType:`BloomMenuProps`,inline:!1,union:!1,props:[{name:`items`,type:`MenuItem[]`,optional:!0,default:`ITEMS`},{name:`onSelect`,type:`(label: string) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/bloom-menu.preview.tsx`,code:`"use client";

import { BloomMenu } from "@/components/vendor/beui/motion/bloom-menu";

export function BloomMenuPreview() {
  return (
    <div className="flex min-h-[420px] w-full items-start justify-center pt-24">
      <BloomMenu />
    </div>
  );
}
`},exampleNote:null}},docsField:`A button that morphs open into a menu and blooms iris-out from the center, the grid revealing in every direction with radially staggered … 主要导出：BloomMenu。 最小用法：<BloomMenu />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-bloom-menu.md。`,upstream:`https://beui.dev/r/bloom-menu.json`};export{e as default};