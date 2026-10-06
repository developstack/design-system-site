var e={vendored:{source:`hextaui`,license:`MIT`,files:[`components/vendor/hextaui/ui/resizable.tsx`,`components/vendor/hextaui/NOTICE.md`],dependencies:[`cn`,`react-resizable-panels@^4.14.2`],registryDependencies:[],preview:{kind:`example`,module:`examples/hextaui/resizable.tsx`,export:`ResizableDemo`,example:`https://hextaui.com/r/resizable-demo.json`},note:{summaryZh:null,importLine:`import { ResizableHandle } from "@/components/vendor/hextaui/ui/resizable";`,usage:`<ResizableHandle />`,exports:[{name:`ResizableHandle`,kind:`component`,propsType:`ResizableHandleProps`,inline:!1,union:!1,props:[{name:`withHandle`,type:`boolean`,optional:!0,default:`false`},{name:`showSize`,type:`boolean | ResizableSizeUnit`,optional:!0,default:`false`}],inherited:[{package:`@types/react`,count:276,names:[]},{package:`react-resizable-panels`,count:4,names:[`disableDoubleClick`,`disabled`,`elementRef`,`preview`]}]},{name:`ResizablePanel`,kind:`component`,propsType:`PanelProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:278,names:[]},{package:`react-resizable-panels`,count:11,names:[`collapsedSize`,`collapsedThreshold`,`collapsible`,`defaultSize`,`disabled`,`elementRef`,`groupResizeBehavior`,`maxSize`,`minSize`,`onResize`,`panelRef`]}]},{name:`ResizablePanelGroup`,kind:`component`,propsType:`GroupProps`,inline:!1,union:!1,props:[],inherited:[{package:`@types/react`,count:278,names:[]},{package:`react-resizable-panels`,count:10,names:[`defaultLayout`,`disableCursor`,`disabled`,`elementRef`,`groupRef`,`onLayoutChange`,`onLayoutChanged`,`orientation`,`resizePreviewMode`,`resizeTargetMinimumSize`]}]},{name:`useDefaultLayout`,kind:`hook`,signature:`(options: { debounceSaveMs?: number | undefined; onlySaveAfterUserInteractions?: boolean | undefined; panelIds?: string[] | undefined; storage?: LayoutStorage | undefined; } & ({ ...; } | { ...; })) …`,params:[`options`],requiredParams:1},{name:`useGroupRef`,kind:`hook`,signature:`() => RefObject<GroupImperativeHandle | null>`,params:[],requiredParams:0},{name:`usePanelRef`,kind:`hook`,signature:`() => RefObject<PanelImperativeHandle | null>`,params:[],requiredParams:0},{name:`ResizableHandleProps`,kind:`type`},{name:`ResizableSizeUnit`,kind:`type`}],example:{url:`https://hextaui.com/r/resizable-demo.json`,code:`import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/vendor/hextaui/ui/resizable"

function Pane({ title, children }: { title: string; children?: string }) {
  return (
    <div className="flex h-full flex-col gap-1 p-4">
      <span className="text-sm font-medium">{title}</span>
      <span className="text-sm text-muted-foreground">{children}</span>
    </div>
  )
}

export function ResizableDemo() {
  return (
    <div className="h-80 w-full max-w-2xl overflow-hidden rounded-xl border">
      <ResizablePanelGroup>
        <ResizablePanel defaultSize="28%" minSize="18%" maxSize="45%">
          <Pane title="Explorer">
            Drag the divider, or double-click it to reset.
          </Pane>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel>
          <ResizablePanelGroup orientation="vertical">
            <ResizablePanel defaultSize="65%" minSize="25%">
              <Pane title="Editor">
                Focus a divider and use the arrow keys.
              </Pane>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize="15%">
              <Pane title="Terminal" />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
`},exampleNote:null}},docsField:`Panels you can drag apart, with a quiet divider that wak… 主要导出：ResizableHandle、ResizablePanel、ResizablePanelGroup、useDefaultLayout 等。 最小用法：<ResizableHandle />。 收录组件，颜色原样来自上游。同组候选见对比表 packages/registry/docs/catalog/resizable.md，按 SKILL 第 3 步选。属性与示例见 packages/registry/docs/vendor/hextaui-resizable.md。`,upstream:`https://hextaui.com/r/resizable.json`};export{e as default};