var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/preview-card.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-preview-card.tsx`,export:`PreviewCardDemo`,example:`https://animate-ui.com/r/demo-primitives-base-preview-card.json`,props:{followCursor:!1,side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`悬停预览卡片（基于 Base UI 的原语）。`,importLine:`import { PreviewCard } from "@/components/vendor/animateui/primitives/base/preview-card";`,usage:`<PreviewCard />`,exports:[{name:`PreviewCard`,kind:`component`,propsType:`PreviewCardProps`,inline:!1,union:!1,props:[{name:`followCursor`,type:`"x" | "y" | boolean`,optional:!0,default:`false`},{name:`followCursorSpringOptions`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 200, damping: 17 }`}],inherited:[{package:`@base-ui/react`,count:9,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`PreviewCardTrigger`,kind:`component`,propsType:`Props<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`closeDelay`,`delay`,`handle`,`payload`,`render`,`style`]}]},{name:`PreviewCardPortal`,kind:`component`,propsType:`PreviewCardPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`PreviewCardPositioner`,kind:`component`,propsType:`Omit<PreviewCardPositionerProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:15,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`side`]}]},{name:`PreviewCardPopup`,kind:`component`,propsType:`PreviewCardPopupProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]},{package:`@base-ui/react`,count:2,names:[`className`,`style`]}]},{name:`PreviewCardBackdrop`,kind:`component`,propsType:`Omit<PreviewCardBackdropProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PreviewCardArrow`,kind:`component`,propsType:`Omit<PreviewCardArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`usePreviewCard`,kind:`hook`,signature:`() => PreviewCardContextType`,params:[],requiredParams:0},{name:`PreviewCardProps`,kind:`type`},{name:`PreviewCardTriggerProps`,kind:`type`},{name:`PreviewCardPortalProps`,kind:`type`},{name:`PreviewCardPositionerProps`,kind:`type`},{name:`PreviewCardPopupProps`,kind:`type`},{name:`PreviewCardBackdropProps`,kind:`type`},{name:`PreviewCardArrowProps`,kind:`type`},{name:`PreviewCardContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-preview-card.json`,code:`import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPortal,
  PreviewCardPositioner,
  PreviewCardPopup,
} from '@/components/vendor/animateui/primitives/base/preview-card';

interface PreviewCardDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  followCursor?: boolean | 'x' | 'y';
}

export const PreviewCardDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
  followCursor,
}: PreviewCardDemoProps) => {
  return (
    <PreviewCard followCursor={followCursor}>
      <PreviewCardTrigger
        render={
          <a
            className="size-12 border"
            href="https://twitter.com/animate_ui"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg"
              alt="Animate UI"
            />
          </a>
        }
      />
      <PreviewCardPortal>
        <PreviewCardPositioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className="z-50"
        >
          <PreviewCardPopup className="w-80 bg-background border p-4">
            <div className="flex flex-col gap-4">
              <img
                className="size-16 rounded-full overflow-hidden border"
                src="https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg"
                alt="Animate UI"
              />
              <div className="flex flex-col gap-4">
                <div>
                  <div className="font-bold">Animate UI</div>
                  <div className="text-sm text-muted-foreground">
                    @animate_ui
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">
                  A fully animated, open-source component distribution built
                  with React, TypeScript, Tailwind CSS, and Motion.
                </div>
                <div className="flex gap-4">
                  <div className="flex gap-1 text-sm items-center">
                    <div className="font-bold">0</div>{' '}
                    <div className="text-muted-foreground">Following</div>
                  </div>
                  <div className="flex gap-1 text-sm items-center">
                    <div className="font-bold">2,900</div>{' '}
                    <div className="text-muted-foreground">Followers</div>
                  </div>
                </div>
              </div>
            </div>
          </PreviewCardPopup>
        </PreviewCardPositioner>
      </PreviewCardPortal>
    </PreviewCard>
  );
};
`},exampleNote:null}},docsField:`A popup that appears when a link is hovered, showing a preview for sighted users. 主要导出：PreviewCard、PreviewCardTrigger、PreviewCardPortal、PreviewCardPositioner 等。 最小用法：<PreviewCard />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-preview-card.md。`,upstream:`https://animate-ui.com/r/primitives-base-preview-card.json`};export{e as default};