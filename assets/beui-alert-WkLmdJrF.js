var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/alert.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/alert.tsx`,export:`AlertPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/alert.preview.tsx`},note:{summaryZh:null,importLine:`import { Alert } from "@/components/vendor/beui/motion/alert";`,usage:`<Alert />`,exports:[{name:`AlertVariant`,kind:`type`},{name:`AlertState`,kind:`type`},{name:`useAlert`,doc:`Shared visibility and variant for custom alert children.`,kind:`hook`,signature:`() => AlertState`,params:[],requiredParams:0},{name:`AlertProps`,kind:`type`},{name:`Alert`,kind:`component`,propsType:`AlertProps`,inline:!1,union:!1,props:[{name:`variant`,type:`AlertVariant`,optional:!0,default:`"default"`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`true`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`returnFocusRef`,type:`RefObject<HTMLElement | null>`,optional:!0,doc:`Focus this element when closing hides the currently focused alert control.`},{name:`contentClassName`,type:`string`,optional:!0,doc:`Layout classes for the inner row, separate from the animated surface.`},{name:`role`,type:`"alert" | "status"`,optional:!0,default:`variant === "warning" || variant === "destructive" ? "alert…`,doc:`Defaults to alert for warning/destructive, and status for other variants.`}],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:58,names:[`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`,`globalTapTarget`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`AlertIconProps`,kind:`type`},{name:`AlertIcon`,kind:`component`,propsType:`AlertIconProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertContentProps`,kind:`type`},{name:`AlertContent`,kind:`component`,propsType:`AlertContentProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertTitleProps`,kind:`type`},{name:`AlertTitle`,kind:`component`,propsType:`AlertTitleProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertDescriptionProps`,kind:`type`},{name:`AlertDescription`,kind:`component`,propsType:`AlertDescriptionProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertActionProps`,kind:`type`},{name:`AlertAction`,doc:`Compose buttons or links here; this part never creates a nested button.`,kind:`component`,propsType:`AlertActionProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AlertCloseProps`,kind:`type`},{name:`AlertClose`,kind:`component`,propsType:`AlertCloseProps`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/alert.preview.tsx`,code:`"use client";

import { useRef, useState } from "react";
import { Alert, AlertAction, AlertClose, AlertContent, AlertDescription, AlertIcon, AlertTitle } from "@/components/vendor/beui/motion/alert";
import { Button } from "@/components/vendor/beui/motion/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/vendor/beui/motion/tabs";

const messages = {
  info: { label: "Info", title: "A little heads up", description: "Your changes are saved automatically as you work." },
  success: { label: "Success", title: "All set", description: "Your changes have been saved." },
  warning: { label: "Warning", title: "Almost at the limit", description: "You're getting close to your storage limit. Free up some space before uploading more files." },
  destructive: { label: "Error", title: "Something went wrong", description: "We couldn't save your changes. Give it another try." },
} as const;

type PreviewVariant = keyof typeof messages;

export function AlertPreview() {
  const [variant, setVariant] = useState<PreviewVariant>("info");
  const [open, setOpen] = useState(true);
  const showRef = useRef<HTMLButtonElement>(null);
  const message = messages[variant];

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <Tabs value={variant} onValueChange={(value) => { setVariant(value as PreviewVariant); setOpen(true); }} className="w-full">
        <TabsList aria-label="Alert variant" className="bg-muted">
          {Object.entries(messages).map(([value, item]) => <TabsTrigger key={value} value={value} className="px-3 py-1.5 text-xs">{item.label}</TabsTrigger>)}
        </TabsList>
      </Tabs>
      <Alert variant={variant} open={open} onOpenChange={setOpen} returnFocusRef={showRef}>
        <AlertIcon />
        <AlertContent>
          <AlertTitle>{message.title}</AlertTitle>
          <AlertDescription>{message.description}</AlertDescription>
          {variant === "destructive" && (
            <AlertAction>
              <Button size="sm" variant="outline" onClick={() => setVariant("success")}>Try again</Button>
            </AlertAction>
          )}
        </AlertContent>
        <AlertClose />
      </Alert>
      <Button ref={showRef} variant="ghost" size="sm" onClick={() => setOpen(true)} disabled={open}>Show alert</Button>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable feedback with smooth transitions. 主要导出：Alert、useAlert、AlertIcon、AlertContent 等。 最小用法：<Alert />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/alert.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-alert.md。`,upstream:`https://beui.dev/r/alert.json`};export{e as default};