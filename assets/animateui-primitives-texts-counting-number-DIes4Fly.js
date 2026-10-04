var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/counting-number.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-counting-number.tsx`,export:`CountingFromNumberDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-counting-number.json`,props:{number:2025,fromNumber:0,padStart:!1,decimalSeparator:`.`,decimalPlaces:0,delay:0}},note:{summaryZh:`数字动画（动效原语）。`,importLine:`import { CountingNumber } from "@/components/vendor/animateui/primitives/texts/counting-number";`,usage:`<CountingNumber number={…} />`,exports:[{name:`CountingNumber`,kind:`component`,propsType:`CountingNumberProps`,inline:!1,union:!1,props:[{name:`number`,type:`number`,optional:!1},{name:`fromNumber`,type:`number`,optional:!0,default:`0`},{name:`padStart`,type:`boolean`,optional:!0,default:`false`},{name:`decimalSeparator`,type:`string`,optional:!0,default:`'.'`},{name:`decimalPlaces`,type:`number`,optional:!0,default:`0`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 90, damping: 50 }`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`initiallyStable`,type:`boolean`,optional:!0,default:`false`},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`CountingNumberProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-counting-number.json`,code:`import { CountingNumber } from '@/components/vendor/animateui/primitives/texts/counting-number';

interface CountingFromNumberDemoProps {
  number: number;
  fromNumber: number;
  padStart: boolean;
  decimalSeparator: string;
  decimalPlaces: number;
  delay: number;
}

export const CountingFromNumberDemo = ({
  number,
  fromNumber,
  padStart,
  decimalSeparator,
  decimalPlaces,
  delay,
}: CountingFromNumberDemoProps) => {
  return (
    <CountingNumber
      key={delay}
      delay={delay}
      number={number}
      fromNumber={fromNumber}
      padStart={padStart}
      decimalSeparator={decimalSeparator}
      decimalPlaces={decimalPlaces}
      className="text-4xl font-semibold"
    />
  );
};
`},exampleNote:null}},docsField:`A counting number animation. 主要导出：CountingNumber。 最小用法：<CountingNumber number={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/number.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-counting-number.md。`,upstream:`https://animate-ui.com/r/primitives-texts-counting-number.json`};export{e as default};