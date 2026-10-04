var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/knockout-wheel.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/knockout-wheel.tsx`,export:`KnockoutWheelPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/knockout-wheel.preview.tsx`},note:{summaryZh:null,importLine:`import { KnockoutWheel } from "@/components/vendor/beui/motion/knockout-wheel";`,usage:`<KnockoutWheel rounds={…} />`,exports:[{name:`Team`,kind:`type`},{name:`MatchSide`,kind:`type`},{name:`Match`,kind:`type`},{name:`Round`,kind:`type`},{name:`KnockoutWheelProps`,kind:`type`},{name:`KnockoutWheel`,kind:`component`,propsType:`KnockoutWheelProps`,inline:!1,union:!1,props:[{name:`rounds`,type:`Round[]`,optional:!1,doc:"The whole draw, ordered widest round first — the same array the knockout bracket takes. Any single-elimination tournament fits: each round holds half the matches of the one before it (16 → 8 → 4 → 2 → 1) and `rounds[r].matches[k]` is fed by matches `2k` and `2k + 1` of the round before it. Two rounds are enough; the wheel grows a ring per round and sizes itself to the rim."},{name:`initialRound`,type:`number`,optional:!0,default:`0`,doc:"Index of the outermost round to draw. Earlier rounds are dropped and the kept round's own teams become the rim, so `1` on a 32-team draw opens at the Round of 16. Defaults to 0 (the whole tree); clamped to the valid range."},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`TEAMS`,kind:`constant`,type:`{ spain: { name: string; code: string; }; japan: { name: string; code: string; }; netherlands: { na…`},{name:`ROUNDS`,kind:`constant`,type:`Round[]`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/knockout-wheel.preview.tsx`,code:`"use client";

import { KnockoutWheel, ROUNDS } from "@/components/vendor/beui/motion/knockout-wheel";

// \`ROUNDS\` is the sample 32-team cup that ships with the component, and it's the
// same array the knockout bracket takes, so one dataset feeds both fixture
// styles. Any other single-elimination tournament renders the same way. Build
// your own \`Round[]\`, widest round first, each round holding half the matches of
// the one before it, and pass it in:
//
//   const rounds: Round[] = [
//     {
//       name: "Quarter-finals",
//       matches: [
//         {
//           id: "qf-1",
//           home: { team: { name: "Cloud9", logo: "/logos/c9.svg" }, score: 2 },
//           away: { team: { name: "T1", logo: "/logos/t1.svg" }, score: 1 },
//           winner: "home",
//         },
//         // qf-2, qf-3, qf-4 …
//       ],
//     },
//     { name: "Semi-finals", matches: [/* fed by qf 1+2 and qf 3+4 */] },
//     { name: "Grand final", matches: [/* the one final */] },
//   ];
//
// The wheel grows a ring per round and holds a 32rem stage at every size, so it
// pans on a phone rather than shrinking its marks. A team carries a \`logo\` URL,
// an ISO country \`code\` for a flag, or neither, in which case its initials stand
// in. \`initialRound\` drops the outer rounds.
export function KnockoutWheelPreview() {
  return (
    <div className="w-full py-8">
      <KnockoutWheel rounds={ROUNDS} />
    </div>
  );
}
`},exampleNote:null}},docsField:`The tournament drawn radially. The champion holds the hub, each round is a ring further out… 主要导出：KnockoutWheel、TEAMS、ROUNDS。 最小用法：<KnockoutWheel rounds={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/knockout.md。属性与示例见 packages/registry/docs/vendor/beui-knockout-wheel.md。`,upstream:`https://beui.dev/r/knockout-wheel.json`};export{e as default};