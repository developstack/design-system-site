var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/dynamic-island.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/dynamic-island.tsx`,export:`DynamicIslandPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/dynamic-island.preview.tsx`},note:{summaryZh:null,importLine:`import { DynamicIsland } from "@/components/vendor/beui/motion/dynamic-island";`,usage:`<DynamicIsland view={…} />`,exports:[{name:`DynamicIslandProps`,kind:`type`},{name:`DynamicIsland`,kind:`component`,propsType:`DynamicIslandProps`,inline:!1,union:!1,props:[{name:`view`,type:`string | null`,optional:!1,doc:"Active view id. `null` shows the compact pill."},{name:`compact`,type:`ReactNode`,optional:!0,doc:`Compact pill content, shown when no view is active.`},{name:`children`,type:`ReactNode`,optional:!0,doc:`DynamicIslandView elements.`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`DynamicIslandViewProps`,kind:`type`},{name:`DynamicIslandView`,kind:`component`,propsType:`DynamicIslandViewProps`,inline:!1,union:!1,props:[{name:`id`,type:`string`,optional:!1,doc:"Matches the parent `view` prop when active."},{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/dynamic-island.preview.tsx`,code:`"use client";

import { Music, Phone, PhoneOff, Timer } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/vendor/beui/motion/button";
import {
  DynamicIsland,
  DynamicIslandView,
} from "@/components/vendor/beui/motion/dynamic-island";
import { NumberTicker } from "@/components/vendor/beui/motion/number-ticker";

type IslandView = "call" | "timer" | "music" | null;

const BAR_DELAYS = [0, 0.18, 0.09, 0.27];

function EqBars() {
  const reduce = useReducedMotion();
  return (
    <span className="flex h-4 items-end gap-0.5" aria-hidden>
      {BAR_DELAYS.map((delay) => (
        <motion.span
          key={delay}
          animate={reduce ? undefined : { scaleY: [0.4, 1, 0.55, 0.9, 0.4] }}
          transition={{
            duration: 1.1,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
          className="h-full w-0.5 origin-bottom rounded-full bg-(--color-success)"
          style={{ scaleY: 0.6 }}
        />
      ))}
    </span>
  );
}

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return \`\${m}:\${String(s).padStart(2, "0")}\`;
}

export function DynamicIslandPreview() {
  const [view, setView] = useState<IslandView>(null);
  const [seconds, setSeconds] = useState(154);

  useEffect(() => {
    if (view !== "timer") return;
    const id = window.setInterval(() => {
      setSeconds((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [view]);

  return (
    <div className="flex w-full flex-col items-center gap-4">
      {/* Fixed-height, top-aligned zone: the island stays pinned at the top
          like under a notch and unfurls downward into reserved space. */}
      <div className="flex h-32 w-full items-start justify-center pt-2">
        <DynamicIsland
          view={view}
          compact={
            <>
              <span className="h-1.5 w-1.5 rounded-full bg-(--color-success)" />
              <span>9:41</span>
            </>
          }
        >
          <DynamicIslandView id="call" className="gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider opacity-60">
                Incoming call
              </span>
              <span className="text-sm font-semibold">Saurabh</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Decline"
                onClick={() => setView(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-destructive text-white"
              >
                <PhoneOff className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="Accept"
                onClick={() => setView(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-(--color-success) text-white"
              >
                <Phone className="h-3.5 w-3.5" />
              </button>
            </div>
          </DynamicIslandView>

          <DynamicIslandView id="timer" className="gap-3">
            <Timer className="h-4 w-4 text-(--color-warning)" />
            <span className="text-[10px] uppercase tracking-wider opacity-60">
              Timer
            </span>
            <NumberTicker
              value={seconds}
              format={formatClock}
              startOnView={false}
              duration={0.5}
              className="text-sm font-semibold"
            />
          </DynamicIslandView>

          <DynamicIslandView id="music" className="gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-background/15">
              <Music className="h-3.5 w-3.5" />
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs font-semibold leading-tight">
                Midnight City
              </span>
              <span className="text-[10px] opacity-60">M83</span>
            </div>
            <EqBars />
          </DynamicIslandView>
        </DynamicIsland>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-2">
        <Button size="sm" variant="secondary" onClick={() => setView("call")}>
          Call
        </Button>
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            setSeconds(154);
            setView("timer");
          }}
        >
          Timer
        </Button>
        <Button size="sm" variant="secondary" onClick={() => setView("music")}>
          Music
        </Button>
        <Button size="sm" variant="ghost" onClick={() => setView(null)}>
          Dismiss
        </Button>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`iOS-style island pill that morphs between live activity views with bouncy shell resize and blur crossfades. 主要导出：DynamicIsland、DynamicIslandView。 最小用法：<DynamicIsland view={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-dynamic-island.md。`,upstream:`https://beui.dev/r/dynamic-island.json`};export{e as default};