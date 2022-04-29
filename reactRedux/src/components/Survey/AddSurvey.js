import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddSurvey = props => {
  return (
    <Form onSubmit={props.handleAddTodo}>
      <Form.Group controlId="item">
        <Form.Label>What you want to do?</Form.Label>
        <Form.Control type="text" name="todo" placeholder="Enter todo" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Survey
      </Button>
    </Form>
  );
};

export default AddSurvey;