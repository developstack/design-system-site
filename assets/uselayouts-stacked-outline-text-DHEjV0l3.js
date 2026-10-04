var e={vendored:{source:`uselayouts`,license:`MIT`,files:[`components/vendor/uselayouts/stacked-outline-text.tsx`,`components/vendor/uselayouts/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/uselayouts/stacked-outline-text.tsx`,export:`default`,example:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/stacked-outline-text-demo.tsx`},note:{summaryZh:`文字动效（动效组件）。`,importLine:`import { StackedOutlineText } from "@/components/vendor/uselayouts/stacked-outline-text";`,usage:`<StackedOutlineText />`,exports:[{name:`StackedOutlineText`,kind:`component`,propsType:`StackedOutlineTextProps`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`text`,type:`string`,optional:!0,default:`DEFAULT_TEXT`},{name:`fontSize`,type:`number`,optional:!0,default:`DEFAULT_FONT_SIZE`},{name:`stacks`,type:`number`,optional:!0,default:`MAX_STACK_COUNT`}],inherited:[]},{name:`default`,local:`StackedOutlineText`,kind:`component`,propsType:`StackedOutlineTextProps`,inline:!0,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`text`,type:`string`,optional:!0,default:`DEFAULT_TEXT`},{name:`fontSize`,type:`number`,optional:!0,default:`DEFAULT_FONT_SIZE`},{name:`stacks`,type:`number`,optional:!0,default:`MAX_STACK_COUNT`}],inherited:[]}],example:{url:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/stacked-outline-text-demo.tsx`,code:`"use client";

import StackedOutlineText from "@/components/vendor/uselayouts/stacked-outline-text";

export default function StackedOutlineTextDemo() {
  return (
    <div className="h-full w-full min-w-0 overflow-hidden">
      <StackedOutlineText />
    </div>
  );
}
`},exampleNote:null}},docsField:`Heavy outlined type you can drag. Speed leaves a stacked white-on-black trail that springs… 主要导出：StackedOutlineText。 最小用法：<StackedOutlineText />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/uselayouts-stacked-outline-text.md。`,upstream:`https://uselayouts.com/r/stacked-outline-text.json`};export{e as default};