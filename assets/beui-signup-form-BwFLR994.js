var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/signup-form.tsx`,`components/vendor/beui/motion/button/index.tsx`,`components/vendor/beui/motion/checkbox.tsx`,`components/vendor/beui/motion/input.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/motion/button/magnetic.tsx`,`components/vendor/beui/motion/button/metallic.tsx`,`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/signup-form.tsx`,export:`SignUpFormPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/signup-form.preview.tsx`},note:{summaryZh:`注册表单（动效区块）。`,importLine:`import { SignUpForm } from "@/components/vendor/beui/motion/signup-form";`,usage:`<SignUpForm />`,exports:[{name:`SignUpStatus`,kind:`type`},{name:`SignUpValues`,kind:`type`},{name:`SignUpErrors`,kind:`type`},{name:`SignUpFormClassNames`,kind:`type`},{name:`SignUpFormProps`,kind:`type`},{name:`passwordStrength`,doc:`Length-weighted strength score, 0-4. NIST SP 800-63B advises against composition requirements and treats length as the dominant factor, so extra character classes only nudge the score — they can't rescue a short password. This is a heuristic for feedback, not entropy estimation; pair it with a breach-list check server-side for anything real.`,kind:`function`,signature:`(password: string) => number`,params:[`password`],requiredParams:1},{name:`SignUpForm`,kind:`component`,propsType:`SignUpFormProps`,inline:!1,union:!1,props:[{name:`values`,type:`SignUpValues`,optional:!0,doc:`Controlled values. Omit for uncontrolled.`},{name:`defaultValues`,type:`Partial<SignUpValues>`,optional:!0},{name:`onValuesChange`,type:`(values: SignUpValues) => void`,optional:!0},{name:`onSubmit`,type:`(values: SignUpValues) => void | Promise<void>`,optional:!0,doc:`Called with valid values only. Return a promise to drive the button state.`},{name:`validate`,type:`(values: SignUpValues) => Partial<Record<keyof SignUpValues, string>>`,optional:!0,doc:`Replace the built-in rules — return a message per invalid field.`},{name:`status`,type:`SignUpStatus`,optional:!0,doc:`Controlled submit state. Omit to let the form track it.`},{name:`errorMessage`,type:`string`,optional:!0,doc:`Form-level failure message, shown above the submit button.`},{name:`title`,type:`ReactNode`,optional:!0,default:`"Create your account"`},{name:`description`,type:`ReactNode`,optional:!0,default:`"Start building in under a minute."`},{name:`submitLabel`,type:`string`,optional:!0,default:`"Create account"`},{name:`footer`,type:`ReactNode`,optional:!0},{name:`strengthMeter`,type:`boolean`,optional:!0,default:`true`,doc:`Show the password strength meter.`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`SignUpFormClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/signup-form.preview.tsx`,code:`"use client";

import { useState } from "react";
import { SignUpForm } from "@/components/vendor/beui/motion/signup-form";

export function SignUpFormPreview() {
  const [formError, setFormError] = useState<string>();

  return (
    <div className="flex w-full justify-center py-4">
      <SignUpForm
        description="Sign up with taken@example.com to see the failure state."
        errorMessage={formError}
        onSubmit={async (values) => {
          setFormError(undefined);
          await new Promise((resolve) => setTimeout(resolve, 1200));
          if (values.email.toLowerCase().startsWith("taken@")) {
            setFormError("That email is already registered.");
            throw new Error("Email already registered");
          }
        }}
        footer={
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="font-medium text-foreground underline underline-offset-4"
            >
              Sign in
            </button>
          </>
        }
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Composed sign-up form that flags a field only once it is left, then clears the moment it is fixed, with a length-weighted strength meter,… 主要导出：SignUpForm、passwordStrength。 最小用法：<SignUpForm />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-signup-form.md。`,upstream:`https://beui.dev/r/signup-form.json`};export{e as default};