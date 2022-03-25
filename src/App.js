
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {

const [mode, setMode] = useState('light');
const [modetext, setModeText] = useState('Enable Dark Mode');

const [alert, setAlert] = useState(null);

const showAlert = (message ,  type) => {
 
setAlert({
  msg:message,
  type:type
});

setTimeout(() => {
  setAlert(null);
}, 1000);

}

 const toggleMode = () =>{

if(mode ==='dark'){
  setMode('light');
  document.body.style.backgroundColor='white';
  setModeText('Enable Dark Mode');
  showAlert('Light mode has been enabled','success');
  document.title="My App-Light mode"

}else{
  setMode('dark');
  document.body.style.backgroundColor='#121212';
  setModeText('Enable Light Mode');
  showAlert('Dark mode has been enabled','success');
  document.title="My App-Dark mode"
}
}

  return (
    <>
    {/* <Router> */}
    <Navbar title="My App" aboutUs="About App" mode={mode} modetext={modetext} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
          <About />
          </Route>

          <Route exact path="/"> */}
          <Textform showAlert={showAlert}  heading='Enter your text here' mode={mode}/> 
          {/* </Route>
        </Switch> */}
    
     </div> 
     {/* </Router> */}
    </>
  );
}

export default App;
