var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/theme-toggle.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`,`next-themes`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/theme-toggle.tsx`,export:`ThemeTogglePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/theme-toggle.preview.tsx`},note:{summaryZh:`主题切换（动效组件）。`,importLine:`import { ThemeToggle } from "@/components/vendor/beui/motion/theme-toggle";`,usage:`<ThemeToggle />`,exports:[{name:`ThemeVariant`,kind:`type`},{name:`RectStart`,kind:`type`},{name:`ThemeToggleProps`,kind:`type`},{name:`useThemeToggle`,kind:`hook`,signature:`({ variant, start, }?: { variant?: ThemeVariant | undefined; start?: RectStart | undefined; }) => { isDark: boolean; mounted: boolean; toggle: () => void; }`,params:[`__0`],requiredParams:0},{name:`ThemeToggle`,kind:`component`,propsType:`ThemeToggleProps`,inline:!1,union:!1,props:[{name:`variant`,type:`ThemeVariant`,optional:!0,default:`"rectangle"`,doc:`Animation variant. Default: "rectangle".`},{name:`start`,type:`RectStart`,optional:!0,default:`"bottom-up"`,doc:`Origin direction for the reveal. Default: "bottom-up".`},{name:`iconClassName`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:287,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/theme-toggle.preview.tsx`,code:`"use client";

import { ThemeToggle, type ThemeVariant } from "@/components/vendor/beui/motion/theme-toggle";

const VARIANTS: { variant: ThemeVariant; label: string }[] = [
  { variant: "rectangle", label: "Rectangle" },
  { variant: "circle", label: "Circle" },
  { variant: "circle-blur", label: "Circle blur" },
  { variant: "blinds", label: "Blinds" },
];

export function ThemeTogglePreview() {
  return (
    <div className="flex h-full w-full items-center justify-center gap-5">
      {VARIANTS.map(({ variant, label }) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <ThemeToggle
            variant={variant}
            start="bottom-up"
            className="rounded-xl border border-border bg-background p-2.5"
            iconClassName="h-5 w-5"
          />
          <span className="text-[11px] text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  );
}
`},exampleNote:null}},docsField:`Theme toggle button that repaints the whole page through the View Transition API — a rectangle or… 主要导出：ThemeToggle、useThemeToggle。 最小用法：<ThemeToggle />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/theme-toggle.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-theme-toggle.md。`,upstream:`https://beui.dev/r/theme-toggle.json`};export{e as default};