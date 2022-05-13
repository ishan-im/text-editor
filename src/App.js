
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';

import ContactUs from './components/ContactUs';

import {
  
  Routes,
  Route,
  
} from "react-router-dom";

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
  

}else{
  setMode('dark');
  document.body.style.backgroundColor='#121212';
  setModeText('Enable Light Mode');
  showAlert('Dark mode has been enabled','success');
  
}
}



  return (
    <>
    
    <Navbar title="Text Emotion" aboutUs="About App" mode={mode} modetext={modetext} toggleMode={toggleMode}/>
    <Alert alert={alert}/>


    <div className="container my-3">
    <Routes>

        <Route

        path='/'
            element={<Textform showAlert={showAlert} heading='Enter your text here:' mode={mode} />}
        />
        

        
       
        <Route
              path='/about'
              element={<About mode={mode}/>}
        />

       <Route
              path='/contactUs'
              element={<ContactUs mode={mode}/>}
        />
         
      </Routes>
      </div>
    </>
  );
}

export default App;
