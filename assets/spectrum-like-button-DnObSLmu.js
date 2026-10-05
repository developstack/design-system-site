var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/like-button.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/like-button.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/like-button-demo.json`},note:{summaryZh:`按钮（组件）。`,importLine:`import { LikeButton } from "@/components/vendor/spectrum/like-button";`,usage:`<LikeButton />`,exports:[{name:`LikeButtonProps`,kind:`type`},{name:`LikeButton`,kind:`component`,propsType:`LikeButtonProps`,inline:!1,union:!1,props:[{name:`liked`,type:`boolean`,optional:!0,doc:`Controlled liked state. Leave undefined for uncontrolled usage`},{name:`defaultLiked`,type:`boolean`,optional:!0,default:`false`,doc:`Initial liked state when uncontrolled. Default false`},{name:`onLikedChange`,type:`(liked: boolean) => void`,optional:!0,doc:`Fires with the next liked state on every toggle`},{name:`count`,type:`number`,optional:!0,doc:`Like total excluding the current user; +1 is shown while liked`},{name:`showCount`,type:`boolean`,optional:!0,default:`true`,doc:`Hide the rolling counter even when count is provided. Default true`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the button. Default "md"`},{name:`particleColors`,type:`string[]`,optional:!0,default:`DEFAULT_PARTICLE_COLORS`,doc:`Colors cycled across the burst particles`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`label`,type:`string`,optional:!0,default:`"Like"`,doc:`Accessible name of the action. Default "Like"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/like-button-demo.json`,code:`"use client"

import React from "react"
import { LikeButton } from "@/components/vendor/spectrum/like-button"

export default function LikeButtonDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="flex flex-wrap items-center justify-center gap-4">
        <LikeButton count={1248} />
        <LikeButton count={99} defaultLiked />
        <LikeButton showCount={false} />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Tap a heart — spring pop, ring pulse, particle burst and a rolling count
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A heart like button micro-interaction with a spring pop, ring pulse, radial particle burst, and a rolling odometer count. 主要导出：LikeButton。 最小用法：<LikeButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-like-button.md。`,upstream:`https://ui.spectrumhq.in/r/like-button.json`};export{e as default};