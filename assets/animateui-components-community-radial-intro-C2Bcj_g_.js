var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/community/radial-intro.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-community-radial-intro.tsx`,export:`RadialIntroDemo`,example:`https://animate-ui.com/r/demo-components-community-radial-intro.json`},note:{summaryZh:null,importLine:`import { RadialIntro } from "@/components/vendor/animateui/components/community/radial-intro";`,usage:`<RadialIntro orbitItems={…} />`,exports:[{name:`RadialIntro`,kind:`component`,propsType:`ComponentProps`,inline:!1,union:!1,props:[{name:`orbitItems`,type:`OrbitItem[]`,optional:!1},{name:`stageSize`,type:`number`,optional:!0,default:`320`},{name:`imageSize`,type:`number`,optional:!0,default:`60`}],inherited:[]}],example:{url:`https://animate-ui.com/r/demo-components-community-radial-intro.json`,code:`'use client';

import * as React from 'react';

import { RadialIntro } from '@/components/vendor/animateui/components/community/radial-intro';

const ITEMS = [
  {
    id: 1,
    name: 'Framer University',
    src: 'https://pbs.twimg.com/profile_images/1602734731728142336/9Bppcs67_400x400.jpg',
  },
  {
    id: 2,
    name: 'arhamkhnz',
    src: 'https://pbs.twimg.com/profile_images/1897311929028255744/otxpL-ke_400x400.jpg',
  },
  {
    id: 3,
    name: 'Skyleen',
    src: 'https://pbs.twimg.com/profile_images/1948770261848756224/oPwqXMD6_400x400.jpg',
  },
  {
    id: 4,
    name: 'Shadcn',
    src: 'https://pbs.twimg.com/profile_images/1593304942210478080/TUYae5z7_400x400.jpg',
  },
  {
    id: 5,
    name: 'Adam Wathan',
    src: 'https://pbs.twimg.com/profile_images/1677042510839857154/Kq4tpySA_400x400.jpg',
  },
  {
    id: 6,
    name: 'Guillermo Rauch',
    src: 'https://pbs.twimg.com/profile_images/1783856060249595904/8TfcCN0r_400x400.jpg',
  },
  {
    id: 7,
    name: 'Jhey',
    src: 'https://pbs.twimg.com/profile_images/1534700564810018816/anAuSfkp_400x400.jpg',
  },
  {
    id: 8,
    name: 'David Haz',
    src: 'https://pbs.twimg.com/profile_images/1927474594102784000/Al0g-I6o_400x400.jpg',
  },
  {
    id: 9,
    name: 'Matt Perry',
    src: 'https://pbs.twimg.com/profile_images/1690345911149375488/wfD0Ai9j_400x400.jpg',
  },
];

export const RadialIntroDemo = () => <RadialIntro orbitItems={ITEMS} />;
`},exampleNote:null}},docsField:`A circular intro animation component that arranges elements in a radial layout, smoothly transitioning them into orbit… 主要导出：RadialIntro。 最小用法：<RadialIntro orbitItems={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-community-radial-intro.md。`,upstream:`https://animate-ui.com/r/components-community-radial-intro.json`};export{e as default};