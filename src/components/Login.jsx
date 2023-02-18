import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CSS/Container.css'

import Modal from 'react-bootstrap/Modal';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";

export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    const loginn = () => {
        if (name == "sam" && password == "admin") {

            navigate('/home1');
            localStorage.setItem("authenticated", 1);

        } else if (name == "sam" && password == "user") {
            navigate('/home2');
            localStorage.setItem("authenticated", 1);

        } else {
            alert("invalid");
        }
    };
    return (

        <div>
            <Header></Header>
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
                            <input type="text" style={{ borderBottom: "1px solid #000000" }} className="form-control form_contct" onChange={(e) => setName(e.target.value)}></input><br />
                            <label>Username*</label><br /><br />
                            <input type="text" style={{ borderBottom: "1px solid #000000" }} className="form-control form_contct" onChange={(e) => setPassword(e.target.value)}></input><br />
                            <label>Password*</label><br /><br /><br />
                            <div className='text-center'>
                                <button style={{ background: "#877bae" }} className="btn contact_reg " onClick={loginn}>sign in </button>
                            </div>

                        </div>

                    </Modal.Body>

                    {/* <Modal.Footer>
<Button variant="secondary">Close</Button>
<Button variant="primary">Save changes</Button>
</Modal.Footer> */}
                </Modal.Dialog>
            </div>
            <footer className="footer">
                <Footer></Footer>
            </footer>


        </div>
    );
}
