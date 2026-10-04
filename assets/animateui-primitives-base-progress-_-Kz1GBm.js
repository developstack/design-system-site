var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/primitives/base/progress.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`@base-ui/react`,`motion`],registryDependencies:[`@developstack/animateui-lib-get-strict-context`,`@developstack/animateui-primitives-texts-counting-number`],preview:{kind:`example`,module:`examples/animateui/primitives-base-progress.tsx`,export:`BaseProgressDemo`,example:`https://animate-ui.com/r/demo-primitives-base-progress.json`},note:{summaryZh:`进度条（基于 Base UI 的原语）。`,importLine:`import { Progress } from "@/components/vendor/animateui/primitives/base/progress";`,usage:`<Progress />`,exports:[{name:`Progress`,kind:`component`,propsType:`Omit<ProgressRootProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:10,names:[`className`,`format`,`getAriaValueText`,`locale`,`max`,`min`,`render`,`style`,`value`]}]},{name:`ProgressIndicator`,kind:`component`,propsType:`Omit<MotionComponentProps<Omit<ProgressIndicatorProps, "ref"> & RefAttributes<HTMLDivElement>>, "ch…`,inline:!1,union:!1,props:[{name:`transition`,type:`Transition<any>`,optional:!0,default:`{ type: 'spring', stiffness: 100, damping: 30 }`,from:`motion-dom`}],inherited:[{package:`映射类型生成，来源无法定位`,count:272,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`ProgressTrack`,kind:`component`,propsType:`Omit<ProgressTrackProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ProgressLabel`,kind:`component`,propsType:`Omit<ProgressLabelProps, "ref"> & RefAttributes<HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ProgressValue`,kind:`component`,propsType:`ProgressValueProps`,inline:!1,union:!1,props:[{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`fromNumber`,type:`number`,optional:!0},{name:`padStart`,type:`boolean`,optional:!0},{name:`decimalSeparator`,type:`string`,optional:!0},{name:`decimalPlaces`,type:`number`,optional:!0},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 80, damping: 20 }`},{name:`delay`,type:`number`,optional:!0},{name:`initiallyStable`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]},{package:`@base-ui/react`,count:3,names:[`children`,`className`,`style`]}]},{name:`useProgress`,kind:`hook`,signature:`() => ProgressContextType`,params:[],requiredParams:0},{name:`ProgressProps`,kind:`type`},{name:`ProgressIndicatorProps`,kind:`type`},{name:`ProgressTrackProps`,kind:`type`},{name:`ProgressLabelProps`,kind:`type`},{name:`ProgressValueProps`,kind:`type`},{name:`ProgressContextType`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-primitives-base-progress.json`,code:`'use client';

import * as React from 'react';
import {
  Progress,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
  ProgressIndicator,
} from '@/components/vendor/animateui/primitives/base/progress';

export const BaseProgressDemo = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 25;
      });
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    if (progress >= 100) setTimeout(() => setProgress(0), 4000);
  }, [progress]);

  return (
    <Progress value={progress} className="w-[300px] space-y-2">
      <div className="flex items-center justify-between gap-1">
        <ProgressLabel className="text-sm font-medium">
          Export data
        </ProgressLabel>
        <span className="text-sm">
          <ProgressValue /> %
        </span>
      </div>
      <ProgressTrack className="w-[300px] h-2 border overflow-hidden">
        <ProgressIndicator className="bg-primary" />
      </ProgressTrack>
    </Progress>
  );
};
`},exampleNote:null}},docsField:`Displays the status of a task that takes a long time. 主要导出：Progress、ProgressIndicator、ProgressTrack、ProgressLabel 等。 最小用法：<Progress />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-primitives-base-progress.md。`,upstream:`https://animate-ui.com/r/primitives-base-progress.json`};export{e as default};