var e={vendored:{source:`uselayouts`,license:`MIT`,files:[`components/vendor/uselayouts/scan-document.tsx`,`components/vendor/uselayouts/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/uselayouts/scan-document.tsx`,export:`default`,example:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/scan-document-demo.tsx`},note:{summaryZh:null,importLine:`import { ScanBar } from "@/components/vendor/uselayouts/scan-document";`,usage:`<ScanDocument />`,exports:[{name:`Status`,kind:`type`},{name:`ScanBar`,kind:`component`,propsType:`ScanBarProps`,inline:!0,union:!1,props:[{name:`transition`,type:`Transition`,optional:!1},{name:`z`,type:`number`,optional:!1}],inherited:[]},{name:`ScanningDocument`,kind:`component`,propsType:`{ reduceMotion: boolean; }`,inline:!0,union:!1,props:[{name:`reduceMotion`,type:`boolean`,optional:!1}],inherited:[]},{name:`Icon`,kind:`component`,propsType:`{ size?: number | undefined; color?: string | undefined; }`,inline:!0,union:!1,props:[{name:`size`,type:`number`,optional:!0,default:`24`},{name:`color`,type:`string`,optional:!0,default:`"currentColor"`}],inherited:[]},{name:`ScanDocumentButton`,kind:`component`,propsType:null,union:!1,props:[],inherited:[]},{name:`default`,local:`ScanDocument`,kind:`component`,propsType:null,union:!1,props:[],inherited:[]}],example:{url:`https://github.com/iurvish/uselayouts/blob/main/registry/default/demo/scan-document-demo.tsx`,code:`"use client";

import ScanDocument from "@/components/vendor/uselayouts/scan-document";

export default function ScanDocumentDemo() {
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center overflow-hidden">
      <ScanDocument />
    </div>
  );
}
`},exampleNote:null}},docsField:`Click Scan and a page unfolds, flips, and a glowing bar reads it. 主要导出：ScanDocument、ScanBar、ScanningDocument、Icon 等。 最小用法：<ScanDocument />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/uselayouts-scan-document.md。`,upstream:`https://uselayouts.com/r/scan-document.json`};export{e as default};