var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/file-upload.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/file-upload.tsx`,export:`FileUploadPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/file-upload.preview.tsx`},note:{summaryZh:`文件上传（动效区块）。`,importLine:`import { FileUpload } from "@/components/vendor/beui/motion/file-upload";`,usage:`<FileUpload />`,exports:[{name:`FileUploadStatus`,kind:`type`},{name:`FileUploadVariant`,kind:`type`},{name:`FileUploadItem`,kind:`type`},{name:`FileUploadClassNames`,kind:`type`},{name:`FileUploadProps`,kind:`type`},{name:`createFileUploadItem`,kind:`function`,signature:`(file: File, index?: number) => FileUploadItem`,params:[`file`,`index`],requiredParams:1},{name:`FileUpload`,kind:`component`,propsType:`FileUploadProps`,inline:!1,union:!1,props:[{name:`value`,type:`FileUploadItem[]`,optional:!0},{name:`defaultValue`,type:`FileUploadItem[]`,optional:!0},{name:`onValueChange`,type:`(items: FileUploadItem[]) => void`,optional:!0},{name:`onFilesAdded`,type:`(items: FileUploadItem[], files: File[]) => void`,optional:!0},{name:`onRemove`,type:`(item: FileUploadItem) => void`,optional:!0},{name:`onRetry`,type:`(item: FileUploadItem) => void`,optional:!0},{name:`accept`,type:`string`,optional:!0},{name:`multiple`,type:`boolean`,optional:!0,default:`true`},{name:`maxFiles`,type:`number`,optional:!0},{name:`disabled`,type:`boolean`,optional:!0,default:`false`},{name:`variant`,type:`FileUploadVariant`,optional:!0,default:`"default"`},{name:`title`,type:`string`,optional:!0,default:`"Drop files here"`},{name:`description`,type:`string`,optional:!0,default:`"Add files to the upload queue"`},{name:`browseLabel`,type:`string`,optional:!0,default:`"Browse"`},{name:`className`,type:`string`,optional:!0},{name:`classNames`,type:`FileUploadClassNames`,optional:!0}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/blocks/file-upload.preview.tsx`,code:`"use client";

import { RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  FileUpload,
  type FileUploadItem,
  type FileUploadVariant,
} from "@/components/vendor/beui/motion/file-upload";

const initialItems: FileUploadItem[] = [
  {
    id: "brand-assets",
    name: "brand-assets.zip",
    size: 18_400_000,
    type: "application/zip",
    progress: 100,
    status: "success",
  },
  {
    id: "release-video",
    name: "release-cut.mov",
    size: 84_200_000,
    type: "video/quicktime",
    progress: 58,
    status: "uploading",
  },
  {
    id: "contracts",
    name: "vendor-contract.pdf",
    size: 2_800_000,
    type: "application/pdf",
    progress: 32,
    status: "error",
    error: "Connection lost",
  },
];

const variants: { id: FileUploadVariant; label: string }[] = [
  { id: "centered", label: "Centered" },
  { id: "default", label: "Row" },
];

export function FileUploadPreview() {
  const [items, setItems] = useState(initialItems);
  const [variant, setVariant] = useState<FileUploadVariant>("centered");
  const timersRef = useRef<Map<string, ReturnType<typeof setInterval>>>(
    new Map(),
  );

  const stopUpload = useCallback((id: string) => {
    const timer = timersRef.current.get(id);
    if (!timer) return;
    clearInterval(timer);
    timersRef.current.delete(id);
  }, []);

  const startUpload = useCallback(
    (id: string) => {
      stopUpload(id);

      const timer = setInterval(() => {
        setItems((current) => {
          const target = current.find((item) => item.id === id);
          if (target?.status !== "uploading") {
            stopUpload(id);
            return current;
          }

          const nextProgress = Math.min(
            100,
            (target.progress ?? 0) + 7 + Math.random() * 12,
          );

          if (nextProgress >= 100) {
            stopUpload(id);
          }

          return current.map((item) =>
            item.id === id
              ? {
                  ...item,
                  progress: nextProgress,
                  status: nextProgress >= 100 ? "success" : "uploading",
                }
              : item,
          );
        });
      }, 520);

      timersRef.current.set(id, timer);
    },
    [stopUpload],
  );

  useEffect(() => {
    startUpload("release-video");

    return () => {
      for (const timer of timersRef.current.values()) {
        clearInterval(timer);
      }
      timersRef.current.clear();
    };
  }, [startUpload]);

  return (
    <div className="flex min-h-[30rem] w-full items-center justify-center">
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-background p-3">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2 px-1">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Upload package
            </p>
            <p className="text-xs text-muted-foreground">
              {items.filter((item) => item.status === "success").length} of{" "}
              {items.length} files ready
            </p>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex rounded-full border border-border bg-muted p-1">
              {variants.map((entry) => {
                const selected = entry.id === variant;

                return (
                  <button
                    key={entry.id}
                    type="button"
                    onClick={() => setVariant(entry.id)}
                    data-selected={selected}
                    className="h-7 rounded-full px-3 text-xs font-medium text-muted-foreground transition-[background-color,color,transform] duration-150 hover:text-foreground active:scale-95 data-[selected=true]:bg-background data-[selected=true]:text-foreground"
                  >
                    {entry.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                for (const item of items) {
                  stopUpload(item.id);
                }
                setItems(initialItems);
                startUpload("release-video");
              }}
              className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground active:scale-95"
              aria-label="Reset upload queue"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <FileUpload
          value={items}
          variant={variant}
          onValueChange={setItems}
          onFilesAdded={(added) => {
            for (const item of added) {
              startUpload(item.id);
            }
          }}
          onRetry={(item) => startUpload(item.id)}
          onRemove={(item) => stopUpload(item.id)}
          maxFiles={5}
          title={variant === "centered" ? "Drop files to upload" : "Drop release files"}
          description="PDF, images, video or zipped assets"
        />
      </div>
    </div>
  );
}
`},exampleNote:null}},docsField:`A drag-and-drop upload queue with progress rows, upload states, retry, and removal. 主要导出：FileUpload、createFileUploadItem。 最小用法：<FileUpload />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/file-upload.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-file-upload.md。`,upstream:`https://beui.dev/r/file-upload.json`};export{e as default};