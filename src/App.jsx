import { useState } from "react";
import "./App.css";
import ListSwifting from "./challenges/ListSwifting";
import ClickEvent from "./challenges/ClickEvent";
import CallBack from "./challenges/CallBack";
import UberShapes from "./challenges/UberShapes";

function App() {
  const BOX_DATA = [
    [0, 1, 1],
    [1, 1, 0],
    [1, 1, 1],
  ];
  return (
    <>
      {/* <ClickEvent /> */}
      {/* <CallBack /> */}
      <UberShapes data={BOX_DATA} />
    </>
  );
}

export default App;
