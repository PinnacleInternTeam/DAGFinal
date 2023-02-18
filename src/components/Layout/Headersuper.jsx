import React from 'react'

//  import Icon from './src/assets/Icon1.png';
import Icon from '../../assets/dag_logo1.png'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
export default function Headersuper() {
    return (
        <div>


            <div >

                <Navbar collapseOnSelect expand="lg" variant="dark" className='navcolor'>
                    <img src={Icon} className="Icon"></img>&nbsp;&nbsp;
              
                    <h2 className='text-white font-weight-bold'> DAG</h2>
                    

            
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto container text-white">
                                <Nav.Link ><Link to="/org">Organization</Link> </Nav.Link>
                                <Nav.Link ><Link to="/users">Users</Link> </Nav.Link>
                                {/* <Nav.Link href="/User">User</Nav.Link> */}

                            </Nav>
                            <Nav className='col-lg-1 col-md-6 col-sm-12 col-xs-12 '>
                                <NavDropdown title="Dev"  >
                                     <NavDropdown.Item ><Link to="/user_group">User Group</Link></NavDropdown.Item>
                                    <NavDropdown.Item >LogOut</NavDropdown.Item>
                                </NavDropdown>
                              

                            </Nav>
                        </Navbar.Collapse>
                  
                </Navbar>
            

            </div>




        </div>
    )
}
