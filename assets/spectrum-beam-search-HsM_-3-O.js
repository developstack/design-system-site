var e={vendored:{source:`spectrum`,license:`Apache-2.0`,files:[`components/vendor/spectrum/beam-search.tsx`,`components/vendor/spectrum/NOTICE.md`],dependencies:[`border-beam`,`lucide-react`],registryDependencies:[`@developstack/spectrum-use-surface-theme`],preview:{kind:`example`,module:`examples/spectrum/beam-search.tsx`,export:`default`,example:`https://ui.spectrumhq.in/r/beam-search-demo.json`},note:{summaryZh:`搜索框（组件）。`,importLine:`import { BeamSearch } from "@/components/vendor/spectrum/beam-search";`,usage:`<BeamSearch />`,exports:[{name:`BeamSearchProps`,kind:`type`},{name:`BeamSearch`,kind:`component`,propsType:`BeamSearchProps`,inline:!1,union:!1,props:[{name:`value`,type:`string`,optional:!0},{name:`defaultValue`,type:`string`,optional:!0,default:`''`},{name:`onChange`,type:`(value: string) => void`,optional:!0},{name:`onSubmit`,type:`(value: string) => void`,optional:!0,doc:`Fires on Enter with the current value`},{name:`placeholder`,type:`string`,optional:!0,default:`'Search…'`},{name:`alwaysOn`,type:`boolean`,optional:!0,default:`false`,doc:`Keep the beam running even without focus. Default false`},{name:`colorVariant`,type:`BorderBeamColorVariant`,optional:!0,default:`'colorful'`,doc:`Palette: "colorful" | "ocean" | "sunset" | "mono". Default "colorful"`},{name:`theme`,type:`SurfaceTheme`,optional:!0,default:`'auto'`,doc:'"auto" follows a `.dark`/`.light` class on <html>, then the OS. Default "auto"'},{name:`trailing`,type:`ReactNode`,optional:!0,doc:`Right-hand slot, e.g. a keyboard hint`},{name:`className`,type:`string`,optional:!0}],inherited:[]}],example:{url:`https://ui.spectrumhq.in/r/beam-search-demo.json`,code:`'use client';

import * as React from 'react';
import { BeamSearch } from '@/components/vendor/spectrum/beam-search';

const ITEMS = [
  'Accordion',
  'Animated Switch',
  'Avatar Stack',
  'Beam Card',
  'Command Search',
  'Dynamic Island',
  'Kanban Board',
  'Metal Button',
  'Number Ticker',
  'Swipe to Delete',
];

export default function BeamSearchDemo() {
  const [query, setQuery] = React.useState('');
  const matches = ITEMS.filter((item) => item.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="flex w-full flex-col items-center gap-5 py-10">
      <div className="w-full max-w-[520px]">
        <BeamSearch
          placeholder="Search components…"
          onChange={setQuery}
          trailing={
            <kbd className="rounded-md border border-black/10 px-1.5 py-0.5 font-mono text-[11px] text-neutral-500 dark:border-white/12 dark:text-neutral-400">
              ⌘K
            </kbd>
          }
        />
        <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-neutral-600 dark:text-neutral-300">
          {matches.slice(0, 6).map((item) => (
            <li key={item} className="truncate rounded-lg px-2 py-1">
              {item}
            </li>
          ))}
          {matches.length === 0 && (
            <li className="col-span-2 px-2 py-1 text-neutral-400">No matches</li>
          )}
        </ul>
      </div>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">
        Focus the field — the beam travels along the bottom edge while you type.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`A search bar whose bottom edge lights up with a traveling beam while it has focus. 主要导出：BeamSearch。 最小用法：<BeamSearch />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/search.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/spectrum-beam-search.md。`,upstream:`https://ui.spectrumhq.in/r/beam-search.json`};export{e as default};