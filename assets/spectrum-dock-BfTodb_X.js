var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/dock.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/dock.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/dock-demo.json`},note:{summaryZh:`程序坞（组件）。`,importLine:`import { Dock } from "@/components/vendor/spectrum/dock";`,usage:`<Dock>…</Dock>`,exports:[{name:`DockProps`,kind:`type`},{name:`DockIconProps`,kind:`type`},{name:`Dock`,kind:`component`,propsType:`DockProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`className`,type:`string`,optional:!0},{name:`magnification`,type:`number`,optional:!0,default:`80`},{name:`distance`,type:`number`,optional:!0,default:`140`},{name:`variant`,type:`"glass" | "normal"`,optional:!0,default:`"normal"`}],inherited:[]},{name:`DockIcon`,kind:`component`,propsType:`DockIconProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`label`,type:`string`,optional:!1},{name:`onClick`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/dock-demo.json`,code:`"use client";

import React from "react";
// import { Dock, DockIcon } from "@/components/vendor/spectrum/dock";
import { Dock, DockIcon } from "@/components/vendor/spectrum/dock";
import {
  Home,
  User,
  Code2,
  FolderGit2,
  BookOpen,
  MessageSquare,
  Settings,
} from "lucide-react";

export default function DockDemo() {
  const links = [
    { icon: <Home className="h-full w-full" />, label: "Home" },
    { icon: <User className="h-full w-full" />, label: "Profile" },
    { icon: <Code2 className="h-full w-full" />, label: "Projects" },
    { icon: <FolderGit2 className="h-full w-full" />, label: "Repositories" },
    { icon: <BookOpen className="h-full w-full" />, label: "Blog" },
    { icon: <MessageSquare className="h-full w-full" />, label: "Contact" },
    { icon: <Settings className="h-full w-full" />, label: "Settings" },
  ];

  return (
    <div className="flex w-full items-center justify-center py-8">
      <Dock variant="normal">
        {links.map((link, idx) => (
          <DockIcon key={idx} label={link.label}>
            {link.icon}
          </DockIcon>
        ))}
      </Dock>
    </div>
  );
}
`},exampleNote:null}},docsField:`A premium macOS-Style Animated Dock Menu component. 主要导出：Dock、DockIcon。 最小用法：<Dock>…</Dock>。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/nav.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-dock.md。`,upstream:`https://ui.spectrumhq.in/r/dock.json`};export{e as default};