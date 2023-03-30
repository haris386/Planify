import React from 'react'
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
import {auth, signInWithEmailAndPassword } from "../Firebase/FirebaseConfig.js"

const signInUser = () => {
    let lemail = document.getElementById('lemail').value;
    let lpassword = document.getElementById('lpassword').value;
    console.log(lemail, lpassword);
    signInWithEmailAndPassword(auth, lemail, lpassword)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        });
}

export default function SignIn() {
    return (
        <>
            <Container className='MainContainer'>
                <Card style={{ padding: '4%', boxShadow: '0px 3px 21px gray', width: '50%', margin: 'auto' }}>
                    <img src={logo} alt="logo" style={{ width: '60%', marginLeft: '20%' }} />
                    <Row style={{ display: 'block' }}>
                        <Col sm={2}></Col>
                        <Col>
                            <TextField id="lusername" label="Name" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />

                        </Col>
                        <Col>
                            <TextField id="lemail" label="Email" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />
                        </Col>
                        <Col>
                            <TextField id="lpassword" label="Password" variant="outlined" className='inputFields' style={{ marginTop: "5%", width: '100%' }} />
                        </Col>
                        <Col>
                            <Button variant="contained" style={{ marginTop: '5%', marginLeft: '40%' }} onClick={signInUser}>Sign In</Button>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Card>
            </Container>
        </>
    )
}
