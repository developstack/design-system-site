var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/not-found/glitch.tsx`,`components/vendor/beui/motion/not-found/shared.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/not-found-glitch.tsx`,export:`NotFoundGlitchPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-glitch.preview.tsx`},note:{summaryZh:`404 页面（动效区块）。`,importLine:`import { NotFoundGlitch } from "@/components/vendor/beui/motion/not-found/glitch";`,usage:`<NotFoundGlitch />`,exports:[{name:`NotFoundGlitch`,kind:`component`,propsType:`NotFoundProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`code`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.code`,doc:`The big status code.`},{name:`title`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.title`},{name:`description`,type:`string`,optional:!0,default:`NOT_FOUND_DEFAULTS.description`},{name:`homeHref`,type:`string`,optional:!0},{name:`homeLabel`,type:`string`,optional:!0},{name:`browseHref`,type:`string`,optional:!0},{name:`browseLabel`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/not-found-glitch.preview.tsx`,code:`"use client";

import { NotFoundGlitch } from "@/components/vendor/beui/motion/not-found/glitch";

export function NotFoundGlitchPreview() {
  return (
    <div className="w-full">
      <NotFoundGlitch />
    </div>
  );
}
`},exampleNote:null}},docsField:`Digits scramble through random glyphs before resolving, with a chromatic split on hover. 主要导出：NotFoundGlitch。 最小用法：<NotFoundGlitch />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/not-found.md。属性与示例见 packages/registry/docs/vendor/beui-not-found-glitch.md。`,upstream:`https://beui.dev/r/not-found-glitch.json`};export{e as default};