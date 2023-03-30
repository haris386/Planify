import React from 'react'
import logo from '../Auth/logo.png';


// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

// MATERIAL UI
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import IconButton from '@mui/material/IconButton';


export default function Dashboard() {
    return (
        <>
            {/* Navbar */}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ overflowWrap: 'anywhere' }}>
                        <img src={logo} alt="logo" style={{ width: '35%' }} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Haris" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.4">
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* INPUT FIELDS */}
            <Container style={{ marginTop: '5%' }}>
                <Row>
                    <Col xs={12} md={5}>
                        <TextField id="standard-basic" label="Task Name" variant="standard" style={{ width: '100%' }} />
                    </Col>
                    <Col xs={12} md={5}>
                        <TextField id="standard-basic" label="Task Description" variant="standard" style={{ width: '100%' }} />
                    </Col>
                    <Col xs={12} md={2}>
                        <Button variant="contained" endIcon={<AddCircleOutlinedIcon />} style={{ marginTop: '0%' }}>
                            Create
                        </Button>
                    </Col>
                </Row>
            </Container>

            {/* CARDS */}
            <Container style={{ marginTop: '5%' }}>
                <Row>
                    <Col xs={12} md={4} >
                        <Card sx={{ minWidth: 275 }} style={{ borderRadius: '5px', boxShadow: '0px 3px 21px gray' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom style={{ color: 'blue' }}>
                                    Date & Time
                                </Typography>
                                <Typography variant="h5" component="div" style={{ color: 'crimson' }}>
                                    Task Title
                                </Typography>
                                <Typography variant="body2" style={{ overflowWrap: 'anywhere', color: '#018748' }}>
                                    Task Description
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <IconButton aria-label="delete">
                                    <DeleteForeverOutlinedIcon style={{ color: 'red' }} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
