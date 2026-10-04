var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/action-swap-roll.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/action-swap-roll.tsx`,export:`ActionSwapRollPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-roll.preview.tsx`},note:{summaryZh:null,importLine:`import { ActionSwapRollButton } from "@/components/vendor/beui/motion/action-swap-roll";`,usage:`<ActionSwapRollButton items={…} />`,exports:[{name:`ActionSwapButtonSize`,kind:`type`},{name:`ActionSwapButtonVariant`,kind:`type`},{name:`ActionSwapItem`,kind:`type`},{name:`ActionSwapRollButtonProps`,kind:`type`},{name:`ActionSwapRollTextProps`,kind:`type`},{name:`ActionSwapRollIconProps`,kind:`type`},{name:`ActionSwapRollButton`,kind:`component`,propsType:`ActionSwapRollButtonProps`,inline:!1,union:!1,props:[{name:`items`,type:`ActionSwapItem[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string, item: ActionSwapItem) => void`,optional:!0},{name:`variant`,type:`ActionSwapButtonVariant`,optional:!0},{name:`size`,type:`ActionSwapButtonSize`,optional:!0},{name:`iconOnly`,type:`boolean`,optional:!0},{name:`cycle`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:281,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ActionSwapRollText`,kind:`component`,propsType:`ActionSwapRollTextProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ActionSwapRollIcon`,kind:`component`,propsType:`ActionSwapRollIconProps`,inline:!0,union:!1,props:[{name:`value`,type:`string`,optional:!1},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/action-swap-roll.preview.tsx`,code:`"use client";

import { Moon, Send, Sparkles, Sun } from "lucide-react";
import { useState } from "react";
import {
  type ActionSwapItem,
  ActionSwapRollButton,
} from "@/components/vendor/beui/motion/action-swap-roll";

const TEXT_ITEMS: ActionSwapItem[] = [
  { id: "idle", label: "Save" },
  { id: "done", label: "Saved" },
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
    id: "send",
    label: "Send invite",
    icon: <Send className="h-4 w-4" />,
    ariaLabel: "Send invite",
  },
  {
    id: "sent",
    label: "Invite sent",
    icon: <Sparkles className="h-4 w-4" />,
    ariaLabel: "Invite sent",
  },
];

export function ActionSwapRollPreview() {
  const [textValue, setTextValue] = useState(TEXT_ITEMS[0]?.id);
  const [iconValue, setIconValue] = useState(ICON_ITEMS[0]?.id);
  const [ctaValue, setCtaValue] = useState(CTA_ITEMS[0]?.id);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ActionSwapRollButton
        items={TEXT_ITEMS}
        value={textValue}
        onValueChange={setTextValue}
        variant="secondary"
      />
      <ActionSwapRollButton
        items={ICON_ITEMS}
        value={iconValue}
        onValueChange={setIconValue}
        variant="outline"
        size="icon"
        iconOnly
      />
      <ActionSwapRollButton
        items={CTA_ITEMS}
        value={ctaValue}
        onValueChange={setCtaValue}
        variant="primary"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`The next text or icon rolls in from below with blur. 主要导出：ActionSwapRollButton、ActionSwapRollText、ActionSwapRollIcon。 最小用法：<ActionSwapRollButton items={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-action-swap-roll.md。`,upstream:`https://beui.dev/r/action-swap-roll.json`};export{e as default};