import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Regstr from './Regstr';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
const Logn = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const navigate=useNavigate()

    const handleShow = () => setShow(true);
    const handleLogin=()=>{
      axios.post('user/login',{
        email:email,
        password:password
      }).then((response)=>{
        console.log(response)
        if(response){
          localStorage.setItem("token",response.data.token)
          navigate("/car")
        }
          
        }).catch((error)=>{
          
          if(error.response.data==="email does not exists"){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'email does not exists',
              
            })
          }
          else{
            
            if(error.response.data==="wrong password"){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'wrong password',
                footer: '<a href="">pls entre corect password</a>'
              })
            }else
          
            if(error.response.data.errors[0].msg==="password least 6 caracters"){
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'password least 6 caracters',
                
              })
            }
          }
      })
    }

  return (
    <div className='ins'>
    <h1>LOGIN</h1>
    <div className="inscr">
    
     <Card style={{ backgroundColor:'red', width: '20rem' }}>
      <Card.Body>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Email </Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='inf'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        
      </Form.Group>
      
      
     <div className='bnt'>
     
      <Button onClick={handleLogin} style={{background : 'red', color:'white', borderColor: 'white' }} >
        Connect
      </Button>
      

      <Button onClick={handleShow} style={{background : 'red', color:'white', borderColor: 'white' }} >
        Regester
      </Button>
      </div>
    </Form>
      </Card.Body>
    </Card>
    
    </div>
    <Regstr 
        show={show}
        handleClose={handleClose}
    />
    </div>
  )
}

export default Logn