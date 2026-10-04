var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/morphing.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-morphing.tsx`,export:`MorphingTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-morphing.json`,props:{loop:!0,holdDelay:2500}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { MorphingText } from "@/components/vendor/animateui/primitives/texts/morphing";`,usage:`<MorphingText text={…} />`,exports:[{name:`MorphingText`,kind:`component`,propsType:`MorphingTextProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`loop`,type:`boolean`,optional:!0,default:`false`},{name:`holdDelay`,type:`number`,optional:!0,default:`2500`},{name:`text`,type:`string | string[]`,optional:!1},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`},{name:`animate`,type:`boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition`,optional:!0,default:`{ opacity: 1, scale: 1, filter: 'blur(0px)' }`,from:`motion-dom`},{name:`exit`,type:`VariantLabels | TargetAndTransition`,optional:!0,default:`{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }`,from:`motion-dom`},{name:`initial`,type:`boolean | VariantLabels | TargetAndTransition`,optional:!0,default:`{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }`,from:`motion-dom`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 125, damping: 25, mass: 0.4 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:59,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`globalTapTarget`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`MorphingTextProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-morphing.json`,code:`import { MorphingText } from '@/components/vendor/animateui/primitives/texts/morphing';

const texts = [
  'MorphingText Primitive',
  'Animate your text 🚀',
  'Handles emojis 🚀✨',
  'Built with Motion ✨',
];

interface MorphingTextDemoProps {
  loop: boolean;
  holdDelay: number;
}

export const MorphingTextDemo = ({
  loop,
  holdDelay,
}: MorphingTextDemoProps) => {
  return (
    <MorphingText
      key={\`\${loop}-\${holdDelay}\`}
      className="text-4xl font-semibold max-w-2xl"
      text={texts}
      loop={loop}
      holdDelay={holdDelay}
    />
  );
};
`},exampleNote:null}},docsField:`A text component that smoothly morphs characters to transition between strings. 主要导出：MorphingText。 最小用法：<MorphingText text={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/text.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-morphing.md。`,upstream:`https://animate-ui.com/r/primitives-texts-morphing.json`};export{e as default};