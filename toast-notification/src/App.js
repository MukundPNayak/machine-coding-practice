import ToastProvider from "./components/ToastProvider";
import "./App.css";
import AddToastButton from "./components/AddToastButton";
import { TOAST_TYPES } from "./constants/toastTypes";

function App() {
  return (
    <ToastProvider>
      <div className="btn-container">
       <AddToastButton type={TOAST_TYPES.INFO}/>
       <AddToastButton type={TOAST_TYPES.SUCCESS}/>
       <AddToastButton type={TOAST_TYPES.ERROR}/>
       </div>
    </ToastProvider>
  );
}

export default App;
