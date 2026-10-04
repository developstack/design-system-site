var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/gradient.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-texts-gradient.tsx`,export:`GradientTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-gradient.json`,props:{neon:!1}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { GradientText } from "@/components/vendor/animateui/primitives/texts/gradient";`,usage:`<GradientText text={…} />`,exports:[{name:`GradientText`,kind:`component`,propsType:`GradientTextProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1},{name:`gradient`,type:`string`,optional:!0,default:`'linear-gradient(90deg, #3b82f6 0%, #a855f7 20%, #ec4899 50…`},{name:`neon`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition`,optional:!0,default:`{ duration: 50, repeat: Infinity, ease: 'linear' }`}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`GradientTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-gradient.json`,code:`import { GradientText } from '@/components/vendor/animateui/primitives/texts/gradient';

interface GradientTextDemoProps {
  neon: boolean;
}

export const GradientTextDemo = ({ neon }: GradientTextDemoProps) => {
  return (
    <GradientText
      className="text-4xl font-semibold"
      text="Gradient Text"
      neon={neon}
    />
  );
};
`},exampleNote:null}},docsField:`A gradient text animation. 主要导出：GradientText。 最小用法：<GradientText text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-gradient.md。`,upstream:`https://animate-ui.com/r/primitives-texts-gradient.json`};export{e as default};