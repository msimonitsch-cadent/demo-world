import { useState } from "react";
import { Resizable } from "re-resizable";
import "./ResizeHandle.css";

function ResizeHandle() {
  const [topPaneHeight, setTopPaneHeight] = useState(150);
  return (
    <div className="resize-container">
      <h1>Resize Handle</h1>

      {/* Column Resize */}
      <div className="demo">
        <h2>Column Resize</h2>
        <div className="column-container">
          <Resizable
            defaultSize={{
              width: "50%",
              height: "100%",
            }}
            enable={{
              top: false,
              right: true,
              bottom: false,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            handleStyles={{
              right: {
                background: "#666",
                width: "4px",
                right: "-2px",
              },
            }}
            handleClasses={{
              right: "column-handle",
            }}
          >
            <div className="left-pane">
              <p>Left Pane (Resizable)</p>
              <p>Drag the right edge →</p>
            </div>
          </Resizable>
          <div className="right-pane">
            <p>Right Pane</p>
            <p>This pane adapts to the remaining space</p>
          </div>
        </div>
      </div>

      {/* Row Resize */}
      <div className="demo">
        <h2>Row Resize</h2>
        <div className="row-container">
          <Resizable
            defaultSize={{
              width: 400,
              height: 150,
            }}
            enable={{
              top: false,
              right: false,
              bottom: true,
              left: false,
              topRight: false,
              bottomRight: false,
              bottomLeft: false,
              topLeft: false,
            }}
            handleStyles={{
              bottom: {
                background: "#666",
                height: "4px",
                bottom: "-2px",
              },
            }}
            handleClasses={{
              bottom: "row-handle",
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            onResize={(_e, _direction, _ref, d) => {
              setTopPaneHeight(150 + d.height);
            }}
          >
            <div className="top-pane">
              <p>Top Pane (Resizable)</p>
              <p>Height: {topPaneHeight}px</p>
              <p>Drag the bottom edge ↓</p>
            </div>
          </Resizable>
          <div className="bottom-pane" style={{ top: topPaneHeight }}>
            <p>Bottom Pane</p>
            <p>Height: {300 - topPaneHeight}px</p>
            <p>This pane adapts to the remaining space</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResizeHandle;
