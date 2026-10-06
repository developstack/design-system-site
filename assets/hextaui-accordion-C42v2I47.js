var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/accordion.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`@base-ui/react@^1.8.0`,`@tabler/icons-react`,`class-variance-authority`,`cn`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/accordion.tsx`,export:`AccordionDemo`,example:`https://hextaui.com/r/accordion-demo.json`},note:{summaryZh:`手风琴折叠面板（通用组件）。`,importLine:`import { Accordion } from "@/components/vendor/hextaui/ui/accordion";`,usage:`<Accordion />`,exports:[{name:`Accordion`,kind:`component`,propsType:`AccordionProps<Value>`,inline:!1,union:!1,props:[{name:`variant`,type:`AccordionVariant`,optional:!0,default:`"default"`},{name:`hiddenUntilFound`,type:`boolean`,optional:!0,default:`true`,doc:'Allows the browser\'s built-in page search to find and expand the panel contents. Overrides the `keepMounted` prop and uses `hidden="until-found"` to hide the element without removing it from the DOM.'}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:11,names:[`className`,`defaultValue`,`disabled`,`keepMounted`,`loopFocus`,`multiple`,`onValueChange`,`orientation`,`render`,`style`,`value`]}]},{name:`AccordionItem`,kind:`component`,propsType:`AccordionItemProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:6,names:[`className`,`disabled`,`onOpenChange`,`render`,`style`,`value`]}]},{name:`AccordionTrigger`,kind:`component`,propsType:`AccordionTriggerProps & { icon?: ReactNode; }`,inline:!1,union:!1,props:[{name:`icon`,type:`ReactNode`,optional:!0}],inherited:[{package:`@types/react`,count:285,names:[]},{package:`@base-ui/react`,count:4,names:[`className`,`nativeButton`,`render`,`style`]}]},{name:`AccordionContent`,kind:`component`,propsType:`Omit<AccordionPanelProps, "className"> & { className?: string | undefined; }`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:4,names:[`hiddenUntilFound`,`keepMounted`,`render`,`style`]}]},{name:`accordionVariants`,kind:`function`,signature:`(props?: (ConfigVariants<{ variant: { default: string; outline: string; separated: string; ghost: string; }; }> & ClassProp) | undefined) => string`,params:[`props`],requiredParams:0}],example:{url:`https://hextaui.com/r/accordion-demo.json`,code:`import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/vendor/hextaui/ui/accordion"

const items = [
  {
    value: "what",
    question: "What is HextaUI?",
    answer:
      "A collection of components built on top of shadcn/ui, with careful attention to structure and micro-interactions.",
  },
  {
    value: "install",
    question: "How do I install a component?",
    answer:
      "Copy the source into your project, then edit it like any other file you own.",
  },
  {
    value: "license",
    question: "Can I use it in commercial projects?",
    answer:
      "Yes. Every component is free and open source, for personal and commercial work.",
  },
]

export function AccordionDemo() {
  return (
    <Accordion defaultValue={["what"]} className="w-full max-w-md">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent>{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
`},exampleNote:null}},docsField:`Stacked headings that each reveal a panel, with height motion you can r… 主要导出：Accordion、AccordionItem、AccordionTrigger、AccordionContent 等。 最小用法：<Accordion />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/accordion.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-accordion.md。`,upstream:`https://hextaui.com/r/accordion.json`};export{e as default};