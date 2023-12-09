import React, { useState } from "react";

const ListSwifting = () => {
  const [list, setList] = useState([
    { id: 1, checked: false, side: "left" },
    { id: 2, checked: false, side: "left" },
    { id: 3, checked: false, side: "right" },
    { id: 4, checked: false, side: "left" },
    { id: 5, checked: false, side: "left" },
    { id: 6, checked: false, side: "right" },
  ]);

  const ListComponent = ({ data, setData }) => {
    const handleCheck = (id) => {
      setData((prev) =>
        prev.map((item) => {
          if (item?.id == id) {
            return { id: id, checked: !item.checked, side: item.side };
          } else {
            return item;
          }
        })
      );
    };

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {data.map((item, index) => (
          <div style={{ display: "flex" }}>
            <input
              key={index}
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label htmlFor="">{item.id}</label>
          </div>
        ))}
      </div>
    );
  };

  function goLeft() {
    setList((prev) =>
      prev.map((item) =>
        item.checked ? { id: item.id, checked: false, side: "left" } : item
      )
    );
  }

  function goRight() {
    setList((prev) =>
      prev.map((item) =>
        item.checked ? { id: item.id, checked: false, side: "right" } : item
      )
    );
  }

  return (
    <main style={{ display: "flex", gap: "20px" }}>
      {/* left list */}
      <ListComponent
        data={list?.filter((item) => item?.side === "left")}
        setData={setList}
      />
      <button onClick={goLeft}>{"<"}</button>
      <button onClick={goRight}>{">"}</button>

      {/* right list */}
      <ListComponent
        data={list?.filter((item) => item?.side === "right")}
        setData={setList}
      />
    </main>
  );
};

export default ListSwifting;
