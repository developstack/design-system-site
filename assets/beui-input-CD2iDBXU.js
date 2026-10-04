var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/input.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/input.tsx`,export:`InputPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/input.preview.tsx`},note:{summaryZh:`输入框（动效组件）。`,importLine:`import { Input } from "@/components/vendor/beui/motion/input";`,usage:`<Input />`,exports:[{name:`InputClassNames`,kind:`type`},{name:`InputProps`,kind:`type`},{name:`Input`,kind:`component`,propsType:`InputProps & RefAttributes<HTMLInputElement>`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onChange`,type:`(value: string) => void`,optional:!0},{name:`error`,type:`string | boolean`,optional:!0,doc:`Truthy error triggers a shake, red border and (if a string) a message.`},{name:`reserveErrorLine`,type:`boolean`,optional:!0,default:`false`,doc:`Reserve one message line so validation does not shift nearby content.`},{name:`success`,type:`boolean`,optional:!0},{name:`leftIcon`,type:`ReactNode`,optional:!0},{name:`rightIcon`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`InputClassNames`,optional:!0}],inherited:[{package:`@types/react`,count:306,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/input.preview.tsx`,code:`"use client";

import { Eye, EyeOff, Mail, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/vendor/beui/motion/input";

export function InputPreview() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("hunter2");
  const [query, setQuery] = useState("Ada");
  const [show, setShow] = useState(false);

  const emailError =
    email.length > 0 && !email.includes("@") ? "Enter a valid email address." : undefined;

  return (
    <div className="flex w-full max-w-xs flex-col gap-1">
      <Input
        label="Email"
        type="email"
        placeholder="you@example.com"
        leftIcon={<Mail />}
        value={email}
        onChange={setEmail}
        error={emailError}
        reserveErrorLine
      />
      <Input
        label="Password"
        type={show ? "text" : "password"}
        value={pass}
        onChange={setPass}
        rightIcon={
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="pointer-events-auto"
          >
            {show ? <EyeOff /> : <Eye />}
          </button>
        }
        reserveErrorLine
      />
      <Input
        label="Search"
        leftIcon={<Search />}
        value={query}
        onChange={setQuery}
        success={query.length > 1}
        reserveErrorLine
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Text input with label, left/right icons, optional stable error row, error shake and success check draw. 主要导出：Input。 最小用法：<Input />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/input.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-input.md。`,upstream:`https://beui.dev/r/input.json`};export{e as default};