import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState(null);

  const colorOnClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div id="trafficBracket">
      <div id="container">
        <div className={color === "red" ? "red light selected" : "red light"} onClick={() => colorOnClick("red")}></div>
        <div className={color === "yellow" ? "yellow light selected" : "yellow light"} onClick={() => colorOnClick("yellow")}></div>
        <div className={color === "green" ? "green light selected" : "green light"} onClick={() => colorOnClick("green")}></div>
      </div>
    </div>
  );
};

export default TrafficLight;
