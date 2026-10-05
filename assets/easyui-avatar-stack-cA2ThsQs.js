var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/avatar-stack.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/avatar-stack.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/avatar-stack.tsx`},note:{summaryZh:null,importLine:`import { AvatarStack } from "@/components/vendor/easyui/ui/avatar-stack";`,usage:`<AvatarStack avatars={…} />`,exports:[{name:`AvatarStackItem`,kind:`type`},{name:`AvatarStackProps`,kind:`type`},{name:`AvatarStack`,kind:`component`,propsType:`AvatarStackProps`,inline:!1,union:!1,props:[{name:`avatars`,type:`AvatarStackItem[]`,optional:!1,doc:`Array of avatar objects to render`},{name:`max`,type:`number`,optional:!0,default:`5`,doc:`Maximum number of avatars shown before truncation (+N badge)`},{name:`size`,type:`"lg" | "md" | "sm" | "xl"`,optional:!0,default:`"lg"`,doc:`Size of each avatar circle`},{name:`overlap`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Spacing / overlap amount between adjacent avatars`},{name:`showCount`,type:`boolean`,optional:!0,default:`true`,doc:`Whether to show the count badge when total avatars exceed max`},{name:`showTooltip`,type:`boolean`,optional:!0,default:`true`,doc:`Whether to display a floating name/alt tooltip on hover`}],inherited:[{package:`@types/react`,count:278,names:[]}]},{name:`default`,local:`AvatarStack`,kind:`component`,propsType:`AvatarStackProps`,inline:!1,union:!1,props:[{name:`avatars`,type:`AvatarStackItem[]`,optional:!1,doc:`Array of avatar objects to render`},{name:`max`,type:`number`,optional:!0,default:`5`,doc:`Maximum number of avatars shown before truncation (+N badge)`},{name:`size`,type:`"lg" | "md" | "sm" | "xl"`,optional:!0,default:`"lg"`,doc:`Size of each avatar circle`},{name:`overlap`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Spacing / overlap amount between adjacent avatars`},{name:`showCount`,type:`boolean`,optional:!0,default:`true`,doc:`Whether to show the count badge when total avatars exceed max`},{name:`showTooltip`,type:`boolean`,optional:!0,default:`true`,doc:`Whether to display a floating name/alt tooltip on hover`}],inherited:[{package:`@types/react`,count:278,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/avatar-stack.tsx`,code:`import React from 'react';
import { AvatarStack } from '@/components/vendor/easyui/ui/avatar-stack';
import type { ComponentPreviewProps } from './preview-props';

const AVATAR_STACK_ITEMS = [
  { id: 1, src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80', name: 'Elena R.', alt: 'Elena' },
  { id: 2, src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80', name: 'Marcus C.', alt: 'Marcus' },
  { id: 3, src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80', name: 'Sarah M.', alt: 'Sarah' },
  { id: 4, src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80', name: 'David K.', alt: 'David' },
  { id: 5, src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80', name: 'Aria T.', alt: 'Aria' },
];

const AvatarStackPreview: React.FC<{ isHovered?: boolean }> = () => {
  return (
    <div className="h-52 flex flex-col items-center justify-center p-4">
      <div className="pointer-events-auto">
        <AvatarStack
          avatars={AVATAR_STACK_ITEMS}
          size="lg"
          max={4}
          overlap="md"
          showTooltip={true}
          showCount={true}
        />
      </div>
      <span className="mt-3 text-[10px] font-mono text-text-muted">Spring hover elevation</span>
    </div>
  );
};



export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return <AvatarStackPreview isHovered={hovered} />;
}
`},exampleNote:null}},docsField:`An interactive, stacked facepile of overlapping avatars that smoothly elevates and scales the hovered avatar to the front with spring phy… 主要导出：AvatarStack。 最小用法：<AvatarStack avatars={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-avatar-stack.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#avatar-stack`};export{e as default};