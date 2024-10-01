import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');  // Default mode is light
  const [alert, setAlert] = useState(null);
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

  // Toggle mode based on the passed mode (e.g., dark, light, blue, green, etc.)
  const toggleMode = (newMode) => {
    setMode(newMode); // Change the mode dynamically

    if (newMode === 'dark') {
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode enabled", "success");
    } else if (newMode === 'light') {
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode enabled", "success");
    } else if (newMode === 'green') {
      document.body.style.backgroundColor = 'green';
      showAlert("Green mode enabled", "success");
    } else if (newMode === 'blue') {
      document.body.style.backgroundColor = 'blue';
      showAlert("Blue mode enabled", "success");
    } else if (newMode === 'red') {
      document.body.style.backgroundColor = 'red';
      showAlert("Red mode enabled", "success");
    } else {
      document.body.style.backgroundColor = 'white'; // Default color
      showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode enabled`, "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        setCurrentPage={setCurrentPage}  // Pass the function to switch pages
      />
      <div className="container my-3">
        <Alert alert={alert} closeAlert={() => setAlert(null)} />  {/* Alert is always rendered */}
        {currentPage === 'home' && <TextForm showAlert={showAlert} heading="Enter Something" mode={mode} />}
        {currentPage === 'about' && <About mode={mode} />}
      </div>
    </>
  );
}

export default App;
