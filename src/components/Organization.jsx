import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

import refresh from '../assets/refresh-icon.png';
import addicon from '../assets/add-icon.png';

import '../components/CSS/home1.css'
import Headersuper from './Layout/Headersuper';

export default function Organization() {
    let navigate = useNavigate();
   
    return (
        <div>
             <Headersuper />
       
        
        <div className="row">
            


        <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">

        </div>
        <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
        <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Organisation Lists</h1><br/>

        {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

        <div className='text-right'>
        <img
                className="img_icon_size log text-right"
                // onClick={() => onClickReset()}
                src={addicon}
                alt="add-icon"
                title="add icon"
              /> &nbsp;&nbsp;&nbsp;
             <img
                className="img_icon_size log text-right"
                // onClick={() => onClickReset()}
                src={refresh}
                alt="refresh"
                
              />
              </div><br/>
       
            
        <table border="1">
            <tr>
                <th>Org Name</th>
                <th>Email</th>
                <th>Phone No.</th>
                <th>Address</th>
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
