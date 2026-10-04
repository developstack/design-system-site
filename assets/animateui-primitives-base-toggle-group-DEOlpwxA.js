var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/toggle-group.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-effects-highlight`],preview:{kind:`example`,module:`examples/animateui/primitives-base-toggle-group.tsx`,export:`BaseToggleGroupDemo`,example:`https://animate-ui.com/r/demo-primitives-base-toggle-group.json`,props:{toggleMultiple:!1}},note:{summaryZh:`切换按钮组（基于 Base UI 的原语）。`,importLine:`import { ToggleGroup } from "@/components/vendor/animateui/primitives/base/toggle-group";`,usage:`<ToggleGroup />`,exports:[{name:`ToggleGroup`,kind:`component`,propsType:`Props<string> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:10,names:[`className`,`defaultValue`,`disabled`,`loopFocus`,`multiple`,`onValueChange`,`orientation`,`render`,`style`,`value`]}]},{name:`ToggleGroupHighlight`,kind:`component`,propsType:`ToggleGroupHighlightProps`,inline:!0,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`ref`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`mode`,type:`"children" | "parent"`,optional:!0},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0,default:`{ type: 'spring', stiffness: 200, damping: 25 }`},{name:`hover`,type:`boolean`,optional:!0},{name:`click`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`enabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1}],inherited:[]},{name:`Toggle`,kind:`component`,propsType:`ToggleProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:8,names:[`className`,`defaultPressed`,`disabled`,`nativeButton`,`onPressedChange`,`pressed`,`style`,`value`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`ToggleHighlight`,kind:`component`,propsType:`ToggleHighlightProps`,inline:!1,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`children`,type:`ReactNode & (ReactElement<unknown, string | JSXElementConstructor<any>> & (MotionValueNumber | Moti…`,optional:!1},{name:`id`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties & MotionStyle`,optional:!0,doc:"The React DOM `style` prop, enhanced with support for `MotionValue`s and separate `transform` values. ```jsx export const MyComponent = () => { const x = useMotionValue(0) return <motion.div style={{ x, opacity: 1, scale: 0.5 }} /> } ```"},{name:`transition`,type:`Transition & Transition<any>`,optional:!0,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`activeClassName`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`forceUpdateBounds`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]}]},{name:`useToggleGroup`,kind:`hook`,signature:`() => ToggleGroupContextType`,params:[],requiredParams:0},{name:`ToggleGroupProps`,kind:`type`},{name:`ToggleGroupHighlightProps`,kind:`type`},{name:`ToggleProps`,kind:`type`},{name:`ToggleHighlightProps`,kind:`type`},{name:`ToggleGroupContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-toggle-group.json`,code:`import {
  ToggleGroup,
  Toggle,
  ToggleGroupHighlight,
  ToggleHighlight,
} from '@/components/vendor/animateui/primitives/base/toggle-group';
import { Bold, Italic, Underline } from 'lucide-react';
import { useEffect, useState } from 'react';

interface BaseToggleGroupDemoProps {
  toggleMultiple: boolean;
}

export const BaseToggleGroupDemo = ({
  toggleMultiple,
}: BaseToggleGroupDemoProps) => {
  const [value, setValue] = useState<any[]>([]);

  useEffect(() => {
    setValue(['bold']);
  }, [toggleMultiple]);

  return !toggleMultiple ? (
    <ToggleGroup value={value} onValueChange={setValue} className="flex gap-2">
      <ToggleGroupHighlight className="bg-accent">
        <ToggleHighlight value="bold">
          <Toggle
            value="bold"
            aria-label="Toggle bold"
            className="size-8 flex items-center justify-center"
          >
            <Bold className="h-4 w-4" />
          </Toggle>
        </ToggleHighlight>
        <ToggleHighlight value="italic">
          <Toggle
            value="italic"
            aria-label="Toggle italic"
            className="size-8 flex items-center justify-center"
          >
            <Italic className="h-4 w-4" />
          </Toggle>
        </ToggleHighlight>
        <ToggleHighlight value="underline">
          <Toggle
            value="underline"
            aria-label="Toggle underline"
            className="size-8 flex items-center justify-center"
          >
            <Underline className="h-4 w-4" />
          </Toggle>
        </ToggleHighlight>
      </ToggleGroupHighlight>
    </ToggleGroup>
  ) : (
    <ToggleGroup
      multiple
      value={value}
      onValueChange={setValue}
      className="flex gap-2"
    >
      <ToggleHighlight value="bold" className="bg-accent">
        <Toggle
          value="bold"
          aria-label="Toggle bold"
          className="size-8 flex items-center justify-center"
        >
          <Bold className="h-4 w-4" />
        </Toggle>
      </ToggleHighlight>
      <ToggleHighlight value="italic" className="bg-accent">
        <Toggle
          value="italic"
          aria-label="Toggle italic"
          className="size-8 flex items-center justify-center"
        >
          <Italic className="h-4 w-4" />
        </Toggle>
      </ToggleHighlight>
      <ToggleHighlight value="underline" className="bg-accent">
        <Toggle
          value="underline"
          aria-label="Toggle underline"
          className="size-8 flex items-center justify-center"
        >
          <Underline className="h-4 w-4" />
        </Toggle>
      </ToggleHighlight>
    </ToggleGroup>
  );
};
`},exampleNote:null}},docsField:`Provides a shared state to a series of toggle buttons. 主要导出：ToggleGroup、ToggleGroupHighlight、Toggle、ToggleHighlight 等。 最小用法：<ToggleGroup />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-toggle-group.md。`,upstream:`https://animate-ui.com/r/primitives-base-toggle-group.json`};export{e as default};