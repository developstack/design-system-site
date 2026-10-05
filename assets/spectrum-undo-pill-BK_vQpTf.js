var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/undo-pill.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/spectrum/undo-pill.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/undo-pill-demo.json`},note:{summaryZh:null,importLine:`import { UndoPill } from "@/components/vendor/spectrum/undo-pill";`,usage:`<UndoPill open={…} onUndo={…} onExpire={…} />`,exports:[{name:`UndoPillProps`,kind:`type`},{name:`UndoPill`,kind:`component`,propsType:`UndoPillProps`,inline:!1,union:!1,props:[{name:`open`,type:`boolean`,optional:!1,doc:`Controls whether the pill is shown. Fully controlled`},{name:`label`,type:`string`,optional:!0,default:`"Deleted"`,doc:`Message shown inside the pill. Default "Deleted"`},{name:`duration`,type:`number`,optional:!0,default:`5`,doc:`Countdown length in seconds. Default 5`},{name:`onUndo`,type:`() => void`,optional:!1,doc:`Fires when the Undo button is clicked or Escape is pressed within`},{name:`onExpire`,type:`() => void`,optional:!1,doc:`Fires once when the countdown completes`},{name:`pauseOnHover`,type:`boolean`,optional:!0,default:`true`,doc:`Pause the countdown while hovered or focused. Default true`},{name:`undoLabel`,type:`string`,optional:!0,default:`"Undo"`,doc:`Text of the undo button. Default "Undo"`},{name:`className`,type:`string`,optional:!0,doc:`Additional classes merged with the default pill styles`}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/undo-pill-demo.json`,code:`'use client';

import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Trash2 } from 'lucide-react';
import { UndoPill } from '@/components/vendor/spectrum/undo-pill';

const MESSAGES = [
  {
    id: 1,
    sender: 'Ana Wells',
    avatar: '/avatars/people/01.jpg',
    preview: 'The homepage mock is ready for review',
  },
  {
    id: 2,
    sender: 'Dev Patel',
    avatar: '/avatars/people/03.jpg',
    preview: 'Standup moved to 10:30 tomorrow',
  },
  {
    id: 3,
    sender: 'Mia Chen',
    avatar: '/avatars/people/06.jpg',
    preview: 'Shipping notes for the 2.4 release',
  },
];

export default function UndoPillDemo() {
  const [deletedIds, setDeletedIds] = useState<number[]>([]);
  const [pendingId, setPendingId] = useState<number | null>(null);

  const visibleMessages = MESSAGES.filter(
    (message) => !deletedIds.includes(message.id) && message.id !== pendingId,
  );

  const handleDelete = useCallback(
    (id: number) => {
      // Deleting while a pill is open commits the previous pending delete
      if (pendingId !== null) {
        setDeletedIds((prev) => [...prev, pendingId]);
      }
      setPendingId(id);
    },
    [pendingId],
  );

  const handleUndo = useCallback(() => {
    setPendingId(null);
  }, []);

  const handleExpire = useCallback(() => {
    if (pendingId !== null) {
      setDeletedIds((prev) => [...prev, pendingId]);
    }
    setPendingId(null);
  }, [pendingId]);

  return (
    <div className="relative flex min-h-[280px] w-full max-w-md flex-col justify-center py-10">
      <div className="flex flex-col">
        <AnimatePresence initial={false}>
          {visibleMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 360, damping: 34 }}
              className="overflow-hidden"
            >
              <div className="flex items-center gap-3 border-b border-neutral-200 py-3 dark:border-neutral-800">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={message.avatar}
                  alt=""
                  loading="lazy"
                  width={36}
                  height={36}
                  className="size-9 shrink-0 rounded-full object-cover outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-neutral-900 dark:text-neutral-100">
                    {message.sender}
                  </p>
                  <p className="truncate text-sm text-neutral-500 dark:text-neutral-400">
                    {message.preview}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(message.id)}
                  aria-label={\`Delete message from \${message.sender}\`}
                  className="rounded-full p-2 text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700 focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-200 dark:focus-visible:ring-neutral-300"
                >
                  <Trash2 size={16} aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {visibleMessages.length === 0 && pendingId === null && (
          <div className="flex flex-col items-center gap-2 py-8 text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400">All messages deleted</p>
            <button
              type="button"
              onClick={() => setDeletedIds([])}
              className="text-sm font-medium text-neutral-700 underline-offset-2 hover:underline dark:text-neutral-300"
            >
              Reset list
            </button>
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-4 flex justify-center">
        <UndoPill
          open={pendingId !== null}
          label="Message deleted"
          onUndo={handleUndo}
          onExpire={handleExpire}
        />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`An inline undo pill with a draining countdown ring that pauses on hover and fires undo or expire callbacks. 主要导出：UndoPill。 最小用法：<UndoPill open={…} onUndo={…} onExpire={…} />。 收录组件，颜色原样来自上游。独有组件。属性与示例见 packages/registry/docs/vendor/spectrum-undo-pill.md。`,upstream:`https://ui.spectrumhq.in/r/undo-pill.json`};export{e as default};