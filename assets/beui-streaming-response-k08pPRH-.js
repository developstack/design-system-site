var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/streaming-response.tsx`,`components/vendor/beui/agents/agent-disclosure.tsx`,`components/vendor/beui/agents/citations.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-favicon.ts`,`components/vendor/beui/lib/favicon.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/streaming-response.tsx`,export:`StreamingResponsePreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/streaming-response.preview.tsx`},note:{summaryZh:`流式回复（Agent 界面组件）。`,importLine:`import { StreamingResponse } from "@/components/vendor/beui/agents/streaming-response";`,usage:`<StreamingResponse>…</StreamingResponse>`,exports:[{name:`StreamingResponseStatus`,kind:`type`},{name:`StreamingResponseFeedback`,kind:`type`},{name:`StreamingResponseProps`,kind:`type`},{name:`StreamingResponse`,kind:`component`,propsType:`StreamingResponseProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!1,doc:`Rendered response content. Pass plain text or the output of a Markdown renderer.`},{name:`status`,type:`StreamingResponseStatus`,optional:!0,default:`"streaming"`},{name:`copyText`,type:`string`,optional:!0,doc:`Plain-text value copied by the built-in copy action.`},{name:`onCopy`,type:`() => void | Promise<void>`,optional:!0,doc:`Overrides the built-in clipboard action.`},{name:`onRetry`,type:`() => void`,optional:!0},{name:`sources`,type:`CitationItem[]`,optional:!0,default:`[]`,doc:`Optional sources shown as a compact footer disclosure after streaming.`},{name:`sourcesOpen`,type:`boolean`,optional:!0},{name:`defaultSourcesOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onSourcesOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`sourceIdPrefix`,type:`string`,optional:!0},{name:`feedback`,type:`StreamingResponseFeedback`,optional:!0},{name:`defaultFeedback`,type:`StreamingResponseFeedback`,optional:!0,default:`null`},{name:`onFeedbackChange`,type:`(feedback: StreamingResponseFeedback) => void`,optional:!0},{name:`announce`,type:`boolean`,optional:!0,default:`true`,doc:`Set false when a surrounding conversation log announces streamed text.`},{name:`showActions`,type:`boolean`,optional:!0,default:`true`,doc:`Hides the built-in completion actions without changing response status.`},{name:`className`,type:`string`,optional:!0},{name:`contentClassName`,type:`string`,optional:!0},{name:`actionsClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/streaming-response.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import type { CitationItem } from "@/components/vendor/beui/agents/citations";
import { StreamingResponse } from "@/components/vendor/beui/agents/streaming-response";

const PIECES = [
  "A streaming response can link directly to ",
  "Motion's React guide",
  " while the rest of the answer continues to arrive.",
  "The same response can preserve useful structure:",
  "Links stay interactive as nearby text streams",
  "Lists keep their spacing and hierarchy",
  "Code remains readable without shifting the response",
  "Set ",
  "aria-busy",
  " while new content is still arriving.",
  'const status = complete ? "ready" : "streaming";',
] as const;

const STARTS = PIECES.map((_, index) =>
  PIECES.slice(0, index).reduce((total, piece) => total + piece.length, 0),
);
const RESPONSE_LENGTH = PIECES.reduce((total, piece) => total + piece.length, 0);
const RESPONSE_MARKDOWN = \`A streaming response can link directly to [Motion's React guide](https://motion.dev/docs/react) while the rest of the answer continues to arrive.

The same response can preserve useful structure:

- Links stay interactive as nearby text streams
- Lists keep their spacing and hierarchy
- Code remains readable without shifting the response

Set \\\`aria-busy\\\` while new content is still arriving.

\\\`\\\`\\\`tsx
const status = complete ? "ready" : "streaming";
\\\`\\\`\\\`\`;

const CHARACTERS_PER_SECOND = 110;

const RESPONSE_SOURCES: CitationItem[] = [
  {
    id: "motion-react",
    title: "Motion for React",
    domain: "motion.dev",
    url: "https://motion.dev/docs/react",
  },
  {
    id: "aria-busy",
    title: "ARIA live regions",
    domain: "developer.mozilla.org",
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy",
  },
  {
    id: "react-rendering",
    title: "Rendering elements",
    domain: "react.dev",
    url: "https://react.dev/learn/conditional-rendering",
  },
];

function ResponseDemo({ onReplay }: { onReplay: () => void }) {
  const reduce = useReducedMotion() ?? false;
  const [cursor, setCursor] = useState(reduce ? RESPONSE_LENGTH : 0);
  const [complete, setComplete] = useState(reduce);

  const reveal = (index: number) =>
    PIECES[index].slice(0, Math.max(0, cursor - STARTS[index]));
  const started = (index: number) => cursor > STARTS[index];

  useEffect(() => {
    if (reduce) return;

    const startedAt = performance.now();
    let frame = 0;
    let completionTimer: number | undefined;
    const stream = (now: number) => {
      const cursor = Math.min(
        RESPONSE_LENGTH,
        Math.floor(((now - startedAt) / 1000) * CHARACTERS_PER_SECOND),
      );
      setCursor(cursor);
      if (cursor < RESPONSE_LENGTH) frame = requestAnimationFrame(stream);
      else completionTimer = window.setTimeout(() => setComplete(true), 450);
    };

    frame = requestAnimationFrame(stream);
    return () => {
      cancelAnimationFrame(frame);
      if (completionTimer) window.clearTimeout(completionTimer);
    };
  }, [reduce]);

  return (
    <StreamingResponse
      status={complete ? "complete" : "streaming"}
      copyText={RESPONSE_MARKDOWN}
      onRetry={onReplay}
      sources={RESPONSE_SOURCES}
    >
      <p>
        {reveal(0)}
        {started(1) ? (
          <a
            href="https://motion.dev/docs/react"
            target="_blank"
            rel="noreferrer noopener"
          >
            {reveal(1)}
          </a>
        ) : null}
        {reveal(2)}
      </p>
      {started(3) ? <p>{reveal(3)}</p> : null}
      {started(4) ? (
        <ul>
          <li>{reveal(4)}</li>
          {started(5) ? <li>{reveal(5)}</li> : null}
          {started(6) ? <li>{reveal(6)}</li> : null}
        </ul>
      ) : null}
      {started(7) ? (
        <p>
          {reveal(7)}
          {started(8) ? <code>{reveal(8)}</code> : null}
          {reveal(9)}
        </p>
      ) : null}
      {started(10) ? (
        <pre>
          <code>{reveal(10)}</code>
        </pre>
      ) : null}
    </StreamingResponse>
  );
}

export function StreamingResponsePreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="relative h-[500px] w-full max-w-xl">
      <ResponseDemo key={run} onReplay={() => setRun((value) => value + 1)} />
      <button
        type="button"
        onClick={() => setRun((value) => value + 1)}
        className="absolute bottom-0 left-0 inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw className="size-3" />
        Replay
      </button>
    </div>
  );
}
`},exampleNote:null}},docsField:`A stable response surface with completion actions, rendered content, and an expandable source summary. 主要导出：StreamingResponse。 最小用法：<StreamingResponse>…</StreamingResponse>。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。独有组件。属性与示例见 packages/registry/docs/vendor/beui-streaming-response.md。`,upstream:`https://beui.dev/r/streaming-response.json`};export{e as default};