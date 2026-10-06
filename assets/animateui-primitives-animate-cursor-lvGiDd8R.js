var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/animate/cursor.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-animate-slot`],preview:{kind:`example`,module:`examples/animateui/primitives-animate-cursor.tsx`,export:`CursorDemo`,example:`https://animate-ui.com/r/demo-primitives-animate-cursor.json`,props:{global:!1,enableCursor:!0,enableCursorFollow:!0,side:`bottom`,sideOffset:15,align:`end`,alignOffset:5}},note:{summaryZh:`光标（动效原语）。`,importLine:`import { Cursor } from "@/components/vendor/animateui/primitives/animate/cursor";`,usage:`<Cursor>…</Cursor>`,exports:[{name:`CursorProvider`,kind:`component`,propsType:`CursorProviderProps`,inline:!0,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`global`,type:`boolean`,optional:!0,default:`false`}],inherited:[]},{name:`Cursor`,kind:`component`,propsType:`CursorProps`,inline:!1,union:!0,props:[{name:`children`,type:`((MotionValueNumber | MotionValueString | ReactNode) & (ReactNode & ReactElement<unknown, string | …`,optional:!1},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`CursorContainer`,kind:`component`,propsType:`CursorContainerProps`,inline:!1,union:!0,props:[{name:`asChild`,type:`boolean`,optional:!0,default:`false`},{name:`children`,type:`MotionValueNumber | MotionValueString | ReactNode | ((MotionValueNumber | MotionValueString | React…`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`CursorFollow`,kind:`component`,propsType:`CursorFollowProps`,inline:!1,union:!0,props:[{name:`side`,type:`CursorFollowSide`,optional:!0,default:`'bottom'`},{name:`sideOffset`,type:`number`,optional:!0,default:`0`},{name:`align`,type:`CursorFollowAlign`,optional:!0,default:`'end'`},{name:`alignOffset`,type:`number`,optional:!0,default:`0`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 500, damping: 50, bounce: 0 }`},{name:`children`,type:`((MotionValueNumber | MotionValueString | ReactNode) & (ReactNode & ReactElement<unknown, string | …`,optional:!1},{name:`asChild`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useCursor`,kind:`hook`,signature:`() => CursorContextType`,params:[],requiredParams:0},{name:`CursorProviderProps`,kind:`type`},{name:`CursorProps`,kind:`type`},{name:`CursorContainerProps`,kind:`type`},{name:`CursorFollowProps`,kind:`type`},{name:`CursorFollowAlign`,kind:`type`},{name:`CursorFollowSide`,kind:`type`},{name:`CursorContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-animate-cursor.json`,code:`import {
  Cursor,
  CursorContainer,
  CursorFollow,
  CursorProvider,
  type CursorFollowSide,
  type CursorFollowAlign,
} from '@/components/vendor/animateui/primitives/animate/cursor';

interface CursorDemoProps {
  global?: boolean;
  enableCursor?: boolean;
  enableCursorFollow?: boolean;
  side?: CursorFollowSide;
  sideOffset?: number;
  align?: CursorFollowAlign;
  alignOffset?: number;
}

export const CursorDemo = ({
  global = false,
  enableCursor = true,
  enableCursorFollow = true,
  side = 'bottom',
  sideOffset = 15,
  align = 'end',
  alignOffset = 5,
}: CursorDemoProps) => {
  return (
    <div
      key={String(global)}
      className="max-w-[400px] h-[400px] w-full bg-accent flex items-center justify-center"
    >
      <p className="font-medium italic text-muted-foreground">
        Move your mouse over the div
      </p>
      <CursorProvider global={global}>
        <CursorContainer>
          {enableCursor && (
            <Cursor>
              <svg
                className="size-6 text-foreground"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 40 40"
              >
                <path
                  fill="currentColor"
                  d="M1.8 4.4 7 36.2c.3 1.8 2.6 2.3 3.6.8l3.9-5.7c1.7-2.5 4.5-4.1 7.5-4.3l6.9-.5c1.8-.1 2.5-2.4 1.1-3.5L5 2.5c-1.4-1.1-3.5 0-3.3 1.9Z"
                />
              </svg>
            </Cursor>
          )}
          {enableCursorFollow && (
            <CursorFollow
              side={side}
              sideOffset={sideOffset}
              align={align}
              alignOffset={alignOffset}
            >
              <div className="bg-foreground text-background px-2 py-1 text-sm">
                Designer
              </div>
            </CursorFollow>
          )}
        </CursorContainer>
      </CursorProvider>
    </div>
  );
};
`},exampleNote:null}},docsField:`An animated cursor component that allows you to custom… 主要导出：Cursor、CursorProvider、CursorContainer、CursorFollow 等。 最小用法：<Cursor>…</Cursor>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/cursor.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-animate-cursor.md。`,upstream:`https://animate-ui.com/r/primitives-animate-cursor.json`};export{e as default};