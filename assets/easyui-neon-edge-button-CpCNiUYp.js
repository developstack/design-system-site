var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/neon-edge-button.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/neon-edge-button.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/neon-edge-button.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { NeonEdgeButton } from "@/components/vendor/easyui/ui/neon-edge-button";`,usage:`<NeonEdgeButton />`,exports:[{name:`NeonEdgeButtonProps`,kind:`type`},{name:`NeonEdgeButton`,kind:`component`,propsType:`NeonEdgeButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0,default:`'Deploy preview'`},{name:`speed`,type:`number`,optional:!0,default:`1`},{name:`glow`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:287,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/neon-edge-button.tsx`,code:`import { NeonEdgeButton } from '@/components/vendor/easyui/ui/neon-edge-button';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <div className="pointer-events-none scale-90">
              <NeonEdgeButton>Deploy</NeonEdgeButton>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A button with a restrained light source travelling around the border while the label remains primary. 主要导出：NeonEdgeButton。 最小用法：<NeonEdgeButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-neon-edge-button.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#neon-edge-button`};export{e as default};