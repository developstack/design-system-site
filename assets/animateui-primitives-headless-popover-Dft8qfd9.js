var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/headless/popover.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@headlessui/react`,`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-headless-popover.tsx`,export:`HeadlessPopoverDemo`,example:`https://animate-ui.com/r/demo-primitives-headless-popover.json`,props:{anchor:`bottom`,gap:4}},note:{summaryZh:`弹出层（基于 Headless UI 的原语）。`,importLine:`import { Popover } from "@/components/vendor/animateui/primitives/headless/popover";`,usage:`<Popover />`,exports:[{name:`Popover`,kind:`component`,propsType:`PopoverProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`refName`]}]},{name:`PopoverButton`,kind:`component`,propsType:`PopoverButtonProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:231,names:[]},{package:`@headlessui/react`,count:4,names:[`autoFocus`,`children`,`disabled`,`refName`]}]},{name:`PopoverPanel`,kind:`component`,propsType:`PopoverPanelProps<TTag>`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any> & Transition`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`as`,type:`PopoverPanelProps<TTag>["as"] & TTag`,optional:!0,default:`motion.div`}],inherited:[{package:`@types/react`,count:232,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:47,names:[]},{package:`@headlessui/react`,count:8,names:[`anchor`,`children`,`focus`,`modal`,`portal`,`refName`,`static`,`unmount`]}]},{name:`PopoverBackdrop`,kind:`component`,propsType:`PopoverBackdropProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:232,names:[]},{package:`@headlessui/react`,count:5,names:[`children`,`refName`,`static`,`transition`,`unmount`]}]},{name:`PopoverGroup`,kind:`component`,propsType:`PopoverGroupProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`PopoverProps`,kind:`type`},{name:`PopoverButtonProps`,kind:`type`},{name:`PopoverPanelProps`,kind:`type`},{name:`PopoverBackdropProps`,kind:`type`},{name:`PopoverGroupProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-headless-popover.json`,code:`import {
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@/components/vendor/animateui/primitives/headless/popover';

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
      <PopoverButton>Open popover</PopoverButton>

      <PopoverPanel
        anchor={{ to: anchor, gap }}
        className="w-80 bg-background border p-4 z-50"
      >
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
      </PopoverPanel>
    </Popover>
  );
}
`},exampleNote:null}},docsField:`Popovers are perfect for floating panels with arbitrary c… 主要导出：Popover、PopoverButton、PopoverPanel、PopoverBackdrop 等。 最小用法：<Popover />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/popover.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-headless-popover.md。`,upstream:`https://animate-ui.com/r/primitives-headless-popover.json`};export{e as default};