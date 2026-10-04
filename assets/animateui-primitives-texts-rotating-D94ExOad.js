var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/rotating.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-rotating.tsx`,export:`RotatingTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-rotating.json`,props:{delay:0,y:-50,duration:2e3}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { RotatingTextContainer } from "@/components/vendor/animateui/primitives/texts/rotating";`,usage:`<RotatingTextContainer text={…} />`,exports:[{name:`RotatingTextContainer`,kind:`component`,propsType:`RotatingTextContainerProps`,inline:!1,union:!1,props:[{name:`text`,type:`string | string[]`,optional:!1},{name:`duration`,type:`number`,optional:!0,default:`2000`},{name:`y`,type:`number`,optional:!0,default:`-50`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`RotatingText`,kind:`component`,propsType:`RotatingTextProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.3, ease: 'easeOut' }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useRotatingText`,kind:`hook`,signature:`() => RotatingTextContextType`,params:[],requiredParams:0},{name:`RotatingTextContainerProps`,kind:`type`},{name:`RotatingTextProps`,kind:`type`},{name:`RotatingTextContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-rotating.json`,code:`import {
  RotatingText,
  RotatingTextContainer,
} from '@/components/vendor/animateui/primitives/texts/rotating';

interface RotatingTextDemoProps {
  delay: number;
  y: number;
  duration: number;
}

export const RotatingTextDemo = ({
  delay,
  y,
  duration,
}: RotatingTextDemoProps) => {
  return (
    <RotatingTextContainer
      key={delay}
      delay={delay}
      y={y}
      duration={duration}
      className="text-4xl font-semibold"
      text={['Rotating', 'Text', 'Demo']}
    >
      <RotatingText />
    </RotatingTextContainer>
  );
};
`},exampleNote:null}},docsField:`A rotating text animation. 主要导出：RotatingTextContainer、RotatingText、useRotatingText。 最小用法：<RotatingTextContainer text={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-rotating.md。`,upstream:`https://animate-ui.com/r/primitives-texts-rotating.json`};export{e as default};