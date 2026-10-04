var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/auto-height.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-auto-height`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-effects-auto-height.tsx`,export:`AutoHeightDemo`,example:`https://animate-ui.com/r/demo-primitives-effects-auto-height.json`},note:{summaryZh:`自动高度动画（动效原语）。`,importLine:`import { AutoHeight } from "@/components/vendor/animateui/primitives/effects/auto-height";`,usage:`<AutoHeight>…</AutoHeight>`,exports:[{name:`AutoHeight`,kind:`component`,propsType:`AutoHeightProps`,inline:!1,union:!0,props:[{name:`children`,type:`(ReactNode & ((MotionValueNumber | MotionValueString | ReactNode) & ReactElement<unknown, string | …`,optional:!1},{name:`deps`,type:`DependencyList`,optional:!0,default:`[]`},{name:`animate`,type:`LegacyAnimationControls | TargetAndTransition`,optional:!0},{name:`transition`,type:`Transition & Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 30, bounce: 0, r…`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:61,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`exit`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`AutoHeightProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-auto-height.json`,code:`import { AutoHeight } from '@/components/vendor/animateui/primitives/effects/auto-height';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';

export function AutoHeightDemo() {
  const [content, setContent] = useState(false);

  return (
    <div className="size-full flex flex-col gap-4 items-center justify-start h-[400px]">
      <button
        className="bg-primary text-primary-foreground px-3 py-1.5 text-sm"
        onClick={() => setContent(!content)}
      >
        Toggle Content
      </button>

      <AutoHeight
        deps={[content]}
        className="bg-accent w-full max-w-[400px] p-4"
      >
        <AnimatePresence mode="wait" initial={false}>
          {content ? (
            <motion.div
              key="content-150px"
              className="bg-border h-[150px] flex items-center justify-center"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              Content 150px
            </motion.div>
          ) : (
            <motion.div
              key="content-300px"
              initial={{ opacity: 0, filter: 'blur(4px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-border h-[300px] flex items-center justify-center"
            >
              Content 300px
            </motion.div>
          )}
        </AnimatePresence>
      </AutoHeight>
    </div>
  );
}
`},exampleNote:null}},docsField:`An effect that automatically adjusts the height of an element based on its content. 主要导出：AutoHeight。 最小用法：<AutoHeight>…</AutoHeight>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-auto-height.md。`,upstream:`https://animate-ui.com/r/primitives-effects-auto-height.json`};export{e as default};