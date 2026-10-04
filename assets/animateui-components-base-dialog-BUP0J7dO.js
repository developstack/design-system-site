var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`],registryDependencies:[`@developstack/animateui-primitives-base-dialog`],preview:{kind:`example`,module:`examples/animateui/components-base-dialog.tsx`,export:`BaseDialogDemo`,example:`https://animate-ui.com/r/demo-components-base-dialog.json`,props:{from:`top`,showCloseButton:!0}},note:{summaryZh:`对话框（基于 Base UI 的组件）。`,importLine:`import { Dialog } from "@/components/vendor/animateui/components/base/dialog";`,usage:`<Dialog />`,exports:[{name:`Dialog`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:11,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`disablePointerDismissal`,`handle`,`modal`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`DialogTrigger`,kind:`component`,propsType:`DialogTriggerProps<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:284,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`handle`,`id`,`nativeButton`,`payload`,`render`,`style`]}]},{name:`DialogClose`,kind:`component`,propsType:`Omit<DialogCloseProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`DialogPopup`,kind:`component`,propsType:`DialogPopupProps`,inline:!1,union:!1,props:[{name:`showCloseButton`,type:`boolean`,optional:!0,default:`true`},{name:`from`,type:`DialogFlipDirection`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:4,names:[`className`,`finalFocus`,`initialFocus`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`DialogHeader`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`DialogFooter`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`DialogTitle`,kind:`component`,propsType:`Omit<DialogTitleProps, "ref"> & RefAttributes<HTMLHeadingElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`DialogDescription`,kind:`component`,propsType:`Omit<DialogDescriptionProps, "ref"> & RefAttributes<HTMLParagraphElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`DialogProps`,kind:`type`},{name:`DialogTriggerProps`,kind:`type`},{name:`DialogCloseProps`,kind:`type`},{name:`DialogPopupProps`,kind:`type`},{name:`DialogHeaderProps`,kind:`type`},{name:`DialogFooterProps`,kind:`type`},{name:`DialogTitleProps`,kind:`type`},{name:`DialogDescriptionProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-dialog.json`,code:`import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogPopup,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogFooter,
  type DialogPopupProps,
} from '@/components/vendor/animateui/components/base/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface BaseDialogDemoProps {
  from: DialogPopupProps['from'];
  showCloseButton: boolean;
}

export const BaseDialogDemo = ({
  from,
  showCloseButton,
}: BaseDialogDemoProps) => {
  return (
    <Dialog>
      <form>
        <DialogTrigger
          render={<Button variant="outline">Open Dialog</Button>}
        />

        <DialogPopup
          from={from}
          showCloseButton={showCloseButton}
          className="sm:max-w-[425px]"
        >
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose render={<Button variant="outline">Cancel</Button>} />
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogPopup>
      </form>
    </Dialog>
  );
};
`},exampleNote:null}},docsField:`A popup that opens on top of the entire page. 主要导出：Dialog、DialogTrigger、DialogClose、DialogPopup 等。 最小用法：<Dialog />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/dialog.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-base-dialog.md。`,upstream:`https://animate-ui.com/r/components-base-dialog.json`};export{e as default};