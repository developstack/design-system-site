var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/quantity-stepper.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/quantity-stepper.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/quantity-stepper-demo.json`},note:{summaryZh:`步骤条（组件）。`,importLine:`import { QuantityStepper } from "@/components/vendor/spectrum/quantity-stepper";`,usage:`<QuantityStepper />`,exports:[{name:`QuantityStepperProps`,kind:`type`},{name:`QuantityStepper`,kind:`component`,propsType:`QuantityStepperProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!0,doc:`Controlled value. Leave undefined for uncontrolled usage`},{name:`defaultValue`,type:`number`,optional:!0,default:`1`,doc:`Initial value when uncontrolled. Default 1`},{name:`onValueChange`,type:`(value: number) => void`,optional:!0,doc:`Fires with the next clamped value on every change`},{name:`min`,type:`number`,optional:!0,default:`0`,doc:`Lowest allowed value. Default 0`},{name:`max`,type:`number`,optional:!0,default:`99`,doc:`Highest allowed value. Default 99`},{name:`step`,type:`number`,optional:!0,default:`1`,doc:`Amount added or removed per press. Default 1`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the stepper. Default "md"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/quantity-stepper-demo.json`,code:`"use client"

import React, { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Headphones } from "lucide-react"
import { QuantityStepper } from "@/components/vendor/spectrum/quantity-stepper"

const UNIT_PRICE = 129

export default function QuantityStepperDemo() {
  const [quantity, setQuantity] = useState(1)
  const total = quantity * UNIT_PRICE

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          <Headphones size={24} aria-hidden="true" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Aurora Headphones
          </p>
          <span className="inline-flex overflow-hidden text-sm tabular-nums text-neutral-500 dark:text-neutral-400">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={total}
                className="inline-block"
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                // Short tween so the price keeps up with hold-to-repeat
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                \${total.toFixed(2)}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>
        <QuantityStepper
          value={quantity}
          onValueChange={setQuantity}
          min={1}
          max={10}
        />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Tap or hold the buttons — digits roll, the price follows, boundaries
        shake
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`An animated quantity input for carts and forms with rolling digits, hold-to-repeat acceleration,… 主要导出：QuantityStepper。 最小用法：<QuantityStepper />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/stepper.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-quantity-stepper.md。`,upstream:`https://ui.spectrumhq.in/r/quantity-stepper.json`};export{e as default};