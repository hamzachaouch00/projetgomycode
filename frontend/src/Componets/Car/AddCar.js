import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Add_car } from '../../Redux/Action/CarAction';
import { Get_user, get_one_user } from '../../Redux/Action/UserAction';
import axios from 'axios';


const AddCar = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const dispatch=useDispatch()
    const[model,setModel]=useState("")
    const[image,setImage]=useState([])
    const[attribut,setAttribut]=useState("")
    const[price,setPrice]=useState("")
    
    useEffect(()=>{
      var token =localStorage.getItem("token")
      dispatch(Get_user())
      dispatch(get_one_user(token))
    },[dispatch])
    const role= useSelector((state)=>state.UserReducer.oneuser)
    const handleAdd=async()=>{
      const formData= new FormData()
      formData.append('file',image)
      formData.append('upload_preset','ml_default')
      await axios.post('http://api.cloudinary.com/v1_1/dvut377jf/upload',formData)
      .then((res)=>{
          // dispatch (post_prodact({subject:subject,image:res.data.url,name:name}))
          dispatch(Add_car({model,image:res.data.url,attribut,price}),handleClose())
      })







     
        // dispatch(Add_car({model,image,attribut,price}),handleClose())
    }
  return (
    <div>
   {role.role==='admin'? <Button variant="primary"  onClick={handleShow}>
        Add Car
    </Button>:null}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Image</Form.Label>
        <Form.Control type="file" placeholder="Enter image" onChange={(e)=>setImage(e.target.files[0])} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Enter Model" onChange={(e)=>setModel(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>Attribut</Form.Label>
        <Form.Control type="text" placeholder="Enter Attribut" onChange={(e)=>setAttribut(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="primary" onClick={handleAdd}>
            Add Car
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddCar