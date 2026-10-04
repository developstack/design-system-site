var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/highlight.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-highlight.tsx`,export:`HighlightTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-highlight.json`,props:{delay:0}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { HighlightText } from "@/components/vendor/animateui/primitives/texts/highlight";`,usage:`<HighlightText text={…} />`,exports:[{name:`HighlightText`,kind:`component`,propsType:`HighlightTextProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 2, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`HighlightTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-highlight.json`,code:`import { HighlightText } from '@/components/vendor/animateui/primitives/texts/highlight';

interface HighlightTextDemoProps {
  delay: number;
}

export const HighlightTextDemo = ({ delay }: HighlightTextDemoProps) => {
  return (
    <HighlightText
      key={delay}
      delay={delay}
      className="text-4xl font-semibold bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-500"
      text="Highlight Text"
    />
  );
};
`},exampleNote:null}},docsField:`A highlight text animation. 主要导出：HighlightText。 最小用法：<HighlightText text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-highlight.md。`,upstream:`https://animate-ui.com/r/primitives-texts-highlight.json`};export{e as default};