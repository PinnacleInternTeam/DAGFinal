import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import refresh from '../assets/refresh-icon.png';
import addicon from '../assets/add-icon.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


import '../components/CSS/home1.css'
import Headersuper from './Layout/Headersuper';
import Addorg from './Modals/Addorg';

export default function Organization() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    const handleAddOrg = (e) => {
        alert("yi")
        e.preventDefault();
        // console.log('The add was clicked.');
    }
    return (
        <div>
            <Headersuper />
            <div className="row">
                <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-center">
                </div>
                <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12 text-left"><br /><br />
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Organisation Lists</h1><br />
                    {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

                    <div className='text-right'>
                        <img
                            className="img_icon_size log text-right"
                            //   onClick={() => handleAddOrg()}
                            // onClick={handleShow}
                            onClick={handleShow}
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
                    </div><br />


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
          

            

                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                    
                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD ORGANIZATION</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >

                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Name <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email<span >*</span></label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Start Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Phone No.<span >*</span></label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">End  Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                <textarea rows="2"  name="category_description" id="category_description" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Org Logo <span >*</span></label>
                                                <div className="controls">
                                                    <input name="logo_name" id="logo_name" type="file" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                           
                                        </div>
                                      
                                        <div className="row form-group ">
                                            <div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12 text-right">
                                                <br /><label className="control-label" >* Indicates mandatory fields.</label>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={handleClose}   style={{ background: "#877bae" }} className="btn contact_reg "> CANCEL</button>
                        <button onClick={handleClose} style={{ background: "#877bae" }} className="btn contact_reg ">  ADD</button>
                    
                      
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
