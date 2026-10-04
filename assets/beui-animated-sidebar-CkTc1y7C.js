var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/animated-sidebar.tsx`,`components/vendor/beui/motion/shared-layout-bg.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/animated-sidebar.tsx`,export:`AnimatedSidebarPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-sidebar.preview.tsx`},note:{summaryZh:`侧边栏（动效组件）。`,importLine:`import { AnimatedSidebar } from "@/components/vendor/beui/motion/animated-sidebar";`,usage:`<AnimatedSidebar />`,exports:[{name:`useAnimatedSidebar`,kind:`hook`,signature:`() => AnimatedSidebarContextValue`,params:[],requiredParams:0},{name:`AnimatedSidebarProviderProps`,kind:`type`},{name:`AnimatedSidebarProvider`,kind:`component`,propsType:`AnimatedSidebarProviderProps`,inline:!1,union:!1,props:[{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`true`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`openMobile`,type:`boolean`,optional:!0},{name:`defaultOpenMobile`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenMobileChange`,type:`(open: boolean) => void`,optional:!0},{name:`style`,type:`SidebarProviderStyle`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`AnimatedSidebarProps`,kind:`type`},{name:`AnimatedSidebar`,kind:`component`,propsType:`Omit<AnimatedSidebarProps, "ref"> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`side`,type:`SidebarSide`,optional:!0,default:`"left"`},{name:`variant`,type:`SidebarVariant`,optional:!0,default:`"sidebar"`},{name:`collapsible`,type:`SidebarCollapsible`,optional:!0,default:`"icon"`},{name:`ariaLabel`,type:`string`,optional:!0,default:`"Sidebar"`},{name:`panelClassName`,type:`string`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:272,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`AnimatedSidebarTriggerProps`,kind:`type`},{name:`AnimatedSidebarTrigger`,kind:`component`,propsType:`AnimatedSidebarTriggerProps & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:289,names:[]}]},{name:`AnimatedSidebarCloseProps`,kind:`type`},{name:`AnimatedSidebarClose`,kind:`component`,propsType:`AnimatedSidebarCloseProps & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:289,names:[]}]},{name:`AnimatedSidebarRailProps`,kind:`type`},{name:`AnimatedSidebarRail`,kind:`component`,propsType:`AnimatedSidebarRailProps & RefAttributes<HTMLButtonElement>`,inline:!1,union:!1,props:[{name:`type`,type:`"button" | "reset" | "submit"`,optional:!0,default:`"button"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:289,names:[]}]},{name:`AnimatedSidebarInsetProps`,kind:`type`},{name:`AnimatedSidebarInset`,kind:`component`,propsType:`Omit<AnimatedSidebarInsetProps, "ref"> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:272,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`AnimatedSidebarHeader`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarContent`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarFooter`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarGroup`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarGroupLabel`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarGroupContent`,kind:`component`,propsType:`HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarMenu`,kind:`component`,propsType:`HTMLAttributes<HTMLUListElement> & RefAttributes<HTMLUListElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`AnimatedSidebarMenuItem`,kind:`component`,propsType:`Omit<HTMLMotionProps<"li">, "ref"> & RefAttributes<HTMLLIElement>`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`AnimatedSidebarMenuSubProps`,kind:`type`},{name:`AnimatedSidebarMenuSub`,kind:`component`,propsType:`Omit<AnimatedSidebarMenuSubProps, "ref"> & RefAttributes<HTMLUListElement>`,inline:!1,union:!1,props:[{name:`open`,type:`boolean`,optional:!1},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:272,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`AnimatedSidebarMenuSubItem`,kind:`component`,propsType:`Omit<HTMLMotionProps<"li">, "ref"> & RefAttributes<HTMLLIElement>`,inline:!1,union:!1,props:[],inherited:[{package:`映射类型生成，来源无法定位`,count:273,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@types/react`,count:2,names:[]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`AnimatedSidebarMenuSubButtonProps`,kind:`type`},{name:`AnimatedSidebarMenuSubButton`,kind:`component`,propsType:`AnimatedSidebarMenuSubButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`icon`,type:`ReactNode`,optional:!0},{name:`href`,type:`string`,optional:!0},{name:`isActive`,type:`boolean`,optional:!0,default:`false`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`closeOnSelect`,type:`boolean`,optional:!0,default:`true`},{name:`target`,type:`"_blank" | "_parent" | "_self" | "_top"`,optional:!0},{name:`rel`,type:`string`,optional:!0},{name:`onSelect`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`AnimatedSidebarMenuButtonProps`,kind:`type`},{name:`AnimatedSidebarMenuButton`,kind:`component`,propsType:`AnimatedSidebarMenuButtonProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1},{name:`icon`,type:`ReactNode`,optional:!0},{name:`badge`,type:`ReactNode`,optional:!0},{name:`href`,type:`string`,optional:!0},{name:`isActive`,type:`boolean`,optional:!0,default:`false`},{name:`ariaExpanded`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`closeOnSelect`,type:`boolean`,optional:!0},{name:`target`,type:`"_blank" | "_parent" | "_self" | "_top"`,optional:!0},{name:`rel`,type:`string`,optional:!0},{name:`onSelect`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/animated-sidebar.preview.tsx`,code:`"use client";

import {
  Building2,
  ChevronRight,
  ChevronsUpDown,
  CircleUserRound,
  Command,
  Inbox,
  LayoutGrid,
  ListTodo,
  NotebookTabs,
  PanelLeft,
  Search,
  Sparkles,
  Target,
  Workflow,
  X,
} from "lucide-react";
import { useState } from "react";
import {
  AnimatedSidebar,
  AnimatedSidebarClose,
  AnimatedSidebarContent,
  AnimatedSidebarFooter,
  AnimatedSidebarGroup,
  AnimatedSidebarGroupContent,
  AnimatedSidebarGroupLabel,
  AnimatedSidebarHeader,
  AnimatedSidebarInset,
  AnimatedSidebarMenu,
  AnimatedSidebarMenuButton,
  AnimatedSidebarMenuItem,
  AnimatedSidebarMenuSub,
  AnimatedSidebarMenuSubButton,
  AnimatedSidebarMenuSubItem,
  AnimatedSidebarProvider,
  AnimatedSidebarRail,
  AnimatedSidebarTrigger,
} from "@/components/vendor/beui/motion/animated-sidebar";

const destinations = [
  {
    label: "People",
    icon: CircleUserRound,
    children: ["All people", "Recent activity", "Segments"],
  },
  {
    label: "Companies",
    icon: Building2,
  },
  {
    label: "Opportunities",
    icon: Target,
    children: ["Pipeline", "Forecast", "Closed deals"],
  },
  {
    label: "Tasks",
    icon: ListTodo,
  },
  {
    label: "Notes",
    icon: NotebookTabs,
  },
  {
    label: "Workflows",
    icon: Workflow,
    children: ["Automations", "Runs", "Templates"],
  },
  {
    label: "Dashboard",
    icon: LayoutGrid,
  },
] satisfies {
  label: string;
  icon: typeof CircleUserRound;
  children?: string[];
}[];

export function AnimatedSidebarPreview() {
  const [active, setActive] = useState("People");
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div className="w-full px-0 py-2 sm:p-3">
      <AnimatedSidebarProvider className="h-[720px] min-h-0 overflow-hidden rounded-2xl border border-foreground/[0.08] bg-background">
        <AnimatedSidebar
          ariaLabel="Solace workspace"
          collapsible="icon"
          className="min-h-0"
          panelClassName="h-full border-foreground/[0.08]"
        >
          <AnimatedSidebarHeader className="p-3 pb-2">
            <div className="flex min-h-11 items-center gap-3 overflow-hidden px-2">
              <div className="grid size-7 shrink-0 place-items-center rounded-lg bg-foreground text-background">
                <Command aria-hidden="true" className="size-4" />
              </div>
              <button
                type="button"
                className="flex min-w-0 flex-1 items-center gap-2 rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-ring group-data-[state=collapsed]/sidebar:hidden"
              >
                <span className="truncate text-sm font-semibold text-foreground">
                  Acme Inc
                </span>
                <ChevronsUpDown
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-muted-foreground"
                />
              </button>
              <AnimatedSidebarClose className="ml-auto text-muted-foreground hover:bg-muted md:hidden">
                <X aria-hidden="true" className="size-4" />
              </AnimatedSidebarClose>
            </div>
          </AnimatedSidebarHeader>

          <AnimatedSidebarContent className="px-2 pt-1">
            <AnimatedSidebarGroup className="pb-2">
              <AnimatedSidebarGroupContent>
                <AnimatedSidebarMenu>
                  <AnimatedSidebarMenuItem>
                    <AnimatedSidebarMenuButton
                      icon={<Search className="size-4" />}
                      onSelect={() => setActive("Search")}
                    >
                      Search
                    </AnimatedSidebarMenuButton>
                  </AnimatedSidebarMenuItem>
                  <AnimatedSidebarMenuItem>
                    <AnimatedSidebarMenuButton
                      icon={<Sparkles className="size-4" />}
                      onSelect={() => setActive("AI Assistant")}
                    >
                      AI Assistant
                    </AnimatedSidebarMenuButton>
                  </AnimatedSidebarMenuItem>
                  <AnimatedSidebarMenuItem>
                    <AnimatedSidebarMenuButton
                      icon={<Inbox className="size-4" />}
                      badge="4"
                      onSelect={() => setActive("Inbox")}
                    >
                      Inbox
                    </AnimatedSidebarMenuButton>
                  </AnimatedSidebarMenuItem>
                </AnimatedSidebarMenu>
              </AnimatedSidebarGroupContent>
            </AnimatedSidebarGroup>

            <AnimatedSidebarGroup className="pt-1">
              <AnimatedSidebarGroupLabel>
                Workspaces
              </AnimatedSidebarGroupLabel>
              <AnimatedSidebarGroupContent>
                <AnimatedSidebarMenu>
                  {destinations.map(({ label, icon: Icon, children }) => (
                    <AnimatedSidebarMenuItem key={label}>
                      <AnimatedSidebarMenuButton
                        isActive={
                          active === label ||
                          children?.includes(active) === true
                        }
                        ariaExpanded={
                          children ? openSection === label : undefined
                        }
                        icon={<Icon className="size-4" />}
                        onSelect={() => {
                          setOpenSection((current) => {
                            if (!children) {
                              setActive(label);
                              return null;
                            }
                            return current === label ? null : label;
                          });
                        }}
                      >
                        {label}
                      </AnimatedSidebarMenuButton>
                      {children ? (
                        <AnimatedSidebarMenuSub
                          open={openSection === label}
                        >
                          {children.map((child) => (
                            <AnimatedSidebarMenuSubItem key={child}>
                              <AnimatedSidebarMenuSubButton
                                isActive={active === child}
                                onSelect={() => setActive(child)}
                              >
                                {child}
                              </AnimatedSidebarMenuSubButton>
                            </AnimatedSidebarMenuSubItem>
                          ))}
                        </AnimatedSidebarMenuSub>
                      ) : null}
                    </AnimatedSidebarMenuItem>
                  ))}
                </AnimatedSidebarMenu>
              </AnimatedSidebarGroupContent>
            </AnimatedSidebarGroup>
          </AnimatedSidebarContent>

          <AnimatedSidebarFooter className="gap-3 border-none p-3">

            <button
              type="button"
              className="flex min-h-11 w-full items-center gap-3 overflow-hidden rounded-xl p-1 text-left outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#d5ff66] text-xs font-semibold text-[#172000]">
                AS
              </span>
              <span className="min-w-0 flex-1 group-data-[state=collapsed]/sidebar:hidden">
                <span className="block truncate text-sm font-medium text-foreground">
                  Ava Stone
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  ava@solace.app
                </span>
              </span>
              <ChevronRight
                aria-hidden="true"
                className="size-4 shrink-0 text-muted-foreground group-data-[state=collapsed]/sidebar:hidden"
              />
            </button>
          </AnimatedSidebarFooter>

          <AnimatedSidebarRail />
        </AnimatedSidebar>

        <AnimatedSidebarInset className="min-h-0 bg-background">
          <header className="flex h-16 shrink-0 items-center gap-3 border-border border-b px-4">
            <AnimatedSidebarTrigger className="text-muted-foreground transition-colors hover:bg-muted hover:text-foreground">
              <PanelLeft aria-hidden="true" className="size-4" />
            </AnimatedSidebarTrigger>
            <div className="h-5 w-px bg-border" />
            <p className="text-sm font-medium text-foreground">{active}</p>
          </header>

          <div className="flex min-h-0 flex-1 flex-col justify-between overflow-hidden p-5 sm:p-7">
            <div>
              <p className="text-xs font-medium text-muted-foreground">
                Wednesday, July 29
              </p>
              <h3 className="mt-2 max-w-md text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                Good morning, Ava.
              </h3>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                Your workspace stays in place while the navigation folds down
                to a focused icon rail.
              </p>
            </div>

            <div className="flex items-end justify-between border-border border-t pt-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Active view
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  {active}
                </p>
              </div>
              <p className="hidden text-xs text-muted-foreground sm:block">
                Press ⌘B to toggle
              </p>
            </div>
          </div>
        </AnimatedSidebarInset>
      </AnimatedSidebarProvider>
    </div>
  );
}
`},exampleNote:null}},docsField:`A composable application sidebar with morphing nested navigation that folds into an anim… 主要导出：AnimatedSidebar、useAnimatedSidebar、AnimatedSidebarProvider、AnimatedSidebarTrigger 等。 最小用法：<AnimatedSidebar />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-animated-sidebar.md。`,upstream:`https://beui.dev/r/animated-sidebar.json`};export{e as default};