var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/smart-comparison.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/smart-comparison.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/smart-comparison.tsx`},note:{summaryZh:null,importLine:`import { SmartComparison } from "@/components/vendor/easyui/ui/smart-comparison";`,usage:`<SmartComparison plans={…} categories={…} />`,exports:[{name:`ComparisonPlan`,kind:`type`},{name:`ComparisonFeature`,kind:`type`},{name:`ComparisonCategory`,kind:`type`},{name:`SmartComparisonProps`,kind:`type`},{name:`SmartComparison`,kind:`component`,propsType:`SmartComparisonProps`,inline:!1,union:!1,props:[{name:`plans`,type:`ComparisonPlan[]`,optional:!1,default:`[]`},{name:`categories`,type:`ComparisonCategory[]`,optional:!1,default:`[]`},{name:`defaultPlanId`,type:`string`,optional:!0},{name:`enableSearch`,type:`boolean`,optional:!0,default:`true`},{name:`enableDiffFilter`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/smart-comparison.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <motion.div
              animate={{ y: hovered ? -2 : 0, borderColor: hovered ? '#4A4A4A' : '#1F1F1F' }}
              className="w-full max-w-[260px] p-3 rounded-xl bg-[#0E0E0E] border border-[#1F1F1F] pointer-events-none scale-100 sm:scale-100 transition-colors shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-[#FAFAFA]">Pro Tier</span>
                <span className={cn('text-[10px] font-mono px-1.5 py-0.5 rounded border transition-colors', hovered ? 'bg-[#FAFAFA] text-[#050505] border-[#FAFAFA]' : 'text-[#FAFAFA] bg-[#141414] border-[#1F1F1F]')}>$29/mo</span>
              </div>
              <div className="space-y-1 text-[10px] font-mono text-[#6B6B6B]">
                <div className="flex justify-between"><span>Multi-Region</span><span className="text-[#FAFAFA]">✓ Included</span></div>
                <div className="flex justify-between"><span>Concurrency</span><span className="text-[#FAFAFA]">250 nodes</span></div>
              </div>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`An interactive feature matrix and SaaS tier comparison component featuring live difference filtering, collapsible specification categorie… 主要导出：SmartComparison。 最小用法：<SmartComparison plans={…} categories={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-smart-comparison.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#smart-comparison`};export{e as default};