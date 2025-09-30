import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CssScopes from "./pages/CssScopes";
import ResizeHandle from "./pages/ResizeHandle";
import ReactResizablePanels from "./pages/ReactResizablePanels";

function App() {
  return (
    <>
      <nav
        style={{
          padding: "20px",
          borderBottom: "1px solid #ccc",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        <Link
          to="/"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#646cff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        <Link
          to="/css-scopes"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#646cff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          CSS Scopes
        </Link>
        <Link
          to="/resize-handle"
          style={{
            marginRight: "20px",
            textDecoration: "none",
            color: "#646cff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Resize Handle
        </Link>
        <Link
          to="/react-resizable-panels"
          style={{
            textDecoration: "none",
            color: "#646cff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Resizable Panels
        </Link>
      </nav>

      <main style={{ padding: "0 20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/css-scopes" element={<CssScopes />} />
          <Route path="/resize-handle" element={<ResizeHandle />} />
          <Route
            path="/react-resizable-panels"
            element={<ReactResizablePanels />}
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
