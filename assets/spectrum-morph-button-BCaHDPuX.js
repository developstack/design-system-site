var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/morph-button.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/morph-button.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/morph-button-demo.json`},note:{summaryZh:`按钮（组件）。`,importLine:`import { MorphButton } from "@/components/vendor/spectrum/morph-button";`,usage:`<MorphButton>…</MorphButton>`,exports:[{name:`MorphButtonState`,kind:`type`},{name:`MorphButtonProps`,kind:`type`},{name:`MorphButton`,kind:`component`,propsType:`MorphButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1,doc:`Idle content of the button — usually a short action label`},{name:`onAction`,type:`() => void | Promise<void>`,optional:!0,doc:`Async work to run on click when uncontrolled. The button shows loading while the promise is pending, success when it resolves, error when it throws, then auto-resets to idle after resetDelay`},{name:`state`,type:`MorphButtonState`,optional:!0,doc:`Controlled state. When provided the internal machine is bypassed and the button renders exactly this state`},{name:`onClick`,type:`MouseEventHandler<HTMLButtonElement>`,optional:!0,doc:`Click handler; fires on idle clicks in both modes`},{name:`loadingLabel`,type:`string`,optional:!0,doc:`Label rendered next to the spinner while loading; spinner-only if omitted`},{name:`successLabel`,type:`string`,optional:!0,default:`"Done"`,doc:`Label shown next to the check in the success state. Default "Done"`},{name:`errorLabel`,type:`string`,optional:!0,default:`"Failed"`,doc:`Label shown next to the X in the error state. Default "Failed"`},{name:`resetDelay`,type:`number`,optional:!0,default:`DEFAULT_RESET_DELAY`,doc:`Milliseconds success/error is held before auto-resetting. Default 1800`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the button. Default "md"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/morph-button-demo.json`,code:`"use client"

import React from "react"
import { MorphButton } from "@/components/vendor/spectrum/morph-button"

const fakeSave = () =>
  new Promise<void>((resolve) => setTimeout(resolve, 1200))

export default function MorphButtonDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <MorphButton
        onAction={fakeSave}
        loadingLabel="Saving"
        successLabel="Saved"
      >
        Save changes
      </MorphButton>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Click to run the full idle → loading → success cycle
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A multi-state async action button that morphs between idle, loading, success and error with an arc… 主要导出：MorphButton。 最小用法：<MorphButton>…</MorphButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-morph-button.md。`,upstream:`https://ui.spectrumhq.in/r/morph-button.json`};export{e as default};