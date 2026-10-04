var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/animate/tooltip.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@floating-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-animate-tooltip.tsx`,export:`AnimateTooltipDemo`,example:`https://animate-ui.com/r/demo-primitives-animate-tooltip.json`,props:{openDelay:700,closeDelay:300,side:`top`,sideOffset:0,align:`center`,alignOffset:0,withTransition:!0}},note:{summaryZh:`文字提示（动效原语）。`,importLine:`import { Tooltip } from "@/components/vendor/animateui/primitives/animate/tooltip";`,usage:`<Tooltip>…</Tooltip>`,exports:[{name:`TooltipProvider`,kind:`component`,propsType:`TooltipProviderProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`id`,type:`string`,optional:!0},{name:`openDelay`,type:`number`,optional:!0,default:`700`},{name:`closeDelay`,type:`number`,optional:!0,default:`300`},{name:`transition`,type:`Transition`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 35 }`}],inherited:[]},{name:`Tooltip`,kind:`component`,propsType:`TooltipProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`side`,type:`Side`,optional:!0,default:`'top'`},{name:`sideOffset`,type:`number`,optional:!0,default:`0`},{name:`align`,type:`Align`,optional:!0,default:`'center'`},{name:`alignOffset`,type:`number`,optional:!0,default:`0`}],inherited:[]},{name:`TooltipContent`,kind:`component`,propsType:`TooltipContentProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TooltipTrigger`,kind:`component`,propsType:`TooltipTriggerProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TooltipArrow`,kind:`component`,propsType:`TooltipArrowProps`,inline:!1,union:!1,props:[{name:`withTransition`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`映射类型生成，来源无法定位`,count:483,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`useGlobalTooltip`,kind:`hook`,signature:`() => GlobalTooltipContextType`,params:[],requiredParams:0},{name:`useTooltip`,kind:`hook`,signature:`() => TooltipContextType`,params:[],requiredParams:0},{name:`TooltipProviderProps`,kind:`type`},{name:`TooltipProps`,kind:`type`},{name:`TooltipContentProps`,kind:`type`},{name:`TooltipTriggerProps`,kind:`type`},{name:`TooltipArrowProps`,kind:`type`},{name:`TooltipPosition`,kind:`type`},{name:`GlobalTooltipContextType`,kind:`type`},{name:`TooltipContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-animate-tooltip.json`,code:`'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from '@/components/vendor/animateui/primitives/animate/tooltip';
import { motion } from 'motion/react';

interface TooltipDemoProps {
  openDelay?: number;
  closeDelay?: number;
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  withTransition?: boolean;
}

export const AnimateTooltipDemo = ({
  openDelay,
  closeDelay,
  side,
  sideOffset,
  align,
  alignOffset,
  withTransition,
}: TooltipDemoProps) => {
  return (
    <TooltipProvider
      key={\`\${side}-\${align}-\${sideOffset}-\${alignOffset}-\${openDelay}-\${closeDelay}\`}
      openDelay={openDelay}
      closeDelay={closeDelay}
    >
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="flex flex-row gap-2 border p-2">
          <Tooltip
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <TooltipTrigger className="bg-accent select-none px-4 py-2">
              Docs
            </TooltipTrigger>

            <TooltipContent className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
              <TooltipArrow
                className="fill-primary size-2.5"
                withTransition={withTransition}
              />
              <motion.p layout="preserve-aspect">Documentation</motion.p>
            </TooltipContent>
          </Tooltip>

          <Tooltip
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <TooltipTrigger className="bg-accent select-none px-4 py-2">
              Lorem
            </TooltipTrigger>

            <TooltipContent className="bg-primary max-w-[200px] px-3 py-1.5 text-sm text-primary-foreground">
              <TooltipArrow
                className="fill-primary size-2.5"
                withTransition={withTransition}
              />
              <motion.div layout="preserve-aspect">
                <p>Lorem ipsum dolor sit amet</p>
                <p>consectetur adipisicing elit</p>
              </motion.div>
            </TooltipContent>
          </Tooltip>

          <Tooltip
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <TooltipTrigger className="bg-accent select-none px-4 py-2">
              Guide
            </TooltipTrigger>

            <TooltipContent className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
              <TooltipArrow
                className="fill-primary size-2.5"
                withTransition={withTransition}
              />
              <motion.p layout="preserve-aspect">User Guide</motion.p>
            </TooltipContent>
          </Tooltip>
        </div>
        <div className="flex flex-row gap-5">
          <Tooltip
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
          >
            <TooltipTrigger className="bg-accent select-none px-4 py-2">
              Repo
            </TooltipTrigger>

            <TooltipContent className="bg-primary px-3 py-1.5 text-sm text-primary-foreground">
              <TooltipArrow
                className="fill-primary size-2.5"
                withTransition={withTransition}
              />
              <motion.p layout="preserve-aspect">GitHub</motion.p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
};
`},exampleNote:null}},docsField:`An animated tooltip that shows contextual info on hover or focus and smoothly glides to the next e… 主要导出：Tooltip、TooltipProvider、TooltipContent、TooltipTrigger 等。 最小用法：<Tooltip>…</Tooltip>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-animate-tooltip.md。`,upstream:`https://animate-ui.com/r/primitives-animate-tooltip.json`};export{e as default};