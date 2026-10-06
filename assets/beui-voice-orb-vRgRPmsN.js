var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/agents/voice-orb.tsx`,`components/vendor/beui/agents/voice-orb/renderer.ts`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/voice-orb.tsx`,export:`VoiceOrbPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/voice-orb.preview.tsx`},note:{summaryZh:null,importLine:`import { VoiceOrb } from "@/components/vendor/beui/agents/voice-orb";`,usage:`<VoiceOrb />`,exports:[{name:`VoiceOrbProps`,kind:`type`},{name:`VoiceOrb`,doc:`A grainy liquid sphere whose surface and silhouette respond to voice activity.`,kind:`component`,propsType:`VoiceOrbProps`,inline:!1,union:!1,props:[{name:`activity`,type:`number | MotionValue<number>`,optional:!0,default:`0`,doc:`Normalized activity, from 0 to 1. A MotionValue avoids React render loops.`},{name:`analyser`,type:`AnalyserNode | null`,optional:!0,default:`null`,doc:`Optional caller-owned audio analyser. The component never requests a microphone.`},{name:`colors`,type:`readonly [string, string, string]`,optional:!0,default:`DEFAULT_COLORS`,doc:`Base pigment, highlight and shadow, as #RGB or #RRGGBB hex colors.`},{name:`active`,type:`boolean`,optional:!0,default:`true`,doc:`Pause the material while keeping the current surface visible.`},{name:`speed`,type:`number`,optional:!0,default:`1`},{name:`onError`,type:`(error: Error) => void`,optional:!0}],inherited:[{package:`@types/react`,count:278,names:[]}]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/agents/voice-orb.preview.tsx`,code:`"use client";

import {
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { VoiceOrb } from "@/components/vendor/beui/agents/voice-orb";

export function VoiceOrbPreview() {
  const activity = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  useAnimationFrame((time) => {
    if (reducedMotion) {
      activity.set(0);
      return;
    }
    // Simulated syllables and pauses demonstrate activity without opening audio.
    const t = time / 1000;
    const phrase = Math.max(0, Math.sin(t * 0.85));
    const syllable = Math.max(0, Math.sin(t * 9.3 + Math.sin(t * 2.1)));
    activity.set(phrase * (0.12 + syllable ** 2 * 0.72));
  });
  return (
    <VoiceOrb
      activity={activity}
      aria-label="Voice visualization"
      className="w-64 sm:w-72"
    />
  );
}
`},exampleNote:null}},docsField:`Breathing liquid voice visualization with flowing highlights, custom pigments and a soft, voice-reactive silhouette. 主要导出：VoiceOrb。 最小用法：<VoiceOrb />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/orb.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-voice-orb.md。`,upstream:`https://beui.dev/r/voice-orb.json`};export{e as default};