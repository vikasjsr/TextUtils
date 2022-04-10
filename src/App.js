
import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import About from './components/About';
import { useState } from 'react';


import { BrowserRouter as Router,Routes, Route } from "react-router-dom";


function App() {
 
  const [mode,setMode] = useState('light');//whether dark mode is enabled or not;

  const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
      }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';

      }
  }

  return (

   
     
    <>
    <Router>
      <Navbar title = "TextUtils" about = "AboutUs" mode ={mode} toggleMode = {toggleMode}/>
        <div className="container my-3">

        <Routes>
            <Route exact path="/about" element = {<About />}/>
            {/* always use exact path in react router otherwise it will take its partial path*/  }
            <Route exact path="/" element = {<TextForms textArea = "Enter text here:" mode ={mode}/>} />  
        </Routes>
        </div>
      </Router> 
    </>
 
     

  );
}

export default App;
