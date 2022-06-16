import "./App.css";
import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#262664";
      showAlert("success", "Dark Mode enabled");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Light Mode enabled");
      document.title = "TextUtils - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          abtTitle="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div>
          <Routes>
            <Route exact path="/about" element={<About />}> 
            </Route>
            <Route exact path="/" element={<TextForm
                heading="Enter your text below to transform"
                mode={mode}
                showAlert={showAlert}
              />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
