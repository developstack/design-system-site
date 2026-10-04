var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/shine.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-effects-shine.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-shine.json`,props:{delay:0,duration:1200,loop:!0,loopDelay:500,deg:-15,enable:!0,enableOnHover:!1,enableOnTap:!1}},note:{summaryZh:`光泽动效（动效原语）。`,importLine:`import { Shine } from "@/components/vendor/animateui/primitives/effects/shine";`,usage:`<Shine />`,exports:[{name:`Shine`,kind:`component`,propsType:`ShineProps`,inline:!1,union:!1,props:[{name:`color`,type:`string`,optional:!0,default:`'currentColor'`},{name:`opacity`,type:`number`,optional:!0,default:`0.3`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`duration`,type:`number`,optional:!0,default:`1200`},{name:`loop`,type:`boolean`,optional:!0,default:`false`},{name:`loopDelay`,type:`number`,optional:!0,default:`0`},{name:`deg`,type:`number`,optional:!0,default:`-15`},{name:`enable`,type:`boolean`,optional:!0,default:`true`},{name:`enableOnHover`,type:`boolean`,optional:!0,default:`false`},{name:`enableOnTap`,type:`boolean`,optional:!0,default:`false`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`@types/react`,count:278,names:[]}]},{name:`ShineProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-shine.json`,code:`import { Shine } from '@/components/vendor/animateui/primitives/effects/shine';
import { Button } from '@/components/ui/button';

type ShineDemoProps = {
  delay?: number;
  duration?: number;
  loop?: boolean;
  loopDelay?: number;
  deg?: number;
  enable?: boolean;
  enableOnHover?: boolean;
  enableOnTap?: boolean;
};

export default function SlideDemo({
  delay,
  duration,
  loop,
  loopDelay,
  deg,
  enable,
  enableOnHover,
  enableOnTap,
}: ShineDemoProps) {
  return (
    <Shine
      delay={delay}
      duration={duration}
      loop={loop}
      loopDelay={loopDelay}
      deg={deg}
      enable={enable}
      enableOnHover={enableOnHover}
      enableOnTap={enableOnTap}
      asChild
    >
      <Button>Shine Effect</Button>
    </Shine>
  );
}
`},exampleNote:null}},docsField:`An animated light sweep effect with configurable timing, colors, and triggers (hover, tap, or continuous). 主要导出：Shine。 最小用法：<Shine />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-shine.md。`,upstream:`https://animate-ui.com/r/primitives-effects-shine.json`};export{e as default};