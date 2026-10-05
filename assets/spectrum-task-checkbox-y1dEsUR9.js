var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/task-checkbox.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/task-checkbox.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/task-checkbox-demo.json`},note:{summaryZh:`复选框（组件）。`,importLine:`import { TaskCheckbox } from "@/components/vendor/spectrum/task-checkbox";`,usage:`<TaskCheckbox label={…} />`,exports:[{name:`TaskCheckboxProps`,kind:`type`},{name:`TaskCheckbox`,kind:`component`,propsType:`TaskCheckboxProps`,inline:!1,union:!1,props:[{name:`checked`,type:`boolean`,optional:!0,doc:`Controlled checked state. Leave undefined for uncontrolled usage`},{name:`defaultChecked`,type:`boolean`,optional:!0,default:`false`,doc:`Initial checked state when uncontrolled. Default false`},{name:`onCheckedChange`,type:`(checked: boolean) => void`,optional:!0,doc:`Fires with the next checked state on every toggle`},{name:`label`,type:`ReactNode`,optional:!1,doc:`Task text next to the box; struck through while checked`},{name:`description`,type:`ReactNode`,optional:!0,doc:`Optional secondary line rendered under the label`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the row. Default "md"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged onto the row wrapper`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/task-checkbox-demo.json`,code:`"use client"

import React, { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { TaskCheckbox } from "@/components/vendor/spectrum/task-checkbox"

const SOFT_SPRING = { type: "spring", stiffness: 260, damping: 22 } as const

const TASKS = [
  { id: "wireframes", label: "Review onboarding wireframes" },
  { id: "standup", label: "Post standup update" },
  { id: "invoice", label: "Send the June invoice" },
  { id: "changelog", label: "Draft the changelog entry" },
]

export default function TaskCheckboxDemo() {
  const [done, setDone] = useState<Record<string, boolean>>({
    wireframes: false,
    standup: true,
    invoice: false,
    changelog: false,
  })

  const doneCount = TASKS.filter((task) => done[task.id]).length
  const allDone = doneCount === TASKS.length

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-sm rounded-xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Today
          </h3>
          <span className="text-xs tabular-nums text-neutral-500 dark:text-neutral-400">
            {doneCount}/{TASKS.length}
          </span>
        </div>

        <AnimatePresence initial={false}>
          {allDone && (
            <motion.div
              key="all-done"
              className="mt-3 flex w-fit items-center gap-1.5 rounded-full border border-neutral-200 bg-white py-1 pl-2 pr-2.5 dark:border-neutral-800 dark:bg-neutral-900"
              initial={{ opacity: 0, scale: 0.8, y: 4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
              transition={SOFT_SPRING}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-3 w-3 text-emerald-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12.5L10 17.5L19 7.5" />
              </svg>
              <span className="text-xs font-medium text-neutral-900 dark:text-neutral-100">
                All done
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-4 flex flex-col gap-3.5">
          {TASKS.map((task) => (
            <TaskCheckbox
              key={task.id}
              label={task.label}
              checked={done[task.id]}
              onCheckedChange={(checked) =>
                setDone((previous) => ({ ...previous, [task.id]: checked }))
              }
            />
          ))}
        </div>
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Check a task — fill, check draw, confetti and a strikethrough sweep
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A satisfying todo checkbox row with spring fill, drawn-in check, confetti burst and animated str… 主要导出：TaskCheckbox。 最小用法：<TaskCheckbox label={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/checkbox.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-task-checkbox.md。`,upstream:`https://ui.spectrumhq.in/r/task-checkbox.json`};export{e as default};