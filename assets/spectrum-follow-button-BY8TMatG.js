var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/follow-button.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/follow-button.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/follow-button-demo.json`},note:{summaryZh:`按钮（组件）。`,importLine:`import { FollowButton } from "@/components/vendor/spectrum/follow-button";`,usage:`<FollowButton />`,exports:[{name:`FollowButtonProps`,kind:`type`},{name:`FollowButton`,kind:`component`,propsType:`FollowButtonProps`,inline:!1,union:!1,props:[{name:`following`,type:`boolean`,optional:!0,doc:`Controlled following state. Leave undefined for uncontrolled usage`},{name:`defaultFollowing`,type:`boolean`,optional:!0,default:`false`,doc:`Initial following state when uncontrolled. Default false`},{name:`onFollowingChange`,type:`(following: boolean) => void`,optional:!0,doc:`Fires with the next following state on every toggle`},{name:`followLabel`,type:`string`,optional:!0,default:`"Follow"`,doc:`Label of the idle call-to-action pill. Default "Follow"`},{name:`followingLabel`,type:`string`,optional:!0,default:`"Following"`,doc:`Label shown while followed. Default "Following"`},{name:`unfollowLabel`,type:`string`,optional:!0,default:`"Unfollow"`,doc:`Label revealed on hover or focus while followed. Default "Unfollow"`},{name:`size`,type:`"lg" | "md" | "sm"`,optional:!0,default:`"md"`,doc:`Visual size of the button. Default "md"`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disables pointer and keyboard interaction`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/follow-button-demo.json`,code:`'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FollowButton } from '@/components/vendor/spectrum/follow-button';

const BASE_FOLLOWERS = 2847;

export default function FollowButtonDemo() {
  const shouldReduceMotion = useReducedMotion();
  const [following, setFollowing] = useState(false);

  const followers = BASE_FOLLOWERS + (following ? 1 : 0);
  // Digits roll upward when the count just went up, downward when it dropped
  const direction = following ? 1 : -1;

  return (
    <div className="flex w-full items-center justify-center py-10">
      <div className="flex w-full max-w-sm items-center gap-4 rounded-2xl border border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-neutral-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatars/people/03.jpg"
          alt=""
          width={44}
          height={44}
          className="size-11 shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-neutral-900 dark:text-neutral-100">
            Arihant Jain
          </p>
          <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">@arihantcodes</p>
          <p className="mt-0.5 flex items-baseline gap-1 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="relative inline-flex overflow-hidden font-medium tabular-nums text-neutral-900 dark:text-neutral-100">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={followers}
                  className="inline-block"
                  initial={{ y: direction * 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: direction * -10, opacity: 0 }}
                  transition={
                    shouldReduceMotion
                      ? { duration: 0 }
                      : { type: 'spring', stiffness: 400, damping: 30 }
                  }
                >
                  {followers.toLocaleString('en')}
                </motion.span>
              </AnimatePresence>
            </span>
            followers
          </p>
        </div>
        <FollowButton following={following} onFollowingChange={setFollowing} />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A morphing follow/unfollow button with a spring width morph, animated check draw, and a hover-revealed unfo… 主要导出：FollowButton。 最小用法：<FollowButton />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/button.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-follow-button.md。`,upstream:`https://ui.spectrumhq.in/r/follow-button.json`};export{e as default};