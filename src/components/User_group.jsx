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

export default function User_group() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [editshow, editsetShow] = useState(false);
    const [deleteshow, deletesetShow] = useState(false);


    const handleClose = () => setShow(false);
    const edithandleClose = () => editsetShow(false);
    const deletehandleClose = () => deletesetShow(false);


    const handleShow = () => setShow(true);
    const edithandleShow = () => editsetShow(true);
    const deletehandleShow = () => deletesetShow(true);





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
                    <h1 style={{ fontFamily: "Serif", color: "#877bae" }} className="font-weight-bold ">UserGroup Lists</h1><br />
                    {/* <button><img src={refresh} alt="my image" style={{border:"none"}} /></button> */}

                    <div className='text-right'>
                    <button onClick={deletehandleShow}>Delete</button>
                        <button onClick={edithandleShow}>edit</button>



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

                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center body-inner no-padding table-responsive">


                    <table className='table table-bordered table-striped table-hover' border="1" id="datatable2" >
                        <tr className='headingsizes'>
                            <th>User Group</th>
                            <th>Operation</th>
                           
                            
                         </tr>
                        <tr>

                       </tr>
                    </table>
                    </div>
                </div>
                <div className="col-lg-1 col-md-12 col-sm-12 col-xs-12 text-left">
                </div>
          

            

                <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                    
                        <Modal.Title className='container'><h1 className='font-weight-bold '>ADD USERGROUP</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >

                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                            <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                              
                                                <div className="controls">
                                                <label className="control-label">User Group <span >*</span></label><br/>
                                                  <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                    <span id="category_result" className="form-input-info"></span>
                                                </div>
                                            </div>
                                            {/* <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                                <label className="control-label">Email<span >*</span></label>
                                                <div className="controls">
                                                    <input name="category_status" id="category_status" type="text" className="form-control" readonly />
                                                    <span className="form-input-info" ></span>
                                                </div>
                                            </div> */}
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
                        <button onClick={handleClose}    className="btn contact_reg btn_color "> CANCEL</button>
                        <button onClick={handleClose}  className="btn contact_reg btn_color">  ADD</button>
                    
                      
                    </Modal.Footer>
                </Modal>



                
              {/* edit modal */}
              <Modal show={editshow} onHide={edithandleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>

                        <Modal.Title className='container'><h1 className='font-weight-bold '>EDIT USERGROUP</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form >
                            <div className="container ">
                                <section className="body">
                                    <div className="body-inner">
                                        <div className="row form-group">
                                        <div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
                                              
                                              <div className="controls">
                                              <label className="control-label">User Group <span >*</span></label><br/>
                                                <input name="cat_name" id="cat_name" type="text" className="form-control" value="" />
                                                  <span id="category_result" className="form-input-info"></span>
                                              </div>
                                          </div>
                                           
                                               
                                            </div>
                                        </div>
                                   
                                </section>
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={edithandleClose} className="btn contact_reg btn_color"> CANCEL</button>
                        <button onClick={edithandleClose} className="btn contact_reg btn_color">  UPDATE</button>
                    </Modal.Footer>
                </Modal>


                     {/* delete modal */}
                     <Modal show={deleteshow} onHide={deletehandleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>

                        <Modal.Title className='container'><h1 className='font-weight-bold '>DEACTIVATE USERGROUP</h1></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <label className="control-label">Do you want to Delete this UserGroup?</label>
                        

                    
                       
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={deletehandleClose} className="btn contact_reg btn_color"> NO</button>
                        <button onClick={deletehandleClose} className="btn contact_reg btn_color">  YES</button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}
