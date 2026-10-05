var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/animated-switch.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/animated-switch.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/animated-switch-demo.json`},note:{summaryZh:`开关（组件）。`,importLine:`import { AnimatedSwitch } from "@/components/vendor/spectrum/animated-switch";`,usage:`<AnimatedSwitch />`,exports:[{name:`AnimatedSwitchProps`,kind:`type`},{name:`AnimatedSwitch`,kind:`component`,propsType:`AnimatedSwitchProps`,inline:!1,union:!1,props:[{name:`checked`,type:`boolean`,optional:!0,doc:`Controlled checked state. Leave undefined for uncontrolled usage`},{name:`defaultChecked`,type:`boolean`,optional:!0,default:`false`,doc:`Initial checked state when uncontrolled. Default false`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,optional:!0,doc:`Fires with the next checked state whenever a toggle commits`},{name:`onIcon`,type:`ReactNode`,optional:!0,doc:`Icon shown inside the knob while on; crossfades with offIcon on toggle`},{name:`offIcon`,type:`ReactNode`,optional:!0,doc:`Icon shown inside the knob while off; crossfades with onIcon on toggle`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the switch. Default "md"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`label`,type:`string`,optional:!0,default:`"Toggle"`,doc:`Accessible name of the switch. Default "Toggle"`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged with the default track styles`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/animated-switch-demo.json`,code:`"use client"

import React from "react"
import { AnimatedSwitch } from "@/components/vendor/spectrum/animated-switch"

const SETTINGS = [
  {
    title: "Email notifications",
    description: "Product updates and announcements",
    defaultChecked: true,
  },
  {
    title: "Public profile",
    description: "Anyone can view your profile",
    defaultChecked: false,
  },
  {
    title: "Weekly digest",
    description: "A summary in your inbox every Monday",
    defaultChecked: true,
  },
]

export default function AnimatedSwitchDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-sm divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white dark:divide-neutral-800 dark:border-neutral-800 dark:bg-neutral-900">
        {SETTINGS.map((setting) => (
          <div
            key={setting.title}
            className="flex items-center justify-between gap-4 px-4 py-3.5"
          >
            <div className="flex flex-col">
              <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                {setting.title}
              </span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">
                {setting.description}
              </span>
            </div>
            <AnimatedSwitch
              defaultChecked={setting.defaultChecked}
              label={setting.title}
            />
          </div>
        ))}
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Press and hold to see the knob stretch — or drag it
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`An iOS-quality animated toggle switch with a press-to-stretch knob, drag-to-toggle with flick support, and o… 主要导出：AnimatedSwitch。 最小用法：<AnimatedSwitch />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/switch.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-animated-switch.md。`,upstream:`https://ui.spectrumhq.in/r/animated-switch.json`};export{e as default};