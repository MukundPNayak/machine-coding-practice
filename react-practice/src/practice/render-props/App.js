import React from "react";
import MouseTracker from "./MouseTracker";

const App = () => {
  return (
    <div>
      <MouseTracker
        render={({ x, y }) => <h2>{`Mouse is at ${x} and ${y}`}</h2>}
      />
    </div>
  );
};

export default App;
