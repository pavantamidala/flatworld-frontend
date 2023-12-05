import React, { useEffect } from "react"
import { Form, Row, Col, Button } from "react-bootstrap"
import "./BookForm.css"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { RootState } from "../../app/store"
import { resetForm, updateField, updateId } from "./BookFormSlice"
import { addBook } from "../BrowseBooks/BrowsBooksSlice"
const BookForm = () => {
  const dispatch = useAppDispatch()
  const bookForm = useAppSelector((state: RootState) => state.bookForm)
  const id = useAppSelector((state: RootState) => state.bookForm.id)


  const handleFieldChange = (field: string, value: any) => {
    dispatch(updateField({ field, value }))
  }

  const handleFormReset = () => {
    dispatch(resetForm())
  }
  const handleSubmit = async() => {
   await dispatch(updateId())
   dispatch(addBook(bookForm))

  }
  return (
    <div className="book-form-container">
      <Form
        className="book-form"
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit(/* pass form data */)
          return
        }}
      >
        <Form.Group as={Row} controlId="formBookName">
          <Form.Label column sm={3}>
            Book Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={(e) => handleFieldChange("bookName", e.target.value)}
              placeholder="Enter book name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formISBN">
          <Form.Label column sm={3}>
            Book ISBN no.
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={(e) => handleFieldChange("isbn", e.target.value)}
              placeholder="Enter ISBN no."
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formCategory">
          <Form.Label column sm={3}>
            Book Category
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={(e) => handleFieldChange("category", e.target.value)}
              placeholder="Enter book category"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formRowNo">
          <Form.Label column sm={3}>
            Row No.
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={(e) => handleFieldChange("rowNo", e.target.value)}
              placeholder="Enter row number"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formBookCount">
          <Form.Label column sm={3}>
            Book Count
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="number"
              onChange={(e) => handleFieldChange("bookCount", e.target.value)}
              placeholder="Enter book count"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formCost">
          <Form.Label column sm={3}>
            Cost
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              onChange={(e) => handleFieldChange("cost", e.target.value)}
              placeholder="Enter cost"
            />
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
              onChange={(e) => {
                handleFieldChange("availability", e.target.checked)
                console.log("hello")
              }}
              label="Available"
            />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default BookForm
