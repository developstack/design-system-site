var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/preview-card.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-base-preview-card`],preview:{kind:`example`,module:`examples/animateui/components-base-preview-card.tsx`,export:`BasePreviewCardDemo`,example:`https://animate-ui.com/r/demo-components-base-preview-card.json`,props:{followCursor:!1,side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`悬停预览卡片（基于 Base UI 的组件）。`,importLine:`import { PreviewCard } from "@/components/vendor/animateui/components/base/preview-card";`,usage:`<PreviewCard />`,exports:[{name:`PreviewCard`,kind:`component`,propsType:`PreviewCardProps`,inline:!1,union:!1,props:[{name:`followCursor`,type:`"x" | "y" | boolean`,optional:!0},{name:`followCursorSpringOptions`,type:`SpringOptions`,optional:!0}],inherited:[{package:`@base-ui/react`,count:9,names:[`actionsRef`,`children`,`defaultOpen`,`defaultTriggerId`,`handle`,`onOpenChange`,`onOpenChangeComplete`,`open`,`triggerId`]}]},{name:`PreviewCardTrigger`,kind:`component`,propsType:`Props<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:7,names:[`className`,`closeDelay`,`delay`,`handle`,`payload`,`render`,`style`]}]},{name:`PreviewCardPanel`,kind:`component`,propsType:`PreviewCardPanelProps`,inline:!1,union:!1,props:[{name:`align`,type:`Align`,optional:!0,default:`'center'`,from:`@base-ui/react`},{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`4`,from:`@base-ui/react`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:13,names:[`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`side`,`sticky`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`PreviewCardBackdrop`,kind:`component`,propsType:`Omit<PreviewCardBackdropProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`PreviewCardProps`,kind:`type`},{name:`PreviewCardTriggerProps`,kind:`type`},{name:`PreviewCardPanelProps`,kind:`type`},{name:`PreviewCardBackdropProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-preview-card.json`,code:`import {
  PreviewCard,
  PreviewCardTrigger,
  PreviewCardPanel,
} from '@/components/vendor/animateui/components/base/preview-card';

interface BasePreviewCardDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
  followCursor?: boolean | 'x' | 'y';
}

export const BasePreviewCardDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
  followCursor,
}: BasePreviewCardDemoProps) => {
  return (
    <PreviewCard followCursor={followCursor}>
      <PreviewCardTrigger
        render={
          <a
            className="size-12 border rounded-full overflow-hidden"
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

      <PreviewCardPanel
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        className="w-80"
      >
        <div className="flex flex-col gap-4">
          <img
            className="size-16 rounded-full overflow-hidden border"
            src="https://pbs.twimg.com/profile_images/1950218390741618688/72447Y7e_400x400.jpg"
            alt="Animate UI"
          />
          <div className="flex flex-col gap-4">
            <div>
              <div className="font-bold">Animate UI</div>
              <div className="text-sm text-muted-foreground">@animate_ui</div>
            </div>
            <div className="text-sm text-muted-foreground">
              A fully animated, open-source component distribution built with
              React, TypeScript, Tailwind CSS, and Motion.
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
      </PreviewCardPanel>
    </PreviewCard>
  );
};
`},exampleNote:null}},docsField:`A popup that appears when a lin… 主要导出：PreviewCard、PreviewCardTrigger、PreviewCardPanel、PreviewCardBackdrop。 最小用法：<PreviewCard />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/preview-card.md。属性与示例见 packages/registry/docs/vendor/animateui-components-base-preview-card.md。`,upstream:`https://animate-ui.com/r/components-base-preview-card.json`};export{e as default};