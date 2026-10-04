var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/backgrounds/stars.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/animateui/components-backgrounds-stars.tsx`,export:`StarsBackgroundDemo`,example:`https://animate-ui.com/r/demo-components-backgrounds-stars.json`},note:{summaryZh:`动画背景（动效组件）。`,importLine:`import { StarLayer } from "@/components/vendor/animateui/components/backgrounds/stars";`,usage:`<StarLayer count={…} size={…} transition={…} starColor={…} />`,exports:[{name:`StarLayer`,kind:`component`,propsType:`StarLayerProps`,inline:!1,union:!1,props:[{name:`count`,type:`number`,optional:!1,default:`1000`},{name:`size`,type:`number`,optional:!1,default:`1`},{name:`transition`,type:`(Transition<any> | undefined) & Transition`,optional:!1,default:`{ repeat: Infinity, duration: 50, ease: 'linear' }`,doc:'Default transition. If no `transition` is defined in `animate`, it will use the transition defined here. ```jsx const spring = { type: "spring", damping: 10, stiffness: 100 } <motion.div transition={spring} animate={{ scale: 1.2 }} /> ```'},{name:`starColor`,type:`string`,optional:!1,default:`'#fff'`}],inherited:[{package:`映射类型生成，来源无法定位`,count:274,names:[]},{package:`motion-dom`,count:62,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:2,names:[`children`,`style`]}]},{name:`StarsBackground`,kind:`component`,propsType:`StarsBackgroundProps`,inline:!1,union:!1,props:[{name:`factor`,type:`number`,optional:!0,default:`0.05`},{name:`speed`,type:`number`,optional:!0,default:`50`},{name:`transition`,type:`SpringOptions`,optional:!0,default:`{ stiffness: 50, damping: 20 }`},{name:`starColor`,type:`string`,optional:!0,default:`'#fff'`},{name:`pointerEvents`,type:`boolean`,optional:!0,default:`true`}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`StarLayerProps`,kind:`type`},{name:`StarsBackgroundProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-backgrounds-stars.json`,code:`import { StarsBackground } from '@/components/vendor/animateui/components/backgrounds/stars';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';

export const StarsBackgroundDemo = () => {
  const { resolvedTheme } = useTheme();

  return (
    <StarsBackground
      starColor={resolvedTheme === 'dark' ? '#FFF' : '#000'}
      className={cn(
        'absolute inset-0 flex items-center justify-center rounded-xl',
        'dark:bg-[radial-gradient(ellipse_at_bottom,_#262626_0%,_#000_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#fff_100%)]',
      )}
    />
  );
};
`},exampleNote:null}},docsField:`An interactive background featuring animated dots of varying sizes and speeds, simul… 主要导出：StarLayer、StarsBackground。 最小用法：<StarLayer count={…} size={…} transition={…} starColor={…} />。 收录组件，不随品牌层和暗色变化，有自有组件时用自有组件。属性与示例见 packages/registry/docs/vendor/animateui-components-backgrounds-stars.md。`,upstream:`https://animate-ui.com/r/components-backgrounds-stars.json`};export{e as default};