var e={vendored:{source:`beui`,license:`MIT`,files:[`components/vendor/beui/motion/morphing-lightbox.tsx`,`components/vendor/beui/lib/ease.ts`,`components/vendor/beui/lib/hooks/use-modal-scope.ts`,`components/vendor/beui/lib/presence-gate.tsx`,`components/vendor/beui/NOTICE.md`],dependencies:[`lucide-react`,`motion`],registryDependencies:[],preview:{kind:`example`,module:`examples/beui/morphing-lightbox.tsx`,export:`MorphingLightboxPreview`,example:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/morphing-lightbox.preview.tsx`},note:{summaryZh:null,importLine:`import { MorphingLightbox } from "@/components/vendor/beui/motion/morphing-lightbox";`,usage:`<MorphingLightbox images={…} />`,exports:[{name:`LightboxImage`,kind:`type`},{name:`MorphingLightboxProps`,kind:`type`},{name:`ImageViewerImage`,kind:`type`},{name:`ImageViewerProps`,kind:`type`},{name:`useImageViewer`,doc:`Shared selection and navigation for custom gallery and viewer controls.`,kind:`hook`,signature:`() => { images: LightboxImage[]; value: string | null; image: LightboxImage | undefined; index: number; hasPrevious: boolean; hasNext: boolean; select: (id: string | null) => void; close: () => void;…`,params:[],requiredParams:0},{name:`ImageViewer`,doc:`A composable image gallery with a focus-managed, thumbnail-connected viewer.`,kind:`component`,propsType:`MorphingLightboxProps`,inline:!1,union:!1,props:[{name:`images`,type:`LightboxImage[]`,optional:!1},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0,default:`null`},{name:`onValueChange`,type:`(id: string | null) => void`,optional:!0},{name:`label`,type:`string`,optional:!0,default:`"Image gallery"`},{name:`className`,type:`string`,optional:!0},{name:`thumbnailClassName`,type:`string`,optional:!0},{name:`renderCaption`,type:`(image: LightboxImage) => ReactNode`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0,doc:`Compose gallery and viewer parts instead of the default layout.`}],inherited:[]},{name:`MorphingLightbox`,doc:`A composable image gallery with a focus-managed, thumbnail-connected viewer.`,kind:`component`,propsType:`MorphingLightboxProps`,inline:!1,union:!1,props:[{name:`images`,type:`LightboxImage[]`,optional:!1},{name:`value`,type:`string | null`,optional:!0},{name:`defaultValue`,type:`string | null`,optional:!0,default:`null`},{name:`onValueChange`,type:`(id: string | null) => void`,optional:!0},{name:`label`,type:`string`,optional:!0,default:`"Image gallery"`},{name:`className`,type:`string`,optional:!0},{name:`thumbnailClassName`,type:`string`,optional:!0},{name:`renderCaption`,type:`(image: LightboxImage) => ReactNode`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0,doc:`Compose gallery and viewer parts instead of the default layout.`}],inherited:[]},{name:`ImageViewerGallery`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ImageViewerThumbnailProps`,kind:`type`},{name:`ImageViewerThumbnail`,doc:`The image keeps its shared-layout identity when the trigger is customised.`,kind:`component`,propsType:`ImageViewerThumbnailProps`,inline:!1,union:!1,props:[{name:`imageId`,type:`string`,optional:!1},{name:`imageClassName`,type:`string`,optional:!0},{name:`children`,type:`ReactNode`,optional:!0}],inherited:[{package:`映射类型生成，来源无法定位`,count:284,names:[]},{package:`motion-dom`,count:63,names:[`animate`,`custom`,`drag`,`dragConstraints`,`dragControls`,`dragDirectionLock`,`dragElastic`,`dragListener`,`dragMomentum`,`dragPropagation`,`dragSnapToOrigin`,`dragTransition`]},{package:`framer-motion`,count:1,names:[`style`]}]},{name:`ImageViewerCounter`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ImageViewerCaption`,kind:`component`,propsType:`DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:280,names:[]}]},{name:`ImageViewerClose`,kind:`component`,propsType:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:290,names:[]}]},{name:`ImageViewerPrevious`,kind:`component`,propsType:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:290,names:[]}]},{name:`ImageViewerNext`,kind:`component`,propsType:`DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:290,names:[]}]},{name:`ImageViewerContentProps`,kind:`type`},{name:`ImageViewerContent`,doc:`Owns the portal, focus scope, swipe/zoom frame and exit interaction gate.`,kind:`component`,propsType:`ImageViewerContentProps`,inline:!1,union:!1,props:[{name:`className`,type:`string`,optional:!0},{name:`header`,type:`ReactNode`,optional:!0,doc:`Custom header; defaults to the counter and close control.`},{name:`children`,type:`ReactNode`,optional:!0,doc:`Custom footer; defaults to navigation and the image caption.`}],inherited:[]}],example:{url:`https://github.com/starc007/ui-components/blob/main/components/previews/motion/morphing-lightbox.preview.tsx`,code:`"use client";

import {
  ImageViewer,
  ImageViewerGallery,
  ImageViewerThumbnail,
  ImageViewerContent,
  ImageViewerCounter,
  ImageViewerClose,
  ImageViewerPrevious,
  ImageViewerCaption,
  ImageViewerNext,
} from "@/components/vendor/beui/motion/morphing-lightbox";

const images = [
  {
    id: "architecture",
    src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&h=2000&q=85",
    alt: "Sculptural architecture",
    width: 1600,
    height: 2000,
    caption: "01 / Form and light",
  },
  {
    id: "landscape",
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&h=2000&q=85",
    alt: "Open landscape",
    width: 1600,
    height: 2000,
    caption: "02 / A little room to breathe",
  },
  {
    id: "workspace",
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&h=2000&q=85",
    alt: "Light-filled workspace",
    width: 1600,
    height: 2000,
    caption: "03 / Places to make things",
  },
];

export function MorphingLightboxPreview() {
  return (
    <div className="w-full max-w-xl">
      <div className="mb-5 flex items-end justify-between gap-3">
        <div>
          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Collected moments
          </p>
          <h3 className="text-lg font-medium tracking-tight">
            Look a little closer.
          </h3>
        </div>
        <span className="text-xs text-muted-foreground">3 photographs</span>
      </div>
      <ImageViewer images={images} label="Collected photographs">
        <ImageViewerGallery className="grid-cols-3 gap-2 sm:gap-3">
          {images.map((image) => (
            <ImageViewerThumbnail key={image.id} imageId={image.id} />
          ))}
        </ImageViewerGallery>
        <ImageViewerContent
          header={
            <>
              <ImageViewerCounter />
              <ImageViewerClose />
            </>
          }
        >
          <ImageViewerPrevious />
          <ImageViewerCaption />
          <ImageViewerNext />
        </ImageViewerContent>
      </ImageViewer>
      <p className="mt-4 text-xs text-muted-foreground">
        Open a photograph. Swipe or use the arrows to explore.
      </p>
    </div>
  );
}
`},exampleNote:null}},docsField:`A thumbnail-connected image viewer with compo… 主要导出：MorphingLightbox、useImageViewer、ImageViewer、ImageViewerGallery 等。 最小用法：<MorphingLightbox images={…} />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/image.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/beui-morphing-lightbox.md。`,upstream:`https://beui.dev/r/morphing-lightbox.json`};export{e as default};