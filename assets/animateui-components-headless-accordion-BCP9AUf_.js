var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/headless/accordion.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[`@developstack/animateui-primitives-headless-disclosure`],preview:{kind:`example`,module:`examples/animateui/components-headless-accordion.tsx`,export:`HeadlessAccordionDemo`,example:`https://animate-ui.com/r/demo-components-headless-accordion.json`,props:{showArrow:!0,keepRendered:!1}},note:{summaryZh:`手风琴折叠面板（基于 Headless UI 的组件）。`,importLine:`import { Accordion } from "@/components/vendor/animateui/components/headless/accordion";`,usage:`<Accordion />`,exports:[{name:`Accordion`,kind:`component`,propsType:`AccordionProps<TTag>`,inline:!1,union:!1,props:[],inherited:[]},{name:`AccordionItem`,kind:`component`,propsType:`AccordionItemProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`className`,type:`string | ((((bag: DisclosureRenderPropArg) => string) | PropsOf<TTag>["className"]) & string)`,optional:!0}],inherited:[{package:`@types/react`,count:233,names:[]},{package:`@headlessui/react`,count:3,names:[`children`,`defaultOpen`,`refName`]}]},{name:`AccordionButton`,kind:`component`,propsType:`AccordionButtonProps`,inline:!1,union:!1,props:[{name:`showArrow`,type:`boolean`,optional:!0,default:`true`},{name:`as`,type:`"button"`,optional:!0}],inherited:[{package:`@types/react`,count:283,names:[]},{package:`@headlessui/react`,count:5,names:[`autoFocus`,`children`,`className`,`disabled`,`refName`]}]},{name:`AccordionPanel`,kind:`component`,propsType:`AccordionPanelProps<TTag>`,inline:!1,union:!1,props:[{name:`as`,type:`TTag`,optional:!0},{name:`keepRendered`,type:`boolean`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`@headlessui/react`,count:3,names:[`children`,`static`,`unmount`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`AccordionProps`,kind:`type`},{name:`AccordionItemProps`,kind:`type`},{name:`AccordionButtonProps`,kind:`type`},{name:`AccordionPanelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-headless-accordion.json`,code:`import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@/components/vendor/animateui/components/headless/accordion';

const ITEMS = [
  {
    title: 'What is Animate UI?',
    content:
      'Animate UI is an open-source distribution of React components built with TypeScript, Tailwind CSS, and Motion.',
  },
  {
    title: 'How is it different from other libraries?',
    content:
      'Instead of installing via NPM, you copy and paste the components directly. This gives you full control to modify or customize them as needed.',
  },
  {
    title: 'Is Animate UI free to use?',
    content:
      'Absolutely! Animate UI is fully open-source. You can use, modify, and adapt it to fit your needs.',
  },
];

type HeadlessAccordionDemoProps = {
  keepRendered?: boolean;
  showArrow?: boolean;
};

export const HeadlessAccordionDemo = ({
  keepRendered = false,
  showArrow = true,
}: HeadlessAccordionDemoProps) => {
  return (
    <Accordion className="max-w-[400px] w-full">
      {ITEMS.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionButton showArrow={showArrow}>{item.title}</AccordionButton>
          <AccordionPanel keepRendered={keepRendered}>
            {item.content}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
`},exampleNote:null}},docsField:`A vertically stacked set of interactive headings… 主要导出：Accordion、AccordionItem、AccordionButton、AccordionPanel。 最小用法：<Accordion />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/accordion.md。属性与示例见 packages/registry/docs/vendor/animateui-components-headless-accordion.md。`,upstream:`https://animate-ui.com/r/components-headless-accordion.json`};export{e as default};