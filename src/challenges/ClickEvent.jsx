import React, { useState } from "react";

const ClickEvent = () => {
  const [points, setPoints] = useState([]);
  const [undoPoints, setUndoPoints] = useState([]);

  function handleClick(e) {
    const { clientX, clientY } = e.nativeEvent;
    setPoints((prev) => [...prev, { x: clientX, y: clientY }]);
  }

  function undoHandler() {
    const copy = [...points];
    const lastPoint = copy[copy.length - 1];
    copy.pop();
    setPoints(copy);
    setUndoPoints((prev) => [...prev, lastPoint]);
  }

  function redoHandler() {
    const copy = [...undoPoints];
    const lastPoint = copy[copy.length - 1];
    copy.pop();
    setUndoPoints(copy);
    setPoints((prev) => [...prev, lastPoint]);
  }

  return (
    <>
      <div style={{ zIndex: "10", position: "absolute" }}>
        <button disabled={!points.length > 0} onClick={undoHandler}>
          UNDO
        </button>
        <button disabled={!undoPoints.length > 0} onClick={redoHandler}>
          REDO
        </button>
      </div>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100vw",
          position: "relative",
        }}
        onClick={(e) => handleClick(e)}
      >
        {points.map((item, Index) => (
          <div
            key={Index}
            style={{
              position: "absolute",
              height: "10px",
              width: "10px",
              backgroundColor: "white",
              left: item.x + "px",
              top: item.y + "px",
              borderRadius: "100px",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ClickEvent;
