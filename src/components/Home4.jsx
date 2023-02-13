import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Home4() {
    return (
        <div>
            <br /><br />

            <div
                className="modal show mt-5"
                style={{ display: 'block', position: 'initial' }}
            >
                <Modal.Dialog>
                    <Modal.Header >
                        <Modal.Title ><h1 className='font-weight-bold'>SIGN IN</h1></Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <br /><br />
                        <div className='form-group form_top'>
                            <input type="text" style={{ borderBottom: "1px solid #000000" }} className="form-control form_contct"></input><br />
                            <label>Email*</label><br /><br />
                            <input type="text" style={{ borderBottom: "1px solid #000000" }} className="form-control form_contct"></input><br />
                            <label>Password*</label><br /><br /><br />
                            <div className='text-center'>
                                <button style={{ background: "#877bae" }} className="btn contact_reg ">sign in </button>
                            </div>

                        </div>

                    </Modal.Body>

                    {/* <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer> */}
                </Modal.Dialog>
            </div>




        </div>
    )
}
