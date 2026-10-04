var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/loader.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/loader.tsx`,export:`LoaderPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/loader.preview.tsx`},note:{summaryZh:`加载指示器（动效组件）。`,importLine:`import { Loader } from "@/components/vendor/beui/motion/loader";`,usage:`<Loader />`,exports:[{name:`LoaderVariant`,kind:`type`},{name:`LoaderProps`,kind:`type`},{name:`Loader`,kind:`component`,propsType:`LoaderProps`,inline:!1,union:!1,props:[{name:`variant`,type:`LoaderVariant`,optional:!0,default:`"spinner"`,doc:`Which animation to render.`},{name:`size`,type:`number`,optional:!0,default:`32`,doc:`Base square size in px. Everything scales from this.`},{name:`speed`,type:`number`,optional:!0,default:`1`,doc:`Seconds per animation cycle.`},{name:`label`,type:`string`,optional:!0,default:`"Loading"`,doc:`Accessible label announced to screen readers.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/loader.preview.tsx`,code:`"use client";

import { Loader, type LoaderVariant } from "@/components/vendor/beui/motion/loader";

const VARIANTS: { variant: LoaderVariant; label: string }[] = [
  { variant: "spinner", label: "Spinner" },
  { variant: "dots", label: "Dots" },
  { variant: "bars", label: "Bars" },
  { variant: "dot-matrix", label: "Dot Matrix" },
  { variant: "dither", label: "Dither" },
  { variant: "morph", label: "Morph" },
  { variant: "comet", label: "Comet" },
  { variant: "metaballs", label: "Metaballs" },
  { variant: "newton", label: "Newton" },
  { variant: "helix", label: "Helix" },
  { variant: "scramble", label: "Scramble" },
  { variant: "percent", label: "Percent" },
  { variant: "ascii", label: "ASCII" },
  { variant: "ascii-line", label: "ASCII Line" },
  { variant: "ascii-braille", label: "ASCII Braille" },
  { variant: "ascii-blocks", label: "ASCII Blocks" },
  { variant: "ascii-bounce", label: "ASCII Bounce" },
];

export function LoaderPreview() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 p-8">
      {VARIANTS.map(({ variant, label }) => (
        <div key={variant} className="flex flex-col items-center gap-4">
          <Loader variant={variant} size={36} />
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
`},exampleNote:null}},docsField:`Loading indicator with seventeen variants: spinner, dots, bars, dot-matrix, dither, morph, comet, scramble, metaballs, newton, helix, per… 主要导出：Loader。 最小用法：<Loader />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-loader.md。`,upstream:`https://beui.dev/r/loader.json`};export{e as default};