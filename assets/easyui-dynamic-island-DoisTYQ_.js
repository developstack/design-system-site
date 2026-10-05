var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/dynamic-island.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/dynamic-island.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dynamic-island.tsx`},note:{summaryZh:null,importLine:`import { DynamicIsland } from "@/components/vendor/easyui/ui/dynamic-island";`,usage:`<DynamicIsland />`,exports:[{name:`DynamicIslandState`,kind:`type`},{name:`DynamicIslandSocialPlatform`,kind:`type`},{name:`DynamicIslandSocialItem`,kind:`type`},{name:`DynamicIslandSocials`,kind:`type`},{name:`DynamicIslandMetadataItem`,kind:`type`},{name:`DynamicIslandProps`,kind:`type`},{name:`DynamicIsland`,kind:`component`,propsType:`DynamicIslandProps`,inline:!1,union:!1,props:[{name:`avatar`,type:`string`,optional:!0},{name:`avatarAlt`,type:`string`,optional:!0},{name:`name`,type:`string`,optional:!0,default:`'Suraj Maurya'`},{name:`role`,type:`string`,optional:!0,default:`'Frontend Developer'`},{name:`description`,type:`string`,optional:!0,default:`'Building thoughtful interfaces with React, Next.js, and Fr…`},{name:`greeting`,type:`string`,optional:!0},{name:`statusText`,type:`string`,optional:!0,default:`'Available for work'`},{name:`metadata`,type:`DynamicIslandMetadataItem[]`,optional:!0},{name:`socials`,type:`DynamicIslandSocials`,optional:!0},{name:`defaultState`,type:`DynamicIslandState`,optional:!0,default:`'collapsed'`},{name:`state`,type:`DynamicIslandState`,optional:!0},{name:`onStateChange`,type:`(state: DynamicIslandState) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`profileContent`,type:`ReactNode`,optional:!0},{name:`shareContent`,type:`ReactNode`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0},{name:`idPrefix`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dynamic-island.tsx`,code:`import { DynamicIsland } from '@/components/vendor/easyui/ui/dynamic-island';
import type { ComponentPreviewProps } from './preview-props';

export default function DynamicIslandPreview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="h-56 flex flex-col items-center justify-center p-4">
      <DynamicIsland
        state={isHovered ? 'expanded' : 'collapsed'}
        name="Suraj Maurya"
        role="Frontend Developer"
        statusText="Online"
        description="Building thoughtful interfaces with React and Next.js."
        socials={{
          github: 'https://github.com/Surajmaurya1',
          x: 'https://x.com',
          linkedin: 'https://linkedin.com',
          email: 'mailto:suraj@example.com',
        }}
      />
      <span className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-4 select-none">
        Hover to expand • Click to interact
      </span>
    </div>
  );
}
`},exampleNote:null}},docsField:`A physical morphing island component that smoothly transitions between a compact indicator, interactive summ… 主要导出：DynamicIsland。 最小用法：<DynamicIsland />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/island.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-dynamic-island.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#dynamic-island`};export{e as default};