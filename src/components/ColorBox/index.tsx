import React, { FC, useState } from "react";
import "./ColorBox.scss";

const getRandomColor = () => {
  const COLOR_LIST = ["deeppink", "green", "red", "black", "darkblue"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLOR_LIST[randomIndex];
};

const ColorBox: FC = () => {
  const [color, setColor] = useState(() => {
    return localStorage.getItem("box_color") || "deeppink";
  });
  const handleClick = () => {
    const newColor = getRandomColor();
    setColor(newColor);
    localStorage.setItem("box_color", newColor);
  };
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      COLOR BOX
    </div>
  );
};

export default ColorBox;
