var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/buttons/three-d-button.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/3d-button.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L252-L261`,usage:`<ThreeDButton variant="solid"><ArrowRight /> Continue</ThreeDButton>`},note:{summaryZh:null,importLine:`import { ThreeDButton } from "@/components/vendor/opensourceui/buttons/three-d-button";`,usage:`<ThreeDButton>…</ThreeDButton>`,exports:[{name:`ThreeDButtonVariant`,kind:`type`},{name:`ThreeDButtonSize`,kind:`type`},{name:`ThreeDButtonProps`,kind:`type`},{name:`ThreeDButton`,kind:`component`,propsType:`Readonly<{ children: ReactNode; variant?: ThreeDButtonVariant | undefined; size?: ThreeDButtonSize …`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`variant`,type:`ThreeDButtonVariant`,optional:!0,default:`"solid"`},{name:`size`,type:`ThreeDButtonSize`,optional:!0,default:`"md"`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:288,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L252-L261`,code:`import { ArrowRight } from "lucide-react";
import { ThreeDButton } from "@/components/vendor/opensourceui/buttons/three-d-button";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <ThreeDButton>
        Continue
        <ArrowRight size={15} strokeWidth={2} aria-hidden />
      </ThreeDButton>
      <ThreeDButton variant="soft">Cancel</ThreeDButton>
      <ThreeDButton variant="muted" size="sm">
        Learn more
      </ThreeDButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Universal 3D button with tactile keycap shadows — pass any children (label, icon + label). 主要导出：ThreeDButton。 最小用法：<ThreeDButton>…</ThreeDButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-3d-button.md。`,upstream:`https://opensourceui.in/components/3d-button`};export{e as default};