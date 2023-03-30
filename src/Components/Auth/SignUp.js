import React, { useState } from 'react'
import '../Auth/style.css'
import logo from './logo.png';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';

// FIREBASE
import { auth, createUserWithEmailAndPassword } from "../Firebase/FirebaseConfig.js"

// SIGNUP USERS
const signUpUser = () => {
    let sname = document.getElementById('susername').value;
    let semail = document.getElementById('semail').value;
    let spassword = document.getElementById('spassword').value;
    console.log(sname, semail,spassword)
    createUserWithEmailAndPassword(auth, sname, semail, spassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // setDoc(doc(db, "Users", user.uid), {
            //     name: name,
            //     email: email,
            //     password: password
            // });

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode)
            // ..
        });
}

export default function SignUp() {
    return (
        <>
            <Container className='MainContainer'>
                <Card style={{ padding: '4%', boxShadow: '0px 3px 21px gray', width: '50%', margin: 'auto' }}>
                    <img src={logo} alt="logo" style={{ width: '60%', marginLeft: '20%' }} />
                    <Row style={{ display: 'block' }}>
                        <Col sm={2}></Col>
                        <Col>
                            <TextField id="susername" label="Name" name="username" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />

                        </Col>
                        <Col>
                            <TextField id="semail" label="Email" name="email" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />
                        </Col>
                        <Col>
                            <TextField id="spassword" label="Password" name="password" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />
                        </Col>
                        <Col>
                            <Button variant="contained" style={{ marginTop: '5%', marginLeft: '40%' }} onClick={signUpUser}>Sign Up</Button>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
