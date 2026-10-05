var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/profile-card.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/profile-card.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/profile-card.tsx`},note:{summaryZh:`卡片（动效组件）。`,importLine:`import { ProfileCard } from "@/components/vendor/easyui/ui/profile-card";`,usage:`<ProfileCard />`,exports:[{name:`ProfileCardProps`,kind:`type`},{name:`ProfileCard`,kind:`component`,propsType:`ProfileCardProps`,inline:!1,union:!1,props:[{name:`name`,type:`string`,optional:!0,default:`'Suraj'`,doc:`Display name shown in the detail panel header.`},{name:`username`,type:`string`,optional:!0,default:`'@surajmaurya_m'`,doc:`Handle rendered as the small caption under the name.`},{name:`description`,type:`string`,optional:!0,default:`'Building EasyUI. Engineer.'`,doc:`Biographical text shown under the name.`},{name:`followers`,type:`string`,optional:!0,default:`'200K'`,doc:`Pre-formatted follower count (e.g. "24,3K").`},{name:`posts`,type:`string`,optional:!0,default:`'72'`,doc:`Pre-formatted post count (e.g. "72").`},{name:`website`,type:`string`,optional:!0,default:`'easyui.site'`,doc:`Website domain (e.g. "jether.com").`},{name:`actionLabel`,type:`string`,optional:!0,default:`'Follow'`,doc:`Label for the primary action button.`},{name:`onAction`,type:`() => void`,optional:!0,doc:`Optional click handler for the action button.`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`default`,local:`ProfileCard`,kind:`component`,propsType:`ProfileCardProps`,inline:!1,union:!1,props:[{name:`name`,type:`string`,optional:!0,default:`'Suraj'`,doc:`Display name shown in the detail panel header.`},{name:`username`,type:`string`,optional:!0,default:`'@surajmaurya_m'`,doc:`Handle rendered as the small caption under the name.`},{name:`description`,type:`string`,optional:!0,default:`'Building EasyUI. Engineer.'`,doc:`Biographical text shown under the name.`},{name:`followers`,type:`string`,optional:!0,default:`'200K'`,doc:`Pre-formatted follower count (e.g. "24,3K").`},{name:`posts`,type:`string`,optional:!0,default:`'72'`,doc:`Pre-formatted post count (e.g. "72").`},{name:`website`,type:`string`,optional:!0,default:`'easyui.site'`,doc:`Website domain (e.g. "jether.com").`},{name:`actionLabel`,type:`string`,optional:!0,default:`'Follow'`,doc:`Label for the primary action button.`},{name:`onAction`,type:`() => void`,optional:!0,doc:`Optional click handler for the action button.`},{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/profile-card.tsx`,code:`import { ProfileCard } from '@/components/vendor/easyui/ui/profile-card';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 w-full flex items-center justify-center p-2 pointer-events-none overflow-hidden">
            {/* Card is rendered at its natural 586×~540 size and
                visually scaled to fit the card slot — so all text
                and absolute-positioned content scale together.
                Scale 0.36 → 211px wide × 194px tall, fills the
                slot without overflow. */}
            <div className="w-[230px] h-[200px] overflow-hidden flex items-center justify-center">
              <div
                className="origin-center shrink-0"
                style={{ width: 586, transform: 'scale(0.36)' }}
              >
                <ProfileCard
                  name="Suraj"
                  username="@surajmaurya_m"
                  description="Building EasyUI. Engineer."
                  followers="200K"
                  posts="72"
                  website="easyui.site"
                />
              </div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A premium dark social profile card with a painted blue cover-art panel, action row, and a detail panel with avatar, ve… 主要导出：ProfileCard。 最小用法：<ProfileCard />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-profile-card.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#profile-card`};export{e as default};