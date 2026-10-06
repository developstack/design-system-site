var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/recent-activity.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/recent-activity.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/recent-activity-demo.json`},note:{summaryZh:null,importLine:`import { RecentActivity } from "@/components/vendor/spectrum/recent-activity";`,usage:`<RecentActivity />`,exports:[{name:`ActivityItem`,kind:`type`},{name:`RecentActivityProps`,kind:`type`},{name:`RecentActivity`,kind:`component`,propsType:`RecentActivityProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!0,default:`'Recent Activity'`},{name:`titleIcon`,type:`ReactNode`,optional:!0},{name:`items`,type:`ActivityItem[]`,optional:!0,default:`DEFAULT_ITEMS`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/recent-activity-demo.json`,code:`"use client"

import { RecentActivity } from "@/components/vendor/spectrum/recent-activity"

export default function RecentActivityDemo() {
  return (
    <div className="flex w-full justify-center py-8">
      <div className="w-full max-w-[512px]">
        <RecentActivity />
      </div>
    </div>
  )
}
`},exampleNote:null}},docsField:`An activity feed card that lists agent runs with duration and recency chips. 主要导出：RecentActivity。 最小用法：<RecentActivity />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/feed.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-recent-activity.md。`,upstream:`https://ui.spectrumhq.in/r/recent-activity.json`};export{e as default};