var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/face-rating.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/face-rating.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/face-rating-demo.json`},note:{summaryZh:null,importLine:`import { FaceRating } from "@/components/vendor/spectrum/face-rating";`,usage:`<FaceRating />`,exports:[{name:`FaceRatingProps`,kind:`type`},{name:`FaceRating`,kind:`component`,propsType:`FaceRatingProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!0,doc:`Controlled rating from 1-5; 0 means unset. Leave undefined for uncontrolled usage`},{name:`defaultValue`,type:`number`,optional:!0,default:`0`,doc:`Initial rating when uncontrolled. Default 0 (unset)`},{name:`onValueChange`,type:`(value: number) => void`,optional:!0,doc:`Fires with the next rating on every commit`},{name:`labels`,type:`[string, string, string, string, string]`,optional:!0,default:`DEFAULT_LABELS`,doc:`Mood names for levels 1-5, shown under the widget and read to screen readers`},{name:`showLabel`,type:`boolean`,optional:!0,default:`true`,doc:`Show the mood label under the segments. Default true`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the widget. Default "md"`},{name:`label`,type:`string`,optional:!0,default:`"How was your experience?"`,doc:`Accessible name of the radio group. Default "How was your experience?"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/face-rating-demo.json`,code:`"use client"

import React, { useState } from "react"
import { FaceRating } from "@/components/vendor/spectrum/face-rating"

export default function FaceRatingDemo() {
  const [rating, setRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="flex w-full max-w-sm flex-col items-center gap-6 rounded-2xl border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="text-center">
          <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
            How was your experience?
          </h3>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Hover a segment to preview, click to commit
          </p>
        </div>

        <FaceRating
          onValueChange={(value) => {
            setRating(value)
            setSubmitted(false)
          }}
        />

        <button
          type="button"
          disabled={rating === 0}
          onClick={() => setSubmitted(true)}
          className="h-9 w-full rounded-full bg-neutral-900 text-sm font-medium text-white transition-colors hover:bg-neutral-800 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 dark:focus-visible:ring-neutral-300"
        >
          {submitted ? "Thanks for the feedback!" : "Submit feedback"}
        </button>
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`A five-level feedback rating where one large SVG face morphs its mouth, eyes and color between moods as you hover and… 主要导出：FaceRating。 最小用法：<FaceRating />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/rating.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-face-rating.md。`,upstream:`https://ui.spectrumhq.in/r/face-rating.json`};export{e as default};