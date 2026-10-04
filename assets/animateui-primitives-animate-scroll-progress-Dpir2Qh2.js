var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/animate/scroll-progress.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-motion-value-state`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-animate-scroll-progress.tsx`,export:`ScrollProgressDemo`,example:`https://animate-ui.com/r/demo-primitives-animate-scroll-progress.json`,props:{global:!1,direction:`vertical`}},note:{summaryZh:`滚动进度条（动效原语）。`,importLine:`import { ScrollProgress } from "@/components/vendor/animateui/primitives/animate/scroll-progress";`,usage:`<ScrollProgress />`,exports:[{name:`ScrollProgressProvider`,kind:`component`,propsType:`ScrollProgressProviderProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`global`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 250, damping: 40, bounce: 0 }`},{name:`direction`,type:`ScrollProgressDirection`,optional:!0,default:`'vertical'`}],inherited:[]},{name:`ScrollProgress`,kind:`component`,propsType:`ScrollProgressProps`,inline:!1,union:!0,props:[{name:`mode`,type:`ScrollProgressMode`,optional:!0,default:`'width'`},{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ScrollProgressContainer`,kind:`component`,propsType:`ScrollProgressContainerProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useScrollProgress`,kind:`hook`,signature:`() => ScrollProgressContextType`,params:[],requiredParams:0},{name:`ScrollProgressProviderProps`,kind:`type`},{name:`ScrollProgressProps`,kind:`type`},{name:`ScrollProgressContainerProps`,kind:`type`},{name:`ScrollProgressDirection`,kind:`type`},{name:`ScrollProgressMode`,kind:`type`},{name:`ScrollProgressContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-animate-scroll-progress.json`,code:`'use client';

import * as React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

import {
  ScrollProgressProvider,
  ScrollProgress,
  ScrollProgressContainer,
  type ScrollProgressDirection,
} from '@/components/vendor/animateui/primitives/animate/scroll-progress';
import { cn } from '@/lib/utils';

interface ScrollProgressDemoProps {
  global?: boolean;
  direction?: ScrollProgressDirection;
}

export const ScrollProgressDemo = ({
  global = false,
  direction = 'vertical',
}: ScrollProgressDemoProps) => {
  return (
    <div className="absolute inset-0" key={String(global) + direction}>
      <div className="relative h-full w-full overflow-hidden">
        <ScrollProgressProvider global={global} direction={direction}>
          <div
            className={cn(
              'z-50 ',
              global
                ? 'fixed top-0 left-0 right-0'
                : 'absolute bottom-3 left-3 right-3',
            )}
          >
            <ScrollProgress className="bg-foreground h-1.5 data-[global=false]:rounded-full" />
          </div>

          {global ? (
            <div className="size-full flex items-center justify-center">
              <p className="flex items-center gap-2 font-medium">
                Scroll the page to see the progress bar
              </p>
            </div>
          ) : (
            <ScrollProgressContainer className="w-full h-full data-[direction=vertical]:overflow-y-auto data-[direction=horizontal]:overflow-x-auto">
              <div
                className={cn('flex', direction === 'vertical' && 'flex-col')}
              >
                <div className="w-full h-[400px] shrink-0 flex items-center justify-center">
                  <p className="flex items-center gap-2 font-medium">
                    Scroll to see the progress bar{' '}
                    <motion.span
                      className={direction === 'horizontal' ? '-rotate-90' : ''}
                      animate={{ y: [3, -3, 3] }}
                      transition={{
                        duration: 1.25,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        type: 'keyframes',
                      }}
                    >
                      <ArrowDown className="size-5" />
                    </motion.span>
                  </p>
                </div>
                <div className="w-full h-[400px] shrink-0 p-3">
                  <div className="size-full bg-accent rounded-xl" />
                </div>
                <div className="w-full h-[400px] shrink-0" />
                <div className="w-full h-[400px] shrink-0 p-3">
                  <div className="size-full bg-accent rounded-xl" />
                </div>
                <div className="w-full h-[400px] shrink-0" />
              </div>
            </ScrollProgressContainer>
          )}
        </ScrollProgressProvider>
      </div>
    </div>
  );
};
`},exampleNote:null}},docsField:`A scroll p… 主要导出：ScrollProgress、ScrollProgressProvider、ScrollProgressContainer、useScrollProgress。 最小用法：<ScrollProgress />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/scroll-progress.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-animate-scroll-progress.md。`,upstream:`https://animate-ui.com/r/primitives-animate-scroll-progress.json`};export{e as default};