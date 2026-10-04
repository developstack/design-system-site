var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/popover.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-base-popover`],preview:{kind:`example`,module:`examples/animateui/components-base-popover.tsx`,export:`BasePopoverDemo`,example:`https://animate-ui.com/r/demo-components-base-popover.json`,props:{side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`弹出层（基于 Base UI 的组件）。`,importLine:`import { Popover } from "@/components/vendor/animateui/components/base/popover";`,usage:`<Popover />`,exports:[{name:`Popover`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:10,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`modal`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`PopoverTrigger`,kind:`component`,propsType:`NativeButtonProps & Omit<WithBaseUIEvent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,…`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`closeDelay`,`delay`,`handle`,`nativeButton`,`openOnHover`,`payload`,`render`,`style`]}]},{name:`PopoverPanel`,kind:`component`,propsType:`PopoverPanelProps`,inline:!1,union:!1,props:[{name:`align`,type:`Align`,optional:!0,default:`'center'`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`4`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:15,names:[`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`finalFocus`,`initialFocus`,`positionMethod`,`render`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`PopoverClose`,kind:`component`,propsType:`Omit<PopoverCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`PopoverBackdrop`,kind:`component`,propsType:`Omit<PopoverBackdropProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverTitle`,kind:`component`,propsType:`Omit<PopoverTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverDescription`,kind:`component`,propsType:`Omit<PopoverDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PopoverProps`,kind:`type`},{name:`PopoverTriggerProps`,kind:`type`},{name:`PopoverPanelProps`,kind:`type`},{name:`PopoverCloseProps`,kind:`type`},{name:`PopoverBackdropProps`,kind:`type`},{name:`PopoverTitleProps`,kind:`type`},{name:`PopoverDescriptionProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-popover.json`,code:`import {
  Popover,
  PopoverTrigger,
  PopoverPanel,
} from '@/components/vendor/animateui/components/base/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BasePopoverDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

export const BasePopoverDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
}: BasePopoverDemoProps) => {
  return (
    <Popover>
      <PopoverTrigger
        render={<Button variant="outline">Open popover</Button>}
      />
      <PopoverPanel
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="w-80"
      >
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="leading-none font-medium">Dimensions</h4>
            <p className="text-muted-foreground text-sm">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
};
`},exampleNote:null}},docsField:`An accessible popup anchored to a button. 主要导出：Popover、PopoverTrigger、PopoverPanel、PopoverClose 等。 最小用法：<Popover />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/popover.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-base-popover.md。`,upstream:`https://animate-ui.com/r/components-base-popover.json`};export{e as default};