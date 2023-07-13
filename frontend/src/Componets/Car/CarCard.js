import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Delete_car, Edit_car } from '../../Redux/Action/CarAction';

import AddReservation from '../Reservation/AddReservation';
import { Get_user, get_one_user } from '../../Redux/Action/UserAction';

const CarCard = ({el}) => {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[model,setModel]=useState(el?.model)
  const[image,setImage]=useState(el?.image)
  const[attribut,setAttribut]=useState(el?.attribut)
  const[price,setPrice]=useState(el?.price)
  useEffect(()=>{
    var token =localStorage.getItem("token")
    dispatch(Get_user())
    dispatch(get_one_user(token))
  })
  const role= useSelector((state)=>state.UserReducer.oneuser)
  const handleEdit=()=>{
    dispatch(Edit_car(el._id,{model,image,attribut,price}),handleClose(),window.location.reload())
  }
  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el?.image} alt='404' />
      <Card.Body>
        <Card.Title>{el?.model}</Card.Title>
        <Card.Text>
         {el?.attribut}
        </Card.Text>
        <Card.Text>
         {el?.price}
        </Card.Text>
        
      </Card.Body>
      <Card.Footer>
      {role.role==='admin'? <Button variant="danger" onClick={()=>dispatch(Delete_car(el._id),window.location.reload())}>Delete</Button>:null}
      {role.role==='admin'? <Button variant="warning"  onClick={handleShow}>
       Edit
    </Button>:null}
    {/* apple Componet add reservations */}
    <AddReservation
    carId={el._id}
      show={show}
      handleClose={handleClose}
    />
    

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="formBasic">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Enter Image" onChange={(e)=>setImage(e.target.value)} 
        value={image} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Model</Form.Label>
        <Form.Control type="text" placeholder="Enter Model" onChange={(e)=>setModel(e.target.value)} 
          value={model}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>attribut</Form.Label>
        <Form.Control type="text" placeholder="Enter attribut" onChange={(e)=>setAttribut(e.target.value)} 
          value={attribut}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmai">
        <Form.Label>Price</Form.Label>
        <Form.Control type="text" placeholder="Enter Price" onChange={(e)=>setPrice(e.target.value)} 
          value={price}
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

export default CarCard