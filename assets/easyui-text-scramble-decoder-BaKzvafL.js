var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/text-scramble-decoder.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/text-scramble-decoder.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/text-scramble-decoder.tsx`},note:{summaryZh:`文字动效（动效组件）。`,importLine:`import { TextScrambleDecoder } from "@/components/vendor/easyui/ui/text-scramble-decoder";`,usage:`<TextScrambleDecoder text={…} />`,exports:[{name:`TextScrambleDecoderProps`,kind:`type`},{name:`TextScrambleDecoder`,kind:`component`,propsType:`TextScrambleDecoderProps`,inline:!1,union:!1,props:[{name:`text`,type:`string`,optional:!1},{name:`characters`,type:`string`,optional:!0,default:`DEFAULT_CHARACTERS`},{name:`duration`,type:`number`,optional:!0,default:`800`},{name:`trigger`,type:`"hover" | "manual" | "mount"`,optional:!0,default:`'mount'`},{name:`replayLabel`,type:`string`,optional:!0,default:`'Replay text decode'`}],inherited:[{package:`@types/react`,count:278,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/text-scramble-decoder.tsx`,code:`import { TextScrambleDecoder } from '@/components/vendor/easyui/ui/text-scramble-decoder';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <TextScrambleDecoder
              key={hovered ? 'hovered' : 'idle'}
              text="EASYUI.SYNCED"
              trigger="mount"
              duration={650}
              className="text-xs"
            />
          </div>
        );
}
`},exampleNote:null}},docsField:`A controlled text reveal that resolves scrambled glyphs into readable copy withou… 主要导出：TextScrambleDecoder。 最小用法：<TextScrambleDecoder text={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/text.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-text-scramble-decoder.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#text-scramble-decoder`};export{e as default};