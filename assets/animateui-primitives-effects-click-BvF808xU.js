var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/click.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-effects-click.tsx`,export:`default`,example:`https://animate-ui.com/r/demo-primitives-effects-click.json`,props:{global:!1,variant:`ring`,duration:400,size:100}},note:{summaryZh:null,importLine:`import { Click } from "@/components/vendor/animateui/primitives/effects/click";`,usage:`<Click variant={…} />`,exports:[{name:`Click`,kind:`component`,propsType:`RippleClickProps`,inline:!1,union:!1,props:[{name:`children`,type:`((string | number | bigint | boolean | Iterable<ReactNode> | MotionValueNumber | MotionValueString …`,optional:!0},{name:`color`,type:`string`,optional:!0},{name:`size`,type:`number`,optional:!0},{name:`duration`,type:`number`,optional:!0},{name:`scope`,type:`RefObject<HTMLElement | null>`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`variant`,type:`"ripple"`,optional:!1}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ClickProps`,kind:`type`},{name:`ClickVariant`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-click.json`,code:`import { Click, type ClickVariant } from '@/components/vendor/animateui/primitives/effects/click';
import { useRef } from 'react';

interface ClickDemoProps {
  variant: ClickVariant;
  global: boolean;
  duration: number;
  size: number;
}

export default function ClickDemo({
  variant,
  global,
  duration,
  size,
}: ClickDemoProps) {
  const scope = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scope}
      className="absolute inset-0 w-full h-full flex items-center justify-center"
    >
      <Click
        scope={global ? undefined : scope}
        // @ts-expect-error - typescript does not handle this well
        variant={variant}
        color="currentColor"
        size={size}
        duration={duration}
      >
        <p className="text-2xl font-bold italic text-neutral-500 select-none">
          Click here to see the effect
        </p>
      </Click>
    </div>
  );
}
`},exampleNote:null}},docsField:`An effect that creates animated effects at the click position, adding interactive feedback to user actions. 主要导出：Click。 最小用法：<Click variant={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-click.md。`,upstream:`https://animate-ui.com/r/primitives-effects-click.json`};export{e as default};