var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/particle-delete.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/particle-delete.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/particle-delete.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/particle-delete.tsx`},note:{summaryZh:null,importLine:`import { ParticleDelete } from "@/components/vendor/easyui/ui/particle-delete";`,usage:`<ParticleDelete />`,exports:[{name:`ParticleDeleteItem`,kind:`type`},{name:`ParticleDeleteContainerProps`,kind:`type`},{name:`ParticleDeleteContainer`,doc:`Reusable wrapper component that attaches the particle dissolution effect to any element upon delete.`,kind:`component`,propsType:`ParticleDeleteContainerProps & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[{name:`onDelete`,type:`() => void`,optional:!0},{name:`options`,type:`ParticleDeleteOptions`,optional:!0},{name:`children`,type:`((args: { isDeleting: boolean; handleDelete: () => void; }) => ReactNode) | ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:278,names:[]}]},{name:`ParticleDeleteProps`,kind:`type`},{name:`ParticleDelete`,doc:`EasyUI ParticleDelete Interactive Component Minimal, refined card deck demonstrating particle dissolution on deletion.`,kind:`component`,propsType:`ParticleDeleteProps`,inline:!1,union:!1,props:[{name:`initialItems`,type:`ParticleDeleteItem[]`,optional:!0,default:`DEFAULT_SAMPLE_ITEMS`},{name:`className`,type:`string`,optional:!0},{name:`options`,type:`ParticleDeleteOptions`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/particle-delete.tsx`,code:`import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <motion.div
              animate={{ scale: hovered ? 1.02 : 1 }}
              className="w-full max-w-[240px] p-2.5 rounded-lg bg-[#0E0E0E] border border-[#1F1F1F] pointer-events-none scale-100 sm:scale-100 flex items-center justify-between gap-2 shadow-xs"
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-6 h-6 rounded-md bg-[#141414] border border-[#1F1F1F] flex items-center justify-center text-[#A1A1A1]">
                  <Terminal className="w-3 h-3" />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-medium text-[#FAFAFA] truncate">Edge Cluster</div>
                  <div className="text-[9px] font-mono text-[#6B6B6B]">12 workers</div>
                </div>
              </div>
              <span className={cn('p-1 rounded text-[9px] font-mono shrink-0 transition-colors', hovered ? 'bg-rose-500 text-white' : 'text-rose-400 bg-rose-500/10')}>
                Delete
              </span>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`Premium physics-driven particle dissolution delete animation that rasterizes components into thousands of authentic tiny pixels and dispe… 主要导出：ParticleDelete、ParticleDeleteContainer。 最小用法：<ParticleDelete />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-particle-delete.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#particle-delete`};export{e as default};