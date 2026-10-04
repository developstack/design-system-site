var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/card-folder.tsx`,`components/vendor/beui/motion/digit-swap.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/card-folder.tsx`,export:`CardFolderPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/card-folder.preview.tsx`},note:{summaryZh:`文件夹（动效区块）。`,importLine:`import { CardFolder } from "@/components/vendor/beui/motion/card-folder";`,usage:`<CardFolder title={…} cardNumber={…} expiry={…} cvv={…} card={…} />`,exports:[{name:`CardFolderProps`,kind:`type`},{name:`CardFolder`,doc:`A landscape card tucked into an animated folder sleeve. Pressing the folder lifts the card forward while the purse compresses into its bottom seam; a separate privacy control reveals its number and CVV.`,kind:`component`,propsType:`CardFolderProps`,inline:!1,union:!1,props:[{name:`title`,type:`string`,optional:!1},{name:`cardNumber`,type:`string`,optional:!1},{name:`expiry`,type:`string`,optional:!1},{name:`cvv`,type:`string`,optional:!1},{name:`card`,type:`ReactNode`,optional:!1},{name:`open`,type:`boolean`,optional:!0},{name:`defaultOpen`,type:`boolean`,optional:!0,default:`false`},{name:`onOpenChange`,type:`(open: boolean) => void`,optional:!0},{name:`detailsVisible`,type:`boolean`,optional:!0},{name:`defaultDetailsVisible`,type:`boolean`,optional:!0,default:`false`},{name:`onDetailsVisibleChange`,type:`(visible: boolean) => void`,optional:!0},{name:`onClick`,type:`() => void`,optional:!0},{name:`onAction`,type:`() => void`,optional:!0},{name:`ariaLabel`,type:`string`,optional:!0},{name:`actionLabel`,type:`string`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`className`,type:`string`,optional:!0},{name:`cardClassName`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/card-folder.preview.tsx`,code:`"use client";

import { useState } from "react";
import { CardFolder } from "@/components/vendor/beui/motion/card-folder";
import { DigitSwap } from "@/components/vendor/beui/motion/digit-swap";

const CARD_NUMBER = "3745 6987 4096 0806";
const MASKED_CARD_NUMBER = "•••• •••• •••• 0806";
const CONTOUR_RADII = Array.from({ length: 18 }, (_, index) => 72 + index * 24);

function CardArtwork({ detailsVisible }: { detailsVisible: boolean }) {
  return (
    <span className="relative block h-full w-full overflow-hidden bg-[linear-gradient(135deg,#383a38_0%,#202120_48%,#111211_100%)] text-white">
      <svg
        aria-hidden="true"
        viewBox="0 0 640 404"
        className="absolute inset-0 h-full w-full"
      >
        {CONTOUR_RADII.map((radius, index) => (
          <circle
            // The concentric contours deliberately begin outside the card so
            // their cropped curves read like the reference artwork.
            key={radius}
            cx="-20"
            cy="-28"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.32 - index * 0.009}
            strokeWidth="1.5"
          />
        ))}
      </svg>

      <span className="absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgb(255_255_255/0.11),transparent_32%)]" />

      <span className="absolute left-[6%] top-[8%] flex flex-col gap-2">
        <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/55">
          Saurabh Chauhan
        </span>
        <DigitSwap
          value={detailsVisible ? CARD_NUMBER : MASKED_CARD_NUMBER}
          animationKey={detailsVisible ? "revealed" : "masked"}
          direction={detailsVisible ? "up" : "down"}
          suffixLength={4}
          glyphClassName={detailsVisible ? "text-white/90" : "text-white/65"}
          suffixClassName="text-white/90"
          className="font-mono text-xs tracking-[0.13em]"
        />
      </span>

      <span className="absolute top-[8%] right-[7%] h-[20%] w-[13%] overflow-hidden rounded-[18%] border border-black/30 bg-[linear-gradient(135deg,#f2f0ea_0%,#b9b7b1_45%,#e4e1d9_100%)]">
        <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/30" />
        <span className="absolute inset-x-0 top-1/3 h-px bg-black/30" />
        <span className="absolute inset-x-0 bottom-1/3 h-px bg-black/30" />
        <span className="absolute left-0 top-1/2 h-[34%] w-[28%] -translate-y-1/2 rounded-r-[35%] border border-l-0 border-black/30" />
        <span className="absolute right-0 top-1/2 h-[34%] w-[28%] -translate-y-1/2 rounded-l-[35%] border border-r-0 border-black/30" />
      </span>

      <span className="absolute bottom-[9%] left-[6%] flex items-center gap-2 text-lg font-semibold tracking-[-0.04em]">
        beUI <span className="block size-2.5 rotate-45 rounded-[2px] bg-white/85" />
      </span>

      <span className="absolute right-[7%] bottom-[10%] flex items-end gap-5">
        <span className="flex flex-col gap-1">
          <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/40">
            Expiry
          </span>
          <span className="text-xs font-medium text-white/90 tabular-nums">
            08/29
          </span>
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-[8px] font-medium uppercase tracking-[0.16em] text-white/40">
            CVV
          </span>
          <DigitSwap
            value={detailsVisible ? "123" : "•••"}
            animationKey={detailsVisible ? "revealed" : "masked"}
            direction={detailsVisible ? "up" : "down"}
            className="font-mono text-xs font-medium text-white/90"
          />
        </span>
      </span>
    </span>
  );
}

export function CardFolderPreview() {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <div className="flex min-h-72 w-full items-center justify-center px-6 py-9">
      <CardFolder
        title="Saurabh Chauhan"
        cardNumber={CARD_NUMBER}
        expiry="08/29"
        cvv="123"
        detailsVisible={detailsVisible}
        onDetailsVisibleChange={setDetailsVisible}
        card={<CardArtwork detailsVisible={detailsVisible} />}
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`A landscape card tucked into a stitched purse pocket that lifts forw… 主要导出：CardFolder。 最小用法：<CardFolder title={…} cardNumber={…} expiry={…} cvv={…} card={…} />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/folder.md。属性与示例见 packages/registry/docs/vendor/beui-card-folder.md。`,upstream:`https://beui.dev/r/card-folder.json`};export{e as default};