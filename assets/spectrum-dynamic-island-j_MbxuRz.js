var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/motion/dynamic-island.tsx`,`components/vendor/spectrum/lib/ease.ts`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/dynamic-island.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/dynamic-island-demo.json`},note:{summaryZh:null,importLine:`import { DynamicIsland } from "@/components/vendor/spectrum/motion/dynamic-island";`,usage:`<DynamicIsland view={…} />`,exports:[{name:`DynamicIslandProps`,kind:`type`},{name:`DynamicIsland`,kind:`component`,propsType:`DynamicIslandProps`,inline:!1,union:!1,props:[{name:`view`,type:`string | null`,optional:!1,doc:"Active view id. `null` shows the compact pill."},{name:`compact`,type:`ReactNode`,optional:!0,doc:`Compact pill content, shown when no view is active.`},{name:`children`,type:`ReactNode`,optional:!0,doc:`DynamicIslandView elements.`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`DynamicIslandViewProps`,kind:`type`},{name:`DynamicIslandView`,kind:`component`,propsType:`DynamicIslandViewProps`,inline:!1,union:!1,props:[{name:`id`,type:`string`,optional:!1,doc:"Matches the parent `view` prop when active."},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/dynamic-island-demo.json`,code:`'use client';

import * as React from 'react';
import { Mic, Music2, Phone, Timer } from 'lucide-react';
import { DynamicIsland, DynamicIslandView } from '@/components/vendor/spectrum/motion/dynamic-island';

const VIEWS = [
  { id: 'timer', label: 'Timer', icon: Timer },
  { id: 'music', label: 'Music', icon: Music2 },
  { id: 'call', label: 'Call', icon: Phone },
] as const;

export default function DynamicIslandDemo() {
  const [view, setView] = React.useState<string | null>('timer');

  return (
    <div className="flex w-full flex-col items-center gap-6 py-10">
      <div className="flex min-h-[120px] w-full items-start justify-center">
        <DynamicIsland
          view={view}
          compact={
            <span className="flex items-center gap-2 px-3 py-2 text-white">
              <Mic className="size-3.5 text-emerald-400" />
              <span className="size-1.5 rounded-full bg-orange-400" />
            </span>
          }
        >
          <DynamicIslandView id="timer">
            <div className="flex items-center gap-4 px-4 py-3 text-white">
              <span className="flex size-9 items-center justify-center rounded-full bg-orange-500/20 text-orange-400">
                <Timer className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] uppercase tracking-wide text-white/60">Focus</p>
                <p className="font-mono text-xl tabular-nums">24:59</p>
              </div>
              <button
                type="button"
                className="ms-2 rounded-full bg-white/12 px-3 py-1.5 text-xs font-medium hover:bg-white/20"
              >
                Pause
              </button>
            </div>
          </DynamicIslandView>
          <DynamicIslandView id="music">
            <div className="flex items-center gap-4 px-4 py-3 text-white">
              <span className="size-10 rounded-lg bg-gradient-to-br from-fuchsia-500 to-orange-400" />
              <div className="leading-tight">
                <p className="text-sm font-medium">Midnight City</p>
                <p className="text-xs text-white/60">M83</p>
              </div>
              <span className="ms-3 flex items-end gap-0.5">
                {[8, 14, 10, 16].map((h, i) => (
                  <span key={i} className="w-1 rounded-full bg-emerald-400" style={{ height: h }} />
                ))}
              </span>
            </div>
          </DynamicIslandView>
          <DynamicIslandView id="call">
            <div className="flex items-center gap-4 px-4 py-3 text-white">
              <span className="flex size-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <Phone className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-medium">Marcus Reid</p>
                <p className="text-xs text-white/60">02:14 · mobile</p>
              </div>
              <button
                type="button"
                className="ms-2 rounded-full bg-rose-500 px-3 py-1.5 text-xs font-medium hover:bg-rose-400"
              >
                End
              </button>
            </div>
          </DynamicIslandView>
        </DynamicIsland>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => setView(null)}
          className={\`rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors \${view === null ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900' : 'border-black/10 text-neutral-600 hover:bg-black/4 dark:border-white/12 dark:text-neutral-300 dark:hover:bg-white/6'}\`}
        >
          Compact
        </button>
        {VIEWS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setView(id)}
            className={\`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors \${view === id ? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900' : 'border-black/10 text-neutral-600 hover:bg-black/4 dark:border-white/12 dark:text-neutral-300 dark:hover:bg-white/6'}\`}
          >
            <Icon className="size-3.5" /> {label}
          </button>
        ))}
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`An iOS-style island pill that morphs between live activity views with a boun… 主要导出：DynamicIsland、DynamicIslandView。 最小用法：<DynamicIsland view={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/island.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-dynamic-island.md。`,upstream:`https://ui.spectrumhq.in/r/dynamic-island.json`};export{e as default};