import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');  // Default mode is light
  const [alert, setAlert] = useState(null);
  const [previousMode, setPreviousMode] = useState(null);  // Track previous mode for original switch
  const [currentPage, setCurrentPage] = useState('home');  // State to control page view

  // Function to show an alert
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Automatically hide alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  // **Define closeAlert to manually clear the alert**
  const closeAlert = () => {
    setAlert(null);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setPreviousMode('light');
      showAlert("Dark mode enabled", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setPreviousMode('dark');
      showAlert("Light mode enabled", "success");
      // document.title = "TextUtils - Light Mode";
    }
  };

  // Function to switch to green mode
  const switchToGreenMode = () => {
    setPreviousMode(mode);
    setMode('green');
    document.body.style.backgroundColor = 'green';
    showAlert("Green mode enabled", "success");
  };

  // Function to switch back to the original mode
  const switchToOriginalMode = () => {
    if (previousMode) {
      setMode(previousMode);
      document.body.style.backgroundColor = previousMode === 'dark' ? 'grey' : 'white';
      showAlert(`${previousMode.charAt(0).toUpperCase() + previousMode.slice(1)} mode enabled`, "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        switchToGreenMode={switchToGreenMode}
        switchToOriginalMode={switchToOriginalMode}
        setCurrentPage={setCurrentPage}  // Pass the function to switch pages
      />
      <Alert alert={alert} closeAlert={closeAlert} />  {/* Pass closeAlert here */}
      <div className="container my-3">
        {/* Render the appropriate component based on the currentPage state */}
        {currentPage === 'home' && <TextForm showAlert={showAlert} heading="Enter Something" mode={mode} />}
        {currentPage === 'about' && <About mode={mode}/>}
      </div>
    </>
  );
}

export default App;
