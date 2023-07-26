
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
function Regstr({show,handleClose}) {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [numpermis,setNumpermis]=useState('')
  const [image,setImage]=useState([])
  const navigate=useNavigate()
  
  const handleRegister=()=>{
    axios.post('user/register',{
      name:name,
      email:email,
      password:password,
      phone:phone,
      numpermis:numpermis,
      image:image
    }).then((response)=>{
      
    if(response){
      navigate("/car")
    }
      
    }).catch((error)=>{
      if(error.response.data==="email already exists"){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'email exist',
         
        })
      }
      else {
      
        if(error.response.data.errors[0].msg==="password least 6 caracters"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'password least 6 caracters',
           
          })
        }
        if(error.response.data.errors[0].msg==="phone at least 8 caracters"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'phone at least 8 caracters',
           
          })
        }
        
        if(error.response.data.errors[0].msg==="please enter name"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'please enter name',
           
          })
        }
        if(error.response.data.errors[0].msg==="numpermis least 8 caracters"){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'numpermis least 8 caracters',
            
          })
        }
         

          
         
       }
      
    })
  }

  return (
    <>
   

      <Modal show={show} onHide={handleClose}>
      <Modal.Title>Register</Modal.Title>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Password </Form.Label>
        <Form.Control type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Phone</Form.Label>
        <Form.Control type="number" placeholder="Phone" onChange={(e)=>setPhone(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Numpermis</Form.Label>
        <Form.Control type="number" placeholder="Numpermis" onChange={(e)=>setNumpermis(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Image</Form.Label>
        <Form.Control type="text" placeholder="Image" onChange={(e)=>setImage(e.target.files[0])}/>
      </Form.Group>
     
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
          <Button variant="primary" onClick={handleRegister}>
            Save
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Regstr;