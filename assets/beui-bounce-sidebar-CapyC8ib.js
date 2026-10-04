var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/bounce-sidebar.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/bounce-sidebar.tsx`,export:`BounceSidebarPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bounce-sidebar.preview.tsx`},note:{summaryZh:`侧边栏（动效组件）。`,importLine:`import { BounceSidebar } from "@/components/vendor/beui/motion/bounce-sidebar";`,usage:`<BounceSidebar items={…} />`,exports:[{name:`BounceSidebarItem`,kind:`type`},{name:`BounceSidebarProps`,kind:`type`},{name:`BounceSidebar`,kind:`component`,propsType:`BounceSidebarProps`,inline:!1,union:!1,props:[{name:`items`,type:`BounceSidebarItem[]`,optional:!1},{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Sidebar navigation"`},{name:`className`,type:`string`,optional:!0},{name:`listClassName`,type:`string`,optional:!0},{name:`itemClassName`,type:`string`,optional:!0},{name:`indicatorClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/bounce-sidebar.preview.tsx`,code:`"use client";

import { useState } from "react";
import { BounceSidebar } from "@/components/vendor/beui/motion/bounce-sidebar";

const destinations = [
  { id: "overview", label: "Overview" },
  { id: "components", label: "Components" },
  { id: "motion", label: "Motion" },
  { id: "templates", label: "Templates" },
  { id: "changelog", label: "Changelog" },
];

export function BounceSidebarPreview() {
  const [active, setActive] = useState("components");

  return (
    <div className="flex min-h-[360px] w-full items-center justify-center">
      <BounceSidebar
        items={destinations}
        value={active}
        onValueChange={setActive}
        ariaLabel="beUI sections"
        className="w-52"
        listClassName="w-full"
        itemClassName="text-base"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`A vertical sidebar whose active dot jumps between destinations on a curved, spring-loaded path. 主要导出：BounceSidebar。 最小用法：<BounceSidebar items={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/sidebar.md。属性与示例见 packages/registry/docs/vendor/beui-bounce-sidebar.md。`,upstream:`https://beui.dev/r/bounce-sidebar.json`};export{e as default};