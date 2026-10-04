var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/alert-dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-components-buttons-button`,`@developstack/animateui-primitives-base-alert-dialog`],preview:{kind:`example`,module:`examples/animateui/components-base-alert-dialog.tsx`,export:`BaseAlertDialogDemo`,example:`https://animate-ui.com/r/demo-components-base-alert-dialog.json`,props:{from:`top`}},note:{summaryZh:`确认对话框（基于 Base UI 的组件）。`,importLine:`import { AlertDialog } from "@/components/vendor/animateui/components/base/alert-dialog";`,usage:`<AlertDialog />`,exports:[{name:`AlertDialog`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:9,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`AlertDialogTrigger`,kind:`component`,propsType:`AlertDialogTriggerProps<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`handle`,`id`,`nativeButton`,`payload`,`render`,`style`]}]},{name:`AlertDialogPopup`,kind:`component`,propsType:`AlertDialogPopupProps`,inline:!1,union:!1,props:[{name:`from`,type:`AlertDialogFlipDirection`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`finalFocus`,`initialFocus`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`AlertDialogHeader`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertDialogFooter`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertDialogTitle`,kind:`component`,propsType:`Omit<DialogTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`AlertDialogDescription`,kind:`component`,propsType:`Omit<DialogDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`AlertDialogAction`,kind:`component`,propsType:`Omit<DialogCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`AlertDialogCancel`,kind:`component`,propsType:`Omit<DialogCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`AlertDialogProps`,kind:`type`},{name:`AlertDialogTriggerProps`,kind:`type`},{name:`AlertDialogPopupProps`,kind:`type`},{name:`AlertDialogHeaderProps`,kind:`type`},{name:`AlertDialogFooterProps`,kind:`type`},{name:`AlertDialogTitleProps`,kind:`type`},{name:`AlertDialogDescriptionProps`,kind:`type`},{name:`AlertDialogActionProps`,kind:`type`},{name:`AlertDialogCancelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-alert-dialog.json`,code:`import * as React from 'react';

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogPopup,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  type AlertDialogPopupProps,
} from '@/components/vendor/animateui/components/base/alert-dialog';
import { Button } from '@/components/ui/button';

interface BaseAlertDialogDemoProps {
  from: AlertDialogPopupProps['from'];
}

export const BaseAlertDialogDemo = ({ from }: BaseAlertDialogDemoProps) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger
        render={<Button variant="outline">Open Dialog</Button>}
      />
      <AlertDialogPopup from={from} className="sm:max-w-[425px]">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
};
`},exampleNote:null}},docsField:`A dialog that requires user response to proceed. 主要导出：AlertDialog、AlertDialogTrigger、AlertDialogPopup、AlertDialogHeader 等。 最小用法：<AlertDialog />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-base-alert-dialog.md。`,upstream:`https://animate-ui.com/r/components-base-alert-dialog.json`};export{e as default};