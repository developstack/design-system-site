var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/backgrounds/bubble.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-backgrounds-bubble.tsx`,export:`BubbleBackgroundDemo`,example:`https://animate-ui.com/r/demo-components-backgrounds-bubble.json`,props:{interactive:!0}},note:{summaryZh:`动画背景（动效组件）。`,importLine:`import { BubbleBackground } from "@/components/vendor/animateui/components/backgrounds/bubble";`,usage:`<BubbleBackground />`,exports:[{name:`BubbleBackground`,kind:`component`,propsType:`BubbleBackgroundProps`,inline:!1,union:!1,props:[{name:`interactive`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 100, damping: 20 }`},{name:`colors`,type:`BubbleColors`,optional:!0,default:`{ first: '18,113,255', second: '221,74,255', third: '0,220,…`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`BubbleBackgroundProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-backgrounds-bubble.json`,code:`import { BubbleBackground } from '@/components/vendor/animateui/components/backgrounds/bubble';

type BubbleBackgroundDemoProps = {
  interactive: boolean;
};

export const BubbleBackgroundDemo = ({
  interactive,
}: BubbleBackgroundDemoProps) => {
  return (
    <BubbleBackground
      interactive={interactive}
      className="absolute inset-0 flex items-center justify-center rounded-xl"
    />
  );
};
`},exampleNote:null}},docsField:`An interactive background featuring smoothly animated gradient bubbles, creating a playful, dynamic, and visually engaging backdrop. 主要导出：BubbleBackground。 最小用法：<BubbleBackground />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-backgrounds-bubble.md。`,upstream:`https://animate-ui.com/r/components-backgrounds-bubble.json`};export{e as default};