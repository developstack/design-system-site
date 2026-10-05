var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/otp-input.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/otp-input.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/otp-input.tsx`},note:{summaryZh:`验证码输入框（动效组件）。`,importLine:`import { OTPInput } from "@/components/vendor/easyui/ui/otp-input";`,usage:`<OTPInput />`,exports:[{name:`OTPInputProps`,kind:`type`},{name:`OTPInput`,kind:`component`,propsType:`OTPInputProps`,inline:!1,union:!1,props:[{name:`length`,type:`number`,optional:!0,default:`6`},{name:`value`,type:`string`,optional:!0},{name:`onChange`,type:`(value: string) => void`,optional:!0},{name:`onComplete`,type:`(value: string) => void`,optional:!0},{name:`autoFocus`,type:`boolean`,optional:!0,default:`false`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`boxClassName`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0,default:`'One-time passcode'`}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/otp-input.tsx`,code:`import { OTPInput } from '@/components/vendor/easyui/ui/otp-input';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="flex items-center justify-center  w-full">
            <OTPInput length={6} autoFocus onComplete={(value) => {
              alert(value)
            }} />
          </div>
        );
}
`},exampleNote:null}},docsField:`An accessible one-time-passcode input made of auto-advancing digit boxes, each with a spring-driven pop animation on e… 主要导出：OTPInput。 最小用法：<OTPInput />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/otp-input.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-otp-input.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#otp-input`};export{e as default};