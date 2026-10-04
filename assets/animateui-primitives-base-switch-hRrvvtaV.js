var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/switch.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-hooks-use-controlled-state`,`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-base-switch.tsx`,export:`BaseSwitchDemo`,example:`https://animate-ui.com/r/demo-primitives-base-switch.json`},note:{summaryZh:`开关（基于 Base UI 的原语）。`,importLine:`import { Switch } from "@/components/vendor/animateui/primitives/base/switch";`,usage:`<Switch />`,exports:[{name:`Switch`,kind:`component`,propsType:`SwitchProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:273,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@base-ui/react`,count:15,names:[`checked`,`className`,`defaultChecked`,`disabled`,`form`,`id`,`inputRef`,`name`,`nativeButton`,`onCheckedChange`,`readOnly`,`required`]},{package:`映射类型生成，来源无法定位`,count:9,names:[]}]},{name:`SwitchThumb`,kind:`component`,propsType:`SwitchThumbProps`,inline:!1,union:!1,props:[{name:`pressedAnimation`,type:`boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`motion-dom`,count:58,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:3,names:[]},{package:`@base-ui/react`,count:2,names:[`className`,`style`]}]},{name:`SwitchIcon`,kind:`component`,propsType:`SwitchIconProps`,inline:!1,union:!1,props:[{name:`position`,type:`SwitchIconPosition`,optional:!1},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', bounce: 0 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`useSwitch`,kind:`hook`,signature:`() => SwitchContextType`,params:[],requiredParams:0},{name:`SwitchProps`,kind:`type`},{name:`SwitchThumbProps`,kind:`type`},{name:`SwitchIconProps`,kind:`type`},{name:`SwitchIconPosition`,kind:`type`},{name:`SwitchContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-switch.json`,code:`import { Switch, SwitchThumb } from '@/components/vendor/animateui/primitives/base/switch';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export const BaseSwitchDemo = () => {
  return (
    <Label className="flex items-center gap-x-3">
      <Switch
        className={cn(
          'relative flex p-0.5 h-6 w-10 items-center justify-start rounded-full border transition-colors',
          'data-[checked]:bg-primary data-[checked]:justify-end',
        )}
        defaultChecked
      >
        <SwitchThumb
          className="rounded-full bg-accent h-full aspect-square"
          pressedAnimation={{ width: 22 }}
        />
      </Switch>
      Airplane mode
    </Label>
  );
};
`},exampleNote:null}},docsField:`A control that indicates whether a setting is on or off. 主要导出：Switch、SwitchThumb、SwitchIcon、useSwitch。 最小用法：<Switch />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/switch.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-switch.md。`,upstream:`https://animate-ui.com/r/primitives-base-switch.json`};export{e as default};