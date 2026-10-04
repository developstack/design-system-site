var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/knockout-bracket.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/knockout-bracket.tsx`,export:`KnockoutBracketPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/knockout-bracket.preview.tsx`},note:{summaryZh:null,importLine:`import { KnockoutBracket } from "@/components/vendor/beui/motion/knockout-bracket";`,usage:`<KnockoutBracket rounds={…} />`,exports:[{name:`Team`,kind:`type`},{name:`MatchSide`,kind:`type`},{name:`Match`,kind:`type`},{name:`Round`,kind:`type`},{name:`KnockoutBracketProps`,kind:`type`},{name:`KnockoutBracket`,kind:`component`,propsType:`KnockoutBracketProps`,inline:!1,union:!1,props:[{name:`rounds`,type:`Round[]`,optional:!1,doc:"The whole draw, ordered widest round first. Any single-elimination tournament fits: each round holds half the matches of the one before it (16 → 8 → 4 → 2 → 1) and `rounds[r].matches[k]` is fed by matches `2k` and `2k + 1` of the round before it. Two rounds are enough."},{name:`initialRound`,type:`number`,optional:!0,default:`1`,doc:`Round shown as the leftmost column on mount. Defaults to 1, clamped to the valid range.`},{name:`thirdPlace`,type:`Match`,optional:!0,doc:`Third place play-off, rendered under the bracket instead of inside it.`},{name:`thirdPlaceLabel`,type:`string`,optional:!0,default:`"Third place play-off"`,doc:'Heading over `thirdPlace`. Defaults to "Third place play-off".'},{name:`className`,type:`string`,optional:!0}],inherited:[]},{name:`TEAMS`,kind:`constant`,type:`{ southAfrica: { name: string; code: string; }; canada: { name: string; code: string; }; netherland…`},{name:`ROUNDS`,kind:`constant`,type:`Round[]`},{name:`THIRD_PLACE`,kind:`constant`,type:`Match`}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/knockout-bracket.preview.tsx`,code:`"use client";

import {
  KnockoutBracket,
  ROUNDS,
  THIRD_PLACE,
} from "@/components/vendor/beui/motion/knockout-bracket";

// \`ROUNDS\` is the sample World Cup draw that ships with the component. Any other
// single-elimination tournament renders the same way. Build your own \`Round[]\`,
// widest round first, each round holding half the matches of the one before it,
// and pass it in:
//
//   const rounds: Round[] = [
//     {
//       name: "Quarter-finals",
//       matches: [
//         {
//           id: "qf-1",
//           date: "Sat, 14 Mar",
//           home: { team: { name: "Cloud9", logo: "/logos/c9.svg" }, score: 2 },
//           away: { team: { name: "T1", logo: "/logos/t1.svg" }, score: 1 },
//           winner: "home",
//           badge: "BO3",
//         },
//         // qf-2, qf-3, qf-4 …
//       ],
//     },
//     { name: "Semi-finals", matches: [/* fed by qf 1+2 and qf 3+4 */] },
//     { name: "Grand final", matches: [/* the one final */] },
//   ];
//
// A team carries a \`logo\` URL, an ISO country \`code\` for a flag, or neither, in
// which case its initials stand in. \`date\`, \`time\`, \`status\` and \`badge\` are all
// optional. \`thirdPlaceLabel\` renames the play-off when a tournament calls it
// something else ("Bronze match").
export function KnockoutBracketPreview() {
  return (
    <div className="w-full py-8">
      <KnockoutBracket rounds={ROUNDS} thirdPlace={THIRD_PLACE} />
    </div>
  );
}
`},exampleNote:null}},docsField:`Pages one round at a time. The leftmost round stacks at a fixed rhyt… 主要导出：KnockoutBracket、TEAMS、ROUNDS、THIRD_PLACE。 最小用法：<KnockoutBracket rounds={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/knockout.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-knockout-bracket.md。`,upstream:`https://beui.dev/r/knockout-bracket.json`};export{e as default};