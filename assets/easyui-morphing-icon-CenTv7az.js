var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/morphing-icon.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/morphing-icon.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/morphing-icon.tsx`},note:{summaryZh:null,importLine:`import { MorphingIcon } from "@/components/vendor/easyui/ui/morphing-icon";`,usage:`<MorphingIcon from={…} to={…} />`,exports:[{name:`MorphingIconProps`,kind:`type`},{name:`MorphingIcon`,kind:`component`,propsType:`MorphingIconProps`,inline:!1,union:!1,props:[{name:`from`,type:`ReactNode`,optional:!1},{name:`to`,type:`ReactNode`,optional:!1},{name:`active`,type:`boolean`,optional:!0,default:`false`},{name:`duration`,type:`number`,optional:!0,default:`0.3`},{name:`size`,type:`number`,optional:!0,default:`20`}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`default`,local:`MorphingIcon`,kind:`component`,propsType:`MorphingIconProps`,inline:!1,union:!1,props:[{name:`from`,type:`ReactNode`,optional:!1},{name:`to`,type:`ReactNode`,optional:!1},{name:`active`,type:`boolean`,optional:!0,default:`false`},{name:`duration`,type:`number`,optional:!0,default:`0.3`},{name:`size`,type:`number`,optional:!0,default:`20`}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/morphing-icon.tsx`,code:`import React, { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import { MorphingIcon } from '@/components/vendor/easyui/ui/morphing-icon';
import type { ComponentPreviewProps } from './preview-props';

const MorphingIconPreview: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const [active, setActive] = useState(false);
  const isEffectiveActive = isHovered || active;

  return (
    <div className="h-52 flex flex-col items-center justify-center p-4 gap-3 select-none">
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setActive((prev) => !prev);
        }}
        className={cn(
          "px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer flex items-center gap-2 text-xs font-medium shadow-xs",
          isEffectiveActive
            ? "bg-surface-hover border-border text-emerald-400"
            : "bg-surface-raised border-border text-text-secondary hover:text-text-primary hover:border-border-hover"
        )}
      >
        <MorphingIcon
          active={isEffectiveActive}
          from={<Bookmark className="w-4 h-4 text-text-muted" />}
          to={<BookmarkCheck className="w-4 h-4 text-emerald-400" />}
          size={16}
        />
        <span>{isEffectiveActive ? "Saved" : "Save"}</span>
      </div>
      <span className="text-[10px] font-mono text-text-muted">Hover or tap to morph</span>
    </div>
  );
};



export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return <MorphingIconPreview isHovered={hovered} />;
}
`},exampleNote:null}},docsField:`An animated micro-interaction wrapper that smoothly morphs between two icon states with… 主要导出：MorphingIcon。 最小用法：<MorphingIcon from={…} to={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/action-swap.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-morphing-icon.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#morphing-icon`};export{e as default};