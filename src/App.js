
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (typeHead, message) => {
    setAlert({
      type: typeHead,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500
    )
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#000e2c";
      showAlert("success", "Dark Mode enabled");
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
      // showAlert("success", "Light Mode enabled");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Texter" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter text to analyze: " mode={mode} alert={showAlert} />} />    
            <Route exact path="/about" element={<About mode={mode} />} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;
