import React, { useState } from "react";

const ColorInput = ({ updateColor, setColor }) => {
  const [text, setText] = useState("");

  //call back
  const colorChange = (value) => {
    setText(value);
    updateColor(value);
  };

  return (
    <div>
      <input
        value={text}
        placeholder="type color name"
        onChange={(e) => colorChange(e.target.value)}
      />
    </div>
  );
};

export default ColorInput;
