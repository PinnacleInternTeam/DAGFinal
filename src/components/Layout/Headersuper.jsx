import React ,{useState}from 'react'

//  import Icon from './src/assets/Icon1.png';
import Icon from '../../assets/dag_logo1.png'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Headersuper() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   
    return (
        <div>


            <div >

                <Navbar collapseOnSelect expand="lg" variant="dark" className='navcolor'>
                    <img src={Icon} className="Icon"></img>&nbsp;&nbsp;
              
                    <h2 className='text-white font-weight-bold'> DAG</h2>
                    

            
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto container text-white">
                                <Nav.Link className='navlink'><Link to="/org">Organization</Link> </Nav.Link>
                                <Nav.Link  className='navlink'><Link to="/users">Users</Link> </Nav.Link>
                                {/* <Nav.Link href="/User">User</Nav.Link> */}

                            </Nav>
                            <Nav className='col-lg-1 col-md-6 col-sm-12 col-xs-12 '>
                                <NavDropdown title="Dev"  >
                                     <NavDropdown.Item ><Link to="/user_group">User Group</Link></NavDropdown.Item>
                                    <NavDropdown.Item >  <Link to="#"   onClick={handleShow}>
                            Logout
                          </Link>
                          </NavDropdown.Item>
                                </NavDropdown>
                              

                            </Nav>
                        </Navbar.Collapse>
                  
                </Navbar>
            

            </div>
            <Modal show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                     <Modal.Header closeButton>
                    
                    <Modal.Title className='container'><h1 className='font-weight-bold '>CONFIRMATION</h1></Modal.Title>
                </Modal.Header>
          <Modal.Body>
            <h5>Are you sure you want to logout?</h5>
          </Modal.Body>
          <Modal.Footer>
         

            <button onClick={handleClose}   className="btn contact_reg btn_color"> NO</button>
            <button onClick={handleClose} className="btn contact_reg btn_color ">  YES</button>
          </Modal.Footer>
                </Modal>
          
           
            
        </div>
    )
}
