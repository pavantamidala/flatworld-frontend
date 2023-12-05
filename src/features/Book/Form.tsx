import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Form.css'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { resetForm, updateField } from './BookSlice';
const BookForm = () => {
    const dispatch = useAppDispatch();
    const bookForm = useAppSelector((state: RootState) => state.bookForm);
  
    const handleFieldChange = (field: string, value: any) => {
      dispatch(updateField({ field, value }));
    };
  
    const handleFormReset = () => {
      dispatch(resetForm());
    };
  return (
    <div className="book-form-container">

    <Form className="book-form"> 
      <Form.Group as={Row} controlId="formBookName">
        <Form.Label column sm={3}>
          Book Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" placeholder="Enter book name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formISBN">
        <Form.Label column sm={3}>
          Book ISBN no.
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" placeholder="Enter ISBN no." />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formCategory">
        <Form.Label column sm={3}>
          Book Category
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" placeholder="Enter book category" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formRowNo">
        <Form.Label column sm={3}>
          Row No.
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" placeholder="Enter row number" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formBookCount">
        <Form.Label column sm={3}>
          Book Count
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="number" placeholder="Enter book count" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formCost">
        <Form.Label column sm={3}>
          Cost
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="text" placeholder="Enter cost" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} controlId="formAvailability">
        <Form.Label column sm={3}>
          Availability
        </Form.Label>
        <Col sm={9}>
          <Form.Check
            type="switch"
            id="availabilitySwitch"
            label="Available"
          />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>

  );
};

export default BookForm;
