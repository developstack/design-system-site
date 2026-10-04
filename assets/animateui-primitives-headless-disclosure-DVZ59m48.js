var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/headless/disclosure.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@headlessui/react`,`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`],preview:{kind:`example`,module:`examples/animateui/primitives-headless-disclosure.tsx`,export:`HeadlessDisclosureDemo`,example:`https://animate-ui.com/r/demo-primitives-headless-disclosure.json`,props:{keepRendered:!1}},note:{summaryZh:`折叠面板（基于 Headless UI 的原语）。`,importLine:`import { Disclosure } from "@/components/vendor/animateui/primitives/headless/disclosure";`,usage:`<Disclosure />`,exports:[{name:`Disclosure`,kind:`component`,propsType:`DisclosureProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: DisclosureRenderPropArg) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`defaultOpen`,`refName`]}]},{name:`DisclosureButton`,kind:`component`,propsType:`DisclosureButtonProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0}],inherited:[{package:`@types/react`,count:231,names:[]},{package:`@headlessui/react`,count:4,names:[`autoFocus`,`children`,`disabled`,`refName`]}]},{name:`DisclosurePanel`,kind:`component`,propsType:`DisclosurePanelProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0,default:`motion.div`},{name:`keepRendered`,type:`boolean`,optional:!0,default:`false`},{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ duration: 0.35, ease: 'easeInOut' }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@headlessui/react`,count:3,names:[`children`,`static`,`unmount`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`useDisclosure`,kind:`hook`,signature:`() => DisclosureContextType`,params:[],requiredParams:0},{name:`DisclosureProps`,kind:`type`},{name:`DisclosureButtonProps`,kind:`type`},{name:`DisclosurePanelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-headless-disclosure.json`,code:`import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@/components/vendor/animateui/primitives/headless/disclosure';

type HeadlessDisclosureDemoProps = {
  keepRendered: boolean;
};

export const HeadlessDisclosureDemo = ({
  keepRendered = false,
}: HeadlessDisclosureDemoProps) => {
  return (
    <Disclosure className="w-[350px]" as="div">
      <DisclosureButton className="px-3 py-1.5 border-b text-start w-[200px]">
        Recovery keys
      </DisclosureButton>
      <DisclosurePanel keepRendered={keepRendered}>
        <div className="pt-1.5 px-3 text-sm text-muted-foreground">
          <div>alien-bean-pasta</div>
          <div>wild-irish-burrito</div>
          <div>horse-battery-staple</div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
`},exampleNote:null}},docsField:`A simple, accessible foundation for building c… 主要导出：Disclosure、DisclosureButton、DisclosurePanel、useDisclosure。 最小用法：<Disclosure />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/collapsible.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-primitives-headless-disclosure.md。`,upstream:`https://animate-ui.com/r/primitives-headless-disclosure.json`};export{e as default};