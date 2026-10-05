var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/buttons/soft-pill-button.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/soft-pill-button.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L334-L340`,usage:`<SoftPillButton variant="dark">Subscribe</SoftPillButton>`},note:{summaryZh:null,importLine:`import { SoftPillButton } from "@/components/vendor/opensourceui/buttons/soft-pill-button";`,usage:`<SoftPillButton>…</SoftPillButton>`,exports:[{name:`SoftPillButtonVariant`,kind:`type`},{name:`SoftPillButtonSize`,kind:`type`},{name:`SoftPillButtonProps`,kind:`type`},{name:`SoftPillButton`,kind:`component`,propsType:`Readonly<{ children: ReactNode; variant?: SoftPillButtonVariant | undefined; size?: SoftPillButtonS…`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`variant`,type:`SoftPillButtonVariant`,optional:!0,default:`"light"`},{name:`size`,type:`SoftPillButtonSize`,optional:!0,default:`"md"`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:288,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L334-L340`,code:`import { ArrowRight } from "lucide-react";
import { SoftPillButton } from "@/components/vendor/opensourceui/buttons/soft-pill-button";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <SoftPillButton>
        Book now
        <ArrowRight size={15} strokeWidth={2} aria-hidden />
      </SoftPillButton>
      <SoftPillButton variant="dark">Subscribe</SoftPillButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Floating rounded pill with a soft drop shadow — light or dark. 主要导出：SoftPillButton。 最小用法：<SoftPillButton>…</SoftPillButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-soft-pill-button.md。`,upstream:`https://opensourceui.in/components/soft-pill-button`};export{e as default};