var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/expandable-search.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/expandable-search.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/expandable-search.tsx`},note:{summaryZh:`搜索框（动效组件）。`,importLine:`import { ExpandableSearch } from "@/components/vendor/easyui/ui/expandable-search";`,usage:`<ExpandableSearch />`,exports:[{name:`ExpandableSearchProps`,kind:`type`},{name:`ExpandableSearch`,kind:`component`,propsType:`ExpandableSearchProps`,inline:!1,union:!1,props:[{name:`placeholder`,type:`string`,optional:!0,default:`'Search components, props...'`},{name:`onSearch`,type:`(query: string) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/expandable-search.tsx`,code:`import { motion } from 'motion/react';
import { ExpandableSearch } from '@/components/vendor/easyui/ui/expandable-search';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <motion.div animate={{ width: hovered ? '100%' : 'auto' }} className="flex justify-center">
              <ExpandableSearch placeholder="Search components..." />
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A compact search pill that smoothly widens on focus with shortcut hint pills and clear button. 主要导出：ExpandableSearch。 最小用法：<ExpandableSearch />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/search.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-expandable-search.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#expandable-search`};export{e as default};