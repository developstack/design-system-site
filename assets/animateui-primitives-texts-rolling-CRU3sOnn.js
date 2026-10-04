var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/rolling.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-rolling.tsx`,export:`RollingTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-rolling.json`,props:{delay:0}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { RollingText } from "@/components/vendor/animateui/primitives/texts/rolling";`,usage:`<RollingText text={…} />`,exports:[{name:`RollingText`,kind:`component`,propsType:`RollingTextProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1},{name:`transition`,type:`Transition`,optional:!0,default:`{ duration: 0.5, delay: 0.1, ease: 'easeOut' }`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`RollingTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-rolling.json`,code:`import { RollingText } from '@/components/vendor/animateui/primitives/texts/rolling';

interface RollingTextDemoProps {
  delay: number;
}

export const RollingTextDemo = ({ delay }: RollingTextDemoProps) => {
  return (
    <RollingText
      key={delay}
      delay={delay}
      className="text-4xl font-semibold"
      text="Rolling Text"
    />
  );
};
`},exampleNote:null}},docsField:`A rolling text animation. 主要导出：RollingText。 最小用法：<RollingText text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-rolling.md。`,upstream:`https://animate-ui.com/r/primitives-texts-rolling.json`};export{e as default};