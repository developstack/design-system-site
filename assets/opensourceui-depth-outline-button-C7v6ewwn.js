var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/buttons/depth-outline-button.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/depth-outline-button.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L352-L358`,usage:`<DepthOutlineButton>Learn more</DepthOutlineButton>`},note:{summaryZh:null,importLine:`import { DepthOutlineButton } from "@/components/vendor/opensourceui/buttons/depth-outline-button";`,usage:`<DepthOutlineButton>…</DepthOutlineButton>`,exports:[{name:`DepthOutlineButtonSize`,kind:`type`},{name:`DepthOutlineButtonProps`,kind:`type`},{name:`DepthOutlineButton`,kind:`component`,propsType:`Readonly<{ children: ReactNode; size?: DepthOutlineButtonSize | undefined; } & Omit<DetailedHTMLPro…`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`size`,type:`DepthOutlineButtonSize`,optional:!0,default:`"md"`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:288,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L352-L358`,code:`import { ArrowRight } from "lucide-react";
import { DepthOutlineButton } from "@/components/vendor/opensourceui/buttons/depth-outline-button";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <DepthOutlineButton>Learn more</DepthOutlineButton>
      <DepthOutlineButton size="lg">
        Continue
        <ArrowRight size={15} strokeWidth={2} aria-hidden />
      </DepthOutlineButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Premium outline button with layered float depth, a soft top lip, a… 主要导出：DepthOutlineButton。 最小用法：<DepthOutlineButton>…</DepthOutlineButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-depth-outline-button.md。`,upstream:`https://opensourceui.in/components/depth-outline-button`};export{e as default};