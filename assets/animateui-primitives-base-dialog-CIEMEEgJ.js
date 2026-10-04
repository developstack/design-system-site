var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-dialog.tsx`,export:`BaseDialogDemo`,example:`https://animate-ui.com/r/demo-primitives-base-dialog.json`,props:{from:`top`}},note:{summaryZh:`对话框（基于 Base UI 的原语）。`,importLine:`import { Dialog } from "@/components/vendor/animateui/primitives/base/dialog";`,usage:`<Dialog />`,exports:[{name:`Dialog`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:11,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`disablePointerDismissal`,`handle`,`modal`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`DialogPortal`,kind:`component`,propsType:`DialogPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`DialogBackdrop`,kind:`component`,propsType:`DialogBackdropProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:3,names:[`className`,`forceRender`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`DialogClose`,kind:`component`,propsType:`Omit<DialogCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`DialogTrigger`,kind:`component`,propsType:`DialogTriggerProps<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`handle`,`id`,`nativeButton`,`payload`,`render`,`style`]}]},{name:`DialogPopup`,kind:`component`,propsType:`DialogPopupProps`,inline:!1,union:!1,props:[{name:`from`,type:`DialogFlipDirection`,optional:!0,default:`'top'`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 150, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`finalFocus`,`initialFocus`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`DialogHeader`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`DialogFooter`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`DialogTitle`,kind:`component`,propsType:`Omit<DialogTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`DialogDescription`,kind:`component`,propsType:`Omit<DialogDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`useDialog`,kind:`hook`,signature:`() => DialogContextType`,params:[],requiredParams:0},{name:`DialogProps`,kind:`type`},{name:`DialogTriggerProps`,kind:`type`},{name:`DialogPortalProps`,kind:`type`},{name:`DialogCloseProps`,kind:`type`},{name:`DialogBackdropProps`,kind:`type`},{name:`DialogPopupProps`,kind:`type`},{name:`DialogHeaderProps`,kind:`type`},{name:`DialogFooterProps`,kind:`type`},{name:`DialogTitleProps`,kind:`type`},{name:`DialogDescriptionProps`,kind:`type`},{name:`DialogContextType`,kind:`type`},{name:`DialogFlipDirection`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-dialog.json`,code:`import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogPortal,
  DialogBackdrop,
  DialogClose,
  type DialogFlipDirection,
} from '@/components/vendor/animateui/primitives/base/dialog';
import { X } from 'lucide-react';

type BaseDialogDemoProps = {
  from: DialogFlipDirection;
};

export const BaseDialogDemo = ({ from }: BaseDialogDemoProps) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-primary text-primary-foreground px-4 py-2 text-sm">
        Open Dialog
      </DialogTrigger>

      <DialogPortal>
        <DialogBackdrop className="fixed inset-0 z-50 bg-black/80" />
        <DialogPopup
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
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
};
`},exampleNote:null}},docsField:`A popup that opens on top of the entire page. 主要导出：Dialog、DialogPortal、DialogBackdrop、DialogClose 等。 最小用法：<Dialog />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/dialog.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-dialog.md。`,upstream:`https://animate-ui.com/r/primitives-base-dialog.json`};export{e as default};