
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import AddCar from './Car/AddCar';

import { Link } from 'react-router-dom';

const Navigation = ({setSearch}) => {
  
 

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
          <Link to='/userProfil'>
            <NavDropdown.Item href="#action3">Profil</NavDropdown.Item>
            </Link>
            <Link to='/listereservation'>
            <NavDropdown.Item href="#action4">
             liste resrvation 
            </NavDropdown.Item>
            </Link>
            <NavDropdown.Divider />
            
          </NavDropdown>
          <AddCar />
          
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