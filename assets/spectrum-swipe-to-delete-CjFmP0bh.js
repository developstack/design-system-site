var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/swipe-to-delete.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/swipe-to-delete.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/swipe-to-delete-demo.json`},note:{summaryZh:null,importLine:`import { SwipeToDelete } from "@/components/vendor/spectrum/swipe-to-delete";`,usage:`<SwipeToDelete onDelete={…}>…</SwipeToDelete>`,exports:[{name:`SwipeToDeleteProps`,kind:`type`},{name:`SwipeToDelete`,kind:`component`,propsType:`SwipeToDeleteProps`,inline:!1,union:!1,props:[{name:`onDelete`,type:`() => void`,optional:!1,doc:`Fires once the collapse animation finishes; remove the item here`},{name:`children`,type:`ReactNode`,optional:!1,doc:`Row content rendered on the draggable surface`},{name:`label`,type:`string`,optional:!0,default:`'item'`,doc:`Accessible name of the row; also used for the delete button label. Default "item"`},{name:`actionWidth`,type:`number`,optional:!0,default:`96`,doc:`Width in pixels of the revealed delete zone. Default 96`},{name:`threshold`,type:`number`,optional:!0,default:`0.6`,doc:`Fraction of actionWidth the drag must pass to commit. Default 0.6`},{name:`revealOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Nudge the row on hover/focus to preview the delete zone (pointer devices). Default true`},{name:`hoverPeek`,type:`number`,optional:!0,default:`56`,doc:`How far in pixels the row nudges left for the hover preview. Default 56`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables dragging, the delete zone and keyboard deletion`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged with the default wrapper styles`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/swipe-to-delete-demo.json`,code:`"use client"

import React, { useState } from "react"
import { SwipeToDelete } from "@/components/vendor/spectrum/swipe-to-delete"

const EMAILS = [
  {
    id: 1,
    sender: "Ava Chen",
    initials: "AC",
    preview: "Design review notes — the new empty states look great",
    time: "9:41 AM",
  },
  {
    id: 2,
    sender: "Marcus Reid",
    initials: "MR",
    preview: "Re: Q3 roadmap — can we move the sync to Thursday?",
    time: "8:17 AM",
  },
  {
    id: 3,
    sender: "Priya Nair",
    initials: "PN",
    preview: "Your invoice for June is ready to download",
    time: "Yesterday",
  },
]

export default function SwipeToDeleteDemo() {
  const [emails, setEmails] = useState(EMAILS)

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-sm">
        {emails.map((email) => (
          <SwipeToDelete
            key={email.id}
            label={\`email from \${email.sender}\`}
            className="mb-2 last:mb-0"
            onDelete={() =>
              setEmails((current) =>
                current.filter((item) => item.id !== email.id),
              )
            }
          >
            <div className="flex items-center gap-3 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                {email.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="flex items-baseline justify-between gap-2">
                  <span className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {email.sender}
                  </span>
                  <span className="shrink-0 text-xs text-neutral-500 dark:text-neutral-400">
                    {email.time}
                  </span>
                </span>
                <span className="mt-0.5 block truncate text-xs text-neutral-500 dark:text-neutral-400">
                  {email.preview}
                </span>
              </span>
            </div>
          </SwipeToDelete>
        ))}

        {emails.length === 0 && (
          <div className="flex justify-center py-6">
            <button
              type="button"
              onClick={() => setEmails(EMAILS)}
              className="text-sm font-medium text-neutral-600 underline-offset-4 hover:underline dark:text-neutral-300"
            >
              Reset inbox
            </button>
          </div>
        )}
      </div>

      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Drag a row left to delete — or hover to peek, then click the zone
      </p>
    </div>
  )
}
`},exampleNote:null}},docsField:`An iOS-style swipeable list-item wrapper that reveals a delete action on drag, pops the icon at the commit threshold, and collapses the r… 主要导出：SwipeToDelete。 最小用法：<SwipeToDelete onDelete={…}>…</SwipeToDelete>。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/spectrum-swipe-to-delete.md。`,upstream:`https://ui.spectrumhq.in/r/swipe-to-delete.json`};export{e as default};