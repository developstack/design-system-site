var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/tooltip.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-tooltip.tsx`,export:`BaseTooltipDemo`,example:`https://animate-ui.com/r/demo-primitives-base-tooltip.json`,props:{followCursor:!1,side:`top`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`文字提示（基于 Base UI 的原语）。`,importLine:`import { Tooltip } from "@/components/vendor/animateui/primitives/base/tooltip";`,usage:`<Tooltip />`,exports:[{name:`TooltipProvider`,kind:`component`,propsType:`TooltipProviderProps`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:4,names:[`children`,`closeDelay`,`delay`,`timeout`]}]},{name:`Tooltip`,kind:`component`,propsType:`TooltipProps`,inline:!1,union:!1,props:[{name:`followCursor`,type:`"x" | "y" | boolean`,optional:!0,default:`false`},{name:`followCursorSpringOptions`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 200, damping: 17 }`}],inherited:[{package:`@base-ui/react`,count:12,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`disableHoverablePopup`,`disabled`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`trackCursorAxis`,`triggerId`]}]},{name:`TooltipTrigger`,kind:`component`,propsType:`Props<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`closeDelay`,`closeOnClick`,`delay`,`disabled`,`handle`,`payload`,`render`,`style`]}]},{name:`TooltipPortal`,kind:`component`,propsType:`TooltipPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`TooltipPositioner`,kind:`component`,propsType:`Omit<TooltipPositionerProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:15,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`side`]}]},{name:`TooltipPopup`,kind:`component`,propsType:`TooltipPopupProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]},{package:`@base-ui/react`,count:2,names:[`className`,`style`]}]},{name:`TooltipArrow`,kind:`component`,propsType:`Omit<TooltipArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`useTooltip`,kind:`hook`,signature:`() => TooltipContextType`,params:[],requiredParams:0},{name:`TooltipProviderProps`,kind:`type`},{name:`TooltipProps`,kind:`type`},{name:`TooltipTriggerProps`,kind:`type`},{name:`TooltipPortalProps`,kind:`type`},{name:`TooltipPositionerProps`,kind:`type`},{name:`TooltipPopupProps`,kind:`type`},{name:`TooltipArrowProps`,kind:`type`},{name:`TooltipContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-tooltip.json`,code:`import {
  Tooltip,
  TooltipPositioner,
  TooltipPopup,
  TooltipProvider,
  TooltipPortal,
  TooltipTrigger,
} from '@/components/vendor/animateui/primitives/base/tooltip';

interface RadixTooltipDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  followCursor?: boolean | 'x' | 'y';
}

export const BaseTooltipDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
  followCursor,
}: RadixTooltipDemoProps) => {
  return (
    <TooltipProvider>
      <Tooltip followCursor={followCursor}>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipPortal>
          <TooltipPositioner
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            className="z-50"
          >
            <TooltipPopup className="bg-primary text-primary-foreground px-2 py-1 text-sm">
              <p>Add to library</p>
            </TooltipPopup>
          </TooltipPositioner>
        </TooltipPortal>
      </Tooltip>
    </TooltipProvider>
  );
};
`},exampleNote:null}},docsField:`A popup that appears when an element is hovered or focused, sho… 主要导出：Tooltip、TooltipProvider、TooltipTrigger、TooltipPortal 等。 最小用法：<Tooltip />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/tooltip.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-tooltip.md。`,upstream:`https://animate-ui.com/r/primitives-base-tooltip.json`};export{e as default};