import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';

function Home2() {
  return (
    <>
      
        <Navbar bg="dark" variant="dark">
         
          <div className='col-lg-10 col-md-6 col-sm-12col-xs-12'>


            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <NavDropdown title="Dev" >
                <NavDropdown.Item >User Group</NavDropdown.Item>
                <NavDropdown.Item >LogOut</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>
       

        </Navbar>
        <div className='col-lg-1 col-md-6 col-sm-12col-xs-12'>
          </div>
        <br />


        <br />
     

    </>
  );
}

export default Home2;
