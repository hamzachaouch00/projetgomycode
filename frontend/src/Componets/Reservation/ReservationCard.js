import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

import { Delete_resrv, Edit_resrv } from '../../Redux/Action/ReservAction';

const ReservationCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[car,setCar]=useState(el?.car)
  const[datedebut,setDatedebut]=useState(el?.datedebut)
  const[datefin,setDatefin]=useState(el?.datefin)
  const[user,setUser]=useState(el?.user)
  const[pricetotal,setPricetotal]=useState(el?.pricetotal)
  const handleEdit=()=>{
    dispatch(Edit_resrv(el._id,{car,datedebut,datefin,pricetotal}),handleClose(),window.location.reload())
  }
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el?.car} alt='404' />
      <Card.Body>
      <Card.Text>
         {el?.user}
        </Card.Text>
        <Card.Title>{el?.datedebut}</Card.Title>
        <Card.Text>
         {el?.datefin}
        </Card.Text>
        <Card.Text>
         {el?.pricetotal}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      <Button variant="danger" onClick={()=>dispatch(Delete_resrv(el._id),window.location.reload())}>Delete</Button>
      <Button variant="warning"  onClick={handleShow}>
       Edit
    </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Reservation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Car</Form.Label>
        <Form.Control type="text" placeholder="Enter Image" onChange={(e)=>setCar(e.target.value)} 
        value={car} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>datedebut</Form.Label>
        <Form.Control type="date" placeholder="Enter Model" onChange={(e)=>setDatedebut(e.target.value)} 
          value={datedebut}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>datefin</Form.Label>
        <Form.Control type="date" placeholder="Enter attribut" onChange={(e)=>setDatefin(e.target.value)} 
          value={datefin}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>pricetotal</Form.Label>
        <Form.Control type="number" placeholder="Enter Price" onChange={(e)=>setPricetotal(e.target.value)} 
          value={pricetotal}
        />
      </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Card.Footer>
    </Card>
    </div>
  )
}

export default ReservationCard