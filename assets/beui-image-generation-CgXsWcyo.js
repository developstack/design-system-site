var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/image-generation.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/image-generation.tsx`,export:`ImageGenerationPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/image-generation.preview.tsx`},note:{summaryZh:null,importLine:`import { ImageGeneration } from "@/components/vendor/beui/agents/image-generation";`,usage:`<ImageGeneration />`,exports:[{name:`ImageGenerationStatus`,kind:`type`},{name:`ImageGenerationProps`,kind:`type`},{name:`ImageGeneration`,kind:`component`,propsType:`ImageGenerationProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0,doc:`The completed media. Pass an img, Next Image, canvas, video, or custom preview.`},{name:`status`,type:`ImageGenerationStatus`,optional:!0,default:`"generating"`},{name:`label`,type:`string`,optional:!0,doc:`Accessible description. Defaults to a description derived from prompt.`},{name:`prompt`,type:`string`,optional:!0},{name:`resolution`,type:`string`,optional:!0,default:`"1024 × 1024"`},{name:`aspectRatio`,type:`AspectRatio`,optional:!0,default:`"1 / 1"`,doc:`CSS aspect ratio reserved before generated media is available.`},{name:`size`,type:`"compact" | "fluid"`,optional:!0,default:`"compact"`},{name:`interactive`,type:`boolean`,optional:!0,default:`true`,doc:`Lets the active dither cluster follow fine-pointer movement.`},{name:`statusText`,type:`string`,optional:!0},{name:`showStatus`,type:`boolean`,optional:!0,default:`true`},{name:`onRetry`,type:`() => void`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`mediaClassName`,type:`string`,optional:!0},{name:`statusClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/image-generation.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import {
  ImageGeneration,
  type ImageGenerationStatus,
} from "@/components/vendor/beui/agents/image-generation";

function GeneratedArtwork() {
  return (
    <svg
      viewBox="0 0 800 600"
      aria-hidden="true"
      className="size-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="image-sky" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#191b33" />
          <stop offset="0.48" stopColor="#60538d" />
          <stop offset="1" stopColor="#e59b7b" />
        </linearGradient>
        <linearGradient id="image-ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#314946" />
          <stop offset="1" stopColor="#101817" />
        </linearGradient>
        <radialGradient id="image-glow">
          <stop offset="0" stopColor="#ffe6b2" stopOpacity="0.95" />
          <stop offset="1" stopColor="#efb47e" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#image-sky)" />
      <circle cx="570" cy="210" r="150" fill="url(#image-glow)" />
      <circle cx="570" cy="210" r="54" fill="#ffe5ad" />
      <path
        d="M0 395 120 314l92 54 132-143 116 126 78-66 92 88 170-61v288H0Z"
        fill="#283d43"
        opacity="0.9"
      />
      <path
        d="M0 432 118 376l99 73 115-97 107 92 112-52 108 68 141-48v188H0Z"
        fill="url(#image-ground)"
      />
      <path
        d="M0 505c116-44 190-32 280 6 103 44 212 47 330-7 68-31 126-37 190-28v124H0Z"
        fill="#13201f"
      />
      <g fill="#c9d7c3" opacity="0.65">
        <circle cx="108" cy="142" r="2" />
        <circle cx="168" cy="102" r="1.5" />
        <circle cx="248" cy="154" r="2" />
        <circle cx="332" cy="84" r="1.5" />
        <circle cx="414" cy="138" r="2" />
      </g>
    </svg>
  );
}

function GenerationDemo({ onReplay }: { onReplay: () => void }) {
  const reduce = useReducedMotion() ?? false;
  const [status, setStatus] = useState<ImageGenerationStatus>(
    reduce ? "complete" : "queued",
  );

  useEffect(() => {
    if (reduce) return;

    const timers = [
      window.setTimeout(() => setStatus("generating"), 500),
      window.setTimeout(() => setStatus("refining"), 3000),
      window.setTimeout(() => setStatus("complete"), 5200),
    ];

    return () => {
      timers.forEach((timer) => {
        window.clearTimeout(timer);
      });
    };
  }, [reduce]);

  return (
    <div className="flex w-full flex-col items-center">
      <ImageGeneration
        label="A quiet mountain landscape at sunset"
        prompt="a quiet mountain landscape at sunset"
        resolution="1024 × 1024"
        status={status}
        onRetry={onReplay}
      >
        <GeneratedArtwork />
      </ImageGeneration>
      <button
        type="button"
        onClick={onReplay}
        className="mt-4 inline-flex min-h-10 items-center gap-2 rounded-full px-3 text-sm font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
      >
        <RotateCcw aria-hidden="true" className="size-4" />
        Replay
      </button>
    </div>
  );
}

export function ImageGenerationPreview() {
  const [run, setRun] = useState(0);

  return (
    <div className="w-full max-w-xl">
      <GenerationDemo
        key={run}
        onReplay={() => setRun((value) => value + 1)}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`A stable generated-image surface that moves from queued work through progressive refinement to a completed result without layout shift. 主要导出：ImageGeneration。 最小用法：<ImageGeneration />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/beui-image-generation.md。`,upstream:`https://beui.dev/r/image-generation.json`};export{e as default};