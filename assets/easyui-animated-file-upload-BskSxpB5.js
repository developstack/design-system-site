var e={vendored:{source:`easyui`,license:`MIT`,files:[`components/vendor/easyui/ui/animated-file-upload.tsx`,`components/vendor/easyui/lib/utils.ts`,`components/vendor/easyui/lib/motion-tokens.ts`,`components/vendor/easyui/NOTICE.md`],dependencies:[`clsx`,`lucide-react`,`motion`,`tailwind-merge`],registryDependencies:[],preview:{kind:`example`,module:`examples/easyui/animated-file-upload.tsx`,export:`default`,example:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/animated-file-upload.tsx`},note:{summaryZh:`文件上传（动效组件）。`,importLine:`import { AnimatedFileUpload } from "@/components/vendor/easyui/ui/animated-file-upload";`,usage:`<AnimatedFileUpload />`,exports:[{name:`FileUploadStatus`,kind:`type`},{name:`UploadFileItem`,kind:`type`},{name:`AnimatedFileUploadProps`,kind:`type`},{name:`AnimatedFileUpload`,kind:`component`,propsType:`AnimatedFileUploadProps`,inline:!1,union:!1,props:[{name:`multiple`,type:`boolean`,optional:!0,default:`true`,doc:`Allow multiple files selection and upload`},{name:`accept`,type:`string | string[]`,optional:!0,doc:`Accepted MIME types or extensions (e.g., "image/*,application/pdf" or [".png", ".jpg"])`},{name:`maxSize`,type:`number`,optional:!0,default:`25 * 1024 * 1024`,doc:`Maximum file size in bytes (e.g., 10 * 1024 * 1024 for 10MB)`},{name:`maxFiles`,type:`number`,optional:!0,default:`10`,doc:`Maximum number of files allowed when multiple is true`},{name:`dropTitle`,type:`string`,optional:!0,default:`'Drop files here'`,doc:`Custom label for primary drop title`},{name:`dropSubtitle`,type:`string`,optional:!0,default:`'or browse from your device'`,doc:`Custom label for secondary browse action`},{name:`variant`,type:`"compact" | "standard"`,optional:!0,default:`'standard'`,doc:`Layout mode: standard full-size or compact inline`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`,doc:`Disabled state`},{name:`initialFiles`,type:`UploadFileItem[]`,optional:!0,doc:`Initial files list for controlled or default showcase`},{name:`onFilesSelected`,type:`(files: File[]) => void`,optional:!0,doc:`Callback fired when files are dropped or selected`},{name:`onUploadComplete`,type:`(file: UploadFileItem) => void`,optional:!0,doc:`Callback fired when a file upload completes`},{name:`uploadHandler`,type:`(file: UploadFileItem, onProgress: (progress: number) => void) => Promise<void>`,optional:!0,doc:`Custom upload simulation or upload handler returning a promise`},{name:`className`,type:`string`,optional:!0,doc:`Custom class name`}],inherited:[]}],example:{url:`https://github.com/Surajmaurya1/easyui/blob/9dda21c569c9fe194d1c641fd3804fbea5e1098a/src/components/registry/previews/items/animated-file-upload.tsx`,code:`import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/components/vendor/easyui/lib/utils';
import type { ComponentPreviewProps } from './preview-props';

export default function Preview({ isHovered = false }: ComponentPreviewProps) {
  const hovered = isHovered;
  return (
          <div className="h-52 flex items-center justify-center p-3">
            <motion.div
              animate={{ borderColor: hovered ? '#4A4A4A' : '#1F1F1F', scale: hovered ? 1.02 : 1 }}
              className="w-full max-w-[240px] p-3 rounded-xl border border-dashed bg-[#0E0E0E] flex flex-col items-center justify-center text-center pointer-events-none scale-100 sm:scale-100 transition-colors shadow-xs"
            >
              <motion.div
                animate={{ y: hovered ? -3 : 0 }}
                className={cn('w-7 h-7 rounded-lg border flex items-center justify-center mb-1.5 transition-colors', hovered ? 'bg-[#FAFAFA] text-[#050505] border-[#FAFAFA]' : 'bg-[#141414] border-[#1F1F1F] text-[#A1A1A1]')}
              >
                <Sparkles className="w-3.5 h-3.5" />
              </motion.div>
              <span className="text-[11px] font-medium text-[#FAFAFA]">{hovered ? 'Drop to Upload' : 'Drop files here'}</span>
              <span className="text-[9px] text-[#6B6B6B]">or browse device</span>
            </motion.div>
          </div>
        );
}
`},exampleNote:null}},docsField:`A minimal, physical drag-and-drop file uploader with smooth drop reaction, independent f… 主要导出：AnimatedFileUpload。 最小用法：<AnimatedFileUpload />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/file-upload.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/easyui-animated-file-upload.md。`,upstream:`https://raw.githubusercontent.com/Surajmaurya1/easyui/9dda21c569c9fe194d1c641fd3804fbea5e1098a/registry.json#animated-file-upload`};export{e as default};