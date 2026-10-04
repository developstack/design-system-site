var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/headless/popover.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-headless-popover`],preview:{kind:`example`,module:`examples/animateui/components-headless-popover.tsx`,export:`HeadlessPopoverDemo`,example:`https://animate-ui.com/r/demo-components-headless-popover.json`,props:{anchor:`bottom`,gap:4}},note:{summaryZh:`弹出层（基于 Headless UI 的组件）。`,importLine:`import { Popover } from "@/components/vendor/animateui/components/headless/popover";`,usage:`<Popover />`,exports:[{name:`Popover`,kind:`component`,propsType:`PopoverProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`refName`]}]},{name:`PopoverButton`,kind:`component`,propsType:`PopoverButtonProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:231,names:[]},{package:`@headlessui/react`,count:4,names:[`autoFocus`,`children`,`disabled`,`refName`]}]},{name:`PopoverPanel`,kind:`component`,propsType:`PopoverPanelProps<TTag>`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any> & Transition`,optional:!0,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`as`,type:`PopoverPanelProps<TTag>["as"] & TTag`,optional:!0},{name:`anchor`,type:`PopoverPanelProps<TTag>["anchor"]`,optional:!0,default:`{ to: 'bottom', gap: 4 }`,from:`@headlessui/react`}],inherited:[{package:`@types/react`,count:232,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:47,names:[]},{package:`@headlessui/react`,count:7,names:[`children`,`focus`,`modal`,`portal`,`refName`,`static`,`unmount`]}]},{name:`PopoverBackdrop`,kind:`component`,propsType:`PopoverBackdropProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:232,names:[]},{package:`@headlessui/react`,count:5,names:[`children`,`refName`,`static`,`transition`,`unmount`]}]},{name:`PopoverGroup`,kind:`component`,propsType:`PopoverGroupProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`PopoverProps`,kind:`type`},{name:`PopoverButtonProps`,kind:`type`},{name:`PopoverPanelProps`,kind:`type`},{name:`PopoverBackdropProps`,kind:`type`},{name:`PopoverGroupProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-headless-popover.json`,code:`import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@/components/vendor/animateui/components/headless/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface HeadlessPopoverDemoProps {
  anchor?:
    | 'top'
    | 'bottom'
    | 'left'
    | 'right'
    | 'top start'
    | 'top end'
    | 'bottom start'
    | 'bottom end'
    | 'left start'
    | 'left end'
    | 'right start'
    | 'right end';
  gap?: number;
}

export function HeadlessPopoverDemo({
  anchor = 'bottom',
  gap = 4,
}: HeadlessPopoverDemoProps) {
  return (
    <Popover>
      <PopoverButton as={Button} variant="outline">
        Open popover
      </PopoverButton>

      <PopoverPanel anchor={{ to: anchor, gap }} className="w-80">
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
}
`},exampleNote:null}},docsField:`Popovers are perfect for floating panels with arbitrary content like navigation menus, mobile menus and fly… 主要导出：Popover、PopoverButton、PopoverPanel、PopoverBackdrop 等。 最小用法：<Popover />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-headless-popover.md。`,upstream:`https://animate-ui.com/r/components-headless-popover.json`};export{e as default};