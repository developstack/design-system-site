var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/star-rating.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/star-rating.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/star-rating-demo.json`},note:{summaryZh:null,importLine:`import { StarRating } from "@/components/vendor/spectrum/star-rating";`,usage:`<StarRating />`,exports:[{name:`StarRatingProps`,kind:`type`},{name:`StarRating`,kind:`component`,propsType:`StarRatingProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!0,doc:`Controlled rating value. Leave undefined for uncontrolled usage`},{name:`defaultValue`,type:`number`,optional:!0,default:`0`,doc:`Initial rating when uncontrolled. Default 0`},{name:`onValueChange`,type:`(value: number) => void`,optional:!0,doc:`Fires with the next rating on every commit`},{name:`max`,type:`number`,optional:!0,default:`5`,doc:`Number of stars rendered. Default 5`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the stars. Default "md"`},{name:`allowClear`,type:`boolean`,optional:!0,default:`true`,doc:`Clicking the committed star clears the rating to 0. Default true`},{name:`readOnly`,type:`boolean`,optional:!0,default:`false`,doc:`Display-only mode; supports fractional values like 4.3. Default false`},{name:`showValue`,type:`boolean`,optional:!0,default:`false`,doc:`Show a rolling "4/5" value label next to the stars. Default false`},{name:`label`,type:`string`,optional:!0,default:`"Rating"`,doc:`Accessible name of the rating group. Default "Rating"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/star-rating-demo.json`,code:`"use client"

import React from "react"
import { StarRating } from "@/components/vendor/spectrum/star-rating"

export default function StarRatingDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="flex flex-col items-center gap-3 rounded-xl border border-neutral-200 bg-white px-8 py-6 dark:border-neutral-800 dark:bg-neutral-900">
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          Rate your experience
        </p>
        <StarRating showValue label="Rate your experience" />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Hover to preview, click to commit — arrow keys work too
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`An animated star rating input with hover-preview wave, pop and sparkle burst on commit, rolling value label, and fract… 主要导出：StarRating。 最小用法：<StarRating />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/rating.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-star-rating.md。`,upstream:`https://ui.spectrumhq.in/r/star-rating.json`};export{e as default};