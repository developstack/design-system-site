var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/branching-submenu.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/branching-submenu.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/branching-submenu.tsx`},note:{summaryZh:null,importLine:`import { BranchingSubmenu } from "@/components/vendor/easyui/ui/branching-submenu";`,usage:`<BranchingSubmenu />`,exports:[{name:`BranchingSubmenuItem`,kind:`type`},{name:`BranchingSubmenuProps`,kind:`type`},{name:`BranchingSubmenu`,kind:`component`,propsType:`BranchingSubmenuProps`,inline:!1,union:!1,props:[{name:`items`,type:`BranchingSubmenuItem[]`,optional:!0,default:`defaultItems`},{name:`label`,type:`string`,optional:!0,default:`'Branching navigation'`}],inherited:[{package:`@types/react`,count:278,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/branching-submenu.tsx`,code:`import { BranchingSubmenu } from '@/components/vendor/easyui/ui/branching-submenu';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 flex items-center justify-center p-2 pointer-events-none overflow-hidden">
            <div className="w-[420px] shrink-0 origin-center scale-[0.80] flex justify-center">
              <BranchingSubmenu className="w-full shadow-none" />
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A spatial submenu that connects parent options to child actions with staged branch motion. 主要导出：BranchingSubmenu。 最小用法：<BranchingSubmenu />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/menu.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-branching-submenu.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#branching-submenu`};export{e as default};