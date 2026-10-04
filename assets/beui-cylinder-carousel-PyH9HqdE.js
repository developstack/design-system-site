var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/cylinder-carousel.tsx`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/cylinder-carousel.tsx`,export:`CylinderCarouselPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/cylinder-carousel.preview.tsx`},note:{summaryZh:`轮播（动效组件）。`,importLine:`import { CylinderCarousel } from "@/components/vendor/beui/motion/cylinder-carousel";`,usage:`<CylinderCarousel>…</CylinderCarousel>`,exports:[{name:`CylinderCarouselProps`,kind:`type`},{name:`CylinderCarousel`,kind:`component`,propsType:`CylinderCarouselProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`itemSize`,type:`number`,optional:!0,default:`200`,doc:`Max item box size in px (square) at full size, i.e. at the container edge. Balls shrink below this automatically so the row keeps breathing room in narrow containers.`},{name:`visibleItems`,type:`number`,optional:!0,default:`5`,doc:`How many item slots span the container width.`},{name:`variant`,type:`"concave" | "convex"`,optional:!0,default:`"concave"`,doc:`"concave" (default): inside of the cylinder — center ball smallest and dipped, growing toward the edges. "convex": outside of the cylinder — center ball biggest and raised, shrinking toward the edges.`},{name:`minScale`,type:`number`,optional:!0,default:`0.55`,doc:`Scale of the smallest ball (center for concave, edges for convex); the biggest reaches 1.`},{name:`dragSpeed`,type:`number`,optional:!0,default:`1.5`,doc:`Items rolled per item-width dragged — above 1 the wall outruns the pointer, which reads as a lighter, freer roll.`},{name:`arc`,type:`number`,optional:!0,doc:`Curve depth in px: for concave, how far the edge balls ride above the center one (valley); for convex, how far below (arch). 0 = flat line. Defaults to 35% of the item size.`},{name:`snap`,type:`boolean`,optional:!0,default:`true`,doc:`Snap to the nearest item when the roll settles.`},{name:`autoRotate`,type:`boolean`,optional:!0,default:`false`,doc:`Roll on its own until interacted with.`},{name:`autoRotateSpeed`,type:`number`,optional:!0,default:`0.4`,doc:`Auto-roll speed in items per second.`},{name:`defaultIndex`,type:`number`,optional:!0,default:`0`},{name:`onIndexChange`,type:`(index: number) => void`,optional:!0},{name:`height`,type:`number`,optional:!0,doc:"Stage height in px. Defaults to `itemSize`."},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/cylinder-carousel.preview.tsx`,code:`"use client";

import { type ComponentType, useState } from "react";
import { CylinderCarousel } from "@/components/vendor/beui/motion/cylinder-carousel";
import {
  ShaderBackground,
  type ShaderBackgroundVariant,
} from "@/components/vendor/beui/motion/shader-background";
import { Tabs, TabsList, TabsTrigger } from "@/components/vendor/beui/motion/tabs";

// Each variant has its own prop shape; the slides only spread their own preset.
const Background = ShaderBackground as ComponentType<
  { variant: ShaderBackgroundVariant; className?: string } & Record<
    string,
    unknown
  >
>;

const SLIDES: { variant: ShaderBackgroundVariant; props: Record<string, unknown> }[] = [
  {
    variant: "dithering",
    props: { colorBack: "#1a1030", colorFront: "#b98cff", speed: 0.3 },
  },
  {
    variant: "metaballs",
    props: { colors: ["#e8e8ef", "#8a8a9a", "#1a1a22"], colorBack: "#c9b9a8", speed: 0.4 },
  },
  {
    variant: "warp",
    props: { colors: ["#c8ff00", "#3a5a00", "#c8ff00", "#88bb00"], speed: 0.4 },
  },
  {
    variant: "god-rays",
    props: { colors: ["#6a7bff", "#00114d"], colorBack: "#000000", speed: 0.5 },
  },
  {
    variant: "swirl",
    props: { colorBack: "#1a0000", colors: ["#ffd1a8", "#ff6a3d", "#b31a57"], speed: 0.3 },
  },
  {
    variant: "mesh-gradient",
    props: { colors: ["#e0eaff", "#241d9a", "#f75092", "#9f50d3"], speed: 0.3 },
  },
  {
    variant: "voronoi",
    props: { colors: ["#ff8247", "#ffe53d"], speed: 0.3 },
  },
  {
    variant: "neuro-noise",
    props: { colorFront: "#ffffff", colorMid: "#47a6ff", colorBack: "#000000", speed: 0.4 },
  },
];

export function CylinderCarouselPreview() {
  const [variant, setVariant] = useState<"concave" | "convex">("concave");

  return (
    <div className="flex w-full flex-col items-center gap-4 p-6">
      <Tabs
        value={variant}
        onValueChange={(v) => setVariant(v as "concave" | "convex")}
        variant="segment"
      >
        <TabsList>
          <TabsTrigger value="concave">Concave</TabsTrigger>
          <TabsTrigger value="convex">Convex</TabsTrigger>
        </TabsList>
      </Tabs>
      {/* clip-path (not overflow) so the rounded corner also clips the GPU-composited balls */}
      <div className="w-full rounded-3xl border border-border/60 bg-muted/20 py-6 [clip-path:inset(0_round_1.5rem)]">
        <CylinderCarousel
          variant={variant}
          itemSize={230}
          height={310}
          className="w-full"
        >
          {SLIDES.map((slide) => (
            <div
              key={slide.variant}
              className="h-full w-full overflow-hidden rounded-full border border-border/40"
            >
              <Background
                variant={slide.variant}
                className="h-full w-full"
                {...slide.props}
              />
            </div>
          ))}
        </CylinderCarousel>
      </div>
      <p className="text-xs text-muted-foreground">
        Drag, scroll or use arrow keys to roll
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`A carousel whose items line the inside of a cylinder, receding into the center… 主要导出：CylinderCarousel。 最小用法：<CylinderCarousel>…</CylinderCarousel>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/carousel.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-cylinder-carousel.md。`,upstream:`https://beui.dev/r/cylinder-carousel.json`};export{e as default};