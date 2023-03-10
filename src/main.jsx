import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter,Route, Routes} from "react-router-dom";
import Routefile from './Routes/Routefile';
import Login from './components/Login';
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import App from './App'
import Home3 from './components/Home3';
import Organization from './components/Organization';
import Addorg from './components/Modals/Addorg';
import Users from './components/Users'
// import User_group from './components/User_group'
import User_group from './components/User_group'
import "./styles/CustomisedStyle.css";


// import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>

  <React.StrictMode>
  <Routes>
                <Route exact path="/" element={ <Login/>} />
                  <Route exact path="/login" element={<Login/>} /> 
                  <Route exact path="/home1" element={<Home1/>} /> 
                  <Route exact path="/home2" element={<Home2/>} /> 
                  <Route exact path="/home3" element={<Home3/>} />
                  <Route exact path="/org" element={<Organization/>} />
                  <Route exact path="/users" element={<Users/> }/>
                  <Route exact path="/user_group" element={<User_group></User_group> }/>
                  {/* <Route exact path="/user_group" element={<User_group/> }/> */}
                  {/* <Route exact path="/Addorg" element={<Addorg/>} /> */}
                 
                {/* <Route element={<Routefile/>} /> */}
  </Routes>
   
  </React.StrictMode>
  </BrowserRouter>,

)
