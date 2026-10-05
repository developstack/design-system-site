var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/floating-action-dock.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/floating-action-dock.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/floating-action-dock.tsx`},note:{summaryZh:`程序坞（动效组件）。`,importLine:`import { FloatingActionDock } from "@/components/vendor/easyui/ui/floating-action-dock";`,usage:`<FloatingActionDock items={…} />`,exports:[{name:`DockItem`,kind:`type`},{name:`FloatingActionDockProps`,kind:`type`},{name:`FloatingActionDock`,kind:`component`,propsType:`FloatingActionDockProps`,inline:!1,union:!1,props:[{name:`items`,type:`DockItem[]`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`activeId`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/floating-action-dock.tsx`,code:`import { motion } from 'motion/react';
import { Sparkles, Code2, Terminal } from 'lucide-react';
import { FloatingActionDock } from '@/components/vendor/easyui/ui/floating-action-dock';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <motion.div animate={{ y: hovered ? -3 : 0 }} transition={{ type: 'spring', stiffness: 350, damping: 20 }}>
              <FloatingActionDock
                items={[
                  { id: '1', label: 'Code', icon: <Code2 /> },
                  { id: '2', label: 'Term', icon: <Terminal /> },
                  { id: '3', label: 'AI', icon: <Sparkles /> },
                ]}
                activeId={hovered ? '3' : '1'}
              />
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A floating quick-action toolbar inspired by macOS dock physics with smooth magnification… 主要导出：FloatingActionDock。 最小用法：<FloatingActionDock items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/nav.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-floating-action-dock.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#floating-action-dock`};export{e as default};