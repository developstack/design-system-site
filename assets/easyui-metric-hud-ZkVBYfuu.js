var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/metric-hud.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/metric-hud.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/metric-hud.tsx`},note:{summaryZh:null,importLine:`import { MetricHUD } from "@/components/vendor/easyui/ui/metric-hud";`,usage:`<MetricHUD metrics={…} />`,exports:[{name:`MetricTrend`,kind:`type`},{name:`MetricDelta`,kind:`type`},{name:`MetricItem`,kind:`type`},{name:`MetricHUDProps`,kind:`type`},{name:`MetricHUD`,kind:`component`,propsType:`MetricHUDProps`,inline:!1,union:!1,props:[{name:`metrics`,type:`MetricItem[]`,optional:!1,default:`[]`},{name:`timeRanges`,type:`string[]`,optional:!0,default:`['1h', '24h', '7d', '30d']`},{name:`defaultTimeRange`,type:`string`,optional:!0,default:`'24h'`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/metric-hud.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <div className="w-full max-w-[260px] p-3 rounded-xl bg-[#0E0E0E] border border-[#1F1F1F] pointer-events-none scale-100 sm:scale-100 shadow-xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] text-[#6B6B6B]">p99 Latency</span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">{hovered ? '-24.8%' : '-18.4%'}</span>
              </div>
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-lg font-bold font-mono text-[#FAFAFA]">{hovered ? '11.8' : '14.2'}</span>
                <span className="text-[10px] font-mono text-[#6B6B6B]">ms</span>
              </div>
              <div className="h-6 w-full flex items-end gap-1">
                {[35, 45, 55, 40, 65, 75, 50, 85, 90, 60, 40, 30].map((h, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: hovered ? \`\${Math.min(100, h + 15)}%\` : \`\${h}%\` }}
                    transition={{ duration: 0.3, delay: i * 0.02 }}
                    className={cn('flex-1 rounded-t', hovered ? 'bg-[#3B82F6]' : 'bg-white/20')}
                  />
                ))}
              </div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`An interactive developer telemetry card featuring hardware-accelerated SVG sparklines, pointer-scrubbing poi… 主要导出：MetricHUD。 最小用法：<MetricHUD metrics={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-metric-hud.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#metric-hud`};export{e as default};