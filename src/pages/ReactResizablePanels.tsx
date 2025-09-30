import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import "./ReactResizablePanels.css";

function ReactResizablePanels() {
  return (
    <div className="resizable-panels-container">
      <h1>React Resizable Panels</h1>
      <p>Two simple resizable panels with different colors.</p>

      <div className="panels-wrapper">
        <PanelGroup autoSaveId="simple-example" direction="horizontal">
          <Panel defaultSize={50}>
            <div className="left-panel">
              <h3>Left Panel</h3>
              <p>This is the left panel with a blue background.</p>
              <p>Drag the handle to resize!</p>
            </div>
          </Panel>
          <PanelResizeHandle />
          <Panel>
            <div className="right-panel">
              <h3>Right Panel</h3>
              <p>This is the right panel with a green background.</p>
              <p>It automatically adjusts to fill remaining space.</p>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );
}

export default ReactResizablePanels;
