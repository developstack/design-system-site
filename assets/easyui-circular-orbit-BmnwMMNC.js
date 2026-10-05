var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/circular-orbit.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/circular-orbit.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/circular-orbit.tsx`},note:{summaryZh:null,importLine:`import { CircularOrbit } from "@/components/vendor/easyui/ui/circular-orbit";`,usage:`<CircularOrbit />`,exports:[{name:`OrbitItem`,kind:`type`},{name:`CircularOrbitProps`,kind:`type`},{name:`CircularOrbit`,doc:"A circular gallery of tiles orbiting around a centered title. Animation runs entirely on a single `MotionValue` driven by `useAnimationFrame` — no React state updates per frame. Each tile derives its x/y, scale, opacity, blur, and z-index from the same rotation value, so the depth field stays internally consistent.",kind:`component`,propsType:`CircularOrbitProps`,inline:!1,union:!1,props:[{name:`items`,type:`OrbitItem[]`,optional:!0,default:`DEFAULT_ITEMS`,doc:`Items to place around the orbit.`},{name:`title`,type:`string`,optional:!0,default:`'Push'`,doc:`Centered headline.`},{name:`speed`,type:`number`,optional:!0,default:`0.00022`,doc:`Radians per millisecond. Smaller = slower.`},{name:`radius`,type:`number`,optional:!0,default:`270`,doc:`Pixel radius of the orbit on the desktop layout.`},{name:`pauseOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Pause the orbit when the pointer is over the gallery.`},{name:`className`,type:`string`,optional:!0},{name:`containerClassName`,type:`string`,optional:!0},{name:`titleClassName`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`default`,local:`CircularOrbit`,doc:"A circular gallery of tiles orbiting around a centered title. Animation runs entirely on a single `MotionValue` driven by `useAnimationFrame` — no React state updates per frame. Each tile derives its x/y, scale, opacity, blur, and z-index from the same rotation value, so the depth field stays internally consistent.",kind:`component`,propsType:`CircularOrbitProps`,inline:!1,union:!1,props:[{name:`items`,type:`OrbitItem[]`,optional:!0,default:`DEFAULT_ITEMS`,doc:`Items to place around the orbit.`},{name:`title`,type:`string`,optional:!0,default:`'Push'`,doc:`Centered headline.`},{name:`speed`,type:`number`,optional:!0,default:`0.00022`,doc:`Radians per millisecond. Smaller = slower.`},{name:`radius`,type:`number`,optional:!0,default:`270`,doc:`Pixel radius of the orbit on the desktop layout.`},{name:`pauseOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Pause the orbit when the pointer is over the gallery.`},{name:`className`,type:`string`,optional:!0},{name:`containerClassName`,type:`string`,optional:!0},{name:`titleClassName`,type:`string`,optional:!0}],inherited:[{package:`@types/react`,count:276,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/circular-orbit.tsx`,code:`import { CircularOrbit } from '@/components/vendor/easyui/ui/circular-orbit';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 w-full flex items-center justify-center p-1 pointer-events-none overflow-hidden">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
              <div
                className="origin-center shrink-0"
                style={{ width: 440, height: 440, transform: 'scale(0.44)' }}
              >
                <CircularOrbit
                  title="Orbit"
                  speed={0.00045}
                  radius={160}
                  pauseOnHover={false}
                  className="!min-h-0 !h-[440px] !w-[440px]"
                />
              </div>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A circular gallery of image tiles orbiting around a centered title. 主要导出：CircularOrbit。 最小用法：<CircularOrbit />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/gallery.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-circular-orbit.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#circular-orbit`};export{e as default};