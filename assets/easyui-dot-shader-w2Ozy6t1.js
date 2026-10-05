var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/dot-shader.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/dot-shader.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dot-shader.tsx`},note:{summaryZh:null,importLine:`import { DotShader } from "@/components/vendor/easyui/ui/dot-shader";`,usage:`<DotShader />`,exports:[{name:`DotShaderProps`,kind:`type`},{name:`DotShader`,kind:`component`,propsType:`DotShaderProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`dotColor`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.15)'`,doc:`Base idle color of dots (hex or rgba). Default: "rgba(255, 255, 255, 0.15)"`},{name:`accentColor`,type:`string`,optional:!0,default:`'#00F0FF'`,doc:`Highlight color of dots illuminated by cursor proximity. Default: "#00F0FF"`},{name:`dotSize`,type:`number`,optional:!0,default:`1.5`,doc:`Base radius of each individual dot in pixels. Default: 1.5`},{name:`spacing`,type:`number`,optional:!0,default:`22`,doc:`Spacing between adjacent dots in pixels. Default: 22`},{name:`cursorRadius`,type:`number`,optional:!0,default:`180`,doc:`Influence radius around cursor in pixels. Default: 180`},{name:`distortionStrength`,type:`number`,optional:!0,default:`0.35`,doc:`Force of cursor repulsion/displacement (0 to 1). Default: 0.35`},{name:`maxScale`,type:`number`,optional:!0,default:`2.2`,doc:`Scale factor of dots at peak cursor proximity. Default: 2.2`},{name:`waveIntensity`,type:`number`,optional:!0,default:`0.25`,doc:`Ambient wave undulation amplitude (0 to 1). Default: 0.25`},{name:`speed`,type:`number`,optional:!0,default:`1`,doc:`Animation velocity multiplier. Default: 1`},{name:`interactive`,type:`boolean`,optional:!0,default:`true`,doc:`Whether cursor movement influences the shader. Default: true`},{name:`overlay`,type:`boolean`,optional:!0,default:`true`,doc:`Subtle dark/light gradient vignette to blend container boundaries. Default: true`}],inherited:[{package:`@types/react`,count:276,names:[]}]},{name:`default`,local:`DotShader`,kind:`component`,propsType:`DotShaderProps`,inline:!1,union:!1,props:[{name:`children`,type:`ReactNode`,optional:!0},{name:`className`,type:`string`,optional:!0},{name:`dotColor`,type:`string`,optional:!0,default:`'rgba(255, 255, 255, 0.15)'`,doc:`Base idle color of dots (hex or rgba). Default: "rgba(255, 255, 255, 0.15)"`},{name:`accentColor`,type:`string`,optional:!0,default:`'#00F0FF'`,doc:`Highlight color of dots illuminated by cursor proximity. Default: "#00F0FF"`},{name:`dotSize`,type:`number`,optional:!0,default:`1.5`,doc:`Base radius of each individual dot in pixels. Default: 1.5`},{name:`spacing`,type:`number`,optional:!0,default:`22`,doc:`Spacing between adjacent dots in pixels. Default: 22`},{name:`cursorRadius`,type:`number`,optional:!0,default:`180`,doc:`Influence radius around cursor in pixels. Default: 180`},{name:`distortionStrength`,type:`number`,optional:!0,default:`0.35`,doc:`Force of cursor repulsion/displacement (0 to 1). Default: 0.35`},{name:`maxScale`,type:`number`,optional:!0,default:`2.2`,doc:`Scale factor of dots at peak cursor proximity. Default: 2.2`},{name:`waveIntensity`,type:`number`,optional:!0,default:`0.25`,doc:`Ambient wave undulation amplitude (0 to 1). Default: 0.25`},{name:`speed`,type:`number`,optional:!0,default:`1`,doc:`Animation velocity multiplier. Default: 1`},{name:`interactive`,type:`boolean`,optional:!0,default:`true`,doc:`Whether cursor movement influences the shader. Default: true`},{name:`overlay`,type:`boolean`,optional:!0,default:`true`,doc:`Subtle dark/light gradient vignette to blend container boundaries. Default: true`}],inherited:[{package:`@types/react`,count:276,names:[]}]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/dot-shader.tsx`,code:`import { DotShader } from '@/components/vendor/easyui/ui/dot-shader';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  return (
    <div className="relative w-full h-full min-h-[260px] sm:min-h-[300px] overflow-hidden bg-transparent flex items-center justify-center select-none">
      <DotShader
        dotColor="rgba(255, 255, 255, 0.15)"
        accentColor={isHovered ? '#FFFFFF' : '#D4D4D4'}
        spacing={18}
        dotSize={1.5}
        cursorRadius={140}
        distortionStrength={isHovered ? 0.45 : 0.25}
        maxScale={isHovered ? 2.5 : 2.0}
        speed={isHovered ? 1.2 : 0.8}
        overlay={false}
        className="absolute inset-0 h-full w-full flex items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center text-center pointer-events-none select-none px-4">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3A3A3] bg-[#202020]/90 border border-[#363636] px-3 py-1 rounded-md backdrop-blur-sm shadow-xs">
            Dot Matrix Shader
          </span>
          <span className="text-[10px] text-[#737373] mt-1.5 font-sans">
            Interactive WebGL Grid
          </span>
        </div>
      </DotShader>
    </div>
  );
}
`},exampleNote:null}},docsField:`A GPU-accelerated interactive dot matrix background shader with magnetic cursor repulsion, proximity illumination glow… 主要导出：DotShader。 最小用法：<DotShader />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/background.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-dot-shader.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#dot-shader`};export{e as default};