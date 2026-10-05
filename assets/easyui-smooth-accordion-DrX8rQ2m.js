var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/smooth-accordion.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/smooth-accordion.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/smooth-accordion.tsx`},note:{summaryZh:`手风琴折叠面板（动效组件）。`,importLine:`import { SmoothAccordion } from "@/components/vendor/easyui/ui/smooth-accordion";`,usage:`<SmoothAccordion items={…} />`,exports:[{name:`AccordionItem`,kind:`type`},{name:`SmoothAccordionProps`,kind:`type`},{name:`SmoothAccordion`,kind:`component`,propsType:`SmoothAccordionProps`,inline:!1,union:!1,props:[{name:`items`,type:`AccordionItem[]`,optional:!1},{name:`allowMultiple`,type:`boolean`,optional:!0,default:`false`},{name:`defaultOpen`,type:`string[]`,optional:!0,default:`[]`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/smooth-accordion.tsx`,code:`import { SmoothAccordion } from '@/components/vendor/easyui/ui/smooth-accordion';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <div className="w-full">
              <SmoothAccordion
                items={[
                  {
                    id: 'item1',
                    title: 'Spring Animation',
                    content: 'Fluid expansion with zero layout jank.',
                  },
                ]}
                defaultOpen={['item1']}
              />
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`An accordion component with physics height transition, rotating chevron indicators, an… 主要导出：SmoothAccordion。 最小用法：<SmoothAccordion items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/accordion.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-smooth-accordion.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#smooth-accordion`};export{e as default};