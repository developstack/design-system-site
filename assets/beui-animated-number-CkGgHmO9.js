var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/animated-number.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/animated-number.tsx`,export:`AnimatedNumberPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-number.preview.tsx`},note:{summaryZh:`数字动画（动效组件）。`,importLine:`import { AnimatedNumber } from "@/components/vendor/beui/motion/animated-number";`,usage:`<AnimatedNumber value={…} />`,exports:[{name:`AnimatedNumberProps`,kind:`type`},{name:`AnimatedNumber`,kind:`component`,propsType:`AnimatedNumberProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!1},{name:`duration`,type:`number`,optional:!0,default:`1.2`},{name:`format`,type:`(n: number) => string`,optional:!0,default:`(n) => Math.round(n).toLocaleString()`},{name:`className`,type:`string`,optional:!0},{name:`startOnView`,type:`boolean`,optional:!0,default:`true`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-number.preview.tsx`,code:`"use client";

import { AnimatedNumber } from "@/components/vendor/beui/motion/animated-number";

export function AnimatedNumberPreview() {
  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs text-muted-foreground">Monthly recurring revenue</p>
      <div className="text-4xl font-semibold tracking-tight text-foreground tabular-nums">
        <AnimatedNumber value={129480} format={(n) => \`$\${Math.round(n).toLocaleString()}\`} />
      </div>
      <p className="text-xs text-(--color-success)">+12.4% vs last month</p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Spring-driven count-up triggered when in view. 主要导出：AnimatedNumber。 最小用法：<AnimatedNumber value={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/number.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-animated-number.md。`,upstream:`https://beui.dev/r/animated-number.json`};export{e as default};