var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/activity-feed.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/activity-feed.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/activity-feed.tsx`},note:{summaryZh:null,importLine:`import { ActivityFeed } from "@/components/vendor/easyui/ui/activity-feed";`,usage:`<ActivityFeed events={…} />`,exports:[{name:`ActivityEventType`,kind:`type`},{name:`ActivityEventStatus`,kind:`type`},{name:`ActivityActor`,kind:`type`},{name:`ActivityEvent`,kind:`type`},{name:`ActivityFeedProps`,kind:`type`},{name:`ActivityFeed`,kind:`component`,propsType:`ActivityFeedProps`,inline:!1,union:!1,props:[{name:`events`,type:`ActivityEvent[]`,optional:!1,default:`[]`},{name:`enableLiveSimulation`,type:`boolean`,optional:!0,default:`true`},{name:`enableFilters`,type:`boolean`,optional:!0,default:`true`},{name:`enableSearch`,type:`boolean`,optional:!0,default:`true`},{name:`maxEntries`,type:`number`,optional:!0,default:`20`},{name:`onEventReplay`,type:`(event: ActivityEvent) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/activity-feed.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <div className="w-full max-w-[260px] space-y-1.5 pointer-events-none scale-100 sm:scale-100">
              <motion.div
                animate={{ y: hovered ? -1 : 0 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#0E0E0E] border border-[#1F1F1F]"
              >
                <span className={cn('w-2 h-2 rounded-full', hovered ? 'bg-emerald-400 animate-ping' : 'bg-emerald-400')} />
                <span className="text-[11px] text-[#FAFAFA] truncate">Edge Lambda deployed</span>
                <span className="ml-auto text-[9px] font-mono text-[#6B6B6B]">Just now</span>
              </motion.div>
              <motion.div
                animate={{ y: hovered ? 1 : 0 }}
                className="flex items-center gap-2 p-2 rounded-lg bg-[#0E0E0E] border border-[#1F1F1F]"
              >
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="text-[11px] text-[#FAFAFA] truncate">POST /v1/auth 200 OK</span>
                <span className="ml-auto text-[9px] font-mono text-[#6B6B6B]">18ms</span>
              </motion.div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A developer telemetry and audit log stream featuring category filtering, live real-time event simulation with Framer Motion slide inserti… 主要导出：ActivityFeed。 最小用法：<ActivityFeed events={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-activity-feed.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#activity-feed`};export{e as default};