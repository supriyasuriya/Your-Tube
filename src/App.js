import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar';
import Allroutes from "../src/Allroutes"
import { BrowserRouter as Router } from 'react-router-dom';
import Drawerslidebar from './components/Leftsidebar/Drawerslidebar';

function App() {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none"
  });
  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({
        display: "flex",
      });
    }
    else {
      settoggledrawersidebar({
        display: "none",
      });
    }
  }
  const [editcreatechanelbtn, seteditcreatechanelbtn] = useState(false);
  const [videouploadpage, setvideouploadpage] = useState(false);
  return (
    <Router>
      <Navbar seteditcreatechanelbtn={seteditcreatechanelbtn} toggledrawer={toggledrawer} />
      <Drawerslidebar  toggledraw={toggledrawer} toggledrawersidebar={toggledrawersidebar}/>
      <Allroutes/>
    </Router>
  );
}

export default App;
