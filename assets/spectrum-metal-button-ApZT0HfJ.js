var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/metal-button.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`metal-fx`],registryDependencies:[`@developstack/spectrum-use-surface-theme`],preview:{kind:`example`,module:`examples/spectrum/metal-button.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/metal-button-demo.json`},note:{summaryZh:`按钮（组件）。`,importLine:`import { MetalButton } from "@/components/vendor/spectrum/metal-button";`,usage:`<MetalButton />`,exports:[{name:`MetalButtonProps`,kind:`type`},{name:`MetalButton`,kind:`component`,propsType:`MetalButtonProps`,inline:!1,union:!1,props:[{name:`preset`,type:`MetalFxPreset`,optional:!0,default:`'chromatic'`,doc:`Metal palette. Default "chromatic"`},{name:`theme`,type:`SurfaceTheme`,optional:!0,default:`'auto'`,doc:'"auto" follows a `.dark`/`.light` class on <html>, then the OS. Default "auto"'},{name:`strength`,type:`number`,optional:!0,default:`1`,doc:`Ring intensity 0–1. Default 1`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`'md'`,doc:`Pill height and type size. Default "md"`},{name:`paused`,type:`boolean`,optional:!0,default:`false`,doc:`Freeze the shader on its current frame`},{name:`className`,type:`string`,optional:!0,doc:`Classes for the inner button`},{name:`wrapperClassName`,type:`string`,optional:!0,doc:`Classes for the MetalFx wrapper`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`'button'`,from:`@types/react`}],inherited:[{package:`@types/react`,count:286,names:[]}]}],example:{url:`https://ui.spectrumhq.in/r/metal-button-demo.json`,code:`'use client';

import * as React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { MetalButton } from '@/components/vendor/spectrum/metal-button';

export default function MetalButtonDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-6 py-10">
      <div className="flex flex-wrap items-center justify-center gap-5">
        <MetalButton preset="chromatic">
          <Sparkles className="size-4" />
          Upgrade to Pro
        </MetalButton>
        <MetalButton preset="silver">Continue</MetalButton>
        <MetalButton preset="gold" size="lg">
          Get started
          <ArrowUpRight className="size-4" />
        </MetalButton>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        One shared WebGL shader paints every ring — chromatic, silver and gold presets.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`A pill button framed by a real-time WebGL liquid-metal ring, in chromatic, silver and gold presets. 主要导出：MetalButton。 最小用法：<MetalButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-metal-button.md。`,upstream:`https://ui.spectrumhq.in/r/metal-button.json`};export{e as default};