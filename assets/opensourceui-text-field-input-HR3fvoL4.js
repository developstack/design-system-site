var e={vendored:{source:`opensourceui`,license:`MIT`,files:[`components/vendor/opensourceui/inputs/text-field-input.tsx`,`components/vendor/opensourceui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/opensourceui/text-field-input.tsx`,export:`default`,example:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L2179-L2183`,usage:`<TextFieldInput label="Email" type="email" required error={!valid} errorMessage="Invalid email." />`},note:{summaryZh:null,importLine:`import { TextFieldInput } from "@/components/vendor/opensourceui/inputs/text-field-input";`,usage:`<TextFieldInput />`,exports:[{name:`TextFieldInputProps`,kind:`type`},{name:`TextFieldInput`,kind:`component`,propsType:`Readonly<{ label?: string | undefined; hint?: string | undefined; error?: boolean | undefined; erro…`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0,default:`"Label"`},{name:`hint`,type:`string`,optional:!0},{name:`error`,type:`boolean`,optional:!0,default:`false`},{name:`errorMessage`,type:`string`,optional:!0,default:`"This field is required."`},{name:`containerClassName`,type:`string`,optional:!0},{name:`type`,type:`HTMLInputTypeAttribute`,optional:!0,default:`"text"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:308,names:[]}]}],example:{url:`https://github.com/bidyut10/opensourceui/blob/e4703843b45513c21304253558853a550b986dbe/lib/showcase/showcase.tsx#L2179-L2183`,code:`import { TextFieldInput } from "@/components/vendor/opensourceui/inputs/text-field-input";

export default function Example() {
  return (
    <TextFieldInput
      label="Full name"
      placeholder="Jane Cooper"
      hint="As shown on your government ID."
    />
  );
}
`},exampleNote:null}},docsField:`Standard labeled text field with hint and error states. 主要导出：TextFieldInput。 最小用法：<TextFieldInput />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/input.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/opensourceui-text-field-input.md。`,upstream:`https://opensourceui.in/components/text-field-input`};export{e as default};