var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/marquee.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/marquee.tsx`,export:`MarqueePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/marquee.preview.tsx`},note:{summaryZh:`跑马灯（动效组件）。`,importLine:`import { Marquee } from "@/components/vendor/beui/motion/marquee";`,usage:`<Marquee>…</Marquee>`,exports:[{name:`MarqueeProps`,kind:`type`},{name:`Marquee`,kind:`component`,propsType:`MarqueeProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`direction`,type:`"down" | "left" | "right" | "up"`,optional:!0,default:`"left"`},{name:`speed`,type:`number`,optional:!0,default:`30`},{name:`pauseOnHover`,type:`boolean`,optional:!0,default:`true`},{name:`gap`,type:`string`,optional:!0,default:`"1rem"`},{name:`className`,type:`string`,optional:!0},{name:`fade`,type:`boolean`,optional:!0,default:`true`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/marquee.preview.tsx`,code:`"use client";

import { Marquee } from "@/components/vendor/beui/motion/marquee";

const logos = ["Vercel", "Linear", "Stripe", "Figma", "GitHub", "Notion", "Loom", "Raycast"];

export function MarqueePreview() {
  return (
    <div className="w-full">
      <Marquee speed={25}>
        {logos.map((l) => (
          <div
            key={l}
            className="mx-4 flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-medium text-foreground"
          >
            {l}
          </div>
        ))}
      </Marquee>
    </div>
  );
}
`},exampleNote:null}},docsField:`Infinite horizontal or vertical scroll with pause-on-hover. 主要导出：Marquee。 最小用法：<Marquee>…</Marquee>。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-marquee.md。`,upstream:`https://beui.dev/r/marquee.json`};export{e as default};