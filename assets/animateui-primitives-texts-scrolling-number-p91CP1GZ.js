var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/scrolling-number.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-scrolling-number.tsx`,export:`ScrollingNumberDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-scrolling-number.json`,props:{direction:`btt`,delay:1e3}},note:{summaryZh:`数字动画（动效原语）。`,importLine:`import { ScrollingNumber } from "@/components/vendor/animateui/primitives/texts/scrolling-number";`,usage:`<ScrollingNumber />`,exports:[{name:`ScrollingNumberContainer`,kind:`component`,propsType:`ScrollingNumberContainerProps`,inline:!1,union:!1,props:[{name:`number`,type:`number`,optional:!1},{name:`step`,type:`number`,optional:!1},{name:`itemsSize`,type:`number`,optional:!0,default:`30`},{name:`sideItemsCount`,type:`number`,optional:!0,default:`2`},{name:`direction`,type:`ScrollingNumberDirection`,optional:!0,default:`'btt'`},{name:`onNumberChange`,type:`(value: number) => void`,optional:!0},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ScrollingNumber`,kind:`component`,propsType:`ScrollingNumberProps`,inline:!1,union:!1,props:[{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`onCompleted`,type:`() => void`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ stiffness: 90, damping: 30 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`ScrollingNumberHighlight`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ScrollingNumberItems`,kind:`component`,propsType:`ScrollingNumberItemsProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:279,names:[]}]},{name:`useScrollingNumber`,kind:`hook`,signature:`() => ScrollingNumberContextType`,params:[],requiredParams:0},{name:`ScrollingNumberContainerProps`,kind:`type`},{name:`ScrollingNumberProps`,kind:`type`},{name:`ScrollingNumberHighlightProps`,kind:`type`},{name:`ScrollingNumberItemsProps`,kind:`type`},{name:`ScrollingNumberDirection`,kind:`type`},{name:`ScrollingNumberContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-scrolling-number.json`,code:`'use client';

import React from 'react';

import {
  ScrollingNumberContainer,
  ScrollingNumber,
  ScrollingNumberHighlight,
  ScrollingNumberItems,
  type ScrollingNumberDirection,
} from '@/components/vendor/animateui/primitives/texts/scrolling-number';

interface ScrollingNumberDemoProps {
  direction: ScrollingNumberDirection;
  delay: number;
}

export const ScrollingNumberDemo = ({
  direction = 'btt',
  delay = 1000,
}: ScrollingNumberDemoProps) => {
  const isVertical = direction === 'btt' || direction === 'ttb';

  return (
    <ScrollingNumberContainer
      key={direction}
      number={1000}
      step={100}
      className={isVertical ? 'w-18' : 'h-10'}
      itemsSize={isVertical ? 40 : 75}
      direction={direction}
    >
      <ScrollingNumber delay={delay}>
        <ScrollingNumberItems className="flex items-center justify-center" />
      </ScrollingNumber>
      <ScrollingNumberHighlight className="bg-accent size-full" />
    </ScrollingNumberContainer>
  );
};
`},exampleNote:null}},docsField:`A scrolli… 主要导出：ScrollingNumber、ScrollingNumberContainer、ScrollingNumberHighlight、ScrollingNumberItems 等。 最小用法：<ScrollingNumber />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/number.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-scrolling-number.md。`,upstream:`https://animate-ui.com/r/primitives-texts-scrolling-number.json`};export{e as default};