import React, { useState } from 'react';

const TrafficLight = () => {
  const [color, setColor] = useState("null");

  const colorOnClick = () => {
    if (color === "red") {
      setColor("yellow");
    } else if (color === "yellow") {
      setColor("green");
    } else {
      setColor("red");
    }
  };

  return (
    <div id="trafficBracket">
      <div id="container">
        <div className={color === "red" ? "red light selected" : "red light"} onClick={colorOnClick}></div>
        <div className={color === "yellow" ? "yellow light selected" : "yellow light"} onClick={colorOnClick}></div>
        <div className={color === "green" ? "green light selected" : "green light"} onClick={colorOnClick}></div>
      </div>
    </div>
  );
};

export default TrafficLight;