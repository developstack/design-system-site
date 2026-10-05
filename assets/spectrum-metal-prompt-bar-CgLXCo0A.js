var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/metal-prompt-bar.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`metal-fx`],registryDependencies:[`@developstack/spectrum-use-surface-theme`],preview:{kind:`example`,module:`examples/spectrum/metal-prompt-bar.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/metal-prompt-bar-demo.json`},note:{summaryZh:null,importLine:`import { MetalPromptBar } from "@/components/vendor/spectrum/metal-prompt-bar";`,usage:`<MetalPromptBar />`,exports:[{name:`MetalPromptBarProps`,kind:`type`},{name:`MetalPromptBar`,kind:`component`,propsType:`MetalPromptBarProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`string`,optional:!0,default:`'Build anything…'`,doc:`Placeholder for the empty composer. Default "Build anything…"`},{name:`chips`,type:`string[]`,optional:!0,default:`['Agent', 'Auto']`,doc:`Pills shown bottom-left; each one reflects the metal ring in dark mode. Default ["Agent", "Auto"]`},{name:`preset`,type:`MetalFxPreset`,optional:!0,default:`'chromatic'`,doc:`Metal palette for the send ring. Default "chromatic"`},{name:`theme`,type:`SurfaceTheme`,optional:!0,default:`'auto'`,doc:'"auto" follows a `.dark`/`.light` class on <html>, then the OS. Default "auto"'},{name:`onSubmit`,type:`(text: string) => void`,optional:!0,doc:`Fires with the trimmed text on Enter or the send button; the field clears afterwards`},{name:`onChipClick`,type:`(chip: string) => void`,optional:!0,doc:`Fires when a chip is clicked`},{name:`maxRows`,type:`number`,optional:!0,default:`6`,doc:`Max textarea rows before it scrolls. Default 6`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/metal-prompt-bar-demo.json`,code:`'use client';

import * as React from 'react';
import { MetalPromptBar } from '@/components/vendor/spectrum/metal-prompt-bar';

export default function MetalPromptBarDemo() {
  const [sent, setSent] = React.useState<string[]>([]);

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-[560px]">
        <MetalPromptBar
          chips={['Agent', 'Auto', 'Tools']}
          onSubmit={(text) => setSent((list) => [text, ...list].slice(0, 3))}
        />
      </div>
      {sent.length > 0 ? (
        <ul className="w-full max-w-[560px] space-y-1 text-sm text-neutral-600 dark:text-neutral-300">
          {sent.map((line, index) => (
            <li key={\`\${line}-\${index}\`} className="truncate">
              → {line}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Type and press Enter — in dark mode the chips reflect the send ring.
        </p>
      )}
    </div>
  );
}
`},exampleNote:null}},docsField:`An AI prompt bar with a live liquid-metal send button that reflects onto the chips beside it. 主要导出：MetalPromptBar。 最小用法：<MetalPromptBar />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/prompt-input.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-metal-prompt-bar.md。`,upstream:`https://ui.spectrumhq.in/r/metal-prompt-bar.json`};export{e as default};