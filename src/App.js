
import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import TextForm from './components/TextForm';
import Footer from './components/Footer';
// import About from './components/About';
import Alert from './components/Alert';
let mySidebar = document.getElementById('mySidebar')

function App() {

  const [mode, setMode] = useState('light')
  function bgToggler() {
    console.log("bg altered");
    if (mode === 'light') {
      setMode('dark')
      // mode = 'dark'
      document.body.style.backgroundColor = 'grey'
      showMessage("Dark mode has been enabled", 'success')
      mySidebar.style.backgroundColor = 'white'

    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showMessage("Light mode has been enabled", 'success')
      mySidebar.style.backgroundColor = 'grey'
    }

  }
  const [alert, setAlert] = useState(null)

  function showMessage(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <>

      <Navbar title="Text Utils" bgToggler={bgToggler} mode={mode} />
      <Alert alert={alert} />
      <Sidebar />
      <div className="container">
        <TextForm />
        {/* <About /> */}
      </div>
      <Footer />
    </>

  );
}

export default App;
