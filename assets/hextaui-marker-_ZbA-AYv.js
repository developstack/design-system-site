var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/marker.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/marker.tsx`,export:`MarkerDemo`,example:`https://hextaui.com/r/marker-demo.json`},note:{summaryZh:null,importLine:`import { Marker } from "@/components/vendor/hextaui/ui/marker";`,usage:`<Marker />`,exports:[{name:`Marker`,kind:`component`,propsType:`MarkerProps`,inline:!1,union:!1,props:[{name:`variant`,type:`MarkerVariant`,optional:!0,default:`"default"`},{name:`sticky`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`MarkerContent`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`MarkerIcon`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`MarkerTime`,kind:`component`,propsType:`MarkerTimeProps`,inline:!1,union:!1,props:[{name:`date`,type:`string | number | Date`,optional:!1},{name:`locale`,type:`LocalesArgument`,optional:!0,default:`"en-US"`},{name:`format`,type:`(date: Date) => ReactNode`,optional:!0}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`markerVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; separator: string; border: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`MarkerProps`,kind:`type`},{name:`MarkerTimeProps`,kind:`type`},{name:`MarkerVariant`,kind:`type`}],example:{url:`https://hextaui.com/r/marker-demo.json`,code:`"use client"

import * as React from "react"
import {
  IconGitMerge,
  IconPencil,
  IconPin,
  IconUserPlus,
} from "@tabler/icons-react"

import { Bubble, BubbleContent, BubbleGroup } from "@/components/vendor/hextaui/ui/bubble"
import {
  Marker,
  MarkerContent,
  MarkerIcon,
  MarkerTime,
} from "@/components/vendor/hextaui/ui/marker"

const day = 24 * 60 * 60 * 1000

export function MarkerDemo() {
  const threadRef = React.useRef<HTMLDivElement>(null)

  React.useLayoutEffect(() => {
    const thread = threadRef.current
    if (thread) {
      thread.scrollTop = thread.scrollHeight
    }
  }, [])

  return (
    <div
      ref={threadRef}
      tabIndex={0}
      role="region"
      aria-label="Conversation"
      className="h-96 w-full max-w-md overflow-y-auto overscroll-none rounded-xl border px-4 outline-none focus-visible:ring-3 focus-visible:ring-focus-ring focus-visible:outline-hidden"
    >
      <section className="flex flex-col gap-3 pt-4 pb-3">
        <Marker variant="separator" sticky>
          <MarkerContent>
            <MarkerTime date={new Date(Date.now() - 2 * day)} />
          </MarkerContent>
        </Marker>
        <Marker className="justify-center">
          <MarkerIcon>
            <IconUserPlus />
          </MarkerIcon>
          <MarkerContent>Mira added Jun and Sol</MarkerContent>
        </Marker>
        <Bubble variant="secondary">
          <BubbleContent>
            Kicking off the marker component. Dates, events, the works.
          </BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Can the dates stick while you scroll?</BubbleContent>
        </Bubble>
      </section>
      <section className="flex flex-col gap-3 py-3">
        <Marker variant="separator" sticky>
          <MarkerContent>
            <MarkerTime date={new Date(Date.now() - day)} />
          </MarkerContent>
        </Marker>
        <Marker className="justify-center">
          <MarkerIcon>
            <IconPencil />
          </MarkerIcon>
          <MarkerContent>Jun renamed the thread to “Marker”</MarkerContent>
        </Marker>
        <Bubble variant="secondary">
          <BubbleContent>
            They do now. Scroll up and the date turns into a pill.
          </BubbleContent>
        </Bubble>
        <Marker className="justify-center">
          <MarkerIcon>
            <IconPin />
          </MarkerIcon>
          <MarkerContent>Sol pinned a message</MarkerContent>
        </Marker>
      </section>
      <section className="flex flex-col gap-3 pt-3 pb-4">
        <Marker variant="separator" sticky>
          <MarkerContent>
            <MarkerTime date={new Date()} />
          </MarkerContent>
        </Marker>
        <BubbleGroup>
          <Bubble align="end">
            <BubbleContent>Docs are written.</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>
              Screenshots look right in dark mode too.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
        <Marker className="justify-center">
          <MarkerIcon>
            <IconGitMerge className="text-success" />
          </MarkerIcon>
          <MarkerContent>
            Sol merged <a href="#">#482</a> into main
          </MarkerContent>
        </Marker>
        <Marker variant="separator">
          <MarkerContent>New messages</MarkerContent>
        </Marker>
        <Bubble variant="secondary">
          <BubbleContent>Shipping it 🎉</BubbleContent>
        </Bubble>
      </section>
    </div>
  )
}
`},exampleNote:null}},docsField:`Quiet notes between content, like date dividers and system events, with sticky dates an… 主要导出：Marker、MarkerContent、MarkerIcon、MarkerTime 等。 最小用法：<Marker />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/marker.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-marker.md。`,upstream:`https://hextaui.com/r/marker.json`};export{e as default};