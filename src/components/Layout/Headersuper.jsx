import React from 'react'

//  import Icon from './src/assets/Icon1.png';
import Icon from '../../assets/dag_logo1.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Headersuper() {
    return (
        <div>


            <div>

                <Navbar collapseOnSelect expand="lg" variant="dark" className='navcolor'>
                    <img src={Icon} className="Icon"></img>&nbsp;&nbsp;
                    <h2 className='text-white font-weight-bold'> DAG</h2>

                    


                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#organization">Organization</Nav.Link>
                                <Nav.Link href="#User">User</Nav.Link>

                            </Nav>
                            <Nav>
                                <NavDropdown title="Dev" >
                                     <NavDropdown.Item >User Group</NavDropdown.Item>
                                    <NavDropdown.Item >LogOut</NavDropdown.Item>
                                </NavDropdown>
                              

                            </Nav>
                        </Navbar.Collapse>
                  
                </Navbar>

            </div>




        </div>
    )
}
