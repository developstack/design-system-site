var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/button-stateful.tsx`,export:`ButtonStatefulPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-stateful.preview.tsx`},note:{summaryZh:`按钮（动效组件）。`,importLine:`import { StatefulButton } from "@/components/vendor/beui/motion/button/stateful";`,usage:`<StatefulButton>…</StatefulButton>`,exports:[{name:`ButtonState`,kind:`type`},{name:`StatefulButtonProps`,kind:`type`},{name:`StatefulButton`,kind:`component`,propsType:`Omit<StatefulButtonProps, "ref"> & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`variant`,type:`ButtonVariant`,optional:!0},{name:`size`,type:`ButtonSize`,optional:!0},{name:`pressScale`,type:`number`,optional:!0},{name:`ripple`,type:`boolean`,optional:!0,doc:`Spawn a Material-style ripple from the press point. Off by default.`},{name:`state`,type:`ButtonState`,optional:!0,default:`"idle"`},{name:`children`,type:`ReactNode`,optional:!1},{name:`loadingText`,type:`ReactNode`,optional:!0,default:`"Loading"`},{name:`successText`,type:`ReactNode`,optional:!0,default:`"Done"`},{name:`errorText`,type:`ReactNode`,optional:!0,default:`"Try again"`},{name:`icon`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:282,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/button-stateful.preview.tsx`,code:`"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { type ButtonState, StatefulButton } from "@/components/vendor/beui/motion/button";

export function ButtonStatefulPreview() {
  const [okState, setOkState] = useState<ButtonState>("idle");
  const [errState, setErrState] = useState<ButtonState>("idle");

  const run = (target: "ok" | "err") => {
    const setter = target === "ok" ? setOkState : setErrState;
    setter("loading");
    setTimeout(() => {
      setter(target === "ok" ? "success" : "error");
      setTimeout(() => setter("idle"), 1800);
    }, 1400);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <StatefulButton
        state={okState}
        variant="primary"
        size="md"
        onClick={() => run("ok")}
        loadingText="Saving"
        successText="Saved"
        icon={<ArrowRight className="h-4 w-4" />}
      >
        Save changes
      </StatefulButton>
      <StatefulButton
        state={errState}
        variant="secondary"
        size="md"
        onClick={() => run("err")}
        loadingText="Submitting"
        errorText="Failed"
      >
        Submit
      </StatefulButton>
    </div>
  );
}
`},exampleNote:null}},docsField:`Idle → loading → success / error with blur-swap slots and morphing width. 主要导出：StatefulButton。 最小用法：<StatefulButton>…</StatefulButton>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-button-stateful.md。`,upstream:`https://beui.dev/r/button-stateful.json`};export{e as default};