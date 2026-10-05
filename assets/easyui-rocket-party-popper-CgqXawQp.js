var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/rocket-party-popper.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/rocket-party-popper.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/rocket-party-popper.tsx`},note:{summaryZh:null,importLine:`import { RocketPartyPopper } from "@/components/vendor/easyui/ui/rocket-party-popper";`,usage:`<RocketPartyPopper />`,exports:[{name:`RocketPartyPopperProps`,kind:`type`},{name:`RocketPartyPopper`,kind:`component`,propsType:`RocketPartyPopperProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0},{name:`description`,type:`string`,optional:!0},{name:`metric`,type:`string`,optional:!0},{name:`triggerLabel`,type:`string`,optional:!0,default:`'Launch celebration'`},{name:`confettiCount`,type:`number`,optional:!0,default:`50`},{name:`defaultLaunched`,type:`boolean`,optional:!0,default:`false`},{name:`onLaunch`,type:`() => void`,optional:!0},{name:`onReset`,type:`() => void`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`default`,local:`RocketPartyPopper`,kind:`component`,propsType:`RocketPartyPopperProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0},{name:`description`,type:`string`,optional:!0},{name:`metric`,type:`string`,optional:!0},{name:`triggerLabel`,type:`string`,optional:!0,default:`'Launch celebration'`},{name:`confettiCount`,type:`number`,optional:!0,default:`50`},{name:`defaultLaunched`,type:`boolean`,optional:!0,default:`false`},{name:`onLaunch`,type:`() => void`,optional:!0},{name:`onReset`,type:`() => void`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/rocket-party-popper.tsx`,code:`import { RocketPartyPopper } from '@/components/vendor/easyui/ui/rocket-party-popper';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 w-full flex items-center justify-center pointer-events-none overflow-hidden">
            <div className="scale-[0.72] origin-center shrink-0 flex items-center justify-center">
              <RocketPartyPopper
                defaultLaunched={hovered}
                title="Launch Complete"
                description="Milestone celebrated."
                metric="59 Components"
              />
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`An interactive black rocket launch that blasts into a colorful party popper confetti shower to reveal celebratory milestones. 主要导出：RocketPartyPopper。 最小用法：<RocketPartyPopper />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-rocket-party-popper.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#rocket-party-popper`};export{e as default};