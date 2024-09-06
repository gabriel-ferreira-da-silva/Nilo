import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbarheader(){
    return (
        <>
        <Navbar bg="primary" variant="dark">
        <Container>
            <Navbar.Brand  className="justify-content-start" href="#home">NILO</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <a>@username</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Navbar bg="light" variant="light" style={{ maxHeight: '50px' }}>
            <Container fluid>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                
                <Nav.Link href="/productlist">Home</Nav.Link>
                <Nav.Link href="/product/add">Add</Nav.Link>
                <Nav.Link href="#action2">about</Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    );
  }

export default Navbarheader;