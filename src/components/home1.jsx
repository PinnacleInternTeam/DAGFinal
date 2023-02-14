import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import refresh from '../assets/download.png';
import '../components/CSS/home1.css'
import Headersuper from './Layout/Headersuper';

export default function Home1() {
    let navigate = useNavigate();
    let aut = localStorage.getItem("authenticated")
    console.log(aut);
    if (!aut) {
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }
    const logout = () => {
        navigate('/Login');
        localStorage.setItem("authenticated", false);
    }
    return (
        <div>
             <Headersuper />
       
        
        <div className="row">
            


        <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">

        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
        <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Dashboard</h1><br/>

        {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

        <div className='text-right'>
             <img
                className="img_icon_size log text-right"
                // onClick={() => onClickReset()}
                src={refresh}
                alt="refresh"
                title="Refresh"
              />
              </div>
       
            
        <table border="1">
            <tr>
                <th>Org Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>Operation</th>
            </tr>
            <tr>
                
            </tr>
        </table>
        </div>
        <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
        </div>
    </div>
    </div>

        
      
            

    )
}
