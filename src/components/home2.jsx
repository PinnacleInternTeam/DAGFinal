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
<form >
	
	<div className="container ">

		<div className="row-fluid"><h3>Add Category</h3> </div><br/>

		<section className="body">
			<div className="body-inner">    
				<div className="row form-group">
					<div className="control-group col-md-6 col-lg-6 col-sm-6 col-xs-6">
						<label className="control-label">Category Name <span >*</span></label>
						<div className="controls">
							<input name="cat_name" id="cat_name" type="text" className="form-control" value=""/>
							<span id = "category_result" className="form-input-info"></span>
						</div>
					</div>
					<div className="control-group col-md-4 col-lg-4 col-sm-4 col-xs-4">
						<label className="control-label">Status</label>
						<div className="controls">
							<input name="category_status" id="category_status" type="text" className="form-control" value="Active" readonly/>
							<span className="form-input-info" ></span>
						</div>
					</div>
				</div>
				<div className="row form-group">
					<div className="control-group col-md-10 col-lg-10 col-sm-10 col-xs-10">
						<br/><label className="control-label">Description</label>
						<div className="controls">
							<textarea rows="5" name="category_description" id="category_description"  className="form-control" ></textarea>
							<span className="form-input-info" ></span>
						</div>
					</div>
				</div>
				
				<div className="row form-group">
					<div className="control-group col-md-12 col-lg-12 col-sm-12 col-xs-12">
						<br/><label className="control-label" >* Indicates mandatory fields.</label>
					</div>
				</div>	
			
				<div className="row form-group">
					<div className="control-group col-md-10 col-lg-10 col-sm-10 col-xs-10 ">
						<br/><button type="submit" className="btn btn-default btn-md">SAVE</button>
						<button type="button" className="btn btn-default btn-md" >CANCEL></button>
					</div>
				</div>
			
			</div>
	   </section>
	   
 	</div>
		
</form>