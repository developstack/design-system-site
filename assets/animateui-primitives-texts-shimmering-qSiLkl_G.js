var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/shimmering.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-shimmering.tsx`,export:`ShimmeringTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-shimmering.json`,props:{wave:!1,duration:1}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { ShimmeringText } from "@/components/vendor/animateui/primitives/texts/shimmering";`,usage:`<ShimmeringText text={…} />`,exports:[{name:`ShimmeringText`,kind:`component`,propsType:`ShimmeringTextProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1},{name:`duration`,type:`number`,optional:!0,default:`1`},{name:`wave`,type:`boolean`,optional:!0,default:`false`},{name:`color`,type:`string`,optional:!0,default:`'var(--color-neutral-500)'`},{name:`shimmeringColor`,type:`string`,optional:!0,default:`'var(--color-neutral-300)'`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ShimmeringTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-shimmering.json`,code:`import { ShimmeringText } from '@/components/vendor/animateui/primitives/texts/shimmering';

interface ShimmeringTextDemoProps {
  wave: boolean;
  duration: number;
}

export const ShimmeringTextDemo = ({
  wave,
  duration,
}: ShimmeringTextDemoProps) => {
  return (
    <ShimmeringText
      key={\`\${wave}-\${duration}\`}
      className="text-4xl font-semibold"
      wave={wave}
      duration={duration}
      text="Shimmering Text"
    />
  );
};
`},exampleNote:null}},docsField:`A shimmering text animation. 主要导出：ShimmeringText。 最小用法：<ShimmeringText text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-shimmering.md。`,upstream:`https://animate-ui.com/r/primitives-texts-shimmering.json`};export{e as default};