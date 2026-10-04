var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/prompt-input.tsx`,`components/vendor/beui/motion/button/index.tsx`,`components/vendor/beui/motion/popover-morph.tsx`,`components/vendor/beui/motion/select.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/motion/button/base.tsx`,`components/vendor/beui/motion/button/magnetic.tsx`,`components/vendor/beui/motion/button/metallic.tsx`,`components/vendor/beui/motion/button/stateful.tsx`,`components/vendor/beui/motion/popover-position.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/magnetic.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/prompt-input.tsx`,export:`PromptInputPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/prompt-input.preview.tsx`},note:{summaryZh:`提示词输入框（Agent 界面组件）。`,importLine:`import { PromptInput } from "@/components/vendor/beui/agents/prompt-input";`,usage:`<PromptInput />`,exports:[{name:`PromptModel`,kind:`type`},{name:`PromptAction`,kind:`type`},{name:`PromptInputProps`,kind:`type`},{name:`PromptInput`,kind:`component`,propsType:`PromptInputProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0,default:`""`},{name:`onValueChange`,type:`(value: string) => void`,optional:!0},{name:`models`,type:`PromptModel[]`,optional:!0,default:`[]`},{name:`model`,type:`string`,optional:!0},{name:`defaultModel`,type:`string`,optional:!0},{name:`onModelChange`,type:`(model: string) => void`,optional:!0},{name:`actions`,type:`PromptAction[]`,optional:!0,default:`[]`},{name:`onAction`,type:`(action: string) => void`,optional:!0},{name:`onSubmit`,type:`(value: string, model?: string | undefined) => void | Promise<void>`,optional:!0},{name:`loading`,type:`boolean`,optional:!0,default:`false`},{name:`onStop`,type:`() => void`,optional:!0},{name:`minRows`,type:`number`,optional:!0,default:`2`},{name:`maxRows`,type:`number`,optional:!0,default:`8`},{name:`leadingAction`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`aria-label`,type:`string`,optional:!0,default:`"Prompt"`,from:`@types/react`},{name:`placeholder`,type:`string`,optional:!0,default:`"Ask the agent to do something…"`,from:`@types/react`}],inherited:[{package:`@types/react`,count:284,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/prompt-input.preview.tsx`,code:`"use client";

import {
  Bot,
  FileText,
  ImagePlus,
  Puzzle,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { PromptInput } from "@/components/vendor/beui/agents/prompt-input";
import { EASE_OUT } from "@/components/vendor/beui/lib/ease";
import { useFavicon } from "@/components/vendor/beui/lib/hooks/use-favicon";

function ModelLogo({ url }: { url: string }) {
  const favicon = useFavicon(url);

  if (!favicon.src) return <Bot />;

  return (
    // biome-ignore lint/performance/noImgElement: Remote provider favicons keep the registry preview framework-agnostic.
    <img
      ref={favicon.ref}
      src={favicon.src}
      alt=""
      width={16}
      height={16}
      referrerPolicy="no-referrer"
      className="size-4 rounded-sm object-contain"
    />
  );
}

const MODELS = [
  {
    value: "gpt-5.2",
    label: "GPT-5.2",
    icon: <ModelLogo url="https://openai.com" />,
  },
  {
    value: "claude-sonnet-4",
    label: "Claude Sonnet 4",
    icon: <ModelLogo url="https://www.anthropic.com" />,
  },
  {
    value: "gemini-3.6-flash",
    label: "Gemini 3.6 Flash",
    // gemini.google.com has no /favicon.ico; Google DeepMind ships Gemini.
    icon: <ModelLogo url="https://deepmind.google" />,
  },
  {
    value: "grok-4.5",
    label: "Grok 4.5",
    icon: <ModelLogo url="https://x.ai" />,
  },
  {
    value: "mistral-large-3",
    label: "Mistral Large 3",
    icon: <ModelLogo url="https://mistral.ai" />,
  },
];

const ACTIONS = [
  {
    value: "image",
    label: "Attach image",
    description: "Add a screenshot or visual reference.",
    icon: <ImagePlus />,
  },
  {
    value: "skill",
    label: "Use a skill",
    description: "Give the agent a specialized workflow.",
    icon: <Puzzle />,
  },
  {
    value: "context",
    label: "Add context",
    description: "Include a file with supporting details.",
    icon: <FileText />,
  },
];

export function PromptInputPreview() {
  const reduce = useReducedMotion() ?? false;
  const timer = useRef<number | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState<string>();
  const [notice, setNotice] = useState<string>();

  useEffect(
    () => () => {
      if (timer.current) window.clearTimeout(timer.current);
    },
    [],
  );

  const submit = (prompt: string) => {
    setSent(undefined);
    setNotice(undefined);
    setLoading(true);
    timer.current = window.setTimeout(() => {
      setLoading(false);
      setSent(prompt);
    }, 900);
  };

  const stop = () => {
    if (timer.current) window.clearTimeout(timer.current);
    setLoading(false);
  };

  return (
    <div className="flex h-[360px] w-full max-w-xl flex-col justify-center">
      <PromptInput
        models={MODELS}
        actions={ACTIONS}
        defaultModel="gpt-5.2"
        defaultValue="Review the current implementation and suggest the next improvement."
        loading={loading}
        onSubmit={submit}
        onStop={stop}
        onAction={(action) => {
          const selected = ACTIONS.find((item) => item.value === action);
          setNotice(selected ? \`\${selected.label} selected.\` : undefined);
        }}
      />
      <div className="h-8 px-2 pt-2 text-xs text-muted-foreground">
        <AnimatePresence mode="wait">
          {sent || notice ? (
            <motion.p
              key={sent ?? notice}
              initial={reduce ? { opacity: 1 } : { opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.18, ease: EASE_OUT }}
            >
              {sent ? "Prompt sent to the selected model." : notice}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`An auto-growing agent composer with prompt actions, model selection, keyboard submission, and animated send and stop states. 主要导出：PromptInput。 最小用法：<PromptInput />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/beui-prompt-input.md。`,upstream:`https://beui.dev/r/prompt-input.json`};export{e as default};