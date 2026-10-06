var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/kbd-key.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/kbd-key.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/kbd-key-demo.json`},note:{summaryZh:null,importLine:`import { KbdKey } from "@/components/vendor/spectrum/kbd-key";`,usage:`<KbdKey>…</KbdKey>`,exports:[{name:`KbdKeyProps`,kind:`type`},{name:`KbdComboProps`,kind:`type`},{name:`KbdKey`,kind:`component`,propsType:`KbdKeyProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1,doc:`Cap legend, e.g. "K", "⌘" or "esc"`},{name:`keyName`,type:`string`,optional:!0,doc:`Key to match against KeyboardEvent.key, case-insensitively. Friendly names are supported: "meta"/"cmd", "ctrl", "shift", "alt"/"option", "enter", "escape"/"esc", "space", "up"/"down"/"left"/"right". Derived from children when it is a plain string; symbol legends like "⌘" need an explicit keyName`},{name:`listen`,type:`boolean`,optional:!0,default:`true`,doc:`Depress the cap while the real key is held (window listener). Default true`},{name:`onPress`,type:`() => void`,optional:!0,doc:`Fires once per press — on a matching keydown or a pointer tap. Also wraps the cap in a button`},{name:`size`,type:`"md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the cap. Default "md"`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`KbdCombo`,kind:`component`,propsType:`KbdComboProps`,inline:!1,union:!1,props:[{name:`keys`,type:`string`,optional:!1,doc:`"+"-separated keys, e.g. "meta+k" or "shift+?"`},{name:`listen`,type:`boolean`,optional:!0,default:`true`,doc:`Depress each cap while its real key is held. Default true`},{name:`onTrigger`,type:`() => void`,optional:!0,doc:`Fires once each time every key in the combo is held down simultaneously`},{name:`size`,type:`"md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the caps. Default "md"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/kbd-key-demo.json`,code:`"use client"

import React from "react"
import { motion, useAnimationControls } from "motion/react"
import { KbdCombo } from "@/components/vendor/spectrum/kbd-key"

export default function KbdKeyDemo() {
  const controls = useAnimationControls()

  const handleTrigger = () => {
    controls.start({
      boxShadow: [
        "0 0 0 0px rgba(163, 163, 163, 0)",
        "0 0 0 4px rgba(163, 163, 163, 0.45)",
        "0 0 0 0px rgba(163, 163, 163, 0)",
      ],
      transition: { duration: 0.6, ease: "easeOut" },
    })
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <motion.div
        animate={controls}
        className="flex h-10 w-full max-w-sm items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 dark:border-neutral-700 dark:bg-neutral-900"
      >
        <span className="flex items-center gap-2 text-sm text-neutral-400">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          Search documentation…
        </span>
        <KbdCombo keys="meta+k" onTrigger={handleTrigger} />
      </motion.div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Press ⌘ K on your keyboard — the caps react
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A 3D keycap that physically depresses when the real key is pressed, with combo shortcuts that pulse and fire… 主要导出：KbdKey、KbdCombo。 最小用法：<KbdKey>…</KbdKey>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/kbd.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-kbd-key.md。`,upstream:`https://ui.spectrumhq.in/r/kbd-key.json`};export{e as default};