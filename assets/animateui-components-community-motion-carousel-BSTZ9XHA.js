var e={vendored:{source:`animateui`,license:`MIT + Commons Clause`,files:[`components/vendor/animateui/components/community/motion-carousel.tsx`,`components/vendor/animateui/NOTICE.md`],dependencies:[`embla-carousel`,`embla-carousel-react`,`lucide-react`,`motion`],registryDependencies:[`@developstack/animateui-components-buttons-button`],preview:{kind:`example`,module:`examples/animateui/components-community-motion-carousel.tsx`,export:`MotionCarouselDemo`,example:`https://animate-ui.com/r/demo-components-community-motion-carousel.json`},note:{summaryZh:`轮播（动效组件）。`,importLine:`import { MotionCarousel } from "@/components/vendor/animateui/components/community/motion-carousel";`,usage:`<MotionCarousel slides={…} />`,exports:[{name:`MotionCarousel`,kind:`component`,propsType:`PropType`,inline:!0,union:!1,props:[{name:`slides`,type:`number[]`,optional:!1},{name:`options`,type:`Partial<OptionsType>`,optional:!0}],inherited:[]}],example:{url:`https://animate-ui.com/r/demo-components-community-motion-carousel.json`,code:`'use client';

import * as React from 'react';
import { MotionCarousel } from '@/components/vendor/animateui/components/community/motion-carousel';
import { EmblaOptionsType } from 'embla-carousel';

export const MotionCarouselDemo = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 6;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return <MotionCarousel slides={SLIDES} options={OPTIONS} />;
};
`},exampleNote:null}},docsField:`A carousel built on top of Embla Carousel with smooth Motion-powered a… 主要导出：MotionCarousel。 最小用法：<MotionCarousel slides={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/carousel.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/animateui-components-community-motion-carousel.md。`,upstream:`https://animate-ui.com/r/components-community-motion-carousel.json`};export{e as default};