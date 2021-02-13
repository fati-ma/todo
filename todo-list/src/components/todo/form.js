import React from 'react';
import { Button, Form } from 'react-bootstrap';


function TodoForm(props) {

  return (
    <>
      <h3>Add Item</h3>
   
      <Form onSubmit={props.handleSubmit}>
        <Form.Group controlId="formBasicEmail1">
          <Form.Label><h6>To Do Item</h6></Form.Label>
          <Form.Control  onChange={props.handleInputChange} type="text" id='add' name="text" placeholder="Add To Do List Item" />
        </Form.Group>


        <Form.Group controlId="formBasicEmail2">
          <Form.Label>Assigned To</Form.Label>
          <Form.Control  onChange={props.handleInputChange} type="text" id ='assign' name="assignee" placeholder="Assigned To" />
        </Form.Group>

        <Form.Group controlId="formBasicRange">
          <Form.Label>Difficulty Rating</Form.Label>
          <Form.Control defaultValue="1" type="range" min="1" max="5" name="difficulty" onChange={props.handleInputChange}type="range" />
        </Form.Group>
     
        <Button variant="primary" type="submit"> Add Item</Button>
      </Form>
    </>
  );

}

export default TodoForm;