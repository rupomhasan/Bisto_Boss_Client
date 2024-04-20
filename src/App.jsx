import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Pages/Shared/Footer/Footer";
import Navbar from "./Pages/Shared/Nav/Navbar";
import { ThemeContext } from "./Context/ThemeContext";
import { useState } from "react";

function App() {
  const [lightMode, setDarkMode] = useState(true);

  return (
    <div className={`${lightMode ? "" : "bg-white text-black"}`}>
      <ThemeContext.Provider value={{ lightMode, setDarkMode }}>
        <div className="max-w-screen-xl mx-auto">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
