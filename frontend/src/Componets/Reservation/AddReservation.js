import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { Add_car } from '../../Redux/Action/CarAction';

const AddReservation = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch=useDispatch()
    const[car,setCar]=useState("")
    const[datedebut,setDatedebut]=useState("")
    const[datefin,setDatefin]=useState("")
    const[pricetotal,setPricetotal]=useState("")
    const handleAdd=()=>{
        dispatch(Add_car({car,datedebut,datefin,pricetotal}),handleClose())
    }
  return (
    <div>
    <Button variant="primary" style={{borderRadius:"50%"}} onClick={handleShow}>
     Reservation
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>car</Form.Label>
        <Form.Control type="text" placeholder="Enter image" onChange={(e)=>setCar(e.target.value)} />
      </Form.Group>
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