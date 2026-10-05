var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/notification-stack.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/notification-stack.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/notification-stack.tsx`},note:{summaryZh:`通知堆叠（动效组件）。`,importLine:`import { NotificationStack } from "@/components/vendor/easyui/ui/notification-stack";`,usage:`<NotificationStack />`,exports:[{name:`NotificationItem`,kind:`type`},{name:`NotificationStackProps`,kind:`type`},{name:`NotificationStack`,kind:`component`,propsType:`NotificationStackProps`,inline:!1,union:!1,props:[{name:`initialNotifications`,type:`NotificationItem[]`,optional:!0,default:`[ { id: '1', title: 'Deployment Successful', description: '…`},{name:`className`,type:`string`,optional:!0},{name:`maxVisible`,type:`number`,optional:!0,default:`3`}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/notification-stack.tsx`,code:`import { motion } from 'motion/react';
import { NotificationStack } from '@/components/vendor/easyui/ui/notification-stack';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-4">
            <motion.div animate={{ y: hovered ? -4 : 0 }}>
              <NotificationStack maxVisible={2} />
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A stacked notification card system with physical spring stacking elevation, swipe-to-dismiss… 主要导出：NotificationStack。 最小用法：<NotificationStack />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/notification.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-notification-stack.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#notification-stack`};export{e as default};