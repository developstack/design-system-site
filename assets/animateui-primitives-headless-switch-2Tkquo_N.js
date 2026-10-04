var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/headless/switch.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@headlessui/react`,`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-headless-switch.tsx`,export:`HeadlessSwitchDemo`,example:`https://animate-ui.com/r/demo-primitives-headless-switch.json`},note:{summaryZh:`开关（基于 Headless UI 的原语）。`,importLine:`import { Switch } from "@/components/vendor/animateui/primitives/headless/switch";`,usage:`<Switch />`,exports:[{name:`Switch`,kind:`component`,propsType:`SwitchProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0,default:`motion.button`}],inherited:[{package:`@types/react`,count:227,names:[]},{package:`motion-dom`,count:59,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`映射类型生成，来源无法定位`,count:53,names:[]},{package:`@headlessui/react`,count:12,names:[`autoFocus`,`checked`,`children`,`className`,`defaultChecked`,`disabled`,`form`,`name`,`onChange`,`refName`,`tabIndex`,`value`]}]},{name:`SwitchThumb`,kind:`component`,propsType:`SwitchThumbProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0,default:`motion.div`},{name:`pressedAnimation`,type:`boolean | LegacyAnimationControls | VariantLabels | TargetAndTransition`,optional:!0},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 300, damping: 25 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`SwitchIcon`,kind:`component`,propsType:`SwitchIconProps<TTag>`,inline:!1,union:!1,props:[{name:`position`,type:`SwitchIconPosition`,optional:!1},{name:`as`,type:`TTag`,optional:!0,default:`motion.div`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', bounce: 0 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`SwitchProps`,kind:`type`},{name:`SwitchThumbProps`,kind:`type`},{name:`SwitchIconProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-headless-switch.json`,code:`import { Switch, SwitchThumb } from '@/components/vendor/animateui/primitives/headless/switch';
import { Field, Label } from '@headlessui/react';
import { cn } from '@/lib/utils';

export const HeadlessSwitchDemo = () => {
  return (
    <Field>
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
    </Field>
  );
};
`},exampleNote:null}},docsField:`Switches are a pleasant interface for toggling a value between two states, and offer the same semantics and keyboard navigation as native… 主要导出：Switch、SwitchThumb、SwitchIcon。 最小用法：<Switch />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-headless-switch.md。`,upstream:`https://animate-ui.com/r/primitives-headless-switch.json`};export{e as default};