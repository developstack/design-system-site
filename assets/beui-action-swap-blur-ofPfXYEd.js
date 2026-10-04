var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/action-swap-blur.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/action-swap-blur.tsx`,export:`ActionSwapBlurPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-blur.preview.tsx`},note:{summaryZh:null,importLine:`import { ActionSwapBlurButton } from "@/components/vendor/beui/motion/action-swap-blur";`,usage:`<ActionSwapBlurButton items={…} />`,exports:[{name:`ActionSwapButtonSize`,kind:`type`},{name:`ActionSwapButtonVariant`,kind:`type`},{name:`ActionSwapItem`,kind:`type`},{name:`ActionSwapBlurButtonProps`,kind:`type`},{name:`ActionSwapBlurTextProps`,kind:`type`},{name:`ActionSwapBlurIconProps`,kind:`type`},{name:`ActionSwapBlurButton`,kind:`component`,propsType:`ActionSwapBlurButtonProps`,inline:!1,union:!1,props:[{name:`items`,type:`ActionSwapItem[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string, item: ActionSwapItem) => void`,optional:!0},{name:`variant`,type:`ActionSwapButtonVariant`,optional:!0},{name:`size`,type:`ActionSwapButtonSize`,optional:!0},{name:`iconOnly`,type:`boolean`,optional:!0},{name:`cycle`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:281,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ActionSwapBlurText`,kind:`component`,propsType:`ActionSwapBlurTextProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ActionSwapBlurIcon`,kind:`component`,propsType:`ActionSwapBlurIconProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-blur.preview.tsx`,code:`"use client";

import { Check, Copy, Moon, Sun } from "lucide-react";
import { useState } from "react";
import {
  ActionSwapBlurButton,
  type ActionSwapItem,
} from "@/components/vendor/beui/motion/action-swap-blur";

const TEXT_ITEMS: ActionSwapItem[] = [
  { id: "copy", label: "Copy" },
  { id: "copied", label: "Copied" },
];

const ICON_ITEMS: ActionSwapItem[] = [
  {
    id: "light",
    label: "Light",
    icon: <Sun className="h-4 w-4" />,
    ariaLabel: "Use light theme",
  },
  {
    id: "dark",
    label: "Dark",
    icon: <Moon className="h-4 w-4" />,
    ariaLabel: "Use dark theme",
  },
];

const CTA_ITEMS: ActionSwapItem[] = [
  {
    id: "copy",
    label: "Copy link",
    icon: <Copy className="h-4 w-4" />,
    ariaLabel: "Copy link",
  },
  {
    id: "copied",
    label: "Copied",
    icon: <Check className="h-4 w-4" />,
    ariaLabel: "Copied",
  },
];

export function ActionSwapBlurPreview() {
  const [textValue, setTextValue] = useState(TEXT_ITEMS[0]?.id);
  const [iconValue, setIconValue] = useState(ICON_ITEMS[0]?.id);
  const [ctaValue, setCtaValue] = useState(CTA_ITEMS[0]?.id);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ActionSwapBlurButton
        items={TEXT_ITEMS}
        value={textValue}
        onValueChange={setTextValue}
        variant="secondary"
      />
      <ActionSwapBlurButton
        items={ICON_ITEMS}
        value={iconValue}
        onValueChange={setIconValue}
        variant="outline"
        size="icon"
        iconOnly
      />
      <ActionSwapBlurButton
        items={CTA_ITEMS}
        value={ctaValue}
        onValueChange={setCtaValue}
        variant="primary"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Copy-button style swap with blur, opacity and scale. 主要导出：ActionSwapBlurButton、ActionSwapBlurText、ActionSwapBlurIcon。 最小用法：<ActionSwapBlurButton items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-action-swap-blur.md。`,upstream:`https://beui.dev/r/action-swap-blur.json`};export{e as default};