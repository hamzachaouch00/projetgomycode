import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Edit_user } from '../../Redux/Action/UserAction';


const UserCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  
  const[name,setName]=useState(el?.name)
  const[email,setEmail]=useState(el?.email)
  const[password,setPassword]=useState(el?.password)
  const [phone,setPhone]=useState(el?.phone)
  const [numpermis,setNumpermis]=useState(el?.numpermis)
  const [image,setImage]=useState(el?.image)
  const handleEdit=()=>{
    dispatch(Edit_user(el._id,{name,email,password,numpermis,image,phone}),handleClose())
  }
  return (
    <>
    <Card style={{ width: '25rem' }}>
    <Card.Img variant="top" src={el?.image} alt='404' />
    <Card.Body>
      <Card.Title>{el?.nome}</Card.Title>
      <Card.Text>
       {el?.email}
       {el?.password}
       {el?.numpermis}
       {el?.phone}

      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    
    <Button variant="warning"  onClick={handleShow}>
     Edit
  </Button>
    
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"onChange={(e)=>setName(e.target.value)} value={name}/>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"  onChange={(e)=>setEmail(e.target.value)} value={email}/>
        
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} value={password}/>
        </Form.Group>
          <Form.Label>Numpermis</Form.Label>
          <Form.Control type="date" placeholder="Numpermis" onChange={(e)=>setNumpermis(e.target.value)} value={numpermis} />
          <Form.Label>Image</Form.Label>
          <Form.Control type="text" placeholder="Select your picture" onChange={(e)=>setImage(e.target.value)} value={image}/>
          <Form.Label>Phone</Form.Label>
          <Form.Control type="number" placeholder="Enter phone number" onChange={(e)=>setPhone(e.target.value)} value={phone} />
          
      </Form>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
          <Button variant="primary"  onClick={handleEdit}>
            Save Changes
          </Button>
         
        </Modal.Footer>
      </Modal>
      </Card.Footer>
      </Card>
    </>
  )
}

export default UserCard