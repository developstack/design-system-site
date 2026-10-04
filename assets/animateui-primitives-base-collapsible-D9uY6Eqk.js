var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/collapsible.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-collapsible.tsx`,export:`BaseCollapsibleDemo`,example:`https://animate-ui.com/r/demo-primitives-base-collapsible.json`,props:{keepRendered:!1}},note:{summaryZh:`折叠面板（基于 Base UI 的原语）。`,importLine:`import { Collapsible } from "@/components/vendor/animateui/primitives/base/collapsible";`,usage:`<Collapsible />`,exports:[{name:`Collapsible`,kind:`component`,propsType:`Omit<CollapsibleRootProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`defaultOpen`,`disabled`,`onOpenChange`,`open`,`render`,`style`]}]},{name:`CollapsibleTrigger`,kind:`component`,propsType:`Omit<CollapsibleTriggerProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`CollapsiblePanel`,kind:`component`,propsType:`CollapsiblePanelProps`,inline:!1,union:!1,props:[{name:`keepRendered`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.35, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:3,names:[`className`,`hiddenUntilFound`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`useCollapsible`,kind:`hook`,signature:`() => CollapsibleContextType`,params:[],requiredParams:0},{name:`CollapsibleProps`,kind:`type`},{name:`CollapsibleTriggerProps`,kind:`type`},{name:`CollapsiblePanelProps`,kind:`type`},{name:`CollapsibleContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-collapsible.json`,code:`import {
  Collapsible,
  CollapsiblePanel,
  CollapsibleTrigger,
} from '@/components/vendor/animateui/primitives/base/collapsible';

type BaseCollapsibleDemoProps = {
  keepRendered: boolean;
};

export const BaseCollapsibleDemo = ({
  keepRendered = false,
}: BaseCollapsibleDemoProps) => {
  return (
    <Collapsible>
      <CollapsibleTrigger className="px-3 py-1.5 border-b text-start w-[200px]">
        Recovery keys
      </CollapsibleTrigger>
      <CollapsiblePanel keepRendered={keepRendered}>
        <div className="pt-1.5 px-3 text-sm text-muted-foreground">
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </CollapsiblePanel>
    </Collapsible>
  );
};
`},exampleNote:null}},docsField:`A collapsible panel controlled by a button. 主要导出：Collapsible、CollapsibleTrigger、CollapsiblePanel、useCollapsible。 最小用法：<Collapsible />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-collapsible.md。`,upstream:`https://animate-ui.com/r/primitives-base-collapsible.json`};export{e as default};