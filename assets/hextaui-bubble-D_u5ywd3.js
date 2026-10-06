var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/bubble.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/bubble.tsx`,export:`BubbleDemo`,example:`https://hextaui.com/r/bubble-demo.json`},note:{summaryZh:null,importLine:`import { Bubble } from "@/components/vendor/hextaui/ui/bubble";`,usage:`<Bubble />`,exports:[{name:`Bubble`,kind:`component`,propsType:`BubbleProps`,inline:!1,union:!1,props:[{name:`variant`,type:`BubbleVariant`,optional:!0,default:`"default"`},{name:`align`,type:`BubbleAlign`,optional:!0},{name:`shape`,type:`BubbleShape`,optional:!0}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BubbleAlignContext`,kind:`component`,propsType:`ProviderProps<"end" | "start" | undefined>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:2,names:[]}]},{name:`BubbleContent`,kind:`component`,propsType:`ComponentProps<"div", {}, HTMLProps>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BubbleGroup`,kind:`component`,propsType:`BubbleGroupProps`,inline:!1,union:!1,props:[{name:`shape`,type:`BubbleShape`,optional:!0}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`BubbleReactions`,kind:`component`,propsType:`BubbleReactionsProps`,inline:!1,union:!1,props:[{name:`side`,type:`NonNullable<"bottom" | "top" | null | undefined>`,optional:!0,default:`"bottom"`},{name:`align`,type:`NonNullable<"end" | "start" | null | undefined>`,optional:!0,default:`"end"`}],inherited:[{package:`@types/react`,count:280,names:[]},{package:`@base-ui/react`,count:1,names:[`render`]}]},{name:`bubbleReactionsVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ side: { top: string; bottom: string; }; align: { start: string; end: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0},{name:`bubbleVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; secondary: string; muted: string; tinted: string; outline: string; ghost: string; destructive: string; }; align: { start: string; end: string; }…`,params:[`props`],requiredParams:0},{name:`BubbleAlign`,kind:`type`},{name:`BubbleGroupProps`,kind:`type`},{name:`BubbleProps`,kind:`type`},{name:`BubbleReactionsProps`,kind:`type`},{name:`BubbleShape`,kind:`type`},{name:`BubbleVariant`,kind:`type`}],example:{url:`https://hextaui.com/r/bubble-demo.json`,code:`import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
} from "@/components/vendor/hextaui/ui/bubble"

export function BubbleDemo() {
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Bubble variant="secondary">
        <BubbleContent>
          I checked the registry output and removed the stale route.
        </BubbleContent>
        <BubbleReactions role="img" aria-label="Reactions: thumbs up">
          <span>👍</span>
        </BubbleReactions>
      </Bubble>
      <BubbleGroup>
        <Bubble align="end">
          <BubbleContent>Nice, thanks!</BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>Did the preview deploy pick it up?</BubbleContent>
        </Bubble>
      </BubbleGroup>
      <Bubble variant="ghost">
        <BubbleContent>
          Yes. The preview at build 1482 serves the new route, and the old one
          now returns a 404 as expected.
        </BubbleContent>
      </Bubble>
    </div>
  )
}
`},exampleNote:null}},docsField:`Chat message bubbles with variants, grouped corners, reactions and room for interactiv… 主要导出：Bubble、BubbleAlignContext、BubbleContent、BubbleGroup 等。 最小用法：<Bubble />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/bubble.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-bubble.md。`,upstream:`https://hextaui.com/r/bubble.json`};export{e as default};