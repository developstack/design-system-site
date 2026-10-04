var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/preview-link-card.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-base-preview-card`],preview:{kind:`example`,module:`examples/animateui/primitives-base-preview-link-card.tsx`,export:`BasePreviewLinkCardDemo`,example:`https://animate-ui.com/r/demo-primitives-base-preview-link-card.json`,props:{followCursor:!1,href:`https://animate-ui.com/docs`,side:`top`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`悬停预览卡片（基于 Base UI 的原语）。`,importLine:`import { PreviewLinkCard } from "@/components/vendor/animateui/primitives/base/preview-link-card";`,usage:`<PreviewLinkCard href={…} />`,exports:[{name:`PreviewLinkCard`,kind:`component`,propsType:`PreviewLinkCardProps`,inline:!1,union:!1,props:[{name:`href`,type:`string`,optional:!1},{name:`src`,type:`string`,optional:!0},{name:`width`,type:`number`,optional:!0,default:`240`},{name:`height`,type:`number`,optional:!0,default:`135`},{name:`deviceScaleFactor`,type:`number`,optional:!0,default:`1`},{name:`colorScheme`,type:`"dark" | "light"`,optional:!0,default:`'light'`},{name:`followCursor`,type:`"x" | "y" | boolean`,optional:!0},{name:`followCursorSpringOptions`,type:`SpringOptions`,optional:!0}],inherited:[{package:`@base-ui/react`,count:9,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`PreviewLinkCardTrigger`,kind:`component`,propsType:`PreviewLinkCardTriggerProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:286,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`closeDelay`,`delay`,`handle`,`payload`,`render`,`style`]}]},{name:`PreviewLinkCardPortal`,kind:`component`,propsType:`PreviewCardPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`PreviewLinkCardPositioner`,kind:`component`,propsType:`Omit<PreviewCardPositionerProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[{name:`align`,type:`Align`,optional:!0,default:`'center'`,from:`@base-ui/react`},{name:`side`,type:`Side`,optional:!0,default:`'top'`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`10`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:12,names:[`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`sticky`,`style`]}]},{name:`PreviewLinkCardPopup`,kind:`component`,propsType:`PreviewLinkCardPopupProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:286,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:2,names:[`className`,`style`]}]},{name:`PreviewLinkCardImage`,kind:`component`,propsType:`PreviewLinkCardImageProps`,inline:!1,union:!1,props:[{name:`alt`,type:`string`,optional:!0,default:`'preview image'`,from:`@types/react`}],inherited:[{package:`@types/react`,count:288,names:[]}]},{name:`PreviewLinkCardBackdrop`,kind:`component`,propsType:`Omit<PreviewCardBackdropProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PreviewLinkCardArrow`,kind:`component`,propsType:`Omit<PreviewCardArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`usePreviewLinkCard`,kind:`hook`,signature:`() => PreviewLinkCardContextType`,params:[],requiredParams:0},{name:`PreviewLinkCardProps`,kind:`type`},{name:`PreviewLinkCardTriggerProps`,kind:`type`},{name:`PreviewLinkCardPortalProps`,kind:`type`},{name:`PreviewLinkCardPositionerProps`,kind:`type`},{name:`PreviewLinkCardPopupProps`,kind:`type`},{name:`PreviewLinkCardImageProps`,kind:`type`},{name:`PreviewLinkCardBackdropProps`,kind:`type`},{name:`PreviewLinkCardArrowProps`,kind:`type`},{name:`PreviewLinkCardContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-preview-link-card.json`,code:`import {
  PreviewLinkCard,
  PreviewLinkCardImage,
  PreviewLinkCardPortal,
  PreviewLinkCardTrigger,
  PreviewLinkCardPositioner,
  PreviewLinkCardPopup,
} from '@/components/vendor/animateui/primitives/base/preview-link-card';

interface BasePreviewLinkCardDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  followCursor?: boolean | 'x' | 'y';
  href: string;
  gravity?: number | false;
}

export const BasePreviewLinkCardDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
  followCursor,
  href,
}: BasePreviewLinkCardDemoProps) => {
  return (
    <p className="text-muted-foreground">
      Read the{' '}
      <PreviewLinkCard href={href} followCursor={followCursor}>
        <PreviewLinkCardTrigger
          target="_blank"
          className="underline text-foreground"
        >
          Animate UI Docs
        </PreviewLinkCardTrigger>
        <PreviewLinkCardPortal>
          <PreviewLinkCardPositioner
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            className="z-50"
          >
            <PreviewLinkCardPopup className="border" target="_blank">
              <PreviewLinkCardImage alt="Animate UI Docs" />
            </PreviewLinkCardPopup>
          </PreviewLinkCardPositioner>
        </PreviewLinkCardPortal>
      </PreviewLinkCard>{' '}
      — hover to preview, click to dive in.
    </p>
  );
};
`},exampleNote:null}},docsField:`Displays a preview image of… 主要导出：PreviewLinkCard、PreviewLinkCardTrigger、PreviewLinkCardPortal 等。 最小用法：<PreviewLinkCard href={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/preview-card.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-preview-link-card.md。`,upstream:`https://animate-ui.com/r/primitives-base-preview-link-card.json`};export{e as default};