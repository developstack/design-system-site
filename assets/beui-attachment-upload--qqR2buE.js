var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/attachment-upload.tsx`,`components/vendor/beui/motion/tooltip.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/motion/tooltip/positioner.tsx`,`components/vendor/beui/motion/tooltip/use-position.ts`,`components/vendor/beui/motion/tooltip-surface.tsx`,`components/vendor/beui/lib/hooks/use-dismiss.ts`,`components/vendor/beui/lib/hooks/use-hover-gesture.ts`,`components/vendor/beui/lib/hooks/use-tap-gesture.ts`,`components/vendor/beui/lib/touch.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`@floating-ui/dom`,`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/attachment-upload.tsx`,export:`AttachmentUploadPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/attachment-upload.preview.tsx`},note:{summaryZh:`附件上传（动效区块）。`,importLine:`import { AttachmentUpload } from "@/components/vendor/beui/motion/attachment-upload";`,usage:`<AttachmentUpload />`,exports:[{name:`AttachmentUploadKind`,kind:`type`},{name:`AttachmentRejectReason`,kind:`type`},{name:`AttachmentUploadStatus`,kind:`type`},{name:`AttachmentUploadItem`,kind:`type`},{name:`AttachmentUploadClassNames`,kind:`type`},{name:`AttachmentUploadProps`,kind:`type`},{name:`AttachmentUpload`,kind:`component`,propsType:`AttachmentUploadProps`,inline:!1,union:!1,props:[{name:`value`,type:`AttachmentUploadItem[]`,optional:!0},{name:`defaultValue`,type:`AttachmentUploadItem[]`,optional:!0},{name:`onValueChange`,type:`(items: AttachmentUploadItem[]) => void`,optional:!0},{name:`onFilesAdded`,type:`(items: AttachmentUploadItem[], files: File[]) => void`,optional:!0},{name:`onFilesRejected`,type:`(files: File[], reason: AttachmentRejectReason) => void`,optional:!0},{name:`onRemove`,type:`(item: AttachmentUploadItem) => void`,optional:!0},{name:`onRetry`,type:`(item: AttachmentUploadItem) => void`,optional:!0},{name:`playingId`,type:`string`,optional:!0},{name:`onAudioToggle`,type:`(item: AttachmentUploadItem) => void`,optional:!0},{name:`accept`,type:`string`,optional:!0},{name:`multiple`,type:`boolean`,optional:!0,default:`true`},{name:`maxFiles`,type:`number`,optional:!0,default:`12`},{name:`maxFileSize`,type:`number`,optional:!0,default:`DEFAULT_MAX_FILE_SIZE`},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`title`,type:`string`,optional:!0,default:`"Drag and drop or browse files"`},{name:`description`,type:`string`,optional:!0},{name:`attachmentsLabel`,type:`string`,optional:!0,default:`"Attachments"`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`AttachmentUploadClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/attachment-upload.preview.tsx`,code:`"use client";

import { useEffect, useRef, useState } from "react";
import {
  AttachmentUpload,
  type AttachmentUploadItem,
} from "@/components/vendor/beui/motion/attachment-upload";

const INITIAL_ITEMS: AttachmentUploadItem[] = [
  {
    id: "brief",
    name: "launch-brief.pdf",
    kind: "file",
    size: 32_400_000,
    href: "data:application/pdf,beUI%20launch%20brief",
    status: "failed",
    error: "Upload failed",
  },
  {
    id: "flowers",
    name: "orange-flowers.jpg",
    kind: "image",
    size: 9_800_000,
    previewUrl:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "voice-note",
    name: "launch-note.m4a",
    kind: "audio",
    currentTime: 12,
    duration: 48,
  },
];

export function AttachmentUploadPreview() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [playingId, setPlayingId] = useState<string>();
  const retryTimersRef = useRef<number[]>([]);

  useEffect(
    () => () => {
      for (const timer of retryTimersRef.current) {
        window.clearTimeout(timer);
      }
    },
    [],
  );

  useEffect(() => {
    if (!playingId) return;

    const timer = window.setInterval(() => {
      setItems((current) =>
        current.map((item) => {
          if (item.id !== playingId || !item.duration) return item;
          const nextTime = Math.min(
            item.duration,
            (item.currentTime ?? 0) + 1,
          );
          return { ...item, currentTime: nextTime };
        }),
      );
    }, 1000);

    return () => window.clearInterval(timer);
  }, [playingId]);

  useEffect(() => {
    if (!playingId) return;
    const playingItem = items.find((item) => item.id === playingId);
    if (
      playingItem?.duration &&
      (playingItem.currentTime ?? 0) >= playingItem.duration
    ) {
      setPlayingId(undefined);
    }
  }, [items, playingId]);

  return (
    <div className="w-full max-w-2xl px-3 py-6 sm:px-6">
      <AttachmentUpload
        value={items}
        onValueChange={setItems}
        onRetry={(retryItem) => {
          setItems((current) =>
            current.map((item) =>
              item.id === retryItem.id
                ? { ...item, status: "uploading", error: undefined }
                : item,
            ),
          );

          const completeTimer = window.setTimeout(() => {
            setItems((current) =>
              current.map((item) =>
                item.id === retryItem.id
                  ? { ...item, status: "complete" }
                  : item,
              ),
            );
          }, 900);
          const readyTimer = window.setTimeout(() => {
            setItems((current) =>
              current.map((item) =>
                item.id === retryItem.id
                  ? { ...item, status: "idle" }
                  : item,
              ),
            );
          }, 1900);
          retryTimersRef.current.push(completeTimer, readyTimer);
        }}
        playingId={playingId}
        onAudioToggle={(item) => {
          setPlayingId((current) =>
            current === item.id ? undefined : item.id,
          );
        }}
        attachmentsLabel="Attachments:"
      />
    </div>
  );
}
`},exampleNote:null}},docsField:`A mixed attachment workspace with a dropzone, staggered file and image rows, animated upload, succ… 主要导出：AttachmentUpload。 最小用法：<AttachmentUpload />。 收录组件，颜色原样来自上游；同组系统组件满足需求时用系统组件。同组对比：packages/registry/docs/catalog/file-upload.md。属性与示例见 packages/registry/docs/vendor/beui-attachment-upload.md。`,upstream:`https://beui.dev/r/attachment-upload.json`};export{e as default};