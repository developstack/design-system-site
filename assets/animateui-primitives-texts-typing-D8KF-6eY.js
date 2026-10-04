var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/texts/typing.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-is-in-view`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-texts-typing.tsx`,export:`TypingTextDemo`,example:`https://animate-ui.com/r/demo-primitives-texts-typing.json`,props:{delay:0,holdDelay:1e3,loop:!1,cursor:!0}},note:{summaryZh:`文字动效（动效原语）。`,importLine:`import { TypingText } from "@/components/vendor/animateui/primitives/texts/typing";`,usage:`<TypingText text={…} />`,exports:[{name:`TypingText`,kind:`component`,propsType:`TypingTextProps`,inline:!1,union:!1,props:[{name:`duration`,type:`number`,optional:!0,default:`100`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`loop`,type:`boolean`,optional:!0,default:`false`},{name:`holdDelay`,type:`number`,optional:!0,default:`1000`},{name:`text`,type:`string | string[]`,optional:!1},{name:`inView`,type:`boolean`,optional:!0,default:`false`},{name:`inViewOnce`,type:`boolean`,optional:!0,default:`true`},{name:`inViewMargin`,type:`MarginType`,optional:!0,default:`'0px'`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`TypingTextCursor`,kind:`component`,propsType:`TypingTextCursorProps`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`TypingTextProps`,kind:`type`},{name:`TypingTextCursorProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-texts-typing.json`,code:`import {
  TypingText,
  TypingTextCursor,
} from '@/components/vendor/animateui/primitives/texts/typing';

interface TypingTextDemoProps {
  delay: number;
  holdDelay: number;
  loop: boolean;
  cursor: boolean;
}

export const TypingTextDemo = ({
  delay,
  holdDelay,
  loop,
  cursor,
}: TypingTextDemoProps) => {
  return (
    <TypingText
      key={\`\${delay}-\${holdDelay}-\${loop}-\${cursor}\`}
      delay={delay}
      holdDelay={holdDelay}
      className="text-4xl font-semibold"
      text="Typing Text component made with Motion. Highly customizable and easy to use."
      loop={loop}
    >
      {cursor && <TypingTextCursor className="!h-8 !w-1 rounded-full ml-1" />}
    </TypingText>
  );
};
`},exampleNote:null}},docsField:`A typing text animation. 主要导出：TypingText、TypingTextCursor。 最小用法：<TypingText text={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-texts-typing.md。`,upstream:`https://animate-ui.com/r/primitives-texts-typing.json`};export{e as default};