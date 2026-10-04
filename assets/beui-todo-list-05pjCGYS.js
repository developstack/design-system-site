var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/todo-list.tsx`,`components/vendor/beui/agents/agent-disclosure.tsx`,`components/vendor/beui/motion/action-swap-roll.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/todo-list.tsx`,export:`TodoListPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/todo-list.preview.tsx`},note:{summaryZh:`待办列表（Agent 界面组件）。`,importLine:`import { TodoList } from "@/components/vendor/beui/agents/todo-list";`,usage:`<TodoList items={…} />`,exports:[{name:`TodoItemStatus`,kind:`type`},{name:`TodoItem`,kind:`type`},{name:`TodoListProps`,kind:`type`},{name:`TodoList`,kind:`component`,propsType:`TodoListProps`,inline:!1,union:!1,props:[{name:`items`,type:`TodoItem[]`,optional:!1},{name:`title`,type:`ReactNode`,optional:!0,default:`"To-dos"`},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`true`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`collapseOnComplete`,type:`boolean`,optional:!0,default:`true`},{name:`maxHeight`,type:`number`,optional:!0,default:`248`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/todo-list.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  type TodoItem,
  TodoList,
} from "@/components/vendor/beui/agents/todo-list";

const TASKS = [
  "Inspect the current data flow",
  "Update the response schema",
  "Add coverage for edge cases",
  "Run checks and prepare the result",
];

const TICKS_PER_TASK = 4;

function itemsAtStep(step: number): TodoItem[] {
  return TASKS.map((title, index) => ({
    id: \`task-\${index}\`,
    title,
    status:
      step >= (index + 1) * TICKS_PER_TASK
        ? "completed"
        : step >= index * TICKS_PER_TASK
          ? "in-progress"
          : "pending",
    progress:
      step >= index * TICKS_PER_TASK &&
      step < (index + 1) * TICKS_PER_TASK
        ? ((step % TICKS_PER_TASK) + 1) * 25
        : undefined,
    detail:
      step >= index * TICKS_PER_TASK &&
      step < (index + 1) * TICKS_PER_TASK
        ? \`\${((step % TICKS_PER_TASK) + 1) * 25}%\`
        : undefined,
  }));
}

function TodoRun() {
  const [step, setStep] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (step >= TASKS.length * TICKS_PER_TASK) return;
    timer.current = window.setTimeout(() => setStep((value) => value + 1), 280);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [step]);

  return <TodoList items={itemsAtStep(step)} title="Implementation plan" />;
}

export function TodoListPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[330px] w-full max-w-lg">
      <TodoRun key={run} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`A collapsible agent task plan with morphing status marks, a completion count, compact metadata, and smooth lis… 主要导出：TodoList。 最小用法：<TodoList items={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/agent-step.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-todo-list.md。`,upstream:`https://beui.dev/r/todo-list.json`};export{e as default};