var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/otp-input.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/otp-input.tsx`,export:`OTPInputPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/otp-input.preview.tsx`},note:{summaryZh:`验证码输入框（动效区块）。`,importLine:`import { OTPInput } from "@/components/vendor/beui/motion/otp-input";`,usage:`<OTPInput />`,exports:[{name:`OTPStatus`,kind:`type`},{name:`OTPInputProps`,kind:`type`},{name:`OTPInput`,kind:`component`,propsType:`OTPInputProps`,inline:!1,union:!1,props:[{name:`length`,type:`number`,optional:!0,default:`6`,doc:`Number of slots. Default 6.`},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0,default:`""`},{name:`onChange`,type:`(value: string) => void`,optional:!0},{name:`onComplete`,type:`(value: string) => void`,optional:!0,doc:`Fires once every slot is filled.`},{name:`label`,type:`string`,optional:!0,doc:`Optional label rendered above the slots.`},{name:`hint`,type:`string`,optional:!0,doc:`Helper text shown below the slots while idle.`},{name:`successMessage`,type:`string`,optional:!0,doc:`Message shown below the slots when status is "success".`},{name:`errorMessage`,type:`string`,optional:!0,doc:`Message shown below the slots when status is "error".`},{name:`status`,type:`OTPStatus`,optional:!0,default:`"idle"`,doc:`External validation feedback. "error" shakes, "success" draws a check.`},{name:`mask`,type:`boolean`,optional:!0,default:`false`,doc:`Render dots instead of the typed digits.`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`autoFocus`,type:`boolean`,optional:!0,default:`false`},{name:`aria-label`,type:`string`,optional:!0,default:`"One-time passcode"`,doc:`Accessible label for the underlying input.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/otp-input.preview.tsx`,code:`"use client";

import { useState } from "react";
import { OTPInput, type OTPStatus } from "@/components/vendor/beui/motion/otp-input";

const CODE = "123456";

export function OTPInputPreview() {
  const [value, setValue] = useState("");
  const [status, setStatus] = useState<OTPStatus>("idle");

  return (
    <div className="flex flex-col items-center gap-4">
      <OTPInput
        label="Verification code"
        hint={\`Enter \${CODE} to verify.\`}
        successMessage="Verified."
        errorMessage="Wrong code, try again."
        value={value}
        status={status}
        onChange={(v) => {
          setValue(v);
          if (status !== "idle") setStatus("idle");
        }}
        onComplete={(v) => setStatus(v === CODE ? "success" : "error")}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`One-time-code input with a gliding focus ring, digits that roll in per slot, error shake and a success check draw. 主要导出：OTPInput。 最小用法：<OTPInput />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-otp-input.md。`,upstream:`https://beui.dev/r/otp-input.json`};export{e as default};