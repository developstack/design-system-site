var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/not-found/magnetic.tsx`,`components/vendor/beui/motion/not-found/shared.tsx`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/not-found-magnetic.tsx`,export:`NotFoundMagneticPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-magnetic.preview.tsx`},note:{summaryZh:`404 页面（动效区块）。`,importLine:`import { NotFoundMagnetic } from "@/components/vendor/beui/motion/not-found/magnetic";`,usage:`<NotFoundMagnetic />`,exports:[{name:`NotFoundMagnetic`,kind:`component`,propsType:`NotFoundProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`code`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.code`,doc:`The big status code.`},{name:`title`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.title`},{name:`description`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.description`},{name:`homeHref`,type:`string`,optional:!0},{name:`homeLabel`,type:`string`,optional:!0},{name:`browseHref`,type:`string`,optional:!0},{name:`browseLabel`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-magnetic.preview.tsx`,code:`"use client";

import { NotFoundMagnetic } from "@/components/vendor/beui/motion/not-found/magnetic";

export function NotFoundMagneticPreview() {
  return (
    <div className="w-full">
      <NotFoundMagnetic />
    </div>
  );
}
`},exampleNote:null}},docsField:`Each digit is cursor-attracted via the Magnetic wrapper and springs back on leave. 主要导出：NotFoundMagnetic。 最小用法：<NotFoundMagnetic />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/not-found.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-not-found-magnetic.md。`,upstream:`https://beui.dev/r/not-found-magnetic.json`};export{e as default};