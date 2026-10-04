var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/alert-dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-alert-dialog.tsx`,export:`BaseAlertDialogDemo`,example:`https://animate-ui.com/r/demo-primitives-base-alert-dialog.json`,props:{from:`top`}},note:{summaryZh:`确认对话框（基于 Base UI 的原语）。`,importLine:`import { AlertDialog } from "@/components/vendor/animateui/primitives/base/alert-dialog";`,usage:`<AlertDialog />`,exports:[{name:`AlertDialog`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:9,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`AlertDialogPortal`,kind:`component`,propsType:`AlertDialogPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`AlertDialogBackdrop`,kind:`component`,propsType:`AlertDialogBackdropProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:3,names:[`className`,`forceRender`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`AlertDialogClose`,kind:`component`,propsType:`Omit<DialogCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`AlertDialogTrigger`,kind:`component`,propsType:`AlertDialogTriggerProps<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`handle`,`id`,`nativeButton`,`payload`,`render`,`style`]}]},{name:`AlertDialogPopup`,kind:`component`,propsType:`AlertDialogPopupProps`,inline:!1,union:!1,props:[{name:`from`,type:`AlertDialogFlipDirection`,optional:!0,default:`'top'`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 150, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`finalFocus`,`initialFocus`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`AlertDialogHeader`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertDialogFooter`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertDialogTitle`,kind:`component`,propsType:`Omit<DialogTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`AlertDialogDescription`,kind:`component`,propsType:`Omit<DialogDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`useAlertDialog`,kind:`hook`,signature:`() => AlertDialogContextType`,params:[],requiredParams:0},{name:`AlertDialogProps`,kind:`type`},{name:`AlertDialogTriggerProps`,kind:`type`},{name:`AlertDialogPortalProps`,kind:`type`},{name:`AlertDialogCloseProps`,kind:`type`},{name:`AlertDialogBackdropProps`,kind:`type`},{name:`AlertDialogPopupProps`,kind:`type`},{name:`AlertDialogHeaderProps`,kind:`type`},{name:`AlertDialogFooterProps`,kind:`type`},{name:`AlertDialogTitleProps`,kind:`type`},{name:`AlertDialogDescriptionProps`,kind:`type`},{name:`AlertDialogContextType`,kind:`type`},{name:`AlertDialogFlipDirection`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-alert-dialog.json`,code:`import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogPortal,
  AlertDialogBackdrop,
  AlertDialogClose,
  type AlertDialogFlipDirection,
} from '@/components/vendor/animateui/primitives/base/alert-dialog';

type BaseAlertDialogDemoProps = {
  from: AlertDialogFlipDirection;
};

export const BaseAlertDialogDemo = ({ from }: BaseAlertDialogDemoProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-primary text-primary-foreground px-4 py-2 text-sm">
        Open Dialog
      </AlertDialogTrigger>

      <AlertDialogPortal>
        <AlertDialogBackdrop className="fixed inset-0 z-50 bg-black/80" />
        <AlertDialogPopup
          from={from}
          className="sm:max-w-md fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 border bg-background p-6"
        >
          <AlertDialogHeader>
            <AlertDialogTitle className="text-lg">
              Are you absolutely sure?
            </AlertDialogTitle>
            <AlertDialogDescription className="text-sm">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="mt-4 flex justify-end gap-2">
            <AlertDialogClose className="bg-accent text-accent-foreground px-4 py-2 text-sm">
              Cancel
            </AlertDialogClose>
            <AlertDialogClose className="bg-primary text-primary-foreground px-4 py-2 text-sm">
              Continue
            </AlertDialogClose>
          </AlertDialogFooter>
        </AlertDialogPopup>
      </AlertDialogPortal>
    </AlertDialog>
  );
};
`},exampleNote:null}},docsField:`A dialog that requires user response to proceed. 主要导出：AlertDialog、AlertDialogPortal、AlertDialogBackdrop、AlertDialogClose 等。 最小用法：<AlertDialog />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-alert-dialog.md。`,upstream:`https://animate-ui.com/r/primitives-base-alert-dialog.json`};export{e as default};