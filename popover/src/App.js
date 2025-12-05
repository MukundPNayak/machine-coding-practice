import Popover from "./components/popover";

function App() {
  return (
    <div>
      <Popover>
        <Popover.Action>Click Me</Popover.Action>
        <Popover.Content>Content</Popover.Content>
      </Popover>
      Hello There!!
    </div>
  )
}

export default App;
