var e={vendored:{source:`uselayouts`,license:`MIT`,files:[`components/vendor/uselayouts/editorial-deck.tsx`,`components/vendor/uselayouts/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/uselayouts/editorial-deck.tsx`,export:`default`,example:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/editorial-deck-demo.tsx`},note:{summaryZh:null,importLine:`import { EditorialDeck } from "@/components/vendor/uselayouts/editorial-deck";`,usage:`<EditorialDeck />`,exports:[{name:`EditorialDeckCard`,kind:`type`},{name:`DEFAULT_CARDS`,kind:`constant`,type:`EditorialDeckCard[]`},{name:`EditorialDeckProps`,kind:`type`},{name:`EditorialDeck`,kind:`component`,propsType:`EditorialDeckProps`,inline:!1,union:!1,props:[{name:`cards`,type:`EditorialDeckCard[]`,optional:!0,default:`DEFAULT_CARDS`},{name:`title`,type:`string`,optional:!0,default:`"Editorial deck"`},{name:`subtitle`,type:`string`,optional:!0,default:`"Drag to flip through stories"`},{name:`className`,type:`string`,optional:!0,default:`""`}],inherited:[]},{name:`default`,local:`EditorialDeck`,kind:`component`,propsType:`EditorialDeckProps`,inline:!1,union:!1,props:[{name:`cards`,type:`EditorialDeckCard[]`,optional:!0,default:`DEFAULT_CARDS`},{name:`title`,type:`string`,optional:!0,default:`"Editorial deck"`},{name:`subtitle`,type:`string`,optional:!0,default:`"Drag to flip through stories"`},{name:`className`,type:`string`,optional:!0,default:`""`}],inherited:[]}],example:{url:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/editorial-deck-demo.tsx`,code:`"use client";

import EditorialDeck from "@/components/vendor/uselayouts/editorial-deck";

export default function EditorialDeckDemo() {
  return (
    <div className="flex h-full min-h-0 w-full flex-col self-stretch overflow-hidden bg-[#F7F4F0] pt-[28vh] pb-24">
      <div className="flex min-h-0 flex-1 flex-col">
        <EditorialDeck title="" subtitle="" />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A stacked editorial story deck. Drag the front card and it springs back into the pile. 主要导出：EditorialDeck、DEFAULT_CARDS。 最小用法：<EditorialDeck />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/uselayouts-editorial-deck.md。`,upstream:`https://uselayouts.com/r/editorial-deck.json`};export{e as default};