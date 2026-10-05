var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/password-strength.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/password-strength.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/password-strength-demo.json`},note:{summaryZh:null,importLine:`import { PasswordStrengthInput } from "@/components/vendor/spectrum/password-strength";`,usage:`<PasswordStrengthInput />`,exports:[{name:`PasswordRule`,kind:`type`},{name:`PasswordStrengthInputProps`,kind:`type`},{name:`DEFAULT_RULES`,kind:`constant`,type:`PasswordRule[]`},{name:`PasswordStrengthInput`,kind:`component`,propsType:`PasswordStrengthInputProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0,doc:`Controlled value. Leave undefined for uncontrolled usage`},{name:`defaultValue`,type:`string`,optional:!0,default:`""`,doc:`Initial value when uncontrolled. Default ""`},{name:`onValueChange`,type:`(value: string) => void`,optional:!0,doc:`Fires with the next value on every keystroke`},{name:`rules`,type:`PasswordRule[]`,optional:!0,default:`DEFAULT_RULES`,doc:`Rules scored by the meter and listed in the checklist`},{name:`showChecklist`,type:`boolean`,optional:!0,default:`true`,doc:`Render the requirements checklist. Default true`},{name:`showMeter`,type:`boolean`,optional:!0,default:`true`,doc:`Render the strength meter and label. Default true`},{name:`placeholder`,type:`string`,optional:!0,default:`"Enter password"`,doc:`Placeholder of the input. Default "Enter password"`},{name:`id`,type:`string`,optional:!0,doc:`Id of the input element`},{name:`name`,type:`string`,optional:!0,doc:`Name of the input element`},{name:`autoComplete`,type:`string`,optional:!0,default:`"new-password"`,doc:`Autocomplete hint of the input. Default "new-password"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables the input and the visibility toggle`},{name:`onFocus`,type:`FocusEventHandler<HTMLInputElement>`,optional:!0,doc:`Forwarded to the input element`},{name:`onBlur`,type:`FocusEventHandler<HTMLInputElement>`,optional:!0,doc:`Forwarded to the input element`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged onto the wrapper`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/password-strength-demo.json`,code:`"use client"

import React from "react"
import { PasswordStrengthInput } from "@/components/vendor/spectrum/password-strength"

export default function PasswordStrengthDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
          Create account
        </h3>
        <div className="mt-5 flex flex-col gap-2">
          <label
            htmlFor="demo-password"
            className="text-sm font-medium leading-none text-neutral-900 dark:text-neutral-100"
          >
            Password
          </label>
          <PasswordStrengthInput id="demo-password" />
        </div>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Type a password — the meter fills and requirements check off as you go
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A password input with an animated four-segment strength meter, crossfading str… 主要导出：PasswordStrengthInput、DEFAULT_RULES。 最小用法：<PasswordStrengthInput />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/input.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-password-strength.md。`,upstream:`https://ui.spectrumhq.in/r/password-strength.json`};export{e as default};