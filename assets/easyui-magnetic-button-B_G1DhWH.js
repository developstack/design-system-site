var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/magnetic-button.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/magnetic-button.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/magnetic-button.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { MagneticButton } from "@/components/vendor/easyui/ui/magnetic-button";`,usage:`<MagneticButton>…</MagneticButton>`,exports:[{name:`MagneticButtonProps`,kind:`type`},{name:`MagneticButton`,kind:`component`,propsType:`MagneticButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`strength`,type:`number`,optional:!0,default:`0.35`},{name:`variant`,type:`"ghost" | "outline" | "primary" | "secondary"`,optional:!0,default:`'primary'`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`'md'`},{name:`className`,type:`string`,optional:!0},{name:`glow`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:286,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/magnetic-button.tsx`,code:`import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { MagneticButton } from '@/components/vendor/easyui/ui/magnetic-button';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <motion.div
              animate={{ scale: hovered ? 1.08 : 1, y: hovered ? -2 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <MagneticButton variant="primary" size="md">
                <span>Magnetic</span>
                <Sparkles className="w-3.5 h-3.5 text-[#D4D4D4]" />
              </MagneticButton>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A responsive button with subtle proximity-based physics that pulls towards the cursor on hove… 主要导出：MagneticButton。 最小用法：<MagneticButton>…</MagneticButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-magnetic-button.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#magnetic-button`};export{e as default};