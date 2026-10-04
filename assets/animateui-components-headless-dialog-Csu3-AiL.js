var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/headless/dialog.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[`@developstack/animateui-primitives-headless-dialog`],preview:{kind:`example`,module:`examples/animateui/components-headless-dialog.tsx`,export:`HeadlessDialogDemo`,example:`https://animate-ui.com/r/demo-components-headless-dialog.json`,props:{from:`top`,showCloseButton:!0}},note:{summaryZh:`对话框（基于 Headless UI 的组件）。`,importLine:`import { Dialog } from "@/components/vendor/animateui/components/headless/dialog";`,usage:`<Dialog />`,exports:[{name:`Dialog`,kind:`component`,propsType:`DialogProps<TTag>`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`as`,type:`DialogProps<TTag>["as"] & TTag`,optional:!0}],inherited:[{package:`@types/react`,count:229,names:[]},{package:`@headlessui/react`,count:10,names:[`autoFocus`,`children`,`initialFocus`,`onClose`,`open`,`refName`,`role`,`transition`,`unmount`]}]},{name:`DialogClose`,kind:`component`,propsType:`DialogCloseProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:5,names:[`autoFocus`,`children`,`disabled`,`refName`,`type`]}]},{name:`DialogPanel`,kind:`component`,propsType:`DialogPanelProps<TTag>`,inline:!1,union:!1,props:[{name:`showCloseButton`,type:`boolean`,optional:!0,default:`true`},{name:`from`,type:`DialogFlipDirection`,optional:!0},{name:`transition`,type:`Transition<any> & Transition`,optional:!0,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`as`,type:`DialogPanelProps<TTag>["as"] & TTag`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:46,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`DialogHeader`,kind:`component`,propsType:`DialogHeaderProps<TTag>`,inline:!1,union:!1,props:[],inherited:[]},{name:`DialogFooter`,kind:`component`,propsType:`DialogFooterProps<TTag>`,inline:!1,union:!1,props:[],inherited:[]},{name:`DialogTitle`,kind:`component`,propsType:`DialogTitleProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: TitleRenderPropArg) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:2,names:[`children`,`refName`]}]},{name:`DialogDescription`,kind:`component`,propsType:`DialogDescriptionProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: {}) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`ref`,`refName`]}]},{name:`DialogProps`,kind:`type`},{name:`DialogCloseProps`,kind:`type`},{name:`DialogPanelProps`,kind:`type`},{name:`DialogHeaderProps`,kind:`type`},{name:`DialogFooterProps`,kind:`type`},{name:`DialogTitleProps`,kind:`type`},{name:`DialogDescriptionProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-headless-dialog.json`,code:`import * as React from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogPanel,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  type DialogPanelProps,
} from '@/components/vendor/animateui/components/headless/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface HeadlessDialogDemoProps {
  from: DialogPanelProps['from'];
  showCloseButton: boolean;
}

export const HeadlessDialogDemo = ({
  from,
  showCloseButton,
}: HeadlessDialogDemoProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <Button variant="outline" onClick={() => setIsOpen(true)}>
        Open Dialog
      </Button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
        <DialogPanel
          from={from}
          showCloseButton={showCloseButton}
          className="sm:max-w-[425px]"
        >
          <form className="flex flex-col gap-4">
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
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogPanel>
      </Dialog>
    </div>
  );
};
`},exampleNote:null}},docsField:`A fully-managed, renderless dialog component jam-packed with accessibility and keyboard features, perfect for building… 主要导出：Dialog、DialogClose、DialogPanel、DialogHeader 等。 最小用法：<Dialog />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-headless-dialog.md。`,upstream:`https://animate-ui.com/r/components-headless-dialog.json`};export{e as default};