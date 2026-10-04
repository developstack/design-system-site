var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/breadcrumb.tsx`,`components/vendor/beui/motion/popover-morph.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/breadcrumb.tsx`,export:`BreadcrumbPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/breadcrumb.preview.tsx`},note:{summaryZh:`面包屑（动效组件）。`,importLine:`import { Breadcrumb } from "@/components/vendor/beui/motion/breadcrumb";`,usage:`<Breadcrumb />`,exports:[{name:`BreadcrumbProps`,kind:`type`},{name:`Breadcrumb`,doc:`A navigation landmark. Keep it mounted while the route changes.`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`BreadcrumbListProps`,kind:`type`},{name:`BreadcrumbList`,doc:`Pass keyed BreadcrumbItems directly so entering and leaving routes animate.`,kind:`component`,propsType:`BreadcrumbListProps`,inline:!1,union:!1,props:[{name:`maxItems`,type:`number`,optional:!0,default:`4`,doc:`Maximum visible slots, including the ellipsis. Minimum 3; Infinity disables collapsing.`},{name:`overflowLabel`,type:`string`,optional:!0,default:`"Show hidden paths"`,doc:`Accessible label for the hidden ancestor disclosure.`}],inherited:[{package:`@types/react`,count:283,names:[]}]},{name:`BreadcrumbItemProps`,kind:`type`},{name:`BreadcrumbItem`,doc:`Use a stable route key; put its optional separator inside this item.`,kind:`component`,propsType:`Omit<BreadcrumbItemProps, "ref"> & RefAttributes<HTMLLIElement>`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`BreadcrumbLinkProps`,kind:`type`},{name:`BreadcrumbLink`,kind:`component`,propsType:`BreadcrumbLinkProps`,inline:!1,union:!1,props:[{name:`render`,type:`(props: DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => ReactElem…`,optional:!0,doc:`Render your router's Link, spreading these props onto it.`}],inherited:[{package:`@types/react`,count:288,names:[]}]},{name:`BreadcrumbPageProps`,kind:`type`},{name:`BreadcrumbPage`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`BreadcrumbSeparatorProps`,kind:`type`},{name:`BreadcrumbSeparator`,doc:`Decorative separator, placed inside the following BreadcrumbItem.`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`BreadcrumbEllipsisProps`,kind:`type`},{name:`BreadcrumbEllipsis`,doc:`Hover disclosure with click/touch toggle and keyboard access to ancestor links.`,kind:`component`,propsType:`BreadcrumbEllipsisProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1,doc:`Hidden BreadcrumbItems, in path order.`},{name:`className`,type:`string`,optional:!0},{name:`label`,type:`string`,optional:!0,default:`"Show hidden paths"`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/breadcrumb.preview.tsx`,code:`"use client";

import { ArrowUpRight, Folder, Home } from "lucide-react";
import { useLayoutEffect, useRef, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/vendor/beui/motion/breadcrumb";

const PATH = ["Workspace", "Projects", "Website", "Design system", "Components", "Navigation", "Breadcrumb"];

export function BreadcrumbPreview() {
  const [depth, setDepth] = useState(5);
  const currentRef = useRef<HTMLSpanElement>(null);
  const restoreFocus = useRef<number | null>(null);

  useLayoutEffect(() => {
    if (restoreFocus.current === depth) {
      currentRef.current?.focus();
      restoreFocus.current = null;
    }
  }, [depth]);

  return (
    <div className="w-full max-w-lg space-y-8 px-4">
      <Breadcrumb className="min-h-[4.25rem] sm:min-h-8">
        <BreadcrumbList maxItems={3}>
          {PATH.slice(0, depth + 1).map((label, index) => (
            <BreadcrumbItem key={label}>
              {index > 0 && <BreadcrumbSeparator />}
              {index === depth ? (
                <BreadcrumbPage ref={currentRef} tabIndex={-1}>
                  {index === 0 && <Home aria-hidden="true" />}
                  {label}
                </BreadcrumbPage>
              ) : (
                <BreadcrumbLink
                  href={\`#\${label.toLowerCase()}\`}
                  onClick={(event) => {
                    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
                    event.preventDefault();
                    restoreFocus.current = index;
                    setDepth(index);
                  }}
                >
                  {index === 0 && <Home aria-hidden="true" />}
                  {label}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="min-h-20 border-t border-border/60 pt-5">
        {depth < PATH.length - 1 ? (
          <button
            type="button"
            onClick={() => {
              restoreFocus.current = depth + 1;
              setDepth((value) => Math.min(value + 1, PATH.length - 1));
            }}
            className="flex w-full items-center gap-3 rounded-lg border border-border/60 px-4 py-3 text-start text-sm transition-colors hover:bg-muted/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Folder aria-hidden="true" className="size-4 text-muted-foreground" />
            <span className="flex-1">{PATH[depth + 1]}</span>
            <ArrowUpRight aria-hidden="true" className="size-3.5 text-muted-foreground" />
          </button>
        ) : (
          <p className="py-3 text-center text-sm text-muted-foreground">Choose a parent path to go back.</p>
        )}
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`Composable breadcrumb navigation with soft path transitions, a hoverable overflow dropdown for long trails, custom separators, a… 主要导出：Breadcrumb、BreadcrumbList、BreadcrumbItem、BreadcrumbLink 等。 最小用法：<Breadcrumb />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-breadcrumb.md。`,upstream:`https://beui.dev/r/breadcrumb.json`};export{e as default};