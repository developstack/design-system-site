var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/buttons/soft-ui-button.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/soft-ui-button.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L299-L305`,usage:`<SoftUiButton>Get started</SoftUiButton>`},note:{summaryZh:null,importLine:`import { SoftUiButton } from "@/components/vendor/opensourceui/buttons/soft-ui-button";`,usage:`<SoftUiButton>…</SoftUiButton>`,exports:[{name:`SoftUiButtonSize`,kind:`type`},{name:`SoftUiButtonProps`,kind:`type`},{name:`SoftUiButton`,kind:`component`,propsType:`Readonly<{ children: ReactNode; size?: SoftUiButtonSize | undefined; } & Omit<DetailedHTMLProps<But…`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`size`,type:`SoftUiButtonSize`,optional:!0,default:`"md"`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:288,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L299-L305`,code:`import { ArrowRight } from "lucide-react";
import { SoftUiButton } from "@/components/vendor/opensourceui/buttons/soft-ui-button";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 rounded-2xl bg-neutral-100 p-4">
      <SoftUiButton>
        Get started
        <ArrowRight size={15} strokeWidth={2} aria-hidden />
      </SoftUiButton>
      <SoftUiButton size="sm">Cancel</SoftUiButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Universal soft-UI / neumorphic button — even light and dark shadows. 主要导出：SoftUiButton。 最小用法：<SoftUiButton>…</SoftUiButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-soft-ui-button.md。`,upstream:`https://opensourceui.in/components/soft-ui-button`};export{e as default};