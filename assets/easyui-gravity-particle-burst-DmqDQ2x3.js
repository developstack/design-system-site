var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/gravity-particle-burst.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/gravity-particle-burst.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/gravity-particle-burst.tsx`},note:{summaryZh:null,importLine:`import { GravityParticleBurst } from "@/components/vendor/easyui/ui/gravity-particle-burst";`,usage:`<GravityParticleBurst />`,exports:[{name:`GravityParticleBurstProps`,kind:`type`},{name:`GravityParticleBurst`,kind:`component`,propsType:`GravityParticleBurstProps`,inline:!1,union:!1,props:[{name:`label`,type:`string`,optional:!0,default:`'Create particle burst'`},{name:`particleCount`,type:`number`,optional:!0,default:`36`},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`@types/react`,count:277,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/gravity-particle-burst.tsx`,code:`import { GravityParticleBurst } from '@/components/vendor/easyui/ui/gravity-particle-burst';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview(_props: ComponentPreviewProps) {
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <div className="pointer-events-none scale-90">
              <GravityParticleBurst particleCount={18}>Burst</GravityParticleBurst>
            </div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A pointer-triggered canvas particle burst with velocity, gravity, friction, and short-lived physical follow-through. 主要导出：GravityParticleBurst。 最小用法：<GravityParticleBurst />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/easyui-gravity-particle-burst.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#gravity-particle-burst`};export{e as default};