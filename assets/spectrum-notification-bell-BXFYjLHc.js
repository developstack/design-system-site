var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/notification-bell.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/notification-bell.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/notification-bell-demo.json`},note:{summaryZh:null,importLine:`import { NotificationBell } from "@/components/vendor/spectrum/notification-bell";`,usage:`<NotificationBell />`,exports:[{name:`NotificationBellProps`,kind:`type`},{name:`NotificationBell`,kind:`component`,propsType:`NotificationBellProps`,inline:!1,union:!1,props:[{name:`count`,type:`number`,optional:!0,default:`0`,doc:`Number of unread notifications. Default 0`},{name:`max`,type:`number`,optional:!0,default:`99`,doc:`Counts above this render as "max+". Default 99`},{name:`dot`,type:`boolean`,optional:!0,default:`false`,doc:`Show a small pinging dot instead of the numeric badge. Default false`},{name:`ringOnMount`,type:`boolean`,optional:!0,default:`false`,doc:`Play the ring swing once when the component mounts. Default false`},{name:`onClick`,type:`MouseEventHandler<HTMLButtonElement>`,optional:!0,doc:`Click handler for the bell button`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the button. Default "md"`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/notification-bell-demo.json`,code:`"use client"

import React, { useState } from "react"
import { NotificationBell } from "@/components/vendor/spectrum/notification-bell"

export default function NotificationBellDemo() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <NotificationBell count={count} />
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setCount((current) => current + 1)}
          className="h-8 rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Send notification
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="h-8 rounded-full border border-neutral-200 bg-white px-3 text-xs font-medium text-neutral-600 transition-colors hover:bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          Mark all read
        </button>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Send a notification — the bell swings and the badge springs in with a
        rolling count
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`A bell icon button with a ring-shake swing, springy unread badge with rolling odometer count, and a pinging dot mode. 主要导出：NotificationBell。 最小用法：<NotificationBell />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/spectrum-notification-bell.md。`,upstream:`https://ui.spectrumhq.in/r/notification-bell.json`};export{e as default};