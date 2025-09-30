import React, { useState, useEffect } from "react";
import "./CssScopes.css";

function CssScopes() {
  const [globalColor, setGlobalColor] = useState("#007bff");
  const [parentColor, setParentColor] = useState("");
  const [childColor, setChildColor] = useState("");

  // Apply global CSS variable
  useEffect(() => {
    document.documentElement.style.setProperty("--my-color", globalColor);
  }, [globalColor]);

  const colors = [
    { name: "Blue", value: "#007bff" },
    { name: "Green", value: "#28a745" },
    { name: "Red", value: "#dc3545" },
    { name: "Purple", value: "#6f42c1" },
    { name: "Orange", value: "#fd7e14" },
  ];

  return (
    <div className="css-scopes-container">
      <h1 className="css-scopes-title">CSS Variable Scopes</h1>
      <p className="css-scopes-description">
        This demonstrates how a single CSS variable <code>--my-color</code>{" "}
        behaves at different scope levels.
      </p>

      {/* Controls */}
      <div className="controls-section">
        <h3 className="controls-title">Variable Controls</h3>

        {/* Global Control */}
        <div className="control-group">
          <label className="control-label">
            🌍 Global (document root): <code>--my-color</code>
          </label>
          <div className="button-group">
            {colors.map((color) => (
              <button
                key={`global-${color.value}`}
                onClick={() => setGlobalColor(color.value)}
                className={`color-button ${
                  globalColor === color.value ? "selected" : ""
                }`}
                style={{
                  backgroundColor:
                    globalColor === color.value ? color.value : "#ffffff",
                  borderColor: color.value,
                }}
              >
                {color.name}
              </button>
            ))}
          </div>
          <small className="current-value">
            Current value: <strong>{globalColor}</strong>
          </small>
        </div>

        {/* Parent Control */}
        <div className="control-group">
          <label className="control-label">
            📦 Parent Container: <code>--my-color</code>
          </label>
          <div className="button-group">
            <button
              onClick={() => setParentColor("")}
              className={`color-button inherit ${
                parentColor === "" ? "selected" : ""
              }`}
            >
              Inherit
            </button>
            {colors.map((color) => (
              <button
                key={`parent-${color.value}`}
                onClick={() => setParentColor(color.value)}
                className={`color-button ${
                  parentColor === color.value ? "selected" : ""
                }`}
                style={{
                  backgroundColor:
                    parentColor === color.value ? color.value : "#ffffff",
                  borderColor: color.value,
                }}
              >
                {color.name}
              </button>
            ))}
          </div>
          <small className="current-value">
            Current value:{" "}
            <strong>{parentColor || `${globalColor} (inherited)`}</strong>
          </small>
        </div>

        {/* Child Control */}
        <div className="control-group">
          <label className="control-label">
            🧒 Child Element: <code>--my-color</code>
          </label>
          <div className="button-group">
            <button
              onClick={() => setChildColor("")}
              className={`color-button inherit ${
                childColor === "" ? "selected" : ""
              }`}
            >
              Inherit
            </button>
            {colors.map((color) => (
              <button
                key={`child-${color.value}`}
                onClick={() => setChildColor(color.value)}
                className={`color-button ${
                  childColor === color.value ? "selected" : ""
                }`}
                style={{
                  backgroundColor:
                    childColor === color.value ? color.value : "#ffffff",
                  borderColor: color.value,
                }}
              >
                {color.name}
              </button>
            ))}
          </div>
          <small className="current-value">
            Current value:{" "}
            <strong>
              {childColor || parentColor || `${globalColor} (inherited)`}
            </strong>
          </small>
        </div>
      </div>

      {/* Visual Demonstration */}
      <div className="visual-demo">
        <h3 className="demo-title">🌍 Global Scope</h3>
        <p className="demo-description">
          This element uses <code>background-color: var(--my-color)</code>
        </p>
        <p className="demo-value">
          <strong>Value: {globalColor}</strong>
        </p>

        {/* Parent Container */}
        <div
          className="parent-container"
          style={
            parentColor
              ? ({ "--my-color": parentColor } as React.CSSProperties)
              : undefined
          }
        >
          <h4 className="parent-title">📦 Parent Container</h4>
          <p className="parent-description">
            {parentColor
              ? `This container overrides --my-color to ${parentColor}`
              : "This container inherits --my-color from global scope"}
          </p>
          <p className="parent-value">
            <strong>
              Value: {parentColor || `${globalColor} (inherited)`}
            </strong>
          </p>

          {/* Child Element */}
          <div
            className="child-element"
            style={
              childColor
                ? ({ "--my-color": childColor } as React.CSSProperties)
                : undefined
            }
          >
            <h5 className="child-title">🧒 Child Element</h5>
            <p className="child-description">
              {childColor
                ? `This element overrides --my-color to ${childColor}`
                : `This element inherits --my-color from ${
                    parentColor ? "parent container" : "global scope"
                  }`}
            </p>
            <p className="child-value">
              <strong>
                Value:{" "}
                {childColor || parentColor || `${globalColor} (inherited)`}
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* Explanation */}
      <div className="explanation-section">
        <h3 className="explanation-title">How CSS Variable Scoping Works</h3>
        <ul className="explanation-list">
          <li>
            <strong>Global scope</strong>: Defined on <code>:root</code>{" "}
            (document element), available to all elements
          </li>
          <li>
            <strong>Local scope</strong>: Defined on any element, overrides
            parent values for that element and its children
          </li>
          <li>
            <strong>Inheritance</strong>: Child elements inherit the closest
            defined value up the DOM tree
          </li>
          <li>
            <strong>Specificity</strong>: More specific (deeper) scopes always
            win over parent scopes
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CssScopes;
