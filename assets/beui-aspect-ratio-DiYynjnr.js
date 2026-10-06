var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/aspect-ratio.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/aspect-ratio.tsx`,export:`AspectRatioPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/aspect-ratio.preview.tsx`},note:{summaryZh:null,importLine:`import { AspectRatio } from "@/components/vendor/beui/motion/aspect-ratio";`,usage:`<AspectRatio />`,exports:[{name:`AspectRatioProps`,kind:`type`},{name:`AspectRatio`,kind:`component`,propsType:`AspectRatioProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`ratio`,type:`number`,optional:!0,default:`1`,doc:`Width divided by height, for example 16 / 9. Must be finite and positive.`},{name:`animated`,type:`boolean`,optional:!0,default:`true`,doc:`Morph layout changes. Reduced motion always skips movement.`},{name:`contentClassName`,type:`string`,optional:!0,doc:`Classes for the content layer, such as alignment or padding.`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:61,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`AspectRatioImageProps`,kind:`type`},{name:`AspectRatioImage`,kind:`component`,propsType:`AspectRatioImageProps`,inline:!1,union:!1,props:[{name:`alt`,type:`string`,optional:!1},{name:`width`,type:`number`,optional:!1,doc:`Intrinsic width in pixels, used to reserve the image's cover crop.`},{name:`height`,type:`number`,optional:!1,doc:`Intrinsic height in pixels. Keep these dimensions accurate for the source.`},{name:`draggable`,type:`Booleanish`,optional:!0,default:`false`,from:`映射类型生成，来源无法定位`}],inherited:[{package:`映射类型生成，来源无法定位`,count:282,names:[]},{package:`motion-dom`,count:61,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/aspect-ratio.preview.tsx`,code:`"use client";

import { type KeyboardEvent, useId, useState } from "react";
import { AspectRatio, AspectRatioImage } from "@/components/vendor/beui/motion/aspect-ratio";
import { Tabs, TabsList, TabsTrigger } from "@/components/vendor/beui/motion/tabs";

const RATIOS = [
  { label: "21:9", value: 21 / 9 },
  { label: "16:9", value: 16 / 9 },
  { label: "3:2", value: 3 / 2 },
  { label: "4:3", value: 4 / 3 },
  { label: "1:1", value: 1 },
  { label: "4:5", value: 4 / 5 },
  { label: "3:4", value: 3 / 4 },
  { label: "2:3", value: 2 / 3 },
  { label: "9:16", value: 9 / 16 },
] as const;

export function AspectRatioPreview() {
  const [value, setValue] = useState("16:9");
  const id = useId();
  const panelId = \`\${id}-preview\`;
  const ratio = RATIOS.find((item) => item.label === value)?.value ?? 16 / 9;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLElement) || event.target.getAttribute("role") !== "tab") return;
    const direction = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!direction && event.key !== "Home" && event.key !== "End") return;
    const tabs = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('[role="tab"]'));
    const index = tabs.indexOf(event.target as HTMLButtonElement);
    const next = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (index + direction + tabs.length) % tabs.length;
    event.preventDefault();
    const tab = tabs[next];
    const nextValue = tab?.dataset.tabsValue;
    if (!nextValue) return;
    tab.focus();
    setValue(nextValue);
  };

  return (
    <div className="mx-auto w-full max-w-xl min-w-0 px-4 py-6">
      <Tabs value={value} onValueChange={setValue}>
        <TabsList aria-label="Aspect ratio" onKeyDown={onKeyDown} className="mx-auto bg-muted">
          {RATIOS.map((item) => (
            <TabsTrigger
              key={item.label}
              value={item.label}
              id={\`\${id}-\${item.label}\`}
              aria-controls={panelId}
              tabIndex={value === item.label ? 0 : -1}
              indicatorClassName="bg-background"
              className="min-h-9 px-3 text-xs [&_[data-tabs-label]]:text-foreground"
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {/* biome-ignore lint/a11y/noNoninteractiveTabindex: A media-only tab panel needs a keyboard entry point. */}
        <div id={panelId} role="tabpanel" aria-labelledby={\`\${id}-\${value}\`} tabIndex={0} className="mt-6 flex h-[25rem] w-full items-center justify-center rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <AspectRatio
            ratio={ratio}
            className="bg-muted"
            style={{ maxWidth: Math.min(440, 360 * ratio), borderRadius: 16 }}
          >
            <AspectRatioImage
              src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=80"
              alt="A lakeside cabin beneath mountains, reflected in the water"
              width={1000}
              height={667}
            />
          </AspectRatio>
        </div>
      </Tabs>
    </div>
  );
}
`},exampleNote:null}},docsField:`Responsive media with smooth aspect ratio transitions. 主要导出：AspectRatio、AspectRatioImage。 最小用法：<AspectRatio />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/aspect-ratio.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-aspect-ratio.md。`,upstream:`https://beui.dev/r/aspect-ratio.json`};export{e as default};