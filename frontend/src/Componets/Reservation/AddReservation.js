import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';

import { Add_resrv } from '../../Redux/Action/ReservAction';
import { Get_user, get_one_user } from '../../Redux/Action/UserAction';

const AddReservation = ({carId}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    
    const[datedebut,setDatedebut]=useState("")
    const[datefin,setDatefin]=useState("")
    const[pricetotal,setPricetotal]=useState("")
    useEffect(()=>{
      var token =localStorage.getItem("token")
      dispatch(Get_user())
      dispatch(get_one_user(token))
    })
    const userId= useSelector((state)=>state.UserReducer.oneuser)
    const handleAdd=()=>{
     var userid=userId._id
        dispatch(Add_resrv({carId,userid,datedebut,datefin,pricetotal}),handleClose())
    }
  return (
    <div>
    <Button  variant="primary" onClick={handleShow}>
     Reservation
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>datedebut</Form.Label>
        <Form.Control type="date" placeholder="Enter Model" onChange={(e)=>setDatedebut(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>datefin</Form.Label>
        <Form.Control type="date" placeholder="Enter Attribut" onChange={(e)=>setDatefin(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>pricetotal</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" onChange={(e)=>setPricetotal(e.target.value)} />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> 
          <Button variant="primary" onClick={handleAdd}>
            Add Reservation
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddReservation