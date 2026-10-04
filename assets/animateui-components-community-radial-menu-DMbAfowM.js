var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/community/radial-menu.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-community-radial-menu.tsx`,export:`RadialMenuDemo`,example:`https://animate-ui.com/r/demo-components-community-radial-menu.json`},note:{summaryZh:`环形菜单（动效组件）。`,importLine:`import { RadialMenu } from "@/components/vendor/animateui/components/community/radial-menu";`,usage:`<RadialMenu menuItems={…} />`,exports:[{name:`RadialMenu`,kind:`component`,propsType:`RadialMenuProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`menuItems`,type:`MenuItem[]`,optional:!1},{name:`size`,type:`number`,optional:!0,default:`240`},{name:`iconSize`,type:`number`,optional:!0,default:`18`},{name:`bandWidth`,type:`number`,optional:!0,default:`50`},{name:`innerGap`,type:`number`,optional:!0,default:`8`},{name:`outerGap`,type:`number`,optional:!0,default:`8`},{name:`outerRingWidth`,type:`number`,optional:!0,default:`12`},{name:`onSelect`,type:`(item: MenuItem) => void`,optional:!0}],inherited:[]}],example:{url:`https://animate-ui.com/r/demo-components-community-radial-menu.json`,code:`'use client';

import * as React from 'react';
import { RadialMenu } from '@/components/vendor/animateui/components/community/radial-menu';
import {
  Copy,
  Scissors,
  ClipboardPaste,
  Trash2,
  Star,
  Pin,
} from 'lucide-react';

const MENU_ITEMS = [
  { id: 1, label: 'Copy', icon: Copy },
  { id: 2, label: 'Cut', icon: Scissors },
  { id: 3, label: 'Paste', icon: ClipboardPaste },
  { id: 4, label: 'Favorite', icon: Star },
  { id: 5, label: 'Pin', icon: Pin },
  { id: 6, label: 'Delete', icon: Trash2 },
];

export const RadialMenuDemo = () => (
  <RadialMenu
    menuItems={MENU_ITEMS}
    onSelect={(item) => {
      console.log(item);
      // run your action here
    }}
  >
    <div className="size-80 flex justify-center items-center border-2 border-dashed rounded-lg">
      Right click to open the radial menu
    </div>
  </RadialMenu>
);
`},exampleNote:null}},docsField:`A circular context menu built with Base UI, displaying actions in a clean radial layout with full keyboard support and smooth in… 主要导出：RadialMenu。 最小用法：<RadialMenu menuItems={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-community-radial-menu.md。`,upstream:`https://animate-ui.com/r/components-community-radial-menu.json`};export{e as default};