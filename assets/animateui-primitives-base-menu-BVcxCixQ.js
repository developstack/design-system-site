var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/menu.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-hooks-use-data-state`,`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-effects-highlight`],preview:{kind:`example`,module:`examples/animateui/primitives-base-menu.tsx`,export:`BaseMenuDemo`,example:`https://animate-ui.com/r/demo-primitives-base-menu.json`,props:{side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`菜单（基于 Base UI 的原语）。`,importLine:`import { Menu } from "@/components/vendor/animateui/primitives/base/menu";`,usage:`<Menu />`,exports:[{name:`Menu`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:15,names:[`actionsRef`,`children`,`closeParentOnEsc`,`defaultOpen`,`defaultTriggerId`,`disabled`,`handle`,`highlightItemOnHover`,`loopFocus`,`modal`,`onOpenChange`,`onOpenChangeComplete`]}]},{name:`MenuTrigger`,kind:`component`,propsType:`MenuTriggerProps<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:11,names:[`children`,`className`,`closeDelay`,`delay`,`disabled`,`handle`,`nativeButton`,`openOnHover`,`payload`,`render`,`style`]}]},{name:`MenuPortal`,kind:`component`,propsType:`MenuPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`MenuPositioner`,kind:`component`,propsType:`Omit<MenuPositionerProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:15,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`positionMethod`,`render`,`side`]}]},{name:`MenuPopup`,kind:`component`,propsType:`MenuPopupProps`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:5,names:[`children`,`className`,`finalFocus`,`id`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuArrow`,kind:`component`,propsType:`Omit<MenuArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`MenuItem`,kind:`component`,propsType:`MenuItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:8,names:[`className`,`closeOnClick`,`disabled`,`id`,`label`,`nativeButton`,`onClick`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuCheckboxItem`,kind:`component`,propsType:`MenuCheckboxItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`@base-ui/react`,count:11,names:[`checked`,`className`,`closeOnClick`,`defaultChecked`,`disabled`,`id`,`label`,`nativeButton`,`onCheckedChange`,`onClick`,`style`]}]},{name:`MenuCheckboxItemIndicator`,kind:`component`,propsType:`MenuCheckboxItemIndicatorProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:3,names:[`className`,`keepMounted`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuRadioGroup`,kind:`component`,propsType:`Omit<MenuRadioGroupProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:8,names:[`children`,`className`,`defaultValue`,`disabled`,`onValueChange`,`render`,`style`,`value`]}]},{name:`MenuRadioItem`,kind:`component`,propsType:`MenuRadioItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`closeOnClick`,`disabled`,`id`,`label`,`nativeButton`,`onClick`,`style`,`value`]}]},{name:`MenuRadioItemIndicator`,kind:`component`,propsType:`MenuRadioItemIndicatorProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:3,names:[`className`,`keepMounted`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuGroup`,kind:`component`,propsType:`Omit<MenuGroupProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:4,names:[`children`,`className`,`render`,`style`]}]},{name:`MenuGroupLabel`,kind:`component`,propsType:`Omit<MenuGroupLabelProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`MenuSeparator`,kind:`component`,propsType:`Omit<SeparatorProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`orientation`,`render`,`style`]}]},{name:`MenuShortcut`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`MenuHighlight`,kind:`component`,propsType:`MenuHighlightProps`,inline:!1,union:!1,props:[{name:`animateOnHover`,type:`boolean`,optional:!0},{name:`as`,type:`"div"`,optional:!0},{name:`ref`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`mode`,type:`"children" | "parent"`,optional:!0},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0,default:`{ type: 'spring', stiffness: 350, damping: 35 }`},{name:`click`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1}],inherited:[]},{name:`MenuHighlightItem`,kind:`component`,propsType:`MenuHighlightItemProps`,inline:!1,union:!1,props:[{name:`as`,type:`"div"`,optional:!0},{name:`children`,type:`ReactNode & ReactElement<unknown, string | JSXElementConstructor<any>>`,optional:!1},{name:`id`,type:`string`,optional:!0},{name:`value`,type:`string`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0},{name:`activeClassName`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`asChild`,type:`boolean`,optional:!0},{name:`forceUpdateBounds`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`MenuSubmenu`,kind:`component`,propsType:`MenuSubmenuRootProps`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:11,names:[`actionsRef`,`children`,`closeParentOnEsc`,`defaultOpen`,`disabled`,`highlightItemOnHover`,`loopFocus`,`onOpenChange`,`onOpenChangeComplete`,`open`,`orientation`]}]},{name:`MenuSubmenuTrigger`,kind:`component`,propsType:`MenuSubmenuTriggerProps`,inline:!1,union:!1,props:[{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Whether the component should ignore user interaction.`}],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:9,names:[`className`,`closeDelay`,`delay`,`id`,`label`,`nativeButton`,`onClick`,`openOnHover`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`useMenuActiveValue`,kind:`hook`,signature:`() => MenuActiveValueContextType`,params:[],requiredParams:0},{name:`useMenu`,kind:`hook`,signature:`() => MenuContextType`,params:[],requiredParams:0},{name:`MenuProps`,kind:`type`},{name:`MenuTriggerProps`,kind:`type`},{name:`MenuPortalProps`,kind:`type`},{name:`MenuPositionerProps`,kind:`type`},{name:`MenuPopupProps`,kind:`type`},{name:`MenuArrowProps`,kind:`type`},{name:`MenuItemProps`,kind:`type`},{name:`MenuCheckboxItemProps`,kind:`type`},{name:`MenuCheckboxItemIndicatorProps`,kind:`type`},{name:`MenuRadioItemProps`,kind:`type`},{name:`MenuRadioItemIndicatorProps`,kind:`type`},{name:`MenuRadioGroupProps`,kind:`type`},{name:`MenuGroupProps`,kind:`type`},{name:`MenuGroupLabelProps`,kind:`type`},{name:`MenuSeparatorProps`,kind:`type`},{name:`MenuShortcutProps`,kind:`type`},{name:`MenuHighlightProps`,kind:`type`},{name:`MenuHighlightItemProps`,kind:`type`},{name:`MenuSubmenuProps`,kind:`type`},{name:`MenuSubmenuTriggerProps`,kind:`type`},{name:`MenuActiveValueContextType`,kind:`type`},{name:`MenuContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-menu.json`,code:`'use client';

import {
  ChevronRight,
  CreditCard,
  Keyboard,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from 'lucide-react';

import {
  Menu,
  MenuArrow,
  MenuGroup,
  MenuGroupLabel,
  MenuHighlight,
  MenuHighlightItem,
  MenuItem,
  MenuPortal,
  MenuPositioner,
  MenuPopup,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from '@/components/vendor/animateui/primitives/base/menu';

const itemClassName =
  'relative z-[1] focus:text-accent-foreground select-none flex items-center gap-2 px-2 py-1.5 text-sm outline-none [&_svg]:size-4 [&_span]:data-[slot=menu-shortcut]:text-xs [&_span]:data-[slot=menu-shortcut]:ml-auto';
const separatorClassName = '-mx-1 my-1 h-px bg-border';

interface BaseMenuDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

export const BaseMenuDemo = ({
  side,
  sideOffset,
  align,
  alignOffset,
}: BaseMenuDemoProps) => {
  return (
    <Menu>
      <MenuTrigger>Open</MenuTrigger>
      <MenuPortal>
        <MenuPositioner
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className="z-50"
        >
          <MenuPopup className="w-56 max-h-[var(--available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden border bg-background p-1 outline-none">
            <MenuArrow />
            <MenuHighlight className="absolute inset-0 bg-accent z-0">
              <MenuGroup>
                <MenuGroupLabel className="px-2 py-1.5 text-sm font-semibold">
                  My Account
                </MenuGroupLabel>
                <MenuSeparator className={separatorClassName} />
                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <User />
                    <span>Profile</span>
                    <MenuShortcut>⇧⌘P</MenuShortcut>
                  </MenuItem>
                </MenuHighlightItem>
                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <CreditCard />
                    <span>Billing</span>
                    <MenuShortcut>⌘B</MenuShortcut>
                  </MenuItem>
                </MenuHighlightItem>
                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <Settings />
                    <span>Settings</span>
                    <MenuShortcut>⌘S</MenuShortcut>
                  </MenuItem>
                </MenuHighlightItem>
                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <Keyboard />
                    <span>Keyboard shortcuts</span>
                    <MenuShortcut>⌘K</MenuShortcut>
                  </MenuItem>
                </MenuHighlightItem>
              </MenuGroup>

              <MenuSeparator className={separatorClassName} />

              <MenuGroup>
                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <Users />
                    <span>Team</span>
                  </MenuItem>
                </MenuHighlightItem>
                <MenuSubmenu>
                  <MenuHighlightItem>
                    <MenuSubmenuTrigger className={itemClassName}>
                      <UserPlus />
                      <span>Invite users</span>
                      <ChevronRight data-chevron className="ml-auto size-4" />
                    </MenuSubmenuTrigger>
                  </MenuHighlightItem>
                  <MenuPortal>
                    <MenuPositioner className="z-50">
                      <MenuPopup className="overflow-hidden min-w-[8rem] overflow-y-auto overflow-x-hidden border bg-background p-1 z-50">
                        <MenuHighlightItem>
                          <MenuItem className={itemClassName}>
                            <Mail />
                            <span>Email</span>
                          </MenuItem>
                        </MenuHighlightItem>
                        <MenuHighlightItem>
                          <MenuItem className={itemClassName}>
                            <MessageSquare />
                            <span>Message</span>
                          </MenuItem>
                        </MenuHighlightItem>
                        <MenuSeparator className={separatorClassName} />
                        <MenuHighlightItem>
                          <MenuItem className={itemClassName}>
                            <PlusCircle />
                            <span>More...</span>
                          </MenuItem>
                        </MenuHighlightItem>
                      </MenuPopup>
                    </MenuPositioner>
                  </MenuPortal>
                </MenuSubmenu>

                <MenuHighlightItem>
                  <MenuItem className={itemClassName}>
                    <Plus />
                    <span>New Team</span>
                    <MenuShortcut>⌘+T</MenuShortcut>
                  </MenuItem>
                </MenuHighlightItem>
              </MenuGroup>

              <MenuSeparator className={separatorClassName} />

              <MenuHighlightItem>
                <MenuItem className={itemClassName}>
                  <LogOut />
                  <span>Log out</span>
                  <MenuShortcut>⇧⌘Q</MenuShortcut>
                </MenuItem>
              </MenuHighlightItem>
            </MenuHighlight>
          </MenuPopup>
        </MenuPositioner>
      </MenuPortal>
    </Menu>
  );
};
`},exampleNote:null}},docsField:`A list of actions in a dropdown, enhanced with keyboard navigation. 主要导出：Menu、MenuTrigger、MenuPortal、MenuPositioner 等。 最小用法：<Menu />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/menu.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-menu.md。`,upstream:`https://animate-ui.com/r/primitives-base-menu.json`};export{e as default};