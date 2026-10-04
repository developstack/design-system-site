var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/tool-approval.tsx`,`components/vendor/beui/agents/agent-code.tsx`,`components/vendor/beui/agents/agent-disclosure.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`,`shiki`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/tool-approval.tsx`,export:`ToolApprovalPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/tool-approval.preview.tsx`},note:{summaryZh:`工具调用审批（Agent 界面组件）。`,importLine:`import { ToolApproval } from "@/components/vendor/beui/agents/tool-approval";`,usage:`<ToolApproval tool={…} />`,exports:[{name:`ToolApprovalStatus`,kind:`type`},{name:`ToolApprovalParameter`,kind:`type`},{name:`ToolApprovalCodeProps`,kind:`type`},{name:`ToolApprovalProps`,kind:`type`},{name:`ToolApprovalCode`,kind:`component`,propsType:`ToolApprovalCodeProps`,inline:!1,union:!1,props:[{name:`code`,type:`string`,optional:!1},{name:`language`,type:`AgentCodeLanguage`,optional:!0,default:`"bash"`},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`ToolApproval`,kind:`component`,propsType:`ToolApprovalProps`,inline:!1,union:!1,props:[{name:`tool`,type:`ReactNode`,optional:!1},{name:`title`,type:`ReactNode`,optional:!0,default:`"Allow this tool to run?"`},{name:`description`,type:`ReactNode`,optional:!0},{name:`parameters`,type:`ToolApprovalParameter[]`,optional:!0,default:`[]`},{name:`status`,type:`ToolApprovalStatus`,optional:!0,default:`"pending"`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`onApprove`,type:`() => void`,optional:!0},{name:`onAlwaysAllow`,type:`() => void`,optional:!0},{name:`onDeny`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/tool-approval.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ToolApproval,
  ToolApprovalCode,
  type ToolApprovalStatus,
} from "@/components/vendor/beui/agents/tool-approval";

export function ToolApprovalPreview() {
  const [status, setStatus] = useState<ToolApprovalStatus>("pending");
  const [detailsOpen, setDetailsOpen] = useState(true);
  const timers = useRef<number[]>([]);

  const clearTimers = useCallback(() => {
    timers.current.forEach(window.clearTimeout);
    timers.current = [];
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const finish = (next: ToolApprovalStatus) => {
    clearTimers();
    setStatus(next);
  };

  const approve = () => {
    clearTimers();
    setStatus("approving");
    timers.current = [
      window.setTimeout(() => setStatus("approved"), 600),
      window.setTimeout(() => setStatus("running"), 1150),
      window.setTimeout(() => setStatus("complete"), 2200),
    ];
  };

  const replay = () => {
    clearTimers();
    setStatus("pending");
    setDetailsOpen(true);
  };

  return (
    <div className="relative h-[360px] w-full max-w-lg">
      <ToolApproval
        tool="terminal.run"
        title={status === "pending" ? "Allow this tool to run?" : "Terminal access"}
        description="The agent wants to run the project test suite in the current workspace."
        status={status}
        open={detailsOpen}
        onOpenChange={setDetailsOpen}
        parameters={[
          {
            id: "command",
            label: "Command",
            value: (
              <ToolApprovalCode
                code="bun test tests/a11y.test.tsx"
                language="bash"
              />
            ),
          },
          { id: "directory", label: "Directory", value: "ui-components" },
        ]}
        onApprove={approve}
        onAlwaysAllow={approve}
        onDeny={() => finish("denied")}
      />
      <button
        type="button"
        onClick={replay}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`A human-in-the-loop permission card for reviewing tool details, allowing once, remembering… 主要导出：ToolApproval、ToolApprovalCode。 最小用法：<ToolApproval tool={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/approval.md。属性与示例见 packages/registry/docs/vendor/beui-tool-approval.md。`,upstream:`https://beui.dev/r/tool-approval.json`};export{e as default};