var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/reveal-card.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/reveal-card.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/reveal-card.tsx`},note:{summaryZh:`卡片（动效组件）。`,importLine:`import { RevealCard } from "@/components/vendor/easyui/ui/reveal-card";`,usage:`<RevealCard>…</RevealCard>`,exports:[{name:`RevealCardProps`,kind:`type`},{name:`RevealCard`,kind:`component`,propsType:`RevealCardProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`revealContent`,type:`ReactNode`,optional:!0},{name:`maxTilt`,type:`number`,optional:!0,default:`12`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/reveal-card.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import { RevealCard } from '@/components/vendor/easyui/ui/reveal-card';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <motion.div animate={{ rotateX: hovered ? 8 : 0, rotateY: hovered ? -8 : 0 }} className="w-full">
              <RevealCard
                revealContent={<span className="text-xs text-white font-medium">Revealed on hover tilt</span>}
                className={cn('p-4 transition-colors', hovered ? 'bg-[#141414] border-[#4A4A4A]' : 'bg-[#0E0E0E] border-[#1F1F1F]')}
              >
                <span className="text-xs font-semibold text-[#FAFAFA] block">3D Tilt & Glare</span>
                <span className="text-[11px] text-[#6B6B6B]">Hover cursor across surface</span>
              </RevealCard>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A high-definition product card with smooth cursor-driven 3D perspective rotation, dynamic glare, and reveale… 主要导出：RevealCard。 最小用法：<RevealCard>…</RevealCard>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-reveal-card.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#reveal-card`};export{e as default};