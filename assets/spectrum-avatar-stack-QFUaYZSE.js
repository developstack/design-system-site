var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/avatar-stack.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/avatar-stack.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/avatar-stack-demo.json`},note:{summaryZh:null,importLine:`import { AvatarStack } from "@/components/vendor/spectrum/avatar-stack";`,usage:`<AvatarStack items={…} />`,exports:[{name:`AvatarItem`,kind:`type`},{name:`AvatarStackProps`,kind:`type`},{name:`AvatarStack`,kind:`component`,propsType:`AvatarStackProps`,inline:!1,union:!1,props:[{name:`items`,type:`AvatarItem[]`,optional:!1,doc:'People to render; the first `max` are visible, the rest sit behind "+N"'},{name:`max`,type:`number`,optional:!0,default:`4`,doc:`Number of avatars shown before overflowing into the "+N" pill. Default 4`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Avatar diameter: 28, 36 or 44px. Default "md"`},{name:`expandable`,type:`boolean`,optional:!0,default:`true`,doc:`Whether the "+N" pill expands the hidden avatars on click. Default true`},{name:`onAvatarClick`,type:`(item: AvatarItem, index: number) => void`,optional:!0,doc:`Fires when an avatar is clicked or activated with Enter/Space`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged onto the group container`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/avatar-stack-demo.json`,code:`'use client';

import React from 'react';
import { AvatarStack, type AvatarItem } from '@/components/vendor/spectrum/avatar-stack';

const TEAM: AvatarItem[] = [
  { name: 'Arjun Mehta', src: '/avatars/people/01.jpg' },
  { name: 'Sofia Ramirez', src: '/avatars/people/02.jpg' },
  { name: 'Liam Carter', src: '/avatars/people/03.jpg' },
  { name: 'Priya Nair', src: '/avatars/people/05.jpg' },
  { name: 'Noah Kim', src: '/avatars/people/06.jpg' },
  { name: 'Emma Fischer', src: '/avatars/people/09.jpg' },
  { name: 'David Osei', src: '/avatars/people/12.jpg' },
];

export default function AvatarStackDemo() {
  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="flex items-center gap-8 rounded-xl border border-neutral-200 bg-white py-4 pl-5 pr-6 dark:border-neutral-800 dark:bg-neutral-900">
        <div className="flex flex-col">
          <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
            Project team
          </span>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            7 members · 3 online
          </span>
        </div>
        <AvatarStack items={TEAM} />
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Hover the stack — then hover a face
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`An overlapping avatar stack that fans apart on hover, springs name tooltips over each face and expands hidden members from a +N pill with… 主要导出：AvatarStack。 最小用法：<AvatarStack items={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/spectrum-avatar-stack.md。`,upstream:`https://ui.spectrumhq.in/r/avatar-stack.json`};export{e as default};