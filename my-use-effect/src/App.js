import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Effect");
  }, []);

  return <div className="App">Hello</div>;
}

export default App;
