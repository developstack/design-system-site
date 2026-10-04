var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/action-swap-cascade.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/action-swap-cascade.tsx`,export:`ActionSwapCascadePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-cascade.preview.tsx`},note:{summaryZh:null,importLine:`import { ActionSwapCascadeButton } from "@/components/vendor/beui/motion/action-swap-cascade";`,usage:`<ActionSwapCascadeButton items={…} />`,exports:[{name:`ActionSwapButtonSize`,kind:`type`},{name:`ActionSwapButtonVariant`,kind:`type`},{name:`ActionSwapItem`,kind:`type`},{name:`ActionSwapCascadeButtonProps`,kind:`type`},{name:`ActionSwapCascadeTextProps`,kind:`type`},{name:`ActionSwapCascadeIconProps`,kind:`type`},{name:`ActionSwapCascadeButton`,kind:`component`,propsType:`ActionSwapCascadeButtonProps`,inline:!1,union:!1,props:[{name:`items`,type:`ActionSwapItem[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string, item: ActionSwapItem) => void`,optional:!0},{name:`variant`,type:`ActionSwapButtonVariant`,optional:!0},{name:`size`,type:`ActionSwapButtonSize`,optional:!0},{name:`iconOnly`,type:`boolean`,optional:!0},{name:`cycle`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:281,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ActionSwapCascadeText`,kind:`component`,propsType:`ActionSwapCascadeTextProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ActionSwapCascadeIcon`,kind:`component`,propsType:`ActionSwapCascadeIconProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-cascade.preview.tsx`,code:`"use client";

import { Check, Copy } from "lucide-react";
import {
  ActionSwapCascadeButton,
  type ActionSwapItem,
} from "@/components/vendor/beui/motion/action-swap-cascade";

const CTA_ITEMS: ActionSwapItem[] = [
  {
    id: "copy",
    label: "Copy link",
    icon: <Copy className="h-4 w-4" />,
    ariaLabel: "Copy link",
  },
  {
    id: "copied",
    label: "Copied!",
    icon: <Check className="h-4 w-4" />,
    ariaLabel: "Copied",
  },
];

export function ActionSwapCascadePreview() {
  return (
    <div className="flex w-full justify-center">
      <ActionSwapCascadeButton items={CTA_ITEMS} variant="primary" />
    </div>
  );
}
`},exampleNote:null}},docsField:`Letter-by-letter slot roll — the old label's letters drop away as the new ones… 主要导出：ActionSwapCascadeButton、ActionSwapCascadeText、ActionSwapCascadeIcon。 最小用法：<ActionSwapCascadeButton items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-action-swap-cascade.md。`,upstream:`https://beui.dev/r/action-swap-cascade.json`};export{e as default};