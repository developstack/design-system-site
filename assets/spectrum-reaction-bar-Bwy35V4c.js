var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/reaction-bar.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/reaction-bar.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/reaction-bar-demo.json`},note:{summaryZh:null,importLine:`import { ReactionBar } from "@/components/vendor/spectrum/reaction-bar";`,usage:`<ReactionBar />`,exports:[{name:`Reaction`,kind:`type`},{name:`ReactionBarProps`,kind:`type`},{name:`ReactionBar`,kind:`component`,propsType:`ReactionBarProps`,inline:!1,union:!1,props:[{name:`reactions`,type:`Reaction[]`,optional:!0,doc:`Controlled reactions. Leave undefined for uncontrolled usage`},{name:`defaultReactions`,type:`Reaction[]`,optional:!0,default:`[]`,doc:`Initial reactions when uncontrolled. Default []`},{name:`onReactionsChange`,type:`(reactions: Reaction[]) => void`,optional:!0,doc:`Fires with the next reactions array on every change`},{name:`availableEmojis`,type:`string[]`,optional:!0,default:`DEFAULT_EMOJIS`,doc:`Emojis offered in the add popover`},{name:`addable`,type:`boolean`,optional:!0,default:`true`,doc:`Show the "+" add-reaction button. Default true`},{name:`size`,type:`"md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the chips. Default "md"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/reaction-bar-demo.json`,code:`"use client"

import React from "react"
import { ReactionBar } from "@/components/vendor/spectrum/reaction-bar"

export default function ReactionBarDemo() {
  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="w-full max-w-md rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            AK
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-2">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                Aisha Khan
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                2:14 PM
              </span>
            </div>
            <p className="mt-0.5 text-sm text-neutral-600 dark:text-neutral-400">
              Just shipped the new onboarding flow — would love your feedback
              before Friday!
            </p>
            <ReactionBar
              className="mt-2.5"
              defaultReactions={[
                { emoji: "👍", count: 4, reacted: true },
                { emoji: "🎉", count: 2 },
                { emoji: "🚀", count: 1 },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A Slack-style emoji reaction row with popping chips, direction-aware rolling counts, and a staggered emoji-picker popover. 主要导出：ReactionBar。 最小用法：<ReactionBar />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/spectrum-reaction-bar.md。`,upstream:`https://ui.spectrumhq.in/r/reaction-bar.json`};export{e as default};