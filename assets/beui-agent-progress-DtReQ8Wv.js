var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/loading-states/agent-progress.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/agent-progress.tsx`,export:`AgentProgressPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/agent-progress.preview.tsx`},note:{summaryZh:`进度条（Agent 界面组件）。`,importLine:`import { AgentProgress } from "@/components/vendor/beui/agents/loading-states/agent-progress";`,usage:`<AgentProgress />`,exports:[{name:`AgentProgressProps`,kind:`type`},{name:`AgentProgress`,kind:`component`,propsType:`AgentProgressProps`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0,default:`"Churning"`,doc:`Verb describing the agent's current activity.`},{name:`elapsedSeconds`,type:`number`,optional:!0,doc:`Controlled elapsed time in seconds.`},{name:`initialSeconds`,type:`number`,optional:!0,default:`0`,doc:`Starting time for the internal timer, in seconds.`},{name:`running`,type:`boolean`,optional:!0,default:`true`,doc:`Whether the internal timer should advance. Ignored when elapsedSeconds is provided.`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/agent-progress.preview.tsx`,code:`"use client";

import { AgentProgress } from "@/components/vendor/beui/agents/loading-states/agent-progress";

export function AgentProgressPreview() {
  return (
    <AgentProgress
      label="Churning"
      initialSeconds={151.6}
      className="text-base"
    />
  );
}
`},exampleNote:null}},docsField:`A compact activity glyph, action verb, and live tabular timer for longer-running agent work. 主要导出：AgentProgress。 最小用法：<AgentProgress />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/loader.md。属性与示例见 packages/registry/docs/vendor/beui-agent-progress.md。`,upstream:`https://beui.dev/r/agent-progress.json`};export{e as default};