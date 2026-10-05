var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/code-snippet-deck.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/code-snippet-deck.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/code-snippet-deck.tsx`},note:{summaryZh:null,importLine:`import { CodeSnippetDeck } from "@/components/vendor/easyui/ui/code-snippet-deck";`,usage:`<CodeSnippetDeck snippets={…} />`,exports:[{name:`SnippetParameter`,kind:`type`},{name:`SnippetItem`,kind:`type`},{name:`CodeSnippetDeckProps`,kind:`type`},{name:`CodeSnippetDeck`,kind:`component`,propsType:`CodeSnippetDeckProps`,inline:!1,union:!1,props:[{name:`snippets`,type:`SnippetItem[]`,optional:!1,default:`[]`},{name:`parameters`,type:`SnippetParameter[]`,optional:!0,default:`[]`},{name:`defaultLanguage`,type:`string`,optional:!0},{name:`showLineNumbers`,type:`boolean`,optional:!0,default:`true`},{name:`showWindowBar`,type:`boolean`,optional:!0,default:`true`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/code-snippet-deck.tsx`,code:`import { motion } from 'motion/react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <motion.div
              animate={{ y: hovered ? -2 : 0, rotate: hovered ? -1 : 0 }}
              className="w-full max-w-[260px] rounded-xl bg-[#0E0E0E] border border-[#1F1F1F] overflow-hidden pointer-events-none scale-100 sm:scale-100 shadow-xs"
            >
              <div className="px-2.5 py-1.5 bg-[#141414] border-b border-[#1F1F1F] flex items-center justify-between text-[10px] font-mono text-[#6B6B6B]">
                <span>client.ts</span>
                <span className="text-[#FAFAFA]">TypeScript</span>
              </div>
              <div className="p-2.5 font-mono text-[10px] text-[#A1A1A1] leading-relaxed">
                <div><span className="text-[#FAFAFA]">import</span> &#123; EasyUI &#125; <span className="text-[#FAFAFA]">from</span> <span className="text-white/70">"@easyui/sdk"</span>;</div>
                <div className={cn(hovered ? 'text-emerald-400' : 'text-[#6B6B6B]')}>{hovered ? '// Connected to cluster' : '// Instant completions API'}</div>
              </div>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`An interactive multi-runtime developer code snippet deck with runtime switching (cURL, TypeScript, Python, Go, Rust), live dynamic parame… 主要导出：CodeSnippetDeck。 最小用法：<CodeSnippetDeck snippets={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-code-snippet-deck.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#code-snippet-deck`};export{e as default};