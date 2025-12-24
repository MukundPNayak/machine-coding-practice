import { useState } from "react";
import "./App.css";
import Notes from "./components/Notes";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Check the Description for my frontend interview course",
    },
    {
      id: 2,
      text: "Like this Video and Subscribe to Roadside Coder",
    },
  ]);

  return (
    <div className="App">
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
