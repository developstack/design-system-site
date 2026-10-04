var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/community/pin-list.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-community-pin-list.tsx`,export:`PinListDemo`,example:`https://animate-ui.com/r/demo-components-community-pin-list.json`},note:{summaryZh:`列表（动效组件）。`,importLine:`import { PinList } from "@/components/vendor/animateui/components/community/pin-list";`,usage:`<PinList items={…} />`,exports:[{name:`PinList`,kind:`component`,propsType:`PinListProps`,inline:!1,union:!1,props:[{name:`items`,type:`PinListItem[]`,optional:!1},{name:`labels`,type:`{ pinned?: string | undefined; unpinned?: string | undefined; }`,optional:!0,default:`{ pinned: 'Pinned Items', unpinned: 'All Items' }`},{name:`transition`,type:`Transition & Transition<any>`,optional:!0,default:`{ stiffness: 320, damping: 20, mass: 0.8, type: 'spring' }`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`labelMotionProps`,type:`HTMLMotionProps<"p">`,optional:!0,default:`{ initial: { opacity: 0 }, animate: { opacity: 1 }, exit: {…`},{name:`className`,type:`string`,optional:!0},{name:`labelClassName`,type:`string`,optional:!0},{name:`pinnedSectionClassName`,type:`string`,optional:!0},{name:`unpinnedSectionClassName`,type:`string`,optional:!0},{name:`zIndexResetDelay`,type:`number`,optional:!0,default:`500`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`PinListProps`,kind:`type`},{name:`PinListItem`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-community-pin-list.json`,code:`'use client';

import * as React from 'react';
import { GitCommit, AlertTriangle, Box, KeyRound, Regex } from 'lucide-react';

import { PinList } from '@/components/vendor/animateui/components/community/pin-list';

const ITEMS = [
  {
    id: 1,
    name: 'Commit Zone',
    info: 'Code updates · Closes 9:00 PM',
    icon: GitCommit,
    pinned: true,
  },
  {
    id: 2,
    name: '404 Room',
    info: 'Fixing errors · Open 24 hours',
    icon: AlertTriangle,
    pinned: true,
  },
  {
    id: 3,
    name: 'NPM Stop',
    info: 'Install stuff · Closes 8:00 PM',
    icon: Box,
    pinned: false,
  },
  {
    id: 4,
    name: 'Token Lock',
    info: 'Login stuff · Open 24 hours',
    icon: KeyRound,
    pinned: false,
  },
  {
    id: 5,
    name: 'Regex Zone',
    info: 'Find words · Closes 9:00 PM',
    icon: Regex,
    pinned: false,
  },
];

export const PinListDemo = () => <PinList items={ITEMS} />;
`},exampleNote:null}},docsField:`A playful list for pinning and unpinning items, with smooth animated transitions as items move betwe… 主要导出：PinList。 最小用法：<PinList items={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/list.md。属性与示例见 packages/registry/docs/vendor/animateui-components-community-pin-list.md。`,upstream:`https://animate-ui.com/r/components-community-pin-list.json`};export{e as default};