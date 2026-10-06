var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/hold-to-confirm.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/hold-to-confirm.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/hold-to-confirm-demo.json`},note:{summaryZh:null,importLine:`import { HoldToConfirmButton } from "@/components/vendor/spectrum/hold-to-confirm";`,usage:`<HoldToConfirmButton onConfirm={…} />`,exports:[{name:`HoldToConfirmButtonProps`,kind:`type`},{name:`HoldToConfirmButton`,kind:`component`,propsType:`HoldToConfirmButtonProps`,inline:!1,union:!1,props:[{name:`onConfirm`,type:`() => void`,optional:!1,doc:`Fires exactly once when the hold reaches completion`},{name:`duration`,type:`number`,optional:!0,default:`1200`,doc:`How long the button must be held, in milliseconds. Default 1200`},{name:`label`,type:`string`,optional:!0,default:`"Hold to delete"`,doc:`Idle label. Default "Hold to delete"`},{name:`confirmedLabel`,type:`string`,optional:!0,default:`"Deleted"`,doc:`Label shown after a completed hold. Default "Deleted"`},{name:`icon`,type:`ReactNode`,optional:!0,doc:`Replaces the default trash icon`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the button. Default "md"`},{name:`resetDelay`,type:`number`,optional:!0,default:`1500`,doc:`Milliseconds before resetting to idle after confirming; 0 stays confirmed. Default 1500`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/hold-to-confirm-demo.json`,code:`"use client"

import React, { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { HoldToConfirmButton } from "@/components/vendor/spectrum/hold-to-confirm"

export default function HoldToConfirmDemo() {
  const [deleted, setDeleted] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  const handleConfirm = () => {
    // Let the button's success morph play before removing the row
    timerRef.current = setTimeout(() => setDeleted(true), 900)
  }

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-sm">
        <AnimatePresence mode="wait" initial={false}>
          {!deleted ? (
            <motion.div
              key="project"
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-neutral-900 dark:text-white">
                  acme-website
                </p>
                <p className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-400">
                  Production · last deployed 2h ago
                </p>
              </div>
              <HoldToConfirmButton size="sm" onConfirm={handleConfirm} />
            </motion.div>
          ) : (
            <motion.div
              key="deleted"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-neutral-200 p-4 dark:border-neutral-800"
            >
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                acme-website was deleted.
              </p>
              <button
                type="button"
                onClick={() => setDeleted(false)}
                className="text-sm font-medium text-neutral-900 underline underline-offset-4 hover:text-neutral-600 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-950 dark:text-white dark:hover:text-neutral-300 dark:focus-visible:ring-neutral-300"
              >
                Restore
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Press and hold the button — release early to cancel
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A press-and-hold confirmation button for destructive actions with a… 主要导出：HoldToConfirmButton。 最小用法：<HoldToConfirmButton onConfirm={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/hold-to-confirm.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-hold-to-confirm.md。`,upstream:`https://ui.spectrumhq.in/r/hold-to-confirm.json`};export{e as default};