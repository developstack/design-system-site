var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/pull-to-refresh.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/pull-to-refresh.tsx`,export:`PullToRefreshPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/pull-to-refresh.preview.tsx`},note:{summaryZh:`下拉刷新（动效组件）。`,importLine:`import { PullToRefresh } from "@/components/vendor/beui/motion/pull-to-refresh";`,usage:`<PullToRefresh onRefresh={…}>…</PullToRefresh>`,exports:[{name:`PullToRefreshStatus`,kind:`type`},{name:`PullToRefreshProps`,kind:`type`},{name:`PullToRefresh`,kind:`component`,propsType:`PullToRefreshProps`,inline:!1,union:!1,props:[{name:`onRefresh`,type:`() => void | Promise<void>`,optional:!1,doc:`Runs after the user pulls beyond the threshold and releases.`},{name:`children`,type:`ReactNode`,optional:!1},{name:`refreshing`,type:`boolean`,optional:!0,default:`false`,doc:`Keeps the indicator active while an externally managed refresh runs.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`threshold`,type:`number`,optional:!0,default:`76`,doc:`Resisted pull distance in pixels required to refresh.`},{name:`maxPull`,type:`number`,optional:!0,default:`132`,doc:`Maximum resisted pull distance in pixels.`},{name:`holdDistance`,type:`number`,optional:!0,default:`68`,doc:`Content offset in pixels while refreshing.`},{name:`pullingLabel`,type:`ReactNode`,optional:!0,default:`"Pull to refresh"`},{name:`releaseLabel`,type:`ReactNode`,optional:!0,default:`"Release to refresh"`},{name:`refreshingLabel`,type:`ReactNode`,optional:!0,default:`"Refreshing"`},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Refreshable content"`},{name:`className`,type:`string`,optional:!0},{name:`contentClassName`,type:`string`,optional:!0},{name:`indicatorClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/pull-to-refresh.preview.tsx`,code:`"use client";

import { Bell, CheckCircle2, GitPullRequest, MessageCircle } from "lucide-react";
import { useState } from "react";
import { PullToRefresh } from "@/components/vendor/beui/motion/pull-to-refresh";

const initialUpdates = [
  {
    id: 1,
    icon: GitPullRequest,
    title: "Motion review approved",
    detail: "The pull request is ready to merge.",
    time: "4m",
  },
  {
    id: 2,
    icon: MessageCircle,
    title: "New component feedback",
    detail: "The spring feels much closer to native now.",
    time: "18m",
  },
  {
    id: 3,
    icon: CheckCircle2,
    title: "Registry checks passed",
    detail: "All component files resolved successfully.",
    time: "31m",
  },
  {
    id: 4,
    icon: Bell,
    title: "Preview deployed",
    detail: "The latest build is ready to inspect.",
    time: "1h",
  },
  {
    id: 5,
    icon: MessageCircle,
    title: "Docs comment resolved",
    detail: "The usage example now covers async refreshes.",
    time: "2h",
  },
] as const;

export function PullToRefreshPreview() {
  const [refreshCount, setRefreshCount] = useState(0);
  const [latestUpdate, setLatestUpdate] = useState<number | null>(null);

  const updates = latestUpdate
    ? [
        {
          id: latestUpdate,
          icon: Bell,
          title: "You’re all caught up",
          detail: "The activity feed was refreshed just now.",
          time: "now",
        },
        ...initialUpdates,
      ]
    : initialUpdates;

  return (
    <div className="flex min-h-[34rem] w-full items-center justify-center p-4">
      <div className="w-full max-w-sm overflow-hidden rounded-[2rem] border border-border bg-background shadow-2xl">
        <PullToRefresh
          ariaLabel="Activity feed"
          className="h-[30rem]"
          onRefresh={async () => {
            await new Promise((resolve) => setTimeout(resolve, 900));
            const next = refreshCount + 1;
            setRefreshCount(next);
            setLatestUpdate(Date.now());
          }}
        >
          <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/90 px-5 py-4 backdrop-blur-md">
            <div>
              <p className="font-semibold text-foreground">Activity</p>
              <p className="text-xs text-muted-foreground">
                Pull down to check for updates
              </p>
            </div>
            <span className="rounded-full bg-muted px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
              {refreshCount ? \`\${refreshCount} refreshed\` : "live"}
            </span>
          </header>

          <div className="divide-y divide-border px-2 pb-3">
            {updates.map((update) => {
              const Icon = update.icon;

              return (
                <article key={update.id} className="flex gap-3 px-3 py-4">
                  <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border bg-card text-muted-foreground shadow-sm">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-medium text-foreground">
                        {update.title}
                      </p>
                      <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                        {update.time}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {update.detail}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </PullToRefresh>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Native-feeling pull-to-refresh container with drag resistance, threshold feedback and async refresh handling. 主要导出：PullToRefresh。 最小用法：<PullToRefresh onRefresh={…}>…</PullToRefresh>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-pull-to-refresh.md。`,upstream:`https://beui.dev/r/pull-to-refresh.json`};export{e as default};