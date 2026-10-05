var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/meteors.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/meteors.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/meteors.tsx`},note:{summaryZh:null,importLine:`import { Meteors } from "@/components/vendor/easyui/ui/meteors";`,usage:`<Meteors />`,exports:[{name:`MeteorsProps`,kind:`type`},{name:`Meteors`,kind:`component`,propsType:`MeteorsProps`,inline:!1,union:!1,props:[{name:`number`,type:`number`,optional:!0,default:`20`,doc:`Total number of meteor streaks. Default: 20`},{name:`color`,type:`string`,optional:!0,default:`"#94A3B8"`,doc:`Primary meteor head color. Default: "#94A3B8"`},{name:`trailColor`,type:`string`,optional:!0,default:`"#64748B"`,doc:`Tail gradient accent color. Default: "#64748B"`},{name:`tailLength`,type:`number`,optional:!0,default:`60`,doc:`Length of the meteor tail in pixels. Default: 60`},{name:`angle`,type:`number`,optional:!0,default:`215`,doc:`Trajectory angle in degrees. Default: 215 (down-left)`},{name:`minDelay`,type:`number`,optional:!0,default:`0.2`,doc:`Minimum animation delay in seconds. Default: 0.2`},{name:`maxDelay`,type:`number`,optional:!0,default:`1.2`,doc:`Maximum animation delay in seconds. Default: 1.2`},{name:`minDuration`,type:`number`,optional:!0,default:`2`,doc:`Minimum animation duration in seconds. Default: 2`},{name:`maxDuration`,type:`number`,optional:!0,default:`8`,doc:`Maximum animation duration in seconds. Default: 8`},{name:`className`,type:`string`,optional:!0,doc:`Additional container classes`},{name:`children`,type:`ReactNode`,optional:!0,doc:`Optional child elements to wrap`}],inherited:[{package:`@types/react`,count:275,names:[]}]},{name:`default`,local:`Meteors`,kind:`component`,propsType:`MeteorsProps`,inline:!1,union:!1,props:[{name:`number`,type:`number`,optional:!0,default:`20`,doc:`Total number of meteor streaks. Default: 20`},{name:`color`,type:`string`,optional:!0,default:`"#94A3B8"`,doc:`Primary meteor head color. Default: "#94A3B8"`},{name:`trailColor`,type:`string`,optional:!0,default:`"#64748B"`,doc:`Tail gradient accent color. Default: "#64748B"`},{name:`tailLength`,type:`number`,optional:!0,default:`60`,doc:`Length of the meteor tail in pixels. Default: 60`},{name:`angle`,type:`number`,optional:!0,default:`215`,doc:`Trajectory angle in degrees. Default: 215 (down-left)`},{name:`minDelay`,type:`number`,optional:!0,default:`0.2`,doc:`Minimum animation delay in seconds. Default: 0.2`},{name:`maxDelay`,type:`number`,optional:!0,default:`1.2`,doc:`Maximum animation delay in seconds. Default: 1.2`},{name:`minDuration`,type:`number`,optional:!0,default:`2`,doc:`Minimum animation duration in seconds. Default: 2`},{name:`maxDuration`,type:`number`,optional:!0,default:`8`,doc:`Maximum animation duration in seconds. Default: 8`},{name:`className`,type:`string`,optional:!0,doc:`Additional container classes`},{name:`children`,type:`ReactNode`,optional:!0,doc:`Optional child elements to wrap`}],inherited:[{package:`@types/react`,count:275,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/meteors.tsx`,code:`import { Meteors } from '@/components/vendor/easyui/ui/meteors';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] overflow-hidden bg-transparent p-6 flex flex-col items-center justify-center select-none">
      <Meteors
        number={isHovered ? 24 : 16}
        color="#E5E5E5"
        trailColor="#525252"
        tailLength={55}
        minDuration={2}
        maxDuration={6}
      />
      <div className="relative z-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] bg-[#202020]/90 border border-[#363636] px-2.5 py-1 rounded-md backdrop-blur-sm shadow-xs">
          Meteors Stream
        </span>
        <h4 className="text-sm font-semibold text-[#F5F5F5] mt-2">Stream Engine</h4>
        <p className="text-[11px] text-[#737373] line-clamp-1 mt-0.5">
          Luminous diagonal trails on dark surface
        </p>
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A lightweight, highly aesthetic animated meteor shower effect that streams diagonal glowing celestial light beams across cards,… 主要导出：Meteors。 最小用法：<Meteors />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/background.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-meteors.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#meteors`};export{e as default};