var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/number-ticker.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/number-ticker.tsx`,export:`NumberTickerPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/number-ticker.preview.tsx`},note:{summaryZh:`数字动画（动效组件）。`,importLine:`import { NumberTicker } from "@/components/vendor/beui/motion/number-ticker";`,usage:`<NumberTicker value={…} />`,exports:[{name:`NumberTickerProps`,kind:`type`},{name:`NumberTicker`,kind:`component`,propsType:`NumberTickerProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!1},{name:`pad`,type:`number`,optional:!0,doc:`Digits to pad to (left).`},{name:`duration`,type:`number`,optional:!0,default:`0.9`,doc:`Per-digit roll duration in seconds.`},{name:`stagger`,type:`number`,optional:!0,default:`0.04`,doc:`Stagger between digits.`},{name:`startOnView`,type:`boolean`,optional:!0,default:`true`,doc:`Render only after the element enters the viewport.`},{name:`prefix`,type:`string`,optional:!0},{name:`suffix`,type:`string`,optional:!0},{name:`blur`,type:`boolean`,optional:!0,default:`false`,doc:`Add a small blur during digit rolls.`},{name:`className`,type:`string`,optional:!0},{name:`digitClassName`,type:`string`,optional:!0},{name:`locale`,type:`boolean`,optional:!0,doc:`Insert locale group separators (commas). Server-component safe.`},{name:`format`,type:`(value: number) => string`,optional:!0,doc:"Custom formatter. Client-only — server components must use `locale` instead."}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/number-ticker.preview.tsx`,code:`"use client";

import { useEffect, useState } from "react";
import { NumberTicker } from "@/components/vendor/beui/motion/number-ticker";

export function NumberTickerPreview() {
  const [value, setValue] = useState(48273);
  useEffect(() => {
    const id = setInterval(() => setValue((v) => v + Math.floor(Math.random() * 50)), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-muted-foreground">Active users</p>
      <NumberTicker
        value={value}
        prefix=""
        className="text-4xl font-semibold tracking-tight text-foreground tabular-nums"
        format={(n) => n.toLocaleString()}
      />
      <p className="text-xs text-muted-foreground">live · updates every 2.5s</p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Slot-machine rolling digits with staggered entry. 主要导出：NumberTicker。 最小用法：<NumberTicker value={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/number.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-number-ticker.md。`,upstream:`https://beui.dev/r/number-ticker.json`};export{e as default};