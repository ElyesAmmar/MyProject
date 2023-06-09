import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { getProducts } from '../JS/actions/products';

function AddModal() {
  const [show, setShow] = useState(false);
  const [Name, setName] = useState('');
  const [Stock, setStock] = useState('');
  const [Image, setImage] = useState('');
  const [Price, setPrice] = useState('');
  const [Categorie, setCategorie] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Add= async()=>{

    try {
      await axios.post('/api/products/addproduct', {Name,Stock,Image,Price,Categorie})
      getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Stock</Form.Label>
        <Form.Control  placeholder="stock" onChange={(e)=>setStock(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price</Form.Label>
        <Form.Control  placeholder="Price" onChange={(e)=>setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categorie</Form.Label>
        <Form.Control type="text" placeholder="Categorie" onChange={(e)=>setCategorie(e.target.value)} />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();Add()}}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;