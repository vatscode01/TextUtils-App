 import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import Warning from "./components/Warning";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import ReactDOM from "react-dom/client";

function App() {
  const [mode, setMode] = useState("light");
  const [warning, setWarning] = useState(null);
  const handleWarning = (message, type) => {
    setWarning({ 
      message: message,
      type: type,
    });
    setTimeout(() => {
      setWarning(null);
    }, 1500);
  };
  const toggleTheme = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      handleWarning("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      handleWarning("Light mode has been enabled", "success");
    }
  };

  return (
    // <div><h1>Hello World</h1></div>
    <div>

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleTheme={toggleTheme} />
        <Warning warning={warning} />
        <div className="container my-3">
        <Routes>
          <Route
            path="/"
            element={
              <Textbox
                heading="Convert your text into all Caps"
                mode={mode}
                handleWarning={handleWarning}
              />
            }
          />

          <Route path="/about" element={<About />}/>
          <Route path="/attendence" element={<attendence />}/>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById("root"));
// function App(){
//   root.render(<MyForm/>)
// }
// const App = () => {
//   root.render(<MyForm />);
// };

export default App;
