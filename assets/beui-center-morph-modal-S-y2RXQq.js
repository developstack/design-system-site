var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/center-morph-modal.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/center-morph-modal.tsx`,export:`CenterMorphModalPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/center-morph-modal.preview.tsx`},note:{summaryZh:`模态框（动效组件）。`,importLine:`import { CenterMorphModal } from "@/components/vendor/beui/motion/center-morph-modal";`,usage:`<CenterMorphModal>…</CenterMorphModal>`,exports:[{name:`CenterMorphModalProps`,kind:`type`},{name:`CenterMorphModal`,doc:`A modal whose full-size surface unfolds outward from its exact center. Supports controlled and uncontrolled state through composable primitives.`,kind:`component`,propsType:`CenterMorphModalProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`open`,type:`boolean`,optional:!0,doc:`Controlled open state.`},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`,doc:`Initial state when used uncontrolled.`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0}],inherited:[]},{name:`CenterMorphModalTriggerProps`,kind:`type`},{name:`CenterMorphModalTrigger`,doc:`Wraps one interactive element and opens or closes the modal.`,kind:`component`,propsType:`CenterMorphModalTriggerProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1}],inherited:[]},{name:`CenterMorphModalCloseProps`,kind:`type`},{name:`CenterMorphModalClose`,doc:`Wraps one interactive element and closes the modal.`,kind:`component`,propsType:`CenterMorphModalCloseProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1}],inherited:[]},{name:`CenterMorphModalContentProps`,kind:`type`},{name:`CenterMorphModalContent`,kind:`component`,propsType:`CenterMorphModalContentProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`ariaLabel`,type:`string`,optional:!1,doc:`Accessible name announced by screen readers.`},{name:`ariaDescribedBy`,type:`string`,optional:!0,doc:`Optional id of descriptive content inside the modal.`},{name:`dismissible`,type:`boolean`,optional:!0,default:`true`,doc:`Close on Escape or backdrop press. Default true.`},{name:`showCloseButton`,type:`boolean`,optional:!0,default:`true`,doc:`Render the close control inside the panel's top-right corner. Default true.`},{name:`closeButtonLabel`,type:`string`,optional:!0,default:`"Close modal"`},{name:`className`,type:`string`,optional:!0},{name:`backdropClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/center-morph-modal.preview.tsx`,code:`"use client";

import { ArrowUpRight, Check } from "lucide-react";
import {
  CenterMorphModal,
  CenterMorphModalContent,
  CenterMorphModalTrigger,
} from "@/components/vendor/beui/motion/center-morph-modal";

export function CenterMorphModalPreview() {
  return (
    <div className="flex min-h-[420px] w-full items-center justify-center">
      <CenterMorphModal>
        <CenterMorphModalTrigger>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full bg-foreground px-5 text-sm font-medium text-background press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Open modal
          </button>
        </CenterMorphModalTrigger>

        <CenterMorphModalContent
          ariaLabel="beUI Pro"
          ariaDescribedBy="center-morph-pro-description"
        >
          <div className="p-7 sm:p-8">
            <p className="text-sm font-medium text-muted-foreground">
              beUI Pro
            </p>
            <h2 className="mt-5 max-w-xs pr-8 text-2xl font-medium tracking-tight text-foreground">
              Ship the whole experience.
            </h2>
            <p
              id="center-morph-pro-description"
              className="mt-3 text-sm leading-relaxed text-muted-foreground"
            >
              Go beyond individual components with premium animated sections
              and complete Next.js templates.
            </p>

            <div className="mt-7 space-y-3 border-y border-border py-5">
              {[
                "Premium animated sections",
                "Complete Next.js templates",
                "Editable source and private registry",
              ].map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-foreground"
                >
                  <Check
                    className="h-4 w-4 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://pro.beui.dev/?utm_source=beui&utm_medium=component_preview&utm_campaign=center_morph_modal"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background press focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Explore beUI Pro
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </CenterMorphModalContent>
      </CenterMorphModal>
    </div>
  );
}
`},exampleNote:null}},docsField:`A compos… 主要导出：CenterMorphModal、CenterMorphModalTrigger、CenterMorphModalClose、CenterMorphModalContent。 最小用法：<CenterMorphModal>…</CenterMorphModal>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/dialog.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-center-morph-modal.md。`,upstream:`https://beui.dev/r/center-morph-modal.json`};export{e as default};