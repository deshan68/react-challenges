import React, { useState } from "react";
import ColorInput from "../components/ColorInput";

const CallBack = () => {
  const [color, setColor] = useState("");

  const updateColor = (value) => {
    setColor(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: color,
        }}
      />

      <ColorInput updateColor={updateColor} />
    </div>
  );
};

export default CallBack;
