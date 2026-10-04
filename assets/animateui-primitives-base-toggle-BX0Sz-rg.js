var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/toggle.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-toggle.tsx`,export:`BaseToggleDemo`,example:`https://animate-ui.com/r/demo-primitives-base-toggle.json`},note:{summaryZh:`切换按钮（基于 Base UI 的原语）。`,importLine:`import { Toggle } from "@/components/vendor/animateui/primitives/base/toggle";`,usage:`<Toggle />`,exports:[{name:`Toggle`,kind:`component`,propsType:`ToggleProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:8,names:[`className`,`defaultPressed`,`disabled`,`nativeButton`,`onPressedChange`,`pressed`,`style`,`value`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`ToggleHighlight`,kind:`component`,propsType:`ToggleHighlightProps`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`ToggleItem`,kind:`component`,propsType:`ToggleItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`useToggle`,kind:`hook`,signature:`() => ToggleContextType`,params:[],requiredParams:0},{name:`ToggleProps`,kind:`type`},{name:`ToggleHighlightProps`,kind:`type`},{name:`ToggleItemProps`,kind:`type`},{name:`ToggleContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-toggle.json`,code:`import {
  Toggle,
  ToggleHighlight,
  ToggleItem,
} from '@/components/vendor/animateui/primitives/base/toggle';
import { Bold } from 'lucide-react';

export const BaseToggleDemo = () => {
  return (
    <Toggle className="relative size-8 flex items-center justify-center">
      <ToggleHighlight className="bg-accent" />
      <ToggleItem>
        <Bold className="h-4 w-4" />
      </ToggleItem>
    </Toggle>
  );
};
`},exampleNote:null}},docsField:`A two-state button that can be on or off. 主要导出：Toggle、ToggleHighlight、ToggleItem、useToggle。 最小用法：<Toggle />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/toggle.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-toggle.md。`,upstream:`https://animate-ui.com/r/primitives-base-toggle.json`};export{e as default};