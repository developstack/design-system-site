var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/base/progress.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[],registryDependencies:[`@developstack/animateui-primitives-base-progress`],preview:{kind:`example`,module:`examples/animateui/components-base-progress.tsx`,export:`BaseProgressDemo`,example:`https://animate-ui.com/r/demo-components-base-progress.json`},note:{summaryZh:`进度条（基于 Base UI 的组件）。`,importLine:`import { Progress } from "@/components/vendor/animateui/components/base/progress";`,usage:`<Progress />`,exports:[{name:`Progress`,kind:`component`,propsType:`Omit<ProgressRootProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:274,names:[]},{package:`@base-ui/react`,count:10,names:[`className`,`format`,`getAriaValueText`,`locale`,`max`,`min`,`render`,`style`,`value`]}]},{name:`ProgressTrack`,kind:`component`,propsType:`Omit<ProgressTrackProps, "ref"> & RefAttributes<HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ProgressLabel`,kind:`component`,propsType:`Omit<ProgressLabelProps, "ref"> & RefAttributes<HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:275,names:[]},{package:`@base-ui/react`,count:3,names:[`className`,`render`,`style`]}]},{name:`ProgressValue`,kind:`component`,propsType:`ProgressValueProps`,inline:!1,union:!1,props:[{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`fromNumber`,type:`number`,optional:!0},{name:`padStart`,type:`boolean`,optional:!0},{name:`decimalSeparator`,type:`string`,optional:!0},{name:`decimalPlaces`,type:`number`,optional:!0},{name:`transition`,type:`SpringOptions`,optional:!0},{name:`delay`,type:`number`,optional:!0},{name:`initiallyStable`,type:`boolean`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]},{package:`@base-ui/react`,count:3,names:[`children`,`className`,`style`]}]},{name:`ProgressProps`,kind:`type`},{name:`ProgressTrackProps`,kind:`type`},{name:`ProgressLabelProps`,kind:`type`},{name:`ProgressValueProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-base-progress.json`,code:`'use client';

import * as React from 'react';
import {
  Progress,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from '@/components/vendor/animateui/components/base/progress';

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
        <ProgressLabel>Export data</ProgressLabel>
        <span className="text-sm">
          <ProgressValue /> %
        </span>
      </div>
      <ProgressTrack />
    </Progress>
  );
};
`},exampleNote:null}},docsField:`Displays the status of a task that takes a long time. 主要导出：Progress、ProgressTrack、ProgressLabel、ProgressValue。 最小用法：<Progress />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/progress.md。属性与示例见 packages/registry/docs/vendor/animateui-components-base-progress.md。`,upstream:`https://animate-ui.com/r/components-base-progress.json`};export{e as default};