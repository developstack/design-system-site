var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/backgrounds/fireworks.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-backgrounds-fireworks.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-components-backgrounds-fireworks.json`,props:{population:1}},note:{summaryZh:`动画背景（动效组件）。`,importLine:`import { FireworksBackground } from "@/components/vendor/animateui/components/backgrounds/fireworks";`,usage:`<FireworksBackground />`,exports:[{name:`FireworksBackground`,kind:`component`,propsType:`FireworksBackgroundProps`,inline:!1,union:!1,props:[{name:`canvasProps`,type:`DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>`,optional:!0},{name:`population`,type:`number`,optional:!0,default:`1`},{name:`color`,type:`string | string[]`,optional:!0},{name:`fireworkSpeed`,type:`number | { min: number; max: number; }`,optional:!0,default:`{ min: 4, max: 8 }`},{name:`fireworkSize`,type:`number | { min: number; max: number; }`,optional:!0,default:`{ min: 2, max: 5 }`},{name:`particleSpeed`,type:`number | { min: number; max: number; }`,optional:!0,default:`{ min: 2, max: 7 }`},{name:`particleSize`,type:`number | { min: number; max: number; }`,optional:!0,default:`{ min: 1, max: 5 }`}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`FireworksBackgroundProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-backgrounds-fireworks.json`,code:`'use client';

import { useTheme } from 'next-themes';
import { FireworksBackground } from '@/components/vendor/animateui/components/backgrounds/fireworks';

type FireworksBackgroundDemoProps = {
  population: number;
};

export default function FireworksBackgroundDemo({
  population,
}: FireworksBackgroundDemoProps) {
  const { resolvedTheme: theme } = useTheme();

  return (
    <FireworksBackground
      className="absolute inset-0 flex items-center justify-center rounded-xl"
      color={theme === 'dark' ? 'white' : 'black'}
      population={population}
    />
  );
}
`},exampleNote:null}},docsField:`A background component that displays a fireworks animation. 主要导出：FireworksBackground。 最小用法：<FireworksBackground />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/background.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-backgrounds-fireworks.md。`,upstream:`https://animate-ui.com/r/components-backgrounds-fireworks.json`};export{e as default};