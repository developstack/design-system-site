var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/splitting.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-splitting.tsx`,export:`SplittingTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-splitting.json`,props:{type:`chars`,delay:0,animation:`default`}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { SplittingText } from "@/components/vendor/animateui/primitives/texts/splitting";`,usage:`<SplittingText text={…} />`,exports:[{name:`SplittingText`,kind:`component`,propsType:`SplittingTextProps`,inline:!1,union:!0,props:[{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`initial`,type:`TargetAndTransition`,optional:!0,default:`{ x: 150, opacity: 0 }`},{name:`animate`,type:`TargetAndTransition`,optional:!0,default:`{ x: 0, opacity: 1 }`},{name:`transition`,type:`Transition`,optional:!0,default:`{ duration: 0.7, ease: 'easeOut' }`},{name:`stagger`,type:`number`,optional:!0},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`disableAnimation`,type:`boolean`,optional:!0,default:`false`},{name:`type`,type:`"chars" | "lines" | "words"`,optional:!0,default:`'chars'`},{name:`text`,type:`string | string[]`,optional:!1}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:60,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`exit`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`SplittingTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-splitting.json`,code:`import {
  SplittingText,
  type SplittingTextProps,
} from '@/components/vendor/animateui/primitives/texts/splitting';
import { cn } from '@/lib/utils';

const ANIMATIONS: Record<
  string,
  {
    initial: SplittingTextProps['initial'];
    animate: SplittingTextProps['animate'];
    transition: SplittingTextProps['transition'];
  } | null
> = {
  default: null,
  vibe: {
    initial: { y: 50, scale: 0.5, opacity: 0, x: 50, rotate: 90 },
    animate: { y: 0, scale: 1, opacity: 1, x: 0, rotate: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  writing: {
    initial: { y: 10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: 'spring', bounce: 0, duration: 2 },
  },
};

interface SplittingTextDemoProps {
  type: SplittingTextProps['type'];
  delay: number;
  animation: keyof typeof ANIMATIONS;
}

export const SplittingTextDemo = ({
  type,
  delay,
  animation,
}: SplittingTextDemoProps) => {
  return (
    // @ts-expect-error
    <SplittingText
      key={\`\${type}-\${delay}-\${animation}\`}
      className={cn('text-4xl font-semibold', type === 'lines' && 'text-xl')}
      type={type}
      delay={delay}
      initial={ANIMATIONS[animation]?.initial}
      animate={ANIMATIONS[animation]?.animate}
      transition={ANIMATIONS[animation]?.transition}
      text={
        type === 'lines'
          ? [
              'Introducing Splitting Text component',
              'Made with Motion. Highly customizable and easy to use.',
            ]
          : 'Splitting Text'
      }
    />
  );
};
`},exampleNote:null}},docsField:`A splitting text animation. 主要导出：SplittingText。 最小用法：<SplittingText text={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/text.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-splitting.md。`,upstream:`https://animate-ui.com/r/primitives-texts-splitting.json`};export{e as default};