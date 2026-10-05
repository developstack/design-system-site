var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/buttons/three-d-icon-button.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/3d-icon-button.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L274-L284`,usage:`<ThreeDIconButton label="Settings" variant="soft"><Settings /></ThreeDIconButton>`},note:{summaryZh:null,importLine:`import { ThreeDIconButton } from "@/components/vendor/opensourceui/buttons/three-d-icon-button";`,usage:`<ThreeDIconButton label={…}>…</ThreeDIconButton>`,exports:[{name:`ThreeDIconButtonProps`,kind:`type`},{name:`ThreeDIconButton`,kind:`component`,propsType:`Readonly<{ children: ReactNode; label: string; variant?: "muted" | "soft" | "solid" | undefined; } …`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`label`,type:`string`,optional:!1},{name:`variant`,type:`"muted" | "soft" | "solid"`,optional:!0,default:`"soft"`},{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:287,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L274-L284`,code:`import { MessageCircle, Plus, Settings } from "lucide-react";
import { ThreeDIconButton } from "@/components/vendor/opensourceui/buttons/three-d-icon-button";

export default function Example() {
  return (
    <div className="flex items-center justify-center gap-3">
      <ThreeDIconButton label="Add" variant="solid">
        <Plus size={16} strokeWidth={2} aria-hidden />
      </ThreeDIconButton>
      <ThreeDIconButton label="Settings" variant="soft">
        <Settings size={16} strokeWidth={2} aria-hidden />
      </ThreeDIconButton>
      <ThreeDIconButton label="Add muted" variant="muted">
        <MessageCircle size={16} strokeWidth={2} aria-hidden />
      </ThreeDIconButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Square 3D icon button — pass any icon as children and a required labe… 主要导出：ThreeDIconButton。 最小用法：<ThreeDIconButton label={…}>…</ThreeDIconButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-3d-icon-button.md。`,upstream:`https://opensourceui.in/components/3d-icon-button`};export{e as default};