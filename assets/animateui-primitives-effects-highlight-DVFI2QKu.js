var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/highlight.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-effects-highlight.tsx`,export:`HighlightDemo`,example:`https://animate-ui.com/r/demo-primitives-effects-highlight.json`,props:{mode:`children`,exitDelay:200,hover:!1}},note:{summaryZh:`高亮动效（动效原语）。`,importLine:`import { Highlight } from "@/components/vendor/animateui/primitives/effects/highlight";`,usage:`<Highlight>…</Highlight>`,exports:[{name:`Highlight`,kind:`component`,propsType:`HighlightProps<T>`,inline:!1,union:!0,props:[{name:`as`,type:`T`,optional:!0},{name:`ref`,type:`Ref<HTMLDivElement>`,optional:!0},{name:`mode`,type:`"children" | "parent"`,optional:!0},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0},{name:`onValueChange`,type:`(value: string | null) => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`style`,type:`CSSProperties`,optional:!0},{name:`transition`,type:`Transition`,optional:!0},{name:`hover`,type:`boolean`,optional:!0},{name:`click`,type:`boolean`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0},{name:`enabled`,type:`boolean`,optional:!0},{name:`exitDelay`,type:`number`,optional:!0},{name:`controlledItems`,type:`boolean`,optional:!0},{name:`children`,type:`ReactElement<unknown, string | JSXElementConstructor<any>>[] | ReactElement<unknown, string | JSXEl…`,optional:!1}],inherited:[]},{name:`HighlightItem`,kind:`component`,propsType:`HighlightItemProps<T>`,inline:!1,union:!1,props:[],inherited:[]},{name:`useHighlight`,kind:`hook`,signature:`<T extends string>() => HighlightContextType<T>`,params:[],requiredParams:0},{name:`HighlightProps`,kind:`type`},{name:`HighlightItemProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-highlight.json`,code:`import { Highlight } from '@/components/vendor/animateui/primitives/effects/highlight';

const TABS = [
  {
    value: 'tab-1',
    title: 'Tab 1',
    description: 'Tab 1 description',
  },
  {
    value: 'tab-2',
    title: 'Tab 2',
    description: 'Tab 2 description',
  },
  {
    value: 'tab-3',
    title: 'Tab 3',
    description: 'Tab 3 description',
  },
];

type HighlightDemoProps = {
  mode?: 'children' | 'parent';
  exitDelay?: number;
  hover?: boolean;
};

export const HighlightDemo = ({
  mode = 'children',
  exitDelay = 200,
  hover = false,
}: HighlightDemoProps) => {
  return (
    <div className="flex border rounded-full p-1">
      {/* @ts-ignore */}
      <Highlight
        defaultValue={TABS[0]?.value}
        className="rounded-full bg-accent inset-0"
        {...(mode === 'parent' && {
          containerClassName: 'flex',
        })}
        mode={mode}
        exitDelay={exitDelay}
        hover={hover}
      >
        {TABS.map((tab) => (
          <div
            key={tab.value}
            data-value={tab.value}
            className="px-3 h-8 flex items-center cursor-pointer justify-center rounded-full text-sm data-[active=true]:text-current data-[active=true]:font-medium text-muted-foreground transition-all duration-300"
          >
            {tab.title}
          </div>
        ))}
      </Highlight>
    </div>
  );
};
`},exampleNote:null}},docsField:`A highlight effect that allows you to highlight elements on hover, click or with a controlled value. 主要导出：Highlight、HighlightItem、useHighlight。 最小用法：<Highlight>…</Highlight>。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-highlight.md。`,upstream:`https://animate-ui.com/r/primitives-effects-highlight.json`};export{e as default};