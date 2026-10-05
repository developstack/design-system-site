var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/interactive-timeline.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/interactive-timeline.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/interactive-timeline.tsx`},note:{summaryZh:null,importLine:`import { InteractiveTimeline } from "@/components/vendor/easyui/ui/interactive-timeline";`,usage:`<InteractiveTimeline items={…} />`,exports:[{name:`TimelineStatus`,kind:`type`},{name:`TimelineMetric`,kind:`type`},{name:`TimelineItem`,kind:`type`},{name:`InteractiveTimelineProps`,kind:`type`},{name:`InteractiveTimeline`,kind:`component`,propsType:`InteractiveTimelineProps`,inline:!1,union:!1,props:[{name:`items`,type:`TimelineItem[]`,optional:!1,default:`[]`},{name:`defaultSelectedId`,type:`string`,optional:!0},{name:`onItemSelect`,type:`(item: TimelineItem) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`collapsible`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/interactive-timeline.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <div className="w-full max-w-[260px] space-y-2 pointer-events-none scale-100 sm:scale-100">
              <motion.div
                animate={{ x: hovered ? 2 : 0 }}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0E0E0E] border border-[#1F1F1F]"
              >
                <span className="w-4 h-4 rounded-full bg-[#FAFAFA] text-[#050505] flex items-center justify-center text-[9px] font-bold">✓</span>
                <span className="text-[11px] font-medium text-[#FAFAFA]">Edge Build Verified</span>
                <span className="ml-auto text-[9px] font-mono text-emerald-400">48s</span>
              </motion.div>
              <motion.div
                animate={{ x: hovered ? 4 : 0, borderColor: hovered ? '#4A4A4A' : '#1F1F1F' }}
                className="flex items-center gap-2.5 p-2 rounded-lg bg-[#0E0E0E] border border-[#1F1F1F]"
              >
                <span className={cn('w-4 h-4 rounded-full border border-white flex items-center justify-center text-[8px] text-white', hovered && 'animate-spin')}>●</span>
                <span className="text-[11px] font-medium text-[#A1A1A1]">Global Replication</span>
                <span className="ml-auto text-[9px] font-mono text-emerald-400 font-medium">{hovered ? 'Deployed ✓' : 'Active'}</span>
              </motion.div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A developer-focused milestone and deployment timeline featuring dynamic progress lines, pulsating status nodes, expandable telemetry card… 主要导出：InteractiveTimeline。 最小用法：<InteractiveTimeline items={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-interactive-timeline.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#interactive-timeline`};export{e as default};