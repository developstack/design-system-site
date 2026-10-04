var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/prediction-market-card.tsx`,`components/vendor/beui/motion/action-swap.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-hover-capable.ts`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/prediction-market-card.tsx`,export:`PredictionMarketCardPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/prediction-market-card.preview.tsx`},note:{summaryZh:`卡片（动效区块）。`,importLine:`import { PredictionMarketCard } from "@/components/vendor/beui/motion/prediction-market-card";`,usage:`<PredictionMarketCard title={…} volume={…} outcomes={…} />`,exports:[{name:`PredictionMarketCardOutcome`,kind:`type`},{name:`PredictionMarketCardSelection`,kind:`type`},{name:`PredictionMarketCardProps`,kind:`type`},{name:`PredictionMarketCard`,doc:`A listing surface with outcome CTAs and an independent bookmark toggle.`,kind:`component`,propsType:`PredictionMarketCardProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!1},{name:`icon`,type:`ReactNode`,optional:!0},{name:`category`,type:`string`,optional:!0},{name:`volume`,type:`string`,optional:!1},{name:`volumeHistory`,type:`number[]`,optional:!0,doc:`Chronological volume samples for the optional footer sparkline.`},{name:`status`,type:`string`,optional:!0,doc:`A scheduled time or live match status.`},{name:`live`,type:`boolean`,optional:!0,default:`false`},{name:`outcomes`,type:`PredictionMarketCardOutcome[]`,optional:!1},{name:`onOutcomeClick`,type:`(value: PredictionMarketCardSelection) => void`,optional:!0,doc:`Called on each outcome CTA click; the card keeps no selected state.`},{name:`bookmarked`,type:`boolean`,optional:!0},{name:`defaultBookmarked`,type:`boolean`,optional:!0,default:`false`},{name:`onBookmarkChange`,type:`(bookmarked: boolean) => void`,optional:!0},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/prediction-market-card.preview.tsx`,code:`/* biome-ignore-all lint/performance/noImgElement: framework-independent registry example with explicitly sized images. */
"use client";

import { useState } from "react";
import { PredictionMarketCard } from "@/components/vendor/beui/motion/prediction-market-card";
import { Button } from "@/components/vendor/beui/motion/button";

// Native images keep this copy-paste example usable outside Next.js.
const markets = [
	{
		id: "basketball",
		title: "Boston Celtics vs. Los Angeles Lakers",
		category: "Basketball",
		status: "Sunday · 7:30 PM",
		volume: "$2.4M",
		live: false,
		image: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
		history: [12, 18, 15, 26, 20, 32, 29, 38, 34, 48, 43, 58],
		outcomes: [
			{
				id: "boston",
				label: "Celtics",
				probability: 0.51,
				next: 0.56,
				color: "#34d399",
				image: "https://a.espncdn.com/i/teamlogos/nba/500/bos.png",
			},
			{
				id: "lakers",
				label: "Lakers",
				probability: 0.49,
				next: 0.44,
				color: "#fbbf24",
				image: "https://a.espncdn.com/i/teamlogos/nba/500/lal.png",
			},
		],
	},
	{
		id: "baseball",
		title: "Tampa Bay Rays vs. Atlanta Braves",
		category: "MLB",
		status: "Mid 6th",
		volume: "$458K",
		live: true,
		image: "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png",
		history: [8, 12, 10, 19, 15, 28, 23, 34, 30, 40, 36, 45],
		outcomes: [
			{
				id: "rays",
				label: "Rays",
				probability: 0.46,
				next: 0.52,
				color: "#60a5fa",
				image: "https://a.espncdn.com/i/teamlogos/mlb/500/tb.png",
			},
			{
				id: "braves",
				label: "Braves",
				probability: 0.54,
				next: 0.48,
				color: "#fb7185",
				image: "https://a.espncdn.com/i/teamlogos/mlb/500/atl.png",
			},
		],
	},
	{
		id: "rates",
		title: "Where will interest rates land by the end of the year?",
		category: "Economics",
		status: "Dec 31",
		volume: "$347K",
		live: false,
		image:
			"https://upload.wikimedia.org/wikipedia/commons/7/73/Seal_of_the_United_States_Federal_Reserve_Board.svg",
		history: [15, 11, 17, 14, 24, 21, 30, 25, 32, 29, 39, 42],
		outcomes: [
			{
				id: "below",
				label: "Below 3.5%",
				probability: 0.68,
				next: 0.72,
				color: "#34d399",
				image: null,
			},
			{
				id: "above",
				label: "Above 4.0%",
				probability: 0.23,
				next: 0.18,
				color: "#60a5fa",
				image: null,
			},
		],
	},
];

export function PredictionMarketCardPreview() {
	const [updated, setUpdated] = useState(false);
	const [saved, setSaved] = useState<Record<string, boolean>>({});

	return (
		<div className="@container w-full max-w-3xl space-y-5">
			<div className="flex items-center justify-between gap-3">
				<div>
					<p className="text-sm font-medium">On the radar</p>
					<p className="mt-1 text-xs text-muted-foreground">
						Demo markets · simulated prices
					</p>
				</div>
				<Button
					variant="secondary"
					size="sm"
					className="shrink-0"
					onClick={() => setUpdated((value) => !value)}
				>
					Update odds
				</Button>
			</div>
			<div className="grid auto-rows-fr gap-4 @min-[640px]:grid-cols-2">
				{markets.map((market) => (
					<PredictionMarketCard
						key={market.id}
						title={market.title}
						category={market.category}
						status={market.status}
						live={market.live}
						icon={
							<img
								src={market.image}
								alt=""
								width={48}
								height={48}
								className={
									market.id === "rates"
										? "size-full bg-white object-contain p-1"
										: "size-full object-contain p-1"
								}
							/>
						}
						volume={market.volume}
						volumeHistory={market.history}
						bookmarked={saved[market.id] ?? false}
						onBookmarkChange={(value) =>
							setSaved((current) => ({ ...current, [market.id]: value }))
						}
						outcomes={market.outcomes.map((outcome) => ({
							...outcome,
							probability: updated ? outcome.next : outcome.probability,
							icon: outcome.image ? (
								<img
									src={outcome.image}
									alt=""
									width={32}
									height={32}
									className="size-full object-contain p-0.5"
								/>
							) : undefined,
						}))}
					/>
				))}
			</div>
		</div>
	);
}
`},exampleNote:null}},docsField:`Compact market listings with consistent outcome rows, ani… 主要导出：PredictionMarketCard。 最小用法：<PredictionMarketCard title={…} volume={…} outcomes={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/card.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-prediction-market-card.md。`,upstream:`https://beui.dev/r/prediction-market-card.json`};export{e as default};