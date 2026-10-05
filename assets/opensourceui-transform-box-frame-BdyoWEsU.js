var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/frames/transform-box-frame.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/transform-box-frame.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L1877-L1884`,usage:`<TransformBoxFrame width={320} height={320} lineColor="#737373" handleColor="#171717"><img src="/photo.jpg" alt="" /></TransformBoxFrame>`},note:{summaryZh:null,importLine:`import { TransformBoxFrame } from "@/components/vendor/opensourceui/frames/transform-box-frame";`,usage:`<TransformBoxFrame />`,exports:[{name:`TransformBoxFrameProps`,kind:`type`},{name:`TransformBoxFrame`,kind:`component`,propsType:`Readonly<{ children?: ReactNode; width?: string | number | undefined; height?: string | number | un…`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`width`,type:`string | number`,optional:!0},{name:`height`,type:`string | number`,optional:!0},{name:`color`,type:`string`,optional:!0},{name:`lineColor`,type:`string`,optional:!0},{name:`handleColor`,type:`string`,optional:!0},{name:`mediaClassName`,type:`string`,optional:!0},{name:`label`,type:`string`,optional:!0},{name:`skeleton`,type:`boolean`,optional:!0,default:`false`}],inherited:[{package:`@types/react`,count:278,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L1877-L1884`,code:`import { TransformBoxFrame } from "@/components/vendor/opensourceui/frames/transform-box-frame";

export default function Example() {
  return (
    <TransformBoxFrame
      skeleton
      width={320}
      height={320}
      lineColor="#737373"
      handleColor="#171717"
      className="max-w-none"
    />
  );
}
`},exampleNote:null}},docsField:`Design-tool bounding box with separate line and handle colors — defaults to all black; pa… 主要导出：TransformBoxFrame。 最小用法：<TransformBoxFrame />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/frame.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-transform-box-frame.md。`,upstream:`https://opensourceui.in/components/transform-box-frame`};export{e as default};