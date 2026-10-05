var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/speed-warp.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/speed-warp.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/speed-warp.tsx`},note:{summaryZh:null,importLine:`import { SpeedWarp } from "@/components/vendor/easyui/ui/speed-warp";`,usage:`<SpeedWarp />`,exports:[{name:`SpeedWarpProps`,kind:`type`},{name:`SpeedWarp`,kind:`component`,propsType:`SpeedWarpProps`,inline:!1,union:!1,props:[{name:`speed`,type:`number`,optional:!0,default:`25`,doc:`Velocity multiplier of stars moving toward the camera. Default: 25`},{name:`starCount`,type:`number`,optional:!0,default:`600`,doc:`Total number of 3D stars rendered. Default: 600`},{name:`className`,type:`string`,optional:!0,doc:`Optional custom class name`},{name:`children`,type:`ReactNode`,optional:!0,doc:`Optional children rendered on top of the warp canvas`}],inherited:[]},{name:`default`,local:`SpeedWarp`,kind:`component`,propsType:`SpeedWarpProps`,inline:!1,union:!1,props:[{name:`speed`,type:`number`,optional:!0,default:`25`,doc:`Velocity multiplier of stars moving toward the camera. Default: 25`},{name:`starCount`,type:`number`,optional:!0,default:`600`,doc:`Total number of 3D stars rendered. Default: 600`},{name:`className`,type:`string`,optional:!0,doc:`Optional custom class name`},{name:`children`,type:`ReactNode`,optional:!0,doc:`Optional children rendered on top of the warp canvas`}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/speed-warp.tsx`,code:`import React from 'react';
import { SpeedWarp } from '@/components/vendor/easyui/ui/speed-warp';
import type { ComponentPreviewProps } from './preview-props';

const SpeedWarpCardPreview: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  return (
    <div className="relative h-52 w-full overflow-hidden rounded-xl bg-[#050505]">
      <SpeedWarp
        speed={isHovered ? 45 : 20}
        starCount={300}
        className="absolute inset-0 h-full w-full"
      />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center p-2 pointer-events-none">
        <span className="font-mono text-[11px] font-bold text-white tracking-widest bg-black/70 px-2.5 py-1 rounded-md border border-white/15 backdrop-blur-xs">
          SPEED WARP
        </span>
      </div>
    </div>
  );
};



export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return <SpeedWarpCardPreview isHovered={hovered} />;
}
`},exampleNote:null}},docsField:`A 3D perspective canvas starfield simulation that projects relativistic light streaks toward the viewer, creating an i… 主要导出：SpeedWarp。 最小用法：<SpeedWarp />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/background.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-speed-warp.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#speed-warp`};export{e as default};