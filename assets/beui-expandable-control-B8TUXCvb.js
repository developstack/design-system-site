var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/expandable-control.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/expandable-control.tsx`,export:`ExpandableControlPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/expandable-control.preview.tsx`},note:{summaryZh:null,importLine:`import { ExpandableButton } from "@/components/vendor/beui/motion/expandable-control";`,usage:`<ExpandableButton icon={…} label={…} />`,exports:[{name:`ExpandableButtonProps`,kind:`type`},{name:`ExpandableChipProps`,kind:`type`},{name:`ExpandableButton`,kind:`component`,propsType:`ExpandableButtonProps`,inline:!1,union:!1,props:[{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`icon`,type:`ReactNode`,optional:!1},{name:`label`,type:`ReactNode`,optional:!1},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`映射类型生成，来源无法定位`}],inherited:[{package:`映射类型生成，来源无法定位`,count:283,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ExpandableChip`,kind:`component`,propsType:`ExpandableChipProps`,inline:!1,union:!1,props:[{name:`expanded`,type:`boolean`,optional:!0},{name:`defaultExpanded`,type:`boolean`,optional:!0},{name:`onExpandedChange`,type:`(expanded: boolean) => void`,optional:!0},{name:`label`,type:`ReactNode`,optional:!1},{name:`actionIcon`,type:`ReactNode`,optional:!1},{name:`actionLabel`,type:`string`,optional:!1},{name:`onAction`,type:`() => void`,optional:!0},{name:`collapseOnAction`,type:`boolean`,optional:!0,default:`true`},{name:`disabled`,type:`boolean`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`labelClassName`,type:`string`,optional:!0},{name:`actionClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/expandable-control.preview.tsx`,code:`"use client";

import { Bell, X } from "lucide-react";
import {
  ExpandableButton,
  ExpandableChip,
} from "@/components/vendor/beui/motion/expandable-control";

export function ExpandableControlPreview() {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-2">
        <ExpandableButton
          icon={<Bell className="size-4" />}
          label="Notifications"
        />
      </div>
      <div className="flex items-center gap-2">
        <ExpandableChip
          label="React"
          actionIcon={<X className="size-3.5" />}
          actionLabel="Remove React"
        />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Click-to-expand button and chip controls that reveal a label or… 主要导出：ExpandableButton、ExpandableChip。 最小用法：<ExpandableButton icon={…} label={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-expandable-control.md。`,upstream:`https://beui.dev/r/expandable-control.json`};export{e as default};