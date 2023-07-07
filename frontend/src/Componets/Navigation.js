import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import AddCar from './Car/AddCar';
import Resevationlist from './Reservation/Resevationlist';

const Navigation = ({setSearch}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const adminshow =(e)=>{
    
    if (e.role==='admin'){
      
      handleShow()
    }
    
  }
  return (
    <div> 
    <Navbar bg="light" expand="lg">
    <Container fluid>
      
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          
         
          <NavDropdown title="Link" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <AddCar 
            show={show}
            adminshow={adminshow}
          />
          <Resevationlist 
             show={show}
             handleShow={handleShow}
          />
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e)=>setSearch(e.target.value)}
          />
          
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navigation