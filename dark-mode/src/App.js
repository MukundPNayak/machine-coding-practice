import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";

import ThemeProvider from "./contexts/themeContext";

/*
https://www.greatfrontend.com/questions/user-interface/like-button?language=js&tab=coding
*/

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
