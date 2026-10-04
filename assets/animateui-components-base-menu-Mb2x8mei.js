var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/menu.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`],registryDependencies:[`@developstack/animateui-primitives-base-menu`],preview:{kind:`example`,module:`examples/animateui/components-base-menu.tsx`,export:`BaseMenuDemo`,example:`https://animate-ui.com/r/demo-components-base-menu.json`,props:{side:`bottom`,sideOffset:4,align:`center`,alignOffset:0}},note:{summaryZh:`菜单（基于 Base UI 的组件）。`,importLine:`import { Menu } from "@/components/vendor/animateui/components/base/menu";`,usage:`<Menu />`,exports:[{name:`Menu`,kind:`component`,propsType:`Props<unknown>`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:15,names:[`actionsRef`,`children`,`closeParentOnEsc`,`defaultOpen`,`defaultTriggerId`,`disabled`,`handle`,`highlightItemOnHover`,`loopFocus`,`modal`,`onOpenChange`,`onOpenChangeComplete`]}]},{name:`MenuTrigger`,kind:`component`,propsType:`MenuTriggerProps<unknown> & RefAttributes<HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@base-ui/react`,count:11,names:[`children`,`className`,`closeDelay`,`delay`,`disabled`,`handle`,`nativeButton`,`openOnHover`,`payload`,`render`,`style`]}]},{name:`MenuPortal`,kind:`component`,propsType:`MenuPortalProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`container`,`render`,`style`]}]},{name:`MenuPanel`,kind:`component`,propsType:`MenuPanelProps`,inline:!1,union:!1,props:[{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`4`,from:`@base-ui/react`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:17,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`children`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`finalFocus`,`id`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuGroup`,kind:`component`,propsType:`Omit<MenuGroupProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:4,names:[`children`,`className`,`render`,`style`]}]},{name:`MenuGroupLabel`,kind:`component`,propsType:`MenuGroupLabelProps`,inline:!1,union:!1,props:[{name:`inset`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`MenuItem`,kind:`component`,propsType:`MenuItemProps`,inline:!1,union:!1,props:[{name:`inset`,type:`boolean`,optional:!0},{name:`variant`,type:`"default" | "destructive"`,optional:!0,default:`'default'`}],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:8,names:[`className`,`closeOnClick`,`disabled`,`id`,`label`,`nativeButton`,`onClick`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuCheckboxItem`,kind:`component`,propsType:`MenuCheckboxItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`@base-ui/react`,count:11,names:[`checked`,`className`,`closeOnClick`,`defaultChecked`,`disabled`,`id`,`label`,`nativeButton`,`onCheckedChange`,`onClick`,`style`]}]},{name:`MenuRadioGroup`,kind:`component`,propsType:`Omit<MenuRadioGroupProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:8,names:[`children`,`className`,`defaultValue`,`disabled`,`onValueChange`,`render`,`style`,`value`]}]},{name:`MenuRadioItem`,kind:`component`,propsType:`MenuRadioItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`@base-ui/react`,count:9,names:[`className`,`closeOnClick`,`disabled`,`id`,`label`,`nativeButton`,`onClick`,`style`,`value`]}]},{name:`MenuSeparator`,kind:`component`,propsType:`Omit<SeparatorProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`orientation`,`render`,`style`]}]},{name:`MenuShortcut`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`MenuArrow`,kind:`component`,propsType:`Omit<MenuArrowProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`MenuSubmenu`,kind:`component`,propsType:`MenuSubmenuRootProps`,inline:!1,union:!1,props:[],inherited:[{package:`@base-ui/react`,count:11,names:[`actionsRef`,`children`,`closeParentOnEsc`,`defaultOpen`,`disabled`,`highlightItemOnHover`,`loopFocus`,`onOpenChange`,`onOpenChangeComplete`,`open`,`orientation`]}]},{name:`MenuSubmenuTrigger`,kind:`component`,propsType:`MenuSubmenuTriggerProps`,inline:!1,union:!1,props:[{name:`inset`,type:`boolean`,optional:!0},{name:`children`,type:`((string | number | bigint | boolean | Iterable<ReactNode> | Promise<AwaitedReactNode> | ReactEleme…`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Whether the component should ignore user interaction.`}],inherited:[{package:`@types/react`,count:272,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:9,names:[`className`,`closeDelay`,`delay`,`id`,`label`,`nativeButton`,`onClick`,`openOnHover`,`style`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuSubmenuPanel`,kind:`component`,propsType:`MenuSubmenuPanelProps`,inline:!1,union:!1,props:[{name:`sideOffset`,type:`number | OffsetFunction`,optional:!0,default:`4`,from:`@base-ui/react`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.2 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:17,names:[`align`,`alignOffset`,`anchor`,`arrowPadding`,`children`,`className`,`collisionAvoidance`,`collisionBoundary`,`collisionPadding`,`disableAnchorTracking`,`finalFocus`,`id`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]}]},{name:`MenuProps`,kind:`type`},{name:`MenuTriggerProps`,kind:`type`},{name:`MenuPortalProps`,kind:`type`},{name:`MenuPanelProps`,kind:`type`},{name:`MenuGroupProps`,kind:`type`},{name:`MenuGroupLabelProps`,kind:`type`},{name:`MenuItemProps`,kind:`type`},{name:`MenuCheckboxItemProps`,kind:`type`},{name:`MenuRadioGroupProps`,kind:`type`},{name:`MenuRadioItemProps`,kind:`type`},{name:`MenuSeparatorProps`,kind:`type`},{name:`MenuShortcutProps`,kind:`type`},{name:`MenuArrowProps`,kind:`type`},{name:`MenuSubmenuProps`,kind:`type`},{name:`MenuSubmenuTriggerProps`,kind:`type`},{name:`MenuSubmenuPanelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-menu.json`,code:`import { Button } from '@/components/ui/button';
import {
  Menu,
  MenuTrigger,
  MenuPanel,
  MenuGroup,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuShortcut,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuSubmenuPanel,
} from '@/components/vendor/animateui/components/base/menu';

interface BaseMenuDemoProps {
  side?: 'top' | 'bottom' | 'left' | 'right' | 'inline-start' | 'inline-end';
  sideOffset?: number;
  align?: 'start' | 'center' | 'end';
  alignOffset?: number;
}

export function BaseMenuDemo({
  side,
  sideOffset,
  align,
  alignOffset,
}: BaseMenuDemoProps) {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Open</Button>} />
      <MenuPanel
        className="w-56"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuGroup>
          <MenuGroupLabel>My Account</MenuGroupLabel>
          <MenuItem>
            Profile
            <MenuShortcut>⇧⌘P</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Billing
            <MenuShortcut>⌘B</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Settings
            <MenuShortcut>⌘S</MenuShortcut>
          </MenuItem>
          <MenuItem>
            Keyboard shortcuts
            <MenuShortcut>⌘K</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup>
          <MenuItem>Team</MenuItem>
          <MenuSubmenu>
            <MenuSubmenuTrigger>Invite users</MenuSubmenuTrigger>
            <MenuSubmenuPanel>
              <MenuItem>Email</MenuItem>
              <MenuItem>Message</MenuItem>
              <MenuSeparator />
              <MenuItem>More...</MenuItem>
            </MenuSubmenuPanel>
          </MenuSubmenu>
          <MenuItem>
            New Team
            <MenuShortcut>⌘+T</MenuShortcut>
          </MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuItem>GitHub</MenuItem>
        <MenuItem>Support</MenuItem>
        <MenuItem disabled>API</MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive">
          Log out
          <MenuShortcut>⇧⌘Q</MenuShortcut>
        </MenuItem>
      </MenuPanel>
    </Menu>
  );
}
`},exampleNote:null}},docsField:`A list of actions in a dropdown, enhanced with keyboard navigation. 主要导出：Menu、MenuTrigger、MenuPortal、MenuPanel 等。 最小用法：<Menu />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-base-menu.md。`,upstream:`https://animate-ui.com/r/components-base-menu.json`};export{e as default};