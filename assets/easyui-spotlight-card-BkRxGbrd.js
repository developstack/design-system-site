var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/spotlight-card.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/spotlight-card.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/spotlight-card.tsx`},note:{summaryZh:`卡片（动效组件）。`,importLine:`import { SpotlightCard } from "@/components/vendor/easyui/ui/spotlight-card";`,usage:`<SpotlightCard>…</SpotlightCard>`,exports:[{name:`SpotlightCardProps`,kind:`type`},{name:`SpotlightCard`,kind:`component`,propsType:`SpotlightCardProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`spotlightColor`,type:`string`,optional:!0,default:`'rgba(56, 189, 248, 0.08)'`},{name:`spotlightSize`,type:`number`,optional:!0,default:`350`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/spotlight-card.tsx`,code:`import { cn } from '@/components/vendor/easyui/lib/utils';
import { SpotlightCard } from '@/components/vendor/easyui/ui/spotlight-card';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <SpotlightCard className={cn('w-full p-4 transition-colors', hovered ? 'bg-[#141414] border-[#4A4A4A]' : 'bg-[#0E0E0E] border-[#1F1F1F]')}>
              <div className="flex items-center gap-2 mb-1">
                <span className={cn('w-1.5 h-1.5 rounded-full', hovered ? 'bg-emerald-400 animate-pulse' : 'bg-white')} />
                <span className="text-xs font-semibold text-[#FAFAFA]">Spotlight Sensor</span>
              </div>
              <p className="text-[11px] text-[#6B6B6B]">Hover pointer to track dynamic beam.</p>
            </SpotlightCard>
          </div>
        );
}
`},exampleNote:null}},docsField:`A dark elevated surface that illuminates border and inner surfaces dynamically based on mouse… 主要导出：SpotlightCard。 最小用法：<SpotlightCard>…</SpotlightCard>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-spotlight-card.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#spotlight-card`};export{e as default};