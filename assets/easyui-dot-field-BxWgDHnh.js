var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/dot-field.tsx`,`components/vendor/easyui/ui/dot-field.css`,`components/vendor/easyui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/dot-field.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dot-field.tsx`},note:{summaryZh:null,importLine:`import { DotField } from "@/components/vendor/easyui/ui/dot-field";`,usage:`<DotField />`,exports:[{name:`DotFieldProps`,kind:`type`},{name:`DotField`,kind:`component`,propsType:`DotFieldProps`,inline:!1,union:!1,props:[{name:`dotRadius`,type:`number`,optional:!0,default:`1.5`,doc:`Radius of each individual dot (in px). Default: 1.5`},{name:`dotSpacing`,type:`number`,optional:!0,default:`14`,doc:`Spacing between adjacent dots (in px). Default: 14`},{name:`gradientFrom`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.12)'`,doc:`Linear gradient start color. Default: 'rgba(56, 189, 248, 0.35)'`},{name:`gradientTo`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.04)'`,doc:`Linear gradient end color. Default: 'rgba(168, 85, 247, 0.25)'`},{name:`className`,type:`string`,optional:!0,default:`''`,doc:`Optional container CSS class name`}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`default`,local:`DotField`,kind:`component`,propsType:`DotFieldProps`,inline:!1,union:!1,props:[{name:`dotRadius`,type:`number`,optional:!0,default:`1.5`,doc:`Radius of each individual dot (in px). Default: 1.5`},{name:`dotSpacing`,type:`number`,optional:!0,default:`14`,doc:`Spacing between adjacent dots (in px). Default: 14`},{name:`gradientFrom`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.12)'`,doc:`Linear gradient start color. Default: 'rgba(56, 189, 248, 0.35)'`},{name:`gradientTo`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.04)'`,doc:`Linear gradient end color. Default: 'rgba(168, 85, 247, 0.25)'`},{name:`className`,type:`string`,optional:!0,default:`''`,doc:`Optional container CSS class name`}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dot-field.tsx`,code:`import { DotField } from '@/components/vendor/easyui/ui/dot-field';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 relative rounded-lg overflow-hidden border border-[#1F1F1F] bg-[#0E0E0E]">
            <DotField
              dotRadius={1.5}
              dotSpacing={12}
              gradientFrom={hovered ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.25)'}
              gradientTo="rgba(255, 255, 255, 0.08)"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-[10px] font-mono text-[#6B6B6B] bg-[#141414]/90 px-2.5 py-1 rounded-md border border-[#1F1F1F]">
                Static Canvas Matrix
              </span>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`High-performance lightweight static Canvas dot matrix background with dynamic gradient coloring and responsive densit… 主要导出：DotField。 最小用法：<DotField />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/background.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-dot-field.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#dot-field`};export{e as default};