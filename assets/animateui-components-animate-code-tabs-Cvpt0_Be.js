var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/animate/code-tabs.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`next-themes`,`shiki`],registryDependencies:[`@developstack/animateui-components-buttons-copy`,`@developstack/animateui-primitives-animate-tabs`],preview:{kind:`example`,module:`examples/animateui/components-animate-code-tabs.tsx`,export:`CodeTabsDemo`,example:`https://animate-ui.com/r/demo-components-animate-code-tabs.json`},note:{summaryZh:`代码标签页（动效组件）。`,importLine:`import { CodeTabs } from "@/components/vendor/animateui/components/animate/code-tabs";`,usage:`<CodeTabs codes={…} />`,exports:[{name:`CodeTabs`,kind:`component`,propsType:`CodeTabsProps`,inline:!1,union:!1,props:[{name:`codes`,type:`Record<string, string>`,optional:!1},{name:`lang`,type:`string`,optional:!0,default:`'bash'`},{name:`themes`,type:`{ light: string; dark: string; }`,optional:!0,default:`{ light: 'github-light', dark: 'github-dark', }`},{name:`copyButton`,type:`boolean`,optional:!0,default:`true`},{name:`onCopiedChange`,type:`(copied: boolean, content?: string | undefined) => void`,optional:!0},{name:`value`,type:`string`,optional:!0},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`defaultValue`,type:`string | (readonly string[] & string)`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]},{name:`CodeTabsProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-animate-code-tabs.json`,code:`import { CodeTabs } from '@/components/vendor/animateui/components/animate/code-tabs';

const CODES = {
  Cursor: \`// Copy and paste the code into .cursor/mcp.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "@animate-ui/registry.json"
      }
    }
  }
}\`,
  Windsurf: \`// Copy and paste the code into .codeium/windsurf/mcp_config.json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "shadcn@canary", "registry:mcp"],
      "env": {
        "REGISTRY_URL": "@animate-ui/registry.json"
      }
    }
  }
}\`,
};

export const CodeTabsDemo = () => {
  return <CodeTabs lang="json" codes={CODES} />;
};
`},exampleNote:null}},docsField:`A tabs component that displays code for different languages. 主要导出：CodeTabs。 最小用法：<CodeTabs codes={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-animate-code-tabs.md。`,upstream:`https://animate-ui.com/r/components-animate-code-tabs.json`};export{e as default};