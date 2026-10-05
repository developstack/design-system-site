var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/frames/circle-cut-frame.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/circle-cut-frame.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L1956-L1962`,usage:`<CircleCutFrame width={320} height={320} frameColor="#d4d4d4"><img src="/photo.jpg" alt="" /></CircleCutFrame>`},note:{summaryZh:null,importLine:`import { CircleCutFrame } from "@/components/vendor/opensourceui/frames/circle-cut-frame";`,usage:`<CircleCutFrame />`,exports:[{name:`CircleCutFrameProps`,kind:`type`},{name:`CircleCutFrame`,kind:`component`,propsType:`Readonly<{ children?: ReactNode; width?: string | number | undefined; height?: string | number | un…`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`width`,type:`string | number`,optional:!0},{name:`height`,type:`string | number`,optional:!0},{name:`mediaClassName`,type:`string`,optional:!0},{name:`skeleton`,type:`boolean`,optional:!0,default:`false`},{name:`frameColor`,type:`string`,optional:!0,default:`FRAME_COLOR`}],inherited:[{package:`@types/react`,count:279,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L1956-L1962`,code:`import { CircleCutFrame } from "@/components/vendor/opensourceui/frames/circle-cut-frame";

export default function Example() {
  return (
    <CircleCutFrame
      skeleton
      width={320}
      height={320}
      frameColor="#d4d4d4"
      className="max-w-none"
    />
  );
}
`},exampleNote:null}},docsField:`Ticket-style frame with circle-cut edges on all sides — defaults to white; pass width, height, fra… 主要导出：CircleCutFrame。 最小用法：<CircleCutFrame />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/frame.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-circle-cut-frame.md。`,upstream:`https://opensourceui.in/components/circle-cut-frame`};export{e as default};