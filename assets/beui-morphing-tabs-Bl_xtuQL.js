var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/morphing-tabs.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/morphing-tabs.tsx`,export:`MorphingTabsPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/morphing-tabs.preview.tsx`},note:{summaryZh:`标签页（动效区块）。`,importLine:`import { MorphingTabs } from "@/components/vendor/beui/motion/morphing-tabs";`,usage:`<MorphingTabs items={…} />`,exports:[{name:`MorphingTabsItem`,kind:`type`},{name:`MorphingTabsClassNames`,kind:`type`},{name:`MorphingTabsProps`,kind:`type`},{name:`MorphingTabs`,kind:`component`,propsType:`MorphingTabsProps`,inline:!1,union:!1,props:[{name:`items`,type:`MorphingTabsItem[]`,optional:!1},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(id: string | null) => void`,optional:!0},{name:`onOrderChange`,type:`(ids: string[]) => void`,optional:!0,doc:`Called once after a pointer drag or keyboard reorder completes.`},{name:`onClose`,type:`(id: string) => void`,optional:!0,doc:`Enables the close affordance on every tab when provided.`},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Tabs"`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`MorphingTabsClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/morphing-tabs.preview.tsx`,code:`"use client";

import { useMemo, useState } from "react";
import { MorphingTabs, type MorphingTabsItem } from "@/components/vendor/beui/motion/morphing-tabs";

const ROOM_CONTENT: Record<string, { eyebrow: string; title: string; detail: string; accent: string }> = {
  "room-2": {
    eyebrow: "quiet focus",
    title: "Room 2",
    detail: "A small space for the work that needs a little more air around it.",
    accent: "#db5b2f",
  },
  general: {
    eyebrow: "shared space",
    title: "General",
    detail: "The common room for notes, links and the ideas that are still finding their shape.",
    accent: "#1bb273",
  },
  archive: {
    eyebrow: "kept close",
    title: "Archive",
    detail: "Past rooms stay available without competing with the conversations in motion.",
    accent: "#7a6de2",
  },
};

function RoomPanel({ id }: { id: string }) {
  const room = ROOM_CONTENT[id];

  return (
    <div className="relative min-h-64 overflow-hidden bg-[radial-gradient(circle_at_1px_1px,#dfe2e3_1px,transparent_1.5px)] bg-[size:4.8rem_4.8rem] px-7 py-8 md:px-12 md:py-10">
      <div className="relative max-w-xl">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-black/40">
          {room.eyebrow}
        </p>
        <h3 className="mt-3 text-3xl font-light tracking-[-0.055em] text-[#151515] md:text-5xl">
          {room.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-6 text-black/55 md:text-base">
          {room.detail}
        </p>
        <div className="mt-8 flex items-center gap-3 text-xs font-medium text-black/50">
          <span className="size-2 rounded-full" style={{ backgroundColor: room.accent }} />
          drag any room to reorder
        </div>
      </div>
    </div>
  );
}

export function MorphingTabsPreview() {
  const initialItems = useMemo<MorphingTabsItem[]>(
    () =>
      Object.keys(ROOM_CONTENT).map((id) => ({
        id,
        label: ROOM_CONTENT[id].title,
        content: <RoomPanel id={id} />,
      })),
    [],
  );
  const [items, setItems] = useState(initialItems);
  const [value, setValue] = useState<string | null>("room-2");

  return (
    <div className="flex w-full min-w-0 items-center justify-center bg-[#242424] p-3 md:p-8">
      <MorphingTabs
        items={items}
        value={value}
        onValueChange={setValue}
        onOrderChange={(ids) => {
          setItems((current) => {
            const byId = new Map(current.map((item) => [item.id, item]));
            return ids.flatMap((id) => {
              const item = byId.get(id);
              return item ? [item] : [];
            });
          });
        }}
        onClose={(id) => {
          setItems((current) => {
            const next = current.filter((item) => item.id !== id);
            if (id === value) setValue(next[0]?.id ?? null);
            return next;
          });
        }}
        ariaLabel="Rooms"
        className="w-full max-w-5xl"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`Reorderable tabs whose selected item grows into a white content surface, with the active shape gliding as ta… 主要导出：MorphingTabs。 最小用法：<MorphingTabs items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/tabs.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-morphing-tabs.md。`,upstream:`https://beui.dev/r/morphing-tabs.json`};export{e as default};