var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/effects/theme-toggler.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/primitives-effects-theme-toggler.tsx`,export:`ThemeTogglerDemo`,example:`https://animate-ui.com/r/demo-primitives-effects-theme-toggler.json`,props:{direction:`ltr`}},note:{summaryZh:`主题切换（动效原语）。`,importLine:`import { ThemeToggler } from "@/components/vendor/animateui/primitives/effects/theme-toggler";`,usage:`<ThemeToggler theme={…} resolvedTheme={…} setTheme={…} />`,exports:[{name:`ThemeToggler`,kind:`component`,propsType:`ThemeTogglerProps`,inline:!0,union:!1,props:[{name:`theme`,type:`ThemeSelection`,optional:!1},{name:`resolvedTheme`,type:`Resolved`,optional:!1},{name:`setTheme`,type:`(theme: ThemeSelection) => void`,optional:!1},{name:`direction`,type:`Direction`,optional:!0,default:`'ltr'`},{name:`onImmediateChange`,type:`(theme: ThemeSelection) => void`,optional:!0},{name:`children`,type:`ChildrenRender`,optional:!0}],inherited:[]},{name:`ThemeTogglerProps`,kind:`type`},{name:`ThemeSelection`,kind:`type`},{name:`Resolved`,kind:`type`},{name:`Direction`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-effects-theme-toggler.json`,code:`import React from 'react';
import { useTheme } from 'next-themes';
import { Monitor, Moon, Sun } from 'lucide-react';

import {
  ThemeToggler,
  type ThemeSelection,
  type Resolved,
  type Direction,
} from '@/components/vendor/animateui/primitives/effects/theme-toggler';

interface ThemeTogglerDemoProps {
  direction: Direction;
}

export const ThemeTogglerDemo = ({ direction }: ThemeTogglerDemoProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <ThemeToggler
      theme={theme as ThemeSelection}
      resolvedTheme={resolvedTheme as Resolved}
      setTheme={setTheme}
      direction={direction}
    >
      {({ effective, toggleTheme }) => {
        const nextTheme =
          effective === 'dark'
            ? 'light'
            : effective === 'system'
              ? 'dark'
              : 'system';

        return (
          <button onClick={() => toggleTheme(nextTheme)}>
            {effective === 'system' ? (
              <Monitor />
            ) : effective === 'dark' ? (
              <Moon />
            ) : (
              <Sun />
            )}
          </button>
        );
      }}
    </ThemeToggler>
  );
};
`},exampleNote:null}},docsField:`An effect that allows you to toggle the theme… 主要导出：ThemeToggler。 最小用法：<ThemeToggler theme={…} resolvedTheme={…} setTheme={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/theme-toggle.md。属性与示例见 packages/registry/docs/vendor/animateui-primitives-effects-theme-toggler.md。`,upstream:`https://animate-ui.com/r/primitives-effects-theme-toggler.json`};export{e as default};