import { useState } from "react";

const MouseTracker = (props) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      {props.render({ x: mousePos.x, y: mousePos.y })}
    </div>
  );
};

export default MouseTracker;
