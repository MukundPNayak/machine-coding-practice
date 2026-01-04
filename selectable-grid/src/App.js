import SelectableGrid from "./components/SelectableGrid";

import "./app.css";

function App() {
  return (
    <div className="app">
      <SelectableGrid cols={15} rows={10} />
    </div>
  );
}

export default App;
