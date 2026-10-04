var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/sliding-number.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`,`react-use-measure`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-sliding-number.tsx`,export:`SlidingNumberDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-sliding-number.json`,props:{number:2025,fromNumber:!0,padStart:!0,decimalSeparator:`,`,decimalPlaces:0,thousandSeparator:`.`,delay:0}},note:{summaryZh:`数字动画（动效原语）。`,importLine:`import { SlidingNumber } from "@/components/vendor/animateui/primitives/texts/sliding-number";`,usage:`<SlidingNumber number={…} />`,exports:[{name:`SlidingNumber`,kind:`component`,propsType:`SlidingNumberProps`,inline:!1,union:!1,props:[{name:`number`,type:`number`,optional:!1},{name:`fromNumber`,type:`number`,optional:!0},{name:`onNumberChange`,type:`(number: number) => void`,optional:!0},{name:`padStart`,type:`boolean`,optional:!0,default:`false`},{name:`decimalSeparator`,type:`string`,optional:!0,default:`'.'`},{name:`decimalPlaces`,type:`number`,optional:!0,default:`0`},{name:`thousandSeparator`,type:`string`,optional:!0},{name:`transition`,type:`Transition<any> & SpringOptions`,optional:!0,default:`{ stiffness: 200, damping: 20, mass: 0.4 }`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initiallyStable`,type:`boolean`,optional:!0,default:`false`},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`SlidingNumberProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-sliding-number.json`,code:`import { SlidingNumber } from '@/components/vendor/animateui/primitives/texts/sliding-number';

interface SlidingNumberDemoProps {
  number: number;
  fromNumber: boolean;
  padStart: boolean;
  decimalSeparator: string;
  decimalPlaces: number;
  thousandSeparator: string;
  delay: number;
}

export const SlidingNumberDemo = ({
  number,
  fromNumber,
  padStart,
  decimalSeparator,
  decimalPlaces,
  thousandSeparator,
  delay,
}: SlidingNumberDemoProps) => {
  return (
    <SlidingNumber
      key={\`\${delay}-\${fromNumber}\`}
      delay={delay}
      number={number}
      fromNumber={fromNumber ? 0 : undefined}
      padStart={padStart}
      decimalSeparator={decimalSeparator}
      decimalPlaces={decimalPlaces}
      thousandSeparator={thousandSeparator}
      className="text-4xl font-semibold"
    />
  );
};
`},exampleNote:null}},docsField:`A sliding number animation. 主要导出：SlidingNumber。 最小用法：<SlidingNumber number={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/number.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-sliding-number.md。`,upstream:`https://animate-ui.com/r/primitives-texts-sliding-number.json`};export{e as default};