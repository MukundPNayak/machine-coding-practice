import React, { useEffect } from "react";

const ReactStrictMode = () => {
  console.log("api called");

  useEffect(() => {
    const id = setInterval(() => {
      console.log("Interval");
    }, 1000);

    return () => clearInterval(id);
  });

  return <div>ReactStrictMode</div>;
};

export default ReactStrictMode;
