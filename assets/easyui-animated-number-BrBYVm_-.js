var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/animated-number.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/animated-number.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/animated-number.tsx`},note:{summaryZh:`数字动画（动效组件）。`,importLine:`import { AnimatedNumber } from "@/components/vendor/easyui/ui/animated-number";`,usage:`<AnimatedNumber value={…} />`,exports:[{name:`AnimatedNumberProps`,kind:`type`},{name:`AnimatedNumber`,kind:`component`,propsType:`AnimatedNumberProps`,inline:!1,union:!1,props:[{name:`value`,type:`number`,optional:!1,doc:`Numeric value to animate to`},{name:`decimals`,type:`number`,optional:!0,default:`0`,doc:`Number of decimal places (default: 0)`},{name:`prefix`,type:`string`,optional:!0,default:`''`,doc:`Prepend text or currency symbol (e.g. "$", "+")`},{name:`suffix`,type:`string`,optional:!0,default:`''`,doc:`Append text (e.g. "%", " users", "ms")`},{name:`stiffness`,type:`number`,optional:!0,default:`170`,doc:`Spring physics stiffness`},{name:`damping`,type:`number`,optional:!0,default:`22`,doc:`Spring physics damping`},{name:`mass`,type:`number`,optional:!0,default:`0.6`,doc:`Mass of spring`},{name:`useGrouping`,type:`boolean`,optional:!0,default:`true`,doc:`Format as locale string (e.g. "1,250")`},{name:`compact`,type:`boolean`,optional:!0,default:`false`,doc:`Compact notation (e.g. 1.2M, 45K)`},{name:`className`,type:`string`,optional:!0,doc:`Custom class name`}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/animated-number.tsx`,code:`import React, { useState, useEffect } from 'react';
import { AnimatedNumber } from '@/components/vendor/easyui/ui/animated-number';
import type { ComponentPreviewProps } from './preview-props';

const AnimatedNumberPreview: React.FC<{ isHovered?: boolean }> = ({ isHovered = false }) => {
  const [val, setVal] = useState(12450);

  useEffect(() => {
    if (isHovered) {
      setVal(48920);
    } else {
      setVal(12450);
    }
  }, [isHovered]);

  return (
    <div className="h-52 flex flex-col items-center justify-center p-4">
      <div className="text-2xl font-bold font-mono tracking-tight text-white mb-1">
        <AnimatedNumber value={val} prefix="$" useGrouping />
      </div>
      <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
        <span>{isHovered ? '+48.2%' : '+24.5%'}</span>
        <span className="text-[#666666]">rolling digits</span>
      </div>
    </div>
  );
};



export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return <AnimatedNumberPreview isHovered={hovered} />;
}
`},exampleNote:null}},docsField:`An Apple-grade smooth rolling digit counter that independently morphs individual numerical columns… 主要导出：AnimatedNumber。 最小用法：<AnimatedNumber value={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/number.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-animated-number.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#animated-number`};export{e as default};