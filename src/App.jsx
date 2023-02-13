// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
//import './App.css'
import "./styles/bootstrap/css/bootstrap.min.css";
import "./styles/CustomisedStyle.css";
import Footer from "./components/Layout/Footer"
import Header from "./components/Layout/Header";
import Home3 from "./components/home3";
import Home4 from "./components/Home4";

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <Header/>

    </header>
    <Home4></Home4>
    
  
 
    <footer className="footer">
    <Footer></Footer>
    </footer>
   
    </>
  )
}

export default App
