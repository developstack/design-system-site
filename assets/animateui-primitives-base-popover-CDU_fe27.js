var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/popover.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-popover.tsx`,export:`BasePopoverDemo`,example:`https://animate-ui.com/r/demo-primitives-base-popover.json`,props:{side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`弹出层（基于 Base UI 的原语）。`,importLine:`import { Popover } from "@/components/vendor/animateui/primitives/base/popover";`,usage:`<Popover />`,exports:[{name:`Popover`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:10,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`modal`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`PopoverTrigger`,kind:`component`,propsType:`NativeButtonProps & Omit<WithBaseUIEvent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,…`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`closeDelay`,`delay`,`handle`,`nativeButton`,`openOnHover`,`payload`,`render`,`style`]}]},{name:`PopoverPortal`,kind:`component`,propsType:`PopoverPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`PopoverPositioner`,kind:`component`,propsType:`Omit<PopoverPositionerProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:15,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`side`]}]},{name:`PopoverPopup`,kind:`component`,propsType:`PopoverPopupProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`finalFocus`,`initialFocus`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`PopoverBackdrop`,kind:`component`,propsType:`Omit<PopoverBackdropProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverArrow`,kind:`component`,propsType:`Omit<PopoverArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverTitle`,kind:`component`,propsType:`Omit<PopoverTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverDescription`,kind:`component`,propsType:`Omit<PopoverDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverClose`,kind:`component`,propsType:`Omit<PopoverCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`usePopover`,kind:`hook`,signature:`() => PopoverContextType`,params:[],requiredParams:0},{name:`PopoverProps`,kind:`type`},{name:`PopoverTriggerProps`,kind:`type`},{name:`PopoverPortalProps`,kind:`type`},{name:`PopoverPositionerProps`,kind:`type`},{name:`PopoverPopupProps`,kind:`type`},{name:`PopoverBackdropProps`,kind:`type`},{name:`PopoverArrowProps`,kind:`type`},{name:`PopoverTitleProps`,kind:`type`},{name:`PopoverDescriptionProps`,kind:`type`},{name:`PopoverCloseProps`,kind:`type`},{name:`PopoverContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-popover.json`,code:`import {
  Popover,
  PopoverPositioner,
  PopoverPopup,
  PopoverPortal,
  PopoverTrigger,
} from '@/components/vendor/animateui/primitives/base/popover';

interface BasePopoverDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

export function BasePopoverDemo({
  side,
  sideOffset,
  align,
  alignOffset,
}: BasePopoverDemoProps) {
  return (
    <Popover>
      <PopoverTrigger>Open popover</PopoverTrigger>
      <PopoverPortal>
        <PopoverPositioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className="z-50"
        >
          <PopoverPopup className="w-80 bg-background border p-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <h4 className="font-medium leading-none">Dimensions</h4>
                <p className="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
              </div>
              <div className="grid gap-2">
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="width" className="text-sm">
                    Width
                  </label>
                  <input
                    id="width"
                    defaultValue="100%"
                    className="col-span-2 h-8 p-2 border"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxWidth" className="text-sm">
                    Max. width
                  </label>
                  <input
                    id="maxWidth"
                    defaultValue="300px"
                    className="col-span-2 h-8 p-2 border"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="height" className="text-sm">
                    Height
                  </label>
                  <input
                    id="height"
                    defaultValue="25px"
                    className="col-span-2 h-8 p-2 border"
                  />
                </div>
                <div className="grid grid-cols-3 items-center gap-4">
                  <label htmlFor="maxHeight" className="text-sm">
                    Max. height
                  </label>
                  <input
                    id="maxHeight"
                    defaultValue="none"
                    className="col-span-2 h-8 p-2 border"
                  />
                </div>
              </div>
            </div>
          </PopoverPopup>
        </PopoverPositioner>
      </PopoverPortal>
    </Popover>
  );
}
`},exampleNote:null}},docsField:`An accessible popup anchored to a button. 主要导出：Popover、PopoverTrigger、PopoverPortal、PopoverPositioner 等。 最小用法：<Popover />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/popover.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-popover.md。`,upstream:`https://animate-ui.com/r/primitives-base-popover.json`};export{e as default};