import './App.css';
import Navbar from './components/Navbar';
import UserReg,{ action as manipulateEventAction }  from "./components/UserReg.js";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Statickapp from './components/Statickapp';
import Janam from './components/Janam';
import JanamaKDetails from './components/JanamaKDetails';
import { useState } from 'react';
import GooglePay from './components/GooglePay';
import UserRegDetails, { loader as userDetailsLoader } from './components/UserRegDetails';
import Blog from './components/Blog.js';
function App() {
  const [jData, setJData] = useState('');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  const toggleMode = (suryaV,meshV,chndraV,rushabhV,mangalV,mithuenV,budhaV,karkaV,guruV,seehaV,shukraV,kanyaV,shaniV,tulaV,rahuV,vrashukV,ketuV,dhanuV,harshalV,makarV,nepV,kumbhV,pluV,minV) => {
    setJData({
      suryaK:suryaV,
      meshK:meshV,
      chndraK:chndraV,
      rushabhK:rushabhV,
      mangalK:mangalV,
      mithuenK:mithuenV,
      budhaK:budhaV,
      karkaK:karkaV,
      guruK:guruV,
      seehaK:seehaV,
      shukraK:shukraV,
      kanyaK:kanyaV,
      shaniK:shaniV,
      tulaK:tulaV,
      rahuK:rahuV,
      vrashukK:vrashukV,
      ketuK:ketuV,
      dhanuK:dhanuV,
      harshalK:harshalV,
      makarK:makarV,
      nepK:nepV,
      kumbhK:kumbhV,
      pluK:pluV,
      minK:minV
    });
  }
  return (
   <>
   <Router>
        <Navbar/>
        <Alert alert={alert}/>
     
         <div className="container sectionone my-3">   

         <div className="row">
            <div className='col-xl-8 col-lg-8 '>
              <div className='box-wrapper'>
              <Routes>
                <Route exact path="/userReg" action={manipulateEventAction}
                element={              
                  <UserReg></UserReg>
                  }
                  />
                  <Route exact path="/googlePay" element={<GooglePay/>} />       
                <Route exact path="/about" element={<About/>} />       
                <Route exact path="/staticK" element={<Statickapp/>} />   
                <Route exact path="/janamk" element={<Janam toggleMode={toggleMode}  showAlert={showAlert}/>}/>    
                <Route exact path="/janamKD" element={<JanamaKDetails jData={jData}/>}/>    
                <Route exact path="/userRegDetails" element={<UserRegDetails/>} />    
                

              </Routes>
              </div>
              </div>
              <Blog/>           
         </div>
        </div>
        <Footer/>
      </Router>
   </>
  );
}

export default App;
