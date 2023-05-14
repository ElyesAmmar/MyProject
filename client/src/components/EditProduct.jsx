import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { getProducts } from '../JS/actions/products';

 


function EditModal(id) {
  const [show, setShow] = useState(false);
  
  // const product = useSelector((state)=> state.productReducer.product) 
  // const [newProduct, setNewProduct] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [product, setProduct] = useState({})

  // const Open= ()=>{
  // dispatch(getProductById(id))
  
  // }

const Open= async()=>{
    try {
      let result = await axios.get(`/api/products/product/${id.id}`)
      setProduct(result.data.response)
     
    } catch (error) {
      console.log(error)
    }
}
console.log(product)
  // console.log(newProduct)
 const handlechange =(e)=>{
      // e.preventDefault()
      setProduct({...product, [e.target.name]: e.target.value})
      
 }


  const Edit= async()=>{
    try{
       await axios.put(`/edit/${id.id}`, product )
       getProducts()
    }catch(error){
        console.log(error)
    }
  }



  return (
    <>
      <Button variant="outline-secondary" onClick={()=>{handleShow();Open()}}>
        show more
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{product.Name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name : {product.Name}</Form.Label>
        <Form.Control type="text" name={product.Name} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Stock : {product.Stock}</Form.Label>
        <Form.Control  name={product.Stock} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Price : {product.Price} </Form.Label>
        <Form.Control  name={product.Price} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Categorie : {product.Categorie}</Form.Label>
        <Form.Control type="text" name={product.Categorie} onChange={handlechange} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Image </Form.Label>
        <Form.Control type="text" name={product.Image} onChange={handlechange}  />
      </Form.Group>

    </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger">Delete product</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{handleClose();Edit()}}>
            Edit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;