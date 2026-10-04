var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/animate/spring.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-hooks-use-motion-value-state`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-animate-spring.tsx`,export:`SpringDemo`,example:`https://animate-ui.com/r/demo-primitives-animate-spring.json`},note:{summaryZh:null,importLine:`import { Spring } from "@/components/vendor/animateui/primitives/animate/spring";`,usage:`<Spring />`,exports:[{name:`SpringProvider`,kind:`component`,propsType:`SpringProviderProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`dragElastic`,type:`number`,optional:!0,default:`0.2`},{name:`pathConfig`,type:`SpringPathConfig`,optional:!0,default:`{}`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 200, damping: 16 }`}],inherited:[]},{name:`Spring`,kind:`component`,propsType:`SpringProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:488,names:[]}]},{name:`SpringElement`,kind:`component`,propsType:`SpringElementProps`,inline:!1,union:!0,props:[{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useSpring`,kind:`hook`,signature:`() => SpringContextType`,params:[],requiredParams:0},{name:`SpringProviderProps`,kind:`type`},{name:`SpringProps`,kind:`type`},{name:`SpringElementProps`,kind:`type`},{name:`SpringPathConfig`,kind:`type`},{name:`SpringContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-animate-spring.json`,code:`import {
  SpringProvider,
  Spring,
  SpringElement,
} from '@/components/vendor/animateui/primitives/animate/spring';

export const SpringDemo = () => {
  return (
    <SpringProvider>
      <Spring className="z-10 text-neutral-500" />
      <SpringElement className="z-50">
        <img
          src="https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg"
          alt="Animate UI"
          draggable={false}
          className="size-12 border"
        />
      </SpringElement>
    </SpringProvider>
  );
};
`},exampleNote:null}},docsField:`A flexible, animated spring component that attaches a draggable element to its origin with a spring line. 主要导出：Spring、SpringProvider、SpringElement、useSpring。 最小用法：<Spring />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-animate-spring.md。`,upstream:`https://animate-ui.com/r/primitives-animate-spring.json`};export{e as default};