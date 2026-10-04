var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/animate/github-stars-wheel.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`lucide-react`],registryDependencies:[`@developstack/animateui-primitives-effects-particles`,`@developstack/animateui-primitives-texts-scrolling-number`],preview:{kind:`example`,module:`examples/animateui/components-animate-github-stars-wheel.tsx`,export:`GitHubStarsWheelDemo`,example:`https://animate-ui.com/r/demo-components-animate-github-stars-wheel.json`,props:{direction:`btt`,delay:1e3,step:10}},note:{summaryZh:null,importLine:`import { GitHubStarsWheel } from "@/components/vendor/animateui/components/animate/github-stars-wheel";`,usage:`<GitHubStarsWheel />`,exports:[{name:`GitHubStarsWheel`,kind:`component`,propsType:`GitHubStarsWheelProps`,inline:!1,union:!1,props:[{name:`username`,type:`string`,optional:!0},{name:`repo`,type:`string`,optional:!0},{name:`direction`,type:`"btt" | "ttb"`,optional:!0,default:`'btt'`},{name:`delay`,type:`number`,optional:!0,default:`0`},{name:`value`,type:`number`,optional:!0},{name:`step`,type:`number`,optional:!0,default:`100`},{name:`inView`,type:`boolean`,optional:!0},{name:`inViewOnce`,type:`boolean`,optional:!0},{name:`inViewMargin`,type:`MarginType`,optional:!0},{name:`itemsSize`,type:`number`,optional:!0,default:`35`},{name:`sideItemsCount`,type:`number`,optional:!0,default:`2`},{name:`onNumberChange`,type:`(value: number) => void`,optional:!0}],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`GitHubStarsWheelProps`,kind:`type`}],example:{url:`https://animate-ui.com/r/demo-components-animate-github-stars-wheel.json`,code:`import { GitHubStarsWheel } from '@/components/vendor/animateui/components/animate/github-stars-wheel';

interface GitHubStarsWheelDemoProps {
  delay: number;
  direction: 'btt' | 'ttb';
}

export const GitHubStarsWheelDemo = ({
  delay,
  direction,
}: GitHubStarsWheelDemoProps) => {
  return (
    <div className="size-full flex items-center justify-center">
      <GitHubStarsWheel
        username="imskyleen"
        repo="animate-ui"
        delay={delay}
        direction={direction}
      />
    </div>
  );
};
`},exampleNote:null}},docsField:`A scrolling wheel that displays GitHub stars count. 主要导出：GitHubStarsWheel。 最小用法：<GitHubStarsWheel />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/github-stars.md。属性与示例见 packages/registry/docs/vendor/animateui-components-animate-github-stars-wheel.md。`,upstream:`https://animate-ui.com/r/components-animate-github-stars-wheel.json`};export{e as default};