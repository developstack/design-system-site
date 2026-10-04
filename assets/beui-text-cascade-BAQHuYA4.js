var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/text-cascade.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/text-cascade.tsx`,export:`TextCascadePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-cascade.preview.tsx`},note:{summaryZh:`文字动效（动效组件）。`,importLine:`import { TextCascade } from "@/components/vendor/beui/motion/text-cascade";`,usage:`<TextCascade text={…} />`,exports:[{name:`TextCascadeProps`,kind:`type`},{name:`TextCascade`,doc:`Letter-by-letter slot roll for standalone text — the old letters drop away as the new ones land, left to right. Same motion as the action-swap cascade variant, with a text-first API.`,kind:`component`,propsType:`TextCascadeProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1,doc:`Current text. Changing it cascades the letters to the new value.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/text-cascade.preview.tsx`,code:`"use client";

import { useEffect, useState } from "react";
import { TextCascade } from "@/components/vendor/beui/motion/text-cascade";

const PHRASES = ["Install skills", "Open settings", "Ship updates"];

export function TextCascadePreview() {
  const [phrase, setPhrase] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPhrase((p) => (p + 1) % PHRASES.length);
    }, 2400);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="flex w-full justify-center">
      <p className="text-lg font-medium text-foreground">
        <TextCascade text={PHRASES[phrase] ?? PHRASES[0]} />
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`Letter-by-letter slot roll for standalone text — old letters drop away as new ones land, left to right. 主要导出：TextCascade。 最小用法：<TextCascade text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-text-cascade.md。`,upstream:`https://beui.dev/r/text-cascade.json`};export{e as default};