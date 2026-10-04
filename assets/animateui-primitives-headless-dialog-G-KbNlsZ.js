var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/headless/dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@headlessui/react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-headless-dialog.tsx`,export:`RadixDialogDemo`,example:`https://animate-ui.com/r/demo-primitives-headless-dialog.json`,props:{from:`top`}},note:{summaryZh:`对话框（基于 Headless UI 的原语）。`,importLine:`import { Dialog } from "@/components/vendor/animateui/primitives/headless/dialog";`,usage:`<Dialog />`,exports:[{name:`Dialog`,kind:`component`,propsType:`DialogProps<TTag>`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`as`,type:`DialogProps<TTag>["as"] & TTag`,optional:!0}],inherited:[{package:`@types/react`,count:229,names:[]},{package:`@headlessui/react`,count:10,names:[`autoFocus`,`children`,`initialFocus`,`onClose`,`open`,`refName`,`role`,`transition`,`unmount`]}]},{name:`DialogBackdrop`,kind:`component`,propsType:`DialogBackdropProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`DialogBackdropProps<TTag>["as"] & TTag`,optional:!0,default:`motion.div`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:46,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`DialogPanel`,kind:`component`,propsType:`DialogPanelProps<TTag>`,inline:!1,union:!1,props:[{name:`from`,type:`DialogFlipDirection`,optional:!0,default:`'top'`},{name:`transition`,type:`Transition<any> & Transition`,optional:!0,default:`{ type: 'spring', stiffness: 150, damping: 25 }`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`as`,type:`DialogPanelProps<TTag>["as"] & TTag`,optional:!0,default:`motion.div`}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:46,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`DialogClose`,kind:`component`,propsType:`DialogCloseProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0,default:`'button'`}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:5,names:[`autoFocus`,`children`,`disabled`,`refName`,`type`]}]},{name:`DialogTitle`,kind:`component`,propsType:`DialogTitleProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: TitleRenderPropArg) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`DialogDescription`,kind:`component`,propsType:`DialogDescriptionProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: {}) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`ref`,`refName`]}]},{name:`DialogHeader`,kind:`component`,propsType:`DialogHeaderProps<TTag>`,inline:!1,union:!1,props:[],inherited:[]},{name:`DialogFooter`,kind:`component`,propsType:`DialogFooterProps<"div">`,inline:!1,union:!1,props:[{name:`as`,type:`"div"`,optional:!0,default:`'div'`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`DialogProps`,kind:`type`},{name:`DialogBackdropProps`,kind:`type`},{name:`DialogPanelProps`,kind:`type`},{name:`DialogCloseProps`,kind:`type`},{name:`DialogTitleProps`,kind:`type`},{name:`DialogDescriptionProps`,kind:`type`},{name:`DialogHeaderProps`,kind:`type`},{name:`DialogFooterProps`,kind:`type`},{name:`DialogFlipDirection`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-headless-dialog.json`,code:`'use client';

import * as React from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  type DialogFlipDirection,
} from '@/components/vendor/animateui/primitives/headless/dialog';
import { X } from 'lucide-react';

type RadixDialogDemoProps = {
  from: DialogFlipDirection;
};

export const RadixDialogDemo = ({ from }: RadixDialogDemoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        className="bg-primary text-primary-foreground px-4 py-2 text-sm"
        onClick={() => setIsOpen(true)}
      >
        Open Dialog
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogBackdrop className="fixed inset-0 z-50 bg-black/80" />
        <DialogPanel
          from={from}
          className="sm:max-w-md fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 border bg-background p-6"
        >
          <DialogHeader>
            <DialogTitle className="text-lg">Terms of Service</DialogTitle>
            <DialogDescription className="text-sm">
              Please read the following terms of service carefully.
            </DialogDescription>
          </DialogHeader>

          <p className="py-4 text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quos.
          </p>

          <DialogFooter>
            <button className="bg-primary text-primary-foreground px-4 py-2 text-sm">
              Accept
            </button>
          </DialogFooter>

          <DialogClose className="absolute top-4 right-4">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogPanel>
      </Dialog>
    </div>
  );
};
`},exampleNote:null}},docsField:`A fully-managed, renderless dialog component jam-packed with accessi… 主要导出：Dialog、DialogBackdrop、DialogPanel、DialogClose 等。 最小用法：<Dialog />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/dialog.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-headless-dialog.md。`,upstream:`https://animate-ui.com/r/primitives-headless-dialog.json`};export{e as default};