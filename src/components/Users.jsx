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
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">Users Lists</h1><br />
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
                            <th>User Name</th>
                            <th>Org Name</th>
                            <th>User Group</th>
                            <th>Email</th>
                            <th>Phone No.</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Deactivate</th>
                        </tr>
                        <tr>

                        </tr>
                    </table>
                </div>
                <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
                </div>
                {/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
         */}




                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>

                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD USERS</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >

                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Full Name <span >*</span></label>
                                                <div className="controls">
                                                    <input name="full_name" id="full_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Organization Belongs<span >*</span></label>
                                                <div className="controls">
                                                    <input name="org_belongs" id="org_belongs" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">UserName <span >*</span></label>
                                                <div className="controls">
                                                    <input name="username" id="username" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Phone No.<span >*</span></label>
                                                <div className="controls">
                                                    <input name="user_phone" id="user_phone" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email <span >*</span></label>
                                                <div className="controls">
                                                    <input name="user_email" id="user_email" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2" name="user_address" id="user_address" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Password <span >*</span></label>
                                                <div className="controls">
                                                    <input name="user_password" id="user_password" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                            <label className="control-label">Confirm Password <span >*</span></label>
                                                <div className="controls">
                                                    <input name="user_confpass" id="user_confpass" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                        </div>
                                      
                                        {/* <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">End Date <span >*</span></label>
                                                <div className="controls">
                                                    <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <br /><label className="control-label">Address</label>
                                                <div className="controls">
                                                    <textarea rows="2"  name="category_description" id="category_description" className="form-control" ></textarea>
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div>
                                        </div> */}
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
                        <button onClick={handleClose} className="btn contact_reg btn_color "> CANCEL</button>
                        <button onClick={handleClose} className="btn contact_reg btn_color">  ADD</button>

                        {/* <Button  onClick={handleClose}>
                            CANCEL
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            ADD
                        </Button> */}
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
