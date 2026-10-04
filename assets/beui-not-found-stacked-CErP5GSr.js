var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/not-found/stacked.tsx`,`components/vendor/beui/motion/not-found/shared.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/not-found-stacked.tsx`,export:`NotFoundStackedPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-stacked.preview.tsx`},note:{summaryZh:`404 页面（动效区块）。`,importLine:`import { NotFoundStacked } from "@/components/vendor/beui/motion/not-found/stacked";`,usage:`<NotFoundStacked />`,exports:[{name:`NotFoundStacked`,kind:`component`,propsType:`NotFoundProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`code`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.code`,doc:`The big status code.`},{name:`title`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.title`},{name:`description`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.description`},{name:`homeHref`,type:`string`,optional:!0},{name:`homeLabel`,type:`string`,optional:!0},{name:`browseHref`,type:`string`,optional:!0},{name:`browseLabel`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-stacked.preview.tsx`,code:`"use client";

import { NotFoundStacked } from "@/components/vendor/beui/motion/not-found/stacked";

export function NotFoundStackedPreview() {
  return (
    <div className="w-full">
      <NotFoundStacked />
    </div>
  );
}
`},exampleNote:null}},docsField:`A code card over a hidden stack that fans out with a spring on hover. 主要导出：NotFoundStacked。 最小用法：<NotFoundStacked />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-not-found-stacked.md。`,upstream:`https://beui.dev/r/not-found-stacked.json`};export{e as default};