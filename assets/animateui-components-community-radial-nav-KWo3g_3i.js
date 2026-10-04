var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/community/radial-nav.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-community-radial-nav.tsx`,export:`RadialNavDemo`,example:`https://animate-ui.com/r/demo-components-community-radial-nav.json`},note:{summaryZh:`导航（动效组件）。`,importLine:`import { RadialNav } from "@/components/vendor/animateui/components/community/radial-nav";`,usage:`<RadialNav items={…} />`,exports:[{name:`RadialNav`,kind:`component`,propsType:`RadialNavProps`,inline:!0,union:!1,props:[{name:`size`,type:`number`,optional:!0,default:`180`},{name:`items`,type:`RadialNavItem[]`,optional:!1},{name:`menuButtonConfig`,type:`MenuButtonConfig`,optional:!0},{name:`defaultActiveId`,type:`number`,optional:!0},{name:`onActiveChange`,type:`(id: number) => void`,optional:!0}],inherited:[]},{name:`RadialNavItem`,kind:`type`},{name:`MenuButtonConfig`,kind:`type`},{name:`RadialNavProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-community-radial-nav.json`,code:`'use client';

import * as React from 'react';
import { RadialNav } from '@/components/vendor/animateui/components/community/radial-nav';
import { Bookmark, LayoutGrid, User } from 'lucide-react';

const ITEMS = [
  { id: 1, icon: LayoutGrid, label: 'Projects', angle: 0 },
  { id: 2, icon: Bookmark, label: 'Bookmarks', angle: -115 },
  { id: 3, icon: User, label: 'About', angle: 115 },
];

export const RadialNavDemo = () => (
  <RadialNav items={ITEMS} defaultActiveId={1} />
);
`},exampleNote:null}},docsField:`A circular navigation menu with animated pointer and expanding buttons for smooth interactive tr… 主要导出：RadialNav。 最小用法：<RadialNav items={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/nav.md。属性与示例见 packages/registry/docs/vendor/animateui-components-community-radial-nav.md。`,upstream:`https://animate-ui.com/r/components-community-radial-nav.json`};export{e as default};