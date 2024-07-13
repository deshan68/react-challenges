import React, { useEffect, useMemo, useState } from "react";

const UberShapes = ({ data }) => {
  const [clickedBoxes, setClickedBoxes] = useState([]);

  const validBoxCount = useMemo(() => {
    return data.flat().filter((row) => row === 1).length;
  }, [data]);

  const handleClickBox = (row, box) => {
    const clickedBoxIndex = `${row}.${box}`;
    setClickedBoxes((prv) => {
      return [...prv, clickedBoxIndex];
    });
  };

  const handleClear = () => {
    const int = setInterval(() => {
      setClickedBoxes((prev) => {
        prev.length === 0 && clearInt();
        return prev.slice(0, -1);
      });
    }, 500);

    const clearInt = () => {
      clearInterval(int);
    };
  };

  useEffect(() => {
    if (clickedBoxes.length === validBoxCount) handleClear();
  }, [clickedBoxes]);

  return (
    <div
      style={{
        height: 500,
        width: 500,
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        gap: 8,
      }}
    >
      {data.map((row, rowIndex) => (
        <>
          {row.map((box, boxIndex) => (
            <div
              key={`${rowIndex}.${boxIndex}`}
              style={{
                border: box === 1 ? "1px solid red" : null,
                cursor: box === 1 ? "pointer" : "none",
                backgroundColor: clickedBoxes.includes(
                  `${rowIndex}.${boxIndex}`
                )
                  ? "red"
                  : null,
              }}
              onClick={() => box === 1 && handleClickBox(rowIndex, boxIndex)}
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default UberShapes;
